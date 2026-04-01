'use client'

import React, { useState } from 'react'
import { Input } from '@/components/ui/Input'
import { LoadingSpinner } from '@/components/ui/LoadingSpinner'
import { useRouter } from 'next/navigation'
import { cn } from '@/lib/utils'

export function IdeaInput({ userId }: { userId: string }) {
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
                body: JSON.stringify({ idea, userId })
            })

            const data = await res.json()
            if (data.analysisId) {
                router.push(`/dashboard/analysis/${data.analysisId}`)
            }
        } catch (error) {
            console.error('Analysis failed:', error)
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className="w-full relative group max-w-4xl mx-auto">
            {/* Ambient Glow */}
            <div className="absolute -inset-2 bg-gradient-to-r from-tertiary/20 via-primary/10 to-tertiary/20 rounded-[2.5rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />
            
            <div className="relative flex flex-col md:flex-row items-stretch p-3 bg-surface-container-low/90 backdrop-blur-3xl rounded-[2rem] border border-outline-variant/15 shadow-[0_30px_60px_rgba(0,0,0,0.6)] glass-edge transition-all duration-500 group-focus-within:border-tertiary/30">
                <div className="flex-1 flex items-center px-6 gap-4 min-w-0">
                    <span className="material-symbols-outlined text-tertiary text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                        lightbulb
                    </span>
                    <input
                        type="text"
                        value={idea}
                        onChange={(e) => setIdea(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleAnalyze()}
                        placeholder="What's the startup idea keeping you up at night?"
                        className="w-full bg-transparent border-none focus-visible:ring-0 text-white placeholder:text-on-surface-variant/30 font-body text-lg py-5 selection:bg-tertiary/30"
                        disabled={isLoading}
                    />
                </div>
                
                <button
                    onClick={handleAnalyze}
                    disabled={isLoading || !idea.trim()}
                    className={cn(
                        "button-metallic px-10 py-5 rounded-[1.5rem] font-headline font-black text-sm tracking-tight transition-all duration-500 flex items-center justify-center gap-3 active:scale-95 disabled:opacity-50 disabled:grayscale",
                        isLoading ? "cursor-wait" : "hover:brightness-110 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]"
                    )}
                >
                    {isLoading ? (
                        <>
                            <span className="material-symbols-outlined animate-spin shadow-[0_0_20px_white]">refresh</span>
                            <span>SEQUENCING...</span>
                        </>
                    ) : (
                        <>
                            <span>EXECUTE_ANALYSIS</span>
                            <span className="material-symbols-outlined text-sm">arrow_forward</span>
                        </>
                    )}
                </button>
            </div>

            {/* Micro-Interaction Hint */}
            <div className="mt-8 flex justify-center gap-8 text-[9px] font-black tracking-[0.2em] font-label text-on-surface-variant/20 uppercase">
                <span className="flex items-center gap-2 decoration-tertiary/20 underline underline-offset-4">
                    <span className="w-1 h-1 rounded-full bg-tertiary/40" />
                    Neural Validation
                </span>
                <span className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-on-surface-variant/20" />
                    Market Synthesis
                </span>
                <span className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-on-surface-variant/20" />
                    Revenue Modeling
                </span>
            </div>
        </div>
    )
}
