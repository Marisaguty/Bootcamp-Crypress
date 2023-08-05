import { CartMethods } from "../pages/cart/cart.methods"
import { CommonpageData } from "../pages/common-page/common-page.data"
import { CommonpageMethods } from "../pages/common-page/common-page.methods"
import { HomeMethods } from "../pages/home/home.methods"
import { LoginData } from "../pages/login/login.data"
import { LoginMethods } from "../pages/login/login.methods"
import { PlaceorderData } from "../pages/placeOrder/placeorder.data"
import { PlaceorderMethods } from "../pages/placeOrder/placeorder.methods"
import { ProductDetailsMethods } from "../pages/product-details/product-details.methods"
import { ThankPurchaseMethods } from "../pages/thank-you-for-you-purchase/than-you.methods"
import { Logger } from "../utils/logger"

const user = LoginData.validCredentials;
const product1 = 'Apple monitor 24'
const product2 = 'ASUS Full HD'
const product3 = 'Dell i7 8gb'

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
        HomeMethods.verifyProductDisplayed(product1)
        HomeMethods.verifyProductDisplayed(product2)

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
        HomeMethods.clickOnProductLink(product3)

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
        CartMethods.verifyProductAdded(product3)
        
    })

    it.only('Realizar una compra', ()=>{
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
        HomeMethods.clickOnProductLink(product3)

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
        CartMethods.verifyProductAdded(product3)

        Logger.stepNumber(8)
        Logger.step('Hacer click en la opcion "Cart" de la barra de navegación')
        CommonpageMethods.clickOnCartOption()

        Logger.stepNumber(9)
        Logger.verification('Verificar que se muestre la página de carrito de compras')
        CartMethods.verifyCartPageIsShow()

        Logger.stepNumber(10)
        Logger.step('Hacer click en el botón "Place Order"')
  
        CartMethods.clickOnPlaceOrderButton();
        
        Logger.stepNumber(11)
        Logger.step('Completar los campos obligatorios en la pagina de información del envio')
        PlaceorderMethods.insertOrderInformation(PlaceorderData.testDate)

        Logger.stepNumber(12)
        Logger.step('Click en el botón "Purchase"')
        PlaceorderMethods.clickOnPurchaseButton();

        Logger.stepNumber(13)
        Logger.step('Verificar que se muestra mensaje de confirmacion y nos redirige a la pagina principal')
        ThankPurchaseMethods.verifyGreenCheckMarkIsDisplayed();
        cy.wait(3000)
        ThankPurchaseMethods.clickOnOkButton()
        HomeMethods.verifyHomePageIsShow();

    })
})