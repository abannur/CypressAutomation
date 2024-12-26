//<reference types ="Cypress"/>


describe("validate products", function () {
    it("first test case", function () {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('.search-keyword').type('ca')
        cy.get('.product:visible').should('have.length',4)
        cy.get('.product:invisible').should('have.length',1)
        cy.log("hello")
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.go('forward')
        cy.get('.class',{timeout:100}).should('be.visible')
        cy.get().click({force:true})
        cy.get('#wer').trigger('')
        cy.get().filter(':contains("xys")').should()
        cy.exec('npm i convert-excel-to-json')
        cy.readFile('data.json').then((td)=>
        {
            td.name
        })
        cy.writeFile('data.json',{})

        cy.location().should((loc)=>
        {
            expect(loc.has).to.eqls
        })
        cy.get('.search-keyword').type('{shift}{alt}')
        cy.title().should('equals','GreenKart - veg and fruits kart')
    })
})