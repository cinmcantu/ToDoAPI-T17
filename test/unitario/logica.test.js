import { 
    seisDigitos,
    emailValido
 } from "../../src/services/logica.js"

describe("Validacao de senha", ()=>{
    test("Deve aceitar senhas com seis digitos", ()=>{
        expect(seisDigitos("abcdet")).toBe(true)
    })
    
    test("Deve rejeitar senhas com menos de seis digitos", ()=>{
        expect(seisDigitos("abcde")).toBe(false)
    })
    
    test("Deve rejeitar numeros", ()=>{
        expect(seisDigitos(1234567)).toBe(false)
    })

    test("Deve rejeitar caso não venha senha", ()=>{
        expect(seisDigitos()).toBe(false)
    })
})

describe("Validacao de email", ()=>{
    test("Deve rejeitar emails sem @", ()=>{
        expect(emailValido("email.com")).toBeFalsy()
    })

    test("Deve rejeitar se não receber nenhum email", ()=>{
        expect(emailValido()).toBeFalsy()
    })

    test("Deve aceitar emails com @", ()=>{
        expect(emailValido("email@.com")).toBeTruthy()
    })
})
