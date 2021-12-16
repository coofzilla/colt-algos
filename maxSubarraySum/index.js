const array = [1, 2, 3, 5, 5, 1, 1, 12, 1];

//sliding window approach
function maxSubarraySum(arr, num) {
  let maxSum = 0;
  let tempSum = 0;

  if (arr.length < num) return null;

  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  //maxSum = 10 after first loop
  tempSum = maxSum;
  //tempSum = 10 after first loop

  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }

  return maxSum;
}

maxSubarraySum(array, 2);
