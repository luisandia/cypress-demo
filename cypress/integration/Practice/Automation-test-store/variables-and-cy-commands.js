/// <reference types='Cypress' />



describe('Verifying variable', () =>{
    it('Navigating to Specific Product Pages', () =>{
        cy.visit('https://automationteststore.com/')
        cy.get('a[href*="product/category&path"]').contains('Makeup').click()
        cy.get('a[href*="product/category&path"]').contains('Skincare').click()
        
    }),
    it('Navigating to Specific Product Page', () =>{
        cy.visit('https://automationteststore.com/')
        cy.get('a[href*="product/category&path"]').contains('Makeup').click()
        cy.get('.maintext').then(($header)  => {
            const header =$header.text()
            cy.log('Found' + header)
            expect(header).is.eq('Makeup')

        })
    }),
        it.only('Validate properties of Contact Page', () => {
        cy.visit('https://automationteststore.com/')
        cy.get("a[href$='contact']").click()
        //Chaining
        cy.contains('#ContactUsFrm', 'Contact Us Form').find('#field_11').should('contain', 'First name')
        //Jquery
        cy.contains('#ContactUsFrm', 'Contact Us Form').then(text =>{
            const firstName = text.find('#field_11').text()
            expect(firstName).to.contain('First name')
        //Closure
        cy.get('#field_11').then(fntext =>{
            cy.log(fntext.text())
        })
        })
    })
})