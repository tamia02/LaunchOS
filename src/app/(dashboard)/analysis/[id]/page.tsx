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

export default function AnalysisPage() {
    const { id } = useParams()
    const [activeTab, setActiveTab] = useState('niche')
    const [analysis, setAnalysis] = useState<any>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchAnalysis = async () => {
            setLoading(true)
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
            <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-6">
                <div className="w-16 h-16 border-4 border-tertiary/20 border-t-tertiary rounded-full animate-spin shadow-[0_0_20px_#679cff/20]" />
                <p className="text-on-surface-variant font-black uppercase tracking-[0.4em] text-[10px] animate-pulse italic">Aggregating Engine Intel...</p>
            </div>
        )
    }

    return (
        <div className="space-y-12 animate-in fade-in duration-500">
            {/* Top Bar */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-white/5 pb-10">
                <div className="space-y-4">
                    <Link href="/dashboard" className="text-[10px] font-black uppercase tracking-[0.2em] text-on-surface-variant hover:text-tertiary flex items-center gap-2 transition-all group">
                        <span className="material-symbols-outlined text-sm group-hover:-translate-x-1 transition-transform">arrow_back</span>
                        Back to Command
                    </Link>
                    <div className="space-y-2">
                        <h1 className="text-3xl md:text-4xl font-headline font-black tracking-tighter text-white uppercase italic leading-none">{analysis?.idea}</h1>
                        <p className="text-[10px] text-tertiary font-black uppercase tracking-[0.3em] font-label opacity-80">
                            Archived Cluster: {analysis?.created_at} · System Integrity: 100%
                        </p>
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <Button variant="secondary" size="sm" className="hidden sm:flex">
                        <span className="material-symbols-outlined mr-2 text-sm">share</span>
                        Share
                    </Button>
                    <Button variant="secondary" size="sm">
                        <span className="material-symbols-outlined mr-2 text-sm">description</span>
                        PDF Export
                    </Button>
                    <Button variant="primary" size="sm" className="group">
                        <span className="material-symbols-outlined mr-2 text-sm group-hover:rotate-180 transition-transform duration-700">sync</span>
                        Re-analyze
                    </Button>
                </div>
            </div>

            {/* Tabs */}
            <EngineTabs activeTab={activeTab} onTabChange={setActiveTab} />

            {/* Output Content */}
            <div className="py-6 min-h-[500px]">
                {renderEngineOutput()}
            </div>

            {/* Floating Engine Status Bar */}
            <div className="fixed inset-x-8 bottom-10 pointer-events-none md:ml-72 px-8">
                <div className="max-w-6xl mx-auto flex justify-end">
                    <div className="bg-surface-container-highest/60 backdrop-blur-2xl border border-white/10 p-4 px-8 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] pointer-events-auto flex items-center gap-8 group hover:bg-surface-container-highest transition-all duration-500">
                        <div className="flex items-center gap-4">
                            <span className="text-[9px] font-black font-label text-on-surface-variant uppercase tracking-[0.3em]">Neural Status</span>
                            <div className="flex gap-1.5 pt-0.5">
                                {[...Array(10)].map((_, i) => (
                                    <div key={i} className="w-1.5 h-1.5 rounded-full bg-tertiary shadow-[0_0_8px_#679cff] opacity-80" />
                                ))}
                            </div>
                        </div>
                        <div className="w-px h-5 bg-white/10" />
                        <div className="flex items-center gap-3">
                            <span className="w-2 h-2 rounded-full bg-tertiary animate-pulse" />
                            <p className="text-[10px] font-black uppercase tracking-[0.3em] font-headline italic text-white">Ready for Scale</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
