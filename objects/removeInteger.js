function removeNumberValues(obj) {
  for (let key in obj) {
    if (Number.isInteger(obj[key]) === true) {
      delete obj[key];
    }
  }
  return obj;
}

var obj = {
  a: 2,
  b: "remaining",
  c: 4,
};
removeNumberValues(obj);
console.log(obj); // --> { b: 'remaining' }
