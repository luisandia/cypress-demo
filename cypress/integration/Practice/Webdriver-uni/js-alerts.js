/// <reference types='Cypress' />

describe('Handling Alerts on WebUniversity page',  ()=> {
    it('Alerts in WebUniversity', () =>{
        cy.visit("http://www.webdriveruniversity.com")
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click({force:true})
        cy.get('#button1').click()
        cy.on('window:alert', (s) =>{
            expect(s).to.equal('I am an alert box!')
        })
    }),
    it('validate Alerts works correctly in WebUniversity', () =>{
        cy.visit("http://www.webdriveruniversity.com")
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click({force:true})
        cy.get('#button4').click()
        cy.on('window:alert', (s) =>{
            return true;
        })
        cy.get('#confirm-alert-text').contains('You pressed OK!')
    }),
    it.only('validate Alerts works correctly in WebUniversity challenge mode', () =>{
        cy.visit("http://www.webdriveruniversity.com")
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click({force:true})
        cy.get('#button4').click()
        cy.on('window:confirm', (s) =>{
            return false;
        })
        cy.get('#confirm-alert-text').contains('You pressed Cancel!')
    }),
    it("Validate js confirm alert box using a stub", () => {
        //cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html");
        cy.visit("http://www.webdriveruniversity.com")
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click({force:true})

        const stub = cy.stub()
        cy.on('window:confirm', stub)

        cy.get('#button4').click().then(() => {
            expect(stub.getCall(0)).to.be.calledWith('Press a button!')
        }).then(() => {
            return true;
        }).then(() => {
            cy.get('#confirm-alert-text').contains('You pressed OK!')
        })
    });

})