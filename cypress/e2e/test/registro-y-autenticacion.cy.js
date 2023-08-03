import { CommonpageData } from "../pages/common-page/common-page.data"
import { CommonpageMethods } from "../pages/common-page/common-page.methods"
import { SignUpMethods } from "../pages/signUp/signup.methods"
import { Logger } from "../utils/logger"

const user = CommonpageMethods.generateRandomString();
const pass = CommonpageMethods.generateRandomString(7)

describe(CommonpageData.testSuites.registroYAutenticacion, ()=>{
    it('Registro de usuario válido', ()=>{
        

        cy.clearCookies();

        Logger.stepNumber(1)
        Logger.step('Navegar a la pagina de inicio')
        CommonpageMethods.navigateToDemoBlaze()

        Logger.stepNumber(2)
        Logger.step('Hacer click en "Sing up" en la barra de navegación')
        CommonpageMethods.clickOnSignUpOption();

        Logger.stepNumber(3)
        Logger.step('Completar todos los campos obligatorios con información válida')
        SignUpMethods.insertUsername(user)
        SignUpMethods.insertPassword(pass)

        Logger.stepNumber(4)
        Logger.step('Hacer click en "Sing Up" para registrar usuario')
        SignUpMethods.clickOnSingupButton()
        
        /* Logger.verification('Verificar que se muestre el mensaje "Sing up succesful"')
        SignUpMethods.verifyMessage() */
       

    })
})