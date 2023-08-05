import { CommonpageMethods } from "../common-page/common-page.methods";
import { ProductDetailsElements } from "./product-details.elements";

export class ProductDetailsMethods{

    static clickOnAddToCardtButton(){
        ProductDetailsElements.buttons.addToCart.click()
    }

    static verifyProductDetaulsPageDisplayed(){
        ProductDetailsElements.buttons.addToCart.should('be.visible')
    }

    static verifyProductAddedMessage(){
        CommonpageMethods.verifyAlert('Product added')
    }

}