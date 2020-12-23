/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function(e, a) { for(var i in a) e[i] = a[i]; if(a.__esModule) Object.defineProperty(e, "__esModule", { value: true }); }(exports,
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.esm.ts":
/*!**************************!*\
  !*** ./src/index.esm.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Cart\": () => /* binding */ Cart,\n/* harmony export */   \"addItem\": () => /* reexport safe */ _lib_functions__WEBPACK_IMPORTED_MODULE_0__.addItem,\n/* harmony export */   \"getState\": () => /* reexport safe */ _lib_functions__WEBPACK_IMPORTED_MODULE_0__.getState,\n/* harmony export */   \"addItemFromForm\": () => /* reexport safe */ _lib_functions__WEBPACK_IMPORTED_MODULE_0__.addItemFromForm,\n/* harmony export */   \"clearItems\": () => /* reexport safe */ _lib_functions__WEBPACK_IMPORTED_MODULE_0__.clearItems,\n/* harmony export */   \"removeItem\": () => /* reexport safe */ _lib_functions__WEBPACK_IMPORTED_MODULE_0__.removeItem,\n/* harmony export */   \"updateAttributes\": () => /* reexport safe */ _lib_functions__WEBPACK_IMPORTED_MODULE_0__.updateAttributes,\n/* harmony export */   \"updateItem\": () => /* reexport safe */ _lib_functions__WEBPACK_IMPORTED_MODULE_0__.updateItem,\n/* harmony export */   \"updateItemById\": () => /* reexport safe */ _lib_functions__WEBPACK_IMPORTED_MODULE_0__.updateItemById,\n/* harmony export */   \"getAttributes\": () => /* reexport safe */ _lib_functions__WEBPACK_IMPORTED_MODULE_0__.getAttributes,\n/* harmony export */   \"clearAttributes\": () => /* reexport safe */ _lib_functions__WEBPACK_IMPORTED_MODULE_0__.clearAttributes,\n/* harmony export */   \"getNote\": () => /* reexport safe */ _lib_functions__WEBPACK_IMPORTED_MODULE_0__.getNote,\n/* harmony export */   \"updateNote\": () => /* reexport safe */ _lib_functions__WEBPACK_IMPORTED_MODULE_0__.updateNote,\n/* harmony export */   \"clearNote\": () => /* reexport safe */ _lib_functions__WEBPACK_IMPORTED_MODULE_0__.clearNote\n/* harmony export */ });\n/* harmony import */ var _lib_functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/functions */ \"./src/lib/functions.ts\");\n\n/**\n * Cart API\n * ------------------------------------------------------------------------------\n * The Cart class with all methods. You can also import the functions individually\n *\n * @example\n * import Cart from '@hayes0724/shopify-cart-fetch';\n * const shopifyCart = new Cart();\n * shopifyCart.getState().then(state => console.log(state))\n * @example\n * import {getState, removeItem, updateItem, addItem, clearItems} from '@hayes0724/shopify-cart-fetch'\n * getState().then(state => console.log(state))\n *\n */\nclass Cart {\n    constructor() {\n        this.getState = _lib_functions__WEBPACK_IMPORTED_MODULE_0__.getState;\n        this.addItem = _lib_functions__WEBPACK_IMPORTED_MODULE_0__.addItem;\n        this.addItemFromForm = _lib_functions__WEBPACK_IMPORTED_MODULE_0__.addItemFromForm;\n        this.clearItems = _lib_functions__WEBPACK_IMPORTED_MODULE_0__.clearItems;\n        this.removeItem = _lib_functions__WEBPACK_IMPORTED_MODULE_0__.removeItem;\n        this.updateItem = _lib_functions__WEBPACK_IMPORTED_MODULE_0__.updateItem;\n        this.updateItemById = _lib_functions__WEBPACK_IMPORTED_MODULE_0__.updateItemById;\n        this.getAttributes = _lib_functions__WEBPACK_IMPORTED_MODULE_0__.getAttributes;\n        this.updateAttributes = _lib_functions__WEBPACK_IMPORTED_MODULE_0__.updateAttributes;\n        this.clearAttributes = _lib_functions__WEBPACK_IMPORTED_MODULE_0__.clearAttributes;\n        this.getNote = _lib_functions__WEBPACK_IMPORTED_MODULE_0__.getNote;\n        this.updateNote = _lib_functions__WEBPACK_IMPORTED_MODULE_0__.updateNote;\n        this.clearNote = _lib_functions__WEBPACK_IMPORTED_MODULE_0__.clearNote;\n    }\n}\n\n\n\n//# sourceURL=webpack://@hayes0724/shopify-cart-fetch/./src/index.esm.ts?");

/***/ }),

/***/ "./src/lib/api.ts":
/*!************************!*\
  !*** ./src/lib/api.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"post\": () => /* binding */ post\n/* harmony export */ });\n/**\n * Cart API helper methods\n * ------------------------------------------------------------------------------\n * Reusable code for cart API methods\n *\n */\n/**\n * Creates the default config for post requests\n * @return {JSON}\n */\nfunction defaultRequestConfig() {\n    return JSON.parse(JSON.stringify({\n        method: \"POST\",\n        credentials: 'same-origin',\n        headers: {\n            'X-Requested-With': 'XMLHttpRequest',\n            'Content-Type': 'application/json;'\n        }\n    }));\n}\n/**\n * The default method for fetching JSON\n * @param {string} route\n * @param {Data?} data\n * @return {Promise<Return>}\n */\nasync function post(route, data) {\n    const config = {\n        ...defaultRequestConfig()\n    };\n    if (data) {\n        config.body = JSON.stringify(data);\n    }\n    return await fetch(route, { ...config })\n        .then((response) => response.json())\n        .then((json) => json);\n}\n\n\n\n//# sourceURL=webpack://@hayes0724/shopify-cart-fetch/./src/lib/api.ts?");

/***/ }),

/***/ "./src/lib/functions.ts":
/*!******************************!*\
  !*** ./src/lib/functions.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getState\": () => /* binding */ getState,\n/* harmony export */   \"addItem\": () => /* binding */ addItem,\n/* harmony export */   \"addItemFromForm\": () => /* binding */ addItemFromForm,\n/* harmony export */   \"clearItems\": () => /* binding */ clearItems,\n/* harmony export */   \"updateItem\": () => /* binding */ updateItem,\n/* harmony export */   \"updateItemById\": () => /* binding */ updateItemById,\n/* harmony export */   \"removeItem\": () => /* binding */ removeItem,\n/* harmony export */   \"getAttributes\": () => /* binding */ getAttributes,\n/* harmony export */   \"updateAttributes\": () => /* binding */ updateAttributes,\n/* harmony export */   \"clearAttributes\": () => /* binding */ clearAttributes,\n/* harmony export */   \"getNote\": () => /* binding */ getNote,\n/* harmony export */   \"updateNote\": () => /* binding */ updateNote,\n/* harmony export */   \"clearNote\": () => /* binding */ clearNote\n/* harmony export */ });\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api */ \"./src/lib/api.ts\");\n\n/**\n * Use the GET /cart.js endpoint to get the cart as JSON.\n * @see {@link https://shopify.dev/docs/themes/ajax-api/reference/cart#get-cart-js | ShopifyAPI: GET /cart.js }\n * @return {Promise<CartState>}\n */\nasync function getState() {\n    return await fetch(\"/cart.js\")\n        .then((response) => response.json())\n        .then((json) => json);\n}\n/**\n * Use the POST /cart/add.js endpoint to add product to cart.\n * @typedef {function} addItem\n * @see {@link https://shopify.dev/docs/themes/ajax-api/reference/cart#post-cart-add-js | ShopifyAPI: POST /cart/add.js}\n * @param {CartItemAdd} items\n * @return {Promise<CartLineItem>}\n */\nasync function addItem(items) {\n    return await (0,_api__WEBPACK_IMPORTED_MODULE_0__.post)(\"/cart/add.js\", items);\n}\n/**\n * Adds an item to your cart from a product form. The form must contain an input with name=\"id\".\n * If the quantity specified is more than what is available, the promise will be rejected and the cart state will remain unchanged\n * @param {HTMLFormElement} productForm\n * @return {Promise<CartLineItem>}\n * @see {@link https://shopify.dev/docs/themes/ajax-api/reference/cart#post-cart-add-js | ShopifyAPI: POST /cart/add.js}\n */\nasync function addItemFromForm(productForm) {\n    const formData = new FormData(productForm);\n    if (!formData.get(\"id\")) {\n        throw \"Cart form missing required property ID\";\n    }\n    return await (0,_api__WEBPACK_IMPORTED_MODULE_0__.post)(\"/cart/add.js\", formData);\n}\n/**\n * Use the POST /cart/clear.js endpoint to set all quantities of all line items in the cart to zero.\n * @see {@link https://shopify.dev/docs/themes/ajax-api/reference/cart#post-cart-clear-js | ShopifyAPI: POST /cart/clear.js}\n * @return {Promise<CartState>}\n */\nasync function clearItems() {\n    return await (0,_api__WEBPACK_IMPORTED_MODULE_0__.post)(\"/cart/clear.js\");\n}\n/**\n * The /cart/change.js endpoint changes the quantity and properties object of a cart line item.\n * Only items already in your cart can be changed, and only one line item at a time can be changed.\n * @see {@link https://shopify.dev/docs/themes/ajax-api/reference/cart#post-cart-change-js | ShopifyAPI: POST /cart/change.js }\n * @param {CartItemUpdate} item\n * @return {Promise<CartState>}\n */\nasync function updateItem(item) {\n    return await (0,_api__WEBPACK_IMPORTED_MODULE_0__.post)(\"/cart/change.js\", item);\n}\n/**\n * The /cart/change.js endpoint changes the quantity.\n * Only items already in your cart can be changed, and only one line item at a time can be changed.\n * @see {@link https://shopify.dev/docs/themes/ajax-api/reference/cart#post-cart-change-js | ShopifyAPI: POST /cart/change.js }\n * @param {CartItemUpdateById} item\n * @return {Promise<CartState>}\n */\nasync function updateItemById(item) {\n    return await (0,_api__WEBPACK_IMPORTED_MODULE_0__.post)(\"/cart/change.js\", item);\n}\n/**\n * Removes an item from the cart using line item key or product id. Returns a promise which fulfills with the updated cart state.\n * @param {CartItemRemove} item\n * @see {@link https://shopify.dev/docs/themes/ajax-api/reference/cart#post-cart-change-js | ShopifyAPI: POST /cart/change.js }\n * @see {@link https://shopify.dev/docs/themes/liquid/reference/objects/line_item#line_item-key | ShopifyAPI: LineItemKey }\n * @return {Promise<CartState>}\n */\nasync function removeItem(item) {\n    return await (0,_api__WEBPACK_IMPORTED_MODULE_0__.post)(\"/cart/change.js\", { quantity: 0, ...item });\n}\n/**\n * Get the current cart state from Shopify and return the attributes\n * @return {Promise<CartState[\"attributes\"]>}\n * @see {@link https://shopify.dev/docs/themes/liquid/reference/objects/cart#cart-attributes | ShopifyAPI: cart-attributes }\n */\nasync function getAttributes() {\n    return getState().then((state) => state.attributes);\n}\n/**\n * Update cart attributes from Shopify and return the state\n * @param {Attributes} attributes\n * @return {Promise<CartState>}\n * @see {@link https://shopify.dev/docs/themes/liquid/reference/objects/cart#cart-attributes | ShopifyAPI: cart-attributes }\n */\nasync function updateAttributes(attributes) {\n    return await (0,_api__WEBPACK_IMPORTED_MODULE_0__.post)(\"/cart/update.js\", { attributes: { ...attributes } });\n}\n/**\n * Clear all cart attributes from Shopify and return the state\n * @return {Promise<CartState>}\n * @see {@link https://shopify.dev/docs/themes/liquid/reference/objects/cart#cart-attributes | ShopifyAPI: cart-attributes }\n */\nasync function clearAttributes() {\n    return getState()\n        .then((state) => state.attributes)\n        .then((attributes) => {\n        const clearList = {};\n        Object.getOwnPropertyNames(attributes).forEach((prop) => (clearList[prop] = \"\"));\n        return clearList;\n    })\n        .then((clearList) => (0,_api__WEBPACK_IMPORTED_MODULE_0__.post)(\"/cart/update.js\", { attributes: clearList }));\n}\n/**\n * Get the current cart state from Shopify and return the note\n * @return {Promise<CartState[\"note\"]>}\n * @see {@link https://shopify.dev/docs/themes/liquid/reference/objects/cart#cart-note | ShopifyAPI: cart.note }\n */\nasync function getNote() {\n    return getState().then((state) => state.note);\n}\n/**\n * Update or create the cart note\n * @param {string} note\n * @return {Promise<CartState>}\n * @see {@link https://shopify.dev/docs/themes/liquid/reference/objects/cart#cart-note | ShopifyAPI: cart.note }\n */\nasync function updateNote(note) {\n    return await (0,_api__WEBPACK_IMPORTED_MODULE_0__.post)(\"/cart/update.js\", { note: note });\n}\n/**\n * Remove the cart note\n * @return {Promise<CartState>}\n * @see {@link https://shopify.dev/docs/themes/liquid/reference/objects/cart#cart-note | ShopifyAPI: cart.note }\n */\nasync function clearNote() {\n    return await (0,_api__WEBPACK_IMPORTED_MODULE_0__.post)(\"/cart/update.js\", { note: \"\" });\n}\n\n\n//# sourceURL=webpack://@hayes0724/shopify-cart-fetch/./src/lib/functions.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
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
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/************************************************************************/
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__("./src/index.esm.ts");
/******/ })()

));