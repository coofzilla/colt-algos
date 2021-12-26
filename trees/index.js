class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(data) {
    const newNode = new Node(data);
    if (!this.root) {
      this.root = newNode;
      return this;
    } else {
      let current = this.root;
      while (true) {
        if (data === current.value) return undefined;
        if (data < current.data) {
          if (!current.left) {
            current.left = newNode;
            return this;
          } else {
            current = current.left;
          }
        } else if (data > current.data) {
          if (!current.right) {
            current.right = newNode;
            return this;
          } else {
            current = current.right;
          }
        }
      }
    }
  }

  find(data) {
    if (!this.root) return undefined;
    if (this.root.data === data) return true;
    let current = this.root;
    while (true) {
      if (data < current.data) {
        if (!current.left) return false;
        current = current.left;
        if (current.data === data) return true;
      }
      if (data > current.data) {
        if (!current.right) return false;
        current = current.right;
        if (current.data === data) return true;
      }
    }
  }
}

const tree = new BinarySearchTree();

tree.insert(5);
tree.insert(4);
tree.insert(2);
tree.insert(11);
tree.insert(10);

console.log(tree);
