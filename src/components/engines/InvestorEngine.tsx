import { cn } from '@/lib/utils'
import { TrendingUp, AlertTriangle, ListChecks, DollarSign, Target, Sparkles, Activity, ShieldCheck } from 'lucide-react'

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
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000">
            {/* Phase Header */}
            <div className="flex items-center gap-2 mb-8">
                <span className="px-2 py-0.5 rounded bg-surface-container-high text-tertiary text-[10px] font-bold tracking-widest uppercase font-label">Phase 07: Capital Readiness</span>
                <span className="w-1.5 h-1.5 rounded-full bg-tertiary animate-pulse"></span>
            </div>

            {/* Readiness Index & Scores */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-12">
                {/* Score Dial */}
                <div className="lg:col-span-4 bg-surface-container-low rounded-3xl p-12 ghost-border flex flex-col items-center justify-center relative group overflow-hidden shadow-2xl">
                    <div className="absolute inset-0 bg-tertiary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
                    <div className="relative w-48 h-48 flex items-center justify-center">
                        <svg className="absolute inset-0 w-full h-full -rotate-90">
                            <circle cx="96" cy="96" r="88" fill="none" stroke="currentColor" strokeWidth="4" className="text-white/5" />
                            <circle
                                cx="96" cy="96" r="88" fill="none" stroke="currentColor" strokeWidth="4"
                                strokeDasharray={552.9}
                                strokeDashoffset={552.9 - (552.9 * data.readiness_score) / 100}
                                className="text-tertiary transition-all duration-1000 ease-out drop-shadow-[0_0_12px_rgba(103,156,255,0.5)]"
                            />
                        </svg>
                        <div className="text-center z-10">
                            <span className="text-6xl font-headline font-black text-white italic leading-none">{data.readiness_score}</span>
                            <p className="text-[10px] font-black text-on-surface-variant uppercase tracking-[0.3em] mt-2 font-label">Capital Index</p>
                        </div>
                    </div>
                    <div className="mt-8 text-center space-y-2 relative z-10">
                        <p className="text-2xl font-headline font-black text-white uppercase italic tracking-tighter">Grade: {data.grade}</p>
                        <p className="text-xs text-on-surface-variant font-body italic opacity-80 leading-relaxed max-w-[200px]">"{data.verdict}"</p>
                    </div>
                </div>

                {/* Vertical Metrics */}
                <div className="lg:col-span-8 bg-surface-container-high rounded-3xl p-12 ghost-border shadow-inner">
                    <div className="flex justify-between items-center mb-10">
                        <h3 className="text-[10px] font-black text-on-surface-variant uppercase tracking-[0.3em] opacity-60 font-label">Capital Resonance Metrics</h3>
                        <span className="material-symbols-outlined text-tertiary">analytics</span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                        {Object.entries(data.scores).map(([key, score]) => (
                            <div key={key} className="space-y-4">
                                <div className="flex justify-between text-[11px] font-black uppercase tracking-widest font-label text-on-surface-variant">
                                    <span>{key.replace(/_/g, ' ')}</span>
                                    <span className="text-tertiary">{score}/10</span>
                                </div>
                                <div className="h-1 bg-surface-container-highest rounded-full overflow-hidden shadow-inner">
                                    <div
                                        className="h-full bg-gradient-to-r from-tertiary/40 to-tertiary rounded-full transition-all duration-1000 shadow-[0_0_8px_rgba(103,156,255,0.3)]"
                                        style={{ width: `${score * 10}%` }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* SWOT Logic */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="bg-surface-container-low rounded-3xl p-10 ghost-border relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                        <span className="material-symbols-outlined text-8xl text-tertiary">shield_check</span>
                    </div>
                    <h3 className="text-[10px] font-black text-tertiary uppercase tracking-[0.3em] mb-8 font-label">Strategic Leverages</h3>
                    <ul className="space-y-6">
                        {data.strengths.map((s, i) => (
                            <li key={i} className="flex gap-4 text-sm font-body text-on-surface-variant leading-relaxed italic border-l-2 border-tertiary/20 pl-4 py-1 hover:border-tertiary transition-colors">
                                {s}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="bg-surface-container-low rounded-3xl p-10 ghost-border relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                        <span className="material-symbols-outlined text-8xl text-white">warning</span>
                    </div>
                    <h3 className="text-[10px] font-black text-white/50 uppercase tracking-[0.3em] mb-8 font-label">Critical Vulnerabilities</h3>
                    <ul className="space-y-6">
                        {data.weaknesses.map((w, i) => (
                            <li key={i} className="flex gap-4 text-sm font-body text-on-surface-variant/80 leading-relaxed italic border-l-2 border-white/5 pl-4 py-1 hover:border-white/20 transition-colors">
                                {w}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Raise strategy & Roadmap */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Roadmap */}
                <div className="lg:col-span-7 bg-surface-container-low rounded-3xl p-10 ghost-border shadow-2xl">
                    <div className="flex items-center gap-4 mb-10">
                        <span className="material-symbols-outlined text-tertiary p-2 rounded-xl bg-surface-container-high shadow-xl">auto_fix_high</span>
                        <div>
                            <h3 className="text-2xl font-headline font-black text-white uppercase italic tracking-tighter leading-none">Roadmap to 90+</h3>
                            <p className="text-[10px] font-black text-on-surface-variant uppercase tracking-[0.2em] mt-1 font-label">Optimization Path</p>
                        </div>
                    </div>
                    <div className="space-y-4">
                        {data.to_reach_90.map((step, i) => (
                            <div key={i} className="flex gap-8 p-6 rounded-2xl bg-surface-container-high/40 ghost-border group hover:bg-surface-container-high transition-all duration-500 shadow-inner">
                                <span className="text-3xl font-headline font-black text-white/5 italic group-hover:text-tertiary transition-colors">0{i + 1}</span>
                                <p className="text-sm font-body text-on-surface-variant leading-relaxed italic group-hover:text-white transition-colors">{step}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Capital Card */}
                <div className="lg:col-span-5 bg-surface-container-high p-12 rounded-3xl ghost-border shadow-2xl flex flex-col justify-between group relative overflow-hidden border-t-2 border-tertiary/20">
                    <div className="absolute inset-0 bg-gradient-to-br from-tertiary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
                    <div className="relative z-10">
                        <div className="flex justify-between items-start mb-12">
                            <h3 className="text-[10px] font-black text-white/50 uppercase tracking-[0.3em] font-label">Raise Architecture</h3>
                            <span className="material-symbols-outlined text-tertiary animate-pulse">payments</span>
                        </div>
                        <div className="space-y-12 mb-16">
                            <div>
                                <p className="text-[10px] uppercase text-on-surface-variant font-black tracking-widest mb-1 opacity-60 font-label">Target Amount</p>
                                <p className="text-6xl font-headline font-black text-white italic tracking-tighter leading-none">{data.raise_amount}</p>
                            </div>
                            <div>
                                <p className="text-[10px] uppercase text-on-surface-variant font-black tracking-widest mb-1 opacity-60 font-label">Investor Archetype</p>
                                <p className="text-2xl font-headline font-black text-tertiary uppercase italic tracking-tight">{data.investor_type}</p>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-6 relative z-10">
                        <p className="text-[10px] uppercase text-on-surface-variant font-black tracking-widest opacity-60 font-label">Core Allocation</p>
                        <div className="flex flex-wrap gap-2">
                            {data.use_of_funds.map((use, i) => (
                                <span key={i} className="px-4 py-2 bg-surface-container-low ghost-border rounded-xl text-[9px] font-black text-white uppercase tracking-widest shadow-lg hover:bg-surface-container transition-colors font-label">
                                    {use}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
