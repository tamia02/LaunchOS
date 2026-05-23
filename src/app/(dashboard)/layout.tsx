import React, { Suspense } from 'react'
import { Sidebar } from '@/components/layout/Sidebar'
import { Header } from '@/components/layout/Header'
import { getCurrentUser } from '@/lib/actions/auth-actions'
import { getUserCredits } from '@/lib/credits'

export default async function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const user = await getCurrentUser();
    let credits = { credits_remaining: 0, plan_type: 'free', usage_count: 0 };
    
    if (user?.id) {
        const userCredits = await getUserCredits(user.id);
        if (userCredits) {
            credits = {
                credits_remaining: userCredits.credits_remaining,
                plan_type: userCredits.plan_type,
                usage_count: userCredits.usage_count
            };
        }
    }

    return (
        <div className="flex min-h-screen bg-surface antialiased">
            <Header credits={credits.credits_remaining} planType={credits.plan_type} usageCount={credits.usage_count} />
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
