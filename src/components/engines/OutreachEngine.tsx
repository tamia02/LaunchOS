import { cn } from '@/lib/utils'
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
        <div className="animate-in fade-in slide-in-from-bottom-8 duration-[2000ms] custom-ease">
            {/* Transmission Header - Editorial Layout */}
            <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-12">
                <div className="max-w-3xl">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="px-3 py-1.5 rounded-lg bg-surface-variant/20 shadow-inner">
                            <span className="text-tertiary text-[10px] font-black tracking-[0.4em] uppercase font-label">Growth Core 05</span>
                        </div>
                        <span className="w-1.5 h-1.5 rounded-full bg-tertiary shadow-[0_0_10px_#679cff]"></span>
                    </div>
                    <h1 className="text-6xl md:text-8xl font-black font-headline tracking-tighter text-white mb-8 leading-[0.9] uppercase italic">Distribution <br /> <span className="text-tertiary">Sequences.</span></h1>
                    <p className="text-xl text-on-surface-variant font-body leading-relaxed italic opacity-80 antialiased max-w-2xl">
                        Architecting high-fidelity growth loops for <span className="text-white font-black underline decoration-tertiary/40">Immediate Market Impact</span>.
                    </p>
                </div>
                <div className="bg-surface-container-low p-10 rounded-[2.5rem] flex items-center gap-8 shadow-[0_40px_80px_rgba(0,0,0,0.4)] border border-white/5 transition-all duration-700 hover:scale-[1.03]">
                    <span className="material-symbols-outlined text-4xl text-tertiary animate-pulse">broadcast_on_personal</span>
                    <div className="w-px h-12 bg-white/5"></div>
                    <p className="text-[10px] font-black text-on-surface-variant/60 uppercase tracking-[0.3em] font-label text-center max-w-[120px] leading-relaxed">Active Signal Processing</p>
                </div>
            </div>

            {/* Tactical Channels - Cinematic Bento */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
                {data.channels.slice(0, 3).map((ch, i) => (
                    <div key={i} className="group p-12 rounded-[2.5rem] bg-surface-container-low shadow-[0_40px_80px_rgba(0,0,0,0.4)] border border-white/5 hover:bg-surface-container transition-all duration-700 flex flex-col relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-12 opacity-5 group-hover:scale-110 transition-transform">
                            <span className="material-symbols-outlined text-9xl text-tertiary">
                                {i === 0 ? 'share' : i === 1 ? 'mail' : 'rocket_launch'}
                            </span>
                        </div>
                        <div className="w-16 h-16 rounded-2xl bg-surface-container-high flex items-center justify-center mb-10 shadow-xl glass-edge group-hover:scale-110 transition-transform relative z-10">
                            <span className="material-symbols-outlined text-tertiary text-3xl">
                                {i === 0 ? 'share' : i === 1 ? 'mail' : 'rocket_launch'}
                            </span>
                        </div>
                        <h3 className="text-3xl font-headline font-black mb-6 text-white uppercase tracking-tighter italic leading-none relative z-10">{ch.platform}</h3>
                        <p className="text-on-surface-variant text-base font-body leading-relaxed mb-10 flex-1 italic opacity-70 group-hover:opacity-100 transition-opacity antialiased relative z-10">
                            "{ch.why}"
                        </p>
                        <div className="flex items-center gap-4 text-[10px] font-black text-tertiary uppercase tracking-[0.3em] pt-8 border-t border-white/5 font-label relative z-10">
                            <span className="w-2 h-2 rounded-full bg-tertiary animate-pulse shadow-[0_0_10px_#679cff]"></span>
                            Projection: {ch.expected_result}
                        </div>
                    </div>
                ))}
            </div>

            {/* Intelligence & Lead Matrix - Tonal Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16">
                {/* Template Core */}
                <div className="lg:col-span-5 bg-surface-container-low rounded-[3rem] p-12 shadow-[0_40px_100px_rgba(0,0,0,0.5)] border border-white/5 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-tertiary/10 rounded-full blur-[100px] -mr-48 -mt-48 transition-opacity opacity-0 group-hover:opacity-100 duration-1000"></div>
                    <div className="mb-12">
                        <h3 className="text-4xl font-headline font-black text-white mb-2 uppercase tracking-tighter italic leading-none">Alpha Sequence</h3>
                        <p className="text-tertiary text-[10px] font-black uppercase tracking-[0.4em] font-label">High-Resolution Transmission</p>
                    </div>
                    <div className="bg-surface-container p-10 rounded-[2rem] shadow-inner border border-white/5 font-body text-base text-on-surface-variant leading-relaxed space-y-8 relative z-10 group-hover:bg-surface-bright/20 transition-all duration-700 antialiased">
                        <div className="pb-6 border-b border-white/5 text-white font-black italic">
                            <span className="text-tertiary/40 mr-4 font-label not-italic uppercase tracking-[0.2em] text-[10px]">SUB_INTEL:</span>
                            {data.cold_email_subject}
                        </div>
                        <div className="whitespace-pre-wrap italic opacity-80 leading-loose">
                            {data.cold_email_body || data.dm_template}
                        </div>
                    </div>
                    <div className="mt-12 flex items-center justify-between relative z-10">
                        <div className="flex -space-x-4">
                            {[1, 2, 3].map(idx => (
                                <div key={idx} className="w-12 h-12 rounded-full border-4 border-surface-container-low bg-surface-container-high flex items-center justify-center shadow-lg overflow-hidden group-hover:scale-110 transition-transform">
                                    <div className="w-full h-full bg-white/5"></div>
                                </div>
                            ))}
                            <div className="w-12 h-12 rounded-full bg-tertiary flex items-center justify-center text-[11px] font-black border-4 border-surface-container-low text-on-tertiary font-label shadow-lg">+12</div>
                        </div>
                        <button
                            onClick={() => copyToClipboard(`${data.cold_email_subject}\n\n${data.cold_email_body}`)}
                            className="bg-surface-container-high p-4 rounded-xl flex items-center gap-4 hover:bg-surface-bright/40 transition-all active:scale-95 shadow-2xl glass-edge text-tertiary"
                        >
                            <span className="text-[10px] font-black uppercase tracking-[0.3em] font-label italic">{copied ? 'Captured' : 'Acquire Copy'}</span>
                            <span className="material-symbols-outlined text-xl">content_copy</span>
                        </button>
                    </div>
                </div>

                {/* Lead Monitoring System */}
                <div className="lg:col-span-7 bg-surface-container rounded-[3rem] overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.5)] border border-white/5">
                    <div className="p-12 border-b border-white/5 flex justify-between items-center bg-surface-container-high/30">
                        <div>
                            <h3 className="text-4xl font-headline font-black text-white uppercase tracking-tighter italic leading-none">Telemetry Targets</h3>
                            <p className="text-on-surface-variant/40 text-[10px] font-black uppercase tracking-[0.4em] mt-2 font-label">Active Signal Monitoring</p>
                        </div>
                        <div className="px-6 py-3 bg-surface-container-highest rounded-full text-[10px] font-black text-white uppercase tracking-[0.2em] flex items-center gap-4 border border-white/5 font-label shadow-xl glass-edge">
                            <span className="w-2.5 h-2.5 rounded-full bg-tertiary animate-pulse shadow-[0_0_10px_#679cff]"></span>
                            12 Active Circuits
                        </div>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead>
                                <tr className="text-on-surface-variant/30 text-[10px] font-black uppercase tracking-[0.4em] border-b border-white/5">
                                    <th className="px-12 py-8 font-label">Identity Core</th>
                                    <th className="px-12 py-8 font-label">Resonance context</th>
                                    <th className="px-12 py-8 text-center font-label">Status</th>
                                    <th className="px-12 py-8 text-right font-label">Action</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5">
                                {[
                                    { name: 'JD', full: 'Jane Doe', co: 'Acme AI', status: 'Sent' },
                                    { name: 'MS', full: 'Mark S.', co: 'Vortex', status: 'Replied' },
                                    { name: 'LB', full: 'Laura B.', co: 'Nebula', status: 'Demo' }
                                ].map((lead, i) => (
                                    <tr key={i} className="group hover:bg-white/5 transition-all duration-300 cursor-default">
                                        <td className="px-12 py-8">
                                            <div className="flex items-center gap-6">
                                                <div className="w-12 h-12 rounded-xl bg-surface-container-high flex items-center justify-center text-[11px] font-black text-tertiary border border-white/10 group-hover:scale-110 transition-all font-label shadow-lg">{lead.name}</div>
                                                <div className="font-black text-white text-lg uppercase tracking-tight font-headline italic leading-none group-hover:text-tertiary transition-colors">{lead.full}</div>
                                            </div>
                                        </td>
                                        <td className="px-12 py-8 text-on-surface-variant text-sm font-body italic opacity-60 antialiased">{lead.co}</td>
                                        <td className="px-12 py-8">
                                            <div className="flex justify-center">
                                                <span className={cn(
                                                    "px-4 py-1.5 rounded-lg text-[9px] font-black uppercase tracking-[0.2em] border font-label transition-all shadow-lg",
                                                    lead.status === 'Sent' ? "bg-tertiary/10 text-tertiary border-tertiary/20 group-hover:bg-tertiary/20" :
                                                        lead.status === 'Replied' ? "bg-blue-500/10 text-blue-400 border-blue-500/20 group-hover:bg-blue-500/20" :
                                                            "bg-white/5 text-white/40 border-white/10"
                                                )}>{lead.status}</span>
                                            </div>
                                        </td>
                                        <td className="px-12 py-8 text-right">
                                            <button className="w-10 h-10 rounded-lg flex items-center justify-center hover:bg-surface-bright/20 transition-all active:scale-90 group-hover:text-white">
                                                <span className="material-symbols-outlined text-on-surface-variant/40 text-xl group-hover:text-white transition-colors">more_horizontal</span>
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* Momentum Architecture CTA - Cinematic Overlay */}
            <div className="rounded-[3rem] overflow-hidden relative p-20 bg-surface-container-high shadow-[0_60px_120px_rgba(0,0,0,0.6)] group border-t border-white/10 transition-all duration-1000 hover:brightness-110">
                <div className="absolute inset-0 bg-gradient-to-br from-tertiary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
                <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-16 text-center lg:text-left">
                    <div className="max-w-3xl">
                        <div className="flex items-center justify-center lg:justify-start gap-4 mb-8">
                            <span className="material-symbols-outlined text-tertiary text-3xl shadow-sm">speed</span>
                            <h4 className="text-5xl font-headline font-black text-white uppercase tracking-tighter italic leading-none">Scale Momentum</h4>
                        </div>
                        <p className="text-on-surface-variant text-xl leading-relaxed font-body mb-8 italic opacity-80 antialiased">
                            {data.first_10_users_strategy}
                        </p>
                        <div className="flex items-center justify-center lg:justify-start gap-3 text-tertiary/60 font-black italic text-[11px] uppercase tracking-[0.3em] font-label">
                            <span className="w-2 h-2 rounded-full bg-tertiary/40 animate-ping"></span>
                            Trajectory: {data.first_100_users_strategy}
                        </div>
                    </div>
                    <button className="button-metallic whitespace-nowrap px-16 py-6 rounded-[1.5rem] font-black text-[13px] uppercase tracking-[0.3em] italic shadow-[0_20px_50px_rgba(103,156,255,0.4)] active:scale-95 transition-all">
                        Execute Acceleration
                    </button>
                </div>
            </div>
        </div>
    )
}
