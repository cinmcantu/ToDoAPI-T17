// Importando o packages
import express from 'express'
import cors from 'cors'


// importando os controllers
import usuarioController from './controller/usuarioController.js'

// import de middlewares
import autenticacao from './middleware/autenticacao.js'

// instanciando o servidor
const app = express()


// middlewares
app.use(cors()) // middleware que libera o frontend acessar nossa api
app.use(express.json()) // middleware que faz o parse do json do body

// outros middlewares (validações, autenticações, tratamento de erros)
// Usado se necessário dependendo das regras de negócio do processo
// Comentado para não ter problema, descomente se quiser usar essa validacao
// autenticacao(app)

// chamando os controllers e passando o servidor como parametro
usuarioController(app)

export default app
