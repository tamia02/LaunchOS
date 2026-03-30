import React from 'react'
import {
    Shield,
    Cpu,
    LayoutGrid,
    Rocket,
    Timer,
    UserCheck,
    CheckCircle,
    ArrowRight
} from 'lucide-react'
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
        <div className="max-w-7xl mx-auto space-y-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {/* Hero Header */}
            <header className="max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div className="space-y-2">
                        <span className="text-tertiary font-bold tracking-widest text-[10px] uppercase font-headline">Engineering Department</span>
                        <h2 className="text-4xl md:text-5xl font-extrabold font-headline tracking-tight text-on-surface leading-none italic uppercase">Engineering Blueprint</h2>
                        <p className="text-on-surface-variant max-w-xl font-medium mt-4">
                            {data.mvp_description}
                        </p>
                    </div>
                    <div className="bg-surface-container p-6 rounded-xl border border-outline-variant/15 flex items-center space-x-8 shadow-2xl">
                        <div className="text-center">
                            <div className="text-3xl font-black text-tertiary font-headline">A+</div>
                            <div className="text-[10px] text-on-surface-variant uppercase tracking-tighter font-bold">Integrity Grade</div>
                        </div>
                        <div className="h-12 w-[1px] bg-outline-variant/30"></div>
                        <div className="space-y-1">
                            <div className="flex items-center space-x-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-tertiary animate-pulse"></div>
                                <span className="text-xs text-on-surface font-semibold tracking-tight">System Integrity Report</span>
                            </div>
                            <p className="text-[10px] text-on-surface-variant italic">Launch readiness: {data.time_to_launch}</p>
                        </div>
                    </div>
                </div>
            </header>

            {/* Bento Roadmap Grid */}
            <section className="grid grid-cols-1 md:grid-cols-12 gap-6">
                {/* Week 1: Core */}
                <div className="md:col-span-4 group relative bg-surface-container-low/50 backdrop-blur-xl border border-outline-variant/10 rounded-xl p-8 flex flex-col shadow-inner">
                    <div className="flex justify-between items-start mb-12">
                        <span className="text-5xl font-black text-outline/10 font-headline">01</span>
                        <div className="w-12 h-12 rounded-lg bg-surface-container-high flex items-center justify-center text-primary shadow-lg">
                            <Shield className="w-6 h-6" />
                        </div>
                    </div>
                    <h3 className="text-xl font-bold font-headline mb-4 uppercase tracking-tighter text-on-surface">Core Infrastructure</h3>
                    <p className="text-on-surface-variant text-sm mb-6 flex-grow leading-relaxed">
                        Establishing the foundation. Focus on {data.week1_features[0]?.toLowerCase() || 'security protocols'}.
                    </p>
                    <ul className="space-y-3">
                        {data.week1_features.slice(0, 3).map((f, i) => (
                            <li key={i} className="flex items-center space-x-3 text-[11px] font-bold uppercase tracking-wide text-on-surface-variant group/item">
                                <CheckCircle className="w-3.5 h-3.5 text-tertiary group-hover/item:scale-110 transition-transform" />
                                <span>{f}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Week 2 & 3: Development Spike */}
                <div className="md:col-span-8 bg-surface-container-low rounded-xl border-l-[6px] border-tertiary p-8 shadow-2xl relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-tertiary/10 rounded-full blur-3xl -mr-16 -mt-16" />
                    <div className="grid md:grid-cols-2 gap-10 relative z-10">
                        <div>
                            <span className="text-5xl font-black text-outline/10 font-headline mb-6 block">02</span>
                            <h3 className="text-2xl font-bold font-headline mb-4 text-on-surface italic uppercase tracking-tighter">AI & Growth Spike</h3>
                            <p className="text-on-surface-variant text-sm mb-8 leading-relaxed">
                                Implementing core intelligence and user loops. Priority: {data.week2_features[0]}.
                            </p>
                            <div className="flex gap-4">
                                <div className="bg-surface-container px-3 py-2 rounded border border-outline-variant/15 text-[9px] font-black tracking-widest text-tertiary uppercase">{data.recommended_stack.ai}</div>
                                <div className="bg-surface-container px-3 py-2 rounded border border-outline-variant/15 text-[9px] font-black tracking-widest text-tertiary uppercase">{data.recommended_stack.database}</div>
                            </div>
                        </div>
                        <div className="bg-surface-container-high rounded-lg p-6 border border-outline-variant/10 shadow-inner">
                            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-on-surface-variant mb-4">Polish Sequence (Week 3)</h4>
                            <ul className="space-y-3">
                                {data.week3_features.slice(0, 3).map((f, i) => (
                                    <li key={i} className="flex items-center space-x-3 text-[11px] font-semibold text-on-surface/70">
                                        <ArrowRight className="w-3.5 h-3.5 text-tertiary" />
                                        <span>{f}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Architecture Highlights */}
                <div className="md:col-span-12 grid grid-cols-1 md:grid-cols-3 gap-8 pt-6">
                    <div className="bg-surface-container p-8 rounded-xl border border-outline-variant/10 group hover:border-tertiary/30 transition-all">
                        <div className="flex items-center space-x-4 mb-6">
                            <div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center border border-outline-variant/20 group-hover:scale-110 transition-transform">
                                <Timer className="w-5 h-5 text-tertiary" />
                            </div>
                            <h4 className="font-bold font-headline text-lg uppercase tracking-tighter text-on-surface">Performance</h4>
                        </div>
                        <p className="text-sm text-on-surface-variant leading-relaxed mb-6 font-medium">Static-first architecture utilizing {data.recommended_stack.frontend}. Response times targeted sub-200ms.</p>
                        <div className="flex justify-between text-[10px] font-black uppercase tracking-[0.2em] text-tertiary mb-2">
                            <span>Ready Score</span>
                            <span>98%</span>
                        </div>
                        <div className="h-1 w-full bg-surface-container-lowest rounded-full overflow-hidden">
                            <div className="h-full bg-tertiary w-[98%]" />
                        </div>
                    </div>

                    <div className="bg-surface-container p-8 rounded-xl border border-outline-variant/10 group hover:border-tertiary/30 transition-all">
                        <div className="flex items-center space-x-4 mb-6">
                            <div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center border border-outline-variant/20 group-hover:scale-110 transition-transform">
                                <Shield className="w-5 h-5 text-tertiary" />
                            </div>
                            <h4 className="font-bold font-headline text-lg uppercase tracking-tighter text-on-surface">Security</h4>
                        </div>
                        <p className="text-sm text-on-surface-variant leading-relaxed mb-6 font-medium">Identity management via {data.recommended_stack.auth}. Continuous threat monitoring live.</p>
                        <div className="flex justify-between text-[10px] font-black uppercase tracking-[0.2em] text-tertiary mb-2">
                            <span>Hardened</span>
                            <span>100%</span>
                        </div>
                        <div className="h-1 w-full bg-surface-container-lowest rounded-full overflow-hidden">
                            <div className="h-full bg-tertiary w-full" />
                        </div>
                    </div>

                    <div className="bg-surface-container-high p-8 rounded-xl border border-outline-variant/20 shadow-2xl relative group">
                        <div className="relative z-10 flex flex-col h-full justify-between items-center text-center">
                            <Rocket className="w-10 h-10 text-tertiary mb-4 animate-bounce" />
                            <h4 className="font-bold font-headline text-xl text-on-surface uppercase italic">Build Sequence</h4>
                            <p className="text-xs text-on-surface-variant font-medium mt-2">{data.success_metric}</p>
                            <button className="mt-8 bg-gradient-to-br from-primary to-primary-container text-on-primary px-8 py-3 rounded-lg font-black text-xs uppercase tracking-widest shadow-xl hover:scale-105 transition-transform active:scale-95">
                                Initiate Build
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
