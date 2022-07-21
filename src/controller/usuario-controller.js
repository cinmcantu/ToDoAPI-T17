import UsuarioModel from "../model/Usuario.js"
import ValidaUsuario from "../services/validacaoUsuario.js"

// funçao que vai receber a instancia do servidor como parametros
// e vai agrupar todos metodos que representam as rotas

const usuarioController = (app)=>{
    // Rotas com mesmo caminho ('/usuario'), mas com verbos diferentes
    // são rotas diferentes

    // cria uma instancia do classe model usuario que sera usada para todas rotas
    const modelUsuario = new UsuarioModel()

    app.get('/usuario', (req, res)=>{

        const todosUsuarios = modelUsuario.pegaUsuarios()
        
        // responde a requisição usando o metodo para pegar todos usuarios
        res.json(
            {"usuarios" : todosUsuarios,
             "erro" : false}
        )
    })

    // Rota para pegar um dado especifico baseado no parametro enviado
    app.get('/usuario/email/:email', (req, res)=>{

        // recebe o parametro da rota
        const email = req.params.email

        // chama o método que faz a busca no bd usando o parametro enviado
        // como filtro
        const usuario = modelUsuario.pegaUmUsuario(email)

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
            const novoUsuario = new ValidaUsuario(body.nome, body.email, body.senha)

            // chama o metodo para inserir o usuario no banco de dados
            modelUsuario.insereUsuario(novoUsuario)

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
