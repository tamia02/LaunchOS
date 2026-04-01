const postgres = require('postgres');
const sql = postgres('postgresql://neondb_owner:npg_KvdgVI2ur4NJ@ep-plain-feather-anncikbh-pooler.c-6.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require');

async function check() {
    try {
        const users = await sql`SELECT * FROM users`;
        console.log('Registered Users:', JSON.stringify(users, null, 2));
        process.exit(0);
    } catch (err) {
        console.error('DB Error:', err);
        process.exit(1);
    }
}

check();
