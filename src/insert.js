/* eslint-disable consistent-return */
/* eslint-disable no-param-reassign */
// Insert, only add as a leaf, no duplication
// Compare to each node, until reaches a leaf
import { Node } from './build-tree';

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

export default insert;
