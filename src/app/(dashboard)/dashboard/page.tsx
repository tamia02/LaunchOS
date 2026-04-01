import { IdeaInput } from '@/components/dashboard/IdeaInput'
import { RecentAnalyses } from '@/components/dashboard/RecentAnalyses'
import { getCurrentUser } from '@/lib/actions/auth-actions'
import { redirect } from 'next/navigation'

export default async function DashboardPage() {
    const user = await getCurrentUser()
    if (!user) redirect('/login')

    const getGreeting = () => {
        const hour = new Date().getHours()
        if (hour < 12) return 'Good morning'
        if (hour < 18) return 'Good afternoon'
        return 'Good evening'
    }

    return (
        <div className="space-y-32 animate-in fade-in slide-in-from-bottom-12 duration-[2000ms] custom-ease">
            {/* Premium Hero Section */}
            <div className="relative min-h-[70vh] flex flex-col items-center justify-center px-6 text-center hero-gradient pt-16 rounded-[4rem] border border-white/5 shadow-[0_40px_100px_rgba(0,0,0,0.5)] overflow-hidden">
                {/* Atmospheric Background Elements */}
                <div className="absolute top-0 right-0 -mr-32 -mt-32 w-[600px] h-[600px] bg-tertiary/10 rounded-full blur-[120px] pointer-events-none" />
                <div className="absolute bottom-0 left-0 -ml-32 -mb-32 w-[600px] h-[600px] bg-surface-bright/20 rounded-full blur-[120px] pointer-events-none opacity-40" />

                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface-variant/40 border border-outline-variant/15 mb-10 relative z-10 glass-panel">
                    <span className="w-2 h-2 rounded-full bg-tertiary animate-pulse shadow-[0_0_12px_#679cff]" />
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-on-surface-variant font-label">Intelligence v2.5 Live</span>
                </div>

                <div className="space-y-8 relative z-10 max-w-5xl">
                    <h1 className="text-5xl md:text-8xl font-black font-headline tracking-tighter text-white leading-[0.95] text-balance">
                        {getGreeting()}, <span className="text-tertiary">{user.full_name?.split(' ')[0] || 'Founder'}</span>.
                    </h1>
                    <p className="text-on-surface-variant max-w-2xl mx-auto text-xl font-body leading-relaxed opacity-60 antialiased font-medium">
                        Deconstruct your vision into a fully validated <br className="hidden md:block" />
                        <span className="text-white font-bold opacity-100 italic">operating system</span> for your next startup.
                    </p>
                </div>

                <div className="pt-16 w-full max-w-4xl relative z-20">
                    <IdeaInput userId={user.id} />
                </div>

                <div className="mt-24 flex flex-wrap justify-center gap-12 md:gap-24 opacity-20 grayscale transition-all duration-1000 group hover:opacity-40 hover:grayscale-0">
                    <span className="font-headline font-black text-xs tracking-widest">Y COMBINATOR</span>
                    <span className="font-headline font-black text-xs tracking-widest">TECHSTARS</span>
                    <span className="font-headline font-black text-xs tracking-widest">SEQUOIA</span>
                    <span className="font-headline font-black text-xs tracking-widest">ANDREESSEN</span>
                </div>
            </div>

            {/* Records Section - Bento Grid Architecture */}
            <div className="space-y-12 px-6 pb-20">
                <div className="flex items-center justify-between border-b border-white/5 pb-10">
                    <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-3">
                            <span className="material-symbols-outlined text-tertiary text-2xl" data-weight="fill">token</span>
                            <h2 className="text-3xl font-black font-headline tracking-tighter text-white">Recent Protocols</h2>
                        </div>
                        <p className="text-[10px] text-on-surface-variant/40 font-black tracking-widest font-label pl-9 uppercase">Historical intelligence sequences</p>
                    </div>
                    <div className="bg-surface-container-high/40 px-6 py-3 rounded-2xl glass-edge border border-white/5 shadow-inner">
                        <span className="text-[10px] text-on-surface-variant font-bold tracking-widest font-label uppercase">
                            Analysis Cache: <span className="text-white">Active</span>
                        </span>
                    </div>
                </div>

                <RecentAnalyses />
            </div>
        </div>
    )
}
