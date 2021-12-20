//data structure contains head, tail, length
//linked lists consist of nodes, each node has value and pointer
//points to another node or null (like a train car)
//dont have indices

//arrays
//indexed in order
//insertion and deletion expensive
//can quickly access specific index

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    //returning this allows to chain on other methods f/this instance
    return this;
  }

  pop() {
    if (!this.head) return undefined;

    let current = this.head;

    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return current;
  }

  shift() {
    if (!this.head) return undefined;
    //if no nodes, return undefined
    let currentHead = this.head;
    //store current head property in variable
    this.head = currentHead.next;
    //set head property to be current heads next property
    this.length--;
    if (this.length === 0) this.tail = null;
    return currentHead;
    //return value of node removed
  }

  unshift(val) {
    let newNode = new Node(val);

    if (!this.head) {
      //if no head set head and tail to newly created node
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      //set newly created node next prop to be current head prop on list
      this.head = newNode;
      //set head prop on list to be newly created node
    }
    this.length++;
    //increment length by1
    return list;
    //return linked list
  }

  get(index) {
    if (index < 0 || index >= list.length) return undefined;
    let counter = 0;
    let current = this.head;

    while (counter !== index) {
      //loop through list until reach index
      current = current.next;
      counter++;
    }
    return current;
  }
  set(index, val) {
    const node = this.get(index);
    if (!node) return false;
    if (node) node.val = val;
    return true;
  }

  insert(index, val) {
    if (index < 0 || index > list.length) return false;
    //double ! converts to bool
    if (index === this.length) return !!this.push(val);
    if (index === 0) return !!this.unshift(val);
    const newNode = new Node(val);
    const previous = this.get(index - 1);
    const temp = previous.next;

    previous.next = newNode;
    newNode.next = temp;
    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index >= list.length) return undefined;
    if (index === list.length - 1) return this.pop();
    if (index === 0) return this.shift();

    const previous = this.get(index - 1);
    let removed = previous.next;
    previous.next = removed.next;

    this.length--;
    return removed;
  }

  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let next;
    let previous = null;
    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = previous;
      previous = node;
      node = next;
    }

    return this;
  }

  console() {
    const arr = [];
    let current = this.head;
    while (current) {
      arr.push(current.val);
      current = current.next;
    }
    console.log(arr);
  }

  traverse() {
    let current = this.head;
    while (current) {
      current = current.next;
    }
  }
}

let list = new SinglyLinkedList();

list.push(100);
list.push(200);
list.push(300);
list.push(400);

list.console();
list.reverse();
list.console();
