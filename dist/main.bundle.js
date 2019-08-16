(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/actions/jnote.js":
/*!******************************!*\
  !*** ./src/actions/jnote.js ***!
  \******************************/
/*! exports provided: scrollChange, shortcutChange, adminChange, openDialog, closeDialog, toggleFavorite, togglePreview, writeNote, editNote, deleteNote, getList, getOne, updateForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scrollChange", function() { return scrollChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shortcutChange", function() { return shortcutChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adminChange", function() { return adminChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openDialog", function() { return openDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closeDialog", function() { return closeDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleFavorite", function() { return toggleFavorite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "togglePreview", function() { return togglePreview; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "writeNote", function() { return writeNote; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "editNote", function() { return editNote; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteNote", function() { return deleteNote; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getList", function() { return getList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOne", function() { return getOne; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateForm", function() { return updateForm; });
//import { INCREASE, DECREASE } from '../constants'

/**
 * SCROLL_CHANGE
 */
function scrollChange(scroll) {
  return {
    type: 'SCROLL_CHANGE',
    scroll: scroll
  };
}
/**
 * SHORTCUT_CHANGE
 */

function shortcutChange(command) {
  return {
    type: 'SHORTCUT_CHANGE',
    command: command
  };
}
/**
 * ADMIN_CHANGE
 */

function adminChange(bool) {
  return {
    type: 'ADMIN_CHANGE',
    bool: bool
  };
}
/**
 * OPEN_DIALOG
 */

function openDialog(dialogtype, message) {
  var successaction = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var failaction = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
  return {
    type: 'OPEN_DIALOG',
    dialogtype: dialogtype,
    message: message,
    successaction: successaction,
    failaction: failaction
  };
}
/**
 * CLOSE_DIALOG
 */

function closeDialog() {
  return {
    type: 'CLOSE_DIALOG'
  };
}
/**
 * TOGGLE_FAVORITE
 */

function toggleFavorite(id, idx) {
  return {
    type: 'TOGGLE_FAVORITE',
    id: id,
    idx: idx
  };
}
/**
 * TOGGLE_PREVIEW
 */

function togglePreview() {
  return {
    type: 'TOGGLE_PREVIEW'
  };
}
/**
 * ADD NOTE
 */

function writeNote() {
  return {
    type: 'WRITENOTE',
    data: null
  };
}
/**
 * UPDATE NOTE
 */

function editNote(id) {
  return {
    type: 'EDITNOTE',
    id: id,
    idx: null,
    data: null
  };
}
/**
 * DELETE NOTE
 */

function deleteNote() {
  return {
    type: 'DELETENOTE',
    idx: null
  };
}
/**
 * GET LIST
 */

function getList(searchString) {
  return {
    type: 'GETLIST',
    searchString: searchString,
    list: []
  };
}
/**
 * GET ONE
 */

function getOne(id) {
  return {
    type: 'GETONE',
    id: id,
    info: {}
  };
}
function updateForm(type, text) {
  return {
    type: 'UPDATEFORM_' + type.toUpperCase(),
    text: text
  };
}

/***/ }),

/***/ "./src/components/App.js":
/*!*******************************!*\
  !*** ./src/components/App.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/react.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/lib/index.js");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/lib/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Header */ "./src/components/Header.js");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Footer */ "./src/components/Footer.js");
/* harmony import */ var _List__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./List */ "./src/components/List.js");
/* harmony import */ var _View__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./View */ "./src/components/View.js");
/* harmony import */ var _Dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Dialog */ "./src/components/Dialog.js");
/* harmony import */ var _dispatcher_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../dispatcher.js */ "./src/dispatcher.js");
/* harmony import */ var _actions_jnote__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../actions/jnote */ "./src/actions/jnote.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }











/* IMPORT ACTIONS */



var App =
/*#__PURE__*/
function (_Component) {
  _inherits(App, _Component);

  function App(props, children) {
    var _this;

    _classCallCheck(this, App);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(App).call(this, props));
    _this.state = {
      downstate: false,
      realleft: 30
    };
    return _this;
  }

  _createClass(App, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      /** * 리스트를 가져온다 */
      Object(_dispatcher_js__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_actions_jnote__WEBPACK_IMPORTED_MODULE_9__["getList"])());
    }
  }, {
    key: "handleMouseDown",
    value: function handleMouseDown() {
      this.setState({
        downstate: true
      });
    }
  }, {
    key: "handleMouseUp",
    value: function handleMouseUp(e) {
      if (this.state.downstate) {
        var pageX = e.pageX;

        if (!pageX && e.touches) {
          if (e.touches.length == 0) {
            return;
          }

          pageX = e.touches[0].pageX;
        }

        var container = document.getElementById('container');
        var containerWidth = container.clientWidth;
        var realleft = Math.round(pageX / containerWidth * 100);
        this.changeShadowLeft(realleft);
      }
    }
  }, {
    key: "handleMouseLeave",
    value: function handleMouseLeave() {
      this.setState({
        downstate: false
      });
    }
  }, {
    key: "handleMouseMove",
    value: function handleMouseMove(e) {
      if (this.state.downstate) {
        var pageX = e.pageX || e.touches[0].pageX;
        this.setState({
          shadowleft: {
            left: "calc(".concat(pageX - 5, "px)")
          }
        });
      }
    }
  }, {
    key: "changeShadowLeft",
    value: function changeShadowLeft(realleft) {
      this.setState({
        downstate: false,
        realleft: realleft
      });
    }
  }, {
    key: "render",
    value: function render() {
      var realleft = this.state.realleft;
      var splitStyle = {
        left: "calc(".concat(realleft, "% - 3px)")
      };
      var SPLITSHADOW = null;

      if (this.state.downstate) {
        SPLITSHADOW = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "split-shadow",
          style: this.state.shadowleft
        });
      }

      var CHILDREN = react__WEBPACK_IMPORTED_MODULE_0___default.a.cloneElement(this.props.children, {
        realleft: realleft
      });
      var DIALOG = null;

      if (this.props.dialog.opened) {
        DIALOG = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Dialog__WEBPACK_IMPORTED_MODULE_7__["default"], this.props);
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "app-container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Header__WEBPACK_IMPORTED_MODULE_3__["default"], {
        location: this.props.location,
        preview: this.props.preview,
        adminMode: this.props.adminMode
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "container",
        onMouseMove: this.handleMouseMove.bind(this),
        onMouseUp: this.handleMouseUp.bind(this),
        onMouseLeave: this.handleMouseLeave.bind(this),
        onTouchMove: this.handleMouseMove.bind(this)
      }, DIALOG, this.props.preview ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_View__WEBPACK_IMPORTED_MODULE_6__["default"], {
        viewType: "preview",
        realleft: this.state.realleft
      }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_List__WEBPACK_IMPORTED_MODULE_5__["default"], {
        lists: this.props.lists,
        adminMode: this.props.adminMode,
        realleft: this.state.realleft
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        onMouseDown: this.handleMouseDown.bind(this),
        onTouchStart: this.handleMouseDown.bind(this),
        onTouchEnd: this.handleMouseUp.bind(this),
        className: "split",
        style: splitStyle
      }), SPLITSHADOW, CHILDREN), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Footer__WEBPACK_IMPORTED_MODULE_4__["default"], {
        location: this.props.location,
        params: this.props.params,
        preview: this.props.preview,
        adminMode: this.props.adminMode,
        changeShadowLeft: this.changeShadowLeft.bind(this),
        realleft: this.state.realleft
      }));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);
/**
 *  REDUX STATE 주입
 */


/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(function (state) {
  return {
    lists: state.default.lists,
    preview: state.default.preview.opened,
    dialog: state.default.dialog,
    adminMode: state.default.shortcut.admin
  };
})(App));

/***/ }),

/***/ "./src/components/Dialog.js":
/*!**********************************!*\
  !*** ./src/components/Dialog.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Dialog; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/react.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/lib/index.js");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _dispatcher_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dispatcher.js */ "./src/dispatcher.js");
/* harmony import */ var _actions_jnote__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions/jnote */ "./src/actions/jnote.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




/* IMPORT ACTIONS */



var Dialog =
/*#__PURE__*/
function (_Component) {
  _inherits(Dialog, _Component);

  function Dialog(props) {
    var _this;

    _classCallCheck(this, Dialog);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Dialog).call(this, props));
    _this['deleteNote'] = _actions_jnote__WEBPACK_IMPORTED_MODULE_3__["deleteNote"];
    _this['getList'] = _actions_jnote__WEBPACK_IMPORTED_MODULE_3__["getList"];
    _this['adminChange'] = _actions_jnote__WEBPACK_IMPORTED_MODULE_3__["adminChange"];
    return _this;
  }

  _createClass(Dialog, [{
    key: "handleDialogClose",
    value: function handleDialogClose() {
      Object(_dispatcher_js__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(_actions_jnote__WEBPACK_IMPORTED_MODULE_3__["closeDialog"])());
    }
  }, {
    key: "handleDialogSuccess",
    value: function () {
      var _handleDialogSuccess = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        var successAction, successPush, param;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                successAction = this.props.dialog.successaction.action;
                successPush = this.props.dialog.successaction.push;
                param = "";

                if (!(['search', 'confirm'].indexOf(this.props.dialog.type) > -1)) {
                  _context.next = 10;
                  break;
                }

                if (document.querySelector('.message input')) {
                  param = document.querySelector('.message input').value;
                }

                _context.next = 7;
                return Object(_dispatcher_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this[successAction](param));

              case 7:
                react_router__WEBPACK_IMPORTED_MODULE_1__["hashHistory"].push(successPush);
                _context.next = 11;
                break;

              case 10:
                if (this.props.dialog.type == 'login') {
                  param = document.querySelector('.message input').value;

                  if (param.match(/^dufma$/)) {
                    Object(_dispatcher_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this[successAction](true));
                  }
                }

              case 11:
                this.handleDialogClose();

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function handleDialogSuccess() {
        return _handleDialogSuccess.apply(this, arguments);
      }

      return handleDialogSuccess;
    }()
  }, {
    key: "handleInputAction",
    value: function handleInputAction(event) {
      if (event.keyCode == 27) {
        this.handleDialogClose();
      } else if (event.keyCode == 13) {
        this.handleDialogSuccess();
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      if (document.querySelector('.message input')) {
        document.querySelector('.message input').focus();
      } else {
        document.querySelector('.cancel').focus();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var BOX = null;

      if (this.props.dialog.type == 'search') {
        BOX = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
          type: "text",
          onKeyDown: this.handleInputAction.bind(this),
          id: "searchString"
        });
      } else if (this.props.dialog.type == 'login') {
        BOX = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
          type: "password",
          onKeyDown: this.handleInputAction.bind(this),
          id: "searchString"
        });
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "dialog"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "dialog-shadow"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "dialog-box"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "message"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, this.props.dialog.message, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), BOX)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "button"
      }, ['confirm', 'search', 'login'].indexOf(this.props.dialog.type) > -1 ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        onClick: this.handleDialogSuccess.bind(this)
      }, "Ok.") : null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "cancel",
        onClick: this.handleDialogClose.bind(this)
      }, "Cancel."))));
    }
  }]);

  return Dialog;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ }),

/***/ "./src/components/Empty.js":
/*!*********************************!*\
  !*** ./src/components/Empty.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Empty; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/react.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _juc_Scroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./juc/Scroll */ "./src/components/juc/Scroll.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var Empty =
/*#__PURE__*/
function (_Component) {
  _inherits(Empty, _Component);

  function Empty(props) {
    _classCallCheck(this, Empty);

    return _possibleConstructorReturn(this, _getPrototypeOf(Empty).call(this, props));
  }

  _createClass(Empty, [{
    key: "render",
    value: function render() {
      var splitStyle = null;

      if (this.props.realleft) {
        splitStyle = {
          left: "calc(" + this.props.realleft + "% + 7px)"
        };
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "view",
        style: splitStyle
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_juc_Scroll__WEBPACK_IMPORTED_MODULE_2__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "markdown-body"
      }, "EMPTY")));
    }
  }]);

  return Empty;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ }),

/***/ "./src/components/Footer.js":
/*!**********************************!*\
  !*** ./src/components/Footer.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/react.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/lib/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/lib/index.js");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _dispatcher_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dispatcher.js */ "./src/dispatcher.js");
/* harmony import */ var _actions_jnote__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../actions/jnote */ "./src/actions/jnote.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





/* IMPORT ACTIONS */



var Footer =
/*#__PURE__*/
function (_Component) {
  _inherits(Footer, _Component);

  function Footer(props) {
    var _this;

    _classCallCheck(this, Footer);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Footer).call(this, props)); // SHORTCUT EVENT

    _this.timeoutState = null;
    _this.preKeyCode = null;
    document.querySelector('body').addEventListener('keydown', function (event) {
      var keyCharCode = event.keyCode || event.charCode;

      if (event.shiftKey == true && (keyCharCode == 186 || keyCharCode == 59 || keyCharCode == 191) && CodeMirror.Vim.jwmode == 'normal' && ['TEXTAREA'].indexOf(event.target.tagName) > -1) {
        event.target.blur();
        setTimeout(function () {
          event.target.focus();
        }, 900);
      }

      if (keyCharCode == 27 && ['INPUT'].indexOf(event.target.tagName) > -1) {
        event.target.blur();
      } //if (this.preKeyCode == event.keyCode && event.keyCode == 16 && ['INPUT','TEXTAREA'].indexOf(event.target.tagName) == -1 ) {
      //  this.preKeyCode = null;
      //  // ACTION
      //  dispatcher(openDialog('search','searchList',{
      //    action: 'getList',
      //    push: '/'
      //  }));
      //}
      //else {
      //  this.preKeyCode = event.keyCode;
      //}

    });
    document.querySelector('body').addEventListener('keypress', function (event) {
      var keyCharCode = event.keyCode || event.charCode;

      if (['TEXTAREA', 'INPUT'].indexOf(event.target.tagName) > -1) {
        return;
      } else {
        event.preventDefault();
      }

      var shortcut = _this.props.shortcutBuffer;

      if (_this.props.shortcutBuffer == null) {
        shortcut = "";
      }

      var matchString = String(shortcut + String.fromCharCode(keyCharCode));
      Object(_dispatcher_js__WEBPACK_IMPORTED_MODULE_3__["default"])(Object(_actions_jnote__WEBPACK_IMPORTED_MODULE_4__["shortcutChange"])(matchString));
      var match = null;
      /* 행 찾아가기 */

      if (match = /([0-9]*)gg$/g.exec(matchString)) {
        var target = match[1];
        if (target == '') target = 0;

        _this.viewTargetTrigger(target);
      }
      /* 행 찾아가기2 */
      else if (keyCharCode == 13 && /^:([0-9]+)\s/g.exec(matchString)) {
          match = /^:([0-9]+)\s/g.exec(matchString);

          _this.viewTargetTrigger(match[1]);
        }
        /* 리스트에서 검색하기 */
        else if (keyCharCode == 13 && /^[:](s|search|list)\s/g.exec(matchString)) {
            // ACTION
            Object(_dispatcher_js__WEBPACK_IMPORTED_MODULE_3__["default"])(Object(_actions_jnote__WEBPACK_IMPORTED_MODULE_4__["openDialog"])('search', 'searchList', {
              action: 'getList',
              push: '/'
            }));
          }
          /* 수정하기 */
          else if (keyCharCode == 13 && matchString.match(/:e[ ]?([0-9]*)\s/g)) {
              match = /:e[ ]?([0-9]*)/g.exec(matchString);

              var _target = document.querySelector(".list li[data-idx='".concat(match[1], "']"));

              if (match[1] == '') {
                Object(_dispatcher_js__WEBPACK_IMPORTED_MODULE_3__["default"])(Object(_actions_jnote__WEBPACK_IMPORTED_MODULE_4__["updateForm"])('sync'));
                react_router__WEBPACK_IMPORTED_MODULE_2__["hashHistory"].push('/write/' + _this.props.params.id);
                document.querySelector('textarea').focus(); // Previe 열기

                if (!_this.props.preview) {
                  Object(_dispatcher_js__WEBPACK_IMPORTED_MODULE_3__["default"])(Object(_actions_jnote__WEBPACK_IMPORTED_MODULE_4__["togglePreview"])());
                }
              } else if (!_target) {
                Object(_dispatcher_js__WEBPACK_IMPORTED_MODULE_3__["default"])(Object(_actions_jnote__WEBPACK_IMPORTED_MODULE_4__["openDialog"])('alert', 'Not Found Idx'));
              } else {
                _target.click();

                Object(_dispatcher_js__WEBPACK_IMPORTED_MODULE_3__["default"])(Object(_actions_jnote__WEBPACK_IMPORTED_MODULE_4__["updateForm"])('sync'));
                react_router__WEBPACK_IMPORTED_MODULE_2__["hashHistory"].push('/write/' + _this.props.params.id);
                document.querySelector('textarea').focus(); // Previe 열기

                if (!_this.props.preview) {
                  Object(_dispatcher_js__WEBPACK_IMPORTED_MODULE_3__["default"])(Object(_actions_jnote__WEBPACK_IMPORTED_MODULE_4__["togglePreview"])());
                }
              }
            }
            /* 검색 */
            else if (keyCharCode == 13 && matchString.match(/^\/(.*)\s/g)) {
                match = /^\/(.*)\s/g.exec(matchString);
                Object(_dispatcher_js__WEBPACK_IMPORTED_MODULE_3__["default"])(Object(_actions_jnote__WEBPACK_IMPORTED_MODULE_4__["getList"])(match[1]));
              }
              /* 캔슬 */
              else if (keyCharCode == 13 && matchString.match(/^:q\s/g)) {
                  // Previe 닫음
                  if (_this.props.preview) {
                    Object(_dispatcher_js__WEBPACK_IMPORTED_MODULE_3__["default"])(Object(_actions_jnote__WEBPACK_IMPORTED_MODULE_4__["togglePreview"])());
                  }

                  var noteId = _this.props.location.pathname.replace(/\/([^\/]*)\/?(([\w\/]*))?/, "$2");

                  if (noteId) {
                    react_router__WEBPACK_IMPORTED_MODULE_2__["hashHistory"].push('/view/' + noteId);
                  } else {
                    react_router__WEBPACK_IMPORTED_MODULE_2__["hashHistory"].push('/');
                  }
                }
                /* 저장하기 나가기 */
                else if (keyCharCode == 13 && matchString.match(/^:w(q?)\s/g)) {
                    //else if (keyCharCode == 13 && match = /^:w(q?)\s/g.exec(matchString) ) {
                    match = /^:w(q?)\s/g.exec(matchString);

                    var _noteId = _this.props.location.pathname.replace(/\/([^\/]*)\/?(([\w\/]*))?/, "$2");

                    if ('write' == _this.props.location.pathname.replace(/\/([^\/]*)[\w\/]*/, "$1")) {
                      if (!_this.props.adminMode) {
                        Object(_dispatcher_js__WEBPACK_IMPORTED_MODULE_3__["default"])(Object(_actions_jnote__WEBPACK_IMPORTED_MODULE_4__["openDialog"])('alert', 'You have no authority.'));
                      } else {
                        // 수정
                        if (_noteId) {
                          Object(_dispatcher_js__WEBPACK_IMPORTED_MODULE_3__["default"])(Object(_actions_jnote__WEBPACK_IMPORTED_MODULE_4__["editNote"])(_noteId));

                          if (match[1] == 'q') {
                            if (_this.props.preview) {
                              Object(_dispatcher_js__WEBPACK_IMPORTED_MODULE_3__["default"])(Object(_actions_jnote__WEBPACK_IMPORTED_MODULE_4__["togglePreview"])());
                            }

                            react_router__WEBPACK_IMPORTED_MODULE_2__["hashHistory"].push('/view/' + _noteId);
                          }
                        } // 생성
                        else {
                            Object(_dispatcher_js__WEBPACK_IMPORTED_MODULE_3__["default"])(Object(_actions_jnote__WEBPACK_IMPORTED_MODULE_4__["writeNote"])());
                            setTimeout(function () {
                              if (_this.props.preview) {
                                Object(_dispatcher_js__WEBPACK_IMPORTED_MODULE_3__["default"])(Object(_actions_jnote__WEBPACK_IMPORTED_MODULE_4__["togglePreview"])());
                              }

                              _this.viewTargetTrigger(0);

                              if (match[1] != 'q') {
                                Object(_dispatcher_js__WEBPACK_IMPORTED_MODULE_3__["default"])(Object(_actions_jnote__WEBPACK_IMPORTED_MODULE_4__["updateForm"])('sync')); //let noteId = this.props.location.pathname.replace(/\/([^\/]*)\/?(([\w\/]*))?/,"$2");

                                react_router__WEBPACK_IMPORTED_MODULE_2__["hashHistory"].push('/write/' + _this.props.params.id);
                                document.querySelector('textarea').focus();
                                Object(_dispatcher_js__WEBPACK_IMPORTED_MODULE_3__["default"])(Object(_actions_jnote__WEBPACK_IMPORTED_MODULE_4__["togglePreview"])());
                              }
                            }, 1000);
                          }
                      }
                    }
                  }
                  /* 화면분할 균등 */
                  else if (matchString.match(/=/g)) {
                      _this.props.changeShadowLeft(50);
                    } else if (match = /([0-9]+)([<>])$/g.exec(matchString)) {
                      var changeLeft = _this.props.realleft;

                      if (match[2] == ">") {
                        changeLeft = _this.props.realleft + parseInt(match[1]);
                      } else if (match[2] == "<") {
                        changeLeft = _this.props.realleft - parseInt(match[1]);
                      }

                      if (changeLeft <= 0) {
                        changeLeft = 1;
                      } else if (changeLeft >= 100) {
                        changeLeft = 99;
                      }

                      _this.props.changeShadowLeft(changeLeft);
                    }

      clearTimeout(_this.timeoutState);
      _this.timeoutState = setTimeout(function () {
        var match = null;

        if (match = /([0-9]+)$/g.exec(matchString)) {
          _this.props.changeShadowLeft(parseInt(match[1]));
        }

        Object(_dispatcher_js__WEBPACK_IMPORTED_MODULE_3__["default"])(Object(_actions_jnote__WEBPACK_IMPORTED_MODULE_4__["shortcutChange"])(''));
        _this.timeoutState = null;
      }, 900);
    });
    return _this;
  }

  _createClass(Footer, [{
    key: "viewTargetTrigger",
    value: function viewTargetTrigger(idx) {
      var target = document.querySelector(".list li[data-idx='".concat(idx, "']"));

      if (!target) {
        Object(_dispatcher_js__WEBPACK_IMPORTED_MODULE_3__["default"])(Object(_actions_jnote__WEBPACK_IMPORTED_MODULE_4__["openDialog"])('alert', 'Not Found Idx'));
      } else {
        target.click();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var shortcut = String(this.props.shortcutBuffer).replace(//g, '^W');
      var privateChar = /(.*)\?(.*)/g.exec(shortcut);

      if (privateChar) {
        shortcut = "".concat(privateChar[1], "?").concat(privateChar[2].replace(/./g, "*"));
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("footer", null, this.props.shortcutBuffer ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "command-display",
        className: "left"
      }, shortcut) : null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "right"
      }, "\xA92016 SUPERLUCKY inc"));
    }
  }]);

  return Footer;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);
/**
 *  REDUX STATE 주입
 */


/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(function (state) {
  return {
    shortcutBuffer: state.default.shortcut.buffer
  };
})(Footer));

/***/ }),

/***/ "./src/components/Header.js":
/*!**********************************!*\
  !*** ./src/components/Header.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/react.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/lib/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/lib/index.js");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _dispatcher_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dispatcher.js */ "./src/dispatcher.js");
/* harmony import */ var _actions_jnote__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../actions/jnote */ "./src/actions/jnote.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





/* IMPORT ACTIONS */



var Header =
/*#__PURE__*/
function (_Component) {
  _inherits(Header, _Component);

  function Header(props) {
    var _this;

    _classCallCheck(this, Header);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Header).call(this, props));
    _this.noteId = null;
    return _this;
  }

  _createClass(Header, [{
    key: "handleChangeWritepage",
    value: function handleChangeWritepage() {
      Object(_dispatcher_js__WEBPACK_IMPORTED_MODULE_3__["default"])(Object(_actions_jnote__WEBPACK_IMPORTED_MODULE_4__["updateForm"])('title', ''));
      Object(_dispatcher_js__WEBPACK_IMPORTED_MODULE_3__["default"])(Object(_actions_jnote__WEBPACK_IMPORTED_MODULE_4__["updateForm"])('note', ''));
      react_router__WEBPACK_IMPORTED_MODULE_2__["hashHistory"].push('/write'); // Previe 열기

      if (!this.props.preview) {
        Object(_dispatcher_js__WEBPACK_IMPORTED_MODULE_3__["default"])(Object(_actions_jnote__WEBPACK_IMPORTED_MODULE_4__["togglePreview"])());
      }
    }
  }, {
    key: "handleEditMemo",
    value: function handleEditMemo() {
      Object(_dispatcher_js__WEBPACK_IMPORTED_MODULE_3__["default"])(Object(_actions_jnote__WEBPACK_IMPORTED_MODULE_4__["updateForm"])('sync'));
      react_router__WEBPACK_IMPORTED_MODULE_2__["hashHistory"].push('/write/' + this.noteId); // Previe 열기

      if (!this.props.preview) {
        Object(_dispatcher_js__WEBPACK_IMPORTED_MODULE_3__["default"])(Object(_actions_jnote__WEBPACK_IMPORTED_MODULE_4__["togglePreview"])());
      }
    }
  }, {
    key: "handleWriteCancel",
    value: function handleWriteCancel() {
      // Previe 닫음
      if (this.props.preview) {
        Object(_dispatcher_js__WEBPACK_IMPORTED_MODULE_3__["default"])(Object(_actions_jnote__WEBPACK_IMPORTED_MODULE_4__["togglePreview"])());
      }

      if (this.noteId) {
        react_router__WEBPACK_IMPORTED_MODULE_2__["hashHistory"].push('/view/' + this.noteId);
      } else {
        react_router__WEBPACK_IMPORTED_MODULE_2__["hashHistory"].push('/');
      }
    }
  }, {
    key: "handleWriteMemo",
    value: function () {
      var _handleWriteMemo = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (this.props.adminMode) {
                  _context.next = 3;
                  break;
                }

                Object(_dispatcher_js__WEBPACK_IMPORTED_MODULE_3__["default"])(Object(_actions_jnote__WEBPACK_IMPORTED_MODULE_4__["openDialog"])('alert', 'You have no authority.'));
                return _context.abrupt("return");

              case 3:
                ; // Previe 닫음

                if (!this.props.preview) {
                  _context.next = 7;
                  break;
                }

                _context.next = 7;
                return Object(_dispatcher_js__WEBPACK_IMPORTED_MODULE_3__["default"])(Object(_actions_jnote__WEBPACK_IMPORTED_MODULE_4__["togglePreview"])());

              case 7:
                if (!this.noteId) {
                  _context.next = 13;
                  break;
                }

                _context.next = 10;
                return Object(_dispatcher_js__WEBPACK_IMPORTED_MODULE_3__["default"])(Object(_actions_jnote__WEBPACK_IMPORTED_MODULE_4__["editNote"])(this.noteId));

              case 10:
                react_router__WEBPACK_IMPORTED_MODULE_2__["hashHistory"].push('/view/' + this.noteId);
                _context.next = 14;
                break;

              case 13:
                Object(_dispatcher_js__WEBPACK_IMPORTED_MODULE_3__["default"])(Object(_actions_jnote__WEBPACK_IMPORTED_MODULE_4__["writeNote"])());

              case 14:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function handleWriteMemo() {
        return _handleWriteMemo.apply(this, arguments);
      }

      return handleWriteMemo;
    }()
  }, {
    key: "handleDeleteMemo",
    value: function handleDeleteMemo() {
      if (!this.props.adminMode) {
        Object(_dispatcher_js__WEBPACK_IMPORTED_MODULE_3__["default"])(Object(_actions_jnote__WEBPACK_IMPORTED_MODULE_4__["openDialog"])('alert', 'You have no authority.'));
        return;
      }

      ; // Previe 닫음

      if (this.props.preview) {
        Object(_dispatcher_js__WEBPACK_IMPORTED_MODULE_3__["default"])(Object(_actions_jnote__WEBPACK_IMPORTED_MODULE_4__["togglePreview"])());
      } // ACTION


      Object(_dispatcher_js__WEBPACK_IMPORTED_MODULE_3__["default"])(Object(_actions_jnote__WEBPACK_IMPORTED_MODULE_4__["openDialog"])('confirm', 'Really?', {
        action: 'deleteNote',
        push: '/'
      }));
    }
  }, {
    key: "handleShowPreview",
    value: function handleShowPreview() {
      Object(_dispatcher_js__WEBPACK_IMPORTED_MODULE_3__["default"])(Object(_actions_jnote__WEBPACK_IMPORTED_MODULE_4__["togglePreview"])());
    }
  }, {
    key: "handleOpenDailog",
    value: function handleOpenDailog() {
      Object(_dispatcher_js__WEBPACK_IMPORTED_MODULE_3__["default"])(Object(_actions_jnote__WEBPACK_IMPORTED_MODULE_4__["openDialog"])('confirm', 'test'));
    }
  }, {
    key: "handleLogin",
    value: function handleLogin() {
      Object(_dispatcher_js__WEBPACK_IMPORTED_MODULE_3__["default"])(Object(_actions_jnote__WEBPACK_IMPORTED_MODULE_4__["openDialog"])('login', 'login'));
      Object(_dispatcher_js__WEBPACK_IMPORTED_MODULE_3__["default"])(Object(_actions_jnote__WEBPACK_IMPORTED_MODULE_4__["openDialog"])('login', 'password', {
        action: 'adminChange'
      }));
    }
  }, {
    key: "handleLogout",
    value: function handleLogout() {
      Object(_dispatcher_js__WEBPACK_IMPORTED_MODULE_3__["default"])(Object(_actions_jnote__WEBPACK_IMPORTED_MODULE_4__["adminChange"])(false));
    }
  }, {
    key: "render",
    value: function render() {
      var BUTTON = [];
      var title = "";
      this.viewType = this.props.location.pathname.replace(/\/([^\/]*)[\w\/]*/, "$1");
      this.noteId = this.props.location.pathname.replace(/\/([^\/]*)\/?(([\w\/]*))?/, "$2");

      switch (this.viewType) {
        case 'view':
          title = this.props.viewTitle;
          BUTTON.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
            key: "edit",
            onClick: this.handleEditMemo.bind(this)
          }, "EDIT"));
          BUTTON.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
            key: "delete",
            onClick: this.handleDeleteMemo.bind(this)
          }, "DELETE"));

        case '':
          BUTTON.unshift(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
            key: "write",
            onClick: this.handleChangeWritepage.bind(this)
          }, "WRITE"));
          break;

        case 'write':
          title = 'write';
          var previewToggle = "PREVIEW";

          if (this.props.preview) {
            previewToggle = "LIST";
          }

          BUTTON.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
            key: previewToggle,
            onClick: this.handleShowPreview.bind(this)
          }, previewToggle));
          BUTTON.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
            key: "send",
            onClick: this.handleWriteMemo.bind(this)
          }, "SAVE"));
          BUTTON.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
            key: "cancel",
            onClick: this.handleWriteCancel.bind(this)
          }, "CANCEL"));
          break;
      }

      if (!this.props.adminMode) {
        BUTTON.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
          key: "login",
          onClick: this.handleLogin.bind(this)
        }, "LOGIN"));
      } else {
        BUTTON.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
          key: "logout",
          onClick: this.handleLogout.bind(this)
        }, "LOGOUT"));
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "left"
      }, this.props.viewTitle ? " - " + title + " - " : "JINW-MEMO"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "right"
      }, BUTTON));
    }
  }]);

  return Header;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);
/**
 *  REDUX STATE 주입
 */


/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(function (state) {
  return {
    viewTitle: state.default.view.title
  };
})(Header));

/***/ }),

/***/ "./src/components/List.js":
/*!********************************!*\
  !*** ./src/components/List.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return List; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/react.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/lib/index.js");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ListItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ListItem */ "./src/components/ListItem.js");
/* harmony import */ var _juc_Scroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./juc/Scroll */ "./src/components/juc/Scroll.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var List =
/*#__PURE__*/
function (_Component) {
  _inherits(List, _Component);

  function List(props) {
    _classCallCheck(this, List);

    return _possibleConstructorReturn(this, _getPrototypeOf(List).call(this, props));
  }

  _createClass(List, [{
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "handleChoickList",
    value: function handleChoickList(id) {
      react_router__WEBPACK_IMPORTED_MODULE_1__["hashHistory"].push('/view/' + id);
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var splitStyle = null;

      if (this.props.realleft) {
        var realright = 100 - this.props.realleft;
        splitStyle = {
          right: "calc(".concat(realright, "% + 5px)")
        };
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "list",
        style: splitStyle
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_juc_Scroll__WEBPACK_IMPORTED_MODULE_3__["default"], {
        realleft: this.props.realleft
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, this.props.lists.map(function (item, idx) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ListItem__WEBPACK_IMPORTED_MODULE_2__["default"], {
          key: idx,
          idx: idx,
          id: item._id,
          title: item.title,
          favorite: item.favorite,
          tags: item.category,
          adminMode: _this.props.adminMode
        });
      }))));
    }
  }]);

  return List;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ }),

/***/ "./src/components/ListItem.js":
/*!************************************!*\
  !*** ./src/components/ListItem.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ListItem; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/react.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/lib/index.js");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _dispatcher_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dispatcher.js */ "./src/dispatcher.js");
/* harmony import */ var _TagItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TagItem */ "./src/components/TagItem.js");
/* harmony import */ var _actions_jnote__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../actions/jnote */ "./src/actions/jnote.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





/* IMPORT ACTIONS */



var ListItem =
/*#__PURE__*/
function (_Component) {
  _inherits(ListItem, _Component);

  function ListItem(props) {
    _classCallCheck(this, ListItem);

    return _possibleConstructorReturn(this, _getPrototypeOf(ListItem).call(this, props));
  }

  _createClass(ListItem, [{
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "handleChoickList",
    value: function handleChoickList(id) {
      react_router__WEBPACK_IMPORTED_MODULE_1__["hashHistory"].push('/view/' + id);
    }
  }, {
    key: "handleChangeFav",
    value: function handleChangeFav(id, idx, e) {
      if (this.props.adminMode) {
        Object(_dispatcher_js__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(_actions_jnote__WEBPACK_IMPORTED_MODULE_4__["toggleFavorite"])(id, idx));
      } else {
        Object(_dispatcher_js__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(_actions_jnote__WEBPACK_IMPORTED_MODULE_4__["openDialog"])('alert', 'Only admin mode.'));
      }

      e.stopPropagation();
    }
  }, {
    key: "render",
    value: function render() {
      var tags = [];

      if (this.props.tags) {
        tags = this.props.tags.reduce(function (prevArray, tag) {
          var nextArray = prevArray;

          if (tag) {
            nextArray.push(tag);
          }

          return nextArray;
        }, []);
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        "data-idx": this.props.idx,
        className: this.props.favorite ? 'fav' : '',
        onClick: this.handleChoickList.bind(this, this.props.id)
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, tags.map(function (item, idx) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TagItem__WEBPACK_IMPORTED_MODULE_3__["default"], {
          key: idx,
          tag: item
        });
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "title"
      }, this.props.idx, ". ", this.props.title, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        onClick: this.handleChangeFav.bind(this, this.props.id, this.props.idx)
      })));
    }
  }]);

  return ListItem;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ }),

/***/ "./src/components/TagItem.js":
/*!***********************************!*\
  !*** ./src/components/TagItem.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TagItem; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/react.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/lib/index.js");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var TagItem =
/*#__PURE__*/
function (_Component) {
  _inherits(TagItem, _Component);

  function TagItem(props) {
    _classCallCheck(this, TagItem);

    return _possibleConstructorReturn(this, _getPrototypeOf(TagItem).call(this, props));
  }

  _createClass(TagItem, [{
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "handleChoickList",
    value: function handleChoickList(id) {
      react_router__WEBPACK_IMPORTED_MODULE_1__["hashHistory"].push('/view/' + id);
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "tag"
      }, this.props.tag.toUpperCase());
    }
  }]);

  return TagItem;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ }),

/***/ "./src/components/View.js":
/*!********************************!*\
  !*** ./src/components/View.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return View; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/react.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _juc_Scroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./juc/Scroll */ "./src/components/juc/Scroll.js");
/* harmony import */ var _ViewNote__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ViewNote */ "./src/components/ViewNote.js");
/* harmony import */ var _actions_jnote__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../actions/jnote */ "./src/actions/jnote.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





/* IMPORT ACTIONS */



var View =
/*#__PURE__*/
function (_Component) {
  _inherits(View, _Component);

  function View(props) {
    _classCallCheck(this, View);

    return _possibleConstructorReturn(this, _getPrototypeOf(View).call(this, props));
  }

  _createClass(View, [{
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "render",
    value: function render() {
      var splitStyle = null;
      var classname = '';
      var scroll = 0;

      if (this.props.viewType == 'preview') {
        if (this.props.realleft) {
          var realright = 100 - this.props.realleft;
          splitStyle = {
            right: "calc(".concat(realright, "% + 5px)")
          };
          classname = 'preview';
        }
      } else {
        if (this.props.realleft) {
          splitStyle = {
            left: "calc(" + this.props.realleft + "% + 7px)"
          };
          classname = 'view';
        }
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: splitStyle,
        className: classname
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_juc_Scroll__WEBPACK_IMPORTED_MODULE_2__["default"], {
        viewType: this.props.viewType,
        realleft: this.props.realleft
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ViewNote__WEBPACK_IMPORTED_MODULE_3__["default"], this.props)));
    }
  }]);

  return View;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ }),

/***/ "./src/components/ViewNote.js":
/*!************************************!*\
  !*** ./src/components/ViewNote.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/react.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _dispatcher_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dispatcher.js */ "./src/dispatcher.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/lib/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! marked */ "./node_modules/marked/lib/marked.js");
/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(marked__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _actions_jnote__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../actions/jnote */ "./src/actions/jnote.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






/* IMPORT ACTIONS */



var ViewNote =
/*#__PURE__*/
function (_Component) {
  _inherits(ViewNote, _Component);

  function ViewNote(props) {
    _classCallCheck(this, ViewNote);

    return _possibleConstructorReturn(this, _getPrototypeOf(ViewNote).call(this, props));
  }

  _createClass(ViewNote, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.routeParams && this.props.routeParams.id) {
        Object(_dispatcher_js__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(_actions_jnote__WEBPACK_IMPORTED_MODULE_5__["getOne"])(this.props.routeParams.id));
      }
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextprops) {
      if (nextprops.routeParams && nextprops.routeParams.id != this.props.params.id) {
        Object(_dispatcher_js__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(_actions_jnote__WEBPACK_IMPORTED_MODULE_5__["getOne"])(nextprops.routeParams.id));
      }
    }
  }, {
    key: "render",
    value: function render() {
      marked__WEBPACK_IMPORTED_MODULE_4___default.a.setOptions({
        renderer: new marked__WEBPACK_IMPORTED_MODULE_4___default.a.Renderer(),
        gfm: true,
        tables: true,
        breaks: false,
        pedantic: false,
        sanitize: true,
        smartLists: true,
        smartypants: false
      });
      var note = "";
      var classname = '';
      var splitStyle = null;
      var scroll = 0;

      if (this.props.viewType == 'preview') {
        note = marked__WEBPACK_IMPORTED_MODULE_4___default()(this.props.previewNote.toString(), {
          sanitize: false
        });
      } else {
        note = marked__WEBPACK_IMPORTED_MODULE_4___default()(this.props.note.toString(), {
          sanitize: false
        });
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "markdown-body",
        dangerouslySetInnerHTML: {
          __html: note
        }
      });
    }
  }]);

  return ViewNote;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);
/**
 *  REDUX STATE 주입
 */


/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(function (state) {
  return {
    note: state.default.view.note,
    previewNote: state.default.write.note
  };
})(ViewNote));

/***/ }),

/***/ "./src/components/Write.js":
/*!*********************************!*\
  !*** ./src/components/Write.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/react.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _dispatcher_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dispatcher.js */ "./src/dispatcher.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/lib/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/lib/index.js");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _actions_jnote__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../actions/jnote */ "./src/actions/jnote.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






/* IMPORT ACTIONS */



var Write =
/*#__PURE__*/
function (_Component) {
  _inherits(Write, _Component);

  function Write(props) {
    var _this;

    _classCallCheck(this, Write);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Write).call(this, props));
    _this.scrollPercent = 0;
    _this.editor = null;
    return _this;
  }

  _createClass(Write, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextprops) {
      if (!this.props.writeNote) {
        this.editor.setValue(nextprops.writeNote);
      }

      if (nextprops.writeScroll != this.props.writeScroll) {
        var $this = react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.findDOMNode(this.refs.textarea);
        var result = ($this.scrollHeight - $this.clientHeight) * nextprops.writeScroll / 100;
        $this.scrollTop = result;
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(nextprops) {}
  }, {
    key: "changeTitle",
    value: function changeTitle(event) {
      Object(_dispatcher_js__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(_actions_jnote__WEBPACK_IMPORTED_MODULE_5__["updateForm"])('title', event.target.value));
    }
  }, {
    key: "changeNote",
    value: function changeNote() {
      var target = react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.findDOMNode(this.refs.textarea);
      var lastFalg = false;

      if (this.props.writeNote.slice(-2) != target.value.slice(-2)) {
        lastFalg = true;
      }

      Object(_dispatcher_js__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(_actions_jnote__WEBPACK_IMPORTED_MODULE_5__["updateForm"])('note', target.value));

      if (lastFalg) {
        Object(_dispatcher_js__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(_actions_jnote__WEBPACK_IMPORTED_MODULE_5__["scrollChange"])(100));
      }
    }
  }, {
    key: "changeScroll",
    value: function changeScroll(eventTarget) {
      var percent = eventTarget.scrollTop / (eventTarget.scrollHeight - eventTarget.clientHeight) * 100;
      percent = Math.round(percent);
      this.scrollPercent = percent;
      Object(_dispatcher_js__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(_actions_jnote__WEBPACK_IMPORTED_MODULE_5__["scrollChange"])(percent));
    }
  }, {
    key: "changeTag",
    value: function changeTag(event) {
      var tagsString = event.target.value.replace(/[^a-z0-9,;:]*/g, "").replace(/[,;:]/g, ",").replace(/,+/g, ",").replace(/^,/g, "");
      var tags = tagsString.split(",");

      if (tagsString.match(/,$/)) {
        var newTag = [];
        tags.forEach(function (tag) {
          if (newTag.indexOf(tag) == -1) {
            newTag.push(tag);
          }
        });
        tags = newTag;
      }

      Object(_dispatcher_js__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(_actions_jnote__WEBPACK_IMPORTED_MODULE_5__["updateForm"])('tags', tags));
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      if (this.props.routeParams.id) {
        Object(_dispatcher_js__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(_actions_jnote__WEBPACK_IMPORTED_MODULE_5__["getOne"])(this.props.routeParams.id));
        Object(_dispatcher_js__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(_actions_jnote__WEBPACK_IMPORTED_MODULE_5__["updateForm"])('sync'));
      }

      var target = react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.findDOMNode(this.refs.textarea);
      CodeMirror.Vim.jwmode = 'normal';
      this.editor = CodeMirror.fromTextArea(target, {
        lineNumbers: true,
        keyMap: "vim",
        lineWrapping: true
      });
      CodeMirror.on(this.editor, 'vim-command-done', function (info) {
        setTimeout(function () {
          _this2.editor.save();

          _this2.changeNote();
        });
      });
      CodeMirror.on(this.editor, 'vim-mode-change', function (info) {
        CodeMirror.Vim.jwmode = info.mode;
      });
      CodeMirror.on(this.editor, 'scroll', function (info) {
        _this2.changeScroll(info.display.scrollbars.vert);
      });
      this.editor.display.lineDiv.addEventListener('dragenter', this.dragEnter.bind(this));
      this.editor.display.lineDiv.addEventListener('dragover', this.dragEnter.bind(this));
      this.editor.display.lineDiv.addEventListener('drop', this.onDrop.bind(this));
      this.editor.focus();
    }
  }, {
    key: "dragEnter",
    value: function dragEnter(event) {
      event.preventDefault();
    }
  }, {
    key: "onDrop",
    value: function onDrop(event) {
      var self = this;
      var value_target = this.refs.textarea;
      var file = event.dataTransfer.files[0];
      var formdata = new FormData();
      var xhr = new XMLHttpRequest();
      formdata.append("pict", file);
      xhr.open("POST", "/jnote/upload");
      xhr.send(formdata);

      xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
          if (xhr.status >= 200 && xhr.status < 300) {
            var result = JSON.parse(xhr.responseText);
            var img = "\n![](" + String(result.filepath) + ")\n";
            value_target.value = value_target.value + img;
            self.editor.setValue(value_target.value);
            self.editor.save();
            self.changeNote();
          }
        }
      };

      event.stopPropagation();
      event.preventDefault();
    }
  }, {
    key: "render",
    value: function render() {
      // TAG 세팅
      var writeTags = this.props.writeTags.join(", ").replace(/[ ]*$/, "");
      var splitStyle = null;

      if (this.props.realleft) {
        splitStyle = {
          left: "calc(" + this.props.realleft + "% + 7px)"
        };
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "write",
        style: splitStyle
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "text",
        placeholder: "Title",
        onChange: this.changeTitle.bind(this),
        value: this.props.writeTitle
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "text",
        placeholder: "Tag",
        onChange: this.changeTag.bind(this),
        value: writeTags
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("textarea", {
        ref: "textarea",
        placeholder: "Memo",
        onChange: this.changeNote.bind(this),
        value: this.props.writeNote
      }));
    }
  }]);

  return Write;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);
/**
 *  REDUX STATE 주입
 */


/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(function (state) {
  return {
    writeTitle: state.default.write.title,
    writeNote: state.default.write.note,
    writeTags: state.default.write.tags,
    writeScroll: state.default.write.scroll
  };
})(Write));

/***/ }),

/***/ "./src/components/juc/Scroll.js":
/*!**************************************!*\
  !*** ./src/components/juc/Scroll.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/react.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/lib/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_Util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/Util */ "./src/components/lib/Util.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var Scroll =
/*#__PURE__*/
function (_Component) {
  _inherits(Scroll, _Component);

  function Scroll(props) {
    var _this;

    _classCallCheck(this, Scroll);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Scroll).call(this, props));
    _this.scrollWrap = null;
    _this.scrollInner = null;
    _this.ps = null;
    _this.sc = null;
    _this.rating = 0;
    _this.op = _this.props.option ? _this.props.option : {};
    _this.scrollDragStandard = [];
    _this.drag = false;
    _this.scrollTime = null;
    _this.util = new _lib_Util__WEBPACK_IMPORTED_MODULE_3__["default"]();
    _this.isWebkit = 'WebkitAppearance' in document.documentElement.style;
    return _this;
  }

  _createClass(Scroll, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.scrollWrap = react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.findDOMNode(this);
      this.scrollInner = this.scrollWrap.querySelector('.jwscroll-inner');

      if (this.isWebkit !== true) {
        this.hiddenScroll();
      }

      this.addScroll();
      this.makeScrollPosition();
      this.setScrollTop();
      this.initEvent();
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextprops) {
      if (nextprops.realleft != this.props.realleft && this.isWebkit !== true) {
        var jwscrollWrap = this.scrollWrap;
        var jwscroll = this.scrollInner;
        jwscroll.removeAttribute("style");
        jwscrollWrap.removeAttribute("style");
        this.hiddenScroll();
      }

      if (!this.props.viewType || this.props.viewType != 'preview') {
        return;
      }

      if (nextprops.previewScroll != this.props.previewScroll || nextprops.previewScroll == 100) {
        var $this = react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.findDOMNode(this).querySelector('.jwscroll-inner');
        var result = ($this.scrollHeight - $this.clientHeight) * nextprops.previewScroll / 100;
        $this.scrollTop = Number(result);
      }
    }
  }, {
    key: "hiddenScroll",
    value: function hiddenScroll() {
      var jwscrollWrap = this.scrollWrap;
      var jwscroll = this.scrollInner;
      var scrollWidth = jwscroll.offsetWidth - jwscroll.clientWidth;
      var innerWidth = jwscrollWrap.offsetWidth + scrollWidth;
      jwscroll.style.width = innerWidth + "px";
      jwscrollWrap.style.width = innerWidth - scrollWidth + "px";
    }
  }, {
    key: "addScroll",
    value: function addScroll() {
      var jwscrollWrap = this.scrollWrap;
      this.sc = document.createElement("div");
      this.ps = document.createElement("div");
      this.ps.className = "ps";
      this.sc.className = "sc";
      this.sc.appendChild(this.ps);
      jwscrollWrap.appendChild(this.sc);
    }
  }, {
    key: "makeScrollPosition",
    value: function makeScrollPosition() {
      var jwscroll = react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.findDOMNode(this.scrollInner);
      var ps = this.ps;
      var scrollHeight = jwscroll.scrollHeight;
      var clientHeight = jwscroll.clientHeight;
      var posHeight = parseInt(clientHeight * (clientHeight / scrollHeight));
      ps.style.height = posHeight + "px";
      if (this.op.scrollShowAlways === true) ps.style.opacity = 1;
    }
  }, {
    key: "setScrollTop",
    value: function setScrollTop() {
      var jwscroll = this.scrollInner;
      var ps = this.ps;
      var scrollHeight = jwscroll.scrollHeight;
      var clientHeight = jwscroll.clientHeight;
      this.rating = clientHeight / scrollHeight;
      var scrollTop = jwscroll.scrollTop * this.rating;
      ps.style.top = scrollTop + "px";
    }
  }, {
    key: "scrollShy",
    value: function scrollShy() {
      var self = this;
      var ps = this.ps;
      self.util.addClass(ps, 'show');
      clearTimeout(this.scrollTime);
      self.scrollTime = setTimeout(function () {
        self.util.removeClass(ps, 'show');
      }, 1000);
    }
  }, {
    key: "initEvent",
    value: function initEvent() {
      var self = this;
      document.addEventListener('mousemove', function (evt) {
        if (self.drag) {
          var changePx = evt.screenY - self.scrollDragStandard[0];
          var changeTop = changePx / self.rating;
          var scrollTop = self.scrollDragStandard[1] + changeTop;
          self.scrollInner.scrollTop = scrollTop;
        }
      });
      self.ps.addEventListener('mousedown', function (evt) {
        self.scrollDragStandard[0] = evt.screenY;
        self.scrollDragStandard[1] = self.scrollInner.scrollTop;
        self.drag = true;
      });
      self.ps.addEventListener('mouseup', function () {
        self.drag = false;
      });
      document.addEventListener('mouseup', function () {
        self.drag = false;
      });
      self.scrollInner.addEventListener('mouseenter', function () {
        if (self.scrollInner.scrollHeight != self.scrollInner.clientHeight) {
          self.scrollShy();
        }
      });
      self.sc.addEventListener('mouseenter', function () {
        self.util.addClass(self.ps, 'show');
      });
      self.sc.addEventListener('mouseleave', function () {
        self.util.removeClass(self.ps, 'show');
      });
      self.scrollInner.addEventListener('scroll', function () {
        self.setScrollTop();
        self.scrollShy();
      });
      self.scrollInner.addEventListener('DOMSubtreeModified', function () {
        setTimeout(function () {
          self.makeScrollPosition();
          self.setScrollTop();
        }, 30);
      });
      window.addEventListener('resize', function () {
        if (self.isWebkit !== true) {
          var jwscrollWrap = self.scrollWrap;
          var jwscroll = self.scrollInner;
          jwscroll.removeAttribute("style");
          jwscrollWrap.removeAttribute("style");
          self.hiddenScroll();
        }

        self.makeScrollPosition();
        self.setScrollTop();
      });
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "jwscroll"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "jwscroll-inner"
      }, this.props.children));
    }
  }]);

  return Scroll;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);
/**
 *  REDUX STATE 주입
 */


/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(function (state) {
  return {
    previewScroll: state.default.write.scroll
  };
})(Scroll));

/***/ }),

/***/ "./src/components/lib/Util.js":
/*!************************************!*\
  !*** ./src/components/lib/Util.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Util; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Util =
/*#__PURE__*/
function () {
  function Util() {
    _classCallCheck(this, Util);
  }

  _createClass(Util, [{
    key: "addClass",
    value: function addClass(target, _addClass) {
      var className = target.className;

      if (!new RegExp(_addClass, 'g').exec(className)) {
        className += " " + _addClass;
        target.className = className;
      }
    }
  }, {
    key: "removeClass",
    value: function removeClass(target, _removeClass) {
      var className = target.className;

      if (new RegExp(_removeClass, 'g').exec(className)) {
        var regex = new RegExp(' ' + _removeClass, 'g');
        className = className.replace(regex, '');
        target.className = className;
      }
    }
  }]);

  return Util;
}();



/***/ }),

/***/ "./src/dispatcher.js":
/*!***************************!*\
  !*** ./src/dispatcher.js ***!
  \***************************/
/*! exports provided: initStoreDispatch, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initStoreDispatch", function() { return initStoreDispatch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return dispatcher; });
/* harmony import */ var _xhr_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./xhr.js */ "./src/xhr.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


var storeDispatch = null;
var storeInfo = null;
function initStoreDispatch(store) {
  storeDispatch = store.dispatch;
  storeInfo = store;
}

function request(_x, _x2) {
  return _request.apply(this, arguments);
}

function _request() {
  _request = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(url, data) {
    var method,
        requestOption,
        _args = arguments;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            method = _args.length > 2 && _args[2] !== undefined ? _args[2] : 'GET';
            requestOption = {
              method: method,
              url: url,
              data: data
            };

            if (method === 'POST') {
              requestOption.contentType = 'application/json; charset=UTF-8';
            }

            _context.next = 5;
            return Object(_xhr_js__WEBPACK_IMPORTED_MODULE_0__["default"])(requestOption);

          case 5:
            return _context.abrupt("return", _context.sent);

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
  return _request.apply(this, arguments);
}

function dispatcher(_x3) {
  return _dispatcher.apply(this, arguments);
}

function _dispatcher() {
  _dispatcher = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(action) {
    var searchString, list, info, newFav, _info, writeInfo, lists, noteId, choiceTarget, _lists, _writeInfo, updateResult, _choiceTarget;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            if (!(action.type === 'GETLIST')) {
              _context2.next = 8;
              break;
            }

            searchString = action.searchString;
            _context2.next = 4;
            return request('/jnote/read', searchString ? {
              searchString: searchString
            } : null);

          case 4:
            list = _context2.sent;
            action.list = list;
            _context2.next = 50;
            break;

          case 8:
            if (!(action.type === 'GETONE')) {
              _context2.next = 15;
              break;
            }

            _context2.next = 11;
            return request("/jnote/read/".concat(action.id), {});

          case 11:
            info = _context2.sent;
            action.info = info;
            _context2.next = 50;
            break;

          case 15:
            if (!(action.type === 'TOGGLE_FAVORITE')) {
              _context2.next = 23;
              break;
            }

            newFav = !storeInfo.getState().default.lists[action.idx].favorite;
            _context2.next = 19;
            return request("/jnote/update", {
              id: action.id,
              favorite: newFav
            }, 'POST');

          case 19:
            _info = _context2.sent;
            action.favorite = newFav;
            _context2.next = 50;
            break;

          case 23:
            if (!(action.type === 'WRITENOTE')) {
              _context2.next = 30;
              break;
            }

            writeInfo = storeInfo.getState().default.write;
            _context2.next = 27;
            return request("/jnote/create", {
              title: writeInfo.title,
              note: writeInfo.note,
              category: writeInfo.tags
            }, 'POST');

          case 27:
            action.data = _context2.sent;
            _context2.next = 50;
            break;

          case 30:
            if (!(action.type === 'DELETENOTE')) {
              _context2.next = 40;
              break;
            }

            lists = storeInfo.getState().default.lists;
            noteId = storeInfo.getState().default.view.noteId;
            _context2.next = 35;
            return request("/jnote/delete", {
              id: noteId
            }, 'POST');

          case 35:
            choiceTarget = null;
            lists.some(function (item, idx) {
              if (item._id === noteId) {
                choiceTarget = idx;
              }

              return item._id === noteId;
            });
            action.idx = choiceTarget;
            _context2.next = 50;
            break;

          case 40:
            if (!(action.type === 'EDITNOTE')) {
              _context2.next = 50;
              break;
            }

            _lists = storeInfo.getState().default.lists;
            _writeInfo = storeInfo.getState().default.write;
            _context2.next = 45;
            return request("/jnote/update", {
              id: _writeInfo.noteId,
              title: _writeInfo.title,
              note: _writeInfo.note,
              category: _writeInfo.tags
            }, 'POST');

          case 45:
            updateResult = _context2.sent;
            _choiceTarget = null;

            _lists.some(function (item, idx) {
              if (item._id === updateResult._id) {
                _choiceTarget = idx;
              }

              return item._id === updateResult._id;
            });

            action.idx = _choiceTarget;
            action.data = updateResult;

          case 50:
            storeDispatch(action);

          case 51:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));
  return _dispatcher.apply(this, arguments);
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/react.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/lib/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/lib/index.js");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_router_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-redux */ "./node_modules/react-router-redux/lib/index.js");
/* harmony import */ var react_router_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_router_redux__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _dispatcher_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dispatcher.js */ "./src/dispatcher.js");
/* harmony import */ var _reducers_jnote__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./reducers/jnote */ "./src/reducers/jnote.js");
/* harmony import */ var _components_App__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/App */ "./src/components/App.js");
/* harmony import */ var _components_Empty__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/Empty */ "./src/components/Empty.js");
/* harmony import */ var _components_View__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/View */ "./src/components/View.js");
/* harmony import */ var _components_Write__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/Write */ "./src/components/Write.js");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }













var reducer = Object(redux__WEBPACK_IMPORTED_MODULE_2__["combineReducers"])(_objectSpread({}, _reducers_jnote__WEBPACK_IMPORTED_MODULE_7__, {
  routing: react_router_redux__WEBPACK_IMPORTED_MODULE_5__["routerReducer"]
}));
var store = Object(redux__WEBPACK_IMPORTED_MODULE_2__["createStore"])(reducer //DevTools.instrument()
);
Object(_dispatcher_js__WEBPACK_IMPORTED_MODULE_6__["initStoreDispatch"])(store);
var history = Object(react_router_redux__WEBPACK_IMPORTED_MODULE_5__["syncHistoryWithStore"])(react_router__WEBPACK_IMPORTED_MODULE_4__["hashHistory"], store);
react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_3__["Provider"], {
  store: store
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_4__["Router"], {
  history: history
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_4__["Route"], {
  path: "/",
  component: _components_App__WEBPACK_IMPORTED_MODULE_8__["default"]
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_4__["IndexRoute"], {
  component: _components_Empty__WEBPACK_IMPORTED_MODULE_9__["default"]
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_4__["Route"], {
  path: "view/:id",
  component: _components_View__WEBPACK_IMPORTED_MODULE_10__["default"]
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_4__["Route"], {
  path: "write",
  component: _components_Write__WEBPACK_IMPORTED_MODULE_11__["default"]
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_4__["Route"], {
  path: "write/:id",
  component: _components_Write__WEBPACK_IMPORTED_MODULE_11__["default"]
})))), document.getElementById('jnote'));

/***/ }),

/***/ "./src/reducers/jnote.js":
/*!*******************************!*\
  !*** ./src/reducers/jnote.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return jnotereducer; });
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var initialStateList = {
  search: {
    tags: []
  },
  lists: [],
  view: {
    noteId: 0,
    title: '',
    note: '',
    tags: []
  },
  write: {
    noteId: 0,
    title: '',
    note: '',
    scroll: 0,
    tags: []
  },
  preview: {
    opened: false
  },
  dialog: {
    opened: false,
    type: 'alert',
    message: ''
  },
  shortcut: {
    buffer: null,
    admin: false
  }
};
function jnotereducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialStateList;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  var new_state = {};

  switch (action.type) {
    /* scroll 체인지 */
    case 'SCROLL_CHANGE':
      new_state = JSON.parse(JSON.stringify(state));
      new_state.write.scroll = action.scroll;
      return new_state;
      break;

    /* 쇼트컷 체인지 */

    case 'ADMIN_CHANGE':
      new_state = Object.assign({}, state);
      new_state.shortcut.admin = action.bool;
      return new_state;
      break;

    /* 쇼트컷 체인지 */

    case 'SHORTCUT_CHANGE':
      new_state = Object.assign({}, state, {
        shortcut: Object.assign({}, state.shortcut, {
          buffer: action.command
        })
      });
      return new_state;
      break;

    /* 다이얼로그 열기 */

    case 'OPEN_DIALOG':
      new_state = Object.assign({}, state, {
        dialog: {
          opened: true,
          type: action.dialogtype,
          message: action.message,
          successaction: action.successaction,
          failAction: action.failaction
        }
      });
      return new_state;
      break;

    /* 다이얼로그 닫기 */

    case 'CLOSE_DIALOG':
      new_state = Object.assign({}, state, {
        dialog: {
          opened: false,
          type: ''
        }
      });
      return new_state;
      break;

    case 'TOGGLE_FAVORITE':
      new_state = JSON.parse(JSON.stringify(state));
      new_state.lists[action.idx].favorite = action.favorite;
      return new_state;
      break;

    /* 프리뷰모드 체인지 */

    case 'TOGGLE_PREVIEW':
      var opened = state.preview.opened ? false : true;
      new_state = Object.assign({}, state);
      new_state.preview.opened = opened;
      return new_state;
      break;

    /* 글쓰기 */

    case 'WRITENOTE':
      var dataa = action.data;
      var newArray = [dataa].concat(state.lists);
      new_state = Object.assign({}, state, {
        lists: newArray,
        write: {
          title: '',
          note: '',
          tags: []
        }
      });
      return new_state;
      break;

    /* 글수정 */

    case 'EDITNOTE':
      new_state = Object.assign({}, state);
      new_state.lists[action.idx] = action.data;
      return new_state;
      break;

    /* wirte 내용을 view 내용과 상태 동기화 */

    case 'UPDATEFORM_SYNC':
      new_state = Object.assign({}, state, {
        write: {
          noteId: state.view.noteId,
          title: state.view.title,
          note: state.view.note,
          tags: state.view.tags
        }
      });
      return new_state;
      break;

    /* 타이틀 폼수정 */

    case 'UPDATEFORM_TITLE':
      new_state = Object.assign({}, state);
      new_state.write.title = action.text;
      return new_state;
      break;

    /* 컨텐츠 폼수정 */

    case 'UPDATEFORM_NOTE':
      new_state = Object.assign({}, state);
      new_state.write.note = action.text;
      return new_state;
      break;

    /* 컨텐츠 폼수정 */

    case 'UPDATEFORM_TAGS':
      new_state = Object.assign({}, state);
      new_state.write.tags = action.text;
      return new_state;
      break;

    /* 글 삭제 */

    case 'DELETENOTE':
      new_state = Object.assign({}, state);
      new_state.lists.splice(action.idx, 1);
      state.lists = _toConsumableArray(new_state.lists);
      return state;
      break;

    /* 글 하나 */

    case 'GETONE':
      return Object.assign({}, state, {
        view: {
          note: action.info.note,
          title: action.info.title,
          tags: action.info.category,
          noteId: action.id
        }
      });
      break;

    /* 글 리스트 */

    case 'GETLIST':
      new_state = JSON.parse(JSON.stringify(state));
      var data = {};

      if (action.searchString) {
        data.searchString = action.searchString;
      }

      new_state = Object.assign({}, state, {
        lists: action.list
      });
      return new_state;
      break;

    /* 기본값 리턴 */

    default:
      return state;
      break;
  }
}

/***/ }),

/***/ "./src/xhr.js":
/*!********************!*\
  !*** ./src/xhr.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ajax; });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var objectToQuerystring = function objectToQuerystring(obj) {
  if (!obj) {
    return {};
  }

  var filterkeys = Object.keys(obj).filter(function (key) {
    return obj[key] !== '' && obj[key] !== null;
  });
  return filterkeys.reduce(function (acc, key, index) {
    var startWith = index === 0 ? '' : '&';
    var value = obj[key];

    if (Array.isArray(value)) {
      value.forEach(function (arrValue) {
        acc += "".concat(startWith).concat(key, "[]=").concat(arrValue);
      });
    } else {
      acc += "".concat(startWith).concat(key, "=").concat(value);
    }

    return acc;
  }, '');
};

var createXhr = function createXhr(method, url, data, contentType) {
  return new Promise(function (resolve, reject) {
    var xhr = new XMLHttpRequest();

    if ('withCredentials' in xhr) {
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          if (xhr.status === 200 && resolve) {
            resolve(xhr.response);
          } else {
            reject('xhr error');
          }
        }
      };

      xhr.open(method, url, false);
      xhr.withCredentials = true;

      if (contentType) {
        xhr.setRequestHeader("Content-Type", contentType);
      }
    } else if (typeof XDomainRequest !== 'undefined') {
      xhr = new XDomainRequest();

      xhr.onprogress = function () {}; // no aborting


      xhr.ontimeout = function () {}; // "


      xhr.open(method, url);
    } else {
      xhr = null;
    }

    xhr.send(JSON.stringify(data));
  });
};

function ajax(_x) {
  return _ajax.apply(this, arguments);
}

function _ajax() {
  _ajax = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(ajaxRequestInfo) {
    var url, method, data, success, fail, options, contentType, result;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            url = ajaxRequestInfo.url;
            method = ajaxRequestInfo.method;
            data = ajaxRequestInfo.data;
            success = ajaxRequestInfo.success;
            fail = ajaxRequestInfo.fail;
            options = ajaxRequestInfo.options || {};
            contentType = ajaxRequestInfo.contentType;

            if (method !== 'POST' && data) {
              url += "?".concat(objectToQuerystring(data));
            }

            _context.next = 10;
            return createXhr(method, url, data, contentType);

          case 10:
            result = _context.sent;
            return _context.abrupt("return", JSON.parse(result));

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
  return _ajax.apply(this, arguments);
}

/***/ }),

/***/ 0:
/*!********************************************!*\
  !*** multi @babel/polyfill ./src/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! @babel/polyfill */"./node_modules/@babel/polyfill/lib/index.js");
module.exports = __webpack_require__(/*! ./src/index.js */"./src/index.js");


/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9qbm90ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9BcHAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvRGlhbG9nLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0VtcHR5LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0Zvb3Rlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9IZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9MaXN0SXRlbS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9UYWdJdGVtLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1ZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvVmlld05vdGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvV3JpdGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvanVjL1Njcm9sbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9saWIvVXRpbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZGlzcGF0Y2hlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHVjZXJzL2pub3RlLmpzIiwid2VicGFjazovLy8uL3NyYy94aHIuanMiXSwibmFtZXMiOlsic2Nyb2xsQ2hhbmdlIiwic2Nyb2xsIiwidHlwZSIsInNob3J0Y3V0Q2hhbmdlIiwiY29tbWFuZCIsImFkbWluQ2hhbmdlIiwiYm9vbCIsIm9wZW5EaWFsb2ciLCJkaWFsb2d0eXBlIiwibWVzc2FnZSIsInN1Y2Nlc3NhY3Rpb24iLCJmYWlsYWN0aW9uIiwiY2xvc2VEaWFsb2ciLCJ0b2dnbGVGYXZvcml0ZSIsImlkIiwiaWR4IiwidG9nZ2xlUHJldmlldyIsIndyaXRlTm90ZSIsImRhdGEiLCJlZGl0Tm90ZSIsImRlbGV0ZU5vdGUiLCJnZXRMaXN0Iiwic2VhcmNoU3RyaW5nIiwibGlzdCIsImdldE9uZSIsImluZm8iLCJ1cGRhdGVGb3JtIiwidGV4dCIsInRvVXBwZXJDYXNlIiwiQXBwIiwicHJvcHMiLCJjaGlsZHJlbiIsInN0YXRlIiwiZG93bnN0YXRlIiwicmVhbGxlZnQiLCJkaXNwYXRjaGVyIiwic2V0U3RhdGUiLCJlIiwicGFnZVgiLCJ0b3VjaGVzIiwibGVuZ3RoIiwiY29udGFpbmVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImNvbnRhaW5lcldpZHRoIiwiY2xpZW50V2lkdGgiLCJNYXRoIiwicm91bmQiLCJjaGFuZ2VTaGFkb3dMZWZ0Iiwic2hhZG93bGVmdCIsImxlZnQiLCJzcGxpdFN0eWxlIiwiU1BMSVRTSEFET1ciLCJDSElMRFJFTiIsIlJlYWN0IiwiY2xvbmVFbGVtZW50IiwiRElBTE9HIiwiZGlhbG9nIiwib3BlbmVkIiwibG9jYXRpb24iLCJwcmV2aWV3IiwiYWRtaW5Nb2RlIiwiaGFuZGxlTW91c2VNb3ZlIiwiYmluZCIsImhhbmRsZU1vdXNlVXAiLCJoYW5kbGVNb3VzZUxlYXZlIiwibGlzdHMiLCJoYW5kbGVNb3VzZURvd24iLCJwYXJhbXMiLCJDb21wb25lbnQiLCJjb25uZWN0IiwiZGVmYXVsdCIsInNob3J0Y3V0IiwiYWRtaW4iLCJEaWFsb2ciLCJzdWNjZXNzQWN0aW9uIiwiYWN0aW9uIiwic3VjY2Vzc1B1c2giLCJwdXNoIiwicGFyYW0iLCJpbmRleE9mIiwicXVlcnlTZWxlY3RvciIsInZhbHVlIiwiaGFzaEhpc3RvcnkiLCJtYXRjaCIsImhhbmRsZURpYWxvZ0Nsb3NlIiwiZXZlbnQiLCJrZXlDb2RlIiwiaGFuZGxlRGlhbG9nU3VjY2VzcyIsImZvY3VzIiwiQk9YIiwiaGFuZGxlSW5wdXRBY3Rpb24iLCJFbXB0eSIsIkZvb3RlciIsInRpbWVvdXRTdGF0ZSIsInByZUtleUNvZGUiLCJhZGRFdmVudExpc3RlbmVyIiwia2V5Q2hhckNvZGUiLCJjaGFyQ29kZSIsInNoaWZ0S2V5IiwiQ29kZU1pcnJvciIsIlZpbSIsImp3bW9kZSIsInRhcmdldCIsInRhZ05hbWUiLCJibHVyIiwic2V0VGltZW91dCIsInByZXZlbnREZWZhdWx0Iiwic2hvcnRjdXRCdWZmZXIiLCJtYXRjaFN0cmluZyIsIlN0cmluZyIsImZyb21DaGFyQ29kZSIsImV4ZWMiLCJ2aWV3VGFyZ2V0VHJpZ2dlciIsImNsaWNrIiwibm90ZUlkIiwicGF0aG5hbWUiLCJyZXBsYWNlIiwiY2hhbmdlTGVmdCIsInBhcnNlSW50IiwiY2xlYXJUaW1lb3V0IiwicHJpdmF0ZUNoYXIiLCJidWZmZXIiLCJIZWFkZXIiLCJCVVRUT04iLCJ0aXRsZSIsInZpZXdUeXBlIiwidmlld1RpdGxlIiwiaGFuZGxlRWRpdE1lbW8iLCJoYW5kbGVEZWxldGVNZW1vIiwidW5zaGlmdCIsImhhbmRsZUNoYW5nZVdyaXRlcGFnZSIsInByZXZpZXdUb2dnbGUiLCJoYW5kbGVTaG93UHJldmlldyIsImhhbmRsZVdyaXRlTWVtbyIsImhhbmRsZVdyaXRlQ2FuY2VsIiwiaGFuZGxlTG9naW4iLCJoYW5kbGVMb2dvdXQiLCJ2aWV3IiwiTGlzdCIsInJlYWxyaWdodCIsInJpZ2h0IiwibWFwIiwiaXRlbSIsIl9pZCIsImZhdm9yaXRlIiwiY2F0ZWdvcnkiLCJMaXN0SXRlbSIsInN0b3BQcm9wYWdhdGlvbiIsInRhZ3MiLCJyZWR1Y2UiLCJwcmV2QXJyYXkiLCJ0YWciLCJuZXh0QXJyYXkiLCJoYW5kbGVDaG9pY2tMaXN0IiwiaGFuZGxlQ2hhbmdlRmF2IiwiVGFnSXRlbSIsIlZpZXciLCJjbGFzc25hbWUiLCJWaWV3Tm90ZSIsInJvdXRlUGFyYW1zIiwibmV4dHByb3BzIiwibWFya2VkIiwic2V0T3B0aW9ucyIsInJlbmRlcmVyIiwiUmVuZGVyZXIiLCJnZm0iLCJ0YWJsZXMiLCJicmVha3MiLCJwZWRhbnRpYyIsInNhbml0aXplIiwic21hcnRMaXN0cyIsInNtYXJ0eXBhbnRzIiwibm90ZSIsInByZXZpZXdOb3RlIiwidG9TdHJpbmciLCJfX2h0bWwiLCJ3cml0ZSIsIldyaXRlIiwic2Nyb2xsUGVyY2VudCIsImVkaXRvciIsInNldFZhbHVlIiwid3JpdGVTY3JvbGwiLCIkdGhpcyIsIlJlYWN0RE9NIiwiZmluZERPTU5vZGUiLCJyZWZzIiwidGV4dGFyZWEiLCJyZXN1bHQiLCJzY3JvbGxIZWlnaHQiLCJjbGllbnRIZWlnaHQiLCJzY3JvbGxUb3AiLCJsYXN0RmFsZyIsInNsaWNlIiwiZXZlbnRUYXJnZXQiLCJwZXJjZW50IiwidGFnc1N0cmluZyIsInNwbGl0IiwibmV3VGFnIiwiZm9yRWFjaCIsImZyb21UZXh0QXJlYSIsImxpbmVOdW1iZXJzIiwia2V5TWFwIiwibGluZVdyYXBwaW5nIiwib24iLCJzYXZlIiwiY2hhbmdlTm90ZSIsIm1vZGUiLCJjaGFuZ2VTY3JvbGwiLCJkaXNwbGF5Iiwic2Nyb2xsYmFycyIsInZlcnQiLCJsaW5lRGl2IiwiZHJhZ0VudGVyIiwib25Ecm9wIiwic2VsZiIsInZhbHVlX3RhcmdldCIsImZpbGUiLCJkYXRhVHJhbnNmZXIiLCJmaWxlcyIsImZvcm1kYXRhIiwiRm9ybURhdGEiLCJ4aHIiLCJYTUxIdHRwUmVxdWVzdCIsImFwcGVuZCIsIm9wZW4iLCJzZW5kIiwib25yZWFkeXN0YXRlY2hhbmdlIiwicmVhZHlTdGF0ZSIsInN0YXR1cyIsIkpTT04iLCJwYXJzZSIsInJlc3BvbnNlVGV4dCIsImltZyIsImZpbGVwYXRoIiwid3JpdGVUYWdzIiwiam9pbiIsImNoYW5nZVRpdGxlIiwid3JpdGVUaXRsZSIsImNoYW5nZVRhZyIsIlNjcm9sbCIsInNjcm9sbFdyYXAiLCJzY3JvbGxJbm5lciIsInBzIiwic2MiLCJyYXRpbmciLCJvcCIsIm9wdGlvbiIsInNjcm9sbERyYWdTdGFuZGFyZCIsImRyYWciLCJzY3JvbGxUaW1lIiwidXRpbCIsIlV0aWwiLCJpc1dlYmtpdCIsImRvY3VtZW50RWxlbWVudCIsInN0eWxlIiwiaGlkZGVuU2Nyb2xsIiwiYWRkU2Nyb2xsIiwibWFrZVNjcm9sbFBvc2l0aW9uIiwic2V0U2Nyb2xsVG9wIiwiaW5pdEV2ZW50IiwiandzY3JvbGxXcmFwIiwiandzY3JvbGwiLCJyZW1vdmVBdHRyaWJ1dGUiLCJwcmV2aWV3U2Nyb2xsIiwiTnVtYmVyIiwic2Nyb2xsV2lkdGgiLCJvZmZzZXRXaWR0aCIsImlubmVyV2lkdGgiLCJ3aWR0aCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJhcHBlbmRDaGlsZCIsInBvc0hlaWdodCIsImhlaWdodCIsInNjcm9sbFNob3dBbHdheXMiLCJvcGFjaXR5IiwidG9wIiwiYWRkQ2xhc3MiLCJyZW1vdmVDbGFzcyIsImV2dCIsImNoYW5nZVB4Iiwic2NyZWVuWSIsImNoYW5nZVRvcCIsInNjcm9sbFNoeSIsIndpbmRvdyIsIlJlZ0V4cCIsInJlZ2V4Iiwic3RvcmVEaXNwYXRjaCIsInN0b3JlSW5mbyIsImluaXRTdG9yZURpc3BhdGNoIiwic3RvcmUiLCJkaXNwYXRjaCIsInJlcXVlc3QiLCJ1cmwiLCJtZXRob2QiLCJyZXF1ZXN0T3B0aW9uIiwiY29udGVudFR5cGUiLCJhamF4IiwibmV3RmF2IiwiZ2V0U3RhdGUiLCJ3cml0ZUluZm8iLCJjaG9pY2VUYXJnZXQiLCJzb21lIiwidXBkYXRlUmVzdWx0IiwicmVkdWNlciIsImNvbWJpbmVSZWR1Y2VycyIsInJlZHVjZXJzIiwicm91dGluZyIsInJvdXRlclJlZHVjZXIiLCJjcmVhdGVTdG9yZSIsImhpc3RvcnkiLCJzeW5jSGlzdG9yeVdpdGhTdG9yZSIsInJlbmRlciIsImluaXRpYWxTdGF0ZUxpc3QiLCJzZWFyY2giLCJqbm90ZXJlZHVjZXIiLCJuZXdfc3RhdGUiLCJzdHJpbmdpZnkiLCJPYmplY3QiLCJhc3NpZ24iLCJmYWlsQWN0aW9uIiwiZGF0YWEiLCJuZXdBcnJheSIsImNvbmNhdCIsInNwbGljZSIsIm9iamVjdFRvUXVlcnlzdHJpbmciLCJvYmoiLCJmaWx0ZXJrZXlzIiwia2V5cyIsImZpbHRlciIsImtleSIsImFjYyIsImluZGV4Iiwic3RhcnRXaXRoIiwiQXJyYXkiLCJpc0FycmF5IiwiYXJyVmFsdWUiLCJjcmVhdGVYaHIiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInJlc3BvbnNlIiwid2l0aENyZWRlbnRpYWxzIiwic2V0UmVxdWVzdEhlYWRlciIsIlhEb21haW5SZXF1ZXN0Iiwib25wcm9ncmVzcyIsIm9udGltZW91dCIsImFqYXhSZXF1ZXN0SW5mbyIsInN1Y2Nlc3MiLCJmYWlsIiwib3B0aW9ucyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdCQUFRLG9CQUFvQjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUFpQiw0QkFBNEI7QUFDN0M7QUFDQTtBQUNBLDBCQUFrQiwyQkFBMkI7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUFnQix1QkFBdUI7QUFDdkM7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDdEpBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFHQTs7O0FBR08sU0FBU0EsWUFBVCxDQUF1QkMsTUFBdkIsRUFBK0I7QUFDcEMsU0FBTztBQUNMQyxRQUFJLEVBQUUsZUFERDtBQUVMRCxVQUFNLEVBQU5BO0FBRkssR0FBUDtBQUlEO0FBRUQ7Ozs7QUFHTyxTQUFTRSxjQUFULENBQXlCQyxPQUF6QixFQUFrQztBQUN2QyxTQUFPO0FBQ0xGLFFBQUksRUFBRSxpQkFERDtBQUVMRSxXQUFPLEVBQVBBO0FBRkssR0FBUDtBQUlEO0FBRUQ7Ozs7QUFHTyxTQUFTQyxXQUFULENBQXNCQyxJQUF0QixFQUE0QjtBQUNqQyxTQUFPO0FBQ0xKLFFBQUksRUFBRSxjQUREO0FBRUxJLFFBQUksRUFBSkE7QUFGSyxHQUFQO0FBSUQ7QUFFRDs7OztBQUdPLFNBQVNDLFVBQVQsQ0FBcUJDLFVBQXJCLEVBQWlDQyxPQUFqQyxFQUErRTtBQUFBLE1BQXJDQyxhQUFxQyx1RUFBdkIsSUFBdUI7QUFBQSxNQUFqQkMsVUFBaUIsdUVBQU4sSUFBTTtBQUNwRixTQUFPO0FBQ0xULFFBQUksRUFBRSxhQUREO0FBRUxNLGNBQVUsRUFBVkEsVUFGSztBQUdMQyxXQUFPLEVBQVBBLE9BSEs7QUFJTEMsaUJBQWEsRUFBYkEsYUFKSztBQUtMQyxjQUFVLEVBQVZBO0FBTEssR0FBUDtBQU9EO0FBRUQ7Ozs7QUFJTyxTQUFTQyxXQUFULEdBQXdCO0FBQzdCLFNBQU87QUFDTFYsUUFBSSxFQUFFO0FBREQsR0FBUDtBQUdEO0FBRUQ7Ozs7QUFHTyxTQUFTVyxjQUFULENBQXlCQyxFQUF6QixFQUE2QkMsR0FBN0IsRUFBa0M7QUFDdkMsU0FBTztBQUNMYixRQUFJLEVBQUUsaUJBREQ7QUFFTFksTUFBRSxFQUFGQSxFQUZLO0FBR0xDLE9BQUcsRUFBSEE7QUFISyxHQUFQO0FBS0Q7QUFHRDs7OztBQUdPLFNBQVNDLGFBQVQsR0FBMEI7QUFDL0IsU0FBTztBQUNMZCxRQUFJLEVBQUU7QUFERCxHQUFQO0FBR0Q7QUFFRDs7OztBQUdPLFNBQVNlLFNBQVQsR0FBc0I7QUFDM0IsU0FBTztBQUNMZixRQUFJLEVBQUUsV0FERDtBQUVMZ0IsUUFBSSxFQUFFO0FBRkQsR0FBUDtBQUlEO0FBRUQ7Ozs7QUFHTyxTQUFTQyxRQUFULENBQW1CTCxFQUFuQixFQUF1QjtBQUM1QixTQUFPO0FBQ0xaLFFBQUksRUFBRSxVQUREO0FBRUxZLE1BQUUsRUFBRkEsRUFGSztBQUdMQyxPQUFHLEVBQUUsSUFIQTtBQUlMRyxRQUFJLEVBQUU7QUFKRCxHQUFQO0FBTUQ7QUFFRDs7OztBQUdPLFNBQVNFLFVBQVQsR0FBdUI7QUFDNUIsU0FBTztBQUNMbEIsUUFBSSxFQUFFLFlBREQ7QUFFTGEsT0FBRyxFQUFFO0FBRkEsR0FBUDtBQUlEO0FBRUQ7Ozs7QUFHTyxTQUFTTSxPQUFULENBQWtCQyxZQUFsQixFQUFnQztBQUNyQyxTQUFPO0FBQ0xwQixRQUFJLEVBQUUsU0FERDtBQUVMb0IsZ0JBQVksRUFBWkEsWUFGSztBQUdMQyxRQUFJLEVBQUU7QUFIRCxHQUFQO0FBS0Q7QUFFRDs7OztBQUdPLFNBQVNDLE1BQVQsQ0FBaUJWLEVBQWpCLEVBQXFCO0FBQzFCLFNBQU87QUFDTFosUUFBSSxFQUFFLFFBREQ7QUFFTFksTUFBRSxFQUFGQSxFQUZLO0FBR0xXLFFBQUksRUFBRTtBQUhELEdBQVA7QUFLRDtBQUdNLFNBQVNDLFVBQVQsQ0FBcUJ4QixJQUFyQixFQUEyQnlCLElBQTNCLEVBQWlDO0FBQ3RDLFNBQU87QUFDTHpCLFFBQUksRUFBRSxnQkFBZ0JBLElBQUksQ0FBQzBCLFdBQUwsRUFEakI7QUFFTEQsUUFBSSxFQUFKQTtBQUZLLEdBQVA7QUFJRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pJRDtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUNBOztJQUVNRSxHOzs7OztBQUVKLGVBQVlDLEtBQVosRUFBbUJDLFFBQW5CLEVBQTZCO0FBQUE7O0FBQUE7O0FBQzNCLDZFQUFNRCxLQUFOO0FBR0EsVUFBS0UsS0FBTCxHQUFhO0FBQ1hDLGVBQVMsRUFBRSxLQURBO0FBRVhDLGNBQVEsRUFBRTtBQUZDLEtBQWI7QUFKMkI7QUFRNUI7Ozs7d0NBR21CO0FBQ2xCO0FBQ0FDLG9FQUFVLENBQUNkLDhEQUFPLEVBQVIsQ0FBVjtBQUNEOzs7c0NBRWlCO0FBQ2hCLFdBQUtlLFFBQUwsQ0FBYztBQUFFSCxpQkFBUyxFQUFFO0FBQWIsT0FBZDtBQUNEOzs7a0NBRWFJLEMsRUFBRztBQUNmLFVBQUksS0FBS0wsS0FBTCxDQUFXQyxTQUFmLEVBQTBCO0FBQ3hCLFlBQUlLLEtBQUssR0FBR0QsQ0FBQyxDQUFDQyxLQUFkOztBQUNBLFlBQUksQ0FBQ0EsS0FBRCxJQUFVRCxDQUFDLENBQUNFLE9BQWhCLEVBQXlCO0FBQ3ZCLGNBQUlGLENBQUMsQ0FBQ0UsT0FBRixDQUFVQyxNQUFWLElBQW9CLENBQXhCLEVBQTJCO0FBQ3pCO0FBQ0Q7O0FBQ0RGLGVBQUssR0FBR0QsQ0FBQyxDQUFDRSxPQUFGLENBQVUsQ0FBVixFQUFhRCxLQUFyQjtBQUNEOztBQUNELFlBQU1HLFNBQVMsR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLFdBQXhCLENBQWxCO0FBQ0EsWUFBTUMsY0FBYyxHQUFHSCxTQUFTLENBQUNJLFdBQWpDO0FBQ0EsWUFBTVgsUUFBUSxHQUFJWSxJQUFJLENBQUNDLEtBQUwsQ0FBWVQsS0FBSyxHQUFHTSxjQUFULEdBQTRCLEdBQXZDLENBQWxCO0FBRUEsYUFBS0ksZ0JBQUwsQ0FBc0JkLFFBQXRCO0FBQ0Q7QUFDRjs7O3VDQUVrQjtBQUNqQixXQUFLRSxRQUFMLENBQWM7QUFBRUgsaUJBQVMsRUFBRTtBQUFiLE9BQWQ7QUFDRDs7O29DQUVlSSxDLEVBQUc7QUFDakIsVUFBSSxLQUFLTCxLQUFMLENBQVdDLFNBQWYsRUFBMEI7QUFDeEIsWUFBTUssS0FBSyxHQUFHRCxDQUFDLENBQUNDLEtBQUYsSUFBV0QsQ0FBQyxDQUFDRSxPQUFGLENBQVUsQ0FBVixFQUFhRCxLQUF0QztBQUNBLGFBQUtGLFFBQUwsQ0FBYztBQUNaYSxvQkFBVSxFQUFFO0FBQUVDLGdCQUFJLGlCQUFVWixLQUFLLEdBQUcsQ0FBbEI7QUFBTjtBQURBLFNBQWQ7QUFHRDtBQUNGOzs7cUNBQ2dCSixRLEVBQVU7QUFDekIsV0FBS0UsUUFBTCxDQUFjO0FBQ1pILGlCQUFTLEVBQUUsS0FEQztBQUVaQyxnQkFBUSxFQUFSQTtBQUZZLE9BQWQ7QUFJRDs7OzZCQUdRO0FBQ1AsVUFBSUEsUUFBUSxHQUFHLEtBQUtGLEtBQUwsQ0FBV0UsUUFBMUI7QUFDQSxVQUFJaUIsVUFBVSxHQUFHO0FBQ2ZELFlBQUksaUJBQVVoQixRQUFWO0FBRFcsT0FBakI7QUFJQSxVQUFJa0IsV0FBVyxHQUFJLElBQW5COztBQUNBLFVBQUksS0FBS3BCLEtBQUwsQ0FBV0MsU0FBZixFQUEwQjtBQUN4Qm1CLG1CQUFXLEdBQUc7QUFBSyxtQkFBUyxFQUFDLGNBQWY7QUFBOEIsZUFBSyxFQUFFLEtBQUtwQixLQUFMLENBQVdpQjtBQUFoRCxVQUFkO0FBQ0Q7O0FBRUQsVUFBSUksUUFBUSxHQUFHQyw0Q0FBSyxDQUFDQyxZQUFOLENBQW1CLEtBQUt6QixLQUFMLENBQVdDLFFBQTlCLEVBQXdDO0FBQ3JERyxnQkFBUSxFQUFSQTtBQURxRCxPQUF4QyxDQUFmO0FBSUEsVUFBSXNCLE1BQU0sR0FBRyxJQUFiOztBQUNBLFVBQUssS0FBSzFCLEtBQUwsQ0FBVzJCLE1BQVgsQ0FBa0JDLE1BQXZCLEVBQWdDO0FBQzlCRixjQUFNLEdBQUcsMkRBQUMsK0NBQUQsRUFBWSxLQUFLMUIsS0FBakIsQ0FBVDtBQUNEOztBQUVELGFBQ0k7QUFBSyxVQUFFLEVBQUM7QUFBUixTQUNFLDJEQUFDLCtDQUFEO0FBQ0UsZ0JBQVEsRUFBRSxLQUFLQSxLQUFMLENBQVc2QixRQUR2QjtBQUVFLGVBQU8sRUFBRSxLQUFLN0IsS0FBTCxDQUFXOEIsT0FGdEI7QUFHRSxpQkFBUyxFQUFFLEtBQUs5QixLQUFMLENBQVcrQjtBQUh4QixRQURGLEVBTUU7QUFBSyxVQUFFLEVBQUMsV0FBUjtBQUNFLG1CQUFXLEVBQUUsS0FBS0MsZUFBTCxDQUFxQkMsSUFBckIsQ0FBMEIsSUFBMUIsQ0FEZjtBQUVFLGlCQUFTLEVBQUUsS0FBS0MsYUFBTCxDQUFtQkQsSUFBbkIsQ0FBd0IsSUFBeEIsQ0FGYjtBQUdFLG9CQUFZLEVBQUUsS0FBS0UsZ0JBQUwsQ0FBc0JGLElBQXRCLENBQTJCLElBQTNCLENBSGhCO0FBSUUsbUJBQVcsRUFBRSxLQUFLRCxlQUFMLENBQXFCQyxJQUFyQixDQUEwQixJQUExQjtBQUpmLFNBTUdQLE1BTkgsRUFRTSxLQUFLMUIsS0FBTCxDQUFXOEIsT0FBYixHQUVFLDJEQUFDLDZDQUFEO0FBQU0sZ0JBQVEsRUFBQyxTQUFmO0FBQXlCLGdCQUFRLEVBQUUsS0FBSzVCLEtBQUwsQ0FBV0U7QUFBOUMsUUFGRixHQUlFLDJEQUFDLDZDQUFEO0FBQ0ksYUFBSyxFQUFFLEtBQUtKLEtBQUwsQ0FBV29DLEtBRHRCO0FBRUksaUJBQVMsRUFBRSxLQUFLcEMsS0FBTCxDQUFXK0IsU0FGMUI7QUFHSSxnQkFBUSxFQUFFLEtBQUs3QixLQUFMLENBQVdFO0FBSHpCLFFBWk4sRUFrQkU7QUFDRSxtQkFBVyxFQUFFLEtBQUtpQyxlQUFMLENBQXFCSixJQUFyQixDQUEwQixJQUExQixDQURmO0FBRUUsb0JBQVksRUFBRSxLQUFLSSxlQUFMLENBQXFCSixJQUFyQixDQUEwQixJQUExQixDQUZoQjtBQUdFLGtCQUFVLEVBQUUsS0FBS0MsYUFBTCxDQUFtQkQsSUFBbkIsQ0FBd0IsSUFBeEIsQ0FIZDtBQUlFLGlCQUFTLEVBQUMsT0FKWjtBQUtFLGFBQUssRUFBRVo7QUFMVCxRQWxCRixFQTBCR0MsV0ExQkgsRUEyQkdDLFFBM0JILENBTkYsRUFtQ0UsMkRBQUMsK0NBQUQ7QUFDRSxnQkFBUSxFQUFFLEtBQUt2QixLQUFMLENBQVc2QixRQUR2QjtBQUVFLGNBQU0sRUFBRSxLQUFLN0IsS0FBTCxDQUFXc0MsTUFGckI7QUFHRSxlQUFPLEVBQUUsS0FBS3RDLEtBQUwsQ0FBVzhCLE9BSHRCO0FBSUUsaUJBQVMsRUFBRSxLQUFLOUIsS0FBTCxDQUFXK0IsU0FKeEI7QUFLRSx3QkFBZ0IsRUFBRSxLQUFLYixnQkFBTCxDQUFzQmUsSUFBdEIsQ0FBMkIsSUFBM0IsQ0FMcEI7QUFNRSxnQkFBUSxFQUFFLEtBQUsvQixLQUFMLENBQVdFO0FBTnZCLFFBbkNGLENBREo7QUErQ0Q7Ozs7RUE5SGVtQywrQztBQWlJbEI7Ozs7O0FBR2VDLDBIQUFPLENBQUMsVUFBVXRDLEtBQVYsRUFBaUI7QUFDcEMsU0FBTztBQUNMa0MsU0FBSyxFQUFFbEMsS0FBSyxDQUFDdUMsT0FBTixDQUFjTCxLQURoQjtBQUVMTixXQUFPLEVBQUU1QixLQUFLLENBQUN1QyxPQUFOLENBQWNYLE9BQWQsQ0FBc0JGLE1BRjFCO0FBR0xELFVBQU0sRUFBRXpCLEtBQUssQ0FBQ3VDLE9BQU4sQ0FBY2QsTUFIakI7QUFJTEksYUFBUyxFQUFFN0IsS0FBSyxDQUFDdUMsT0FBTixDQUFjQyxRQUFkLENBQXVCQztBQUo3QixHQUFQO0FBTUgsQ0FQcUIsQ0FBUCxDQU9aNUMsR0FQWSxDQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25KQTtBQUNBO0FBQ0E7QUFFQTs7QUFDQTs7SUFFcUI2QyxNOzs7OztBQUVuQixrQkFBWTVDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDakIsZ0ZBQU1BLEtBQU47QUFDQSxVQUFLLFlBQUwsSUFBcUJWLHlEQUFyQjtBQUNBLFVBQUssU0FBTCxJQUFrQkMsc0RBQWxCO0FBQ0EsVUFBSyxhQUFMLElBQXNCaEIsMERBQXRCO0FBSmlCO0FBS2xCOzs7O3dDQUVtQjtBQUNsQjhCLG9FQUFVLENBQUN2QixrRUFBVyxFQUFaLENBQVY7QUFDRDs7Ozs7Ozs7Ozs7O0FBSUsrRCw2QixHQUFnQixLQUFLN0MsS0FBTCxDQUFXMkIsTUFBWCxDQUFrQi9DLGFBQWxCLENBQWdDa0UsTTtBQUNoREMsMkIsR0FBYyxLQUFLL0MsS0FBTCxDQUFXMkIsTUFBWCxDQUFrQi9DLGFBQWxCLENBQWdDb0UsSTtBQUU5Q0MscUIsR0FBUSxFOztzQkFFUCxDQUFDLFFBQUQsRUFBVSxTQUFWLEVBQXFCQyxPQUFyQixDQUE2QixLQUFLbEQsS0FBTCxDQUFXMkIsTUFBWCxDQUFrQnZELElBQS9DLElBQXVELENBQUMsQzs7Ozs7QUFFM0Qsb0JBQUl3QyxRQUFRLENBQUN1QyxhQUFULENBQXVCLGdCQUF2QixDQUFKLEVBQThDO0FBQzVDRix1QkFBSyxHQUFHckMsUUFBUSxDQUFDdUMsYUFBVCxDQUF1QixnQkFBdkIsRUFBeUNDLEtBQWpEO0FBQ0Q7Ozt1QkFDSy9DLDhEQUFVLENBQUMsS0FBS3dDLGFBQUwsRUFBb0JJLEtBQXBCLENBQUQsQzs7O0FBQ2hCSSx3RUFBVyxDQUFDTCxJQUFaLENBQWlCRCxXQUFqQjs7Ozs7QUFHRyxvQkFBSyxLQUFLL0MsS0FBTCxDQUFXMkIsTUFBWCxDQUFrQnZELElBQWxCLElBQTBCLE9BQS9CLEVBQXlDO0FBRTVDNkUsdUJBQUssR0FBR3JDLFFBQVEsQ0FBQ3VDLGFBQVQsQ0FBdUIsZ0JBQXZCLEVBQXlDQyxLQUFqRDs7QUFDQSxzQkFBS0gsS0FBSyxDQUFDSyxLQUFOLENBQVksU0FBWixDQUFMLEVBQThCO0FBQzVCakQsa0ZBQVUsQ0FBQyxLQUFLd0MsYUFBTCxFQUFvQixJQUFwQixDQUFELENBQVY7QUFDRDtBQUNGOzs7QUFHRCxxQkFBS1UsaUJBQUw7Ozs7Ozs7Ozs7Ozs7Ozs7OztzQ0FFZ0JDLEssRUFBTztBQUN2QixVQUFJQSxLQUFLLENBQUNDLE9BQU4sSUFBaUIsRUFBckIsRUFBeUI7QUFDdkIsYUFBS0YsaUJBQUw7QUFDRCxPQUZELE1BR0ssSUFBSUMsS0FBSyxDQUFDQyxPQUFOLElBQWlCLEVBQXJCLEVBQXlCO0FBQzVCLGFBQUtDLG1CQUFMO0FBQ0Q7QUFDRjs7O3dDQUVtQjtBQUNsQixVQUFJOUMsUUFBUSxDQUFDdUMsYUFBVCxDQUF1QixnQkFBdkIsQ0FBSixFQUE4QztBQUM1Q3ZDLGdCQUFRLENBQUN1QyxhQUFULENBQXVCLGdCQUF2QixFQUF5Q1EsS0FBekM7QUFDRCxPQUZELE1BR0s7QUFDSC9DLGdCQUFRLENBQUN1QyxhQUFULENBQXVCLFNBQXZCLEVBQWtDUSxLQUFsQztBQUNEO0FBQ0Y7Ozs2QkFHUTtBQUdQLFVBQUlDLEdBQUcsR0FBRyxJQUFWOztBQUNBLFVBQUssS0FBSzVELEtBQUwsQ0FBVzJCLE1BQVgsQ0FBa0J2RCxJQUFsQixJQUEwQixRQUEvQixFQUEwQztBQUN4Q3dGLFdBQUcsR0FBRztBQUFPLGNBQUksRUFBQyxNQUFaO0FBQW1CLG1CQUFTLEVBQUUsS0FBS0MsaUJBQUwsQ0FBdUI1QixJQUF2QixDQUE0QixJQUE1QixDQUE5QjtBQUFpRSxZQUFFLEVBQUM7QUFBcEUsVUFBTjtBQUNELE9BRkQsTUFHSyxJQUFLLEtBQUtqQyxLQUFMLENBQVcyQixNQUFYLENBQWtCdkQsSUFBbEIsSUFBMEIsT0FBL0IsRUFBeUM7QUFDNUN3RixXQUFHLEdBQUc7QUFBTyxjQUFJLEVBQUMsVUFBWjtBQUF1QixtQkFBUyxFQUFFLEtBQUtDLGlCQUFMLENBQXVCNUIsSUFBdkIsQ0FBNEIsSUFBNUIsQ0FBbEM7QUFBcUUsWUFBRSxFQUFDO0FBQXhFLFVBQU47QUFDRDs7QUFHRCxhQUNFO0FBQUssVUFBRSxFQUFDO0FBQVIsU0FDRTtBQUFLLGlCQUFTLEVBQUM7QUFBZixRQURGLEVBRUU7QUFBSyxpQkFBUyxFQUFDO0FBQWYsU0FDRTtBQUFLLGlCQUFTLEVBQUM7QUFBZixTQUNFLHNFQUNHLEtBQUtqQyxLQUFMLENBQVcyQixNQUFYLENBQWtCaEQsT0FEckIsRUFFRSxzRUFGRixFQUdHaUYsR0FISCxDQURGLENBREYsRUFTRTtBQUFLLGlCQUFTLEVBQUM7QUFBZixTQUVNLENBQUMsU0FBRCxFQUFXLFFBQVgsRUFBb0IsT0FBcEIsRUFBNkJWLE9BQTdCLENBQXFDLEtBQUtsRCxLQUFMLENBQVcyQixNQUFYLENBQWtCdkQsSUFBdkQsSUFBK0QsQ0FBQyxDQUFsRSxHQUNFO0FBQVEsZUFBTyxFQUFFLEtBQUtzRixtQkFBTCxDQUF5QnpCLElBQXpCLENBQThCLElBQTlCO0FBQWpCLGVBREYsR0FFRSxJQUpOLEVBTUU7QUFBUSxpQkFBUyxFQUFDLFFBQWxCO0FBQTJCLGVBQU8sRUFBRSxLQUFLc0IsaUJBQUwsQ0FBdUJ0QixJQUF2QixDQUE0QixJQUE1QjtBQUFwQyxtQkFORixDQVRGLENBRkYsQ0FERjtBQXVCRDs7OztFQTlGaUNNLCtDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQcEM7QUFFQTtBQUNBOztJQUdxQnVCLEs7Ozs7O0FBRW5CLGlCQUFZOUQsS0FBWixFQUFtQjtBQUFBOztBQUFBLDhFQUNYQSxLQURXO0FBRWxCOzs7OzZCQUVRO0FBQ1AsVUFBSXFCLFVBQVUsR0FBRyxJQUFqQjs7QUFDQSxVQUFJLEtBQUtyQixLQUFMLENBQVdJLFFBQWYsRUFBeUI7QUFDdkJpQixrQkFBVSxHQUFHO0FBQ1hELGNBQUksRUFBRSxVQUFRLEtBQUtwQixLQUFMLENBQVdJLFFBQW5CLEdBQTRCO0FBRHZCLFNBQWI7QUFHRDs7QUFFRCxhQUNFO0FBQUssaUJBQVMsRUFBQyxNQUFmO0FBQXNCLGFBQUssRUFBRWlCO0FBQTdCLFNBRUUsMkRBQUMsbURBQUQsUUFDRTtBQUNFLGlCQUFTLEVBQUM7QUFEWixpQkFERixDQUZGLENBREY7QUFXRDs7OztFQXpCZ0NrQiwrQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNObkM7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFDQTs7SUFFTXdCLE07Ozs7O0FBRUosa0JBQVkvRCxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2pCLGdGQUFNQSxLQUFOLEdBRGlCLENBR2pCOztBQUNBLFVBQUtnRSxZQUFMLEdBQW9CLElBQXBCO0FBQ0EsVUFBS0MsVUFBTCxHQUFrQixJQUFsQjtBQUVBckQsWUFBUSxDQUFDdUMsYUFBVCxDQUF1QixNQUF2QixFQUErQmUsZ0JBQS9CLENBQWdELFNBQWhELEVBQTJELFVBQUNWLEtBQUQsRUFBVztBQUVwRSxVQUFJVyxXQUFXLEdBQUdYLEtBQUssQ0FBQ0MsT0FBTixJQUFpQkQsS0FBSyxDQUFDWSxRQUF6Qzs7QUFFQSxVQUFJWixLQUFLLENBQUNhLFFBQU4sSUFBa0IsSUFBbEIsS0FBMkJGLFdBQVcsSUFBSSxHQUFmLElBQXNCQSxXQUFXLElBQUksRUFBckMsSUFBMkNBLFdBQVcsSUFBSSxHQUFyRixLQUE2RkcsVUFBVSxDQUFDQyxHQUFYLENBQWVDLE1BQWYsSUFBeUIsUUFBdEgsSUFBa0ksQ0FBQyxVQUFELEVBQWF0QixPQUFiLENBQXFCTSxLQUFLLENBQUNpQixNQUFOLENBQWFDLE9BQWxDLElBQTZDLENBQUMsQ0FBcEwsRUFBd0w7QUFDdExsQixhQUFLLENBQUNpQixNQUFOLENBQWFFLElBQWI7QUFDQUMsa0JBQVUsQ0FBQyxZQUFNO0FBQ2ZwQixlQUFLLENBQUNpQixNQUFOLENBQWFkLEtBQWI7QUFDRCxTQUZTLEVBRVIsR0FGUSxDQUFWO0FBR0Q7O0FBQ0QsVUFBSVEsV0FBVyxJQUFFLEVBQWIsSUFBbUIsQ0FBQyxPQUFELEVBQVVqQixPQUFWLENBQWtCTSxLQUFLLENBQUNpQixNQUFOLENBQWFDLE9BQS9CLElBQTBDLENBQUMsQ0FBbEUsRUFBc0U7QUFDcEVsQixhQUFLLENBQUNpQixNQUFOLENBQWFFLElBQWI7QUFDRCxPQVptRSxDQWVwRTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNELEtBM0JEO0FBNkJBL0QsWUFBUSxDQUFDdUMsYUFBVCxDQUF1QixNQUF2QixFQUErQmUsZ0JBQS9CLENBQWdELFVBQWhELEVBQTRELFVBQUNWLEtBQUQsRUFBVztBQUdyRSxVQUFJVyxXQUFXLEdBQUdYLEtBQUssQ0FBQ0MsT0FBTixJQUFpQkQsS0FBSyxDQUFDWSxRQUF6Qzs7QUFFQSxVQUFJLENBQUMsVUFBRCxFQUFZLE9BQVosRUFBcUJsQixPQUFyQixDQUE2Qk0sS0FBSyxDQUFDaUIsTUFBTixDQUFhQyxPQUExQyxJQUFxRCxDQUFDLENBQTFELEVBQThEO0FBQzVEO0FBQ0QsT0FGRCxNQUdLO0FBQ0hsQixhQUFLLENBQUNxQixjQUFOO0FBQ0Q7O0FBRUQsVUFBSW5DLFFBQVEsR0FBRyxNQUFLMUMsS0FBTCxDQUFXOEUsY0FBMUI7O0FBQ0EsVUFBSSxNQUFLOUUsS0FBTCxDQUFXOEUsY0FBWCxJQUE2QixJQUFqQyxFQUFzQztBQUNwQ3BDLGdCQUFRLEdBQUcsRUFBWDtBQUNEOztBQUVELFVBQUlxQyxXQUFXLEdBQUdDLE1BQU0sQ0FBQ3RDLFFBQVEsR0FBQ3NDLE1BQU0sQ0FBQ0MsWUFBUCxDQUFvQmQsV0FBcEIsQ0FBVixDQUF4QjtBQUNBOUQsb0VBQVUsQ0FBQ2hDLHFFQUFjLENBQUMwRyxXQUFELENBQWYsQ0FBVjtBQUVBLFVBQUl6QixLQUFLLEdBQUcsSUFBWjtBQUNBOztBQUNBLFVBQUtBLEtBQUssR0FBRyxlQUFlNEIsSUFBZixDQUFvQkgsV0FBcEIsQ0FBYixFQUFnRDtBQUM5QyxZQUFJTixNQUFNLEdBQUduQixLQUFLLENBQUMsQ0FBRCxDQUFsQjtBQUNBLFlBQUttQixNQUFNLElBQUksRUFBZixFQUFvQkEsTUFBTSxHQUFHLENBQVQ7O0FBQ3BCLGNBQUtVLGlCQUFMLENBQXVCVixNQUF2QjtBQUNEO0FBQ0Q7QUFMQSxXQU1LLElBQUtOLFdBQVcsSUFBSSxFQUFmLElBQXNCLGdCQUFnQmUsSUFBaEIsQ0FBcUJILFdBQXJCLENBQTNCLEVBQStEO0FBQ2xFekIsZUFBSyxHQUFHLGdCQUFnQjRCLElBQWhCLENBQXFCSCxXQUFyQixDQUFSOztBQUNBLGdCQUFLSSxpQkFBTCxDQUF1QjdCLEtBQUssQ0FBQyxDQUFELENBQTVCO0FBQ0Q7QUFDRDtBQUpLLGFBS0EsSUFBS2EsV0FBVyxJQUFJLEVBQWYsSUFBcUIseUJBQXlCZSxJQUF6QixDQUE4QkgsV0FBOUIsQ0FBMUIsRUFBdUU7QUFDMUU7QUFDQTFFLDBFQUFVLENBQUM1QixpRUFBVSxDQUFDLFFBQUQsRUFBVSxZQUFWLEVBQXVCO0FBQzFDcUUsb0JBQU0sRUFBRSxTQURrQztBQUUxQ0Usa0JBQUksRUFBRTtBQUZvQyxhQUF2QixDQUFYLENBQVY7QUFLRDtBQUNEO0FBUkssZUFTQSxJQUFJbUIsV0FBVyxJQUFJLEVBQWYsSUFBcUJZLFdBQVcsQ0FBQ3pCLEtBQVosQ0FBa0IsbUJBQWxCLENBQXpCLEVBQWtFO0FBQ3JFQSxtQkFBSyxHQUFHLGtCQUFrQjRCLElBQWxCLENBQXVCSCxXQUF2QixDQUFSOztBQUNBLGtCQUFJTixPQUFNLEdBQUc3RCxRQUFRLENBQUN1QyxhQUFULDhCQUE2Q0csS0FBSyxDQUFDLENBQUQsQ0FBbEQsUUFBYjs7QUFFQSxrQkFBSUEsS0FBSyxDQUFDLENBQUQsQ0FBTCxJQUFZLEVBQWhCLEVBQW9CO0FBQ2xCakQsOEVBQVUsQ0FBQ1QsaUVBQVUsQ0FBQyxNQUFELENBQVgsQ0FBVjtBQUNBeUQsd0VBQVcsQ0FBQ0wsSUFBWixDQUFpQixZQUFVLE1BQUtoRCxLQUFMLENBQVdzQyxNQUFYLENBQWtCdEQsRUFBN0M7QUFDQTRCLHdCQUFRLENBQUN1QyxhQUFULENBQXVCLFVBQXZCLEVBQW1DUSxLQUFuQyxHQUhrQixDQUtsQjs7QUFDQSxvQkFBSyxDQUFDLE1BQUszRCxLQUFMLENBQVc4QixPQUFqQixFQUEyQjtBQUN6QnpCLGdGQUFVLENBQUNuQixvRUFBYSxFQUFkLENBQVY7QUFDRDtBQUVGLGVBVkQsTUFXSyxJQUFJLENBQUN1RixPQUFMLEVBQWE7QUFDaEJwRSw4RUFBVSxDQUFDNUIsaUVBQVUsQ0FBQyxPQUFELEVBQVMsZUFBVCxDQUFYLENBQVY7QUFDRCxlQUZJLE1BR0E7QUFDSGdHLHVCQUFNLENBQUNXLEtBQVA7O0FBQ0EvRSw4RUFBVSxDQUFDVCxpRUFBVSxDQUFDLE1BQUQsQ0FBWCxDQUFWO0FBQ0F5RCx3RUFBVyxDQUFDTCxJQUFaLENBQWlCLFlBQVUsTUFBS2hELEtBQUwsQ0FBV3NDLE1BQVgsQ0FBa0J0RCxFQUE3QztBQUNBNEIsd0JBQVEsQ0FBQ3VDLGFBQVQsQ0FBdUIsVUFBdkIsRUFBbUNRLEtBQW5DLEdBSkcsQ0FNSDs7QUFDQSxvQkFBSyxDQUFDLE1BQUszRCxLQUFMLENBQVc4QixPQUFqQixFQUEyQjtBQUN6QnpCLGdGQUFVLENBQUNuQixvRUFBYSxFQUFkLENBQVY7QUFDRDtBQUVGO0FBQ0Y7QUFDRDtBQS9CSyxpQkFnQ0EsSUFBSWlGLFdBQVcsSUFBSSxFQUFmLElBQXFCWSxXQUFXLENBQUN6QixLQUFaLENBQWtCLFlBQWxCLENBQXpCLEVBQTJEO0FBQzlEQSxxQkFBSyxHQUFHLGFBQWE0QixJQUFiLENBQWtCSCxXQUFsQixDQUFSO0FBQ0ExRSw4RUFBVSxDQUFDZCw4REFBTyxDQUFDK0QsS0FBSyxDQUFDLENBQUQsQ0FBTixDQUFSLENBQVY7QUFDRDtBQUVEO0FBTEssbUJBTUEsSUFBSWEsV0FBVyxJQUFJLEVBQWYsSUFBcUJZLFdBQVcsQ0FBQ3pCLEtBQVosQ0FBa0IsUUFBbEIsQ0FBekIsRUFBdUQ7QUFDMUQ7QUFDQSxzQkFBSyxNQUFLdEQsS0FBTCxDQUFXOEIsT0FBaEIsRUFBMEI7QUFDeEJ6QixrRkFBVSxDQUFDbkIsb0VBQWEsRUFBZCxDQUFWO0FBQ0Q7O0FBRUQsc0JBQUltRyxNQUFNLEdBQUcsTUFBS3JGLEtBQUwsQ0FBVzZCLFFBQVgsQ0FBb0J5RCxRQUFwQixDQUE2QkMsT0FBN0IsQ0FBcUMsMkJBQXJDLEVBQWlFLElBQWpFLENBQWI7O0FBQ0Esc0JBQUlGLE1BQUosRUFBWTtBQUNWaEMsNEVBQVcsQ0FBQ0wsSUFBWixDQUFpQixXQUFTcUMsTUFBMUI7QUFDRCxtQkFGRCxNQUdLO0FBQ0hoQyw0RUFBVyxDQUFDTCxJQUFaLENBQWlCLEdBQWpCO0FBQ0Q7QUFDRjtBQUNEO0FBZEsscUJBZUEsSUFBSW1CLFdBQVcsSUFBSSxFQUFmLElBQXFCWSxXQUFXLENBQUN6QixLQUFaLENBQWtCLFlBQWxCLENBQXpCLEVBQTJEO0FBQ2hFO0FBQ0VBLHlCQUFLLEdBQUcsYUFBYTRCLElBQWIsQ0FBa0JILFdBQWxCLENBQVI7O0FBRUEsd0JBQUlNLE9BQU0sR0FBRyxNQUFLckYsS0FBTCxDQUFXNkIsUUFBWCxDQUFvQnlELFFBQXBCLENBQTZCQyxPQUE3QixDQUFxQywyQkFBckMsRUFBaUUsSUFBakUsQ0FBYjs7QUFDQSx3QkFBSSxXQUFXLE1BQUt2RixLQUFMLENBQVc2QixRQUFYLENBQW9CeUQsUUFBcEIsQ0FBNkJDLE9BQTdCLENBQXFDLG1CQUFyQyxFQUF5RCxJQUF6RCxDQUFmLEVBQStFO0FBRTdFLDBCQUFLLENBQUMsTUFBS3ZGLEtBQUwsQ0FBVytCLFNBQWpCLEVBQTZCO0FBQzNCMUIsc0ZBQVUsQ0FBQzVCLGlFQUFVLENBQUMsT0FBRCxFQUFTLHdCQUFULENBQVgsQ0FBVjtBQUNELHVCQUZELE1BRU87QUFFSDtBQUNBLDRCQUFJNEcsT0FBSixFQUFZO0FBQ1ZoRix3RkFBVSxDQUFDaEIsK0RBQVEsQ0FBQ2dHLE9BQUQsQ0FBVCxDQUFWOztBQUNBLDhCQUFJL0IsS0FBSyxDQUFDLENBQUQsQ0FBTCxJQUFZLEdBQWhCLEVBQXFCO0FBRW5CLGdDQUFLLE1BQUt0RCxLQUFMLENBQVc4QixPQUFoQixFQUEwQjtBQUN4QnpCLDRGQUFVLENBQUNuQixvRUFBYSxFQUFkLENBQVY7QUFDRDs7QUFFRG1FLG9GQUFXLENBQUNMLElBQVosQ0FBaUIsV0FBU3FDLE9BQTFCO0FBQ0Q7QUFDRix5QkFWRCxDQVdBO0FBWEEsNkJBWUs7QUFDSGhGLDBGQUFVLENBQUNsQixnRUFBUyxFQUFWLENBQVY7QUFDQXlGLHNDQUFVLENBQUMsWUFBTTtBQUVmLGtDQUFLLE1BQUs1RSxLQUFMLENBQVc4QixPQUFoQixFQUEwQjtBQUN4QnpCLDhGQUFVLENBQUNuQixvRUFBYSxFQUFkLENBQVY7QUFDRDs7QUFDRCxvQ0FBS2lHLGlCQUFMLENBQXVCLENBQXZCOztBQUNBLGtDQUFJN0IsS0FBSyxDQUFDLENBQUQsQ0FBTCxJQUFZLEdBQWhCLEVBQXFCO0FBQ25CakQsOEZBQVUsQ0FBQ1QsaUVBQVUsQ0FBQyxNQUFELENBQVgsQ0FBVixDQURtQixDQUduQjs7QUFDQXlELHdGQUFXLENBQUNMLElBQVosQ0FBaUIsWUFBVSxNQUFLaEQsS0FBTCxDQUFXc0MsTUFBWCxDQUFrQnRELEVBQTdDO0FBQ0E0Qix3Q0FBUSxDQUFDdUMsYUFBVCxDQUF1QixVQUF2QixFQUFtQ1EsS0FBbkM7QUFDQXRELDhGQUFVLENBQUNuQixvRUFBYSxFQUFkLENBQVY7QUFDRDtBQUNGLDZCQWRTLEVBY1IsSUFkUSxDQUFWO0FBZUQ7QUFDSjtBQUNGO0FBQ0Y7QUFDRDtBQTdDSyx1QkE4Q0EsSUFBSzZGLFdBQVcsQ0FBQ3pCLEtBQVosQ0FBa0IsS0FBbEIsQ0FBTCxFQUFnQztBQUNuQyw0QkFBS3RELEtBQUwsQ0FBV2tCLGdCQUFYLENBQTRCLEVBQTVCO0FBQ0QscUJBRkksTUFHQSxJQUFLb0MsS0FBSyxHQUFHLG9CQUFvQjRCLElBQXBCLENBQXlCSCxXQUF6QixDQUFiLEVBQXFEO0FBRXhELDBCQUFJUyxVQUFVLEdBQUcsTUFBS3hGLEtBQUwsQ0FBV0ksUUFBNUI7O0FBQ0EsMEJBQUlrRCxLQUFLLENBQUMsQ0FBRCxDQUFMLElBQVksR0FBaEIsRUFBcUI7QUFDbkJrQyxrQ0FBVSxHQUFHLE1BQUt4RixLQUFMLENBQVdJLFFBQVgsR0FBc0JxRixRQUFRLENBQUNuQyxLQUFLLENBQUMsQ0FBRCxDQUFOLENBQTNDO0FBQ0QsdUJBRkQsTUFHSyxJQUFJQSxLQUFLLENBQUMsQ0FBRCxDQUFMLElBQVksR0FBaEIsRUFBcUI7QUFDeEJrQyxrQ0FBVSxHQUFHLE1BQUt4RixLQUFMLENBQVdJLFFBQVgsR0FBc0JxRixRQUFRLENBQUNuQyxLQUFLLENBQUMsQ0FBRCxDQUFOLENBQTNDO0FBQ0Q7O0FBRUQsMEJBQUlrQyxVQUFVLElBQUksQ0FBbEIsRUFBcUI7QUFBRUEsa0NBQVUsR0FBRyxDQUFiO0FBQWlCLHVCQUF4QyxNQUNLLElBQUlBLFVBQVUsSUFBSSxHQUFsQixFQUF1QjtBQUFFQSxrQ0FBVSxHQUFHLEVBQWI7QUFBa0I7O0FBRWhELDRCQUFLeEYsS0FBTCxDQUFXa0IsZ0JBQVgsQ0FBNEJzRSxVQUE1QjtBQUNEOztBQUVERSxrQkFBWSxDQUFDLE1BQUsxQixZQUFOLENBQVo7QUFDQSxZQUFLQSxZQUFMLEdBQW9CWSxVQUFVLENBQUMsWUFBTTtBQUVuQyxZQUFJdEIsS0FBSyxHQUFHLElBQVo7O0FBQ0EsWUFBS0EsS0FBSyxHQUFHLGNBQWM0QixJQUFkLENBQW1CSCxXQUFuQixDQUFiLEVBQStDO0FBQzdDLGdCQUFLL0UsS0FBTCxDQUFXa0IsZ0JBQVgsQ0FBNEJ1RSxRQUFRLENBQUNuQyxLQUFLLENBQUMsQ0FBRCxDQUFOLENBQXBDO0FBQ0Q7O0FBRURqRCxzRUFBVSxDQUFDaEMscUVBQWMsQ0FBQyxFQUFELENBQWYsQ0FBVjtBQUVBLGNBQUsyRixZQUFMLEdBQW9CLElBQXBCO0FBQ0QsT0FWNkIsRUFVNUIsR0FWNEIsQ0FBOUI7QUFZRCxLQTdLRDtBQXBDaUI7QUFrTmxCOzs7O3NDQUVpQi9FLEcsRUFBSztBQUNyQixVQUFJd0YsTUFBTSxHQUFHN0QsUUFBUSxDQUFDdUMsYUFBVCw4QkFBNkNsRSxHQUE3QyxRQUFiOztBQUNBLFVBQUksQ0FBQ3dGLE1BQUwsRUFBYTtBQUNYcEUsc0VBQVUsQ0FBQzVCLGlFQUFVLENBQUMsT0FBRCxFQUFTLGVBQVQsQ0FBWCxDQUFWO0FBQ0QsT0FGRCxNQUdLO0FBQ0hnRyxjQUFNLENBQUNXLEtBQVA7QUFDRDtBQUNGOzs7NkJBRVE7QUFDUCxVQUFJMUMsUUFBUSxHQUFHc0MsTUFBTSxDQUFDLEtBQUtoRixLQUFMLENBQVc4RSxjQUFaLENBQU4sQ0FBa0NTLE9BQWxDLENBQTBDLElBQTFDLEVBQStDLElBQS9DLENBQWY7QUFDQSxVQUFJSSxXQUFXLEdBQUcsY0FBY1QsSUFBZCxDQUFtQnhDLFFBQW5CLENBQWxCOztBQUNBLFVBQUlpRCxXQUFKLEVBQWlCO0FBQ2ZqRCxnQkFBUSxhQUFNaUQsV0FBVyxDQUFDLENBQUQsQ0FBakIsY0FBd0JBLFdBQVcsQ0FBQyxDQUFELENBQVgsQ0FBZUosT0FBZixDQUF1QixJQUF2QixFQUE0QixHQUE1QixDQUF4QixDQUFSO0FBQ0Q7O0FBR0QsYUFDRSwyRUFFTSxLQUFLdkYsS0FBTCxDQUFXOEUsY0FBYixHQUNFO0FBQUssVUFBRSxFQUFDLGlCQUFSO0FBQTBCLGlCQUFTLEVBQUM7QUFBcEMsU0FBNENwQyxRQUE1QyxDQURGLEdBRUUsSUFKTixFQU9FO0FBQUssaUJBQVMsRUFBQztBQUFmLG1DQVBGLENBREY7QUFjRDs7OztFQXRQa0JILCtDO0FBMFByQjs7Ozs7QUFHZUMsMEhBQU8sQ0FBQyxVQUFVdEMsS0FBVixFQUFpQjtBQUNwQyxTQUFPO0FBQ0w0RSxrQkFBYyxFQUFFNUUsS0FBSyxDQUFDdUMsT0FBTixDQUFjQyxRQUFkLENBQXVCa0Q7QUFEbEMsR0FBUDtBQUdILENBSnFCLENBQVAsQ0FJWjdCLE1BSlksQ0FBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDclFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7O0lBRU04QixNOzs7OztBQUVKLGtCQUFZN0YsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNqQixnRkFBTUEsS0FBTjtBQUNBLFVBQUtxRixNQUFMLEdBQWMsSUFBZDtBQUZpQjtBQUdsQjs7Ozs0Q0FFdUI7QUFFdEJoRixvRUFBVSxDQUFDVCxpRUFBVSxDQUFDLE9BQUQsRUFBUyxFQUFULENBQVgsQ0FBVjtBQUNBUyxvRUFBVSxDQUFDVCxpRUFBVSxDQUFDLE1BQUQsRUFBUSxFQUFSLENBQVgsQ0FBVjtBQUNBeUQsOERBQVcsQ0FBQ0wsSUFBWixDQUFpQixRQUFqQixFQUpzQixDQU10Qjs7QUFDQSxVQUFLLENBQUMsS0FBS2hELEtBQUwsQ0FBVzhCLE9BQWpCLEVBQTJCO0FBQ3pCekIsc0VBQVUsQ0FBQ25CLG9FQUFhLEVBQWQsQ0FBVjtBQUNEO0FBQ0Y7OztxQ0FFZ0I7QUFDZm1CLG9FQUFVLENBQUNULGlFQUFVLENBQUMsTUFBRCxDQUFYLENBQVY7QUFDQXlELDhEQUFXLENBQUNMLElBQVosQ0FBaUIsWUFBVSxLQUFLcUMsTUFBaEMsRUFGZSxDQUlmOztBQUNBLFVBQUssQ0FBQyxLQUFLckYsS0FBTCxDQUFXOEIsT0FBakIsRUFBMkI7QUFDekJ6QixzRUFBVSxDQUFDbkIsb0VBQWEsRUFBZCxDQUFWO0FBQ0Q7QUFDRjs7O3dDQUNtQjtBQUVsQjtBQUNBLFVBQUssS0FBS2MsS0FBTCxDQUFXOEIsT0FBaEIsRUFBMEI7QUFDeEJ6QixzRUFBVSxDQUFDbkIsb0VBQWEsRUFBZCxDQUFWO0FBQ0Q7O0FBRUQsVUFBSSxLQUFLbUcsTUFBVCxFQUFpQjtBQUNmaEMsZ0VBQVcsQ0FBQ0wsSUFBWixDQUFpQixXQUFTLEtBQUtxQyxNQUEvQjtBQUNELE9BRkQsTUFHSztBQUNIaEMsZ0VBQVcsQ0FBQ0wsSUFBWixDQUFpQixHQUFqQjtBQUNEO0FBQ0Y7Ozs7Ozs7Ozs7O29CQUlPLEtBQUtoRCxLQUFMLENBQVcrQixTOzs7OztBQUNmMUIsOEVBQVUsQ0FBQzVCLGlFQUFVLENBQUMsT0FBRCxFQUFTLHdCQUFULENBQVgsQ0FBVjs7OztBQUVELGlCLENBRUQ7O3FCQUNLLEtBQUt1QixLQUFMLENBQVc4QixPOzs7Ozs7dUJBQ1J6Qiw4REFBVSxDQUFDbkIsb0VBQWEsRUFBZCxDOzs7cUJBSWQsS0FBS21HLE07Ozs7Ozt1QkFDRGhGLDhEQUFVLENBQUNoQiwrREFBUSxDQUFDLEtBQUtnRyxNQUFOLENBQVQsQzs7O0FBRWhCaEMsd0VBQVcsQ0FBQ0wsSUFBWixDQUFpQixXQUFTLEtBQUtxQyxNQUEvQjs7Ozs7QUFJQWhGLDhFQUFVLENBQUNsQixnRUFBUyxFQUFWLENBQVY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt1Q0FJZTtBQUVqQixVQUFLLENBQUMsS0FBS2EsS0FBTCxDQUFXK0IsU0FBakIsRUFBNkI7QUFDM0IxQixzRUFBVSxDQUFDNUIsaUVBQVUsQ0FBQyxPQUFELEVBQVMsd0JBQVQsQ0FBWCxDQUFWO0FBQ0E7QUFDRDs7QUFBQSxPQUxnQixDQU9qQjs7QUFDQSxVQUFLLEtBQUt1QixLQUFMLENBQVc4QixPQUFoQixFQUEwQjtBQUN4QnpCLHNFQUFVLENBQUNuQixvRUFBYSxFQUFkLENBQVY7QUFDRCxPQVZnQixDQVlqQjs7O0FBQ0FtQixvRUFBVSxDQUFDNUIsaUVBQVUsQ0FBQyxTQUFELEVBQVksU0FBWixFQUF1QjtBQUMxQ3FFLGNBQU0sRUFBRSxZQURrQztBQUUxQ0UsWUFBSSxFQUFFO0FBRm9DLE9BQXZCLENBQVgsQ0FBVjtBQUlEOzs7d0NBRW1CO0FBQ2xCM0Msb0VBQVUsQ0FBQ25CLG9FQUFhLEVBQWQsQ0FBVjtBQUNEOzs7dUNBRWtCO0FBQ2pCbUIsb0VBQVUsQ0FBQzVCLGlFQUFVLENBQUMsU0FBRCxFQUFXLE1BQVgsQ0FBWCxDQUFWO0FBQ0Q7OztrQ0FFYTtBQUNaNEIsb0VBQVUsQ0FBQzVCLGlFQUFVLENBQUMsT0FBRCxFQUFTLE9BQVQsQ0FBWCxDQUFWO0FBRUE0QixvRUFBVSxDQUFDNUIsaUVBQVUsQ0FBQyxPQUFELEVBQVMsVUFBVCxFQUFvQjtBQUN2Q3FFLGNBQU0sRUFBRTtBQUQrQixPQUFwQixDQUFYLENBQVY7QUFJRDs7O21DQUNjO0FBQ2J6QyxvRUFBVSxDQUFDOUIsa0VBQVcsQ0FBQyxLQUFELENBQVosQ0FBVjtBQUNEOzs7NkJBRVE7QUFFUCxVQUFJdUgsTUFBTSxHQUFHLEVBQWI7QUFDQSxVQUFJQyxLQUFLLEdBQUcsRUFBWjtBQUVBLFdBQUtDLFFBQUwsR0FBZ0IsS0FBS2hHLEtBQUwsQ0FBVzZCLFFBQVgsQ0FBb0J5RCxRQUFwQixDQUE2QkMsT0FBN0IsQ0FBcUMsbUJBQXJDLEVBQXlELElBQXpELENBQWhCO0FBQ0EsV0FBS0YsTUFBTCxHQUFjLEtBQUtyRixLQUFMLENBQVc2QixRQUFYLENBQW9CeUQsUUFBcEIsQ0FBNkJDLE9BQTdCLENBQXFDLDJCQUFyQyxFQUFpRSxJQUFqRSxDQUFkOztBQUlBLGNBQVMsS0FBS1MsUUFBZDtBQUNFLGFBQUssTUFBTDtBQUVFRCxlQUFLLEdBQUcsS0FBSy9GLEtBQUwsQ0FBV2lHLFNBQW5CO0FBRUFILGdCQUFNLENBQUM5QyxJQUFQLENBQ0U7QUFDRSxlQUFHLEVBQUMsTUFETjtBQUVFLG1CQUFPLEVBQUUsS0FBS2tELGNBQUwsQ0FBb0JqRSxJQUFwQixDQUF5QixJQUF6QjtBQUZYLG9CQURGO0FBT0E2RCxnQkFBTSxDQUFDOUMsSUFBUCxDQUNFO0FBQ0UsZUFBRyxFQUFDLFFBRE47QUFFRSxtQkFBTyxFQUFFLEtBQUttRCxnQkFBTCxDQUFzQmxFLElBQXRCLENBQTJCLElBQTNCO0FBRlgsc0JBREY7O0FBTUYsYUFBSyxFQUFMO0FBQ0U2RCxnQkFBTSxDQUFDTSxPQUFQLENBQ0U7QUFDRSxlQUFHLEVBQUMsT0FETjtBQUVFLG1CQUFPLEVBQUUsS0FBS0MscUJBQUwsQ0FBMkJwRSxJQUEzQixDQUFnQyxJQUFoQztBQUZYLHFCQURGO0FBUUE7O0FBQ0YsYUFBSyxPQUFMO0FBQ0U4RCxlQUFLLEdBQUcsT0FBUjtBQUVBLGNBQUlPLGFBQWEsR0FBRyxTQUFwQjs7QUFDQSxjQUFLLEtBQUt0RyxLQUFMLENBQVc4QixPQUFoQixFQUEwQjtBQUN4QndFLHlCQUFhLEdBQUcsTUFBaEI7QUFDRDs7QUFFRFIsZ0JBQU0sQ0FBQzlDLElBQVAsQ0FDRTtBQUNFLGVBQUcsRUFBRXNELGFBRFA7QUFFRSxtQkFBTyxFQUFFLEtBQUtDLGlCQUFMLENBQXVCdEUsSUFBdkIsQ0FBNEIsSUFBNUI7QUFGWCxhQUUrQ3FFLGFBRi9DLENBREY7QUFPQVIsZ0JBQU0sQ0FBQzlDLElBQVAsQ0FDRTtBQUNFLGVBQUcsRUFBQyxNQUROO0FBRUUsbUJBQU8sRUFBRSxLQUFLd0QsZUFBTCxDQUFxQnZFLElBQXJCLENBQTBCLElBQTFCO0FBRlgsb0JBREY7QUFPQTZELGdCQUFNLENBQUM5QyxJQUFQLENBQ0U7QUFDRSxlQUFHLEVBQUMsUUFETjtBQUVFLG1CQUFPLEVBQUUsS0FBS3lELGlCQUFMLENBQXVCeEUsSUFBdkIsQ0FBNEIsSUFBNUI7QUFGWCxzQkFERjtBQU1BO0FBeERKOztBQTREQSxVQUFLLENBQUMsS0FBS2pDLEtBQUwsQ0FBVytCLFNBQWpCLEVBQTZCO0FBQzNCK0QsY0FBTSxDQUFDOUMsSUFBUCxDQUNFO0FBQ0UsYUFBRyxFQUFDLE9BRE47QUFFRSxpQkFBTyxFQUFFLEtBQUswRCxXQUFMLENBQWlCekUsSUFBakIsQ0FBc0IsSUFBdEI7QUFGWCxtQkFERjtBQU1ELE9BUEQsTUFPTztBQUNMNkQsY0FBTSxDQUFDOUMsSUFBUCxDQUNFO0FBQ0UsYUFBRyxFQUFDLFFBRE47QUFFRSxpQkFBTyxFQUFFLEtBQUsyRCxZQUFMLENBQWtCMUUsSUFBbEIsQ0FBdUIsSUFBdkI7QUFGWCxvQkFERjtBQU1EOztBQUVELGFBQ0UsMkVBQ0U7QUFBSyxpQkFBUyxFQUFDO0FBQWYsU0FFSSxLQUFLakMsS0FBTCxDQUFXaUcsU0FBWCxHQUNFLFFBQVFGLEtBQVIsR0FBZ0IsS0FEbEIsR0FFRSxXQUpOLENBREYsRUFRRTtBQUFLLGlCQUFTLEVBQUM7QUFBZixTQUVHRCxNQUZILENBUkYsQ0FERjtBQWVEOzs7O0VBL01rQnZELCtDO0FBaU5yQjs7Ozs7QUFHZUMsMEhBQU8sQ0FBQyxVQUFVdEMsS0FBVixFQUFpQjtBQUNwQyxTQUFPO0FBQ0wrRixhQUFTLEVBQUUvRixLQUFLLENBQUN1QyxPQUFOLENBQWNtRSxJQUFkLENBQW1CYjtBQUR6QixHQUFQO0FBR0gsQ0FKcUIsQ0FBUCxDQUlaRixNQUpZLENBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzTkE7QUFDQTtBQUVBO0FBQ0E7O0lBRXFCZ0IsSTs7Ozs7QUFFbkIsZ0JBQVk3RyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsNkVBQ1hBLEtBRFc7QUFFbEI7Ozs7d0NBRW1CLENBQ25COzs7cUNBRWdCaEIsRSxFQUFJO0FBQ25CcUUsOERBQVcsQ0FBQ0wsSUFBWixDQUFpQixXQUFTaEUsRUFBMUI7QUFDRDs7OzZCQUVRO0FBQUE7O0FBRVAsVUFBSXFDLFVBQVUsR0FBRyxJQUFqQjs7QUFDQSxVQUFHLEtBQUtyQixLQUFMLENBQVdJLFFBQWQsRUFBdUI7QUFDckIsWUFBSTBHLFNBQVMsR0FBRyxNQUFNLEtBQUs5RyxLQUFMLENBQVdJLFFBQWpDO0FBQ0FpQixrQkFBVSxHQUFHO0FBQ1gwRixlQUFLLGlCQUFVRCxTQUFWO0FBRE0sU0FBYjtBQUdEOztBQUVELGFBQ0U7QUFBSyxpQkFBUyxFQUFDLE1BQWY7QUFBc0IsYUFBSyxFQUFFekY7QUFBN0IsU0FDRiwyREFBQyxtREFBRDtBQUNNLGdCQUFRLEVBQUUsS0FBS3JCLEtBQUwsQ0FBV0k7QUFEM0IsU0FHSSx1RUFFRSxLQUFLSixLQUFMLENBQVdvQyxLQUFYLENBQWlCNEUsR0FBakIsQ0FBcUIsVUFBQ0MsSUFBRCxFQUFNaEksR0FBTjtBQUFBLGVBQ25CLDJEQUFDLGlEQUFEO0FBQ0UsYUFBRyxFQUFFQSxHQURQO0FBRUUsYUFBRyxFQUFFQSxHQUZQO0FBR0UsWUFBRSxFQUFFZ0ksSUFBSSxDQUFDQyxHQUhYO0FBSUUsZUFBSyxFQUFFRCxJQUFJLENBQUNsQixLQUpkO0FBS0Usa0JBQVEsRUFBRWtCLElBQUksQ0FBQ0UsUUFMakI7QUFNRSxjQUFJLEVBQUVGLElBQUksQ0FBQ0csUUFOYjtBQU9FLG1CQUFTLEVBQUUsS0FBSSxDQUFDcEgsS0FBTCxDQUFXK0I7QUFQeEIsVUFEbUI7QUFBQSxPQUFyQixDQUZGLENBSEosQ0FERSxDQURGO0FBdUJEOzs7O0VBOUMrQlEsK0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTmxDO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBQ0E7O0lBRXFCOEUsUTs7Ozs7QUFFbkIsb0JBQVlySCxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsaUZBQ1hBLEtBRFc7QUFFbEI7Ozs7d0NBRW1CLENBQ25COzs7cUNBRWdCaEIsRSxFQUFJO0FBQ25CcUUsOERBQVcsQ0FBQ0wsSUFBWixDQUFpQixXQUFTaEUsRUFBMUI7QUFDRDs7O29DQUVlQSxFLEVBQUlDLEcsRUFBSXNCLEMsRUFBRztBQUN6QixVQUFJLEtBQUtQLEtBQUwsQ0FBVytCLFNBQWYsRUFBMEI7QUFDeEIxQixzRUFBVSxDQUFDdEIscUVBQWMsQ0FBQ0MsRUFBRCxFQUFLQyxHQUFMLENBQWYsQ0FBVjtBQUNELE9BRkQsTUFFTztBQUNMb0Isc0VBQVUsQ0FBQzVCLGlFQUFVLENBQUMsT0FBRCxFQUFTLGtCQUFULENBQVgsQ0FBVjtBQUNEOztBQUNEOEIsT0FBQyxDQUFDK0csZUFBRjtBQUNEOzs7NkJBRVE7QUFHUCxVQUFJQyxJQUFJLEdBQUcsRUFBWDs7QUFFQSxVQUFJLEtBQUt2SCxLQUFMLENBQVd1SCxJQUFmLEVBQXFCO0FBQ25CQSxZQUFJLEdBQUcsS0FBS3ZILEtBQUwsQ0FBV3VILElBQVgsQ0FBZ0JDLE1BQWhCLENBQXVCLFVBQVNDLFNBQVQsRUFBb0JDLEdBQXBCLEVBQXlCO0FBQ3JELGNBQUlDLFNBQVMsR0FBR0YsU0FBaEI7O0FBQ0EsY0FBSUMsR0FBSixFQUFTO0FBQ1BDLHFCQUFTLENBQUMzRSxJQUFWLENBQWUwRSxHQUFmO0FBQ0Q7O0FBQ0QsaUJBQU9DLFNBQVA7QUFDRCxTQU5NLEVBTUwsRUFOSyxDQUFQO0FBT0Q7O0FBRUQsYUFDSTtBQUNFLG9CQUFVLEtBQUszSCxLQUFMLENBQVdmLEdBRHZCO0FBRUUsaUJBQVMsRUFBRyxLQUFLZSxLQUFMLENBQVdtSCxRQUFaLEdBQXNCLEtBQXRCLEdBQTRCLEVBRnpDO0FBR0UsZUFBTyxFQUFFLEtBQUtTLGdCQUFMLENBQXNCM0YsSUFBdEIsQ0FBMkIsSUFBM0IsRUFBZ0MsS0FBS2pDLEtBQUwsQ0FBV2hCLEVBQTNDO0FBSFgsU0FLRSx3RUFFRXVJLElBQUksQ0FBQ1AsR0FBTCxDQUFTLFVBQUNDLElBQUQsRUFBTWhJLEdBQU47QUFBQSxlQUNQLDJEQUFDLGdEQUFEO0FBQ0csYUFBRyxFQUFFQSxHQURSO0FBRUcsYUFBRyxFQUFFZ0k7QUFGUixVQURPO0FBQUEsT0FBVCxDQUZGLENBTEYsRUFlRTtBQUFLLGlCQUFTLEVBQUM7QUFBZixTQUNHLEtBQUtqSCxLQUFMLENBQVdmLEdBRGQsUUFDcUIsS0FBS2UsS0FBTCxDQUFXK0YsS0FEaEMsRUFFRTtBQUNFLGVBQU8sRUFBRSxLQUFLOEIsZUFBTCxDQUFxQjVGLElBQXJCLENBQTBCLElBQTFCLEVBQStCLEtBQUtqQyxLQUFMLENBQVdoQixFQUExQyxFQUE2QyxLQUFLZ0IsS0FBTCxDQUFXZixHQUF4RDtBQURYLFFBRkYsQ0FmRixDQURKO0FBeUJEOzs7O0VBOURtQ3NELCtDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1J0QztBQUNBOztJQUdxQnVGLE87Ozs7O0FBRW5CLG1CQUFZOUgsS0FBWixFQUFtQjtBQUFBOztBQUFBLGdGQUNYQSxLQURXO0FBRWxCOzs7O3dDQUVtQixDQUNuQjs7O3FDQUdnQmhCLEUsRUFBSTtBQUNuQnFFLDhEQUFXLENBQUNMLElBQVosQ0FBaUIsV0FBU2hFLEVBQTFCO0FBQ0Q7Ozs2QkFFUTtBQUVQLGFBQ0k7QUFBTSxpQkFBUyxFQUFDO0FBQWhCLFNBQ0csS0FBS2dCLEtBQUwsQ0FBVzBILEdBQVgsQ0FBZTVILFdBQWYsRUFESCxDQURKO0FBTUQ7Ozs7RUF0QmtDeUMsK0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSnJDO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBQ0E7O0lBRXFCd0YsSTs7Ozs7QUFFbkIsZ0JBQVkvSCxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsNkVBQ1hBLEtBRFc7QUFHbEI7Ozs7d0NBRW1CLENBQ25COzs7NkJBR1E7QUFFUCxVQUFJcUIsVUFBVSxHQUFHLElBQWpCO0FBQ0EsVUFBSTJHLFNBQVMsR0FBRyxFQUFoQjtBQUNBLFVBQUk3SixNQUFNLEdBQUcsQ0FBYjs7QUFFQSxVQUFLLEtBQUs2QixLQUFMLENBQVdnRyxRQUFYLElBQXVCLFNBQTVCLEVBQXdDO0FBR3RDLFlBQUcsS0FBS2hHLEtBQUwsQ0FBV0ksUUFBZCxFQUF1QjtBQUNyQixjQUFJMEcsU0FBUyxHQUFHLE1BQU0sS0FBSzlHLEtBQUwsQ0FBV0ksUUFBakM7QUFDQWlCLG9CQUFVLEdBQUc7QUFDWDBGLGlCQUFLLGlCQUFVRCxTQUFWO0FBRE0sV0FBYjtBQUlBa0IsbUJBQVMsR0FBRyxTQUFaO0FBQ0Q7QUFDRixPQVhELE1BWUs7QUFFSCxZQUFJLEtBQUtoSSxLQUFMLENBQVdJLFFBQWYsRUFBeUI7QUFDdkJpQixvQkFBVSxHQUFHO0FBQ1hELGdCQUFJLEVBQUUsVUFBUSxLQUFLcEIsS0FBTCxDQUFXSSxRQUFuQixHQUE0QjtBQUR2QixXQUFiO0FBSUE0SCxtQkFBUyxHQUFHLE1BQVo7QUFDRDtBQUNGOztBQUVELGFBQ0U7QUFDRSxhQUFLLEVBQUUzRyxVQURUO0FBRUUsaUJBQVMsRUFBRTJHO0FBRmIsU0FHRSwyREFBQyxtREFBRDtBQUNFLGdCQUFRLEVBQUUsS0FBS2hJLEtBQUwsQ0FBV2dHLFFBRHZCO0FBRUUsZ0JBQVEsRUFBRSxLQUFLaEcsS0FBTCxDQUFXSTtBQUZ2QixTQUlFLDJEQUFDLGlEQUFELEVBQWMsS0FBS0osS0FBbkIsQ0FKRixDQUhGLENBREY7QUFZRDs7OztFQXBEK0J1QywrQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1JsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7O0FBQ0E7O0lBRU0wRixROzs7OztBQUVKLG9CQUFZakksS0FBWixFQUFtQjtBQUFBOztBQUFBLGlGQUNYQSxLQURXO0FBRWxCOzs7O3dDQUVtQjtBQUNsQixVQUFJLEtBQUtBLEtBQUwsQ0FBV2tJLFdBQVgsSUFBMEIsS0FBS2xJLEtBQUwsQ0FBV2tJLFdBQVgsQ0FBdUJsSixFQUFyRCxFQUF5RDtBQUN2RHFCLHNFQUFVLENBQUNYLDZEQUFNLENBQUMsS0FBS00sS0FBTCxDQUFXa0ksV0FBWCxDQUF1QmxKLEVBQXhCLENBQVAsQ0FBVjtBQUNEO0FBQ0Y7Ozs4Q0FHeUJtSixTLEVBQVc7QUFDbkMsVUFBSUEsU0FBUyxDQUFDRCxXQUFWLElBQTBCQyxTQUFTLENBQUNELFdBQVYsQ0FBc0JsSixFQUF0QixJQUE0QixLQUFLZ0IsS0FBTCxDQUFXc0MsTUFBWCxDQUFrQnRELEVBQTVFLEVBQWlGO0FBRS9FcUIsc0VBQVUsQ0FBQ1gsNkRBQU0sQ0FBQ3lJLFNBQVMsQ0FBQ0QsV0FBVixDQUFzQmxKLEVBQXZCLENBQVAsQ0FBVjtBQUNEO0FBQ0Y7Ozs2QkFFUTtBQUNQb0osbURBQU0sQ0FBQ0MsVUFBUCxDQUFrQjtBQUNoQkMsZ0JBQVEsRUFBRSxJQUFJRiw2Q0FBTSxDQUFDRyxRQUFYLEVBRE07QUFFaEJDLFdBQUcsRUFBRSxJQUZXO0FBR2hCQyxjQUFNLEVBQUUsSUFIUTtBQUloQkMsY0FBTSxFQUFFLEtBSlE7QUFLaEJDLGdCQUFRLEVBQUUsS0FMTTtBQU1oQkMsZ0JBQVEsRUFBRSxJQU5NO0FBT2hCQyxrQkFBVSxFQUFFLElBUEk7QUFRaEJDLG1CQUFXLEVBQUU7QUFSRyxPQUFsQjtBQVdBLFVBQUlDLElBQUksR0FBRyxFQUFYO0FBQ0EsVUFBSWYsU0FBUyxHQUFHLEVBQWhCO0FBQ0EsVUFBSTNHLFVBQVUsR0FBRyxJQUFqQjtBQUNBLFVBQUlsRCxNQUFNLEdBQUcsQ0FBYjs7QUFFQSxVQUFLLEtBQUs2QixLQUFMLENBQVdnRyxRQUFYLElBQXVCLFNBQTVCLEVBQXdDO0FBQ3RDK0MsWUFBSSxHQUFHWCw2Q0FBTSxDQUFDLEtBQUtwSSxLQUFMLENBQVdnSixXQUFYLENBQXVCQyxRQUF2QixFQUFELEVBQW9DO0FBQUNMLGtCQUFRLEVBQUU7QUFBWCxTQUFwQyxDQUFiO0FBQ0QsT0FGRCxNQUdLO0FBQ0hHLFlBQUksR0FBR1gsNkNBQU0sQ0FBQyxLQUFLcEksS0FBTCxDQUFXK0ksSUFBWCxDQUFnQkUsUUFBaEIsRUFBRCxFQUE2QjtBQUFDTCxrQkFBUSxFQUFFO0FBQVgsU0FBN0IsQ0FBYjtBQUNEOztBQUVELGFBQ0U7QUFDRSxpQkFBUyxFQUFDLGVBRFo7QUFFRSwrQkFBdUIsRUFBRTtBQUFDTSxnQkFBTSxFQUFFSDtBQUFUO0FBRjNCLFFBREY7QUFPRDs7OztFQW5Eb0J4RywrQztBQXNEdkI7Ozs7O0FBR2VDLDBIQUFPLENBQUMsVUFBVXRDLEtBQVYsRUFBaUI7QUFDcEMsU0FBTztBQUNMNkksUUFBSSxFQUFFN0ksS0FBSyxDQUFDdUMsT0FBTixDQUFjbUUsSUFBZCxDQUFtQm1DLElBRHBCO0FBRUxDLGVBQVcsRUFBRTlJLEtBQUssQ0FBQ3VDLE9BQU4sQ0FBYzBHLEtBQWQsQ0FBb0JKO0FBRjVCLEdBQVA7QUFJSCxDQUxxQixDQUFQLENBS1pkLFFBTFksQ0FBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25FQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBQ0E7O0lBR01tQixLOzs7OztBQUVKLGlCQUFZcEosS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNqQiwrRUFBTUEsS0FBTjtBQUNBLFVBQUtxSixhQUFMLEdBQXFCLENBQXJCO0FBQ0EsVUFBS0MsTUFBTCxHQUFjLElBQWQ7QUFIaUI7QUFJbEI7Ozs7OENBRXlCbkIsUyxFQUFXO0FBQ25DLFVBQUksQ0FBQyxLQUFLbkksS0FBTCxDQUFXYixTQUFoQixFQUEyQjtBQUN6QixhQUFLbUssTUFBTCxDQUFZQyxRQUFaLENBQXFCcEIsU0FBUyxDQUFDaEosU0FBL0I7QUFDRDs7QUFFRCxVQUFJZ0osU0FBUyxDQUFDcUIsV0FBVixJQUF5QixLQUFLeEosS0FBTCxDQUFXd0osV0FBeEMsRUFBcUQ7QUFDbkQsWUFBSUMsS0FBSyxHQUFHQyxnREFBUSxDQUFDQyxXQUFULENBQXFCLEtBQUtDLElBQUwsQ0FBVUMsUUFBL0IsQ0FBWjtBQUNBLFlBQUlDLE1BQU0sR0FBSSxDQUFDTCxLQUFLLENBQUNNLFlBQU4sR0FBcUJOLEtBQUssQ0FBQ08sWUFBNUIsSUFBNEM3QixTQUFTLENBQUNxQixXQUF2RCxHQUFzRSxHQUFuRjtBQUNBQyxhQUFLLENBQUNRLFNBQU4sR0FBa0JILE1BQWxCO0FBQ0Q7QUFDRjs7O3VDQUVtQjNCLFMsRUFBVyxDQUM5Qjs7O2dDQUVXM0UsSyxFQUFPO0FBQ2pCbkQsb0VBQVUsQ0FBQ1QsaUVBQVUsQ0FBQyxPQUFELEVBQVU0RCxLQUFLLENBQUNpQixNQUFOLENBQWFyQixLQUF2QixDQUFYLENBQVY7QUFDRDs7O2lDQUVZO0FBQ1gsVUFBSXFCLE1BQU0sR0FBR2lGLGdEQUFRLENBQUNDLFdBQVQsQ0FBcUIsS0FBS0MsSUFBTCxDQUFVQyxRQUEvQixDQUFiO0FBQ0EsVUFBSUssUUFBUSxHQUFHLEtBQWY7O0FBQ0EsVUFBSSxLQUFLbEssS0FBTCxDQUFXYixTQUFYLENBQXFCZ0wsS0FBckIsQ0FBMkIsQ0FBQyxDQUE1QixLQUFrQzFGLE1BQU0sQ0FBQ3JCLEtBQVAsQ0FBYStHLEtBQWIsQ0FBbUIsQ0FBQyxDQUFwQixDQUF0QyxFQUE4RDtBQUM1REQsZ0JBQVEsR0FBRyxJQUFYO0FBQ0Q7O0FBRUQ3SixvRUFBVSxDQUFDVCxpRUFBVSxDQUFDLE1BQUQsRUFBUzZFLE1BQU0sQ0FBQ3JCLEtBQWhCLENBQVgsQ0FBVjs7QUFFQSxVQUFJOEcsUUFBSixFQUFjO0FBQ1o3SixzRUFBVSxDQUFDbkMsbUVBQVksQ0FBQyxHQUFELENBQWIsQ0FBVjtBQUNEO0FBRUY7OztpQ0FDWWtNLFcsRUFBYTtBQUN4QixVQUFJQyxPQUFPLEdBQUtELFdBQVcsQ0FBQ0gsU0FBWixJQUF5QkcsV0FBVyxDQUFDTCxZQUFaLEdBQTJCSyxXQUFXLENBQUNKLFlBQWhFLENBQUQsR0FBa0YsR0FBakc7QUFDQUssYUFBTyxHQUFHckosSUFBSSxDQUFDQyxLQUFMLENBQVdvSixPQUFYLENBQVY7QUFDQSxXQUFLaEIsYUFBTCxHQUFxQmdCLE9BQXJCO0FBQ0FoSyxvRUFBVSxDQUFDbkMsbUVBQVksQ0FBQ21NLE9BQUQsQ0FBYixDQUFWO0FBQ0Q7Ozs4QkFFUzdHLEssRUFBTztBQUVmLFVBQUk4RyxVQUFVLEdBQUc5RyxLQUFLLENBQUNpQixNQUFOLENBQWFyQixLQUFiLENBQ0VtQyxPQURGLENBQ1UsZ0JBRFYsRUFDMkIsRUFEM0IsRUFFRUEsT0FGRixDQUVVLFFBRlYsRUFFbUIsR0FGbkIsRUFHRUEsT0FIRixDQUdVLEtBSFYsRUFHZ0IsR0FIaEIsRUFJRUEsT0FKRixDQUlVLEtBSlYsRUFJZ0IsRUFKaEIsQ0FBakI7QUFNQSxVQUFJZ0MsSUFBSSxHQUFHK0MsVUFBVSxDQUFDQyxLQUFYLENBQWlCLEdBQWpCLENBQVg7O0FBQ0EsVUFBSUQsVUFBVSxDQUFDaEgsS0FBWCxDQUFpQixJQUFqQixDQUFKLEVBQTZCO0FBQzNCLFlBQUlrSCxNQUFNLEdBQUcsRUFBYjtBQUNBakQsWUFBSSxDQUFDa0QsT0FBTCxDQUFhLFVBQUMvQyxHQUFELEVBQU87QUFDbEIsY0FBSzhDLE1BQU0sQ0FBQ3RILE9BQVAsQ0FBZXdFLEdBQWYsS0FBdUIsQ0FBQyxDQUE3QixFQUFpQztBQUMvQjhDLGtCQUFNLENBQUN4SCxJQUFQLENBQVkwRSxHQUFaO0FBQ0Q7QUFDRixTQUpEO0FBS0FILFlBQUksR0FBR2lELE1BQVA7QUFDRDs7QUFFRG5LLG9FQUFVLENBQUNULGlFQUFVLENBQUMsTUFBRCxFQUFRMkgsSUFBUixDQUFYLENBQVY7QUFDRDs7O3dDQUVtQjtBQUFBOztBQUNsQixVQUFJLEtBQUt2SCxLQUFMLENBQVdrSSxXQUFYLENBQXVCbEosRUFBM0IsRUFBK0I7QUFDN0JxQixzRUFBVSxDQUFDWCw2REFBTSxDQUFDLEtBQUtNLEtBQUwsQ0FBV2tJLFdBQVgsQ0FBdUJsSixFQUF4QixDQUFQLENBQVY7QUFDQXFCLHNFQUFVLENBQUNULGlFQUFVLENBQUMsTUFBRCxDQUFYLENBQVY7QUFDRDs7QUFFRCxVQUFJNkUsTUFBTSxHQUFHaUYsZ0RBQVEsQ0FBQ0MsV0FBVCxDQUFxQixLQUFLQyxJQUFMLENBQVVDLFFBQS9CLENBQWI7QUFFQXZGLGdCQUFVLENBQUNDLEdBQVgsQ0FBZUMsTUFBZixHQUF3QixRQUF4QjtBQUNBLFdBQUs4RSxNQUFMLEdBQWNoRixVQUFVLENBQUNvRyxZQUFYLENBQXdCakcsTUFBeEIsRUFBZ0M7QUFDNUNrRyxtQkFBVyxFQUFFLElBRCtCO0FBRTVDQyxjQUFNLEVBQUUsS0FGb0M7QUFHNUNDLG9CQUFZLEVBQUU7QUFIOEIsT0FBaEMsQ0FBZDtBQU1BdkcsZ0JBQVUsQ0FBQ3dHLEVBQVgsQ0FBYyxLQUFLeEIsTUFBbkIsRUFBMkIsa0JBQTNCLEVBQStDLFVBQUEzSixJQUFJLEVBQUk7QUFDckRpRixrQkFBVSxDQUFDLFlBQU07QUFDZixnQkFBSSxDQUFDMEUsTUFBTCxDQUFZeUIsSUFBWjs7QUFDQSxnQkFBSSxDQUFDQyxVQUFMO0FBQ0QsU0FIUyxDQUFWO0FBSUQsT0FMRDtBQU9BMUcsZ0JBQVUsQ0FBQ3dHLEVBQVgsQ0FBYyxLQUFLeEIsTUFBbkIsRUFBMkIsaUJBQTNCLEVBQThDLFVBQVMzSixJQUFULEVBQWU7QUFDM0QyRSxrQkFBVSxDQUFDQyxHQUFYLENBQWVDLE1BQWYsR0FBd0I3RSxJQUFJLENBQUNzTCxJQUE3QjtBQUNELE9BRkQ7QUFJQTNHLGdCQUFVLENBQUN3RyxFQUFYLENBQWMsS0FBS3hCLE1BQW5CLEVBQTJCLFFBQTNCLEVBQXFDLFVBQUEzSixJQUFJLEVBQUk7QUFDM0MsY0FBSSxDQUFDdUwsWUFBTCxDQUFrQnZMLElBQUksQ0FBQ3dMLE9BQUwsQ0FBYUMsVUFBYixDQUF3QkMsSUFBMUM7QUFDRCxPQUZEO0FBSUEsV0FBSy9CLE1BQUwsQ0FBWTZCLE9BQVosQ0FBb0JHLE9BQXBCLENBQTRCcEgsZ0JBQTVCLENBQTZDLFdBQTdDLEVBQTBELEtBQUtxSCxTQUFMLENBQWV0SixJQUFmLENBQW9CLElBQXBCLENBQTFEO0FBQ0EsV0FBS3FILE1BQUwsQ0FBWTZCLE9BQVosQ0FBb0JHLE9BQXBCLENBQTRCcEgsZ0JBQTVCLENBQTZDLFVBQTdDLEVBQXlELEtBQUtxSCxTQUFMLENBQWV0SixJQUFmLENBQW9CLElBQXBCLENBQXpEO0FBQ0EsV0FBS3FILE1BQUwsQ0FBWTZCLE9BQVosQ0FBb0JHLE9BQXBCLENBQTRCcEgsZ0JBQTVCLENBQTZDLE1BQTdDLEVBQXFELEtBQUtzSCxNQUFMLENBQVl2SixJQUFaLENBQWlCLElBQWpCLENBQXJEO0FBQ0EsV0FBS3FILE1BQUwsQ0FBWTNGLEtBQVo7QUFDRDs7OzhCQUVTSCxLLEVBQU87QUFDZkEsV0FBSyxDQUFDcUIsY0FBTjtBQUNEOzs7MkJBQ01yQixLLEVBQU87QUFDWixVQUFJaUksSUFBSSxHQUFHLElBQVg7QUFDQSxVQUFJQyxZQUFZLEdBQUcsS0FBSzlCLElBQUwsQ0FBVUMsUUFBN0I7QUFDQSxVQUFJOEIsSUFBSSxHQUFHbkksS0FBSyxDQUFDb0ksWUFBTixDQUFtQkMsS0FBbkIsQ0FBeUIsQ0FBekIsQ0FBWDtBQUNBLFVBQUlDLFFBQVEsR0FBRyxJQUFJQyxRQUFKLEVBQWY7QUFDQSxVQUFJQyxHQUFHLEdBQUcsSUFBSUMsY0FBSixFQUFWO0FBRUFILGNBQVEsQ0FBQ0ksTUFBVCxDQUFnQixNQUFoQixFQUF3QlAsSUFBeEI7QUFFQUssU0FBRyxDQUFDRyxJQUFKLENBQVMsTUFBVCxFQUFpQixlQUFqQjtBQUNBSCxTQUFHLENBQUNJLElBQUosQ0FBU04sUUFBVDs7QUFDQUUsU0FBRyxDQUFDSyxrQkFBSixHQUF5QixZQUFVO0FBQ2pDLFlBQUdMLEdBQUcsQ0FBQ00sVUFBSixJQUFrQixDQUFyQixFQUF1QjtBQUNwQixjQUFHTixHQUFHLENBQUNPLE1BQUosSUFBYyxHQUFkLElBQXFCUCxHQUFHLENBQUNPLE1BQUosR0FBYSxHQUFyQyxFQUF5QztBQUN2QyxnQkFBSXpDLE1BQU0sR0FBRzBDLElBQUksQ0FBQ0MsS0FBTCxDQUFXVCxHQUFHLENBQUNVLFlBQWYsQ0FBYjtBQUNBLGdCQUFJQyxHQUFHLEdBQUcsV0FBUzNILE1BQU0sQ0FBQzhFLE1BQU0sQ0FBQzhDLFFBQVIsQ0FBZixHQUFpQyxLQUEzQztBQUNBbEIsd0JBQVksQ0FBQ3RJLEtBQWIsR0FBcUJzSSxZQUFZLENBQUN0SSxLQUFiLEdBQXFCdUosR0FBMUM7QUFFQWxCLGdCQUFJLENBQUNuQyxNQUFMLENBQVlDLFFBQVosQ0FBcUJtQyxZQUFZLENBQUN0SSxLQUFsQztBQUNBcUksZ0JBQUksQ0FBQ25DLE1BQUwsQ0FBWXlCLElBQVo7QUFDQVUsZ0JBQUksQ0FBQ1QsVUFBTDtBQUNEO0FBQ0g7QUFDRixPQVpEOztBQWNBeEgsV0FBSyxDQUFDOEQsZUFBTjtBQUNBOUQsV0FBSyxDQUFDcUIsY0FBTjtBQUNEOzs7NkJBRVE7QUFFUDtBQUNBLFVBQUlnSSxTQUFTLEdBQUcsS0FBSzdNLEtBQUwsQ0FBVzZNLFNBQVgsQ0FBcUJDLElBQXJCLENBQTBCLElBQTFCLEVBQWdDdkgsT0FBaEMsQ0FBd0MsT0FBeEMsRUFBZ0QsRUFBaEQsQ0FBaEI7QUFFQSxVQUFJbEUsVUFBVSxHQUFHLElBQWpCOztBQUNBLFVBQUksS0FBS3JCLEtBQUwsQ0FBV0ksUUFBZixFQUF5QjtBQUN2QmlCLGtCQUFVLEdBQUc7QUFDWEQsY0FBSSxFQUFFLFVBQVEsS0FBS3BCLEtBQUwsQ0FBV0ksUUFBbkIsR0FBNEI7QUFEdkIsU0FBYjtBQUdEOztBQUVELGFBQ0U7QUFBSyxpQkFBUyxFQUFDLE9BQWY7QUFBdUIsYUFBSyxFQUFFaUI7QUFBOUIsU0FDRTtBQUFPLFlBQUksRUFBQyxNQUFaO0FBQ0UsbUJBQVcsRUFBQyxPQURkO0FBRUUsZ0JBQVEsRUFBRSxLQUFLMEwsV0FBTCxDQUFpQjlLLElBQWpCLENBQXNCLElBQXRCLENBRlo7QUFHRSxhQUFLLEVBQUUsS0FBS2pDLEtBQUwsQ0FBV2dOO0FBSHBCLFFBREYsRUFNRTtBQUFPLFlBQUksRUFBQyxNQUFaO0FBQ0UsbUJBQVcsRUFBQyxLQURkO0FBRUUsZ0JBQVEsRUFBRSxLQUFLQyxTQUFMLENBQWVoTCxJQUFmLENBQW9CLElBQXBCLENBRlo7QUFHRSxhQUFLLEVBQUU0SztBQUhULFFBTkYsRUFXRTtBQUNFLFdBQUcsRUFBQyxVQUROO0FBRUUsbUJBQVcsRUFBQyxNQUZkO0FBR0UsZ0JBQVEsRUFBRSxLQUFLN0IsVUFBTCxDQUFnQi9JLElBQWhCLENBQXFCLElBQXJCLENBSFo7QUFJRSxhQUFLLEVBQUUsS0FBS2pDLEtBQUwsQ0FBV2I7QUFKcEIsUUFYRixDQURGO0FBb0JEOzs7O0VBMUtpQm9ELCtDO0FBNktwQjs7Ozs7QUFHZUMsMEhBQU8sQ0FBQyxVQUFVdEMsS0FBVixFQUFpQjtBQUN0QyxTQUFPO0FBQ0w4TSxjQUFVLEVBQUU5TSxLQUFLLENBQUN1QyxPQUFOLENBQWMwRyxLQUFkLENBQW9CcEQsS0FEM0I7QUFFTDVHLGFBQVMsRUFBRWUsS0FBSyxDQUFDdUMsT0FBTixDQUFjMEcsS0FBZCxDQUFvQkosSUFGMUI7QUFHTDhELGFBQVMsRUFBRTNNLEtBQUssQ0FBQ3VDLE9BQU4sQ0FBYzBHLEtBQWQsQ0FBb0I1QixJQUgxQjtBQUlMaUMsZUFBVyxFQUFFdEosS0FBSyxDQUFDdUMsT0FBTixDQUFjMEcsS0FBZCxDQUFvQmhMO0FBSjVCLEdBQVA7QUFNRCxDQVBxQixDQUFQLENBT1ppTCxLQVBZLENBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxTEE7QUFDQTtBQUNBO0FBQ0E7O0lBRU04RCxNOzs7OztBQUNKLGtCQUFZbE4sS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNqQixnRkFBTUEsS0FBTjtBQUVBLFVBQUttTixVQUFMLEdBQWtCLElBQWxCO0FBQ0EsVUFBS0MsV0FBTCxHQUFtQixJQUFuQjtBQUNBLFVBQUtDLEVBQUwsR0FBVSxJQUFWO0FBQ0EsVUFBS0MsRUFBTCxHQUFVLElBQVY7QUFDQSxVQUFLQyxNQUFMLEdBQWMsQ0FBZDtBQUNBLFVBQUtDLEVBQUwsR0FBVyxNQUFLeE4sS0FBTCxDQUFXeU4sTUFBWixHQUFvQixNQUFLek4sS0FBTCxDQUFXeU4sTUFBL0IsR0FBc0MsRUFBaEQ7QUFFQSxVQUFLQyxrQkFBTCxHQUEwQixFQUExQjtBQUNBLFVBQUtDLElBQUwsR0FBWSxLQUFaO0FBQ0EsVUFBS0MsVUFBTCxHQUFrQixJQUFsQjtBQUNBLFVBQUtDLElBQUwsR0FBWSxJQUFJQyxpREFBSixFQUFaO0FBRUEsVUFBS0MsUUFBTCxHQUFnQixzQkFBc0JuTixRQUFRLENBQUNvTixlQUFULENBQXlCQyxLQUEvRDtBQWZpQjtBQWdCbEI7Ozs7d0NBRW1CO0FBRWxCLFdBQUtkLFVBQUwsR0FBa0J6RCxnREFBUSxDQUFDQyxXQUFULENBQXFCLElBQXJCLENBQWxCO0FBQ0EsV0FBS3lELFdBQUwsR0FBbUIsS0FBS0QsVUFBTCxDQUFnQmhLLGFBQWhCLENBQThCLGlCQUE5QixDQUFuQjs7QUFFQSxVQUFJLEtBQUs0SyxRQUFMLEtBQWtCLElBQXRCLEVBQTRCO0FBQzFCLGFBQUtHLFlBQUw7QUFDRDs7QUFDRCxXQUFLQyxTQUFMO0FBQ0EsV0FBS0Msa0JBQUw7QUFDQSxXQUFLQyxZQUFMO0FBQ0EsV0FBS0MsU0FBTDtBQUNEOzs7OENBRXlCbkcsUyxFQUFXO0FBQ25DLFVBQUlBLFNBQVMsQ0FBQy9ILFFBQVYsSUFBc0IsS0FBS0osS0FBTCxDQUFXSSxRQUFqQyxJQUE2QyxLQUFLMk4sUUFBTCxLQUFrQixJQUFuRSxFQUF5RTtBQUN2RSxZQUFJUSxZQUFZLEdBQUcsS0FBS3BCLFVBQXhCO0FBQ0EsWUFBSXFCLFFBQVEsR0FBRyxLQUFLcEIsV0FBcEI7QUFDQW9CLGdCQUFRLENBQUNDLGVBQVQsQ0FBeUIsT0FBekI7QUFDQUYsb0JBQVksQ0FBQ0UsZUFBYixDQUE2QixPQUE3QjtBQUNBLGFBQUtQLFlBQUw7QUFDRDs7QUFFRCxVQUFJLENBQUMsS0FBS2xPLEtBQUwsQ0FBV2dHLFFBQVosSUFBd0IsS0FBS2hHLEtBQUwsQ0FBV2dHLFFBQVgsSUFBcUIsU0FBakQsRUFBNkQ7QUFDM0Q7QUFDRDs7QUFFRCxVQUFJbUMsU0FBUyxDQUFDdUcsYUFBVixJQUEyQixLQUFLMU8sS0FBTCxDQUFXME8sYUFBdEMsSUFBdUR2RyxTQUFTLENBQUN1RyxhQUFWLElBQXlCLEdBQXBGLEVBQTBGO0FBQ3hGLFlBQUlqRixLQUFLLEdBQUdDLGdEQUFRLENBQUNDLFdBQVQsQ0FBcUIsSUFBckIsRUFBMkJ4RyxhQUEzQixDQUF5QyxpQkFBekMsQ0FBWjtBQUNBLFlBQUkyRyxNQUFNLEdBQUksQ0FBQ0wsS0FBSyxDQUFDTSxZQUFOLEdBQXFCTixLQUFLLENBQUNPLFlBQTVCLElBQTRDN0IsU0FBUyxDQUFDdUcsYUFBdkQsR0FBd0UsR0FBckY7QUFDQWpGLGFBQUssQ0FBQ1EsU0FBTixHQUFrQjBFLE1BQU0sQ0FBQzdFLE1BQUQsQ0FBeEI7QUFDRDtBQUNGOzs7bUNBR2M7QUFDYixVQUFJeUUsWUFBWSxHQUFHLEtBQUtwQixVQUF4QjtBQUNBLFVBQUlxQixRQUFRLEdBQUcsS0FBS3BCLFdBQXBCO0FBRUEsVUFBSXdCLFdBQVcsR0FBR0osUUFBUSxDQUFDSyxXQUFULEdBQXVCTCxRQUFRLENBQUN6TixXQUFsRDtBQUNBLFVBQUkrTixVQUFVLEdBQUlQLFlBQVksQ0FBQ00sV0FBYixHQUF5QkQsV0FBM0M7QUFDQUosY0FBUSxDQUFDUCxLQUFULENBQWVjLEtBQWYsR0FBdUJELFVBQVUsR0FBQyxJQUFsQztBQUNBUCxrQkFBWSxDQUFDTixLQUFiLENBQW1CYyxLQUFuQixHQUE0QkQsVUFBVSxHQUFDRixXQUFaLEdBQXlCLElBQXBEO0FBQ0Q7OztnQ0FFVztBQUNWLFVBQUlMLFlBQVksR0FBRyxLQUFLcEIsVUFBeEI7QUFDQSxXQUFLRyxFQUFMLEdBQVUxTSxRQUFRLENBQUNvTyxhQUFULENBQXVCLEtBQXZCLENBQVY7QUFDQSxXQUFLM0IsRUFBTCxHQUFVek0sUUFBUSxDQUFDb08sYUFBVCxDQUF1QixLQUF2QixDQUFWO0FBQ0EsV0FBSzNCLEVBQUwsQ0FBUTRCLFNBQVIsR0FBb0IsSUFBcEI7QUFDQSxXQUFLM0IsRUFBTCxDQUFRMkIsU0FBUixHQUFvQixJQUFwQjtBQUVBLFdBQUszQixFQUFMLENBQVE0QixXQUFSLENBQW9CLEtBQUs3QixFQUF6QjtBQUNBa0Isa0JBQVksQ0FBQ1csV0FBYixDQUF5QixLQUFLNUIsRUFBOUI7QUFDRDs7O3lDQUdvQjtBQUNuQixVQUFJa0IsUUFBUSxHQUFHOUUsZ0RBQVEsQ0FBQ0MsV0FBVCxDQUFxQixLQUFLeUQsV0FBMUIsQ0FBZjtBQUNBLFVBQUlDLEVBQUUsR0FBRyxLQUFLQSxFQUFkO0FBQ0EsVUFBSXRELFlBQVksR0FBR3lFLFFBQVEsQ0FBQ3pFLFlBQTVCO0FBQ0EsVUFBSUMsWUFBWSxHQUFHd0UsUUFBUSxDQUFDeEUsWUFBNUI7QUFDQSxVQUFJbUYsU0FBUyxHQUFHMUosUUFBUSxDQUFDdUUsWUFBWSxJQUFJQSxZQUFZLEdBQUNELFlBQWpCLENBQWIsQ0FBeEI7QUFDQXNELFFBQUUsQ0FBQ1ksS0FBSCxDQUFTbUIsTUFBVCxHQUFrQkQsU0FBUyxHQUFDLElBQTVCO0FBQ0EsVUFBSSxLQUFLM0IsRUFBTCxDQUFRNkIsZ0JBQVIsS0FBNkIsSUFBakMsRUFBdUNoQyxFQUFFLENBQUNZLEtBQUgsQ0FBU3FCLE9BQVQsR0FBbUIsQ0FBbkI7QUFDeEM7OzttQ0FFYztBQUNiLFVBQUlkLFFBQVEsR0FBRyxLQUFLcEIsV0FBcEI7QUFDQSxVQUFJQyxFQUFFLEdBQUcsS0FBS0EsRUFBZDtBQUNBLFVBQUl0RCxZQUFZLEdBQUd5RSxRQUFRLENBQUN6RSxZQUE1QjtBQUNBLFVBQUlDLFlBQVksR0FBR3dFLFFBQVEsQ0FBQ3hFLFlBQTVCO0FBQ0EsV0FBS3VELE1BQUwsR0FBY3ZELFlBQVksR0FBQ0QsWUFBM0I7QUFDQSxVQUFJRSxTQUFTLEdBQUd1RSxRQUFRLENBQUN2RSxTQUFULEdBQXFCLEtBQUtzRCxNQUExQztBQUNBRixRQUFFLENBQUNZLEtBQUgsQ0FBU3NCLEdBQVQsR0FBZXRGLFNBQVMsR0FBQyxJQUF6QjtBQUNEOzs7Z0NBRVc7QUFDVixVQUFJd0IsSUFBSSxHQUFHLElBQVg7QUFDQSxVQUFJNEIsRUFBRSxHQUFHLEtBQUtBLEVBQWQ7QUFDQTVCLFVBQUksQ0FBQ29DLElBQUwsQ0FBVTJCLFFBQVYsQ0FBbUJuQyxFQUFuQixFQUF1QixNQUF2QjtBQUNBM0gsa0JBQVksQ0FBQyxLQUFLa0ksVUFBTixDQUFaO0FBQ0FuQyxVQUFJLENBQUNtQyxVQUFMLEdBQWtCaEosVUFBVSxDQUFDLFlBQVc7QUFDdEM2RyxZQUFJLENBQUNvQyxJQUFMLENBQVU0QixXQUFWLENBQXNCcEMsRUFBdEIsRUFBMEIsTUFBMUI7QUFDRCxPQUYyQixFQUUxQixJQUYwQixDQUE1QjtBQUdEOzs7Z0NBRVc7QUFFVixVQUFJNUIsSUFBSSxHQUFHLElBQVg7QUFFQTdLLGNBQVEsQ0FBQ3NELGdCQUFULENBQTBCLFdBQTFCLEVBQXVDLFVBQVN3TCxHQUFULEVBQWM7QUFDbkQsWUFBSWpFLElBQUksQ0FBQ2tDLElBQVQsRUFBZTtBQUNiLGNBQUlnQyxRQUFRLEdBQUdELEdBQUcsQ0FBQ0UsT0FBSixHQUFjbkUsSUFBSSxDQUFDaUMsa0JBQUwsQ0FBd0IsQ0FBeEIsQ0FBN0I7QUFDQSxjQUFJbUMsU0FBUyxHQUFHRixRQUFRLEdBQUdsRSxJQUFJLENBQUM4QixNQUFoQztBQUNBLGNBQUl0RCxTQUFTLEdBQUd3QixJQUFJLENBQUNpQyxrQkFBTCxDQUF3QixDQUF4QixJQUE2Qm1DLFNBQTdDO0FBQ0FwRSxjQUFJLENBQUMyQixXQUFMLENBQWlCbkQsU0FBakIsR0FBNkJBLFNBQTdCO0FBQ0Q7QUFDRixPQVBEO0FBUUF3QixVQUFJLENBQUM0QixFQUFMLENBQVFuSixnQkFBUixDQUF5QixXQUF6QixFQUFzQyxVQUFTd0wsR0FBVCxFQUFjO0FBQ2xEakUsWUFBSSxDQUFDaUMsa0JBQUwsQ0FBd0IsQ0FBeEIsSUFBNkJnQyxHQUFHLENBQUNFLE9BQWpDO0FBQ0FuRSxZQUFJLENBQUNpQyxrQkFBTCxDQUF3QixDQUF4QixJQUE2QmpDLElBQUksQ0FBQzJCLFdBQUwsQ0FBaUJuRCxTQUE5QztBQUNBd0IsWUFBSSxDQUFDa0MsSUFBTCxHQUFZLElBQVo7QUFDRCxPQUpEO0FBS0FsQyxVQUFJLENBQUM0QixFQUFMLENBQVFuSixnQkFBUixDQUF5QixTQUF6QixFQUFvQyxZQUFXO0FBQzdDdUgsWUFBSSxDQUFDa0MsSUFBTCxHQUFZLEtBQVo7QUFDRCxPQUZEO0FBR0EvTSxjQUFRLENBQUNzRCxnQkFBVCxDQUEwQixTQUExQixFQUFxQyxZQUFXO0FBQzlDdUgsWUFBSSxDQUFDa0MsSUFBTCxHQUFZLEtBQVo7QUFDRCxPQUZEO0FBR0FsQyxVQUFJLENBQUMyQixXQUFMLENBQWlCbEosZ0JBQWpCLENBQWtDLFlBQWxDLEVBQWdELFlBQVc7QUFDekQsWUFBSXVILElBQUksQ0FBQzJCLFdBQUwsQ0FBaUJyRCxZQUFqQixJQUFpQzBCLElBQUksQ0FBQzJCLFdBQUwsQ0FBaUJwRCxZQUF0RCxFQUFvRTtBQUNsRXlCLGNBQUksQ0FBQ3FFLFNBQUw7QUFDRDtBQUNGLE9BSkQ7QUFLQXJFLFVBQUksQ0FBQzZCLEVBQUwsQ0FBUXBKLGdCQUFSLENBQXlCLFlBQXpCLEVBQXVDLFlBQVc7QUFDaER1SCxZQUFJLENBQUNvQyxJQUFMLENBQVUyQixRQUFWLENBQW1CL0QsSUFBSSxDQUFDNEIsRUFBeEIsRUFBNEIsTUFBNUI7QUFDRCxPQUZEO0FBR0E1QixVQUFJLENBQUM2QixFQUFMLENBQVFwSixnQkFBUixDQUF5QixZQUF6QixFQUF1QyxZQUFXO0FBQ2hEdUgsWUFBSSxDQUFDb0MsSUFBTCxDQUFVNEIsV0FBVixDQUFzQmhFLElBQUksQ0FBQzRCLEVBQTNCLEVBQStCLE1BQS9CO0FBQ0QsT0FGRDtBQUdBNUIsVUFBSSxDQUFDMkIsV0FBTCxDQUFpQmxKLGdCQUFqQixDQUFrQyxRQUFsQyxFQUE0QyxZQUFXO0FBQ3JEdUgsWUFBSSxDQUFDNEMsWUFBTDtBQUNBNUMsWUFBSSxDQUFDcUUsU0FBTDtBQUNELE9BSEQ7QUFJQXJFLFVBQUksQ0FBQzJCLFdBQUwsQ0FBaUJsSixnQkFBakIsQ0FBa0Msb0JBQWxDLEVBQXdELFlBQVc7QUFDakVVLGtCQUFVLENBQUMsWUFBTTtBQUNmNkcsY0FBSSxDQUFDMkMsa0JBQUw7QUFDQTNDLGNBQUksQ0FBQzRDLFlBQUw7QUFDRCxTQUhTLEVBR1IsRUFIUSxDQUFWO0FBSUQsT0FMRDtBQVFBMEIsWUFBTSxDQUFDN0wsZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBaUMsWUFBVztBQUUxQyxZQUFJdUgsSUFBSSxDQUFDc0MsUUFBTCxLQUFrQixJQUF0QixFQUE0QjtBQUMxQixjQUFJUSxZQUFZLEdBQUc5QyxJQUFJLENBQUMwQixVQUF4QjtBQUNBLGNBQUlxQixRQUFRLEdBQUcvQyxJQUFJLENBQUMyQixXQUFwQjtBQUNBb0Isa0JBQVEsQ0FBQ0MsZUFBVCxDQUF5QixPQUF6QjtBQUNBRixzQkFBWSxDQUFDRSxlQUFiLENBQTZCLE9BQTdCO0FBRUFoRCxjQUFJLENBQUN5QyxZQUFMO0FBQ0Q7O0FBQ0R6QyxZQUFJLENBQUMyQyxrQkFBTDtBQUNBM0MsWUFBSSxDQUFDNEMsWUFBTDtBQUNELE9BWkQ7QUFhRDs7OzZCQUVRO0FBRVAsYUFDRTtBQUFLLGlCQUFTLEVBQUM7QUFBZixTQUNFO0FBQUssaUJBQVMsRUFBQztBQUFmLFNBQ0csS0FBS3JPLEtBQUwsQ0FBV0MsUUFEZCxDQURGLENBREY7QUFPRDs7OztFQWhMa0JzQywrQztBQW1MckI7Ozs7O0FBR2VDLDBIQUFPLENBQUMsVUFBVXRDLEtBQVYsRUFBaUI7QUFDcEMsU0FBTztBQUNMd08saUJBQWEsRUFBRXhPLEtBQUssQ0FBQ3VDLE9BQU4sQ0FBYzBHLEtBQWQsQ0FBb0JoTDtBQUQ5QixHQUFQO0FBR0gsQ0FKcUIsQ0FBUCxDQUlaK08sTUFKWSxDQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDMUxxQlksSTs7O0FBRW5CLGtCQUFjO0FBQUE7QUFFYjs7Ozs2QkFDUXJKLE0sRUFBUStLLFMsRUFBVTtBQUN6QixVQUFJUCxTQUFTLEdBQUd4SyxNQUFNLENBQUN3SyxTQUF2Qjs7QUFDQSxVQUFJLENBQUMsSUFBSWUsTUFBSixDQUFXUixTQUFYLEVBQXFCLEdBQXJCLEVBQTBCdEssSUFBMUIsQ0FBK0IrSixTQUEvQixDQUFMLEVBQWdEO0FBQzlDQSxpQkFBUyxJQUFJLE1BQUlPLFNBQWpCO0FBQ0EvSyxjQUFNLENBQUN3SyxTQUFQLEdBQW1CQSxTQUFuQjtBQUNEO0FBQ0Y7OztnQ0FFV3hLLE0sRUFBUWdMLFksRUFBYTtBQUMvQixVQUFJUixTQUFTLEdBQUd4SyxNQUFNLENBQUN3SyxTQUF2Qjs7QUFDQSxVQUFJLElBQUllLE1BQUosQ0FBV1AsWUFBWCxFQUF3QixHQUF4QixFQUE2QnZLLElBQTdCLENBQWtDK0osU0FBbEMsQ0FBSixFQUFrRDtBQUNoRCxZQUFJZ0IsS0FBSyxHQUFHLElBQUlELE1BQUosQ0FBVyxNQUFJUCxZQUFmLEVBQTRCLEdBQTVCLENBQVo7QUFDQVIsaUJBQVMsR0FBR0EsU0FBUyxDQUFDMUosT0FBVixDQUFrQjBLLEtBQWxCLEVBQXlCLEVBQXpCLENBQVo7QUFDQXhMLGNBQU0sQ0FBQ3dLLFNBQVAsR0FBbUJBLFNBQW5CO0FBQ0Q7QUFDRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQkg7QUFFQSxJQUFJaUIsYUFBYSxHQUFHLElBQXBCO0FBQ0EsSUFBSUMsU0FBUyxHQUFHLElBQWhCO0FBRU8sU0FBU0MsaUJBQVQsQ0FBMkJDLEtBQTNCLEVBQWtDO0FBQ3ZDSCxlQUFhLEdBQUdHLEtBQUssQ0FBQ0MsUUFBdEI7QUFDQUgsV0FBUyxHQUFHRSxLQUFaO0FBQ0Q7O1NBRWNFLE87Ozs7Ozs7MEJBQWYsaUJBQXVCQyxHQUF2QixFQUE0QnBSLElBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBa0NxUixrQkFBbEMsMkRBQTJDLEtBQTNDO0FBQ1FDLHlCQURSLEdBQ3dCO0FBQ3BCRCxvQkFBTSxFQUFOQSxNQURvQjtBQUVwQkQsaUJBQUcsRUFBSEEsR0FGb0I7QUFHcEJwUixrQkFBSSxFQUFKQTtBQUhvQixhQUR4Qjs7QUFPRSxnQkFBSXFSLE1BQU0sS0FBSyxNQUFmLEVBQXVCO0FBQ3JCQywyQkFBYSxDQUFDQyxXQUFkLEdBQTRCLGlDQUE1QjtBQUNEOztBQVRIO0FBQUEsbUJBV2VDLHVEQUFJLENBQUNGLGFBQUQsQ0FYbkI7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHOzs7O0FBY2UsU0FBZXJRLFVBQTlCO0FBQUE7QUFBQTs7Ozs7MEJBQWUsa0JBQTBCeUMsTUFBMUI7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUNUQSxNQUFNLENBQUMxRSxJQUFQLEtBQWdCLFNBRFA7QUFBQTtBQUFBO0FBQUE7O0FBRUpvQix3QkFGSSxHQUVZc0QsTUFGWixDQUVKdEQsWUFGSTtBQUFBO0FBQUEsbUJBR1ErUSxPQUFPLENBQUMsYUFBRCxFQUFnQi9RLFlBQVksR0FBRztBQUFDQSwwQkFBWSxFQUFaQTtBQUFELGFBQUgsR0FBb0IsSUFBaEQsQ0FIZjs7QUFBQTtBQUdMQyxnQkFISztBQUlYcUQsa0JBQU0sQ0FBQ3JELElBQVAsR0FBY0EsSUFBZDtBQUpXO0FBQUE7O0FBQUE7QUFBQSxrQkFNSnFELE1BQU0sQ0FBQzFFLElBQVAsS0FBZ0IsUUFOWjtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLG1CQU9RbVMsT0FBTyx1QkFBZ0J6TixNQUFNLENBQUM5RCxFQUF2QixHQUE2QixFQUE3QixDQVBmOztBQUFBO0FBT0xXLGdCQVBLO0FBUVhtRCxrQkFBTSxDQUFDbkQsSUFBUCxHQUFjQSxJQUFkO0FBUlc7QUFBQTs7QUFBQTtBQUFBLGtCQVVKbUQsTUFBTSxDQUFDMUUsSUFBUCxLQUFnQixpQkFWWjtBQUFBO0FBQUE7QUFBQTs7QUFXTHlTLGtCQVhLLEdBV0ksQ0FBQ1YsU0FBUyxDQUFDVyxRQUFWLEdBQXFCck8sT0FBckIsQ0FBNkJMLEtBQTdCLENBQW1DVSxNQUFNLENBQUM3RCxHQUExQyxFQUErQ2tJLFFBWHBEO0FBQUE7QUFBQSxtQkFZUW9KLE9BQU8sa0JBQWtCO0FBQzFDdlIsZ0JBQUUsRUFBRThELE1BQU0sQ0FBQzlELEVBRCtCO0FBRTFDbUksc0JBQVEsRUFBRTBKO0FBRmdDLGFBQWxCLEVBR3ZCLE1BSHVCLENBWmY7O0FBQUE7QUFZTGxSLGlCQVpLO0FBaUJYbUQsa0JBQU0sQ0FBQ3FFLFFBQVAsR0FBa0IwSixNQUFsQjtBQWpCVztBQUFBOztBQUFBO0FBQUEsa0JBbUJKL04sTUFBTSxDQUFDMUUsSUFBUCxLQUFnQixXQW5CWjtBQUFBO0FBQUE7QUFBQTs7QUFvQkwyUyxxQkFwQkssR0FvQk9aLFNBQVMsQ0FBQ1csUUFBVixHQUFxQnJPLE9BQXJCLENBQTZCMEcsS0FwQnBDO0FBQUE7QUFBQSxtQkFzQlNvSCxPQUFPLGtCQUFrQjtBQUMzQ3hLLG1CQUFLLEVBQUVnTCxTQUFTLENBQUNoTCxLQUQwQjtBQUUzQ2dELGtCQUFJLEVBQUVnSSxTQUFTLENBQUNoSSxJQUYyQjtBQUczQzNCLHNCQUFRLEVBQUUySixTQUFTLENBQUN4SjtBQUh1QixhQUFsQixFQUl4QixNQUp3QixDQXRCaEI7O0FBQUE7QUFzQlh6RSxrQkFBTSxDQUFDMUQsSUF0Qkk7QUFBQTtBQUFBOztBQUFBO0FBQUEsa0JBNEJKMEQsTUFBTSxDQUFDMUUsSUFBUCxLQUFnQixZQTVCWjtBQUFBO0FBQUE7QUFBQTs7QUE2QkxnRSxpQkE3QkssR0E2QkcrTixTQUFTLENBQUNXLFFBQVYsR0FBcUJyTyxPQUFyQixDQUE2QkwsS0E3QmhDO0FBOEJMaUQsa0JBOUJLLEdBOEJJOEssU0FBUyxDQUFDVyxRQUFWLEdBQXFCck8sT0FBckIsQ0FBNkJtRSxJQUE3QixDQUFrQ3ZCLE1BOUJ0QztBQUFBO0FBQUEsbUJBZ0NMa0wsT0FBTyxrQkFBa0I7QUFDN0J2UixnQkFBRSxFQUFFcUc7QUFEeUIsYUFBbEIsRUFFVixNQUZVLENBaENGOztBQUFBO0FBb0NQMkwsd0JBcENPLEdBb0NRLElBcENSO0FBcUNYNU8saUJBQUssQ0FBQzZPLElBQU4sQ0FBVyxVQUFTaEssSUFBVCxFQUFlaEksR0FBZixFQUFtQjtBQUM1QixrQkFBR2dJLElBQUksQ0FBQ0MsR0FBTCxLQUFhN0IsTUFBaEIsRUFBdUI7QUFDckIyTCw0QkFBWSxHQUFHL1IsR0FBZjtBQUNEOztBQUVELHFCQUFPZ0ksSUFBSSxDQUFDQyxHQUFMLEtBQWE3QixNQUFwQjtBQUNELGFBTkQ7QUFRQXZDLGtCQUFNLENBQUM3RCxHQUFQLEdBQWErUixZQUFiO0FBN0NXO0FBQUE7O0FBQUE7QUFBQSxrQkErQ0psTyxNQUFNLENBQUMxRSxJQUFQLEtBQWdCLFVBL0NaO0FBQUE7QUFBQTtBQUFBOztBQWdETGdFLGtCQWhESyxHQWdERytOLFNBQVMsQ0FBQ1csUUFBVixHQUFxQnJPLE9BQXJCLENBQTZCTCxLQWhEaEM7QUFpREwyTyxzQkFqREssR0FpRE9aLFNBQVMsQ0FBQ1csUUFBVixHQUFxQnJPLE9BQXJCLENBQTZCMEcsS0FqRHBDO0FBQUE7QUFBQSxtQkFrRGdCb0gsT0FBTyxrQkFBa0I7QUFDbER2UixnQkFBRSxFQUFFK1IsVUFBUyxDQUFDMUwsTUFEb0M7QUFFbERVLG1CQUFLLEVBQUVnTCxVQUFTLENBQUNoTCxLQUZpQztBQUdsRGdELGtCQUFJLEVBQUVnSSxVQUFTLENBQUNoSSxJQUhrQztBQUlsRDNCLHNCQUFRLEVBQUUySixVQUFTLENBQUN4SjtBQUo4QixhQUFsQixFQUsvQixNQUwrQixDQWxEdkI7O0FBQUE7QUFrREwySix3QkFsREs7QUF5RFBGLHlCQXpETyxHQXlEUSxJQXpEUjs7QUEwRFg1TyxrQkFBSyxDQUFDNk8sSUFBTixDQUFXLFVBQVNoSyxJQUFULEVBQWVoSSxHQUFmLEVBQW1CO0FBQzVCLGtCQUFHZ0ksSUFBSSxDQUFDQyxHQUFMLEtBQWFnSyxZQUFZLENBQUNoSyxHQUE3QixFQUFpQztBQUMvQjhKLDZCQUFZLEdBQUcvUixHQUFmO0FBQ0Q7O0FBRUQscUJBQU9nSSxJQUFJLENBQUNDLEdBQUwsS0FBYWdLLFlBQVksQ0FBQ2hLLEdBQWpDO0FBQ0QsYUFORDs7QUFRQXBFLGtCQUFNLENBQUM3RCxHQUFQLEdBQWErUixhQUFiO0FBQ0FsTyxrQkFBTSxDQUFDMUQsSUFBUCxHQUFjOFIsWUFBZDs7QUFuRVc7QUFzRWJoQix5QkFBYSxDQUFDcE4sTUFBRCxDQUFiOztBQXRFYTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4QmY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBR0EsSUFBTXFPLE9BQU8sR0FBR0MsNkRBQWUsbUJBQzFCQyw0Q0FEMEI7QUFFN0JDLFNBQU8sRUFBRUMsZ0VBQWFBO0FBRk8sR0FBL0I7QUFLQSxJQUFNbEIsS0FBSyxHQUFHbUIseURBQVcsQ0FDdkJMLE9BRHVCLENBRXZCO0FBRnVCLENBQXpCO0FBS0FmLHdFQUFpQixDQUFDQyxLQUFELENBQWpCO0FBRUEsSUFBTW9CLE9BQU8sR0FBR0MsK0VBQW9CLENBQUNyTyx3REFBRCxFQUFjZ04sS0FBZCxDQUFwQztBQUVBM0csZ0RBQVEsQ0FBQ2lJLE1BQVQsQ0FDRSwyREFBQyxvREFBRDtBQUFVLE9BQUssRUFBRXRCO0FBQWpCLEdBQ0ksMkRBQUMsbURBQUQ7QUFBUSxTQUFPLEVBQUVvQjtBQUFqQixHQUNFLDJEQUFDLGtEQUFEO0FBQU8sTUFBSSxFQUFDLEdBQVo7QUFBaUIsV0FBUyxFQUFFMVIsdURBQUdBO0FBQS9CLEdBQ0UsMkRBQUMsdURBQUQ7QUFBWSxXQUFTLEVBQUUrRCx5REFBS0E7QUFBNUIsRUFERixFQUVFLDJEQUFDLGtEQUFEO0FBQU8sTUFBSSxFQUFDLFVBQVo7QUFBd0IsV0FBUyxFQUFFaUUseURBQUlBO0FBQXZDLEVBRkYsRUFHRSwyREFBQyxrREFBRDtBQUFPLE1BQUksRUFBQyxPQUFaO0FBQW9CLFdBQVMsRUFBRXFCLDBEQUFLQTtBQUFwQyxFQUhGLEVBSUUsMkRBQUMsa0RBQUQ7QUFBTyxNQUFJLEVBQUMsV0FBWjtBQUF3QixXQUFTLEVBQUVBLDBEQUFLQTtBQUF4QyxFQUpGLENBREYsQ0FESixDQURGLEVBV0V4SSxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsT0FBeEIsQ0FYRixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaENBLElBQU0rUSxnQkFBZ0IsR0FBRztBQUN2QkMsUUFBTSxFQUFFO0FBQ050SyxRQUFJLEVBQUU7QUFEQSxHQURlO0FBSXZCbkYsT0FBSyxFQUFFLEVBSmdCO0FBS3ZCd0UsTUFBSSxFQUFFO0FBQ0p2QixVQUFNLEVBQUUsQ0FESjtBQUVKVSxTQUFLLEVBQUUsRUFGSDtBQUdKZ0QsUUFBSSxFQUFFLEVBSEY7QUFJSnhCLFFBQUksRUFBRTtBQUpGLEdBTGlCO0FBV3ZCNEIsT0FBSyxFQUFFO0FBQ0w5RCxVQUFNLEVBQUUsQ0FESDtBQUVMVSxTQUFLLEVBQUUsRUFGRjtBQUdMZ0QsUUFBSSxFQUFFLEVBSEQ7QUFJTDVLLFVBQU0sRUFBRSxDQUpIO0FBS0xvSixRQUFJLEVBQUU7QUFMRCxHQVhnQjtBQWtCdkJ6RixTQUFPLEVBQUU7QUFDUEYsVUFBTSxFQUFFO0FBREQsR0FsQmM7QUFxQnZCRCxRQUFNLEVBQUU7QUFDTkMsVUFBTSxFQUFFLEtBREY7QUFFTnhELFFBQUksRUFBRSxPQUZBO0FBR05PLFdBQU8sRUFBRTtBQUhILEdBckJlO0FBMEJ2QitELFVBQVEsRUFBRTtBQUNSa0QsVUFBTSxFQUFFLElBREE7QUFFUmpELFNBQUssRUFBRTtBQUZDO0FBMUJhLENBQXpCO0FBZ0NlLFNBQVNtUCxZQUFULEdBQXdEO0FBQUEsTUFBbEM1UixLQUFrQyx1RUFBMUIwUixnQkFBMEI7QUFBQSxNQUFSOU8sTUFBUTtBQUVyRSxNQUFJaVAsU0FBUyxHQUFHLEVBQWhCOztBQUVBLFVBQVFqUCxNQUFNLENBQUMxRSxJQUFmO0FBRUU7QUFDQSxTQUFLLGVBQUw7QUFDRTJULGVBQVMsR0FBR3ZGLElBQUksQ0FBQ0MsS0FBTCxDQUFXRCxJQUFJLENBQUN3RixTQUFMLENBQWU5UixLQUFmLENBQVgsQ0FBWjtBQUNBNlIsZUFBUyxDQUFDNUksS0FBVixDQUFnQmhMLE1BQWhCLEdBQXlCMkUsTUFBTSxDQUFDM0UsTUFBaEM7QUFDQSxhQUFPNFQsU0FBUDtBQUNBOztBQUVGOztBQUNBLFNBQUssY0FBTDtBQUNFQSxlQUFTLEdBQUdFLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjLEVBQWQsRUFBaUJoUyxLQUFqQixDQUFaO0FBQ0E2UixlQUFTLENBQUNyUCxRQUFWLENBQW1CQyxLQUFuQixHQUEyQkcsTUFBTSxDQUFDdEUsSUFBbEM7QUFFQSxhQUFPdVQsU0FBUDtBQUNBOztBQUVGOztBQUNBLFNBQUssaUJBQUw7QUFDRUEsZUFBUyxHQUFHRSxNQUFNLENBQUNDLE1BQVAsQ0FBYyxFQUFkLEVBQWlCaFMsS0FBakIsRUFBdUI7QUFDakN3QyxnQkFBUSxFQUFFdVAsTUFBTSxDQUFDQyxNQUFQLENBQWMsRUFBZCxFQUFpQmhTLEtBQUssQ0FBQ3dDLFFBQXZCLEVBQWdDO0FBQ3hDa0QsZ0JBQU0sRUFBRTlDLE1BQU0sQ0FBQ3hFO0FBRHlCLFNBQWhDO0FBRHVCLE9BQXZCLENBQVo7QUFNQSxhQUFPeVQsU0FBUDtBQUNBOztBQUVGOztBQUNBLFNBQUssYUFBTDtBQUVFQSxlQUFTLEdBQUdFLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjLEVBQWQsRUFBaUJoUyxLQUFqQixFQUF1QjtBQUNqQ3lCLGNBQU0sRUFBRTtBQUNOQyxnQkFBTSxFQUFFLElBREY7QUFFTnhELGNBQUksRUFBRTBFLE1BQU0sQ0FBQ3BFLFVBRlA7QUFHTkMsaUJBQU8sRUFBRW1FLE1BQU0sQ0FBQ25FLE9BSFY7QUFJTkMsdUJBQWEsRUFBRWtFLE1BQU0sQ0FBQ2xFLGFBSmhCO0FBS051VCxvQkFBVSxFQUFFclAsTUFBTSxDQUFDakU7QUFMYjtBQUR5QixPQUF2QixDQUFaO0FBVUEsYUFBT2tULFNBQVA7QUFDQTs7QUFFRjs7QUFDQSxTQUFLLGNBQUw7QUFFRUEsZUFBUyxHQUFHRSxNQUFNLENBQUNDLE1BQVAsQ0FBYyxFQUFkLEVBQWlCaFMsS0FBakIsRUFBdUI7QUFDbkN5QixjQUFNLEVBQUU7QUFDTkMsZ0JBQU0sRUFBRSxLQURGO0FBRU54RCxjQUFJLEVBQUU7QUFGQTtBQUQyQixPQUF2QixDQUFaO0FBT0YsYUFBTzJULFNBQVA7QUFFQTs7QUFFQSxTQUFLLGlCQUFMO0FBRUVBLGVBQVMsR0FBR3ZGLElBQUksQ0FBQ0MsS0FBTCxDQUFXRCxJQUFJLENBQUN3RixTQUFMLENBQWU5UixLQUFmLENBQVgsQ0FBWjtBQUNBNlIsZUFBUyxDQUFDM1AsS0FBVixDQUFnQlUsTUFBTSxDQUFDN0QsR0FBdkIsRUFBNEJrSSxRQUE1QixHQUF1Q3JFLE1BQU0sQ0FBQ3FFLFFBQTlDO0FBRUEsYUFBTzRLLFNBQVA7QUFDRjs7QUFFQTs7QUFDQSxTQUFLLGdCQUFMO0FBQ0UsVUFBTW5RLE1BQU0sR0FBRzFCLEtBQUssQ0FBQzRCLE9BQU4sQ0FBY0YsTUFBZCxHQUF1QixLQUF2QixHQUErQixJQUE5QztBQUVBbVEsZUFBUyxHQUFHRSxNQUFNLENBQUNDLE1BQVAsQ0FBYyxFQUFkLEVBQWlCaFMsS0FBakIsQ0FBWjtBQUNBNlIsZUFBUyxDQUFDalEsT0FBVixDQUFrQkYsTUFBbEIsR0FBMkJBLE1BQTNCO0FBR0EsYUFBT21RLFNBQVA7QUFDQTs7QUFFRjs7QUFDQSxTQUFLLFdBQUw7QUFDRSxVQUFNSyxLQUFLLEdBQUd0UCxNQUFNLENBQUMxRCxJQUFyQjtBQUNBLFVBQU1pVCxRQUFRLEdBQUcsQ0FBQ0QsS0FBRCxFQUFRRSxNQUFSLENBQWVwUyxLQUFLLENBQUNrQyxLQUFyQixDQUFqQjtBQUVBMlAsZUFBUyxHQUFHRSxNQUFNLENBQUNDLE1BQVAsQ0FBYyxFQUFkLEVBQWlCaFMsS0FBakIsRUFBdUI7QUFDakNrQyxhQUFLLEVBQUVpUSxRQUQwQjtBQUVqQ2xKLGFBQUssRUFBRTtBQUNMcEQsZUFBSyxFQUFFLEVBREY7QUFFTGdELGNBQUksRUFBRSxFQUZEO0FBR0x4QixjQUFJLEVBQUU7QUFIRDtBQUYwQixPQUF2QixDQUFaO0FBU0EsYUFBT3dLLFNBQVA7QUFDQTs7QUFFRjs7QUFDQSxTQUFLLFVBQUw7QUFDRUEsZUFBUyxHQUFHRSxNQUFNLENBQUNDLE1BQVAsQ0FBYyxFQUFkLEVBQWtCaFMsS0FBbEIsQ0FBWjtBQUNBNlIsZUFBUyxDQUFDM1AsS0FBVixDQUFnQlUsTUFBTSxDQUFDN0QsR0FBdkIsSUFBOEI2RCxNQUFNLENBQUMxRCxJQUFyQztBQUNBLGFBQU8yUyxTQUFQO0FBQ0E7O0FBRUY7O0FBQ0EsU0FBSyxpQkFBTDtBQUNFQSxlQUFTLEdBQUdFLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjLEVBQWQsRUFBa0JoUyxLQUFsQixFQUF5QjtBQUNuQ2lKLGFBQUssRUFBRTtBQUNMOUQsZ0JBQU0sRUFBRW5GLEtBQUssQ0FBQzBHLElBQU4sQ0FBV3ZCLE1BRGQ7QUFFTFUsZUFBSyxFQUFFN0YsS0FBSyxDQUFDMEcsSUFBTixDQUFXYixLQUZiO0FBR0xnRCxjQUFJLEVBQUU3SSxLQUFLLENBQUMwRyxJQUFOLENBQVdtQyxJQUhaO0FBSUx4QixjQUFJLEVBQUVySCxLQUFLLENBQUMwRyxJQUFOLENBQVdXO0FBSlo7QUFENEIsT0FBekIsQ0FBWjtBQVFBLGFBQU93SyxTQUFQO0FBQ0E7O0FBRUY7O0FBQ0EsU0FBSyxrQkFBTDtBQUNFQSxlQUFTLEdBQUdFLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjLEVBQWQsRUFBaUJoUyxLQUFqQixDQUFaO0FBQ0E2UixlQUFTLENBQUM1SSxLQUFWLENBQWdCcEQsS0FBaEIsR0FBd0JqRCxNQUFNLENBQUNqRCxJQUEvQjtBQUVBLGFBQU9rUyxTQUFQO0FBQ0E7O0FBRUY7O0FBQ0EsU0FBSyxpQkFBTDtBQUNFQSxlQUFTLEdBQUdFLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjLEVBQWQsRUFBaUJoUyxLQUFqQixDQUFaO0FBQ0E2UixlQUFTLENBQUM1SSxLQUFWLENBQWdCSixJQUFoQixHQUF1QmpHLE1BQU0sQ0FBQ2pELElBQTlCO0FBRUEsYUFBT2tTLFNBQVA7QUFDQTs7QUFFRjs7QUFDQSxTQUFLLGlCQUFMO0FBQ0VBLGVBQVMsR0FBR0UsTUFBTSxDQUFDQyxNQUFQLENBQWMsRUFBZCxFQUFpQmhTLEtBQWpCLENBQVo7QUFDQTZSLGVBQVMsQ0FBQzVJLEtBQVYsQ0FBZ0I1QixJQUFoQixHQUF1QnpFLE1BQU0sQ0FBQ2pELElBQTlCO0FBRUEsYUFBT2tTLFNBQVA7QUFDQTs7QUFFRjs7QUFDQSxTQUFLLFlBQUw7QUFDRUEsZUFBUyxHQUFHRSxNQUFNLENBQUNDLE1BQVAsQ0FBYyxFQUFkLEVBQWtCaFMsS0FBbEIsQ0FBWjtBQUNBNlIsZUFBUyxDQUFDM1AsS0FBVixDQUFnQm1RLE1BQWhCLENBQXVCelAsTUFBTSxDQUFDN0QsR0FBOUIsRUFBbUMsQ0FBbkM7QUFFQWlCLFdBQUssQ0FBQ2tDLEtBQU4sc0JBQWtCMlAsU0FBUyxDQUFDM1AsS0FBNUI7QUFFQSxhQUFPbEMsS0FBUDtBQUNBOztBQUVGOztBQUNBLFNBQUssUUFBTDtBQUNFLGFBQVErUixNQUFNLENBQUNDLE1BQVAsQ0FBYyxFQUFkLEVBQWlCaFMsS0FBakIsRUFBdUI7QUFDN0IwRyxZQUFJLEVBQUU7QUFDSm1DLGNBQUksRUFBRWpHLE1BQU0sQ0FBQ25ELElBQVAsQ0FBWW9KLElBRGQ7QUFFSmhELGVBQUssRUFBRWpELE1BQU0sQ0FBQ25ELElBQVAsQ0FBWW9HLEtBRmY7QUFHSndCLGNBQUksRUFBRXpFLE1BQU0sQ0FBQ25ELElBQVAsQ0FBWXlILFFBSGQ7QUFJSi9CLGdCQUFNLEVBQUV2QyxNQUFNLENBQUM5RDtBQUpYO0FBRHVCLE9BQXZCLENBQVI7QUFRQTs7QUFFRjs7QUFDQSxTQUFLLFNBQUw7QUFFRStTLGVBQVMsR0FBR3ZGLElBQUksQ0FBQ0MsS0FBTCxDQUFXRCxJQUFJLENBQUN3RixTQUFMLENBQWU5UixLQUFmLENBQVgsQ0FBWjtBQUVBLFVBQUlkLElBQUksR0FBRyxFQUFYOztBQUNBLFVBQUkwRCxNQUFNLENBQUN0RCxZQUFYLEVBQXlCO0FBQ3ZCSixZQUFJLENBQUNJLFlBQUwsR0FBb0JzRCxNQUFNLENBQUN0RCxZQUEzQjtBQUNEOztBQUVEdVMsZUFBUyxHQUFHRSxNQUFNLENBQUNDLE1BQVAsQ0FBYyxFQUFkLEVBQWlCaFMsS0FBakIsRUFBdUI7QUFDakNrQyxhQUFLLEVBQUVVLE1BQU0sQ0FBQ3JEO0FBRG1CLE9BQXZCLENBQVo7QUFJQSxhQUFPc1MsU0FBUDtBQUNBOztBQUVGOztBQUNBO0FBQ0UsYUFBTzdSLEtBQVA7QUFDQTtBQXBMSjtBQXNMRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6TkQsSUFBTXNTLG1CQUFtQixHQUFHLFNBQXRCQSxtQkFBc0IsQ0FBU0MsR0FBVCxFQUFjO0FBQ3hDLE1BQUksQ0FBQ0EsR0FBTCxFQUFVO0FBQ1IsV0FBTyxFQUFQO0FBQ0Q7O0FBQ0QsTUFBSUMsVUFBVSxHQUFHVCxNQUFNLENBQUNVLElBQVAsQ0FBWUYsR0FBWixFQUFpQkcsTUFBakIsQ0FBd0IsVUFBU0MsR0FBVCxFQUFjO0FBQ3JELFdBQU9KLEdBQUcsQ0FBQ0ksR0FBRCxDQUFILEtBQWEsRUFBYixJQUFtQkosR0FBRyxDQUFDSSxHQUFELENBQUgsS0FBYSxJQUF2QztBQUNELEdBRmdCLENBQWpCO0FBSUEsU0FBT0gsVUFBVSxDQUFDbEwsTUFBWCxDQUFrQixVQUFTc0wsR0FBVCxFQUFjRCxHQUFkLEVBQW1CRSxLQUFuQixFQUEwQjtBQUNqRCxRQUFJQyxTQUFTLEdBQUdELEtBQUssS0FBSyxDQUFWLEdBQWMsRUFBZCxHQUFtQixHQUFuQztBQUNBLFFBQUkzUCxLQUFLLEdBQUdxUCxHQUFHLENBQUNJLEdBQUQsQ0FBZjs7QUFDQSxRQUFJSSxLQUFLLENBQUNDLE9BQU4sQ0FBYzlQLEtBQWQsQ0FBSixFQUEwQjtBQUN4QkEsV0FBSyxDQUFDcUgsT0FBTixDQUFjLFVBQUEwSSxRQUFRLEVBQUk7QUFDeEJMLFdBQUcsY0FBT0UsU0FBUCxTQUFtQkgsR0FBbkIsZ0JBQTRCTSxRQUE1QixDQUFIO0FBQ0QsT0FGRDtBQUdELEtBSkQsTUFJTztBQUNMTCxTQUFHLGNBQU9FLFNBQVAsU0FBbUJILEdBQW5CLGNBQTBCelAsS0FBMUIsQ0FBSDtBQUNEOztBQUVELFdBQU8wUCxHQUFQO0FBQ0QsR0FaTSxFQVlKLEVBWkksQ0FBUDtBQWFELENBckJEOztBQXVCQSxJQUFNTSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFTM0MsTUFBVCxFQUFpQkQsR0FBakIsRUFBc0JwUixJQUF0QixFQUE0QnVSLFdBQTVCLEVBQXlDO0FBQ3pELFNBQU8sSUFBSTBDLE9BQUosQ0FBWSxVQUFVQyxPQUFWLEVBQW1CQyxNQUFuQixFQUEyQjtBQUU1QyxRQUFJdkgsR0FBRyxHQUFHLElBQUlDLGNBQUosRUFBVjs7QUFFQSxRQUFJLHFCQUFxQkQsR0FBekIsRUFBOEI7QUFDNUJBLFNBQUcsQ0FBQ0ssa0JBQUosR0FBeUIsWUFBVztBQUNsQyxZQUFJTCxHQUFHLENBQUNNLFVBQUosS0FBbUIsQ0FBdkIsRUFBMEI7QUFDeEIsY0FBSU4sR0FBRyxDQUFDTyxNQUFKLEtBQWUsR0FBZixJQUFzQitHLE9BQTFCLEVBQW1DO0FBQ2pDQSxtQkFBTyxDQUFDdEgsR0FBRyxDQUFDd0gsUUFBTCxDQUFQO0FBQ0QsV0FGRCxNQUVPO0FBQ0xELGtCQUFNLENBQUMsV0FBRCxDQUFOO0FBQ0Q7QUFDRjtBQUNGLE9BUkQ7O0FBU0F2SCxTQUFHLENBQUNHLElBQUosQ0FBU3NFLE1BQVQsRUFBaUJELEdBQWpCLEVBQXNCLEtBQXRCO0FBQ0F4RSxTQUFHLENBQUN5SCxlQUFKLEdBQXNCLElBQXRCOztBQUVBLFVBQUk5QyxXQUFKLEVBQWlCO0FBQ2YzRSxXQUFHLENBQUMwSCxnQkFBSixDQUFxQixjQUFyQixFQUFxQy9DLFdBQXJDO0FBQ0Q7QUFDRixLQWhCRCxNQWdCTyxJQUFJLE9BQU9nRCxjQUFQLEtBQTBCLFdBQTlCLEVBQTJDO0FBQ2hEM0gsU0FBRyxHQUFHLElBQUkySCxjQUFKLEVBQU47O0FBQ0EzSCxTQUFHLENBQUM0SCxVQUFKLEdBQWlCLFlBQVcsQ0FBRSxDQUE5QixDQUZnRCxDQUVoQjs7O0FBQ2hDNUgsU0FBRyxDQUFDNkgsU0FBSixHQUFnQixZQUFXLENBQUUsQ0FBN0IsQ0FIZ0QsQ0FHakI7OztBQUMvQjdILFNBQUcsQ0FBQ0csSUFBSixDQUFTc0UsTUFBVCxFQUFpQkQsR0FBakI7QUFDRCxLQUxNLE1BS0E7QUFDTHhFLFNBQUcsR0FBRyxJQUFOO0FBQ0Q7O0FBRURBLE9BQUcsQ0FBQ0ksSUFBSixDQUFTSSxJQUFJLENBQUN3RixTQUFMLENBQWU1UyxJQUFmLENBQVQ7QUFDRCxHQTlCTSxDQUFQO0FBK0JELENBaENEOztBQW1DZSxTQUFld1IsSUFBOUI7QUFBQTtBQUFBOzs7OzswQkFBZSxpQkFBb0JrRCxlQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDVHRELGVBRFMsR0FDSHNELGVBQWUsQ0FBQ3RELEdBRGI7QUFFUEMsa0JBRk8sR0FFRXFELGVBQWUsQ0FBQ3JELE1BRmxCO0FBR1ByUixnQkFITyxHQUdBMFUsZUFBZSxDQUFDMVUsSUFIaEI7QUFJUDJVLG1CQUpPLEdBSUdELGVBQWUsQ0FBQ0MsT0FKbkI7QUFLUEMsZ0JBTE8sR0FLQUYsZUFBZSxDQUFDRSxJQUxoQjtBQU1QQyxtQkFOTyxHQU1HSCxlQUFlLENBQUNHLE9BQWhCLElBQTJCLEVBTjlCO0FBT1B0RCx1QkFQTyxHQU9PbUQsZUFBZSxDQUFDbkQsV0FQdkI7O0FBU2IsZ0JBQUlGLE1BQU0sS0FBSyxNQUFYLElBQXFCclIsSUFBekIsRUFBK0I7QUFDN0JvUixpQkFBRyxlQUFRZ0MsbUJBQW1CLENBQUNwVCxJQUFELENBQTNCLENBQUg7QUFDRDs7QUFYWTtBQUFBLG1CQVlRZ1UsU0FBUyxDQUFDM0MsTUFBRCxFQUFTRCxHQUFULEVBQWNwUixJQUFkLEVBQW9CdVIsV0FBcEIsQ0FaakI7O0FBQUE7QUFZUDdHLGtCQVpPO0FBQUEsNkNBY04wQyxJQUFJLENBQUNDLEtBQUwsQ0FBVzNDLE1BQVgsQ0FkTTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHIiwiZmlsZSI6Im1haW4uYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIHtcblx0XHR2YXIgYSA9IGZhY3RvcnkoKTtcblx0XHRmb3IodmFyIGkgaW4gYSkgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyA/IGV4cG9ydHMgOiByb290KVtpXSA9IGFbaV07XG5cdH1cbn0pKHdpbmRvdywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJtYWluXCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goWzAsXCJ2ZW5kb3JzXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwiLy9pbXBvcnQgeyBJTkNSRUFTRSwgREVDUkVBU0UgfSBmcm9tICcuLi9jb25zdGFudHMnXG5cblxuLyoqXG4gKiBTQ1JPTExfQ0hBTkdFXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzY3JvbGxDaGFuZ2UgKHNjcm9sbCkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6ICdTQ1JPTExfQ0hBTkdFJyxcbiAgICBzY3JvbGxcbiAgfTtcbn1cblxuLyoqXG4gKiBTSE9SVENVVF9DSEFOR0VcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNob3J0Y3V0Q2hhbmdlIChjb21tYW5kKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogJ1NIT1JUQ1VUX0NIQU5HRScsXG4gICAgY29tbWFuZFxuICB9O1xufVxuXG4vKipcbiAqIEFETUlOX0NIQU5HRVxuICovXG5leHBvcnQgZnVuY3Rpb24gYWRtaW5DaGFuZ2UgKGJvb2wpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiAnQURNSU5fQ0hBTkdFJyxcbiAgICBib29sXG4gIH07XG59XG5cbi8qKlxuICogT1BFTl9ESUFMT0dcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG9wZW5EaWFsb2cgKGRpYWxvZ3R5cGUsIG1lc3NhZ2UsIHN1Y2Nlc3NhY3Rpb249bnVsbCwgZmFpbGFjdGlvbj1udWxsKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogJ09QRU5fRElBTE9HJyxcbiAgICBkaWFsb2d0eXBlLFxuICAgIG1lc3NhZ2UsXG4gICAgc3VjY2Vzc2FjdGlvbixcbiAgICBmYWlsYWN0aW9uXG4gIH07XG59XG5cbi8qKlxuICogQ0xPU0VfRElBTE9HXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGNsb3NlRGlhbG9nICgpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiAnQ0xPU0VfRElBTE9HJyxcbiAgfTtcbn1cblxuLyoqXG4gKiBUT0dHTEVfRkFWT1JJVEVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRvZ2dsZUZhdm9yaXRlIChpZCwgaWR4KSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogJ1RPR0dMRV9GQVZPUklURScsXG4gICAgaWQsXG4gICAgaWR4XG4gIH07XG59XG5cblxuLyoqXG4gKiBUT0dHTEVfUFJFVklFV1xuICovXG5leHBvcnQgZnVuY3Rpb24gdG9nZ2xlUHJldmlldyAoKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogJ1RPR0dMRV9QUkVWSUVXJ1xuICB9O1xufVxuXG4vKipcbiAqIEFERCBOT1RFXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB3cml0ZU5vdGUgKCkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6ICdXUklURU5PVEUnLFxuICAgIGRhdGE6IG51bGxcbiAgfTtcbn1cblxuLyoqXG4gKiBVUERBVEUgTk9URVxuICovXG5leHBvcnQgZnVuY3Rpb24gZWRpdE5vdGUgKGlkKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogJ0VESVROT1RFJyxcbiAgICBpZCxcbiAgICBpZHg6IG51bGwsXG4gICAgZGF0YTogbnVsbFxuICB9O1xufVxuXG4vKipcbiAqIERFTEVURSBOT1RFXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkZWxldGVOb3RlICgpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiAnREVMRVRFTk9URScsXG4gICAgaWR4OiBudWxsXG4gIH07XG59XG5cbi8qKlxuICogR0VUIExJU1RcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldExpc3QgKHNlYXJjaFN0cmluZykge1xuICByZXR1cm4ge1xuICAgIHR5cGU6ICdHRVRMSVNUJyxcbiAgICBzZWFyY2hTdHJpbmcsXG4gICAgbGlzdDogW11cbiAgfTtcbn1cblxuLyoqXG4gKiBHRVQgT05FXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRPbmUgKGlkKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogJ0dFVE9ORScsXG4gICAgaWQsXG4gICAgaW5mbzoge31cbiAgfTtcbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlRm9ybSAodHlwZSwgdGV4dCkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6ICdVUERBVEVGT1JNXycgKyB0eXBlLnRvVXBwZXJDYXNlKCksXG4gICAgdGV4dCBcbiAgfTtcbn1cbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGhhc2hIaXN0b3J5IH0gZnJvbSAncmVhY3Qtcm91dGVyJztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBMaW5rLCBicm93c2VySGlzdG9yeSB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XG5cbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9IZWFkZXInO1xuaW1wb3J0IEZvb3RlciBmcm9tICcuL0Zvb3Rlcic7XG5pbXBvcnQgTGlzdCBmcm9tICcuL0xpc3QnO1xuaW1wb3J0IFZpZXcgZnJvbSAnLi9WaWV3JztcbmltcG9ydCBEaWFsb2cgZnJvbSAnLi9EaWFsb2cnO1xuaW1wb3J0IGRpc3BhdGNoZXIgZnJvbSAnLi4vZGlzcGF0Y2hlci5qcyc7XG5cbi8qIElNUE9SVCBBQ1RJT05TICovXG5pbXBvcnQge2dldExpc3R9IGZyb20gJy4uL2FjdGlvbnMvam5vdGUnO1xuXG5jbGFzcyBBcHAgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzLCBjaGlsZHJlbikge1xuICAgIHN1cGVyKHByb3BzKTtcblxuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGRvd25zdGF0ZTogZmFsc2UsXG4gICAgICByZWFsbGVmdDogMzBcbiAgICB9O1xuICB9XG5cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAvKiogKiDrpqzsiqTtirjrpbwg6rCA7KC47Jio64ukICovXG4gICAgZGlzcGF0Y2hlcihnZXRMaXN0KCkpO1xuICB9XG5cbiAgaGFuZGxlTW91c2VEb3duKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBkb3duc3RhdGU6IHRydWUgfSk7XG4gIH1cblxuICBoYW5kbGVNb3VzZVVwKGUpIHtcbiAgICBpZiAodGhpcy5zdGF0ZS5kb3duc3RhdGUpIHtcbiAgICAgIGxldCBwYWdlWCA9IGUucGFnZVg7XG4gICAgICBpZiAoIXBhZ2VYICYmIGUudG91Y2hlcykge1xuICAgICAgICBpZiAoZS50b3VjaGVzLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHBhZ2VYID0gZS50b3VjaGVzWzBdLnBhZ2VYO1xuICAgICAgfVxuICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhaW5lcicpO1xuICAgICAgY29uc3QgY29udGFpbmVyV2lkdGggPSBjb250YWluZXIuY2xpZW50V2lkdGg7XG4gICAgICBjb25zdCByZWFsbGVmdCA9ICBNYXRoLnJvdW5kKChwYWdlWCAvIGNvbnRhaW5lcldpZHRoICkgKiAxMDApO1xuXG4gICAgICB0aGlzLmNoYW5nZVNoYWRvd0xlZnQocmVhbGxlZnQpO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZU1vdXNlTGVhdmUoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGRvd25zdGF0ZTogZmFsc2UgfSk7XG4gIH1cblxuICBoYW5kbGVNb3VzZU1vdmUoZSkge1xuICAgIGlmICh0aGlzLnN0YXRlLmRvd25zdGF0ZSkge1xuICAgICAgY29uc3QgcGFnZVggPSBlLnBhZ2VYIHx8IGUudG91Y2hlc1swXS5wYWdlWDtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBzaGFkb3dsZWZ0OiB7IGxlZnQ6IGBjYWxjKCR7cGFnZVggLSA1fXB4KWAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIGNoYW5nZVNoYWRvd0xlZnQocmVhbGxlZnQpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgXG4gICAgICBkb3duc3RhdGU6IGZhbHNlLFxuICAgICAgcmVhbGxlZnRcbiAgICB9KTtcbiAgfVxuXG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCByZWFsbGVmdCA9IHRoaXMuc3RhdGUucmVhbGxlZnQ7XG4gICAgbGV0IHNwbGl0U3R5bGUgPSB7XG4gICAgICBsZWZ0OiBgY2FsYygke3JlYWxsZWZ0fSUgLSAzcHgpYFxuICAgIH07XG5cbiAgICBsZXQgU1BMSVRTSEFET1cgPSAgbnVsbDtcbiAgICBpZiAodGhpcy5zdGF0ZS5kb3duc3RhdGUpIHtcbiAgICAgIFNQTElUU0hBRE9XID0gPGRpdiBjbGFzc05hbWU9XCJzcGxpdC1zaGFkb3dcIiBzdHlsZT17dGhpcy5zdGF0ZS5zaGFkb3dsZWZ0fT48L2Rpdj47XG4gICAgfVxuXG4gICAgbGV0IENISUxEUkVOID0gUmVhY3QuY2xvbmVFbGVtZW50KHRoaXMucHJvcHMuY2hpbGRyZW4sIHtcbiAgICAgIHJlYWxsZWZ0XG4gICAgfSk7XG5cbiAgICBsZXQgRElBTE9HID0gbnVsbDtcbiAgICBpZiAoIHRoaXMucHJvcHMuZGlhbG9nLm9wZW5lZCApIHtcbiAgICAgIERJQUxPRyA9IDxEaWFsb2cgey4uLnRoaXMucHJvcHN9IC8+O1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgaWQ9XCJhcHAtY29udGFpbmVyXCI+XG4gICAgICAgICAgPEhlYWRlciBcbiAgICAgICAgICAgIGxvY2F0aW9uPXt0aGlzLnByb3BzLmxvY2F0aW9ufSBcbiAgICAgICAgICAgIHByZXZpZXc9e3RoaXMucHJvcHMucHJldmlld31cbiAgICAgICAgICAgIGFkbWluTW9kZT17dGhpcy5wcm9wcy5hZG1pbk1vZGV9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8ZGl2IGlkPVwiY29udGFpbmVyXCJcbiAgICAgICAgICAgIG9uTW91c2VNb3ZlPXt0aGlzLmhhbmRsZU1vdXNlTW92ZS5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgb25Nb3VzZVVwPXt0aGlzLmhhbmRsZU1vdXNlVXAuYmluZCh0aGlzKX1cbiAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17dGhpcy5oYW5kbGVNb3VzZUxlYXZlLmJpbmQodGhpcyl9XG4gICAgICAgICAgICBvblRvdWNoTW92ZT17dGhpcy5oYW5kbGVNb3VzZU1vdmUuYmluZCh0aGlzKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7RElBTE9HfVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAoIHRoaXMucHJvcHMucHJldmlldyApXG4gICAgICAgICAgICAgID8gXG4gICAgICAgICAgICAgICAgPFZpZXcgdmlld1R5cGU9XCJwcmV2aWV3XCIgcmVhbGxlZnQ9e3RoaXMuc3RhdGUucmVhbGxlZnR9IC8+XG4gICAgICAgICAgICAgIDogXG4gICAgICAgICAgICAgICAgPExpc3QgXG4gICAgICAgICAgICAgICAgICAgIGxpc3RzPXt0aGlzLnByb3BzLmxpc3RzfVxuICAgICAgICAgICAgICAgICAgICBhZG1pbk1vZGU9e3RoaXMucHJvcHMuYWRtaW5Nb2RlfVxuICAgICAgICAgICAgICAgICAgICByZWFsbGVmdD17dGhpcy5zdGF0ZS5yZWFsbGVmdH0gXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDxkaXYgXG4gICAgICAgICAgICAgIG9uTW91c2VEb3duPXt0aGlzLmhhbmRsZU1vdXNlRG93bi5iaW5kKHRoaXMpfSBcbiAgICAgICAgICAgICAgb25Ub3VjaFN0YXJ0PXt0aGlzLmhhbmRsZU1vdXNlRG93bi5iaW5kKHRoaXMpfSBcbiAgICAgICAgICAgICAgb25Ub3VjaEVuZD17dGhpcy5oYW5kbGVNb3VzZVVwLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNwbGl0XCJcbiAgICAgICAgICAgICAgc3R5bGU9e3NwbGl0U3R5bGV9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIHtTUExJVFNIQURPV31cbiAgICAgICAgICAgIHtDSElMRFJFTn1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8Rm9vdGVyXG4gICAgICAgICAgICBsb2NhdGlvbj17dGhpcy5wcm9wcy5sb2NhdGlvbn0gXG4gICAgICAgICAgICBwYXJhbXM9e3RoaXMucHJvcHMucGFyYW1zfSBcbiAgICAgICAgICAgIHByZXZpZXc9e3RoaXMucHJvcHMucHJldmlld31cbiAgICAgICAgICAgIGFkbWluTW9kZT17dGhpcy5wcm9wcy5hZG1pbk1vZGV9XG4gICAgICAgICAgICBjaGFuZ2VTaGFkb3dMZWZ0PXt0aGlzLmNoYW5nZVNoYWRvd0xlZnQuYmluZCh0aGlzKX1cbiAgICAgICAgICAgIHJlYWxsZWZ0PXt0aGlzLnN0YXRlLnJlYWxsZWZ0fSBcbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xuXG4gIH1cbn1cblxuLyoqXG4gKiAgUkVEVVggU1RBVEUg7KO87J6FXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoZnVuY3Rpb24gKHN0YXRlKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGxpc3RzOiBzdGF0ZS5kZWZhdWx0Lmxpc3RzLFxuICAgICAgcHJldmlldzogc3RhdGUuZGVmYXVsdC5wcmV2aWV3Lm9wZW5lZCxcbiAgICAgIGRpYWxvZzogc3RhdGUuZGVmYXVsdC5kaWFsb2csXG4gICAgICBhZG1pbk1vZGU6IHN0YXRlLmRlZmF1bHQuc2hvcnRjdXQuYWRtaW5cbiAgICB9O1xufSkoQXBwKTtcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGhhc2hIaXN0b3J5IH0gZnJvbSAncmVhY3Qtcm91dGVyJztcbmltcG9ydCBkaXNwYXRjaGVyIGZyb20gJy4uL2Rpc3BhdGNoZXIuanMnO1xuXG4vKiBJTVBPUlQgQUNUSU9OUyAqL1xuaW1wb3J0IHtjbG9zZURpYWxvZywgZGVsZXRlTm90ZSwgZ2V0TGlzdCwgYWRtaW5DaGFuZ2V9IGZyb20gJy4uL2FjdGlvbnMvam5vdGUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEaWFsb2cgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXNbJ2RlbGV0ZU5vdGUnXSA9IGRlbGV0ZU5vdGU7XG4gICAgdGhpc1snZ2V0TGlzdCddID0gZ2V0TGlzdDtcbiAgICB0aGlzWydhZG1pbkNoYW5nZSddID0gYWRtaW5DaGFuZ2U7XG4gIH0gXG5cbiAgaGFuZGxlRGlhbG9nQ2xvc2UoKSB7XG4gICAgZGlzcGF0Y2hlcihjbG9zZURpYWxvZygpKTtcbiAgfVxuXG4gIGFzeW5jIGhhbmRsZURpYWxvZ1N1Y2Nlc3MoKSB7XG5cbiAgICBsZXQgc3VjY2Vzc0FjdGlvbiA9IHRoaXMucHJvcHMuZGlhbG9nLnN1Y2Nlc3NhY3Rpb24uYWN0aW9uO1xuICAgIGxldCBzdWNjZXNzUHVzaCA9IHRoaXMucHJvcHMuZGlhbG9nLnN1Y2Nlc3NhY3Rpb24ucHVzaDtcblxuICAgIGxldCBwYXJhbSA9IFwiXCI7XG5cbiAgICBpZiAoIFsnc2VhcmNoJywnY29uZmlybSddLmluZGV4T2YodGhpcy5wcm9wcy5kaWFsb2cudHlwZSkgPiAtMSApIHtcblxuICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZXNzYWdlIGlucHV0JykpIHtcbiAgICAgICAgcGFyYW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVzc2FnZSBpbnB1dCcpLnZhbHVlO1xuICAgICAgfVxuICAgICAgYXdhaXQgZGlzcGF0Y2hlcih0aGlzW3N1Y2Nlc3NBY3Rpb25dKHBhcmFtKSk7XG4gICAgICBoYXNoSGlzdG9yeS5wdXNoKHN1Y2Nlc3NQdXNoKTtcbiAgICB9XG5cbiAgICBlbHNlIGlmICggdGhpcy5wcm9wcy5kaWFsb2cudHlwZSA9PSAnbG9naW4nICkge1xuXG4gICAgICBwYXJhbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZXNzYWdlIGlucHV0JykudmFsdWU7XG4gICAgICBpZiAoIHBhcmFtLm1hdGNoKC9eZHVmbWEkLykgKSB7XG4gICAgICAgIGRpc3BhdGNoZXIodGhpc1tzdWNjZXNzQWN0aW9uXSh0cnVlKSk7XG4gICAgICB9XG4gICAgfVxuXG5cbiAgICB0aGlzLmhhbmRsZURpYWxvZ0Nsb3NlKCk7XG4gIH1cbiAgaGFuZGxlSW5wdXRBY3Rpb24oZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQua2V5Q29kZSA9PSAyNykge1xuICAgICAgdGhpcy5oYW5kbGVEaWFsb2dDbG9zZSgpO1xuICAgIH1cbiAgICBlbHNlIGlmIChldmVudC5rZXlDb2RlID09IDEzKSB7XG4gICAgICB0aGlzLmhhbmRsZURpYWxvZ1N1Y2Nlc3MoKTtcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lc3NhZ2UgaW5wdXQnKSkge1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lc3NhZ2UgaW5wdXQnKS5mb2N1cygpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYW5jZWwnKS5mb2N1cygpO1xuICAgIH1cbiAgfVxuXG5cbiAgcmVuZGVyKCkge1xuXG5cbiAgICBsZXQgQk9YID0gbnVsbDtcbiAgICBpZiAoIHRoaXMucHJvcHMuZGlhbG9nLnR5cGUgPT0gJ3NlYXJjaCcgKSB7XG4gICAgICBCT1ggPSA8aW5wdXQgdHlwZT1cInRleHRcIiBvbktleURvd249e3RoaXMuaGFuZGxlSW5wdXRBY3Rpb24uYmluZCh0aGlzKX0gaWQ9XCJzZWFyY2hTdHJpbmdcIiAvPjtcbiAgICB9XG4gICAgZWxzZSBpZiAoIHRoaXMucHJvcHMuZGlhbG9nLnR5cGUgPT0gJ2xvZ2luJyApIHtcbiAgICAgIEJPWCA9IDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBvbktleURvd249e3RoaXMuaGFuZGxlSW5wdXRBY3Rpb24uYmluZCh0aGlzKX0gaWQ9XCJzZWFyY2hTdHJpbmdcIiAvPlxuICAgIH1cblxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgaWQ9XCJkaWFsb2dcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaWFsb2ctc2hhZG93XCI+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGlhbG9nLWJveFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVzc2FnZVwiPlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIHt0aGlzLnByb3BzLmRpYWxvZy5tZXNzYWdlfVxuICAgICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAgICB7Qk9YfVxuICAgICAgICAgICAgPC9wPlxuXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b25cIj5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgKCBbJ2NvbmZpcm0nLCdzZWFyY2gnLCdsb2dpbiddLmluZGV4T2YodGhpcy5wcm9wcy5kaWFsb2cudHlwZSkgPiAtMSApXG4gICAgICAgICAgICAgID8gPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLmhhbmRsZURpYWxvZ1N1Y2Nlc3MuYmluZCh0aGlzKX0+T2suPC9idXR0b24+XG4gICAgICAgICAgICAgIDogbnVsbFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2NhbmNlbCcgb25DbGljaz17dGhpcy5oYW5kbGVEaWFsb2dDbG9zZS5iaW5kKHRoaXMpfT5DYW5jZWwuPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IFNjcm9sbCBmcm9tICcuL2p1Yy9TY3JvbGwnO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVtcHR5IGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgc3BsaXRTdHlsZSA9IG51bGw7XG4gICAgaWYgKHRoaXMucHJvcHMucmVhbGxlZnQpIHtcbiAgICAgIHNwbGl0U3R5bGUgPSB7XG4gICAgICAgIGxlZnQ6IFwiY2FsYyhcIit0aGlzLnByb3BzLnJlYWxsZWZ0K1wiJSArIDdweClcIlxuICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2aWV3XCIgc3R5bGU9e3NwbGl0U3R5bGV9PlxuXG4gICAgICAgIDxTY3JvbGw+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibWFya2Rvd24tYm9keVwiXG4gICAgICAgICAgPkVNUFRZPC9kaXY+XG4gICAgICAgIDwvU2Nyb2xsPlxuXG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbiIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudCwgUHJvcFR5cGVzfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7aGFzaEhpc3Rvcnl9IGZyb20gJ3JlYWN0LXJvdXRlcic7XG5pbXBvcnQgZGlzcGF0Y2hlciBmcm9tICcuLi9kaXNwYXRjaGVyLmpzJztcblxuLyogSU1QT1JUIEFDVElPTlMgKi9cbmltcG9ydCB7IHNob3J0Y3V0Q2hhbmdlLCBhZG1pbkNoYW5nZSwgdXBkYXRlRm9ybSwgb3BlbkRpYWxvZywgZWRpdE5vdGUsIHdyaXRlTm90ZSwgdG9nZ2xlUHJldmlldywgZ2V0TGlzdCB9IGZyb20gJy4uL2FjdGlvbnMvam5vdGUnO1xuXG5jbGFzcyBGb290ZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgLy8gU0hPUlRDVVQgRVZFTlRcbiAgICB0aGlzLnRpbWVvdXRTdGF0ZSA9IG51bGw7XG4gICAgdGhpcy5wcmVLZXlDb2RlID0gbnVsbDtcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGV2ZW50KSA9PiB7XG5cbiAgICAgIGxldCBrZXlDaGFyQ29kZSA9IGV2ZW50LmtleUNvZGUgfHwgZXZlbnQuY2hhckNvZGU7XG5cbiAgICAgIGlmIChldmVudC5zaGlmdEtleSA9PSB0cnVlICYmIChrZXlDaGFyQ29kZSA9PSAxODYgfHwga2V5Q2hhckNvZGUgPT0gNTkgfHwga2V5Q2hhckNvZGUgPT0gMTkxKSAmJiBDb2RlTWlycm9yLlZpbS5qd21vZGUgPT0gJ25vcm1hbCcgJiYgWydURVhUQVJFQSddLmluZGV4T2YoZXZlbnQudGFyZ2V0LnRhZ05hbWUpID4gLTEgKSB7XG4gICAgICAgIGV2ZW50LnRhcmdldC5ibHVyKCk7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIGV2ZW50LnRhcmdldC5mb2N1cygpO1xuICAgICAgICB9LDkwMCk7XG4gICAgICB9XG4gICAgICBpZigga2V5Q2hhckNvZGU9PTI3ICYmIFsnSU5QVVQnXS5pbmRleE9mKGV2ZW50LnRhcmdldC50YWdOYW1lKSA+IC0xICkge1xuICAgICAgICBldmVudC50YXJnZXQuYmx1cigpO1xuICAgICAgfVxuXG4gICAgICAgXG4gICAgICAvL2lmICh0aGlzLnByZUtleUNvZGUgPT0gZXZlbnQua2V5Q29kZSAmJiBldmVudC5rZXlDb2RlID09IDE2ICYmIFsnSU5QVVQnLCdURVhUQVJFQSddLmluZGV4T2YoZXZlbnQudGFyZ2V0LnRhZ05hbWUpID09IC0xICkge1xuICAgICAgLy8gIHRoaXMucHJlS2V5Q29kZSA9IG51bGw7XG5cbiAgICAgIC8vICAvLyBBQ1RJT05cbiAgICAgIC8vICBkaXNwYXRjaGVyKG9wZW5EaWFsb2coJ3NlYXJjaCcsJ3NlYXJjaExpc3QnLHtcbiAgICAgIC8vICAgIGFjdGlvbjogJ2dldExpc3QnLFxuICAgICAgLy8gICAgcHVzaDogJy8nXG4gICAgICAvLyAgfSkpO1xuICAgICAgLy99XG4gICAgICAvL2Vsc2Uge1xuICAgICAgLy8gIHRoaXMucHJlS2V5Q29kZSA9IGV2ZW50LmtleUNvZGU7XG4gICAgICAvL31cbiAgICB9KTtcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5hZGRFdmVudExpc3RlbmVyKCdrZXlwcmVzcycsIChldmVudCkgPT4ge1xuXG5cbiAgICAgIGxldCBrZXlDaGFyQ29kZSA9IGV2ZW50LmtleUNvZGUgfHwgZXZlbnQuY2hhckNvZGU7XG5cbiAgICAgIGlmKCBbJ1RFWFRBUkVBJywnSU5QVVQnXS5pbmRleE9mKGV2ZW50LnRhcmdldC50YWdOYW1lKSA+IC0xICkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIH1cblxuICAgICAgbGV0IHNob3J0Y3V0ID0gdGhpcy5wcm9wcy5zaG9ydGN1dEJ1ZmZlcjtcbiAgICAgIGlmICh0aGlzLnByb3BzLnNob3J0Y3V0QnVmZmVyID09IG51bGwpe1xuICAgICAgICBzaG9ydGN1dCA9IFwiXCI7XG4gICAgICB9XG5cbiAgICAgIGxldCBtYXRjaFN0cmluZyA9IFN0cmluZyhzaG9ydGN1dCtTdHJpbmcuZnJvbUNoYXJDb2RlKGtleUNoYXJDb2RlKSk7XG4gICAgICBkaXNwYXRjaGVyKHNob3J0Y3V0Q2hhbmdlKG1hdGNoU3RyaW5nKSk7XG5cbiAgICAgIGxldCBtYXRjaCA9IG51bGw7XG4gICAgICAvKiDtlokg7LC+7JWE6rCA6riwICovXG4gICAgICBpZiAoIG1hdGNoID0gLyhbMC05XSopZ2ckL2cuZXhlYyhtYXRjaFN0cmluZykgKSB7XG4gICAgICAgIGxldCB0YXJnZXQgPSBtYXRjaFsxXTtcbiAgICAgICAgaWYgKCB0YXJnZXQgPT0gJycgKSB0YXJnZXQgPSAwO1xuICAgICAgICB0aGlzLnZpZXdUYXJnZXRUcmlnZ2VyKHRhcmdldCk7XG4gICAgICB9XG4gICAgICAvKiDtlokg7LC+7JWE6rCA6riwMiAqL1xuICAgICAgZWxzZSBpZiAoIGtleUNoYXJDb2RlID09IDEzICYmICAvXjooWzAtOV0rKVxccy9nLmV4ZWMobWF0Y2hTdHJpbmcpICkge1xuICAgICAgICBtYXRjaCA9IC9eOihbMC05XSspXFxzL2cuZXhlYyhtYXRjaFN0cmluZylcbiAgICAgICAgdGhpcy52aWV3VGFyZ2V0VHJpZ2dlcihtYXRjaFsxXSk7XG4gICAgICB9XG4gICAgICAvKiDrpqzsiqTtirjsl5DshJwg6rKA7IOJ7ZWY6riwICovXG4gICAgICBlbHNlIGlmICgga2V5Q2hhckNvZGUgPT0gMTMgJiYgL15bOl0oc3xzZWFyY2h8bGlzdClcXHMvZy5leGVjKG1hdGNoU3RyaW5nKSApIHtcbiAgICAgICAgLy8gQUNUSU9OXG4gICAgICAgIGRpc3BhdGNoZXIob3BlbkRpYWxvZygnc2VhcmNoJywnc2VhcmNoTGlzdCcse1xuICAgICAgICAgIGFjdGlvbjogJ2dldExpc3QnLFxuICAgICAgICAgIHB1c2g6ICcvJ1xuICAgICAgICB9KSk7XG5cbiAgICAgIH1cbiAgICAgIC8qIOyImOygle2VmOq4sCAqL1xuICAgICAgZWxzZSBpZiAoa2V5Q2hhckNvZGUgPT0gMTMgJiYgbWF0Y2hTdHJpbmcubWF0Y2goLzplWyBdPyhbMC05XSopXFxzL2cpICkge1xuICAgICAgICBtYXRjaCA9IC86ZVsgXT8oWzAtOV0qKS9nLmV4ZWMobWF0Y2hTdHJpbmcpO1xuICAgICAgICBsZXQgdGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmxpc3QgbGlbZGF0YS1pZHg9JyR7bWF0Y2hbMV19J11gKTtcblxuICAgICAgICBpZiAobWF0Y2hbMV0gPT0gJycpIHtcbiAgICAgICAgICBkaXNwYXRjaGVyKHVwZGF0ZUZvcm0oJ3N5bmMnKSk7XG4gICAgICAgICAgaGFzaEhpc3RvcnkucHVzaCgnL3dyaXRlLycrdGhpcy5wcm9wcy5wYXJhbXMuaWQpO1xuICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3RleHRhcmVhJykuZm9jdXMoKTtcblxuICAgICAgICAgIC8vIFByZXZpZSDsl7TquLBcbiAgICAgICAgICBpZiAoICF0aGlzLnByb3BzLnByZXZpZXcgKSB7XG4gICAgICAgICAgICBkaXNwYXRjaGVyKHRvZ2dsZVByZXZpZXcoKSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoIXRhcmdldCkge1xuICAgICAgICAgIGRpc3BhdGNoZXIob3BlbkRpYWxvZygnYWxlcnQnLCdOb3QgRm91bmQgSWR4JykpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIHRhcmdldC5jbGljaygpO1xuICAgICAgICAgIGRpc3BhdGNoZXIodXBkYXRlRm9ybSgnc3luYycpKTtcbiAgICAgICAgICBoYXNoSGlzdG9yeS5wdXNoKCcvd3JpdGUvJyt0aGlzLnByb3BzLnBhcmFtcy5pZCk7XG4gICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcigndGV4dGFyZWEnKS5mb2N1cygpO1xuXG4gICAgICAgICAgLy8gUHJldmllIOyXtOq4sFxuICAgICAgICAgIGlmICggIXRoaXMucHJvcHMucHJldmlldyApIHtcbiAgICAgICAgICAgIGRpc3BhdGNoZXIodG9nZ2xlUHJldmlldygpKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLyog6rKA7IOJICovXG4gICAgICBlbHNlIGlmIChrZXlDaGFyQ29kZSA9PSAxMyAmJiBtYXRjaFN0cmluZy5tYXRjaCgvXlxcLyguKilcXHMvZykgKSB7XG4gICAgICAgIG1hdGNoID0gL15cXC8oLiopXFxzL2cuZXhlYyhtYXRjaFN0cmluZyk7XG4gICAgICAgIGRpc3BhdGNoZXIoZ2V0TGlzdChtYXRjaFsxXSkpO1xuICAgICAgfVxuXG4gICAgICAvKiDsupTsiqwgKi9cbiAgICAgIGVsc2UgaWYgKGtleUNoYXJDb2RlID09IDEzICYmIG1hdGNoU3RyaW5nLm1hdGNoKC9eOnFcXHMvZykgKSB7XG4gICAgICAgIC8vIFByZXZpZSDri6vsnYxcbiAgICAgICAgaWYgKCB0aGlzLnByb3BzLnByZXZpZXcgKSB7XG4gICAgICAgICAgZGlzcGF0Y2hlcih0b2dnbGVQcmV2aWV3KCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IG5vdGVJZCA9IHRoaXMucHJvcHMubG9jYXRpb24ucGF0aG5hbWUucmVwbGFjZSgvXFwvKFteXFwvXSopXFwvPygoW1xcd1xcL10qKSk/LyxcIiQyXCIpO1xuICAgICAgICBpZiAobm90ZUlkKSB7XG4gICAgICAgICAgaGFzaEhpc3RvcnkucHVzaCgnL3ZpZXcvJytub3RlSWQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGhhc2hIaXN0b3J5LnB1c2goJy8nKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLyog7KCA7J6l7ZWY6riwIOuCmOqwgOq4sCAqL1xuICAgICAgZWxzZSBpZiAoa2V5Q2hhckNvZGUgPT0gMTMgJiYgbWF0Y2hTdHJpbmcubWF0Y2goL146dyhxPylcXHMvZykgKSB7XG4gICAgICAvL2Vsc2UgaWYgKGtleUNoYXJDb2RlID09IDEzICYmIG1hdGNoID0gL146dyhxPylcXHMvZy5leGVjKG1hdGNoU3RyaW5nKSApIHtcbiAgICAgICAgbWF0Y2ggPSAvXjp3KHE/KVxccy9nLmV4ZWMobWF0Y2hTdHJpbmcpO1xuXG4gICAgICAgIGxldCBub3RlSWQgPSB0aGlzLnByb3BzLmxvY2F0aW9uLnBhdGhuYW1lLnJlcGxhY2UoL1xcLyhbXlxcL10qKVxcLz8oKFtcXHdcXC9dKikpPy8sXCIkMlwiKTtcbiAgICAgICAgaWYgKCd3cml0ZScgPT0gdGhpcy5wcm9wcy5sb2NhdGlvbi5wYXRobmFtZS5yZXBsYWNlKC9cXC8oW15cXC9dKilbXFx3XFwvXSovLFwiJDFcIikpIHtcblxuICAgICAgICAgIGlmICggIXRoaXMucHJvcHMuYWRtaW5Nb2RlICkge1xuICAgICAgICAgICAgZGlzcGF0Y2hlcihvcGVuRGlhbG9nKCdhbGVydCcsJ1lvdSBoYXZlIG5vIGF1dGhvcml0eS4nKSk7XG4gICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgICAvLyDsiJjsoJVcbiAgICAgICAgICAgICAgaWYgKG5vdGVJZCkge1xuICAgICAgICAgICAgICAgIGRpc3BhdGNoZXIoZWRpdE5vdGUobm90ZUlkKSk7XG4gICAgICAgICAgICAgICAgaWYgKG1hdGNoWzFdID09ICdxJykge1xuXG4gICAgICAgICAgICAgICAgICBpZiAoIHRoaXMucHJvcHMucHJldmlldyApIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2hlcih0b2dnbGVQcmV2aWV3KCkpO1xuICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICBoYXNoSGlzdG9yeS5wdXNoKCcvdmlldy8nK25vdGVJZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC8vIOyDneyEsVxuICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBkaXNwYXRjaGVyKHdyaXRlTm90ZSgpKTtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcblxuICAgICAgICAgICAgICAgICAgaWYgKCB0aGlzLnByb3BzLnByZXZpZXcgKSB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoZXIodG9nZ2xlUHJldmlldygpKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIHRoaXMudmlld1RhcmdldFRyaWdnZXIoMCk7XG4gICAgICAgICAgICAgICAgICBpZiAobWF0Y2hbMV0gIT0gJ3EnKSB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoZXIodXBkYXRlRm9ybSgnc3luYycpKTtcblxuICAgICAgICAgICAgICAgICAgICAvL2xldCBub3RlSWQgPSB0aGlzLnByb3BzLmxvY2F0aW9uLnBhdGhuYW1lLnJlcGxhY2UoL1xcLyhbXlxcL10qKVxcLz8oKFtcXHdcXC9dKikpPy8sXCIkMlwiKTtcbiAgICAgICAgICAgICAgICAgICAgaGFzaEhpc3RvcnkucHVzaCgnL3dyaXRlLycrdGhpcy5wcm9wcy5wYXJhbXMuaWQpO1xuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCd0ZXh0YXJlYScpLmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoZXIodG9nZ2xlUHJldmlldygpKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LDEwMDApO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICAvKiDtmZTrqbTrtoTtlaAg6reg65OxICovXG4gICAgICBlbHNlIGlmICggbWF0Y2hTdHJpbmcubWF0Y2goL1x1MDAxNz0vZykgKSB7XG4gICAgICAgIHRoaXMucHJvcHMuY2hhbmdlU2hhZG93TGVmdCg1MCk7XG4gICAgICB9XG4gICAgICBlbHNlIGlmICggbWF0Y2ggPSAvXHUwMDE3KFswLTldKykoWzw+XSkkL2cuZXhlYyhtYXRjaFN0cmluZykgKSB7XG5cbiAgICAgICAgbGV0IGNoYW5nZUxlZnQgPSB0aGlzLnByb3BzLnJlYWxsZWZ0O1xuICAgICAgICBpZiAobWF0Y2hbMl0gPT0gXCI+XCIpIHtcbiAgICAgICAgICBjaGFuZ2VMZWZ0ID0gdGhpcy5wcm9wcy5yZWFsbGVmdCArIHBhcnNlSW50KG1hdGNoWzFdKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChtYXRjaFsyXSA9PSBcIjxcIikge1xuICAgICAgICAgIGNoYW5nZUxlZnQgPSB0aGlzLnByb3BzLnJlYWxsZWZ0IC0gcGFyc2VJbnQobWF0Y2hbMV0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNoYW5nZUxlZnQgPD0gMCkgeyBjaGFuZ2VMZWZ0ID0gMTsgfVxuICAgICAgICBlbHNlIGlmIChjaGFuZ2VMZWZ0ID49IDEwMCkgeyBjaGFuZ2VMZWZ0ID0gOTk7IH1cblxuICAgICAgICB0aGlzLnByb3BzLmNoYW5nZVNoYWRvd0xlZnQoY2hhbmdlTGVmdCk7XG4gICAgICB9XG5cbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXRTdGF0ZSk7XG4gICAgICB0aGlzLnRpbWVvdXRTdGF0ZSA9IHNldFRpbWVvdXQoKCkgPT4ge1xuXG4gICAgICAgIGxldCBtYXRjaCA9IG51bGw7XG4gICAgICAgIGlmICggbWF0Y2ggPSAvXHUwMDE3KFswLTldKykkL2cuZXhlYyhtYXRjaFN0cmluZykgKSB7XG4gICAgICAgICAgdGhpcy5wcm9wcy5jaGFuZ2VTaGFkb3dMZWZ0KHBhcnNlSW50KG1hdGNoWzFdKSk7XG4gICAgICAgIH1cblxuICAgICAgICBkaXNwYXRjaGVyKHNob3J0Y3V0Q2hhbmdlKCcnKSk7XG5cbiAgICAgICAgdGhpcy50aW1lb3V0U3RhdGUgPSBudWxsO1xuICAgICAgfSw5MDApO1xuXG4gICAgfSk7XG4gIH1cblxuICB2aWV3VGFyZ2V0VHJpZ2dlcihpZHgpIHtcbiAgICBsZXQgdGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmxpc3QgbGlbZGF0YS1pZHg9JyR7aWR4fSddYCk7XG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIGRpc3BhdGNoZXIob3BlbkRpYWxvZygnYWxlcnQnLCdOb3QgRm91bmQgSWR4JykpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRhcmdldC5jbGljaygpO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgc2hvcnRjdXQgPSBTdHJpbmcodGhpcy5wcm9wcy5zaG9ydGN1dEJ1ZmZlcikucmVwbGFjZSgvXHUwMDE3L2csJ15XJyk7XG4gICAgbGV0IHByaXZhdGVDaGFyID0gLyguKilcXD8oLiopL2cuZXhlYyhzaG9ydGN1dCk7XG4gICAgaWYgKHByaXZhdGVDaGFyKSB7XG4gICAgICBzaG9ydGN1dCA9IGAke3ByaXZhdGVDaGFyWzFdfT8ke3ByaXZhdGVDaGFyWzJdLnJlcGxhY2UoLy4vZyxcIipcIil9YDtcbiAgICB9XG5cblxuICAgIHJldHVybiAoXG4gICAgICA8Zm9vdGVyPlxuICAgICAgICB7XG4gICAgICAgICAgKCB0aGlzLnByb3BzLnNob3J0Y3V0QnVmZmVyIClcbiAgICAgICAgICA/IDxkaXYgaWQ9XCJjb21tYW5kLWRpc3BsYXlcIiBjbGFzc05hbWU9XCJsZWZ0XCI+e3Nob3J0Y3V0fTwvZGl2PlxuICAgICAgICAgIDogbnVsbFxuICAgICAgICB9XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyaWdodFwiPlxuICAgICAgICAgICZjb3B5OzIwMTYgU1VQRVJMVUNLWSBpbmNcbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Zvb3Rlcj5cbiAgICApO1xuXG4gIH1cbn1cblxuXG4vKipcbiAqICBSRURVWCBTVEFURSDso7zsnoVcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChmdW5jdGlvbiAoc3RhdGUpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc2hvcnRjdXRCdWZmZXI6IHN0YXRlLmRlZmF1bHQuc2hvcnRjdXQuYnVmZmVyXG4gICAgfTtcbn0pKEZvb3Rlcik7XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgaGFzaEhpc3RvcnkgfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xuaW1wb3J0IGRpc3BhdGNoZXIgZnJvbSAnLi4vZGlzcGF0Y2hlci5qcyc7XG4vKiBJTVBPUlQgQUNUSU9OUyAqL1xuaW1wb3J0IHthZG1pbkNoYW5nZSwgd3JpdGVOb3RlLCBlZGl0Tm90ZSwgZGVsZXRlTm90ZSAsdXBkYXRlRm9ybSwgdG9nZ2xlUHJldmlldywgb3BlbkRpYWxvZ30gZnJvbSAnLi4vYWN0aW9ucy9qbm90ZSc7XG5cbmNsYXNzIEhlYWRlciBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5ub3RlSWQgPSBudWxsO1xuICB9XG5cbiAgaGFuZGxlQ2hhbmdlV3JpdGVwYWdlKCkge1xuXG4gICAgZGlzcGF0Y2hlcih1cGRhdGVGb3JtKCd0aXRsZScsJycpKTtcbiAgICBkaXNwYXRjaGVyKHVwZGF0ZUZvcm0oJ25vdGUnLCcnKSk7XG4gICAgaGFzaEhpc3RvcnkucHVzaCgnL3dyaXRlJyk7XG5cbiAgICAvLyBQcmV2aWUg7Je06riwXG4gICAgaWYgKCAhdGhpcy5wcm9wcy5wcmV2aWV3ICkge1xuICAgICAgZGlzcGF0Y2hlcih0b2dnbGVQcmV2aWV3KCkpO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZUVkaXRNZW1vKCkge1xuICAgIGRpc3BhdGNoZXIodXBkYXRlRm9ybSgnc3luYycpKTtcbiAgICBoYXNoSGlzdG9yeS5wdXNoKCcvd3JpdGUvJyt0aGlzLm5vdGVJZCk7XG5cbiAgICAvLyBQcmV2aWUg7Je06riwXG4gICAgaWYgKCAhdGhpcy5wcm9wcy5wcmV2aWV3ICkge1xuICAgICAgZGlzcGF0Y2hlcih0b2dnbGVQcmV2aWV3KCkpO1xuICAgIH1cbiAgfVxuICBoYW5kbGVXcml0ZUNhbmNlbCgpIHtcblxuICAgIC8vIFByZXZpZSDri6vsnYxcbiAgICBpZiAoIHRoaXMucHJvcHMucHJldmlldyApIHtcbiAgICAgIGRpc3BhdGNoZXIodG9nZ2xlUHJldmlldygpKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5ub3RlSWQpIHtcbiAgICAgIGhhc2hIaXN0b3J5LnB1c2goJy92aWV3LycrdGhpcy5ub3RlSWQpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGhhc2hIaXN0b3J5LnB1c2goJy8nKTtcbiAgICB9XG4gIH1cblxuICBhc3luYyBoYW5kbGVXcml0ZU1lbW8oKSB7XG5cbiAgICBpZiAoICF0aGlzLnByb3BzLmFkbWluTW9kZSApIHtcbiAgICAgIGRpc3BhdGNoZXIob3BlbkRpYWxvZygnYWxlcnQnLCdZb3UgaGF2ZSBubyBhdXRob3JpdHkuJykpO1xuICAgICAgcmV0dXJuO1xuICAgIH07XG5cbiAgICAvLyBQcmV2aWUg64ur7J2MXG4gICAgaWYgKCB0aGlzLnByb3BzLnByZXZpZXcgKSB7XG4gICAgICBhd2FpdCBkaXNwYXRjaGVyKHRvZ2dsZVByZXZpZXcoKSk7XG4gICAgfVxuXG4gICAgLy8g7IiY7KCVXG4gICAgaWYgKHRoaXMubm90ZUlkKSB7XG4gICAgICBhd2FpdCBkaXNwYXRjaGVyKGVkaXROb3RlKHRoaXMubm90ZUlkKSk7XG5cbiAgICAgIGhhc2hIaXN0b3J5LnB1c2goJy92aWV3LycrdGhpcy5ub3RlSWQpO1xuICAgIH1cbiAgICAvLyDsg53shLFcbiAgICBlbHNlIHtcbiAgICAgIGRpc3BhdGNoZXIod3JpdGVOb3RlKCkpO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZURlbGV0ZU1lbW8oKSB7XG5cbiAgICBpZiAoICF0aGlzLnByb3BzLmFkbWluTW9kZSApIHtcbiAgICAgIGRpc3BhdGNoZXIob3BlbkRpYWxvZygnYWxlcnQnLCdZb3UgaGF2ZSBubyBhdXRob3JpdHkuJykpO1xuICAgICAgcmV0dXJuO1xuICAgIH07XG5cbiAgICAvLyBQcmV2aWUg64ur7J2MXG4gICAgaWYgKCB0aGlzLnByb3BzLnByZXZpZXcgKSB7XG4gICAgICBkaXNwYXRjaGVyKHRvZ2dsZVByZXZpZXcoKSk7XG4gICAgfVxuXG4gICAgLy8gQUNUSU9OXG4gICAgZGlzcGF0Y2hlcihvcGVuRGlhbG9nKCdjb25maXJtJywgJ1JlYWxseT8nLCB7XG4gICAgICBhY3Rpb246ICdkZWxldGVOb3RlJyxcbiAgICAgIHB1c2g6ICcvJ1xuICAgIH0pKTtcbiAgfVxuXG4gIGhhbmRsZVNob3dQcmV2aWV3KCkge1xuICAgIGRpc3BhdGNoZXIodG9nZ2xlUHJldmlldygpKTtcbiAgfVxuXG4gIGhhbmRsZU9wZW5EYWlsb2coKSB7XG4gICAgZGlzcGF0Y2hlcihvcGVuRGlhbG9nKCdjb25maXJtJywndGVzdCcpKTtcbiAgfVxuXG4gIGhhbmRsZUxvZ2luKCkge1xuICAgIGRpc3BhdGNoZXIob3BlbkRpYWxvZygnbG9naW4nLCdsb2dpbicpKTtcblxuICAgIGRpc3BhdGNoZXIob3BlbkRpYWxvZygnbG9naW4nLCdwYXNzd29yZCcse1xuICAgICAgYWN0aW9uOiAnYWRtaW5DaGFuZ2UnXG4gICAgfSkpO1xuXG4gIH1cbiAgaGFuZGxlTG9nb3V0KCkge1xuICAgIGRpc3BhdGNoZXIoYWRtaW5DaGFuZ2UoZmFsc2UpKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcblxuICAgIGxldCBCVVRUT04gPSBbXTtcbiAgICBsZXQgdGl0bGUgPSBcIlwiO1xuXG4gICAgdGhpcy52aWV3VHlwZSA9IHRoaXMucHJvcHMubG9jYXRpb24ucGF0aG5hbWUucmVwbGFjZSgvXFwvKFteXFwvXSopW1xcd1xcL10qLyxcIiQxXCIpO1xuICAgIHRoaXMubm90ZUlkID0gdGhpcy5wcm9wcy5sb2NhdGlvbi5wYXRobmFtZS5yZXBsYWNlKC9cXC8oW15cXC9dKilcXC8/KChbXFx3XFwvXSopKT8vLFwiJDJcIik7XG5cblxuXG4gICAgc3dpdGNoICggdGhpcy52aWV3VHlwZSApIHtcbiAgICAgIGNhc2UgJ3ZpZXcnOlxuXG4gICAgICAgIHRpdGxlID0gdGhpcy5wcm9wcy52aWV3VGl0bGU7XG5cbiAgICAgICAgQlVUVE9OLnB1c2goXG4gICAgICAgICAgPGJ1dHRvbiBcbiAgICAgICAgICAgIGtleT0nZWRpdCdcbiAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlRWRpdE1lbW8uYmluZCh0aGlzKX0+RURJVFxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICApO1xuXG4gICAgICAgIEJVVFRPTi5wdXNoKFxuICAgICAgICAgIDxidXR0b24gXG4gICAgICAgICAgICBrZXk9J2RlbGV0ZScgXG4gICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZURlbGV0ZU1lbW8uYmluZCh0aGlzKX0+REVMRVRFXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICk7XG4gICAgICBjYXNlICcnOlxuICAgICAgICBCVVRUT04udW5zaGlmdChcbiAgICAgICAgICA8YnV0dG9uIFxuICAgICAgICAgICAga2V5PSd3cml0ZSdcbiAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2hhbmdlV3JpdGVwYWdlLmJpbmQodGhpcyl9PlxuICAgICAgICAgICAgV1JJVEVcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgKTtcblxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3dyaXRlJzpcbiAgICAgICAgdGl0bGUgPSAnd3JpdGUnO1xuXG4gICAgICAgIGxldCBwcmV2aWV3VG9nZ2xlID0gXCJQUkVWSUVXXCI7XG4gICAgICAgIGlmICggdGhpcy5wcm9wcy5wcmV2aWV3ICkge1xuICAgICAgICAgIHByZXZpZXdUb2dnbGUgPSBcIkxJU1RcIjtcbiAgICAgICAgfVxuXG4gICAgICAgIEJVVFRPTi5wdXNoKFxuICAgICAgICAgIDxidXR0b24gXG4gICAgICAgICAgICBrZXk9e3ByZXZpZXdUb2dnbGV9XG4gICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZVNob3dQcmV2aWV3LmJpbmQodGhpcyl9PntwcmV2aWV3VG9nZ2xlfVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICApO1xuXG4gICAgICAgIEJVVFRPTi5wdXNoKFxuICAgICAgICAgIDxidXR0b24gXG4gICAgICAgICAgICBrZXk9J3NlbmQnIFxuICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVXcml0ZU1lbW8uYmluZCh0aGlzKX0+U0FWRVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICApO1xuXG4gICAgICAgIEJVVFRPTi5wdXNoKFxuICAgICAgICAgIDxidXR0b24gXG4gICAgICAgICAgICBrZXk9J2NhbmNlbCcgXG4gICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZVdyaXRlQ2FuY2VsLmJpbmQodGhpcyl9PkNBTkNFTFxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICApO1xuICAgICAgICBicmVhaztcbiAgICB9XG5cblxuICAgIGlmICggIXRoaXMucHJvcHMuYWRtaW5Nb2RlICkge1xuICAgICAgQlVUVE9OLnB1c2goXG4gICAgICAgIDxidXR0b24gXG4gICAgICAgICAga2V5PSdsb2dpbidcbiAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUxvZ2luLmJpbmQodGhpcyl9XG4gICAgICAgID5MT0dJTjwvYnV0dG9uPlxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgQlVUVE9OLnB1c2goXG4gICAgICAgIDxidXR0b24gXG4gICAgICAgICAga2V5PSdsb2dvdXQnIFxuICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlTG9nb3V0LmJpbmQodGhpcyl9XG4gICAgICAgID5MT0dPVVQ8L2J1dHRvbj5cbiAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxoZWFkZXI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGVmdFwiPiBcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLnZpZXdUaXRsZSBcbiAgICAgICAgICAgID8gXCIgLSBcIiArIHRpdGxlICsgXCIgLSBcIlxuICAgICAgICAgICAgOiBcIkpJTlctTUVNT1wiXG4gICAgICAgICAgfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyaWdodFwiPlxuXG4gICAgICAgICAge0JVVFRPTn1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2hlYWRlcj5cbiAgICApO1xuICB9XG59XG4vKipcbiAqICBSRURVWCBTVEFURSDso7zsnoVcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChmdW5jdGlvbiAoc3RhdGUpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdmlld1RpdGxlOiBzdGF0ZS5kZWZhdWx0LnZpZXcudGl0bGVcbiAgICB9O1xufSkoSGVhZGVyKTtcblxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgUHJvcFR5cGVzIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgIGhhc2hIaXN0b3J5IH0gZnJvbSAncmVhY3Qtcm91dGVyJztcblxuaW1wb3J0IExpc3RJdGVtIGZyb20gJy4vTGlzdEl0ZW0nO1xuaW1wb3J0IFNjcm9sbCBmcm9tICcuL2p1Yy9TY3JvbGwnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaXN0IGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICB9XG5cbiAgaGFuZGxlQ2hvaWNrTGlzdChpZCkge1xuICAgIGhhc2hIaXN0b3J5LnB1c2goJy92aWV3LycraWQpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuXG4gICAgbGV0IHNwbGl0U3R5bGUgPSBudWxsO1xuICAgIGlmKHRoaXMucHJvcHMucmVhbGxlZnQpe1xuICAgICAgbGV0IHJlYWxyaWdodCA9IDEwMCAtIHRoaXMucHJvcHMucmVhbGxlZnQ7XG4gICAgICBzcGxpdFN0eWxlID0ge1xuICAgICAgICByaWdodDogYGNhbGMoJHtyZWFscmlnaHR9JSArIDVweClgXG4gICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3RcIiBzdHlsZT17c3BsaXRTdHlsZX0+XG5cdFx0XHRcdDxTY3JvbGxcbiAgICAgICAgICByZWFsbGVmdD17dGhpcy5wcm9wcy5yZWFsbGVmdH1cbiAgICAgICAgPlxuICAgICAgICA8dWw+XG4gICAgICAgICAge1xuICAgICAgICAgIHRoaXMucHJvcHMubGlzdHMubWFwKChpdGVtLGlkeCk9PihcbiAgICAgICAgICAgIDxMaXN0SXRlbSBcbiAgICAgICAgICAgICAga2V5PXtpZHh9IFxuICAgICAgICAgICAgICBpZHg9e2lkeH1cbiAgICAgICAgICAgICAgaWQ9e2l0ZW0uX2lkfVxuICAgICAgICAgICAgICB0aXRsZT17aXRlbS50aXRsZX1cbiAgICAgICAgICAgICAgZmF2b3JpdGU9e2l0ZW0uZmF2b3JpdGV9XG4gICAgICAgICAgICAgIHRhZ3M9e2l0ZW0uY2F0ZWdvcnl9XG4gICAgICAgICAgICAgIGFkbWluTW9kZT17dGhpcy5wcm9wcy5hZG1pbk1vZGV9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICkpXG4gICAgICAgICAgfVxuICAgICAgICA8L3VsPlxuXHRcdFx0XHQ8L1Njcm9sbD5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuIiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50LCBQcm9wVHlwZXN9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7aGFzaEhpc3Rvcnl9IGZyb20gJ3JlYWN0LXJvdXRlcic7XG5pbXBvcnQgZGlzcGF0Y2hlciBmcm9tICcuLi9kaXNwYXRjaGVyLmpzJztcbmltcG9ydCBUYWdJdGVtIGZyb20gJy4vVGFnSXRlbSc7XG5cbi8qIElNUE9SVCBBQ1RJT05TICovXG5pbXBvcnQge3RvZ2dsZUZhdm9yaXRlLCBvcGVuRGlhbG9nfSBmcm9tICcuLi9hY3Rpb25zL2pub3RlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGlzdEl0ZW0gZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gIH1cblxuICBoYW5kbGVDaG9pY2tMaXN0KGlkKSB7XG4gICAgaGFzaEhpc3RvcnkucHVzaCgnL3ZpZXcvJytpZCk7XG4gIH1cblxuICBoYW5kbGVDaGFuZ2VGYXYoaWQsIGlkeCxlKSB7XG4gICAgaWYgKHRoaXMucHJvcHMuYWRtaW5Nb2RlKSB7XG4gICAgICBkaXNwYXRjaGVyKHRvZ2dsZUZhdm9yaXRlKGlkLCBpZHgpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGlzcGF0Y2hlcihvcGVuRGlhbG9nKCdhbGVydCcsJ09ubHkgYWRtaW4gbW9kZS4nKSk7XG4gICAgfVxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIH1cblxuICByZW5kZXIoKSB7XG5cblxuICAgIGxldCB0YWdzID0gW107XG5cbiAgICBpZiAodGhpcy5wcm9wcy50YWdzKSB7XG4gICAgICB0YWdzID0gdGhpcy5wcm9wcy50YWdzLnJlZHVjZShmdW5jdGlvbihwcmV2QXJyYXksIHRhZykge1xuICAgICAgICBsZXQgbmV4dEFycmF5ID0gcHJldkFycmF5O1xuICAgICAgICBpZiAodGFnKSB7XG4gICAgICAgICAgbmV4dEFycmF5LnB1c2godGFnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV4dEFycmF5O1xuICAgICAgfSxbXSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGxpXG4gICAgICAgICAgZGF0YS1pZHg9e3RoaXMucHJvcHMuaWR4fVxuICAgICAgICAgIGNsYXNzTmFtZT17KHRoaXMucHJvcHMuZmF2b3JpdGUpPydmYXYnOicnfVxuICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2hvaWNrTGlzdC5iaW5kKHRoaXMsdGhpcy5wcm9wcy5pZCl9IFxuICAgICAgICA+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgIHRhZ3MubWFwKChpdGVtLGlkeCk9PihcbiAgICAgICAgICAgICAgPFRhZ0l0ZW0gXG4gICAgICAgICAgICAgICAgIGtleT17aWR4fVxuICAgICAgICAgICAgICAgICB0YWc9e2l0ZW19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIj5cbiAgICAgICAgICAgIHt0aGlzLnByb3BzLmlkeH0uIHt0aGlzLnByb3BzLnRpdGxlfVxuICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVDaGFuZ2VGYXYuYmluZCh0aGlzLHRoaXMucHJvcHMuaWQsdGhpcy5wcm9wcy5pZHgpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9saT5cbiAgICApO1xuXG4gIH1cbn1cblxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgUHJvcFR5cGVzIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgIGhhc2hIaXN0b3J5IH0gZnJvbSAncmVhY3Qtcm91dGVyJ1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhZ0l0ZW0gZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gIH1cblxuXG4gIGhhbmRsZUNob2lja0xpc3QoaWQpIHtcbiAgICBoYXNoSGlzdG9yeS5wdXNoKCcvdmlldy8nK2lkKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRhZ1wiPlxuICAgICAgICAgIHt0aGlzLnByb3BzLnRhZy50b1VwcGVyQ2FzZSgpfVxuICAgICAgICA8L3NwYW4+XG4gICAgKTtcblxuICB9XG59XG5cbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IFNjcm9sbCBmcm9tICcuL2p1Yy9TY3JvbGwnO1xuaW1wb3J0IFZpZXdOb3RlIGZyb20gJy4vVmlld05vdGUnO1xuXG4vKiBJTVBPUlQgQUNUSU9OUyAqL1xuaW1wb3J0IHtnZXRPbmUsIHNjcm9sbENoYW5nZX0gZnJvbSAnLi4vYWN0aW9ucy9qbm90ZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZpZXcgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gIH0gXG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gIH1cblxuXG4gIHJlbmRlcigpIHtcblxuICAgIGxldCBzcGxpdFN0eWxlID0gbnVsbDtcbiAgICBsZXQgY2xhc3NuYW1lID0gJyc7XG4gICAgbGV0IHNjcm9sbCA9IDA7XG5cbiAgICBpZiAoIHRoaXMucHJvcHMudmlld1R5cGUgPT0gJ3ByZXZpZXcnICkge1xuXG5cbiAgICAgIGlmKHRoaXMucHJvcHMucmVhbGxlZnQpe1xuICAgICAgICBsZXQgcmVhbHJpZ2h0ID0gMTAwIC0gdGhpcy5wcm9wcy5yZWFsbGVmdDtcbiAgICAgICAgc3BsaXRTdHlsZSA9IHtcbiAgICAgICAgICByaWdodDogYGNhbGMoJHtyZWFscmlnaHR9JSArIDVweClgXG4gICAgICAgIH07XG5cbiAgICAgICAgY2xhc3NuYW1lID0gJ3ByZXZpZXcnO1xuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcblxuICAgICAgaWYgKHRoaXMucHJvcHMucmVhbGxlZnQpIHtcbiAgICAgICAgc3BsaXRTdHlsZSA9IHtcbiAgICAgICAgICBsZWZ0OiBcImNhbGMoXCIrdGhpcy5wcm9wcy5yZWFsbGVmdCtcIiUgKyA3cHgpXCJcbiAgICAgICAgfTtcblxuICAgICAgICBjbGFzc25hbWUgPSAndmlldyc7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgXG4gICAgICAgIHN0eWxlPXtzcGxpdFN0eWxlfVxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZX0gPlxuICAgICAgICA8U2Nyb2xsXG4gICAgICAgICAgdmlld1R5cGU9e3RoaXMucHJvcHMudmlld1R5cGV9XG4gICAgICAgICAgcmVhbGxlZnQ9e3RoaXMucHJvcHMucmVhbGxlZnR9XG4gICAgICAgID5cbiAgICAgICAgICA8Vmlld05vdGUgey4uLnRoaXMucHJvcHN9IC8+XG4gICAgICAgIDwvU2Nyb2xsPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBkaXNwYXRjaGVyIGZyb20gJy4uL2Rpc3BhdGNoZXIuanMnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBtYXJrZWQgZnJvbSAnbWFya2VkJztcblxuXG4vKiBJTVBPUlQgQUNUSU9OUyAqL1xuaW1wb3J0IHtnZXRPbmV9IGZyb20gJy4uL2FjdGlvbnMvam5vdGUnO1xuXG5jbGFzcyBWaWV3Tm90ZSBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gIH0gXG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgaWYgKHRoaXMucHJvcHMucm91dGVQYXJhbXMgJiYgdGhpcy5wcm9wcy5yb3V0ZVBhcmFtcy5pZCkge1xuICAgICAgZGlzcGF0Y2hlcihnZXRPbmUodGhpcy5wcm9wcy5yb3V0ZVBhcmFtcy5pZCkpO1xuICAgIH1cbiAgfVxuXG5cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0cHJvcHMpIHtcbiAgICBpZiAobmV4dHByb3BzLnJvdXRlUGFyYW1zICYmIChuZXh0cHJvcHMucm91dGVQYXJhbXMuaWQgIT0gdGhpcy5wcm9wcy5wYXJhbXMuaWQpKSB7XG5cbiAgICAgIGRpc3BhdGNoZXIoZ2V0T25lKG5leHRwcm9wcy5yb3V0ZVBhcmFtcy5pZCkpO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBtYXJrZWQuc2V0T3B0aW9ucyh7XG4gICAgICByZW5kZXJlcjogbmV3IG1hcmtlZC5SZW5kZXJlcigpLFxuICAgICAgZ2ZtOiB0cnVlLFxuICAgICAgdGFibGVzOiB0cnVlLFxuICAgICAgYnJlYWtzOiBmYWxzZSxcbiAgICAgIHBlZGFudGljOiBmYWxzZSxcbiAgICAgIHNhbml0aXplOiB0cnVlLFxuICAgICAgc21hcnRMaXN0czogdHJ1ZSxcbiAgICAgIHNtYXJ0eXBhbnRzOiBmYWxzZVxuICAgIH0pO1xuXG4gICAgbGV0IG5vdGUgPSBcIlwiO1xuICAgIGxldCBjbGFzc25hbWUgPSAnJztcbiAgICBsZXQgc3BsaXRTdHlsZSA9IG51bGw7XG4gICAgbGV0IHNjcm9sbCA9IDA7XG5cbiAgICBpZiAoIHRoaXMucHJvcHMudmlld1R5cGUgPT0gJ3ByZXZpZXcnICkge1xuICAgICAgbm90ZSA9IG1hcmtlZCh0aGlzLnByb3BzLnByZXZpZXdOb3RlLnRvU3RyaW5nKCksIHtzYW5pdGl6ZTogZmFsc2V9KTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBub3RlID0gbWFya2VkKHRoaXMucHJvcHMubm90ZS50b1N0cmluZygpLCB7c2FuaXRpemU6IGZhbHNlfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPVwibWFya2Rvd24tYm9keVwiXG4gICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOiBub3RlfX1cbiAgICAgIC8+XG5cbiAgICApO1xuICB9XG59XG5cbi8qKlxuICogIFJFRFVYIFNUQVRFIOyjvOyehVxuICovXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KGZ1bmN0aW9uIChzdGF0ZSkge1xuICAgIHJldHVybiB7XG4gICAgICBub3RlOiBzdGF0ZS5kZWZhdWx0LnZpZXcubm90ZSxcbiAgICAgIHByZXZpZXdOb3RlOiBzdGF0ZS5kZWZhdWx0LndyaXRlLm5vdGVcbiAgICB9O1xufSkoVmlld05vdGUpO1xuIiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50LCBQcm9wVHlwZXN9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IGRpc3BhdGNoZXIgZnJvbSAnLi4vZGlzcGF0Y2hlci5qcyc7XG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7aGFzaEhpc3Rvcnl9IGZyb20gJ3JlYWN0LXJvdXRlcic7XG5cbi8qIElNUE9SVCBBQ1RJT05TICovXG5pbXBvcnQge3VwZGF0ZUZvcm0sIGdldE9uZSwgc2Nyb2xsQ2hhbmdlLCB0b2dnbGVQcmV2aWV3LCBlZGl0Tm90ZSwgd3JpdGVOb3RlfSBmcm9tICcuLi9hY3Rpb25zL2pub3RlJztcblxuXG5jbGFzcyBXcml0ZSBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zY3JvbGxQZXJjZW50ID0gMDtcbiAgICB0aGlzLmVkaXRvciA9IG51bGw7XG4gIH1cblxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRwcm9wcykge1xuICAgIGlmICghdGhpcy5wcm9wcy53cml0ZU5vdGUpIHtcbiAgICAgIHRoaXMuZWRpdG9yLnNldFZhbHVlKG5leHRwcm9wcy53cml0ZU5vdGUpO1xuICAgIH1cblxuICAgIGlmIChuZXh0cHJvcHMud3JpdGVTY3JvbGwgIT0gdGhpcy5wcm9wcy53cml0ZVNjcm9sbCkge1xuICAgICAgbGV0ICR0aGlzID0gUmVhY3RET00uZmluZERPTU5vZGUodGhpcy5yZWZzLnRleHRhcmVhKTtcbiAgICAgIGxldCByZXN1bHQgPSAoKCR0aGlzLnNjcm9sbEhlaWdodCAtICR0aGlzLmNsaWVudEhlaWdodCkgKiBuZXh0cHJvcHMud3JpdGVTY3JvbGwpIC8gMTAwO1xuICAgICAgJHRoaXMuc2Nyb2xsVG9wID0gcmVzdWx0O1xuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZSAobmV4dHByb3BzKSB7XG4gIH1cblxuICBjaGFuZ2VUaXRsZShldmVudCkge1xuICAgIGRpc3BhdGNoZXIodXBkYXRlRm9ybSgndGl0bGUnLCBldmVudC50YXJnZXQudmFsdWUpKTtcbiAgfVxuXG4gIGNoYW5nZU5vdGUoKSB7XG4gICAgbGV0IHRhcmdldCA9IFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMucmVmcy50ZXh0YXJlYSk7XG4gICAgbGV0IGxhc3RGYWxnID0gZmFsc2U7XG4gICAgaWYgKHRoaXMucHJvcHMud3JpdGVOb3RlLnNsaWNlKC0yKSAhPSB0YXJnZXQudmFsdWUuc2xpY2UoLTIpKSB7XG4gICAgICBsYXN0RmFsZyA9IHRydWU7XG4gICAgfVxuXG4gICAgZGlzcGF0Y2hlcih1cGRhdGVGb3JtKCdub3RlJywgdGFyZ2V0LnZhbHVlKSk7XG5cbiAgICBpZiAobGFzdEZhbGcpIHtcbiAgICAgIGRpc3BhdGNoZXIoc2Nyb2xsQ2hhbmdlKDEwMCkpO1xuICAgIH1cblxuICB9XG4gIGNoYW5nZVNjcm9sbChldmVudFRhcmdldCkge1xuICAgIGxldCBwZXJjZW50ID0gIChldmVudFRhcmdldC5zY3JvbGxUb3AgLyAoZXZlbnRUYXJnZXQuc2Nyb2xsSGVpZ2h0IC0gZXZlbnRUYXJnZXQuY2xpZW50SGVpZ2h0KSkgKiAxMDA7XG4gICAgcGVyY2VudCA9IE1hdGgucm91bmQocGVyY2VudCk7XG4gICAgdGhpcy5zY3JvbGxQZXJjZW50ID0gcGVyY2VudDtcbiAgICBkaXNwYXRjaGVyKHNjcm9sbENoYW5nZShwZXJjZW50KSk7XG4gIH1cblxuICBjaGFuZ2VUYWcoZXZlbnQpIHtcblxuICAgIGxldCB0YWdzU3RyaW5nID0gZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL1teYS16MC05LDs6XSovZyxcIlwiKVxuICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9bLDs6XS9nLFwiLFwiKVxuICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC8sKy9nLFwiLFwiKVxuICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9eLC9nLFwiXCIpO1xuXG4gICAgbGV0IHRhZ3MgPSB0YWdzU3RyaW5nLnNwbGl0KFwiLFwiKTtcbiAgICBpZiAodGFnc1N0cmluZy5tYXRjaCgvLCQvKSApIHtcbiAgICAgIGxldCBuZXdUYWcgPSBbXTtcbiAgICAgIHRhZ3MuZm9yRWFjaCgodGFnKT0+e1xuICAgICAgICBpZiAoIG5ld1RhZy5pbmRleE9mKHRhZykgPT0gLTEgKSB7XG4gICAgICAgICAgbmV3VGFnLnB1c2godGFnKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICB0YWdzID0gbmV3VGFnO1xuICAgIH1cblxuICAgIGRpc3BhdGNoZXIodXBkYXRlRm9ybSgndGFncycsdGFncykpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgaWYgKHRoaXMucHJvcHMucm91dGVQYXJhbXMuaWQpIHtcbiAgICAgIGRpc3BhdGNoZXIoZ2V0T25lKHRoaXMucHJvcHMucm91dGVQYXJhbXMuaWQpKTtcbiAgICAgIGRpc3BhdGNoZXIodXBkYXRlRm9ybSgnc3luYycpKTtcbiAgICB9XG5cbiAgICBsZXQgdGFyZ2V0ID0gUmVhY3RET00uZmluZERPTU5vZGUodGhpcy5yZWZzLnRleHRhcmVhKTtcblxuICAgIENvZGVNaXJyb3IuVmltLmp3bW9kZSA9ICdub3JtYWwnO1xuICAgIHRoaXMuZWRpdG9yID0gQ29kZU1pcnJvci5mcm9tVGV4dEFyZWEodGFyZ2V0LCB7XG4gICAgICBsaW5lTnVtYmVyczogdHJ1ZSxcbiAgICAgIGtleU1hcDogXCJ2aW1cIixcbiAgICAgIGxpbmVXcmFwcGluZzogdHJ1ZVxuICAgIH0pO1xuXG4gICAgQ29kZU1pcnJvci5vbih0aGlzLmVkaXRvciwgJ3ZpbS1jb21tYW5kLWRvbmUnLCBpbmZvID0+IHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLmVkaXRvci5zYXZlKCk7XG4gICAgICAgIHRoaXMuY2hhbmdlTm90ZSgpO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBDb2RlTWlycm9yLm9uKHRoaXMuZWRpdG9yLCAndmltLW1vZGUtY2hhbmdlJywgZnVuY3Rpb24oaW5mbykge1xuICAgICAgQ29kZU1pcnJvci5WaW0uandtb2RlID0gaW5mby5tb2RlO1xuICAgIH0pO1xuXG4gICAgQ29kZU1pcnJvci5vbih0aGlzLmVkaXRvciwgJ3Njcm9sbCcsIGluZm8gPT4ge1xuICAgICAgdGhpcy5jaGFuZ2VTY3JvbGwoaW5mby5kaXNwbGF5LnNjcm9sbGJhcnMudmVydCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmVkaXRvci5kaXNwbGF5LmxpbmVEaXYuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2VudGVyJywgdGhpcy5kcmFnRW50ZXIuYmluZCh0aGlzKSk7XG4gICAgdGhpcy5lZGl0b3IuZGlzcGxheS5saW5lRGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdvdmVyJywgdGhpcy5kcmFnRW50ZXIuYmluZCh0aGlzKSk7XG4gICAgdGhpcy5lZGl0b3IuZGlzcGxheS5saW5lRGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCB0aGlzLm9uRHJvcC5iaW5kKHRoaXMpKTtcbiAgICB0aGlzLmVkaXRvci5mb2N1cygpO1xuICB9XG5cbiAgZHJhZ0VudGVyKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTsgICAgICAgICAgICAgICAgICAgIFxuICB9XG4gIG9uRHJvcChldmVudCkge1xuICAgIGxldCBzZWxmID0gdGhpcztcbiAgICBsZXQgdmFsdWVfdGFyZ2V0ID0gdGhpcy5yZWZzLnRleHRhcmVhO1xuICAgIGxldCBmaWxlID0gZXZlbnQuZGF0YVRyYW5zZmVyLmZpbGVzWzBdOyAgICAgIFxuICAgIGxldCBmb3JtZGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgIGxldCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcblxuICAgIGZvcm1kYXRhLmFwcGVuZChcInBpY3RcIiwgZmlsZSk7XG5cbiAgICB4aHIub3BlbihcIlBPU1RcIiwgXCIvam5vdGUvdXBsb2FkXCIpOyAgXG4gICAgeGhyLnNlbmQoZm9ybWRhdGEpO1xuICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbigpeyAgICBcbiAgICAgIGlmKHhoci5yZWFkeVN0YXRlID09IDQpeyAgICAgIFxuICAgICAgICAgaWYoeGhyLnN0YXR1cyA+PSAyMDAgJiYgeGhyLnN0YXR1cyA8IDMwMCl7XG4gICAgICAgICAgIHZhciByZXN1bHQgPSBKU09OLnBhcnNlKHhoci5yZXNwb25zZVRleHQpO1xuICAgICAgICAgICB2YXIgaW1nID0gXCJcXG4hW10oXCIrU3RyaW5nKHJlc3VsdC5maWxlcGF0aCkrXCIpXFxuXCI7XG4gICAgICAgICAgIHZhbHVlX3RhcmdldC52YWx1ZSA9IHZhbHVlX3RhcmdldC52YWx1ZSArIGltZztcblxuICAgICAgICAgICBzZWxmLmVkaXRvci5zZXRWYWx1ZSh2YWx1ZV90YXJnZXQudmFsdWUpO1xuICAgICAgICAgICBzZWxmLmVkaXRvci5zYXZlKCk7XG4gICAgICAgICAgIHNlbGYuY2hhbmdlTm90ZSgpO1xuICAgICAgICAgfVxuICAgICAgfSBcbiAgICB9O1xuXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTsgXG4gIH1cblxuICByZW5kZXIoKSB7XG5cbiAgICAvLyBUQUcg7IS47YyFXG4gICAgbGV0IHdyaXRlVGFncyA9IHRoaXMucHJvcHMud3JpdGVUYWdzLmpvaW4oXCIsIFwiKS5yZXBsYWNlKC9bIF0qJC8sXCJcIik7XG5cbiAgICBsZXQgc3BsaXRTdHlsZSA9IG51bGw7XG4gICAgaWYgKHRoaXMucHJvcHMucmVhbGxlZnQpIHtcbiAgICAgIHNwbGl0U3R5bGUgPSB7XG4gICAgICAgIGxlZnQ6IFwiY2FsYyhcIit0aGlzLnByb3BzLnJlYWxsZWZ0K1wiJSArIDdweClcIlxuICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cml0ZVwiIHN0eWxlPXtzcGxpdFN0eWxlfT5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJUaXRsZVwiIFxuICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmNoYW5nZVRpdGxlLmJpbmQodGhpcyl9IFxuICAgICAgICAgIHZhbHVlPXt0aGlzLnByb3BzLndyaXRlVGl0bGV9XG4gICAgICAgIC8+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIFxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVGFnXCJcbiAgICAgICAgICBvbkNoYW5nZT17dGhpcy5jaGFuZ2VUYWcuYmluZCh0aGlzKX1cbiAgICAgICAgICB2YWx1ZT17d3JpdGVUYWdzfVxuICAgICAgICAvPlxuICAgICAgICA8dGV4dGFyZWEgXG4gICAgICAgICAgcmVmPVwidGV4dGFyZWFcIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTWVtb1wiIFxuICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmNoYW5nZU5vdGUuYmluZCh0aGlzKX0gXG4gICAgICAgICAgdmFsdWU9e3RoaXMucHJvcHMud3JpdGVOb3RlfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG4vKipcbiAqICBSRURVWCBTVEFURSDso7zsnoVcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChmdW5jdGlvbiAoc3RhdGUpIHtcbiAgcmV0dXJuIHtcbiAgICB3cml0ZVRpdGxlOiBzdGF0ZS5kZWZhdWx0LndyaXRlLnRpdGxlLFxuICAgIHdyaXRlTm90ZTogc3RhdGUuZGVmYXVsdC53cml0ZS5ub3RlLFxuICAgIHdyaXRlVGFnczogc3RhdGUuZGVmYXVsdC53cml0ZS50YWdzLFxuICAgIHdyaXRlU2Nyb2xsOiBzdGF0ZS5kZWZhdWx0LndyaXRlLnNjcm9sbFxuICB9O1xufSkoV3JpdGUpO1xuIiwiaW1wb3J0ICBSZWFjdCx7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgVXRpbCBmcm9tICcuLi9saWIvVXRpbCc7XG5cbmNsYXNzIFNjcm9sbCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5zY3JvbGxXcmFwID0gbnVsbDtcbiAgICB0aGlzLnNjcm9sbElubmVyID0gbnVsbDtcbiAgICB0aGlzLnBzID0gbnVsbDtcbiAgICB0aGlzLnNjID0gbnVsbDtcbiAgICB0aGlzLnJhdGluZyA9IDA7XG4gICAgdGhpcy5vcCA9ICh0aGlzLnByb3BzLm9wdGlvbik/dGhpcy5wcm9wcy5vcHRpb246e307XG5cbiAgICB0aGlzLnNjcm9sbERyYWdTdGFuZGFyZCA9IFtdO1xuICAgIHRoaXMuZHJhZyA9IGZhbHNlO1xuICAgIHRoaXMuc2Nyb2xsVGltZSA9IG51bGw7XG4gICAgdGhpcy51dGlsID0gbmV3IFV0aWwoKTtcblxuICAgIHRoaXMuaXNXZWJraXQgPSAnV2Via2l0QXBwZWFyYW5jZScgaW4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG5cbiAgICB0aGlzLnNjcm9sbFdyYXAgPSBSZWFjdERPTS5maW5kRE9NTm9kZSh0aGlzKTtcbiAgICB0aGlzLnNjcm9sbElubmVyID0gdGhpcy5zY3JvbGxXcmFwLnF1ZXJ5U2VsZWN0b3IoJy5qd3Njcm9sbC1pbm5lcicpO1xuXG4gICAgaWYgKHRoaXMuaXNXZWJraXQgIT09IHRydWUpIHtcbiAgICAgIHRoaXMuaGlkZGVuU2Nyb2xsKCk7XG4gICAgfVxuICAgIHRoaXMuYWRkU2Nyb2xsKCk7XG4gICAgdGhpcy5tYWtlU2Nyb2xsUG9zaXRpb24oKTtcbiAgICB0aGlzLnNldFNjcm9sbFRvcCgpO1xuICAgIHRoaXMuaW5pdEV2ZW50KCk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRwcm9wcykge1xuICAgIGlmIChuZXh0cHJvcHMucmVhbGxlZnQgIT0gdGhpcy5wcm9wcy5yZWFsbGVmdCAmJiB0aGlzLmlzV2Via2l0ICE9PSB0cnVlKSB7XG4gICAgICB2YXIgandzY3JvbGxXcmFwID0gdGhpcy5zY3JvbGxXcmFwO1xuICAgICAgdmFyIGp3c2Nyb2xsID0gdGhpcy5zY3JvbGxJbm5lcjtcbiAgICAgIGp3c2Nyb2xsLnJlbW92ZUF0dHJpYnV0ZShcInN0eWxlXCIpO1xuICAgICAgandzY3JvbGxXcmFwLnJlbW92ZUF0dHJpYnV0ZShcInN0eWxlXCIpO1xuICAgICAgdGhpcy5oaWRkZW5TY3JvbGwoKTtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMucHJvcHMudmlld1R5cGUgfHwgdGhpcy5wcm9wcy52aWV3VHlwZSE9J3ByZXZpZXcnICkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChuZXh0cHJvcHMucHJldmlld1Njcm9sbCAhPSB0aGlzLnByb3BzLnByZXZpZXdTY3JvbGwgfHwgbmV4dHByb3BzLnByZXZpZXdTY3JvbGw9PTEwMCApIHtcbiAgICAgIGxldCAkdGhpcyA9IFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMpLnF1ZXJ5U2VsZWN0b3IoJy5qd3Njcm9sbC1pbm5lcicpO1xuICAgICAgbGV0IHJlc3VsdCA9ICgoJHRoaXMuc2Nyb2xsSGVpZ2h0IC0gJHRoaXMuY2xpZW50SGVpZ2h0KSAqIG5leHRwcm9wcy5wcmV2aWV3U2Nyb2xsKSAvIDEwMDtcbiAgICAgICR0aGlzLnNjcm9sbFRvcCA9IE51bWJlcihyZXN1bHQpO1xuICAgIH1cbiAgfVxuXG5cbiAgaGlkZGVuU2Nyb2xsKCkge1xuICAgIHZhciBqd3Njcm9sbFdyYXAgPSB0aGlzLnNjcm9sbFdyYXA7XG4gICAgdmFyIGp3c2Nyb2xsID0gdGhpcy5zY3JvbGxJbm5lcjtcblxuICAgIHZhciBzY3JvbGxXaWR0aCA9IGp3c2Nyb2xsLm9mZnNldFdpZHRoIC0gandzY3JvbGwuY2xpZW50V2lkdGg7XG4gICAgdmFyIGlubmVyV2lkdGggPSAoandzY3JvbGxXcmFwLm9mZnNldFdpZHRoK3Njcm9sbFdpZHRoKTtcbiAgICBqd3Njcm9sbC5zdHlsZS53aWR0aCA9IGlubmVyV2lkdGgrXCJweFwiO1xuICAgIGp3c2Nyb2xsV3JhcC5zdHlsZS53aWR0aCA9IChpbm5lcldpZHRoLXNjcm9sbFdpZHRoKStcInB4XCI7XG4gIH1cblxuICBhZGRTY3JvbGwoKSB7XG4gICAgdmFyIGp3c2Nyb2xsV3JhcCA9IHRoaXMuc2Nyb2xsV3JhcDtcbiAgICB0aGlzLnNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0aGlzLnBzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0aGlzLnBzLmNsYXNzTmFtZSA9IFwicHNcIjtcbiAgICB0aGlzLnNjLmNsYXNzTmFtZSA9IFwic2NcIjtcblxuICAgIHRoaXMuc2MuYXBwZW5kQ2hpbGQodGhpcy5wcyk7XG4gICAgandzY3JvbGxXcmFwLmFwcGVuZENoaWxkKHRoaXMuc2MpO1xuICB9XG5cblxuICBtYWtlU2Nyb2xsUG9zaXRpb24oKSB7XG4gICAgdmFyIGp3c2Nyb2xsID0gUmVhY3RET00uZmluZERPTU5vZGUodGhpcy5zY3JvbGxJbm5lcik7XG4gICAgdmFyIHBzID0gdGhpcy5wcztcbiAgICB2YXIgc2Nyb2xsSGVpZ2h0ID0gandzY3JvbGwuc2Nyb2xsSGVpZ2h0O1xuICAgIHZhciBjbGllbnRIZWlnaHQgPSBqd3Njcm9sbC5jbGllbnRIZWlnaHQ7XG4gICAgdmFyIHBvc0hlaWdodCA9IHBhcnNlSW50KGNsaWVudEhlaWdodCAqIChjbGllbnRIZWlnaHQvc2Nyb2xsSGVpZ2h0KSk7XG4gICAgcHMuc3R5bGUuaGVpZ2h0ID0gcG9zSGVpZ2h0K1wicHhcIjtcbiAgICBpZiAodGhpcy5vcC5zY3JvbGxTaG93QWx3YXlzID09PSB0cnVlKSBwcy5zdHlsZS5vcGFjaXR5ID0gMTtcbiAgfVxuXG4gIHNldFNjcm9sbFRvcCgpIHtcbiAgICB2YXIgandzY3JvbGwgPSB0aGlzLnNjcm9sbElubmVyO1xuICAgIHZhciBwcyA9IHRoaXMucHM7XG4gICAgdmFyIHNjcm9sbEhlaWdodCA9IGp3c2Nyb2xsLnNjcm9sbEhlaWdodDtcbiAgICB2YXIgY2xpZW50SGVpZ2h0ID0gandzY3JvbGwuY2xpZW50SGVpZ2h0O1xuICAgIHRoaXMucmF0aW5nID0gY2xpZW50SGVpZ2h0L3Njcm9sbEhlaWdodDtcbiAgICB2YXIgc2Nyb2xsVG9wID0gandzY3JvbGwuc2Nyb2xsVG9wICogdGhpcy5yYXRpbmc7XG4gICAgcHMuc3R5bGUudG9wID0gc2Nyb2xsVG9wK1wicHhcIjtcbiAgfVxuXG4gIHNjcm9sbFNoeSgpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgdmFyIHBzID0gdGhpcy5wcztcbiAgICBzZWxmLnV0aWwuYWRkQ2xhc3MocHMsICdzaG93Jyk7XG4gICAgY2xlYXJUaW1lb3V0KHRoaXMuc2Nyb2xsVGltZSk7XG4gICAgc2VsZi5zY3JvbGxUaW1lID0gc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgIHNlbGYudXRpbC5yZW1vdmVDbGFzcyhwcywgJ3Nob3cnKTtcbiAgICB9LDEwMDApO1xuICB9XG5cbiAgaW5pdEV2ZW50KCkge1xuXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgZnVuY3Rpb24oZXZ0KSB7XG4gICAgICBpZiAoc2VsZi5kcmFnKSB7XG4gICAgICAgIHZhciBjaGFuZ2VQeCA9IGV2dC5zY3JlZW5ZIC0gc2VsZi5zY3JvbGxEcmFnU3RhbmRhcmRbMF07XG4gICAgICAgIHZhciBjaGFuZ2VUb3AgPSBjaGFuZ2VQeCAvIHNlbGYucmF0aW5nO1xuICAgICAgICB2YXIgc2Nyb2xsVG9wID0gc2VsZi5zY3JvbGxEcmFnU3RhbmRhcmRbMV0gKyBjaGFuZ2VUb3A7XG4gICAgICAgIHNlbGYuc2Nyb2xsSW5uZXIuc2Nyb2xsVG9wID0gc2Nyb2xsVG9wO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHNlbGYucHMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgZnVuY3Rpb24oZXZ0KSB7XG4gICAgICBzZWxmLnNjcm9sbERyYWdTdGFuZGFyZFswXSA9IGV2dC5zY3JlZW5ZO1xuICAgICAgc2VsZi5zY3JvbGxEcmFnU3RhbmRhcmRbMV0gPSBzZWxmLnNjcm9sbElubmVyLnNjcm9sbFRvcDtcbiAgICAgIHNlbGYuZHJhZyA9IHRydWU7XG4gICAgfSk7XG4gICAgc2VsZi5wcy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgZnVuY3Rpb24oKSB7XG4gICAgICBzZWxmLmRyYWcgPSBmYWxzZTtcbiAgICB9KTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgZnVuY3Rpb24oKSB7XG4gICAgICBzZWxmLmRyYWcgPSBmYWxzZTtcbiAgICB9KTtcbiAgICBzZWxmLnNjcm9sbElubmVyLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCBmdW5jdGlvbigpIHtcbiAgICAgIGlmIChzZWxmLnNjcm9sbElubmVyLnNjcm9sbEhlaWdodCAhPSBzZWxmLnNjcm9sbElubmVyLmNsaWVudEhlaWdodCkge1xuICAgICAgICBzZWxmLnNjcm9sbFNoeSgpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHNlbGYuc2MuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIGZ1bmN0aW9uKCkge1xuICAgICAgc2VsZi51dGlsLmFkZENsYXNzKHNlbGYucHMsICdzaG93Jyk7XG4gICAgfSk7XG4gICAgc2VsZi5zYy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgZnVuY3Rpb24oKSB7XG4gICAgICBzZWxmLnV0aWwucmVtb3ZlQ2xhc3Moc2VsZi5wcywgJ3Nob3cnKTtcbiAgICB9KTtcbiAgICBzZWxmLnNjcm9sbElubmVyLmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGZ1bmN0aW9uKCkge1xuICAgICAgc2VsZi5zZXRTY3JvbGxUb3AoKTtcbiAgICAgIHNlbGYuc2Nyb2xsU2h5KCk7XG4gICAgfSk7XG4gICAgc2VsZi5zY3JvbGxJbm5lci5hZGRFdmVudExpc3RlbmVyKCdET01TdWJ0cmVlTW9kaWZpZWQnLCBmdW5jdGlvbigpIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBzZWxmLm1ha2VTY3JvbGxQb3NpdGlvbigpO1xuICAgICAgICBzZWxmLnNldFNjcm9sbFRvcCgpO1xuICAgICAgfSwzMCk7XG4gICAgfSk7XG5cblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLGZ1bmN0aW9uKCkge1xuXG4gICAgICBpZiAoc2VsZi5pc1dlYmtpdCAhPT0gdHJ1ZSkge1xuICAgICAgICB2YXIgandzY3JvbGxXcmFwID0gc2VsZi5zY3JvbGxXcmFwO1xuICAgICAgICB2YXIgandzY3JvbGwgPSBzZWxmLnNjcm9sbElubmVyO1xuICAgICAgICBqd3Njcm9sbC5yZW1vdmVBdHRyaWJ1dGUoXCJzdHlsZVwiKTtcbiAgICAgICAgandzY3JvbGxXcmFwLnJlbW92ZUF0dHJpYnV0ZShcInN0eWxlXCIpO1xuXG4gICAgICAgIHNlbGYuaGlkZGVuU2Nyb2xsKCk7XG4gICAgICB9XG4gICAgICBzZWxmLm1ha2VTY3JvbGxQb3NpdGlvbigpO1xuICAgICAgc2VsZi5zZXRTY3JvbGxUb3AoKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nandzY3JvbGwnPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nandzY3JvbGwtaW5uZXInPlxuICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuLyoqXG4gKiAgUkVEVVggU1RBVEUg7KO87J6FXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoZnVuY3Rpb24gKHN0YXRlKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHByZXZpZXdTY3JvbGw6IHN0YXRlLmRlZmF1bHQud3JpdGUuc2Nyb2xsXG4gICAgfTtcbn0pKFNjcm9sbCk7XG4iLCJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFV0aWwge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuXG4gIH1cbiAgYWRkQ2xhc3ModGFyZ2V0LCBhZGRDbGFzcykge1xuICAgIGxldCBjbGFzc05hbWUgPSB0YXJnZXQuY2xhc3NOYW1lO1xuICAgIGlmICghbmV3IFJlZ0V4cChhZGRDbGFzcywgJ2cnKS5leGVjKGNsYXNzTmFtZSkpIHtcbiAgICAgIGNsYXNzTmFtZSArPSBcIiBcIithZGRDbGFzcztcbiAgICAgIHRhcmdldC5jbGFzc05hbWUgPSBjbGFzc05hbWU7XG4gICAgfVxuICB9XG5cbiAgcmVtb3ZlQ2xhc3ModGFyZ2V0LCByZW1vdmVDbGFzcykge1xuICAgIGxldCBjbGFzc05hbWUgPSB0YXJnZXQuY2xhc3NOYW1lO1xuICAgIGlmIChuZXcgUmVnRXhwKHJlbW92ZUNsYXNzLCAnZycpLmV4ZWMoY2xhc3NOYW1lKSkge1xuICAgICAgdmFyIHJlZ2V4ID0gbmV3IFJlZ0V4cCgnICcrcmVtb3ZlQ2xhc3MsICdnJyk7XG4gICAgICBjbGFzc05hbWUgPSBjbGFzc05hbWUucmVwbGFjZShyZWdleCwgJycpO1xuICAgICAgdGFyZ2V0LmNsYXNzTmFtZSA9IGNsYXNzTmFtZTtcbiAgICB9XG4gIH1cblxufVxuIiwiaW1wb3J0IGFqYXggZnJvbSAnLi94aHIuanMnO1xuXG5sZXQgc3RvcmVEaXNwYXRjaCA9IG51bGw7XG5sZXQgc3RvcmVJbmZvID0gbnVsbDtcblxuZXhwb3J0IGZ1bmN0aW9uIGluaXRTdG9yZURpc3BhdGNoKHN0b3JlKSB7XG4gIHN0b3JlRGlzcGF0Y2ggPSBzdG9yZS5kaXNwYXRjaDtcbiAgc3RvcmVJbmZvID0gc3RvcmU7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHJlcXVlc3QodXJsLCBkYXRhLCBtZXRob2QgPSAnR0VUJykge1xuICBjb25zdCByZXF1ZXN0T3B0aW9uID0ge1xuICAgIG1ldGhvZCxcbiAgICB1cmwsXG4gICAgZGF0YVxuICB9O1xuXG4gIGlmIChtZXRob2QgPT09ICdQT1NUJykge1xuICAgIHJlcXVlc3RPcHRpb24uY29udGVudFR5cGUgPSAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD1VVEYtOCc7XG4gIH1cblxuICByZXR1cm4gYXdhaXQgYWpheChyZXF1ZXN0T3B0aW9uKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gZGlzcGF0Y2hlcihhY3Rpb24pIHtcbiAgaWYgKGFjdGlvbi50eXBlID09PSAnR0VUTElTVCcpIHtcbiAgICBjb25zdCB7c2VhcmNoU3RyaW5nfSA9IGFjdGlvbjtcbiAgICBjb25zdCBsaXN0ID0gYXdhaXQgcmVxdWVzdCgnL2pub3RlL3JlYWQnLCBzZWFyY2hTdHJpbmcgPyB7c2VhcmNoU3RyaW5nfSA6IG51bGwpO1xuICAgIGFjdGlvbi5saXN0ID0gbGlzdDtcbiAgfVxuICBlbHNlIGlmIChhY3Rpb24udHlwZSA9PT0gJ0dFVE9ORScpIHtcbiAgICBjb25zdCBpbmZvID0gYXdhaXQgcmVxdWVzdChgL2pub3RlL3JlYWQvJHthY3Rpb24uaWR9YCwge30pO1xuICAgIGFjdGlvbi5pbmZvID0gaW5mbztcbiAgfVxuICBlbHNlIGlmIChhY3Rpb24udHlwZSA9PT0gJ1RPR0dMRV9GQVZPUklURScpIHtcbiAgICBjb25zdCBuZXdGYXYgPSAhc3RvcmVJbmZvLmdldFN0YXRlKCkuZGVmYXVsdC5saXN0c1thY3Rpb24uaWR4XS5mYXZvcml0ZTtcbiAgICBjb25zdCBpbmZvID0gYXdhaXQgcmVxdWVzdChgL2pub3RlL3VwZGF0ZWAsIHtcbiAgICAgIGlkOiBhY3Rpb24uaWQsXG4gICAgICBmYXZvcml0ZTogbmV3RmF2XG4gICAgfSwgJ1BPU1QnKTtcblxuICAgIGFjdGlvbi5mYXZvcml0ZSA9IG5ld0ZhdjtcbiAgfVxuICBlbHNlIGlmIChhY3Rpb24udHlwZSA9PT0gJ1dSSVRFTk9URScpIHtcbiAgICBjb25zdCB3cml0ZUluZm8gPSBzdG9yZUluZm8uZ2V0U3RhdGUoKS5kZWZhdWx0LndyaXRlO1xuXG4gICAgYWN0aW9uLmRhdGEgPSBhd2FpdCByZXF1ZXN0KGAvam5vdGUvY3JlYXRlYCwge1xuICAgICAgdGl0bGU6IHdyaXRlSW5mby50aXRsZSxcbiAgICAgIG5vdGU6IHdyaXRlSW5mby5ub3RlLFxuICAgICAgY2F0ZWdvcnk6IHdyaXRlSW5mby50YWdzXG4gICAgfSwgJ1BPU1QnKTtcbiAgfVxuICBlbHNlIGlmIChhY3Rpb24udHlwZSA9PT0gJ0RFTEVURU5PVEUnKSB7XG4gICAgY29uc3QgbGlzdHMgPSBzdG9yZUluZm8uZ2V0U3RhdGUoKS5kZWZhdWx0Lmxpc3RzO1xuICAgIGNvbnN0IG5vdGVJZCA9IHN0b3JlSW5mby5nZXRTdGF0ZSgpLmRlZmF1bHQudmlldy5ub3RlSWQ7XG5cbiAgICBhd2FpdCByZXF1ZXN0KGAvam5vdGUvZGVsZXRlYCwge1xuICAgICAgaWQ6IG5vdGVJZCxcbiAgICB9LCAnUE9TVCcpO1xuXG4gICAgbGV0IGNob2ljZVRhcmdldCA9IG51bGw7XG4gICAgbGlzdHMuc29tZShmdW5jdGlvbihpdGVtLCBpZHgpe1xuICAgICAgaWYoaXRlbS5faWQgPT09IG5vdGVJZCl7XG4gICAgICAgIGNob2ljZVRhcmdldCA9IGlkeDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGl0ZW0uX2lkID09PSBub3RlSWQ7XG4gICAgfSk7XG5cbiAgICBhY3Rpb24uaWR4ID0gY2hvaWNlVGFyZ2V0O1xuICB9XG4gIGVsc2UgaWYgKGFjdGlvbi50eXBlID09PSAnRURJVE5PVEUnKSB7XG4gICAgY29uc3QgbGlzdHMgPSBzdG9yZUluZm8uZ2V0U3RhdGUoKS5kZWZhdWx0Lmxpc3RzO1xuICAgIGNvbnN0IHdyaXRlSW5mbyA9IHN0b3JlSW5mby5nZXRTdGF0ZSgpLmRlZmF1bHQud3JpdGU7XG4gICAgY29uc3QgdXBkYXRlUmVzdWx0ID0gYXdhaXQgcmVxdWVzdChgL2pub3RlL3VwZGF0ZWAsIHtcbiAgICAgIGlkOiB3cml0ZUluZm8ubm90ZUlkLFxuICAgICAgdGl0bGU6IHdyaXRlSW5mby50aXRsZSxcbiAgICAgIG5vdGU6IHdyaXRlSW5mby5ub3RlLFxuICAgICAgY2F0ZWdvcnk6IHdyaXRlSW5mby50YWdzXG4gICAgfSwgJ1BPU1QnKTtcblxuICAgIGxldCBjaG9pY2VUYXJnZXQgPSBudWxsO1xuICAgIGxpc3RzLnNvbWUoZnVuY3Rpb24oaXRlbSwgaWR4KXtcbiAgICAgIGlmKGl0ZW0uX2lkID09PSB1cGRhdGVSZXN1bHQuX2lkKXtcbiAgICAgICAgY2hvaWNlVGFyZ2V0ID0gaWR4O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gaXRlbS5faWQgPT09IHVwZGF0ZVJlc3VsdC5faWQ7XG4gICAgfSk7XG5cbiAgICBhY3Rpb24uaWR4ID0gY2hvaWNlVGFyZ2V0O1xuICAgIGFjdGlvbi5kYXRhID0gdXBkYXRlUmVzdWx0O1xuICB9XG5cbiAgc3RvcmVEaXNwYXRjaChhY3Rpb24pO1xufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IHsgYXBwbHlNaWRkbGV3YXJlLCBjb21wb3NlLCBjcmVhdGVTdG9yZSwgY29tYmluZVJlZHVjZXJzIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBSb3V0ZXIsIFJvdXRlLCBJbmRleFJvdXRlLCBicm93c2VySGlzdG9yeSwgaGFzaEhpc3RvcnkgIH0gZnJvbSAncmVhY3Qtcm91dGVyJztcbmltcG9ydCB7IHN5bmNIaXN0b3J5V2l0aFN0b3JlLCByb3V0ZXJSZWR1Y2VyIH0gZnJvbSAncmVhY3Qtcm91dGVyLXJlZHV4JztcbmltcG9ydCB7aW5pdFN0b3JlRGlzcGF0Y2h9IGZyb20gJy4vZGlzcGF0Y2hlci5qcyc7XG5cblxuaW1wb3J0ICogYXMgcmVkdWNlcnMgZnJvbSAnLi9yZWR1Y2Vycy9qbm90ZSc7XG5cblxuaW1wb3J0IEFwcCBmcm9tICcuL2NvbXBvbmVudHMvQXBwJztcbmltcG9ydCBFbXB0eSBmcm9tICcuL2NvbXBvbmVudHMvRW1wdHknO1xuaW1wb3J0IFZpZXcgZnJvbSAnLi9jb21wb25lbnRzL1ZpZXcnO1xuaW1wb3J0IFdyaXRlIGZyb20gJy4vY29tcG9uZW50cy9Xcml0ZSc7XG5cblxuY29uc3QgcmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7XG4gIC4uLnJlZHVjZXJzLFxuICByb3V0aW5nOiByb3V0ZXJSZWR1Y2VyXG59KTtcblxuY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShcbiAgcmVkdWNlcixcbiAgLy9EZXZUb29scy5pbnN0cnVtZW50KClcbik7XG5cbmluaXRTdG9yZURpc3BhdGNoKHN0b3JlKTtcblxuY29uc3QgaGlzdG9yeSA9IHN5bmNIaXN0b3J5V2l0aFN0b3JlKGhhc2hIaXN0b3J5LCBzdG9yZSk7XG5cblJlYWN0RE9NLnJlbmRlcihcbiAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XG4gICAgICA8Um91dGVyIGhpc3Rvcnk9e2hpc3Rvcnl9PlxuICAgICAgICA8Um91dGUgcGF0aD1cIi9cIiAgY29tcG9uZW50PXtBcHB9PlxuICAgICAgICAgIDxJbmRleFJvdXRlIGNvbXBvbmVudD17RW1wdHl9Lz5cbiAgICAgICAgICA8Um91dGUgcGF0aD1cInZpZXcvOmlkXCIgIGNvbXBvbmVudD17Vmlld30vPlxuICAgICAgICAgIDxSb3V0ZSBwYXRoPVwid3JpdGVcIiBjb21wb25lbnQ9e1dyaXRlfS8+XG4gICAgICAgICAgPFJvdXRlIHBhdGg9XCJ3cml0ZS86aWRcIiBjb21wb25lbnQ9e1dyaXRlfS8+XG4gICAgICAgIDwvUm91dGU+XG4gICAgICA8L1JvdXRlcj5cbiAgPC9Qcm92aWRlcj4sXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdqbm90ZScpXG4pO1xuXG5cblxuIiwiY29uc3QgaW5pdGlhbFN0YXRlTGlzdCA9IHtcbiAgc2VhcmNoOiB7XG4gICAgdGFnczogW11cbiAgfSxcbiAgbGlzdHM6IFtdLFxuICB2aWV3OiB7XG4gICAgbm90ZUlkOiAwLFxuICAgIHRpdGxlOiAnJyxcbiAgICBub3RlOiAnJyxcbiAgICB0YWdzOiBbXVxuICB9LFxuICB3cml0ZToge1xuICAgIG5vdGVJZDogMCxcbiAgICB0aXRsZTogJycsXG4gICAgbm90ZTogJycsXG4gICAgc2Nyb2xsOiAwLFxuICAgIHRhZ3M6IFtdXG4gIH0sXG4gIHByZXZpZXc6IHtcbiAgICBvcGVuZWQ6IGZhbHNlXG4gIH0sXG4gIGRpYWxvZzoge1xuICAgIG9wZW5lZDogZmFsc2UsXG4gICAgdHlwZTogJ2FsZXJ0JyxcbiAgICBtZXNzYWdlOiAnJ1xuICB9LFxuICBzaG9ydGN1dDoge1xuICAgIGJ1ZmZlcjogbnVsbCxcbiAgICBhZG1pbjogZmFsc2VcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gam5vdGVyZWR1Y2VyKHN0YXRlID0gaW5pdGlhbFN0YXRlTGlzdCwgYWN0aW9uKSB7XG5cbiAgbGV0IG5ld19zdGF0ZSA9IHt9O1xuXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcblxuICAgIC8qIHNjcm9sbCDssrTsnbjsp4AgKi9cbiAgICBjYXNlICdTQ1JPTExfQ0hBTkdFJzpcbiAgICAgIG5ld19zdGF0ZSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoc3RhdGUpKTtcbiAgICAgIG5ld19zdGF0ZS53cml0ZS5zY3JvbGwgPSBhY3Rpb24uc2Nyb2xsO1xuICAgICAgcmV0dXJuIG5ld19zdGF0ZTtcbiAgICAgIGJyZWFrO1xuXG4gICAgLyog7Ie87Yq47Lu3IOyytOyduOyngCAqL1xuICAgIGNhc2UgJ0FETUlOX0NIQU5HRSc6XG4gICAgICBuZXdfc3RhdGUgPSBPYmplY3QuYXNzaWduKHt9LHN0YXRlKTtcbiAgICAgIG5ld19zdGF0ZS5zaG9ydGN1dC5hZG1pbiA9IGFjdGlvbi5ib29sO1xuXG4gICAgICByZXR1cm4gbmV3X3N0YXRlO1xuICAgICAgYnJlYWs7XG5cbiAgICAvKiDsh7ztirjsu7cg7LK07J247KeAICovXG4gICAgY2FzZSAnU0hPUlRDVVRfQ0hBTkdFJzpcbiAgICAgIG5ld19zdGF0ZSA9IE9iamVjdC5hc3NpZ24oe30sc3RhdGUse1xuICAgICAgICBzaG9ydGN1dDogT2JqZWN0LmFzc2lnbih7fSxzdGF0ZS5zaG9ydGN1dCx7XG4gICAgICAgICAgYnVmZmVyOiBhY3Rpb24uY29tbWFuZFxuICAgICAgICB9KVxuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiBuZXdfc3RhdGU7XG4gICAgICBicmVhaztcblxuICAgIC8qIOuLpOydtOyWvOuhnOq3uCDsl7TquLAgKi9cbiAgICBjYXNlICdPUEVOX0RJQUxPRyc6XG5cbiAgICAgIG5ld19zdGF0ZSA9IE9iamVjdC5hc3NpZ24oe30sc3RhdGUse1xuICAgICAgICBkaWFsb2c6IHtcbiAgICAgICAgICBvcGVuZWQ6IHRydWUsXG4gICAgICAgICAgdHlwZTogYWN0aW9uLmRpYWxvZ3R5cGUsXG4gICAgICAgICAgbWVzc2FnZTogYWN0aW9uLm1lc3NhZ2UsXG4gICAgICAgICAgc3VjY2Vzc2FjdGlvbjogYWN0aW9uLnN1Y2Nlc3NhY3Rpb24sXG4gICAgICAgICAgZmFpbEFjdGlvbjogYWN0aW9uLmZhaWxhY3Rpb25cbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiBuZXdfc3RhdGU7XG4gICAgICBicmVhaztcblxuICAgIC8qIOuLpOydtOyWvOuhnOq3uCDri6vquLAgKi9cbiAgICBjYXNlICdDTE9TRV9ESUFMT0cnOlxuXG4gICAgICBuZXdfc3RhdGUgPSBPYmplY3QuYXNzaWduKHt9LHN0YXRlLHtcbiAgICAgIGRpYWxvZzoge1xuICAgICAgICBvcGVuZWQ6IGZhbHNlLFxuICAgICAgICB0eXBlOiAnJ1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIG5ld19zdGF0ZTtcblxuICAgIGJyZWFrO1xuXG4gICAgY2FzZSAnVE9HR0xFX0ZBVk9SSVRFJzpcblxuICAgICAgbmV3X3N0YXRlID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShzdGF0ZSkpO1xuICAgICAgbmV3X3N0YXRlLmxpc3RzW2FjdGlvbi5pZHhdLmZhdm9yaXRlID0gYWN0aW9uLmZhdm9yaXRlO1xuXG4gICAgICByZXR1cm4gbmV3X3N0YXRlO1xuICAgIGJyZWFrO1xuXG4gICAgLyog7ZSE66as67ew66qo65OcIOyytOyduOyngCAqL1xuICAgIGNhc2UgJ1RPR0dMRV9QUkVWSUVXJzpcbiAgICAgIGNvbnN0IG9wZW5lZCA9IHN0YXRlLnByZXZpZXcub3BlbmVkID8gZmFsc2UgOiB0cnVlO1xuXG4gICAgICBuZXdfc3RhdGUgPSBPYmplY3QuYXNzaWduKHt9LHN0YXRlKTtcbiAgICAgIG5ld19zdGF0ZS5wcmV2aWV3Lm9wZW5lZCA9IG9wZW5lZDtcblxuXG4gICAgICByZXR1cm4gbmV3X3N0YXRlO1xuICAgICAgYnJlYWs7XG5cbiAgICAvKiDquIDsk7DquLAgKi9cbiAgICBjYXNlICdXUklURU5PVEUnOlxuICAgICAgY29uc3QgZGF0YWEgPSBhY3Rpb24uZGF0YTtcbiAgICAgIGNvbnN0IG5ld0FycmF5ID0gW2RhdGFhXS5jb25jYXQoc3RhdGUubGlzdHMpO1xuXG4gICAgICBuZXdfc3RhdGUgPSBPYmplY3QuYXNzaWduKHt9LHN0YXRlLHtcbiAgICAgICAgbGlzdHM6IG5ld0FycmF5LFxuICAgICAgICB3cml0ZToge1xuICAgICAgICAgIHRpdGxlOiAnJyxcbiAgICAgICAgICBub3RlOiAnJyxcbiAgICAgICAgICB0YWdzOiBbXVxuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIG5ld19zdGF0ZTtcbiAgICAgIGJyZWFrO1xuXG4gICAgLyog6riA7IiY7KCVICovXG4gICAgY2FzZSAnRURJVE5PVEUnOlxuICAgICAgbmV3X3N0YXRlID0gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUpO1xuICAgICAgbmV3X3N0YXRlLmxpc3RzW2FjdGlvbi5pZHhdID0gYWN0aW9uLmRhdGE7XG4gICAgICByZXR1cm4gbmV3X3N0YXRlO1xuICAgICAgYnJlYWs7XG5cbiAgICAvKiB3aXJ0ZSDrgrTsmqnsnYQgdmlldyDrgrTsmqnqs7wg7IOB7YOcIOuPmeq4sO2ZlCAqL1xuICAgIGNhc2UgJ1VQREFURUZPUk1fU1lOQyc6XG4gICAgICBuZXdfc3RhdGUgPSBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICB3cml0ZToge1xuICAgICAgICAgIG5vdGVJZDogc3RhdGUudmlldy5ub3RlSWQsXG4gICAgICAgICAgdGl0bGU6IHN0YXRlLnZpZXcudGl0bGUsXG4gICAgICAgICAgbm90ZTogc3RhdGUudmlldy5ub3RlLFxuICAgICAgICAgIHRhZ3M6IHN0YXRlLnZpZXcudGFnc1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBuZXdfc3RhdGU7XG4gICAgICBicmVhaztcblxuICAgIC8qIO2DgOydtO2LgCDtj7zsiJjsoJUgKi9cbiAgICBjYXNlICdVUERBVEVGT1JNX1RJVExFJzpcbiAgICAgIG5ld19zdGF0ZSA9IE9iamVjdC5hc3NpZ24oe30sc3RhdGUpO1xuICAgICAgbmV3X3N0YXRlLndyaXRlLnRpdGxlID0gYWN0aW9uLnRleHQ7XG5cbiAgICAgIHJldHVybiBuZXdfc3RhdGU7XG4gICAgICBicmVhaztcblxuICAgIC8qIOy7qO2FkOy4oCDtj7zsiJjsoJUgKi9cbiAgICBjYXNlICdVUERBVEVGT1JNX05PVEUnOlxuICAgICAgbmV3X3N0YXRlID0gT2JqZWN0LmFzc2lnbih7fSxzdGF0ZSk7XG4gICAgICBuZXdfc3RhdGUud3JpdGUubm90ZSA9IGFjdGlvbi50ZXh0O1xuXG4gICAgICByZXR1cm4gbmV3X3N0YXRlO1xuICAgICAgYnJlYWs7XG5cbiAgICAvKiDsu6jthZDsuKAg7Y+87IiY7KCVICovXG4gICAgY2FzZSAnVVBEQVRFRk9STV9UQUdTJzpcbiAgICAgIG5ld19zdGF0ZSA9IE9iamVjdC5hc3NpZ24oe30sc3RhdGUpO1xuICAgICAgbmV3X3N0YXRlLndyaXRlLnRhZ3MgPSBhY3Rpb24udGV4dDtcblxuICAgICAgcmV0dXJuIG5ld19zdGF0ZTtcbiAgICAgIGJyZWFrO1xuXG4gICAgLyog6riAIOyCreygnCAqL1xuICAgIGNhc2UgJ0RFTEVURU5PVEUnOlxuICAgICAgbmV3X3N0YXRlID0gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUpO1xuICAgICAgbmV3X3N0YXRlLmxpc3RzLnNwbGljZShhY3Rpb24uaWR4LCAxKTtcblxuICAgICAgc3RhdGUubGlzdHMgPSBbLi4ubmV3X3N0YXRlLmxpc3RzXTtcblxuICAgICAgcmV0dXJuIHN0YXRlO1xuICAgICAgYnJlYWs7XG5cbiAgICAvKiDquIAg7ZWY64KYICovXG4gICAgY2FzZSAnR0VUT05FJzpcbiAgICAgIHJldHVybiAgT2JqZWN0LmFzc2lnbih7fSxzdGF0ZSx7XG4gICAgICAgIHZpZXc6IHtcbiAgICAgICAgICBub3RlOiBhY3Rpb24uaW5mby5ub3RlLFxuICAgICAgICAgIHRpdGxlOiBhY3Rpb24uaW5mby50aXRsZSxcbiAgICAgICAgICB0YWdzOiBhY3Rpb24uaW5mby5jYXRlZ29yeSxcbiAgICAgICAgICBub3RlSWQ6IGFjdGlvbi5pZFxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGJyZWFrO1xuXG4gICAgLyog6riAIOumrOyKpO2KuCAqL1xuICAgIGNhc2UgJ0dFVExJU1QnOlxuXG4gICAgICBuZXdfc3RhdGUgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHN0YXRlKSk7XG5cbiAgICAgIGxldCBkYXRhID0ge307XG4gICAgICBpZiAoYWN0aW9uLnNlYXJjaFN0cmluZykge1xuICAgICAgICBkYXRhLnNlYXJjaFN0cmluZyA9IGFjdGlvbi5zZWFyY2hTdHJpbmc7XG4gICAgICB9XG5cbiAgICAgIG5ld19zdGF0ZSA9IE9iamVjdC5hc3NpZ24oe30sc3RhdGUse1xuICAgICAgICBsaXN0czogYWN0aW9uLmxpc3RcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gbmV3X3N0YXRlO1xuICAgICAgYnJlYWs7XG5cbiAgICAvKiDquLDrs7jqsJIg66as7YS0ICovXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgICAgIGJyZWFrO1xuICB9XG59XG5cbiIsIlxuY29uc3Qgb2JqZWN0VG9RdWVyeXN0cmluZyA9IGZ1bmN0aW9uKG9iaikge1xuICBpZiAoIW9iaikge1xuICAgIHJldHVybiB7fTtcbiAgfVxuICB2YXIgZmlsdGVya2V5cyA9IE9iamVjdC5rZXlzKG9iaikuZmlsdGVyKGZ1bmN0aW9uKGtleSkge1xuICAgIHJldHVybiBvYmpba2V5XSAhPT0gJycgJiYgb2JqW2tleV0gIT09IG51bGw7XG4gIH0pO1xuXG4gIHJldHVybiBmaWx0ZXJrZXlzLnJlZHVjZShmdW5jdGlvbihhY2MsIGtleSwgaW5kZXgpIHtcbiAgICB2YXIgc3RhcnRXaXRoID0gaW5kZXggPT09IDAgPyAnJyA6ICcmJztcbiAgICB2YXIgdmFsdWUgPSBvYmpba2V5XTtcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIHZhbHVlLmZvckVhY2goYXJyVmFsdWUgPT4ge1xuICAgICAgICBhY2MgKz0gYCR7c3RhcnRXaXRofSR7a2V5fVtdPSR7YXJyVmFsdWV9YDtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBhY2MgKz0gYCR7c3RhcnRXaXRofSR7a2V5fT0ke3ZhbHVlfWA7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFjYztcbiAgfSwgJycpO1xufTtcblxuY29uc3QgY3JlYXRlWGhyID0gZnVuY3Rpb24obWV0aG9kLCB1cmwsIGRhdGEsIGNvbnRlbnRUeXBlKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG5cbiAgICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG5cbiAgICBpZiAoJ3dpdGhDcmVkZW50aWFscycgaW4geGhyKSB7XG4gICAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSA9PT0gNCkge1xuICAgICAgICAgIGlmICh4aHIuc3RhdHVzID09PSAyMDAgJiYgcmVzb2x2ZSkge1xuICAgICAgICAgICAgcmVzb2x2ZSh4aHIucmVzcG9uc2UpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZWplY3QoJ3hociBlcnJvcicpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIHhoci5vcGVuKG1ldGhvZCwgdXJsLCBmYWxzZSk7XG4gICAgICB4aHIud2l0aENyZWRlbnRpYWxzID0gdHJ1ZTtcblxuICAgICAgaWYgKGNvbnRlbnRUeXBlKSB7XG4gICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQ29udGVudC1UeXBlXCIsIGNvbnRlbnRUeXBlKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBYRG9tYWluUmVxdWVzdCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHhociA9IG5ldyBYRG9tYWluUmVxdWVzdCgpO1xuICAgICAgeGhyLm9ucHJvZ3Jlc3MgPSBmdW5jdGlvbigpIHt9OyAvLyBubyBhYm9ydGluZ1xuICAgICAgeGhyLm9udGltZW91dCA9IGZ1bmN0aW9uKCkge307IC8vIFwiXG4gICAgICB4aHIub3BlbihtZXRob2QsIHVybCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHhociA9IG51bGw7XG4gICAgfVxuXG4gICAgeGhyLnNlbmQoSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xuICB9KTtcbn07XG5cblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gYWpheChhamF4UmVxdWVzdEluZm8pIHtcbiAgbGV0IHVybCA9IGFqYXhSZXF1ZXN0SW5mby51cmw7XG4gIGNvbnN0IG1ldGhvZCA9IGFqYXhSZXF1ZXN0SW5mby5tZXRob2Q7XG4gIGNvbnN0IGRhdGEgPSBhamF4UmVxdWVzdEluZm8uZGF0YTtcbiAgY29uc3Qgc3VjY2VzcyA9IGFqYXhSZXF1ZXN0SW5mby5zdWNjZXNzO1xuICBjb25zdCBmYWlsID0gYWpheFJlcXVlc3RJbmZvLmZhaWw7XG4gIGNvbnN0IG9wdGlvbnMgPSBhamF4UmVxdWVzdEluZm8ub3B0aW9ucyB8fCB7fTtcbiAgY29uc3QgY29udGVudFR5cGUgPSBhamF4UmVxdWVzdEluZm8uY29udGVudFR5cGU7XG5cbiAgaWYgKG1ldGhvZCAhPT0gJ1BPU1QnICYmIGRhdGEpIHtcbiAgICB1cmwgKz0gYD8ke29iamVjdFRvUXVlcnlzdHJpbmcoZGF0YSl9YDtcbiAgfVxuICBjb25zdCByZXN1bHQgPSBhd2FpdCBjcmVhdGVYaHIobWV0aG9kLCB1cmwsIGRhdGEsIGNvbnRlbnRUeXBlKTtcblxuICByZXR1cm4gSlNPTi5wYXJzZShyZXN1bHQpO1xufVxuXG4iXSwic291cmNlUm9vdCI6IiJ9