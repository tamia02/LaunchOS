import { NextResponse } from 'next/server'
import { getCurrentUser } from '@/lib/actions/auth-actions'
import sql from '@/lib/db'

export async function GET() {
    try {
        const user = await getCurrentUser()
        if (!user) return NextResponse.json({ notifications: [] })

        const notifications = await sql`
            SELECT * FROM notifications 
            WHERE user_id = ${user.id} 
            ORDER BY created_at DESC 
            LIMIT 10
        `
        return NextResponse.json({ notifications })
    } catch (error) {
        return NextResponse.json({ notifications: [] })
    }
}

export async function PUT() {
    try {
        const user = await getCurrentUser()
        if (!user) return NextResponse.json({ success: false })

        await sql`
            UPDATE notifications 
            SET is_read = true 
            WHERE user_id = ${user.id} AND is_read = false
        `
        return NextResponse.json({ success: true })
    } catch (error) {
        return NextResponse.json({ success: false })
    }
}
