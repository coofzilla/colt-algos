function transformArrayToObject(array) {
  const obj = {};

  for (let el of array) {
    obj[el[0]] = el[1];
  }
  return obj;
}

var input = [
  ["make", "Ford"],
  ["model", "Mustang"],
  ["year", 1964],
];

transformArrayToObject(input);

//   {
//     make : 'Ford',
//     model : 'Mustang',
//     year : 1964
//   }
