import { LoginMethods } from "./pages/login/login.methods"

describe('login', () => {
  it('login', () => {
    cy.visit('https://demoblaze.com/index.html')
    cy.get('a[data-target="#logInModal"]').click()
    LoginMethods.login('prueba', 'password')
    cy.wait(10000)
  })
})



//npx cypress run --headed