
import { HomeMethods } from "./pages/home/home.methods"

describe('Clickar productos', ()=>{
    it('Clickar productos', ()=>{
        cy.visit('https://demoblaze.com/index.html')
        HomeMethods.clickOnProductLink('Iphone 6 32gb')
        cy.get('.name').should('contain.text', 'Iphone 6 32gb')
       
    })
})