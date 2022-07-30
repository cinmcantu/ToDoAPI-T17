import db from '../database/db-sqlite.js'

const usuarioDAO = {
    pegaTodosUsuarios : ()=>{
        return new Promise((resolve, reject)=>{
            db.all('SELECT * FROM USUARIOS',(erro, linhas)=>{
                if(erro){
                    reject(erro)
                }else{
                    resolve(linhas)
                }
            })
        })

    },

    pegaUmUsuario : (email)=>{
        return new Promise((resolve, reject)=>{
            db.get('SELECT * FROM USUARIOS WHERE EMAIL = ?', email,
            (erro, dado)=>{
                if(erro){
                    reject(erro)
                }else{
                    resolve(dado)
                }
            })
        })

    },

    insereUsuario: (usuario)=>{
        return new Promise((resolve, reject)=>{
            db.run(`INSERT INTO USUARIOS (NOME, EMAIL, SENHA)
            VALUES (?, ?, ?)`, usuario.nome, usuario.email, usuario.senha,
            (erro)=>{
                if(erro){
                    reject(erro)
                }else{
                    resolve("Usuario inserido com sucesso")
                }
            })
        })
    },

    deletaUsuario : (email)=>{
        return new Promise((resolve, reject)=>{
            db.run(`DELETE FROM USUARIOS WHERE EMAIL = ?`, email,
            (erro)=>{
                if(erro){
                    reject(erro)
                } else{
                    resolve(`Usuário com email ${email} deletado com sucesso`)
                }
            })
        })
    },

    atualizaUsuario : (email, novoDado)=>{
        // função que monta a query para atualzar apenas os
        // valores que forem recebidos pelo body
        const query = (novoDado)=>{
            let nome = ""
            let email = ""
            let senha = ""
            if(novoDado.nome){
                nome = `NOME = ?`
            }
            if(novoDado.email){
                email = `EMAIL = ?`
                if(nome){
                    email = ', '+ email
                }
            }
            if(novoDado.senha){
                senha = `SENHA = ?`
                if(nome || email){
                    senha = ', ' + senha
                }
            }

            return `UPDATE USUARIOS SET
            ${nome} ${email} ${senha}
            WHERE EMAIL = ? `
        }

        return new Promise((resolve, reject)=>{
            db.run(query(novoDado),
            ...Object.values(novoDado),email,
            (erro)=>{
                if(erro){
                    reject(erro)
                } else{
                    resolve(`Usuário com email ${email} atualizado com sucesso`)
                }
            })
        })
    }

}

export default usuarioDAO