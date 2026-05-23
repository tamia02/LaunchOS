import { NextResponse } from 'next/server';
import Razorpay from 'razorpay';
import { getCurrentUser } from '@/lib/actions/auth-actions';

const getRazorpay = () => new Razorpay({
    key_id: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || 'dummy_key_id',
    key_secret: process.env.RAZORPAY_KEY_SECRET || 'dummy_key_secret',
});

// Map plan types to amounts in paise (INR)
const PLAN_PRICES: Record<string, number> = {
    basic: 59900,   // ₹599
    medium: 79900,  // ₹799
    advanced: 99900 // ₹999
};

export async function POST(req: Request) {
    try {
        const user = await getCurrentUser();
        if (!user) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const { planType } = await req.json();

        if (!planType || !PLAN_PRICES[planType]) {
            return NextResponse.json({ error: 'Invalid plan type' }, { status: 400 });
        }

        const amount = PLAN_PRICES[planType];

        const razorpay = getRazorpay();
        const order = await razorpay.orders.create({
            amount,
            currency: 'INR',
            receipt: `receipt_${user.id}_${Date.now()}`,
            notes: {
                userId: user.id,
                planType: planType
            }
        });

        return NextResponse.json({ 
            id: order.id, 
            amount: order.amount, 
            currency: order.currency 
        });
    } catch (error: any) {
        console.error('Error creating Razorpay order:', error);
        return NextResponse.json({ error: 'Failed to create order' }, { status: 500 });
    }
}
