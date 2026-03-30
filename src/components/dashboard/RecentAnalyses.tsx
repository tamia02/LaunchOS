import React from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

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
            <div className="py-32 text-center bg-surface-container-low/40 rounded-[3rem] border border-dashed border-white/5 shadow-inner">
                <p className="text-on-surface-variant font-body italic opacity-40">No protocols initiated. Awaiting deployment instructions.</p>
            </div>
        )
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {MOCK_ANALYSES.map((analysis) => (
                <Link key={analysis.id} href={`/dashboard/analysis/${analysis.id}`} className="block">
                    <div className="h-full bg-surface-container-low p-10 rounded-[2.5rem] shadow-[0_40px_80px_rgba(0,0,0,0.4)] border border-white/5 hover:bg-surface-container-high transition-all duration-700 custom-ease group relative overflow-hidden hover:scale-[1.02]">
                        {/* Atmospheric Accent */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-tertiary/5 rounded-full blur-3xl pointer-events-none group-hover:bg-tertiary/10 transition-colors" />

                        <div className="flex justify-between items-start mb-10 relative z-10">
                            <div className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-on-surface-variant/30 text-sm">calendar_month</span>
                                <span className="text-[9px] text-on-surface-variant/40 font-black uppercase tracking-[0.3em] font-label italic">{analysis.date}</span>
                            </div>
                            <div className="bg-surface-container/60 px-4 py-2 rounded-xl glass-edge border border-white/5 flex items-center gap-3">
                                <div className={cn(
                                    "w-1.5 h-1.5 rounded-full shadow-[0_0_8px_currentColor]",
                                    analysis.verdict === 'green' ? "text-tertiary bg-tertiary" :
                                        analysis.verdict === 'yellow' ? "text-warning bg-warning" : "text-error bg-error"
                                )} />
                                <span className="text-[10px] font-black text-white font-label italic tracking-tighter">
                                    CORE_{analysis.score}
                                </span>
                            </div>
                        </div>

                        <p className="text-xl font-headline font-black text-white/90 mb-10 line-clamp-2 leading-relaxed italic tracking-tighter antialiased group-hover:text-white transition-colors">
                            {analysis.idea}
                        </p>

                        <div className="flex items-center justify-between mt-auto pt-8 border-t border-white/5 relative z-10">
                            <div className="px-3 py-1.5 rounded-lg bg-surface-variant/20 border border-white/5">
                                <span className="text-tertiary text-[9px] font-black uppercase tracking-[0.2em] font-label italic">{analysis.niche}</span>
                            </div>
                            <div className="w-10 h-10 rounded-xl bg-surface-container-highest flex items-center justify-center opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-700 custom-ease shadow-lg">
                                <span className="material-symbols-outlined text-white text-sm">arrow_forward_ios</span>
                            </div>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    )
}
