import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import sql from '@/lib/db'

const ADMIN_EMAILS = [
  "tasmiyasiddiqui457@gmail.com",
  "tasmiyacreate@gmail.com",
  "demo@founder.os"
]

export async function POST(req: Request) {
    try {
        // 1. Authenticate session
        const session = await getServerSession(authOptions)
        if (!session?.user?.email || !ADMIN_EMAILS.includes(session.user.email.toLowerCase())) {
            return NextResponse.json({ error: 'Access denied. Administrator privileges required.' }, { status: 403 })
        }

        const { targetUserId, planType, creditsTotal, creditsRemaining } = await req.json()
        if (!targetUserId) {
            return NextResponse.json({ error: 'Missing targetUserId parameter' }, { status: 400 })
        }

        // 2. Update user plan_type in users table
        if (planType) {
            await sql`
                UPDATE users 
                SET plan_type = ${planType}
                WHERE id = ${targetUserId}
            `
        }

        // 3. Update user_credits if provided
        if (creditsTotal !== undefined || creditsRemaining !== undefined) {
            // Check if user_credits record exists
            const [existingCredits] = await sql`
                SELECT id FROM user_credits WHERE user_id = ${targetUserId}
            ` as any[]

            if (existingCredits) {
                await sql`
                    UPDATE user_credits
                    SET 
                        credits_total = ${creditsTotal !== undefined ? creditsTotal : existingCredits.credits_total},
                        credits_remaining = ${creditsRemaining !== undefined ? creditsRemaining : existingCredits.credits_remaining}
                    WHERE user_id = ${targetUserId}
                `
            } else {
                await sql`
                    INSERT INTO user_credits (user_id, plan_type, credits_total, credits_remaining, credits_used)
                    VALUES (${targetUserId}, ${planType || 'free'}, ${creditsTotal || 0}, ${creditsRemaining || 0}, 0)
                `
            }
        }

        // 4. Create an admin audit notification for the user
        await sql`
            INSERT INTO notifications (user_id, type, title, message)
            VALUES (
                ${targetUserId},
                'admin_update',
                'Account plan updated ⚡',
                'An administrator has modified your account permissions and credit balance.'
            )
        `

        return NextResponse.json({ success: true, message: 'User updated successfully' })

    } catch (error: any) {
        console.error('[ADMIN UPDATE ERROR]:', error)
        return NextResponse.json({ error: error.message || 'Internal server error' }, { status: 500 })
    }
}
