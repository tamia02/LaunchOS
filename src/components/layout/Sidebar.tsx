'use client'

import React from 'react'
import { usePathname, useSearchParams, useRouter } from 'next/navigation'
import { cn } from '@/lib/utils'
import Link from 'next/link'

const engineNavItems = [
    { id: 'niche', name: 'Niche', icon: 'category' },
    { id: 'validation', name: 'Validation', icon: 'fact_check' },
    { id: 'mvp', name: 'MVP Plan', icon: 'architecture' },
    { id: 'pricing', name: 'Pricing', icon: 'payments' },
    { id: 'outreach', name: 'Outreach', icon: 'campaign' },
    { id: 'progress', name: 'Progress', icon: 'analytics' },
]

// Hardcoded demo ID — the analysis page uses MOCK_ANALYSIS for any ID
const DEMO_ID = '1'

export function Sidebar() {
    const pathname = usePathname()
    const searchParams = useSearchParams()
    const router = useRouter()

    const analysisMatch = pathname?.match(/\/dashboard\/analysis\/([^/?]+)/)
    const analysisId = analysisMatch ? analysisMatch[1] : DEMO_ID
    const currentEngine = searchParams.get('engine') || 'niche'
    const isOnAnalysis = !!analysisMatch

    const navigate = (engineId: string) => {
        // Use analysisId from URL if present, otherwise default to demo ID
        const targetId = analysisId || DEMO_ID
        router.push(`/dashboard/analysis/${targetId}?engine=${engineId}`)
    }

    return (
        <aside className="fixed left-0 top-0 h-screen w-60 z-40 bg-slate-950/60 backdrop-blur-2xl flex flex-col pt-20 shadow-[4px_0_24px_rgba(0,0,0,0.3)] font-body text-[13px] antialiased border-r border-white/5">
            {/* Project Badge */}
            <div className="px-5 py-4 border-b border-white/5">
                <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 bg-blue-900 rounded-md flex items-center justify-center flex-shrink-0">
                        <span className="material-symbols-outlined text-[14px] text-blue-300" style={{ fontVariationSettings: "'FILL' 1" }}>rocket_launch</span>
                    </div>
                    <div>
                        <div className="text-[13px] font-bold text-white font-headline">Project Alpha</div>
                        <div className="text-[9px] uppercase tracking-widest text-slate-400 mt-0.5">AI Analysis Active</div>
                    </div>
                </div>
            </div>

            {/* Engine Nav — uses router.push buttons for reliable navigation */}
            <nav className="flex-1 flex flex-col gap-0.5 py-3 px-2.5">
                {engineNavItems.map((item) => {
                    const isActive = isOnAnalysis && currentEngine === item.id
                    return (
                        <button
                            key={item.id}
                            type="button"
                            onClick={() => navigate(item.id)}
                            className={cn(
                                "w-full flex items-center gap-2.5 px-2.5 py-1.5 rounded-md transition-all duration-200 text-left cursor-pointer",
                                isActive
                                    ? "bg-slate-800 text-white border-l-2 border-blue-400 font-bold"
                                    : "text-slate-400 hover:text-white hover:bg-slate-800/60"
                            )}
                        >
                            <span className="material-symbols-outlined text-[18px] opacity-70">{item.icon}</span>
                            <span className="font-medium">{item.name}</span>
                        </button>
                    )
                })}
            </nav>

            {/* Bottom Actions */}
            <div className="px-2.5 pb-6 space-y-1.5 border-t border-white/5 pt-3">
                <button
                    type="button"
                    onClick={() => router.push('/dashboard')}
                    className="w-full bg-gradient-to-br from-slate-300 to-slate-500 text-slate-900 font-bold py-2 rounded-md text-[12px] shadow-lg flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
                >
                    <span>BUILD</span>
                    <span className="material-symbols-outlined text-[13px]">bolt</span>
                </button>
                <div className="flex flex-col gap-1 pt-3">
                    <Link href="/dashboard" className="text-slate-500 hover:text-slate-300 px-2.5 py-1.5 flex items-center gap-2.5 text-[11px] transition-colors rounded-md hover:bg-slate-900/80">
                        <span className="material-symbols-outlined text-[16px]">description</span>
                        <span>Docs</span>
                    </Link>
                    <Link href="/dashboard" className="text-slate-500 hover:text-slate-300 px-2.5 py-1.5 flex items-center gap-2.5 text-[11px] transition-colors rounded-md hover:bg-slate-900/80">
                        <span className="material-symbols-outlined text-[16px]">help</span>
                        <span>Support</span>
                    </Link>
                </div>
            </div>
        </aside>
    )
}
