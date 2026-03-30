import { NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { getOpenAI } from '@/lib/openai/client'
import { ENGINE_PROMPTS } from '@/lib/openai/prompts'

export async function POST(req: Request) {
    try {
        const { idea, userId } = await req.json()

        if (!idea || !userId) {
            return NextResponse.json({ error: 'Missing idea or userId' }, { status: 400 })
        }

        const supabase = await createClient()

        // 1. Check user usage (simplified for now)
        const { data: user, error: userError } = await supabase
            .from('users')
            .select('plan_type, usage_count')
            .eq('id', userId)
            .single()

        if (userError || !user) {
            return NextResponse.json({ error: 'User not found' }, { status: 404 })
        }

        const userData = user as any
        if (userData.plan_type === 'free' && userData.usage_count >= 3) {
            return NextResponse.json({ error: 'Upgrade required', code: 'UPGRADE_REQUIRED' }, { status: 403 })
        }

        // 2. Run all 10 engines in parallel
        const engineKeys = Object.keys(ENGINE_PROMPTS) as Array<keyof typeof ENGINE_PROMPTS>

        const openai = getOpenAI()
        const enginePromises = engineKeys.map(async (key) => {
            try {
                const response = await openai.chat.completions.create({
                    model: 'gpt-4o',
                    messages: [
                        { role: 'system', content: ENGINE_PROMPTS[key] },
                        { role: 'user', content: idea }
                    ],
                    response_format: { type: 'json_object' }
                })

                const content = response.choices[0].message.content
                return { key, data: content ? JSON.parse(content) : null, success: true }
            } catch (error) {
                console.error(`Engine ${key} failed:`, error)
                return { key, data: null, success: false }
            }
        })

        const results = await Promise.all(enginePromises)

        // 3. Prepare data for Supabase
        const analysisData: any = {
            user_id: userId,
            idea: idea,
        }

        results.forEach((res) => {
            analysisData[`engine${Object.keys(ENGINE_PROMPTS).indexOf(res.key) + 1}_${res.key}`] = res.data
        })

        // 4. Save to Supabase
        const { data: analysis, error: analysisError } = await supabase
            .from('analyses')
            .insert(analysisData)
            .select()
            .single()

        if (analysisError) {
            console.error('Failed to save analysis:', analysisError)
            return NextResponse.json({ error: 'Failed to save analysis' }, { status: 500 })
        }

        // 5. Increment usage count
        await (supabase as any).rpc('increment_usage', { user_id: userId })

        const finalAnalysis = analysis as any
        return NextResponse.json({
            success: true,
            analysisId: finalAnalysis.id,
            results: results.reduce((acc, curr) => ({ ...acc, [curr.key]: curr.data }), {})
        })

    } catch (error) {
        console.error('Analysis error:', error)
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
    }
}
