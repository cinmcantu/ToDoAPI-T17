import app from '../../src/app.js'
import request from 'supertest'

describe("Testando rotas usuario", ()=>{
    test("Rota GET", async ()=>{
        const resposta = await request(app).get('/usuario')
        console.log(resposta.body)
        expect(resposta.status).toBe(200)
    })

    test('Se o body existe', ()=>{
        // No teste de uma rota post é possivel enviar um body
        // com o .send().
        return request(app).post('/usuario')
        .send({
            "nome" : "nome",
            "senha" : "abd1234",
            "email" : "e@e.com"
        })
        .then((response)=>{
            console.log(response.body)
            expect(response.body).toBeTruthy()
        })
    })
})
