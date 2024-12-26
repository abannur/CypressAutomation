///<reference types='Cypress'/>

describe('First http request/response tests', function () {
    it('firts http test', function () {

        cy.visit('https://rahulshettyacademy.com/angularAppdemo')
        cy.intercept({
            method:'GET',
            url:'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty'
        },{
            statusCode :200,
            body:[{
                "book_name": "RobotFramework",
                "isbn": "98537",
                "aisle": "324353"
            }]
        }).as('bookInfo')
        cy.get('.btn.btn-primary').click()
        cy.wait('@bookInfo').then(({request,response})=>
        {
            cy.get('tr').should('have.length',response.body.length+2)
        })
        cy.get('p').should('have.text','Oops only 1 Book available')
        //length of response array= rows in the response table


    })
})