"use client"

import { useState, useEffect } from 'react'
import { Card } from "@/components/ui/Card"
import { Building2, FileText, ClipboardList } from 'lucide-react'

// Helper to highlight [FILL IN] tags
const formatYCAnswer = (text: string) => {
    if (!text) return null;
    const parts = text.split(/(\[FILL IN[^\]]*\])/g);
    return (
        <span className="whitespace-pre-wrap leading-relaxed text-zinc-300">
            {parts.map((part, i) => {
                if (part.startsWith('[FILL IN')) {
                    return (
                        <span key={i} className="inline-block px-1.5 py-0.5 mx-0.5 bg-rose-500/20 text-rose-300 border border-rose-500/30 rounded font-mono text-sm animate-pulse">
                            {part}
                        </span>
                    )
                }
                return <span key={i}>{part}</span>
            })}
        </span>
    )
}

export function YCEngine({ data }: { data: any }) {
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])

    if (!isMounted) return <div className="h-64 flex items-center justify-center text-zinc-500">Loading UI...</div>

    const renderQuestion = (question: string, answer: string) => (
        <div className="mb-8 pl-4 border-l-2 border-[#f26522]/30 hover:border-[#f26522] transition-colors">
            <h4 className="text-sm font-bold text-white mb-2">{question}</h4>
            <div className="text-sm font-medium">
                {formatYCAnswer(answer)}
            </div>
        </div>
    )

    return (
        <div className="max-w-4xl mx-auto space-y-6">
            {/* Header */}
            <Card className="bg-black/60 border-[#f26522]/30 p-8 backdrop-blur-md relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#f26522] to-transparent"></div>
                <div className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
                    <div>
                        <div className="flex items-center gap-3 mb-2">
                            <div className="p-2 rounded-lg bg-[#f26522]/10 text-[#f26522]">
                                <span className="font-bold text-xl tracking-tighter">Y</span>
                            </div>
                            <h2 className="text-2xl font-bold text-white tracking-wide">Y Combinator Application</h2>
                        </div>
                        <p className="text-sm text-zinc-400">Pre-filled application draft formulated by a simulated YC Alumni.</p>
                    </div>
                </div>
            </Card>

            <Card className="bg-zinc-900/40 border-zinc-800 p-8">
                {renderQuestion("Company name:", data.company_name)}
                {renderQuestion("Company url, if any:", "https://")}
                {renderQuestion("Describe what your company does in 50 characters or less.", data.one_liner)}
                
                <div className="my-10 h-px bg-zinc-800" />
                <h3 className="text-xl font-bold text-[#f26522] mb-6 flex items-center gap-2">
                    <Building2 className="w-5 h-5" /> Company
                </h3>
                
                {renderQuestion("What is your company going to make? Please describe your product and what it does. Also, tell us the next big product feature you will start work on.", data.what_do_you_do || data.what_does_company_do)}
                {renderQuestion("What is the core problem you are solving?", data.problem || data.the_problem)}
                {renderQuestion("Who are your target customers?", data.target_customers)}
                {renderQuestion("How do you or will you make money? Please describe your pricing and your current revenue.", data.how_you_make_money)}
                {renderQuestion("How much money have you raised?", data.money_raised)}
                {renderQuestion("If you have revenue, what was your revenue in the last full calendar month?", data.monthly_revenue)}
                {renderQuestion("If you have users, what is your growth rate?", data.growth_rate)}
                {renderQuestion("Who are your competitors, and what do you understand about your business that they don't?", data.competitors + "\n\n" + data.what_you_understand)}
                {renderQuestion("How will you get your first 1,000 customers?", data.first_1000_customers)}
                
                <div className="my-10 h-px bg-zinc-800" />
                <h3 className="text-xl font-bold text-[#f26522] mb-6 flex items-center gap-2">
                    <ClipboardList className="w-5 h-5" /> Idea
                </h3>
                
                {renderQuestion("Why did you pick this idea to work on?", data.why_this_idea)}
                {renderQuestion("How long have you been working on this? What have you built so far?", data.how_long_working)}
                {renderQuestion("Why is now the right time for this?", data.why_now)}
                {renderQuestion("What is your unfair advantage?", data.unfair_advantage)}
                {renderQuestion("Why YC?", data.yc_why)}

            </Card>
        </div>
    )
}
