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
    original_idea_assessment: string
    pivots: Pivot[]
    recommended_pivot: string
    recommended_reason: string
}

export function PivotEngine({ data }: { data: PivotData }) {
    if (!data) return null

    return (
        <div className="animate-in fade-in slide-in-from-bottom-8 duration-[2000ms] custom-ease">
            {/* Evolution Header - Editorial Layout */}
            <header className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-12">
                <div className="max-w-3xl">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="px-3 py-1.5 rounded-lg bg-surface-variant/20 shadow-inner">
                            <span className="text-tertiary text-[10px] font-black tracking-[0.4em] uppercase font-label">Tactical Shift 08</span>
                        </div>
                        <span className="w-1.5 h-1.5 rounded-full bg-tertiary shadow-[0_0_10px_#679cff]"></span>
                    </div>
                    <h1 className="text-6xl md:text-8xl font-black font-headline tracking-tighter text-white mb-8 leading-[0.9] uppercase italic">Strategic <br /> <span className="text-tertiary">Pivots.</span></h1>
                    <div className="bg-surface-container-low p-10 rounded-[2.5rem] shadow-inner border border-white/5 relative overflow-hidden group hover:bg-surface-bright/20 transition-all duration-700">
                        <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:scale-110 transition-transform">
                            <span className="material-symbols-outlined text-7xl text-tertiary">history_edu</span>
                        </div>
                        <h3 className="text-[10px] font-black text-on-surface-variant/40 uppercase tracking-[0.4em] mb-4 font-label">Legacy Thesis Audit</h3>
                        <p className="text-xl font-headline font-medium text-white italic leading-relaxed relative z-10 antialiased">
                            "{data.original_idea_assessment}"
                        </p>
                    </div>
                </div>
                <div className="bg-surface-container-low p-10 rounded-[2.5rem] flex items-center md:flex-col lg:flex-row gap-8 shadow-[0_40px_80px_rgba(0,0,0,0.4)] border border-white/5">
                    <span className="material-symbols-outlined text-4xl text-tertiary animate-spin-slow">shuffle</span>
                    <div className="w-px h-12 bg-white/5 md:hidden lg:block"></div>
                    <p className="text-[10px] font-black text-on-surface-variant/60 uppercase tracking-[0.3em] font-label text-center max-w-[120px] leading-relaxed italic">Structural Recalibration Engine</p>
                </div>
            </header>

            {/* Pivot Options - Cinematic Bento */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
                {data.pivots.map((pivot, i) => {
                    const isRecommended = pivot.pivot_name === data.recommended_pivot
                    return (
                        <div key={i} className={cn(
                            "group relative bg-surface-container-low rounded-[2.5rem] p-12 shadow-[0_40px_100px_rgba(0,0,0,0.5)] border border-white/5 transition-all duration-700 overflow-hidden flex flex-col justify-between min-h-[520px]",
                            isRecommended ? "bg-surface-container-high brightness-110" : "hover:bg-surface-container"
                        )}>
                            <div className="absolute top-0 right-0 p-12 opacity-5 group-hover:scale-110 transition-transform">
                                <span className="material-symbols-outlined text-9xl text-tertiary">alt_route</span>
                            </div>

                            {isRecommended && (
                                <div className="absolute top-0 right-0 px-8 py-3 bg-tertiary rounded-bl-3xl text-[10px] font-black text-on-tertiary uppercase tracking-[0.3em] shadow-2xl flex items-center gap-3 font-label animate-in slide-in-from-right duration-700">
                                    <span className="material-symbols-outlined text-sm">verified</span>
                                    Recommended Path
                                </div>
                            )}

                            <div className="relative z-10 flex flex-col h-full">
                                <div className="flex justify-between items-start mb-12">
                                    <div>
                                        <h4 className="text-4xl font-headline font-black text-white uppercase tracking-tighter italic leading-none mb-2">
                                            {pivot.pivot_name}
                                        </h4>
                                        <p className="text-[10px] font-black text-tertiary uppercase tracking-[0.4em] font-label">Option Sequence 0{i + 1}</p>
                                    </div>
                                    <div className="w-14 h-14 rounded-2xl bg-surface-container-high flex items-center justify-center shadow-xl glass-edge group-hover:rotate-12 transition-transform">
                                        <span className="material-symbols-outlined text-tertiary text-2xl">route</span>
                                    </div>
                                </div>

                                <p className="text-on-surface-variant text-base font-body leading-relaxed mb-10 opacity-70 group-hover:opacity-100 transition-opacity italic antialiased pr-12">
                                    {pivot.pivot_description}
                                </p>

                                <div className="bg-surface-container-high/40 p-8 rounded-[2rem] glass-edge border border-white/5 italic text-sm text-on-surface-variant/80 leading-relaxed mb-10 group-hover:bg-surface-container transition-all duration-700 shadow-inner flex items-start gap-4">
                                    <span className="material-symbols-outlined text-tertiary/40 text-lg">psychology</span>
                                    "{pivot.why_stronger}"
                                </div>

                                <div className="grid grid-cols-2 gap-10 mt-auto">
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-3">
                                            <span className="material-symbols-outlined text-tertiary text-lg">insights</span>
                                            <span className="text-[10px] font-black text-on-surface-variant/30 uppercase tracking-[0.3em] font-label">Revenue Alpha</span>
                                        </div>
                                        <p className="text-sm font-black uppercase text-white font-label italic tracking-widest pl-8">{pivot.revenue_potential}</p>
                                    </div>
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-3">
                                            <span className="material-symbols-outlined text-tertiary text-lg">warning_amber</span>
                                            <span className="text-[10px] font-black text-on-surface-variant/30 uppercase tracking-[0.3em] font-label">Risk Threshold</span>
                                        </div>
                                        <p className="text-sm font-black uppercase text-white font-label italic tracking-widest pl-8">{pivot.risk_level}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-10 mt-10 border-t border-white/5 flex items-center justify-between relative z-10">
                                <div className="flex items-center gap-6">
                                    <div className="flex items-center gap-3">
                                        <span className="material-symbols-outlined text-tertiary/20 text-sm">groups</span>
                                        <span className="text-[10px] font-black text-on-surface-variant/40 uppercase tracking-[0.2em] font-label">{pivot.target_audience}</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <span className="material-symbols-outlined text-tertiary/20 text-sm">timer</span>
                                        <span className="text-[10px] font-black text-on-surface-variant/40 uppercase tracking-[0.2em] font-label">{pivot.time_to_revenue}</span>
                                    </div>
                                </div>
                                <button className="w-10 h-10 rounded-xl bg-surface-container flex items-center justify-center text-on-surface-variant/40 hover:text-tertiary hover:bg-surface-bright/20 transition-all active:scale-90 shadow-2xl glass-edge">
                                    <span className="material-symbols-outlined text-xl">north_east</span>
                                </button>
                            </div>
                        </div>
                    )
                })}
            </div>

            {/* Strategic Summary - Tonal Layout */}
            <div className="bg-surface-container-high p-16 rounded-[3rem] shadow-[0_60px_120px_rgba(0,0,0,0.6)] border-t border-white/10 group relative overflow-hidden transition-all duration-1000 hover:brightness-110">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-tertiary/5 rounded-full blur-[150px] -mr-96 -mt-96"></div>

                <div className="relative z-10">
                    <div className="flex items-center gap-6 mb-12">
                        <div className="w-16 h-16 rounded-2xl bg-surface-container flex items-center justify-center shadow-xl">
                            <span className="material-symbols-outlined text-3xl text-tertiary">auto_fix_high</span>
                        </div>
                        <div>
                            <h3 className="text-4xl font-headline font-black text-white uppercase italic tracking-tighter leading-none mb-1">Architecture verdict</h3>
                            <p className="text-[10px] font-black text-on-surface-variant/30 uppercase tracking-[0.4em] font-label">Final Path Optimization analysis</p>
                        </div>
                    </div>

                    <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
                        <p className="text-tertiary text-3xl md:text-4xl font-headline font-black uppercase italic tracking-tight leading-snug max-w-4xl antialiased">
                            "{data.recommended_reason}"
                        </p>
                        <button className="button-metallic whitespace-nowrap px-16 py-6 rounded-2xl font-black text-[13px] uppercase tracking-[0.3em] italic shadow-2xl active:scale-95 transition-all">
                            Initialize Pivot
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
