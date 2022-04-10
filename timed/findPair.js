// Given a list of non-negative integers and a target sum, find a pair of numbers that sums to the target sum.

// Example:

const pair = findPairForSum([3, 34, 4, 12, 5, 2], 9);
console.log(pair); // --> [4, 5]

function findPairForSum(arr, target) {
  let pair = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        pair.push(arr[i], arr[j]);
      }
    }
  }
  return pair;
}

const result = pairSum([3, 34, 4, 12, 5, 2], 9);

function pairSum(arr, target) {
  const pair = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) pair.push(arr[i], arr[j]);
    }
  }
  if (!pair.length) return null;
  return pair;
}
