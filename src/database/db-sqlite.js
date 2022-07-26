import sqlite3 from 'sqlite3'
sqlite3.verbose()
const db = new sqlite3.Database('database.db');

process.on('SIGINT', () =>
    db.close(() => {
        console.log(' BD encerrado!');
        process.exit(0);
    })
);

export default db