import React from 'react'
import { cn } from '@/lib/utils'

interface MVPData {
    mvp_name: string
    mvp_description: string
    week1_features: string[]
    week2_features: string[]
    week3_features: string[]
    do_not_build: string[]
    recommended_stack: {
        frontend: string
        backend: string
        database: string
        ai: string
        payments: string
        email: string
        auth: string
    }
    build_order: string[]
    time_to_launch: string
    success_metric: string
}

export function MVPEngine({ data }: { data: MVPData }) {
    if (!data) return null

    return (
        <div className="animate-in fade-in slide-in-from-bottom-8 duration-[2000ms] custom-ease">
            {/* Engineering Header - Editorial Layout */}
            <header className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-12">
                <div className="max-w-3xl">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="px-3 py-1.5 rounded-lg bg-surface-variant/20 shadow-inner">
                            <span className="text-tertiary text-[10px] font-black tracking-[0.4em] uppercase font-label">Engineering Command</span>
                        </div>
                        <span className="w-1.5 h-1.5 rounded-full bg-tertiary shadow-[0_0_10px_#679cff]"></span>
                    </div>
                    <h1 className="text-6xl md:text-8xl font-black font-headline tracking-tighter text-white mb-8 leading-[0.9] uppercase italic">The Blueprint <br /> <span className="text-tertiary">Architecture.</span></h1>
                    <p className="text-xl text-on-surface-variant font-body leading-relaxed italic opacity-80 antialiased max-w-2xl">
                        {data.mvp_description}
                    </p>
                </div>
                <div className="bg-surface-container-low p-10 rounded-[2.5rem] flex items-center gap-10 shadow-[0_40px_80px_rgba(0,0,0,0.4)] border border-white/5 transition-all duration-700 hover:scale-[1.03]">
                    <div className="text-center">
                        <div className="text-5xl font-black text-tertiary font-headline leading-none italic tracking-tighter">A+</div>
                        <div className="text-[10px] text-on-surface-variant/40 uppercase tracking-[0.3em] font-black mt-2 font-label">Integrity</div>
                    </div>
                    <div className="h-16 w-px bg-white/5"></div>
                    <div>
                        <div className="flex items-center gap-3 mb-2">
                            <span className="material-symbols-outlined text-tertiary text-xl shadow-sm">verified_user</span>
                            <span className="text-xs font-black text-white uppercase tracking-[0.2em] font-label">Ready for Cycle</span>
                        </div>
                        <p className="text-[10px] text-on-surface-variant/60 italic font-body">Launch trajectory: {data.time_to_launch}</p>
                    </div>
                </div>
            </header>

            {/* Bento Roadmap Grid - Cinematic Structure */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-16">
                {/* Week 1: Foundation */}
                <div className="md:col-span-4 bg-surface-container-low p-12 rounded-[2.5rem] shadow-[0_40px_80px_rgba(0,0,0,0.4)] relative group border border-white/5 hover:bg-surface-container transition-all duration-700">
                    <div className="flex justify-between items-start mb-10">
                        <span className="text-6xl font-black text-white/5 font-headline leading-none italic">01</span>
                        <div className="w-16 h-16 rounded-2xl bg-surface-container-high flex items-center justify-center text-tertiary shadow-2xl glass-edge group-hover:scale-110 transition-transform">
                            <span className="material-symbols-outlined text-3xl">token</span>
                        </div>
                    </div>
                    <h3 className="text-2xl font-black font-headline mb-6 uppercase tracking-tight text-white italic leading-none">Core Frame</h3>
                    <p className="text-on-surface-variant text-base mb-10 leading-relaxed font-body italic opacity-70 antialiased">
                        Establishing the primary infrastructure and security layer. Focus on {data.week1_features[0]?.toLowerCase()}.
                    </p>
                    <ul className="space-y-4">
                        {data.week1_features.slice(0, 3).map((f, i) => (
                            <li key={i} className="flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.2em] text-on-surface-variant/60 font-label group/item">
                                <span className="material-symbols-outlined text-tertiary text-lg group-hover/item:scale-125 transition-transform">check_circle</span>
                                {f}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Week 2: Intelligence - Cinematic Shift */}
                <div className="md:col-span-8 bg-surface-container-high p-16 rounded-[2.5rem] shadow-[0_60px_120px_rgba(0,0,0,0.6)] relative overflow-hidden group border-t border-white/10 transition-all duration-1000 hover:brightness-110">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-tertiary/10 rounded-full blur-[150px] -mr-64 -mt-64"></div>
                    <div className="grid md:grid-cols-2 gap-16 relative z-10 h-full">
                        <div className="flex flex-col">
                            <span className="text-6xl font-black text-white/5 font-headline leading-none mb-10 italic">02</span>
                            <h3 className="text-4xl font-black font-headline mb-6 text-white uppercase italic tracking-tighter leading-none">Neural Spike</h3>
                            <p className="text-on-surface-variant text-base mb-12 leading-relaxed font-body italic opacity-80 antialiased">
                                Implementing core intelligence loops and growth engine integrations. Priority: {data.week2_features[0]}.
                            </p>
                            <div className="flex flex-wrap gap-3 mt-auto">
                                <span className="px-5 py-2 bg-surface-container rounded-xl text-[10px] font-black text-tertiary uppercase tracking-[0.3em] font-label glass-edge shadow-lg">
                                    / {data.recommended_stack.ai}
                                </span>
                                <span className="px-5 py-2 bg-surface-container rounded-xl text-[10px] font-black text-tertiary uppercase tracking-[0.3em] font-label glass-edge shadow-lg">
                                    / {data.recommended_stack.database}
                                </span>
                            </div>
                        </div>
                        <div className="bg-surface-container p-10 rounded-3xl shadow- inner border border-white/5 flex flex-col transition-all duration-700 hover:bg-surface-bright/20">
                            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-on-surface-variant/30 mb-8 flex items-center gap-3 font-label px-2">
                                <span className="material-symbols-outlined text-xs">auto_mode</span>
                                Polish sequence
                            </h4>
                            <div className="space-y-6">
                                {data.week3_features.slice(0, 4).map((f, i) => (
                                    <div key={i} className="flex items-center gap-4 group/list">
                                        <span className="material-symbols-outlined text-tertiary/40 group-hover/list:translate-x-2 group-hover/list:text-tertiary transition-all text-lg">arrow_forward</span>
                                        <span className="text-sm font-bold text-white/60 font-body italic group-hover/list:text-white transition-colors antialiased">{f}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Architecture Highlights - Tonal Separation */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                <div className="bg-surface-container-low p-10 rounded-[2.5rem] shadow-2xl group transition-all duration-700 border border-white/5 hover:bg-surface-container">
                    <div className="flex items-center gap-5 mb-8">
                        <div className="w-14 h-14 rounded-2xl bg-surface-container-high flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                            <span className="material-symbols-outlined text-tertiary text-3xl">fluid</span>
                        </div>
                        <h4 className="font-black font-headline text-2xl uppercase tracking-tighter text-white italic leading-none">Velocity</h4>
                    </div>
                    <p className="text-sm text-on-surface-variant/70 leading-relaxed mb-10 font-body italic antialiased">
                        Static-first architecture utilizing {data.recommended_stack.frontend}. Targeted sub-200ms latency.
                    </p>
                    <div className="flex justify-between text-[10px] font-black uppercase tracking-[0.3em] text-tertiary mb-3 font-label">
                        <span>Lighthouse Score</span>
                        <span>98/100</span>
                    </div>
                    <div className="h-1.5 w-full bg-surface-container-high rounded-full overflow-hidden shadow-inner">
                        <div className="h-full bg-gradient-to-r from-tertiary/20 to-tertiary w-[98%] shadow-[0_0_15px_#679cff]"></div>
                    </div>
                </div>

                <div className="bg-surface-container-low p-10 rounded-[2.5rem] shadow-2xl group transition-all duration-700 border border-white/5 hover:bg-surface-container">
                    <div className="flex items-center gap-5 mb-8">
                        <div className="w-14 h-14 rounded-2xl bg-surface-container-high flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                            <span className="material-symbols-outlined text-tertiary text-3xl">lock_open</span>
                        </div>
                        <h4 className="font-black font-headline text-2xl uppercase tracking-tighter text-white italic leading-none">Hardened</h4>
                    </div>
                    <p className="text-sm text-on-surface-variant/70 leading-relaxed mb-10 font-body italic antialiased">
                        Identity management via {data.recommended_stack.auth}. SOC2 ready compliance protocols.
                    </p>
                    <div className="flex justify-between text-[10px] font-black uppercase tracking-[0.3em] text-tertiary mb-3 font-label">
                        <span>Security Audit</span>
                        <span>100%</span>
                    </div>
                    <div className="h-1.5 w-full bg-surface-container-high rounded-full overflow-hidden shadow-inner">
                        <div className="h-full bg-gradient-to-r from-tertiary/20 to-tertiary w-full shadow-[0_0_15px_#679cff]"></div>
                    </div>
                </div>

                <div className="bg-surface-container-high p-12 rounded-[2.5rem] relative overflow-hidden flex flex-col justify-between items-center text-center group border-t border-white/10 transition-all duration-1000 shadow-[0_40px_100px_rgba(0,0,0,0.5)]">
                    <div className="absolute inset-0 bg-gradient-to-br from-tertiary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <span className="material-symbols-outlined text-tertiary text-6xl mb-6 animate-bounce shadow-sm">rocket_launch</span>
                    <div>
                        <h4 className="font-black font-headline text-3xl text-white uppercase italic tracking-tighter mb-4 leading-none">Execution Loop</h4>
                        <p className="text-[11px] text-on-surface-variant/60 font-black uppercase tracking-[0.2em] font-label px-6 italic leading-relaxed">
                            {data.success_metric}
                        </p>
                    </div>
                    <button className="button-metallic w-full py-5 rounded-2xl text-[11px] font-black uppercase tracking-[0.3em] italic shadow-2xl mt-10 active:scale-95 transition-all">
                        Initiate Sequence
                    </button>
                </div>
            </div>
        </div>
    )
}
