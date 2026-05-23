'use client'

import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Script from 'next/script'

export default function PricingPage() {
    const [loadingPlan, setLoadingPlan] = useState<string | null>(null);
    const [promoCode, setPromoCode] = useState('');
    const [promoError, setPromoError] = useState('');
    const [promoSuccess, setPromoSuccess] = useState('');
    const [applyingPromo, setApplyingPromo] = useState(false);
    const router = useRouter();

    const handleApplyPromo = async () => {
        if (!promoCode.trim()) return;
        setApplyingPromo(true);
        setPromoError('');
        setPromoSuccess('');

        try {
            const res = await fetch('/api/promo/apply', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ promoCode: promoCode.trim(), planType: 'basic' })
            });

            const data = await res.json();
            if (res.ok) {
                setPromoSuccess(data.message || 'Promo code applied! Redirecting to dashboard...');
                setTimeout(() => {
                    router.push('/dashboard');
                }, 2000);
            } else {
                setPromoError(data.error || 'Failed to apply promo code.');
            }
        } catch (error) {
            console.error('Promo error:', error);
            setPromoError('An unexpected error occurred while applying the promo code.');
        } finally {
            setApplyingPromo(false);
        }
    };

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
        { 
            id: 'basic', 
            name: 'Basic', 
            price: '₹599', 
            credits: '300 Credits (3 Runs)', 
            amount: 599,
            features: [
                '3 ideas analyzed',
                'Niche engine (full)',
                'Validation engine (partial)',
                'MVP engine (partial)',
                'Pricing engine (partial)',
                'Progress engine (full)',
                'No PDF Export'
            ]
        },
        { 
            id: 'medium', 
            name: 'Medium', 
            price: '₹799', 
            credits: '500 Credits (5 Runs)', 
            amount: 799,
            features: [
                '5 ideas analyzed',
                'Niche, Validation, MVP, Pricing, Progress (full)',
                'Outreach engine (partial)',
                'Competitor engine (partial)',
                'No PDF Export'
            ]
        },
        { 
            id: 'advanced', 
            name: 'Premium', 
            price: '₹999', 
            credits: '250 Credits/mo (Unlimited Runs)', 
            amount: 999,
            features: [
                'Unlimited runs & validations',
                'All 10 engines fully unlocked',
                'Full outreach & competitors',
                'Full investor engine & YC app',
                'Export PDF reports'
            ]
        },
    ];

    return (
        <>
        <Script src="https://checkout.razorpay.com/v1/checkout.js" strategy="lazyOnload" />
        <div className="max-w-4xl mx-auto space-y-10 pt-10">
            <div className="text-center space-y-4">
                <h1 className="text-4xl font-headline font-black text-white tracking-tight">Upgrade Your Plan</h1>
                <p className="text-on-surface-variant max-w-xl mx-auto">Get more credits and unlock advanced analysis engines to validate your startup idea faster.</p>
            </div>
 
            <div className="grid md:grid-cols-3 gap-6">
                {plans.map(plan => (
                    <div key={plan.id} className={`bg-surface-container border ${plan.id === 'medium' ? 'border-tertiary/50 shadow-[0_0_30px_rgba(103,156,255,0.1)]' : 'border-white/10'} rounded-2xl p-6 flex flex-col items-center text-center space-y-6 relative`}>
                        {plan.id === 'medium' && (
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-tertiary text-on-tertiary text-[10px] font-headline font-bold px-3 py-1 rounded-full uppercase tracking-widest whitespace-nowrap shadow-md">
                                Most Popular
                            </div>
                        )}
                        <div className="space-y-2">
                            <h2 className="text-xl font-bold text-white">{plan.name}</h2>
                            <p className="text-3xl font-black text-tertiary">{plan.price}</p>
                            <p className="text-sm text-on-surface-variant">per month</p>
                        </div>
                        <div className="w-full h-px bg-white/5" />
                        <ul className="space-y-3 text-sm text-on-surface-variant flex-1 w-full text-left">
                            <li className="flex items-center gap-2 font-semibold text-white">
                                <span className="material-symbols-outlined text-tertiary text-sm">check_circle</span>
                                {plan.credits}
                            </li>
                            {plan.features.map((feature, idx) => (
                                <li key={idx} className="flex items-start gap-2">
                                    {feature.includes('No PDF') || feature.includes('locked') ? (
                                        <>
                                            <span className="material-symbols-outlined text-on-surface-variant/40 text-sm mt-0.5">lock</span>
                                            <span className="text-on-surface-variant/60">{feature}</span>
                                        </>
                                    ) : (
                                        <>
                                            <span className="material-symbols-outlined text-tertiary text-sm mt-0.5">check_circle</span>
                                            <span>{feature}</span>
                                        </>
                                    )}
                                </li>
                            ))}
                        </ul>
                        <button 
                            onClick={() => handleUpgrade(plan.id, plan.amount)}
                            disabled={loadingPlan === plan.id}
                            className={`w-full py-3 rounded-lg font-bold tracking-wider hover:brightness-110 transition disabled:opacity-50 ${plan.id === 'medium' ? 'button-metallic text-on-primary' : 'bg-tertiary text-white'}`}
                        >
                            {loadingPlan === plan.id ? 'Processing...' : `Get ${plan.name}`}
                        </button>
                    </div>
                ))}
            </div>

            {/* Promo Code section */}
            <div className="bg-surface-container border border-white/10 rounded-2xl p-6 max-w-md mx-auto space-y-4">
                <h3 className="text-lg font-bold text-white text-center">Have a promo code?</h3>
                <div className="flex gap-2">
                    <input 
                        type="text" 
                        placeholder="Enter code (e.g. LAUNCH14)" 
                        value={promoCode}
                        onChange={(e) => setPromoCode(e.target.value)}
                        className="flex-1 bg-surface-container-low border border-white/10 rounded-lg px-4 py-2 text-white placeholder:text-on-surface-variant/30 text-sm focus:border-tertiary focus:outline-none"
                        disabled={applyingPromo}
                    />
                    <button 
                        onClick={handleApplyPromo}
                        disabled={applyingPromo || !promoCode.trim()}
                        className="px-6 py-2 rounded-lg bg-tertiary text-white text-sm font-bold hover:bg-tertiary/90 transition disabled:opacity-50"
                    >
                        {applyingPromo ? 'Applying...' : 'Apply'}
                    </button>
                </div>
                {promoError && (
                    <p className="text-red-400 text-xs text-center">{promoError}</p>
                )}
                {promoSuccess && (
                    <p className="text-green-400 text-xs text-center">{promoSuccess}</p>
                )}
            </div>
        </div>
        </>
    )
}
