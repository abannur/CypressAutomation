class CheckoutPage
{

    getCheckoutButton()
    {
        return cy.contains('Checkout ')
    }

    getCountryInput()
    {
        return cy.get('#country')
    }

    selectIndiaAutoSuggest()
    {
        return cy.get('.suggestions a')
    }

    getAgreetermsCheckbox()
    {
        return cy.get('#checkbox2')
    }

    
    getPurchaseButton()
    {
        return cy.get('input[type="submit"]')
    }

    getSuccessMessage()
    {
        return cy.get('.alert.alert-success')
    }

    getProductTotal()
    {
        return cy.get('tr td:nth-child(4) strong')
    }

    getAllProductTotal()
    {
        return cy.get('h3 strong')
    }
    
}

export default CheckoutPage;