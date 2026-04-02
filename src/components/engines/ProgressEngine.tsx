"use client"

import { useState, useEffect } from 'react'
import { Card } from "@/components/ui/Card"
import { Flame, Star, Target, CheckCircle2, ChevronRight, Activity, Zap, ShieldAlert, Sparkles } from 'lucide-react'

export function ProgressEngine({ data }: { data: any }) {
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])

    if (!isMounted) return <div className="h-64 flex items-center justify-center text-zinc-500">Loading UI...</div>

    return (
        <div className="space-y-6">
            {/* Top Row: Milestone Progress & Streak */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* 30-Day Journey Progress */}
                <Card className="lg:col-span-2 bg-black/40 border-cyan-500/30 p-8 backdrop-blur-md relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
                        <Activity className="w-48 h-48 text-cyan-400" />
                    </div>
                    <div className="relative z-10">
                        <div className="flex justify-between items-end mb-4">
                            <div>
                                <div className="flex items-center gap-2 mb-2 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
                                    <Target className="w-4 h-4" /> 30-Day Launch Plan
                                </div>
                                <h2 className="text-3xl font-black text-white tracking-wide">
                                    Day {data.days_completed} <span className="text-zinc-500 text-xl font-medium">/ 30</span>
                                </h2>
                            </div>
                            <div className="text-right">
                                <div className="text-[10px] text-zinc-400 font-bold uppercase tracking-widest mb-1">Phase</div>
                                <div className="text-lg text-white font-semibold">{data.current_phase}</div>
                            </div>
                        </div>

                        {/* Progress Bar */}
                        <div className="w-full bg-zinc-900 rounded-full h-3 mb-4 overflow-hidden border border-zinc-800">
                            <div 
                                className="bg-gradient-to-r from-cyan-600 to-cyan-400 h-3 rounded-full relative" 
                                style={{ width: `${Math.min(data.overall_progress || 0, 100)}%` }}
                            >
                                <div className="absolute top-0 right-0 bottom-0 w-8 bg-gradient-to-l from-white/30 to-transparent"></div>
                            </div>
                        </div>
                        <div className="flex justify-between text-xs text-zinc-500 font-medium">
                            <span>{data.overall_progress}% Completed</span>
                            <span>{data.days_remaining} Days Remaining</span>
                        </div>
                    </div>
                </Card>

                {/* Streak Card */}
                <Card className="lg:col-span-1 bg-gradient-to-br from-amber-500/20 to-orange-600/10 border-orange-500/30 p-6 flex flex-col justify-center items-center text-center relative overflow-hidden">
                    <Flame className="absolute top-4 right-4 w-16 h-16 text-orange-500/10 pointer-events-none" />
                    <div className="bg-orange-500/20 p-4 rounded-full mb-4">
                        <Flame className="w-8 h-8 text-orange-400" fill="currentColor" />
                    </div>
                    <div className="text-4xl font-black text-white mb-1 shadow-orange-500/50 drop-shadow-md">
                        {data.streak?.current_streak} Day Streak
                    </div>
                    <p className="text-orange-200/80 text-sm font-medium px-4">
                        {data.streak?.streak_message}
                    </p>
                </Card>
            </div>

            {/* Next Action Hero */}
            <Card className="bg-zinc-900/50 border-emerald-500/30 p-1">
                <div className="bg-emerald-500/5 border border-emerald-500/10 rounded-xl p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                    <div className="flex-1">
                        <div className="flex items-center gap-2 mb-3">
                            <span className="bg-emerald-500 text-zinc-950 text-[10px] font-black uppercase tracking-widest px-2 py-1 rounded">
                                Do This Right Now
                            </span>
                            <span className="text-zinc-500 text-xs font-mono">{data.next_action?.time_required}</span>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2 leading-tight">
                            {data.next_action?.action}
                        </h3>
                        <p className="text-emerald-200/70 text-sm">{data.next_action?.why_this}</p>
                    </div>
                    <div>
                        <button className="bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold py-3 px-8 rounded-xl shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] transition-all flex items-center gap-2 whitespace-nowrap">
                            <CheckCircle2 className="w-5 h-5" /> Mark Done
                        </button>
                    </div>
                </div>
            </Card>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Today's Full Task & Blockers */}
                <div className="space-y-6">
                    <Card className="bg-zinc-900/50 border-zinc-800 p-6">
                        <div className="flex items-center gap-2 mb-6">
                            <Target className="w-5 h-5 text-cyan-400" />
                            <h3 className="text-lg font-bold text-white">Today's Protocol (Day {data.todays_task?.day_number})</h3>
                        </div>
                        <div className="space-y-4">
                            <div>
                                <h4 className="text-white font-semibold mb-2">{data.todays_task?.title}</h4>
                                <p className="text-sm text-zinc-400 leading-relaxed bg-black/30 p-4 rounded-lg border border-zinc-800/50">{data.todays_task?.description}</p>
                            </div>
                            <div>
                                <div className="text-[10px] tracking-widest uppercase font-bold text-emerald-400 mb-2">Success Criteria</div>
                                <div className="text-sm text-zinc-300 flex items-start gap-2">
                                    <Star className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" />
                                    {data.todays_task?.success_criteria}
                                </div>
                            </div>
                        </div>
                    </Card>

                    {data.blockers && data.blockers.length > 0 && (
                        <Card className="bg-rose-950/20 border-rose-900/30 p-6">
                            <div className="flex items-center gap-2 mb-4">
                                <ShieldAlert className="w-5 h-5 text-rose-500" />
                                <h3 className="text-lg font-bold text-rose-100">Anticipated Blockers</h3>
                            </div>
                            <div className="space-y-4">
                                {data.blockers.map((b: any, i: number) => (
                                    <div key={i} className="bg-rose-950/40 p-4 rounded-lg border border-rose-900/50">
                                        <div className="text-rose-300 text-sm font-medium mb-2">{b.blocker}</div>
                                        <div className="flex items-start gap-2 text-xs text-emerald-400">
                                            <Zap className="w-3 h-3 mt-0.5 shrink-0" /> {b.solution}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </Card>
                    )}
                </div>

                {/* Milestones & Week Ahead */}
                <div className="space-y-6">
                    <Card className="bg-zinc-900/50 border-zinc-800 p-6">
                        <div className="flex items-center gap-2 mb-6">
                            <Sparkles className="w-5 h-5 text-purple-400" />
                            <h3 className="text-lg font-bold text-white">Major Milestones</h3>
                        </div>
                        <div className="space-y-4 relative before:absolute before:inset-0 before:ml-2.5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-zinc-800 before:to-transparent">
                            {data.milestones?.map((m: any, i: number) => {
                                const isCompleted = m.status === 'completed'
                                const isActive = m.status === 'active'
                                
                                return (
                                    <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                                        <div className={`flex items-center justify-center w-6 h-6 rounded-full border-2 bg-zinc-950 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-sm ${
                                            isCompleted ? 'border-emerald-500 text-emerald-500' : 
                                            isActive ? 'border-cyan-500 text-cyan-500' : 'border-zinc-700 text-zinc-700'
                                        }`}>
                                            {isCompleted ? <CheckCircle2 className="w-3 h-3" /> : <div className="w-1.5 h-1.5 rounded-full bg-current" />}
                                        </div>
                                        <div className={`w-[calc(100%-2.5rem)] md:w-[calc(50%-1.5rem)] p-3 rounded-lg border ${
                                            isActive ? 'bg-cyan-500/10 border-cyan-500/30' : 'bg-black/40 border-zinc-800/50'
                                        }`}>
                                            <div className="flex justify-between items-start mb-1">
                                                <h4 className={`text-sm font-bold ${isCompleted ? 'text-zinc-300' : isActive ? 'text-cyan-400' : 'text-zinc-500'}`}>{m.name}</h4>
                                                <span className="text-[9px] font-mono text-zinc-500">Day {m.target_day}</span>
                                            </div>
                                            {isCompleted && m.celebration_message && (
                                                <p className="text-[10px] text-emerald-400/80 mt-1 italic">"{m.celebration_message}"</p>
                                            )}
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </Card>

                    <Card className="bg-zinc-900/50 border-zinc-800 p-6">
                        <div className="flex items-center gap-2 mb-4">
                            <ChevronRight className="w-5 h-5 text-amber-400" />
                            <h3 className="text-lg font-bold text-white">Coming Up Next</h3>
                        </div>
                        <div className="flex gap-3 overflow-x-auto pb-2 no-scrollbar">
                            {data.week_ahead?.map((w: any, i: number) => (
                                <div key={i} className="min-w-[140px] bg-zinc-950 border border-zinc-800 rounded-lg p-3 shrink-0">
                                    <div className="text-[10px] text-zinc-500 font-mono mb-1">Day {w.day}</div>
                                    <div className="text-sm font-semibold text-zinc-300 mb-2 leading-tight">{w.title}</div>
                                    <div className="text-[9px] bg-zinc-800 text-zinc-400 inline-block px-1.5 py-0.5 rounded uppercase tracking-widest">{w.estimated_time}</div>
                                </div>
                            ))}
                        </div>
                    </Card>
                </div>
            </div>
            
            {/* Coach Message */}
            <div className="p-4 rounded-xl bg-gradient-to-r from-zinc-900 to-zinc-900/50 border border-zinc-800 text-center">
                <p className="text-sm text-zinc-400 italic">" {data.motivation_message} "</p>
            </div>
        </div>
    )
}
