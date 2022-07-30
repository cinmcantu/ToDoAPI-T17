import {emailValido, seisDigitos} from "./logica.js"

// metodo de validacao de senha
const validaSenha = (senha)=>{
    if(!seisDigitos(senha)){
        throw new Error("A senha precisa ter 6 ou mais caracteres")
    }
}

// metodo de validacao de email
const validaEmail = (email)=>{
    if(emailValido(email)){
        return email
    }else{
        throw new Error("Email inválido")
    }
}

// verifica se os dados recebidos são validos,
// caso receba algum erro das funções chamados, o erro é repassado
export const validaUsuario = (dados)=>{
        if(dados.email)
            validaEmail(dados.email)
        if(dados.senha)
            validaSenha(dados.senha)
}

// cria um usuario atualizado de acordo com os dados recebido
export const mesclaDadosUsuario = (atual, novo)=>{
    validaUsuario(novo)
    return {
        "nome" : novo.nome || atual.nome,
        "email" : novo.email || atual.email,
        "senha" : novo.senha || atual.senha,
    }
}

// cria um novo objeto usuario
export const criaUsuario = (dados)=>{
    validaUsuario(dados)
    return {
        "nome" : dados.nome,
        "email" : dados.email,
        "senha" : dados.senha
    }
}


