import { ThankPurchaseElements } from "./thank-purchase.elements";

export class ThankPurchaseMethods{

    static clickOnOkButton(){
        cy.wait(1000)
        ThankPurchaseElements.buttons.ok.click()
    }

    static verifyGreenCheckMarkIsDisplayed(){
        ThankPurchaseElements.icons.greenCheckMark.should('exist')
    }
}