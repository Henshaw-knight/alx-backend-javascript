export default function getStudentsByLocation(studentsList, city) {
  const student = studentsList.filter((student) => student.location === city);
  return student;
}
