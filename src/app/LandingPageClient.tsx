'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { 
  Zap, ChevronDown, ChevronUp, CheckCircle2, Lock, 
  Search, Target, Compass, DollarSign, Send, 
  Eye, GraduationCap, FileText, ArrowRightLeft, CalendarClock,
  Lightbulb, ArrowRight
} from 'lucide-react'

// FAQ Data
const faqs = [
  {
    q: "What exactly is launchOS?",
    a: "launchOS is an AI startup engine. You type your startup idea in one sentence. Ten AI systems analyze it in parallel and return a complete launch plan — niche selection, market validation, MVP scope, pricing strategy, outreach plan, competitor analysis, investor readiness score, YC application draft, pivot options, and a 30-day progress tracker. Everything a founder needs, in one platform, in under 2 minutes."
  },
  {
    q: "Do I need a technical background to use it?",
    a: "No. launchOS is built specifically for non-technical founders. You type your idea in plain English. The platform does the rest. No coding, no complex setup, no learning curve."
  },
  {
    q: "What are credits and how do they work?",
    a: "Credits are your usage currency inside launchOS. Each full analysis costs 100 credits. Rerunning an analysis costs 100 credits. Single engine refresh costs 20 credits. Credits reset every month on your billing date. Basic plan gets 300 credits (3 runs), Medium gets 500 credits (5 runs), Premium gets unlimited runs."
  },
  {
    q: "Is this useful if my idea is still vague?",
    a: "Yes — especially then. launchOS is designed for the early stage when your idea is unclear. The Niche Engine narrows your focus to one specific audience. The Validation Engine tells you if the problem is real. The Pivot Engine suggests stronger versions of your idea. The earlier you use it, the more time and money you save."
  },
  {
    q: "How is launchOS different from ChatGPT?",
    a: "ChatGPT gives you generic answers. launchOS gives you structured, actionable output built specifically for startup launching. Each engine has a specialized system prompt trained on startup methodology. The Pricing Engine fetches real market data from Upwork and Fiverr. The Competitor Engine searches real products. The output is a decision, not a conversation."
  },
  {
    q: "Can I use launchOS for a service-based startup?",
    a: "Yes. launchOS detects whether your idea is product-based or service-based and adjusts every engine output accordingly. The Pricing Engine shows hourly rates, setup fees, and retainer models for service businesses. The Outreach Engine covers both free methods (Reddit, LinkedIn, cold email) and paid pipelines for service founders."
  },
  {
    q: "What if I want to cancel?",
    a: "Cancel anytime from your account settings. No questions asked. Your data stays accessible for 30 days after cancellation."
  },
  {
    q: "Is my startup idea safe? Will you share it?",
    a: "Your ideas are private by default. We never share, sell, or use your startup ideas for any purpose other than generating your analysis. You can optionally publish to our public gallery — but that is always opt-in, never automatic."
  },
  {
    q: "Can I try it before paying?",
    a: "Yes. The free plan gives you 3 complete analyses with no credit card required. You see exactly what launchOS produces before you decide to pay."
  },
  {
    q: "Do you support payments in India?",
    a: "Yes. We accept UPI, all Indian debit and credit cards, NetBanking, and international cards. Prices are shown in Indian Rupees."
  }
];

const engines = [
  { num: '01', icon: <Target className="w-6 h-6" />, name: 'Niche Engine', desc: 'Find your best first market', sample: 'Solo freelancers earning $3K-10K/month · 4.1M audience · Critical pain level' },
  { num: '02', icon: <CheckCircle2 className="w-6 h-6" />, name: 'Validation Engine', desc: 'Is your problem real?', sample: 'Pain score: 9.1/10 · TAM: $4.2B · Verdict: BUILD ✓' },
  { num: '03', icon: <Zap className="w-6 h-6" />, name: 'MVP Generator', desc: 'What to build first', sample: 'Week 1: Core input + output · Do NOT build: user profiles, mobile app' },
  { num: '04', icon: <DollarSign className="w-6 h-6" />, name: 'Pricing Engine', desc: 'Exact pricing strategy', sample: 'Retainer: ₹15,000/month · Setup fee: ₹45,000 · Hourly: ₹2,500/hr' },
  { num: '05', icon: <Send className="w-6 h-6" />, name: 'Outreach Engine', desc: 'Find your first 100 users', sample: 'r/startups · LinkedIn founders · Cold email 50/day · First client in 14 days' },
  { num: '06', icon: <Eye className="w-6 h-6" />, name: 'Competitor Spy', desc: 'Know your enemies', sample: '4 competitors found · Gap: No pricing tool exists · Your angle: Decision layer' },
  { num: '07', icon: <GraduationCap className="w-6 h-6" />, name: 'Investor Readiness', desc: 'Are you fundable?', sample: 'Score: 74/100 · Grade: B+ · Raise: $500K pre-seed' },
  { num: '08', icon: <FileText className="w-6 h-6" />, name: 'YC Application', desc: 'Pre-written YC application', sample: 'One-liner, problem, solution, why now — all written for you' },
  { num: '09', icon: <ArrowRightLeft className="w-6 h-6" />, name: 'Pivot Engine', desc: 'Better versions of your idea', sample: '3 pivot options · Recommended: B2B version · Time to revenue: 3 weeks' },
  { num: '10', icon: <CalendarClock className="w-6 h-6" />, name: 'Progress Tracker', desc: 'Your 30-day launch plan', sample: 'Day 14 of 30 · Next action: Send 20 LinkedIn DMs today' },
];

export default function LandingPageClient() {
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const [landingIdea, setLandingIdea] = useState('');
    const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('monthly');

    const toggleFaq = (index: number) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    const jsonLd = {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'launchOS',
      applicationCategory: 'BusinessApplication',
      description: 'AI startup engine for solo founders. Validates ideas, generates MVP plans, pricing strategies, and outreach plans in 2 minutes.',
      url: 'https://www.launchos.co.in',
      offers: [
        { '@type': 'Offer', name: 'Basic Plan', price: '599', priceCurrency: 'INR', billingIncrement: 'P1M' },
        { '@type': 'Offer', name: 'Medium Plan', price: '799', priceCurrency: 'INR', billingIncrement: 'P1M' },
        { '@type': 'Offer', name: 'Advanced Plan', price: '1499', priceCurrency: 'INR', billingIncrement: 'P1M' },
      ],
      operatingSystem: 'Web Browser',
      applicationSubCategory: 'Startup Tools',
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        reviewCount: '127',
      },
    };

    const faqJsonLd = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map(faq => ({
        '@type': 'Question',
        name: faq.q,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.a
        }
      }))
    };

    const personJsonLd = {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: 'Tasmiya Siddiqui',
      jobTitle: 'Founder',
      worksFor: {
        '@type': 'Organization',
        name: 'launchOS',
        url: 'https://www.launchos.co.in',
      },
    };

    const organizationJsonLd = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'launchOS',
      url: 'https://www.launchos.co.in',
      founder: {
        '@type': 'Person',
        name: 'Tasmiya Siddiqui',
      },
    };

    return (
        <div className="bg-surface text-on-surface selection:bg-tertiary/30 selection:text-tertiary-fixed min-h-screen antialiased font-sans">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }} />

            {/* TopNavBar */}
            <nav className="fixed top-0 w-full z-50 bg-slate-900/60 backdrop-blur-xl flex justify-between items-center h-16 px-8 max-w-full shadow-[0px_4px_12px_rgba(0,0,0,0.2)]">
                <div className="flex items-center gap-8">
                    <span className="text-xl font-bold tracking-tighter text-slate-100 font-headline">launchOS</span>
                    <div className="hidden md:flex gap-6 items-center">
                        <Link href="/dashboard" className="text-slate-400 font-medium hover:text-slate-200 transition-colors duration-200 font-body text-sm">Dashboard</Link>
                        <Link href="/projects" className="text-slate-400 font-medium hover:text-slate-200 transition-colors duration-200 font-body text-sm">Projects</Link>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <Link href="/login" className="text-slate-400 hover:text-slate-200 transition-colors text-sm font-medium">Log in</Link>
                    <Link href="/login" className="bg-surface-container-high text-slate-200 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-surface-bright transition-all duration-300 scale-95 active:scale-90 border border-outline-variant/20">
                        Start Free
                    </Link>
                </div>
            </nav>

            <main className="relative min-h-screen flex flex-col hero-gradient pt-16">
                
                {/* SECTION 1: HERO */}
                <section className="flex-1 flex flex-col items-center justify-center px-6 text-center py-20 lg:py-32">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-variant/40 border border-outline-variant/10 mb-8">
                        <span className="w-2 h-2 rounded-full bg-tertiary animate-pulse"></span>
                        <span className="text-xs font-label uppercase tracking-widest text-on-surface-variant">Intelligence v2.4 Live</span>
                    </div>
                    <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-on-surface max-w-5xl leading-[0.95] mb-8">
                        From raw idea to <br className="hidden md:inline" /> <span className="text-tertiary">validation</span> in seconds.
                    </h1>
                    <p className="font-body text-lg md:text-xl text-on-surface-variant max-w-2xl leading-relaxed mb-12">
                        The AI-powered operating system for ambitious founders. Go from a raw concept to a fully validated MVP plan, pricing strategy, and outreach roadmap.
                    </p>
                    
                    {/* Centered Input Command Bar */}
                    <div className="w-full max-w-3xl relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-tertiary/20 to-primary/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="relative flex flex-col md:flex-row p-2 bg-surface-container-low rounded-xl border border-outline-variant/15 shadow-[0px_20px_40px_rgba(0,0,0,0.4)]">
                            <div className="flex-1 flex items-center px-4">
                                <Lightbulb className="w-5 h-5 text-outline mr-3" />
                                <input 
                                    className="w-full bg-transparent border-none outline-none focus:ring-0 text-on-surface placeholder:text-on-surface-variant/50 font-body py-4" 
                                    placeholder="Enter your startup idea here..." 
                                    type="text"
                                    value={landingIdea}
                                    onChange={(e) => setLandingIdea(e.target.value)}
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter' && landingIdea.trim()) {
                                            sessionStorage.setItem('pendingIdea', landingIdea.trim());
                                            window.location.href = '/dashboard';
                                        }
                                    }}
                                />
                            </div>
                            <button 
                                onClick={() => {
                                    if (landingIdea.trim()) {
                                        sessionStorage.setItem('pendingIdea', landingIdea.trim());
                                        window.location.href = '/dashboard';
                                    }
                                }}
                                className="button-metallic text-black px-8 py-4 rounded-lg font-headline font-bold text-sm tracking-tight hover:brightness-110 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2"
                            >
                                Analyze Idea
                                <ArrowRight className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                    
                    <p className="font-body text-sm text-on-surface-variant/80 mt-6 mb-2">No credit card required · 1 free analysis</p>
                    <div className="inline-flex flex-wrap justify-center items-center gap-3 px-6 py-2.5 rounded-full bg-surface-container-low/50 border border-outline-variant/15 text-xs md:text-sm text-on-surface-variant font-body shadow-sm">
                        <span>2,847 founders analyzed this week</span>
                        <span className="w-1 h-1 rounded-full bg-outline-variant"></span>
                        <span>4.9/5 from early users</span>
                        <span className="w-1 h-1 rounded-full bg-outline-variant"></span>
                        <span>Built for Indian founders</span>
                    </div>
                </section>

                {/* SECTION 2: HOW IT WORKS */}
                <section className="py-24 px-6 border-t border-outline-variant/10 bg-transparent">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="font-headline font-extrabold text-3xl md:text-4xl lg:text-5xl text-center mb-16 tracking-tight text-on-surface">How launchOS works</h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="bg-surface-container-low/50 p-8 rounded-2xl border border-outline-variant/15 backdrop-blur-sm">
                                <div className="w-12 h-12 bg-tertiary/10 rounded-xl flex items-center justify-center text-tertiary mb-6">
                                    <Search className="w-6 h-6" />
                                </div>
                                <h3 className="font-headline font-bold text-xl mb-3 text-on-surface">Type your idea</h3>
                                <p className="font-body text-on-surface-variant leading-relaxed">One sentence. That is all we need. No forms. No questionnaires. Just your idea.</p>
                            </div>
                            <div className="bg-surface-container-low/50 p-8 rounded-2xl border border-outline-variant/15 backdrop-blur-sm">
                                <div className="w-12 h-12 bg-tertiary/10 rounded-xl flex items-center justify-center text-tertiary mb-6">
                                    <Zap className="w-6 h-6" />
                                </div>
                                <h3 className="font-headline font-bold text-xl mb-3 text-on-surface">10 engines analyze it</h3>
                                <p className="font-body text-on-surface-variant leading-relaxed">Our AI thinks like a market analyst, product strategist, pricing expert, and YC partner — all at once.</p>
                            </div>
                            <div className="bg-surface-container-low/50 p-8 rounded-2xl border border-outline-variant/15 backdrop-blur-sm">
                                <div className="w-12 h-12 bg-tertiary/10 rounded-xl flex items-center justify-center text-tertiary mb-6">
                                    <Target className="w-6 h-6" />
                                </div>
                                <h3 className="font-headline font-bold text-xl mb-3 text-on-surface">Get your complete launch plan</h3>
                                <p className="font-body text-on-surface-variant leading-relaxed">Niche, validation, MVP, pricing, outreach, competitors, investor score — ready in under 2 minutes.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SECTION 3: WHAT YOU GET */}
                <section className="py-24 px-6 border-t border-outline-variant/10 bg-transparent">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="font-headline font-extrabold text-3xl md:text-4xl lg:text-5xl text-center mb-16 tracking-tight text-on-surface">10 engines. One idea. Complete launch plan.</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
                            {engines.map((engine, idx) => (
                                <div key={idx} className="bg-surface-container-low/50 p-6 rounded-2xl border border-outline-variant/15 flex flex-col hover:border-tertiary/30 transition-all duration-300 backdrop-blur-sm">
                                    <div className="flex justify-between items-start mb-4">
                                        <span className="text-tertiary font-mono font-bold text-sm">{engine.num}</span>
                                        <div className="text-on-surface-variant/70">{engine.icon}</div>
                                    </div>
                                    <h3 className="font-headline font-bold text-on-surface mb-2">{engine.name}</h3>
                                    <p className="font-body text-on-surface-variant text-sm mb-6 flex-1">{engine.desc}</p>
                                    <div className="p-3 bg-surface-container/50 rounded-lg border border-outline-variant/10">
                                        <p className="text-[11px] text-on-surface-variant font-mono leading-relaxed">{engine.sample}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* SECTION 4: COST COMPARISON */}
                <section className="py-24 px-6 border-t border-outline-variant/10 bg-transparent">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="font-headline font-extrabold text-3xl md:text-4xl lg:text-5xl text-center mb-16 tracking-tight text-on-surface">What founders normally spend to get this</h2>
                        
                        <div className="flex flex-col lg:flex-row gap-8">
                            <div className="flex-1 bg-surface-container-low/50 p-8 rounded-3xl border border-outline-variant/15 backdrop-blur-sm">
                                <h3 className="font-headline font-bold text-xl mb-8 text-on-surface">Doing it the old way</h3>
                                <div className="space-y-4">
                                    <div className="grid grid-cols-3 text-sm font-bold text-on-surface-variant/70 pb-2 border-b border-outline-variant/15">
                                        <span>Tool</span>
                                        <span>What it does</span>
                                        <span className="text-right">Monthly cost</span>
                                    </div>
                                    {[
                                        { tool: "ValidatorAI / IdeaProof", does: "Idea + niche scoring", cost: "$29/month" },
                                        { tool: "Typeform", does: "Customer surveys", cost: "$50/month" },
                                        { tool: "Bubble.io", does: "Building your MVP", cost: "$119/month" },
                                        { tool: "Apollo.io", does: "Finding leads", cost: "$79/month" },
                                        { tool: "PhantomBuster", does: "Outreach automation", cost: "$70/month" },
                                        { tool: "Notion", does: "Progress tracking", cost: "$16/month" },
                                        { tool: "Hiring a consultant", does: "Pricing strategy", cost: "$300/session" },
                                        { tool: "Hiring a consultant", does: "Competitor research", cost: "$200/session" },
                                        { tool: "Manual research", does: "Investor preparation", cost: "$150/session" },
                                    ].map((item, i) => (
                                        <div key={i} className="grid grid-cols-3 text-sm text-on-surface py-2 border-b border-outline-variant/10 last:border-0">
                                            <span>{item.tool}</span>
                                            <span className="text-on-surface-variant/80">{item.does}</span>
                                            <span className="text-right">{item.cost}</span>
                                        </div>
                                    ))}
                                    <div className="grid grid-cols-3 text-lg font-bold text-on-surface pt-4 mt-2 border-t border-outline-variant/15">
                                        <span>TOTAL</span>
                                        <span></span>
                                        <span className="text-right">$1,013+/month</span>
                                    </div>
                                </div>
                                <p className="text-sm text-on-surface-variant/80 mt-8 bg-surface-container/50 p-4 rounded-xl border border-outline-variant/10">
                                    And there is NO dedicated pricing tool for founders. No tool for YC application writing. No tool for pivot suggestions. You were paying over $1,000/month for an incomplete solution.
                                </p>
                            </div>

                            <div className="lg:w-[400px] bg-gradient-to-br from-tertiary/25 via-surface-container/50 to-surface-container-low/80 p-10 rounded-3xl border border-tertiary/30 text-on-surface flex flex-col justify-center shadow-[0px_0px_50px_rgba(103,156,255,0.15)] backdrop-blur-sm">
                                <h3 className="font-headline font-extrabold text-3xl mb-6 tracking-tight text-on-surface">launchOS replaces all of it</h3>
                                <ul className="space-y-4 mb-10 text-lg font-medium font-body text-on-surface-variant">
                                    <li className="flex items-center gap-3 text-on-surface"><CheckCircle2 className="w-5 h-5 text-tertiary" /> Starting at ₹599/month</li>
                                    <li className="flex items-center gap-3 text-on-surface"><CheckCircle2 className="w-5 h-5 text-tertiary" /> That is 95% cheaper</li>
                                    <li className="flex items-center gap-3 text-on-surface"><CheckCircle2 className="w-5 h-5 text-tertiary" /> And it covers what they missed.</li>
                                </ul>
                                <Link href="/login" className="button-metallic text-on-primary px-8 py-4 rounded-xl font-headline font-bold text-center hover:brightness-110 active:scale-95 transition-all duration-300 w-full shadow-lg">
                                    Start Free →
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SECTION 5: PRICING PLANS */}
                <section className="py-24 px-6 border-t border-outline-variant/10 bg-transparent" id="pricing">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="font-headline font-extrabold text-3xl md:text-4xl lg:text-5xl tracking-tight mb-4 text-on-surface">Simple, honest pricing</h2>
                            <p className="font-body text-on-surface-variant/80">Cancel anytime. No hidden fees.</p>
                        </div>

                        {/* Billing Period Toggle */}
                        <div className="flex flex-col items-center gap-2 bg-surface-container-low/30 border border-outline-variant/10 rounded-2xl p-4 max-w-md mx-auto shadow-sm mb-16 backdrop-blur-sm">
                            <div className="inline-flex bg-surface-container border border-white/5 rounded-full p-1 relative shadow-inner">
                                <button 
                                    onClick={() => setBillingPeriod('monthly')}
                                    className={`px-5 py-2 rounded-full text-sm font-bold tracking-wide transition relative z-10 ${billingPeriod === 'monthly' ? 'bg-tertiary text-white shadow' : 'text-on-surface-variant hover:text-white'}`}
                                >
                                    Monthly
                                </button>
                                <button 
                                    onClick={() => setBillingPeriod('yearly')}
                                    className={`px-5 py-2 rounded-full text-sm font-bold tracking-wide transition relative z-10 flex items-center gap-1.5 ${billingPeriod === 'yearly' ? 'bg-tertiary text-white shadow' : 'text-on-surface-variant hover:text-white'}`}
                                >
                                    Yearly
                                    <span className="bg-green-500/20 text-green-400 text-[10px] px-2 py-0.5 rounded-full font-extrabold uppercase tracking-wider">
                                        Save ~15%
                                    </span>
                                </button>
                            </div>
                            <p className="text-xs text-tertiary/75 font-semibold text-center mt-1">
                                🚀 Build for 12 months, not 12 days. Serious founders choose yearly.
                            </p>
                            <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 text-[11px] text-on-surface-variant/70 font-medium mt-1">
                                <span>✅ Save up to 16%</span>
                                <span>✅ Priority access</span>
                                <span>✅ Early feature releases</span>
                            </div>
                        </div>
                        
                        <div className="grid md:grid-cols-4 gap-6">
                            {/* FREE */}
                            <div className="bg-surface-container-low/50 p-6 rounded-3xl border border-outline-variant/15 flex flex-col backdrop-blur-sm">
                                <h3 className="font-headline font-bold text-xl mb-2 text-on-surface">FREE</h3>
                                <p className="font-headline text-3xl font-black mb-1 text-on-surface">₹0<span className="text-sm text-on-surface-variant/60 font-normal">/month</span></p>
                                <p className="font-body text-sm text-on-surface-variant/80 mb-6">Try before you commit</p>
                                <ul className="space-y-3 mb-8 flex-1 text-sm font-body">
                                    <li className="flex items-center gap-2 text-on-surface"><CheckCircle2 className="w-4 h-4 text-tertiary" /> 1 analysis total</li>
                                    <li className="flex items-center gap-2 text-on-surface"><CheckCircle2 className="w-4 h-4 text-tertiary" /> Niche engine (partial)</li>
                                    <li className="flex items-center gap-2 text-on-surface"><CheckCircle2 className="w-4 h-4 text-tertiary" /> Validation engine (partial)</li>
                                    <li className="flex items-center gap-2 text-on-surface"><CheckCircle2 className="w-4 h-4 text-tertiary" /> MVP engine (partial)</li>
                                    <li className="flex items-center gap-2 text-on-surface-variant/40"><Lock className="w-4 h-4" /> Pricing engine locked</li>
                                    <li className="flex items-center gap-2 text-on-surface-variant/40"><Lock className="w-4 h-4" /> Outreach engine locked</li>
                                    <li className="flex items-center gap-2 text-on-surface-variant/40"><Lock className="w-4 h-4" /> Competitor engine locked</li>
                                    <li className="flex items-center gap-2 text-on-surface-variant/40"><Lock className="w-4 h-4" /> Investor engine locked</li>
                                    <li className="flex items-center gap-2 text-on-surface-variant/40"><Lock className="w-4 h-4" /> YC application locked</li>
                                    <li className="flex items-center gap-2 text-on-surface-variant/40"><Lock className="w-4 h-4" /> Pivot engine locked</li>
                                    <li className="flex items-center gap-2 text-on-surface-variant/40"><Lock className="w-4 h-4" /> Progress tracker locked</li>
                                    <li className="flex items-center gap-2 text-on-surface-variant/40"><Lock className="w-4 h-4" /> No export</li>
                                </ul>
                                <Link href="/login" className="w-full text-center py-3 rounded-xl bg-surface-container hover:bg-surface-container-high border border-outline-variant/15 text-on-surface font-headline font-bold transition-all duration-300">Start Free</Link>
                            </div>

                            {/* BASIC */}
                            <div className="bg-surface-container-low/50 p-6 rounded-3xl border border-outline-variant/15 flex flex-col backdrop-blur-sm">
                                <h3 className="font-headline font-bold text-xl mb-2 text-on-surface">BASIC</h3>
                                {billingPeriod === 'yearly' ? (
                                    <div className="mb-2">
                                        <div className="flex items-baseline gap-2">
                                            <p className="font-headline text-3xl font-black text-on-surface">₹6,299</p>
                                            <span className="text-xs text-on-surface-variant/50 line-through font-normal">₹7,188</span>
                                        </div>
                                        <p className="text-[11px] text-green-400 font-bold bg-green-500/10 px-2 py-0.5 rounded-full inline-block mt-1">Save ₹889 (~12%)</p>
                                        <p className="text-xs text-on-surface-variant/70 font-semibold mt-1">(₹525/mo billed yearly)</p>
                                    </div>
                                ) : (
                                    <div className="mb-2">
                                        <p className="font-headline text-3xl font-black text-on-surface">₹599<span className="text-sm text-on-surface-variant/60 font-normal">/month</span></p>
                                        <p className="font-body text-sm text-on-surface-variant/80">Founder Discovery & Structuring</p>
                                    </div>
                                )}
                                <p className="text-xs font-mono text-tertiary mb-6 bg-tertiary/10 inline-block px-2 py-1 rounded w-fit mt-1">
                                    {billingPeriod === 'yearly' ? '36 Runs (3600 Credits)' : '3 Runs (300 Credits)'}
                                </p>
                                <ul className="space-y-3 mb-8 flex-1 text-sm font-body">
                                    <li className="flex items-center gap-2 text-on-surface"><CheckCircle2 className="w-4 h-4 text-tertiary" /> {billingPeriod === 'yearly' ? '36 ideas analyzed' : '3 ideas analyzed'}</li>
                                    <li className="flex items-center gap-2 text-on-surface"><CheckCircle2 className="w-4 h-4 text-tertiary" /> Niche engine (full)</li>
                                    <li className="flex items-center gap-2 text-on-surface"><CheckCircle2 className="w-4 h-4 text-tertiary" /> Validation engine (partial)</li>
                                    <li className="flex items-center gap-2 text-on-surface"><CheckCircle2 className="w-4 h-4 text-tertiary" /> MVP engine (partial)</li>
                                    <li className="flex items-center gap-2 text-on-surface"><CheckCircle2 className="w-4 h-4 text-tertiary" /> Pricing engine (partial)</li>
                                    <li className="flex items-center gap-2 text-on-surface"><CheckCircle2 className="w-4 h-4 text-tertiary" /> Progress engine (full)</li>
                                    <li className="flex items-center gap-2 text-on-surface-variant/40"><Lock className="w-4 h-4" /> Outreach engine locked</li>
                                    <li className="flex items-center gap-2 text-on-surface-variant/40"><Lock className="w-4 h-4" /> Competitor engine locked</li>
                                    <li className="flex items-center gap-2 text-on-surface-variant/40"><Lock className="w-4 h-4" /> Investor engine locked</li>
                                    <li className="flex items-center gap-2 text-on-surface-variant/40"><Lock className="w-4 h-4" /> YC application locked</li>
                                    <li className="flex items-center gap-2 text-on-surface-variant/40"><Lock className="w-4 h-4" /> Pivot engine locked</li>
                                    <li className="flex items-center gap-2 text-on-surface-variant/40"><Lock className="w-4 h-4" /> No PDF Export</li>
                                </ul>
                                <Link href="/login" className="w-full text-center py-3 rounded-xl bg-surface-container hover:bg-surface-container-high border border-outline-variant/15 text-on-surface font-headline font-bold transition-all duration-300">Get Basic</Link>
                            </div>

                            {/* MEDIUM */}
                            <div className="bg-surface-container-low/50 p-6 rounded-3xl border border-tertiary/50 flex flex-col relative shadow-[0_0_40px_rgba(103,156,255,0.15)] transform md:-translate-y-4 backdrop-blur-sm">
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-tertiary text-on-tertiary text-[10px] font-headline font-bold px-3 py-1 rounded-full uppercase tracking-widest whitespace-nowrap shadow-md">Most Popular</div>
                                <h3 className="font-headline font-bold text-xl mb-2 text-tertiary">MEDIUM</h3>
                                {billingPeriod === 'yearly' ? (
                                    <div className="mb-2">
                                        <div className="flex items-baseline gap-2">
                                            <p className="font-headline text-3xl font-black text-on-surface">₹8,199</p>
                                            <span className="text-xs text-on-surface-variant/50 line-through font-normal">₹9,588</span>
                                        </div>
                                        <p className="text-[11px] text-green-400 font-bold bg-green-500/10 px-2 py-0.5 rounded-full inline-block mt-1">Save ₹1,389 (~14%)</p>
                                        <p className="text-xs text-on-surface-variant/70 font-semibold mt-1">(₹683/mo billed yearly)</p>
                                    </div>
                                ) : (
                                    <div className="mb-2">
                                        <p className="font-headline text-3xl font-black text-on-surface">₹799<span className="text-sm text-on-surface-variant/60 font-normal">/month</span></p>
                                        <p className="font-body text-sm text-on-surface-variant/80">Business Building & Growth Intelligence</p>
                                    </div>
                                )}
                                <p className="text-xs font-mono text-tertiary mb-6 bg-tertiary/10 inline-block px-2 py-1 rounded w-fit mt-1">
                                    {billingPeriod === 'yearly' ? '60 Runs (6000 Credits)' : '5 Runs (500 Credits)'}
                                </p>
                                <ul className="space-y-3 mb-8 flex-1 text-sm font-body">
                                    <li className="flex items-center gap-2 text-on-surface"><CheckCircle2 className="w-4 h-4 text-tertiary" /> {billingPeriod === 'yearly' ? '60 ideas analyzed' : '5 ideas analyzed'}</li>
                                    <li className="flex items-center gap-2 text-on-surface"><CheckCircle2 className="w-4 h-4 text-tertiary" /> Niche engine (full)</li>
                                    <li className="flex items-center gap-2 text-on-surface"><CheckCircle2 className="w-4 h-4 text-tertiary" /> Validation engine (full)</li>
                                    <li className="flex items-center gap-2 text-on-surface"><CheckCircle2 className="w-4 h-4 text-tertiary" /> MVP engine (full)</li>
                                    <li className="flex items-center gap-2 text-on-surface"><CheckCircle2 className="w-4 h-4 text-tertiary" /> Pricing engine (full)</li>
                                    <li className="flex items-center gap-2 text-on-surface"><CheckCircle2 className="w-4 h-4 text-tertiary" /> Progress engine (full)</li>
                                    <li className="flex items-center gap-2 text-on-surface"><CheckCircle2 className="w-4 h-4 text-tertiary" /> Outreach engine (partial)</li>
                                    <li className="flex items-center gap-2 text-on-surface"><CheckCircle2 className="w-4 h-4 text-tertiary" /> Competitor engine (partial)</li>
                                    <li className="flex items-center gap-2 text-on-surface-variant/40"><Lock className="w-4 h-4" /> Investor engine locked</li>
                                    <li className="flex items-center gap-2 text-on-surface-variant/40"><Lock className="w-4 h-4" /> YC application locked</li>
                                    <li className="flex items-center gap-2 text-on-surface-variant/40"><Lock className="w-4 h-4" /> Pivot engine locked</li>
                                    <li className="flex items-center gap-2 text-on-surface-variant/40"><Lock className="w-4 h-4" /> No PDF Export</li>
                                </ul>
                                <Link href="/login" className="w-full text-center py-3 rounded-xl button-metallic text-on-primary font-headline font-bold hover:brightness-110 transition-all duration-300">Get Medium</Link>
                            </div>

                            {/* PREMIUM */}
                            <div className="bg-surface-container-low/50 p-6 rounded-3xl border border-outline-variant/15 flex flex-col backdrop-blur-sm">
                                <h3 className="font-headline font-bold text-xl mb-2 text-on-surface">PREMIUM</h3>
                                {billingPeriod === 'yearly' ? (
                                    <div className="mb-2">
                                        <div className="flex items-baseline gap-2">
                                            <p className="font-headline text-3xl font-black text-on-surface">₹14,999</p>
                                            <span className="text-xs text-on-surface-variant/50 line-through font-normal">₹17,988</span>
                                        </div>
                                        <p className="text-[11px] text-green-400 font-bold bg-green-500/10 px-2 py-0.5 rounded-full inline-block mt-1">Save ₹2,989 (~16%)</p>
                                        <p className="text-xs text-on-surface-variant/70 font-semibold mt-1">(₹1,249/mo billed yearly)</p>
                                    </div>
                                ) : (
                                    <div className="mb-2">
                                        <p className="font-headline text-3xl font-black text-on-surface">₹1,499<span className="text-sm text-on-surface-variant/60 font-normal">/month</span></p>
                                        <p className="font-body text-sm text-on-surface-variant/80">Full Founder Operating System</p>
                                    </div>
                                )}
                                <p className="text-xs font-mono text-tertiary mb-6 bg-tertiary/10 inline-block px-2 py-1 rounded w-fit mt-1">
                                    {billingPeriod === 'yearly' ? 'Unlimited Runs (3000 Yearly Credits)' : 'Unlimited Runs (250 Monthly Credits)'}
                                </p>
                                <ul className="space-y-3 mb-8 flex-1 text-sm font-body">
                                    <li className="flex items-center gap-2 text-on-surface"><CheckCircle2 className="w-4 h-4 text-tertiary" /> Unlimited idea runs</li>
                                    <li className="flex items-center gap-2 text-on-surface"><CheckCircle2 className="w-4 h-4 text-tertiary" /> All 10 engines fully unlocked</li>
                                    <li className="flex items-center gap-2 text-on-surface"><CheckCircle2 className="w-4 h-4 text-tertiary" /> Full outreach engine</li>
                                    <li className="flex items-center gap-2 text-on-surface"><CheckCircle2 className="w-4 h-4 text-tertiary" /> Full competitor engine</li>
                                    <li className="flex items-center gap-2 text-on-surface"><CheckCircle2 className="w-4 h-4 text-tertiary" /> Full investor engine</li>
                                    <li className="flex items-center gap-2 text-on-surface"><CheckCircle2 className="w-4 h-4 text-tertiary" /> YC application builder</li>
                                    <li className="flex items-center gap-2 text-on-surface"><CheckCircle2 className="w-4 h-4 text-tertiary" /> Pivot engine & strategy</li>
                                    <li className="flex items-center gap-2 text-on-surface"><CheckCircle2 className="w-4 h-4 text-tertiary" /> Progress engine & streak tracker</li>
                                    <li className="flex items-center gap-2 text-on-surface"><CheckCircle2 className="w-4 h-4 text-tertiary" /> Export PDF reports</li>
                                    <li className="flex items-center gap-2 text-on-surface"><CheckCircle2 className="w-4 h-4 text-tertiary" /> {billingPeriod === 'yearly' ? '3000 credits/yr for refreshes' : '250 credits/mo for refreshes'}</li>
                                </ul>
                                <Link href="/login" className="w-full text-center py-3 rounded-xl bg-surface-container hover:bg-surface-container-high border border-outline-variant/15 text-on-surface font-headline font-bold transition-all duration-300">Get Premium</Link>
                            </div>
                        </div>

                        <div className="mt-12 p-4 bg-surface-container-low/50 rounded-xl border border-outline-variant/15 text-center text-sm font-body text-on-surface-variant/80 max-w-2xl mx-auto backdrop-blur-sm">
                            Your cost per analysis: ₹0.83 · Our cost to run it: ₹0.83 · Our margin funds the team that improves it daily.
                        </div>
                    </div>
                </section>

                {/* SECTION 6: FAQ */}
                <section className="py-24 px-6 border-t border-outline-variant/10 bg-transparent">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="font-headline font-extrabold text-3xl md:text-4xl lg:text-5xl text-center mb-16 tracking-tight text-on-surface">Frequently asked questions</h2>
                        <div className="space-y-4">
                            {faqs.map((faq, idx) => (
                                <div key={idx} className="bg-surface-container-low/50 border border-outline-variant/15 rounded-2xl overflow-hidden transition-all duration-300 backdrop-blur-sm">
                                    <button 
                                        onClick={() => toggleFaq(idx)}
                                        className="w-full p-6 text-left flex justify-between items-center hover:bg-surface-container-high/30 transition-colors"
                                    >
                                        <span className="font-headline font-bold text-on-surface pr-8">{faq.q}</span>
                                        {openFaq === idx ? 
                                            <ChevronUp className="w-5 h-5 text-on-surface-variant/80 flex-shrink-0" /> : 
                                            <ChevronDown className="w-5 h-5 text-on-surface-variant/80 flex-shrink-0" />
                                        }
                                    </button>
                                    <div className={`px-6 pb-6 font-body text-on-surface-variant leading-relaxed transition-all duration-300 ${openFaq === idx ? 'block' : 'hidden'}`}>
                                        {faq.a}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* SECTION 7: FINAL CTA */}
                <section className="py-32 px-6 border-t border-outline-variant/10 bg-transparent text-center">
                    <div className="max-w-4xl mx-auto bg-surface-container/50 p-16 rounded-[2rem] border border-outline-variant/15 relative overflow-hidden backdrop-blur-md">
                        <div className="absolute top-0 right-0 -mr-32 -mt-32 w-96 h-96 bg-tertiary/15 rounded-full blur-3xl pointer-events-none animate-pulse"></div>
                        <div className="absolute bottom-0 left-0 -ml-32 -mb-32 w-96 h-96 bg-tertiary/5 rounded-full blur-3xl pointer-events-none"></div>
                        
                        <div className="relative z-10">
                            <h2 className="font-headline font-extrabold text-4xl md:text-5xl mb-6 tracking-tight text-on-surface">Stop guessing. Start building.</h2>
                            <p className="font-body text-xl text-on-surface-variant/80 mb-10 max-w-2xl mx-auto">
                                3 free analyses. No credit card. <br/>2 minutes to your first launch plan.
                            </p>
                            <Link href="/login" className="button-metallic text-black px-12 py-5 rounded-xl font-headline font-bold text-lg tracking-wide hover:brightness-110 active:scale-95 transition-all inline-block mb-6 shadow-xl">
                                Analyze My Idea →
                            </Link>
                            <p className="font-body text-sm text-on-surface-variant/80">Join 2,847 founders who already used launchOS</p>
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <footer className="py-8 border-t border-outline-variant/10 bg-transparent">
                    <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-sm font-body text-on-surface-variant/80">
                        <p>© {new Date().getFullYear()} launchOS. All rights reserved.</p>
                        <div className="flex gap-6 mt-4 md:mt-0">
                            <Link href="/docs" className="hover:text-on-surface transition-colors">Documentation</Link>
                            <Link href="/support" className="hover:text-on-surface transition-colors">Support</Link>
                        </div>
                    </div>
                </footer>
            </main>
        </div>
    )
}
