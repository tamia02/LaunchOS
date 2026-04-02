'use client'

import React, { useState, useEffect } from 'react'
import { cn } from '@/lib/utils'

export interface PricingData {
    startup_type: string
    business_model: string
    market_data_summary: {
        upwork_rate_range: string
        upwork_median: number
        fiverr_entry: number
        fiverr_mid: number
        fiverr_premium: number
        trend_direction: string
        trend_insight: string
    }
    hourly_model: {
        beginner_rate: number
        standard_rate: number
        expert_rate: number
        currency: string
        when_to_use: string
        when_not_to_use: string
        positioning_tip: string
    }
    setup_fee_model: {
        simple_range: { min: number, max: number }
        standard_range: { min: number, max: number }
        complex_range: { min: number, max: number }
        what_to_include: string[]
        when_to_use: string
        negotiation_tip: string
    }
    retainer_model: {
        starter: { price: number, billing: string, includes: string[], hours_per_month: number }
        growth: { price: number, billing: string, includes: string[], hours_per_month: number }
        premium: { price: number, billing: string, includes: string[], hours_per_month: number }
        when_to_use: string
        mrr_projection_6_months: string
    }
    recommended_model: string
    recommended_reason: string
    pricing_psychology: string
    price_anchoring_tip: string
    upgrade_path: string
    red_flags: string[]
    competitor_comparison: string
}

interface PricingEngineProps {
    data: PricingData
}

export function PricingEngine({ data }: PricingEngineProps) {
    const [isMounted, setIsMounted] = useState(false)
    useEffect(() => { setIsMounted(true) }, [])

    if (!data) return null
    if (!isMounted) return <div className="animate-pulse bg-white/5 h-[800px] rounded-2xl"></div>

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {/* Market Data Banner */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                    <p className="text-sm font-medium text-white/50 mb-1 tracking-wide uppercase">Upwork Market</p>
                    <p className="text-3xl font-bold text-white">${data.market_data_summary.upwork_median}<span className="text-xl text-white/50">/hr</span></p>
                    <p className="text-xs text-white/40 mt-2">Range: {data.market_data_summary.upwork_rate_range}</p>
                </div>
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                    <p className="text-sm font-medium text-white/50 mb-1 tracking-wide uppercase">Fiverr Gigs</p>
                    <div className="flex justify-between items-end">
                        <div>
                            <p className="text-xs text-white/40">Entry</p>
                            <p className="text-lg font-bold text-white">${data.market_data_summary.fiverr_entry}</p>
                        </div>
                        <div>
                            <p className="text-xs text-white/40">Mid</p>
                            <p className="text-lg font-bold text-white">${data.market_data_summary.fiverr_mid}</p>
                        </div>
                        <div>
                            <p className="text-xs text-white/40">Pro</p>
                            <p className="text-lg font-bold text-white">${data.market_data_summary.fiverr_premium}</p>
                        </div>
                    </div>
                </div>
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md md:col-span-2">
                    <p className="text-sm font-medium text-white/50 mb-1 tracking-wide uppercase">Market Trend: <span className="text-emerald-400 capitalize">{data.market_data_summary.trend_direction}</span></p>
                    <p className="text-sm text-white/80 leading-relaxed mt-2">{data.market_data_summary.trend_insight}</p>
                </div>
            </div>

            {/* Competitor Comparison */}
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                <div className="flex items-start justify-between">
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-2">ProductHunt Competitor Benchmark</h3>
                        <p className="text-sm text-white/70">{data.competitor_comparison}</p>
                    </div>
                    <div className="h-10 w-10 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                    </div>
                </div>
            </div>

            {/* Pricing Models */}
            <h2 className="text-2xl font-bold text-white mt-12 mb-6">Generated Pricing Models</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                {/* 1. Hourly Model */}
                <div className={cn(
                    "p-6 rounded-3xl border backdrop-blur-md relative overflow-hidden flex flex-col",
                    data.recommended_model === 'hourly' 
                        ? 'bg-blue-500/10 border-blue-500/50 shadow-[0_0_30px_rgba(59,130,246,0.1)]' 
                        : 'bg-white/5 border-white/10'
                )}>
                    {data.recommended_model === 'hourly' && (
                        <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-500" />
                    )}
                    <h3 className="text-xl font-bold text-white mb-6">Consulting (Hourly)</h3>
                    
                    <div className="space-y-4 mb-6 flex-grow">
                        <div className="flex justify-between items-center py-2 border-b border-white/5">
                            <span className="text-sm text-white/60">Beginner Rate</span>
                            <span className="font-semibold text-white">${data.hourly_model.beginner_rate}/hr</span>
                        </div>
                        <div className="flex justify-between items-center py-2 border-b border-white/5">
                            <span className="text-sm text-white/60">Standard Rate</span>
                            <span className="font-semibold text-blue-400">${data.hourly_model.standard_rate}/hr</span>
                        </div>
                        <div className="flex justify-between items-center py-2 border-b border-white/5">
                            <span className="text-sm text-white/60">Expert Rate</span>
                            <span className="font-semibold text-white">${data.hourly_model.expert_rate}/hr</span>
                        </div>
                    </div>
                    
                    <div className="bg-black/20 rounded-xl p-4 mt-auto">
                        <p className="text-xs text-white/70 mb-2"><span className="text-white font-medium">When to skip:</span> {data.hourly_model.when_not_to_use}</p>
                        <p className="text-xs text-emerald-400 italic">💡 {data.hourly_model.positioning_tip}</p>
                    </div>
                </div>

                {/* 2. Setup Fee Model */}
                <div className={cn(
                    "p-6 rounded-3xl border backdrop-blur-md relative overflow-hidden flex flex-col",
                    data.recommended_model === 'setup_fee' 
                        ? 'bg-purple-500/10 border-purple-500/50 shadow-[0_0_30px_rgba(168,85,247,0.1)]' 
                        : 'bg-white/5 border-white/10'
                )}>
                    {data.recommended_model === 'setup_fee' && (
                        <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500" />
                    )}
                    <h3 className="text-xl font-bold text-white mb-6">One-Off (Setup Fee)</h3>
                    
                    <div className="space-y-4 mb-6 flex-grow">
                        <div className="flex justify-between items-center py-2 border-b border-white/5">
                            <span className="text-sm text-white/60">Simple</span>
                            <span className="font-semibold text-white">${data.setup_fee_model.simple_range.min} - ${data.setup_fee_model.simple_range.max}</span>
                        </div>
                        <div className="flex justify-between items-center py-2 border-b border-white/5">
                            <span className="text-sm text-white/60">Standard</span>
                            <span className="font-semibold text-purple-400">${data.setup_fee_model.standard_range.min} - ${data.setup_fee_model.standard_range.max}</span>
                        </div>
                        <div className="flex justify-between items-center py-2 border-b border-white/5">
                            <span className="text-sm text-white/60">Complex</span>
                            <span className="font-semibold text-white">${data.setup_fee_model.complex_range.min} - ${data.setup_fee_model.complex_range.max}</span>
                        </div>
                    </div>

                    <div className="mb-4">
                        <p className="text-xs font-semibold text-white/50 mb-2 uppercase tracking-wider">Includes</p>
                        <ul className="space-y-2">
                            {data.setup_fee_model.what_to_include.slice(0, 3).map((item, idx) => (
                                <li key={idx} className="flex items-start text-sm text-white/80">
                                    <svg className="w-4 h-4 text-purple-400 mr-2 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* 3. Retainer Model */}
                <div className={cn(
                    "p-6 rounded-3xl border backdrop-blur-md relative overflow-hidden flex flex-col",
                    data.recommended_model === 'retainer' 
                        ? 'bg-emerald-500/10 border-emerald-500/50 shadow-[0_0_30px_rgba(16,185,129,0.1)]' 
                        : 'bg-white/5 border-white/10'
                )}>
                    {data.recommended_model === 'retainer' && (
                        <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-emerald-400 to-teal-500" />
                    )}
                    <div className="flex justify-between items-start mb-6">
                        <h3 className="text-xl font-bold text-white">SaaS / Retainer</h3>
                        <span className="text-xs font-bold px-2 py-1 rounded bg-white/10 text-white/70">MRR</span>
                    </div>
                    
                    <div className="space-y-4 mb-6 flex-grow">
                        <div className="flex justify-between items-center py-2 border-b border-white/5">
                            <span className="text-sm text-white/60">Starter</span>
                            <span className="font-semibold text-white">${data.retainer_model.starter.price}/mo</span>
                        </div>
                        <div className="flex justify-between items-center py-2 border-b border-white/5 relative group">
                            <span className="text-sm font-medium text-emerald-400 flex items-center">
                                Growth
                                <span className="ml-2 w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                            </span>
                            <span className="font-bold text-emerald-400 text-lg">${data.retainer_model.growth.price}/mo</span>
                        </div>
                        <div className="flex justify-between items-center py-2 border-b border-white/5">
                            <span className="text-sm text-white/60">Premium</span>
                            <span className="font-semibold text-white">${data.retainer_model.premium.price}/mo</span>
                        </div>
                    </div>

                    <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-4 mt-auto">
                        <p className="text-xs text-emerald-400/80 uppercase font-bold tracking-wider mb-1">6-Month Target</p>
                        <p className="text-xl font-bold text-emerald-300">{data.retainer_model.mrr_projection_6_months}</p>
                    </div>
                </div>
            </div>

            {/* Recommendation & Psychology */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="p-8 rounded-3xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10">
                    <h3 className="text-lg font-bold text-white mb-4 flex items-center">
                        <svg className="w-5 h-5 text-yellow-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                        Why {data.recommended_model.replace('_', ' ').toUpperCase()}?
                    </h3>
                    <p className="text-white/80 leading-relaxed text-sm md:text-base">{data.recommended_reason}</p>
                    
                    <div className="mt-6 pt-6 border-t border-white/10">
                        <p className="text-xs font-semibold text-white/50 mb-2 uppercase tracking-wider">Evolution Path</p>
                        <p className="text-sm text-white/70 italic">{data.upgrade_path}</p>
                    </div>
                </div>

                <div className="space-y-6">
                    <div className="p-6 rounded-2xl bg-indigo-500/10 border border-indigo-500/20">
                        <p className="text-xs font-bold text-indigo-400 uppercase tracking-wider mb-2">Psychology Trigger</p>
                        <p className="text-white/90 font-medium text-lg leading-snug">"{data.pricing_psychology}"</p>
                    </div>
                    <div className="p-6 rounded-2xl bg-cyan-500/10 border border-cyan-500/20">
                        <p className="text-xs font-bold text-cyan-400 uppercase tracking-wider mb-2">Anchoring Tip</p>
                        <p className="text-white/80 text-sm leading-relaxed">{data.price_anchoring_tip}</p>
                    </div>
                </div>
            </div>

            {/* Red Flags */}
            <div className="p-6 rounded-3xl bg-rose-500/5 border border-rose-500/20">
                <h3 className="text-sm font-bold text-rose-400 mb-4 uppercase tracking-wider flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                    Pricing Mistakes to Avoid
                </h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {data.red_flags.map((flag, idx) => (
                        <li key={idx} className="flex items-start bg-rose-500/10 p-4 rounded-xl">
                            <svg className="w-5 h-5 text-rose-500 mr-3 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                            <span className="text-sm text-rose-200/90">{flag}</span>
                        </li>
                    ))}
                </ul>
            </div>
            
        </div>
    )
}
