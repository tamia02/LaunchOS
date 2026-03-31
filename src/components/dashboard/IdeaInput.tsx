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
                router.push(`/dashboard/analysis/${data.analysisId}`)
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
                <div className="relative flex flex-col md:flex-row gap-4 p-2 bg-surface-container-low/60 rounded-2xl shadow-xl border border-white/5 transition-all duration-1000 custom-ease backdrop-blur-2xl group-focus-within:bg-surface-container-high/80 group-focus-within:scale-[1.005] hover:bg-surface-container-low/80">

                    <div className="flex-1 flex items-center px-4 py-1">
                        <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-surface-variant/20 mr-4 shadow-inner glass-edge border border-white/5 transition-transform duration-700">
                            <span className="material-symbols-outlined text-tertiary text-xl shadow-[0_0_10px_rgba(103,156,255,0.4)]">terminal</span>
                        </div>
                        <div className="flex-1 flex flex-col pt-0">
                            <div className="flex items-center gap-2 mb-1">
                                <span className="text-[9px] font-black font-label text-tertiary uppercase tracking-[0.3em]">Intelligence_Sequence_Init</span>
                                <span className="w-1 h-2 bg-tertiary/40 rounded-full animate-pulse"></span>
                            </div>
                            <Input
                                value={idea}
                                onChange={(e) => setIdea(e.target.value)}
                                onKeyDown={(e) => e.key === 'Enter' && handleAnalyze()}
                                placeholder="Describe the future you're building..."
                                className="w-full bg-transparent border-none focus-visible:ring-0 h-10 text-xl font-headline font-black tracking-tighter text-white placeholder:text-on-surface-variant/10 p-0 antialiased"
                                disabled={isLoading}
                            />
                        </div>
                    </div>

                    <button
                        onClick={handleAnalyze}
                        disabled={isLoading || !idea.trim()}
                        className={cn(
                            "button-metallic relative overflow-hidden px-8 py-3 rounded-xl font-headline font-black text-[12px] uppercase tracking-[0.2em] shadow-lg active:scale-95 transition-all duration-500 custom-ease group/btn",
                            isLoading || !idea.trim() ? "opacity-50 grayscale cursor-not-allowed" : "hover:-translate-y-0.5"
                        )}
                    >
                        {/* Button Glow Effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-[1500ms]" />

                        <div className="flex items-center justify-center relative z-10">
                            {isLoading ? (
                                <LoadingSpinner className="mr-4" />
                            ) : (
                                <span className="material-symbols-outlined mr-2 text-xl font-black">bolt</span>
                            )}
                            <span className="antialiased">Execute_Analysis</span>
                            <span className="material-symbols-outlined ml-3 text-xl font-black text-on-primary/30 group-hover/btn:translate-x-1 transition-transform duration-700">arrow_forward</span>
                        </div>
                    </button>
                </div>
            </div>

            {/* Status Telemetry */}
            <div className="flex flex-wrap justify-center items-center gap-12 opacity-30 px-6">
                <div className="flex items-center gap-4">
                    <div className="w-8 h-[1px] bg-on-surface-variant/20" />
                    <p className="text-[9px] font-black font-label text-on-surface-variant uppercase tracking-widest">Neural Protocol v.0.84</p>
                </div>
                <div className="flex items-center gap-4">
                    <div className="w-1 h-1 rounded-full bg-tertiary/40" />
                    <p className="text-[9px] font-black font-label text-on-surface-variant uppercase tracking-widest">Multi-Spike Synapse</p>
                </div>
                <div className="flex items-center gap-4">
                    <div className="w-1 h-1 rounded-full bg-tertiary/40" />
                    <p className="text-[9px] font-black font-label text-on-surface-variant uppercase tracking-widest">Precision Filtering</p>
                    <div className="w-8 h-[1px] bg-on-surface-variant/20" />
                </div>
            </div>
        </div>
    )
}
