const sampleArr = [5, 3, 4, 1, 2, 3, 50, 22, 3, 2, 87];

function swap(arr, indx1, indx2) {
  let temp = arr[indx1];
  arr[indx1] = arr[indx2];
  arr[indx2] = temp;
}
//swap(sampleArr, 0, 1);

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
  return sampleArr;
}

console.log(bubbleSort(sampleArr));
