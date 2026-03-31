'use client'

import React from 'react'
import Link from 'next/link'

export default function LandingPage() {
    return (
        <div className="bg-surface selection:bg-tertiary/30 selection:text-tertiary-fixed min-h-screen antialiased">
            {/* TopNavBar */}
            <nav className="fixed top-0 w-full z-50 bg-slate-900/60 backdrop-blur-xl flex justify-between items-center h-16 px-8 max-w-full shadow-[0px_4px_12px_rgba(0,0,0,0.2)]">
                <div className="flex items-center gap-8">
                    <span className="text-xl font-bold tracking-tighter text-slate-100 font-headline">LaunchOS</span>
                    <div className="hidden md:flex gap-6 items-center">
                        <Link className="text-slate-400 font-medium hover:text-slate-200 transition-colors duration-200 font-body text-sm" href="/dashboard">Dashboard</Link>
                        <Link className="text-slate-400 font-medium hover:text-slate-200 transition-colors duration-200 font-body text-sm" href="/dashboard">Projects</Link>
                        <Link className="text-slate-400 font-medium hover:text-slate-200 transition-colors duration-200 font-body text-sm" href="/dashboard">Insights</Link>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <Link href="/dashboard" className="bg-surface-container-high text-slate-200 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-surface-bright transition-all duration-300 scale-95 active:scale-90">
                        Upgrade to Pro
                    </Link>
                    <div className="w-8 h-8 rounded-full bg-surface-container overflow-hidden border border-outline-variant/20">
                        <img
                            alt="Founder Profile"
                            className="w-full h-full object-cover"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA7eF7035V9Ps5oLjD3xDo1FvYEW4YzEijIuyCwn-ASxUM_9MEfiXkiyfOglCBLldt0JhyM4TNKy32_8mA1e0rJRZXUfTB6GDPN-LSlQFo4Smz3cm7pn2uB27O559S3wGflBelQZXyq-D7hFB5H9LyZZFuKJWTwTaZfRo5j17B9HgrJpu0O6gyZVtEMSaeHCfYrLoKpbrPHLuRSK76HcgWCJZNrVgWZjjDlFC_w_yCtkviN8FVLW_28R0-xGMQrKFjTCpunZ_7z8N8f"
                        />
                    </div>
                </div>
            </nav>

            {/* Main Content Canvas */}
            <main className="relative min-h-screen flex flex-col hero-gradient pt-16">
                {/* Hero Section */}
                <section className="flex-1 flex flex-col items-center justify-center px-6 text-center py-20 lg:py-32">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-variant/40 border border-outline-variant/10 mb-8">
                        <span className="w-2 h-2 rounded-full bg-tertiary animate-pulse"></span>
                        <span className="text-xs font-label tracking-widest text-on-surface-variant">Intelligence v2.4 Live</span>
                    </div>

                    {/* Architectural Headline - Professional Density */}
                    <h1 className="font-headline text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-on-surface max-w-5xl leading-[0.95] mb-8">
                        From raw idea to <br className="hidden md:block" /> <span className="text-tertiary">validation</span> in seconds.
                    </h1>

                    <p className="font-body text-lg md:text-xl text-on-surface-variant max-w-2xl leading-relaxed mb-12">
                        The AI-powered operating system for ambitious founders. Go from a raw concept to a fully validated MVP plan, pricing strategy, and outreach roadmap.
                    </p>

                    {/* Centered Input Command Bar */}
                    <Link href="/dashboard" className="w-full max-w-3xl relative group block">
                        <div className="absolute -inset-1 bg-gradient-to-r from-tertiary/20 to-primary/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="relative flex flex-col md:flex-row p-2 bg-surface-container-low rounded-xl border border-outline-variant/15 shadow-[0px_20px_40px_rgba(0,0,0,0.4)]">
                            <div className="flex-1 flex items-center px-4">
                                <span className="material-symbols-outlined text-outline mr-3">lightbulb</span>
                                <span className="w-full bg-transparent border-none focus:ring-0 text-on-surface-variant/50 font-body py-4 text-left">Enter your startup idea here...</span>
                            </div>
                            <button className="button-metallic text-on-primary px-8 py-4 rounded-lg font-headline font-bold text-sm tracking-tight hover:brightness-110 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 leading-none">
                                Analyze Idea
                                <span className="material-symbols-outlined text-sm">arrow_forward</span>
                            </button>
                        </div>
                    </Link>
                </section>

                {/* Feature Bento Grid Section */}
                <section className="px-8 md:px-12 py-32 bg-surface-container-low/30">
                    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-4">
                        {/* Main Visual Bento */}
                        <div className="md:col-span-8 h-[500px] bg-surface-container rounded-xl overflow-hidden relative group border border-outline-variant/10">
                            <img
                                alt="OS Interface Preview"
                                className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-[2000ms] ease-out"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB4yV-Rr56-9JYvmldC8C8yiTlp05-1uhU-b-EicYqH76M16pwqi81iQJK0Mkju6gYYpxykktv7l4ao5Jrb1-S6wB6LHlYvMzj4Xcdi60Xpriu_Ml_hc0I4nAiGuxO1U4saGrlb5U0ejZGDIc4rUxgsE8qC5o_avb7XnV4Gq4-uxf1y9Y_ohdcNbnU67lURtlK6tyI_0bBcZKwze8O0gkZOTbICLay_f3LqQd2Fbh_MoM4FYSlzrtgyMVVYRK3kjEcq4s-Cr5v3Dwh-"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-surface-container via-transparent to-transparent"></div>
                            <div className="absolute bottom-8 left-8">
                                <h3 className="font-headline text-3xl font-bold mb-2">Automated MVP Scoping</h3>
                                <p className="font-body text-on-surface-variant max-w-md">Our AI deconstructs your vision into actionable technical tasks and product milestones instantly.</p>
                            </div>
                        </div>

                        {/* Secondary Bento (Vertical) */}
                        <div className="md:col-span-4 grid grid-rows-2 gap-4">
                            <div className="bg-surface-container-high rounded-xl p-8 flex flex-col justify-between border border-outline-variant/10">
                                <span className="material-symbols-outlined text-tertiary text-4xl">verified</span>
                                <div>
                                    <h4 className="font-headline text-xl font-bold mb-1">Market Validation</h4>
                                    <p className="font-body text-sm text-on-surface-variant">Instant competitor analysis and market gap identification.</p>
                                </div>
                            </div>
                            <div className="bg-surface-bright rounded-xl p-8 flex flex-col justify-between border border-outline-variant/20 shadow-inner">
                                <span className="material-symbols-outlined text-primary text-4xl">payments</span>
                                <div>
                                    <h4 className="font-headline text-xl font-bold mb-1">Pricing Strategy</h4>
                                    <p className="font-body text-sm text-on-primary-container">Dynamic modeling based on current SaaS benchmarks.</p>
                                </div>
                            </div>
                        </div>

                        {/* Bottom Row Bento */}
                        <div className="md:col-span-4 bg-surface-container rounded-xl p-8 border border-outline-variant/10">
                            <span className="material-symbols-outlined text-on-surface-variant mb-6 block">campaign</span>
                            <h4 className="font-headline text-xl font-bold mb-2">Outreach Roadmap</h4>
                            <p className="font-body text-sm text-on-surface-variant leading-relaxed">Personalized LinkedIn and Email templates designed for your specific niche conversion.</p>
                        </div>
                        <div className="md:col-span-8 bg-surface-container-highest rounded-xl p-8 border border-outline-variant/10 flex items-center gap-12">
                            <div className="hidden lg:block w-32 h-32 flex-shrink-0 bg-surface rounded-full border border-outline-variant/20 overflow-hidden">
                                <img
                                    alt="Technology focus"
                                    className="w-full h-full object-cover opacity-50"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAGM1gPsdKRGe23D9ycgZaCurk4t1lzEtWrGNMU9KICjiZxGohw9mmYInOc_PvBWSPuiqA0puLWLRsWZG4ooQYEeUw4BhrN4nKXeEAicMFH7cGtv6rikv9Dao_gnd-3gAMoo2TIXt0xzNY_pSZ-YWpBC1bV6OtIs6eMzrVQNL4wAursUj50VLK-YGnncIed-fzSEloxOZsce_ncBteyFEdQLATTNuRBd_TezZVz0bpaHjdANGvd8tDxjyamC6o58mFUAkK33_tKyB80"
                                />
                            </div>
                            <div>
                                <h4 className="font-headline text-2xl font-bold mb-2">Progress Tracking</h4>
                                <p className="font-body text-on-surface-variant">Real-time dashboards that sync with your development workflow to ensure the vision stays on track.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-32 px-6 text-center">
                    <div className="max-w-4xl mx-auto glass-panel bg-surface-container/40 p-16 rounded-3xl border border-outline-variant/10 relative overflow-hidden">
                        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-tertiary/10 rounded-full blur-3xl"></div>
                        <h2 className="font-headline text-4xl font-extrabold mb-6">Stop building in the dark.</h2>
                        <p className="font-body text-on-surface-variant mb-10 max-w-xl mx-auto">Join 4,000+ founders who used launchOS to turn their ideas into profitable companies this year.</p>
                        <Link href="/dashboard" className="button-metallic text-on-primary px-10 py-5 rounded-lg font-headline font-bold tracking-tight hover:scale-105 active:scale-90 transition-all duration-300 shadow-xl inline-block">
                            Get Started for Free
                        </Link>
                    </div>
                </section>

                {/* Footer */}
                <footer className="w-full py-8 mt-auto flex flex-col md:flex-row justify-between items-center px-12 border-t border-slate-800/30 bg-slate-950">
                    <p className="font-body text-[10px] tracking-widest text-slate-500 font-label">© 2024 LaunchOS. Editorial Precision.</p>
                    <div className="flex gap-8 mt-4 md:mt-0">
                        <Link className="font-body text-[10px] tracking-widest text-slate-600 hover:text-slate-400 transition-colors" href="#">Terms</Link>
                        <Link className="font-body text-[10px] tracking-widest text-slate-600 hover:text-slate-400 transition-colors" href="#">Privacy</Link>
                        <Link className="font-body text-[10px] tracking-widest text-slate-600 hover:text-slate-400 transition-colors" href="#">Support</Link>
                    </div>
                </footer>
            </main>
        </div>
    )
}
