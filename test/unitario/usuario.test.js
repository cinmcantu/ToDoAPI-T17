import { 
    novoUsuario,
    validaUsuario
 } from "../../src/services/usuario.js"

describe("Verifica se o usuario é valido", ()=>{
    test("deve rejeitar se a senha for invalida", ()=>{
        expect(()=>validaUsuario({
            "nome" : "nome",
            "email": "email@email.com",
            "senha" : "abcde"
        })).toThrow("A senha precisa ter 6 ou mais caracteres")
    })

    test("deve rejeitar se o email for invalido", ()=>{
        expect(()=>validaUsuario({
            "nome" : "nome",
            "email": "email.email.com",
            "senha" : "abcdef"
        })).toThrow("Email inválido")
    })

    test("Não deve expor erro se o usuario for valido", ()=>{
        expect(()=>validaUsuario({
            "nome" : "nome",
            "email": "email@email.com",
            "senha" : "abcdef"
        })).not.toThrow()
    })
})

describe("Criando usuario", ()=>{
    test("Deve criar um usuario valido", ()=>{
        expect(novoUsuario({
            "nome" : "nome",
            "email": "email@email.com",
            "senha" : "abcdef"
        })).toEqual({
            "nome" : "nome",
            "email": "email@email.com",
            "senha" : "abcdef"
        })
    })

    test("deve rejeitar se for invalido", ()=>{
        expect(()=>novoUsuario({
            "nome" : "nome",
            "email": "email.email.com",
            "senha" : "abcdef"
        })).toThrow()
    })
})
