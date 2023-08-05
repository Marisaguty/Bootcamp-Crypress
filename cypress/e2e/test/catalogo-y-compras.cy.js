import { CommonpageData } from "../pages/common-page/common-page.data"
import { CommonpageMethods } from "../pages/common-page/common-page.methods"
import { HomeMethods } from "../pages/home/home.methods"
import { LoginData } from "../pages/login/login.data"
import { LoginMethods } from "../pages/login/login.methods"
import { Logger } from "../utils/logger"

const user = LoginData.validCredentials;

describe(CommonpageData.testSuites.catalogoYCompras , ()=>{
    it('Navegación por categorías', ()=>{
        Logger.stepNumber(1)
        Logger.step('Iniciar sesión con un usuario registrado')
        Logger.subStep('Navegar a la web')
        CommonpageMethods.navigateToDemoBlaze()
        Logger.subStep('Click on Login link')
        CommonpageMethods.clickOnLoginOption()
        LoginMethods.login(user.user, user.pass)

        Logger.stepNumber(2)
        Logger.step('Navegar a la página de inicio')
        CommonpageMethods.clickOnHomeOption()

        Logger.stepNumber(3)
        Logger.step('Seleccionar una categoría de prodictos en el menú de navegación')
        HomeMethods.clickOnMonitorsOption()
        Logger.verification('Verificar que se muestra la lista de productos de la categoría selecionada')
        HomeMethods.verifyProductDisplayed('Apple monitor 24')
        HomeMethods.verifyProductDisplayed('ASUS Full HD')

    })
})