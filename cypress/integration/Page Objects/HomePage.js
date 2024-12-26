class HomePage {
    getNameInput() {
        return cy.get('.form-group input[name="name"]')
    }
    getTwoWayDataBinding() {
        return cy.get('h4 input[name="name"]')
    }
    getGenderDropDown() {
        return cy.get('select')
    }
    getEntreprenurButton() {
        return cy.get('#inlineRadio3')
    }
    getShopTab() {
        return cy.get(':nth-child(2) > .nav-link')
    }

}

export default HomePage;