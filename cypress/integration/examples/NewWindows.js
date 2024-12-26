// <reference types="Cypress" />

describe('New windows test',function(){
    it('new window test',function()
{
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
     cy.get('#opentab').then(function(el)
    {
        const url = el.prop('href')
        cy.visit(url)
        cy.origin(url,() =>
    {
        cy.get('#navbarSupportedContent a[href="about.html"]').click()
    })
        
    })
})
})