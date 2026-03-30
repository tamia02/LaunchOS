'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { LoadingSpinner } from '@/components/ui/LoadingSpinner'
import { ArrowRight, Lock, Mail } from 'lucide-react'

export default function LoginPage() {
    const [loading, setLoading] = useState(false)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)
        // Supabase auth logic will go here
        setTimeout(() => setLoading(false), 1500)
    }

    return (
        <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6 bg-[radial-gradient(circle_at_top,_#1a1a1a_0%,_#0a0a0a_50%)]">
            <div className="w-full max-w-md space-y-8">
                <div className="text-center space-y-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-accent rounded-xl mx-auto shadow-[0_0_20px_rgba(200,241,53,0.2)]">
                        <span className="text-black font-mono font-bold text-2xl">L</span>
                    </div>
                    <h1 className="text-3xl font-bold tracking-tight">Welcome back</h1>
                    <p className="text-text-muted text-sm">Enter your credentials to access your launchOS dashboard.</p>
                </div>

                <Card className="p-8 space-y-6 bg-secondary/50 backdrop-blur-sm border-white/5 shadow-2xl">
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="space-y-2">
                            <label className="text-[10px] uppercase font-bold text-text-muted tracking-widest pl-1">Email Address</label>
                            <div className="relative">
                                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
                                <Input type="email" placeholder="name@example.com" className="pl-10 h-12 bg-black/40" required />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <div className="flex justify-between items-center pl-1">
                                <label className="text-[10px] uppercase font-bold text-text-muted tracking-widest">Password</label>
                                <Link href="#" className="text-[10px] uppercase font-bold text-accent hover:underline">Forgot?</Link>
                            </div>
                            <div className="relative">
                                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
                                <Input type="password" placeholder="••••••••" className="pl-10 h-12 bg-black/40" required />
                            </div>
                        </div>
                        <Button className="w-full h-12 mt-4" disabled={loading}>
                            {loading ? <LoadingSpinner className="mr-2" /> : "Sign In to launchOS"}
                            {!loading && <ArrowRight className="w-4 h-4 ml-2" />}
                        </Button>
                    </form>

                    <div className="relative">
                        <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-white/5"></div></div>
                        <div className="relative flex justify-center text-[10px] uppercase font-bold tracking-widest">
                            <span className="bg-secondary px-3 text-text-muted">Or continue with</span>
                        </div>
                    </div>

                    <Button variant="secondary" className="w-full h-12 bg-black/40 border-white/10">
                        <img src="https://www.google.com/favicon.ico" className="w-4 h-4 mr-2" alt="Google" />
                        Continue with Google
                    </Button>
                </Card>

                <p className="text-center text-sm text-text-secondary">
                    Don't have an account?{' '}
                    <Link href="/signup" className="text-accent font-bold hover:underline">
                        Get Started
                    </Link>
                </p>
            </div>

            <div className="mt-12 flex gap-4 text-[10px] text-text-muted uppercase tracking-widest font-mono">
                <Link href="#">Terms</Link>
                <span>•</span>
                <Link href="#">Privacy</Link>
                <span>•</span>
                <Link href="#">Status</Link>
            </div>
        </div>
    )
}
