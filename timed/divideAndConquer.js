// Binary search is a technique for very rapidly searching a sorted collection by cutting the search space in half at every pass.

// Given a sorted array, such as this:
// [1, 3, 16, 22, 31, 33, 34]

// You can search for the value 31, as follows:

// 1) Pick the midpoint: 22.
// 2) The value is higher than 22, so now consider only the right half of the previous array:
// [...31, 33, 34]
// 3) Pick the midpoint: 33
// 4) The value is lower than 33, so now consider only the left half of the previous array:
// [...31...]
// 5) Pick the midpoint: 31
// 6) You've hit the value.
// 7) Return the index of the value.

// Notes:
// * If you don't find the value, you can return null.
// * If at any point you calculate the index of the midpoint and get a fractional number, just round it down ("floor" it).

const numArr = [1, 3, 16, 22, 31, 33, 34];

function binarySearch(arr, searchValue) {
  let start = 0;
  let end = arr.length - 1;
  let mid = Math.floor((start + end) / 2);

  while (arr[mid] !== searchValue && start <= end) {
    //define where the new end should be
    if (searchValue < arr[mid]) end = mid - 1;
    //define where the new start point is
    else start = mid + 1;
    //calc new mid for remaining chunk
    mid = Math.floor((start + end) / 2);
  }
  //didn't go through loop because found the value
  return arr[mid] === searchValue ? mid : null;
}

binarySearch([1, 3, 16, 22, 31, 33, 34], 3);

function bSearch(arr, searchValue) {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((start + end) / 2);

  while (arr[middle] !== searchValue && start <= end) {
    if (searchValue < arr[middle]) end = middle - 1;
    else start = middle + 1;
    middle = Math.floor((start + end) / 2);
  }
  return arr[middle] === searchValue ? middle : null;
}

const result = bSearch(numArr, 1);
console.log(result);
