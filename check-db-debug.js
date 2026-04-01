const postgres = require('postgres');
const sql = postgres('postgresql://neondb_owner:npg_KvdgVI2ur4NJ@ep-plain-feather-anncikbh-pooler.c-6.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require');

async function check() {
    try {
        const tables = await sql`SELECT table_name FROM information_schema.tables WHERE table_schema = 'public'`;
        console.log('Tables:', tables.map(t => t.table_name));
        
        if (tables.find(t => t.table_name === 'users')) {
            const users = await sql`SELECT id, email, name FROM users LIMIT 10`;
            console.log('Users:', users);
        } else {
            console.log('Users table NOT found!');
        }
        process.exit(0);
    } catch (err) {
        console.error('DB Error:', err);
        process.exit(1);
    }
}

check();
