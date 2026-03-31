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
    project_name: string
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
            {/* Positioning Header */}
            <header className="relative p-8 rounded-2xl bg-surface-container-low overflow-hidden group mb-8 shadow-lg border border-white/5">
                <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-surface-container-high flex items-center justify-center shadow-md border border-white/5">
                        <span className="material-symbols-outlined text-2xl text-tertiary">track_changes</span>
                    </div>
                    <div className="space-y-3 flex-1">
                        <div className="flex items-center gap-2">
                            <span className="text-tertiary text-[9px] font-bold tracking-widest opacity-60">Market Positioning</span>
                        </div>
                        <h1 className="font-headline text-xl md:text-2xl font-bold tracking-tighter text-white leading-none">Intelligence Cluster</h1>
                        <p className="text-on-surface-variant text-[13px] leading-relaxed font-body opacity-70 antialiased max-w-2xl">
                            {data.positioning_statement}
                        </p>
                    </div>
                </div>
            </header>

            {/* Core Gap Analysis */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="p-6 rounded-xl bg-surface-container-high relative overflow-hidden group shadow-md border border-white/5 hover:bg-surface-bright/10 transition-all">
                    <h3 className="text-[9px] font-bold text-tertiary tracking-widest mb-4">Market Void</h3>
                    <p className="text-white text-lg font-headline font-bold leading-tight tracking-tight antialiased">
                        {data.market_gap}
                    </p>
                </div>
                <div className="p-6 rounded-xl bg-surface-container-high relative overflow-hidden group shadow-md border border-white/5 hover:bg-surface-bright/10 transition-all">
                    <h3 className="text-[9px] font-bold text-on-surface-variant/40 tracking-widest mb-4">Architectural Response</h3>
                    <p className="text-white text-lg font-headline font-bold leading-tight tracking-tight antialiased">
                        {data.your_angle}
                    </p>
                </div>
            </div>

            {/* Competitor Grid */}
            <div className="space-y-8 mb-8">
                <div className="flex items-center gap-4">
                    <h2 className="text-lg font-bold font-headline tracking-tight text-white leading-none">Telemetry Scan</h2>
                    <div className="h-px flex-1 bg-white/5"></div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {data.competitors.map((comp, i) => (
                        <div key={i} className="group bg-surface-container-low rounded-xl p-6 shadow-md relative border border-white/5 hover:bg-surface-container transition-all">
                            <div className="flex justify-between items-start mb-6">
                                <div className="space-y-1">
                                    <h4 className="text-lg font-headline font-bold text-white tracking-tight flex items-center gap-3 leading-none">
                                        {comp.name}
                                        <a href={comp.url} target="_blank" rel="noopener noreferrer" className="opacity-10 hover:opacity-100 transition-opacity">
                                            <span className="material-symbols-outlined text-base text-tertiary">arrow_outward</span>
                                        </a>
                                    </h4>
                                    <p className="text-[9px] font-bold text-tertiary tracking-wider font-label px-2 py-0.5 rounded bg-tertiary/10 inline-block">{comp.pricing}</p>
                                </div>
                                <span className="text-2xl font-bold font-headline text-white/5 tracking-tighter">0{i + 1}</span>
                            </div>

                            <p className="text-on-surface-variant text-[13px] font-body leading-relaxed mb-6 opacity-80 antialiased">
                                {comp.what_they_do}
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-white/5">
                                <div className="space-y-2">
                                    <div className="flex items-center gap-2">
                                        <span className="material-symbols-outlined text-error text-lg">scan_delete</span>
                                        <span className="text-[9px] font-bold text-error/80 tracking-widest">Vulnerability</span>
                                    </div>
                                    <p className="text-[12px] text-on-surface-variant font-medium leading-relaxed opacity-70">{comp.weakness}</p>
                                </div>
                                <div className="space-y-2">
                                    <div className="flex items-center gap-2">
                                        <span className="material-symbols-outlined text-tertiary text-lg">voice_selection</span>
                                        <span className="text-[9px] font-bold text-tertiary/80 tracking-widest">Friction Signal</span>
                                    </div>
                                    <p className="text-[12px] text-on-surface-variant font-medium leading-relaxed opacity-70">"{comp.user_complaints}"</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Strategic Summary */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-surface-container-high rounded-xl p-8 shadow-md relative overflow-hidden group border border-white/5 transition-all">
                    <h3 className="text-[9px] font-bold text-error uppercase tracking-widest mb-6">Avoid Protocol</h3>
                    <p className="text-on-surface-variant text-[15px] font-body leading-relaxed opacity-80 antialiased">
                        {data.dont_compete_on}
                    </p>
                </div>
                <div className="bg-surface-container-high rounded-xl p-8 shadow-md relative overflow-hidden group border border-white/10 hover:bg-surface-bright/10 transition-all">
                    <h3 className="text-[9px] font-bold text-tertiary uppercase tracking-widest mb-6">Strategic Edge</h3>
                    <p className="text-white text-xl font-headline font-bold uppercase tracking-tight leading-tight antialiased">
                        {data.win_on}
                    </p>
                </div>
            </div>
        </div>
    )
}
