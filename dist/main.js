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
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n  box-sizing: border-box;\r\n  font-family: 'Roboto', sans-serif; }\r\n\r\nbody {\r\n  margin: 0; }\r\n\r\n.battlefield {\r\n  display: flex;\r\n  justify-content: center;\r\n  gap: 150px; }\r\n\r\n#player1-ships, #player2-ships {\r\n  display: none; }\r\n  #player1-ships li, #player2-ships li {\r\n    margin: 8px 0;\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 8px; }\r\n  #player1-ships img, #player2-ships img {\r\n    height: 1rem;\r\n    cursor: pointer; }\r\n\r\n#player1-board, #player2-board {\r\n  display: grid;\r\n  grid-template-columns: repeat(10, 1fr);\r\n  grid-template-rows: repeat(10, 1fr); }\r\n  #player1-board .empty-cell, #player2-board .empty-cell {\r\n    height: 40px;\r\n    width: 40px;\r\n    border: 1px solid rgba(0, 0, 0, 0.445);\r\n    background-color: rgba(212, 212, 212, 0.3); }\r\n\r\n[class^=\"cell\"] {\r\n  height: 40px;\r\n  width: 40px;\r\n  border: 1px solid black;\r\n  background-color: #d4d4d4;\r\n  text-align: center;\r\n  vertical-align: middle;\r\n  font-size: 2rem; }\r\n  [class^=\"cell\"]:hover {\r\n    background-color: grey;\r\n    cursor: pointer; }\r\n\r\n.placing-ship-cell {\r\n  background-color: rgba(255, 255, 0, 0.334); }\r\n  .placing-ship-cell:hover {\r\n    background-color: rgba(255, 255, 0, 0.334); }\r\n\r\n.placing-error {\r\n  background-color: rgba(255, 0, 0, 0.423); }\r\n  .placing-error:hover {\r\n    background-color: rgba(255, 0, 0, 0.423); }\r\n\r\n.battle-info {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center; }\r\n  .battle-info .turn-info {\r\n    font-size: 1.2rem;\r\n    font-weight: 700; }\r\n\r\n.backdrop {\r\n  display: none;\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  height: 100vh;\r\n  width: 100vw;\r\n  background-color: rgba(211, 211, 211, 0.564); }\r\n\r\n.game-over_modal {\r\n  display: none;\r\n  position: fixed;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  border: 1px solid black;\r\n  background-color: grey;\r\n  z-index: 3;\r\n  padding: 3rem; }\r\n\r\n/*# sourceMappingURL=style.css.map */\r\n", "",{"version":3,"sources":["webpack://./src/style.scss","webpack://./src/style.css"],"names":[],"mappings":"AAEA;EACE,sBAAsB;EACtB,iCAAiC,EAAA;;AAGnC;EACE,SAAS,EAAA;;AAGX;EACE,aAAa;EACb,uBAAuB;EACvB,UAAU,EAAA;;AAGZ;EACE,aAAa,EAAA;EAEb;IACE,aAAa;IACb,aAAa;IACb,mBAAmB;IACnB,QAAQ,EAAA;EAGV;IACE,YAAY;IACZ,eAAe,EAAA;;AAInB;EACE,aAAa;EACb,sCAAsC;EACtC,mCAAmC,EAAA;EAEnC;IACE,YAAY;IACZ,WAAW;IACX,sCAAsC;IACtC,0CAA0C,EAAA;;AAI9C;EACE,YAAY;EACZ,WAAW;EACX,uBAAuB;EACvB,yBAAoC;EACpC,kBAAkB;EAClB,sBAAsB;EACtB,eAAe,EAAA;EAEf;IACE,sBAAsB;IACtB,eAAe,EAAA;;AAMnB;EACE,0CAA0C,EAAA;EAE1C;IACE,0CAA0C,EAAA;;AAI9C;EACE,wCAAwC,EAAA;EAExC;IACE,wCAAwC,EAAA;;AAI5C;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB,EAAA;EAEnB;IACE,iBAAiB;IACjB,gBAAgB,EAAA;;AAKpB;EACE,aAAa;EACb,eAAe;EACf,MAAM;EACN,OAAO;EACP,aAAa;EACb,YAAY;EACZ,4CAA4C,EAAA;;AAG9C;EACE,aAAa;EACb,eAAe;EACf,QAAQ;EACR,SAAS;EACT,gCAAgC;EAChC,uBAAuB;EACvB,sBAAsB;EACtB,UAAU;EACV,aAAa,EAAA;;AC1Bf,oCAAoC","sourceRoot":""}]);
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
    return [content].concat([sourceMapping]).join("\n");
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

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Gameboard": () => (/* binding */ Gameboard)
/* harmony export */ });
/* harmony import */ var _ship_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship.js */ "./src/ship.js");



const Gameboard = () => {
  return {
    privateBoard: [
      [,,,,,,,,,],
      [,,,,,,,,,],
      [,,,,,,,,,],
      [,,,,,,,,,],
      [,,,,,,,,,],
      [,,,,,,,,,],
      [,,,,,,,,,],
      [,,,,,,,,,],
      [,,,,,,,,,],
      [,,,,,,,,,],
    ],

    publicBoard: [
      [,,,,,,,,,],
      [,,,,,,,,,],
      [,,,,,,,,,],
      [,,,,,,,,,],
      [,,,,,,,,,],
      [,,,,,,,,,],
      [,,,,,,,,,],
      [,,,,,,,,,],
      [,,,,,,,,,],
      [,,,,,,,,,],
    ],
    
    shipList: [],

    placeShip: function (size, startPos, shipName = 'Unnamed ship', direction = 'hor') {
      if (!this.isValid(size, startPos, direction)) {
        throw new Error('Cannot place ship: out of bounds or space already occupied.');
      } else {
        let newShip = (0,_ship_js__WEBPACK_IMPORTED_MODULE_0__.Ship)(size, shipName);
        this.shipList.push(newShip);
        if (direction === 'hor') {
          for (let i = 0; i < size; i++) {
            this.privateBoard[startPos[0]][startPos[1] + i] = shipName;
          }
        } else if (direction === 'ver') {
          for (let i = 0; i < size; i++) {
            this.privateBoard[startPos[0] + i][startPos[1]] = shipName;
          }
        }
      }
    },

    computerPlaceShip: function (size, shipName) {
      let rndPos = [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)];
      let rndDirection = Math.floor(Math.random() * 2);
      switch (rndDirection) {
        case 0:
          rndDirection = 'hor';
          break;
        case 1:
        default:
          rndDirection = 'ver';
          break;
      }

      while (!this.isValid(size, rndPos, rndDirection)) {
        rndPos = [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)];
        rndDirection = Math.floor(Math.random() * 2);
        switch (rndDirection) {
          case 0:
            rndDirection = 'hor';
            break;
          case 1:
          default:
            rndDirection = 'ver';
            break;
        }
      }
      this.placeShip(size, rndPos, shipName, rndDirection);
    },

    isValid: function (size, startPos, direction = 'hor') {
      let sizeCheck = true;
      let availableCheck = true;
      if (direction === 'hor' && ((startPos[1] + size - 1) > 9)) {
        sizeCheck = false;
      } else if (direction === 'ver' && ((startPos[0] + size - 1) > 9)) {
        sizeCheck = false;
      }
      let targetArr = [];
      if (direction === 'hor') {
        for (let i = 0; i < size; i++) { // check if horizontal placement is empty
          targetArr.push(this.privateBoard[startPos[0]][startPos[1] + i]);
          }
      } else if (sizeCheck === true && direction === 'ver') {
        for (let i = 0; i < size; i++) {
          targetArr.push(this.privateBoard[startPos[0] + i][startPos[1]]);
        }
      }
      availableCheck = targetArr.every(el => el === undefined);
      //console.log({sizeCheck, availableCheck});
      return (sizeCheck && availableCheck);
      },

    receiveAttack: function (targetPos) {
     if (this.privateBoard[targetPos[0]][targetPos[1]] === undefined) {
      this.privateBoard[targetPos[0]][targetPos[1]] = '~';
      return 'You missed';
     } else if (this.privateBoard[targetPos[0]][targetPos[1]] === '~' || this.privateBoard[targetPos[0]][targetPos[1]] === 'X') {
      throw new Error('You cannot attack the same spot twice');
     } else {
      let target = this.shipList.find(el => el.name === this.privateBoard[targetPos[0]][targetPos[1]]);
      target.hits++;
      this.privateBoard[targetPos[0]][targetPos[1]] = 'X';
      if (target.isSunk()) {
        return 'The ship has sunk';
      } else {
      return target.name + ' has been hit, ' + (target.size - target.hits) +' hit(s) left';
      }
     }
    },

    getStatus: function() {
      return this.shipList.every(el => el.isSunk());
    },

  };
};



/***/ }),

/***/ "./src/placeShipModal.js":
/*!*******************************!*\
  !*** ./src/placeShipModal.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GenerateShipModal": () => (/* binding */ GenerateShipModal)
/* harmony export */ });
function GenerateShipModal (player, ship) {
  return `<div id="ship-modal_player">${player.playerName}</div>
  <p>Place your <span id="ship-modal_ship">${ship}</span></p>`;
}



/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Player": () => (/* binding */ Player)
/* harmony export */ });
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ "./src/gameboard.js");


const Player = (name) => {
  return {
    playerName: name,

    gameboard: (0,_gameboard__WEBPACK_IMPORTED_MODULE_0__.Gameboard)(),

    attack: function (player, x, y) {
      player.gameboard.receiveAttack([x, y]);
    },

    computerAttack: function (player) {
      let coord = findValidMove(player.gameboard.privateBoard);
      this.attack(player, coord[0], coord[1]);
    },

    score: 0,
  };
};

function rndCoordinates () {
  let x = Math.floor(Math.random() * 10);
  let y = Math.floor(Math.random() * 10);
  return [[x],[y]];
}

function findValidMove (board) {
  // Generate two random number between 0-9
  let coordinates = rndCoordinates();
  // continue while the move is invalid, launch attack when finding a valid move
  while (board[coordinates[0]][coordinates[1]] === 'X' || board[coordinates[0]][coordinates[1]] === '~') {
    coordinates = rndCoordinates();
  }
  return coordinates;
}



/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ship": () => (/* binding */ Ship)
/* harmony export */ });
const Ship = (size, name = 'Unnamed ship', id = undefined) => {
  return {
    name,
    size,
    hits: 0,
    hit: function() {
      this.hits++;
    },

    isSunk: function() {
      return this.hits >= this.size ? true : false;
    },

    id,
  };
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
/* harmony import */ var _ship_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ship.js */ "./src/ship.js");
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gameboard */ "./src/gameboard.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./player */ "./src/player.js");
/* harmony import */ var _placeShipModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./placeShipModal */ "./src/placeShipModal.js");






// Gobal variables
let player1;
let player2;
let p1Cells;
let p2Cells;
let currentPlayer = 'player1';

// DOM Elements
const new_game_button = document.getElementById('new-game_button');
const start_game_button = document.getElementById('start-game_button');

const player1_board = document.getElementById('player1-board');
const player2_board = document.getElementById('player2-board');
const player1_ships = document.getElementById('player1-ships');
const player1_log = document.getElementById('player1-log');
const player2_log = document.getElementById('player2-log');
const turn_info = document.querySelector('.turn-info');


// Modals display

const closeModalButton = document.querySelector('.close-modal_button');
closeModalButton.addEventListener('click', () => CloseModal('game-over_modal'));

function OpenModal(modal) {
  const backdrop = document.querySelector('.backdrop');
  backdrop.style.display = 'block';
  backdrop.addEventListener('click', () => CloseModal(modal));
  const modalToOpen = document.querySelector(`.${modal}`);
  modalToOpen.style.display = 'block';
}

function CloseModal(modal) {
  const backdrop = document.querySelector('.backdrop');
  backdrop.style.display = 'none';
  const modalToClose = document.querySelector(`.${modal}`);
  modalToClose.style.display = 'none';
}

// Initialize game functions
new_game_button.addEventListener('click', () => {
  InitializeGame();
  placementPhase();
});

start_game_button.addEventListener('click', () => StartGame());

function InitializeGame() {
  player1 = (0,_player__WEBPACK_IMPORTED_MODULE_3__.Player)('Thomas');
  player2 = (0,_player__WEBPACK_IMPORTED_MODULE_3__.Player)('Computer');
  player1_ships.style.display = 'block';
  p1Cells = PopulateP1();
  p2Cells = PopulateP2();
}
function ComputerPlaceShips () {
  player2.gameboard.computerPlaceShip(5, 'Carrier');
  player2.gameboard.computerPlaceShip(4, 'Battleship');
  player2.gameboard.computerPlaceShip(3, 'Cruiser');
  player2.gameboard.computerPlaceShip(3, 'Submarine');
  player2.gameboard.computerPlaceShip(2, 'Destroyer');
}

function Player1PlaceShips () {
  const p1CarrierHor = document.querySelector('.p1-carrier > .hor');
  const p1CarrierVer = document.querySelector('.p1-carrier > .ver');
  p1CarrierHor.addEventListener('click', () => ActivatePlacement(player1, p1Cells, 5, 'Carrier', '.p1-carrier'));
  p1CarrierVer.addEventListener('click', () => ActivatePlacement(player1, p1Cells, 5, 'Carrier', '.p1-carrier', 'ver'));
  const p1BattleshipHor = document.querySelector('.p1-battleship > .hor');
  const p1BattleshipVer = document.querySelector('.p1-battleship > .ver');
  p1BattleshipHor.addEventListener('click', () => ActivatePlacement(player1, p1Cells, 4, 'Battleship', '.p1-battleship'));
  p1BattleshipVer.addEventListener('click', () => ActivatePlacement(player1, p1Cells, 4, 'Battleship', '.p1-battleship', 'ver'));
  const p1CruiserHor = document.querySelector('.p1-cruiser > .hor');
  const p1CruiserVer = document.querySelector('.p1-cruiser > .ver');
  p1CruiserHor.addEventListener('click', () => ActivatePlacement(player1, p1Cells, 3, 'Cruiser', '.p1-cruiser'));
  p1CruiserVer.addEventListener('click', () => ActivatePlacement(player1, p1Cells, 3, 'Cruiser', '.p1-cruiser', 'ver'));
  const p1SubmarineHor = document.querySelector('.p1-submarine > .hor');
  const p1SubmarineVer = document.querySelector('.p1-submarine > .ver');
  p1SubmarineHor.addEventListener('click', () => ActivatePlacement(player1, p1Cells, 3, 'Submarine', '.p1-submarine'));
  p1SubmarineVer.addEventListener('click', () => ActivatePlacement(player1, p1Cells, 3, 'Submarine', '.p1-submarine', 'ver'));
  const p1DestroyerHor = document.querySelector('.p1-destroyer > .hor');
  const p1DestroyerVer = document.querySelector('.p1-destroyer > .ver');
  p1DestroyerHor.addEventListener('click', () => ActivatePlacement(player1, p1Cells, 2, 'Destroyer', '.p1-destroyer'));
  p1DestroyerVer.addEventListener('click', () => ActivatePlacement(player1, p1Cells, 2, 'Destroyer', '.p1-destroyer', 'ver'));
}

function placementPhase () {
  ComputerPlaceShips();
  Player1PlaceShips();
}

// Activate click on own board to place ships
function ActivatePlacement (player, cellsArr, size, shipName, domElement, orientation = 'hor') {  
  // Check if the ship has already been placed, if yes then the function returns an error
  let placedShip = player.gameboard.shipList.find(el => el.name === shipName);
  if (placedShip) {
    throw new Error('This ship is already in place.');
  
  } else {
  // Display ship size overlay on hover
  let coloredCell;
  cellsArr.forEach(el => {
    if (orientation === 'hor') {
      el.addEventListener('mouseover', () => {    
        const startingY = el.className.slice(0,7);
        const startingX = +el.className.slice(7,8);
        if (player.gameboard.isValid(size, [+startingY.slice(-1), startingX])) {
          for (let i = startingX; i < (+startingX + size); i++) {
            coloredCell = document.getElementsByClassName(`${startingY}${i}`)[0];
            coloredCell.classList.add('placing-ship-cell');
          }
          el.addEventListener('mouseout', (e) => {
            cellsArr.forEach(el => el.classList.remove('placing-ship-cell'));
          });
        } else {
          if (startingX + size > 10) {
            for (let i = startingX; i < 10; i++) {
              coloredCell = document.getElementsByClassName(`${startingY}${i}`)[0];
              coloredCell.classList.add('placing-error');
            }
          } else {
            for (let i = startingX; i < startingX + size; i++) {
              coloredCell = document.getElementsByClassName(`${startingY}${i}`)[0];
              coloredCell.classList.add('placing-error');
            }
          }
          
          el.addEventListener('mouseout', (e) => {
            cellsArr.forEach(el => el.classList.remove('placing-error'));
          });
        }
      });
    } else {
      el.addEventListener('mouseover', (e) => {    
        const Ycoord = +el.className.slice(6,7);
        const startingX = +el.className.slice(7,8);
        const cellName = el.className.slice(0,6);
        if (player.gameboard.isValid(size, [Ycoord, startingX], 'ver')) {
          for (let i = Ycoord; i < (Ycoord + size); i++) {
            coloredCell = document.getElementsByClassName(`${cellName}${i}${startingX}`)[0];
            coloredCell.classList.add('placing-ship-cell');
          }
          el.addEventListener('mouseout', (e) => {
            cellsArr.forEach(el => el.classList.remove('placing-ship-cell'));
          });
        } else {
          if (Ycoord + size > 10){
            for (let i = Ycoord; i < 10; i++) {
              coloredCell = document.getElementsByClassName(`${cellName}${i}${startingX}`)[0];
              coloredCell.classList.add('placing-error');
            }
          } else {
            for (let i = Ycoord; i < Ycoord + size; i++) {
              coloredCell = document.getElementsByClassName(`${cellName}${i}${startingX}`)[0];
              coloredCell.classList.add('placing-error');
            }
          }
          el.addEventListener('mouseout', (e) => {
            cellsArr.forEach(el => el.classList.remove('placing-error'));
          });
        }
      });
    }

    // Place ship when clicking
    el.addEventListener('click', (e) => {
      const targetCell = (el.className.slice(6, 8)).split('');
      const targetCoordinates = [+targetCell[0], +targetCell[1]];
      player.gameboard.placeShip(size, targetCoordinates, shipName, orientation);
      p1Cells = PopulateP1();
      const shipListName = document.querySelector(domElement);
      shipListName.style.color = 'grey';
      const horButton = document.querySelector(`${domElement} > .hor`);
      const verButton = document.querySelector(`${domElement} > .ver`);
      horButton.style.display = 'none';
      verButton.style.display = 'none';
    });
  });}
}

function StartGame () {
  // Check if all ships have been placed before launching the game
  if (player1.gameboard.shipList.length !== 5) {
    throw new Error('You must still place ships!');
  } else {
    InitializeTurn(currentPlayer);
  }
}

// Main game flow, alternate turn between players and enable attacking the opponent's board
function InitializeTurn(currentPlayer) {
  UpdateInfoDisplay();
  p1Cells = PopulateP1();
  p2Cells = PopulateP2();
  if (currentPlayer === 'player1') {
    ActivateAttackOn(p2Cells, player1, player2);
  } else {
    computerAttack();
    // For PvP:
    //ActivateAttackOn(p1Cells, player2, player1);
  }
}

// Populate player 1 board
function PopulateP1 (board = 'privateBoard') {
  const targetBoard = player1.gameboard[board];
  player1_board.textContent = '';
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      let cell = document.createElement('div');
      cell.textContent = targetBoard[i][j];
      if (cell.textContent === 'X') {
        cell.style.backgroundColor = '#f3bbbb';
      } else if (cell.textContent === '~') {
        cell.style.backgroundColor = '#d1d3ef';
      } else if (cell.textContent) {
        cell.textContent = 'O';
        cell.style.backgroundColor = '#c7e6d0';
      }
      cell.className = `cell1 ${i}${j}`;
      player1_board.appendChild(cell);
    }  
  }
  return document.querySelectorAll('.cell1');
}

// Populate player 2 (computer) board, using the publicBoard key to keep undiscovered squares empty
function PopulateP2 (board = 'publicBoard') {
  const targetBoard = player2.gameboard[board];
  player2_board.textContent = '';
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      let cell = document.createElement('div');
      cell.textContent = targetBoard[i][j];
      if (cell.textContent === 'X') {
        cell.style.backgroundColor = '#f3bbbb';
      } else if (cell.textContent === '~') {
        cell.style.backgroundColor = '#d1d3ef';
      }
      cell.className = `cell2 ${i}${j}`;
      player2_board.appendChild(cell);
    }  
  }
  return document.querySelectorAll('.cell2');
}

// Activate attack on one player board at a time, works for PVP
function ActivateAttackOn (cellsArr, attacker, defender) {
  cellsArr.forEach(el => {
    el.addEventListener('click', (e) => {
      const targetCell = (el.className.slice(-2)).split('');
      attacker.attack(defender, targetCell[0], targetCell[1]);
      // Reveal square when attacked
      if (currentPlayer === 'player1') {
        if (defender.gameboard.privateBoard[targetCell[0]][targetCell[1]] === 'X') {
          defender.gameboard.publicBoard[targetCell[0]][targetCell[1]] = 'X';
        } else {
          defender.gameboard.publicBoard[targetCell[0]][targetCell[1]] = '~';
        }
        PopulateP2();
        currentPlayer = 'player2';
      } else {
        if (defender.gameboard.privateBoard[targetCell[0]][targetCell[1]] === 'X') {
          defender.gameboard.publicBoard[targetCell[0]][targetCell[1]] = 'X';
        } else {
          defender.gameboard.publicBoard[targetCell[0]][targetCell[1]] = '~';
        }
        PopulateP1();
        currentPlayer = 'player1';
      }
      if (!winCheck()) {
        InitializeTurn(currentPlayer);
      } else {
        OpenModal('game-over_modal');
      }
    });
  });
}

// Computer attack
function computerAttack () {
  player2.computerAttack(player1);
  winCheck();
  currentPlayer = 'player1';
  InitializeTurn(currentPlayer);
}

// Check win condition
function winCheck () {
  if (player1.gameboard.getStatus() || player2.gameboard.getStatus()) {
    return true;
  }
}

// Display controller
function UpdateInfoDisplay () {
  turn_info.textContent = currentPlayer === 'player1' ? `${player1.playerName}'s turn` : `${player2.playerName}'s turn`;
}

// Test buttons
player1_log.addEventListener('click', () => {
  console.log(player1.gameboard);
});

player2_log.addEventListener('click', () => {
  console.log(player2.gameboard);
});


// ROADMAP
// Visual feedback : changer la couleur du bouton 'start' lorsque tous les navires sont placés, 'new game' plus en évidence lorsaue ça fait sens (partie pas encore lancée, ou partie terminée)
// Fix bug d'affichage lorsqu'on clique sur un autre navire avant sans avoir cliqué au préalable pour placer le premier : remove eventListener en début de fonction ?

// PvP : alterner 'privateBoard' (joueur en cours) et 'publicBoard' (joueur adverse)
  // -> utiliser 'publicBoard' affiche le brouillard de guerre, 'privateBoard' affiche la position des navires

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLCtHQUErRyxrQkFBa0I7QUFDakk7QUFDQSw2Q0FBNkMsNkJBQTZCLDBDQUEwQyxjQUFjLGtCQUFrQixzQkFBc0Isb0JBQW9CLDhCQUE4QixtQkFBbUIsd0NBQXdDLHNCQUFzQiw0Q0FBNEMsc0JBQXNCLHNCQUFzQiw0QkFBNEIsbUJBQW1CLDhDQUE4QyxxQkFBcUIsMEJBQTBCLHdDQUF3QyxvQkFBb0IsNkNBQTZDLDRDQUE0Qyw4REFBOEQscUJBQXFCLG9CQUFvQiwrQ0FBK0MscURBQXFELDJCQUEyQixtQkFBbUIsa0JBQWtCLDhCQUE4QixnQ0FBZ0MseUJBQXlCLDZCQUE2Qix3QkFBd0IsK0JBQStCLCtCQUErQiwwQkFBMEIsNEJBQTRCLG1EQUFtRCxnQ0FBZ0MscURBQXFELHdCQUF3QixpREFBaUQsNEJBQTRCLG1EQUFtRCxzQkFBc0Isb0JBQW9CLDZCQUE2Qiw0QkFBNEIsK0JBQStCLDBCQUEwQiwyQkFBMkIsbUJBQW1CLG9CQUFvQixzQkFBc0IsYUFBYSxjQUFjLG9CQUFvQixtQkFBbUIscURBQXFELDBCQUEwQixvQkFBb0Isc0JBQXNCLGVBQWUsZ0JBQWdCLHVDQUF1Qyw4QkFBOEIsNkJBQTZCLGlCQUFpQixzQkFBc0Isd0RBQXdELDZHQUE2RyxZQUFZLG1CQUFtQixNQUFNLGdCQUFnQixLQUFLLFVBQVUsWUFBWSxpQkFBaUIsS0FBSyxlQUFlLEtBQUssVUFBVSxVQUFVLFlBQVksZ0JBQWdCLEtBQUssVUFBVSxnQkFBZ0IsTUFBTSxVQUFVLFlBQVksa0JBQWtCLE1BQU0sVUFBVSxVQUFVLFlBQVksbUJBQW1CLE1BQU0sVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsZ0JBQWdCLEtBQUssWUFBWSxpQkFBaUIsTUFBTSxpQkFBaUIsTUFBTSxrQkFBa0IsTUFBTSxpQkFBaUIsTUFBTSxrQkFBa0IsTUFBTSxVQUFVLFlBQVksa0JBQWtCLE1BQU0sWUFBWSxtQkFBbUIsTUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxrQkFBa0IsTUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsZ0JBQWdCLDhCQUE4QjtBQUM5Z0c7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUNSMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRDtBQUNyRDtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQSxxRkFBcUY7QUFDckY7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIscUJBQXFCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3BGYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBLE1BQStGO0FBQy9GLE1BQXFGO0FBQ3JGLE1BQTRGO0FBQzVGLE1BQStHO0FBQy9HLE1BQXdHO0FBQ3hHLE1BQXdHO0FBQ3hHLE1BQW1HO0FBQ25HO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsc0ZBQU87Ozs7QUFJNkM7QUFDckUsT0FBTyxpRUFBZSxzRkFBTyxJQUFJLDZGQUFjLEdBQUcsNkZBQWMsWUFBWSxFQUFDOzs7Ozs7Ozs7OztBQzFCaEU7O0FBRWI7O0FBRUE7QUFDQTs7QUFFQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxxQkFBcUIsNkJBQTZCO0FBQ2xEOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3ZHYTs7QUFFYjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzREFBc0Q7O0FBRXREO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUN0Q2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNWYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7O0FBRWpGO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDWGE7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0RBQWtEO0FBQ2xEOztBQUVBO0FBQ0EsMENBQTBDO0FBQzFDOztBQUVBOztBQUVBO0FBQ0EsaUZBQWlGO0FBQ2pGOztBQUVBOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBOztBQUVBO0FBQ0EseURBQXlEO0FBQ3pELElBQUk7O0FBRUo7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3JFYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7QUNmaUM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUixzQkFBc0IsOENBQUk7QUFDMUI7QUFDQTtBQUNBLDBCQUEwQixVQUFVO0FBQ3BDO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsMEJBQTBCLFVBQVU7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLFVBQVUsT0FBTztBQUN6QztBQUNBO0FBQ0EsUUFBUTtBQUNSLHdCQUF3QixVQUFVO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDBCQUEwQjtBQUMvQztBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDL0hBO0FBQ0Esd0NBQXdDLGtCQUFrQjtBQUMxRCw2Q0FBNkMsS0FBSztBQUNsRDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDSndDO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLHFEQUFTO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3BDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztVQ2hCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUNZO0FBQ087QUFDTjtBQUNtQjtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQWlELE1BQU07QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtELE1BQU07QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLCtDQUFNO0FBQ2xCLFlBQVksK0NBQU07QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLHlCQUF5QjtBQUMzRCw2REFBNkQsVUFBVSxFQUFFLEVBQUU7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsVUFBVTtBQUNWO0FBQ0Esb0NBQW9DLFFBQVE7QUFDNUMsK0RBQStELFVBQVUsRUFBRSxFQUFFO0FBQzdFO0FBQ0E7QUFDQSxZQUFZO0FBQ1osb0NBQW9DLHNCQUFzQjtBQUMxRCwrREFBK0QsVUFBVSxFQUFFLEVBQUU7QUFDN0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsT0FBTztBQUNQLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLHFCQUFxQjtBQUNwRCw2REFBNkQsU0FBUyxFQUFFLEVBQUUsRUFBRSxVQUFVO0FBQ3RGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYLFVBQVU7QUFDVjtBQUNBLGlDQUFpQyxRQUFRO0FBQ3pDLCtEQUErRCxTQUFTLEVBQUUsRUFBRSxFQUFFLFVBQVU7QUFDeEY7QUFDQTtBQUNBLFlBQVk7QUFDWixpQ0FBaUMsbUJBQW1CO0FBQ3BELCtEQUErRCxTQUFTLEVBQUUsRUFBRSxFQUFFLFVBQVU7QUFDeEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRCxZQUFZO0FBQzlELGtEQUFrRCxZQUFZO0FBQzlEO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLFFBQVE7QUFDMUIsb0JBQW9CLFFBQVE7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLEVBQUUsRUFBRSxFQUFFO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLFFBQVE7QUFDMUIsb0JBQW9CLFFBQVE7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBLGdDQUFnQyxFQUFFLEVBQUUsRUFBRTtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkRBQTJELG1CQUFtQixjQUFjLG1CQUFtQjtBQUMvRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxldHRlLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGV0dGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXR0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXR0ZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9iYXR0bGV0dGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxldHRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGV0dGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxldHRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXR0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXR0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXR0ZS8uL3NyYy9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxldHRlLy4vc3JjL3BsYWNlU2hpcE1vZGFsLmpzIiwid2VicGFjazovL2JhdHRsZXR0ZS8uL3NyYy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxldHRlLy4vc3JjL3NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxldHRlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXR0ZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGV0dGUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXR0ZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXR0ZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXR0ZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vYmF0dGxldHRlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvOndnaHRANDAwOzcwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7IH1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIG1hcmdpbjogMDsgfVxcclxcblxcclxcbi5iYXR0bGVmaWVsZCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBnYXA6IDE1MHB4OyB9XFxyXFxuXFxyXFxuI3BsYXllcjEtc2hpcHMsICNwbGF5ZXIyLXNoaXBzIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7IH1cXHJcXG4gICNwbGF5ZXIxLXNoaXBzIGxpLCAjcGxheWVyMi1zaGlwcyBsaSB7XFxyXFxuICAgIG1hcmdpbjogOHB4IDA7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdhcDogOHB4OyB9XFxyXFxuICAjcGxheWVyMS1zaGlwcyBpbWcsICNwbGF5ZXIyLXNoaXBzIGltZyB7XFxyXFxuICAgIGhlaWdodDogMXJlbTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyOyB9XFxyXFxuXFxyXFxuI3BsYXllcjEtYm9hcmQsICNwbGF5ZXIyLWJvYXJkIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpOyB9XFxyXFxuICAjcGxheWVyMS1ib2FyZCAuZW1wdHktY2VsbCwgI3BsYXllcjItYm9hcmQgLmVtcHR5LWNlbGwge1xcclxcbiAgICBoZWlnaHQ6IDQwcHg7XFxyXFxuICAgIHdpZHRoOiA0MHB4O1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuNDQ1KTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMTIsIDIxMiwgMjEyLCAwLjMpOyB9XFxyXFxuXFxyXFxuW2NsYXNzXj1cXFwiY2VsbFxcXCJdIHtcXHJcXG4gIGhlaWdodDogNDBweDtcXHJcXG4gIHdpZHRoOiA0MHB4O1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDRkNGQ0O1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXHJcXG4gIGZvbnQtc2l6ZTogMnJlbTsgfVxcclxcbiAgW2NsYXNzXj1cXFwiY2VsbFxcXCJdOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyOyB9XFxyXFxuXFxyXFxuLnBsYWNpbmctc2hpcC1jZWxsIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDAsIDAuMzM0KTsgfVxcclxcbiAgLnBsYWNpbmctc2hpcC1jZWxsOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMCwgMC4zMzQpOyB9XFxyXFxuXFxyXFxuLnBsYWNpbmctZXJyb3Ige1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDAsIDAsIDAuNDIzKTsgfVxcclxcbiAgLnBsYWNpbmctZXJyb3I6aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMCwgMCwgMC40MjMpOyB9XFxyXFxuXFxyXFxuLmJhdHRsZS1pbmZvIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxcclxcbiAgLmJhdHRsZS1pbmZvIC50dXJuLWluZm8ge1xcclxcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDsgfVxcclxcblxcclxcbi5iYWNrZHJvcCB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIGhlaWdodDogMTAwdmg7XFxyXFxuICB3aWR0aDogMTAwdnc7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIxMSwgMjExLCAyMTEsIDAuNTY0KTsgfVxcclxcblxcclxcbi5nYW1lLW92ZXJfbW9kYWwge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHRvcDogNTAlO1xcclxcbiAgbGVmdDogNTAlO1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XFxyXFxuICB6LWluZGV4OiAzO1xcclxcbiAgcGFkZGluZzogM3JlbTsgfVxcclxcblxcclxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPXN0eWxlLmNzcy5tYXAgKi9cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNFLHNCQUFzQjtFQUN0QixpQ0FBaUMsRUFBQTs7QUFHbkM7RUFDRSxTQUFTLEVBQUE7O0FBR1g7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLFVBQVUsRUFBQTs7QUFHWjtFQUNFLGFBQWEsRUFBQTtFQUViO0lBQ0UsYUFBYTtJQUNiLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsUUFBUSxFQUFBO0VBR1Y7SUFDRSxZQUFZO0lBQ1osZUFBZSxFQUFBOztBQUluQjtFQUNFLGFBQWE7RUFDYixzQ0FBc0M7RUFDdEMsbUNBQW1DLEVBQUE7RUFFbkM7SUFDRSxZQUFZO0lBQ1osV0FBVztJQUNYLHNDQUFzQztJQUN0QywwQ0FBMEMsRUFBQTs7QUFJOUM7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLHVCQUF1QjtFQUN2Qix5QkFBb0M7RUFDcEMsa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixlQUFlLEVBQUE7RUFFZjtJQUNFLHNCQUFzQjtJQUN0QixlQUFlLEVBQUE7O0FBTW5CO0VBQ0UsMENBQTBDLEVBQUE7RUFFMUM7SUFDRSwwQ0FBMEMsRUFBQTs7QUFJOUM7RUFDRSx3Q0FBd0MsRUFBQTtFQUV4QztJQUNFLHdDQUF3QyxFQUFBOztBQUk1QztFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CLEVBQUE7RUFFbkI7SUFDRSxpQkFBaUI7SUFDakIsZ0JBQWdCLEVBQUE7O0FBS3BCO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZixNQUFNO0VBQ04sT0FBTztFQUNQLGFBQWE7RUFDYixZQUFZO0VBQ1osNENBQTRDLEVBQUE7O0FBRzlDO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZixRQUFRO0VBQ1IsU0FBUztFQUNULGdDQUFnQztFQUNoQyx1QkFBdUI7RUFDdkIsc0JBQXNCO0VBQ3RCLFVBQVU7RUFDVixhQUFhLEVBQUE7O0FDMUJmLG9DQUFvQ1wiLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgU2hpcCB9IGZyb20gJy4vc2hpcC5qcyc7XHJcblxyXG5cclxuY29uc3QgR2FtZWJvYXJkID0gKCkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICBwcml2YXRlQm9hcmQ6IFtcclxuICAgICAgWywsLCwsLCwsLF0sXHJcbiAgICAgIFssLCwsLCwsLCxdLFxyXG4gICAgICBbLCwsLCwsLCwsXSxcclxuICAgICAgWywsLCwsLCwsLF0sXHJcbiAgICAgIFssLCwsLCwsLCxdLFxyXG4gICAgICBbLCwsLCwsLCwsXSxcclxuICAgICAgWywsLCwsLCwsLF0sXHJcbiAgICAgIFssLCwsLCwsLCxdLFxyXG4gICAgICBbLCwsLCwsLCwsXSxcclxuICAgICAgWywsLCwsLCwsLF0sXHJcbiAgICBdLFxyXG5cclxuICAgIHB1YmxpY0JvYXJkOiBbXHJcbiAgICAgIFssLCwsLCwsLCxdLFxyXG4gICAgICBbLCwsLCwsLCwsXSxcclxuICAgICAgWywsLCwsLCwsLF0sXHJcbiAgICAgIFssLCwsLCwsLCxdLFxyXG4gICAgICBbLCwsLCwsLCwsXSxcclxuICAgICAgWywsLCwsLCwsLF0sXHJcbiAgICAgIFssLCwsLCwsLCxdLFxyXG4gICAgICBbLCwsLCwsLCwsXSxcclxuICAgICAgWywsLCwsLCwsLF0sXHJcbiAgICAgIFssLCwsLCwsLCxdLFxyXG4gICAgXSxcclxuICAgIFxyXG4gICAgc2hpcExpc3Q6IFtdLFxyXG5cclxuICAgIHBsYWNlU2hpcDogZnVuY3Rpb24gKHNpemUsIHN0YXJ0UG9zLCBzaGlwTmFtZSA9ICdVbm5hbWVkIHNoaXAnLCBkaXJlY3Rpb24gPSAnaG9yJykge1xyXG4gICAgICBpZiAoIXRoaXMuaXNWYWxpZChzaXplLCBzdGFydFBvcywgZGlyZWN0aW9uKSkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignQ2Fubm90IHBsYWNlIHNoaXA6IG91dCBvZiBib3VuZHMgb3Igc3BhY2UgYWxyZWFkeSBvY2N1cGllZC4nKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBsZXQgbmV3U2hpcCA9IFNoaXAoc2l6ZSwgc2hpcE5hbWUpO1xyXG4gICAgICAgIHRoaXMuc2hpcExpc3QucHVzaChuZXdTaGlwKTtcclxuICAgICAgICBpZiAoZGlyZWN0aW9uID09PSAnaG9yJykge1xyXG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaXplOyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5wcml2YXRlQm9hcmRbc3RhcnRQb3NbMF1dW3N0YXJ0UG9zWzFdICsgaV0gPSBzaGlwTmFtZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gJ3ZlcicpIHtcclxuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2l6ZTsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMucHJpdmF0ZUJvYXJkW3N0YXJ0UG9zWzBdICsgaV1bc3RhcnRQb3NbMV1dID0gc2hpcE5hbWU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIGNvbXB1dGVyUGxhY2VTaGlwOiBmdW5jdGlvbiAoc2l6ZSwgc2hpcE5hbWUpIHtcclxuICAgICAgbGV0IHJuZFBvcyA9IFtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCksIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKV07XHJcbiAgICAgIGxldCBybmREaXJlY3Rpb24gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyKTtcclxuICAgICAgc3dpdGNoIChybmREaXJlY3Rpb24pIHtcclxuICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICBybmREaXJlY3Rpb24gPSAnaG9yJztcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgMTpcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgcm5kRGlyZWN0aW9uID0gJ3Zlcic7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG5cclxuICAgICAgd2hpbGUgKCF0aGlzLmlzVmFsaWQoc2l6ZSwgcm5kUG9zLCBybmREaXJlY3Rpb24pKSB7XHJcbiAgICAgICAgcm5kUG9zID0gW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKSwgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApXTtcclxuICAgICAgICBybmREaXJlY3Rpb24gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyKTtcclxuICAgICAgICBzd2l0Y2ggKHJuZERpcmVjdGlvbikge1xyXG4gICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICBybmREaXJlY3Rpb24gPSAnaG9yJztcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICBybmREaXJlY3Rpb24gPSAndmVyJztcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHRoaXMucGxhY2VTaGlwKHNpemUsIHJuZFBvcywgc2hpcE5hbWUsIHJuZERpcmVjdGlvbik7XHJcbiAgICB9LFxyXG5cclxuICAgIGlzVmFsaWQ6IGZ1bmN0aW9uIChzaXplLCBzdGFydFBvcywgZGlyZWN0aW9uID0gJ2hvcicpIHtcclxuICAgICAgbGV0IHNpemVDaGVjayA9IHRydWU7XHJcbiAgICAgIGxldCBhdmFpbGFibGVDaGVjayA9IHRydWU7XHJcbiAgICAgIGlmIChkaXJlY3Rpb24gPT09ICdob3InICYmICgoc3RhcnRQb3NbMV0gKyBzaXplIC0gMSkgPiA5KSkge1xyXG4gICAgICAgIHNpemVDaGVjayA9IGZhbHNlO1xyXG4gICAgICB9IGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gJ3ZlcicgJiYgKChzdGFydFBvc1swXSArIHNpemUgLSAxKSA+IDkpKSB7XHJcbiAgICAgICAgc2l6ZUNoZWNrID0gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgICAgbGV0IHRhcmdldEFyciA9IFtdO1xyXG4gICAgICBpZiAoZGlyZWN0aW9uID09PSAnaG9yJykge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2l6ZTsgaSsrKSB7IC8vIGNoZWNrIGlmIGhvcml6b250YWwgcGxhY2VtZW50IGlzIGVtcHR5XHJcbiAgICAgICAgICB0YXJnZXRBcnIucHVzaCh0aGlzLnByaXZhdGVCb2FyZFtzdGFydFBvc1swXV1bc3RhcnRQb3NbMV0gKyBpXSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSBpZiAoc2l6ZUNoZWNrID09PSB0cnVlICYmIGRpcmVjdGlvbiA9PT0gJ3ZlcicpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNpemU7IGkrKykge1xyXG4gICAgICAgICAgdGFyZ2V0QXJyLnB1c2godGhpcy5wcml2YXRlQm9hcmRbc3RhcnRQb3NbMF0gKyBpXVtzdGFydFBvc1sxXV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBhdmFpbGFibGVDaGVjayA9IHRhcmdldEFyci5ldmVyeShlbCA9PiBlbCA9PT0gdW5kZWZpbmVkKTtcclxuICAgICAgLy9jb25zb2xlLmxvZyh7c2l6ZUNoZWNrLCBhdmFpbGFibGVDaGVja30pO1xyXG4gICAgICByZXR1cm4gKHNpemVDaGVjayAmJiBhdmFpbGFibGVDaGVjayk7XHJcbiAgICAgIH0sXHJcblxyXG4gICAgcmVjZWl2ZUF0dGFjazogZnVuY3Rpb24gKHRhcmdldFBvcykge1xyXG4gICAgIGlmICh0aGlzLnByaXZhdGVCb2FyZFt0YXJnZXRQb3NbMF1dW3RhcmdldFBvc1sxXV0gPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICB0aGlzLnByaXZhdGVCb2FyZFt0YXJnZXRQb3NbMF1dW3RhcmdldFBvc1sxXV0gPSAnfic7XHJcbiAgICAgIHJldHVybiAnWW91IG1pc3NlZCc7XHJcbiAgICAgfSBlbHNlIGlmICh0aGlzLnByaXZhdGVCb2FyZFt0YXJnZXRQb3NbMF1dW3RhcmdldFBvc1sxXV0gPT09ICd+JyB8fCB0aGlzLnByaXZhdGVCb2FyZFt0YXJnZXRQb3NbMF1dW3RhcmdldFBvc1sxXV0gPT09ICdYJykge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1lvdSBjYW5ub3QgYXR0YWNrIHRoZSBzYW1lIHNwb3QgdHdpY2UnKTtcclxuICAgICB9IGVsc2Uge1xyXG4gICAgICBsZXQgdGFyZ2V0ID0gdGhpcy5zaGlwTGlzdC5maW5kKGVsID0+IGVsLm5hbWUgPT09IHRoaXMucHJpdmF0ZUJvYXJkW3RhcmdldFBvc1swXV1bdGFyZ2V0UG9zWzFdXSk7XHJcbiAgICAgIHRhcmdldC5oaXRzKys7XHJcbiAgICAgIHRoaXMucHJpdmF0ZUJvYXJkW3RhcmdldFBvc1swXV1bdGFyZ2V0UG9zWzFdXSA9ICdYJztcclxuICAgICAgaWYgKHRhcmdldC5pc1N1bmsoKSkge1xyXG4gICAgICAgIHJldHVybiAnVGhlIHNoaXAgaGFzIHN1bmsnO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gdGFyZ2V0Lm5hbWUgKyAnIGhhcyBiZWVuIGhpdCwgJyArICh0YXJnZXQuc2l6ZSAtIHRhcmdldC5oaXRzKSArJyBoaXQocykgbGVmdCc7XHJcbiAgICAgIH1cclxuICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIGdldFN0YXR1czogZnVuY3Rpb24oKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnNoaXBMaXN0LmV2ZXJ5KGVsID0+IGVsLmlzU3VuaygpKTtcclxuICAgIH0sXHJcblxyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgeyBHYW1lYm9hcmQgfTsiLCJmdW5jdGlvbiBHZW5lcmF0ZVNoaXBNb2RhbCAocGxheWVyLCBzaGlwKSB7XHJcbiAgcmV0dXJuIGA8ZGl2IGlkPVwic2hpcC1tb2RhbF9wbGF5ZXJcIj4ke3BsYXllci5wbGF5ZXJOYW1lfTwvZGl2PlxyXG4gIDxwPlBsYWNlIHlvdXIgPHNwYW4gaWQ9XCJzaGlwLW1vZGFsX3NoaXBcIj4ke3NoaXB9PC9zcGFuPjwvcD5gO1xyXG59XHJcblxyXG5leHBvcnQgeyBHZW5lcmF0ZVNoaXBNb2RhbCB9OyIsImltcG9ydCB7IEdhbWVib2FyZCB9IGZyb20gXCIuL2dhbWVib2FyZFwiO1xyXG5cclxuY29uc3QgUGxheWVyID0gKG5hbWUpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgcGxheWVyTmFtZTogbmFtZSxcclxuXHJcbiAgICBnYW1lYm9hcmQ6IEdhbWVib2FyZCgpLFxyXG5cclxuICAgIGF0dGFjazogZnVuY3Rpb24gKHBsYXllciwgeCwgeSkge1xyXG4gICAgICBwbGF5ZXIuZ2FtZWJvYXJkLnJlY2VpdmVBdHRhY2soW3gsIHldKTtcclxuICAgIH0sXHJcblxyXG4gICAgY29tcHV0ZXJBdHRhY2s6IGZ1bmN0aW9uIChwbGF5ZXIpIHtcclxuICAgICAgbGV0IGNvb3JkID0gZmluZFZhbGlkTW92ZShwbGF5ZXIuZ2FtZWJvYXJkLnByaXZhdGVCb2FyZCk7XHJcbiAgICAgIHRoaXMuYXR0YWNrKHBsYXllciwgY29vcmRbMF0sIGNvb3JkWzFdKTtcclxuICAgIH0sXHJcblxyXG4gICAgc2NvcmU6IDAsXHJcbiAgfTtcclxufTtcclxuXHJcbmZ1bmN0aW9uIHJuZENvb3JkaW5hdGVzICgpIHtcclxuICBsZXQgeCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcclxuICBsZXQgeSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcclxuICByZXR1cm4gW1t4XSxbeV1dO1xyXG59XHJcblxyXG5mdW5jdGlvbiBmaW5kVmFsaWRNb3ZlIChib2FyZCkge1xyXG4gIC8vIEdlbmVyYXRlIHR3byByYW5kb20gbnVtYmVyIGJldHdlZW4gMC05XHJcbiAgbGV0IGNvb3JkaW5hdGVzID0gcm5kQ29vcmRpbmF0ZXMoKTtcclxuICAvLyBjb250aW51ZSB3aGlsZSB0aGUgbW92ZSBpcyBpbnZhbGlkLCBsYXVuY2ggYXR0YWNrIHdoZW4gZmluZGluZyBhIHZhbGlkIG1vdmVcclxuICB3aGlsZSAoYm9hcmRbY29vcmRpbmF0ZXNbMF1dW2Nvb3JkaW5hdGVzWzFdXSA9PT0gJ1gnIHx8IGJvYXJkW2Nvb3JkaW5hdGVzWzBdXVtjb29yZGluYXRlc1sxXV0gPT09ICd+Jykge1xyXG4gICAgY29vcmRpbmF0ZXMgPSBybmRDb29yZGluYXRlcygpO1xyXG4gIH1cclxuICByZXR1cm4gY29vcmRpbmF0ZXM7XHJcbn1cclxuXHJcbmV4cG9ydCB7IFBsYXllciB9OyIsImNvbnN0IFNoaXAgPSAoc2l6ZSwgbmFtZSA9ICdVbm5hbWVkIHNoaXAnLCBpZCA9IHVuZGVmaW5lZCkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICBuYW1lLFxyXG4gICAgc2l6ZSxcclxuICAgIGhpdHM6IDAsXHJcbiAgICBoaXQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgICB0aGlzLmhpdHMrKztcclxuICAgIH0sXHJcblxyXG4gICAgaXNTdW5rOiBmdW5jdGlvbigpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuaGl0cyA+PSB0aGlzLnNpemUgPyB0cnVlIDogZmFsc2U7XHJcbiAgICB9LFxyXG5cclxuICAgIGlkLFxyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgeyBTaGlwIH07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcbmltcG9ydCB7IFNoaXAgfSBmcm9tICcuL3NoaXAuanMnO1xyXG5pbXBvcnQgeyBHYW1lYm9hcmQgfSBmcm9tICcuL2dhbWVib2FyZCc7XHJcbmltcG9ydCB7IFBsYXllciB9IGZyb20gJy4vcGxheWVyJztcclxuaW1wb3J0IHsgR2VuZXJhdGVTaGlwTW9kYWwgfSBmcm9tICcuL3BsYWNlU2hpcE1vZGFsJztcclxuXHJcbi8vIEdvYmFsIHZhcmlhYmxlc1xyXG5sZXQgcGxheWVyMTtcclxubGV0IHBsYXllcjI7XHJcbmxldCBwMUNlbGxzO1xyXG5sZXQgcDJDZWxscztcclxubGV0IGN1cnJlbnRQbGF5ZXIgPSAncGxheWVyMSc7XHJcblxyXG4vLyBET00gRWxlbWVudHNcclxuY29uc3QgbmV3X2dhbWVfYnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ldy1nYW1lX2J1dHRvbicpO1xyXG5jb25zdCBzdGFydF9nYW1lX2J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGFydC1nYW1lX2J1dHRvbicpO1xyXG5cclxuY29uc3QgcGxheWVyMV9ib2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGF5ZXIxLWJvYXJkJyk7XHJcbmNvbnN0IHBsYXllcjJfYm9hcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxheWVyMi1ib2FyZCcpO1xyXG5jb25zdCBwbGF5ZXIxX3NoaXBzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYXllcjEtc2hpcHMnKTtcclxuY29uc3QgcGxheWVyMV9sb2cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxheWVyMS1sb2cnKTtcclxuY29uc3QgcGxheWVyMl9sb2cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxheWVyMi1sb2cnKTtcclxuY29uc3QgdHVybl9pbmZvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnR1cm4taW5mbycpO1xyXG5cclxuXHJcbi8vIE1vZGFscyBkaXNwbGF5XHJcblxyXG5jb25zdCBjbG9zZU1vZGFsQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNsb3NlLW1vZGFsX2J1dHRvbicpO1xyXG5jbG9zZU1vZGFsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gQ2xvc2VNb2RhbCgnZ2FtZS1vdmVyX21vZGFsJykpO1xyXG5cclxuZnVuY3Rpb24gT3Blbk1vZGFsKG1vZGFsKSB7XHJcbiAgY29uc3QgYmFja2Ryb3AgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmFja2Ryb3AnKTtcclxuICBiYWNrZHJvcC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICBiYWNrZHJvcC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IENsb3NlTW9kYWwobW9kYWwpKTtcclxuICBjb25zdCBtb2RhbFRvT3BlbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke21vZGFsfWApO1xyXG4gIG1vZGFsVG9PcGVuLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG59XHJcblxyXG5mdW5jdGlvbiBDbG9zZU1vZGFsKG1vZGFsKSB7XHJcbiAgY29uc3QgYmFja2Ryb3AgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmFja2Ryb3AnKTtcclxuICBiYWNrZHJvcC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gIGNvbnN0IG1vZGFsVG9DbG9zZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke21vZGFsfWApO1xyXG4gIG1vZGFsVG9DbG9zZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG59XHJcblxyXG4vLyBJbml0aWFsaXplIGdhbWUgZnVuY3Rpb25zXHJcbm5ld19nYW1lX2J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICBJbml0aWFsaXplR2FtZSgpO1xyXG4gIHBsYWNlbWVudFBoYXNlKCk7XHJcbn0pO1xyXG5cclxuc3RhcnRfZ2FtZV9idXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBTdGFydEdhbWUoKSk7XHJcblxyXG5mdW5jdGlvbiBJbml0aWFsaXplR2FtZSgpIHtcclxuICBwbGF5ZXIxID0gUGxheWVyKCdUaG9tYXMnKTtcclxuICBwbGF5ZXIyID0gUGxheWVyKCdDb21wdXRlcicpO1xyXG4gIHBsYXllcjFfc2hpcHMuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgcDFDZWxscyA9IFBvcHVsYXRlUDEoKTtcclxuICBwMkNlbGxzID0gUG9wdWxhdGVQMigpO1xyXG59XHJcbmZ1bmN0aW9uIENvbXB1dGVyUGxhY2VTaGlwcyAoKSB7XHJcbiAgcGxheWVyMi5nYW1lYm9hcmQuY29tcHV0ZXJQbGFjZVNoaXAoNSwgJ0NhcnJpZXInKTtcclxuICBwbGF5ZXIyLmdhbWVib2FyZC5jb21wdXRlclBsYWNlU2hpcCg0LCAnQmF0dGxlc2hpcCcpO1xyXG4gIHBsYXllcjIuZ2FtZWJvYXJkLmNvbXB1dGVyUGxhY2VTaGlwKDMsICdDcnVpc2VyJyk7XHJcbiAgcGxheWVyMi5nYW1lYm9hcmQuY29tcHV0ZXJQbGFjZVNoaXAoMywgJ1N1Ym1hcmluZScpO1xyXG4gIHBsYXllcjIuZ2FtZWJvYXJkLmNvbXB1dGVyUGxhY2VTaGlwKDIsICdEZXN0cm95ZXInKTtcclxufVxyXG5cclxuZnVuY3Rpb24gUGxheWVyMVBsYWNlU2hpcHMgKCkge1xyXG4gIGNvbnN0IHAxQ2FycmllckhvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wMS1jYXJyaWVyID4gLmhvcicpO1xyXG4gIGNvbnN0IHAxQ2FycmllclZlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wMS1jYXJyaWVyID4gLnZlcicpO1xyXG4gIHAxQ2Fycmllckhvci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IEFjdGl2YXRlUGxhY2VtZW50KHBsYXllcjEsIHAxQ2VsbHMsIDUsICdDYXJyaWVyJywgJy5wMS1jYXJyaWVyJykpO1xyXG4gIHAxQ2FycmllclZlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IEFjdGl2YXRlUGxhY2VtZW50KHBsYXllcjEsIHAxQ2VsbHMsIDUsICdDYXJyaWVyJywgJy5wMS1jYXJyaWVyJywgJ3ZlcicpKTtcclxuICBjb25zdCBwMUJhdHRsZXNoaXBIb3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucDEtYmF0dGxlc2hpcCA+IC5ob3InKTtcclxuICBjb25zdCBwMUJhdHRsZXNoaXBWZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucDEtYmF0dGxlc2hpcCA+IC52ZXInKTtcclxuICBwMUJhdHRsZXNoaXBIb3IuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBBY3RpdmF0ZVBsYWNlbWVudChwbGF5ZXIxLCBwMUNlbGxzLCA0LCAnQmF0dGxlc2hpcCcsICcucDEtYmF0dGxlc2hpcCcpKTtcclxuICBwMUJhdHRsZXNoaXBWZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBBY3RpdmF0ZVBsYWNlbWVudChwbGF5ZXIxLCBwMUNlbGxzLCA0LCAnQmF0dGxlc2hpcCcsICcucDEtYmF0dGxlc2hpcCcsICd2ZXInKSk7XHJcbiAgY29uc3QgcDFDcnVpc2VySG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnAxLWNydWlzZXIgPiAuaG9yJyk7XHJcbiAgY29uc3QgcDFDcnVpc2VyVmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnAxLWNydWlzZXIgPiAudmVyJyk7XHJcbiAgcDFDcnVpc2VySG9yLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gQWN0aXZhdGVQbGFjZW1lbnQocGxheWVyMSwgcDFDZWxscywgMywgJ0NydWlzZXInLCAnLnAxLWNydWlzZXInKSk7XHJcbiAgcDFDcnVpc2VyVmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gQWN0aXZhdGVQbGFjZW1lbnQocGxheWVyMSwgcDFDZWxscywgMywgJ0NydWlzZXInLCAnLnAxLWNydWlzZXInLCAndmVyJykpO1xyXG4gIGNvbnN0IHAxU3VibWFyaW5lSG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnAxLXN1Ym1hcmluZSA+IC5ob3InKTtcclxuICBjb25zdCBwMVN1Ym1hcmluZVZlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wMS1zdWJtYXJpbmUgPiAudmVyJyk7XHJcbiAgcDFTdWJtYXJpbmVIb3IuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBBY3RpdmF0ZVBsYWNlbWVudChwbGF5ZXIxLCBwMUNlbGxzLCAzLCAnU3VibWFyaW5lJywgJy5wMS1zdWJtYXJpbmUnKSk7XHJcbiAgcDFTdWJtYXJpbmVWZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBBY3RpdmF0ZVBsYWNlbWVudChwbGF5ZXIxLCBwMUNlbGxzLCAzLCAnU3VibWFyaW5lJywgJy5wMS1zdWJtYXJpbmUnLCAndmVyJykpO1xyXG4gIGNvbnN0IHAxRGVzdHJveWVySG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnAxLWRlc3Ryb3llciA+IC5ob3InKTtcclxuICBjb25zdCBwMURlc3Ryb3llclZlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wMS1kZXN0cm95ZXIgPiAudmVyJyk7XHJcbiAgcDFEZXN0cm95ZXJIb3IuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBBY3RpdmF0ZVBsYWNlbWVudChwbGF5ZXIxLCBwMUNlbGxzLCAyLCAnRGVzdHJveWVyJywgJy5wMS1kZXN0cm95ZXInKSk7XHJcbiAgcDFEZXN0cm95ZXJWZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBBY3RpdmF0ZVBsYWNlbWVudChwbGF5ZXIxLCBwMUNlbGxzLCAyLCAnRGVzdHJveWVyJywgJy5wMS1kZXN0cm95ZXInLCAndmVyJykpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBwbGFjZW1lbnRQaGFzZSAoKSB7XHJcbiAgQ29tcHV0ZXJQbGFjZVNoaXBzKCk7XHJcbiAgUGxheWVyMVBsYWNlU2hpcHMoKTtcclxufVxyXG5cclxuLy8gQWN0aXZhdGUgY2xpY2sgb24gb3duIGJvYXJkIHRvIHBsYWNlIHNoaXBzXHJcbmZ1bmN0aW9uIEFjdGl2YXRlUGxhY2VtZW50IChwbGF5ZXIsIGNlbGxzQXJyLCBzaXplLCBzaGlwTmFtZSwgZG9tRWxlbWVudCwgb3JpZW50YXRpb24gPSAnaG9yJykgeyAgXHJcbiAgLy8gQ2hlY2sgaWYgdGhlIHNoaXAgaGFzIGFscmVhZHkgYmVlbiBwbGFjZWQsIGlmIHllcyB0aGVuIHRoZSBmdW5jdGlvbiByZXR1cm5zIGFuIGVycm9yXHJcbiAgbGV0IHBsYWNlZFNoaXAgPSBwbGF5ZXIuZ2FtZWJvYXJkLnNoaXBMaXN0LmZpbmQoZWwgPT4gZWwubmFtZSA9PT0gc2hpcE5hbWUpO1xyXG4gIGlmIChwbGFjZWRTaGlwKSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoaXMgc2hpcCBpcyBhbHJlYWR5IGluIHBsYWNlLicpO1xyXG4gIFxyXG4gIH0gZWxzZSB7XHJcbiAgLy8gRGlzcGxheSBzaGlwIHNpemUgb3ZlcmxheSBvbiBob3ZlclxyXG4gIGxldCBjb2xvcmVkQ2VsbDtcclxuICBjZWxsc0Fyci5mb3JFYWNoKGVsID0+IHtcclxuICAgIGlmIChvcmllbnRhdGlvbiA9PT0gJ2hvcicpIHtcclxuICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgKCkgPT4geyAgICBcclxuICAgICAgICBjb25zdCBzdGFydGluZ1kgPSBlbC5jbGFzc05hbWUuc2xpY2UoMCw3KTtcclxuICAgICAgICBjb25zdCBzdGFydGluZ1ggPSArZWwuY2xhc3NOYW1lLnNsaWNlKDcsOCk7XHJcbiAgICAgICAgaWYgKHBsYXllci5nYW1lYm9hcmQuaXNWYWxpZChzaXplLCBbK3N0YXJ0aW5nWS5zbGljZSgtMSksIHN0YXJ0aW5nWF0pKSB7XHJcbiAgICAgICAgICBmb3IgKGxldCBpID0gc3RhcnRpbmdYOyBpIDwgKCtzdGFydGluZ1ggKyBzaXplKTsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbG9yZWRDZWxsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShgJHtzdGFydGluZ1l9JHtpfWApWzBdO1xyXG4gICAgICAgICAgICBjb2xvcmVkQ2VsbC5jbGFzc0xpc3QuYWRkKCdwbGFjaW5nLXNoaXAtY2VsbCcpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBjZWxsc0Fyci5mb3JFYWNoKGVsID0+IGVsLmNsYXNzTGlzdC5yZW1vdmUoJ3BsYWNpbmctc2hpcC1jZWxsJykpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGlmIChzdGFydGluZ1ggKyBzaXplID4gMTApIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IHN0YXJ0aW5nWDsgaSA8IDEwOyBpKyspIHtcclxuICAgICAgICAgICAgICBjb2xvcmVkQ2VsbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoYCR7c3RhcnRpbmdZfSR7aX1gKVswXTtcclxuICAgICAgICAgICAgICBjb2xvcmVkQ2VsbC5jbGFzc0xpc3QuYWRkKCdwbGFjaW5nLWVycm9yJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSBzdGFydGluZ1g7IGkgPCBzdGFydGluZ1ggKyBzaXplOyBpKyspIHtcclxuICAgICAgICAgICAgICBjb2xvcmVkQ2VsbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoYCR7c3RhcnRpbmdZfSR7aX1gKVswXTtcclxuICAgICAgICAgICAgICBjb2xvcmVkQ2VsbC5jbGFzc0xpc3QuYWRkKCdwbGFjaW5nLWVycm9yJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBjZWxsc0Fyci5mb3JFYWNoKGVsID0+IGVsLmNsYXNzTGlzdC5yZW1vdmUoJ3BsYWNpbmctZXJyb3InKSk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgKGUpID0+IHsgICAgXHJcbiAgICAgICAgY29uc3QgWWNvb3JkID0gK2VsLmNsYXNzTmFtZS5zbGljZSg2LDcpO1xyXG4gICAgICAgIGNvbnN0IHN0YXJ0aW5nWCA9ICtlbC5jbGFzc05hbWUuc2xpY2UoNyw4KTtcclxuICAgICAgICBjb25zdCBjZWxsTmFtZSA9IGVsLmNsYXNzTmFtZS5zbGljZSgwLDYpO1xyXG4gICAgICAgIGlmIChwbGF5ZXIuZ2FtZWJvYXJkLmlzVmFsaWQoc2l6ZSwgW1ljb29yZCwgc3RhcnRpbmdYXSwgJ3ZlcicpKSB7XHJcbiAgICAgICAgICBmb3IgKGxldCBpID0gWWNvb3JkOyBpIDwgKFljb29yZCArIHNpemUpOyBpKyspIHtcclxuICAgICAgICAgICAgY29sb3JlZENlbGwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGAke2NlbGxOYW1lfSR7aX0ke3N0YXJ0aW5nWH1gKVswXTtcclxuICAgICAgICAgICAgY29sb3JlZENlbGwuY2xhc3NMaXN0LmFkZCgncGxhY2luZy1zaGlwLWNlbGwnKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgKGUpID0+IHtcclxuICAgICAgICAgICAgY2VsbHNBcnIuZm9yRWFjaChlbCA9PiBlbC5jbGFzc0xpc3QucmVtb3ZlKCdwbGFjaW5nLXNoaXAtY2VsbCcpKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBpZiAoWWNvb3JkICsgc2l6ZSA+IDEwKXtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IFljb29yZDsgaSA8IDEwOyBpKyspIHtcclxuICAgICAgICAgICAgICBjb2xvcmVkQ2VsbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoYCR7Y2VsbE5hbWV9JHtpfSR7c3RhcnRpbmdYfWApWzBdO1xyXG4gICAgICAgICAgICAgIGNvbG9yZWRDZWxsLmNsYXNzTGlzdC5hZGQoJ3BsYWNpbmctZXJyb3InKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IFljb29yZDsgaSA8IFljb29yZCArIHNpemU7IGkrKykge1xyXG4gICAgICAgICAgICAgIGNvbG9yZWRDZWxsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShgJHtjZWxsTmFtZX0ke2l9JHtzdGFydGluZ1h9YClbMF07XHJcbiAgICAgICAgICAgICAgY29sb3JlZENlbGwuY2xhc3NMaXN0LmFkZCgncGxhY2luZy1lcnJvcicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIGNlbGxzQXJyLmZvckVhY2goZWwgPT4gZWwuY2xhc3NMaXN0LnJlbW92ZSgncGxhY2luZy1lcnJvcicpKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUGxhY2Ugc2hpcCB3aGVuIGNsaWNraW5nXHJcbiAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgIGNvbnN0IHRhcmdldENlbGwgPSAoZWwuY2xhc3NOYW1lLnNsaWNlKDYsIDgpKS5zcGxpdCgnJyk7XHJcbiAgICAgIGNvbnN0IHRhcmdldENvb3JkaW5hdGVzID0gWyt0YXJnZXRDZWxsWzBdLCArdGFyZ2V0Q2VsbFsxXV07XHJcbiAgICAgIHBsYXllci5nYW1lYm9hcmQucGxhY2VTaGlwKHNpemUsIHRhcmdldENvb3JkaW5hdGVzLCBzaGlwTmFtZSwgb3JpZW50YXRpb24pO1xyXG4gICAgICBwMUNlbGxzID0gUG9wdWxhdGVQMSgpO1xyXG4gICAgICBjb25zdCBzaGlwTGlzdE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGRvbUVsZW1lbnQpO1xyXG4gICAgICBzaGlwTGlzdE5hbWUuc3R5bGUuY29sb3IgPSAnZ3JleSc7XHJcbiAgICAgIGNvbnN0IGhvckJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCR7ZG9tRWxlbWVudH0gPiAuaG9yYCk7XHJcbiAgICAgIGNvbnN0IHZlckJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCR7ZG9tRWxlbWVudH0gPiAudmVyYCk7XHJcbiAgICAgIGhvckJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICB2ZXJCdXR0b24uc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIH0pO1xyXG4gIH0pO31cclxufVxyXG5cclxuZnVuY3Rpb24gU3RhcnRHYW1lICgpIHtcclxuICAvLyBDaGVjayBpZiBhbGwgc2hpcHMgaGF2ZSBiZWVuIHBsYWNlZCBiZWZvcmUgbGF1bmNoaW5nIHRoZSBnYW1lXHJcbiAgaWYgKHBsYXllcjEuZ2FtZWJvYXJkLnNoaXBMaXN0Lmxlbmd0aCAhPT0gNSkge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKCdZb3UgbXVzdCBzdGlsbCBwbGFjZSBzaGlwcyEnKTtcclxuICB9IGVsc2Uge1xyXG4gICAgSW5pdGlhbGl6ZVR1cm4oY3VycmVudFBsYXllcik7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBNYWluIGdhbWUgZmxvdywgYWx0ZXJuYXRlIHR1cm4gYmV0d2VlbiBwbGF5ZXJzIGFuZCBlbmFibGUgYXR0YWNraW5nIHRoZSBvcHBvbmVudCdzIGJvYXJkXHJcbmZ1bmN0aW9uIEluaXRpYWxpemVUdXJuKGN1cnJlbnRQbGF5ZXIpIHtcclxuICBVcGRhdGVJbmZvRGlzcGxheSgpO1xyXG4gIHAxQ2VsbHMgPSBQb3B1bGF0ZVAxKCk7XHJcbiAgcDJDZWxscyA9IFBvcHVsYXRlUDIoKTtcclxuICBpZiAoY3VycmVudFBsYXllciA9PT0gJ3BsYXllcjEnKSB7XHJcbiAgICBBY3RpdmF0ZUF0dGFja09uKHAyQ2VsbHMsIHBsYXllcjEsIHBsYXllcjIpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBjb21wdXRlckF0dGFjaygpO1xyXG4gICAgLy8gRm9yIFB2UDpcclxuICAgIC8vQWN0aXZhdGVBdHRhY2tPbihwMUNlbGxzLCBwbGF5ZXIyLCBwbGF5ZXIxKTtcclxuICB9XHJcbn1cclxuXHJcbi8vIFBvcHVsYXRlIHBsYXllciAxIGJvYXJkXHJcbmZ1bmN0aW9uIFBvcHVsYXRlUDEgKGJvYXJkID0gJ3ByaXZhdGVCb2FyZCcpIHtcclxuICBjb25zdCB0YXJnZXRCb2FyZCA9IHBsYXllcjEuZ2FtZWJvYXJkW2JvYXJkXTtcclxuICBwbGF5ZXIxX2JvYXJkLnRleHRDb250ZW50ID0gJyc7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XHJcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqKyspIHtcclxuICAgICAgbGV0IGNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgY2VsbC50ZXh0Q29udGVudCA9IHRhcmdldEJvYXJkW2ldW2pdO1xyXG4gICAgICBpZiAoY2VsbC50ZXh0Q29udGVudCA9PT0gJ1gnKSB7XHJcbiAgICAgICAgY2VsbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI2YzYmJiYic7XHJcbiAgICAgIH0gZWxzZSBpZiAoY2VsbC50ZXh0Q29udGVudCA9PT0gJ34nKSB7XHJcbiAgICAgICAgY2VsbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI2QxZDNlZic7XHJcbiAgICAgIH0gZWxzZSBpZiAoY2VsbC50ZXh0Q29udGVudCkge1xyXG4gICAgICAgIGNlbGwudGV4dENvbnRlbnQgPSAnTyc7XHJcbiAgICAgICAgY2VsbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI2M3ZTZkMCc7XHJcbiAgICAgIH1cclxuICAgICAgY2VsbC5jbGFzc05hbWUgPSBgY2VsbDEgJHtpfSR7an1gO1xyXG4gICAgICBwbGF5ZXIxX2JvYXJkLmFwcGVuZENoaWxkKGNlbGwpO1xyXG4gICAgfSAgXHJcbiAgfVxyXG4gIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2VsbDEnKTtcclxufVxyXG5cclxuLy8gUG9wdWxhdGUgcGxheWVyIDIgKGNvbXB1dGVyKSBib2FyZCwgdXNpbmcgdGhlIHB1YmxpY0JvYXJkIGtleSB0byBrZWVwIHVuZGlzY292ZXJlZCBzcXVhcmVzIGVtcHR5XHJcbmZ1bmN0aW9uIFBvcHVsYXRlUDIgKGJvYXJkID0gJ3B1YmxpY0JvYXJkJykge1xyXG4gIGNvbnN0IHRhcmdldEJvYXJkID0gcGxheWVyMi5nYW1lYm9hcmRbYm9hcmRdO1xyXG4gIHBsYXllcjJfYm9hcmQudGV4dENvbnRlbnQgPSAnJztcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcclxuICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xyXG4gICAgICBsZXQgY2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICBjZWxsLnRleHRDb250ZW50ID0gdGFyZ2V0Qm9hcmRbaV1bal07XHJcbiAgICAgIGlmIChjZWxsLnRleHRDb250ZW50ID09PSAnWCcpIHtcclxuICAgICAgICBjZWxsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjZjNiYmJiJztcclxuICAgICAgfSBlbHNlIGlmIChjZWxsLnRleHRDb250ZW50ID09PSAnficpIHtcclxuICAgICAgICBjZWxsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjZDFkM2VmJztcclxuICAgICAgfVxyXG4gICAgICBjZWxsLmNsYXNzTmFtZSA9IGBjZWxsMiAke2l9JHtqfWA7XHJcbiAgICAgIHBsYXllcjJfYm9hcmQuYXBwZW5kQ2hpbGQoY2VsbCk7XHJcbiAgICB9ICBcclxuICB9XHJcbiAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jZWxsMicpO1xyXG59XHJcblxyXG4vLyBBY3RpdmF0ZSBhdHRhY2sgb24gb25lIHBsYXllciBib2FyZCBhdCBhIHRpbWUsIHdvcmtzIGZvciBQVlBcclxuZnVuY3Rpb24gQWN0aXZhdGVBdHRhY2tPbiAoY2VsbHNBcnIsIGF0dGFja2VyLCBkZWZlbmRlcikge1xyXG4gIGNlbGxzQXJyLmZvckVhY2goZWwgPT4ge1xyXG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICBjb25zdCB0YXJnZXRDZWxsID0gKGVsLmNsYXNzTmFtZS5zbGljZSgtMikpLnNwbGl0KCcnKTtcclxuICAgICAgYXR0YWNrZXIuYXR0YWNrKGRlZmVuZGVyLCB0YXJnZXRDZWxsWzBdLCB0YXJnZXRDZWxsWzFdKTtcclxuICAgICAgLy8gUmV2ZWFsIHNxdWFyZSB3aGVuIGF0dGFja2VkXHJcbiAgICAgIGlmIChjdXJyZW50UGxheWVyID09PSAncGxheWVyMScpIHtcclxuICAgICAgICBpZiAoZGVmZW5kZXIuZ2FtZWJvYXJkLnByaXZhdGVCb2FyZFt0YXJnZXRDZWxsWzBdXVt0YXJnZXRDZWxsWzFdXSA9PT0gJ1gnKSB7XHJcbiAgICAgICAgICBkZWZlbmRlci5nYW1lYm9hcmQucHVibGljQm9hcmRbdGFyZ2V0Q2VsbFswXV1bdGFyZ2V0Q2VsbFsxXV0gPSAnWCc7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGRlZmVuZGVyLmdhbWVib2FyZC5wdWJsaWNCb2FyZFt0YXJnZXRDZWxsWzBdXVt0YXJnZXRDZWxsWzFdXSA9ICd+JztcclxuICAgICAgICB9XHJcbiAgICAgICAgUG9wdWxhdGVQMigpO1xyXG4gICAgICAgIGN1cnJlbnRQbGF5ZXIgPSAncGxheWVyMic7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaWYgKGRlZmVuZGVyLmdhbWVib2FyZC5wcml2YXRlQm9hcmRbdGFyZ2V0Q2VsbFswXV1bdGFyZ2V0Q2VsbFsxXV0gPT09ICdYJykge1xyXG4gICAgICAgICAgZGVmZW5kZXIuZ2FtZWJvYXJkLnB1YmxpY0JvYXJkW3RhcmdldENlbGxbMF1dW3RhcmdldENlbGxbMV1dID0gJ1gnO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBkZWZlbmRlci5nYW1lYm9hcmQucHVibGljQm9hcmRbdGFyZ2V0Q2VsbFswXV1bdGFyZ2V0Q2VsbFsxXV0gPSAnfic7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFBvcHVsYXRlUDEoKTtcclxuICAgICAgICBjdXJyZW50UGxheWVyID0gJ3BsYXllcjEnO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICghd2luQ2hlY2soKSkge1xyXG4gICAgICAgIEluaXRpYWxpemVUdXJuKGN1cnJlbnRQbGF5ZXIpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIE9wZW5Nb2RhbCgnZ2FtZS1vdmVyX21vZGFsJyk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0pO1xyXG59XHJcblxyXG4vLyBDb21wdXRlciBhdHRhY2tcclxuZnVuY3Rpb24gY29tcHV0ZXJBdHRhY2sgKCkge1xyXG4gIHBsYXllcjIuY29tcHV0ZXJBdHRhY2socGxheWVyMSk7XHJcbiAgd2luQ2hlY2soKTtcclxuICBjdXJyZW50UGxheWVyID0gJ3BsYXllcjEnO1xyXG4gIEluaXRpYWxpemVUdXJuKGN1cnJlbnRQbGF5ZXIpO1xyXG59XHJcblxyXG4vLyBDaGVjayB3aW4gY29uZGl0aW9uXHJcbmZ1bmN0aW9uIHdpbkNoZWNrICgpIHtcclxuICBpZiAocGxheWVyMS5nYW1lYm9hcmQuZ2V0U3RhdHVzKCkgfHwgcGxheWVyMi5nYW1lYm9hcmQuZ2V0U3RhdHVzKCkpIHtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxufVxyXG5cclxuLy8gRGlzcGxheSBjb250cm9sbGVyXHJcbmZ1bmN0aW9uIFVwZGF0ZUluZm9EaXNwbGF5ICgpIHtcclxuICB0dXJuX2luZm8udGV4dENvbnRlbnQgPSBjdXJyZW50UGxheWVyID09PSAncGxheWVyMScgPyBgJHtwbGF5ZXIxLnBsYXllck5hbWV9J3MgdHVybmAgOiBgJHtwbGF5ZXIyLnBsYXllck5hbWV9J3MgdHVybmA7XHJcbn1cclxuXHJcbi8vIFRlc3QgYnV0dG9uc1xyXG5wbGF5ZXIxX2xvZy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICBjb25zb2xlLmxvZyhwbGF5ZXIxLmdhbWVib2FyZCk7XHJcbn0pO1xyXG5cclxucGxheWVyMl9sb2cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgY29uc29sZS5sb2cocGxheWVyMi5nYW1lYm9hcmQpO1xyXG59KTtcclxuXHJcblxyXG4vLyBST0FETUFQXHJcbi8vIFZpc3VhbCBmZWVkYmFjayA6IGNoYW5nZXIgbGEgY291bGV1ciBkdSBib3V0b24gJ3N0YXJ0JyBsb3JzcXVlIHRvdXMgbGVzIG5hdmlyZXMgc29udCBwbGFjw6lzLCAnbmV3IGdhbWUnIHBsdXMgZW4gw6l2aWRlbmNlIGxvcnNhdWUgw6dhIGZhaXQgc2VucyAocGFydGllIHBhcyBlbmNvcmUgbGFuY8OpZSwgb3UgcGFydGllIHRlcm1pbsOpZSlcclxuLy8gRml4IGJ1ZyBkJ2FmZmljaGFnZSBsb3JzcXUnb24gY2xpcXVlIHN1ciB1biBhdXRyZSBuYXZpcmUgYXZhbnQgc2FucyBhdm9pciBjbGlxdcOpIGF1IHByw6lhbGFibGUgcG91ciBwbGFjZXIgbGUgcHJlbWllciA6IHJlbW92ZSBldmVudExpc3RlbmVyIGVuIGTDqWJ1dCBkZSBmb25jdGlvbiA/XHJcblxyXG4vLyBQdlAgOiBhbHRlcm5lciAncHJpdmF0ZUJvYXJkJyAoam91ZXVyIGVuIGNvdXJzKSBldCAncHVibGljQm9hcmQnIChqb3VldXIgYWR2ZXJzZSlcclxuICAvLyAtPiB1dGlsaXNlciAncHVibGljQm9hcmQnIGFmZmljaGUgbGUgYnJvdWlsbGFyZCBkZSBndWVycmUsICdwcml2YXRlQm9hcmQnIGFmZmljaGUgbGEgcG9zaXRpb24gZGVzIG5hdmlyZXNcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9