// funçao que vai receber a instancia do servidor como parametros
// e vai agrupar todos metodos que representam as rotas

const tarefaController = (app)=>{
    // Rotas com mesmo caminho ('/tarefa'), mas com verbos diferentes
    // são rotas diferentes

    app.get('/tarefa', (req, res)=>{
        res.send("Rota GET para o tarefa")
    })

    app.post('/tarefa', (req, res)=>{
        res.send("Rota POST para usuario")
    })
}

// exportando a função
export default tarefaController
