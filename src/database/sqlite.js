import sqlite3 from 'sqlite3' // importando a lib
import { dirname } from 'path' 
import { fileURLToPath } from 'url'
sqlite3.verbose()
const filePath = dirname(fileURLToPath(import.meta.url)) + '/database.db'
const db = new sqlite3.Database(filePath);


// Esse comando serve para fechar nosso banco de dados
// quando encerramos nosso servidor
process.on('SIGINT', () =>
    db.close(() => {
        console.log(' BD encerrado!');
        process.exit(0);
    })
);

// Aqui exportamos nosso banco de dados para ser usado na aplicação toda
export default db