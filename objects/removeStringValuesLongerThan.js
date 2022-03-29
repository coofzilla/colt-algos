function removeStringValuesLongerThan(num, obj) {
  for (let key in obj) {
    if (obj[key].length > num) {
      delete obj[key];
    }
  }
  return obj;
}

var obj = {
  name: "Montana",
  age: 20,
  location: "Texas",
};
removeStringValuesLongerThan(6, obj);
console.log(obj); // { age: 20, location: 'Texas' }
