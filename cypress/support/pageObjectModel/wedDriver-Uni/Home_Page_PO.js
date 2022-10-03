class Home_Page_PO{
    visitHomePage() {
        cy.visit(Cypress.env("webuni_homepage"), {timeout: 60000})
    }

    clickOnContactUs() {
        cy.get('#contact-us').invoke('removeAttr', 'target').click({force: true }, {timeout : 50000})
    }
}
export default Home_Page_PO;