'use client'

import React from 'react'
import { cn } from '@/lib/utils'

interface Milestone {
    name: string
    status: string
    description: string
    progress: number
}

interface ProgressData {
    project_name: string
    health_score: number
    time_to_mvp: string
    velocity: number[]
    milestones: Milestone[]
    strategic_focus: {
        title: string
        description: string
        next_action: string
    }
    risks: {
        market: number
        speed: number
        capital: number
        tech: number
    }
}

interface ProgressEngineProps {
    data: ProgressData
}

export function ProgressEngine({ data }: ProgressEngineProps) {
    if (!data) return null

    return (
        <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000">
            {/* Header Section */}
            <section className="flex flex-col md:flex-row justify-between items-start gap-4 mb-8">
                <div>
                    <h1 className="text-xl md:text-2xl font-bold font-headline tracking-tighter text-white uppercase antialiased">Execution Velocity</h1>
                    <p className="text-on-surface-variant font-body mt-1 text-[13px] leading-relaxed antialiased opacity-70">
                        Concept to market entry for <span className="text-white font-bold">{data.project_name}</span>.
                    </p>
                </div>
                <div className="flex gap-3">
                    <div className="bg-surface-container-high/40 backdrop-blur-3xl px-4 py-3 rounded-xl border border-white/5 text-right shadow-lg glass-edge">
                        <span className="block text-[8px] uppercase tracking-widest text-tertiary font-bold antialiased opacity-60">Health Score</span>
                        <span className="text-lg font-bold text-white font-headline tracking-tight antialiased">{data.health_score}</span>
                    </div>
                    <div className="bg-surface-container-high/40 backdrop-blur-3xl px-4 py-3 rounded-xl border border-white/5 text-right shadow-lg glass-edge">
                        <span className="block text-[8px] uppercase tracking-widest text-primary font-bold antialiased opacity-60">Time to MVP</span>
                        <span className="text-lg font-bold text-white font-headline tracking-tight antialiased">{data.time_to_mvp}</span>
                    </div>
                </div>
            </section>

            {/* Top Bento Layer */}
            <div className="grid grid-cols-12 gap-6 mb-6">
                {/* Momentum Analysis */}
                <div className="col-span-12 lg:col-span-8 bg-surface-container-low rounded-xl p-6 relative overflow-hidden group border border-white/5 shadow-lg">
                    <div className="flex justify-between items-start mb-6">
                        <div>
                            <h3 className="text-lg font-bold font-headline text-white uppercase tracking-tight antialiased">Momentum Analysis</h3>
                            <p className="text-[10px] text-on-surface-variant mt-1 antialiased opacity-40">Deployment points vs. roadmap</p>
                        </div>
                        <div className="flex gap-4">
                            <span className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-wider text-on-surface-variant/40"><div className="w-2 h-2 rounded-full bg-tertiary"></div> ACTUAL</span>
                            <span className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-wider text-on-surface-variant/40"><div className="w-2 h-2 rounded-full bg-white/10"></div> PROJECTED</span>
                        </div>
                    </div>
                    {/* Simulated Line Chart */}
                    <div className="h-40 flex items-end justify-between gap-1 relative pt-4 px-2 overflow-hidden">
                        <svg className="absolute inset-0 w-full h-full opacity-30" preserveAspectRatio="none">
                            <path
                                d={`M0,150 ${data.velocity.map((v, i) => `L${(i + 1) * (100 / data.velocity.length)}%,${150 - (v * 1.5)}`).join(' ')}`}
                                fill="none"
                                stroke="#679cff"
                                strokeLinecap="round"
                                strokeWidth="2"
                                className="drop-shadow-[0_0_8px_#679cff]"
                            />
                        </svg>
                        {data.velocity.map((v, i) => (
                            <div
                                key={i}
                                className="absolute w-2 h-2 rounded-full bg-tertiary z-10"
                                style={{ bottom: `${v * 1.5}px`, left: `${(i + 1) * (100 / data.velocity.length)}%`, transform: 'translateX(-50%)' }}
                            ></div>
                        ))}
                    </div>
                    <div className="mt-4 pt-4 border-t border-white/5 flex justify-between text-[8px] font-bold text-on-surface-variant uppercase tracking-widest opacity-20 antialiased">
                        <span>Initiation</span>
                        <span>Phase 1</span>
                        <span>Mid Cycle</span>
                        <span>Beta Lock</span>
                        <span>Market Entry</span>
                    </div>
                </div>

                {/* Risk Radar */}
                <div className="col-span-12 lg:col-span-4 bg-surface-container rounded-xl p-6 border border-white/5 flex flex-col items-center justify-center relative shadow-lg group overflow-hidden">
                    <h3 className="text-lg font-bold font-headline text-white mb-6 w-full text-left uppercase tracking-tight antialiased">Risk Radar</h3>
                    <div className="relative w-40 h-40 border border-white/5 rounded-full flex items-center justify-center">
                        <div className="absolute w-28 h-28 border border-white/5 rounded-full"></div>
                        <div className="absolute w-16 h-16 border border-white/5 rounded-full"></div>
                        <svg className="absolute inset-0 w-full h-full p-4 overflow-visible filter drop-shadow-[0_0_10px_rgba(103,156,255,0.4)]">
                            <polygon
                                fill="rgba(103, 156, 255, 0.2)"
                                points={`80,${80 - (data.risks.market * 0.8)} 80,80 ${80 + (data.risks.speed * 0.8)},80 80,80 80,${80 + (data.risks.capital * 0.8)} 80,80 ${80 - (data.risks.tech * 0.8)},80`}
                                stroke="#679cff"
                                strokeWidth="2"
                            />
                        </svg>
                        <span className="absolute top-0 text-[8px] font-bold text-tertiary uppercase tracking-wider transform -translate-y-3">MK</span>
                        <span className="absolute bottom-0 text-[8px] font-bold text-tertiary uppercase tracking-wider transform translate-y-3">CP</span>
                        <span className="absolute left-0 text-[8px] font-bold text-tertiary uppercase tracking-wider transform -translate-x-5">TC</span>
                        <span className="absolute right-0 text-[8px] font-bold text-tertiary uppercase tracking-wider transform translate-x-5">SP</span>
                    </div>
                    <p className="mt-6 text-[11px] text-center text-on-surface-variant leading-tight antialiased opacity-70">
                        Tech constraints mitigating exposure.
                    </p>
                </div>
            </div>

            {/* Bottom Modular Layer */}
            <div className="grid grid-cols-12 gap-6">
                {/* Milestone Status */}
                <div className="col-span-12 lg:col-span-8 space-y-4">
                    <h2 className="text-lg font-bold font-headline tracking-tight text-white uppercase antialiased">Stage Progression</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {data.milestones.map((milestone, i) => (
                            <div key={i} className="bg-surface-container-low p-5 rounded-xl border border-white/5 hover:bg-surface-bright/5 transition-all shadow-md group">
                                <div className="flex justify-between items-start mb-4">
                                    <span className="material-symbols-outlined text-xl text-tertiary">
                                        {i === 0 ? 'category' : i === 1 ? 'verified' : i === 2 ? 'architecture' : 'campaign'}
                                    </span>
                                    <span className={cn(
                                        "text-[8px] font-bold px-2 py-0.5 rounded-full border border-white/5 antialiased tracking-widest",
                                        milestone.progress === 100 ? "bg-tertiary/20 text-tertiary shadow-[0_0_8px_#679cff]" : "bg-white/5 text-on-surface-variant/40"
                                    )}>
                                        {milestone.status}
                                    </span>
                                </div>
                                <h4 className="text-sm font-bold font-headline text-white uppercase tracking-tight antialiased">{milestone.name}</h4>
                                <div className="mt-4 h-1.5 w-full bg-surface-container-highest rounded-full overflow-hidden border border-white/5">
                                    <div
                                        className={cn(
                                            "h-full transition-all duration-[2000ms]",
                                            milestone.progress === 100 ? "bg-tertiary" : "bg-primary"
                                        )}
                                        style={{ width: `${milestone.progress}%` }}
                                    ></div>
                                </div>
                                <p className="mt-3 text-[11px] text-on-surface-variant leading-tight antialiased opacity-50 group-hover:opacity-100 transition-opacity">
                                    {milestone.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Strategic Focus */}
                <div className="col-span-12 lg:col-span-4 flex flex-col gap-4">
                    <h2 className="text-lg font-bold font-headline tracking-tight text-white uppercase antialiased">Strategic Focus</h2>
                    <div className="flex-1 bg-gradient-to-br from-surface-container-high/60 to-surface-container-low p-6 rounded-xl border border-white/5 flex flex-col justify-between shadow-lg relative overflow-hidden group">
                        <div>
                            <div className="flex items-center gap-2 mb-6">
                                <span className="w-2 h-2 rounded-full bg-tertiary shadow-[0_0_8px_#679cff] animate-pulse"></span>
                                <span className="text-[9px] font-bold tracking-widest text-tertiary uppercase antialiased">NEXT PRIORITY</span>
                            </div>
                            <h3 className="text-xl font-bold text-white leading-tight font-headline uppercase tracking-tight antialiased">{data.strategic_focus.title}</h3>
                            <p className="mt-4 text-on-surface-variant leading-snug text-[13px] antialiased opacity-70">
                                {data.strategic_focus.description}
                            </p>
                        </div>
                        <div className="mt-8 space-y-3">
                            <button className="w-full bg-white/5 text-white py-3 rounded-lg font-bold text-[10px] tracking-widest uppercase border border-white/10 hover:bg-tertiary transition-all shadow-md flex items-center justify-center gap-3 group/btn">
                                <span className="material-symbols-outlined text-lg group-hover/btn:rotate-45 transition-transform">open_in_new</span> {data.strategic_focus.next_action}
                            </button>
                            <button className="w-full bg-transparent text-on-surface-variant font-bold text-[9px] uppercase tracking-widest hover:text-white transition-colors py-1 antialiased">
                                VIEW PROTOCOL BACKLOG
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
