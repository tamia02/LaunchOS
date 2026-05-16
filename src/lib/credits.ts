import sql from '@/lib/db'

export const PLAN_CREDITS = {
    basic: 500,
    medium: 2000,
    advanced: 5000,
    free: 0,
}

export async function checkCredits(userId: string, amount: number) {
    try {
        const [userCredits] = await sql`
            SELECT c.id, c.credits_remaining, u.plan_type as user_plan 
            FROM users u
            LEFT JOIN user_credits c ON u.id = c.user_id
            WHERE u.id = ${userId}
        ` as any[];

        if (!userCredits) {
            return { success: false, error: 'USER_NOT_FOUND', message: 'User not found in database.' };
        }

        let remaining = userCredits.credits_remaining;

        if (!userCredits.id) {
            const planType = userCredits.user_plan || 'free';
            const total = PLAN_CREDITS[planType as keyof typeof PLAN_CREDITS] || 0;
            
            await sql`
                INSERT INTO user_credits (user_id, plan_type, credits_total)
                VALUES (${userId}, ${planType}, ${total})
            `;
            remaining = total;
        }

        if (remaining < amount) {
            return { 
                success: false, 
                error: 'INSUFFICIENT_CREDITS', 
                message: `You need ${amount} credits to perform this action. You have ${remaining} remaining.`,
                upgradeUrl: '/pricing'
            };
        }

        return { success: true, remaining };
    } catch (error: any) {
        console.error('Credit check error:', error);
        return { success: false, error: 'CREDIT_ERROR', message: 'An error occurred while checking credits.' };
    }
}

export async function deductCredits(userId: string, amount: number, actionType: string, ideaId?: string) {
    try {
        await sql`
            UPDATE user_credits 
            SET credits_used = credits_used + ${amount}
            WHERE user_id = ${userId}
        `;

        await sql`
            INSERT INTO credit_transactions (user_id, action_type, credits_deducted, idea_id)
            VALUES (${userId}, ${actionType}, ${amount}, ${ideaId || null})
        `;
        return { success: true };
    } catch (error: any) {
        console.error('Credit deduction error:', error);
        return { success: false, error: 'CREDIT_ERROR' };
    }
}

export async function getUserCredits(userId: string) {
    try {
        const [userCredits] = await sql`
            SELECT c.credits_remaining, c.credits_total, c.plan_type
            FROM users u
            LEFT JOIN user_credits c ON u.id = c.user_id
            WHERE u.id = ${userId}
        ` as any[];

        if (!userCredits) return null;

        if (!userCredits.plan_type) {
             const [u] = await sql`SELECT plan_type FROM users WHERE id = ${userId}` as any[];
             const planType = u?.plan_type || 'free';
             const total = PLAN_CREDITS[planType as keyof typeof PLAN_CREDITS] || 0;
             return { credits_remaining: total, credits_total: total, plan_type: planType };
        }

        return userCredits;
    } catch (error) {
        console.error('Error fetching user credits:', error);
        return null;
    }
}
