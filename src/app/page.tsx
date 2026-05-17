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
    a: "Credits are your usage currency inside launchOS. Each full analysis costs 100 credits. Rerunning an analysis costs 100 credits. Single engine refresh costs 20 credits. Credits reset every month on your billing date. Basic plan gets 500 credits, Medium gets 2,000, Advanced gets 5,000."
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

export default function LandingPage() {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    const toggleFaq = (index: number) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    const jsonLd = {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'launchOS',
      applicationCategory: 'BusinessApplication',
      description: 'AI startup engine for solo founders. Validates ideas, generates MVP plans, pricing strategies, and outreach plans in 2 minutes.',
      url: 'https://launchos.io',
      offers: [
        { '@type': 'Offer', name: 'Basic Plan', price: '499', priceCurrency: 'INR', billingIncrement: 'P1M' },
        { '@type': 'Offer', name: 'Medium Plan', price: '799', priceCurrency: 'INR', billingIncrement: 'P1M' },
        { '@type': 'Offer', name: 'Advanced Plan', price: '999', priceCurrency: 'INR', billingIncrement: 'P1M' },
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

    return (
        <div className="bg-[#0A0A0A] text-[#FAFAFA] selection:bg-[#60A5FA]/30 selection:text-[#60A5FA] min-h-screen antialiased font-sans">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

            {/* TopNavBar */}
            <nav className="fixed top-0 w-full z-50 bg-[#0A0A0A]/80 backdrop-blur-xl flex justify-between items-center h-16 px-8 max-w-full border-b border-white/10">
                <div className="flex items-center gap-8">
                    <span className="text-xl font-bold tracking-tighter text-white font-headline">launchOS</span>
                </div>
                <div className="flex items-center gap-4">
                    <Link href="/login" className="text-[#888888] hover:text-white transition-colors text-sm font-medium">Log in</Link>
                    <Link href="/login" className="bg-[#60A5FA] text-black px-4 py-2 rounded-lg text-sm font-bold hover:bg-[#60A5FA]/90 transition-all">
                        Start Free
                    </Link>
                </div>
            </nav>

            <main className="relative min-h-screen flex flex-col pt-16">
                
                {/* SECTION 1: HERO */}
                <section className="flex flex-col items-center justify-center px-6 text-center py-24 lg:py-32 bg-[#050A15]">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-medium text-blue-400 mb-8">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                        Intelligence v2.4 Live
                    </div>
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight max-w-4xl leading-[1.1] mb-8">
                        From raw idea to <br className="hidden md:block" /> <span className="text-blue-400">validation</span> in seconds.
                    </h1>
                    <p className="text-xl text-[#888888] max-w-3xl leading-relaxed mb-12">
                        The AI-powered operating system for ambitious founders. Go from a raw concept to a fully validated MVP plan, pricing strategy, and outreach roadmap.
                    </p>
                    
                    <div className="w-full max-w-2xl relative flex items-center bg-[#111827] border border-white/10 rounded-2xl p-2 shadow-2xl">
                        <div className="pl-4 pr-3 text-blue-400">
                            <Lightbulb className="w-5 h-5" />
                        </div>
                        <input 
                            type="text" 
                            placeholder="Enter your startup idea here..." 
                            className="flex-1 bg-transparent border-none text-white outline-none placeholder:text-[#888888] text-lg py-3"
                        />
                        <button className="bg-gradient-to-r from-gray-100 to-gray-300 text-black px-6 py-3 rounded-xl font-bold text-sm tracking-wide hover:opacity-90 transition-opacity flex items-center gap-2">
                            Analyze Idea <ArrowRight className="w-4 h-4" />
                        </button>
                    </div>
                </section>

                {/* SECTION 2: HOW IT WORKS */}
                <section className="py-24 px-6 border-t border-white/5 bg-[#0A0A0A]">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 tracking-tight">How launchOS works</h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="bg-[#111111] p-8 rounded-2xl border border-white/10">
                                <div className="w-12 h-12 bg-[#60A5FA]/10 rounded-xl flex items-center justify-center text-[#60A5FA] mb-6">
                                    <Search className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold mb-3">Type your idea</h3>
                                <p className="text-[#888888] leading-relaxed">One sentence. That is all we need. No forms. No questionnaires. Just your idea.</p>
                            </div>
                            <div className="bg-[#111111] p-8 rounded-2xl border border-white/10">
                                <div className="w-12 h-12 bg-[#60A5FA]/10 rounded-xl flex items-center justify-center text-[#60A5FA] mb-6">
                                    <Zap className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold mb-3">10 engines analyze it</h3>
                                <p className="text-[#888888] leading-relaxed">Our AI thinks like a market analyst, product strategist, pricing expert, and YC partner — all at once.</p>
                            </div>
                            <div className="bg-[#111111] p-8 rounded-2xl border border-white/10">
                                <div className="w-12 h-12 bg-[#60A5FA]/10 rounded-xl flex items-center justify-center text-[#60A5FA] mb-6">
                                    <Target className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold mb-3">Get your complete launch plan</h3>
                                <p className="text-[#888888] leading-relaxed">Niche, validation, MVP, pricing, outreach, competitors, investor score — ready in under 2 minutes.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SECTION 3: WHAT YOU GET */}
                <section className="py-24 px-6 border-t border-white/5 bg-[#0A0A0A]">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 tracking-tight">10 engines. One idea. Complete launch plan.</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
                            {engines.map((engine, idx) => (
                                <div key={idx} className="bg-[#111111] p-6 rounded-2xl border border-white/10 flex flex-col hover:border-[#60A5FA]/30 transition-colors">
                                    <div className="flex justify-between items-start mb-4">
                                        <span className="text-[#60A5FA] font-mono font-bold text-sm">{engine.num}</span>
                                        <div className="text-[#FAFAFA]/50">{engine.icon}</div>
                                    </div>
                                    <h3 className="font-bold mb-2">{engine.name}</h3>
                                    <p className="text-[#888888] text-sm mb-6 flex-1">{engine.desc}</p>
                                    <div className="p-3 bg-[#0A0A0A] rounded-lg border border-white/5">
                                        <p className="text-[11px] text-[#888888] font-mono leading-relaxed">{engine.sample}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* SECTION 4: COST COMPARISON */}
                <section className="py-24 px-6 border-t border-white/5 bg-[#0A0A0A]">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 tracking-tight">What founders normally spend to get this</h2>
                        
                        <div className="flex flex-col lg:flex-row gap-8">
                            <div className="flex-1 bg-[#111111] p-8 rounded-3xl border border-white/10">
                                <h3 className="text-xl font-bold mb-8 text-[#FAFAFA]">Doing it the old way</h3>
                                <div className="space-y-4">
                                    <div className="grid grid-cols-3 text-sm font-bold text-[#888888] pb-2 border-b border-white/10">
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
                                        <div key={i} className="grid grid-cols-3 text-sm text-[#FAFAFA] py-2 border-b border-white/5 last:border-0">
                                            <span>{item.tool}</span>
                                            <span className="text-[#888888]">{item.does}</span>
                                            <span className="text-right">{item.cost}</span>
                                        </div>
                                    ))}
                                    <div className="grid grid-cols-3 text-lg font-bold text-[#FAFAFA] pt-4 mt-2 border-t border-white/20">
                                        <span>TOTAL</span>
                                        <span></span>
                                        <span className="text-right">$1,013+/month</span>
                                    </div>
                                </div>
                                <p className="text-sm text-[#888888] mt-8 bg-[#0A0A0A] p-4 rounded-xl border border-white/5">
                                    And there is NO dedicated pricing tool for founders. No tool for YC application writing. No tool for pivot suggestions. You were paying over $1,000/month for an incomplete solution.
                                </p>
                            </div>

                            <div className="lg:w-[400px] bg-[#60A5FA] p-10 rounded-3xl text-black flex flex-col justify-center">
                                <h3 className="text-3xl font-black mb-6 tracking-tight">launchOS replaces all of it</h3>
                                <ul className="space-y-4 mb-10 text-lg font-medium">
                                    <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5" /> Starting at ₹499/month</li>
                                    <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5" /> That is 95% cheaper</li>
                                    <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5" /> And it covers what they all missed.</li>
                                </ul>
                                <Link href="/login" className="bg-black text-white px-8 py-4 rounded-xl font-bold text-center hover:bg-black/80 transition-colors w-full">
                                    Start Free →
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SECTION 5: PRICING PLANS */}
                <section className="py-24 px-6 border-t border-white/5 bg-[#0A0A0A]" id="pricing">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Simple, honest pricing</h2>
                            <p className="text-[#888888]">Cancel anytime. No hidden fees.</p>
                        </div>
                        
                        <div className="grid md:grid-cols-4 gap-6">
                            {/* FREE */}
                            <div className="bg-[#111111] p-6 rounded-3xl border border-white/10 flex flex-col">
                                <h3 className="font-bold text-xl mb-2">FREE</h3>
                                <p className="text-3xl font-black mb-1">₹0<span className="text-sm text-[#888888] font-normal">/month</span></p>
                                <p className="text-sm text-[#888888] mb-6">Try before you commit</p>
                                <ul className="space-y-3 mb-8 flex-1 text-sm">
                                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> 3 analyses total</li>
                                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Niche engine (partial)</li>
                                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Validation engine (partial)</li>
                                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> MVP engine (partial)</li>
                                    <li className="flex items-center gap-2 text-[#888888]"><Lock className="w-4 h-4" /> Pricing engine locked</li>
                                    <li className="flex items-center gap-2 text-[#888888]"><Lock className="w-4 h-4" /> Outreach engine locked</li>
                                    <li className="flex items-center gap-2 text-[#888888]"><Lock className="w-4 h-4" /> Competitor engine locked</li>
                                    <li className="flex items-center gap-2 text-[#888888]"><Lock className="w-4 h-4" /> Investor engine locked</li>
                                    <li className="flex items-center gap-2 text-[#888888]"><Lock className="w-4 h-4" /> YC application locked</li>
                                    <li className="flex items-center gap-2 text-[#888888]"><Lock className="w-4 h-4" /> Pivot engine locked</li>
                                    <li className="flex items-center gap-2 text-[#888888]"><Lock className="w-4 h-4" /> Progress tracker locked</li>
                                    <li className="flex items-center gap-2 text-[#888888]"><Lock className="w-4 h-4" /> No export</li>
                                </ul>
                                <Link href="/login" className="w-full text-center py-3 rounded-xl bg-[#222] text-white font-bold hover:bg-[#333] transition-colors">Start Free</Link>
                            </div>

                            {/* BASIC */}
                            <div className="bg-[#111111] p-6 rounded-3xl border border-white/10 flex flex-col">
                                <h3 className="font-bold text-xl mb-2">BASIC</h3>
                                <p className="text-3xl font-black mb-1">₹499<span className="text-sm text-[#888888] font-normal">/month</span></p>
                                <p className="text-sm text-[#888888] mb-2">For founders exploring ideas</p>
                                <p className="text-xs font-mono text-[#60A5FA] mb-6 bg-[#60A5FA]/10 inline-block px-2 py-1 rounded w-fit">500 credits/mo</p>
                                <ul className="space-y-3 mb-8 flex-1 text-sm">
                                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> 3 ideas per month</li>
                                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Niche engine (partial)</li>
                                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Validation engine (partial)</li>
                                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> MVP engine (partial)</li>
                                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Pricing engine (partial)</li>
                                    <li className="flex items-center gap-2 text-[#888888]"><Lock className="w-4 h-4" /> Outreach engine locked</li>
                                    <li className="flex items-center gap-2 text-[#888888]"><Lock className="w-4 h-4" /> Competitor engine locked</li>
                                    <li className="flex items-center gap-2 text-[#888888]"><Lock className="w-4 h-4" /> Investor engine locked</li>
                                    <li className="flex items-center gap-2 text-[#888888]"><Lock className="w-4 h-4" /> YC application locked</li>
                                    <li className="flex items-center gap-2 text-[#888888]"><Lock className="w-4 h-4" /> Pivot engine locked</li>
                                    <li className="flex items-center gap-2 text-[#888888]"><Lock className="w-4 h-4" /> Progress tracker locked</li>
                                    <li className="flex items-center gap-2 text-[#888888]"><Lock className="w-4 h-4" /> No export</li>
                                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> 1 rerun allowed</li>
                                </ul>
                                <Link href="/login" className="w-full text-center py-3 rounded-xl bg-[#222] text-white font-bold hover:bg-[#333] transition-colors">Get Basic</Link>
                            </div>

                            {/* MEDIUM */}
                            <div className="bg-[#111111] p-6 rounded-3xl border border-[#60A5FA]/50 flex flex-col relative shadow-[0_0_40px_rgba(200,241,53,0.1)] transform md:-translate-y-4">
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#60A5FA] text-black text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest whitespace-nowrap">Most Popular</div>
                                <h3 className="font-bold text-xl mb-2 text-[#60A5FA]">MEDIUM</h3>
                                <p className="text-3xl font-black mb-1">₹799<span className="text-sm text-[#888888] font-normal">/month</span></p>
                                <p className="text-sm text-[#888888] mb-2">For founders ready to build</p>
                                <p className="text-xs font-mono text-[#60A5FA] mb-6 bg-[#60A5FA]/10 inline-block px-2 py-1 rounded w-fit">2,000 credits/mo</p>
                                <ul className="space-y-3 mb-8 flex-1 text-sm">
                                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> 15 ideas per month</li>
                                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Full niche engine</li>
                                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Full validation engine</li>
                                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Full MVP engine</li>
                                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Full pricing engine</li>
                                    <li className="flex items-center gap-2 text-[#888888]"><Lock className="w-4 h-4" /> Outreach engine locked</li>
                                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Competitor engine unlocked</li>
                                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Investor engine unlocked</li>
                                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> YC application unlocked</li>
                                    <li className="flex items-center gap-2 text-[#888888]"><Lock className="w-4 h-4" /> Pivot engine locked</li>
                                    <li className="flex items-center gap-2 text-[#888888]"><Lock className="w-4 h-4" /> Progress tracker locked</li>
                                    <li className="flex items-center gap-2 text-[#888888]"><Lock className="w-4 h-4" /> No export</li>
                                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> 10 reruns allowed</li>
                                </ul>
                                <Link href="/login" className="w-full text-center py-3 rounded-xl bg-[#60A5FA] text-black font-bold hover:bg-[#60A5FA]/90 transition-colors">Get Medium</Link>
                            </div>

                            {/* ADVANCED */}
                            <div className="bg-[#111111] p-6 rounded-3xl border border-white/10 flex flex-col">
                                <h3 className="font-bold text-xl mb-2">ADVANCED</h3>
                                <p className="text-3xl font-black mb-1">₹999<span className="text-sm text-[#888888] font-normal">/month</span></p>
                                <p className="text-sm text-[#888888] mb-2">For serious founders</p>
                                <p className="text-xs font-mono text-[#60A5FA] mb-6 bg-[#60A5FA]/10 inline-block px-2 py-1 rounded w-fit">5,000 credits/mo</p>
                                <ul className="space-y-3 mb-8 flex-1 text-sm">
                                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> 50 ideas per month</li>
                                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> All 10 engines fully unlocked</li>
                                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Full outreach engine</li>
                                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Full pivot engine</li>
                                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Full progress tracker</li>
                                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Pricing chatbot</li>
                                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Export PDF reports</li>
                                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Priority AI processing</li>
                                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Unlimited reruns (100 cr/each)</li>
                                </ul>
                                <Link href="/login" className="w-full text-center py-3 rounded-xl bg-[#222] text-white font-bold hover:bg-[#333] transition-colors">Get Advanced</Link>
                            </div>
                        </div>

                        <div className="mt-12 p-4 bg-[#111111] rounded-xl border border-white/10 text-center text-sm text-[#888888] max-w-2xl mx-auto">
                            Your cost per analysis: ₹0.83 · Our cost to run it: ₹0.83 · Our margin funds the team that improves it daily.
                        </div>
                    </div>
                </section>

                {/* SECTION 6: FAQ */}
                <section className="py-24 px-6 border-t border-white/5 bg-[#0A0A0A]">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 tracking-tight">Frequently asked questions</h2>
                        <div className="space-y-4">
                            {faqs.map((faq, idx) => (
                                <div key={idx} className="bg-[#111111] border border-white/10 rounded-2xl overflow-hidden transition-all duration-300">
                                    <button 
                                        onClick={() => toggleFaq(idx)}
                                        className="w-full p-6 text-left flex justify-between items-center hover:bg-white/5 transition-colors"
                                    >
                                        <span className="font-bold text-[#FAFAFA] pr-8">{faq.q}</span>
                                        {openFaq === idx ? 
                                            <ChevronUp className="w-5 h-5 text-[#888888] flex-shrink-0" /> : 
                                            <ChevronDown className="w-5 h-5 text-[#888888] flex-shrink-0" />
                                        }
                                    </button>
                                    <div className={`px-6 pb-6 text-[#888888] leading-relaxed transition-all duration-300 ${openFaq === idx ? 'block' : 'hidden'}`}>
                                        {faq.a}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* SECTION 7: FINAL CTA */}
                <section className="py-32 px-6 border-t border-white/5 bg-[#0A0A0A] text-center">
                    <div className="max-w-4xl mx-auto bg-[#111111] p-16 rounded-[2rem] border border-white/10 relative overflow-hidden">
                        <div className="absolute top-0 right-0 -mr-32 -mt-32 w-96 h-96 bg-[#60A5FA]/10 rounded-full blur-3xl pointer-events-none"></div>
                        <div className="absolute bottom-0 left-0 -ml-32 -mb-32 w-96 h-96 bg-[#60A5FA]/5 rounded-full blur-3xl pointer-events-none"></div>
                        
                        <div className="relative z-10">
                            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight text-[#FAFAFA]">Stop guessing. Start building.</h2>
                            <p className="text-xl text-[#888888] mb-10 max-w-2xl mx-auto">
                                3 free analyses. No credit card. <br/>2 minutes to your first launch plan.
                            </p>
                            <Link href="/login" className="bg-[#60A5FA] text-black px-12 py-5 rounded-xl font-bold text-lg tracking-wide hover:bg-[#60A5FA]/90 transition-all inline-block mb-6">
                                Analyze My Idea →
                            </Link>
                            <p className="text-sm text-[#888888]">Join 2,847 founders who already used launchOS</p>
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <footer className="py-8 border-t border-white/5 bg-[#0A0A0A]">
                    <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-sm text-[#888888]">
                        <p>© {new Date().getFullYear()} launchOS. All rights reserved.</p>
                        <div className="flex gap-6 mt-4 md:mt-0">
                            <Link href="/docs" className="hover:text-white transition-colors">Documentation</Link>
                            <Link href="/support" className="hover:text-white transition-colors">Support</Link>
                        </div>
                    </div>
                </footer>
            </main>
        </div>
    )
}
