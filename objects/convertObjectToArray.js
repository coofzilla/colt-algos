var input = {
  name: "Holly",
  age: 35,
  role: "producer",
};

// [
//   ["name", "Holly"],
//   ["age", 35],
//   ["role", "producer"],
// ];

function convertObjectToArray(obj) {
  let objArr = [];

  for (let key in obj) {
    let propArr = [];
    propArr.push(key, obj[key]);
    objArr.push(propArr);
  }
  return objArr;
}

convertObjectToArray(input);
