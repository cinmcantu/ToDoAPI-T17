import bd from '../database/bd.js'

let id = 0

export default class Tarefa{
    constructor(titulo, descricao, status){
        this.id = id++
        this.titulo = titulo
        this.descricao = descricao
        this.status = status
        this.dataCriacao = new Date()
    }

    // metodo para insercao da tarefa no banco de dados
    insereTarefa = (tarefa)=>{
        bd.tarefa.push(tarefa)
    }

    // metodo para pegar todas tarefas do banco de dados
    pegaTarefas = ()=>{
        return bd.tarefa
    }

}
