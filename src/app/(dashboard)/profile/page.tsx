'use client'

import React from 'react'
import Link from 'next/link'
import { Rocket, Target, Award, ArrowUpRight, BarChart3, Clock, Zap } from 'lucide-react'

export default function ProfilePage() {
    return (
        <div className="max-w-4xl mx-auto space-y-12 pb-24 text-[#FAFAFA] font-sans">
            
            {/* Header Profile Info */}
            <div className="flex flex-col md:flex-row gap-8 items-center md:items-start bg-[#111111] p-8 rounded-3xl border border-white/5 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#C8F135] via-[#C8F135]/50 to-transparent"></div>
                <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-[#C8F135] shrink-0">
                    <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCH4gKLhrDFWmynW03QLjoq1R47wDm6tNj1t9dU_XARSRHDlqeR2H2KiNsNyGOvrTrYyMmHzZuC_6x-IyTeKv8VG7WuXTUQAOHX5iRNZxSS3uJ9DFvCEn65SRjZWu_oDUd1CTXeRUxJKw_SVjbK7LpnQR2FgVzkecj3lwIEl80Oge13rzfpPdBBFVNM4Z4nZhyFtvdKsOtegaBwksrxjGzt_vFgowMDLDlAvV6aGLhZjtsvuNdFVidmotrRAyQldyxcLi5-5m4y4yPH" alt="Avatar" className="w-full h-full object-cover" />
                </div>
                <div className="text-center md:text-left space-y-3">
                    <div className="flex items-center justify-center md:justify-start gap-3">
                        <h1 className="text-3xl font-bold font-headline">The Founder</h1>
                        <span className="px-3 py-1 bg-blue-500/10 text-blue-400 text-[10px] font-bold uppercase tracking-widest rounded-full border border-blue-500/20">Pro Member</span>
                    </div>
                    <p className="text-[#888888] max-w-lg">Building the future, one idea at a time. Serial maker focused on AI, developer tools, and productivity.</p>
                    <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-2">
                        <div className="flex items-center gap-1.5 text-xs text-[#888888]">
                            <Clock className="w-3.5 h-3.5" /> Joined Oct 2023
                        </div>
                        <div className="flex items-center gap-1.5 text-xs text-[#888888]">
                            <Zap className="w-3.5 h-3.5" /> 450 Credits Available
                        </div>
                    </div>
                </div>
                <div className="md:ml-auto shrink-0 flex gap-3 w-full md:w-auto">
                    <Link href="/settings" className="flex-1 md:flex-none text-center bg-white/5 hover:bg-white/10 text-white px-6 py-2.5 rounded-xl text-sm font-medium transition-colors border border-white/10">
                        Edit Profile
                    </Link>
                </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-[#111111] p-6 rounded-2xl border border-white/5 flex flex-col justify-between">
                    <div className="flex justify-between items-start mb-4">
                        <div className="p-2 bg-[#C8F135]/10 rounded-lg">
                            <Rocket className="w-5 h-5 text-[#C8F135]" />
                        </div>
                    </div>
                    <div>
                        <p className="text-3xl font-bold mb-1">12</p>
                        <p className="text-sm text-[#888888] uppercase tracking-wider font-bold">Startups Analyzed</p>
                    </div>
                </div>
                
                <div className="bg-[#111111] p-6 rounded-2xl border border-white/5 flex flex-col justify-between">
                    <div className="flex justify-between items-start mb-4">
                        <div className="p-2 bg-purple-500/10 rounded-lg">
                            <Target className="w-5 h-5 text-purple-400" />
                        </div>
                    </div>
                    <div>
                        <p className="text-3xl font-bold mb-1">8</p>
                        <p className="text-sm text-[#888888] uppercase tracking-wider font-bold">Niches Validated</p>
                    </div>
                </div>

                <div className="bg-[#111111] p-6 rounded-2xl border border-white/5 flex flex-col justify-between">
                    <div className="flex justify-between items-start mb-4">
                        <div className="p-2 bg-blue-500/10 rounded-lg">
                            <BarChart3 className="w-5 h-5 text-blue-400" />
                        </div>
                    </div>
                    <div>
                        <p className="text-3xl font-bold mb-1">Top 5%</p>
                        <p className="text-sm text-[#888888] uppercase tracking-wider font-bold">Founder Rank</p>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="grid md:grid-cols-3 gap-8">
                {/* Recent Analyses */}
                <div className="md:col-span-2 space-y-6">
                    <div className="flex items-center justify-between">
                        <h2 className="text-lg font-bold font-headline flex items-center gap-2">
                            Recent Analyses
                        </h2>
                        <Link href="/dashboard" className="text-sm text-[#C8F135] hover:underline flex items-center gap-1">
                            View all <ArrowUpRight className="w-3 h-3" />
                        </Link>
                    </div>
                    <div className="space-y-4">
                        {[
                            { name: 'AI Marketing Automation', date: '2 days ago', status: 'Validated', score: 92 },
                            { name: 'DevTools for Next.js', date: '1 week ago', status: 'Exploring', score: 78 },
                            { name: 'B2B SaaS Pricing Tool', date: '2 weeks ago', status: 'Building MVP', score: 85 },
                        ].map((item, i) => (
                            <Link href={`/dashboard/analysis/demo-${i}`} key={i} className="block bg-[#111111] p-5 rounded-2xl border border-white/5 hover:border-[#C8F135]/30 transition-all group">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h3 className="font-bold text-lg group-hover:text-[#C8F135] transition-colors">{item.name}</h3>
                                        <div className="flex items-center gap-3 mt-1.5">
                                            <span className="text-xs text-[#888888]">{item.date}</span>
                                            <span className="w-1 h-1 bg-white/20 rounded-full"></span>
                                            <span className="text-xs text-[#888888]">{item.status}</span>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-2xl font-bold text-[#C8F135]">{item.score}</div>
                                        <div className="text-[10px] uppercase tracking-wider font-bold text-[#888888]">Score</div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Achievements */}
                <div className="space-y-6">
                    <h2 className="text-lg font-bold font-headline flex items-center gap-2">
                        Achievements
                    </h2>
                    <div className="bg-[#111111] rounded-2xl border border-white/5 p-6 space-y-6">
                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded-full bg-[#C8F135]/10 flex items-center justify-center shrink-0 border border-[#C8F135]/20">
                                <span className="text-lg">🔥</span>
                            </div>
                            <div>
                                <h4 className="font-bold text-sm">First Spark</h4>
                                <p className="text-xs text-[#888888] mt-1">Ran your first startup idea through the Validation engine.</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center shrink-0 border border-purple-500/20">
                                <span className="text-lg">💰</span>
                            </div>
                            <div>
                                <h4 className="font-bold text-sm">Premium Founder</h4>
                                <p className="text-xs text-[#888888] mt-1">Upgraded to a paid plan to unlock the full potential.</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4 opacity-40 grayscale">
                            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
                                <Award className="w-4 h-4" />
                            </div>
                            <div>
                                <h4 className="font-bold text-sm">Serial Launcher</h4>
                                <p className="text-xs text-[#888888] mt-1">Validate 10 different ideas. (8/10 completed)</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
