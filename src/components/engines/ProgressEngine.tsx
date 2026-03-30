'use client'

import React from 'react'
import { cn } from '@/lib/utils'

interface Milestone {
    name: string
    status: string
    completion: number
}

interface ProgressData {
    current_revenue: string
    customer_count: string
    growth_rate: string
    milestones: Milestone[]
}

interface ProgressEngineProps {
    data: ProgressData
}

export function ProgressEngine({ data }: ProgressEngineProps) {
    if (!data) return null

    return (
        <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000">
            {/* Header Section */}
            <section className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
                <div>
                    <h1 className="text-5xl font-black font-headline tracking-tighter text-white uppercase italic antialiased drop-shadow-2xl">Execution Velocity</h1>
                    <p className="text-on-surface-variant font-body mt-3 text-lg leading-relaxed antialiased opacity-70">
                        Tracking the transition from conceptualization to market entry for <span className="text-white font-bold italic">Launch Intelligence Protocol</span>.
                    </p>
                </div>
                <div className="flex gap-6">
                    <div className="bg-surface-container-high/40 backdrop-blur-3xl px-8 py-5 rounded-2xl border border-white/5 text-right shadow-2xl glass-edge group">
                        <span className="block text-[10px] uppercase tracking-[0.4em] text-tertiary font-black italic antialiased opacity-40 group-hover:opacity-100 transition-opacity">Health_Score</span>
                        <span className="text-3xl font-black text-white font-headline italic tracking-tighter antialiased">92.4</span>
                    </div>
                    <div className="bg-surface-container-high/40 backdrop-blur-3xl px-8 py-5 rounded-2xl border border-white/5 text-right shadow-2xl glass-edge group">
                        <span className="block text-[10px] uppercase tracking-[0.4em] text-primary font-black italic antialiased opacity-40 group-hover:opacity-100 transition-opacity">Time_to_MVP</span>
                        <span className="text-3xl font-black text-white font-headline italic tracking-tighter antialiased">14d</span>
                    </div>
                </div>
            </section>

            {/* Top Bento Layer */}
            <div className="grid grid-cols-12 gap-6 mb-6">
                {/* Velocity Graph Card */}
                <div className="col-span-12 lg:col-span-8 bg-surface-container-low rounded-xl p-10 relative overflow-hidden group border border-white/5 shadow-2xl">
                    <div className="flex justify-between items-start mb-10">
                        <div>
                            <h3 className="text-2xl font-black font-headline text-white uppercase italic tracking-tight antialiased">Momentum Analysis</h3>
                            <p className="text-xs text-on-surface-variant mt-2 antialiased italic opacity-40">Neural deployment points vs. roadmap projection</p>
                        </div>
                        <div className="flex gap-6">
                            <span className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-on-surface-variant/40 italic"><div className="w-2.5 h-2.5 rounded-full bg-tertiary shadow-[0_0_8px_#679cff]"></div> ACTUAL</span>
                            <span className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-on-surface-variant/40 italic"><div className="w-2.5 h-2.5 rounded-full bg-white/10 ring-1 ring-white/5"></div> PROJECTED</span>
                        </div>
                    </div>
                    {/* Simulated Line Chart */}
                    <div className="h-64 flex items-end justify-between gap-1 relative pt-4 px-4 overflow-hidden">
                        <svg className="absolute inset-0 w-full h-full opacity-40" preserveAspectRatio="none">
                            <path
                                d="M0,220 Q100,200 200,140 T400,100 T600,60 T800,20"
                                fill="none"
                                stroke="#679cff"
                                strokeLinecap="round"
                                strokeWidth="4"
                                className="drop-shadow-[0_0_10px_#679cff]"
                            />
                            <path
                                d="M0,220 Q100,210 200,180 T400,160 T600,140 T800,130"
                                fill="none"
                                stroke="#444749"
                                strokeDasharray="12,12"
                                strokeWidth="2"
                                className="opacity-20"
                            />
                        </svg>
                        {/* Chart Points */}
                        <div className="absolute bottom-[220px] left-[0%] w-3 h-3 rounded-full bg-tertiary shadow-[0_0_15px_#679cff] z-10"></div>
                        <div className="absolute bottom-[140px] left-[25%] w-3 h-3 rounded-full bg-tertiary shadow-[0_0_15px_#679cff] z-10 hover:scale-150 transition-transform cursor-pointer"></div>
                        <div className="absolute bottom-[100px] left-[50%] w-3 h-3 rounded-full bg-tertiary shadow-[0_0_15px_#679cff] z-10 hover:scale-150 transition-transform cursor-pointer"></div>
                        <div className="absolute bottom-[20px] left-[100%] w-3 h-3 rounded-full bg-tertiary shadow-[0_0_15px_#679cff] z-10"></div>
                    </div>
                    <div className="mt-8 pt-8 border-t border-white/5 flex justify-between text-[10px] font-black text-on-surface-variant uppercase tracking-[0.4em] italic opacity-20 transition-opacity hover:opacity-100 duration-700 antialiased">
                        <span>Initiation_Day_0</span>
                        <span>Phase_1_Sync</span>
                        <span>Mid_Cycle_Audit</span>
                        <span>Beta_Lock</span>
                        <span>Market_Entry_Day_60</span>
                    </div>
                </div>

                {/* Risk Radar Card */}
                <div className="col-span-12 lg:col-span-4 bg-surface-container rounded-xl p-10 border border-white/5 flex flex-col items-center justify-center relative shadow-2xl group overflow-hidden">
                    <div className="absolute -inset-10 bg-tertiary/5 blur-[80px] rounded-full pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity"></div>
                    <h3 className="text-2xl font-black font-headline text-white mb-8 w-full text-left uppercase italic tracking-tight antialiased">Risk Radar</h3>
                    <div className="relative w-56 h-56 border border-white/5 rounded-full flex items-center justify-center shadow-inner">
                        <div className="absolute w-40 h-40 border border-white/5 rounded-full"></div>
                        <div className="absolute w-24 h-24 border border-white/5 rounded-full"></div>
                        {/* Radar Lines */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-full h-px bg-white/5"></div>
                            <div className="h-full w-px bg-white/5"></div>
                        </div>
                        {/* Risk Shape (SVG) */}
                        <svg className="absolute inset-0 w-full h-full p-6 overflow-visible filter drop-shadow-[0_0_20px_rgba(103,156,255,0.4)]">
                            <polygon
                                fill="rgba(103, 156, 255, 0.2)"
                                points="100,20 170,80 150,150 50,160 30,80"
                                stroke="#679cff"
                                strokeWidth="3"
                                className="animate-pulse"
                            />
                            <circle cx="100" cy="20" fill="#679cff" r="5" />
                        </svg>
                        {/* Labels */}
                        <span className="absolute top-0 text-[10px] font-black text-tertiary uppercase tracking-widest italic antialiased transform -translate-y-4">MARKET</span>
                        <span className="absolute bottom-0 text-[10px] font-black text-tertiary uppercase tracking-widest italic antialiased transform translate-y-4">TECH</span>
                        <span className="absolute left-0 text-[10px] font-black text-tertiary uppercase tracking-widest italic antialiased transform -translate-x-8 -rotate-90">CAPITAL</span>
                        <span className="absolute right-0 text-[10px] font-black text-tertiary uppercase tracking-widest italic antialiased transform translate-x-8 rotate-90">SPEED</span>
                    </div>
                    <p className="mt-10 text-[13px] text-center text-on-surface-variant leading-relaxed antialiased italic opacity-70">
                        Current high risk detected in <span className="text-tertiary font-black italic">Execution_Speed</span>. Technical constraints mitigating direct market entry exposure.
                    </p>
                </div>
            </div>

            {/* Bottom Modular Layer */}
            <div className="grid grid-cols-12 gap-6">
                {/* Milestone Status */}
                <div className="col-span-12 lg:col-span-8 space-y-8">
                    <h2 className="text-3xl font-black font-headline tracking-tighter text-white uppercase italic antialiased">Stage Progression</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {data.milestones.map((milestone, i) => (
                            <div key={i} className="bg-surface-container-low p-8 rounded-2xl border border-white/5 hover:bg-surface-bright/10 transition-all duration-700 cursor-pointer shadow-xl group glass-edge">
                                <div className="flex justify-between items-start mb-6">
                                    <span className="material-symbols-outlined text-3xl text-tertiary group-hover:scale-110 transition-transform">
                                        {i === 0 ? 'category' : i === 1 ? 'verified' : i === 2 ? 'architecture' : 'campaign'}
                                    </span>
                                    <span className={cn(
                                        "text-[10px] font-black px-3 py-1 rounded-full border border-white/5 antialiased tracking-widest italic",
                                        milestone.completion === 100 ? "bg-tertiary/20 text-tertiary shadow-[0_0_10px_#679cff]" : "bg-white/5 text-on-surface-variant/40"
                                    )}>
                                        {milestone.status}
                                    </span>
                                </div>
                                <h4 className="text-xl font-black font-headline text-white uppercase italic tracking-tight antialiased">{milestone.name}</h4>
                                <div className="mt-6 h-2 w-full bg-surface-container-highest rounded-full overflow-hidden border border-white/5">
                                    <div
                                        className={cn(
                                            "h-full shadow-[0_0_15px_#679cff] transition-all duration-[2000ms] custom-ease",
                                            milestone.completion === 100 ? "bg-tertiary" : "bg-primary"
                                        )}
                                        style={{ width: `${milestone.completion}%` }}
                                    ></div>
                                </div>
                                <p className="mt-4 text-[13px] text-on-surface-variant leading-relaxed antialiased italic opacity-40 group-hover:opacity-100 transition-opacity">
                                    Execution index at {milestone.completion}% for this vertical protocol.
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Strategic Action Card */}
                <div className="col-span-12 lg:col-span-4 flex flex-col gap-8">
                    <h2 className="text-3xl font-black font-headline tracking-tighter text-white uppercase italic antialiased">Strategic Focus</h2>
                    <div className="flex-1 bg-gradient-to-br from-surface-container-high/60 to-surface-container-low p-10 rounded-2xl border border-white/5 flex flex-col justify-between shadow-[0_40px_100px_rgba(0,0,0,0.6)] relative overflow-hidden group glass-edge">
                        {/* Background Accents */}
                        <div className="absolute -top-12 -right-12 w-48 h-48 bg-tertiary/10 rounded-full blur-[100px] pointer-events-none group-hover:bg-tertiary/20 transition-all duration-1000"></div>
                        <div>
                            <div className="flex items-center gap-3 mb-8">
                                <span className="w-2.5 h-2.5 rounded-full bg-tertiary shadow-[0_0_10px_#679cff] animate-pulse"></span>
                                <span className="text-[10px] font-black tracking-[0.4em] text-tertiary uppercase italic antialiased">NEXT_PRIORITY</span>
                            </div>
                            <h3 className="text-3xl font-black text-white leading-[1.1] font-headline uppercase italic tracking-tight antialiased">Finalize Core Landing Page Protocol</h3>
                            <p className="mt-6 text-on-surface-variant leading-relaxed text-[15px] antialiased italic opacity-70">
                                Based on cycle-14 validation synthesis, emphasize <span className="text-white font-bold">"Vertical Data Sovereignty"</span> more heavily in the entry hero section. Current conversion forecast: <span className="text-tertiary font-black">+12%</span>.
                            </p>
                        </div>
                        <div className="mt-12 space-y-5">
                            <button className="w-full bg-white/5 text-white py-5 rounded-xl font-black text-[11px] tracking-[0.3em] uppercase italic border border-white/10 hover:bg-tertiary hover:border-tertiary hover:text-on-tertiary transition-all duration-700 custom-ease shadow-xl flex items-center justify-center gap-4 group/btn">
                                <span className="material-symbols-outlined text-[20px] group-hover/btn:rotate-45 transition-transform duration-700">open_in_new</span> INITIALIZE_TASK_SYNC
                            </button>
                            <button className="w-full bg-transparent text-on-surface-variant font-black text-[10px] uppercase tracking-[0.3em] italic hover:text-white transition-colors duration-500 py-2 antialiased">
                                VIEW_PROTOCOL_BACKLOG
                            </button>
                        </div>
                    </div>
                    {/* Snapshot */}
                    <div className="bg-surface-container-low/40 backdrop-blur-3xl p-8 rounded-2xl border border-white/5 flex items-center gap-6 shadow-2xl glass-edge group hover:bg-surface-container-low/60 transition-all duration-700">
                        <div className="w-16 h-16 rounded-xl overflow-hidden shadow-inner border border-white/5 relative">
                            <div className="absolute inset-0 bg-tertiary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10" />
                            <img
                                className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 transition-all duration-700"
                                src="https://images.unsplash.com/photo-1551288049-bbbda5366392?auto=format&fit=crop&q=80&w=200"
                                alt="Context Market"
                            />
                        </div>
                        <div>
                            <p className="text-[9px] font-black text-tertiary uppercase tracking-[0.4em] italic antialiased opacity-40 group-hover:opacity-100 transition-opacity">Market_Context</p>
                            <p className="text-[13px] font-black text-white mt-1 italic tracking-tight antialiased uppercase">Competition Index: LOW (+4% MoM)</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
