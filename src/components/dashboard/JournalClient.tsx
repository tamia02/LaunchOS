'use client'

import React, { useState } from 'react'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { BookOpen, Plus, Trash2, Clock, Loader2 } from 'lucide-react'
import { addJournalEntry, deleteJournalEntry } from '@/lib/actions/journal-actions'
import { useRouter } from 'next/navigation'

interface JournalEntry {
    id: string
    content: string
    created_at: Date
}

export function JournalClient({ initialEntries }: { initialEntries: JournalEntry[] }) {
    const [newEntry, setNewEntry] = useState('')
    const [isSubmitting, setIsSubmitting] = useState(false)
    const router = useRouter()

    const handleAdd = async () => {
        if (!newEntry.trim() || isSubmitting) return
        setIsSubmitting(true)
        try {
            await addJournalEntry(newEntry)
            setNewEntry('')
            router.refresh()
        } catch (error) {
            console.error(error)
        } finally {
            setIsSubmitting(false)
        }
    }

    const handleDelete = async (id: string) => {
        try {
            await deleteJournalEntry(id)
            router.refresh()
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="flex justify-between items-end border-b border-white/5 pb-8">
                <div className="space-y-2">
                    <h1 className="text-4xl font-black font-headline tracking-tighter text-white flex items-center gap-4">
                        <span className="material-symbols-outlined text-tertiary text-4xl">edit_note</span>
                        Idea Journal
                    </h1>
                    <p className="text-on-surface-variant/60 font-body">Capture every spark before it fades into the noise.</p>
                </div>
            </div>

            <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-tertiary/20 to-primary/20 rounded-xl blur-xl opacity-0 group-focus-within:opacity-100 transition duration-500" />
                <Card className="relative p-2 bg-surface-container-low border border-outline-variant/10 flex gap-2 shadow-2xl">
                    <Input
                        value={newEntry}
                        onChange={(e) => setNewEntry(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && !e.shiftKey && handleAdd()}
                        placeholder="What's the startup idea keeping you up at night?"
                        className="flex-1 bg-transparent border-none focus-visible:ring-0 text-sm h-12 text-on-surface placeholder:text-on-surface-variant/40"
                        disabled={isSubmitting}
                    />
                    <Button 
                        onClick={handleAdd} 
                        size="sm" 
                        className="h-10 px-6 button-metallic font-headline font-bold text-xs tracking-tight"
                        disabled={isSubmitting || !newEntry.trim()}
                    >
                        {isSubmitting ? <Loader2 className="w-4 h-4 animate-spin" /> : <Plus className="w-4 h-4 mr-2" />}
                        Save Entry
                    </Button>
                </Card>
            </div>

            <div className="space-y-4">
                {initialEntries.length === 0 ? (
                    <div className="py-20 text-center space-y-4 bg-surface-container/20 rounded-3xl border border-dashed border-white/5">
                        <span className="material-symbols-outlined text-on-surface-variant/20 text-6xl">inventory_2</span>
                        <p className="text-on-surface-variant/40 font-medium tracking-wide">Journal is empty. Start recording your vision.</p>
                    </div>
                ) : (
                    initialEntries.map((entry) => (
                        <Card key={entry.id} className="group hover:border-outline-variant/30 transition-all duration-300 bg-surface-container-lowest/40 backdrop-blur-sm border-white/5">
                            <div className="flex justify-between items-start gap-6">
                                <div className="space-y-4 flex-1">
                                    <div className="flex items-center gap-2 text-[9px] text-tertiary font-black uppercase tracking-[0.2em] font-label opacity-70">
                                        <Clock className="w-3 h-3" />
                                        {new Date(entry.created_at).toLocaleDateString(undefined, { 
                                            weekday: 'long', 
                                            year: 'numeric', 
                                            month: 'long', 
                                            day: 'numeric' 
                                        })}
                                    </div>
                                    <p className="text-sm text-on-surface leading-relaxed whitespace-pre-wrap font-body antialiased">
                                        {entry.content}
                                    </p>
                                </div>
                                <button
                                    onClick={() => handleDelete(entry.id)}
                                    className="p-2 opacity-0 group-hover:opacity-100 text-on-surface-variant/40 hover:text-error transition-all duration-300 hover:bg-error/5 rounded-lg"
                                >
                                    <Trash2 className="w-4 h-4" />
                                </button>
                            </div>
                        </Card>
                    ))
                )}
            </div>
        </div>
    )
}
