'use client'

import React from 'react'
import { cn } from '@/lib/utils'

const engines = [
    { id: 'niche', name: 'Niche', number: '01' },
    { id: 'validation', name: 'Validation', number: '02' },
    { id: 'mvp', name: 'MVP', number: '03' },
    { id: 'pricing', name: 'Pricing', number: '04' },
    { id: 'outreach', name: 'Outreach', number: '05' },
    { id: 'competitor', name: 'Competitors', number: '06' },
    { id: 'investor', name: 'Investor', number: '07' },
    { id: 'yc', name: 'YC App', number: '08' },
    { id: 'pivot', name: 'Pivot', number: '09' },
    { id: 'progress', name: 'Progress', number: '10' },
]

interface EngineTabsProps {
    activeTab: string
    onTabChange: (id: string) => void
}

export function EngineTabs({ activeTab, onTabChange }: EngineTabsProps) {
    return (
        <div className="flex items-center gap-1 overflow-x-auto pb-4 no-scrollbar border-b border-white/5">
            {engines.map((engine) => {
                const isActive = activeTab === engine.id

                return (
                    <button
                        key={engine.id}
                        onClick={() => onTabChange(engine.id)}
                        className={cn(
                            "flex flex-col items-start gap-1 px-5 py-3 transition-all min-w-[120px] relative h-full",
                            isActive
                                ? "bg-black text-foreground"
                                : "bg-tertiary text-text-muted hover:text-text-secondary"
                        )}
                    >
                        <span className={cn(
                            "text-[10px] font-mono",
                            isActive ? "text-accent" : "text-text-muted"
                        )}>
                            {engine.number}
                        </span>
                        <span className="text-sm font-medium whitespace-nowrap">
                            {engine.name}
                        </span>
                        {isActive && (
                            <div className="absolute inset-x-0 bottom-0 h-0.5 bg-accent" />
                        )}
                    </button>
                )
            })}
        </div>
    )
}
