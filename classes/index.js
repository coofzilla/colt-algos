class Student {
  constructor(firstName, lastName, year) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.grade = year;
  }
  static() {
    console.log('call on Class not instance of it');
  }
  someMethod() {
    console.log('method blah');
  }
}

let firstStudent = new Student('Jay', 'Smith');
firstStudent.grade = 4;
console.log(firstStudent);
