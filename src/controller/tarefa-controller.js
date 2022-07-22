import TarefaModel from "../model/Tarefa.js"
import ValidacaoTarefa from "../services/validacaoTarefa.js"

// funçao que vai receber a instancia do servidor como parametros
// e vai agrupar todos metodos que representam as rotas

const tarefaController = (app)=>{
    // Rotas com mesmo caminho ('/tarefa'), mas com verbos diferentes
    // são rotas diferentes

    // cria uma instancia global do classe tarefaModel
    const tarefaModel = new TarefaModel()

    app.get('/tarefa', (req, res)=>{
        const tarefas = tarefaModel.pegaTarefas()

        // responde a requisição usando o metodo para pegar todas tarefas
        res.json(
            {"tarefas" : tarefas,
             "erro" : false}
        )
    })

    // Rota para pegar um dado especifico baseado no parametro enviado
    app.get('/tarefa/titulo/:titulo', (req, res)=>{

        // recebe o parametro da rota
        const titulo = req.params.titulo

        // chama o método que faz a busca no bd usando o parametro enviado
        // como filtro
        const tarefa = tarefaModel.pegaUmaTarefa(titulo)

        // responde a requisição usando o metodo para pegar uma tarefa
        res.json(
            {"tarefa" : tarefa,
              "erro" : false}
        )
    })

    app.post('/tarefa', (req, res)=>{
        const body = req.body

        try {
            // cria a instancia de tarefa com os dados recebidos da requisição
            const novaTarefa = new ValidacaoTarefa(body.titulo, body.descricao, body.status)

            // chama o metodo para inserir a tarefa no banco de dados
            tarefaModel.insereTarefa(novaTarefa)

            // retorna um json com uma mensagem e com tarefa inserido
            res.json(
                {"msg" : "Tarefa inserida com sucesso",
                "tarefa" : novaTarefa,
                "erro" : false}
            ) 
        } catch (error) {
            res.json(
                {"msg" : error.message,
                "erro" : true}
            ) 
        }

    })

    app.delete('/tarefa/titulo/:titulo', (req,res)=>{
        const titulo = req.params.titulo
        tarefaModel.deletaTarefa(titulo)

        res.json({
            "msg" : `Tarefa com titulo ${titulo} deletada com sucesso`,
            "erro" : false
        })
    })

    app.put('/tarefa/titulo/:titulo', (req, res)=>{
        const body = req.body
        const titulo = req.params.titulo
        try {
            const novosDados = new ValidacaoTarefa(body.titulo, body.descricao, body.status)
            tarefaModel.atualizaTarefa(titulo, novosDados)
            res.json({
                "msg" : `Tarefa com título ${titulo} atualizada com sucesso`,
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
export default tarefaController
