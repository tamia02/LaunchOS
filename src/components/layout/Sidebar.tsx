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
        <aside className="fixed left-0 h-screen w-64 z-40 bg-slate-950/40 backdrop-blur-2xl shadow-[20px_0_40px_rgba(0,0,0,0.1)] flex flex-col h-full py-8 mt-16 font-body text-sm antialiased text-slate-200">
            <div className="px-6 mb-8">
                <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 bg-tertiary rounded-sm flex items-center justify-center">
                        <Sparkles className="w-4 h-4 text-on-tertiary" />
                    </div>
                    <span className="text-lg font-black text-slate-100 font-headline uppercase italic">launchOS</span>
                </div>
                <p className="text-[10px] uppercase tracking-widest text-on-surface-variant font-medium">AI Analysis Active</p>
            </div>

            <nav className="flex-grow space-y-1">
                {navItems.map((item) => {
                    const isActive = pathname === item.href
                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                                "flex items-center gap-3 px-4 py-3 mx-2 rounded-sm transition-colors duration-200",
                                isActive
                                    ? "bg-slate-800/50 text-slate-100 border-l-2 border-slate-300 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)]"
                                    : "text-slate-500 hover:text-slate-300"
                            )}
                        >
                            <item.icon className="w-[20px] h-[20px]" />
                            <span>{item.name}</span>
                        </Link>
                    )
                })}
            </nav>

            <div className="px-4 mt-auto space-y-4">
                <button className="w-full bg-gradient-to-br from-primary to-primary-container text-on-primary font-bold py-3 rounded-md shadow-lg flex items-center justify-center gap-2 hover:opacity-90 transition-opacity active:scale-95 duration-200">
                    <span>BUILD</span>
                    <Sparkles className="w-4 h-4" />
                </button>
                <div className="flex flex-col gap-1">
                    <Link href="/docs" className="text-slate-500 hover:text-slate-300 px-4 py-2 flex items-center gap-3 text-xs transition-colors duration-200">
                        <BookOpen className="w-[18px] h-[18px]" />
                        <span>Docs</span>
                    </Link>
                    <Link href="/support" className="text-slate-500 hover:text-slate-300 px-4 py-2 flex items-center gap-3 text-xs transition-colors duration-200">
                        <Settings className="w-[18px] h-[18px]" />
                        <span>Support</span>
                    </Link>
                </div>
            </div>
        </aside>
    )
}
