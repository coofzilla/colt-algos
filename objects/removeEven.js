function removeEvenValues(obj) {
  for (let key in obj) {
    if (obj[key] % 2 === 0) {
      delete obj[key];
    }
  }
}

var obj = {
  a: 2,
  b: 3,
  c: 4,
};
removeEvenValues(obj);
console.log(obj); // --> { b: 3 }
