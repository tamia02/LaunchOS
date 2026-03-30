'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

const navItems = [
    { name: 'Niche', href: '/dashboard', icon: 'category' },
    { name: 'Validation', href: '/validation', icon: 'verified' },
    { name: 'MVP Plan', href: '/mvp', icon: 'architecture' },
    { name: 'Pricing', href: '/pricing', icon: 'payments' },
    { name: 'Outreach', href: '/outreach', icon: 'campaign' },
    { name: 'Progress', href: '/progress', icon: 'analytics' },
]

export function Sidebar() {
    const pathname = usePathname()

    return (
        <aside className="fixed left-0 h-screen w-64 z-40 bg-slate-950/40 backdrop-blur-2xl flex flex-col h-full py-8 pt-24 shadow-[20px_0_40px_rgba(0,0,0,0.1)] font-body text-sm antialiased text-slate-200 border-r border-white/5">
            <div className="px-6 mb-8">
                <div className="flex items-center gap-3 mb-2">
                    <div className="w-6 h-6 bg-tertiary rounded-sm flex items-center justify-center">
                        <span className="material-symbols-outlined text-xs text-on-tertiary" style={{ fontVariationSettings: "'FILL' 1" }}>architecture</span>
                    </div>
                    <span className="text-lg font-black text-slate-100 font-headline">Project Alpha</span>
                </div>
                <p className="text-[10px] uppercase tracking-widest text-on-surface-variant font-medium antialiased">AI Analysis Active</p>
            </div>

            <nav className="flex-grow space-y-1">
                {navItems.map((item) => {
                    const isActive = pathname === item.href
                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                                "px-4 py-3 mx-2 flex items-center gap-3 transition-colors duration-200 rounded-sm",
                                isActive
                                    ? "bg-slate-800/50 text-slate-100 border-l-2 border-slate-300"
                                    : "text-slate-500 hover:text-slate-300"
                            )}
                        >
                            <span className="material-symbols-outlined text-[20px]">
                                {item.icon}
                            </span>
                            <span className="font-medium tracking-tight">{item.name}</span>
                        </Link>
                    )
                })}
            </nav>

            <div className="px-4 mt-auto space-y-4">
                <button className="w-full bg-gradient-to-br from-primary to-primary-container text-on-primary font-bold py-3 rounded-md shadow-lg flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
                    <span>Build</span>
                    <span className="material-symbols-outlined text-sm">bolt</span>
                </button>
                <div className="flex flex-col gap-1 mb-4">
                    <Link href="/docs" className="text-slate-500 hover:text-slate-300 px-4 py-2 flex items-center gap-3 text-xs transition-colors duration-200">
                        <span className="material-symbols-outlined text-[18px]">description</span>
                        <span>Docs</span>
                    </Link>
                    <Link href="/support" className="text-slate-500 hover:text-slate-300 px-4 py-2 flex items-center gap-3 text-xs transition-colors duration-200">
                        <span className="material-symbols-outlined text-[18px]">help</span>
                        <span>Support</span>
                    </Link>
                </div>
            </div>
        </aside>
    )
}
