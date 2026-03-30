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
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000">
            {/* Revenue Header */}
            <header className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-10">
                <div className="max-w-2xl">
                    <div className="flex items-center gap-2 mb-3">
                        <span className="px-2 py-0.5 rounded bg-surface-container-high text-tertiary text-[10px] font-bold tracking-widest uppercase font-label">Financial Engineering</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-tertiary animate-pulse"></span>
                        <span className="text-on-surface-variant text-xs font-medium font-label">Unit Economics Verified</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-extrabold font-headline tracking-tighter text-white mb-4 uppercase italic leading-tight">Revenue Architecture</h1>
                    <p className="text-on-surface-variant text-lg leading-relaxed max-w-xl font-body">
                        {data.recommended_model}: {data.why_this_model}
                    </p>
                </div>
                <div className="bg-surface-container-high ghost-border p-8 rounded-xl min-w-[320px] shadow-2xl relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-tertiary/5 blur-2xl rounded-full -mr-12 -mt-12 group-hover:bg-tertiary/10 transition-colors"></div>
                    <div className="flex justify-between items-center mb-4">
                        <span className="font-label text-[10px] font-black uppercase tracking-[0.2em] text-on-surface-variant">Penetration Goal</span>
                        <span className="material-symbols-outlined text-tertiary text-sm">target</span>
                    </div>
                    <div className="flex items-baseline gap-2 mb-4">
                        <span className="text-3xl font-black text-white font-headline">{data.month1_revenue_target}</span>
                        <span className="text-xs text-on-surface-variant font-bold font-label">Mo. 1 Target</span>
                    </div>
                    <div className="h-2 w-full bg-surface-container-lowest rounded-full overflow-hidden mb-3">
                        <div className="h-full bg-gradient-to-r from-tertiary to-tertiary-dim animate-pulse" style={{ width: '40%' }}></div>
                    </div>
                    <p className="text-[10px] text-on-surface-variant font-body italic">
                        Targeting {data.month6_revenue_target} run-rate by Month 6.
                    </p>
                </div>
            </header>

            {/* Pricing Bento Grid */}
            <div className="grid grid-cols-12 gap-8 mb-12">
                {/* Strategic Logic */}
                <div className="col-span-12 lg:col-span-4 bg-surface-container-low p-10 rounded-2xl ghost-border relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-48 h-48 bg-tertiary/5 blur-[80px] rounded-full pointer-events-none"></div>
                    <span className="material-symbols-outlined text-tertiary text-4xl mb-8 group-hover:rotate-12 transition-transform">lightbulb</span>
                    <h3 className="font-headline text-2xl font-black text-white mb-8 uppercase tracking-tighter italic">Value Capture</h3>
                    <div className="space-y-8">
                        <div>
                            <h4 className="text-[10px] font-black text-white uppercase tracking-widest mb-3 flex items-center gap-3 font-label">
                                <span className="w-1 h-1 rounded-full bg-tertiary"></span>
                                Pricing Psychology
                            </h4>
                            <p className="text-sm text-on-surface-variant font-body leading-relaxed italic">
                                "{data.pricing_psychology}"
                            </p>
                        </div>
                        <div>
                            <h4 className="text-[10px] font-black text-white uppercase tracking-widest mb-3 flex items-center gap-3 font-label">
                                <span className="w-1 h-1 rounded-full bg-tertiary"></span>
                                Expansion Trigger
                            </h4>
                            <p className="text-sm text-on-surface-variant font-body leading-relaxed">
                                {data.upgrade_trigger}
                            </p>
                        </div>
                        <div className="p-4 rounded-lg bg-error/5 border border-error/20 mt-4">
                            <h4 className="text-[9px] font-black text-error uppercase tracking-widest mb-1 font-label">Risk Mitigation</h4>
                            <p className="text-[10px] text-on-surface-variant font-body opacity-80">Avoid: {data.avoid}</p>
                        </div>
                    </div>
                </div>

                {/* Tiers */}
                <div className="col-span-12 lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                    {data.tiers.map((tier, i) => (
                        <div key={i} className={cn(
                            "p-8 rounded-2xl ghost-border transition-all duration-500 flex flex-col group",
                            tier.is_recommended ? "bg-surface-container-high scale-105 z-10 border-tertiary/40 shadow-2xl" : "bg-surface-container"
                        )}>
                            {tier.is_recommended && (
                                <div className="bg-tertiary text-on-tertiary font-black text-[9px] uppercase tracking-[0.2em] px-4 py-1.5 rounded-full mb-8 self-start shadow-lg font-label">
                                    Alpha Choice
                                </div>
                            )}
                            <div className="mb-10">
                                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-on-surface-variant mb-2 block font-label">{tier.name}</span>
                                <div className="flex items-baseline gap-2">
                                    <span className="text-5xl font-black font-headline text-white tracking-tighter">${tier.price}</span>
                                    <span className="text-on-surface-variant text-xs font-bold uppercase tracking-widest font-label">/{tier.billing}</span>
                                </div>
                                <p className="mt-4 text-[11px] font-body italic text-on-surface-variant leading-relaxed">
                                    {tier.tagline}
                                </p>
                            </div>
                            <ul className="space-y-4 mb-12 flex-1 relative">
                                {tier.features.map((feature, j) => (
                                    <li key={j} className="flex items-start text-xs font-semibold text-white/70 group/feat font-body">
                                        <span className="material-symbols-outlined text-tertiary text-sm mr-3 group-hover/feat:scale-125 transition-transform">check</span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            <div className="pt-6 border-t border-white/5">
                                <p className="text-[9px] font-black uppercase tracking-[0.2em] text-on-surface-variant mb-4 font-label">Focus: {tier.best_for}</p>
                                <button className={cn(
                                    "w-full py-4 rounded-xl font-black text-xs uppercase tracking-[0.2em] transition-all duration-300 font-label shadow-lg",
                                    tier.is_recommended ? "bg-gradient-to-br from-primary to-primary-container text-on-primary" : "bg-surface-container-highest hover:bg-surface-bright text-white"
                                )}>
                                    Select Model
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Unit Economics Highlight */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-surface-container p-6 rounded-2xl ghost-border">
                    <div className="flex items-center gap-3 mb-4">
                        <span className="material-symbols-outlined text-tertiary text-sm">trending_up</span>
                        <span className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant font-label">LTV Multiplier</span>
                    </div>
                    <p className="text-2xl font-black font-headline text-white tracking-tighter">4.2x</p>
                </div>
                <div className="bg-surface-container p-6 rounded-2xl ghost-border">
                    <div className="flex items-center gap-3 mb-4">
                        <span className="material-symbols-outlined text-tertiary text-sm">payments</span>
                        <span className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant font-label">Annual Discount</span>
                    </div>
                    <p className="text-2xl font-black font-headline text-white tracking-tighter">{data.annual_discount}</p>
                </div>
                <div className="bg-surface-container p-6 rounded-2xl ghost-border md:col-span-2">
                    <div className="flex items-center gap-3 mb-4">
                        <span className="material-symbols-outlined text-tertiary text-sm">finance</span>
                        <span className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant font-label">Market Absorption</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <p className="text-lg font-bold font-headline text-white leading-none">CAC Neutrality (4 MO)</p>
                        <div className="h-1 flex-1 bg-surface-container-highest rounded-full overflow-hidden">
                            <div className="h-full bg-tertiary w-2/3 shadow-[0_0_8px_#679cff]"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
