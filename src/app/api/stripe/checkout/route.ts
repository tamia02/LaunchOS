import { NextResponse } from 'next/server'
import Stripe from 'stripe'
import sql from '@/lib/db'

const getStripe = () => new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: '2026-03-25.dahlia',
})

export async function POST(req: Request) {
    try {
        const { userId, planType } = await req.json()
        
        // Fetch user from Neon
        const [user] = await sql`
            SELECT email FROM users WHERE id = ${userId}
        `

        if (!user) {
            return NextResponse.json({ error: 'User not found' }, { status: 404 })
        }

        const stripe = getStripe()
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            customer_email: user.email,
            line_items: [
                {
                    price_data: {
                        currency: 'usd',
                        product_data: {
                            name: 'launchOS Pro Founder',
                            description: 'Unlimited AI analyses + PDF Exports + Priority Support',
                        },
                        unit_amount: 2900, // $29.00
                        recurring: { interval: 'month' },
                    },
                    quantity: 1,
                },
            ],
            mode: 'subscription',
            success_url: `${process.env.NEXT_PUBLIC_APP_URL}/dashboard?success=true`,
            cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/settings?canceled=true`,
            metadata: { userId },
        })

        return NextResponse.json({ url: session.url })
    } catch (error) {
        console.error('Stripe error:', error)
        return NextResponse.json({ error: 'Failed to create checkout session' }, { status: 500 })
    }
}
