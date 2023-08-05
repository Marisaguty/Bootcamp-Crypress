import { CartMethods } from "../pages/cart/cart.methods"
import { CommonpageData } from "../pages/common-page/common-page.data"
import { CommonpageMethods } from "../pages/common-page/common-page.methods"
import { HomeMethods } from "../pages/home/home.methods"
import { LoginData } from "../pages/login/login.data"
import { LoginMethods } from "../pages/login/login.methods"
import { ProductDetailsMethods } from "../pages/product-details/product-details.methods"
import { Logger } from "../utils/logger"

const user = LoginData.validCredentials;
const product = 'Dell i7 8gb'

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

    it('Agregar producto al carrito', ()=>{
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
        Logger.step('Seleccionar una categoría de productos en el menú de navegación')
        HomeMethods.clickOnLaptopsOption()

        Logger.stepNumber(4)
        Logger.step('Hacer click en un producto específico')
        HomeMethods.clickOnProductLink(product)

        Logger.stepNumber(5)
        Logger.verification('Verificar que se muestra la pagina de detalle del producto')
        ProductDetailsMethods.verifyProductDetaulsPageDisplayed()

        Logger.stepNumber(6)
        Logger.step('Hacer click en el botón "Add to card"')
        ProductDetailsMethods.clickOnAddToCardtButton()

        Logger.stepNumber(7)
        Logger.verification('Verificar que se muestra un mensaje de confirmación y el producto se agrega al carrito')
        ProductDetailsMethods.verifyProductAddedMessage()
        CommonpageMethods.clickOnCartOption()
        CartMethods.verifyProductAdded(product)
        

    })
})