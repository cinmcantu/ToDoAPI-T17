import express from 'express'

const app = express()
const port = 3000

app.get('/usuario', (req, res)=>{
    res.send("Rota GET para o usuario")
})

app.get('/tarefa', (req, res)=>{
    res.send("Rota GET para o tarefa")
})

app.listen(port, ()=>{
    console.log(`http://localhost:${port}/`)
})