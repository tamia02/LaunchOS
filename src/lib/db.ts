import postgres from 'postgres'

const connectionString = process.env.NEON_DATABASE_URL!

export const sql = postgres(connectionString, {
    ssl: 'require',
})

export default sql
