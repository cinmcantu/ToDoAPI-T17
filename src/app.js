// Importando o package express
import express from 'express'

// importando as rotas
import rotasUsuario from './routes/usuario.js'
import rotasTarefa from './routes/tarefa.js'

// instanciando o servidor
const app = express()
// escolhendo a porta em que o servidor será aberto
const port = 3000

// chamando as rotas e passando o servidor como parametro
rotasUsuario(app)
rotasTarefa(app)

// abrindo o servidor na porta escolhida
app.listen(port, ()=>{
    console.log(`http://localhost:${port}/`)
})
