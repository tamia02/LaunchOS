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
            <nav className="fixed top-0 w-full z-50 bg-surface-variant/60 backdrop-blur-xl flex justify-between items-center h-16 px-8 max-w-full border-b border-outline-variant/10">
                <div className="flex items-center gap-8">
                    <span className="text-xl font-headline font-black tracking-tighter text-on-surface uppercase italic">launchOS</span>
                    <div className="hidden md:flex gap-8 items-center">
                        <Link className="text-on-surface-variant font-bold hover:text-on-surface transition-colors duration-300 font-headline text-[10px] uppercase tracking-widest" href="/dashboard">System Core</Link>
                        <Link className="text-on-surface-variant font-bold hover:text-on-surface transition-colors duration-300 font-headline text-[10px] uppercase tracking-widest" href="/gallery">Gallery</Link>
                        <Link className="text-on-surface-variant font-bold hover:text-on-surface transition-colors duration-300 font-headline text-[10px] uppercase tracking-widest" href="#features">Architecture</Link>
                    </div>
                </div>
                <div className="flex items-center gap-6">
                    <Link href="/login" className="text-on-surface-variant text-[10px] font-black uppercase tracking-widest hover:text-on-surface transition-colors">
                        Access
                    </Link>
                    <Button variant="primary" size="sm">
                        Initialize
                    </Button>
                </div>
            </nav>

            <main className="relative min-h-screen flex flex-col hero-gradient pt-16">
                {/* Hero Section */}
                <section className="flex-1 flex flex-col items-center justify-center px-6 text-center py-20 lg:py-40">
                    <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-surface-container-high/40 border border-outline-variant/20 mb-10 shadow-2xl backdrop-blur-md">
                        <span className="w-2 h-2 rounded-full bg-tertiary shadow-[0_0_8px_#679cff] animate-pulse"></span>
                        <span className="text-[9px] font-black uppercase tracking-[0.3em] text-tertiary">Precision Intelligence Active</span>
                    </div>
                    <h1 className="font-headline text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-on-surface max-w-6xl leading-[0.9] mb-10 uppercase italic">
                        From raw idea to <br />
                        <span className="text-tertiary">validation</span> in seconds.
                    </h1>
                    <p className="font-body text-lg md:text-xl text-on-surface-variant max-w-2xl leading-relaxed mb-16 opacity-80">
                        The definitive operating system for high-velocity founders. Architect your vision with precision market fits and capital readiness.
                    </p>

                    {/* Command Bar */}
                    <div className="w-full max-w-4xl relative group">
                        <div className="absolute -inset-2 bg-tertiary/10 rounded-2xl blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
                        <div className="relative flex flex-col md:flex-row p-3 bg-surface-container-low rounded-2xl border border-outline-variant/15 shadow-2xl transition-all duration-500 custom-ease group-hover:border-tertiary/30 group-hover:scale-[1.01]">
                            <div className="flex-1 flex items-center px-6">
                                <Sparkles className="text-tertiary mr-4 w-6 h-6" />
                                <input
                                    className="w-full bg-transparent border-none focus:ring-0 text-on-surface placeholder:text-on-surface-variant/40 font-body py-5 outline-none text-lg"
                                    placeholder="Input your strategic vision..."
                                    type="text"
                                />
                            </div>
                            <Button variant="primary" size="lg" className="h-auto">
                                Run Diagnostics
                                <ArrowRight className="w-5 h-5 ml-3" />
                            </Button>
                        </div>
                    </div>

                    {/* Trust Badges */}
                    <div className="mt-32 flex flex-wrap justify-center gap-12 md:gap-24 opacity-30 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-1000">
                        <span className="font-headline font-black text-2xl tracking-tighter italic uppercase text-on-surface">Techstars</span>
                        <span className="font-headline font-black text-2xl tracking-tighter italic uppercase text-on-surface">YCombinator</span>
                        <span className="font-headline font-black text-2xl tracking-tighter italic uppercase text-on-surface">Sequoia</span>
                        <span className="font-headline font-black text-2xl tracking-tighter italic uppercase text-on-surface">Andreessen</span>
                    </div>
                </section>

                {/* Bento Grid */}
                <section className="px-8 md:px-20 py-40 bg-surface-container-low/30 border-t border-outline-variant/10">
                    <div className="max-w-7xl mx-auto space-y-8">
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                            {/* Main Visual Bento */}
                            <div className="md:col-span-8 h-[600px] bg-surface-container rounded-3xl overflow-hidden relative group border border-outline-variant/15 shadow-2xl">
                                <div className="absolute inset-0 bg-gradient-to-t from-surface-container via-surface-container/20 to-transparent z-10" />
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(103,156,255,0.05),transparent_50%)]" />
                                <div className="absolute bottom-12 left-12 z-20">
                                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-tertiary/10 border border-tertiary/20 mb-6 group-hover:scale-110 transition-transform duration-500">
                                        <Cpu className="w-4 h-4 text-tertiary" />
                                        <span className="text-[10px] font-black text-tertiary uppercase tracking-[0.2em]">Neural Engine v4</span>
                                    </div>
                                    <h3 className="font-headline text-4xl font-black mb-4 uppercase italic">Automated MVP Scoping</h3>
                                    <p className="font-body text-on-surface-variant max-w-md text-lg leading-relaxed opacity-70">Deconstruct complex visions into atomic technical benchmarks and engineering blueprints instantly.</p>
                                </div>
                            </div>

                            {/* Side Bento Stack */}
                            <div className="md:col-span-4 grid grid-rows-2 gap-8">
                                <div className="bg-surface-container-high rounded-3xl p-10 flex flex-col justify-between border border-outline-variant/15 shadow-xl group hover:bg-surface-bright/10 transition-all duration-500">
                                    <div className="w-14 h-14 rounded-2xl bg-surface-container-highest flex items-center justify-center border border-outline-variant/20 shadow-inner group-hover:rotate-6 transition-transform">
                                        <Verified className="text-tertiary w-7 h-7" />
                                    </div>
                                    <div>
                                        <h4 className="font-headline text-2xl font-black mb-2 uppercase italic">Market Fit</h4>
                                        <p className="font-body text-sm text-on-surface-variant opacity-60 leading-relaxed">Precision-tuned gap identification and competitive resonance mapping.</p>
                                    </div>
                                </div>
                                <div className="bg-surface-container-high rounded-3xl p-10 flex flex-col justify-between border border-outline-variant/15 shadow-xl group hover:bg-surface-bright/10 transition-all duration-500">
                                    <div className="w-14 h-14 rounded-2xl bg-surface-container-highest flex items-center justify-center border border-outline-variant/20 shadow-inner group-hover:-rotate-6 transition-transform">
                                        <CreditCard className="text-tertiary w-7 h-7" />
                                    </div>
                                    <div>
                                        <h4 className="font-headline text-2xl font-black mb-2 uppercase italic">Capital Lab</h4>
                                        <p className="font-body text-sm text-on-surface-variant opacity-60 leading-relaxed">Dynamic financial modeling built on real-time venture benchmarks.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                            <div className="md:col-span-4 bg-surface-container rounded-3xl p-10 border border-outline-variant/15 group hover:border-tertiary/40 transition-all duration-500 shadow-xl">
                                <Megaphone className="text-tertiary w-12 h-12 mb-8 opacity-40 group-hover:opacity-100 transition-opacity" />
                                <h4 className="font-headline text-2xl font-black mb-3 uppercase italic text-on-surface">Outreach Arc</h4>
                                <p className="font-body text-sm text-on-surface-variant opacity-60 leading-relaxed">Neural-generated campaign sequences tuned for high-intent founder conversion.</p>
                            </div>
                            <div className="md:col-span-8 bg-surface-container-highest rounded-3xl p-10 border border-outline-variant/20 flex flex-col md:flex-row items-center gap-12 group hover:bg-surface-container-highest/90 transition-all duration-700 shadow-2xl relative overflow-hidden">
                                <div className="absolute inset-0 bg-tertiary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                                <div className="w-40 h-40 flex-shrink-0 bg-surface-container-high rounded-full border border-outline-variant/30 overflow-hidden relative shadow-2xl">
                                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(103,156,255,0.15),transparent_70%)]" />
                                    <Globe className="w-full h-full p-10 text-tertiary/40 group-hover:rotate-45 transition-transform duration-1000" />
                                </div>
                                <div className="relative">
                                    <h4 className="font-headline text-3xl font-black mb-3 uppercase italic">System Scale</h4>
                                    <p className="font-body text-on-surface-variant opacity-60 text-lg leading-relaxed">Autonomous coordination across 50+ regional datasets to identify the prime trajectory for expansion.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Final CTA */}
                <section className="py-40 px-6 text-center bg-surface relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(103,156,255,0.03),transparent_70%)]" />
                    <div className="max-w-5xl mx-auto glass-panel p-24 rounded-[3rem] border border-outline-variant/20 relative overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.6)] group">
                        <div className="absolute -top-32 -right-32 w-96 h-96 bg-tertiary/10 rounded-full blur-[100px] group-hover:bg-tertiary/20 transition-colors duration-1000"></div>
                        <Rocket className="w-16 h-16 mx-auto text-tertiary mb-10 shadow-[0_0_20px_rgba(103,156,255,0.4)]" />
                        <h2 className="font-headline text-5xl md:text-7xl font-black mb-8 tracking-tighter text-on-surface uppercase italic">Terminating <span className="text-tertiary">Obscurity.</span></h2>
                        <p className="font-body text-on-surface-variant mb-14 max-w-2xl mx-auto text-xl leading-relaxed opacity-70">Infrastructure for the next generation of architects. Join the fleet today.</p>
                        <Button variant="primary" size="lg" className="px-16 py-8 h-auto text-lg shadow-2xl">
                            Deploy New Vision
                        </Button>
                    </div>
                </section>

                {/* Footer */}
                <footer className="w-full py-16 flex flex-col md:flex-row justify-between items-center px-16 border-t border-outline-variant/10 bg-surface-container-low/50 backdrop-blur-md relative z-10">
                    <div className="flex items-center gap-4">
                        <div className="w-8 h-8 bg-surface-container-high rounded-lg flex items-center justify-center border border-outline-variant/20 shadow-inner">
                            <span className="text-tertiary font-headline font-black text-sm italic">L</span>
                        </div>
                        <p className="font-headline text-[10px] uppercase tracking-[0.4em] text-on-surface-variant font-black opacity-40">launchOS — Neural Core v2.4</p>
                    </div>
                    <div className="flex gap-12 mt-8 md:mt-0">
                        <Link className="font-headline text-[9px] font-black uppercase tracking-[0.3em] text-on-surface-variant hover:text-tertiary transition-colors opacity-40 hover:opacity-100" href="#">Protocol</Link>
                        <Link className="font-headline text-[9px] font-black uppercase tracking-[0.3em] text-on-surface-variant hover:text-tertiary transition-colors opacity-40 hover:opacity-100" href="#">Security</Link>
                        <Link className="font-headline text-[9px] font-black uppercase tracking-[0.3em] text-on-surface-variant hover:text-tertiary transition-colors opacity-40 hover:opacity-100" href="#">Terminal</Link>
                    </div>
                </footer>
            </main>
        </div>
    )
}

