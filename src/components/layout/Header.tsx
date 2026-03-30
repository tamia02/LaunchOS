'use client'

import React from 'react'
import { cn } from '@/lib/utils'

export function Header() {
    return (
        <header className="fixed top-0 w-full z-50 glass-panel glass-edge flex justify-between items-center px-16 py-8 transition-all duration-1000 custom-ease shadow-[0_10px_50px_rgba(0,0,0,0.3)] border-b border-white/5">
            <div className="flex items-center gap-16">
                <div className="group cursor-pointer">
                    <span className="text-3xl font-black tracking-tighter text-white font-headline uppercase italic antialiased group-hover:text-tertiary transition-colors duration-700">launchOS</span>
                </div>
                <nav className="hidden lg:flex items-center gap-12">
                    <a className="text-white font-black font-headline tracking-[0.3em] transition-all duration-700 text-[10px] uppercase italic border-b-2 border-tertiary py-1 shadow-[0_10px_20px_rgba(103,156,255,0.2)]" href="#">Mission</a>
                    <a className="text-on-surface-variant/30 hover:text-white hover:italic hover:tracking-[0.4em] font-black font-headline tracking-[0.3em] transition-all duration-700 text-[10px] uppercase py-1 antialiased" href="#">Intelligence</a>
                    <a className="text-on-surface-variant/30 hover:text-white hover:italic hover:tracking-[0.4em] font-black font-headline tracking-[0.3em] transition-all duration-700 text-[10px] uppercase py-1 antialiased" href="#">Archive</a>
                </nav>
            </div>

            <div className="flex items-center gap-10">
                <div className="bg-surface-container/40 rounded-2xl px-6 py-3.5 flex items-center gap-4 border border-white/5 group focus-within:bg-surface-container-high focus-within:border-tertiary/20 transition-all duration-700 custom-ease shadow-inner shadow-black/20 backdrop-blur-3xl">
                    <span className="material-symbols-outlined text-on-surface-variant/20 text-xl group-focus-within:text-tertiary group-focus-within:scale-110 transition-all duration-700">search</span>
                    <input
                        className="bg-transparent border-none focus:ring-0 text-[13px] w-80 text-on-surface placeholder:text-on-surface-variant/10 font-body antialiased italic tracking-tight"
                        placeholder="Search Intelligence Clusters..."
                        type="text"
                    />
                </div>

                <div className="flex items-center gap-4">
                    <button className="w-12 h-12 text-on-surface-variant/30 hover:text-tertiary hover:bg-white/5 rounded-2xl transition-all duration-500 custom-ease flex items-center justify-center group/icon relative">
                        <div className="absolute inset-0 bg-tertiary/0 group-hover:bg-tertiary/5 rounded-2xl transition-all duration-500 blur-lg" />
                        <span className="material-symbols-outlined text-[24px] relative z-10 font-light group-hover:font-normal transition-all">notifications</span>
                    </button>
                    <button className="w-12 h-12 text-on-surface-variant/30 hover:text-white hover:bg-white/5 rounded-2xl transition-all duration-500 custom-ease flex items-center justify-center group/icon">
                        <span className="material-symbols-outlined text-[24px] font-light group-hover:rotate-45 transition-transform duration-700">settings</span>
                    </button>
                </div>

                <div className="w-12 h-12 rounded-2xl glass-edge ml-4 overflow-hidden bg-surface-container shadow-2xl cursor-pointer hover:scale-[1.15] hover:-rotate-6 transition-all duration-700 custom-ease group border-2 border-white/5 relative">
                    <div className="absolute inset-0 bg-tertiary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10 mix-blend-overlay" />
                    <img
                        alt="User profile avatar"
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBs2y_OtbRSfYN31Tp9JUNd5UHGNjrYZVW_iBpKCAr3sLpziiNNAoJMh9aVWVSJBDKo0TxNV3dv0Ar-q6DcT_4qUKBgB7SHkQaui02MvZb38GZVe1pQ_wFkUZhr0JhVceuFZ_evHRiJO4zpuuOABlR4a8cpHECfjA0OpgcWwBMcBbjTgz1GxTA1JF1Z0nEQrkpvfb4Yxg8YoHgx4ZVzLELblq3aj6cYE095Iv_fU-d1WOkObu4bhLLozVu2LJ5gaXD1Z6Qu0jZhmc3D"
                    />
                </div>
            </div>
        </header>
    )
}
