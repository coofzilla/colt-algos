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
  create() {
    let newNode = new Node('hello');
    this.head = newNode;
    this.tail = this.head;

    return this;
  }
  mutate() {
    let newNode = new Node('goodbye');
    this.tail.next = newNode;
    this.tail = newNode;
    return this;
  }
}

let list = new SinglyLinkedList();

// console.log(list.create());
// console.log(list.mutate());

let a = { name: 'apple' };
let b = a;
console.log(a, b);
b.name = 'banana';
console.log(a, b);
b = { name: 'orange' };
console.log(a, b);

