import db from "../database/sqlite.js"

const dao = {

    pegaTodosUsuarios : ()=>{
        const PEGA_USUARIOS = `
        SELECT * FROM USUARIOS
        `
        return new Promise((resolve, reject)=>{
            db.all(PEGA_USUARIOS, (error,row)=>{
                if(error)
                    reject(error)
                else
                    resolve(row)
            })
        })
    },

    insereUsuario : (usuario)=>{
        const INSERE_USUARIO = `
        INSERT INTO USUARIOS (nome, email, senha)
        VALUES (?,?,?)
        `
        return new Promise((resolve, reject)=>{
            db.run(INSERE_USUARIO,
                usuario.nome, usuario.email, usuario.senha,
                (error)=>{
                    if(error)
                        reject(error)
                    else
                        resolve(usuario)
                }
            )
        })
    },

    pegaUsuarioEmail : (email)=>{
        const PEGA_USUARIO = `
        SELECT * FROM USUARIOS
        WHERE email = ?
        `
        return new Promise((resolve, reject)=>{
            db.all(PEGA_USUARIO, email, (error, row)=>{
                if(error)
                    reject(error)
                else
                    resolve(row)
            })
        })
    },

    pegaUsuarioId: (id)=>{
        const PEGA_USUARIO = `
        SELECT * FROM USUARIOS
        WHERE id = ?
        `
        return new Promise((resolve, reject)=>{
            db.get(PEGA_USUARIO, id, (error, row)=>{
                if(error)
                    reject(error)
                else
                    resolve(row)
            })
        })
    },

    deletaUsuario : (id)=>{
        const DELETA_USUARIO = `
        DELETE FROM USUARIOS
        WHERE id = ?
        `
        return new Promise((resolve, reject)=>{
            db.get(DELETA_USUARIO, id, (error, row)=>{
                if(error)
                    reject(error)
                else
                    resolve(row)
            })
        })
    },

    atualizaUsuario : (id, novoUsuario)=>{
        const ATUALIZA_USUARIO = `
        UPDATE USUARIOS
        SET nome = ?, email = ?, senha = ?
        WHERE id = ?
        `
        return new Promise((resolve, reject)=>{
            db.run(ATUALIZA_USUARIO,
                novoUsuario.nome, novoUsuario.email, novoUsuario.senha,
                id,
                (error)=>{
                    if(error)
                        reject(error)
                    else
                        resolve(novoUsuario)
                }
            )
        })  
    }
}

export default dao
