import { cn } from '@/lib/utils'
import { Target, ExternalLink, Zap, AlertTriangle, MessageSquare, ShieldAlert, Globe } from 'lucide-react'

interface Competitor {
    name: string
    url: string
    what_they_do: string
    pricing: string
    weakness: string
    user_complaints: string
}

interface CompetitorData {
    competitors: Competitor[]
    market_gap: string
    your_angle: string
    positioning_statement: string
    dont_compete_on: string
    win_on: string
}

export function CompetitorEngine({ data }: { data: CompetitorData }) {
    if (!data) return null

    return (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000">
            {/* Positioning Header */}
            <header className="relative p-12 rounded-3xl bg-surface-container-low ghost-border overflow-hidden group mb-12">
                <div className="absolute top-0 right-0 w-96 h-96 bg-tertiary/10 rounded-full blur-[120px] -mr-32 -mt-32"></div>
                <div className="relative z-10 flex flex-col lg:flex-row gap-12 items-center">
                    <div className="flex-shrink-0 w-20 h-20 rounded-2xl bg-surface-container-high flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-500">
                        <span className="material-symbols-outlined text-4xl text-tertiary">target</span>
                    </div>
                    <div className="space-y-6 flex-1 text-center lg:text-left">
                        <div className="flex items-center justify-center lg:justify-start gap-2 mb-2">
                            <span className="px-2 py-0.5 rounded bg-surface-container-high text-tertiary text-[10px] font-bold tracking-widest uppercase font-label">Market Intelligence</span>
                        </div>
                        <h1 className="font-headline text-5xl font-extrabold tracking-tighter text-white uppercase italic leading-none">Market Positioning</h1>
                        <p className="text-on-surface-variant text-xl leading-relaxed font-body italic opacity-90">
                            "{data.positioning_statement}"
                        </p>
                    </div>
                </div>
            </header>

            {/* Core Gap Analysis */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="p-10 rounded-2xl bg-surface-container-high ghost-border relative overflow-hidden group">
                    <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-tertiary/50 to-transparent"></div>
                    <h3 className="text-[10px] font-black text-tertiary uppercase tracking-[0.3em] mb-6 font-label">Identified Gap</h3>
                    <p className="text-white text-xl font-headline font-semibold leading-snug italic">
                        {data.market_gap}
                    </p>
                </div>
                <div className="p-10 rounded-2xl bg-surface-container-high ghost-border relative overflow-hidden group">
                    <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-white/20 to-transparent"></div>
                    <h3 className="text-[10px] font-black text-white/50 uppercase tracking-[0.3em] mb-6 font-label">Strategic Angle</h3>
                    <p className="text-white text-xl font-headline font-semibold leading-snug italic">
                        {data.your_angle}
                    </p>
                </div>
            </div>

            {/* Competitor Grid */}
            <div className="space-y-10 mb-12">
                <h2 className="text-3xl font-black font-headline tracking-tighter uppercase italic text-white leading-none">Competitive Intelligence</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {data.competitors.map((comp, i) => (
                        <div key={i} className="group bg-surface-container-low rounded-2xl p-10 ghost-border hover:bg-surface-container-high transition-all duration-500 shadow-2xl relative">
                            <div className="flex justify-between items-start mb-8">
                                <div className="space-y-1">
                                    <h4 className="text-2xl font-headline font-black text-white uppercase tracking-tight italic flex items-center gap-3">
                                        {comp.name}
                                        <a href={comp.url} target="_blank" rel="noopener noreferrer" className="opacity-20 hover:opacity-100 transition-opacity">
                                            <span className="material-symbols-outlined text-sm text-tertiary">open_in_new</span>
                                        </a>
                                    </h4>
                                    <p className="text-[10px] font-black text-on-surface-variant uppercase tracking-widest opacity-60 font-label">{comp.pricing}</p>
                                </div>
                                <span className="text-4xl font-black font-headline text-white/5 tracking-tighter italic">0{i + 1}</span>
                            </div>

                            <p className="text-on-surface-variant text-sm font-body leading-relaxed mb-10 opacity-90">
                                {comp.what_they_do}
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-white/5">
                                <div className="space-y-3">
                                    <div className="flex items-center gap-2">
                                        <span className="material-symbols-outlined text-error text-lg">warning</span>
                                        <span className="text-[10px] font-black text-error uppercase tracking-[0.2em] font-label">Structural Weakness</span>
                                    </div>
                                    <p className="text-xs text-on-surface-variant font-body italic leading-relaxed">{comp.weakness}</p>
                                </div>
                                <div className="space-y-3">
                                    <div className="flex items-center gap-2">
                                        <span className="material-symbols-outlined text-tertiary text-lg">forum</span>
                                        <span className="text-[10px] font-black text-tertiary uppercase tracking-[0.2em] font-label">Market Friction</span>
                                    </div>
                                    <p className="text-xs text-on-surface-variant font-body italic leading-relaxed">"{comp.user_complaints}"</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Strategic Summary Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-surface-container-high rounded-3xl p-12 ghost-border relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:scale-110 transition-transform font-serif italic text-8xl text-error font-black">X</div>
                    <h3 className="text-[10px] font-black text-error uppercase tracking-[0.3em] mb-8 font-label">Do Not Compete On</h3>
                    <p className="text-on-surface-variant text-lg font-body leading-relaxed italic">
                        {data.dont_compete_on}
                    </p>
                </div>
                <div className="bg-surface-container-high rounded-3xl p-12 ghost-border relative overflow-hidden group border-t-2 border-tertiary/20">
                    <div className="absolute top-0 right-0 p-6 opacity-30 group-hover:scale-110 transition-transform">
                        <span className="material-symbols-outlined text-6xl text-tertiary">bolt</span>
                    </div>
                    <h3 className="text-[10px] font-black text-tertiary uppercase tracking-[0.3em] mb-8 font-label">The Winning Angle</h3>
                    <p className="text-white text-xl font-headline font-black uppercase tracking-tight italic leading-snug">
                        {data.win_on}
                    </p>
                </div>
            </div>
        </div>
    )
}
