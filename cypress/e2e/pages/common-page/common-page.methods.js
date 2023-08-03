import { CommonpageData } from "./common-page.data";
import { CommonpageElements } from "./common-page.elements";

export class CommonpageMethods{

    static navigateToDemoBlaze(){
        cy.visit(CommonpageData.url)
    }

    static clickOnHomeOption(){
        CommonpageElements.topMenu.home.click()
    }
    
    static clickOnContactOption(){
        CommonpageElements.topMenu.contact.click()
    }

    
    static clickOnAboutUsOption(){
        CommonpageElements.topMenu.aboutUs.click()
    }
    
    static clickOnCartOption(){
        CommonpageElements.topMenu.cart.click()
    }
    
    static clickOnLoginOption(){
        CommonpageElements.topMenu.login.click()
    }
    
    static clickOnSignUpOption(){
        CommonpageElements.topMenu.singUp.click()
    }
}