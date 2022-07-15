// funçao que vai receber a instancia do servidor como parametros
// e vai agrupar todos metodos que representam as rotas

const usuarioController = (app)=>{
    // Rotas com mesmo caminho ('/usuario'), mas com verbos diferentes
    // são rotas diferentes

    app.get('/usuario', (req, res)=>{
        res.send("Rota GET para o usuario")
    })

    app.post('/usuario', (req, res)=>{
        res.send("Rota POST para usuario")
    })
}

// exportando a função
export default usuarioController
