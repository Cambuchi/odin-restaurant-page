/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/modern-normalize.css":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/modern-normalize.css ***!
  \************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/*! modern-normalize v1.1.0 | MIT License | https://github.com/sindresorhus/modern-normalize */\\n\\n/*\\nDocument\\n========\\n*/\\n\\n/**\\nUse a better box model (opinionated).\\n*/\\n\\n*,\\n::before,\\n::after {\\n\\tbox-sizing: border-box;\\n}\\n\\n/**\\nUse a more readable tab size (opinionated).\\n*/\\n\\nhtml {\\n\\t-moz-tab-size: 4;\\n\\ttab-size: 4;\\n}\\n\\n/**\\n1. Correct the line height in all browsers.\\n2. Prevent adjustments of font size after orientation changes in iOS.\\n*/\\n\\nhtml {\\n\\tline-height: 1.15; /* 1 */\\n\\t-webkit-text-size-adjust: 100%; /* 2 */\\n}\\n\\n/*\\nSections\\n========\\n*/\\n\\n/**\\nRemove the margin in all browsers.\\n*/\\n\\nbody {\\n\\tmargin: 0;\\n}\\n\\n/**\\nImprove consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)\\n*/\\n\\nbody {\\n\\tfont-family:\\n\\t\\tsystem-ui,\\n\\t\\t-apple-system, /* Firefox supports this but not yet `system-ui` */\\n\\t\\t'Segoe UI',\\n\\t\\tRoboto,\\n\\t\\tHelvetica,\\n\\t\\tArial,\\n\\t\\tsans-serif,\\n\\t\\t'Apple Color Emoji',\\n\\t\\t'Segoe UI Emoji';\\n}\\n\\n/*\\nGrouping content\\n================\\n*/\\n\\n/**\\n1. Add the correct height in Firefox.\\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\\n*/\\n\\nhr {\\n\\theight: 0; /* 1 */\\n\\tcolor: inherit; /* 2 */\\n}\\n\\n/*\\nText-level semantics\\n====================\\n*/\\n\\n/**\\nAdd the correct text decoration in Chrome, Edge, and Safari.\\n*/\\n\\nabbr[title] {\\n\\ttext-decoration: underline dotted;\\n}\\n\\n/**\\nAdd the correct font weight in Edge and Safari.\\n*/\\n\\nb,\\nstrong {\\n\\tfont-weight: bolder;\\n}\\n\\n/**\\n1. Improve consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)\\n2. Correct the odd 'em' font sizing in all browsers.\\n*/\\n\\ncode,\\nkbd,\\nsamp,\\npre {\\n\\tfont-family:\\n\\t\\tui-monospace,\\n\\t\\tSFMono-Regular,\\n\\t\\tConsolas,\\n\\t\\t'Liberation Mono',\\n\\t\\tMenlo,\\n\\t\\tmonospace; /* 1 */\\n\\tfont-size: 1em; /* 2 */\\n}\\n\\n/**\\nAdd the correct font size in all browsers.\\n*/\\n\\nsmall {\\n\\tfont-size: 80%;\\n}\\n\\n/**\\nPrevent 'sub' and 'sup' elements from affecting the line height in all browsers.\\n*/\\n\\nsub,\\nsup {\\n\\tfont-size: 75%;\\n\\tline-height: 0;\\n\\tposition: relative;\\n\\tvertical-align: baseline;\\n}\\n\\nsub {\\n\\tbottom: -0.25em;\\n}\\n\\nsup {\\n\\ttop: -0.5em;\\n}\\n\\n/*\\nTabular data\\n============\\n*/\\n\\n/**\\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\\n*/\\n\\ntable {\\n\\ttext-indent: 0; /* 1 */\\n\\tborder-color: inherit; /* 2 */\\n}\\n\\n/*\\nForms\\n=====\\n*/\\n\\n/**\\n1. Change the font styles in all browsers.\\n2. Remove the margin in Firefox and Safari.\\n*/\\n\\nbutton,\\ninput,\\noptgroup,\\nselect,\\ntextarea {\\n\\tfont-family: inherit; /* 1 */\\n\\tfont-size: 100%; /* 1 */\\n\\tline-height: 1.15; /* 1 */\\n\\tmargin: 0; /* 2 */\\n}\\n\\n/**\\nRemove the inheritance of text transform in Edge and Firefox.\\n1. Remove the inheritance of text transform in Firefox.\\n*/\\n\\nbutton,\\nselect { /* 1 */\\n\\ttext-transform: none;\\n}\\n\\n/**\\nCorrect the inability to style clickable types in iOS and Safari.\\n*/\\n\\nbutton,\\n[type='button'],\\n[type='reset'],\\n[type='submit'] {\\n\\t-webkit-appearance: button;\\n}\\n\\n/**\\nRemove the inner border and padding in Firefox.\\n*/\\n\\n::-moz-focus-inner {\\n\\tborder-style: none;\\n\\tpadding: 0;\\n}\\n\\n/**\\nRestore the focus styles unset by the previous rule.\\n*/\\n\\n:-moz-focusring {\\n\\toutline: 1px dotted ButtonText;\\n}\\n\\n/**\\nRemove the additional ':invalid' styles in Firefox.\\nSee: https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737\\n*/\\n\\n:-moz-ui-invalid {\\n\\tbox-shadow: none;\\n}\\n\\n/**\\nRemove the padding so developers are not caught out when they zero out 'fieldset' elements in all browsers.\\n*/\\n\\nlegend {\\n\\tpadding: 0;\\n}\\n\\n/**\\nAdd the correct vertical alignment in Chrome and Firefox.\\n*/\\n\\nprogress {\\n\\tvertical-align: baseline;\\n}\\n\\n/**\\nCorrect the cursor style of increment and decrement buttons in Safari.\\n*/\\n\\n::-webkit-inner-spin-button,\\n::-webkit-outer-spin-button {\\n\\theight: auto;\\n}\\n\\n/**\\n1. Correct the odd appearance in Chrome and Safari.\\n2. Correct the outline style in Safari.\\n*/\\n\\n[type='search'] {\\n\\t-webkit-appearance: textfield; /* 1 */\\n\\toutline-offset: -2px; /* 2 */\\n}\\n\\n/**\\nRemove the inner padding in Chrome and Safari on macOS.\\n*/\\n\\n::-webkit-search-decoration {\\n\\t-webkit-appearance: none;\\n}\\n\\n/**\\n1. Correct the inability to style clickable types in iOS and Safari.\\n2. Change font properties to 'inherit' in Safari.\\n*/\\n\\n::-webkit-file-upload-button {\\n\\t-webkit-appearance: button; /* 1 */\\n\\tfont: inherit; /* 2 */\\n}\\n\\n/*\\nInteractive\\n===========\\n*/\\n\\n/*\\nAdd the correct display in Chrome and Safari.\\n*/\\n\\nsummary {\\n\\tdisplay: list-item;\\n}\\n\\nhtml {\\n\\t/* Declare your font family type in the html selector, then your font-family in the body selector */\\n\\tfont-family: Arial, sans-serif;\\n\\n\\t/* Make base font-size 100% of browser font-size */\\n\\tfont-size: 100%;\\n\\n\\t/* Declare your box-sizing here, then inherit the box sizing below in the *, *::before and *::after selector */\\n\\t/* https://css-tricks.com/box-sizing */\\n\\tbox-sizing: border-box;\\n}\\n\\n*,\\n*::before,\\n*::after {\\n\\tbox-sizing: inherit; /* See line 20 */\\n}\\n\\nbody {\\n\\t/* Declare your default font stack here */\\n\\tfont-family: Arial, sans-serif;\\n\\n\\t/* Better text rendering - font-smoothing has not been officially declared, but can still be useful */\\n\\ttext-rendering: geometricPrecision;\\n\\t-webkit-font-smoothing: antialiased;\\n\\t-moz-osx-font-smoothing: grayscale;\\n}\\n\\nimg {\\n\\t/* For responsive images that adjust & adapt */\\n\\t/*height: auto;*/\\n\\t/*max-width: 100%;*/\\n\\n\\t/* This isn't needed, but as a user, I get frustrated when I highlight text and the image gets highlighted too */\\n\\tuser-select: none;\\n}\\n\\nbutton {\\n\\tcolor: inherit; /* By default, buttons don't inherit the font colour, this is a useful default to override */\\n}\\n\\na, button {\\n\\ttouch-action: manipulation; /* Element doesn't want double-tap on mobile to zoom */\\n}\\n\\nsvg {\\n\\t/* Make the SVGs fit the parent container by default */\\n\\theight: 100%;\\n\\twidth: 100%;\\n\\n\\t/* Optional - make the SVG's fill be the same as the inherited color */\\n\\tfill: currentColor;\\n\\n\\t/* Prevent the SVG from altering cursor interaction */\\n\\tpointer-events: none;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://odin-restaurant-page/./src/modern-normalize.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Oswald-VariableFont_wght.ttf */ \"./src/fonts/Oswald-VariableFont_wght.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/ShipporiAntique-Regular.ttf */ \"./src/fonts/ShipporiAntique-Regular.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Philosopher-Regular.ttf */ \"./src/fonts/Philosopher-Regular.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./images/background.jpeg */ \"./src/images/background.jpeg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);\nvar ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"@font-face {\\n    font-family: 'Oswald';\\n    src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \") format('truetype');\\n    font-weight: 300;\\n    font-style: normal;\\n}\\n\\n@font-face {\\n    font-family: 'Shippori';\\n    src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \") format('truetype');\\n    font-weight: 400;\\n    font-style: normal;\\n}\\n\\n@font-face {\\n    font-family: 'Philosopher';\\n    src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_2___ + \") format('truetype');\\n    font-weight: 400;\\n    font-style: normal;\\n}\\n\\nhtml, body {\\n    height: 100%;\\n}\\n\\nbody {\\n    background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_3___ + \") no-repeat center center fixed; \\n    -webkit-background-size: cover;\\n    -moz-background-size: cover;\\n    -o-background-size: cover;\\n    background-size: cover;\\n    display: flex;\\n    flex-direction: column;\\n    align-items: center;\\n}\\n\\n#header {\\n    display: flex;\\n    align-items: center;\\n    justify-content: center;\\n    align-self: stretch;\\n    background: rgba(0, 0, 0, 0.90);\\n    color: white;\\n    font-family: 'Philosopher';\\n    font-size: 5rem;\\n    height: 15vh;\\n    flex-shrink: 0;\\n}\\n\\n#nav {\\n    display: flex;\\n    align-items: center;\\n    justify-content: center;\\n    align-self: stretch;\\n    background: rgba(0, 0, 0, 0.90);\\n    color: rgb(210, 210, 210);\\n    font-family: 'Shippori';\\n    font-size: 2rem;\\n    height: 7.5vh;\\n    flex-shrink: 0;\\n}\\n\\n.inactive {\\n    margin: 0px 20px 0 20px;\\n    padding-top: 15px;\\n    padding-bottom: 15px;\\n    transition: padding .3s ease;\\n}\\n\\n.inactive:hover {\\n    padding-top: 0px;\\n    padding-bottom: 30px;\\n    border-bottom: 2px solid white;\\n    transition: all .3s ease;\\n}\\n\\n.active {\\n    margin: 0px 20px 0 20px;\\n    color: white;\\n    padding-top: 0px;\\n    padding-bottom: 15px;\\n    border-bottom: 3px solid white\\n}\\n\\n#footer {\\n    display: flex;\\n    align-items: center;\\n    justify-content: center;\\n    align-self: stretch;\\n    background: rgba(0, 0, 0, 0.90);\\n    color: rgb(210, 210, 210);\\n    font-family: 'Shippori';\\n    font-size: 1.25rem;\\n    height: 4vh;\\n    position: sticky;\\n    top: 100vh;\\n    flex-shrink: 0;\\n}\\n\\n#content {\\n    color: white;\\n    background: rgba(10, 10, 10, 0.8);\\n    padding: 30px;\\n    display: flex;\\n    flex-direction: column;\\n    flex-grow: 1;\\n}\\n\\n#home-img {\\n    border: 3px solid rgb(200, 200, 200);\\n    border-radius: 100%;\\n    height: 30vh;\\n    width: 35vh;\\n}\\n\\n#home-text {\\n    text-align: center;\\n    padding: 10px;\\n    width: 35vh;\\n    font-family: 'Oswald';\\n    font-size: 1.5rem;\\n}\\n\\n#home-hours-head {\\n    text-align: center;\\n    padding: 10px;\\n    width: 35vh;\\n    font-family: 'Oswald';\\n}\\n\\n#home-hours {\\n    display: flex;\\n    flex-direction: column;\\n    padding: 10px;\\n    width: 35vh;\\n    font-family: 'Oswald';\\n    font-size: 1.5rem;\\n    background: rgb(47, 79, 49);\\n    border-radius: 10px;\\n}\\n\\n.home-timeslot {\\n    display: flex;\\n    justify-content: space-between;\\n    align-items: center;\\n    padding: 12.5px;\\n    border-left: 1px solid white;\\n    border-right: 1px solid white;\\n    border-bottom: 1px solid white;\\n}\\n\\n#home-hours .home-timeslot:nth-child(1) {\\n    border-top: 1px solid white;\\n}\\n\\n#menu-main {\\n    display: flex;\\n    flex-direction: column;\\n}\\n\\n.menu-item {\\n    display: flex;\\n    margin: 10px;\\n    padding: 10px 30px 10px 10px;\\n    background: rgb(71, 71, 71);\\n    border-radius: 10px;\\n    align-items: flex-start;\\n}\\n\\n.menu-pic {\\n    border: 3px solid rgb(200, 200, 200);\\n    border-radius: 10px;\\n    width: 25vh;\\n    height: auto;\\n    margin: 15px;\\n}\\n\\n.menu-info {\\n    display: flex;\\n    flex-direction: column;\\n    flex-grow: 1;\\n    font-family: 'Oswald';\\n    font-size: 1.5rem;\\n}\\n\\n.menu-header {\\n    display: flex;\\n    flex-direction:row;\\n    justify-content: space-between;\\n    font-family: 'Shippori';\\n    font-size: 1.25rem;\\n    border-bottom: 1px solid white;\\n}\\n\\n#contact-img {\\n    border: 3px solid rgb(200, 200, 200);\\n    border-radius: 10px;\\n    width: 45vh;\\n    height: auto;\\n}\\n\\n#contact-info-head {\\n    text-align: center;\\n    padding: 10px;\\n    width: 35vh;\\n    font-family: 'Oswald';\\n    align-self: center;\\n}\\n\\n#contact-info {\\n    display: flex;\\n    flex-direction: column;\\n    width: 40vh;\\n    font-family: 'Oswald';\\n    font-size: 1.25rem;\\n    background: rgb(47, 79, 49);\\n    border-radius: 10px;\\n    align-self: center;\\n    padding: 0px 15px;\\n}\\n\\n#contact-phone {\\n    border-bottom: 1px solid white;\\n}\\n\\n#contact-phone, #contact-email {\\n    display: flex;\\n    justify-content: space-between;\\n}\\n\\n#contact-locations-head {\\n    text-align: center;\\n    padding: 10px;\\n    width: 35vh;\\n    font-family: 'Oswald';\\n    align-self: center;\\n}\\n\\n#contact-locations {\\n    display: flex;\\n    flex-direction: column;\\n    padding: 10px;\\n    width: 35vh;\\n    font-family: 'Oswald';\\n    font-size: 1.5rem;\\n    background: rgb(47, 79, 49);\\n    border-radius: 10px;\\n    align-self: center;\\n}\\n\\n.contact-slot {\\n    display: flex;\\n    justify-content: space-between;\\n    align-items: center;\\n    padding: 12.5px;\\n    border-left: 1px solid white;\\n    border-right: 1px solid white;\\n    border-bottom: 1px solid white;\\n}\\n\\n#contact-locations .contact-slot:nth-child(1) {\\n    border-top: 1px solid white;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://odin-restaurant-page/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://odin-restaurant-page/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  }\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://odin-restaurant-page/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://odin-restaurant-page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/modern-normalize.css":
/*!**********************************!*\
  !*** ./src/modern-normalize.css ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_modern_normalize_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./modern-normalize.css */ \"./node_modules/css-loader/dist/cjs.js!./src/modern-normalize.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_modern_normalize_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_modern_normalize_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_modern_normalize_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_modern_normalize_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://odin-restaurant-page/./src/modern-normalize.css?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://odin-restaurant-page/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://odin-restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://odin-restaurant-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://odin-restaurant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://odin-restaurant-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://odin-restaurant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://odin-restaurant-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"contact\": () => (/* binding */ contact)\n/* harmony export */ });\n/* harmony import */ var _images_contact_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/contact.png */ \"./src/images/contact.png\");\n\n\nconst contact = () => {\n    //target content div\n    const content = document.getElementById('content');\n\n    //set any active tab to inactive\n    const currentActive = document.getElementsByClassName('active')[0];\n    currentActive.className = 'inactive';\n\n    //set contact tab to active\n    const contactBtn = document.getElementById('contact-btn');\n    contactBtn.className = 'active';\n\n    //create contact content\n    //create the contact main image\n    const img = new Image();\n    img.src = _images_contact_png__WEBPACK_IMPORTED_MODULE_0__;\n    img.id = 'contact-img';\n\n    //contact information\n    const contact = {'Phone':'+1-555-555-5555', 'Email':'CrowsCafeDiner@finalfantasyXV.com'}\n    const locations = ['Longwythe Rest Area', 'Coernix Station - Alstor', 'Cauthess Rest Area', 'Taelpar Rest Area', 'Old Lestallum']\n\n    //contact main info\n    const infoHead = document.createElement('h2');\n    infoHead.id = 'contact-info-head';\n    infoHead.textContent = 'We hope to see you soon!';\n\n    let info = document.createElement('div');\n    info.id = 'contact-info';\n\n    let phone = document.createElement('div');\n    phone.id = 'contact-phone';\n\n    let phoneText = document.createElement('h3');\n    phoneText.textContent = 'Call us at:';\n\n    let phoneNum = document.createElement('h3');\n    phoneNum.textContent = contact['Phone'];\n\n    phone.appendChild(phoneText);\n    phone.appendChild(phoneNum);\n\n    let email = document.createElement('div');\n    email.id = 'contact-email';\n\n    let emailText = document.createElement('h3');\n    emailText.textContent = 'Email:';\n\n    let emailAdd = document.createElement('h3');\n    emailAdd.textContent = contact['Email'];\n\n    email.appendChild(emailText);\n    email.appendChild(emailAdd);\n\n    info.appendChild(phone);\n    info.appendChild(email);\n\n    //create the slots for the locations\n    const locationsHead = document.createElement('h2');\n    locationsHead.id = 'contact-locations-head';\n    locationsHead.textContent = 'Our Locations:';\n\n    const locationsTable = document.createElement('div');\n    locationsTable.id = 'contact-locations';\n\n    for (let i = 0; i < locations.length; i++) {\n        let slot = document.createElement('div');\n        slot.className = 'contact-slot';\n        slot.textContent = locations[i]\n        locationsTable.appendChild(slot);\n    }\n\n    //wipe anything inside content div\n    content.innerHTML = '';\n\n    //add content of contact tab\n    content.appendChild(img);\n    content.appendChild(infoHead)\n    content.appendChild(info);\n    content.appendChild(locationsHead);\n    content.appendChild(locationsTable);\n}\n\n\n\n//# sourceURL=webpack://odin-restaurant-page/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"home\": () => (/* binding */ home)\n/* harmony export */ });\n/* harmony import */ var _images_KennyCrow_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/KennyCrow.png */ \"./src/images/KennyCrow.png\");\n\n\nconst home = () => {\n    //target content div\n    const content = document.getElementById('content');\n\n    //set any active tab to inactive\n    const currentActive = document.getElementsByClassName('active');\n    if (currentActive.length > 0) {\n        currentActive[0].className = 'inactive';\n    }\n\n    //set home tab to active\n    const homeBtn = document.getElementById('home-btn');\n    homeBtn.className = 'active';\n\n    //create home content\n    //create the home main image\n    const img = new Image();\n    img.src = _images_KennyCrow_png__WEBPACK_IMPORTED_MODULE_0__;\n    img.id = 'home-img';\n\n    //create the home main blurb\n    const info = document.createElement('p');\n    info.id = 'home-text';\n    info.textContent = \"CAW, kids, it's Kenny Crow! Come on down to the Crow's Nest for a mouthful of happiness! Fly down to the original Nest in Old Lestallum for a real treat! Nothin' tastes better than what we make together at the Crow's Nest! - Kenny Crow\";\n\n    //create the time slots for the hours\n    const hoursHead = document.createElement('h2');\n    hoursHead.id = 'home-hours-head';\n    hoursHead.textContent = 'HOURS OPEN:'\n\n    const hours = document.createElement('div');\n    hours.id = 'home-hours';\n    const weekdays = {'Sunday':'9:00 AM - 10:00 PM', \n                    'Monday':'CLOSED', \n                    'Tuesday':'8:00 AM - 9:00 PM', \n                    'Wednesday':'8:00 AM - 9:00 PM', \n                    'Thursday':'8:00 AM - 9:00 PM', \n                    'Friday':'8:00 AM - 9:00 PM', \n                    'Saturday':'9:00 AM - 10:00 PM'};\n\n    for (let i = 0; i < Object.keys(weekdays).length; i++) {\n        let timeslot = document.createElement('div');\n        timeslot.className = 'home-timeslot';\n        timeslot.innerHTML = '';\n\n        let day = document.createElement('div');\n        day.textContent = Object.keys(weekdays)[i];\n\n        let time = document.createElement('div');\n        time.textContent = Object.values(weekdays)[i];\n\n        timeslot.appendChild(day);\n        timeslot.appendChild(time);\n        hours.appendChild(timeslot);\n    }\n\n    //wipe anything inside content div\n    content.innerHTML = '';\n\n    //add content of home tab\n    content.appendChild(img);\n    content.appendChild(info);\n    content.appendChild(hoursHead);\n    content.appendChild(hours);\n}\n\n\n\n//# sourceURL=webpack://odin-restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/images/menu sync \\.(png|jpe?g|svg)$":
/*!***************************************************************!*\
  !*** ./src/images/menu/ sync nonrecursive \.(png|jpe?g|svg)$ ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var map = {\n\t\"./101 cup noodles.png\": \"./src/images/menu/101 cup noodles.png\",\n\t\"./102 cup noodles with beef.png\": \"./src/images/menu/102 cup noodles with beef.png\",\n\t\"./103 cup noodles with egg.png\": \"./src/images/menu/103 cup noodles with egg.png\",\n\t\"./104 cup noodles with shrimp.png\": \"./src/images/menu/104 cup noodles with shrimp.png\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./src/images/menu sync \\\\.(png|jpe?g|svg)$\";\n\n//# sourceURL=webpack://odin-restaurant-page/./src/images/menu/_sync_nonrecursive_\\.(png%7Cjpe?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modern_normalize_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modern-normalize.css */ \"./src/modern-normalize.css\");\n/* harmony import */ var _init__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./init */ \"./src/init.js\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n\n\n\n\n\n\n\n//main function that loads the website and initializes all the needed DOM elements\n//initialize website and set starting page to home\n(0,_init__WEBPACK_IMPORTED_MODULE_2__.initialize)();\n(0,_home__WEBPACK_IMPORTED_MODULE_3__.home)();\n\n//cache DOM elements\nconst btnHome = document.querySelector('#home-btn');\nconst btnMenu = document.querySelector('#menu-btn')\nconst btnContact = document.querySelector('#contact-btn');\n\n//create event listeners for the nav menu\nbtnHome.addEventListener('click', _home__WEBPACK_IMPORTED_MODULE_3__.home);\nbtnMenu.addEventListener('click', _menu__WEBPACK_IMPORTED_MODULE_4__.menu);\nbtnContact.addEventListener('click', _contact__WEBPACK_IMPORTED_MODULE_5__.contact);\n\n//# sourceURL=webpack://odin-restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/init.js":
/*!*********************!*\
  !*** ./src/init.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"initialize\": () => (/* binding */ initialize)\n/* harmony export */ });\n//Init module to establish general page structure sans content\nconst initialize = () => {\n    //target the body\n    const body = document.body;\n\n    //create the header\n    const header = document.createElement('div');\n    header.id = 'header';\n    header.textContent = \"Crow's Nest Diner\"\n    body.appendChild(header)\n\n    //create the nav\n    const nav = document.createElement('div');\n    nav.id = 'nav';\n    \n    const home = document.createElement('div');\n    home.id = 'home-btn'\n    home.textContent = 'Home';\n    home.className = 'inactive'\n\n    const menu = document.createElement('div');\n    menu.id = 'menu-btn'\n    menu.textContent = 'Menu';\n    menu.className = 'inactive'\n\n    const contact = document.createElement('div');\n    contact.id = 'contact-btn'\n    contact.textContent = 'Contact';\n    contact.className = 'inactive'\n\n    nav.appendChild(home);\n    nav.appendChild(menu);\n    nav.appendChild(contact);\n    body.appendChild(nav);\n\n    //create the content\n    const content = document.createElement('div')\n    content.id = 'content';\n    body.appendChild(content);\n\n    //create the footer\n    const footer = document.createElement('div');\n    footer.id = 'footer';\n    footer.textContent = \"Copyright 2021 Cam Nguyen\"\n    body.appendChild(footer);\n}\n\n\n\n//# sourceURL=webpack://odin-restaurant-page/./src/init.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"menu\": () => (/* binding */ menu)\n/* harmony export */ });\n/* harmony import */ var _menu_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu.json */ \"./src/menu.json\");\n\n\nfunction importAll(r) {\n    let images = {};\n    r.keys().map((item, index) => { images[item.replace('./images/menu', '')] = r(item); });\n    return images;\n}\n  \nconst images = importAll(__webpack_require__(\"./src/images/menu sync \\\\.(png|jpe?g|svg)$\"));\n\nconst menu = () => {\n    //target content div\n    const content = document.getElementById('content');\n\n    //set any active tab to inactive\n    const currentActive = document.getElementsByClassName('active')[0];\n    currentActive.className = 'inactive';\n\n    //set menu tab to active\n    const menuBtn = document.getElementById('menu-btn');\n    menuBtn.className = 'active';\n\n    //create menu content\n    const mainMenu = document.createElement('div');\n    mainMenu.id = 'menu-main';\n\n    for (let i = 0; i < Object.keys(_menu_json__WEBPACK_IMPORTED_MODULE_0__).length; i++) {\n        let item = document.createElement('div');\n        item.className = 'menu-item';\n        item.innerHTML = '';\n\n        let picture = new Image();\n        picture.src = images[_menu_json__WEBPACK_IMPORTED_MODULE_0__[i]['img']]\n        picture.className = 'menu-pic'\n\n        let info = document.createElement('div');\n        info.className = 'menu-info';\n\n        let header = document.createElement('div');\n        header.className = 'menu-header';\n\n        let name = document.createElement('h3');\n        name.textContent = _menu_json__WEBPACK_IMPORTED_MODULE_0__[i]['name'];\n\n        let price = document.createElement('h3');\n        price.textContent = _menu_json__WEBPACK_IMPORTED_MODULE_0__[i]['price'];\n\n        let description = document.createElement('p');\n        description.textContent = _menu_json__WEBPACK_IMPORTED_MODULE_0__[i]['description'];\n\n        header.appendChild(name);\n        header.appendChild(price);\n        info.append(header);\n        info.append(description);\n        item.appendChild(picture);\n        item.appendChild(info);\n        mainMenu.appendChild(item);\n    }\n\n    //wipe anything inside content div\n    content.innerHTML = '';\n\n    //add menu into content\n    content.appendChild(mainMenu);\n}\n\n\n\n\n\n//# sourceURL=webpack://odin-restaurant-page/./src/menu.js?");

/***/ }),

/***/ "./src/fonts/Oswald-VariableFont_wght.ttf":
/*!************************************************!*\
  !*** ./src/fonts/Oswald-VariableFont_wght.ttf ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"7aae63364e12a102a22a.ttf\";\n\n//# sourceURL=webpack://odin-restaurant-page/./src/fonts/Oswald-VariableFont_wght.ttf?");

/***/ }),

/***/ "./src/fonts/Philosopher-Regular.ttf":
/*!*******************************************!*\
  !*** ./src/fonts/Philosopher-Regular.ttf ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"3ea80e6e1a9fcd74977c.ttf\";\n\n//# sourceURL=webpack://odin-restaurant-page/./src/fonts/Philosopher-Regular.ttf?");

/***/ }),

/***/ "./src/fonts/ShipporiAntique-Regular.ttf":
/*!***********************************************!*\
  !*** ./src/fonts/ShipporiAntique-Regular.ttf ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"3d7d770808b9aa83a32d.ttf\";\n\n//# sourceURL=webpack://odin-restaurant-page/./src/fonts/ShipporiAntique-Regular.ttf?");

/***/ }),

/***/ "./src/images/KennyCrow.png":
/*!**********************************!*\
  !*** ./src/images/KennyCrow.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"280fdaf6733c815536e4.png\";\n\n//# sourceURL=webpack://odin-restaurant-page/./src/images/KennyCrow.png?");

/***/ }),

/***/ "./src/images/background.jpeg":
/*!************************************!*\
  !*** ./src/images/background.jpeg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"e31213a11908071fb854.jpeg\";\n\n//# sourceURL=webpack://odin-restaurant-page/./src/images/background.jpeg?");

/***/ }),

/***/ "./src/images/contact.png":
/*!********************************!*\
  !*** ./src/images/contact.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"c5b82246449e43013c43.png\";\n\n//# sourceURL=webpack://odin-restaurant-page/./src/images/contact.png?");

/***/ }),

/***/ "./src/images/menu/101 cup noodles.png":
/*!*********************************************!*\
  !*** ./src/images/menu/101 cup noodles.png ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"31e9faafa7c954869bdc.png\";\n\n//# sourceURL=webpack://odin-restaurant-page/./src/images/menu/101_cup_noodles.png?");

/***/ }),

/***/ "./src/images/menu/102 cup noodles with beef.png":
/*!*******************************************************!*\
  !*** ./src/images/menu/102 cup noodles with beef.png ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"153058447c1912325e0a.png\";\n\n//# sourceURL=webpack://odin-restaurant-page/./src/images/menu/102_cup_noodles_with_beef.png?");

/***/ }),

/***/ "./src/images/menu/103 cup noodles with egg.png":
/*!******************************************************!*\
  !*** ./src/images/menu/103 cup noodles with egg.png ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"8ddbb92e94ce34608348.png\";\n\n//# sourceURL=webpack://odin-restaurant-page/./src/images/menu/103_cup_noodles_with_egg.png?");

/***/ }),

/***/ "./src/images/menu/104 cup noodles with shrimp.png":
/*!*********************************************************!*\
  !*** ./src/images/menu/104 cup noodles with shrimp.png ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"63dfbd00eeb5d757f4ef.png\";\n\n//# sourceURL=webpack://odin-restaurant-page/./src/images/menu/104_cup_noodles_with_shrimp.png?");

/***/ }),

/***/ "./src/menu.json":
/*!***********************!*\
  !*** ./src/menu.json ***!
  \***********************/
/***/ ((module) => {

"use strict";
eval("module.exports = JSON.parse('{\"0\":{\"name\":\"Cup Noodles\",\"description\":\"The college classic.\",\"price\":\"$3.00\",\"img\":\"./101 cup noodles.png\"},\"1\":{\"name\":\"Cup Noodles with Beef\",\"description\":\"The college classic with protein for the aspiring body builder.\",\"price\":\"$5.00\",\"img\":\"./102 cup noodles with beef.png\"},\"2\":{\"name\":\"Cup Noodles with Egg\",\"description\":\"The college classic, elevated.\",\"price\":\"$4.00\",\"img\":\"./103 cup noodles with egg.png\"},\"3\":{\"name\":\"Cup Noodles with Shrimp\",\"description\":\"The pescetarian college classic.\",\"price\":\"$5.00\",\"img\":\"./104 cup noodles with shrimp.png\"}}');\n\n//# sourceURL=webpack://odin-restaurant-page/./src/menu.json?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;