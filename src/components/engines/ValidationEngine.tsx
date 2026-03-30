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

    return (
        <div className="max-w-7xl mx-auto space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {/* Header Section */}
            <header className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div className="max-w-2xl">
                    <div className="flex items-center gap-2 mb-3">
                        <span className="px-2 py-0.5 rounded bg-surface-container-high text-tertiary text-[10px] font-bold tracking-widest uppercase font-headline">Project Analysis</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-tertiary animate-pulse"></span>
                        <span className="text-on-surface-variant text-xs font-semibold">Engine Result Verified</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-extrabold font-headline tracking-tight text-on-surface mb-4">Project Validation</h1>
                    <p className="text-on-surface-variant text-lg max-w-xl font-light leading-relaxed">
                        {data.verdict_reason}
                    </p>
                </div>
                <div className="relative group">
                    <div className={cn(
                        "absolute -inset-1 rounded-xl blur-xl transition-all duration-500",
                        isBuild ? "bg-tertiary/20 group-hover:bg-tertiary/30" : "bg-error/20 group-hover:bg-error/30"
                    )}></div>
                    <div className={cn(
                        "relative px-12 py-6 rounded-xl border flex flex-col items-center justify-center shadow-2xl",
                        isBuild
                            ? "bg-surface-container-highest border-tertiary/30"
                            : "bg-surface-container-highest border-error/30"
                    )}>
                        <span className={cn(
                            "text-[10px] font-bold tracking-[0.2em] uppercase mb-1 font-headline",
                            isBuild ? "text-tertiary" : "text-error"
                        )}>Final Decision</span>
                        <span className="text-3xl font-black text-on-surface font-headline tracking-tighter">
                            {isBuild ? 'BUILD' : 'PAUSE'}
                        </span>
                    </div>
                </div>
            </header>

            {/* Bento Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                {/* Idea Score Main Card */}
                <div className="md:col-span-8 bg-surface-container-low rounded-2xl overflow-hidden border border-outline-variant/10 relative p-8">
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-surface-bright/10 to-transparent pointer-events-none"></div>
                    <div className="flex justify-between items-start mb-12">
                        <div>
                            <h3 className="text-on-surface-variant text-sm font-bold uppercase tracking-widest font-headline mb-2">Confidence Score</h3>
                            <p className="text-on-surface text-xs font-medium opacity-60">Composite metric of feasibility and demand.</p>
                        </div>
                        <div className="text-right">
                            <span className="text-6xl font-black font-headline text-on-surface tracking-tighter">
                                {data.pain_score * 10 - 2}
                            </span>
                            <span className="text-on-surface-variant text-xl font-bold">/100</span>
                        </div>
                    </div>
                    <div className="space-y-6">
                        <div className="w-full bg-surface-container-lowest h-2.5 rounded-full overflow-hidden border border-outline-variant/5">
                            <div
                                className="bg-gradient-to-r from-tertiary-dim to-tertiary h-full transition-all duration-1000 ease-out shadow-[0_0_15px_rgba(103,156,255,0.4)]"
                                style={{ width: `${data.pain_score * 10 - 2}%` }}
                            ></div>
                        </div>
                        <div className="grid grid-cols-3 gap-4 pt-4 text-center md:text-left">
                            <div className="p-4 rounded-xl bg-surface-container/50 border border-outline-variant/10">
                                <p className="text-[10px] text-on-surface-variant font-bold uppercase mb-1">Market Fit</p>
                                <p className="text-xl font-bold font-headline text-on-surface">94%</p>
                            </div>
                            <div className="p-4 rounded-xl bg-surface-container/50 border border-outline-variant/10">
                                <p className="text-[10px] text-on-surface-variant font-bold uppercase mb-1">Moat Potential</p>
                                <p className="text-xl font-bold font-headline text-on-surface">68%</p>
                            </div>
                            <div className="p-4 rounded-xl bg-surface-container/50 border border-outline-variant/10">
                                <p className="text-[10px] text-on-surface-variant font-bold uppercase mb-1">Paying Market</p>
                                <p className="text-xl font-bold font-headline text-tertiary">{data.is_paying_market ? 'High' : 'Low'}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Pain Score Card */}
                <div className="md:col-span-4 bg-surface-container rounded-2xl p-8 flex flex-col justify-between border border-outline-variant/10 relative overflow-hidden group">
                    <div className="absolute top-0 left-0 w-full h-1 bg-error shadow-[0_0_20px_rgba(238,125,119,0.5)]"></div>
                    <div>
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="text-on-surface-variant text-sm font-bold uppercase tracking-widest font-headline">Pain Score</h3>
                            <AlertTriangle className="text-error w-5 h-5 fill-error/20" />
                        </div>
                        <div className="mb-2">
                            <span className="text-4xl font-black font-headline text-on-surface">CRITICAL</span>
                        </div>
                        <p className="text-on-surface-variant text-sm font-medium leading-relaxed italic">
                            Pain Factor: {data.pain_score}/10
                        </p>
                    </div>
                    <div className="mt-8 flex items-center gap-3 text-error text-xs font-bold uppercase tracking-wider">
                        <span className="w-2 h-2 rounded-full bg-error animate-pulse"></span>
                        High Stakes Signal
                    </div>
                </div>

                {/* Market Size Card */}
                <div className="md:col-span-5 bg-surface-container rounded-2xl p-8 border border-outline-variant/10 flex items-center gap-8 relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="flex-1 z-10">
                        <h3 className="text-on-surface-variant text-sm font-bold uppercase tracking-widest font-headline mb-6">Target Addressable Market</h3>
                        <div className="flex items-baseline gap-2">
                            <span className="text-5xl font-black font-headline text-on-surface tracking-tighter">{data.tam_estimate}</span>
                        </div>
                        <p className="text-on-surface-variant text-sm mt-4 font-medium italic opacity-70">SAM: {data.sam_estimate}</p>
                    </div>
                    <div className="hidden lg:block w-32 h-32 opacity-10 rotate-12 flex-shrink-0 group-hover:rotate-0 transition-transform duration-700">
                        <Globe className="w-full h-full text-primary" />
                    </div>
                </div>

                {/* Key Insights - Latent Demand */}
                <div className="md:col-span-7 bg-surface-container-high/40 backdrop-blur-xl rounded-2xl p-8 border border-outline-variant/15 shadow-inner">
                    <h3 className="text-on-surface-variant text-sm font-bold uppercase tracking-widest font-headline mb-8 flex items-center gap-2">
                        <Brain className="text-tertiary w-4 h-4" />
                        Key Insights: Market Synthesis
                    </h3>
                    <div className="space-y-8">
                        <div className="flex gap-5 group cursor-default">
                            <div className="w-1.5 h-12 bg-tertiary/20 group-hover:bg-tertiary transition-all duration-300 rounded-full flex-shrink-0"></div>
                            <div>
                                <p className="text-on-surface font-bold font-headline mb-1 text-sm uppercase tracking-wide">Strategic Discovery</p>
                                <p className="text-on-surface-variant text-sm leading-relaxed">{data.key_insight}</p>
                            </div>
                        </div>
                        <div className="flex gap-5 group cursor-default">
                            <div className="w-1.5 h-12 bg-outline-variant/20 group-hover:bg-outline-variant transition-all duration-300 rounded-full flex-shrink-0"></div>
                            <div>
                                <p className="text-on-surface font-bold font-headline mb-1 text-sm uppercase tracking-wide">Validation Questions</p>
                                <p className="text-on-surface-variant text-sm leading-relaxed truncate max-w-md">{data.validation_questions[0]}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Additional Insight Cards */}
                <div className="md:col-span-12 lg:col-span-4 bg-surface-container-high rounded-2xl p-8 border border-outline-variant/10 shadow-xl">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 rounded-lg bg-surface-bright flex items-center justify-center border border-outline-variant/20 shadow-inner">
                            <Timer className="text-tertiary w-6 h-6" />
                        </div>
                        <div>
                            <h4 className="text-on-surface font-bold font-headline">Time-to-Value</h4>
                            <p className="text-[10px] text-on-surface-variant font-black uppercase tracking-[0.2em]">Expected: 14 Days</p>
                        </div>
                    </div>
                    <p className="text-sm text-on-surface-variant leading-relaxed mb-8 font-medium">
                        Initial feedback signal suggests high resonance with the proposed feature-set and rapid "Aha!" moment.
                    </p>
                    <div className="flex -space-x-3">
                        {[1, 2, 3, 4].map(idx => (
                            <div key={idx} className={cn(
                                "w-9 h-9 rounded-full border-2 border-surface-container-high p-1 bg-surface-container flex items-center justify-center",
                                idx === 4 ? "bg-tertiary text-on-tertiary border-tertiary" : ""
                            )}>
                                {idx === 4 ? <span className="text-[10px] font-bold">+12</span> : <div className="w-full h-full rounded-full bg-surface-bright/30" />}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Proof Card */}
                <div className="md:col-span-12 lg:col-span-8 h-[240px] rounded-2xl overflow-hidden relative border border-outline-variant/10 shadow-2xl group">
                    <div className="absolute inset-0 bg-gradient-to-tr from-surface-container-high via-surface-container-high/40 to-transparent z-10" />
                    <div className="absolute inset-0 bg-gradient-to-br from-tertiary/10 to-transparent z-5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                    <div className="absolute bottom-10 left-10 right-10 flex justify-between items-end z-20">
                        <div className="max-w-md">
                            <h4 className="text-2xl font-extrabold text-on-surface font-headline tracking-tighter mb-2">Competitive Landscape</h4>
                            <p className="text-on-surface-variant text-sm font-medium leading-relaxed">Visual mapping of the blue ocean strategy space and identified whitespace.</p>
                        </div>
                        <button className="bg-on-surface/5 backdrop-blur-xl border border-on-surface/10 px-8 py-3 rounded-lg text-on-surface text-xs font-bold hover:bg-on-surface/10 transition-all uppercase tracking-widest">
                            View Blueprint
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
