class contact_Us_PO{
    contactForm(firstName, lastName, email, comment, $selector, textToLocate) {
    cy.get('[name=first_name]').type(firstName)
    cy.get('[name=last_name]').type(lastName)
    cy.get('[name=email]').type(email)
    cy.get('textarea.feedback-input').type(comment) 
    cy.get('input.contact_button').eq(1).click()
    cy.get($selector).contains(textToLocate, {timeout: 5000})
    cy.screenshot("Success");
    }
}
export default contact_Us_PO;