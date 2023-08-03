export class CartElements{
    static get buttons(){
        return {
            get placeOrder(){
                return cy.contains('a', 'Add to cart')
            }
        }
    }

    static get links(){
        return {
            delete(productName){
                return cy.contains('td', productName).closest('tr').find('a')
            }
        }
       
    }
}