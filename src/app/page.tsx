'use client'

import React from 'react'
import Link from 'next/link'

export default function LandingPage() {
    return (
        <div className="bg-surface selection:bg-tertiary/30 selection:text-tertiary-fixed min-h-screen">
            {/* TopNavBar */}
            <nav className="fixed top-0 w-full z-50 bg-slate-900/60 backdrop-blur-xl flex justify-between items-center h-16 px-8 max-w-full shadow-[0px_4px_12px_rgba(0,0,0,0.2)] border-b border-white/5">
                <div className="flex items-center gap-8">
                    <span className="text-xl font-bold tracking-tighter text-slate-100 font-headline">launchOS</span>
                    <div className="hidden md:flex gap-6 items-center">
                        <Link className="text-slate-400 font-medium hover:text-slate-200 transition-colors duration-200 font-body text-sm" href="/dashboard">Dashboard</Link>
                        <Link className="text-slate-400 font-medium hover:text-slate-200 transition-colors duration-200 font-body text-sm" href="/#">Projects</Link>
                        <Link className="text-slate-400 font-medium hover:text-slate-200 transition-colors duration-200 font-body text-sm" href="/#">Insights</Link>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <Link href="/dashboard" className="bg-surface-container-high text-slate-200 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-surface-bright transition-all duration-300 scale-95 active:scale-90 border border-white/5">
                        Upgrade to Pro
                    </Link>
                    <div className="w-8 h-8 rounded-full bg-surface-container overflow-hidden border border-outline-variant/20 shadow-xl">
                        <img alt="Founder Profile" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA7eF7035V9Ps5oLjD3xDo1FvYEW4YzEijIuyCwn-ASxUM_9MEfiXkiyfOglCBLldt0JhyM4TNKy32_8mA1e0rJRZXUfTB6GDPN-LSlQFo4Smz3cm7pn2uB27O559S3wGflBelQZXyq-D7hFB5H9LyZZFuKJWTwTaZfRo5j17B9HgrJpu0O6gyZVtEMSaeHCfYrLoKpbrPHLuRSK76HcgWCJZNrVgWZjjDlFC_w_yCtkviN8FVLW_28R0-xGMQrKFjTCpunZ_7z8N8f" />
                    </div>
                </div>
            </nav>

            {/* Main Content Canvas */}
            <main className="relative min-h-screen flex flex-col hero-gradient pt-16">
                {/* Hero Section */}
                <section className="flex-1 flex flex-col items-center justify-center px-6 text-center py-20 lg:py-32">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-variant/40 border border-outline-variant/10 mb-8">
                        <span className="w-2 h-2 rounded-full bg-tertiary animate-pulse"></span>
                        <span className="text-xs font-label uppercase tracking-widest text-on-surface-variant">Intelligence v2.4 Live</span>
                    </div>
                    <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-on-surface max-w-5xl leading-[0.95] mb-8">
                        From raw idea to validation in seconds.
                    </h1>
                    <p className="font-body text-lg md:text-xl text-on-surface-variant max-w-2xl leading-relaxed mb-12 italic opacity-80">
                        The AI-powered operating system for ambitious founders. Go from a raw concept to a fully validated MVP plan, pricing strategy, and outreach roadmap.
                    </p>

                    {/* Centered Input Command Bar */}
                    <div className="w-full max-w-3xl relative group">
                        <div className="absolute -inset-2 bg-gradient-to-r from-tertiary/20 to-primary/20 rounded-xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
                        <div className="relative flex flex-col md:flex-row p-2 bg-surface-container-low rounded-xl border border-outline-variant/15 shadow-[0px_20px_40px_rgba(0,0,0,0.5)] transition-transform duration-500 group-hover:-translate-y-1">
                            <div className="flex-1 flex items-center px-4">
                                <span className="material-symbols-outlined text-tertiary mr-3 shadow-[0_0_10px_#679cff/30]">lightbulb</span>
                                <input
                                    className="w-full bg-transparent border-none focus:ring-0 text-on-surface placeholder:text-on-surface-variant/50 font-body py-4 outline-none"
                                    placeholder="Enter your startup idea here..."
                                    type="text"
                                />
                            </div>
                            <button className="button-metallic text-on-primary px-10 py-4 rounded-lg font-headline font-black text-xs uppercase tracking-widest hover:brightness-110 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 shadow-2xl">
                                Analyze Idea
                                <span className="material-symbols-outlined text-sm font-black">arrow_forward</span>
                            </button>
                        </div>
                    </div>

                    {/* Trust Badges */}
                    <div className="mt-32 flex flex-wrap justify-center gap-8 md:gap-20 opacity-30 grayscale hover:grayscale-0 transition-all duration-1000">
                        <span className="font-headline font-black text-xl tracking-tighter italic">TECHSTARS</span>
                        <span className="font-headline font-black text-xl tracking-tighter italic">YCOMBINATOR</span>
                        <span className="font-headline font-black text-xl tracking-tighter italic">SEQUOIA</span>
                        <span className="font-headline font-black text-xl tracking-tighter italic">ANDREESSEN</span>
                    </div>
                </section>

                {/* Feature Bento Grid Section */}
                <section className="px-8 md:px-12 py-32 bg-surface-container-low/30 border-t border-white/5 relative">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(103,156,255,0.02),transparent_70%)] pointer-events-none"></div>
                    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 relative z-10">
                        {/* Main Visual Bento */}
                        <div className="md:col-span-8 h-[500px] bg-surface-container rounded-2xl overflow-hidden relative group border border-outline-variant/10 shadow-2xl">
                            <img alt="OS Interface Preview" className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-[3000ms] ease-out" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB4yV-Rr56-9JYvmldC8C8yiTlp05-1uhU-b-EicYqH76M16pwqi81iQJK0Mkju6gYYpxykktv7l4ao5Jrb1-S6wB6LHlYvMzj4Xcdi60Xpriu_Ml_hc0I4nAiGuxO1U4saGrlb5U0ejZGDIc4rUxgsE8qC5o_avb7XnV4Gq4-uxf1y9Y_ohdcNbnU67lURtlK6tyI_0bBcZKwze8O0gkZOTbICLay_f3LqQd2Fbh_MoM4FYSlzrtgyMVVYRK3kjEcq4s-Cr5v3Dwh-" />
                            <div className="absolute inset-0 bg-gradient-to-t from-surface-container via-surface-container/20 to-transparent"></div>
                            <div className="absolute bottom-10 left-10">
                                <h3 className="font-headline text-4xl font-extrabold tracking-tighter text-white mb-3">Automated MVP Scoping</h3>
                                <p className="font-body text-on-surface-variant max-w-sm text-lg leading-relaxed italic opacity-80">Our AI deconstructs your vision into actionable technical tasks and product milestones instantly.</p>
                            </div>
                        </div>

                        {/* Secondary Bento (Vertical) */}
                        <div className="md:col-span-4 grid grid-rows-2 gap-6">
                            <div className="bg-surface-container-high rounded-2xl p-10 flex flex-col justify-between border border-outline-variant/10 shadow-xl group hover:border-tertiary/30 transition-colors">
                                <span className="material-symbols-outlined text-tertiary text-5xl transition-transform group-hover:scale-110 duration-500">verified</span>
                                <div>
                                    <h4 className="font-headline text-2xl font-black italic tracking-tighter text-white mb-2 uppercase">Market Validation</h4>
                                    <p className="font-body text-sm text-on-surface-variant italic opacity-70">Instant competitor analysis and market gap identification.</p>
                                </div>
                            </div>
                            <div className="bg-surface-bright rounded-2xl p-10 flex flex-col justify-between border border-outline-variant/20 shadow-2xl group hover:brightness-110 transition-all">
                                <span className="material-symbols-outlined text-primary text-5xl transition-transform group-hover:rotate-12 duration-500">payments</span>
                                <div>
                                    <h4 className="font-headline text-2xl font-black italic tracking-tighter text-white mb-2 uppercase">Pricing Strategy</h4>
                                    <p className="font-body text-sm text-on-primary-container italic opacity-70">Dynamic modeling based on current SaaS benchmarks.</p>
                                </div>
                            </div>
                        </div>

                        {/* Bottom Row Bento */}
                        <div className="md:col-span-4 bg-surface-container rounded-2xl p-10 border border-outline-variant/10 flex flex-col justify-between group">
                            <span className="material-symbols-outlined text-on-surface-variant text-4xl mb-6 group-hover:text-tertiary transition-colors">campaign</span>
                            <div>
                                <h4 className="font-headline text-2xl font-black italic tracking-tighter text-white mb-2 uppercase">Outreach Roadmap</h4>
                                <p className="font-body text-sm text-on-surface-variant italic opacity-70 leading-relaxed">Personalized LinkedIn and Email templates designed for your specific niche conversion.</p>
                            </div>
                        </div>
                        <div className="md:col-span-8 bg-surface-container-highest rounded-2xl p-10 border border-outline-variant/10 flex items-center gap-12 group">
                            <div className="hidden lg:block w-36 h-36 flex-shrink-0 bg-surface rounded-full border border-outline-variant/20 overflow-hidden shadow-2xl">
                                <img alt="Technology focus" className="w-full h-full object-cover opacity-50 grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAGM1gPsdKRGe23D9ycgZaCurk4t1lzEtWrGNMU9KICjiZxGohw9mmYInOc_PvBWSPuiqA0puLWLRsWZG4ooQYEeUw4BhrN4nKXeEAicMFH7cGtv6rikv9Dao_gnd-3gAMoo2TIXt0xzNY_pSZ-YWpBC1bV6OtIs6eMzrVQNL4wAursUj50VLK-YGnncIed-fzSEloxOZsce_ncBteyFEdQLATTNuRBd_TezZVz0bpaHjdANGvd8tDxjyamC6o58mFUAkK33_tKyB80" />
                            </div>
                            <div>
                                <h4 className="font-headline text-3xl font-black italic tracking-tighter text-white mb-3 uppercase">Progress Tracking</h4>
                                <p className="font-body text-on-surface-variant text-lg italic opacity-80 leading-relaxed">Real-time dashboards that sync with your development workflow to ensure the vision stays on track.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-40 px-6 text-center relative overflow-hidden">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
                    <div className="max-w-4xl mx-auto glass-panel bg-surface-container/40 p-20 rounded-[2.5rem] border border-outline-variant/10 relative overflow-hidden shadow-2xl group">
                        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-tertiary/5 rounded-full blur-[100px] group-hover:bg-tertiary/10 transition-all duration-[3000ms]"></div>
                        <h2 className="font-headline text-5xl font-black tracking-tighter text-white mb-6 uppercase italic">Stop building in the dark.</h2>
                        <p className="font-body text-lg text-on-surface-variant mb-12 max-w-xl mx-auto italic opacity-70">Join 4,000+ founders who used launchOS to turn their ideas into profitable companies this year.</p>
                        <Link href="/dashboard" className="button-metallic text-on-primary px-12 py-5 rounded-xl font-headline font-black text-xs uppercase tracking-[0.2em] hover:scale-105 active:scale-95 transition-all duration-300 shadow-[0_20px_50px_rgba(103,156,255,0.2)] inline-block">
                            Get Started for Free
                        </Link>
                    </div>
                </section>

                {/* Footer */}
                <footer className="w-full py-12 mt-auto flex flex-col md:flex-row justify-between items-center px-16 border-t border-white/5 bg-slate-950/80 backdrop-blur-md relative z-10">
                    <p className="font-body text-[10px] uppercase tracking-[0.3em] text-slate-500 font-black">© 2024 launchOS. Editorial Precision.</p>
                    <div className="flex gap-12 mt-6 md:mt-0">
                        <Link className="font-body text-[10px] uppercase tracking-[0.3em] text-slate-600 hover:text-tertiary transition-colors font-black" href="#">Terms</Link>
                        <Link className="font-body text-[10px] uppercase tracking-[0.3em] text-slate-600 hover:text-tertiary transition-colors font-black" href="#">Privacy</Link>
                        <Link className="font-body text-[10px] uppercase tracking-[0.3em] text-slate-600 hover:text-tertiary transition-colors font-black" href="#">Support</Link>
                    </div>
                </footer>
            </main>
        </div>
    )
}

