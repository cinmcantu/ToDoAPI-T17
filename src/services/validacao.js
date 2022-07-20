// metodo de validacao de senha
export const validaSenha = (senha)=>{
    if(senha.length >= 6){
        return senha
    }else{
        throw new Error("A senha precisa ter 6 ou mais caracteres")
    }
}

export const validaEmail = (email)=>{
    if(email.includes("@")){
        return email
    }else{
        throw new Error("Email inválido")
    }
}