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

/***/ "./src/global/index.js":
/*!*****************************!*\
  !*** ./src/global/index.js ***!
  \*****************************/
/***/ (() => {

eval("// add resMode attributes to all blocks\r\nwp.hooks.addFilter(\r\n\t'blocks.registerBlockType',\r\n\t'bdt/attribute/resMode',\r\n\tfunction (settings, name) {\r\n\t\tif (name.includes('bdt/')) {\r\n\t\t\tsettings.attributes = {\r\n\t\t\t\t...settings.attributes,\r\n\t\t\t\tresMode: {\r\n\t\t\t\t\ttype: 'string',\r\n\t\t\t\t\tdefault: 'Desktop',\r\n\t\t\t\t},\r\n\t\t\t};\r\n\t\t}\r\n\t\treturn settings;\r\n\t}\r\n);\r\n\n\n//# sourceURL=webpack://gutenberg-boilerplate/./src/global/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/global/index.js"]();
/******/ 	
/******/ })()
;