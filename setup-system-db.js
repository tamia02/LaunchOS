const postgres = require('postgres');
require('dotenv').config({ path: '.env.local' });

const sql = postgres(process.env.NEON_DATABASE_URL, { ssl: 'require' });

async function setup() {
    try {
        console.log('Adding notification_preferences to users table...');
        try {
            await sql`
                ALTER TABLE users 
                ADD COLUMN notification_preferences JSONB DEFAULT '{"analysis_complete": true, "weekly_digest": true, "credit_low": true, "product_updates": true, "marketing_emails": false}'::jsonb;
            `;
            console.log('Added notification_preferences column.');
        } catch (e) {
            if (e.message.includes('already exists')) {
                console.log('Column notification_preferences already exists.');
            } else {
                console.error('Error adding column:', e.message);
            }
        }

        console.log('Creating notifications table...');
        await sql`
            CREATE TABLE IF NOT EXISTS notifications (
                id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
                user_id TEXT NOT NULL REFERENCES users(id),
                type TEXT NOT NULL,
                title TEXT NOT NULL,
                message TEXT NOT NULL,
                is_read BOOLEAN DEFAULT false,
                created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
            )
        `;
        console.log('Table notifications created.');

        console.log('System tables setup completed successfully!');
    } catch (e) {
        console.error('Database setup failed:', e);
    } finally {
        process.exit(0);
    }
}

setup();
