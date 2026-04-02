'use client'

import React, { useState, useEffect } from 'react'
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip } from 'recharts'
import { cn } from '@/lib/utils'

interface MVPData {
    core_feature: {
        name: string
        what_it_does: string
        why_first: string
        user_action: string
        user_output: string
    }
    build_now: Array<{
        feature_name: string
        why_essential: string
        build_days: number
        depends_on: string
    }>
    cut_for_now: Array<{
        feature_name: string
        why_cut: string
        when_to_add: string
    }>
    tech_stack: {
        [key: string]: { tool: string, why: string, free_tier?: string, monthly_cost_at_scale?: string, cost_per_call?: string, difficulty: string } | string
    }
    build_timeline: Array<{
        week: number
        title: string
        days: Array<{ day_range: string, task: string }>
    }>
    first_paying_customer_path: Array<{
        step: number
        action: string
        result: string
    }>
    complexity_score: {
        technical: number
        integration: number
        design: number
        data: number
        overall: number
        build_time_solo: string
        build_time_team_of_2: string
    }
    common_mistakes: string[]
}

interface MVPEngineProps {
    data: MVPData
}

export function MVPEngine({ data }: MVPEngineProps) {
    const [openWeek, setOpenWeek] = useState<number>(1)
    const [isMounted, setIsMounted] = useState(false)
    useEffect(() => { setIsMounted(true) }, [])

    if (!data) return null

    const techCategories = ['frontend', 'backend', 'database', 'ai_layer', 'payments', 'email', 'deployment', 'analytics']
    
    // Format Radar Data
    const radarData = [
        { subject: 'Technical', A: data.complexity_score?.technical || 0, fullMark: 10 },
        { subject: 'Integration', A: data.complexity_score?.integration || 0, fullMark: 10 },
        { subject: 'Design', A: data.complexity_score?.design || 0, fullMark: 10 },
        { subject: 'Data', A: data.complexity_score?.data || 0, fullMark: 10 },
    ]

    return (
        <div className="space-y-8 pb-10">
            {/* COMPONENT 1: CORE FEATURE HERO */}
            <div className="bg-surface-container-high p-8 rounded-2xl border border-white/5 shadow-2xl relative overflow-hidden glass-edge group">
                <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-all duration-1000" />
                <div className="relative z-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-highest border border-white/5 text-[9px] font-black uppercase tracking-widest text-on-surface-variant mb-4">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
                        The Only Thing That Matters
                    </div>
                    
                    <h2 className="text-4xl md:text-5xl font-black font-headline text-white tracking-tighter mb-4">
                        {data.core_feature?.name}
                    </h2>
                    
                    <p className="text-lg text-white/90 font-body max-w-2xl mb-6">
                        {data.core_feature?.what_it_does}
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-black/20 p-4 rounded-xl border border-white/5">
                            <span className="text-[10px] text-primary font-bold uppercase tracking-widest block mb-1">User Action</span>
                            <span className="text-sm text-white/80">{data.core_feature?.user_action}</span>
                        </div>
                        <div className="bg-black/20 p-4 rounded-xl border border-white/5">
                            <span className="text-[10px] text-tertiary font-bold uppercase tracking-widest block mb-1">User Receives</span>
                            <span className="text-sm text-white/80">{data.core_feature?.user_output}</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* COMPONENT 2: BUILD VS CUT SPLIT PANEL */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-[#121b16] rounded-2xl p-6 border border-green-500/10 shadow-lg">
                    <h3 className="text-[10px] text-green-400 font-black uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
                        <span className="material-symbols-outlined text-sm">construction</span> Build Now (MVP)
                    </h3>
                    <div className="space-y-4">
                        {data.build_now?.map((item, i) => (
                            <div key={i} className="bg-green-500/5 p-4 rounded-lg border border-green-500/10">
                                <div className="flex justify-between items-start mb-2">
                                    <h4 className="text-white font-bold text-sm leading-tight">{item.feature_name}</h4>
                                    <span className="shrink-0 px-2 py-0.5 bg-green-500/20 text-green-400 text-[10px] font-bold rounded">{item.build_days} days</span>
                                </div>
                                <p className="text-white/60 text-[11px] mb-2">{item.why_essential}</p>
                                <p className="text-[9px] text-green-400/60 uppercase tracking-wide font-bold">Dep: {item.depends_on}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-[#1b1212] rounded-2xl p-6 border border-red-500/10 shadow-lg">
                    <h3 className="text-[10px] text-red-400 font-black uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
                        <span className="material-symbols-outlined text-sm">content_cut</span> Cut For Now (Distractions)
                    </h3>
                    <div className="space-y-4">
                        {data.cut_for_now?.map((item, i) => (
                            <div key={i} className="bg-red-500/5 p-4 rounded-lg border border-red-500/10 opacity-80 mix-blend-luminosity hover:mix-blend-normal hover:opacity-100 transition-all">
                                <h4 className="text-white font-bold text-sm leading-tight mb-2 line-through decoration-red-500/50">{item.feature_name}</h4>
                                <p className="text-white/60 text-[11px] mb-2">{item.why_cut}</p>
                                <p className="text-[9px] text-white/40 font-mono bg-black/30 px-2 py-1 rounded inline-block">Add: {item.when_to_add}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* COMPONENT 6 & 7: RADAR & MISTAKES */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="col-span-1 bg-surface-container rounded-2xl p-6 border border-white/5 relative overflow-hidden glass-edge shadow-xl">
                    <h3 className="text-[10px] text-tertiary font-black uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
                        <span className="material-symbols-outlined text-sm">radar</span> Structural Complexity
                    </h3>
                    <div className="h-[220px] -mt-4 w-[110%] -ml-[5%]">
                        {isMounted && (
                            <ResponsiveContainer width="100%" height="100%">
                                <RadarChart cx="50%" cy="50%" outerRadius="65%" data={radarData}>
                                    <PolarGrid stroke="rgba(255,255,255,0.1)" />
                                    <PolarAngleAxis dataKey="subject" tick={{ fill: 'rgba(255,255,255,0.5)', fontSize: 10, fontWeight: 'bold' }} />
                                    <PolarRadiusAxis angle={30} domain={[0, 10]} tick={false} axisLine={false} />
                                    <Tooltip 
                                        contentStyle={{ backgroundColor: '#1e1e24', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px' }}
                                        itemStyle={{ color: '#a3e635' }}
                                    />
                                    <Radar
                                        name="Complexity"
                                        dataKey="A"
                                        stroke="#a3e635"
                                        fill="#a3e635"
                                        fillOpacity={0.4}
                                    />
                                </RadarChart>
                            </ResponsiveContainer>
                        )}
                    </div>
                    <div className="flex justify-between items-center px-2 py-3 bg-surface-container-highest rounded-xl border border-white/5">
                        <div className="text-center w-1/2 border-r border-white/10">
                            <span className="block text-[9px] text-on-surface-variant font-bold uppercase tracking-widest mb-1">Solo Dev</span>
                            <span className="block text-xs font-black text-white">{data.complexity_score?.build_time_solo}</span>
                        </div>
                        <div className="text-center w-1/2">
                            <span className="block text-[9px] text-on-surface-variant font-bold uppercase tracking-widest mb-1">Duo Team</span>
                            <span className="block text-xs font-black text-white">{data.complexity_score?.build_time_team_of_2}</span>
                        </div>
                    </div>
                </div>

                <div className="col-span-2 bg-surface-container-low rounded-2xl p-6 border border-white/5 shadow-xl">
                    <h3 className="text-[10px] text-error font-black uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
                        <span className="material-symbols-outlined text-sm">warning</span> Fatal Founder Mistakes
                    </h3>
                    <div className="space-y-4">
                        {data.common_mistakes?.map((mistake, i) => (
                            <div key={i} className="flex gap-4 items-start p-4 rounded-xl bg-error/5 border border-error/10">
                                <span className="material-symbols-outlined text-error/80 mt-0.5">error</span>
                                <p className="text-white/80 text-sm leading-relaxed">{mistake}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* COMPONENT 3: TECH STACK GRID */}
            <div>
                <h3 className="text-[10px] text-on-surface-variant font-black uppercase tracking-[0.2em] mb-4">Opinionated Tech Stack</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {techCategories.map((cat, i) => {
                        const t = data.tech_stack?.[cat] as any
                        if (!t) return null
                        
                        return (
                            <div key={i} className="bg-surface-container-high p-5 rounded-xl border border-white/5 hover:border-tertiary/30 transition-all group">
                                <div className="flex justify-between items-start mb-3">
                                    <span className="text-[9px] uppercase tracking-widest text-on-surface-variant font-bold">{cat.replace('_', ' ')}</span>
                                    <span className={cn(
                                        "px-1.5 py-0.5 rounded text-[8px] uppercase tracking-wide font-bold",
                                        t.difficulty === 'Easy' ? "bg-green-500/20 text-green-400" :
                                        t.difficulty === 'Medium' ? "bg-yellow-500/20 text-yellow-400" :
                                        "bg-red-500/20 text-red-400"
                                    )}>
                                        {t.difficulty}
                                    </span>
                                </div>
                                <h4 className="text-lg font-black text-white tracking-tight mb-2 group-hover:text-tertiary transition-colors">{t.tool}</h4>
                                <p className="text-[10px] text-white/60 leading-snug mb-3 line-clamp-2">{t.why}</p>
                                
                                <div className="pt-3 border-t border-white/5 flex gap-2">
                                    {t.free_tier && (
                                        <span className="px-2 py-1 bg-surface-container-highest text-[9px] font-medium text-white/80 rounded border border-white/5 shrink-0 whitespace-nowrap overflow-hidden text-ellipsis">
                                            {t.free_tier}
                                        </span>
                                    )}
                                    {(t.cost_per_call || t.monthly_cost_at_scale) && (
                                        <span className="px-2 py-1 bg-tertiary/10 text-[9px] font-medium text-tertiary rounded border border-tertiary/20 shrink-0 whitespace-nowrap overflow-hidden text-ellipsis">
                                            {t.cost_per_call || t.monthly_cost_at_scale}
                                        </span>
                                    )}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

            {/* COMPONENT 5: FIRST PAYING CUSTOMER PATH */}
            <div className="bg-surface-container-high rounded-2xl p-6 border border-white/5 shadow-2xl glass-edge">
                <h3 className="text-[10px] text-primary font-black uppercase tracking-[0.2em] mb-8 flex items-center gap-2">
                    <span className="material-symbols-outlined text-sm">payments</span> Path to First $1
                </h3>
                <div className="relative">
                    <div className="absolute top-0 bottom-0 left-[23px] w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent shadow-[0_0_10px_#a3e635]"></div>
                    <div className="space-y-6">
                        {data.first_paying_customer_path?.map((step, i) => (
                            <div key={i} className="flex gap-6 items-start relative z-10">
                                <div className="w-12 h-12 rounded-full bg-surface-container-highest border-2 border-primary shadow-[0_0_15px_rgba(163,230,53,0.3)] flex items-center justify-center shrink-0">
                                    <span className="text-primary font-black font-headline">{step.step}</span>
                                </div>
                                <div className="pt-2">
                                    <h4 className="text-sm font-bold text-white mb-1.5">{step.action}</h4>
                                    <div className="inline-flex items-center gap-2 bg-primary/10 px-3 py-1.5 rounded text-[11px] text-primary font-medium border border-primary/20">
                                        <span className="material-symbols-outlined text-[13px]">arrow_forward</span>
                                        {step.result}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* COMPONENT 4: BUILD TIMELINE ACCORDION */}
            <div>
                <h3 className="text-[10px] text-on-surface-variant font-black uppercase tracking-[0.2em] mb-4">4-Week Build Sprint</h3>
                <div className="space-y-3">
                    {data.build_timeline?.map((week) => (
                        <div key={week.week} className="bg-surface-container rounded-xl overflow-hidden border border-white/5">
                            <button 
                                onClick={() => setOpenWeek(openWeek === week.week ? 0 : week.week)}
                                className="w-full flex items-center justify-between p-5 hover:bg-surface-container-high transition-colors"
                            >
                                <div className="flex items-center gap-4">
                                    <span className="px-3 py-1 bg-surface-container-highest text-[10px] font-black uppercase tracking-widest text-[#a3e635] rounded border border-white/5">
                                        Week {week.week}
                                    </span>
                                    <span className="text-white font-bold tracking-tight">{week.title}</span>
                                </div>
                                <span className={cn("material-symbols-outlined text-on-surface-variant transition-transform", openWeek === week.week ? 'rotate-180' : '')}>
                                    expand_more
                                </span>
                            </button>
                            <div className={cn("px-5 pb-5 pt-2 grid grid-cols-1 md:grid-cols-2 gap-3", openWeek === week.week ? 'block' : 'hidden')}>
                                {week.days?.map((day, j) => (
                                    <div key={j} className="bg-surface-container-lowest p-4 rounded-lg border border-white/5 flex gap-4">
                                        <span className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant shrink-0 w-16">{day.day_range}</span>
                                        <span className="text-xs text-white/80 leading-relaxed">{day.task}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            
        </div>
    )
}
