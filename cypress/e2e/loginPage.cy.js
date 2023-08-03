import { LoginMethods } from "./pages/login/login.methods"
import { Logger } from "./utils/logger"

describe('login', () => {
  it('login', () => {
    const user = 'usuarioPrueba1'
    const pass = '123456789'

    Logger.stepNumber(1)
    Logger.step('Navigate to Demoblaze page')
    cy.visit('https://demoblaze.com/index.html')

    Logger.stepNumber(2)
    Logger.step('Click on "Log in"')
    cy.get('a[data-target="#logInModal"]').click()

    Logger.stepNumber(3)
    Logger.step(`Login with this credentials: "${user}" - "${pass}"`)
    LoginMethods.login(user,pass)

    Logger.verification(`The Home should show 'Welcome ${user}' text`)
    cy.get('a#nameofuser').should('contain.text', user)
    
  })
})



//npx cypress run --headed