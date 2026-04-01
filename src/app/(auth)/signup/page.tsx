'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { LoadingSpinner } from '@/components/ui/LoadingSpinner'
import { ArrowRight, UserPlus, Mail, Lock, User } from 'lucide-react'

import { signup } from '@/lib/actions/auth-actions'
import { useRouter } from 'next/navigation'
import { signIn } from 'next-auth/react'

export default function SignupPage() {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const router = useRouter()

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setLoading(true)
        setError(null)
        
        const formData = new FormData(e.currentTarget)
        const result = await signup(formData)

        if (result.success) {
            router.push('/dashboard')
            router.refresh()
        } else {
            setError(result.error || 'Signup failed')
            setLoading(false)
        }
    }

    return (
        <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6 bg-[radial-gradient(circle_at_top,_#1a1a1a_0%,_#0a0a0a_50%)]">
            <div className="w-full max-w-md space-y-8">
                <div className="text-center space-y-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-accent rounded-xl mx-auto shadow-[0_0_20px_rgba(200,241,53,0.2)]">
                        <span className="text-black font-mono font-bold text-2xl">L</span>
                    </div>
                    <h1 className="text-3xl font-bold tracking-tight">Create your account</h1>
                    <p className="text-text-muted text-sm">Start your 30-day launch journey today.</p>
                </div>

                <Card className="p-8 space-y-6 bg-secondary/50 backdrop-blur-sm border-white/5 shadow-2xl">
                    <form onSubmit={handleSubmit} className="space-y-4">
                        {error && (
                            <div className="p-3 bg-error/10 border border-error/20 rounded-lg text-error text-xs font-bold text-center">
                                {error}
                            </div>
                        )}
                        <div className="space-y-2">
                            <label className="text-[10px] uppercase font-bold text-text-muted tracking-widest pl-1">Full Name</label>
                            <div className="relative">
                                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
                                <Input name="name" type="text" placeholder="John Doe" className="pl-10 h-12 bg-black/40" required />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-[10px] uppercase font-bold text-text-muted tracking-widest pl-1">Email Address</label>
                            <div className="relative">
                                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
                                <Input name="email" type="email" placeholder="name@example.com" className="pl-10 h-12 bg-black/40" required />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-[10px] uppercase font-bold text-text-muted tracking-widest pl-1">Password</label>
                            <div className="relative">
                                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
                                <Input name="password" type="password" placeholder="••••••••" className="pl-10 h-12 bg-black/40" required />
                            </div>
                        </div>

                        <div className="pt-2">
                            <p className="text-[10px] text-text-muted leading-relaxed">
                                By clicking sign up, you agree to our <Link href="#" className="underline text-accent">Terms of Service</Link> and <Link href="#" className="underline text-accent">Privacy Policy</Link>.
                            </p>
                        </div>

                        <Button className="w-full h-12 mt-4" disabled={loading}>
                            {loading ? <LoadingSpinner className="mr-2" /> : "Start Launching Now"}
                            {!loading && <ArrowRight className="w-4 h-4 ml-2" />}
                        </Button>
                    </form>

                    <div className="relative">
                        <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-white/5"></div></div>
                        <div className="relative flex justify-center text-[10px] uppercase font-bold tracking-widest">
                            <span className="bg-secondary px-3 text-text-muted">Or continue with</span>
                        </div>
                    </div>

                    <Button 
                        variant="secondary" 
                        className="w-full h-12 bg-black/40 border-white/10"
                        onClick={() => signIn('google', { callbackUrl: '/dashboard' })}
                        type="button"
                    >
                        <img src="https://www.google.com/favicon.ico" className="w-4 h-4 mr-2" alt="Google" />
                        Sign up with Google
                    </Button>
                </Card>

                <p className="text-center text-sm text-text-secondary">
                    Already have an account?{' '}
                    <Link href="/login" className="text-accent font-bold hover:underline">
                        Sign In
                    </Link>
                </p>
            </div>
        </div>
    )
}
