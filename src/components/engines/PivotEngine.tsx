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
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000">
            {/* Phase Header */}
            <header className="relative p-16 rounded-3xl bg-surface-container-low ghost-border overflow-hidden group mb-12 shadow-2xl">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-tertiary/5 rounded-full blur-[150px] -mr-64 -mt-64"></div>
                <div className="relative z-10 flex flex-col lg:flex-row gap-16 items-center">
                    <div className="flex-shrink-0 w-24 h-24 rounded-3xl bg-surface-container-high flex items-center justify-center shadow-2xl group-hover:rotate-[360deg] transition-transform duration-1000 ease-in-out border border-white/5">
                        <span className="material-symbols-outlined text-4xl text-tertiary">shuffle</span>
                    </div>
                    <div className="space-y-6 flex-1 text-center lg:text-left">
                        <div className="flex items-center justify-center lg:justify-start gap-2 mb-2">
                            <span className="px-2 py-0.5 rounded bg-surface-container-high text-tertiary text-[10px] font-bold tracking-widest uppercase font-label">Strategic Evolution</span>
                        </div>
                        <h1 className="font-headline text-5xl md:text-6xl font-extrabold tracking-tighter text-white uppercase italic leading-none">Strategic Pivots</h1>
                        <p className="text-on-surface-variant text-xl md:text-2xl leading-relaxed font-body italic opacity-90">
                            Analyzing <span className="text-white font-semibold">Structural Shift</span> opportunities to maximize market alpha.
                        </p>
                    </div>
                </div>
            </header>

            {/* Assessment Card */}
            <div className="bg-surface-container-high/40 rounded-2xl p-10 ghost-border shadow-inner mb-12">
                <h3 className="text-[10px] font-black text-on-surface-variant uppercase tracking-[0.3em] mb-6 opacity-60 font-label">Legacy Thesis Assessment</h3>
                <p className="text-xl font-headline font-medium text-white italic leading-relaxed">
                    "{data.original_idea_assessment}"
                </p>
            </div>

            {/* Pivot Options Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                {data.pivots.map((pivot, i) => {
                    const isRecommended = pivot.pivot_name === data.recommended_pivot
                    return (
                        <div key={i} className={cn(
                            "group relative bg-surface-container-low rounded-3xl p-10 ghost-border transition-all duration-500 shadow-2xl overflow-hidden",
                            isRecommended ? "bg-surface-container-high ring-2 ring-tertiary/20" : "hover:bg-surface-container-high"
                        )}>
                            {isRecommended && (
                                <div className="absolute top-0 right-0 px-6 py-2 bg-tertiary rounded-bl-2xl text-[10px] font-black text-on-tertiary uppercase tracking-widest shadow-xl flex items-center gap-2 font-label animate-in slide-in-from-right duration-500">
                                    <span className="material-symbols-outlined text-sm">verified</span>
                                    Primary Path
                                </div>
                            )}

                            <div className="flex justify-between items-start mb-8">
                                <h4 className="text-2xl font-headline font-black text-white uppercase tracking-tight italic">
                                    {pivot.pivot_name}
                                </h4>
                                <span className="text-4xl font-black font-headline text-white/5 tracking-tighter italic">0{i + 1}</span>
                            </div>

                            <p className="text-on-surface-variant text-sm font-body leading-relaxed mb-8 opacity-90">
                                {pivot.pivot_description}
                            </p>

                            <div className="p-6 rounded-2xl bg-surface-container-high ghost-border italic text-xs text-on-surface-variant leading-relaxed mb-10 group-hover:bg-surface-container-low transition-colors shadow-inner">
                                "{pivot.why_stronger}"
                            </div>

                            <div className="grid grid-cols-2 gap-8 mb-10">
                                <div className="space-y-4">
                                    <div className="flex items-center gap-2">
                                        <span className="material-symbols-outlined text-tertiary text-sm">trending_up</span>
                                        <span className="text-[9px] font-black text-on-surface-variant uppercase tracking-widest opacity-60 font-label">Revenue Alpha</span>
                                    </div>
                                    <p className="text-xs font-black uppercase tracking-tight text-white font-label">{pivot.revenue_potential}</p>
                                </div>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-2">
                                        <span className="material-symbols-outlined text-on-surface-variant text-sm">warning</span>
                                        <span className="text-[9px] font-black text-on-surface-variant uppercase tracking-widest opacity-60 font-label">Risk Profile</span>
                                    </div>
                                    <p className="text-xs font-black uppercase tracking-tight text-white font-label">{pivot.risk_level}</p>
                                </div>
                            </div>

                            <div className="pt-8 border-t border-white/5 flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <span className="material-symbols-outlined text-tertiary opacity-40 text-sm">target</span>
                                    <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest font-label">{pivot.target_audience}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="material-symbols-outlined text-tertiary opacity-40 text-sm">schedule</span>
                                    <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest font-label">{pivot.time_to_revenue}</span>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>

            {/* Strategic Recommendation */}
            <div className={cn(
                "rounded-3xl p-16 shadow-2xl relative overflow-hidden group border-t-4 border-t-tertiary",
                "bg-gradient-to-br from-surface-container-high to-surface-container-low ghost-border"
            )}>
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-9xl text-tertiary">bolt</span>
                </div>
                <div className="relative z-10 space-y-8">
                    <div className="flex items-center gap-4">
                        <div className="px-4 py-1.5 bg-tertiary rounded-lg text-on-tertiary font-black text-[10px] tracking-widest uppercase font-label shadow-xl">The Strategic Verdict</div>
                        <h3 className="text-2xl font-headline font-black text-white uppercase italic tracking-tighter">Recommended Deployment</h3>
                    </div>
                    <p className="text-tertiary text-2xl font-headline font-black uppercase italic tracking-tight leading-snug max-w-4xl">
                        "{data.recommended_reason}"
                    </p>
                </div>
            </div>
        </div>
    )
}
