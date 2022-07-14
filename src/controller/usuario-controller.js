const usuarioController = (app)=>{
    app.get('/usuario', (req, res)=>{
        res.send("Rota GET para o usuario")
    })
}

export default usuarioController
