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
        <div className="max-w-7xl mx-auto space-y-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {/* Readiness Header */}
            <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                <div className="lg:col-span-4 bg-surface-container-low rounded-2xl p-12 border border-outline-variant/15 shadow-2xl flex flex-col items-center justify-center relative group overflow-hidden">
                    <div className="absolute inset-0 bg-tertiary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="relative w-48 h-48 flex items-center justify-center">
                        <svg className="absolute inset-0 w-full h-full -rotate-90">
                            <circle cx="96" cy="96" r="88" fill="none" stroke="currentColor" strokeWidth="6" className="text-on-surface/5" />
                            <circle
                                cx="96" cy="96" r="88" fill="none" stroke="currentColor" strokeWidth="6"
                                strokeDasharray={552.9}
                                strokeDashoffset={552.9 - (552.9 * data.readiness_score) / 100}
                                className="text-tertiary transition-all duration-1000 ease-out drop-shadow-[0_0_8px_#679cff]"
                            />
                        </svg>
                        <div className="text-center z-10">
                            <span className="text-6xl font-headline font-black text-on-surface italic">{data.readiness_score}</span>
                            <p className="text-[10px] font-black text-on-surface-variant uppercase tracking-[0.3em] mt-2">Readiness Index</p>
                        </div>
                    </div>
                    <div className="mt-8 text-center space-y-2">
                        <p className="text-2xl font-headline font-black text-on-surface uppercase italic">Grade: {data.grade}</p>
                        <p className="text-xs text-on-surface-variant font-medium italic opacity-70">"{data.verdict}"</p>
                    </div>
                </div>

                <div className="lg:col-span-8 bg-surface-container-high/50 rounded-2xl p-12 border border-outline-variant/10 shadow-inner">
                    <h3 className="text-[10px] font-black text-on-surface-variant uppercase tracking-[0.3em] mb-10 opacity-60">Capital Resonance Scores</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                        {Object.entries(data.scores).map(([key, score]) => (
                            <div key={key} className="space-y-4">
                                <div className="flex justify-between text-[11px] font-black uppercase tracking-widest">
                                    <span className="text-on-surface-variant">{key.replace(/_/g, ' ')}</span>
                                    <span className="text-tertiary">{score}/10</span>
                                </div>
                                <div className="h-1.5 w-full bg-surface-container-highest rounded-full overflow-hidden shadow-inner">
                                    <div className="h-full bg-tertiary rounded-full shadow-[0_0_8px_#679cff]" style={{ width: `${score * 10}%` }} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SWOT Logic */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="bg-surface-container-low rounded-2xl p-10 border border-outline-variant/15 shadow-2xl relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-6 opacity-10">
                        <TrendingUp className="w-20 h-20 text-tertiary" />
                    </div>
                    <h3 className="text-[10px] font-black text-tertiary uppercase tracking-[0.3em] mb-8">Strategic Leverage (Strengths)</h3>
                    <ul className="space-y-6">
                        {data.strengths.map((s, i) => (
                            <li key={i} className="flex gap-4 text-sm font-medium text-on-surface-variant leading-relaxed italic">
                                <ShieldCheck className="w-5 h-5 text-tertiary flex-shrink-0" />
                                {s}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="bg-surface-container-low rounded-2xl p-10 border border-outline-variant/15 shadow-2xl relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-6 opacity-10">
                        <AlertTriangle className="w-20 h-20 text-on-surface-variant" />
                    </div>
                    <h3 className="text-[10px] font-black text-on-surface-variant uppercase tracking-[0.3em] mb-8">Structural Vulnerabilities</h3>
                    <ul className="space-y-6">
                        {data.weaknesses.map((w, i) => (
                            <li key={i} className="flex gap-4 text-sm font-medium text-on-surface-variant/80 leading-relaxed italic">
                                <AlertTriangle className="w-5 h-5 text-on-surface-variant opacity-40 flex-shrink-0" />
                                {w}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* Raise Strategy & Roadmap */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                <div className="lg:col-span-7 bg-surface-container-low rounded-2xl p-10 border border-outline-variant/15 shadow-2xl">
                    <h3 className="text-2xl font-headline font-black text-on-surface uppercase italic tracking-tighter mb-10 flex items-center gap-4">
                        <Sparkles className="w-6 h-6 text-tertiary" />
                        Roadmap to 90+ Readiness
                    </h3>
                    <div className="space-y-6">
                        {data.to_reach_90.map((step, i) => (
                            <div key={i} className="flex gap-8 p-6 rounded-xl bg-surface-container-high/40 border border-outline-variant/10 group hover:bg-surface-container-high transition-colors shadow-inner">
                                <span className="text-2xl font-headline font-black text-surface-container-highest italic group-hover:text-tertiary transition-colors">0{i + 1}</span>
                                <p className="text-sm font-medium text-on-surface-variant leading-relaxed italic">{step}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="lg:col-span-5 bg-surface-container-high p-12 rounded-2xl border border-outline-variant/15 shadow-2xl flex flex-col justify-between group relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-tertiary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                    <div>
                        <h3 className="text-[10px] font-black text-on-surface-variant uppercase tracking-[0.3em] mb-12">Raise Architecture</h3>
                        <div className="space-y-12 mb-16">
                            <div>
                                <p className="text-[10px] uppercase text-on-surface-variant font-black tracking-widest mb-2 opacity-60">Target Amount</p>
                                <p className="text-5xl font-headline font-black text-on-surface italic tracking-tighter">{data.raise_amount}</p>
                            </div>
                            <div>
                                <p className="text-[10px] uppercase text-on-surface-variant font-black tracking-widest mb-2 opacity-60">Investor Archetype</p>
                                <p className="text-2xl font-headline font-black text-tertiary uppercase italic tracking-tight">{data.investor_type}</p>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-6 relative">
                        <p className="text-[10px] uppercase text-on-surface-variant font-black tracking-widest opacity-60">Core Use of Funds</p>
                        <div className="flex flex-wrap gap-3">
                            {data.use_of_funds.map((use, i) => (
                                <span key={i} className="px-5 py-2.5 bg-surface-container-low border border-outline-variant/20 rounded-xl text-[10px] font-black text-on-surface uppercase tracking-widest shadow-lg">
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
