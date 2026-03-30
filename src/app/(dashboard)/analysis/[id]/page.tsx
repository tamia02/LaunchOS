'use client'

import React, { useState, useEffect, Suspense } from 'react'
import { useParams, useRouter, useSearchParams } from 'next/navigation'
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
import Link from 'next/link'
import { cn } from '@/lib/utils'

const engines = [
    { id: 'niche', name: 'Niche', number: '01' },
    { id: 'validation', name: 'Validation', number: '02' },
    { id: 'mvp', name: 'MVP', number: '03' },
    { id: 'pricing', name: 'Pricing', number: '04' },
    { id: 'outreach', name: 'Outreach', number: '05' },
    { id: 'competitor', name: 'Competitors', number: '06' },
    { id: 'investor', name: 'Investor', number: '07' },
    { id: 'yc', name: 'YC App', number: '08' },
    { id: 'pivot', name: 'Pivot', number: '09' },
    { id: 'progress', name: 'Progress', number: '10' },
]

const MOCK_ANALYSIS = {
    idea: 'An AI-powered garden planner that helps beginners grow vegetables.',
    created_at: 'March 30, 2026',
    niche: {
        niche_name: 'Urban Home Gardeners',
        niche_description: 'Beginner gardeners living in apartment buildings or urban areas with limited space. They want to grow their own food but don\'t know where to start.',
        why_this_niche: 'High enthusiasm, limited expertise, and clear physical constraints make this a perfect segment for personalized AI advice.',
        audience_size: '2.3M urban households',
        pain_level: 'High',
        audience_tags: ['Urbanites', 'Eco-conscious', 'Beginners', 'Space-constrained', 'Organic-focused'],
        where_they_hang_out: ['r/UrbanGardening', 'Instagram Homesteading', 'Local Nursery groups', 'Community Garden forums'],
        secondary_niches: ['Suburban First-timers', 'Indoor Plant Lovers', 'School Program Teachers']
    },
    validation: {
        overall_score: 84,
        verdict: 'Strong Signals',
        market_size: '$2.4B TAM',
        pain_score: 8.7,
        willingness_to_pay: 'High',
        time_to_revenue: '3-4 months',
        risk_level: 'Low-Medium',
        green_flags: ['Massive organic search volume', 'High social engagement', 'No dominant AI solution exists', 'Users actively spend on tools'],
        red_flags: ['Seasonal demand fluctuations', 'High customer education cost'],
        decision: 'Build',
        decision_rationale: 'Clear pain, proven willingness to pay, and a large addressable market with no direct AI-native competitor.',
        competitor_gap: 'No existing tool combines AI personalization with local climate and space constraints.'
    },
    mvp: {
        name: 'GardenOS Alpha',
        description: 'A 28-day build plan to create the core AI planting advisor.',
        features: ['AI planting calendar', 'Space optimizer', 'Pest diagnosis', 'Harvest tracker'],
        tech_stack: [
            { name: 'Next.js', version: '14' },
            { name: 'OpenAI GPT-4', version: 'API' },
            { name: 'Supabase', version: 'v2' },
            { name: 'Stripe', version: 'v3' }
        ]
    },
    pricing: {
        recommended_tier: 'Freemium + Pro',
        tiers: [
            { name: 'Seed', price: '$0', description: 'Basic planting calendar, 1 garden', features: ['AI calendar', '1 garden bed', 'Community access'], recommended: false },
            { name: 'Grower', price: '$12/mo', description: 'Full personalization, unlimited gardens', features: ['Everything in Seed', 'Unlimited beds', 'Pest AI', 'Harvest analytics'], recommended: true },
            { name: 'Farm', price: '$29/mo', description: 'Team features and API access', features: ['Everything in Grower', 'Team collaboration', 'API access', 'Priority support'], recommended: false }
        ],
        revenue_target: '$18K MRR at month 6',
        rationale: 'Freemium drives viral adoption; Pro tier captures willingness to pay from dedicated gardeners.'
    },
    outreach: {
        strategy: 'Community-Led Growth',
        templates: [
            { subject: 'Your garden this season at {{Community}}', body: 'Hi {{First_Name}}, noticed you\'re active in urban gardening. I built an AI that creates personalized planting schedules based on your exact climate zone and space.' }
        ],
        campaigns: [
            { name: 'Reddit Launch', status: 'Active', conversion_rate: '4.2%' },
            { name: 'Instagram Reels', status: 'Planned', conversion_rate: '2.8%' },
            { name: 'Newsletter Swap', status: 'Setup', conversion_rate: '6.1%' }
        ]
    },
    competitor: {
        competitors: [
            { name: 'Gardenate', url: 'gardenate.com', what_they_do: 'Basic planting calendar by region', pricing: 'Free', weakness: 'No AI, no personalization', user_complaints: 'Too generic, not local enough' },
            { name: 'Planta', url: 'planta.se', what_they_do: 'Houseplant care AI', pricing: '$7/mo', weakness: 'Only indoor plants', user_complaints: 'Doesn\'t support food growing' },
            { name: 'SproutRobot', url: 'sproutrobot.com', what_they_do: 'Garden scheduling', pricing: '$15/yr', weakness: 'Outdated UX, no AI', user_complaints: 'Feels like it hasn\'t been updated in years' }
        ],
        market_gap: 'No product combines AI personalization with outdoor vegetable growing for urban spaces.',
        your_angle: 'AI-native, mobile-first, climate-zone-aware garden planner for beginners.',
        positioning_statement: 'The AI garden advisor that actually knows your backyard.',
        dont_compete_on: 'Price — compete on intelligence and personalization.',
        win_on: 'Accuracy of AI recommendations, ease of setup, and beginner-friendly UX.'
    },
    investor: {
        readiness_score: 71,
        grade: 'B+',
        verdict: 'Pre-seed Ready',
        scores: { market_size: 82, problem_clarity: 90, solution_uniqueness: 75, business_model: 68, founder_market_fit: 70, scalability: 65 },
        strengths: ['Large and growing market', 'Clear problem with proven willingness to pay', 'No direct AI-native competitor'],
        weaknesses: ['Early traction needed', 'Unit economics not yet validated', 'Seasonal revenue risk'],
        to_reach_90: ['Show 100 paying users', 'Demonstrate 60-day retention', 'Validate $15+ ARPU'],
        investor_type: 'Angel / Pre-seed VC',
        raise_amount: '$250K–$500K',
        use_of_funds: ['6 months of product development', 'Content marketing flywheel', 'Founding team salaries']
    },
    yc: {
        company_name: 'GardenOS',
        one_liner: 'AI-powered garden planner that helps urban beginners grow food successfully.',
        what_do_you_do: 'We build an AI gardening advisor that creates personalized planting schedules, diagnoses plant problems, and optimizes small urban spaces.',
        problem: 'Urban beginners want to grow their own food but fail due to lack of personalized, location-aware guidance.',
        solution: 'An AI system that learns your exact climate zone, space constraints, and goals to give hyper-accurate planting advice.',
        why_now: 'GPT-4 vision models now make plant diagnosis viable at scale. Urban gardening interest is at an all-time high post-pandemic.',
        market_size: '$2.4B TAM (US gardening market), $800M SAM (beginner segment), $120M SOM by year 3.',
        business_model: 'Freemium SaaS. Free basic calendar, $12/mo for full AI features.',
        traction: '340 beta signups, 12 paying users, 4.8-star App Store rating.',
        why_us: 'Founder grew up farming; co-founder ex-Palantir AI engineer. We understand both the domain and the technology.',
        competition: 'Gardenate (no AI), Planta (only houseplants), SproutRobot (no AI, outdated). No AI-native outdoor food gardening app.',
        what_makes_you_different: 'Climate-zone-aware AI that personalizes recommendations to your specific outdoor space—not generic advice.',
        yc_why: 'YC\'s network of founders in climate-tech and consumer apps would accelerate our growth to Series A.'
    },
    pivot: {
        original_idea_assessment: 'Strong core thesis. The AI personalization angle is correct—but the initial go-to-market is too broad. Focusing on a specific crop type or user persona will accelerate PMF.',
        pivots: [
            { pivot_name: 'B2B: Community Gardens', pivot_description: 'Pivot to managing shared community garden spaces for neighborhood associations.', why_stronger: 'Higher LTV, annual contract revenue, and they have a clear budget.', target_audience: 'Community garden coordinators', revenue_potential: 'high', time_to_revenue: '2 months', risk_level: 'low' },
            { pivot_name: 'Vertical: Herbs & Microgreens', pivot_description: 'Focus exclusively on kitchen herb and microgreen growing for apartment dwellers.', why_stronger: 'Year-round use, fastest growth cycle, very high engagement.', target_audience: 'Apartment renters 25-35', revenue_potential: 'medium', time_to_revenue: '6 weeks', risk_level: 'low' },
            { pivot_name: 'White-label for Seed Companies', pivot_description: 'License the AI engine to seed companies like Burpee or Johnny\'s Selected Seeds.', why_stronger: 'They have the distribution and brand trust already.', target_audience: 'Seed company CMOs', revenue_potential: 'very high', time_to_revenue: '4 months', risk_level: 'medium' }
        ],
        recommended_pivot: 'Vertical: Herbs & Microgreens',
        recommended_reason: 'Fastest path to 100 paying users and proven engagement data within 30 days.'
    },
    revenue: {
        health_score: 92.4,
        time_to_mvp: '14d',
        velocity: [20, 35, 28, 50, 45, 65, 72, 80],
        milestones: [
            { name: 'Niche Selection', status: 'completed', description: 'Urban home gardeners validated as primary segment.', progress: 100 },
            { name: 'Market Validation', status: 'completed', description: '12/15 target interviews completed with high intent.', progress: 85 },
            { name: 'MVP Architecture', status: 'active', description: 'Core API layer being deployed to staging.', progress: 30 },
            { name: 'Strategic Outreach', status: 'upcoming', description: 'Waitlist campaign launching next week.', progress: 0 }
        ],
        strategic_focus: {
            title: 'Finalize Core Landing Page Copy',
            description: 'Based on yesterday\'s validation calls, emphasize "Data Privacy" more heavily in the hero section. Current conversion forecast: +12%.',
            next_action: 'Go to Task'
        },
        risks: { market: 60, speed: 85, capital: 50, tech: 40 }
    }
}

function AnalysisPageInner() {
    const { id } = useParams()
    const router = useRouter()
    const searchParams = useSearchParams()
    const engineParam = searchParams.get('engine') || 'niche'

    const [analysis] = useState<any>(MOCK_ANALYSIS)
    const loading = false

    const activeTab = engines.find(e => e.id === engineParam) ? engineParam : 'niche'

    const handleTabChange = (engineId: string) => {
        router.push(`/dashboard/analysis/${id}?engine=${engineId}`, { scroll: false })
    }

    const renderEngineOutput = () => {
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

    return (
        <div className="space-y-10 animate-in fade-in slide-in-from-bottom-8 duration-700 pb-32">
            {/* Page Header */}
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pt-2">
                <div className="space-y-4 max-w-3xl">
                    <Link href="/dashboard" className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.4em] text-tertiary hover:tracking-[0.6em] transition-all duration-500 italic">
                        <span className="material-symbols-outlined text-sm">arrow_back</span>
                        Return to Dashboard
                    </Link>
                    <h1 className="text-3xl md:text-4xl font-headline font-black tracking-tighter text-white uppercase italic leading-tight">
                        {analysis?.idea}
                    </h1>
                    <div className="flex flex-wrap items-center gap-6">
                        <span className="text-[10px] text-on-surface-variant font-black uppercase tracking-[0.4em] italic opacity-40">
                            ID: <span className="text-tertiary">{String(id).slice(0, 8)}</span>
                        </span>
                        <span className="text-[10px] text-on-surface-variant font-black uppercase tracking-[0.4em] italic opacity-40">
                            Status: <span className="text-green-400">OPTIMAL</span>
                        </span>
                        <span className="text-[10px] text-on-surface-variant font-black uppercase tracking-[0.4em] italic opacity-40">
                            {analysis?.created_at}
                        </span>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <button className="flex items-center gap-2 px-6 py-3 rounded-xl bg-surface-container-high/60 text-on-surface-variant hover:text-white hover:bg-surface-container-highest transition-all duration-500 font-headline font-black text-[10px] uppercase tracking-[0.3em] italic border border-white/5">
                        <span className="material-symbols-outlined text-lg">share</span>
                        Share
                    </button>
                    <button className="flex items-center gap-2 px-6 py-3 rounded-xl bg-surface-container-high/60 text-on-surface-variant hover:text-white hover:bg-surface-container-highest transition-all duration-500 font-headline font-black text-[10px] uppercase tracking-[0.3em] italic border border-white/5">
                        <span className="material-symbols-outlined text-lg">description</span>
                        Export
                    </button>
                    <button className="button-metallic flex items-center gap-2 px-8 py-3 rounded-xl font-headline font-black text-[10px] uppercase tracking-[0.3em] italic shadow-xl hover:brightness-110 active:scale-95 transition-all duration-300 border border-white/10">
                        <span className="material-symbols-outlined text-lg">sync</span>
                        Re-Run
                    </button>
                </div>
            </div>

            {/* Engine Tab Strip */}
            <div className="flex items-center gap-1 overflow-x-auto pb-2 no-scrollbar border-b border-white/5">
                {engines.map((engine) => {
                    const isActive = activeTab === engine.id
                    return (
                        <button
                            key={engine.id}
                            onClick={() => handleTabChange(engine.id)}
                            className={cn(
                                "flex flex-col items-start gap-0.5 px-4 py-2.5 transition-all duration-300 min-w-[100px] relative rounded-t-lg whitespace-nowrap",
                                isActive
                                    ? "bg-surface-container-high text-white"
                                    : "text-on-surface-variant/50 hover:text-on-surface-variant hover:bg-surface-container-low"
                            )}
                        >
                            <span className={cn("text-[9px] font-mono tracking-wider", isActive ? "text-tertiary" : "text-on-surface-variant/30")}>
                                {engine.number}
                            </span>
                            <span className="text-xs font-semibold">{engine.name}</span>
                            {isActive && <div className="absolute inset-x-0 bottom-0 h-0.5 bg-tertiary rounded-full shadow-[0_0_8px_#679cff]" />}
                        </button>
                    )
                })}
            </div>

            {/* Engine Output */}
            <div key={activeTab} className="relative min-h-[400px]">
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                    {renderEngineOutput()}
                </div>
            </div>
        </div>
    )
}

export default function AnalysisPage() {
    return (
        <Suspense fallback={
            <div className="flex flex-col items-center justify-center min-h-[70vh] space-y-8">
                <div className="relative">
                    <div className="w-20 h-20 border-2 border-tertiary/20 border-t-tertiary rounded-full animate-spin shadow-[0_0_40px_rgba(103,156,255,0.15)]" />
                    <span className="material-symbols-outlined absolute inset-0 flex items-center justify-center text-tertiary text-2xl">database</span>
                </div>
                <p className="text-white font-headline font-black uppercase tracking-[0.5em] text-xs italic">Loading Analysis...</p>
            </div>
        }>
            <AnalysisPageInner />
        </Suspense>
    )
}
