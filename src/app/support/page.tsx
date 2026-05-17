'use client'

import React, { useState } from 'react'
import { Mail, MessageSquare, Headphones, ArrowRight, CheckCircle2 } from 'lucide-react'

export default function SupportPage() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [submitted, setSubmitted] = useState(false)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Simulate API call
        setTimeout(() => {
            setSubmitted(true)
        }, 800)
    }

    return (
        <div className="min-h-screen bg-[#0A0A0A] text-[#FAFAFA] font-sans pt-24 pb-24">
            <div className="max-w-4xl mx-auto px-6">
                
                <div className="mb-16 text-center space-y-4">
                    <div className="w-16 h-16 bg-[#111111] rounded-2xl border border-white/10 flex items-center justify-center mx-auto mb-6">
                        <Headphones className="w-8 h-8 text-[#C8F135]" />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold font-headline tracking-tighter">How can we help?</h1>
                    <p className="text-[#888888] text-lg max-w-2xl mx-auto">We're here to help you get the most out of launchOS. Reach out to our team or check the common questions below.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    {/* Contact Form */}
                    <div className="md:col-span-2 bg-[#111111] p-8 rounded-3xl border border-white/5 relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#C8F135] via-[#C8F135]/50 to-transparent"></div>
                        
                        {submitted ? (
                            <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12">
                                <div className="w-16 h-16 bg-[#C8F135]/10 rounded-full flex items-center justify-center">
                                    <CheckCircle2 className="w-8 h-8 text-[#C8F135]" />
                                </div>
                                <h3 className="text-2xl font-bold font-headline">Message Sent!</h3>
                                <p className="text-[#888888] max-w-sm">We've received your message and our team will get back to you within 24 hours.</p>
                                <button 
                                    onClick={() => setSubmitted(false)}
                                    className="mt-4 text-[#C8F135] text-sm hover:underline font-bold"
                                >
                                    Send another message
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <h3 className="text-xl font-bold font-headline mb-6">Send us a message</h3>
                                
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase tracking-widest text-[#888888]">Name</label>
                                        <input 
                                            type="text" 
                                            required
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            className="w-full bg-[#0A0A0A] border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-[#C8F135]/50 transition-colors"
                                            placeholder="Your name"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase tracking-widest text-[#888888]">Email</label>
                                        <input 
                                            type="email" 
                                            required
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            className="w-full bg-[#0A0A0A] border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-[#C8F135]/50 transition-colors"
                                            placeholder="founder@startup.com"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-[#888888]">How can we help?</label>
                                    <textarea 
                                        required
                                        rows={4}
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        className="w-full bg-[#0A0A0A] border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-[#C8F135]/50 transition-colors resize-none"
                                        placeholder="Describe your issue or question..."
                                    />
                                </div>

                                <button 
                                    type="submit"
                                    className="w-full bg-[#C8F135] hover:bg-[#b0d62c] text-black font-bold py-3 rounded-xl transition-all shadow-[0_0_20px_rgba(200,241,53,0.3)] hover:shadow-[0_0_30px_rgba(200,241,53,0.5)] flex items-center justify-center gap-2"
                                >
                                    Send Message <ArrowRight className="w-4 h-4" />
                                </button>
                            </form>
                        )}
                    </div>

                    {/* Quick Contacts */}
                    <div className="space-y-6">
                        <div className="bg-[#111111] p-6 rounded-3xl border border-white/5 space-y-4">
                            <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center border border-white/10">
                                <Mail className="w-5 h-5 text-white" />
                            </div>
                            <div>
                                <h4 className="font-bold mb-1">Email Us</h4>
                                <p className="text-sm text-[#888888] mb-3">For general inquiries and billing support.</p>
                                <a href="mailto:support@launchos.io" className="text-[#C8F135] font-bold text-sm hover:underline">support@launchos.io</a>
                            </div>
                        </div>

                        <div className="bg-[#111111] p-6 rounded-3xl border border-white/5 space-y-4">
                            <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center border border-white/10">
                                <MessageSquare className="w-5 h-5 text-white" />
                            </div>
                            <div>
                                <h4 className="font-bold mb-1">Community Discord</h4>
                                <p className="text-sm text-[#888888] mb-3">Join 2,000+ founders discussing ideas.</p>
                                <a href="#" className="text-[#C8F135] font-bold text-sm hover:underline">Join the server</a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* FAQ */}
                <div className="border-t border-white/10 pt-16">
                    <h2 className="text-3xl font-bold font-headline mb-8 text-center">Frequently Asked Questions</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-[#111111] p-6 rounded-2xl border border-white/5">
                            <h4 className="font-bold mb-2">How are credits consumed?</h4>
                            <p className="text-sm text-[#888888] leading-relaxed">Each complete startup analysis consumes 100 credits. Running individual engines (like Outreach only) consumes 20 credits.</p>
                        </div>
                        <div className="bg-[#111111] p-6 rounded-2xl border border-white/5">
                            <h4 className="font-bold mb-2">Can I cancel my subscription?</h4>
                            <p className="text-sm text-[#888888] leading-relaxed">Yes, you can cancel at any time from your billing settings. You'll retain access to your credits until the end of your billing cycle.</p>
                        </div>
                        <div className="bg-[#111111] p-6 rounded-2xl border border-white/5">
                            <h4 className="font-bold mb-2">What happens to my data if I cancel?</h4>
                            <p className="text-sm text-[#888888] leading-relaxed">Your analyses are saved for 30 days after cancellation. After that, they may be permanently deleted unless you renew.</p>
                        </div>
                        <div className="bg-[#111111] p-6 rounded-2xl border border-white/5">
                            <h4 className="font-bold mb-2">Do you offer refunds?</h4>
                            <p className="text-sm text-[#888888] leading-relaxed">We offer a 7-day money-back guarantee if you haven't used more than 200 credits on your account.</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
