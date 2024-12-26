const excelJs = require('exceljs')

async function writeDataExcel(searchText,textTobeReplaced,change,filePath) {
    const workbook = new excelJs.Workbook();
   
    await workbook.xlsx.readFile(filePath)
    const workSheet = workbook.getWorksheet('Sheet1');

    const output = await readExcel(workSheet,searchText);
    const cell = workSheet.getCell(output.row, output.column+change.colChange);
    cell.value = textTobeReplaced
    await workbook.xlsx.writeFile(filePath)
}

async function readExcel(workSheet,searchText) {
    let output = { row: -1, column: -1 }
    workSheet.eachRow((row, rowNumber) => {
        row.eachCell((cell, colNumber) => {
            if (cell.value === searchText) {
                console.log(cell.value + rowNumber + "==" + colNumber)
                output.row = rowNumber
                output.column = colNumber
            }

        }
        )
    })
    return output;
}

writeDataExcel("Blueberry","350",{rowchange:0,colChange:2},"/Users/anita/Downloads/excelDownloadTest.xlsx")
/* async function excelDataRead() {

    const workbook = new excelJs.Workbook();
    await workbook.xlsx.readFile("/Users/anita/Downloads/excelDownloadTest.xlsx")
    const workSheet = workbook.getWorksheet('Sheet1');
    workSheet.eachRow((row, rowNumber) => {
        row.eachCell((cell, colNumber) => {
            console.log("data printed" + cell.value)
        }
        )

    })
    const cell = workSheet.getCell(output.row, output.column);
    cell.value = 'replubic'
    await workbook.xlsx.writeFile("/Users/anita/Downloads/excelDownloadTest.xlsx")

}


excelDataRead(); */