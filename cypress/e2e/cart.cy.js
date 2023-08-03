import { CartMethods } from "./pages/cart/cart.methods"
import { LoginMethods } from "./pages/login/login.methods"

describe('cart', () => {
  it('cart', () => {
    cy.visit('https://demoblaze.com/index.html')
    cy.wait(30000)
    CartMethods.clickOnDeleteLink('Nokia lumia 1520')
    cy.wait(10000)
  })
})

//Aqui añado manualmente los productos, por eso tengo tiempo de espera