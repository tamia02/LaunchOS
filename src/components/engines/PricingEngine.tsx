import { cn } from '@/lib/utils'
import {
    Check,
    Lightbulb,
    ArrowRight,
    CreditCard,
    Target,
    BarChart3,
    TrendingUp,
    ShieldCheck
} from 'lucide-react'

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
        <div className="max-w-7xl mx-auto space-y-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {/* Header Section */}
            <div className="flex flex-col md:flex-row justify-between items-end gap-10">
                <div className="max-w-2xl">
                    <h1 className="font-headline text-5xl font-extrabold tracking-tighter text-on-surface mb-4 leading-tight uppercase italic">
                        Revenue Architecture
                    </h1>
                    <p className="text-on-surface-variant text-lg leading-relaxed max-w-xl font-light">
                        {data.recommended_model}: {data.why_this_model}
                    </p>
                </div>
                <div className="bg-surface-container border border-outline-variant/20 p-8 rounded-xl min-w-[320px] shadow-2xl relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-tertiary/5 blur-2xl rounded-full -mr-12 -mt-12 group-hover:bg-tertiary/10 transition-colors" />
                    <div className="flex justify-between items-center mb-4">
                        <span className="font-headline text-[10px] font-black uppercase tracking-[0.2em] text-on-surface-variant">Penetration Goal</span>
                        <Target className="w-4 h-4 text-tertiary" />
                    </div>
                    <div className="flex items-baseline gap-2 mb-4">
                        <span className="text-3xl font-black text-on-surface font-headline">{data.month1_revenue_target}</span>
                        <span className="text-xs text-on-surface-variant font-bold">Month 1 Target</span>
                    </div>
                    <div className="h-2 w-full bg-surface-container-lowest rounded-full overflow-hidden mb-3 border border-outline-variant/10">
                        <div className="h-full bg-gradient-to-r from-tertiary to-tertiary-dim animate-pulse" style={{ width: '40%' }}></div>
                    </div>
                    <p className="text-[10px] text-on-surface-variant font-medium italic">
                        Targeting {data.month6_revenue_target} run-rate by Month 6.
                    </p>
                </div>
            </div>

            {/* Bento Grid: Strategic Rationale & Tiers */}
            <div className="grid grid-cols-12 gap-8">
                {/* Strategic Rationale */}
                <div className="col-span-12 lg:col-span-4 bg-surface-container-low p-10 rounded-xl border border-outline-variant/10 relative overflow-hidden shadow-inner group">
                    <div className="absolute top-0 right-0 w-48 h-48 bg-tertiary/5 blur-[80px] rounded-full pointer-events-none" />
                    <Lightbulb className="text-tertiary mb-8 w-10 h-10 group-hover:rotate-12 transition-transform" />
                    <h3 className="font-headline text-2xl font-black text-on-surface mb-8 uppercase tracking-tighter italic">Value Capture</h3>
                    <div className="space-y-8">
                        <div>
                            <h4 className="text-xs font-black text-on-surface uppercase tracking-widest mb-3 flex items-center gap-3">
                                <span className="w-1.5 h-1.5 rounded-full bg-tertiary" />
                                Pricing Psychology
                            </h4>
                            <p className="text-sm text-on-surface-variant font-medium leading-relaxed italic">
                                "{data.pricing_psychology}"
                            </p>
                        </div>
                        <div>
                            <h4 className="text-xs font-black text-on-surface uppercase tracking-widest mb-3 flex items-center gap-3">
                                <span className="w-1.5 h-1.5 rounded-full bg-tertiary" />
                                Expansion Logic
                            </h4>
                            <p className="text-sm text-on-surface-variant font-medium leading-relaxed">
                                {data.upgrade_trigger}
                            </p>
                        </div>
                        <div className="p-4 rounded-lg bg-error/5 border border-error/20 mt-4">
                            <h4 className="text-[10px] font-black text-error uppercase tracking-widest mb-1">Risk Mitigation</h4>
                            <p className="text-[11px] text-on-surface-variant font-medium">Avoid: {data.avoid}</p>
                        </div>
                    </div>
                </div>

                {/* Pricing Tiers */}
                <div className="col-span-12 lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                    {data.tiers.map((tier, i) => (
                        <div
                            key={i}
                            className={cn(
                                "p-8 rounded-xl border transition-all duration-500 flex flex-col group",
                                tier.is_recommended
                                    ? "bg-surface-container-high border-tertiary/40 shadow-2xl scale-105 z-10"
                                    : "bg-surface-container border-outline-variant/10 hover:border-outline-variant/30"
                            )}
                        >
                            {tier.is_recommended && (
                                <div className="bg-tertiary text-on-tertiary font-black text-[9px] uppercase tracking-[0.2em] px-4 py-1.5 rounded-full mb-8 self-start shadow-lg">
                                    Alpha Choice
                                </div>
                            )}
                            <div className="mb-10">
                                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-on-surface-variant mb-2 block">{tier.name}</span>
                                <div className="flex items-baseline gap-2">
                                    <span className="text-5xl font-black font-headline text-on-surface tracking-tighter">${tier.price}</span>
                                    <span className="text-on-surface-variant text-xs font-bold uppercase tracking-widest">/{tier.billing}</span>
                                </div>
                                <p className="mt-4 text-[11px] font-medium italic text-on-surface-variant leading-relaxed">
                                    {tier.tagline}
                                </p>
                            </div>
                            <ul className="space-y-4 mb-12 flex-1 relative">
                                {tier.features.map((feature, j) => (
                                    <li key={j} className="flex items-start text-xs font-semibold text-on-surface-variant group/feat">
                                        <Check className="w-3.5 h-3.5 text-tertiary mr-3 mt-0.5 group-hover/feat:scale-125 transition-transform" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className="pt-6 border-t border-outline-variant/10">
                                <p className="text-[9px] font-black uppercase tracking-[0.2em] text-on-surface-variant mb-4">Focus: {tier.best_for}</p>
                                <button className={cn(
                                    "w-full py-4 rounded-lg font-black text-xs uppercase tracking-[0.2em] transition-all duration-300 active:scale-95",
                                    tier.is_recommended
                                        ? "bg-gradient-to-br from-primary to-primary-container text-on-primary shadow-xl"
                                        : "bg-surface-container-highest hover:bg-surface-bright text-on-surface border border-outline-variant/20"
                                )}>
                                    Select Model
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom Stats Grid */}
                <div className="col-span-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-6">
                    <div className="bg-surface-container p-6 rounded-xl border border-outline-variant/10">
                        <div className="flex items-center gap-3 mb-4">
                            <TrendingUp className="w-4 h-4 text-tertiary" />
                            <span className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant">LTV Projection</span>
                        </div>
                        <p className="text-2xl font-black font-headline text-on-surface tracking-tighter">4.2x</p>
                    </div>
                    <div className="bg-surface-container p-6 rounded-xl border border-outline-variant/10">
                        <div className="flex items-center gap-3 mb-4">
                            <BarChart3 className="w-4 h-4 text-tertiary" />
                            <span className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant">Annual Disc.</span>
                        </div>
                        <p className="text-2xl font-black font-headline text-on-surface tracking-tighter">{data.annual_discount}</p>
                    </div>
                    <div className="bg-surface-container p-6 rounded-xl border border-outline-variant/10 md:col-span-2">
                        <div className="flex items-center gap-3 mb-4">
                            <CreditCard className="w-4 h-4 text-tertiary" />
                            <span className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant">Unit Economics</span>
                        </div>
                        <div className="flex items-baseline gap-4">
                            <p className="text-lg font-bold font-headline text-on-surface">CAC Neutrality at 4 mo</p>
                            <span className="h-0.5 flex-1 bg-surface-container-high relative rounded-full">
                                <span className="absolute left-0 top-0 h-full w-2/3 bg-tertiary rounded-full shadow-[0_0_8px_rgba(103,156,255,0.4)]" />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
