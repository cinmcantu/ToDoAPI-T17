const autenticacao = (app)=>{
    // Middleware que checa um atributo do header o cliente envia (usertype)
    // para saber se ele tem permissão para o acesso de determinados metodos
    app.use((req, res, next)=>{
        if(req.method !== "GET"){
            if(req.headers.usertype === "gerente"){
                next()
            }else{
                res.json({"erro" : "Usuario nao permitido"})
            }
        }else{
            // O metodo next() serve para informar que a requisição pode
            // seguir o caminho normal
            next()
        }
    })

}

export default autenticacao