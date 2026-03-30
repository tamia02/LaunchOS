'use client'

import React, { useState } from 'react'
import { Input } from '@/components/ui/Input'
import { Button } from '@/components/ui/Button'
import { LoadingSpinner } from '@/components/ui/LoadingSpinner'
import { useRouter } from 'next/navigation'

export function IdeaInput() {
    const [idea, setIdea] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const router = useRouter()

    const handleAnalyze = async () => {
        if (!idea.trim()) return
        setIsLoading(true)

        try {
            const res = await fetch('/api/analyze', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ idea, userId: 'dummy-user' })
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
        <div className="w-full max-w-3xl mx-auto space-y-6">
            <div className="relative group">
                <div className="absolute -inset-2 bg-gradient-to-r from-tertiary/20 to-primary/20 rounded-2xl blur-2xl opacity-0 group-focus-within:opacity-100 transition-opacity duration-1000" />
                <div className="relative flex flex-col md:flex-row gap-2 p-2 bg-surface-container-low rounded-2xl border border-outline-variant/15 shadow-[0px_20px_40px_rgba(0,0,0,0.5)] group-focus-within:border-tertiary/30 transition-all">
                    <div className="flex-1 flex items-center px-4">
                        <span className="material-symbols-outlined text-tertiary mr-3 shadow-[0_0_10px_rgba(103,156,255,0.3)]">lightbulb</span>
                        <Input
                            value={idea}
                            onChange={(e) => setIdea(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && handleAnalyze()}
                            placeholder="Enter your startup idea here..."
                            className="flex-1 bg-transparent border-none focus-visible:ring-0 h-14 text-lg italic"
                            disabled={isLoading}
                        />
                    </div>
                    <Button
                        onClick={handleAnalyze}
                        disabled={isLoading || !idea.trim()}
                        className="shadow-2xl"
                        variant="primary"
                    >
                        {isLoading ? (
                            <LoadingSpinner className="mr-2" />
                        ) : (
                            <span className="material-symbols-outlined mr-2 text-sm font-black">bolt</span>
                        )}
                        Analyze Idea
                        <span className="material-symbols-outlined ml-2 text-sm font-black text-on-primary/60">arrow_forward</span>
                    </Button>
                </div>
            </div>
            <p className="text-[9px] font-black font-label text-on-surface-variant/40 text-center uppercase tracking-[0.4em] italic">
                Proprietary AI Logic · 10 Engine Multi-Spike
            </p>
        </div>
    )
}
