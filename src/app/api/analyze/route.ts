import { NextResponse } from 'next/server'
import sql from '@/lib/db'
import { getGeminiModel } from '@/lib/gemini/client'
import { ENGINE_PROMPTS } from '@/lib/gemini/prompts'

export async function POST(req: Request) {
    try {
        const { idea, userId } = await req.json()
        console.log('--- STARTING ANALYSIS (Gemini 2.0 Flash) ---')
        console.log('Idea:', idea)
        console.log('User:', userId)
        
        if (!idea || !userId) {
            return NextResponse.json({ error: 'Missing idea or userId' }, { status: 400 })
        }

        // 1. Check user usage
        const [user] = await sql`
            SELECT plan_type, usage_count FROM users WHERE id = ${userId}
        `

        if (!user) {
            console.log('Auto-creating user:', userId)
            await sql`
                INSERT INTO users (id, email, plan_type, usage_count)
                VALUES (${userId}, 'demo@founder.os', 'free', 0)
            `
        } else if (user.plan_type === 'free' && user.usage_count >= 20) {
            console.log('Usage limit reached for user:', userId)
            return NextResponse.json({ error: 'Upgrade required', code: 'UPGRADE_REQUIRED' }, { status: 403 })
        }

        // 2. Run all 10 engines sequentially with a small delay to avoid rate limits
        const engineKeys = Object.keys(ENGINE_PROMPTS) as Array<keyof typeof ENGINE_PROMPTS>
        const model = getGeminiModel('gemini-2.0-flash')

        console.log(`Calling Gemini (gemini-2.0-flash) for ${engineKeys.length} engines sequentially...`)
        const results = []
        
        for (const key of engineKeys) {
            try {
                // Wait 1.5s between requests to respect free-tier RPM limits
                if (results.length > 0) await new Promise(resolve => setTimeout(resolve, 1500));

                const prompt = `${ENGINE_PROMPTS[key]}\n\nStartup Idea: ${idea}\n\nReturn ONLY the JSON object.`
                
                const result = await model.generateContent({
                    contents: [{ role: 'user', parts: [{ text: prompt }] }],
                    generationConfig: {
                        responseMimeType: "application/json",
                    }
                })

                const text = result.response.text() || '{}'
                const parsedData = JSON.parse(text)
                results.push({ key, data: parsedData, success: true })
            } catch (error: any) {
                console.error(`[ERROR] Gemini Engine ${key} failed:`, error.message)
                results.push({ key, data: null, success: false })
            }
        }
        console.log('All engines processed.')

        // 3. Prepare data for Neon
        const engineData: Record<string, any> = {}
        const columns = [
            'engine1_niche', 'engine2_validation', 'engine3_mvp', 'engine4_pricing',
            'engine5_outreach', 'engine6_competitor', 'engine7_investor', 'engine8_yc',
            'engine9_pivot', 'engine10_revenue'
        ]

        results.forEach((res, index) => {
            const colName = columns[index]
            engineData[colName] = res.data
        })

        console.log('[DEBUG] Final engineData mapping for Neon:', JSON.stringify(engineData, null, 2))

        // 4. Save to Neon
        console.log('Saving results to Neon...')
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
        console.log('Analysis saved with ID:', analysis.id)

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
