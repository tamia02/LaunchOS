'use client'

import React from 'react'
import { cn } from '@/lib/utils'

interface OutreachData {
    project_name: string
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
            <header className="mb-8">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                    <div className="space-y-2 max-w-xl">
                        <span className="text-tertiary font-bold text-[9px] tracking-widest antialiased opacity-60 font-label">Distribution Protocol</span>
                        <h1 className="text-xl md:text-2xl font-bold font-headline tracking-tighter text-white antialiased">Outreach Strategy</h1>
                        <p className="text-on-surface-variant text-[13px] leading-relaxed antialiased opacity-70">
                            Architecting initial growth loops for <span className="text-tertiary">{data.project_name}</span>.
                        </p>
                    </div>
                    <div className="flex gap-3">
                        <button className="px-4 py-2 bg-surface-container-high/60 backdrop-blur-3xl text-white font-bold text-[10px] tracking-wider rounded-lg border border-white/5 hover:bg-tertiary transition-all shadow-md antialiased">
                            Export Sync
                        </button>
                    </div>
                </div>
            </header>

            {/* Strategy Grid */}
            <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                {/* Primary Strategy */}
                <div className="md:col-span-3 group p-6 rounded-xl bg-surface-container-low border border-white/5 hover:bg-surface-container transition-all shadow-md relative overflow-hidden">
                    <div className="w-10 h-10 rounded-lg bg-tertiary/10 flex items-center justify-center mb-6 border border-tertiary/20">
                        <span className="material-symbols-outlined text-tertiary text-xl">rocket_launch</span>
                    </div>
                    <h3 className="text-lg font-bold font-headline mb-3 text-white tracking-tight antialiased">Primary Protocol</h3>
                    <p className="text-on-surface-variant text-[13px] leading-relaxed antialiased opacity-70 max-w-3xl">
                        {data.strategy}
                    </p>
                </div>

                {/* Templates Section */}
                {data.templates.map((template, i) => (
                    <div key={i} className="group p-5 rounded-xl bg-surface-container-high/40 backdrop-blur-3xl border border-white/5 hover:bg-surface-container transition-all shadow-md relative overflow-hidden">
                        <div className="w-8 h-8 rounded-lg bg-surface-container-highest flex items-center justify-center mb-4 border border-white/5">
                            <span className="material-symbols-outlined text-tertiary text-lg">alternate_email</span>
                        </div>
                        <h4 className="text-white font-bold font-headline text-[11px] tracking-tight antialiased mb-3">Template 0{i + 1}</h4>
                        <div className="bg-surface-container-lowest/50 rounded-lg p-4 border border-white/5 font-mono text-[11px] text-primary leading-relaxed antialiased space-y-2">
                            <p className="opacity-40">Subject: {template.subject}</p>
                            <p className="line-clamp-4">{template.body}</p>
                        </div>
                        <button className="mt-4 text-tertiary text-[9px] font-bold tracking-widest flex items-center gap-2 transition-all antialiased">
                            Copy Protocol <span className="material-symbols-outlined text-base">content_copy</span>
                        </button>
                    </div>
                ))}
            </section>

            {/* Campaign Tracker */}
            <section className="bg-surface-container rounded-2xl overflow-hidden shadow-lg border border-white/5 mb-16">
                <div className="p-6 border-b border-white/5 flex justify-between items-center bg-gradient-to-r from-white/5 to-transparent">
                    <div>
                        <h3 className="text-lg font-bold font-headline text-white tracking-tight antialiased">Live Distribution Nodes</h3>
                        <p className="text-[9px] text-on-surface-variant font-bold tracking-widest mt-1 antialiased opacity-40">Campaign Performance Matrix</p>
                    </div>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead className="bg-surface-container-low/30">
                            <tr className="text-on-surface-variant/40 text-[9px] font-bold tracking-widest antialiased">
                                <th className="px-6 py-4">Channel_Id</th>
                                <th className="px-6 py-4">Status</th>
                                <th className="px-6 py-4 text-center">Conversion_Index</th>
                                <th className="px-6 py-4 text-right">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                            {data.campaigns.map((campaign, i) => (
                                <tr key={i} className="group hover:bg-white/5 transition-all cursor-default">
                                    <td className="px-6 py-4">
                                        <div className="font-bold text-white tracking-tight antialiased text-[12px]">{campaign.name}</div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className={cn(
                                            "px-3 py-1 rounded-md text-[9px] font-bold uppercase tracking-widest antialiased border border-white/5",
                                            campaign.status === 'Running' ? "bg-tertiary text-white shadow-[0_0_8px_rgba(103,156,255,0.4)]" : "bg-white/5 text-on-surface-variant/40"
                                        )}>
                                            {campaign.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-center text-tertiary font-bold font-headline text-lg">{campaign.conversion_rate}</td>
                                    <td className="px-6 py-4 text-right">
                                        <button className="p-2 rounded-lg hover:bg-surface-container-highest transition-all text-on-surface-variant/40 hover:text-white">
                                            <span className="material-symbols-outlined text-[18px]">more_vert</span>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="rounded-2xl overflow-hidden relative p-8 bg-surface-container-low border border-white/5 shadow-lg group">
                <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="max-w-xl text-center md:text-left">
                        <h4 className="text-xl font-bold font-headline text-white uppercase tracking-tight antialiased mb-3">Scale distribution?</h4>
                        <p className="text-on-surface-variant text-[13px] leading-relaxed antialiased opacity-70">
                            Unlock automated <span className="text-white font-bold">LinkedIn neural sequencing</span> and verified lead synthesis database protocol.
                        </p>
                    </div>
                    <button className="whitespace-nowrap px-6 py-3 bg-gradient-to-r from-tertiary to-tertiary-dim text-white font-bold text-[10px] uppercase tracking-wider rounded-lg transition-all antialiased shadow-md">
                        Unlock Automations
                    </button>
                </div>
            </section>
        </div>
    )
}
