import NextAuth, { NextAuthOptions } from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import sql from "@/lib/db"
import { cookies } from "next/headers"
import { randomUUID } from "crypto"

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      if (!user.email) return false

      try {
        // Check if user exists in Neon
        const [existingUser] = await sql`
          SELECT id FROM users WHERE LOWER(email) = LOWER(${user.email})
        `

        let userId = existingUser?.id

        if (!existingUser) {
          // Create user if they don't exist
          userId = randomUUID()
          await sql`
            INSERT INTO users (id, email, full_name, plan_type, usage_count)
            VALUES (${userId}, ${user.email.toLowerCase()}, ${user.name || 'Founder'}, 'free', 0)
          `
        }

        return true
      } catch (error) {
        console.error("Error during sign in:", error)
        return false
      }
    },
    async session({ session, token }) {
      if (session.user?.email && token.sub) {
        const [dbUser] = await sql`
          SELECT id FROM users WHERE LOWER(email) = LOWER(${session.user.email})
        `
        if (dbUser) {
          (session.user as any).id = dbUser.id
        }
      }
      return session
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
}

export default NextAuth(authOptions)
