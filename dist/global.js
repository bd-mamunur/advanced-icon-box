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

eval("// add resMode attributes to all blocks\nwp.hooks.addFilter(\n\t'blocks.registerBlockType',\n\t'bdt/attribute/resMode',\n\tfunction (settings, name) {\n\t\tif (name.includes('bdt/')) {\n\t\t\tsettings.attributes = {\n\t\t\t\t...settings.attributes,\n\t\t\t\tresMode: {\n\t\t\t\t\ttype: 'string',\n\t\t\t\t\tdefault: 'Desktop',\n\t\t\t\t},\n\t\t\t};\n\t\t}\n\t\treturn settings;\n\t}\n);\n\n\n//# sourceURL=webpack://gutenberg-boilerplate/./src/global/index.js?");

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