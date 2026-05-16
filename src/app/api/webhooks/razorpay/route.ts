import { NextResponse } from 'next/server';
import crypto from 'crypto';
import sql from '@/lib/db';
import { PLAN_CREDITS } from '@/lib/credits';

export async function POST(req: Request) {
    try {
        const bodyText = await req.text();
        const signature = req.headers.get('x-razorpay-signature') as string;
        const webhookSecret = process.env.RAZORPAY_WEBHOOK_SECRET as string;

        // Verify Signature
        const expectedSignature = crypto
            .createHmac('sha256', webhookSecret)
            .update(bodyText)
            .digest('hex');

        if (expectedSignature !== signature) {
            console.error('Razorpay Webhook Signature Mismatch');
            return NextResponse.json({ error: 'Invalid signature' }, { status: 400 });
        }

        const event = JSON.parse(bodyText);

        // Handle payment capture
        if (event.event === 'payment.captured' || event.event === 'order.paid') {
            const paymentEntity = event.payload.payment.entity;
            const notes = paymentEntity.notes;

            const userId = notes?.userId;
            const planType = notes?.planType;

            if (!userId || !planType) {
                console.error('Missing userId or planType in Razorpay webhook notes');
                return NextResponse.json({ error: 'Missing metadata' }, { status: 400 });
            }

            console.log(`Processing Razorpay payment for User: ${userId}, Plan: ${planType}`);

            // 1. Update user plan
            await sql`
                UPDATE users 
                SET plan_type = ${planType}
                WHERE id = ${userId}
            `;

            // 2. Refill credits
            const creditsToAdd = PLAN_CREDITS[planType as keyof typeof PLAN_CREDITS] || 500;
            
            await sql`
                INSERT INTO user_credits (user_id, plan_type, credits_total)
                VALUES (${userId}, ${planType}, ${creditsToAdd})
                ON CONFLICT (user_id) 
                DO UPDATE SET 
                    plan_type = EXCLUDED.plan_type,
                    credits_total = user_credits.credits_total + EXCLUDED.credits_total,
                    reset_date = CURRENT_TIMESTAMP
            `;

            console.log(`Successfully upgraded user ${userId} to ${planType} and added ${creditsToAdd} credits via Razorpay.`);
        }

        return NextResponse.json({ received: true });
    } catch (error: any) {
        console.error('Razorpay Webhook Error:', error);
        return NextResponse.json({ error: 'Webhook handler failed.' }, { status: 500 });
    }
}
