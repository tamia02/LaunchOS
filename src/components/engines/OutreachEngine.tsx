'use client'

import React from 'react'
import { cn } from '@/lib/utils'

interface OutreachData {
    strategy: string
    templates: {
        subject: string
        body: string
    }[]
    campaigns: {
        name: string
        status: string
        conversion_rate: string
    }[]
}

interface OutreachEngineProps {
    data: OutreachData
}

export function OutreachEngine({ data }: OutreachEngineProps) {
    if (!data) return null

    return (
        <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000">
            {/* Header Section */}
            <header className="mb-16">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-10">
                    <div className="space-y-4 max-w-2xl">
                        <span className="text-tertiary font-black text-[10px] uppercase tracking-[0.4em] italic antialiased opacity-40">Phase_05: Distribution_Protocol</span>
                        <h1 className="text-5xl md:text-6xl font-black font-headline tracking-tighter text-white uppercase italic antialiased drop-shadow-2xl">Distribution & Outreach</h1>
                        <p className="text-on-surface-variant text-lg leading-relaxed antialiased italic opacity-70">
                            Architecting the initial growth loops and direct sales channels to achieve <span className="text-white font-bold">PMF synthesis</span> for <span className="text-tertiary">Launch Intelligence Protocol</span>.
                        </p>
                    </div>
                    <div className="flex gap-4">
                        <button className="px-8 py-4 bg-surface-container-high/60 backdrop-blur-3xl text-white font-black text-[10px] uppercase tracking-[0.3em] rounded-xl border border-white/5 hover:bg-tertiary hover:text-on-tertiary transition-all duration-700 custom-ease shadow-2xl glass-edge antialiased italic">
                            EXPORT_STRATEGY_SYNC
                        </button>
                    </div>
                </div>
            </header>

            {/* Strategy Grid */}
            <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                {/* LinkedIn Strategy */}
                <div className="group p-10 rounded-2xl bg-surface-container-low border border-white/5 hover:bg-surface-container transition-all duration-700 custom-ease shadow-2xl glass-edge relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-[#0077b5]/5 blur-3xl rounded-full group-hover:bg-[#0077b5]/10 transition-all"></div>
                    <div className="w-14 h-14 rounded-xl bg-[#0077b5]/10 flex items-center justify-center mb-8 border border-[#0077b5]/20 group-hover:scale-110 transition-transform">
                        <span className="material-symbols-outlined text-[#0077b5] text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>share</span>
                    </div>
                    <h3 className="text-2xl font-black font-headline mb-4 text-white uppercase italic tracking-tight antialiased">LinkedIn Direct</h3>
                    <p className="text-on-surface-variant text-[13px] leading-relaxed mb-8 antialiased italic opacity-60 group-hover:opacity-100 transition-opacity">
                        Automated relationship building through high-value content sharing and secondary neural connections.
                    </p>
                    <div className="flex items-center gap-3 text-[10px] font-black text-tertiary uppercase tracking-[0.2em] italic antialiased">
                        <span className="w-2 h-2 rounded-full bg-tertiary shadow-[0_0_8px_#679cff]"></span>
                        ACTIVE_SYNC: 42% CONVERSION
                    </div>
                </div>

                {/* Direct Email */}
                <div className="group p-10 rounded-2xl bg-surface-container-low border border-white/5 hover:bg-surface-container transition-all duration-700 custom-ease shadow-2xl glass-edge relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-tertiary/5 blur-3xl rounded-full group-hover:bg-tertiary/10 transition-all"></div>
                    <div className="w-14 h-14 rounded-xl bg-tertiary/10 flex items-center justify-center mb-8 border border-tertiary/20 group-hover:scale-110 transition-transform">
                        <span className="material-symbols-outlined text-tertiary text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>alternate_email</span>
                    </div>
                    <h3 className="text-2xl font-black font-headline mb-4 text-white uppercase italic tracking-tight antialiased">Neural Email</h3>
                    <p className="text-on-surface-variant text-[13px] leading-relaxed mb-8 antialiased italic opacity-60 group-hover:opacity-100 transition-opacity">
                        Cold outreach focused on decision makers using personalized neural pain-point identification at scale.
                    </p>
                    <div className="flex items-center gap-3 text-[10px] font-black text-on-surface-variant/40 uppercase tracking-[0.2em] italic antialiased">
                        <span className="w-2 h-2 rounded-full bg-white/10 ring-1 ring-white/5"></span>
                        WARM_UP_PROTOCOL_REQUIRED
                    </div>
                </div>

                {/* Product Hunt */}
                <div className="group p-10 rounded-2xl bg-surface-container-low border border-white/5 hover:bg-surface-container transition-all duration-700 custom-ease shadow-2xl glass-edge relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-6 z-10 transition-transform duration-700 group-hover:-translate-y-1">
                        <span className="px-4 py-1.5 bg-tertiary text-white text-[9px] font-black rounded-lg uppercase tracking-widest italic shadow-[0_0_15px_rgba(103,156,255,0.4)]">NEXT_CYCLE</span>
                    </div>
                    <div className="w-14 h-14 rounded-xl bg-[#da552f]/10 flex items-center justify-center mb-8 border border-[#da552f]/20 group-hover:scale-110 transition-transform">
                        <span className="material-symbols-outlined text-[#da552f] text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>rocket</span>
                    </div>
                    <h3 className="text-2xl font-black font-headline mb-4 text-white uppercase italic tracking-tight antialiased">Market Launch</h3>
                    <p className="text-on-surface-variant text-[13px] leading-relaxed mb-8 antialiased italic opacity-60 group-hover:opacity-100 transition-opacity">
                        Mass market deployment aimed at community feedback synthesis and viral coefficient amplification.
                    </p>
                    <div className="flex items-center gap-3 text-[10px] font-black text-[#da552f] uppercase tracking-[0.2em] italic antialiased">
                        <span className="w-2 h-2 rounded-full bg-[#da552f] shadow-[0_0_10px_#da552f]"></span>
                        LAUNCH_NODE_READY
                    </div>
                </div>
            </section>

            {/* Two Column Interactive Section */}
            <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
                {/* Message Template Card */}
                <div className="lg:col-span-5 bg-surface-container-high/60 backdrop-blur-3xl rounded-3xl p-10 border border-white/5 shadow-[0_40px_100px_rgba(0,0,0,0.6)] relative group glass-edge">
                    <div className="absolute -top-6 -left-6 w-16 h-16 bg-tertiary rounded-2xl shadow-[0_15px_40px_rgba(103,156,255,0.5)] flex items-center justify-center text-white z-20 group-hover:scale-110 transition-transform duration-700">
                        <span className="material-symbols-outlined text-3xl animate-pulse" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
                    </div>
                    <div className="mb-10">
                        <h3 className="text-3xl font-black font-headline text-white mb-3 uppercase italic tracking-tighter antialiased">Message Template</h3>
                        <p className="text-[10px] text-tertiary font-black tracking-[0.4em] uppercase italic antialiased opacity-40">Neural_Pain_First_Protocol</p>
                    </div>
                    <div className="bg-surface-container-lowest/50 rounded-2xl p-8 border border-white/5 font-mono text-[13px] text-primary leading-relaxed space-y-6 shadow-inner italic antialiased">
                        <p className="opacity-40">Subject: Your execution workflow at <span className="text-tertiary">{"{{Company_Name}}"}</span></p>
                        <p>Hi <span className="text-tertiary">{"{{First_Name}}"}</span>,</p>
                        <p>Notice you're scaling your outreach vertical. I recently helped <span className="text-white">{"{{Competitor}}"}</span> reduce latency churn by 18% using the exact protocol you're implementing.</p>
                        <p>Any interest in a 300-second walkthrough of the synthesis framework? No pitch, just raw intelligence.</p>
                        <p className="opacity-40">Initial_Sync,<br />Protocol_Node_A1</p>
                    </div>
                    <div className="mt-10 flex items-center justify-between">
                        <div className="flex -space-x-3">
                            {[...Array(3)].map((_, i) => (
                                <div key={i} className="w-10 h-10 rounded-full border-2 border-surface-container-high bg-surface-container-highest overflow-hidden shadow-xl ring-2 ring-white/5">
                                    <img
                                        className="w-full h-full object-cover grayscale opacity-60 hover:grayscale-0 transition-all duration-700 cursor-pointer"
                                        src={`https://images.unsplash.com/photo-${1500000000000 + i}?auto=format&fit=crop&q=80&w=100`}
                                        alt="Template User"
                                    />
                                </div>
                            ))}
                            <div className="w-10 h-10 rounded-full border-2 border-surface-container-high bg-tertiary flex items-center justify-center text-[10px] font-black text-white shadow-[0_0_15px_#679cff] relative z-10 antialiased">+12</div>
                        </div>
                        <button className="text-tertiary text-[11px] font-black uppercase tracking-[0.3em] flex items-center gap-4 hover:gap-6 transition-all duration-700 italic antialiased group/copy">
                            COPY_TEMPLATE <span className="material-symbols-outlined text-[18px] group-hover/copy:rotate-45 transition-transform" style={{ fontVariationSettings: "'FILL' 1" }}>content_copy</span>
                        </button>
                    </div>
                </div>

                {/* Target List Tracker */}
                <div className="lg:col-span-7 bg-surface-container rounded-3xl overflow-hidden shadow-2xl shadow-black/60 border border-white/5 glass-edge">
                    <div className="p-10 border-b border-white/5 flex justify-between items-center bg-gradient-to-r from-white/5 to-transparent">
                        <div>
                            <h3 className="text-3xl font-black font-headline text-white uppercase italic tracking-tighter antialiased">Neural Lead Tracker</h3>
                            <p className="text-[10px] text-on-surface-variant font-black uppercase tracking-[0.4em] mt-2 italic antialiased opacity-40">Target_Synthesis_List</p>
                        </div>
                        <div className="flex gap-2">
                            <span className="px-5 py-2 bg-surface-container-highest/60 backdrop-blur-md rounded-xl text-[10px] font-black text-white border border-white/5 flex items-center gap-3 italic antialiased shadow-xl">
                                <span className="w-2 h-2 rounded-full bg-tertiary shadow-[0_0_10px_#679cff] animate-pulse"></span> 12_ACTIVE_NODES
                            </span>
                        </div>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead className="bg-surface-container-low/30">
                                <tr className="text-on-surface-variant/40 text-[10px] font-black uppercase tracking-[0.4em] italic antialiased">
                                    <th className="px-10 py-6 font-black">LEAD_ID</th>
                                    <th className="px-10 py-6 font-black">ENTITY_NODE</th>
                                    <th className="px-10 py-6 font-black text-center">PROTOCOL_STATUS</th>
                                    <th className="px-10 py-6 font-black text-right">ACTION</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5">
                                {[
                                    { name: 'Jane Doe', company: 'Acme Corp', status: 'SENT', color: 'tertiary' },
                                    { name: 'Marcus Smith', company: 'Nebula SaaS', status: 'REPLIED', color: 'primary' },
                                    { name: 'Laura Bennett', company: 'Vortex AI', status: 'DEMO', color: 'tertiary' }
                                ].map((lead, i) => (
                                    <tr key={i} className="group hover:bg-white/5 transition-all duration-500 cursor-default">
                                        <td className="px-10 py-6">
                                            <div className="flex items-center gap-4">
                                                <div className="w-10 h-10 rounded-xl bg-surface-container-highest border border-white/5 flex items-center justify-center text-[11px] font-black text-white shadow-inner group-hover:scale-110 transition-transform uppercase italic">
                                                    {lead.name.split(' ').map(n => n[0]).join('')}
                                                </div>
                                                <div className="font-black text-white uppercase italic tracking-tight antialiased text-[14px]">{lead.name}</div>
                                            </div>
                                        </td>
                                        <td className="px-10 py-6 text-on-surface-variant/60 font-body text-[13px] italic antialiased">{lead.company}</td>
                                        <td className="px-10 py-6">
                                            <div className="flex justify-center">
                                                <span className={cn(
                                                    "px-4 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-widest italic antialiased shadow-inner border border-white/5",
                                                    lead.status === 'SENT' ? "bg-tertiary/20 text-tertiary" :
                                                        lead.status === 'REPLIED' ? "bg-primary/20 text-primary" :
                                                            "bg-tertiary text-white shadow-[0_0_10px_rgba(103,156,255,0.4)]"
                                                )}>
                                                    {lead.status}
                                                </span>
                                            </div>
                                        </td>
                                        <td className="px-10 py-6 text-right">
                                            <button className="p-3 rounded-xl hover:bg-surface-container-highest transition-all duration-500 text-on-surface-variant/40 hover:text-white group/more">
                                                <span className="material-symbols-outlined text-[20px] group-hover/more:rotate-90 transition-transform">more_vert</span>
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* Bottom CTA / Insight */}
            <section className="rounded-[2.5rem] overflow-hidden relative p-16 bg-surface-container-low border border-white/5 shadow-[0_80px_160px_rgba(0,0,0,0.6)] group glass-edge">
                <div className="absolute inset-0 grayscale brightness-50 opacity-10 group-hover:opacity-20 transition-all duration-[2000ms] custom-ease group-hover:scale-110 pointer-events-none">
                    <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000" alt="Space Network" />
                </div>
                <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
                    <div className="max-w-xl text-center md:text-left">
                        <h4 className="text-4xl font-black font-headline text-white uppercase italic tracking-tighter antialiased mb-6">Ready to accelerate?</h4>
                        <p className="text-on-surface-variant text-lg leading-relaxed antialiased italic opacity-70">
                            Unlock the automated <span className="text-white font-bold">LinkedIn neural sequencing</span> and verified lead synthesis database protocol included in your Premium Builder plan.
                        </p>
                    </div>
                    <button className="whitespace-nowrap px-12 py-5 bg-gradient-to-r from-tertiary to-tertiary-dim text-white font-black text-[11px] uppercase tracking-[0.3em] rounded-xl hover:shadow-[0_20px_40px_rgba(103,156,255,0.4)] hover:-translate-y-2 active:scale-95 transition-all duration-700 custom-ease italic antialiased glass-edge">
                        UNLOCK_PROTOCOL_AUTOMATIONS
                    </button>
                </div>
            </section>
        </div>
    )
}
