import Tarefa from "../model/Tarefa.js"

// funçao que vai receber a instancia do servidor como parametros
// e vai agrupar todos metodos que representam as rotas

const tarefaController = (app)=>{
    // Rotas com mesmo caminho ('/tarefa'), mas com verbos diferentes
    // são rotas diferentes

    app.get('/tarefa', (req, res)=>{
        // cria uma instancia do classe tarefa
        const tarefa = new Tarefa()

        // responde a requisição usando o metodo para pegar todas tarefas
        res.json(
            {"tarefas" : tarefa.pegaTarefas(),
              "erro" : false}
        )
    })

    app.post('/tarefa', (req, res)=>{
        const body = req.body
        // cria a instancia de tarefa com os dados recebidos da requisição
        const tarefa = new Tarefa(body.titulo, body.descricao, body.status)
        // chama o metodo para inserir a tarefa no banco de dados
        tarefa.insereTarefa(tarefa)

        // retorna um json com uma mensagem e com usuario inserido
        res.json(
            {"msg" : "Tarefa inserida com sucesso",
             "tarefa" : tarefa,
             "erro" : false}
        )
    })
}

// exportando a função
export default tarefaController
