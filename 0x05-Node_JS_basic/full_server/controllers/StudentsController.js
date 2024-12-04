import readDatabase from '../utils';

class StudentsController {
  static getAllStudents(request, response) {
    response.write('This is the list of our students');
    readDatabase('../../database.csv')
      .then((data) => {
        for (const key in data) {
          if (Object.prototype.hasOwnProperty.call(data, key)) {
            response.write(`Number of students in ${key}: ${data[key].length}. List: ${data.key}`);
          }
        }
      })
      .catch((error) => {
        console.log(error);
        response.status(500).send('Cannot load the database');
      });
    response.status(200);
  }

  static getAllStudentsByMajor(request, response) {
    const { major } = request.params.major;
    if (major !== 'CS' || major !== 'SWE') {
      response.status(500).send('Major parameter must be CS or SWE');
    }
    readDatabase('../../database.csv')
      .then((data) => {
        for (const key in data) {
          if (Object.prototype.hasOwnProperty.call(data, key) && key === major) {
            response.write(`List: ${data.key}`);
          }
        }
      })
      .catch((error) => {
        console.log(error);
        response.status(500).send('Cannot load the database');
      });
    response.status(200);
  }
}

export default StudentsController;
