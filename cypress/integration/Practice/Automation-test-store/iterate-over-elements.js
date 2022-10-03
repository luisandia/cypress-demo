/// <reference types='Cypress' />



describe('iterate over elements', () =>{
    beforeEach(function() {
        cy.visit('https://automationteststore.com/')
        cy.get('a[href*="product/category&path"]').contains('Hair Care').click()
    })
    it('Log Information of all Hair Care Products', () =>{
        // cy.visit('https://automationteststore.com/')
        // cy.get('a[href*="product/category&path"]').contains('Hair Care').click()
       cy.get('.fixed_wrapper .prdocutname').each(($el,index,$list) =>{
           cy.log("Index: " + index + " : " + $el.text() )
       })
        
    }),
    it('Add Specific product to basket', () =>{
        // cy.visit('https://automationteststore.com/')
        // cy.get('a[href*="product/category&path"]').contains('Hair Care').click()
        // cy.get('.fixed_wrapper .prdocutname').each(($el,index,$list) =>{
        //     if($el.text().includes('Seaweed Conditioner')){
        //         cy.wrap($el).click()
        //     }
        // })    
        cy.selectProduct('Seaweed Conditioner');
    })
    it('Add Specific product to basket', () =>{
        // cy.visit('https://automationteststore.com/')
        // cy.get('a[href*="product/category&path"]').contains('Hair Care').click()
        
        cy.selectProduct('Curls to straight Shampoo');
    })
    it('Add Specific product to basket', () =>{
        // cy.visit('https://automationteststore.com/')
        // cy.get('a[href*="product/category&path"]').contains('Hair Care').click()
        
        cy.selectProduct('Eau Parfumee au The Vert Shampoo');
    })

})