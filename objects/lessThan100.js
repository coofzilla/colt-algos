function getElementsLessThan100AtProperty(obj, key) {
  if (!obj.key) return [];
  let elements = [];
  for (let el of obj[key]) {
    if (el < 100) elements.push(el);
  }
  return elements;
}

var obj = {
  key: [1000, 20, 50, 500],
};
var output = getElementsLessThan100AtProperty(obj, "key");
console.log(output); // --> [20, 50]
