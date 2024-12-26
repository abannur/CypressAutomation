///<reference types='Cypress'/>
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import HomePage from "../../../Page Objects/HomePage"
import ProductsPage from "../../../Page Objects/ProductsPage"
import CheckoutPage from "../../../Page Objects/CheckoutPage"
const homePage = new HomePage()
const productPage = new ProductsPage()
const checkoutPage = new CheckoutPage()
Given('I open the ecommerce website', () => {
    cy.visit(Cypress.env('url') + '/angularpractice/')
})

When('I add item to cart', function() {
    homePage.getShopTab().click()
    this.data.productNames.forEach(function (element) {
        cy.selectProduct(element)
    })
    productPage.getCheckoutLink().click()
})

When('validate the total price',function(){
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
})
//Then select the country submit and verify success messages
Then('select the country submit and verify success messages',()=>
{
        checkoutPage.getCheckoutButton().click()
        Cypress.config('defaultCommandTimeout', 10000)
        checkoutPage.getCountryInput().type(this.data.country)
        checkoutPage.selectIndiaAutoSuggest().click()
        checkoutPage.getAgreetermsCheckbox().check({ force: true })
        checkoutPage.getPurchaseButton().click();
        //checkoutPage.getSuccessMessage().should('have.text',' Thank you! Your order will be delivered in next few weeks :-).')
        checkoutPage.getSuccessMessage().then(function (element) {
            const successMessage = element.text()
            expect(successMessage.includes('success')).to.be.true
        })
})


    // When I fill the form details
    When('When I fill the form details',function(dataTable)
    {
        //[Anita ,Female]
        homePage.getNameInput().type(dataTable.rawTable[1][0])
        homePage.getGenderDropDown().select(dataTable.rawTable[1][1])

    })
    //then validate the form behavior
    Then('validate the form behavior', function()
    {
        homePage.getTwoWayDataBinding().should('have.value', this.data.name)
        homePage.getEntreprenurButton().should('be.disabled')
        homePage.getNameInput.should('have.attr','minlength','2')
    })
    // And Select the shop page
    Then('Select the shop page',()=>
    {
        homePage.getShopTab().click()
    })




