import postgres from 'postgres'
import dotenv from 'dotenv'

dotenv.config({ path: '.env.local' })

const sql = postgres(process.env.NEON_DATABASE_URL, { ssl: 'require' })

async function migrate() {
    console.log('🚀 Starting migration...')

    try {
        // Create users table
        await sql`
            CREATE TABLE IF NOT EXISTS users (
                id TEXT PRIMARY KEY,
                email TEXT,
                full_name TEXT,
                plan_type TEXT DEFAULT 'free',
                usage_count INTEGER DEFAULT 0,
                usage_reset_date TIMESTAMP WITH TIME ZONE,
                stripe_customer_id TEXT,
                created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
                updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
            )
        `
        console.log('✅ Users table ready')

        // Create analyses table
        await sql`
            CREATE TABLE IF NOT EXISTS analyses (
                id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
                user_id TEXT REFERENCES users(id),
                idea TEXT,
                engine1_niche JSONB,
                engine2_validation JSONB,
                engine3_mvp JSONB,
                engine4_pricing JSONB,
                engine5_outreach JSONB,
                engine6_competitor JSONB,
                engine7_investor JSONB,
                engine8_yc JSONB,
                engine9_pivot JSONB,
                engine10_revenue JSONB,
                is_public BOOLEAN DEFAULT false,
                upvotes INTEGER DEFAULT 0,
                created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
            )
        `
        console.log('✅ Analyses table ready')

        console.log('🎉 Migration complete!')
        process.exit(0)
    } catch (error) {
        console.error('❌ Migration failed:', error)
        process.exit(1)
    }
}

migrate()
