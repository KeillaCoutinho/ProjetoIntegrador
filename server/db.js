const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'projeto_final',
    password: '12345',
    port: 5434
});

module.exports = pool;