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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
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
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _cPipeNCompose = __webpack_require__(0);

var _dPipe = __webpack_require__(2);

var _wPipe = __webpack_require__(3);

var _pipesAndComposesCb = __webpack_require__(4);

var _helpers = __webpack_require__(5);

module.exports = { cPipe: _cPipeNCompose.cPipeWithFor, dPipe: _dPipe.dPipeWithFor, wPipe: _wPipe.wPipe, cCompose: _cPipeNCompose.cCompose,
  pipeCb: _pipesAndComposesCb.pipeCb, composeCb: _pipesAndComposesCb.composeCb, cPipeCb: _pipesAndComposesCb.cPipeCb, cComposeCb: _pipesAndComposesCb.cComposeCb, dPipeCb: _pipesAndComposesCb.dPipeCb, wPipeCb: _pipesAndComposesCb.wPipeCb, dComposeCb: _pipesAndComposesCb.dComposeCb, wComposeCb: _pipesAndComposesCb.wComposeCb,
  makePipeReadyOneArg: _helpers.makePipeReadyOneArg, makePipeReady: _helpers.makePipeReady, makePipeReadyOneArgCb: _helpers.makePipeReadyOneArgCb, makePipeReadyCb: _helpers.makePipeReadyCb };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJjUGlwZSIsImRQaXBlIiwid1BpcGUiLCJjQ29tcG9zZSIsInBpcGVDYiIsImNvbXBvc2VDYiIsImNQaXBlQ2IiLCJjQ29tcG9zZUNiIiwiZFBpcGVDYiIsIndQaXBlQ2IiLCJkQ29tcG9zZUNiIiwid0NvbXBvc2VDYiIsIm1ha2VQaXBlUmVhZHlPbmVBcmciLCJtYWtlUGlwZVJlYWR5IiwibWFrZVBpcGVSZWFkeU9uZUFyZ0NiIiwibWFrZVBpcGVSZWFkeUNiIl0sIm1hcHBpbmdzIjoiOztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUVBQSxPQUFPQyxPQUFQLEdBQWlCLEVBQUNDLGtDQUFELEVBQVFDLDBCQUFSLEVBQWVDLG1CQUFmLEVBQXNCQyxpQ0FBdEI7QUFDZkMsb0NBRGUsRUFDUEMsd0NBRE8sRUFDSUMsb0NBREosRUFDYUMsMENBRGIsRUFDeUJDLG9DQUR6QixFQUNrQ0Msb0NBRGxDLEVBQzJDQywwQ0FEM0MsRUFDdURDLDBDQUR2RDtBQUVmQyxtREFGZSxFQUVNQyxxQ0FGTixFQUVxQkMscURBRnJCLEVBRTRDQyx5Q0FGNUMsRUFBakIiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiQzovVXNlcnMvbW9zaGNoYW5za2l5L1dlYnN0b3JtUHJvamVjdHMvY29uZGl0aW9uYWwtcGlwaW5nIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtjUGlwZVdpdGhGb3IgYXMgY1BpcGUsIGNDb21wb3NlfSBmcm9tIFwiLi9zcmMvY1BpcGVOQ29tcG9zZVwiO1xyXG5pbXBvcnQge2RQaXBlV2l0aEZvciBhcyBkUGlwZX0gZnJvbSBcIi4vc3JjL2RQaXBlXCI7XHJcbmltcG9ydCB7d1BpcGV9IGZyb20gXCIuL3NyYy93UGlwZVwiO1xyXG5pbXBvcnQge3BpcGVDYiwgY29tcG9zZUNiLCBjUGlwZUNiLCBjQ29tcG9zZUNiLCBkUGlwZUNiLCB3UGlwZUNiLCBkQ29tcG9zZUNiLCB3Q29tcG9zZUNifSBmcm9tIFwiLi9zcmMvcGlwZXNBbmRDb21wb3Nlc0NiXCI7XHJcbmltcG9ydCB7bWFrZVBpcGVSZWFkeU9uZUFyZywgbWFrZVBpcGVSZWFkeSwgbWFrZVBpcGVSZWFkeUNiLCBtYWtlUGlwZVJlYWR5T25lQXJnQ2J9IGZyb20gXCIuL3NyYy9oZWxwZXJzXCI7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtjUGlwZSwgZFBpcGUsIHdQaXBlLCBjQ29tcG9zZSxcclxuICBwaXBlQ2IsIGNvbXBvc2VDYiwgY1BpcGVDYiwgY0NvbXBvc2VDYiwgZFBpcGVDYiwgd1BpcGVDYiwgZENvbXBvc2VDYiwgd0NvbXBvc2VDYixcclxuICBtYWtlUGlwZVJlYWR5T25lQXJnLCBtYWtlUGlwZVJlYWR5LCBtYWtlUGlwZVJlYWR5T25lQXJnQ2IsIG1ha2VQaXBlUmVhZHlDYn07Il19

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dPipeWithFor = exports.dPipeWithCPipeWithForConst = exports.dPipeWithCPipeWithFor = undefined;

var _cPipeNCompose = __webpack_require__(0);

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
/**
 * @todo /1/ Протестировать wCompose и сделать его экспорт!
 * conditional pipe while loop
 * До начала выполнения pipe проверяет, если breakCondition(промежуточный результат) будет равно false, начинает выполнять pipe. По окончании pipe снова начинает цикл
 * Прекращает pipe вместе с циклом в тот момент, когда breakCondition(промежуточный результат) будет равно true.
 * @param {function} breakCondition - condition for break pipe and loop
 * @returns {function}
 */
var wCompose = exports.wCompose = function wCompose(breakCondition) {
  return function () {
    for (var _len = arguments.length, fns = Array(_len), _key = 0; _key < _len; _key++) {
      fns[_key] = arguments[_key];
    }

    return function (state) {
      while (!breakCondition(state)) {
        for (var i = fns.length - 1; 0 <= i; i--) {
          state = fns[i](state);
          if (breakCondition(state)) break;
        }
      }return state;
    };
  };
};

var wPipe = exports.wPipe = function wPipe(breakCondition) {
  return function () {
    for (var _len2 = arguments.length, fns = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      fns[_key2] = arguments[_key2];
    }

    return function (state) {
      while (!breakCondition(state)) {
        for (var i = 0; i < fns.length; i++) {
          state = fns[i](state);
          if (breakCondition(state)) break;
        }
      }return state;
    };
  };
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyY1xcd1BpcGUuanMiXSwibmFtZXMiOlsid0NvbXBvc2UiLCJicmVha0NvbmRpdGlvbiIsImZucyIsInN0YXRlIiwiaSIsImxlbmd0aCIsIndQaXBlIl0sIm1hcHBpbmdzIjoiOzs7OztBQUFBOzs7Ozs7OztBQVFPLElBQU1BLDhCQUFXLFNBQVhBLFFBQVcsQ0FBQ0MsY0FBRDtBQUFBLFNBQWtCO0FBQUEsc0NBQUlDLEdBQUo7QUFBSUEsU0FBSjtBQUFBOztBQUFBLFdBQVUsVUFBQ0MsS0FBRCxFQUFTO0FBQzNELGFBQU8sQ0FBQ0YsZUFBZUUsS0FBZixDQUFSO0FBQStCLGFBQUssSUFBSUMsSUFBRUYsSUFBSUcsTUFBSixHQUFXLENBQXRCLEVBQXlCLEtBQUdELENBQTVCLEVBQStCQSxHQUEvQixFQUFvQztBQUNqRUQsa0JBQVFELElBQUlFLENBQUosRUFBT0QsS0FBUCxDQUFSO0FBQ0EsY0FBSUYsZUFBZUUsS0FBZixDQUFKLEVBQTJCO0FBQzVCO0FBSEQsT0FJQSxPQUFPQSxLQUFQO0FBQ0QsS0FOeUM7QUFBQSxHQUFsQjtBQUFBLENBQWpCOztBQVFBLElBQU1HLHdCQUFRLFNBQVJBLEtBQVEsQ0FBQ0wsY0FBRDtBQUFBLFNBQWtCO0FBQUEsdUNBQUlDLEdBQUo7QUFBSUEsU0FBSjtBQUFBOztBQUFBLFdBQVUsVUFBQ0MsS0FBRCxFQUFTO0FBQ3hELGFBQU8sQ0FBQ0YsZUFBZUUsS0FBZixDQUFSO0FBQStCLGFBQUssSUFBSUMsSUFBRSxDQUFYLEVBQWNBLElBQUVGLElBQUlHLE1BQXBCLEVBQTRCRCxHQUE1QixFQUFpQztBQUM5REQsa0JBQVFELElBQUlFLENBQUosRUFBT0QsS0FBUCxDQUFSO0FBQ0EsY0FBSUYsZUFBZUUsS0FBZixDQUFKLEVBQTJCO0FBQzVCO0FBSEQsT0FJQSxPQUFPQSxLQUFQO0FBQ0QsS0FOc0M7QUFBQSxHQUFsQjtBQUFBLENBQWQiLCJmaWxlIjoid1BpcGUuanMiLCJzb3VyY2VSb290IjoiQzovVXNlcnMvbW9zaGNoYW5za2l5L1dlYnN0b3JtUHJvamVjdHMvY29uZGl0aW9uYWwtcGlwaW5nIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEB0b2RvIC8xLyDQn9GA0L7RgtC10YHRgtC40YDQvtCy0LDRgtGMIHdDb21wb3NlINC4INGB0LTQtdC70LDRgtGMINC10LPQviDRjdC60YHQv9C+0YDRgiFcclxuICogY29uZGl0aW9uYWwgcGlwZSB3aGlsZSBsb29wXHJcbiAqINCU0L4g0L3QsNGH0LDQu9CwINCy0YvQv9C+0LvQvdC10L3QuNGPIHBpcGUg0L/RgNC+0LLQtdGA0Y/QtdGCLCDQtdGB0LvQuCBicmVha0NvbmRpdGlvbijQv9GA0L7QvNC10LbRg9GC0L7Rh9C90YvQuSDRgNC10LfRg9C70YzRgtCw0YIpINCx0YPQtNC10YIg0YDQsNCy0L3QviBmYWxzZSwg0L3QsNGH0LjQvdCw0LXRgiDQstGL0L/QvtC70L3Rj9GC0YwgcGlwZS4g0J/QviDQvtC60L7QvdGH0LDQvdC40LggcGlwZSDRgdC90L7QstCwINC90LDRh9C40L3QsNC10YIg0YbQuNC60LtcclxuICog0J/RgNC10LrRgNCw0YnQsNC10YIgcGlwZSDQstC80LXRgdGC0LUg0YEg0YbQuNC60LvQvtC8INCyINGC0L7RgiDQvNC+0LzQtdC90YIsINC60L7Qs9C00LAgYnJlYWtDb25kaXRpb24o0L/RgNC+0LzQtdC20YPRgtC+0YfQvdGL0Lkg0YDQtdC30YPQu9GM0YLQsNGCKSDQsdGD0LTQtdGCINGA0LDQstC90L4gdHJ1ZS5cclxuICogQHBhcmFtIHtmdW5jdGlvbn0gYnJlYWtDb25kaXRpb24gLSBjb25kaXRpb24gZm9yIGJyZWFrIHBpcGUgYW5kIGxvb3BcclxuICogQHJldHVybnMge2Z1bmN0aW9ufVxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IHdDb21wb3NlID0gKGJyZWFrQ29uZGl0aW9uKT0+KC4uLmZucyk9PihzdGF0ZSk9PntcclxuICB3aGlsZSAoIWJyZWFrQ29uZGl0aW9uKHN0YXRlKSkgZm9yIChsZXQgaT1mbnMubGVuZ3RoLTE7IDA8PWk7IGktLSkge1xyXG4gICAgc3RhdGUgPSBmbnNbaV0oc3RhdGUpO1xyXG4gICAgaWYgKGJyZWFrQ29uZGl0aW9uKHN0YXRlKSkgYnJlYWs7XHJcbiAgfVxyXG4gIHJldHVybiBzdGF0ZTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCB3UGlwZSA9IChicmVha0NvbmRpdGlvbik9PiguLi5mbnMpPT4oc3RhdGUpPT57XHJcbiAgd2hpbGUgKCFicmVha0NvbmRpdGlvbihzdGF0ZSkpIGZvciAobGV0IGk9MDsgaTxmbnMubGVuZ3RoOyBpKyspIHtcclxuICAgIHN0YXRlID0gZm5zW2ldKHN0YXRlKTtcclxuICAgIGlmIChicmVha0NvbmRpdGlvbihzdGF0ZSkpIGJyZWFrO1xyXG4gIH1cclxuICByZXR1cm4gc3RhdGU7XHJcbn07Il19

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var pipeCb = exports.pipeCb = function pipeCb() {
  for (var _len = arguments.length, fns = Array(_len), _key = 0; _key < _len; _key++) {
    fns[_key] = arguments[_key];
  }

  return function (state, cb) {
    var i = 0;
    var innerCb = function innerCb(err, state) {
      return fns.length === ++i ? cb(err, state) : fns[i](state, innerCb);
    };
    fns[i](state, innerCb);
  };
};

var cPipeCb = exports.cPipeCb = function cPipeCb(breakCondition) {
  return function () {
    for (var _len2 = arguments.length, fns = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      fns[_key2] = arguments[_key2];
    }

    return function (state, cb) {
      var i = 0;
      var innerCb = function innerCb(err, state) {
        return breakCondition(state) || fns.length === ++i ? cb(err, state) : fns[i](state, innerCb);
      };
      fns[i](state, innerCb);
    };
  };
};

var dPipeCb = exports.dPipeCb = function dPipeCb(breakCondition) {
  return function () {
    for (var _len3 = arguments.length, fns = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      fns[_key3] = arguments[_key3];
    }

    return function (state, cb) {
      var i = 0;
      var innerCb = function innerCb(err, state) {
        if (fns.length === ++i) i = 0;
        breakCondition(state) ? cb(err, state) : fns[i](state, innerCb);
      };
      fns[i](state, innerCb);
    };
  };
};

var wPipeCb = exports.wPipeCb = function wPipeCb(breakCondition) {
  return function () {
    for (var _len4 = arguments.length, fns = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
      fns[_key4] = arguments[_key4];
    }

    return function (state, cb) {
      var i = 0;
      var innerCb = function innerCb(err, state) {
        if (fns.length === i) i = 0;
        breakCondition(state) ? cb(err, state) : fns[i++](state, innerCb);
      };
      innerCb(null, state);
    };
  };
};

var composeCb = exports.composeCb = function composeCb() {
  for (var _len5 = arguments.length, fns = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
    fns[_key5] = arguments[_key5];
  }

  return function (state, cb) {
    var i = fns.length - 1;
    var innerCb = function innerCb(err, state) {
      return --i < 0 ? cb(err, state) : fns[i](state, innerCb);
    };
    fns[i](state, innerCb);
  };
};

var cComposeCb = exports.cComposeCb = function cComposeCb(breakCondition) {
  return function () {
    for (var _len6 = arguments.length, fns = Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
      fns[_key6] = arguments[_key6];
    }

    return function (state, cb) {
      var i = fns.length - 1;
      var innerCb = function innerCb(err, state) {
        return breakCondition(state) || --i < 0 ? cb(err, state) : fns[i](state, innerCb);
      };
      fns[i](state, innerCb);
    };
  };
};

var dComposeCb = exports.dComposeCb = function dComposeCb(breakCondition) {
  return function () {
    for (var _len7 = arguments.length, fns = Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
      fns[_key7] = arguments[_key7];
    }

    return function (state, cb) {
      var lastI = fns.length - 1;
      var i = lastI;
      var innerCb = function innerCb(err, state) {
        if (--i < 0) i = lastI;
        breakCondition(state) ? cb(err, state) : fns[i](state, innerCb);
      };
      fns[i](state, innerCb);
    };
  };
};

var wComposeCb = exports.wComposeCb = function wComposeCb(breakCondition) {
  return function () {
    for (var _len8 = arguments.length, fns = Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
      fns[_key8] = arguments[_key8];
    }

    return function (state, cb) {
      var lastI = fns.length - 1;
      var i = lastI;
      var innerCb = function innerCb(err, state) {
        if (i < 0) i = lastI;
        breakCondition(state) ? cb(err, state) : fns[i--](state, innerCb);
      };
      innerCb(null, state);
    };
  };
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyY1xccGlwZXNBbmRDb21wb3Nlc0NiLmpzIl0sIm5hbWVzIjpbInBpcGVDYiIsImZucyIsInN0YXRlIiwiY2IiLCJpIiwiaW5uZXJDYiIsImVyciIsImxlbmd0aCIsImNQaXBlQ2IiLCJicmVha0NvbmRpdGlvbiIsImRQaXBlQ2IiLCJ3UGlwZUNiIiwiY29tcG9zZUNiIiwiY0NvbXBvc2VDYiIsImRDb21wb3NlQ2IiLCJsYXN0SSIsIndDb21wb3NlQ2IiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQU8sSUFBTUEsMEJBQVMsU0FBVEEsTUFBUztBQUFBLG9DQUFJQyxHQUFKO0FBQUlBLE9BQUo7QUFBQTs7QUFBQSxTQUFVLFVBQUNDLEtBQUQsRUFBUUMsRUFBUixFQUFhO0FBQzNDLFFBQUlDLElBQUUsQ0FBTjtBQUNBLFFBQU1DLFVBQVUsU0FBVkEsT0FBVSxDQUFDQyxHQUFELEVBQU1KLEtBQU47QUFBQSxhQUFlRCxJQUFJTSxNQUFKLEtBQWUsRUFBRUgsQ0FBakIsR0FBcUJELEdBQUdHLEdBQUgsRUFBUUosS0FBUixDQUFyQixHQUFzQ0QsSUFBSUcsQ0FBSixFQUFPRixLQUFQLEVBQWNHLE9BQWQsQ0FBckQ7QUFBQSxLQUFoQjtBQUNBSixRQUFJRyxDQUFKLEVBQU9GLEtBQVAsRUFBY0csT0FBZDtBQUNELEdBSnFCO0FBQUEsQ0FBZjs7QUFNQSxJQUFNRyw0QkFBVSxTQUFWQSxPQUFVLENBQUNDLGNBQUQ7QUFBQSxTQUFrQjtBQUFBLHVDQUFJUixHQUFKO0FBQUlBLFNBQUo7QUFBQTs7QUFBQSxXQUFVLFVBQUNDLEtBQUQsRUFBUUMsRUFBUixFQUFhO0FBQzlELFVBQUlDLElBQUUsQ0FBTjtBQUNBLFVBQU1DLFVBQVUsU0FBVkEsT0FBVSxDQUFDQyxHQUFELEVBQU1KLEtBQU47QUFBQSxlQUFnQk8sZUFBZVAsS0FBZixLQUF5QkQsSUFBSU0sTUFBSixLQUFlLEVBQUVILENBQTNDLEdBQWdERCxHQUFHRyxHQUFILEVBQVFKLEtBQVIsQ0FBaEQsR0FBaUVELElB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InBpcGVzQW5kQ29tcG9zZXNDYi5qcyIsInNvdXJjZVJvb3QiOiJDOi9Vc2Vycy9tb3NoY2hhbnNraXkvV2Vic3Rvcm1Qcm9qZWN0cy9jb25kaXRpb25hbC1waXBpbmciLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgcGlwZUNiID0gKC4uLmZucyk9PihzdGF0ZSwgY2IpPT57XHJcbiAgbGV0IGk9MDtcclxuICBjb25zdCBpbm5lckNiID0gKGVyciwgc3RhdGUpPT4gZm5zLmxlbmd0aCA9PT0gKytpID8gY2IoZXJyLCBzdGF0ZSkgOiBmbnNbaV0oc3RhdGUsIGlubmVyQ2IpO1xyXG4gIGZuc1tpXShzdGF0ZSwgaW5uZXJDYik7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgY1BpcGVDYiA9IChicmVha0NvbmRpdGlvbik9PiguLi5mbnMpPT4oc3RhdGUsIGNiKT0+e1xyXG4gIGxldCBpPTA7XHJcbiAgY29uc3QgaW5uZXJDYiA9IChlcnIsIHN0YXRlKT0+IChicmVha0NvbmRpdGlvbihzdGF0ZSkgfHwgZm5zLmxlbmd0aCA9PT0gKytpKSA/IGNiKGVyciwgc3RhdGUpIDogZm5zW2ldKHN0YXRlLCBpbm5lckNiKTtcclxuICBmbnNbaV0oc3RhdGUsIGlubmVyQ2IpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGRQaXBlQ2IgPSAoYnJlYWtDb25kaXRpb24pPT4oLi4uZm5zKT0+KHN0YXRlLCBjYik9PntcclxuICBsZXQgaT0wO1xyXG4gIGNvbnN0IGlubmVyQ2IgPSAoZXJyLCBzdGF0ZSk9PiB7XHJcbiAgICBpZiAoZm5zLmxlbmd0aCA9PT0gKytpKSBpID0gMDtcclxuICAgIGJyZWFrQ29uZGl0aW9uKHN0YXRlKSA/IGNiKGVyciwgc3RhdGUpIDogZm5zW2ldKHN0YXRlLCBpbm5lckNiKTtcclxuICB9O1xyXG4gIGZuc1tpXShzdGF0ZSwgaW5uZXJDYik7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3Qgd1BpcGVDYiA9IChicmVha0NvbmRpdGlvbik9PiguLi5mbnMpPT4oc3RhdGUsIGNiKT0+e1xyXG4gIGxldCBpPTA7XHJcbiAgY29uc3QgaW5uZXJDYiA9IChlcnIsIHN0YXRlKT0+IHtcclxuICAgIGlmIChmbnMubGVuZ3RoID09PSBpKSBpID0gMDtcclxuICAgIGJyZWFrQ29uZGl0aW9uKHN0YXRlKSA/IGNiKGVyciwgc3RhdGUpIDogZm5zW2krK10oc3RhdGUsIGlubmVyQ2IpO1xyXG4gIH07XHJcbiAgaW5uZXJDYihudWxsLCBzdGF0ZSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgY29tcG9zZUNiID0gKC4uLmZucyk9PihzdGF0ZSwgY2IpPT57XHJcbiAgbGV0IGk9Zm5zLmxlbmd0aC0xO1xyXG4gIGNvbnN0IGlubmVyQ2IgPSAoZXJyLCBzdGF0ZSk9PiAtLWkgPCAwID8gY2IoZXJyLCBzdGF0ZSkgOiBmbnNbaV0oc3RhdGUsIGlubmVyQ2IpO1xyXG4gIGZuc1tpXShzdGF0ZSwgaW5uZXJDYik7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgY0NvbXBvc2VDYiA9IChicmVha0NvbmRpdGlvbik9PiguLi5mbnMpPT4oc3RhdGUsIGNiKT0+e1xyXG4gIGxldCBpPWZucy5sZW5ndGgtMTtcclxuICBjb25zdCBpbm5lckNiID0gKGVyciwgc3RhdGUpPT4gKGJyZWFrQ29uZGl0aW9uKHN0YXRlKSB8fCAtLWkgPCAwKSA/IGNiKGVyciwgc3RhdGUpIDogZm5zW2ldKHN0YXRlLCBpbm5lckNiKTtcclxuICBmbnNbaV0oc3RhdGUsIGlubmVyQ2IpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGRDb21wb3NlQ2IgPSAoYnJlYWtDb25kaXRpb24pPT4oLi4uZm5zKT0+KHN0YXRlLCBjYik9PntcclxuICBjb25zdCBsYXN0SSA9IGZucy5sZW5ndGgtMTtcclxuICBsZXQgaT1sYXN0STtcclxuICBjb25zdCBpbm5lckNiID0gKGVyciwgc3RhdGUpPT4ge1xyXG4gICAgaWYgKC0taSA8IDApIGkgPSBsYXN0STtcclxuICAgIGJyZWFrQ29uZGl0aW9uKHN0YXRlKSA/IGNiKGVyciwgc3RhdGUpIDogZm5zW2ldKHN0YXRlLCBpbm5lckNiKTtcclxuICB9O1xyXG4gIGZuc1tpXShzdGF0ZSwgaW5uZXJDYik7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3Qgd0NvbXBvc2VDYiA9IChicmVha0NvbmRpdGlvbik9PiguLi5mbnMpPT4oc3RhdGUsIGNiKT0+e1xyXG4gIGNvbnN0IGxhc3RJID0gZm5zLmxlbmd0aC0xO1xyXG4gIGxldCBpPWxhc3RJO1xyXG4gIGNvbnN0IGlubmVyQ2IgPSAoZXJyLCBzdGF0ZSk9PiB7XHJcbiAgICBpZiAoaSA8IDApIGkgPSBsYXN0STtcclxuICAgIGJyZWFrQ29uZGl0aW9uKHN0YXRlKSA/IGNiKGVyciwgc3RhdGUpIDogZm5zW2ktLV0oc3RhdGUsIGlubmVyQ2IpO1xyXG4gIH07XHJcbiAgaW5uZXJDYihudWxsLCBzdGF0ZSk7XHJcbn07Il19

/***/ }),
/* 5 */
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
var makePipeReadyOneArgCb = function makePipeReadyOneArgCb(f, inputHash, outputHash) {
  return function (_ref2, cb) {
    var state = _objectWithoutProperties(_ref2, []);

    f(state[inputHash], function (err, res) {
      state[outputHash || inputHash] = res;
      cb(err, state);
    });
  };
};

exports.makePipeReadyOneArgCb = makePipeReadyOneArgCb;
var makePipeReady = exports.makePipeReady = function makePipeReady(f, inputHashes, outputHash) {
  return function (state) {
    var result = f.apply(undefined, _toConsumableArray(inputHashes.map(function (inputHash) {
      return state[inputHash];
    })));
    return outputHash ? _extends({}, state, _defineProperty({}, outputHash, result)) : _extends({}, state, result);
  };
};

var makePipeReadyCb = exports.makePipeReadyCb = function makePipeReadyCb(f, inputHashes, outputHash) {
  return function (state, cb) {
    f.apply(undefined, _toConsumableArray(inputHashes.map(function (inputHash) {
      return state[inputHash];
    })).concat([function (err, res) {
      cb(err, outputHash ? _extends({}, state, _defineProperty({}, outputHash, res)) : _extends({}, state, res));
    }]));
  };
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyY1xcaGVscGVycy5qcyJdLCJuYW1lcyI6WyJtYWtlUGlwZVJlYWR5T25lQXJnIiwiZiIsImlucHV0SGFzaCIsIm91dHB1dEhhc2giLCJzdGF0ZSIsIm1ha2VQaXBlUmVhZHlPbmVBcmdDYiIsImNiIiwiZXJyIiwicmVzIiwibWFrZVBpcGVSZWFkeSIsImlucHV0SGFzaGVzIiwicmVzdWx0IiwibWFwIiwibWFrZVBpcGVSZWFkeUNiIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFPLElBQU1BLHNCQUFzQixTQUF0QkEsbUJBQXNCLENBQUNDLENBQUQsRUFBSUMsU0FBSixFQUFlQyxVQUFmO0FBQUEsU0FBOEIsZ0JBQWdCO0FBQUEsUUFBWEMsS0FBVzs7QUFDL0VBLFVBQU1ELGNBQWNELFNBQXBCLElBQWlDRCxFQUFFRyxNQUFNRixTQUFOLENBQUYsQ0FBakM7QUFDQSxXQUFPRSxLQUFQO0FBQ0QsR0FIa0M7QUFBQSxDQUE1Qjs7O0FBS0EsSUFBTUMsd0JBQXdCLFNBQXhCQSxxQkFBd0IsQ0FBQ0osQ0FBRCxFQUFJQyxTQUFKLEVBQWVDLFVBQWY7QUFBQSxTQUE4QixpQkFBWUcsRUFBWixFQUFtQjtBQUFBLFFBQWRGLEtBQWM7O0FBQ3BGSCxNQUFFRyxNQUFNRixTQUFOLENBQUYsRUFBbUIsVUFBQ0ssR0FBRCxFQUFNQyxHQUFOLEVBQWE7QUFDOUJKLFlBQU1ELGNBQWNELFNBQXBCLElBQWlDTSxHQUFqQztBQUNBRixTQUFHQyxHQUFILEVBQU9ILEtBQVA7QUFDRCxLQUhEO0FBSUQsR0FMb0M7QUFBQSxDQUE5Qjs7O0FBT0EsSUFBTUssd0NBQWdCLFNBQWhCQSxhQUFnQixDQUFDUixDQUFELEVBQUlTLFdBQUosRUFBaUJQLFVBQWpCO0FBQUEsU0FBZ0MsVUFBQ0MsS0FBRCxFQUFXO0FBQ3RFLFFBQU1PLFNBQU9WLHNDQUFLUyxZQUFZRSxHQUFaLENBQWdCO0FBQUEsYUFBYVIsTUFBTUYsU0FBTixDQUFiO0FBQUEsS0FBaEIsQ0FBTCxFQUFiO0FBQ0EsV0FBT0MsMEJBQWlCQyxLQUFqQixzQkFBeUJELFVBQXpCLEVBQXNDUSxNQUF0QyxrQkFBbURQLEtBQW5ELEVBQTZETyxNQUE3RCxDQUFQO0FBQ0QsR0FINEI7QUFBQSxDQUF0Qjs7QUFLQSxJQUFNRSw0Q0FBa0IsU0FBbEJBLGVBQWtCLENBQUNaLENBQUQsRUFBSVMsV0FBSixFQUFpQlAsVUFBakI7QUFBQSxTQUFnQyxVQUFDQyxLQUFELEVBQVFFLEVBQVIsRUFBZTtBQUM1RUwsMENBQUtTLFlBQVlFLEdBQVosQ0FBZ0I7QUFBQSxhQUFhUixNQUFNRixTQUFOLENBQWI7QUFBQSxLQUFoQixDQUFMLFVBQXFELFVBQUNLLEdBQUQsRUFBTUMsR0FBTixFQUFZO0FBQy9ERixTQUFHQyxHQUFILEVBQVFKLDBCQUFpQkMsS0FBakIsc0JBQXlCRCxVQUF6QixFQUFzQ0ssR0FBdEMsa0JBQWdESixLQUFoRCxFQUEwREksR0FBMUQsQ0FBUjtBQUNELEtBRkQ7QUFHRCxHQUo4QjtBQUFBLENBQXhCIiwiZmlsZSI6ImhlbHBlcnMuanMiLCJzb3VyY2VSb290IjoiQzovVXNlcnMvbW9zaGNoYW5za2l5L1dlYnN0b3JtUHJvamVjdHMvY29uZGl0aW9uYWwtcGlwaW5nIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IG1ha2VQaXBlUmVhZHlPbmVBcmcgPSAoZiwgaW5wdXRIYXNoLCBvdXRwdXRIYXNoKSA9PiAoey4uLnN0YXRlfSkgPT4ge1xyXG4gIHN0YXRlW291dHB1dEhhc2ggfHwgaW5wdXRIYXNoXSA9IGYoc3RhdGVbaW5wdXRIYXNoXSk7XHJcbiAgcmV0dXJuIHN0YXRlO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IG1ha2VQaXBlUmVhZHlPbmVBcmdDYiA9IChmLCBpbnB1dEhhc2gsIG91dHB1dEhhc2gpID0+ICh7Li4uc3RhdGV9LGNiKSA9PiB7XHJcbiAgZihzdGF0ZVtpbnB1dEhhc2hdLChlcnIsIHJlcyk9PiB7XHJcbiAgICBzdGF0ZVtvdXRwdXRIYXNoIHx8IGlucHV0SGFzaF0gPSByZXM7XHJcbiAgICBjYihlcnIsc3RhdGUpO1xyXG4gIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IG1ha2VQaXBlUmVhZHkgPSAoZiwgaW5wdXRIYXNoZXMsIG91dHB1dEhhc2gpID0+IChzdGF0ZSkgPT4ge1xyXG4gIGNvbnN0IHJlc3VsdD1mKC4uLmlucHV0SGFzaGVzLm1hcChpbnB1dEhhc2ggPT4gc3RhdGVbaW5wdXRIYXNoXSkpO1xyXG4gIHJldHVybiBvdXRwdXRIYXNoID8gey4uLnN0YXRlLCBbb3V0cHV0SGFzaF06IHJlc3VsdH06IHsuLi5zdGF0ZSwgLi4ucmVzdWx0fTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBtYWtlUGlwZVJlYWR5Q2IgPSAoZiwgaW5wdXRIYXNoZXMsIG91dHB1dEhhc2gpID0+IChzdGF0ZSwgY2IpID0+IHtcclxuICBmKC4uLmlucHV0SGFzaGVzLm1hcChpbnB1dEhhc2ggPT4gc3RhdGVbaW5wdXRIYXNoXSksIChlcnIsIHJlcyk9PntcclxuICAgIGNiKGVyciwgb3V0cHV0SGFzaCA/IHsuLi5zdGF0ZSwgW291dHB1dEhhc2hdOiByZXN9OiB7Li4uc3RhdGUsIC4uLnJlc30pO1xyXG4gIH0pO1xyXG59OyJdfQ==

/***/ })
/******/ ]);
});