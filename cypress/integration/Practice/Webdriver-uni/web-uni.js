import Home_Page_PO from '../../../support/pageObjectModel/wedDriver-Uni/Home_Page_PO'
import contact_Us_PO from '../../../support/pageObjectModel/wedDriver-Uni/contact_Us_PO'

/// <reference types="Cypress" />
describe("Basic details in webdriver uni", ()=>{
    Cypress.config('defaultCommandTimeout', 20000)
    const homePage = new Home_Page_PO();
    const contactUs = new contact_Us_PO();
    before(function()  {
        cy.fixture('example').then(function(data) {
            // this.data = data;
            globalThis.data=data;
        })
    })
    beforeEach(function(){
       
        const homePage = new Home_Page_PO();
        homePage.visitHomePage();
        homePage.clickOnContactUs();
        //cy.pause();
    }
    )
it("Successful contact us form", () => {

cy.document().should('have.property','charset').and('eq','UTF-8')
cy.title().should('include', 'WebDriver | Contact Us')
cy.url().should('include', 'contactus')

    
    contactUs.contactForm(Cypress.env("first_name"),data.last_name,data.email,'No Comments','div>h1', 'Thank You for your Message!');

cy.log('Test Successful')
})
it("Unsuccessful Contact us form", ()=>{
    cy.visit('http://www.webdriveruniversity.com/')
    cy.get('#contact-us').invoke('removeAttr', 'target').click({force: true })
    
    
    contactUs.contactForm(Cypress.env("first_name"),data.last_name," ", "No Comments","body","Error: ");
});

})