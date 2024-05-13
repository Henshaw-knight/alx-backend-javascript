export default function updateStudentGradeByCity(studentsList, city, newGrades) {
  const updatedStudentInfo = studentsList.filter((student) => student.location === city)
    .map((student) => {
      const gradeDetails = newGrades.filter((grade) => grade.studentId === student.id);
      if (gradeDetails.length !== 0) {
	// eslint-disable-next-line no-param-reassign
        student.grade = gradeDetails[0].grade;
      } else {
	// eslint-disable-next-line no-param-reassign
        student.grade = 'N/A';
      }
      return student;
    });
  return updatedStudentInfo;
}
