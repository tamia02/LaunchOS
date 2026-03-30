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
        <div className="animate-in fade-in slide-in-from-bottom-8 duration-[2000ms] custom-ease">
            {/* Speed Header - Editorial Layout */}
            <header className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-12">
                <div className="max-w-3xl">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="px-3 py-1.5 rounded-lg bg-surface-variant/20 shadow-inner">
                            <span className="text-tertiary text-[10px] font-black tracking-[0.4em] uppercase font-label">Execution Velocity 07</span>
                        </div>
                        <span className="w-1.5 h-1.5 rounded-full bg-tertiary shadow-[0_0_10px_#679cff]"></span>
                    </div>
                    <h1 className="text-6xl md:text-8xl font-black font-headline tracking-tighter text-white mb-8 leading-[0.9] uppercase italic">Trajectory <br /> <span className="text-tertiary">Sequences.</span></h1>
                    <p className="text-xl text-on-surface-variant font-body leading-relaxed italic opacity-80 antialiased max-w-2xl">
                        Tracking the transition from conceptualization to <span className="text-white font-black underline decoration-tertiary/40">Exponential Market Entry</span>.
                    </p>
                </div>
                <div className="flex gap-10">
                    <div className="bg-surface-container-low p-10 rounded-[2.5rem] flex flex-col items-end shadow-[0_40px_80px_rgba(0,0,0,0.4)] border border-white/5 transition-all duration-700 hover:scale-[1.03]">
                        <span className="text-[10px] font-black text-tertiary uppercase tracking-[0.3em] mb-4 font-label italic">Velocity Score</span>
                        <span className="text-5xl font-headline font-black text-white italic tracking-tighter leading-none">92.4</span>
                    </div>
                </div>
            </header>

            {/* Momentum Bento - Cinematic Data Visualization */}
            <div className="grid grid-cols-12 gap-10 mb-16">
                {/* Velocity Graph - Atmospheric Depth */}
                <div className="col-span-12 lg:col-span-8 bg-surface-container-low rounded-[3rem] p-12 relative overflow-hidden group shadow-[0_60px_120px_rgba(0,0,0,0.5)] border border-white/5">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-tertiary/5 rounded-full blur-[120px] pointer-events-none group-hover:bg-tertiary/10 transition-colors duration-1000"></div>
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 relative z-10 gap-8">
                        <div>
                            <h3 className="text-4xl font-headline font-black text-white uppercase italic tracking-tighter leading-none mb-2">Momentum Telemetry</h3>
                            <p className="text-[10px] text-tertiary font-black uppercase tracking-[0.4em] font-label">Actual vs. roadmap projection Sequence</p>
                        </div>
                        <div className="flex gap-10 bg-surface-container-high/30 p-4 rounded-2xl glass-edge">
                            <div className="flex items-center gap-3">
                                <span className="w-2.5 h-2.5 rounded-full bg-tertiary shadow-[0_0_10px_#679cff]"></span>
                                <span className="text-[10px] font-black text-white uppercase tracking-[0.2em] font-label">Realized</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="w-2.5 h-2.5 rounded-[2px] bg-white/10"></span>
                                <span className="text-[10px] font-black text-on-surface-variant/40 uppercase tracking-[0.2em] font-label">Projected</span>
                            </div>
                        </div>
                    </div>

                    <div className="h-[400px] flex items-end justify-between relative pt-12">
                        <svg className="absolute inset-0 w-full h-full p-2" preserveAspectRatio="none">
                            <defs>
                                <linearGradient id="chartGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="#679cff" stopOpacity="1" />
                                    <stop offset="100%" stopColor="#0070eb" stopOpacity="1" />
                                </linearGradient>
                            </defs>
                            <path
                                d="M0,380 Q150,350 300,280 T600,180 T1000,40"
                                fill="none"
                                stroke="url(#chartGradient)"
                                strokeLinecap="round"
                                strokeWidth="6"
                                className="drop-shadow-[0_0_20px_rgba(103,156,255,0.6)] animate-pulse"
                            />
                            <path
                                d="M0,380 Q150,360 300,320 T600,280 T1000,240"
                                fill="none"
                                stroke="rgba(255,255,255,0.05)"
                                strokeDasharray="12,12"
                                strokeWidth="2.5"
                            />
                        </svg>
                    </div>
                    <div className="mt-12 pt-10 border-t border-white/5 flex justify-between items-center text-[11px] text-on-surface-variant/30 font-black uppercase tracking-[0.5em] font-label relative z-10">
                        <span className="hover:text-tertiary transition-colors">T_MINUS_ZERO</span>
                        <span className="hover:text-tertiary transition-colors font-headline text-white/10 italic">Interval_30</span>
                        <span className="hover:text-tertiary transition-colors font-headline text-white/10 italic">Interval_60</span>
                        <span className="text-tertiary brightness-150">LAUNCH_TARGET</span>
                    </div>
                </div>

                {/* Risk Architecture - Radar View */}
                <div className="col-span-12 lg:col-span-4 bg-surface-container rounded-[3rem] p-12 shadow-[0_60px_120px_rgba(0,0,0,0.5)] border border-white/5 flex flex-col items-center justify-between relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-br from-error/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
                    <div className="w-full mb-12">
                        <h3 className="text-4xl font-headline font-black text-white uppercase italic tracking-tighter leading-none mb-2">Entropy Radar</h3>
                        <p className="text-error text-[10px] font-black uppercase tracking-[0.4em] font-label">Signal Interference monitoring</p>
                    </div>

                    <div className="relative w-72 h-72 border border-white/5 rounded-full flex items-center justify-center bg-surface-container-low shadow-inner scale-110 group-hover:rotate-12 transition-transform duration-1000">
                        <div className="absolute w-48 h-48 border border-white/10 rounded-full animate-pulse"></div>
                        <div className="absolute w-24 h-24 border border-white/20 rounded-full"></div>
                        <div className="absolute inset-0 flex items-center justify-center opacity-20">
                            <div className="w-full h-[1px] bg-tertiary"></div>
                            <div className="h-full w-[1px] bg-tertiary"></div>
                        </div>
                        <svg className="absolute inset-0 w-full h-full p-8 overflow-visible drop-shadow-[0_0_20px_rgba(255,73,73,0.3)]">
                            <polygon
                                fill="rgba(255, 73, 73, 0.08)"
                                points="100,20 160,80 140,140 60,150 40,80"
                                stroke="#ff4949"
                                strokeWidth="3"
                                className="transition-all duration-[2000ms] custom-ease"
                            />
                            <circle cx="100" cy="20" fill="#ff4949" r="5" />
                        </svg>
                        <span className="absolute top-4 text-[10px] text-tertiary font-black uppercase tracking-[0.4em] font-label">Market</span>
                        <span className="absolute bottom-4 text-[10px] text-on-surface-variant/40 font-black uppercase tracking-[0.4em] font-label">Tech</span>
                        <span className="absolute left-4 text-error text-[10px] font-black uppercase tracking-[0.4em] font-label">Entropy</span>
                    </div>

                    <div className="mt-12 bg-surface-container-high/40 p-10 rounded-[2rem] glass-edge border border-white/5 w-full transition-all duration-700 hover:bg-surface-container-high/60">
                        <p className="text-sm text-center text-on-surface-variant/80 leading-relaxed font-body italic antialiased">
                            Current high risk detected in <span className="text-error font-black uppercase tracking-widest decoration-dotted underline underline-offset-4">Acceleration</span>. <br />
                            Technical constraints mitigating market exposure.
                        </p>
                    </div>
                </div>
            </div>

            {/* Tactical Expansion - Grid Layout */}
            <div className="grid grid-cols-12 gap-10">
                <div className="col-span-12 lg:col-span-8">
                    <h2 className="text-5xl font-black font-headline tracking-tighter mb-12 uppercase italic text-white leading-none">Circuit <span className="text-tertiary">Progression.</span></h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[
                            { name: 'Niche Selection', icon: 'ads_click', status: 'SYNCHRONIZED', progress: 100, desc: 'Validated SaaS infrastructure for remote teams.' },
                            { name: 'Market Validation', icon: 'verified_user', status: '85% SIGNAL', progress: 85, desc: '12/15 target interviews completed with high intent.' },
                            { name: 'MVP Architecture', icon: 'rocket_launch', status: 'TRANSMITTING', progress: 32, desc: 'Core API layer being deployed to staging.' },
                            { name: 'Strategic Outreach', icon: 'campaign', status: 'WAITING', progress: 0, desc: 'Waitlist campaign launching next week.' }
                        ].map((stage, i) => (
                            <div key={i} className="bg-surface-container-low p-10 rounded-[2.5rem] shadow-xl border border-white/5 hover:bg-surface-container transition-all group cursor-default flex flex-col justify-between min-h-[320px]">
                                <div className="flex justify-between items-start mb-10">
                                    <div className="w-14 h-14 rounded-2xl bg-surface-container flex items-center justify-center shadow-lg border border-white/5 group-hover:scale-110 transition-transform">
                                        <span className={cn("material-symbols-outlined text-3xl", stage.progress === 100 ? "text-tertiary" : "text-white/20")}>
                                            {stage.icon}
                                        </span>
                                    </div>
                                    <div className={cn(
                                        "px-4 py-1.5 rounded-lg text-[9px] font-black tracking-[0.3em] font-label italic uppercase shadow-xl glass-edge",
                                        stage.progress === 100 ? "bg-tertiary/20 text-tertiary border-tertiary/20" : "bg-white/5 text-white/20"
                                    )}>{stage.status}</div>
                                </div>
                                <div>
                                    <h4 className="font-headline text-3xl font-black text-white mb-6 uppercase tracking-tighter italic leading-none">{stage.name}</h4>
                                    <div className="h-1 w-full bg-surface-container-highest rounded-full overflow-hidden mb-8 shadow-inner glass-edge">
                                        <div className="h-full bg-tertiary shadow-[0_0_10px_#679cff] transition-all duration-[2000ms] custom-ease" style={{ width: `${stage.progress}%` }}></div>
                                    </div>
                                    <p className="text-sm text-on-surface-variant/60 font-body leading-relaxed italic antialiased opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                                        {stage.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="col-span-12 lg:col-span-4 flex flex-col gap-10">
                    <h2 className="text-5xl font-black font-headline tracking-tighter mb-12 uppercase italic text-white leading-none">Primary <span className="text-tertiary">Protocol.</span></h2>
                    <div className="bg-surface-container-high p-12 rounded-[3.5rem] shadow-[0_60px_120px_rgba(0,0,0,0.6)] border-t border-white/10 relative overflow-hidden group flex-1 flex flex-col justify-between transition-all duration-1000 hover:brightness-110">
                        <div className="absolute -top-24 -right-24 w-80 h-80 bg-tertiary/10 rounded-full blur-[100px] group-hover:bg-tertiary/20 transition-all duration-1000"></div>

                        <div className="relative z-10">
                            <div className="flex items-center gap-4 mb-12">
                                <span className="w-3 h-3 rounded-full bg-tertiary animate-ping shadow-[0_0_15px_#679cff]"></span>
                                <span className="text-[10px] font-black tracking-[0.5em] text-white/40 uppercase font-label italic border-b border-white/10 pb-2">CRITICAL_PRIORITY</span>
                            </div>
                            <h3 className="text-4xl font-black text-white leading-[1.1] font-headline uppercase italic tracking-tighter mb-10 antialiased">
                                Finalize Core Landing Page Copy
                            </h3>
                            <div className="bg-surface-container/60 p-10 rounded-[2rem] glass-edge border border-white/5 shadow-inner">
                                <p className="text-on-surface-variant/80 leading-relaxed text-base font-body italic antialiased">
                                    Based on yesterday's validation calls, emphasize <span className="text-white font-black underline decoration-tertiary/40 underline-offset-4">"Data Privacy"</span> more heavily in the hero section.
                                </p>
                            </div>
                            <div className="mt-12 flex justify-end">
                                <div className="px-6 py-3 rounded-xl bg-tertiary/10 border border-tertiary/30 shadow-lg group-hover:scale-105 transition-transform">
                                    <span className="text-tertiary font-black font-headline text-2xl italic tracking-tighter">+12.4% <span className="text-[10px] uppercase tracking-[0.2em] not-italic ml-2 opacity-60">Forecast</span></span>
                                </div>
                            </div>
                        </div>

                        <div className="mt-16 space-y-6 relative z-10">
                            <button className="button-metallic w-full py-6 rounded-[1.5rem] font-black text-[13px] tracking-[0.3em] uppercase italic shadow-[0_20px_60px_rgba(103,156,255,0.4)] active:scale-95 transition-all">
                                Execute Sequence
                            </button>
                            <button className="w-full py-4 text-on-surface-variant/30 text-[10px] font-black uppercase tracking-[0.4em] hover:text-white/60 transition-colors font-label italic">
                                View Intelligence Backlog
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
