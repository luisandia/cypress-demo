/// <reference types='Cypress'/>

describe('Basic tests in Automation Test Store', () =>{
    it('Inspecting using WebElement', ()=>{
        cy.visit('https://automationteststore.com/')
        cy.get('div.fixed>a[href$="id=50"]').click()
    }),
    it.only('Inspecting using Text', ()=>{
        cy.visit('https://automationteststore.com/')
        cy.get('.prdocutname').contains('Skinsheen Bronzer Stick').click().then(function(itemHeaderText){
            cy.log("Selected the following item:" + itemHeaderText.text())
        })
    }),
    it('Inspecting using Index', ()=>{
        cy.visit('https://automationteststore.com/')
        cy.get('.prdocutname').eq(0).click()
        cy.log('Test Completed')
    })
})