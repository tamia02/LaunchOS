import React from 'react'
import Link from 'next/link'
import { Card, CardTitle, CardDescription } from '@/components/ui/Card'
import { Tag } from '@/components/ui/Tag'
import { Calendar, ChevronRight } from 'lucide-react'

// Mock data for initial UI
const MOCK_ANALYSES = [
    {
        id: '1',
        idea: 'An AI-powered garden planner that helps beginners grow vegetables.',
        niche: 'Urban Home Gardeners',
        score: 84,
        date: '2026-03-30',
        verdict: 'green'
    },
    {
        id: '2',
        idea: 'A collaborative whiteboard for remote engineering teams with built-in code execution.',
        niche: 'Remote Eng Teams',
        score: 72,
        date: '2026-03-28',
        verdict: 'yellow'
    }
]

export function RecentAnalyses() {
    if (MOCK_ANALYSES.length === 0) {
        return (
            <div className="py-20 text-center border-2 border-dashed border-white/5 rounded-xl">
                <p className="text-text-muted text-sm">No analyses yet. Start by entering an idea above.</p>
            </div>
        )
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {MOCK_ANALYSES.map((analysis) => (
                <Link key={analysis.id} href={`/analysis/${analysis.id}`}>
                    <Card className="h-full hover:bg-tertiary/50 transition-all group">
                        <div className="flex justify-between items-start mb-4">
                            <div className="flex items-center gap-2 text-[10px] text-text-muted font-mono uppercase tracking-widest">
                                <Calendar className="w-3 h-3" />
                                {analysis.date}
                            </div>
                            <div className="flex items-center gap-1.5">
                                <div className={cn(
                                    "w-2 h-2 rounded-full",
                                    analysis.verdict === 'green' ? "bg-success" :
                                        analysis.verdict === 'yellow' ? "bg-warning" : "bg-danger"
                                )} />
                                <span className="text-xs font-mono font-bold text-foreground">
                                    Score: {analysis.score}
                                </span>
                            </div>
                        </div>

                        <p className="text-sm font-medium mb-4 line-clamp-2 leading-relaxed">
                            {analysis.idea}
                        </p>

                        <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
                            <Tag variant="accent">{analysis.niche}</Tag>
                            <ChevronRight className="w-4 h-4 text-text-muted group-hover:text-accent transition-colors" />
                        </div>
                    </Card>
                </Link>
            ))}
        </div>
    )
}

function cn(...inputs: any[]) {
    return inputs.filter(Boolean).join(' ')
}
