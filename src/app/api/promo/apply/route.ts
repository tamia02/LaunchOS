import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import sql from '@/lib/db';
import { PLAN_CREDITS } from '@/lib/credits';

export async function POST(req: Request) {
    try {
        // 1. Authenticate user session
        const session = await getServerSession(authOptions);
        if (!session?.user?.email) {
            return NextResponse.json({ error: 'Unauthorized. Please sign in.' }, { status: 401 });
        }

        const { promoCode, planType } = await req.json();

        if (!promoCode || !planType) {
            return NextResponse.json({ error: 'Missing promoCode or planType' }, { status: 400 });
        }

        // 2. Validate promo code
        const formattedCode = promoCode.trim().toUpperCase();
        if (formattedCode !== 'LAUNCH14') {
            return NextResponse.json({ error: 'Invalid promo code.' }, { status: 400 });
        }

        if (planType !== 'basic') {
            return NextResponse.json({ error: 'This promo code is only valid for the Basic plan.' }, { status: 400 });
        }

        // 3. Lookup user ID by email
        const [user] = await sql`
            SELECT id FROM users WHERE LOWER(email) = LOWER(${session.user.email})
        ` as any[];

        if (!user) {
            return NextResponse.json({ error: 'User not found in database.' }, { status: 404 });
        }

        const userId = user.id;

        // 4. Update user plan to basic in users table
        await sql`
            UPDATE users 
            SET plan_type = 'basic'
            WHERE id = ${userId}
        `;

        // 5. Upsert credits (give 300 credits for Basic plan)
        const creditsToAdd = PLAN_CREDITS.basic;
        await sql`
            INSERT INTO user_credits (user_id, plan_type, credits_total, credits_used)
            VALUES (${userId}, 'basic', ${creditsToAdd}, 0)
            ON CONFLICT (user_id) 
            DO UPDATE SET 
                plan_type = 'basic',
                credits_total = ${creditsToAdd},
                credits_used = 0,
                reset_date = CURRENT_TIMESTAMP
        `;

        // 6. Create notifications
        await sql`
            INSERT INTO notifications (user_id, type, title, message)
            VALUES (
                ${userId},
                'system',
                'Basic Plan Unlocked! 🎉',
                'Promo code LAUNCH14 applied successfully. Your account has been upgraded to the Basic plan with 300 credits.'
            )
        `;

        return NextResponse.json({ 
            success: true, 
            message: 'Promo code applied successfully! Your account has been upgraded to the Basic plan.' 
        });

    } catch (error: any) {
        console.error('[PROMO CODE ERROR]:', error);
        return NextResponse.json({ error: error.message || 'Internal server error' }, { status: 500 });
    }
}
