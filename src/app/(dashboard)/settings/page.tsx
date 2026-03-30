'use client'

import React from 'react'
import { Card, CardTitle, CardDescription } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { Settings as SettingsIcon, User, CreditCard, Shield, Zap, ExternalLink } from 'lucide-react'

export default function SettingsPage() {
    return (
        <div className="max-w-4xl mx-auto space-y-12">
            <div className="flex items-end border-b border-white/5 pb-8">
                <div className="space-y-2">
                    <h1 className="text-3xl font-bold flex items-center gap-3">
                        <SettingsIcon className="w-8 h-8 text-accent" />
                        Settings
                    </h1>
                    <p className="text-text-secondary">Manage your profile, billing, and system preferences.</p>
                </div>
            </div>

            <div className="space-y-8">
                {/* Profile */}
                <section className="space-y-6">
                    <div className="flex items-center gap-2">
                        <User className="w-4 h-4 text-accent" />
                        <h2 className="text-sm font-mono uppercase tracking-[2px]">Account Profile</h2>
                    </div>
                    <Card className="grid grid-cols-1 md:grid-cols-2 gap-6 p-8">
                        <div className="space-y-2">
                            <label className="text-[10px] uppercase text-text-muted font-bold tracking-widest">Full Name</label>
                            <Input defaultValue="The Founder" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-[10px] uppercase text-text-muted font-bold tracking-widest">Email Address</label>
                            <Input defaultValue="founder@example.com" disabled />
                        </div>
                        <div className="md:col-span-2 pt-4">
                            <Button size="sm">Update Profile</Button>
                        </div>
                    </Card>
                </section>

                {/* Subscription */}
                <section className="space-y-6">
                    <div className="flex items-center gap-2">
                        <CreditCard className="w-4 h-4 text-accent" />
                        <h2 className="text-sm font-mono uppercase tracking-[2px]">Subscription & Billing</h2>
                    </div>
                    <Card className="p-8">
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                            <div className="space-y-2">
                                <div className="flex items-center gap-3">
                                    <h3 className="text-xl font-bold">Explorer Plan</h3>
                                    <span className="px-2 py-0.5 rounded-full bg-accent/10 border border-accent/20 text-[9px] text-accent font-bold uppercase">Active</span>
                                </div>
                                <p className="text-sm text-text-secondary">You currently have 1 analysis left for this month.</p>
                            </div>
                            <Button variant="primary">
                                <Zap className="w-4 h-4 mr-2" />
                                Upgrade to Pro
                            </Button>
                        </div>
                        <div className="mt-8 pt-8 border-t border-white/5">
                            <button className="text-xs text-text-muted hover:text-foreground flex items-center gap-2 transition-colors">
                                <ExternalLink className="w-3 h-3" />
                                Manage billing in Stripe portal
                            </button>
                        </div>
                    </Card>
                </section>

                {/* System & Security */}
                <section className="space-y-6">
                    <div className="flex items-center gap-2">
                        <Shield className="w-4 h-4 text-accent" />
                        <h2 className="text-sm font-mono uppercase tracking-[2px]">System Status</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Card className="p-6 bg-tertiary">
                            <div className="flex justify-between items-center">
                                <div className="space-y-1">
                                    <p className="text-xs font-bold">Database Connection</p>
                                    <p className="text-[10px] text-text-muted">Supabase Realtime</p>
                                </div>
                                <div className="w-2 h-2 rounded-full bg-success shadow-[0_0_8px_rgba(34,197,94,0.5)]" />
                            </div>
                        </Card>
                        <Card className="p-6 bg-tertiary">
                            <div className="flex justify-between items-center">
                                <div className="space-y-1">
                                    <p className="text-xs font-bold">AI Engine Status</p>
                                    <p className="text-[10px] text-text-muted">OpenAI GPT-4o</p>
                                </div>
                                <div className="w-2 h-2 rounded-full bg-success shadow-[0_0_8px_rgba(34,197,94,0.5)]" />
                            </div>
                        </Card>
                    </div>
                </section>
            </div>
        </div>
    )
}
