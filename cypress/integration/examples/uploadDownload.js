describe('uploadDownloadTest', async function () {
    it('uploadDownloadTest', function () {
        const replacePrice =350;
        const searchFruit="Kivi"
        const projectFilePath= Cypress.config("fileServerFolder")+"/cypress/downloads/download.xlsx"
        cy.visit('https://rahulshettyacademy.com/upload-download-test/index.html')
        cy.get('#downloadButton').click()
        cy.task('writeDataExcel',{searchText:searchFruit,textTobeReplaced:replacePrice,change:{rowChange:0,colChange:2}
            ,filePath:projectFilePath})
        cy.get('#fileinput').selectFile(projectFilePath)
        cy.contains(searchFruit).parent().parent().find("#cell-4-undefined").should('have.text',replacePrice)
    })
})
