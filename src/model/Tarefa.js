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

    // metodo para pegar uma tarefa do banco de dados
    pegaUmaTarefa = (titulo)=>{
        return bd.tarefa.filter(tarefa=>tarefa.titulo===titulo)
    }

    deletaTarefa = (titulo)=>{
        const newDB = bd.tarefa.filter(tarefa=>tarefa.titulo!==titulo)
        bd.tarefa = newDB
    }

    atualizaTarefa = (titulo, novosDados)=>{
        const newDb = bd.tarefa.map(tarefa=>{
            if(tarefa.titulo === titulo){
                return {
                    "id": tarefa.id,
                    "titulo" : novosDados.titulo || tarefa.titulo,
                    "descricao" : novosDados.descricao || tarefa.descricao,
                    "status" : novosDados.status || tarefa.status,
                    "dataCriacao" : tarefa.dataCriacao
                }
            }
            return tarefa
        })
        bd.tarefa = newDb
    }

}
