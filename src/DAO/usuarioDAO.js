import db from '../database/db-sqlite.js'

const usuarioDAO = {
    pegaTodosUsuarios : ()=>{
        return new Promise((resolve, reject)=>{
            db.all('SELECT * FROM USUARIOS',(erro, linhas)=>{
                if(erro){
                    reject({
                        "mensagem" : erro.message,
                        "erro" : true
                    })
                }else{
                    resolve({
                        "usuarios" : linhas,
                        "erro" : false
                    })
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
                    reject({
                        "mensagem" : erro.message,
                        "erro" : true
                    })
                }else{
                    resolve({
                        "mensagem" : "Usuario inserido com sucesso",
                        "erro" : false
                    })
                }
            })
        })
    },

    deletaUsuario : (email)=>{
        return new Promise((resolve, reject)=>{
            db.run(`DELETE FROM USUARIOS WHERE EMAIL = ?`, email,
            (erro)=>{
                if(erro){
                    reject({
                        "mensagem" : erro.message,
                        "erro" : true
                    })
                } else{
                    resolve({
                        "msg" : `Usuário com email ${email} deletado com sucesso`,
                        "erro" : false
                    })
                }
            })
        })
    }

}

export default usuarioDAO