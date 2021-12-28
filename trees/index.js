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
        if (data === current.data) return undefined;
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
    if (!data && data !== 0) return false;
    if (!this.root) return false;

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

  breadthFirstSearch() {
    const queue = [];
    const data = [];
    let node = this.root;

    queue.push(node);

    while (queue.length) {
      node = queue.shift();
      data.push(node.data);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return data;
  }
}

const tree = new BinarySearchTree();

const insertAndFind = (tree, num) => {
  const treeCount = {
    inserted: 0,
    found: 0,
  };
  for (let i = 0; i < num; i++) {
    const randomNumber = Math.floor(Math.random() * 100);
    const inserted = tree.insert(randomNumber);

    if (inserted !== undefined) {
      treeCount.inserted++;
      const found = tree.find(randomNumber);
      if (found) treeCount.found++;
    }
  }
  return treeCount;
};

insertAndFind(tree, 6);
