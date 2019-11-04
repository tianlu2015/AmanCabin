/**
 * termynal.js
 * A lightweight, modern and extensible animated terminal window, using
 * async/await.
 *
 * @author Ines Montani <ines@ines.io>
 * @version 0.0.1
 * @license MIT
 */'use strict';var _createClass=function(){function a(b,c){for(var e,d=0;d<c.length;d++)e=c[d],e.enumerable=e.enumerable||!1,e.configurable=!0,'value'in e&&(e.writable=!0),Object.defineProperty(b,e.key,e)}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}();function _toConsumableArray(a){if(Array.isArray(a)){for(var b=0,c=Array(a.length);b<a.length;b++)c[b]=a[b];return c}return Array.from(a)}function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError('Cannot call a class as a function')}var Termynal=function(){function a(){var b=0<arguments.length&&void 0!==arguments[0]?arguments[0]:'#termynal',c=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};_classCallCheck(this,a),this.container='string'==typeof b?document.querySelector(b):b,this.pfx='data-'+(c.prefix||'ty'),this.startDelay=c.startDelay||parseFloat(this.container.getAttribute(this.pfx+'-startDelay'))||600,this.typeDelay=c.typeDelay||parseFloat(this.container.getAttribute(this.pfx+'-typeDelay'))||90,this.lineDelay=c.lineDelay||parseFloat(this.container.getAttribute(this.pfx+'-lineDelay'))||1500,this.progressLength=c.progressLength||parseFloat(this.container.getAttribute(this.pfx+'-progressLength'))||40,this.progressChar=c.progressChar||this.container.getAttribute(this.pfx+'-progressChar')||'\u2588',this.cursor=c.cursor||this.container.getAttribute(this.pfx+'-cursor')||'\u258B',c.noInit||this.init()}return _createClass(a,[{key:'init',value:function init(){this.lines=[].concat(_toConsumableArray(this.container.querySelectorAll('['+this.pfx+']')));var b=getComputedStyle(this.container);this.container.style.width=b.width,this.container.style.height=b.height,this.container.setAttribute('data-termynal',''),this.container.innerHTML='',this.start()}},{key:'start',value:async function start(){await this._wait(this.startDelay);var _iteratorNormalCompletion=!0,_didIteratorError=!1,_iteratorError=void 0;try{for(var c,b=this.lines[Symbol.iterator]();!(_iteratorNormalCompletion=(c=b.next()).done);_iteratorNormalCompletion=!0){var d=c.value,e=d.getAttribute(this.pfx),f=d.getAttribute(this.pfx+'-delay')||this.lineDelay;'input'==e?(d.setAttribute(this.pfx+'-cursor',this.cursor),await this.type(d),await this._wait(f)):'progress'==e?(await this.progress(d),await this._wait(f)):(this.container.appendChild(d),await this._wait(f)),d.removeAttribute(this.pfx+'-cursor')}}catch(g){_didIteratorError=!0,_iteratorError=g}finally{try{!_iteratorNormalCompletion&&b.return&&b.return()}finally{if(_didIteratorError)throw _iteratorError}}}},{key:'type',value:async function type(b){var c=[].concat(_toConsumableArray(b.textContent)),d=b.getAttribute(this.pfx+'-typeDelay')||this.typeDelay;b.textContent='',this.container.appendChild(b);var _iteratorNormalCompletion2=!0,_didIteratorError2=!1,_iteratorError2=void 0;try{for(var f,g,e=c[Symbol.iterator]();!(_iteratorNormalCompletion2=(f=e.next()).done);_iteratorNormalCompletion2=!0)g=f.value,await this._wait(d),b.textContent+=g}catch(h){_didIteratorError2=!0,_iteratorError2=h}finally{try{!_iteratorNormalCompletion2&&e.return&&e.return()}finally{if(_didIteratorError2)throw _iteratorError2}}}},{key:'progress',value:async function progress(b){var c=b.getAttribute(this.pfx+'-progressLength')||this.progressLength,d=b.getAttribute(this.pfx+'-progressChar')||this.progressChar,e=d.repeat(c);b.textContent='',this.container.appendChild(b);for(var f=1;f<e.length+1;f++){await this._wait(this.typeDelay);var g=Math.round(100*(f/e.length));b.textContent=e.slice(0,f)+' '+g+'%'}}},{key:'_wait',value:function _wait(b){return new Promise(function(c){return setTimeout(c,b)})}}]),a}();if(document.currentScript.hasAttribute('data-termynal-container')){var containers=document.currentScript.getAttribute('data-termynal-container');containers.split('|').forEach(function(a){return new Termynal(a)})}