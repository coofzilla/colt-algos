function removeArrayValues(obj) {
  for (let el in obj) {
    if (Array.isArray(obj[el]) === true) {
      delete obj[el];
    }
  }

  return obj;
}
const obj = {
  a: [1, 3, 4],
  b: 2,
  c: ["hi", "there"],
};
removeArrayValues(obj);
console.log(obj); // --> { b: 2 }
