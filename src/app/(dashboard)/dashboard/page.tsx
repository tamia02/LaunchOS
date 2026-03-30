import React from 'react'
import { IdeaInput } from '@/components/dashboard/IdeaInput'
import { RecentAnalyses } from '@/components/dashboard/RecentAnalyses'
import { Sparkles, History } from 'lucide-react'

export default function DashboardPage() {
    const getGreeting = () => {
        const hour = new Date().getHours()
        if (hour < 12) return 'Good morning'
        if (hour < 18) return 'Good afternoon'
        return 'Good evening'
    }

    return (
        <div className="space-y-12">
            {/* Hero Section */}
            <div className="text-center space-y-8 py-12 relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-tertiary/20 to-transparent" />
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface-variant/40 border border-outline-variant/10 text-tertiary text-[10px] font-black uppercase tracking-[0.3em] font-label shadow-inner">
                    <span className="w-1.5 h-1.5 rounded-full bg-tertiary animate-pulse" />
                    Ready for Deployment
                </div>
                <div className="space-y-4">
                    <h1 className="text-5xl md:text-6xl font-black font-headline tracking-tighter text-white uppercase italic leading-none">
                        {getGreeting()}, <span className="text-tertiary decoration-tertiary/20 underline-offset-[12px] decoration-4">Founder</span>
                    </h1>
                    <p className="text-on-surface-variant max-w-xl mx-auto text-lg font-body leading-relaxed italic opacity-80">
                        What's the startup idea keeping you up at night? <br />
                        Let's see if it has <span className="text-white font-black">exponential wings</span>.
                    </p>
                </div>

                <div className="pt-4">
                    <IdeaInput />
                </div>
            </div>

            {/* History Section */}
            <div className="space-y-6">
                <div className="flex items-center justify-between border-b border-white/5 pb-4">
                    <h2 className="text-lg font-medium flex items-center gap-2">
                        <History className="w-5 h-5 text-text-muted" />
                        Recent Analyses
                    </h2>
                    <span className="text-xs text-text-muted">You have 1 free analysis left.</span>
                </div>

                <RecentAnalyses />
            </div>
        </div>
    )
}
