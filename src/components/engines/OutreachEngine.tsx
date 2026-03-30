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
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000">
            {/* Outreach Header */}
            <header className="mb-12">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div className="max-w-2xl">
                        <div className="flex items-center gap-2 mb-3">
                            <span className="px-2 py-0.5 rounded bg-surface-container-high text-tertiary text-[10px] font-bold tracking-widest uppercase font-label">Phase 05: Outreach</span>
                            <span className="w-1.5 h-1.5 rounded-full bg-tertiary animate-pulse"></span>
                            <span className="text-on-surface-variant text-xs font-medium font-label">Growth Loops Active</span>
                        </div>
                        <h1 className="text-5xl md:text-6xl font-extrabold font-headline tracking-tighter text-white uppercase italic leading-none mb-6">Distribution & Outreach</h1>
                        <p className="text-on-surface-variant text-lg leading-relaxed font-body">
                            Architecting high-fidelity growth loops for <span className="text-white font-semibold">Immediate Market Impact</span>.
                        </p>
                    </div>
                </div>
            </header>

            {/* Channel Strategy Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                {data.channels.slice(0, 3).map((ch, i) => (
                    <div key={i} className="group p-10 rounded-2xl bg-surface-container-low ghost-border hover:bg-surface-container transition-all duration-500 flex flex-col">
                        <div className="w-14 h-14 rounded-xl bg-surface-container-high flex items-center justify-center mb-8 shadow-xl group-hover:scale-110 transition-transform">
                            <span className={cn("material-symbols-outlined text-tertiary text-2xl")}>
                                {i === 0 ? 'share' : i === 1 ? 'mail' : 'rocket_launch'}
                            </span>
                        </div>
                        <h3 className="text-xl font-headline font-black mb-4 text-white uppercase tracking-tighter italic">{ch.platform}</h3>
                        <p className="text-on-surface-variant text-sm font-body leading-relaxed mb-8 flex-1 italic opacity-80 group-hover:opacity-100 transition-opacity">
                            "{ch.why}"
                        </p>
                        <div className="flex items-center gap-3 text-[10px] font-black text-tertiary uppercase tracking-widest pt-6 border-t border-white/5 font-label">
                            <span className="w-1.5 h-1.5 rounded-full bg-tertiary animate-pulse"></span>
                            {ch.expected_result}
                        </div>
                    </div>
                ))}
            </div>

            {/* Interactive Section */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-12">
                {/* Template Card */}
                <div className="lg:col-span-5 bg-surface-container-low rounded-2xl p-10 ghost-border relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-tertiary/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
                    <div className="mb-10">
                        <h3 className="text-2xl font-headline font-black text-white mb-2 uppercase tracking-tighter italic">Alpha Template</h3>
                        <p className="text-on-surface-variant text-[10px] font-black uppercase tracking-[0.2em] font-label">High-Resonance Resonance Copy</p>
                    </div>
                    <div className="bg-surface-container-high rounded-xl p-8 border border-white/5 font-mono text-[13px] text-on-surface-variant leading-loose space-y-6 shadow-inner relative z-10">
                        <p className="text-tertiary opacity-70">Subject: {data.cold_email_subject}</p>
                        <div className="whitespace-pre-wrap">{data.cold_email_body || data.dm_template}</div>
                    </div>
                    <div className="mt-10 flex items-center justify-between">
                        <div className="flex -space-x-3">
                            {[1, 2, 3].map(idx => (
                                <div key={idx} className="w-10 h-10 rounded-full border-4 border-surface-container-low bg-surface-container-high flex items-center justify-center relative overflow-hidden">
                                    <div className="w-full h-full bg-white/10"></div>
                                </div>
                            ))}
                            <div className="w-10 h-10 rounded-full bg-tertiary flex items-center justify-center text-[10px] font-black border-4 border-surface-container-low text-on-tertiary font-label">+12</div>
                        </div>
                        <button
                            onClick={() => copyToClipboard(`${data.cold_email_subject}\n\n${data.cold_email_body}`)}
                            className="text-tertiary text-xs font-black uppercase tracking-[0.2em] flex items-center gap-3 hover:gap-5 transition-all font-label"
                        >
                            {copied ? 'Captured' : 'Capture Template'}
                            <span className="material-symbols-outlined text-sm">content_copy</span>
                        </button>
                    </div>
                </div>

                {/* Lead Tracker */}
                <div className="lg:col-span-7 bg-surface-container-low rounded-2xl overflow-hidden ghost-border">
                    <div className="p-10 border-b border-white/5 flex justify-between items-center bg-surface-container-high/30">
                        <div>
                            <h3 className="text-2xl font-headline font-black text-white uppercase tracking-tighter italic">High-Value Targets</h3>
                            <p className="text-on-surface-variant text-[10px] font-black uppercase tracking-[0.2em] mt-1 font-label">Lead Monitoring System</p>
                        </div>
                        <span className="px-4 py-2 bg-surface-container-highest rounded-full text-[10px] font-black text-white uppercase tracking-widest flex items-center gap-3 border border-white/5 font-label">
                            <span className="w-2 h-2 rounded-full bg-tertiary animate-pulse"></span>
                            12 Active Signals
                        </span>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead>
                                <tr className="text-on-surface-variant text-[10px] font-black uppercase tracking-[0.3em] border-b border-white/5">
                                    <th className="px-10 py-6 font-label">Identity</th>
                                    <th className="px-10 py-6 font-label">Context</th>
                                    <th className="px-10 py-6 text-center font-label">Status</th>
                                    <th className="px-10 py-6 text-right font-label">Action</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5">
                                {[
                                    { name: 'JD', full: 'Jane Doe', co: 'Acme AI', status: 'Sent' },
                                    { name: 'MS', full: 'Mark S.', co: 'Vortex', status: 'Replied' },
                                    { name: 'LB', full: 'Laura B.', co: 'Nebula', status: 'Demo' }
                                ].map((lead, i) => (
                                    <tr key={i} className="group hover:bg-white/5 transition-colors duration-300">
                                        <td className="px-10 py-6">
                                            <div className="flex items-center gap-4">
                                                <div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center text-[10px] font-black text-tertiary border border-white/10 group-hover:scale-110 transition-transform font-label">{lead.name}</div>
                                                <div className="font-bold text-white text-sm uppercase tracking-tight font-headline italic">{lead.full}</div>
                                            </div>
                                        </td>
                                        <td className="px-10 py-6 text-on-surface-variant text-xs font-semibold font-body">{lead.co}</td>
                                        <td className="px-10 py-6">
                                            <div className="flex justify-center">
                                                <span className={cn(
                                                    "px-3 py-1 rounded-md text-[9px] font-black uppercase tracking-widest border font-label",
                                                    lead.status === 'Sent' ? "bg-tertiary/10 text-tertiary border-tertiary/20" :
                                                        lead.status === 'Replied' ? "bg-blue-500/10 text-blue-400 border-blue-500/20" :
                                                            "bg-white/5 text-white/50 border-white/10"
                                                )}>{lead.status}</span>
                                            </div>
                                        </td>
                                        <td className="px-10 py-6 text-right">
                                            <button className="p-2 rounded-md hover:bg-surface-container-highest transition-colors">
                                                <span className="material-symbols-outlined text-on-surface-variant text-lg">more_vert</span>
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* Scale Momentum CTA */}
            <div className="rounded-2xl overflow-hidden relative p-16 bg-surface-container-high ghost-border group shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-tertiary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
                <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 text-center lg:text-left">
                    <div className="max-w-2xl">
                        <h4 className="text-4xl font-headline font-black text-white mb-6 uppercase tracking-tighter italic">Scale Momentum</h4>
                        <p className="text-on-surface-variant text-lg leading-relaxed font-body mb-4">
                            {data.first_10_users_strategy}
                        </p>
                        <p className="text-on-surface-variant text-sm font-body italic opacity-70">
                            Goal: {data.first_100_users_strategy}
                        </p>
                    </div>
                    <button className="button-metallic whitespace-nowrap px-12 py-5 rounded-xl font-black text-xs uppercase tracking-[0.2em]">
                        Execute Acceleration
                    </button>
                </div>
            </div>
        </div>
    )
}
