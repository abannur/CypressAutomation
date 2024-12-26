describe('First http request/response tests', function () {
    it(
    'firts http test', function () {

        cy.request('POST','http://216.10.245.166/Library/Addbook.php',{

            "name":"Learn Appium Automation with Java",
            "isbn":"ytu",
            "aisle":"778",
            "author":"John foe"
            }).then(function(response)
                {
                    expect(response.body).to.have.property('Msg','successfully added')
                    expect(response.status).to.eq(200)
                })
        
    }
    )}
)
