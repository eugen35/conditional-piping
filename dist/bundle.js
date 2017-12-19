(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["conditional-piping"] = factory();
	else
		root["conditional-piping"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _cPipe = __webpack_require__(1);

var _dPipe = __webpack_require__(2);

var _wPipe = __webpack_require__(3);

module.exports = { cPipe: _cPipe.cPipeWithFor, dPipe: _dPipe.dPipe, wPipe: _wPipe.wPipe };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJjUGlwZSIsImRQaXBlIiwid1BpcGUiXSwibWFwcGluZ3MiOiI7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBRUFBLE9BQU9DLE9BQVAsR0FBaUIsRUFBQ0MsMEJBQUQsRUFBUUMsbUJBQVIsRUFBZUMsbUJBQWYsRUFBakIiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiQzovVXNlcnMvbW9zaGNoYW5za2l5L1dlYnN0b3JtUHJvamVjdHMvY29uZGl0aW9uYWwtcGlwaW5nIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtjUGlwZVdpdGhGb3IgYXMgY1BpcGV9IGZyb20gXCIuL3NyYy9jUGlwZVwiO1xyXG5pbXBvcnQge2RQaXBlfSBmcm9tIFwiLi9zcmMvZFBpcGVcIjtcclxuaW1wb3J0IHt3UGlwZX0gZnJvbSBcIi4vc3JjL3dQaXBlXCI7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtjUGlwZSwgZFBpcGUsIHdQaXBlfTsiXX0=

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/** @module cPipe */

/**
 * conditional pipe
 * Прекращает pipe в тот момент, когда breakCondition(промежуточный результат) будет равно true
 * @param {function} breakCondition - condition for break pipe
 * @returns {function}
 */
var cPipeWithFind = exports.cPipeWithFind = function cPipeWithFind(breakCondition) {
  return function () {
    for (var _len = arguments.length, fns = Array(_len), _key = 0; _key < _len; _key++) {
      fns[_key] = arguments[_key];
    }

    return function (state) {
      fns.find(function (fn) {
        state = fn(state);
        return breakCondition(state);
      });
      return state;
    };
  };
};

// В 3-4 раза быстрее cPipeWithFind
var cPipeWithFor = exports.cPipeWithFor = function cPipeWithFor(breakCondition) {
  return function () {
    for (var _len2 = arguments.length, fns = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      fns[_key2] = arguments[_key2];
    }

    return function (state) {
      for (var i = 0; i < fns.length; i++) {
        state = fns[i](state);
        if (breakCondition(state)) break;
      }
      return state;
    };
  };
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyY1xcY1BpcGUuanMiXSwibmFtZXMiOlsiY1BpcGVXaXRoRmluZCIsImJyZWFrQ29uZGl0aW9uIiwiZm5zIiwic3RhdGUiLCJmaW5kIiwiZm4iLCJjUGlwZVdpdGhGb3IiLCJpIiwibGVuZ3RoIl0sIm1hcHBpbmdzIjoiOzs7OztBQUFBOztBQUVBOzs7Ozs7QUFNTyxJQUFNQSx3Q0FBZ0IsU0FBaEJBLGFBQWdCLENBQUNDLGNBQUQ7QUFBQSxTQUFrQjtBQUFBLHNDQUFJQyxHQUFKO0FBQUlBLFNBQUo7QUFBQTs7QUFBQSxXQUFVLFVBQUNDLEtBQUQsRUFBUztBQUNoRUQsVUFBSUUsSUFBSixDQUFTLGNBQU07QUFDYkQsZ0JBQVFFLEdBQUdGLEtBQUgsQ0FBUjtBQUNBLGVBQU9GLGVBQWVFLEtBQWYsQ0FBUDtBQUNELE9BSEQ7QUFJQSxhQUFPQSxLQUFQO0FBQ0QsS0FOOEM7QUFBQSxHQUFsQjtBQUFBLENBQXRCOztBQVFQO0FBQ08sSUFBTUcsc0NBQWUsU0FBZkEsWUFBZSxDQUFDTCxjQUFEO0FBQUEsU0FBa0I7QUFBQSx1Q0FBSUMsR0FBSjtBQUFJQSxTQUFKO0FBQUE7O0FBQUEsV0FBVSxVQUFDQyxLQUFELEVBQVM7QUFDL0QsV0FBSyxJQUFJSSxJQUFFLENBQVgsRUFBY0EsSUFBRUwsSUFBSU0sTUFBcEIsRUFBNEJELEdBQTVCLEVBQWlDO0FBQy9CSixnQkFBUUQsSUFBSUssQ0FBSixFQUFPSixLQUFQLENBQVI7QUFDQSxZQUFJRixlQUFlRSxLQUFmLENBQUosRUFBMkI7QUFDNUI7QUFDRCxhQUFPQSxLQUFQO0FBQ0QsS0FONkM7QUFBQSxHQUFsQjtBQUFBLENBQXJCIiwiZmlsZSI6ImNQaXBlLmpzIiwic291cmNlUm9vdCI6IkM6L1VzZXJzL21vc2hjaGFuc2tpeS9XZWJzdG9ybVByb2plY3RzL2NvbmRpdGlvbmFsLXBpcGluZyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAbW9kdWxlIGNQaXBlICovXHJcblxyXG4vKipcclxuICogY29uZGl0aW9uYWwgcGlwZVxyXG4gKiDQn9GA0LXQutGA0LDRidCw0LXRgiBwaXBlINCyINGC0L7RgiDQvNC+0LzQtdC90YIsINC60L7Qs9C00LAgYnJlYWtDb25kaXRpb24o0L/RgNC+0LzQtdC20YPRgtC+0YfQvdGL0Lkg0YDQtdC30YPQu9GM0YLQsNGCKSDQsdGD0LTQtdGCINGA0LDQstC90L4gdHJ1ZVxyXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBicmVha0NvbmRpdGlvbiAtIGNvbmRpdGlvbiBmb3IgYnJlYWsgcGlwZVxyXG4gKiBAcmV0dXJucyB7ZnVuY3Rpb259XHJcbiAqL1xyXG5leHBvcnQgY29uc3QgY1BpcGVXaXRoRmluZCA9IChicmVha0NvbmRpdGlvbik9PiguLi5mbnMpPT4oc3RhdGUpPT57XHJcbiAgZm5zLmZpbmQoZm4gPT4ge1xyXG4gICAgc3RhdGUgPSBmbihzdGF0ZSk7XHJcbiAgICByZXR1cm4gYnJlYWtDb25kaXRpb24oc3RhdGUpO1xyXG4gIH0pO1xyXG4gIHJldHVybiBzdGF0ZTtcclxufTtcclxuXHJcbi8vINCSIDMtNCDRgNCw0LfQsCDQsdGL0YHRgtGA0LXQtSBjUGlwZVdpdGhGaW5kXHJcbmV4cG9ydCBjb25zdCBjUGlwZVdpdGhGb3IgPSAoYnJlYWtDb25kaXRpb24pPT4oLi4uZm5zKT0+KHN0YXRlKT0+e1xyXG4gIGZvciAobGV0IGk9MDsgaTxmbnMubGVuZ3RoOyBpKyspIHtcclxuICAgIHN0YXRlID0gZm5zW2ldKHN0YXRlKTtcclxuICAgIGlmIChicmVha0NvbmRpdGlvbihzdGF0ZSkpIGJyZWFrO1xyXG4gIH1cclxuICByZXR1cm4gc3RhdGU7XHJcbn07XHJcbiJdfQ==

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * conditional pipe do...while loop
 * Прекращает pipe в тот момент, когда breakCondition(промежуточный результат) будет равно true
 * Если после выполнения последней функции в pipe breakCondition(промежуточный результат) будет равно false, pipe начинает выполняться сначала
 * @param {function} breakCondition - condition for break pipe and loop
 * @returns {function}
 */
var dPipe = exports.dPipe = function dPipe(breakCondition) {
  return function () {
    for (var _len = arguments.length, fns = Array(_len), _key = 0; _key < _len; _key++) {
      fns[_key] = arguments[_key];
    }

    return function (state) {
      do {
        fns.find(function (fn) {
          state = fn(state);
          return breakCondition(state);
        });
      } while (!breakCondition(state));
      return state;
    };
  };
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyY1xcZFBpcGUuanMiXSwibmFtZXMiOlsiZFBpcGUiLCJicmVha0NvbmRpdGlvbiIsImZucyIsInN0YXRlIiwiZmluZCIsImZuIl0sIm1hcHBpbmdzIjoiOzs7OztBQUFBOzs7Ozs7O0FBT08sSUFBTUEsd0JBQVEsU0FBUkEsS0FBUSxDQUFDQyxjQUFEO0FBQUEsU0FBa0I7QUFBQSxzQ0FBSUMsR0FBSjtBQUFJQSxTQUFKO0FBQUE7O0FBQUEsV0FBVSxVQUFDQyxLQUFELEVBQVM7QUFDeEQ7QUFBR0QsWUFBSUUsSUFBSixDQUFTLGNBQU07QUFDaEJELGtCQUFRRSxHQUFHRixLQUFILENBQVI7QUFDQSxpQkFBT0YsZUFBZUUsS0FBZixDQUFQO0FBQ0QsU0FIRTtBQUFILGVBSU8sQ0FBQ0YsZUFBZUUsS0FBZixDQUpSO0FBS0EsYUFBT0EsS0FBUDtBQUNELEtBUHNDO0FBQUEsR0FBbEI7QUFBQSxDQUFkIiwiZmlsZSI6ImRQaXBlLmpzIiwic291cmNlUm9vdCI6IkM6L1VzZXJzL21vc2hjaGFuc2tpeS9XZWJzdG9ybVByb2plY3RzL2NvbmRpdGlvbmFsLXBpcGluZyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBjb25kaXRpb25hbCBwaXBlIGRvLi4ud2hpbGUgbG9vcFxyXG4gKiDQn9GA0LXQutGA0LDRidCw0LXRgiBwaXBlINCyINGC0L7RgiDQvNC+0LzQtdC90YIsINC60L7Qs9C00LAgYnJlYWtDb25kaXRpb24o0L/RgNC+0LzQtdC20YPRgtC+0YfQvdGL0Lkg0YDQtdC30YPQu9GM0YLQsNGCKSDQsdGD0LTQtdGCINGA0LDQstC90L4gdHJ1ZVxyXG4gKiDQldGB0LvQuCDQv9C+0YHQu9C1INCy0YvQv9C+0LvQvdC10L3QuNGPINC/0L7RgdC70LXQtNC90LXQuSDRhNGD0L3QutGG0LjQuCDQsiBwaXBlIGJyZWFrQ29uZGl0aW9uKNC/0YDQvtC80LXQttGD0YLQvtGH0L3Ri9C5INGA0LXQt9GD0LvRjNGC0LDRgikg0LHRg9C00LXRgiDRgNCw0LLQvdC+IGZhbHNlLCBwaXBlINC90LDRh9C40L3QsNC10YIg0LLRi9C/0L7Qu9C90Y/RgtGM0YHRjyDRgdC90LDRh9Cw0LvQsFxyXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBicmVha0NvbmRpdGlvbiAtIGNvbmRpdGlvbiBmb3IgYnJlYWsgcGlwZSBhbmQgbG9vcFxyXG4gKiBAcmV0dXJucyB7ZnVuY3Rpb259XHJcbiAqL1xyXG5leHBvcnQgY29uc3QgZFBpcGUgPSAoYnJlYWtDb25kaXRpb24pPT4oLi4uZm5zKT0+KHN0YXRlKT0+e1xyXG4gIGRvIGZucy5maW5kKGZuID0+IHtcclxuICAgIHN0YXRlID0gZm4oc3RhdGUpO1xyXG4gICAgcmV0dXJuIGJyZWFrQ29uZGl0aW9uKHN0YXRlKTtcclxuICB9KTtcclxuICB3aGlsZSAoIWJyZWFrQ29uZGl0aW9uKHN0YXRlKSk7XHJcbiAgcmV0dXJuIHN0YXRlO1xyXG59OyJdfQ==

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * conditional pipe while loop
 * До начала выполнения pipe проверяет, если breakCondition(промежуточный результат) будет равно false, начинает выполнять pipe. По окончании pipe снова начинает цикл
 * Прекращает pipe вместе с циклом в тот момент, когда breakCondition(промежуточный результат) будет равно true.
 * @param {function} breakCondition - condition for break pipe and loop
 * @returns {function}
 */
var wPipe = exports.wPipe = function wPipe(breakCondition) {
  return function () {
    for (var _len = arguments.length, fns = Array(_len), _key = 0; _key < _len; _key++) {
      fns[_key] = arguments[_key];
    }

    return function (state) {
      while (!breakCondition(state)) {
        fns.find(function (fn) {
          state = fn(state);
          return breakCondition(state);
        });
      }return state;
    };
  };
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyY1xcd1BpcGUuanMiXSwibmFtZXMiOlsid1BpcGUiLCJicmVha0NvbmRpdGlvbiIsImZucyIsInN0YXRlIiwiZmluZCIsImZuIl0sIm1hcHBpbmdzIjoiOzs7OztBQUFBOzs7Ozs7O0FBT08sSUFBTUEsd0JBQVEsU0FBUkEsS0FBUSxDQUFDQyxjQUFEO0FBQUEsU0FBa0I7QUFBQSxzQ0FBSUMsR0FBSjtBQUFJQSxTQUFKO0FBQUE7O0FBQUEsV0FBVSxVQUFDQyxLQUFELEVBQVM7QUFDeEQsYUFBTyxDQUFDRixlQUFlRSxLQUFmLENBQVI7QUFBK0JELFlBQUlFLElBQUosQ0FBUyxjQUFNO0FBQzVDRCxrQkFBUUUsR0FBR0YsS0FBSCxDQUFSO0FBQ0EsaUJBQU9GLGVBQWVFLEtBQWYsQ0FBUDtBQUNELFNBSDhCO0FBQS9CLE9BSUEsT0FBT0EsS0FBUDtBQUNELEtBTnNDO0FBQUEsR0FBbEI7QUFBQSxDQUFkIiwiZmlsZSI6IndQaXBlLmpzIiwic291cmNlUm9vdCI6IkM6L1VzZXJzL21vc2hjaGFuc2tpeS9XZWJzdG9ybVByb2plY3RzL2NvbmRpdGlvbmFsLXBpcGluZyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBjb25kaXRpb25hbCBwaXBlIHdoaWxlIGxvb3BcclxuICog0JTQviDQvdCw0YfQsNC70LAg0LLRi9C/0L7Qu9C90LXQvdC40Y8gcGlwZSDQv9GA0L7QstC10YDRj9C10YIsINC10YHQu9C4IGJyZWFrQ29uZGl0aW9uKNC/0YDQvtC80LXQttGD0YLQvtGH0L3Ri9C5INGA0LXQt9GD0LvRjNGC0LDRgikg0LHRg9C00LXRgiDRgNCw0LLQvdC+IGZhbHNlLCDQvdCw0YfQuNC90LDQtdGCINCy0YvQv9C+0LvQvdGP0YLRjCBwaXBlLiDQn9C+INC+0LrQvtC90YfQsNC90LjQuCBwaXBlINGB0L3QvtCy0LAg0L3QsNGH0LjQvdCw0LXRgiDRhtC40LrQu1xyXG4gKiDQn9GA0LXQutGA0LDRidCw0LXRgiBwaXBlINCy0LzQtdGB0YLQtSDRgSDRhtC40LrQu9C+0Lwg0LIg0YLQvtGCINC80L7QvNC10L3Rgiwg0LrQvtCz0LTQsCBicmVha0NvbmRpdGlvbijQv9GA0L7QvNC10LbRg9GC0L7Rh9C90YvQuSDRgNC10LfRg9C70YzRgtCw0YIpINCx0YPQtNC10YIg0YDQsNCy0L3QviB0cnVlLlxyXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBicmVha0NvbmRpdGlvbiAtIGNvbmRpdGlvbiBmb3IgYnJlYWsgcGlwZSBhbmQgbG9vcFxyXG4gKiBAcmV0dXJucyB7ZnVuY3Rpb259XHJcbiAqL1xyXG5leHBvcnQgY29uc3Qgd1BpcGUgPSAoYnJlYWtDb25kaXRpb24pPT4oLi4uZm5zKT0+KHN0YXRlKT0+e1xyXG4gIHdoaWxlICghYnJlYWtDb25kaXRpb24oc3RhdGUpKSBmbnMuZmluZChmbiA9PiB7XHJcbiAgICBzdGF0ZSA9IGZuKHN0YXRlKTtcclxuICAgIHJldHVybiBicmVha0NvbmRpdGlvbihzdGF0ZSk7XHJcbiAgfSk7XHJcbiAgcmV0dXJuIHN0YXRlO1xyXG59O1xyXG4iXX0=

/***/ })
/******/ ]);
});