// countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]); // 7
// countUniqueValues([]); // 0
// countUniqueValues([-2, -1, -1, 0, 1]); // 4

countUniqueValues([1, 1, 1, 1, 1, 2]); // 2

// function countUniqueValues(sortedArray) {
//   let valueCount = {};
//   for (let num of sortedArray) {
//     valueCount[num] = ++valueCount[num] || 1;
//   }
//   return Object.keys(valueCount).length;
// }

function countUniqueValues(arr) {
  if (arr.length === 0) {
    return;
  }
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    //i represents the index position
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}
