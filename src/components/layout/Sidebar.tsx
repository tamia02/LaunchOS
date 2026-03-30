'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

const navItems = [
    { name: 'Niche', href: '/dashboard', icon: 'category' },
    { name: 'Validation', href: '/dashboard', icon: 'fact_check' },
    { name: 'MVP Plan', href: '/dashboard', icon: 'architecture' },
    { name: 'Pricing', href: '/dashboard', icon: 'payments' },
    { name: 'Outreach', href: '/dashboard', icon: 'campaign' },
    { name: 'Progress', href: '/dashboard', icon: 'analytics' },
]

export function Sidebar() {
    const pathname = usePathname()
    const isDashboard = pathname === '/dashboard'
    const isAnalysis = pathname.startsWith('/dashboard/analysis')

    return (
        <aside className="fixed left-0 h-screen w-64 z-40 bg-slate-950/40 backdrop-blur-2xl flex flex-col py-8 pt-24 shadow-[20px_0_40px_rgba(0,0,0,0.1)] font-body text-sm antialiased text-slate-200 border-r border-white/5">
            {/* Project Badge */}
            <div className="px-6 mb-8">
                <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 bg-primary-container rounded-lg flex items-center justify-center">
                        <span className="material-symbols-outlined text-sm text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>rocket_launch</span>
                    </div>
                    <div>
                        <div className="text-base font-black text-slate-100 font-headline leading-none">Project Alpha</div>
                        <div className="text-[10px] uppercase tracking-widest text-on-surface-variant font-medium mt-1">AI Analysis Active</div>
                    </div>
                </div>
            </div>

            {/* Nav */}
            <nav className="flex-grow flex flex-col gap-1">
                {navItems.map((item) => {
                    // Active only when actually on analysis page (showing engine content)
                    const isActive = isAnalysis && item.name === 'Niche' || (isDashboard && item.name === 'Niche')
                    return (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={cn(
                                "flex items-center gap-3 px-3 py-2.5 mx-2 rounded-md transition-all duration-200",
                                isActive
                                    ? "bg-slate-800/50 text-slate-100 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)]"
                                    : "text-slate-500 hover:text-slate-300 hover:bg-slate-900/80"
                            )}
                        >
                            <span className="material-symbols-outlined text-[20px]">{item.icon}</span>
                            <span className="font-medium tracking-tight">{item.name}</span>
                        </Link>
                    )
                })}
            </nav>

            {/* Build CTA */}
            <div className="px-4 mt-4 space-y-2">
                <button className="w-full bg-gradient-to-br from-primary to-primary-container text-on-primary font-bold py-2.5 rounded-md text-sm shadow-lg flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
                    <span>BUILD</span>
                    <span className="material-symbols-outlined text-sm">bolt</span>
                </button>

                <div className="flex flex-col gap-1 pt-4 border-t border-slate-800/30">
                    <Link href="/dashboard" className="text-slate-500 hover:text-slate-300 px-3 py-2 flex items-center gap-3 text-xs transition-colors duration-200 rounded-md hover:bg-slate-900/80">
                        <span className="material-symbols-outlined text-[18px]">description</span>
                        <span>Docs</span>
                    </Link>
                    <Link href="/dashboard" className="text-slate-500 hover:text-slate-300 px-3 py-2 flex items-center gap-3 text-xs transition-colors duration-200 rounded-md hover:bg-slate-900/80">
                        <span className="material-symbols-outlined text-[18px]">help</span>
                        <span>Support</span>
                    </Link>
                </div>
            </div>
        </aside>
    )
}
