'use client'

import React from 'react'

export function Header() {
    return (
        <header className="fixed top-0 w-full z-50 bg-slate-950/60 backdrop-blur-xl shadow-[0_4px_12px_rgba(0,0,0,0.2)] flex justify-between items-center px-8 py-4 border-b border-white/5">
            <div className="flex items-center gap-8">
                <span className="text-xl font-bold tracking-tighter text-slate-100 font-headline">launchOS</span>
                <nav className="hidden md:flex items-center gap-6">
                    <a className="text-slate-100 font-semibold border-b border-white/30 font-headline tracking-tight transition-all duration-300 text-sm" href="#">Dashboard</a>
                    <a className="text-slate-400 hover:text-slate-200 font-headline tracking-tight transition-all duration-300 text-sm" href="#">Settings</a>
                    <a className="text-slate-400 hover:text-slate-200 font-headline tracking-tight transition-all duration-300 text-sm" href="#">Academy</a>
                </nav>
            </div>

            <div className="flex items-center gap-4">
                <div className="bg-surface-container-low rounded-lg px-3 py-1.5 flex items-center gap-2 border border-outline-variant/15 group">
                    <span className="material-symbols-outlined text-on-surface-variant text-sm group-focus-within:text-tertiary transition-colors">search</span>
                    <input
                        className="bg-transparent border-none focus:ring-0 text-sm w-48 text-on-surface placeholder:text-on-surface-variant/50 font-body"
                        placeholder="Search milestones..."
                        type="text"
                    />
                </div>
                <button className="p-2 text-slate-400 hover:bg-slate-800/40 rounded-full transition-all flex items-center justify-center">
                    <span className="material-symbols-outlined text-[20px]">notifications</span>
                </button>
                <button className="p-2 text-slate-400 hover:bg-slate-800/40 rounded-full transition-all flex items-center justify-center">
                    <span className="material-symbols-outlined text-[20px]">settings</span>
                </button>
                <div className="w-8 h-8 rounded-full border border-outline-variant/30 ml-2 overflow-hidden bg-surface-container shadow-xl cursor-pointer hover:border-tertiary transition-colors">
                    <img
                        alt="User profile avatar"
                        className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBs2y_OtbRSfYN31Tp9JUNd5UHGNjrYZVW_iBpKCAr3sLpziiNNAoJMh9aVWVSJBDKo0TxNV3dv0Ar-q6DcT_4qUKBgB7SHkQaui02MvZb38GZVe1pQ_wFkUZhr0JhVceuFZ_evHRiJO4zpuuOABlR4a8cpHECfjA0OpgcWwBMcBbjTgz1GxTA1JF1Z0nEQrkpvfb4Yxg8YoHgx4ZVzLELblq3aj6cYE095Iv_fU-d1WOkObu4bhLLozVu2LJ5gaXD1Z6Qu0jZhmc3D"
                    />
                </div>
            </div>
        </header>
    )
}
