'use server'

import sql from '@/lib/db'

export async function getAnalysisById(id: string) {
    try {
        const [data] = await sql`
            SELECT * FROM analyses WHERE id = ${id}
        `

        if (!data) return null

        // Map database columns to the structured object expected by the UI
        return {
            id: data.id,
            idea: data.idea,
            created_at: new Date(data.created_at).toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric'
            }),
            niche: data.engine1_niche,
            validation: data.engine2_validation,
            mvp: data.engine3_mvp,
            pricing: data.engine4_pricing,
            outreach: data.engine5_outreach,
            competitor: data.engine6_competitor,
            investor: data.engine7_investor,
            yc: data.engine8_yc,
            pivot: data.engine9_pivot,
            revenue: data.engine10_revenue,
        }
    } catch (error) {
        console.error('Error fetching analysis:', error)
        return null
    }
}

export async function getRecentAnalyses(limit = 10) {
    try {
        const data = await sql`
            SELECT id, idea, created_at, engine1_niche, engine2_validation 
            FROM analyses 
            ORDER BY created_at DESC 
            LIMIT ${limit}
        `

        return data.map(item => ({
            id: item.id,
            idea: item.idea,
            date: new Date(item.created_at).toISOString().split('T')[0],
            niche: (item.engine1_niche as any)?.niche_name || 'General Niche',
            score: (item.engine2_validation as any)?.pain_score * 10 || 0,
            verdict: (item.engine2_validation as any)?.validation_verdict || 'yellow'
        }))
    } catch (error) {
        console.error('Error fetching recent analyses:', error)
        return []
    }
}
