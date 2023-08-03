import { ThankPurchaseElements } from "./thank-purchase.elements";

export class ThankPurchaseMethods{

    static clickOnOkButton(){
        ThankPurchaseElements.buttons.ok.click()
    }

    static verifyGreenCheckMarkIsDisplayed(){
        ThankPurchaseElements.icons.greenCheckMark.should('exist')
    }
}