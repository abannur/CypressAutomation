///<reference types='Cypress'/>
const neatCsv = require('neat-csv')


let productName
describe('First http request/response tests', async function () {
    it('firts http test', function () {

        cy.LoginAPI().then(function () {
            cy.visit('https://rahulshettyacademy.com/client/',
                {

                    onBeforeLoad: function (window) {
                        window.localStorage.setItem('token', Cypress.env('userLoginToken'))
                    }
                }
            )
        })
        cy.get('.card-body b').eq(1).then(function (ele) {
            productName = ele.text()
        })
        cy.get('.card-body button:last-of-type').eq(1).click()
        cy.get('[routerlink*="cart"]').click()
        cy.contains('Checkout').click()
        cy.get('[placeholder*="Country"]').type('ind')

        //cy.get('.ta-results > :nth-child(3)').click()
        cy.get('.ta-results button').each((el, list, index) => {
            if (el.text() === " India") {
                cy.wrap(el).click()
            }
        }
        )
        cy.get('.action__submit').click()
        cy.wait(2000)
        //cy.get('.order-summary button').contains('CSV').click()
        /* //downloaded cvs file from downloads to text
       
        cy.readFile(Cypress.config("fileServerFolder")+"/cypress/downloads/order-invoice_anitamedi13.csv").then(
            async (text)=>{
                const csvData = await neatCsv(text)
                console.log(csvData)
                const actualProdCSV = csvData[0]["Product Name"]
                expect(productName).to.equal(actualProdCSV)
            }
        ) */
        cy.get('.order-summary button').contains('Excel').click()
        //download xls and parse excel data
        //browser(engine)-JS code->client side env(front end) - cypress 
        //node(engine)- js code- backend environment - accessing file systems or database is done by node
        //Task (files ,DB)->config.js wrap code as task(exceltoJson)cy.task(exceltoJson)
       const filePath= Cypress.config("fileServerFolder")+"\cypress\downloads\order-invoice_anitamedi13.xlsx"
        cy.task('excelToJsonConvert',filePath).then(function(result)
        {
            cy.log(result)
        })

        cy.readFile(filePath).then(function(text)
    {
        expect(text).to.include(productName)
    })
    })
})