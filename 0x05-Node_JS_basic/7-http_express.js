const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();
const port = 1245;

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  const databaseFile = process.argv[2];
  res.write('This is the list of our students\n');
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
      res.write(`Number of students: ${studentCount}\n`);
      res.write(`Number of students in CS: ${CSRecords.length}. List: ${CSRecords.join(', ')}\n`);
      res.end();
    })
    .catch((error) => {
      console.log(error);
      res.write('Cannot load the database');
      res.end();
    });
});

app.listen(port);

module.exports = app;
