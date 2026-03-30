import { cn } from '@/lib/utils'

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

export function ProgressEngine({ data }: { data: RevenueData }) {
    if (!data) return null

    return (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000">
            {/* Execution Header */}
            <header className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-10">
                <div className="max-w-2xl">
                    <h1 className="font-headline text-5xl font-extrabold tracking-tighter text-white uppercase italic leading-tight">Execution Velocity</h1>
                    <p className="text-on-surface-variant text-lg leading-relaxed mt-6 font-body">
                        Tracking the transition from conceptualization to <span className="text-white font-semibold">Exponential Market Entry</span>.
                    </p>
                </div>
                <div className="flex gap-6">
                    <div className="bg-surface-container-high px-8 py-4 rounded-xl ghost-border text-right shadow-2xl relative group overflow-hidden">
                        <div className="absolute inset-0 bg-tertiary/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <span className="block text-[10px] uppercase tracking-[0.2em] text-tertiary font-black mb-1 font-label">Health Score</span>
                        <span className="text-3xl font-black text-white font-headline italic leading-none">92.4</span>
                    </div>
                    <div className="bg-surface-container-high px-8 py-4 rounded-xl ghost-border text-right shadow-2xl relative group overflow-hidden">
                        <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <span className="block text-[10px] uppercase tracking-[0.2em] text-on-surface-variant font-black mb-1 font-label">Time to MVP</span>
                        <span className="text-3xl font-black text-white font-headline italic leading-none">14d</span>
                    </div>
                </div>
            </header>

            {/* Top Bento Layer */}
            <div className="grid grid-cols-12 gap-8 mb-12">
                {/* Velocity Graph Card */}
                <div className="col-span-12 lg:col-span-8 bg-surface-container-low rounded-2xl p-10 relative overflow-hidden group ghost-border">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-tertiary/5 rounded-full blur-[100px] pointer-events-none"></div>
                    <div className="flex justify-between items-start mb-12 relative z-10">
                        <div>
                            <h3 className="text-2xl font-black font-headline text-white uppercase tracking-tighter italic mb-1">Momentum Analysis</h3>
                            <p className="text-xs text-on-surface-variant font-bold uppercase tracking-widest opacity-70 font-label">Actual vs. roadmap projection</p>
                        </div>
                        <div className="flex gap-6">
                            <span className="flex items-center gap-2 text-[10px] font-black text-tertiary uppercase tracking-widest font-label">
                                <span className="w-2 h-2 rounded-full bg-tertiary"></span> Actual
                            </span>
                            <span className="flex items-center gap-2 text-[10px] font-black text-on-surface-variant uppercase tracking-widest opacity-50 font-label">
                                <span className="w-2 h-2 rounded-full bg-white/20"></span> Projected
                            </span>
                        </div>
                    </div>

                    {/* Simulated Momentum Chart */}
                    <div className="h-72 flex items-end justify-between relative pt-10">
                        <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
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
                        <div className="absolute bottom-[240px] left-[0%] w-3 h-3 rounded-full bg-tertiary border-4 border-surface-container-low shadow-[0_0_15px_#679cff]"></div>
                        <div className="absolute bottom-[160px] left-[33%] w-3 h-3 rounded-full bg-tertiary border-4 border-surface-container-low shadow-[0_0_15px_#679cff]"></div>
                        <div className="absolute bottom-[40px] left-[100%] w-3 h-3 rounded-full bg-tertiary border-4 border-surface-container-low shadow-[0_0_15px_#679cff]"></div>
                    </div>
                    <div className="mt-8 pt-6 border-t border-white/5 flex justify-between text-[11px] text-on-surface-variant font-black uppercase tracking-[0.2em] opacity-60 font-label">
                        <span>Day 0</span>
                        <span>Day 30</span>
                        <span>Day 60</span>
                        <span>Launch Target</span>
                    </div>
                </div>

                {/* Risk Radar Card */}
                <div className="col-span-12 lg:col-span-4 bg-surface-container-low rounded-2xl p-10 ghost-border flex flex-col items-center justify-center relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-br from-tertiary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <h3 className="text-xl font-black font-headline text-white mb-10 w-full text-left uppercase tracking-tighter italic">Risk Analysis</h3>
                    <div className="relative w-56 h-56 border border-white/5 rounded-full flex items-center justify-center shadow-inner bg-surface-container-highest/20">
                        <div className="absolute w-40 h-40 border border-white/5 rounded-full"></div>
                        <div className="absolute w-20 h-20 border border-white/5 rounded-full"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-full h-px bg-white/5"></div>
                            <div className="h-full w-px bg-white/5"></div>
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
                        <span className="absolute top-2 text-[10px] text-tertiary font-black uppercase tracking-widest font-label">Market</span>
                        <span className="absolute bottom-2 text-[10px] text-on-surface-variant font-black uppercase tracking-widest font-label">Tech</span>
                        <span className="absolute left-2 text-[10px] text-on-surface-variant font-black uppercase tracking-widest font-label">Growth</span>
                        <span className="absolute right-2 text-[10px] text-on-surface-variant font-black uppercase tracking-widest font-label">Speed</span>
                    </div>
                    <p className="mt-10 text-xs text-center text-on-surface-variant leading-relaxed font-body italic">
                        Current high risk detected in <span className="text-tertiary font-black uppercase">Speed</span>. <br />
                        Technical constraints mitigating market exposure.
                    </p>
                </div>
            </div>

            {/* Stage Progression Area */}
            <div className="grid grid-cols-12 gap-10">
                <div className="col-span-12 lg:col-span-8">
                    <h2 className="text-3xl font-black font-headline tracking-tighter mb-10 uppercase italic text-white leading-none">Stage Progression</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                            { name: 'Niche Selection', icon: 'ads_click', status: 'COMPLETED', progress: 100, desc: 'Validated SaaS infrastructure for remote teams.' },
                            { name: 'Market Validation', icon: 'verified_user', status: '85% DONE', progress: 85, desc: '12/15 target interviews completed with high intent.' },
                            { name: 'MVP Architecture', icon: 'rocket_launch', status: 'ACTIVE', progress: 32, desc: 'Core API layer being deployed to staging.' },
                            { name: 'Strategic Outreach', icon: 'campaign', status: 'UPCOMING', progress: 0, desc: 'Waitlist campaign launching next week.' }
                        ].map((stage, i) => (
                            <div key={i} className="bg-surface-container-low p-8 rounded-xl ghost-border hover:bg-surface-container-high transition-all group cursor-default">
                                <div className="flex justify-between items-start mb-6">
                                    <span className={cn("material-symbols-outlined text-2xl", stage.progress === 100 ? "text-tertiary" : "text-on-surface-variant opacity-60")}>
                                        {stage.icon}
                                    </span>
                                    <span className={cn(
                                        "text-[9px] font-black px-3 py-1 rounded-full tracking-widest font-label",
                                        stage.progress === 100 ? "bg-tertiary/20 text-tertiary" : "bg-surface-container-highest text-on-surface-variant"
                                    )}>{stage.status}</span>
                                </div>
                                <h4 className="font-headline font-bold text-white mb-4 uppercase tracking-tight">{stage.name}</h4>
                                <div className="h-1 w-full bg-surface-container-highest rounded-full overflow-hidden mb-4 shadow-inner">
                                    <div className="h-full bg-tertiary transition-all duration-1000" style={{ width: `${stage.progress}%` }}></div>
                                </div>
                                <p className="text-xs text-on-surface-variant font-body leading-relaxed italic line-clamp-1 group-hover:line-clamp-none transition-all">{stage.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="col-span-12 lg:col-span-4 flex flex-col gap-8">
                    <h2 className="text-3xl font-black font-headline tracking-tighter mb-10 uppercase italic text-white leading-none">Strategic Focus</h2>
                    <div className="bg-surface-container-high p-10 rounded-2xl ghost-border relative overflow-hidden group flex-1 flex flex-col justify-between">
                        <div className="absolute -top-20 -right-20 w-64 h-64 bg-tertiary/10 rounded-full blur-[80px] group-hover:bg-tertiary/20 transition-all duration-1000"></div>

                        <div>
                            <div className="flex items-center gap-3 mb-8">
                                <span className="w-2 h-2 rounded-full bg-tertiary animate-pulse"></span>
                                <span className="text-[10px] font-black tracking-[0.3em] text-on-surface-variant uppercase font-label">Next Priority</span>
                            </div>
                            <h3 className="text-2xl font-black text-white leading-tight font-headline uppercase italic tracking-tighter mb-6">
                                Finalize Core Landing Page Copy
                            </h3>
                            <p className="text-on-surface-variant leading-relaxed text-sm font-body italic">
                                Based on yesterday's validation calls, emphasize <span className="text-white font-black">"Data Privacy"</span> more heavily in the hero section.
                                <br /><br />
                                Current conviction forecast: <span className="text-tertiary font-black font-headline text-lg">+12% Conv. Rate</span>.
                            </p>
                        </div>

                        <div className="mt-12 space-y-4">
                            <button className="button-metallic w-full py-4 rounded-xl font-black text-xs tracking-[0.2em] uppercase shadow-xl transition-all">
                                Execute Priority
                            </button>
                            <button className="w-full py-3 text-on-surface-variant text-[10px] font-black uppercase tracking-widest hover:text-on-surface transition-colors font-label">
                                View Full Backlog
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
