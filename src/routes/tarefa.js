import tarefaController from "../controller/tarefa-controller.js"

const rotasTarefa = (app)=>{
    app.get('/tarefa', tarefaController.pegaTarefa)
}

export default rotasTarefa
