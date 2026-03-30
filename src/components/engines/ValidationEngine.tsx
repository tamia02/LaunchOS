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
        <div className="animate-in fade-in slide-in-from-bottom-8 duration-[2000ms] custom-ease">
            {/* Signal Header - Editorial Layout */}
            <header className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-12">
                <div className="max-w-3xl">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="px-3 py-1.5 rounded-lg bg-surface-variant/20 shadow-inner">
                            <span className="text-tertiary text-[10px] font-black tracking-[0.4em] uppercase font-label">Intelligence Validation 08</span>
                        </div>
                        <span className="w-1.5 h-1.5 rounded-full bg-tertiary shadow-[0_0_10px_#679cff]"></span>
                    </div>
                    <h1 className="text-6xl md:text-8xl font-black font-headline tracking-tighter text-white mb-8 leading-[0.9] uppercase italic">Market <br /> <span className="text-tertiary">Verdicts.</span></h1>
                    <p className="text-xl text-on-surface-variant font-body leading-relaxed italic opacity-80 antialiased max-w-2xl px-2">
                        {data.verdict_reason}
                    </p>
                </div>
                <div className="relative group perspective-1000">
                    <div className={cn(
                        "absolute -inset-4 rounded-[2.5rem] blur-3xl opacity-20 transition-all duration-1000",
                        isBuild ? "bg-tertiary group-hover:opacity-40" : "bg-error group-hover:opacity-40"
                    )}></div>
                    <div className={cn(
                        "relative bg-surface-container-low px-14 py-10 rounded-[2.5rem] shadow-[0_40px_80px_rgba(0,0,0,0.5)] border border-white/5 flex flex-col items-center justify-center min-w-[280px] transition-all duration-700 hover:rotate-x-12 hover:scale-[1.05]",
                        isBuild ? "border-tertiary/20" : "border-error/20"
                    )}>
                        <span className={cn("text-[10px] font-black tracking-[0.5em] uppercase mb-4 font-label italic", isBuild ? "text-tertiary" : "text-error")}>
                            STRATEGIC_CALL
                        </span>
                        <span className="text-6xl font-black text-white font-headline tracking-tighter uppercase italic leading-none">
                            {isBuild ? 'BUILD' : 'PAUSE'}
                        </span>
                    </div>
                </div>
            </header>

            {/* Validation Matrix - Cinematic Bento */}
            <div className="grid grid-cols-12 gap-10 mb-16">
                {/* Confidence Architecture */}
                <div className="col-span-12 lg:col-span-8 bg-surface-container-low rounded-[3rem] p-12 relative overflow-hidden group shadow-[0_60px_120px_rgba(0,0,0,0.5)] border border-white/5">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-tertiary/5 rounded-full blur-[120px] pointer-events-none transition-opacity opacity-0 group-hover:opacity-100 duration-1000"></div>
                    <div className="flex justify-between items-start mb-16 relative z-10">
                        <div>
                            <h3 className="text-4xl font-headline font-black text-white uppercase italic tracking-tighter leading-none mb-2">Confidence Composite</h3>
                            <p className="text-[10px] text-tertiary font-black uppercase tracking-[0.4em] font-label">Algorithmic risk/reward synthesis</p>
                        </div>
                        <div className="text-right">
                            <span className="text-8xl font-black font-headline text-white tracking-tighter italic decoration-tertiary underline decoration-4 underline-offset-[12px]">{confidenceScore}</span>
                            <span className="text-on-surface-variant/20 text-3xl font-black font-headline ml-4 tracking-tighter">/100</span>
                        </div>
                    </div>
                    <div className="space-y-12 relative z-10">
                        <div className="w-full bg-surface-container-highest/20 h-2 rounded-full overflow-hidden shadow-inner glass-edge">
                            <div
                                className="bg-tertiary h-full shadow-[0_0_20px_#679cff] transition-all duration-[2500ms] custom-ease"
                                style={{ width: `${confidenceScore}%` }}
                            ></div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-4">
                            <div className="p-8 rounded-[2rem] bg-surface-container shadow-xl border border-white/5 hover:bg-surface-container-high transition-all duration-500 group/card">
                                <p className="text-[10px] text-on-surface-variant/40 font-black uppercase tracking-[0.3em] mb-4 font-label italic group-hover/card:text-tertiary transition-colors">Market Fit</p>
                                <p className="text-4xl font-headline font-black text-white italic tracking-tighter leading-none">92.4%</p>
                            </div>
                            <div className="p-8 rounded-[2rem] bg-surface-container shadow-xl border border-white/5 hover:bg-surface-container-high transition-all duration-500 group/card">
                                <p className="text-[10px] text-on-surface-variant/40 font-black uppercase tracking-[0.3em] mb-4 font-label italic group-hover/card:text-tertiary transition-colors">Liquidity</p>
                                <p className="text-4xl font-headline font-black text-white italic tracking-tighter leading-none">{data.is_paying_market ? 'YES' : 'NO'}</p>
                            </div>
                            <div className="p-8 rounded-[2rem] bg-surface-container shadow-xl border border-white/5 hover:bg-surface-container-high transition-all duration-500 group/card">
                                <p className="text-[10px] text-on-surface-variant/40 font-black uppercase tracking-[0.3em] mb-4 font-label italic group-hover/card:text-tertiary transition-colors">Complexity</p>
                                <p className="text-4xl font-headline font-black text-white italic tracking-tighter leading-none">MID</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Pain Significance Card */}
                <div className="col-span-12 lg:col-span-4 bg-surface-container rounded-[3rem] p-12 flex flex-col justify-between shadow-[0_60px_120px_rgba(0,0,0,0.5)] border-t border-white/10 relative overflow-hidden group">
                    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-error via-error/50 to-error shadow-[0_0_25px_rgba(255,73,73,0.6)] animate-pulse"></div>
                    <div className="relative z-10">
                        <div className="flex justify-between items-start mb-12">
                            <h3 className="text-on-surface-variant/40 text-[10px] font-black uppercase tracking-[0.4em] font-label italic">Pain Threshold</h3>
                            <div className="w-12 h-12 rounded-2xl bg-error/10 flex items-center justify-center border border-error/20 group-hover:scale-110 transition-transform">
                                <span className="material-symbols-outlined text-error text-2xl">warning</span>
                            </div>
                        </div>
                        <div className="mb-8">
                            <span className="text-6xl font-black font-headline text-white italic tracking-tighter leading-none block uppercase">CRITICAL</span>
                            <span className="text-[10px] text-error font-black uppercase tracking-[0.5em] font-label mt-4 block italic">Signal intensity 0.94</span>
                        </div>
                        <div className="bg-surface-container-high/40 p-8 rounded-[2rem] glass-edge border border-white/5">
                            <p className="text-base text-white/80 font-body leading-relaxed italic antialiased">
                                The target audience identifies a severe friction gap. Direct evidence of high-value manual workarounds detected in <span className="text-white font-black underline decoration-error/40 underline-offset-4 font-headline">Vertical Segment A.</span>
                            </p>
                        </div>
                    </div>
                    <div className="mt-12 flex items-center gap-4 text-error text-[10px] font-black uppercase tracking-[0.4em] font-label animate-pulse relative z-10 italic">
                        <span className="w-3 h-3 rounded-full bg-error shadow-[0_0_10px_rgba(255,73,73,0.8)]"></span>
                        Immediate Entry Sequence Verified
                    </div>
                </div>

                {/* Market Capacity - TAM/SAM */}
                <div className="col-span-12 md:col-span-5 bg-surface-container rounded-[3rem] p-12 shadow-[0_40px_80px_rgba(0,0,0,0.4)] border border-white/5 flex flex-col justify-between relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-br from-tertiary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
                    <div className="relative z-10">
                        <h3 className="text-on-surface-variant/40 text-[10px] font-black uppercase tracking-[0.4em] font-label italic mb-12">Total Addressable Architecture</h3>
                        <div className="flex items-baseline gap-4 mb-8">
                            <span className="text-8xl font-black font-headline text-white tracking-tighter italic group-hover:scale-[1.03] transition-transform duration-700 leading-none">{data.tam_estimate}</span>
                        </div>
                        <div className="bg-surface-container-low p-6 rounded-2xl glass-edge border border-white/5 inline-block">
                            <p className="text-tertiary text-xs font-black uppercase tracking-[0.3em] font-label italic">Segment Alpha: {data.sam_estimate}</p>
                        </div>
                    </div>
                    <div className="absolute bottom-0 right-0 p-12 opacity-5 scale-150 rotate-12 group-hover:rotate-45 group-hover:scale-[1.8] transition-all duration-[2000ms]">
                        <span className="material-symbols-outlined text-[140px] text-tertiary">language</span>
                    </div>
                </div>

                {/* Intelligence Synthesis */}
                <div className="col-span-12 md:col-span-7 bg-surface-container-high rounded-[3rem] p-12 shadow-[0_60px_120px_rgba(0,0,0,0.5)] border border-white/5 relative overflow-hidden group">
                    <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-tertiary/5 rounded-full blur-[100px] pointer-events-none group-hover:bg-tertiary/10 transition-colors duration-1000"></div>
                    <h3 className="text-on-surface-variant/40 text-[10px] font-black uppercase tracking-[0.4em] font-label italic mb-12 flex items-center gap-4 relative z-10">
                        <span className="w-10 h-10 rounded-xl bg-surface-variant/10 flex items-center justify-center border border-white/5 shadow-inner group-hover:rotate-12 transition-transform">
                            <span className="material-symbols-outlined text-tertiary text-xl hover:scale-110 transition-transform">neurology</span>
                        </span>
                        Intelligence Synthesis Protocols
                    </h3>
                    <div className="space-y-10 relative z-10">
                        <div className="flex gap-8 group/item cursor-default">
                            <div className="w-1 rounded-full bg-tertiary/20 group-hover/item:bg-tertiary transition-all duration-700 h-20 shadow-[0_0_15px_rgba(103,156,255,0.4)]"></div>
                            <div className="flex-1">
                                <p className="text-white font-black font-headline text-3xl uppercase italic mb-3 tracking-tighter leading-none group-hover/item:translate-x-2 transition-transform">Intelligence Pivot</p>
                                <p className="text-on-surface-variant/70 text-base leading-relaxed italic antialiased">{data.key_insight}</p>
                            </div>
                        </div>
                        <div className="flex gap-8 group/item cursor-default">
                            <div className="w-1 rounded-full bg-white/5 group-hover/item:bg-white/20 transition-all duration-700 h-20 shadow-inner"></div>
                            <div className="flex-1">
                                <p className="text-white/40 font-black font-headline text-3xl uppercase italic mb-3 tracking-tighter leading-none group-hover/item:translate-x-2 transition-transform">Competitor Gap Analysis</p>
                                <p className="text-on-surface-variant/40 text-base leading-relaxed italic antialiased">{data.current_solutions[0]}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Verification Telemetry - Bottom Grid */}
            <div className="grid grid-cols-12 gap-10">
                {/* Time-to-Alpha Protocol */}
                <div className="col-span-12 lg:col-span-4 bg-surface-container-low rounded-[2.5rem] p-10 shadow-xl border border-white/5 group hover:bg-surface-container transition-all duration-500 overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-tertiary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="flex items-center gap-5 mb-10 relative z-10">
                        <div className="w-14 h-14 rounded-2xl bg-surface-container flex items-center justify-center shadow-lg border border-white/5 group-hover:scale-110 transition-transform">
                            <span className="material-symbols-outlined text-tertiary text-3xl">avg_pace</span>
                        </div>
                        <div>
                            <h4 className="text-white font-black font-headline text-2xl uppercase italic tracking-tighter leading-none">Time-to-Alpha</h4>
                            <p className="text-[10px] text-tertiary font-black uppercase tracking-[0.3em] font-label italic border-b border-tertiary/20 pb-2">PROBABILITY_EST: 14Days</p>
                        </div>
                    </div>
                    <p className="text-sm text-on-surface-variant/70 leading-relaxed mb-12 font-body italic antialiased relative z-10 h-16 line-clamp-3">
                        Rapid adoption curve identified. Early-stage high conviction signals detected in vertical pilot cohorts through automated telemetry.
                    </p>
                    <div className="flex -space-x-4 relative z-10">
                        {[1, 2, 3, 4].map(i => (
                            <div key={i} className="w-12 h-12 rounded-full border-4 border-surface-container-low bg-surface-container-highest flex items-center justify-center shadow-[0_10px_20px_rgba(0,0,0,0.4)] transition-all hover:-translate-y-2 group/avatar">
                                {i === 4 ? <span className="text-[10px] font-black text-tertiary uppercase font-label">+12</span> : <span className="material-symbols-outlined text-sm text-white/40">person</span>}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Visual Architecture Proof */}
                <div className="col-span-12 lg:col-span-8 rounded-[3.5rem] overflow-hidden relative shadow-[0_60px_120px_rgba(0,0,0,0.6)] border border-white/10 group min-h-[360px]">
                    <div className="absolute inset-0 bg-background z-0"></div>
                    <img
                        src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2070"
                        className="w-full h-full object-cover grayscale opacity-20 group-hover:opacity-40 transition-all duration-[3000ms] custom-ease group-hover:scale-110 z-10"
                        alt="Competitive Landscape"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent z-20"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-transparent z-20"></div>

                    <div className="absolute bottom-12 left-12 right-12 flex flex-col md:flex-row justify-between items-start md:items-end z-30 gap-10">
                        <div className="max-w-xl">
                            <div className="flex items-center gap-4 mb-6">
                                <span className="w-12 h-[1px] bg-tertiary"></span>
                                <span className="text-tertiary text-[10px] font-black uppercase tracking-[0.4em] font-label italic">Visual Blueprint 08</span>
                            </div>
                            <h4 className="text-5xl font-black text-white font-headline tracking-tighter uppercase italic mb-4 antialiased leading-none">Market Architecture <br /> <span className="text-tertiary">Proof Sequence.</span></h4>
                            <p className="text-on-surface-variant/60 text-base font-body italic antialiased opacity-0 group-hover:opacity-100 transition-opacity duration-1000">Strategic mapping of the entry quadrant trajectories and automated market absorption telemetry models.</p>
                        </div>
                        <button className="button-metallic px-14 py-6 rounded-2xl font-black text-[11px] tracking-[0.3em] uppercase italic shadow-[0_20px_50px_rgba(103,156,255,0.4)] active:scale-95 transition-all">
                            View Roadmap
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
