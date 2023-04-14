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
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../dist/images/background.jpg */ "./dist/images/background.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../dist/images/logo-big.png */ "./dist/images/logo-big.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Cookie&family=Open+Sans:ital,wght@0,400;0,700;1,400&family=Poiret+One&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n  box-sizing: border-box;\r\n  font-family: 'Poiret One', sans-serif; }\r\n\r\nhtml {\r\n  height: 100%; }\r\n\r\nbody {\r\n  margin: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  background: #782b44;\r\n  background: linear-gradient(0deg, #782b44, #c84771); }\r\n\r\n.background-image {\r\n  width: 100vw;\r\n  height: 100vh;\r\n  position: fixed;\r\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n  background-position: bottom 20% left 0;\r\n  z-index: -1;\r\n  filter: blur(4px) grayscale(30%); }\r\n\r\nheader {\r\n  width: 100%;\r\n  padding: 0 50px;\r\n  text-align: center;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center; }\r\n  header #logo {\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\r\n    background-size: contain;\r\n    background-repeat: no-repeat;\r\n    height: 150px;\r\n    width: 150px;\r\n    margin: 32px; }\r\n\r\nfooter {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  position: absolute;\r\n  bottom: 0;\r\n  width: 100%;\r\n  padding: 8px;\r\n  font-family: 'Open Sans', sans-serif;\r\n  background-color: rgba(34, 34, 34, 0.5);\r\n  color: #cccccc; }\r\n  footer a {\r\n    font-family: 'Open Sans', sans-serif;\r\n    color: #cccccc;\r\n    text-decoration: none; }\r\n    footer a:hover {\r\n      text-decoration: underline; }\r\n  footer .social-links {\r\n    font-family: 'Open Sans', sans-serif;\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 8px; }\r\n    footer .social-links a {\r\n      display: flex;\r\n      align-items: center;\r\n      gap: 8px; }\r\n    footer .social-links img {\r\n      width: 1rem; }\r\n\r\n#new-game_button,\r\n#pvp-new-game_button {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  width: 190px;\r\n  color: #eeeeee;\r\n  background-color: #d97e9c;\r\n  border: 4px double #555555; }\r\n  #new-game_button:hover,\r\n  #pvp-new-game_button:hover {\r\n    background-color: #c84771; }\r\n  #new-game_button:active,\r\n  #pvp-new-game_button:active {\r\n    transform: translateY(2px); }\r\n  #new-game_button img,\r\n  #pvp-new-game_button img {\r\n    height: 24px; }\r\n\r\n#start-game_button {\r\n  transition: background-color 500ms ease-out;\r\n  display: none; }\r\n  #start-game_button:active {\r\n    filter: brightness(85%);\r\n    transform: translateY(2px); }\r\n\r\n.info-container {\r\n  height: fit-content;\r\n  background-color: #e8e2e4;\r\n  display: flex;\r\n  padding: 16px;\r\n  margin: 0 32px;\r\n  gap: 32px;\r\n  border: 10px double #c84771;\r\n  border-radius: 7px; }\r\n  .info-container button {\r\n    cursor: pointer;\r\n    font-family: 'Open Sans', sans-serif;\r\n    font-size: 1rem;\r\n    padding: 8px;\r\n    border-radius: 5px; }\r\n\r\n.game-mode-buttons {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  gap: 25px;\r\n  margin-right: 18px; }\r\n\r\n.battle-info {\r\n  margin-left: 18px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  gap: 24px; }\r\n\r\n.action-info {\r\n  font-size: 1.5rem;\r\n  font-weight: 700; }\r\n\r\n.battlefield {\r\n  display: flex;\r\n  justify-content: center;\r\n  gap: 50px; }\r\n\r\n#player1-container {\r\n  display: flex;\r\n  gap: 8px; }\r\n\r\n#player2-container {\r\n  display: flex;\r\n  flex-direction: row-reverse;\r\n  gap: 8px; }\r\n\r\n.player-info {\r\n  background-color: #e8e2e4;\r\n  width: 230px;\r\n  height: fit-content;\r\n  padding: 16px;\r\n  border-radius: 7px;\r\n  border: 10px double #c84771; }\r\n\r\n#player1-name,\r\n#player2-name {\r\n  font-family: 'Cookie', sans-serif;\r\n  font-size: 2rem;\r\n  font-weight: 700;\r\n  margin-bottom: 16px; }\r\n\r\n#player2-name {\r\n  text-align: end; }\r\n\r\n#player1-score,\r\n#player2-score {\r\n  font-family: 'Open Sans', sans-serif;\r\n  margin-bottom: 8px; }\r\n\r\n.action-descriptor {\r\n  font-family: 'Open Sans', sans-serif; }\r\n\r\n#player1-ships,\r\n#player2-ships {\r\n  display: none;\r\n  font-family: 'Open Sans', sans-serif; }\r\n  #player1-ships ul,\r\n  #player2-ships ul {\r\n    padding: 0;\r\n    margin: 0; }\r\n  #player1-ships li,\r\n  #player2-ships li {\r\n    font-family: 'Open Sans', sans-serif;\r\n    margin: 12px 0;\r\n    display: flex;\r\n    align-items: center;\r\n    border-bottom: 1px solid #782b44; }\r\n\r\n.ship-placement {\r\n  display: flex;\r\n  justify-content: space-between; }\r\n\r\n.orientation-buttons {\r\n  display: flex;\r\n  gap: 8px; }\r\n  .orientation-buttons img {\r\n    height: 1rem;\r\n    cursor: pointer; }\r\n\r\n#player1-board,\r\n#player2-board {\r\n  display: grid;\r\n  grid-template-columns: repeat(10, 1fr);\r\n  grid-template-rows: repeat(10, 1fr); }\r\n  #player1-board .empty-cell,\r\n  #player2-board .empty-cell {\r\n    height: 40px;\r\n    width: 40px;\r\n    border: 1px solid rgba(0, 0, 0, 0.445);\r\n    background-color: rgba(232, 226, 228, 0.15);\r\n    border-radius: 4px; }\r\n\r\n[class^=\"cell\"] {\r\n  height: 40px;\r\n  width: 40px;\r\n  border: 1px solid rgba(0, 0, 0, 0.323);\r\n  background-color: rgba(232, 226, 228, 0.75);\r\n  text-align: center;\r\n  vertical-align: middle;\r\n  font-size: 2rem;\r\n  border-radius: 4px; }\r\n  [class^=\"cell\"]:hover {\r\n    background-color: rgba(255, 223, 87, 0.9);\r\n    cursor: pointer; }\r\n\r\n.placing-ship-cell {\r\n  background-color: rgba(255, 223, 87, 0.9); }\r\n\r\n.placing-error {\r\n  background-color: rgba(255, 0, 0, 0.423); }\r\n  .placing-error:hover {\r\n    background-color: rgba(255, 0, 0, 0.423); }\r\n\r\n.backdrop {\r\n  display: none;\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  height: 100vh;\r\n  width: 100vw;\r\n  background-color: rgba(211, 211, 211, 0.564); }\r\n\r\n.game-over_modal {\r\n  display: none;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  font-size: 2rem;\r\n  position: fixed;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  border: 7px double #c84771;\r\n  border-radius: 4px;\r\n  background-color: #eeeeee;\r\n  z-index: 3;\r\n  padding: 3rem; }\r\n  .game-over_modal img {\r\n    width: 100px; }\r\n  .game-over_modal button {\r\n    font-family: 'Open Sans', sans-serif; }\r\n\r\n.pass-turn_modal {\r\n  display: none;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 50px;\r\n  position: fixed;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  width: 350px;\r\n  height: 200px;\r\n  font-size: 2rem;\r\n  background-color: #eeeeee;\r\n  border: 4px solid #c84771;\r\n  z-index: 3; }\r\n  .pass-turn_modal p {\r\n    margin: 0; }\r\n  .pass-turn_modal button {\r\n    background-color: #c84771;\r\n    color: #eeeeee;\r\n    padding: 8px;\r\n    font-size: 1.5rem; }\r\n\r\n/*# sourceMappingURL=style.css.map */\r\n", "",{"version":3,"sources":["webpack://./src/style.scss","webpack://./src/style.css"],"names":[],"mappings":"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","sourceRoot":""}]);
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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
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
      if (this.isValid(size, startPos, direction) === false) {
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



/***/ }),

/***/ "./dist/images/background.jpg":
/*!************************************!*\
  !*** ./dist/images/background.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "54751b9e7f9e7e697b24.jpg";

/***/ }),

/***/ "./dist/images/logo-big.png":
/*!**********************************!*\
  !*** ./dist/images/logo-big.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9180b04070a53b9a3ade.png";

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
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
let allShipsPlaced= false;
  // Using global variables to keep the score from one battle to the next; return to 0 on page refresh
let playersScores = [0, 0];
let player2Score = 0;

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
const action_info = document.querySelector('.action-info');


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
  document.querySelector('.game-over_modal').style.display = 'flex';
  if (currentPlayer === 'player1') {
    document.querySelector('.game-over_modal > p').textContent = 'Player 2 wins!';
    action_info.textContent = 'Player 2 wins!';
    UpdateScore(player2);
  } else {
    document.querySelector('.game-over_modal > p').textContent = 'Player 1 wins!';
    action_info.textContent = 'Player 1 wins!';
    UpdateScore(player1);
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
  action_info.textContent = 'Place each one of your pastries.';
  start_game_button.style.display = 'block';
  start_game_button.disabled = true;
  start_game_button.style.backgroundColor = 'buttonface';
  start_game_button.textContent = 'Start the battle';
});

pvp_new_game_button.addEventListener('click', () => {
  resetDOM();
  InitializeGame('Player 1', 'Player 2', 'pvp');
  placementPhase();
  action_info.textContent = 'Player 1, place each one of your pastries.';
  start_game_button.style.display = 'block';
  start_game_button.disabled = true;
  start_game_button.style.backgroundColor = 'buttonface';
  start_game_button.textContent = 'Next player';
});

start_game_button.addEventListener('click', () => {
  if (gameMode === 'com') {
    //player1_ships.style.display = 'none';
    StartGame();
  } else if (gameMode === 'pvp' && player2.gameboard.shipList.length === 5 && player2.gameboard.shipList.length === 5) { 
    player2_ships.style.display = 'none';
    StartGame();
  }
  else {
    resetDOM('player2');
    action_info.textContent = 'Player 2, place each one of your pastries.';
    start_game_button.disabled = true;
    start_game_button.style.backgroundColor = 'buttonface';
    start_game_button.textContent = 'Start game';
    changePlayerPlacement();
  }
});

// DOM manipulation functions
function resetDOM (player = 'player1') {
  const ship_list = document.querySelectorAll(`#${player}-ships li`);
  const orientation_buttons = document.querySelectorAll(`#${player}-ships img`);
  for (let i = 0; i < ship_list.length; i++) {
    ship_list[i].style.display = 'flex';
    ship_list[i].style.color = 'black';
  }
  for (let i = 0; i < orientation_buttons.length; i++) {
    orientation_buttons[i].style.display = 'block';
  }
  if (player === 'player1') {
    document.getElementById('player2-ships').style.display = 'none';
  }
}

function RestoreShipsList () {
  document.querySelectorAll('.action-descriptor').forEach(el => {
    el.textContent = '';
  });
  player1_ships.style.display = 'block';
  const p1ShipList = document.querySelectorAll('#player1-ships li');
  p1ShipList.forEach(el => {
    el.style.display = 'flex';
  });
  player2_ships.style.display = 'block';
  const p2ShipList = document.querySelectorAll('#player2-ships li');
  p2ShipList.forEach(el => {
    el.style.display = 'flex';
  });
  if (gameMode === 'com') {
    document.querySelectorAll('.hor').forEach(el => {
      el.style.display = 'none';
    });
    document.querySelectorAll('.ver').forEach(el => {
      el.style.display = 'none';
    });

  }
}



function changePlayerPlacement () {
  if (player1.gameboard.shipList.length !== 5) {
    throw new Error ('Player 1 must first place all his/her pastries.');
  } else {
    player1_ships.style.display = 'none';
    p1Cells = PopulateP1('publicBoard');
    Player2PlaceShips();
  }
}

function InitializeGame(p1name, p2name, mode) {
  currentPlayer = 'player1';
  gameMode = mode;
  allShipsPlaced = false;
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
  const p1CarrierHor = document.querySelector('.p1-carrier .hor');
  const p1CarrierVer = document.querySelector('.p1-carrier .ver');
  p1CarrierHor.addEventListener('click', () => ActivatePlacement(player1, p1Cells, 5, 'Carrier', '.p1-carrier'));
  p1CarrierVer.addEventListener('click', () => ActivatePlacement(player1, p1Cells, 5, 'Carrier', '.p1-carrier', 'ver'));
  const p1BattleshipHor = document.querySelector('.p1-battleship .hor');
  const p1BattleshipVer = document.querySelector('.p1-battleship .ver');
  p1BattleshipHor.addEventListener('click', () => ActivatePlacement(player1, p1Cells, 4, 'Battleship', '.p1-battleship'));
  p1BattleshipVer.addEventListener('click', () => ActivatePlacement(player1, p1Cells, 4, 'Battleship', '.p1-battleship', 'ver'));
  const p1CruiserHor = document.querySelector('.p1-cruiser .hor');
  const p1CruiserVer = document.querySelector('.p1-cruiser .ver');
  p1CruiserHor.addEventListener('click', () => ActivatePlacement(player1, p1Cells, 3, 'Cruiser', '.p1-cruiser'));
  p1CruiserVer.addEventListener('click', () => ActivatePlacement(player1, p1Cells, 3, 'Cruiser', '.p1-cruiser', 'ver'));
  const p1SubmarineHor = document.querySelector('.p1-submarine .hor');
  const p1SubmarineVer = document.querySelector('.p1-submarine .ver');
  p1SubmarineHor.addEventListener('click', () => ActivatePlacement(player1, p1Cells, 3, 'Submarine', '.p1-submarine'));
  p1SubmarineVer.addEventListener('click', () => ActivatePlacement(player1, p1Cells, 3, 'Submarine', '.p1-submarine', 'ver'));
  const p1DestroyerHor = document.querySelector('.p1-destroyer .hor');
  const p1DestroyerVer = document.querySelector('.p1-destroyer .ver');
  p1DestroyerHor.addEventListener('click', () => ActivatePlacement(player1, p1Cells, 2, 'Destroyer', '.p1-destroyer'));
  p1DestroyerVer.addEventListener('click', () => ActivatePlacement(player1, p1Cells, 2, 'Destroyer', '.p1-destroyer', 'ver'));
}

function Player2PlaceShips () {
  player2_ships.style.display = 'block';
  const p2CarrierHor = document.querySelector('.p2-carrier .hor');
  const p2CarrierVer = document.querySelector('.p2-carrier .ver');
  p2CarrierHor.addEventListener('click', () => ActivatePlacement(player2, p2Cells, 5, 'Carrier', '.p2-carrier'));
  p2CarrierVer.addEventListener('click', () => ActivatePlacement(player2, p2Cells, 5, 'Carrier', '.p2-carrier', 'ver'));
  const p2BattleshipHor = document.querySelector('.p2-battleship .hor');
  const p2BattleshipVer = document.querySelector('.p2-battleship .ver');
  p2BattleshipHor.addEventListener('click', () => ActivatePlacement(player2, p2Cells, 4, 'Battleship', '.p2-battleship'));
  p2BattleshipVer.addEventListener('click', () => ActivatePlacement(player2, p2Cells, 4, 'Battleship', '.p2-battleship', 'ver'));
  const p2CruiserHor = document.querySelector('.p2-cruiser .hor');
  const p2CruiserVer = document.querySelector('.p2-cruiser .ver');
  p2CruiserHor.addEventListener('click', () => ActivatePlacement(player2, p2Cells, 3, 'Cruiser', '.p2-cruiser'));
  p2CruiserVer.addEventListener('click', () => ActivatePlacement(player2, p2Cells, 3, 'Cruiser', '.p2-cruiser', 'ver'));
  const p2SubmarineHor = document.querySelector('.p2-submarine .hor');
  const p2SubmarineVer = document.querySelector('.p2-submarine .ver');
  p2SubmarineHor.addEventListener('click', () => ActivatePlacement(player2, p2Cells, 3, 'Submarine', '.p2-submarine'));
  p2SubmarineVer.addEventListener('click', () => ActivatePlacement(player2, p2Cells, 3, 'Submarine', '.p2-submarine', 'ver'));
  const p2DestroyerHor = document.querySelector('.p2-destroyer .hor');
  const p2DestroyerVer = document.querySelector('.p2-destroyer .ver');
  p2DestroyerHor.addEventListener('click', () => ActivatePlacement(player2, p2Cells, 2, 'Destroyer', '.p2-destroyer'));
  p2DestroyerVer.addEventListener('click', () => ActivatePlacement(player2, p2Cells, 2, 'Destroyer', '.p2-destroyer', 'ver'));
}

// Activate click on own board to place ships
function ActivatePlacement (player, cellsArr, size, shipName, domElement, orientation = 'hor') {
  placeShipHighlight(player, cellsArr, size, orientation);
  placeShipClick(player, cellsArr, size, shipName, domElement, orientation);
}

function placeShipHighlight (player, cellsArr, size, orientation = 'hor') {
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
  });
}

function placeShipClick (player, cellsArr, size, shipName, domElement, orientation = 'hor') {
  cellsArr.forEach(el => {
    el.addEventListener('click', () => {
      const targetCell = (el.className.slice(6, 8)).split('');
      const targetCoordinates = [+targetCell[0], +targetCell[1]];
      player.gameboard.placeShip(size, targetCoordinates, shipName, orientation);
      if (player === player1) {
        p1Cells = PopulateP1();
      } else {
        p2Cells = PopulateP2('privateBoard');
      }
      const shipListName = document.querySelector(domElement);
      //shipListName.style.color = 'grey';
      shipListName.style.display = 'none';
      const horButton = document.querySelector(`${domElement}  .hor`);
      const verButton = document.querySelector(`${domElement}  .ver`);
      horButton.style.display = 'none';
      verButton.style.display = 'none';
      updateStartButton();
    });
  });
}

function updateStartButton () {
  if (gameMode === 'com' && player1.gameboard.shipList.length === 5) {
    start_game_button.disabled = false;
    start_game_button.style.backgroundColor = '#80c180';
  }
  if (gameMode === 'pvp' && player1.gameboard.shipList.length === 5 && allShipsPlaced === false) {
    start_game_button.disabled = false;
    start_game_button.style.backgroundColor = '#ffe98a';
    allShipsPlaced = true;
  } else if (gameMode === 'pvp' && player1.gameboard.shipList.length === 5 && player2.gameboard.shipList.length === 5) {
    start_game_button.disabled =  false;
    start_game_button.textContent = 'Start game';
    start_game_button.style.backgroundColor = '#80c180';
  }
}



// Game flow functions
function StartGame () {
  // Check if all ships have been placed before launching the game
  if (player1.gameboard.shipList.length !== 5) {
    throw new Error('You must still place pastries!');
  } else {
    start_game_button.style.display = 'none';
    start_game_button.disabled = true;
    start_game_button.style.backgroundColor = 'buttonface';
    RestoreShipsList();
    InitializeTurn(currentPlayer);
  }
}

function InitializeTurn (currentPlayer) {
  UpdateInfoDisplay();
  if (gameMode === 'com') {
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
        cell.style.backgroundColor = '#c84771';
        cell.style.color = '#ffffff';
      } else if (cell.textContent === '~') {
        cell.style.backgroundColor = 'rgba(192, 186, 188, 0.8)';
        cell.style.color = '#ffffff';
      } else if (cell.textContent) {
        cell.textContent = `▢`;
        cell.style.backgroundColor = '#ffe98a';
        cell.style.color = '#782b44';
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
        cell.style.backgroundColor = '#c84771';
        cell.style.color = '#ffffff';
      } else if (cell.textContent === '~') {
        cell.style.backgroundColor = 'rgba(192, 186, 188, 0.8)';
        cell.style.color = '#ffffff';
      } else if (cell.textContent) {
        cell.textContent = `▢`;
        cell.style.backgroundColor = '#ffe98a';
        cell.style.color = '#782b44';
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
  setTimeout(() => {
    player2.computerAttack(player1);
    if (!winCheck()) {
      currentPlayer = 'player1';
      InitializeTurn(currentPlayer);
    } else {
      GameOverModal();
    }
  }, '1000');
}

// Check win condition
function winCheck () {
  if (player1.gameboard.getStatus() || player2.gameboard.getStatus()) {
    return true;
  }
}

function UpdateScore (player) {
  if (player === player1) {
    playersScores[0]++;
    document.getElementById('player1-score').textContent = `Score: ${playersScores[0]}`;
  } else {
    playersScores[1]++;
    document.getElementById('player2-score').textContent = `Score: ${playersScores[1]}`;
  }
}

// Display controller
function UpdateInfoDisplay () {
  action_info.textContent = currentPlayer === 'player1' ? `${player1.playerName}'s turn` : `${player2.playerName}'s turn`;
}

// Test buttons
player1_log.addEventListener('click', () => {
  console.log(player1.gameboard);
});

player2_log.addEventListener('click', () => {
  console.log(player2.gameboard);
});


// ROADMAP
// Retirer messages d'erreurs de la console
// Afficher la liste des navires pendant le jeu, pour connaître l'état de chacun (coulé/pas coulé)
// Retirer boutons de test
// Nettoyage du code : commentaires, variables non utilisées
// README.md

// BUGS
// Messages d'erreur à chaque placement de navire lorsqu'on recommence une partie
// Bug d'affichage lorsqu'on clique sur un autre navire avant sans avoir cliqué au préalable pour placer le premier : remove eventListener en début de fonction ?

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLGtJQUFnRDtBQUM1Riw0Q0FBNEMsOEhBQThDO0FBQzFGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YsdUlBQXVJLE1BQU0sc0NBQXNDO0FBQ25MLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBLDZDQUE2Qyw2QkFBNkIsOENBQThDLGNBQWMscUJBQXFCLGNBQWMsZ0JBQWdCLGtCQUFrQixtQkFBbUIsMEJBQTBCLDREQUE0RCwyQkFBMkIsbUJBQW1CLG9CQUFvQixzQkFBc0Isd0VBQXdFLG1DQUFtQyw2QkFBNkIsNkNBQTZDLGtCQUFrQix5Q0FBeUMsZ0JBQWdCLGtCQUFrQixzQkFBc0IseUJBQXlCLG9CQUFvQixxQ0FBcUMsNEJBQTRCLG9CQUFvQiwwRUFBMEUsaUNBQWlDLHFDQUFxQyxzQkFBc0IscUJBQXFCLHVCQUF1QixnQkFBZ0Isb0JBQW9CLHFDQUFxQyx5QkFBeUIsZ0JBQWdCLGtCQUFrQixtQkFBbUIsMkNBQTJDLDhDQUE4Qyx1QkFBdUIsZ0JBQWdCLDZDQUE2Qyx1QkFBdUIsZ0NBQWdDLHdCQUF3Qix1Q0FBdUMsNEJBQTRCLDZDQUE2QyxzQkFBc0IsNEJBQTRCLG1CQUFtQixnQ0FBZ0Msd0JBQXdCLDhCQUE4QixxQkFBcUIsa0NBQWtDLHdCQUF3QixtREFBbUQsb0JBQW9CLHFDQUFxQywwQkFBMEIsbUJBQW1CLHFCQUFxQixnQ0FBZ0MsbUNBQW1DLCtEQUErRCxvQ0FBb0MsaUVBQWlFLHFDQUFxQywyREFBMkQsdUJBQXVCLDRCQUE0QixrREFBa0Qsc0JBQXNCLGlDQUFpQyxnQ0FBZ0MscUNBQXFDLHlCQUF5QiwwQkFBMEIsZ0NBQWdDLG9CQUFvQixvQkFBb0IscUJBQXFCLGdCQUFnQixrQ0FBa0MsMkJBQTJCLDhCQUE4Qix3QkFBd0IsNkNBQTZDLHdCQUF3QixxQkFBcUIsNkJBQTZCLDRCQUE0QixvQkFBb0IsNkJBQTZCLDhCQUE4QixnQkFBZ0IsMkJBQTJCLHNCQUFzQix3QkFBd0Isb0JBQW9CLDZCQUE2Qiw4QkFBOEIsa0JBQWtCLHNCQUFzQix3QkFBd0IseUJBQXlCLHNCQUFzQixvQkFBb0IsOEJBQThCLGtCQUFrQiw0QkFBNEIsb0JBQW9CLGlCQUFpQiw0QkFBNEIsb0JBQW9CLGtDQUFrQyxpQkFBaUIsc0JBQXNCLGdDQUFnQyxtQkFBbUIsMEJBQTBCLG9CQUFvQix5QkFBeUIsb0NBQW9DLHlDQUF5Qyx3Q0FBd0Msc0JBQXNCLHVCQUF1Qiw0QkFBNEIsdUJBQXVCLHdCQUF3QiwyQ0FBMkMsMkNBQTJDLDJCQUEyQiw0QkFBNEIsNkNBQTZDLDJDQUEyQyxvQkFBb0IsNkNBQTZDLGlEQUFpRCxtQkFBbUIsb0JBQW9CLGlEQUFpRCw2Q0FBNkMsdUJBQXVCLHNCQUFzQiw0QkFBNEIsMkNBQTJDLHlCQUF5QixvQkFBb0IsdUNBQXVDLDhCQUE4QixvQkFBb0IsaUJBQWlCLGdDQUFnQyxxQkFBcUIsMEJBQTBCLDJDQUEyQyxvQkFBb0IsNkNBQTZDLDRDQUE0QyxtRUFBbUUscUJBQXFCLG9CQUFvQiwrQ0FBK0Msb0RBQW9ELDZCQUE2QiwyQkFBMkIsbUJBQW1CLGtCQUFrQiw2Q0FBNkMsa0RBQWtELHlCQUF5Qiw2QkFBNkIsc0JBQXNCLDJCQUEyQiwrQkFBK0Isa0RBQWtELDBCQUEwQiw0QkFBNEIsa0RBQWtELHdCQUF3QixpREFBaUQsNEJBQTRCLG1EQUFtRCxtQkFBbUIsb0JBQW9CLHNCQUFzQixhQUFhLGNBQWMsb0JBQW9CLG1CQUFtQixxREFBcUQsMEJBQTBCLG9CQUFvQiw2QkFBNkIsMEJBQTBCLHNCQUFzQixzQkFBc0IsZUFBZSxnQkFBZ0IsdUNBQXVDLGlDQUFpQyx5QkFBeUIsZ0NBQWdDLGlCQUFpQixzQkFBc0IsNEJBQTRCLHVCQUF1QiwrQkFBK0IsK0NBQStDLDBCQUEwQixvQkFBb0IsNkJBQTZCLDhCQUE4QiwwQkFBMEIsZ0JBQWdCLHNCQUFzQixlQUFlLGdCQUFnQix1Q0FBdUMsbUJBQW1CLG9CQUFvQixzQkFBc0IsZ0NBQWdDLGdDQUFnQyxtQkFBbUIsMEJBQTBCLG9CQUFvQiwrQkFBK0Isa0NBQWtDLHVCQUF1QixxQkFBcUIsNEJBQTRCLHdEQUF3RCw2R0FBNkcsWUFBWSxtQkFBbUIsTUFBTSxnQkFBZ0IsS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLG9CQUFvQixNQUFNLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxrQkFBa0IsTUFBTSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksa0JBQWtCLE1BQU0sWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLGdCQUFnQixNQUFNLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxnQkFBZ0IsS0FBSyxZQUFZLFdBQVcsaUJBQWlCLE1BQU0saUJBQWlCLE1BQU0sWUFBWSxXQUFXLFlBQVksZ0JBQWdCLEtBQUssVUFBVSxZQUFZLGdCQUFnQixLQUFLLGdCQUFnQixPQUFPLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGtCQUFrQixPQUFPLGtCQUFrQixRQUFRLGlCQUFpQixPQUFPLGdCQUFnQixNQUFNLFlBQVksZ0JBQWdCLEtBQUssWUFBWSxtQkFBbUIsTUFBTSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLGtCQUFrQixNQUFNLFVBQVUsWUFBWSxXQUFXLFVBQVUsa0JBQWtCLE1BQU0sVUFBVSxZQUFZLGFBQWEsV0FBVyxrQkFBa0IsTUFBTSxZQUFZLFdBQVcsWUFBWSxhQUFhLGlCQUFpQixLQUFLLFlBQVksbUJBQW1CLE1BQU0sVUFBVSxZQUFZLGlCQUFpQixLQUFLLFVBQVUsZ0JBQWdCLEtBQUssVUFBVSxZQUFZLGlCQUFpQixLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxtQkFBbUIsT0FBTyxZQUFZLFdBQVcsWUFBWSxtQkFBbUIsTUFBTSxnQkFBZ0IsT0FBTyxZQUFZLG1CQUFtQixNQUFNLGtCQUFrQixPQUFPLFVBQVUsaUJBQWlCLE9BQU8sVUFBVSxlQUFlLE1BQU0sWUFBWSxXQUFXLFVBQVUsWUFBWSxtQkFBbUIsTUFBTSxVQUFVLGtCQUFrQixNQUFNLFVBQVUsZUFBZSxLQUFLLFVBQVUsZ0JBQWdCLE9BQU8sVUFBVSxZQUFZLGtCQUFrQixPQUFPLFVBQVUsVUFBVSxZQUFZLGFBQWEsbUJBQW1CLE1BQU0sVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxpQkFBaUIsTUFBTSxZQUFZLGlCQUFpQixNQUFNLGtCQUFrQixNQUFNLGlCQUFpQixNQUFNLGtCQUFrQixNQUFNLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLGtCQUFrQixNQUFNLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLGVBQWUsS0FBSyxlQUFlLEtBQUssa0JBQWtCLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGdCQUFnQixLQUFLLGVBQWUsS0FBSyxhQUFhLFlBQVksVUFBVSxrQkFBa0IsK0JBQStCO0FBQy9uVDtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7OztBQ2IxQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFEO0FBQ3JEO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBLHFGQUFxRjtBQUNyRjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixxQkFBcUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0ZBQXNGLHFCQUFxQjtBQUMzRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsaURBQWlELHFCQUFxQjtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0RBQXNELHFCQUFxQjtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDcEZhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUN6QmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkQSxNQUErRjtBQUMvRixNQUFxRjtBQUNyRixNQUE0RjtBQUM1RixNQUErRztBQUMvRyxNQUF3RztBQUN4RyxNQUF3RztBQUN4RyxNQUFtRztBQUNuRztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHNGQUFPOzs7O0FBSTZDO0FBQ3JFLE9BQU8saUVBQWUsc0ZBQU8sSUFBSSw2RkFBYyxHQUFHLDZGQUFjLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7QUMxQmhFOztBQUViOztBQUVBO0FBQ0E7O0FBRUEsa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEscUJBQXFCLDZCQUE2QjtBQUNsRDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUN2R2E7O0FBRWI7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0RBQXNEOztBQUV0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDdENhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDVmE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJOztBQUVqRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ1hhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtEQUFrRDtBQUNsRDs7QUFFQTtBQUNBLDBDQUEwQztBQUMxQzs7QUFFQTs7QUFFQTtBQUNBLGlGQUFpRjtBQUNqRjs7QUFFQTs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTs7QUFFQTtBQUNBLHlEQUF5RDtBQUN6RCxJQUFJOztBQUVKOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNyRWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7O0FDZmlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1Isc0JBQXNCLDhDQUFJO0FBQzFCO0FBQ0E7QUFDQSwwQkFBMEIsVUFBVTtBQUNwQztBQUNBO0FBQ0EsVUFBVTtBQUNWLDBCQUEwQixVQUFVO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixVQUFVLE9BQU87QUFDekM7QUFDQTtBQUNBLFFBQVE7QUFDUix3QkFBd0IsVUFBVTtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDOUh3QztBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxxREFBUztBQUN4QjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2xDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDaEJBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7Ozs7O0FDQXFCO0FBQ1k7QUFDTztBQUNOO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJFQUEyRTtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRCxNQUFNO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRCxNQUFNO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRCxPQUFPO0FBQ3pELDREQUE0RCxPQUFPO0FBQ25FLGtCQUFrQixzQkFBc0I7QUFDeEM7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGdDQUFnQztBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLCtDQUFNO0FBQ2xCLFlBQVksK0NBQU07QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MseUJBQXlCO0FBQzNELDZEQUE2RCxVQUFVLEVBQUUsRUFBRTtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWCxVQUFVO0FBQ1Y7QUFDQSxvQ0FBb0MsUUFBUTtBQUM1QywrREFBK0QsVUFBVSxFQUFFLEVBQUU7QUFDN0U7QUFDQTtBQUNBLFlBQVk7QUFDWixvQ0FBb0Msc0JBQXNCO0FBQzFELCtEQUErRCxVQUFVLEVBQUUsRUFBRTtBQUM3RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQSxPQUFPO0FBQ1AsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IscUJBQXFCO0FBQ3BELDZEQUE2RCxTQUFTLEVBQUUsRUFBRSxFQUFFLFVBQVU7QUFDdEY7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsVUFBVTtBQUNWO0FBQ0EsaUNBQWlDLFFBQVE7QUFDekMsK0RBQStELFNBQVMsRUFBRSxFQUFFLEVBQUUsVUFBVTtBQUN4RjtBQUNBO0FBQ0EsWUFBWTtBQUNaLGlDQUFpQyxtQkFBbUI7QUFDcEQsK0RBQStELFNBQVMsRUFBRSxFQUFFLEVBQUUsVUFBVTtBQUN4RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsT0FBTztBQUNQO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0QsYUFBYTtBQUMvRCxrREFBa0QsYUFBYTtBQUMvRDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLFFBQVE7QUFDMUIsb0JBQW9CLFFBQVE7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLEVBQUUsRUFBRSxFQUFFO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLFFBQVE7QUFDMUIsb0JBQW9CLFFBQVE7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLEVBQUUsRUFBRSxFQUFFO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUVBQXFFLGlCQUFpQjtBQUN0RixJQUFJO0FBQ0o7QUFDQSxxRUFBcUUsaUJBQWlCO0FBQ3RGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2REFBNkQsbUJBQW1CLGNBQWMsbUJBQW1CO0FBQ2pIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXR0ZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxldHRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGV0dGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL2JhdHRsZXR0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXR0ZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9iYXR0bGV0dGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxldHRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGV0dGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxldHRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXR0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXR0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXR0ZS8uL3NyYy9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxldHRlLy4vc3JjL3BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGV0dGUvLi9zcmMvc2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGV0dGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxldHRlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXR0ZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxldHRlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vYmF0dGxldHRlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxldHRlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxldHRlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2JhdHRsZXR0ZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9iYXR0bGV0dGUvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2JhdHRsZXR0ZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vZGlzdC9pbWFnZXMvYmFja2dyb3VuZC5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuLi9kaXN0L2ltYWdlcy9sb2dvLWJpZy5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUNvb2tpZSZmYW1pbHk9T3BlbitTYW5zOml0YWwsd2dodEAwLDQwMDswLDcwMDsxLDQwMCZmYW1pbHk9UG9pcmV0K09uZSZkaXNwbGF5PXN3YXApO1wiXSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnUG9pcmV0IE9uZScsIHNhbnMtc2VyaWY7IH1cXHJcXG5cXHJcXG5odG1sIHtcXHJcXG4gIGhlaWdodDogMTAwJTsgfVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBiYWNrZ3JvdW5kOiAjNzgyYjQ0O1xcclxcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDBkZWcsICM3ODJiNDQsICNjODQ3NzEpOyB9XFxyXFxuXFxyXFxuLmJhY2tncm91bmQtaW1hZ2Uge1xcclxcbiAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxyXFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGJvdHRvbSAyMCUgbGVmdCAwO1xcclxcbiAgei1pbmRleDogLTE7XFxyXFxuICBmaWx0ZXI6IGJsdXIoNHB4KSBncmF5c2NhbGUoMzAlKTsgfVxcclxcblxcclxcbmhlYWRlciB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHBhZGRpbmc6IDAgNTBweDtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyOyB9XFxyXFxuICBoZWFkZXIgI2xvZ28ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxyXFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICAgIGhlaWdodDogMTUwcHg7XFxyXFxuICAgIHdpZHRoOiAxNTBweDtcXHJcXG4gICAgbWFyZ2luOiAzMnB4OyB9XFxyXFxuXFxyXFxuZm9vdGVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBib3R0b206IDA7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHBhZGRpbmc6IDhweDtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzQsIDM0LCAzNCwgMC41KTtcXHJcXG4gIGNvbG9yOiAjY2NjY2NjOyB9XFxyXFxuICBmb290ZXIgYSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcXHJcXG4gICAgY29sb3I6ICNjY2NjY2M7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTsgfVxcclxcbiAgICBmb290ZXIgYTpob3ZlciB7XFxyXFxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7IH1cXHJcXG4gIGZvb3RlciAuc29jaWFsLWxpbmtzIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBnYXA6IDhweDsgfVxcclxcbiAgICBmb290ZXIgLnNvY2lhbC1saW5rcyBhIHtcXHJcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgZ2FwOiA4cHg7IH1cXHJcXG4gICAgZm9vdGVyIC5zb2NpYWwtbGlua3MgaW1nIHtcXHJcXG4gICAgICB3aWR0aDogMXJlbTsgfVxcclxcblxcclxcbiNuZXctZ2FtZV9idXR0b24sXFxyXFxuI3B2cC1uZXctZ2FtZV9idXR0b24ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB3aWR0aDogMTkwcHg7XFxyXFxuICBjb2xvcjogI2VlZWVlZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkOTdlOWM7XFxyXFxuICBib3JkZXI6IDRweCBkb3VibGUgIzU1NTU1NTsgfVxcclxcbiAgI25ldy1nYW1lX2J1dHRvbjpob3ZlcixcXHJcXG4gICNwdnAtbmV3LWdhbWVfYnV0dG9uOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2M4NDc3MTsgfVxcclxcbiAgI25ldy1nYW1lX2J1dHRvbjphY3RpdmUsXFxyXFxuICAjcHZwLW5ldy1nYW1lX2J1dHRvbjphY3RpdmUge1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMnB4KTsgfVxcclxcbiAgI25ldy1nYW1lX2J1dHRvbiBpbWcsXFxyXFxuICAjcHZwLW5ldy1nYW1lX2J1dHRvbiBpbWcge1xcclxcbiAgICBoZWlnaHQ6IDI0cHg7IH1cXHJcXG5cXHJcXG4jc3RhcnQtZ2FtZV9idXR0b24ge1xcclxcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciA1MDBtcyBlYXNlLW91dDtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7IH1cXHJcXG4gICNzdGFydC1nYW1lX2J1dHRvbjphY3RpdmUge1xcclxcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoODUlKTtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDJweCk7IH1cXHJcXG5cXHJcXG4uaW5mby1jb250YWluZXIge1xcclxcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlOGUyZTQ7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgcGFkZGluZzogMTZweDtcXHJcXG4gIG1hcmdpbjogMCAzMnB4O1xcclxcbiAgZ2FwOiAzMnB4O1xcclxcbiAgYm9yZGVyOiAxMHB4IGRvdWJsZSAjYzg0NzcxO1xcclxcbiAgYm9yZGVyLXJhZGl1czogN3B4OyB9XFxyXFxuICAuaW5mby1jb250YWluZXIgYnV0dG9uIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICAgcGFkZGluZzogOHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7IH1cXHJcXG5cXHJcXG4uZ2FtZS1tb2RlLWJ1dHRvbnMge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGdhcDogMjVweDtcXHJcXG4gIG1hcmdpbi1yaWdodDogMThweDsgfVxcclxcblxcclxcbi5iYXR0bGUtaW5mbyB7XFxyXFxuICBtYXJnaW4tbGVmdDogMThweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBnYXA6IDI0cHg7IH1cXHJcXG5cXHJcXG4uYWN0aW9uLWluZm8ge1xcclxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICBmb250LXdlaWdodDogNzAwOyB9XFxyXFxuXFxyXFxuLmJhdHRsZWZpZWxkIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGdhcDogNTBweDsgfVxcclxcblxcclxcbiNwbGF5ZXIxLWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZ2FwOiA4cHg7IH1cXHJcXG5cXHJcXG4jcGxheWVyMi1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcXHJcXG4gIGdhcDogOHB4OyB9XFxyXFxuXFxyXFxuLnBsYXllci1pbmZvIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlOGUyZTQ7XFxyXFxuICB3aWR0aDogMjMwcHg7XFxyXFxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcclxcbiAgcGFkZGluZzogMTZweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDdweDtcXHJcXG4gIGJvcmRlcjogMTBweCBkb3VibGUgI2M4NDc3MTsgfVxcclxcblxcclxcbiNwbGF5ZXIxLW5hbWUsXFxyXFxuI3BsYXllcjItbmFtZSB7XFxyXFxuICBmb250LWZhbWlseTogJ0Nvb2tpZScsIHNhbnMtc2VyaWY7XFxyXFxuICBmb250LXNpemU6IDJyZW07XFxyXFxuICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMTZweDsgfVxcclxcblxcclxcbiNwbGF5ZXIyLW5hbWUge1xcclxcbiAgdGV4dC1hbGlnbjogZW5kOyB9XFxyXFxuXFxyXFxuI3BsYXllcjEtc2NvcmUsXFxyXFxuI3BsYXllcjItc2NvcmUge1xcclxcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogOHB4OyB9XFxyXFxuXFxyXFxuLmFjdGlvbi1kZXNjcmlwdG9yIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjsgfVxcclxcblxcclxcbiNwbGF5ZXIxLXNoaXBzLFxcclxcbiNwbGF5ZXIyLXNoaXBzIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxuICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7IH1cXHJcXG4gICNwbGF5ZXIxLXNoaXBzIHVsLFxcclxcbiAgI3BsYXllcjItc2hpcHMgdWwge1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBtYXJnaW46IDA7IH1cXHJcXG4gICNwbGF5ZXIxLXNoaXBzIGxpLFxcclxcbiAgI3BsYXllcjItc2hpcHMgbGkge1xcclxcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XFxyXFxuICAgIG1hcmdpbjogMTJweCAwO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzc4MmI0NDsgfVxcclxcblxcclxcbi5zaGlwLXBsYWNlbWVudCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyB9XFxyXFxuXFxyXFxuLm9yaWVudGF0aW9uLWJ1dHRvbnMge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGdhcDogOHB4OyB9XFxyXFxuICAub3JpZW50YXRpb24tYnV0dG9ucyBpbWcge1xcclxcbiAgICBoZWlnaHQ6IDFyZW07XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjsgfVxcclxcblxcclxcbiNwbGF5ZXIxLWJvYXJkLFxcclxcbiNwbGF5ZXIyLWJvYXJkIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpOyB9XFxyXFxuICAjcGxheWVyMS1ib2FyZCAuZW1wdHktY2VsbCxcXHJcXG4gICNwbGF5ZXIyLWJvYXJkIC5lbXB0eS1jZWxsIHtcXHJcXG4gICAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgICB3aWR0aDogNDBweDtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjQ0NSk7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjMyLCAyMjYsIDIyOCwgMC4xNSk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDsgfVxcclxcblxcclxcbltjbGFzc149XFxcImNlbGxcXFwiXSB7XFxyXFxuICBoZWlnaHQ6IDQwcHg7XFxyXFxuICB3aWR0aDogNDBweDtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4zMjMpO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMzIsIDIyNiwgMjI4LCAwLjc1KTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxyXFxuICBmb250LXNpemU6IDJyZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiA0cHg7IH1cXHJcXG4gIFtjbGFzc149XFxcImNlbGxcXFwiXTpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyMjMsIDg3LCAwLjkpO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7IH1cXHJcXG5cXHJcXG4ucGxhY2luZy1zaGlwLWNlbGwge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDIyMywgODcsIDAuOSk7IH1cXHJcXG5cXHJcXG4ucGxhY2luZy1lcnJvciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMCwgMCwgMC40MjMpOyB9XFxyXFxuICAucGxhY2luZy1lcnJvcjpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAwLCAwLCAwLjQyMyk7IH1cXHJcXG5cXHJcXG4uYmFja2Ryb3Age1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMTEsIDIxMSwgMjExLCAwLjU2NCk7IH1cXHJcXG5cXHJcXG4uZ2FtZS1vdmVyX21vZGFsIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHRvcDogNTAlO1xcclxcbiAgbGVmdDogNTAlO1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxyXFxuICBib3JkZXI6IDdweCBkb3VibGUgI2M4NDc3MTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWVlZWU7XFxyXFxuICB6LWluZGV4OiAzO1xcclxcbiAgcGFkZGluZzogM3JlbTsgfVxcclxcbiAgLmdhbWUtb3Zlcl9tb2RhbCBpbWcge1xcclxcbiAgICB3aWR0aDogMTAwcHg7IH1cXHJcXG4gIC5nYW1lLW92ZXJfbW9kYWwgYnV0dG9uIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmOyB9XFxyXFxuXFxyXFxuLnBhc3MtdHVybl9tb2RhbCB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogNTBweDtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHRvcDogNTAlO1xcclxcbiAgbGVmdDogNTAlO1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxyXFxuICB3aWR0aDogMzUwcHg7XFxyXFxuICBoZWlnaHQ6IDIwMHB4O1xcclxcbiAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZWVlZTtcXHJcXG4gIGJvcmRlcjogNHB4IHNvbGlkICNjODQ3NzE7XFxyXFxuICB6LWluZGV4OiAzOyB9XFxyXFxuICAucGFzcy10dXJuX21vZGFsIHAge1xcclxcbiAgICBtYXJnaW46IDA7IH1cXHJcXG4gIC5wYXNzLXR1cm5fbW9kYWwgYnV0dG9uIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2M4NDc3MTtcXHJcXG4gICAgY29sb3I6ICNlZWVlZWU7XFxyXFxuICAgIHBhZGRpbmc6IDhweDtcXHJcXG4gICAgZm9udC1zaXplOiAxLjVyZW07IH1cXHJcXG5cXHJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1zdHlsZS5jc3MubWFwICovXFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBR0E7RUFDRSxzQkFBc0I7RUFDdEIscUNBQXFDLEVBQUE7O0FBR3ZDO0VBQ0UsWUFBWSxFQUFBOztBQUdkO0VBQ0UsU0FBUztFQUNULFdBQVc7RUFDWCxZQUFZO0VBQ1osbUJBZjBFO0VBZ0IxRSxtREFBOEYsRUFBQTs7QUFHaEc7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLGVBQWU7RUFDZix5REFBc0Q7RUFDdEQsNEJBQTRCO0VBQzVCLHNCQUFzQjtFQUN0QixzQ0FBc0M7RUFDdEMsV0FBVztFQUNYLGdDQUFnQyxFQUFBOztBQUdsQztFQUNFLFdBQVc7RUFDWCxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CLEVBQUE7RUFFbkI7SUFDRSx5REFBb0Q7SUFDcEQsd0JBQXdCO0lBQ3hCLDRCQUE0QjtJQUM1QixhQUFhO0lBQ2IsWUFBWTtJQUNaLFlBQVksRUFBQTs7QUFJaEI7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsV0FBVztFQUNYLFlBQVk7RUFDWixvQ0FBb0M7RUFDcEMsdUNBQXVDO0VBQ3ZDLGNBQWMsRUFBQTtFQUVkO0lBQ0Usb0NBQW9DO0lBQ3BDLGNBQWM7SUFDZCxxQkFBcUIsRUFBQTtJQUVyQjtNQUNFLDBCQUEwQixFQUFB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Z0Q7RUFDaEQsa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixVQUFVO0VBQ1YsYUFBYSxFQUFBO0VBRWI7SUFDRSxZQUFZLEVBQUE7RUFHZDtJQUNFLG9DQUFvQyxFQUFBOztBQUl4QztFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1QsZUFBZTtFQUNmLFFBQVE7RUFDUixTQUFTO0VBQ1QsZ0NBQWdDO0VBQ2hDLFlBQVk7RUFDWixhQUFhO0VBQ2IsZUFBZTtFQUNmLHlCQUF5QjtFQUN6Qix5QkFBK0M7RUFDL0MsVUFBVSxFQUFBO0VBRVY7SUFDRSxTQUFTLEVBQUE7RUFHWDtJQUNFLHlCQTVWMkI7SUE2VjNCLGNBQWM7SUFDZCxZQUFZO0lBQ1osaUJBQWlCLEVBQUE7O0FDdEVyQixvQ0FBb0NcIixcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBTaGlwIH0gZnJvbSAnLi9zaGlwLmpzJztcclxuXHJcblxyXG5jb25zdCBHYW1lYm9hcmQgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHByaXZhdGVCb2FyZDogW1xyXG4gICAgICBbLCwsLCwsLCwsXSxcclxuICAgICAgWywsLCwsLCwsLF0sXHJcbiAgICAgIFssLCwsLCwsLCxdLFxyXG4gICAgICBbLCwsLCwsLCwsXSxcclxuICAgICAgWywsLCwsLCwsLF0sXHJcbiAgICAgIFssLCwsLCwsLCxdLFxyXG4gICAgICBbLCwsLCwsLCwsXSxcclxuICAgICAgWywsLCwsLCwsLF0sXHJcbiAgICAgIFssLCwsLCwsLCxdLFxyXG4gICAgICBbLCwsLCwsLCwsXSxcclxuICAgIF0sXHJcblxyXG4gICAgcHVibGljQm9hcmQ6IFtcclxuICAgICAgWywsLCwsLCwsLF0sXHJcbiAgICAgIFssLCwsLCwsLCxdLFxyXG4gICAgICBbLCwsLCwsLCwsXSxcclxuICAgICAgWywsLCwsLCwsLF0sXHJcbiAgICAgIFssLCwsLCwsLCxdLFxyXG4gICAgICBbLCwsLCwsLCwsXSxcclxuICAgICAgWywsLCwsLCwsLF0sXHJcbiAgICAgIFssLCwsLCwsLCxdLFxyXG4gICAgICBbLCwsLCwsLCwsXSxcclxuICAgICAgWywsLCwsLCwsLF0sXHJcbiAgICBdLFxyXG4gICAgXHJcbiAgICBzaGlwTGlzdDogW10sXHJcblxyXG4gICAgcGxhY2VTaGlwOiBmdW5jdGlvbiAoc2l6ZSwgc3RhcnRQb3MsIHNoaXBOYW1lID0gJ1VubmFtZWQgc2hpcCcsIGRpcmVjdGlvbiA9ICdob3InKSB7XHJcbiAgICAgIGlmICh0aGlzLmlzVmFsaWQoc2l6ZSwgc3RhcnRQb3MsIGRpcmVjdGlvbikgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3QgcGxhY2Ugc2hpcDogb3V0IG9mIGJvdW5kcyBvciBzcGFjZSBhbHJlYWR5IG9jY3VwaWVkLicpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGxldCBuZXdTaGlwID0gU2hpcChzaXplLCBzaGlwTmFtZSk7XHJcbiAgICAgICAgdGhpcy5zaGlwTGlzdC5wdXNoKG5ld1NoaXApO1xyXG4gICAgICAgIGlmIChkaXJlY3Rpb24gPT09ICdob3InKSB7XHJcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNpemU7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLnByaXZhdGVCb2FyZFtzdGFydFBvc1swXV1bc3RhcnRQb3NbMV0gKyBpXSA9IHNoaXBOYW1lO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAoZGlyZWN0aW9uID09PSAndmVyJykge1xyXG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaXplOyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5wcml2YXRlQm9hcmRbc3RhcnRQb3NbMF0gKyBpXVtzdGFydFBvc1sxXV0gPSBzaGlwTmFtZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgY29tcHV0ZXJQbGFjZVNoaXA6IGZ1bmN0aW9uIChzaXplLCBzaGlwTmFtZSkge1xyXG4gICAgICBsZXQgcm5kUG9zID0gW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKSwgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApXTtcclxuICAgICAgbGV0IHJuZERpcmVjdGlvbiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIpO1xyXG4gICAgICBzd2l0Y2ggKHJuZERpcmVjdGlvbikge1xyXG4gICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgIHJuZERpcmVjdGlvbiA9ICdob3InO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICBybmREaXJlY3Rpb24gPSAndmVyJztcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB3aGlsZSAoIXRoaXMuaXNWYWxpZChzaXplLCBybmRQb3MsIHJuZERpcmVjdGlvbikpIHtcclxuICAgICAgICBybmRQb3MgPSBbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApLCBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCldO1xyXG4gICAgICAgIHJuZERpcmVjdGlvbiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIpO1xyXG4gICAgICAgIHN3aXRjaCAocm5kRGlyZWN0aW9uKSB7XHJcbiAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgIHJuZERpcmVjdGlvbiA9ICdob3InO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJuZERpcmVjdGlvbiA9ICd2ZXInO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5wbGFjZVNoaXAoc2l6ZSwgcm5kUG9zLCBzaGlwTmFtZSwgcm5kRGlyZWN0aW9uKTtcclxuICAgIH0sXHJcblxyXG4gICAgaXNWYWxpZDogZnVuY3Rpb24gKHNpemUsIHN0YXJ0UG9zLCBkaXJlY3Rpb24gPSAnaG9yJykge1xyXG4gICAgICBsZXQgc2l6ZUNoZWNrID0gdHJ1ZTtcclxuICAgICAgbGV0IGF2YWlsYWJsZUNoZWNrID0gdHJ1ZTtcclxuICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gJ2hvcicgJiYgKChzdGFydFBvc1sxXSArIHNpemUgLSAxKSA+IDkpKSB7XHJcbiAgICAgICAgc2l6ZUNoZWNrID0gZmFsc2U7XHJcbiAgICAgIH0gZWxzZSBpZiAoZGlyZWN0aW9uID09PSAndmVyJyAmJiAoKHN0YXJ0UG9zWzBdICsgc2l6ZSAtIDEpID4gOSkpIHtcclxuICAgICAgICBzaXplQ2hlY2sgPSBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgICBsZXQgdGFyZ2V0QXJyID0gW107XHJcbiAgICAgIGlmIChkaXJlY3Rpb24gPT09ICdob3InKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaXplOyBpKyspIHsgLy8gY2hlY2sgaWYgaG9yaXpvbnRhbCBwbGFjZW1lbnQgaXMgZW1wdHlcclxuICAgICAgICAgIHRhcmdldEFyci5wdXNoKHRoaXMucHJpdmF0ZUJvYXJkW3N0YXJ0UG9zWzBdXVtzdGFydFBvc1sxXSArIGldKTtcclxuICAgICAgICAgIH1cclxuICAgICAgfSBlbHNlIGlmIChzaXplQ2hlY2sgPT09IHRydWUgJiYgZGlyZWN0aW9uID09PSAndmVyJykge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2l6ZTsgaSsrKSB7XHJcbiAgICAgICAgICB0YXJnZXRBcnIucHVzaCh0aGlzLnByaXZhdGVCb2FyZFtzdGFydFBvc1swXSArIGldW3N0YXJ0UG9zWzFdXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGF2YWlsYWJsZUNoZWNrID0gdGFyZ2V0QXJyLmV2ZXJ5KGVsID0+IGVsID09PSB1bmRlZmluZWQpO1xyXG4gICAgICByZXR1cm4gKHNpemVDaGVjayAmJiBhdmFpbGFibGVDaGVjayk7XHJcbiAgICAgIH0sXHJcblxyXG4gICAgcmVjZWl2ZUF0dGFjazogZnVuY3Rpb24gKHRhcmdldFBvcykge1xyXG4gICAgIGlmICh0aGlzLnByaXZhdGVCb2FyZFt0YXJnZXRQb3NbMF1dW3RhcmdldFBvc1sxXV0gPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICB0aGlzLnByaXZhdGVCb2FyZFt0YXJnZXRQb3NbMF1dW3RhcmdldFBvc1sxXV0gPSAnfic7XHJcbiAgICAgIHJldHVybiAnWW91IG1pc3NlZCc7XHJcbiAgICAgfSBlbHNlIGlmICh0aGlzLnByaXZhdGVCb2FyZFt0YXJnZXRQb3NbMF1dW3RhcmdldFBvc1sxXV0gPT09ICd+JyB8fCB0aGlzLnByaXZhdGVCb2FyZFt0YXJnZXRQb3NbMF1dW3RhcmdldFBvc1sxXV0gPT09ICdYJykge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1lvdSBjYW5ub3QgYXR0YWNrIHRoZSBzYW1lIHNwb3QgdHdpY2UnKTtcclxuICAgICB9IGVsc2Uge1xyXG4gICAgICBsZXQgdGFyZ2V0ID0gdGhpcy5zaGlwTGlzdC5maW5kKGVsID0+IGVsLm5hbWUgPT09IHRoaXMucHJpdmF0ZUJvYXJkW3RhcmdldFBvc1swXV1bdGFyZ2V0UG9zWzFdXSk7XHJcbiAgICAgIHRhcmdldC5oaXRzKys7XHJcbiAgICAgIHRoaXMucHJpdmF0ZUJvYXJkW3RhcmdldFBvc1swXV1bdGFyZ2V0UG9zWzFdXSA9ICdYJztcclxuICAgICAgaWYgKHRhcmdldC5pc1N1bmsoKSkge1xyXG4gICAgICAgIHJldHVybiAnVGhlIHNoaXAgaGFzIHN1bmsnO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gdGFyZ2V0Lm5hbWUgKyAnIGhhcyBiZWVuIGhpdCwgJyArICh0YXJnZXQuc2l6ZSAtIHRhcmdldC5oaXRzKSArJyBoaXQocykgbGVmdCc7XHJcbiAgICAgIH1cclxuICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIGdldFN0YXR1czogZnVuY3Rpb24oKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnNoaXBMaXN0LmV2ZXJ5KGVsID0+IGVsLmlzU3VuaygpKTtcclxuICAgIH0sXHJcblxyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgeyBHYW1lYm9hcmQgfTsiLCJpbXBvcnQgeyBHYW1lYm9hcmQgfSBmcm9tIFwiLi9nYW1lYm9hcmRcIjtcclxuXHJcbmNvbnN0IFBsYXllciA9IChuYW1lKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHBsYXllck5hbWU6IG5hbWUsXHJcblxyXG4gICAgZ2FtZWJvYXJkOiBHYW1lYm9hcmQoKSxcclxuXHJcbiAgICBhdHRhY2s6IGZ1bmN0aW9uIChwbGF5ZXIsIHgsIHkpIHtcclxuICAgICAgcGxheWVyLmdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKFt4LCB5XSk7XHJcbiAgICB9LFxyXG5cclxuICAgIGNvbXB1dGVyQXR0YWNrOiBmdW5jdGlvbiAocGxheWVyKSB7XHJcbiAgICAgIGxldCBjb29yZCA9IGZpbmRWYWxpZE1vdmUocGxheWVyLmdhbWVib2FyZC5wcml2YXRlQm9hcmQpO1xyXG4gICAgICB0aGlzLmF0dGFjayhwbGF5ZXIsIGNvb3JkWzBdLCBjb29yZFsxXSk7XHJcbiAgICB9LFxyXG4gIH07XHJcbn07XHJcblxyXG5mdW5jdGlvbiBybmRDb29yZGluYXRlcyAoKSB7XHJcbiAgbGV0IHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XHJcbiAgbGV0IHkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XHJcbiAgcmV0dXJuIFtbeF0sW3ldXTtcclxufVxyXG5cclxuZnVuY3Rpb24gZmluZFZhbGlkTW92ZSAoYm9hcmQpIHtcclxuICAvLyBHZW5lcmF0ZSB0d28gcmFuZG9tIG51bWJlciBiZXR3ZWVuIDAtOVxyXG4gIGxldCBjb29yZGluYXRlcyA9IHJuZENvb3JkaW5hdGVzKCk7XHJcbiAgLy8gY29udGludWUgd2hpbGUgdGhlIG1vdmUgaXMgaW52YWxpZCwgbGF1bmNoIGF0dGFjayB3aGVuIGZpbmRpbmcgYSB2YWxpZCBtb3ZlXHJcbiAgd2hpbGUgKGJvYXJkW2Nvb3JkaW5hdGVzWzBdXVtjb29yZGluYXRlc1sxXV0gPT09ICdYJyB8fCBib2FyZFtjb29yZGluYXRlc1swXV1bY29vcmRpbmF0ZXNbMV1dID09PSAnficpIHtcclxuICAgIGNvb3JkaW5hdGVzID0gcm5kQ29vcmRpbmF0ZXMoKTtcclxuICB9XHJcbiAgcmV0dXJuIGNvb3JkaW5hdGVzO1xyXG59XHJcblxyXG5leHBvcnQgeyBQbGF5ZXIgfTsiLCJjb25zdCBTaGlwID0gKHNpemUsIG5hbWUgPSAnVW5uYW1lZCBzaGlwJywgaWQgPSB1bmRlZmluZWQpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgbmFtZSxcclxuICAgIHNpemUsXHJcbiAgICBoaXRzOiAwLFxyXG4gICAgaGl0OiBmdW5jdGlvbigpIHtcclxuICAgICAgdGhpcy5oaXRzKys7XHJcbiAgICB9LFxyXG5cclxuICAgIGlzU3VuazogZnVuY3Rpb24oKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmhpdHMgPj0gdGhpcy5zaXplID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgfSxcclxuXHJcbiAgICBpZCxcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IHsgU2hpcCB9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcbmltcG9ydCB7IFNoaXAgfSBmcm9tICcuL3NoaXAuanMnO1xyXG5pbXBvcnQgeyBHYW1lYm9hcmQgfSBmcm9tICcuL2dhbWVib2FyZCc7XHJcbmltcG9ydCB7IFBsYXllciB9IGZyb20gJy4vcGxheWVyJztcclxuXHJcbi8vIEdvYmFsIHZhcmlhYmxlc1xyXG5sZXQgcGxheWVyMTtcclxubGV0IHBsYXllcjI7XHJcbmxldCBwMUNlbGxzO1xyXG5sZXQgcDJDZWxscztcclxubGV0IGdhbWVNb2RlO1xyXG5sZXQgY3VycmVudFBsYXllciA9ICdwbGF5ZXIxJztcclxubGV0IGFsbFNoaXBzUGxhY2VkPSBmYWxzZTtcclxuICAvLyBVc2luZyBnbG9iYWwgdmFyaWFibGVzIHRvIGtlZXAgdGhlIHNjb3JlIGZyb20gb25lIGJhdHRsZSB0byB0aGUgbmV4dDsgcmV0dXJuIHRvIDAgb24gcGFnZSByZWZyZXNoXHJcbmxldCBwbGF5ZXJzU2NvcmVzID0gWzAsIDBdO1xyXG5sZXQgcGxheWVyMlNjb3JlID0gMDtcclxuXHJcbi8vIERPTSBFbGVtZW50c1xyXG5jb25zdCBuZXdfZ2FtZV9idXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3LWdhbWVfYnV0dG9uJyk7XHJcbmNvbnN0IHB2cF9uZXdfZ2FtZV9idXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHZwLW5ldy1nYW1lX2J1dHRvbicpO1xyXG5jb25zdCBzdGFydF9nYW1lX2J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGFydC1nYW1lX2J1dHRvbicpO1xyXG5cclxuY29uc3QgcGxheWVyMV9ib2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGF5ZXIxLWJvYXJkJyk7XHJcbmNvbnN0IHBsYXllcjFfc2hpcHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxheWVyMS1zaGlwcycpO1xyXG5jb25zdCBwbGF5ZXIyX2JvYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYXllcjItYm9hcmQnKTtcclxuY29uc3QgcGxheWVyMl9zaGlwcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGF5ZXIyLXNoaXBzJyk7XHJcbmNvbnN0IHBsYXllcjFfbG9nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYXllcjEtbG9nJyk7XHJcbmNvbnN0IHBsYXllcjJfbG9nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYXllcjItbG9nJyk7XHJcbmNvbnN0IGFjdGlvbl9pbmZvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFjdGlvbi1pbmZvJyk7XHJcblxyXG5cclxuLy8gTW9kYWxzIGRpc3BsYXlcclxuY29uc3QgY2xvc2VNb2RhbEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbG9zZS1tb2RhbF9idXR0b24nKTtcclxuY2xvc2VNb2RhbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IENsb3NlTW9kYWwoJ2dhbWUtb3Zlcl9tb2RhbCcpKTtcclxuXHJcbmZ1bmN0aW9uIE9wZW5Nb2RhbChtb2RhbCkge1xyXG4gIGNvbnN0IGJhY2tkcm9wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJhY2tkcm9wJyk7XHJcbiAgYmFja2Ryb3Auc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgYmFja2Ryb3AuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBDbG9zZU1vZGFsKG1vZGFsKSk7XHJcbiAgY29uc3QgbW9kYWxUb09wZW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHttb2RhbH1gKTtcclxuICBtb2RhbFRvT3Blbi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxufVxyXG5cclxuZnVuY3Rpb24gQ2xvc2VNb2RhbChtb2RhbCkge1xyXG4gIGNvbnN0IGJhY2tkcm9wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJhY2tkcm9wJyk7XHJcbiAgYmFja2Ryb3Auc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICBjb25zdCBtb2RhbFRvQ2xvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHttb2RhbH1gKTtcclxuICBtb2RhbFRvQ2xvc2Uuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxufVxyXG5cclxuZnVuY3Rpb24gR2FtZU92ZXJNb2RhbCAoKSB7XHJcbiAgY29uc3QgYmFja2Ryb3AgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmFja2Ryb3AnKTtcclxuICBiYWNrZHJvcC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICBiYWNrZHJvcC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IENsb3NlTW9kYWwoJ2dhbWUtb3Zlcl9tb2RhbCcpKTtcclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZS1vdmVyX21vZGFsJykuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcclxuICBpZiAoY3VycmVudFBsYXllciA9PT0gJ3BsYXllcjEnKSB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZS1vdmVyX21vZGFsID4gcCcpLnRleHRDb250ZW50ID0gJ1BsYXllciAyIHdpbnMhJztcclxuICAgIGFjdGlvbl9pbmZvLnRleHRDb250ZW50ID0gJ1BsYXllciAyIHdpbnMhJztcclxuICAgIFVwZGF0ZVNjb3JlKHBsYXllcjIpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZS1vdmVyX21vZGFsID4gcCcpLnRleHRDb250ZW50ID0gJ1BsYXllciAxIHdpbnMhJztcclxuICAgIGFjdGlvbl9pbmZvLnRleHRDb250ZW50ID0gJ1BsYXllciAxIHdpbnMhJztcclxuICAgIFVwZGF0ZVNjb3JlKHBsYXllcjEpO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gUGFzc1R1cm5Nb2RhbCAoKSB7XHJcbiAgcDFDZWxscyA9IFBvcHVsYXRlUDEoJ3B1YmxpY0JvYXJkJyk7XHJcbiAgcDJDZWxscyA9IFBvcHVsYXRlUDIoJ3B1YmxpY0JvYXJkJyk7XHJcbiAgY29uc3QgYmFja2Ryb3AgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmFja2Ryb3AnKTtcclxuICBiYWNrZHJvcC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGFzcy10dXJuX21vZGFsJykuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcclxuICBpZiAoY3VycmVudFBsYXllciA9PT0gJ3BsYXllcjEnKSB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGFzcy10dXJuX21vZGFsID4gcCcpLnRleHRDb250ZW50ID0gYFBsYXllciAxJ3MgdHVybmA7XHJcbiAgfSBlbHNlIHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYXNzLXR1cm5fbW9kYWwgPiBwJykudGV4dENvbnRlbnQgPSBgUGxheWVyIDIncyB0dXJuYDtcclxuICB9XHJcbn1cclxuXHJcbi8vIEluaXRpYWxpemUgZ2FtZSBmdW5jdGlvbnNcclxubmV3X2dhbWVfYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gIHJlc2V0RE9NKCk7XHJcbiAgSW5pdGlhbGl6ZUdhbWUoJ1BsYXllcicsICdDb21wdXRlcicsICdjb20nKTtcclxuICBwbGFjZW1lbnRQaGFzZSgpO1xyXG4gIGFjdGlvbl9pbmZvLnRleHRDb250ZW50ID0gJ1BsYWNlIGVhY2ggb25lIG9mIHlvdXIgcGFzdHJpZXMuJztcclxuICBzdGFydF9nYW1lX2J1dHRvbi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICBzdGFydF9nYW1lX2J1dHRvbi5kaXNhYmxlZCA9IHRydWU7XHJcbiAgc3RhcnRfZ2FtZV9idXR0b24uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ2J1dHRvbmZhY2UnO1xyXG4gIHN0YXJ0X2dhbWVfYnV0dG9uLnRleHRDb250ZW50ID0gJ1N0YXJ0IHRoZSBiYXR0bGUnO1xyXG59KTtcclxuXHJcbnB2cF9uZXdfZ2FtZV9idXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgcmVzZXRET00oKTtcclxuICBJbml0aWFsaXplR2FtZSgnUGxheWVyIDEnLCAnUGxheWVyIDInLCAncHZwJyk7XHJcbiAgcGxhY2VtZW50UGhhc2UoKTtcclxuICBhY3Rpb25faW5mby50ZXh0Q29udGVudCA9ICdQbGF5ZXIgMSwgcGxhY2UgZWFjaCBvbmUgb2YgeW91ciBwYXN0cmllcy4nO1xyXG4gIHN0YXJ0X2dhbWVfYnV0dG9uLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gIHN0YXJ0X2dhbWVfYnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcclxuICBzdGFydF9nYW1lX2J1dHRvbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnYnV0dG9uZmFjZSc7XHJcbiAgc3RhcnRfZ2FtZV9idXR0b24udGV4dENvbnRlbnQgPSAnTmV4dCBwbGF5ZXInO1xyXG59KTtcclxuXHJcbnN0YXJ0X2dhbWVfYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gIGlmIChnYW1lTW9kZSA9PT0gJ2NvbScpIHtcclxuICAgIC8vcGxheWVyMV9zaGlwcy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgU3RhcnRHYW1lKCk7XHJcbiAgfSBlbHNlIGlmIChnYW1lTW9kZSA9PT0gJ3B2cCcgJiYgcGxheWVyMi5nYW1lYm9hcmQuc2hpcExpc3QubGVuZ3RoID09PSA1ICYmIHBsYXllcjIuZ2FtZWJvYXJkLnNoaXBMaXN0Lmxlbmd0aCA9PT0gNSkgeyBcclxuICAgIHBsYXllcjJfc2hpcHMuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIFN0YXJ0R2FtZSgpO1xyXG4gIH1cclxuICBlbHNlIHtcclxuICAgIHJlc2V0RE9NKCdwbGF5ZXIyJyk7XHJcbiAgICBhY3Rpb25faW5mby50ZXh0Q29udGVudCA9ICdQbGF5ZXIgMiwgcGxhY2UgZWFjaCBvbmUgb2YgeW91ciBwYXN0cmllcy4nO1xyXG4gICAgc3RhcnRfZ2FtZV9idXR0b24uZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgc3RhcnRfZ2FtZV9idXR0b24uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ2J1dHRvbmZhY2UnO1xyXG4gICAgc3RhcnRfZ2FtZV9idXR0b24udGV4dENvbnRlbnQgPSAnU3RhcnQgZ2FtZSc7XHJcbiAgICBjaGFuZ2VQbGF5ZXJQbGFjZW1lbnQoKTtcclxuICB9XHJcbn0pO1xyXG5cclxuLy8gRE9NIG1hbmlwdWxhdGlvbiBmdW5jdGlvbnNcclxuZnVuY3Rpb24gcmVzZXRET00gKHBsYXllciA9ICdwbGF5ZXIxJykge1xyXG4gIGNvbnN0IHNoaXBfbGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYCMke3BsYXllcn0tc2hpcHMgbGlgKTtcclxuICBjb25zdCBvcmllbnRhdGlvbl9idXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgIyR7cGxheWVyfS1zaGlwcyBpbWdgKTtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBfbGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgc2hpcF9saXN0W2ldLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XHJcbiAgICBzaGlwX2xpc3RbaV0uc3R5bGUuY29sb3IgPSAnYmxhY2snO1xyXG4gIH1cclxuICBmb3IgKGxldCBpID0gMDsgaSA8IG9yaWVudGF0aW9uX2J1dHRvbnMubGVuZ3RoOyBpKyspIHtcclxuICAgIG9yaWVudGF0aW9uX2J1dHRvbnNbaV0uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgfVxyXG4gIGlmIChwbGF5ZXIgPT09ICdwbGF5ZXIxJykge1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYXllcjItc2hpcHMnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gUmVzdG9yZVNoaXBzTGlzdCAoKSB7XHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmFjdGlvbi1kZXNjcmlwdG9yJykuZm9yRWFjaChlbCA9PiB7XHJcbiAgICBlbC50ZXh0Q29udGVudCA9ICcnO1xyXG4gIH0pO1xyXG4gIHBsYXllcjFfc2hpcHMuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgY29uc3QgcDFTaGlwTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNwbGF5ZXIxLXNoaXBzIGxpJyk7XHJcbiAgcDFTaGlwTGlzdC5mb3JFYWNoKGVsID0+IHtcclxuICAgIGVsLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XHJcbiAgfSk7XHJcbiAgcGxheWVyMl9zaGlwcy5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICBjb25zdCBwMlNoaXBMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI3BsYXllcjItc2hpcHMgbGknKTtcclxuICBwMlNoaXBMaXN0LmZvckVhY2goZWwgPT4ge1xyXG4gICAgZWwuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcclxuICB9KTtcclxuICBpZiAoZ2FtZU1vZGUgPT09ICdjb20nKSB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaG9yJykuZm9yRWFjaChlbCA9PiB7XHJcbiAgICAgIGVsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICB9KTtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy52ZXInKS5mb3JFYWNoKGVsID0+IHtcclxuICAgICAgZWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIH0pO1xyXG5cclxuICB9XHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gY2hhbmdlUGxheWVyUGxhY2VtZW50ICgpIHtcclxuICBpZiAocGxheWVyMS5nYW1lYm9hcmQuc2hpcExpc3QubGVuZ3RoICE9PSA1KSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IgKCdQbGF5ZXIgMSBtdXN0IGZpcnN0IHBsYWNlIGFsbCBoaXMvaGVyIHBhc3RyaWVzLicpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBwbGF5ZXIxX3NoaXBzLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICBwMUNlbGxzID0gUG9wdWxhdGVQMSgncHVibGljQm9hcmQnKTtcclxuICAgIFBsYXllcjJQbGFjZVNoaXBzKCk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBJbml0aWFsaXplR2FtZShwMW5hbWUsIHAybmFtZSwgbW9kZSkge1xyXG4gIGN1cnJlbnRQbGF5ZXIgPSAncGxheWVyMSc7XHJcbiAgZ2FtZU1vZGUgPSBtb2RlO1xyXG4gIGFsbFNoaXBzUGxhY2VkID0gZmFsc2U7XHJcbiAgcGxheWVyMSA9IFBsYXllcihwMW5hbWUpO1xyXG4gIHBsYXllcjIgPSBQbGF5ZXIocDJuYW1lKTtcclxuICBwMUNlbGxzID0gUG9wdWxhdGVQMSgpO1xyXG4gIHAyQ2VsbHMgPSBQb3B1bGF0ZVAyKCdwdWJsaWNCb2FyZCcpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBDb21wdXRlclBsYWNlU2hpcHMgKCkge1xyXG4gIHBsYXllcjIuZ2FtZWJvYXJkLmNvbXB1dGVyUGxhY2VTaGlwKDUsICdDYXJyaWVyJyk7XHJcbiAgcGxheWVyMi5nYW1lYm9hcmQuY29tcHV0ZXJQbGFjZVNoaXAoNCwgJ0JhdHRsZXNoaXAnKTtcclxuICBwbGF5ZXIyLmdhbWVib2FyZC5jb21wdXRlclBsYWNlU2hpcCgzLCAnQ3J1aXNlcicpO1xyXG4gIHBsYXllcjIuZ2FtZWJvYXJkLmNvbXB1dGVyUGxhY2VTaGlwKDMsICdTdWJtYXJpbmUnKTtcclxuICBwbGF5ZXIyLmdhbWVib2FyZC5jb21wdXRlclBsYWNlU2hpcCgyLCAnRGVzdHJveWVyJyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHBsYWNlbWVudFBoYXNlICgpIHtcclxuICBpZiAoZ2FtZU1vZGUgPT09ICdjb20nKSB7XHJcbiAgICBDb21wdXRlclBsYWNlU2hpcHMoKTtcclxuICAgIFBsYXllcjFQbGFjZVNoaXBzKCk7XHJcbiAgICBwbGF5ZXIyX3NoaXBzLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgfSBlbHNlIHtcclxuICAgIFBsYXllcjFQbGFjZVNoaXBzKCk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBQbGF5ZXIxUGxhY2VTaGlwcyAoKSB7XHJcbiAgcGxheWVyMV9zaGlwcy5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICBjb25zdCBwMUNhcnJpZXJIb3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucDEtY2FycmllciAuaG9yJyk7XHJcbiAgY29uc3QgcDFDYXJyaWVyVmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnAxLWNhcnJpZXIgLnZlcicpO1xyXG4gIHAxQ2Fycmllckhvci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IEFjdGl2YXRlUGxhY2VtZW50KHBsYXllcjEsIHAxQ2VsbHMsIDUsICdDYXJyaWVyJywgJy5wMS1jYXJyaWVyJykpO1xyXG4gIHAxQ2FycmllclZlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IEFjdGl2YXRlUGxhY2VtZW50KHBsYXllcjEsIHAxQ2VsbHMsIDUsICdDYXJyaWVyJywgJy5wMS1jYXJyaWVyJywgJ3ZlcicpKTtcclxuICBjb25zdCBwMUJhdHRsZXNoaXBIb3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucDEtYmF0dGxlc2hpcCAuaG9yJyk7XHJcbiAgY29uc3QgcDFCYXR0bGVzaGlwVmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnAxLWJhdHRsZXNoaXAgLnZlcicpO1xyXG4gIHAxQmF0dGxlc2hpcEhvci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IEFjdGl2YXRlUGxhY2VtZW50KHBsYXllcjEsIHAxQ2VsbHMsIDQsICdCYXR0bGVzaGlwJywgJy5wMS1iYXR0bGVzaGlwJykpO1xyXG4gIHAxQmF0dGxlc2hpcFZlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IEFjdGl2YXRlUGxhY2VtZW50KHBsYXllcjEsIHAxQ2VsbHMsIDQsICdCYXR0bGVzaGlwJywgJy5wMS1iYXR0bGVzaGlwJywgJ3ZlcicpKTtcclxuICBjb25zdCBwMUNydWlzZXJIb3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucDEtY3J1aXNlciAuaG9yJyk7XHJcbiAgY29uc3QgcDFDcnVpc2VyVmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnAxLWNydWlzZXIgLnZlcicpO1xyXG4gIHAxQ3J1aXNlckhvci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IEFjdGl2YXRlUGxhY2VtZW50KHBsYXllcjEsIHAxQ2VsbHMsIDMsICdDcnVpc2VyJywgJy5wMS1jcnVpc2VyJykpO1xyXG4gIHAxQ3J1aXNlclZlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IEFjdGl2YXRlUGxhY2VtZW50KHBsYXllcjEsIHAxQ2VsbHMsIDMsICdDcnVpc2VyJywgJy5wMS1jcnVpc2VyJywgJ3ZlcicpKTtcclxuICBjb25zdCBwMVN1Ym1hcmluZUhvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wMS1zdWJtYXJpbmUgLmhvcicpO1xyXG4gIGNvbnN0IHAxU3VibWFyaW5lVmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnAxLXN1Ym1hcmluZSAudmVyJyk7XHJcbiAgcDFTdWJtYXJpbmVIb3IuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBBY3RpdmF0ZVBsYWNlbWVudChwbGF5ZXIxLCBwMUNlbGxzLCAzLCAnU3VibWFyaW5lJywgJy5wMS1zdWJtYXJpbmUnKSk7XHJcbiAgcDFTdWJtYXJpbmVWZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBBY3RpdmF0ZVBsYWNlbWVudChwbGF5ZXIxLCBwMUNlbGxzLCAzLCAnU3VibWFyaW5lJywgJy5wMS1zdWJtYXJpbmUnLCAndmVyJykpO1xyXG4gIGNvbnN0IHAxRGVzdHJveWVySG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnAxLWRlc3Ryb3llciAuaG9yJyk7XHJcbiAgY29uc3QgcDFEZXN0cm95ZXJWZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucDEtZGVzdHJveWVyIC52ZXInKTtcclxuICBwMURlc3Ryb3llckhvci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IEFjdGl2YXRlUGxhY2VtZW50KHBsYXllcjEsIHAxQ2VsbHMsIDIsICdEZXN0cm95ZXInLCAnLnAxLWRlc3Ryb3llcicpKTtcclxuICBwMURlc3Ryb3llclZlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IEFjdGl2YXRlUGxhY2VtZW50KHBsYXllcjEsIHAxQ2VsbHMsIDIsICdEZXN0cm95ZXInLCAnLnAxLWRlc3Ryb3llcicsICd2ZXInKSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFBsYXllcjJQbGFjZVNoaXBzICgpIHtcclxuICBwbGF5ZXIyX3NoaXBzLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gIGNvbnN0IHAyQ2FycmllckhvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wMi1jYXJyaWVyIC5ob3InKTtcclxuICBjb25zdCBwMkNhcnJpZXJWZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucDItY2FycmllciAudmVyJyk7XHJcbiAgcDJDYXJyaWVySG9yLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gQWN0aXZhdGVQbGFjZW1lbnQocGxheWVyMiwgcDJDZWxscywgNSwgJ0NhcnJpZXInLCAnLnAyLWNhcnJpZXInKSk7XHJcbiAgcDJDYXJyaWVyVmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gQWN0aXZhdGVQbGFjZW1lbnQocGxheWVyMiwgcDJDZWxscywgNSwgJ0NhcnJpZXInLCAnLnAyLWNhcnJpZXInLCAndmVyJykpO1xyXG4gIGNvbnN0IHAyQmF0dGxlc2hpcEhvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wMi1iYXR0bGVzaGlwIC5ob3InKTtcclxuICBjb25zdCBwMkJhdHRsZXNoaXBWZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucDItYmF0dGxlc2hpcCAudmVyJyk7XHJcbiAgcDJCYXR0bGVzaGlwSG9yLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gQWN0aXZhdGVQbGFjZW1lbnQocGxheWVyMiwgcDJDZWxscywgNCwgJ0JhdHRsZXNoaXAnLCAnLnAyLWJhdHRsZXNoaXAnKSk7XHJcbiAgcDJCYXR0bGVzaGlwVmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gQWN0aXZhdGVQbGFjZW1lbnQocGxheWVyMiwgcDJDZWxscywgNCwgJ0JhdHRsZXNoaXAnLCAnLnAyLWJhdHRsZXNoaXAnLCAndmVyJykpO1xyXG4gIGNvbnN0IHAyQ3J1aXNlckhvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wMi1jcnVpc2VyIC5ob3InKTtcclxuICBjb25zdCBwMkNydWlzZXJWZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucDItY3J1aXNlciAudmVyJyk7XHJcbiAgcDJDcnVpc2VySG9yLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gQWN0aXZhdGVQbGFjZW1lbnQocGxheWVyMiwgcDJDZWxscywgMywgJ0NydWlzZXInLCAnLnAyLWNydWlzZXInKSk7XHJcbiAgcDJDcnVpc2VyVmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gQWN0aXZhdGVQbGFjZW1lbnQocGxheWVyMiwgcDJDZWxscywgMywgJ0NydWlzZXInLCAnLnAyLWNydWlzZXInLCAndmVyJykpO1xyXG4gIGNvbnN0IHAyU3VibWFyaW5lSG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnAyLXN1Ym1hcmluZSAuaG9yJyk7XHJcbiAgY29uc3QgcDJTdWJtYXJpbmVWZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucDItc3VibWFyaW5lIC52ZXInKTtcclxuICBwMlN1Ym1hcmluZUhvci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IEFjdGl2YXRlUGxhY2VtZW50KHBsYXllcjIsIHAyQ2VsbHMsIDMsICdTdWJtYXJpbmUnLCAnLnAyLXN1Ym1hcmluZScpKTtcclxuICBwMlN1Ym1hcmluZVZlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IEFjdGl2YXRlUGxhY2VtZW50KHBsYXllcjIsIHAyQ2VsbHMsIDMsICdTdWJtYXJpbmUnLCAnLnAyLXN1Ym1hcmluZScsICd2ZXInKSk7XHJcbiAgY29uc3QgcDJEZXN0cm95ZXJIb3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucDItZGVzdHJveWVyIC5ob3InKTtcclxuICBjb25zdCBwMkRlc3Ryb3llclZlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wMi1kZXN0cm95ZXIgLnZlcicpO1xyXG4gIHAyRGVzdHJveWVySG9yLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gQWN0aXZhdGVQbGFjZW1lbnQocGxheWVyMiwgcDJDZWxscywgMiwgJ0Rlc3Ryb3llcicsICcucDItZGVzdHJveWVyJykpO1xyXG4gIHAyRGVzdHJveWVyVmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gQWN0aXZhdGVQbGFjZW1lbnQocGxheWVyMiwgcDJDZWxscywgMiwgJ0Rlc3Ryb3llcicsICcucDItZGVzdHJveWVyJywgJ3ZlcicpKTtcclxufVxyXG5cclxuLy8gQWN0aXZhdGUgY2xpY2sgb24gb3duIGJvYXJkIHRvIHBsYWNlIHNoaXBzXHJcbmZ1bmN0aW9uIEFjdGl2YXRlUGxhY2VtZW50IChwbGF5ZXIsIGNlbGxzQXJyLCBzaXplLCBzaGlwTmFtZSwgZG9tRWxlbWVudCwgb3JpZW50YXRpb24gPSAnaG9yJykge1xyXG4gIHBsYWNlU2hpcEhpZ2hsaWdodChwbGF5ZXIsIGNlbGxzQXJyLCBzaXplLCBvcmllbnRhdGlvbik7XHJcbiAgcGxhY2VTaGlwQ2xpY2socGxheWVyLCBjZWxsc0Fyciwgc2l6ZSwgc2hpcE5hbWUsIGRvbUVsZW1lbnQsIG9yaWVudGF0aW9uKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcGxhY2VTaGlwSGlnaGxpZ2h0IChwbGF5ZXIsIGNlbGxzQXJyLCBzaXplLCBvcmllbnRhdGlvbiA9ICdob3InKSB7XHJcbiAgbGV0IGNvbG9yZWRDZWxsO1xyXG4gIGNlbGxzQXJyLmZvckVhY2goZWwgPT4ge1xyXG4gICAgaWYgKG9yaWVudGF0aW9uID09PSAnaG9yJykge1xyXG4gICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCAoKSA9PiB7ICAgIFxyXG4gICAgICAgIGNvbnN0IHN0YXJ0aW5nWSA9IGVsLmNsYXNzTmFtZS5zbGljZSgwLDcpO1xyXG4gICAgICAgIGNvbnN0IHN0YXJ0aW5nWCA9ICtlbC5jbGFzc05hbWUuc2xpY2UoNyw4KTtcclxuICAgICAgICBpZiAocGxheWVyLmdhbWVib2FyZC5pc1ZhbGlkKHNpemUsIFsrc3RhcnRpbmdZLnNsaWNlKC0xKSwgc3RhcnRpbmdYXSkpIHtcclxuICAgICAgICAgIGZvciAobGV0IGkgPSBzdGFydGluZ1g7IGkgPCAoK3N0YXJ0aW5nWCArIHNpemUpOyBpKyspIHtcclxuICAgICAgICAgICAgY29sb3JlZENlbGwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGAke3N0YXJ0aW5nWX0ke2l9YClbMF07XHJcbiAgICAgICAgICAgIGNvbG9yZWRDZWxsLmNsYXNzTGlzdC5hZGQoJ3BsYWNpbmctc2hpcC1jZWxsJyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIGNlbGxzQXJyLmZvckVhY2goZWwgPT4gZWwuY2xhc3NMaXN0LnJlbW92ZSgncGxhY2luZy1zaGlwLWNlbGwnKSk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgaWYgKHN0YXJ0aW5nWCArIHNpemUgPiAxMCkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gc3RhcnRpbmdYOyBpIDwgMTA7IGkrKykge1xyXG4gICAgICAgICAgICAgIGNvbG9yZWRDZWxsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShgJHtzdGFydGluZ1l9JHtpfWApWzBdO1xyXG4gICAgICAgICAgICAgIGNvbG9yZWRDZWxsLmNsYXNzTGlzdC5hZGQoJ3BsYWNpbmctZXJyb3InKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IHN0YXJ0aW5nWDsgaSA8IHN0YXJ0aW5nWCArIHNpemU7IGkrKykge1xyXG4gICAgICAgICAgICAgIGNvbG9yZWRDZWxsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShgJHtzdGFydGluZ1l9JHtpfWApWzBdO1xyXG4gICAgICAgICAgICAgIGNvbG9yZWRDZWxsLmNsYXNzTGlzdC5hZGQoJ3BsYWNpbmctZXJyb3InKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIGNlbGxzQXJyLmZvckVhY2goZWwgPT4gZWwuY2xhc3NMaXN0LnJlbW92ZSgncGxhY2luZy1lcnJvcicpKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCAoZSkgPT4geyAgICBcclxuICAgICAgICBjb25zdCBZY29vcmQgPSArZWwuY2xhc3NOYW1lLnNsaWNlKDYsNyk7XHJcbiAgICAgICAgY29uc3Qgc3RhcnRpbmdYID0gK2VsLmNsYXNzTmFtZS5zbGljZSg3LDgpO1xyXG4gICAgICAgIGNvbnN0IGNlbGxOYW1lID0gZWwuY2xhc3NOYW1lLnNsaWNlKDAsNik7XHJcbiAgICAgICAgaWYgKHBsYXllci5nYW1lYm9hcmQuaXNWYWxpZChzaXplLCBbWWNvb3JkLCBzdGFydGluZ1hdLCAndmVyJykpIHtcclxuICAgICAgICAgIGZvciAobGV0IGkgPSBZY29vcmQ7IGkgPCAoWWNvb3JkICsgc2l6ZSk7IGkrKykge1xyXG4gICAgICAgICAgICBjb2xvcmVkQ2VsbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoYCR7Y2VsbE5hbWV9JHtpfSR7c3RhcnRpbmdYfWApWzBdO1xyXG4gICAgICAgICAgICBjb2xvcmVkQ2VsbC5jbGFzc0xpc3QuYWRkKCdwbGFjaW5nLXNoaXAtY2VsbCcpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBjZWxsc0Fyci5mb3JFYWNoKGVsID0+IGVsLmNsYXNzTGlzdC5yZW1vdmUoJ3BsYWNpbmctc2hpcC1jZWxsJykpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGlmIChZY29vcmQgKyBzaXplID4gMTApe1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gWWNvb3JkOyBpIDwgMTA7IGkrKykge1xyXG4gICAgICAgICAgICAgIGNvbG9yZWRDZWxsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShgJHtjZWxsTmFtZX0ke2l9JHtzdGFydGluZ1h9YClbMF07XHJcbiAgICAgICAgICAgICAgY29sb3JlZENlbGwuY2xhc3NMaXN0LmFkZCgncGxhY2luZy1lcnJvcicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gWWNvb3JkOyBpIDwgWWNvb3JkICsgc2l6ZTsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgY29sb3JlZENlbGwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGAke2NlbGxOYW1lfSR7aX0ke3N0YXJ0aW5nWH1gKVswXTtcclxuICAgICAgICAgICAgICBjb2xvcmVkQ2VsbC5jbGFzc0xpc3QuYWRkKCdwbGFjaW5nLWVycm9yJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgKGUpID0+IHtcclxuICAgICAgICAgICAgY2VsbHNBcnIuZm9yRWFjaChlbCA9PiBlbC5jbGFzc0xpc3QucmVtb3ZlKCdwbGFjaW5nLWVycm9yJykpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gcGxhY2VTaGlwQ2xpY2sgKHBsYXllciwgY2VsbHNBcnIsIHNpemUsIHNoaXBOYW1lLCBkb21FbGVtZW50LCBvcmllbnRhdGlvbiA9ICdob3InKSB7XHJcbiAgY2VsbHNBcnIuZm9yRWFjaChlbCA9PiB7XHJcbiAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgY29uc3QgdGFyZ2V0Q2VsbCA9IChlbC5jbGFzc05hbWUuc2xpY2UoNiwgOCkpLnNwbGl0KCcnKTtcclxuICAgICAgY29uc3QgdGFyZ2V0Q29vcmRpbmF0ZXMgPSBbK3RhcmdldENlbGxbMF0sICt0YXJnZXRDZWxsWzFdXTtcclxuICAgICAgcGxheWVyLmdhbWVib2FyZC5wbGFjZVNoaXAoc2l6ZSwgdGFyZ2V0Q29vcmRpbmF0ZXMsIHNoaXBOYW1lLCBvcmllbnRhdGlvbik7XHJcbiAgICAgIGlmIChwbGF5ZXIgPT09IHBsYXllcjEpIHtcclxuICAgICAgICBwMUNlbGxzID0gUG9wdWxhdGVQMSgpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHAyQ2VsbHMgPSBQb3B1bGF0ZVAyKCdwcml2YXRlQm9hcmQnKTtcclxuICAgICAgfVxyXG4gICAgICBjb25zdCBzaGlwTGlzdE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGRvbUVsZW1lbnQpO1xyXG4gICAgICAvL3NoaXBMaXN0TmFtZS5zdHlsZS5jb2xvciA9ICdncmV5JztcclxuICAgICAgc2hpcExpc3ROYW1lLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgIGNvbnN0IGhvckJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCR7ZG9tRWxlbWVudH0gIC5ob3JgKTtcclxuICAgICAgY29uc3QgdmVyQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgJHtkb21FbGVtZW50fSAgLnZlcmApO1xyXG4gICAgICBob3JCdXR0b24uc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgdmVyQnV0dG9uLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgIHVwZGF0ZVN0YXJ0QnV0dG9uKCk7XHJcbiAgICB9KTtcclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gdXBkYXRlU3RhcnRCdXR0b24gKCkge1xyXG4gIGlmIChnYW1lTW9kZSA9PT0gJ2NvbScgJiYgcGxheWVyMS5nYW1lYm9hcmQuc2hpcExpc3QubGVuZ3RoID09PSA1KSB7XHJcbiAgICBzdGFydF9nYW1lX2J1dHRvbi5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgc3RhcnRfZ2FtZV9idXR0b24uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyM4MGMxODAnO1xyXG4gIH1cclxuICBpZiAoZ2FtZU1vZGUgPT09ICdwdnAnICYmIHBsYXllcjEuZ2FtZWJvYXJkLnNoaXBMaXN0Lmxlbmd0aCA9PT0gNSAmJiBhbGxTaGlwc1BsYWNlZCA9PT0gZmFsc2UpIHtcclxuICAgIHN0YXJ0X2dhbWVfYnV0dG9uLmRpc2FibGVkID0gZmFsc2U7XHJcbiAgICBzdGFydF9nYW1lX2J1dHRvbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI2ZmZTk4YSc7XHJcbiAgICBhbGxTaGlwc1BsYWNlZCA9IHRydWU7XHJcbiAgfSBlbHNlIGlmIChnYW1lTW9kZSA9PT0gJ3B2cCcgJiYgcGxheWVyMS5nYW1lYm9hcmQuc2hpcExpc3QubGVuZ3RoID09PSA1ICYmIHBsYXllcjIuZ2FtZWJvYXJkLnNoaXBMaXN0Lmxlbmd0aCA9PT0gNSkge1xyXG4gICAgc3RhcnRfZ2FtZV9idXR0b24uZGlzYWJsZWQgPSAgZmFsc2U7XHJcbiAgICBzdGFydF9nYW1lX2J1dHRvbi50ZXh0Q29udGVudCA9ICdTdGFydCBnYW1lJztcclxuICAgIHN0YXJ0X2dhbWVfYnV0dG9uLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjODBjMTgwJztcclxuICB9XHJcbn1cclxuXHJcblxyXG5cclxuLy8gR2FtZSBmbG93IGZ1bmN0aW9uc1xyXG5mdW5jdGlvbiBTdGFydEdhbWUgKCkge1xyXG4gIC8vIENoZWNrIGlmIGFsbCBzaGlwcyBoYXZlIGJlZW4gcGxhY2VkIGJlZm9yZSBsYXVuY2hpbmcgdGhlIGdhbWVcclxuICBpZiAocGxheWVyMS5nYW1lYm9hcmQuc2hpcExpc3QubGVuZ3RoICE9PSA1KSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1lvdSBtdXN0IHN0aWxsIHBsYWNlIHBhc3RyaWVzIScpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBzdGFydF9nYW1lX2J1dHRvbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgc3RhcnRfZ2FtZV9idXR0b24uZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgc3RhcnRfZ2FtZV9idXR0b24uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ2J1dHRvbmZhY2UnO1xyXG4gICAgUmVzdG9yZVNoaXBzTGlzdCgpO1xyXG4gICAgSW5pdGlhbGl6ZVR1cm4oY3VycmVudFBsYXllcik7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBJbml0aWFsaXplVHVybiAoY3VycmVudFBsYXllcikge1xyXG4gIFVwZGF0ZUluZm9EaXNwbGF5KCk7XHJcbiAgaWYgKGdhbWVNb2RlID09PSAnY29tJykge1xyXG4gICAgcDFDZWxscyA9IFBvcHVsYXRlUDEoKTtcclxuICAgIHAyQ2VsbHMgPSBQb3B1bGF0ZVAyKCk7XHJcbiAgICBpZiAoY3VycmVudFBsYXllciA9PT0gJ3BsYXllcjEnKSB7XHJcbiAgICAgIHAxQ2VsbHMgPSBQb3B1bGF0ZVAxKCdwcml2YXRlQm9hcmQnKTtcclxuICAgICAgcDJDZWxscyA9IFBvcHVsYXRlUDIoJ3B1YmxpY0JvYXJkJyk7XHJcbiAgICAgIEFjdGl2YXRlQXR0YWNrT24ocDJDZWxscywgcGxheWVyMSwgcGxheWVyMik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb21wdXRlckF0dGFjaygpOyBcclxuICAgIH1cclxuICB9IGVsc2Uge1xyXG4gICAgUGFzc1R1cm5Nb2RhbCgpO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Bhc3MtdHVybl9jb25maXJtLWJ1dHRvbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICBDbG9zZU1vZGFsKCdwYXNzLXR1cm5fbW9kYWwnKTtcclxuICAgICAgaWYgKGN1cnJlbnRQbGF5ZXIgPT09ICdwbGF5ZXIxJykge1xyXG4gICAgICAgIHAxQ2VsbHMgPSBQb3B1bGF0ZVAxKCdwcml2YXRlQm9hcmQnKTtcclxuICAgICAgICBwMkNlbGxzID0gUG9wdWxhdGVQMigncHVibGljQm9hcmQnKTtcclxuICAgICAgICBBY3RpdmF0ZUF0dGFja09uKHAyQ2VsbHMsIHBsYXllcjEsIHBsYXllcjIpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHAxQ2VsbHMgPSBQb3B1bGF0ZVAxKCdwdWJsaWNCb2FyZCcpO1xyXG4gICAgICAgIHAyQ2VsbHMgPSBQb3B1bGF0ZVAyKCdwcml2YXRlQm9hcmQnKTtcclxuICAgICAgICBBY3RpdmF0ZUF0dGFja09uKHAxQ2VsbHMsIHBsYXllcjIsIHBsYXllcjEpOyBcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBQb3B1bGF0ZSBwbGF5ZXIgMSBib2FyZFxyXG5mdW5jdGlvbiBQb3B1bGF0ZVAxIChib2FyZCA9ICdwcml2YXRlQm9hcmQnKSB7XHJcbiAgY29uc3QgdGFyZ2V0Qm9hcmQgPSBwbGF5ZXIxLmdhbWVib2FyZFtib2FyZF07XHJcbiAgcGxheWVyMV9ib2FyZC50ZXh0Q29udGVudCA9ICcnO1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xyXG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XHJcbiAgICAgIGxldCBjZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgIGNlbGwudGV4dENvbnRlbnQgPSB0YXJnZXRCb2FyZFtpXVtqXTtcclxuICAgICAgaWYgKGNlbGwudGV4dENvbnRlbnQgPT09ICdYJykge1xyXG4gICAgICAgIGNlbGwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNjODQ3NzEnO1xyXG4gICAgICAgIGNlbGwuc3R5bGUuY29sb3IgPSAnI2ZmZmZmZic7XHJcbiAgICAgIH0gZWxzZSBpZiAoY2VsbC50ZXh0Q29udGVudCA9PT0gJ34nKSB7XHJcbiAgICAgICAgY2VsbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAncmdiYSgxOTIsIDE4NiwgMTg4LCAwLjgpJztcclxuICAgICAgICBjZWxsLnN0eWxlLmNvbG9yID0gJyNmZmZmZmYnO1xyXG4gICAgICB9IGVsc2UgaWYgKGNlbGwudGV4dENvbnRlbnQpIHtcclxuICAgICAgICBjZWxsLnRleHRDb250ZW50ID0gYOKWomA7XHJcbiAgICAgICAgY2VsbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI2ZmZTk4YSc7XHJcbiAgICAgICAgY2VsbC5zdHlsZS5jb2xvciA9ICcjNzgyYjQ0JztcclxuICAgICAgfVxyXG4gICAgICBjZWxsLmNsYXNzTmFtZSA9IGBjZWxsMSAke2l9JHtqfWA7XHJcbiAgICAgIHBsYXllcjFfYm9hcmQuYXBwZW5kQ2hpbGQoY2VsbCk7XHJcbiAgICB9ICBcclxuICB9XHJcbiAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jZWxsMScpO1xyXG59XHJcblxyXG4vLyBQb3B1bGF0ZSBwbGF5ZXIgMiAoY29tcHV0ZXIpIGJvYXJkLCB1c2luZyB0aGUgcHVibGljQm9hcmQga2V5IHRvIGtlZXAgdW5kaXNjb3ZlcmVkIHNxdWFyZXMgZW1wdHlcclxuZnVuY3Rpb24gUG9wdWxhdGVQMiAoYm9hcmQgPSAncHVibGljQm9hcmQnKSB7XHJcbiAgY29uc3QgdGFyZ2V0Qm9hcmQgPSBwbGF5ZXIyLmdhbWVib2FyZFtib2FyZF07XHJcbiAgcGxheWVyMl9ib2FyZC50ZXh0Q29udGVudCA9ICcnO1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xyXG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XHJcbiAgICAgIGxldCBjZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgIGNlbGwudGV4dENvbnRlbnQgPSB0YXJnZXRCb2FyZFtpXVtqXTtcclxuICAgICAgaWYgKGNlbGwudGV4dENvbnRlbnQgPT09ICdYJykge1xyXG4gICAgICAgIGNlbGwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNjODQ3NzEnO1xyXG4gICAgICAgIGNlbGwuc3R5bGUuY29sb3IgPSAnI2ZmZmZmZic7XHJcbiAgICAgIH0gZWxzZSBpZiAoY2VsbC50ZXh0Q29udGVudCA9PT0gJ34nKSB7XHJcbiAgICAgICAgY2VsbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAncmdiYSgxOTIsIDE4NiwgMTg4LCAwLjgpJztcclxuICAgICAgICBjZWxsLnN0eWxlLmNvbG9yID0gJyNmZmZmZmYnO1xyXG4gICAgICB9IGVsc2UgaWYgKGNlbGwudGV4dENvbnRlbnQpIHtcclxuICAgICAgICBjZWxsLnRleHRDb250ZW50ID0gYOKWomA7XHJcbiAgICAgICAgY2VsbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI2ZmZTk4YSc7XHJcbiAgICAgICAgY2VsbC5zdHlsZS5jb2xvciA9ICcjNzgyYjQ0JztcclxuICAgICAgfVxyXG4gICAgICBjZWxsLmNsYXNzTmFtZSA9IGBjZWxsMiAke2l9JHtqfWA7XHJcbiAgICAgIHBsYXllcjJfYm9hcmQuYXBwZW5kQ2hpbGQoY2VsbCk7XHJcbiAgICB9ICBcclxuICB9XHJcbiAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jZWxsMicpO1xyXG59XHJcblxyXG4vLyBBY3RpdmF0ZSBhdHRhY2sgb24gb25lIHBsYXllciBib2FyZCBhdCBhIHRpbWUsIHdvcmtzIGZvciBQVlBcclxuZnVuY3Rpb24gQWN0aXZhdGVBdHRhY2tPbiAoY2VsbHNBcnIsIGF0dGFja2VyLCBkZWZlbmRlcikge1xyXG4gIGNlbGxzQXJyLmZvckVhY2goZWwgPT4ge1xyXG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICBjb25zdCB0YXJnZXRDZWxsID0gKGVsLmNsYXNzTmFtZS5zbGljZSgtMikpLnNwbGl0KCcnKTtcclxuICAgICAgYXR0YWNrZXIuYXR0YWNrKGRlZmVuZGVyLCB0YXJnZXRDZWxsWzBdLCB0YXJnZXRDZWxsWzFdKTtcclxuICAgICAgLy8gUmV2ZWFsIHNxdWFyZSB3aGVuIGF0dGFja2VkXHJcbiAgICAgIGlmIChjdXJyZW50UGxheWVyID09PSAncGxheWVyMScpIHtcclxuICAgICAgICBpZiAoZGVmZW5kZXIuZ2FtZWJvYXJkLnByaXZhdGVCb2FyZFt0YXJnZXRDZWxsWzBdXVt0YXJnZXRDZWxsWzFdXSA9PT0gJ1gnKSB7XHJcbiAgICAgICAgICBkZWZlbmRlci5nYW1lYm9hcmQucHVibGljQm9hcmRbdGFyZ2V0Q2VsbFswXV1bdGFyZ2V0Q2VsbFsxXV0gPSAnWCc7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGRlZmVuZGVyLmdhbWVib2FyZC5wdWJsaWNCb2FyZFt0YXJnZXRDZWxsWzBdXVt0YXJnZXRDZWxsWzFdXSA9ICd+JztcclxuICAgICAgICB9XHJcbiAgICAgICAgUG9wdWxhdGVQMigpO1xyXG4gICAgICAgIGN1cnJlbnRQbGF5ZXIgPSAncGxheWVyMic7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaWYgKGRlZmVuZGVyLmdhbWVib2FyZC5wcml2YXRlQm9hcmRbdGFyZ2V0Q2VsbFswXV1bdGFyZ2V0Q2VsbFsxXV0gPT09ICdYJykge1xyXG4gICAgICAgICAgZGVmZW5kZXIuZ2FtZWJvYXJkLnB1YmxpY0JvYXJkW3RhcmdldENlbGxbMF1dW3RhcmdldENlbGxbMV1dID0gJ1gnO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBkZWZlbmRlci5nYW1lYm9hcmQucHVibGljQm9hcmRbdGFyZ2V0Q2VsbFswXV1bdGFyZ2V0Q2VsbFsxXV0gPSAnfic7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFBvcHVsYXRlUDEoKTtcclxuICAgICAgICBjdXJyZW50UGxheWVyID0gJ3BsYXllcjEnO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICghd2luQ2hlY2soKSkge1xyXG4gICAgICAgIEluaXRpYWxpemVUdXJuKGN1cnJlbnRQbGF5ZXIpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIEdhbWVPdmVyTW9kYWwoKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbi8vIENvbXB1dGVyIGF0dGFja1xyXG5mdW5jdGlvbiBjb21wdXRlckF0dGFjayAoKSB7XHJcbiAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICBwbGF5ZXIyLmNvbXB1dGVyQXR0YWNrKHBsYXllcjEpO1xyXG4gICAgaWYgKCF3aW5DaGVjaygpKSB7XHJcbiAgICAgIGN1cnJlbnRQbGF5ZXIgPSAncGxheWVyMSc7XHJcbiAgICAgIEluaXRpYWxpemVUdXJuKGN1cnJlbnRQbGF5ZXIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgR2FtZU92ZXJNb2RhbCgpO1xyXG4gICAgfVxyXG4gIH0sICcxMDAwJyk7XHJcbn1cclxuXHJcbi8vIENoZWNrIHdpbiBjb25kaXRpb25cclxuZnVuY3Rpb24gd2luQ2hlY2sgKCkge1xyXG4gIGlmIChwbGF5ZXIxLmdhbWVib2FyZC5nZXRTdGF0dXMoKSB8fCBwbGF5ZXIyLmdhbWVib2FyZC5nZXRTdGF0dXMoKSkge1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBVcGRhdGVTY29yZSAocGxheWVyKSB7XHJcbiAgaWYgKHBsYXllciA9PT0gcGxheWVyMSkge1xyXG4gICAgcGxheWVyc1Njb3Jlc1swXSsrO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYXllcjEtc2NvcmUnKS50ZXh0Q29udGVudCA9IGBTY29yZTogJHtwbGF5ZXJzU2NvcmVzWzBdfWA7XHJcbiAgfSBlbHNlIHtcclxuICAgIHBsYXllcnNTY29yZXNbMV0rKztcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGF5ZXIyLXNjb3JlJykudGV4dENvbnRlbnQgPSBgU2NvcmU6ICR7cGxheWVyc1Njb3Jlc1sxXX1gO1xyXG4gIH1cclxufVxyXG5cclxuLy8gRGlzcGxheSBjb250cm9sbGVyXHJcbmZ1bmN0aW9uIFVwZGF0ZUluZm9EaXNwbGF5ICgpIHtcclxuICBhY3Rpb25faW5mby50ZXh0Q29udGVudCA9IGN1cnJlbnRQbGF5ZXIgPT09ICdwbGF5ZXIxJyA/IGAke3BsYXllcjEucGxheWVyTmFtZX0ncyB0dXJuYCA6IGAke3BsYXllcjIucGxheWVyTmFtZX0ncyB0dXJuYDtcclxufVxyXG5cclxuLy8gVGVzdCBidXR0b25zXHJcbnBsYXllcjFfbG9nLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gIGNvbnNvbGUubG9nKHBsYXllcjEuZ2FtZWJvYXJkKTtcclxufSk7XHJcblxyXG5wbGF5ZXIyX2xvZy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICBjb25zb2xlLmxvZyhwbGF5ZXIyLmdhbWVib2FyZCk7XHJcbn0pO1xyXG5cclxuXHJcbi8vIFJPQURNQVBcclxuLy8gUmV0aXJlciBtZXNzYWdlcyBkJ2VycmV1cnMgZGUgbGEgY29uc29sZVxyXG4vLyBBZmZpY2hlciBsYSBsaXN0ZSBkZXMgbmF2aXJlcyBwZW5kYW50IGxlIGpldSwgcG91ciBjb25uYcOudHJlIGwnw6l0YXQgZGUgY2hhY3VuIChjb3Vsw6kvcGFzIGNvdWzDqSlcclxuLy8gUmV0aXJlciBib3V0b25zIGRlIHRlc3RcclxuLy8gTmV0dG95YWdlIGR1IGNvZGUgOiBjb21tZW50YWlyZXMsIHZhcmlhYmxlcyBub24gdXRpbGlzw6llc1xyXG4vLyBSRUFETUUubWRcclxuXHJcbi8vIEJVR1NcclxuLy8gTWVzc2FnZXMgZCdlcnJldXIgw6AgY2hhcXVlIHBsYWNlbWVudCBkZSBuYXZpcmUgbG9yc3F1J29uIHJlY29tbWVuY2UgdW5lIHBhcnRpZVxyXG4vLyBCdWcgZCdhZmZpY2hhZ2UgbG9yc3F1J29uIGNsaXF1ZSBzdXIgdW4gYXV0cmUgbmF2aXJlIGF2YW50IHNhbnMgYXZvaXIgY2xpcXXDqSBhdSBwcsOpYWxhYmxlIHBvdXIgcGxhY2VyIGxlIHByZW1pZXIgOiByZW1vdmUgZXZlbnRMaXN0ZW5lciBlbiBkw6lidXQgZGUgZm9uY3Rpb24gP1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=