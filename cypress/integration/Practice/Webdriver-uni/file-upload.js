/// <reference types="cypress" />

describe("Test File Upload via webdriveruni", () => {
    it("Upload a file....", () => {
        cy.visit("http://www.webdriveruniversity.com")
        cy.get('#file-upload').invoke('removeAttr', 'target').click({force:true})

        cy.fixture("laptop.png", "base64").then(fileContent =>{
            cy.get('#myFile').attachFile({
                fileContent,
                fileName : "laptop.png",
                mimeType : "image/png"

            },
            {
                uploadType:"input"
            }
            )
        })
        cy.get("#submit-button").click()
    });
    it.only("Upload a empty file....", () => {
        cy.visit("http://www.webdriveruniversity.com")
        cy.get('#file-upload').invoke('removeAttr', 'target').click({force:true})

        // cy.fixture("laptop.png", "base64").then(fileContent =>{
        //     cy.get('#myFile').attachFile({
        //         fileContent,
        //         fileName : "laptop.png",
        //         mimeType : "image/png"

        //     },
        //     {
        //         uploadType:"input"
        //     }
        //     )
        // })
        cy.get("#submit-button").click()
    });
})