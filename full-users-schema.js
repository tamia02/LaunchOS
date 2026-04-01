const postgres = require('postgres');
const sql = postgres('postgresql://neondb_owner:npg_KvdgVI2ur4NJ@ep-plain-feather-anncikbh-pooler.c-6.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require');

async function check() {
    try {
        const columns = await sql`
            SELECT column_name, data_type 
            FROM information_schema.columns 
            WHERE table_name = 'users'
            ORDER BY ordinal_position
        `;
        console.log('--- USERS SCHEMA ---');
        columns.forEach(c => console.log(`${c.column_name}: ${c.data_type}`));
        
        const count = await sql`SELECT COUNT(*) FROM users`;
        console.log('Total users:', count[0].count);
        
        process.exit(0);
    } catch (err) {
        console.error('DB Error:', err);
        process.exit(1);
    }
}

check();
