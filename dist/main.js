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

/***/ "./src/sounds/game_start.mp3":
/*!***********************************!*\
  !*** ./src/sounds/game_start.mp3 ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "src/sounds/game_start.mp3");

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
/* harmony import */ var _sounds_game_start_mp3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sounds/game_start.mp3 */ "./src/sounds/game_start.mp3");





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

//const game_start_sound = new soundEffect("require('.dist/sounds/game_start.mp3')");

game_start_sound = new soundEffect(_sounds_game_start_mp3__WEBPACK_IMPORTED_MODULE_4__["default"]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsUUFBUTtBQUMxQixvQkFBb0IsUUFBUTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsRUFBRSxFQUFFLEVBQUU7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsUUFBUTtBQUMxQixvQkFBb0IsUUFBUTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsRUFBRSxFQUFFLEVBQUU7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVELE1BQU07QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxRUFBcUUsaUJBQWlCO0FBQ3RGLElBQUk7QUFDSjtBQUNBLHFFQUFxRSxpQkFBaUI7QUFDdEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZEQUE2RCxtQkFBbUIsY0FBYyxtQkFBbUI7QUFDakg7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFBZ0QsT0FBTyxHQUFHLFNBQVM7QUFDbkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQzBDO0FBQzFDLG1DQUFtQyw4REFBRztBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxFQUFFO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXR0ZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxldHRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGV0dGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL2JhdHRsZXR0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXR0ZS8uL3NyYy9zb3VuZHMvZ2FtZV9zdGFydC5tcDMiLCJ3ZWJwYWNrOi8vYmF0dGxldHRlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2JhdHRsZXR0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGV0dGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXR0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGV0dGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxldHRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxldHRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxldHRlLy4vc3JjL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGV0dGUvLi9zcmMvcGxheWVyLmpzIiwid2VicGFjazovL2JhdHRsZXR0ZS8uL3NyYy9zaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXR0ZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGV0dGUvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxldHRlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGV0dGUvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9iYXR0bGV0dGUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGV0dGUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGV0dGUvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vYmF0dGxldHRlL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL2JhdHRsZXR0ZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vYmF0dGxldHRlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9kaXN0L2ltYWdlcy9iYWNrZ3JvdW5kLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4uL2Rpc3QvaW1hZ2VzL2xvZ28tYmlnLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Q29va2llJmZhbWlseT1PcGVuK1NhbnM6aXRhbCx3Z2h0QDAsNDAwOzAsNzAwOzEsNDAwJmZhbWlseT1Qb2lyZXQrT25lJmRpc3BsYXk9c3dhcCk7XCJdKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgZm9udC1mYW1pbHk6ICdQb2lyZXQgT25lJywgc2Fucy1zZXJpZjsgfVxcclxcblxcclxcbmh0bWwge1xcclxcbiAgaGVpZ2h0OiAxMDAlOyB9XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGJhY2tncm91bmQ6ICM3ODJiNDQ7XFxyXFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgIzc4MmI0NCwgI2M4NDc3MSk7IH1cXHJcXG5cXHJcXG4uYmFja2dyb3VuZC1pbWFnZSB7XFxyXFxuICB3aWR0aDogMTAwdnc7XFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXHJcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogYm90dG9tIDIwJSBsZWZ0IDA7XFxyXFxuICB6LWluZGV4OiAtMTtcXHJcXG4gIGZpbHRlcjogYmx1cig0cHgpIGdyYXlzY2FsZSgzMCUpOyB9XFxyXFxuXFxyXFxuaGVhZGVyIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgcGFkZGluZzogMCA1MHB4O1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cXHJcXG4gIGhlYWRlciAjbG9nbyB7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXHJcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gICAgaGVpZ2h0OiAxNTBweDtcXHJcXG4gICAgd2lkdGg6IDE1MHB4O1xcclxcbiAgICBtYXJnaW46IDMycHg7IH1cXHJcXG5cXHJcXG5mb290ZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGJvdHRvbTogMDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgcGFkZGluZzogOHB4O1xcclxcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzNCwgMzQsIDM0LCAwLjUpO1xcclxcbiAgY29sb3I6ICNjY2NjY2M7IH1cXHJcXG4gIGZvb3RlciBhIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xcclxcbiAgICBjb2xvcjogI2NjY2NjYztcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lOyB9XFxyXFxuICAgIGZvb3RlciBhOmhvdmVyIHtcXHJcXG4gICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTsgfVxcclxcbiAgZm9vdGVyIC5zb2NpYWwtbGlua3Mge1xcclxcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdhcDogOHB4OyB9XFxyXFxuICAgIGZvb3RlciAuc29jaWFsLWxpbmtzIGEge1xcclxcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICBnYXA6IDhweDsgfVxcclxcbiAgICBmb290ZXIgLnNvY2lhbC1saW5rcyBpbWcge1xcclxcbiAgICAgIHdpZHRoOiAxcmVtOyB9XFxyXFxuXFxyXFxuI25ldy1nYW1lX2J1dHRvbixcXHJcXG4jcHZwLW5ldy1nYW1lX2J1dHRvbiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHdpZHRoOiAxOTBweDtcXHJcXG4gIGNvbG9yOiAjZWVlZWVlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q5N2U5YztcXHJcXG4gIGJvcmRlcjogNHB4IGRvdWJsZSAjNTU1NTU1OyB9XFxyXFxuICAjbmV3LWdhbWVfYnV0dG9uOmhvdmVyLFxcclxcbiAgI3B2cC1uZXctZ2FtZV9idXR0b246aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzg0NzcxOyB9XFxyXFxuICAjbmV3LWdhbWVfYnV0dG9uOmFjdGl2ZSxcXHJcXG4gICNwdnAtbmV3LWdhbWVfYnV0dG9uOmFjdGl2ZSB7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgycHgpOyB9XFxyXFxuICAjbmV3LWdhbWVfYnV0dG9uIGltZyxcXHJcXG4gICNwdnAtbmV3LWdhbWVfYnV0dG9uIGltZyB7XFxyXFxuICAgIGhlaWdodDogMjRweDsgfVxcclxcblxcclxcbiNzdGFydC1nYW1lX2J1dHRvbiB7XFxyXFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDUwMG1zIGVhc2Utb3V0O1xcclxcbiAgZGlzcGxheTogbm9uZTsgfVxcclxcbiAgI3N0YXJ0LWdhbWVfYnV0dG9uOmFjdGl2ZSB7XFxyXFxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcyg4NSUpO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMnB4KTsgfVxcclxcblxcclxcbi5pbmZvLWNvbnRhaW5lciB7XFxyXFxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U4ZTJlNDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBwYWRkaW5nOiAxNnB4O1xcclxcbiAgbWFyZ2luOiAwIDMycHg7XFxyXFxuICBnYXA6IDMycHg7XFxyXFxuICBib3JkZXI6IDEwcHggZG91YmxlICNjODQ3NzE7XFxyXFxuICBib3JkZXItcmFkaXVzOiA3cHg7IH1cXHJcXG4gIC5pbmZvLWNvbnRhaW5lciBidXR0b24ge1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgICBwYWRkaW5nOiA4cHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDsgfVxcclxcblxcclxcbi5nYW1lLW1vZGUtYnV0dG9ucyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgZ2FwOiAyNXB4O1xcclxcbiAgbWFyZ2luLXJpZ2h0OiAxOHB4OyB9XFxyXFxuXFxyXFxuLmJhdHRsZS1pbmZvIHtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAxOHB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGdhcDogMjRweDsgfVxcclxcblxcclxcbi5hY3Rpb24taW5mbyB7XFxyXFxuICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7IH1cXHJcXG5cXHJcXG4uYmF0dGxlZmllbGQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgZ2FwOiA1MHB4OyB9XFxyXFxuXFxyXFxuI3BsYXllcjEtY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBnYXA6IDhweDsgfVxcclxcblxcclxcbiNwbGF5ZXIyLWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xcclxcbiAgZ2FwOiA4cHg7IH1cXHJcXG5cXHJcXG4ucGxheWVyLWluZm8ge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U4ZTJlNDtcXHJcXG4gIHdpZHRoOiAyMzBweDtcXHJcXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XFxyXFxuICBwYWRkaW5nOiAxNnB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xcclxcbiAgYm9yZGVyOiAxMHB4IGRvdWJsZSAjYzg0NzcxOyB9XFxyXFxuXFxyXFxuI3BsYXllcjEtbmFtZSxcXHJcXG4jcGxheWVyMi1uYW1lIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnQ29va2llJywgc2Fucy1zZXJpZjtcXHJcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxNnB4OyB9XFxyXFxuXFxyXFxuI3BsYXllcjItbmFtZSB7XFxyXFxuICB0ZXh0LWFsaWduOiBlbmQ7IH1cXHJcXG5cXHJcXG4jcGxheWVyMS1zY29yZSxcXHJcXG4jcGxheWVyMi1zY29yZSB7XFxyXFxuICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XFxyXFxuICBtYXJnaW4tYm90dG9tOiA4cHg7IH1cXHJcXG5cXHJcXG4uYWN0aW9uLWRlc2NyaXB0b3Ige1xcclxcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmOyB9XFxyXFxuXFxyXFxuI3BsYXllcjEtc2hpcHMsXFxyXFxuI3BsYXllcjItc2hpcHMge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjsgfVxcclxcbiAgI3BsYXllcjEtc2hpcHMgdWwsXFxyXFxuICAjcGxheWVyMi1zaGlwcyB1bCB7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIG1hcmdpbjogMDsgfVxcclxcbiAgI3BsYXllcjEtc2hpcHMgbGksXFxyXFxuICAjcGxheWVyMi1zaGlwcyBsaSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcXHJcXG4gICAgbWFyZ2luOiAxMnB4IDA7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNzgyYjQ0OyB9XFxyXFxuXFxyXFxuLnNoaXAtcGxhY2VtZW50IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47IH1cXHJcXG5cXHJcXG4ub3JpZW50YXRpb24tYnV0dG9ucyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZ2FwOiA4cHg7IH1cXHJcXG4gIC5vcmllbnRhdGlvbi1idXR0b25zIGltZyB7XFxyXFxuICAgIGhlaWdodDogMXJlbTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyOyB9XFxyXFxuXFxyXFxuI3BsYXllcjEtYm9hcmQsXFxyXFxuI3BsYXllcjItYm9hcmQge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7IH1cXHJcXG4gICNwbGF5ZXIxLWJvYXJkIC5lbXB0eS1jZWxsLFxcclxcbiAgI3BsYXllcjItYm9hcmQgLmVtcHR5LWNlbGwge1xcclxcbiAgICBoZWlnaHQ6IDQwcHg7XFxyXFxuICAgIHdpZHRoOiA0MHB4O1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuNDQ1KTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMzIsIDIyNiwgMjI4LCAwLjE1KTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4OyB9XFxyXFxuXFxyXFxuW2NsYXNzXj1cXFwiY2VsbFxcXCJdIHtcXHJcXG4gIGhlaWdodDogNDBweDtcXHJcXG4gIHdpZHRoOiA0MHB4O1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjMyMyk7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIzMiwgMjI2LCAyMjgsIDAuNzUpO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXHJcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDRweDsgfVxcclxcbiAgW2NsYXNzXj1cXFwiY2VsbFxcXCJdOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDIyMywgODcsIDAuOSk7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjsgfVxcclxcblxcclxcbi5wbGFjaW5nLXNoaXAtY2VsbCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjIzLCA4NywgMC45KTsgfVxcclxcblxcclxcbi5wbGFjaW5nLWVycm9yIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAwLCAwLCAwLjQyMyk7IH1cXHJcXG4gIC5wbGFjaW5nLWVycm9yOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDAsIDAsIDAuNDIzKTsgfVxcclxcblxcclxcbi5iYWNrZHJvcCB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIGhlaWdodDogMTAwdmg7XFxyXFxuICB3aWR0aDogMTAwdnc7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIxMSwgMjExLCAyMTEsIDAuNTY0KTsgfVxcclxcblxcclxcbi5nYW1lLW92ZXJfbW9kYWwge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgdG9wOiA1MCU7XFxyXFxuICBsZWZ0OiA1MCU7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXHJcXG4gIGJvcmRlcjogN3B4IGRvdWJsZSAjYzg0NzcxO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZWVlZTtcXHJcXG4gIHotaW5kZXg6IDM7XFxyXFxuICBwYWRkaW5nOiAzcmVtOyB9XFxyXFxuICAuZ2FtZS1vdmVyX21vZGFsIGltZyB7XFxyXFxuICAgIHdpZHRoOiAxMDBweDsgfVxcclxcbiAgLmdhbWUtb3Zlcl9tb2RhbCBidXR0b24ge1xcclxcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7IH1cXHJcXG5cXHJcXG4ucGFzcy10dXJuX21vZGFsIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiA1MHB4O1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgdG9wOiA1MCU7XFxyXFxuICBsZWZ0OiA1MCU7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXHJcXG4gIHdpZHRoOiAzNTBweDtcXHJcXG4gIGhlaWdodDogMjAwcHg7XFxyXFxuICBmb250LXNpemU6IDJyZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlZWVlO1xcclxcbiAgYm9yZGVyOiA0cHggc29saWQgI2M4NDc3MTtcXHJcXG4gIHotaW5kZXg6IDM7IH1cXHJcXG4gIC5wYXNzLXR1cm5fbW9kYWwgcCB7XFxyXFxuICAgIG1hcmdpbjogMDsgfVxcclxcbiAgLnBhc3MtdHVybl9tb2RhbCBidXR0b24ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzg0NzcxO1xcclxcbiAgICBjb2xvcjogI2VlZWVlZTtcXHJcXG4gICAgcGFkZGluZzogOHB4O1xcclxcbiAgICBmb250LXNpemU6IDEuNXJlbTsgfVxcclxcblxcclxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPXN0eWxlLmNzcy5tYXAgKi9cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFHQTtFQUNFLHNCQUFzQjtFQUN0QixxQ0FBcUMsRUFBQTs7QUFHdkM7RUFDRSxZQUFZLEVBQUE7O0FBR2Q7RUFDRSxTQUFTO0VBQ1QsV0FBVztFQUNYLFlBQVk7RUFDWixt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YXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInNyYy9zb3VuZHMvZ2FtZV9zdGFydC5tcDNcIjsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgU2hpcCB9IGZyb20gJy4vc2hpcC5qcyc7XHJcblxyXG5cclxuY29uc3QgR2FtZWJvYXJkID0gKCkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICBwcml2YXRlQm9hcmQ6IFtcclxuICAgICAgWywsLCwsLCwsLF0sXHJcbiAgICAgIFssLCwsLCwsLCxdLFxyXG4gICAgICBbLCwsLCwsLCwsXSxcclxuICAgICAgWywsLCwsLCwsLF0sXHJcbiAgICAgIFssLCwsLCwsLCxdLFxyXG4gICAgICBbLCwsLCwsLCwsXSxcclxuICAgICAgWywsLCwsLCwsLF0sXHJcbiAgICAgIFssLCwsLCwsLCxdLFxyXG4gICAgICBbLCwsLCwsLCwsXSxcclxuICAgICAgWywsLCwsLCwsLF0sXHJcbiAgICBdLFxyXG5cclxuICAgIHB1YmxpY0JvYXJkOiBbXHJcbiAgICAgIFssLCwsLCwsLCxdLFxyXG4gICAgICBbLCwsLCwsLCwsXSxcclxuICAgICAgWywsLCwsLCwsLF0sXHJcbiAgICAgIFssLCwsLCwsLCxdLFxyXG4gICAgICBbLCwsLCwsLCwsXSxcclxuICAgICAgWywsLCwsLCwsLF0sXHJcbiAgICAgIFssLCwsLCwsLCxdLFxyXG4gICAgICBbLCwsLCwsLCwsXSxcclxuICAgICAgWywsLCwsLCwsLF0sXHJcbiAgICAgIFssLCwsLCwsLCxdLFxyXG4gICAgXSxcclxuICAgIFxyXG4gICAgc2hpcExpc3Q6IFtdLFxyXG5cclxuICAgIHBsYWNlU2hpcDogZnVuY3Rpb24gKHNpemUsIHN0YXJ0UG9zLCBzaGlwTmFtZSA9ICdVbm5hbWVkIHNoaXAnLCBkaXJlY3Rpb24gPSAnaG9yJykge1xyXG4gICAgICBpZiAodGhpcy5pc1ZhbGlkKHNpemUsIHN0YXJ0UG9zLCBkaXJlY3Rpb24pID09PSBmYWxzZSkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignQ2Fubm90IHBsYWNlIHNoaXA6IG91dCBvZiBib3VuZHMgb3Igc3BhY2UgYWxyZWFkeSBvY2N1cGllZC4nKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBsZXQgbmV3U2hpcCA9IFNoaXAoc2l6ZSwgc2hpcE5hbWUpO1xyXG4gICAgICAgIHRoaXMuc2hpcExpc3QucHVzaChuZXdTaGlwKTtcclxuICAgICAgICBpZiAoZGlyZWN0aW9uID09PSAnaG9yJykge1xyXG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaXplOyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5wcml2YXRlQm9hcmRbc3RhcnRQb3NbMF1dW3N0YXJ0UG9zWzFdICsgaV0gPSBzaGlwTmFtZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gJ3ZlcicpIHtcclxuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2l6ZTsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMucHJpdmF0ZUJvYXJkW3N0YXJ0UG9zWzBdICsgaV1bc3RhcnRQb3NbMV1dID0gc2hpcE5hbWU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIGNvbXB1dGVyUGxhY2VTaGlwOiBmdW5jdGlvbiAoc2l6ZSwgc2hpcE5hbWUpIHtcclxuICAgICAgbGV0IHJuZFBvcyA9IFtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCksIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKV07XHJcbiAgICAgIGxldCBybmREaXJlY3Rpb24gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyKTtcclxuICAgICAgc3dpdGNoIChybmREaXJlY3Rpb24pIHtcclxuICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICBybmREaXJlY3Rpb24gPSAnaG9yJztcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgMTpcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgcm5kRGlyZWN0aW9uID0gJ3Zlcic7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG5cclxuICAgICAgd2hpbGUgKCF0aGlzLmlzVmFsaWQoc2l6ZSwgcm5kUG9zLCBybmREaXJlY3Rpb24pKSB7XHJcbiAgICAgICAgcm5kUG9zID0gW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKSwgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApXTtcclxuICAgICAgICBybmREaXJlY3Rpb24gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyKTtcclxuICAgICAgICBzd2l0Y2ggKHJuZERpcmVjdGlvbikge1xyXG4gICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICBybmREaXJlY3Rpb24gPSAnaG9yJztcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICBybmREaXJlY3Rpb24gPSAndmVyJztcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHRoaXMucGxhY2VTaGlwKHNpemUsIHJuZFBvcywgc2hpcE5hbWUsIHJuZERpcmVjdGlvbik7XHJcbiAgICB9LFxyXG5cclxuICAgIGlzVmFsaWQ6IGZ1bmN0aW9uIChzaXplLCBzdGFydFBvcywgZGlyZWN0aW9uID0gJ2hvcicpIHtcclxuICAgICAgbGV0IHNpemVDaGVjayA9IHRydWU7XHJcbiAgICAgIGxldCBhdmFpbGFibGVDaGVjayA9IHRydWU7XHJcbiAgICAgIGlmIChkaXJlY3Rpb24gPT09ICdob3InICYmICgoc3RhcnRQb3NbMV0gKyBzaXplIC0gMSkgPiA5KSkge1xyXG4gICAgICAgIHNpemVDaGVjayA9IGZhbHNlO1xyXG4gICAgICB9IGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gJ3ZlcicgJiYgKChzdGFydFBvc1swXSArIHNpemUgLSAxKSA+IDkpKSB7XHJcbiAgICAgICAgc2l6ZUNoZWNrID0gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgICAgbGV0IHRhcmdldEFyciA9IFtdO1xyXG4gICAgICBpZiAoZGlyZWN0aW9uID09PSAnaG9yJykge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2l6ZTsgaSsrKSB7IC8vIGNoZWNrIGlmIGhvcml6b250YWwgcGxhY2VtZW50IGlzIGVtcHR5XHJcbiAgICAgICAgICB0YXJnZXRBcnIucHVzaCh0aGlzLnByaXZhdGVCb2FyZFtzdGFydFBvc1swXV1bc3RhcnRQb3NbMV0gKyBpXSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSBpZiAoc2l6ZUNoZWNrID09PSB0cnVlICYmIGRpcmVjdGlvbiA9PT0gJ3ZlcicpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNpemU7IGkrKykge1xyXG4gICAgICAgICAgdGFyZ2V0QXJyLnB1c2godGhpcy5wcml2YXRlQm9hcmRbc3RhcnRQb3NbMF0gKyBpXVtzdGFydFBvc1sxXV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBhdmFpbGFibGVDaGVjayA9IHRhcmdldEFyci5ldmVyeShlbCA9PiBlbCA9PT0gdW5kZWZpbmVkKTtcclxuICAgICAgcmV0dXJuIChzaXplQ2hlY2sgJiYgYXZhaWxhYmxlQ2hlY2spO1xyXG4gICAgICB9LFxyXG5cclxuICAgIHJlY2VpdmVBdHRhY2s6IGZ1bmN0aW9uICh0YXJnZXRQb3MpIHtcclxuICAgICBpZiAodGhpcy5wcml2YXRlQm9hcmRbdGFyZ2V0UG9zWzBdXVt0YXJnZXRQb3NbMV1dID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgbWlzc19zb3VuZC5wbGF5KCk7XHJcbiAgICAgIHRoaXMucHJpdmF0ZUJvYXJkW3RhcmdldFBvc1swXV1bdGFyZ2V0UG9zWzFdXSA9ICd+JztcclxuICAgICAgcmV0dXJuICdZb3UgbWlzc2VkJztcclxuICAgICB9IGVsc2UgaWYgKHRoaXMucHJpdmF0ZUJvYXJkW3RhcmdldFBvc1swXV1bdGFyZ2V0UG9zWzFdXSA9PT0gJ34nIHx8IHRoaXMucHJpdmF0ZUJvYXJkW3RhcmdldFBvc1swXV1bdGFyZ2V0UG9zWzFdXSA9PT0gJ1gnKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignWW91IGNhbm5vdCBhdHRhY2sgdGhlIHNhbWUgc3BvdCB0d2ljZScpO1xyXG4gICAgIH0gZWxzZSB7XHJcbiAgICAgIGxldCB0YXJnZXQgPSB0aGlzLnNoaXBMaXN0LmZpbmQoZWwgPT4gZWwubmFtZSA9PT0gdGhpcy5wcml2YXRlQm9hcmRbdGFyZ2V0UG9zWzBdXVt0YXJnZXRQb3NbMV1dKTtcclxuICAgICAgdG91Y2hlX3NvdW5kLnBsYXkoKTtcclxuICAgICAgdGFyZ2V0LmhpdHMrKztcclxuICAgICAgdGhpcy5wcml2YXRlQm9hcmRbdGFyZ2V0UG9zWzBdXVt0YXJnZXRQb3NbMV1dID0gJ1gnO1xyXG4gICAgICBpZiAodGFyZ2V0LmlzU3VuaygpKSB7XHJcbiAgICAgICAgcmV0dXJuICdUaGUgc2hpcCBoYXMgc3Vuayc7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiB0YXJnZXQubmFtZSArICcgaGFzIGJlZW4gaGl0LCAnICsgKHRhcmdldC5zaXplIC0gdGFyZ2V0LmhpdHMpICsnIGhpdChzKSBsZWZ0JztcclxuICAgICAgfVxyXG4gICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgZ2V0U3RhdHVzOiBmdW5jdGlvbigpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuc2hpcExpc3QuZXZlcnkoZWwgPT4gZWwuaXNTdW5rKCkpO1xyXG4gICAgfSxcclxuXHJcbiAgfTtcclxufTtcclxuXHJcbmZ1bmN0aW9uIHNvdW5kRWZmZWN0IChzcmMpIHtcclxuICB0aGlzLnNvdW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImF1ZGlvXCIpO1xyXG4gIHRoaXMuc291bmQuc3JjID0gc3JjO1xyXG4gIHRoaXMuc291bmQuc2V0QXR0cmlidXRlKFwicHJlbG9hZFwiLCBcImF1dG9cIik7XHJcbiAgdGhpcy5zb3VuZC5zZXRBdHRyaWJ1dGUoXCJjb250cm9sc1wiLCBcIm5vbmVcIik7XHJcbiAgdGhpcy5zb3VuZC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLnNvdW5kKTtcclxuICB0aGlzLnBsYXkgPSBmdW5jdGlvbigpe1xyXG4gICAgdGhpcy5zb3VuZC5wbGF5KCk7XHJcbiAgfTtcclxuICB0aGlzLnN0b3AgPSBmdW5jdGlvbigpe1xyXG4gICAgdGhpcy5zb3VuZC5wYXVzZSgpO1xyXG4gIH07XHJcbn1cclxuXHJcbmNvbnN0IHRvdWNoZV9zb3VuZCA9IG5ldyBzb3VuZEVmZmVjdCgnLi4vZGlzdC9zb3VuZHMvdG91Y2hlLm1wMycpO1xyXG5jb25zdCBtaXNzX3NvdW5kID0gbmV3IHNvdW5kRWZmZWN0KCcuLi9kaXN0L3NvdW5kcy9taXNzLm1wMycpO1xyXG5cclxuXHJcbmV4cG9ydCB7IEdhbWVib2FyZCB9OyIsImltcG9ydCB7IEdhbWVib2FyZCB9IGZyb20gXCIuL2dhbWVib2FyZFwiO1xyXG5cclxuY29uc3QgUGxheWVyID0gKG5hbWUpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgcGxheWVyTmFtZTogbmFtZSxcclxuXHJcbiAgICBnYW1lYm9hcmQ6IEdhbWVib2FyZCgpLFxyXG5cclxuICAgIGF0dGFjazogZnVuY3Rpb24gKHBsYXllciwgeCwgeSkge1xyXG4gICAgICBwbGF5ZXIuZ2FtZWJvYXJkLnJlY2VpdmVBdHRhY2soW3gsIHldKTtcclxuICAgIH0sXHJcblxyXG4gICAgY29tcHV0ZXJBdHRhY2s6IGZ1bmN0aW9uIChwbGF5ZXIpIHtcclxuICAgICAgbGV0IGNvb3JkID0gZmluZFZhbGlkTW92ZShwbGF5ZXIuZ2FtZWJvYXJkLnByaXZhdGVCb2FyZCk7XHJcbiAgICAgIHRoaXMuYXR0YWNrKHBsYXllciwgY29vcmRbMF0sIGNvb3JkWzFdKTtcclxuICAgIH0sXHJcbiAgfTtcclxufTtcclxuXHJcbmZ1bmN0aW9uIHJuZENvb3JkaW5hdGVzICgpIHtcclxuICBsZXQgeCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcclxuICBsZXQgeSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcclxuICByZXR1cm4gW1t4XSxbeV1dO1xyXG59XHJcblxyXG5mdW5jdGlvbiBmaW5kVmFsaWRNb3ZlIChib2FyZCkge1xyXG4gIC8vIEdlbmVyYXRlIHR3byByYW5kb20gbnVtYmVyIGJldHdlZW4gMC05XHJcbiAgbGV0IGNvb3JkaW5hdGVzID0gcm5kQ29vcmRpbmF0ZXMoKTtcclxuICAvLyBjb250aW51ZSB3aGlsZSB0aGUgbW92ZSBpcyBpbnZhbGlkLCBsYXVuY2ggYXR0YWNrIHdoZW4gZmluZGluZyBhIHZhbGlkIG1vdmVcclxuICB3aGlsZSAoYm9hcmRbY29vcmRpbmF0ZXNbMF1dW2Nvb3JkaW5hdGVzWzFdXSA9PT0gJ1gnIHx8IGJvYXJkW2Nvb3JkaW5hdGVzWzBdXVtjb29yZGluYXRlc1sxXV0gPT09ICd+Jykge1xyXG4gICAgY29vcmRpbmF0ZXMgPSBybmRDb29yZGluYXRlcygpO1xyXG4gIH1cclxuICByZXR1cm4gY29vcmRpbmF0ZXM7XHJcbn1cclxuXHJcbmV4cG9ydCB7IFBsYXllciB9OyIsImNvbnN0IFNoaXAgPSAoc2l6ZSwgbmFtZSA9ICdVbm5hbWVkIHNoaXAnLCBpZCA9IHVuZGVmaW5lZCkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICBuYW1lLFxyXG4gICAgc2l6ZSxcclxuICAgIGhpdHM6IDAsXHJcbiAgICBoaXQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgICB0aGlzLmhpdHMrKztcclxuICAgIH0sXHJcblxyXG4gICAgaXNTdW5rOiBmdW5jdGlvbigpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuaGl0cyA+PSB0aGlzLnNpemUgPyB0cnVlIDogZmFsc2U7XHJcbiAgICB9LFxyXG5cclxuICAgIGlkLFxyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgeyBTaGlwIH07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuaW1wb3J0IHsgU2hpcCB9IGZyb20gJy4vc2hpcC5qcyc7XHJcbmltcG9ydCB7IEdhbWVib2FyZCB9IGZyb20gJy4vZ2FtZWJvYXJkJztcclxuaW1wb3J0IHsgUGxheWVyIH0gZnJvbSAnLi9wbGF5ZXInO1xyXG5cclxuLy8gR29iYWwgdmFyaWFibGVzXHJcbmxldCBwbGF5ZXIxO1xyXG5sZXQgcGxheWVyMjtcclxubGV0IHAxQ2VsbHM7XHJcbmxldCBwMkNlbGxzO1xyXG5sZXQgZ2FtZU1vZGU7XHJcbmxldCBjdXJyZW50UGxheWVyID0gJ3BsYXllcjEnO1xyXG5sZXQgYWxsU2hpcHNQbGFjZWQ9IGZhbHNlO1xyXG4gIC8vIFVzaW5nIGdsb2JhbCB2YXJpYWJsZXMgdG8ga2VlcCB0aGUgc2NvcmUgZnJvbSBvbmUgYmF0dGxlIHRvIHRoZSBuZXh0OyByZXR1cm4gdG8gMCBvbiBwYWdlIHJlZnJlc2hcclxubGV0IHBsYXllcnNTY29yZXMgPSBbMCwgMF07XHJcbmxldCBwbGF5ZXIyU2NvcmUgPSAwO1xyXG5cclxuLy8gRE9NIEVsZW1lbnRzXHJcbmNvbnN0IG5ld19nYW1lX2J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXctZ2FtZV9idXR0b24nKTtcclxuY29uc3QgcHZwX25ld19nYW1lX2J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwdnAtbmV3LWdhbWVfYnV0dG9uJyk7XHJcbmNvbnN0IHN0YXJ0X2dhbWVfYnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0YXJ0LWdhbWVfYnV0dG9uJyk7XHJcblxyXG5jb25zdCBwbGF5ZXIxX2JvYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYXllcjEtYm9hcmQnKTtcclxuY29uc3QgcGxheWVyMV9zaGlwcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGF5ZXIxLXNoaXBzJyk7XHJcbmNvbnN0IHBsYXllcjJfYm9hcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxheWVyMi1ib2FyZCcpO1xyXG5jb25zdCBwbGF5ZXIyX3NoaXBzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYXllcjItc2hpcHMnKTtcclxuY29uc3QgcGxheWVyMV9sb2cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxheWVyMS1sb2cnKTtcclxuY29uc3QgcGxheWVyMl9sb2cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxheWVyMi1sb2cnKTtcclxuY29uc3QgYWN0aW9uX2luZm8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWN0aW9uLWluZm8nKTtcclxuXHJcblxyXG4vLyBNb2RhbHMgZGlzcGxheVxyXG5jb25zdCBjbG9zZU1vZGFsQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNsb3NlLW1vZGFsX2J1dHRvbicpO1xyXG5jbG9zZU1vZGFsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gQ2xvc2VNb2RhbCgnZ2FtZS1vdmVyX21vZGFsJykpO1xyXG5cclxuZnVuY3Rpb24gT3Blbk1vZGFsKG1vZGFsKSB7XHJcbiAgY29uc3QgYmFja2Ryb3AgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmFja2Ryb3AnKTtcclxuICBiYWNrZHJvcC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICBiYWNrZHJvcC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IENsb3NlTW9kYWwobW9kYWwpKTtcclxuICBjb25zdCBtb2RhbFRvT3BlbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke21vZGFsfWApO1xyXG4gIG1vZGFsVG9PcGVuLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG59XHJcblxyXG5mdW5jdGlvbiBDbG9zZU1vZGFsKG1vZGFsKSB7XHJcbiAgY29uc3QgYmFja2Ryb3AgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmFja2Ryb3AnKTtcclxuICBiYWNrZHJvcC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gIGNvbnN0IG1vZGFsVG9DbG9zZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke21vZGFsfWApO1xyXG4gIG1vZGFsVG9DbG9zZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG59XHJcblxyXG5mdW5jdGlvbiBHYW1lT3Zlck1vZGFsICgpIHtcclxuICB2aWN0b3J5X3NvdW5kLnBsYXkoKTtcclxuICBjb25zdCBiYWNrZHJvcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5iYWNrZHJvcCcpO1xyXG4gIGJhY2tkcm9wLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gIGJhY2tkcm9wLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gQ2xvc2VNb2RhbCgnZ2FtZS1vdmVyX21vZGFsJykpO1xyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lLW92ZXJfbW9kYWwnKS5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xyXG4gIGlmIChjdXJyZW50UGxheWVyID09PSAncGxheWVyMScpIHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lLW92ZXJfbW9kYWwgPiBwJykudGV4dENvbnRlbnQgPSAnUGxheWVyIDIgd2lucyEnO1xyXG4gICAgYWN0aW9uX2luZm8udGV4dENvbnRlbnQgPSAnUGxheWVyIDIgd2lucyEnO1xyXG4gICAgVXBkYXRlU2NvcmUocGxheWVyMik7XHJcbiAgfSBlbHNlIHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lLW92ZXJfbW9kYWwgPiBwJykudGV4dENvbnRlbnQgPSAnUGxheWVyIDEgd2lucyEnO1xyXG4gICAgYWN0aW9uX2luZm8udGV4dENvbnRlbnQgPSAnUGxheWVyIDEgd2lucyEnO1xyXG4gICAgVXBkYXRlU2NvcmUocGxheWVyMSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBQYXNzVHVybk1vZGFsICgpIHtcclxuICB0dXJuX2NoYW5nZV9zb3VuZC5wbGF5KCk7XHJcbiAgcDFDZWxscyA9IFBvcHVsYXRlUDEoJ3B1YmxpY0JvYXJkJyk7XHJcbiAgcDJDZWxscyA9IFBvcHVsYXRlUDIoJ3B1YmxpY0JvYXJkJyk7XHJcbiAgY29uc3QgYmFja2Ryb3AgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmFja2Ryb3AnKTtcclxuICBiYWNrZHJvcC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGFzcy10dXJuX21vZGFsJykuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcclxuICBpZiAoY3VycmVudFBsYXllciA9PT0gJ3BsYXllcjEnKSB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGFzcy10dXJuX21vZGFsID4gcCcpLnRleHRDb250ZW50ID0gYFBsYXllciAxJ3MgdHVybmA7XHJcbiAgfSBlbHNlIHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYXNzLXR1cm5fbW9kYWwgPiBwJykudGV4dENvbnRlbnQgPSBgUGxheWVyIDIncyB0dXJuYDtcclxuICB9XHJcbn1cclxuXHJcbi8vIEluaXRpYWxpemUgZ2FtZSBmdW5jdGlvbnNcclxubmV3X2dhbWVfYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gIHJlc2V0RE9NKCk7XHJcbiAgcmVzZXRET00oJ3BsYXllcjInKTtcclxuICBJbml0aWFsaXplR2FtZSgnUGxheWVyJywgJ0NvbXB1dGVyJywgJ2NvbScpO1xyXG4gIHBsYWNlbWVudFBoYXNlKCk7XHJcbiAgYWN0aW9uX2luZm8udGV4dENvbnRlbnQgPSAnUGxhY2UgZWFjaCBvbmUgb2YgeW91ciBwYXN0cmllcy4nO1xyXG4gIHN0YXJ0X2dhbWVfYnV0dG9uLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gIHN0YXJ0X2dhbWVfYnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcclxuICBzdGFydF9nYW1lX2J1dHRvbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnYnV0dG9uZmFjZSc7XHJcbiAgc3RhcnRfZ2FtZV9idXR0b24udGV4dENvbnRlbnQgPSAnU3RhcnQgdGhlIGJhdHRsZSc7XHJcbn0pO1xyXG5cclxucHZwX25ld19nYW1lX2J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICByZXNldERPTSgpO1xyXG4gIEluaXRpYWxpemVHYW1lKCdQbGF5ZXIgMScsICdQbGF5ZXIgMicsICdwdnAnKTtcclxuICBwbGFjZW1lbnRQaGFzZSgpO1xyXG4gIGFjdGlvbl9pbmZvLnRleHRDb250ZW50ID0gJ1BsYXllciAxLCBwbGFjZSBlYWNoIG9uZSBvZiB5b3VyIHBhc3RyaWVzLic7XHJcbiAgc3RhcnRfZ2FtZV9idXR0b24uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgc3RhcnRfZ2FtZV9idXR0b24uZGlzYWJsZWQgPSB0cnVlO1xyXG4gIHN0YXJ0X2dhbWVfYnV0dG9uLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdidXR0b25mYWNlJztcclxuICBzdGFydF9nYW1lX2J1dHRvbi50ZXh0Q29udGVudCA9ICdOZXh0IHBsYXllcic7XHJcbn0pO1xyXG5cclxuc3RhcnRfZ2FtZV9idXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgaWYgKGdhbWVNb2RlID09PSAnY29tJykge1xyXG4gICAgLy9wbGF5ZXIxX3NoaXBzLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICBTdGFydEdhbWUoKTtcclxuICB9IGVsc2UgaWYgKGdhbWVNb2RlID09PSAncHZwJyAmJiBwbGF5ZXIyLmdhbWVib2FyZC5zaGlwTGlzdC5sZW5ndGggPT09IDUgJiYgcGxheWVyMi5nYW1lYm9hcmQuc2hpcExpc3QubGVuZ3RoID09PSA1KSB7IFxyXG4gICAgLy9wbGF5ZXIyX3NoaXBzLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICBTdGFydEdhbWUoKTtcclxuICB9XHJcbiAgZWxzZSB7XHJcbiAgICByZXNldERPTSgncGxheWVyMicpO1xyXG4gICAgYWN0aW9uX2luZm8udGV4dENvbnRlbnQgPSAnUGxheWVyIDIsIHBsYWNlIGVhY2ggb25lIG9mIHlvdXIgcGFzdHJpZXMuJztcclxuICAgIHN0YXJ0X2dhbWVfYnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgIHN0YXJ0X2dhbWVfYnV0dG9uLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdidXR0b25mYWNlJztcclxuICAgIHN0YXJ0X2dhbWVfYnV0dG9uLnRleHRDb250ZW50ID0gJ1N0YXJ0IGdhbWUnO1xyXG4gICAgY2hhbmdlUGxheWVyUGxhY2VtZW50KCk7XHJcbiAgfVxyXG59KTtcclxuXHJcbi8vIERPTSBtYW5pcHVsYXRpb24gZnVuY3Rpb25zXHJcbmZ1bmN0aW9uIHJlc2V0RE9NIChwbGF5ZXIgPSAncGxheWVyMScpIHtcclxuICBjb25zdCBzaGlwX2xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAjJHtwbGF5ZXJ9LXNoaXBzIGxpYCk7XHJcbiAgY29uc3Qgb3JpZW50YXRpb25fYnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYCMke3BsYXllcn0tc2hpcHMgaW1nYCk7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwX2xpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgIHNoaXBfbGlzdFtpXS5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xyXG4gICAgc2hpcF9saXN0W2ldLnN0eWxlLmNvbG9yID0gJ2JsYWNrJztcclxuICAgIHNoaXBfbGlzdFtpXS5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9ICdub25lJztcclxuICB9XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBvcmllbnRhdGlvbl9idXR0b25zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBvcmllbnRhdGlvbl9idXR0b25zW2ldLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gIH1cclxuICBpZiAocGxheWVyID09PSAncGxheWVyMScpIHtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGF5ZXIyLXNoaXBzJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFJlc3RvcmVTaGlwc0xpc3QgKCkge1xyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5hY3Rpb24tZGVzY3JpcHRvcicpLmZvckVhY2goZWwgPT4ge1xyXG4gICAgZWwudGV4dENvbnRlbnQgPSAnWW91ciBtZW51Oic7XHJcbiAgfSk7XHJcbiAgcGxheWVyMV9zaGlwcy5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICBjb25zdCBwMVNoaXBMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI3BsYXllcjEtc2hpcHMgbGknKTtcclxuICBwMVNoaXBMaXN0LmZvckVhY2goZWwgPT4ge1xyXG4gICAgZWwuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcclxuICB9KTtcclxuICBwbGF5ZXIyX3NoaXBzLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gIGNvbnN0IHAyU2hpcExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjcGxheWVyMi1zaGlwcyBsaScpO1xyXG4gIHAyU2hpcExpc3QuZm9yRWFjaChlbCA9PiB7XHJcbiAgICBlbC5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xyXG4gIH0pO1xyXG4gIGlmIChnYW1lTW9kZSA9PT0gJ2NvbScpIHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ob3InKS5mb3JFYWNoKGVsID0+IHtcclxuICAgICAgZWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIH0pO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnZlcicpLmZvckVhY2goZWwgPT4ge1xyXG4gICAgICBlbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBjaGFuZ2VQbGF5ZXJQbGFjZW1lbnQgKCkge1xyXG4gIGlmIChwbGF5ZXIxLmdhbWVib2FyZC5zaGlwTGlzdC5sZW5ndGggIT09IDUpIHtcclxuICAgIHRocm93IG5ldyBFcnJvciAoJ1BsYXllciAxIG11c3QgZmlyc3QgcGxhY2UgYWxsIGhpcy9oZXIgcGFzdHJpZXMuJyk7XHJcbiAgfSBlbHNlIHtcclxuICAgIHBsYXllcjFfc2hpcHMuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIHAxQ2VsbHMgPSBQb3B1bGF0ZVAxKCdwdWJsaWNCb2FyZCcpO1xyXG4gICAgUGxheWVyMlBsYWNlU2hpcHMoKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIEluaXRpYWxpemVHYW1lKHAxbmFtZSwgcDJuYW1lLCBtb2RlKSB7XHJcbiAgY3VycmVudFBsYXllciA9ICdwbGF5ZXIxJztcclxuICBnYW1lTW9kZSA9IG1vZGU7XHJcbiAgYWxsU2hpcHNQbGFjZWQgPSBmYWxzZTtcclxuICBwbGF5ZXIxID0gUGxheWVyKHAxbmFtZSk7XHJcbiAgcGxheWVyMiA9IFBsYXllcihwMm5hbWUpO1xyXG4gIHAxQ2VsbHMgPSBQb3B1bGF0ZVAxKCk7XHJcbiAgcDJDZWxscyA9IFBvcHVsYXRlUDIoJ3B1YmxpY0JvYXJkJyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIENvbXB1dGVyUGxhY2VTaGlwcyAoKSB7XHJcbiAgcGxheWVyMi5nYW1lYm9hcmQuY29tcHV0ZXJQbGFjZVNoaXAoNSwgJ0NhcnJpZXInKTtcclxuICBwbGF5ZXIyLmdhbWVib2FyZC5jb21wdXRlclBsYWNlU2hpcCg0LCAnQmF0dGxlc2hpcCcpO1xyXG4gIHBsYXllcjIuZ2FtZWJvYXJkLmNvbXB1dGVyUGxhY2VTaGlwKDMsICdDcnVpc2VyJyk7XHJcbiAgcGxheWVyMi5nYW1lYm9hcmQuY29tcHV0ZXJQbGFjZVNoaXAoMywgJ1N1Ym1hcmluZScpO1xyXG4gIHBsYXllcjIuZ2FtZWJvYXJkLmNvbXB1dGVyUGxhY2VTaGlwKDIsICdEZXN0cm95ZXInKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcGxhY2VtZW50UGhhc2UgKCkge1xyXG4gIGlmIChnYW1lTW9kZSA9PT0gJ2NvbScpIHtcclxuICAgIENvbXB1dGVyUGxhY2VTaGlwcygpO1xyXG4gICAgUGxheWVyMVBsYWNlU2hpcHMoKTtcclxuICAgIHBsYXllcjJfc2hpcHMuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICB9IGVsc2Uge1xyXG4gICAgUGxheWVyMVBsYWNlU2hpcHMoKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFBsYXllcjFQbGFjZVNoaXBzICgpIHtcclxuICBwbGF5ZXIxX3NoaXBzLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gIGNvbnN0IHAxQ2FycmllckhvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wMS1jYXJyaWVyIC5ob3InKTtcclxuICBjb25zdCBwMUNhcnJpZXJWZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucDEtY2FycmllciAudmVyJyk7XHJcbiAgcDFDYXJyaWVySG9yLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gQWN0aXZhdGVQbGFjZW1lbnQocGxheWVyMSwgcDFDZWxscywgNSwgJ0NhcnJpZXInLCAnLnAxLWNhcnJpZXInKSk7XHJcbiAgcDFDYXJyaWVyVmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gQWN0aXZhdGVQbGFjZW1lbnQocGxheWVyMSwgcDFDZWxscywgNSwgJ0NhcnJpZXInLCAnLnAxLWNhcnJpZXInLCAndmVyJykpO1xyXG4gIGNvbnN0IHAxQmF0dGxlc2hpcEhvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wMS1iYXR0bGVzaGlwIC5ob3InKTtcclxuICBjb25zdCBwMUJhdHRsZXNoaXBWZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucDEtYmF0dGxlc2hpcCAudmVyJyk7XHJcbiAgcDFCYXR0bGVzaGlwSG9yLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gQWN0aXZhdGVQbGFjZW1lbnQocGxheWVyMSwgcDFDZWxscywgNCwgJ0JhdHRsZXNoaXAnLCAnLnAxLWJhdHRsZXNoaXAnKSk7XHJcbiAgcDFCYXR0bGVzaGlwVmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gQWN0aXZhdGVQbGFjZW1lbnQocGxheWVyMSwgcDFDZWxscywgNCwgJ0JhdHRsZXNoaXAnLCAnLnAxLWJhdHRsZXNoaXAnLCAndmVyJykpO1xyXG4gIGNvbnN0IHAxQ3J1aXNlckhvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wMS1jcnVpc2VyIC5ob3InKTtcclxuICBjb25zdCBwMUNydWlzZXJWZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucDEtY3J1aXNlciAudmVyJyk7XHJcbiAgcDFDcnVpc2VySG9yLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gQWN0aXZhdGVQbGFjZW1lbnQocGxheWVyMSwgcDFDZWxscywgMywgJ0NydWlzZXInLCAnLnAxLWNydWlzZXInKSk7XHJcbiAgcDFDcnVpc2VyVmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gQWN0aXZhdGVQbGFjZW1lbnQocGxheWVyMSwgcDFDZWxscywgMywgJ0NydWlzZXInLCAnLnAxLWNydWlzZXInLCAndmVyJykpO1xyXG4gIGNvbnN0IHAxU3VibWFyaW5lSG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnAxLXN1Ym1hcmluZSAuaG9yJyk7XHJcbiAgY29uc3QgcDFTdWJtYXJpbmVWZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucDEtc3VibWFyaW5lIC52ZXInKTtcclxuICBwMVN1Ym1hcmluZUhvci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IEFjdGl2YXRlUGxhY2VtZW50KHBsYXllcjEsIHAxQ2VsbHMsIDMsICdTdWJtYXJpbmUnLCAnLnAxLXN1Ym1hcmluZScpKTtcclxuICBwMVN1Ym1hcmluZVZlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IEFjdGl2YXRlUGxhY2VtZW50KHBsYXllcjEsIHAxQ2VsbHMsIDMsICdTdWJtYXJpbmUnLCAnLnAxLXN1Ym1hcmluZScsICd2ZXInKSk7XHJcbiAgY29uc3QgcDFEZXN0cm95ZXJIb3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucDEtZGVzdHJveWVyIC5ob3InKTtcclxuICBjb25zdCBwMURlc3Ryb3llclZlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wMS1kZXN0cm95ZXIgLnZlcicpO1xyXG4gIHAxRGVzdHJveWVySG9yLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gQWN0aXZhdGVQbGFjZW1lbnQocGxheWVyMSwgcDFDZWxscywgMiwgJ0Rlc3Ryb3llcicsICcucDEtZGVzdHJveWVyJykpO1xyXG4gIHAxRGVzdHJveWVyVmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gQWN0aXZhdGVQbGFjZW1lbnQocGxheWVyMSwgcDFDZWxscywgMiwgJ0Rlc3Ryb3llcicsICcucDEtZGVzdHJveWVyJywgJ3ZlcicpKTtcclxufVxyXG5cclxuZnVuY3Rpb24gUGxheWVyMlBsYWNlU2hpcHMgKCkge1xyXG4gIHBsYXllcjJfc2hpcHMuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgY29uc3QgcDJDYXJyaWVySG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnAyLWNhcnJpZXIgLmhvcicpO1xyXG4gIGNvbnN0IHAyQ2FycmllclZlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wMi1jYXJyaWVyIC52ZXInKTtcclxuICBwMkNhcnJpZXJIb3IuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBBY3RpdmF0ZVBsYWNlbWVudChwbGF5ZXIyLCBwMkNlbGxzLCA1LCAnQ2FycmllcicsICcucDItY2FycmllcicpKTtcclxuICBwMkNhcnJpZXJWZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBBY3RpdmF0ZVBsYWNlbWVudChwbGF5ZXIyLCBwMkNlbGxzLCA1LCAnQ2FycmllcicsICcucDItY2FycmllcicsICd2ZXInKSk7XHJcbiAgY29uc3QgcDJCYXR0bGVzaGlwSG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnAyLWJhdHRsZXNoaXAgLmhvcicpO1xyXG4gIGNvbnN0IHAyQmF0dGxlc2hpcFZlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wMi1iYXR0bGVzaGlwIC52ZXInKTtcclxuICBwMkJhdHRsZXNoaXBIb3IuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBBY3RpdmF0ZVBsYWNlbWVudChwbGF5ZXIyLCBwMkNlbGxzLCA0LCAnQmF0dGxlc2hpcCcsICcucDItYmF0dGxlc2hpcCcpKTtcclxuICBwMkJhdHRsZXNoaXBWZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBBY3RpdmF0ZVBsYWNlbWVudChwbGF5ZXIyLCBwMkNlbGxzLCA0LCAnQmF0dGxlc2hpcCcsICcucDItYmF0dGxlc2hpcCcsICd2ZXInKSk7XHJcbiAgY29uc3QgcDJDcnVpc2VySG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnAyLWNydWlzZXIgLmhvcicpO1xyXG4gIGNvbnN0IHAyQ3J1aXNlclZlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wMi1jcnVpc2VyIC52ZXInKTtcclxuICBwMkNydWlzZXJIb3IuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBBY3RpdmF0ZVBsYWNlbWVudChwbGF5ZXIyLCBwMkNlbGxzLCAzLCAnQ3J1aXNlcicsICcucDItY3J1aXNlcicpKTtcclxuICBwMkNydWlzZXJWZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBBY3RpdmF0ZVBsYWNlbWVudChwbGF5ZXIyLCBwMkNlbGxzLCAzLCAnQ3J1aXNlcicsICcucDItY3J1aXNlcicsICd2ZXInKSk7XHJcbiAgY29uc3QgcDJTdWJtYXJpbmVIb3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucDItc3VibWFyaW5lIC5ob3InKTtcclxuICBjb25zdCBwMlN1Ym1hcmluZVZlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wMi1zdWJtYXJpbmUgLnZlcicpO1xyXG4gIHAyU3VibWFyaW5lSG9yLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gQWN0aXZhdGVQbGFjZW1lbnQocGxheWVyMiwgcDJDZWxscywgMywgJ1N1Ym1hcmluZScsICcucDItc3VibWFyaW5lJykpO1xyXG4gIHAyU3VibWFyaW5lVmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gQWN0aXZhdGVQbGFjZW1lbnQocGxheWVyMiwgcDJDZWxscywgMywgJ1N1Ym1hcmluZScsICcucDItc3VibWFyaW5lJywgJ3ZlcicpKTtcclxuICBjb25zdCBwMkRlc3Ryb3llckhvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wMi1kZXN0cm95ZXIgLmhvcicpO1xyXG4gIGNvbnN0IHAyRGVzdHJveWVyVmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnAyLWRlc3Ryb3llciAudmVyJyk7XHJcbiAgcDJEZXN0cm95ZXJIb3IuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBBY3RpdmF0ZVBsYWNlbWVudChwbGF5ZXIyLCBwMkNlbGxzLCAyLCAnRGVzdHJveWVyJywgJy5wMi1kZXN0cm95ZXInKSk7XHJcbiAgcDJEZXN0cm95ZXJWZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBBY3RpdmF0ZVBsYWNlbWVudChwbGF5ZXIyLCBwMkNlbGxzLCAyLCAnRGVzdHJveWVyJywgJy5wMi1kZXN0cm95ZXInLCAndmVyJykpO1xyXG59XHJcblxyXG4vLyBBY3RpdmF0ZSBjbGljayBvbiBvd24gYm9hcmQgdG8gcGxhY2Ugc2hpcHNcclxuZnVuY3Rpb24gQWN0aXZhdGVQbGFjZW1lbnQgKHBsYXllciwgY2VsbHNBcnIsIHNpemUsIHNoaXBOYW1lLCBkb21FbGVtZW50LCBvcmllbnRhdGlvbiA9ICdob3InKSB7XHJcbiAgcGxhY2VTaGlwSGlnaGxpZ2h0KHBsYXllciwgY2VsbHNBcnIsIHNpemUsIG9yaWVudGF0aW9uKTtcclxuICBwbGFjZVNoaXBDbGljayhwbGF5ZXIsIGNlbGxzQXJyLCBzaXplLCBzaGlwTmFtZSwgZG9tRWxlbWVudCwgb3JpZW50YXRpb24pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBwbGFjZVNoaXBIaWdobGlnaHQgKHBsYXllciwgY2VsbHNBcnIsIHNpemUsIG9yaWVudGF0aW9uID0gJ2hvcicpIHtcclxuICBsZXQgY29sb3JlZENlbGw7XHJcbiAgY2VsbHNBcnIuZm9yRWFjaChlbCA9PiB7XHJcbiAgICBpZiAob3JpZW50YXRpb24gPT09ICdob3InKSB7XHJcbiAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsICgpID0+IHsgICAgXHJcbiAgICAgICAgY29uc3Qgc3RhcnRpbmdZID0gZWwuY2xhc3NOYW1lLnNsaWNlKDAsNyk7XHJcbiAgICAgICAgY29uc3Qgc3RhcnRpbmdYID0gK2VsLmNsYXNzTmFtZS5zbGljZSg3LDgpO1xyXG4gICAgICAgIGlmIChwbGF5ZXIuZ2FtZWJvYXJkLmlzVmFsaWQoc2l6ZSwgWytzdGFydGluZ1kuc2xpY2UoLTEpLCBzdGFydGluZ1hdKSkge1xyXG4gICAgICAgICAgZm9yIChsZXQgaSA9IHN0YXJ0aW5nWDsgaSA8ICgrc3RhcnRpbmdYICsgc2l6ZSk7IGkrKykge1xyXG4gICAgICAgICAgICBjb2xvcmVkQ2VsbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoYCR7c3RhcnRpbmdZfSR7aX1gKVswXTtcclxuICAgICAgICAgICAgY29sb3JlZENlbGwuY2xhc3NMaXN0LmFkZCgncGxhY2luZy1zaGlwLWNlbGwnKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgKGUpID0+IHtcclxuICAgICAgICAgICAgY2VsbHNBcnIuZm9yRWFjaChlbCA9PiBlbC5jbGFzc0xpc3QucmVtb3ZlKCdwbGFjaW5nLXNoaXAtY2VsbCcpKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBpZiAoc3RhcnRpbmdYICsgc2l6ZSA+IDEwKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSBzdGFydGluZ1g7IGkgPCAxMDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgY29sb3JlZENlbGwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGAke3N0YXJ0aW5nWX0ke2l9YClbMF07XHJcbiAgICAgICAgICAgICAgY29sb3JlZENlbGwuY2xhc3NMaXN0LmFkZCgncGxhY2luZy1lcnJvcicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gc3RhcnRpbmdYOyBpIDwgc3RhcnRpbmdYICsgc2l6ZTsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgY29sb3JlZENlbGwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGAke3N0YXJ0aW5nWX0ke2l9YClbMF07XHJcbiAgICAgICAgICAgICAgY29sb3JlZENlbGwuY2xhc3NMaXN0LmFkZCgncGxhY2luZy1lcnJvcicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgKGUpID0+IHtcclxuICAgICAgICAgICAgY2VsbHNBcnIuZm9yRWFjaChlbCA9PiBlbC5jbGFzc0xpc3QucmVtb3ZlKCdwbGFjaW5nLWVycm9yJykpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIChlKSA9PiB7ICAgIFxyXG4gICAgICAgIGNvbnN0IFljb29yZCA9ICtlbC5jbGFzc05hbWUuc2xpY2UoNiw3KTtcclxuICAgICAgICBjb25zdCBzdGFydGluZ1ggPSArZWwuY2xhc3NOYW1lLnNsaWNlKDcsOCk7XHJcbiAgICAgICAgY29uc3QgY2VsbE5hbWUgPSBlbC5jbGFzc05hbWUuc2xpY2UoMCw2KTtcclxuICAgICAgICBpZiAocGxheWVyLmdhbWVib2FyZC5pc1ZhbGlkKHNpemUsIFtZY29vcmQsIHN0YXJ0aW5nWF0sICd2ZXInKSkge1xyXG4gICAgICAgICAgZm9yIChsZXQgaSA9IFljb29yZDsgaSA8IChZY29vcmQgKyBzaXplKTsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbG9yZWRDZWxsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShgJHtjZWxsTmFtZX0ke2l9JHtzdGFydGluZ1h9YClbMF07XHJcbiAgICAgICAgICAgIGNvbG9yZWRDZWxsLmNsYXNzTGlzdC5hZGQoJ3BsYWNpbmctc2hpcC1jZWxsJyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIGNlbGxzQXJyLmZvckVhY2goZWwgPT4gZWwuY2xhc3NMaXN0LnJlbW92ZSgncGxhY2luZy1zaGlwLWNlbGwnKSk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgaWYgKFljb29yZCArIHNpemUgPiAxMCl7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSBZY29vcmQ7IGkgPCAxMDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgY29sb3JlZENlbGwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGAke2NlbGxOYW1lfSR7aX0ke3N0YXJ0aW5nWH1gKVswXTtcclxuICAgICAgICAgICAgICBjb2xvcmVkQ2VsbC5jbGFzc0xpc3QuYWRkKCdwbGFjaW5nLWVycm9yJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSBZY29vcmQ7IGkgPCBZY29vcmQgKyBzaXplOyBpKyspIHtcclxuICAgICAgICAgICAgICBjb2xvcmVkQ2VsbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoYCR7Y2VsbE5hbWV9JHtpfSR7c3RhcnRpbmdYfWApWzBdO1xyXG4gICAgICAgICAgICAgIGNvbG9yZWRDZWxsLmNsYXNzTGlzdC5hZGQoJ3BsYWNpbmctZXJyb3InKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBjZWxsc0Fyci5mb3JFYWNoKGVsID0+IGVsLmNsYXNzTGlzdC5yZW1vdmUoJ3BsYWNpbmctZXJyb3InKSk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBwbGFjZVNoaXBDbGljayAocGxheWVyLCBjZWxsc0Fyciwgc2l6ZSwgc2hpcE5hbWUsIGRvbUVsZW1lbnQsIG9yaWVudGF0aW9uID0gJ2hvcicpIHtcclxuICBjZWxsc0Fyci5mb3JFYWNoKGVsID0+IHtcclxuICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICBjb25zdCB0YXJnZXRDZWxsID0gKGVsLmNsYXNzTmFtZS5zbGljZSg2LCA4KSkuc3BsaXQoJycpO1xyXG4gICAgICBjb25zdCB0YXJnZXRDb29yZGluYXRlcyA9IFsrdGFyZ2V0Q2VsbFswXSwgK3RhcmdldENlbGxbMV1dO1xyXG4gICAgICBwbGF5ZXIuZ2FtZWJvYXJkLnBsYWNlU2hpcChzaXplLCB0YXJnZXRDb29yZGluYXRlcywgc2hpcE5hbWUsIG9yaWVudGF0aW9uKTtcclxuICAgICAgaWYgKHBsYXllciA9PT0gcGxheWVyMSkge1xyXG4gICAgICAgIHAxQ2VsbHMgPSBQb3B1bGF0ZVAxKCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcDJDZWxscyA9IFBvcHVsYXRlUDIoJ3ByaXZhdGVCb2FyZCcpO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IHNoaXBMaXN0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZG9tRWxlbWVudCk7XHJcbiAgICAgIC8vc2hpcExpc3ROYW1lLnN0eWxlLmNvbG9yID0gJ2dyZXknO1xyXG4gICAgICBzaGlwTGlzdE5hbWUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgY29uc3QgaG9yQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgJHtkb21FbGVtZW50fSAgLmhvcmApO1xyXG4gICAgICBjb25zdCB2ZXJCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAke2RvbUVsZW1lbnR9ICAudmVyYCk7XHJcbiAgICAgIGhvckJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICB2ZXJCdXR0b24uc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgdXBkYXRlU3RhcnRCdXR0b24oKTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiB1cGRhdGVTdGFydEJ1dHRvbiAoKSB7XHJcbiAgaWYgKGdhbWVNb2RlID09PSAnY29tJyAmJiBwbGF5ZXIxLmdhbWVib2FyZC5zaGlwTGlzdC5sZW5ndGggPT09IDUpIHtcclxuICAgIHN0YXJ0X2dhbWVfYnV0dG9uLmRpc2FibGVkID0gZmFsc2U7XHJcbiAgICBzdGFydF9nYW1lX2J1dHRvbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnIzgwYzE4MCc7XHJcbiAgfVxyXG4gIGlmIChnYW1lTW9kZSA9PT0gJ3B2cCcgJiYgcGxheWVyMS5nYW1lYm9hcmQuc2hpcExpc3QubGVuZ3RoID09PSA1ICYmIGFsbFNoaXBzUGxhY2VkID09PSBmYWxzZSkge1xyXG4gICAgc3RhcnRfZ2FtZV9idXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgIHN0YXJ0X2dhbWVfYnV0dG9uLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjZmZlOThhJztcclxuICAgIGFsbFNoaXBzUGxhY2VkID0gdHJ1ZTtcclxuICB9IGVsc2UgaWYgKGdhbWVNb2RlID09PSAncHZwJyAmJiBwbGF5ZXIxLmdhbWVib2FyZC5zaGlwTGlzdC5sZW5ndGggPT09IDUgJiYgcGxheWVyMi5nYW1lYm9hcmQuc2hpcExpc3QubGVuZ3RoID09PSA1KSB7XHJcbiAgICBzdGFydF9nYW1lX2J1dHRvbi5kaXNhYmxlZCA9ICBmYWxzZTtcclxuICAgIHN0YXJ0X2dhbWVfYnV0dG9uLnRleHRDb250ZW50ID0gJ1N0YXJ0IGdhbWUnO1xyXG4gICAgc3RhcnRfZ2FtZV9idXR0b24uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyM4MGMxODAnO1xyXG4gIH1cclxufVxyXG5cclxuXHJcblxyXG4vLyBHYW1lIGZsb3cgZnVuY3Rpb25zXHJcbmZ1bmN0aW9uIFN0YXJ0R2FtZSAoKSB7XHJcbiAgLy8gQ2hlY2sgaWYgYWxsIHNoaXBzIGhhdmUgYmVlbiBwbGFjZWQgYmVmb3JlIGxhdW5jaGluZyB0aGUgZ2FtZVxyXG4gIGlmIChwbGF5ZXIxLmdhbWVib2FyZC5zaGlwTGlzdC5sZW5ndGggIT09IDUpIHtcclxuICAgIHRocm93IG5ldyBFcnJvcignWW91IG11c3Qgc3RpbGwgcGxhY2UgcGFzdHJpZXMhJyk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGdhbWVfc3RhcnRfc291bmQucGxheSgpO1xyXG4gICAgc3RhcnRfZ2FtZV9idXR0b24uc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIHN0YXJ0X2dhbWVfYnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgIHN0YXJ0X2dhbWVfYnV0dG9uLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdidXR0b25mYWNlJztcclxuICAgIFJlc3RvcmVTaGlwc0xpc3QoKTtcclxuICAgIEluaXRpYWxpemVUdXJuKGN1cnJlbnRQbGF5ZXIpO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gSW5pdGlhbGl6ZVR1cm4gKGN1cnJlbnRQbGF5ZXIpIHtcclxuICBVcGRhdGVJbmZvRGlzcGxheSgpO1xyXG4gIGlmIChnYW1lTW9kZSA9PT0gJ2NvbScpIHtcclxuICAgIHAxQ2VsbHMgPSBQb3B1bGF0ZVAxKCk7XHJcbiAgICBwMkNlbGxzID0gUG9wdWxhdGVQMigpO1xyXG4gICAgaWYgKGN1cnJlbnRQbGF5ZXIgPT09ICdwbGF5ZXIxJykge1xyXG4gICAgICBwMUNlbGxzID0gUG9wdWxhdGVQMSgncHJpdmF0ZUJvYXJkJyk7XHJcbiAgICAgIHAyQ2VsbHMgPSBQb3B1bGF0ZVAyKCdwdWJsaWNCb2FyZCcpO1xyXG4gICAgICBBY3RpdmF0ZUF0dGFja09uKHAyQ2VsbHMsIHBsYXllcjEsIHBsYXllcjIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29tcHV0ZXJBdHRhY2soKTsgXHJcbiAgICB9XHJcbiAgfSBlbHNlIHtcclxuICAgIFBhc3NUdXJuTW9kYWwoKTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYXNzLXR1cm5fY29uZmlybS1idXR0b24nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgQ2xvc2VNb2RhbCgncGFzcy10dXJuX21vZGFsJyk7XHJcbiAgICAgIGlmIChjdXJyZW50UGxheWVyID09PSAncGxheWVyMScpIHtcclxuICAgICAgICBwMUNlbGxzID0gUG9wdWxhdGVQMSgncHJpdmF0ZUJvYXJkJyk7XHJcbiAgICAgICAgcDJDZWxscyA9IFBvcHVsYXRlUDIoJ3B1YmxpY0JvYXJkJyk7XHJcbiAgICAgICAgQWN0aXZhdGVBdHRhY2tPbihwMkNlbGxzLCBwbGF5ZXIxLCBwbGF5ZXIyKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBwMUNlbGxzID0gUG9wdWxhdGVQMSgncHVibGljQm9hcmQnKTtcclxuICAgICAgICBwMkNlbGxzID0gUG9wdWxhdGVQMigncHJpdmF0ZUJvYXJkJyk7XHJcbiAgICAgICAgQWN0aXZhdGVBdHRhY2tPbihwMUNlbGxzLCBwbGF5ZXIyLCBwbGF5ZXIxKTsgXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuLy8gUG9wdWxhdGUgcGxheWVyIDEgYm9hcmRcclxuZnVuY3Rpb24gUG9wdWxhdGVQMSAoYm9hcmQgPSAncHJpdmF0ZUJvYXJkJykge1xyXG4gIGNvbnN0IHRhcmdldEJvYXJkID0gcGxheWVyMS5nYW1lYm9hcmRbYm9hcmRdO1xyXG4gIHBsYXllcjFfYm9hcmQudGV4dENvbnRlbnQgPSAnJztcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcclxuICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xyXG4gICAgICBsZXQgY2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICBjZWxsLnRleHRDb250ZW50ID0gdGFyZ2V0Qm9hcmRbaV1bal07XHJcbiAgICAgIGlmIChjZWxsLnRleHRDb250ZW50ID09PSAnWCcpIHtcclxuICAgICAgICBjZWxsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjYzg0NzcxJztcclxuICAgICAgICBjZWxsLnN0eWxlLmNvbG9yID0gJyNmZmZmZmYnO1xyXG4gICAgICB9IGVsc2UgaWYgKGNlbGwudGV4dENvbnRlbnQgPT09ICd+Jykge1xyXG4gICAgICAgIGNlbGwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3JnYmEoMTkyLCAxODYsIDE4OCwgMC44KSc7XHJcbiAgICAgICAgY2VsbC5zdHlsZS5jb2xvciA9ICcjZmZmZmZmJztcclxuICAgICAgfSBlbHNlIGlmIChjZWxsLnRleHRDb250ZW50KSB7XHJcbiAgICAgICAgY2VsbC50ZXh0Q29udGVudCA9IGDilqJgO1xyXG4gICAgICAgIGNlbGwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNmZmU5OGEnO1xyXG4gICAgICAgIGNlbGwuc3R5bGUuY29sb3IgPSAnIzc4MmI0NCc7XHJcbiAgICAgIH1cclxuICAgICAgY2VsbC5jbGFzc05hbWUgPSBgY2VsbDEgJHtpfSR7an1gO1xyXG4gICAgICBwbGF5ZXIxX2JvYXJkLmFwcGVuZENoaWxkKGNlbGwpO1xyXG4gICAgfSAgXHJcbiAgfVxyXG4gIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2VsbDEnKTtcclxufVxyXG5cclxuLy8gUG9wdWxhdGUgcGxheWVyIDIgKGNvbXB1dGVyKSBib2FyZCwgdXNpbmcgdGhlIHB1YmxpY0JvYXJkIGtleSB0byBrZWVwIHVuZGlzY292ZXJlZCBzcXVhcmVzIGVtcHR5XHJcbmZ1bmN0aW9uIFBvcHVsYXRlUDIgKGJvYXJkID0gJ3B1YmxpY0JvYXJkJykge1xyXG4gIGNvbnN0IHRhcmdldEJvYXJkID0gcGxheWVyMi5nYW1lYm9hcmRbYm9hcmRdO1xyXG4gIHBsYXllcjJfYm9hcmQudGV4dENvbnRlbnQgPSAnJztcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcclxuICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xyXG4gICAgICBsZXQgY2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICBjZWxsLnRleHRDb250ZW50ID0gdGFyZ2V0Qm9hcmRbaV1bal07XHJcbiAgICAgIGlmIChjZWxsLnRleHRDb250ZW50ID09PSAnWCcpIHtcclxuICAgICAgICBjZWxsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjYzg0NzcxJztcclxuICAgICAgICBjZWxsLnN0eWxlLmNvbG9yID0gJyNmZmZmZmYnO1xyXG4gICAgICB9IGVsc2UgaWYgKGNlbGwudGV4dENvbnRlbnQgPT09ICd+Jykge1xyXG4gICAgICAgIGNlbGwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3JnYmEoMTkyLCAxODYsIDE4OCwgMC44KSc7XHJcbiAgICAgICAgY2VsbC5zdHlsZS5jb2xvciA9ICcjZmZmZmZmJztcclxuICAgICAgfSBlbHNlIGlmIChjZWxsLnRleHRDb250ZW50KSB7XHJcbiAgICAgICAgY2VsbC50ZXh0Q29udGVudCA9IGDilqJgO1xyXG4gICAgICAgIGNlbGwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNmZmU5OGEnO1xyXG4gICAgICAgIGNlbGwuc3R5bGUuY29sb3IgPSAnIzc4MmI0NCc7XHJcbiAgICAgIH1cclxuICAgICAgY2VsbC5jbGFzc05hbWUgPSBgY2VsbDIgJHtpfSR7an1gO1xyXG4gICAgICBwbGF5ZXIyX2JvYXJkLmFwcGVuZENoaWxkKGNlbGwpO1xyXG4gICAgfSAgXHJcbiAgfVxyXG4gIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2VsbDInKTtcclxufVxyXG5cclxuLy8gQWN0aXZhdGUgYXR0YWNrIG9uIG9uZSBwbGF5ZXIgYm9hcmQgYXQgYSB0aW1lLCB3b3JrcyBmb3IgUFZQXHJcbmZ1bmN0aW9uIEFjdGl2YXRlQXR0YWNrT24gKGNlbGxzQXJyLCBhdHRhY2tlciwgZGVmZW5kZXIpIHtcclxuICBjZWxsc0Fyci5mb3JFYWNoKGVsID0+IHtcclxuICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgY29uc3QgdGFyZ2V0Q2VsbCA9IChlbC5jbGFzc05hbWUuc2xpY2UoLTIpKS5zcGxpdCgnJyk7XHJcbiAgICAgIGxldCBhdHRhY2tlZFNoaXAgPSBkZWZlbmRlci5nYW1lYm9hcmQucHJpdmF0ZUJvYXJkW3RhcmdldENlbGxbMF1dW3RhcmdldENlbGxbMV1dO1xyXG4gICAgICBhdHRhY2tlci5hdHRhY2soZGVmZW5kZXIsIHRhcmdldENlbGxbMF0sIHRhcmdldENlbGxbMV0pO1xyXG4gICAgICAvLyBSZXZlYWwgc3F1YXJlIHdoZW4gYXR0YWNrZWRcclxuICAgICAgaWYgKGN1cnJlbnRQbGF5ZXIgPT09ICdwbGF5ZXIxJykge1xyXG4gICAgICAgIGlmIChkZWZlbmRlci5nYW1lYm9hcmQucHJpdmF0ZUJvYXJkW3RhcmdldENlbGxbMF1dW3RhcmdldENlbGxbMV1dID09PSAnWCcpIHtcclxuICAgICAgICAgIGRlZmVuZGVyLmdhbWVib2FyZC5wdWJsaWNCb2FyZFt0YXJnZXRDZWxsWzBdXVt0YXJnZXRDZWxsWzFdXSA9ICdYJztcclxuICAgICAgICAgIGlmIChzdW5rQ2hlY2socGxheWVyMiwgYXR0YWNrZWRTaGlwKSkge1xyXG4gICAgICAgICAgICBVcGRhdGVTaGlwTGlzdCgncDInLCBhdHRhY2tlZFNoaXApO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBkZWZlbmRlci5nYW1lYm9hcmQucHVibGljQm9hcmRbdGFyZ2V0Q2VsbFswXV1bdGFyZ2V0Q2VsbFsxXV0gPSAnfic7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFBvcHVsYXRlUDIoKTtcclxuICAgICAgICBjdXJyZW50UGxheWVyID0gJ3BsYXllcjInO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGlmIChkZWZlbmRlci5nYW1lYm9hcmQucHJpdmF0ZUJvYXJkW3RhcmdldENlbGxbMF1dW3RhcmdldENlbGxbMV1dID09PSAnWCcpIHtcclxuICAgICAgICAgIGRlZmVuZGVyLmdhbWVib2FyZC5wdWJsaWNCb2FyZFt0YXJnZXRDZWxsWzBdXVt0YXJnZXRDZWxsWzFdXSA9ICdYJztcclxuICAgICAgICAgIGlmIChzdW5rQ2hlY2socGxheWVyMSwgYXR0YWNrZWRTaGlwKSkge1xyXG4gICAgICAgICAgICBVcGRhdGVTaGlwTGlzdCgncDEnLCBhdHRhY2tlZFNoaXApO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBkZWZlbmRlci5nYW1lYm9hcmQucHVibGljQm9hcmRbdGFyZ2V0Q2VsbFswXV1bdGFyZ2V0Q2VsbFsxXV0gPSAnfic7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFBvcHVsYXRlUDEoKTtcclxuICAgICAgICBjdXJyZW50UGxheWVyID0gJ3BsYXllcjEnO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICghd2luQ2hlY2soKSkge1xyXG4gICAgICAgIEluaXRpYWxpemVUdXJuKGN1cnJlbnRQbGF5ZXIpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIEdhbWVPdmVyTW9kYWwoKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbi8vIENvbXB1dGVyIGF0dGFja1xyXG5mdW5jdGlvbiBjb21wdXRlckF0dGFjayAoKSB7XHJcbiAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICBwbGF5ZXIyLmNvbXB1dGVyQXR0YWNrKHBsYXllcjEpO1xyXG4gICAgaWYgKCF3aW5DaGVjaygpKSB7XHJcbiAgICAgIGN1cnJlbnRQbGF5ZXIgPSAncGxheWVyMSc7XHJcbiAgICAgIEluaXRpYWxpemVUdXJuKGN1cnJlbnRQbGF5ZXIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgR2FtZU92ZXJNb2RhbCgpO1xyXG4gICAgfVxyXG4gIH0sICcxMDAwJyk7XHJcbn1cclxuXHJcbi8vIENoZWNrIGZvciBzdW5rIHNoaXBcclxuZnVuY3Rpb24gc3Vua0NoZWNrIChwbGF5ZXIsIHNoaXBOYW1lKSB7XHJcbiAgY29uc3QgdGFyZ2V0U2hpcCA9IHBsYXllci5nYW1lYm9hcmQuc2hpcExpc3QuZmluZCgoeyBuYW1lIH0pID0+IG5hbWUgPT09IHNoaXBOYW1lKTtcclxuICByZXR1cm4gdGFyZ2V0U2hpcC5pc1N1bmsoKTtcclxufVxyXG5cclxuLy8gQ2hlY2sgd2luIGNvbmRpdGlvblxyXG5mdW5jdGlvbiB3aW5DaGVjayAoKSB7XHJcbiAgaWYgKHBsYXllcjEuZ2FtZWJvYXJkLmdldFN0YXR1cygpIHx8IHBsYXllcjIuZ2FtZWJvYXJkLmdldFN0YXR1cygpKSB7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFVwZGF0ZVNjb3JlIChwbGF5ZXIpIHtcclxuICBpZiAocGxheWVyID09PSBwbGF5ZXIxKSB7XHJcbiAgICBwbGF5ZXJzU2NvcmVzWzBdKys7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxheWVyMS1zY29yZScpLnRleHRDb250ZW50ID0gYFNjb3JlOiAke3BsYXllcnNTY29yZXNbMF19YDtcclxuICB9IGVsc2Uge1xyXG4gICAgcGxheWVyc1Njb3Jlc1sxXSsrO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYXllcjItc2NvcmUnKS50ZXh0Q29udGVudCA9IGBTY29yZTogJHtwbGF5ZXJzU2NvcmVzWzFdfWA7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBEaXNwbGF5IGNvbnRyb2xsZXJcclxuZnVuY3Rpb24gVXBkYXRlSW5mb0Rpc3BsYXkgKCkge1xyXG4gIGFjdGlvbl9pbmZvLnRleHRDb250ZW50ID0gY3VycmVudFBsYXllciA9PT0gJ3BsYXllcjEnID8gYCR7cGxheWVyMS5wbGF5ZXJOYW1lfSdzIHR1cm5gIDogYCR7cGxheWVyMi5wbGF5ZXJOYW1lfSdzIHR1cm5gO1xyXG59XHJcblxyXG5mdW5jdGlvbiBVcGRhdGVTaGlwTGlzdCAocGxheWVyLCBzaGlwKSB7XHJcbiAgY29uc3Qgc2hpcE5hbWUgPSBzaGlwLnRvTG93ZXJDYXNlKCk7XHJcbiAgbGV0IHNoaXBMaXN0SXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke3BsYXllcn0tJHtzaGlwTmFtZX1gKTtcclxuICBzaGlwTGlzdEl0ZW0uc3R5bGUuY29sb3IgPSAnI2M4NDc3MSc7XHJcbiAgc2hpcExpc3RJdGVtLnN0eWxlLnRleHREZWNvcmF0aW9uID0gJ2xpbmUtdGhyb3VnaCc7XHJcbn1cclxuXHJcbi8vIFNvdW5kIGNvbnRyb2xsZXJcclxuZnVuY3Rpb24gc291bmRFZmZlY3QgKHNyYykge1xyXG4gIHRoaXMuc291bmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYXVkaW9cIik7XHJcbiAgdGhpcy5zb3VuZC5zcmMgPSBzcmM7XHJcbiAgdGhpcy5zb3VuZC5zZXRBdHRyaWJ1dGUoXCJwcmVsb2FkXCIsIFwiYXV0b1wiKTtcclxuICB0aGlzLnNvdW5kLnNldEF0dHJpYnV0ZShcImNvbnRyb2xzXCIsIFwibm9uZVwiKTtcclxuICB0aGlzLnNvdW5kLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuc291bmQpO1xyXG4gIHRoaXMucGxheSA9IGZ1bmN0aW9uKCl7XHJcbiAgICB0aGlzLnNvdW5kLnBsYXkoKTtcclxuICB9O1xyXG4gIHRoaXMuc3RvcCA9IGZ1bmN0aW9uKCl7XHJcbiAgICB0aGlzLnNvdW5kLnBhdXNlKCk7XHJcbiAgfTtcclxufVxyXG5cclxuLy9jb25zdCBnYW1lX3N0YXJ0X3NvdW5kID0gbmV3IHNvdW5kRWZmZWN0KFwicmVxdWlyZSgnLmRpc3Qvc291bmRzL2dhbWVfc3RhcnQubXAzJylcIik7XHJcbmltcG9ydCBtcDMgZnJvbSAnLi9zb3VuZHMvZ2FtZV9zdGFydC5tcDMnO1xyXG5nYW1lX3N0YXJ0X3NvdW5kID0gbmV3IHNvdW5kRWZmZWN0KG1wMyk7XHJcbi8vY29uc3QgZ2FtZV9zdGFydF9zb3VuZCA9IG5ldyBzb3VuZEVmZmVjdCgnLi9zb3VuZHMvZ2FtZV9zdGFydC5tcDMnKTtcclxuY29uc3QgdHVybl9jaGFuZ2Vfc291bmQgPSBuZXcgc291bmRFZmZlY3QoJy4vc291bmRzL3R1cm5fY2hhbmdlLm1wMycpO1xyXG5jb25zdCB2aWN0b3J5X3NvdW5kID0gbmV3IHNvdW5kRWZmZWN0KCcuL3NvdW5kcy92aWN0b3J5Lm1wMycpO1xyXG5cclxuXHJcbi8vIFRlc3QgYnV0dG9uc1xyXG4vKnBsYXllcjFfbG9nLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gIGNvbnNvbGUubG9nKHBsYXllcjEuZ2FtZWJvYXJkKTtcclxuICBzdW5rQ2hlY2soJ0NhcnJpZXInKTtcclxufSk7XHJcblxyXG5wbGF5ZXIyX2xvZy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICBjb25zb2xlLmxvZyhwbGF5ZXIyLmdhbWVib2FyZCk7XHJcbn0pOyovXHJcblxyXG5cclxuLy8gUk9BRE1BUFxyXG4vLyBSZXRpcmVyIG1lc3NhZ2VzIGQnZXJyZXVycyBkZSBsYSBjb25zb2xlXHJcbi8vIFJldGlyZXIgYm91dG9ucyBkZSB0ZXN0XHJcbi8vIE5ldHRveWFnZSBkdSBjb2RlIDogY29tbWVudGFpcmVzLCB2YXJpYWJsZXMgbm9uIHV0aWxpc8OpZXMsIHLDqW9yZ2FuaXNhdGlvbiBzZWxvbiBsYSBmb25jdGlvbiByZW1wbGllXHJcbi8vIFJFQURNRS5tZFxyXG5cclxuLy8gQlVHU1xyXG4vLyBNZXNzYWdlcyBkJ2VycmV1ciDDoCBjaGFxdWUgcGxhY2VtZW50IGRlIG5hdmlyZSBsb3JzcXUnb24gcmVjb21tZW5jZSB1bmUgcGFydGllXHJcbi8vIEJ1ZyBkJ2FmZmljaGFnZSBsb3JzcXUnb24gY2xpcXVlIHN1ciB1biBhdXRyZSBuYXZpcmUgYXZhbnQgc2FucyBhdm9pciBjbGlxdcOpIGF1IHByw6lhbGFibGUgcG91ciBwbGFjZXIgbGUgcHJlbWllciA6IHJlbW92ZSBldmVudExpc3RlbmVyIGVuIGTDqWJ1dCBkZSBmb25jdGlvbiA/XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==