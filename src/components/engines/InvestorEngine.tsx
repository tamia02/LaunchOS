"use client"

import { useState, useEffect } from 'react'
import { Card } from "@/components/ui/Card"
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts'
import { Landmark, TrendingUp, AlertTriangle, CheckCircle2, Crosshair, DollarSign, Target, PieChart } from 'lucide-react'

export function InvestorEngine({ data }: { data: any }) {
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])

    if (!isMounted) return <div className="h-64 flex items-center justify-center text-zinc-500">Loading UI...</div>

    const radarData = [
        { subject: 'Market Size', A: data.dimension_scores?.market_size?.score || 0, fullMark: 10 },
        { subject: 'Problem Clarity', A: data.dimension_scores?.problem_clarity?.score || 0, fullMark: 10 },
        { subject: 'Solution Uniqueness', A: data.dimension_scores?.solution_uniqueness?.score || 0, fullMark: 10 },
        { subject: 'Business Model', A: data.dimension_scores?.business_model?.score || 0, fullMark: 10 },
        { subject: 'Go-To-Market', A: data.dimension_scores?.go_to_market?.score || 0, fullMark: 10 },
        { subject: 'Founder Fit', A: data.dimension_scores?.founder_market_fit?.score || 0, fullMark: 10 },
    ]

    return (
        <div className="space-y-6">
            {/* Score Hero */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="md:col-span-1 bg-black/40 border-cyan-500/30 p-8 backdrop-blur-md flex flex-col items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 to-transparent"></div>
                    <div className="relative z-10 text-center">
                        <div className="text-sm font-semibold tracking-widest text-cyan-400 uppercase mb-2">Readiness Score</div>
                        <div className="flex items-baseline justify-center gap-2 mb-2">
                            <span className="text-6xl font-black text-white">{data.overall_score || 0}</span>
                            <span className="text-2xl text-zinc-500 font-bold">/100</span>
                        </div>
                        <div className="inline-block px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-400 font-bold tracking-widest">
                            GRADE {data.grade}
                        </div>
                    </div>
                </Card>

                <Card className="md:col-span-2 bg-zinc-900/50 border-zinc-800 p-6 flex flex-col justify-center">
                    <div className="flex items-start gap-4">
                        <div className="p-3 bg-white/5 rounded-xl text-emerald-400 shrink-0">
                            <Landmark className="w-6 h-6" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-white mb-2">Investor Verdict</h3>
                            <p className="text-zinc-300 leading-relaxed mb-4">{data.verdict}</p>
                            <div className="bg-rose-500/5 border border-rose-500/20 rounded-lg p-3 inline-block">
                                <div className="flex items-center gap-2 text-rose-400 text-xs font-semibold uppercase tracking-wider mb-1">
                                    <AlertTriangle className="w-3 h-3" /> Red Flag Warning
                                </div>
                                <p className="text-rose-200/80 text-sm">{data.red_flag_for_investors}</p>
                            </div>
                        </div>
                    </div>
                </Card>
            </div>

            {/* Radar Chart & Dimensions */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <Card className="lg:col-span-1 bg-zinc-900/50 border-zinc-800 p-6 flex items-center justify-center min-h-[300px]">
                    <div className="w-full h-full min-h-[250px]">
                        <ResponsiveContainer width="100%" height="100%">
                            <RadarChart cx="50%" cy="50%" outerRadius="70%" data={radarData}>
                                <PolarGrid stroke="#3f3f46" />
                                <PolarAngleAxis dataKey="subject" tick={{ fill: '#a1a1aa', fontSize: 10 }} />
                                <PolarRadiusAxis angle={30} domain={[0, 10]} tick={false} axisLine={false} />
                                <Radar name="Score" dataKey="A" stroke="#06b6d4" fill="#06b6d4" fillOpacity={0.3} />
                            </RadarChart>
                        </ResponsiveContainer>
                    </div>
                </Card>
                <Card className="lg:col-span-2 bg-zinc-900/50 border-zinc-800 p-6">
                    <h3 className="text-sm font-semibold text-zinc-400 uppercase tracking-widest mb-4">Dimension Analysis</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {Object.entries(data.dimension_scores || {}).map(([key, value]: [string, any]) => (
                            <div key={key} className="bg-zinc-950/50 border border-zinc-800/50 p-4 rounded-xl">
                                <div className="flex justify-between items-center mb-2">
                                    <div className="text-zinc-200 font-medium capitalize">{key.replace(/_/g, ' ')}</div>
                                    <div className="text-cyan-400 font-bold">{value.score}/10</div>
                                </div>
                                <p className="text-xs text-zinc-400 mb-2">{value.reasoning}</p>
                                <div className="text-xs text-amber-400/90 border-t border-zinc-800/50 pt-2 flex items-start gap-1">
                                    <TrendingUp className="w-3 h-3 mt-0.5 shrink-0" /> {value.how_to_improve}
                                </div>
                            </div>
                        ))}
                    </div>
                </Card>
            </div>

            {/* Road to 90 & Thesis */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="bg-zinc-900/50 border-zinc-800 p-6">
                    <div className="flex items-center gap-2 mb-6">
                        <Target className="w-5 h-5 text-emerald-400" />
                        <h3 className="text-lg font-bold text-white">Road to 90 Score</h3>
                    </div>
                    <ul className="space-y-3">
                        {data.to_reach_90_score?.map((item: string, i: number) => (
                            <li key={i} className="flex items-start gap-3">
                                <div className="bg-emerald-500/10 text-emerald-400 rounded-full w-5 h-5 flex items-center justify-center shrink-0 mt-0.5">
                                    <CheckCircle2 className="w-4 h-4" />
                                </div>
                                <span className="text-sm text-zinc-300">{item}</span>
                            </li>
                        ))}
                    </ul>
                </Card>

                <Card className="bg-zinc-900/50 border-zinc-800 p-6">
                    <div className="space-y-6">
                        <div>
                            <div className="flex items-center gap-2 mb-2 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
                                <DollarSign className="w-4 h-4" /> Raise Recommendation
                            </div>
                            <div className="bg-zinc-950 rounded-lg border border-zinc-800 p-4 flex flex-col gap-2">
                                <div className="flex justify-between items-center border-b border-zinc-800 pb-2">
                                    <span className="text-sm text-zinc-500 font-medium">Target Mix</span>
                                    <span className="text-sm text-zinc-200 font-bold">{data.investor_type}</span>
                                </div>
                                <div className="flex justify-between items-center border-b border-zinc-800 pb-2">
                                    <span className="text-sm text-zinc-500 font-medium">Target Amount</span>
                                    <span className="text-sm text-emerald-400 font-bold">{data.raise_recommendation?.amount}</span>
                                </div>
                                <div className="flex justify-between items-center border-b border-zinc-800 pb-2">
                                    <span className="text-sm text-zinc-500 font-medium">Valuation Range</span>
                                    <span className="text-sm text-zinc-200 font-bold">{data.raise_recommendation?.valuation_range}</span>
                                </div>
                                <div className="flex justify-between items-center pt-1">
                                    <span className="text-sm text-zinc-500 font-medium">When to Raise</span>
                                    <span className="text-sm text-zinc-200 font-medium">{data.raise_recommendation?.when_to_raise}</span>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center gap-2 mb-2 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
                                <PieChart className="w-4 h-4" /> Use of Funds
                            </div>
                            <div className="space-y-2">
                                {data.use_of_funds?.map((uf: any, i: number) => (
                                    <div key={i} className="flex justify-between items-center bg-zinc-950 p-2 rounded border border-zinc-800/50">
                                        <span className="text-xs text-zinc-300">{uf.category}</span>
                                        <span className="text-xs font-mono text-cyan-500">{uf.percentage}%</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </Card>
            </div>
            
        </div>
    )
}
