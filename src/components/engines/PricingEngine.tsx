'use client'

import React from 'react'

interface PricingTier {
    name: string
    price: string
    description: string
    features: string[]
    recommended: boolean
}

interface PricingData {
    project_name: string
    recommended_tier: string
    tiers: PricingTier[]
    revenue_target: string
    rationale: string
}

interface PricingEngineProps {
    data: PricingData
}

export function PricingEngine({ data }: PricingEngineProps) {
    if (!data) return null

    return (
        <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000">
            {/* Header Section */}
            <div className="flex flex-col lg:flex-row justify-between items-start gap-4 mb-10">
                <div className="max-w-xl">
                    <h1 className="font-headline text-xl md:text-2xl font-bold tracking-tighter text-primary mb-2 leading-tight uppercase antialiased">
                        SaaS Monetization Model
                    </h1>
                    <p className="text-on-surface-variant text-[13px] leading-relaxed max-w-xl antialiased opacity-70">
                        Defining the financial backbone. Value-based capture for <span className="text-tertiary">{data.project_name}</span>.
                    </p>
                </div>
                <div className="bg-surface-container/40 backdrop-blur-3xl border border-white/5 p-4 rounded-xl min-w-[280px] shadow-lg glass-edge">
                    <div className="flex justify-between items-center mb-3">
                        <span className="font-label text-[9px] font-bold uppercase tracking-wider text-on-surface-variant antialiased">Revenue Target</span>
                        <span className="text-tertiary font-headline font-bold text-lg antialiased tracking-tight">{data.revenue_target}</span>
                    </div>
                    <div className="h-1.5 w-full bg-surface-container-lowest rounded-full overflow-hidden mb-2 border border-white/5">
                        <div className="h-full bg-gradient-to-r from-tertiary to-tertiary-dim" style={{ width: '65%' }}></div>
                    </div>
                    <p className="text-[10px] text-on-surface-variant leading-relaxed antialiased opacity-40">
                        Targeting {data.recommended_tier} conversion node.
                    </p>
                </div>
            </div>

            {/* Bento Grid: Strategic Rationale & Tiers */}
            <div className="grid grid-cols-12 gap-6">
                {/* Strategic Rationale */}
                <div className="col-span-12 lg:col-span-4 bg-surface-container-low rounded-xl p-6 border border-white/5 relative overflow-hidden group shadow-lg">
                    <span className="material-symbols-outlined text-tertiary mb-6 text-2xl">lightbulb</span>
                    <h3 className="font-headline text-lg font-bold text-white mb-6 uppercase tracking-tight antialiased">Strategic Rationale</h3>
                    <div className="space-y-6">
                        <div className="group/item">
                            <h4 className="text-[11px] font-bold font-headline text-white mb-2 flex items-center uppercase tracking-wider antialiased">
                                <span className="w-1.5 h-1.5 rounded-full bg-tertiary mr-2.5"></span>
                                Value Blueprint
                            </h4>
                            <p className="text-[12px] text-on-surface-variant leading-relaxed antialiased opacity-70">
                                {data.rationale}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Pricing Tiers (The Actionable Cards) */}
                <div className="col-span-12 lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                    {data.tiers.map((tier, i) => (
                        <div
                            key={i}
                            className={cn(
                                "p-6 rounded-xl border flex flex-col transition-all duration-300 shadow-lg relative group overflow-hidden",
                                tier.recommended
                                    ? "bg-surface-container-high border-tertiary/40 z-10"
                                    : "bg-surface-container border-white/5 hover:bg-surface-container-high"
                            )}
                        >
                            {tier.recommended && (
                                <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 bg-tertiary px-3 py-0.5 rounded-full shadow-md z-20">
                                    <span className="text-[8px] font-bold uppercase tracking-wider text-on-tertiary-container antialiased">RECOMMENDED</span>
                                </div>
                            )}
                            <div className="mb-6 relative z-10">
                                <span className={cn(
                                    "text-[9px] font-bold uppercase tracking-widest antialiased",
                                    tier.recommended ? "text-tertiary" : "text-on-surface-variant/40"
                                )}>
                                    {tier.name}
                                </span>
                                <div className="mt-3 flex items-baseline gap-1.5">
                                    <span className="text-2xl font-headline font-bold text-white tracking-tight antialiased">{tier.price}</span>
                                    {tier.price !== "Custom" && !tier.price.includes('/') && <span className="text-on-surface-variant/40 text-[9px] font-bold uppercase tracking-widest">/MO</span>}
                                </div>
                                <p className="text-[10px] text-on-surface-variant/40 mt-1 antialiased">{tier.description}</p>
                            </div>
                            <ul className="space-y-2.5 mb-8 flex-1 relative z-10">
                                {tier.features.map((feature, j) => (
                                    <li key={j} className="flex items-start text-[12px] text-on-surface-variant/70 antialiased">
                                        <span className="material-symbols-outlined text-tertiary text-base mr-2">check</span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            <button className={cn(
                                "w-full py-3 rounded-lg font-bold text-[9px] uppercase tracking-wider shadow-md relative z-10 transition-all",
                                tier.recommended
                                    ? "bg-gradient-to-r from-tertiary to-tertiary-dim text-white"
                                    : "bg-surface-container-highest border border-white/5 text-on-surface-variant hover:text-white"
                            )}>
                                {tier.price === "Custom" ? "Contact Sales" : `Select ${tier.name}`}
                            </button>
                        </div>
                    ))}
                </div>

                {/* Revenue Distribution */}
                <div className="col-span-12 lg:col-span-8 bg-surface-container-low p-6 rounded-xl border border-white/5 shadow-lg relative overflow-hidden group">
                    <div className="flex justify-between items-center mb-8">
                        <div>
                            <h3 className="font-headline text-lg font-bold text-white uppercase tracking-tight antialiased">Revenue Distribution</h3>
                            <p className="text-[9px] text-on-surface-variant uppercase tracking-widest mt-1 antialiased opacity-40">Projected mix per segment</p>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-white/10 border border-white/5"></span>
                                <span className="text-[9px] text-on-surface-variant font-bold uppercase tracking-wider antialiased opacity-40">Starter</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-tertiary"></span>
                                <span className="text-[9px] text-on-surface-variant font-bold uppercase tracking-wider antialiased opacity-40">Pro</span>
                            </div>
                        </div>
                    </div>
                    {/* Visual Chart Simulation */}
                    <div className="h-40 flex items-end gap-4 px-2">
                        {[40, 60, 85, 70, 95, 35].map((val, i) => (
                            <div key={i} className="flex-1 bg-surface-container-highest/10 rounded-t-lg relative group/bar transition-all duration-500 overflow-hidden">
                                <div
                                    className={cn(
                                        "absolute bottom-0 w-full rounded-t-lg transition-all duration-1000",
                                        i === 0 || i === 5 ? "bg-white/5" : "bg-gradient-to-t from-tertiary/60 to-tertiary"
                                    )}
                                    style={{ height: `${val}%` }}
                                ></div>
                                <div className="absolute -top-6 left-1/2 -translate-x-1/2 opacity-0 group-hover/bar:opacity-100 transition-all text-[8px] font-bold text-tertiary tracking-widest transform group-hover/bar:-translate-y-1">
                                    {['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN'][i]}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Insight Card */}
                <div className="col-span-12 lg:col-span-4 rounded-xl overflow-hidden relative min-h-[180px] border border-white/5 shadow-lg group">
                    <img
                        className="absolute inset-0 w-full h-full object-cover grayscale opacity-10"
                        src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=2070"
                        alt="Monetization Insight"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-surface-container-low p-6 flex flex-col justify-end">
                        <span className="font-label text-[9px] font-bold uppercase tracking-wider text-tertiary mb-2 antialiased">Market Intelligence</span>
                        <h4 className="font-headline text-base font-bold text-white mb-2 leading-tight uppercase tracking-tight antialiased">
                            Matching intent to outcome.
                        </h4>
                        <p className="text-[12px] text-on-surface-variant leading-tight antialiased opacity-70 tracking-tight line-clamp-2">
                            LaunchOS provides the diagnostic data to validate your model in real-time.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

function cn(...classes: any[]) {
    return classes.filter(Boolean).join(' ')
}
