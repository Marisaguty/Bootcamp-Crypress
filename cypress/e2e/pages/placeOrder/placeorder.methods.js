import { PlaceorderElements } from "./placeorder.elements";

export class PlaceorderMethods{
    
    static insertName(name){
        PlaceorderElements.textboxes.name.invoke('val', name)
    }

    static insertCountry(country){
        PlaceorderElements.textboxes.country.invoke('val', country)
    }

    static insertCity(city){
        PlaceorderElements.textboxes.city.invoke('val', city)
    }

    static insertCreditCard(card){
        PlaceorderElements.textboxes.creditCard.invoke('val', card)
    }

    static insertMonth(month){
        PlaceorderElements.textboxes.month.invoke('val', month)
    }

    static insertYear(year){
        PlaceorderElements.textboxes.year.invoke('val', year)
    }

    static clickOnCloseButton(){
        PlaceorderElements.buttons.close.click()
    }
    
    static clickOnPurchaseButton(){
        PlaceorderElements.buttons.purchase.click()
    }

    
}