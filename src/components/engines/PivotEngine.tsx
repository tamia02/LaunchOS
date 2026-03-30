import { cn } from '@/lib/utils'
import { Shuffle, TrendingUp, AlertTriangle, Clock, Target, Sparkles, Zap, ShieldCheck } from 'lucide-react'

interface Pivot {
    pivot_name: string
    pivot_description: string
    why_stronger: string
    target_audience: string
    revenue_potential: 'low' | 'medium' | 'high' | 'very high'
    time_to_revenue: string
    risk_level: 'low' | 'medium' | 'high'
}

interface PivotData {
    original_idea_assessment: string
    pivots: Pivot[]
    recommended_pivot: string
    recommended_reason: string
}

export function PivotEngine({ data }: { data: PivotData }) {
    if (!data) return null

    return (
        <div className="max-w-7xl mx-auto space-y-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {/* Header Section */}
            <header className="relative p-16 rounded-3xl bg-surface-container-low border border-outline-variant/15 shadow-2xl overflow-hidden group">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-tertiary/5 rounded-full blur-[150px] -mr-64 -mt-64" />
                <div className="relative z-10 flex flex-col lg:flex-row gap-16 items-center">
                    <div className="flex-shrink-0 w-24 h-24 rounded-3xl bg-surface-container-high flex items-center justify-center border border-outline-variant/20 shadow-2xl group-hover:rotate-[360deg] transition-transform duration-1000 ease-in-out">
                        <Shuffle className="w-12 h-12 text-tertiary" />
                    </div>
                    <div className="space-y-6 flex-1 text-center lg:text-left">
                        <h1 className="font-headline text-5xl md:text-6xl font-extrabold tracking-tighter text-on-surface uppercase italic leading-none">Strategic Pivots</h1>
                        <p className="text-on-surface-variant text-xl md:text-2xl leading-relaxed font-light italic">
                            Analyzing <span className="text-on-surface font-semibold">Structural Shift</span> opportunities to maximize market alpha.
                        </p>
                    </div>
                </div>
            </header>

            {/* Assessment Card */}
            <section className="bg-surface-container-high/40 rounded-2xl p-10 border border-outline-variant/10 shadow-inner">
                <h3 className="text-[10px] font-black text-on-surface-variant uppercase tracking-[0.3em] mb-6 opacity-60">Legacy Assessment</h3>
                <p className="text-xl font-headline font-medium text-on-surface-variant italic leading-relaxed">
                    "{data.original_idea_assessment}"
                </p>
            </section>

            {/* Pivot Options Grid */}
            <section className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                {data.pivots.map((pivot, i) => {
                    const isRecommended = pivot.pivot_name === data.recommended_pivot
                    return (
                        <div key={i} className={cn(
                            "group relative bg-surface-container-low rounded-2xl p-10 border transition-all duration-500 shadow-2xl",
                            isRecommended ? "border-tertiary/40 bg-surface-container-high ring-1 ring-tertiary/20" : "border-outline-variant/10 hover:border-tertiary/20 hover:bg-surface-container-high"
                        )}>
                            {isRecommended && (
                                <div className="absolute -top-3 left-10 px-4 py-1 bg-tertiary rounded-full text-[9px] font-black text-on-tertiary uppercase tracking-widest shadow-xl">
                                    Primary Path
                                </div>
                            )}

                            <div className="flex justify-between items-start mb-8">
                                <h4 className="text-2xl font-headline font-black text-on-surface uppercase tracking-tight italic">
                                    {pivot.pivot_name}
                                </h4>
                                <span className="text-3xl font-black font-headline text-surface-container-highest tracking-tighter italic">0{i + 1}</span>
                            </div>

                            <p className="text-on-surface-variant text-sm font-medium leading-relaxed mb-8 opacity-80">
                                {pivot.pivot_description}
                            </p>

                            <div className="p-6 rounded-xl bg-surface-container-high/50 border border-outline-variant/10 italic text-xs text-on-surface-variant leading-relaxed mb-10 group-hover:bg-surface-container-low transition-colors">
                                "{pivot.why_stronger}"
                            </div>

                            <div className="grid grid-cols-2 gap-8 mb-10">
                                <div className="space-y-4">
                                    <div className="flex items-center gap-2">
                                        <TrendingUp className="w-3.5 h-3.5 text-tertiary" />
                                        <span className="text-[9px] font-black text-on-surface-variant uppercase tracking-widest opacity-60">Revenue Alpha</span>
                                    </div>
                                    <p className="text-xs font-black uppercase tracking-tight text-on-surface">{pivot.revenue_potential}</p>
                                </div>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-2">
                                        <AlertTriangle className="w-3.5 h-3.5 text-on-surface-variant" />
                                        <span className="text-[9px] font-black text-on-surface-variant uppercase tracking-widest opacity-60">Risk Profile</span>
                                    </div>
                                    <p className="text-xs font-black uppercase tracking-tight text-on-surface">{pivot.risk_level}</p>
                                </div>
                            </div>

                            <div className="pt-8 border-t border-outline-variant/10 flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <Target className="w-4 h-4 text-tertiary opacity-40" />
                                    <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">{pivot.target_audience}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Clock className="w-4 h-4 text-tertiary opacity-40" />
                                    <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">{pivot.time_to_revenue}</span>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </section>

            {/* Strategic Recommendation */}
            <section className="bg-tertiary p-12 rounded-3xl shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-8 opacity-20">
                    <Zap className="w-32 h-32 text-on-tertiary" />
                </div>
                <div className="relative z-10 space-y-8">
                    <div className="flex items-center gap-4">
                        <div className="px-4 py-1.5 bg-on-tertiary/10 border border-on-tertiary/20 rounded-lg text-on-tertiary font-black text-[10px] tracking-widest uppercase">The Verdict</div>
                        <h3 className="text-2xl font-headline font-black text-on-tertiary uppercase italic tracking-tighter">Strategic Recommendation</h3>
                    </div>
                    <p className="text-on-tertiary text-2xl font-headline font-black uppercase italic tracking-tight leading-snug max-w-4xl">
                        "{data.recommended_reason}"
                    </p>
                </div>
            </section>
        </div>
    )
}
