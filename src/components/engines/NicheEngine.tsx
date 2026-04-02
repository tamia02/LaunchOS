'use client'

import React, { useState } from 'react'
import { LineChart, Line, ResponsiveContainer, YAxis, Tooltip } from 'recharts'
import { cn } from '@/lib/utils'

interface NicheData {
    niche_name: string
    niche_description: string
    why_this_niche_first: string
    pain_level: string
    willingness_to_pay: string
    audience_size: string
    audience_profile: {
        age_range: string
        role_or_title: string
        income_range: string
        tech_savviness: string
        current_tools: string[]
        biggest_frustration: string
        dream_outcome: string
    }
    where_they_hang_out: {
        subreddits: string[]
        facebook_groups: string[]
        primary_platform: string
        communities: string[]
        newsletters: string[]
    }
    audience_tags: string[]
    secondary_niches: Array<{
        name: string
        reason: string
        timing: string
        opportunity_level: string
    }>
    immediate_action: string
    confidence_score: number
    confidence_reasoning: string
    reddit_posts?: Array<{
        title: string
        subreddit: string
        upvotes: number
        url: string
    }>
    trends?: Array<{
        date: string
        value: number
    }>
}

export function NicheEngine({ data }: { data: NicheData }) {
    const [copied, setCopied] = useState(false)

    if (!data || Object.keys(data).length < 5) return null

    const handleCopy = () => {
        navigator.clipboard.writeText(data.immediate_action)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    const getPainColor = (level: string) => {
        const l = level?.toLowerCase() || ''
        if (l.includes('critical')) return 'bg-red-500/20 text-red-400 border-red-500/30'
        if (l.includes('high')) return 'bg-orange-500/20 text-orange-400 border-orange-500/30'
        if (l.includes('medium')) return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30'
        return 'bg-green-500/20 text-green-400 border-green-500/30'
    }

    const getTimingColor = (timing: string) => {
        const t = timing?.toLowerCase() || ''
        if (t.includes('now')) return 'bg-green-500/20 text-green-400'
        if (t.includes('later')) return 'bg-yellow-500/20 text-yellow-400'
        return 'bg-surface-container-high text-on-surface-variant'
    }

    // Determine trend direction for chart color
    let trendColor = '#679cff' // default blue
    if (data.trends && data.trends.length > 1) {
        const first = data.trends[0].value
        const last = data.trends[data.trends.length - 1].value
        if (last > first * 1.2) trendColor = '#34d399' // green (growing)
        else if (last < first * 0.8) trendColor = '#f87171' // red (declining)
    }

    return (
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-8 duration-700">
            {/* HERO CARD & TRENDS GRID */}
            <div className="grid grid-cols-12 gap-6">
                
                {/* Main Hero Card (Component 1) */}
                <div className="col-span-12 lg:col-span-8 bg-surface-container-low rounded-xl p-6 border border-white/5 shadow-lg relative overflow-hidden flex flex-col justify-between">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-tertiary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
                    
                    <div>
                        <div className="flex flex-wrap items-center gap-3 mb-4">
                            <h2 className="text-2xl md:text-3xl font-headline font-black text-white tracking-tight">
                                {data.niche_name || "Primary Target Engine"}
                            </h2>
                            <span className={cn("px-2.5 py-1 text-[9px] font-black uppercase tracking-widest rounded-full border", getPainColor(data.pain_level))}>
                                PAIN: {data.pain_level}
                            </span>
                            <span className="px-2.5 py-1 text-[9px] font-black uppercase tracking-widest rounded-full border border-tertiary/30 bg-tertiary/10 text-tertiary">
                                WTP: {data.willingness_to_pay}
                            </span>
                        </div>

                        <p className="text-[14px] text-on-surface-variant leading-relaxed max-w-2xl mb-6">
                            {data.niche_description}
                        </p>
                        
                        <div className="pl-4 border-l-2 border-tertiary/50 italic">
                            <p className="text-[13px] text-white/90">"{data.why_this_niche_first}"</p>
                        </div>
                    </div>

                    <div className="mt-8 flex items-center justify-between border-t border-white/5 pt-5">
                        <div className="flex flex-col">
                            <span className="text-[9px] font-black uppercase tracking-widest text-on-surface-variant mb-1">
                                Market Reach Segment
                            </span>
                            <span className="text-lg font-headline font-bold text-white">
                                {data.audience_size}
                            </span>
                        </div>
                        <div className="flex items-center gap-3 bg-surface-container py-2 px-4 rounded-lg border border-white/5">
                            <div className="flex flex-col text-right">
                                <span className="text-[9px] font-black uppercase tracking-widest text-on-surface-variant leading-none mb-1">
                                    Confidence
                                </span>
                                <span className="text-[10px] text-tertiary line-clamp-1 max-w-[120px]" title={data.confidence_reasoning}>
                                    {data.confidence_reasoning}
                                </span>
                            </div>
                            <span className="text-3xl font-headline font-black text-white">
                                {data.confidence_score}
                            </span>
                        </div>
                    </div>
                </div>

                {/* Trends Mini Chart (Component 5) */}
                <div className="col-span-12 lg:col-span-4 bg-surface-container-low rounded-xl p-5 border border-white/5 shadow-lg flex flex-col">
                    <h3 className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant mb-4">
                        Search Interest — Last 12 Months
                    </h3>
                    <div className="flex-grow w-full h-[140px] mt-auto">
                        {data.trends && data.trends.length > 0 ? (
                            <ResponsiveContainer width="100%" height="100%">
                                <LineChart data={data.trends}>
                                    <Line 
                                        type="monotone" 
                                        dataKey="value" 
                                        stroke={trendColor} 
                                        strokeWidth={2} 
                                        dot={false}
                                        isAnimationActive={true}
                                    />
                                    <Tooltip 
                                        contentStyle={{ backgroundColor: '#1E1E1E', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', fontSize: '12px' }}
                                        labelStyle={{ color: '#A0A0A0' }}
                                    />
                                    <YAxis hide domain={['dataMin - 10', 'dataMax + 10']} />
                                </LineChart>
                            </ResponsiveContainer>
                        ) : (
                            <div className="w-full h-full flex flex-col items-center justify-center border border-dashed border-white/10 rounded-lg">
                                <span className="material-symbols-outlined text-on-surface-variant mb-2 opacity-50">show_chart</span>
                                <span className="text-[10px] text-on-surface-variant uppercase tracking-widest">No Trend Data</span>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* AUDIENCE PROFILE & HANG OUT GRID */}
            <div className="grid grid-cols-12 gap-6">
                
                {/* Audience Profile Card (Component 2) */}
                <div className="col-span-12 lg:col-span-6 bg-surface-container-low rounded-xl p-6 border border-white/5 shadow-lg">
                    <h3 className="text-sm font-headline font-black text-white uppercase tracking-widest mb-6 flex items-center gap-2">
                        <span className="material-symbols-outlined text-tertiary text-lg">person_search</span>
                        Audience Profile
                    </h3>
                    
                    <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="bg-surface-container p-3 rounded-lg">
                            <span className="text-[9px] font-black uppercase tracking-widest text-on-surface-variant block mb-1">Role / Title</span>
                            <span className="text-sm font-bold text-white line-clamp-1">{data.audience_profile?.role_or_title}</span>
                        </div>
                        <div className="bg-surface-container p-3 rounded-lg">
                            <span className="text-[9px] font-black uppercase tracking-widest text-on-surface-variant block mb-1">Age Range</span>
                            <span className="text-sm font-bold text-white">{data.audience_profile?.age_range}</span>
                        </div>
                        <div className="bg-surface-container p-3 rounded-lg">
                            <span className="text-[9px] font-black uppercase tracking-widest text-on-surface-variant block mb-1">Income</span>
                            <span className="text-sm font-bold text-white">{data.audience_profile?.income_range}</span>
                        </div>
                        <div className="bg-surface-container p-3 rounded-lg">
                            <span className="text-[9px] font-black uppercase tracking-widest text-on-surface-variant block mb-1">Tech Savviness</span>
                            <span className="text-sm font-bold text-white">{data.audience_profile?.tech_savviness}</span>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <div className="bg-red-500/10 border border-red-500/20 p-4 rounded-lg relative overflow-hidden">
                            <span className="text-[9px] font-black uppercase tracking-widest text-red-400 block mb-1 relative z-10">Biggest Frustration</span>
                            <p className="text-[13px] text-white/90 relative z-10">&quot;{data.audience_profile?.biggest_frustration}&quot;</p>
                        </div>
                        <div className="bg-green-500/10 border border-green-500/20 p-4 rounded-lg relative overflow-hidden">
                            <span className="text-[9px] font-black uppercase tracking-widest text-green-400 block mb-1 relative z-10">Dream Outcome</span>
                            <p className="text-[13px] text-white/90 relative z-10">&quot;{data.audience_profile?.dream_outcome}&quot;</p>
                        </div>
                    </div>
                </div>

                {/* Where They Hang Out Card (Component 3) */}
                <div className="col-span-12 lg:col-span-6 bg-surface-container-low rounded-xl p-6 border border-white/5 shadow-lg flex flex-col">
                    <h3 className="text-sm font-headline font-black text-white uppercase tracking-widest mb-5 flex items-center gap-2">
                        <span className="material-symbols-outlined text-tertiary text-lg">public</span>
                        Where They Hang Out
                    </h3>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                        {data.where_they_hang_out?.subreddits?.map((sr, i) => (
                            <span key={i} className="px-3 py-1.5 bg-[#FF4500]/10 text-[#FF4500] text-[11px] font-bold rounded-lg border border-[#FF4500]/20 flex items-center gap-1.5 flex-wrap">
                                r/{sr.replace('r/', '')}
                            </span>
                        ))}
                        {data.where_they_hang_out?.primary_platform && (
                            <span className="px-3 py-1.5 bg-blue-500/10 text-blue-400 text-[11px] font-bold rounded-lg border border-blue-500/20">
                                {data.where_they_hang_out.primary_platform}
                            </span>
                        )}
                        {data.where_they_hang_out?.facebook_groups?.slice(0, 1).map((fg, i) => (
                            <span key={i} className="px-3 py-1.5 bg-[#1877F2]/10 text-[#1877F2] text-[11px] font-bold rounded-lg border border-[#1877F2]/20 line-clamp-1 max-w-[200px]">
                                FB: {fg}
                            </span>
                        ))}
                    </div>

                    <div className="mt-auto bg-surface-container p-4 rounded-xl border border-white/5">
                        <span className="text-[10px] font-black uppercase tracking-widest text-tertiary block mb-3">
                            {data.reddit_posts && data.reddit_posts.length > 0 ? "Real people talking right now" : "Key Communities"}
                        </span>
                        
                        <div className="space-y-3">
                            {data.reddit_posts && data.reddit_posts.length > 0 ? (
                                data.reddit_posts.slice(0, 3).map((post, i) => (
                                    <a key={i} href={post.url} target="_blank" rel="noreferrer" className="block group">
                                        <div className="flex gap-3 items-start">
                                            <div className="flex flex-col items-center min-w-[32px] pt-0.5">
                                                <span className="material-symbols-outlined text-[14px] text-on-surface-variant group-hover:text-[#FF4500] transition-colors">arrow_upward</span>
                                                <span className="text-[10px] font-bold text-on-surface-variant">{post.upvotes}</span>
                                            </div>
                                            <div>
                                                <p className="text-[12px] text-white/90 font-medium line-clamp-2 leading-snug group-hover:text-tertiary transition-colors mb-1">
                                                    {post.title}
                                                </p>
                                                <span className="text-[9px] text-on-surface-variant font-bold">{post.subreddit}</span>
                                            </div>
                                        </div>
                                    </a>
                                ))
                            ) : (
                                <div className="text-[12px] text-on-surface-variant opacity-80 space-y-2">
                                    <p>Newsletters: {data.where_they_hang_out?.newsletters?.join(', ')}</p>
                                    <p>Communities: {data.where_they_hang_out?.communities?.join(', ')}</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* AUDIENCE TAGS (Component 4) */}
            <div className="bg-surface-container-low rounded-xl py-4 px-6 border border-white/5 flex flex-wrap gap-2 items-center">
                <span className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant mr-3">Tags:</span>
                {data.audience_tags?.map((tag, i) => (
                    <span key={i} className="px-2.5 py-1 bg-surface-container-high text-white text-[10px] rounded-md font-medium border border-white/5">
                        {tag}
                    </span>
                ))}
            </div>

            {/* SECONDARY NICHES (Component 6) */}
            <div>
                <h3 className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant mb-4 pl-1">
                    Pivot Opportunities (Secondary Niches)
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {data.secondary_niches?.map((niche, i) => (
                        <div key={i} className="bg-surface-container-low p-5 rounded-xl border border-white/5 hover:bg-surface-container transition-colors">
                            <div className="flex justify-between items-start mb-3">
                                <span className={cn("px-2 py-0.5 text-[8px] font-black uppercase tracking-widest rounded-sm", getTimingColor(niche.timing))}>
                                    {niche.timing}
                                </span>
                                <span className="text-[9px] font-bold text-on-surface-variant">Opp: {niche.opportunity_level}</span>
                            </div>
                            <h4 className="font-headline font-bold text-white text-[13px] mb-2">{niche.name}</h4>
                            <p className="text-[11px] text-on-surface-variant leading-relaxed">
                                {niche.reason}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* IMMEDIATE ACTION (Component 7) */}
            <div className="bg-surface-container-high rounded-xl p-6 md:p-8 border-l-4 border-l-tertiary border-y border-r border-white/5 shadow-2xl relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-tertiary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative z-10 flex flex-col md:flex-row gap-6 justify-between items-start md:items-center">
                    <div className="max-w-3xl">
                        <span className="text-[10px] font-black uppercase tracking-widest text-tertiary block mb-2">
                            Your Action for the Next 24 Hours
                        </span>
                        <p className="text-[16px] md:text-[18px] font-medium text-white leading-relaxed">
                            {data.immediate_action}
                        </p>
                    </div>
                    <button 
                        onClick={handleCopy}
                        className={cn(
                            "shrink-0 flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300",
                            copied ? "bg-green-500/20 text-green-400" : "bg-white/5 text-white hover:bg-white/10"
                        )}
                    >
                        <span className="material-symbols-outlined text-[20px]">
                            {copied ? 'check' : 'content_copy'}
                        </span>
                    </button>
                </div>
            </div>
            
        </div>
    )
}
