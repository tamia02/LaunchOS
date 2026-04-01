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
        <div className="grid grid-cols-1 md:grid-cols-12 auto-rows-[300px] gap-6">
            {analyses.map((analysis, index) => {
                const isLarge = index === 0;
                return (
                    <Link
                        key={analysis.id}
                        href={`/dashboard/analysis/${analysis.id}`}
                        className={cn(
                            "group relative overflow-hidden rounded-[2.5rem] border border-white/5 transition-all duration-700 custom-ease hover:scale-[1.02] hover:border-tertiary/20",
                            isLarge ? "md:col-span-8 md:row-span-2" : "md:col-span-4"
                        )}
                    >
                        {/* Background Visuals */}
                        <div className="absolute inset-0 bg-surface-container-low/40 backdrop-blur-3xl" />
                        <div className="absolute inset-0 bg-gradient-to-br from-tertiary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                        
                        {/* Status Glow */}
                        <div className={cn(
                            "absolute top-0 right-0 w-32 h-32 blur-[60px] opacity-20 pointer-events-none transition-all duration-700",
                            analysis.verdict === 'green' ? "bg-tertiary" :
                            analysis.verdict === 'yellow' ? "bg-warning" : "bg-error"
                        )} />

                        <div className="relative h-full p-8 flex flex-col justify-between z-10">
                            <div>
                                <div className="flex justify-between items-start mb-8">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-xl bg-surface-variant/20 flex items-center justify-center border border-white/5 glass-edge">
                                            <span className="material-symbols-outlined text-tertiary text-lg">
                                                {isLarge ? 'rocket_launch' : 'token'}
                                            </span>
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-[10px] font-black font-label text-on-surface-variant/40 tracking-[0.2em] uppercase">Protocol_{analysis.id.slice(0, 4)}</span>
                                            <span className="text-[9px] font-bold font-body text-tertiary tracking-widest">{analysis.date}</span>
                                        </div>
                                    </div>
                                    
                                    <div className="flex flex-col items-end gap-1">
                                        <div className="bg-surface-container-high/60 px-3 py-1.5 rounded-xl border border-white/5 glass-panel flex items-center gap-2">
                                            <div className={cn(
                                                "w-1.5 h-1.5 rounded-full animate-pulse",
                                                analysis.verdict === 'green' ? "bg-tertiary" :
                                                analysis.verdict === 'yellow' ? "bg-warning" : "bg-error"
                                            )} />
                                            <span className="text-[10px] font-black text-white font-label tracking-tighter">
                                                SENSITIVITY_{analysis.score}%
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <h3 className={cn(
                                    "font-headline font-black text-white leading-tight tracking-tighter transition-all duration-500 group-hover:text-tertiary",
                                    isLarge ? "text-3xl md:text-5xl max-w-xl" : "text-xl line-clamp-2"
                                )}>
                                    {analysis.idea}
                                </h3>
                            </div>

                            <div className="flex items-end justify-between border-t border-white/5 pt-6">
                                <div className="space-y-1">
                                    <span className="text-[9px] font-black font-label text-on-surface-variant/30 tracking-widest uppercase block">Identified_Niche</span>
                                    <span className="text-xs font-bold text-white/80 font-body">{analysis.niche}</span>
                                </div>
                                
                                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-700 custom-ease shadow-2xl">
                                    <span className="material-symbols-outlined text-white text-xl">arrow_forward</span>
                                </div>
                            </div>
                        </div>
                    </Link>
                );
            })}
        </div>
    )
}
