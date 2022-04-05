const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 15];
//function accepts SORTED array and a value
//create a left pointer at the start of array
//create a right pointer at the end of array

//while the left pointer comes before right pointer:
//create pointer in middle
//if find value want, return index
//if value is too small, move left pointer up
//if value too large, move right pointer down
//if never find value, return -1
function binarySearch(arr, searchValue) {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((start + end) / 2);

  while (arr[middle] !== searchValue && start <= end) {
    if (searchValue < arr[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
    middle = Math.floor((start + end) / 2);
  }
  if (arr[middle] === searchValue) {
    return middle;
  }
  return -1;
}

function binarySearchCleaner(arr, searchValue) {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((start + end) / 2);

  while (arr[middle] !== searchValue && start <= end) {
    //can remove curlys for single statement
    if (searchValue < arr[middle]) end = middle - 1;
    else start = middle + 1;
    middle = Math.floor((start + end) / 2);
  }
  return arr[middle] === searchValue ? middle : -1;
}

console.log(binarySearch(numbersArray, 30));
console.log(binarySearchCleaner(numbersArray, 1));
