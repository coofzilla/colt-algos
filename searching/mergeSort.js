//implement function for merging two sorted arrays
//given two arrays which are sorted, helper function should
//create new array which is also sorted, and consists of all
//elements in the two input arrays

//create empty array, take a look at the smallest values in each input array
//while still values haven't looked at

//if value in first array smaller than value in second array push value in first array
//into results and move on to next value in first array

//if value in first array larger than value in second array,
//push value in second array into results and move on to next value in second array

function merge(arr1, arr2) {
  let results = [];

  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    results.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    results.push(arr2[j]);
    j++;
  }

  return results;
}

//merge([1, 10, 50], [2, 14, 99, 100]);

//break up array into halves until you have arrays that are empty or have one element
//pro tip use slice
//keep going recursively
//basecase array length are less than or equal to one
//once have smaller sorted arrays, merge those arrays with other sorted arrays until you are back at full length of array
//once array merged back together, return merged array

//O(log n)
//as n grows, the number of times split up grows
function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  let mid = Math.floor(arr.length / 2);
  //end not included w/slice
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
}
mergeSort([10, 24, 76, 73, 72, 1, 9]);
