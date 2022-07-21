/*
Esse arquivo deve ser executado apenas uma vez para que a o banco seja criado e populado
*/
import sqlite3 from 'sqlite3'
sqlite3.verbose()
// Serve para fixar um caminho do meu database
import { dirname } from'path'
import { fileURLToPath } from 'url'
const filePath = dirname(fileURLToPath(import.meta.url)) + '/database.db'

// Criando o arquivo e/ou abrindo a "conexão" do meu database
const db = new sqlite3.Database(filePath);

//==== Usuários
const USUARIOS_SCHEMA = `
CREATE TABLE IF NOT EXISTS "USUARIOS" (
    "id" INTEGER PRIMARY KEY AUTOINCREMENT,
    "nome" varchar(64),
    "email" varchar(64),
    "senha" varchar(64)
  );`;

const ADD_USUARIOS_DATA = `
INSERT INTO USUARIOS (id, nome, email, senha)
VALUES 
    (1, 'Eugênio Oliveira', 'eugenio.oliveira@bol.com.br', '*******'),
    (2, 'Olívia Ribeiro', 'olivia.ribeiro@gmail.com', '********'),
    (3, 'Mirtes Faria Lima', 'mirtes_fl@yahoo.com', '********')
`

function criaTabelaUsr() {
    db.run(USUARIOS_SCHEMA, (error)=> {
       if (error) console.log("Erro ao criar tabela de usuários");
    })
}


function populaTabelaUsr() {
    db.run(ADD_USUARIOS_DATA, (error)=> {
       if (error) console.log("Erro ao popular tabela de usuários");
    })
}

db.serialize( ()=> {
    criaTabelaUsr();
    populaTabelaUsr();
})