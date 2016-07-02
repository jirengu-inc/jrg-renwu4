'use strict';


define('pixel', function() {

	/*
		auther: ruoyu
		hunger@jirengu.com
	 */

	var Pixel = (function() {
		var pixMap = {
			a: [
				[0, 1, 1, 0],
				[1, 0, 0, 1],
				[1, 0, 0, 1],
				[1, 1, 1, 1],
				[1, 0, 0, 1],
				[1, 0, 0, 1]
			],
			b: [
				[1, 1, 1, 0],
				[1, 0, 0, 1],
				[1, 1, 1, 0],
				[1, 0, 0, 1],
				[1, 0, 0, 1],
				[1, 1, 1, 0]
			],
			c: [
				[0, 1, 1, 0],
				[1, 0, 0, 1],
				[1, 0, 0, 0],
				[1, 0, 0, 0],
				[1, 0, 0, 1],
				[0, 1, 1, 0]
			],
			d: [
				[1, 1, 1, 0],
				[1, 0, 0, 1],
				[1, 0, 0, 1],
				[1, 0, 0, 1],
				[1, 0, 0, 1],
				[1, 1, 1, 0]
			],
			e: [
				[1, 1, 1, 1],
				[1, 0, 0, 0],
				[1, 0, 0, 0],
				[1, 1, 1, 0],
				[1, 0, 0, 0],
				[1, 1, 1, 1]
			],
			f: [
				[1, 1, 1, 1],
				[1, 0, 0, 0],
				[1, 0, 0, 0],
				[1, 1, 1, 0],
				[1, 0, 0, 0],
				[1, 0, 0, 0]
			],
			g: [
				[0, 1, 1, 0],
				[1, 0, 0, 1],
				[1, 0, 0, 0],
				[1, 0, 1, 1],
				[1, 0, 0, 1],
				[0, 1, 1, 0]
			],
			h: [
				[1, 0, 0, 1],
				[1, 0, 0, 1],
				[1, 0, 0, 1],
				[1, 1, 1, 1],
				[1, 0, 0, 1],
				[1, 0, 0, 1]
			],
			i: [
				[1, 0, 0, 0],
				[1, 0, 0, 0],
				[1, 0, 0, 0],
				[1, 0, 0, 0],
				[1, 0, 0, 0],
				[1, 0, 0, 0]
			],
			j: [
				[0, 0, 1, 1],
				[0, 0, 0, 1],
				[0, 0, 0, 1],
				[0, 0, 0, 1],
				[1, 0, 0, 1],
				[0, 1, 1, 0]
			],
			k: [
				[1, 0, 0, 1],
				[1, 0, 0, 1],
				[1, 0, 0, 1],
				[1, 1, 1, 0],
				[1, 0, 0, 1],
				[1, 0, 0, 1]
			],
			l: [
				[1, 0, 0, 0],
				[1, 0, 0, 0],
				[1, 0, 0, 0],
				[1, 0, 0, 0],
				[1, 0, 0, 0],
				[1, 1, 1, 1]
			],
			m: [
				[1, 0, 0, 0, 1],
				[1, 1, 0, 1, 1],
				[1, 0, 1, 0, 1],
				[1, 0, 0, 0, 1],
				[1, 0, 0, 0, 1],
				[1, 0, 0, 0, 1]
			],
			n: [
				[1, 0, 0, 1],
				[1, 0, 0, 1],
				[1, 1, 0, 1],
				[1, 0, 1, 1],
				[1, 0, 0, 1],
				[1, 0, 0, 1]
			],
			o: [
				[0, 1, 1, 0],
				[1, 0, 0, 1],
				[1, 0, 0, 1],
				[1, 0, 0, 1],
				[1, 0, 0, 1],
				[0, 1, 1, 0]
			],
			p: [
				[1, 1, 1, 0],
				[1, 0, 0, 1],
				[1, 0, 0, 1],
				[1, 1, 1, 0],
				[1, 0, 0, 0],
				[1, 0, 0, 0]
			],
			q: [
				[0, 1, 1, 0, 0],
				[1, 0, 0, 1, 0],
				[1, 0, 0, 1, 0],
				[1, 0, 0, 1, 0],
				[1, 0, 0, 1, 0],
				[0, 1, 1, 0, 1]
			],
			r: [
				[1, 1, 1, 0],
				[1, 0, 0, 1],
				[1, 0, 0, 1],
				[1, 1, 1, 0],
				[1, 0, 0, 1],
				[1, 0, 0, 1]
			],
			s: [
				[0, 1, 1, 1],
				[1, 0, 0, 0],
				[0, 1, 0, 0],
				[0, 0, 1, 0],
				[0, 0, 0, 1],
				[1, 1, 1, 0]
			],
			t: [
				[1, 1, 1, 1, 1],
				[0, 0, 1, 0, 0],
				[0, 0, 1, 0, 0],
				[0, 0, 1, 0, 0],
				[0, 0, 1, 0, 0],
				[0, 0, 1, 0, 0]
			],
			u: [
				[1, 0, 0, 1],
				[1, 0, 0, 1],
				[1, 0, 0, 1],
				[1, 0, 0, 1],
				[1, 0, 0, 1],
				[0, 1, 1, 0]
			],
			v: [
				[1, 0, 0, 0, 1],
				[1, 0, 0, 0, 1],
				[0, 1, 0, 1, 0],
				[0, 1, 0, 1, 0],
				[0, 1, 0, 1, 0],
				[0, 0, 1, 0, 0]
			],
			w: [
				[1, 0, 0, 0, 0, 0, 1],
				[1, 0, 0, 1, 0, 0, 1],
				[1, 0, 0, 1, 0, 0, 1],
				[1, 0, 0, 1, 0, 0, 1],
				[1, 0, 0, 1, 0, 0, 1],
				[0, 1, 1, 0, 1, 1, 0]
			],
			x: [
				[1, 0, 0, 1],
				[1, 0, 0, 1],
				[1, 0, 0, 1],
				[0, 1, 1, 0],
				[1, 0, 0, 1],
				[1, 0, 0, 1]
			],
			y: [
				[1, 0, 0, 0, 1],
				[1, 0, 0, 0, 1],
				[0, 1, 0, 1, 0],
				[0, 0, 1, 0, 0],
				[0, 0, 1, 0, 0],
				[0, 0, 1, 0, 0]
			],
			z: [
				[1, 1, 1, 1],
				[0, 0, 0, 1],
				[0, 0, 1, 0],
				[0, 1, 0, 0],
				[1, 0, 0, 0],
				[1, 1, 1, 1]
			],
			' ': [
				[0, 0, 0, 0],
				[0, 0, 0, 0],
				[0, 0, 0, 0],
				[0, 0, 0, 0],
				[0, 0, 0, 0],
				[0, 0, 0, 0]
			]
		};
		var defaultOpts = {
			pixelWidth: 20,
			gap: 1,
			letterCls: 'letter',
			ct: document.body,
			bgColor: '#42a44d',
			delay: 2000,
			style: {
				'borderLeft': '10px solid #42a44d',
				'borderTop': '10px solid #259e47',
				'borderBottom': '10px solid #568647',
				'borderRight': '10px solid #186d31',
				'boxSizing': 'border-box'
			},
			handler: function() {}
		};

		var pixelHash = {},
			idx = 0;

		function create(str, opts) {
			var wordPielId = 'Pixel_' + (++idx);
			pixelHash[wordPielId] = new WordPixel(wordPielId, str, opts);
			return wordPielId;
		}

		function fadeRemove(wordPielId) {
			pixelHash[wordPielId].fadeRemove(function() {
				delete pixelHash[wordPielId];
			});
		}


		function WordPixel(wordPielId, str, opts) {
			this.init(wordPielId, str, opts);
			this.createWord();
		}

		WordPixel.prototype.init = function(wordPielId, str, opts) {
			this.wordStr = str;
			this.pixs = [];
			this.imgElems = [];
			this.pixNum = 0;
			this.id = wordPielId;
			this.config = _extend({}, defaultOpts, opts);
			if (this.config.imgs) {
				this.config.imgs.sort(function() {
					return Math.random() > 0.5 ? -1 : 1;
				});
			}
		};
		WordPixel.prototype.createLetter = function(ch) {
			var me = this,
				config = me.config;
			var letter = document.createElement('div');

			letter.className = config.letterCls;
			var arr = pixMap[ch];
			_css(letter, {
				position: 'relative',
				height: (config.pixelWidth + config.gap) * arr.length + 'px',
				width: (config.pixelWidth + config.gap) * arr[0].length + 'px',
				float: 'left',
				margin: '20px'
			});


			for (var row = 0; row < arr.length; row++) {
				for (var col = 0; col < arr[row].length; col++) {
					var p_v = arr[row][col];
					if (p_v === 1) {
						me.pixNum++;

						var pix = document.createElement('span'),
							pixStyle = {
								position: 'absolute',
								top: (config.pixelWidth + config.gap) * row + 'px',
								left: (config.pixelWidth + config.gap) * col + 'px',
								display: 'block',
								width: config.pixelWidth + 'px',
								height: config.pixelWidth + 'px',
								backgroundColor: config.bgColor,
								lineHeight: 0,
								overflow: 'hidden'
							},
							finalStyle = {};

						if (config.imgs) {
							var imgCount = config.imgs.length;
							var img = document.createElement('img');
							img.className = 'pix-img';
							var child = config.imgs[me.pixNum % imgCount];
							//如果是对象，则把对象的属性都放入img 标签
							//否则，是图片地址
							if (child && typeof child === 'object') {
								for (var key in child) {
									if (key === 'src') {
										img.setAttribute('data-src', child[key]);
									}else if(key === 'class'){
										img.className += (' ' + child[key]); 
									}else {
										img.setAttribute(key, child[key]);
									}
								}
							} else {
								//否则，是图片
								img.setAttribute('data-src', child);
							}

							img.style.visibility = 'hidden';
							img.addEventListener('click', function() {
								config.handler(this);
							});
							pix.appendChild(img);
							me.imgElems.push(img);
							_extend(finalStyle, pixStyle);
						} else {
							_extend(finalStyle, pixStyle, config.style || {});
						}

						if (config.fade) {
							finalStyle.opacity = 0;
						}
						_css(pix, finalStyle);
						letter.appendChild(pix);
						me.pixs.push(pix);
					}
				}
			}

			return letter;
		};

		WordPixel.prototype.createWord = function() {
			var me = this,
				config = me.config,
				str = me.wordStr.toLowerCase(),
				chs = str.split('');

			var letterCt = document.createElement('div');

			for (var i = 0; i < chs.length; i++) {
				var letter = me.createLetter(chs[i]);
				letterCt.appendChild(letter);
			}
			this.elem = letterCt;
			
			letterCt.className = 'ct-letter';
			letterCt.id = me.id;
			letterCt.style.overflow = 'hidden';
			letterCt.style.position = 'absolute';
			config.ct.appendChild(letterCt);
			letterCt.style.marginLeft = (-letterCt.offsetWidth/2) + 'px';
			letterCt.style.left = '50%'; 
			if (config.fade) {
				var randArr = getRandArray(me.pixs.length);
				for (var j = 0; j < randArr.length; j++) {
					(function(n) {
						setTimeout(function() {
							unfade(me.pixs[randArr[n]]);
						}, n * 30);

					})(j);
				}
			}

			if (config.imgs) {
				me.createImgWord();
			}
		};

		WordPixel.prototype.createImgWord = function() {
			var me = this,
				config = me.config;

			var randArr = getRandArray(me.imgElems.length);
			for (var i = 0; i < randArr.length; i++) {
				(function(idx) {
					setTimeout(function() {
						var pix = me.pixs[randArr[idx]],
							img = me.imgElems[randArr[idx]];
						fade(pix, function() {
							img.setAttribute('src', img.getAttribute('data-src'));
						});

						img.onload = function() {
							this.style.visibility  = 'visible';
							this.parentNode.style.backgroundColor = '#9DD2C7';
							var w = this.width,
								h = this.height;
							if (w < h) {
								_css(this, {
									width: config.pixelWidth + 'px',
									marginTop: ((w - h) / 2) * (config.pixelWidth / w) + 'px'
								});
							} else {
								_css(this, {
									height: config.pixelWidth + 'px',
									marginLeft: ((h - w) / 2) * (config.pixelWidth / h) + 'px'
								});
							}
							unfade(this.parentElement);
						}
					}, 20 * idx + me.imgElems.length * 30 + config.delay);
				})(i);
			}
		}

		WordPixel.prototype.fade = function(cb) {
			var me = this;
			fade(me.elem, function() {
				cb && cb(me.elem);
			}, 30);
		}

		WordPixel.prototype.remove = function(el) {
			_removeElement(el);
		}

		WordPixel.prototype.fadeRemove = function(cb) {
			var me = this;
			me.fade(function(el) {
				me.remove(el);
				cb && cb();
			});
		};

		function _extend(target, src1, src2) {
			if (arguments.length < 2) return target;
			var src;
			for (var i = 1; i < arguments.length; i++) {
				src = arguments[i];
				for (var key in src) {
					target[key] = src[key];
				}
			}
			return target;
		}

		function _css(elem, opts) {
			for (var attr in opts) {
				elem.style[attr] = opts[attr];
			}
		}

		function _removeElement(_element) {
			var _parentElement = _element.parentNode;
			if (_parentElement) {
				_parentElement.removeChild(_element);
			}
		}

		function fade(element, cb, time) {
			var op = 1; // initial opacity
			var time = time || 10;
			var timer = setInterval(function() {
				if (op <= 0.1) {
					clearInterval(timer);
					element.style.display = 'none';
					cb && cb();
				}
				element.style.opacity = op;
				element.style.filter = 'alpha(opacity=' + op * 100 + ")";
				op -= op * 0.1;
			}, time);
		}

		function unfade(element, cb) {
			var op = 0.1; // initial opacity
			element.style.display = 'block';
			var timer = setInterval(function() {
				if (op >= 1) {
					clearInterval(timer);
					cb && cb();
				}
				element.style.opacity = op;
				element.style.filter = 'alpha(opacity=' + op * 100 + ")";
				op += op * 0.05;
			}, 10);
		}

		function getRandArray(len) {
			var arr = [];
			for (var i = 0; i < len; i++) {
				arr.push(i);
			}
			arr.sort(function() {
				return Math.random() > 0.5 ? -1 : 1;
			});
			return arr;
		}



		return {
			create: create,
			fadeRemove: fadeRemove
		};
	})();

	return Pixel;
});