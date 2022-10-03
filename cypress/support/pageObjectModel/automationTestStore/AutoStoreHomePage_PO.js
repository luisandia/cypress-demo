class AutoStoreHomePage_PO{
    accessHomePage() {
        cy.visit("https://automationteststore.com/")
    }

    clickOnHaircare() {
        cy.get("a[href*='product/category&path=']").contains("Hair Care").click();
    }
}
export default AutoStoreHomePage_PO;