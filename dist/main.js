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
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n  box-sizing: border-box;\r\n  font-family: 'Roboto', sans-serif; }\r\n\r\nbody {\r\n  margin: 0; }\r\n\r\nheader {\r\n  text-align: center; }\r\n\r\n#new-game_button,\r\n#pvp-new-game_button {\r\n  background-color: rgba(255, 0, 0, 0.43); }\r\n\r\n.battlefield {\r\n  display: flex;\r\n  justify-content: center;\r\n  gap: 150px; }\r\n\r\n#player1-ships,\r\n#player2-ships {\r\n  display: none; }\r\n  #player1-ships li,\r\n  #player2-ships li {\r\n    margin: 8px 0;\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 8px; }\r\n  #player1-ships img,\r\n  #player2-ships img {\r\n    height: 1rem;\r\n    cursor: pointer; }\r\n\r\n#player1-board,\r\n#player2-board {\r\n  display: grid;\r\n  grid-template-columns: repeat(10, 1fr);\r\n  grid-template-rows: repeat(10, 1fr); }\r\n  #player1-board .empty-cell,\r\n  #player2-board .empty-cell {\r\n    height: 40px;\r\n    width: 40px;\r\n    border: 1px solid rgba(0, 0, 0, 0.445);\r\n    background-color: rgba(212, 212, 212, 0.3); }\r\n\r\n[class^=\"cell\"] {\r\n  height: 40px;\r\n  width: 40px;\r\n  border: 1px solid black;\r\n  background-color: #d4d4d4;\r\n  text-align: center;\r\n  vertical-align: middle;\r\n  font-size: 2rem; }\r\n  [class^=\"cell\"]:hover {\r\n    background-color: grey;\r\n    cursor: pointer; }\r\n\r\n.placing-ship-cell {\r\n  background-color: rgba(255, 255, 0, 0.334); }\r\n  .placing-ship-cell:hover {\r\n    background-color: rgba(255, 255, 0, 0.334); }\r\n\r\n.placing-error {\r\n  background-color: rgba(255, 0, 0, 0.423); }\r\n  .placing-error:hover {\r\n    background-color: rgba(255, 0, 0, 0.423); }\r\n\r\n.battle-info {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center; }\r\n  .battle-info .turn-info {\r\n    font-size: 1.2rem;\r\n    font-weight: 700; }\r\n\r\n.backdrop {\r\n  display: none;\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  height: 100vh;\r\n  width: 100vw;\r\n  background-color: rgba(211, 211, 211, 0.564); }\r\n\r\n.game-over_modal {\r\n  display: none;\r\n  position: fixed;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  border: 1px solid black;\r\n  background-color: grey;\r\n  z-index: 3;\r\n  padding: 3rem; }\r\n\r\n.pass-turn_modal {\r\n  display: none;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 50px;\r\n  position: fixed;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  width: 350px;\r\n  height: 200px;\r\n  background-color: white;\r\n  border: 1px solid black; }\r\n\r\n/*# sourceMappingURL=style.css.map */\r\n", "",{"version":3,"sources":["webpack://./src/style.scss","webpack://./src/style.css"],"names":[],"mappings":"AAEA;EACE,sBAAsB;EACtB,iCAAiC,EAAA;;AAGnC;EACE,SAAS,EAAA;;AAGX;EACE,kBAAkB,EAAA;;AAIpB;;EAEE,uCAAuC,EAAA;;AAKzC;EACE,aAAa;EACb,uBAAuB;EACvB,UAAU,EAAA;;AAGZ;;EAEE,aAAa,EAAA;EAEb;;IACE,aAAa;IACb,aAAa;IACb,mBAAmB;IACnB,QAAQ,EAAA;EAGV;;IACE,YAAY;IACZ,eAAe,EAAA;;AAInB;;EAEE,aAAa;EACb,sCAAsC;EACtC,mCAAmC,EAAA;EAEnC;;IACE,YAAY;IACZ,WAAW;IACX,sCAAsC;IACtC,0CAA0C,EAAA;;AAI9C;EACE,YAAY;EACZ,WAAW;EACX,uBAAuB;EACvB,yBAAoC;EACpC,kBAAkB;EAClB,sBAAsB;EACtB,eAAe,EAAA;EAEf;IACE,sBAAsB;IACtB,eAAe,EAAA;;AAMnB;EACE,0CAA0C,EAAA;EAE1C;IACE,0CAA0C,EAAA;;AAI9C;EACE,wCAAwC,EAAA;EAExC;IACE,wCAAwC,EAAA;;AAI5C;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB,EAAA;EAEnB;IACE,iBAAiB;IACjB,gBAAgB,EAAA;;AAKpB;EACE,aAAa;EACb,eAAe;EACf,MAAM;EACN,OAAO;EACP,aAAa;EACb,YAAY;EACZ,4CAA4C,EAAA;;AAG9C;EACE,aAAa;EACb,eAAe;EACf,QAAQ;EACR,SAAS;EACT,gCAAgC;EAChC,uBAAuB;EACvB,sBAAsB;EACtB,UAAU;EACV,aAAa,EAAA;;AAGf;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,SAAS;EACT,eAAe;EACf,QAAQ;EACR,SAAS;EACT,gCAAgC;EAChC,YAAY;EACZ,aAAa;EACb,uBAAuB;EACvB,uBAAuB,EAAA;;AC7BzB,oCAAoC","sourceRoot":""}]);
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





// Gobal variables
let player1;
let player2;
let p1Cells;
let p2Cells;
let gameMode;
let currentPlayer = 'player1';

// DOM Elements
const new_game_button = document.getElementById('new-game_button');
const pvp_new_game_button = document.getElementById('pvp-new-game_button');
const start_game_button = document.getElementById('start-game_button');

const player1_board = document.getElementById('player1-board');
const player1_ships = document.getElementById('player1-ships');
const player2_board = document.getElementById('player2-board');
const player2_ships = document.getElementById('player2-ships');
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

function GameOverModal () {
  const backdrop = document.querySelector('.backdrop');
  backdrop.style.display = 'block';
  backdrop.addEventListener('click', () => CloseModal('game-over_modal'));
  document.querySelector('.game-over_modal').style.display = 'block';
  if (currentPlayer === 'player1') {
    document.querySelector('.game-over_modal > p').textContent = 'Player 2 wins!';
  } else {
    document.querySelector('.game-over_modal > p').textContent = 'Player 1 wins!';
  }
}

function PassTurnModal () {
  p1Cells = PopulateP1('publicBoard');
  p2Cells = PopulateP2('publicBoard');
  const backdrop = document.querySelector('.backdrop');
  backdrop.style.display = 'block';
  document.querySelector('.pass-turn_modal').style.display = 'flex';
  if (currentPlayer === 'player1') {
    document.querySelector('.pass-turn_modal > p').textContent = `Player 1's turn`;
  } else {
    document.querySelector('.pass-turn_modal > p').textContent = `Player 2's turn`;
  }
}

// Initialize game functions
new_game_button.addEventListener('click', () => {
  resetDOM();
  InitializeGame('Player', 'Computer', 'com');
  placementPhase();
  start_game_button.textContent = 'Start the battle';
});

pvp_new_game_button.addEventListener('click', () => {
  resetDOM();
  InitializeGame('Player 1', 'Player 2', 'pvp');
  placementPhase();
  start_game_button.textContent = 'Change player';
});

start_game_button.addEventListener('click', () => {
  if (gameMode === 'com') {
    StartGame();
  } else if (gameMode === 'pvp' && player2.gameboard.shipList.length === 5 && player2.gameboard.shipList.length === 5) { 
    player2_ships.style.display = 'none';
    StartGame();
  }
  else {
    resetDOM('player2');
    start_game_button.disabled = true;
    start_game_button.style.backgroundColor = 'buttonface';
    start_game_button.textContent = 'Start game';
    changePlayerPlacement();
  }
});

function resetDOM (player = 'player1') {
  const ship_list = document.querySelectorAll(`#${player}-ships li`);
  const orientation_buttons = document.querySelectorAll(`#${player}-ships img`);
  for (let i = 0; i < ship_list.length; i++) {
    ship_list[i].style.color = 'black';
  }
  for (let i = 0; i < orientation_buttons.length; i++) {
    orientation_buttons[i].style.display = 'block';
  }
  if (player === 'player1') {
    document.getElementById('player2-ships').style.display = 'none';
  }
}

function changePlayerPlacement () {
  if (player1.gameboard.shipList.length !== 5) {
    throw new Error ('Player 1 must first place all his/her ships.');
  } else {
    player1_ships.style.display = 'none';
    p1Cells = PopulateP1('publicBoard');
    Player2PlaceShips();
  }
}

function InitializeGame(p1name, p2name, mode) {
  gameMode = mode;
  player1 = (0,_player__WEBPACK_IMPORTED_MODULE_3__.Player)(p1name);
  player2 = (0,_player__WEBPACK_IMPORTED_MODULE_3__.Player)(p2name);
  p1Cells = PopulateP1();
  p2Cells = PopulateP2('publicBoard');
}

function ComputerPlaceShips () {
  player2.gameboard.computerPlaceShip(5, 'Carrier');
  player2.gameboard.computerPlaceShip(4, 'Battleship');
  player2.gameboard.computerPlaceShip(3, 'Cruiser');
  player2.gameboard.computerPlaceShip(3, 'Submarine');
  player2.gameboard.computerPlaceShip(2, 'Destroyer');
}

function placementPhase () {
  if (gameMode === 'com') {
    ComputerPlaceShips();
    Player1PlaceShips();
    player2_ships.style.display = 'none';
  } else {
    Player1PlaceShips();
  }
}

function Player1PlaceShips () {
  player1_ships.style.display = 'block';
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

function Player2PlaceShips () {
  player2_ships.style.display = 'block';
  const p2CarrierHor = document.querySelector('.p2-carrier > .hor');
  const p2CarrierVer = document.querySelector('.p2-carrier > .ver');
  p2CarrierHor.addEventListener('click', () => ActivatePlacement(player2, p2Cells, 5, 'Carrier', '.p2-carrier'));
  p2CarrierVer.addEventListener('click', () => ActivatePlacement(player2, p2Cells, 5, 'Carrier', '.p2-carrier', 'ver'));
  const p2BattleshipHor = document.querySelector('.p2-battleship > .hor');
  const p2BattleshipVer = document.querySelector('.p2-battleship > .ver');
  p2BattleshipHor.addEventListener('click', () => ActivatePlacement(player2, p2Cells, 4, 'Battleship', '.p2-battleship'));
  p2BattleshipVer.addEventListener('click', () => ActivatePlacement(player2, p2Cells, 4, 'Battleship', '.p2-battleship', 'ver'));
  const p2CruiserHor = document.querySelector('.p2-cruiser > .hor');
  const p2CruiserVer = document.querySelector('.p2-cruiser > .ver');
  p2CruiserHor.addEventListener('click', () => ActivatePlacement(player2, p2Cells, 3, 'Cruiser', '.p2-cruiser'));
  p2CruiserVer.addEventListener('click', () => ActivatePlacement(player2, p2Cells, 3, 'Cruiser', '.p2-cruiser', 'ver'));
  const p2SubmarineHor = document.querySelector('.p2-submarine > .hor');
  const p2SubmarineVer = document.querySelector('.p2-submarine > .ver');
  p2SubmarineHor.addEventListener('click', () => ActivatePlacement(player2, p2Cells, 3, 'Submarine', '.p2-submarine'));
  p2SubmarineVer.addEventListener('click', () => ActivatePlacement(player2, p2Cells, 3, 'Submarine', '.p2-submarine', 'ver'));
  const p2DestroyerHor = document.querySelector('.p2-destroyer > .hor');
  const p2DestroyerVer = document.querySelector('.p2-destroyer > .ver');
  p2DestroyerHor.addEventListener('click', () => ActivatePlacement(player2, p2Cells, 2, 'Destroyer', '.p2-destroyer'));
  p2DestroyerVer.addEventListener('click', () => ActivatePlacement(player2, p2Cells, 2, 'Destroyer', '.p2-destroyer', 'ver'));
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
      if (player === player1) {
        p1Cells = PopulateP1();
      } else {
        p2Cells = PopulateP2('privateBoard');
      }
      const shipListName = document.querySelector(domElement);
      shipListName.style.color = 'grey';
      const horButton = document.querySelector(`${domElement} > .hor`);
      const verButton = document.querySelector(`${domElement} > .ver`);
      horButton.style.display = 'none';
      verButton.style.display = 'none';
      // In PvP when the last ship is placed, display the 'start game button'
      if (gameMode === 'pvp' && player1.gameboard.shipList.length === 5) {
        start_game_button.disabled = false;
        start_game_button.style.backgroundColor = 'yellow';
        p1PlacedAllShips = true;
      }
      if (gameMode === 'pvp' && player1.gameboard.shipList.length === 5 && player2.gameboard.shipList.length === 5) {
        start_game_button.disabled =  false;
        start_game_button.textContent = 'Start game';
        start_game_button.style.backgroundColor = 'green';
      }
    });
  });}
}

function StartGame () {
  // Check if all ships have been placed before launching the game
  if (player1.gameboard.shipList.length !== 5) {
    throw new Error('You must still place ships!');
  } else if (winCheck()) {
    throw new Error ("The game is already over");
  } else {
    InitializeTurn(currentPlayer);
  }
}

// Main game flow, alternate turn between players and enable attacking the opponent's board
function InitializeTurn (currentPlayer) {
  if (gameMode === 'com') {
    UpdateInfoDisplay();
    p1Cells = PopulateP1();
    p2Cells = PopulateP2();
    if (currentPlayer === 'player1') {
      p1Cells = PopulateP1('privateBoard');
      p2Cells = PopulateP2('publicBoard');
      ActivateAttackOn(p2Cells, player1, player2);
    } else {
      computerAttack(); 
    }
  } else {
    PassTurnModal();
    document.getElementById('pass-turn_confirm-button').addEventListener('click', () => {
      CloseModal('pass-turn_modal');
      if (currentPlayer === 'player1') {
        p1Cells = PopulateP1('privateBoard');
        p2Cells = PopulateP2('publicBoard');
        ActivateAttackOn(p2Cells, player1, player2);
      } else {
        p1Cells = PopulateP1('publicBoard');
        p2Cells = PopulateP2('privateBoard');
        ActivateAttackOn(p1Cells, player2, player1); 
      }
    });
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
        cell.textContent = `▢`;
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
      } else if (cell.textContent) {
        cell.textContent = `▢`;
        cell.style.backgroundColor = '#c7e6d0';
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
        GameOverModal();
      }
    });
  });
}

// Computer attack
function computerAttack () {
  player2.computerAttack(player1);
  if (!winCheck()) {
    currentPlayer = 'player1';
    InitializeTurn(currentPlayer);
  } else {
    GameOverModal();
  }
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
  GameOverModal();
  console.log(player1.gameboard);
});

player2_log.addEventListener('click', () => {
  console.log(player2.gameboard);
});


// ROADMAP
// Visual feedback : changer la couleur du bouton 'start' lorsque tous les navires sont placés, 'new game' plus en évidence lorsaue ça fait sens (partie pas encore lancée, ou partie terminée)
// Faire l'UI
// Afficher messages d'erreurs dans l'UI
// Retirer boutons de test
// Nettoyage du code
// README.md

// BUGS
// Bug d'affichage lorsqu'on clique sur un autre navire avant sans avoir cliqué au préalable pour placer le premier : remove eventListener en début de fonction ?

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Yy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxldHRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGV0dGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGV0dGUvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vYmF0dGxldHRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXR0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxldHRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXR0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGV0dGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGV0dGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGV0dGUvLi9zcmMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXR0ZS8uL3NyYy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxldHRlLy4vc3JjL3NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxldHRlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXR0ZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGV0dGUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXR0ZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXR0ZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXR0ZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vYmF0dGxldHRlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvOndnaHRANDAwOzcwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7IH1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIG1hcmdpbjogMDsgfVxcclxcblxcclxcbmhlYWRlciB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cXHJcXG5cXHJcXG4jbmV3LWdhbWVfYnV0dG9uLFxcclxcbiNwdnAtbmV3LWdhbWVfYnV0dG9uIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAwLCAwLCAwLjQzKTsgfVxcclxcblxcclxcbi5iYXR0bGVmaWVsZCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBnYXA6IDE1MHB4OyB9XFxyXFxuXFxyXFxuI3BsYXllcjEtc2hpcHMsXFxyXFxuI3BsYXllcjItc2hpcHMge1xcclxcbiAgZGlzcGxheTogbm9uZTsgfVxcclxcbiAgI3BsYXllcjEtc2hpcHMgbGksXFxyXFxuICAjcGxheWVyMi1zaGlwcyBsaSB7XFxyXFxuICAgIG1hcmdpbjogOHB4IDA7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdhcDogOHB4OyB9XFxyXFxuICAjcGxheWVyMS1zaGlwcyBpbWcsXFxyXFxuICAjcGxheWVyMi1zaGlwcyBpbWcge1xcclxcbiAgICBoZWlnaHQ6IDFyZW07XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjsgfVxcclxcblxcclxcbiNwbGF5ZXIxLWJvYXJkLFxcclxcbiNwbGF5ZXIyLWJvYXJkIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpOyB9XFxyXFxuICAjcGxheWVyMS1ib2FyZCAuZW1wdHktY2VsbCxcXHJcXG4gICNwbGF5ZXIyLWJvYXJkIC5lbXB0eS1jZWxsIHtcXHJcXG4gICAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgICB3aWR0aDogNDBweDtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjQ0NSk7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjEyLCAyMTIsIDIxMiwgMC4zKTsgfVxcclxcblxcclxcbltjbGFzc149XFxcImNlbGxcXFwiXSB7XFxyXFxuICBoZWlnaHQ6IDQwcHg7XFxyXFxuICB3aWR0aDogNDBweDtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q0ZDRkNDtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxyXFxuICBmb250LXNpemU6IDJyZW07IH1cXHJcXG4gIFtjbGFzc149XFxcImNlbGxcXFwiXTpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjsgfVxcclxcblxcclxcbi5wbGFjaW5nLXNoaXAtY2VsbCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAwLCAwLjMzNCk7IH1cXHJcXG4gIC5wbGFjaW5nLXNoaXAtY2VsbDpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDAsIDAuMzM0KTsgfVxcclxcblxcclxcbi5wbGFjaW5nLWVycm9yIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAwLCAwLCAwLjQyMyk7IH1cXHJcXG4gIC5wbGFjaW5nLWVycm9yOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDAsIDAsIDAuNDIzKTsgfVxcclxcblxcclxcbi5iYXR0bGUtaW5mbyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cXHJcXG4gIC5iYXR0bGUtaW5mbyAudHVybi1pbmZvIHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7IH1cXHJcXG5cXHJcXG4uYmFja2Ryb3Age1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMTEsIDIxMSwgMjExLCAwLjU2NCk7IH1cXHJcXG5cXHJcXG4uZ2FtZS1vdmVyX21vZGFsIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB0b3A6IDUwJTtcXHJcXG4gIGxlZnQ6IDUwJTtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xcclxcbiAgei1pbmRleDogMztcXHJcXG4gIHBhZGRpbmc6IDNyZW07IH1cXHJcXG5cXHJcXG4ucGFzcy10dXJuX21vZGFsIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiA1MHB4O1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgdG9wOiA1MCU7XFxyXFxuICBsZWZ0OiA1MCU7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXHJcXG4gIHdpZHRoOiAzNTBweDtcXHJcXG4gIGhlaWdodDogMjAwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrOyB9XFxyXFxuXFxyXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9c3R5bGUuY3NzLm1hcCAqL1xcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLGlDQUFpQyxFQUFBOztBQUduQztFQUNFLFNBQVMsRUFBQTs7QUFHWDtFQUNFLGtCQUFrQixFQUFBOztBQUlwQjs7RUFFRSx1Q0FBdUMsRUFBQTs7QUFLekM7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLFVBQVUsRUFBQTs7QUFHWjs7RUFFRSxhQUFhLEVBQUE7RUFFYjs7SUFDRSxhQUFhO0lBQ2IsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixRQUFRLEVBQUE7RUFHVjs7SUFDRSxZQUFZO0lBQ1osZUFBZSxFQUFBOztBQUluQjs7RUFFRSxhQUFhO0VBQ2Isc0NBQXNDO0VBQ3RDLG1DQUFtQyxFQUFBO0VBRW5DOztJQUNFLFlBQVk7SUFDWixXQUFXO0lBQ1gsc0NBQXNDO0lBQ3RDLDBDQUEwQyxFQUFBOztBQUk5QztFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsdUJBQXVCO0VBQ3ZCLHlCQUFvQztFQUNwQyxrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLGVBQWUsRUFBQTtFQUVmO0lBQ0Usc0JBQXNCO0lBQ3RCLGVBQWUsRUFBQTs7QUFNbkI7RUFDRSwwQ0FBMEMsRUFBQTtFQUUxQztJQUNFLDBDQUEwQyxFQUFBOztBQUk5QztFQUNFLHdDQUF3QyxFQUFBO0VBRXhDO0lBQ0Usd0NBQXdDLEVBQUE7O0FBSTVDO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUIsRUFBQTtFQUVuQjtJQUNFLGlCQUFpQjtJQUNqQixnQkFBZ0IsRUFBQTs7QUFLcEI7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLE1BQU07RUFDTixPQUFPO0VBQ1AsYUFBYTtFQUNiLFlBQVk7RUFDWiw0Q0FBNEMsRUFBQTs7QUFHOUM7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLFFBQVE7RUFDUixTQUFTO0VBQ1QsZ0NBQWdDO0VBQ2hDLHVCQUF1QjtFQUN2QixzQkFBc0I7RUFDdEIsVUFBVTtFQUNWLGFBQWEsRUFBQTs7QUFHZjtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1QsZUFBZTtFQUNmLFFBQVE7RUFDUixTQUFTO0VBQ1QsZ0NBQWdDO0VBQ2hDLFlBQVk7RUFDWixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLHVCQUF1QixFQUFBOztBQzdCekIsb0NBQW9DXCIsXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBTaGlwIH0gZnJvbSAnLi9zaGlwLmpzJztcclxuXHJcblxyXG5jb25zdCBHYW1lYm9hcmQgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHByaXZhdGVCb2FyZDogW1xyXG4gICAgICBbLCwsLCwsLCwsXSxcclxuICAgICAgWywsLCwsLCwsLF0sXHJcbiAgICAgIFssLCwsLCwsLCxdLFxyXG4gICAgICBbLCwsLCwsLCwsXSxcclxuICAgICAgWywsLCwsLCwsLF0sXHJcbiAgICAgIFssLCwsLCwsLCxdLFxyXG4gICAgICBbLCwsLCwsLCwsXSxcclxuICAgICAgWywsLCwsLCwsLF0sXHJcbiAgICAgIFssLCwsLCwsLCxdLFxyXG4gICAgICBbLCwsLCwsLCwsXSxcclxuICAgIF0sXHJcblxyXG4gICAgcHVibGljQm9hcmQ6IFtcclxuICAgICAgWywsLCwsLCwsLF0sXHJcbiAgICAgIFssLCwsLCwsLCxdLFxyXG4gICAgICBbLCwsLCwsLCwsXSxcclxuICAgICAgWywsLCwsLCwsLF0sXHJcbiAgICAgIFssLCwsLCwsLCxdLFxyXG4gICAgICBbLCwsLCwsLCwsXSxcclxuICAgICAgWywsLCwsLCwsLF0sXHJcbiAgICAgIFssLCwsLCwsLCxdLFxyXG4gICAgICBbLCwsLCwsLCwsXSxcclxuICAgICAgWywsLCwsLCwsLF0sXHJcbiAgICBdLFxyXG4gICAgXHJcbiAgICBzaGlwTGlzdDogW10sXHJcblxyXG4gICAgcGxhY2VTaGlwOiBmdW5jdGlvbiAoc2l6ZSwgc3RhcnRQb3MsIHNoaXBOYW1lID0gJ1VubmFtZWQgc2hpcCcsIGRpcmVjdGlvbiA9ICdob3InKSB7XHJcbiAgICAgIGlmICghdGhpcy5pc1ZhbGlkKHNpemUsIHN0YXJ0UG9zLCBkaXJlY3Rpb24pKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3QgcGxhY2Ugc2hpcDogb3V0IG9mIGJvdW5kcyBvciBzcGFjZSBhbHJlYWR5IG9jY3VwaWVkLicpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGxldCBuZXdTaGlwID0gU2hpcChzaXplLCBzaGlwTmFtZSk7XHJcbiAgICAgICAgdGhpcy5zaGlwTGlzdC5wdXNoKG5ld1NoaXApO1xyXG4gICAgICAgIGlmIChkaXJlY3Rpb24gPT09ICdob3InKSB7XHJcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNpemU7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLnByaXZhdGVCb2FyZFtzdGFydFBvc1swXV1bc3RhcnRQb3NbMV0gKyBpXSA9IHNoaXBOYW1lO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAoZGlyZWN0aW9uID09PSAndmVyJykge1xyXG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaXplOyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5wcml2YXRlQm9hcmRbc3RhcnRQb3NbMF0gKyBpXVtzdGFydFBvc1sxXV0gPSBzaGlwTmFtZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgY29tcHV0ZXJQbGFjZVNoaXA6IGZ1bmN0aW9uIChzaXplLCBzaGlwTmFtZSkge1xyXG4gICAgICBsZXQgcm5kUG9zID0gW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKSwgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApXTtcclxuICAgICAgbGV0IHJuZERpcmVjdGlvbiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIpO1xyXG4gICAgICBzd2l0Y2ggKHJuZERpcmVjdGlvbikge1xyXG4gICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgIHJuZERpcmVjdGlvbiA9ICdob3InO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICBybmREaXJlY3Rpb24gPSAndmVyJztcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB3aGlsZSAoIXRoaXMuaXNWYWxpZChzaXplLCBybmRQb3MsIHJuZERpcmVjdGlvbikpIHtcclxuICAgICAgICBybmRQb3MgPSBbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApLCBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCldO1xyXG4gICAgICAgIHJuZERpcmVjdGlvbiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIpO1xyXG4gICAgICAgIHN3aXRjaCAocm5kRGlyZWN0aW9uKSB7XHJcbiAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgIHJuZERpcmVjdGlvbiA9ICdob3InO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJuZERpcmVjdGlvbiA9ICd2ZXInO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5wbGFjZVNoaXAoc2l6ZSwgcm5kUG9zLCBzaGlwTmFtZSwgcm5kRGlyZWN0aW9uKTtcclxuICAgIH0sXHJcblxyXG4gICAgaXNWYWxpZDogZnVuY3Rpb24gKHNpemUsIHN0YXJ0UG9zLCBkaXJlY3Rpb24gPSAnaG9yJykge1xyXG4gICAgICBsZXQgc2l6ZUNoZWNrID0gdHJ1ZTtcclxuICAgICAgbGV0IGF2YWlsYWJsZUNoZWNrID0gdHJ1ZTtcclxuICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gJ2hvcicgJiYgKChzdGFydFBvc1sxXSArIHNpemUgLSAxKSA+IDkpKSB7XHJcbiAgICAgICAgc2l6ZUNoZWNrID0gZmFsc2U7XHJcbiAgICAgIH0gZWxzZSBpZiAoZGlyZWN0aW9uID09PSAndmVyJyAmJiAoKHN0YXJ0UG9zWzBdICsgc2l6ZSAtIDEpID4gOSkpIHtcclxuICAgICAgICBzaXplQ2hlY2sgPSBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgICBsZXQgdGFyZ2V0QXJyID0gW107XHJcbiAgICAgIGlmIChkaXJlY3Rpb24gPT09ICdob3InKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaXplOyBpKyspIHsgLy8gY2hlY2sgaWYgaG9yaXpvbnRhbCBwbGFjZW1lbnQgaXMgZW1wdHlcclxuICAgICAgICAgIHRhcmdldEFyci5wdXNoKHRoaXMucHJpdmF0ZUJvYXJkW3N0YXJ0UG9zWzBdXVtzdGFydFBvc1sxXSArIGldKTtcclxuICAgICAgICAgIH1cclxuICAgICAgfSBlbHNlIGlmIChzaXplQ2hlY2sgPT09IHRydWUgJiYgZGlyZWN0aW9uID09PSAndmVyJykge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2l6ZTsgaSsrKSB7XHJcbiAgICAgICAgICB0YXJnZXRBcnIucHVzaCh0aGlzLnByaXZhdGVCb2FyZFtzdGFydFBvc1swXSArIGldW3N0YXJ0UG9zWzFdXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGF2YWlsYWJsZUNoZWNrID0gdGFyZ2V0QXJyLmV2ZXJ5KGVsID0+IGVsID09PSB1bmRlZmluZWQpO1xyXG4gICAgICByZXR1cm4gKHNpemVDaGVjayAmJiBhdmFpbGFibGVDaGVjayk7XHJcbiAgICAgIH0sXHJcblxyXG4gICAgcmVjZWl2ZUF0dGFjazogZnVuY3Rpb24gKHRhcmdldFBvcykge1xyXG4gICAgIGlmICh0aGlzLnByaXZhdGVCb2FyZFt0YXJnZXRQb3NbMF1dW3RhcmdldFBvc1sxXV0gPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICB0aGlzLnByaXZhdGVCb2FyZFt0YXJnZXRQb3NbMF1dW3RhcmdldFBvc1sxXV0gPSAnfic7XHJcbiAgICAgIHJldHVybiAnWW91IG1pc3NlZCc7XHJcbiAgICAgfSBlbHNlIGlmICh0aGlzLnByaXZhdGVCb2FyZFt0YXJnZXRQb3NbMF1dW3RhcmdldFBvc1sxXV0gPT09ICd+JyB8fCB0aGlzLnByaXZhdGVCb2FyZFt0YXJnZXRQb3NbMF1dW3RhcmdldFBvc1sxXV0gPT09ICdYJykge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1lvdSBjYW5ub3QgYXR0YWNrIHRoZSBzYW1lIHNwb3QgdHdpY2UnKTtcclxuICAgICB9IGVsc2Uge1xyXG4gICAgICBsZXQgdGFyZ2V0ID0gdGhpcy5zaGlwTGlzdC5maW5kKGVsID0+IGVsLm5hbWUgPT09IHRoaXMucHJpdmF0ZUJvYXJkW3RhcmdldFBvc1swXV1bdGFyZ2V0UG9zWzFdXSk7XHJcbiAgICAgIHRhcmdldC5oaXRzKys7XHJcbiAgICAgIHRoaXMucHJpdmF0ZUJvYXJkW3RhcmdldFBvc1swXV1bdGFyZ2V0UG9zWzFdXSA9ICdYJztcclxuICAgICAgaWYgKHRhcmdldC5pc1N1bmsoKSkge1xyXG4gICAgICAgIHJldHVybiAnVGhlIHNoaXAgaGFzIHN1bmsnO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gdGFyZ2V0Lm5hbWUgKyAnIGhhcyBiZWVuIGhpdCwgJyArICh0YXJnZXQuc2l6ZSAtIHRhcmdldC5oaXRzKSArJyBoaXQocykgbGVmdCc7XHJcbiAgICAgIH1cclxuICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIGdldFN0YXR1czogZnVuY3Rpb24oKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnNoaXBMaXN0LmV2ZXJ5KGVsID0+IGVsLmlzU3VuaygpKTtcclxuICAgIH0sXHJcblxyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgeyBHYW1lYm9hcmQgfTsiLCJpbXBvcnQgeyBHYW1lYm9hcmQgfSBmcm9tIFwiLi9nYW1lYm9hcmRcIjtcclxuXHJcbmNvbnN0IFBsYXllciA9IChuYW1lKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHBsYXllck5hbWU6IG5hbWUsXHJcblxyXG4gICAgZ2FtZWJvYXJkOiBHYW1lYm9hcmQoKSxcclxuXHJcbiAgICBhdHRhY2s6IGZ1bmN0aW9uIChwbGF5ZXIsIHgsIHkpIHtcclxuICAgICAgcGxheWVyLmdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKFt4LCB5XSk7XHJcbiAgICB9LFxyXG5cclxuICAgIGNvbXB1dGVyQXR0YWNrOiBmdW5jdGlvbiAocGxheWVyKSB7XHJcbiAgICAgIGxldCBjb29yZCA9IGZpbmRWYWxpZE1vdmUocGxheWVyLmdhbWVib2FyZC5wcml2YXRlQm9hcmQpO1xyXG4gICAgICB0aGlzLmF0dGFjayhwbGF5ZXIsIGNvb3JkWzBdLCBjb29yZFsxXSk7XHJcbiAgICB9LFxyXG5cclxuICAgIHNjb3JlOiAwLFxyXG4gIH07XHJcbn07XHJcblxyXG5mdW5jdGlvbiBybmRDb29yZGluYXRlcyAoKSB7XHJcbiAgbGV0IHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XHJcbiAgbGV0IHkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XHJcbiAgcmV0dXJuIFtbeF0sW3ldXTtcclxufVxyXG5cclxuZnVuY3Rpb24gZmluZFZhbGlkTW92ZSAoYm9hcmQpIHtcclxuICAvLyBHZW5lcmF0ZSB0d28gcmFuZG9tIG51bWJlciBiZXR3ZWVuIDAtOVxyXG4gIGxldCBjb29yZGluYXRlcyA9IHJuZENvb3JkaW5hdGVzKCk7XHJcbiAgLy8gY29udGludWUgd2hpbGUgdGhlIG1vdmUgaXMgaW52YWxpZCwgbGF1bmNoIGF0dGFjayB3aGVuIGZpbmRpbmcgYSB2YWxpZCBtb3ZlXHJcbiAgd2hpbGUgKGJvYXJkW2Nvb3JkaW5hdGVzWzBdXVtjb29yZGluYXRlc1sxXV0gPT09ICdYJyB8fCBib2FyZFtjb29yZGluYXRlc1swXV1bY29vcmRpbmF0ZXNbMV1dID09PSAnficpIHtcclxuICAgIGNvb3JkaW5hdGVzID0gcm5kQ29vcmRpbmF0ZXMoKTtcclxuICB9XHJcbiAgcmV0dXJuIGNvb3JkaW5hdGVzO1xyXG59XHJcblxyXG5leHBvcnQgeyBQbGF5ZXIgfTsiLCJjb25zdCBTaGlwID0gKHNpemUsIG5hbWUgPSAnVW5uYW1lZCBzaGlwJywgaWQgPSB1bmRlZmluZWQpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgbmFtZSxcclxuICAgIHNpemUsXHJcbiAgICBoaXRzOiAwLFxyXG4gICAgaGl0OiBmdW5jdGlvbigpIHtcclxuICAgICAgdGhpcy5oaXRzKys7XHJcbiAgICB9LFxyXG5cclxuICAgIGlzU3VuazogZnVuY3Rpb24oKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmhpdHMgPj0gdGhpcy5zaXplID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgfSxcclxuXHJcbiAgICBpZCxcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IHsgU2hpcCB9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5pbXBvcnQgeyBTaGlwIH0gZnJvbSAnLi9zaGlwLmpzJztcclxuaW1wb3J0IHsgR2FtZWJvYXJkIH0gZnJvbSAnLi9nYW1lYm9hcmQnO1xyXG5pbXBvcnQgeyBQbGF5ZXIgfSBmcm9tICcuL3BsYXllcic7XHJcblxyXG4vLyBHb2JhbCB2YXJpYWJsZXNcclxubGV0IHBsYXllcjE7XHJcbmxldCBwbGF5ZXIyO1xyXG5sZXQgcDFDZWxscztcclxubGV0IHAyQ2VsbHM7XHJcbmxldCBnYW1lTW9kZTtcclxubGV0IGN1cnJlbnRQbGF5ZXIgPSAncGxheWVyMSc7XHJcblxyXG4vLyBET00gRWxlbWVudHNcclxuY29uc3QgbmV3X2dhbWVfYnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ldy1nYW1lX2J1dHRvbicpO1xyXG5jb25zdCBwdnBfbmV3X2dhbWVfYnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3B2cC1uZXctZ2FtZV9idXR0b24nKTtcclxuY29uc3Qgc3RhcnRfZ2FtZV9idXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhcnQtZ2FtZV9idXR0b24nKTtcclxuXHJcbmNvbnN0IHBsYXllcjFfYm9hcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxheWVyMS1ib2FyZCcpO1xyXG5jb25zdCBwbGF5ZXIxX3NoaXBzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYXllcjEtc2hpcHMnKTtcclxuY29uc3QgcGxheWVyMl9ib2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGF5ZXIyLWJvYXJkJyk7XHJcbmNvbnN0IHBsYXllcjJfc2hpcHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxheWVyMi1zaGlwcycpO1xyXG5jb25zdCBwbGF5ZXIxX2xvZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGF5ZXIxLWxvZycpO1xyXG5jb25zdCBwbGF5ZXIyX2xvZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGF5ZXIyLWxvZycpO1xyXG5jb25zdCB0dXJuX2luZm8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudHVybi1pbmZvJyk7XHJcblxyXG5cclxuLy8gTW9kYWxzIGRpc3BsYXlcclxuY29uc3QgY2xvc2VNb2RhbEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbG9zZS1tb2RhbF9idXR0b24nKTtcclxuY2xvc2VNb2RhbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IENsb3NlTW9kYWwoJ2dhbWUtb3Zlcl9tb2RhbCcpKTtcclxuXHJcbmZ1bmN0aW9uIE9wZW5Nb2RhbChtb2RhbCkge1xyXG4gIGNvbnN0IGJhY2tkcm9wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJhY2tkcm9wJyk7XHJcbiAgYmFja2Ryb3Auc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgYmFja2Ryb3AuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBDbG9zZU1vZGFsKG1vZGFsKSk7XHJcbiAgY29uc3QgbW9kYWxUb09wZW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHttb2RhbH1gKTtcclxuICBtb2RhbFRvT3Blbi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxufVxyXG5cclxuZnVuY3Rpb24gQ2xvc2VNb2RhbChtb2RhbCkge1xyXG4gIGNvbnN0IGJhY2tkcm9wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJhY2tkcm9wJyk7XHJcbiAgYmFja2Ryb3Auc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICBjb25zdCBtb2RhbFRvQ2xvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHttb2RhbH1gKTtcclxuICBtb2RhbFRvQ2xvc2Uuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxufVxyXG5cclxuZnVuY3Rpb24gR2FtZU92ZXJNb2RhbCAoKSB7XHJcbiAgY29uc3QgYmFja2Ryb3AgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmFja2Ryb3AnKTtcclxuICBiYWNrZHJvcC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICBiYWNrZHJvcC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IENsb3NlTW9kYWwoJ2dhbWUtb3Zlcl9tb2RhbCcpKTtcclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZS1vdmVyX21vZGFsJykuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgaWYgKGN1cnJlbnRQbGF5ZXIgPT09ICdwbGF5ZXIxJykge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbWUtb3Zlcl9tb2RhbCA+IHAnKS50ZXh0Q29udGVudCA9ICdQbGF5ZXIgMiB3aW5zISc7XHJcbiAgfSBlbHNlIHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lLW92ZXJfbW9kYWwgPiBwJykudGV4dENvbnRlbnQgPSAnUGxheWVyIDEgd2lucyEnO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gUGFzc1R1cm5Nb2RhbCAoKSB7XHJcbiAgcDFDZWxscyA9IFBvcHVsYXRlUDEoJ3B1YmxpY0JvYXJkJyk7XHJcbiAgcDJDZWxscyA9IFBvcHVsYXRlUDIoJ3B1YmxpY0JvYXJkJyk7XHJcbiAgY29uc3QgYmFja2Ryb3AgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmFja2Ryb3AnKTtcclxuICBiYWNrZHJvcC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGFzcy10dXJuX21vZGFsJykuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcclxuICBpZiAoY3VycmVudFBsYXllciA9PT0gJ3BsYXllcjEnKSB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGFzcy10dXJuX21vZGFsID4gcCcpLnRleHRDb250ZW50ID0gYFBsYXllciAxJ3MgdHVybmA7XHJcbiAgfSBlbHNlIHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYXNzLXR1cm5fbW9kYWwgPiBwJykudGV4dENvbnRlbnQgPSBgUGxheWVyIDIncyB0dXJuYDtcclxuICB9XHJcbn1cclxuXHJcbi8vIEluaXRpYWxpemUgZ2FtZSBmdW5jdGlvbnNcclxubmV3X2dhbWVfYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gIHJlc2V0RE9NKCk7XHJcbiAgSW5pdGlhbGl6ZUdhbWUoJ1BsYXllcicsICdDb21wdXRlcicsICdjb20nKTtcclxuICBwbGFjZW1lbnRQaGFzZSgpO1xyXG4gIHN0YXJ0X2dhbWVfYnV0dG9uLnRleHRDb250ZW50ID0gJ1N0YXJ0IHRoZSBiYXR0bGUnO1xyXG59KTtcclxuXHJcbnB2cF9uZXdfZ2FtZV9idXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgcmVzZXRET00oKTtcclxuICBJbml0aWFsaXplR2FtZSgnUGxheWVyIDEnLCAnUGxheWVyIDInLCAncHZwJyk7XHJcbiAgcGxhY2VtZW50UGhhc2UoKTtcclxuICBzdGFydF9nYW1lX2J1dHRvbi50ZXh0Q29udGVudCA9ICdDaGFuZ2UgcGxheWVyJztcclxufSk7XHJcblxyXG5zdGFydF9nYW1lX2J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICBpZiAoZ2FtZU1vZGUgPT09ICdjb20nKSB7XHJcbiAgICBTdGFydEdhbWUoKTtcclxuICB9IGVsc2UgaWYgKGdhbWVNb2RlID09PSAncHZwJyAmJiBwbGF5ZXIyLmdhbWVib2FyZC5zaGlwTGlzdC5sZW5ndGggPT09IDUgJiYgcGxheWVyMi5nYW1lYm9hcmQuc2hpcExpc3QubGVuZ3RoID09PSA1KSB7IFxyXG4gICAgcGxheWVyMl9zaGlwcy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgU3RhcnRHYW1lKCk7XHJcbiAgfVxyXG4gIGVsc2Uge1xyXG4gICAgcmVzZXRET00oJ3BsYXllcjInKTtcclxuICAgIHN0YXJ0X2dhbWVfYnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgIHN0YXJ0X2dhbWVfYnV0dG9uLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdidXR0b25mYWNlJztcclxuICAgIHN0YXJ0X2dhbWVfYnV0dG9uLnRleHRDb250ZW50ID0gJ1N0YXJ0IGdhbWUnO1xyXG4gICAgY2hhbmdlUGxheWVyUGxhY2VtZW50KCk7XHJcbiAgfVxyXG59KTtcclxuXHJcbmZ1bmN0aW9uIHJlc2V0RE9NIChwbGF5ZXIgPSAncGxheWVyMScpIHtcclxuICBjb25zdCBzaGlwX2xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAjJHtwbGF5ZXJ9LXNoaXBzIGxpYCk7XHJcbiAgY29uc3Qgb3JpZW50YXRpb25fYnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYCMke3BsYXllcn0tc2hpcHMgaW1nYCk7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwX2xpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgIHNoaXBfbGlzdFtpXS5zdHlsZS5jb2xvciA9ICdibGFjayc7XHJcbiAgfVxyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgb3JpZW50YXRpb25fYnV0dG9ucy5sZW5ndGg7IGkrKykge1xyXG4gICAgb3JpZW50YXRpb25fYnV0dG9uc1tpXS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICB9XHJcbiAgaWYgKHBsYXllciA9PT0gJ3BsYXllcjEnKSB7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxheWVyMi1zaGlwcycpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBjaGFuZ2VQbGF5ZXJQbGFjZW1lbnQgKCkge1xyXG4gIGlmIChwbGF5ZXIxLmdhbWVib2FyZC5zaGlwTGlzdC5sZW5ndGggIT09IDUpIHtcclxuICAgIHRocm93IG5ldyBFcnJvciAoJ1BsYXllciAxIG11c3QgZmlyc3QgcGxhY2UgYWxsIGhpcy9oZXIgc2hpcHMuJyk7XHJcbiAgfSBlbHNlIHtcclxuICAgIHBsYXllcjFfc2hpcHMuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIHAxQ2VsbHMgPSBQb3B1bGF0ZVAxKCdwdWJsaWNCb2FyZCcpO1xyXG4gICAgUGxheWVyMlBsYWNlU2hpcHMoKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIEluaXRpYWxpemVHYW1lKHAxbmFtZSwgcDJuYW1lLCBtb2RlKSB7XHJcbiAgZ2FtZU1vZGUgPSBtb2RlO1xyXG4gIHBsYXllcjEgPSBQbGF5ZXIocDFuYW1lKTtcclxuICBwbGF5ZXIyID0gUGxheWVyKHAybmFtZSk7XHJcbiAgcDFDZWxscyA9IFBvcHVsYXRlUDEoKTtcclxuICBwMkNlbGxzID0gUG9wdWxhdGVQMigncHVibGljQm9hcmQnKTtcclxufVxyXG5cclxuZnVuY3Rpb24gQ29tcHV0ZXJQbGFjZVNoaXBzICgpIHtcclxuICBwbGF5ZXIyLmdhbWVib2FyZC5jb21wdXRlclBsYWNlU2hpcCg1LCAnQ2FycmllcicpO1xyXG4gIHBsYXllcjIuZ2FtZWJvYXJkLmNvbXB1dGVyUGxhY2VTaGlwKDQsICdCYXR0bGVzaGlwJyk7XHJcbiAgcGxheWVyMi5nYW1lYm9hcmQuY29tcHV0ZXJQbGFjZVNoaXAoMywgJ0NydWlzZXInKTtcclxuICBwbGF5ZXIyLmdhbWVib2FyZC5jb21wdXRlclBsYWNlU2hpcCgzLCAnU3VibWFyaW5lJyk7XHJcbiAgcGxheWVyMi5nYW1lYm9hcmQuY29tcHV0ZXJQbGFjZVNoaXAoMiwgJ0Rlc3Ryb3llcicpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBwbGFjZW1lbnRQaGFzZSAoKSB7XHJcbiAgaWYgKGdhbWVNb2RlID09PSAnY29tJykge1xyXG4gICAgQ29tcHV0ZXJQbGFjZVNoaXBzKCk7XHJcbiAgICBQbGF5ZXIxUGxhY2VTaGlwcygpO1xyXG4gICAgcGxheWVyMl9zaGlwcy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBQbGF5ZXIxUGxhY2VTaGlwcygpO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gUGxheWVyMVBsYWNlU2hpcHMgKCkge1xyXG4gIHBsYXllcjFfc2hpcHMuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgY29uc3QgcDFDYXJyaWVySG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnAxLWNhcnJpZXIgPiAuaG9yJyk7XHJcbiAgY29uc3QgcDFDYXJyaWVyVmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnAxLWNhcnJpZXIgPiAudmVyJyk7XHJcbiAgcDFDYXJyaWVySG9yLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gQWN0aXZhdGVQbGFjZW1lbnQocGxheWVyMSwgcDFDZWxscywgNSwgJ0NhcnJpZXInLCAnLnAxLWNhcnJpZXInKSk7XHJcbiAgcDFDYXJyaWVyVmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gQWN0aXZhdGVQbGFjZW1lbnQocGxheWVyMSwgcDFDZWxscywgNSwgJ0NhcnJpZXInLCAnLnAxLWNhcnJpZXInLCAndmVyJykpO1xyXG4gIGNvbnN0IHAxQmF0dGxlc2hpcEhvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wMS1iYXR0bGVzaGlwID4gLmhvcicpO1xyXG4gIGNvbnN0IHAxQmF0dGxlc2hpcFZlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wMS1iYXR0bGVzaGlwID4gLnZlcicpO1xyXG4gIHAxQmF0dGxlc2hpcEhvci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IEFjdGl2YXRlUGxhY2VtZW50KHBsYXllcjEsIHAxQ2VsbHMsIDQsICdCYXR0bGVzaGlwJywgJy5wMS1iYXR0bGVzaGlwJykpO1xyXG4gIHAxQmF0dGxlc2hpcFZlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IEFjdGl2YXRlUGxhY2VtZW50KHBsYXllcjEsIHAxQ2VsbHMsIDQsICdCYXR0bGVzaGlwJywgJy5wMS1iYXR0bGVzaGlwJywgJ3ZlcicpKTtcclxuICBjb25zdCBwMUNydWlzZXJIb3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucDEtY3J1aXNlciA+IC5ob3InKTtcclxuICBjb25zdCBwMUNydWlzZXJWZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucDEtY3J1aXNlciA+IC52ZXInKTtcclxuICBwMUNydWlzZXJIb3IuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBBY3RpdmF0ZVBsYWNlbWVudChwbGF5ZXIxLCBwMUNlbGxzLCAzLCAnQ3J1aXNlcicsICcucDEtY3J1aXNlcicpKTtcclxuICBwMUNydWlzZXJWZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBBY3RpdmF0ZVBsYWNlbWVudChwbGF5ZXIxLCBwMUNlbGxzLCAzLCAnQ3J1aXNlcicsICcucDEtY3J1aXNlcicsICd2ZXInKSk7XHJcbiAgY29uc3QgcDFTdWJtYXJpbmVIb3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucDEtc3VibWFyaW5lID4gLmhvcicpO1xyXG4gIGNvbnN0IHAxU3VibWFyaW5lVmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnAxLXN1Ym1hcmluZSA+IC52ZXInKTtcclxuICBwMVN1Ym1hcmluZUhvci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IEFjdGl2YXRlUGxhY2VtZW50KHBsYXllcjEsIHAxQ2VsbHMsIDMsICdTdWJtYXJpbmUnLCAnLnAxLXN1Ym1hcmluZScpKTtcclxuICBwMVN1Ym1hcmluZVZlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IEFjdGl2YXRlUGxhY2VtZW50KHBsYXllcjEsIHAxQ2VsbHMsIDMsICdTdWJtYXJpbmUnLCAnLnAxLXN1Ym1hcmluZScsICd2ZXInKSk7XHJcbiAgY29uc3QgcDFEZXN0cm95ZXJIb3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucDEtZGVzdHJveWVyID4gLmhvcicpO1xyXG4gIGNvbnN0IHAxRGVzdHJveWVyVmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnAxLWRlc3Ryb3llciA+IC52ZXInKTtcclxuICBwMURlc3Ryb3llckhvci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IEFjdGl2YXRlUGxhY2VtZW50KHBsYXllcjEsIHAxQ2VsbHMsIDIsICdEZXN0cm95ZXInLCAnLnAxLWRlc3Ryb3llcicpKTtcclxuICBwMURlc3Ryb3llclZlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IEFjdGl2YXRlUGxhY2VtZW50KHBsYXllcjEsIHAxQ2VsbHMsIDIsICdEZXN0cm95ZXInLCAnLnAxLWRlc3Ryb3llcicsICd2ZXInKSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFBsYXllcjJQbGFjZVNoaXBzICgpIHtcclxuICBwbGF5ZXIyX3NoaXBzLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gIGNvbnN0IHAyQ2FycmllckhvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wMi1jYXJyaWVyID4gLmhvcicpO1xyXG4gIGNvbnN0IHAyQ2FycmllclZlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wMi1jYXJyaWVyID4gLnZlcicpO1xyXG4gIHAyQ2Fycmllckhvci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IEFjdGl2YXRlUGxhY2VtZW50KHBsYXllcjIsIHAyQ2VsbHMsIDUsICdDYXJyaWVyJywgJy5wMi1jYXJyaWVyJykpO1xyXG4gIHAyQ2FycmllclZlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IEFjdGl2YXRlUGxhY2VtZW50KHBsYXllcjIsIHAyQ2VsbHMsIDUsICdDYXJyaWVyJywgJy5wMi1jYXJyaWVyJywgJ3ZlcicpKTtcclxuICBjb25zdCBwMkJhdHRsZXNoaXBIb3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucDItYmF0dGxlc2hpcCA+IC5ob3InKTtcclxuICBjb25zdCBwMkJhdHRsZXNoaXBWZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucDItYmF0dGxlc2hpcCA+IC52ZXInKTtcclxuICBwMkJhdHRsZXNoaXBIb3IuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBBY3RpdmF0ZVBsYWNlbWVudChwbGF5ZXIyLCBwMkNlbGxzLCA0LCAnQmF0dGxlc2hpcCcsICcucDItYmF0dGxlc2hpcCcpKTtcclxuICBwMkJhdHRsZXNoaXBWZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBBY3RpdmF0ZVBsYWNlbWVudChwbGF5ZXIyLCBwMkNlbGxzLCA0LCAnQmF0dGxlc2hpcCcsICcucDItYmF0dGxlc2hpcCcsICd2ZXInKSk7XHJcbiAgY29uc3QgcDJDcnVpc2VySG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnAyLWNydWlzZXIgPiAuaG9yJyk7XHJcbiAgY29uc3QgcDJDcnVpc2VyVmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnAyLWNydWlzZXIgPiAudmVyJyk7XHJcbiAgcDJDcnVpc2VySG9yLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gQWN0aXZhdGVQbGFjZW1lbnQocGxheWVyMiwgcDJDZWxscywgMywgJ0NydWlzZXInLCAnLnAyLWNydWlzZXInKSk7XHJcbiAgcDJDcnVpc2VyVmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gQWN0aXZhdGVQbGFjZW1lbnQocGxheWVyMiwgcDJDZWxscywgMywgJ0NydWlzZXInLCAnLnAyLWNydWlzZXInLCAndmVyJykpO1xyXG4gIGNvbnN0IHAyU3VibWFyaW5lSG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnAyLXN1Ym1hcmluZSA+IC5ob3InKTtcclxuICBjb25zdCBwMlN1Ym1hcmluZVZlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wMi1zdWJtYXJpbmUgPiAudmVyJyk7XHJcbiAgcDJTdWJtYXJpbmVIb3IuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBBY3RpdmF0ZVBsYWNlbWVudChwbGF5ZXIyLCBwMkNlbGxzLCAzLCAnU3VibWFyaW5lJywgJy5wMi1zdWJtYXJpbmUnKSk7XHJcbiAgcDJTdWJtYXJpbmVWZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBBY3RpdmF0ZVBsYWNlbWVudChwbGF5ZXIyLCBwMkNlbGxzLCAzLCAnU3VibWFyaW5lJywgJy5wMi1zdWJtYXJpbmUnLCAndmVyJykpO1xyXG4gIGNvbnN0IHAyRGVzdHJveWVySG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnAyLWRlc3Ryb3llciA+IC5ob3InKTtcclxuICBjb25zdCBwMkRlc3Ryb3llclZlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wMi1kZXN0cm95ZXIgPiAudmVyJyk7XHJcbiAgcDJEZXN0cm95ZXJIb3IuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBBY3RpdmF0ZVBsYWNlbWVudChwbGF5ZXIyLCBwMkNlbGxzLCAyLCAnRGVzdHJveWVyJywgJy5wMi1kZXN0cm95ZXInKSk7XHJcbiAgcDJEZXN0cm95ZXJWZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBBY3RpdmF0ZVBsYWNlbWVudChwbGF5ZXIyLCBwMkNlbGxzLCAyLCAnRGVzdHJveWVyJywgJy5wMi1kZXN0cm95ZXInLCAndmVyJykpO1xyXG59XHJcblxyXG4vLyBBY3RpdmF0ZSBjbGljayBvbiBvd24gYm9hcmQgdG8gcGxhY2Ugc2hpcHNcclxuZnVuY3Rpb24gQWN0aXZhdGVQbGFjZW1lbnQgKHBsYXllciwgY2VsbHNBcnIsIHNpemUsIHNoaXBOYW1lLCBkb21FbGVtZW50LCBvcmllbnRhdGlvbiA9ICdob3InKSB7ICBcclxuICAvLyBDaGVjayBpZiB0aGUgc2hpcCBoYXMgYWxyZWFkeSBiZWVuIHBsYWNlZCwgaWYgeWVzIHRoZW4gdGhlIGZ1bmN0aW9uIHJldHVybnMgYW4gZXJyb3JcclxuICBsZXQgcGxhY2VkU2hpcCA9IHBsYXllci5nYW1lYm9hcmQuc2hpcExpc3QuZmluZChlbCA9PiBlbC5uYW1lID09PSBzaGlwTmFtZSk7XHJcbiAgaWYgKHBsYWNlZFNoaXApIHtcclxuICAgIHRocm93IG5ldyBFcnJvcignVGhpcyBzaGlwIGlzIGFscmVhZHkgaW4gcGxhY2UuJyk7XHJcbiAgXHJcbiAgfSBlbHNlIHtcclxuICAvLyBEaXNwbGF5IHNoaXAgc2l6ZSBvdmVybGF5IG9uIGhvdmVyXHJcbiAgbGV0IGNvbG9yZWRDZWxsO1xyXG4gIGNlbGxzQXJyLmZvckVhY2goZWwgPT4ge1xyXG4gICAgaWYgKG9yaWVudGF0aW9uID09PSAnaG9yJykge1xyXG4gICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCAoKSA9PiB7ICAgIFxyXG4gICAgICAgIGNvbnN0IHN0YXJ0aW5nWSA9IGVsLmNsYXNzTmFtZS5zbGljZSgwLDcpO1xyXG4gICAgICAgIGNvbnN0IHN0YXJ0aW5nWCA9ICtlbC5jbGFzc05hbWUuc2xpY2UoNyw4KTtcclxuICAgICAgICBpZiAocGxheWVyLmdhbWVib2FyZC5pc1ZhbGlkKHNpemUsIFsrc3RhcnRpbmdZLnNsaWNlKC0xKSwgc3RhcnRpbmdYXSkpIHtcclxuICAgICAgICAgIGZvciAobGV0IGkgPSBzdGFydGluZ1g7IGkgPCAoK3N0YXJ0aW5nWCArIHNpemUpOyBpKyspIHtcclxuICAgICAgICAgICAgY29sb3JlZENlbGwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGAke3N0YXJ0aW5nWX0ke2l9YClbMF07XHJcbiAgICAgICAgICAgIGNvbG9yZWRDZWxsLmNsYXNzTGlzdC5hZGQoJ3BsYWNpbmctc2hpcC1jZWxsJyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIGNlbGxzQXJyLmZvckVhY2goZWwgPT4gZWwuY2xhc3NMaXN0LnJlbW92ZSgncGxhY2luZy1zaGlwLWNlbGwnKSk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgaWYgKHN0YXJ0aW5nWCArIHNpemUgPiAxMCkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gc3RhcnRpbmdYOyBpIDwgMTA7IGkrKykge1xyXG4gICAgICAgICAgICAgIGNvbG9yZWRDZWxsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShgJHtzdGFydGluZ1l9JHtpfWApWzBdO1xyXG4gICAgICAgICAgICAgIGNvbG9yZWRDZWxsLmNsYXNzTGlzdC5hZGQoJ3BsYWNpbmctZXJyb3InKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IHN0YXJ0aW5nWDsgaSA8IHN0YXJ0aW5nWCArIHNpemU7IGkrKykge1xyXG4gICAgICAgICAgICAgIGNvbG9yZWRDZWxsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShgJHtzdGFydGluZ1l9JHtpfWApWzBdO1xyXG4gICAgICAgICAgICAgIGNvbG9yZWRDZWxsLmNsYXNzTGlzdC5hZGQoJ3BsYWNpbmctZXJyb3InKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIGNlbGxzQXJyLmZvckVhY2goZWwgPT4gZWwuY2xhc3NMaXN0LnJlbW92ZSgncGxhY2luZy1lcnJvcicpKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCAoZSkgPT4geyAgICBcclxuICAgICAgICBjb25zdCBZY29vcmQgPSArZWwuY2xhc3NOYW1lLnNsaWNlKDYsNyk7XHJcbiAgICAgICAgY29uc3Qgc3RhcnRpbmdYID0gK2VsLmNsYXNzTmFtZS5zbGljZSg3LDgpO1xyXG4gICAgICAgIGNvbnN0IGNlbGxOYW1lID0gZWwuY2xhc3NOYW1lLnNsaWNlKDAsNik7XHJcbiAgICAgICAgaWYgKHBsYXllci5nYW1lYm9hcmQuaXNWYWxpZChzaXplLCBbWWNvb3JkLCBzdGFydGluZ1hdLCAndmVyJykpIHtcclxuICAgICAgICAgIGZvciAobGV0IGkgPSBZY29vcmQ7IGkgPCAoWWNvb3JkICsgc2l6ZSk7IGkrKykge1xyXG4gICAgICAgICAgICBjb2xvcmVkQ2VsbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoYCR7Y2VsbE5hbWV9JHtpfSR7c3RhcnRpbmdYfWApWzBdO1xyXG4gICAgICAgICAgICBjb2xvcmVkQ2VsbC5jbGFzc0xpc3QuYWRkKCdwbGFjaW5nLXNoaXAtY2VsbCcpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBjZWxsc0Fyci5mb3JFYWNoKGVsID0+IGVsLmNsYXNzTGlzdC5yZW1vdmUoJ3BsYWNpbmctc2hpcC1jZWxsJykpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGlmIChZY29vcmQgKyBzaXplID4gMTApe1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gWWNvb3JkOyBpIDwgMTA7IGkrKykge1xyXG4gICAgICAgICAgICAgIGNvbG9yZWRDZWxsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShgJHtjZWxsTmFtZX0ke2l9JHtzdGFydGluZ1h9YClbMF07XHJcbiAgICAgICAgICAgICAgY29sb3JlZENlbGwuY2xhc3NMaXN0LmFkZCgncGxhY2luZy1lcnJvcicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gWWNvb3JkOyBpIDwgWWNvb3JkICsgc2l6ZTsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgY29sb3JlZENlbGwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGAke2NlbGxOYW1lfSR7aX0ke3N0YXJ0aW5nWH1gKVswXTtcclxuICAgICAgICAgICAgICBjb2xvcmVkQ2VsbC5jbGFzc0xpc3QuYWRkKCdwbGFjaW5nLWVycm9yJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgKGUpID0+IHtcclxuICAgICAgICAgICAgY2VsbHNBcnIuZm9yRWFjaChlbCA9PiBlbC5jbGFzc0xpc3QucmVtb3ZlKCdwbGFjaW5nLWVycm9yJykpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBQbGFjZSBzaGlwIHdoZW4gY2xpY2tpbmdcclxuICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgY29uc3QgdGFyZ2V0Q2VsbCA9IChlbC5jbGFzc05hbWUuc2xpY2UoNiwgOCkpLnNwbGl0KCcnKTtcclxuICAgICAgY29uc3QgdGFyZ2V0Q29vcmRpbmF0ZXMgPSBbK3RhcmdldENlbGxbMF0sICt0YXJnZXRDZWxsWzFdXTtcclxuICAgICAgcGxheWVyLmdhbWVib2FyZC5wbGFjZVNoaXAoc2l6ZSwgdGFyZ2V0Q29vcmRpbmF0ZXMsIHNoaXBOYW1lLCBvcmllbnRhdGlvbik7XHJcbiAgICAgIGlmIChwbGF5ZXIgPT09IHBsYXllcjEpIHtcclxuICAgICAgICBwMUNlbGxzID0gUG9wdWxhdGVQMSgpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHAyQ2VsbHMgPSBQb3B1bGF0ZVAyKCdwcml2YXRlQm9hcmQnKTtcclxuICAgICAgfVxyXG4gICAgICBjb25zdCBzaGlwTGlzdE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGRvbUVsZW1lbnQpO1xyXG4gICAgICBzaGlwTGlzdE5hbWUuc3R5bGUuY29sb3IgPSAnZ3JleSc7XHJcbiAgICAgIGNvbnN0IGhvckJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCR7ZG9tRWxlbWVudH0gPiAuaG9yYCk7XHJcbiAgICAgIGNvbnN0IHZlckJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCR7ZG9tRWxlbWVudH0gPiAudmVyYCk7XHJcbiAgICAgIGhvckJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICB2ZXJCdXR0b24uc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgLy8gSW4gUHZQIHdoZW4gdGhlIGxhc3Qgc2hpcCBpcyBwbGFjZWQsIGRpc3BsYXkgdGhlICdzdGFydCBnYW1lIGJ1dHRvbidcclxuICAgICAgaWYgKGdhbWVNb2RlID09PSAncHZwJyAmJiBwbGF5ZXIxLmdhbWVib2FyZC5zaGlwTGlzdC5sZW5ndGggPT09IDUpIHtcclxuICAgICAgICBzdGFydF9nYW1lX2J1dHRvbi5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgIHN0YXJ0X2dhbWVfYnV0dG9uLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd5ZWxsb3cnO1xyXG4gICAgICAgIHAxUGxhY2VkQWxsU2hpcHMgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChnYW1lTW9kZSA9PT0gJ3B2cCcgJiYgcGxheWVyMS5nYW1lYm9hcmQuc2hpcExpc3QubGVuZ3RoID09PSA1ICYmIHBsYXllcjIuZ2FtZWJvYXJkLnNoaXBMaXN0Lmxlbmd0aCA9PT0gNSkge1xyXG4gICAgICAgIHN0YXJ0X2dhbWVfYnV0dG9uLmRpc2FibGVkID0gIGZhbHNlO1xyXG4gICAgICAgIHN0YXJ0X2dhbWVfYnV0dG9uLnRleHRDb250ZW50ID0gJ1N0YXJ0IGdhbWUnO1xyXG4gICAgICAgIHN0YXJ0X2dhbWVfYnV0dG9uLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdncmVlbic7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0pO31cclxufVxyXG5cclxuZnVuY3Rpb24gU3RhcnRHYW1lICgpIHtcclxuICAvLyBDaGVjayBpZiBhbGwgc2hpcHMgaGF2ZSBiZWVuIHBsYWNlZCBiZWZvcmUgbGF1bmNoaW5nIHRoZSBnYW1lXHJcbiAgaWYgKHBsYXllcjEuZ2FtZWJvYXJkLnNoaXBMaXN0Lmxlbmd0aCAhPT0gNSkge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKCdZb3UgbXVzdCBzdGlsbCBwbGFjZSBzaGlwcyEnKTtcclxuICB9IGVsc2UgaWYgKHdpbkNoZWNrKCkpIHtcclxuICAgIHRocm93IG5ldyBFcnJvciAoXCJUaGUgZ2FtZSBpcyBhbHJlYWR5IG92ZXJcIik7XHJcbiAgfSBlbHNlIHtcclxuICAgIEluaXRpYWxpemVUdXJuKGN1cnJlbnRQbGF5ZXIpO1xyXG4gIH1cclxufVxyXG5cclxuLy8gTWFpbiBnYW1lIGZsb3csIGFsdGVybmF0ZSB0dXJuIGJldHdlZW4gcGxheWVycyBhbmQgZW5hYmxlIGF0dGFja2luZyB0aGUgb3Bwb25lbnQncyBib2FyZFxyXG5mdW5jdGlvbiBJbml0aWFsaXplVHVybiAoY3VycmVudFBsYXllcikge1xyXG4gIGlmIChnYW1lTW9kZSA9PT0gJ2NvbScpIHtcclxuICAgIFVwZGF0ZUluZm9EaXNwbGF5KCk7XHJcbiAgICBwMUNlbGxzID0gUG9wdWxhdGVQMSgpO1xyXG4gICAgcDJDZWxscyA9IFBvcHVsYXRlUDIoKTtcclxuICAgIGlmIChjdXJyZW50UGxheWVyID09PSAncGxheWVyMScpIHtcclxuICAgICAgcDFDZWxscyA9IFBvcHVsYXRlUDEoJ3ByaXZhdGVCb2FyZCcpO1xyXG4gICAgICBwMkNlbGxzID0gUG9wdWxhdGVQMigncHVibGljQm9hcmQnKTtcclxuICAgICAgQWN0aXZhdGVBdHRhY2tPbihwMkNlbGxzLCBwbGF5ZXIxLCBwbGF5ZXIyKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbXB1dGVyQXR0YWNrKCk7IFxyXG4gICAgfVxyXG4gIH0gZWxzZSB7XHJcbiAgICBQYXNzVHVybk1vZGFsKCk7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFzcy10dXJuX2NvbmZpcm0tYnV0dG9uJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgIENsb3NlTW9kYWwoJ3Bhc3MtdHVybl9tb2RhbCcpO1xyXG4gICAgICBpZiAoY3VycmVudFBsYXllciA9PT0gJ3BsYXllcjEnKSB7XHJcbiAgICAgICAgcDFDZWxscyA9IFBvcHVsYXRlUDEoJ3ByaXZhdGVCb2FyZCcpO1xyXG4gICAgICAgIHAyQ2VsbHMgPSBQb3B1bGF0ZVAyKCdwdWJsaWNCb2FyZCcpO1xyXG4gICAgICAgIEFjdGl2YXRlQXR0YWNrT24ocDJDZWxscywgcGxheWVyMSwgcGxheWVyMik7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcDFDZWxscyA9IFBvcHVsYXRlUDEoJ3B1YmxpY0JvYXJkJyk7XHJcbiAgICAgICAgcDJDZWxscyA9IFBvcHVsYXRlUDIoJ3ByaXZhdGVCb2FyZCcpO1xyXG4gICAgICAgIEFjdGl2YXRlQXR0YWNrT24ocDFDZWxscywgcGxheWVyMiwgcGxheWVyMSk7IFxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbi8vIFBvcHVsYXRlIHBsYXllciAxIGJvYXJkXHJcbmZ1bmN0aW9uIFBvcHVsYXRlUDEgKGJvYXJkID0gJ3ByaXZhdGVCb2FyZCcpIHtcclxuICBjb25zdCB0YXJnZXRCb2FyZCA9IHBsYXllcjEuZ2FtZWJvYXJkW2JvYXJkXTtcclxuICBwbGF5ZXIxX2JvYXJkLnRleHRDb250ZW50ID0gJyc7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XHJcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqKyspIHtcclxuICAgICAgbGV0IGNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgY2VsbC50ZXh0Q29udGVudCA9IHRhcmdldEJvYXJkW2ldW2pdO1xyXG4gICAgICBpZiAoY2VsbC50ZXh0Q29udGVudCA9PT0gJ1gnKSB7XHJcbiAgICAgICAgY2VsbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI2YzYmJiYic7XHJcbiAgICAgIH0gZWxzZSBpZiAoY2VsbC50ZXh0Q29udGVudCA9PT0gJ34nKSB7XHJcbiAgICAgICAgY2VsbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI2QxZDNlZic7XHJcbiAgICAgIH0gZWxzZSBpZiAoY2VsbC50ZXh0Q29udGVudCkge1xyXG4gICAgICAgIGNlbGwudGV4dENvbnRlbnQgPSBg4paiYDtcclxuICAgICAgICBjZWxsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjYzdlNmQwJztcclxuICAgICAgfVxyXG4gICAgICBjZWxsLmNsYXNzTmFtZSA9IGBjZWxsMSAke2l9JHtqfWA7XHJcbiAgICAgIHBsYXllcjFfYm9hcmQuYXBwZW5kQ2hpbGQoY2VsbCk7XHJcbiAgICB9ICBcclxuICB9XHJcbiAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jZWxsMScpO1xyXG59XHJcblxyXG4vLyBQb3B1bGF0ZSBwbGF5ZXIgMiAoY29tcHV0ZXIpIGJvYXJkLCB1c2luZyB0aGUgcHVibGljQm9hcmQga2V5IHRvIGtlZXAgdW5kaXNjb3ZlcmVkIHNxdWFyZXMgZW1wdHlcclxuZnVuY3Rpb24gUG9wdWxhdGVQMiAoYm9hcmQgPSAncHVibGljQm9hcmQnKSB7XHJcbiAgY29uc3QgdGFyZ2V0Qm9hcmQgPSBwbGF5ZXIyLmdhbWVib2FyZFtib2FyZF07XHJcbiAgcGxheWVyMl9ib2FyZC50ZXh0Q29udGVudCA9ICcnO1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xyXG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XHJcbiAgICAgIGxldCBjZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgIGNlbGwudGV4dENvbnRlbnQgPSB0YXJnZXRCb2FyZFtpXVtqXTtcclxuICAgICAgaWYgKGNlbGwudGV4dENvbnRlbnQgPT09ICdYJykge1xyXG4gICAgICAgIGNlbGwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNmM2JiYmInO1xyXG4gICAgICB9IGVsc2UgaWYgKGNlbGwudGV4dENvbnRlbnQgPT09ICd+Jykge1xyXG4gICAgICAgIGNlbGwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNkMWQzZWYnO1xyXG4gICAgICB9IGVsc2UgaWYgKGNlbGwudGV4dENvbnRlbnQpIHtcclxuICAgICAgICBjZWxsLnRleHRDb250ZW50ID0gYOKWomA7XHJcbiAgICAgICAgY2VsbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI2M3ZTZkMCc7XHJcbiAgICAgIH1cclxuICAgICAgY2VsbC5jbGFzc05hbWUgPSBgY2VsbDIgJHtpfSR7an1gO1xyXG4gICAgICBwbGF5ZXIyX2JvYXJkLmFwcGVuZENoaWxkKGNlbGwpO1xyXG4gICAgfSAgXHJcbiAgfVxyXG4gIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2VsbDInKTtcclxufVxyXG5cclxuLy8gQWN0aXZhdGUgYXR0YWNrIG9uIG9uZSBwbGF5ZXIgYm9hcmQgYXQgYSB0aW1lLCB3b3JrcyBmb3IgUFZQXHJcbmZ1bmN0aW9uIEFjdGl2YXRlQXR0YWNrT24gKGNlbGxzQXJyLCBhdHRhY2tlciwgZGVmZW5kZXIpIHtcclxuICBjZWxsc0Fyci5mb3JFYWNoKGVsID0+IHtcclxuICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgY29uc3QgdGFyZ2V0Q2VsbCA9IChlbC5jbGFzc05hbWUuc2xpY2UoLTIpKS5zcGxpdCgnJyk7XHJcbiAgICAgIGF0dGFja2VyLmF0dGFjayhkZWZlbmRlciwgdGFyZ2V0Q2VsbFswXSwgdGFyZ2V0Q2VsbFsxXSk7XHJcbiAgICAgIC8vIFJldmVhbCBzcXVhcmUgd2hlbiBhdHRhY2tlZFxyXG4gICAgICBpZiAoY3VycmVudFBsYXllciA9PT0gJ3BsYXllcjEnKSB7XHJcbiAgICAgICAgaWYgKGRlZmVuZGVyLmdhbWVib2FyZC5wcml2YXRlQm9hcmRbdGFyZ2V0Q2VsbFswXV1bdGFyZ2V0Q2VsbFsxXV0gPT09ICdYJykge1xyXG4gICAgICAgICAgZGVmZW5kZXIuZ2FtZWJvYXJkLnB1YmxpY0JvYXJkW3RhcmdldENlbGxbMF1dW3RhcmdldENlbGxbMV1dID0gJ1gnO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBkZWZlbmRlci5nYW1lYm9hcmQucHVibGljQm9hcmRbdGFyZ2V0Q2VsbFswXV1bdGFyZ2V0Q2VsbFsxXV0gPSAnfic7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFBvcHVsYXRlUDIoKTtcclxuICAgICAgICBjdXJyZW50UGxheWVyID0gJ3BsYXllcjInO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGlmIChkZWZlbmRlci5nYW1lYm9hcmQucHJpdmF0ZUJvYXJkW3RhcmdldENlbGxbMF1dW3RhcmdldENlbGxbMV1dID09PSAnWCcpIHtcclxuICAgICAgICAgIGRlZmVuZGVyLmdhbWVib2FyZC5wdWJsaWNCb2FyZFt0YXJnZXRDZWxsWzBdXVt0YXJnZXRDZWxsWzFdXSA9ICdYJztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgZGVmZW5kZXIuZ2FtZWJvYXJkLnB1YmxpY0JvYXJkW3RhcmdldENlbGxbMF1dW3RhcmdldENlbGxbMV1dID0gJ34nO1xyXG4gICAgICAgIH1cclxuICAgICAgICBQb3B1bGF0ZVAxKCk7XHJcbiAgICAgICAgY3VycmVudFBsYXllciA9ICdwbGF5ZXIxJztcclxuICAgICAgfVxyXG4gICAgICBpZiAoIXdpbkNoZWNrKCkpIHtcclxuICAgICAgICBJbml0aWFsaXplVHVybihjdXJyZW50UGxheWVyKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBHYW1lT3Zlck1vZGFsKCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0pO1xyXG59XHJcblxyXG4vLyBDb21wdXRlciBhdHRhY2tcclxuZnVuY3Rpb24gY29tcHV0ZXJBdHRhY2sgKCkge1xyXG4gIHBsYXllcjIuY29tcHV0ZXJBdHRhY2socGxheWVyMSk7XHJcbiAgaWYgKCF3aW5DaGVjaygpKSB7XHJcbiAgICBjdXJyZW50UGxheWVyID0gJ3BsYXllcjEnO1xyXG4gICAgSW5pdGlhbGl6ZVR1cm4oY3VycmVudFBsYXllcik7XHJcbiAgfSBlbHNlIHtcclxuICAgIEdhbWVPdmVyTW9kYWwoKTtcclxuICB9XHJcbn1cclxuXHJcbi8vIENoZWNrIHdpbiBjb25kaXRpb25cclxuZnVuY3Rpb24gd2luQ2hlY2sgKCkge1xyXG4gIGlmIChwbGF5ZXIxLmdhbWVib2FyZC5nZXRTdGF0dXMoKSB8fCBwbGF5ZXIyLmdhbWVib2FyZC5nZXRTdGF0dXMoKSkge1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBEaXNwbGF5IGNvbnRyb2xsZXJcclxuZnVuY3Rpb24gVXBkYXRlSW5mb0Rpc3BsYXkgKCkge1xyXG4gIHR1cm5faW5mby50ZXh0Q29udGVudCA9IGN1cnJlbnRQbGF5ZXIgPT09ICdwbGF5ZXIxJyA/IGAke3BsYXllcjEucGxheWVyTmFtZX0ncyB0dXJuYCA6IGAke3BsYXllcjIucGxheWVyTmFtZX0ncyB0dXJuYDtcclxufVxyXG5cclxuLy8gVGVzdCBidXR0b25zXHJcbnBsYXllcjFfbG9nLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gIEdhbWVPdmVyTW9kYWwoKTtcclxuICBjb25zb2xlLmxvZyhwbGF5ZXIxLmdhbWVib2FyZCk7XHJcbn0pO1xyXG5cclxucGxheWVyMl9sb2cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgY29uc29sZS5sb2cocGxheWVyMi5nYW1lYm9hcmQpO1xyXG59KTtcclxuXHJcblxyXG4vLyBST0FETUFQXHJcbi8vIFZpc3VhbCBmZWVkYmFjayA6IGNoYW5nZXIgbGEgY291bGV1ciBkdSBib3V0b24gJ3N0YXJ0JyBsb3JzcXVlIHRvdXMgbGVzIG5hdmlyZXMgc29udCBwbGFjw6lzLCAnbmV3IGdhbWUnIHBsdXMgZW4gw6l2aWRlbmNlIGxvcnNhdWUgw6dhIGZhaXQgc2VucyAocGFydGllIHBhcyBlbmNvcmUgbGFuY8OpZSwgb3UgcGFydGllIHRlcm1pbsOpZSlcclxuLy8gRmFpcmUgbCdVSVxyXG4vLyBBZmZpY2hlciBtZXNzYWdlcyBkJ2VycmV1cnMgZGFucyBsJ1VJXHJcbi8vIFJldGlyZXIgYm91dG9ucyBkZSB0ZXN0XHJcbi8vIE5ldHRveWFnZSBkdSBjb2RlXHJcbi8vIFJFQURNRS5tZFxyXG5cclxuLy8gQlVHU1xyXG4vLyBCdWcgZCdhZmZpY2hhZ2UgbG9yc3F1J29uIGNsaXF1ZSBzdXIgdW4gYXV0cmUgbmF2aXJlIGF2YW50IHNhbnMgYXZvaXIgY2xpcXXDqSBhdSBwcsOpYWxhYmxlIHBvdXIgcGxhY2VyIGxlIHByZW1pZXIgOiByZW1vdmUgZXZlbnRMaXN0ZW5lciBlbiBkw6lidXQgZGUgZm9uY3Rpb24gP1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=