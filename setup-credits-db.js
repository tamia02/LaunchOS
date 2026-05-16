const postgres = require('postgres');
require('dotenv').config({ path: '.env.local' });

const sql = postgres(process.env.NEON_DATABASE_URL, { ssl: 'require' });

async function setup() {
    try {
        console.log('Creating user_credits table...');
        await sql`
            CREATE TABLE IF NOT EXISTS user_credits (
                id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
                user_id TEXT NOT NULL REFERENCES users(id),
                plan_type TEXT NOT NULL,
                credits_total INTEGER NOT NULL,
                credits_used INTEGER DEFAULT 0,
                credits_remaining INTEGER GENERATED ALWAYS AS (credits_total - credits_used) STORED,
                reset_date TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
                created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
                updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
                UNIQUE(user_id)
            )
        `;
        
        console.log('Creating credit_transactions table...');
        await sql`
            CREATE TABLE IF NOT EXISTS credit_transactions (
                id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
                user_id TEXT NOT NULL REFERENCES users(id),
                action_type TEXT NOT NULL,
                credits_deducted INTEGER NOT NULL,
                engine_used TEXT,
                idea_id TEXT,
                created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
            )
        `;

        console.log('Tables created successfully!');
    } catch (e) {
        console.error('Error:', e);
    } finally {
        process.exit(0);
    }
}
setup();
