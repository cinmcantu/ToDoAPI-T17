import bd from '../database/bd.js'

export default class TarefaModel{

    // metodo para insercao da tarefa no banco de dados
    insereTarefa = (tarefa)=>{
        bd.tarefa.push(tarefa)
    }

    // metodo para pegar todas tarefas do banco de dados
    pegaTarefas = ()=>{
        return bd.tarefa
    }

}
