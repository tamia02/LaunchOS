import sql from '@/lib/db'

export const PLAN_CREDITS = {
    basic: 300,      // Basic: 3 runs = 300 credits
    medium: 500,     // Medium: 5 runs = 500 credits
    advanced: 250,   // Premium (advanced): 250 credits/month
    free: 0,
}

export async function checkCredits(userId: string, amount: number) {
    try {
        const [userCredits] = await sql`
            SELECT c.id, c.credits_remaining, u.plan_type as user_plan, u.usage_count 
            FROM users u
            LEFT JOIN user_credits c ON u.id = c.user_id
            WHERE u.id = ${userId}
        ` as any[];

        let finalUserCredits = userCredits;
        if (!finalUserCredits) {
            console.log('User not found in checkCredits, auto-creating:', userId);
            await sql`
                INSERT INTO users (id, email, plan_type, usage_count)
                VALUES (${userId}, 'demo@founder.os', 'free', 0)
                ON CONFLICT (id) DO NOTHING
            `;
            const [retryCredits] = await sql`
                SELECT c.id, c.credits_remaining, u.plan_type as user_plan, u.usage_count 
                FROM users u
                LEFT JOIN user_credits c ON u.id = c.user_id
                WHERE u.id = ${userId}
            ` as any[];
            finalUserCredits = retryCredits;
        }

        if (!finalUserCredits) {
            return { success: false, error: 'USER_NOT_FOUND', message: 'User not found in database.' };
        }

        const planType = finalUserCredits.user_plan || 'free';
        const usageCount = finalUserCredits.usage_count || 0;

        // Plan Run Limits:
        // Free: 1 run
        if (planType === 'free') {
            if (usageCount >= 1) {
                return {
                    success: false,
                    error: 'RUN_LIMIT_EXCEEDED',
                    message: 'You have reached the limit of 1 run for the Free plan. Please upgrade to run more ideas.',
                    upgradeUrl: '/pricing'
                };
            }
            // Free plan bypasses credits check since they have 0 credits but get 1 run.
            return { success: true, remaining: 0 };
        }

        let remaining = finalUserCredits.credits_remaining;

        if (!finalUserCredits.id) {
            const planType = userCredits.user_plan || 'free';
            const total = PLAN_CREDITS[planType as keyof typeof PLAN_CREDITS] || 0;
            
            await sql`
                INSERT INTO user_credits (user_id, plan_type, credits_total)
                VALUES (${userId}, ${planType}, ${total})
                ON CONFLICT (user_id) DO NOTHING
            `;
            remaining = total;
        }

        // Premium (advanced) has unlimited runs
        if (planType === 'advanced') {
            return { success: true, remaining: remaining !== null && remaining !== undefined ? remaining : 250 };
        }

        // Basic and Medium check credits (each run is 100 credits)
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
        const [user] = await sql`SELECT plan_type FROM users WHERE id = ${userId}` as any[];
        const planType = user?.plan_type || 'free';

        // Free and Premium don't deduct credits for full analysis
        if (planType === 'free' || (planType === 'advanced' && actionType === 'validation')) {
            // Just insert the transaction but don't deduct credits
            await sql`
                INSERT INTO credit_transactions (user_id, action_type, credits_deducted, idea_id)
                VALUES (${userId}, ${actionType}, 0, ${ideaId || null})
            `;
            return { success: true };
        }

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
            SELECT c.credits_remaining, c.credits_total, u.plan_type, u.usage_count
            FROM users u
            LEFT JOIN user_credits c ON u.id = c.user_id
            WHERE u.id = ${userId}
        ` as any[];

        if (!userCredits) return null;

        const planType = userCredits.plan_type || 'free';
        const total = PLAN_CREDITS[planType as keyof typeof PLAN_CREDITS] || 0;

        return {
            credits_remaining: userCredits.credits_remaining !== null && userCredits.credits_remaining !== undefined ? userCredits.credits_remaining : total,
            credits_total: userCredits.credits_total !== null && userCredits.credits_total !== undefined ? userCredits.credits_total : total,
            plan_type: planType,
            usage_count: userCredits.usage_count || 0
        };
    } catch (error) {
        console.error('Error fetching user credits:', error);
        return null;
    }
}
