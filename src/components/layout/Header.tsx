'use client'

import React from 'react'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function Header() {
    const pathname = usePathname()

    return (
        <header className="fixed top-0 w-full z-50 bg-slate-950/60 backdrop-blur-xl flex justify-between items-center px-8 py-4 w-full shadow-[0_4px_12px_rgba(0,0,0,0.2)] bg-gradient-to-b from-slate-800/20 to-transparent border-b border-white/5">
            <div className="flex items-center gap-8">
                <Link href="/" className="text-xl font-bold tracking-tighter text-slate-100 font-headline uppercase antialiased">
                    launchOS
                </Link>
                <nav className="hidden md:flex gap-6 items-center">
                    <Link
                        className={cn(
                            "font-headline transition-all duration-300 antialiased",
                            pathname?.includes('dashboard') ? "text-slate-100 font-semibold border-b border-slate-400" : "text-slate-400 hover:text-slate-200"
                        )}
                        href="/dashboard"
                    >
                        Niche
                    </Link>
                    <Link
                        className={cn(
                            "font-headline transition-all duration-300 antialiased",
                            pathname?.includes('validation') ? "text-slate-100 font-semibold border-b border-slate-400" : "text-slate-400 hover:text-slate-200"
                        )}
                        href="/validation"
                    >
                        Validation
                    </Link>
                    <Link
                        className={cn(
                            "font-headline transition-all duration-300 antialiased",
                            pathname?.includes('mvp') ? "text-slate-100 font-semibold border-b border-slate-400" : "text-slate-400 hover:text-slate-200"
                        )}
                        href="/mvp"
                    >
                        MVP Plan
                    </Link>
                </nav>
            </div>

            <div className="flex items-center gap-4">
                <button className="p-2 text-slate-200 hover:bg-slate-800/40 rounded-full transition-all duration-300 scale-98 active:opacity-80 flex items-center justify-center">
                    <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>notifications</span>
                </button>
                <button className="p-2 text-slate-200 hover:bg-slate-800/40 rounded-full transition-all duration-300 scale-98 active:opacity-80 flex items-center justify-center">
                    <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>settings</span>
                </button>
                <div className="w-8 h-8 rounded-full bg-surface-container-high border border-outline-variant overflow-hidden shadow-inner">
                    <img
                        alt="User profile avatar"
                        className="w-full h-full object-cover"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCH4gKLhrDFWmynW03QLjoq1R47wDm6tNj1t9dU_XARSRHDlqeR2H2KiNsNyGOvrTrYyMmHzZuC_6x-IyTeKv8VG7WuXTUQAOHX5iRNZxSS3uJ9DFvCEn65SRjZWu_oDUd1CTXeRUxJKw_SVjbK7LpnQR2FgVzkecj3lwIEl80Oge13rzfpPdBBFVNM4Z4nZhyFtvdKsOtegaBwksrxjGzt_vFgowMDLDlAvV6aGLhZjtsvuNdFVidmotrRAyQldyxcLi5-5m4y4yPH"
                    />
                </div>
            </div>
        </header>
    )
}
