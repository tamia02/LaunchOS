import { NextResponse } from 'next/server'
import sql from '@/lib/db'
import { getGeminiModel } from '@/lib/gemini/client'
import { ENGINE_PROMPTS } from '@/lib/gemini/prompts'

export async function POST(req: Request) {
    try {
        const { idea, userId } = await req.json()

        if (!idea || !userId) {
            return NextResponse.json({ error: 'Missing idea or userId' }, { status: 400 })
        }

        // 1. Check user usage (simplified for Neon)
        const [user] = await sql`
            SELECT plan_type, usage_count FROM users WHERE id = ${userId}
        `

        if (!user) {
            // Auto-create user if not exists for demo purposes
            await sql`
                INSERT INTO users (id, email, plan_type, usage_count)
                VALUES (${userId}, 'demo@founder.os', 'free', 0)
            `
        } else if (user.plan_type === 'free' && user.usage_count >= 10) {
            return NextResponse.json({ error: 'Upgrade required', code: 'UPGRADE_REQUIRED' }, { status: 403 })
        }

        // 2. Run all 10 engines in parallel using Gemini
        const engineKeys = Object.keys(ENGINE_PROMPTS) as Array<keyof typeof ENGINE_PROMPTS>
        const model = getGeminiModel()

        const enginePromises = engineKeys.map(async (key) => {
            try {
                const prompt = `${ENGINE_PROMPTS[key]}\n\nStartup Idea: ${idea}\n\nReturn the response as a JSON object.`
                const result = await model.generateContent(prompt)
                const response = await result.response
                const text = response.text()

                // Gemini sometimes wraps JSON in markdown blocks
                const jsonMatch = text.match(/\{[\s\S]*\}/)
                const cleanJson = jsonMatch ? jsonMatch[0] : text

                return { key, data: JSON.parse(cleanJson), success: true }
            } catch (error) {
                console.error(`Gemini Engine ${key} failed:`, error)
                return { key, data: null, success: false }
            }
        })

        const results = await Promise.all(enginePromises)

        // 3. Prepare data for Neon
        const engineData: Record<string, any> = {}
        results.forEach((res, index) => {
            const colName = `engine${index + 1}_${res.key === 'revenue' ? 'revenue' : res.key}`
            engineData[colName] = res.data
        })

        // 4. Save to Neon
        const [analysis] = await sql`
            INSERT INTO analyses (
                user_id, 
                idea, 
                engine1_niche, 
                engine2_validation, 
                engine3_mvp, 
                engine4_pricing, 
                engine5_outreach, 
                engine6_competitor, 
                engine7_investor, 
                engine8_yc, 
                engine9_pivot, 
                engine10_revenue
            ) VALUES (
                ${userId}, 
                ${idea}, 
                ${engineData.engine1_niche}, 
                ${engineData.engine2_validation}, 
                ${engineData.engine3_mvp}, 
                ${engineData.engine4_pricing}, 
                ${engineData.engine5_outreach}, 
                ${engineData.engine6_competitor}, 
                ${engineData.engine7_investor}, 
                ${engineData.engine8_yc}, 
                ${engineData.engine9_pivot}, 
                ${engineData.engine10_revenue}
            )
            RETURNING id
        `

        // 5. Increment usage count
        await sql`
            UPDATE users SET usage_count = usage_count + 1 WHERE id = ${userId}
        `

        return NextResponse.json({
            success: true,
            analysisId: analysis.id,
            results: results.reduce((acc, curr) => ({ ...acc, [curr.key]: curr.data }), {})
        })

    } catch (error) {
        console.error('Analysis error:', error)
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
    }
}
