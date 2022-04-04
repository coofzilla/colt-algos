// Note: This is a simple, albeit temporarily incorrect implementation of the standard Array method "every()":
// https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/every

// FUNCTION DEFINITION(S)
function every(array, callbackFunction) {
  let doesEveryElementMatch = true;

  for (let i = 0; i < array.length; i++) {
    if (doesEveryElementMatch === false) return doesEveryElementMatch;
    doesEveryElementMatch = callbackFunction(array[i]);
  }

  return doesEveryElementMatch;
}

// ASSERTION FUNCTION(S) TO BE USED
function assertEqual(actual, expected, testName) {
  if (actual === expected) return console.log("passed");
  return console.log(
    `FAILED [${testName}] Expected ${expected}, but got ${actual}`
  );
}
// TESTS CASES
function lessThanTen(val) {
  return val < 10;
}

const arrayTrue = [1, 3, 4, 5];
const actualTrue = every(arrayTrue, lessThanTen);
assertEqual(
  actualTrue,
  true,
  "should return true when all array values return true when tested"
);

const arrayFalse = [1, 13, 1, 2, 55];
const actualFalse = every(arrayFalse, lessThanTen);
assertEqual(
  actualFalse,
  false,
  "should return false when not all array values return true when tested"
);
