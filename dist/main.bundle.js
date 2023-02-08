/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {background: black;} ", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA,MAAM,iBAAiB,CAAC","sourcesContent":["body {background: black;} "],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/balanced.js":
/*!*************************!*\
  !*** ./src/balanced.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isBalanced": () => (/* binding */ isBalanced),
/* harmony export */   "rebalance": () => (/* binding */ rebalance)
/* harmony export */ });
/* harmony import */ var _build_tree__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./build-tree */ "./src/build-tree.js");


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

  if (left[0] - right[0] <= 1) {
    return true;
  }
  return false;
};

const rebalance = (node) => {
  const array = [];

  const travelAll = (child) => {
    array.push(child.data);
    if (child.left !== null) {
      travelAll(child.left);
    }
    if (child.right !== null) {
      travelAll(child.right);
    }
  };

  travelAll(node);
  const balanced = (0,_build_tree__WEBPACK_IMPORTED_MODULE_0__.buildTree)(array);
  return balanced;
};




/***/ }),

/***/ "./src/build-tree.js":
/*!***************************!*\
  !*** ./src/build-tree.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Node": () => (/* binding */ Node),
/* harmony export */   "Tree": () => (/* binding */ Tree),
/* harmony export */   "buildTree": () => (/* binding */ buildTree),
/* harmony export */   "sortArray": () => (/* binding */ sortArray),
/* harmony export */   "unblcTree": () => (/* binding */ unblcTree)
/* harmony export */ });
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

  const root = Node(sorted[0], buildUnblcTree(sorted.slice(1)), null);

  return root;
};




/***/ }),

/***/ "./src/delete.js":
/*!***********************!*\
  !*** ./src/delete.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (deleteNode);


/***/ }),

/***/ "./src/depth-first.js":
/*!****************************!*\
  !*** ./src/depth-first.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "inorder": () => (/* binding */ inorder),
/* harmony export */   "postorder": () => (/* binding */ postorder),
/* harmony export */   "preorder": () => (/* binding */ preorder),
/* harmony export */   "test": () => (/* binding */ test)
/* harmony export */ });
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




/***/ }),

/***/ "./src/find.js":
/*!*********************!*\
  !*** ./src/find.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* eslint-disable consistent-return */
const find = (node, num) => {
  // Return, if reaches leaf with no match
  if (num !== node.data && node.left === null && node.right === null) {
    return 'No match found.';
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
    return node;
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (find);


/***/ }),

/***/ "./src/height-depth.js":
/*!*****************************!*\
  !*** ./src/height-depth.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "depth": () => (/* binding */ depth),
/* harmony export */   "height": () => (/* binding */ height)
/* harmony export */ });
/* harmony import */ var _find__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./find */ "./src/find.js");
/* eslint-disable consistent-return */
/* eslint-disable no-param-reassign */


const height = (node, value) => {
  const target = (0,_find__WEBPACK_IMPORTED_MODULE_0__["default"])(node, value);
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




/***/ }),

/***/ "./src/insert.js":
/*!***********************!*\
  !*** ./src/insert.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _build_tree__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./build-tree */ "./src/build-tree.js");
/* eslint-disable consistent-return */
/* eslint-disable no-param-reassign */
// Insert, only add as a leaf, no duplication
// Compare to each node, until reaches a leaf


const insert = (node, num) => {
  // Compare num with root
  // Return if num is same as root
  if (num === node.data) {
    return;
  }

  // Until reaches node with no left/right subtree
  if (node.left === null) {
    node.left = (0,_build_tree__WEBPACK_IMPORTED_MODULE_0__.Node)(num, null, null);
    return;
  }
  if (node.right === null) {
    node.right = (0,_build_tree__WEBPACK_IMPORTED_MODULE_0__.Node)(num, null, null);
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (insert);


/***/ }),

/***/ "./src/level-order.js":
/*!****************************!*\
  !*** ./src/level-order.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "levelOrder": () => (/* binding */ levelOrder),
/* harmony export */   "print": () => (/* binding */ print)
/* harmony export */ });
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




/***/ }),

/***/ "./src/pretty-print.js":
/*!*****************************!*\
  !*** ./src/pretty-print.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const prettyPrint = (node, prefix = '', isLeft = true) => {
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
  }
  console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (prettyPrint);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _build_tree__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./build-tree */ "./src/build-tree.js");
/* harmony import */ var _pretty_print__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pretty-print */ "./src/pretty-print.js");
/* harmony import */ var _insert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./insert */ "./src/insert.js");
/* harmony import */ var _delete__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./delete */ "./src/delete.js");
/* harmony import */ var _find__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./find */ "./src/find.js");
/* harmony import */ var _level_order__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./level-order */ "./src/level-order.js");
/* harmony import */ var _depth_first__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./depth-first */ "./src/depth-first.js");
/* harmony import */ var _height_depth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./height-depth */ "./src/height-depth.js");
/* harmony import */ var _balanced__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./balanced */ "./src/balanced.js");
/* eslint-disable consistent-return */
/* eslint-disable no-param-reassign */











const diu = (0,_build_tree__WEBPACK_IMPORTED_MODULE_1__.Tree)([16, 2, 4, 18, 27, 3, 19, 32, 48]);
const on9 = (0,_build_tree__WEBPACK_IMPORTED_MODULE_1__.unblcTree)([16, 2, 4, 18, 27, 3, 19, 32, 48]);

console.log((0,_build_tree__WEBPACK_IMPORTED_MODULE_1__.sortArray)([16, 2, 4, 18, 27, 3, 19, 32, 48]));
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
// console.log(height(diu, 18));
// console.log(depth(diu, 16));
// console.log(isBalanced(diu));
console.log((0,_balanced__WEBPACK_IMPORTED_MODULE_9__.isBalanced)(on9));
console.log((0,_balanced__WEBPACK_IMPORTED_MODULE_9__.rebalance)(on9));
(0,_pretty_print__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_balanced__WEBPACK_IMPORTED_MODULE_9__.rebalance)(on9));
// console.log(diu);
console.log(on9);
// prettyPrint(diu);
(0,_pretty_print__WEBPACK_IMPORTED_MODULE_2__["default"])(on9);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDekYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBLGdEQUFnRCxvQkFBb0IsT0FBTywySEFBMkgsb0JBQW9CLG1CQUFtQjtBQUM3TztBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7OztBQ1AxQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFEO0FBQ3JEO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBLHFGQUFxRjtBQUNyRjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixxQkFBcUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0ZBQXNGLHFCQUFxQjtBQUMzRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsaURBQWlELHFCQUFxQjtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0RBQXNELHFCQUFxQjtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDcEZhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQkEsTUFBK0Y7QUFDL0YsTUFBcUY7QUFDckYsTUFBNEY7QUFDNUYsTUFBK0c7QUFDL0csTUFBd0c7QUFDeEcsTUFBd0c7QUFDeEcsTUFBbUc7QUFDbkc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxzRkFBTzs7OztBQUk2QztBQUNyRSxPQUFPLGlFQUFlLHNGQUFPLElBQUksNkZBQWMsR0FBRyw2RkFBYyxZQUFZLEVBQUM7Ozs7Ozs7Ozs7O0FDMUJoRTs7QUFFYjs7QUFFQTtBQUNBOztBQUVBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDdkdhOztBQUViO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNEQUFzRDs7QUFFdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3RDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ1ZhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTs7QUFFakY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNYYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrREFBa0Q7QUFDbEQ7O0FBRUE7QUFDQSwwQ0FBMEM7QUFDMUM7O0FBRUE7O0FBRUE7QUFDQSxpRkFBaUY7QUFDakY7O0FBRUE7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7O0FBRUE7QUFDQSx5REFBeUQ7QUFDekQsSUFBSTs7QUFFSjs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDckVhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmeUM7O0FBRXpDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsbUJBQW1CLHNEQUFTO0FBQzVCO0FBQ0E7O0FBRWlDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUVqQyx1Q0FBdUMsbUJBQW1COztBQUUxRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRXVEOzs7Ozs7Ozs7Ozs7Ozs7QUNyRHZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FB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V0NOQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNxQjtBQUMyQztBQUN2QjtBQUNYO0FBQ0k7QUFDUjtBQUN3QjtBQUNpQjtBQUNwQjtBQUNJOztBQUVuRCxZQUFZLGlEQUFJO0FBQ2hCLFlBQVksc0RBQVM7O0FBRXJCLFlBQVksc0RBQVM7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxxREFBVTtBQUN0QixZQUFZLG9EQUFTO0FBQ3JCLHlEQUFXLENBQUMsb0RBQVM7QUFDckI7QUFDQTtBQUNBO0FBQ0EseURBQVciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ucG0tc2V0dXAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL25wbS1zZXR1cC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vbnBtLXNldHVwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vbnBtLXNldHVwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL25wbS1zZXR1cC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9ucG0tc2V0dXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL25wbS1zZXR1cC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9ucG0tc2V0dXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vbnBtLXNldHVwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vbnBtLXNldHVwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vbnBtLXNldHVwLy4vc3JjL2JhbGFuY2VkLmpzIiwid2VicGFjazovL25wbS1zZXR1cC8uL3NyYy9idWlsZC10cmVlLmpzIiwid2VicGFjazovL25wbS1zZXR1cC8uL3NyYy9kZWxldGUuanMiLCJ3ZWJwYWNrOi8vbnBtLXNldHVwLy4vc3JjL2RlcHRoLWZpcnN0LmpzIiwid2VicGFjazovL25wbS1zZXR1cC8uL3NyYy9maW5kLmpzIiwid2VicGFjazovL25wbS1zZXR1cC8uL3NyYy9oZWlnaHQtZGVwdGguanMiLCJ3ZWJwYWNrOi8vbnBtLXNldHVwLy4vc3JjL2luc2VydC5qcyIsIndlYnBhY2s6Ly9ucG0tc2V0dXAvLi9zcmMvbGV2ZWwtb3JkZXIuanMiLCJ3ZWJwYWNrOi8vbnBtLXNldHVwLy4vc3JjL3ByZXR0eS1wcmludC5qcyIsIndlYnBhY2s6Ly9ucG0tc2V0dXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbnBtLXNldHVwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL25wbS1zZXR1cC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbnBtLXNldHVwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbnBtLXNldHVwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbnBtLXNldHVwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9ucG0tc2V0dXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtiYWNrZ3JvdW5kOiBibGFjazt9IFwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsTUFBTSxpQkFBaUIsQ0FBQ1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5IHtiYWNrZ3JvdW5kOiBibGFjazt9IFwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IGJ1aWxkVHJlZSB9IGZyb20gJy4vYnVpbGQtdHJlZSc7XG5cbmNvbnN0IGlzQmFsYW5jZWQgPSAobm9kZSkgPT4ge1xuICBjb25zdCBsZWZ0ID0gW107XG4gIGNvbnN0IHJpZ2h0ID0gW107XG5cbiAgbGV0IGNvdW50MSA9IDE7XG4gIGxldCBjb3VudDIgPSAxO1xuICBsZXQgY291bnQzID0gMTtcbiAgbGV0IGNvdW50NCA9IDE7XG5cbiAgY29uc3QgdHJhdmVsTGVmdCA9IChjaGlsZCkgPT4ge1xuICAgIGlmIChjaGlsZC5sZWZ0ICE9PSBudWxsKSB7XG4gICAgICBjb3VudDEgKz0gMTtcbiAgICAgIHRyYXZlbExlZnQoY2hpbGQubGVmdCk7XG4gICAgfVxuICAgIGlmIChjaGlsZC5yaWdodCAhPT0gbnVsbCkge1xuICAgICAgY291bnQyICs9IDE7XG4gICAgICB0cmF2ZWxMZWZ0KGNoaWxkLnJpZ2h0KTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgdHJhdmVsUmlnaHQgPSAoY2hpbGQpID0+IHtcbiAgICBpZiAoY2hpbGQubGVmdCAhPT0gbnVsbCkge1xuICAgICAgY291bnQzICs9IDE7XG4gICAgICB0cmF2ZWxSaWdodChjaGlsZC5sZWZ0KTtcbiAgICB9XG4gICAgaWYgKGNoaWxkLnJpZ2h0ICE9PSBudWxsKSB7XG4gICAgICBjb3VudDQgKz0gMTtcbiAgICAgIHRyYXZlbFJpZ2h0KGNoaWxkLnJpZ2h0KTtcbiAgICB9XG4gIH07XG5cbiAgaWYgKG5vZGUubGVmdCAhPT0gbnVsbCkge1xuICAgIHRyYXZlbExlZnQobm9kZS5sZWZ0KTtcbiAgfSBlbHNlIHtcbiAgICBjb3VudDEgPSAwO1xuICAgIGNvdW50MiA9IDA7XG4gIH1cblxuICBpZiAobm9kZS5yaWdodCAhPT0gbnVsbCkge1xuICAgIHRyYXZlbFJpZ2h0KG5vZGUucmlnaHQpO1xuICB9IGVsc2Uge1xuICAgIGNvdW50MyA9IDA7XG4gICAgY291bnQ0ID0gMDtcbiAgfVxuXG4gIGxlZnQucHVzaChjb3VudDEsIGNvdW50Mik7XG4gIHJpZ2h0LnB1c2goY291bnQzLCBjb3VudDQpO1xuICBsZWZ0LnNvcnQoKGEsIGIpID0+IGIgLSBhKTtcbiAgcmlnaHQuc29ydCgoYSwgYikgPT4gYiAtIGEpO1xuXG4gIGlmIChsZWZ0WzBdIC0gcmlnaHRbMF0gPD0gMSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cbmNvbnN0IHJlYmFsYW5jZSA9IChub2RlKSA9PiB7XG4gIGNvbnN0IGFycmF5ID0gW107XG5cbiAgY29uc3QgdHJhdmVsQWxsID0gKGNoaWxkKSA9PiB7XG4gICAgYXJyYXkucHVzaChjaGlsZC5kYXRhKTtcbiAgICBpZiAoY2hpbGQubGVmdCAhPT0gbnVsbCkge1xuICAgICAgdHJhdmVsQWxsKGNoaWxkLmxlZnQpO1xuICAgIH1cbiAgICBpZiAoY2hpbGQucmlnaHQgIT09IG51bGwpIHtcbiAgICAgIHRyYXZlbEFsbChjaGlsZC5yaWdodCk7XG4gICAgfVxuICB9O1xuXG4gIHRyYXZlbEFsbChub2RlKTtcbiAgY29uc3QgYmFsYW5jZWQgPSBidWlsZFRyZWUoYXJyYXkpO1xuICByZXR1cm4gYmFsYW5jZWQ7XG59O1xuXG5leHBvcnQgeyBpc0JhbGFuY2VkLCByZWJhbGFuY2UgfTtcbiIsImNvbnN0IE5vZGUgPSAoZGF0YSwgbGVmdCwgcmlnaHQpID0+ICh7IGRhdGEsIGxlZnQsIHJpZ2h0IH0pO1xuXG5jb25zdCBUcmVlID0gKGFycmF5KSA9PiBidWlsZFRyZWUoYXJyYXkpO1xuY29uc3QgdW5ibGNUcmVlID0gKGFycmF5KSA9PiBidWlsZFVuYmxjVHJlZShhcnJheSk7XG5cbmNvbnN0IHNvcnRBcnJheSA9IChhcnJheSkgPT4ge1xuICBjb25zdCB1bmlxdWUgPSBbXTtcbiAgYXJyYXkuZm9yRWFjaCgobnVtKSA9PiB7XG4gICAgaWYgKCF1bmlxdWUuaW5jbHVkZXMobnVtKSkge1xuICAgICAgdW5pcXVlLnB1c2gobnVtKTtcbiAgICB9XG4gIH0pO1xuICBjb25zdCBzb3J0ZWQgPSB1bmlxdWUuc29ydCgoYSwgYikgPT4gYSAtIGIpO1xuICByZXR1cm4gc29ydGVkO1xufTtcblxuY29uc3QgYnVpbGRUcmVlID0gKGFycmF5KSA9PiB7XG4gIGNvbnN0IHNvcnRlZCA9IHNvcnRBcnJheShhcnJheSk7XG4gIGNvbnN0IHN0YXJ0ID0gMDtcbiAgY29uc3QgZW5kID0gc29ydGVkLmxlbmd0aCAtIDE7XG4gIGNvbnN0IG1pZCA9IE1hdGguZmxvb3IoKHN0YXJ0ICsgZW5kKSAvIDIpO1xuXG4gIGNvbnN0IGxlZnQgPSBbXTtcbiAgY29uc3QgcmlnaHQgPSBbXTtcblxuICBpZiAoc3RhcnQgPiBlbmQpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHNvcnRlZC5mb3JFYWNoKChudW0pID0+IHtcbiAgICBpZiAobnVtIDwgc29ydGVkW21pZF0pIHtcbiAgICAgIGxlZnQucHVzaChudW0pO1xuICAgIH0gZWxzZSBpZiAobnVtID4gc29ydGVkW21pZF0pIHtcbiAgICAgIHJpZ2h0LnB1c2gobnVtKTtcbiAgICB9XG4gIH0pO1xuXG4gIGNvbnN0IHJvb3QgPSBOb2RlKHNvcnRlZFttaWRdLCBidWlsZFRyZWUobGVmdCksIGJ1aWxkVHJlZShyaWdodCkpO1xuICByZXR1cm4gcm9vdDtcbn07XG5cbmNvbnN0IGJ1aWxkVW5ibGNUcmVlID0gKGFycmF5KSA9PiB7XG4gIGlmIChhcnJheS5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGNvbnN0IHNvcnRlZCA9IHNvcnRBcnJheShhcnJheSk7XG5cbiAgY29uc3Qgcm9vdCA9IE5vZGUoc29ydGVkWzBdLCBidWlsZFVuYmxjVHJlZShzb3J0ZWQuc2xpY2UoMSkpLCBudWxsKTtcblxuICByZXR1cm4gcm9vdDtcbn07XG5cbmV4cG9ydCB7IE5vZGUsIFRyZWUsIHNvcnRBcnJheSwgYnVpbGRUcmVlLCB1bmJsY1RyZWUgfTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIGNvbnNpc3RlbnQtcmV0dXJuICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1wYXJhbS1yZWFzc2lnbiAqL1xuLy8gRGVsZXRlLFxuLy8gZGVsZXRlIGxlYWYsIHN0cnVjdHVyZSB3b24ndCBjaGFuZ2Vcbi8vIGRlbGV0ZSBvbmUgY2hpbGQsIHJlbW92ZSBub2RlLCBwb2ludCBwYXJlbnQgdG8gY2hpbGRcbi8vIGRlbGV0ZSB0d28gY2hpbGRyZW4sIGZpbmQgbmV4dCBiaWdnZXN0IChyaWdodCBzdWJ0cmVlKVxuLy8gLy8gbmV4dCBiaWdnZXN0IGhhcyBubyBsZWZ0IHN1YnRyZWVcbi8vIC8vIHJlcGxhY2UgbmV4dCBiaWdnZXN0IHdpdGggZGVsZXRlXG5cbmNvbnN0IGRlbGV0ZU5vZGUgPSAobm9kZSwgbnVtLCBwYXJlbnQsIG5iKSA9PiB7XG4gIC8vIFJldHVybiwgaWYgcmVhY2hlcyBsZWFmIHdpdGggbm8gbWF0Y2hcbiAgaWYgKG51bSAhPT0gbm9kZS5kYXRhICYmIG5vZGUubGVmdCA9PT0gbnVsbCAmJiBub2RlLnJpZ2h0ID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGNvbnNvbGUubG9nKCdObyBtYXRjaCBmb3VuZC4nKTtcbiAgfVxuICAvLyBNYXRjaCBudW0gd2l0aCBub2RlXG4gIGlmIChudW0gIT09IG5vZGUuZGF0YSkge1xuICAgIGlmIChudW0gPCBub2RlLmRhdGEpIHtcbiAgICAgIHBhcmVudCA9IG5vZGU7XG4gICAgICByZXR1cm4gZGVsZXRlTm9kZShub2RlLmxlZnQsIG51bSwgcGFyZW50KTtcbiAgICB9XG4gICAgaWYgKG51bSA+IG5vZGUuZGF0YSkge1xuICAgICAgcGFyZW50ID0gbm9kZTtcbiAgICAgIHJldHVybiBkZWxldGVOb2RlKG5vZGUucmlnaHQsIG51bSwgcGFyZW50KTtcbiAgICB9XG4gIH1cblxuICAvLyBXaGVuIGZvdW5kIG1hdGNoXG4gIGlmIChudW0gPT09IG5vZGUuZGF0YSkge1xuICAgIGlmIChwYXJlbnQgPT09IHVuZGVmaW5lZCAmJiBub2RlLmxlZnQgPT09IG51bGwgJiYgbm9kZS5yaWdodCA9PT0gbnVsbCkge1xuICAgICAgbm9kZS5kYXRhID0gbnVsbDtcbiAgICB9XG4gICAgLy8gLy8gU2V0IG5vZGUgcGFyZW50IGxlZnQvcmlnaHQgbnVsbFxuICAgIGVsc2UgaWYgKG5vZGUubGVmdCA9PT0gbnVsbCAmJiBub2RlLnJpZ2h0ID09PSBudWxsKSB7XG4gICAgICBpZiAocGFyZW50LmxlZnQgIT09IG51bGwgJiYgcGFyZW50LmxlZnQuZGF0YSA9PT0gbm9kZS5kYXRhKSB7XG4gICAgICAgIHBhcmVudC5sZWZ0ID0gbnVsbDtcbiAgICAgIH0gZWxzZSBpZiAocGFyZW50LnJpZ2h0LmRhdGEgPT09IG5vZGUuZGF0YSkge1xuICAgICAgICBwYXJlbnQucmlnaHQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICAvLyAvLyBTZXQgbm9kZSBwYXJlbnQgbGVmdC9yaWdodCB3aXRoIGRlbGV0ZSBub2RlIGNoaWxkcmVuXG4gICAgaWYgKG5vZGUubGVmdCA9PT0gbnVsbCAmJiBub2RlLnJpZ2h0ICE9PSBudWxsKSB7XG4gICAgICBpZiAocGFyZW50ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY29uc3QgdGVtcCA9IG5vZGUucmlnaHQ7XG4gICAgICAgIG5vZGUuZGF0YSA9IHRlbXAuZGF0YTtcbiAgICAgICAgbm9kZS5sZWZ0ID0gdGVtcC5sZWZ0O1xuICAgICAgICBub2RlLnJpZ2h0ID0gdGVtcC5yaWdodDtcbiAgICAgIH0gZWxzZSBpZiAocGFyZW50LmxlZnQuZGF0YSA9PT0gbm9kZS5kYXRhKSB7XG4gICAgICAgIHBhcmVudC5sZWZ0ID0gbm9kZS5yaWdodDtcbiAgICAgIH0gZWxzZSBpZiAocGFyZW50LnJpZ2h0LmRhdGEgPT09IG5vZGUuZGF0YSkge1xuICAgICAgICBwYXJlbnQucmlnaHQgPSBub2RlLnJpZ2h0O1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAobm9kZS5sZWZ0ICE9PSBudWxsICYmIG5vZGUucmlnaHQgPT09IG51bGwpIHtcbiAgICAgIGlmIChwYXJlbnQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjb25zdCB0ZW1wID0gbm9kZS5sZWZ0O1xuICAgICAgICBub2RlLmRhdGEgPSB0ZW1wLmRhdGE7XG4gICAgICAgIG5vZGUubGVmdCA9IHRlbXAubGVmdDtcbiAgICAgICAgbm9kZS5yaWdodCA9IHRlbXAucmlnaHQ7XG4gICAgICB9IGVsc2UgaWYgKHBhcmVudC5sZWZ0LmRhdGEgPT09IG5vZGUuZGF0YSkge1xuICAgICAgICBwYXJlbnQubGVmdCA9IG5vZGUubGVmdDtcbiAgICAgIH0gZWxzZSBpZiAocGFyZW50LnJpZ2h0LmRhdGEgPT09IG5vZGUuZGF0YSkge1xuICAgICAgICBwYXJlbnQucmlnaHQgPSBub2RlLmxlZnQ7XG4gICAgICB9XG4gICAgfVxuICAgIC8vIC8vIFJlY3Vyc2l2ZSBub2RlLnJpZ2h0IHVudGlsIG5vZGUubGVmdCA9PT0gbnVsbFxuICAgIC8vIC8vIFNldCBub2RlIHBhcmVudCBkYXRhIHRvIG5leHQgYmlnZ2VzdFxuICAgIGlmIChub2RlLmxlZnQgIT09IG51bGwgJiYgbm9kZS5yaWdodCAhPT0gbnVsbCkge1xuICAgICAgaWYgKG5iID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcGFyZW50ID0gbnVsbDtcbiAgICAgICAgbmIgPSBub2RlLnJpZ2h0O1xuICAgICAgICByZXR1cm4gZGVsZXRlTm9kZShub2RlLCBudW0sIHBhcmVudCwgbmIpO1xuICAgICAgfVxuICAgICAgaWYgKG5iLmxlZnQgIT09IG51bGwpIHtcbiAgICAgICAgcGFyZW50ID0gbmI7XG4gICAgICAgIG5iID0gbmIubGVmdDtcbiAgICAgICAgcmV0dXJuIGRlbGV0ZU5vZGUobm9kZSwgbnVtLCBwYXJlbnQsIG5iKTtcbiAgICAgIH1cbiAgICAgIGlmIChuYi5sZWZ0ID09PSBudWxsKSB7XG4gICAgICAgIG5vZGUuZGF0YSA9IG5iLmRhdGE7XG4gICAgICAgIGlmIChwYXJlbnQgIT09IG51bGwpIHtcbiAgICAgICAgICBwYXJlbnQubGVmdCA9IG51bGw7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbm9kZS5yaWdodCA9IG5iLnJpZ2h0O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBkZWxldGVOb2RlO1xuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tdXNlbGVzcy1yZXR1cm4gKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXBhcmFtLXJlYXNzaWduICovXG4vKiBlc2xpbnQtZGlzYWJsZSBjb25zaXN0ZW50LXJldHVybiAqL1xuY29uc3QgdGVzdCA9IChub2RlKSA9PiB7XG4gIGNvbnNvbGUubG9nKG5vZGUuZGF0YSk7XG59O1xuXG5jb25zdCBpbm9yZGVyID0gKG5vZGUsIGNiLCB2YWx1ZXMgPSBbXSkgPT4ge1xuICBpZiAobm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybjtcbiAgfVxuICBpbm9yZGVyKG5vZGUucmlnaHQsIGNiLCB2YWx1ZXMpO1xuICBpZiAoY2IgPT09IHVuZGVmaW5lZCkge1xuICAgIHZhbHVlcy51bnNoaWZ0KG5vZGUuZGF0YSk7XG4gIH0gZWxzZSB7XG4gICAgY2Iobm9kZSk7XG4gIH1cbiAgaW5vcmRlcihub2RlLmxlZnQsIGNiLCB2YWx1ZXMpO1xuICBpZiAoY2IgPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiB2YWx1ZXM7XG4gIH1cbn07XG5cbmZ1bmN0aW9uIHByZW9yZGVyKG5vZGUsIGNiLCB2YWx1ZXMgPSBbXSkge1xuICBpZiAobm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybjtcbiAgfVxuICBpZiAoY2IgPT09IHVuZGVmaW5lZCkge1xuICAgIHZhbHVlcy5wdXNoKG5vZGUuZGF0YSk7XG4gIH0gZWxzZSB7XG4gICAgY2Iobm9kZSk7XG4gIH1cbiAgcHJlb3JkZXIobm9kZS5sZWZ0LCBjYiwgdmFsdWVzKTtcbiAgcHJlb3JkZXIobm9kZS5yaWdodCwgY2IsIHZhbHVlcyk7XG4gIGlmIChjYiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIHZhbHVlcztcbiAgfVxufVxuXG5jb25zdCBwb3N0b3JkZXIgPSAobm9kZSwgY2IsIHZhbHVlcyA9IFtdKSA9PiB7XG4gIGlmIChub2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIHBvc3RvcmRlcihub2RlLmxlZnQsIGNiLCB2YWx1ZXMpO1xuICBwb3N0b3JkZXIobm9kZS5yaWdodCwgY2IsIHZhbHVlcyk7XG4gIGlmIChjYiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgdmFsdWVzLnB1c2gobm9kZS5kYXRhKTtcbiAgfSBlbHNlIHtcbiAgICBjYihub2RlKTtcbiAgfVxuICBpZiAoY2IgPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiB2YWx1ZXM7XG4gIH1cbn07XG5cbmV4cG9ydCB7IGlub3JkZXIsIHByZW9yZGVyLCBwb3N0b3JkZXIsIHRlc3QgfTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIGNvbnNpc3RlbnQtcmV0dXJuICovXG5jb25zdCBmaW5kID0gKG5vZGUsIG51bSkgPT4ge1xuICAvLyBSZXR1cm4sIGlmIHJlYWNoZXMgbGVhZiB3aXRoIG5vIG1hdGNoXG4gIGlmIChudW0gIT09IG5vZGUuZGF0YSAmJiBub2RlLmxlZnQgPT09IG51bGwgJiYgbm9kZS5yaWdodCA9PT0gbnVsbCkge1xuICAgIHJldHVybiAnTm8gbWF0Y2ggZm91bmQuJztcbiAgfVxuICAvLyBNYXRjaCBudW0gd2l0aCBub2RlXG4gIGlmIChudW0gIT09IG5vZGUuZGF0YSkge1xuICAgIGlmIChudW0gPCBub2RlLmRhdGEpIHtcbiAgICAgIHJldHVybiBmaW5kKG5vZGUubGVmdCwgbnVtKTtcbiAgICB9XG4gICAgaWYgKG51bSA+IG5vZGUuZGF0YSkge1xuICAgICAgcmV0dXJuIGZpbmQobm9kZS5yaWdodCwgbnVtKTtcbiAgICB9XG4gIH1cblxuICAvLyBXaGVuIGZvdW5kIG1hdGNoXG4gIGlmIChudW0gPT09IG5vZGUuZGF0YSkge1xuICAgIHJldHVybiBub2RlO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmaW5kO1xuIiwiLyogZXNsaW50LWRpc2FibGUgY29uc2lzdGVudC1yZXR1cm4gKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXBhcmFtLXJlYXNzaWduICovXG5pbXBvcnQgZmluZCBmcm9tICcuL2ZpbmQnO1xuXG5jb25zdCBoZWlnaHQgPSAobm9kZSwgdmFsdWUpID0+IHtcbiAgY29uc3QgdGFyZ2V0ID0gZmluZChub2RlLCB2YWx1ZSk7XG4gIGNvbnN0IHJlc3VsdCA9IFtdO1xuXG4gIGxldCBjb3VudDEgPSAxO1xuICBsZXQgY291bnQyID0gMTtcbiAgbGV0IGNvdW50MyA9IDE7XG4gIGxldCBjb3VudDQgPSAxO1xuXG4gIGNvbnN0IHRyYXZlbExlZnQgPSAoY2hpbGQpID0+IHtcbiAgICBpZiAoY2hpbGQubGVmdCAhPT0gbnVsbCkge1xuICAgICAgY291bnQxICs9IDE7XG4gICAgICB0cmF2ZWxMZWZ0KGNoaWxkLmxlZnQpO1xuICAgIH1cbiAgICBpZiAoY2hpbGQucmlnaHQgIT09IG51bGwpIHtcbiAgICAgIGNvdW50MiArPSAxO1xuICAgICAgdHJhdmVsTGVmdChjaGlsZC5yaWdodCk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHRyYXZlbFJpZ2h0ID0gKGNoaWxkKSA9PiB7XG4gICAgaWYgKGNoaWxkLmxlZnQgIT09IG51bGwpIHtcbiAgICAgIGNvdW50MyArPSAxO1xuICAgICAgdHJhdmVsUmlnaHQoY2hpbGQubGVmdCk7XG4gICAgfVxuICAgIGlmIChjaGlsZC5yaWdodCAhPT0gbnVsbCkge1xuICAgICAgY291bnQ0ICs9IDE7XG4gICAgICB0cmF2ZWxSaWdodChjaGlsZC5yaWdodCk7XG4gICAgfVxuICB9O1xuXG4gIGlmICh0YXJnZXQubGVmdCAhPT0gbnVsbCkge1xuICAgIHRyYXZlbExlZnQodGFyZ2V0LmxlZnQpO1xuICB9IGVsc2Uge1xuICAgIGNvdW50MSA9IDA7XG4gICAgY291bnQyID0gMDtcbiAgfVxuXG4gIGlmICh0YXJnZXQucmlnaHQgIT09IG51bGwpIHtcbiAgICB0cmF2ZWxSaWdodCh0YXJnZXQucmlnaHQpO1xuICB9IGVsc2Uge1xuICAgIGNvdW50MyA9IDA7XG4gICAgY291bnQ0ID0gMDtcbiAgfVxuXG4gIHJlc3VsdC5wdXNoKGNvdW50MSwgY291bnQyLCBjb3VudDMsIGNvdW50NCk7XG4gIHJlc3VsdC5zb3J0KChhLCBiKSA9PiBiIC0gYSk7XG4gIGNvbnNvbGUubG9nKHJlc3VsdCk7XG4gIHJldHVybiByZXN1bHRbMF07XG59O1xuXG5jb25zdCBkZXB0aCA9IChub2RlLCB2YWx1ZSwgY291bnQgPSAwKSA9PiB7XG4gIGlmICh2YWx1ZSA9PT0gbm9kZS5kYXRhKSB7XG4gICAgcmV0dXJuIGNvdW50O1xuICB9XG5cbiAgaWYgKHZhbHVlID4gbm9kZS5kYXRhKSB7XG4gICAgcmV0dXJuIGRlcHRoKG5vZGUucmlnaHQsIHZhbHVlLCBjb3VudCArIDEpO1xuICB9XG5cbiAgaWYgKHZhbHVlIDwgbm9kZS5kYXRhKSB7XG4gICAgcmV0dXJuIGRlcHRoKG5vZGUubGVmdCwgdmFsdWUsIGNvdW50ICsgMSk7XG4gIH1cbn07XG5cbmV4cG9ydCB7IGhlaWdodCwgZGVwdGggfTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIGNvbnNpc3RlbnQtcmV0dXJuICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1wYXJhbS1yZWFzc2lnbiAqL1xuLy8gSW5zZXJ0LCBvbmx5IGFkZCBhcyBhIGxlYWYsIG5vIGR1cGxpY2F0aW9uXG4vLyBDb21wYXJlIHRvIGVhY2ggbm9kZSwgdW50aWwgcmVhY2hlcyBhIGxlYWZcbmltcG9ydCB7IE5vZGUgfSBmcm9tICcuL2J1aWxkLXRyZWUnO1xuXG5jb25zdCBpbnNlcnQgPSAobm9kZSwgbnVtKSA9PiB7XG4gIC8vIENvbXBhcmUgbnVtIHdpdGggcm9vdFxuICAvLyBSZXR1cm4gaWYgbnVtIGlzIHNhbWUgYXMgcm9vdFxuICBpZiAobnVtID09PSBub2RlLmRhdGEpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBVbnRpbCByZWFjaGVzIG5vZGUgd2l0aCBubyBsZWZ0L3JpZ2h0IHN1YnRyZWVcbiAgaWYgKG5vZGUubGVmdCA9PT0gbnVsbCkge1xuICAgIG5vZGUubGVmdCA9IE5vZGUobnVtLCBudWxsLCBudWxsKTtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKG5vZGUucmlnaHQgPT09IG51bGwpIHtcbiAgICBub2RlLnJpZ2h0ID0gTm9kZShudW0sIG51bGwsIG51bGwpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vIFJlY3Vyc2l2ZSBjYWxsIGxlZnQgbm9kZSBpZiBzbWFsbGVyIHRoYW4gcm9vdFxuICBpZiAobnVtIDwgbm9kZS5kYXRhKSB7XG4gICAgcmV0dXJuIGluc2VydChub2RlLmxlZnQsIG51bSk7XG4gIH1cbiAgLy8gUmVjdXJzaXZlIGNhbGwgcmlnaHQgbm9kZSBpZiBiaWdnZXIgdGhhbiByb290XG4gIGlmIChudW0gPiBub2RlLmRhdGEpIHtcbiAgICByZXR1cm4gaW5zZXJ0KG5vZGUucmlnaHQsIG51bSk7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGluc2VydDtcbiIsIi8qIGVzbGludC1kaXNhYmxlIGNvbnNpc3RlbnQtcmV0dXJuICovXG5jb25zdCBwcmludCA9IChub2RlKSA9PiB7XG4gIGNvbnNvbGUubG9nKG5vZGUpO1xufTtcblxuY29uc3QgbGV2ZWxPcmRlciA9IChub2RlLCBjYiwgcXVldWUgPSBbXSwgdmFsdWVzID0gW10pID0+IHtcbiAgaWYgKG5vZGUgPT09IHVuZGVmaW5lZCAmJiBjYiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIHZhbHVlcztcbiAgfVxuXG4gIGlmIChub2RlID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAocXVldWUubGVuZ3RoID09PSAwKSB7XG4gICAgcXVldWUucHVzaChub2RlKTtcbiAgfVxuXG4gIC8vIFZpc2l0IG5vZGUncyB2YWx1ZVxuICBpZiAoY2IgPT09IHVuZGVmaW5lZCkge1xuICAgIHZhbHVlcy5wdXNoKG5vZGUuZGF0YSk7XG4gIH0gZWxzZSB7XG4gICAgY2Iobm9kZSk7XG4gIH1cblxuICAvLyBQdXQgbm9kZSdzIGNoaWxkIGluIHF1ZXVlXG4gIGlmIChub2RlLmxlZnQgIT09IG51bGwpIHtcbiAgICBxdWV1ZS5wdXNoKG5vZGUubGVmdCk7XG4gIH1cblxuICBpZiAobm9kZS5yaWdodCAhPT0gbnVsbCkge1xuICAgIHF1ZXVlLnB1c2gobm9kZS5yaWdodCk7XG4gIH1cblxuICAvLyBSZWN1cnNpb24gdW50aWwgcXVldWUgZW1wdHlcbiAgaWYgKHF1ZXVlLmxlbmd0aCA+IDApIHtcbiAgICBxdWV1ZS5zaGlmdCgpO1xuICAgIHJldHVybiBsZXZlbE9yZGVyKHF1ZXVlWzBdLCBjYiwgcXVldWUsIHZhbHVlcyk7XG4gIH1cblxuICAvLyBJdGVyYXRlIHVudGlsIHF1ZXVlIGVtcHR5XG4gIC8vIHdoaWxlIChxdWV1ZS5sZW5ndGggPiAwKSB7XG4gIC8vICAgaWYgKHF1ZXVlWzBdLmxlZnQgIT09IG51bGwpIHtcbiAgLy8gICAgIHF1ZXVlLnB1c2gocXVldWVbMF0ubGVmdCk7XG4gIC8vICAgfVxuXG4gIC8vICAgaWYgKHF1ZXVlWzBdLnJpZ2h0ICE9PSBudWxsKSB7XG4gIC8vICAgICBxdWV1ZS5wdXNoKHF1ZXVlWzBdLnJpZ2h0KTtcbiAgLy8gICB9XG5cbiAgLy8gICBpZiAoY2IgPT09IHVuZGVmaW5lZCkge1xuICAvLyAgICAgdmFsdWVzLnB1c2gocXVldWVbMF0uZGF0YSk7XG4gIC8vICAgfSBlbHNlIHtcbiAgLy8gICAgIGNiKHF1ZXVlWzBdKTtcbiAgLy8gICB9XG4gIC8vICAgcXVldWUuc2hpZnQoKTtcbiAgLy8gfVxuICAvLyByZXR1cm4gdmFsdWVzO1xufTtcblxuZXhwb3J0IHsgbGV2ZWxPcmRlciwgcHJpbnQgfTtcbiIsImNvbnN0IHByZXR0eVByaW50ID0gKG5vZGUsIHByZWZpeCA9ICcnLCBpc0xlZnQgPSB0cnVlKSA9PiB7XG4gIGlmIChub2RlLnJpZ2h0ICE9PSBudWxsKSB7XG4gICAgcHJldHR5UHJpbnQobm9kZS5yaWdodCwgYCR7cHJlZml4fSR7aXNMZWZ0ID8gJ+KUgiAgICcgOiAnICAgICd9YCwgZmFsc2UpO1xuICB9XG4gIGNvbnNvbGUubG9nKGAke3ByZWZpeH0ke2lzTGVmdCA/ICfilJTilIDilIAgJyA6ICfilIzilIDilIAgJ30ke25vZGUuZGF0YX1gKTtcbiAgaWYgKG5vZGUubGVmdCAhPT0gbnVsbCkge1xuICAgIHByZXR0eVByaW50KG5vZGUubGVmdCwgYCR7cHJlZml4fSR7aXNMZWZ0ID8gJyAgICAnIDogJ+KUgiAgICd9YCwgdHJ1ZSk7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHByZXR0eVByaW50O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiLyogZXNsaW50LWRpc2FibGUgY29uc2lzdGVudC1yZXR1cm4gKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXBhcmFtLXJlYXNzaWduICovXG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7IE5vZGUsIFRyZWUsIHNvcnRBcnJheSwgdW5ibGNUcmVlIH0gZnJvbSAnLi9idWlsZC10cmVlJztcbmltcG9ydCBwcmV0dHlQcmludCBmcm9tICcuL3ByZXR0eS1wcmludCc7XG5pbXBvcnQgaW5zZXJ0IGZyb20gJy4vaW5zZXJ0JztcbmltcG9ydCBkZWxldGVOb2RlIGZyb20gJy4vZGVsZXRlJztcbmltcG9ydCBmaW5kIGZyb20gJy4vZmluZCc7XG5pbXBvcnQgeyBsZXZlbE9yZGVyLCBwcmludCB9IGZyb20gJy4vbGV2ZWwtb3JkZXInO1xuaW1wb3J0IHsgaW5vcmRlciwgcHJlb3JkZXIsIHBvc3RvcmRlciwgdGVzdCB9IGZyb20gJy4vZGVwdGgtZmlyc3QnO1xuaW1wb3J0IHsgaGVpZ2h0LCBkZXB0aCB9IGZyb20gJy4vaGVpZ2h0LWRlcHRoJztcbmltcG9ydCB7IGlzQmFsYW5jZWQsIHJlYmFsYW5jZSB9IGZyb20gJy4vYmFsYW5jZWQnO1xuXG5jb25zdCBkaXUgPSBUcmVlKFsxNiwgMiwgNCwgMTgsIDI3LCAzLCAxOSwgMzIsIDQ4XSk7XG5jb25zdCBvbjkgPSB1bmJsY1RyZWUoWzE2LCAyLCA0LCAxOCwgMjcsIDMsIDE5LCAzMiwgNDhdKTtcblxuY29uc29sZS5sb2coc29ydEFycmF5KFsxNiwgMiwgNCwgMTgsIDI3LCAzLCAxOSwgMzIsIDQ4XSkpO1xuLy8gaW5zZXJ0KGRpdSwgNSk7XG4vLyBkZWxldGVOb2RlKGRpdSwgMTYpO1xuLy8gZGVsZXRlTm9kZShkaXUsIDQpO1xuLy8gZGVsZXRlTm9kZShkaXUsIDIpO1xuLy8gZGVsZXRlTm9kZShkaXUsIDMpO1xuLy8gZGVsZXRlTm9kZShkaXUsIDQ4KTtcbi8vIGRlbGV0ZU5vZGUoZGl1LCAzMik7XG4vLyBkZWxldGVOb2RlKGRpdSwgMTkpO1xuLy8gZGVsZXRlTm9kZShkaXUsIDI3KTtcbi8vIGRlbGV0ZU5vZGUoZGl1LCAxOCk7XG4vLyBmaW5kKGRpdSwgMTkpO1xuLy8gY29uc29sZS5sb2cobGV2ZWxPcmRlcihkaXUpKTtcbi8vIGNvbnNvbGUubG9nKGlub3JkZXIoZGl1KSk7XG4vLyBjb25zb2xlLmxvZyhwcmVvcmRlcihkaXUpKTtcbi8vIGNvbnNvbGUubG9nKHBvc3RvcmRlcihkaXUpKTtcbi8vIGNvbnNvbGUubG9nKGhlaWdodChkaXUsIDE4KSk7XG4vLyBjb25zb2xlLmxvZyhkZXB0aChkaXUsIDE2KSk7XG4vLyBjb25zb2xlLmxvZyhpc0JhbGFuY2VkKGRpdSkpO1xuY29uc29sZS5sb2coaXNCYWxhbmNlZChvbjkpKTtcbmNvbnNvbGUubG9nKHJlYmFsYW5jZShvbjkpKTtcbnByZXR0eVByaW50KHJlYmFsYW5jZShvbjkpKTtcbi8vIGNvbnNvbGUubG9nKGRpdSk7XG5jb25zb2xlLmxvZyhvbjkpO1xuLy8gcHJldHR5UHJpbnQoZGl1KTtcbnByZXR0eVByaW50KG9uOSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=