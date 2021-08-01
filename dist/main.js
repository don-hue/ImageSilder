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

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/SASS/styles.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/SASS/styles.scss ***!
  \***********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../src/SASS/Images/forrest.jpg */ \"./src/SASS/Images/forrest.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".Maindiv {\\n  position: absolute;\\n  display: flex;\\n  flex-wrap: wrap;\\n  flex-direction: column;\\n  top: 50%;\\n  left: 50%;\\n  transform: translate(-50%, -50%);\\n  height: 200px;\\n  width: 300px;\\n  background-color: #274472;\\n  border-radius: 20px;\\n  overflow: hidden; }\\n\\n.Radio {\\n  position: absolute;\\n  display: flex;\\n  top: 70%;\\n  left: 50%;\\n  transform: translate(-50%, -50%);\\n  background-color: rgba(195, 224, 229, 0.7);\\n  border-radius: 10px; }\\n  .Radio .Rad {\\n    cursor: pointer; }\\n\\n.Arrow {\\n  position: relative;\\n  height: 20px;\\n  cursor: pointer; }\\n\\n.box {\\n  position: relative;\\n  height: 200px;\\n  width: 300px; }\\n\\n.img1 {\\n  background-color: pink;\\n  margin-left: 0%; }\\n\\n.img2 {\\n  background-color: powderblue;\\n  margin-left: 0%; }\\n\\n.img3 {\\n  background-color: red;\\n  margin-left: 0%; }\\n\\n.img4 {\\n  background-color: #274472;\\n  margin-left: 0%; }\\n\\n.img5 {\\n  background-color: pink;\\n  margin-left: 0%; }\\n\\n.imgAnim {\\n  animation-name: this;\\n  animation-duration: 1s;\\n  animation-fill-mode: forwards;\\n  animation-iteration-count: 1;\\n  animation-timing-function: cubic-bezier(0.18, 0.89, 0.71, 1.37); }\\n\\n@keyframes this {\\n  0% {\\n    margin-left: 0%; }\\n  100% {\\n    margin-left: -100%; } }\\n\\n.imgAnimB {\\n  animation-name: that;\\n  animation-duration: 1s;\\n  animation-fill-mode: forwards;\\n  animation-iteration-count: 1;\\n  animation-timing-function: cubic-bezier(0.18, 0.89, 0.71, 1.37); }\\n\\n@keyframes that {\\n  0% {\\n    margin-left: -100%; }\\n  100% {\\n    margin-left: 0%; } }\\n\\nbody {\\n  background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \"); }\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://ImageSilder/./src/SASS/styles.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://ImageSilder/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    // eslint-disable-next-line no-param-reassign\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://ImageSilder/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./src/SASS/styles.scss":
/*!******************************!*\
  !*** ./src/SASS/styles.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./styles.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/SASS/styles.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__.default, options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);\n\n\n//# sourceURL=webpack://ImageSilder/./src/SASS/styles.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://ImageSilder/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://ImageSilder/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var style = document.createElement(\"style\");\n  options.setAttributes(style, options.attributes);\n  options.insert(style);\n  return style;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://ImageSilder/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(style) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    style.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://ImageSilder/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute(\"media\", media);\n  } else {\n    style.removeAttribute(\"media\");\n  }\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, style);\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var style = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(style, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(style);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://ImageSilder/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, style) {\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://ImageSilder/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/Javascript/_arrow.js":
/*!**********************************!*\
  !*** ./src/Javascript/_arrow.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"_rightArrow\": () => (/* binding */ _rightArrow),\n/* harmony export */   \"_leftArrow\": () => (/* binding */ _leftArrow)\n/* harmony export */ });\nlet currentImg = 0;\nconst imgArray = ['.img1', '.img2', '.img3', '.img4', '.img5'];\nconst radArray = ['.Rad1', '.Rad2', '.Rad3', '.Rad4'];\n\nfunction slideRight() {\n\tif (currentImg == 0) {\n\t\tconst temp2 = document.querySelector(imgArray[currentImg + 1]);\n\t\ttemp2.classList.add('imgAnim');\n\n\t\tconst rad = document.querySelector(radArray[currentImg + 1]);\n\t\trad.checked = true;\n\n\t\tcurrentImg = 1;\n\t} else if (currentImg == 1 || currentImg < 3) {\n\t\tconst temp = document.querySelector(imgArray[currentImg]);\n\t\ttemp.style.marginLeft = '-100%';\n\t\ttemp.classList.remove('imgAnim');\n\n\t\tconst temp2 = document.querySelector(imgArray[currentImg + 1]);\n\t\ttemp2.classList.add('imgAnim');\n\n\t\tconst rad = document.querySelector(radArray[currentImg + 1]);\n\t\trad.checked = true;\n\n\t\tcurrentImg = currentImg + 1;\n\t} else if (currentImg == 3) {\n\t\tconst temp = document.querySelector(imgArray[currentImg]);\n\t\ttemp.style.marginLeft = '-100%';\n\t\ttemp.classList.remove('imgAnim');\n\n\t\tconst temp0 = document.querySelector(imgArray[currentImg + 1]);\n\t\ttemp0.classList.add('imgAnim');\n\n\t\tconst temp00 = document.querySelector('.img1');\n\t\ttemp00.style.zindex = '1';\n\n\t\tsetTimeout(() => {\n\t\t\tconst temp1 = document.querySelector(imgArray[1]);\n\t\t\ttemp1.style.marginLeft = '0%';\n\n\t\t\tconst temp2 = document.querySelector(imgArray[2]);\n\t\t\ttemp2.style.marginLeft = '0%';\n\n\t\t\tconst temp3 = document.querySelector(imgArray[3]);\n\t\t\ttemp3.style.marginLeft = '0%';\n\n\t\t\tconst temp4 = document.querySelector(imgArray[4]);\n\t\t\ttemp4.style.marginLeft = '0%';\n\t\t\ttemp4.classList.remove('imgAnim');\n\t\t}, 1100);\n\n\t\tconst rad = document.querySelector(radArray[0]);\n\t\trad.checked = true;\n\n\t\tcurrentImg = 0;\n\t}\n}\n\nfunction slideLeft() {\n    if (currentImg < 1 || currentImg < 4) {\n\t\tconst temp = document.querySelector(imgArray[currentImg]);\n\t\ttemp.classList.add('imgAnimB');\n        temp.classList.remove('imgAnim');\n\n        setTimeout(() => {\n            temp.classList.remove('imgAnimB');\n            temp.style.marginLeft='0%';\n        }, 1100);\n\n\t\tconst rad = document.querySelector(radArray[currentImg - 1]);\n\t\trad.checked = true;\n\n\t\tcurrentImg = currentImg - 1;\n\t}\n}\n\nconst _rightArrow = () => {\n\tconst rightArrow = document.querySelector('.right');\n\trightArrow.addEventListener('click', slideRight);\n};\n\nconst _leftArrow = () => {\n\tconst leftArrow = document.querySelector('.left');\n\tleftArrow.addEventListener('click', slideLeft);\n};\n\n\n\n\n//# sourceURL=webpack://ImageSilder/./src/Javascript/_arrow.js?");

/***/ }),

/***/ "./src/Javascript/_createImage.js":
/*!****************************************!*\
  !*** ./src/Javascript/_createImage.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"_insertImage\": () => (/* binding */ _insertImage)\n/* harmony export */ });\nconst _insertImage = (parent, classname, source) => {\n\tconst temp = document.createElement('img');\n\ttemp.src = source;\n\ttemp.classList.add(classname);\n\tparent.appendChild(temp);\n};\n\n\n\n\n//# sourceURL=webpack://ImageSilder/./src/Javascript/_createImage.js?");

/***/ }),

/***/ "./src/Javascript/_maindiv.js":
/*!************************************!*\
  !*** ./src/Javascript/_maindiv.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"_ElementCreator\": () => (/* binding */ _ElementCreator),\n/* harmony export */   \"_addClass\": () => (/* binding */ _addClass)\n/* harmony export */ });\nconst _ElementCreator = (element, classname, parent) => {\n\tconst temp = document.createElement(element);\n\ttemp.classList.add(classname);\n\tparent.appendChild(temp);\n};\n\nconst _addClass=(element, classname)=>{\n\telement.classList.add(classname);\n}\n\n\n\n\n//# sourceURL=webpack://ImageSilder/./src/Javascript/_maindiv.js?");

/***/ }),

/***/ "./src/Javascript/_radiobutton.js":
/*!****************************************!*\
  !*** ./src/Javascript/_radiobutton.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"_createRadioButton\": () => (/* binding */ _createRadioButton)\n/* harmony export */ });\nconst _createRadioButton=(parent, classname)=>{\n    const temp = document.createElement('input');\n    temp.setAttribute('type', 'radio');\n    temp.name='action'\n    temp.classList.add(classname);\n    parent.appendChild(temp);\n}\n\n\n\n//# sourceURL=webpack://ImageSilder/./src/Javascript/_radiobutton.js?");

/***/ }),

/***/ "./src/Javascript/index.js":
/*!*********************************!*\
  !*** ./src/Javascript/index.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _SASS_styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../SASS/styles.scss */ \"./src/SASS/styles.scss\");\n/* harmony import */ var _maindiv__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_maindiv */ \"./src/Javascript/_maindiv.js\");\n/* harmony import */ var _radiobutton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_radiobutton */ \"./src/Javascript/_radiobutton.js\");\n/* harmony import */ var _createImage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_createImage */ \"./src/Javascript/_createImage.js\");\n/* harmony import */ var _arrow__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_arrow */ \"./src/Javascript/_arrow.js\");\n\n\n\n\n\n\n\n\n\n\n//TODO: Main-functio for buildng boxes--> takes input of how many boxes you want to create\n(0,_maindiv__WEBPACK_IMPORTED_MODULE_1__._ElementCreator)('div', 'Maindiv', document.body);\n(0,_maindiv__WEBPACK_IMPORTED_MODULE_1__._ElementCreator)('div', 'img1', document.querySelector('.Maindiv'));\n(0,_maindiv__WEBPACK_IMPORTED_MODULE_1__._addClass)(document.querySelector('.img1'), 'box');\n\n(0,_maindiv__WEBPACK_IMPORTED_MODULE_1__._ElementCreator)('div', 'img2', document.querySelector('.Maindiv'));\n(0,_maindiv__WEBPACK_IMPORTED_MODULE_1__._addClass)(document.querySelector('.img2'), 'box');\n\n(0,_maindiv__WEBPACK_IMPORTED_MODULE_1__._ElementCreator)('div', 'img3', document.querySelector('.Maindiv'));\n(0,_maindiv__WEBPACK_IMPORTED_MODULE_1__._addClass)(document.querySelector('.img3'), 'box');\n\n(0,_maindiv__WEBPACK_IMPORTED_MODULE_1__._ElementCreator)('div', 'img4', document.querySelector('.Maindiv'));\n(0,_maindiv__WEBPACK_IMPORTED_MODULE_1__._addClass)(document.querySelector('.img4'), 'box');\n\n(0,_maindiv__WEBPACK_IMPORTED_MODULE_1__._ElementCreator)('div', 'img5', document.querySelector('.Maindiv'));\n(0,_maindiv__WEBPACK_IMPORTED_MODULE_1__._addClass)(document.querySelector('.img5'), 'box');\n\n//TODO: Function to create several checkboxes\n(0,_maindiv__WEBPACK_IMPORTED_MODULE_1__._ElementCreator)('form', 'Radio', document.body);\n(0,_createImage__WEBPACK_IMPORTED_MODULE_3__._insertImage)(document.querySelector('.Radio'),'left','/src/SASS/Images/left.png')\n;(0,_maindiv__WEBPACK_IMPORTED_MODULE_1__._addClass)(document.querySelector('.left'),'Arrow');\n(0,_radiobutton__WEBPACK_IMPORTED_MODULE_2__._createRadioButton)(document.querySelector('.Radio'), 'Rad1');\n(0,_maindiv__WEBPACK_IMPORTED_MODULE_1__._addClass)(document.querySelector('.Rad1'),'Rad');\ndocument.querySelector('.Rad1').checked=true;\n(0,_radiobutton__WEBPACK_IMPORTED_MODULE_2__._createRadioButton)(document.querySelector('.Radio'), 'Rad2');\n(0,_maindiv__WEBPACK_IMPORTED_MODULE_1__._addClass)(document.querySelector('.Rad2'),'Rad');\n(0,_radiobutton__WEBPACK_IMPORTED_MODULE_2__._createRadioButton)(document.querySelector('.Radio'), 'Rad3');\n(0,_maindiv__WEBPACK_IMPORTED_MODULE_1__._addClass)(document.querySelector('.Rad3'),'Rad');\n(0,_radiobutton__WEBPACK_IMPORTED_MODULE_2__._createRadioButton)(document.querySelector('.Radio'), 'Rad4');\n(0,_maindiv__WEBPACK_IMPORTED_MODULE_1__._addClass)(document.querySelector('.Rad4'),'Rad');\n(0,_createImage__WEBPACK_IMPORTED_MODULE_3__._insertImage)(document.querySelector('.Radio'),'right','/src/SASS/Images/right.png');\n(0,_maindiv__WEBPACK_IMPORTED_MODULE_1__._addClass)(document.querySelector('.right'),'Arrow');\n\n(0,_arrow__WEBPACK_IMPORTED_MODULE_4__._rightArrow)();\n(0,_arrow__WEBPACK_IMPORTED_MODULE_4__._leftArrow)()\n\n\n\n//# sourceURL=webpack://ImageSilder/./src/Javascript/index.js?");

/***/ }),

/***/ "./src/SASS/Images/forrest.jpg":
/*!*************************************!*\
  !*** ./src/SASS/Images/forrest.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"27562db964dca35f6233.jpg\";\n\n//# sourceURL=webpack://ImageSilder/./src/SASS/Images/forrest.jpg?");

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
/******/ 				scriptUrl = document.currentScript.src
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/Javascript/index.js");
/******/ 	
/******/ })()
;