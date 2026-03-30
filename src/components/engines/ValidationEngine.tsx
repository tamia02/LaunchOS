'use client'

import React from 'react'

interface ValidationData {
    score: number
    confidence: string
    market_signals: string[]
    competitor_gaps: string[]
    risk_factors: string[]
    validation_status: string
}

interface ValidationEngineProps {
    data: ValidationData
}

export function ValidationEngine({ data }: ValidationEngineProps) {
    if (!data) return null

    return (
        <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000">
            {/* Header Section */}
            <header className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div className="max-w-2xl">
                    <div className="flex items-center gap-2 mb-3">
                        <span className="px-2 py-1 rounded bg-surface-container-high text-tertiary text-[10px] font-black tracking-widest uppercase font-label border border-white/5 antialiased">Project Analysis</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-tertiary shadow-[0_0_8px_#679cff]"></span>
                        <span className="text-on-surface-variant text-[10px] font-black uppercase tracking-widest italic opacity-40 antialiased">Integrity: Optimal</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-extrabold font-headline tracking-tighter text-white mb-4 uppercase italic antialiased">Project Validation</h1>
                    <p className="text-on-surface-variant text-lg max-w-xl font-body antialiased leading-relaxed">
                        Deep vertical analysis for <span className="text-primary font-bold">Launch Intelligence Protocol</span>. We've aggregated demand signals from latent communities and market liquidity data.
                    </p>
                </div>
                <div className="relative group">
                    <div className="absolute -inset-1 bg-tertiary/20 rounded-xl blur-xl group-hover:bg-tertiary/30 transition-all duration-700"></div>
                    <div className="relative bg-surface-container-highest px-10 py-5 rounded-xl border border-tertiary/30 flex flex-col items-center justify-center shadow-2xl glass-edge">
                        <span className="text-[10px] text-tertiary font-black tracking-[0.3em] uppercase mb-1 font-label antialiased italic">Execution_Decision</span>
                        <span className="text-3xl font-black text-white font-headline tracking-tighter uppercase italic antialiased">BUILD</span>
                    </div>
                </div>
            </header>

            {/* Bento Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                {/* Idea Score Main Card */}
                <div className="md:col-span-8 bg-surface-container-low rounded-2xl overflow-hidden border border-white/5 relative shadow-2xl">
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-tertiary/5 to-transparent pointer-events-none"></div>
                    <div className="p-10 relative z-10">
                        <div className="flex justify-between items-start mb-12">
                            <div>
                                <h3 className="text-on-surface-variant text-xs font-black uppercase tracking-[0.4em] font-label mb-2 antialiased italic">Idea_Score</h3>
                                <p className="text-on-surface text-[11px] font-body opacity-40 antialiased italic tracking-tight">Composite metric of feasibility, demand, and timing.</p>
                            </div>
                            <div className="text-right">
                                <span className="text-7xl font-black font-headline text-white tracking-tighter italic antialiased">{data.score}</span>
                                <span className="text-on-surface-variant text-xl font-bold opacity-30">/100</span>
                            </div>
                        </div>
                        <div className="space-y-8">
                            <div className="w-full bg-surface-container-lowest h-2 rounded-full overflow-hidden border border-white/5">
                                <div
                                    className="bg-gradient-to-r from-tertiary-dim to-tertiary h-full shadow-[0_0_20px_#679cff] transition-all duration-[2000ms] custom-ease"
                                    style={{ width: `${data.score}%` }}
                                ></div>
                            </div>
                            <div className="grid grid-cols-3 gap-6 pt-4">
                                <div className="p-6 rounded-xl bg-surface-container-high/40 border border-white/5 glass-edge group hover:bg-surface-container-high/60 transition-all">
                                    <p className="text-[10px] text-on-surface-variant font-black uppercase mb-2 antialiased tracking-widest italic opacity-40">Market Fit</p>
                                    <p className="text-2xl font-black font-headline text-white antialiased italic tracking-tight">94%</p>
                                </div>
                                <div className="p-6 rounded-xl bg-surface-container-high/40 border border-white/5 glass-edge group hover:bg-surface-container-high/60 transition-all">
                                    <p className="text-[10px] text-on-surface-variant font-black uppercase mb-2 antialiased tracking-widest italic opacity-40">Moat Potential</p>
                                    <p className="text-2xl font-black font-headline text-white antialiased italic tracking-tight">68%</p>
                                </div>
                                <div className="p-6 rounded-xl bg-surface-container-high/40 border border-white/5 glass-edge group hover:bg-surface-container-high/60 transition-all">
                                    <p className="text-[10px] text-on-surface-variant font-black uppercase mb-2 antialiased tracking-widest italic opacity-40">Complexity</p>
                                    <p className="text-2xl font-black font-headline text-white antialiased italic tracking-tight uppercase">MED</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Pain Score Card */}
                <div className="md:col-span-4 bg-surface-container rounded-2xl p-10 flex flex-col justify-between border border-white/5 relative overflow-hidden group shadow-2xl">
                    <div className="absolute top-0 left-0 w-full h-1 bg-error shadow-[0_0_20px_rgba(238,125,119,0.5)]"></div>
                    <div>
                        <div className="flex justify-between items-center mb-8">
                            <h3 className="text-on-surface-variant text-xs font-black uppercase tracking-[0.4em] font-label antialiased italic">Pain_Intensity</h3>
                            <span className="material-symbols-outlined text-error text-3xl animate-pulse" style={{ fontVariationSettings: "'FILL' 1" }}>warning</span>
                        </div>
                        <div className="mb-4">
                            <span className="text-5xl font-black font-headline text-white uppercase italic tracking-tighter antialiased">CRITICAL</span>
                        </div>
                        <p className="text-on-surface-variant text-[13px] font-body leading-relaxed antialiased opacity-70">
                            The target audience currently spends 14+ hours weekly on manual synchronization. High churn risk in existing legacy solutions detected via social synthesis.
                        </p>
                    </div>
                    <div className="mt-10 flex items-center gap-3 text-error text-[10px] font-black uppercase tracking-[0.3em] font-headline italic">
                        <span className="w-2.5 h-2.5 rounded-full bg-error shadow-[0_0_10px_#ee7d77] animate-pulse"></span>
                        Immediate Opportunity
                    </div>
                </div>

                {/* Market Size Card */}
                <div className="md:col-span-5 bg-surface-container rounded-2xl p-10 border border-white/5 flex items-center gap-10 relative overflow-hidden shadow-2xl group">
                    <div className="flex-1 relative z-10">
                        <h3 className="text-on-surface-variant text-xs font-black uppercase tracking-[0.4em] font-label mb-8 antialiased italic">Liquidity_Pool (TAM)</h3>
                        <div className="flex items-baseline gap-2 mb-2">
                            <span className="text-6xl font-black font-headline text-white tracking-tighter italic antialiased">$4.2B</span>
                        </div>
                        <p className="text-on-surface-variant text-[11px] font-body opacity-40 antialiased italic tracking-tight">Global Workflow Automation vertical in Enterprise AI segments.</p>
                    </div>
                    <div className="hidden sm:block w-32 h-32 opacity-5 rotate-12 group-hover:rotate-[30deg] group-hover:scale-125 transition-all duration-1000">
                        <span className="material-symbols-outlined text-[140px] text-primary">language</span>
                    </div>
                </div>

                {/* Key Insights - Latent Demand */}
                <div className="md:col-span-7 bg-surface-container-high/40 backdrop-blur-3xl rounded-2xl p-10 border border-white/5 shadow-2xl glass-edge">
                    <h3 className="text-on-surface-variant text-xs font-black uppercase tracking-[0.4em] font-label mb-10 flex items-center gap-4 antialiased italic">
                        <span className="material-symbols-outlined text-tertiary text-2xl">psychology</span>
                        Latent_Demand_Matrix
                    </h3>
                    <div className="space-y-8">
                        {data.market_signals.slice(0, 2).map((signal, i) => (
                            <div key={i} className="flex gap-6 group cursor-default">
                                <div className="w-1 h-14 bg-tertiary/10 group-hover:bg-tertiary transition-all duration-700 rounded-full shadow-[0_0_15px_#679cff]" />
                                <div className="space-y-1">
                                    <p className="text-white font-black font-headline uppercase italic text-[13px] tracking-tight antialiased">
                                        {i === 0 ? "Neural_Synthesis_Alpha" : "Community_Sync_Flow"}
                                    </p>
                                    <p className="text-on-surface-variant text-[13px] leading-relaxed antialiased opacity-70">
                                        {signal} detected in specialized latent communities over the last 90-cycle window.
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Time-to-Value Card */}
                <div className="md:col-span-12 lg:col-span-4 bg-surface-container-high rounded-2xl p-8 border border-white/5 shadow-2xl glass-edge group">
                    <div className="flex items-center gap-6 mb-8">
                        <div className="w-14 h-14 rounded-xl bg-surface-bright flex items-center justify-center border border-white/5 shadow-inner">
                            <span className="material-symbols-outlined text-tertiary text-3xl group-hover:scale-110 transition-transform">speed</span>
                        </div>
                        <div>
                            <h4 className="text-white font-black font-headline uppercase italic antialiased tracking-tight">Time-to-Value</h4>
                            <p className="text-[9px] text-tertiary font-black uppercase tracking-[0.3em] font-label italic antialiased">EXPECTED: 14 DAYS</p>
                        </div>
                    </div>
                    <p className="text-[13px] text-on-surface-variant leading-relaxed mb-8 font-body antialiased opacity-70">
                        Early alpha tests suggest users reach "Aha Moment" within the first 3 interactions using the proposed MVP logic.
                    </p>
                    <div className="flex items-center justify-between">
                        <div className="flex -space-x-3">
                            {[...Array(4)].map((_, i) => (
                                <div key={i} className="w-10 h-10 rounded-full border-2 border-surface-container-high bg-surface-container-highest overflow-hidden shadow-xl ring-2 ring-white/5">
                                    <img
                                        className="w-full h-full object-cover grayscale opacity-60"
                                        src={`https://images.unsplash.com/photo-${1500000000000 + i}?auto=format&fit=crop&q=80&w=100`}
                                        alt="User"
                                    />
                                </div>
                            ))}
                            <div className="w-10 h-10 rounded-full border-2 border-surface-container-high bg-tertiary flex items-center justify-center text-[10px] font-black text-white shadow-[0_0_15px_#679cff] relative z-10 antialiased">+12</div>
                        </div>
                        <span className="text-[10px] font-black uppercase tracking-widest text-tertiary italic">Velocity_Link</span>
                    </div>
                </div>

                {/* Visual Proof Card */}
                <div className="md:col-span-12 lg:col-span-8 h-[280px] rounded-2xl overflow-hidden relative border border-white/5 shadow-2xl group">
                    <img
                        className="w-full h-full object-cover grayscale opacity-20 mix-blend-luminosity group-hover:scale-110 group-hover:opacity-40 transition-all duration-[2000ms] custom-ease"
                        src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2070"
                        alt="Competitive Landscape"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent"></div>
                    <div className="absolute bottom-10 left-10 right-10 flex justify-between items-end">
                        <div>
                            <h4 className="text-3xl font-black text-white font-headline tracking-tighter uppercase italic antialiased mb-2">Competitive Landscape</h4>
                            <p className="text-on-surface-variant text-[11px] font-body antialiased italic tracking-widest uppercase opacity-40">Visual mapping of the blue ocean strategy space.</p>
                        </div>
                        <button className="bg-white/10 backdrop-blur-md px-10 py-4 rounded-xl text-white text-[10px] font-black tracking-[0.3em] uppercase italic hover:bg-white/20 hover:tracking-[0.5em] transition-all duration-700 border border-white/10 glass-edge antialiased">
                            VIEW_FULL_MAP
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
