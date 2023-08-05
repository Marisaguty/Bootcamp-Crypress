import { Logger } from "../../utils/logger";
import { CommonpageMethods } from "../common-page/common-page.methods";
import { LoginMethods } from "../login/login.methods";
import { CartElements } from "./cart.elements";

export class CartMethods{

    static clickOnDeleteLink(productName){
        CartElements.links.delete(productName).click();
    }

    static verifyProductAdded(productName){
        CartElements.links.delete(productName).should('be.visible')
    }

    static verifyCartPageIsShow(){
        cy.url().should('include', '/cart.html')
    }

    static clickOnPlaceOrderButton(){
        CartElements.buttons.placeOrder.click();
    }

    static deleteProducts(){
        cy.intercept('POST', 'https://api.demoblaze.com/deleteitem').as('deleteItem')
        //(Network - interceptar la llamada de API)
        cy.get('a[onclick*="deleteItem"]').each(link=>{
            link.click()
            /* cy.wait(1000) */ //mala prácctica por lo que uso intercept
            cy.wait('@deleteItem')
        })
    }

    static emptyCart(user,pass){
        Logger.subStep('Navegar a Demoblaze')
        CommonpageMethods.navigateToDemoBlaze()
        Logger.subStep('Click en Log out')
        CommonpageMethods.logout()
        Logger.subStep('Click en Home')
        CommonpageMethods.clickOnHomeOption
        Logger.subStep('Click en Log in')
        CommonpageMethods.clickOnLoginOption()
        Logger.subStep(`introducir datos en Log in ${user}/${pass}`)
        LoginMethods.login(user, pass)
        Logger.subStep('Click en Cart')
        CommonpageMethods.clickOnCartOption()
        Logger.subStep('Borrar productos del carrito')
        this.deleteProducts()
    }
}