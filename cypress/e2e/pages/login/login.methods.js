import { Logger } from "../../utils/logger";
import { CommonpageElements } from "../common-page/common-page.elements";
import { CommonpageMethods } from "../common-page/common-page.methods";
import { LoginElements } from "./login.elements";

export class LoginMethods{

    static insertUsername(username){
        /* LoginElements.textboxes.username.type(username) */
        LoginElements.textboxes.username.invoke('val', username)
    }

    static insertPassword(password){
        LoginElements.textboxes.password.invoke('val',password)
    }

    static clickOnLoginButton(){
        LoginElements.buttons.login.click()
    }

    static login(username, password){
        Logger.subStep('Insert username')
        this.insertUsername(username)

        Logger.subStep('Insert password')
        this.insertPassword(password)

        Logger.subStep('Click on Login button')
        this.clickOnLoginButton()
    }

    static verifyWrongPasswordMesage(){
        CommonpageMethods.verifyAlert('Wrong password.')
    }
}