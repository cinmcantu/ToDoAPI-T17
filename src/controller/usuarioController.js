import usuarioModel from "../model/usuarioModel.js"

const usuarioController = (app)=>{

    app.get('/usuario', async (req, res)=>{
        try {
            const resposta = await usuarioModel.pegaUsuarios()

            res.status(resposta.status).json({
                "usuarios": resposta.dados,
                "total" : resposta.total,
                "erro" : false
            })
            
        } catch (error) {
            res.status(500).json({
                "mensagem": error.mensagem,
                "erro" : true
            })
        }

    })

    app.get('/usuario/email/:email', async (req, res)=>{
        const email = req.params.email

        try {
            const resposta = await usuarioModel.pegaUmUsuario(email)
            if(resposta.status===200){
                res.status(resposta.status).json({
                    "usuario": resposta.dados,
                    "erro" : false
                })   
            }else{
                res.status(resposta.status).json({
                    "mensagem": resposta.mensagem,
                    "erro" : true
                }) 
            }
            
        } catch (error) {
            res.status(500).json({
                "mensagem": error.message,
                "erro" : true
            })
        }
    })

    app.post('/usuario', async (req, res)=>{
        const body = req.body
        try {
            const {status} = await usuarioModel.pegaUmUsuario(body.email)
            if(status === 404){
                const resposta = await usuarioModel.insereUsuario(body)

                res.status(resposta.status).json({
                    "mensagem": resposta.mensagem,
                    "erro" : false
                })
            }else{
                res.status(400).json({
                    "mensagem": `Usuário com email ${body.email} já existe`,
                    "erro" : true
                })
            }
                        
        } catch (error) {
            res.status(500).json({
                "mensagem": error.message,
                "erro" : true
            })
        }

    })

    app.delete('/usuario/email/:email', async (req,res)=>{
        const email = req.params.email
        try {
            const {status,mensagem} = await usuarioModel.pegaUmUsuario(email)
            if(status===404){
                res.status(404).json({
                    "mensagem": mensagem,
                    "erro" : true
                })
            }else{
                const resposta = await usuarioModel.deletaUsuario(email)
        
                res.status(resposta.status).json({
                    "mensagem": resposta.mensagem,
                    "erro" : false
                })
            }
            
        } catch (error) {
            res.status(500).json({
                "mensagem": error.message,
                "erro" : true
            })
        }
    })

    app.put('/usuario/email/:email',async (req, res)=>{
        const body = req.body
        const email = req.params.email
        try {
            const {status,mensagem} = await usuarioModel.pegaUmUsuario(email)
            if(status===404){
                res.status(404).json({
                    "mensagem": mensagem,
                    "erro" : true
                })
            }else{
                const resposta = await usuarioModel.atualizaUsuario(email, body)
        
                res.status(resposta.status).json({
                    "mensagem": resposta.mensagem,
                    "erro" : false
                })
            }
            
        } catch (error) {
            res.status(500).json({
                "mensagem": error.message,
                "erro" : true
            })
        }
    })
}

export default usuarioController
