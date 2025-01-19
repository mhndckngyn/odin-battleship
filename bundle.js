/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `:root {
  --tile-border: #9393ff;
  --tile-bg: #ffffff;
  --tile-ship-bg: #ccccfc;
  --tile-hit-bg: #ff8d8d;
  --tile-missed-bg: #bbffdc;
  --tile-ship-bg: #b7edff;
  --tile-hover-bg: #fff7c6;
  --board-label: #5c5c5c;

  --tile-size: 40px;
}

/* general */

body {
  font-family: Arial, Helvetica, sans-serif;
}

h1 {
  text-align: center;
}

button {
  background-color: #5555f5;
  border: none;
  border-radius: 8px;
  padding: 12px 16px;
  color: white;
  font-size: 18px;
  cursor: pointer;
}

#announcer {
  width: 500px;
  margin: auto;
  text-align: center;
  font-size: 18px;
  padding: 15px;
  background-color: rgb(210, 241, 251);
  border-radius: 16px;
}

/* battleship */

#board-area {
  display: flex;
  justify-content: space-evenly;
}

#button-area {
  display: flex;
  justify-content: center;
  margin: 20px auto;
}

.tile {
  box-sizing: border-box;
  width: var(--tile-size);
  height: var(--tile-size);
  border: 1px solid var(--tile-border);
  position: relative;

  &.hit {
    background-color: var(--tile-hit-bg);
  }

  &.missed {
    background-color: var(--tile-missed-bg);
  }

  &.has-ship {
    background-color: var(--tile-ship-bg);
  }
}

#bot-board .tile {
  &:hover {
    background-color: var(--tile-hover-bg);
  }
}

.board-row:nth-child(2) > .tile {
  border-top: 2px solid var(--tile-border);
}

.board-row:last-child > .tile {
  border-bottom: 2px solid var(--tile-border);
}

.tile:nth-child(2) {
  border-left: 2px solid var(--tile-border);
}

.tile:last-child {
  border-right: 2px solid var(--tile-border);
}

.label-row,
.board-row {
  display: flex;
}

.label {
  font-size: 0.85rem;
  display: grid;
  place-items: center;
  width: var(--tile-size);
  height: var(--tile-size);
  color: var(--board-label);
}

.hidden {
  display: none;
}

/* board placer */
.ship {
  box-sizing: border-box;
  background-color: #5555f5;
  opacity: 0.3;
  /* make ship clickable on every tile it spans */
  position: relative;
  z-index: 1;
}

.shadow {
  background-color: #ffd4a7;
  /* make it not re-rendered every dragenter event */
  position: relative;
  z-index: -1;
}
`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;EACE,sBAAsB;EACtB,kBAAkB;EAClB,uBAAuB;EACvB,sBAAsB;EACtB,yBAAyB;EACzB,uBAAuB;EACvB,wBAAwB;EACxB,sBAAsB;;EAEtB,iBAAiB;AACnB;;AAEA,YAAY;;AAEZ;EACE,yCAAyC;AAC3C;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,yBAAyB;EACzB,YAAY;EACZ,kBAAkB;EAClB,kBAAkB;EAClB,YAAY;EACZ,eAAe;EACf,eAAe;AACjB;;AAEA;EACE,YAAY;EACZ,YAAY;EACZ,kBAAkB;EAClB,eAAe;EACf,aAAa;EACb,oCAAoC;EACpC,mBAAmB;AACrB;;AAEA,eAAe;;AAEf;EACE,aAAa;EACb,6BAA6B;AAC/B;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,iBAAiB;AACnB;;AAEA;EACE,sBAAsB;EACtB,uBAAuB;EACvB,wBAAwB;EACxB,oCAAoC;EACpC,kBAAkB;;EAElB;IACE,oCAAoC;EACtC;;EAEA;IACE,uCAAuC;EACzC;;EAEA;IACE,qCAAqC;EACvC;AACF;;AAEA;EACE;IACE,sCAAsC;EACxC;AACF;;AAEA;EACE,wCAAwC;AAC1C;;AAEA;EACE,2CAA2C;AAC7C;;AAEA;EACE,yCAAyC;AAC3C;;AAEA;EACE,0CAA0C;AAC5C;;AAEA;;EAEE,aAAa;AACf;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,wBAAwB;EACxB,yBAAyB;AAC3B;;AAEA;EACE,aAAa;AACf;;AAEA,iBAAiB;AACjB;EACE,sBAAsB;EACtB,yBAAyB;EACzB,YAAY;EACZ,+CAA+C;EAC/C,kBAAkB;EAClB,UAAU;AACZ;;AAEA;EACE,yBAAyB;EACzB,kDAAkD;EAClD,kBAAkB;EAClB,WAAW;AACb","sourcesContent":[":root {\n  --tile-border: #9393ff;\n  --tile-bg: #ffffff;\n  --tile-ship-bg: #ccccfc;\n  --tile-hit-bg: #ff8d8d;\n  --tile-missed-bg: #bbffdc;\n  --tile-ship-bg: #b7edff;\n  --tile-hover-bg: #fff7c6;\n  --board-label: #5c5c5c;\n\n  --tile-size: 40px;\n}\n\n/* general */\n\nbody {\n  font-family: Arial, Helvetica, sans-serif;\n}\n\nh1 {\n  text-align: center;\n}\n\nbutton {\n  background-color: #5555f5;\n  border: none;\n  border-radius: 8px;\n  padding: 12px 16px;\n  color: white;\n  font-size: 18px;\n  cursor: pointer;\n}\n\n#announcer {\n  width: 500px;\n  margin: auto;\n  text-align: center;\n  font-size: 18px;\n  padding: 15px;\n  background-color: rgb(210, 241, 251);\n  border-radius: 16px;\n}\n\n/* battleship */\n\n#board-area {\n  display: flex;\n  justify-content: space-evenly;\n}\n\n#button-area {\n  display: flex;\n  justify-content: center;\n  margin: 20px auto;\n}\n\n.tile {\n  box-sizing: border-box;\n  width: var(--tile-size);\n  height: var(--tile-size);\n  border: 1px solid var(--tile-border);\n  position: relative;\n\n  &.hit {\n    background-color: var(--tile-hit-bg);\n  }\n\n  &.missed {\n    background-color: var(--tile-missed-bg);\n  }\n\n  &.has-ship {\n    background-color: var(--tile-ship-bg);\n  }\n}\n\n#bot-board .tile {\n  &:hover {\n    background-color: var(--tile-hover-bg);\n  }\n}\n\n.board-row:nth-child(2) > .tile {\n  border-top: 2px solid var(--tile-border);\n}\n\n.board-row:last-child > .tile {\n  border-bottom: 2px solid var(--tile-border);\n}\n\n.tile:nth-child(2) {\n  border-left: 2px solid var(--tile-border);\n}\n\n.tile:last-child {\n  border-right: 2px solid var(--tile-border);\n}\n\n.label-row,\n.board-row {\n  display: flex;\n}\n\n.label {\n  font-size: 0.85rem;\n  display: grid;\n  place-items: center;\n  width: var(--tile-size);\n  height: var(--tile-size);\n  color: var(--board-label);\n}\n\n.hidden {\n  display: none;\n}\n\n/* board placer */\n.ship {\n  box-sizing: border-box;\n  background-color: #5555f5;\n  opacity: 0.3;\n  /* make ship clickable on every tile it spans */\n  position: relative;\n  z-index: 1;\n}\n\n.shadow {\n  background-color: #ffd4a7;\n  /* make it not re-rendered every dragenter event */\n  position: relative;\n  z-index: -1;\n}\n"],"sourceRoot":""}]);
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

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
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

/***/ "./src/models/BoardPlacer/BoardPlacer.js":
/*!***********************************************!*\
  !*** ./src/models/BoardPlacer/BoardPlacer.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BoardPlacer)
/* harmony export */ });
/* harmony import */ var _modules_createBoard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../modules/createBoard */ "./src/modules/createBoard.js");
/* harmony import */ var _modules_createElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../modules/createElement */ "./src/modules/createElement.js");
/* harmony import */ var _settings_shipLengths__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../settings/shipLengths */ "./src/settings/shipLengths.js");
/* harmony import */ var _PlayerMap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PlayerMap */ "./src/models/BoardPlacer/PlayerMap.js");





class BoardPlacer {
  TILE_SIZE = 40;
  DT_ID = "application/id/";

  constructor() {
    this.blankImage = new Image();
    this.blankImage.src =
      "data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=";
    this.playerMap = new _PlayerMap__WEBPACK_IMPORTED_MODULE_3__["default"](_settings_shipLengths__WEBPACK_IMPORTED_MODULE_2__["default"].slice());
    this.createUI();
    this.setHandlers();
  }

  createShip(id, length, placeVertically) {
    const ship = (0,_modules_createElement__WEBPACK_IMPORTED_MODULE_1__["default"])("div", { className: ["ship"] });
    ship.dataset.id = id;
    ship.setAttribute("draggable", "true");

    ship.style.width = placeVertically
      ? `${this.TILE_SIZE}px`
      : `${this.TILE_SIZE * length}px`;
    ship.style.height = placeVertically
      ? `${this.TILE_SIZE * length}px`
      : `${this.TILE_SIZE}px`;

    return ship;
  }

  createUI() {
    // create board
    this.board = (0,_modules_createBoard__WEBPACK_IMPORTED_MODULE_0__["default"])("setup-board");
    // button
    this.startButton = (0,_modules_createElement__WEBPACK_IMPORTED_MODULE_1__["default"])("button", { text: "Start game" });
    // place ships
    this.playerMap.getShipIds().forEach((id) => {
      const s = this.playerMap.getShip(id);
      const ship = this.createShip(id, s.length, s.placeVertically);
      const { x, y } = s.coordinate;
      const tile = this.board.querySelector(
        `.tile[data-x="${x}"][data-y="${y}"]`,
      );
      tile.appendChild(ship);
    });
  }

  getUI() {
    return [this.board, this.startButton];
  }

  setHandlers() {
    const tiles = this.board.querySelectorAll(".tile");
    [...tiles].forEach((tile) => {
      tile.addEventListener("dragenter", this.dragEnterHandler.bind(this));
      tile.addEventListener("dragover", this.dragOverHandler.bind(this));
      tile.addEventListener("dragleave", this.dragLeaveHandler.bind(this));
      tile.addEventListener("drop", this.dropHandler.bind(this));
    });

    const ships = this.board.querySelectorAll(".ship");
    [...ships].forEach((ship) => {
      ship.addEventListener("dragstart", this.dragStartHandler.bind(this));
      ship.addEventListener("click", this.toggleVertical.bind(this));
    });
  }

  async waitUserStart() {
    return new Promise((resolve) => {
      this.startButton.addEventListener("click", () => {
        resolve(this.playerMap.getShips());
      }),
        { once: true };
    });
  }

  toggleVertical(e) {
    const ship = e.target;
    const shipId = ship.dataset.id;

    if (this.playerMap.isTurnable(shipId)) {
      // update map info
      this.playerMap.updateVertical(shipId);
      // update display
      [ship.style.width, ship.style.height] = [
        ship.style.height,
        ship.style.width,
      ];
    }
  }

  createShipShadow(length, placeVertically) {
    const ship = (0,_modules_createElement__WEBPACK_IMPORTED_MODULE_1__["default"])("div", { className: ["shadow"] });

    ship.style.width = placeVertically
      ? `${this.TILE_SIZE}px`
      : `${this.TILE_SIZE * length}px`;
    ship.style.height = placeVertically
      ? `${this.TILE_SIZE * length}px`
      : `${this.TILE_SIZE}px`;

    return ship;
  }

  dragStartHandler(e) {
    const shipId = e.target.dataset.id;
    e.dataTransfer.setData(`${this.DT_ID}${shipId}`, "");
    e.dataTransfer.setDragImage(this.blankImage, 0, 0);
    e.dataTransfer.effectAllowed = "move";
  }

  getTransferId(items) {
    const id = items
      .find((i) => i.type.startsWith(this.DT_ID))
      .type.substring(this.DT_ID.length);

    return id;
  }

  isShip(items) {
    return items.some((i) => i.type.startsWith(this.DT_ID));
  }

  dragEnterHandler(e) {
    const isShipDragged = this.isShip([...e.dataTransfer.items]);

    if (isShipDragged) {
      // ensure dragged element is a ship
      const shipId = this.getTransferId([...e.dataTransfer.items]);
      const coordinate = {
        x: Number(e.currentTarget.dataset.x),
        y: Number(e.currentTarget.dataset.y),
      };

      if (
        !e.currentTarget.querySelector(".ship") &&
        this.playerMap.isPlaceable(shipId, coordinate)
      ) {
        // the tile hovered does not contain a ship and the new placement is valid
        e.preventDefault();
        const { length, placeVertically } = this.playerMap.getShip(shipId);
        e.currentTarget.appendChild(
          this.createShipShadow(length, placeVertically),
        );
        e.dataTransfer.dropEffect = "move";
        e.currentTarget.dataset.placeable = "true";
      }
    }
  }

  dragOverHandler(e) {
    const isShipDragged = this.isShip([...e.dataTransfer.items]);

    if (e.target.dataset.placeable === "true" && isShipDragged) {
      // ensure a tile is hovered and dragged element is a ship
      e.preventDefault();
      e.dataTransfer.dropEffect = "move";
    }
  }

  dragLeaveHandler(e) {
    // remove shadow in this tile
    const shadow = e.target.querySelector(".shadow");
    if (shadow) {
      shadow.remove();
    }
    delete e.currentTarget.dataset.placeable;
  }

  dropHandler(e) {
    // remove shadow in this tile
    const shadow = e.target.querySelector(".shadow");
    if (shadow) {
      shadow.remove();
    }

    const shipId = this.getTransferId([...e.dataTransfer.items]);
    const ship = this.board.querySelector(`[data-id="${shipId}"]`);
    // update map info
    const newCoordinate = {
      x: Number(e.currentTarget.dataset.x),
      y: Number(e.currentTarget.dataset.y),
    };
    this.playerMap.updateCoordinate(shipId, newCoordinate);
    // update display
    if (e.target !== ship) {
      e.target.appendChild(ship);
      delete e.currentTarget.dataset.placeable;
    }
  }
}


/***/ }),

/***/ "./src/models/BoardPlacer/PlayerMap.js":
/*!*********************************************!*\
  !*** ./src/models/BoardPlacer/PlayerMap.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PlayerMap)
/* harmony export */ });
/* harmony import */ var _modules_randomNumber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../modules/randomNumber */ "./src/modules/randomNumber.js");


class PlayerMap {
  constructor(shipsLength) {
    this.map = {};
    this.placeShipsRandomly(shipsLength);
  }

  placeShipsRandomly(shipsLength) {
    shipsLength.forEach((length, id) => {
      let x;
      let y;
      let placeVertically;
      while (true) {
        placeVertically = Math.random() < 0.5;
        x = (0,_modules_randomNumber__WEBPACK_IMPORTED_MODULE_0__["default"])(0, 9);
        y = (0,_modules_randomNumber__WEBPACK_IMPORTED_MODULE_0__["default"])(0, 9);

        if (
          this.isInsideBoard(length, placeVertically, { x, y }) &&
          !this.isCollided(id, length, placeVertically, { x, y })
        ) {
          break;
        }
      }
      this.map[id] = {
        length,
        coordinate: { x, y },
        placeVertically,
      };
    });
  }

  getShips() {
    return Object.values(this.map);
  }

  getShip(id) {
    return this.map[id];
  }

  getShipIds() {
    return Object.keys(this.map);
  }

  updateVertical(id) {
    this.map[id].placeVertically = !this.map[id].placeVertically;
  }

  updateCoordinate(id, coordinate) {
    const { x, y } = coordinate;
    this.map[id].coordinate.x = x;
    this.map[id].coordinate.y = y;
  }

  getOccupiedTiles(length, placeVertically, coordinate) {
    const { x, y } = coordinate;
    const tiles = [];
    if (placeVertically) {
      for (let i = 0; i < length; i++) {
        tiles.push({ x, y: y + i });
      }
    } else {
      for (let i = 0; i < length; i++) {
        tiles.push({ x: x + i, y });
      }
    }

    return tiles.map((tile) => tile.y * 10 + Number(tile.x));
  }

  isInsideBoard(length, placeVertically, coordinate) {
    const { x, y } = coordinate;
    return placeVertically
      ? Number(y) + length <= 10
      : Number(x) + length <= 10;
  }

  isCollided(id, length, placeVertically, coordinate) {
    // get tiles occupied by other ships
    const occupiedTiles = this.getShipIds()
      .filter((shipId) => shipId !== id)
      .flatMap((shipId) => {
        const currentShip = this.getShip(shipId);
        return this.getOccupiedTiles(
          currentShip.length,
          currentShip.placeVertically,
          currentShip.coordinate,
        );
      });

    // create a set from occupied tiles (can be omitted)
    const occupiedSet = new Set(occupiedTiles);
    // check validity of new placement
    const newPlacementTiles = this.getOccupiedTiles(
      length,
      placeVertically,
      coordinate,
    );
    for (const tile of newPlacementTiles) {
      if (occupiedSet.has(tile)) {
        return true;
      }
    }

    return false;
  }

  isPlaceable(id, newCoordinate) {
    const ship = this.getShip(id);
    return (
      this.isInsideBoard(ship.length, ship.placeVertically, newCoordinate) &&
      !this.isCollided(id, ship.length, ship.placeVertically, newCoordinate)
    );
  }

  isTurnable(id) {
    const ship = this.getShip(id);
    return (
      this.isInsideBoard(ship.length, !ship.placeVertically, ship.coordinate) &&
      !this.isCollided(id, ship.length, !ship.placeVertically, ship.coordinate)
    );
  }
}


/***/ }),

/***/ "./src/models/Bot/Bot.js":
/*!*******************************!*\
  !*** ./src/models/Bot/Bot.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Bot)
/* harmony export */ });
/* harmony import */ var _modules_randomNumber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../modules/randomNumber */ "./src/modules/randomNumber.js");
/* harmony import */ var _settings_shipLengths__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../settings/shipLengths */ "./src/settings/shipLengths.js");
/* harmony import */ var _Gameboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Gameboard */ "./src/models/Gameboard/index.js");
/* harmony import */ var _Ship__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Ship */ "./src/models/Ship/index.js");





const LAST_USED_QUEUE = {
  vertical: 0,
  horizontal: 1,
  none: 2,
};

class Bot {
  constructor() {
    this.gameboard = new _Gameboard__WEBPACK_IMPORTED_MODULE_2__["default"]();
    this.placeShipsRandomly(_settings_shipLengths__WEBPACK_IMPORTED_MODULE_1__["default"].slice());
    this.attackedTiles = [];
    this.lastAttackedTile = {};
    this.lastUsedQueue = LAST_USED_QUEUE.none;
    this.verticalAttackQueue = [];
    this.horizontalAttackQueue = [];
  }

  placeShipsRandomly(shipsLength) {
    shipsLength.forEach((length) => {
      const ship = new _Ship__WEBPACK_IMPORTED_MODULE_3__["default"](length);
      const placeVertically = Math.random() < 0.5;

      while (true) {
        const x = (0,_modules_randomNumber__WEBPACK_IMPORTED_MODULE_0__["default"])(0, 9);
        const y = (0,_modules_randomNumber__WEBPACK_IMPORTED_MODULE_0__["default"])(0, 9);
        if (this.gameboard.place(ship, { x, y }, placeVertically)) {
          break;
        }
      }
    });
  }

  isTileChosenBefore(tile) {
    return this.attackedTiles.some((t) => t.x === tile.x && t.y === tile.y);
  }

  selectRandomTile() {
    let selectedTile;
    do {
      selectedTile = {
        x: (0,_modules_randomNumber__WEBPACK_IMPORTED_MODULE_0__["default"])(0, 9),
        y: (0,_modules_randomNumber__WEBPACK_IMPORTED_MODULE_0__["default"])(0, 9),
      };
    } while (this.isTileChosenBefore(selectedTile));
    return selectedTile;
  }

  async selectNextTile() {
    let selectedTile;
    if (this.verticalAttackQueue.length > 0) {
      selectedTile = this.verticalAttackQueue.shift();
      this.lastUsedQueue = LAST_USED_QUEUE.vertical;
    } else if (this.horizontalAttackQueue.length > 0) {
      selectedTile = this.horizontalAttackQueue.shift();
      this.lastUsedQueue = LAST_USED_QUEUE.horizontal;
    } else {
      selectedTile = this.selectRandomTile();
      this.lastUsedQueue = LAST_USED_QUEUE.none;
    }

    this.attackedTiles.push(selectedTile);
    this.lastAttackedTile = selectedTile;
    return new Promise((resolve) => {
      setTimeout(() => resolve(selectedTile), 300);
    });
  }

  registerHit() {
    // if last queue used is none, push to both queues
    // otherwise push to correspond queue and clear the other queue
    if (this.lastUsedQueue === LAST_USED_QUEUE.vertical) {
      this.horizontalAttackQueue = [];
      const nextTile = {
        x: this.lastAttackedTile.x,
        y: this.lastAttackedTile.y + 1,
      };

      if (!this.isTileChosenBefore(nextTile) && nextTile.y <= 9) {
        this.verticalAttackQueue.push(nextTile);
      }
    } else if (this.lastUsedQueue === LAST_USED_QUEUE.horizontal) {
      this.verticalAttackQueue = [];
      const nextTile = {
        x: this.lastAttackedTile.x + 1,
        y: this.lastAttackedTile.y,
      };

      if (!this.isTileChosenBefore(nextTile) && nextTile.x <= 9) {
        this.horizontalAttackQueue.push(nextTile);
      }
    } else {
      this.horizontalAttackQueue = [
        { x: this.lastAttackedTile.x - 1, y: this.lastAttackedTile.y },
        { x: this.lastAttackedTile.x + 1, y: this.lastAttackedTile.y },
      ].filter(
        (tile) => !this.isTileChosenBefore(tile) && tile.x >= 0 && tile.x <= 9,
      );

      this.verticalAttackQueue = [
        ...this.verticalAttackQueue,
        { x: this.lastAttackedTile.x, y: this.lastAttackedTile.y - 1 },
        { x: this.lastAttackedTile.x, y: this.lastAttackedTile.y + 1 },
      ].filter(
        (tile) => !this.isTileChosenBefore(tile) && tile.y >= 0 && tile.y <= 9,
      );
    }
  }

  getBoard() {
    return this.gameboard.board;
  }

  receiveAttack(coordiantes) {
    return this.gameboard.receiveAttack(coordiantes);
  }

  isAllSunk() {
    return this.gameboard.isAllSunk();
  }
}


/***/ }),

/***/ "./src/models/Bot/index.js":
/*!*********************************!*\
  !*** ./src/models/Bot/index.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Bot__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Bot */ "./src/models/Bot/Bot.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Bot__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./src/models/GameController/GameController.js":
/*!*****************************************************!*\
  !*** ./src/models/GameController/GameController.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GameController)
/* harmony export */ });
/* harmony import */ var _Bot__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Bot */ "./src/models/Bot/index.js");
/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Player */ "./src/models/Player/index.js");



class GameController {
  playerName = "Player";
  botName = "Bot";

  constructor(UIHandler, playerMap) {
    this._UIHandler = UIHandler;

    this.player = new _Player__WEBPACK_IMPORTED_MODULE_1__["default"]();
    this.player.setUpBoard(playerMap);
    this.attacker = this.player;

    this.bot = new _Bot__WEBPACK_IMPORTED_MODULE_0__["default"]();
    this.defender = this.bot;

    this.isGameEnded = false;
  }

  async requestPlayerMove() {
    const coordinate = await this._UIHandler.requestPlayerMove();
    return coordinate;
  }

  async playPlayerTurn() {
    const coordinate = await this.requestPlayerMove();
    const isHit = this.bot.receiveAttack(coordinate);
    this._UIHandler.updateBotBoard(coordinate, isHit);
    this._UIHandler.announceTurnResult(this.playerName, coordinate, isHit);
  }

  async playBotTurn() {
    const coordinate = await this.bot.selectNextTile();
    const isHit = this.player.receiveAttack(coordinate);
    this._UIHandler.updatePlayerBoard(coordinate, isHit);
    this._UIHandler.announceTurnResult(this.botName, coordinate, isHit);
    return isHit;
  }

  switchTurn() {
    [this.attacker, this.defender] = [this.defender, this.attacker];
  }

  announceGameEnd() {
    const winner =
      this.attacker === this.player ? this.playerName : this.botName;
    this._UIHandler.announceGameEnd(winner);
  }

  async play() {
    while (!this.isGameEnded) {
      if (this.attacker === this.player) {
        await this.playPlayerTurn();
      } else {
        const isHit = await this.playBotTurn();
        if (isHit) {
          this.bot.registerHit();
        }
      }

      if (this.defender.isAllSunk()) {
        this.isGameEnded = true;
      } else {
        this.switchTurn();
      }
    }

    this.announceGameEnd();
  }
}


/***/ }),

/***/ "./src/models/GameController/index.js":
/*!********************************************!*\
  !*** ./src/models/GameController/index.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _GameController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GameController */ "./src/models/GameController/GameController.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_GameController__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./src/models/Gameboard/Gameboard.js":
/*!*******************************************!*\
  !*** ./src/models/Gameboard/Gameboard.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Gameboard)
/* harmony export */ });
/* harmony import */ var _settings_tileState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../settings/tileState */ "./src/settings/tileState.js");


class Gameboard {
  constructor() {
    this.board = new Array(10 * 10);
    for (let i = 0; i < 100; i++) {
      this.board[i] = _settings_tileState__WEBPACK_IMPORTED_MODULE_0__["default"].NO_SHIP;
    }

    this.ships = [];
  }

  calculateShipIndexes(coordinate, length, placeVertically) {
    const indexes = [];
    const { x, y } = coordinate;
    const startingIndex = y * 10 + x;

    if (placeVertically) {
      for (let i = 0; i < length; i++) {
        indexes.push(startingIndex + 10 * i);
      }
    } else {
      for (let i = 0; i < length; i++) {
        indexes.push(startingIndex + i);
      }
    }

    return indexes;
  }

  place(ship, coordinate, placeVertically) {
    const indexes = this.calculateShipIndexes(
      coordinate,
      ship.getLength(),
      placeVertically,
    );

    if (!this.isPlaceable(indexes, placeVertically)) {
      return false;
    }

    this.ships.push(ship);
    indexes.forEach((i) => (this.board[i] = ship));
    return true;
  }

  isPlaceable(indexes, placeVertically) {
    if (indexes.some((i) => this.board[i] !== _settings_tileState__WEBPACK_IMPORTED_MODULE_0__["default"].NO_SHIP)) {
      // cannot place on occupied tile
      return false;
    }

    if (placeVertically && indexes.at(-1) % 10 !== indexes.at(0) % 10) {
      // cannot place on 2 columns
      return false;
    }

    if (!placeVertically && indexes.at(-1) % 10 < indexes.at(0) % 10) {
      // cannot place on 2 rows
      return false;
    }

    return true;
  }

  calculateAttackIndex(coordinate) {
    const { x, y } = coordinate;
    return y * 10 + Number(x);
  }

  receiveAttack(coordinate) {
    const i = this.calculateAttackIndex(coordinate);
    const tile = this.board[i];

    if (tile === _settings_tileState__WEBPACK_IMPORTED_MODULE_0__["default"].NO_SHIP) {
      this.board[i] = _settings_tileState__WEBPACK_IMPORTED_MODULE_0__["default"].MISSED;
      return false;
    }

    const shipOnTile = tile;
    shipOnTile.hit();
    this.board[i] = _settings_tileState__WEBPACK_IMPORTED_MODULE_0__["default"].HIT;
    return true;
  }

  isAllSunk() {
    for (const ship of this.ships) {
      if (!ship.isSunk()) {
        return false;
      }
    }

    return true;
  }
}


/***/ }),

/***/ "./src/models/Gameboard/index.js":
/*!***************************************!*\
  !*** ./src/models/Gameboard/index.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Gameboard */ "./src/models/Gameboard/Gameboard.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Gameboard__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./src/models/Player/Player.js":
/*!*************************************!*\
  !*** ./src/models/Player/Player.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Player)
/* harmony export */ });
/* harmony import */ var _Gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Gameboard */ "./src/models/Gameboard/index.js");
/* harmony import */ var _Ship__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Ship */ "./src/models/Ship/index.js");



class Player {
  constructor() {
    this.gameboard = new _Gameboard__WEBPACK_IMPORTED_MODULE_0__["default"]();
  }

  getBoard() {
    return this.gameboard.board;
  }

  receiveAttack(coordinate) {
    return this.gameboard.receiveAttack(coordinate);
  }

  isAllSunk() {
    return this.gameboard.isAllSunk();
  }

  setUpBoard(map) {
    map.forEach((s) => {
      const ship = new _Ship__WEBPACK_IMPORTED_MODULE_1__["default"](s.length);
      this.gameboard.place(ship, s.coordinate, s.placeVertically);
    });
  }
}


/***/ }),

/***/ "./src/models/Player/index.js":
/*!************************************!*\
  !*** ./src/models/Player/index.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Player */ "./src/models/Player/Player.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Player__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./src/models/Ship/Ship.js":
/*!*********************************!*\
  !*** ./src/models/Ship/Ship.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Ship)
/* harmony export */ });
class Ship {
  constructor(length) {
    this.length = length;
    this.hits = 0;
  }

  getLength() {
    return this.length;
  }

  hit() {
    this.hits = this.hits + 1;
  }

  isSunk() {
    return this.length === this.hits;
  }
}


/***/ }),

/***/ "./src/models/Ship/index.js":
/*!**********************************!*\
  !*** ./src/models/Ship/index.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Ship */ "./src/models/Ship/Ship.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Ship__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./src/models/UIHandler/UIHandler.js":
/*!*******************************************!*\
  !*** ./src/models/UIHandler/UIHandler.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _modules_createBoard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../modules/createBoard */ "./src/modules/createBoard.js");
/* harmony import */ var _modules_createElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../modules/createElement */ "./src/modules/createElement.js");



class UIHandler {
  playerBoardId = "player-board";
  botBoardId = "bot-board";

  constructor(playerMap) {
    this.botBoard = this.createBotBoard();
    this.playerBoard = this.createPlayerBoard(playerMap);
    this.announcers = [(0,_modules_createElement__WEBPACK_IMPORTED_MODULE_1__["default"])("p", { text: "Play your turn." })]; // in case we want more announcers
  }

  getBoards() {
    return [this.playerBoard, this.botBoard];
  }

  getAnnouncers() {
    return this.announcers;
  }

  addAnnouncement(message) {
    this.announcers[0].textContent = message;
  }

  async requestPlayerMove() {
    const coordinate = await this.waitUserMove(this.botBoard);
    return coordinate;
  }

  async waitUserMove(board) {
    return new Promise((resolve) => {
      const sendCoordinate = (event) => {
        const target = event.target;
        if (target.classList.contains("unknown")) {
          board.removeEventListener("click", sendCoordinate);
          const x = target.dataset.x;
          const y = target.dataset.y;
          resolve({ x, y });
        }
      };

      board.addEventListener("click", sendCoordinate);
    });
  }

  announceTurnResult(attacker, coordinate, isHit) {
    const xCoordinate = {
      0: "A",
      1: "B",
      2: "C",
      3: "D",
      4: "E",
      5: "F",
      6: "G",
      7: "H",
      8: "I",
      9: "J",
    };
    const hitOrMiss = isHit ? "hits a ship" : "misses";
    this.addAnnouncement(
      `${attacker} launches an attack on ${xCoordinate[coordinate.x]}${Number(coordinate.y) + 1} and ${hitOrMiss}!`,
    );
  }

  announceGameEnd(winner) {
    this.addAnnouncement(`${winner} has won the game!`);
  }

  updatePlayerBoard(coordinate, isHit) {
    const tile = (0,_modules_createElement__WEBPACK_IMPORTED_MODULE_1__["default"])("div", {
      className: ["tile", isHit ? "hit" : "missed"],
    });
    const currentTile = this.getTileFromCoordinate(
      this.playerBoard,
      coordinate,
    );
    currentTile.replaceWith(tile);
  }

  updateBotBoard(coordinate, isHit) {
    const tile = (0,_modules_createElement__WEBPACK_IMPORTED_MODULE_1__["default"])("div", {
      className: ["tile", isHit ? "hit" : "missed"],
    });
    const currentTile = this.getTileFromCoordinate(this.botBoard, coordinate);
    currentTile.replaceWith(tile);
  }

  getTileFromCoordinate(board, coordinate) {
    const tile = board.querySelector(
      `[data-x='${coordinate.x}'][data-y='${coordinate.y}']`,
    );
    return tile;
  }

  createBotBoard() {
    const board = (0,_modules_createBoard__WEBPACK_IMPORTED_MODULE_0__["default"])(this.botBoardId);
    const tiles = board.getElementsByClassName("tile");
    for (const tile of tiles) {
      tile.classList.add("unknown");
    }

    return board;
  }

  createPlayerBoard(map) {
    function calculateShipCoordinates(
      startCoordinate,
      length,
      placeVertically,
    ) {
      const coordinates = [];

      for (let i = 0; i < length; i++) {
        const x = placeVertically ? startCoordinate.x : startCoordinate.x + i;
        const y = placeVertically ? startCoordinate.y + i : startCoordinate.y;
        coordinates.push({ x, y });
      }

      return coordinates;
    }

    const board = (0,_modules_createBoard__WEBPACK_IMPORTED_MODULE_0__["default"])(this.playerBoardId);

    for (const ship of map) {
      const coordinates = calculateShipCoordinates(
        ship.coordinate,
        ship.length,
        ship.placeVertically,
      );

      for (const c of coordinates) {
        const tile = board.querySelector(`[data-x='${c.x}'][data-y='${c.y}']`);
        tile.classList.add("has-ship");
      }
    }

    return board;
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UIHandler);


/***/ }),

/***/ "./src/models/UIHandler/index.js":
/*!***************************************!*\
  !*** ./src/models/UIHandler/index.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _UIHandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UIHandler */ "./src/models/UIHandler/UIHandler.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_UIHandler__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./src/modules/createBoard.js":
/*!************************************!*\
  !*** ./src/modules/createBoard.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createEmptyBoard)
/* harmony export */ });
/* harmony import */ var _createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createElement */ "./src/modules/createElement.js");


function createEmptyBoard(id) {
  const rows = [];

  // create labels for columns
  const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
  const lettersRow = [
    (0,_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])("div", { className: ["label"] }), // empty tile at the corner
    ...letters.map((letter) => {
      const container = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
        className: ["label"],
        text: letter,
      });
      return container;
    }),
  ];
  rows.push(
    (0,_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])("div", { className: ["label-row"], children: lettersRow }),
  );

  // create tile rows with number label for each row
  for (let y = 0; y < 10; y++) {
    const row = [];
    row.push(
      (0,_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
        className: ["label"],
        text: y + 1,
      }),
    );
    for (let x = 0; x < 10; x++) {
      const tile = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])("div", {
        className: ["tile"],
      });
      tile.dataset.x = x;
      tile.dataset.y = y;
      row.push(tile);
    }
    rows.push(
      (0,_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])("div", { className: ["board-row"], children: row }),
    );
  }

  const board = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])("div", { id, children: rows });
  return board;
}


/***/ }),

/***/ "./src/modules/createElement.js":
/*!**************************************!*\
  !*** ./src/modules/createElement.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createElement)
/* harmony export */ });
function createElement(tag, attributes) {
  const element = document.createElement(tag);

  if (attributes) {
    if ("className" in attributes) {
      element.classList.add(...attributes.className);
    }
    if ("id" in attributes) {
      element.id = attributes.id;
    }
    if ("children" in attributes) {
      element.replaceChildren(...attributes.children);
    }
    if ("text" in attributes) {
      element.textContent = attributes.text;
    }
  }

  return element;
}


/***/ }),

/***/ "./src/modules/randomNumber.js":
/*!*************************************!*\
  !*** ./src/modules/randomNumber.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ randomIntegerInclusive)
/* harmony export */ });
function randomIntegerInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


/***/ }),

/***/ "./src/settings/shipLengths.js":
/*!*************************************!*\
  !*** ./src/settings/shipLengths.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const SHIP_LENGTHS = [2, 2, 3, 3, 4, 5];

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SHIP_LENGTHS);


/***/ }),

/***/ "./src/settings/tileState.js":
/*!***********************************!*\
  !*** ./src/settings/tileState.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const TILE_STATE = {
  NO_SHIP: 0,
  MISSED: 1,
  HIT: 2,
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TILE_STATE);


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
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _models_BoardPlacer_BoardPlacer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./models/BoardPlacer/BoardPlacer */ "./src/models/BoardPlacer/BoardPlacer.js");
/* harmony import */ var _models_GameController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models/GameController */ "./src/models/GameController/index.js");
/* harmony import */ var _models_UIHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./models/UIHandler */ "./src/models/UIHandler/index.js");
/* harmony import */ var _modules_createElement__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/createElement */ "./src/modules/createElement.js");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");






const startButton = document.getElementById("start");
const boardArea = document.getElementById("board-area");
const announcer = document.getElementById("announcer");
const buttonArea = document.getElementById("button-area");

async function setBoard() {
  const boardPlacer = new _models_BoardPlacer_BoardPlacer__WEBPACK_IMPORTED_MODULE_0__["default"]();
  const [board, finishPlacingButton] = boardPlacer.getUI();

  // set up buttons and labels
  startButton.classList.add("hidden");
  boardArea.replaceChildren(board);
  buttonArea.appendChild(finishPlacingButton);
  const announcers = [
    (0,_modules_createElement__WEBPACK_IMPORTED_MODULE_3__["default"])("p", {
      text: "Click to rotate ships, or drag to move them around.",
    }),
  ];
  announcer.replaceChildren(...announcers);

  // wait until user finishes placing
  const playerMap = await boardPlacer.waitUserStart();
  finishPlacingButton.remove();
  return playerMap;
}

async function playGame(playerMap) {
  const uiHandler = new _models_UIHandler__WEBPACK_IMPORTED_MODULE_2__["default"](playerMap);
  const gameController = new _models_GameController__WEBPACK_IMPORTED_MODULE_1__["default"](uiHandler, playerMap);
  boardArea.replaceChildren(...uiHandler.getBoards());
  announcer.replaceChildren(...uiHandler.getAnnouncers());
  await gameController.play();

  // game ended
  startButton.classList.remove("hidden");
  startButton.textContent = "Play again";
}

async function startHandler() {
  const playerMap = await setBoard();
  playGame(playerMap);
}

startButton.addEventListener("click", startHandler);

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QSxpRUFBZSxVQUFVLEVBQUM7Ozs7Ozs7VUNOMUI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7O0FDQTJEO0FBQ047QUFDVjtBQUNTO0FBQzlCOztBQUV0QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBCQUEwQix1RUFBVztBQUNyQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxrRUFBYTtBQUNqQjtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx3QkFBd0IseURBQVM7QUFDakMsNkJBQTZCLDhEQUFjO0FBQzNDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL21vZGVscy9Cb2FyZFBsYWNlci9Cb2FyZFBsYWNlci5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL21vZGVscy9Cb2FyZFBsYWNlci9QbGF5ZXJNYXAuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9tb2RlbHMvQm90L0JvdC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL21vZGVscy9Cb3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9tb2RlbHMvR2FtZUNvbnRyb2xsZXIvR2FtZUNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9tb2RlbHMvR2FtZUNvbnRyb2xsZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9tb2RlbHMvR2FtZWJvYXJkL0dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL21vZGVscy9HYW1lYm9hcmQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9tb2RlbHMvUGxheWVyL1BsYXllci5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL21vZGVscy9QbGF5ZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9tb2RlbHMvU2hpcC9TaGlwLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvbW9kZWxzL1NoaXAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9tb2RlbHMvVUlIYW5kbGVyL1VJSGFuZGxlci5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL21vZGVscy9VSUhhbmRsZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9tb2R1bGVzL2NyZWF0ZUJvYXJkLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvbW9kdWxlcy9jcmVhdGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvbW9kdWxlcy9yYW5kb21OdW1iZXIuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9zZXR0aW5ncy9zaGlwTGVuZ3Rocy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL3NldHRpbmdzL3RpbGVTdGF0ZS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGA6cm9vdCB7XG4gIC0tdGlsZS1ib3JkZXI6ICM5MzkzZmY7XG4gIC0tdGlsZS1iZzogI2ZmZmZmZjtcbiAgLS10aWxlLXNoaXAtYmc6ICNjY2NjZmM7XG4gIC0tdGlsZS1oaXQtYmc6ICNmZjhkOGQ7XG4gIC0tdGlsZS1taXNzZWQtYmc6ICNiYmZmZGM7XG4gIC0tdGlsZS1zaGlwLWJnOiAjYjdlZGZmO1xuICAtLXRpbGUtaG92ZXItYmc6ICNmZmY3YzY7XG4gIC0tYm9hcmQtbGFiZWw6ICM1YzVjNWM7XG5cbiAgLS10aWxlLXNpemU6IDQwcHg7XG59XG5cbi8qIGdlbmVyYWwgKi9cblxuYm9keSB7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xufVxuXG5oMSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU1NTVmNTtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIHBhZGRpbmc6IDEycHggMTZweDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuI2Fubm91bmNlciB7XG4gIHdpZHRoOiA1MDBweDtcbiAgbWFyZ2luOiBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgcGFkZGluZzogMTVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxMCwgMjQxLCAyNTEpO1xuICBib3JkZXItcmFkaXVzOiAxNnB4O1xufVxuXG4vKiBiYXR0bGVzaGlwICovXG5cbiNib2FyZC1hcmVhIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG59XG5cbiNidXR0b24tYXJlYSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW46IDIwcHggYXV0bztcbn1cblxuLnRpbGUge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB3aWR0aDogdmFyKC0tdGlsZS1zaXplKTtcbiAgaGVpZ2h0OiB2YXIoLS10aWxlLXNpemUpO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS10aWxlLWJvcmRlcik7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAmLmhpdCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGlsZS1oaXQtYmcpO1xuICB9XG5cbiAgJi5taXNzZWQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRpbGUtbWlzc2VkLWJnKTtcbiAgfVxuXG4gICYuaGFzLXNoaXAge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRpbGUtc2hpcC1iZyk7XG4gIH1cbn1cblxuI2JvdC1ib2FyZCAudGlsZSB7XG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRpbGUtaG92ZXItYmcpO1xuICB9XG59XG5cbi5ib2FyZC1yb3c6bnRoLWNoaWxkKDIpID4gLnRpbGUge1xuICBib3JkZXItdG9wOiAycHggc29saWQgdmFyKC0tdGlsZS1ib3JkZXIpO1xufVxuXG4uYm9hcmQtcm93Omxhc3QtY2hpbGQgPiAudGlsZSB7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS10aWxlLWJvcmRlcik7XG59XG5cbi50aWxlOm50aC1jaGlsZCgyKSB7XG4gIGJvcmRlci1sZWZ0OiAycHggc29saWQgdmFyKC0tdGlsZS1ib3JkZXIpO1xufVxuXG4udGlsZTpsYXN0LWNoaWxkIHtcbiAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgdmFyKC0tdGlsZS1ib3JkZXIpO1xufVxuXG4ubGFiZWwtcm93LFxuLmJvYXJkLXJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMC44NXJlbTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IHZhcigtLXRpbGUtc2l6ZSk7XG4gIGhlaWdodDogdmFyKC0tdGlsZS1zaXplKTtcbiAgY29sb3I6IHZhcigtLWJvYXJkLWxhYmVsKTtcbn1cblxuLmhpZGRlbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi8qIGJvYXJkIHBsYWNlciAqL1xuLnNoaXAge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTU1NWY1O1xuICBvcGFjaXR5OiAwLjM7XG4gIC8qIG1ha2Ugc2hpcCBjbGlja2FibGUgb24gZXZlcnkgdGlsZSBpdCBzcGFucyAqL1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDE7XG59XG5cbi5zaGFkb3cge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZkNGE3O1xuICAvKiBtYWtlIGl0IG5vdCByZS1yZW5kZXJlZCBldmVyeSBkcmFnZW50ZXIgZXZlbnQgKi9cbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAtMTtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QixzQkFBc0I7RUFDdEIseUJBQXlCO0VBQ3pCLHVCQUF1QjtFQUN2Qix3QkFBd0I7RUFDeEIsc0JBQXNCOztFQUV0QixpQkFBaUI7QUFDbkI7O0FBRUEsWUFBWTs7QUFFWjtFQUNFLHlDQUF5QztBQUMzQzs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osZUFBZTtFQUNmLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsYUFBYTtFQUNiLG9DQUFvQztFQUNwQyxtQkFBbUI7QUFDckI7O0FBRUEsZUFBZTs7QUFFZjtFQUNFLGFBQWE7RUFDYiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsd0JBQXdCO0VBQ3hCLG9DQUFvQztFQUNwQyxrQkFBa0I7O0VBRWxCO0lBQ0Usb0NBQW9DO0VBQ3RDOztFQUVBO0lBQ0UsdUNBQXVDO0VBQ3pDOztFQUVBO0lBQ0UscUNBQXFDO0VBQ3ZDO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLHNDQUFzQztFQUN4QztBQUNGOztBQUVBO0VBQ0Usd0NBQXdDO0FBQzFDOztBQUVBO0VBQ0UsMkNBQTJDO0FBQzdDOztBQUVBO0VBQ0UseUNBQXlDO0FBQzNDOztBQUVBO0VBQ0UsMENBQTBDO0FBQzVDOztBQUVBOztFQUVFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2Qix3QkFBd0I7RUFDeEIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBLGlCQUFpQjtBQUNqQjtFQUNFLHNCQUFzQjtFQUN0Qix5QkFBeUI7RUFDekIsWUFBWTtFQUNaLCtDQUErQztFQUMvQyxrQkFBa0I7RUFDbEIsVUFBVTtBQUNaOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGtEQUFrRDtFQUNsRCxrQkFBa0I7RUFDbEIsV0FBVztBQUNiXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gIC0tdGlsZS1ib3JkZXI6ICM5MzkzZmY7XFxuICAtLXRpbGUtYmc6ICNmZmZmZmY7XFxuICAtLXRpbGUtc2hpcC1iZzogI2NjY2NmYztcXG4gIC0tdGlsZS1oaXQtYmc6ICNmZjhkOGQ7XFxuICAtLXRpbGUtbWlzc2VkLWJnOiAjYmJmZmRjO1xcbiAgLS10aWxlLXNoaXAtYmc6ICNiN2VkZmY7XFxuICAtLXRpbGUtaG92ZXItYmc6ICNmZmY3YzY7XFxuICAtLWJvYXJkLWxhYmVsOiAjNWM1YzVjO1xcblxcbiAgLS10aWxlLXNpemU6IDQwcHg7XFxufVxcblxcbi8qIGdlbmVyYWwgKi9cXG5cXG5ib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5oMSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbmJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTU1NWY1O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgcGFkZGluZzogMTJweCAxNnB4O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jYW5ub3VuY2VyIHtcXG4gIHdpZHRoOiA1MDBweDtcXG4gIG1hcmdpbjogYXV0bztcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIHBhZGRpbmc6IDE1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjEwLCAyNDEsIDI1MSk7XFxuICBib3JkZXItcmFkaXVzOiAxNnB4O1xcbn1cXG5cXG4vKiBiYXR0bGVzaGlwICovXFxuXFxuI2JvYXJkLWFyZWEge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbn1cXG5cXG4jYnV0dG9uLWFyZWEge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgbWFyZ2luOiAyMHB4IGF1dG87XFxufVxcblxcbi50aWxlIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICB3aWR0aDogdmFyKC0tdGlsZS1zaXplKTtcXG4gIGhlaWdodDogdmFyKC0tdGlsZS1zaXplKTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXRpbGUtYm9yZGVyKTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXG4gICYuaGl0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGlsZS1oaXQtYmcpO1xcbiAgfVxcblxcbiAgJi5taXNzZWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10aWxlLW1pc3NlZC1iZyk7XFxuICB9XFxuXFxuICAmLmhhcy1zaGlwIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGlsZS1zaGlwLWJnKTtcXG4gIH1cXG59XFxuXFxuI2JvdC1ib2FyZCAudGlsZSB7XFxuICAmOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGlsZS1ob3Zlci1iZyk7XFxuICB9XFxufVxcblxcbi5ib2FyZC1yb3c6bnRoLWNoaWxkKDIpID4gLnRpbGUge1xcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIHZhcigtLXRpbGUtYm9yZGVyKTtcXG59XFxuXFxuLmJvYXJkLXJvdzpsYXN0LWNoaWxkID4gLnRpbGUge1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLXRpbGUtYm9yZGVyKTtcXG59XFxuXFxuLnRpbGU6bnRoLWNoaWxkKDIpIHtcXG4gIGJvcmRlci1sZWZ0OiAycHggc29saWQgdmFyKC0tdGlsZS1ib3JkZXIpO1xcbn1cXG5cXG4udGlsZTpsYXN0LWNoaWxkIHtcXG4gIGJvcmRlci1yaWdodDogMnB4IHNvbGlkIHZhcigtLXRpbGUtYm9yZGVyKTtcXG59XFxuXFxuLmxhYmVsLXJvdyxcXG4uYm9hcmQtcm93IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5sYWJlbCB7XFxuICBmb250LXNpemU6IDAuODVyZW07XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiB2YXIoLS10aWxlLXNpemUpO1xcbiAgaGVpZ2h0OiB2YXIoLS10aWxlLXNpemUpO1xcbiAgY29sb3I6IHZhcigtLWJvYXJkLWxhYmVsKTtcXG59XFxuXFxuLmhpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4vKiBib2FyZCBwbGFjZXIgKi9cXG4uc2hpcCB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU1NTVmNTtcXG4gIG9wYWNpdHk6IDAuMztcXG4gIC8qIG1ha2Ugc2hpcCBjbGlja2FibGUgb24gZXZlcnkgdGlsZSBpdCBzcGFucyAqL1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgei1pbmRleDogMTtcXG59XFxuXFxuLnNoYWRvdyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZkNGE3O1xcbiAgLyogbWFrZSBpdCBub3QgcmUtcmVuZGVyZWQgZXZlcnkgZHJhZ2VudGVyIGV2ZW50ICovXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB6LWluZGV4OiAtMTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBjcmVhdGVFbXB0eUJvYXJkIGZyb20gXCIuLi8uLi9tb2R1bGVzL2NyZWF0ZUJvYXJkXCI7XG5pbXBvcnQgY3JlYXRlRWxlbWVudCBmcm9tIFwiLi4vLi4vbW9kdWxlcy9jcmVhdGVFbGVtZW50XCI7XG5pbXBvcnQgU0hJUF9MRU5HVEhTIGZyb20gXCIuLi8uLi9zZXR0aW5ncy9zaGlwTGVuZ3Roc1wiO1xuaW1wb3J0IFBsYXllck1hcCBmcm9tIFwiLi9QbGF5ZXJNYXBcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQm9hcmRQbGFjZXIge1xuICBUSUxFX1NJWkUgPSA0MDtcbiAgRFRfSUQgPSBcImFwcGxpY2F0aW9uL2lkL1wiO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuYmxhbmtJbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgIHRoaXMuYmxhbmtJbWFnZS5zcmMgPVxuICAgICAgXCJkYXRhOmltYWdlL2dpZjtiYXNlNjQsUjBsR09EbGhBUUFCQUlBQUFBVUVCQUFBQUN3QUFBQUFBUUFCQUFBQ0FrUUJBRHM9XCI7XG4gICAgdGhpcy5wbGF5ZXJNYXAgPSBuZXcgUGxheWVyTWFwKFNISVBfTEVOR1RIUy5zbGljZSgpKTtcbiAgICB0aGlzLmNyZWF0ZVVJKCk7XG4gICAgdGhpcy5zZXRIYW5kbGVycygpO1xuICB9XG5cbiAgY3JlYXRlU2hpcChpZCwgbGVuZ3RoLCBwbGFjZVZlcnRpY2FsbHkpIHtcbiAgICBjb25zdCBzaGlwID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogW1wic2hpcFwiXSB9KTtcbiAgICBzaGlwLmRhdGFzZXQuaWQgPSBpZDtcbiAgICBzaGlwLnNldEF0dHJpYnV0ZShcImRyYWdnYWJsZVwiLCBcInRydWVcIik7XG5cbiAgICBzaGlwLnN0eWxlLndpZHRoID0gcGxhY2VWZXJ0aWNhbGx5XG4gICAgICA/IGAke3RoaXMuVElMRV9TSVpFfXB4YFxuICAgICAgOiBgJHt0aGlzLlRJTEVfU0laRSAqIGxlbmd0aH1weGA7XG4gICAgc2hpcC5zdHlsZS5oZWlnaHQgPSBwbGFjZVZlcnRpY2FsbHlcbiAgICAgID8gYCR7dGhpcy5USUxFX1NJWkUgKiBsZW5ndGh9cHhgXG4gICAgICA6IGAke3RoaXMuVElMRV9TSVpFfXB4YDtcblxuICAgIHJldHVybiBzaGlwO1xuICB9XG5cbiAgY3JlYXRlVUkoKSB7XG4gICAgLy8gY3JlYXRlIGJvYXJkXG4gICAgdGhpcy5ib2FyZCA9IGNyZWF0ZUVtcHR5Qm9hcmQoXCJzZXR1cC1ib2FyZFwiKTtcbiAgICAvLyBidXR0b25cbiAgICB0aGlzLnN0YXJ0QnV0dG9uID0gY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCB7IHRleHQ6IFwiU3RhcnQgZ2FtZVwiIH0pO1xuICAgIC8vIHBsYWNlIHNoaXBzXG4gICAgdGhpcy5wbGF5ZXJNYXAuZ2V0U2hpcElkcygpLmZvckVhY2goKGlkKSA9PiB7XG4gICAgICBjb25zdCBzID0gdGhpcy5wbGF5ZXJNYXAuZ2V0U2hpcChpZCk7XG4gICAgICBjb25zdCBzaGlwID0gdGhpcy5jcmVhdGVTaGlwKGlkLCBzLmxlbmd0aCwgcy5wbGFjZVZlcnRpY2FsbHkpO1xuICAgICAgY29uc3QgeyB4LCB5IH0gPSBzLmNvb3JkaW5hdGU7XG4gICAgICBjb25zdCB0aWxlID0gdGhpcy5ib2FyZC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICBgLnRpbGVbZGF0YS14PVwiJHt4fVwiXVtkYXRhLXk9XCIke3l9XCJdYCxcbiAgICAgICk7XG4gICAgICB0aWxlLmFwcGVuZENoaWxkKHNoaXApO1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0VUkoKSB7XG4gICAgcmV0dXJuIFt0aGlzLmJvYXJkLCB0aGlzLnN0YXJ0QnV0dG9uXTtcbiAgfVxuXG4gIHNldEhhbmRsZXJzKCkge1xuICAgIGNvbnN0IHRpbGVzID0gdGhpcy5ib2FyZC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRpbGVcIik7XG4gICAgWy4uLnRpbGVzXS5mb3JFYWNoKCh0aWxlKSA9PiB7XG4gICAgICB0aWxlLmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnZW50ZXJcIiwgdGhpcy5kcmFnRW50ZXJIYW5kbGVyLmJpbmQodGhpcykpO1xuICAgICAgdGlsZS5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ292ZXJcIiwgdGhpcy5kcmFnT3ZlckhhbmRsZXIuYmluZCh0aGlzKSk7XG4gICAgICB0aWxlLmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnbGVhdmVcIiwgdGhpcy5kcmFnTGVhdmVIYW5kbGVyLmJpbmQodGhpcykpO1xuICAgICAgdGlsZS5hZGRFdmVudExpc3RlbmVyKFwiZHJvcFwiLCB0aGlzLmRyb3BIYW5kbGVyLmJpbmQodGhpcykpO1xuICAgIH0pO1xuXG4gICAgY29uc3Qgc2hpcHMgPSB0aGlzLmJvYXJkLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2hpcFwiKTtcbiAgICBbLi4uc2hpcHNdLmZvckVhY2goKHNoaXApID0+IHtcbiAgICAgIHNoaXAuYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdzdGFydFwiLCB0aGlzLmRyYWdTdGFydEhhbmRsZXIuYmluZCh0aGlzKSk7XG4gICAgICBzaGlwLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLnRvZ2dsZVZlcnRpY2FsLmJpbmQodGhpcykpO1xuICAgIH0pO1xuICB9XG5cbiAgYXN5bmMgd2FpdFVzZXJTdGFydCgpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgIHRoaXMuc3RhcnRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgcmVzb2x2ZSh0aGlzLnBsYXllck1hcC5nZXRTaGlwcygpKTtcbiAgICAgIH0pLFxuICAgICAgICB7IG9uY2U6IHRydWUgfTtcbiAgICB9KTtcbiAgfVxuXG4gIHRvZ2dsZVZlcnRpY2FsKGUpIHtcbiAgICBjb25zdCBzaGlwID0gZS50YXJnZXQ7XG4gICAgY29uc3Qgc2hpcElkID0gc2hpcC5kYXRhc2V0LmlkO1xuXG4gICAgaWYgKHRoaXMucGxheWVyTWFwLmlzVHVybmFibGUoc2hpcElkKSkge1xuICAgICAgLy8gdXBkYXRlIG1hcCBpbmZvXG4gICAgICB0aGlzLnBsYXllck1hcC51cGRhdGVWZXJ0aWNhbChzaGlwSWQpO1xuICAgICAgLy8gdXBkYXRlIGRpc3BsYXlcbiAgICAgIFtzaGlwLnN0eWxlLndpZHRoLCBzaGlwLnN0eWxlLmhlaWdodF0gPSBbXG4gICAgICAgIHNoaXAuc3R5bGUuaGVpZ2h0LFxuICAgICAgICBzaGlwLnN0eWxlLndpZHRoLFxuICAgICAgXTtcbiAgICB9XG4gIH1cblxuICBjcmVhdGVTaGlwU2hhZG93KGxlbmd0aCwgcGxhY2VWZXJ0aWNhbGx5KSB7XG4gICAgY29uc3Qgc2hpcCA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFtcInNoYWRvd1wiXSB9KTtcblxuICAgIHNoaXAuc3R5bGUud2lkdGggPSBwbGFjZVZlcnRpY2FsbHlcbiAgICAgID8gYCR7dGhpcy5USUxFX1NJWkV9cHhgXG4gICAgICA6IGAke3RoaXMuVElMRV9TSVpFICogbGVuZ3RofXB4YDtcbiAgICBzaGlwLnN0eWxlLmhlaWdodCA9IHBsYWNlVmVydGljYWxseVxuICAgICAgPyBgJHt0aGlzLlRJTEVfU0laRSAqIGxlbmd0aH1weGBcbiAgICAgIDogYCR7dGhpcy5USUxFX1NJWkV9cHhgO1xuXG4gICAgcmV0dXJuIHNoaXA7XG4gIH1cblxuICBkcmFnU3RhcnRIYW5kbGVyKGUpIHtcbiAgICBjb25zdCBzaGlwSWQgPSBlLnRhcmdldC5kYXRhc2V0LmlkO1xuICAgIGUuZGF0YVRyYW5zZmVyLnNldERhdGEoYCR7dGhpcy5EVF9JRH0ke3NoaXBJZH1gLCBcIlwiKTtcbiAgICBlLmRhdGFUcmFuc2Zlci5zZXREcmFnSW1hZ2UodGhpcy5ibGFua0ltYWdlLCAwLCAwKTtcbiAgICBlLmRhdGFUcmFuc2Zlci5lZmZlY3RBbGxvd2VkID0gXCJtb3ZlXCI7XG4gIH1cblxuICBnZXRUcmFuc2ZlcklkKGl0ZW1zKSB7XG4gICAgY29uc3QgaWQgPSBpdGVtc1xuICAgICAgLmZpbmQoKGkpID0+IGkudHlwZS5zdGFydHNXaXRoKHRoaXMuRFRfSUQpKVxuICAgICAgLnR5cGUuc3Vic3RyaW5nKHRoaXMuRFRfSUQubGVuZ3RoKTtcblxuICAgIHJldHVybiBpZDtcbiAgfVxuXG4gIGlzU2hpcChpdGVtcykge1xuICAgIHJldHVybiBpdGVtcy5zb21lKChpKSA9PiBpLnR5cGUuc3RhcnRzV2l0aCh0aGlzLkRUX0lEKSk7XG4gIH1cblxuICBkcmFnRW50ZXJIYW5kbGVyKGUpIHtcbiAgICBjb25zdCBpc1NoaXBEcmFnZ2VkID0gdGhpcy5pc1NoaXAoWy4uLmUuZGF0YVRyYW5zZmVyLml0ZW1zXSk7XG5cbiAgICBpZiAoaXNTaGlwRHJhZ2dlZCkge1xuICAgICAgLy8gZW5zdXJlIGRyYWdnZWQgZWxlbWVudCBpcyBhIHNoaXBcbiAgICAgIGNvbnN0IHNoaXBJZCA9IHRoaXMuZ2V0VHJhbnNmZXJJZChbLi4uZS5kYXRhVHJhbnNmZXIuaXRlbXNdKTtcbiAgICAgIGNvbnN0IGNvb3JkaW5hdGUgPSB7XG4gICAgICAgIHg6IE51bWJlcihlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC54KSxcbiAgICAgICAgeTogTnVtYmVyKGUuY3VycmVudFRhcmdldC5kYXRhc2V0LnkpLFxuICAgICAgfTtcblxuICAgICAgaWYgKFxuICAgICAgICAhZS5jdXJyZW50VGFyZ2V0LnF1ZXJ5U2VsZWN0b3IoXCIuc2hpcFwiKSAmJlxuICAgICAgICB0aGlzLnBsYXllck1hcC5pc1BsYWNlYWJsZShzaGlwSWQsIGNvb3JkaW5hdGUpXG4gICAgICApIHtcbiAgICAgICAgLy8gdGhlIHRpbGUgaG92ZXJlZCBkb2VzIG5vdCBjb250YWluIGEgc2hpcCBhbmQgdGhlIG5ldyBwbGFjZW1lbnQgaXMgdmFsaWRcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCB7IGxlbmd0aCwgcGxhY2VWZXJ0aWNhbGx5IH0gPSB0aGlzLnBsYXllck1hcC5nZXRTaGlwKHNoaXBJZCk7XG4gICAgICAgIGUuY3VycmVudFRhcmdldC5hcHBlbmRDaGlsZChcbiAgICAgICAgICB0aGlzLmNyZWF0ZVNoaXBTaGFkb3cobGVuZ3RoLCBwbGFjZVZlcnRpY2FsbHkpLFxuICAgICAgICApO1xuICAgICAgICBlLmRhdGFUcmFuc2Zlci5kcm9wRWZmZWN0ID0gXCJtb3ZlXCI7XG4gICAgICAgIGUuY3VycmVudFRhcmdldC5kYXRhc2V0LnBsYWNlYWJsZSA9IFwidHJ1ZVwiO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGRyYWdPdmVySGFuZGxlcihlKSB7XG4gICAgY29uc3QgaXNTaGlwRHJhZ2dlZCA9IHRoaXMuaXNTaGlwKFsuLi5lLmRhdGFUcmFuc2Zlci5pdGVtc10pO1xuXG4gICAgaWYgKGUudGFyZ2V0LmRhdGFzZXQucGxhY2VhYmxlID09PSBcInRydWVcIiAmJiBpc1NoaXBEcmFnZ2VkKSB7XG4gICAgICAvLyBlbnN1cmUgYSB0aWxlIGlzIGhvdmVyZWQgYW5kIGRyYWdnZWQgZWxlbWVudCBpcyBhIHNoaXBcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGUuZGF0YVRyYW5zZmVyLmRyb3BFZmZlY3QgPSBcIm1vdmVcIjtcbiAgICB9XG4gIH1cblxuICBkcmFnTGVhdmVIYW5kbGVyKGUpIHtcbiAgICAvLyByZW1vdmUgc2hhZG93IGluIHRoaXMgdGlsZVxuICAgIGNvbnN0IHNoYWRvdyA9IGUudGFyZ2V0LnF1ZXJ5U2VsZWN0b3IoXCIuc2hhZG93XCIpO1xuICAgIGlmIChzaGFkb3cpIHtcbiAgICAgIHNoYWRvdy5yZW1vdmUoKTtcbiAgICB9XG4gICAgZGVsZXRlIGUuY3VycmVudFRhcmdldC5kYXRhc2V0LnBsYWNlYWJsZTtcbiAgfVxuXG4gIGRyb3BIYW5kbGVyKGUpIHtcbiAgICAvLyByZW1vdmUgc2hhZG93IGluIHRoaXMgdGlsZVxuICAgIGNvbnN0IHNoYWRvdyA9IGUudGFyZ2V0LnF1ZXJ5U2VsZWN0b3IoXCIuc2hhZG93XCIpO1xuICAgIGlmIChzaGFkb3cpIHtcbiAgICAgIHNoYWRvdy5yZW1vdmUoKTtcbiAgICB9XG5cbiAgICBjb25zdCBzaGlwSWQgPSB0aGlzLmdldFRyYW5zZmVySWQoWy4uLmUuZGF0YVRyYW5zZmVyLml0ZW1zXSk7XG4gICAgY29uc3Qgc2hpcCA9IHRoaXMuYm9hcmQucXVlcnlTZWxlY3RvcihgW2RhdGEtaWQ9XCIke3NoaXBJZH1cIl1gKTtcbiAgICAvLyB1cGRhdGUgbWFwIGluZm9cbiAgICBjb25zdCBuZXdDb29yZGluYXRlID0ge1xuICAgICAgeDogTnVtYmVyKGUuY3VycmVudFRhcmdldC5kYXRhc2V0LngpLFxuICAgICAgeTogTnVtYmVyKGUuY3VycmVudFRhcmdldC5kYXRhc2V0LnkpLFxuICAgIH07XG4gICAgdGhpcy5wbGF5ZXJNYXAudXBkYXRlQ29vcmRpbmF0ZShzaGlwSWQsIG5ld0Nvb3JkaW5hdGUpO1xuICAgIC8vIHVwZGF0ZSBkaXNwbGF5XG4gICAgaWYgKGUudGFyZ2V0ICE9PSBzaGlwKSB7XG4gICAgICBlLnRhcmdldC5hcHBlbmRDaGlsZChzaGlwKTtcbiAgICAgIGRlbGV0ZSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5wbGFjZWFibGU7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgcmFuZG9tSW50ZWdlckluY2x1c2l2ZSBmcm9tIFwiLi4vLi4vbW9kdWxlcy9yYW5kb21OdW1iZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheWVyTWFwIHtcbiAgY29uc3RydWN0b3Ioc2hpcHNMZW5ndGgpIHtcbiAgICB0aGlzLm1hcCA9IHt9O1xuICAgIHRoaXMucGxhY2VTaGlwc1JhbmRvbWx5KHNoaXBzTGVuZ3RoKTtcbiAgfVxuXG4gIHBsYWNlU2hpcHNSYW5kb21seShzaGlwc0xlbmd0aCkge1xuICAgIHNoaXBzTGVuZ3RoLmZvckVhY2goKGxlbmd0aCwgaWQpID0+IHtcbiAgICAgIGxldCB4O1xuICAgICAgbGV0IHk7XG4gICAgICBsZXQgcGxhY2VWZXJ0aWNhbGx5O1xuICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgcGxhY2VWZXJ0aWNhbGx5ID0gTWF0aC5yYW5kb20oKSA8IDAuNTtcbiAgICAgICAgeCA9IHJhbmRvbUludGVnZXJJbmNsdXNpdmUoMCwgOSk7XG4gICAgICAgIHkgPSByYW5kb21JbnRlZ2VySW5jbHVzaXZlKDAsIDkpO1xuXG4gICAgICAgIGlmIChcbiAgICAgICAgICB0aGlzLmlzSW5zaWRlQm9hcmQobGVuZ3RoLCBwbGFjZVZlcnRpY2FsbHksIHsgeCwgeSB9KSAmJlxuICAgICAgICAgICF0aGlzLmlzQ29sbGlkZWQoaWQsIGxlbmd0aCwgcGxhY2VWZXJ0aWNhbGx5LCB7IHgsIHkgfSlcbiAgICAgICAgKSB7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXMubWFwW2lkXSA9IHtcbiAgICAgICAgbGVuZ3RoLFxuICAgICAgICBjb29yZGluYXRlOiB7IHgsIHkgfSxcbiAgICAgICAgcGxhY2VWZXJ0aWNhbGx5LFxuICAgICAgfTtcbiAgICB9KTtcbiAgfVxuXG4gIGdldFNoaXBzKCkge1xuICAgIHJldHVybiBPYmplY3QudmFsdWVzKHRoaXMubWFwKTtcbiAgfVxuXG4gIGdldFNoaXAoaWQpIHtcbiAgICByZXR1cm4gdGhpcy5tYXBbaWRdO1xuICB9XG5cbiAgZ2V0U2hpcElkcygpIHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXModGhpcy5tYXApO1xuICB9XG5cbiAgdXBkYXRlVmVydGljYWwoaWQpIHtcbiAgICB0aGlzLm1hcFtpZF0ucGxhY2VWZXJ0aWNhbGx5ID0gIXRoaXMubWFwW2lkXS5wbGFjZVZlcnRpY2FsbHk7XG4gIH1cblxuICB1cGRhdGVDb29yZGluYXRlKGlkLCBjb29yZGluYXRlKSB7XG4gICAgY29uc3QgeyB4LCB5IH0gPSBjb29yZGluYXRlO1xuICAgIHRoaXMubWFwW2lkXS5jb29yZGluYXRlLnggPSB4O1xuICAgIHRoaXMubWFwW2lkXS5jb29yZGluYXRlLnkgPSB5O1xuICB9XG5cbiAgZ2V0T2NjdXBpZWRUaWxlcyhsZW5ndGgsIHBsYWNlVmVydGljYWxseSwgY29vcmRpbmF0ZSkge1xuICAgIGNvbnN0IHsgeCwgeSB9ID0gY29vcmRpbmF0ZTtcbiAgICBjb25zdCB0aWxlcyA9IFtdO1xuICAgIGlmIChwbGFjZVZlcnRpY2FsbHkpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdGlsZXMucHVzaCh7IHgsIHk6IHkgKyBpIH0pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHRpbGVzLnB1c2goeyB4OiB4ICsgaSwgeSB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGlsZXMubWFwKCh0aWxlKSA9PiB0aWxlLnkgKiAxMCArIE51bWJlcih0aWxlLngpKTtcbiAgfVxuXG4gIGlzSW5zaWRlQm9hcmQobGVuZ3RoLCBwbGFjZVZlcnRpY2FsbHksIGNvb3JkaW5hdGUpIHtcbiAgICBjb25zdCB7IHgsIHkgfSA9IGNvb3JkaW5hdGU7XG4gICAgcmV0dXJuIHBsYWNlVmVydGljYWxseVxuICAgICAgPyBOdW1iZXIoeSkgKyBsZW5ndGggPD0gMTBcbiAgICAgIDogTnVtYmVyKHgpICsgbGVuZ3RoIDw9IDEwO1xuICB9XG5cbiAgaXNDb2xsaWRlZChpZCwgbGVuZ3RoLCBwbGFjZVZlcnRpY2FsbHksIGNvb3JkaW5hdGUpIHtcbiAgICAvLyBnZXQgdGlsZXMgb2NjdXBpZWQgYnkgb3RoZXIgc2hpcHNcbiAgICBjb25zdCBvY2N1cGllZFRpbGVzID0gdGhpcy5nZXRTaGlwSWRzKClcbiAgICAgIC5maWx0ZXIoKHNoaXBJZCkgPT4gc2hpcElkICE9PSBpZClcbiAgICAgIC5mbGF0TWFwKChzaGlwSWQpID0+IHtcbiAgICAgICAgY29uc3QgY3VycmVudFNoaXAgPSB0aGlzLmdldFNoaXAoc2hpcElkKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0T2NjdXBpZWRUaWxlcyhcbiAgICAgICAgICBjdXJyZW50U2hpcC5sZW5ndGgsXG4gICAgICAgICAgY3VycmVudFNoaXAucGxhY2VWZXJ0aWNhbGx5LFxuICAgICAgICAgIGN1cnJlbnRTaGlwLmNvb3JkaW5hdGUsXG4gICAgICAgICk7XG4gICAgICB9KTtcblxuICAgIC8vIGNyZWF0ZSBhIHNldCBmcm9tIG9jY3VwaWVkIHRpbGVzIChjYW4gYmUgb21pdHRlZClcbiAgICBjb25zdCBvY2N1cGllZFNldCA9IG5ldyBTZXQob2NjdXBpZWRUaWxlcyk7XG4gICAgLy8gY2hlY2sgdmFsaWRpdHkgb2YgbmV3IHBsYWNlbWVudFxuICAgIGNvbnN0IG5ld1BsYWNlbWVudFRpbGVzID0gdGhpcy5nZXRPY2N1cGllZFRpbGVzKFxuICAgICAgbGVuZ3RoLFxuICAgICAgcGxhY2VWZXJ0aWNhbGx5LFxuICAgICAgY29vcmRpbmF0ZSxcbiAgICApO1xuICAgIGZvciAoY29uc3QgdGlsZSBvZiBuZXdQbGFjZW1lbnRUaWxlcykge1xuICAgICAgaWYgKG9jY3VwaWVkU2V0Lmhhcyh0aWxlKSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpc1BsYWNlYWJsZShpZCwgbmV3Q29vcmRpbmF0ZSkge1xuICAgIGNvbnN0IHNoaXAgPSB0aGlzLmdldFNoaXAoaWQpO1xuICAgIHJldHVybiAoXG4gICAgICB0aGlzLmlzSW5zaWRlQm9hcmQoc2hpcC5sZW5ndGgsIHNoaXAucGxhY2VWZXJ0aWNhbGx5LCBuZXdDb29yZGluYXRlKSAmJlxuICAgICAgIXRoaXMuaXNDb2xsaWRlZChpZCwgc2hpcC5sZW5ndGgsIHNoaXAucGxhY2VWZXJ0aWNhbGx5LCBuZXdDb29yZGluYXRlKVxuICAgICk7XG4gIH1cblxuICBpc1R1cm5hYmxlKGlkKSB7XG4gICAgY29uc3Qgc2hpcCA9IHRoaXMuZ2V0U2hpcChpZCk7XG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMuaXNJbnNpZGVCb2FyZChzaGlwLmxlbmd0aCwgIXNoaXAucGxhY2VWZXJ0aWNhbGx5LCBzaGlwLmNvb3JkaW5hdGUpICYmXG4gICAgICAhdGhpcy5pc0NvbGxpZGVkKGlkLCBzaGlwLmxlbmd0aCwgIXNoaXAucGxhY2VWZXJ0aWNhbGx5LCBzaGlwLmNvb3JkaW5hdGUpXG4gICAgKTtcbiAgfVxufVxuIiwiaW1wb3J0IHJhbmRvbUludGVnZXJJbmNsdXNpdmUgZnJvbSBcIi4uLy4uL21vZHVsZXMvcmFuZG9tTnVtYmVyXCI7XG5pbXBvcnQgU0hJUF9MRU5HVEhTIGZyb20gXCIuLi8uLi9zZXR0aW5ncy9zaGlwTGVuZ3Roc1wiO1xuaW1wb3J0IEdhbWVib2FyZCBmcm9tIFwiLi4vR2FtZWJvYXJkXCI7XG5pbXBvcnQgU2hpcCBmcm9tIFwiLi4vU2hpcFwiO1xuXG5jb25zdCBMQVNUX1VTRURfUVVFVUUgPSB7XG4gIHZlcnRpY2FsOiAwLFxuICBob3Jpem9udGFsOiAxLFxuICBub25lOiAyLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQm90IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5nYW1lYm9hcmQgPSBuZXcgR2FtZWJvYXJkKCk7XG4gICAgdGhpcy5wbGFjZVNoaXBzUmFuZG9tbHkoU0hJUF9MRU5HVEhTLnNsaWNlKCkpO1xuICAgIHRoaXMuYXR0YWNrZWRUaWxlcyA9IFtdO1xuICAgIHRoaXMubGFzdEF0dGFja2VkVGlsZSA9IHt9O1xuICAgIHRoaXMubGFzdFVzZWRRdWV1ZSA9IExBU1RfVVNFRF9RVUVVRS5ub25lO1xuICAgIHRoaXMudmVydGljYWxBdHRhY2tRdWV1ZSA9IFtdO1xuICAgIHRoaXMuaG9yaXpvbnRhbEF0dGFja1F1ZXVlID0gW107XG4gIH1cblxuICBwbGFjZVNoaXBzUmFuZG9tbHkoc2hpcHNMZW5ndGgpIHtcbiAgICBzaGlwc0xlbmd0aC5mb3JFYWNoKChsZW5ndGgpID0+IHtcbiAgICAgIGNvbnN0IHNoaXAgPSBuZXcgU2hpcChsZW5ndGgpO1xuICAgICAgY29uc3QgcGxhY2VWZXJ0aWNhbGx5ID0gTWF0aC5yYW5kb20oKSA8IDAuNTtcblxuICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgY29uc3QgeCA9IHJhbmRvbUludGVnZXJJbmNsdXNpdmUoMCwgOSk7XG4gICAgICAgIGNvbnN0IHkgPSByYW5kb21JbnRlZ2VySW5jbHVzaXZlKDAsIDkpO1xuICAgICAgICBpZiAodGhpcy5nYW1lYm9hcmQucGxhY2Uoc2hpcCwgeyB4LCB5IH0sIHBsYWNlVmVydGljYWxseSkpIHtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgaXNUaWxlQ2hvc2VuQmVmb3JlKHRpbGUpIHtcbiAgICByZXR1cm4gdGhpcy5hdHRhY2tlZFRpbGVzLnNvbWUoKHQpID0+IHQueCA9PT0gdGlsZS54ICYmIHQueSA9PT0gdGlsZS55KTtcbiAgfVxuXG4gIHNlbGVjdFJhbmRvbVRpbGUoKSB7XG4gICAgbGV0IHNlbGVjdGVkVGlsZTtcbiAgICBkbyB7XG4gICAgICBzZWxlY3RlZFRpbGUgPSB7XG4gICAgICAgIHg6IHJhbmRvbUludGVnZXJJbmNsdXNpdmUoMCwgOSksXG4gICAgICAgIHk6IHJhbmRvbUludGVnZXJJbmNsdXNpdmUoMCwgOSksXG4gICAgICB9O1xuICAgIH0gd2hpbGUgKHRoaXMuaXNUaWxlQ2hvc2VuQmVmb3JlKHNlbGVjdGVkVGlsZSkpO1xuICAgIHJldHVybiBzZWxlY3RlZFRpbGU7XG4gIH1cblxuICBhc3luYyBzZWxlY3ROZXh0VGlsZSgpIHtcbiAgICBsZXQgc2VsZWN0ZWRUaWxlO1xuICAgIGlmICh0aGlzLnZlcnRpY2FsQXR0YWNrUXVldWUubGVuZ3RoID4gMCkge1xuICAgICAgc2VsZWN0ZWRUaWxlID0gdGhpcy52ZXJ0aWNhbEF0dGFja1F1ZXVlLnNoaWZ0KCk7XG4gICAgICB0aGlzLmxhc3RVc2VkUXVldWUgPSBMQVNUX1VTRURfUVVFVUUudmVydGljYWw7XG4gICAgfSBlbHNlIGlmICh0aGlzLmhvcml6b250YWxBdHRhY2tRdWV1ZS5sZW5ndGggPiAwKSB7XG4gICAgICBzZWxlY3RlZFRpbGUgPSB0aGlzLmhvcml6b250YWxBdHRhY2tRdWV1ZS5zaGlmdCgpO1xuICAgICAgdGhpcy5sYXN0VXNlZFF1ZXVlID0gTEFTVF9VU0VEX1FVRVVFLmhvcml6b250YWw7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNlbGVjdGVkVGlsZSA9IHRoaXMuc2VsZWN0UmFuZG9tVGlsZSgpO1xuICAgICAgdGhpcy5sYXN0VXNlZFF1ZXVlID0gTEFTVF9VU0VEX1FVRVVFLm5vbmU7XG4gICAgfVxuXG4gICAgdGhpcy5hdHRhY2tlZFRpbGVzLnB1c2goc2VsZWN0ZWRUaWxlKTtcbiAgICB0aGlzLmxhc3RBdHRhY2tlZFRpbGUgPSBzZWxlY3RlZFRpbGU7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHJlc29sdmUoc2VsZWN0ZWRUaWxlKSwgMzAwKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlZ2lzdGVySGl0KCkge1xuICAgIC8vIGlmIGxhc3QgcXVldWUgdXNlZCBpcyBub25lLCBwdXNoIHRvIGJvdGggcXVldWVzXG4gICAgLy8gb3RoZXJ3aXNlIHB1c2ggdG8gY29ycmVzcG9uZCBxdWV1ZSBhbmQgY2xlYXIgdGhlIG90aGVyIHF1ZXVlXG4gICAgaWYgKHRoaXMubGFzdFVzZWRRdWV1ZSA9PT0gTEFTVF9VU0VEX1FVRVVFLnZlcnRpY2FsKSB7XG4gICAgICB0aGlzLmhvcml6b250YWxBdHRhY2tRdWV1ZSA9IFtdO1xuICAgICAgY29uc3QgbmV4dFRpbGUgPSB7XG4gICAgICAgIHg6IHRoaXMubGFzdEF0dGFja2VkVGlsZS54LFxuICAgICAgICB5OiB0aGlzLmxhc3RBdHRhY2tlZFRpbGUueSArIDEsXG4gICAgICB9O1xuXG4gICAgICBpZiAoIXRoaXMuaXNUaWxlQ2hvc2VuQmVmb3JlKG5leHRUaWxlKSAmJiBuZXh0VGlsZS55IDw9IDkpIHtcbiAgICAgICAgdGhpcy52ZXJ0aWNhbEF0dGFja1F1ZXVlLnB1c2gobmV4dFRpbGUpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodGhpcy5sYXN0VXNlZFF1ZXVlID09PSBMQVNUX1VTRURfUVVFVUUuaG9yaXpvbnRhbCkge1xuICAgICAgdGhpcy52ZXJ0aWNhbEF0dGFja1F1ZXVlID0gW107XG4gICAgICBjb25zdCBuZXh0VGlsZSA9IHtcbiAgICAgICAgeDogdGhpcy5sYXN0QXR0YWNrZWRUaWxlLnggKyAxLFxuICAgICAgICB5OiB0aGlzLmxhc3RBdHRhY2tlZFRpbGUueSxcbiAgICAgIH07XG5cbiAgICAgIGlmICghdGhpcy5pc1RpbGVDaG9zZW5CZWZvcmUobmV4dFRpbGUpICYmIG5leHRUaWxlLnggPD0gOSkge1xuICAgICAgICB0aGlzLmhvcml6b250YWxBdHRhY2tRdWV1ZS5wdXNoKG5leHRUaWxlKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5ob3Jpem9udGFsQXR0YWNrUXVldWUgPSBbXG4gICAgICAgIHsgeDogdGhpcy5sYXN0QXR0YWNrZWRUaWxlLnggLSAxLCB5OiB0aGlzLmxhc3RBdHRhY2tlZFRpbGUueSB9LFxuICAgICAgICB7IHg6IHRoaXMubGFzdEF0dGFja2VkVGlsZS54ICsgMSwgeTogdGhpcy5sYXN0QXR0YWNrZWRUaWxlLnkgfSxcbiAgICAgIF0uZmlsdGVyKFxuICAgICAgICAodGlsZSkgPT4gIXRoaXMuaXNUaWxlQ2hvc2VuQmVmb3JlKHRpbGUpICYmIHRpbGUueCA+PSAwICYmIHRpbGUueCA8PSA5LFxuICAgICAgKTtcblxuICAgICAgdGhpcy52ZXJ0aWNhbEF0dGFja1F1ZXVlID0gW1xuICAgICAgICAuLi50aGlzLnZlcnRpY2FsQXR0YWNrUXVldWUsXG4gICAgICAgIHsgeDogdGhpcy5sYXN0QXR0YWNrZWRUaWxlLngsIHk6IHRoaXMubGFzdEF0dGFja2VkVGlsZS55IC0gMSB9LFxuICAgICAgICB7IHg6IHRoaXMubGFzdEF0dGFja2VkVGlsZS54LCB5OiB0aGlzLmxhc3RBdHRhY2tlZFRpbGUueSArIDEgfSxcbiAgICAgIF0uZmlsdGVyKFxuICAgICAgICAodGlsZSkgPT4gIXRoaXMuaXNUaWxlQ2hvc2VuQmVmb3JlKHRpbGUpICYmIHRpbGUueSA+PSAwICYmIHRpbGUueSA8PSA5LFxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBnZXRCb2FyZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nYW1lYm9hcmQuYm9hcmQ7XG4gIH1cblxuICByZWNlaXZlQXR0YWNrKGNvb3JkaWFudGVzKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2FtZWJvYXJkLnJlY2VpdmVBdHRhY2soY29vcmRpYW50ZXMpO1xuICB9XG5cbiAgaXNBbGxTdW5rKCkge1xuICAgIHJldHVybiB0aGlzLmdhbWVib2FyZC5pc0FsbFN1bmsoKTtcbiAgfVxufVxuIiwiaW1wb3J0IEJvdCBmcm9tIFwiLi9Cb3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgQm90O1xuIiwiaW1wb3J0IEJvdCBmcm9tIFwiLi4vQm90XCI7XG5pbXBvcnQgUGxheWVyIGZyb20gXCIuLi9QbGF5ZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZUNvbnRyb2xsZXIge1xuICBwbGF5ZXJOYW1lID0gXCJQbGF5ZXJcIjtcbiAgYm90TmFtZSA9IFwiQm90XCI7XG5cbiAgY29uc3RydWN0b3IoVUlIYW5kbGVyLCBwbGF5ZXJNYXApIHtcbiAgICB0aGlzLl9VSUhhbmRsZXIgPSBVSUhhbmRsZXI7XG5cbiAgICB0aGlzLnBsYXllciA9IG5ldyBQbGF5ZXIoKTtcbiAgICB0aGlzLnBsYXllci5zZXRVcEJvYXJkKHBsYXllck1hcCk7XG4gICAgdGhpcy5hdHRhY2tlciA9IHRoaXMucGxheWVyO1xuXG4gICAgdGhpcy5ib3QgPSBuZXcgQm90KCk7XG4gICAgdGhpcy5kZWZlbmRlciA9IHRoaXMuYm90O1xuXG4gICAgdGhpcy5pc0dhbWVFbmRlZCA9IGZhbHNlO1xuICB9XG5cbiAgYXN5bmMgcmVxdWVzdFBsYXllck1vdmUoKSB7XG4gICAgY29uc3QgY29vcmRpbmF0ZSA9IGF3YWl0IHRoaXMuX1VJSGFuZGxlci5yZXF1ZXN0UGxheWVyTW92ZSgpO1xuICAgIHJldHVybiBjb29yZGluYXRlO1xuICB9XG5cbiAgYXN5bmMgcGxheVBsYXllclR1cm4oKSB7XG4gICAgY29uc3QgY29vcmRpbmF0ZSA9IGF3YWl0IHRoaXMucmVxdWVzdFBsYXllck1vdmUoKTtcbiAgICBjb25zdCBpc0hpdCA9IHRoaXMuYm90LnJlY2VpdmVBdHRhY2soY29vcmRpbmF0ZSk7XG4gICAgdGhpcy5fVUlIYW5kbGVyLnVwZGF0ZUJvdEJvYXJkKGNvb3JkaW5hdGUsIGlzSGl0KTtcbiAgICB0aGlzLl9VSUhhbmRsZXIuYW5ub3VuY2VUdXJuUmVzdWx0KHRoaXMucGxheWVyTmFtZSwgY29vcmRpbmF0ZSwgaXNIaXQpO1xuICB9XG5cbiAgYXN5bmMgcGxheUJvdFR1cm4oKSB7XG4gICAgY29uc3QgY29vcmRpbmF0ZSA9IGF3YWl0IHRoaXMuYm90LnNlbGVjdE5leHRUaWxlKCk7XG4gICAgY29uc3QgaXNIaXQgPSB0aGlzLnBsYXllci5yZWNlaXZlQXR0YWNrKGNvb3JkaW5hdGUpO1xuICAgIHRoaXMuX1VJSGFuZGxlci51cGRhdGVQbGF5ZXJCb2FyZChjb29yZGluYXRlLCBpc0hpdCk7XG4gICAgdGhpcy5fVUlIYW5kbGVyLmFubm91bmNlVHVyblJlc3VsdCh0aGlzLmJvdE5hbWUsIGNvb3JkaW5hdGUsIGlzSGl0KTtcbiAgICByZXR1cm4gaXNIaXQ7XG4gIH1cblxuICBzd2l0Y2hUdXJuKCkge1xuICAgIFt0aGlzLmF0dGFja2VyLCB0aGlzLmRlZmVuZGVyXSA9IFt0aGlzLmRlZmVuZGVyLCB0aGlzLmF0dGFja2VyXTtcbiAgfVxuXG4gIGFubm91bmNlR2FtZUVuZCgpIHtcbiAgICBjb25zdCB3aW5uZXIgPVxuICAgICAgdGhpcy5hdHRhY2tlciA9PT0gdGhpcy5wbGF5ZXIgPyB0aGlzLnBsYXllck5hbWUgOiB0aGlzLmJvdE5hbWU7XG4gICAgdGhpcy5fVUlIYW5kbGVyLmFubm91bmNlR2FtZUVuZCh3aW5uZXIpO1xuICB9XG5cbiAgYXN5bmMgcGxheSgpIHtcbiAgICB3aGlsZSAoIXRoaXMuaXNHYW1lRW5kZWQpIHtcbiAgICAgIGlmICh0aGlzLmF0dGFja2VyID09PSB0aGlzLnBsYXllcikge1xuICAgICAgICBhd2FpdCB0aGlzLnBsYXlQbGF5ZXJUdXJuKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBpc0hpdCA9IGF3YWl0IHRoaXMucGxheUJvdFR1cm4oKTtcbiAgICAgICAgaWYgKGlzSGl0KSB7XG4gICAgICAgICAgdGhpcy5ib3QucmVnaXN0ZXJIaXQoKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5kZWZlbmRlci5pc0FsbFN1bmsoKSkge1xuICAgICAgICB0aGlzLmlzR2FtZUVuZGVkID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc3dpdGNoVHVybigpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuYW5ub3VuY2VHYW1lRW5kKCk7XG4gIH1cbn1cbiIsImltcG9ydCBHYW1lQ29udHJvbGxlciBmcm9tIFwiLi9HYW1lQ29udHJvbGxlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBHYW1lQ29udHJvbGxlcjtcbiIsImltcG9ydCBUSUxFX1NUQVRFIGZyb20gXCIuLi8uLi9zZXR0aW5ncy90aWxlU3RhdGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZWJvYXJkIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5ib2FyZCA9IG5ldyBBcnJheSgxMCAqIDEwKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwMDsgaSsrKSB7XG4gICAgICB0aGlzLmJvYXJkW2ldID0gVElMRV9TVEFURS5OT19TSElQO1xuICAgIH1cblxuICAgIHRoaXMuc2hpcHMgPSBbXTtcbiAgfVxuXG4gIGNhbGN1bGF0ZVNoaXBJbmRleGVzKGNvb3JkaW5hdGUsIGxlbmd0aCwgcGxhY2VWZXJ0aWNhbGx5KSB7XG4gICAgY29uc3QgaW5kZXhlcyA9IFtdO1xuICAgIGNvbnN0IHsgeCwgeSB9ID0gY29vcmRpbmF0ZTtcbiAgICBjb25zdCBzdGFydGluZ0luZGV4ID0geSAqIDEwICsgeDtcblxuICAgIGlmIChwbGFjZVZlcnRpY2FsbHkpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaW5kZXhlcy5wdXNoKHN0YXJ0aW5nSW5kZXggKyAxMCAqIGkpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGluZGV4ZXMucHVzaChzdGFydGluZ0luZGV4ICsgaSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGluZGV4ZXM7XG4gIH1cblxuICBwbGFjZShzaGlwLCBjb29yZGluYXRlLCBwbGFjZVZlcnRpY2FsbHkpIHtcbiAgICBjb25zdCBpbmRleGVzID0gdGhpcy5jYWxjdWxhdGVTaGlwSW5kZXhlcyhcbiAgICAgIGNvb3JkaW5hdGUsXG4gICAgICBzaGlwLmdldExlbmd0aCgpLFxuICAgICAgcGxhY2VWZXJ0aWNhbGx5LFxuICAgICk7XG5cbiAgICBpZiAoIXRoaXMuaXNQbGFjZWFibGUoaW5kZXhlcywgcGxhY2VWZXJ0aWNhbGx5KSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHRoaXMuc2hpcHMucHVzaChzaGlwKTtcbiAgICBpbmRleGVzLmZvckVhY2goKGkpID0+ICh0aGlzLmJvYXJkW2ldID0gc2hpcCkpO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaXNQbGFjZWFibGUoaW5kZXhlcywgcGxhY2VWZXJ0aWNhbGx5KSB7XG4gICAgaWYgKGluZGV4ZXMuc29tZSgoaSkgPT4gdGhpcy5ib2FyZFtpXSAhPT0gVElMRV9TVEFURS5OT19TSElQKSkge1xuICAgICAgLy8gY2Fubm90IHBsYWNlIG9uIG9jY3VwaWVkIHRpbGVcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAocGxhY2VWZXJ0aWNhbGx5ICYmIGluZGV4ZXMuYXQoLTEpICUgMTAgIT09IGluZGV4ZXMuYXQoMCkgJSAxMCkge1xuICAgICAgLy8gY2Fubm90IHBsYWNlIG9uIDIgY29sdW1uc1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGlmICghcGxhY2VWZXJ0aWNhbGx5ICYmIGluZGV4ZXMuYXQoLTEpICUgMTAgPCBpbmRleGVzLmF0KDApICUgMTApIHtcbiAgICAgIC8vIGNhbm5vdCBwbGFjZSBvbiAyIHJvd3NcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGNhbGN1bGF0ZUF0dGFja0luZGV4KGNvb3JkaW5hdGUpIHtcbiAgICBjb25zdCB7IHgsIHkgfSA9IGNvb3JkaW5hdGU7XG4gICAgcmV0dXJuIHkgKiAxMCArIE51bWJlcih4KTtcbiAgfVxuXG4gIHJlY2VpdmVBdHRhY2soY29vcmRpbmF0ZSkge1xuICAgIGNvbnN0IGkgPSB0aGlzLmNhbGN1bGF0ZUF0dGFja0luZGV4KGNvb3JkaW5hdGUpO1xuICAgIGNvbnN0IHRpbGUgPSB0aGlzLmJvYXJkW2ldO1xuXG4gICAgaWYgKHRpbGUgPT09IFRJTEVfU1RBVEUuTk9fU0hJUCkge1xuICAgICAgdGhpcy5ib2FyZFtpXSA9IFRJTEVfU1RBVEUuTUlTU0VEO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGNvbnN0IHNoaXBPblRpbGUgPSB0aWxlO1xuICAgIHNoaXBPblRpbGUuaGl0KCk7XG4gICAgdGhpcy5ib2FyZFtpXSA9IFRJTEVfU1RBVEUuSElUO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaXNBbGxTdW5rKCkge1xuICAgIGZvciAoY29uc3Qgc2hpcCBvZiB0aGlzLnNoaXBzKSB7XG4gICAgICBpZiAoIXNoaXAuaXNTdW5rKCkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9XG59XG4iLCJpbXBvcnQgR2FtZWJvYXJkIGZyb20gXCIuL0dhbWVib2FyZFwiO1xuXG5leHBvcnQgZGVmYXVsdCBHYW1lYm9hcmQ7XG4iLCJpbXBvcnQgR2FtZWJvYXJkIGZyb20gXCIuLi9HYW1lYm9hcmRcIjtcbmltcG9ydCBTaGlwIGZyb20gXCIuLi9TaGlwXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuZ2FtZWJvYXJkID0gbmV3IEdhbWVib2FyZCgpO1xuICB9XG5cbiAgZ2V0Qm9hcmQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2FtZWJvYXJkLmJvYXJkO1xuICB9XG5cbiAgcmVjZWl2ZUF0dGFjayhjb29yZGluYXRlKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2FtZWJvYXJkLnJlY2VpdmVBdHRhY2soY29vcmRpbmF0ZSk7XG4gIH1cblxuICBpc0FsbFN1bmsoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2FtZWJvYXJkLmlzQWxsU3VuaygpO1xuICB9XG5cbiAgc2V0VXBCb2FyZChtYXApIHtcbiAgICBtYXAuZm9yRWFjaCgocykgPT4ge1xuICAgICAgY29uc3Qgc2hpcCA9IG5ldyBTaGlwKHMubGVuZ3RoKTtcbiAgICAgIHRoaXMuZ2FtZWJvYXJkLnBsYWNlKHNoaXAsIHMuY29vcmRpbmF0ZSwgcy5wbGFjZVZlcnRpY2FsbHkpO1xuICAgIH0pO1xuICB9XG59XG4iLCJpbXBvcnQgUGxheWVyIGZyb20gXCIuL1BsYXllclwiO1xuXG5leHBvcnQgZGVmYXVsdCBQbGF5ZXI7XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBTaGlwIHtcbiAgY29uc3RydWN0b3IobGVuZ3RoKSB7XG4gICAgdGhpcy5sZW5ndGggPSBsZW5ndGg7XG4gICAgdGhpcy5oaXRzID0gMDtcbiAgfVxuXG4gIGdldExlbmd0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5sZW5ndGg7XG4gIH1cblxuICBoaXQoKSB7XG4gICAgdGhpcy5oaXRzID0gdGhpcy5oaXRzICsgMTtcbiAgfVxuXG4gIGlzU3VuaygpIHtcbiAgICByZXR1cm4gdGhpcy5sZW5ndGggPT09IHRoaXMuaGl0cztcbiAgfVxufVxuIiwiaW1wb3J0IFNoaXAgZnJvbSBcIi4vU2hpcFwiO1xuXG5leHBvcnQgZGVmYXVsdCBTaGlwO1xuIiwiaW1wb3J0IGNyZWF0ZUVtcHR5Qm9hcmQgZnJvbSBcIi4uLy4uL21vZHVsZXMvY3JlYXRlQm9hcmRcIjtcbmltcG9ydCBjcmVhdGVFbGVtZW50IGZyb20gXCIuLi8uLi9tb2R1bGVzL2NyZWF0ZUVsZW1lbnRcIjtcblxuY2xhc3MgVUlIYW5kbGVyIHtcbiAgcGxheWVyQm9hcmRJZCA9IFwicGxheWVyLWJvYXJkXCI7XG4gIGJvdEJvYXJkSWQgPSBcImJvdC1ib2FyZFwiO1xuXG4gIGNvbnN0cnVjdG9yKHBsYXllck1hcCkge1xuICAgIHRoaXMuYm90Qm9hcmQgPSB0aGlzLmNyZWF0ZUJvdEJvYXJkKCk7XG4gICAgdGhpcy5wbGF5ZXJCb2FyZCA9IHRoaXMuY3JlYXRlUGxheWVyQm9hcmQocGxheWVyTWFwKTtcbiAgICB0aGlzLmFubm91bmNlcnMgPSBbY3JlYXRlRWxlbWVudChcInBcIiwgeyB0ZXh0OiBcIlBsYXkgeW91ciB0dXJuLlwiIH0pXTsgLy8gaW4gY2FzZSB3ZSB3YW50IG1vcmUgYW5ub3VuY2Vyc1xuICB9XG5cbiAgZ2V0Qm9hcmRzKCkge1xuICAgIHJldHVybiBbdGhpcy5wbGF5ZXJCb2FyZCwgdGhpcy5ib3RCb2FyZF07XG4gIH1cblxuICBnZXRBbm5vdW5jZXJzKCkge1xuICAgIHJldHVybiB0aGlzLmFubm91bmNlcnM7XG4gIH1cblxuICBhZGRBbm5vdW5jZW1lbnQobWVzc2FnZSkge1xuICAgIHRoaXMuYW5ub3VuY2Vyc1swXS50ZXh0Q29udGVudCA9IG1lc3NhZ2U7XG4gIH1cblxuICBhc3luYyByZXF1ZXN0UGxheWVyTW92ZSgpIHtcbiAgICBjb25zdCBjb29yZGluYXRlID0gYXdhaXQgdGhpcy53YWl0VXNlck1vdmUodGhpcy5ib3RCb2FyZCk7XG4gICAgcmV0dXJuIGNvb3JkaW5hdGU7XG4gIH1cblxuICBhc3luYyB3YWl0VXNlck1vdmUoYm9hcmQpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgIGNvbnN0IHNlbmRDb29yZGluYXRlID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcbiAgICAgICAgaWYgKHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJ1bmtub3duXCIpKSB7XG4gICAgICAgICAgYm9hcmQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNlbmRDb29yZGluYXRlKTtcbiAgICAgICAgICBjb25zdCB4ID0gdGFyZ2V0LmRhdGFzZXQueDtcbiAgICAgICAgICBjb25zdCB5ID0gdGFyZ2V0LmRhdGFzZXQueTtcbiAgICAgICAgICByZXNvbHZlKHsgeCwgeSB9KTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgYm9hcmQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNlbmRDb29yZGluYXRlKTtcbiAgICB9KTtcbiAgfVxuXG4gIGFubm91bmNlVHVyblJlc3VsdChhdHRhY2tlciwgY29vcmRpbmF0ZSwgaXNIaXQpIHtcbiAgICBjb25zdCB4Q29vcmRpbmF0ZSA9IHtcbiAgICAgIDA6IFwiQVwiLFxuICAgICAgMTogXCJCXCIsXG4gICAgICAyOiBcIkNcIixcbiAgICAgIDM6IFwiRFwiLFxuICAgICAgNDogXCJFXCIsXG4gICAgICA1OiBcIkZcIixcbiAgICAgIDY6IFwiR1wiLFxuICAgICAgNzogXCJIXCIsXG4gICAgICA4OiBcIklcIixcbiAgICAgIDk6IFwiSlwiLFxuICAgIH07XG4gICAgY29uc3QgaGl0T3JNaXNzID0gaXNIaXQgPyBcImhpdHMgYSBzaGlwXCIgOiBcIm1pc3Nlc1wiO1xuICAgIHRoaXMuYWRkQW5ub3VuY2VtZW50KFxuICAgICAgYCR7YXR0YWNrZXJ9IGxhdW5jaGVzIGFuIGF0dGFjayBvbiAke3hDb29yZGluYXRlW2Nvb3JkaW5hdGUueF19JHtOdW1iZXIoY29vcmRpbmF0ZS55KSArIDF9IGFuZCAke2hpdE9yTWlzc30hYCxcbiAgICApO1xuICB9XG5cbiAgYW5ub3VuY2VHYW1lRW5kKHdpbm5lcikge1xuICAgIHRoaXMuYWRkQW5ub3VuY2VtZW50KGAke3dpbm5lcn0gaGFzIHdvbiB0aGUgZ2FtZSFgKTtcbiAgfVxuXG4gIHVwZGF0ZVBsYXllckJvYXJkKGNvb3JkaW5hdGUsIGlzSGl0KSB7XG4gICAgY29uc3QgdGlsZSA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgY2xhc3NOYW1lOiBbXCJ0aWxlXCIsIGlzSGl0ID8gXCJoaXRcIiA6IFwibWlzc2VkXCJdLFxuICAgIH0pO1xuICAgIGNvbnN0IGN1cnJlbnRUaWxlID0gdGhpcy5nZXRUaWxlRnJvbUNvb3JkaW5hdGUoXG4gICAgICB0aGlzLnBsYXllckJvYXJkLFxuICAgICAgY29vcmRpbmF0ZSxcbiAgICApO1xuICAgIGN1cnJlbnRUaWxlLnJlcGxhY2VXaXRoKHRpbGUpO1xuICB9XG5cbiAgdXBkYXRlQm90Qm9hcmQoY29vcmRpbmF0ZSwgaXNIaXQpIHtcbiAgICBjb25zdCB0aWxlID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICBjbGFzc05hbWU6IFtcInRpbGVcIiwgaXNIaXQgPyBcImhpdFwiIDogXCJtaXNzZWRcIl0sXG4gICAgfSk7XG4gICAgY29uc3QgY3VycmVudFRpbGUgPSB0aGlzLmdldFRpbGVGcm9tQ29vcmRpbmF0ZSh0aGlzLmJvdEJvYXJkLCBjb29yZGluYXRlKTtcbiAgICBjdXJyZW50VGlsZS5yZXBsYWNlV2l0aCh0aWxlKTtcbiAgfVxuXG4gIGdldFRpbGVGcm9tQ29vcmRpbmF0ZShib2FyZCwgY29vcmRpbmF0ZSkge1xuICAgIGNvbnN0IHRpbGUgPSBib2FyZC5xdWVyeVNlbGVjdG9yKFxuICAgICAgYFtkYXRhLXg9JyR7Y29vcmRpbmF0ZS54fSddW2RhdGEteT0nJHtjb29yZGluYXRlLnl9J11gLFxuICAgICk7XG4gICAgcmV0dXJuIHRpbGU7XG4gIH1cblxuICBjcmVhdGVCb3RCb2FyZCgpIHtcbiAgICBjb25zdCBib2FyZCA9IGNyZWF0ZUVtcHR5Qm9hcmQodGhpcy5ib3RCb2FyZElkKTtcbiAgICBjb25zdCB0aWxlcyA9IGJvYXJkLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJ0aWxlXCIpO1xuICAgIGZvciAoY29uc3QgdGlsZSBvZiB0aWxlcykge1xuICAgICAgdGlsZS5jbGFzc0xpc3QuYWRkKFwidW5rbm93blwiKTtcbiAgICB9XG5cbiAgICByZXR1cm4gYm9hcmQ7XG4gIH1cblxuICBjcmVhdGVQbGF5ZXJCb2FyZChtYXApIHtcbiAgICBmdW5jdGlvbiBjYWxjdWxhdGVTaGlwQ29vcmRpbmF0ZXMoXG4gICAgICBzdGFydENvb3JkaW5hdGUsXG4gICAgICBsZW5ndGgsXG4gICAgICBwbGFjZVZlcnRpY2FsbHksXG4gICAgKSB7XG4gICAgICBjb25zdCBjb29yZGluYXRlcyA9IFtdO1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHggPSBwbGFjZVZlcnRpY2FsbHkgPyBzdGFydENvb3JkaW5hdGUueCA6IHN0YXJ0Q29vcmRpbmF0ZS54ICsgaTtcbiAgICAgICAgY29uc3QgeSA9IHBsYWNlVmVydGljYWxseSA/IHN0YXJ0Q29vcmRpbmF0ZS55ICsgaSA6IHN0YXJ0Q29vcmRpbmF0ZS55O1xuICAgICAgICBjb29yZGluYXRlcy5wdXNoKHsgeCwgeSB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvb3JkaW5hdGVzO1xuICAgIH1cblxuICAgIGNvbnN0IGJvYXJkID0gY3JlYXRlRW1wdHlCb2FyZCh0aGlzLnBsYXllckJvYXJkSWQpO1xuXG4gICAgZm9yIChjb25zdCBzaGlwIG9mIG1hcCkge1xuICAgICAgY29uc3QgY29vcmRpbmF0ZXMgPSBjYWxjdWxhdGVTaGlwQ29vcmRpbmF0ZXMoXG4gICAgICAgIHNoaXAuY29vcmRpbmF0ZSxcbiAgICAgICAgc2hpcC5sZW5ndGgsXG4gICAgICAgIHNoaXAucGxhY2VWZXJ0aWNhbGx5LFxuICAgICAgKTtcblxuICAgICAgZm9yIChjb25zdCBjIG9mIGNvb3JkaW5hdGVzKSB7XG4gICAgICAgIGNvbnN0IHRpbGUgPSBib2FyZC5xdWVyeVNlbGVjdG9yKGBbZGF0YS14PScke2MueH0nXVtkYXRhLXk9JyR7Yy55fSddYCk7XG4gICAgICAgIHRpbGUuY2xhc3NMaXN0LmFkZChcImhhcy1zaGlwXCIpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBib2FyZDtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBVSUhhbmRsZXI7XG4iLCJpbXBvcnQgVUlIYW5kbGVyIGZyb20gXCIuL1VJSGFuZGxlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBVSUhhbmRsZXI7XG4iLCJpbXBvcnQgY3JlYXRlRWxlbWVudCBmcm9tIFwiLi9jcmVhdGVFbGVtZW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUVtcHR5Qm9hcmQoaWQpIHtcbiAgY29uc3Qgcm93cyA9IFtdO1xuXG4gIC8vIGNyZWF0ZSBsYWJlbHMgZm9yIGNvbHVtbnNcbiAgY29uc3QgbGV0dGVycyA9IFtcIkFcIiwgXCJCXCIsIFwiQ1wiLCBcIkRcIiwgXCJFXCIsIFwiRlwiLCBcIkdcIiwgXCJIXCIsIFwiSVwiLCBcIkpcIl07XG4gIGNvbnN0IGxldHRlcnNSb3cgPSBbXG4gICAgY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogW1wibGFiZWxcIl0gfSksIC8vIGVtcHR5IHRpbGUgYXQgdGhlIGNvcm5lclxuICAgIC4uLmxldHRlcnMubWFwKChsZXR0ZXIpID0+IHtcbiAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgICBjbGFzc05hbWU6IFtcImxhYmVsXCJdLFxuICAgICAgICB0ZXh0OiBsZXR0ZXIsXG4gICAgICB9KTtcbiAgICAgIHJldHVybiBjb250YWluZXI7XG4gICAgfSksXG4gIF07XG4gIHJvd3MucHVzaChcbiAgICBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBbXCJsYWJlbC1yb3dcIl0sIGNoaWxkcmVuOiBsZXR0ZXJzUm93IH0pLFxuICApO1xuXG4gIC8vIGNyZWF0ZSB0aWxlIHJvd3Mgd2l0aCBudW1iZXIgbGFiZWwgZm9yIGVhY2ggcm93XG4gIGZvciAobGV0IHkgPSAwOyB5IDwgMTA7IHkrKykge1xuICAgIGNvbnN0IHJvdyA9IFtdO1xuICAgIHJvdy5wdXNoKFxuICAgICAgY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgIGNsYXNzTmFtZTogW1wibGFiZWxcIl0sXG4gICAgICAgIHRleHQ6IHkgKyAxLFxuICAgICAgfSksXG4gICAgKTtcbiAgICBmb3IgKGxldCB4ID0gMDsgeCA8IDEwOyB4KyspIHtcbiAgICAgIGNvbnN0IHRpbGUgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAgY2xhc3NOYW1lOiBbXCJ0aWxlXCJdLFxuICAgICAgfSk7XG4gICAgICB0aWxlLmRhdGFzZXQueCA9IHg7XG4gICAgICB0aWxlLmRhdGFzZXQueSA9IHk7XG4gICAgICByb3cucHVzaCh0aWxlKTtcbiAgICB9XG4gICAgcm93cy5wdXNoKFxuICAgICAgY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogW1wiYm9hcmQtcm93XCJdLCBjaGlsZHJlbjogcm93IH0pLFxuICAgICk7XG4gIH1cblxuICBjb25zdCBib2FyZCA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBpZCwgY2hpbGRyZW46IHJvd3MgfSk7XG4gIHJldHVybiBib2FyZDtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQodGFnLCBhdHRyaWJ1dGVzKSB7XG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZyk7XG5cbiAgaWYgKGF0dHJpYnV0ZXMpIHtcbiAgICBpZiAoXCJjbGFzc05hbWVcIiBpbiBhdHRyaWJ1dGVzKSB7XG4gICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoLi4uYXR0cmlidXRlcy5jbGFzc05hbWUpO1xuICAgIH1cbiAgICBpZiAoXCJpZFwiIGluIGF0dHJpYnV0ZXMpIHtcbiAgICAgIGVsZW1lbnQuaWQgPSBhdHRyaWJ1dGVzLmlkO1xuICAgIH1cbiAgICBpZiAoXCJjaGlsZHJlblwiIGluIGF0dHJpYnV0ZXMpIHtcbiAgICAgIGVsZW1lbnQucmVwbGFjZUNoaWxkcmVuKC4uLmF0dHJpYnV0ZXMuY2hpbGRyZW4pO1xuICAgIH1cbiAgICBpZiAoXCJ0ZXh0XCIgaW4gYXR0cmlidXRlcykge1xuICAgICAgZWxlbWVudC50ZXh0Q29udGVudCA9IGF0dHJpYnV0ZXMudGV4dDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZWxlbWVudDtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJhbmRvbUludGVnZXJJbmNsdXNpdmUobWluLCBtYXgpIHtcbiAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSkgKyBtaW47XG59XG4iLCJjb25zdCBTSElQX0xFTkdUSFMgPSBbMiwgMiwgMywgMywgNCwgNV07XG5cbmV4cG9ydCBkZWZhdWx0IFNISVBfTEVOR1RIUztcbiIsImNvbnN0IFRJTEVfU1RBVEUgPSB7XG4gIE5PX1NISVA6IDAsXG4gIE1JU1NFRDogMSxcbiAgSElUOiAyLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgVElMRV9TVEFURTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBCb2FyZFBsYWNlciBmcm9tIFwiLi9tb2RlbHMvQm9hcmRQbGFjZXIvQm9hcmRQbGFjZXJcIjtcbmltcG9ydCBHYW1lQ29udHJvbGxlciBmcm9tIFwiLi9tb2RlbHMvR2FtZUNvbnRyb2xsZXJcIjtcbmltcG9ydCBVSUhhbmRsZXIgZnJvbSBcIi4vbW9kZWxzL1VJSGFuZGxlclwiO1xuaW1wb3J0IGNyZWF0ZUVsZW1lbnQgZnJvbSBcIi4vbW9kdWxlcy9jcmVhdGVFbGVtZW50XCI7XG5pbXBvcnQgXCIuL3N0eWxlcy5jc3NcIjtcblxuY29uc3Qgc3RhcnRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN0YXJ0XCIpO1xuY29uc3QgYm9hcmRBcmVhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJib2FyZC1hcmVhXCIpO1xuY29uc3QgYW5ub3VuY2VyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhbm5vdW5jZXJcIik7XG5jb25zdCBidXR0b25BcmVhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJidXR0b24tYXJlYVwiKTtcblxuYXN5bmMgZnVuY3Rpb24gc2V0Qm9hcmQoKSB7XG4gIGNvbnN0IGJvYXJkUGxhY2VyID0gbmV3IEJvYXJkUGxhY2VyKCk7XG4gIGNvbnN0IFtib2FyZCwgZmluaXNoUGxhY2luZ0J1dHRvbl0gPSBib2FyZFBsYWNlci5nZXRVSSgpO1xuXG4gIC8vIHNldCB1cCBidXR0b25zIGFuZCBsYWJlbHNcbiAgc3RhcnRCdXR0b24uY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgYm9hcmRBcmVhLnJlcGxhY2VDaGlsZHJlbihib2FyZCk7XG4gIGJ1dHRvbkFyZWEuYXBwZW5kQ2hpbGQoZmluaXNoUGxhY2luZ0J1dHRvbik7XG4gIGNvbnN0IGFubm91bmNlcnMgPSBbXG4gICAgY3JlYXRlRWxlbWVudChcInBcIiwge1xuICAgICAgdGV4dDogXCJDbGljayB0byByb3RhdGUgc2hpcHMsIG9yIGRyYWcgdG8gbW92ZSB0aGVtIGFyb3VuZC5cIixcbiAgICB9KSxcbiAgXTtcbiAgYW5ub3VuY2VyLnJlcGxhY2VDaGlsZHJlbiguLi5hbm5vdW5jZXJzKTtcblxuICAvLyB3YWl0IHVudGlsIHVzZXIgZmluaXNoZXMgcGxhY2luZ1xuICBjb25zdCBwbGF5ZXJNYXAgPSBhd2FpdCBib2FyZFBsYWNlci53YWl0VXNlclN0YXJ0KCk7XG4gIGZpbmlzaFBsYWNpbmdCdXR0b24ucmVtb3ZlKCk7XG4gIHJldHVybiBwbGF5ZXJNYXA7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHBsYXlHYW1lKHBsYXllck1hcCkge1xuICBjb25zdCB1aUhhbmRsZXIgPSBuZXcgVUlIYW5kbGVyKHBsYXllck1hcCk7XG4gIGNvbnN0IGdhbWVDb250cm9sbGVyID0gbmV3IEdhbWVDb250cm9sbGVyKHVpSGFuZGxlciwgcGxheWVyTWFwKTtcbiAgYm9hcmRBcmVhLnJlcGxhY2VDaGlsZHJlbiguLi51aUhhbmRsZXIuZ2V0Qm9hcmRzKCkpO1xuICBhbm5vdW5jZXIucmVwbGFjZUNoaWxkcmVuKC4uLnVpSGFuZGxlci5nZXRBbm5vdW5jZXJzKCkpO1xuICBhd2FpdCBnYW1lQ29udHJvbGxlci5wbGF5KCk7XG5cbiAgLy8gZ2FtZSBlbmRlZFxuICBzdGFydEJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuICBzdGFydEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiUGxheSBhZ2FpblwiO1xufVxuXG5hc3luYyBmdW5jdGlvbiBzdGFydEhhbmRsZXIoKSB7XG4gIGNvbnN0IHBsYXllck1hcCA9IGF3YWl0IHNldEJvYXJkKCk7XG4gIHBsYXlHYW1lKHBsYXllck1hcCk7XG59XG5cbnN0YXJ0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzdGFydEhhbmRsZXIpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9