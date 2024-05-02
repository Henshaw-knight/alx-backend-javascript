export default function createEmployeesObject(departmentName, employees) {
  const newObj = {};
  newObj[departmentName] = employees;
  return newObj;
}
