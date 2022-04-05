//builds up sort, gradually creating a larger left portion which is sorted
//pick second element in array
//compare second element with one before, swap if necessary
//continue to next element and if its in the correct order, iterate through sorted portion
//place element in correct place
//repeat until array sorted
const arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];

function swap(arr, indx1, indx2) {
  let temp = arr[indx1];
  arr[indx1] = arr[indx2];
  arr[indx2] = temp;
}

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currentVal = arr[i];
    for (let j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
      arr[j] = currentVal;
    }
    //arr[j + 1] = currentVal; not scoped
  }
  console.log(arr);
}

insertionSort(arr);
