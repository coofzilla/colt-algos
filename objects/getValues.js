var input = {
  name: "Krysten",
  age: 33,
  hasPets: false,
};

//['Krysten', 33, false]

function listAllValues(obj) {
  let values = [];
  for (let key in obj) {
    values.push(obj[key]);
  }
  return values;
}

listAllValues(input);
