import dao from '../DAO/usuarioDAO.js'

const usuarioModel = {

    // metodo para insercao do usuario no banco de dados
    insereUsuario : async (usuario)=>{
        return await dao.insereUsuario(usuario)
    },

    // metodo para pegar todos usuarios do banco de dados
    pegaUsuarios : async ()=>{
        return await dao.pegaTodosUsuarios()
    },

    pegaUmUsuarioEmail : async (email)=>{
        return await dao.pegaUsuarioEmail(email)
    },

    pegaUmUsuarioId : async (id)=>{
        return await dao.pegaUsuarioId(id)
    },

    deletaUsuario : async (id)=>{
        return await dao.deletaUsuario(id)
    },

    atualizaUsuario : async (id, novosDados)=>{
        const usuarioAtual = await usuarioModel.pegaUmUsuarioId(id)
        console.log(usuarioAtual)
        if(usuarioAtual){
            const usuarioAtualizado = {
                "nome" : novosDados.nome || usuarioAtual.nome,
                "email" : novosDados.email || usuarioAtual.email,
                "senha" : novosDados.senha || usuarioAtual.senha
            }
            return await dao.atualizaUsuario(id, usuarioAtualizado)
        } else{
            throw new Error("Usuario não encontrado")
        }

    },
}

export default usuarioModel
