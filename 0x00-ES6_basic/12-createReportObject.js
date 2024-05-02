export default function createReportObject(employeesList) {
  const reportObj = {
    allEmployees: {
      ...employeesList,
    },
    getNumberOfDepartments(employeesList) {
      const numberOfDepartments = Object.keys(employeesList).length;
      return numberOfDepartments;
    },
  };
  return reportObj;
}
