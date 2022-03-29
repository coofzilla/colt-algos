function getElementsAfter(array, n) {
  if (array.length === 0) return [];
  if (array.length === 1) return [];
  let afterArr = [];

  for (let i = array.indexOf(array[n + 1]); i < array.length; i++) {
    afterArr.push(array[i]);
  }
  return afterArr;
}

var output = getElementsAfter(["a", "b", "c", "d", "e"], 6);
console.log(output); // --> ['d', 'e']
