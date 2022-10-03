import AutoStoreHomePage_PO from '../../../support/pageObjectModel/automationTestStore/AutoStoreHomePage_PO'
import AutoStoreHairCare_PO from '../../../support/pageObjectModel/automationTestStore/AutoStoreHairCare_PO'


/// <reference types="cypress" />

describe("Add multiple items to the basket", () => {
  const autoStore = new AutoStoreHomePage_PO();
  const autoStoreHairCare = new AutoStoreHairCare_PO();
    before(function () {
      cy.fixture("products").then(function (data) {
        globalThis.data = data;
      });
    });
  
    beforeEach(function () {
      cy.clearLocalStorage();
      cy.clearCookies();
      autoStore.accessHomePage();
      autoStore.clickOnHaircare();
    });
    it("Add specific items to basket", () => {
        autoStoreHairCare.addHairCareProducts();
        
    });
  });
  