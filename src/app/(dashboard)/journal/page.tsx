import React from 'react'
import { JournalClient } from '@/components/dashboard/JournalClient'
import { getJournalEntries } from '@/lib/actions/journal-actions'
import { redirect } from 'next/navigation'
import { getCurrentUser } from '@/lib/actions/auth-actions'

export default async function JournalPage() {
    const user = await getCurrentUser()
    if (!user) redirect('/login')

    const entries = await getJournalEntries()

    return (
        <JournalClient initialEntries={entries.map((e: any) => ({
            id: e.id,
            content: e.content,
            created_at: e.created_at
        }))} />
    )
}
