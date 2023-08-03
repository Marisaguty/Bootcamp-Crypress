import { CommonpageMethods } from "../common-page/common-page.methods";
import { SignUpElements } from "./signup.elements";

export class SignUpMethods{

    static insertUsername(username){
        SignUpElements.textboxes.username.invoke('val', username)
    }

    static insertPassword(password){
        SignUpElements.textboxes.password.invoke('val', password)
    }

    static clickOnSingupButton(){
        SignUpElements.buttons.login.click({force: true})
    }

    static singUp(username, password){
        this.insertUsername(username)
        this.insertPassword(password)
        this.clickOnSingupButton()
    }

    static verifyMessage(){
        CommonpageMethods.verifyAlert("Sing up succesful")
    }
}