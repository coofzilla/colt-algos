//store first element as the smallest value seen so far
//compare to next item, if smaller update new minimum (index)
//after first pass swap original minimum with new minimum
//repeat with next element until array sorted

const array = [0, 2, 34, 22, 10, 19, 17];

function swap(arr, indx1, indx2) {
  let temp = arr[indx1];
  arr[indx1] = arr[indx2];
  arr[indx2] = temp;
}

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) {
        lowest = j;
      }
    }
    if (i !== lowest) {
      swap(array, i, lowest);
    }
  }
  console.log('SORTED', arr);
}

selectionSort(array);
