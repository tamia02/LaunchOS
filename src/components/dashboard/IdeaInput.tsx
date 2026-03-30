'use client'

import React, { useState } from 'react'
import { Input } from '@/components/ui/Input'
import { LoadingSpinner } from '@/components/ui/LoadingSpinner'
import { useRouter } from 'next/navigation'
import { cn } from '@/lib/utils'

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
        <div className="w-full max-w-5xl mx-auto space-y-12">
            <div className="relative group perspective-1000">
                {/* Atmospheric Background Blur */}
                <div className="absolute -inset-8 bg-tertiary/5 rounded-[3rem] blur-[100px] opacity-0 group-focus-within:opacity-100 transition-opacity duration-1000 pointer-events-none" />

                {/* Main Input Container - No-Line Glassmorphism */}
                <div className="relative flex flex-col md:flex-row gap-6 p-4 bg-surface-container-low/60 rounded-[3rem] shadow-[0_60px_120px_rgba(0,0,0,0.6)] border border-white/5 transition-all duration-1000 custom-ease backdrop-blur-2xl group-focus-within:bg-surface-container-high/80 group-focus-within:scale-[1.01] hover:scale-[1.005]">

                    <div className="flex-1 flex items-center px-8 py-2">
                        <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-surface-variant/20 mr-6 shadow-inner glass-edge border border-white/5 group-focus-within:rotate-12 transition-transform duration-700">
                            <span className="material-symbols-outlined text-tertiary text-4xl shadow-[0_0_15px_rgba(103,156,255,0.4)]">terminal</span>
                        </div>
                        <div className="flex-1 flex flex-col pt-1">
                            <div className="flex items-center gap-3 mb-2">
                                <span className="text-[10px] font-black font-label text-tertiary uppercase tracking-[0.5em] italic">Intelligence_Sequence_Init</span>
                                <span className="w-1 h-3 bg-tertiary/40 rounded-full animate-pulse"></span>
                            </div>
                            <Input
                                value={idea}
                                onChange={(e) => setIdea(e.target.value)}
                                onKeyDown={(e) => e.key === 'Enter' && handleAnalyze()}
                                placeholder="Describe the future you're building..."
                                className="w-full bg-transparent border-none focus-visible:ring-0 h-16 text-3xl font-headline font-black italic tracking-tighter text-white placeholder:text-on-surface-variant/10 p-0 antialiased"
                                disabled={isLoading}
                            />
                        </div>
                    </div>

                    <button
                        onClick={handleAnalyze}
                        disabled={isLoading || !idea.trim()}
                        className={cn(
                            "button-metallic relative overflow-hidden px-14 py-8 rounded-[2.5rem] font-headline font-black text-sm uppercase tracking-[0.4em] italic shadow-[0_20px_50px_rgba(0,0,0,0.4)] active:scale-95 transition-all duration-500 custom-ease group/btn",
                            isLoading || !idea.trim() ? "opacity-50 grayscale cursor-not-allowed" : "hover:shadow-[0_30px_70px_rgba(103,156,255,0.3)] hover:-translate-y-1"
                        )}
                    >
                        {/* Button Glow Effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-[1500ms]" />

                        <div className="flex items-center justify-center relative z-10">
                            {isLoading ? (
                                <LoadingSpinner className="mr-4" />
                            ) : (
                                <span className="material-symbols-outlined mr-4 text-2xl font-black transition-transform group-hover/btn:rotate-12">bolt</span>
                            )}
                            <span className="antialiased">Execute_Analysis</span>
                            <span className="material-symbols-outlined ml-4 text-2xl font-black text-on-primary/30 group-hover/btn:translate-x-2 transition-transform duration-700">arrow_forward</span>
                        </div>
                    </button>
                </div>
            </div>

            {/* Status Telemetry */}
            <div className="flex flex-wrap justify-center items-center gap-12 opacity-30 px-6">
                <div className="flex items-center gap-4">
                    <div className="w-8 h-[1px] bg-on-surface-variant/20" />
                    <p className="text-[9px] font-black font-label text-on-surface-variant uppercase tracking-[0.5em] italic">Neural Protocol v.0.84</p>
                </div>
                <div className="flex items-center gap-4">
                    <div className="w-1 h-1 rounded-full bg-tertiary/40" />
                    <p className="text-[9px] font-black font-label text-on-surface-variant uppercase tracking-[0.5em] italic">Multi-Spike Synapse</p>
                </div>
                <div className="flex items-center gap-4">
                    <div className="w-1 h-1 rounded-full bg-tertiary/40" />
                    <p className="text-[9px] font-black font-label text-on-surface-variant uppercase tracking-[0.5em] italic">Precision Filtering</p>
                    <div className="w-8 h-[1px] bg-on-surface-variant/20" />
                </div>
            </div>
        </div>
    )
}
