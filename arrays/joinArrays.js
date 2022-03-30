function joinArrayOfArrays(arr) {
  let joined = [];
  for (let el of arr) {
    joined = joined.concat(el);
  }
  return joined;
}

var output = joinArrayOfArrays([
  [1, 4],
  [true, false],
  ["x", "y"],
]);
console.log(output); // --> [1, 4, true, false, 'x', 'y']
