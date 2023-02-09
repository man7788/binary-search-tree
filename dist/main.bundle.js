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
  console.log(left, right);

  if (left[0] > right[0]) {
    if (left[0] - right[0] <= 1) return true;
  }

  if (right[0] > left[0]) {
    if (right[0] - left[0] <= 1) return true;
  }

  if (left[0] === right[0]) {
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


/***/ }),

/***/ "./src/random-num.js":
/*!***************************!*\
  !*** ./src/random-num.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getRandomList": () => (/* binding */ getRandomList)
/* harmony export */ });
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-param-reassign */
const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const getRandomList = (min, max, length) => {
  const list = [];
  for (let i = 0; i < length; i++) {
    const num = getRandomInt(min, max);
    list.push(num);
  }
  return list;
};



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
/* harmony import */ var _random_num__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./random-num */ "./src/random-num.js");
/* eslint-disable consistent-return */
/* eslint-disable no-param-reassign */












// Driver Script
// Create a binary search tree from an array of random numbers.
const randomList = (0,_random_num__WEBPACK_IMPORTED_MODULE_10__.getRandomList)(1, 100, 10);
const bst = (0,_build_tree__WEBPACK_IMPORTED_MODULE_1__.Tree)(randomList);
console.log(randomList);
console.log(bst);
(0,_pretty_print__WEBPACK_IMPORTED_MODULE_2__["default"])(bst);
// Confirm that the tree is balanced by calling isBalanced
console.log((0,_balanced__WEBPACK_IMPORTED_MODULE_9__.isBalanced)(bst));
// Print out all elements in level, pre, post, and in order
console.log((0,_level_order__WEBPACK_IMPORTED_MODULE_6__.levelOrder)(bst));
console.log((0,_depth_first__WEBPACK_IMPORTED_MODULE_7__.preorder)(bst));
console.log((0,_depth_first__WEBPACK_IMPORTED_MODULE_7__.postorder)(bst));
console.log((0,_depth_first__WEBPACK_IMPORTED_MODULE_7__.inorder)(bst));
// Unbalance the tree by adding several numbers > 100
(0,_insert__WEBPACK_IMPORTED_MODULE_3__["default"])(bst, 123);
(0,_insert__WEBPACK_IMPORTED_MODULE_3__["default"])(bst, 456);
(0,_insert__WEBPACK_IMPORTED_MODULE_3__["default"])(bst, 789);
(0,_insert__WEBPACK_IMPORTED_MODULE_3__["default"])(bst, 999);
console.log(bst);
(0,_pretty_print__WEBPACK_IMPORTED_MODULE_2__["default"])(bst);
// Confirm that the tree is unbalanced by calling isBalanced
console.log((0,_balanced__WEBPACK_IMPORTED_MODULE_9__.isBalanced)(bst));
// Balance the tree by calling rebalance
const rebst = (0,_balanced__WEBPACK_IMPORTED_MODULE_9__.rebalance)(bst);
// Confirm that the tree is balanced by calling isBalanced
console.log((0,_balanced__WEBPACK_IMPORTED_MODULE_9__.isBalanced)(rebst));
console.log(rebst);
(0,_pretty_print__WEBPACK_IMPORTED_MODULE_2__["default"])(rebst);
// Print out all elements in level, pre, post, and in order
console.log((0,_level_order__WEBPACK_IMPORTED_MODULE_6__.levelOrder)(rebst));
console.log((0,_depth_first__WEBPACK_IMPORTED_MODULE_7__.preorder)(rebst));
console.log((0,_depth_first__WEBPACK_IMPORTED_MODULE_7__.postorder)(rebst));
console.log((0,_depth_first__WEBPACK_IMPORTED_MODULE_7__.inorder)(rebst));
// Driver Script

// const diu = Tree([16, 2, 4, 18, 27, 3, 19, 32, 48]);
// const on9 = unblcTree([16, 2, 4, 18, 27, 3, 19, 32, 48]);
// console.log(sortArray([16, 2, 4, 18, 27, 3, 19, 32, 48]));
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
// console.log(isBalanced(on9));
// console.log(rebalance(on9));
// prettyPrint(rebalance(on9));
// console.log(diu);
// console.log(on9);
// prettyPrint(diu);
// prettyPrint(on9);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxtQkFBbUIsc0RBQVM7QUFDNUI7QUFDQTs7QUFFaUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0RmpDLHVDQUF1QyxtQkFBbUI7O0FBRTFEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFdUQ7Ozs7Ozs7Ozs7Ozs7OztBQ3JEdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNxQjtBQUMyQztBQUN2QjtBQUNYO0FBQ0k7QUFDUjtBQUN3QjtBQUNpQjtBQUNwQjtBQUNJO0FBQ047O0FBRTdDO0FBQ0E7QUFDQSxtQkFBbUIsMkRBQWE7QUFDaEMsWUFBWSxpREFBSTtBQUNoQjtBQUNBO0FBQ0EseURBQVc7QUFDWDtBQUNBLFlBQVkscURBQVU7QUFDdEI7QUFDQSxZQUFZLHdEQUFVO0FBQ3RCLFlBQVksc0RBQVE7QUFDcEIsWUFBWSx1REFBUztBQUNyQixZQUFZLHFEQUFPO0FBQ25CO0FBQ0EsbURBQU07QUFDTixtREFBTTtBQUNOLG1EQUFNO0FBQ04sbURBQU07QUFDTjtBQUNBLHlEQUFXO0FBQ1g7QUFDQSxZQUFZLHFEQUFVO0FBQ3RCO0FBQ0EsY0FBYyxvREFBUztBQUN2QjtBQUNBLFlBQVkscURBQVU7QUFDdEI7QUFDQSx5REFBVztBQUNYO0FBQ0EsWUFBWSx3REFBVTtBQUN0QixZQUFZLHNEQUFRO0FBQ3BCLFlBQVksdURBQVM7QUFDckIsWUFBWSxxREFBTztBQUNuQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL25wbS1zZXR1cC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vbnBtLXNldHVwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9ucG0tc2V0dXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9ucG0tc2V0dXAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vbnBtLXNldHVwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL25wbS1zZXR1cC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vbnBtLXNldHVwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL25wbS1zZXR1cC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9ucG0tc2V0dXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9ucG0tc2V0dXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9ucG0tc2V0dXAvLi9zcmMvYmFsYW5jZWQuanMiLCJ3ZWJwYWNrOi8vbnBtLXNldHVwLy4vc3JjL2J1aWxkLXRyZWUuanMiLCJ3ZWJwYWNrOi8vbnBtLXNldHVwLy4vc3JjL2RlbGV0ZS5qcyIsIndlYnBhY2s6Ly9ucG0tc2V0dXAvLi9zcmMvZGVwdGgtZmlyc3QuanMiLCJ3ZWJwYWNrOi8vbnBtLXNldHVwLy4vc3JjL2ZpbmQuanMiLCJ3ZWJwYWNrOi8vbnBtLXNldHVwLy4vc3JjL2hlaWdodC1kZXB0aC5qcyIsIndlYnBhY2s6Ly9ucG0tc2V0dXAvLi9zcmMvaW5zZXJ0LmpzIiwid2VicGFjazovL25wbS1zZXR1cC8uL3NyYy9sZXZlbC1vcmRlci5qcyIsIndlYnBhY2s6Ly9ucG0tc2V0dXAvLi9zcmMvcHJldHR5LXByaW50LmpzIiwid2VicGFjazovL25wbS1zZXR1cC8uL3NyYy9yYW5kb20tbnVtLmpzIiwid2VicGFjazovL25wbS1zZXR1cC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9ucG0tc2V0dXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vbnBtLXNldHVwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9ucG0tc2V0dXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9ucG0tc2V0dXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9ucG0tc2V0dXAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL25wbS1zZXR1cC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJvZHkge2JhY2tncm91bmQ6IGJsYWNrO30gXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxNQUFNLGlCQUFpQixDQUFDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHkge2JhY2tncm91bmQ6IGJsYWNrO30gXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgYnVpbGRUcmVlIH0gZnJvbSAnLi9idWlsZC10cmVlJztcblxuY29uc3QgaXNCYWxhbmNlZCA9IChub2RlKSA9PiB7XG4gIGNvbnN0IGxlZnQgPSBbXTtcbiAgY29uc3QgcmlnaHQgPSBbXTtcblxuICBsZXQgY291bnQxID0gMTtcbiAgbGV0IGNvdW50MiA9IDE7XG4gIGxldCBjb3VudDMgPSAxO1xuICBsZXQgY291bnQ0ID0gMTtcblxuICBjb25zdCB0cmF2ZWxMZWZ0ID0gKGNoaWxkKSA9PiB7XG4gICAgaWYgKGNoaWxkLmxlZnQgIT09IG51bGwpIHtcbiAgICAgIGNvdW50MSArPSAxO1xuICAgICAgdHJhdmVsTGVmdChjaGlsZC5sZWZ0KTtcbiAgICB9XG4gICAgaWYgKGNoaWxkLnJpZ2h0ICE9PSBudWxsKSB7XG4gICAgICBjb3VudDIgKz0gMTtcbiAgICAgIHRyYXZlbExlZnQoY2hpbGQucmlnaHQpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCB0cmF2ZWxSaWdodCA9IChjaGlsZCkgPT4ge1xuICAgIGlmIChjaGlsZC5sZWZ0ICE9PSBudWxsKSB7XG4gICAgICBjb3VudDMgKz0gMTtcbiAgICAgIHRyYXZlbFJpZ2h0KGNoaWxkLmxlZnQpO1xuICAgIH1cbiAgICBpZiAoY2hpbGQucmlnaHQgIT09IG51bGwpIHtcbiAgICAgIGNvdW50NCArPSAxO1xuICAgICAgdHJhdmVsUmlnaHQoY2hpbGQucmlnaHQpO1xuICAgIH1cbiAgfTtcblxuICBpZiAobm9kZS5sZWZ0ICE9PSBudWxsKSB7XG4gICAgdHJhdmVsTGVmdChub2RlLmxlZnQpO1xuICB9IGVsc2Uge1xuICAgIGNvdW50MSA9IDA7XG4gICAgY291bnQyID0gMDtcbiAgfVxuXG4gIGlmIChub2RlLnJpZ2h0ICE9PSBudWxsKSB7XG4gICAgdHJhdmVsUmlnaHQobm9kZS5yaWdodCk7XG4gIH0gZWxzZSB7XG4gICAgY291bnQzID0gMDtcbiAgICBjb3VudDQgPSAwO1xuICB9XG5cbiAgbGVmdC5wdXNoKGNvdW50MSwgY291bnQyKTtcbiAgcmlnaHQucHVzaChjb3VudDMsIGNvdW50NCk7XG4gIGxlZnQuc29ydCgoYSwgYikgPT4gYiAtIGEpO1xuICByaWdodC5zb3J0KChhLCBiKSA9PiBiIC0gYSk7XG4gIGNvbnNvbGUubG9nKGxlZnQsIHJpZ2h0KTtcblxuICBpZiAobGVmdFswXSA+IHJpZ2h0WzBdKSB7XG4gICAgaWYgKGxlZnRbMF0gLSByaWdodFswXSA8PSAxKSByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGlmIChyaWdodFswXSA+IGxlZnRbMF0pIHtcbiAgICBpZiAocmlnaHRbMF0gLSBsZWZ0WzBdIDw9IDEpIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaWYgKGxlZnRbMF0gPT09IHJpZ2h0WzBdKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59O1xuXG5jb25zdCByZWJhbGFuY2UgPSAobm9kZSkgPT4ge1xuICBjb25zdCBhcnJheSA9IFtdO1xuXG4gIGNvbnN0IHRyYXZlbEFsbCA9IChjaGlsZCkgPT4ge1xuICAgIGFycmF5LnB1c2goY2hpbGQuZGF0YSk7XG4gICAgaWYgKGNoaWxkLmxlZnQgIT09IG51bGwpIHtcbiAgICAgIHRyYXZlbEFsbChjaGlsZC5sZWZ0KTtcbiAgICB9XG4gICAgaWYgKGNoaWxkLnJpZ2h0ICE9PSBudWxsKSB7XG4gICAgICB0cmF2ZWxBbGwoY2hpbGQucmlnaHQpO1xuICAgIH1cbiAgfTtcblxuICB0cmF2ZWxBbGwobm9kZSk7XG4gIGNvbnN0IGJhbGFuY2VkID0gYnVpbGRUcmVlKGFycmF5KTtcbiAgcmV0dXJuIGJhbGFuY2VkO1xufTtcblxuZXhwb3J0IHsgaXNCYWxhbmNlZCwgcmViYWxhbmNlIH07XG4iLCJjb25zdCBOb2RlID0gKGRhdGEsIGxlZnQsIHJpZ2h0KSA9PiAoeyBkYXRhLCBsZWZ0LCByaWdodCB9KTtcblxuY29uc3QgVHJlZSA9IChhcnJheSkgPT4gYnVpbGRUcmVlKGFycmF5KTtcbmNvbnN0IHVuYmxjVHJlZSA9IChhcnJheSkgPT4gYnVpbGRVbmJsY1RyZWUoYXJyYXkpO1xuXG5jb25zdCBzb3J0QXJyYXkgPSAoYXJyYXkpID0+IHtcbiAgY29uc3QgdW5pcXVlID0gW107XG4gIGFycmF5LmZvckVhY2goKG51bSkgPT4ge1xuICAgIGlmICghdW5pcXVlLmluY2x1ZGVzKG51bSkpIHtcbiAgICAgIHVuaXF1ZS5wdXNoKG51bSk7XG4gICAgfVxuICB9KTtcbiAgY29uc3Qgc29ydGVkID0gdW5pcXVlLnNvcnQoKGEsIGIpID0+IGEgLSBiKTtcbiAgcmV0dXJuIHNvcnRlZDtcbn07XG5cbmNvbnN0IGJ1aWxkVHJlZSA9IChhcnJheSkgPT4ge1xuICBjb25zdCBzb3J0ZWQgPSBzb3J0QXJyYXkoYXJyYXkpO1xuICBjb25zdCBzdGFydCA9IDA7XG4gIGNvbnN0IGVuZCA9IHNvcnRlZC5sZW5ndGggLSAxO1xuICBjb25zdCBtaWQgPSBNYXRoLmZsb29yKChzdGFydCArIGVuZCkgLyAyKTtcblxuICBjb25zdCBsZWZ0ID0gW107XG4gIGNvbnN0IHJpZ2h0ID0gW107XG5cbiAgaWYgKHN0YXJ0ID4gZW5kKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBzb3J0ZWQuZm9yRWFjaCgobnVtKSA9PiB7XG4gICAgaWYgKG51bSA8IHNvcnRlZFttaWRdKSB7XG4gICAgICBsZWZ0LnB1c2gobnVtKTtcbiAgICB9IGVsc2UgaWYgKG51bSA+IHNvcnRlZFttaWRdKSB7XG4gICAgICByaWdodC5wdXNoKG51bSk7XG4gICAgfVxuICB9KTtcblxuICBjb25zdCByb290ID0gTm9kZShzb3J0ZWRbbWlkXSwgYnVpbGRUcmVlKGxlZnQpLCBidWlsZFRyZWUocmlnaHQpKTtcbiAgcmV0dXJuIHJvb3Q7XG59O1xuXG5jb25zdCBidWlsZFVuYmxjVHJlZSA9IChhcnJheSkgPT4ge1xuICBpZiAoYXJyYXkubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBjb25zdCBzb3J0ZWQgPSBzb3J0QXJyYXkoYXJyYXkpO1xuXG4gIGNvbnN0IHJvb3QgPSBOb2RlKHNvcnRlZFswXSwgYnVpbGRVbmJsY1RyZWUoc29ydGVkLnNsaWNlKDEpKSwgbnVsbCk7XG5cbiAgcmV0dXJuIHJvb3Q7XG59O1xuXG5leHBvcnQgeyBOb2RlLCBUcmVlLCBzb3J0QXJyYXksIGJ1aWxkVHJlZSwgdW5ibGNUcmVlIH07XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBjb25zaXN0ZW50LXJldHVybiAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tcGFyYW0tcmVhc3NpZ24gKi9cbi8vIERlbGV0ZSxcbi8vIGRlbGV0ZSBsZWFmLCBzdHJ1Y3R1cmUgd29uJ3QgY2hhbmdlXG4vLyBkZWxldGUgb25lIGNoaWxkLCByZW1vdmUgbm9kZSwgcG9pbnQgcGFyZW50IHRvIGNoaWxkXG4vLyBkZWxldGUgdHdvIGNoaWxkcmVuLCBmaW5kIG5leHQgYmlnZ2VzdCAocmlnaHQgc3VidHJlZSlcbi8vIC8vIG5leHQgYmlnZ2VzdCBoYXMgbm8gbGVmdCBzdWJ0cmVlXG4vLyAvLyByZXBsYWNlIG5leHQgYmlnZ2VzdCB3aXRoIGRlbGV0ZVxuXG5jb25zdCBkZWxldGVOb2RlID0gKG5vZGUsIG51bSwgcGFyZW50LCBuYikgPT4ge1xuICAvLyBSZXR1cm4sIGlmIHJlYWNoZXMgbGVhZiB3aXRoIG5vIG1hdGNoXG4gIGlmIChudW0gIT09IG5vZGUuZGF0YSAmJiBub2RlLmxlZnQgPT09IG51bGwgJiYgbm9kZS5yaWdodCA9PT0gbnVsbCkge1xuICAgIHJldHVybiBjb25zb2xlLmxvZygnTm8gbWF0Y2ggZm91bmQuJyk7XG4gIH1cbiAgLy8gTWF0Y2ggbnVtIHdpdGggbm9kZVxuICBpZiAobnVtICE9PSBub2RlLmRhdGEpIHtcbiAgICBpZiAobnVtIDwgbm9kZS5kYXRhKSB7XG4gICAgICBwYXJlbnQgPSBub2RlO1xuICAgICAgcmV0dXJuIGRlbGV0ZU5vZGUobm9kZS5sZWZ0LCBudW0sIHBhcmVudCk7XG4gICAgfVxuICAgIGlmIChudW0gPiBub2RlLmRhdGEpIHtcbiAgICAgIHBhcmVudCA9IG5vZGU7XG4gICAgICByZXR1cm4gZGVsZXRlTm9kZShub2RlLnJpZ2h0LCBudW0sIHBhcmVudCk7XG4gICAgfVxuICB9XG5cbiAgLy8gV2hlbiBmb3VuZCBtYXRjaFxuICBpZiAobnVtID09PSBub2RlLmRhdGEpIHtcbiAgICBpZiAocGFyZW50ID09PSB1bmRlZmluZWQgJiYgbm9kZS5sZWZ0ID09PSBudWxsICYmIG5vZGUucmlnaHQgPT09IG51bGwpIHtcbiAgICAgIG5vZGUuZGF0YSA9IG51bGw7XG4gICAgfVxuICAgIC8vIC8vIFNldCBub2RlIHBhcmVudCBsZWZ0L3JpZ2h0IG51bGxcbiAgICBlbHNlIGlmIChub2RlLmxlZnQgPT09IG51bGwgJiYgbm9kZS5yaWdodCA9PT0gbnVsbCkge1xuICAgICAgaWYgKHBhcmVudC5sZWZ0ICE9PSBudWxsICYmIHBhcmVudC5sZWZ0LmRhdGEgPT09IG5vZGUuZGF0YSkge1xuICAgICAgICBwYXJlbnQubGVmdCA9IG51bGw7XG4gICAgICB9IGVsc2UgaWYgKHBhcmVudC5yaWdodC5kYXRhID09PSBub2RlLmRhdGEpIHtcbiAgICAgICAgcGFyZW50LnJpZ2h0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gLy8gU2V0IG5vZGUgcGFyZW50IGxlZnQvcmlnaHQgd2l0aCBkZWxldGUgbm9kZSBjaGlsZHJlblxuICAgIGlmIChub2RlLmxlZnQgPT09IG51bGwgJiYgbm9kZS5yaWdodCAhPT0gbnVsbCkge1xuICAgICAgaWYgKHBhcmVudCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNvbnN0IHRlbXAgPSBub2RlLnJpZ2h0O1xuICAgICAgICBub2RlLmRhdGEgPSB0ZW1wLmRhdGE7XG4gICAgICAgIG5vZGUubGVmdCA9IHRlbXAubGVmdDtcbiAgICAgICAgbm9kZS5yaWdodCA9IHRlbXAucmlnaHQ7XG4gICAgICB9IGVsc2UgaWYgKHBhcmVudC5sZWZ0LmRhdGEgPT09IG5vZGUuZGF0YSkge1xuICAgICAgICBwYXJlbnQubGVmdCA9IG5vZGUucmlnaHQ7XG4gICAgICB9IGVsc2UgaWYgKHBhcmVudC5yaWdodC5kYXRhID09PSBub2RlLmRhdGEpIHtcbiAgICAgICAgcGFyZW50LnJpZ2h0ID0gbm9kZS5yaWdodDtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKG5vZGUubGVmdCAhPT0gbnVsbCAmJiBub2RlLnJpZ2h0ID09PSBudWxsKSB7XG4gICAgICBpZiAocGFyZW50ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY29uc3QgdGVtcCA9IG5vZGUubGVmdDtcbiAgICAgICAgbm9kZS5kYXRhID0gdGVtcC5kYXRhO1xuICAgICAgICBub2RlLmxlZnQgPSB0ZW1wLmxlZnQ7XG4gICAgICAgIG5vZGUucmlnaHQgPSB0ZW1wLnJpZ2h0O1xuICAgICAgfSBlbHNlIGlmIChwYXJlbnQubGVmdC5kYXRhID09PSBub2RlLmRhdGEpIHtcbiAgICAgICAgcGFyZW50LmxlZnQgPSBub2RlLmxlZnQ7XG4gICAgICB9IGVsc2UgaWYgKHBhcmVudC5yaWdodC5kYXRhID09PSBub2RlLmRhdGEpIHtcbiAgICAgICAgcGFyZW50LnJpZ2h0ID0gbm9kZS5sZWZ0O1xuICAgICAgfVxuICAgIH1cbiAgICAvLyAvLyBSZWN1cnNpdmUgbm9kZS5yaWdodCB1bnRpbCBub2RlLmxlZnQgPT09IG51bGxcbiAgICAvLyAvLyBTZXQgbm9kZSBwYXJlbnQgZGF0YSB0byBuZXh0IGJpZ2dlc3RcbiAgICBpZiAobm9kZS5sZWZ0ICE9PSBudWxsICYmIG5vZGUucmlnaHQgIT09IG51bGwpIHtcbiAgICAgIGlmIChuYiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHBhcmVudCA9IG51bGw7XG4gICAgICAgIG5iID0gbm9kZS5yaWdodDtcbiAgICAgICAgcmV0dXJuIGRlbGV0ZU5vZGUobm9kZSwgbnVtLCBwYXJlbnQsIG5iKTtcbiAgICAgIH1cbiAgICAgIGlmIChuYi5sZWZ0ICE9PSBudWxsKSB7XG4gICAgICAgIHBhcmVudCA9IG5iO1xuICAgICAgICBuYiA9IG5iLmxlZnQ7XG4gICAgICAgIHJldHVybiBkZWxldGVOb2RlKG5vZGUsIG51bSwgcGFyZW50LCBuYik7XG4gICAgICB9XG4gICAgICBpZiAobmIubGVmdCA9PT0gbnVsbCkge1xuICAgICAgICBub2RlLmRhdGEgPSBuYi5kYXRhO1xuICAgICAgICBpZiAocGFyZW50ICE9PSBudWxsKSB7XG4gICAgICAgICAgcGFyZW50LmxlZnQgPSBudWxsO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG5vZGUucmlnaHQgPSBuYi5yaWdodDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgZGVsZXRlTm9kZTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXVzZWxlc3MtcmV0dXJuICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1wYXJhbS1yZWFzc2lnbiAqL1xuLyogZXNsaW50LWRpc2FibGUgY29uc2lzdGVudC1yZXR1cm4gKi9cbmNvbnN0IHRlc3QgPSAobm9kZSkgPT4ge1xuICBjb25zb2xlLmxvZyhub2RlLmRhdGEpO1xufTtcblxuY29uc3QgaW5vcmRlciA9IChub2RlLCBjYiwgdmFsdWVzID0gW10pID0+IHtcbiAgaWYgKG5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgaW5vcmRlcihub2RlLnJpZ2h0LCBjYiwgdmFsdWVzKTtcbiAgaWYgKGNiID09PSB1bmRlZmluZWQpIHtcbiAgICB2YWx1ZXMudW5zaGlmdChub2RlLmRhdGEpO1xuICB9IGVsc2Uge1xuICAgIGNiKG5vZGUpO1xuICB9XG4gIGlub3JkZXIobm9kZS5sZWZ0LCBjYiwgdmFsdWVzKTtcbiAgaWYgKGNiID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gdmFsdWVzO1xuICB9XG59O1xuXG5mdW5jdGlvbiBwcmVvcmRlcihub2RlLCBjYiwgdmFsdWVzID0gW10pIHtcbiAgaWYgKG5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKGNiID09PSB1bmRlZmluZWQpIHtcbiAgICB2YWx1ZXMucHVzaChub2RlLmRhdGEpO1xuICB9IGVsc2Uge1xuICAgIGNiKG5vZGUpO1xuICB9XG4gIHByZW9yZGVyKG5vZGUubGVmdCwgY2IsIHZhbHVlcyk7XG4gIHByZW9yZGVyKG5vZGUucmlnaHQsIGNiLCB2YWx1ZXMpO1xuICBpZiAoY2IgPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiB2YWx1ZXM7XG4gIH1cbn1cblxuY29uc3QgcG9zdG9yZGVyID0gKG5vZGUsIGNiLCB2YWx1ZXMgPSBbXSkgPT4ge1xuICBpZiAobm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybjtcbiAgfVxuICBwb3N0b3JkZXIobm9kZS5sZWZ0LCBjYiwgdmFsdWVzKTtcbiAgcG9zdG9yZGVyKG5vZGUucmlnaHQsIGNiLCB2YWx1ZXMpO1xuICBpZiAoY2IgPT09IHVuZGVmaW5lZCkge1xuICAgIHZhbHVlcy5wdXNoKG5vZGUuZGF0YSk7XG4gIH0gZWxzZSB7XG4gICAgY2Iobm9kZSk7XG4gIH1cbiAgaWYgKGNiID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gdmFsdWVzO1xuICB9XG59O1xuXG5leHBvcnQgeyBpbm9yZGVyLCBwcmVvcmRlciwgcG9zdG9yZGVyLCB0ZXN0IH07XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBjb25zaXN0ZW50LXJldHVybiAqL1xuY29uc3QgZmluZCA9IChub2RlLCBudW0pID0+IHtcbiAgLy8gUmV0dXJuLCBpZiByZWFjaGVzIGxlYWYgd2l0aCBubyBtYXRjaFxuICBpZiAobnVtICE9PSBub2RlLmRhdGEgJiYgbm9kZS5sZWZ0ID09PSBudWxsICYmIG5vZGUucmlnaHQgPT09IG51bGwpIHtcbiAgICByZXR1cm4gJ05vIG1hdGNoIGZvdW5kLic7XG4gIH1cbiAgLy8gTWF0Y2ggbnVtIHdpdGggbm9kZVxuICBpZiAobnVtICE9PSBub2RlLmRhdGEpIHtcbiAgICBpZiAobnVtIDwgbm9kZS5kYXRhKSB7XG4gICAgICByZXR1cm4gZmluZChub2RlLmxlZnQsIG51bSk7XG4gICAgfVxuICAgIGlmIChudW0gPiBub2RlLmRhdGEpIHtcbiAgICAgIHJldHVybiBmaW5kKG5vZGUucmlnaHQsIG51bSk7XG4gICAgfVxuICB9XG5cbiAgLy8gV2hlbiBmb3VuZCBtYXRjaFxuICBpZiAobnVtID09PSBub2RlLmRhdGEpIHtcbiAgICByZXR1cm4gbm9kZTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgZmluZDtcbiIsIi8qIGVzbGludC1kaXNhYmxlIGNvbnNpc3RlbnQtcmV0dXJuICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1wYXJhbS1yZWFzc2lnbiAqL1xuaW1wb3J0IGZpbmQgZnJvbSAnLi9maW5kJztcblxuY29uc3QgaGVpZ2h0ID0gKG5vZGUsIHZhbHVlKSA9PiB7XG4gIGNvbnN0IHRhcmdldCA9IGZpbmQobm9kZSwgdmFsdWUpO1xuICBjb25zdCByZXN1bHQgPSBbXTtcblxuICBsZXQgY291bnQxID0gMTtcbiAgbGV0IGNvdW50MiA9IDE7XG4gIGxldCBjb3VudDMgPSAxO1xuICBsZXQgY291bnQ0ID0gMTtcblxuICBjb25zdCB0cmF2ZWxMZWZ0ID0gKGNoaWxkKSA9PiB7XG4gICAgaWYgKGNoaWxkLmxlZnQgIT09IG51bGwpIHtcbiAgICAgIGNvdW50MSArPSAxO1xuICAgICAgdHJhdmVsTGVmdChjaGlsZC5sZWZ0KTtcbiAgICB9XG4gICAgaWYgKGNoaWxkLnJpZ2h0ICE9PSBudWxsKSB7XG4gICAgICBjb3VudDIgKz0gMTtcbiAgICAgIHRyYXZlbExlZnQoY2hpbGQucmlnaHQpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCB0cmF2ZWxSaWdodCA9IChjaGlsZCkgPT4ge1xuICAgIGlmIChjaGlsZC5sZWZ0ICE9PSBudWxsKSB7XG4gICAgICBjb3VudDMgKz0gMTtcbiAgICAgIHRyYXZlbFJpZ2h0KGNoaWxkLmxlZnQpO1xuICAgIH1cbiAgICBpZiAoY2hpbGQucmlnaHQgIT09IG51bGwpIHtcbiAgICAgIGNvdW50NCArPSAxO1xuICAgICAgdHJhdmVsUmlnaHQoY2hpbGQucmlnaHQpO1xuICAgIH1cbiAgfTtcblxuICBpZiAodGFyZ2V0LmxlZnQgIT09IG51bGwpIHtcbiAgICB0cmF2ZWxMZWZ0KHRhcmdldC5sZWZ0KTtcbiAgfSBlbHNlIHtcbiAgICBjb3VudDEgPSAwO1xuICAgIGNvdW50MiA9IDA7XG4gIH1cblxuICBpZiAodGFyZ2V0LnJpZ2h0ICE9PSBudWxsKSB7XG4gICAgdHJhdmVsUmlnaHQodGFyZ2V0LnJpZ2h0KTtcbiAgfSBlbHNlIHtcbiAgICBjb3VudDMgPSAwO1xuICAgIGNvdW50NCA9IDA7XG4gIH1cblxuICByZXN1bHQucHVzaChjb3VudDEsIGNvdW50MiwgY291bnQzLCBjb3VudDQpO1xuICByZXN1bHQuc29ydCgoYSwgYikgPT4gYiAtIGEpO1xuICBjb25zb2xlLmxvZyhyZXN1bHQpO1xuICByZXR1cm4gcmVzdWx0WzBdO1xufTtcblxuY29uc3QgZGVwdGggPSAobm9kZSwgdmFsdWUsIGNvdW50ID0gMCkgPT4ge1xuICBpZiAodmFsdWUgPT09IG5vZGUuZGF0YSkge1xuICAgIHJldHVybiBjb3VudDtcbiAgfVxuXG4gIGlmICh2YWx1ZSA+IG5vZGUuZGF0YSkge1xuICAgIHJldHVybiBkZXB0aChub2RlLnJpZ2h0LCB2YWx1ZSwgY291bnQgKyAxKTtcbiAgfVxuXG4gIGlmICh2YWx1ZSA8IG5vZGUuZGF0YSkge1xuICAgIHJldHVybiBkZXB0aChub2RlLmxlZnQsIHZhbHVlLCBjb3VudCArIDEpO1xuICB9XG59O1xuXG5leHBvcnQgeyBoZWlnaHQsIGRlcHRoIH07XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBjb25zaXN0ZW50LXJldHVybiAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tcGFyYW0tcmVhc3NpZ24gKi9cbi8vIEluc2VydCwgb25seSBhZGQgYXMgYSBsZWFmLCBubyBkdXBsaWNhdGlvblxuLy8gQ29tcGFyZSB0byBlYWNoIG5vZGUsIHVudGlsIHJlYWNoZXMgYSBsZWFmXG5pbXBvcnQgeyBOb2RlIH0gZnJvbSAnLi9idWlsZC10cmVlJztcblxuY29uc3QgaW5zZXJ0ID0gKG5vZGUsIG51bSkgPT4ge1xuICAvLyBDb21wYXJlIG51bSB3aXRoIHJvb3RcbiAgLy8gUmV0dXJuIGlmIG51bSBpcyBzYW1lIGFzIHJvb3RcbiAgaWYgKG51bSA9PT0gbm9kZS5kYXRhKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gVW50aWwgcmVhY2hlcyBub2RlIHdpdGggbm8gbGVmdC9yaWdodCBzdWJ0cmVlXG4gIGlmIChub2RlLmxlZnQgPT09IG51bGwpIHtcbiAgICBub2RlLmxlZnQgPSBOb2RlKG51bSwgbnVsbCwgbnVsbCk7XG4gICAgcmV0dXJuO1xuICB9XG4gIGlmIChub2RlLnJpZ2h0ID09PSBudWxsKSB7XG4gICAgbm9kZS5yaWdodCA9IE5vZGUobnVtLCBudWxsLCBudWxsKTtcbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBSZWN1cnNpdmUgY2FsbCBsZWZ0IG5vZGUgaWYgc21hbGxlciB0aGFuIHJvb3RcbiAgaWYgKG51bSA8IG5vZGUuZGF0YSkge1xuICAgIHJldHVybiBpbnNlcnQobm9kZS5sZWZ0LCBudW0pO1xuICB9XG4gIC8vIFJlY3Vyc2l2ZSBjYWxsIHJpZ2h0IG5vZGUgaWYgYmlnZ2VyIHRoYW4gcm9vdFxuICBpZiAobnVtID4gbm9kZS5kYXRhKSB7XG4gICAgcmV0dXJuIGluc2VydChub2RlLnJpZ2h0LCBudW0pO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBpbnNlcnQ7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBjb25zaXN0ZW50LXJldHVybiAqL1xuY29uc3QgcHJpbnQgPSAobm9kZSkgPT4ge1xuICBjb25zb2xlLmxvZyhub2RlKTtcbn07XG5cbmNvbnN0IGxldmVsT3JkZXIgPSAobm9kZSwgY2IsIHF1ZXVlID0gW10sIHZhbHVlcyA9IFtdKSA9PiB7XG4gIGlmIChub2RlID09PSB1bmRlZmluZWQgJiYgY2IgPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiB2YWx1ZXM7XG4gIH1cblxuICBpZiAobm9kZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMCkge1xuICAgIHF1ZXVlLnB1c2gobm9kZSk7XG4gIH1cblxuICAvLyBWaXNpdCBub2RlJ3MgdmFsdWVcbiAgaWYgKGNiID09PSB1bmRlZmluZWQpIHtcbiAgICB2YWx1ZXMucHVzaChub2RlLmRhdGEpO1xuICB9IGVsc2Uge1xuICAgIGNiKG5vZGUpO1xuICB9XG5cbiAgLy8gUHV0IG5vZGUncyBjaGlsZCBpbiBxdWV1ZVxuICBpZiAobm9kZS5sZWZ0ICE9PSBudWxsKSB7XG4gICAgcXVldWUucHVzaChub2RlLmxlZnQpO1xuICB9XG5cbiAgaWYgKG5vZGUucmlnaHQgIT09IG51bGwpIHtcbiAgICBxdWV1ZS5wdXNoKG5vZGUucmlnaHQpO1xuICB9XG5cbiAgLy8gUmVjdXJzaW9uIHVudGlsIHF1ZXVlIGVtcHR5XG4gIGlmIChxdWV1ZS5sZW5ndGggPiAwKSB7XG4gICAgcXVldWUuc2hpZnQoKTtcbiAgICByZXR1cm4gbGV2ZWxPcmRlcihxdWV1ZVswXSwgY2IsIHF1ZXVlLCB2YWx1ZXMpO1xuICB9XG5cbiAgLy8gSXRlcmF0ZSB1bnRpbCBxdWV1ZSBlbXB0eVxuICAvLyB3aGlsZSAocXVldWUubGVuZ3RoID4gMCkge1xuICAvLyAgIGlmIChxdWV1ZVswXS5sZWZ0ICE9PSBudWxsKSB7XG4gIC8vICAgICBxdWV1ZS5wdXNoKHF1ZXVlWzBdLmxlZnQpO1xuICAvLyAgIH1cblxuICAvLyAgIGlmIChxdWV1ZVswXS5yaWdodCAhPT0gbnVsbCkge1xuICAvLyAgICAgcXVldWUucHVzaChxdWV1ZVswXS5yaWdodCk7XG4gIC8vICAgfVxuXG4gIC8vICAgaWYgKGNiID09PSB1bmRlZmluZWQpIHtcbiAgLy8gICAgIHZhbHVlcy5wdXNoKHF1ZXVlWzBdLmRhdGEpO1xuICAvLyAgIH0gZWxzZSB7XG4gIC8vICAgICBjYihxdWV1ZVswXSk7XG4gIC8vICAgfVxuICAvLyAgIHF1ZXVlLnNoaWZ0KCk7XG4gIC8vIH1cbiAgLy8gcmV0dXJuIHZhbHVlcztcbn07XG5cbmV4cG9ydCB7IGxldmVsT3JkZXIsIHByaW50IH07XG4iLCJjb25zdCBwcmV0dHlQcmludCA9IChub2RlLCBwcmVmaXggPSAnJywgaXNMZWZ0ID0gdHJ1ZSkgPT4ge1xuICBpZiAobm9kZS5yaWdodCAhPT0gbnVsbCkge1xuICAgIHByZXR0eVByaW50KG5vZGUucmlnaHQsIGAke3ByZWZpeH0ke2lzTGVmdCA/ICfilIIgICAnIDogJyAgICAnfWAsIGZhbHNlKTtcbiAgfVxuICBjb25zb2xlLmxvZyhgJHtwcmVmaXh9JHtpc0xlZnQgPyAn4pSU4pSA4pSAICcgOiAn4pSM4pSA4pSAICd9JHtub2RlLmRhdGF9YCk7XG4gIGlmIChub2RlLmxlZnQgIT09IG51bGwpIHtcbiAgICBwcmV0dHlQcmludChub2RlLmxlZnQsIGAke3ByZWZpeH0ke2lzTGVmdCA/ICcgICAgJyA6ICfilIIgICAnfWAsIHRydWUpO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBwcmV0dHlQcmludDtcbiIsIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9wcmVmZXItZGVmYXVsdC1leHBvcnQgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXBhcmFtLXJlYXNzaWduICovXG5jb25zdCBnZXRSYW5kb21JbnQgPSAobWluLCBtYXgpID0+IHtcbiAgbWluID0gTWF0aC5jZWlsKG1pbik7XG4gIG1heCA9IE1hdGguZmxvb3IobWF4KTtcbiAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSArIG1pbik7XG59O1xuXG5jb25zdCBnZXRSYW5kb21MaXN0ID0gKG1pbiwgbWF4LCBsZW5ndGgpID0+IHtcbiAgY29uc3QgbGlzdCA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgbnVtID0gZ2V0UmFuZG9tSW50KG1pbiwgbWF4KTtcbiAgICBsaXN0LnB1c2gobnVtKTtcbiAgfVxuICByZXR1cm4gbGlzdDtcbn07XG5leHBvcnQgeyBnZXRSYW5kb21MaXN0IH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIvKiBlc2xpbnQtZGlzYWJsZSBjb25zaXN0ZW50LXJldHVybiAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tcGFyYW0tcmVhc3NpZ24gKi9cbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHsgTm9kZSwgVHJlZSwgc29ydEFycmF5LCB1bmJsY1RyZWUgfSBmcm9tICcuL2J1aWxkLXRyZWUnO1xuaW1wb3J0IHByZXR0eVByaW50IGZyb20gJy4vcHJldHR5LXByaW50JztcbmltcG9ydCBpbnNlcnQgZnJvbSAnLi9pbnNlcnQnO1xuaW1wb3J0IGRlbGV0ZU5vZGUgZnJvbSAnLi9kZWxldGUnO1xuaW1wb3J0IGZpbmQgZnJvbSAnLi9maW5kJztcbmltcG9ydCB7IGxldmVsT3JkZXIsIHByaW50IH0gZnJvbSAnLi9sZXZlbC1vcmRlcic7XG5pbXBvcnQgeyBpbm9yZGVyLCBwcmVvcmRlciwgcG9zdG9yZGVyLCB0ZXN0IH0gZnJvbSAnLi9kZXB0aC1maXJzdCc7XG5pbXBvcnQgeyBoZWlnaHQsIGRlcHRoIH0gZnJvbSAnLi9oZWlnaHQtZGVwdGgnO1xuaW1wb3J0IHsgaXNCYWxhbmNlZCwgcmViYWxhbmNlIH0gZnJvbSAnLi9iYWxhbmNlZCc7XG5pbXBvcnQgeyBnZXRSYW5kb21MaXN0IH0gZnJvbSAnLi9yYW5kb20tbnVtJztcblxuLy8gRHJpdmVyIFNjcmlwdFxuLy8gQ3JlYXRlIGEgYmluYXJ5IHNlYXJjaCB0cmVlIGZyb20gYW4gYXJyYXkgb2YgcmFuZG9tIG51bWJlcnMuXG5jb25zdCByYW5kb21MaXN0ID0gZ2V0UmFuZG9tTGlzdCgxLCAxMDAsIDEwKTtcbmNvbnN0IGJzdCA9IFRyZWUocmFuZG9tTGlzdCk7XG5jb25zb2xlLmxvZyhyYW5kb21MaXN0KTtcbmNvbnNvbGUubG9nKGJzdCk7XG5wcmV0dHlQcmludChic3QpO1xuLy8gQ29uZmlybSB0aGF0IHRoZSB0cmVlIGlzIGJhbGFuY2VkIGJ5IGNhbGxpbmcgaXNCYWxhbmNlZFxuY29uc29sZS5sb2coaXNCYWxhbmNlZChic3QpKTtcbi8vIFByaW50IG91dCBhbGwgZWxlbWVudHMgaW4gbGV2ZWwsIHByZSwgcG9zdCwgYW5kIGluIG9yZGVyXG5jb25zb2xlLmxvZyhsZXZlbE9yZGVyKGJzdCkpO1xuY29uc29sZS5sb2cocHJlb3JkZXIoYnN0KSk7XG5jb25zb2xlLmxvZyhwb3N0b3JkZXIoYnN0KSk7XG5jb25zb2xlLmxvZyhpbm9yZGVyKGJzdCkpO1xuLy8gVW5iYWxhbmNlIHRoZSB0cmVlIGJ5IGFkZGluZyBzZXZlcmFsIG51bWJlcnMgPiAxMDBcbmluc2VydChic3QsIDEyMyk7XG5pbnNlcnQoYnN0LCA0NTYpO1xuaW5zZXJ0KGJzdCwgNzg5KTtcbmluc2VydChic3QsIDk5OSk7XG5jb25zb2xlLmxvZyhic3QpO1xucHJldHR5UHJpbnQoYnN0KTtcbi8vIENvbmZpcm0gdGhhdCB0aGUgdHJlZSBpcyB1bmJhbGFuY2VkIGJ5IGNhbGxpbmcgaXNCYWxhbmNlZFxuY29uc29sZS5sb2coaXNCYWxhbmNlZChic3QpKTtcbi8vIEJhbGFuY2UgdGhlIHRyZWUgYnkgY2FsbGluZyByZWJhbGFuY2VcbmNvbnN0IHJlYnN0ID0gcmViYWxhbmNlKGJzdCk7XG4vLyBDb25maXJtIHRoYXQgdGhlIHRyZWUgaXMgYmFsYW5jZWQgYnkgY2FsbGluZyBpc0JhbGFuY2VkXG5jb25zb2xlLmxvZyhpc0JhbGFuY2VkKHJlYnN0KSk7XG5jb25zb2xlLmxvZyhyZWJzdCk7XG5wcmV0dHlQcmludChyZWJzdCk7XG4vLyBQcmludCBvdXQgYWxsIGVsZW1lbnRzIGluIGxldmVsLCBwcmUsIHBvc3QsIGFuZCBpbiBvcmRlclxuY29uc29sZS5sb2cobGV2ZWxPcmRlcihyZWJzdCkpO1xuY29uc29sZS5sb2cocHJlb3JkZXIocmVic3QpKTtcbmNvbnNvbGUubG9nKHBvc3RvcmRlcihyZWJzdCkpO1xuY29uc29sZS5sb2coaW5vcmRlcihyZWJzdCkpO1xuLy8gRHJpdmVyIFNjcmlwdFxuXG4vLyBjb25zdCBkaXUgPSBUcmVlKFsxNiwgMiwgNCwgMTgsIDI3LCAzLCAxOSwgMzIsIDQ4XSk7XG4vLyBjb25zdCBvbjkgPSB1bmJsY1RyZWUoWzE2LCAyLCA0LCAxOCwgMjcsIDMsIDE5LCAzMiwgNDhdKTtcbi8vIGNvbnNvbGUubG9nKHNvcnRBcnJheShbMTYsIDIsIDQsIDE4LCAyNywgMywgMTksIDMyLCA0OF0pKTtcbi8vIGluc2VydChkaXUsIDUpO1xuLy8gZGVsZXRlTm9kZShkaXUsIDE2KTtcbi8vIGRlbGV0ZU5vZGUoZGl1LCA0KTtcbi8vIGRlbGV0ZU5vZGUoZGl1LCAyKTtcbi8vIGRlbGV0ZU5vZGUoZGl1LCAzKTtcbi8vIGRlbGV0ZU5vZGUoZGl1LCA0OCk7XG4vLyBkZWxldGVOb2RlKGRpdSwgMzIpO1xuLy8gZGVsZXRlTm9kZShkaXUsIDE5KTtcbi8vIGRlbGV0ZU5vZGUoZGl1LCAyNyk7XG4vLyBkZWxldGVOb2RlKGRpdSwgMTgpO1xuLy8gZmluZChkaXUsIDE5KTtcbi8vIGNvbnNvbGUubG9nKGxldmVsT3JkZXIoZGl1KSk7XG4vLyBjb25zb2xlLmxvZyhpbm9yZGVyKGRpdSkpO1xuLy8gY29uc29sZS5sb2cocHJlb3JkZXIoZGl1KSk7XG4vLyBjb25zb2xlLmxvZyhwb3N0b3JkZXIoZGl1KSk7XG4vLyBjb25zb2xlLmxvZyhoZWlnaHQoZGl1LCAxOCkpO1xuLy8gY29uc29sZS5sb2coZGVwdGgoZGl1LCAxNikpO1xuLy8gY29uc29sZS5sb2coaXNCYWxhbmNlZChkaXUpKTtcbi8vIGNvbnNvbGUubG9nKGlzQmFsYW5jZWQob245KSk7XG4vLyBjb25zb2xlLmxvZyhyZWJhbGFuY2Uob245KSk7XG4vLyBwcmV0dHlQcmludChyZWJhbGFuY2Uob245KSk7XG4vLyBjb25zb2xlLmxvZyhkaXUpO1xuLy8gY29uc29sZS5sb2cob245KTtcbi8vIHByZXR0eVByaW50KGRpdSk7XG4vLyBwcmV0dHlQcmludChvbjkpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9