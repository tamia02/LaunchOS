'use client'

import React, { useState } from 'react'
import { Input } from '@/components/ui/Input'
import { Button } from '@/components/ui/Button'
import { LoadingSpinner } from '@/components/ui/LoadingSpinner'
import { ArrowRight, Sparkles } from 'lucide-react'
import { useRouter } from 'next/navigation'

export function IdeaInput() {
    const [idea, setIdea] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const router = useRouter()

    const handleAnalyze = async () => {
        if (!idea.trim()) return
        setIsLoading(true)

        try {
            // Logic to call /api/analyze will be triggered here
            // For now, we simulate the delay and redirect to a mock analysis page
            // In a real scenario, we'd get the ID from the API
            const res = await fetch('/api/analyze', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ idea, userId: 'dummy-user' }) // Auth will handle this later
            })

            const data = await res.json()
            if (data.analysisId) {
                router.push(`/analysis/${data.analysisId}`)
            }
        } catch (error) {
            console.error('Analysis failed:', error)
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className="w-full max-w-2xl mx-auto space-y-4">
            <div className="relative group">
                <div className="absolute -inset-1 bg-accent/20 rounded-xl blur opacity-0 group-focus-within:opacity-100 transition duration-500" />
                <div className="relative flex gap-2 p-1 bg-tertiary rounded-xl border border-white/10 group-focus-within:border-accent/40 transition-all">
                    <Input
                        value={idea}
                        onChange={(e) => setIdea(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleAnalyze()}
                        placeholder="Describe your startup idea in one sentence..."
                        className="flex-1 bg-transparent border-none focus-visible:ring-0 h-14 text-lg"
                        disabled={isLoading}
                    />
                    <Button
                        onClick={handleAnalyze}
                        disabled={isLoading || !idea.trim()}
                        className="h-12 px-6"
                    >
                        {isLoading ? (
                            <LoadingSpinner className="mr-2" />
                        ) : (
                            <Sparkles className="w-4 h-4 mr-2" />
                        )}
                        Run Analysis
                        <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                </div>
            </div>
            <p className="text-[10px] font-mono text-text-muted text-center uppercase tracking-[2px]">
                Powered by 10 AI Startup Engines
            </p>
        </div>
    )
}
