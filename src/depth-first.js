/* eslint-disable no-useless-return */
/* eslint-disable no-param-reassign */
/* eslint-disable consistent-return */
const test = (node) => {
  console.log(node.data);
};

const inorder = (node, cb, values = []) => {
  if (node === null) {
    return;
  }
  inorder(node.right, cb, values);
  if (cb === undefined) {
    values.unshift(node.data);
  } else {
    cb(node);
  }
  inorder(node.left, cb, values);
  if (cb === undefined) {
    return values;
  }
};

function preorder(node, cb, values = []) {
  if (node === null) {
    return;
  }
  if (cb === undefined) {
    values.push(node.data);
  } else {
    cb(node);
  }
  preorder(node.left, cb, values);
  preorder(node.right, cb, values);
  if (cb === undefined) {
    return values;
  }
}

const postorder = (node, cb, values = []) => {
  if (node === null) {
    return;
  }
  postorder(node.left, cb, values);
  postorder(node.right, cb, values);
  if (cb === undefined) {
    values.push(node.data);
  } else {
    cb(node);
  }
  if (cb === undefined) {
    return values;
  }
};

export { inorder, preorder, postorder, test };
