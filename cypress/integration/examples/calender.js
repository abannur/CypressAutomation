// <reference types="Cypress" />

describe('calnder handling',function()
{
    it('calender handling',function()
{
    
    const month="5";
    const date="26";
    const year="2022";
    const expectedList =[month,date,year]
    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
    cy.get('a[href="#/offers"]').invoke('removeAttr','target').click()
    
    cy.get('.react-date-picker__inputGroup').click()
    cy.get('.react-calendar__navigation__label').click()
    cy.get('.react-calendar__navigation__label').click()
   cy.contains('button','2022').click()
   cy.get('.react-calendar__year-view__months__month')
   //cy.get('.react-calendar__year-view__months__month').eq(Number(month)-1).click();
   cy.get('.react-calendar__year-view__months__month').eq(4).click()
   let count = 0
    cy.get('.react-calendar__month-view__days__day').each(($el,index,$list)=>
        {
            if($el.text()==='26')
                {
                    count++;
                }
                if(count==2)
                    {
                        cy.wrap($el).click({force: true})
                        return false
                    }
        }
    )
    cy.get('input[name="date"]').invoke('val').should('equal','2022-05-26')
    //another approach
    cy.get('.react-date-picker__inputGroup__input').each(($el , index,$list)=>
    {
        cy.wrap($el).invoke('val').should('eq',expectedList[index])
    })
  
})}

)