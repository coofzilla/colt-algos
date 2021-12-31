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

  //Depth First Search DFS
  preOrder() {
    const data = [];
    //modify to change starting point
    let current = this.root;

    function traverse(node) {
      if (!node) return undefined;
      data.push(node.data);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(current);
    return data;
  }

  postOrder() {
    const data = [];
    let current = this.root;

    const traverse = (node) => {
      if (!node) return undefined;
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      data.push(node.data);
    };
    traverse(current);
    return data;
  }
}

const insertRandBatch = (tree, num) => {
  const nodes = [];

  for (let i = 0; i < num; i++) {
    const randomNumber = Math.floor(Math.random() * 100);
    const inserted = tree.insert(randomNumber);

    if (inserted !== undefined) nodes.push(randomNumber);
  }
  return nodes;
};

const tree = new BinarySearchTree();

insertRandBatch(tree, 10);
