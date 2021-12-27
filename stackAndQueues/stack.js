class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  //in a stack push is in the beginning to get constant time
  push(val) {
    let newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = this.first;
    } else {
      let nextNode = this.first;
      this.first = newNode;
      newNode.next = nextNode;
    }
    return ++this.size;
  }

  pop() {
    if (!this.first) return null;
    let removedNode = this.first;
    if (this.size === 1) {
      this.first = null;
      this.last = null;
    } else {
      this.first = removedNode.next;
    }
    this.size--;
    return removedNode;
  }
}
let stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);
stack.pop();
stack.pop();

console.log(stack);
