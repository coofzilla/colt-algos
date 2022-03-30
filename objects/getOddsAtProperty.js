function getOddElementsAtProperty(obj, key) {
  if (!obj[key]) return [];
  if (!Array.isArray(obj[key])) return [];

  let elements = [];

  for (let el of obj[key]) {
    if (el % 2 !== 0) {
      elements.push(el);
    }
  }
  return elements;
}

var obj = {
  key: [1, 2, 3, 4, 5],
};
var output = getOddElementsAtProperty(obj, "key");
console.log(output); // --> [1, 3, 5]
