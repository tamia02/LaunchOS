import React, { useState } from 'react'
import { cn } from '@/lib/utils'

interface YCData {
    project_name: string
    one_liner: string
    what_do_you_do: string
    problem: string
    solution: string
    why_now: string
    market_size: string
    business_model: string
    traction: string
    why_us: string
    competition: string
    what_makes_you_different: string
    yc_why: string
}

export function YCEngine({ data }: { data: YCData }) {
    if (!data) return null
    const [copiedIdx, setCopiedIdx] = useState<number | null>(null)

    const copyToClipboard = (text: string, idx: number | 'all') => {
        navigator.clipboard.writeText(text)
        if (idx !== 'all') {
            setCopiedIdx(idx as number)
            setTimeout(() => setCopiedIdx(null), 2000)
        }
    }

    const sections = [
        { label: 'The One-Liner', value: data.one_liner, hint: 'Clear, concise, and high-impact.' },
        { label: 'Operational Core', value: data.what_do_you_do, hint: 'What exactly are you building?' },
        { label: 'Market Friction', value: data.problem, hint: 'The burning pain you are solving.' },
        { label: 'Tactical Solution', value: data.solution, hint: 'The architectural answer.' },
        { label: 'Tectonics & Timing', value: data.why_now, hint: 'Why is this inevitable today?' },
        { label: 'Economic Horizon', value: data.market_size, hint: 'TAM/SAM/SOM breakdown.' },
        { label: 'Revenue Mechanics', value: data.business_model, hint: 'Unit economics and capture.' },
        { label: 'Momentum Signals', value: data.traction, hint: 'Evidence of product-market fit.' },
        { label: 'Founding Resonance', value: data.why_us, hint: 'Why you are the only one.' },
        { label: 'The Landscape', value: data.competition, hint: 'Incumbents and alternatives.' },
        { label: 'Systemic Alpha', value: data.what_makes_you_different, hint: 'Your unfair advantage.' },
        { label: 'Why YC?', value: data.yc_why, hint: 'Strategic alignment with the accelerator.' },
    ]

    return (
        <div className="animate-in fade-in slide-in-from-bottom-8 duration-[2000ms] custom-ease">
            {/* YC Header */}
            <header className="flex flex-col md:flex-row md:items-start justify-between gap-8 mb-8 px-2">
                <div className="space-y-4 max-w-2xl">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-[#F04E23] rounded-lg flex items-center justify-center shadow-lg group">
                            <span className="text-white font-headline font-bold text-xl tracking-tighter select-none">YC</span>
                        </div>
                        <div>
                            <div className="flex items-center gap-2 mb-1">
                                <div className="px-2 py-0.5 rounded bg-[#F04E23]/10 border border-[#F04E23]/20">
                                    <span className="text-[#F04E23] text-[8px] font-bold tracking-widest uppercase font-label">S24 Batch Draft</span>
                                </div>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-headline font-bold text-white uppercase tracking-tighter leading-none antialiased">{data.project_name}</h2>
                        </div>
                    </div>
                    <p className="text-[13px] text-on-surface-variant font-body leading-relaxed opacity-80 max-w-xl">
                        Drafting the <span className="text-white font-bold underline decoration-[#F04E23]/40 underline-offset-4">Standard-Setting Application</span> for Y Combinator.
                    </p>
                </div>
                <button
                    onClick={() => copyToClipboard(JSON.stringify(data, null, 2), 'all')}
                    className="bg-[#F04E23] hover:bg-[#d03d1a] text-white px-8 py-3 rounded-lg text-[10px] font-bold uppercase tracking-widest flex items-center gap-3 shadow-md transition-all active:scale-95"
                >
                    <span className="material-symbols-outlined text-lg">send</span> PUSH_TO_SUBMISSION
                </button>
            </header>

            {/* Application Flow */}
            <div className="grid grid-cols-1 gap-6 mb-12">
                {sections.map((sec, i) => (
                    <div key={i} className="group relative bg-surface-container-low rounded-xl p-6 shadow-md border border-white/5 hover:bg-surface-container transition-all overflow-hidden">
                        <div className="flex flex-col lg:flex-row gap-8 relative z-10">
                            <div className="lg:w-1/4 space-y-3">
                                <div className="flex items-center gap-3">
                                    <div className="w-1 h-8 bg-[#F04E23]/20 group-hover:bg-[#F04E23] transition-all rounded-full"></div>
                                    <h4 className="text-[9px] font-bold text-[#F04E23] uppercase tracking-widest font-label border-b border-[#F04E23]/10 pb-1">{sec.label}</h4>
                                </div>
                                <p className="text-[12px] text-on-surface-variant/40 font-body leading-relaxed pl-4">{sec.hint}</p>
                            </div>
                            <div className="lg:w-3/4 relative pt-1">
                                <p className="text-lg font-headline font-bold text-white leading-relaxed pr-12 whitespace-pre-wrap antialiased group-hover:translate-x-1 transition-transform">
                                    {sec.value}
                                </p>
                                <button
                                    onClick={() => copyToClipboard(sec.value, i)}
                                    className="absolute top-0 right-0 p-2 bg-surface-container-high rounded-lg shadow-lg"
                                >
                                    {copiedIdx === i ? (
                                        <span className="material-symbols-outlined text-tertiary text-sm">check_circle</span>
                                    ) : (
                                        <span className="material-symbols-outlined text-white/20 hover:text-white transition-colors text-sm">content_copy</span>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* YC Founders Note */}
            <div className="bg-[#F04E23]/5 rounded-2xl p-8 shadow-md border border-[#F04E23]/10 relative overflow-hidden group mb-12">
                <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start md:items-center">
                    <div className="px-4 py-2 bg-[#F04E23] rounded-lg text-white font-bold text-[9px] tracking-widest uppercase font-label">ARCHITECT_PROTOCOL</div>
                    <p className="text-[#F04E23] text-lg md:text-xl font-headline font-bold uppercase tracking-tight leading-tight max-w-4xl antialiased">
                        "YC looks for clarity, conciseness, and direct evidence. This draft follows high-fidelity alumni patterns."
                    </p>
                </div>
            </div>
        </div>
    )
}
