import { cn } from '@/lib/utils'

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
        <div className="animate-in fade-in slide-in-from-bottom-8 duration-[2000ms] custom-ease">
            {/* Positioning Header - Editorial Canvas */}
            <header className="relative p-16 rounded-[3rem] bg-surface-container-low overflow-hidden group mb-16 shadow-[0_40px_100px_rgba(0,0,0,0.4)] border border-white/5">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-tertiary/10 rounded-full blur-[150px] -mr-64 -mt-64 transition-transform duration-[3000ms] group-hover:scale-125"></div>
                <div className="relative z-10 flex flex-col lg:flex-row gap-16 items-center">
                    <div className="flex-shrink-0 w-24 h-24 rounded-2xl bg-surface-container-high flex items-center justify-center shadow-2xl glass-edge group-hover:scale-110 transition-transform duration-700">
                        <span className="material-symbols-outlined text-5xl text-tertiary">track_changes</span>
                    </div>
                    <div className="space-y-6 flex-1 text-center lg:text-left">
                        <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
                            <div className="px-3 py-1 bg-surface-variant/20 rounded-lg">
                                <span className="text-tertiary text-[10px] font-black tracking-[0.4em] uppercase font-label">Intelligence Cluster</span>
                            </div>
                            <span className="w-1.5 h-1.5 rounded-full bg-tertiary animate-pulse"></span>
                        </div>
                        <h1 className="font-headline text-6xl font-black tracking-tighter text-white uppercase italic leading-none">Market Positioning</h1>
                        <p className="text-on-surface-variant text-2xl leading-relaxed font-body italic opacity-70 antialiased max-w-3xl">
                            "{data.positioning_statement}"
                        </p>
                    </div>
                </div>
            </header>

            {/* Core Gap Analysis - Tonal Shift Separation */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
                <div className="p-12 rounded-[2.5rem] bg-surface-container-high relative overflow-hidden group shadow-2xl border border-white/5 transition-all duration-700 hover:bg-surface-bright/40">
                    <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-tertiary/30 to-transparent"></div>
                    <h3 className="text-[10px] font-black text-tertiary uppercase tracking-[0.4em] mb-8 font-label">Market Void</h3>
                    <p className="text-white text-2xl font-headline font-black leading-tight italic uppercase tracking-tighter antialiased">
                        {data.market_gap}
                    </p>
                </div>
                <div className="p-12 rounded-[2.5rem] bg-surface-container-high relative overflow-hidden group shadow-2xl border border-white/5 transition-all duration-700 hover:bg-surface-bright/40">
                    <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-white/10 to-transparent"></div>
                    <h3 className="text-[10px] font-black text-on-surface-variant/40 uppercase tracking-[0.4em] mb-8 font-label">Architectural Response</h3>
                    <p className="text-white text-2xl font-headline font-black leading-tight italic uppercase tracking-tighter antialiased">
                        {data.your_angle}
                    </p>
                </div>
            </div>

            {/* Competitor Grid */}
            <div className="space-y-12 mb-16">
                <div className="flex items-center gap-6">
                    <h2 className="text-4xl font-black font-headline tracking-tighter uppercase italic text-white leading-none">Telemetry Scan</h2>
                    <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent"></div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    {data.competitors.map((comp, i) => (
                        <div key={i} className="group bg-surface-container-low rounded-[2.5rem] p-12 shadow-[0_40px_80px_rgba(0,0,0,0.4)] relative border border-white/5 transition-all duration-700 hover:bg-surface-container">
                            <div className="flex justify-between items-start mb-10">
                                <div className="space-y-2">
                                    <h4 className="text-3xl font-headline font-black text-white uppercase tracking-tight italic flex items-center gap-4 leading-none">
                                        {comp.name}
                                        <a href={comp.url} target="_blank" rel="noopener noreferrer" className="opacity-10 hover:opacity-100 transition-opacity translate-y-1">
                                            <span className="material-symbols-outlined text-xl text-tertiary">arrow_outward</span>
                                        </a>
                                    </h4>
                                    <p className="text-[10px] font-black text-tertiary uppercase tracking-[0.2em] font-label px-2 py-0.5 rounded bg-tertiary/10 inline-block">{comp.pricing}</p>
                                </div>
                                <span className="text-5xl font-black font-headline text-white/5 tracking-tighter italic">0{i + 1}</span>
                            </div>

                            <p className="text-on-surface-variant text-base font-body leading-relaxed mb-12 italic opacity-80 antialiased">
                                {comp.what_they_do}
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-10 border-t border-white/5">
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3">
                                        <span className="material-symbols-outlined text-error text-xl shadow-[0_0_10px_rgba(255,103,103,0.3)]">scan_delete</span>
                                        <span className="text-[10px] font-black text-error/80 uppercase tracking-[0.3em] font-label">Vulnerability</span>
                                    </div>
                                    <p className="text-sm text-on-surface-variant font-medium italic leading-relaxed opacity-70">{comp.weakness}</p>
                                </div>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3">
                                        <span className="material-symbols-outlined text-tertiary text-xl shadow-[0_0_10px_rgba(103,156,255,0.3)]">voice_selection</span>
                                        <span className="text-[10px] font-black text-tertiary/80 uppercase tracking-[0.3em] font-label">Friction Signal</span>
                                    </div>
                                    <p className="text-sm text-on-surface-variant font-medium italic leading-relaxed opacity-70">"{comp.user_complaints}"</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Strategic Summary - Cinematic Shift */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                <div className="bg-surface-container-high rounded-[2.5rem] p-16 shadow-2xl relative overflow-hidden group border border-white/5 transition-all duration-700">
                    <div className="absolute top-0 right-0 p-12 opacity-5 group-hover:scale-110 transition-transform font-headline italic text-9xl text-error font-black leading-none">NO</div>
                    <h3 className="text-[10px] font-black text-error uppercase tracking-[0.4em] mb-10 font-label">Engagement Protocol: AVOID</h3>
                    <p className="text-on-surface-variant text-xl font-body leading-relaxed italic opacity-80 antialiased">
                        {data.dont_compete_on}
                    </p>
                </div>
                <div className="bg-surface-container-high rounded-[3rem] p-16 shadow-[0_40px_100px_rgba(0,0,0,0.5)] relative overflow-hidden group border-t border-white/10 transition-all duration-1000 hover:brightness-110">
                    <div className="absolute inset-0 bg-gradient-to-br from-tertiary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="absolute top-0 right-0 p-12 opacity-30 group-hover:scale-110 group-hover:rotate-12 transition-all">
                        <span className="material-symbols-outlined text-8xl text-tertiary shadow-sm">bolt</span>
                    </div>
                    <h3 className="text-[10px] font-black text-tertiary uppercase tracking-[0.4em] mb-10 font-label">Critical Advantage</h3>
                    <p className="text-white text-3xl font-headline font-black uppercase tracking-tighter italic leading-tight antialiased">
                        {data.win_on}
                    </p>
                </div>
            </div>
        </div>
    )
}
