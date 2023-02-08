const isBalanced = (node) => {
  const left = [];
  const right = [];

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

  if (node.left !== null) {
    travelLeft(node.left);
  } else {
    count1 = 0;
    count2 = 0;
  }

  if (node.right !== null) {
    travelRight(node.right);
  } else {
    count3 = 0;
    count4 = 0;
  }

  left.push(count1, count2);
  right.push(count3, count4);
  left.sort((a, b) => b - a);
  right.sort((a, b) => b - a);
  console.log(left, right);

  if (left[0] - right[0] <= 1) {
    return true;
  }
  return false;
};

const rebalance = (node) => {};

export { isBalanced, rebalance };
