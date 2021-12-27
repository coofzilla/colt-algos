//FIFO
//first in first out
//reindexes so perfomrance bad
const q = [];

q.push('FIRST');
q.push('SECOND');
q.push('THIRD');
q.shift();

//alternative way to remove first thing added
const q2 = [];

q2.unshift(1);
q2.unshift(2);
q2.unshift(3);
q2.pop();

//this way good
class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  //add to end
  enqueue(val) {
    const node = new Node(val);
    if (!this.first) {
      this.first = node;
      this.last = node;
    } else {
      this.last.next = node;
      this.last = node;
    }
    return ++this.size;
  }
  //remove from beginning
  dequeue() {
    if (!this.first) return null;
    let removed = this.first;
    if (this.size === 1) {
      this.first = null;
      this.last = null;
    } else {
      this.first = removed.next;
    }
    this.size--;
    return removed.value;
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const que = new Queue();

que.enqueue(1);
que.enqueue(2);
que.dequeue();
que.dequeue();

console.log(que);
