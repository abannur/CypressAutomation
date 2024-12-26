beforeEach(() => {
    before(function () {
        //run once before all tests in the file
        cy.fixture('example').then(function (data) {
            this.data = data
        })
    })
})