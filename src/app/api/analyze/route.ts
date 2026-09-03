import { NextResponse } from 'next/server'
import { after } from 'next/server'
import sql from '@/lib/db'
import { checkCredits } from '@/lib/credits'

// This route only creates the analysis row and hands off to the background
// processing route (see /api/analyze/process) — it must stay fast so the
// client gets an analysisId back immediately instead of blocking on AI calls.
export const maxDuration = 20;

export async function POST(req: Request) {
    try {
        const { idea, userId } = await req.json()
        console.log('--- CREATING ANALYSIS ---')
        console.log('Idea:', idea)
        console.log('User:', userId)

        if (!idea || !userId) {
            return NextResponse.json({ error: 'Missing idea or userId' }, { status: 400 })
        }

        // 1. Check user usage
        let [user] = await sql`
            SELECT email, full_name, plan_type, usage_count FROM users WHERE id = ${userId}
        ` as any[]

        if (!user) {
            console.log('Auto-creating user:', userId)
            const [newUser] = await sql`
                INSERT INTO users (id, email, plan_type, usage_count)
                VALUES (${userId}, 'demo@founder.os', 'free', 0)
                RETURNING email, full_name, plan_type, usage_count
            ` as any[]
            user = newUser
        }

        // --- CHECK CREDITS BEFORE STARTING ---
        const requiredCredits = 100; // First validation is 100 credits
        const creditCheck = await checkCredits(userId, requiredCredits);

        if (!creditCheck.success) {
            return NextResponse.json({
                error: creditCheck.error,
                message: creditCheck.message,
                code: 'UPGRADE_REQUIRED',
                upgradeUrl: creditCheck.upgradeUrl
            }, { status: 403 })
        }

        // 2. Create the pending row immediately
        const [analysis] = await sql`
            INSERT INTO analyses (user_id, idea, status)
            VALUES (${userId}, ${idea}, 'processing')
            RETURNING id
        ` as any[]
        console.log('Analysis row created with ID:', analysis.id)

        // 3. Hand off the actual AI work to the background processing route.
        // after() keeps this invocation alive just long enough to dispatch the
        // request and get Route B's quick acknowledgement — the client already
        // has its response by the time this runs.
        const baseUrl = process.env.NEXT_PUBLIC_APP_URL || (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000')
        after(async () => {
            try {
                const res = await fetch(`${baseUrl}/api/analyze/process`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'x-internal-secret': process.env.INTERNAL_API_SECRET!
                    },
                    body: JSON.stringify({ analysisId: analysis.id, idea, userId })
                })
                console.log('Dispatched background processing, status:', res.status)
            } catch (err) {
                console.error('Failed to dispatch background processing:', err)
            }
        })

        return NextResponse.json({
            success: true,
            analysisId: analysis.id
        })

    } catch (error: any) {
        console.error('Analysis creation error:', error)
        return NextResponse.json({ error: error.message || 'Internal server error' }, { status: 500 })
    }
}
