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
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000">
            {/* Header Section: Editorial Layout */}
            <header className="flex flex-col md:flex-row justify-between items-end gap-12 mb-20">
                <div className="max-w-2xl">
                    <div className="flex items-center gap-2 mb-4">
                        <span className="px-2 py-0.5 rounded bg-surface-container-high text-tertiary text-[10px] font-bold tracking-widest uppercase font-label">Market Architecture</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span>
                    </div>
                    <h1 className="text-5xl font-extrabold font-headline tracking-tighter text-white mb-6 leading-[1.1] uppercase italic">
                        Architecting <span className="text-tertiary">Precision</span> Market Fits.
                    </h1>
                    <p className="text-lg text-on-surface-variant font-body leading-relaxed opacity-90">
                        Our intelligence engine has identified a high-integrity opportunity. We recommend prioritizing <span className="text-white font-semibold italic border-b border-tertiary/30">{data.niche_name}</span> as your primary entry point.
                    </p>
                </div>
                <div className="flex flex-col items-end">
                    <div className="bg-surface-container-high ghost-border rounded-2xl p-8 flex items-center gap-8 shadow-2xl transition-transform hover:scale-105 duration-500">
                        <div className="relative w-24 h-24">
                            <svg className="w-full h-full transform -rotate-90">
                                <circle className="text-surface-container-low" cx="48" cy="48" fill="transparent" r="42" stroke="currentColor" strokeWidth="6"></circle>
                                <circle className="text-tertiary transition-all duration-1000" cx="48" cy="48" fill="transparent" r="42" stroke="currentColor" strokeDasharray="263.89" strokeDashoffset="31.66" strokeWidth="8"></circle>
                            </svg>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <span className="text-2xl font-black font-headline text-white">88%</span>
                            </div>
                        </div>
                        <div>
                            <p className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant mb-1 font-label">Niche Fit Alpha</p>
                            <h3 className="text-xl font-headline font-bold text-white uppercase italic">Strong Signal</h3>
                            <p className="text-[10px] text-tertiary font-bold uppercase tracking-wider">Ready for Deployment</p>
                        </div>
                    </div>
                </div>
            </header>

            {/* Bento Grid */}
            <div className="grid grid-cols-12 gap-8 mb-12">
                {/* Main Recommendation Card */}
                <div className="col-span-12 lg:col-span-8 bg-surface-container-low rounded-3xl overflow-hidden ghost-border group shadow-2xl relative h-[500px]">
                    <img
                        alt={data.niche_name}
                        className="absolute inset-0 w-full h-full object-cover grayscale opacity-30 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBb-cWPgefi502vndUs2LzzXNteDO04_8FH_9NPRsj0oDIz2Z_BRmNoaW-mP01IDiNs7Aw7szjy30Hd7vK47XS3oQ7zW7f_iqm6sL_7ZyVP8aGzTjqRwrw7ydJi0B8mvho7WE4Fxt8-noxNFvfdFmDPGu2ewBhfWIh407X0fYA2GgGnwz-emqjcf2QRdUAWnKCXVFvJqOrSlGKAZCWr3eT3nqnlTx8jrPiP_alf4YaeOnctoyCMtt5oSU9bL56JKFlSuOW_W_oPmD1q"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-surface-container-low via-surface-container-low/40 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-12">
                        <div className="inline-block px-3 py-1 bg-tertiary/20 text-tertiary text-[10px] font-black tracking-[0.2em] uppercase rounded mb-6 font-label border border-tertiary/20">Core Deployment</div>
                        <h2 className="text-4xl font-headline font-black tracking-tight text-white mb-4 uppercase italic">{data.niche_name}</h2>
                        <p className="text-on-surface-variant max-w-xl text-lg font-body leading-relaxed opacity-90">{data.niche_description}</p>

                        <div className="grid grid-cols-3 gap-10 mt-10 pt-10 border-t border-white/5">
                            <div>
                                <p className="text-[10px] font-black text-on-surface-variant uppercase tracking-widest mb-2 font-label">Market Alpha</p>
                                <p className="text-2xl font-headline font-black text-white">{data.audience_size}</p>
                            </div>
                            <div>
                                <p className="text-[10px] font-black text-on-surface-variant uppercase tracking-widest mb-2 font-label">Pain Significance</p>
                                <p className="text-2xl font-headline font-black text-tertiary">{data.pain_level}</p>
                            </div>
                            <div>
                                <p className="text-[10px] font-black text-on-surface-variant uppercase tracking-widest mb-2 font-label">Liquidity</p>
                                <p className="text-2xl font-headline font-black text-white uppercase italic">High</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Persona & Momentum Cards */}
                <div className="col-span-12 lg:col-span-4 space-y-8">
                    <div className="bg-surface-container-high ghost-border rounded-3xl p-10 shadow-2xl relative overflow-hidden group">
                        <div className="flex items-center gap-5 mb-10">
                            <div className="w-20 h-20 rounded-2xl overflow-hidden border-2 border-tertiary shadow-xl group-hover:scale-105 transition-transform duration-500">
                                <img alt="Founder Persona" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBigGewIk6cC7sL2oXw7hrxHA72cVmCUqeCdAWnHc_NAffduR3oXJ17InAUoOQv6_YA-2zafIFvPATQk_YTuAb7859a3xcWT6uf2lmZuPTA2CMfr-NvxM5a54jBk39u8Eui2cFICd5PQJUYKDkml8k0AEht2nBAe48hYmMMPIMuNNxu3Xyak5lt6jruWQr8vRVlDqKHQ9vEOuC8T4JUCKa_q1W-yq0Sj16oAUcGHt2c2iA0wKBcnZPd3sb0buK1on-CufhXvjg-6q_H" />
                            </div>
                            <div>
                                <h4 className="text-xl font-headline font-black text-white uppercase italic tracking-tight leading-none mb-1">Target Persona</h4>
                                <p className="text-[10px] text-tertiary font-black uppercase tracking-widest font-label">{data.audience_tags[0]}</p>
                            </div>
                        </div>
                        <h5 className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant mb-6 font-label">Priority Friction Points</h5>
                        <ul className="space-y-5">
                            {data.audience_tags.slice(1, 4).map((tag, i) => (
                                <li key={i} className="flex items-start gap-4">
                                    <span className="material-symbols-outlined text-tertiary text-lg">priority_high</span>
                                    <p className="text-sm text-on-surface-variant font-medium opacity-90">{tag}</p>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="bg-surface-container rounded-3xl p-10 ghost-border shadow-2xl relative overflow-hidden border-t-2 border-t-tertiary/20">
                        <h4 className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant mb-8 font-label">Market Momentum</h4>
                        <div className="space-y-6">
                            <div className="flex justify-between items-end">
                                <span className="text-sm font-black text-white uppercase italic tracking-widest font-label font-body">Latent Demand</span>
                                <span className="text-2xl font-black font-headline text-tertiary tracking-tighter animate-pulse">+240%</span>
                            </div>
                            <div className="w-full h-2 bg-surface-container-low rounded-full overflow-hidden shadow-inner">
                                <div className="w-3/4 h-full bg-gradient-to-r from-tertiary to-tertiary-container shadow-[0_0_15px_rgba(103,156,255,0.3)]"></div>
                            </div>
                            <p className="text-[10px] text-on-surface-variant leading-relaxed font-body italic opacity-60">Search volume and latent sentiment analyzed across specialized forums.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Adjacent Verticals */}
            <div className="bg-surface-container-low p-12 rounded-3xl ghost-border shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-10 opacity-5">
                    <span className="material-symbols-outlined text-[160px] text-tertiary">explore</span>
                </div>
                <div className="flex justify-between items-center mb-12 relative z-10">
                    <div>
                        <h3 className="text-3xl font-headline font-black text-white uppercase italic tracking-tighter mb-1">Adjacent Verticals</h3>
                        <p className="text-[10px] text-on-surface-variant font-black uppercase tracking-widest font-label">Expansion Trajectories Identified</p>
                    </div>
                    <button className="text-[10px] text-tertiary font-black flex items-center gap-3 group uppercase tracking-[0.2em] font-label transition-all active:scale-95">
                        Expand All <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform text-lg">arrow_forward</span>
                    </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
                    {data.secondary_niches.map((niche, i) => (
                        <div key={i} className="bg-surface-container-high rounded-2xl p-8 ghost-border hover:bg-surface-container-lowest transition-all duration-500 group cursor-default shadow-xl">
                            <div className="flex justify-between items-start mb-6">
                                <span className="material-symbols-outlined text-4xl text-on-surface-variant group-hover:text-tertiary transition-colors duration-500">shield</span>
                                <span className="px-3 py-1 bg-surface-bright/20 text-white text-[9px] font-black rounded-lg uppercase tracking-widest border border-white/5 font-label">72% Match</span>
                            </div>
                            <h4 className="font-headline text-xl font-black text-white mb-3 uppercase italic">{niche}</h4>
                            <p className="text-xs text-on-surface-variant font-body leading-relaxed opacity-70">Strategic overlap with core infrastructure confirmed by vertical audit.</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
