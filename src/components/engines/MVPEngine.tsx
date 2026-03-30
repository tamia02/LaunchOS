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
        <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000">
            {/* Hero Header */}
            <header className="max-w-6xl mb-16 px-4">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-10">
                    <div className="space-y-4">
                        <span className="text-tertiary font-black tracking-[0.4em] text-[10px] uppercase font-label italic antialiased opacity-40">Engineering_Protocol_v4.2</span>
                        <h2 className="text-5xl md:text-6xl font-black font-headline tracking-tighter text-white leading-none uppercase italic antialiased drop-shadow-2xl">MVP Engineering Blueprint</h2>
                        <p className="text-on-surface-variant max-w-xl font-body text-lg leading-relaxed mt-6 antialiased opacity-70">
                            A high-fidelity architectural roadmap for the first 28-day production cycle. Optimized for <span className="text-white font-bold">Rapid Synthesis</span> and market entry readiness.
                        </p>
                    </div>
                    <div className="bg-surface-container-high/40 backdrop-blur-3xl p-8 rounded-2xl border border-white/5 shadow-2xl glass-edge flex items-center gap-10 group">
                        <div className="text-center">
                            <div className="text-5xl font-black text-tertiary font-headline italic tracking-tighter antialiased animate-pulse">A+</div>
                            <div className="text-[9px] text-on-surface-variant uppercase tracking-[0.3em] font-black italic mt-2 antialiased opacity-40 group-hover:opacity-100 transition-opacity">Integrity_Index</div>
                        </div>
                        <div className="h-16 w-px bg-white/5"></div>
                        <div className="space-y-2">
                            <div className="flex items-center gap-3">
                                <span className="w-2.5 h-2.5 rounded-full bg-tertiary shadow-[0_0_10px_#679cff]"></span>
                                <span className="text-[11px] text-white font-black uppercase tracking-wider italic antialiased">System Integrity Active</span>
                            </div>
                            <p className="text-[10px] text-on-surface-variant font-body italic antialiased opacity-40">Efficiency optimized for scale-readiness protocol.</p>
                        </div>
                    </div>
                </div>
            </header>

            {/* Bento Roadmap Grid */}
            <section className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-16">
                {/* Week 1: Core Auth & Security */}
                <div className="md:col-span-4 group relative">
                    <div className="absolute -inset-1 bg-gradient-to-b from-primary/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-700 blur-xl"></div>
                    <div className="relative h-full bg-surface-container-low p-10 rounded-2xl border border-white/5 flex flex-col shadow-2xl glass-edge group-hover:bg-surface-container transition-all">
                        <div className="flex justify-between items-start mb-16 text-transparent bg-clip-text bg-gradient-to-br from-white/20 to-white/5 font-black font-headline text-8xl italic leading-none pointer-events-none">
                            01
                            <div className="w-14 h-14 rounded-xl bg-surface-container-highest border border-white/5 flex items-center justify-center text-primary shadow-inner">
                                <span className="material-symbols-outlined text-3xl group-hover:scale-110 transition-transform">security</span>
                            </div>
                        </div>
                        <h3 className="text-2xl font-black font-headline text-white mb-4 uppercase italic tracking-tight antialiased">Core Auth & Security</h3>
                        <p className="text-[13px] text-on-surface-variant font-body leading-relaxed mb-10 flex-grow antialiased opacity-70">
                            Establishing the technical fortress. OAuth2 integration, multi-factor protocols, and encrypted database schema architecture.
                        </p>
                        <ul className="space-y-4">
                            {['JWT Stateless Validation', 'AES-256 Data Encryption'].map((item, i) => (
                                <li key={i} className="flex items-center gap-4 text-[10px] font-black uppercase tracking-widest text-on-surface-variant/40 italic group-hover:text-tertiary transition-colors">
                                    <span className="material-symbols-outlined text-[16px] shadow-[0_0_8px_rgba(103,156,255,0.2)]">check_circle</span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Week 2: AI Engine Integration */}
                <div className="md:col-span-8 group relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-tertiary/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-700 blur-xl"></div>
                    <div className="relative h-full bg-surface-container-low p-10 rounded-2xl border-l-[6px] border-tertiary shadow-2xl glass-edge group-hover:bg-surface-container transition-all">
                        <div className="grid md:grid-cols-2 gap-12 h-full">
                            <div className="flex flex-col">
                                <span className="text-8xl font-black text-white/5 font-headline italic leading-none mb-10 pointer-events-none">02</span>
                                <h3 className="text-4xl font-black font-headline text-white mb-6 uppercase italic tracking-tight antialiased">Neural Engine Integration</h3>
                                <p className="text-[13px] text-on-surface-variant font-body leading-relaxed mb-10 antialiased opacity-70">
                                    Implementing the proprietary LLM orchestrator. Focus on token efficiency, context window management, and real-time inference latency.
                                </p>
                                <div className="flex gap-4 mt-auto">
                                    <div className="bg-surface-container-highest/60 backdrop-blur-md px-4 py-2 rounded-lg border border-white/5 text-[9px] font-black tracking-widest text-tertiary italic uppercase">VECTOR_DB_NODE</div>
                                    <div className="bg-surface-container-highest/60 backdrop-blur-md px-4 py-2 rounded-lg border border-white/5 text-[9px] font-black tracking-widest text-tertiary italic uppercase">RAG_PIPELINE</div>
                                </div>
                            </div>
                            <div className="rounded-2xl overflow-hidden relative min-h-[240px] border border-white/5 shadow-inner group/img">
                                <img
                                    className="object-cover w-full h-full grayscale opacity-40 group-hover/img:scale-110 transition-all duration-[2000ms] custom-ease"
                                    src="https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=80&w=2000"
                                    alt="AI Neural Network Visual"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-surface-container-low via-surface-container-low/40 to-transparent"></div>
                                <div className="absolute bottom-6 left-6">
                                    <span className="text-[10px] font-black tracking-[0.4em] text-tertiary uppercase italic antialiased drop-shadow-md">LATENCY: 140MS</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Week 3: Data Visualization Dashboard */}
                <div className="md:col-span-8 group relative">
                    <div className="absolute -inset-1 bg-gradient-to-l from-primary/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-700 blur-xl"></div>
                    <div className="relative h-full bg-surface-container-low p-10 rounded-2xl border border-white/5 shadow-2xl glass-edge group-hover:bg-surface-container transition-all">
                        <div className="flex justify-between items-center mb-12">
                            <div>
                                <span className="text-8xl font-black text-white/5 font-headline italic leading-none mb-4 block pointer-events-none">03</span>
                                <h3 className="text-4xl font-black font-headline text-white uppercase italic tracking-tight antialiased">UI Visualization Matrix</h3>
                            </div>
                            <div className="flex items-end gap-3 px-4">
                                <div className="h-10 w-2.5 bg-tertiary/20 rounded-full animate-[pulse_3s_infinite]" />
                                <div className="h-16 w-2.5 bg-tertiary/40 rounded-full animate-[pulse_2.5s_infinite]" />
                                <div className="h-24 w-2.5 bg-tertiary rounded-full shadow-[0_0_15px_#679cff] animate-[pulse_2s_infinite]" />
                                <div className="h-14 w-2.5 bg-tertiary/60 rounded-full animate-[pulse_3.5s_infinite]" />
                            </div>
                        </div>
                        <div className="grid md:grid-cols-2 gap-12">
                            <div className="space-y-8">
                                <p className="text-[15px] text-on-surface-variant leading-relaxed antialiased italic opacity-70">
                                    Translating raw intelligence into actionable nodes. WebGL-powered reactive components for high-density information display and tactical telemetry.
                                </p>
                                <button className="bg-surface-container-highest hover:bg-tertiary hover:text-on-tertiary px-8 py-4 rounded-xl text-[10px] font-black uppercase tracking-[0.3em] italic transition-all duration-700 custom-ease border border-white/5 shadow-xl antialiased">
                                    INITIALIZE_UI_PILOT
                                </button>
                            </div>
                            <div className="grid grid-cols-1 gap-6">
                                <div className="bg-surface-container-highest/40 p-6 rounded-xl border border-white/5 glass-edge">
                                    <div className="flex justify-between text-[10px] font-black uppercase tracking-[0.3em] text-tertiary mb-3 italic antialiased">Real-time_Sync_v0.9</div>
                                    <div className="w-full h-1.5 bg-surface-container-lowest rounded-full overflow-hidden border border-white/5">
                                        <div className="w-3/4 h-full bg-tertiary shadow-[0_0_10px_#679cff]"></div>
                                    </div>
                                </div>
                                <div className="bg-surface-container-highest/40 p-6 rounded-xl border border-white/5 glass-edge">
                                    <div className="flex justify-between text-[10px] font-black uppercase tracking-[0.3em] text-primary mb-3 italic antialiased">Protocol_Latency_Target</div>
                                    <div className="w-full h-1.5 bg-surface-container-lowest rounded-full overflow-hidden border border-white/5">
                                        <div className="w-1/4 h-full bg-primary shadow-[0_0_10px_#bfc2c4]"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Week 4: Beta User Onboarding */}
                <div className="md:col-span-4 group relative">
                    <div className="absolute -inset-1 bg-gradient-to-t from-tertiary/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-700 blur-xl"></div>
                    <div className="relative h-full bg-surface-container-low p-10 rounded-2xl border border-white/5 flex flex-col shadow-2xl glass-edge group-hover:bg-surface-container transition-all">
                        <div className="flex justify-between items-start mb-16">
                            <span className="text-8xl font-black text-white/5 font-headline italic leading-none pointer-events-none">04</span>
                            <div className="w-14 h-14 rounded-xl bg-tertiary/10 border border-tertiary/20 flex items-center justify-center text-tertiary shadow-[0_0_20px_rgba(103,156,255,0.1)]">
                                <span className="material-symbols-outlined text-3xl group-hover:rotate-12 transition-transform">rocket_launch</span>
                            </div>
                        </div>
                        <h3 className="text-2xl font-black font-headline text-white mb-4 uppercase italic tracking-tight antialiased">Beta Protocol Onboarding</h3>
                        <p className="text-[13px] text-on-surface-variant font-body leading-relaxed mb-10 flex-grow antialiased opacity-70">
                            Polishing the entry experience. Linear onboarding flows, workspace provisioning, and automated documentation generation for early adopters.
                        </p>
                        <div className="flex items-center gap-2">
                            <div className="flex -space-x-3">
                                {[...Array(3)].map((_, i) => (
                                    <div key={i} className="w-10 h-10 rounded-full border-2 border-surface-container-low bg-surface-container-highest overflow-hidden shadow-xl ring-2 ring-white/5">
                                        <img
                                            className="w-full h-full object-cover grayscale opacity-60"
                                            src={`https://images.unsplash.com/photo-${1500000000000 + i}?auto=format&fit=crop&q=80&w=100`}
                                            alt="Beta User"
                                        />
                                    </div>
                                ))}
                                <div className="w-10 h-10 rounded-full border-2 border-surface-container-low bg-tertiary flex items-center justify-center text-[10px] font-black text-white shadow-[0_0_15px_#679cff] relative z-10 antialiased">+48</div>
                            </div>
                            <span className="ml-4 text-[9px] font-black text-on-surface-variant uppercase tracking-[0.2em] italic antialiased opacity-40">Cohort_Alpha</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Architecture Highlights Section */}
            <section className="mt-32 max-w-6xl mx-auto px-4">
                <div className="mb-16">
                    <h2 className="text-4xl font-black font-headline text-white uppercase italic tracking-tighter antialiased">Architecture Highlights</h2>
                    <p className="text-on-surface-variant mt-3 italic antialiased opacity-70 text-lg">Engineered for the rigorous demands of modern scaling protocols.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {/* Performance */}
                    <div className="space-y-6 group">
                        <div className="flex items-center gap-6 mb-6">
                            <div className="w-14 h-14 rounded-full bg-surface-container-high border border-white/5 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                                <span className="material-symbols-outlined text-tertiary text-2xl group-hover:rotate-45 transition-transform duration-700">speed</span>
                            </div>
                            <h4 className="font-black font-headline text-2xl text-white uppercase italic tracking-tight antialiased">Performance</h4>
                        </div>
                        <p className="text-[15px] text-on-surface-variant leading-relaxed antialiased italic opacity-70 group-hover:opacity-100 transition-opacity">
                            Static-first architecture utilizing edge caching nodes. <span className="text-tertiary font-black italic">99th Percentile</span> response times remain under 200ms globally in the current sync window.
                        </p>
                        <div className="pt-6">
                            <div className="flex justify-between text-[10px] font-black uppercase tracking-[0.4em] text-on-surface-variant/40 mb-3 italic antialiased">Optimization_Sync</div>
                            <div className="h-1.5 w-full bg-surface-container-highest rounded-full overflow-hidden border border-white/5 shadow-inner">
                                <div className="h-full bg-tertiary shadow-[0_0_10px_#679cff] w-[98%] transition-all duration-[2000ms] custom-ease"></div>
                            </div>
                        </div>
                    </div>

                    {/* Security */}
                    <div className="space-y-6 group">
                        <div className="flex items-center gap-6 mb-6">
                            <div className="w-14 h-14 rounded-full bg-surface-container-high border border-white/5 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                                <span className="material-symbols-outlined text-tertiary text-2xl">verified_user</span>
                            </div>
                            <h4 className="font-black font-headline text-2xl text-white uppercase italic tracking-tight antialiased">Security</h4>
                        </div>
                        <p className="text-[15px] text-on-surface-variant leading-relaxed antialiased italic opacity-70 group-hover:opacity-100 transition-opacity">
                            Zero-trust architecture with granular neural identity management. Continuous threat monitoring and <span className="text-tertiary font-black italic">SOC2-Compliant</span> data handling protocols.
                        </p>
                        <div className="pt-6">
                            <div className="flex justify-between text-[10px] font-black uppercase tracking-[0.4em] text-on-surface-variant/40 mb-3 italic antialiased">Threat_Shield_Active</div>
                            <div className="h-1.5 w-full bg-surface-container-highest rounded-full overflow-hidden border border-white/5 shadow-inner">
                                <div className="h-full bg-tertiary shadow-[0_0_10px_#679cff] w-full transition-all duration-[2000ms] custom-ease"></div>
                            </div>
                        </div>
                    </div>

                    {/* Scalability */}
                    <div className="space-y-6 group">
                        <div className="flex items-center gap-6 mb-6">
                            <div className="w-14 h-14 rounded-full bg-surface-container-high border border-white/5 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                                <span className="material-symbols-outlined text-tertiary text-2xl group-hover:rotate-90 transition-transform duration-700">grid_view</span>
                            </div>
                            <h4 className="font-black font-headline text-2xl text-white uppercase italic tracking-tight antialiased">Scalability</h4>
                        </div>
                        <p className="text-[15px] text-on-surface-variant leading-relaxed antialiased italic opacity-70 group-hover:opacity-100 transition-opacity">
                            Micro-service ready modularity through edge computing. Designed for <span className="text-tertiary font-black italic">Horizontal Auto-Scaling</span> across multiple availability zones.
                        </p>
                        <div className="pt-6">
                            <div className="flex justify-between text-[10px] font-black uppercase tracking-[0.4em] text-on-surface-variant/40 mb-3 italic antialiased">Elastic_Load_Protocol</div>
                            <div className="h-1.5 w-full bg-surface-container-highest rounded-full overflow-hidden border border-white/5 shadow-inner">
                                <div className="h-full bg-tertiary shadow-[0_0_10px_#679cff] w-[94%] transition-all duration-[2000ms] custom-ease"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer Call to Action */}
            <footer className="max-w-6xl mx-auto mt-40 pb-20 px-4">
                <div className="bg-surface-container-highest/60 backdrop-blur-3xl rounded-[2.5rem] p-16 border border-white/5 relative overflow-hidden shadow-[0_80px_160px_rgba(0,0,0,0.6)] group glass-edge">
                    <div className="absolute top-0 right-0 w-[40%] h-full bg-gradient-to-l from-tertiary/10 via-tertiary/5 to-transparent pointer-events-none group-hover:opacity-100 transition-opacity duration-1000"></div>
                    <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
                        <div className="space-y-4 text-center lg:text-left">
                            <h3 className="text-4xl md:text-5xl font-black font-headline text-white uppercase italic tracking-tighter antialiased">Ready to initiate Build Sequence?</h3>
                            <p className="text-on-surface-variant font-body text-lg italic antialiased opacity-70">
                                Provision your neural development environment in 60-cycle window.
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-6 w-full lg:w-auto">
                            <button className="bg-white/5 hover:bg-white/10 text-white px-12 py-5 rounded-xl font-black text-[11px] uppercase tracking-[0.3em] italic border border-white/10 transition-all duration-700 custom-ease shadow-xl antialiased">
                                REVIEW_DOCS
                            </button>
                            <button className="bg-gradient-to-r from-tertiary to-tertiary-dim text-white px-12 py-5 rounded-xl font-black text-[11px] uppercase tracking-[0.3em] italic shadow-[0_15px_30px_rgba(103,156,255,0.4)] hover:brightness-110 active:scale-95 transition-all duration-700 custom-ease antialiased">
                                EXECUTE_DEPLOYMENT_SYNC
                            </button>
                        </div>
                    </div>
                </div>
                <div className="mt-20 flex flex-col md:flex-row justify-between items-center text-[10px] font-black uppercase tracking-[0.4em] text-on-surface-variant/40 italic space-y-6 md:space-y-0 antialiased">
                    <div className="hover:text-white transition-colors duration-500 cursor-default">© 2024 LAUNCHOS_ENGINEERING_PROTOCOL. ALL_RIGHTS_RESERVED.</div>
                    <div className="flex gap-12">
                        <a className="hover:text-tertiary transition-colors duration-500" href="#">V2.4.1_STABLE</a>
                        <a className="hover:text-tertiary transition-colors duration-500" href="#">PRIVACY_PROTOCOL</a>
                        <a className="hover:text-tertiary transition-colors duration-500" href="#">API_STATUS_SYNC</a>
                    </div>
                </div>
            </footer>
        </div>
    )
}
