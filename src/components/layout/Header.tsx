'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

export function Header() {
    const pathname = usePathname()

    // Extract analysis ID from path so engine links keep the user on the same analysis
    const analysisMatch = pathname?.match(/\/dashboard\/analysis\/([^/?]+)/)
    const analysisId = analysisMatch ? analysisMatch[1] : null

    const engineHref = (engine: string) => {
        const id = analysisId || '1' // Default to demo ID 1
        return `/dashboard/analysis/${id}?engine=${engine}`
    }

    return (
        <header className="fixed top-0 w-full z-50 bg-slate-950/60 backdrop-blur-xl flex justify-between items-center px-6 py-2.5 shadow-[0_4px_12px_rgba(0,0,0,0.2)] border-b border-white/5">
            <div className="flex items-center gap-6">
                <Link href="/" className="text-lg font-bold tracking-tighter text-slate-100 font-headline antialiased">
                    LaunchOS
                </Link>
                <nav className="hidden md:flex gap-4 items-center">
                    <Link
                        className={cn(
                            "font-headline text-[13px] tracking-tight transition-all duration-300 antialiased",
                            pathname?.includes('dashboard') ? "text-slate-100 font-semibold border-b border-slate-400 pb-0.5" : "text-slate-400 hover:text-slate-200"
                        )}
                        href="/dashboard"
                    >
                        Dashboard
                    </Link>
                    <Link
                        className={cn(
                            "font-headline text-sm tracking-tight transition-all duration-300 antialiased",
                            "text-slate-400 hover:text-slate-200"
                        )}
                        href={engineHref('validation')}
                        scroll={false}
                    >
                        Validation
                    </Link>
                    <Link
                        className={cn(
                            "font-headline text-sm tracking-tight transition-all duration-300 antialiased",
                            "text-slate-400 hover:text-slate-200"
                        )}
                        href={engineHref('mvp')}
                        scroll={false}
                    >
                        MVP Plan
                    </Link>
                </nav>
            </div>

            <div className="flex items-center gap-3">
                <button className="p-1.5 text-slate-200 hover:bg-slate-800/40 rounded-full transition-all duration-300 flex items-center justify-center">
                    <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>notifications</span>
                </button>
                <button className="p-1.5 text-slate-200 hover:bg-slate-800/40 rounded-full transition-all duration-300 flex items-center justify-center">
                    <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>settings</span>
                </button>
                <div className="w-7 h-7 rounded-full bg-surface-container-high border border-white/5 overflow-hidden shadow-inner">
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
