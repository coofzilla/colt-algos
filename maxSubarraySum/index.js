const array = [5, 5, 5, 5, 5, 1, 1, 12, 1];

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
    //i = 2 first loop
    // console.log(i, num, tempSum);
    tempSum = tempSum - arr[i - num] + arr[i];
    //tempSum = 10 - arr[2-2] + arr[2]
    //tempSum = 10 - 5 + 5
    //tempSum = 10
    maxSum = Math.max(maxSum, tempSum);
  }

  return maxSum;
}

maxSubarraySum(array, 2);
