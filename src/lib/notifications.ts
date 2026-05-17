import sql from '@/lib/db'

export async function createNotification({
    userId,
    type,
    title,
    message
}: {
    userId: string
    type: 'analysis_complete' | 'credit_low' | 'upgrade_success' | 'system' | 'welcome'
    title: string
    message: string
}) {
    try {
        await sql`
            INSERT INTO notifications (user_id, type, title, message)
            VALUES (${userId}, ${type}, ${title}, ${message})
        `
    } catch (error) {
        console.error('Failed to create notification:', error)
    }
}
