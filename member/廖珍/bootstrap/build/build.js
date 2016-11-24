/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	__webpack_require__(2);


/***/ },
/* 1 */
/***/ function(module, exports) {

	


	//轮播插件
	function Slides($element,options){
	  this.options = options
	  this.$element = $element
	  this.timer = null 
	  this.init()

	}
	//初始化
	Slides.prototype.init = function(){
	  this.prepareHtml()
	  this.bindEvents()
	  if(this.options.auto){
	      this.autoPlay()
	    }
	}
	//准备HTML
	Slides.prototype.prepareHtml = function(){
	  var $arts = this.$element
	  var options = this.options
	  var $pics = this.$pics = $arts.children().wrapAll('<div class=list></div>')
	  var $list = this.$list = $arts.children()
	  $list.wrapAll('<div class=viewpoint></div>')
	  var $viewpoint = this.$viewpoint = $list.parent()
	  if (options.nav) {
	      var $prev = this.$prev = $('<a class="prev arrow"><</a>')
	      var $next = this.$next = $('<a class="next arrow">></a>')
	      $prev.appendTo($arts)
	      $next.appendTo($arts)
	      $('.arrow').css({
	        display: 'inlineBlock',
	        position: 'absolute',
	        top: '50%',
	        'margin-top': '-15px',
	        width: '30px',
	        height: '30px',
	        'line-height': '30px',
	        'text-align': 'center',
	        'font-size': '20px',
	        color: '#fff',
	        background: '#4e443c',
	        'box-shadow': '0 0 2px #999',
	        'border-radius': '50%',
	        opacity: '0.8',
	        cursor: 'pointer'
	      })
	      $('.prev').css({
	        left: '5px'
	      })
	      $('.next').css({
	        right: '5px'
	      })
	  }
	  var width = this.width = options.width
	  var height = this.height = options.height
	  var current = this.current = 1
	  var hover = this.hover = false
	  var number = this.number = $pics.length+2
	  $arts.css({
	    width: width,
	    height: height,
	    position: 'relative'
	  })
	  $viewpoint.css({
	    width: width,
	    height: height,
	    overflow: 'hidden',
	    position: 'relative'
	  })
	  $list.css({
	    width: width*number,
	    height: height,
	    position: 'relative',
	    left: -width
	  })
	  $pics.css({
	    float: 'left',
	    width: width,
	    height: height
	 })
	  

	  var $first = this.$first = $pics.first()
	  var $last = this.$last = $pics.last()
	  $first.clone().appendTo($list)
	  $last.clone().prependTo($list)
	}
	//绑定事件
	Slides.prototype.bindEvents = function(){
	  var self = this
	  this.$prev.on('click',function(){
	     self.prev()
	  })
	  this.$next.on('click',function(){
	     self.next()
	  })
	  this.$pics.on('mouseenter',function(){
	     window.clearInterval(self.timer)
	     self.hover = true
	  }).on('mouseleave',function(){
	    if (self.options.auto) {
	      self.autoPlay()
	        self.hover = false
	    }    
	  })
	}
	//自动播放
	Slides.prototype.autoPlay = function(){
	  var self = this
	  this.timer = setInterval(function(){
	      self.next()
	    },2000)
	}
	//动作go
	Slides.prototype.prev = function(){
	  this.go(this.current-1)
	}
	Slides.prototype.next = function(){
	  this.go(this.current+1)
	}
	Slides.prototype.go = function(index){
	  var options = this.options
	  var width = options.width
	  var left = index*(-width)
	  var $list = this.$list
	  var timer = this.timer
	  var hover = this.hover
	  var current = this.current
	  var number = this.number
	  var left = index*(-width)
	  var self = this
	    if(timer){
	        window.clearInterval(timer)
	      }
	  if(!hover && options.auto){
	          this.autoPlay()
	        }
	    if(index!=0&&index!=number-1){
	      $list.stop(true,true).animate({
	          left: left 
	        },500,function(){
	          self.current = index
	      })      
	    }else    
	      if(index == 0){
	        $list.stop(true,true).animate({left:0},300,function(){
	          $list.css({left:(-number+2)*width})
	          self.current = number-2
	        })        
	      }else
	      if(index == number-1){
	        $list.stop(true,true).animate({left:-(number-1)*width},300,function(){
	          $list.css({left:-width})
	          self.current = 1
	        })
	      }
	}
	//页面有多个轮播
	$.fn.slides=function(options){
	  this.each(function(){
	    var element = this
	    var slides = new Slides($(element),options)
	  })
	}


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(3);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(10)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./style1.css", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./style1.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "\r\nh1,h2,h3,h4,h5,h6,p,ul,li {\r\n\tfont-family:\"Roboto Slab\",\"Helvetica Neue\",Helvetica,Arial,sans-serif;\r\n\tpadding:0;\r\n\tmargin:0;\r\n}\r\nhtml,body {\r\n\twidth:100%;\r\n}\r\na {\r\n\ttext-decoration:none;\r\n}\r\n.clearfix:after {\r\n\tcontent:\"\";\r\n\tdisplay:block;\r\n\tclear:both;\r\n}\r\n\r\n\r\n.navbar {\r\n\tbackground-color:#222;\r\n\tpadding:7px 0px;\r\n\tborder:1px solid #222;\r\n}\r\n.navbar-brand {\r\n\tfont-family:'Kaushan Script',\"Roboto Slab\",\"Helvetica Neue\",Helvetica,Arial,sans-serif;\r\n\tfont-size:26px;\r\n}\r\n#logo {\r\n\tcolor:#fed136;\r\n}\r\n#nav-list {\r\n\tcolor:#fff;\r\n\tfont-size:18px;\r\n}\r\n#nav-list:hover {\r\n\tcolor:#fed136;\r\n}\r\n.onepage {\r\n\theight:600px;\r\n\twidth:100%;\r\n}\r\n.fullCarousel {\r\n\toverflow:hidden;\r\n\theight:600px;\r\n\tposition:relative;\r\n\twidth:100%;\r\n}\r\n.fullCarousel-ct {\r\n\tposition:absolute;\r\n\twidth:100%;\r\n}\r\n.item {\r\n\tfloat:left;\r\n\twidth:100%;\r\n\tposition:relative;\r\n}\r\n.fullCarousel-item1 {\r\n\tbackground:url(" + __webpack_require__(5) + ");\r\n\tbackground-size:cover;\r\n\theight:600px;\r\n\r\n}\r\n.fullCarousel-item2 {\r\n\tbackground:url(" + __webpack_require__(6) + ");\r\n\tbackground-size:cover;\r\n\theight:600px;\r\n}\r\n.fullCarousel-item3 {\r\n\tbackground:url(" + __webpack_require__(7) + ");\r\n\tbackground-size:cover;\r\n\theight:600px;\r\n}\r\n.fullCarousel-item4 {\r\n\tbackground:url(" + __webpack_require__(8) + ");\r\n\tbackground-size:cover;\r\n\theight:600px;\r\n}\r\n.h1content,.pcontent {\r\n\tcolor:#fff;\r\n}\r\n.text-title{\r\n\tposition:absolute;\r\n\ttop:50%;\r\n\tleft:50%;\r\n\ttransform:translate(-50% ,-50%);\r\n}\r\n.pcontent {\r\n\tfont-size:26px;\r\n\t}\r\n.h1content {\r\n\tfont-size:48px;\r\n\tfont-weight:500;\r\n\tmargin:10px 0;\r\n}\r\n.btn-wrap {\r\n\ttext-align:center;\r\n\tmargin-top:10px;\r\n}\r\n\r\n.twopage {\r\n\tmargin:100px 0;\r\n}\r\n.twopage-text {\r\n\tmargin-bottom:60px;\r\n}\r\n.text-h1 {\r\n\tmargin:20px 0;\r\n}\r\n.Commerce {\r\n\tposition:relative;\r\n}\r\n.icon-ct {\r\n\twidth:100px;\r\n\theight:100px;\r\n\tborder-radius:50%;\r\n\tposition:relative;\r\n\tline-height:100px;\r\n\ttext-align:center;\r\n\tbackground:#f0ad41;\r\n\tleft:50%;\r\n\tmargin-left:-50px;\r\n}\r\n#icon1 {\r\n\tcolor:#fff;\r\n\tfont-size:44px;\r\n}\r\n.text-h3 {\r\n\tmargin:10px 0;\r\n}\r\n.text-p {\r\n\tline-height:1.5;\r\n\tfont-style:italic;\r\n\tcolor:rgba(156, 150, 150, 0.94);\r\n\tfont-size:16px;\r\n}\r\n\r\n.threepage {\r\n\tbackground:#f7f7f7;\r\n\tpadding:150px 0;\r\n}\r\n.link {\r\n\tmargin-top:50px;\r\n\tdisplay:inline-block;\r\n}\r\n.desc {\r\n\tbackground:#fff;\r\n\tpadding:20px;\r\n\tmax-width:360px;\r\n\tmargin:0;\r\n}\r\n.threepage img {\r\n\twidth:350px;\r\n\theight:250px;\r\n}\r\n\r\n\r\n.fourpage {\r\n\tmargin:80px 0;\r\n}\r\n.timeline {\r\n\tposition:relative;\r\n}\r\n.timeline-img  {\r\n\tleft: 50%;\r\n    margin-left: -50px;\r\n    width: 150px;\r\n    height: 150px;\r\n    position: absolute;\r\n    z-index: 100;\r\n    background-color: #fed136;\r\n    color: #fff;\r\n    border-radius: 100%;\r\n    border: 7px solid #f1f1f1;\r\n    text-align: center;\r\n}\r\n.timeline-panel {\r\n\twidth:41%;\r\n\tpadding:0 20px 20px 30px;\r\n}\r\n.timeline-panel-left {\r\n\tfloat:left;\r\n\ttext-align:right;\r\n}\r\n.timeline-panle-right {\r\n\tfloat:right;\r\n\ttext-align:left;\r\n}\r\n.fourpage ul li {\r\n\tmargin-bottom:80px;\r\n}\r\n.timeline::before {\r\n\tcontent:\"\";\r\n\tposition:absolute;\r\n\tleft:50%;\r\n\twidth:2px;\r\n\tbackground:#ccc;\r\n\ttop:20px;\r\n\tbottom:0;\r\n\tmargin-left:18px;\r\n}\r\n\r\n\r\n\r\n.fivepage {\r\n\tpadding:80px 0;\r\n\tbackground:#f7f7f7;\r\n}\r\n.team-img img {\r\n\twidth:235px;\r\n\theight:235px;\r\n\tborder:8px solid #fff;\r\n\tmargin:0 auto;\r\n}\r\n\r\n.team-contact ul li {\r\n\tdisplay:inline-block;\r\n}\r\n.team-contact ul li a {\r\n\tdisplay:inline-block;\r\n\twidth:40px;\r\n\theight:40px;\r\n\tline-height:40px;\r\n\tborder-radius:50%;\r\n\ttext-align:center;\r\n\tbackground:#222;\r\n}\r\n.icon {\r\n\tcolor:#fff;\r\n}\r\n\r\n\r\n.sixpage {\r\n\tpadding:60px 0px;\r\n}\r\n\r\n\r\n.contact {\r\n\tbackground-color:#222;\r\n\tbackground-image:url(" + __webpack_require__(9) + ");\r\n\tpadding:150px 0;\r\n}\r\n.form-control {\r\n\tmargin-top:25px;\r\n}\r\n.form-group input,.form-group textarea {\r\n\tpadding:20px;\r\n}\r\n.form-group textarea {\r\n\theight:176px;\r\n}\r\n\r\n\r\n.footer {\r\n\tpadding:25px 0;\r\n}\r\n.footer .list-contact li {\r\n\tdisplay:inline-block;\r\n}\r\n.footer .list-contact li a {\r\n\tdisplay:inline-block;\r\n\twidth:40px;\r\n\theight:40px;\r\n\tline-height:40px;\r\n\tborder-radius:50%;\r\n\ttext-align:center;\r\n\tbackground:#222;\r\n}\r\n.contact-color {\r\n\tcolor:#fff;\r\n}", ""]);

	// exports


/***/ },
/* 4 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "e2d2a51c2932205b52f4a5ae1943eb97.jpg";

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "d9fc52c227819ebbcdbe193f5bfa4c8c.jpg";

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "b45f01d9a2383bb03ab2d2c6cc02192d.jpg";

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "373f6e04ac2514d04b230e862630b7aa.jpg";

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "f40ed5b1e791e9d2479ba8b5e67f2df8.png";

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ }
/******/ ]);