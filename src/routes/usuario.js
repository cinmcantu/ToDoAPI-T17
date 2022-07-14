import usuarioController from "../controller/usuario-controller.js"

const rotasUsuario = (app)=>{
    app.get('/usuario', usuarioController.pegaUsuario)
}

export default rotasUsuario