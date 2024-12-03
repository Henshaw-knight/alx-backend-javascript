const http = require('http');
const countStudents = require('./3-read_file_async');

const app = http.createServer((req, res) => {
  if (req.url === '/') {
    res.write('Hello Holberton School!');
    res.end();
  }

  if (req.url === '/students') {
    const databaseFile = process.argv[2];
    countStudents(databaseFile)
      .then((data) => {
        const records = data.split('\n').filter((line) => line.trim() !== '');
        const studentCount = records.length - 1;
        const CSRecords = [];
        const SWERecords = [];

        records.forEach((row) => {
          const dataArr = row.split(',');
          if (dataArr[dataArr.length - 1] === 'CS') {
            CSRecords.push(dataArr[0]);
          }
          if (dataArr[dataArr.length - 1] === 'SWE') {
            SWERecords.push(dataArr[0]);
          }
        });
        res.write('This is the list of our students\n');
        res.write(`Number of students: ${studentCount}\n`);
        res.write(`Number of students in CS: ${CSRecords.length}. List: ${CSRecords.join(', ')}\n`);
        res.write(`Number of students in SWE: ${SWERecords.length}. List: ${SWERecords.join(', ')}`);
        res.end();
      })
      .catch((error) => {
        res.write('Cannot load the database');
        res.end();
      });
  }
});

app.listen(1245);

module.exports = app;
