import bd from '../database/bd.js'

export default class UsuarioModel{

    // metodo para insercao do usuario no banco de dados
    insereUsuario = (usuario)=>{
        bd.usuario.push(usuario)
    }

    // metodo para pegar todos usuarios do banco de dados
    pegaUsuarios = ()=>{
        return bd.usuario
    }

    pegaUmUsuario = (email)=>{
        // usaria a informaçao para fazer uma query
        return bd.usuario.filter(usuario=>usuario.email===email)
    }

    deletaUsuario = (email)=>{
        const newDB = bd.usuario.filter(usuario=>usuario.email!==email)
        bd.usuario = newDB
    }

    atualizaUsuario = (email, novosDados)=>{
        const newDb = bd.usuario.map(usuario=>{
            if(usuario.email === email){
                return {
                    "id": usuario.id,
                    "nome" : novosDados.nome || usuario.nome,
                    "email" : novosDados.email || usuario.email,
                    "senha" : novosDados.senha || usuario.senha,
                }
            }
            return usuario
        })

        bd.usuario = newDb

    }

}
