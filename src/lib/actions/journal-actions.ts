'use server'

import sql from '@/lib/db'
import { getCurrentUser } from './auth-actions'
import { revalidatePath } from 'next/cache'

export async function getJournalEntries() {
    const user = await getCurrentUser()
    if (!user) return []

    try {
        // Ensure table exists (simplified migration for demo)
        await sql`
            CREATE TABLE IF NOT EXISTS journal_entries (
                id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
                user_id UUID NOT NULL REFERENCES users(id),
                content TEXT NOT NULL,
                created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
            )
        `

        const entries = await sql`
            SELECT * FROM journal_entries 
            WHERE user_id = ${user.id} 
            ORDER BY created_at DESC
        `
        return entries
    } catch (error) {
        console.error('Failed to fetch journal entries:', error)
        return []
    }
}

export async function addJournalEntry(content: string) {
    const user = await getCurrentUser()
    if (!user) throw new Error('Unauthorized')

    try {
        await sql`
            INSERT INTO journal_entries (user_id, content)
            VALUES (${user.id}, ${content})
        `
        revalidatePath('/journal')
        return { success: true }
    } catch (error) {
        console.error('Failed to add journal entry:', error)
        throw error
    }
}

export async function deleteJournalEntry(id: string) {
    const user = await getCurrentUser()
    if (!user) throw new Error('Unauthorized')

    try {
        await sql`
            DELETE FROM journal_entries 
            WHERE id = ${id} AND user_id = ${user.id}
        `
        revalidatePath('/journal')
        return { success: true }
    } catch (error) {
        console.error('Failed to delete journal entry:', error)
        throw error
    }
}
