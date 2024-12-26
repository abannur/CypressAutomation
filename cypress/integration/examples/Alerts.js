// <reference types="Cypress" />

describe('handling alert and popups',function()
{
it('first test case of popup',function(){
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    cy.get('#alertbtn').click()
   
    //window.alert
    cy.on('window:alert',(str)=>
    {
        //mocha test framework
        expect(str).to.equal('Hello , share this practice page and share your knowledge')
    })
    cy.get('#confirmbtn').click()
    cy.on('window:confirm',(str)=>
        {
            //mocha test framework
            expect(str).to.equal('Hello , Are you sure you want to confirm?')
        })
})
})