"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkecomm_levity"] = self["webpackChunkecomm_levity"] || []).push([["scripts_Components_ProductRecommendation_js"],{

/***/ "./scripts/Components/ProductRecommendation.js":
/*!*****************************************************!*\
  !*** ./scripts/Components/ProductRecommendation.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.find.js */ \"./node_modules/core-js/modules/es.array.find.js\");\n/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ \"./node_modules/core-js/modules/es.array.map.js\");\n/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ \"./node_modules/core-js/modules/es.array.is-array.js\");\n/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ \"./node_modules/core-js/modules/es.symbol.js\");\n/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ \"./node_modules/core-js/modules/es.symbol.description.js\");\n/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ \"./node_modules/core-js/modules/es.object.to-string.js\");\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ \"./node_modules/core-js/modules/es.symbol.iterator.js\");\n/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ \"./node_modules/core-js/modules/es.array.iterator.js\");\n/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ \"./node_modules/core-js/modules/es.string.iterator.js\");\n/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ \"./node_modules/core-js/modules/web.dom-collections.iterator.js\");\n/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ \"./node_modules/core-js/modules/es.array.slice.js\");\n/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ \"./node_modules/core-js/modules/es.function.name.js\");\n/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ \"./node_modules/core-js/modules/es.array.from.js\");\n/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.promise.js */ \"./node_modules/core-js/modules/es.promise.js\");\n/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ \"./node_modules/core-js/modules/es.object.define-property.js\");\n/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_14__);\n/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ \"./node_modules/core-js/modules/es.object.keys.js\");\n/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_15__);\n/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ \"./node_modules/core-js/modules/es.array.filter.js\");\n/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_16__);\n/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ \"./node_modules/core-js/modules/es.object.get-own-property-descriptor.js\");\n/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_17__);\n/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ \"./node_modules/core-js/modules/es.array.for-each.js\");\n/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_18__);\n/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ \"./node_modules/core-js/modules/web.dom-collections.for-each.js\");\n/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_19__);\n/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors.js */ \"./node_modules/core-js/modules/es.object.get-own-property-descriptors.js\");\n/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_20__);\n/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.object.define-properties.js */ \"./node_modules/core-js/modules/es.object.define-properties.js\");\n/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_21__);\n/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ \"./node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_22__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_24__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../utils */ \"./scripts/utils/index.js\");\n/* harmony import */ var _PLPItem__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./PLPItem */ \"./scripts/Components/PLPItem.js\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\n\n\nvar ProductRecommendation = function ProductRecommendation(_ref) {\n  var product = _ref.product,\n      title = _ref.title;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_23__.useState)([]),\n      _useState2 = _slicedToArray(_useState, 2),\n      recommendations = _useState2[0],\n      setRecommendations = _useState2[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_23__.useEffect)(function () {\n    var fetchData = /*#__PURE__*/function () {\n      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {\n        var response;\n        return regeneratorRuntime.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.prev = 0;\n                _context.next = 3;\n                return (0,_utils__WEBPACK_IMPORTED_MODULE_25__.fetchRecommendations)(product === null || product === void 0 ? void 0 : product.id);\n\n              case 3:\n                response = _context.sent;\n                setRecommendations(response);\n                _context.next = 10;\n                break;\n\n              case 7:\n                _context.prev = 7;\n                _context.t0 = _context[\"catch\"](0);\n                console.log(_context.t0.message);\n\n              case 10:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee, null, [[0, 7]]);\n      }));\n\n      return function fetchData() {\n        return _ref2.apply(this, arguments);\n      };\n    }();\n\n    fetchData();\n  }, [product.id]);\n\n  var getVariant = function getVariant(recommendation) {\n    var productVariant = recommendation.variants.find(function (variant) {\n      return variant.option1.toLowerCase() === recommendation.colors[0];\n    });\n    return productVariant;\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_23__.createElement(ProductRecommendationContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_23__.createElement(\"h2\", {\n    className: \"font-normal text-center font-serif mb-1 md:pb-5 md:text-2xl md:text-base\"\n  }, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_23__.createElement(\"div\", {\n    className: \"grid grid-cols-1 overflow-hidden md:justify-items-center\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_23__.createElement(RecommendationContainer, {\n    recommendations: recommendations\n  }, recommendations.map(function (recommendation) {\n    var newProduct = _objectSpread(_objectSpread({}, recommendation), {}, {\n      variant: getVariant(recommendation)\n    });\n\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_23__.createElement(_PLPItem__WEBPACK_IMPORTED_MODULE_26__.default, {\n      key: recommendation.id,\n      product: newProduct,\n      colors: recommendation.colors\n    });\n  }))));\n};\n\nvar ProductRecommendationContainer = styled_components__WEBPACK_IMPORTED_MODULE_27__.default.div.attrs({\n  className: 'px-2 py-8 mb-8 md:px-0 md:py-10 md:text-center'\n}).withConfig({\n  displayName: \"ProductRecommendation__ProductRecommendationContainer\",\n  componentId: \"sc-1bfw787-0\"\n})([\"@media (min-width:740px){margin-right:-8%;margin-left:-8%;}\"]);\nvar RecommendationContainer = styled_components__WEBPACK_IMPORTED_MODULE_27__.default.div.attrs(function (_ref3) {\n  var recommendations = _ref3.recommendations;\n  return {\n    className: \"grid grid-col-1 justify-items-center md:justify-items-start md:grid-cols-2 xl:grid-cols-\".concat(recommendations.length, \" gap-2 md:w-10/12 max-w-screen-xxl\")\n  };\n}).withConfig({\n  displayName: \"ProductRecommendation__RecommendationContainer\",\n  componentId: \"sc-1bfw787-1\"\n})([\"\"]);\nProductRecommendation.defaultProps = {\n  product: {},\n  title: ''\n};\nProductRecommendation.propTypes = {\n  product: prop_types__WEBPACK_IMPORTED_MODULE_24___default().shape({\n    id: (prop_types__WEBPACK_IMPORTED_MODULE_24___default().number)\n  }),\n  title: (prop_types__WEBPACK_IMPORTED_MODULE_24___default().string)\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductRecommendation);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zY3JpcHRzL0NvbXBvbmVudHMvUHJvZHVjdFJlY29tbWVuZGF0aW9uLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBRUEsSUFBTU8scUJBQXFCLEdBQUcsU0FBeEJBLHFCQUF3QixPQUF3QjtBQUFBLE1BQXJCQyxPQUFxQixRQUFyQkEsT0FBcUI7QUFBQSxNQUFaQyxLQUFZLFFBQVpBLEtBQVk7O0FBQ3BELGtCQUE4Q1AsZ0RBQVEsQ0FBQyxFQUFELENBQXREO0FBQUE7QUFBQSxNQUFPUSxlQUFQO0FBQUEsTUFBd0JDLGtCQUF4Qjs7QUFFQVYsRUFBQUEsaURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBTVcsU0FBUztBQUFBLDBFQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFFU1AsNkRBQW9CLENBQUNHLE9BQUQsYUFBQ0EsT0FBRCx1QkFBQ0EsT0FBTyxDQUFFSyxFQUFWLENBRjdCOztBQUFBO0FBRVJDLGdCQUFBQSxRQUZRO0FBSWRILGdCQUFBQSxrQkFBa0IsQ0FBQ0csUUFBRCxDQUFsQjtBQUpjO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBTWRDLGdCQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxZQUFJQyxPQUFoQjs7QUFOYztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFIOztBQUFBLHNCQUFUTCxTQUFTO0FBQUE7QUFBQTtBQUFBLE9BQWY7O0FBVUFBLElBQUFBLFNBQVM7QUFDVixHQVpRLEVBWU4sQ0FBQ0osT0FBTyxDQUFDSyxFQUFULENBWk0sQ0FBVDs7QUFjQSxNQUFNSyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDQyxjQUFELEVBQW9CO0FBQ3JDLFFBQU1DLGNBQWMsR0FBR0QsY0FBYyxDQUFDRSxRQUFmLENBQXdCQyxJQUF4QixDQUNyQixVQUFDQyxPQUFEO0FBQUEsYUFBYUEsT0FBTyxDQUFDQyxPQUFSLENBQWdCQyxXQUFoQixPQUFrQ04sY0FBYyxDQUFDTyxNQUFmLENBQXNCLENBQXRCLENBQS9DO0FBQUEsS0FEcUIsQ0FBdkI7QUFJQSxXQUFPTixjQUFQO0FBQ0QsR0FORDs7QUFRQSxzQkFDRSxrREFBQyw4QkFBRCxxQkFDRTtBQUFJLGFBQVMsRUFBQztBQUFkLEtBQ0dYLEtBREgsQ0FERixlQUlFO0FBQUssYUFBUyxFQUFDO0FBQWYsa0JBQ0Usa0RBQUMsdUJBQUQ7QUFBeUIsbUJBQWUsRUFBRUM7QUFBMUMsS0FDR0EsZUFBZSxDQUFDaUIsR0FBaEIsQ0FBb0IsVUFBQ1IsY0FBRCxFQUFvQjtBQUN2QyxRQUFNUyxVQUFVLG1DQUFRVCxjQUFSO0FBQXdCSSxNQUFBQSxPQUFPLEVBQUVMLFVBQVUsQ0FBQ0MsY0FBRDtBQUEzQyxNQUFoQjs7QUFDQSx3QkFDRSxrREFBQyw4Q0FBRDtBQUNFLFNBQUcsRUFBRUEsY0FBYyxDQUFDTixFQUR0QjtBQUVFLGFBQU8sRUFBRWUsVUFGWDtBQUdFLFlBQU0sRUFBRVQsY0FBYyxDQUFDTztBQUh6QixNQURGO0FBT0QsR0FUQSxDQURILENBREYsQ0FKRixDQURGO0FBcUJELENBOUNEOztBQWdEQSxJQUFNRyw4QkFBOEIsR0FBR3pCLGlFQUFBLENBQWlCO0FBQ3RENEIsRUFBQUEsU0FBUyxFQUFFO0FBRDJDLENBQWpCLENBQUg7QUFBQTtBQUFBO0FBQUEsbUVBQXBDO0FBU0EsSUFBTUMsdUJBQXVCLEdBQUc3QixpRUFBQSxDQUFpQjtBQUFBLE1BQUdNLGVBQUgsU0FBR0EsZUFBSDtBQUFBLFNBQTBCO0FBQ3pFc0IsSUFBQUEsU0FBUyxvR0FBNkZ0QixlQUFlLENBQUN3QixNQUE3RztBQURnRSxHQUExQjtBQUFBLENBQWpCLENBQUg7QUFBQTtBQUFBO0FBQUEsUUFBN0I7QUFJQTNCLHFCQUFxQixDQUFDNEIsWUFBdEIsR0FBcUM7QUFDbkMzQixFQUFBQSxPQUFPLEVBQUUsRUFEMEI7QUFFbkNDLEVBQUFBLEtBQUssRUFBRTtBQUY0QixDQUFyQztBQUtBRixxQkFBcUIsQ0FBQzZCLFNBQXRCLEdBQWtDO0FBQ2hDNUIsRUFBQUEsT0FBTyxFQUFFTCx3REFBQSxDQUFnQjtBQUN2QlUsSUFBQUEsRUFBRSxFQUFFViwyREFBZ0JtQztBQURHLEdBQWhCLENBRHVCO0FBSWhDN0IsRUFBQUEsS0FBSyxFQUFFTiwyREFBZ0JvQztBQUpTLENBQWxDO0FBT0EsaUVBQWVoQyxxQkFBZixFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZWNvbW0tbGV2aXR5Ly4vc2NyaXB0cy9Db21wb25lbnRzL1Byb2R1Y3RSZWNvbW1lbmRhdGlvbi5qcz9hZjAzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5pbXBvcnQgeyBmZXRjaFJlY29tbWVuZGF0aW9ucyB9IGZyb20gJy4uL3V0aWxzJztcbmltcG9ydCBQTFBJdGVtIGZyb20gJy4vUExQSXRlbSc7XG5cbmNvbnN0IFByb2R1Y3RSZWNvbW1lbmRhdGlvbiA9ICh7IHByb2R1Y3QsIHRpdGxlIH0pID0+IHtcbiAgY29uc3QgW3JlY29tbWVuZGF0aW9ucywgc2V0UmVjb21tZW5kYXRpb25zXSA9IHVzZVN0YXRlKFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2hSZWNvbW1lbmRhdGlvbnMocHJvZHVjdD8uaWQpO1xuXG4gICAgICAgIHNldFJlY29tbWVuZGF0aW9ucyhyZXNwb25zZSk7XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyLm1lc3NhZ2UpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBmZXRjaERhdGEoKTtcbiAgfSwgW3Byb2R1Y3QuaWRdKTtcblxuICBjb25zdCBnZXRWYXJpYW50ID0gKHJlY29tbWVuZGF0aW9uKSA9PiB7XG4gICAgY29uc3QgcHJvZHVjdFZhcmlhbnQgPSByZWNvbW1lbmRhdGlvbi52YXJpYW50cy5maW5kKFxuICAgICAgKHZhcmlhbnQpID0+IHZhcmlhbnQub3B0aW9uMS50b0xvd2VyQ2FzZSgpID09PSByZWNvbW1lbmRhdGlvbi5jb2xvcnNbMF1cbiAgICApO1xuXG4gICAgcmV0dXJuIHByb2R1Y3RWYXJpYW50O1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPFByb2R1Y3RSZWNvbW1lbmRhdGlvbkNvbnRhaW5lcj5cbiAgICAgIDxoMiBjbGFzc05hbWU9XCJmb250LW5vcm1hbCB0ZXh0LWNlbnRlciBmb250LXNlcmlmIG1iLTEgbWQ6cGItNSBtZDp0ZXh0LTJ4bCBtZDp0ZXh0LWJhc2VcIj5cbiAgICAgICAge3RpdGxlfVxuICAgICAgPC9oMj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBvdmVyZmxvdy1oaWRkZW4gbWQ6anVzdGlmeS1pdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgPFJlY29tbWVuZGF0aW9uQ29udGFpbmVyIHJlY29tbWVuZGF0aW9ucz17cmVjb21tZW5kYXRpb25zfT5cbiAgICAgICAgICB7cmVjb21tZW5kYXRpb25zLm1hcCgocmVjb21tZW5kYXRpb24pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG5ld1Byb2R1Y3QgPSB7IC4uLnJlY29tbWVuZGF0aW9uLCB2YXJpYW50OiBnZXRWYXJpYW50KHJlY29tbWVuZGF0aW9uKSB9O1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPFBMUEl0ZW1cbiAgICAgICAgICAgICAgICBrZXk9e3JlY29tbWVuZGF0aW9uLmlkfVxuICAgICAgICAgICAgICAgIHByb2R1Y3Q9e25ld1Byb2R1Y3R9XG4gICAgICAgICAgICAgICAgY29sb3JzPXtyZWNvbW1lbmRhdGlvbi5jb2xvcnN9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pfVxuICAgICAgICA8L1JlY29tbWVuZGF0aW9uQ29udGFpbmVyPlxuICAgICAgPC9kaXY+XG4gICAgPC9Qcm9kdWN0UmVjb21tZW5kYXRpb25Db250YWluZXI+XG4gICk7XG59O1xuXG5jb25zdCBQcm9kdWN0UmVjb21tZW5kYXRpb25Db250YWluZXIgPSBzdHlsZWQuZGl2LmF0dHJzKHtcbiAgY2xhc3NOYW1lOiAncHgtMiBweS04IG1iLTggbWQ6cHgtMCBtZDpweS0xMCBtZDp0ZXh0LWNlbnRlcicsXG59KWBcbiAgQG1lZGlhIChtaW4td2lkdGg6IDc0MHB4KSB7XG4gICAgbWFyZ2luLXJpZ2h0OiAtOCU7XG4gICAgbWFyZ2luLWxlZnQ6IC04JTtcbiAgfVxuYDtcblxuY29uc3QgUmVjb21tZW5kYXRpb25Db250YWluZXIgPSBzdHlsZWQuZGl2LmF0dHJzKCh7IHJlY29tbWVuZGF0aW9ucyB9KSA9PiAoe1xuICBjbGFzc05hbWU6IGBncmlkIGdyaWQtY29sLTEganVzdGlmeS1pdGVtcy1jZW50ZXIgbWQ6anVzdGlmeS1pdGVtcy1zdGFydCBtZDpncmlkLWNvbHMtMiB4bDpncmlkLWNvbHMtJHtyZWNvbW1lbmRhdGlvbnMubGVuZ3RofSBnYXAtMiBtZDp3LTEwLzEyIG1heC13LXNjcmVlbi14eGxgLFxufSkpYGA7XG5cblByb2R1Y3RSZWNvbW1lbmRhdGlvbi5kZWZhdWx0UHJvcHMgPSB7XG4gIHByb2R1Y3Q6IHt9LFxuICB0aXRsZTogJycsXG59O1xuXG5Qcm9kdWN0UmVjb21tZW5kYXRpb24ucHJvcFR5cGVzID0ge1xuICBwcm9kdWN0OiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgIGlkOiBQcm9wVHlwZXMubnVtYmVyLFxuICB9KSxcbiAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0UmVjb21tZW5kYXRpb247XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlByb3BUeXBlcyIsInN0eWxlZCIsImZldGNoUmVjb21tZW5kYXRpb25zIiwiUExQSXRlbSIsIlByb2R1Y3RSZWNvbW1lbmRhdGlvbiIsInByb2R1Y3QiLCJ0aXRsZSIsInJlY29tbWVuZGF0aW9ucyIsInNldFJlY29tbWVuZGF0aW9ucyIsImZldGNoRGF0YSIsImlkIiwicmVzcG9uc2UiLCJjb25zb2xlIiwibG9nIiwibWVzc2FnZSIsImdldFZhcmlhbnQiLCJyZWNvbW1lbmRhdGlvbiIsInByb2R1Y3RWYXJpYW50IiwidmFyaWFudHMiLCJmaW5kIiwidmFyaWFudCIsIm9wdGlvbjEiLCJ0b0xvd2VyQ2FzZSIsImNvbG9ycyIsIm1hcCIsIm5ld1Byb2R1Y3QiLCJQcm9kdWN0UmVjb21tZW5kYXRpb25Db250YWluZXIiLCJkaXYiLCJhdHRycyIsImNsYXNzTmFtZSIsIlJlY29tbWVuZGF0aW9uQ29udGFpbmVyIiwibGVuZ3RoIiwiZGVmYXVsdFByb3BzIiwicHJvcFR5cGVzIiwic2hhcGUiLCJudW1iZXIiLCJzdHJpbmciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./scripts/Components/ProductRecommendation.js\n");

/***/ })

}]);