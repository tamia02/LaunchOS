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
            {/* Header Section: Compact Layout */}
            <header className="flex flex-col md:flex-row justify-between items-start gap-4 mb-10">
                <div className="max-w-2xl">
                    <h1 className="text-xl font-bold font-headline tracking-tight text-on-surface mb-2 leading-tight antialiased">
                        Architecting <span className="text-tertiary">Precision</span> Market Fits.
                    </h1>
                    <p className="text-[13px] text-on-surface-variant leading-relaxed antialiased">
                        {data.why_this_niche} We recommend prioritizing <span className="text-white font-medium">{data.niche_name}</span> as your primary entry point.
                    </p>
                </div>
                <div className="flex flex-col items-end">
                    <div className="bg-surface-container-high glass-edge rounded-lg p-4 border border-white/5 flex items-center gap-4 shadow-lg">
                        <div className="relative w-16 h-16">
                            <svg className="w-full h-full transform -rotate-90">
                                <circle className="text-surface-container-low" cx="32" cy="32" fill="transparent" r="28" stroke="currentColor" strokeWidth="4"></circle>
                                <circle className="text-tertiary transition-all duration-1000" cx="32" cy="32" fill="transparent" r="28" stroke="currentColor" strokeDasharray="175.93" strokeDashoffset="21.11" strokeWidth="5"></circle>
                            </svg>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <span className="text-lg font-black font-headline text-white">88%</span>
                            </div>
                        </div>
                        <div>
                            <p className="text-[9px] font-bold uppercase tracking-wider text-on-surface-variant mb-0.5 antialiased">Niche Fit</p>
                            <h3 className="text-base font-headline font-bold text-white antialiased">Strong Alpha</h3>
                            <p className="text-[10px] text-on-surface-variant antialiased">Recommended</p>
                        </div>
                    </div>
                </div>
            </header>

            {/* Bento Grid */}
            <div className="grid grid-cols-12 gap-6">
                {/* Main Recommendation Card */}
                <div className="col-span-12 lg:col-span-8 bg-surface-container-low rounded-xl overflow-hidden border border-white/5 group shadow-lg">
                    <div className="relative h-[160px]">
                        <img
                            alt={data.niche_name}
                            className="w-full h-full object-cover grayscale opacity-30 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2070"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-surface-container-low via-surface-container-low/40 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 p-6">
                            <div className="inline-block px-2 py-0.5 bg-tertiary/20 text-tertiary text-[9px] font-bold tracking-wider uppercase rounded mb-2 antialiased">Core Recommendation</div>
                            <h2 className="text-2xl font-headline font-extrabold tracking-tight mb-2 text-white uppercase antialiased">{data.niche_name}</h2>
                            <p className="text-[13px] text-on-surface-variant max-w-lg antialiased leading-snug line-clamp-2">{data.niche_description}</p>
                        </div>
                    </div>
                    <div className="p-6 grid grid-cols-3 gap-6 border-t border-white/5">
                        <div>
                            <p className="text-[9px] font-bold text-on-surface-variant uppercase mb-1 antialiased tracking-widest">Market Size</p>
                            <p className="text-lg font-headline font-bold text-white antialiased">{data.audience_size}</p>
                        </div>
                        <div>
                            <p className="text-[9px] font-bold text-on-surface-variant uppercase mb-1 antialiased tracking-widest">Pain Level</p>
                            <p className="text-lg font-headline font-bold text-white antialiased">{data.pain_level}</p>
                        </div>
                        <div>
                            <p className="text-[9px] font-bold text-on-surface-variant uppercase mb-1 antialiased tracking-widest">Entry Barrier</p>
                            <p className="text-lg font-headline font-bold text-tertiary antialiased uppercase">Optimized</p>
                        </div>
                    </div>
                </div>

                {/* Persona Card */}
                <div className="col-span-12 lg:col-span-4 space-y-4">
                    <div className="bg-surface-container glass-edge rounded-xl p-5 border border-white/5 shadow-lg">
                        <div className="flex items-center gap-3 mb-5">
                            <div className="w-12 h-12 rounded-full overflow-hidden border border-tertiary shadow-md">
                                <img
                                    alt="Target Persona"
                                    src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=1000"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div>
                                <h4 className="text-base font-headline font-bold text-white antialiased tracking-tight">Persona Profile</h4>
                                <p className="text-[9px] text-tertiary font-bold uppercase tracking-wider antialiased">Primary Alpha</p>
                            </div>
                        </div>
                        <h5 className="text-[11px] font-bold mb-3 text-white uppercase tracking-wider antialiased">Key Pain Points</h5>
                        <ul className="space-y-2">
                            {data.audience_tags.slice(0, 3).map((tag, i) => (
                                <li key={i} className="flex items-start gap-2.5 group">
                                    <span className="material-symbols-outlined text-tertiary text-[14px] mt-0.5">priority_high</span>
                                    <p className="text-[12px] text-on-surface-variant antialiased leading-relaxed">{tag}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="bg-surface-container-high glass-edge rounded-xl p-5 border border-white/5 shadow-lg group hover:bg-surface-container-high/80 transition-all duration-500">
                        <h4 className="text-[11px] font-bold uppercase tracking-wider text-on-surface-variant mb-4 antialiased">Market Momentum</h4>
                        <div className="space-y-3">
                            <div className="flex justify-between items-end">
                                <span className="text-[12px] font-medium text-white antialiased">Inbound Demand</span>
                                <span className="text-lg font-headline font-bold text-tertiary antialiased tracking-tight">+240%</span>
                            </div>
                            <div className="w-full h-1 bg-surface-container-low rounded-full overflow-hidden">
                                <div className="w-3/4 h-full bg-tertiary transition-all duration-1000"></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Adjacent Opportunities */}
                <div className="col-span-12 bg-surface-container-low p-6 rounded-xl border border-white/5 shadow-inner">
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="text-lg font-headline font-bold text-white uppercase tracking-tight antialiased">Adjacent Intelligence</h3>
                        <button className="text-[9px] text-tertiary font-bold uppercase tracking-widest flex items-center gap-2 group/link transition-all antialiased hover:opacity-80">
                            EXPLORE_NETWORK <span className="material-symbols-outlined text-[14px] group-hover/link:translate-x-1 transition-transform">arrow_forward</span>
                        </button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {data.secondary_niches.map((niche, i) => (
                            <div key={i} className="bg-surface-container-high/40 rounded-lg p-5 border border-white/5 hover:border-tertiary/40 transition-all duration-500 cursor-pointer group hover:bg-surface-container-high/60 shadow-md">
                                <div className="flex justify-between items-start mb-4">
                                    <span className="material-symbols-outlined text-2xl text-on-surface-variant group-hover:text-tertiary transition-all">shield</span>
                                    <span className="px-2 py-0.5 bg-surface-bright text-[8px] font-black tracking-widest rounded-full border border-white/5">{70 + i * 10}% MATCH</span>
                                </div>
                                <h4 className="font-headline font-bold text-white mb-1.5 uppercase tracking-tight text-[13px] antialiased">{niche}</h4>
                                <p className="text-[11px] text-on-surface-variant leading-relaxed antialiased">Strategic expansion vector identified.</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
