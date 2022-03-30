function getSmallestElementAtProperty(obj, key) {
  if (!obj[key]) return undefined;
  if (!Array.isArray(obj[key])) return undefined;
  let smallest = obj[key][0];
  for (let el of obj[key]) {
    if (el < smallest) smallest = el;
  }
  return smallest;
}

var obj = {
  key: [2, 1, 5],
};
var output = getSmallestElementAtProperty(obj, "key");
console.log(output); // --> 1
