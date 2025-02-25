// <reference types="Cypress" />

describe('Handling web tables',function()
{
    it('webtables',function()
{
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    cy.get('tr td:nth-child(2)').each(($el,index,$list)=>
    {
        const text = $el.text()
        if(text.includes('Python'))
            {
                 cy.get('tr td:nth-child(2)').eq(index).next().then(function(price)
            {
                const cost =price.text()
                expect(cost).to.equal('25')
            })
            }
    })
})
})