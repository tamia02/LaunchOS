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
    const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('monthly');
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

            // Load Razorpay Script dynamically to ensure it's available
            const isLoaded = await new Promise((resolve) => {
                if ((window as any).Razorpay) {
                    resolve(true);
                    return;
                }
                const script = document.createElement('script');
                script.src = 'https://checkout.razorpay.com/v1/checkout.js';
                script.onload = () => resolve(true);
                script.onerror = () => resolve(false);
                document.body.appendChild(script);
            });

            if (!isLoaded) {
                alert('Razorpay SDK failed to load. Please check your internet connection.');
                setLoadingPlan(null);
                return;
            }

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
                key: data.keyId || process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID, // Use dynamically returned key to avoid static build variables issue
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
            monthlyPrice: 599,
            yearlyPrice: 6299,
            monthlyDisplay: '₹599',
            yearlyDisplay: '₹6,299',
            monthlyEquivalent: '₹525',
            creditsMonthly: '300 Credits (3 Runs)',
            creditsYearly: '3,600 Credits (36 Runs)',
            features: [
                'Idea analysis runs',
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
            monthlyPrice: 799,
            yearlyPrice: 8199,
            monthlyDisplay: '₹799',
            yearlyDisplay: '₹8,199',
            monthlyEquivalent: '₹683',
            creditsMonthly: '500 Credits (5 Runs)',
            creditsYearly: '6,000 Credits (60 Runs)',
            features: [
                'Idea analysis runs',
                'Niche, Validation, MVP, Pricing, Progress (full)',
                'Outreach engine (partial)',
                'Competitor engine (partial)',
                'No PDF Export'
            ]
        },
        { 
            id: 'advanced', 
            name: 'Premium', 
            monthlyPrice: 1499,
            yearlyPrice: 14999,
            monthlyDisplay: '₹1,499',
            yearlyDisplay: '₹14,999',
            monthlyEquivalent: '₹1,249',
            creditsMonthly: '250 Credits/mo (Unlimited Runs)',
            creditsYearly: '3,000 Credits/yr (Unlimited Runs)',
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

            {/* Billing Period Toggle */}
            <div className="flex flex-col items-center gap-2 bg-surface-container/30 border border-white/5 rounded-2xl p-4 max-w-md mx-auto shadow-sm">
                <div className="inline-flex bg-surface-container border border-white/5 rounded-full p-1 relative shadow-inner">
                    <button 
                        onClick={() => setBillingPeriod('monthly')}
                        className={`px-5 py-2 rounded-full text-sm font-bold tracking-wide transition relative z-10 ${billingPeriod === 'monthly' ? 'bg-tertiary text-white shadow' : 'text-on-surface-variant hover:text-white'}`}
                    >
                        Monthly
                    </button>
                    <button 
                        onClick={() => setBillingPeriod('yearly')}
                        className={`px-5 py-2 rounded-full text-sm font-bold tracking-wide transition relative z-10 flex items-center gap-1.5 ${billingPeriod === 'yearly' ? 'bg-tertiary text-white shadow' : 'text-on-surface-variant hover:text-white'}`}
                    >
                        Yearly
                        <span className="bg-green-500/20 text-green-400 text-[10px] px-2 py-0.5 rounded-full font-extrabold uppercase tracking-wider">
                            Save ~15%
                        </span>
                    </button>
                </div>
                <p className="text-xs text-tertiary/75 font-semibold text-center mt-1">
                    🚀 Build for 12 months, not 12 days. Serious founders choose yearly.
                </p>
                <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 text-[11px] text-on-surface-variant/70 font-medium mt-1">
                    <span>✅ Save up to 16%</span>
                    <span>✅ Priority access</span>
                    <span>✅ Early feature releases</span>
                </div>
            </div>
 
            <div className="grid md:grid-cols-3 gap-6">
                {plans.map(plan => (
                    <div key={plan.id} className={`bg-surface-container border ${plan.id === 'medium' ? 'border-tertiary/50 shadow-[0_0_30px_rgba(103,156,255,0.1)]' : 'border-white/10'} rounded-2xl p-6 flex flex-col items-center text-center space-y-6 relative`}>
                        {plan.id === 'medium' && (
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-tertiary text-on-tertiary text-[10px] font-headline font-bold px-3 py-1 rounded-full uppercase tracking-widest whitespace-nowrap shadow-md">
                                Most Popular
                            </div>
                        )}
                        <div className="space-y-2 w-full">
                            <h2 className="text-xl font-bold text-white">{plan.name}</h2>
                            {billingPeriod === 'yearly' ? (
                                <div className="space-y-1">
                                    <div className="flex items-baseline justify-center gap-2">
                                        <p className="text-3xl font-black text-tertiary">{plan.yearlyDisplay}</p>
                                        <p className="text-xs text-on-surface-variant/40 line-through">
                                            {plan.id === 'basic' ? '₹7,188' : plan.id === 'medium' ? '₹9,588' : '₹17,988'}
                                        </p>
                                    </div>
                                    <p className="text-[11px] text-green-400 font-bold bg-green-500/10 px-2 py-0.5 rounded-full inline-block">
                                        Save {plan.id === 'basic' ? '₹889 (~12%)' : plan.id === 'medium' ? '₹1,389 (~14%)' : '₹2,989 (~16%)'}
                                    </p>
                                    <p className="text-xs text-on-surface-variant/70 font-semibold mt-1">
                                        ({plan.monthlyEquivalent}/mo billed yearly)
                                    </p>
                                </div>
                            ) : (
                                <div className="space-y-1">
                                    <p className="text-3xl font-black text-tertiary">{plan.monthlyDisplay}</p>
                                    <p className="text-sm text-on-surface-variant">per month</p>
                                </div>
                            )}
                        </div>
                        <div className="w-full h-px bg-white/5" />
                        <ul className="space-y-3 text-sm text-on-surface-variant flex-1 w-full text-left">
                            <li className="flex items-center gap-2 font-semibold text-white">
                                <span className="material-symbols-outlined text-tertiary text-sm">check_circle</span>
                                {billingPeriod === 'yearly' ? plan.creditsYearly : plan.creditsMonthly}
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
                            onClick={() => handleUpgrade(
                                billingPeriod === 'yearly' ? `${plan.id}_yearly` : plan.id, 
                                billingPeriod === 'yearly' ? plan.yearlyPrice : plan.monthlyPrice
                            )}
                            disabled={loadingPlan === (billingPeriod === 'yearly' ? `${plan.id}_yearly` : plan.id)}
                            className={`w-full py-3 rounded-lg font-bold tracking-wider hover:brightness-110 transition disabled:opacity-50 ${plan.id === 'medium' ? 'button-metallic text-on-primary' : 'bg-tertiary text-white'}`}
                        >
                            {loadingPlan === (billingPeriod === 'yearly' ? `${plan.id}_yearly` : plan.id) ? 'Processing...' : `Get ${plan.name}`}
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
                        placeholder="Enter code (e.g. PROMO10)" 
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
