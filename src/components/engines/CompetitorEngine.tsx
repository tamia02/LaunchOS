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
        <div className="max-w-7xl mx-auto space-y-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {/* Header / Positioning Section */}
            <header className="relative p-12 rounded-2xl bg-surface-container-low border border-outline-variant/15 shadow-2xl overflow-hidden group">
                <div className="absolute top-0 right-0 w-96 h-96 bg-tertiary/10 rounded-full blur-[120px] -mr-32 -mt-32" />
                <div className="relative z-10 flex flex-col lg:flex-row gap-12 items-center">
                    <div className="flex-shrink-0 w-20 h-20 rounded-2xl bg-surface-container-high flex items-center justify-center border border-outline-variant/20 shadow-inner group-hover:scale-110 transition-transform duration-500">
                        <Target className="w-10 h-10 text-tertiary" />
                    </div>
                    <div className="space-y-6 flex-1 text-center lg:text-left">
                        <h1 className="font-headline text-5xl font-extrabold tracking-tighter text-on-surface uppercase italic leading-none">Market Positioning</h1>
                        <p className="text-on-surface-variant text-xl leading-relaxed font-light italic">
                            "{data.positioning_statement}"
                        </p>
                    </div>
                </div>
            </header>

            {/* Gap Analysis */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="p-10 rounded-xl bg-surface-container-high/50 border border-outline-variant/10 shadow-inner">
                    <h3 className="text-[10px] font-black text-tertiary uppercase tracking-[0.3em] mb-6">Identified Gap</h3>
                    <p className="text-on-surface text-xl font-headline font-semibold leading-snug">
                        {data.market_gap}
                    </p>
                </div>
                <div className="p-10 rounded-xl bg-surface-container-high/50 border border-outline-variant/10 shadow-inner">
                    <h3 className="text-[10px] font-black text-primary uppercase tracking-[0.3em] mb-6">Strategic Angle</h3>
                    <p className="text-on-surface text-xl font-headline font-semibold leading-snug">
                        {data.your_angle}
                    </p>
                </div>
            </section>

            {/* Competitor Board */}
            <section className="space-y-10">
                <h2 className="text-3xl font-black font-headline tracking-tighter uppercase italic">Competitive Intelligence</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {data.competitors.map((comp, i) => (
                        <div key={i} className="group bg-surface-container-low rounded-2xl p-10 border border-outline-variant/10 hover:border-tertiary/20 hover:bg-surface-container-high transition-all duration-500 shadow-2xl relative">
                            <div className="flex justify-between items-start mb-8">
                                <div className="space-y-1">
                                    <h4 className="text-2xl font-headline font-black text-on-surface uppercase tracking-tight italic flex items-center gap-3">
                                        {comp.name}
                                        <a href={comp.url} target="_blank" rel="noopener noreferrer" className="opacity-20 hover:opacity-100 transition-opacity">
                                            <ExternalLink className="w-4 h-4" />
                                        </a>
                                    </h4>
                                    <p className="text-[10px] font-black text-on-surface-variant uppercase tracking-widest opacity-60">{comp.pricing}</p>
                                </div>
                                <span className="text-3xl font-black font-headline text-surface-container-highest tracking-tighter italic">0{i + 1}</span>
                            </div>

                            <p className="text-on-surface-variant text-sm font-medium leading-relaxed mb-10 opacity-80">
                                {comp.what_they_do}
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8 border-t border-outline-variant/10">
                                <div className="space-y-3">
                                    <div className="flex items-center gap-2">
                                        <AlertTriangle className="w-4 h-4 text-error" />
                                        <span className="text-[10px] font-black text-error uppercase tracking-[0.2em]">Structural Weakness</span>
                                    </div>
                                    <p className="text-xs text-on-surface-variant font-medium italic leading-relaxed">{comp.weakness}</p>
                                </div>
                                <div className="space-y-3">
                                    <div className="flex items-center gap-2">
                                        <MessageSquare className="w-4 h-4 text-tertiary" />
                                        <span className="text-[10px] font-black text-tertiary uppercase tracking-[0.2em]">Market Friction</span>
                                    </div>
                                    <p className="text-xs text-on-surface-variant font-medium italic leading-relaxed">"{comp.user_complaints}"</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Strategic Comparison */}
            <section className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                <div className="bg-surface-container-high rounded-2xl p-12 border border-outline-variant/15 shadow-2xl relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-6 opacity-10">
                        <ShieldAlert className="w-24 h-24 text-error" />
                    </div>
                    <h3 className="text-[10px] font-black text-error uppercase tracking-[0.3em] mb-8">What NOT to compete on</h3>
                    <p className="text-on-surface-variant text-lg font-light leading-relaxed italic">
                        {data.dont_compete_on}
                    </p>
                </div>
                <div className="bg-surface-container-high rounded-2xl p-12 border border-outline-variant/15 shadow-2xl relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-6 opacity-10">
                        <Zap className="w-24 h-24 text-tertiary" />
                    </div>
                    <h3 className="text-[10px] font-black text-tertiary uppercase tracking-[0.3em] mb-8">Strategy to Win</h3>
                    <p className="text-on-surface text-xl font-headline font-black uppercase tracking-tight italic leading-snug">
                        {data.win_on}
                    </p>
                </div>
            </section>
        </div>
    )
}
