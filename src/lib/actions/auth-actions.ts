'use server'

import sql from '@/lib/db'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { authOptions } from '@/lib/auth'
import { getServerSession } from "next-auth/next"

export async function signup(formData: FormData) {
    const email = formData.get('email') as string
    const name = formData.get('name') as string
    const password = formData.get('password') as string // In a real app, hash this!

    if (!email || !name) return { error: 'Missing fields' }

    try {
        const id = crypto.randomUUID()
        await sql`
            INSERT INTO users (id, email, full_name, plan_type, usage_count)
            VALUES (${id}, ${email.toLowerCase()}, ${name}, 'free', 0)
        `

        const cookieStore = await cookies()
        cookieStore.set('userId', id, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            maxAge: 60 * 60 * 24 * 30, // 30 days
            path: '/',
        })

        return { success: true }
    } catch (error: any) {
        console.error('Signup failed:', error)
        return { error: error.message }
    }
}

export async function login(formData: FormData) {
    const email = formData.get('email') as string
    const password = formData.get('password') as string

    if (!email) return { error: 'Missing email' }

    try {
        const [user] = await sql`
            SELECT id FROM users WHERE LOWER(email) = LOWER(${email})
        `

        if (!user) {
            return { error: 'User not found. Please sign up.' }
        }

        const cookieStore = await cookies()
        cookieStore.set('userId', user.id, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            maxAge: 60 * 60 * 24 * 30, // 30 days
            path: '/',
        })

        return { success: true }
    } catch (error: any) {
        console.error('Login failed:', error)
        return { error: error.message }
    }
}

export async function getCurrentUser() {
    // 1. Try legacy cookie first
    const cookieStore = await cookies()
    let userId = cookieStore.get('userId')?.value
    
    // 2. If no legacy cookie, try Auth.js session
    if (!userId) {
        const session = await getServerSession(authOptions)
        if (session?.user?.id) {
            userId = (session.user as any).id
        } else if (session?.user?.email) {
            // Fallback: look up by email
            const [user] = await sql`SELECT id FROM users WHERE LOWER(email) = LOWER(${session.user.email})`
            userId = user?.id
        }
    }

    if (!userId) return null

    try {
        const [user] = await sql`
            SELECT * FROM users WHERE id = ${userId}
        `
        return user || null
    } catch (error) {
        console.error('Failed to get current user:', error)
        return null
    }
}

export async function logout() {
    const cookieStore = await cookies()
    cookieStore.delete('userId')
    
    // Note: Client-side signOut() from 'next-auth/react' is usually preferred for clearing the session,
    // but here we just clear the cookie and redirect. NextAuth session will expire or can be cleared via client-side call.
    redirect('/login')
    
    redirect('/login')
}
