var input = [
  [
    ["firstName", "Joe"],
    ["lastName", "Blow"],
    ["age", 42],
    ["role", "clerk"],
  ],
  [
    ["firstName", "Mary"],
    ["lastName", "Jenkins"],
    ["age", 36],
    ["role", "manager"],
  ],
];

// [
//     {firstName: 'Joe', lastName: 'Blow', age: 42, role: 'clerk'},
//     {firstName: 'Mary', lastName: 'Jenkins', age: 36, role: 'manager'}
// ]

function transformEmployeeData(employeeData) {
  let objArr = [];
  for (let arrContainer of employeeData) {
    let objContainer = {};
    for (let arr of arrContainer) {
      objContainer[arr[0]] = arr[1];
    }
    objArr.push(objContainer);
  }
  return objArr;
}

transformEmployeeData(input);
