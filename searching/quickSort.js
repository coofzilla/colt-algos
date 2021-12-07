//arrange elements in an array on either side of pivot
//designate element as pivot
//less than pivot move to left
//greater than pivot move to right
//order of elements on left or right doesnt matter
//should do it in place, dont make new array
//when complete, helper return index of pivot

//runtime of quicksort depends on pivot point
//normally rough median value of data
//in this example, choose first element

//accept three arguments: arr, start index, end index
//grab pivot from start
//store current pivot index in var
//loop through arr from start until end
//  if pivot greater than current el, increment pivot index var
//  next swap current el with el at pivot index
//swap starting el(pivot in this case), with pivot index
//return pivot index

function pivot(arr, start = 0, end = arr.length - 1) {
  function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }

  let pivot = arr[start];
  let pivotIndex = start;

  for (let i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
      pivotIndex++;
      swap(arr, i, pivotIndex);
    }
  }
  swap(arr, start, pivotIndex);

  return pivotIndex;
}

//call pivot helper on array
//when helper return updated pivot index
//recursively call pivot helper on subarray to left of index
//and right to that index
//base occurs when subarray with less than 2 elements

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right);
    //left
    quickSort(arr, left, pivotIndex - 1);
    //right
    quickSort(arr, pivotIndex + 1, right);
  }

  return arr;
}
const array = [4, 1, 2, 3];

quickSort(array);
