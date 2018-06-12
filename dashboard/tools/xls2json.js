var Excel = require('exceljs');
var fs = require('fs');

var workbook = new Excel.Workbook();
var sourcePath = './docs/texts.xlsx';
var destPath = './src/languages/';

async function parseWorkbook(workbook)  {
    workbook.xlsx.readFile(sourcePath)
        .then(async function() {
            let languageList = {};
            let textIDs = [];
            let languageData = {};
            let textIDCount = 0;

            await Promise.all(
                workbook._worksheets.map(async (worksheet) => {
                    // console.log(worksheet.name)
                    let firstRow = worksheet.getRow(1).values;
                    await Promise.all(
                        firstRow.map(function(item, i) {
                            if ( !(item == undefined || item == null || item =='' || item == 'textID') )  {
                                languageList[item] = i;
                                languageData[item] = {};
                            }
                        })
                    )

                    // parse string
                    const firstCol = worksheet.getColumn(1);
                    await Promise.all(
                        firstCol._worksheet._rows.map(async (row) => {
                            let _row = row.number;
                            let textID = worksheet.getCell(_row, 1).value;
                            if (textID != null) {
                                // console.log('[' + worksheet.name + '].(' + row.number + ') = ' + worksheet.getCell(row.number, 1).value);
                                // textIDs.push(worksheet.getCell(row.number, 1).value);
                                await Promise.all(
                                    Object.keys(languageList).map((langID) => {
                                        let _col = languageList[langID];
                                        languageData[langID][textID] = worksheet.getCell(_row, _col).value;
                                    })
                                )
                            }
                        })
                    )
                })
            )

            // output to js files
            const relativePath = destPath;
            await Promise.all(
                Object.keys(languageData).map((langID) => {
                    var content = 'export default lang = ' + JSON.stringify(languageData[langID]);
                    // console.log(content);
                    fs.writeFile(relativePath + langID + '.js', content, function(err)  {
                        if (err)    {
                            console.log('Fail parsing ' + langID + ', error: ' + err);
                        } else {
                            console.log('Done parsing ' + langID);
                        }
                    })
                })
            )
        })
}

parseWorkbook(workbook)
