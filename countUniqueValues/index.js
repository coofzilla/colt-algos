countUniqueValues([1, 1, 1, 1, 1, 2]); // 2
// countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]); // 7
// countUniqueValues([]); // 0
// countUniqueValues([-2, -1, -1, 0, 1]); // 4

function countUniqueValues(sortedArray) {
  let valueCount = {};
  for (let num of sortedArray) {
    valueCount[num] = ++valueCount[num] || 1;
  }
  return Object.keys(valueCount).length;
}
