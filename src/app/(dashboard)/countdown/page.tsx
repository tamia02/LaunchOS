'use client'

import React, { useState } from 'react'
import { Card, CardTitle } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { ProgressBar } from '@/components/ui/ProgressBar'
import { Tag } from '@/components/ui/Tag'
import { Timer, CheckCircle2, Circle, Rocket, ChevronRight, ChevronLeft } from 'lucide-react'
import { cn } from '@/lib/utils'

// Mock Data Structure
const DAYS = [
    { day: 1, title: 'Deep Niche Research', tasks: ['Identify 3 micro-niches', 'Analyze r/startups for pain', 'Map competitor gaps'], done: true },
    { day: 2, title: 'Problem Validation', tasks: ['Draft 5 user questions', 'DM 10 potential users', 'Identify 2 paying markets'], done: true },
    { day: 3, title: 'MVP Blueprint', tasks: ['Define Week 1 core feature', 'Choose tech stack', 'Sketch paper wireframe'], done: false },
    { day: 4, title: 'Landing Page Setup', tasks: ['Buy domain', 'Write copy', 'Build waitlist form'], done: false },
    { day: 5, title: 'Cold Outreach', tasks: ['Send 20 cold DMs', 'Post on Twitter', 'Update waitlist'], done: false },
    // ... more days
]

export default function CountdownPage() {
    const [activeDay, setActiveDay] = useState(3)
    const currentDay = 2 // Day 2 is complete, Day 3 is active
    const progress = (currentDay / 30) * 100

    return (
        <div className="max-w-5xl mx-auto space-y-12">
            {/* Header & Progress */}
            <div className="space-y-6">
                <div className="flex justify-between items-end">
                    <div className="space-y-2">
                        <h1 className="text-3xl font-bold flex items-center gap-3">
                            <Timer className="w-8 h-8 text-accent" />
                            30-Day Launch
                        </h1>
                        <p className="text-text-secondary">Execution is everything. Follow the plan.</p>
                    </div>
                    <div className="text-right">
                        <p className="text-4xl font-mono font-bold text-accent">DAY {currentDay + 1}</p>
                        <p className="text-[10px] uppercase text-text-muted tracking-widest">28 Days Remaining</p>
                    </div>
                </div>

                <div className="space-y-2">
                    <div className="flex justify-between text-xs font-mono">
                        <span className="text-text-muted">LAUNCH PROGRESS</span>
                        <span className="text-accent">{progress.toFixed(0)}%</span>
                    </div>
                    <ProgressBar value={progress} className="h-3 shadow-[0_0_15px_rgba(200,241,53,0.1)]" />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Day Navigation */}
                <div className="space-y-4">
                    <CardTitle className="text-sm uppercase text-text-muted">The Timeline</CardTitle>
                    <div className="space-y-2 h-[500px] overflow-y-auto pr-2 no-scrollbar">
                        {DAYS.map((d) => (
                            <button
                                key={d.day}
                                onClick={() => setActiveDay(d.day)}
                                className={cn(
                                    "w-full text-left p-4 rounded-lg border transition-all flex items-center justify-between group",
                                    activeDay === d.day
                                        ? "bg-accent/10 border-accent/40 text-foreground"
                                        : "bg-tertiary border-white/5 text-text-secondary hover:border-white/15"
                                )}
                            >
                                <div className="flex items-center gap-4">
                                    <div className={cn(
                                        "w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-mono font-bold border",
                                        d.done ? "bg-success/20 border-success/40 text-success" : "bg-white/5 border-white/10"
                                    )}>
                                        {d.done ? <CheckCircle2 className="w-4 h-4" /> : d.day}
                                    </div>
                                    <div className="space-y-0.5">
                                        <p className="text-xs font-medium">{d.title}</p>
                                        <p className="text-[10px] text-text-muted">Day {d.day}</p>
                                    </div>
                                </div>
                                <ChevronRight className={cn(
                                    "w-4 h-4 transition-transform",
                                    activeDay === d.day ? "translate-x-1 text-accent" : "text-text-muted group-hover:translate-x-1"
                                )} />
                            </button>
                        ))}
                        <div className="py-8 text-center text-[10px] font-mono text-text-muted">
                            ... DAYS 6 - 30 COMING ...
                        </div>
                    </div>
                </div>

                {/* Task Detail */}
                <div className="md:col-span-2 space-y-6">
                    <CardTitle className="text-sm uppercase text-text-muted">Focus: Day {activeDay}</CardTitle>
                    {DAYS.find(d => d.day === activeDay) ? (
                        <Card className="p-8 space-y-8 bg-black/40 border-accent/10">
                            <div className="flex items-start justify-between">
                                <div>
                                    <h2 className="text-2xl font-bold">{DAYS.find(d => d.day === activeDay)?.title}</h2>
                                    <p className="text-text-secondary mt-1">Get these 3 things done today to stay on track.</p>
                                </div>
                                <Tag variant={DAYS.find(d => d.day === activeDay)?.done ? 'accent' : 'default'}>
                                    {DAYS.find(d => d.day === activeDay)?.done ? 'COMPLETE' : 'PENDING'}
                                </Tag>
                            </div>

                            <div className="space-y-4">
                                {DAYS.find(d => d.day === activeDay)?.tasks.map((task, i) => (
                                    <div key={i} className="flex items-center gap-4 p-5 rounded-xl bg-tertiary border border-white/5 group hover:border-accent/40 transition-all cursor-pointer">
                                        {DAYS.find(d => d.day === activeDay)?.done ? (
                                            <CheckCircle2 className="w-6 h-6 text-success" />
                                        ) : (
                                            <Circle className="w-6 h-6 text-text-muted group-hover:text-accent" />
                                        )}
                                        <span className={cn(
                                            "text-sm font-medium",
                                            DAYS.find(d => d.day === activeDay)?.done && "text-text-muted line-through"
                                        )}>
                                            {task}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            <div className="pt-8 flex justify-between items-center border-t border-white/5">
                                <div className="flex gap-4">
                                    <Rocket className="w-5 h-5 text-accent" />
                                    <p className="text-xs text-text-muted leading-relaxed">
                                        Tip: Don't spend more than 2 hours on research. <br />The goal is movement, not perfection.
                                    </p>
                                </div>
                                {!DAYS.find(d => d.day === activeDay)?.done && (
                                    <Button variant="primary">Mark Day as Complete</Button>
                                )}
                            </div>
                        </Card>
                    ) : (
                        <div className="flex flex-col items-center justify-center py-20 text-center border-2 border-dashed border-white/5 rounded-xl">
                            <Rocket className="w-12 h-12 text-text-muted mb-4 opacity-20" />
                            <p className="text-text-muted">The launch plan for Day {activeDay} is being finalized.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
