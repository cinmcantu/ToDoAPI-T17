import usuarioDAO from '../DAO/usuarioDAO.js'
import {
    mesclaDadosUsuario,
    criaUsuario,
    validaUsuario,
} from "../services/usuario.js"

const usuarioModel = {

    pegaUsuarios : async ()=>{
        try {
            const dados = await usuarioDAO.pegaTodosUsuarios()
            return {
                "dados" : dados,
                "total" : dados.length,
                "status" : 200
            }
            
        } catch (error) {
            throw error
        }
    },

    pegaUmUsuario : async (email)=>{
        try {
            const dados = await usuarioDAO.pegaUmUsuario(email)
            if(dados){
                return {
                    "dados" : dados,
                    "status" : 200
                }
            } else{
                return {
                    "mensagem" : `Usuário de email ${email} não encontrado`,
                    "status" : 404
                }
            }
      
        } catch (error) {
            return {
                "mensagem" : error.message,
                "status" : 400
            }
        }

    },

    // metodo para insercao do usuario no banco de dados
    insereUsuario : async (usuario)=>{
        try {
            // cria a instancia de usuario com os dados recebidos da requisição
            const novoUsuario = criaUsuario(usuario)
            const mensagem = await usuarioDAO.insereUsuario(novoUsuario)
            return {
                "mensagem" : mensagem,
                "status" : 201
            }
        } catch (error) {
            return {
                "mensagem" : error.message,
                "status" : 400
            }
        }
    },

    deletaUsuario : async (email)=>{
        try {
            const mensagem = await usuarioDAO.deletaUsuario(email)
            return {
                "mensagem" : mensagem,
                "status" : 200
            }
            
        } catch (error) {
            return {
                "mensagem" : error.message,
                "status" : 400
            }
        }
    },

    atualizaUsuario : async (email, novosDados)=>{
        try {
            validaUsuario(novosDados)
            const mensagem = await usuarioDAO.atualizaUsuario(email,novosDados)
            return {
                "mensagem" : mensagem,
                "status" : 200
            }
            
        } catch (error) {
            return {
                "mensagem" : error.message,
                "status" : 400
            }
        }
    },

}

export default usuarioModel