import { cn } from '@/lib/utils'

interface InvestorData {
    readiness_score: number
    grade: string
    verdict: string
    scores: {
        market_size: number
        problem_clarity: number
        solution_uniqueness: number
        business_model: number
        founder_market_fit: number
        scalability: number
    }
    strengths: string[]
    weaknesses: string[]
    to_reach_90: string[]
    investor_type: string
    raise_amount: string
    use_of_funds: string[]
}

export function InvestorEngine({ data }: { data: InvestorData }) {
    if (!data) return null

    return (
        <div className="animate-in fade-in slide-in-from-bottom-8 duration-[2000ms] custom-ease">
            {/* Phase Header - Editorial Style */}
            <div className="flex items-center gap-3 mb-10">
                <div className="px-3 py-1.5 rounded-lg bg-surface-variant/20 shadow-inner">
                    <span className="text-tertiary text-[10px] font-black tracking-[0.4em] uppercase font-label">Capital Sequence 07</span>
                </div>
                <span className="w-1.5 h-1.5 rounded-full bg-tertiary animate-pulse shadow-[0_0_10px_#679cff]"></span>
            </div>

            {/* Readiness Index & Scores - Cinematic Bento */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16">
                {/* Score Dial - Concentric Atmospheric Depth */}
                <div className="lg:col-span-4 bg-surface-container-low rounded-[3rem] p-16 flex flex-col items-center justify-center relative group overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.5)] border border-white/5">
                    <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-tertiary/20 to-transparent"></div>
                    <div className="relative w-56 h-56 flex items-center justify-center">
                        <svg className="absolute inset-0 w-full h-full -rotate-90">
                            <circle cx="112" cy="112" r="100" fill="none" stroke="currentColor" strokeWidth="2" className="text-white/5" />
                            <circle
                                cx="112" cy="112" r="100" fill="none" stroke="currentColor" strokeWidth="6"
                                strokeDasharray={628.3}
                                strokeDashoffset={628.3 - (628.3 * data.readiness_score) / 100}
                                strokeLinecap="round"
                                className="text-tertiary transition-all duration-[2500ms] custom-ease drop-shadow-[0_0_20px_rgba(103,156,255,0.6)]"
                            />
                        </svg>
                        <div className="text-center z-10 translate-y-2">
                            <span className="text-8xl font-headline font-black text-white italic tracking-tighter leading-none">{data.readiness_score}</span>
                            <p className="text-[10px] font-black text-tertiary uppercase tracking-[0.4em] mt-2 font-label">Alpha Score</p>
                        </div>
                    </div>
                    <div className="mt-12 text-center space-y-3 relative z-10">
                        <p className="text-3xl font-headline font-black text-white uppercase italic tracking-tighter leading-none">Grade: {data.grade}</p>
                        <p className="text-sm text-on-surface-variant font-body italic opacity-60 leading-relaxed max-w-[240px] antialiased">"{data.verdict}"</p>
                    </div>
                </div>

                {/* Vertical Metrics - Tonal Layout */}
                <div className="lg:col-span-8 bg-surface-container rounded-[2.5rem] p-16 shadow-[0_40px_80px_rgba(0,0,0,0.4)] border border-white/5">
                    <div className="flex justify-between items-center mb-12">
                        <div>
                            <h3 className="text-3xl font-headline font-black text-white uppercase italic tracking-tighter leading-none mb-1">Telemetry Metrics</h3>
                            <p className="text-[10px] font-black text-on-surface-variant/30 uppercase tracking-[0.4em] font-label">Architectural Resonance</p>
                        </div>
                        <span className="material-symbols-outlined text-3xl text-tertiary/40">query_stats</span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
                        {Object.entries(data.scores).map(([key, score]) => (
                            <div key={key} className="space-y-5">
                                <div className="flex justify-between text-[10px] font-black uppercase tracking-[0.2em] font-label text-on-surface-variant/60">
                                    <span className="italic">{key.replace(/_/g, ' ')}</span>
                                    <span className="text-tertiary not-italic">{score} / 10</span>
                                </div>
                                <div className="h-1.5 bg-surface-container-high rounded-full overflow-hidden shadow-inner">
                                    <div
                                        className="h-full bg-gradient-to-r from-tertiary/20 to-tertiary rounded-full transition-all duration-[2000ms] custom-ease shadow-[0_0_12px_rgba(103,156,255,0.4)]"
                                        style={{ width: `${score * 10}%` }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* SWOT Logic - Tonal Separation */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
                <div className="bg-surface-container-low rounded-[2.5rem] p-12 shadow-2xl relative overflow-hidden group border border-white/5 transition-all duration-700 hover:bg-surface-bright/40">
                    <div className="absolute top-0 right-0 p-12 opacity-5 group-hover:scale-110 transition-transform">
                        <span className="material-symbols-outlined text-9xl text-tertiary">verified_user</span>
                    </div>
                    <h3 className="text-[10px] font-black text-tertiary uppercase tracking-[0.4em] mb-10 font-label">Core Leverages</h3>
                    <ul className="space-y-6">
                        {data.strengths.map((s, i) => (
                            <li key={i} className="flex gap-5 text-base font-body text-on-surface-variant leading-relaxed italic opacity-80 group-hover:opacity-100 transition-opacity border-l-2 border-tertiary/10 pl-6 py-1 hover:border-tertiary/40 antialiased">
                                {s}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="bg-surface-container-low rounded-[2.5rem] p-12 shadow-2xl relative overflow-hidden group border border-white/5 transition-all duration-700 hover:bg-surface-bright/40">
                    <div className="absolute top-0 right-0 p-12 opacity-5 group-hover:scale-110 transition-transform text-white">
                        <span className="material-symbols-outlined text-9xl">gpp_maybe</span>
                    </div>
                    <h3 className="text-[10px] font-black text-on-surface-variant/40 uppercase tracking-[0.4em] mb-10 font-label">Structural Friction</h3>
                    <ul className="space-y-6">
                        {data.weaknesses.map((w, i) => (
                            <li key={i} className="flex gap-5 text-base font-body text-on-surface-variant/60 leading-relaxed italic opacity-70 group-hover:opacity-100 transition-opacity border-l-2 border-white/5 pl-6 py-1 hover:border-white/20 antialiased">
                                {w}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Raise strategy & Roadmap - No-Line Separation */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                {/* Roadmap Optimization */}
                <div className="lg:col-span-12 bg-surface-container-low rounded-[3rem] p-16 shadow-[0_40px_100px_rgba(0,0,0,0.5)] border border-white/5">
                    <div className="flex items-center justify-between mb-16">
                        <div className="flex items-center gap-6">
                            <div className="w-16 h-16 rounded-2xl bg-surface-container flex items-center justify-center shadow-xl">
                                <span className="material-symbols-outlined text-3xl text-tertiary">rebase_edit</span>
                            </div>
                            <div>
                                <h3 className="text-4xl font-headline font-black text-white uppercase italic tracking-tighter leading-none mb-1">Optimization Sequence</h3>
                                <p className="text-[10px] font-black text-on-surface-variant/30 uppercase tracking-[0.4em] font-label">Path to 90+ Efficiency</p>
                            </div>
                        </div>
                        <div className="hidden lg:flex items-center gap-2 overflow-hidden px-8">
                            {Array.from({ length: 20 }).map((_, i) => (
                                <div key={i} className="w-1.5 h-1.5 rounded-full bg-white/5" />
                            ))}
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {data.to_reach_90.map((step, i) => (
                            <div key={i} className="bg-surface-container rounded-3xl p-10 shadow-xl transition-all duration-700 hover:bg-surface-bright/40 group/item cursor-default border border-white/5">
                                <div className="flex justify-between items-start mb-8">
                                    <span className="text-4xl font-black font-headline text-white/5 italic group-hover/item:text-tertiary transition-colors">0{i + 1}</span>
                                    <span className="material-symbols-outlined text-on-surface-variant/20 group-hover/item:text-tertiary/40 transition-colors">arrow_downward</span>
                                </div>
                                <p className="text-base font-body text-on-surface-variant italic leading-relaxed opacity-70 group-hover/item:opacity-100 transition-opacity antialiased">{step}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Raise Architecture Overlay */}
                <div className="lg:col-span-12 mt-10">
                    <div className="bg-surface-container-high p-16 rounded-[3rem] shadow-[0_40px_120px_rgba(0,0,0,0.6)] flex flex-col lg:flex-row justify-between gap-20 group relative overflow-hidden border-t border-white/10 transition-all duration-1000 hover:brightness-110">
                        <div className="absolute inset-0 bg-gradient-to-br from-tertiary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

                        <div className="relative z-10 flex-1">
                            <div className="flex items-center gap-4 mb-12">
                                <span className="material-symbols-outlined text-tertiary text-2xl shadow-sm">monetization_on</span>
                                <h3 className="text-[10px] font-black text-tertiary uppercase tracking-[0.4em] font-label">Deployment Architecture</h3>
                            </div>
                            <div className="flex flex-col md:flex-row items-end gap-16 lg:gap-32">
                                <div>
                                    <p className="text-[11px] uppercase text-on-surface-variant/40 font-black tracking-[0.3em] mb-4 font-label">Target Allocation</p>
                                    <p className="text-8xl lg:text-9xl font-headline font-black text-white italic tracking-tighter leading-[0.8]">{data.raise_amount}</p>
                                </div>
                                <div>
                                    <p className="text-[11px] uppercase text-on-surface-variant/40 font-black tracking-[0.3em] mb-3 font-label">Target Archetype</p>
                                    <p className="text-4xl font-headline font-black text-tertiary uppercase italic tracking-tight leading-none overflow-hidden">{data.investor_type}</p>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-8 relative z-10 lg:w-[400px]">
                            <p className="text-[11px] uppercase text-on-surface-variant/40 font-black tracking-[0.3em] font-label">Primary Capital Channels</p>
                            <div className="flex flex-wrap gap-4">
                                {data.use_of_funds.map((use, i) => (
                                    <span key={i} className="px-6 py-2.5 bg-surface-container-low rounded-xl text-[10px] font-black text-white uppercase tracking-[0.2em] shadow-2xl glass-edge transition-all hover:scale-110 hover:bg-surface-container font-label italic antialiased">
                                        / {use}
                                    </span>
                                ))}
                            </div>
                            <button className="button-metallic w-full py-5 rounded-2xl text-[11px] font-black uppercase tracking-[0.3em] italic shadow-2xl mt-8 active:scale-95 transition-all">
                                Request Sequence Expansion
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
