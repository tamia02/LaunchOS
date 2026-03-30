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
        <aside className="fixed left-0 h-screen w-64 z-40 bg-slate-950/40 backdrop-blur-2xl shadow-[20px_0_40px_rgba(0,0,0,0.1)] flex flex-col py-8 mt-16 border-r border-white/5">
            <div className="px-6 mb-8">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-surface-bright rounded flex items-center justify-center shadow-lg border border-white/5">
                        <span className="material-symbols-outlined text-tertiary" style={{ fontVariationSettings: "'FILL' 1" }}>rocket_launch</span>
                    </div>
                    <div>
                        <h3 className="text-lg font-black text-slate-100 leading-tight font-headline tracking-tighter">launchOS</h3>
                        <p className="text-[10px] text-on-surface-variant font-medium tracking-tight opacity-60">AI Analysis Active</p>
                    </div>
                </div>
            </div>

            <nav className="flex-1 space-y-1">
                {navItems.map((item) => {
                    const isActive = pathname === item.href
                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                                "px-4 py-3 mx-2 flex items-center gap-3 font-body text-sm antialiased transition-all duration-300 group",
                                isActive
                                    ? "bg-slate-800/50 text-slate-100 border-l-2 border-slate-300 rounded-sm shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)]"
                                    : "text-slate-500 hover:text-slate-300 hover:bg-white/5 rounded-sm"
                            )}
                        >
                            <span className={cn(
                                "material-symbols-outlined text-[20px] transition-colors",
                                isActive ? "text-tertiary shadow-[0_0_10px_#679cff]" : "text-slate-500 group-hover:text-slate-300"
                            )}>
                                {item.icon}
                            </span>
                            <span className="font-medium">{item.name}</span>
                        </Link>
                    )
                })}
            </nav>

            <div className="px-4 py-6 border-t border-outline-variant/10">
                <button className="w-full bg-gradient-to-br from-primary to-primary-container text-on-primary py-2.5 rounded-md font-bold text-sm tracking-wide shadow-lg hover:opacity-90 transition-all active:scale-95 group">
                    <span className="flex items-center justify-center gap-2">
                        BUILD
                        <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">bolt</span>
                    </span>
                </button>
            </div>

            <div className="px-2 space-y-1">
                <Link href="/docs" className="text-slate-500 hover:text-slate-300 px-4 py-3 flex items-center gap-3 font-body text-sm antialiased transition-colors duration-200">
                    <span className="material-symbols-outlined text-[20px]">description</span>
                    <span>Docs</span>
                </Link>
                <Link href="/support" className="text-slate-500 hover:text-slate-300 px-4 py-3 flex items-center gap-3 font-body text-sm antialiased transition-colors duration-200">
                    <span className="material-symbols-outlined text-[20px]">help</span>
                    <span>Support</span>
                </Link>
            </div>
        </aside>
    )
}
