import usuarioModel from "../model/usuario.js"
import {criaUsuario} from "../services/validacaoUsuario.js"

// funçao que vai receber a instancia do servidor como parametros
// e vai agrupar todos metodos que representam as rotas
const usuarioController = (app)=>{
    // Rotas com mesmo caminho ('/usuario'), mas com verbos diferentes
    // são rotas diferentes

    app.get('/usuario', (req, res)=>{

        // chama função que pega os usuarios
        const todosUsuarios = usuarioModel.pegaUsuarios()
        
        // responde a requisição usando o metodo para pegar todos usuarios
        res.json(
            {"usuarios" : todosUsuarios,
             "erro" : false}
        )
    })

    app.get('/usuario/email/:email', (req, res)=>{

        const email = req.params.email

        const usuario = usuarioModel.pegaUmUsuario(email)

        // responde a requisição usando o metodo para pegar todos usuarios
        res.json(
            {"usuario": usuario,
             "erro" : false}
        )
    })

    app.post('/usuario', (req, res)=>{
        const body = req.body
        try {
            // cria a instancia de usuario com os dados recebidos da requisição
            const novoUsuario = criaUsuario(body.nome, body.email, body.senha)

            // chama o metodo para inserir o usuario no banco de dados
            usuarioModel.insereUsuario(novoUsuario)

            // retorna um json com uma mensagem e com usuario inserido
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
}

// exportando a função
export default usuarioController
