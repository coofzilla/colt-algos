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
//like call but pass array list
printFullName.apply(name2, ['Utah']);

//function borrow w/call
// name1.printFullName.call(name2);

var x = 30;

function get (x) { return x; }
function set (value) { x = value; }

set(10);
var result = get(20);
console.log(result)


export {};
