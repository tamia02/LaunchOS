import { cn } from '@/lib/utils'

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
        <div className="animate-in fade-in slide-in-from-bottom-8 duration-[2000ms] custom-ease">
            {/* Header Section: Editorial Layout */}
            <header className="flex flex-col md:flex-row justify-between items-end gap-16 mb-24">
                <div className="max-w-3xl">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="px-3 py-1.5 rounded-lg bg-surface-variant/20 shadow-inner">
                            <span className="text-tertiary text-[10px] font-black tracking-[0.4em] uppercase font-label">Vertical Analysis</span>
                        </div>
                        <span className="w-1.5 h-1.5 rounded-full bg-tertiary shadow-[0_0_10px_#679cff]"></span>
                    </div>
                    <h1 className="text-6xl md:text-8xl font-black font-headline tracking-tighter text-white mb-8 leading-[0.9] uppercase italic">
                        The <span className="text-tertiary">Precision</span> <br />
                        Market Entry.
                    </h1>
                    <p className="text-xl text-on-surface-variant font-body leading-relaxed opacity-80 italic antialiased">
                        Intelligence clusters confirm a high-integrity signal. Your primary deployment trajectory should focus on <span className="text-white font-black not-italic px-1 bg-white/5 rounded-md">/ {data.niche_name}</span>.
                    </p>
                </div>

                <div className="flex flex-col items-end">
                    <div className="bg-surface-container-low rounded-3xl p-10 flex items-center gap-10 shadow-[0_40px_80px_rgba(0,0,0,0.4)] glass-edge transition-all duration-700 hover:scale-[1.03] group">
                        <div className="relative w-28 h-28">
                            <svg className="w-full h-full transform -rotate-90">
                                <circle className="text-surface-container-high" cx="56" cy="56" fill="transparent" r="50" stroke="currentColor" strokeWidth="6"></circle>
                                <circle className="text-tertiary transition-all duration-[2000ms] custom-ease" cx="56" cy="56" fill="transparent" r="50" stroke="currentColor" strokeDasharray="314.159" strokeDashoffset="37.7" strokeWidth="8" strokeLinecap="round"></circle>
                            </svg>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <span className="text-3xl font-black font-headline text-white italic">88%</span>
                            </div>
                        </div>
                        <div>
                            <p className="text-[10px] font-black uppercase tracking-[0.4em] text-on-surface-variant/40 mb-2 font-label">Niche Fit Confidence</p>
                            <h3 className="text-2xl font-headline font-black text-white uppercase italic leading-none mb-1">Strong Signal</h3>
                            <p className="text-[10px] text-tertiary font-black uppercase tracking-widest font-label animate-pulse">Ready for Sequence</p>
                        </div>
                    </div>
                </div>
            </header>

            {/* Bento Grid Canvas */}
            <div className="grid grid-cols-12 gap-10 mb-16">
                {/* Main Archetype Frame */}
                <div className="col-span-12 lg:col-span-8 bg-surface-container rounded-[2.5rem] overflow-hidden group shadow-[0_40px_100px_rgba(0,0,0,0.5)] relative h-[550px] border border-white/5">
                    <img
                        alt={data.niche_name}
                        className="absolute inset-0 w-full h-full object-cover grayscale opacity-20 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[3000ms] ease-out"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBb-cWPgefi502vndUs2LzzXNteDO04_8FH_9NPRsj0oDIz2Z_BRmNoaW-mP01IDiNs7Aw7szjy30Hd7vK47XS3oQ7zW7f_iqm6sL_7ZyVP8aGzTjqRwrw7ydJi0B8mvho7WE4Fxt8-noxNFvfdFmDPGu2ewBhfWIh407X0fYA2GgGnwz-emqjcf2QRdUAWnKCXVFvJqOrSlGKAZCWr3eT3nqnlTx8jrPiP_alf4YaeOnctoyCMtt5oSU9bL56JKFlSuOW_W_oPmD1q"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-surface-container via-surface-container/30 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-16 w-full">
                        <div className="inline-block px-4 py-1.5 bg-tertiary/10 text-tertiary text-[10px] font-black tracking-[0.4em] uppercase rounded-lg mb-8 font-label glass-edge italic">Primary Archetype</div>
                        <h2 className="text-5xl font-headline font-black tracking-tight text-white mb-6 uppercase italic leading-none">{data.niche_name}</h2>
                        <p className="text-on-surface-variant max-w-2xl text-xl font-body leading-relaxed italic opacity-70 antialiased">{data.niche_description}</p>

                        <div className="grid grid-cols-3 gap-16 mt-16 pt-16 bg-gradient-to-r from-white/5 to-transparent h-px w-full" />
                        <div className="grid grid-cols-3 gap-16 mt-8">
                            <div>
                                <p className="text-[10px] font-black text-on-surface-variant/40 uppercase tracking-[0.3em] mb-3 font-label">Market Alpha</p>
                                <p className="text-3xl font-headline font-black text-white italic">{data.audience_size}</p>
                            </div>
                            <div>
                                <p className="text-[10px] font-black text-on-surface-variant/40 uppercase tracking-[0.3em] mb-3 font-label">Pain Intensity</p>
                                <p className="text-3xl font-headline font-black text-tertiary italic">{data.pain_level}</p>
                            </div>
                            <div>
                                <p className="text-[10px] font-black text-on-surface-variant/40 uppercase tracking-[0.3em] mb-3 font-label">Liquidity</p>
                                <p className="text-3xl font-headline font-black text-white italic uppercase tracking-tighter">High Flow</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Persona & Momentum Cluster */}
                <div className="col-span-12 lg:col-span-4 space-y-10">
                    <div className="bg-surface-container-high rounded-[2.5rem] p-12 shadow-2xl relative overflow-hidden group border border-white/5 transition-all duration-700 hover:bg-surface-bright/40">
                        <div className="flex items-center gap-6 mb-12">
                            <div className="w-24 h-24 rounded-2xl overflow-hidden glass-edge shadow-2xl group-hover:scale-105 transition-transform duration-700 border border-white/10">
                                <img alt="Founder Persona" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBigGewIk6cC7sL2oXw7hrxHA72cVmCUqeCdAWnHc_NAffduR3oXJ17InAUoOQv6_YA-2zafIFvPATQk_YTuAb7859a3xcWT6uf2lmZuPTA2CMfr-NvxM5a54jBk39u8Eui2cFICd5PQJUYKDkml8k0AEht2nBAe48hYmMMPIMuNNxu3Xyak5lt6jruWQr8vRVlDqKHQ9vEOuC8T4JUCKa_q1W-yq0Sj16oAUcGHt2c2iA0wKBcnZPd3sb0buK1on-CufhXvjg-6q_H" />
                            </div>
                            <div>
                                <h4 className="text-2xl font-headline font-black text-white uppercase italic tracking-tight leading-none mb-2">Target Profile</h4>
                                <p className="text-[10px] text-tertiary font-black uppercase tracking-[0.3em] font-label">{data.audience_tags[0]}</p>
                            </div>
                        </div>
                        <h5 className="text-[10px] font-black uppercase tracking-[0.4em] text-on-surface-variant/30 mb-8 font-label">Mission Critical Friction</h5>
                        <ul className="space-y-6">
                            {data.audience_tags.slice(1, 4).map((tag, i) => (
                                <li key={i} className="flex items-start gap-5 group/item">
                                    <span className="material-symbols-outlined text-tertiary text-xl group-hover/item:scale-125 transition-transform">bolt</span>
                                    <p className="text-base text-on-surface-variant font-medium italic opacity-70 group-hover/item:opacity-100 transition-opacity">{tag}</p>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="bg-surface-container rounded-[2.5rem] p-12 shadow-2xl relative overflow-hidden border-t border-white/5 transition-all duration-700 hover:brightness-110">
                        <div className="absolute top-0 right-0 p-8 opacity-5">
                            <span className="material-symbols-outlined text-[100px] text-tertiary">trending_up</span>
                        </div>
                        <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-on-surface-variant/30 mb-10 font-label">Market Momentum</h4>
                        <div className="space-y-8">
                            <div className="flex justify-between items-end">
                                <span className="text-[11px] font-black text-white uppercase italic tracking-[0.3em] font-label">Latent Demand</span>
                                <span className="text-3xl font-black font-headline text-tertiary tracking-tighter animate-pulse shadow-sm">+240%</span>
                            </div>
                            <div className="w-full h-1.5 bg-surface-container-high rounded-full overflow-hidden shadow-inner">
                                <div className="w-3/4 h-full bg-gradient-to-r from-tertiary to-primary shadow-[0_0_15px_rgba(103,156,255,0.4)]"></div>
                            </div>
                            <p className="text-[11px] text-on-surface-variant/50 leading-relaxed font-body italic antialiased">Algorithmic telemetry confirms surge in vertical interest across strategic intelligence clusters.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Expansion Trajectories - No-Line Separation */}
            <div className="bg-surface-container-low p-16 rounded-[3rem] shadow-[0_40px_80px_rgba(0,0,0,0.5)] relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-16 opacity-5">
                    <span className="material-symbols-outlined text-[200px] text-tertiary">explore</span>
                </div>
                <div className="flex justify-between items-center mb-16 relative z-10 transition-all">
                    <div>
                        <h3 className="text-4xl font-headline font-black text-white uppercase italic tracking-tighter mb-2 leading-none">Expansion Trajectories</h3>
                        <p className="text-[10px] text-on-surface-variant/30 font-black uppercase tracking-[0.4em] font-label">Adjacent High-Integrity Verticals</p>
                    </div>
                    <button className="button-metallic text-on-primary px-8 py-3 rounded-xl font-headline font-black text-[10px] uppercase tracking-[0.2em] italic group/btn active:scale-95 transition-all">
                        <span className="flex items-center gap-3">
                            Execute Pivot <span className="material-symbols-outlined group-hover/btn:translate-x-2 transition-transform text-lg">arrow_forward</span>
                        </span>
                    </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 relative z-10">
                    {data.secondary_niches.map((niche, i) => (
                        <div key={i} className="bg-surface-container rounded-3xl p-10 shadow-xl transition-all duration-700 hover:bg-surface-bright/40 group/card cursor-default border border-white/5">
                            <div className="flex justify-between items-start mb-8">
                                <div className="w-14 h-14 bg-surface-container-high rounded-xl flex items-center justify-center shadow-lg group-hover/card:scale-110 transition-transform">
                                    <span className="material-symbols-outlined text-3xl text-on-surface-variant/40 group-hover/card:text-tertiary transition-colors duration-500">api</span>
                                </div>
                                <span className="px-3 py-1 bg-surface-bright/20 text-white text-[9px] font-black rounded-lg uppercase tracking-[0.2em] glass-edge border border-white/5 italic">72% Alpha</span>
                            </div>
                            <h4 className="font-headline text-2xl font-black text-white mb-4 uppercase italic leading-none">{niche}</h4>
                            <p className="text-sm text-on-surface-variant/60 font-body leading-relaxed italic opacity-80 antialiased">Strategic architectural overlap confirmed by vertical-level entropy audit.</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
