'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { signOut } from 'next-auth/react'

export function Header({ credits = 0, planType = 'free' }: { credits?: number, planType?: string }) {
    const pathname = usePathname()
    const [showProfileMenu, setShowProfileMenu] = useState(false)
    const [showNotifMenu, setShowNotifMenu] = useState(false)
    const [notifications, setNotifications] = useState<any[]>([])

    // Extract analysis ID from path so engine links keep the user on the same analysis
    const analysisMatch = pathname?.match(/\/dashboard\/analysis\/([^/?]+)/)
    const analysisId = analysisMatch ? analysisMatch[1] : null

    const engineHref = (engine: string) => {
        const id = analysisId || '1' // Default to demo ID 1
        return `/dashboard/analysis/${id}?engine=${engine}`
    }

    useEffect(() => {
        // Fetch notifications
        fetch('/api/notifications')
            .then(res => res.json())
            .then(data => {
                if (data.notifications) {
                    setNotifications(data.notifications)
                }
            })
            .catch(err => console.error(err))
    }, [])

    const unreadCount = notifications.filter(n => !n.is_read).length

    const markAllRead = async () => {
        await fetch('/api/notifications', { method: 'PUT' })
        setNotifications(notifications.map(n => ({ ...n, is_read: true })))
    }

    return (
        <header className="fixed top-0 w-full z-50 bg-slate-950/60 backdrop-blur-xl flex justify-between items-center px-6 py-2.5 shadow-[0_4px_12px_rgba(0,0,0,0.2)] border-b border-white/5">
            <div className="flex items-center gap-6">
                <Link href="/" className="text-lg font-bold tracking-tighter text-slate-100 font-headline antialiased">
                    launchOS
                </Link>
                <nav className="hidden md:flex gap-4 items-center">
                    <Link
                        className={cn(
                            "font-headline text-[13px] tracking-tight transition-all duration-300 antialiased",
                            pathname?.endsWith('dashboard') ? "text-slate-100 font-semibold border-b border-slate-400 pb-0.5" : "text-slate-400 hover:text-slate-200"
                        )}
                        href="/dashboard"
                    >
                        Dashboard
                    </Link>
                    <Link
                        className={cn(
                            "font-headline text-sm tracking-tight transition-all duration-300 antialiased",
                            pathname?.includes('validation') ? "text-slate-100 font-semibold border-b border-slate-400 pb-0.5" : "text-slate-400 hover:text-slate-200"
                        )}
                        href={engineHref('validation')}
                        scroll={false}
                    >
                        Validation
                    </Link>
                    <Link
                        className={cn(
                            "font-headline text-sm tracking-tight transition-all duration-300 antialiased",
                            pathname?.includes('mvp') ? "text-slate-100 font-semibold border-b border-slate-400 pb-0.5" : "text-slate-400 hover:text-slate-200"
                        )}
                        href={engineHref('mvp')}
                        scroll={false}
                    >
                        MVP Plan
                    </Link>
                </nav>
            </div>

            <div className="flex items-center gap-4 relative">
                {/* Credit Display */}
                <Link href="/pricing" className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-container border border-white/5 hover:border-tertiary/50 transition-all duration-300 group">
                    <span className="material-symbols-outlined text-[14px] text-tertiary group-hover:animate-pulse">local_fire_department</span>
                    <span className="text-xs font-bold text-white tracking-wider">{credits} <span className="text-on-surface-variant font-medium text-[10px] uppercase">Credits</span></span>
                </Link>

                <div className="h-4 w-px bg-white/10" />

                {/* Notifications */}
                <div className="relative">
                    <button 
                        onClick={() => {
                            setShowNotifMenu(!showNotifMenu)
                            setShowProfileMenu(false)
                        }}
                        className="relative p-1.5 text-slate-200 hover:bg-slate-800/40 rounded-full transition-all duration-300 flex items-center justify-center"
                    >
                        <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>notifications</span>
                        {unreadCount > 0 && (
                            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border border-slate-950"></span>
                        )}
                    </button>

                    {showNotifMenu && (
                        <div className="absolute right-0 mt-2 w-80 bg-[#111111] border border-white/10 rounded-xl shadow-2xl py-2 z-50">
                            <div className="px-4 py-2 border-b border-white/5 flex justify-between items-center">
                                <h3 className="font-bold text-sm text-white">Notifications</h3>
                                <button onClick={markAllRead} className="text-xs text-[#888888] hover:text-white transition-colors">Mark all as read</button>
                            </div>
                            <div className="max-h-80 overflow-y-auto">
                                {notifications.length === 0 ? (
                                    <div className="px-4 py-6 text-center text-sm text-[#888888]">No new notifications</div>
                                ) : (
                                    notifications.map((n, i) => (
                                        <div key={i} className={cn("px-4 py-3 border-b border-white/5 last:border-0", !n.is_read ? "bg-white/5" : "")}>
                                            <div className="text-sm font-bold text-white mb-1">{n.title}</div>
                                            <div className="text-xs text-[#888888]">{n.message}</div>
                                        </div>
                                    ))
                                )}
                            </div>
                            <div className="px-4 py-2 border-t border-white/5 text-center">
                                <Link href="/dashboard" className="text-xs text-[#C8F135] hover:underline">View all</Link>
                            </div>
                        </div>
                    )}
                </div>

                {/* Profile */}
                <div className="relative">
                    <div 
                        onClick={() => {
                            setShowProfileMenu(!showProfileMenu)
                            setShowNotifMenu(false)
                        }}
                        className="w-8 h-8 rounded-full bg-surface-container-high border border-white/5 overflow-hidden shadow-inner cursor-pointer hover:ring-2 hover:ring-tertiary/50 transition-all"
                    >
                        <img
                            alt="User profile avatar"
                            className="w-full h-full object-cover"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCH4gKLhrDFWmynW03QLjoq1R47wDm6tNj1t9dU_XARSRHDlqeR2H2KiNsNyGOvrTrYyMmHzZuC_6x-IyTeKv8VG7WuXTUQAOHX5iRNZxSS3uJ9DFvCEn65SRjZWu_oDUd1CTXeRUxJKw_SVjbK7LpnQR2FgVzkecj3lwIEl80Oge13rzfpPdBBFVNM4Z4nZhyFtvdKsOtegaBwksrxjGzt_vFgowMDLDlAvV6aGLhZjtsvuNdFVidmotrRAyQldyxcLi5-5m4y4yPH"
                        />
                    </div>

                    {showProfileMenu && (
                        <div className="absolute right-0 mt-2 w-48 bg-[#111111] border border-white/10 rounded-xl shadow-2xl py-1 z-50 flex flex-col text-sm">
                            <Link href="/profile" className="px-4 py-2 text-[#888888] hover:text-white hover:bg-white/5 transition-colors">My Profile</Link>
                            <Link href="/settings" className="px-4 py-2 text-[#888888] hover:text-white hover:bg-white/5 transition-colors">Settings</Link>
                            <Link href="/support" className="px-4 py-2 text-[#888888] hover:text-white hover:bg-white/5 transition-colors">Support</Link>
                            <div className="h-px bg-white/10 my-1"></div>
                            <button onClick={() => signOut({ callbackUrl: '/' })} className="px-4 py-2 text-red-500 hover:bg-red-500/10 text-left transition-colors font-medium">Sign out</button>
                        </div>
                    )}
                </div>
            </div>
        </header>
    )
}
