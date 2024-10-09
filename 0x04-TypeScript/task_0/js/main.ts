interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {firstName: "Henshaw", lastName: "Essien", age: 1, location: "Nigeria"};

const student2: Student = {firstName: "Danny", lastName: "Paul", age: 2, location: "Ghana"};

const studentsList: Student[] = [student1, student2];

let table = [];
