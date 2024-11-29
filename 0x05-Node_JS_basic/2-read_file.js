const fs = require('fs');

module.exports = function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf-8');
    const records = data.split('\n').filter((line) => line.trim() !== '');
    const studentCount = records.length - 1;
    const CSRecords = [];
    const SWERecords = [];

    records.forEach((row) => {
      const dataArr = row.split(',');
      if (dataArr[dataArr.length - 1] === 'CS') {
        CSRecords.push(dataArr[0]); // add firstname to array
      }
      if (dataArr[dataArr.length - 1] === 'SWE') {
        SWERecords.push(dataArr[0]);
      }
    });

    console.log(`Number of students: ${studentCount}`);
    console.log(`Number of students in CS: ${CSRecords.length}. List: ${CSRecords.join(', ')}`);
    console.log(`Number of students in SWE: ${SWERecords.length}. List: ${SWERecords.join(', ')}`);
  } catch (error) {
    throw new Error('Cannot load the database');
  }
};
