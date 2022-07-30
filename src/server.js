import app from './app.js'

// escolhendo a porta em que o servidor será aberto
const port = 3000

// abrindo o servidor na porta escolhida
app.listen(port, ()=>{
    console.log(`http://localhost:${port}/`)
})