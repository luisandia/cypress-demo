/// <reference types="cypress" />

describe("Verify checkboxes via webdriveruni", () => {
    beforeEach(function() {
        //cy.visit("/")
        //cy.navigateTo_webuni_homepage();
        cy.navigateTo_webuni_checkbox_page();
         //cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force:true})
    })
    it("Check and validate checkbox", () => {
        // cy.visit("http://www.webdriveruniversity.com")
        //  cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force:true})

        
        // cy.get('div#checkboxes :nth-child(1)>input').check().should('be.checked')
        cy.get('div#checkboxes :nth-child(1)>input').as('option-1')
        cy.get('@option-1').check().should('be.checked')
    }),
    it("Uncheck and validate checkbox", () => {
        // cy.visit("http://www.webdriveruniversity.com")
        //  cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force:true})
         cy.get('#checkboxes > label:nth-child(5) > input[type=checkbox]').as('option-3')
         cy.get('@option-3').uncheck().should('not.be.checked')
        
    })
    it("Check and validate multiple checkboxes", () => {
        // cy.visit("http://www.webdriveruniversity.com")
        //  cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force:true})
        cy.get('input[type="checkbox"]').check(["option-1","option-2","option-3","option-4"]).should('be.checked')
        
    })
})