export const seisDigitos = (senha)=>{
    return senha?.length >= 6
}

export const emailValido = (email)=>{
    return email?.includes("@")
}


