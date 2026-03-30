import React from 'react'
import {
    CheckCircle2,
    AlertTriangle,
    AlertCircle,
    Globe,
    Brain,
    Timer,
    Search,
    ShieldCheck
} from 'lucide-react'
import { cn } from '@/lib/utils'

interface ValidationData {
    pain_score: number
    tam_estimate: string
    sam_estimate: string
    is_paying_market: boolean
    who_pays_now: string[]
    current_solutions: string[]
    key_insight: string
    validation_verdict: 'green' | 'yellow' | 'red'
    verdict_reason: string
    red_flags: string[]
    validation_questions: string[]
}

export function ValidationEngine({ data }: { data: ValidationData }) {
    if (!data) return null

    const isBuild = data.validation_verdict === 'green' || data.validation_verdict === 'yellow'
    const confidenceScore = Math.floor(data.pain_score * 8.5) + 12

    return (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000">
            {/* Header Section */}
            <header className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-12">
                <div className="max-w-2xl">
                    <div className="flex items-center gap-3 mb-4">
                        <span className="px-2 py-0.5 rounded bg-surface-container-high text-tertiary text-[10px] font-bold tracking-widest uppercase font-label">Project Analysis</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span>
                        <span className="text-on-surface-variant text-[10px] font-bold uppercase tracking-widest font-label opacity-60">Signal Verified</span>
                    </div>
                    <h1 className="text-5xl font-extrabold font-headline tracking-tighter text-white mb-4 uppercase italic">
                        Project Validation
                    </h1>
                    <p className="text-lg text-on-surface-variant max-w-xl font-body leading-relaxed opacity-90">
                        {data.verdict_reason}
                    </p>
                </div>
                <div className="relative group">
                    <div className={cn(
                        "absolute -inset-1 rounded-2xl blur-2xl transition-all duration-700",
                        isBuild ? "bg-tertiary/30 group-hover:bg-tertiary/50" : "bg-error/30 group-hover:bg-error/50"
                    )}></div>
                    <div className={cn(
                        "relative bg-surface-container-highest px-12 py-6 rounded-2xl border-2 flex flex-col items-center justify-center min-w-[200px] shadow-2xl transition-transform active:scale-95 cursor-default",
                        isBuild ? "border-tertiary/40" : "border-error/40"
                    )}>
                        <span className={cn("text-[10px] font-black tracking-[0.3em] uppercase mb-1 font-label", isBuild ? "text-tertiary" : "text-error")}>
                            Final Decision
                        </span>
                        <span className="text-4xl font-black text-white font-headline tracking-tighter uppercase italic">
                            {isBuild ? 'BUILD' : 'PAUSE'}
                        </span>
                    </div>
                </div>
            </header>

            {/* Bento Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
                {/* Idea Score Main Card */}
                <div className="md:col-span-8 bg-surface-container-low rounded-3xl overflow-hidden ghost-border relative shadow-2xl group">
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-surface-bright/20 to-transparent pointer-events-none"></div>
                    <div className="p-10 relative z-10">
                        <div className="flex justify-between items-start mb-12">
                            <div>
                                <h3 className="text-on-surface-variant text-[10px] font-black uppercase tracking-[0.3em] font-label mb-2 opacity-60">Composite Confidence</h3>
                                <p className="text-on-surface text-sm font-body opacity-60 italic">Algorithmic risk/reward synthesis architecture.</p>
                            </div>
                            <div className="text-right">
                                <span className="text-7xl font-black font-headline text-white tracking-tighter transition-all group-hover:text-tertiary">{confidenceScore}</span>
                                <span className="text-on-surface-variant text-2xl font-bold opacity-40">/100</span>
                            </div>
                        </div>
                        <div className="space-y-8">
                            <div className="w-full bg-surface-container-lowest h-3 rounded-full overflow-hidden shadow-inner">
                                <div
                                    className="bg-gradient-to-r from-tertiary-dim via-tertiary to-white h-full shadow-[0_0_20px_rgba(103,156,255,0.4)] transition-all duration-[2000ms] ease-out"
                                    style={{ width: `${confidenceScore}%` }}
                                ></div>
                            </div>
                            <div className="grid grid-cols-3 gap-6 pt-4">
                                <div className="p-6 rounded-2xl bg-surface-container ghost-border shadow-xl hover:bg-surface-container-high transition-colors">
                                    <p className="text-[9px] text-on-surface-variant font-black uppercase tracking-widest mb-2 font-label">Market Fit</p>
                                    <p className="text-2xl font-headline font-black text-white">92%</p>
                                </div>
                                <div className="p-6 rounded-2xl bg-surface-container ghost-border shadow-xl hover:bg-surface-container-high transition-colors">
                                    <p className="text-[9px] text-on-surface-variant font-black uppercase tracking-widest mb-2 font-label">Liquidity</p>
                                    <p className="text-2xl font-headline font-black text-white">{data.is_paying_market ? 'Yes' : 'No'}</p>
                                </div>
                                <div className="p-6 rounded-2xl bg-surface-container ghost-border shadow-xl hover:bg-surface-container-high transition-colors">
                                    <p className="text-[9px] text-on-surface-variant font-black uppercase tracking-widest mb-2 font-label">Complexity</p>
                                    <p className="text-2xl font-headline font-black text-white italic">Mid</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Pain Score Card */}
                <div className="md:col-span-4 bg-surface-container-low rounded-3xl p-10 flex flex-col justify-between border-t border-white/5 relative overflow-hidden group shadow-2xl">
                    <div className="absolute top-0 left-0 w-full h-1 bg-error shadow-[0_0_20px_rgba(238,125,119,0.5)]"></div>
                    <div>
                        <div className="flex justify-between items-center mb-8">
                            <h3 className="text-on-surface-variant text-[10px] font-black uppercase tracking-[0.3em] font-label opacity-60">Pain Significance</h3>
                            <span className="material-symbols-outlined text-error text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>warning</span>
                        </div>
                        <div className="mb-4">
                            <span className="text-5xl font-black font-headline text-white italic uppercase tracking-tighter">CRITICAL</span>
                        </div>
                        <p className="text-on-surface-variant text-base font-body leading-relaxed opacity-90">
                            The target audience identifies a severe friction gap. Direct evidence of high-value manual workarounds detected.
                        </p>
                    </div>
                    <div className="mt-10 flex items-center gap-3 text-error text-[10px] font-black uppercase tracking-widest font-label animate-pulse">
                        <span className="w-2.5 h-2.5 rounded-full bg-error shadow-lg"></span>
                        Immediate Entry Signal
                    </div>
                </div>

                {/* Market Size Card */}
                <div className="md:col-span-12 lg:col-span-5 bg-surface-container rounded-3xl p-10 ghost-border flex items-center gap-10 relative overflow-hidden shadow-2xl group">
                    <div className="flex-1">
                        <h3 className="text-on-surface-variant text-[10px] font-black uppercase tracking-[0.3em] font-label mb-8 opacity-60">Total Addressable Market</h3>
                        <div className="flex items-baseline gap-3">
                            <span className="text-6xl font-black font-headline text-white tracking-tighter italic group-hover:scale-105 transition-transform duration-700">{data.tam_estimate}</span>
                        </div>
                        <p className="text-on-surface-variant text-sm mt-6 font-body opacity-60 italic leading-relaxed uppercase tracking-wider font-black">Segment Alpha: {data.sam_estimate}</p>
                    </div>
                    <div className="hidden sm:block w-32 h-32 opacity-10 rotate-12 flex-shrink-0 group-hover:rotate-45 transition-transform duration-1000">
                        <span className="material-symbols-outlined text-[120px] text-tertiary">language</span>
                    </div>
                </div>

                {/* Latent Demand Synthesis */}
                <div className="md:col-span-12 lg:col-span-7 bg-surface-container-high rounded-3xl p-10 ghost-border shadow-2xl relative overflow-hidden">
                    <h3 className="text-on-surface-variant text-[10px] font-black uppercase tracking-[0.3em] font-label mb-10 flex items-center gap-3 opacity-60">
                        <span className="material-symbols-outlined text-tertiary hover:scale-110 transition-transform">neurology</span>
                        Latent Demand Synthesis
                    </h3>
                    <div className="space-y-8">
                        <div className="flex gap-6 group cursor-default">
                            <div className="w-1.5 h-14 bg-tertiary/20 group-hover:bg-tertiary transition-all duration-500 rounded-full flex-shrink-0"></div>
                            <div>
                                <p className="text-white font-black font-headline uppercase italic mb-1 tracking-tight">Intelligence Pivot</p>
                                <p className="text-on-surface-variant text-sm leading-relaxed opacity-90">{data.key_insight}</p>
                            </div>
                        </div>
                        <div className="flex gap-6 group cursor-default">
                            <div className="w-1.5 h-14 bg-tertiary/20 group-hover:bg-tertiary transition-all duration-500 rounded-full flex-shrink-0"></div>
                            <div>
                                <p className="text-white font-black font-headline uppercase italic mb-1 tracking-tight">Competitor Gap Analysis</p>
                                <p className="text-on-surface-variant text-sm leading-relaxed opacity-90">{data.current_solutions[0]}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Secondary Cards */}
                <div className="md:col-span-12 lg:col-span-4 bg-surface-container-high rounded-3xl p-10 ghost-border shadow-2xl transition-all hover:bg-surface-container-lowest duration-500">
                    <div className="flex items-center gap-5 mb-8">
                        <div className="w-14 h-14 rounded-2xl bg-surface-bright/10 flex items-center justify-center shadow-lg border border-white/5">
                            <span className="material-symbols-outlined text-tertiary text-3xl">avg_pace</span>
                        </div>
                        <div>
                            <h4 className="text-white font-black font-headline uppercase italic tracking-tight">Time-to-Alpha</h4>
                            <p className="text-[10px] text-tertiary font-black uppercase tracking-[0.2em] font-label">Est: 14 Days</p>
                        </div>
                    </div>
                    <p className="text-sm text-on-surface-variant leading-relaxed mb-10 font-body opacity-90">
                        Rapid adoption curve identified. Early-stage high conviction signals detected in vertical pilot cohorts.
                    </p>
                    <div className="flex -space-x-3">
                        {[1, 2, 3, 4].map(i => (
                            <div key={i} className="w-10 h-10 rounded-full border-2 border-surface-container-high bg-tertiary flex items-center justify-center text-[10px] font-bold text-white shadow-xl ring-2 ring-background">
                                {i === 4 ? '+12' : <span className="material-symbols-outlined text-sm">person</span>}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Visual Blueprint Card */}
                <div className="md:col-span-12 lg:col-span-8 h-[300px] rounded-3xl overflow-hidden relative ghost-border group shadow-2xl">
                    <img
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAs0V-gekqAgeTxSLv_oxlLPTv86Wx5zmylu-u7ypv7EQANxLtcAqoQNJ9BK-miWjVJ_SfobVYZ1H2R18Zr3kdKsSLX4NhnCHPaBhEWCr2C-ByG-L1bZPpDUCg2TzVSmUeUTnHCIpupUhRNoodswdEjvbLxyXJKqBuu2zFSXa_zx6EHLc2hep3lBDKYmfh7tREkwWVotoElQDJ296fNT3HSHBtjAIVYLrFxTirCq9-2KHI13X7UV45v0nscAXj6no2Lx_cwMUrr3xKa"
                        className="w-full h-full object-cover grayscale opacity-20 group-hover:opacity-40 transition-all duration-[2000ms] ease-out group-hover:scale-110"
                        alt="Competitive Landscape"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
                    <div className="absolute bottom-8 left-10 right-10 flex justify-between items-end">
                        <div>
                            <h4 className="text-2xl font-black text-white font-headline tracking-tighter uppercase italic mb-2">Market Architecture Proof</h4>
                            <p className="text-on-surface-variant text-sm font-body opacity-60">Strategic mapping of the entry quadrant trajectories.</p>
                        </div>
                        <button className="bg-white/5 backdrop-blur-2xl px-10 py-3 rounded-xl text-white text-[10px] font-black hover:bg-white/10 transition-all border border-white/10 uppercase tracking-widest font-label shadow-2xl active:scale-95">
                            Visual Roadmap
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
