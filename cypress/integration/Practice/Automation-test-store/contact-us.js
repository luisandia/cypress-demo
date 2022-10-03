/// <reference types="Cypress" />
describe("Basic details in Automation test store", ()=>{
    before(function(){
        //cy.viewport(550,750)
        cy.fixture("userDetails").as('user')
    })
it("Succesful contact us form",() =>{
    cy.visit('https://automationteststore.com/')
    cy.get("a[href$='contact']").click().then(function(headerText){
        cy.log("Clicked on the following item" + headerText.text())
    })
    cy.get('@user').then((user) =>{
        cy.get('#ContactUsFrm_first_name').type(user.first_name)
    cy.get('#ContactUsFrm_email').type(user.email)
    })
    // cy.get('#ContactUsFrm_first_name').type('Baranitharan')
    // cy.get('#ContactUsFrm_email').type('erbarani@gmail.com')
    cy.get('#ContactUsFrm_email').should('have.attr', 'name','email')
    cy.get('#ContactUsFrm_enquiry').type('Test')
   cy.get('.btn.btn-primary.lock-on-click').click()
   cy.get('section>p:nth-child(3)').should('have.text', 'Your enquiry has been successfully sent to the store owner!')
})
})
