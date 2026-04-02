'use client'

import React, { useState, useEffect } from 'react'
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts'
import { cn } from '@/lib/utils'

interface ValidationData {
    verdict: string
    verdict_explanation: string
    verdict_confidence: string
    market_size: {
        TAM: { value: string, people: string, explanation: string }
        SAM: { value: string, people: string, explanation: string }
        SOM: { value: string, people: string, explanation: string }
    }
    demand_signals: Array<{
        signal_type: string
        metric: string
        explanation: string
    }>
    competitors: Array<{
        name: string
        website: string
        what_they_do: string
        estimated_revenue: string
        pricing: string
        biggest_weakness: string
    }>
    keyword_data: Array<{
        keyword: string
        monthly_searches: string
        trend: string
        cpc_usd: string
    }>
    market_timing: {
        verdict: string
        reasoning: string
        key_trend: string
    }
    validation_score: {
        market_size: number
        demand_signals: number
        competitor_proof: number
        search_intent: number
        timing: number
        total: number
        interpretation: string
    }
}

interface ValidationEngineProps {
    data: ValidationData
}

export function ValidationEngine({ data }: ValidationEngineProps) {
    const [isMounted, setIsMounted] = useState(false)
    useEffect(() => { setIsMounted(true) }, [])

    if (!data) return null

    // Verdict Coloring Logic
    let heroBg = "bg-surface-container-high"
    let heroIcon = "help"
    let heroColor = "text-white"
    
    if (data.verdict === 'GO') {
        heroBg = "bg-green-500/20 border-green-500/30"
        heroIcon = "check_circle"
        heroColor = "text-green-400"
    } else if (data.verdict === 'WAIT') {
        heroBg = "bg-yellow-500/20 border-yellow-500/30"
        heroIcon = "pause_circle"
        heroColor = "text-yellow-400"
    } else if (data.verdict === 'PIVOT') {
        heroBg = "bg-red-500/20 border-red-500/30"
        heroIcon = "turn_right"
        heroColor = "text-red-400"
    }

    const keywordChartData = data.keyword_data?.map(k => ({
        name: k.keyword,
        searches: parseInt(k.monthly_searches.replace(/,/g, ''), 10) || 0,
        trend: k.trend,
        cpc: k.cpc_usd
    })) || []

    return (
        <div className="space-y-8 pb-10">
            {/* COMPONENT 1: VERDICT HERO BANNER */}
            <div className={cn("p-8 rounded-2xl border flex flex-col md:flex-row items-center gap-6 shadow-xl relative overflow-hidden", heroBg)}>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12 translate-x-[-150%] animate-[shimmer_3s_infinite]" />
                <div className="flex-shrink-0 relative z-10">
                    <span className={cn("material-symbols-outlined text-6xl drop-shadow-[0_0_15px_currentColor]", heroColor)} style={{ fontVariationSettings: "'FILL' 1" }}>{heroIcon}</span>
                </div>
                <div className="flex-1 text-center md:text-left relative z-10">
                    <div className="flex items-center gap-3 justify-center md:justify-start mb-2">
                        <h2 className={cn("text-4xl font-black font-headline tracking-tighter uppercase", heroColor)}>{data.verdict}</h2>
                        <span className="px-2 py-0.5 rounded text-[9px] font-black tracking-widest uppercase bg-black/30 text-white/70 border border-white/10">
                            Confidence: {data.verdict_confidence}
                        </span>
                    </div>
                    <p className="text-white/90 font-body text-base lg:text-lg leading-relaxed max-w-3xl">
                        {data.verdict_explanation}
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* COMPONENT 2: MARKET SIZE VISUAL */}
                <div className="bg-surface-container-low rounded-2xl p-6 border border-white/5 shadow-2xl glass-edge flex flex-col">
                    <h3 className="text-[10px] text-tertiary font-black uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
                        <span className="material-symbols-outlined text-sm">pie_chart</span> Market Composition
                    </h3>
                    <div className="flex-1 flex flex-col justify-center space-y-4">
                        {[
                            { label: 'TAM', data: data.market_size?.TAM, color: 'bg-surface-container-highest', width: '100%' },
                            { label: 'SAM', data: data.market_size?.SAM, color: 'bg-surface-container-high', width: '70%' },
                            { label: 'SOM', data: data.market_size?.SOM, color: 'bg-tertiary', width: '40%' }
                        ].map((m, i) => (
                            <div key={i} className="relative group">
                                <div className="flex justify-between text-[11px] font-black mb-1 px-1">
                                    <span className={m.label === 'SOM' ? 'text-tertiary' : 'text-on-surface-variant'}>{m.label} · {m.data?.people}</span>
                                    <span className="text-white">{m.data?.value}</span>
                                </div>
                                <div className="h-8 w-full bg-surface-container-lowest rounded-lg overflow-hidden border border-white/5">
                                    <div className={cn("h-full transition-all duration-1000", m.color)} style={{ width: m.width }}></div>
                                </div>
                                <div className="absolute top-full left-0 mt-2 p-3 bg-surface-bright rounded-lg border border-white/10 text-[10px] text-on-surface-variant z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all shadow-xl w-full">
                                    {m.data?.explanation}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* COMPONENT 7: VALIDATION SCORE BREAKDOWN */}
                <div className="bg-surface-container rounded-2xl p-6 border border-white/5 shadow-2xl glass-edge flex flex-col">
                    <div className="flex justify-between items-start mb-6">
                        <h3 className="text-[10px] text-tertiary font-black uppercase tracking-[0.2em] flex items-center gap-2">
                            <span className="material-symbols-outlined text-sm">fact_check</span> Validation Matrix
                        </h3>
                        <div className="text-right">
                            <span className="text-4xl font-black font-headline text-white tracking-tighter">{data.validation_score?.total || 0}</span>
                            <span className="text-on-surface-variant text-sm font-bold opacity-40">/100</span>
                        </div>
                    </div>
                    
                    <div className="space-y-3 mb-6">
                        {[
                            { label: 'Market Size', max: 20, val: data.validation_score?.market_size },
                            { label: 'Demand Signals', max: 20, val: data.validation_score?.demand_signals },
                            { label: 'Competitor Proof', max: 20, val: data.validation_score?.competitor_proof },
                            { label: 'Search Intent', max: 20, val: data.validation_score?.search_intent },
                            { label: 'Timing', max: 20, val: data.validation_score?.timing }
                        ].map((s, i) => {
                            const pct = Math.min(100, Math.max(0, ((s.val || 0) / s.max) * 100))
                            const color = s.val < 10 ? 'bg-red-500' : s.val < 15 ? 'bg-yellow-500' : 'bg-tertiary'
                            return (
                                <div key={i} className="flex items-center gap-4">
                                    <span className="text-[10px] text-on-surface-variant font-bold uppercase w-28 shrink-0">{s.label}</span>
                                    <div className="flex-1 h-3 bg-surface-container-highest rounded-full overflow-hidden">
                                        <div className={cn("h-full transition-all duration-1000", color)} style={{ width: `${pct}%` }}></div>
                                    </div>
                                    <span className="text-[10px] text-white font-black w-8 text-right">{s.val}/{s.max}</span>
                                </div>
                            )
                        })}
                    </div>
                    <div className="mt-auto pt-4 border-t border-white/10">
                        <p className="text-[11px] text-tertiary font-bold tracking-wide">
                            <span className="material-symbols-outlined text-[11px] mr-1 align-middle">insights</span>
                            {data.validation_score?.interpretation}
                        </p>
                    </div>
                </div>
            </div>

            {/* COMPONENT 3: DEMAND SIGNALS ROW */}
            <div>
                <h3 className="text-[10px] text-on-surface-variant font-black uppercase tracking-[0.2em] mb-4">Live Demand Signals</h3>
                <div className="flex overflow-x-auto gap-4 pb-4 no-scrollbar">
                    {data.demand_signals?.map((sig, i) => (
                        <div key={i} className="min-w-[240px] max-w-[280px] shrink-0 bg-surface-container-high/50 p-5 rounded-xl border border-white/5 hover:bg-surface-container-high transition-all group">
                            <div className="flex justify-between items-start mb-3">
                                <span className="px-2 py-0.5 rounded bg-black/40 text-[9px] font-black uppercase tracking-widest text-[#a3e635]">
                                    {sig.signal_type}
                                </span>
                                <span className="material-symbols-outlined text-white/20 group-hover:text-tertiary transition-colors">
                                    {sig.signal_type === 'Reddit' ? 'forum' : sig.signal_type === 'Trends' ? 'trending_up' : sig.signal_type === 'Competitor' ? 'storefront' : sig.signal_type === 'Community' ? 'groups' : 'search'}
                                </span>
                            </div>
                            <h4 className="text-2xl font-black text-white font-headline tracking-tight mb-2">{sig.metric}</h4>
                            <p className="text-[11px] text-on-surface-variant leading-relaxed">{sig.explanation}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* COMPONENT 5: KEYWORD DEMAND CHART */}
                <div className="lg:col-span-2 bg-surface-container rounded-2xl p-6 border border-white/5 shadow-2xl glass-edge flex flex-col">
                    <div className="flex justify-between items-end mb-6">
                        <h3 className="text-[10px] text-tertiary font-black uppercase tracking-[0.2em] flex items-center gap-2">
                            <span className="material-symbols-outlined text-sm">bar_chart</span> Search Intent
                        </h3>
                        <span className="text-[9px] text-on-surface-variant uppercase tracking-widest font-bold bg-surface-container-highest px-2 py-1 rounded">People are actively searching</span>
                    </div>
                    
                    <div className="h-[200px] w-full">
                        {isMounted && (
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={keywordChartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                                    <XAxis dataKey="name" tick={{ fontSize: 9, fill: '#80828d' }} axisLine={false} tickLine={false} />
                                    <YAxis tick={{ fontSize: 9, fill: '#80828d' }} axisLine={false} tickLine={false} />
                                    <Tooltip 
                                        cursor={{ fill: 'rgba(255,255,255,0.05)' }}
                                        content={({ active, payload }) => {
                                            if (active && payload && payload.length) {
                                                const d = payload[0].payload;
                                                return (
                                                    <div className="bg-surface-bright border border-white/10 p-3 rounded-lg shadow-2xl">
                                                        <p className="text-white text-xs font-bold mb-1">"{d.name}"</p>
                                                        <p className="text-tertiary text-xs font-black">{d.searches} mo/searches</p>
                                                        <div className="flex gap-2 mt-2">
                                                            <span className="px-1.5 py-0.5 rounded bg-black/30 text-[9px] uppercase font-bold text-on-surface-variant">CPC: {d.cpc}</span>
                                                            <span className="px-1.5 py-0.5 rounded bg-black/30 text-[9px] uppercase font-bold text-on-surface-variant flex items-center gap-1">
                                                                {d.trend === 'up' ? '↗' : d.trend === 'down' ? '↘' : '→'} {d.trend}
                                                            </span>
                                                        </div>
                                                    </div>
                                                )
                                            }
                                            return null;
                                        }}
                                    />
                                    <Bar dataKey="searches" radius={[4, 4, 0, 0]}>
                                        {keywordChartData.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={entry.trend === 'up' ? '#a3e635' : '#45474f'} />
                                        ))}
                                    </Bar>
                                </BarChart>
                            </ResponsiveContainer>
                        )}
                    </div>
                </div>

                {/* COMPONENT 6: TIMING INDICATOR */}
                <div className="bg-surface-container rounded-2xl p-6 border border-white/5 shadow-2xl glass-edge flex flex-col relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-tertiary/5 rounded-full blur-3xl" />
                    <h3 className="text-[10px] text-tertiary font-black uppercase tracking-[0.2em] mb-6 flex items-center gap-2 relative z-10">
                        <span className="material-symbols-outlined text-sm">schedule</span> Timing Analysis
                    </h3>
                    
                    <div className="relative z-10 flex-1 flex flex-col justify-center">
                        <div className="mb-4 inline-flex">
                            <span className={cn(
                                "px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border shadow-[0_0_15px_rgba(0,0,0,0.5)]",
                                data.market_timing?.verdict === 'Right Time' ? "bg-tertiary/20 text-tertiary border-tertiary/40" :
                                data.market_timing?.verdict === 'Too Early' ? "bg-yellow-500/20 text-yellow-400 border-yellow-500/40" :
                                "bg-red-500/20 text-red-400 border-red-500/40"
                            )}>
                                {data.market_timing?.verdict}
                            </span>
                        </div>
                        <p className="text-[13px] text-white/90 leading-relaxed font-body mb-6">
                            {data.market_timing?.reasoning}
                        </p>
                        <div className="p-4 rounded-xl bg-black/20 border border-t-tertiary/30 border-x-white/5 border-b-white/5">
                            <span className="text-[8px] uppercase tracking-widest text-on-surface-variant font-bold mb-1 block">Catalyst Trend</span>
                            <p className="text-[11px] text-tertiary font-bold italic">
                                "{data.market_timing?.key_trend}"
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* COMPONENT 4: COMPETITOR TABLE */}
            <div className="bg-surface-container-low rounded-2xl p-6 border border-white/5 shadow-2xl glass-edge">
                <div className="mb-6">
                    <h3 className="text-[10px] text-tertiary font-black uppercase tracking-[0.2em] flex items-center gap-2 mb-1">
                        <span className="material-symbols-outlined text-sm">query_stats</span> Competitor Proof
                    </h3>
                    <p className="text-[11px] text-on-surface-variant font-body">These companies prove people pay for this. Your job is to do it better for a specific niche.</p>
                </div>
                
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse min-w-[800px]">
                        <thead>
                            <tr className="border-b border-white/10 text-[9px] uppercase tracking-widest text-on-surface-variant font-bold">
                                <th className="pb-3 pl-2 font-medium">Company</th>
                                <th className="pb-3 font-medium">What they do</th>
                                <th className="pb-3 font-medium">Est. Revenue</th>
                                <th className="pb-3 font-medium">Pricing</th>
                                <th className="pb-3 pr-2 font-bold text-tertiary">Your Opening (Weakness)</th>
                            </tr>
                        </thead>
                        <tbody className="text-[11px] text-white/80">
                            {data.competitors?.map((comp, i) => (
                                <tr key={i} className="border-b border-white/5 hover:bg-surface-container-high/30 transition-colors">
                                    <td className="py-4 pl-2 font-bold text-white">
                                        <div className="flex flex-col">
                                            <span>{comp.name}</span>
                                            <a href={`https://${comp.website}`} target="_blank" rel="noopener noreferrer" className="text-[9px] text-on-surface-variant hover:text-tertiary transition-colors">{comp.website}</a>
                                        </div>
                                    </td>
                                    <td className="py-4 pr-4 max-w-[200px]">{comp.what_they_do}</td>
                                    <td className="py-4 font-mono text-tertiary font-bold text-[10px]">{comp.estimated_revenue}</td>
                                    <td className="py-4 bg-surface-container-lowest/30 px-2 rounded font-mono text-[9px]">{comp.pricing}</td>
                                    <td className="py-4 pr-2 pl-4 max-w-[250px] relative">
                                        <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-tertiary/50 to-transparent"></div>
                                        <span className="text-white font-medium">{comp.biggest_weakness}</span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
