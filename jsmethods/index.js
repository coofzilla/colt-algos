let name = {
  firstName: 'John',
  lastName: 'Smith',
};

const printFullName = function (home) {
  console.log(`${this.firstName} ${this.lastName} from ${home}`);
};

let name2 = {
  firstName: 'Bob',
  lastName: 'Saget',
};

printFullName.call(name, 'Miami');
printFullName.call(name2, 'Utah');

//function borrow w/call
// name1.printFullName.call(name2);
export {};
