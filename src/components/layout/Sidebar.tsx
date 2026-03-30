'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname, useSearchParams } from 'next/navigation'
import { cn } from '@/lib/utils'

const engineNavItems = [
    { id: 'niche', name: 'Niche', icon: 'category' },
    { id: 'validation', name: 'Validation', icon: 'fact_check' },
    { id: 'mvp', name: 'MVP Plan', icon: 'architecture' },
    { id: 'pricing', name: 'Pricing', icon: 'payments' },
    { id: 'outreach', name: 'Outreach', icon: 'campaign' },
    { id: 'progress', name: 'Progress', icon: 'analytics' },
]

export function Sidebar() {
    const pathname = usePathname()
    const searchParams = useSearchParams()

    // Detect if we're on an analysis page and extract the ID
    const analysisMatch = pathname.match(/\/dashboard\/analysis\/([^/]+)/)
    const analysisId = analysisMatch ? analysisMatch[1] : null
    const currentEngine = searchParams.get('engine') || 'niche'

    return (
        <aside className="fixed left-0 h-screen w-64 z-40 bg-slate-950/40 backdrop-blur-2xl flex flex-col py-8 pt-24 shadow-[20px_0_40px_rgba(0,0,0,0.1)] font-body text-sm antialiased text-slate-200 border-r border-white/5">
            {/* Project Badge */}
            <div className="px-6 mb-8">
                <div className="flex items-center gap-3 mb-1">
                    <div className="w-8 h-8 bg-primary-container rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="material-symbols-outlined text-sm text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>rocket_launch</span>
                    </div>
                    <div>
                        <div className="text-base font-black text-slate-100 font-headline leading-none">Project Alpha</div>
                        <div className="text-[10px] uppercase tracking-widest text-on-surface-variant font-medium mt-0.5">AI Analysis Active</div>
                    </div>
                </div>
            </div>

            {/* Engine Nav — works both on dashboard and analysis pages */}
            <nav className="flex-grow flex flex-col gap-0.5">
                {engineNavItems.map((item) => {
                    // When on analysis page: link uses ?engine= param
                    // When on dashboard: link goes to dashboard
                    const href = analysisId
                        ? `/dashboard/analysis/${analysisId}?engine=${item.id}`
                        : `/dashboard`

                    const isActive = analysisId
                        ? currentEngine === item.id
                        : pathname === '/dashboard' && item.id === 'niche'

                    return (
                        <Link
                            key={item.id}
                            href={href}
                            scroll={false}
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

            {/* Bottom Actions */}
            <div className="px-4 mt-4 space-y-2">
                <Link
                    href="/dashboard"
                    className="w-full bg-gradient-to-br from-primary to-primary-container text-on-primary font-bold py-2.5 rounded-md text-sm shadow-lg flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
                >
                    <span>BUILD</span>
                    <span className="material-symbols-outlined text-sm">bolt</span>
                </Link>

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
