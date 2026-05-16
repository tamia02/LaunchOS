import React from 'react';
import Link from 'next/link';

interface LockedCardProps {
    feature: string;
    requiredPlan: 'Medium' | 'Advanced';
    price: string;
}

export function LockedCard({ feature, requiredPlan, price }: LockedCardProps) {
    return (
        <div className="relative overflow-hidden rounded-xl border border-white/5 bg-surface-container-low/50 p-6 flex flex-col items-center justify-center min-h-[160px] text-center">
            {/* Blurred background effect */}
            <div className="absolute inset-0 bg-surface-container-lowest/40 backdrop-blur-sm z-0"></div>
            
            {/* Content */}
            <div className="relative z-10 flex flex-col items-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center border border-white/10 shadow-lg">
                    <span className="material-symbols-outlined text-on-surface-variant/70 text-xl">lock</span>
                </div>
                
                <div className="space-y-1">
                    <h3 className="text-sm font-bold text-white tracking-wide">{feature}</h3>
                    <p className="text-xs text-on-surface-variant max-w-[250px]">
                        Unlock with the {requiredPlan} Plan
                    </p>
                </div>

                <Link 
                    href="/pricing"
                    className="mt-2 inline-flex items-center justify-center px-4 py-2 rounded-lg bg-tertiary/20 text-tertiary hover:bg-tertiary hover:text-white transition-all duration-300 text-[10px] font-black uppercase tracking-widest border border-tertiary/30 hover:border-tertiary shadow-[0_0_15px_rgba(103,156,255,0.15)]"
                >
                    Upgrade to {requiredPlan} — {price}
                </Link>
            </div>
        </div>
    );
}
