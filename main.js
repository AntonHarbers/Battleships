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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../images/water.png */ \"./src/images/water.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../images/hover.png */ \"./src/images/hover.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../images/hit.png */ \"./src/images/hit.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../images/miss.png */ \"./src/images/miss.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);\nvar ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\nbody {\r\n  height: 100vh;\r\n  width: 100vw;\r\n  background-color: #000;\r\n  color: #fff;\r\n  font-family: 'Press Start 2P', cursive;\r\n  font-size: 24px;\r\n  display: flex;\r\n}\r\n\r\n#container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  background-color: rgb(2, 15, 56);\r\n  border: 1px solid black;\r\n  flex-grow: 1;\r\n}\r\n\r\n#menu-screen {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  background-color: rgba(171, 171, 171, 0.426);\r\n  width: 100%;\r\n  flex-grow: 1;\r\n}\r\n\r\n#menu-buttons {\r\n  margin: 2rem;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n#game-screen {\r\n  display: none;\r\n  padding-top: 50px;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  background-color: rgba(171, 171, 171, 0.426);\r\n  width: 100%;\r\n  flex-grow: 1;\r\n}\r\n\r\ninput[type='text'] {\r\n  padding: 1rem 2rem;\r\n  border: 1px solid black;\r\n  background-color: #fff;\r\n  border-radius: 10px;\r\n  margin-bottom: 1rem;\r\n  text-align: center;\r\n  font-size: 24px;\r\n}\r\n\r\nbutton {\r\n  padding: 1rem 2rem;\r\n  border: 1px solid black;\r\n  background-color: #fff;\r\n  border-radius: 10px;\r\n  font-size: 24px;\r\n}\r\n\r\nbutton:hover {\r\n  background-color: #000;\r\n  color: #fff;\r\n  cursor: pointer;\r\n}\r\n\r\n#game-board {\r\n  display: flex;\r\n  justify-content: center;\r\n  gap: 10rem;\r\n  width: 100%;\r\n  flex-grow: 3;\r\n  flex-wrap: wrap;\r\n  overflow-y: scroll;\r\n  height: 80vh;\r\n  padding-bottom: 100px;\r\n}\r\n\r\n#game-info {\r\n  padding-top: 2rem;\r\n  display: flex;\r\n  justify-content: space-evenly;\r\n  width: 100%;\r\n  flex-grow: 1;\r\n}\r\n\r\n#player-info {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n#computer-info {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.board {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 1rem;\r\n}\r\n\r\n.grid {\r\n  width: 500px;\r\n  height: 500px;\r\n  border: 1px solid pink;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n}\r\n\r\n.computerSquare {\r\n  width: 50px;\r\n  height: 50px;\r\n  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\r\n  background-size: cover;\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n}\r\n\r\n.computerSquare:hover {\r\n  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});\r\n  background-size: cover;\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n  cursor: pointer;\r\n  transition: 0.2s ease-in-out;\r\n}\r\n\r\n.computerSquare:active {\r\n  background-color: red;\r\n  background-image: none;\r\n}\r\n\r\n.playerSquare {\r\n  width: 50px;\r\n  height: 50px;\r\n  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\r\n  background-size: cover;\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n}\r\n\r\n.red {\r\n  cursor: pointer;\r\n  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});\r\n  background-color: red;\r\n  background-size: cover;\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n  transition: 0.1s ease-in-out;\r\n}\r\n\r\n.shipHover {\r\n  background-color: green;\r\n  background-image: none;\r\n}\r\n\r\n.ship {\r\n  background-color: bisque;\r\n  background-image: none;\r\n}\r\n\r\n.hit {\r\n  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_2___});\r\n  background-size: cover;\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n  transition: 1s ease-in-out;\r\n}\r\n\r\n.missed {\r\n  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_3___});\r\n  background-size: cover;\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n  transition: 1s ease-in-out;\r\n}\r\n\r\nselect {\r\n  padding: 1rem 2rem;\r\n  border: 1px solid black;\r\n  background-color: #fff;\r\n  border-radius: 10px;\r\n  margin-bottom: 1rem;\r\n  text-align: center;\r\n  font-size: 24px;\r\n}\r\n\r\n#game-over-screen {\r\n  display: flex;\r\n  position: absolute;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  background-color: rgba(171, 171, 171, 0.426);\r\n  width: 100vw;\r\n  height: 100vh;\r\n  z-index: 1;\r\n}\r\n\r\n#game-over-text {\r\n  font-size: 48px;\r\n  margin-bottom: 2rem;\r\n}\r\n\r\n#restart-game-btn {\r\n  padding: 1rem 2rem;\r\n  border: 1px solid black;\r\n  background-color: #fff;\r\n  border-radius: 10px;\r\n  font-size: 24px;\r\n  margin-bottom: 2rem;\r\n}\r\n\r\n#restart-game-btn:hover {\r\n  background-color: #000;\r\n  color: #fff;\r\n  cursor: pointer;\r\n}\r\n\r\n#restart-game-btn:active {\r\n  background-color: #fff;\r\n  color: #000;\r\n}\r\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://odin-project-battleships/./src/styles/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://odin-project-battleships/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://odin-project-battleships/./node_modules/css-loader/dist/runtime/getUrl.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Gameboard: () => (/* binding */ Gameboard),\n/* harmony export */   Player: () => (/* binding */ Player),\n/* harmony export */   Ship: () => (/* binding */ Ship),\n/* harmony export */   gridSize: () => (/* reexport safe */ _vars__WEBPACK_IMPORTED_MODULE_0__.gridSize)\n/* harmony export */ });\n/* harmony import */ var _vars__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vars */ \"./src/vars.js\");\n\r\n\r\nclass Ship {\r\n  constructor(name, length) {\r\n    this.name = name;\r\n    this.length = length;\r\n    this.hits = 0;\r\n    this.sunk = false;\r\n  }\r\n\r\n  hit() {\r\n    this.hits++;\r\n    this.isSunk();\r\n  }\r\n\r\n  isSunk() {\r\n    if (this.hits == this.length) {\r\n      this.sunk = true;\r\n    }\r\n  }\r\n}\r\n\r\nclass Gameboard {\r\n  constructor(isComputer) {\r\n    this.board = new Array();\r\n    this.isComputer = isComputer;\r\n    this.ships = [];\r\n    this.sunkShips = [];\r\n    this.hitAttacks = [];\r\n    this.missedAttacks = [];\r\n    this.notYetAttacked = [];\r\n    this.initBoard();\r\n  }\r\n\r\n  initBoard() {\r\n    for (let x = 0; x < _vars__WEBPACK_IMPORTED_MODULE_0__.gridSize; x++) {\r\n      this.board[x] = [];\r\n      for (let y = 0; y < _vars__WEBPACK_IMPORTED_MODULE_0__.gridSize; y++) {\r\n        this.board[x][y] = 'Empty';\r\n        this.notYetAttacked.push([x, y]);\r\n      }\r\n    }\r\n  }\r\n\r\n  placeShip(name, length, x, y, isHorizontal) {\r\n    for (let t = 0; t < length; t++) {\r\n      if (\r\n        this.board[isHorizontal ? x + t : x][isHorizontal ? y : y + t] !==\r\n        'Empty'\r\n      ) {\r\n        return false;\r\n      }\r\n    }\r\n\r\n    this.ships.push(new Ship(name, length));\r\n\r\n    for (var i = 0; i < length; i++) {\r\n      this.board[isHorizontal ? x + i : x][isHorizontal ? y : y + i] =\r\n        this.ships[this.ships.length - 1];\r\n    }\r\n\r\n    return true;\r\n  }\r\n\r\n  receiveAttack(x, y) {\r\n    const hasAlreadyHitPosition = !this.notYetAttacked.some(\r\n      (e) => e[0] === x && e[1] === y\r\n    );\r\n\r\n    if (hasAlreadyHitPosition) return false;\r\n\r\n    if (this.board[x][y] !== 'Empty') {\r\n      this.hitAttacks.push([x, y]);\r\n      this.board[x][y].hit();\r\n    } else {\r\n      this.missedAttacks.push([x, y]);\r\n      this.board[x][y] = 'Missed';\r\n    }\r\n\r\n    this.notYetAttacked = this.notYetAttacked.filter(\r\n      (item) => item[0] !== x || item[1] !== y\r\n    );\r\n\r\n    return true;\r\n  }\r\n\r\n  allShipsSunk() {\r\n    return this.ships.every((ship) => ship.sunk);\r\n  }\r\n}\r\n\r\nclass Player {\r\n  constructor(name, isTurn, gameboard, enemyBoard) {\r\n    this.name = name;\r\n    this.isTurn = isTurn;\r\n    this.gameboard = gameboard;\r\n    this.enemyBoard = enemyBoard;\r\n    this.ships = [\r\n      new Ship('Carrier', 5),\r\n      new Ship('Battleship', 4),\r\n      new Ship('Cruiser', 3),\r\n      new Ship('Submarine', 2),\r\n      new Ship('Destroyer', 2),\r\n    ];\r\n    this.activeShips = [];\r\n    this.coordinatesAttacked = [];\r\n  }\r\n\r\n  attackCoordinates(x, y) {\r\n    if (!this.isTurn) return false;\r\n\r\n    const newCoordinates = !this.coordinatesAttacked.some(\r\n      (coordinate) => x === coordinate[0] && y === coordinate[1]\r\n    );\r\n\r\n    if (!newCoordinates) return false;\r\n\r\n    this.coordinatesAttacked.push([x, y]);\r\n    this.enemyBoard.receiveAttack(x, y);\r\n    return true;\r\n  }\r\n}\r\n\r\n\r\n// for testing =\r\n// module.exports = { Ship, Gameboard, Player, gridSize };\r\n\n\n//# sourceURL=webpack://odin-project-battleships/./src/battleships.js?");

/***/ }),

/***/ "./src/helpers.js":
/*!************************!*\
  !*** ./src/helpers.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   IsPositionFree: () => (/* binding */ IsPositionFree),\n/* harmony export */   placeShipsRandomly: () => (/* binding */ placeShipsRandomly)\n/* harmony export */ });\nconst placeShipsRandomly = (player, gridSize) => {\r\n  for (const ship of player.ships) {\r\n    const [x, y, isHorizontal] = findPossibleShipCoordinates(\r\n      player.gameboard,\r\n      ship,\r\n      gridSize\r\n    );\r\n\r\n    player.gameboard.placeShip(ship.name, ship.length, x, y, isHorizontal);\r\n\r\n    player.activeShips.push(ship);\r\n  }\r\n\r\n  player.ships = [];\r\n};\r\n\r\nconst findPossibleShipCoordinates = (board, ship, gridSize) => {\r\n  let freePositionFound = false;\r\n  let x = 0;\r\n  let y = 0;\r\n  let isHorizontal = false;\r\n\r\n  while (!freePositionFound) {\r\n    isHorizontal = Math.round(Math.random() * 10) > 5;\r\n    freePositionFound = true;\r\n    x = Math.floor(\r\n      Math.random() * (isHorizontal ? gridSize - ship.length : gridSize)\r\n    );\r\n    y = Math.floor(\r\n      Math.random() * (isHorizontal ? gridSize : gridSize - ship.length)\r\n    );\r\n\r\n    if (isHorizontal) {\r\n      for (const i of Array(ship.length).keys()) {\r\n        if (board.board[x + i][y] !== 'Empty') {\r\n          freePositionFound = false;\r\n        }\r\n      }\r\n    } else {\r\n      for (const i of Array(ship.length).keys()) {\r\n        if (board.board[x][y + i] !== 'Empty') {\r\n          freePositionFound = false;\r\n        }\r\n      }\r\n    }\r\n  }\r\n\r\n  return [x, y, isHorizontal];\r\n};\r\n\r\nconst IsPositionFree = (x, y, length, shipRotationHorizontal, player1board) => {\r\n  const checkX = x;\r\n  const checkY = y;\r\n\r\n  if (shipRotationHorizontal) {\r\n    for (const i of Array(length).keys()) {\r\n      if (player1board.board[checkX + i][checkY] !== 'Empty') {\r\n        return false;\r\n      }\r\n    }\r\n  } else {\r\n    for (const i of Array(length).keys()) {\r\n      if (player1board.board[checkX][checkY + i] !== 'Empty') {\r\n        return false;\r\n      }\r\n    }\r\n  }\r\n\r\n  return true;\r\n};\r\n\r\n\r\n\n\n//# sourceURL=webpack://odin-project-battleships/./src/helpers.js?");

/***/ }),

/***/ "./src/rendering.js":
/*!**************************!*\
  !*** ./src/rendering.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderBoards: () => (/* binding */ renderBoards)\n/* harmony export */ });\n/* harmony import */ var _vars__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vars */ \"./src/vars.js\");\n\r\n\r\n// render boards\r\n\r\nconst renderBoards = () => {\r\n  _vars__WEBPACK_IMPORTED_MODULE_0__.playerBoard.innerHTML = '';\r\n  _vars__WEBPACK_IMPORTED_MODULE_0__.computerBoard.innerHTML = '';\r\n\r\n  renderBoard(_vars__WEBPACK_IMPORTED_MODULE_0__.player1board.board, false);\r\n  renderBoard(_vars__WEBPACK_IMPORTED_MODULE_0__.player2board.board, true);\r\n};\r\n\r\nconst renderBoard = (board, isComputer) => {\r\n  for (let x = 0; x < board.length; x++) {\r\n    for (let y = 0; y < board[x].length; y++) {\r\n      const square = document.createElement('div');\r\n      square.classList.add('square');\r\n      square.classList.add(isComputer ? 'computerSquare' : 'playerSquare');\r\n      square.dataset.x = x;\r\n      square.dataset.y = y;\r\n\r\n      const container = isComputer ? _vars__WEBPACK_IMPORTED_MODULE_0__.computerBoard : _vars__WEBPACK_IMPORTED_MODULE_0__.playerBoard;\r\n      container.appendChild(square);\r\n    }\r\n  }\r\n};\r\n\n\n//# sourceURL=webpack://odin-project-battleships/./src/rendering.js?");

/***/ }),

/***/ "./src/script.js":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/styles.css */ \"./src/styles/styles.css\");\n/* harmony import */ var _vars_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vars.js */ \"./src/vars.js\");\n/* harmony import */ var _rendering__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rendering */ \"./src/rendering.js\");\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpers */ \"./src/helpers.js\");\n\r\n\r\n\r\n\r\n\r\n// Variables\r\nlet playerSquares = [];\r\nlet computerSquares = [];\r\n\r\nlet shipPlacementPhase = false;\r\nlet gamePhase = false;\r\nlet shipRotationHorizontal = true;\r\nlet firstShipHitCoords = null;\r\nlet shipHitCoords = null;\r\nlet currentHitDirection = 'up';\r\n\r\n// remove before production\r\n_vars_js__WEBPACK_IMPORTED_MODULE_1__.playerNameInput.value = 'Tony';\r\n\r\n// event listeners\r\n_vars_js__WEBPACK_IMPORTED_MODULE_1__.startGameButton.addEventListener('click', () => {\r\n  StartGame();\r\n});\r\n\r\n_vars_js__WEBPACK_IMPORTED_MODULE_1__.playerShipRotationBtn.addEventListener('click', () => {\r\n  changeShipRotation();\r\n});\r\n\r\ndocument.addEventListener('keydown', (e) => {\r\n  if (e.key == 'r') {\r\n    if (shipPlacementPhase) {\r\n      changeShipRotation();\r\n      playerSquares.forEach((square) => {\r\n        square.classList.remove('red');\r\n      });\r\n    }\r\n  }\r\n});\r\n\r\n// game logic\r\nconst StartGame = () => {\r\n  if (_vars_js__WEBPACK_IMPORTED_MODULE_1__.playerNameInput.value == '') {\r\n    alert('Please enter a name');\r\n    return;\r\n  }\r\n\r\n  _vars_js__WEBPACK_IMPORTED_MODULE_1__.player1.name = _vars_js__WEBPACK_IMPORTED_MODULE_1__.playerNameInput.value;\r\n  _vars_js__WEBPACK_IMPORTED_MODULE_1__.playerNameStat.textContent = _vars_js__WEBPACK_IMPORTED_MODULE_1__.player1.name;\r\n  _vars_js__WEBPACK_IMPORTED_MODULE_1__.menuScreen.style.display = 'none';\r\n  _vars_js__WEBPACK_IMPORTED_MODULE_1__.gameScreen.style.display = 'flex';\r\n\r\n  (0,_rendering__WEBPACK_IMPORTED_MODULE_2__.renderBoards)();\r\n  (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.placeShipsRandomly)(_vars_js__WEBPACK_IMPORTED_MODULE_1__.player2, _vars_js__WEBPACK_IMPORTED_MODULE_1__.gridSize);\r\n  playerSquares = document.querySelectorAll('.playerSquare');\r\n  computerSquares = document.querySelectorAll('.computerSquare');\r\n\r\n  // start player ships placement phase\r\n\r\n  shipPlacementPhase = true;\r\n\r\n  _vars_js__WEBPACK_IMPORTED_MODULE_1__.playerTurnDiv.textContent = `Place your ships`;\r\n  _vars_js__WEBPACK_IMPORTED_MODULE_1__.computerTurnDiv.textContent = '';\r\n\r\n  _vars_js__WEBPACK_IMPORTED_MODULE_1__.player1.ships.forEach((ship) => {\r\n    const option = document.createElement('option');\r\n    option.text = ship.name;\r\n    option.value = ship.name;\r\n    _vars_js__WEBPACK_IMPORTED_MODULE_1__.playerShipSelect.add(option);\r\n  });\r\n\r\n  playerSquares.forEach((square) => {\r\n    const x = parseInt(square.getAttribute('data-x'));\r\n    const y = parseInt(square.getAttribute('data-y'));\r\n\r\n    square.addEventListener('mouseenter', () => {\r\n      handlePlayerSquareMouseEnter(x, y);\r\n    });\r\n\r\n    square.addEventListener('mousedown', () => {\r\n      handlePlayerSquareMouseDown(x, y);\r\n    });\r\n\r\n    square.addEventListener('mouseleave', () => {\r\n      handlePlayerSquareMouseLeave(x, y, playerSquares, shipPlacementPhase);\r\n    });\r\n  });\r\n\r\n  computerSquares.forEach((square) => {\r\n    const x = parseInt(square.getAttribute('data-x'));\r\n    const y = parseInt(square.getAttribute('data-y'));\r\n\r\n    square.addEventListener('mousedown', () => {\r\n      handleComputerSquareMouseDown(x, y);\r\n    });\r\n  });\r\n};\r\n\r\nconst EndPlacementPhase = () => {\r\n  shipPlacementPhase = false;\r\n  _vars_js__WEBPACK_IMPORTED_MODULE_1__.playerShipRotationBtn.remove();\r\n  _vars_js__WEBPACK_IMPORTED_MODULE_1__.playerShipSelect.remove();\r\n  gamePhase = true;\r\n  _vars_js__WEBPACK_IMPORTED_MODULE_1__.player1.isTurn = Math.random() * 10 > 5 ? true : false;\r\n  _vars_js__WEBPACK_IMPORTED_MODULE_1__.player2.isTurn = !_vars_js__WEBPACK_IMPORTED_MODULE_1__.player1.isTurn;\r\n  NextTurn();\r\n  UpdateTurnUI();\r\n};\r\n\r\nconst UpdateTurnUI = () => {\r\n  _vars_js__WEBPACK_IMPORTED_MODULE_1__.playerTurnDiv.style.display = _vars_js__WEBPACK_IMPORTED_MODULE_1__.player1.isTurn ? 'block' : 'none';\r\n  _vars_js__WEBPACK_IMPORTED_MODULE_1__.computerTurnDiv.style.display = _vars_js__WEBPACK_IMPORTED_MODULE_1__.player2.isTurn ? 'block' : 'none';\r\n  _vars_js__WEBPACK_IMPORTED_MODULE_1__.playerTurnDiv.textContent = _vars_js__WEBPACK_IMPORTED_MODULE_1__.player1.isTurn ? `Your turn` : '';\r\n  _vars_js__WEBPACK_IMPORTED_MODULE_1__.computerTurnDiv.textContent = _vars_js__WEBPACK_IMPORTED_MODULE_1__.player1.isTurn ? '' : `Computer's turn`;\r\n};\r\n\r\nconst NextTurn = () => {\r\n  // check if game is over\r\n  if (_vars_js__WEBPACK_IMPORTED_MODULE_1__.player1.enemyBoard.allShipsSunk()) {\r\n    alert('Player wins');\r\n    return;\r\n  }\r\n  if (_vars_js__WEBPACK_IMPORTED_MODULE_1__.player2.enemyBoard.allShipsSunk()) {\r\n    alert('Computer wins');\r\n    return;\r\n  }\r\n\r\n  console.log('yes');\r\n\r\n  if (_vars_js__WEBPACK_IMPORTED_MODULE_1__.player1.isTurn) {\r\n    _vars_js__WEBPACK_IMPORTED_MODULE_1__.player1.isTurn = false;\r\n    _vars_js__WEBPACK_IMPORTED_MODULE_1__.player2.isTurn = true;\r\n    var index = 0;\r\n    let incrementEveryHalfSecond = setInterval(function () {\r\n      index++;\r\n      if (index == 1) {\r\n        makeComputerMove();\r\n        clearInterval(incrementEveryHalfSecond);\r\n      }\r\n    }, 1000);\r\n    let incrementNextTurn = setInterval(function () {\r\n      NextTurn();\r\n      clearInterval(incrementNextTurn);\r\n    }, 2000);\r\n  } else {\r\n    _vars_js__WEBPACK_IMPORTED_MODULE_1__.player1.isTurn = true;\r\n    _vars_js__WEBPACK_IMPORTED_MODULE_1__.player2.isTurn = false;\r\n  }\r\n\r\n  // change ui to show whos turn it is\r\n  UpdateTurnUI();\r\n};\r\n\r\n// attack logic\r\n\r\nconst makeComputerMove = () => {\r\n  // see if last move was a hit\r\n  let attackX;\r\n  let attackY;\r\n\r\n  if (shipHitCoords !== null) {\r\n    [attackX, attackY] = shipHitCoords;\r\n\r\n    const checkAttackCoords = (x, y) => {\r\n      return (\r\n        x < 0 ||\r\n        x >= _vars_js__WEBPACK_IMPORTED_MODULE_1__.gridSize ||\r\n        y < 0 ||\r\n        y >= _vars_js__WEBPACK_IMPORTED_MODULE_1__.gridSize ||\r\n        _vars_js__WEBPACK_IMPORTED_MODULE_1__.player2.coordinatesAttacked.some(\r\n          (pos) => JSON.stringify(pos) === JSON.stringify([x, y])\r\n        )\r\n      );\r\n    };\r\n\r\n    const getNextAttackCoords = (x, y) => {\r\n      switch (currentHitDirection) {\r\n        case 'up':\r\n          y--;\r\n          if (checkAttackCoords(x, y)) {\r\n            currentHitDirection = 'down';\r\n            y++;\r\n          }\r\n          break;\r\n        case 'down':\r\n          y++;\r\n          if (checkAttackCoords(x, y)) {\r\n            currentHitDirection = 'left';\r\n            y--;\r\n          }\r\n          break;\r\n        case 'left':\r\n          x--;\r\n          if (checkAttackCoords(x, y)) {\r\n            currentHitDirection = 'right';\r\n            x++;\r\n          }\r\n          break;\r\n        case 'right':\r\n          x++;\r\n          if (checkAttackCoords(x, y)) {\r\n            currentHitDirection = 'up';\r\n            x--;\r\n          }\r\n          break;\r\n      }\r\n      return [x, y];\r\n    };\r\n\r\n    let hasFoundGoodAttackCoords = false;\r\n    let i = 0;\r\n\r\n    while (!hasFoundGoodAttackCoords) {\r\n      i++;\r\n      if (i > 100) {\r\n        shipHitCoords = null;\r\n        firstShipHitCoords = null;\r\n      }\r\n      [attackX, attackY] = getNextAttackCoords(attackX, attackY);\r\n      hasFoundGoodAttackCoords = !checkAttackCoords(attackX, attackY);\r\n\r\n      if (!hasFoundGoodAttackCoords) {\r\n        shipHitCoords = firstShipHitCoords;\r\n        [attackX, attackY] = firstShipHitCoords;\r\n      }\r\n    }\r\n  } else {\r\n    const isAttackCoordsValid = (x, y) => {\r\n      return (\r\n        x >= 0 &&\r\n        x < _vars_js__WEBPACK_IMPORTED_MODULE_1__.gridSize &&\r\n        y >= 0 &&\r\n        y < _vars_js__WEBPACK_IMPORTED_MODULE_1__.gridSize &&\r\n        !_vars_js__WEBPACK_IMPORTED_MODULE_1__.player2.coordinatesAttacked.some(\r\n          (pos) => JSON.stringify(pos) === JSON.stringify([x, y])\r\n        )\r\n      );\r\n    };\r\n\r\n    do {\r\n      attackX = Math.floor(Math.random() * _vars_js__WEBPACK_IMPORTED_MODULE_1__.gridSize);\r\n      attackY = Math.floor(Math.random() * _vars_js__WEBPACK_IMPORTED_MODULE_1__.gridSize);\r\n    } while (!isAttackCoordsValid(attackX, attackY));\r\n  }\r\n\r\n  // attack that location\r\n  _vars_js__WEBPACK_IMPORTED_MODULE_1__.player2.attackCoordinates(attackX, attackY);\r\n\r\n  const squareAttacked = document.querySelector(\r\n    `[data-x=\"${attackX}\"][data-y=\"${attackY}\"].playerSquare`\r\n  );\r\n\r\n  const isHit = (pos) =>\r\n    JSON.stringify(pos) === JSON.stringify([attackX, attackY]);\r\n\r\n  if (_vars_js__WEBPACK_IMPORTED_MODULE_1__.player2.enemyBoard.hitAttacks.some(isHit)) {\r\n    HandleAttackHit(attackX, attackY, squareAttacked);\r\n  }\r\n\r\n  if (_vars_js__WEBPACK_IMPORTED_MODULE_1__.player2.enemyBoard.missedAttacks.some(isHit)) {\r\n    HandleAttackMiss(attackX, attackY, squareAttacked);\r\n  }\r\n};\r\n\r\nconst HandleAttackHit = (x, y, squareHit) => {\r\n  if (firstShipHitCoords == null) firstShipHitCoords = [x, y];\r\n  shipHitCoords = [x, y];\r\n\r\n  squareHit.classList.add('hit');\r\n\r\n  if (_vars_js__WEBPACK_IMPORTED_MODULE_1__.player2.enemyBoard.board[x][y].sunk) {\r\n    shipHitCoords = null;\r\n    const randomDir = Math.random() * 100;\r\n    switch (true) {\r\n      case randomDir > 75:\r\n        currentHitDirection = 'up';\r\n        break;\r\n      case randomDir <= 75 && randomDir > 50:\r\n        currentHitDirection = 'down';\r\n        break;\r\n      case randomDir <= 50 && randomDir > 25:\r\n        currentHitDirection = 'right';\r\n        break;\r\n      default:\r\n        currentHitDirection = 'left';\r\n        break;\r\n    }\r\n    firstShipHitCoords = null;\r\n  }\r\n};\r\n\r\nconst HandleAttackMiss = (x, y, squareMissed) => {\r\n  squareMissed.classList.add('missed');\r\n};\r\n\r\nconst HandlePlayerAttackHit = (x, y, squareHit) => {\r\n  squareHit.classList.add('hit');\r\n};\r\n\r\nconst HandlePlayerAttackMiss = (x, y, squareMissed) => {\r\n  squareMissed.classList.add('missed');\r\n};\r\n\r\nconst changeShipRotation = () => {\r\n  shipRotationHorizontal = !shipRotationHorizontal;\r\n\r\n  _vars_js__WEBPACK_IMPORTED_MODULE_1__.playerShipRotationBtn.textContent = `Rotation: ${\r\n    shipRotationHorizontal ? 'Horizontal' : 'Vertical'\r\n  }`;\r\n\r\n  playerSquares.forEach((square) => {\r\n    square.classList.remove('red');\r\n  });\r\n};\r\n\r\n// helper functions\r\n\r\nconst handlePlayerSquareMouseEnter = (x, y) => {\r\n  if (!shipPlacementPhase) return;\r\n  // figure out the length of the currently selected ship option\r\n  let length;\r\n  _vars_js__WEBPACK_IMPORTED_MODULE_1__.player1.ships.forEach((ship) => {\r\n    if (ship.name == _vars_js__WEBPACK_IMPORTED_MODULE_1__.playerShipSelect.value) {\r\n      length = ship.length;\r\n    }\r\n  });\r\n  if (shipRotationHorizontal && x + length > _vars_js__WEBPACK_IMPORTED_MODULE_1__.gridSize) return;\r\n  if (!shipRotationHorizontal && y + length > _vars_js__WEBPACK_IMPORTED_MODULE_1__.gridSize) return;\r\n  let freePositionFound = (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.IsPositionFree)(\r\n    x,\r\n    y,\r\n    length,\r\n    shipRotationHorizontal,\r\n    _vars_js__WEBPACK_IMPORTED_MODULE_1__.player1board\r\n  );\r\n  if (!freePositionFound) return;\r\n\r\n  // highlight all the coordinates that would be occupied by the correct ship vertically or horizontally\r\n  while (length > 0) {\r\n    const squareInShip = document.querySelector(\r\n      `[data-x=\"${shipRotationHorizontal ? x + length - 1 : x}\"][data-y=\"${\r\n        shipRotationHorizontal ? y : y + length - 1\r\n      }\"].playerSquare`\r\n    );\r\n    squareInShip.classList.add('red');\r\n    length--;\r\n  }\r\n};\r\n\r\nconst handlePlayerSquareMouseDown = (x, y) => {\r\n  if (!shipPlacementPhase) return;\r\n\r\n  let length;\r\n  let shipIndex;\r\n  _vars_js__WEBPACK_IMPORTED_MODULE_1__.player1.ships.forEach((ship, index) => {\r\n    if (ship.name == _vars_js__WEBPACK_IMPORTED_MODULE_1__.playerShipSelect.value) {\r\n      length = ship.length;\r\n      shipIndex = index;\r\n    }\r\n  });\r\n\r\n  if (shipRotationHorizontal && x + length > _vars_js__WEBPACK_IMPORTED_MODULE_1__.gridSize) return;\r\n  if (!shipRotationHorizontal && y + length > _vars_js__WEBPACK_IMPORTED_MODULE_1__.gridSize) return;\r\n  let freePositionFound = (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.IsPositionFree)(\r\n    x,\r\n    y,\r\n    length,\r\n    shipRotationHorizontal,\r\n    _vars_js__WEBPACK_IMPORTED_MODULE_1__.player1board\r\n  );\r\n  if (!freePositionFound) return;\r\n\r\n  while (length > 0) {\r\n    const squareInShip = document.querySelector(\r\n      `[data-x=\"${shipRotationHorizontal ? x + length - 1 : x}\"][data-y=\"${\r\n        shipRotationHorizontal ? y : y + length - 1\r\n      }\"].playerSquare`\r\n    );\r\n    squareInShip.classList.add('ship');\r\n    length--;\r\n  }\r\n\r\n  const placedShip = _vars_js__WEBPACK_IMPORTED_MODULE_1__.player1.ships.splice(shipIndex, 1);\r\n  _vars_js__WEBPACK_IMPORTED_MODULE_1__.player1.activeShips.push(placedShip);\r\n  _vars_js__WEBPACK_IMPORTED_MODULE_1__.player1board.placeShip(\r\n    placedShip[0].name,\r\n    placedShip[0].length,\r\n    x,\r\n    y,\r\n    shipRotationHorizontal\r\n  );\r\n\r\n  if (_vars_js__WEBPACK_IMPORTED_MODULE_1__.player1.ships.length == 0) {\r\n    EndPlacementPhase();\r\n  } else {\r\n    _vars_js__WEBPACK_IMPORTED_MODULE_1__.playerShipSelect.remove(shipIndex);\r\n    _vars_js__WEBPACK_IMPORTED_MODULE_1__.playerShipSelect.value = _vars_js__WEBPACK_IMPORTED_MODULE_1__.player1.ships[0].name;\r\n  }\r\n};\r\nconst handlePlayerSquareMouseLeave = (x, y) => {\r\n  if (!shipPlacementPhase) return;\r\n\r\n  playerSquares.forEach((square) => {\r\n    square.classList.remove('red');\r\n  });\r\n};\r\n\r\nconst handleComputerSquareMouseDown = (x, y) => {\r\n  if (!gamePhase) return;\r\n  if (!_vars_js__WEBPACK_IMPORTED_MODULE_1__.player1.isTurn) return;\r\n\r\n  const isAttackCoordsValid = (x, y) => {\r\n    return (\r\n      x >= 0 &&\r\n      x < _vars_js__WEBPACK_IMPORTED_MODULE_1__.gridSize &&\r\n      y >= 0 &&\r\n      y < _vars_js__WEBPACK_IMPORTED_MODULE_1__.gridSize &&\r\n      !_vars_js__WEBPACK_IMPORTED_MODULE_1__.player1.coordinatesAttacked.some(\r\n        (pos) => JSON.stringify(pos) === JSON.stringify([x, y])\r\n      )\r\n    );\r\n  };\r\n\r\n  if (!isAttackCoordsValid(x, y)) return;\r\n\r\n  // check if hit or miss and color accordingly\r\n\r\n  _vars_js__WEBPACK_IMPORTED_MODULE_1__.player1.attackCoordinates(x, y);\r\n\r\n  const squareAttacked = document.querySelector(\r\n    `[data-x=\"${x}\"][data-y=\"${y}\"].computerSquare`\r\n  );\r\n\r\n  const isHit = (pos) => JSON.stringify(pos) === JSON.stringify([x, y]);\r\n\r\n  if (_vars_js__WEBPACK_IMPORTED_MODULE_1__.player1.enemyBoard.hitAttacks.some(isHit)) {\r\n    HandlePlayerAttackHit(x, y, squareAttacked);\r\n\r\n    const shipAttacked = _vars_js__WEBPACK_IMPORTED_MODULE_1__.player1.enemyBoard.board[x][y];\r\n\r\n    console.log(shipAttacked);\r\n\r\n    if (shipAttacked.isSunk()) {\r\n      // check if all ships are sunk\r\n      if (_vars_js__WEBPACK_IMPORTED_MODULE_1__.player1.enemyBoard.allShipsSunk()) {\r\n        alert('Player wins');\r\n        return;\r\n      }\r\n    }\r\n  }\r\n\r\n  if (_vars_js__WEBPACK_IMPORTED_MODULE_1__.player1.enemyBoard.missedAttacks.some(isHit)) {\r\n    HandlePlayerAttackMiss(x, y, squareAttacked);\r\n  }\r\n\r\n  // update ui\r\n\r\n  // animation\r\n\r\n  // play sounds\r\n  NextTurn();\r\n};\r\n\n\n//# sourceURL=webpack://odin-project-battleships/./src/script.js?");

/***/ }),

/***/ "./src/vars.js":
/*!*********************!*\
  !*** ./src/vars.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   computerBoard: () => (/* binding */ computerBoard),\n/* harmony export */   computerTurnDiv: () => (/* binding */ computerTurnDiv),\n/* harmony export */   gameScreen: () => (/* binding */ gameScreen),\n/* harmony export */   gridSize: () => (/* binding */ gridSize),\n/* harmony export */   menuScreen: () => (/* binding */ menuScreen),\n/* harmony export */   player1: () => (/* binding */ player1),\n/* harmony export */   player1board: () => (/* binding */ player1board),\n/* harmony export */   player2: () => (/* binding */ player2),\n/* harmony export */   player2board: () => (/* binding */ player2board),\n/* harmony export */   playerBoard: () => (/* binding */ playerBoard),\n/* harmony export */   playerNameInput: () => (/* binding */ playerNameInput),\n/* harmony export */   playerNameStat: () => (/* binding */ playerNameStat),\n/* harmony export */   playerShipRotationBtn: () => (/* binding */ playerShipRotationBtn),\n/* harmony export */   playerShipSelect: () => (/* binding */ playerShipSelect),\n/* harmony export */   playerTurnDiv: () => (/* binding */ playerTurnDiv),\n/* harmony export */   startGameButton: () => (/* binding */ startGameButton)\n/* harmony export */ });\n/* harmony import */ var _battleships_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./battleships.js */ \"./src/battleships.js\");\n\r\n\r\nconst playerTurnDiv = document.getElementById('player-turn');\r\nconst computerTurnDiv = document.getElementById('computer-turn');\r\nconst startGameButton = document.querySelector('#start-game-btn');\r\nconst menuScreen = document.querySelector('#menu-screen');\r\nconst gameScreen = document.querySelector('#game-screen');\r\nconst playerNameInput = document.querySelector('#player-name-input');\r\nconst playerNameStat = document.querySelector('#player-name-stat');\r\nconst playerBoard = document.querySelector('#player-board');\r\nconst computerBoard = document.querySelector('#computer-board');\r\nconst playerShipSelect = document.querySelector('#player-ships-select');\r\nconst playerShipRotationBtn = document.querySelector(\r\n  '#player-ship-rotation-btn'\r\n);\r\n\r\nconst gridSize = 10;\r\n\r\n// variables\r\nconst player1board = new _battleships_js__WEBPACK_IMPORTED_MODULE_0__.Gameboard(false);\r\nconst player2board = new _battleships_js__WEBPACK_IMPORTED_MODULE_0__.Gameboard(true);\r\nconst player1 = new _battleships_js__WEBPACK_IMPORTED_MODULE_0__.Player(\r\n  playerNameInput.value,\r\n  true,\r\n  player1board,\r\n  player2board\r\n);\r\nconst player2 = new _battleships_js__WEBPACK_IMPORTED_MODULE_0__.Player('Computer', false, player2board, player1board);\r\n\r\n\r\n\n\n//# sourceURL=webpack://odin-project-battleships/./src/vars.js?");

/***/ }),

/***/ "./src/images/hit.png":
/*!****************************!*\
  !*** ./src/images/hit.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"39916cb5bcee1aacfbd2.png\";\n\n//# sourceURL=webpack://odin-project-battleships/./src/images/hit.png?");

/***/ }),

/***/ "./src/images/hover.png":
/*!******************************!*\
  !*** ./src/images/hover.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"e646c71e989c374a523d.png\";\n\n//# sourceURL=webpack://odin-project-battleships/./src/images/hover.png?");

/***/ }),

/***/ "./src/images/miss.png":
/*!*****************************!*\
  !*** ./src/images/miss.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"443c156a155809b926a5.png\";\n\n//# sourceURL=webpack://odin-project-battleships/./src/images/miss.png?");

/***/ }),

/***/ "./src/images/water.png":
/*!******************************!*\
  !*** ./src/images/water.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"e577b4e5d3ce3426b821.png\";\n\n//# sourceURL=webpack://odin-project-battleships/./src/images/water.png?");

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
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/script.js");
/******/ 	
/******/ })()
;