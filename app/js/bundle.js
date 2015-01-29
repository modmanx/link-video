/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!*******************!*\
  !*** ./js/app.js ***!
  \*******************/
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM */var LinkVideoApp = __webpack_require__(/*! ./components/LinkVideoApp.react */ 2);
	var React = __webpack_require__(/*! react */ 1);
	window.React = React; // export for http://fb.me/react-devtools
	
	
	React.render(
	  React.createElement(LinkVideoApp, null),
	  document.getElementById('app')
	);


/***/ },
/* 1 */
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = React;

/***/ },
/* 2 */
/*!*********************************************!*\
  !*** ./js/components/LinkVideoApp.react.js ***!
  \*********************************************/
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM *//**
	 * Copyright (c) 2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */
	
	/**
	 * This component operates as a "Controller-View".  It listens for changes in
	 * the TodoStore and passes the new data to its children.
	 */
	
	var React = __webpack_require__(/*! react */ 1);
	
	/**
	 * Retrieve the current TODO data from the TodoStore
	 */
	function getFilesState() {
	  return {
	    // allTodos: TodoStore.getAll(),
	    // areAllComplete: TodoStore.areAllComplete()
	  };
	}
	
	var LinkVideoApp = React.createClass({displayName: "LinkVideoApp",
	
	  getInitialState: function() {
	    return getFilesState();
	  },
	
	  componentDidMount: function() {
	    TodoStore.addChangeListener(this._onChange);
	  },
	
	  componentWillUnmount: function() {
	    TodoStore.removeChangeListener(this._onChange);
	  },
	
	  /**
	   * @return {object}
	   */
	  render: function() {
	    return (
	      React.createElement("div", null, 
	        "Hello"
	      )
	    );
	  },
	
	  /**
	   * Event handler for 'change' events coming from the TodoStore
	   */
	  _onChange: function() {
	    this.setState(getTodoState());
	  }
	
	});
	
	module.exports = LinkVideoApp;


/***/ }
/******/ ])
//# sourceMappingURL=bundle.js.map