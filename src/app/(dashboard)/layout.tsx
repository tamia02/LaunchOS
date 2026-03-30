'use client'

import React, { Suspense } from 'react'
import { Sidebar } from '@/components/layout/Sidebar'
import { Header } from '@/components/layout/Header'

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="flex min-h-screen bg-surface relative overflow-hidden antialiased">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(103,156,255,0.02),transparent_70%)] pointer-events-none" />
            <Header />
            <div className="flex w-full mt-24">
                <Suspense fallback={<div className="fixed left-0 h-screen w-64 z-40 bg-slate-950/40 backdrop-blur-2xl" />}>
                    <Sidebar />
                </Suspense>
                <main className="pl-72 flex-1 overflow-y-auto min-h-[calc(100vh-96px)] bg-surface relative z-10 custom-ease">
                    <div className="p-16 max-w-7xl mx-auto">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    )
}
