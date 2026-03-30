import { cn } from '@/lib/utils'
import {
    LayoutGrid,
    CheckCircle2,
    Shield,
    Factory,
    Building2,
    ArrowRight,
    AlertCircle,
    Users
} from 'lucide-react'

interface NicheData {
    niche_name: string
    niche_description: string
    why_this_niche: string
    audience_size: string
    pain_level: string
    secondary_niches: string[]
    audience_tags: string[]
    where_they_hang_out: string[]
}

export function NicheEngine({ data }: { data: NicheData }) {
    if (!data) return null

    return (
        <div className="max-w-7xl mx-auto space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {/* Header Section: Editorial Layout */}
            <header className="flex flex-col md:flex-row justify-between items-end gap-8">
                <div className="max-w-2xl">
                    <h1 className="text-5xl font-extrabold font-headline tracking-tighter text-on-surface mb-6 leading-[1.1]">
                        Architecting <span className="text-tertiary">Precision</span> Market Fits.
                    </h1>
                    <p className="text-lg text-on-surface-variant font-light leading-relaxed">
                        {data.why_this_niche}
                    </p>
                </div>
                <div className="flex flex-col items-end">
                    <div className="bg-surface-container-high rounded-xl p-6 border border-outline-variant/15 flex items-center gap-6 shadow-2xl shadow-black/40">
                        <div className="relative w-24 h-24">
                            <svg className="w-full h-full transform -rotate-90">
                                <circle className="text-surface-container-low" cx="48" cy="48" fill="transparent" r="42" stroke="currentColor" strokeWidth="6"></circle>
                                <circle
                                    className="text-tertiary transition-all duration-1000"
                                    cx="48" cy="48" fill="transparent" r="42"
                                    stroke="currentColor" strokeWidth="8"
                                    strokeDasharray="263.89"
                                    strokeDashoffset="31.66"
                                ></circle>
                            </svg>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <span className="text-2xl font-black font-headline">88%</span>
                            </div>
                        </div>
                        <div>
                            <p className="text-sm font-bold uppercase tracking-widest text-on-surface-variant mb-1">Niche Fit</p>
                            <h3 className="text-xl font-headline font-bold">Strong Alpha</h3>
                            <p className="text-xs text-on-surface-variant italic">Refined Targeting Active</p>
                        </div>
                    </div>
                </div>
            </header>

            {/* Bento Grid */}
            <div className="grid grid-cols-12 gap-6">
                {/* Main Recommendation Card */}
                <div className="col-span-12 lg:col-span-8 bg-surface-container-low rounded-xl overflow-hidden border border-outline-variant/10 group">
                    <div className="relative h-[400px]">
                        <div className="absolute inset-0 bg-gradient-to-t from-surface-container-low via-surface-container-low/40 to-transparent z-10" />
                        <div className="absolute inset-0 bg-gradient-to-br from-tertiary/10 to-transparent z-5" />
                        <div className="absolute bottom-0 left-0 p-10 z-20">
                            <div className="inline-block px-3 py-1 bg-tertiary/20 text-tertiary text-[10px] font-bold tracking-[0.2em] uppercase rounded mb-4">Core Recommendation</div>
                            <h2 className="text-4xl font-headline font-extrabold tracking-tight mb-4 text-on-surface">{data.niche_name}</h2>
                            <p className="text-on-surface-variant max-w-lg text-lg leading-relaxed">{data.niche_description}</p>
                        </div>
                    </div>
                    <div className="p-10 grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-outline-variant/10 bg-surface-container/30">
                        <div>
                            <p className="text-xs font-bold text-on-surface-variant uppercase mb-2">Audience Size</p>
                            <p className="text-2xl font-headline font-bold text-on-surface">{data.audience_size}</p>
                        </div>
                        <div>
                            <p className="text-xs font-bold text-on-surface-variant uppercase mb-2">Pain Level</p>
                            <p className="text-2xl font-headline font-bold text-on-surface">{data.pain_level}</p>
                        </div>
                        <div>
                            <p className="text-xs font-bold text-on-surface-variant uppercase mb-2">Confidence</p>
                            <p className="text-2xl font-headline font-bold text-tertiary">Extreme</p>
                        </div>
                    </div>
                </div>

                {/* Persona & Secondary Stats */}
                <div className="col-span-12 lg:col-span-4 space-y-6">
                    <div className="bg-surface-container rounded-xl p-8 border border-outline-variant/15 shadow-xl">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-16 h-16 rounded-full bg-surface-bright flex items-center justify-center border-2 border-tertiary text-tertiary">
                                <Users className="w-8 h-8" />
                            </div>
                            <div>
                                <h4 className="text-xl font-headline font-bold text-on-surface">Target Segments</h4>
                                <p className="text-xs text-tertiary font-bold uppercase tracking-widest">Primary Persona</p>
                            </div>
                        </div>
                        <h5 className="text-xs font-black uppercase tracking-widest text-on-surface-variant mb-4">Focus Areas</h5>
                        <ul className="space-y-4">
                            {data.audience_tags.slice(0, 3).map((tag, i) => (
                                <li key={i} className="flex items-start gap-3 group">
                                    <AlertCircle className="w-4 h-4 text-tertiary mt-0.5 group-hover:scale-110 transition-transform" />
                                    <p className="text-sm text-on-surface-variant font-medium">{tag}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="bg-surface-container-high rounded-xl p-8 border border-outline-variant/15">
                        <h4 className="text-sm font-bold uppercase tracking-widest text-on-surface-variant mb-6">Market Potential</h4>
                        <div className="space-y-4">
                            <div className="flex justify-between items-end">
                                <span className="text-sm font-medium text-on-surface">Inbound Demand</span>
                                <span className="text-xl font-headline font-bold text-tertiary">+240%</span>
                            </div>
                            <div className="w-full h-1 bg-surface-container-low rounded-full overflow-hidden">
                                <div className="w-3/4 h-full bg-tertiary animate-pulse"></div>
                            </div>
                            <p className="text-xs text-on-surface-variant leading-relaxed italic">
                                "{data.where_they_hang_out[0] || 'High market velocity detected.'}"
                            </p>
                        </div>
                    </div>
                </div>

                {/* Adjacent Markets */}
                <div className="col-span-12 bg-surface-container-low p-8 rounded-xl border border-outline-variant/10">
                    <div className="flex justify-between items-center mb-8">
                        <h3 className="text-2xl font-headline font-bold text-on-surface">Adjacent Opportunities</h3>
                        <button className="text-sm text-tertiary font-bold flex items-center gap-2 group">
                            Explore Strategy <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {data.secondary_niches.slice(0, 3).map((niche, i) => (
                            <div key={i} className="bg-surface rounded-lg p-6 border border-outline-variant/10 hover:border-tertiary/40 transition-all cursor-pointer group hover:-translate-y-1">
                                <div className="flex justify-between items-start mb-4">
                                    <LayoutGrid className="w-6 h-6 text-on-surface-variant group-hover:text-tertiary transition-colors" />
                                    <span className="px-2 py-0.5 bg-surface-bright text-[10px] font-bold rounded text-on-surface border border-outline-variant/20">{(90 - i * 8)}% MATCH</span>
                                </div>
                                <h4 className="font-headline font-bold mb-2 text-on-surface">{niche}</h4>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
