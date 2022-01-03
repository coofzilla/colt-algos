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
  swap(arr, index1, index2) {
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
  }
}

const queue = new PriorityQueue();

queue.enqueue('gunshot', 1);
queue.enqueue('cancer', 2);
queue.enqueue('flu', 3);
