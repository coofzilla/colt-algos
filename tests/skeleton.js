// Skeleton

// FUNCTION DEFINITION(S)
function average(numbers) {
  // uses sum function
  let total = sum(numbers);
  // returns the average of an array of numbers
  return total / numbers.length;
}

function sum(numbers) {
  let sum = 0;
  for (let num of numbers) {
    sum += num;
  }
  return sum;
}

// ASSERTION FUNCTION(S) TO BE USED
function assertSum(actual, expected, testName) {
  if (actual !== expected) return console.log(`failed ${testName}`);
  return console.log("passed");
}
function assertAverage(actual, expected, testName) {
  if (actual !== expected) return console.log(`failed ${testName}`);
  return console.log("passed");
}
// TESTS CASES
assertSum(sum([1, 2, 3]), 6, "sums the array of numbers");
assertAverage(average([1, 2, 3]), 2, "averages array of numbers");
