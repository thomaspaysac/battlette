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
      miss_sound.play();
      this.privateBoard[targetPos[0]][targetPos[1]] = '~';
      return 'You missed';
     } else if (this.privateBoard[targetPos[0]][targetPos[1]] === '~' || this.privateBoard[targetPos[0]][targetPos[1]] === 'X') {
      throw new Error('You cannot attack the same spot twice');
     } else {
      let target = this.shipList.find(el => el.name === this.privateBoard[targetPos[0]][targetPos[1]]);
      touche_sound.play();
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

function soundEffect (src) {
  this.sound = document.createElement("audio");
  this.sound.src = src;
  this.sound.setAttribute("preload", "auto");
  this.sound.setAttribute("controls", "none");
  this.sound.style.display = "none";
  document.body.appendChild(this.sound);
  this.play = function(){
    this.sound.play();
  };
  this.stop = function(){
    this.sound.pause();
  };
}

const touche_sound = new soundEffect('../dist/sounds/touche.mp3');
const miss_sound = new soundEffect('../dist/sounds/miss.mp3');




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
  victory_sound.play();
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
  turn_change_sound.play();
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
  resetDOM('player2');
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
    //player2_ships.style.display = 'none';
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
    ship_list[i].style.textDecoration = 'none';
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
    el.textContent = 'Your menu:';
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
    game_start_sound.play();
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
      let attackedShip = defender.gameboard.privateBoard[targetCell[0]][targetCell[1]];
      attacker.attack(defender, targetCell[0], targetCell[1]);
      // Reveal square when attacked
      if (currentPlayer === 'player1') {
        if (defender.gameboard.privateBoard[targetCell[0]][targetCell[1]] === 'X') {
          defender.gameboard.publicBoard[targetCell[0]][targetCell[1]] = 'X';
          if (sunkCheck(player2, attackedShip)) {
            UpdateShipList('p2', attackedShip);
          }
        } else {
          defender.gameboard.publicBoard[targetCell[0]][targetCell[1]] = '~';
        }
        PopulateP2();
        currentPlayer = 'player2';
      } else {
        if (defender.gameboard.privateBoard[targetCell[0]][targetCell[1]] === 'X') {
          defender.gameboard.publicBoard[targetCell[0]][targetCell[1]] = 'X';
          if (sunkCheck(player1, attackedShip)) {
            UpdateShipList('p1', attackedShip);
          }
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

// Check for sunk ship
function sunkCheck (player, shipName) {
  const targetShip = player.gameboard.shipList.find(({ name }) => name === shipName);
  return targetShip.isSunk();
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

function UpdateShipList (player, ship) {
  const shipName = ship.toLowerCase();
  let shipListItem = document.querySelector(`.${player}-${shipName}`);
  shipListItem.style.color = '#c84771';
  shipListItem.style.textDecoration = 'line-through';
}

// Sound controller
function soundEffect (src) {
  this.sound = document.createElement("audio");
  this.sound.src = src;
  this.sound.setAttribute("preload", "auto");
  this.sound.setAttribute("controls", "none");
  this.sound.style.display = "none";
  document.body.appendChild(this.sound);
  this.play = function(){
    this.sound.play();
  };
  this.stop = function(){
    this.sound.pause();
  };
}

const game_start_sound = new soundEffect("require('dist/sounds/game_start.mp3')");
//const game_start_sound = new soundEffect('./sounds/game_start.mp3');
const turn_change_sound = new soundEffect('./sounds/turn_change.mp3');
const victory_sound = new soundEffect('./sounds/victory.mp3');


// Test buttons
/*player1_log.addEventListener('click', () => {
  console.log(player1.gameboard);
  sunkCheck('Carrier');
});

player2_log.addEventListener('click', () => {
  console.log(player2.gameboard);
});*/


// ROADMAP
// Retirer messages d'erreurs de la console
// Retirer boutons de test
// Nettoyage du code : commentaires, variables non utilisées, réorganisation selon la fonction remplie
// README.md

// BUGS
// Messages d'erreur à chaque placement de navire lorsqu'on recommence une partie
// Bug d'affichage lorsqu'on clique sur un autre navire avant sans avoir cliqué au préalable pour placer le premier : remove eventListener en début de fonction ?

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7Ozs7O0FDQXFCO0FBQ1k7QUFDTztBQUNOO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJFQUEyRTtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRCxNQUFNO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRCxNQUFNO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FB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QUNBLHFFQUFxRSxpQkFBaUI7QUFDdEYsSUFBSTtBQUNKO0FBQ0EscUVBQXFFLGlCQUFpQjtBQUN0RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkRBQTZELG1CQUFtQixjQUFjLG1CQUFtQjtBQUNqSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRCxPQUFPLEdBQUcsU0FBUztBQUNuRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxFQUFFO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXR0ZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxldHRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGV0dGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL2JhdHRsZXR0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXR0ZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9iYXR0bGV0dGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxldHRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGV0dGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxldHRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXR0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXR0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXR0ZS8uL3NyYy9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxldHRlLy4vc3JjL3BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGV0dGUvLi9zcmMvc2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGV0dGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxldHRlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXR0ZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxldHRlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vYmF0dGxldHRlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxldHRlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxldHRlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2JhdHRsZXR0ZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9iYXR0bGV0dGUvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2JhdHRsZXR0ZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vZGlzdC9pbWFnZXMvYmFja2dyb3VuZC5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuLi9kaXN0L2ltYWdlcy9sb2dvLWJpZy5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUNvb2tpZSZmYW1pbHk9T3BlbitTYW5zOml0YWwsd2dodEAwLDQwMDswLDcwMDsxLDQwMCZmYW1pbHk9UG9pcmV0K09uZSZkaXNwbGF5PXN3YXApO1wiXSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnUG9pcmV0IE9uZScsIHNhbnMtc2VyaWY7IH1cXHJcXG5cXHJcXG5odG1sIHtcXHJcXG4gIGhlaWdodDogMTAwJTsgfVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBiYWNrZ3JvdW5kOiAjNzgyYjQ0O1xcclxcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDBkZWcsICM3ODJiNDQsICNjODQ3NzEpOyB9XFxyXFxuXFxyXFxuLmJhY2tncm91bmQtaW1hZ2Uge1xcclxcbiAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxyXFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGJvdHRvbSAyMCUgbGVmdCAwO1xcclxcbiAgei1pbmRleDogLTE7XFxyXFxuICBmaWx0ZXI6IGJsdXIoNHB4KSBncmF5c2NhbGUoMzAlKTsgfVxcclxcblxcclxcbmhlYWRlciB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHBhZGRpbmc6IDAgNTBweDtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyOyB9XFxyXFxuICBoZWFkZXIgI2xvZ28ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxyXFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICAgIGhlaWdodDogMTUwcHg7XFxyXFxuICAgIHdpZHRoOiAxNTBweDtcXHJcXG4gICAgbWFyZ2luOiAzMnB4OyB9XFxyXFxuXFxyXFxuZm9vdGVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBib3R0b206IDA7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHBhZGRpbmc6IDhweDtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzQsIDM0LCAzNCwgMC41KTtcXHJcXG4gIGNvbG9yOiAjY2NjY2NjOyB9XFxyXFxuICBmb290ZXIgYSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcXHJcXG4gICAgY29sb3I6ICNjY2NjY2M7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTsgfVxcclxcbiAgICBmb290ZXIgYTpob3ZlciB7XFxyXFxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7IH1cXHJcXG4gIGZvb3RlciAuc29jaWFsLWxpbmtzIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBnYXA6IDhweDsgfVxcclxcbiAgICBmb290ZXIgLnNvY2lhbC1saW5rcyBhIHtcXHJcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgZ2FwOiA4cHg7IH1cXHJcXG4gICAgZm9vdGVyIC5zb2NpYWwtbGlua3MgaW1nIHtcXHJcXG4gICAgICB3aWR0aDogMXJlbTsgfVxcclxcblxcclxcbiNuZXctZ2FtZV9idXR0b24sXFxyXFxuI3B2cC1uZXctZ2FtZV9idXR0b24ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB3aWR0aDogMTkwcHg7XFxyXFxuICBjb2xvcjogI2VlZWVlZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkOTdlOWM7XFxyXFxuICBib3JkZXI6IDRweCBkb3VibGUgIzU1NTU1NTsgfVxcclxcbiAgI25ldy1nYW1lX2J1dHRvbjpob3ZlcixcXHJcXG4gICNwdnAtbmV3LWdhbWVfYnV0dG9uOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2M4NDc3MTsgfVxcclxcbiAgI25ldy1nYW1lX2J1dHRvbjphY3RpdmUsXFxyXFxuICAjcHZwLW5ldy1nYW1lX2J1dHRvbjphY3RpdmUge1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMnB4KTsgfVxcclxcbiAgI25ldy1nYW1lX2J1dHRvbiBpbWcsXFxyXFxuICAjcHZwLW5ldy1nYW1lX2J1dHRvbiBpbWcge1xcclxcbiAgICBoZWlnaHQ6IDI0cHg7IH1cXHJcXG5cXHJcXG4jc3RhcnQtZ2FtZV9idXR0b24ge1xcclxcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciA1MDBtcyBlYXNlLW91dDtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7IH1cXHJcXG4gICNzdGFydC1nYW1lX2J1dHRvbjphY3RpdmUge1xcclxcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoODUlKTtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDJweCk7IH1cXHJcXG5cXHJcXG4uaW5mby1jb250YWluZXIge1xcclxcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlOGUyZTQ7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgcGFkZGluZzogMTZweDtcXHJcXG4gIG1hcmdpbjogMCAzMnB4O1xcclxcbiAgZ2FwOiAzMnB4O1xcclxcbiAgYm9yZGVyOiAxMHB4IGRvdWJsZSAjYzg0NzcxO1xcclxcbiAgYm9yZGVyLXJhZGl1czogN3B4OyB9XFxyXFxuICAuaW5mby1jb250YWluZXIgYnV0dG9uIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICAgcGFkZGluZzogOHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7IH1cXHJcXG5cXHJcXG4uZ2FtZS1tb2RlLWJ1dHRvbnMge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGdhcDogMjVweDtcXHJcXG4gIG1hcmdpbi1yaWdodDogMThweDsgfVxcclxcblxcclxcbi5iYXR0bGUtaW5mbyB7XFxyXFxuICBtYXJnaW4tbGVmdDogMThweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBnYXA6IDI0cHg7IH1cXHJcXG5cXHJcXG4uYWN0aW9uLWluZm8ge1xcclxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICBmb250LXdlaWdodDogNzAwOyB9XFxyXFxuXFxyXFxuLmJhdHRsZWZpZWxkIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGdhcDogNTBweDsgfVxcclxcblxcclxcbiNwbGF5ZXIxLWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZ2FwOiA4cHg7IH1cXHJcXG5cXHJcXG4jcGxheWVyMi1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcXHJcXG4gIGdhcDogOHB4OyB9XFxyXFxuXFxyXFxuLnBsYXllci1pbmZvIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlOGUyZTQ7XFxyXFxuICB3aWR0aDogMjMwcHg7XFxyXFxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcclxcbiAgcGFkZGluZzogMTZweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDdweDtcXHJcXG4gIGJvcmRlcjogMTBweCBkb3VibGUgI2M4NDc3MTsgfVxcclxcblxcclxcbiNwbGF5ZXIxLW5hbWUsXFxyXFxuI3BsYXllcjItbmFtZSB7XFxyXFxuICBmb250LWZhbWlseTogJ0Nvb2tpZScsIHNhbnMtc2VyaWY7XFxyXFxuICBmb250LXNpemU6IDJyZW07XFxyXFxuICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMTZweDsgfVxcclxcblxcclxcbiNwbGF5ZXIyLW5hbWUge1xcclxcbiAgdGV4dC1hbGlnbjogZW5kOyB9XFxyXFxuXFxyXFxuI3BsYXllcjEtc2NvcmUsXFxyXFxuI3BsYXllcjItc2NvcmUge1xcclxcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogOHB4OyB9XFxyXFxuXFxyXFxuLmFjdGlvbi1kZXNjcmlwdG9yIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjsgfVxcclxcblxcclxcbiNwbGF5ZXIxLXNoaXBzLFxcclxcbiNwbGF5ZXIyLXNoaXBzIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxuICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7IH1cXHJcXG4gICNwbGF5ZXIxLXNoaXBzIHVsLFxcclxcbiAgI3BsYXllcjItc2hpcHMgdWwge1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBtYXJnaW46IDA7IH1cXHJcXG4gICNwbGF5ZXIxLXNoaXBzIGxpLFxcclxcbiAgI3BsYXllcjItc2hpcHMgbGkge1xcclxcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XFxyXFxuICAgIG1hcmdpbjogMTJweCAwO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzc4MmI0NDsgfVxcclxcblxcclxcbi5zaGlwLXBsYWNlbWVudCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyB9XFxyXFxuXFxyXFxuLm9yaWVudGF0aW9uLWJ1dHRvbnMge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGdhcDogOHB4OyB9XFxyXFxuICAub3JpZW50YXRpb24tYnV0dG9ucyBpbWcge1xcclxcbiAgICBoZWlnaHQ6IDFyZW07XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjsgfVxcclxcblxcclxcbiNwbGF5ZXIxLWJvYXJkLFxcclxcbiNwbGF5ZXIyLWJvYXJkIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpOyB9XFxyXFxuICAjcGxheWVyMS1ib2FyZCAuZW1wdHktY2VsbCxcXHJcXG4gICNwbGF5ZXIyLWJvYXJkIC5lbXB0eS1jZWxsIHtcXHJcXG4gICAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgICB3aWR0aDogNDBweDtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjQ0NSk7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjMyLCAyMjYsIDIyOCwgMC4xNSk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDsgfVxcclxcblxcclxcbltjbGFzc149XFxcImNlbGxcXFwiXSB7XFxyXFxuICBoZWlnaHQ6IDQwcHg7XFxyXFxuICB3aWR0aDogNDBweDtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4zMjMpO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMzIsIDIyNiwgMjI4LCAwLjc1KTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxyXFxuICBmb250LXNpemU6IDJyZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiA0cHg7IH1cXHJcXG4gIFtjbGFzc149XFxcImNlbGxcXFwiXTpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyMjMsIDg3LCAwLjkpO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7IH1cXHJcXG5cXHJcXG4ucGxhY2luZy1zaGlwLWNlbGwge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDIyMywgODcsIDAuOSk7IH1cXHJcXG5cXHJcXG4ucGxhY2luZy1lcnJvciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMCwgMCwgMC40MjMpOyB9XFxyXFxuICAucGxhY2luZy1lcnJvcjpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAwLCAwLCAwLjQyMyk7IH1cXHJcXG5cXHJcXG4uYmFja2Ryb3Age1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMTEsIDIxMSwgMjExLCAwLjU2NCk7IH1cXHJcXG5cXHJcXG4uZ2FtZS1vdmVyX21vZGFsIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHRvcDogNTAlO1xcclxcbiAgbGVmdDogNTAlO1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxyXFxuICBib3JkZXI6IDdweCBkb3VibGUgI2M4NDc3MTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWVlZWU7XFxyXFxuICB6LWluZGV4OiAzO1xcclxcbiAgcGFkZGluZzogM3JlbTsgfVxcclxcbiAgLmdhbWUtb3Zlcl9tb2RhbCBpbWcge1xcclxcbiAgICB3aWR0aDogMTAwcHg7IH1cXHJcXG4gIC5nYW1lLW92ZXJfbW9kYWwgYnV0dG9uIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmOyB9XFxyXFxuXFxyXFxuLnBhc3MtdHVybl9tb2RhbCB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogNTBweDtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHRvcDogNTAlO1xcclxcbiAgbGVmdDogNTAlO1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxyXFxuICB3aWR0aDogMzUwcHg7XFxyXFxuICBoZWlnaHQ6IDIwMHB4O1xcclxcbiAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZWVlZTtcXHJcXG4gIGJvcmRlcjogNHB4IHNvbGlkICNjODQ3NzE7XFxyXFxuICB6LWluZGV4OiAzOyB9XFxyXFxuICAucGFzcy10dXJuX21vZGFsIHAge1xcclxcbiAgICBtYXJnaW46IDA7IH1cXHJcXG4gIC5wYXNzLXR1cm5fbW9kYWwgYnV0dG9uIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2M4NDc3MTtcXHJcXG4gICAgY29sb3I6ICNlZWVlZWU7XFxyXFxuICAgIHBhZGRpbmc6IDhweDtcXHJcXG4gICAgZm9udC1zaXplOiAxLjVyZW07IH1cXHJcXG5cXHJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1zdHlsZS5jc3MubWFwICovXFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBR0E7RUFDRSxzQkFBc0I7RUFDdEIscUNBQXFDLEVBQUE7O0FBR3ZDO0VBQ0UsWUFBWSxFQUFBOztBQUdkO0VBQ0UsU0FBUztFQUNULFdBQVc7RUFDWCxZQUFZO0VBQ1osbUJBZjBFO0VBZ0IxRSxtREFBOEYsRUFBQTs7QUFHaEc7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLGVBQWU7RUFDZix5REFBc0Q7RUFDdEQsNEJBQTRCO0VBQzVCLHNCQUFzQjtFQUN0QixzQ0FBc0M7RUFD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QUFzQztFQUN0QywyQ0FBMkM7RUFDM0Msa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixlQUFlO0VBQ2Ysa0JBQWtCLEVBQUE7RUFFbEI7SUFDRSx5Q0FBeUM7SUFDekMsZUFBZSxFQUFBOztBQU1uQjtFQUNFLHlDQUF5QyxFQUFBOztBQUczQztFQUNFLHdDQUF3QyxFQUFBO0VBRXhDO0lBQ0Usd0NBQXdDLEVBQUE7O0FBSzVDO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZixNQUFNO0VBQ04sT0FBTztFQUNQLGFBQWE7RUFDYixZQUFZO0VBQ1osNENBQTRDLEVBQUE7O0FBRzlDO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGVBQWU7RUFDZixRQUFRO0VBQ1IsU0FBUztFQUNULGdDQUFnQztFQUNoQywwQkFBZ0Q7RUFDaEQsa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixVQUFVO0VBQ1YsYUFBYSxFQUFBO0VBRWI7SUFDRSxZQUFZLEVBQUE7RUFHZDtJQUNFLG9DQUFvQyxFQUFBOztBQUl4QztFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1QsZUFBZTtFQUNmLFFBQVE7RUFDUixTQUFTO0VBQ1QsZ0NBQWdDO0VBQ2hDLFlBQVk7RUFDWixhQUFhO0VBQ2IsZUFBZTtFQUNmLHlCQUF5QjtFQUN6Qix5QkFBK0M7RUFDL0MsVUFBVSxFQUFBO0VBRVY7SUFDRSxTQUFTLEVBQUE7RUFHWDtJQUNFLHlCQTdWMkI7SUE4VjNCLGNBQWM7SUFDZCxZQUFZO0lBQ1osaUJBQWlCLEVBQUE7O0FDdkVyQixvQ0FBb0NcIixcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBTaGlwIH0gZnJvbSAnLi9zaGlwLmpzJztcclxuXHJcblxyXG5jb25zdCBHYW1lYm9hcmQgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHByaXZhdGVCb2FyZDogW1xyXG4gICAgICBbLCwsLCwsLCwsXSxcclxuICAgICAgWywsLCwsLCwsLF0sXHJcbiAgICAgIFssLCwsLCwsLCxdLFxyXG4gICAgICBbLCwsLCwsLCwsXSxcclxuICAgICAgWywsLCwsLCwsLF0sXHJcbiAgICAgIFssLCwsLCwsLCxdLFxyXG4gICAgICBbLCwsLCwsLCwsXSxcclxuICAgICAgWywsLCwsLCwsLF0sXHJcbiAgICAgIFssLCwsLCwsLCxdLFxyXG4gICAgICBbLCwsLCwsLCwsXSxcclxuICAgIF0sXHJcblxyXG4gICAgcHVibGljQm9hcmQ6IFtcclxuICAgICAgWywsLCwsLCwsLF0sXHJcbiAgICAgIFssLCwsLCwsLCxdLFxyXG4gICAgICBbLCwsLCwsLCwsXSxcclxuICAgICAgWywsLCwsLCwsLF0sXHJcbiAgICAgIFssLCwsLCwsLCxdLFxyXG4gICAgICBbLCwsLCwsLCwsXSxcclxuICAgICAgWywsLCwsLCwsLF0sXHJcbiAgICAgIFssLCwsLCwsLCxdLFxyXG4gICAgICBbLCwsLCwsLCwsXSxcclxuICAgICAgWywsLCwsLCwsLF0sXHJcbiAgICBdLFxyXG4gICAgXHJcbiAgICBzaGlwTGlzdDogW10sXHJcblxyXG4gICAgcGxhY2VTaGlwOiBmdW5jdGlvbiAoc2l6ZSwgc3RhcnRQb3MsIHNoaXBOYW1lID0gJ1VubmFtZWQgc2hpcCcsIGRpcmVjdGlvbiA9ICdob3InKSB7XHJcbiAgICAgIGlmICh0aGlzLmlzVmFsaWQoc2l6ZSwgc3RhcnRQb3MsIGRpcmVjdGlvbikgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3QgcGxhY2Ugc2hpcDogb3V0IG9mIGJvdW5kcyBvciBzcGFjZSBhbHJlYWR5IG9jY3VwaWVkLicpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGxldCBuZXdTaGlwID0gU2hpcChzaXplLCBzaGlwTmFtZSk7XHJcbiAgICAgICAgdGhpcy5zaGlwTGlzdC5wdXNoKG5ld1NoaXApO1xyXG4gICAgICAgIGlmIChkaXJlY3Rpb24gPT09ICdob3InKSB7XHJcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNpemU7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLnByaXZhdGVCb2FyZFtzdGFydFBvc1swXV1bc3RhcnRQb3NbMV0gKyBpXSA9IHNoaXBOYW1lO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAoZGlyZWN0aW9uID09PSAndmVyJykge1xyXG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaXplOyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5wcml2YXRlQm9hcmRbc3RhcnRQb3NbMF0gKyBpXVtzdGFydFBvc1sxXV0gPSBzaGlwTmFtZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgY29tcHV0ZXJQbGFjZVNoaXA6IGZ1bmN0aW9uIChzaXplLCBzaGlwTmFtZSkge1xyXG4gICAgICBsZXQgcm5kUG9zID0gW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKSwgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApXTtcclxuICAgICAgbGV0IHJuZERpcmVjdGlvbiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIpO1xyXG4gICAgICBzd2l0Y2ggKHJuZERpcmVjdGlvbikge1xyXG4gICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgIHJuZERpcmVjdGlvbiA9ICdob3InO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICBybmREaXJlY3Rpb24gPSAndmVyJztcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB3aGlsZSAoIXRoaXMuaXNWYWxpZChzaXplLCBybmRQb3MsIHJuZERpcmVjdGlvbikpIHtcclxuICAgICAgICBybmRQb3MgPSBbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApLCBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCldO1xyXG4gICAgICAgIHJuZERpcmVjdGlvbiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIpO1xyXG4gICAgICAgIHN3aXRjaCAocm5kRGlyZWN0aW9uKSB7XHJcbiAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgIHJuZERpcmVjdGlvbiA9ICdob3InO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJuZERpcmVjdGlvbiA9ICd2ZXInO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5wbGFjZVNoaXAoc2l6ZSwgcm5kUG9zLCBzaGlwTmFtZSwgcm5kRGlyZWN0aW9uKTtcclxuICAgIH0sXHJcblxyXG4gICAgaXNWYWxpZDogZnVuY3Rpb24gKHNpemUsIHN0YXJ0UG9zLCBkaXJlY3Rpb24gPSAnaG9yJykge1xyXG4gICAgICBsZXQgc2l6ZUNoZWNrID0gdHJ1ZTtcclxuICAgICAgbGV0IGF2YWlsYWJsZUNoZWNrID0gdHJ1ZTtcclxuICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gJ2hvcicgJiYgKChzdGFydFBvc1sxXSArIHNpemUgLSAxKSA+IDkpKSB7XHJcbiAgICAgICAgc2l6ZUNoZWNrID0gZmFsc2U7XHJcbiAgICAgIH0gZWxzZSBpZiAoZGlyZWN0aW9uID09PSAndmVyJyAmJiAoKHN0YXJ0UG9zWzBdICsgc2l6ZSAtIDEpID4gOSkpIHtcclxuICAgICAgICBzaXplQ2hlY2sgPSBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgICBsZXQgdGFyZ2V0QXJyID0gW107XHJcbiAgICAgIGlmIChkaXJlY3Rpb24gPT09ICdob3InKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaXplOyBpKyspIHsgLy8gY2hlY2sgaWYgaG9yaXpvbnRhbCBwbGFjZW1lbnQgaXMgZW1wdHlcclxuICAgICAgICAgIHRhcmdldEFyci5wdXNoKHRoaXMucHJpdmF0ZUJvYXJkW3N0YXJ0UG9zWzBdXVtzdGFydFBvc1sxXSArIGldKTtcclxuICAgICAgICAgIH1cclxuICAgICAgfSBlbHNlIGlmIChzaXplQ2hlY2sgPT09IHRydWUgJiYgZGlyZWN0aW9uID09PSAndmVyJykge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2l6ZTsgaSsrKSB7XHJcbiAgICAgICAgICB0YXJnZXRBcnIucHVzaCh0aGlzLnByaXZhdGVCb2FyZFtzdGFydFBvc1swXSArIGldW3N0YXJ0UG9zWzFdXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGF2YWlsYWJsZUNoZWNrID0gdGFyZ2V0QXJyLmV2ZXJ5KGVsID0+IGVsID09PSB1bmRlZmluZWQpO1xyXG4gICAgICByZXR1cm4gKHNpemVDaGVjayAmJiBhdmFpbGFibGVDaGVjayk7XHJcbiAgICAgIH0sXHJcblxyXG4gICAgcmVjZWl2ZUF0dGFjazogZnVuY3Rpb24gKHRhcmdldFBvcykge1xyXG4gICAgIGlmICh0aGlzLnByaXZhdGVCb2FyZFt0YXJnZXRQb3NbMF1dW3RhcmdldFBvc1sxXV0gPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICBtaXNzX3NvdW5kLnBsYXkoKTtcclxuICAgICAgdGhpcy5wcml2YXRlQm9hcmRbdGFyZ2V0UG9zWzBdXVt0YXJnZXRQb3NbMV1dID0gJ34nO1xyXG4gICAgICByZXR1cm4gJ1lvdSBtaXNzZWQnO1xyXG4gICAgIH0gZWxzZSBpZiAodGhpcy5wcml2YXRlQm9hcmRbdGFyZ2V0UG9zWzBdXVt0YXJnZXRQb3NbMV1dID09PSAnficgfHwgdGhpcy5wcml2YXRlQm9hcmRbdGFyZ2V0UG9zWzBdXVt0YXJnZXRQb3NbMV1dID09PSAnWCcpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdZb3UgY2Fubm90IGF0dGFjayB0aGUgc2FtZSBzcG90IHR3aWNlJyk7XHJcbiAgICAgfSBlbHNlIHtcclxuICAgICAgbGV0IHRhcmdldCA9IHRoaXMuc2hpcExpc3QuZmluZChlbCA9PiBlbC5uYW1lID09PSB0aGlzLnByaXZhdGVCb2FyZFt0YXJnZXRQb3NbMF1dW3RhcmdldFBvc1sxXV0pO1xyXG4gICAgICB0b3VjaGVfc291bmQucGxheSgpO1xyXG4gICAgICB0YXJnZXQuaGl0cysrO1xyXG4gICAgICB0aGlzLnByaXZhdGVCb2FyZFt0YXJnZXRQb3NbMF1dW3RhcmdldFBvc1sxXV0gPSAnWCc7XHJcbiAgICAgIGlmICh0YXJnZXQuaXNTdW5rKCkpIHtcclxuICAgICAgICByZXR1cm4gJ1RoZSBzaGlwIGhhcyBzdW5rJztcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIHRhcmdldC5uYW1lICsgJyBoYXMgYmVlbiBoaXQsICcgKyAodGFyZ2V0LnNpemUgLSB0YXJnZXQuaGl0cykgKycgaGl0KHMpIGxlZnQnO1xyXG4gICAgICB9XHJcbiAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBnZXRTdGF0dXM6IGZ1bmN0aW9uKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5zaGlwTGlzdC5ldmVyeShlbCA9PiBlbC5pc1N1bmsoKSk7XHJcbiAgICB9LFxyXG5cclxuICB9O1xyXG59O1xyXG5cclxuZnVuY3Rpb24gc291bmRFZmZlY3QgKHNyYykge1xyXG4gIHRoaXMuc291bmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYXVkaW9cIik7XHJcbiAgdGhpcy5zb3VuZC5zcmMgPSBzcmM7XHJcbiAgdGhpcy5zb3VuZC5zZXRBdHRyaWJ1dGUoXCJwcmVsb2FkXCIsIFwiYXV0b1wiKTtcclxuICB0aGlzLnNvdW5kLnNldEF0dHJpYnV0ZShcImNvbnRyb2xzXCIsIFwibm9uZVwiKTtcclxuICB0aGlzLnNvdW5kLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuc291bmQpO1xyXG4gIHRoaXMucGxheSA9IGZ1bmN0aW9uKCl7XHJcbiAgICB0aGlzLnNvdW5kLnBsYXkoKTtcclxuICB9O1xyXG4gIHRoaXMuc3RvcCA9IGZ1bmN0aW9uKCl7XHJcbiAgICB0aGlzLnNvdW5kLnBhdXNlKCk7XHJcbiAgfTtcclxufVxyXG5cclxuY29uc3QgdG91Y2hlX3NvdW5kID0gbmV3IHNvdW5kRWZmZWN0KCcuLi9kaXN0L3NvdW5kcy90b3VjaGUubXAzJyk7XHJcbmNvbnN0IG1pc3Nfc291bmQgPSBuZXcgc291bmRFZmZlY3QoJy4uL2Rpc3Qvc291bmRzL21pc3MubXAzJyk7XHJcblxyXG5cclxuZXhwb3J0IHsgR2FtZWJvYXJkIH07IiwiaW1wb3J0IHsgR2FtZWJvYXJkIH0gZnJvbSBcIi4vZ2FtZWJvYXJkXCI7XHJcblxyXG5jb25zdCBQbGF5ZXIgPSAobmFtZSkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICBwbGF5ZXJOYW1lOiBuYW1lLFxyXG5cclxuICAgIGdhbWVib2FyZDogR2FtZWJvYXJkKCksXHJcblxyXG4gICAgYXR0YWNrOiBmdW5jdGlvbiAocGxheWVyLCB4LCB5KSB7XHJcbiAgICAgIHBsYXllci5nYW1lYm9hcmQucmVjZWl2ZUF0dGFjayhbeCwgeV0pO1xyXG4gICAgfSxcclxuXHJcbiAgICBjb21wdXRlckF0dGFjazogZnVuY3Rpb24gKHBsYXllcikge1xyXG4gICAgICBsZXQgY29vcmQgPSBmaW5kVmFsaWRNb3ZlKHBsYXllci5nYW1lYm9hcmQucHJpdmF0ZUJvYXJkKTtcclxuICAgICAgdGhpcy5hdHRhY2socGxheWVyLCBjb29yZFswXSwgY29vcmRbMV0pO1xyXG4gICAgfSxcclxuICB9O1xyXG59O1xyXG5cclxuZnVuY3Rpb24gcm5kQ29vcmRpbmF0ZXMgKCkge1xyXG4gIGxldCB4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xyXG4gIGxldCB5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xyXG4gIHJldHVybiBbW3hdLFt5XV07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZpbmRWYWxpZE1vdmUgKGJvYXJkKSB7XHJcbiAgLy8gR2VuZXJhdGUgdHdvIHJhbmRvbSBudW1iZXIgYmV0d2VlbiAwLTlcclxuICBsZXQgY29vcmRpbmF0ZXMgPSBybmRDb29yZGluYXRlcygpO1xyXG4gIC8vIGNvbnRpbnVlIHdoaWxlIHRoZSBtb3ZlIGlzIGludmFsaWQsIGxhdW5jaCBhdHRhY2sgd2hlbiBmaW5kaW5nIGEgdmFsaWQgbW92ZVxyXG4gIHdoaWxlIChib2FyZFtjb29yZGluYXRlc1swXV1bY29vcmRpbmF0ZXNbMV1dID09PSAnWCcgfHwgYm9hcmRbY29vcmRpbmF0ZXNbMF1dW2Nvb3JkaW5hdGVzWzFdXSA9PT0gJ34nKSB7XHJcbiAgICBjb29yZGluYXRlcyA9IHJuZENvb3JkaW5hdGVzKCk7XHJcbiAgfVxyXG4gIHJldHVybiBjb29yZGluYXRlcztcclxufVxyXG5cclxuZXhwb3J0IHsgUGxheWVyIH07IiwiY29uc3QgU2hpcCA9IChzaXplLCBuYW1lID0gJ1VubmFtZWQgc2hpcCcsIGlkID0gdW5kZWZpbmVkKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIG5hbWUsXHJcbiAgICBzaXplLFxyXG4gICAgaGl0czogMCxcclxuICAgIGhpdDogZnVuY3Rpb24oKSB7XHJcbiAgICAgIHRoaXMuaGl0cysrO1xyXG4gICAgfSxcclxuXHJcbiAgICBpc1N1bms6IGZ1bmN0aW9uKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5oaXRzID49IHRoaXMuc2l6ZSA/IHRydWUgOiBmYWxzZTtcclxuICAgIH0sXHJcblxyXG4gICAgaWQsXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCB7IFNoaXAgfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5pbXBvcnQgeyBTaGlwIH0gZnJvbSAnLi9zaGlwLmpzJztcclxuaW1wb3J0IHsgR2FtZWJvYXJkIH0gZnJvbSAnLi9nYW1lYm9hcmQnO1xyXG5pbXBvcnQgeyBQbGF5ZXIgfSBmcm9tICcuL3BsYXllcic7XHJcblxyXG4vLyBHb2JhbCB2YXJpYWJsZXNcclxubGV0IHBsYXllcjE7XHJcbmxldCBwbGF5ZXIyO1xyXG5sZXQgcDFDZWxscztcclxubGV0IHAyQ2VsbHM7XHJcbmxldCBnYW1lTW9kZTtcclxubGV0IGN1cnJlbnRQbGF5ZXIgPSAncGxheWVyMSc7XHJcbmxldCBhbGxTaGlwc1BsYWNlZD0gZmFsc2U7XHJcbiAgLy8gVXNpbmcgZ2xvYmFsIHZhcmlhYmxlcyB0byBrZWVwIHRoZSBzY29yZSBmcm9tIG9uZSBiYXR0bGUgdG8gdGhlIG5leHQ7IHJldHVybiB0byAwIG9uIHBhZ2UgcmVmcmVzaFxyXG5sZXQgcGxheWVyc1Njb3JlcyA9IFswLCAwXTtcclxubGV0IHBsYXllcjJTY29yZSA9IDA7XHJcblxyXG4vLyBET00gRWxlbWVudHNcclxuY29uc3QgbmV3X2dhbWVfYnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ldy1nYW1lX2J1dHRvbicpO1xyXG5jb25zdCBwdnBfbmV3X2dhbWVfYnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3B2cC1uZXctZ2FtZV9idXR0b24nKTtcclxuY29uc3Qgc3RhcnRfZ2FtZV9idXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhcnQtZ2FtZV9idXR0b24nKTtcclxuXHJcbmNvbnN0IHBsYXllcjFfYm9hcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxheWVyMS1ib2FyZCcpO1xyXG5jb25zdCBwbGF5ZXIxX3NoaXBzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYXllcjEtc2hpcHMnKTtcclxuY29uc3QgcGxheWVyMl9ib2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGF5ZXIyLWJvYXJkJyk7XHJcbmNvbnN0IHBsYXllcjJfc2hpcHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxheWVyMi1zaGlwcycpO1xyXG5jb25zdCBwbGF5ZXIxX2xvZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGF5ZXIxLWxvZycpO1xyXG5jb25zdCBwbGF5ZXIyX2xvZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGF5ZXIyLWxvZycpO1xyXG5jb25zdCBhY3Rpb25faW5mbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY3Rpb24taW5mbycpO1xyXG5cclxuXHJcbi8vIE1vZGFscyBkaXNwbGF5XHJcbmNvbnN0IGNsb3NlTW9kYWxCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xvc2UtbW9kYWxfYnV0dG9uJyk7XHJcbmNsb3NlTW9kYWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBDbG9zZU1vZGFsKCdnYW1lLW92ZXJfbW9kYWwnKSk7XHJcblxyXG5mdW5jdGlvbiBPcGVuTW9kYWwobW9kYWwpIHtcclxuICBjb25zdCBiYWNrZHJvcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5iYWNrZHJvcCcpO1xyXG4gIGJhY2tkcm9wLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gIGJhY2tkcm9wLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gQ2xvc2VNb2RhbChtb2RhbCkpO1xyXG4gIGNvbnN0IG1vZGFsVG9PcGVuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7bW9kYWx9YCk7XHJcbiAgbW9kYWxUb09wZW4uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIENsb3NlTW9kYWwobW9kYWwpIHtcclxuICBjb25zdCBiYWNrZHJvcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5iYWNrZHJvcCcpO1xyXG4gIGJhY2tkcm9wLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgY29uc3QgbW9kYWxUb0Nsb3NlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7bW9kYWx9YCk7XHJcbiAgbW9kYWxUb0Nsb3NlLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIEdhbWVPdmVyTW9kYWwgKCkge1xyXG4gIHZpY3Rvcnlfc291bmQucGxheSgpO1xyXG4gIGNvbnN0IGJhY2tkcm9wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJhY2tkcm9wJyk7XHJcbiAgYmFja2Ryb3Auc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgYmFja2Ryb3AuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBDbG9zZU1vZGFsKCdnYW1lLW92ZXJfbW9kYWwnKSk7XHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbWUtb3Zlcl9tb2RhbCcpLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XHJcbiAgaWYgKGN1cnJlbnRQbGF5ZXIgPT09ICdwbGF5ZXIxJykge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbWUtb3Zlcl9tb2RhbCA+IHAnKS50ZXh0Q29udGVudCA9ICdQbGF5ZXIgMiB3aW5zISc7XHJcbiAgICBhY3Rpb25faW5mby50ZXh0Q29udGVudCA9ICdQbGF5ZXIgMiB3aW5zISc7XHJcbiAgICBVcGRhdGVTY29yZShwbGF5ZXIyKTtcclxuICB9IGVsc2Uge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbWUtb3Zlcl9tb2RhbCA+IHAnKS50ZXh0Q29udGVudCA9ICdQbGF5ZXIgMSB3aW5zISc7XHJcbiAgICBhY3Rpb25faW5mby50ZXh0Q29udGVudCA9ICdQbGF5ZXIgMSB3aW5zISc7XHJcbiAgICBVcGRhdGVTY29yZShwbGF5ZXIxKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFBhc3NUdXJuTW9kYWwgKCkge1xyXG4gIHR1cm5fY2hhbmdlX3NvdW5kLnBsYXkoKTtcclxuICBwMUNlbGxzID0gUG9wdWxhdGVQMSgncHVibGljQm9hcmQnKTtcclxuICBwMkNlbGxzID0gUG9wdWxhdGVQMigncHVibGljQm9hcmQnKTtcclxuICBjb25zdCBiYWNrZHJvcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5iYWNrZHJvcCcpO1xyXG4gIGJhY2tkcm9wLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYXNzLXR1cm5fbW9kYWwnKS5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xyXG4gIGlmIChjdXJyZW50UGxheWVyID09PSAncGxheWVyMScpIHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYXNzLXR1cm5fbW9kYWwgPiBwJykudGV4dENvbnRlbnQgPSBgUGxheWVyIDEncyB0dXJuYDtcclxuICB9IGVsc2Uge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBhc3MtdHVybl9tb2RhbCA+IHAnKS50ZXh0Q29udGVudCA9IGBQbGF5ZXIgMidzIHR1cm5gO1xyXG4gIH1cclxufVxyXG5cclxuLy8gSW5pdGlhbGl6ZSBnYW1lIGZ1bmN0aW9uc1xyXG5uZXdfZ2FtZV9idXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgcmVzZXRET00oKTtcclxuICByZXNldERPTSgncGxheWVyMicpO1xyXG4gIEluaXRpYWxpemVHYW1lKCdQbGF5ZXInLCAnQ29tcHV0ZXInLCAnY29tJyk7XHJcbiAgcGxhY2VtZW50UGhhc2UoKTtcclxuICBhY3Rpb25faW5mby50ZXh0Q29udGVudCA9ICdQbGFjZSBlYWNoIG9uZSBvZiB5b3VyIHBhc3RyaWVzLic7XHJcbiAgc3RhcnRfZ2FtZV9idXR0b24uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgc3RhcnRfZ2FtZV9idXR0b24uZGlzYWJsZWQgPSB0cnVlO1xyXG4gIHN0YXJ0X2dhbWVfYnV0dG9uLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdidXR0b25mYWNlJztcclxuICBzdGFydF9nYW1lX2J1dHRvbi50ZXh0Q29udGVudCA9ICdTdGFydCB0aGUgYmF0dGxlJztcclxufSk7XHJcblxyXG5wdnBfbmV3X2dhbWVfYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gIHJlc2V0RE9NKCk7XHJcbiAgSW5pdGlhbGl6ZUdhbWUoJ1BsYXllciAxJywgJ1BsYXllciAyJywgJ3B2cCcpO1xyXG4gIHBsYWNlbWVudFBoYXNlKCk7XHJcbiAgYWN0aW9uX2luZm8udGV4dENvbnRlbnQgPSAnUGxheWVyIDEsIHBsYWNlIGVhY2ggb25lIG9mIHlvdXIgcGFzdHJpZXMuJztcclxuICBzdGFydF9nYW1lX2J1dHRvbi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICBzdGFydF9nYW1lX2J1dHRvbi5kaXNhYmxlZCA9IHRydWU7XHJcbiAgc3RhcnRfZ2FtZV9idXR0b24uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ2J1dHRvbmZhY2UnO1xyXG4gIHN0YXJ0X2dhbWVfYnV0dG9uLnRleHRDb250ZW50ID0gJ05leHQgcGxheWVyJztcclxufSk7XHJcblxyXG5zdGFydF9nYW1lX2J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICBpZiAoZ2FtZU1vZGUgPT09ICdjb20nKSB7XHJcbiAgICAvL3BsYXllcjFfc2hpcHMuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIFN0YXJ0R2FtZSgpO1xyXG4gIH0gZWxzZSBpZiAoZ2FtZU1vZGUgPT09ICdwdnAnICYmIHBsYXllcjIuZ2FtZWJvYXJkLnNoaXBMaXN0Lmxlbmd0aCA9PT0gNSAmJiBwbGF5ZXIyLmdhbWVib2FyZC5zaGlwTGlzdC5sZW5ndGggPT09IDUpIHsgXHJcbiAgICAvL3BsYXllcjJfc2hpcHMuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIFN0YXJ0R2FtZSgpO1xyXG4gIH1cclxuICBlbHNlIHtcclxuICAgIHJlc2V0RE9NKCdwbGF5ZXIyJyk7XHJcbiAgICBhY3Rpb25faW5mby50ZXh0Q29udGVudCA9ICdQbGF5ZXIgMiwgcGxhY2UgZWFjaCBvbmUgb2YgeW91ciBwYXN0cmllcy4nO1xyXG4gICAgc3RhcnRfZ2FtZV9idXR0b24uZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgc3RhcnRfZ2FtZV9idXR0b24uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ2J1dHRvbmZhY2UnO1xyXG4gICAgc3RhcnRfZ2FtZV9idXR0b24udGV4dENvbnRlbnQgPSAnU3RhcnQgZ2FtZSc7XHJcbiAgICBjaGFuZ2VQbGF5ZXJQbGFjZW1lbnQoKTtcclxuICB9XHJcbn0pO1xyXG5cclxuLy8gRE9NIG1hbmlwdWxhdGlvbiBmdW5jdGlvbnNcclxuZnVuY3Rpb24gcmVzZXRET00gKHBsYXllciA9ICdwbGF5ZXIxJykge1xyXG4gIGNvbnN0IHNoaXBfbGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYCMke3BsYXllcn0tc2hpcHMgbGlgKTtcclxuICBjb25zdCBvcmllbnRhdGlvbl9idXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgIyR7cGxheWVyfS1zaGlwcyBpbWdgKTtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBfbGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgc2hpcF9saXN0W2ldLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XHJcbiAgICBzaGlwX2xpc3RbaV0uc3R5bGUuY29sb3IgPSAnYmxhY2snO1xyXG4gICAgc2hpcF9saXN0W2ldLnN0eWxlLnRleHREZWNvcmF0aW9uID0gJ25vbmUnO1xyXG4gIH1cclxuICBmb3IgKGxldCBpID0gMDsgaSA8IG9yaWVudGF0aW9uX2J1dHRvbnMubGVuZ3RoOyBpKyspIHtcclxuICAgIG9yaWVudGF0aW9uX2J1dHRvbnNbaV0uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgfVxyXG4gIGlmIChwbGF5ZXIgPT09ICdwbGF5ZXIxJykge1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYXllcjItc2hpcHMnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gUmVzdG9yZVNoaXBzTGlzdCAoKSB7XHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmFjdGlvbi1kZXNjcmlwdG9yJykuZm9yRWFjaChlbCA9PiB7XHJcbiAgICBlbC50ZXh0Q29udGVudCA9ICdZb3VyIG1lbnU6JztcclxuICB9KTtcclxuICBwbGF5ZXIxX3NoaXBzLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gIGNvbnN0IHAxU2hpcExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjcGxheWVyMS1zaGlwcyBsaScpO1xyXG4gIHAxU2hpcExpc3QuZm9yRWFjaChlbCA9PiB7XHJcbiAgICBlbC5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xyXG4gIH0pO1xyXG4gIHBsYXllcjJfc2hpcHMuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgY29uc3QgcDJTaGlwTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNwbGF5ZXIyLXNoaXBzIGxpJyk7XHJcbiAgcDJTaGlwTGlzdC5mb3JFYWNoKGVsID0+IHtcclxuICAgIGVsLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XHJcbiAgfSk7XHJcbiAgaWYgKGdhbWVNb2RlID09PSAnY29tJykge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmhvcicpLmZvckVhY2goZWwgPT4ge1xyXG4gICAgICBlbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgfSk7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudmVyJykuZm9yRWFjaChlbCA9PiB7XHJcbiAgICAgIGVsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNoYW5nZVBsYXllclBsYWNlbWVudCAoKSB7XHJcbiAgaWYgKHBsYXllcjEuZ2FtZWJvYXJkLnNoaXBMaXN0Lmxlbmd0aCAhPT0gNSkge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yICgnUGxheWVyIDEgbXVzdCBmaXJzdCBwbGFjZSBhbGwgaGlzL2hlciBwYXN0cmllcy4nKTtcclxuICB9IGVsc2Uge1xyXG4gICAgcGxheWVyMV9zaGlwcy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgcDFDZWxscyA9IFBvcHVsYXRlUDEoJ3B1YmxpY0JvYXJkJyk7XHJcbiAgICBQbGF5ZXIyUGxhY2VTaGlwcygpO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gSW5pdGlhbGl6ZUdhbWUocDFuYW1lLCBwMm5hbWUsIG1vZGUpIHtcclxuICBjdXJyZW50UGxheWVyID0gJ3BsYXllcjEnO1xyXG4gIGdhbWVNb2RlID0gbW9kZTtcclxuICBhbGxTaGlwc1BsYWNlZCA9IGZhbHNlO1xyXG4gIHBsYXllcjEgPSBQbGF5ZXIocDFuYW1lKTtcclxuICBwbGF5ZXIyID0gUGxheWVyKHAybmFtZSk7XHJcbiAgcDFDZWxscyA9IFBvcHVsYXRlUDEoKTtcclxuICBwMkNlbGxzID0gUG9wdWxhdGVQMigncHVibGljQm9hcmQnKTtcclxufVxyXG5cclxuZnVuY3Rpb24gQ29tcHV0ZXJQbGFjZVNoaXBzICgpIHtcclxuICBwbGF5ZXIyLmdhbWVib2FyZC5jb21wdXRlclBsYWNlU2hpcCg1LCAnQ2FycmllcicpO1xyXG4gIHBsYXllcjIuZ2FtZWJvYXJkLmNvbXB1dGVyUGxhY2VTaGlwKDQsICdCYXR0bGVzaGlwJyk7XHJcbiAgcGxheWVyMi5nYW1lYm9hcmQuY29tcHV0ZXJQbGFjZVNoaXAoMywgJ0NydWlzZXInKTtcclxuICBwbGF5ZXIyLmdhbWVib2FyZC5jb21wdXRlclBsYWNlU2hpcCgzLCAnU3VibWFyaW5lJyk7XHJcbiAgcGxheWVyMi5nYW1lYm9hcmQuY29tcHV0ZXJQbGFjZVNoaXAoMiwgJ0Rlc3Ryb3llcicpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBwbGFjZW1lbnRQaGFzZSAoKSB7XHJcbiAgaWYgKGdhbWVNb2RlID09PSAnY29tJykge1xyXG4gICAgQ29tcHV0ZXJQbGFjZVNoaXBzKCk7XHJcbiAgICBQbGF5ZXIxUGxhY2VTaGlwcygpO1xyXG4gICAgcGxheWVyMl9zaGlwcy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBQbGF5ZXIxUGxhY2VTaGlwcygpO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gUGxheWVyMVBsYWNlU2hpcHMgKCkge1xyXG4gIHBsYXllcjFfc2hpcHMuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgY29uc3QgcDFDYXJyaWVySG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnAxLWNhcnJpZXIgLmhvcicpO1xyXG4gIGNvbnN0IHAxQ2FycmllclZlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wMS1jYXJyaWVyIC52ZXInKTtcclxuICBwMUNhcnJpZXJIb3IuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBBY3RpdmF0ZVBsYWNlbWVudChwbGF5ZXIxLCBwMUNlbGxzLCA1LCAnQ2FycmllcicsICcucDEtY2FycmllcicpKTtcclxuICBwMUNhcnJpZXJWZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBBY3RpdmF0ZVBsYWNlbWVudChwbGF5ZXIxLCBwMUNlbGxzLCA1LCAnQ2FycmllcicsICcucDEtY2FycmllcicsICd2ZXInKSk7XHJcbiAgY29uc3QgcDFCYXR0bGVzaGlwSG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnAxLWJhdHRsZXNoaXAgLmhvcicpO1xyXG4gIGNvbnN0IHAxQmF0dGxlc2hpcFZlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wMS1iYXR0bGVzaGlwIC52ZXInKTtcclxuICBwMUJhdHRsZXNoaXBIb3IuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBBY3RpdmF0ZVBsYWNlbWVudChwbGF5ZXIxLCBwMUNlbGxzLCA0LCAnQmF0dGxlc2hpcCcsICcucDEtYmF0dGxlc2hpcCcpKTtcclxuICBwMUJhdHRsZXNoaXBWZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBBY3RpdmF0ZVBsYWNlbWVudChwbGF5ZXIxLCBwMUNlbGxzLCA0LCAnQmF0dGxlc2hpcCcsICcucDEtYmF0dGxlc2hpcCcsICd2ZXInKSk7XHJcbiAgY29uc3QgcDFDcnVpc2VySG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnAxLWNydWlzZXIgLmhvcicpO1xyXG4gIGNvbnN0IHAxQ3J1aXNlclZlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wMS1jcnVpc2VyIC52ZXInKTtcclxuICBwMUNydWlzZXJIb3IuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBBY3RpdmF0ZVBsYWNlbWVudChwbGF5ZXIxLCBwMUNlbGxzLCAzLCAnQ3J1aXNlcicsICcucDEtY3J1aXNlcicpKTtcclxuICBwMUNydWlzZXJWZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBBY3RpdmF0ZVBsYWNlbWVudChwbGF5ZXIxLCBwMUNlbGxzLCAzLCAnQ3J1aXNlcicsICcucDEtY3J1aXNlcicsICd2ZXInKSk7XHJcbiAgY29uc3QgcDFTdWJtYXJpbmVIb3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucDEtc3VibWFyaW5lIC5ob3InKTtcclxuICBjb25zdCBwMVN1Ym1hcmluZVZlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wMS1zdWJtYXJpbmUgLnZlcicpO1xyXG4gIHAxU3VibWFyaW5lSG9yLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gQWN0aXZhdGVQbGFjZW1lbnQocGxheWVyMSwgcDFDZWxscywgMywgJ1N1Ym1hcmluZScsICcucDEtc3VibWFyaW5lJykpO1xyXG4gIHAxU3VibWFyaW5lVmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gQWN0aXZhdGVQbGFjZW1lbnQocGxheWVyMSwgcDFDZWxscywgMywgJ1N1Ym1hcmluZScsICcucDEtc3VibWFyaW5lJywgJ3ZlcicpKTtcclxuICBjb25zdCBwMURlc3Ryb3llckhvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wMS1kZXN0cm95ZXIgLmhvcicpO1xyXG4gIGNvbnN0IHAxRGVzdHJveWVyVmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnAxLWRlc3Ryb3llciAudmVyJyk7XHJcbiAgcDFEZXN0cm95ZXJIb3IuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBBY3RpdmF0ZVBsYWNlbWVudChwbGF5ZXIxLCBwMUNlbGxzLCAyLCAnRGVzdHJveWVyJywgJy5wMS1kZXN0cm95ZXInKSk7XHJcbiAgcDFEZXN0cm95ZXJWZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBBY3RpdmF0ZVBsYWNlbWVudChwbGF5ZXIxLCBwMUNlbGxzLCAyLCAnRGVzdHJveWVyJywgJy5wMS1kZXN0cm95ZXInLCAndmVyJykpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBQbGF5ZXIyUGxhY2VTaGlwcyAoKSB7XHJcbiAgcGxheWVyMl9zaGlwcy5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICBjb25zdCBwMkNhcnJpZXJIb3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucDItY2FycmllciAuaG9yJyk7XHJcbiAgY29uc3QgcDJDYXJyaWVyVmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnAyLWNhcnJpZXIgLnZlcicpO1xyXG4gIHAyQ2Fycmllckhvci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IEFjdGl2YXRlUGxhY2VtZW50KHBsYXllcjIsIHAyQ2VsbHMsIDUsICdDYXJyaWVyJywgJy5wMi1jYXJyaWVyJykpO1xyXG4gIHAyQ2FycmllclZlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IEFjdGl2YXRlUGxhY2VtZW50KHBsYXllcjIsIHAyQ2VsbHMsIDUsICdDYXJyaWVyJywgJy5wMi1jYXJyaWVyJywgJ3ZlcicpKTtcclxuICBjb25zdCBwMkJhdHRsZXNoaXBIb3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucDItYmF0dGxlc2hpcCAuaG9yJyk7XHJcbiAgY29uc3QgcDJCYXR0bGVzaGlwVmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnAyLWJhdHRsZXNoaXAgLnZlcicpO1xyXG4gIHAyQmF0dGxlc2hpcEhvci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IEFjdGl2YXRlUGxhY2VtZW50KHBsYXllcjIsIHAyQ2VsbHMsIDQsICdCYXR0bGVzaGlwJywgJy5wMi1iYXR0bGVzaGlwJykpO1xyXG4gIHAyQmF0dGxlc2hpcFZlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IEFjdGl2YXRlUGxhY2VtZW50KHBsYXllcjIsIHAyQ2VsbHMsIDQsICdCYXR0bGVzaGlwJywgJy5wMi1iYXR0bGVzaGlwJywgJ3ZlcicpKTtcclxuICBjb25zdCBwMkNydWlzZXJIb3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucDItY3J1aXNlciAuaG9yJyk7XHJcbiAgY29uc3QgcDJDcnVpc2VyVmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnAyLWNydWlzZXIgLnZlcicpO1xyXG4gIHAyQ3J1aXNlckhvci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IEFjdGl2YXRlUGxhY2VtZW50KHBsYXllcjIsIHAyQ2VsbHMsIDMsICdDcnVpc2VyJywgJy5wMi1jcnVpc2VyJykpO1xyXG4gIHAyQ3J1aXNlclZlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IEFjdGl2YXRlUGxhY2VtZW50KHBsYXllcjIsIHAyQ2VsbHMsIDMsICdDcnVpc2VyJywgJy5wMi1jcnVpc2VyJywgJ3ZlcicpKTtcclxuICBjb25zdCBwMlN1Ym1hcmluZUhvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wMi1zdWJtYXJpbmUgLmhvcicpO1xyXG4gIGNvbnN0IHAyU3VibWFyaW5lVmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnAyLXN1Ym1hcmluZSAudmVyJyk7XHJcbiAgcDJTdWJtYXJpbmVIb3IuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBBY3RpdmF0ZVBsYWNlbWVudChwbGF5ZXIyLCBwMkNlbGxzLCAzLCAnU3VibWFyaW5lJywgJy5wMi1zdWJtYXJpbmUnKSk7XHJcbiAgcDJTdWJtYXJpbmVWZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBBY3RpdmF0ZVBsYWNlbWVudChwbGF5ZXIyLCBwMkNlbGxzLCAzLCAnU3VibWFyaW5lJywgJy5wMi1zdWJtYXJpbmUnLCAndmVyJykpO1xyXG4gIGNvbnN0IHAyRGVzdHJveWVySG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnAyLWRlc3Ryb3llciAuaG9yJyk7XHJcbiAgY29uc3QgcDJEZXN0cm95ZXJWZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucDItZGVzdHJveWVyIC52ZXInKTtcclxuICBwMkRlc3Ryb3llckhvci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IEFjdGl2YXRlUGxhY2VtZW50KHBsYXllcjIsIHAyQ2VsbHMsIDIsICdEZXN0cm95ZXInLCAnLnAyLWRlc3Ryb3llcicpKTtcclxuICBwMkRlc3Ryb3llclZlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IEFjdGl2YXRlUGxhY2VtZW50KHBsYXllcjIsIHAyQ2VsbHMsIDIsICdEZXN0cm95ZXInLCAnLnAyLWRlc3Ryb3llcicsICd2ZXInKSk7XHJcbn1cclxuXHJcbi8vIEFjdGl2YXRlIGNsaWNrIG9uIG93biBib2FyZCB0byBwbGFjZSBzaGlwc1xyXG5mdW5jdGlvbiBBY3RpdmF0ZVBsYWNlbWVudCAocGxheWVyLCBjZWxsc0Fyciwgc2l6ZSwgc2hpcE5hbWUsIGRvbUVsZW1lbnQsIG9yaWVudGF0aW9uID0gJ2hvcicpIHtcclxuICBwbGFjZVNoaXBIaWdobGlnaHQocGxheWVyLCBjZWxsc0Fyciwgc2l6ZSwgb3JpZW50YXRpb24pO1xyXG4gIHBsYWNlU2hpcENsaWNrKHBsYXllciwgY2VsbHNBcnIsIHNpemUsIHNoaXBOYW1lLCBkb21FbGVtZW50LCBvcmllbnRhdGlvbik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHBsYWNlU2hpcEhpZ2hsaWdodCAocGxheWVyLCBjZWxsc0Fyciwgc2l6ZSwgb3JpZW50YXRpb24gPSAnaG9yJykge1xyXG4gIGxldCBjb2xvcmVkQ2VsbDtcclxuICBjZWxsc0Fyci5mb3JFYWNoKGVsID0+IHtcclxuICAgIGlmIChvcmllbnRhdGlvbiA9PT0gJ2hvcicpIHtcclxuICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgKCkgPT4geyAgICBcclxuICAgICAgICBjb25zdCBzdGFydGluZ1kgPSBlbC5jbGFzc05hbWUuc2xpY2UoMCw3KTtcclxuICAgICAgICBjb25zdCBzdGFydGluZ1ggPSArZWwuY2xhc3NOYW1lLnNsaWNlKDcsOCk7XHJcbiAgICAgICAgaWYgKHBsYXllci5nYW1lYm9hcmQuaXNWYWxpZChzaXplLCBbK3N0YXJ0aW5nWS5zbGljZSgtMSksIHN0YXJ0aW5nWF0pKSB7XHJcbiAgICAgICAgICBmb3IgKGxldCBpID0gc3RhcnRpbmdYOyBpIDwgKCtzdGFydGluZ1ggKyBzaXplKTsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbG9yZWRDZWxsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShgJHtzdGFydGluZ1l9JHtpfWApWzBdO1xyXG4gICAgICAgICAgICBjb2xvcmVkQ2VsbC5jbGFzc0xpc3QuYWRkKCdwbGFjaW5nLXNoaXAtY2VsbCcpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBjZWxsc0Fyci5mb3JFYWNoKGVsID0+IGVsLmNsYXNzTGlzdC5yZW1vdmUoJ3BsYWNpbmctc2hpcC1jZWxsJykpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGlmIChzdGFydGluZ1ggKyBzaXplID4gMTApIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IHN0YXJ0aW5nWDsgaSA8IDEwOyBpKyspIHtcclxuICAgICAgICAgICAgICBjb2xvcmVkQ2VsbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoYCR7c3RhcnRpbmdZfSR7aX1gKVswXTtcclxuICAgICAgICAgICAgICBjb2xvcmVkQ2VsbC5jbGFzc0xpc3QuYWRkKCdwbGFjaW5nLWVycm9yJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSBzdGFydGluZ1g7IGkgPCBzdGFydGluZ1ggKyBzaXplOyBpKyspIHtcclxuICAgICAgICAgICAgICBjb2xvcmVkQ2VsbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoYCR7c3RhcnRpbmdZfSR7aX1gKVswXTtcclxuICAgICAgICAgICAgICBjb2xvcmVkQ2VsbC5jbGFzc0xpc3QuYWRkKCdwbGFjaW5nLWVycm9yJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBjZWxsc0Fyci5mb3JFYWNoKGVsID0+IGVsLmNsYXNzTGlzdC5yZW1vdmUoJ3BsYWNpbmctZXJyb3InKSk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgKGUpID0+IHsgICAgXHJcbiAgICAgICAgY29uc3QgWWNvb3JkID0gK2VsLmNsYXNzTmFtZS5zbGljZSg2LDcpO1xyXG4gICAgICAgIGNvbnN0IHN0YXJ0aW5nWCA9ICtlbC5jbGFzc05hbWUuc2xpY2UoNyw4KTtcclxuICAgICAgICBjb25zdCBjZWxsTmFtZSA9IGVsLmNsYXNzTmFtZS5zbGljZSgwLDYpO1xyXG4gICAgICAgIGlmIChwbGF5ZXIuZ2FtZWJvYXJkLmlzVmFsaWQoc2l6ZSwgW1ljb29yZCwgc3RhcnRpbmdYXSwgJ3ZlcicpKSB7XHJcbiAgICAgICAgICBmb3IgKGxldCBpID0gWWNvb3JkOyBpIDwgKFljb29yZCArIHNpemUpOyBpKyspIHtcclxuICAgICAgICAgICAgY29sb3JlZENlbGwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGAke2NlbGxOYW1lfSR7aX0ke3N0YXJ0aW5nWH1gKVswXTtcclxuICAgICAgICAgICAgY29sb3JlZENlbGwuY2xhc3NMaXN0LmFkZCgncGxhY2luZy1zaGlwLWNlbGwnKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgKGUpID0+IHtcclxuICAgICAgICAgICAgY2VsbHNBcnIuZm9yRWFjaChlbCA9PiBlbC5jbGFzc0xpc3QucmVtb3ZlKCdwbGFjaW5nLXNoaXAtY2VsbCcpKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBpZiAoWWNvb3JkICsgc2l6ZSA+IDEwKXtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IFljb29yZDsgaSA8IDEwOyBpKyspIHtcclxuICAgICAgICAgICAgICBjb2xvcmVkQ2VsbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoYCR7Y2VsbE5hbWV9JHtpfSR7c3RhcnRpbmdYfWApWzBdO1xyXG4gICAgICAgICAgICAgIGNvbG9yZWRDZWxsLmNsYXNzTGlzdC5hZGQoJ3BsYWNpbmctZXJyb3InKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IFljb29yZDsgaSA8IFljb29yZCArIHNpemU7IGkrKykge1xyXG4gICAgICAgICAgICAgIGNvbG9yZWRDZWxsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShgJHtjZWxsTmFtZX0ke2l9JHtzdGFydGluZ1h9YClbMF07XHJcbiAgICAgICAgICAgICAgY29sb3JlZENlbGwuY2xhc3NMaXN0LmFkZCgncGxhY2luZy1lcnJvcicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIGNlbGxzQXJyLmZvckVhY2goZWwgPT4gZWwuY2xhc3NMaXN0LnJlbW92ZSgncGxhY2luZy1lcnJvcicpKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHBsYWNlU2hpcENsaWNrIChwbGF5ZXIsIGNlbGxzQXJyLCBzaXplLCBzaGlwTmFtZSwgZG9tRWxlbWVudCwgb3JpZW50YXRpb24gPSAnaG9yJykge1xyXG4gIGNlbGxzQXJyLmZvckVhY2goZWwgPT4ge1xyXG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHRhcmdldENlbGwgPSAoZWwuY2xhc3NOYW1lLnNsaWNlKDYsIDgpKS5zcGxpdCgnJyk7XHJcbiAgICAgIGNvbnN0IHRhcmdldENvb3JkaW5hdGVzID0gWyt0YXJnZXRDZWxsWzBdLCArdGFyZ2V0Q2VsbFsxXV07XHJcbiAgICAgIHBsYXllci5nYW1lYm9hcmQucGxhY2VTaGlwKHNpemUsIHRhcmdldENvb3JkaW5hdGVzLCBzaGlwTmFtZSwgb3JpZW50YXRpb24pO1xyXG4gICAgICBpZiAocGxheWVyID09PSBwbGF5ZXIxKSB7XHJcbiAgICAgICAgcDFDZWxscyA9IFBvcHVsYXRlUDEoKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBwMkNlbGxzID0gUG9wdWxhdGVQMigncHJpdmF0ZUJvYXJkJyk7XHJcbiAgICAgIH1cclxuICAgICAgY29uc3Qgc2hpcExpc3ROYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihkb21FbGVtZW50KTtcclxuICAgICAgLy9zaGlwTGlzdE5hbWUuc3R5bGUuY29sb3IgPSAnZ3JleSc7XHJcbiAgICAgIHNoaXBMaXN0TmFtZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICBjb25zdCBob3JCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAke2RvbUVsZW1lbnR9ICAuaG9yYCk7XHJcbiAgICAgIGNvbnN0IHZlckJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCR7ZG9tRWxlbWVudH0gIC52ZXJgKTtcclxuICAgICAgaG9yQnV0dG9uLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgIHZlckJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICB1cGRhdGVTdGFydEJ1dHRvbigpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZVN0YXJ0QnV0dG9uICgpIHtcclxuICBpZiAoZ2FtZU1vZGUgPT09ICdjb20nICYmIHBsYXllcjEuZ2FtZWJvYXJkLnNoaXBMaXN0Lmxlbmd0aCA9PT0gNSkge1xyXG4gICAgc3RhcnRfZ2FtZV9idXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgIHN0YXJ0X2dhbWVfYnV0dG9uLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjODBjMTgwJztcclxuICB9XHJcbiAgaWYgKGdhbWVNb2RlID09PSAncHZwJyAmJiBwbGF5ZXIxLmdhbWVib2FyZC5zaGlwTGlzdC5sZW5ndGggPT09IDUgJiYgYWxsU2hpcHNQbGFjZWQgPT09IGZhbHNlKSB7XHJcbiAgICBzdGFydF9nYW1lX2J1dHRvbi5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgc3RhcnRfZ2FtZV9idXR0b24uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNmZmU5OGEnO1xyXG4gICAgYWxsU2hpcHNQbGFjZWQgPSB0cnVlO1xyXG4gIH0gZWxzZSBpZiAoZ2FtZU1vZGUgPT09ICdwdnAnICYmIHBsYXllcjEuZ2FtZWJvYXJkLnNoaXBMaXN0Lmxlbmd0aCA9PT0gNSAmJiBwbGF5ZXIyLmdhbWVib2FyZC5zaGlwTGlzdC5sZW5ndGggPT09IDUpIHtcclxuICAgIHN0YXJ0X2dhbWVfYnV0dG9uLmRpc2FibGVkID0gIGZhbHNlO1xyXG4gICAgc3RhcnRfZ2FtZV9idXR0b24udGV4dENvbnRlbnQgPSAnU3RhcnQgZ2FtZSc7XHJcbiAgICBzdGFydF9nYW1lX2J1dHRvbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnIzgwYzE4MCc7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuXHJcbi8vIEdhbWUgZmxvdyBmdW5jdGlvbnNcclxuZnVuY3Rpb24gU3RhcnRHYW1lICgpIHtcclxuICAvLyBDaGVjayBpZiBhbGwgc2hpcHMgaGF2ZSBiZWVuIHBsYWNlZCBiZWZvcmUgbGF1bmNoaW5nIHRoZSBnYW1lXHJcbiAgaWYgKHBsYXllcjEuZ2FtZWJvYXJkLnNoaXBMaXN0Lmxlbmd0aCAhPT0gNSkge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKCdZb3UgbXVzdCBzdGlsbCBwbGFjZSBwYXN0cmllcyEnKTtcclxuICB9IGVsc2Uge1xyXG4gICAgZ2FtZV9zdGFydF9zb3VuZC5wbGF5KCk7XHJcbiAgICBzdGFydF9nYW1lX2J1dHRvbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgc3RhcnRfZ2FtZV9idXR0b24uZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgc3RhcnRfZ2FtZV9idXR0b24uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ2J1dHRvbmZhY2UnO1xyXG4gICAgUmVzdG9yZVNoaXBzTGlzdCgpO1xyXG4gICAgSW5pdGlhbGl6ZVR1cm4oY3VycmVudFBsYXllcik7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBJbml0aWFsaXplVHVybiAoY3VycmVudFBsYXllcikge1xyXG4gIFVwZGF0ZUluZm9EaXNwbGF5KCk7XHJcbiAgaWYgKGdhbWVNb2RlID09PSAnY29tJykge1xyXG4gICAgcDFDZWxscyA9IFBvcHVsYXRlUDEoKTtcclxuICAgIHAyQ2VsbHMgPSBQb3B1bGF0ZVAyKCk7XHJcbiAgICBpZiAoY3VycmVudFBsYXllciA9PT0gJ3BsYXllcjEnKSB7XHJcbiAgICAgIHAxQ2VsbHMgPSBQb3B1bGF0ZVAxKCdwcml2YXRlQm9hcmQnKTtcclxuICAgICAgcDJDZWxscyA9IFBvcHVsYXRlUDIoJ3B1YmxpY0JvYXJkJyk7XHJcbiAgICAgIEFjdGl2YXRlQXR0YWNrT24ocDJDZWxscywgcGxheWVyMSwgcGxheWVyMik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb21wdXRlckF0dGFjaygpOyBcclxuICAgIH1cclxuICB9IGVsc2Uge1xyXG4gICAgUGFzc1R1cm5Nb2RhbCgpO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Bhc3MtdHVybl9jb25maXJtLWJ1dHRvbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICBDbG9zZU1vZGFsKCdwYXNzLXR1cm5fbW9kYWwnKTtcclxuICAgICAgaWYgKGN1cnJlbnRQbGF5ZXIgPT09ICdwbGF5ZXIxJykge1xyXG4gICAgICAgIHAxQ2VsbHMgPSBQb3B1bGF0ZVAxKCdwcml2YXRlQm9hcmQnKTtcclxuICAgICAgICBwMkNlbGxzID0gUG9wdWxhdGVQMigncHVibGljQm9hcmQnKTtcclxuICAgICAgICBBY3RpdmF0ZUF0dGFja09uKHAyQ2VsbHMsIHBsYXllcjEsIHBsYXllcjIpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHAxQ2VsbHMgPSBQb3B1bGF0ZVAxKCdwdWJsaWNCb2FyZCcpO1xyXG4gICAgICAgIHAyQ2VsbHMgPSBQb3B1bGF0ZVAyKCdwcml2YXRlQm9hcmQnKTtcclxuICAgICAgICBBY3RpdmF0ZUF0dGFja09uKHAxQ2VsbHMsIHBsYXllcjIsIHBsYXllcjEpOyBcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBQb3B1bGF0ZSBwbGF5ZXIgMSBib2FyZFxyXG5mdW5jdGlvbiBQb3B1bGF0ZVAxIChib2FyZCA9ICdwcml2YXRlQm9hcmQnKSB7XHJcbiAgY29uc3QgdGFyZ2V0Qm9hcmQgPSBwbGF5ZXIxLmdhbWVib2FyZFtib2FyZF07XHJcbiAgcGxheWVyMV9ib2FyZC50ZXh0Q29udGVudCA9ICcnO1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xyXG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XHJcbiAgICAgIGxldCBjZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgIGNlbGwudGV4dENvbnRlbnQgPSB0YXJnZXRCb2FyZFtpXVtqXTtcclxuICAgICAgaWYgKGNlbGwudGV4dENvbnRlbnQgPT09ICdYJykge1xyXG4gICAgICAgIGNlbGwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNjODQ3NzEnO1xyXG4gICAgICAgIGNlbGwuc3R5bGUuY29sb3IgPSAnI2ZmZmZmZic7XHJcbiAgICAgIH0gZWxzZSBpZiAoY2VsbC50ZXh0Q29udGVudCA9PT0gJ34nKSB7XHJcbiAgICAgICAgY2VsbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAncmdiYSgxOTIsIDE4NiwgMTg4LCAwLjgpJztcclxuICAgICAgICBjZWxsLnN0eWxlLmNvbG9yID0gJyNmZmZmZmYnO1xyXG4gICAgICB9IGVsc2UgaWYgKGNlbGwudGV4dENvbnRlbnQpIHtcclxuICAgICAgICBjZWxsLnRleHRDb250ZW50ID0gYOKWomA7XHJcbiAgICAgICAgY2VsbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI2ZmZTk4YSc7XHJcbiAgICAgICAgY2VsbC5zdHlsZS5jb2xvciA9ICcjNzgyYjQ0JztcclxuICAgICAgfVxyXG4gICAgICBjZWxsLmNsYXNzTmFtZSA9IGBjZWxsMSAke2l9JHtqfWA7XHJcbiAgICAgIHBsYXllcjFfYm9hcmQuYXBwZW5kQ2hpbGQoY2VsbCk7XHJcbiAgICB9ICBcclxuICB9XHJcbiAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jZWxsMScpO1xyXG59XHJcblxyXG4vLyBQb3B1bGF0ZSBwbGF5ZXIgMiAoY29tcHV0ZXIpIGJvYXJkLCB1c2luZyB0aGUgcHVibGljQm9hcmQga2V5IHRvIGtlZXAgdW5kaXNjb3ZlcmVkIHNxdWFyZXMgZW1wdHlcclxuZnVuY3Rpb24gUG9wdWxhdGVQMiAoYm9hcmQgPSAncHVibGljQm9hcmQnKSB7XHJcbiAgY29uc3QgdGFyZ2V0Qm9hcmQgPSBwbGF5ZXIyLmdhbWVib2FyZFtib2FyZF07XHJcbiAgcGxheWVyMl9ib2FyZC50ZXh0Q29udGVudCA9ICcnO1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xyXG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XHJcbiAgICAgIGxldCBjZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgIGNlbGwudGV4dENvbnRlbnQgPSB0YXJnZXRCb2FyZFtpXVtqXTtcclxuICAgICAgaWYgKGNlbGwudGV4dENvbnRlbnQgPT09ICdYJykge1xyXG4gICAgICAgIGNlbGwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNjODQ3NzEnO1xyXG4gICAgICAgIGNlbGwuc3R5bGUuY29sb3IgPSAnI2ZmZmZmZic7XHJcbiAgICAgIH0gZWxzZSBpZiAoY2VsbC50ZXh0Q29udGVudCA9PT0gJ34nKSB7XHJcbiAgICAgICAgY2VsbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAncmdiYSgxOTIsIDE4NiwgMTg4LCAwLjgpJztcclxuICAgICAgICBjZWxsLnN0eWxlLmNvbG9yID0gJyNmZmZmZmYnO1xyXG4gICAgICB9IGVsc2UgaWYgKGNlbGwudGV4dENvbnRlbnQpIHtcclxuICAgICAgICBjZWxsLnRleHRDb250ZW50ID0gYOKWomA7XHJcbiAgICAgICAgY2VsbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI2ZmZTk4YSc7XHJcbiAgICAgICAgY2VsbC5zdHlsZS5jb2xvciA9ICcjNzgyYjQ0JztcclxuICAgICAgfVxyXG4gICAgICBjZWxsLmNsYXNzTmFtZSA9IGBjZWxsMiAke2l9JHtqfWA7XHJcbiAgICAgIHBsYXllcjJfYm9hcmQuYXBwZW5kQ2hpbGQoY2VsbCk7XHJcbiAgICB9ICBcclxuICB9XHJcbiAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jZWxsMicpO1xyXG59XHJcblxyXG4vLyBBY3RpdmF0ZSBhdHRhY2sgb24gb25lIHBsYXllciBib2FyZCBhdCBhIHRpbWUsIHdvcmtzIGZvciBQVlBcclxuZnVuY3Rpb24gQWN0aXZhdGVBdHRhY2tPbiAoY2VsbHNBcnIsIGF0dGFja2VyLCBkZWZlbmRlcikge1xyXG4gIGNlbGxzQXJyLmZvckVhY2goZWwgPT4ge1xyXG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICBjb25zdCB0YXJnZXRDZWxsID0gKGVsLmNsYXNzTmFtZS5zbGljZSgtMikpLnNwbGl0KCcnKTtcclxuICAgICAgbGV0IGF0dGFja2VkU2hpcCA9IGRlZmVuZGVyLmdhbWVib2FyZC5wcml2YXRlQm9hcmRbdGFyZ2V0Q2VsbFswXV1bdGFyZ2V0Q2VsbFsxXV07XHJcbiAgICAgIGF0dGFja2VyLmF0dGFjayhkZWZlbmRlciwgdGFyZ2V0Q2VsbFswXSwgdGFyZ2V0Q2VsbFsxXSk7XHJcbiAgICAgIC8vIFJldmVhbCBzcXVhcmUgd2hlbiBhdHRhY2tlZFxyXG4gICAgICBpZiAoY3VycmVudFBsYXllciA9PT0gJ3BsYXllcjEnKSB7XHJcbiAgICAgICAgaWYgKGRlZmVuZGVyLmdhbWVib2FyZC5wcml2YXRlQm9hcmRbdGFyZ2V0Q2VsbFswXV1bdGFyZ2V0Q2VsbFsxXV0gPT09ICdYJykge1xyXG4gICAgICAgICAgZGVmZW5kZXIuZ2FtZWJvYXJkLnB1YmxpY0JvYXJkW3RhcmdldENlbGxbMF1dW3RhcmdldENlbGxbMV1dID0gJ1gnO1xyXG4gICAgICAgICAgaWYgKHN1bmtDaGVjayhwbGF5ZXIyLCBhdHRhY2tlZFNoaXApKSB7XHJcbiAgICAgICAgICAgIFVwZGF0ZVNoaXBMaXN0KCdwMicsIGF0dGFja2VkU2hpcCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGRlZmVuZGVyLmdhbWVib2FyZC5wdWJsaWNCb2FyZFt0YXJnZXRDZWxsWzBdXVt0YXJnZXRDZWxsWzFdXSA9ICd+JztcclxuICAgICAgICB9XHJcbiAgICAgICAgUG9wdWxhdGVQMigpO1xyXG4gICAgICAgIGN1cnJlbnRQbGF5ZXIgPSAncGxheWVyMic7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaWYgKGRlZmVuZGVyLmdhbWVib2FyZC5wcml2YXRlQm9hcmRbdGFyZ2V0Q2VsbFswXV1bdGFyZ2V0Q2VsbFsxXV0gPT09ICdYJykge1xyXG4gICAgICAgICAgZGVmZW5kZXIuZ2FtZWJvYXJkLnB1YmxpY0JvYXJkW3RhcmdldENlbGxbMF1dW3RhcmdldENlbGxbMV1dID0gJ1gnO1xyXG4gICAgICAgICAgaWYgKHN1bmtDaGVjayhwbGF5ZXIxLCBhdHRhY2tlZFNoaXApKSB7XHJcbiAgICAgICAgICAgIFVwZGF0ZVNoaXBMaXN0KCdwMScsIGF0dGFja2VkU2hpcCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGRlZmVuZGVyLmdhbWVib2FyZC5wdWJsaWNCb2FyZFt0YXJnZXRDZWxsWzBdXVt0YXJnZXRDZWxsWzFdXSA9ICd+JztcclxuICAgICAgICB9XHJcbiAgICAgICAgUG9wdWxhdGVQMSgpO1xyXG4gICAgICAgIGN1cnJlbnRQbGF5ZXIgPSAncGxheWVyMSc7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKCF3aW5DaGVjaygpKSB7XHJcbiAgICAgICAgSW5pdGlhbGl6ZVR1cm4oY3VycmVudFBsYXllcik7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgR2FtZU92ZXJNb2RhbCgpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9KTtcclxufVxyXG5cclxuLy8gQ29tcHV0ZXIgYXR0YWNrXHJcbmZ1bmN0aW9uIGNvbXB1dGVyQXR0YWNrICgpIHtcclxuICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgIHBsYXllcjIuY29tcHV0ZXJBdHRhY2socGxheWVyMSk7XHJcbiAgICBpZiAoIXdpbkNoZWNrKCkpIHtcclxuICAgICAgY3VycmVudFBsYXllciA9ICdwbGF5ZXIxJztcclxuICAgICAgSW5pdGlhbGl6ZVR1cm4oY3VycmVudFBsYXllcik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBHYW1lT3Zlck1vZGFsKCk7XHJcbiAgICB9XHJcbiAgfSwgJzEwMDAnKTtcclxufVxyXG5cclxuLy8gQ2hlY2sgZm9yIHN1bmsgc2hpcFxyXG5mdW5jdGlvbiBzdW5rQ2hlY2sgKHBsYXllciwgc2hpcE5hbWUpIHtcclxuICBjb25zdCB0YXJnZXRTaGlwID0gcGxheWVyLmdhbWVib2FyZC5zaGlwTGlzdC5maW5kKCh7IG5hbWUgfSkgPT4gbmFtZSA9PT0gc2hpcE5hbWUpO1xyXG4gIHJldHVybiB0YXJnZXRTaGlwLmlzU3VuaygpO1xyXG59XHJcblxyXG4vLyBDaGVjayB3aW4gY29uZGl0aW9uXHJcbmZ1bmN0aW9uIHdpbkNoZWNrICgpIHtcclxuICBpZiAocGxheWVyMS5nYW1lYm9hcmQuZ2V0U3RhdHVzKCkgfHwgcGxheWVyMi5nYW1lYm9hcmQuZ2V0U3RhdHVzKCkpIHtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gVXBkYXRlU2NvcmUgKHBsYXllcikge1xyXG4gIGlmIChwbGF5ZXIgPT09IHBsYXllcjEpIHtcclxuICAgIHBsYXllcnNTY29yZXNbMF0rKztcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGF5ZXIxLXNjb3JlJykudGV4dENvbnRlbnQgPSBgU2NvcmU6ICR7cGxheWVyc1Njb3Jlc1swXX1gO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBwbGF5ZXJzU2NvcmVzWzFdKys7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxheWVyMi1zY29yZScpLnRleHRDb250ZW50ID0gYFNjb3JlOiAke3BsYXllcnNTY29yZXNbMV19YDtcclxuICB9XHJcbn1cclxuXHJcbi8vIERpc3BsYXkgY29udHJvbGxlclxyXG5mdW5jdGlvbiBVcGRhdGVJbmZvRGlzcGxheSAoKSB7XHJcbiAgYWN0aW9uX2luZm8udGV4dENvbnRlbnQgPSBjdXJyZW50UGxheWVyID09PSAncGxheWVyMScgPyBgJHtwbGF5ZXIxLnBsYXllck5hbWV9J3MgdHVybmAgOiBgJHtwbGF5ZXIyLnBsYXllck5hbWV9J3MgdHVybmA7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFVwZGF0ZVNoaXBMaXN0IChwbGF5ZXIsIHNoaXApIHtcclxuICBjb25zdCBzaGlwTmFtZSA9IHNoaXAudG9Mb3dlckNhc2UoKTtcclxuICBsZXQgc2hpcExpc3RJdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7cGxheWVyfS0ke3NoaXBOYW1lfWApO1xyXG4gIHNoaXBMaXN0SXRlbS5zdHlsZS5jb2xvciA9ICcjYzg0NzcxJztcclxuICBzaGlwTGlzdEl0ZW0uc3R5bGUudGV4dERlY29yYXRpb24gPSAnbGluZS10aHJvdWdoJztcclxufVxyXG5cclxuLy8gU291bmQgY29udHJvbGxlclxyXG5mdW5jdGlvbiBzb3VuZEVmZmVjdCAoc3JjKSB7XHJcbiAgdGhpcy5zb3VuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhdWRpb1wiKTtcclxuICB0aGlzLnNvdW5kLnNyYyA9IHNyYztcclxuICB0aGlzLnNvdW5kLnNldEF0dHJpYnV0ZShcInByZWxvYWRcIiwgXCJhdXRvXCIpO1xyXG4gIHRoaXMuc291bmQuc2V0QXR0cmlidXRlKFwiY29udHJvbHNcIiwgXCJub25lXCIpO1xyXG4gIHRoaXMuc291bmQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5zb3VuZCk7XHJcbiAgdGhpcy5wbGF5ID0gZnVuY3Rpb24oKXtcclxuICAgIHRoaXMuc291bmQucGxheSgpO1xyXG4gIH07XHJcbiAgdGhpcy5zdG9wID0gZnVuY3Rpb24oKXtcclxuICAgIHRoaXMuc291bmQucGF1c2UoKTtcclxuICB9O1xyXG59XHJcblxyXG5jb25zdCBnYW1lX3N0YXJ0X3NvdW5kID0gbmV3IHNvdW5kRWZmZWN0KFwicmVxdWlyZSgnZGlzdC9zb3VuZHMvZ2FtZV9zdGFydC5tcDMnKVwiKTtcclxuLy9jb25zdCBnYW1lX3N0YXJ0X3NvdW5kID0gbmV3IHNvdW5kRWZmZWN0KCcuL3NvdW5kcy9nYW1lX3N0YXJ0Lm1wMycpO1xyXG5jb25zdCB0dXJuX2NoYW5nZV9zb3VuZCA9IG5ldyBzb3VuZEVmZmVjdCgnLi9zb3VuZHMvdHVybl9jaGFuZ2UubXAzJyk7XHJcbmNvbnN0IHZpY3Rvcnlfc291bmQgPSBuZXcgc291bmRFZmZlY3QoJy4vc291bmRzL3ZpY3RvcnkubXAzJyk7XHJcblxyXG5cclxuLy8gVGVzdCBidXR0b25zXHJcbi8qcGxheWVyMV9sb2cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgY29uc29sZS5sb2cocGxheWVyMS5nYW1lYm9hcmQpO1xyXG4gIHN1bmtDaGVjaygnQ2FycmllcicpO1xyXG59KTtcclxuXHJcbnBsYXllcjJfbG9nLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gIGNvbnNvbGUubG9nKHBsYXllcjIuZ2FtZWJvYXJkKTtcclxufSk7Ki9cclxuXHJcblxyXG4vLyBST0FETUFQXHJcbi8vIFJldGlyZXIgbWVzc2FnZXMgZCdlcnJldXJzIGRlIGxhIGNvbnNvbGVcclxuLy8gUmV0aXJlciBib3V0b25zIGRlIHRlc3RcclxuLy8gTmV0dG95YWdlIGR1IGNvZGUgOiBjb21tZW50YWlyZXMsIHZhcmlhYmxlcyBub24gdXRpbGlzw6llcywgcsOpb3JnYW5pc2F0aW9uIHNlbG9uIGxhIGZvbmN0aW9uIHJlbXBsaWVcclxuLy8gUkVBRE1FLm1kXHJcblxyXG4vLyBCVUdTXHJcbi8vIE1lc3NhZ2VzIGQnZXJyZXVyIMOgIGNoYXF1ZSBwbGFjZW1lbnQgZGUgbmF2aXJlIGxvcnNxdSdvbiByZWNvbW1lbmNlIHVuZSBwYXJ0aWVcclxuLy8gQnVnIGQnYWZmaWNoYWdlIGxvcnNxdSdvbiBjbGlxdWUgc3VyIHVuIGF1dHJlIG5hdmlyZSBhdmFudCBzYW5zIGF2b2lyIGNsaXF1w6kgYXUgcHLDqWFsYWJsZSBwb3VyIHBsYWNlciBsZSBwcmVtaWVyIDogcmVtb3ZlIGV2ZW50TGlzdGVuZXIgZW4gZMOpYnV0IGRlIGZvbmN0aW9uID9cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9