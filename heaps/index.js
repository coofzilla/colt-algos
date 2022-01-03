//maxBinaryHeap parent node always larger than children
//minBinaryHeap parent node always smaller than children

//parent find children
//for any index of arr n
//left child stored 2n+1
//right child stored at 2n +2

//children find parent
//for any index n
//parent is (n-1)/2 floored

class MaxBinaryHeap {
  constructor(values) {
    this.values = [];
  }

  insert(data) {
    this.values.push(data);
    this.bubbleUp();
    return this.values.length;
  }

  bubbleUp() {
    //arr length - 1 gives last index
    let index = this.values.length - 1;
    const element = this.values[index];

    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.values[parentIndex];
      if (element <= parent) break;
      this.values[parentIndex] = element;
      this.values[index] = parent;
      index = parentIndex;
    }
  }

  removeMax() {
    const arr = this.values;
    if (arr.length > 0) {
      this.swap(arr, 0, arr.length - 1);
      let removed = arr.pop();
      this.sinkDown(arr);
      return removed;
    }
    return undefined;
  }

  swap(arr, indx1, indx2) {
    let temp = arr[indx1];
    arr[indx1] = arr[indx2];
    arr[indx2] = temp;
  }

  sinkDown(arr) {
    let index = 0;
    const length = arr.length;
    const element = arr[index];
    while (true) {
      let leftChildIndx = this.leftChild(index);
      let rightChildIndx = this.rightChild(index);
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIndx < length) {
        leftChild = arr[leftChildIndx];
        if (leftChild > element) swap = leftChildIndx;
      }

      if (rightChildIndx < length) {
        rightChild = arr[rightChildIndx];
        if (rightChild > element) swap = rightChildIndx;
      }

      if (leftChild && rightChild > element) {
        let largest = Math.max(leftChild, rightChild);
        largest === leftChild
          ? (swap = leftChildIndx)
          : (swap = rightChildIndx);
      }

      if (!swap) break;

      this.swap(arr, index, swap);

      index = swap;
    }
  }

  leftChild(index) {
    return 2 * index + 1;
  }

  rightChild(index) {
    return 2 * index + 2;
  }

  insertRandBatch(num) {
    for (let i = 0; i < num; i++) {
      const randomNumber = Math.floor(Math.random() * 100);
      this.insert(randomNumber);
    }
    return this.values.length;
  }
}
const heap = new MaxBinaryHeap();

heap.insertRandBatch(10);

// heap.insert(41);
// heap.insert(39);
// heap.insert(33);
// heap.insert(18);
// heap.insert(27);
// heap.insert(12);
// heap.insert(55);
