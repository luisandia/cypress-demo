class AutoStoreHairCare_PO{
    addHairCareProducts() {
        globalThis.data.productName.forEach(function(element){
            cy.addProductToBasket(element).then(() =>{
                //debugger
            })
        })
        cy.get('.dropdown-toggle > .fa').click().debug()
    }
}
export default AutoStoreHairCare_PO;