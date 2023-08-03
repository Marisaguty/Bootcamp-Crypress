import { SignUpMethods } from "./pages/signUp/signup.methods"

describe('SingUp', ()=>{
    it('SingUp', ()=>{
        const user = 'prueba2'
        const pass = '123456789'
        cy.visit('https://demoblaze.com/index.html')
        cy.get('a[data-target="#signInModal"]').click()
        SignUpMethods.singUp(user, pass)

    })
})