/* eslint-disable consistent-return */
/* eslint-disable no-param-reassign */
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

export default deleteNode;
