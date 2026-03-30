'use client'

import React from 'react'
import Link from 'next/link'

export default function LandingPage() {
    return (
        <div className="bg-surface selection:bg-tertiary/30 selection:text-white min-h-screen antialiased scroll-smooth">
            {/* Top Command Bar */}
            <nav className="fixed top-0 w-full z-50 glass-panel glass-edge flex justify-between items-center h-24 px-12 max-w-full transition-all custom-ease">
                <div className="flex items-center gap-12">
                    <span className="text-2xl font-black tracking-tighter text-white font-headline mt-1 uppercase italic">launchOS</span>
                    <div className="hidden md:flex gap-10 items-center">
                        <Link className="text-on-surface-variant/40 font-black hover:text-white transition-all duration-500 font-headline text-[11px] uppercase tracking-[0.2em]" href="/dashboard">Executive Command</Link>
                        <Link className="text-on-surface-variant/40 font-black hover:text-white transition-all duration-500 font-headline text-[11px] uppercase tracking-[0.2em]" href="/#">Intelligence</Link>
                        <Link className="text-on-surface-variant/40 font-black hover:text-white transition-all duration-500 font-headline text-[11px] uppercase tracking-[0.2em]" href="/#">Archives</Link>
                    </div>
                </div>
                <div className="flex items-center gap-6">
                    <Link href="/dashboard" className="bg-surface-container-high text-white px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-[0.2em] hover:bg-surface-bright transition-all duration-500 shadow-xl glass-edge italic">
                        Access Pro Portal
                    </Link>
                    <div className="w-10 h-10 rounded-xl glass-edge overflow-hidden shadow-2xl group border border-white/5 cursor-pointer">
                        <img alt="Founder Profile" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA7eF7035V9Ps5oLjD3xDo1FvYEW4YzEijIuyCwn-ASxUM_9MEfiXkiyfOglCBLldt0JhyM4TNKy32_8mA1e0rJRZXUfTB6GDPN-LSlQFo4Smz3cm7pn2uB27O559S3wGflBelQZXyq-D7hFB5H9LyZZFuKJWTwTaZfRo5j17B9HgrJpu0O6gyZVtEMSaeHCfYrLoKpbrPHLuRSK76HcgWCJZNrVgWZjjDlFC_w_yCtkviN8FVLW_28R0-xGMQrKFjTCpunZ_7z8N8f" />
                    </div>
                </div>
            </nav>

            {/* Main Content Canvas */}
            <main className="relative min-h-screen flex flex-col hero-gradient pt-24 transition-opacity duration-1000">
                {/* Hero Section */}
                <section className="flex-1 flex flex-col items-center justify-center px-8 text-center py-24 lg:py-40">
                    <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-surface-variant/40 border border-outline-variant/10 mb-10 shadow-inner">
                        <span className="w-1.5 h-1.5 rounded-full bg-tertiary animate-pulse shadow-[0_0_10px_#679cff]"></span>
                        <span className="text-[10px] font-black font-label uppercase tracking-[0.3em] text-on-surface-variant/80">Neural Grid Active</span>
                    </div>
                    <h1 className="font-headline text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-white max-w-6xl leading-[0.9] mb-12 uppercase italic">
                        Raw vision. <br />
                        <span className="text-tertiary">Precision</span> Fit.
                    </h1>
                    <p className="font-body text-xl md:text-2xl text-on-surface-variant max-w-3xl leading-relaxed mb-16 italic opacity-80 antialiased">
                        The AI-driven architect for the modern founder. <br />
                        Analyze, validate, and blueprint your entire startup ecosystem in <span className="text-white font-black">120 seconds</span>.
                    </p>

                    {/* Centered Command Link to Dashboard */}
                    <Link href="/dashboard" className="w-full max-w-3xl relative group">
                        <div className="absolute -inset-4 bg-gradient-to-r from-tertiary/10 to-primary/10 rounded-2xl blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
                        <div className="relative flex flex-col md:flex-row p-3 bg-surface-container-low rounded-2xl border border-outline-variant/15 shadow-[0px_30px_60px_rgba(0,0,0,0.6)] transition-all duration-700 group-hover:-translate-y-2 group-hover:border-tertiary/30">
                            <div className="flex-1 flex items-center px-6">
                                <span className="material-symbols-outlined text-tertiary mr-4 text-3xl shadow-[0_0_15px_#679cff/40]">terminal</span>
                                <div className="text-left py-4">
                                    <p className="text-[10px] font-black text-on-surface-variant uppercase tracking-[0.4em] mb-1 italic opacity-60">Initialize Sequence</p>
                                    <p className="text-lg text-on-surface-variant font-body italic opacity-40">describe your vision to begin...</p>
                                </div>
                            </div>
                            <div className="button-metallic text-on-primary px-12 py-5 rounded-xl font-headline font-black text-[13px] uppercase tracking-[0.2em] hover:brightness-110 active:scale-95 transition-all duration-300 flex items-center justify-center gap-3 shadow-2xl italic border border-white/10">
                                Launch Analysis
                                <span className="material-symbols-outlined text-lg font-black">arrow_forward</span>
                            </div>
                        </div>
                    </Link>

                    {/* Trust Entities */}
                    <div className="mt-40 flex flex-wrap justify-center gap-12 md:gap-24 opacity-20 grayscale motion-safe:animate-fade-in transition-all duration-1000">
                        <span className="font-headline font-black text-2xl tracking-tighter italic uppercase">Techstars</span>
                        <span className="font-headline font-black text-2xl tracking-tighter italic uppercase">Sequoia</span>
                        <span className="font-headline font-black text-2xl tracking-tighter italic uppercase">Andreessen</span>
                        <span className="font-headline font-black text-2xl tracking-tighter italic uppercase">Antler</span>
                    </div>
                </section>

                {/* Feature Bento Canvas - Structural Separation by BG Shift */}
                <section className="px-12 py-40 bg-surface-container-low relative">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(103,156,255,0.015),transparent_80%)] pointer-events-none"></div>
                    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 relative z-10">
                        {/* Core Intelligence Frame */}
                        <div className="md:col-span-8 h-[600px] bg-surface-container rounded-3xl overflow-hidden relative group border border-outline-variant/10 shadow-[0_30px_60px_rgba(0,0,0,0.4)]">
                            <img alt="Neural Mapping" className="absolute inset-0 w-full h-full object-cover opacity-40 grayscale group-hover:scale-105 group-hover:grayscale-0 transition-all duration-[4000ms] ease-out" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB4yV-Rr56-9JYvmldC8C8yiTlp05-1uhU-b-EicYqH76M16pwqi81iQJK0Mkju6gYYpxykktv7l4ao5Jrb1-S6wB6LHlYvMzj4Xcdi60Xpriu_Ml_hc0I4nAiGuxO1U4saGrlb5U0ejZGDIc4rUxgsE8qC5o_avb7XnV4Gq4-uxf1y9Y_ohdcNbnU67lURtlK6tyI_0bBcZKwze8O0gkZOTbICLay_f3LqQd2Fbh_MoM4FYSlzrtgyMVVYRK3kjEcq4s-Cr5v3Dwh-" />
                            <div className="absolute inset-0 bg-gradient-to-t from-surface-container via-surface-container/20 to-transparent"></div>
                            <div className="absolute bottom-12 left-12 p-8 glass-panel rounded-2xl glass-edge max-w-md shadow-2xl">
                                <h3 className="font-headline text-4xl font-black tracking-tight text-white mb-4 uppercase italic">Structural Analysis</h3>
                                <p className="font-body text-on-surface-variant text-lg leading-relaxed italic opacity-80">Our proprietary neural grid deconstructs raw concepts into actionable MVP blueprints and technical roadmaps.</p>
                            </div>
                        </div>

                        {/* Secondary Intelligence Blocks */}
                        <div className="md:col-span-4 grid grid-rows-2 gap-10">
                            <div className="bg-surface-container-high rounded-3xl p-12 flex flex-col justify-between border border-outline-variant/10 shadow-2xl group hover:bg-surface-bright transition-all duration-700">
                                <div className="w-16 h-16 bg-surface-container rounded-2xl flex items-center justify-center shadow-xl mb-8 group-hover:scale-110 transition-transform">
                                    <span className="material-symbols-outlined text-tertiary text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                                </div>
                                <div>
                                    <h4 className="font-headline text-3xl font-black italic tracking-tighter text-white mb-4 uppercase leading-none">Market Validation</h4>
                                    <p className="font-body text-on-surface-variant text-lg italic opacity-60">High-integrity data modeling for market gap discovery.</p>
                                </div>
                            </div>
                            <div className="bg-surface-bright rounded-3xl p-12 flex flex-col justify-between border border-outline-variant/20 shadow-[0_20px_50px_rgba(0,0,0,0.3)] group hover:scale-[1.02] transition-all duration-500">
                                <div className="w-16 h-16 bg-surface-container-high rounded-2xl flex items-center justify-center shadow-xl mb-8">
                                    <span className="material-symbols-outlined text-primary text-4xl">payments</span>
                                </div>
                                <div>
                                    <h4 className="font-headline text-3xl font-black italic tracking-tighter text-white mb-4 uppercase leading-none">Revenue Models</h4>
                                    <p className="font-body text-on-surface-variant text-lg italic opacity-60">Algorithmic pricing based on verified SaaS benchmarks.</p>
                                </div>
                            </div>
                        </div>

                        {/* Expanded Bento Row */}
                        <div className="md:col-span-4 bg-surface-container rounded-3xl p-12 border border-outline-variant/10 flex flex-col justify-between group hover:border-tertiary/20 transition-all duration-500 shadow-2xl">
                            <span className="material-symbols-outlined text-on-surface-variant text-5xl mb-8 group-hover:text-tertiary transition-colors duration-500">campaign</span>
                            <div>
                                <h4 className="font-headline text-3xl font-black italic tracking-tighter text-white mb-3 uppercase leading-none">Global Outreach</h4>
                                <p className="font-body text-base text-on-surface-variant italic opacity-60 leading-relaxed antialiased">Personalized architect-grade templates for Niche penetration.</p>
                            </div>
                        </div>
                        <div className="md:col-span-8 bg-surface-container-highest rounded-3xl p-12 flex items-center gap-12 group shadow-[0_40px_80px_rgba(0,0,0,0.5)] border border-white/5 relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-12 opacity-5">
                                <span className="material-symbols-outlined text-[200px] text-tertiary">analytics</span>
                            </div>
                            <div className="hidden lg:flex w-48 h-48 flex-shrink-0 bg-surface rounded-full border border-outline-variant/10 overflow-hidden shadow-2xl relative z-10">
                                <img alt="Neural Scan" className="w-full h-full object-cover opacity-60 grayscale group-hover:scale-110 transition-all duration-[3000ms]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAGM1gPsdKRGe23D9ycgZaCurk4t1lzEtWrGNMU9KICjiZxGohw9mmYInOc_PvBWSPuiqA0puLWLRsWZG4ooQYEeUw4BhrN4nKXeEAicMFH7cGtv6rikv9Dao_gnd-3gAMoo2TIXt0xzNY_pSZ-YWpBC1bV6OtIs6eMzrVQNL4wAursUj50VLK-YGnncIed-fzSEloxOZsce_ncBteyFEdQLATTNuRBd_TezZVz0bpaHjdANGvd8tDxjyamC6o58mFUAkK33_tKyB80" />
                            </div>
                            <div className="relative z-10">
                                <h4 className="font-headline text-4xl font-black italic tracking-tighter text-white mb-4 uppercase leading-none">Momentum Audit</h4>
                                <p className="font-body text-on-surface-variant text-xl italic opacity-80 leading-relaxed max-w-lg">Continuous telemetry monitoring of your startup ecosystem growth.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Final Intent Section */}
                <section className="py-48 px-8 text-center relative overflow-hidden">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-tertiary/20 to-transparent"></div>
                    <div className="max-w-5xl mx-auto glass-panel p-24 rounded-[3rem] glass-edge relative overflow-hidden shadow-2xl group transition-all duration-700 hover:bg-surface-variant/80">
                        <div className="absolute -top-40 -right-40 w-96 h-96 bg-tertiary/5 rounded-full blur-[120px] group-hover:bg-tertiary/15 transition-all duration-[4000ms]"></div>
                        <h2 className="font-headline text-6xl md:text-7xl font-black tracking-tighter text-white mb-8 uppercase italic leading-none">Execute with <span className="text-tertiary">Authority</span>.</h2>
                        <p className="font-body text-xl text-on-surface-variant mb-16 max-w-2xl mx-auto italic opacity-80 antialiased leading-relaxed">
                            Stop iterating in a void. Join elite founders utilizing <span className="text-white font-black">launchOS</span> to secure strategic advantage.
                        </p>
                        <Link href="/dashboard" className="button-metallic text-on-primary px-16 py-6 rounded-2xl font-headline font-black text-sm uppercase tracking-[0.3em] hover:scale-105 active:scale-95 transition-all duration-500 shadow-[0_30px_60px_rgba(103,156,255,0.25)] inline-block italic border border-white/10">
                            Initialize Protocol
                        </Link>
                    </div>
                </section>

                {/* Status Footer */}
                <footer className="w-full py-16 mt-auto flex flex-col md:flex-row justify-between items-center px-16 bg-surface relative z-10 glass-edge border-t border-white/5">
                    <div className="flex flex-col items-center md:items-start gap-4">
                        <span className="text-2xl font-black tracking-tighter text-white font-headline italic uppercase leading-none mb-2">launchOS</span>
                        <p className="font-body text-[10px] uppercase tracking-[0.4em] text-on-surface-variant/40 font-black">© MMXXIV Intelligence Systems. <br className="md:hidden" /> All rights reserved.</p>
                    </div>
                    <div className="flex gap-16 mt-10 md:mt-0 items-center">
                        <Link className="font-body text-[10px] uppercase tracking-[0.4em] text-on-surface-variant/40 hover:text-white transition-colors font-black" href="#">Protocols</Link>
                        <Link className="font-body text-[10px] uppercase tracking-[0.4em] text-on-surface-variant/40 hover:text-white transition-colors font-black" href="#">Privacy</Link>
                        <Link className="font-body text-[10px] uppercase tracking-[0.4em] text-on-surface-variant/40 hover:text-white transition-colors font-black" href="#">Security</Link>
                    </div>
                </footer>
            </main>
        </div>
    )
}

