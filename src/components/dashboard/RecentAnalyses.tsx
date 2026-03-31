import React from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { getRecentAnalyses } from '@/lib/actions/analysis-actions'

export async function RecentAnalyses() {
    const analyses = await getRecentAnalyses()

    if (analyses.length === 0) {
        return (
            <div className="py-32 text-center bg-surface-container-low/40 rounded-[3rem] border border-dashed border-white/5 shadow-inner">
                <p className="text-on-surface-variant font-body opacity-40">No protocols initiated. Awaiting deployment instructions.</p>
            </div>
        )
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {analyses.map((analysis) => (
                <Link key={analysis.id} href={`/dashboard/analysis/${analysis.id}`} className="block">
                    <div className="h-full bg-surface-container-low/80 p-5 rounded-xl shadow-lg border border-white/5 hover:bg-surface-container-high transition-all duration-500 custom-ease group relative overflow-hidden transition-all">
                        {/* Atmospheric Accent */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-tertiary/5 rounded-full blur-3xl pointer-events-none group-hover:bg-tertiary/10 transition-colors" />

                        <div className="flex justify-between items-start mb-4 relative z-10">
                            <div className="flex items-center gap-2">
                                <span className="material-symbols-outlined text-on-surface-variant/30 text-[14px]">calendar_month</span>
                                <span className="text-[9px] text-on-surface-variant/40 font-black tracking-[0.2em] font-label">{analysis.date}</span>
                            </div>
                            <div className="bg-surface-container/60 px-2.5 py-1 rounded-lg glass-edge border border-white/5 flex items-center gap-2">
                                <div className={cn(
                                    "w-1 h-1 rounded-full",
                                    analysis.verdict === 'green' ? "text-tertiary bg-tertiary" :
                                        analysis.verdict === 'yellow' ? "text-warning bg-warning" : "text-error bg-error"
                                )} />
                                <span className="text-[9px] font-black text-white font-label tracking-tight">
                                    SCORE_{analysis.score}
                                </span>
                            </div>
                        </div>

                        <p className="text-base font-headline font-black text-white/90 mb-5 line-clamp-1 leading-tight tracking-tight antialiased group-hover:text-white transition-colors">
                            {analysis.idea}
                        </p>

                        <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5 relative z-10">
                            <div className="px-2 py-1 rounded-md bg-surface-variant/20 border border-white/5">
                                <span className="text-tertiary text-[9px] font-black tracking-[0.1em] font-label">{analysis.niche}</span>
                            </div>
                            <div className="w-8 h-8 rounded-lg bg-surface-container-highest flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 custom-ease shadow-lg">
                                <span className="material-symbols-outlined text-white text-[12px]">arrow_forward_ios</span>
                            </div>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    )
}
