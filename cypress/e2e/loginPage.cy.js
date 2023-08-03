import { LoginMethods } from "./pages/login/login.methods"

describe('login', () => {
  it('login', () => {
    const user = 'usuarioPrueba1'
    const pass = '123456789'
    cy.visit('https://demoblaze.com/index.html')
    cy.get('a[data-target="#logInModal"]').click()
    LoginMethods.login(user,pass)
    cy.get('a#nameofuser').should('contain.text', user)
    
  })
})



//npx cypress run --headed