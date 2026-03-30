import { cn } from '@/lib/utils'
import {
    TrendingUp,
    Zap,
    Target,
    Rocket,
    CheckCircle2,
    ArrowUpRight,
    Activity,
    ShieldAlert
} from 'lucide-react'

interface Projection {
    month: number
    new_users: number
    total_free_users: number
    total_paid_users: number
    mrr: number
    revenue: number
    costs: number
    profit: number
}

interface RevenueData {
    assumptions: {
        monthly_new_users: number
        free_to_paid_rate: number
        monthly_churn_rate: number
        average_revenue_per_user: number
        growth_rate: number
    }
    monthly_projections: Projection[]
    month12_mrr: number
    month12_arr: number
    break_even_month: number | string
    total_year1_revenue: number
    key_assumption: string
    upside_scenario: string
    downside_scenario: string
}

export function RevenueEngine({ data }: { data: RevenueData }) {
    if (!data) return null

    return (
        <div className="max-w-7xl mx-auto space-y-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {/* Header Section */}
            <section className="flex flex-col md:flex-row justify-between items-end gap-10">
                <div className="max-w-2xl">
                    <h1 className="font-headline text-5xl font-extrabold tracking-tighter text-on-surface uppercase italic leading-none">Execution Velocity</h1>
                    <p className="text-on-surface-variant text-lg leading-relaxed mt-6 font-light">
                        Tracking the transition from conceptualization to <span className="text-on-surface font-semibold">Exponential Market Entry</span>.
                    </p>
                </div>
                <div className="flex gap-6">
                    <div className="bg-surface-container-high px-8 py-4 rounded-xl border border-outline-variant/15 text-right shadow-2xl relative group overflow-hidden">
                        <div className="absolute inset-0 bg-tertiary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                        <span className="block text-[10px] uppercase tracking-[0.2em] text-tertiary font-black mb-1">Health Score</span>
                        <span className="text-3xl font-black text-on-surface font-headline italic">92.4</span>
                    </div>
                    <div className="bg-surface-container-high px-8 py-4 rounded-xl border border-outline-variant/15 text-right shadow-2xl relative group overflow-hidden">
                        <div className="absolute inset-0 bg-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                        <span className="block text-[10px] uppercase tracking-[0.2em] text-on-surface-variant font-black mb-1">Time to MVP</span>
                        <span className="text-3xl font-black text-on-surface font-headline italic">14d</span>
                    </div>
                </div>
            </section>

            {/* Top Bento Layer */}
            <div className="grid grid-cols-12 gap-8">
                {/* Velocity Graph Card */}
                <div className="col-span-12 lg:col-span-8 bg-surface-container-low rounded-2xl p-10 relative overflow-hidden group border border-outline-variant/10 shadow-inner">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-tertiary/5 rounded-full blur-[100px] pointer-events-none" />
                    <div className="flex justify-between items-start mb-12">
                        <div>
                            <h3 className="text-2xl font-black font-headline text-on-surface uppercase tracking-tighter italic mb-1">Momentum Analysis</h3>
                            <p className="text-xs text-on-surface-variant font-medium uppercase tracking-widest opacity-70">Daily execution points vs. roadmap projection</p>
                        </div>
                        <div className="flex gap-6">
                            <span className="flex items-center gap-2 text-[10px] font-black text-tertiary uppercase tracking-widest"><div className="w-2 h-2 rounded-full bg-tertiary"></div> Actual</span>
                            <span className="flex items-center gap-2 text-[10px] font-black text-on-surface-variant uppercase tracking-widest opacity-50"><div className="w-2 h-2 rounded-full bg-outline-variant"></div> Projected</span>
                        </div>
                    </div>

                    {/* Simulated Momentum Chart */}
                    <div className="h-72 flex items-end justify-between gap-1 relative pt-10">
                        <svg className="absolute inset-0 w-full h-full pr-10" preserveAspectRatio="none">
                            <path
                                d="M0,240 Q150,220 300,160 T600,100 T900,40"
                                fill="none"
                                stroke="url(#lineGradient)"
                                strokeLinecap="round"
                                strokeWidth="4"
                                className="drop-shadow-[0_0_12px_rgba(103,156,255,0.4)]"
                            />
                            <path
                                d="M0,240 Q150,230 300,200 T600,180 T900,160"
                                fill="none"
                                stroke="rgba(255,255,255,0.05)"
                                strokeDasharray="10,10"
                                strokeWidth="2"
                            />
                            <defs>
                                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="#679cff" />
                                    <stop offset="100%" stopColor="#0070eb" />
                                </linearGradient>
                            </defs>
                        </svg>
                        <div className="absolute bottom-[240px] left-[0%] w-3 h-3 rounded-full bg-tertiary border-4 border-surface-container-low shadow-[0_0_15px_#679cff]" />
                        <div className="absolute bottom-[160px] left-[33%] w-3 h-3 rounded-full bg-tertiary border-4 border-surface-container-low shadow-[0_0_15px_#679cff]" />
                        <div className="absolute bottom-[40px] left-[100%] w-3 h-3 rounded-full bg-tertiary border-4 border-surface-container-low shadow-[0_0_15px_#679cff]" />
                    </div>
                    <div className="mt-8 pt-6 border-t border-outline-variant/10 flex justify-between text-[11px] text-on-surface-variant font-black uppercase tracking-[0.2em] opacity-60">
                        <span>Day 0</span>
                        <span>Day 30</span>
                        <span>Day 60</span>
                        <span>Launch Target</span>
                    </div>
                </div>

                {/* Risk Radar Card */}
                <div className="col-span-12 lg:col-span-4 bg-surface-container-low rounded-2xl p-10 border border-outline-variant/15 shadow-2xl flex flex-col items-center justify-center relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-br from-tertiary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <h3 className="text-xl font-black font-headline text-on-surface mb-10 w-full text-left uppercase tracking-tighter italic">Risk Analysis</h3>
                    <div className="relative w-56 h-56 border border-outline-variant/20 rounded-full flex items-center justify-center shadow-inner bg-surface-container-highest/20">
                        <div className="absolute w-40 h-40 border border-outline-variant/20 rounded-full" />
                        <div className="absolute w-20 h-20 border border-outline-variant/20 rounded-full" />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-full h-px bg-outline-variant/10" />
                            <div className="h-full w-px bg-outline-variant/10" />
                        </div>
                        <svg className="absolute inset-0 w-full h-full p-6 overflow-visible drop-shadow-[0_0_8px_rgba(103,156,255,0.3)]">
                            <polygon
                                fill="rgba(103, 156, 255, 0.15)"
                                points="100,20 160,80 140,140 60,150 40,80"
                                stroke="#679cff"
                                strokeWidth="2.5"
                                className="transition-all duration-1000"
                            />
                            <circle cx="100" cy="20" fill="#679cff" r="4" />
                        </svg>
                        <span className="absolute top-2 text-[10px] text-tertiary font-black uppercase tracking-widest">Market</span>
                        <span className="absolute bottom-2 text-[10px] text-on-surface-variant font-black uppercase tracking-widest">Tech</span>
                        <span className="absolute left-2 text-[10px] text-on-surface-variant font-black uppercase tracking-widest">Growth</span>
                        <span className="absolute right-2 text-[10px] text-on-surface-variant font-black uppercase tracking-widest">Speed</span>
                    </div>
                    <p className="mt-10 text-xs text-center text-on-surface-variant leading-relaxed font-medium italic">
                        Current high risk detected in <span className="text-tertiary font-black uppercase">Speed</span>. <br />
                        Technical constraints mitigating market exposure.
                    </p>
                </div>
            </div>

            {/* Bottom Modular Layer */}
            <div className="grid grid-cols-12 gap-10">
                {/* Milestone Progression */}
                <div className="col-span-12 lg:col-span-8">
                    <h2 className="text-3xl font-black font-headline tracking-tighter mb-10 uppercase italic">Stage Progression</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                            { name: 'Niche Selection', icon: Target, status: 'COMPLETED', progress: 100, desc: 'Validated SaaS infrastructure for remote teams.' },
                            { name: 'Market Validation', icon: CheckCircle2, status: '85% DONE', progress: 85, desc: '12/15 target interviews completed with high intent.' },
                            { name: 'MVP Architecture', icon: Rocket, status: 'ACTIVE', progress: 32, desc: 'Core API layer being deployed to staging.' },
                            { name: 'Strategic Outreach', icon: Activity, status: 'UPCOMING', progress: 0, desc: 'Waitlist campaign launching next week.' }
                        ].map((stage, i) => (
                            <div key={i} className="bg-surface-container-low p-8 rounded-xl border border-outline-variant/15 hover:border-tertiary/30 hover:bg-surface-container-high transition-all group cursor-pointer shadow-inner">
                                <div className="flex justify-between items-start mb-6">
                                    <stage.icon className={cn("w-6 h-6", stage.progress === 100 ? "text-tertiary" : "text-on-surface-variant opacity-60")} />
                                    <span className={cn(
                                        "text-[9px] font-black px-3 py-1 rounded-full tracking-widest",
                                        stage.progress === 100 ? "bg-tertiary/20 text-tertiary" : "bg-surface-container-highest text-on-surface-variant"
                                    )}>{stage.status}</span>
                                </div>
                                <h4 className="font-headline font-bold text-on-surface mb-4 uppercase tracking-tight">{stage.name}</h4>
                                <div className="h-1 w-full bg-surface-container-highest rounded-full overflow-hidden mb-4 shadow-inner">
                                    <div className="h-full bg-tertiary transition-all duration-1000" style={{ width: `${stage.progress}%` }}></div>
                                </div>
                                <p className="text-xs text-on-surface-variant font-medium leading-relaxed italic line-clamp-1 group-hover:line-clamp-none transition-all">{stage.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Strategic Focus Card */}
                <div className="col-span-12 lg:col-span-4 flex flex-col gap-8">
                    <h2 className="text-3xl font-black font-headline tracking-tighter mb-10 uppercase italic">Strategic Focus</h2>
                    <div className="bg-surface-container-high p-10 rounded-2xl border border-outline-variant/25 shadow-2xl relative overflow-hidden group flex-1 flex flex-col justify-between">
                        <div className="absolute -top-20 -right-20 w-64 h-64 bg-tertiary/10 rounded-full blur-[80px] group-hover:bg-tertiary/20 transition-all duration-1000" />

                        <div>
                            <div className="flex items-center gap-3 mb-8">
                                <span className="w-2 h-2 rounded-full bg-tertiary animate-pulse"></span>
                                <span className="text-[10px] font-black tracking-[0.3em] text-on-surface-variant uppercase">Next Priority</span>
                            </div>
                            <h3 className="text-2xl font-black text-on-surface leading-tight font-headline uppercase italic tracking-tighter mb-6">
                                Finalize Core Landing Page Copy
                            </h3>
                            <p className="text-on-surface-variant leading-relaxed text-sm font-medium italic">
                                Based on yesterday's validation calls, emphasize <span className="text-on-surface font-black">"Data Privacy"</span> more heavily in the hero section.
                                <br /><br />
                                Current conviction forecast: <span className="text-tertiary font-black font-headline text-lg">+12% Conversion</span>.
                            </p>
                        </div>

                        <div className="mt-12 space-y-4 relative">
                            <button className="w-full bg-gradient-to-br from-primary to-primary-container text-on-primary py-4 rounded-xl font-black text-xs tracking-[0.2em] uppercase shadow-xl hover:scale-105 active:scale-95 transition-all">
                                Execute Priority
                            </button>
                            <button className="w-full py-3 text-on-surface-variant text-[10px] font-black uppercase tracking-widest hover:text-on-surface transition-colors">
                                View Full Backlog
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
