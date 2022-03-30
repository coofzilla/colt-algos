function getElementsThatEqual10AtProperty(obj, key) {
  if (!obj[key]) return [];
  let tens = [];

  for (let el of obj[key]) {
    if (el === 10) {
      tens.push(el);
    }
  }
  return tens;
}

var obj = {
  key: [1000, 10, 50, 10],
};
var output = getElementsThatEqual10AtProperty(obj, "key");
console.log(output); // --> [10, 10]
