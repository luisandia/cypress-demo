/// <reference types="cypress" />
import AutoStore_Homepage_PO from '../../support/pageObjects/automation-test-store/AutoStore_Homepage_PO';
import AutoStore_HairCare_PO from '../../support/pageObjects/automation-test-store/AutoStore_HairCare_PO';
//import { constants } from '../../support/constants';

describe('Alias and invoke', () => {
  const autostore_Homepage_PO = new AutoStore_Homepage_PO();
  const autostore_Haircare_PO = new AutoStore_HairCare_PO();

  it('Validate a specific haircare product', () => {
    // cy.visit(constants.automationTestStore_Url);
    // cy.get("a[href*='product/category&path=']").contains('Hair Care').click();
    autostore_Homepage_PO.accessHomepage();
    autostore_Homepage_PO.clickOn_HairCare_Link();

    //Invoke = extract
    //.as() is use a variable
    cy.get('.fixed_wrapper .prdocutname').eq(0).invoke('text').as('productThumbnail');

    cy.get('@productThumbnail').its('length').should('be.gt', 5); //validate if its length is greater than 5
    cy.get('@productThumbnail').should('include', 'Seaweed Conditioner');
  });

  //validate if the number of .thumbnail class is exact 16
  it('Validate product thumbnail', () => {
    autostore_Homepage_PO.accessHomepage();
    // cy.visit(constants.automationTestStore_Url);

    //Invoke = extract
    //.as() is use a variable
    cy.get('.thumbnail').as('productThumbnail');
    cy.get('@productThumbnail').should('have.length', 16);
    cy.get('@productThumbnail')
      .find('.productcart') //Find the class .productcart within the alias @productThumbnail
      .invoke('attr', 'title') // Extract the attribute = title within the line
      .should('include', 'Add to Cart'); //include or contain may work

    cy.log('Alias and invoke challenge is completed');
  });

  it('Calculate total of normal and sale products', () => {
    //cy.visit(constants.automationTestStore_Url);
    autostore_Homepage_PO.accessHomepage();

    //.as() is use a variable
    cy.get('.thumbnail').as('productThumbnail');
    // cy.get("@productThumbnail").find(".oneprice").each(($el, index, $list) => {
    //     cy.log($el.text())
    //   })

    // Get total number of non-sale price
    cy.get('.thumbnail') // get * element with class .thumbnail
      .find('.oneprice') // find .oneprice class within .thumbnail
      .invoke('text') //extract all the value produce
      .as('itemPrice'); // save in alias(variable) @itemPrice

    let itemsTotal = 0;
    cy.get('@itemPrice').then(($linkText) => {
      //callback fn
      let itemPrice = $linkText.split('$'); // split the extracted value and return as an array of itemPrice
      let itemsTotalPrice = 0;
      for (let i = 0; i < itemPrice.length; i++) {
        // cy.log(itemPrice[i])
        itemsTotalPrice += Number(itemPrice[i]);
      }

      itemsTotal += itemsTotalPrice;
      cy.log(`Total non-sale price of ${itemPrice.length} items is: $${itemsTotalPrice}`);
    });

    // Get total number of Sale price
    cy.get('.thumbnail').find('.pricenew').invoke('text').as('saleItemPrice');

    cy.get('@saleItemPrice')
      .then(($linkText) => {
        let saleItemPrice = $linkText.split('$'); // split the extracted value and return as an array of itemPrice

        let salesItemsTotalPrice = 0;

        //changed from forLoop to forEach
        saleItemPrice.forEach(($el) => {
          salesItemsTotalPrice += Number($el);
        });

        // for (let i = 0; i < saleItemPrice.length; i++) {
        //   //cy.log(saleItemPrice[i]);
        //   salesItemsTotalPrice += Number(saleItemPrice[i]);
        // }

        itemsTotal += salesItemsTotalPrice;
        cy.log(`Total sale price of ${saleItemPrice.length} items is: $${salesItemsTotalPrice}`);
      })

      .then(() => {
        cy.log(`Total: ${itemsTotal}`);
        expect(itemsTotal).to.equal(685.6);
      });
  });
});
