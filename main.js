/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css ***!
  \*********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\nbody {\r\n  height: 100vh;\r\n  width: 100vw;\r\n  background-color: #000;\r\n  color: #fff;\r\n  font-family: 'Press Start 2P', cursive;\r\n  font-size: 24px;\r\n  display: flex;\r\n}\r\n\r\n#container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  background-color: rgb(2, 15, 56);\r\n  border: 1px solid black;\r\n  flex-grow: 1;\r\n}\r\n\r\n#menu-screen {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  background-color: rgba(0, 9, 183, 0.426);\r\n  width: 100%;\r\n  flex-grow: 1;\r\n}\r\n\r\n#menu-buttons {\r\n  margin: 2rem;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n#game-screen {\r\n  display: none;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  background-color: green;\r\n  border: 1px solid blue;\r\n  width: 100%;\r\n  flex-grow: 1;\r\n}\r\n\r\ninput[type='text'] {\r\n  padding: 1rem 2rem;\r\n  border: 1px solid black;\r\n  background-color: #fff;\r\n  border-radius: 10px;\r\n  margin-bottom: 1rem;\r\n  text-align: center;\r\n  font-size: 24px;\r\n}\r\n\r\nbutton {\r\n  padding: 1rem 2rem;\r\n  border: 1px solid black;\r\n  background-color: #fff;\r\n  border-radius: 10px;\r\n  font-size: 24px;\r\n}\r\n\r\nbutton:hover {\r\n  background-color: #000;\r\n  color: #fff;\r\n  cursor: pointer;\r\n}\r\n\r\n#game-board {\r\n  display: flex;\r\n  justify-content: space-evenly;\r\n  align-items: center;\r\n  width: 100%;\r\n  flex-grow: 3;\r\n  border: 1px solid black;\r\n}\r\n\r\n#game-info {\r\n  padding-top: 2rem;\r\n  display: flex;\r\n  justify-content: space-evenly;\r\n  width: 100%;\r\n  flex-grow: 1;\r\n}\r\n\r\n#player-info {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n#computer-info {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.board {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 1rem;\r\n}\r\n\r\n.grid {\r\n  width: 500px;\r\n  height: 500px;\r\n  border: 1px solid pink;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n}\r\n\r\n.computerSquare {\r\n  width: 50px;\r\n  height: 50px;\r\n  background-color: blue;\r\n}\r\n\r\n.computerSquare:hover {\r\n  background-color: aqua;\r\n  cursor: pointer;\r\n}\r\n\r\n.computerSquare:active {\r\n  background-color: red;\r\n}\r\n\r\n.playerSquare {\r\n  width: 50px;\r\n  height: 50px;\r\n  background-color: blue;\r\n}\r\n\r\n.red {\r\n  background-color: red;\r\n  cursor: pointer;\r\n}\r\n\r\n.shipHover{\r\n  background-color: green;\r\n}\r\n\r\n.ship{\r\n  background-color: bisque;\r\n}\r\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://odin-project-battleships/./src/styles/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://odin-project-battleships/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://odin-project-battleships/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles/styles.css":
/*!*******************************!*\
  !*** ./src/styles/styles.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://odin-project-battleships/./src/styles/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://odin-project-battleships/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://odin-project-battleships/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://odin-project-battleships/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://odin-project-battleships/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://odin-project-battleships/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://odin-project-battleships/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/battleships.js":
/*!****************************!*\
  !*** ./src/battleships.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Gameboard: () => (/* binding */ Gameboard),\n/* harmony export */   Player: () => (/* binding */ Player),\n/* harmony export */   Ship: () => (/* binding */ Ship),\n/* harmony export */   gridSize: () => (/* reexport safe */ _vars__WEBPACK_IMPORTED_MODULE_0__.gridSize)\n/* harmony export */ });\n/* harmony import */ var _vars__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vars */ \"./src/vars.js\");\n\r\n\r\nclass Ship {\r\n  constructor(name, length) {\r\n    (this.name = name),\r\n      (this.length = length),\r\n      (this.hits = 0),\r\n      (this.sunk = false);\r\n  }\r\n\r\n  hit() {\r\n    this.hits++;\r\n    this.isSunk();\r\n  }\r\n\r\n  isSunk() {\r\n    if (this.hits == this.length) {\r\n      this.sunk = true;\r\n    }\r\n  }\r\n}\r\n\r\nclass Gameboard {\r\n  constructor(isComputer) {\r\n    this.board = new Array();\r\n    this.isComputer = isComputer;\r\n    this.ships = [];\r\n    this.sunkShips = [];\r\n    this.hitAttacks = [];\r\n    this.missedAttacks = [];\r\n    this.initBoard();\r\n  }\r\n\r\n  initBoard() {\r\n    for (var x = 0; x < _vars__WEBPACK_IMPORTED_MODULE_0__.gridSize; x++) {\r\n      this.board[x] = [];\r\n      for (var y = 0; y < _vars__WEBPACK_IMPORTED_MODULE_0__.gridSize; y++) {\r\n        this.board[x][y] = 'Empty';\r\n      }\r\n    }\r\n  }\r\n\r\n  placeShip(name, length, x, y, isHorizontal) {\r\n    console.log([name, length, x, y, isHorizontal]);\r\n    for (var t = 0; t < length; t++) {\r\n      if (\r\n        this.board[isHorizontal ? x + t : x][isHorizontal ? y : y + t] !==\r\n        'Empty'\r\n      ) {\r\n        return false;\r\n      }\r\n    }\r\n\r\n    this.ships.push(new Ship(name, length));\r\n\r\n    for (var i = 0; i < length; i++) {\r\n      console.log(this.board)\r\n      console.log(isHorizontal ? x : x + i);\r\n      console.log(this.board[isHorizontal ? x : x + i]);\r\n      this.board[isHorizontal ? x + i : x][isHorizontal ? y : y + i] =\r\n        this.ships[this.ships.length - 1];\r\n    }\r\n\r\n    return true;\r\n  }\r\n\r\n  receiveAttack(x, y) {\r\n    let hasAlreadyHitPosition = false;\r\n    this.hitAttacks.forEach((e) => {\r\n      if (e[0] == x && e[1] == y) {\r\n        hasAlreadyHitPosition = true;\r\n      }\r\n    });\r\n\r\n    this.missedAttacks.forEach((e) => {\r\n      console.log(e);\r\n      if (e[0] == x && e[1] == y) {\r\n        hasAlreadyHitPosition = true;\r\n      }\r\n    });\r\n\r\n    if (hasAlreadyHitPosition) return false;\r\n\r\n    if (this.board[x][y] !== 'Empty') {\r\n      console.log('hit');\r\n      this.hitAttacks.push([x, y]);\r\n      this.board[x][y].hit();\r\n    } else {\r\n      this.missedAttacks.push([x, y]);\r\n    }\r\n\r\n    return true;\r\n  }\r\n\r\n  allShipsSunk() {\r\n    let allSunk = this.ships.length === 0 ? false : true;\r\n\r\n    this.ships.forEach((ship) => {\r\n      if (!ship.sunk) {\r\n        console.log('issue');\r\n        allSunk = false;\r\n      }\r\n    });\r\n\r\n    return allSunk;\r\n  }\r\n}\r\n\r\nclass Player {\r\n  constructor(name, isTurn, gameboard) {\r\n    this.name = name;\r\n    this.isTurn = isTurn;\r\n    this.gameboard = gameboard;\r\n    this.ships = [\r\n      new Ship('Carrier', 5),\r\n      new Ship('Battleship', 4),\r\n      new Ship('Cruiser', 3),\r\n      new Ship('Submarine', 2),\r\n      new Ship('Destroyer', 2),\r\n    ];\r\n    this.activeShips = [];\r\n    this.coordinatesAttacked = [];\r\n  }\r\n\r\n  attackCoordinates(x, y) {\r\n    if (!this.isTurn) return false;\r\n    let newCoordinates = true;\r\n\r\n    this.coordinatesAttacked.forEach((coordinate) => {\r\n      if (x === coordinate[0] && y === coordinate[1]) {\r\n        newCoordinates = false;\r\n      }\r\n    });\r\n\r\n    if (!newCoordinates) return false;\r\n\r\n    this.coordinatesAttacked.push([x, y]);\r\n    this.gameboard.receiveAttack(x, y);\r\n    return true;\r\n  }\r\n}\r\n\r\n\r\n// module.exports = { Ship, Gameboard, Player, gridSize };\r\n\n\n//# sourceURL=webpack://odin-project-battleships/./src/battleships.js?");

/***/ }),

/***/ "./src/script.js":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/styles.css */ \"./src/styles/styles.css\");\n/* harmony import */ var _battleships_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./battleships.js */ \"./src/battleships.js\");\n/* harmony import */ var _vars_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vars.js */ \"./src/vars.js\");\n\r\n\r\n\r\n\r\nconst player1board = new _battleships_js__WEBPACK_IMPORTED_MODULE_1__.Gameboard(false);\r\nconst player2board = new _battleships_js__WEBPACK_IMPORTED_MODULE_1__.Gameboard(true);\r\n\r\nconst player1 = new _battleships_js__WEBPACK_IMPORTED_MODULE_1__.Player(_vars_js__WEBPACK_IMPORTED_MODULE_2__.playerNameInput.value, true, player1board);\r\nconst player2 = new _battleships_js__WEBPACK_IMPORTED_MODULE_1__.Player(\"Computer\", false, player2board);\r\n\r\nlet playerSquares = [];\r\nlet computerSquares = [];\r\n\r\n_vars_js__WEBPACK_IMPORTED_MODULE_2__.playerNameInput.value = \"Tony\";\r\n\r\nlet shipPlacementPhase = false;\r\nlet gamePhase = false;\r\nlet isPlayerTurn = false;\r\nlet shipRotationHorizontal = true;\r\n\r\n_vars_js__WEBPACK_IMPORTED_MODULE_2__.startGameButton.addEventListener(\"click\", () => {\r\n  StartGame();\r\n});\r\n\r\n_vars_js__WEBPACK_IMPORTED_MODULE_2__.playerShipRotationBtn.addEventListener(\"click\", () => {\r\n  changeShipRotation();\r\n});\r\n\r\ndocument.addEventListener(\"keydown\", (e) => {\r\n  if (e.key == \"r\") {\r\n    if (shipPlacementPhase) {\r\n      changeShipRotation();\r\n      playerSquares.forEach((square) => {\r\n        square.classList.remove(\"red\");\r\n      });\r\n    }\r\n  }\r\n});\r\n\r\nconst changeShipRotation = () => {\r\n  shipRotationHorizontal = !shipRotationHorizontal;\r\n\r\n  _vars_js__WEBPACK_IMPORTED_MODULE_2__.playerShipRotationBtn.textContent = `Rotation: ${\r\n    shipRotationHorizontal ? \"Horizontal\" : \"Vertical\"\r\n  }`;\r\n\r\n  playerSquares.forEach((square) => {\r\n    square.classList.remove(\"red\");\r\n  });\r\n};\r\n\r\nconst StartGame = () => {\r\n  if (_vars_js__WEBPACK_IMPORTED_MODULE_2__.playerNameInput.value == \"\") {\r\n    alert(\"Please enter a name\");\r\n    return;\r\n  }\r\n\r\n  player1.name = _vars_js__WEBPACK_IMPORTED_MODULE_2__.playerNameInput.value;\r\n  _vars_js__WEBPACK_IMPORTED_MODULE_2__.playerNameStat.textContent = player1.name;\r\n  _vars_js__WEBPACK_IMPORTED_MODULE_2__.menuScreen.style.display = \"none\";\r\n  _vars_js__WEBPACK_IMPORTED_MODULE_2__.gameScreen.style.display = \"flex\";\r\n\r\n  renderBoards();\r\n  // place computers ships randomly\r\n  placeShipsRandomly(player2, true);\r\n  playerSquares = document.querySelectorAll(\".playerSquare\");\r\n  computerSquares = document.querySelectorAll(\".computerSquare\");\r\n\r\n  // start player ships placement phase\r\n  player1.ships.forEach((ship) => {\r\n    const option = document.createElement(\"option\");\r\n    option.text = ship.name;\r\n    option.value = ship.name;\r\n    _vars_js__WEBPACK_IMPORTED_MODULE_2__.playerShipSelect.add(option);\r\n  });\r\n\r\n  shipPlacementPhase = true;\r\n\r\n  playerSquares.forEach((square) => {\r\n    const x = parseInt(square.getAttribute(\"data-x\"));\r\n    const y = parseInt(square.getAttribute(\"data-y\"));\r\n\r\n    square.addEventListener(\"mouseenter\", () => {\r\n      if(!shipPlacementPhase) return;\r\n      // figure out the length of the currently selected ship option\r\n      let length;\r\n      player1.ships.forEach((ship) => {\r\n        if (ship.name == _vars_js__WEBPACK_IMPORTED_MODULE_2__.playerShipSelect.value) {\r\n          length = ship.length;\r\n        }\r\n      });\r\n      if (shipRotationHorizontal && x + length > _vars_js__WEBPACK_IMPORTED_MODULE_2__.gridSize) return;\r\n      if (!shipRotationHorizontal && y + length > _vars_js__WEBPACK_IMPORTED_MODULE_2__.gridSize) return;\r\n      let freePositionFound = IsPositionFree(x, y, length);\r\n      if (!freePositionFound) return;\r\n\r\n      // highlight all the coordinates that would be occupied by the correct ship vertically or horizontally\r\n      while (length > 0) {\r\n        const squareInShip = document.querySelector(\r\n          `[data-x=\"${shipRotationHorizontal ? x + length - 1 : x}\"][data-y=\"${\r\n            shipRotationHorizontal ? y : y + length - 1\r\n          }\"].playerSquare`\r\n        );\r\n        squareInShip.classList.add(\"red\");\r\n        length--;\r\n      }\r\n    });\r\n\r\n    square.addEventListener(\"mousedown\", () => {\r\n      if(!shipPlacementPhase) return;\r\n\r\n      let length;\r\n      let shipIndex;\r\n      player1.ships.forEach((ship, index) => {\r\n        if (ship.name == _vars_js__WEBPACK_IMPORTED_MODULE_2__.playerShipSelect.value) {\r\n          length = ship.length;\r\n          shipIndex = index;\r\n        }\r\n      });\r\n\r\n      if (shipRotationHorizontal && x + length > _vars_js__WEBPACK_IMPORTED_MODULE_2__.gridSize) return;\r\n      if (!shipRotationHorizontal && y + length > _vars_js__WEBPACK_IMPORTED_MODULE_2__.gridSize) return;\r\n      let freePositionFound = IsPositionFree(x, y, length);\r\n      if (!freePositionFound) return;\r\n\r\n      while (length > 0) {\r\n        const squareInShip = document.querySelector(\r\n          `[data-x=\"${shipRotationHorizontal ? x + length - 1 : x}\"][data-y=\"${\r\n            shipRotationHorizontal ? y : y + length - 1\r\n          }\"].playerSquare`\r\n        );\r\n        squareInShip.classList.add(\"ship\");\r\n        player1board.board[shipRotationHorizontal ? x + length - 1 : x][\r\n          shipRotationHorizontal ? y : y + length - 1\r\n        ] = player1.ships[shipIndex];\r\n        length--;\r\n      }\r\n\r\n      const placedShip = player1.ships.splice(shipIndex, 1);\r\n      player1.activeShips.push(placedShip);\r\n      player1board.placeShip(placedShip.name, placedShip.length, x, y, shipRotationHorizontal)\r\n\r\n      if (player1.ships.length == 0) {\r\n        EndPlacementPhase();\r\n      } else {\r\n        _vars_js__WEBPACK_IMPORTED_MODULE_2__.playerShipSelect.remove(shipIndex);\r\n        _vars_js__WEBPACK_IMPORTED_MODULE_2__.playerShipSelect.value = player1.ships[0].name;\r\n      }\r\n    });\r\n\r\n    square.addEventListener(\"mouseleave\", () => {\r\n      if(!shipPlacementPhase) return;\r\n\r\n      playerSquares.forEach((square) => {\r\n        square.classList.remove(\"red\");\r\n      });\r\n    });\r\n  });\r\n\r\n  computerSquares.forEach((square) => {\r\n    const x = parseInt(square.getAttribute(\"data-x\"));\r\n    const y = parseInt(square.getAttribute(\"data-y\"));\r\n\r\n    square.addEventListener('mousedown', () => {\r\n      if(!gamePhase) return;\r\n      //if(!isPlayerTurn) return;\r\n\r\n      // check if its a hit\r\n      // if its a miss make it a miss image\r\n      // if its a hit make it a hit image\r\n      // when the ship is sunk \r\n      console.log(player2.gameboard.board[x][y])\r\n    });\r\n  })\r\n};\r\n\r\nconst EndPlacementPhase = () => {\r\n  shipPlacementPhase = false;\r\n  _vars_js__WEBPACK_IMPORTED_MODULE_2__.playerShipRotationBtn.remove();\r\n  _vars_js__WEBPACK_IMPORTED_MODULE_2__.playerShipSelect.remove();\r\n  gamePhase = true;\r\n  isPlayerTurn = Math.random() * 10 > 5 ? true : false;\r\n}\r\n\r\nconst IsPositionFree = (x, y, length) => {\r\n  let checkX = x;\r\n  let checkY = y;\r\n\r\n  if (shipRotationHorizontal) {\r\n    for (var i = 0; i < length; i++) {\r\n      if (player1board.board[checkX + i][checkY] !== \"Empty\") {\r\n        return false;\r\n      }\r\n    }\r\n  } else {\r\n    for (var i = 0; i < length; i++) {\r\n      if (player1board.board[checkX][checkY + i] !== \"Empty\") {\r\n        return false;\r\n      }\r\n    }\r\n  }\r\n\r\n  return true;\r\n};\r\n\r\n// render boards\r\n\r\nconst renderBoards = () => {\r\n  _vars_js__WEBPACK_IMPORTED_MODULE_2__.playerBoard.innerHTML = \"\";\r\n  _vars_js__WEBPACK_IMPORTED_MODULE_2__.computerBoard.innerHTML = \"\";\r\n\r\n  renderBoard(player1board.board, false);\r\n  renderBoard(player2board.board, true);\r\n};\r\n\r\nconst renderBoard = (board, isComputer) => {\r\n  for (var x = 0; x < board.length; x++) {\r\n    for (var y = 0; y < board[x].length; y++) {\r\n      var square = document.createElement(\"div\");\r\n      square.classList.add(\"square\");\r\n      square.classList.add(isComputer ? \"computerSquare\" : \"playerSquare\");\r\n      square.dataset.x = x;\r\n      square.dataset.y = y;\r\n\r\n      if (isComputer) {\r\n        _vars_js__WEBPACK_IMPORTED_MODULE_2__.computerBoard.appendChild(square.cloneNode(true));\r\n      } else {\r\n        _vars_js__WEBPACK_IMPORTED_MODULE_2__.playerBoard.appendChild(square.cloneNode(true));\r\n      }\r\n    }\r\n  }\r\n};\r\n\r\n// ship placement\r\n\r\nconst placeShipsRandomly = (player) => {\r\n  player.ships.forEach((ship) => {\r\n    const coordinates = findPossibleShipCoordinates(player.gameboard, ship);\r\n    \r\n    player.gameboard.placeShip(ship.name, ship.length, coordinates[0], coordinates[1], coordinates[2])\r\n\r\n\r\n    player.activeShips.push(ship);\r\n  });\r\n\r\n  console.log(player.gameboard)\r\n  player.ships = [];\r\n};\r\n\r\nconst findPossibleShipCoordinates = (board, ship) => {\r\n  var freePositionFound = false;\r\n  let x = 0;\r\n  let y = 0;\r\n  var isHorizontal = false;\r\n\r\n  while (!freePositionFound) {\r\n    var isHorizontal = Math.round(Math.random() * 10) > 5 ? true : false;\r\n    freePositionFound = true;\r\n    x = Math.floor(Math.random() * (isHorizontal ? _vars_js__WEBPACK_IMPORTED_MODULE_2__.gridSize - ship.length : _vars_js__WEBPACK_IMPORTED_MODULE_2__.gridSize));\r\n    y = Math.floor(Math.random() * ( isHorizontal ? _vars_js__WEBPACK_IMPORTED_MODULE_2__.gridSize : _vars_js__WEBPACK_IMPORTED_MODULE_2__.gridSize - ship.length));\r\n\r\n    if (isHorizontal) {\r\n\r\n      for (var i = 0; i < ship.length; i++) {\r\n        if (board.board[x + i][y] !== \"Empty\") {\r\n          freePositionFound = false;\r\n        }\r\n      }\r\n    } else {\r\n\r\n      for (var i = 0; i < ship.length; i++) {\r\n        if (board.board[x][y + i] !== \"Empty\") {\r\n          freePositionFound = false;\r\n        }\r\n      }\r\n    }\r\n  }\r\n\r\n  return [x, y, isHorizontal];\r\n};\r\n\r\n\n\n//# sourceURL=webpack://odin-project-battleships/./src/script.js?");

/***/ }),

/***/ "./src/vars.js":
/*!*********************!*\
  !*** ./src/vars.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   computerBoard: () => (/* binding */ computerBoard),\n/* harmony export */   computerTurnDiv: () => (/* binding */ computerTurnDiv),\n/* harmony export */   gameScreen: () => (/* binding */ gameScreen),\n/* harmony export */   gridSize: () => (/* binding */ gridSize),\n/* harmony export */   menuScreen: () => (/* binding */ menuScreen),\n/* harmony export */   playerBoard: () => (/* binding */ playerBoard),\n/* harmony export */   playerNameInput: () => (/* binding */ playerNameInput),\n/* harmony export */   playerNameStat: () => (/* binding */ playerNameStat),\n/* harmony export */   playerShipRotationBtn: () => (/* binding */ playerShipRotationBtn),\n/* harmony export */   playerShipSelect: () => (/* binding */ playerShipSelect),\n/* harmony export */   playerTurnDiv: () => (/* binding */ playerTurnDiv),\n/* harmony export */   startGameButton: () => (/* binding */ startGameButton)\n/* harmony export */ });\nconst playerTurnDiv = document.getElementById('player-turn');\r\nconst computerTurnDiv = document.getElementById('computer-turn');\r\nconst startGameButton = document.querySelector('#start-game-btn');\r\nconst menuScreen = document.querySelector('#menu-screen');\r\nconst gameScreen = document.querySelector('#game-screen');\r\nconst playerNameInput = document.querySelector('#player-name-input');\r\nconst playerNameStat = document.querySelector('#player-name-stat');\r\nconst playerBoard = document.querySelector('#player-board');\r\nconst computerBoard = document.querySelector('#computer-board');\r\nconst playerShipSelect = document.querySelector('#player-ships-select');\r\nconst playerShipRotationBtn = document.querySelector(\"#player-ship-rotation-btn\");\r\n\r\nconst gridSize = 10;\r\n\r\n\r\n\n\n//# sourceURL=webpack://odin-project-battleships/./src/vars.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/script.js");
/******/ 	
/******/ })()
;