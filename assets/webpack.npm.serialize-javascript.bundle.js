"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkecomm_levity"] = self["webpackChunkecomm_levity"] || []).push([["npm.serialize-javascript"],{

/***/ "./node_modules/serialize-javascript/index.js":
/*!****************************************************!*\
  !*** ./node_modules/serialize-javascript/index.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("/*\nCopyright (c) 2014, Yahoo! Inc. All rights reserved.\nCopyrights licensed under the New BSD License.\nSee the accompanying LICENSE file for terms.\n*/\n\n\n\nvar randomBytes = __webpack_require__(/*! randombytes */ \"./node_modules/randombytes/browser.js\");\n\n// Generate an internal UID to make the regexp pattern harder to guess.\nvar UID_LENGTH          = 16;\nvar UID                 = generateUID();\nvar PLACE_HOLDER_REGEXP = new RegExp('(\\\\\\\\)?\"@__(F|R|D|M|S|A|U|I|B|L)-' + UID + '-(\\\\d+)__@\"', 'g');\n\nvar IS_NATIVE_CODE_REGEXP = /\\{\\s*\\[native code\\]\\s*\\}/g;\nvar IS_PURE_FUNCTION = /function.*?\\(/;\nvar IS_ARROW_FUNCTION = /.*?=>.*?/;\nvar UNSAFE_CHARS_REGEXP   = /[<>\\/\\u2028\\u2029]/g;\n\nvar RESERVED_SYMBOLS = ['*', 'async'];\n\n// Mapping of unsafe HTML and invalid JavaScript line terminator chars to their\n// Unicode char counterparts which are safe to use in JavaScript strings.\nvar ESCAPED_CHARS = {\n    '<'     : '\\\\u003C',\n    '>'     : '\\\\u003E',\n    '/'     : '\\\\u002F',\n    '\\u2028': '\\\\u2028',\n    '\\u2029': '\\\\u2029'\n};\n\nfunction escapeUnsafeChars(unsafeChar) {\n    return ESCAPED_CHARS[unsafeChar];\n}\n\nfunction generateUID() {\n    var bytes = randomBytes(UID_LENGTH);\n    var result = '';\n    for(var i=0; i<UID_LENGTH; ++i) {\n        result += bytes[i].toString(16);\n    }\n    return result;\n}\n\nfunction deleteFunctions(obj){\n    var functionKeys = [];\n    for (var key in obj) {\n        if (typeof obj[key] === \"function\") {\n            functionKeys.push(key);\n        }\n    }\n    for (var i = 0; i < functionKeys.length; i++) {\n        delete obj[functionKeys[i]];\n    }\n}\n\nmodule.exports = function serialize(obj, options) {\n    options || (options = {});\n\n    // Backwards-compatibility for `space` as the second argument.\n    if (typeof options === 'number' || typeof options === 'string') {\n        options = {space: options};\n    }\n\n    var functions = [];\n    var regexps   = [];\n    var dates     = [];\n    var maps      = [];\n    var sets      = [];\n    var arrays    = [];\n    var undefs    = [];\n    var infinities= [];\n    var bigInts = [];\n    var urls = [];\n\n    // Returns placeholders for functions and regexps (identified by index)\n    // which are later replaced by their string representation.\n    function replacer(key, value) {\n\n        // For nested function\n        if(options.ignoreFunction){\n            deleteFunctions(value);\n        }\n\n        if (!value && value !== undefined) {\n            return value;\n        }\n\n        // If the value is an object w/ a toJSON method, toJSON is called before\n        // the replacer runs, so we use this[key] to get the non-toJSONed value.\n        var origValue = this[key];\n        var type = typeof origValue;\n\n        if (type === 'object') {\n            if(origValue instanceof RegExp) {\n                return '@__R-' + UID + '-' + (regexps.push(origValue) - 1) + '__@';\n            }\n\n            if(origValue instanceof Date) {\n                return '@__D-' + UID + '-' + (dates.push(origValue) - 1) + '__@';\n            }\n\n            if(origValue instanceof Map) {\n                return '@__M-' + UID + '-' + (maps.push(origValue) - 1) + '__@';\n            }\n\n            if(origValue instanceof Set) {\n                return '@__S-' + UID + '-' + (sets.push(origValue) - 1) + '__@';\n            }\n\n            if(origValue instanceof Array) {\n                var isSparse = origValue.filter(function(){return true}).length !== origValue.length;\n                if (isSparse) {\n                    return '@__A-' + UID + '-' + (arrays.push(origValue) - 1) + '__@';\n                }\n            }\n\n            if(origValue instanceof URL) {\n                return '@__L-' + UID + '-' + (urls.push(origValue) - 1) + '__@';\n            }\n        }\n\n        if (type === 'function') {\n            return '@__F-' + UID + '-' + (functions.push(origValue) - 1) + '__@';\n        }\n\n        if (type === 'undefined') {\n            return '@__U-' + UID + '-' + (undefs.push(origValue) - 1) + '__@';\n        }\n\n        if (type === 'number' && !isNaN(origValue) && !isFinite(origValue)) {\n            return '@__I-' + UID + '-' + (infinities.push(origValue) - 1) + '__@';\n        }\n\n        if (type === 'bigint') {\n            return '@__B-' + UID + '-' + (bigInts.push(origValue) - 1) + '__@';\n        }\n\n        return value;\n    }\n\n    function serializeFunc(fn) {\n      var serializedFn = fn.toString();\n      if (IS_NATIVE_CODE_REGEXP.test(serializedFn)) {\n          throw new TypeError('Serializing native function: ' + fn.name);\n      }\n\n      // pure functions, example: {key: function() {}}\n      if(IS_PURE_FUNCTION.test(serializedFn)) {\n          return serializedFn;\n      }\n\n      // arrow functions, example: arg1 => arg1+5\n      if(IS_ARROW_FUNCTION.test(serializedFn)) {\n          return serializedFn;\n      }\n\n      var argsStartsAt = serializedFn.indexOf('(');\n      var def = serializedFn.substr(0, argsStartsAt)\n        .trim()\n        .split(' ')\n        .filter(function(val) { return val.length > 0 });\n\n      var nonReservedSymbols = def.filter(function(val) {\n        return RESERVED_SYMBOLS.indexOf(val) === -1\n      });\n\n      // enhanced literal objects, example: {key() {}}\n      if(nonReservedSymbols.length > 0) {\n          return (def.indexOf('async') > -1 ? 'async ' : '') + 'function'\n            + (def.join('').indexOf('*') > -1 ? '*' : '')\n            + serializedFn.substr(argsStartsAt);\n      }\n\n      // arrow functions\n      return serializedFn;\n    }\n\n    // Check if the parameter is function\n    if (options.ignoreFunction && typeof obj === \"function\") {\n        obj = undefined;\n    }\n    // Protects against `JSON.stringify()` returning `undefined`, by serializing\n    // to the literal string: \"undefined\".\n    if (obj === undefined) {\n        return String(obj);\n    }\n\n    var str;\n\n    // Creates a JSON string representation of the value.\n    // NOTE: Node 0.12 goes into slow mode with extra JSON.stringify() args.\n    if (options.isJSON && !options.space) {\n        str = JSON.stringify(obj);\n    } else {\n        str = JSON.stringify(obj, options.isJSON ? null : replacer, options.space);\n    }\n\n    // Protects against `JSON.stringify()` returning `undefined`, by serializing\n    // to the literal string: \"undefined\".\n    if (typeof str !== 'string') {\n        return String(str);\n    }\n\n    // Replace unsafe HTML and invalid JavaScript line terminator chars with\n    // their safe Unicode char counterpart. This _must_ happen before the\n    // regexps and functions are serialized and added back to the string.\n    if (options.unsafe !== true) {\n        str = str.replace(UNSAFE_CHARS_REGEXP, escapeUnsafeChars);\n    }\n\n    if (functions.length === 0 && regexps.length === 0 && dates.length === 0 && maps.length === 0 && sets.length === 0 && arrays.length === 0 && undefs.length === 0 && infinities.length === 0 && bigInts.length === 0 && urls.length === 0) {\n        return str;\n    }\n\n    // Replaces all occurrences of function, regexp, date, map and set placeholders in the\n    // JSON string with their string representations. If the original value can\n    // not be found, then `undefined` is used.\n    return str.replace(PLACE_HOLDER_REGEXP, function (match, backSlash, type, valueIndex) {\n        // The placeholder may not be preceded by a backslash. This is to prevent\n        // replacing things like `\"a\\\"@__R-<UID>-0__@\"` and thus outputting\n        // invalid JS.\n        if (backSlash) {\n            return match;\n        }\n\n        if (type === 'D') {\n            return \"new Date(\\\"\" + dates[valueIndex].toISOString() + \"\\\")\";\n        }\n\n        if (type === 'R') {\n            return \"new RegExp(\" + serialize(regexps[valueIndex].source) + \", \\\"\" + regexps[valueIndex].flags + \"\\\")\";\n        }\n\n        if (type === 'M') {\n            return \"new Map(\" + serialize(Array.from(maps[valueIndex].entries()), options) + \")\";\n        }\n\n        if (type === 'S') {\n            return \"new Set(\" + serialize(Array.from(sets[valueIndex].values()), options) + \")\";\n        }\n\n        if (type === 'A') {\n            return \"Array.prototype.slice.call(\" + serialize(Object.assign({ length: arrays[valueIndex].length }, arrays[valueIndex]), options) + \")\";\n        }\n\n        if (type === 'U') {\n            return 'undefined'\n        }\n\n        if (type === 'I') {\n            return infinities[valueIndex];\n        }\n\n        if (type === 'B') {\n            return \"BigInt(\\\"\" + bigInts[valueIndex] + \"\\\")\";\n        }\n\n        if (type === 'L') {\n            return \"new URL(\\\"\" + urls[valueIndex].toString() + \"\\\")\"; \n        }\n\n        var fn = functions[valueIndex];\n\n        return serializeFunc(fn);\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvc2VyaWFsaXplLWphdmFzY3JpcHQvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFYTs7QUFFYixrQkFBa0IsbUJBQU8sQ0FBQywwREFBYTs7QUFFdkM7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsK0JBQStCLHVCQUF1QjtBQUN0RDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsY0FBYztBQUMvQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQix5QkFBeUI7QUFDN0M7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNEJBQTRCOztBQUU1QjtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25COztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwyREFBMkQsWUFBWTtBQUN2RTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG1DQUFtQztBQUNuQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsdUJBQXVCOztBQUV2RDtBQUNBO0FBQ0EsT0FBTzs7QUFFUCw2Q0FBNkM7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDZFQUE2RSxtQ0FBbUM7QUFDaEg7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsS0FBSztBQUNMIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZWNvbW0tbGV2aXR5Ly4vbm9kZV9tb2R1bGVzL3NlcmlhbGl6ZS1qYXZhc2NyaXB0L2luZGV4LmpzP2Y2NTMiXSwic291cmNlc0NvbnRlbnQiOlsiLypcbkNvcHlyaWdodCAoYykgMjAxNCwgWWFob28hIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbkNvcHlyaWdodHMgbGljZW5zZWQgdW5kZXIgdGhlIE5ldyBCU0QgTGljZW5zZS5cblNlZSB0aGUgYWNjb21wYW55aW5nIExJQ0VOU0UgZmlsZSBmb3IgdGVybXMuXG4qL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciByYW5kb21CeXRlcyA9IHJlcXVpcmUoJ3JhbmRvbWJ5dGVzJyk7XG5cbi8vIEdlbmVyYXRlIGFuIGludGVybmFsIFVJRCB0byBtYWtlIHRoZSByZWdleHAgcGF0dGVybiBoYXJkZXIgdG8gZ3Vlc3MuXG52YXIgVUlEX0xFTkdUSCAgICAgICAgICA9IDE2O1xudmFyIFVJRCAgICAgICAgICAgICAgICAgPSBnZW5lcmF0ZVVJRCgpO1xudmFyIFBMQUNFX0hPTERFUl9SRUdFWFAgPSBuZXcgUmVnRXhwKCcoXFxcXFxcXFwpP1wiQF9fKEZ8UnxEfE18U3xBfFV8SXxCfEwpLScgKyBVSUQgKyAnLShcXFxcZCspX19AXCInLCAnZycpO1xuXG52YXIgSVNfTkFUSVZFX0NPREVfUkVHRVhQID0gL1xce1xccypcXFtuYXRpdmUgY29kZVxcXVxccypcXH0vZztcbnZhciBJU19QVVJFX0ZVTkNUSU9OID0gL2Z1bmN0aW9uLio/XFwoLztcbnZhciBJU19BUlJPV19GVU5DVElPTiA9IC8uKj89Pi4qPy87XG52YXIgVU5TQUZFX0NIQVJTX1JFR0VYUCAgID0gL1s8PlxcL1xcdTIwMjhcXHUyMDI5XS9nO1xuXG52YXIgUkVTRVJWRURfU1lNQk9MUyA9IFsnKicsICdhc3luYyddO1xuXG4vLyBNYXBwaW5nIG9mIHVuc2FmZSBIVE1MIGFuZCBpbnZhbGlkIEphdmFTY3JpcHQgbGluZSB0ZXJtaW5hdG9yIGNoYXJzIHRvIHRoZWlyXG4vLyBVbmljb2RlIGNoYXIgY291bnRlcnBhcnRzIHdoaWNoIGFyZSBzYWZlIHRvIHVzZSBpbiBKYXZhU2NyaXB0IHN0cmluZ3MuXG52YXIgRVNDQVBFRF9DSEFSUyA9IHtcbiAgICAnPCcgICAgIDogJ1xcXFx1MDAzQycsXG4gICAgJz4nICAgICA6ICdcXFxcdTAwM0UnLFxuICAgICcvJyAgICAgOiAnXFxcXHUwMDJGJyxcbiAgICAnXFx1MjAyOCc6ICdcXFxcdTIwMjgnLFxuICAgICdcXHUyMDI5JzogJ1xcXFx1MjAyOSdcbn07XG5cbmZ1bmN0aW9uIGVzY2FwZVVuc2FmZUNoYXJzKHVuc2FmZUNoYXIpIHtcbiAgICByZXR1cm4gRVNDQVBFRF9DSEFSU1t1bnNhZmVDaGFyXTtcbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVVSUQoKSB7XG4gICAgdmFyIGJ5dGVzID0gcmFuZG9tQnl0ZXMoVUlEX0xFTkdUSCk7XG4gICAgdmFyIHJlc3VsdCA9ICcnO1xuICAgIGZvcih2YXIgaT0wOyBpPFVJRF9MRU5HVEg7ICsraSkge1xuICAgICAgICByZXN1bHQgKz0gYnl0ZXNbaV0udG9TdHJpbmcoMTYpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBkZWxldGVGdW5jdGlvbnMob2JqKXtcbiAgICB2YXIgZnVuY3Rpb25LZXlzID0gW107XG4gICAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgICAgICBpZiAodHlwZW9mIG9ialtrZXldID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgIGZ1bmN0aW9uS2V5cy5wdXNoKGtleSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBmdW5jdGlvbktleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgZGVsZXRlIG9ialtmdW5jdGlvbktleXNbaV1dO1xuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBzZXJpYWxpemUob2JqLCBvcHRpb25zKSB7XG4gICAgb3B0aW9ucyB8fCAob3B0aW9ucyA9IHt9KTtcblxuICAgIC8vIEJhY2t3YXJkcy1jb21wYXRpYmlsaXR5IGZvciBgc3BhY2VgIGFzIHRoZSBzZWNvbmQgYXJndW1lbnQuXG4gICAgaWYgKHR5cGVvZiBvcHRpb25zID09PSAnbnVtYmVyJyB8fCB0eXBlb2Ygb3B0aW9ucyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgb3B0aW9ucyA9IHtzcGFjZTogb3B0aW9uc307XG4gICAgfVxuXG4gICAgdmFyIGZ1bmN0aW9ucyA9IFtdO1xuICAgIHZhciByZWdleHBzICAgPSBbXTtcbiAgICB2YXIgZGF0ZXMgICAgID0gW107XG4gICAgdmFyIG1hcHMgICAgICA9IFtdO1xuICAgIHZhciBzZXRzICAgICAgPSBbXTtcbiAgICB2YXIgYXJyYXlzICAgID0gW107XG4gICAgdmFyIHVuZGVmcyAgICA9IFtdO1xuICAgIHZhciBpbmZpbml0aWVzPSBbXTtcbiAgICB2YXIgYmlnSW50cyA9IFtdO1xuICAgIHZhciB1cmxzID0gW107XG5cbiAgICAvLyBSZXR1cm5zIHBsYWNlaG9sZGVycyBmb3IgZnVuY3Rpb25zIGFuZCByZWdleHBzIChpZGVudGlmaWVkIGJ5IGluZGV4KVxuICAgIC8vIHdoaWNoIGFyZSBsYXRlciByZXBsYWNlZCBieSB0aGVpciBzdHJpbmcgcmVwcmVzZW50YXRpb24uXG4gICAgZnVuY3Rpb24gcmVwbGFjZXIoa2V5LCB2YWx1ZSkge1xuXG4gICAgICAgIC8vIEZvciBuZXN0ZWQgZnVuY3Rpb25cbiAgICAgICAgaWYob3B0aW9ucy5pZ25vcmVGdW5jdGlvbil7XG4gICAgICAgICAgICBkZWxldGVGdW5jdGlvbnModmFsdWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF2YWx1ZSAmJiB2YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJZiB0aGUgdmFsdWUgaXMgYW4gb2JqZWN0IHcvIGEgdG9KU09OIG1ldGhvZCwgdG9KU09OIGlzIGNhbGxlZCBiZWZvcmVcbiAgICAgICAgLy8gdGhlIHJlcGxhY2VyIHJ1bnMsIHNvIHdlIHVzZSB0aGlzW2tleV0gdG8gZ2V0IHRoZSBub24tdG9KU09OZWQgdmFsdWUuXG4gICAgICAgIHZhciBvcmlnVmFsdWUgPSB0aGlzW2tleV07XG4gICAgICAgIHZhciB0eXBlID0gdHlwZW9mIG9yaWdWYWx1ZTtcblxuICAgICAgICBpZiAodHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIGlmKG9yaWdWYWx1ZSBpbnN0YW5jZW9mIFJlZ0V4cCkge1xuICAgICAgICAgICAgICAgIHJldHVybiAnQF9fUi0nICsgVUlEICsgJy0nICsgKHJlZ2V4cHMucHVzaChvcmlnVmFsdWUpIC0gMSkgKyAnX19AJztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYob3JpZ1ZhbHVlIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAnQF9fRC0nICsgVUlEICsgJy0nICsgKGRhdGVzLnB1c2gob3JpZ1ZhbHVlKSAtIDEpICsgJ19fQCc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmKG9yaWdWYWx1ZSBpbnN0YW5jZW9mIE1hcCkge1xuICAgICAgICAgICAgICAgIHJldHVybiAnQF9fTS0nICsgVUlEICsgJy0nICsgKG1hcHMucHVzaChvcmlnVmFsdWUpIC0gMSkgKyAnX19AJztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYob3JpZ1ZhbHVlIGluc3RhbmNlb2YgU2V0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICdAX19TLScgKyBVSUQgKyAnLScgKyAoc2V0cy5wdXNoKG9yaWdWYWx1ZSkgLSAxKSArICdfX0AnO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZihvcmlnVmFsdWUgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICAgICAgICAgIHZhciBpc1NwYXJzZSA9IG9yaWdWYWx1ZS5maWx0ZXIoZnVuY3Rpb24oKXtyZXR1cm4gdHJ1ZX0pLmxlbmd0aCAhPT0gb3JpZ1ZhbHVlLmxlbmd0aDtcbiAgICAgICAgICAgICAgICBpZiAoaXNTcGFyc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdAX19BLScgKyBVSUQgKyAnLScgKyAoYXJyYXlzLnB1c2gob3JpZ1ZhbHVlKSAtIDEpICsgJ19fQCc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZihvcmlnVmFsdWUgaW5zdGFuY2VvZiBVUkwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ0BfX0wtJyArIFVJRCArICctJyArICh1cmxzLnB1c2gob3JpZ1ZhbHVlKSAtIDEpICsgJ19fQCc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgcmV0dXJuICdAX19GLScgKyBVSUQgKyAnLScgKyAoZnVuY3Rpb25zLnB1c2gob3JpZ1ZhbHVlKSAtIDEpICsgJ19fQCc7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHJldHVybiAnQF9fVS0nICsgVUlEICsgJy0nICsgKHVuZGVmcy5wdXNoKG9yaWdWYWx1ZSkgLSAxKSArICdfX0AnO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGUgPT09ICdudW1iZXInICYmICFpc05hTihvcmlnVmFsdWUpICYmICFpc0Zpbml0ZShvcmlnVmFsdWUpKSB7XG4gICAgICAgICAgICByZXR1cm4gJ0BfX0ktJyArIFVJRCArICctJyArIChpbmZpbml0aWVzLnB1c2gob3JpZ1ZhbHVlKSAtIDEpICsgJ19fQCc7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZSA9PT0gJ2JpZ2ludCcpIHtcbiAgICAgICAgICAgIHJldHVybiAnQF9fQi0nICsgVUlEICsgJy0nICsgKGJpZ0ludHMucHVzaChvcmlnVmFsdWUpIC0gMSkgKyAnX19AJztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZXJpYWxpemVGdW5jKGZuKSB7XG4gICAgICB2YXIgc2VyaWFsaXplZEZuID0gZm4udG9TdHJpbmcoKTtcbiAgICAgIGlmIChJU19OQVRJVkVfQ09ERV9SRUdFWFAudGVzdChzZXJpYWxpemVkRm4pKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignU2VyaWFsaXppbmcgbmF0aXZlIGZ1bmN0aW9uOiAnICsgZm4ubmFtZSk7XG4gICAgICB9XG5cbiAgICAgIC8vIHB1cmUgZnVuY3Rpb25zLCBleGFtcGxlOiB7a2V5OiBmdW5jdGlvbigpIHt9fVxuICAgICAgaWYoSVNfUFVSRV9GVU5DVElPTi50ZXN0KHNlcmlhbGl6ZWRGbikpIHtcbiAgICAgICAgICByZXR1cm4gc2VyaWFsaXplZEZuO1xuICAgICAgfVxuXG4gICAgICAvLyBhcnJvdyBmdW5jdGlvbnMsIGV4YW1wbGU6IGFyZzEgPT4gYXJnMSs1XG4gICAgICBpZihJU19BUlJPV19GVU5DVElPTi50ZXN0KHNlcmlhbGl6ZWRGbikpIHtcbiAgICAgICAgICByZXR1cm4gc2VyaWFsaXplZEZuO1xuICAgICAgfVxuXG4gICAgICB2YXIgYXJnc1N0YXJ0c0F0ID0gc2VyaWFsaXplZEZuLmluZGV4T2YoJygnKTtcbiAgICAgIHZhciBkZWYgPSBzZXJpYWxpemVkRm4uc3Vic3RyKDAsIGFyZ3NTdGFydHNBdClcbiAgICAgICAgLnRyaW0oKVxuICAgICAgICAuc3BsaXQoJyAnKVxuICAgICAgICAuZmlsdGVyKGZ1bmN0aW9uKHZhbCkgeyByZXR1cm4gdmFsLmxlbmd0aCA+IDAgfSk7XG5cbiAgICAgIHZhciBub25SZXNlcnZlZFN5bWJvbHMgPSBkZWYuZmlsdGVyKGZ1bmN0aW9uKHZhbCkge1xuICAgICAgICByZXR1cm4gUkVTRVJWRURfU1lNQk9MUy5pbmRleE9mKHZhbCkgPT09IC0xXG4gICAgICB9KTtcblxuICAgICAgLy8gZW5oYW5jZWQgbGl0ZXJhbCBvYmplY3RzLCBleGFtcGxlOiB7a2V5KCkge319XG4gICAgICBpZihub25SZXNlcnZlZFN5bWJvbHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIHJldHVybiAoZGVmLmluZGV4T2YoJ2FzeW5jJykgPiAtMSA/ICdhc3luYyAnIDogJycpICsgJ2Z1bmN0aW9uJ1xuICAgICAgICAgICAgKyAoZGVmLmpvaW4oJycpLmluZGV4T2YoJyonKSA+IC0xID8gJyonIDogJycpXG4gICAgICAgICAgICArIHNlcmlhbGl6ZWRGbi5zdWJzdHIoYXJnc1N0YXJ0c0F0KTtcbiAgICAgIH1cblxuICAgICAgLy8gYXJyb3cgZnVuY3Rpb25zXG4gICAgICByZXR1cm4gc2VyaWFsaXplZEZuO1xuICAgIH1cblxuICAgIC8vIENoZWNrIGlmIHRoZSBwYXJhbWV0ZXIgaXMgZnVuY3Rpb25cbiAgICBpZiAob3B0aW9ucy5pZ25vcmVGdW5jdGlvbiAmJiB0eXBlb2Ygb2JqID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgb2JqID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICAvLyBQcm90ZWN0cyBhZ2FpbnN0IGBKU09OLnN0cmluZ2lmeSgpYCByZXR1cm5pbmcgYHVuZGVmaW5lZGAsIGJ5IHNlcmlhbGl6aW5nXG4gICAgLy8gdG8gdGhlIGxpdGVyYWwgc3RyaW5nOiBcInVuZGVmaW5lZFwiLlxuICAgIGlmIChvYmogPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gU3RyaW5nKG9iaik7XG4gICAgfVxuXG4gICAgdmFyIHN0cjtcblxuICAgIC8vIENyZWF0ZXMgYSBKU09OIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGUgdmFsdWUuXG4gICAgLy8gTk9URTogTm9kZSAwLjEyIGdvZXMgaW50byBzbG93IG1vZGUgd2l0aCBleHRyYSBKU09OLnN0cmluZ2lmeSgpIGFyZ3MuXG4gICAgaWYgKG9wdGlvbnMuaXNKU09OICYmICFvcHRpb25zLnNwYWNlKSB7XG4gICAgICAgIHN0ciA9IEpTT04uc3RyaW5naWZ5KG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgc3RyID0gSlNPTi5zdHJpbmdpZnkob2JqLCBvcHRpb25zLmlzSlNPTiA/IG51bGwgOiByZXBsYWNlciwgb3B0aW9ucy5zcGFjZSk7XG4gICAgfVxuXG4gICAgLy8gUHJvdGVjdHMgYWdhaW5zdCBgSlNPTi5zdHJpbmdpZnkoKWAgcmV0dXJuaW5nIGB1bmRlZmluZWRgLCBieSBzZXJpYWxpemluZ1xuICAgIC8vIHRvIHRoZSBsaXRlcmFsIHN0cmluZzogXCJ1bmRlZmluZWRcIi5cbiAgICBpZiAodHlwZW9mIHN0ciAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuIFN0cmluZyhzdHIpO1xuICAgIH1cblxuICAgIC8vIFJlcGxhY2UgdW5zYWZlIEhUTUwgYW5kIGludmFsaWQgSmF2YVNjcmlwdCBsaW5lIHRlcm1pbmF0b3IgY2hhcnMgd2l0aFxuICAgIC8vIHRoZWlyIHNhZmUgVW5pY29kZSBjaGFyIGNvdW50ZXJwYXJ0LiBUaGlzIF9tdXN0XyBoYXBwZW4gYmVmb3JlIHRoZVxuICAgIC8vIHJlZ2V4cHMgYW5kIGZ1bmN0aW9ucyBhcmUgc2VyaWFsaXplZCBhbmQgYWRkZWQgYmFjayB0byB0aGUgc3RyaW5nLlxuICAgIGlmIChvcHRpb25zLnVuc2FmZSAhPT0gdHJ1ZSkge1xuICAgICAgICBzdHIgPSBzdHIucmVwbGFjZShVTlNBRkVfQ0hBUlNfUkVHRVhQLCBlc2NhcGVVbnNhZmVDaGFycyk7XG4gICAgfVxuXG4gICAgaWYgKGZ1bmN0aW9ucy5sZW5ndGggPT09IDAgJiYgcmVnZXhwcy5sZW5ndGggPT09IDAgJiYgZGF0ZXMubGVuZ3RoID09PSAwICYmIG1hcHMubGVuZ3RoID09PSAwICYmIHNldHMubGVuZ3RoID09PSAwICYmIGFycmF5cy5sZW5ndGggPT09IDAgJiYgdW5kZWZzLmxlbmd0aCA9PT0gMCAmJiBpbmZpbml0aWVzLmxlbmd0aCA9PT0gMCAmJiBiaWdJbnRzLmxlbmd0aCA9PT0gMCAmJiB1cmxzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gc3RyO1xuICAgIH1cblxuICAgIC8vIFJlcGxhY2VzIGFsbCBvY2N1cnJlbmNlcyBvZiBmdW5jdGlvbiwgcmVnZXhwLCBkYXRlLCBtYXAgYW5kIHNldCBwbGFjZWhvbGRlcnMgaW4gdGhlXG4gICAgLy8gSlNPTiBzdHJpbmcgd2l0aCB0aGVpciBzdHJpbmcgcmVwcmVzZW50YXRpb25zLiBJZiB0aGUgb3JpZ2luYWwgdmFsdWUgY2FuXG4gICAgLy8gbm90IGJlIGZvdW5kLCB0aGVuIGB1bmRlZmluZWRgIGlzIHVzZWQuXG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKFBMQUNFX0hPTERFUl9SRUdFWFAsIGZ1bmN0aW9uIChtYXRjaCwgYmFja1NsYXNoLCB0eXBlLCB2YWx1ZUluZGV4KSB7XG4gICAgICAgIC8vIFRoZSBwbGFjZWhvbGRlciBtYXkgbm90IGJlIHByZWNlZGVkIGJ5IGEgYmFja3NsYXNoLiBUaGlzIGlzIHRvIHByZXZlbnRcbiAgICAgICAgLy8gcmVwbGFjaW5nIHRoaW5ncyBsaWtlIGBcImFcXFwiQF9fUi08VUlEPi0wX19AXCJgIGFuZCB0aHVzIG91dHB1dHRpbmdcbiAgICAgICAgLy8gaW52YWxpZCBKUy5cbiAgICAgICAgaWYgKGJhY2tTbGFzaCkge1xuICAgICAgICAgICAgcmV0dXJuIG1hdGNoO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGUgPT09ICdEJykge1xuICAgICAgICAgICAgcmV0dXJuIFwibmV3IERhdGUoXFxcIlwiICsgZGF0ZXNbdmFsdWVJbmRleF0udG9JU09TdHJpbmcoKSArIFwiXFxcIilcIjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlID09PSAnUicpIHtcbiAgICAgICAgICAgIHJldHVybiBcIm5ldyBSZWdFeHAoXCIgKyBzZXJpYWxpemUocmVnZXhwc1t2YWx1ZUluZGV4XS5zb3VyY2UpICsgXCIsIFxcXCJcIiArIHJlZ2V4cHNbdmFsdWVJbmRleF0uZmxhZ3MgKyBcIlxcXCIpXCI7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZSA9PT0gJ00nKSB7XG4gICAgICAgICAgICByZXR1cm4gXCJuZXcgTWFwKFwiICsgc2VyaWFsaXplKEFycmF5LmZyb20obWFwc1t2YWx1ZUluZGV4XS5lbnRyaWVzKCkpLCBvcHRpb25zKSArIFwiKVwiO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGUgPT09ICdTJykge1xuICAgICAgICAgICAgcmV0dXJuIFwibmV3IFNldChcIiArIHNlcmlhbGl6ZShBcnJheS5mcm9tKHNldHNbdmFsdWVJbmRleF0udmFsdWVzKCkpLCBvcHRpb25zKSArIFwiKVwiO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGUgPT09ICdBJykge1xuICAgICAgICAgICAgcmV0dXJuIFwiQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoXCIgKyBzZXJpYWxpemUoT2JqZWN0LmFzc2lnbih7IGxlbmd0aDogYXJyYXlzW3ZhbHVlSW5kZXhdLmxlbmd0aCB9LCBhcnJheXNbdmFsdWVJbmRleF0pLCBvcHRpb25zKSArIFwiKVwiO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGUgPT09ICdVJykge1xuICAgICAgICAgICAgcmV0dXJuICd1bmRlZmluZWQnXG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZSA9PT0gJ0knKSB7XG4gICAgICAgICAgICByZXR1cm4gaW5maW5pdGllc1t2YWx1ZUluZGV4XTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlID09PSAnQicpIHtcbiAgICAgICAgICAgIHJldHVybiBcIkJpZ0ludChcXFwiXCIgKyBiaWdJbnRzW3ZhbHVlSW5kZXhdICsgXCJcXFwiKVwiO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGUgPT09ICdMJykge1xuICAgICAgICAgICAgcmV0dXJuIFwibmV3IFVSTChcXFwiXCIgKyB1cmxzW3ZhbHVlSW5kZXhdLnRvU3RyaW5nKCkgKyBcIlxcXCIpXCI7IFxuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGZuID0gZnVuY3Rpb25zW3ZhbHVlSW5kZXhdO1xuXG4gICAgICAgIHJldHVybiBzZXJpYWxpemVGdW5jKGZuKTtcbiAgICB9KTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/serialize-javascript/index.js\n");

/***/ })

}]);