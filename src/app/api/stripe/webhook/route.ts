import { NextResponse } from 'next/server'
import Stripe from 'stripe'
import { createClient } from '@/lib/supabase/server'
import { headers } from 'next/headers'

const getStripe = () => new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: '2026-03-25.dahlia',
})

export async function POST(req: Request) {
    const body = await req.text()
    const sig = (await headers()).get('stripe-signature')!

    let event: Stripe.Event

    const stripe = getStripe()
    try {
        event = stripe.webhooks.constructEvent(body, sig, process.env.STRIPE_WEBHOOK_SECRET!)
    } catch (err: any) {
        return NextResponse.json({ error: `Webhook Error: ${err.message}` }, { status: 400 })
    }

    const supabase = await createClient()

    switch (event.type) {
        case 'checkout.session.completed':
            const session = event.data.object as Stripe.Checkout.Session
            await (supabase as any)
                .from('users')
                .update({
                    plan_type: 'pro',
                    stripe_customer_id: session.customer as string,
                    stripe_subscription_id: session.subscription as string
                })
                .eq('id', session.metadata?.userId)
            break

        case 'customer.subscription.deleted':
            const subscription = event.data.object as Stripe.Subscription
            await (supabase as any)
                .from('users')
                .update({ plan_type: 'free' })
                .eq('stripe_subscription_id', subscription.id)
            break
    }

    return NextResponse.json({ received: true })
}
