const { NotImplementedError } = require("../extensions/index.js");

const { Node } = require("../extensions/list-tree.js");

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    this.rootNode = this._add(this.rootNode, data);
  }

  has(data) {
    return this._find(this.rootNode, data) !== null;
  }

  find(data) {
    const resultNode = this._find(this.rootNode, data);
    return resultNode;
  }

  remove(data) {
    this.rootNode = this._delete(this.rootNode, data);
  }

  min() {
    const minNode = this._findMinNode(this.rootNode);
    return minNode ? minNode.data : null;
  }

  max() {
    const maxNode = this._findMaxNode(this.rootNode);
    return maxNode ? maxNode.data : null;
  }

  _add(node, data) {
    if (!node) {
      return new Node(data);
    }
    if (data < node.data) {
      node.left = this._add(node.left, data);
    } else if (data > node.data) {
      node.right = this._add(node.right, data);
    }
    return node;
  }

  _find(node, data) {
    if (!node || node.data === data) {
      return null;
    }
    if (data < node.data) {
      return this._find(node.left, data);
    } else if (data > node.data) {
      return this._find(node.right, data);
    }
  }

  _delete(node, data) {
    if (!node) {
      return null;
    }
    if (data < node.data) {
      node.left = this._delete(node.left, data);
    } else if (data > node.data) {
      node.right = this._delete(node.right, data);
    } else {
      if (!node.left && !node.right) {
        return null;
      }
      if (!node.left) {
        return node.right;
      }
      if (!node.right) {
        return node.left;
      }
      node.data = this._findMinValueNode(node.right);
      node.right = this._delete(node.right, node.data);
    }
    return node;
  }

  _findMinValueNode(node) {
    let current = node;
    while (current.left) {
      current = current.left;
    }
    return current.data;
  }

  _findMinNode(node) {
    if (!node) {
      return null;
    }

    while (node.left) {
      node = node.left;
    }
    return node;
  }

  _findMaxNode(node) {
    if (!node) {
      return null;
    }

    while (node.right) {
      node = node.right;
    }

    return node;
  }
}

module.exports = {
  BinarySearchTree,
};
