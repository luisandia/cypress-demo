/// <reference types="cypress" />
import AutoStore_Homepage_PO from '../../support/pageObjects/automation-test-store/AutoStore_Homepage_PO';

describe('Verifying variables, cypress commands and jquery commands', () => {
  const autostore_Homepage_PO = new AutoStore_Homepage_PO();

  it('Navigating to specific product pages', () => {
    autostore_Homepage_PO.accessHomepage();
    //cy.visit(constants.automationTestStore_Url);
    //The following will fail
    // const makeupLink = cy.get("a[href*='product/category&path=']").contains("Makeup")
    // const skincareLink = cy.get("a[href*='product/category&path=']").contains("Skincare")
    // makeupLink.click();
    // skincareLink.click();

    //The following will pass
    // const makeupLink = cy.get("a[href*='product/category&path=']").contains("Makeup")
    // makeupLink.click();
    // const skincareLink = cy.get("a[href*='product/category&path=']").contains("Skincare")
    // skincareLink.click();

    //Recommended Approach
    cy.get("a[href*='product/category&path=']").contains('Skincare').click();
    cy.get("a[href*='product/category&path=']").contains('Makeup').click();
  });

  it('Navigating to specific product pages', () => {
    autostore_Homepage_PO.accessHomepage();
    // cy.visit(constants.automationTestStore_Url);
    cy.get("a[href*='product/category&path=']").contains('Makeup').click();

    //Following code will fail
    // const header = cy.get("h1 .maintext")
    // cy/log(header.text())

    //JQuery Approach
    cy.get('h1 .maintext').then(($headerText) => {
      const headerText = $headerText.text();
      cy.log('Found header text: ' + headerText);
      expect(headerText).is.eq('Makeup');
    });
  });

  it('Validate properties of Contact Us Page', () => {
    autostore_Homepage_PO.clickOn_Contact_Us_Page();
    //cy.visit('https://automationteststore.com/index.php?rt=content/contact/');

    //Cypress approach
    cy.contains('#ContactUsFrm', 'Contact Us Form').find('#field_11').should('contain', 'First name');

    //JQuery Approach
    cy.contains('#ContactUsFrm', 'Contact Us Form').then((text) => {
      const firstNameText = text.find('#field_11').text();
      expect(firstNameText).is.contain('First name');

      //Embedded Commands (Closure)
      cy.get('#field_11').then((fnText) => {
        cy.log(fnText.text());
        cy.log(fnText);
      });
    });
  });
});
