// <reference types="Cypress" />
    
describe('web control tests',function(){
    it('checkboxes validation',function()
{
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')
    cy.get('#checkBoxOption1').uncheck().should('not.be.checked').and('have.value','option1')
    cy.get('input[type="checkbox"]').check(['option2','option3'])
    //static dropdown
    cy.get('select').select('Option2').should('have.value','option2')
    // auto complete dropdown, dynamic dropdown
    cy.get('#autocomplete').type('ind')
    cy.get('.ui-menu-item div').each(($el,index,$list)=>
        {
            if($el.text()==='India')
                {
                    cy.wrap($el).click()
                }
        }
    )
    cy.get('#autocomplete').should('have.value','India')

    //visible and invisible elements in cypress
    cy.get('#displayed-text').should('be.visible')
    cy.get('#hide-textbox').click()
    cy.get('#displayed-text').should('not.be.visible')
    cy.get('#show-textbox').click()
    cy.get('#displayed-text').should('be.visible')
    //radio button validations
    cy.get('[value="radio2"]').check().should('be.checked')

})

    
})