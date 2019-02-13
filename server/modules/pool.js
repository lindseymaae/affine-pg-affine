const pg = require('pg');

const pool = pg.Pool({
    host: 'localhost', // where is your database?
    port: 5432, // what port is your database on? (Almost always 5432)
    database: 'restraunts', // the name of your database
    max: 10, // how many connections (queries) at one time
    idleTimeoutMillis: 30000 // 30 seconds to try to connect, otherwise cancel query
});

pool.on('connect', () => {
    console.log('Postgresql connected');
});
pool.on('error', (error) => {
    console.log('Error with postgres pool', error);
});

module.exports = pool