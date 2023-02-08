/* eslint-disable consistent-return */
/* eslint-disable no-param-reassign */
import './style.css';
import { Node, Tree, sortArray, buildTree } from './build-tree';
import prettyPrint from './pretty-print';
import insert from './insert';
import deleteNode from './delete';
import find from './find';
import { levelOrder, print } from './level-order';
import { inorder, preorder, postorder, test } from './depth-first';
import { height, depth } from './height-depth';

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
// console.log(levelOrder(diu));
// console.log(inorder(diu));
// console.log(preorder(diu));
// console.log(postorder(diu));
console.log(height(diu, 27));
// console.log(depth(diu));
console.log(diu);
prettyPrint(diu);
