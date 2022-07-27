import UsuarioModel from "../model/Usuario.js"
import db from '../database/db-sqlite.js'

// funçao que vai receber a instancia do servidor como parametros
// e vai agrupar todos metodos que representam as rotas

const usuarioController = (app)=>{
    // Rotas com mesmo caminho ('/usuario'), mas com verbos diferentes
    // são rotas diferentes

    // cria uma instancia do classe model usuario que sera usada para todas rotas
    const modelUsuario = new UsuarioModel()

    app.get('/usuario', async (req, res)=>{
        try {
            const todosUsuarios = await modelUsuario.pegaUsuarios()
        
            // responde a requisição usando o metodo para pegar todos usuarios
            res.json(todosUsuarios)
            
        } catch (error) {
            res.json(error)
        }

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

    app.post('/usuario', async (req, res)=>{
        const body = req.body
        try {
            // chama o metodo para inserir o usuario no banco de dados
            const resposta = await modelUsuario.insereUsuario(body)

            // retorna um json com uma mensagem e com usuario inserido
            res.json(resposta)
            
        } catch (error) {
            res.json({
                "msg" : error.message,
                "erro" : true
            })
        }

    })

    app.delete('/usuario/email/:email', (req,res)=>{
        try {
            const email = req.params.email
            const resposta = modelUsuario.deletaUsuario(email)
    
            res.json(resposta)
            
        } catch (error) {
            res.json(error)
        }


    })

    app.put('/usuario/email/:email', (req, res)=>{
        const body = req.body
        const email = req.params.email
        try {
            const novosDados = new ValidaUsuario(body.nome, body.email, body.senha)
            modelUsuario.atualizaUsuario(email, novosDados)
            res.json({
                "msg" : `Usuário com email ${email} atualizado com sucesso`,
                "usuario" : novosDados,
                "erro" : false
            })

        } catch (error) {
            res.json({
                "msg" : error.message,
                "erro" : true
            })
        }
    })
}

// exportando a função
export default usuarioController
