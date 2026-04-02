'use client'

import React, { useState, useEffect } from 'react'
import { cn } from '@/lib/utils'

export interface OutreachData {
    startup_type: string
    target_customer: {
        job_title: string
        company_type: string
        pain_point: string
        where_they_are_right_now: string
    }
    free_outreach: {
        google_maps_strategy: { search_query: string, business_type: string, estimated_leads: string, cold_call_script: string, cold_email_template: string }
        reddit_strategy: { subreddits: string[], post_type: string, post_title: string, post_body: string, comment_strategy: string }
        linkedin_strategy: { target_titles: string[], connection_note: string, day3_message: string, day5_message: string, daily_target: number }
        facebook_groups: { groups_to_join: string[], posting_strategy: string, dm_after_engagement: string }
        twitter_strategy: { search_queries: string[], reply_approach: string, dm_template: string }
        whatsapp_telegram: { telegram_groups: string[], joining_strategy: string, contribution_before_pitch: string, week3_message: string }
        slack_school: { slack_communities: string[], skool_communities: string[], engagement_rule: string }
        cold_email_free: { lead_source: string, subject_lines: string[], email_body: string, followup_day3: string, followup_day7: string, daily_volume: number }
    }
    paid_outreach: {
        lead_generation: { recommended_tool: string, why_recommended: string, filter_settings: string, estimated_leads_per_month: string, cost: string }
        email_verification: { recommended_tool: string, why: string, cost_per_1000: string }
        sending_platform: { recommended_tool: string, why_recommended: string, email_sequence: Array<{day: number, subject: string, body: string, goal: string}>, daily_send_volume: number, cost: string }
        response_management: { crm_tool: string, booking_tool: string, reply_templates: { if_interested: string, if_not_now: string, if_asks_price: string } }
        benchmark_metrics: { open_rate_target: string, reply_rate_target: string, close_rate_target: string, revenue_at_10_clients: string }
    }
    hormozi_principle_applied: string
    week1_actions: string[]
    first_client_prediction: string
}

interface OutreachEngineProps {
    data: OutreachData
}

export function OutreachEngine({ data }: OutreachEngineProps) {
    const [isMounted, setIsMounted] = useState(false)
    const [view, setView] = useState<'free' | 'paid'>('free')

    useEffect(() => { setIsMounted(true) }, [])

    if (!data) return null
    if (!isMounted) return <div className="animate-pulse bg-white/5 h-[800px] rounded-2xl"></div>

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {/* Header & Toggle */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-white/10">
                <div>
                    <div className="flex items-center gap-3 mb-2">
                        <span className="bg-indigo-500/20 text-indigo-400 text-xs font-bold px-3 py-1 rounded-full border border-indigo-500/30 uppercase tracking-widest">
                            {data.startup_type} Engine
                        </span>
                        <h2 className="text-2xl font-bold text-white">Outreach Strategy</h2>
                    </div>
                    <p className="text-white/60 text-sm">Follow the $100M Leads Framework to get your first 100 paying customers.</p>
                </div>
                
                <div className="bg-black/40 p-1 rounded-full border border-white/10 flex shrink-0">
                    <button 
                        onClick={() => setView('free')}
                        className={cn(
                            "px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300",
                            view === 'free' ? "bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.3)]" : "text-white/50 hover:text-white"
                        )}
                    >
                        Free Plan (Sweat)
                    </button>
                    <button 
                        onClick={() => setView('paid')}
                        className={cn(
                            "px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300",
                            view === 'paid' ? "bg-amber-400 text-black shadow-[0_0_20px_rgba(251,191,36,0.5)]" : "text-white/50 hover:text-white"
                        )}
                    >
                        Paid Pipeline ($)
                    </button>
                </div>
            </div>

            {/* Top Insight Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10">
                    <h4 className="text-xs font-bold text-white/50 mb-3 uppercase tracking-wider">Target Customer State</h4>
                    <p className="text-white font-medium text-lg leading-snug mb-2 truncate">"{data.target_customer.pain_point}"</p>
                    <p className="text-sm text-white/60 flex items-center">
                        <svg className="w-4 h-4 text-rose-400 mr-2 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                        Found lurking at: {data.target_customer.where_they_are_right_now}
                    </p>
                </div>
                <div className="p-6 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex flex-col justify-center">
                    <h4 className="text-xs font-bold text-indigo-400 mb-3 uppercase tracking-wider">Hormozi Principle</h4>
                    <p className="text-white text-sm leading-relaxed">{data.hormozi_principle_applied}</p>
                </div>
            </div>

            {/* Main Views */}
            {view === 'free' ? (
                <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* Channel 1: Reddit */}
                        <div className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-orange-500/50 transition-colors group">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-8 h-8 rounded-full bg-[#FF4500]/20 flex items-center justify-center">
                                    <svg className="w-4 h-4 text-[#FF4500]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"/></svg>
                                </div>
                                <h3 className="text-lg font-bold text-white">Reddit Community Strategy</h3>
                            </div>
                            <p className="text-xs text-white/50 mb-2">Target Subreddits: {data.free_outreach.reddit_strategy.subreddits.join(', ')}</p>
                            <div className="bg-black/30 p-4 rounded-lg mt-3">
                                <p className="text-xs font-bold text-white/40 uppercase mb-1">Post Title</p>
                                <p className="text-sm font-semibold text-white mb-3">"{data.free_outreach.reddit_strategy.post_title}"</p>
                                <p className="text-xs font-bold text-white/40 uppercase mb-1">Post Body</p>
                                <p className="text-sm text-white/80 line-clamp-3 group-hover:line-clamp-none transition-all">{data.free_outreach.reddit_strategy.post_body}</p>
                            </div>
                        </div>

                        {/* Channel 2: LinkedIn */}
                        <div className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-blue-500/50 transition-colors group">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-8 h-8 rounded-full bg-[#0A66C2]/20 flex items-center justify-center">
                                    <svg className="w-4 h-4 text-[#0A66C2]" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                                </div>
                                <h3 className="text-lg font-bold text-white">LinkedIn Outreach</h3>
                            </div>
                            <p className="text-xs text-white/50 mb-2">Daily Volume Goal: {data.free_outreach.linkedin_strategy.daily_target} Connections</p>
                            <div className="space-y-2 mt-3 block">
                                <div className="bg-black/30 p-3 rounded-lg">
                                    <p className="text-xs font-bold text-blue-400 mb-1">Day 1: Connection</p>
                                    <p className="text-sm text-white/80">{data.free_outreach.linkedin_strategy.connection_note}</p>
                                </div>
                                <div className="bg-black/30 p-3 rounded-lg">
                                    <p className="text-xs font-bold text-emerald-400 mb-1">Day 5: Soft Pitch</p>
                                    <p className="text-sm text-white/80">{data.free_outreach.linkedin_strategy.day5_message}</p>
                                </div>
                            </div>
                        </div>

                        {/* Channel 3: Cold Email Free */}
                        <div className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-violet-500/50 transition-colors group md:col-span-2">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-8 h-8 rounded-full bg-violet-500/20 flex items-center justify-center">
                                    <svg className="w-4 h-4 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-white mb-0">Hustle Cold Email</h3>
                                    <p className="text-xs text-white/50 mt-1">Lead Source: {data.free_outreach.cold_email_free.lead_source}</p>
                                </div>
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="bg-black/30 p-4 rounded-xl border border-white/5">
                                    <p className="text-xs font-bold text-white/40 uppercase mb-2">Subject Lines to Test</p>
                                    <ul className="list-disc pl-4 space-y-1">
                                        {data.free_outreach.cold_email_free.subject_lines.map((sub, i) => (
                                            <li key={i} className="text-sm text-white/80">{sub}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="bg-black/30 p-4 rounded-xl border border-white/5">
                                    <p className="text-xs font-bold text-white/40 uppercase mb-2">Body Text</p>
                                    <p className="text-sm text-white/80 whitespace-pre-line">{data.free_outreach.cold_email_free.email_body}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Week 1 Checklist */}
                    <div className="p-6 rounded-2xl bg-gradient-to-r from-emerald-500/10 to-teal-500/5 border border-emerald-500/20">
                        <h3 className="text-lg font-bold text-white mb-4">Week 1 Attack Plan</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {data.week1_actions.map((action, idx) => (
                                <label key={idx} className="flex items-start gap-3 p-3 rounded-lg bg-black/20 hover:bg-black/40 cursor-pointer transition-colors border border-white/5">
                                    <input type="checkbox" className="mt-1 w-4 h-4 rounded border-white/20 bg-white/5 text-emerald-500 focus:ring-emerald-500 focus:ring-offset-0" />
                                    <span className="text-sm text-white/80 leading-snug">{action}</span>
                                </label>
                            ))}
                        </div>
                    </div>

                </div>
            ) : (
                <div className="space-y-8 animate-in fade-in slide-in-from-left-4 duration-500">
                    
                    {/* The 5 Stage Visual Pipeline */}
                    <div className="relative pt-6 pb-12">
                        {/* Connecting Line */}
                        <div className="absolute top-1/2 left-[10%] right-[10%] h-1 bg-gradient-to-r from-amber-500/20 via-orange-500/20 to-rose-500/20 rounded-full" />
                        
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative z-10">
                            
                            {/* Step 1: Scrape */}
                            <div className="bg-[#111] p-5 rounded-2xl border border-white/10 shadow-xl flex flex-col items-center text-center transform hover:-translate-y-2 transition-transform">
                                <div className="w-12 h-12 rounded-full bg-amber-500/20 border border-amber-500 flex items-center justify-center mb-4 text-amber-500">1</div>
                                <h4 className="font-bold text-white mb-1">Lead Gen</h4>
                                <p className="text-xs text-white/60 mb-3">{data.paid_outreach.lead_generation.recommended_tool}</p>
                                <div className="text-xs font-mono text-amber-400 bg-amber-400/10 px-2 py-1 rounded w-full">
                                    {data.paid_outreach.lead_generation.cost} / {data.paid_outreach.lead_generation.estimated_leads_per_month} leads
                                </div>
                            </div>

                            {/* Step 2: Verify */}
                            <div className="bg-[#111] p-5 rounded-2xl border border-white/10 shadow-xl flex flex-col items-center text-center transform hover:-translate-y-2 transition-transform">
                                <div className="w-12 h-12 rounded-full bg-orange-500/20 border border-orange-500 flex items-center justify-center mb-4 text-orange-500">2</div>
                                <h4 className="font-bold text-white mb-1">Verify Output</h4>
                                <p className="text-xs text-white/60 mb-3">{data.paid_outreach.email_verification.recommended_tool}</p>
                                <div className="text-xs font-mono text-orange-400 bg-orange-400/10 px-2 py-1 rounded w-full">
                                    {data.paid_outreach.email_verification.cost_per_1000} per 1k checks
                                </div>
                            </div>

                            {/* Step 3: Send */}
                            <div className="bg-[#111] p-5 rounded-2xl border border-white/10 shadow-xl flex flex-col items-center text-center transform hover:-translate-y-2 transition-transform">
                                <div className="w-12 h-12 rounded-full bg-rose-500/20 border border-rose-500 flex items-center justify-center mb-4 text-rose-500">3</div>
                                <h4 className="font-bold text-white mb-1">Send Engine</h4>
                                <p className="text-xs text-white/60 mb-3">{data.paid_outreach.sending_platform.recommended_tool}</p>
                                <div className="text-xs font-mono text-rose-400 bg-rose-400/10 px-2 py-1 rounded w-full">
                                    {data.paid_outreach.sending_platform.daily_send_volume} sends / day
                                </div>
                            </div>

                            {/* Step 4: Close */}
                            <div className="bg-[#111] p-5 rounded-2xl border border-white/10 shadow-xl flex flex-col items-center text-center transform hover:-translate-y-2 transition-transform">
                                <div className="w-12 h-12 rounded-full bg-pink-500/20 border border-pink-500 flex items-center justify-center mb-4 text-pink-500">4</div>
                                <h4 className="font-bold text-white mb-1">CRM & Book</h4>
                                <p className="text-xs text-white/60 mb-3">{data.paid_outreach.response_management.crm_tool}</p>
                                <div className="text-xs font-mono text-pink-400 bg-pink-400/10 px-2 py-1 rounded w-full">
                                    Automated links via {data.paid_outreach.response_management.booking_tool}
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* Paid Email Sequence Overview */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
                            <h3 className="text-sm font-bold text-white/50 uppercase tracking-widest mb-6">Instantly Email Sequence</h3>
                            <div className="space-y-4">
                                {data.paid_outreach.sending_platform.email_sequence.map((seq, i) => (
                                    <div key={i} className="pl-4 border-l-2 border-white/10 relative">
                                        <div className="absolute -left-[5px] top-1 w-2 h-2 rounded-full bg-white/40"></div>
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className="text-xs font-bold text-amber-500 bg-amber-500/10 px-2 py-0.5 rounded">Day {seq.day}</span>
                                            <span className="text-sm font-medium text-white">{seq.subject}</span>
                                        </div>
                                        <p className="text-xs text-white/60 line-clamp-2">{seq.body}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Benchmarks Matrix */}
                        <div className="bg-gradient-to-b from-amber-500/10 to-[#111] border border-amber-500/20 rounded-2xl p-6 flex flex-col justify-between">
                            <div>
                                <h3 className="text-lg font-bold text-amber-500 mb-1">Campaign Benchmarks</h3>
                                <p className="text-sm text-white/60 mb-6">If you aren't hitting these, fix your copy or lead list.</p>
                                
                                <div className="space-y-3">
                                    <div className="flex justify-between items-center bg-black/40 p-3 rounded-lg border border-white/5">
                                        <span className="text-sm text-white/80">Open Rate</span>
                                        <span className="font-bold text-white">{data.paid_outreach.benchmark_metrics.open_rate_target}</span>
                                    </div>
                                    <div className="flex justify-between items-center bg-black/40 p-3 rounded-lg border border-white/5">
                                        <span className="text-sm text-white/80">Reply Rate</span>
                                        <span className="font-bold text-white">{data.paid_outreach.benchmark_metrics.reply_rate_target}</span>
                                    </div>
                                    <div className="flex justify-between items-center bg-black/40 p-3 rounded-lg border border-white/5">
                                        <span className="text-sm text-white/80">Close Rate</span>
                                        <span className="font-bold text-white">{data.paid_outreach.benchmark_metrics.close_rate_target}</span>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="mt-6 pt-6 border-t border-white/10 text-center">
                                <p className="text-xs text-white/50 uppercase tracking-widest mb-1">Estimated MRR at 10 Clients</p>
                                <p className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-200 to-amber-500">
                                    {data.paid_outreach.benchmark_metrics.revenue_at_10_clients}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Prediction Bottom Bar */}
            <div className="mt-8 p-4 rounded-xl bg-blue-500/10 border border-blue-500/20 flex flex-col sm:flex-row items-center justify-between gap-4 w-full">
                <div className="flex items-center gap-3">
                    <div className="bg-blue-500/20 rounded-full p-2">
                        <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                    </div>
                    <div>
                        <p className="text-xs font-bold text-blue-400 uppercase">AI Prediction</p>
                        <p className="text-sm text-white/90">First actual paying client: <span className="font-bold text-white">{data.first_client_prediction}</span></p>
                    </div>
                </div>
                <button className="text-sm font-semibold bg-white text-black px-4 py-2 rounded-lg hover:bg-white/90 transition-colors shrink-0">
                    Export Pipeline to CSV
                </button>
            </div>
        </div>
    )
}
