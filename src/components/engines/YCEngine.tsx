import React, { useState } from 'react'
import { Copy, FileText, Send, Sparkles, CheckCircle2 } from 'lucide-react'

interface YCData {
    company_name: string
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
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000">
            {/* YC Header */}
            <header className="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-12">
                <div className="space-y-6 max-w-2xl">
                    <div className="flex items-center gap-4">
                        <div className="w-16 h-16 bg-[#F04E23] rounded-2xl flex items-center justify-center shadow-2xl shadow-[#F04E23]/20 group hover:scale-110 transition-transform">
                            <span className="text-white font-headline font-black text-2xl tracking-tighter italic">YC</span>
                        </div>
                        <div>
                            <div className="flex items-center gap-2 mb-1">
                                <span className="px-2 py-0.5 rounded bg-[#F04E23]/10 text-[#F04E23] text-[10px] font-bold tracking-widest uppercase font-label">S24 Batch Draft</span>
                            </div>
                            <h2 className="text-4xl font-headline font-black text-white uppercase italic tracking-tighter leading-none">{data.company_name}</h2>
                        </div>
                    </div>
                    <p className="text-on-surface-variant text-lg font-body leading-relaxed opacity-90">
                        Drafting the <span className="text-white font-semibold italic border-b border-[#F04E23]/30">Standard-Setting Application</span> for Y Combinator.
                    </p>
                </div>
                <button
                    onClick={() => copyToClipboard(JSON.stringify(data, null, 2), 'all')}
                    className="button-metallic whitespace-nowrap px-10 py-4 rounded-xl text-[10px] font-black uppercase tracking-[0.2em] flex items-center gap-3 active:scale-95"
                >
                    <span className="material-symbols-outlined text-lg">send</span> Push to Submission
                </button>
            </header>

            {/* Application Grid */}
            <div className="grid grid-cols-1 gap-6 mb-12">
                {sections.map((sec, i) => (
                    <div key={i} className="group relative bg-surface-container-low rounded-2xl p-10 ghost-border hover:bg-surface-container-high transition-all duration-500 shadow-2xl">
                        <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity">
                            <span className="material-symbols-outlined text-white/10 text-4xl">edit_note</span>
                        </div>

                        <div className="flex flex-col lg:flex-row gap-10 relative z-10">
                            <div className="lg:w-1/4 space-y-2">
                                <h4 className="text-[10px] font-black text-[#F04E23] uppercase tracking-[0.3em] font-label">{sec.label}</h4>
                                <p className="text-xs text-on-surface-variant font-body italic opacity-60 leading-relaxed">{sec.hint}</p>
                            </div>
                            <div className="lg:w-3/4 relative">
                                <p className="text-lg font-headline font-semibold text-white leading-loose pr-16 whitespace-pre-wrap italic">
                                    {sec.value}
                                </p>
                                <button
                                    onClick={() => copyToClipboard(sec.value, i)}
                                    className="absolute top-0 right-0 p-3 bg-surface-container-high ghost-border rounded-xl opacity-0 group-hover:opacity-100 transition-all hover:scale-110 active:scale-95 shadow-lg group/btn"
                                >
                                    {copiedIdx === i ? (
                                        <span className="material-symbols-outlined text-tertiary">check_circle</span>
                                    ) : (
                                        <span className="material-symbols-outlined text-on-surface-variant group-hover/btn:text-white">content_copy</span>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* YC Founders Note */}
            <div className="bg-[#F04E23]/5 rounded-3xl p-12 ghost-border relative overflow-hidden group border-l-4 border-l-[#F04E23]">
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-8xl text-[#F04E23]">article</span>
                </div>
                <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start">
                    <div className="px-4 py-2 bg-[#F04E23] rounded-lg text-white font-black text-[10px] tracking-widest uppercase shadow-xl font-label">Architects Note</div>
                    <p className="text-[#F04E23] text-xl font-headline font-black uppercase tracking-tight leading-snug italic max-w-3xl">
                        "YC looks for clarity, conciseness, and direct evidence. This draft follows the high-fidelity alumni patterns established by founders who shipped from day one."
                    </p>
                </div>
            </div>
        </div>
    )
}
