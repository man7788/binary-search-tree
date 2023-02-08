const Node = (data, left, right) => ({ data, left, right });

const Tree = (array) => buildTree(array);
const unblcTree = (array) => buildUnblcTree(array);

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

const buildUnblcTree = (array) => {
  if (array.length === 0) {
    return null;
  }

  const sorted = sortArray(array);
  // console.log(sorted);
  sorted.shift();

  const root = Node(sorted[0], buildUnblcTree(sorted), null);
  return root;
};

export { Node, Tree, sortArray, buildTree, unblcTree };
