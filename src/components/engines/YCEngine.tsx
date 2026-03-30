import React, { useState } from 'react'
import { cn } from '@/lib/utils'

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
        <div className="animate-in fade-in slide-in-from-bottom-8 duration-[2000ms] custom-ease">
            {/* YC Header - Editorial Layout */}
            <header className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-16 px-4">
                <div className="space-y-8 max-w-3xl">
                    <div className="flex items-center gap-6">
                        <div className="w-20 h-20 bg-[#F04E23] rounded-[1.5rem] flex items-center justify-center shadow-[0_30px_60px_rgba(240,78,35,0.3)] group hover:scale-110 transition-transform duration-700">
                            <span className="text-white font-headline font-black text-3xl tracking-tighter italic select-none">YC</span>
                        </div>
                        <div>
                            <div className="flex items-center gap-3 mb-2">
                                <div className="px-3 py-1 rounded bg-[#F04E23]/10 border border-[#F04E23]/20">
                                    <span className="text-[#F04E23] text-[9px] font-black tracking-[0.4em] uppercase font-label italic">S24 Batch Draft 09</span>
                                </div>
                                <span className="w-1.5 h-1.5 rounded-full bg-[#F04E23] animate-pulse"></span>
                            </div>
                            <h2 className="text-5xl md:text-7xl font-headline font-black text-white uppercase italic tracking-tighter leading-none antialiased">{data.company_name}</h2>
                        </div>
                    </div>
                    <p className="text-2xl text-on-surface-variant font-body leading-relaxed opacity-80 italic max-w-2xl px-2">
                        Drafting the <span className="text-white font-black underline decoration-[#F04E23]/40 underline-offset-8">Standard-Setting Application</span> for Y Combinator.
                    </p>
                </div>
                <button
                    onClick={() => copyToClipboard(JSON.stringify(data, null, 2), 'all')}
                    className="button-metallic bg-gradient-to-br from-[#F04E23] to-[#ff6b4a] !text-white whitespace-nowrap px-14 py-6 rounded-[1.5rem] text-[11px] font-black uppercase tracking-[0.4em] flex items-center gap-4 shadow-[0_20px_50px_rgba(240,78,35,0.4)] hover:shadow-[0_30px_70px_rgba(240,78,35,0.6)] active:scale-95 transition-all duration-500 italic"
                >
                    <span className="material-symbols-outlined text-xl">send</span> PUSH_TO_SUBMISSION
                </button>
            </header>

            {/* Application Flow - Cinematic Grid */}
            <div className="grid grid-cols-1 gap-10 mb-20">
                {sections.map((sec, i) => (
                    <div key={i} className="group relative bg-surface-container-low rounded-[3rem] p-12 shadow-[0_40px_100px_rgba(0,0,0,0.5)] border border-white/5 hover:bg-surface-container transition-all duration-700 overflow-hidden">
                        <div className="absolute top-0 right-0 p-12 opacity-5 scale-150 group-hover:scale-110 transition-transform duration-1000 pointer-events-none">
                            <span className="material-symbols-outlined text-[120px] text-[#F04E23]">article</span>
                        </div>

                        <div className="flex flex-col lg:flex-row gap-16 relative z-10">
                            <div className="lg:w-1/3 xl:w-1/4 space-y-6">
                                <div className="flex items-center gap-4">
                                    <div className="w-1.5 h-12 bg-[#F04E23]/20 group-hover:bg-[#F04E23] transition-all duration-700 rounded-full shadow-[0_0_15px_rgba(240,78,35,0.4)]"></div>
                                    <h4 className="text-[10px] font-black text-[#F04E23] uppercase tracking-[0.5em] font-label italic border-b border-[#F04E23]/10 pb-2">{sec.label}</h4>
                                </div>
                                <p className="text-sm text-on-surface-variant/40 font-body italic antialiased leading-relaxed pl-6">{sec.hint}</p>
                            </div>
                            <div className="lg:w-2/3 xl:w-3/4 relative pt-2">
                                <p className="text-2xl font-headline font-black text-white leading-[1.6] pr-20 whitespace-pre-wrap italic antialiased group-hover:translate-x-2 transition-transform duration-700">
                                    {sec.value}
                                </p>
                                <button
                                    onClick={() => copyToClipboard(sec.value, i)}
                                    className="absolute -top-4 -right-4 p-5 bg-surface-container-high glass-edge rounded-2xl opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 hover:brightness-125 active:scale-90 shadow-2xl group/copy"
                                >
                                    {copiedIdx === i ? (
                                        <span className="material-symbols-outlined text-tertiary">check_circle</span>
                                    ) : (
                                        <span className="material-symbols-outlined text-white/20 group-hover/copy:text-white transition-colors">content_copy</span>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* YC Founders Note - High Fidelity Footer */}
            <div className="bg-[#F04E23]/5 rounded-[4rem] p-16 shadow-[0_60px_150px_rgba(240,78,35,0.1)] border border-[#F04E23]/10 relative overflow-hidden group mb-12">
                <div className="absolute inset-0 bg-gradient-to-br from-[#F04E23]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
                <div className="absolute top-0 right-0 p-16 opacity-10 group-hover:scale-110 transition-transform duration-[2000ms]">
                    <span className="material-symbols-outlined text-[160px] text-[#F04E23]">auto_awesome</span>
                </div>
                <div className="relative z-10 flex flex-col md:flex-row gap-12 items-start md:items-center">
                    <div className="px-6 py-3 bg-[#F04E23] rounded-xl text-white font-black text-[11px] tracking-[0.4em] uppercase shadow-[0_20px_40px_rgba(240,78,35,0.4)] font-label italic rotate-[-2deg]">ARCHITECT_PROTOCOL</div>
                    <p className="text-[#F04E23] text-3xl md:text-4xl font-headline font-black uppercase tracking-tighter leading-tight italic max-w-4xl antialiased">
                        "YC looks for clarity, conciseness, and direct evidence. This draft follows the high-fidelity alumni patterns established by founders who shipped from day one."
                    </p>
                </div>
            </div>
        </div>
    )
}
