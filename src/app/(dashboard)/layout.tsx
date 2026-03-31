import React, { Suspense } from 'react'
import { Sidebar } from '@/components/layout/Sidebar'
import { Header } from '@/components/layout/Header'

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="flex min-h-screen bg-surface antialiased">
            <Header />
            <Suspense fallback={<div className="fixed left-0 top-0 h-screen w-60 z-40 bg-slate-950/60 backdrop-blur-2xl border-r border-white/5" />}>
                <Sidebar />
            </Suspense>
            <main className="ml-60 pt-16 flex-1 min-h-screen bg-surface">
                <div className="p-8 max-w-[1600px] mx-auto">
                    {children}
                </div>
            </main>
        </div>
    )
}
