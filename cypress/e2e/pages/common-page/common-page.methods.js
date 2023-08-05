import { CommonpageData } from "./common-page.data";
import { CommonpageElements } from "./common-page.elements";

export class CommonpageMethods{

    static navigateToDemoBlaze(){
        cy.clearAllCookies()
        //estas tres líneas son para corregir posibles errores
        cy.clearAllLocalStorage()
        cy.visit(CommonpageData.url)
        CommonpageMethods.clickOnHomeOption()
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
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        //⬆️si aparece un error de la aplicación ignora y continua
          })
    }
    
    static clickOnLoginOption(){
        CommonpageElements.topMenu.login.click()
    }
    
    static clickOnSignUpOption(){
        CommonpageElements.topMenu.singUp.click()
    }

    static verifyAlert(mesage){
        cy.on('window:alert', (str)=>{
            expect(str).to.equal(mesage)
        })
    }

    static generateRandomString(length =  10){  //por defecto 10

        let result = '';
        const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        let counter = 0;
        while (counter < length) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
            counter += 1;
        }
        return result;
        
    }

    static verifySignedUser(username){
        CommonpageElements.signedUser.should('have.text', `Welcome ${username}`)
    }

    static logout(){
        cy.get('body').then($body=>{
            if($body.find('#logout2[style="display: block;"]').length>0){
                CommonpageElements.topMenu.logout.click({force:true});
            }
        })
    }
}