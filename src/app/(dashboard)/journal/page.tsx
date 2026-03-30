'use client'

import React, { useState } from 'react'
import { Card, CardTitle } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { BookOpen, Plus, Search, Trash2, Clock } from 'lucide-react'

// Mock data
const MOCK_ENTRIES = [
    { id: '1', content: 'Maybe add a chrome extension for easy idea clipping?', date: '2026-03-31' },
    { id: '2', content: 'Interviewed 3 potential users today. They hate existing tools.', date: '2026-03-30' },
    { id: '3', content: 'MVP should focus purely on the analysis, skip the public gallery for v1.', date: '2026-03-29' },
]

export default function JournalPage() {
    const [entries, setEntries] = useState(MOCK_ENTRIES)
    const [newEntry, setNewEntry] = useState('')

    const handleAdd = () => {
        if (!newEntry.trim()) return
        const entry = {
            id: Date.now().toString(),
            content: newEntry,
            date: new Date().toISOString().split('T')[0]
        }
        setEntries([entry, ...entries])
        setNewEntry('')
    }

    return (
        <div className="max-w-4xl mx-auto space-y-8">
            <div className="flex justify-between items-end border-b border-white/5 pb-8">
                <div className="space-y-2">
                    <h1 className="text-3xl font-bold flex items-center gap-3">
                        <BookOpen className="w-8 h-8 text-accent" />
                        Idea Journal
                    </h1>
                    <p className="text-text-secondary">Capture every spark before it fades.</p>
                </div>
            </div>

            <div className="relative group">
                <div className="absolute -inset-1 bg-accent/10 rounded-xl blur opacity-0 group-focus-within:opacity-100 transition duration-500" />
                <Card className="relative p-2 bg-tertiary flex gap-2">
                    <Input
                        value={newEntry}
                        onChange={(e) => setNewEntry(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleAdd()}
                        placeholder="What's on your mind? (Shift + Enter for new line)"
                        className="flex-1 bg-transparent border-none focus-visible:ring-0 text-sm h-12"
                    />
                    <Button onClick={handleAdd} size="sm" className="h-10 px-4">
                        <Plus className="w-4 h-4 mr-2" />
                        Save Entry
                    </Button>
                </Card>
            </div>

            <div className="space-y-4">
                {entries.map((entry) => (
                    <Card key={entry.id} className="group hover:border-white/20">
                        <div className="flex justify-between items-start">
                            <div className="space-y-4 flex-1">
                                <div className="flex items-center gap-2 text-[10px] text-text-muted font-mono uppercase tracking-widest">
                                    <Clock className="w-3 h-3" />
                                    {entry.date}
                                </div>
                                <p className="text-sm text-foreground/90 leading-relaxed whitespace-pre-wrap">
                                    {entry.content}
                                </p>
                            </div>
                            <button
                                onClick={() => setEntries(entries.filter(e => e.id !== entry.id))}
                                className="p-2 opacity-0 group-hover:opacity-100 text-text-muted hover:text-danger transition-all"
                            >
                                <Trash2 className="w-4 h-4" />
                            </button>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    )
}
