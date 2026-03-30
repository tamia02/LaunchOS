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
            <div className="text-center space-y-6 py-8">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-[11px] font-mono font-bold uppercase tracking-widest">
                    <Sparkles className="w-3 h-3" />
                    Ready to launch?
                </div>
                <div className="space-y-2">
                    <h1 className="text-4xl font-bold tracking-tight">
                        {getGreeting()}, <span className="text-accent underline decoration-accent/20 underline-offset-8">Founder</span> 👋
                    </h1>
                    <p className="text-text-secondary max-w-lg mx-auto leading-relaxed">
                        What's the startup idea keeping you up at night? Let's see if it has wings.
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
