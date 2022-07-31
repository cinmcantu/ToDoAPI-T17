import app from '../../src/app.js'
import request from 'supertest'

const mock = {
    "nome" : "nome",
    "senha" : "abd1234",
    "email" : "e@e.com"
}

describe("Testando rotas usuario", ()=>{
    test("Rota GET", async ()=>{
        const resposta = await request(app).get('/usuario')
        expect(resposta.status).toBe(200)
    })

    test("Rota POST", async ()=>{
        // No teste de uma rota post é possivel enviar um body
        // com o .send().
        const resposta = await request(app).post('/usuario')
        .send(mock)
        expect(resposta.status).toBe(201)
    })

    test("Rota POST com um mesmo usuário", async ()=>{
        const resposta = await request(app).post('/usuario')
        .send(mock)
        expect(resposta.status).toBe(400)
    })

    test("Rota GET um usuario", async ()=>{
        const resposta = await request(app).get(`/usuario/email/${mock.email}`)
        expect(resposta.status).toBe(200)
        expect(resposta.body.usuario.NOME).toBe(mock.nome)
    })

    test("Rota GET um usuario que não existe", async ()=>{
        const resposta = await request(app).get(`/usuario/email/email@nao.existe`)
        expect(resposta.status).toBe(404)
    })

    test("Rota PUT", async ()=>{
        const respostaPut = await request(app).put(`/usuario/email/${mock.email}`)
        .send({
            "nome" : "outro nome",
            "senha" : "1234abcd"
        })
        // Verifica se a atualização retornou 200
        expect(respostaPut.status).toBe(200)

        // Faz um get para verificar se os dados foram mesmo alterados
        const respostaGet = await request(app).get(`/usuario/email/${mock.email}`)
        expect(respostaGet.body.usuario.NOME).toBe("outro nome")
        expect(respostaGet.body.usuario.SENHA).toBe("1234abcd")
    })

    test("Rota DELETE", async ()=>{
        const respostaDelete = await request(app).delete(`/usuario/email/${mock.email}`)
        expect(respostaDelete.status).toBe(200)
        expect(respostaDelete.body.erro).toBeFalsy()

        // Verifica se o usuario foi realmente deletado
        const respostaGet = await request(app).get(`/usuario/email/${mock.email}`)
        expect(respostaGet.status).toBe(404)
    })

})
