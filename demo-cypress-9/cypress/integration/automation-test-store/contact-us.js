/// <reference types="Cypress" />
import AutoStore_Homepage_PO from '../../support/pageObjects/automation-test-store/AutoStore_Homepage_PO';

describe('Test Contact Us Form via Automation Test Store', () => {
  const autostore_Homepage_PO = new AutoStore_Homepage_PO();

  before(() => {
    cy.fixture('userDetails').as('user');
  });

  it('Should be able to submit a successful submission via contact us form', () => {
    //Cypress code
    //cy.visit('https://automationteststore.com/');
    autostore_Homepage_PO.accessHomepage();

    //cy.get(".info_links_footer > :nth-child(5) > a").click(); //normal Cypress selector
    cy.get("a[href$='contact']").click(); //CSS selector href that end's with

    //xpath selector
    //cy.xpath("//a[contains(@href, 'contact')]").click()
    cy.get('@user').then((user) => {
      cy.xpath("//input[contains(@name, 'first')]").type(user.first_name);
      cy.xpath("//input[contains(@id, 'ContactUsFrm_email')]").type(user.email);
    });

    cy.xpath("//input[contains(@id, 'ContactUsFrm_email')]").should('have.attr', 'name', 'email');
    cy.xpath("//textarea[@id='ContactUsFrm_enquiry']").type('Message details here');

    //cy.get(".col-md-6 > .btn").click();
    cy.xpath("(//button[contains(@type, 'submit')])[i]").click();

    cy.get('.mb40 > :nth-child(3)').should('have.text', 'Your enquiry has been successfully sent to the store owner!');

    cy.log('Text has completed!');
  });

  //Cypress Promise Challenge
  it('Should be able to show the text from the link', () => {
    //Cypress code
    autostore_Homepage_PO.accessHomepage();

    cy.get("a[href$='contact']")
      .click()
      .then((linkText) => {
        cy.log('Clicked the following link: ' + linkText.text());
      });
  });
});
