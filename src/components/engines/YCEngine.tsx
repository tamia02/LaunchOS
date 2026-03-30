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
        if (idx === 'all') {
            // Handle all copy
        } else {
            setCopiedIdx(idx)
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
        <div className="max-w-5xl mx-auto space-y-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {/* Header Section */}
            <header className="flex flex-col md:flex-row md:items-end justify-between gap-10">
                <div className="space-y-6 max-w-2xl">
                    <div className="flex items-center gap-4">
                        <div className="w-16 h-16 bg-[#F04E23] rounded-2xl flex items-center justify-center shadow-2xl shadow-[#F04E23]/20">
                            <span className="text-white font-headline font-black text-2xl tracking-tighter italic">YC</span>
                        </div>
                        <h2 className="text-4xl font-headline font-black text-on-surface uppercase italic tracking-tighter self-end">{data.company_name}</h2>
                    </div>
                    <p className="text-on-surface-variant text-lg font-light leading-relaxed">
                        Drafting the <span className="text-on-surface font-semibold italic">Standard-Setting Application</span> for Y Combinator S24.
                    </p>
                </div>
                <button
                    onClick={() => copyToClipboard(JSON.stringify(data, null, 2), 'all')}
                    className="whitespace-nowrap px-10 py-4 bg-surface-container-high border border-outline-variant/20 rounded-xl text-[10px] font-black text-on-surface uppercase tracking-[0.2em] hover:bg-surface-container-highest transition-all shadow-xl flex items-center gap-3"
                >
                    <Send className="w-4 h-4 text-[#F04E23]" /> Push to Submission
                </button>
            </header>

            {/* Application Grid */}
            <section className="grid grid-cols-1 gap-10">
                {sections.map((sec, i) => (
                    <div key={i} className="group relative bg-surface-container-low rounded-2xl p-10 border border-outline-variant/10 hover:border-tertiary/20 hover:bg-surface-container-high transition-all duration-500 shadow-2xl">
                        <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity">
                            <Sparkles className="w-6 h-6 text-tertiary/40" />
                        </div>

                        <div className="flex flex-col lg:flex-row gap-10">
                            <div className="lg:w-1/4 space-y-2">
                                <h4 className="text-[10px] font-black text-[#F04E23] uppercase tracking-[0.3em]">{sec.label}</h4>
                                <p className="text-xs text-on-surface-variant font-medium italic opacity-60 leading-relaxed">{sec.hint}</p>
                            </div>
                            <div className="lg:w-3/4 relative">
                                <p className="text-lg font-headline font-semibold text-on-surface leading-loose pr-16 whitespace-pre-wrap">
                                    {sec.value}
                                </p>
                                <button
                                    onClick={() => copyToClipboard(sec.value, i)}
                                    className="absolute top-0 right-0 p-3 bg-surface-container-high border border-outline-variant/20 rounded-xl opacity-0 group-hover:opacity-100 transition-all hover:scale-110 active:scale-95 shadow-lg"
                                >
                                    {copiedIdx === i ? <CheckCircle2 className="w-5 h-5 text-green-400" /> : <Copy className="w-5 h-5 text-on-surface-variant" />}
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </section>

            {/* Application Insight */}
            <section className="bg-[#F04E23]/5 rounded-2xl p-12 border border-[#F04E23]/20 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-6 opacity-10">
                    <FileText className="w-32 h-32 text-[#F04E23]" />
                </div>
                <div className="relative z-10 flex gap-8 items-start">
                    <div className="px-4 py-2 bg-[#F04E23] rounded-lg text-white font-black text-[10px] tracking-widest uppercase shadow-xl mt-1">Founders Note</div>
                    <p className="text-[#F04E23] text-xl font-headline font-black uppercase tracking-tight leading-snug italic max-w-3xl">
                        "YC looks for clarity, conciseness, and direct evidence. This draft follows the high-fidelity alumni patterns established by founders who shipped from day one."
                    </p>
                </div>
            </section>
        </div>
    )
}
