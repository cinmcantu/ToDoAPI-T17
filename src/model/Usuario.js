import bd from '../database/bd.js'
import usuarioDAO from '../DAO/usuarioDAO.js'
import ValidaUsuario from "../services/validacaoUsuario.js"

export default class UsuarioModel{

    // metodo para insercao do usuario no banco de dados
    insereUsuario = async (usuario)=>{
        try {
            // cria a instancia de usuario com os dados recebidos da requisição
            const novoUsuario = new ValidaUsuario(usuario.nome, usuario.email, usuario.senha)
            return await usuarioDAO.insereUsuario(novoUsuario)
        } catch (error) {
            return {
                "msg" : error.message,
                "erro" : true
            }
        }
    }

    // metodo para pegar todos usuarios do banco de dados
    pegaUsuarios = async ()=>{
        return await usuarioDAO.pegaTodosUsuarios()
    }

    pegaUmUsuario = (email)=>{
        // usaria a informaçao para fazer uma query
        return bd.usuario.filter(usuario=>usuario.email===email)
    }

    deletaUsuario = async (email)=>{  
        return await usuarioDAO.deletaUsuario(email)
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
