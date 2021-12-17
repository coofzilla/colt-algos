const numbers = [1, 3, -1, -3, 5, 3, 6, 7];

//largest number for window of k
//this is brute force method
function sliding(nums, k) {
  let maxArr = [];
  for (let i = 0; i < nums.length; i++) {
    let window = [];
    for (let j = 0; j < k; j++) {
      window.push(nums[j + i]);
    }
    let maxNum = Math.max(...window);
    if (maxNum) maxArr.push(maxNum);
  }
  return maxArr;
}

sliding(numbers, 3);
