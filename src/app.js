// Importando o package express
import express from 'express'

// importando os controllers
import usuarioController from './controller/usuario-controller.js'
import tarefaController from './controller/tarefa-controller.js'

// import de middlewares
import autenticacao from './middleware/autenticacao.js'

// instanciando o servidor
const app = express()
// escolhendo a porta em que o servidor será aberto
const port = 3000

// middlewares
app.use(express.json()) // middleware que faz o parse do json do body

// outros middlewares (validações, autenticações, tratamento de erros)
// Usado se necessário dependendo das regras de negócio do processo
// Comentado para não ter problema, descomente se quiser usar essa validacao
// autenticacao(app)

// chamando os controllers e passando o servidor como parametro
usuarioController(app)
tarefaController(app)

// abrindo o servidor na porta escolhida
app.listen(port, ()=>{
    console.log(`http://localhost:${port}/`)
})
