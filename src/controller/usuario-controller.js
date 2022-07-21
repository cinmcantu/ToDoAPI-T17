import usuarioModel from "../model/usuario.js"
import {criaUsuario, validaSenha} from "../services/validacaoUsuario.js"

const usuarioController = (app)=>{

    app.get('/usuario', async (req, res)=>{
        try {
            const todosUsuarios = await usuarioModel.pegaUsuarios()
            res.json(
                {"usuarios" : todosUsuarios,
                 "erro" : false}
            )
        } catch (error) {
            res.json(
                {"msg" : error.message,
                 "erro" : true}
            )
        }
    })

    app.get('/usuario/email/:email', async (req, res)=>{
        const email = req.params.email
        try {
            const usuario = await usuarioModel.pegaUmUsuarioEmail(email)
            res.json(
                {"usuario": usuario,
                 "erro" : false}
            )
        } catch (error) {
            res.json(
                {"msg" : error.message,
                 "erro" : true}
            )
        }
    })

    app.post('/usuario', async (req, res)=>{
        const body = req.body
        try {
            const novoUsuario = criaUsuario(body.nome, body.email, body.senha)
            await usuarioModel.insereUsuario(novoUsuario)
            res.json(
                {"msg" : "Usuário inserido com sucesso",
                "usuario" : novoUsuario,
                "erro" : false}
            )
            
        } catch (error) {
            res.json(
                {"msg" : error.message,
                 "erro" : true}
            )
        }
    })

    app.delete('/usuario/id/:id', async (req, res)=>{
        const id = req.params.id
        try {
            await usuarioModel.deletaUsuario(id)

            res.json(
                {"msg" : "Usuário deletado com sucesso",
                "erro" : false}
            )
            
        } catch (error) {
            res.json(
                {"msg" : error.message,
                 "erro" : true}
            )
        }
    })

    app.put('/usuario/id/:id', async (req, res)=>{
        const body = req.body
        const id = req.params.id
        try {
            const usuarioValidado = criaUsuario(body.nome, body.email, body.senha)
            await usuarioModel.atualizaUsuario(id,usuarioValidado)
            res.json(
                {"msg" : "Usuário atualizado com sucesso",
                 "usuario" : usuarioValidado,
                 "erro" : false}
            )
            
        } catch (error) {
            res.json(
                {"msg" : error.message,
                 "erro" : true}
            )
        }
    })

    app.patch('/usuario/senha/id/:id', async (req, res)=>{
        const id = req.params.id
        const body = req.body
        try {
            validaSenha(body.senha)
            await usuarioModel.atualizaUsuario(id, {"senha": body.senha})
            res.json(
                {"msg" : "Senha atualizada",
                 "erro" : false}
            )
            
        } catch (error) {
            res.json(
                {"msg" : error.message,
                 "erro" : true}
            )
        }
    })
}


export default usuarioController
