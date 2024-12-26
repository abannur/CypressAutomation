// <reference types="Cypress" /> 
describe('first framework test with mocha', function () {

    before(function () {
        //run once before all tests in the file
        cy.fixture('example').then(function (data) {
            this.data = data
        })
    })
    it('first framework test with mocha', function () {
        
        cy.visit(Cypress.env('url')+'/angularpractice/')
        cy.get('.form-group input[name="name"]').type(this.data.name)
        cy.get('select').select(this.data.gender)
        cy.get('h4 input[name="name"]').should('have.value', this.data.name)
        cy.get('.form-group input[name="name"]').should('have.attr', 'minlength', '2')
        cy.get('#inlineRadio3').should('be.disabled')
        //pause your tests
        //cy.pause()
        cy.get(':nth-child(2) > .nav-link').click()
        this.data.productNames.forEach(function (element) {
            cy.selectProduct(element)
        })

        cy.get('.nav-link.btn').click()
    })
})