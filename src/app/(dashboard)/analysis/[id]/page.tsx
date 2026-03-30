'use client'

import React, { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import { EngineTabs } from '@/components/dashboard/EngineTabs'
import { NicheEngine } from '@/components/engines/NicheEngine'
import { ValidationEngine } from '@/components/engines/ValidationEngine'
import { MVPEngine } from '@/components/engines/MVPEngine'
import { PricingEngine } from '@/components/engines/PricingEngine'
import { OutreachEngine } from '@/components/engines/OutreachEngine'
import { CompetitorEngine } from '@/components/engines/CompetitorEngine'
import { InvestorEngine } from '@/components/engines/InvestorEngine'
import { YCEngine } from '@/components/engines/YCEngine'
import { PivotEngine } from '@/components/engines/PivotEngine'
import { ProgressEngine } from '@/components/engines/ProgressEngine'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'
import { cn } from '@/lib/utils'

export default function AnalysisPage() {
    const { id } = useParams()
    const [activeTab, setActiveTab] = useState('niche')
    const [analysis, setAnalysis] = useState<any>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchAnalysis = async () => {
            setLoading(true)
            // Mock data fetch - in production this would be from Supabase
            setTimeout(() => {
                setAnalysis({
                    id,
                    idea: 'An AI-powered garden planner that helps beginners grow vegetables.',
                    created_at: 'March 30, 2026',
                    niche: {
                        niche_name: 'Urban Home Gardeners',
                        niche_description: 'Beginner gardeners living in apartment buildings or urban areas with limited space (balconies, small patios). They want to grow their own food but don\'t know where to start or how to manage small-space constraints.',
                        why_this_niche: 'High enthusiasm, limited expertise, and clear physical constraints make this a perfect segment for personalized AI advice.',
                        audience_size: '2.3M urban households',
                        pain_level: 'High',
                        audience_tags: ['Urbanites', 'Eco-conscious', 'Beginners', 'Space-constrained', 'Organic-focused'],
                        where_they_hang_out: ['r/UrbanGardening', 'Instagram Homesteading', 'Local Nursery groups', 'Community Garden forums'],
                        secondary_niches: ['Suburban First-timers', 'Indoor Plant Lovers', 'School Program Teachers']
                    }
                })
                setLoading(false)
            }, 800)
        }
        fetchAnalysis()
    }, [id])

    const renderEngineOutput = () => {
        if (!analysis) return null
        switch (activeTab) {
            case 'niche': return <NicheEngine data={analysis.niche} />
            case 'validation': return <ValidationEngine data={analysis.validation} />
            case 'mvp': return <MVPEngine data={analysis.mvp} />
            case 'pricing': return <PricingEngine data={analysis.pricing} />
            case 'outreach': return <OutreachEngine data={analysis.outreach} />
            case 'competitor': return <CompetitorEngine data={analysis.competitor} />
            case 'investor': return <InvestorEngine data={analysis.investor} />
            case 'yc': return <YCEngine data={analysis.yc} />
            case 'pivot': return <PivotEngine data={analysis.pivot} />
            case 'progress': return <ProgressEngine data={analysis.revenue} />
            default: return null
        }
    }

    if (loading) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[70vh] space-y-10 animate-in fade-in duration-1000">
                <div className="relative">
                    <div className="w-24 h-24 border-2 border-tertiary/10 border-t-tertiary rounded-full animate-spin shadow-[0_0_50px_rgba(103,156,255,0.2)]" />
                    <span className="material-symbols-outlined absolute inset-0 flex items-center justify-center text-tertiary text-3xl animate-pulse">database</span>
                </div>
                <div className="text-center space-y-4">
                    <p className="text-white font-headline font-black uppercase tracking-[0.6em] text-xs italic antialiased">Synchronizing_Intelligence_Cluster</p>
                    <div className="flex gap-1 justify-center">
                        {[...Array(3)].map((_, i) => (
                            <div key={i} className="w-1 h-1 bg-tertiary rounded-full animate-bounce" style={{ animationDelay: `${i * 0.2}s` }} />
                        ))}
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="space-y-16 animate-in fade-in slide-in-from-bottom-8 duration-1000 custom-ease pb-32">
            {/* Editorial Hero Area - No-Line Separation */}
            <div className="relative group">
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 pt-4 px-2">
                    <div className="space-y-8 max-w-4xl">
                        <Link href="/dashboard" className="inline-flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.4em] text-tertiary hover:tracking-[0.6em] transition-all duration-700 custom-ease group/back italic">
                            <span className="material-symbols-outlined text-sm group-hover/back:-translate-x-2 transition-transform duration-700">arrow_back</span>
                            Return_to_Control_Center
                        </Link>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="w-1.5 h-12 bg-tertiary/40 rounded-full shadow-[0_0_15px_#679cff]" />
                                <h1 className="text-4xl md:text-6xl font-headline font-black tracking-tighter text-white uppercase italic leading-[0.9] antialiased drop-shadow-2xl">{analysis?.idea}</h1>
                            </div>
                            <div className="flex flex-wrap items-center gap-8 pl-6">
                                <p className="text-[10px] text-on-surface-variant font-black uppercase tracking-[0.4em] font-label italic opacity-40">
                                    Archive_ID: <span className="text-tertiary">{id?.slice(0, 8)}</span>
                                </p>
                                <p className="text-[10px] text-on-surface-variant font-black uppercase tracking-[0.4em] font-label italic opacity-40">
                                    Integrity: <span className="text-green-500">OPTIMAL</span>
                                </p>
                                <p className="text-[10px] text-on-surface-variant font-black uppercase tracking-[0.4em] font-label italic opacity-40">
                                    Cycle: {analysis?.created_at}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center gap-4 px-2">
                        <button className="flex items-center gap-3 px-8 py-5 rounded-2xl bg-surface-container-high/40 text-on-surface-variant/40 hover:text-white hover:bg-surface-container-highest transition-all duration-700 custom-ease font-headline font-black text-[10px] uppercase tracking-[0.3em] italic glass-edge border border-white/5 shadow-2xl group/btn">
                            <span className="material-symbols-outlined text-xl group-hover/btn:scale-110 transition-transform">share</span>
                            Distribution
                        </button>
                        <button className="flex items-center gap-3 px-8 py-5 rounded-2xl bg-surface-container-high/40 text-on-surface-variant/40 hover:text-white hover:bg-surface-container-highest transition-all duration-700 custom-ease font-headline font-black text-[10px] uppercase tracking-[0.3em] italic glass-edge border border-white/5 shadow-2xl group/btn">
                            <span className="material-symbols-outlined text-xl group-hover/btn:scale-110 transition-transform">description</span>
                            Export_Intel
                        </button>
                        <button className="button-metallic flex items-center gap-4 px-10 py-5 rounded-2xl font-headline font-black text-[10px] uppercase tracking-[0.4em] italic shadow-[0_20px_50px_rgba(0,0,0,0.5)] hover:brightness-125 transition-all duration-700 custom-ease active:scale-95 group/btn-main relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 -translate-x-full group-hover/btn-main:translate-x-full transition-transform duration-[2000ms]" />
                            <span className="material-symbols-outlined text-xl group-hover/btn-main:rotate-180 transition-transform duration-1000 relative z-10">sync</span>
                            <span className="relative z-10">Re-Execute</span>
                        </button>
                    </div>
                </div>

                {/* Atmosphere separation */}
                <div className="absolute -bottom-16 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent shadow-[0_0_50px_rgba(255,255,255,0.05)]" />
            </div>

            {/* Tactical Engine Selection */}
            <div className="relative z-10">
                <EngineTabs activeTab={activeTab} onTabChange={setActiveTab} />
            </div>

            {/* Output Matrix */}
            <div className="relative min-h-[600px] px-2">
                <div className="absolute -inset-10 bg-tertiary/2 rounded-[5rem] blur-[120px] pointer-events-none opacity-20" />
                <div className="relative animate-in slide-in-from-bottom-12 fade-in duration-1000 custom-ease">
                    {renderEngineOutput()}
                </div>
            </div>

            {/* HUD: Tactical Telemetry Bar */}
            <div className="fixed inset-x-8 bottom-12 pointer-events-none flex justify-center z-50">
                <div className="max-w-7xl w-full flex justify-end">
                    <div className="bg-surface-container-highest/40 backdrop-blur-3xl border border-white/5 p-6 px-12 rounded-[2rem] shadow-[0_40px_100px_rgba(0,0,0,0.8)] pointer-events-auto flex items-center gap-12 group hover:bg-surface-container-highest/60 transition-all duration-1000 custom-ease glass-edge">
                        <div className="flex items-center gap-6">
                            <div className="flex flex-col gap-1">
                                <span className="text-[9px] font-black font-label text-tertiary uppercase tracking-[0.5em] italic antialiased">Neural_Clusters</span>
                                <div className="flex gap-2">
                                    {[...Array(10)].map((_, i) => (
                                        <div key={i} className={cn(
                                            "w-2 h-2 rounded-full transition-all duration-700",
                                            i < 8 ? "bg-tertiary shadow-[0_0_10px_#679cff]" : "bg-white/10"
                                        )} />
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="w-px h-10 bg-white/5" />
                        <div className="flex flex-col gap-1">
                            <span className="text-[9px] font-black font-label text-on-surface-variant/30 uppercase tracking-[0.5em] italic antialiased">Stability_Index</span>
                            <div className="flex items-center gap-4">
                                <div className="w-32 h-1.5 bg-white/5 rounded-full overflow-hidden">
                                    <div className="w-[94%] h-full bg-gradient-to-r from-tertiary to-white shadow-[0_0_10px_#679cff] animate-pulse" />
                                </div>
                                <span className="text-[10px] font-black font-headline text-white italic tracking-widest">94%</span>
                            </div>
                        </div>
                        <div className="w-px h-10 bg-white/5" />
                        <div className="flex items-center gap-4 group/ready">
                            <div className="w-3 h-3 rounded-full bg-green-500 shadow-[0_0_15px_#22c55e] animate-pulse" />
                            <p className="text-[11px] font-black uppercase tracking-[0.4em] font-headline italic text-white group-hover/ready:tracking-[0.6em] transition-all duration-700">OPTIMAL_READY</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
