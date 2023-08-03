import { CommonpageData } from "../pages/common-page/common-page.data"
import { CommonpageMethods } from "../pages/common-page/common-page.methods"
import { Logger } from "../utils/logger"
import { LoginMethods } from "../pages/login/login.methods"
import { LoginData } from "../pages/login/login.data"

describe(CommonpageData.testSuites.autenticacion , ()=>{
    it('Inicio de sesión válido', ()=>{

        Logger.stepNumber(1)
        Logger.step('Navegar a la pagina de inicio')
        CommonpageMethods.navigateToDemoBlaze()

        Logger.stepNumber(2)
        Logger.step('Hacer click en "Log in" en la barra de navegación')
        CommonpageMethods.clickOnLoginOption()

        Logger.stepNumber(3)
        Logger.step('Ingresar nombre de usuario y contraseña validos')
        LoginMethods.insertUsername(LoginData.validCredentials.user)
        LoginMethods.insertPassword(LoginData.validCredentials.pass)

        Logger.stepNumber(4)
        Logger.step('Hacer click en "Log in" para iniciar sesión')
        LoginMethods.clickOnLoginButton()
        Logger.verification('Verificar que se redirige a la pagina de inicio')
        CommonpageMethods.verifySignedUser(LoginData.validCredentials.user)


    })
})
