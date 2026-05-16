'use client'

import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function PricingPage() {
    const [loadingPlan, setLoadingPlan] = useState<string | null>(null);
    const router = useRouter();

    useEffect(() => {
        // Load Razorpay script
        const script = document.createElement('script');
        script.src = 'https://checkout.razorpay.com/v1/checkout.js';
        script.async = true;
        document.body.appendChild(script);
    }, []);

    const handleUpgrade = async (planType: string, amount: number) => {
        try {
            setLoadingPlan(planType);

            // 1. Create Order on Backend
            const res = await fetch('/api/razorpay/order', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ planType })
            });

            const data = await res.json();

            if (!res.ok) {
                alert(data.error || 'Failed to initialize payment');
                setLoadingPlan(null);
                return;
            }

            // 2. Initialize Razorpay Checkout
            const options = {
                key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID, // Enter the Key ID generated from the Dashboard
                amount: data.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
                currency: data.currency,
                name: "LaunchOS",
                description: `Upgrade to ${planType.toUpperCase()} Plan`,
                order_id: data.id, // This is a sample Order ID. Pass the `id` obtained in the response of Step 1
                handler: function (response: any) {
                    // Payment successful callback
                    alert(`Payment successful! Payment ID: ${response.razorpay_payment_id}`);
                    router.push('/dashboard');
                },
                prefill: {
                    name: "Founder",
                    email: "founder@launchos.com",
                    contact: "9999999999"
                },
                theme: {
                    color: "#679cff"
                }
            };

            const rzp = new (window as any).Razorpay(options);
            
            rzp.on('payment.failed', function (response: any){
                alert(response.error.description);
            });

            rzp.open();
        } catch (error) {
            console.error(error);
            alert('Payment initialization failed');
        } finally {
            setLoadingPlan(null);
        }
    };

    const plans = [
        { id: 'basic', name: 'Basic', price: '₹499', credits: '500 Credits', amount: 499 },
        { id: 'medium', name: 'Medium', price: '₹799', credits: '2000 Credits', amount: 799 },
        { id: 'advanced', name: 'Advanced', price: '₹999', credits: '5000 Credits', amount: 999 },
    ];

    return (
        <div className="max-w-4xl mx-auto space-y-10 pt-10">
            <div className="text-center space-y-4">
                <h1 className="text-4xl font-headline font-black text-white tracking-tight">Upgrade Your Plan</h1>
                <p className="text-on-surface-variant max-w-xl mx-auto">Get more credits and unlock advanced analysis engines to validate your startup idea faster.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
                {plans.map(plan => (
                    <div key={plan.id} className="bg-surface-container border border-white/10 rounded-2xl p-6 flex flex-col items-center text-center space-y-6">
                        <div className="space-y-2">
                            <h2 className="text-xl font-bold text-white">{plan.name}</h2>
                            <p className="text-3xl font-black text-tertiary">{plan.price}</p>
                            <p className="text-sm text-on-surface-variant">per month</p>
                        </div>
                        <div className="w-full h-px bg-white/5" />
                        <ul className="space-y-3 text-sm text-on-surface-variant flex-1">
                            <li className="flex items-center gap-2"><span className="material-symbols-outlined text-green-400 text-sm">check_circle</span> {plan.credits}</li>
                            <li className="flex items-center gap-2"><span className="material-symbols-outlined text-green-400 text-sm">check_circle</span> Unlock Full Features</li>
                        </ul>
                        <button 
                            onClick={() => handleUpgrade(plan.id, plan.amount)}
                            disabled={loadingPlan === plan.id}
                            className="w-full py-3 rounded-lg bg-tertiary text-white font-bold tracking-wider hover:bg-tertiary/90 transition disabled:opacity-50"
                        >
                            {loadingPlan === plan.id ? 'Processing...' : `Get ${plan.name}`}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}
