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

  traverse() {
    let current = this.head;
    while (current) {
      console.log(current.val);
      current = current.next;
    }
  }
}

let list = new SinglyLinkedList();

list.push('Hello');
list.push('Goodbye');
list.push('!');

list.unshift('first');
console.log(list);
