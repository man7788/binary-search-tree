/* eslint-disable consistent-return */
/* eslint-disable no-param-reassign */
import './style.css';

const Node = (data, left, right) => ({ data, left, right });

const Tree = (array) => buildTree(array);

const sortArray = (array) => {
  const unique = [];
  array.forEach((num) => {
    if (!unique.includes(num)) {
      unique.push(num);
    }
  });
  const sorted = unique.sort((a, b) => a - b);
  return sorted;
};

const buildTree = (array) => {
  const sorted = sortArray(array);
  const start = 0;
  const end = sorted.length - 1;
  const mid = Math.floor((start + end) / 2);

  const left = [];
  const right = [];

  if (start > end) {
    return null;
  }

  sorted.forEach((num) => {
    if (num < sorted[mid]) {
      left.push(num);
    } else if (num > sorted[mid]) {
      right.push(num);
    }
  });

  const root = Node(sorted[mid], buildTree(left), buildTree(right));
  return root;
};

const prettyPrint = (node, prefix = '', isLeft = true) => {
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
  }
  console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
  }
};

// Insert, only add as a leaf, no duplication
// Compare to each node, until reaches a leaf

const insert = (node, num) => {
  // Compare num with root
  // Return if num is same as root
  if (num === node.data) {
    return;
  }

  // Until reaches node with no left/right subtree
  if (node.left === null) {
    node.left = Node(num, null, null);
    return;
  }
  if (node.right === null) {
    node.right = Node(num, null, null);
    return;
  }

  // Recursive call left node if smaller than root
  if (num < node.data) {
    return insert(node.left, num);
  }
  // Recursive call right node if bigger than root
  if (num > node.data) {
    return insert(node.right, num);
  }
};

// Delete,
// delete leaf, structure won't change
// delete one child, remove node, point parent to child
// delete two children, find next biggest (right subtree)
// // next biggest has no left subtree
// // replace next biggest with delete

const deleteNode = (node, num, parent, nb) => {
  // Return, if reaches leaf with no match
  if (num !== node.data && node.left === null && node.right === null) {
    return console.log('No match found.');
  }
  // Match num with node
  if (num !== node.data) {
    if (num < node.data) {
      parent = node;
      return deleteNode(node.left, num, parent);
    }
    if (num > node.data) {
      parent = node;
      return deleteNode(node.right, num, parent);
    }
  }

  // When found match
  if (num === node.data) {
    if (parent === undefined && node.left === null && node.right === null) {
      node.data = null;
    }
    // // Set node parent left/right null
    else if (node.left === null && node.right === null) {
      if (parent.left !== null && parent.left.data === node.data) {
        parent.left = null;
      } else if (parent.right.data === node.data) {
        parent.right = null;
      }
    }
    // // Set node parent left/right with delete node children
    if (node.left === null && node.right !== null) {
      if (parent === undefined) {
        const temp = node.right;
        node.data = temp.data;
        node.left = temp.left;
        node.right = temp.right;
      } else if (parent.left.data === node.data) {
        parent.left = node.right;
      } else if (parent.right.data === node.data) {
        parent.right = node.right;
      }
    } else if (node.left !== null && node.right === null) {
      if (parent === undefined) {
        const temp = node.left;
        node.data = temp.data;
        node.left = temp.left;
        node.right = temp.right;
      } else if (parent.left.data === node.data) {
        parent.left = node.left;
      } else if (parent.right.data === node.data) {
        parent.right = node.left;
      }
    }
    // // Recursive node.right until node.left === null
    // // Set node parent data to next biggest
    if (node.left !== null && node.right !== null) {
      if (nb === undefined) {
        parent = null;
        nb = node.right;
        return deleteNode(node, num, parent, nb);
      }
      if (nb.left !== null) {
        parent = nb;
        nb = nb.left;
        return deleteNode(node, num, parent, nb);
      }
      if (nb.left === null) {
        node.data = nb.data;
        if (parent !== null) {
          parent.left = null;
        } else {
          node.right = nb.right;
        }
      }
    }
  }
};

const find = (node, num) => {
  // Return, if reaches leaf with no match
  if (num !== node.data && node.left === null && node.right === null) {
    return console.log('No match found.');
  }
  // Match num with node
  if (num !== node.data) {
    if (num < node.data) {
      return find(node.left, num);
    }
    if (num > node.data) {
      return find(node.right, num);
    }
  }

  // When found match
  if (num === node.data) {
    return console.log(node);
  }
};

const diu = Tree([16, 2, 4, 18, 27, 3, 19, 32, 48]);

console.log(sortArray([16, 2, 4, 18, 27, 3, 19, 32, 48]));
// insert(diu, 5);
// deleteNode(diu, 16);
// deleteNode(diu, 4);
// deleteNode(diu, 2);
// deleteNode(diu, 3);
// deleteNode(diu, 48);
// deleteNode(diu, 32);
// deleteNode(diu, 19);
// deleteNode(diu, 27);
// deleteNode(diu, 18);
// find(diu, 19);

console.log(diu);
prettyPrint(diu);
