//test file --cypress--spec file
/// <reference types="Cypress" />
describe('This is my test suite',function()
{
it('My first test case',function(){
    //test steps for first test case
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
    cy.get('.search-keyword').type('ca')
    //visible elements
    cy.get('.product:visible').should('have.length',4)
    //Parent child chaining
    cy.get('.products').find('.product').should('have.length',4)
   // cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click();
   cy.get('.products').find('.product').each(($el, index, $list)=>
    {
        const vegetableName = $el.find('h4.product-name').text()
        if(vegetableName.includes('Cashews'))
            {
               cy.wrap( $el).find('button').click();
            }
    })
    //assert if the logo text is displayed or not
    cy.get('.brand').should('have.text','GREENKART')
    //cy.log(cy.get('.brand').text()) - this did not work as text() is not a cypress function 
    //non cypress code like const text = cy.get('.brand') , resolve the promise manually using then() method
    //print in logs
    cy.get('.brand').then(function(logoText){
        console.log('sf')
        cy.log(logoText.text())
    })
    //alias command
   // cy.get('product').as('productLocator')
    //cy.get('@productLocator')
})

})