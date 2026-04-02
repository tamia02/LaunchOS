"use client"

import { useState, useEffect } from 'react'
import { Card } from "@/components/ui/Card"
import { Tag as Badge } from '@/components/ui/Tag'
import { Shuffle, ArrowRight, BrainCircuit, Rocket, CheckCircle2, TrendingUp, FlaskConical, Target, Clock, ShieldAlert } from 'lucide-react'

// Render pill color based on value
export const renderPill = (label: string, value: string) => {
    let colorClass = "bg-zinc-800 text-zinc-300" // default
    const lowerValue = value?.toLowerCase() || ""

    if (lowerValue.includes("high") && !lowerValue.includes("risk")) colorClass = "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
    if (lowerValue.includes("medium")) colorClass = "bg-amber-500/10 text-amber-400 border border-amber-500/20"
    if (lowerValue.includes("low") && !lowerValue.includes("risk")) colorClass = "bg-rose-500/10 text-rose-400 border border-rose-500/20"
    
    // Reverse logic for risk/effort
    if (label.includes("Risk") || label.includes("Effort")) {
        if (lowerValue.includes("low")) colorClass = "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
        if (lowerValue.includes("high")) colorClass = "bg-rose-500/10 text-rose-400 border border-rose-500/20"
    }

    return (
        <div className={`flex flex-col gap-1 p-2 rounded-lg ${colorClass}`}>
            <span className="text-[10px] uppercase font-bold tracking-widest opacity-70">{label}</span>
            <span className="text-xs font-semibold">{value}</span>
        </div>
    )
}

export function PivotEngine({ data }: { data: any }) {
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])

    if (!isMounted) return <div className="h-64 flex items-center justify-center text-zinc-500">Loading UI...</div>

    return (
        <div className="space-y-6">
            {/* Original Idea Verdict Card */}
            <Card className="bg-zinc-900/50 border-zinc-800 p-6 flex flex-col md:flex-row gap-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
                    <Shuffle className="w-48 h-48" />
                </div>
                <div className="flex-1 z-10">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 rounded-lg bg-indigo-500/20 text-indigo-400">
                            <BrainCircuit className="w-5 h-5" />
                        </div>
                        <h2 className="text-xl font-bold text-white tracking-wide">Original Idea Assessment</h2>
                    </div>
                    <p className="text-zinc-300 leading-relaxed max-w-2xl">{data.original_idea_assessment}</p>
                </div>
                <div className="flex flex-col items-start md:items-end justify-center z-10 border-t md:border-t-0 md:border-l border-zinc-800 pt-4 md:pt-0 md:pl-6 min-w-[200px]">
                    <div className="text-xs text-zinc-500 uppercase tracking-widest font-bold mb-2">Verdict</div>
                    <div className={`text-lg font-black tracking-wide ${
                        data.original_idea_verdict?.toLowerCase().includes("strong") ? "text-emerald-400" : "text-amber-400"
                    }`}>
                        {data.original_idea_verdict}
                    </div>
                </div>
            </Card>

            {/* Pivot Options Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {data.pivots?.map((pivot: any, idx: number) => {
                    const isRecommended = pivot.pivot_number === data.recommended_pivot
                    
                    return (
                        <Card key={idx} className={`relative flex flex-col p-6 transition-all duration-300 ${isRecommended ? 'bg-indigo-950/20 border-indigo-500/50 shadow-[0_0_30px_rgba(99,102,241,0.1)]' : 'bg-zinc-900/50 border-zinc-800'}`}>
                            {isRecommended && (
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-indigo-500 text-white text-[10px] font-black tracking-widest uppercase rounded-full flex items-center gap-1 shadow-lg">
                                    <Target className="w-3 h-3" /> Recommended
                                </div>
                            )}

                            <div className="flex justify-between items-start mb-4">
                                <Badge className="bg-zinc-950 text-indigo-400 border-indigo-500/30 text-[10px] uppercase tracking-wider">
                                    {pivot.pivot_type} Pivot
                                </Badge>
                                <span className="text-4xl font-black text-zinc-800/50">0{pivot.pivot_number}</span>
                            </div>

                            <h3 className="text-xl font-bold text-white mb-1">{pivot.pivot_name}</h3>
                            <p className="text-xs text-indigo-400 font-medium mb-4">{pivot.one_liner}</p>
                            
                            <p className="text-sm text-zinc-400 leading-relaxed mb-6 border-l-2 border-zinc-800 pl-3">
                                {pivot.description}
                            </p>

                            <div className="grid grid-cols-2 gap-2 mb-6">
                                {renderPill("Revenue Potential", pivot.revenue_potential)}
                                {renderPill("Risk Level", pivot.risk_level)}
                                {renderPill("Time to Rev", pivot.time_to_first_revenue)}
                                {renderPill("Effort", pivot.effort_to_build)}
                            </div>

                            <div className="mt-auto pt-4 border-t border-zinc-800 space-y-4">
                                <div>
                                    <div className="text-[10px] font-bold tracking-widest uppercase text-emerald-400 mb-1 flex items-center gap-1">
                                        <TrendingUp className="w-3 h-3" /> Why Stronger
                                    </div>
                                    <p className="text-xs text-zinc-300 leading-relaxed">{pivot.why_stronger}</p>
                                </div>
                                <div className="bg-zinc-950 rounded-lg p-3 border border-zinc-800/50">
                                    <div className="text-[10px] font-bold tracking-widest uppercase text-cyan-400 mb-1 flex items-center gap-1">
                                        <ShieldAlert className="w-3 h-3" /> Real World Ref
                                    </div>
                                    <p className="text-xs text-zinc-300 font-medium">{pivot.real_world_example}</p>
                                </div>
                            </div>
                        </Card>
                    )
                })}
            </div>

            {/* Validation Plan for Recommended Pivot */}
            <Card className="bg-black/40 border-indigo-500/30 p-8 backdrop-blur-md relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-transparent to-transparent"></div>
                <div className="relative z-10">
                    <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                        <Rocket className="w-5 h-5 text-indigo-400" /> Wait, why Pivot #{data.recommended_pivot}?
                    </h3>
                    <p className="text-zinc-300 text-sm leading-relaxed mb-6 max-w-3xl">
                        {data.recommended_reason}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-indigo-500/10 rounded-xl p-5 border border-indigo-500/20">
                            <div className="text-[10px] font-bold tracking-widest uppercase text-indigo-400 mb-2 flex items-center gap-1">
                                <ArrowRight className="w-3 h-3" /> Vs Original Idea
                            </div>
                            <p className="text-sm text-indigo-100/90 font-medium">{data.pivot_vs_original}</p>
                        </div>
                        
                        <div className="bg-emerald-500/10 rounded-xl p-5 border border-emerald-500/20">
                            <div className="text-[10px] font-bold tracking-widest uppercase text-emerald-400 mb-2 flex items-center gap-1">
                                <FlaskConical className="w-3 h-3" /> 48-Hour Validation Test
                            </div>
                            <p className="text-sm text-emerald-100/90 font-medium">{data.validation_test}</p>
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    )
}
