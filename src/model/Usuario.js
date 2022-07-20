import bd from '../database/bd.js'
import {validaSenha, validaEmail} from '../services/validacao.js'

let id = 0

export default class Usuario{
    constructor(nome, email, senha){
        this.id = id++
        this.nome = nome
        this.email = email ? validaEmail(email) : undefined
        // se for passado alguma senha, chama a função de validacao
        this.senha = senha ? validaSenha(senha) : undefined
    }

    // metodo para insercao do usuario no banco de dados
    insereUsuario = (usuario)=>{
        bd.usuario.push(usuario)
    }

    // metodo para pegar todos usuarios do banco de dados
    pegaUsuarios = ()=>{
        return bd.usuario
    }

}
