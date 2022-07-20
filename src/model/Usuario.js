import bd from '../database/bd.js'

let id = 0

export default class Usuario{
    constructor(nome, email, senha){
        this.id = id++
        this.nome = nome
        this.email = email
        // se for passado alguma senha, chama a função de validacao
        this.senha = senha ? this.validaSenha(senha) : undefined
    }

    // metodo de validacao de senha
    validaSenha = (senha)=>{
        if(senha.length >= 6){
            return senha
        }else{
            throw new Error("senha com tamanho errado!")
        }
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
