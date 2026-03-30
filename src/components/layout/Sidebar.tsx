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
        <aside className="fixed left-0 h-screen w-80 z-40 glass-panel glass-edge flex flex-col py-16 mt-20 transition-all custom-ease overflow-hidden border-r border-white/5 shadow-[20px_0_100px_rgba(0,0,0,0.4)]">
            <div className="px-10 mb-20">
                <div className="flex items-center gap-6 group cursor-default">
                    <div className="w-14 h-14 bg-surface-variant/20 rounded-2xl flex items-center justify-center shadow-inner glass-edge border border-white/5 group-hover:rotate-[-10deg] transition-all duration-700 custom-ease">
                        <span className="material-symbols-outlined text-tertiary text-3xl shadow-[0_0_15px_rgba(103,156,255,0.4)]" style={{ fontVariationSettings: "'FILL' 1" }}>rocket_launch</span>
                    </div>
                    <div>
                        <h3 className="text-2xl font-black text-white leading-none font-headline tracking-tighter uppercase italic antialiased group-hover:text-tertiary transition-colors">launchOS</h3>
                        <p className="text-[9px] text-tertiary font-black uppercase tracking-[0.4em] mt-1 font-label italic">Neural_Protocol_0.8</p>
                    </div>
                </div>
            </div>

            <nav className="flex-1 px-6 space-y-3">
                <p className="px-6 text-[10px] font-black uppercase tracking-[0.5em] text-on-surface-variant/20 mb-8 font-label italic antialiased">Primary_Intelligence</p>
                {navItems.map((item) => {
                    const isActive = pathname === item.href
                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                                "px-6 py-5 flex items-center gap-6 font-body text-[13px] antialiased transition-all duration-700 custom-ease group rounded-2xl relative",
                                isActive
                                    ? "bg-surface-container-high/60 text-white shadow-[0_20px_40px_rgba(0,0,0,0.3)] glass-edge"
                                    : "text-on-surface-variant/40 hover:text-white hover:bg-white/5"
                            )}
                        >
                            {isActive && (
                                <div className="absolute left-0 w-1 h-6 bg-tertiary rounded-full shadow-[0_0_15px_#679cff] animate-pulse" />
                            )}
                            <span className={cn(
                                "material-symbols-outlined text-[24px] transition-all duration-700 custom-ease",
                                isActive ? "text-tertiary" : "group-hover:text-tertiary group-hover:scale-110"
                            )}>
                                {item.icon}
                            </span>
                            <span className={cn("font-black tracking-tighter uppercase italic font-headline text-lg transition-transform", isActive ? "translate-x-1" : "group-hover:translate-x-1")}>{item.name}</span>
                        </Link>
                    )
                })}
            </nav>

            <div className="px-8 py-12">
                <button className="w-full button-metallic text-on-primary py-6 rounded-[1.5rem] font-black text-[11px] tracking-[0.4em] shadow-[0_30px_60px_rgba(0,0,0,0.4)] hover:brightness-125 transition-all duration-700 custom-ease active:scale-95 group uppercase italic font-headline relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-[2000ms]" />
                    <span className="flex items-center justify-center gap-4 relative z-10">
                        DEPLOYMENT
                        <span className="material-symbols-outlined text-sm group-hover:rotate-12 transition-transform">bolt</span>
                    </span>
                </button>
            </div>

            <div className="px-8 space-y-2 mb-12">
                <Link href="/docs" className="text-on-surface-variant/20 hover:text-tertiary px-6 py-4 flex items-center gap-6 font-label text-[10px] uppercase tracking-[0.4em] transition-all duration-500 custom-ease italic">
                    <span className="material-symbols-outlined text-[20px]">description</span>
                    <span>Documentation</span>
                </Link>
            </div>
        </aside>
    )
}
