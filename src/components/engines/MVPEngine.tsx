'use client'

import React from 'react'
import { cn } from '@/lib/utils'

interface TechStackItem {
    name: string
    version: string
}

interface MVPData {
    name: string
    description: string
    features: string[]
    tech_stack: TechStackItem[]
}

interface MVPEngineProps {
    data: MVPData
}

export function MVPEngine({ data }: MVPEngineProps) {
    if (!data) return null

    return (
        <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000 pb-20">
            {/* Hero Header */}
            <header className="max-w-6xl mb-8">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                    <div className="space-y-2">
                        <span className="text-tertiary font-bold tracking-widest text-[9px] font-label">Engineering Department</span>
                        <h2 className="text-xl md:text-2xl font-bold font-headline tracking-tight text-white leading-tight antialiased">
                            MVP Engineering Blueprint
                        </h2>
                        <p className="text-on-surface-variant max-w-xl font-medium mt-2 text-[13px] antialiased">
                            {data.description} Rapid deployment, system integrity, and market readiness.
                        </p>
                    </div>
                    <div className="bg-surface-container-high/60 backdrop-blur-3xl p-4 rounded-xl border border-white/5 shadow-lg glass-edge flex items-center gap-6">
                        <div className="text-center">
                            <div className="text-2xl font-black text-tertiary font-headline tracking-tighter antialiased">A+</div>
                            <div className="text-[8px] text-on-surface-variant tracking-widest font-bold mt-0.5 antialiased">Integrity Grade</div>
                        </div>
                        <div className="h-8 w-[1px] bg-white/10"></div>
                        <div className="space-y-0.5">
                            <div className="flex items-center gap-1.5">
                                <div className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_6px_#22c55e]"></div>
                                <span className="text-[10px] text-on-surface font-semibold tracking-tight antialiased">System Integrity Active</span>
                            </div>
                            <p className="text-[8px] text-on-surface-variant antialiased opacity-60 tracking-tighter font-black">Efficiency optimized</p>
                        </div>
                    </div>
                </div>
            </header>

            {/* Bento Roadmap Grid (Blueprint 1) */}
            <section className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-24">
                <div className="md:col-span-4 group relative">
                    <div className="relative h-full bg-surface-container-low p-5 rounded-xl flex flex-col border border-white/5">
                        <div className="flex justify-between items-start mb-6">
                            <span className="text-3xl font-black text-white/5 font-headline">01</span>
                            <div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center text-primary">
                                <span className="material-symbols-outlined text-xl">security</span>
                            </div>
                        </div>
                        <h3 className="text-base font-bold font-headline mb-2 text-white tracking-tight">Core Auth & Security</h3>
                        <p className="text-on-surface-variant text-[12px] mb-4 flex-grow antialiased leading-snug">Foundational fortress. OAuth2 integration, multi-factor protocols, and encryption.</p>
                        <ul className="space-y-2">
                            {data.features.slice(0, 2).map((feature, i) => (
                                <li key={i} className="flex items-center gap-2 text-[10px] text-on-surface-variant font-bold tracking-wider opacity-60">
                                    <span className="material-symbols-outlined text-[12px] text-tertiary">check_circle</span>
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="md:col-span-8 group relative">
                    <div className="relative h-full bg-surface-container-low p-5 rounded-xl border-l-4 border-tertiary shadow-lg">
                        <div className="grid md:grid-cols-2 gap-6 h-full">
                            <div>
                                <span className="text-3xl font-black text-white/5 font-headline mb-4 block">02</span>
                                <h3 className="text-base font-bold font-headline mb-2 text-white tracking-tight">Neural Implementation</h3>
                                <p className="text-on-surface-variant text-[12px] mb-6 antialiased leading-snug">Proprietary LLM orchestrators. Focus on token efficiency and context management.</p>
                                <div className="flex gap-2">
                                    <div className="bg-surface-container px-2 py-1 rounded border border-white/5 text-[9px] font-bold text-tertiary">Vector_Db</div>
                                    <div className="bg-surface-container px-2 py-1 rounded border border-white/5 text-[9px] font-bold text-tertiary">Rag_Pipeline</div>
                                </div>
                            </div>
                            <div className="rounded-lg overflow-hidden relative min-h-[140px] border border-white/5">
                                <img alt="AI Neural Network" className="object-cover w-full h-full opacity-30 grayscale transition-all duration-1000" src="https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=80&w=2070" />
                                <div className="absolute inset-0 bg-gradient-to-t from-surface-container-low to-transparent"></div>
                                <div className="absolute bottom-2 left-3">
                                    <span className="text-[9px] font-bold tracking-widest text-tertiary antialiased opacity-60">Latency: 140ms</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Detailed Timeline Section */}
            <section className="max-w-6xl mx-auto mb-16">
                <h3 className="text-lg font-bold font-headline text-white mb-8 uppercase tracking-tight antialiased">Execution Roadmap</h3>
                <div className="relative">
                    <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/20 via-outline-variant/10 to-transparent"></div>

                    {/* Week 1 */}
                    <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12 group">
                        <div className="flex flex-col justify-center lg:text-right">
                            <div className="mb-2">
                                <span className="inline-block px-2 py-0.5 bg-surface-bright text-tertiary text-[9px] font-bold rounded-full mb-1 uppercase tracking-widest">WEEK 01</span>
                                <h2 className="text-base font-bold font-headline text-white antialiased tracking-tight uppercase">Base Infrastructure</h2>
                            </div>
                            <p className="text-on-surface-variant text-[12px] leading-relaxed mb-3 opacity-70 antialiased">Foundational setup for secure identity management and database architecture.</p>
                            <div className="flex flex-wrap lg:justify-end gap-1.5">
                                {data.tech_stack.slice(0, 2).map((tech, i) => (
                                    <span key={i} className="px-1.5 py-0.5 bg-surface-container-high text-[9px] font-bold text-primary rounded border border-white/10 uppercase tracking-widest">{tech.name}</span>
                                ))}
                            </div>
                        </div>
                        <div className="lg:pl-8 relative">
                            <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-surface-container border-2 border-tertiary hidden lg:block z-10"></div>
                            <div className="bg-surface-container-low p-5 rounded-xl shadow-md border-t border-white/5">
                                <ul className="space-y-2">
                                    {data.features.map((feature, i) => (
                                        <li key={i} className="flex items-center gap-2.5">
                                            <span className="material-symbols-outlined text-tertiary text-base">check_circle</span>
                                            <span className="text-white font-medium text-[12px] antialiased">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Week 2 */}
                    <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12 group">
                        <div className="lg:order-2 flex flex-col justify-center">
                            <div className="mb-2">
                                <span className="inline-block px-2 py-0.5 bg-surface-bright text-primary text-[9px] font-bold rounded-full mb-1 uppercase tracking-widest">WEEK 02</span>
                                <h2 className="text-base font-bold font-headline text-white antialiased tracking-tight uppercase">AI Engine Synthesis</h2>
                            </div>
                            <p className="text-on-surface-variant text-[12px] leading-relaxed mb-3 opacity-70 antialiased">Integrating intelligence core. Processing high-stakes metadata and reasoning loops.</p>
                            <div className="flex flex-wrap gap-1.5">
                                <span className="px-1.5 py-0.5 bg-surface-container-high text-[9px] font-bold text-primary rounded border border-white/10 uppercase tracking-widest">GPT-4.5_PROTOCOL</span>
                                <span className="px-1.5 py-0.5 bg-surface-container-high text-[9px] font-bold text-primary rounded border border-white/10 uppercase tracking-widest">NEURAL_STORAGE</span>
                            </div>
                        </div>
                        <div className="lg:pr-8 relative lg:order-1">
                            <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-surface-container border-2 border-primary hidden lg:block z-10"></div>
                            <div className="bg-surface-container-low p-5 rounded-xl shadow-md border-t border-white/5">
                                <p className="text-[12px] text-on-surface-variant leading-relaxed antialiased">
                                    Reasoning layer implementation. Focus on context retention and synthesis speed for a responsive MVP.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* System Integrity */}
            <section className="bg-surface-container-high/40 p-8 rounded-2xl border border-white/5 shadow-lg backdrop-blur-3xl glass-edge">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="md:w-1/2">
                        <h3 className="text-xl font-bold font-headline text-white mb-2 tracking-tight uppercase antialiased">System Integrity Report</h3>
                        <p className="text-on-surface-variant mb-6 text-[13px] antialiased opacity-70 font-medium">Automated blueprint auditing confirms technical feasibility.</p>
                        <div className="space-y-4">
                            <div>
                                <div className="flex justify-between text-[11px] mb-1.5">
                                    <span className="font-bold text-white uppercase tracking-widest">Normalization Rate</span>
                                    <span className="text-tertiary font-black">98%</span>
                                </div>
                                <div className="h-1.5 w-full bg-surface-container-lowest rounded-full overflow-hidden border border-white/5">
                                    <div className="h-full bg-tertiary w-[98%] rounded-full"></div>
                                </div>
                            </div>
                            <div>
                                <div className="flex justify-between text-[11px] mb-1.5">
                                    <span className="font-bold text-white uppercase tracking-widest">Latency Projection</span>
                                    <span className="text-primary font-black">85ms</span>
                                </div>
                                <div className="h-1.5 w-full bg-surface-container-lowest rounded-full overflow-hidden border border-white/5">
                                    <div className="h-full bg-primary w-[88%] rounded-full"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="md:w-1/4 aspect-square relative flex items-center justify-center group pointer-events-none">
                        <div className="absolute inset-0 rounded-full border-[10px] border-surface-container shadow-inner"></div>
                        <div className="absolute inset-0 rounded-full border-[10px] border-tertiary border-r-transparent border-b-transparent -rotate-45"></div>
                        <div className="text-center">
                            <span className="text-3xl font-black font-headline block text-white tracking-tighter antialiased">A+</span>
                            <span className="text-[8px] font-bold text-on-surface-variant uppercase tracking-widest mt-1 block antialiased opacity-60">Efficiency</span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
