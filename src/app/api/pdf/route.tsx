import React from 'react'
import { NextResponse } from 'next/server'
import { renderToStream } from '@react-pdf/renderer'
import { AnalysisPDF } from '@/components/pdf/AnalysisPDF'
import sql from '@/lib/db'

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url)
    const id = searchParams.get('id')

    if (!id) return NextResponse.json({ error: 'Missing ID' }, { status: 400 })

    try {
        const [row] = await sql`
            SELECT idea, engine1_niche, engine2_validation 
            FROM analyses WHERE id = ${id}
        `

        if (!row) {
            return NextResponse.json({ error: 'Analysis not found' }, { status: 404 })
        }

        const data = {
            idea: row.idea,
            niche: row.engine1_niche,
            validation: {
                key_insight: row.engine2_validation.decision_rationale || row.engine2_validation.verdict,
                tam_estimate: row.engine2_validation.market_size,
                validation_verdict: row.engine2_validation.verdict
            }
        }

        const stream = await renderToStream(<AnalysisPDF data={data} />)

        return new Response(stream as any, {
            headers: {
                'Content-Type': 'application/pdf',
                'Content-Disposition': `attachment; filename="launchOS-Report-${id}.pdf"`,
            },
        })
    } catch (error) {
        console.error('PDF Error:', error)
        return NextResponse.json({ error: 'Failed to generate PDF' }, { status: 500 })
    }
}
