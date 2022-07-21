import bd from '../database/bd.js'

export default class UsuarioModel{

    // metodo para insercao do usuario no banco de dados
    insereUsuario = (usuario)=>{
        bd.usuario.push(usuario)
    }

    // metodo para pegar todos usuarios do banco de dados
    pegaUsuarios = ()=>{
        return bd.usuario
    }

    pegaUmUsuario = (email)=>{
        // usaria a informaçao para fazer uma query
        return bd.usuario.filter(usuario=>usuario.email===email)
    }

}
