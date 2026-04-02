"use client"

import { useState, useEffect } from 'react'
import { Card } from "@/components/ui/Card"
import { Tag as Badge } from '@/components/ui/Tag'
import { Swords, Target, Crosshair, ShieldAlert, Zap, AlertCircle, MessageSquare, Lightbulb, Rocket, MonitorPlay } from 'lucide-react'

// Extracted from page.tsx data structure
interface Competitor {
    name: string
    website: string
    what_they_do: string
    pricing: string
    founded: string
    traction_signal: string
    biggest_weakness: string
    top_user_complaint: string
    your_attack_angle: string
}

interface CompetitorData {
    project_name?: string
    competitors: Competitor[]
    market_gap: string
    positioning_statement: string
    blue_ocean_opportunity: string
    dont_compete_on: string
    win_on: string
    competitive_moat: string
    messaging_angles: string[]
    pricing_gap: string
}

export function CompetitorEngine({ data }: { data: CompetitorData }) {
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])

    if (!isMounted) return <div className="h-64 flex items-center justify-center text-zinc-500">Loading UI...</div>

    return (
        <div className="space-y-6">
            {/* Hero / Positioning Statement */}
            <Card className="bg-black/40 border-cyan-500/30 p-8 backdrop-blur-md relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-transparent to-transparent opacity-50 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="p-3 rounded-xl bg-cyan-500/20 text-cyan-400">
                            <Target className="w-6 h-6" />
                        </div>
                        <h2 className="text-2xl font-bold text-white tracking-wide">Positioning Statement</h2>
                    </div>
                    <p className="text-xl text-zinc-100 font-medium leading-relaxed mb-6">
                        "{data.positioning_statement}"
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800">
                            <div className="flex items-center gap-2 mb-2 text-rose-400">
                                <ShieldAlert className="w-4 h-4" />
                                <span className="font-semibold text-sm tracking-widest uppercase">Don't Compete On</span>
                            </div>
                            <p className="text-zinc-300 text-sm">{data.dont_compete_on}</p>
                        </div>
                        <div className="p-4 rounded-xl bg-cyan-500/10 border border-cyan-500/30">
                            <div className="flex items-center gap-2 mb-2 text-cyan-400">
                                <Swords className="w-4 h-4" />
                                <span className="font-semibold text-sm tracking-widest uppercase">Win On</span>
                            </div>
                            <p className="text-zinc-100 font-medium text-sm">{data.win_on}</p>
                        </div>
                    </div>
                </div>
            </Card>

            {/* Competitor Grid */}
            <div>
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2 pt-4">
                    <MonitorPlay className="w-5 h-5 text-amber-400" />
                    Market Landscape 
                    <span className="text-sm font-normal text-zinc-500 ml-2">({data.competitors?.length || 0} Key Players)</span>
                </h3>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {data.competitors?.map((comp, idx) => (
                        <Card key={idx} className="bg-zinc-900/50 border-zinc-800 p-6 flex flex-col justify-between">
                            <div>
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <h4 className="text-lg font-bold text-white">{comp.name}</h4>
                                        <a href={`https://${comp.website}`} target="_blank" rel="noreferrer" className="text-xs text-zinc-500 hover:text-cyan-400 transition-colors">
                                            {comp.website}
                                        </a>
                                    </div>
                                    <Badge variant="outline" className="bg-zinc-800/50 text-amber-300 border-amber-900/50 font-mono">
                                        {comp.pricing}
                                    </Badge>
                                </div>
                                <p className="text-sm text-zinc-400 border-l-2 border-zinc-800 pl-3 mb-6 leading-relaxed">
                                    {comp.what_they_do}
                                </p>
                                
                                <div className="space-y-4 mb-6">
                                    <div className="bg-rose-500/5 border border-rose-500/20 rounded-lg p-3">
                                        <div className="flex items-center gap-2 text-rose-400 text-xs font-semibold uppercase tracking-wider mb-2">
                                            <MessageSquare className="w-3 h-3" /> User Complaint
                                        </div>
                                        <p className="text-zinc-300 text-sm italic">
                                            {comp.top_user_complaint}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-4 border-t border-zinc-800 mt-auto">
                                <div className="flex items-center gap-2 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-2">
                                    <Crosshair className="w-3 h-3" /> Attack Angle
                                </div>
                                <p className="text-zinc-200 text-sm font-medium">
                                    {comp.your_attack_angle}
                                </p>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>

            {/* Market Opportunities */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                <Card className="bg-zinc-900/50 border-zinc-800/80 p-6 flex flex-col">
                    <div className="flex items-center gap-2 mb-4 text-emerald-400 font-semibold tracking-wider text-sm uppercase">
                        <Lightbulb className="w-4 h-4" /> Blue Ocean Opportunity
                    </div>
                    <p className="text-zinc-300 text-sm sm:text-base leading-relaxed mb-6 flex-1">
                        {data.blue_ocean_opportunity}
                    </p>
                    <div className="bg-zinc-950/50 rounded-lg p-4 border border-zinc-800/50 mt-auto">
                        <div className="text-xs text-zinc-500 uppercase tracking-widest mb-1">Pricing Gap</div>
                        <div className="text-zinc-200 text-sm font-medium">{data.pricing_gap}</div>
                    </div>
                </Card>

                <Card className="bg-zinc-900/50 border-zinc-800/80 p-6 flex flex-col">
                    <div className="flex items-center gap-2 mb-4 text-purple-400 font-semibold tracking-wider text-sm uppercase">
                        <Rocket className="w-4 h-4" /> Messaging Angles
                    </div>
                    <ul className="space-y-3 mb-6 flex-1">
                        {data.messaging_angles?.map((angle, i) => (
                            <li key={i} className="flex items-start gap-3 bg-zinc-950/30 rounded-lg p-3 border border-zinc-800/30">
                                <div className="bg-purple-500/20 text-purple-400 rounded-full w-5 h-5 flex items-center justify-center text-xs mt-0.5">
                                    {i + 1}
                                </div>
                                <span className="text-sm text-zinc-200">{angle}</span>
                            </li>
                        ))}
                    </ul>
                    <div className="bg-zinc-950/50 rounded-lg p-4 border border-zinc-800/50 mt-auto">
                        <div className="text-xs text-zinc-500 uppercase tracking-widest mb-1">Competitive Moat</div>
                        <div className="text-zinc-200 text-sm font-medium">{data.competitive_moat}</div>
                    </div>
                </Card>
            </div>
        </div>
    )
}
