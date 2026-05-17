'use client'

import React, { useState } from 'react'

interface User {
    id: string
    email: string
    fullName: string
    planType: string
    usageCount: number
    createdAt: string
    creditsTotal: number
    creditsRemaining: number
}

interface Validation {
    id: string
    userId: string
    idea: string
    createdAt: string
    userName: string
    userEmail: string
    niche: string
    score: number
    verdict: string
}

interface AdminClientProps {
    stats: {
        totalUsers: number
        totalValidations: number
        premiumUsers: number
        totalCreditsDeducted: number
    }
    initialUsers: User[]
    initialValidations: Validation[]
}

export default function AdminClient({ stats, initialUsers, initialValidations }: AdminClientProps) {
    const [activeTab, setActiveTab] = useState<'overview' | 'founders' | 'validations'>('overview')
    const [users, setUsers] = useState<User[]>(initialUsers)
    const [validations, setValidations] = useState<Validation[]>(initialValidations)
    
    // Search and filter states
    const [userSearch, setUserSearch] = useState('')
    const [validationSearch, setValidationSearch] = useState('')

    // Edit Modal states
    const [selectedUser, setSelectedUser] = useState<User | null>(null)
    const [modalOpen, setModalOpen] = useState(false)
    const [editPlan, setEditPlan] = useState('free')
    const [editCreditsTotal, setEditCreditsTotal] = useState(0)
    const [editCreditsRemaining, setEditCreditsRemaining] = useState(0)
    const [updating, setUpdating] = useState(false)
    const [message, setMessage] = useState('')

    // Open User Edit Modal
    const handleEditUser = (user: User) => {
        setSelectedUser(user)
        setEditPlan(user.planType)
        setEditCreditsTotal(user.creditsTotal)
        setEditCreditsRemaining(user.creditsRemaining)
        setMessage('')
        setModalOpen(true)
    }

    // Submit User Edit Update
    const handleUpdateUser = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!selectedUser) return

        setUpdating(true)
        setMessage('')

        try {
            const res = await fetch('/api/admin/update-user', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    targetUserId: selectedUser.id,
                    planType: editPlan,
                    creditsTotal: editCreditsTotal,
                    creditsRemaining: editCreditsRemaining
                })
            })

            const data = await res.json()
            if (data.success) {
                // Update local users array state
                setUsers(prev => prev.map(u => u.id === selectedUser.id ? {
                    ...u,
                    planType: editPlan,
                    creditsTotal: editCreditsTotal,
                    creditsRemaining: editCreditsRemaining
                } : u))
                setMessage('User updated successfully! ✅')
                setTimeout(() => setModalOpen(false), 1500)
            } else {
                setMessage(`Error: ${data.error || 'Failed to update user'}`)
            }
        } catch (err: any) {
            setMessage(`Network Error: ${err.message || 'An error occurred'}`)
        } finally {
            setUpdating(false)
        }
    }

    // Filtering logic
    const filteredUsers = users.filter(u => 
        u.email.toLowerCase().includes(userSearch.toLowerCase()) || 
        u.fullName.toLowerCase().includes(userSearch.toLowerCase())
    )

    const filteredValidations = validations.filter(v => 
        v.idea.toLowerCase().includes(validationSearch.toLowerCase()) || 
        v.userName.toLowerCase().includes(validationSearch.toLowerCase()) || 
        v.niche.toLowerCase().includes(validationSearch.toLowerCase())
    )

    return (
        <div className="space-y-6">
            {/* Tab Navigation */}
            <div className="flex gap-2 bg-slate-900/40 border border-white/5 p-1.5 rounded-xl self-start max-w-md">
                <button
                    onClick={() => setActiveTab('overview')}
                    className={`flex-1 py-2.5 px-5 rounded-lg text-sm font-semibold transition ${
                        activeTab === 'overview'
                            ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20'
                            : 'text-slate-400 hover:text-white hover:bg-white/5'
                    }`}
                >
                    Overview
                </button>
                <button
                    onClick={() => setActiveTab('founders')}
                    className={`flex-1 py-2.5 px-5 rounded-lg text-sm font-semibold transition ${
                        activeTab === 'founders'
                            ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20'
                            : 'text-slate-400 hover:text-white hover:bg-white/5'
                    }`}
                >
                    Founders ({users.length})
                </button>
                <button
                    onClick={() => setActiveTab('validations')}
                    className={`flex-1 py-2.5 px-5 rounded-lg text-sm font-semibold transition ${
                        activeTab === 'validations'
                            ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20'
                            : 'text-slate-400 hover:text-white hover:bg-white/5'
                    }`}
                >
                    Leads ({validations.length})
                </button>
            </div>

            {/* TAB CONTENT: OVERVIEW */}
            {activeTab === 'overview' && (
                <div className="space-y-8 animate-fadeIn">
                    {/* KPI Widgets Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="bg-slate-900/50 backdrop-blur-xl border border-white/5 p-6 rounded-2xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl" />
                            <div className="flex items-center justify-between">
                                <span className="text-slate-400 text-sm font-semibold uppercase tracking-wider">Total Founders</span>
                                <div className="p-2.5 bg-blue-500/10 rounded-lg text-blue-400 border border-blue-500/10">
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                                    </svg>
                                </div>
                            </div>
                            <div className="mt-4">
                                <h3 className="text-4xl font-extrabold text-white tracking-tight">{stats.totalUsers}</h3>
                                <p className="text-xs text-blue-400 font-medium mt-1">Platform registrants</p>
                            </div>
                        </div>

                        <div className="bg-slate-900/50 backdrop-blur-xl border border-white/5 p-6 rounded-2xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/5 rounded-full blur-2xl" />
                            <div className="flex items-center justify-between">
                                <span className="text-slate-400 text-sm font-semibold uppercase tracking-wider">AI Validations</span>
                                <div className="p-2.5 bg-purple-500/10 rounded-lg text-purple-400 border border-purple-500/10">
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                            </div>
                            <div className="mt-4">
                                <h3 className="text-4xl font-extrabold text-white tracking-tight">{stats.totalValidations}</h3>
                                <p className="text-xs text-purple-400 font-medium mt-1">Total startup concepts run</p>
                            </div>
                        </div>

                        <div className="bg-slate-900/50 backdrop-blur-xl border border-white/5 p-6 rounded-2xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/5 rounded-full blur-2xl" />
                            <div className="flex items-center justify-between">
                                <span className="text-slate-400 text-sm font-semibold uppercase tracking-wider">Premium Accounts</span>
                                <div className="p-2.5 bg-green-500/10 rounded-lg text-green-400 border border-green-500/10">
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                    </svg>
                                </div>
                            </div>
                            <div className="mt-4">
                                <h3 className="text-4xl font-extrabold text-white tracking-tight">{stats.premiumUsers}</h3>
                                <p className="text-xs text-green-400 font-medium mt-1">Paid plans active</p>
                            </div>
                        </div>

                        <div className="bg-slate-900/50 backdrop-blur-xl border border-white/5 p-6 rounded-2xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-2xl" />
                            <div className="flex items-center justify-between">
                                <span className="text-slate-400 text-sm font-semibold uppercase tracking-wider">Credits Consumed</span>
                                <div className="p-2.5 bg-amber-500/10 rounded-lg text-amber-400 border border-amber-500/10">
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                            </div>
                            <div className="mt-4">
                                <h3 className="text-4xl font-extrabold text-white tracking-tight">{stats.totalCreditsDeducted}</h3>
                                <p className="text-xs text-amber-400 font-medium mt-1">Foundational credit usage</p>
                            </div>
                        </div>
                    </div>

                    {/* Split columns for recent actions */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Column 1: Recent Users */}
                        <div className="bg-slate-900/30 border border-white/5 rounded-2xl p-6 space-y-4">
                            <h3 className="text-lg font-bold text-white flex items-center gap-2">
                                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                                Newly Joined Founders
                            </h3>
                            <div className="space-y-3">
                                {users.slice(0, 5).map(u => (
                                    <div key={u.id} className="flex items-center justify-between p-3.5 bg-slate-900/60 border border-white/5 rounded-xl">
                                        <div>
                                            <h4 className="font-semibold text-white text-sm">{u.fullName}</h4>
                                            <p className="text-xs text-slate-400 mt-0.5">{u.email}</p>
                                        </div>
                                        <span className={`text-xs font-bold py-1 px-2.5 rounded-full uppercase tracking-wider ${
                                            u.planType === 'free' ? 'bg-slate-800 text-slate-400' : 'bg-blue-500/10 text-blue-400 border border-blue-500/10'
                                        }`}>
                                            {u.planType}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Column 2: Recent Validations */}
                        <div className="bg-slate-900/30 border border-white/5 rounded-2xl p-6 space-y-4">
                            <h3 className="text-lg font-bold text-white flex items-center gap-2">
                                <span className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
                                Real-Time Idea Validation Leads
                            </h3>
                            <div className="space-y-3">
                                {validations.slice(0, 5).map(v => (
                                    <div key={v.id} className="p-3.5 bg-slate-900/60 border border-white/5 rounded-xl space-y-2">
                                        <div className="flex items-center justify-between">
                                            <span className="text-xs font-bold text-blue-400">{v.niche}</span>
                                            <span className={`text-xs font-bold py-0.5 px-2 rounded ${
                                                v.verdict === 'GO' ? 'bg-green-500/10 text-green-400 border border-green-500/10' : 'bg-amber-500/10 text-amber-400 border border-amber-500/10'
                                            }`}>
                                                {v.verdict}
                                            </span>
                                        </div>
                                        <p className="text-xs italic text-slate-300 line-clamp-1">"{v.idea}"</p>
                                        <div className="flex items-center justify-between pt-1 border-t border-white/5 text-[10px] text-slate-500">
                                            <span>By {v.userName}</span>
                                            <span>{new Date(v.createdAt).toLocaleDateString()}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* TAB CONTENT: FOUNDERS (USERS) */}
            {activeTab === 'founders' && (
                <div className="space-y-6 animate-fadeIn">
                    {/* Search and control bar */}
                    <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                        <div className="relative w-full md:max-w-md">
                            <input
                                type="text"
                                placeholder="Search by name or email..."
                                value={userSearch}
                                onChange={e => setUserSearch(e.target.value)}
                                className="w-full bg-slate-900/50 border border-white/10 rounded-xl py-3 pl-11 pr-4 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-blue-500 transition"
                            />
                            <svg className="w-5 h-5 absolute left-3.5 top-3.5 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>
                        <span className="text-xs text-slate-400 self-end md:self-auto font-medium">
                            Showing {filteredUsers.length} of {users.length} founders
                        </span>
                    </div>

                    {/* Users list/table */}
                    <div className="bg-slate-900/30 border border-white/5 rounded-2xl overflow-hidden shadow-2xl">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="border-b border-white/5 text-slate-400 text-xs uppercase tracking-wider">
                                        <th className="py-4 px-6 font-bold">Founder / Contact</th>
                                        <th className="py-4 px-6 font-bold">Plan</th>
                                        <th className="py-4 px-6 font-bold">Validations Run</th>
                                        <th className="py-4 px-6 font-bold">Credit Balance</th>
                                        <th className="py-4 px-6 font-bold">Joined Date</th>
                                        <th className="py-4 px-6 font-bold text-right">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-white/5 text-sm text-slate-300">
                                    {filteredUsers.map(u => (
                                        <tr key={u.id} className="hover:bg-white/[0.01] transition">
                                            <td className="py-4 px-6">
                                                <div>
                                                    <span className="font-bold text-white block">{u.fullName}</span>
                                                    <span className="text-xs text-slate-400 block mt-0.5">{u.email}</span>
                                                </div>
                                            </td>
                                            <td className="py-4 px-6">
                                                <span className={`text-xs font-extrabold py-1 px-3 rounded-full uppercase tracking-wider border ${
                                                    u.planType === 'free'
                                                        ? 'bg-slate-800 text-slate-400 border-slate-700/50'
                                                        : 'bg-blue-500/10 text-blue-400 border-blue-500/20'
                                                }`}>
                                                    {u.planType}
                                                </span>
                                            </td>
                                            <td className="py-4 px-6 font-semibold">
                                                {u.usageCount}
                                            </td>
                                            <td className="py-4 px-6">
                                                <div className="flex items-center gap-2">
                                                    <span className="text-slate-200 font-bold">{u.creditsRemaining}</span>
                                                    <span className="text-slate-500">/</span>
                                                    <span className="text-slate-400 text-xs">{u.creditsTotal}</span>
                                                </div>
                                            </td>
                                            <td className="py-4 px-6 text-slate-400 text-xs">
                                                {new Date(u.createdAt).toLocaleDateString()}
                                            </td>
                                            <td className="py-4 px-6 text-right">
                                                <button
                                                    onClick={() => handleEditUser(u)}
                                                    className="inline-flex py-1.5 px-3 rounded bg-blue-500/10 border border-blue-500/20 hover:bg-blue-500/20 transition text-xs font-bold text-blue-400"
                                                >
                                                    Manage Account
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                    {filteredUsers.length === 0 && (
                                        <tr>
                                            <td colSpan={6} className="py-10 px-6 text-center text-slate-500">
                                                No founders found matching search filters.
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            )}

            {/* TAB CONTENT: VALIDATIONS (LEADS) */}
            {activeTab === 'validations' && (
                <div className="space-y-6 animate-fadeIn">
                    {/* Search and filter tools */}
                    <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                        <div className="relative w-full md:max-w-md">
                            <input
                                type="text"
                                placeholder="Search by idea, founder, or niche..."
                                value={validationSearch}
                                onChange={e => setValidationSearch(e.target.value)}
                                className="w-full bg-slate-900/50 border border-white/10 rounded-xl py-3 pl-11 pr-4 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-blue-500 transition"
                            />
                            <svg className="w-5 h-5 absolute left-3.5 top-3.5 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>
                        <span className="text-xs text-slate-400 self-end md:self-auto font-medium">
                            Showing {filteredValidations.length} of {validations.length} validation runs
                        </span>
                    </div>

                    {/* Validations list */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {filteredValidations.map(v => (
                            <div key={v.id} className="bg-slate-900/40 border border-white/5 rounded-2xl p-6 space-y-4 hover:border-white/10 transition relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/[0.01] rounded-full blur-xl group-hover:bg-blue-500/[0.03] transition" />
                                
                                <div className="flex items-center justify-between">
                                    <span className="text-xs font-extrabold tracking-wider uppercase text-blue-400 px-2 py-0.5 bg-blue-500/10 rounded border border-blue-500/10">
                                        {v.niche}
                                    </span>
                                    <div className="flex items-center gap-3">
                                        <div className="flex flex-col items-end">
                                            <span className="text-xs font-semibold text-slate-400">Score</span>
                                            <span className="text-sm font-extrabold text-white">{v.score}/100</span>
                                        </div>
                                        <span className={`text-xs font-extrabold py-1 px-3 rounded uppercase tracking-wider ${
                                            v.verdict === 'GO' ? 'bg-green-500/10 text-green-400 border border-green-500/10' : 'bg-amber-500/10 text-amber-400 border border-amber-500/10'
                                        }`}>
                                            {v.verdict}
                                        </span>
                                    </div>
                                </div>

                                <div className="space-y-1">
                                    <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block">Startup Concept</span>
                                    <p className="text-slate-200 text-sm leading-relaxed italic">"{v.idea}"</p>
                                </div>

                                <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs text-slate-400">
                                    <div>
                                        <span className="font-semibold block text-white">{v.userName}</span>
                                        <span className="text-[10px] text-slate-500 block">{v.userEmail}</span>
                                    </div>
                                    <span className="text-[10px] text-slate-500">
                                        {new Date(v.createdAt).toLocaleDateString('en-IN', { hour: '2-digit', minute: '2-digit' })}
                                    </span>
                                </div>
                            </div>
                        ))}
                        {filteredValidations.length === 0 && (
                            <div className="col-span-full py-16 text-center text-slate-500">
                                No startup validations found matching filters.
                            </div>
                        )}
                    </div>
                </div>
            )}

            {/* EDIT CONTROL MODAL */}
            {modalOpen && selectedUser && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
                    <div className="bg-slate-900 border border-white/10 p-8 rounded-2xl max-w-md w-full relative shadow-2xl space-y-6">
                        <button
                            onClick={() => setModalOpen(false)}
                            className="absolute top-4 right-4 text-slate-500 hover:text-white transition"
                        >
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        <div>
                            <h3 className="text-xl font-bold text-white">Manage Founder Account</h3>
                            <p className="text-xs text-slate-400 mt-1">Adjust plans and credit values for {selectedUser.fullName}.</p>
                        </div>

                        <form onSubmit={handleUpdateUser} className="space-y-4">
                            <div>
                                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Account Plan Type</label>
                                <select
                                    value={editPlan}
                                    onChange={e => setEditPlan(e.target.value)}
                                    className="w-full bg-slate-800 border border-white/10 text-white rounded-lg py-3 px-4 text-sm focus:outline-none focus:border-blue-500 transition"
                                >
                                    <option value="free">Free Plan</option>
                                    <option value="basic">Basic (Startup)</option>
                                    <option value="medium">Pro (Scale)</option>
                                    <option value="advanced">Enterprise (Launch)</option>
                                </select>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Remaining Credits</label>
                                    <input
                                        type="number"
                                        value={editCreditsRemaining}
                                        onChange={e => setEditCreditsRemaining(parseInt(e.target.value) || 0)}
                                        className="w-full bg-slate-800 border border-white/10 text-white rounded-lg py-3 px-4 text-sm focus:outline-none focus:border-blue-500 transition"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Total Credits</label>
                                    <input
                                        type="number"
                                        value={editCreditsTotal}
                                        onChange={e => setEditCreditsTotal(parseInt(e.target.value) || 0)}
                                        className="w-full bg-slate-800 border border-white/10 text-white rounded-lg py-3 px-4 text-sm focus:outline-none focus:border-blue-500 transition"
                                    />
                                </div>
                            </div>

                            {message && (
                                <p className="text-xs text-center text-blue-400 font-semibold bg-blue-500/10 border border-blue-500/20 py-2.5 rounded-lg">
                                    {message}
                                </p>
                            )}

                            <div className="pt-2 flex gap-4">
                                <button
                                    type="button"
                                    onClick={() => setModalOpen(false)}
                                    className="flex-1 py-3.5 px-4 bg-slate-800 hover:bg-slate-700 transition rounded-lg text-sm font-semibold text-slate-300"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    disabled={updating}
                                    className="flex-1 py-3.5 px-4 bg-blue-600 hover:bg-blue-500 transition rounded-lg text-sm font-bold text-white disabled:opacity-50"
                                >
                                    {updating ? 'Saving...' : 'Save Settings'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    )
}
