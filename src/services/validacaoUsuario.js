// função de validacao de senha
export const validaSenha = (senha)=>{
    if(senha){
        if(senha.length < 6){
            throw new Error("A senha precisa ter 6 ou mais caracteres")
        }          
    }else{
        throw new Error("Insira uma senha com 6 ou mais caracteres")
    }

}

// função de validacao de email
export const validaEmail = (email)=>{
    if(email){
        if(!email.includes("@")){
            throw new Error("Email inválido")
        }
    }else{
        throw new Error("Insira um email")
    }
}


export const criaUsuario = (nome, email, senha)=>{
    // se o email não for valido, joga erro
    validaEmail(email)
    // se senha não for valida, joga erro
    validaSenha(senha)

    // se nenhum erro form jogado, retorna objeto
    return{
        "nome" : nome,
        "email" : email,
        "senha" : senha
    }
}
