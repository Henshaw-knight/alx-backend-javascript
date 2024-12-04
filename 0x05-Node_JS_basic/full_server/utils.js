const fs = require('fs');

function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      } else {
        const records = data.split('\n').filter((line) => line.trim() !== '');
        const CSRecords = [];
        const SWERecords = [];
        const dataObj = {};

        records.forEach((row) => {
          const dataArr = row.split(',');
          if (dataArr[dataArr.length - 1] === 'CS') {
            CSRecords.push(dataArr[0]);
          }
          if (dataArr[dataArr.length - 1] === 'SWE') {
            SWERecords.push(dataArr[0]);
          }
        });
        dataObj.CS = CSRecords;
        dataObj.SWE = SWERecords;
        resolve(dataObj);
      }
    });
  });
}
export default readDatabase;
