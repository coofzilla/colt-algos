var expected = ["b", "r", "o", "k", "e", "n"];
var actual = "broken".split("");
assertArraysEqual(actual, expected, "splits string into array of characters");
// console output:
// passed

// var expected = [1, 1, 2, 3, 5, 8, 13];
// var actual = generateFirstNFibonaccis(7);
// assertArraysEqual(actual, expected, "generates first 7 Fibonacci numbers");
// console output:
// FAILED [generates first 7 Fibonacci numbers] Expected "1, 1, 2, 3, 5, 8, 13", but got "2, 3, 5, 8, 13, 21, 34"

function assertArraysEqual(actual, expected, testName) {
  if (actual.length !== expected.length) {
    return console.log(
      `FAILED [${testName}] Expected "${expected}", but got "${actual}"`
    );
  }
  for (let i = 0; i < actual.length; i++) {
    if (actual[i] !== expected[i]) {
      return console.log(
        `FAILED [${testName}] Expected "${expected}", but got "${actual}"`
      );
    }
  }
  return console.log("passed");
}

// expected 'FAILED [my test] Expected "1,2,3,4" but got "1,2,3"' to deeply equal 'FAILED [my test] Expected "1,2,3,4", but got "1,2,3"'
