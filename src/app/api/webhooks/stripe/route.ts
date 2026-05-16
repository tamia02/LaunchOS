import { NextResponse } from 'next/server';
import Stripe from 'stripe';
import sql from '@/lib/db';
import { PLAN_CREDITS } from '@/lib/credits';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
    apiVersion: '2023-10-16' as any,
});

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET as string;

export async function POST(req: Request) {
    try {
        const body = await req.text();
        const signature = req.headers.get('stripe-signature') as string;

        let event: Stripe.Event;

        try {
            event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
        } catch (err: any) {
            console.error(`Webhook signature verification failed.`, err.message);
            return NextResponse.json({ error: 'Webhook signature verification failed.' }, { status: 400 });
        }

        if (event.type === 'checkout.session.completed') {
            const session = event.data.object as Stripe.Checkout.Session;
            const userId = session.client_reference_id;
            
            // Assume you pass plan type in metadata
            const planType = session.metadata?.plan_type || 'basic'; 

            if (!userId) {
                console.error('No client_reference_id found in session.');
                return NextResponse.json({ error: 'Missing userId' }, { status: 400 });
            }

            console.log(`Processing successful payment for User: ${userId}, Plan: ${planType}`);

            // 1. Update user plan
            await sql`
                UPDATE users 
                SET plan_type = ${planType}, stripe_customer_id = ${session.customer as string}
                WHERE id = ${userId}
            `;

            // 2. Refill credits
            const creditsToAdd = PLAN_CREDITS[planType as keyof typeof PLAN_CREDITS] || 500;
            
            // Upsert into user_credits (in case they don't exist yet)
            await sql`
                INSERT INTO user_credits (user_id, plan_type, credits_total)
                VALUES (${userId}, ${planType}, ${creditsToAdd})
                ON CONFLICT (user_id) 
                DO UPDATE SET 
                    plan_type = EXCLUDED.plan_type,
                    credits_total = user_credits.credits_total + EXCLUDED.credits_total,
                    reset_date = CURRENT_TIMESTAMP
            `;

            console.log(`Successfully upgraded user ${userId} to ${planType} and added ${creditsToAdd} credits.`);
        }

        return NextResponse.json({ received: true });
    } catch (error: any) {
        console.error('Webhook Error:', error);
        return NextResponse.json({ error: 'Webhook handler failed.' }, { status: 500 });
    }
}
