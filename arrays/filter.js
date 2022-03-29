function getAllElementsButNth(array, n) {
  const filteredArr = array.filter((el) => el !== array[n]);
  return filteredArr;
}

var output = getAllElementsButNth(["a", "b", "c"], 1);
console.log(output); // --> ['a', 'c']
