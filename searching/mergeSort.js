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
  console.log(results);
  return results;
}

merge([1, 10, 50], [2, 14, 99, 100]);
