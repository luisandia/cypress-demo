/// <reference types='Cypress' />



describe('iterate over elements', () =>{
    it('Log Information of all Hair Care Products', () =>{
        cy.visit('https://automationteststore.com/')
        cy.get('a[href*="product/category&path"]').contains('Hair Care').click()
        cy.get('.fixed_wrapper .prdocutname').eq(0).invoke('text').as('productThumbnail')
        cy.get('@productThumbnail').its('length').should('be.gt', 5)
        cy.get('@productThumbnail').should('include', 'Seaweed Conditioner')
        }),
        it('Log Information of all Hair Care Products', () =>{
            cy.visit('https://automationteststore.com/')
            cy.get('.thumbnail').as('product')
            cy.get('@product').its('length').should('be.gt', 6)
            cy.get('@product').find('.productcart').invoke('attr', 'title').should('contain', 'Add to Cart')
        }),
        it.only('Getting Prices of all products', () =>{
            cy.visit('https://automationteststore.com/')
            cy.get('.thumbnail').as('product')
            // cy.get('@product').find('.oneprice').each(($el,index,$list) =>{
            //     cy.log($el.text())
            // })
            cy.get('.thumbnail').find('.oneprice').invoke('text').as('itemPrice')
            cy.get('.thumbnail').find('.pricenew').invoke('text').as('saleItemPrice')
            var itemTotal =0;
            cy.get('@itemPrice').then($linktext => {
                var itemPriceTotal =0;
                var itemPrice = $linktext.split('$');
                var i;
                for (let i = 0; i < itemPrice.length; i++) {
                    cy.log(itemPrice[i]);
                    itemPriceTotal += Number(itemPrice[i])
                }
                itemTotal +=Number(itemPriceTotal)
                cy.log("Total Price of Non Sale Items are :" + itemTotal)
            })
            
            cy.get('@saleItemPrice').then($linktext => {
                var salesItemPrice =0;
                var saleItemPrice = $linktext.split('$');
                var i;
                for (let i = 0; i < saleItemPrice.length; i++) {
                    cy.log(saleItemPrice[i]);
                    salesItemPrice += Number(saleItemPrice[i])
                }
                itemTotal +=Number(salesItemPrice)
                cy.log("Total Price of Non Sale Items are :" + salesItemPrice)
            })
            .then(()  =>{
                cy.log("Total Price of both items is :" + itemTotal)
                expect(itemTotal).is.gt(600)
            })
        })
        
    
})