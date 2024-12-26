class ProductsPage
{
    getProductName() {
        return  cy.get('h4.card-title')
    }
    getAddToCartButton() {
        return cy.get('button.btn.btn-info')
    }
    getCheckoutLink()
    {
        return  cy.get('.nav-link.btn')
    }
}
export default ProductsPage;