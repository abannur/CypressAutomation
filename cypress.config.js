const { defineConfig } = require("cypress");
const excelJs = require('exceljs')
const excelToJson = require('convert-excel-to-json');
const fs = require('fs');
//const {
 // addCucumberPreprocessorPlugin,
//} = require("@badeball/cypress-cucumber-preprocessor");
//const {
 // preprocessor,
//} = require("@badeball/cypress-cucumber-preprocessor/browserify");


async function setupNodeEvents(on, config) {
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
 // await addCucumberPreprocessorPlugin(on, config);

// fs.readFileSync return a Buffer

 // on("file:preprocessor", preprocessor(config));
  require('cypress-mochawesome-reporter/plugin')(on);


  on('task',{
    excelToJsonConvert(filePath){
      const result=excelToJson({
      source: fs.readFileSync(filePath) });return result;}});

  on('task',{
    async writeDataExcel({searchText,textTobeReplaced,change,filePath}) {
    const workbook = new excelJs.Workbook();
   
    await workbook.xlsx.readFile(filePath)
    const workSheet = workbook.getWorksheet('Sheet1');

    const output = await readExcel(workSheet,searchText);
    const cell = workSheet.getCell(output.row, output.column+change.colChange);
    cell.value = textTobeReplaced
    //promise pending,resolved rejected
    return workbook.xlsx.writeFile(filePath).then(()=>
    {
      return true;
    }).catch((error)=>
    {
      return false;
    })
}

  })
  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
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
module.exports = defineConfig({
  env:{
    url: 'https://rahulshettyacademy.com'
  },
  projectId: "qhsqkc",
  defaultCommandTimeout: 6000,
  reporter: 'cypress-mochawesome-reporter',
  retries: {
    runMode: 1,
    },
  e2e: {
    setupNodeEvents,
    specPattern: 'cypress/integration/examples/*.js'
   
  },
});
//npx cypress run --spec cypress\integration\examples\PageObjectTests.js --headed --browser chrome  --env url="https://rahulshettyacamedy.com"
//messages -->json file--> html
