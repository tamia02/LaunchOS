import React from 'react'
import Link from 'next/link'
import { Book, FileText, Zap, Shield, ArrowRight } from 'lucide-react'

export default function DocsPage() {
    return (
        <div className="min-h-screen bg-[#0A0A0A] text-[#FAFAFA] font-sans pt-24 pb-24">
            <div className="max-w-4xl mx-auto px-6">
                
                <div className="mb-16 text-center space-y-4">
                    <h1 className="text-4xl md:text-5xl font-bold font-headline tracking-tighter">Documentation</h1>
                    <p className="text-[#888888] text-lg max-w-2xl mx-auto">Everything you need to know about using launchOS to validate and build your startup.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-16">
                    <Link href="#getting-started" className="bg-[#111111] p-8 rounded-2xl border border-white/5 hover:border-[#C8F135]/50 transition-colors group">
                        <Zap className="w-8 h-8 text-[#C8F135] mb-4 group-hover:animate-pulse" />
                        <h3 className="text-xl font-bold mb-2">Getting Started</h3>
                        <p className="text-[#888888] text-sm mb-6">Learn how to run your first AI analysis and understand the results.</p>
                        <span className="text-[#C8F135] text-sm font-bold flex items-center gap-1 group-hover:gap-2 transition-all">Read Guide <ArrowRight className="w-4 h-4" /></span>
                    </Link>

                    <Link href="#engines" className="bg-[#111111] p-8 rounded-2xl border border-white/5 hover:border-blue-500/50 transition-colors group">
                        <Book className="w-8 h-8 text-blue-400 mb-4 group-hover:animate-pulse" />
                        <h3 className="text-xl font-bold mb-2">The 10 Engines</h3>
                        <p className="text-[#888888] text-sm mb-6">Deep dive into Niche, Validation, MVP, Pricing, and Outreach engines.</p>
                        <span className="text-blue-400 text-sm font-bold flex items-center gap-1 group-hover:gap-2 transition-all">Explore Engines <ArrowRight className="w-4 h-4" /></span>
                    </Link>

                    <Link href="#billing" className="bg-[#111111] p-8 rounded-2xl border border-white/5 hover:border-purple-500/50 transition-colors group">
                        <FileText className="w-8 h-8 text-purple-400 mb-4 group-hover:animate-pulse" />
                        <h3 className="text-xl font-bold mb-2">Credits & Billing</h3>
                        <p className="text-[#888888] text-sm mb-6">Understand how credits work, top-ups, and managing your subscription.</p>
                        <span className="text-purple-400 text-sm font-bold flex items-center gap-1 group-hover:gap-2 transition-all">View Billing Docs <ArrowRight className="w-4 h-4" /></span>
                    </Link>

                    <Link href="#security" className="bg-[#111111] p-8 rounded-2xl border border-white/5 hover:border-emerald-500/50 transition-colors group">
                        <Shield className="w-8 h-8 text-emerald-400 mb-4 group-hover:animate-pulse" />
                        <h3 className="text-xl font-bold mb-2">Data & Security</h3>
                        <p className="text-[#888888] text-sm mb-6">How we protect your startup ideas and handle your data securely.</p>
                        <span className="text-emerald-400 text-sm font-bold flex items-center gap-1 group-hover:gap-2 transition-all">Read Security Policy <ArrowRight className="w-4 h-4" /></span>
                    </Link>
                </div>

                <div className="prose prose-invert max-w-none">
                    <h2 id="getting-started" className="text-3xl font-bold font-headline mb-6 text-white border-b border-white/10 pb-4">Getting Started</h2>
                    <p className="text-[#888888] leading-relaxed mb-6">
                        launchOS is designed to act as your AI co-founder. You simply provide a raw idea, and the platform runs it through 10 specialized AI engines to give you a complete, actionable launch plan.
                    </p>
                    <h4 className="text-white font-bold mb-2">Step 1: Input your idea</h4>
                    <p className="text-[#888888] leading-relaxed mb-6">Be as specific as possible. Instead of "a CRM for businesses", try "a WhatsApp-based CRM for local plumbers in India to track leads."</p>
                    
                    <h4 className="text-white font-bold mb-2">Step 2: Review Validation</h4>
                    <p className="text-[#888888] leading-relaxed mb-6">The engine will score your idea based on market readiness. Pay close attention to the "Why it will fail" section to preemptively solve core risks.</p>

                    <h4 className="text-white font-bold mb-2">Step 3: Execute the MVP Plan</h4>
                    <p className="text-[#888888] leading-relaxed mb-12">Follow the step-by-step technical architecture and sprint plan to build your v1 in days, not months.</p>

                    <h2 id="engines" className="text-3xl font-bold font-headline mb-6 text-white border-b border-white/10 pb-4">Understanding the Engines</h2>
                    <ul className="space-y-4 text-[#888888] mb-12 list-disc pl-5 marker:text-[#C8F135]">
                        <li><strong className="text-white">Niche Engine:</strong> Identifies the exact micro-segment you should target first.</li>
                        <li><strong className="text-white">Validation Engine:</strong> Highlights red flags and computes a viability score.</li>
                        <li><strong className="text-white">MVP Engine:</strong> Maps out the absolute minimum features needed to charge money.</li>
                        <li><strong className="text-white">Pricing Engine:</strong> Calculates optimal pricing tiers based on perceived value.</li>
                        <li><strong className="text-white">Outreach Engine:</strong> Writes cold DMs and emails for your specific target audience.</li>
                    </ul>

                </div>
            </div>
        </div>
    )
}
