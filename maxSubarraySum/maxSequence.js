const numbers = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

function maxSequence(arr) {
  if (arr.length <= 0) return 0;
  let maxSum = 0;
  for (let i = 0; i < arr.length; i++) {
    let temp = 0;
    for (let j = 0 + i; j < arr.length; j++) {
      temp += arr[j];
      if (temp > maxSum) maxSum = temp;
    }
  }
  return maxSum;
}

maxSequence(numbers);
