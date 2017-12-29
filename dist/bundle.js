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


var _cPipeNCompose = __webpack_require__(1);

var _dPipe = __webpack_require__(2);

var _wPipe = __webpack_require__(3);

var _helpers = __webpack_require__(4);

module.exports = { cPipe: _cPipeNCompose.cPipeWithFor, dPipe: _dPipe.dPipeWithFor, wPipe: _wPipe.wPipe, cCompose: _cPipeNCompose.cCompose, makePipeReadyOneArg: _helpers.makePipeReadyOneArg, makePipeReady: _helpers.makePipeReady };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJjUGlwZSIsImRQaXBlIiwid1BpcGUiLCJjQ29tcG9zZSIsIm1ha2VQaXBlUmVhZHlPbmVBcmciLCJtYWtlUGlwZVJlYWR5Il0sIm1hcHBpbmdzIjoiOztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUVBQSxPQUFPQyxPQUFQLEdBQWlCLEVBQUNDLGtDQUFELEVBQVFDLDBCQUFSLEVBQWVDLG1CQUFmLEVBQXNCQyxpQ0FBdEIsRUFBZ0NDLGlEQUFoQyxFQUFxREMscUNBQXJELEVBQWpCIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlUm9vdCI6IkM6L1VzZXJzL21vc2hjaGFuc2tpeS9XZWJzdG9ybVByb2plY3RzL2NvbmRpdGlvbmFsLXBpcGluZyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Y1BpcGVXaXRoRm9yIGFzIGNQaXBlLCBjQ29tcG9zZX0gZnJvbSBcIi4vc3JjL2NQaXBlTkNvbXBvc2VcIjtcclxuaW1wb3J0IHtkUGlwZVdpdGhGb3IgYXMgZFBpcGV9IGZyb20gXCIuL3NyYy9kUGlwZVwiO1xyXG5pbXBvcnQge3dQaXBlfSBmcm9tIFwiLi9zcmMvd1BpcGVcIjtcclxuaW1wb3J0IHttYWtlUGlwZVJlYWR5T25lQXJnLCBtYWtlUGlwZVJlYWR5fSBmcm9tIFwiLi9zcmMvaGVscGVyc1wiO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7Y1BpcGUsIGRQaXBlLCB3UGlwZSwgY0NvbXBvc2UsIG1ha2VQaXBlUmVhZHlPbmVBcmcsIG1ha2VQaXBlUmVhZHl9OyJdfQ==

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

// Данная функция на node v9.2.0 работает в 3-4 раза быстрее, чем cPipeWithFind.
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

var cCompose = exports.cCompose = function cCompose(breakCondition) {
  return function () {
    for (var _len3 = arguments.length, fns = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      fns[_key3] = arguments[_key3];
    }

    return function (state) {
      for (var i = fns.length - 1; 0 <= i; i--) {
        state = fns[i](state);
        if (breakCondition(state)) break;
      }
      return state;
    };
  };
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyY1xcY1BpcGVOQ29tcG9zZS5qcyJdLCJuYW1lcyI6WyJjUGlwZVdpdGhGaW5kIiwiYnJlYWtDb25kaXRpb24iLCJmbnMiLCJzdGF0ZSIsImZpbmQiLCJmbiIsImNQaXBlV2l0aEZvciIsImkiLCJsZW5ndGgiLCJjQ29tcG9zZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7QUFFQTs7Ozs7O0FBTU8sSUFBTUEsd0NBQWdCLFNBQWhCQSxhQUFnQixDQUFDQyxjQUFEO0FBQUEsU0FBa0I7QUFBQSxzQ0FBSUMsR0FBSjtBQUFJQSxTQUFKO0FBQUE7O0FBQUEsV0FBVSxVQUFDQyxLQUFELEVBQVM7QUFDaEVELFVBQUlFLElBQUosQ0FBUyxjQUFNO0FBQ2JELGdCQUFRRSxHQUFHRixLQUFILENBQVI7QUFDQSxlQUFPRixlQUFlRSxLQUFmLENBQVA7QUFDRCxPQUhEO0FBSUEsYUFBT0EsS0FBUDtBQUNELEtBTjhDO0FBQUEsR0FBbEI7QUFBQSxDQUF0Qjs7QUFRUDtBQUNPLElBQU1HLHNDQUFlLFNBQWZBLFlBQWUsQ0FBQ0wsY0FBRDtBQUFBLFNBQWtCO0FBQUEsdUNBQUlDLEdBQUo7QUFBSUEsU0FBSjtBQUFBOztBQUFBLFdBQVUsVUFBQ0MsS0FBRCxFQUFTO0FBQy9ELFdBQUssSUFBSUksSUFBRSxDQUFYLEVBQWNBLElBQUVMLElBQUlNLE1BQXBCLEVBQTRCRCxHQUE1QixFQUFpQztBQUMvQkosZ0JBQVFELElBQUlLLENBQUosRUFBT0osS0FBUCxDQUFSO0FBQ0EsWUFBSUYsZUFBZUUsS0FBZixDQUFKLEVBQTJCO0FBQzVCO0FBQ0QsYUFBT0EsS0FBUDtBQUNELEtBTjZDO0FBQUEsR0FBbEI7QUFBQSxDQUFyQjs7QUFRQSxJQUFNTSw4QkFBVyxTQUFYQSxRQUFXLENBQUNSLGNBQUQ7QUFBQSxTQUFrQjtBQUFBLHVDQUFJQyxHQUFKO0FBQUlBLFNBQUo7QUFBQTs7QUFBQSxXQUFVLFVBQUNDLEtBQUQsRUFBUztBQUMzRCxXQUFLLElBQUlJLElBQUVMLElBQUlNLE1BQUosR0FBVyxDQUF0QixFQUF5QixLQUFLRCxDQUE5QixFQUFpQ0EsR0FBakMsRUFBc0M7QUFDcENKLGdCQUFRRCxJQUFJSyxDQUFKLEVBQU9KLEtBQVAsQ0FBUjtBQUNBLFlBQUlGLGVBQWVFLEtBQWYsQ0FBSixFQUEyQjtBQUM1QjtBQUNELGFBQU9BLEtBQVA7QUFDRCxLQU55QztBQUFBLEdBQWxCO0FBQUEsQ0FBakIiLCJmaWxlIjoiY1BpcGVOQ29tcG9zZS5qcyIsInNvdXJjZVJvb3QiOiJDOi9Vc2Vycy9tb3NoY2hhbnNraXkvV2Vic3Rvcm1Qcm9qZWN0cy9jb25kaXRpb25hbC1waXBpbmciLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQG1vZHVsZSBjUGlwZSAqL1xyXG5cclxuLyoqXHJcbiAqIGNvbmRpdGlvbmFsIHBpcGVcclxuICog0J/RgNC10LrRgNCw0YnQsNC10YIgcGlwZSDQsiDRgtC+0YIg0LzQvtC80LXQvdGCLCDQutC+0LPQtNCwIGJyZWFrQ29uZGl0aW9uKNC/0YDQvtC80LXQttGD0YLQvtGH0L3Ri9C5INGA0LXQt9GD0LvRjNGC0LDRgikg0LHRg9C00LXRgiDRgNCw0LLQvdC+IHRydWVcclxuICogQHBhcmFtIHtmdW5jdGlvbn0gYnJlYWtDb25kaXRpb24gLSBjb25kaXRpb24gZm9yIGJyZWFrIHBpcGVcclxuICogQHJldHVybnMge2Z1bmN0aW9ufVxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGNQaXBlV2l0aEZpbmQgPSAoYnJlYWtDb25kaXRpb24pPT4oLi4uZm5zKT0+KHN0YXRlKT0+e1xyXG4gIGZucy5maW5kKGZuID0+IHtcclxuICAgIHN0YXRlID0gZm4oc3RhdGUpO1xyXG4gICAgcmV0dXJuIGJyZWFrQ29uZGl0aW9uKHN0YXRlKTtcclxuICB9KTtcclxuICByZXR1cm4gc3RhdGU7XHJcbn07XHJcblxyXG4vLyDQlNCw0L3QvdCw0Y8g0YTRg9C90LrRhtC40Y8g0L3QsCBub2RlIHY5LjIuMCDRgNCw0LHQvtGC0LDQtdGCINCyIDMtNCDRgNCw0LfQsCDQsdGL0YHRgtGA0LXQtSwg0YfQtdC8IGNQaXBlV2l0aEZpbmQuXHJcbmV4cG9ydCBjb25zdCBjUGlwZVdpdGhGb3IgPSAoYnJlYWtDb25kaXRpb24pPT4oLi4uZm5zKT0+KHN0YXRlKT0+e1xyXG4gIGZvciAobGV0IGk9MDsgaTxmbnMubGVuZ3RoOyBpKyspIHtcclxuICAgIHN0YXRlID0gZm5zW2ldKHN0YXRlKTtcclxuICAgIGlmIChicmVha0NvbmRpdGlvbihzdGF0ZSkpIGJyZWFrO1xyXG4gIH1cclxuICByZXR1cm4gc3RhdGU7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgY0NvbXBvc2UgPSAoYnJlYWtDb25kaXRpb24pPT4oLi4uZm5zKT0+KHN0YXRlKT0+e1xyXG4gIGZvciAobGV0IGk9Zm5zLmxlbmd0aC0xOyAwIDw9IGk7IGktLSkge1xyXG4gICAgc3RhdGUgPSBmbnNbaV0oc3RhdGUpO1xyXG4gICAgaWYgKGJyZWFrQ29uZGl0aW9uKHN0YXRlKSkgYnJlYWs7XHJcbiAgfVxyXG4gIHJldHVybiBzdGF0ZTtcclxufTsiXX0=

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dPipeWithFor = exports.dPipeWithCPipeWithForConst = exports.dPipeWithCPipeWithFor = undefined;

var _cPipeNCompose = __webpack_require__(1);

/**
 * conditional pipe do...while loop
 * Прекращает pipe в тот момент, когда breakCondition(промежуточный результат) будет равно true
 * Если после выполнения последней функции в pipe breakCondition(промежуточный результат) будет равно false, pipe начинает выполняться сначала
 * @param {function} breakCondition - condition for break pipe and loop
 * @returns {function}
 */
var dPipeWithCPipeWithFor = exports.dPipeWithCPipeWithFor = function dPipeWithCPipeWithFor(breakCondition) {
  return function () {
    for (var _len = arguments.length, fns = Array(_len), _key = 0; _key < _len; _key++) {
      fns[_key] = arguments[_key];
    }

    return function (state) {
      do {
        state = (0, _cPipeNCompose.cPipeWithFor)(breakCondition).apply(undefined, fns)(state);
      } while (!breakCondition(state));
      return state;
    };
  };
}; //import {cPipe} from "../index"; // @todo /6/ НЕВЕДОМО ПОЧЕМУ! Но если отсюда импортировать, - возвращает ошибку
var dPipeWithCPipeWithForConst = exports.dPipeWithCPipeWithForConst = function dPipeWithCPipeWithForConst(breakCondition) {
  return function () {
    for (var _len2 = arguments.length, fns = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      fns[_key2] = arguments[_key2];
    }

    return function (state) {
      var piped = (0, _cPipeNCompose.cPipeWithFor)(breakCondition).apply(undefined, fns);
      do {
        state = piped(state);
      } while (!breakCondition(state));
      return state;
    };
  };
};

// Данная функция на node v9.2.0 работает в 6-7 раз быстрее, чем dPipeWithCPipeWithFor и в 4-5 раз быстрее, чем dPipeWithCPipeWithForConst
var dPipeWithFor = exports.dPipeWithFor = function dPipeWithFor(breakCondition) {
  return function () {
    for (var _len3 = arguments.length, fns = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      fns[_key3] = arguments[_key3];
    }

    return function (state) {
      do {
        for (var i = 0; i < fns.length; i++) {
          state = fns[i](state);
          if (breakCondition(state)) break;
        }
      } while (!breakCondition(state));
      return state;
    };
  };
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyY1xcZFBpcGUuanMiXSwibmFtZXMiOlsiZFBpcGVXaXRoQ1BpcGVXaXRoRm9yIiwiYnJlYWtDb25kaXRpb24iLCJmbnMiLCJzdGF0ZSIsImRQaXBlV2l0aENQaXBlV2l0aEZvckNvbnN0IiwicGlwZWQiLCJkUGlwZVdpdGhGb3IiLCJpIiwibGVuZ3RoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0E7O0FBQ0E7Ozs7Ozs7QUFPTyxJQUFNQSx3REFBd0IsU0FBeEJBLHFCQUF3QixDQUFDQyxjQUFEO0FBQUEsU0FBa0I7QUFBQSxzQ0FBSUMsR0FBSjtBQUFJQSxTQUFKO0FBQUE7O0FBQUEsV0FBVSxVQUFDQyxLQUFELEVBQVM7QUFDeEUsU0FBRztBQUFDQSxnQkFBUSxpQ0FBTUYsY0FBTixtQkFBeUJDLEdBQXpCLEVBQThCQyxLQUE5QixDQUFSO0FBQTZDLE9BQWpELFFBQXlELENBQUNGLGVBQWVFLEtBQWYsQ0FBMUQ7QUFDQSxhQUFPQSxLQUFQO0FBQ0QsS0FIc0Q7QUFBQSxHQUFsQjtBQUFBLENBQTlCLEMsQ0FUUDtBQWNPLElBQU1DLGtFQUE2QixTQUE3QkEsMEJBQTZCLENBQUNILGNBQUQ7QUFBQSxTQUFrQjtBQUFBLHVDQUFJQyxHQUFKO0FBQUlBLFNBQUo7QUFBQTs7QUFBQSxXQUFVLFVBQUNDLEtBQUQsRUFBUztBQUM3RSxVQUFNRSxRQUFRLGlDQUFNSixjQUFOLG1CQUF5QkMsR0FBekIsQ0FBZDtBQUNBLFNBQUc7QUFBQ0MsZ0JBQVFFLE1BQU1GLEtBQU4sQ0FBUjtBQUFxQixPQUF6QixRQUFpQyxDQUFDRixlQUFlRSxLQUFmLENBQWxDO0FBQ0EsYUFBT0EsS0FBUDtBQUNELEtBSjJEO0FBQUEsR0FBbEI7QUFBQSxDQUFuQzs7QUFNUDtBQUNPLElBQU1HLHNDQUFlLFNBQWZBLFlBQWUsQ0FBQ0wsY0FBRDtBQUFBLFNBQWtCO0FBQUEsdUNBQUlDLEdBQUo7QUFBSUEsU0FBSjtBQUFBOztBQUFBLFdBQVUsVUFBQ0MsS0FBRCxFQUFTO0FBQy9EO0FBQUcsYUFBSyxJQUFJSSxJQUFFLENBQVgsRUFBY0EsSUFBRUwsSUFBSU0sTUFBcEIsRUFBNEJELEdBQTVCLEVBQWlDO0FBQ2xDSixrQkFBUUQsSUFBSUssQ0FBSixFQUFPSixLQUFQLENBQVI7QUFDQSxjQUFJRixlQUFlRSxLQUFmLENBQUosRUFBMkI7QUFDNUI7QUFIRCxlQUdTLENBQUNGLGVBQWVFLEtBQWYsQ0FIVjtBQUlBLGFBQU9BLEtBQVA7QUFDRCxLQU42QztBQUFBLEdBQWxCO0FBQUEsQ0FBckIiLCJmaWxlIjoiZFBpcGUuanMiLCJzb3VyY2VSb290IjoiQzovVXNlcnMvbW9zaGNoYW5za2l5L1dlYnN0b3JtUHJvamVjdHMvY29uZGl0aW9uYWwtcGlwaW5nIiwic291cmNlc0NvbnRlbnQiOlsiLy9pbXBvcnQge2NQaXBlfSBmcm9tIFwiLi4vaW5kZXhcIjsgLy8gQHRvZG8gLzYvINCd0JXQktCV0JTQntCc0J4g0J/QntCn0JXQnNCjISDQndC+INC10YHQu9C4INC+0YLRgdGO0LTQsCDQuNC80L/QvtGA0YLQuNGA0L7QstCw0YLRjCwgLSDQstC+0LfQstGA0LDRidCw0LXRgiDQvtGI0LjQsdC60YNcclxuaW1wb3J0IHtjUGlwZVdpdGhGb3IgYXMgY1BpcGV9IGZyb20gXCIuL2NQaXBlTkNvbXBvc2VcIjtcclxuLyoqXHJcbiAqIGNvbmRpdGlvbmFsIHBpcGUgZG8uLi53aGlsZSBsb29wXHJcbiAqINCf0YDQtdC60YDQsNGJ0LDQtdGCIHBpcGUg0LIg0YLQvtGCINC80L7QvNC10L3Rgiwg0LrQvtCz0LTQsCBicmVha0NvbmRpdGlvbijQv9GA0L7QvNC10LbRg9GC0L7Rh9C90YvQuSDRgNC10LfRg9C70YzRgtCw0YIpINCx0YPQtNC10YIg0YDQsNCy0L3QviB0cnVlXHJcbiAqINCV0YHQu9C4INC/0L7RgdC70LUg0LLRi9C/0L7Qu9C90LXQvdC40Y8g0L/QvtGB0LvQtdC00L3QtdC5INGE0YPQvdC60YbQuNC4INCyIHBpcGUgYnJlYWtDb25kaXRpb24o0L/RgNC+0LzQtdC20YPRgtC+0YfQvdGL0Lkg0YDQtdC30YPQu9GM0YLQsNGCKSDQsdGD0LTQtdGCINGA0LDQstC90L4gZmFsc2UsIHBpcGUg0L3QsNGH0LjQvdCw0LXRgiDQstGL0L/QvtC70L3Rj9GC0YzRgdGPINGB0L3QsNGH0LDQu9CwXHJcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGJyZWFrQ29uZGl0aW9uIC0gY29uZGl0aW9uIGZvciBicmVhayBwaXBlIGFuZCBsb29wXHJcbiAqIEByZXR1cm5zIHtmdW5jdGlvbn1cclxuICovXHJcbmV4cG9ydCBjb25zdCBkUGlwZVdpdGhDUGlwZVdpdGhGb3IgPSAoYnJlYWtDb25kaXRpb24pPT4oLi4uZm5zKT0+KHN0YXRlKT0+e1xyXG4gIGRvIHtzdGF0ZSA9IGNQaXBlKGJyZWFrQ29uZGl0aW9uKSguLi5mbnMpKHN0YXRlKX0gd2hpbGUgKCFicmVha0NvbmRpdGlvbihzdGF0ZSkpO1xyXG4gIHJldHVybiBzdGF0ZTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBkUGlwZVdpdGhDUGlwZVdpdGhGb3JDb25zdCA9IChicmVha0NvbmRpdGlvbik9PiguLi5mbnMpPT4oc3RhdGUpPT57XHJcbiAgY29uc3QgcGlwZWQgPSBjUGlwZShicmVha0NvbmRpdGlvbikoLi4uZm5zKTtcclxuICBkbyB7c3RhdGUgPSBwaXBlZChzdGF0ZSl9IHdoaWxlICghYnJlYWtDb25kaXRpb24oc3RhdGUpKTtcclxuICByZXR1cm4gc3RhdGU7XHJcbn07XHJcblxyXG4vLyDQlNCw0L3QvdCw0Y8g0YTRg9C90LrRhtC40Y8g0L3QsCBub2RlIHY5LjIuMCDRgNCw0LHQvtGC0LDQtdGCINCyIDYtNyDRgNCw0Lcg0LHRi9GB0YLRgNC10LUsINGH0LXQvCBkUGlwZVdpdGhDUGlwZVdpdGhGb3Ig0Lgg0LIgNC01INGA0LDQtyDQsdGL0YHRgtGA0LXQtSwg0YfQtdC8IGRQaXBlV2l0aENQaXBlV2l0aEZvckNvbnN0XHJcbmV4cG9ydCBjb25zdCBkUGlwZVdpdGhGb3IgPSAoYnJlYWtDb25kaXRpb24pPT4oLi4uZm5zKT0+KHN0YXRlKT0+e1xyXG4gIGRvIGZvciAobGV0IGk9MDsgaTxmbnMubGVuZ3RoOyBpKyspIHtcclxuICAgIHN0YXRlID0gZm5zW2ldKHN0YXRlKTtcclxuICAgIGlmIChicmVha0NvbmRpdGlvbihzdGF0ZSkpIGJyZWFrO1xyXG4gIH0gd2hpbGUgKCFicmVha0NvbmRpdGlvbihzdGF0ZSkpO1xyXG4gIHJldHVybiBzdGF0ZTtcclxufTsiXX0=

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.wPipe = undefined;

var _index = __webpack_require__(0);

/**
 * @todo /2/ Переписать с использованием for
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
        state = (0, _index.cPipe)(breakCondition).apply(undefined, fns)(state);
      }return state;
    };
  };
}; //import {cPipeWithFor as cPipe} from "./cPipeNCompose";
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyY1xcd1BpcGUuanMiXSwibmFtZXMiOlsid1BpcGUiLCJicmVha0NvbmRpdGlvbiIsImZucyIsInN0YXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0E7O0FBQ0E7Ozs7Ozs7O0FBUU8sSUFBTUEsd0JBQVEsU0FBUkEsS0FBUSxDQUFDQyxjQUFEO0FBQUEsU0FBa0I7QUFBQSxzQ0FBSUMsR0FBSjtBQUFJQSxTQUFKO0FBQUE7O0FBQUEsV0FBVSxVQUFDQyxLQUFELEVBQVM7QUFDeEQsYUFBTyxDQUFDRixlQUFlRSxLQUFmLENBQVI7QUFBK0JBLGdCQUFRLGtCQUFNRixjQUFOLG1CQUF5QkMsR0FBekIsRUFBOEJDLEtBQTlCLENBQVI7QUFBL0IsT0FDQSxPQUFPQSxLQUFQO0FBQ0QsS0FIc0M7QUFBQSxHQUFsQjtBQUFBLENBQWQsQyxDQVZQIiwiZmlsZSI6IndQaXBlLmpzIiwic291cmNlUm9vdCI6IkM6L1VzZXJzL21vc2hjaGFuc2tpeS9XZWJzdG9ybVByb2plY3RzL2NvbmRpdGlvbmFsLXBpcGluZyIsInNvdXJjZXNDb250ZW50IjpbIi8vaW1wb3J0IHtjUGlwZVdpdGhGb3IgYXMgY1BpcGV9IGZyb20gXCIuL2NQaXBlTkNvbXBvc2VcIjtcclxuaW1wb3J0IHtjUGlwZX0gZnJvbSBcIi4uL2luZGV4XCI7XHJcbi8qKlxyXG4gKiBAdG9kbyAvMi8g0J/QtdGA0LXQv9C40YHQsNGC0Ywg0YEg0LjRgdC/0L7Qu9GM0LfQvtCy0LDQvdC40LXQvCBmb3JcclxuICogY29uZGl0aW9uYWwgcGlwZSB3aGlsZSBsb29wXHJcbiAqINCU0L4g0L3QsNGH0LDQu9CwINCy0YvQv9C+0LvQvdC10L3QuNGPIHBpcGUg0L/RgNC+0LLQtdGA0Y/QtdGCLCDQtdGB0LvQuCBicmVha0NvbmRpdGlvbijQv9GA0L7QvNC10LbRg9GC0L7Rh9C90YvQuSDRgNC10LfRg9C70YzRgtCw0YIpINCx0YPQtNC10YIg0YDQsNCy0L3QviBmYWxzZSwg0L3QsNGH0LjQvdCw0LXRgiDQstGL0L/QvtC70L3Rj9GC0YwgcGlwZS4g0J/QviDQvtC60L7QvdGH0LDQvdC40LggcGlwZSDRgdC90L7QstCwINC90LDRh9C40L3QsNC10YIg0YbQuNC60LtcclxuICog0J/RgNC10LrRgNCw0YnQsNC10YIgcGlwZSDQstC80LXRgdGC0LUg0YEg0YbQuNC60LvQvtC8INCyINGC0L7RgiDQvNC+0LzQtdC90YIsINC60L7Qs9C00LAgYnJlYWtDb25kaXRpb24o0L/RgNC+0LzQtdC20YPRgtC+0YfQvdGL0Lkg0YDQtdC30YPQu9GM0YLQsNGCKSDQsdGD0LTQtdGCINGA0LDQstC90L4gdHJ1ZS5cclxuICogQHBhcmFtIHtmdW5jdGlvbn0gYnJlYWtDb25kaXRpb24gLSBjb25kaXRpb24gZm9yIGJyZWFrIHBpcGUgYW5kIGxvb3BcclxuICogQHJldHVybnMge2Z1bmN0aW9ufVxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IHdQaXBlID0gKGJyZWFrQ29uZGl0aW9uKT0+KC4uLmZucyk9PihzdGF0ZSk9PntcclxuICB3aGlsZSAoIWJyZWFrQ29uZGl0aW9uKHN0YXRlKSkgc3RhdGUgPSBjUGlwZShicmVha0NvbmRpdGlvbikoLi4uZm5zKShzdGF0ZSk7XHJcbiAgcmV0dXJuIHN0YXRlO1xyXG59O1xyXG4iXX0=

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var makePipeReadyOneArg = function makePipeReadyOneArg(f, inputHash, outputHash) {
  return function (_ref) {
    var state = _objectWithoutProperties(_ref, []);

    state[outputHash || inputHash] = f(state[inputHash]);
    return state;
  };
};

exports.makePipeReadyOneArg = makePipeReadyOneArg;
var makePipeReady = exports.makePipeReady = function makePipeReady(f, inputHashes, outputHash) {
  return function (state) {
    var result = f.apply(undefined, _toConsumableArray(inputHashes.map(function (inputHash) {
      return state[inputHash];
    })));
    return outputHash ? _extends({}, state, _defineProperty({}, outputHash, result)) : _extends({}, state, result);
  };
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyY1xcaGVscGVycy5qcyJdLCJuYW1lcyI6WyJtYWtlUGlwZVJlYWR5T25lQXJnIiwiZiIsImlucHV0SGFzaCIsIm91dHB1dEhhc2giLCJzdGF0ZSIsIm1ha2VQaXBlUmVhZHkiLCJpbnB1dEhhc2hlcyIsInJlc3VsdCIsIm1hcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBTyxJQUFNQSxzQkFBc0IsU0FBdEJBLG1CQUFzQixDQUFDQyxDQUFELEVBQUlDLFNBQUosRUFBZUMsVUFBZjtBQUFBLFNBQThCLGdCQUFnQjtBQUFBLFFBQVhDLEtBQVc7O0FBQy9FQSxVQUFNRCxjQUFjRCxTQUFwQixJQUFpQ0QsRUFBRUcsTUFBTUYsU0FBTixDQUFGLENBQWpDO0FBQ0EsV0FBT0UsS0FBUDtBQUNELEdBSGtDO0FBQUEsQ0FBNUI7OztBQUtBLElBQU1DLHdDQUFnQixTQUFoQkEsYUFBZ0IsQ0FBQ0osQ0FBRCxFQUFJSyxXQUFKLEVBQWlCSCxVQUFqQjtBQUFBLFNBQWdDLFVBQUNDLEtBQUQsRUFBVztBQUN0RSxRQUFNRyxTQUFPTixzQ0FBS0ssWUFBWUUsR0FBWixDQUFnQjtBQUFBLGFBQWFKLE1BQU1GLFNBQU4sQ0FBYjtBQUFBLEtBQWhCLENBQUwsRUFBYjtBQUNBLFdBQU9DLDBCQUFpQkMsS0FBakIsc0JBQXlCRCxVQUF6QixFQUFzQ0ksTUFBdEMsa0JBQW1ESCxLQUFuRCxFQUE2REcsTUFBN0QsQ0FBUDtBQUNELEdBSDRCO0FBQUEsQ0FBdEIiLCJmaWxlIjoiaGVscGVycy5qcyIsInNvdXJjZVJvb3QiOiJDOi9Vc2Vycy9tb3NoY2hhbnNraXkvV2Vic3Rvcm1Qcm9qZWN0cy9jb25kaXRpb25hbC1waXBpbmciLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgbWFrZVBpcGVSZWFkeU9uZUFyZyA9IChmLCBpbnB1dEhhc2gsIG91dHB1dEhhc2gpID0+ICh7Li4uc3RhdGV9KSA9PiB7XHJcbiAgc3RhdGVbb3V0cHV0SGFzaCB8fCBpbnB1dEhhc2hdID0gZihzdGF0ZVtpbnB1dEhhc2hdKTtcclxuICByZXR1cm4gc3RhdGU7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgbWFrZVBpcGVSZWFkeSA9IChmLCBpbnB1dEhhc2hlcywgb3V0cHV0SGFzaCkgPT4gKHN0YXRlKSA9PiB7XHJcbiAgY29uc3QgcmVzdWx0PWYoLi4uaW5wdXRIYXNoZXMubWFwKGlucHV0SGFzaCA9PiBzdGF0ZVtpbnB1dEhhc2hdKSk7XHJcbiAgcmV0dXJuIG91dHB1dEhhc2ggPyB7Li4uc3RhdGUsIFtvdXRwdXRIYXNoXTogcmVzdWx0fTogey4uLnN0YXRlLCAuLi5yZXN1bHR9O1xyXG59OyJdfQ==

/***/ })
/******/ ]);
});