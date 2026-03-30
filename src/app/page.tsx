'use client'

import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import {
    Sparkles,
    ArrowRight,
    Search,
    Bell,
    Settings,
    Lightbulb,
    Verified,
    CreditCard,
    Megaphone,
    Rocket,
    ChevronRight,
    ShieldCheck,
    Cpu,
    Globe
} from 'lucide-react'

export default function LandingPage() {
    return (
        <div className="bg-surface selection:bg-tertiary/30 selection:text-tertiary min-h-screen">
            {/* TopNavBar */}
            <nav className="fixed top-0 w-full z-50 bg-slate-900/60 backdrop-blur-xl flex justify-between items-center h-16 px-8 max-w-full shadow-[0px_4px_12px_rgba(0,0,0,0.2)]">
                <div className="flex items-center gap-8">
                    <span className="text-xl font-bold tracking-tighter text-slate-100 font-headline italic">launchOS</span>
                    <div className="hidden md:flex gap-6 items-center">
                        <Link className="text-slate-400 font-medium hover:text-slate-200 transition-colors duration-200 font-body text-sm" href="/dashboard">Dashboard</Link>
                        <Link className="text-slate-400 font-medium hover:text-slate-200 transition-colors duration-200 font-body text-sm" href="/gallery">Gallery</Link>
                        <Link className="text-slate-400 font-medium hover:text-slate-200 transition-colors duration-200 font-body text-sm" href="#features">Features</Link>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <Link href="/login" className="text-slate-400 text-sm font-semibold hover:text-slate-200 transition-colors">
                        Sign In
                    </Link>
                    <Button className="button-metallic text-on-primary px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 scale-95 active:scale-90">
                        Get Started
                    </Button>
                </div>
            </nav>

            <main className="relative min-h-screen flex flex-col hero-gradient pt-16">
                {/* Hero Section */}
                <section className="flex-1 flex flex-col items-center justify-center px-6 text-center py-20 lg:py-32">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-variant/40 border border-outline-variant/10 mb-8">
                        <span className="w-2 h-2 rounded-full bg-tertiary animate-pulse"></span>
                        <span className="text-xs font-label uppercase tracking-widest text-on-surface-variant font-bold">Intelligence v2.4 Live</span>
                    </div>
                    <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-on-surface max-w-5xl leading-[0.95] mb-8">
                        From raw idea to <br />
                        <span className="text-primary italic">validation</span> in seconds.
                    </h1>
                    <p className="font-body text-lg md:text-xl text-on-surface-variant max-w-2xl leading-relaxed mb-12">
                        The AI-powered operating system for ambitious founders. Go from a raw concept to a fully validated MVP plan, pricing strategy, and outreach roadmap.
                    </p>

                    {/* Command Bar */}
                    <div className="w-full max-w-3xl relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-tertiary/20 to-primary/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="relative flex flex-col md:flex-row p-2 bg-surface-container-low rounded-xl border border-outline-variant/15 shadow-[0px_20px_40px_rgba(0,0,0,0.4)] transition-all group-hover:border-outline-variant/30">
                            <div className="flex-1 flex items-center px-4">
                                <Lightbulb className="text-outline mr-3 w-5 h-5" />
                                <input
                                    className="w-full bg-transparent border-none focus:ring-0 text-on-surface placeholder:text-on-surface-variant/50 font-body py-4 outline-none"
                                    placeholder="Enter your startup idea here..."
                                    type="text"
                                />
                            </div>
                            <Button className="button-metallic text-on-primary px-8 py-4 h-auto rounded-lg font-headline font-bold text-sm tracking-tight hover:brightness-110 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2">
                                Analyze Idea
                                <ArrowRight className="w-4 h-4" />
                            </Button>
                        </div>
                    </div>

                    {/* Trust Badges */}
                    <div className="mt-24 flex flex-wrap justify-center gap-8 md:gap-16 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
                        <span className="font-headline font-bold text-xl tracking-tighter">TECHSTARS</span>
                        <span className="font-headline font-bold text-xl tracking-tighter">YCOMBINATOR</span>
                        <span className="font-headline font-bold text-xl tracking-tighter">SEQUOIA</span>
                        <span className="font-headline font-bold text-xl tracking-tighter">ANDREESSEN</span>
                    </div>
                </section>

                {/* Bento Grid */}
                <section className="px-8 md:px-12 py-32 bg-surface-container-low/30 border-t border-outline-variant/5">
                    <div className="max-w-7xl mx-auto space-y-12">
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                            {/* Main Visual Bento */}
                            <div className="md:col-span-8 h-[500px] bg-surface-container rounded-xl overflow-hidden relative group border border-outline-variant/10">
                                <div className="absolute inset-0 bg-gradient-to-t from-surface-container via-transparent to-transparent z-10" />
                                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2832&auto=format&fit=crop')] bg-cover bg-center opacity-40 group-hover:scale-105 transition-transform duration-[2000ms] ease-out" />
                                <div className="absolute bottom-8 left-8 z-20">
                                    <div className="inline-flex items-center gap-2 px-2 py-1 rounded bg-tertiary/10 border border-tertiary/20 mb-4">
                                        <Cpu className="w-3 h-3 text-tertiary" />
                                        <span className="text-[10px] font-bold text-tertiary uppercase tracking-widest">Automation</span>
                                    </div>
                                    <h3 className="font-headline text-3xl font-bold mb-2">Automated MVP Scoping</h3>
                                    <p className="font-body text-on-surface-variant max-w-md">Our AI deconstructs your vision into actionable technical tasks and product milestones instantly.</p>
                                </div>
                            </div>

                            {/* Side Bento Stack */}
                            <div className="md:col-span-4 grid grid-rows-2 gap-4">
                                <div className="bg-surface-container-high rounded-xl p-8 flex flex-col justify-between border border-outline-variant/10 group hover:bg-surface-bright/20 transition-colors">
                                    <Verified className="text-tertiary w-10 h-10" />
                                    <div>
                                        <h4 className="font-headline text-xl font-bold mb-1">Market Validation</h4>
                                        <p className="font-body text-sm text-on-surface-variant">Instant competitor analysis and market gap identification.</p>
                                    </div>
                                </div>
                                <div className="bg-surface-bright rounded-xl p-8 flex flex-col justify-between border border-outline-variant/20 shadow-inner group hover:brightness-110 transition-all">
                                    <CreditCard className="text-primary w-10 h-10" />
                                    <div>
                                        <h4 className="font-headline text-xl font-bold mb-1 text-on-primary-fixed">Pricing Strategy</h4>
                                        <p className="font-body text-sm text-on-primary-container">Dynamic modeling based on current SaaS benchmarks.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                            <div className="md:col-span-4 bg-surface-container rounded-xl p-8 border border-outline-variant/10 group hover:border-tertiary/30 transition-all">
                                <Megaphone className="text-on-surface-variant w-10 h-10 mb-6 group-hover:text-tertiary transition-colors" />
                                <h4 className="font-headline text-xl font-bold mb-2">Outreach Roadmap</h4>
                                <p className="font-body text-sm text-on-surface-variant leading-relaxed">Personalized LinkedIn and Email templates designed for your specific niche conversion.</p>
                            </div>
                            <div className="md:col-span-8 bg-surface-container-highest rounded-xl p-8 border border-outline-variant/10 flex flex-col md:flex-row items-center gap-12 group hover:bg-surface-container-highest/80 transition-colors">
                                <div className="w-32 h-32 flex-shrink-0 bg-surface rounded-full border border-outline-variant/20 overflow-hidden relative">
                                    <div className="absolute inset-0 bg-gradient-to-br from-tertiary to-transparent opacity-20" />
                                    <Globe className="w-full h-full p-8 text-on-surface/20 group-hover:rotate-12 transition-transform duration-700" />
                                </div>
                                <div>
                                    <h4 className="font-headline text-2xl font-bold mb-2">Global Scale</h4>
                                    <p className="font-body text-on-surface-variant">Analyze market conditions across 50+ countries to find the perfect launchpad for your specific technology.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Final CTA */}
                <section className="py-32 px-6 text-center">
                    <div className="max-w-4xl mx-auto glass-panel p-16 rounded-3xl border border-outline-variant/10 relative overflow-hidden shadow-2xl">
                        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-tertiary/10 rounded-full blur-3xl"></div>
                        <Rocket className="w-12 h-12 mx-auto text-tertiary mb-6" />
                        <h2 className="font-headline text-4xl font-extrabold mb-6 tracking-tight text-on-surface">Stop building in the dark.</h2>
                        <p className="font-body text-on-surface-variant mb-10 max-w-xl mx-auto text-lg leading-relaxed">Join 4,000+ founders who used launchOS to turn their ideas into profitable companies this year.</p>
                        <Button className="button-metallic text-on-primary px-10 py-6 h-auto rounded-lg font-headline font-bold text-lg tracking-tight hover:scale-105 active:scale-95 transition-all duration-300 shadow-xl shadow-tertiary/10">
                            Get Started for Free
                        </Button>
                    </div>
                </section>

                {/* Footer */}
                <footer className="w-full py-12 mt-auto flex flex-col md:flex-row justify-between items-center px-12 border-t border-slate-800/20 bg-slate-950/50 backdrop-blur-sm">
                    <div className="flex items-center gap-3">
                        <div className="w-6 h-6 bg-primary/20 rounded flex items-center justify-center border border-primary/30">
                            <span className="text-primary font-bold text-[10px]">L</span>
                        </div>
                        <p className="font-body text-[10px] uppercase tracking-[0.2em] text-slate-500 font-bold">launchOS © 2026</p>
                    </div>
                    <div className="flex gap-8 mt-6 md:mt-0">
                        <Link className="font-body text-[10px] uppercase tracking-widest text-slate-500 hover:text-tertiary transition-colors" href="#">Terms</Link>
                        <Link className="font-body text-[10px] uppercase tracking-widest text-slate-500 hover:text-tertiary transition-colors" href="#">Privacy</Link>
                    </div>
                </footer>
            </main>
        </div>
    )
}
