import { cn } from '@/lib/utils'

interface InvestorData {
    project_name: string
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
            {/* Phase Header */}
            <header className="mb-8">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                    <div className="space-y-2 max-w-xl">
                        <span className="text-tertiary font-bold text-[9px] uppercase tracking-widest antialiased opacity-60 font-label">Capital Synthesis</span>
                        <h1 className="text-xl md:text-2xl font-bold font-headline tracking-tighter text-white uppercase antialiased">Investor Protocol</h1>
                        <p className="text-on-surface-variant text-[13px] leading-relaxed antialiased opacity-70">
                            Securing the fuel for <span className="text-white font-bold">{data.project_name}</span> via strategic equity distribution.
                        </p>
                    </div>
                </div>
            </header>

            {/* Readiness Index & Scores - Cinematic Bento */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16">
                {/* Score Dial */}
                <div className="lg:col-span-4 bg-surface-container-low rounded-xl p-6 flex flex-col items-center justify-center relative group overflow-hidden shadow-lg border border-white/5">
                    <div className="relative w-40 h-40 flex items-center justify-center">
                        <svg className="absolute inset-0 w-full h-full -rotate-90">
                            <circle cx="80" cy="80" r="70" fill="none" stroke="currentColor" strokeWidth="2" className="text-white/5" />
                            <circle
                                cx="80" cy="80" r="70" fill="none" stroke="currentColor" strokeWidth="4"
                                strokeDasharray={439.8}
                                strokeDashoffset={439.8 - (439.8 * data.readiness_score) / 100}
                                strokeLinecap="round"
                                className="text-tertiary"
                            />
                        </svg>
                        <div className="text-center z-10 translate-y-1">
                            <span className="text-4xl font-headline font-bold text-white tracking-tighter leading-none">{data.readiness_score}</span>
                            <p className="text-[8px] font-bold text-tertiary uppercase tracking-widest mt-1">Alpha Score</p>
                        </div>
                    </div>
                    <div className="mt-6 text-center space-y-2 relative z-10">
                        <p className="text-lg font-bold text-white uppercase tracking-tight">Grade: {data.grade}</p>
                        <p className="text-[12px] text-on-surface-variant font-body opacity-60 leading-relaxed max-w-[200px] antialiased">"{data.verdict}"</p>
                    </div>
                </div>

                {/* Telemetry Metrics */}
                <div className="lg:col-span-8 bg-surface-container rounded-xl p-8 shadow-md border border-white/5">
                    <div className="flex justify-between items-center mb-10">
                        <div>
                            <h3 className="text-lg font-bold text-white uppercase tracking-tight leading-none mb-1">Telemetry Metrics</h3>
                            <p className="text-[9px] font-bold text-on-surface-variant/30 uppercase tracking-widest">Architectural Resonance</p>
                        </div>
                        <span className="material-symbols-outlined text-xl text-tertiary/40">query_stats</span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                        {Object.entries(data.scores).map(([key, score]) => (
                            <div key={key} className="space-y-3">
                                <div className="flex justify-between text-[9px] font-bold uppercase tracking-widest text-on-surface-variant/60">
                                    <span>{key.replace(/_/g, ' ')}</span>
                                    <span className="text-tertiary">{score} / 10</span>
                                </div>
                                <div className="h-1 bg-surface-container-high rounded-full overflow-hidden">
                                    <div
                                        className="h-full bg-tertiary rounded-full transition-all"
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
                <div className="bg-surface-container-low rounded-xl p-6 shadow-md relative overflow-hidden group border border-white/5 transition-all">
                    <h3 className="text-[9px] font-bold text-tertiary uppercase tracking-widest mb-6">Core Leverages</h3>
                    <ul className="space-y-4">
                        {data.strengths.map((s, i) => (
                            <li key={i} className="text-[13px] font-body text-on-surface-variant leading-relaxed opacity-80 border-l-2 border-tertiary/20 pl-4 py-0.5">
                                {s}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="bg-surface-container-low rounded-xl p-6 shadow-md relative overflow-hidden group border border-white/5 transition-all">
                    <h3 className="text-[9px] font-bold text-on-surface-variant/40 uppercase tracking-widest mb-6">Structural Friction</h3>
                    <ul className="space-y-4">
                        {data.weaknesses.map((w, i) => (
                            <li key={i} className="text-[13px] font-body text-on-surface-variant/60 leading-relaxed opacity-70 border-l-2 border-white/5 pl-4 py-0.5">
                                {w}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Raise strategy & Roadmap - No-Line Separation */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                {/* Roadmap Optimization */}
                <div className="lg:col-span-12 bg-surface-container-low rounded-xl p-8 shadow-lg border border-white/5">
                    <div className="flex items-center justify-between mb-8">
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center border border-white/5">
                                <span className="material-symbols-outlined text-xl text-tertiary">rebase_edit</span>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-white uppercase tracking-tight leading-none mb-1">Optimization Sequence</h3>
                                <p className="text-[9px] font-bold text-on-surface-variant/30 uppercase tracking-widest">Path to 90+ Efficiency</p>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {data.to_reach_90.map((step, i) => (
                            <div key={i} className="bg-surface-container rounded-2xl p-6 shadow-md border border-white/5 group/item transition-all">
                                <div className="flex justify-between items-start mb-4">
                                    <span className="text-2xl font-bold font-headline text-white/5 group-hover/item:text-tertiary transition-colors">0{i + 1}</span>
                                </div>
                                <p className="text-[13px] font-body text-on-surface-variant leading-relaxed opacity-70 group-hover/item:opacity-100 transition-opacity antialiased">{step}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Raise Architecture Overlay */}
                <div className="lg:col-span-12 mt-4">
                    <div className="bg-surface-container-high p-8 rounded-2xl shadow-lg flex flex-col lg:flex-row justify-between gap-12 group border border-white/10">
                        <div className="flex-1">
                            <div className="flex items-center gap-3 mb-8">
                                <span className="material-symbols-outlined text-tertiary text-xl">monetization_on</span>
                                <h3 className="text-[9px] font-bold text-tertiary uppercase tracking-widest">Deployment Architecture</h3>
                            </div>
                            <div className="flex flex-col md:flex-row items-end gap-12">
                                <div>
                                    <p className="text-[10px] uppercase text-on-surface-variant/40 font-bold tracking-widest mb-2">Target Allocation</p>
                                    <p className="text-5xl lg:text-6xl font-headline font-bold text-white tracking-tighter leading-none">{data.raise_amount}</p>
                                </div>
                                <div>
                                    <p className="text-[10px] uppercase text-on-surface-variant/40 font-bold tracking-widest mb-2">Target Archetype</p>
                                    <p className="text-2xl font-headline font-bold text-tertiary uppercase tracking-tight leading-none">{data.investor_type}</p>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-6 lg:w-[320px]">
                            <p className="text-[10px] uppercase text-on-surface-variant/40 font-bold tracking-widest">Primary Capital Channels</p>
                            <div className="flex flex-wrap gap-2">
                                {data.use_of_funds.map((use, i) => (
                                    <span key={i} className="px-3 py-1 bg-surface-container-low rounded-lg text-[9px] font-bold text-white uppercase tracking-widest border border-white/5">
                                        {use}
                                    </span>
                                ))}
                            </div>
                            <button className="w-full py-3 bg-tertiary text-white rounded-lg text-[10px] font-bold uppercase tracking-widest shadow-md hover:bg-tertiary-dim transition-all">
                                Request Expansion
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
