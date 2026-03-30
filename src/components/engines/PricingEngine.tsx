import { cn } from '@/lib/utils'

interface PricingTier {
    name: string
    price: number
    billing: string
    tagline: string
    features: string[]
    best_for: string
    is_recommended: boolean
}

interface PricingData {
    recommended_model: string
    tiers: PricingTier[]
    why_this_model: string
    pricing_psychology: string
    free_tier_purpose: string
    upgrade_trigger: string
    month1_revenue_target: string
    month6_revenue_target: string
    avoid: string
    annual_discount: string
}

export function PricingEngine({ data }: { data: PricingData }) {
    if (!data) return null

    return (
        <div className="animate-in fade-in slide-in-from-bottom-8 duration-[2000ms] custom-ease">
            {/* Revenue Header - Editorial Layout */}
            <header className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-12">
                <div className="max-w-3xl">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="px-3 py-1.5 rounded-lg bg-surface-variant/20 shadow-inner">
                            <span className="text-tertiary text-[10px] font-black tracking-[0.4em] uppercase font-label">Financial Core 06</span>
                        </div>
                        <span className="w-1.5 h-1.5 rounded-full bg-tertiary shadow-[0_0_10px_#679cff]"></span>
                    </div>
                    <h1 className="text-6xl md:text-8xl font-black font-headline tracking-tighter text-white mb-8 leading-[0.9] uppercase italic">Revenue <br /> <span className="text-tertiary">Architectures.</span></h1>
                    <div className="flex flex-col md:flex-row gap-10 items-start md:items-center px-2">
                        <p className="text-xl text-on-surface-variant font-body leading-relaxed max-w-xl italic opacity-80 antialiased">
                            {data.recommended_model}: <span className="text-white font-black underline decoration-tertiary/40">{data.why_this_model}</span>
                        </p>
                    </div>
                </div>
                <div className="bg-surface-container-low p-10 rounded-[2.5rem] min-w-[360px] shadow-[0_40px_80px_rgba(0,0,0,0.4)] border border-white/5 group relative overflow-hidden transition-all duration-700 hover:scale-[1.03]">
                    <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:scale-110 transition-transform">
                        <span className="material-symbols-outlined text-7xl text-tertiary">monetization_on</span>
                    </div>
                    <div className="flex justify-between items-center mb-6 relative z-10">
                        <span className="font-label text-[10px] font-black uppercase tracking-[0.3em] text-on-surface-variant/40 italic">Penetration Velocity</span>
                        <span className="material-symbols-outlined text-tertiary text-xl animate-pulse">target</span>
                    </div>
                    <div className="flex items-baseline gap-3 mb-6 relative z-10">
                        <span className="text-5xl font-black text-white font-headline italic tracking-tighter">{data.month1_revenue_target}</span>
                        <span className="text-[10px] text-on-surface-variant/40 font-black font-label uppercase tracking-[0.2em]">Mo. 1 Target</span>
                    </div>
                    <div className="h-1 w-full bg-surface-container-highest rounded-full overflow-hidden mb-4 relative z-10">
                        <div className="h-full bg-tertiary shadow-[0_0_10px_#679cff] animate-pulse" style={{ width: '40%' }}></div>
                    </div>
                    <p className="text-[11px] text-on-surface-variant/60 font-body italic antialiased relative z-10">
                        Targeting <span className="text-white font-bold">{data.month6_revenue_target}</span> run-rate by Month 6.
                    </p>
                </div>
            </header>

            {/* Pricing Matrix - Cinematic Bento */}
            <div className="grid grid-cols-12 gap-10 mb-16">
                {/* Strategic Intelligence */}
                <div className="col-span-12 lg:col-span-4 bg-surface-container-low p-12 rounded-[3rem] shadow-[0_40px_100px_rgba(0,0,0,0.5)] border border-white/5 relative overflow-hidden group">
                    <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-tertiary/10 rounded-full blur-[100px] -ml-48 -mt-48 transition-opacity opacity-0 group-hover:opacity-100 duration-1000"></div>
                    <div className="mb-12 relative z-10">
                        <div className="w-16 h-16 rounded-2xl bg-surface-container-high flex items-center justify-center mb-8 shadow-xl glass-edge group-hover:rotate-12 transition-transform">
                            <span className="material-symbols-outlined text-tertiary text-3xl">lightbulb</span>
                        </div>
                        <h3 className="font-headline text-4xl font-black text-white mb-2 uppercase tracking-tighter italic leading-none">Value Capture</h3>
                        <p className="text-tertiary text-[10px] font-black uppercase tracking-[0.4em] font-label">Unit Economics Optimization</p>
                    </div>
                    <div className="space-y-12 relative z-10">
                        <div className="space-y-4">
                            <h4 className="text-[10px] font-black text-on-surface-variant/30 uppercase tracking-[0.4em] font-label px-2">Pricing Psychology</h4>
                            <div className="bg-surface-container/40 p-8 rounded-2xl glass-edge border border-white/5 group-hover:bg-surface-container-high/60 transition-colors">
                                <p className="text-base text-white/90 font-body italic leading-relaxed antialiased">
                                    "{data.pricing_psychology}"
                                </p>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <h4 className="text-[10px] font-black text-on-surface-variant/30 uppercase tracking-[0.4em] font-label px-2">Expansion Protocol</h4>
                            <p className="text-sm text-on-surface-variant/70 font-body leading-relaxed italic antialiased pl-6 border-l-2 border-tertiary/20">
                                {data.upgrade_trigger}
                            </p>
                        </div>
                        <div className="bg-error/5 p-6 rounded-2xl border border-error/10 hover:bg-error/10 transition-colors duration-500">
                            <div className="flex items-center gap-3 mb-3">
                                <span className="material-symbols-outlined text-error text-sm">warning_amber</span>
                                <h4 className="text-[10px] font-black text-error uppercase tracking-[0.3em] font-label">Risk Threshold</h4>
                            </div>
                            <p className="text-[11px] text-error/60 font-body italic leading-relaxed antialiased px-2">Avoid: {data.avoid}</p>
                        </div>
                    </div>
                </div>

                {/* Tactical Tiers */}
                <div className="col-span-12 lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-8">
                    {data.tiers.map((tier, i) => (
                        <div key={i} className={cn(
                            "p-10 rounded-[3rem] shadow-[0_40px_100px_rgba(0,0,0,0.5)] border border-white/5 transition-all duration-700 flex flex-col group relative overflow-hidden",
                            tier.is_recommended ? "bg-surface-container-high brightness-110 z-10" : "bg-surface-container"
                        )}>
                            {tier.is_recommended && (
                                <div className="absolute top-0 right-0 p-12 opacity-5 group-hover:scale-110 transition-transform">
                                    <span className="material-symbols-outlined text-9xl text-tertiary">star</span>
                                </div>
                            )}

                            <div className="mb-12 relative z-10">
                                <div className="flex justify-between items-start mb-6">
                                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-on-surface-variant/40 font-label">{tier.name}</span>
                                    {tier.is_recommended && (
                                        <div className="px-3 py-1.5 rounded-lg bg-tertiary/20 shadow-inner">
                                            <span className="text-tertiary text-[9px] font-black tracking-[0.2em] uppercase font-label">Choice</span>
                                        </div>
                                    )}
                                </div>
                                <div className="flex items-baseline gap-3 mb-6">
                                    <span className="text-6xl font-black font-headline text-white tracking-tighter italic decoration-tertiary underline decoration-4 underline-offset-8">${tier.price}</span>
                                    <span className="text-on-surface-variant/40 text-[10px] font-black uppercase tracking-[0.2em] font-label">/{tier.billing}</span>
                                </div>
                                <p className="text-[13px] font-body italic text-on-surface-variant/60 leading-relaxed antialiased">
                                    {tier.tagline}
                                </p>
                            </div>

                            <div className="space-y-6 mb-12 flex-1 relative z-10">
                                {tier.features.map((feature, j) => (
                                    <div key={j} className="flex items-start gap-4 group/feat">
                                        <div className="w-5 h-5 rounded-md bg-tertiary/10 flex items-center justify-center group-hover/feat:bg-tertiary transition-colors">
                                            <span className="material-symbols-outlined text-tertiary text-xs group-hover/feat:text-white transition-colors">check</span>
                                        </div>
                                        <span className="text-xs font-body text-on-surface-variant/80 group-hover/feat:text-white transition-colors antialiased leading-tight italic">
                                            {feature}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            <div className="pt-10 border-t border-white/5 relative z-10 mt-auto">
                                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-on-surface-variant/30 mb-8 font-label text-center italic">Focus: {tier.best_for}</p>
                                <button className={cn(
                                    "button-metallic w-full py-5 rounded-2xl font-black text-[11px] uppercase tracking-[0.3em] italic transition-all duration-500",
                                    tier.is_recommended ? "shadow-[0_20px_50px_rgba(103,156,255,0.4)]" : "brightness-75 grayscale hover:grayscale-0 hover:brightness-100"
                                )}>
                                    Select Configuration
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Economic Telemetry */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                <div className="bg-surface-container-low p-10 rounded-[2.5rem] shadow-xl border border-white/5 group hover:bg-surface-container transition-all duration-500 overflow-hidden relative">
                    <div className="absolute bottom-0 right-0 p-8 opacity-5 group-hover:scale-110 transition-transform">
                        <span className="material-symbols-outlined text-8xl text-tertiary">trending_up</span>
                    </div>
                    <div className="flex items-center gap-4 mb-6 relative z-10">
                        <span className="material-symbols-outlined text-tertiary text-xl">insights</span>
                        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-on-surface-variant/40 font-label">LTV Multiplier</span>
                    </div>
                    <p className="text-5xl font-black font-headline text-white italic tracking-tighter relative z-10">4.2x</p>
                </div>
                <div className="bg-surface-container-low p-10 rounded-[2.5rem] shadow-xl border border-white/5 group hover:bg-surface-container transition-all duration-500 overflow-hidden relative">
                    <div className="absolute bottom-0 right-0 p-8 opacity-5 group-hover:scale-110 transition-transform">
                        <span className="material-symbols-outlined text-8xl text-tertiary">payments</span>
                    </div>
                    <div className="flex items-center gap-4 mb-6 relative z-10">
                        <span className="material-symbols-outlined text-tertiary text-xl">loyalty</span>
                        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-on-surface-variant/40 font-label">Annual Yield</span>
                    </div>
                    <p className="text-5xl font-black font-headline text-white italic tracking-tighter relative z-10">{data.annual_discount}</p>
                </div>
                <div className="bg-surface-container-high p-10 rounded-[2.5rem] shadow-xl border-t border-white/10 group hover:brightness-110 transition-all duration-500 md:col-span-2 overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-tertiary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
                    <div className="flex items-center gap-4 mb-10 relative z-10">
                        <span className="material-symbols-outlined text-tertiary text-xl">analytics</span>
                        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40 font-label">Market Absorption Telemetry</span>
                    </div>
                    <div className="flex flex-col lg:flex-row items-center gap-10 relative z-10">
                        <p className="text-3xl font-black font-headline text-white leading-none uppercase italic tracking-tighter">CAC Neutrality <br /> <span className="text-tertiary">(4 MO)</span></p>
                        <div className="h-2 flex-1 bg-surface-container-highest rounded-full overflow-hidden w-full glass-edge shadow-inner">
                            <div className="h-full bg-tertiary w-2/3 shadow-[0_0_15px_#679cff] animate-pulse"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
