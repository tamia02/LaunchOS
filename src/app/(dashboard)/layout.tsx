import React from 'react'
import { Sidebar } from '@/components/layout/Sidebar'

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="flex min-h-screen bg-background relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(103,156,255,0.03),transparent_50%)] pointer-events-none" />
            <Sidebar />
            <main className="ml-64 flex-1 overflow-y-auto min-h-screen bg-background relative z-10">
                <div className="p-12 max-w-7xl mx-auto">
                    {children}
                </div>
            </main>
        </div>
    )
}
