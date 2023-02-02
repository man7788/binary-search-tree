/* eslint-disable consistent-return */
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

export default find;
