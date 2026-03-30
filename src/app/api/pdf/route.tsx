import React from 'react'
import { NextResponse } from 'next/server'
import { renderToStream } from '@react-pdf/renderer'
import { AnalysisPDF } from '@/components/pdf/AnalysisPDF'
import { createClient } from '@/lib/supabase/server'

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url)
    const id = searchParams.get('id')

    if (!id) return NextResponse.json({ error: 'Missing ID' }, { status: 400 })

    const supabase = await createClient()

    // Real fetch: const { data } = await supabase.from('analyses').select('*').eq('id', id).single()
    // Mocking for now to demonstrate layout
    const mockData = {
        idea: 'AI-powered garden planner for urban dwellers.',
        niche: { niche_description: 'Beginner gardeners in apartment buildings...', audience_size: '2.3M', pain_level: 'High' },
        validation: { key_insight: 'Market opportunity is huge due to rising organic trends...', tam_estimate: '$4.2B', validation_verdict: 'green' }
    }

    try {
        const stream = await renderToStream(<AnalysisPDF data={mockData} />)

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
