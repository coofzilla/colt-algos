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

  findLeftChild(index) {
    const leftChildIndex = 2 * index + 1;
    return this.values[leftChildIndex];
  }

  findRightChild(index){
    const rightChildIndex = 2 * index + 2;
    return this.values[rightChildIndex];
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
