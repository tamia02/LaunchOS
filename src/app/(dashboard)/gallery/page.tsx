'use client'

import React from 'react'
import { Card, CardTitle, CardDescription } from '@/components/ui/Card'
import { Tag } from '@/components/ui/Tag'
import { Input } from '@/components/ui/Input'
import { Globe, Search, Filter, TrendingUp, User } from 'lucide-react'

const MOCK_GALLERY = [
    { id: '1', idea: 'A sustainable subscription for biodegradable household cleaning products.', niche: 'Eco-conscious Urbanites', score: 88, author: 'EcoDev', category: 'Sustainability' },
    { id: '2', idea: 'AI-driven logistics optimizer for small e-commerce flower shops.', niche: 'Local Florists', score: 76, author: 'BloomAI', category: 'SaaS' },
    { id: '3', idea: 'Decentralized platform for peer-to-peer specialized equipment rental.', niche: 'HVAC Professionals', score: 65, author: 'ToolShare', category: 'Marketplace' },
]

export default function GalleryPage() {
    return (
        <div className="space-y-12">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/5 pb-8">
                <div className="space-y-2">
                    <h1 className="text-3xl font-bold flex items-center gap-3">
                        <Globe className="w-8 h-8 text-accent" />
                        Public Gallery
                    </h1>
                    <p className="text-text-secondary">Explore the best ideas from the launchOS community.</p>
                </div>
                <div className="flex gap-2 w-full md:w-auto">
                    <div className="relative flex-1 md:w-64">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
                        <Input placeholder="Search ideas..." className="pl-10 h-10 text-xs" />
                    </div>
                    <button className="p-2.5 rounded bg-tertiary border border-white/5 text-text-muted hover:text-foreground">
                        <Filter className="w-4 h-4" />
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {MOCK_GALLERY.map((item) => (
                    <Card key={item.id} className="group hover:scale-[1.02] transition-transform flex flex-col p-6 space-y-6">
                        <div className="flex justify-between items-start">
                            <Tag variant="accent">{item.category}</Tag>
                            <div className="flex items-center gap-1">
                                <TrendingUp className="w-3.5 h-3.5 text-accent" />
                                <span className="text-xs font-mono font-bold">{item.score}</span>
                            </div>
                        </div>

                        <div className="space-y-3 flex-1">
                            <p className="text-sm font-medium leading-relaxed group-hover:text-accent transition-colors">
                                {item.idea}
                            </p>
                            <p className="text-[10px] uppercase text-text-muted font-mono tracking-widest">
                                Targeting: {item.niche}
                            </p>
                        </div>

                        <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <div className="w-5 h-5 rounded-full bg-white/5 flex items-center justify-center">
                                    <User className="w-3 h-3 text-text-muted" />
                                </div>
                                <span className="text-[10px] font-medium text-text-secondary">{item.author}</span>
                            </div>
                            <button className="text-[10px] uppercase font-bold text-accent tracking-[1px] hover:underline">
                                View Analysis
                            </button>
                        </div>
                    </Card>
                ))}
            </div>

            <div className="py-20 text-center space-y-4">
                <div className="inline-flex p-4 rounded-full bg-accent/5 border border-accent/10 mb-4">
                    <TrendingUp className="w-8 h-8 text-accent/40" />
                </div>
                <h3 className="text-xl font-bold">Want to see your idea here?</h3>
                <p className="text-text-secondary max-w-sm mx-auto text-sm leading-relaxed">
                    Enable public sharing in your analysis settings to get feedback or find co-founders.
                </p>
                <div className="pt-4">
                    <button className="px-6 py-2 rounded-md bg-white/5 border border-white/10 text-xs font-mono uppercase tracking-widest hover:bg-white/10 transition-colors">
                        Analysis Settings
                    </button>
                </div>
            </div>
        </div>
    )
}
