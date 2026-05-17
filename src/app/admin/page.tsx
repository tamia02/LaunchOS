import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { redirect } from 'next/navigation'
import sql from '@/lib/db'
import AdminClient from './AdminClient'

const ADMIN_EMAILS = [
  "tasmiyasiddiqui457@gmail.com",
  "tasmiyacreate@gmail.com",
  "demo@founder.os"
]

export const dynamic = 'force-dynamic'

export default async function AdminPage() {
    // 1. Authenticate user
    const session = await getServerSession(authOptions)
    if (!session?.user?.email || !ADMIN_EMAILS.includes(session.user.email.toLowerCase())) {
        // Access Denied: Render a premium restriction page
        return (
            <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col items-center justify-center p-6 relative overflow-hidden">
                {/* Background glowing effects */}
                <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl" />

                <div className="relative z-10 max-w-md w-full text-center space-y-6 bg-slate-900/60 backdrop-blur-xl border border-white/5 p-10 rounded-2xl shadow-2xl">
                    <div className="inline-flex p-4 rounded-full bg-red-500/10 text-red-400 border border-red-500/20 mb-2">
                        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m0 0v2m0-2h2m-2 0H8m4-6a4 4 0 110-8 4 4 0 010 8zm0 2a6 6 0 00-6 6v1h12v-1a6 6 0 00-6-6z" />
                        </svg>
                    </div>
                    <h1 className="text-3xl font-extrabold tracking-tight text-white">Access Denied</h1>
                    <p className="text-slate-400 leading-relaxed">
                        This area is restricted to launchOS administrators. Please sign in with an approved administrator account to access this page.
                    </p>
                    <div className="pt-4">
                        <a 
                            href="/login" 
                            className="inline-block w-full py-4 px-6 rounded-lg font-bold transition duration-300 text-center button-metallic"
                        >
                            Sign In to Administrator Account
                        </a>
                    </div>
                </div>
            </div>
        )
    }

    // 2. Fetch all required dashboard stats and lists
    try {
        // Fetch Users count & list
        const dbUsers = await sql`
            SELECT u.id, u.email, u.full_name, u.plan_type, u.usage_count, u.created_at,
                   c.credits_total, c.credits_remaining
            FROM users u
            LEFT JOIN user_credits c ON u.id = c.user_id
            ORDER BY u.created_at DESC
        ` as any[]

        // Fetch Startup Analyses (validations/leads)
        const dbAnalyses = await sql`
            SELECT a.id, a.user_id, a.idea, a.created_at, u.full_name as user_name, u.email as user_email,
                   a.engine1_niche, a.engine2_validation
            FROM analyses a
            LEFT JOIN users u ON a.user_id = u.id
            ORDER BY a.created_at DESC
        ` as any[]

        // Safe client data mappings (ensuring safety against potential type/JSON parsing issues)
        const users = dbUsers.map(u => ({
            id: u.id,
            email: u.email || 'N/A',
            fullName: u.full_name || 'Founder',
            planType: u.plan_type || 'free',
            usageCount: parseInt(u.usage_count || '0'),
            createdAt: u.created_at ? new Date(u.created_at).toISOString() : new Date().toISOString(),
            creditsTotal: parseInt(u.credits_total || '0'),
            creditsRemaining: parseInt(u.credits_remaining || '0')
        }))

        const validations = dbAnalyses.map(a => {
            let niche = 'N/A';
            let score = 50;
            let verdict = 'N/A';

            try {
                const nicheObj = typeof a.engine1_niche === 'string' ? JSON.parse(a.engine1_niche) : a.engine1_niche;
                niche = nicheObj?.niche_name || nicheObj?.primary_niche || 'N/A';
            } catch (e) {}

            try {
                const valObj = typeof a.engine2_validation === 'string' ? JSON.parse(a.engine2_validation) : a.engine2_validation;
                score = valObj?.validation_score?.total || valObj?.score || 50;
                verdict = valObj?.verdict || 'GO';
            } catch (e) {}

            return {
                id: a.id,
                userId: a.user_id,
                idea: a.idea || 'No Idea Entered',
                createdAt: a.created_at ? new Date(a.created_at).toISOString() : new Date().toISOString(),
                userName: a.user_name || 'Founder',
                userEmail: a.user_email || 'N/A',
                niche,
                score,
                verdict
            }
        })

        // Compute aggregate KPIs
        const totalUsers = users.length;
        const totalValidations = validations.length;
        const premiumUsers = users.filter(u => u.planType !== 'free').length;
        const totalCreditsDeducted = users.reduce((acc, curr) => acc + (curr.creditsTotal - curr.creditsRemaining), 0);

        const stats = {
            totalUsers,
            totalValidations,
            premiumUsers,
            totalCreditsDeducted: Math.max(0, totalCreditsDeducted)
        }

        return (
            <div className="min-h-screen bg-slate-950 text-slate-100 p-6 md:p-10 relative overflow-hidden">
                {/* Visual ambiance backgrounds */}
                <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

                <div className="max-w-7xl mx-auto space-y-8 relative z-10">
                    {/* Header */}
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pb-6 border-b border-white/5">
                        <div>
                            <div className="flex items-center gap-3">
                                <span className="inline-block w-2.5 h-2.5 bg-blue-500 rounded-full animate-pulse" />
                                <span className="text-xs font-bold tracking-widest text-blue-400 uppercase">launchOS admin</span>
                            </div>
                            <h1 className="text-4xl font-extrabold tracking-tight text-white mt-1">Platform Control Panel</h1>
                            <p className="text-slate-400 text-sm mt-1">Real-time statistics, user management, and startup idea validation leads.</p>
                        </div>
                        <a 
                            href="/dashboard"
                            className="self-start md:self-auto py-2.5 px-5 rounded-lg border border-white/10 hover:border-white/20 transition text-sm font-semibold flex items-center gap-2 bg-white/5 hover:bg-white/10 text-white"
                        >
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                            </svg>
                            Back to Dashboard
                        </a>
                    </div>

                    {/* Dashboard Client Controller */}
                    <AdminClient stats={stats} initialUsers={users} initialValidations={validations} />
                </div>
            </div>
        )

    } catch (error: any) {
        console.error('[ADMIN PAGE DB ERROR]:', error)
        return (
            <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col items-center justify-center p-6 text-center">
                <h1 className="text-3xl font-extrabold text-red-500 mb-2">Database Connection Failed</h1>
                <p className="text-slate-400 max-w-md">Failed to communicate with Neon Database. Please check your NEON_DATABASE_URL environment variable.</p>
                <div className="mt-6">
                    <a href="/login" className="button-metallic px-6 py-3 rounded-lg font-bold">Try Re-authenticating</a>
                </div>
            </div>
        )
    }
}
