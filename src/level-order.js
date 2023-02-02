/* eslint-disable consistent-return */
const print = (node) => {
  console.log(node);
};

const levelOrder = (node, cb, queue = [], values = []) => {
  if (node === undefined && cb === undefined) {
    return values;
  }

  if (node === undefined) {
    return;
  }

  if (queue.length === 0) {
    queue.push(node);
  }

  // Visit node's value
  if (cb === undefined) {
    values.push(node.data);
  } else {
    cb(node);
  }

  // Put node's child in queue
  if (node.left !== null) {
    queue.push(node.left);
  }

  if (node.right !== null) {
    queue.push(node.right);
  }

  // Recursion until queue empty
  if (queue.length > 0) {
    queue.shift();
    return levelOrder(queue[0], cb, queue, values);
  }

  // Iterate until queue empty
  // while (queue.length > 0) {
  //   if (queue[0].left !== null) {
  //     queue.push(queue[0].left);
  //   }

  //   if (queue[0].right !== null) {
  //     queue.push(queue[0].right);
  //   }

  //   if (cb === undefined) {
  //     values.push(queue[0].data);
  //   } else {
  //     cb(queue[0]);
  //   }
  //   queue.shift();
  // }
  // return values;
};

export { levelOrder, print };
