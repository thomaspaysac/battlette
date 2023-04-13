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
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n  box-sizing: border-box;\r\n  font-family: 'Poiret One', sans-serif; }\r\n\r\nhtml {\r\n  height: 100%; }\r\n\r\nbody {\r\n  margin: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  background: #782b44;\r\n  background: linear-gradient(0deg, #782b44, #c84771); }\r\n\r\n.background-image {\r\n  width: 100vw;\r\n  height: 100vh;\r\n  position: fixed;\r\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n  background-position: bottom 20% left 0;\r\n  z-index: -1;\r\n  filter: blur(4px) grayscale(30%); }\r\n\r\nheader {\r\n  width: 100%;\r\n  padding: 0 50px;\r\n  text-align: center;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center; }\r\n  header #logo {\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\r\n    background-size: contain;\r\n    background-repeat: no-repeat;\r\n    height: 150px;\r\n    width: 150px;\r\n    margin: 32px; }\r\n\r\nfooter {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  position: absolute;\r\n  bottom: 0;\r\n  width: 100%;\r\n  padding: 8px;\r\n  font-family: 'Open Sans', sans-serif;\r\n  background-color: rgba(34, 34, 34, 0.5);\r\n  color: #cccccc; }\r\n  footer a {\r\n    font-family: 'Open Sans', sans-serif;\r\n    color: #cccccc;\r\n    text-decoration: none; }\r\n    footer a:hover {\r\n      text-decoration: underline; }\r\n  footer .social-links {\r\n    font-family: 'Open Sans', sans-serif;\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 8px; }\r\n    footer .social-links a {\r\n      display: flex;\r\n      align-items: center;\r\n      gap: 8px; }\r\n    footer .social-links img {\r\n      width: 1rem; }\r\n\r\n#new-game_button,\r\n#pvp-new-game_button {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  width: 190px;\r\n  color: #eeeeee;\r\n  background-color: #d97e9c;\r\n  border: 4px double #555555; }\r\n  #new-game_button:hover,\r\n  #pvp-new-game_button:hover {\r\n    background-color: #c84771; }\r\n  #new-game_button:active,\r\n  #pvp-new-game_button:active {\r\n    transform: translateY(2px); }\r\n  #new-game_button img,\r\n  #pvp-new-game_button img {\r\n    height: 24px; }\r\n\r\n#start-game_button {\r\n  transition: background-color 500ms ease-out;\r\n  display: none; }\r\n  #start-game_button:active {\r\n    filter: brightness(85%);\r\n    transform: translateY(2px); }\r\n\r\n.info-container {\r\n  height: fit-content;\r\n  background-color: #e8e2e4;\r\n  display: flex;\r\n  padding: 16px;\r\n  margin: 0 32px;\r\n  gap: 32px;\r\n  border: 10px double #c84771;\r\n  border-radius: 7px; }\r\n  .info-container button {\r\n    cursor: pointer;\r\n    font-family: 'Open Sans', sans-serif;\r\n    font-size: 1rem;\r\n    padding: 8px;\r\n    border-radius: 5px; }\r\n\r\n.game-mode-buttons {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  gap: 25px;\r\n  margin-right: 18px; }\r\n\r\n.battle-info {\r\n  margin-left: 18px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  gap: 24px; }\r\n\r\n.action-info {\r\n  font-size: 1.5rem;\r\n  font-weight: 700; }\r\n\r\n.battlefield {\r\n  display: flex;\r\n  justify-content: center;\r\n  gap: 50px; }\r\n\r\n#player1-container {\r\n  display: flex;\r\n  gap: 8px; }\r\n\r\n#player2-container {\r\n  display: flex;\r\n  flex-direction: row-reverse;\r\n  gap: 8px; }\r\n\r\n.player-info {\r\n  background-color: #e8e2e4;\r\n  width: 230px;\r\n  height: fit-content;\r\n  padding: 16px;\r\n  border-radius: 7px;\r\n  border: 10px double #c84771; }\r\n\r\n#player1-name,\r\n#player2-name {\r\n  font-family: 'Cookie', sans-serif;\r\n  font-size: 2rem;\r\n  font-weight: 700;\r\n  margin-bottom: 16px; }\r\n\r\n#player2-name {\r\n  text-align: end; }\r\n\r\n#player1-score,\r\n#player2-score {\r\n  font-family: 'Open Sans', sans-serif;\r\n  margin-bottom: 8px; }\r\n\r\n#player1-ships,\r\n#player2-ships {\r\n  display: none;\r\n  font-family: 'Open Sans', sans-serif; }\r\n  #player1-ships ul,\r\n  #player2-ships ul {\r\n    padding: 0;\r\n    margin: 0; }\r\n  #player1-ships li,\r\n  #player2-ships li {\r\n    font-family: 'Open Sans', sans-serif;\r\n    margin: 12px 0;\r\n    display: flex;\r\n    align-items: center;\r\n    border-bottom: 1px solid #782b44; }\r\n\r\n.ship-placement {\r\n  display: flex;\r\n  justify-content: space-between; }\r\n\r\n.orientation-buttons {\r\n  display: flex;\r\n  gap: 8px; }\r\n  .orientation-buttons img {\r\n    height: 1rem;\r\n    cursor: pointer; }\r\n\r\n#player1-board,\r\n#player2-board {\r\n  display: grid;\r\n  grid-template-columns: repeat(10, 1fr);\r\n  grid-template-rows: repeat(10, 1fr); }\r\n  #player1-board .empty-cell,\r\n  #player2-board .empty-cell {\r\n    height: 40px;\r\n    width: 40px;\r\n    border: 1px solid rgba(0, 0, 0, 0.445);\r\n    background-color: rgba(232, 226, 228, 0.15);\r\n    border-radius: 4px; }\r\n\r\n[class^=\"cell\"] {\r\n  height: 40px;\r\n  width: 40px;\r\n  border: 1px solid rgba(0, 0, 0, 0.323);\r\n  background-color: rgba(232, 226, 228, 0.75);\r\n  text-align: center;\r\n  vertical-align: middle;\r\n  font-size: 2rem;\r\n  border-radius: 4px; }\r\n  [class^=\"cell\"]:hover {\r\n    background-color: rgba(255, 223, 87, 0.9);\r\n    cursor: pointer; }\r\n\r\n.placing-ship-cell {\r\n  background-color: rgba(255, 223, 87, 0.9); }\r\n\r\n.placing-error {\r\n  background-color: rgba(255, 0, 0, 0.423); }\r\n  .placing-error:hover {\r\n    background-color: rgba(255, 0, 0, 0.423); }\r\n\r\n.backdrop {\r\n  display: none;\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  height: 100vh;\r\n  width: 100vw;\r\n  background-color: rgba(211, 211, 211, 0.564); }\r\n\r\n.game-over_modal {\r\n  display: none;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  font-size: 2rem;\r\n  position: fixed;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  border: 7px double #c84771;\r\n  border-radius: 4px;\r\n  background-color: #eeeeee;\r\n  z-index: 3;\r\n  padding: 3rem; }\r\n  .game-over_modal img {\r\n    width: 100px; }\r\n  .game-over_modal button {\r\n    font-family: 'Open Sans', sans-serif; }\r\n\r\n.pass-turn_modal {\r\n  display: none;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 50px;\r\n  position: fixed;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  width: 350px;\r\n  height: 200px;\r\n  font-size: 2rem;\r\n  background-color: #eeeeee;\r\n  border: 4px solid #c84771;\r\n  z-index: 3; }\r\n  .pass-turn_modal p {\r\n    margin: 0; }\r\n  .pass-turn_modal button {\r\n    background-color: #c84771;\r\n    color: #eeeeee;\r\n    padding: 8px;\r\n    font-size: 1.5rem; }\r\n\r\n/*# sourceMappingURL=style.css.map */\r\n", "",{"version":3,"sources":["webpack://./src/style.scss","webpack://./src/style.css"],"names":[],"mappings":"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","sourceRoot":""}]);
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
    player1_ships.style.display = 'none';
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
/*player1_log.addEventListener('click', () => {
  currentPlayer = 'player1';
  GameOverModal();
});

player2_log.addEventListener('click', () => {
  currentPlayer = 'player2';
  GameOverModal();
});*/


// ROADMAP
// Retirer messages d'erreurs de la console
// Afficher la liste des navires pendant le jeu, pour connaître l'état de chacun (coulé/pas coulé)
// Nettoyer dossier images
// Retirer boutons de test
// Nettoyage du code : commentaires, variables non utilisées
// README.md

// BUGS
// Bug d'affichage lorsqu'on clique sur un autre navire avant sans avoir cliqué au préalable pour placer le premier : remove eventListener en début de fonction ?

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLGtJQUFnRDtBQUM1Riw0Q0FBNEMsOEhBQThDO0FBQzFGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YsdUlBQXVJLE1BQU0sc0NBQXNDO0FBQ25MLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBLDZDQUE2Qyw2QkFBNkIsOENBQThDLGNBQWMscUJBQXFCLGNBQWMsZ0JBQWdCLGtCQUFrQixtQkFBbUIsMEJBQTBCLDREQUE0RCwyQkFBMkIsbUJBQW1CLG9CQUFvQixzQkFBc0Isd0VBQXdFLG1DQUFtQyw2QkFBNkIsNkNBQTZDLGtCQUFrQix5Q0FBeUMsZ0JBQWdCLGtCQUFrQixzQkFBc0IseUJBQXlCLG9CQUFvQixxQ0FBcUMsNEJBQTRCLG9CQUFvQiwwRUFBMEUsaUNBQWlDLHFDQUFxQyxzQkFBc0IscUJBQXFCLHVCQUF1QixnQkFBZ0Isb0JBQW9CLHFDQUFxQyx5QkFBeUIsZ0JBQWdCLGtCQUFrQixtQkFBbUIsMkNBQTJDLDhDQUE4Qyx1QkFBdUIsZ0JBQWdCLDZDQUE2Qyx1QkFBdUIsZ0NBQWdDLHdCQUF3Qix1Q0FBdUMsNEJBQTRCLDZDQUE2QyxzQkFBc0IsNEJBQTRCLG1CQUFtQixnQ0FBZ0Msd0JBQXdCLDhCQUE4QixxQkFBcUIsa0NBQWtDLHdCQUF3QixtREFBbUQsb0JBQW9CLHFDQUFxQywwQkFBMEIsbUJBQW1CLHFCQUFxQixnQ0FBZ0MsbUNBQW1DLCtEQUErRCxvQ0FBb0MsaUVBQWlFLHFDQUFxQywyREFBMkQsdUJBQXVCLDRCQUE0QixrREFBa0Qsc0JBQXNCLGlDQUFpQyxnQ0FBZ0MscUNBQXFDLHlCQUF5QiwwQkFBMEIsZ0NBQWdDLG9CQUFvQixvQkFBb0IscUJBQXFCLGdCQUFnQixrQ0FBa0MsMkJBQTJCLDhCQUE4Qix3QkFBd0IsNkNBQTZDLHdCQUF3QixxQkFBcUIsNkJBQTZCLDRCQUE0QixvQkFBb0IsNkJBQTZCLDhCQUE4QixnQkFBZ0IsMkJBQTJCLHNCQUFzQix3QkFBd0Isb0JBQW9CLDZCQUE2Qiw4QkFBOEIsa0JBQWtCLHNCQUFzQix3QkFBd0IseUJBQXlCLHNCQUFzQixvQkFBb0IsOEJBQThCLGtCQUFrQiw0QkFBNEIsb0JBQW9CLGlCQUFpQiw0QkFBNEIsb0JBQW9CLGtDQUFrQyxpQkFBaUIsc0JBQXNCLGdDQUFnQyxtQkFBbUIsMEJBQTBCLG9CQUFvQix5QkFBeUIsb0NBQW9DLHlDQUF5Qyx3Q0FBd0Msc0JBQXNCLHVCQUF1Qiw0QkFBNEIsdUJBQXVCLHdCQUF3QiwyQ0FBMkMsMkNBQTJDLDJCQUEyQiwyQ0FBMkMsb0JBQW9CLDZDQUE2QyxpREFBaUQsbUJBQW1CLG9CQUFvQixpREFBaUQsNkNBQTZDLHVCQUF1QixzQkFBc0IsNEJBQTRCLDJDQUEyQyx5QkFBeUIsb0JBQW9CLHVDQUF1Qyw4QkFBOEIsb0JBQW9CLGlCQUFpQixnQ0FBZ0MscUJBQXFCLDBCQUEwQiwyQ0FBMkMsb0JBQW9CLDZDQUE2Qyw0Q0FBNEMsbUVBQW1FLHFCQUFxQixvQkFBb0IsK0NBQStDLG9EQUFvRCw2QkFBNkIsMkJBQTJCLG1CQUFtQixrQkFBa0IsNkNBQTZDLGtEQUFrRCx5QkFBeUIsNkJBQTZCLHNCQUFzQiwyQkFBMkIsK0JBQStCLGtEQUFrRCwwQkFBMEIsNEJBQTRCLGtEQUFrRCx3QkFBd0IsaURBQWlELDRCQUE0QixtREFBbUQsbUJBQW1CLG9CQUFvQixzQkFBc0IsYUFBYSxjQUFjLG9CQUFvQixtQkFBbUIscURBQXFELDBCQUEwQixvQkFBb0IsNkJBQTZCLDBCQUEwQixzQkFBc0Isc0JBQXNCLGVBQWUsZ0JBQWdCLHVDQUF1QyxpQ0FBaUMseUJBQXlCLGdDQUFnQyxpQkFBaUIsc0JBQXNCLDRCQUE0Qix1QkFBdUIsK0JBQStCLCtDQUErQywwQkFBMEIsb0JBQW9CLDZCQUE2Qiw4QkFBOEIsMEJBQTBCLGdCQUFnQixzQkFBc0IsZUFBZSxnQkFBZ0IsdUNBQXVDLG1CQUFtQixvQkFBb0Isc0JBQXNCLGdDQUFnQyxnQ0FBZ0MsbUJBQW1CLDBCQUEwQixvQkFBb0IsK0JBQStCLGtDQUFrQyx1QkFBdUIscUJBQXFCLDRCQUE0Qix3REFBd0QsNkdBQTZHLFlBQVksbUJBQW1CLE1BQU0sZ0JBQWdCLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxvQkFBb0IsTUFBTSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsa0JBQWtCLE1BQU0sVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGtCQUFrQixNQUFNLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxnQkFBZ0IsTUFBTSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsZ0JBQWdCLEtBQUssWUFBWSxXQUFXLGlCQUFpQixNQUFNLGlCQUFpQixNQUFNLFlBQVksV0FBVyxZQUFZLGdCQUFnQixLQUFLLFVBQVUsWUFBWSxnQkFBZ0IsS0FBSyxnQkFBZ0IsT0FBTyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxrQkFBa0IsT0FBTyxrQkFBa0IsUUFBUSxpQkFBaUIsT0FBTyxnQkFBZ0IsTUFBTSxZQUFZLGdCQUFnQixLQUFLLFlBQVksbUJBQW1CLE1BQU0sWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxrQkFBa0IsTUFBTSxVQUFVLFlBQVksV0FBVyxVQUFVLGtCQUFrQixNQUFNLFVBQVUsWUFBWSxhQUFhLFdBQVcsa0JBQWtCLE1BQU0sWUFBWSxXQUFXLFlBQVksYUFBYSxpQkFBaUIsS0FBSyxZQUFZLG1CQUFtQixNQUFNLFVBQVUsWUFBWSxpQkFBaUIsS0FBSyxVQUFVLGdCQUFnQixLQUFLLFVBQVUsWUFBWSxpQkFBaUIsS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksbUJBQW1CLE9BQU8sWUFBWSxXQUFXLFlBQVksbUJBQW1CLE1BQU0sZ0JBQWdCLE9BQU8sWUFBWSxtQkFBbUIsT0FBTyxVQUFVLGlCQUFpQixPQUFPLFVBQVUsZUFBZSxNQUFNLFlBQVksV0FBVyxVQUFVLFlBQVksbUJBQW1CLE1BQU0sVUFBVSxrQkFBa0IsTUFBTSxVQUFVLGVBQWUsS0FBSyxVQUFVLGdCQUFnQixPQUFPLFVBQVUsWUFBWSxrQkFBa0IsT0FBTyxVQUFVLFVBQVUsWUFBWSxhQUFhLG1CQUFtQixNQUFNLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsaUJBQWlCLE1BQU0sWUFBWSxpQkFBaUIsTUFBTSxrQkFBa0IsTUFBTSxpQkFBaUIsTUFBTSxrQkFBa0IsTUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxrQkFBa0IsTUFBTSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxlQUFlLEtBQUssZUFBZSxLQUFLLGtCQUFrQixNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxnQkFBZ0IsS0FBSyxlQUFlLEtBQUssYUFBYSxZQUFZLFVBQVUsa0JBQWtCLCtCQUErQjtBQUM5aFQ7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUNiMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRDtBQUNyRDtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQSxxRkFBcUY7QUFDckY7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIscUJBQXFCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3BGYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDekJhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEEsTUFBK0Y7QUFDL0YsTUFBcUY7QUFDckYsTUFBNEY7QUFDNUYsTUFBK0c7QUFDL0csTUFBd0c7QUFDeEcsTUFBd0c7QUFDeEcsTUFBbUc7QUFDbkc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxzRkFBTzs7OztBQUk2QztBQUNyRSxPQUFPLGlFQUFlLHNGQUFPLElBQUksNkZBQWMsR0FBRyw2RkFBYyxZQUFZLEVBQUM7Ozs7Ozs7Ozs7O0FDMUJoRTs7QUFFYjs7QUFFQTtBQUNBOztBQUVBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDdkdhOztBQUViO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNEQUFzRDs7QUFFdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3RDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ1ZhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTs7QUFFakY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNYYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrREFBa0Q7QUFDbEQ7O0FBRUE7QUFDQSwwQ0FBMEM7QUFDMUM7O0FBRUE7O0FBRUE7QUFDQSxpRkFBaUY7QUFDakY7O0FBRUE7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7O0FBRUE7QUFDQSx5REFBeUQ7QUFDekQsSUFBSTs7QUFFSjs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDckVhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7OztBQ2ZpQztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSLHNCQUFzQiw4Q0FBSTtBQUMxQjtBQUNBO0FBQ0EsMEJBQTBCLFVBQVU7QUFDcEM7QUFDQTtBQUNBLFVBQVU7QUFDViwwQkFBMEIsVUFBVTtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsVUFBVSxPQUFPO0FBQ3pDO0FBQ0E7QUFDQSxRQUFRO0FBQ1Isd0JBQXdCLFVBQVU7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQzlId0M7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUscURBQVM7QUFDeEI7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNsQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ2hCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUNZO0FBQ087QUFDTjtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyRUFBMkU7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQsTUFBTTtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0QsTUFBTTtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0Esa0RBQWtELE9BQU87QUFDekQsNERBQTRELE9BQU87QUFDbkUsa0JBQWtCLHNCQUFzQjtBQUN4QztBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsZ0NBQWdDO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksK0NBQU07QUFDbEIsWUFBWSwrQ0FBTTtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyx5QkFBeUI7QUFDM0QsNkRBQTZELFVBQVUsRUFBRSxFQUFFO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYLFVBQVU7QUFDVjtBQUNBLG9DQUFvQyxRQUFRO0FBQzVDLCtEQUErRCxVQUFVLEVBQUUsRUFBRTtBQUM3RTtBQUNBO0FBQ0EsWUFBWTtBQUNaLG9DQUFvQyxzQkFBc0I7QUFDMUQsK0RBQStELFVBQVUsRUFBRSxFQUFFO0FBQzdFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBLE9BQU87QUFDUCxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixxQkFBcUI7QUFDcEQsNkRBQTZELFNBQVMsRUFBRSxFQUFFLEVBQUUsVUFBVTtBQUN0RjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWCxVQUFVO0FBQ1Y7QUFDQSxpQ0FBaUMsUUFBUTtBQUN6QywrREFBK0QsU0FBUyxFQUFFLEVBQUUsRUFBRSxVQUFVO0FBQ3hGO0FBQ0E7QUFDQSxZQUFZO0FBQ1osaUNBQWlDLG1CQUFtQjtBQUNwRCwrREFBK0QsU0FBUyxFQUFFLEVBQUUsRUFBRSxVQUFVO0FBQ3hGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQSxPQUFPO0FBQ1A7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRCxhQUFhO0FBQy9ELGtEQUFrRCxhQUFhO0FBQy9EO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLFFBQVE7QUFDMUIsb0JBQW9CLFFBQVE7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLEVBQUUsRUFBRSxFQUFFO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLFFBQVE7QUFDMUIsb0JBQW9CLFFBQVE7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLEVBQUUsRUFBRSxFQUFFO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUVBQXFFLGlCQUFpQjtBQUN0RixJQUFJO0FBQ0o7QUFDQSxxRUFBcUUsaUJBQWlCO0FBQ3RGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2REFBNkQsbUJBQW1CLGNBQWMsbUJBQW1CO0FBQ2pIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsRUFBRTtBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXR0ZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxldHRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGV0dGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL2JhdHRsZXR0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXR0ZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9iYXR0bGV0dGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxldHRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGV0dGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxldHRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXR0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXR0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXR0ZS8uL3NyYy9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxldHRlLy4vc3JjL3BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGV0dGUvLi9zcmMvc2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGV0dGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxldHRlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXR0ZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxldHRlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vYmF0dGxldHRlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxldHRlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxldHRlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2JhdHRsZXR0ZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9iYXR0bGV0dGUvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2JhdHRsZXR0ZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vZGlzdC9pbWFnZXMvYmFja2dyb3VuZC5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuLi9kaXN0L2ltYWdlcy9sb2dvLWJpZy5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUNvb2tpZSZmYW1pbHk9T3BlbitTYW5zOml0YWwsd2dodEAwLDQwMDswLDcwMDsxLDQwMCZmYW1pbHk9UG9pcmV0K09uZSZkaXNwbGF5PXN3YXApO1wiXSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnUG9pcmV0IE9uZScsIHNhbnMtc2VyaWY7IH1cXHJcXG5cXHJcXG5odG1sIHtcXHJcXG4gIGhlaWdodDogMTAwJTsgfVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBiYWNrZ3JvdW5kOiAjNzgyYjQ0O1xcclxcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDBkZWcsICM3ODJiNDQsICNjODQ3NzEpOyB9XFxyXFxuXFxyXFxuLmJhY2tncm91bmQtaW1hZ2Uge1xcclxcbiAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxyXFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGJvdHRvbSAyMCUgbGVmdCAwO1xcclxcbiAgei1pbmRleDogLTE7XFxyXFxuICBmaWx0ZXI6IGJsdXIoNHB4KSBncmF5c2NhbGUoMzAlKTsgfVxcclxcblxcclxcbmhlYWRlciB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHBhZGRpbmc6IDAgNTBweDtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyOyB9XFxyXFxuICBoZWFkZXIgI2xvZ28ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxyXFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICAgIGhlaWdodDogMTUwcHg7XFxyXFxuICAgIHdpZHRoOiAxNTBweDtcXHJcXG4gICAgbWFyZ2luOiAzMnB4OyB9XFxyXFxuXFxyXFxuZm9vdGVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBib3R0b206IDA7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHBhZGRpbmc6IDhweDtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzQsIDM0LCAzNCwgMC41KTtcXHJcXG4gIGNvbG9yOiAjY2NjY2NjOyB9XFxyXFxuICBmb290ZXIgYSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcXHJcXG4gICAgY29sb3I6ICNjY2NjY2M7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTsgfVxcclxcbiAgICBmb290ZXIgYTpob3ZlciB7XFxyXFxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7IH1cXHJcXG4gIGZvb3RlciAuc29jaWFsLWxpbmtzIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBnYXA6IDhweDsgfVxcclxcbiAgICBmb290ZXIgLnNvY2lhbC1saW5rcyBhIHtcXHJcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgZ2FwOiA4cHg7IH1cXHJcXG4gICAgZm9vdGVyIC5zb2NpYWwtbGlua3MgaW1nIHtcXHJcXG4gICAgICB3aWR0aDogMXJlbTsgfVxcclxcblxcclxcbiNuZXctZ2FtZV9idXR0b24sXFxyXFxuI3B2cC1uZXctZ2FtZV9idXR0b24ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB3aWR0aDogMTkwcHg7XFxyXFxuICBjb2xvcjogI2VlZWVlZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkOTdlOWM7XFxyXFxuICBib3JkZXI6IDRweCBkb3VibGUgIzU1NTU1NTsgfVxcclxcbiAgI25ldy1nYW1lX2J1dHRvbjpob3ZlcixcXHJcXG4gICNwdnAtbmV3LWdhbWVfYnV0dG9uOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2M4NDc3MTsgfVxcclxcbiAgI25ldy1nYW1lX2J1dHRvbjphY3RpdmUsXFxyXFxuICAjcHZwLW5ldy1nYW1lX2J1dHRvbjphY3RpdmUge1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMnB4KTsgfVxcclxcbiAgI25ldy1nYW1lX2J1dHRvbiBpbWcsXFxyXFxuICAjcHZwLW5ldy1nYW1lX2J1dHRvbiBpbWcge1xcclxcbiAgICBoZWlnaHQ6IDI0cHg7IH1cXHJcXG5cXHJcXG4jc3RhcnQtZ2FtZV9idXR0b24ge1xcclxcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciA1MDBtcyBlYXNlLW91dDtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7IH1cXHJcXG4gICNzdGFydC1nYW1lX2J1dHRvbjphY3RpdmUge1xcclxcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoODUlKTtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDJweCk7IH1cXHJcXG5cXHJcXG4uaW5mby1jb250YWluZXIge1xcclxcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlOGUyZTQ7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgcGFkZGluZzogMTZweDtcXHJcXG4gIG1hcmdpbjogMCAzMnB4O1xcclxcbiAgZ2FwOiAzMnB4O1xcclxcbiAgYm9yZGVyOiAxMHB4IGRvdWJsZSAjYzg0NzcxO1xcclxcbiAgYm9yZGVyLXJhZGl1czogN3B4OyB9XFxyXFxuICAuaW5mby1jb250YWluZXIgYnV0dG9uIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICAgcGFkZGluZzogOHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7IH1cXHJcXG5cXHJcXG4uZ2FtZS1tb2RlLWJ1dHRvbnMge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGdhcDogMjVweDtcXHJcXG4gIG1hcmdpbi1yaWdodDogMThweDsgfVxcclxcblxcclxcbi5iYXR0bGUtaW5mbyB7XFxyXFxuICBtYXJnaW4tbGVmdDogMThweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBnYXA6IDI0cHg7IH1cXHJcXG5cXHJcXG4uYWN0aW9uLWluZm8ge1xcclxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICBmb250LXdlaWdodDogNzAwOyB9XFxyXFxuXFxyXFxuLmJhdHRsZWZpZWxkIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGdhcDogNTBweDsgfVxcclxcblxcclxcbiNwbGF5ZXIxLWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZ2FwOiA4cHg7IH1cXHJcXG5cXHJcXG4jcGxheWVyMi1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcXHJcXG4gIGdhcDogOHB4OyB9XFxyXFxuXFxyXFxuLnBsYXllci1pbmZvIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlOGUyZTQ7XFxyXFxuICB3aWR0aDogMjMwcHg7XFxyXFxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcclxcbiAgcGFkZGluZzogMTZweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDdweDtcXHJcXG4gIGJvcmRlcjogMTBweCBkb3VibGUgI2M4NDc3MTsgfVxcclxcblxcclxcbiNwbGF5ZXIxLW5hbWUsXFxyXFxuI3BsYXllcjItbmFtZSB7XFxyXFxuICBmb250LWZhbWlseTogJ0Nvb2tpZScsIHNhbnMtc2VyaWY7XFxyXFxuICBmb250LXNpemU6IDJyZW07XFxyXFxuICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMTZweDsgfVxcclxcblxcclxcbiNwbGF5ZXIyLW5hbWUge1xcclxcbiAgdGV4dC1hbGlnbjogZW5kOyB9XFxyXFxuXFxyXFxuI3BsYXllcjEtc2NvcmUsXFxyXFxuI3BsYXllcjItc2NvcmUge1xcclxcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogOHB4OyB9XFxyXFxuXFxyXFxuI3BsYXllcjEtc2hpcHMsXFxyXFxuI3BsYXllcjItc2hpcHMge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjsgfVxcclxcbiAgI3BsYXllcjEtc2hpcHMgdWwsXFxyXFxuICAjcGxheWVyMi1zaGlwcyB1bCB7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIG1hcmdpbjogMDsgfVxcclxcbiAgI3BsYXllcjEtc2hpcHMgbGksXFxyXFxuICAjcGxheWVyMi1zaGlwcyBsaSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcXHJcXG4gICAgbWFyZ2luOiAxMnB4IDA7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNzgyYjQ0OyB9XFxyXFxuXFxyXFxuLnNoaXAtcGxhY2VtZW50IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47IH1cXHJcXG5cXHJcXG4ub3JpZW50YXRpb24tYnV0dG9ucyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZ2FwOiA4cHg7IH1cXHJcXG4gIC5vcmllbnRhdGlvbi1idXR0b25zIGltZyB7XFxyXFxuICAgIGhlaWdodDogMXJlbTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyOyB9XFxyXFxuXFxyXFxuI3BsYXllcjEtYm9hcmQsXFxyXFxuI3BsYXllcjItYm9hcmQge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7IH1cXHJcXG4gICNwbGF5ZXIxLWJvYXJkIC5lbXB0eS1jZWxsLFxcclxcbiAgI3BsYXllcjItYm9hcmQgLmVtcHR5LWNlbGwge1xcclxcbiAgICBoZWlnaHQ6IDQwcHg7XFxyXFxuICAgIHdpZHRoOiA0MHB4O1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuNDQ1KTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMzIsIDIyNiwgMjI4LCAwLjE1KTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4OyB9XFxyXFxuXFxyXFxuW2NsYXNzXj1cXFwiY2VsbFxcXCJdIHtcXHJcXG4gIGhlaWdodDogNDBweDtcXHJcXG4gIHdpZHRoOiA0MHB4O1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjMyMyk7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIzMiwgMjI2LCAyMjgsIDAuNzUpO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXHJcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDRweDsgfVxcclxcbiAgW2NsYXNzXj1cXFwiY2VsbFxcXCJdOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDIyMywgODcsIDAuOSk7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjsgfVxcclxcblxcclxcbi5wbGFjaW5nLXNoaXAtY2VsbCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjIzLCA4NywgMC45KTsgfVxcclxcblxcclxcbi5wbGFjaW5nLWVycm9yIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAwLCAwLCAwLjQyMyk7IH1cXHJcXG4gIC5wbGFjaW5nLWVycm9yOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDAsIDAsIDAuNDIzKTsgfVxcclxcblxcclxcbi5iYWNrZHJvcCB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIGhlaWdodDogMTAwdmg7XFxyXFxuICB3aWR0aDogMTAwdnc7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIxMSwgMjExLCAyMTEsIDAuNTY0KTsgfVxcclxcblxcclxcbi5nYW1lLW92ZXJfbW9kYWwge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgdG9wOiA1MCU7XFxyXFxuICBsZWZ0OiA1MCU7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXHJcXG4gIGJvcmRlcjogN3B4IGRvdWJsZSAjYzg0NzcxO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZWVlZTtcXHJcXG4gIHotaW5kZXg6IDM7XFxyXFxuICBwYWRkaW5nOiAzcmVtOyB9XFxyXFxuICAuZ2FtZS1vdmVyX21vZGFsIGltZyB7XFxyXFxuICAgIHdpZHRoOiAxMDBweDsgfVxcclxcbiAgLmdhbWUtb3Zlcl9tb2RhbCBidXR0b24ge1xcclxcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7IH1cXHJcXG5cXHJcXG4ucGFzcy10dXJuX21vZGFsIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiA1MHB4O1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgdG9wOiA1MCU7XFxyXFxuICBsZWZ0OiA1MCU7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXHJcXG4gIHdpZHRoOiAzNTBweDtcXHJcXG4gIGhlaWdodDogMjAwcHg7XFxyXFxuICBmb250LXNpemU6IDJyZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlZWVlO1xcclxcbiAgYm9yZGVyOiA0cHggc29saWQgI2M4NDc3MTtcXHJcXG4gIHotaW5kZXg6IDM7IH1cXHJcXG4gIC5wYXNzLXR1cm5fbW9kYWwgcCB7XFxyXFxuICAgIG1hcmdpbjogMDsgfVxcclxcbiAgLnBhc3MtdHVybl9tb2RhbCBidXR0b24ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzg0NzcxO1xcclxcbiAgICBjb2xvcjogI2VlZWVlZTtcXHJcXG4gICAgcGFkZGluZzogOHB4O1xcclxcbiAgICBmb250LXNpemU6IDEuNXJlbTsgfVxcclxcblxcclxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPXN0eWxlLmNzcy5tYXAgKi9cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuc2Nzc1wiLFwid2Vi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QVMsRUFBQTtFQUdYO0lBQ0UseUJBelYyQjtJQTBWM0IsY0FBYztJQUNkLFlBQVk7SUFDWixpQkFBaUIsRUFBQTs7QUN0RXJCLG9DQUFvQ1wiLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IFNoaXAgfSBmcm9tICcuL3NoaXAuanMnO1xyXG5cclxuXHJcbmNvbnN0IEdhbWVib2FyZCA9ICgpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgcHJpdmF0ZUJvYXJkOiBbXHJcbiAgICAgIFssLCwsLCwsLCxdLFxyXG4gICAgICBbLCwsLCwsLCwsXSxcclxuICAgICAgWywsLCwsLCwsLF0sXHJcbiAgICAgIFssLCwsLCwsLCxdLFxyXG4gICAgICBbLCwsLCwsLCwsXSxcclxuICAgICAgWywsLCwsLCwsLF0sXHJcbiAgICAgIFssLCwsLCwsLCxdLFxyXG4gICAgICBbLCwsLCwsLCwsXSxcclxuICAgICAgWywsLCwsLCwsLF0sXHJcbiAgICAgIFssLCwsLCwsLCxdLFxyXG4gICAgXSxcclxuXHJcbiAgICBwdWJsaWNCb2FyZDogW1xyXG4gICAgICBbLCwsLCwsLCwsXSxcclxuICAgICAgWywsLCwsLCwsLF0sXHJcbiAgICAgIFssLCwsLCwsLCxdLFxyXG4gICAgICBbLCwsLCwsLCwsXSxcclxuICAgICAgWywsLCwsLCwsLF0sXHJcbiAgICAgIFssLCwsLCwsLCxdLFxyXG4gICAgICBbLCwsLCwsLCwsXSxcclxuICAgICAgWywsLCwsLCwsLF0sXHJcbiAgICAgIFssLCwsLCwsLCxdLFxyXG4gICAgICBbLCwsLCwsLCwsXSxcclxuICAgIF0sXHJcbiAgICBcclxuICAgIHNoaXBMaXN0OiBbXSxcclxuXHJcbiAgICBwbGFjZVNoaXA6IGZ1bmN0aW9uIChzaXplLCBzdGFydFBvcywgc2hpcE5hbWUgPSAnVW5uYW1lZCBzaGlwJywgZGlyZWN0aW9uID0gJ2hvcicpIHtcclxuICAgICAgaWYgKCF0aGlzLmlzVmFsaWQoc2l6ZSwgc3RhcnRQb3MsIGRpcmVjdGlvbikpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCBwbGFjZSBzaGlwOiBvdXQgb2YgYm91bmRzIG9yIHNwYWNlIGFscmVhZHkgb2NjdXBpZWQuJyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbGV0IG5ld1NoaXAgPSBTaGlwKHNpemUsIHNoaXBOYW1lKTtcclxuICAgICAgICB0aGlzLnNoaXBMaXN0LnB1c2gobmV3U2hpcCk7XHJcbiAgICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gJ2hvcicpIHtcclxuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2l6ZTsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMucHJpdmF0ZUJvYXJkW3N0YXJ0UG9zWzBdXVtzdGFydFBvc1sxXSArIGldID0gc2hpcE5hbWU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmIChkaXJlY3Rpb24gPT09ICd2ZXInKSB7XHJcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNpemU7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLnByaXZhdGVCb2FyZFtzdGFydFBvc1swXSArIGldW3N0YXJ0UG9zWzFdXSA9IHNoaXBOYW1lO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBjb21wdXRlclBsYWNlU2hpcDogZnVuY3Rpb24gKHNpemUsIHNoaXBOYW1lKSB7XHJcbiAgICAgIGxldCBybmRQb3MgPSBbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApLCBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCldO1xyXG4gICAgICBsZXQgcm5kRGlyZWN0aW9uID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMik7XHJcbiAgICAgIHN3aXRjaCAocm5kRGlyZWN0aW9uKSB7XHJcbiAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgcm5kRGlyZWN0aW9uID0gJ2hvcic7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgIHJuZERpcmVjdGlvbiA9ICd2ZXInO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHdoaWxlICghdGhpcy5pc1ZhbGlkKHNpemUsIHJuZFBvcywgcm5kRGlyZWN0aW9uKSkge1xyXG4gICAgICAgIHJuZFBvcyA9IFtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCksIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKV07XHJcbiAgICAgICAgcm5kRGlyZWN0aW9uID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMik7XHJcbiAgICAgICAgc3dpdGNoIChybmREaXJlY3Rpb24pIHtcclxuICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgcm5kRGlyZWN0aW9uID0gJ2hvcic7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcm5kRGlyZWN0aW9uID0gJ3Zlcic7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICB0aGlzLnBsYWNlU2hpcChzaXplLCBybmRQb3MsIHNoaXBOYW1lLCBybmREaXJlY3Rpb24pO1xyXG4gICAgfSxcclxuXHJcbiAgICBpc1ZhbGlkOiBmdW5jdGlvbiAoc2l6ZSwgc3RhcnRQb3MsIGRpcmVjdGlvbiA9ICdob3InKSB7XHJcbiAgICAgIGxldCBzaXplQ2hlY2sgPSB0cnVlO1xyXG4gICAgICBsZXQgYXZhaWxhYmxlQ2hlY2sgPSB0cnVlO1xyXG4gICAgICBpZiAoZGlyZWN0aW9uID09PSAnaG9yJyAmJiAoKHN0YXJ0UG9zWzFdICsgc2l6ZSAtIDEpID4gOSkpIHtcclxuICAgICAgICBzaXplQ2hlY2sgPSBmYWxzZTtcclxuICAgICAgfSBlbHNlIGlmIChkaXJlY3Rpb24gPT09ICd2ZXInICYmICgoc3RhcnRQb3NbMF0gKyBzaXplIC0gMSkgPiA5KSkge1xyXG4gICAgICAgIHNpemVDaGVjayA9IGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICAgIGxldCB0YXJnZXRBcnIgPSBbXTtcclxuICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gJ2hvcicpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNpemU7IGkrKykgeyAvLyBjaGVjayBpZiBob3Jpem9udGFsIHBsYWNlbWVudCBpcyBlbXB0eVxyXG4gICAgICAgICAgdGFyZ2V0QXJyLnB1c2godGhpcy5wcml2YXRlQm9hcmRbc3RhcnRQb3NbMF1dW3N0YXJ0UG9zWzFdICsgaV0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICB9IGVsc2UgaWYgKHNpemVDaGVjayA9PT0gdHJ1ZSAmJiBkaXJlY3Rpb24gPT09ICd2ZXInKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaXplOyBpKyspIHtcclxuICAgICAgICAgIHRhcmdldEFyci5wdXNoKHRoaXMucHJpdmF0ZUJvYXJkW3N0YXJ0UG9zWzBdICsgaV1bc3RhcnRQb3NbMV1dKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgYXZhaWxhYmxlQ2hlY2sgPSB0YXJnZXRBcnIuZXZlcnkoZWwgPT4gZWwgPT09IHVuZGVmaW5lZCk7XHJcbiAgICAgIHJldHVybiAoc2l6ZUNoZWNrICYmIGF2YWlsYWJsZUNoZWNrKTtcclxuICAgICAgfSxcclxuXHJcbiAgICByZWNlaXZlQXR0YWNrOiBmdW5jdGlvbiAodGFyZ2V0UG9zKSB7XHJcbiAgICAgaWYgKHRoaXMucHJpdmF0ZUJvYXJkW3RhcmdldFBvc1swXV1bdGFyZ2V0UG9zWzFdXSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHRoaXMucHJpdmF0ZUJvYXJkW3RhcmdldFBvc1swXV1bdGFyZ2V0UG9zWzFdXSA9ICd+JztcclxuICAgICAgcmV0dXJuICdZb3UgbWlzc2VkJztcclxuICAgICB9IGVsc2UgaWYgKHRoaXMucHJpdmF0ZUJvYXJkW3RhcmdldFBvc1swXV1bdGFyZ2V0UG9zWzFdXSA9PT0gJ34nIHx8IHRoaXMucHJpdmF0ZUJvYXJkW3RhcmdldFBvc1swXV1bdGFyZ2V0UG9zWzFdXSA9PT0gJ1gnKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignWW91IGNhbm5vdCBhdHRhY2sgdGhlIHNhbWUgc3BvdCB0d2ljZScpO1xyXG4gICAgIH0gZWxzZSB7XHJcbiAgICAgIGxldCB0YXJnZXQgPSB0aGlzLnNoaXBMaXN0LmZpbmQoZWwgPT4gZWwubmFtZSA9PT0gdGhpcy5wcml2YXRlQm9hcmRbdGFyZ2V0UG9zWzBdXVt0YXJnZXRQb3NbMV1dKTtcclxuICAgICAgdGFyZ2V0LmhpdHMrKztcclxuICAgICAgdGhpcy5wcml2YXRlQm9hcmRbdGFyZ2V0UG9zWzBdXVt0YXJnZXRQb3NbMV1dID0gJ1gnO1xyXG4gICAgICBpZiAodGFyZ2V0LmlzU3VuaygpKSB7XHJcbiAgICAgICAgcmV0dXJuICdUaGUgc2hpcCBoYXMgc3Vuayc7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiB0YXJnZXQubmFtZSArICcgaGFzIGJlZW4gaGl0LCAnICsgKHRhcmdldC5zaXplIC0gdGFyZ2V0LmhpdHMpICsnIGhpdChzKSBsZWZ0JztcclxuICAgICAgfVxyXG4gICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgZ2V0U3RhdHVzOiBmdW5jdGlvbigpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuc2hpcExpc3QuZXZlcnkoZWwgPT4gZWwuaXNTdW5rKCkpO1xyXG4gICAgfSxcclxuXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCB7IEdhbWVib2FyZCB9OyIsImltcG9ydCB7IEdhbWVib2FyZCB9IGZyb20gXCIuL2dhbWVib2FyZFwiO1xyXG5cclxuY29uc3QgUGxheWVyID0gKG5hbWUpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgcGxheWVyTmFtZTogbmFtZSxcclxuXHJcbiAgICBnYW1lYm9hcmQ6IEdhbWVib2FyZCgpLFxyXG5cclxuICAgIGF0dGFjazogZnVuY3Rpb24gKHBsYXllciwgeCwgeSkge1xyXG4gICAgICBwbGF5ZXIuZ2FtZWJvYXJkLnJlY2VpdmVBdHRhY2soW3gsIHldKTtcclxuICAgIH0sXHJcblxyXG4gICAgY29tcHV0ZXJBdHRhY2s6IGZ1bmN0aW9uIChwbGF5ZXIpIHtcclxuICAgICAgbGV0IGNvb3JkID0gZmluZFZhbGlkTW92ZShwbGF5ZXIuZ2FtZWJvYXJkLnByaXZhdGVCb2FyZCk7XHJcbiAgICAgIHRoaXMuYXR0YWNrKHBsYXllciwgY29vcmRbMF0sIGNvb3JkWzFdKTtcclxuICAgIH0sXHJcbiAgfTtcclxufTtcclxuXHJcbmZ1bmN0aW9uIHJuZENvb3JkaW5hdGVzICgpIHtcclxuICBsZXQgeCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcclxuICBsZXQgeSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcclxuICByZXR1cm4gW1t4XSxbeV1dO1xyXG59XHJcblxyXG5mdW5jdGlvbiBmaW5kVmFsaWRNb3ZlIChib2FyZCkge1xyXG4gIC8vIEdlbmVyYXRlIHR3byByYW5kb20gbnVtYmVyIGJldHdlZW4gMC05XHJcbiAgbGV0IGNvb3JkaW5hdGVzID0gcm5kQ29vcmRpbmF0ZXMoKTtcclxuICAvLyBjb250aW51ZSB3aGlsZSB0aGUgbW92ZSBpcyBpbnZhbGlkLCBsYXVuY2ggYXR0YWNrIHdoZW4gZmluZGluZyBhIHZhbGlkIG1vdmVcclxuICB3aGlsZSAoYm9hcmRbY29vcmRpbmF0ZXNbMF1dW2Nvb3JkaW5hdGVzWzFdXSA9PT0gJ1gnIHx8IGJvYXJkW2Nvb3JkaW5hdGVzWzBdXVtjb29yZGluYXRlc1sxXV0gPT09ICd+Jykge1xyXG4gICAgY29vcmRpbmF0ZXMgPSBybmRDb29yZGluYXRlcygpO1xyXG4gIH1cclxuICByZXR1cm4gY29vcmRpbmF0ZXM7XHJcbn1cclxuXHJcbmV4cG9ydCB7IFBsYXllciB9OyIsImNvbnN0IFNoaXAgPSAoc2l6ZSwgbmFtZSA9ICdVbm5hbWVkIHNoaXAnLCBpZCA9IHVuZGVmaW5lZCkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICBuYW1lLFxyXG4gICAgc2l6ZSxcclxuICAgIGhpdHM6IDAsXHJcbiAgICBoaXQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgICB0aGlzLmhpdHMrKztcclxuICAgIH0sXHJcblxyXG4gICAgaXNTdW5rOiBmdW5jdGlvbigpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuaGl0cyA+PSB0aGlzLnNpemUgPyB0cnVlIDogZmFsc2U7XHJcbiAgICB9LFxyXG5cclxuICAgIGlkLFxyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgeyBTaGlwIH07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuaW1wb3J0IHsgU2hpcCB9IGZyb20gJy4vc2hpcC5qcyc7XHJcbmltcG9ydCB7IEdhbWVib2FyZCB9IGZyb20gJy4vZ2FtZWJvYXJkJztcclxuaW1wb3J0IHsgUGxheWVyIH0gZnJvbSAnLi9wbGF5ZXInO1xyXG5cclxuLy8gR29iYWwgdmFyaWFibGVzXHJcbmxldCBwbGF5ZXIxO1xyXG5sZXQgcGxheWVyMjtcclxubGV0IHAxQ2VsbHM7XHJcbmxldCBwMkNlbGxzO1xyXG5sZXQgZ2FtZU1vZGU7XHJcbmxldCBjdXJyZW50UGxheWVyID0gJ3BsYXllcjEnO1xyXG5sZXQgYWxsU2hpcHNQbGFjZWQ9IGZhbHNlO1xyXG4gIC8vIFVzaW5nIGdsb2JhbCB2YXJpYWJsZXMgdG8ga2VlcCB0aGUgc2NvcmUgZnJvbSBvbmUgYmF0dGxlIHRvIHRoZSBuZXh0OyByZXR1cm4gdG8gMCBvbiBwYWdlIHJlZnJlc2hcclxubGV0IHBsYXllcnNTY29yZXMgPSBbMCwgMF07XHJcbmxldCBwbGF5ZXIyU2NvcmUgPSAwO1xyXG5cclxuLy8gRE9NIEVsZW1lbnRzXHJcbmNvbnN0IG5ld19nYW1lX2J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXctZ2FtZV9idXR0b24nKTtcclxuY29uc3QgcHZwX25ld19nYW1lX2J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwdnAtbmV3LWdhbWVfYnV0dG9uJyk7XHJcbmNvbnN0IHN0YXJ0X2dhbWVfYnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0YXJ0LWdhbWVfYnV0dG9uJyk7XHJcblxyXG5jb25zdCBwbGF5ZXIxX2JvYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYXllcjEtYm9hcmQnKTtcclxuY29uc3QgcGxheWVyMV9zaGlwcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGF5ZXIxLXNoaXBzJyk7XHJcbmNvbnN0IHBsYXllcjJfYm9hcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxheWVyMi1ib2FyZCcpO1xyXG5jb25zdCBwbGF5ZXIyX3NoaXBzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYXllcjItc2hpcHMnKTtcclxuY29uc3QgcGxheWVyMV9sb2cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxheWVyMS1sb2cnKTtcclxuY29uc3QgcGxheWVyMl9sb2cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxheWVyMi1sb2cnKTtcclxuY29uc3QgYWN0aW9uX2luZm8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWN0aW9uLWluZm8nKTtcclxuXHJcblxyXG4vLyBNb2RhbHMgZGlzcGxheVxyXG5jb25zdCBjbG9zZU1vZGFsQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNsb3NlLW1vZGFsX2J1dHRvbicpO1xyXG5jbG9zZU1vZGFsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gQ2xvc2VNb2RhbCgnZ2FtZS1vdmVyX21vZGFsJykpO1xyXG5cclxuZnVuY3Rpb24gT3Blbk1vZGFsKG1vZGFsKSB7XHJcbiAgY29uc3QgYmFja2Ryb3AgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmFja2Ryb3AnKTtcclxuICBiYWNrZHJvcC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICBiYWNrZHJvcC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IENsb3NlTW9kYWwobW9kYWwpKTtcclxuICBjb25zdCBtb2RhbFRvT3BlbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke21vZGFsfWApO1xyXG4gIG1vZGFsVG9PcGVuLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG59XHJcblxyXG5mdW5jdGlvbiBDbG9zZU1vZGFsKG1vZGFsKSB7XHJcbiAgY29uc3QgYmFja2Ryb3AgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmFja2Ryb3AnKTtcclxuICBiYWNrZHJvcC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gIGNvbnN0IG1vZGFsVG9DbG9zZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke21vZGFsfWApO1xyXG4gIG1vZGFsVG9DbG9zZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG59XHJcblxyXG5mdW5jdGlvbiBHYW1lT3Zlck1vZGFsICgpIHtcclxuICBjb25zdCBiYWNrZHJvcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5iYWNrZHJvcCcpO1xyXG4gIGJhY2tkcm9wLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gIGJhY2tkcm9wLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gQ2xvc2VNb2RhbCgnZ2FtZS1vdmVyX21vZGFsJykpO1xyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lLW92ZXJfbW9kYWwnKS5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xyXG4gIGlmIChjdXJyZW50UGxheWVyID09PSAncGxheWVyMScpIHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lLW92ZXJfbW9kYWwgPiBwJykudGV4dENvbnRlbnQgPSAnUGxheWVyIDIgd2lucyEnO1xyXG4gICAgYWN0aW9uX2luZm8udGV4dENvbnRlbnQgPSAnUGxheWVyIDIgd2lucyEnO1xyXG4gICAgVXBkYXRlU2NvcmUocGxheWVyMik7XHJcbiAgfSBlbHNlIHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lLW92ZXJfbW9kYWwgPiBwJykudGV4dENvbnRlbnQgPSAnUGxheWVyIDEgd2lucyEnO1xyXG4gICAgYWN0aW9uX2luZm8udGV4dENvbnRlbnQgPSAnUGxheWVyIDEgd2lucyEnO1xyXG4gICAgVXBkYXRlU2NvcmUocGxheWVyMSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBQYXNzVHVybk1vZGFsICgpIHtcclxuICBwMUNlbGxzID0gUG9wdWxhdGVQMSgncHVibGljQm9hcmQnKTtcclxuICBwMkNlbGxzID0gUG9wdWxhdGVQMigncHVibGljQm9hcmQnKTtcclxuICBjb25zdCBiYWNrZHJvcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5iYWNrZHJvcCcpO1xyXG4gIGJhY2tkcm9wLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYXNzLXR1cm5fbW9kYWwnKS5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xyXG4gIGlmIChjdXJyZW50UGxheWVyID09PSAncGxheWVyMScpIHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYXNzLXR1cm5fbW9kYWwgPiBwJykudGV4dENvbnRlbnQgPSBgUGxheWVyIDEncyB0dXJuYDtcclxuICB9IGVsc2Uge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBhc3MtdHVybl9tb2RhbCA+IHAnKS50ZXh0Q29udGVudCA9IGBQbGF5ZXIgMidzIHR1cm5gO1xyXG4gIH1cclxufVxyXG5cclxuLy8gSW5pdGlhbGl6ZSBnYW1lIGZ1bmN0aW9uc1xyXG5uZXdfZ2FtZV9idXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgcmVzZXRET00oKTtcclxuICBJbml0aWFsaXplR2FtZSgnUGxheWVyJywgJ0NvbXB1dGVyJywgJ2NvbScpO1xyXG4gIHBsYWNlbWVudFBoYXNlKCk7XHJcbiAgYWN0aW9uX2luZm8udGV4dENvbnRlbnQgPSAnUGxhY2UgZWFjaCBvbmUgb2YgeW91ciBwYXN0cmllcy4nO1xyXG4gIHN0YXJ0X2dhbWVfYnV0dG9uLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gIHN0YXJ0X2dhbWVfYnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcclxuICBzdGFydF9nYW1lX2J1dHRvbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnYnV0dG9uZmFjZSc7XHJcbiAgc3RhcnRfZ2FtZV9idXR0b24udGV4dENvbnRlbnQgPSAnU3RhcnQgdGhlIGJhdHRsZSc7XHJcbn0pO1xyXG5cclxucHZwX25ld19nYW1lX2J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICByZXNldERPTSgpO1xyXG4gIEluaXRpYWxpemVHYW1lKCdQbGF5ZXIgMScsICdQbGF5ZXIgMicsICdwdnAnKTtcclxuICBwbGFjZW1lbnRQaGFzZSgpO1xyXG4gIGFjdGlvbl9pbmZvLnRleHRDb250ZW50ID0gJ1BsYXllciAxLCBwbGFjZSBlYWNoIG9uZSBvZiB5b3VyIHBhc3RyaWVzLic7XHJcbiAgc3RhcnRfZ2FtZV9idXR0b24uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgc3RhcnRfZ2FtZV9idXR0b24uZGlzYWJsZWQgPSB0cnVlO1xyXG4gIHN0YXJ0X2dhbWVfYnV0dG9uLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdidXR0b25mYWNlJztcclxuICBzdGFydF9nYW1lX2J1dHRvbi50ZXh0Q29udGVudCA9ICdOZXh0IHBsYXllcic7XHJcbn0pO1xyXG5cclxuc3RhcnRfZ2FtZV9idXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgaWYgKGdhbWVNb2RlID09PSAnY29tJykge1xyXG4gICAgcGxheWVyMV9zaGlwcy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgU3RhcnRHYW1lKCk7XHJcbiAgfSBlbHNlIGlmIChnYW1lTW9kZSA9PT0gJ3B2cCcgJiYgcGxheWVyMi5nYW1lYm9hcmQuc2hpcExpc3QubGVuZ3RoID09PSA1ICYmIHBsYXllcjIuZ2FtZWJvYXJkLnNoaXBMaXN0Lmxlbmd0aCA9PT0gNSkgeyBcclxuICAgIHBsYXllcjJfc2hpcHMuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIFN0YXJ0R2FtZSgpO1xyXG4gIH1cclxuICBlbHNlIHtcclxuICAgIHJlc2V0RE9NKCdwbGF5ZXIyJyk7XHJcbiAgICBhY3Rpb25faW5mby50ZXh0Q29udGVudCA9ICdQbGF5ZXIgMiwgcGxhY2UgZWFjaCBvbmUgb2YgeW91ciBwYXN0cmllcy4nO1xyXG4gICAgc3RhcnRfZ2FtZV9idXR0b24uZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgc3RhcnRfZ2FtZV9idXR0b24uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ2J1dHRvbmZhY2UnO1xyXG4gICAgc3RhcnRfZ2FtZV9idXR0b24udGV4dENvbnRlbnQgPSAnU3RhcnQgZ2FtZSc7XHJcbiAgICBjaGFuZ2VQbGF5ZXJQbGFjZW1lbnQoKTtcclxuICB9XHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gcmVzZXRET00gKHBsYXllciA9ICdwbGF5ZXIxJykge1xyXG4gIGNvbnN0IHNoaXBfbGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYCMke3BsYXllcn0tc2hpcHMgbGlgKTtcclxuICBjb25zdCBvcmllbnRhdGlvbl9idXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgIyR7cGxheWVyfS1zaGlwcyBpbWdgKTtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBfbGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgc2hpcF9saXN0W2ldLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XHJcbiAgICBzaGlwX2xpc3RbaV0uc3R5bGUuY29sb3IgPSAnYmxhY2snO1xyXG4gIH1cclxuICBmb3IgKGxldCBpID0gMDsgaSA8IG9yaWVudGF0aW9uX2J1dHRvbnMubGVuZ3RoOyBpKyspIHtcclxuICAgIG9yaWVudGF0aW9uX2J1dHRvbnNbaV0uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgfVxyXG4gIGlmIChwbGF5ZXIgPT09ICdwbGF5ZXIxJykge1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYXllcjItc2hpcHMnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gY2hhbmdlUGxheWVyUGxhY2VtZW50ICgpIHtcclxuICBpZiAocGxheWVyMS5nYW1lYm9hcmQuc2hpcExpc3QubGVuZ3RoICE9PSA1KSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IgKCdQbGF5ZXIgMSBtdXN0IGZpcnN0IHBsYWNlIGFsbCBoaXMvaGVyIHBhc3RyaWVzLicpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBwbGF5ZXIxX3NoaXBzLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICBwMUNlbGxzID0gUG9wdWxhdGVQMSgncHVibGljQm9hcmQnKTtcclxuICAgIFBsYXllcjJQbGFjZVNoaXBzKCk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBJbml0aWFsaXplR2FtZShwMW5hbWUsIHAybmFtZSwgbW9kZSkge1xyXG4gIGN1cnJlbnRQbGF5ZXIgPSAncGxheWVyMSc7XHJcbiAgZ2FtZU1vZGUgPSBtb2RlO1xyXG4gIHBsYXllcjEgPSBQbGF5ZXIocDFuYW1lKTtcclxuICBwbGF5ZXIyID0gUGxheWVyKHAybmFtZSk7XHJcbiAgcDFDZWxscyA9IFBvcHVsYXRlUDEoKTtcclxuICBwMkNlbGxzID0gUG9wdWxhdGVQMigncHVibGljQm9hcmQnKTtcclxufVxyXG5cclxuZnVuY3Rpb24gQ29tcHV0ZXJQbGFjZVNoaXBzICgpIHtcclxuICBwbGF5ZXIyLmdhbWVib2FyZC5jb21wdXRlclBsYWNlU2hpcCg1LCAnQ2FycmllcicpO1xyXG4gIHBsYXllcjIuZ2FtZWJvYXJkLmNvbXB1dGVyUGxhY2VTaGlwKDQsICdCYXR0bGVzaGlwJyk7XHJcbiAgcGxheWVyMi5nYW1lYm9hcmQuY29tcHV0ZXJQbGFjZVNoaXAoMywgJ0NydWlzZXInKTtcclxuICBwbGF5ZXIyLmdhbWVib2FyZC5jb21wdXRlclBsYWNlU2hpcCgzLCAnU3VibWFyaW5lJyk7XHJcbiAgcGxheWVyMi5nYW1lYm9hcmQuY29tcHV0ZXJQbGFjZVNoaXAoMiwgJ0Rlc3Ryb3llcicpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBwbGFjZW1lbnRQaGFzZSAoKSB7XHJcbiAgaWYgKGdhbWVNb2RlID09PSAnY29tJykge1xyXG4gICAgQ29tcHV0ZXJQbGFjZVNoaXBzKCk7XHJcbiAgICBQbGF5ZXIxUGxhY2VTaGlwcygpO1xyXG4gICAgcGxheWVyMl9zaGlwcy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBQbGF5ZXIxUGxhY2VTaGlwcygpO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gUGxheWVyMVBsYWNlU2hpcHMgKCkge1xyXG4gIHBsYXllcjFfc2hpcHMuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgY29uc3QgcDFDYXJyaWVySG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnAxLWNhcnJpZXIgLmhvcicpO1xyXG4gIGNvbnN0IHAxQ2FycmllclZlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wMS1jYXJyaWVyIC52ZXInKTtcclxuICBwMUNhcnJpZXJIb3IuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBBY3RpdmF0ZVBsYWNlbWVudChwbGF5ZXIxLCBwMUNlbGxzLCA1LCAnQ2FycmllcicsICcucDEtY2FycmllcicpKTtcclxuICBwMUNhcnJpZXJWZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBBY3RpdmF0ZVBsYWNlbWVudChwbGF5ZXIxLCBwMUNlbGxzLCA1LCAnQ2FycmllcicsICcucDEtY2FycmllcicsICd2ZXInKSk7XHJcbiAgY29uc3QgcDFCYXR0bGVzaGlwSG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnAxLWJhdHRsZXNoaXAgLmhvcicpO1xyXG4gIGNvbnN0IHAxQmF0dGxlc2hpcFZlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wMS1iYXR0bGVzaGlwIC52ZXInKTtcclxuICBwMUJhdHRsZXNoaXBIb3IuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBBY3RpdmF0ZVBsYWNlbWVudChwbGF5ZXIxLCBwMUNlbGxzLCA0LCAnQmF0dGxlc2hpcCcsICcucDEtYmF0dGxlc2hpcCcpKTtcclxuICBwMUJhdHRsZXNoaXBWZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBBY3RpdmF0ZVBsYWNlbWVudChwbGF5ZXIxLCBwMUNlbGxzLCA0LCAnQmF0dGxlc2hpcCcsICcucDEtYmF0dGxlc2hpcCcsICd2ZXInKSk7XHJcbiAgY29uc3QgcDFDcnVpc2VySG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnAxLWNydWlzZXIgLmhvcicpO1xyXG4gIGNvbnN0IHAxQ3J1aXNlclZlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wMS1jcnVpc2VyIC52ZXInKTtcclxuICBwMUNydWlzZXJIb3IuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBBY3RpdmF0ZVBsYWNlbWVudChwbGF5ZXIxLCBwMUNlbGxzLCAzLCAnQ3J1aXNlcicsICcucDEtY3J1aXNlcicpKTtcclxuICBwMUNydWlzZXJWZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBBY3RpdmF0ZVBsYWNlbWVudChwbGF5ZXIxLCBwMUNlbGxzLCAzLCAnQ3J1aXNlcicsICcucDEtY3J1aXNlcicsICd2ZXInKSk7XHJcbiAgY29uc3QgcDFTdWJtYXJpbmVIb3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucDEtc3VibWFyaW5lIC5ob3InKTtcclxuICBjb25zdCBwMVN1Ym1hcmluZVZlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wMS1zdWJtYXJpbmUgLnZlcicpO1xyXG4gIHAxU3VibWFyaW5lSG9yLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gQWN0aXZhdGVQbGFjZW1lbnQocGxheWVyMSwgcDFDZWxscywgMywgJ1N1Ym1hcmluZScsICcucDEtc3VibWFyaW5lJykpO1xyXG4gIHAxU3VibWFyaW5lVmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gQWN0aXZhdGVQbGFjZW1lbnQocGxheWVyMSwgcDFDZWxscywgMywgJ1N1Ym1hcmluZScsICcucDEtc3VibWFyaW5lJywgJ3ZlcicpKTtcclxuICBjb25zdCBwMURlc3Ryb3llckhvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wMS1kZXN0cm95ZXIgLmhvcicpO1xyXG4gIGNvbnN0IHAxRGVzdHJveWVyVmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnAxLWRlc3Ryb3llciAudmVyJyk7XHJcbiAgcDFEZXN0cm95ZXJIb3IuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBBY3RpdmF0ZVBsYWNlbWVudChwbGF5ZXIxLCBwMUNlbGxzLCAyLCAnRGVzdHJveWVyJywgJy5wMS1kZXN0cm95ZXInKSk7XHJcbiAgcDFEZXN0cm95ZXJWZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBBY3RpdmF0ZVBsYWNlbWVudChwbGF5ZXIxLCBwMUNlbGxzLCAyLCAnRGVzdHJveWVyJywgJy5wMS1kZXN0cm95ZXInLCAndmVyJykpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBQbGF5ZXIyUGxhY2VTaGlwcyAoKSB7XHJcbiAgcGxheWVyMl9zaGlwcy5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICBjb25zdCBwMkNhcnJpZXJIb3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucDItY2FycmllciAuaG9yJyk7XHJcbiAgY29uc3QgcDJDYXJyaWVyVmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnAyLWNhcnJpZXIgLnZlcicpO1xyXG4gIHAyQ2Fycmllckhvci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IEFjdGl2YXRlUGxhY2VtZW50KHBsYXllcjIsIHAyQ2VsbHMsIDUsICdDYXJyaWVyJywgJy5wMi1jYXJyaWVyJykpO1xyXG4gIHAyQ2FycmllclZlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IEFjdGl2YXRlUGxhY2VtZW50KHBsYXllcjIsIHAyQ2VsbHMsIDUsICdDYXJyaWVyJywgJy5wMi1jYXJyaWVyJywgJ3ZlcicpKTtcclxuICBjb25zdCBwMkJhdHRsZXNoaXBIb3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucDItYmF0dGxlc2hpcCAuaG9yJyk7XHJcbiAgY29uc3QgcDJCYXR0bGVzaGlwVmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnAyLWJhdHRsZXNoaXAgLnZlcicpO1xyXG4gIHAyQmF0dGxlc2hpcEhvci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IEFjdGl2YXRlUGxhY2VtZW50KHBsYXllcjIsIHAyQ2VsbHMsIDQsICdCYXR0bGVzaGlwJywgJy5wMi1iYXR0bGVzaGlwJykpO1xyXG4gIHAyQmF0dGxlc2hpcFZlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IEFjdGl2YXRlUGxhY2VtZW50KHBsYXllcjIsIHAyQ2VsbHMsIDQsICdCYXR0bGVzaGlwJywgJy5wMi1iYXR0bGVzaGlwJywgJ3ZlcicpKTtcclxuICBjb25zdCBwMkNydWlzZXJIb3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucDItY3J1aXNlciAuaG9yJyk7XHJcbiAgY29uc3QgcDJDcnVpc2VyVmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnAyLWNydWlzZXIgLnZlcicpO1xyXG4gIHAyQ3J1aXNlckhvci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IEFjdGl2YXRlUGxhY2VtZW50KHBsYXllcjIsIHAyQ2VsbHMsIDMsICdDcnVpc2VyJywgJy5wMi1jcnVpc2VyJykpO1xyXG4gIHAyQ3J1aXNlclZlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IEFjdGl2YXRlUGxhY2VtZW50KHBsYXllcjIsIHAyQ2VsbHMsIDMsICdDcnVpc2VyJywgJy5wMi1jcnVpc2VyJywgJ3ZlcicpKTtcclxuICBjb25zdCBwMlN1Ym1hcmluZUhvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wMi1zdWJtYXJpbmUgLmhvcicpO1xyXG4gIGNvbnN0IHAyU3VibWFyaW5lVmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnAyLXN1Ym1hcmluZSAudmVyJyk7XHJcbiAgcDJTdWJtYXJpbmVIb3IuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBBY3RpdmF0ZVBsYWNlbWVudChwbGF5ZXIyLCBwMkNlbGxzLCAzLCAnU3VibWFyaW5lJywgJy5wMi1zdWJtYXJpbmUnKSk7XHJcbiAgcDJTdWJtYXJpbmVWZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBBY3RpdmF0ZVBsYWNlbWVudChwbGF5ZXIyLCBwMkNlbGxzLCAzLCAnU3VibWFyaW5lJywgJy5wMi1zdWJtYXJpbmUnLCAndmVyJykpO1xyXG4gIGNvbnN0IHAyRGVzdHJveWVySG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnAyLWRlc3Ryb3llciAuaG9yJyk7XHJcbiAgY29uc3QgcDJEZXN0cm95ZXJWZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucDItZGVzdHJveWVyIC52ZXInKTtcclxuICBwMkRlc3Ryb3llckhvci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IEFjdGl2YXRlUGxhY2VtZW50KHBsYXllcjIsIHAyQ2VsbHMsIDIsICdEZXN0cm95ZXInLCAnLnAyLWRlc3Ryb3llcicpKTtcclxuICBwMkRlc3Ryb3llclZlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IEFjdGl2YXRlUGxhY2VtZW50KHBsYXllcjIsIHAyQ2VsbHMsIDIsICdEZXN0cm95ZXInLCAnLnAyLWRlc3Ryb3llcicsICd2ZXInKSk7XHJcbn1cclxuXHJcbi8vIEFjdGl2YXRlIGNsaWNrIG9uIG93biBib2FyZCB0byBwbGFjZSBzaGlwc1xyXG5mdW5jdGlvbiBBY3RpdmF0ZVBsYWNlbWVudCAocGxheWVyLCBjZWxsc0Fyciwgc2l6ZSwgc2hpcE5hbWUsIGRvbUVsZW1lbnQsIG9yaWVudGF0aW9uID0gJ2hvcicpIHtcclxuICBwbGFjZVNoaXBIaWdobGlnaHQocGxheWVyLCBjZWxsc0Fyciwgc2l6ZSwgb3JpZW50YXRpb24pO1xyXG4gIHBsYWNlU2hpcENsaWNrKHBsYXllciwgY2VsbHNBcnIsIHNpemUsIHNoaXBOYW1lLCBkb21FbGVtZW50LCBvcmllbnRhdGlvbik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHBsYWNlU2hpcEhpZ2hsaWdodCAocGxheWVyLCBjZWxsc0Fyciwgc2l6ZSwgb3JpZW50YXRpb24gPSAnaG9yJykge1xyXG4gIGxldCBjb2xvcmVkQ2VsbDtcclxuICBjZWxsc0Fyci5mb3JFYWNoKGVsID0+IHtcclxuICAgIGlmIChvcmllbnRhdGlvbiA9PT0gJ2hvcicpIHtcclxuICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgKCkgPT4geyAgICBcclxuICAgICAgICBjb25zdCBzdGFydGluZ1kgPSBlbC5jbGFzc05hbWUuc2xpY2UoMCw3KTtcclxuICAgICAgICBjb25zdCBzdGFydGluZ1ggPSArZWwuY2xhc3NOYW1lLnNsaWNlKDcsOCk7XHJcbiAgICAgICAgaWYgKHBsYXllci5nYW1lYm9hcmQuaXNWYWxpZChzaXplLCBbK3N0YXJ0aW5nWS5zbGljZSgtMSksIHN0YXJ0aW5nWF0pKSB7XHJcbiAgICAgICAgICBmb3IgKGxldCBpID0gc3RhcnRpbmdYOyBpIDwgKCtzdGFydGluZ1ggKyBzaXplKTsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbG9yZWRDZWxsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShgJHtzdGFydGluZ1l9JHtpfWApWzBdO1xyXG4gICAgICAgICAgICBjb2xvcmVkQ2VsbC5jbGFzc0xpc3QuYWRkKCdwbGFjaW5nLXNoaXAtY2VsbCcpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBjZWxsc0Fyci5mb3JFYWNoKGVsID0+IGVsLmNsYXNzTGlzdC5yZW1vdmUoJ3BsYWNpbmctc2hpcC1jZWxsJykpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGlmIChzdGFydGluZ1ggKyBzaXplID4gMTApIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IHN0YXJ0aW5nWDsgaSA8IDEwOyBpKyspIHtcclxuICAgICAgICAgICAgICBjb2xvcmVkQ2VsbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoYCR7c3RhcnRpbmdZfSR7aX1gKVswXTtcclxuICAgICAgICAgICAgICBjb2xvcmVkQ2VsbC5jbGFzc0xpc3QuYWRkKCdwbGFjaW5nLWVycm9yJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSBzdGFydGluZ1g7IGkgPCBzdGFydGluZ1ggKyBzaXplOyBpKyspIHtcclxuICAgICAgICAgICAgICBjb2xvcmVkQ2VsbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoYCR7c3RhcnRpbmdZfSR7aX1gKVswXTtcclxuICAgICAgICAgICAgICBjb2xvcmVkQ2VsbC5jbGFzc0xpc3QuYWRkKCdwbGFjaW5nLWVycm9yJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBjZWxsc0Fyci5mb3JFYWNoKGVsID0+IGVsLmNsYXNzTGlzdC5yZW1vdmUoJ3BsYWNpbmctZXJyb3InKSk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgKGUpID0+IHsgICAgXHJcbiAgICAgICAgY29uc3QgWWNvb3JkID0gK2VsLmNsYXNzTmFtZS5zbGljZSg2LDcpO1xyXG4gICAgICAgIGNvbnN0IHN0YXJ0aW5nWCA9ICtlbC5jbGFzc05hbWUuc2xpY2UoNyw4KTtcclxuICAgICAgICBjb25zdCBjZWxsTmFtZSA9IGVsLmNsYXNzTmFtZS5zbGljZSgwLDYpO1xyXG4gICAgICAgIGlmIChwbGF5ZXIuZ2FtZWJvYXJkLmlzVmFsaWQoc2l6ZSwgW1ljb29yZCwgc3RhcnRpbmdYXSwgJ3ZlcicpKSB7XHJcbiAgICAgICAgICBmb3IgKGxldCBpID0gWWNvb3JkOyBpIDwgKFljb29yZCArIHNpemUpOyBpKyspIHtcclxuICAgICAgICAgICAgY29sb3JlZENlbGwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGAke2NlbGxOYW1lfSR7aX0ke3N0YXJ0aW5nWH1gKVswXTtcclxuICAgICAgICAgICAgY29sb3JlZENlbGwuY2xhc3NMaXN0LmFkZCgncGxhY2luZy1zaGlwLWNlbGwnKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgKGUpID0+IHtcclxuICAgICAgICAgICAgY2VsbHNBcnIuZm9yRWFjaChlbCA9PiBlbC5jbGFzc0xpc3QucmVtb3ZlKCdwbGFjaW5nLXNoaXAtY2VsbCcpKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBpZiAoWWNvb3JkICsgc2l6ZSA+IDEwKXtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IFljb29yZDsgaSA8IDEwOyBpKyspIHtcclxuICAgICAgICAgICAgICBjb2xvcmVkQ2VsbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoYCR7Y2VsbE5hbWV9JHtpfSR7c3RhcnRpbmdYfWApWzBdO1xyXG4gICAgICAgICAgICAgIGNvbG9yZWRDZWxsLmNsYXNzTGlzdC5hZGQoJ3BsYWNpbmctZXJyb3InKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IFljb29yZDsgaSA8IFljb29yZCArIHNpemU7IGkrKykge1xyXG4gICAgICAgICAgICAgIGNvbG9yZWRDZWxsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShgJHtjZWxsTmFtZX0ke2l9JHtzdGFydGluZ1h9YClbMF07XHJcbiAgICAgICAgICAgICAgY29sb3JlZENlbGwuY2xhc3NMaXN0LmFkZCgncGxhY2luZy1lcnJvcicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIGNlbGxzQXJyLmZvckVhY2goZWwgPT4gZWwuY2xhc3NMaXN0LnJlbW92ZSgncGxhY2luZy1lcnJvcicpKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHBsYWNlU2hpcENsaWNrIChwbGF5ZXIsIGNlbGxzQXJyLCBzaXplLCBzaGlwTmFtZSwgZG9tRWxlbWVudCwgb3JpZW50YXRpb24gPSAnaG9yJykge1xyXG4gIGNlbGxzQXJyLmZvckVhY2goZWwgPT4ge1xyXG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICBjb25zdCB0YXJnZXRDZWxsID0gKGVsLmNsYXNzTmFtZS5zbGljZSg2LCA4KSkuc3BsaXQoJycpO1xyXG4gICAgICBjb25zdCB0YXJnZXRDb29yZGluYXRlcyA9IFsrdGFyZ2V0Q2VsbFswXSwgK3RhcmdldENlbGxbMV1dO1xyXG4gICAgICBwbGF5ZXIuZ2FtZWJvYXJkLnBsYWNlU2hpcChzaXplLCB0YXJnZXRDb29yZGluYXRlcywgc2hpcE5hbWUsIG9yaWVudGF0aW9uKTtcclxuICAgICAgaWYgKHBsYXllciA9PT0gcGxheWVyMSkge1xyXG4gICAgICAgIHAxQ2VsbHMgPSBQb3B1bGF0ZVAxKCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcDJDZWxscyA9IFBvcHVsYXRlUDIoJ3ByaXZhdGVCb2FyZCcpO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IHNoaXBMaXN0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZG9tRWxlbWVudCk7XHJcbiAgICAgIC8vc2hpcExpc3ROYW1lLnN0eWxlLmNvbG9yID0gJ2dyZXknO1xyXG4gICAgICBzaGlwTGlzdE5hbWUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgY29uc3QgaG9yQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgJHtkb21FbGVtZW50fSAgLmhvcmApO1xyXG4gICAgICBjb25zdCB2ZXJCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAke2RvbUVsZW1lbnR9ICAudmVyYCk7XHJcbiAgICAgIGhvckJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICB2ZXJCdXR0b24uc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgdXBkYXRlU3RhcnRCdXR0b24oKTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiB1cGRhdGVTdGFydEJ1dHRvbiAoKSB7XHJcbiAgaWYgKGdhbWVNb2RlID09PSAnY29tJyAmJiBwbGF5ZXIxLmdhbWVib2FyZC5zaGlwTGlzdC5sZW5ndGggPT09IDUpIHtcclxuICAgIHN0YXJ0X2dhbWVfYnV0dG9uLmRpc2FibGVkID0gZmFsc2U7XHJcbiAgICBzdGFydF9nYW1lX2J1dHRvbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnIzgwYzE4MCc7XHJcbiAgfVxyXG4gIGlmIChnYW1lTW9kZSA9PT0gJ3B2cCcgJiYgcGxheWVyMS5nYW1lYm9hcmQuc2hpcExpc3QubGVuZ3RoID09PSA1ICYmIGFsbFNoaXBzUGxhY2VkID09PSBmYWxzZSkge1xyXG4gICAgc3RhcnRfZ2FtZV9idXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgIHN0YXJ0X2dhbWVfYnV0dG9uLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjZmZlOThhJztcclxuICAgIGFsbFNoaXBzUGxhY2VkID0gdHJ1ZTtcclxuICB9IGVsc2UgaWYgKGdhbWVNb2RlID09PSAncHZwJyAmJiBwbGF5ZXIxLmdhbWVib2FyZC5zaGlwTGlzdC5sZW5ndGggPT09IDUgJiYgcGxheWVyMi5nYW1lYm9hcmQuc2hpcExpc3QubGVuZ3RoID09PSA1KSB7XHJcbiAgICBzdGFydF9nYW1lX2J1dHRvbi5kaXNhYmxlZCA9ICBmYWxzZTtcclxuICAgIHN0YXJ0X2dhbWVfYnV0dG9uLnRleHRDb250ZW50ID0gJ1N0YXJ0IGdhbWUnO1xyXG4gICAgc3RhcnRfZ2FtZV9idXR0b24uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyM4MGMxODAnO1xyXG4gIH1cclxufVxyXG5cclxuXHJcblxyXG4vLyBHYW1lIGZsb3cgZnVuY3Rpb25zXHJcbmZ1bmN0aW9uIFN0YXJ0R2FtZSAoKSB7XHJcbiAgLy8gQ2hlY2sgaWYgYWxsIHNoaXBzIGhhdmUgYmVlbiBwbGFjZWQgYmVmb3JlIGxhdW5jaGluZyB0aGUgZ2FtZVxyXG4gIGlmIChwbGF5ZXIxLmdhbWVib2FyZC5zaGlwTGlzdC5sZW5ndGggIT09IDUpIHtcclxuICAgIHRocm93IG5ldyBFcnJvcignWW91IG11c3Qgc3RpbGwgcGxhY2UgcGFzdHJpZXMhJyk7XHJcbiAgfSBlbHNlIHtcclxuICAgIHN0YXJ0X2dhbWVfYnV0dG9uLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICBzdGFydF9nYW1lX2J1dHRvbi5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICBzdGFydF9nYW1lX2J1dHRvbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnYnV0dG9uZmFjZSc7XHJcbiAgICBJbml0aWFsaXplVHVybihjdXJyZW50UGxheWVyKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIEluaXRpYWxpemVUdXJuIChjdXJyZW50UGxheWVyKSB7XHJcbiAgVXBkYXRlSW5mb0Rpc3BsYXkoKTtcclxuICBpZiAoZ2FtZU1vZGUgPT09ICdjb20nKSB7XHJcbiAgICBwMUNlbGxzID0gUG9wdWxhdGVQMSgpO1xyXG4gICAgcDJDZWxscyA9IFBvcHVsYXRlUDIoKTtcclxuICAgIGlmIChjdXJyZW50UGxheWVyID09PSAncGxheWVyMScpIHtcclxuICAgICAgcDFDZWxscyA9IFBvcHVsYXRlUDEoJ3ByaXZhdGVCb2FyZCcpO1xyXG4gICAgICBwMkNlbGxzID0gUG9wdWxhdGVQMigncHVibGljQm9hcmQnKTtcclxuICAgICAgQWN0aXZhdGVBdHRhY2tPbihwMkNlbGxzLCBwbGF5ZXIxLCBwbGF5ZXIyKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbXB1dGVyQXR0YWNrKCk7IFxyXG4gICAgfVxyXG4gIH0gZWxzZSB7XHJcbiAgICBQYXNzVHVybk1vZGFsKCk7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFzcy10dXJuX2NvbmZpcm0tYnV0dG9uJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgIENsb3NlTW9kYWwoJ3Bhc3MtdHVybl9tb2RhbCcpO1xyXG4gICAgICBpZiAoY3VycmVudFBsYXllciA9PT0gJ3BsYXllcjEnKSB7XHJcbiAgICAgICAgcDFDZWxscyA9IFBvcHVsYXRlUDEoJ3ByaXZhdGVCb2FyZCcpO1xyXG4gICAgICAgIHAyQ2VsbHMgPSBQb3B1bGF0ZVAyKCdwdWJsaWNCb2FyZCcpO1xyXG4gICAgICAgIEFjdGl2YXRlQXR0YWNrT24ocDJDZWxscywgcGxheWVyMSwgcGxheWVyMik7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcDFDZWxscyA9IFBvcHVsYXRlUDEoJ3B1YmxpY0JvYXJkJyk7XHJcbiAgICAgICAgcDJDZWxscyA9IFBvcHVsYXRlUDIoJ3ByaXZhdGVCb2FyZCcpO1xyXG4gICAgICAgIEFjdGl2YXRlQXR0YWNrT24ocDFDZWxscywgcGxheWVyMiwgcGxheWVyMSk7IFxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbi8vIFBvcHVsYXRlIHBsYXllciAxIGJvYXJkXHJcbmZ1bmN0aW9uIFBvcHVsYXRlUDEgKGJvYXJkID0gJ3ByaXZhdGVCb2FyZCcpIHtcclxuICBjb25zdCB0YXJnZXRCb2FyZCA9IHBsYXllcjEuZ2FtZWJvYXJkW2JvYXJkXTtcclxuICBwbGF5ZXIxX2JvYXJkLnRleHRDb250ZW50ID0gJyc7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XHJcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqKyspIHtcclxuICAgICAgbGV0IGNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgY2VsbC50ZXh0Q29udGVudCA9IHRhcmdldEJvYXJkW2ldW2pdO1xyXG4gICAgICBpZiAoY2VsbC50ZXh0Q29udGVudCA9PT0gJ1gnKSB7XHJcbiAgICAgICAgY2VsbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI2M4NDc3MSc7XHJcbiAgICAgICAgY2VsbC5zdHlsZS5jb2xvciA9ICcjZmZmZmZmJztcclxuICAgICAgfSBlbHNlIGlmIChjZWxsLnRleHRDb250ZW50ID09PSAnficpIHtcclxuICAgICAgICBjZWxsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdyZ2JhKDE5MiwgMTg2LCAxODgsIDAuOCknO1xyXG4gICAgICAgIGNlbGwuc3R5bGUuY29sb3IgPSAnI2ZmZmZmZic7XHJcbiAgICAgIH0gZWxzZSBpZiAoY2VsbC50ZXh0Q29udGVudCkge1xyXG4gICAgICAgIGNlbGwudGV4dENvbnRlbnQgPSBg4paiYDtcclxuICAgICAgICBjZWxsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjZmZlOThhJztcclxuICAgICAgICBjZWxsLnN0eWxlLmNvbG9yID0gJyM3ODJiNDQnO1xyXG4gICAgICB9XHJcbiAgICAgIGNlbGwuY2xhc3NOYW1lID0gYGNlbGwxICR7aX0ke2p9YDtcclxuICAgICAgcGxheWVyMV9ib2FyZC5hcHBlbmRDaGlsZChjZWxsKTtcclxuICAgIH0gIFxyXG4gIH1cclxuICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNlbGwxJyk7XHJcbn1cclxuXHJcbi8vIFBvcHVsYXRlIHBsYXllciAyIChjb21wdXRlcikgYm9hcmQsIHVzaW5nIHRoZSBwdWJsaWNCb2FyZCBrZXkgdG8ga2VlcCB1bmRpc2NvdmVyZWQgc3F1YXJlcyBlbXB0eVxyXG5mdW5jdGlvbiBQb3B1bGF0ZVAyIChib2FyZCA9ICdwdWJsaWNCb2FyZCcpIHtcclxuICBjb25zdCB0YXJnZXRCb2FyZCA9IHBsYXllcjIuZ2FtZWJvYXJkW2JvYXJkXTtcclxuICBwbGF5ZXIyX2JvYXJkLnRleHRDb250ZW50ID0gJyc7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XHJcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqKyspIHtcclxuICAgICAgbGV0IGNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgY2VsbC50ZXh0Q29udGVudCA9IHRhcmdldEJvYXJkW2ldW2pdO1xyXG4gICAgICBpZiAoY2VsbC50ZXh0Q29udGVudCA9PT0gJ1gnKSB7XHJcbiAgICAgICAgY2VsbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI2M4NDc3MSc7XHJcbiAgICAgICAgY2VsbC5zdHlsZS5jb2xvciA9ICcjZmZmZmZmJztcclxuICAgICAgfSBlbHNlIGlmIChjZWxsLnRleHRDb250ZW50ID09PSAnficpIHtcclxuICAgICAgICBjZWxsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdyZ2JhKDE5MiwgMTg2LCAxODgsIDAuOCknO1xyXG4gICAgICAgIGNlbGwuc3R5bGUuY29sb3IgPSAnI2ZmZmZmZic7XHJcbiAgICAgIH0gZWxzZSBpZiAoY2VsbC50ZXh0Q29udGVudCkge1xyXG4gICAgICAgIGNlbGwudGV4dENvbnRlbnQgPSBg4paiYDtcclxuICAgICAgICBjZWxsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjZmZlOThhJztcclxuICAgICAgICBjZWxsLnN0eWxlLmNvbG9yID0gJyM3ODJiNDQnO1xyXG4gICAgICB9XHJcbiAgICAgIGNlbGwuY2xhc3NOYW1lID0gYGNlbGwyICR7aX0ke2p9YDtcclxuICAgICAgcGxheWVyMl9ib2FyZC5hcHBlbmRDaGlsZChjZWxsKTtcclxuICAgIH0gIFxyXG4gIH1cclxuICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNlbGwyJyk7XHJcbn1cclxuXHJcbi8vIEFjdGl2YXRlIGF0dGFjayBvbiBvbmUgcGxheWVyIGJvYXJkIGF0IGEgdGltZSwgd29ya3MgZm9yIFBWUFxyXG5mdW5jdGlvbiBBY3RpdmF0ZUF0dGFja09uIChjZWxsc0FyciwgYXR0YWNrZXIsIGRlZmVuZGVyKSB7XHJcbiAgY2VsbHNBcnIuZm9yRWFjaChlbCA9PiB7XHJcbiAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgIGNvbnN0IHRhcmdldENlbGwgPSAoZWwuY2xhc3NOYW1lLnNsaWNlKC0yKSkuc3BsaXQoJycpO1xyXG4gICAgICBhdHRhY2tlci5hdHRhY2soZGVmZW5kZXIsIHRhcmdldENlbGxbMF0sIHRhcmdldENlbGxbMV0pO1xyXG4gICAgICAvLyBSZXZlYWwgc3F1YXJlIHdoZW4gYXR0YWNrZWRcclxuICAgICAgaWYgKGN1cnJlbnRQbGF5ZXIgPT09ICdwbGF5ZXIxJykge1xyXG4gICAgICAgIGlmIChkZWZlbmRlci5nYW1lYm9hcmQucHJpdmF0ZUJvYXJkW3RhcmdldENlbGxbMF1dW3RhcmdldENlbGxbMV1dID09PSAnWCcpIHtcclxuICAgICAgICAgIGRlZmVuZGVyLmdhbWVib2FyZC5wdWJsaWNCb2FyZFt0YXJnZXRDZWxsWzBdXVt0YXJnZXRDZWxsWzFdXSA9ICdYJztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgZGVmZW5kZXIuZ2FtZWJvYXJkLnB1YmxpY0JvYXJkW3RhcmdldENlbGxbMF1dW3RhcmdldENlbGxbMV1dID0gJ34nO1xyXG4gICAgICAgIH1cclxuICAgICAgICBQb3B1bGF0ZVAyKCk7XHJcbiAgICAgICAgY3VycmVudFBsYXllciA9ICdwbGF5ZXIyJztcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBpZiAoZGVmZW5kZXIuZ2FtZWJvYXJkLnByaXZhdGVCb2FyZFt0YXJnZXRDZWxsWzBdXVt0YXJnZXRDZWxsWzFdXSA9PT0gJ1gnKSB7XHJcbiAgICAgICAgICBkZWZlbmRlci5nYW1lYm9hcmQucHVibGljQm9hcmRbdGFyZ2V0Q2VsbFswXV1bdGFyZ2V0Q2VsbFsxXV0gPSAnWCc7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGRlZmVuZGVyLmdhbWVib2FyZC5wdWJsaWNCb2FyZFt0YXJnZXRDZWxsWzBdXVt0YXJnZXRDZWxsWzFdXSA9ICd+JztcclxuICAgICAgICB9XHJcbiAgICAgICAgUG9wdWxhdGVQMSgpO1xyXG4gICAgICAgIGN1cnJlbnRQbGF5ZXIgPSAncGxheWVyMSc7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKCF3aW5DaGVjaygpKSB7XHJcbiAgICAgICAgSW5pdGlhbGl6ZVR1cm4oY3VycmVudFBsYXllcik7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgR2FtZU92ZXJNb2RhbCgpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9KTtcclxufVxyXG5cclxuLy8gQ29tcHV0ZXIgYXR0YWNrXHJcbmZ1bmN0aW9uIGNvbXB1dGVyQXR0YWNrICgpIHtcclxuICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgIHBsYXllcjIuY29tcHV0ZXJBdHRhY2socGxheWVyMSk7XHJcbiAgICBpZiAoIXdpbkNoZWNrKCkpIHtcclxuICAgICAgY3VycmVudFBsYXllciA9ICdwbGF5ZXIxJztcclxuICAgICAgSW5pdGlhbGl6ZVR1cm4oY3VycmVudFBsYXllcik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBHYW1lT3Zlck1vZGFsKCk7XHJcbiAgICB9XHJcbiAgfSwgJzEwMDAnKTtcclxufVxyXG5cclxuLy8gQ2hlY2sgd2luIGNvbmRpdGlvblxyXG5mdW5jdGlvbiB3aW5DaGVjayAoKSB7XHJcbiAgaWYgKHBsYXllcjEuZ2FtZWJvYXJkLmdldFN0YXR1cygpIHx8IHBsYXllcjIuZ2FtZWJvYXJkLmdldFN0YXR1cygpKSB7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFVwZGF0ZVNjb3JlIChwbGF5ZXIpIHtcclxuICBpZiAocGxheWVyID09PSBwbGF5ZXIxKSB7XHJcbiAgICBwbGF5ZXJzU2NvcmVzWzBdKys7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxheWVyMS1zY29yZScpLnRleHRDb250ZW50ID0gYFNjb3JlOiAke3BsYXllcnNTY29yZXNbMF19YDtcclxuICB9IGVsc2Uge1xyXG4gICAgcGxheWVyc1Njb3Jlc1sxXSsrO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYXllcjItc2NvcmUnKS50ZXh0Q29udGVudCA9IGBTY29yZTogJHtwbGF5ZXJzU2NvcmVzWzFdfWA7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBEaXNwbGF5IGNvbnRyb2xsZXJcclxuZnVuY3Rpb24gVXBkYXRlSW5mb0Rpc3BsYXkgKCkge1xyXG4gIGFjdGlvbl9pbmZvLnRleHRDb250ZW50ID0gY3VycmVudFBsYXllciA9PT0gJ3BsYXllcjEnID8gYCR7cGxheWVyMS5wbGF5ZXJOYW1lfSdzIHR1cm5gIDogYCR7cGxheWVyMi5wbGF5ZXJOYW1lfSdzIHR1cm5gO1xyXG59XHJcblxyXG4vLyBUZXN0IGJ1dHRvbnNcclxuLypwbGF5ZXIxX2xvZy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICBjdXJyZW50UGxheWVyID0gJ3BsYXllcjEnO1xyXG4gIEdhbWVPdmVyTW9kYWwoKTtcclxufSk7XHJcblxyXG5wbGF5ZXIyX2xvZy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICBjdXJyZW50UGxheWVyID0gJ3BsYXllcjInO1xyXG4gIEdhbWVPdmVyTW9kYWwoKTtcclxufSk7Ki9cclxuXHJcblxyXG4vLyBST0FETUFQXHJcbi8vIFJldGlyZXIgbWVzc2FnZXMgZCdlcnJldXJzIGRlIGxhIGNvbnNvbGVcclxuLy8gQWZmaWNoZXIgbGEgbGlzdGUgZGVzIG5hdmlyZXMgcGVuZGFudCBsZSBqZXUsIHBvdXIgY29ubmHDrnRyZSBsJ8OpdGF0IGRlIGNoYWN1biAoY291bMOpL3BhcyBjb3Vsw6kpXHJcbi8vIE5ldHRveWVyIGRvc3NpZXIgaW1hZ2VzXHJcbi8vIFJldGlyZXIgYm91dG9ucyBkZSB0ZXN0XHJcbi8vIE5ldHRveWFnZSBkdSBjb2RlIDogY29tbWVudGFpcmVzLCB2YXJpYWJsZXMgbm9uIHV0aWxpc8OpZXNcclxuLy8gUkVBRE1FLm1kXHJcblxyXG4vLyBCVUdTXHJcbi8vIEJ1ZyBkJ2FmZmljaGFnZSBsb3JzcXUnb24gY2xpcXVlIHN1ciB1biBhdXRyZSBuYXZpcmUgYXZhbnQgc2FucyBhdm9pciBjbGlxdcOpIGF1IHByw6lhbGFibGUgcG91ciBwbGFjZXIgbGUgcHJlbWllciA6IHJlbW92ZSBldmVudExpc3RlbmVyIGVuIGTDqWJ1dCBkZSBmb25jdGlvbiA/XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==