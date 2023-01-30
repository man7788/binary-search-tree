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

const diu = Tree([19, 2, 28, 4, 32, 18, 26, 48]);

const prettyPrint = (node, prefix = '', isLeft = true) => {
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
  }
  console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
  }
};

console.log(sortArray([19, 2, 28, 4, 32, 18, 26, 48]));
console.log(diu);
prettyPrint(diu);
