class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.previous = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.previous = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    let poppedNode = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = poppedNode.previous;
      this.tail.next = null;
      poppedNode.previous = null;
    }
    this.length--;
    return poppedNode;
  }

  shift() {
    if (!this.head) return undefined;
    let oldHead = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.previous = null;
      oldHead.next = null;
    }

    this.length--;
    return oldHead;
  }

  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.previous = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;
    const mid = Math.floor(this.length / 2);

    if (index <= mid) {
      let counter = 0;
      let currNode = this.head;
      while (counter !== index) {
        currNode = currNode.next;
        counter++;
      }
      return currNode;
    }

    if (index > mid) {
      let counter = this.length - 1;
      let currNode = this.tail;
      while (counter !== index) {
        currNode = currNode.previous;
        counter--;
      }
      return currNode;
    }
  }

  set(index, val) {
    const node = this.get(index);
    if (!node) return false;
    if (node) node.val = val;
    return true;
  }
}

const list = new DoublyLinkedList();

list.push(1);
list.push(2);
list.push(3);

list.set(0, 0);
