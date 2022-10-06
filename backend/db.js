import pkg from 'pg';

const db = new pkg.Pool({
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: 'test11',
});

export default db;