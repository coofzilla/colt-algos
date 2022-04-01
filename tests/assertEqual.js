function assertEqual(actual, expected, testName) {
  if (actual === expected) return console.log("passed");
  return console.log(
    `FAILED [${testName}] Expected "${expected}", but got "${actual}"`
  );
}

// function multiplyByTwo(n) {
//   return n * 2;
// }
function multiplyByTwo(n) {
  return n * 2 + 1; // an incorrect implementation
}
var output = multiplyByTwo(2); // returns 4
assertEqual(output, 4, "it doubles 2 to 4");

// console output:
// passed
