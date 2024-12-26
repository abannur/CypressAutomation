describe('Mouse over' , function()
{
    it('Mouser over', function()
{
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    //forceble click on element which is hidden
    //cy.get('div.mouse-hover-content').invoke('show')
    cy.contains('Top').click({force:true})
    cy.url().should('include','top')
    
})
})