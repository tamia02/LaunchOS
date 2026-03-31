import { cn } from '@/lib/utils'

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
    project_name: string
    original_idea_assessment: string
    pivots: Pivot[]
    recommended_pivot: string
    recommended_reason: string
}

export function PivotEngine({ data }: { data: PivotData }) {
    if (!data) return null

    return (
        <div className="animate-in fade-in slide-in-from-bottom-8 duration-[2000ms] custom-ease">
            {/* Evolution Header */}
            <header className="mb-8 flex flex-col md:flex-row md:items-start justify-between gap-8">
                <div className="max-w-xl">
                    <div className="flex items-center gap-2 mb-4">
                        <div className="px-2 py-0.5 rounded bg-surface-variant/20 border border-white/5">
                            <span className="text-tertiary text-[9px] font-bold tracking-widest uppercase font-label">Tactical Shift</span>
                        </div>
                    </div>
                    <h1 className="text-2xl md:text-3xl font-bold font-headline tracking-tighter text-white mb-4 leading-none uppercase">{data.project_name} <span className="text-tertiary">Pivots.</span></h1>
                    <div className="bg-surface-container-low p-6 rounded-xl shadow-md border border-white/5 relative group transition-all">
                        <h3 className="text-[9px] font-bold text-on-surface-variant/40 uppercase tracking-widest mb-2">Legacy Thesis Audit</h3>
                        <p className="text-lg font-headline font-medium text-white leading-relaxed antialiased">
                            "{data.original_idea_assessment}"
                        </p>
                    </div>
                </div>
                <div className="bg-surface-container-low p-6 rounded-xl flex items-center gap-4 shadow-md border border-white/5">
                    <span className="material-symbols-outlined text-xl text-tertiary">shuffle</span>
                    <p className="text-[9px] font-bold text-on-surface-variant/40 uppercase tracking-widest max-w-[100px]">Recalibration Engine</p>
                </div>
            </header>

            {/* Pivot Options */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
                {data.pivots.map((pivot, i) => {
                    const isRecommended = pivot.pivot_name === data.recommended_pivot
                    return (
                        <div key={i} className={cn(
                            "group relative bg-surface-container-low rounded-xl p-6 shadow-md border border-white/5 transition-all flex flex-col justify-between min-h-[380px]",
                            isRecommended ? "bg-surface-container-high ring-1 ring-tertiary/20" : "hover:bg-surface-container"
                        )}>
                            {isRecommended && (
                                <div className="absolute top-0 right-0 px-3 py-1 bg-tertiary rounded-bl-lg text-[8px] font-bold text-on-tertiary uppercase tracking-widest shadow-lg flex items-center gap-1 font-label">
                                    <span className="material-symbols-outlined text-xs">verified</span>
                                    Recommended
                                </div>
                            )}

                            <div className="relative z-10 flex flex-col h-full">
                                <div className="flex justify-between items-start mb-6">
                                    <div>
                                        <h4 className="text-lg font-headline font-bold text-white uppercase tracking-tight mb-0.5">
                                            {pivot.pivot_name}
                                        </h4>
                                        <p className="text-[8px] font-bold text-tertiary uppercase tracking-widest">Option Sequence 0{i + 1}</p>
                                    </div>
                                    <div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center border border-white/5">
                                        <span className="material-symbols-outlined text-tertiary text-lg">route</span>
                                    </div>
                                </div>

                                <p className="text-on-surface-variant text-[13px] font-body leading-relaxed mb-6 opacity-70 group-hover:opacity-100 transition-opacity antialiased">
                                    {pivot.pivot_description}
                                </p>

                                <div className="bg-surface-container-high/40 p-4 rounded-xl border border-white/5 text-[12px] text-on-surface-variant/80 leading-relaxed mb-6">
                                    "{pivot.why_stronger}"
                                </div>

                                <div className="grid grid-cols-2 gap-6 mt-auto">
                                    <div className="space-y-2">
                                        <div className="flex items-center gap-2">
                                            <span className="material-symbols-outlined text-tertiary text-[14px]">insights</span>
                                            <span className="text-[8px] font-bold text-on-surface-variant/30 uppercase tracking-widest">Revenue Alpha</span>
                                        </div>
                                        <p className="text-[10px] font-bold uppercase text-white tracking-widest pl-5">{pivot.revenue_potential}</p>
                                    </div>
                                    <div className="space-y-2">
                                        <div className="flex items-center gap-2">
                                            <span className="material-symbols-outlined text-tertiary text-[14px]">warning_amber</span>
                                            <span className="text-[8px] font-bold text-on-surface-variant/30 uppercase tracking-widest">Risk Threshold</span>
                                        </div>
                                        <p className="text-[10px] font-bold uppercase text-white tracking-widest pl-5">{pivot.risk_level}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <div className="flex items-center gap-2">
                                        <span className="text-[8px] font-bold text-on-surface-variant/40 uppercase tracking-widest">{pivot.target_audience}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="text-[8px] font-bold text-on-surface-variant/40 uppercase tracking-widest">{pivot.time_to_revenue}</span>
                                    </div>
                                </div>
                                <button className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-on-surface-variant/40 hover:text-tertiary transition-all">
                                    <span className="material-symbols-outlined text-lg">north_east</span>
                                </button>
                            </div>
                        </div>
                    )
                })}
            </div>

            {/* Strategic Summary */}
            <div className="bg-surface-container-high p-8 rounded-xl shadow-lg border border-white/10 group relative transition-all">
                <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center border border-white/5">
                            <span className="material-symbols-outlined text-xl text-tertiary">auto_fix_high</span>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-white uppercase tracking-tight leading-none mb-1">Architecture verdict</h3>
                            <p className="text-[9px] font-bold text-on-surface-variant/30 uppercase tracking-widest">Final Path Optimization</p>
                        </div>
                    </div>

                    <div className="flex flex-col lg:flex-row items-start justify-between gap-8">
                        <p className="text-tertiary text-lg md:text-xl font-headline font-bold uppercase tracking-tight leading-snug max-w-2xl antialiased">
                            "{data.recommended_reason}"
                        </p>
                        <button className="bg-tertiary text-white px-8 py-3 rounded-lg font-bold text-[10px] uppercase tracking-widest shadow-md transition-all active:scale-95">
                            Initialize Pivot
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
