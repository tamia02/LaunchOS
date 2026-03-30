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
import { RevenueEngine } from '@/components/engines/RevenueEngine'
import { Button } from '@/components/ui/Button'
import { Share2, FileDown, ArrowLeft, RefreshCw } from 'lucide-react'
import Link from 'next/link'

export default function AnalysisPage() {
    const { id } = useParams()
    const [activeTab, setActiveTab] = useState('niche')
    const [analysis, setAnalysis] = useState<any>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        // Mock fetch for initial UI setup
        const fetchAnalysis = async () => {
            // In real scenario: const { data } = await supabase.from('analyses').select('*').eq('id', id).single()
            // For now we use the mock data structure
            setLoading(true)
            setTimeout(() => {
                setAnalysis({
                    id,
                    idea: 'An AI-powered garden planner that helps beginners grow vegetables.',
                    created_at: '2026-03-30',
                    niche: {
                        niche_name: 'Urban Home Gardeners',
                        niche_description: 'Beginner gardeners living in apartment buildings or urban areas with limited space (balconies, small patios). They want to grow their own food but don\'t know where to start or how to manage small-space constraints.',
                        why_this_niche: 'High enthusiasm, limited expertise, and clear physical constraints make this a perfect segment for personalized AI advice.',
                        audience_size: '2.3M urban households',
                        pain_level: 'High',
                        audience_tags: ['Urbanites', 'Eco-conscious', 'Beginners', 'Space-constrained', 'Organic-focused'],
                        where_they_hang_out: ['r/UrbanGardening', 'Instagram Homesteading', 'Local Nursery groups', 'Community Garden forums'],
                        secondary_niches: ['Suburban First-timers', 'Indoor Plant Lovers', 'School Program Teachers']
                    },
                    // ... placeholders for other engines would go here
                })
                setLoading(false)
            }, 1000)
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
            case 'progress': return <RevenueEngine data={analysis.revenue} />
            default: return null
        }
    }

    if (loading) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-4">
                <RefreshCw className="w-8 h-8 text-accent animate-spin" />
                <p className="text-text-muted font-mono text-sm">Aggregating engine data...</p>
            </div>
        )
    }

    return (
        <div className="space-y-8">
            {/* Top Bar */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-white/5 pb-8">
                <div className="space-y-2">
                    <Link href="/dashboard" className="text-xs text-text-muted hover:text-accent flex items-center gap-1 transition-colors">
                        <ArrowLeft className="w-3 h-3" />
                        Back to Dashboard
                    </Link>
                    <div className="flex items-center gap-3">
                        <h1 className="text-2xl font-bold line-clamp-1">{analysis?.idea}</h1>
                    </div>
                    <p className="text-xs text-text-muted font-mono uppercase tracking-widest">
                        Analyzed on {analysis?.created_at}
                    </p>
                </div>

                <div className="flex items-center gap-3">
                    <Button variant="secondary" size="sm">
                        <Share2 className="w-4 h-4 mr-2 text-text-muted" />
                        Share
                    </Button>
                    <Button variant="secondary" size="sm">
                        <FileDown className="w-4 h-4 mr-2 text-text-muted" />
                        PDF Report
                    </Button>
                    <Button variant="primary" size="sm">
                        <RefreshCw className="w-4 h-4 mr-2" />
                        Re-analyze
                    </Button>
                </div>
            </div>

            {/* Tabs */}
            <EngineTabs activeTab={activeTab} onTabChange={setActiveTab} />

            {/* Output Content */}
            <div className="py-4">
                {renderEngineOutput()}
            </div>

            {/* Bottom Status Bar */}
            <div className="fixed inset-x-8 bottom-8 pointer-events-none md:ml-64 px-8">
                <div className="max-w-6xl mx-auto flex justify-end">
                    <div className="bg-black/80 backdrop-blur border border-white/10 p-3 px-6 rounded-full shadow-2xl pointer-events-auto flex items-center gap-6">
                        <div className="flex items-center gap-3">
                            <span className="text-[10px] font-mono text-text-muted uppercase">Engine Status</span>
                            <div className="flex gap-1.5">
                                {[...Array(10)].map((_, i) => (
                                    <div key={i} className="w-2 h-2 rounded-full bg-accent" />
                                ))}
                            </div>
                        </div>
                        <div className="w-px h-4 bg-white/10" />
                        <p className="text-xs font-medium">Ready to Build</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
