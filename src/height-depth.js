/* eslint-disable consistent-return */
/* eslint-disable no-param-reassign */
import find from './find';

const height = (node, value) => {
  const target = find(node, value);
  const result = [];

  let count1 = 1;
  let count2 = 1;
  let count3 = 1;
  let count4 = 1;

  const travelLeft = (child) => {
    if (child.left !== null) {
      count1 += 1;
      travelLeft(child.left);
    }
    if (child.right !== null) {
      count2 += 1;
      travelLeft(child.right);
    }
  };

  const travelRight = (child) => {
    if (child.left !== null) {
      count3 += 1;
      travelRight(child.left);
    }
    if (child.right !== null) {
      count4 += 1;
      travelRight(child.right);
    }
  };

  if (target.left !== null) {
    travelLeft(target.left);
  } else {
    count1 = 0;
    count2 = 0;
  }

  if (target.right !== null) {
    travelRight(target.right);
  } else {
    count3 = 0;
    count4 = 0;
  }

  result.push(count1, count2, count3, count4);
  result.sort((a, b) => b - a);
  console.log(result);
  return result[0];
};

const depth = (node, value, count = 0) => {
  if (value === node.data) {
    return count;
  }

  if (value > node.data) {
    return depth(node.right, value, count + 1);
  }

  if (value < node.data) {
    return depth(node.left, value, count + 1);
  }
};

export { height, depth };
