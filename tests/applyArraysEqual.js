// FUNCTION DEFINITION(S)
const addOne = (val) => {
  return val + 1;
};

function map(array, callbackFunction) {
  const newArray = [];

  for (let i = 0; i < array.length; i++) {
    newArray.push(callbackFunction(array[i]));
  }

  return newArray;
}

function cubeAll(numbers) {
  return map(numbers, function (n) {
    return n * n;
  });
}

// ASSERTION FUNCTION(S) TO BE USED
function assertArraysEqual(actual, expected, testName) {
  if (actual.length !== expected.length) {
    return console.log(
      `FAILED [${testName}] Expected "${expected}", but got "${actual}"`
    );
  }
  for (let i = 0; i < expected.length; i++) {
    if (actual[i] !== expected[i]) {
      return console.log(
        `FAILED [${testName}] Expected "${expected}", but got "${actual}"`
      );
    }
  }
  return console.log("passed");
}
// TESTS CASES
const array = [1, 2, 3];
const actualMap = map(array, addOne);
assertArraysEqual(
  actualMap,
  [2, 3, 4],
  "should add one to each value in array"
);
const cubedArray = [1, 8, 27];
