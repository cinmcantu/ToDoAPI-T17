const tarefaController = (app)=>{
    app.get('/tarefa', (req, res)=>{
        res.send("Rota GET para o tarefa")
    })
}

export default tarefaController
