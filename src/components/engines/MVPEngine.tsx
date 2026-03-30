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
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000">
            {/* Engineering Header */}
            <header className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-8">
                <div className="max-w-2xl">
                    <div className="flex items-center gap-2 mb-3">
                        <span className="px-2 py-0.5 rounded bg-surface-container-high text-tertiary text-[10px] font-bold tracking-widest uppercase font-label">Engineering Department</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-tertiary animate-pulse"></span>
                        <span className="text-on-surface-variant text-xs font-medium font-label">System Integrity Certified</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-extrabold font-headline tracking-tighter text-white mb-4 uppercase italic">Engineering Blueprint</h1>
                    <p className="text-on-surface-variant text-lg max-w-xl font-body leading-relaxed">
                        {data.mvp_description}
                    </p>
                </div>
                <div className="bg-surface-container-high ghost-border p-6 rounded-xl flex items-center gap-8 shadow-2xl">
                    <div className="text-center">
                        <div className="text-3xl font-black text-tertiary font-headline leading-none">A+</div>
                        <div className="text-[10px] text-on-surface-variant uppercase tracking-widest font-bold mt-1">Grade</div>
                    </div>
                    <div className="h-10 w-[1px] bg-white/10"></div>
                    <div>
                        <div className="flex items-center gap-2 mb-1">
                            <span className="material-symbols-outlined text-tertiary text-sm">verified</span>
                            <span className="text-xs font-bold text-white font-label">Ready for Deployment</span>
                        </div>
                        <p className="text-[10px] text-on-surface-variant italic">Launch cycle: {data.time_to_launch}</p>
                    </div>
                </div>
            </header>

            {/* Bento Roadmap Grid */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-12">
                {/* Week 1: Core */}
                <div className="md:col-span-4 bg-surface-container p-8 rounded-2xl ghost-border flex flex-col relative group">
                    <div className="flex justify-between items-start mb-8">
                        <span className="text-5xl font-black text-white/5 font-headline leading-none">01</span>
                        <div className="w-12 h-12 rounded-xl bg-surface-container-highest flex items-center justify-center text-tertiary shadow-xl">
                            <span className="material-symbols-outlined">shield</span>
                        </div>
                    </div>
                    <h3 className="text-xl font-bold font-headline mb-4 uppercase tracking-tight text-white italic">Initial Foundation</h3>
                    <p className="text-on-surface-variant text-sm mb-8 leading-relaxed font-body">
                        Establishing the primary infrastructure and security layer. Focus on {data.week1_features[0]?.toLowerCase()}.
                    </p>
                    <ul className="space-y-3 mt-auto">
                        {data.week1_features.slice(0, 3).map((f, i) => (
                            <li key={i} className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">
                                <span className="material-symbols-outlined text-tertiary text-sm">check_circle</span>
                                {f}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Week 2: AI & Growth */}
                <div className="md:col-span-8 bg-surface-container-low p-10 rounded-2xl border-l-4 border-tertiary relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-tertiary/5 rounded-full blur-[80px] -mr-32 -mt-32"></div>
                    <div className="grid md:grid-cols-2 gap-12 relative z-10 h-full">
                        <div className="flex flex-col">
                            <span className="text-5xl font-black text-white/5 font-headline leading-none mb-6">02</span>
                            <h3 className="text-2xl font-bold font-headline mb-4 text-white uppercase italic tracking-tighter">AI Multi-Spike</h3>
                            <p className="text-on-surface-variant text-sm mb-10 leading-relaxed font-body">
                                Implementing core intelligence loops and growth engine integrations. Priority: {data.week2_features[0]}.
                            </p>
                            <div className="flex flex-wrap gap-2 mt-auto">
                                <span className="px-3 py-1 bg-surface-container-highest rounded-md text-[10px] font-black text-tertiary uppercase tracking-widest ghost-border">
                                    {data.recommended_stack.ai}
                                </span>
                                <span className="px-3 py-1 bg-surface-container-highest rounded-md text-[10px] font-black text-tertiary uppercase tracking-widest ghost-border">
                                    {data.recommended_stack.database}
                                </span>
                            </div>
                        </div>
                        <div className="bg-surface-container-high rounded-xl p-6 ghost-border flex flex-col">
                            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-on-surface-variant mb-6 flex items-center gap-2">
                                <span className="material-symbols-outlined text-xs">auto_fix</span>
                                Polish sequence (W3)
                            </h4>
                            <div className="space-y-4">
                                {data.week3_features.slice(0, 4).map((f, i) => (
                                    <div key={i} className="flex items-center gap-3 group">
                                        <span className="material-symbols-outlined text-tertiary text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                                        <span className="text-[11px] font-semibold text-white/70 font-body">{f}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Architecture Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-surface-container p-8 rounded-2xl ghost-border group hover:border-tertiary/30 transition-all duration-500">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center group-hover:scale-110 transition-transform">
                            <span className="material-symbols-outlined text-tertiary text-xl">speed</span>
                        </div>
                        <h4 className="font-bold font-headline text-lg uppercase tracking-tight text-white italic">Performance</h4>
                    </div>
                    <p className="text-sm text-on-surface-variant leading-relaxed mb-6 font-body">
                        Static-first architecture utilizing {data.recommended_stack.frontend}. Response times targeted sub-200ms.
                    </p>
                    <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-tertiary mb-2 font-label">
                        <span>Lighthouse Ready</span>
                        <span>98/100</span>
                    </div>
                    <div className="h-1 w-full bg-surface-container-lowest rounded-full overflow-hidden">
                        <div className="h-full bg-tertiary w-[98%] shadow-[0_0_10px_#679cff]"></div>
                    </div>
                </div>

                <div className="bg-surface-container p-8 rounded-2xl ghost-border group hover:border-tertiary/30 transition-all duration-500">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center group-hover:scale-110 transition-transform">
                            <span className="material-symbols-outlined text-tertiary text-xl">shield_lock</span>
                        </div>
                        <h4 className="font-bold font-headline text-lg uppercase tracking-tight text-white italic">Security</h4>
                    </div>
                    <p className="text-sm text-on-surface-variant leading-relaxed mb-6 font-body">
                        Identity management via {data.recommended_stack.auth}. SOC2 ready compliance protocols active.
                    </p>
                    <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-tertiary mb-2 font-label">
                        <span>Hardened</span>
                        <span>100%</span>
                    </div>
                    <div className="h-1 w-full bg-surface-container-lowest rounded-full overflow-hidden">
                        <div className="h-full bg-tertiary w-full shadow-[0_0_10px_#679cff]"></div>
                    </div>
                </div>

                <div className="bg-surface-container-high p-8 rounded-2xl ghost-border relative overflow-hidden flex flex-col justify-between items-center text-center group">
                    <div className="absolute inset-0 bg-gradient-to-br from-tertiary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <span className="material-symbols-outlined text-tertiary text-5xl mb-4 animate-bounce">rocket_launch</span>
                    <div>
                        <h4 className="font-bold font-headline text-2xl text-white uppercase italic tracking-tighter mb-2">Build Sequence</h4>
                        <p className="text-xs text-on-surface-variant font-medium leading-tight">
                            {data.success_metric}
                        </p>
                    </div>
                    <button className="mt-8 button-metallic w-full py-3 rounded-lg text-xs font-black uppercase tracking-[0.2em]">
                        Initiate Build Phase
                    </button>
                </div>
            </div>
        </div>
    )
}
