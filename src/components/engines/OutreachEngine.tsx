import { cn } from '@/lib/utils'
import {
    MessageSquare,
    Mail,
    Globe,
    Send,
    Copy,
    Calendar,
    Share2,
    Rocket,
    Sparkles,
    MoreVertical,
    CheckCircle2
} from 'lucide-react'
import { useState } from 'react'

interface Channel {
    platform: string
    why: string
    what_to_do: string
    expected_result: string
}

interface OutreachData {
    channels: Channel[]
    dm_template: string
    cold_email_subject: string
    cold_email_body: string
    reddit_post_title: string
    reddit_post_strategy: string
    twitter_hook: string
    producthunt_tagline: string
    week1_daily_actions: string[]
    first_10_users_strategy: string
    first_100_users_strategy: string
}

export function OutreachEngine({ data }: { data: OutreachData }) {
    if (!data) return null
    const [copied, setCopied] = useState(false)

    const copyToClipboard = (text: string) => {
        navigator.clipboard.writeText(text)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    return (
        <div className="max-w-7xl mx-auto space-y-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {/* Header Section */}
            <header>
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div className="space-y-4 max-w-2xl">
                        <span className="text-tertiary font-headline text-[10px] font-black tracking-[0.3em] uppercase">Phase 05: Outreach</span>
                        <h1 className="text-5xl md:text-6xl font-headline font-extrabold tracking-tighter text-on-surface uppercase italic leading-none">Distribution & Outreach</h1>
                        <p className="text-on-surface-variant text-lg leading-relaxed font-light">
                            Architecting high-fidelity growth loops for <span className="text-on-surface font-semibold">Immediate Market Impact</span>.
                        </p>
                    </div>
                </div>
            </header>

            {/* Strategy Grid */}
            <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {data.channels.slice(0, 3).map((ch, i) => (
                    <div key={i} className="group p-10 rounded-xl bg-surface-container-low border border-outline-variant/10 hover:bg-surface-container transition-all duration-500 shadow-inner flex flex-col">
                        <div className="w-14 h-14 rounded-lg bg-surface-container-high flex items-center justify-center mb-8 border border-outline-variant/20 shadow-lg group-hover:scale-110 transition-transform">
                            {i === 0 ? <Share2 className="text-tertiary w-6 h-6" /> : i === 1 ? <Mail className="text-tertiary w-6 h-6" /> : <Rocket className="text-tertiary w-6 h-6" />}
                        </div>
                        <h3 className="text-xl font-headline font-black mb-4 text-on-surface uppercase tracking-tighter italic">{ch.platform}</h3>
                        <p className="text-on-surface-variant text-sm font-medium leading-relaxed mb-8 flex-1 italic opacity-80 group-hover:opacity-100 transition-opacity">
                            "{ch.why}"
                        </p>
                        <div className="flex items-center gap-3 text-[10px] font-black text-tertiary uppercase tracking-widest pt-6 border-t border-outline-variant/10">
                            <span className="w-1.5 h-1.5 rounded-full bg-tertiary animate-pulse"></span>
                            <span>{ch.expected_result}</span>
                        </div>
                    </div>
                ))}
            </section>

            {/* Two Column Interactive Section */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                {/* Message Template Card */}
                <div className="lg:col-span-5 bg-surface-container-low rounded-2xl p-10 border border-outline-variant/15 shadow-2xl relative">
                    <div className="absolute -top-5 -left-5 p-4 bg-tertiary rounded-xl shadow-2xl group flex items-center justify-center">
                        <Sparkles className="text-on-tertiary w-6 h-6 animate-spin-slow" />
                    </div>
                    <div className="mb-10 pt-4">
                        <h3 className="text-2xl font-headline font-black text-on-surface mb-2 uppercase tracking-tighter italic">Alpha Template</h3>
                        <p className="text-on-surface-variant text-xs font-black uppercase tracking-[0.2em]">High-Resonance Outreach Copy</p>
                    </div>
                    <div className="bg-surface-container-highest/30 rounded-xl p-8 border border-outline-variant/10 font-mono text-[13px] text-on-surface-variant leading-loose space-y-6 shadow-inner">
                        <p className="text-tertiary opacity-70">Subject: {data.cold_email_subject}</p>
                        <div className="whitespace-pre-wrap">{data.cold_email_body || data.dm_template}</div>
                    </div>
                    <div className="mt-10 flex items-center justify-between">
                        <div className="flex -space-x-3">
                            {[1, 2, 3].map(idx => (
                                <div key={idx} className="w-10 h-10 rounded-full border-4 border-surface-container-low bg-surface-container flex items-center justify-center relative overflow-hidden">
                                    <div className="w-full h-full bg-surface-bright/20 border border-outline-variant/20 rounded-full" />
                                </div>
                            ))}
                            <div className="w-10 h-10 rounded-full bg-tertiary flex items-center justify-center text-[10px] font-black border-4 border-surface-container-low text-on-tertiary">+12</div>
                        </div>
                        <button
                            onClick={() => copyToClipboard(`${data.cold_email_subject}\n\n${data.cold_email_body}`)}
                            className="text-tertiary text-xs font-black uppercase tracking-[0.2em] flex items-center gap-3 hover:gap-5 transition-all outline-none"
                        >
                            {copied ? 'Captured' : 'Capture Template'} <Copy className="w-4 h-4" />
                        </button>
                    </div>
                </div>

                {/* Target List Tracker */}
                <div className="lg:col-span-7 bg-surface-container-low rounded-2xl overflow-hidden border border-outline-variant/15 shadow-2xl">
                    <div className="p-10 border-b border-outline-variant/10 flex justify-between items-center bg-surface-container-high/30">
                        <div>
                            <h3 className="text-2xl font-headline font-black text-on-surface uppercase tracking-tighter italic">High-Value Targets</h3>
                            <p className="text-on-surface-variant text-[10px] font-black uppercase tracking-[0.2em] mt-1">Lead Analysis & Monitoring</p>
                        </div>
                        <span className="px-4 py-2 bg-surface-bright/40 rounded-full text-[10px] font-black text-on-surface uppercase tracking-widest flex items-center gap-3 border border-outline-variant/20">
                            <span className="w-2 h-2 rounded-full bg-tertiary animate-pulse"></span>
                            12 Active Signals
                        </span>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead>
                                <tr className="text-on-surface-variant text-[10px] font-black uppercase tracking-[0.3em] border-b border-outline-variant/5">
                                    <th className="px-10 py-6">Identity</th>
                                    <th className="px-10 py-6">Context</th>
                                    <th className="px-10 py-6 text-center">Status</th>
                                    <th className="px-10 py-6 text-right">Action</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-outline-variant/5">
                                {[
                                    { name: 'JD', full: 'Jane Doe', co: 'Acme AI', status: 'Sent' },
                                    { name: 'MS', full: 'Mark S.', co: 'Vortex', status: 'Replied' },
                                    { name: 'LB', full: 'Laura B.', co: 'Nebula', status: 'Demo' }
                                ].map((lead, i) => (
                                    <tr key={i} className="group hover:bg-surface-bright/10 transition-colors duration-300">
                                        <td className="px-10 py-6">
                                            <div className="flex items-center gap-4">
                                                <div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center text-[10px] font-black text-tertiary border border-outline-variant/20 group-hover:scale-110 transition-transform">{lead.name}</div>
                                                <div className="font-bold text-on-surface text-sm uppercase tracking-tight">{lead.full}</div>
                                            </div>
                                        </td>
                                        <td className="px-10 py-6 text-on-surface-variant text-xs font-semibold">{lead.co}</td>
                                        <td className="px-10 py-6">
                                            <div className="flex justify-center">
                                                <span className={cn(
                                                    "px-3 py-1 rounded-md text-[9px] font-black uppercase tracking-widest border",
                                                    lead.status === 'Sent' ? "bg-tertiary/10 text-tertiary border-tertiary/20" :
                                                        lead.status === 'Replied' ? "bg-green-500/10 text-green-400 border-green-500/20" :
                                                            "bg-primary/10 text-on-surface border-outline-variant/30"
                                                )}>{lead.status}</span>
                                            </div>
                                        </td>
                                        <td className="px-10 py-6 text-right">
                                            <button className="p-2 rounded-md hover:bg-surface-container-highest transition-colors">
                                                <MoreVertical className="w-4 h-4 text-on-surface-variant" />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* Bottom CTA / Insight */}
            <section className="rounded-2xl overflow-hidden relative p-16 bg-surface-container-high border border-outline-variant/15 shadow-2xl group">
                <div className="absolute inset-0 bg-gradient-to-br from-tertiary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
                    <div className="max-w-2xl text-center lg:text-left">
                        <h4 className="text-4xl font-headline font-black text-on-surface mb-6 uppercase tracking-tighter italic">Scale Momentum</h4>
                        <p className="text-on-surface-variant text-lg leading-relaxed font-light mb-4">
                            {data.first_10_users_strategy}
                        </p>
                        <p className="text-on-surface-variant text-sm font-medium italic opacity-70">
                            Goal: {data.first_100_users_strategy}
                        </p>
                    </div>
                    <button className="whitespace-nowrap px-12 py-5 bg-tertiary text-on-tertiary font-black text-xs uppercase tracking-[0.2em] rounded-xl hover:shadow-2xl hover:shadow-tertiary/40 hover:-translate-y-2 transition-all duration-300">
                        Execute Acceleration
                    </button>
                </div>
            </section>
        </div>
    )
}
