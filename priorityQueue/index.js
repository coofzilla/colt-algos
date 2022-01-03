class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor(values) {
    this.values = [];
  }

  enqueue(val, priority) {
    const node = new Node(val, priority);
    this.values.push(node);
    this.bubbleUp(node);
    return this.values.length;
  }

  bubbleUp(node) {
    //need last index to find parent
    let index = this.values.length - 1;
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.values[parentIndex];
      if (node.priority >= parent.priority) break;
      this.swap(this.values, index, parentIndex);
      index = parentIndex;
    }
  }

  dequeue() {
    const arr = this.values;
    if (arr.length > 0) {
      this.swap(arr, 0, arr.length - 1);
      let removed = arr.pop();
      this.sinkDown(arr);
      return removed;
    }
    return undefined;
  }

  sinkDown(arr) {
    let index = 0;
    const length = arr.length;
    const element = arr[index];
    while (true) {
      let leftChildIndx = 2 * index + 1;
      let rightChildIndx = 2 * index + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIndx < length) {
        leftChild = arr[leftChildIndx];
        if (leftChild.priority < element.priority) swap = leftChildIndx;
      }

      if (rightChildIndx < length) {
        rightChild = arr[rightChildIndx];
        if (rightChild.priority < element.priority) swap = rightChildIndx;
      }

      if (leftChild?.priority && rightChild?.priority < element?.priority) {
        let smallest = Math.min(leftChild.priority, rightChild.priority);
        smallest === leftChild.priority
          ? (swap = leftChildIndx)
          : (swap = rightChildIndx);
      }

      if (!swap) break;

      this.swap(arr, index, swap);

      index = swap;
    }
  }

  swap(arr, index1, index2) {
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
  }

  insertBatch(num) {
    for (let i = 0; i < num; i++) {
      const randomNum = Math.floor(Math.random() * 6);
      switch (randomNum) {
        case 0:
          this.enqueue('Life-threatening', 1);
          break;
        case 1:
          this.enqueue('Chest Pain', 2);
          break;
        case 2:
          this.enqueue('Abdominal Pain', 3);
          break;
        case 3:
          this.enqueue('Vomiting', 4);
          break;
        case 4:
          this.enqueue('Fever', 5);
          break;
        case 5:
          this.enqueue('Cough', 6);
      }
    }
  }
}

const queue = new PriorityQueue();
queue.insertBatch(10);
