'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import {
    Home,
    BarChart3,
    BookOpen,
    Timer,
    Globe,
    Settings,
    Zap,
    LogOut,
    Sparkles
} from 'lucide-react'

const navItems = [
    { name: 'Dashboard', href: '/dashboard', icon: Home },
    { name: 'My Analyses', href: '/analyses', icon: BarChart3 },
    { name: 'Idea Journal', href: '/journal', icon: BookOpen },
    { name: '30-Day Countdown', href: '/countdown', icon: Timer },
    { name: 'Public Gallery', href: '/gallery', icon: Globe },
    { name: 'Settings', href: '/settings', icon: Settings },
]

export function Sidebar() {
    const pathname = usePathname()

    return (
        <aside className="w-64 border-r border-outline-variant/10 bg-surface-container-low flex flex-col h-screen fixed inset-y-0 z-50">
            {/* Branding */}
            <div className="p-10 mb-4">
                <Link href="/" className="flex items-center gap-3 group">
                    <div className="w-10 h-10 bg-surface-container-high rounded-xl flex items-center justify-center border border-outline-variant/20 shadow-inner group-hover:scale-110 transition-transform duration-500">
                        <span className="text-tertiary font-headline font-black text-2xl italic leading-none">L</span>
                    </div>
                    <span className="text-xl font-headline font-black tracking-tighter uppercase italic text-on-surface">launchOS</span>
                </Link>
            </div>

            {/* Navigation */}
            <nav className="flex-1 px-6 space-y-2">
                <p className="px-4 text-[9px] font-black text-on-surface-variant uppercase tracking-[0.3em] mb-4 opacity-40">System Core</p>
                {navItems.map((item) => {
                    const isActive = pathname === item.href

                    return (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={cn(
                                "group flex items-center gap-4 px-4 py-3.5 rounded-xl text-[11px] font-black uppercase tracking-widest transition-all duration-300 relative",
                                isActive
                                    ? "bg-surface-container-high text-tertiary shadow-lg shadow-black/20"
                                    : "text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high/50"
                            )}
                        >
                            {isActive && (
                                <div className="absolute left-0 top-3 bottom-3 w-1 bg-tertiary rounded-r-full shadow-[0_0_8px_#679cff]" />
                            )}
                            <item.icon className={cn("w-4 h-4 transition-colors", isActive ? "text-tertiary" : "text-on-surface-variant opacity-40 group-hover:opacity-100")} />
                            {item.name}
                        </Link>
                    )
                })}
            </nav>

            {/* Account & Pro */}
            <div className="p-6 mt-auto space-y-6">
                <div className="p-6 rounded-2xl bg-surface-container-high border border-outline-variant/15 shadow-2xl relative overflow-hidden group">
                    <div className="absolute inset-0 bg-tertiary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="flex items-center justify-between mb-6 relative">
                        <span className="text-[10px] font-black text-tertiary uppercase tracking-[0.2em]">Alpha Plan</span>
                        <div className="px-2 py-0.5 bg-tertiary/10 border border-tertiary/20 rounded text-[8px] font-black text-tertiary uppercase tracking-widest">LIVE</div>
                    </div>

                    <div className="space-y-4 relative">
                        <div className="flex justify-between text-[10px] font-black text-on-surface-variant uppercase tracking-widest opacity-60">
                            <span>Credits Used</span>
                            <span>2/3</span>
                        </div>
                        <div className="h-1.5 w-full bg-surface-container-highest rounded-full overflow-hidden shadow-inner">
                            <div className="h-full bg-tertiary rounded-full shadow-[0_0_8px_#679cff]" style={{ width: '66%' }} />
                        </div>
                        <button className="w-full py-3 bg-tertiary rounded-xl text-[10px] font-black text-on-tertiary uppercase tracking-[0.2em] hover:bg-[#7eabff] transition-all shadow-xl flex items-center justify-center gap-2 mt-4">
                            <Sparkles className="w-3.5 h-3.5" />
                            Go Pro
                        </button>
                    </div>
                </div>

                <div className="flex items-center gap-4 px-4 py-6 border-t border-outline-variant/10">
                    <div className="w-10 h-10 rounded-xl bg-surface-container-high border border-outline-variant/20 flex items-center justify-center text-[12px] font-headline font-black text-tertiary italic shadow-inner">
                        TF
                    </div>
                    <div className="flex-1 overflow-hidden">
                        <p className="text-[11px] font-black text-on-surface uppercase tracking-tight truncate">The Founder</p>
                        <p className="text-[10px] font-medium text-on-surface-variant italic truncate opacity-60">founder@launchos.ai</p>
                    </div>
                    <button className="p-2 text-on-surface-variant hover:text-error hover:bg-error/10 rounded-lg transition-all">
                        <LogOut className="w-4 h-4" />
                    </button>
                </div>
            </div>
        </aside>
    )
}
