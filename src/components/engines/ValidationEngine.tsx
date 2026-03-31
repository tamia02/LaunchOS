'use client'

import React from 'react'

interface ValidationData {
    project_name: string
    overall_score: number
    verdict: string
    market_size: string
    pain_score: number
    willingness_to_pay: string
    time_to_revenue: string
    risk_level: string
    green_flags: string[]
    red_flags: string[]
    decision: string
    decision_rationale: string
    competitor_gap: string
}

interface ValidationEngineProps {
    data: ValidationData
}

export function ValidationEngine({ data }: ValidationEngineProps) {
    if (!data) return null

    return (
        <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000">
            {/* Header Section */}
            <header className="mb-8 flex flex-col md:flex-row md:items-start justify-between gap-4">
                <div className="max-w-xl">
                    <div className="flex items-center gap-2 mb-2">
                        <span className="px-1.5 py-0.5 rounded bg-surface-container-high text-tertiary text-[9px] font-black tracking-widest uppercase font-label border border-white/5 antialiased">Project Analysis</span>
                        <span className="w-1 h-1 rounded-full bg-tertiary"></span>
                        <span className="text-on-surface-variant text-[9px] font-black uppercase tracking-widest opacity-40 antialiased">Integrity: Optimal</span>
                    </div>
                    <h1 className="text-xl md:text-2xl font-bold font-headline tracking-tighter text-white mb-2 uppercase antialiased">Project Validation</h1>
                    <p className="text-on-surface-variant text-[13px] max-w-xl font-body antialiased leading-relaxed">
                        Deep vertical analysis for <span className="text-primary font-bold">{data.project_name}</span>. Aggregated demand signals from latent communities and market liquidity data.
                    </p>
                </div>
                <div className="relative group">
                    <div className="relative bg-surface-container-highest px-6 py-3 rounded-xl border border-tertiary/20 flex flex-col items-center justify-center shadow-lg glass-edge">
                        <span className="text-[9px] text-tertiary font-bold tracking-wider uppercase mb-0.5 font-label antialiased">Decision</span>
                        <span className="text-xl font-black text-white font-headline tracking-tight uppercase antialiased">{data.decision}</span>
                    </div>
                </div>
            </header>

            {/* Bento Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                {/* Idea Score Main Card */}
                <div className="md:col-span-8 bg-surface-container-low rounded-2xl overflow-hidden border border-white/5 relative shadow-2xl">
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-tertiary/5 to-transparent pointer-events-none"></div>
                    <div className="p-6 relative z-10">
                        <div className="flex justify-between items-start mb-6">
                            <div>
                                <h3 className="text-on-surface-variant text-[10px] font-bold uppercase tracking-wider font-label mb-1 antialiased">Idea_Score</h3>
                                <p className="text-on-surface text-[10px] font-body opacity-40 antialiased tracking-tight">Composite feasibility metric.</p>
                            </div>
                            <div className="text-right">
                                <span className="text-4xl font-black font-headline text-white tracking-tighter antialiased">{data.overall_score}</span>
                                <span className="text-on-surface-variant text-base font-bold opacity-30">/100</span>
                            </div>
                        </div>
                        <div className="space-y-8">
                            <div className="w-full bg-surface-container-lowest h-2 rounded-full overflow-hidden border border-white/5">
                                <div
                                    className="bg-gradient-to-r from-tertiary-dim to-tertiary h-full shadow-[0_0_20px_#679cff] transition-all duration-[2000ms] custom-ease"
                                    style={{ width: `${data.overall_score}%` }}
                                ></div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                                <div className="p-4 rounded-xl bg-surface-container-high/40 border border-white/5 glass-edge group hover:bg-surface-container-high/60 transition-all">
                                    <p className="text-[9px] text-on-surface-variant font-bold uppercase mb-1 antialiased tracking-widest opacity-40">Verdict</p>
                                    <p className="text-lg font-black font-headline text-white antialiased tracking-tight uppercase">{data.verdict}</p>
                                </div>
                                <div className="p-4 rounded-xl bg-surface-container-high/40 border border-white/5 glass-edge group hover:bg-surface-container-high/60 transition-all">
                                    <p className="text-[9px] text-on-surface-variant font-bold uppercase mb-1 antialiased tracking-widest opacity-40">Willingness to Pay</p>
                                    <p className="text-lg font-black font-headline text-white antialiased tracking-tight uppercase">{data.willingness_to_pay}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Pain Score Card */}
                <div className="md:col-span-4 bg-surface-container rounded-2xl p-6 flex flex-col justify-between border border-white/5 relative overflow-hidden group shadow-lg">
                    <div className="absolute top-0 left-0 w-full h-1 bg-error shadow-[0_0_10px_rgba(238,125,119,0.5)]"></div>
                    <div>
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="text-on-surface-variant text-[10px] font-bold uppercase tracking-wider font-label antialiased">Pain_Intensity</h3>
                            <span className="material-symbols-outlined text-error text-xl animate-pulse" style={{ fontVariationSettings: "'FILL' 1" }}>warning</span>
                        </div>
                        <div className="mb-2">
                            <span className="text-2xl font-black font-headline text-white uppercase tracking-tighter antialiased">{data.pain_score >= 8 ? 'CRITICAL' : 'HIGH'}</span>
                        </div>
                        <p className="text-on-surface-variant text-[12px] font-body leading-relaxed antialiased opacity-70">
                            {data.decision_rationale}
                        </p>
                    </div>
                    <div className="mt-6 flex items-center gap-2.5 text-error text-[10px] font-bold uppercase tracking-wider font-headline">
                        <span className="w-2 h-2 rounded-full bg-error animate-pulse"></span>
                        Pain Index: {data.pain_score}/10
                    </div>
                </div>

                {/* Market Size Card */}
                <div className="md:col-span-5 bg-surface-container rounded-2xl p-6 border border-white/5 flex items-center gap-6 relative overflow-hidden shadow-lg group">
                    <div className="flex-1 relative z-10">
                        <h3 className="text-on-surface-variant text-[10px] font-bold uppercase tracking-wider font-label mb-6 antialiased">Liquidity_Pool (TAM)</h3>
                        <div className="flex items-baseline gap-1.5 mb-1.5">
                            <span className="text-4xl font-black font-headline text-white tracking-tighter antialiased">{data.market_size}</span>
                        </div>
                        <p className="text-on-surface-variant text-[10px] font-body opacity-40 antialiased tracking-tight">Total Addressable Market synthesized.</p>
                    </div>
                </div>

                {/* Key Insights - Latent Demand */}
                <div className="md:col-span-7 bg-surface-container-high/40 backdrop-blur-3xl rounded-2xl p-6 border border-white/5 shadow-lg glass-edge">
                    <h3 className="text-on-surface-variant text-[10px] font-bold uppercase tracking-wider font-label mb-6 flex items-center gap-2.5 antialiased">
                        <span className="material-symbols-outlined text-tertiary text-lg">psychology</span>
                        Strategic_Signal_Matrix
                    </h3>
                    <div className="space-y-4">
                        {data.green_flags.slice(0, 3).map((flag, i) => (
                            <div key={i} className="flex gap-4 group cursor-default">
                                <div className="w-0.5 h-8 bg-tertiary/10 group-hover:bg-tertiary transition-all duration-700 rounded-full" />
                                <div className="space-y-0.5">
                                    <p className="text-white font-bold font-headline uppercase text-[11px] tracking-tight antialiased">
                                        Signal_Node_0{i + 1}
                                    </p>
                                    <p className="text-on-surface-variant text-[12px] leading-snug antialiased opacity-70">
                                        {flag}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Time-to-Value Card */}
                <div className="md:col-span-12 lg:col-span-4 bg-surface-container-high rounded-2xl p-6 border border-white/5 shadow-lg glass-edge group">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-11 h-11 rounded-xl bg-surface-bright flex items-center justify-center border border-white/5 shadow-inner">
                            <span className="material-symbols-outlined text-tertiary text-xl">speed</span>
                        </div>
                        <div>
                            <h4 className="text-white font-bold font-headline uppercase antialiased tracking-tight text-sm">Time-to-Value</h4>
                            <p className="text-[8px] text-tertiary font-bold uppercase tracking-widest font-label antialiased">{data.time_to_revenue}</p>
                        </div>
                    </div>
                    <p className="text-[12px] text-on-surface-variant leading-relaxed mb-6 font-body antialiased opacity-70">
                        Risk Level: <span className="text-white font-bold">{data.risk_level}</span>.
                    </p>
                    <div className="flex items-center justify-between">
                        <div className="flex -space-x-2">
                            {[...Array(4)].map((_, i) => (
                                <div key={i} className="w-8 h-8 rounded-full border border-surface-container-high bg-surface-container-highest overflow-hidden shadow-lg">
                                    <img
                                        className="w-full h-full object-cover grayscale opacity-60"
                                        src={`https://images.unsplash.com/photo-${1500000000000 + i}?auto=format&fit=crop&q=80&w=100`}
                                        alt="User"
                                    />
                                </div>
                            ))}
                        </div>
                        <span className="text-[9px] font-black uppercase tracking-widest text-tertiary">Velocity</span>
                    </div>
                </div>

                {/* Architectural Gap Card */}
                <div className="md:col-span-12 lg:col-span-8 h-[180px] rounded-2xl overflow-hidden relative border border-white/5 shadow-lg group">
                    <img
                        className="w-full h-full object-cover grayscale opacity-10 group-hover:opacity-20 transition-all duration-1000"
                        src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2070"
                        alt="Competitive Landscape"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent"></div>
                    <div className="absolute bottom-5 left-6 right-6 flex justify-between items-end">
                        <div>
                            <h4 className="text-xl font-bold text-white font-headline tracking-tight uppercase antialiased mb-1">Architectural Gap</h4>
                            <p className="text-on-surface-variant text-[9px] font-body antialiased tracking-widest uppercase opacity-40">{data.competitor_gap}</p>
                        </div>
                        <button className="bg-white/10 backdrop-blur-md px-6 py-2.5 rounded-lg text-white text-[9px] font-bold tracking-widest uppercase hover:bg-white/20 transition-all border border-white/10 glass-edge antialiased">
                            VIEW_GAP
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
