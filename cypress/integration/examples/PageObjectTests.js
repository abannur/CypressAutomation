// <reference types="Cypress" /> 
import HomePage from "../Page Objects/HomePage"
import ProductsPage from "../Page Objects/ProductsPage"
import CheckoutPage from "../Page Objects/CheckoutPage"
describe('first framework test with mocha', function () {

    before(function () {
        //run once before all tests in the file
        cy.fixture('example').then(function (data) {
            this.data = data
        })
    })
    it('first framework test with mocha', function () {
        const homePage = new HomePage()
        const productPage = new ProductsPage()
        const checkoutPage = new CheckoutPage()
        cy.visit(Cypress.env('url')+'/angularpractice/')
        homePage.getNameInput().type(this.data.name)
        homePage.getGenderDropDown().select(this.data.gender)
        homePage.getTwoWayDataBinding().should('have.value', this.data.name)
        homePage.getNameInput.should('have.attr','minlength','2')
        homePage.getEntreprenurButton().should('be.disabled')
        homePage.getShopTab().click()
        this.data.productNames.forEach(function (element) {
            cy.selectProduct(element)
        })
        productPage.getCheckoutLink().click()
        var total = 0
        checkoutPage.getProductTotal().each((el, index, list) => {
            const amount = el.text()
            var result = amount.split(" ")
            result = Number(result[1].trim())
            total = Number(total) + result

        }).then(function () {
            cy.log(total)
        })

        checkoutPage.getAllProductTotal().then(function (element) {
            const totalAmount = element.text();
            var amount = totalAmount.split(" ")
            var sum = Number(amount[1].trim())
            expect(sum).to.equal(total)
        }
        )
        checkoutPage.getCheckoutButton().click()
        Cypress.config('defaultCommandTimeout', 10000)
        checkoutPage.getCountryInput().type(this.data.country)
        checkoutPage.selectIndiaAutoSuggest().click()
        checkoutPage.getAgreetermsCheckbox().check({ force: true })
        checkoutPage.getPurchaseButton().click();
        //checkoutPage.getSuccessMessage().should('have.text',' Thank you! Your order will be delivered in next few weeks :-).')
        checkoutPage.getSuccessMessage().then(function (element) {
            const successMessage = element.text()
            expect(successMessage.includes('hhhuccess')).to.be.true
        })

    })
})