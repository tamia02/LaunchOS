'use server'

import sql from '@/lib/db'
import { getCurrentUser } from './auth-actions'

export async function getAnalysisById(id: string) {
    const user = await getCurrentUser()
    if (!user) return null

    console.log('Fetching analysis by ID:', id, 'for user:', user.id)
    try {
        const [data] = await sql`
            SELECT * FROM analyses WHERE id = ${id} AND user_id = ${user.id}
        `

        if (!data) {
            console.warn('No analysis found for ID:', id)
            return null
        }

        console.log('Analysis found:', data.idea)

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

export interface AnalysisSummary {
    id: string
    idea: string
    date: string
    niche: string
    score: number
    verdict: string
}

export async function getRecentAnalyses(limit = 10): Promise<AnalysisSummary[]> {
    const user = await getCurrentUser()
    if (!user) return []

    try {
        const data = await sql`
            SELECT id, idea, created_at, engine1_niche, engine2_validation 
            FROM analyses 
            WHERE user_id = ${user.id}
            ORDER BY created_at DESC 
            LIMIT ${limit}
        `

        console.log(`Fetched ${data.length} recent analyses`)

        return data.map(item => {
            const nicheData = item.engine1_niche as any
            const validationData = item.engine2_validation as any

            return {
                id: item.id,
                idea: item.idea,
                date: new Date(item.created_at).toISOString().split('T')[0],
                niche: nicheData?.niche_name || 'General Niche',
                score: (validationData?.pain_score || 0) * 10,
                verdict: validationData?.validation_verdict || 'yellow'
            }
        })
    } catch (error) {
        console.error('Error fetching recent analyses:', error)
        return []
    }
}
