'use client'

import React from 'react'

interface NicheData {
    niche_name: string
    niche_description: string
    why_this_niche: string
    audience_size: string
    pain_level: string
    audience_tags: string[]
    where_they_hang_out: string[]
    secondary_niches: string[]
}

interface NicheEngineProps {
    data: NicheData
}

export function NicheEngine({ data }: NicheEngineProps) {
    if (!data) return null

    return (
        <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000">
            {/* Header Section: Editorial Layout */}
            <header className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20">
                <div className="max-w-2xl">
                    <h1 className="text-5xl font-extrabold font-headline tracking-tighter text-on-surface mb-6 leading-[1.1] uppercase italic antialiased">
                        Architecting <span className="text-tertiary">Precision</span> Market Fits.
                    </h1>
                    <p className="text-lg text-on-surface-variant font-light leading-relaxed antialiased">
                        {data.why_this_niche} We recommend prioritizing <span className="text-white font-bold">{data.niche_name}</span> as your primary entry point.
                    </p>
                </div>
                <div className="flex flex-col items-end">
                    <div className="bg-surface-container-high glass-edge rounded-xl p-6 border border-white/5 flex items-center gap-6 shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
                        <div className="relative w-24 h-24">
                            <svg className="w-full h-full transform -rotate-90">
                                <circle className="text-surface-container-low" cx="48" cy="48" fill="transparent" r="42" stroke="currentColor" strokeWidth="6"></circle>
                                <circle className="text-tertiary transition-all duration-1000" cx="48" cy="48" fill="transparent" r="42" stroke="currentColor" strokeDasharray="263.89" strokeDashoffset="31.66" strokeWidth="8"></circle>
                            </svg>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <span className="text-2xl font-black font-headline">88%</span>
                            </div>
                        </div>
                        <div>
                            <p className="text-sm font-bold uppercase tracking-widest text-on-surface-variant mb-1 antialiased">Niche Fit</p>
                            <h3 className="text-xl font-headline font-bold text-white antialiased">Strong Alpha</h3>
                            <p className="text-xs text-on-surface-variant antialiased">Recommended for Immediate Execution</p>
                        </div>
                    </div>
                </div>
            </header>

            {/* Bento Grid */}
            <div className="grid grid-cols-12 gap-6">
                {/* Main Recommendation Card */}
                <div className="col-span-12 lg:col-span-8 bg-surface-container-low rounded-xl overflow-hidden border border-white/5 group shadow-2xl">
                    <div className="relative h-[400px]">
                        <img
                            alt={data.niche_name}
                            className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2070"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-surface-container-low via-surface-container-low/40 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 p-10">
                            <div className="inline-block px-3 py-1 bg-tertiary/20 text-tertiary text-[10px] font-bold tracking-[0.2em] uppercase rounded mb-4 antialiased">Core Recommendation</div>
                            <h2 className="text-4xl font-headline font-extrabold tracking-tighter mb-4 text-white uppercase italic antialiased">{data.niche_name}</h2>
                            <p className="text-on-surface-variant max-w-lg antialiased leading-relaxed">{data.niche_description}</p>
                        </div>
                    </div>
                    <div className="p-10 grid grid-cols-3 gap-8 border-t border-white/5">
                        <div>
                            <p className="text-xs font-bold text-on-surface-variant uppercase mb-2 antialiased tracking-widest">Market Size</p>
                            <p className="text-2xl font-headline font-bold text-white antialiased">{data.audience_size} <span className="text-sm text-on-surface-variant font-normal tracking-normal uppercase ml-1">TAM</span></p>
                        </div>
                        <div>
                            <p className="text-xs font-bold text-on-surface-variant uppercase mb-2 antialiased tracking-widest">Pain Level</p>
                            <p className="text-2xl font-headline font-bold text-white antialiased">{data.pain_level}</p>
                        </div>
                        <div>
                            <p className="text-xs font-bold text-on-surface-variant uppercase mb-2 antialiased tracking-widest">Entry Barrier</p>
                            <p className="text-2xl font-headline font-bold text-tertiary antialiased uppercase italic">Low-Complexity</p>
                        </div>
                    </div>
                </div>

                {/* Persona Card */}
                <div className="col-span-12 lg:col-span-4 space-y-6">
                    <div className="bg-surface-container glass-edge rounded-xl p-8 border border-white/5 shadow-2xl">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-tertiary shadow-[0_0_15px_#679cff]">
                                <img
                                    alt="Target Persona"
                                    src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=1000"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div>
                                <h4 className="text-xl font-headline font-bold text-white antialiased tracking-tight">Clara J.</h4>
                                <p className="text-xs text-tertiary font-bold uppercase tracking-widest italic antialiased">Primary Persona</p>
                            </div>
                        </div>
                        <h5 className="text-sm font-bold mb-4 text-white uppercase tracking-widest antialiased">Key Pain Points</h5>
                        <ul className="space-y-4">
                            {data.audience_tags.slice(0, 3).map((tag, i) => (
                                <li key={i} className="flex items-start gap-3 group">
                                    <span className="material-symbols-outlined text-tertiary text-sm mt-0.5 group-hover:scale-125 transition-transform">priority_high</span>
                                    <p className="text-sm text-on-surface-variant antialiased leading-relaxed">{tag}: High cognitive load and initialization friction.</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="bg-surface-container-high glass-edge rounded-xl p-8 border border-white/5 shadow-2xl group hover:bg-surface-container-high/80 transition-all duration-500">
                        <h4 className="text-sm font-bold uppercase tracking-widest text-on-surface-variant mb-6 antialiased italic">Market Momentum</h4>
                        <div className="space-y-4">
                            <div className="flex justify-between items-end">
                                <span className="text-sm font-medium text-white antialiased">Inbound Demand</span>
                                <span className="text-2xl font-headline font-bold text-tertiary antialiased tracking-tighter italic">+240%</span>
                            </div>
                            <div className="w-full h-1.5 bg-surface-container-low rounded-full overflow-hidden">
                                <div className="w-3/4 h-full bg-tertiary shadow-[0_0_10px_#679cff]"></div>
                            </div>
                            <p className="text-[11px] text-on-surface-variant leading-relaxed antialiased italic tracking-tight">Search volume for {data.niche_name} has spiked by 2.4x in the last 2 cycles.</p>
                        </div>
                    </div>
                </div>

                {/* Adjacent Opportunities */}
                <div className="col-span-12 bg-surface-container-low p-10 rounded-xl border border-white/5 shadow-inner">
                    <div className="flex justify-between items-center mb-10">
                        <h3 className="text-3xl font-headline font-black text-white uppercase italic tracking-tighter antialiased">Adjacent Intelligence</h3>
                        <button className="text-[10px] text-tertiary font-black uppercase tracking-[0.4em] flex items-center gap-3 group/link italic transition-all antialiased hover:tracking-[0.6em]">
                            EXPLORE_NETWORK <span className="material-symbols-outlined group-hover/link:translate-x-2 transition-transform">arrow_forward</span>
                        </button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {data.secondary_niches.map((niche, i) => (
                            <div key={i} className="bg-surface-container-high/40 rounded-xl p-8 border border-white/5 hover:border-tertiary/40 transition-all duration-500 cursor-pointer group hover:bg-surface-container-high/60 shadow-xl">
                                <div className="flex justify-between items-start mb-6">
                                    <span className="material-symbols-outlined text-4xl text-on-surface-variant group-hover:text-tertiary transition-all group-hover:scale-110">shield</span>
                                    <span className="px-3 py-1 bg-surface-bright text-[9px] font-black tracking-widest rounded-full border border-white/10">{60 + i * 12}% MATCH</span>
                                </div>
                                <h4 className="font-headline font-black text-white mb-3 uppercase italic tracking-tight antialiased">{niche}</h4>
                                <p className="text-xs text-on-surface-variant leading-relaxed antialiased">Strategic expansion vector for the {data.niche_name} core protocol.</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
