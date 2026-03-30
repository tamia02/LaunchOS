'use client'

import React from 'react'

interface PricingTier {
    name: string
    price: string
    features: string[]
    recommended?: boolean
}

interface PricingData {
    model_name: string
    tiers: PricingTier[]
    rationale: string[]
}

interface PricingEngineProps {
    data: PricingData
}

export function PricingEngine({ data }: PricingEngineProps) {
    if (!data) return null

    return (
        <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000">
            {/* Header Section */}
            <div className="flex flex-col lg:flex-row justify-between items-end gap-10 mb-16">
                <div className="max-w-2xl">
                    <h1 className="font-headline text-5xl font-extrabold tracking-tighter text-primary mb-6 leading-tight uppercase italic antialiased">
                        SaaS Pricing & <br />Monetization Model
                    </h1>
                    <p className="text-on-surface-variant text-lg leading-relaxed max-w-xl antialiased opacity-70">
                        Define the financial backbone of your startup. We focus on <span className="text-white font-bold">value-based capture</span> rather than cost-plus recovery for <span className="text-tertiary">Launch Intelligence Protocol</span>.
                    </p>
                </div>
                <div className="bg-surface-container/40 backdrop-blur-3xl border border-white/5 p-8 rounded-2xl min-w-[320px] shadow-2xl glass-edge">
                    <div className="flex justify-between items-center mb-6">
                        <span className="font-label text-[10px] font-black uppercase tracking-[0.3em] text-on-surface-variant italic antialiased">Penetration_Target</span>
                        <span className="text-tertiary font-headline font-black text-2xl italic antialiased tracking-tighter">18%</span>
                    </div>
                    <div className="h-2 w-full bg-surface-container-lowest rounded-full overflow-hidden mb-4 border border-white/5 shadow-inner">
                        <div className="h-full bg-gradient-to-r from-tertiary to-tertiary-dim shadow-[0_0_15px_#679cff]" style={{ width: '18%' }}></div>
                    </div>
                    <p className="text-[11px] text-on-surface-variant leading-relaxed antialiased italic opacity-40">
                        Targeting early adopters in the high-frequency trading niche within the Q3 execution window.
                    </p>
                </div>
            </div>

            {/* Bento Grid: Strategic Rationale & Tiers */}
            <div className="grid grid-cols-12 gap-6">
                {/* Strategic Rationale (Asymmetric Large Card) */}
                <div className="col-span-12 lg:col-span-4 bg-surface-container-low rounded-xl p-10 border border-white/5 relative overflow-hidden group shadow-2xl">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-tertiary/10 blur-[80px] rounded-full pointer-events-none opacity-50"></div>
                    <span className="material-symbols-outlined text-tertiary mb-10 text-4xl group-hover:rotate-12 transition-transform duration-700" style={{ fontVariationSettings: "'FILL' 1" }}>lightbulb</span>
                    <h3 className="font-headline text-2xl font-black text-white mb-8 uppercase italic tracking-tight antialiased">Strategic Rationale</h3>
                    <div className="space-y-8">
                        {data.rationale.map((point, i) => (
                            <div key={i} className="group/item">
                                <h4 className="text-[13px] font-black font-headline text-white mb-3 flex items-center uppercase italic tracking-wide antialiased">
                                    <span className="w-2 h-2 rounded-full bg-tertiary mr-3 shadow-[0_0_8px_#679cff] group-hover/item:scale-125 transition-transform"></span>
                                    {i === 0 ? "Value_Capture" : i === 1 ? "Expansion_Flow" : "Unit_Economics"}
                                </h4>
                                <p className="text-[13px] text-on-surface-variant leading-relaxed antialiased opacity-70 group-hover/item:opacity-100 transition-opacity">
                                    {point}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Pricing Tiers (The Actionable Cards) */}
                <div className="col-span-12 lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                    {data.tiers.map((tier, i) => (
                        <div
                            key={i}
                            className={cn(
                                "p-10 rounded-xl border flex flex-col transition-all duration-700 custom-ease shadow-2xl relative group overflow-hidden",
                                tier.recommended
                                    ? "bg-surface-container-high border-tertiary/40 lg:-translate-y-4 scale-105 z-10 shadow-[0_40px_80px_rgba(0,0,0,0.5)]"
                                    : "bg-surface-container border-white/5 hover:bg-surface-container-high hover:border-white/10"
                            )}
                        >
                            {tier.recommended && (
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-tertiary px-5 py-1.5 rounded-full shadow-[0_0_20px_rgba(103,156,255,0.4)] z-20">
                                    <span className="text-[9px] font-black uppercase tracking-[0.2em] text-on-tertiary-container italic antialiased">RECOMMENDED</span>
                                </div>
                            )}
                            <div className="mb-10 relative z-10">
                                <span className={cn(
                                    "text-[10px] font-black uppercase tracking-[0.4em] italic antialiased",
                                    tier.recommended ? "text-tertiary" : "text-on-surface-variant/40"
                                )}>
                                    {tier.name}
                                </span>
                                <div className="mt-6 flex items-baseline gap-2">
                                    <span className="text-5xl font-headline font-black text-white italic tracking-tighter antialiased">{tier.price}</span>
                                    {tier.price !== "Custom" && <span className="text-on-surface-variant/40 text-xs font-black uppercase italic tracking-widest">/MO</span>}
                                </div>
                            </div>
                            <ul className="space-y-5 mb-12 flex-1 relative z-10">
                                {tier.features.map((feature, j) => (
                                    <li key={j} className="flex items-start text-[13px] text-on-surface-variant/70 antialiased group-hover:text-on-surface transition-colors cursor-default">
                                        <span className="material-symbols-outlined text-tertiary text-lg mr-3 shadow-[0_0_10px_rgba(103,156,255,0.2)]">check</span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            <button className={cn(
                                "w-full py-5 rounded-xl font-black text-[10px] uppercase tracking-[0.3em] italic transition-all duration-700 custom-ease active:scale-95 shadow-xl relative z-10 overflow-hidden",
                                tier.recommended
                                    ? "bg-gradient-to-r from-tertiary to-tertiary-dim text-white hover:brightness-110"
                                    : "bg-surface-container-highest border border-white/5 text-on-surface-variant hover:text-white hover:bg-surface-bright"
                            )}>
                                {tier.price === "Custom" ? "Contact_Neural_Sales" : `Initialize_${tier.name}_Sync`}
                            </button>
                        </div>
                    ))}
                </div>

                {/* Visualization: Revenue Distribution */}
                <div className="col-span-12 lg:col-span-8 bg-surface-container-low p-10 rounded-xl border border-white/5 shadow-2xl relative overflow-hidden group">
                    <div className="flex justify-between items-center mb-12">
                        <div>
                            <h3 className="font-headline text-2xl font-black text-white uppercase italic tracking-tighter antialiased">Revenue Distribution</h3>
                            <p className="text-[10px] text-on-surface-variant uppercase tracking-[0.4em] mt-2 italic antialiased opacity-40">Projected_mix_per_user_segment</p>
                        </div>
                        <div className="flex items-center gap-8">
                            <div className="flex items-center gap-3">
                                <span className="w-2.5 h-2.5 rounded-full bg-white/10 ring-1 ring-white/5 shadow-inner"></span>
                                <span className="text-[10px] text-on-surface-variant font-black uppercase tracking-[0.3em] italic antialiased opacity-40">Starter</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="w-2.5 h-2.5 rounded-full bg-tertiary shadow-[0_0_10px_#679cff]"></span>
                                <span className="text-[10px] text-on-surface-variant font-black uppercase tracking-[0.3em] italic antialiased opacity-40">Pro</span>
                            </div>
                        </div>
                    </div>
                    {/* Visual Chart Simulation */}
                    <div className="h-56 flex items-end gap-6 px-4">
                        {[40, 60, 85, 70, 95, 35].map((val, i) => (
                            <div key={i} className="flex-1 bg-surface-container-highest/20 rounded-t-2xl relative group/bar transition-all duration-700 hover:bg-surface-container-highest/40 overflow-hidden">
                                <div
                                    className={cn(
                                        "absolute bottom-0 w-full rounded-t-2xl transition-all duration-[1500ms] custom-ease group-hover/bar:brightness-110",
                                        i === 0 || i === 5 ? "bg-white/5" : "bg-gradient-to-t from-tertiary/60 to-tertiary shadow-[0_0_20px_rgba(103,156,255,0.2)]"
                                    )}
                                    style={{ height: `${val}%` }}
                                ></div>
                                <div className="absolute -top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover/bar:opacity-100 transition-all duration-500 text-[10px] font-black text-tertiary italic tracking-widest font-label transform group-hover/bar:-translate-y-2">
                                    {['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN'][i]}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Image/Decorative Insight Card */}
                <div className="col-span-12 lg:col-span-4 rounded-xl overflow-hidden relative min-h-[300px] border border-white/5 shadow-2xl group">
                    <img
                        className="absolute inset-0 w-full h-full object-cover grayscale opacity-20 group-hover:scale-110 group-hover:opacity-40 transition-all duration-[2000ms] custom-ease"
                        src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=2070"
                        alt="Monetization Insight"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-surface-container-low via-surface-container-low/40 to-transparent p-10 flex flex-col justify-end">
                        <span className="font-label text-[10px] font-black uppercase tracking-[0.4em] text-tertiary mb-4 italic antialiased">Market_Intelligence</span>
                        <h4 className="font-headline text-2xl font-black text-white mb-6 leading-tight uppercase italic tracking-tighter antialiased">
                            Monetization isn't about features; it's about matching intent to outcome.
                        </h4>
                        <p className="text-[13px] text-on-surface-variant leading-relaxed antialiased opacity-70 italic tracking-tight">
                            Every pricing adjustment is a neural hypothesis. LaunchOS provides the diagnostic data to validate your model in real-time execution.
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
