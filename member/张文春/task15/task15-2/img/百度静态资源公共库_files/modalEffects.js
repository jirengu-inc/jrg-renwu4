/*!
 * classie - class helper functions
 * from bonzo https://github.com/ded/bonzo
 * 
 * classie.has( elem, 'my-class' ) -> true/false
 * classie.add( elem, 'my-new-class' )
 * classie.remove( elem, 'my-unwanted-class' )
 * classie.toggle( elem, 'my-class' )
 */

/*jshint browser: true, strict: true, undef: true */
/*global define: false */

(function(window) {

    'use strict';

    // class helper functions from bonzo https://github.com/ded/bonzo
    function classReg(className) {
        return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
    }

    // classList support for class management
    // altho to be fair, the api sucks because it won't accept multiple classes at once
    var hasClass, addClass, removeClass;

    if ('classList' in document.documentElement) {
        hasClass = function(elem, c) {
            return elem.classList.contains(c);
        };
        addClass = function(elem, c) {
            elem.classList.add(c);
        };
        removeClass = function(elem, c) {
            elem.classList.remove(c);
        };
    } else {
        hasClass = function(elem, c) {
            return classReg(c).test(elem.className);
        };
        addClass = function(elem, c) {
            if (!hasClass(elem, c)) {
                elem.className = elem.className + ' ' + c;
            }
        };
        removeClass = function(elem, c) {
            elem.className = elem.className.replace(classReg(c), ' ');
        };
    }

    function toggleClass(elem, c) {
        var fn = hasClass(elem, c) ? removeClass: addClass;
        fn(elem, c);
    }

    var classie = {
        // full names
        hasClass: hasClass,
        addClass: addClass,
        removeClass: removeClass,
        toggleClass: toggleClass,
        // short names
        has: hasClass,
        add: addClass,
        remove: removeClass,
        toggle: toggleClass
    };

    // transport
    if (typeof define === 'function' && define.amd) {
        // AMD
        define(classie);
    } else {
        // browser global
        window.classie = classie;
    }

})(window);

/**
 * modalEffects.js v1.0.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2013, Codrops
 * http://www.codrops.com
 */
var ModalEffects = (function() {
	
	var overlay = document.querySelector('.md-overlay');
	var popup = function(callback, This){

		var el = This;
		var modal = document.querySelector('#modalbox'),
		close = modal.querySelector('.md-close');

		function removeModal(hasPerspective) {
			classie.remove(modal, 'md-show');

			if (hasPerspective) {
				classie.remove(document.documentElement, 'md-perspective');
			}
		}

		function removeModalHandler() {
			if($popajax.readyState !== 4){
				$popajax.abort();
			}
			removeModal(classie.has(el, 'md-setperspective'));
		}
		
		
		//classie.remove(modal, lastEffect);
		//var rand = Math.floor(Math.random() * 19) + 1;
		//lastEffect = 'md-effect-' + rand;
		
		
		classie.add(modal, "md-effect-1");
		modal.style.left = $("#resultbox").offset().left + "px";
		classie.add(modal, 'md-show');

		overlay.removeEventListener('click', removeModalHandler);
		overlay.addEventListener('click', removeModalHandler);

		if(callback){ callback(This); }

		if (classie.has(el, 'md-setperspective')) {
			setTimeout(function() {
				classie.add(document.documentElement, 'md-perspective');
			}, 25);
		}

		close.addEventListener('click', function(ev) {
			ev.stopPropagation();
			removeModalHandler();
		});

	}
	
    function init(callback) {
		
        $("#resultbox").on("click", "dd a", function(){
			var This = this;
			popup(callback, This);
		});
		$("#intro").on("click", "img", function(){
			var This = this;
			popup(callback, This);
		});
		
    }

    return init;

})();