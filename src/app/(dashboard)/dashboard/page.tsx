import React from 'react'
import { IdeaInput } from '@/components/dashboard/IdeaInput'
import { RecentAnalyses } from '@/components/dashboard/RecentAnalyses'
import { History } from 'lucide-react'

export default function DashboardPage() {
    const getGreeting = () => {
        const hour = new Date().getHours()
        if (hour < 12) return 'Good morning'
        if (hour < 18) return 'Good afternoon'
        return 'Good evening'
    }

    return (
        <div className="space-y-24 animate-in fade-in slide-in-from-bottom-8 duration-[1500ms] custom-ease">
            {/* Hero Section - The Living Canvas */}
            <div className="text-center space-y-12 py-20 relative overflow-hidden">
                {/* Atmospheric Depth */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-tertiary/30 to-transparent" />
                <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-tertiary/5 rounded-full blur-[100px] pointer-events-none" />

                <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-surface-variant/20 border border-white/5 text-tertiary text-[10px] font-black uppercase tracking-[0.4em] font-label shadow-[0_10px_30px_rgba(0,0,0,0.3)] glass-edge">
                    <span className="w-2 h-2 rounded-full bg-tertiary shadow-[0_0_10px_#679cff] animate-pulse" />
                    Neural Engine Online
                </div>

                <div className="space-y-4 relative z-10">
                    <h1 className="text-3xl md:text-5xl font-black font-headline tracking-tighter text-white uppercase leading-none">
                        {getGreeting()}, <span className="text-tertiary">Founder.</span>
                    </h1>
                    <p className="text-on-surface-variant max-w-xl mx-auto text-lg font-body leading-relaxed opacity-60 antialiased pt-2">
                        What's the startup idea keeping you up at night? <br />
                        Let's see if it has <span className="text-white font-bold underline decoration-tertiary/40">exponential wings</span>.
                    </p>
                </div>

                <div className="pt-12 max-w-4xl mx-auto relative z-10">
                    <IdeaInput />
                </div>
            </div>

            {/* History Section - No-Line Architecture */}
            <div className="space-y-12 px-4 pb-20">
                <div className="flex items-center justify-between border-b border-white/5 pb-8">
                    <div className="flex flex-col gap-1">
                        <h2 className="text-2xl font-black font-headline tracking-tighter uppercase text-white flex items-center gap-3">
                            <span className="material-symbols-outlined text-tertiary text-2xl">history</span>
                            Recent Protocols
                        </h2>
                        <p className="text-[9px] text-on-surface-variant/40 font-black uppercase tracking-widest font-label pl-10">Historical intelligence sequences</p>
                    </div>
                    <div className="bg-surface-container-high/40 px-5 py-2 rounded-xl glass-edge border border-white/5 shadow-inner">
                        <span className="text-[9px] text-on-surface-variant font-bold uppercase tracking-widest font-label">
                            Quota Status: <span className="text-white">1 Remaining</span>
                        </span>
                    </div>
                </div>

                <div className="relative group">
                    <div className="absolute inset-x-0 h-full bg-gradient-to-b from-surface/0 via-surface-container-low/20 to-surface/0 rounded-[3rem] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                    <RecentAnalyses />
                </div>
            </div>
        </div>
    )
}
