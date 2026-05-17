'use client'

import React from 'react'
import Link from 'next/link'
import { Rocket, Target, Award, ArrowUpRight, BarChart3, Clock, Zap } from 'lucide-react'

export default function ProfilePage() {
    return (
        <div className="max-w-4xl mx-auto space-y-12 pb-24 text-on-surface font-sans">
            
            {/* Header Profile Info */}
            <div className="flex flex-col md:flex-row gap-8 items-center md:items-start bg-surface-container-low/50 p-8 rounded-3xl border border-outline-variant/15 relative overflow-hidden backdrop-blur-sm shadow-md">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-tertiary via-tertiary/50 to-transparent"></div>
                <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-tertiary shrink-0 shadow-lg">
                    <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCH4gKLhrDFWmynW03QLjoq1R47wDm6tNj1t9dU_XARSRHDlqeR2H2KiNsNyGOvrTrYyMmHzZuC_6x-IyTeKv8VG7WuXTUQAOHX5iRNZxSS3uJ9DFvCEn65SRjZWu_oDUd1CTXeRUxJKw_SVjbK7LpnQR2FgVzkecj3lwIEl80Oge13rzfpPdBBFVNM4Z4nZhyFtvdKsOtegaBwksrxjGzt_vFgowMDLDlAvV6aGLhZjtsvuNdFVidmotrRAyQldyxcLi5-5m4y4yPH" alt="Avatar" className="w-full h-full object-cover" />
                </div>
                <div className="text-center md:text-left space-y-3">
                    <div className="flex items-center justify-center md:justify-start gap-3">
                        <h1 className="text-3xl font-bold font-headline text-on-surface">The Founder</h1>
                        <span className="px-3 py-1 bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest rounded-full border border-primary/20 font-headline">Pro Member</span>
                    </div>
                    <p className="text-on-surface-variant/80 font-body max-w-lg">Building the future, one idea at a time. Serial maker focused on AI, developer tools, and productivity.</p>
                    <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-2">
                        <div className="flex items-center gap-1.5 text-xs text-on-surface-variant/80 font-body">
                            <Clock className="w-3.5 h-3.5" /> Joined Oct 2023
                        </div>
                        <div className="flex items-center gap-1.5 text-xs text-on-surface-variant/80 font-body">
                            <Zap className="w-3.5 h-3.5" /> 450 Credits Available
                        </div>
                    </div>
                </div>
                <div className="md:ml-auto shrink-0 flex gap-3 w-full md:w-auto">
                    <Link href="/settings" className="flex-1 md:flex-none text-center bg-surface-container-high/50 hover:bg-surface-container-high text-on-surface px-6 py-2.5 rounded-xl text-sm font-bold font-headline transition-colors border border-outline-variant/15 shadow-sm">
                        Edit Profile
                    </Link>
                </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-surface-container-low/50 p-6 rounded-2xl border border-outline-variant/15 flex flex-col justify-between backdrop-blur-sm shadow-md">
                    <div className="flex justify-between items-start mb-4">
                        <div className="p-2 bg-tertiary/10 rounded-lg border border-tertiary/20">
                            <Rocket className="w-5 h-5 text-tertiary" />
                        </div>
                    </div>
                    <div>
                        <p className="text-3xl font-bold font-headline mb-1 text-on-surface">12</p>
                        <p className="text-sm text-on-surface-variant/80 uppercase tracking-wider font-bold font-headline">Startups Analyzed</p>
                    </div>
                </div>
                
                <div className="bg-surface-container-low/50 p-6 rounded-2xl border border-outline-variant/15 flex flex-col justify-between backdrop-blur-sm shadow-md">
                    <div className="flex justify-between items-start mb-4">
                        <div className="p-2 bg-primary/10 rounded-lg border border-primary/20">
                            <Target className="w-5 h-5 text-primary" />
                        </div>
                    </div>
                    <div>
                        <p className="text-3xl font-bold font-headline mb-1 text-on-surface">8</p>
                        <p className="text-sm text-on-surface-variant/80 uppercase tracking-wider font-bold font-headline">Niches Validated</p>
                    </div>
                </div>

                <div className="bg-surface-container-low/50 p-6 rounded-2xl border border-outline-variant/15 flex flex-col justify-between backdrop-blur-sm shadow-md">
                    <div className="flex justify-between items-start mb-4">
                        <div className="p-2 bg-secondary/10 rounded-lg border border-secondary/20">
                            <BarChart3 className="w-5 h-5 text-secondary" />
                        </div>
                    </div>
                    <div>
                        <p className="text-3xl font-bold font-headline mb-1 text-on-surface">Top 5%</p>
                        <p className="text-sm text-on-surface-variant/80 uppercase tracking-wider font-bold font-headline">Founder Rank</p>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="grid md:grid-cols-3 gap-8">
                {/* Recent Analyses */}
                <div className="md:col-span-2 space-y-6">
                    <div className="flex items-center justify-between">
                        <h2 className="text-lg font-bold font-headline flex items-center gap-2 text-on-surface">
                            Recent Analyses
                        </h2>
                        <Link href="/dashboard" className="text-sm text-tertiary hover:underline flex items-center gap-1 font-headline font-bold">
                            View all <ArrowUpRight className="w-3 h-3" />
                        </Link>
                    </div>
                    <div className="space-y-4">
                        {[
                            { name: 'AI Marketing Automation', date: '2 days ago', status: 'Validated', score: 92 },
                            { name: 'DevTools for Next.js', date: '1 week ago', status: 'Exploring', score: 78 },
                            { name: 'B2B SaaS Pricing Tool', date: '2 weeks ago', status: 'Building MVP', score: 85 },
                        ].map((item, i) => (
                            <Link href={`/dashboard/analysis/demo-${i}`} key={i} className="block bg-surface-container-low/50 p-5 rounded-2xl border border-outline-variant/15 hover:border-tertiary/30 transition-all duration-300 group backdrop-blur-sm shadow-md">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h3 className="font-headline font-bold text-lg text-on-surface group-hover:text-tertiary transition-colors">{item.name}</h3>
                                        <div className="flex items-center gap-3 mt-1.5 font-body">
                                            <span className="text-xs text-on-surface-variant/80">{item.date}</span>
                                            <span className="w-1 h-1 bg-white/20 rounded-full"></span>
                                            <span className="text-xs text-on-surface-variant/80">{item.status}</span>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-2xl font-bold font-headline text-tertiary">{item.score}</div>
                                        <div className="text-[10px] uppercase tracking-wider font-bold font-headline text-on-surface-variant/80">Score</div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Achievements */}
                <div className="space-y-6">
                    <h2 className="text-lg font-bold font-headline flex items-center gap-2 text-on-surface">
                        Achievements
                    </h2>
                    <div className="bg-surface-container-low/50 rounded-2xl border border-outline-variant/15 p-6 space-y-6 backdrop-blur-sm shadow-md">
                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded-full bg-tertiary/10 flex items-center justify-center shrink-0 border border-tertiary/20">
                                <span className="text-lg">🔥</span>
                            </div>
                            <div>
                                <h4 className="font-headline font-bold text-sm text-on-surface">First Spark</h4>
                                <p className="text-xs text-on-surface-variant/80 font-body mt-1">Ran your first startup idea through the Validation engine.</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20">
                                <span className="text-lg">💰</span>
                            </div>
                            <div>
                                <h4 className="font-headline font-bold text-sm text-on-surface">Premium Founder</h4>
                                <p className="text-xs text-on-surface-variant/80 font-body mt-1">Upgraded to a paid plan to unlock the full potential.</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4 opacity-40 grayscale">
                            <div className="w-10 h-10 rounded-full bg-surface-container/50 flex items-center justify-center shrink-0 border border-outline-variant/15">
                                <Award className="w-4 h-4 text-on-surface" />
                            </div>
                            <div>
                                <h4 className="font-headline font-bold text-sm text-on-surface">Serial Launcher</h4>
                                <p className="text-xs text-on-surface-variant/80 font-body mt-1">Validate 10 different ideas. (8/10 completed)</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
