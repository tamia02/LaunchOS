'use client'

import React, { useState } from 'react'
import { signOut } from 'next-auth/react'
import { Settings as SettingsIcon, User, CreditCard, Bell, Shield, ExternalLink, Download, Trash2, LogOut } from 'lucide-react'

export default function SettingsPage() {
    const [name, setName] = useState('The Founder')
    const [deleteInput, setDeleteInput] = useState('')
    const [showDeleteModal, setShowDeleteModal] = useState(false)

    // Mock notification preferences state for UI
    const [prefs, setPrefs] = useState({
        analysis_complete: true,
        weekly_digest: true,
        credit_low: true,
        product_updates: true,
        marketing_emails: false
    })

    const handleSavePrefs = () => {
        alert('Preferences saved successfully')
    }

    const handleDeleteAccount = () => {
        if (deleteInput === 'DELETE') {
            alert('Account deleted')
            signOut({ callbackUrl: '/' })
        }
    }

    return (
        <div className="max-w-3xl mx-auto space-y-12 pb-24 text-[#FAFAFA] font-sans">
            <div className="flex items-end border-b border-white/5 pb-8">
                <div className="space-y-2">
                    <h1 className="text-3xl font-bold flex items-center gap-3 font-headline tracking-tight">
                        <SettingsIcon className="w-8 h-8 text-[#C8F135]" />
                        Settings
                    </h1>
                    <p className="text-[#888888]">Manage your profile, billing, notifications, and account security.</p>
                </div>
            </div>

            <div className="space-y-12">
                {/* Profile Section */}
                <section className="space-y-6">
                    <div className="flex items-center gap-2">
                        <User className="w-5 h-5 text-[#C8F135]" />
                        <h2 className="text-sm font-mono uppercase tracking-widest text-[#888888]">Profile</h2>
                    </div>
                    <div className="bg-[#111111] rounded-2xl p-8 border border-white/10 space-y-8">
                        <div className="flex items-center gap-6">
                            <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-[#C8F135]/50">
                                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCH4gKLhrDFWmynW03QLjoq1R47wDm6tNj1t9dU_XARSRHDlqeR2H2KiNsNyGOvrTrYyMmHzZuC_6x-IyTeKv8VG7WuXTUQAOHX5iRNZxSS3uJ9DFvCEn65SRjZWu_oDUd1CTXeRUxJKw_SVjbK7LpnQR2FgVzkecj3lwIEl80Oge13rzfpPdBBFVNM4Z4nZhyFtvdKsOtegaBwksrxjGzt_vFgowMDLDlAvV6aGLhZjtsvuNdFVidmotrRAyQldyxcLi5-5m4y4yPH" alt="Avatar" className="w-full h-full object-cover" />
                            </div>
                            <div>
                                <p className="text-sm text-[#888888] mb-1">Member since</p>
                                <p className="font-medium text-white">October 2023</p>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-widest text-[#888888]">Full Name</label>
                                <input 
                                    type="text" 
                                    value={name} 
                                    onChange={(e) => setName(e.target.value)}
                                    className="w-full bg-[#0A0A0A] border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-[#C8F135]/50 transition-colors"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-widest text-[#888888]">Email Address</label>
                                <input 
                                    type="email" 
                                    value="founder@launchos.io" 
                                    disabled
                                    className="w-full bg-[#0A0A0A] border border-white/5 text-[#888888] rounded-lg px-4 py-3 cursor-not-allowed opacity-70"
                                />
                            </div>
                        </div>
                        
                        <button className="bg-white/5 hover:bg-white/10 text-white px-6 py-2.5 rounded-lg text-sm font-medium transition-colors border border-white/10">
                            Save changes
                        </button>
                    </div>
                </section>

                {/* Plan & Billing Section */}
                <section className="space-y-6">
                    <div className="flex items-center gap-2">
                        <CreditCard className="w-5 h-5 text-[#C8F135]" />
                        <h2 className="text-sm font-mono uppercase tracking-widest text-[#888888]">Plan & Billing</h2>
                    </div>
                    <div className="bg-[#111111] rounded-2xl p-8 border border-white/10">
                        <div className="flex justify-between items-start mb-8">
                            <div>
                                <div className="flex items-center gap-3 mb-2">
                                    <h3 className="text-2xl font-bold">Medium Plan</h3>
                                    <span className="px-3 py-1 bg-[#C8F135]/10 text-[#C8F135] text-[10px] font-bold uppercase tracking-widest rounded-full">Active</span>
                                </div>
                                <p className="text-[#888888] text-sm">Next reset: Nov 1, 2023</p>
                            </div>
                            <div className="text-right">
                                <p className="text-sm text-[#888888] mb-1">Credits used</p>
                                <p className="text-xl font-bold"><span className="text-white">450</span> / 2,000</p>
                            </div>
                        </div>

                        {/* Progress Bar */}
                        <div className="w-full h-2 bg-[#0A0A0A] rounded-full overflow-hidden mb-8">
                            <div className="h-full bg-[#C8F135]" style={{ width: '22.5%' }}></div>
                        </div>

                        <div className="flex gap-4 pt-6 border-t border-white/5">
                            <button className="bg-white/5 hover:bg-white/10 text-white px-6 py-2.5 rounded-lg text-sm font-medium transition-colors border border-white/10 flex items-center gap-2">
                                <ExternalLink className="w-4 h-4" /> Manage billing
                            </button>
                            <button className="text-[#888888] hover:text-white px-6 py-2.5 text-sm font-medium transition-colors">
                                Cancel subscription
                            </button>
                        </div>
                    </div>
                </section>

                {/* Notifications Section */}
                <section className="space-y-6">
                    <div className="flex items-center gap-2">
                        <Bell className="w-5 h-5 text-[#C8F135]" />
                        <h2 className="text-sm font-mono uppercase tracking-widest text-[#888888]">Notifications</h2>
                    </div>
                    <div className="bg-[#111111] rounded-2xl p-8 border border-white/10 space-y-6">
                        
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="font-bold text-white mb-1">Analysis complete email</p>
                                <p className="text-sm text-[#888888]">Get an email when your analysis is ready</p>
                            </div>
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" checked={prefs.analysis_complete} onChange={() => setPrefs({...prefs, analysis_complete: !prefs.analysis_complete})} className="sr-only peer" />
                                <div className="w-11 h-6 bg-white/10 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#C8F135]"></div>
                            </label>
                        </div>

                        <div className="flex items-center justify-between">
                            <div>
                                <p className="font-bold text-white mb-1">Weekly digest</p>
                                <p className="text-sm text-[#888888]">Weekly summary of trending startup niches</p>
                            </div>
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" checked={prefs.weekly_digest} onChange={() => setPrefs({...prefs, weekly_digest: !prefs.weekly_digest})} className="sr-only peer" />
                                <div className="w-11 h-6 bg-white/10 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#C8F135]"></div>
                            </label>
                        </div>

                        <div className="flex items-center justify-between">
                            <div>
                                <p className="font-bold text-white mb-1">Credit low warning</p>
                                <p className="text-sm text-[#888888]">Alert when you have less than 100 credits left</p>
                            </div>
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" checked={prefs.credit_low} onChange={() => setPrefs({...prefs, credit_low: !prefs.credit_low})} className="sr-only peer" />
                                <div className="w-11 h-6 bg-white/10 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#C8F135]"></div>
                            </label>
                        </div>

                        <div className="flex items-center justify-between">
                            <div>
                                <p className="font-bold text-white mb-1">Marketing emails</p>
                                <p className="text-sm text-[#888888]">Tips, case studies, and founder stories</p>
                            </div>
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" checked={prefs.marketing_emails} onChange={() => setPrefs({...prefs, marketing_emails: !prefs.marketing_emails})} className="sr-only peer" />
                                <div className="w-11 h-6 bg-white/10 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#C8F135]"></div>
                            </label>
                        </div>

                        <div className="pt-6 border-t border-white/5">
                            <button onClick={handleSavePrefs} className="bg-white/5 hover:bg-white/10 text-white px-6 py-2.5 rounded-lg text-sm font-medium transition-colors border border-white/10">
                                Save notification preferences
                            </button>
                        </div>
                    </div>
                </section>

                {/* Account & Danger Zone */}
                <section className="space-y-6">
                    <div className="flex items-center gap-2">
                        <Shield className="w-5 h-5 text-[#C8F135]" />
                        <h2 className="text-sm font-mono uppercase tracking-widest text-[#888888]">Account</h2>
                    </div>
                    <div className="bg-[#111111] rounded-2xl p-8 border border-white/10 space-y-6">
                        
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="font-bold text-white mb-1">Export Data</p>
                                <p className="text-sm text-[#888888]">Download a JSON of all your analyses</p>
                            </div>
                            <button className="bg-white/5 hover:bg-white/10 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors border border-white/10 flex items-center gap-2">
                                <Download className="w-4 h-4" /> Export my data
                            </button>
                        </div>

                        <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                            <div>
                                <p className="font-bold text-white mb-1">Sign Out</p>
                                <p className="text-sm text-[#888888]">Securely log out of this device</p>
                            </div>
                            <button 
                                onClick={() => signOut({ callbackUrl: '/' })}
                                className="border border-red-500/30 hover:bg-red-500/10 text-red-500 px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2"
                            >
                                <LogOut className="w-4 h-4" /> Sign out
                            </button>
                        </div>

                        <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                            <div>
                                <p className="font-bold text-red-500 mb-1">Delete Account</p>
                                <p className="text-sm text-[#888888]">Permanently delete your account and all data</p>
                            </div>
                            <button 
                                onClick={() => setShowDeleteModal(true)}
                                className="bg-red-500/10 hover:bg-red-500/20 text-red-500 px-4 py-2 rounded-lg text-sm font-medium transition-colors border border-red-500/30 flex items-center gap-2"
                            >
                                <Trash2 className="w-4 h-4" /> Delete account
                            </button>
                        </div>

                    </div>
                </section>
            </div>

            {/* Delete Modal */}
            {showDeleteModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm px-4">
                    <div className="bg-[#111111] p-8 rounded-2xl border border-red-500/30 max-w-md w-full shadow-2xl">
                        <h3 className="text-2xl font-bold text-white mb-4">Delete Account?</h3>
                        <p className="text-[#888888] mb-6 leading-relaxed">
                            This will permanently delete your account and all your analyses. This cannot be undone.
                        </p>
                        <div className="space-y-4 mb-8">
                            <label className="text-xs font-bold uppercase tracking-widest text-[#888888]">Type DELETE to confirm</label>
                            <input 
                                type="text" 
                                value={deleteInput}
                                onChange={(e) => setDeleteInput(e.target.value)}
                                className="w-full bg-[#0A0A0A] border border-red-500/30 rounded-lg px-4 py-3 text-red-500 focus:outline-none focus:border-red-500 transition-colors"
                            />
                        </div>
                        <div className="flex gap-4">
                            <button 
                                onClick={() => setShowDeleteModal(false)}
                                className="flex-1 bg-white/5 hover:bg-white/10 text-white py-3 rounded-lg font-medium transition-colors border border-white/10"
                            >
                                Cancel
                            </button>
                            <button 
                                onClick={handleDeleteAccount}
                                disabled={deleteInput !== 'DELETE'}
                                className="flex-1 bg-red-500 text-white py-3 rounded-lg font-bold hover:bg-red-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                Delete Account
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
