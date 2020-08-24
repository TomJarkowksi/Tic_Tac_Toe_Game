parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"uGqo":[function(require,module,exports) {

},{}],"YWmk":[function(require,module,exports) {
"use strict";function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function i(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}Object.defineProperty(exports,"__esModule",{value:!0}),exports.Modal=void 0;var n=function(){function t(){e(this,t);var i=document.querySelector("body");this.div=document.createElement("div"),this.h1=document.createElement("h1"),this.div.classList.add("modalDiv"),this.h1.classList.add("modalH1"),i.appendChild(this.div),this.div.appendChild(this.h1),this.time=3e3}return i(t,[{key:"displayModal",value:function(e){var t=this;this.h1.textContent="-"==e?"Hard game! Draw":"Congratulations!!! Player won: ".concat(e),this.div.style.display="flex",setTimeout(function(){t.div.style.display="none"},this.time)}}]),t}();exports.Modal=n;
},{}],"fFAv":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Game=void 0;var e=require("./Modal.js");function n(e){return a(e)||i(e)||r(e)||t()}function t(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function r(e,n){if(e){if("string"==typeof e)return o(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?o(e,n):void 0}}function i(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function a(e){if(Array.isArray(e))return o(e)}function o(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function l(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}var s=function t(){var r=this;l(this,t),this.pick=function(e){var n=e.target,t=n.dataset,i=t.row,a=t.column;if(r.round%2==0){if(n.innerHTML==r.playerO||n.innerHTML==r.playerX||n.parentNode.innerHTML==r.playerO||n.parentNode.innerHTML==r.playerX)return;r.nextPlayer.textContent="O",n.innerHTML=r.playerX,r.turn="X"}else{if(n.innerHTML==r.playerO||n.innerHTML==r.playerX||n.parentNode.innerHTML==r.playerO||n.parentNode.innerHTML==r.playerX)return;r.nextPlayer.textContent="X",n.innerHTML=r.playerO,r.turn="O"}r.round++,r.board[i][a]=r.turn,r.check()},this.check=function(){var e=r.board.reduce(function(e,n){return e.concat(n)});if("O"==e[8]&&"O"==e[7]&&"O"==e[6]||"O"==e[3]&&"O"==e[4]&&"O"==e[5]||"O"==e[0]&&"O"==e[1]&&"O"==e[2]||"O"==e[0]&&"O"==e[3]&&"O"==e[6]||"O"==e[1]&&"O"==e[4]&&"O"==e[7]||"O"==e[2]&&"O"==e[5]&&"O"==e[8]||"O"==e[6]&&"O"==e[4]&&"O"==e[2]||"O"==e[0]&&"O"==e[4]&&"O"==e[8])r.displayResult("O");else if("X"==e[8]&&"X"==e[7]&&"X"==e[6]||"X"==e[3]&&"X"==e[4]&&"X"==e[5]||"X"==e[0]&&"X"==e[1]&&"X"==e[2]||"X"==e[0]&&"X"==e[3]&&"X"==e[6]||"X"==e[1]&&"X"==e[4]&&"X"==e[7]||"X"==e[2]&&"X"==e[5]&&"X"==e[8]||"X"==e[6]&&"X"==e[4]&&"X"==e[2]||"X"==e[0]&&"X"==e[4]&&"X"==e[8])r.displayResult("X");else{if(""===e[0]||""===e[1]||""===e[2]||""===e[3]||""===e[4]||""===e[5]||""===e[6]||""===e[7]||""===e[8])return;r.displayResult("-")}},this.displayResult=function(e){r.modal.displayModal(e),"X"==e?(r.winX++,r.winsPlayerX.textContent=r.winX):"O"==e&&(r.winO++,r.winsPlayerO.textContent=r.winO),r.winPlayer.textContent=e,r.clearBoard()},this.clearBoard=function(){r.boxes.forEach(function(e){e.innerHTML=""}),r.board=[["","",""],["","",""],["","",""]]},this.resetResult=function(){r.winO=0,r.winX=0,r.winsPlayerO.textContent=r.winO,r.winsPlayerX.textContent=r.winX,r.winPlayer.textContent="-",r.clearBoard()},this.playerX='<i class="fas fa-times"></i>',this.playerO='<i class="far fa-circle"></i>',this.winPlayer=document.querySelector(".info .win span"),this.nextPlayer=document.querySelector(".info .next span"),this.winsPlayerX=document.querySelector(".playerX span"),this.winsPlayerO=document.querySelector(".playerO span"),this.boxes=n(document.querySelectorAll(".box")),this.turn="",this.round=0,this.winX=0,this.winO=0,this.modal=new e.Modal,this.board=[["","",""],["","",""],["","",""]]};exports.Game=s;
},{"./Modal.js":"YWmk"}],"sMVY":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.toggle=void 0;var o=function(){var o=document.querySelector(".toggle__light"),e=document.querySelector(".toggle__dark"),t=document.querySelector(".conteiner"),l=document.querySelector("#checktoggle"),r=document.querySelector(".board"),c=document.querySelectorAll(".box"),a=document.querySelector(".info"),y=document.querySelector(".info button"),d=document.querySelector("header"),u=document.querySelector(".modalDiv"),n=document.querySelector(".modalH1"),s=localStorage.getItem("dark");s=JSON.parse(s),l.addEventListener("click",function(){s=!s,localStorage.setItem("dark",JSON.stringify(s)),b(s)});var b=function(l){l?(o.style.opacity="0.5",e.style.opacity="1",t.style.backgroundColor="#242526",document.body.style.backgroundColor="#242526",d.style.backgroundColor="#242526",d.style.boxShadow="0 0 7px 2px black",r.style.backgroundColor="#18191A",r.style.boxShadow="0 0 7px 2px black",u.style.backgroundColor="#18191A",n.style.color="white",a.style.backgroundColor="#18191A",a.style.boxShadow="0 0 7px 2px black",a.style.color="white",y.style.backgroundColor="#18191A",y.style.border="2px solid gray",y.style.color="white"):(o.style.opacity="1",e.style.opacity="0.5",t.style.backgroundColor="#F7F7F7",document.body.style.backgroundColor="#F7F7F7",r.style.backgroundColor="gray",r.style.boxShadow="0 0 7px 0 black",d.style.backgroundColor="gray",d.style.boxShadow="0 0 7px 0 black",a.style.backgroundColor="gray",a.style.boxShadow="0 0 7px 0px black",u.style.backgroundColor="gray",n.style.color="white",y.style.backgroundColor="white",y.style.border="2px solid black",y.style.color="black",c.forEach(function(o){o.style.boxShadow="0 0 7px 0px black"}))};b(s),s&&(document.querySelector("#checktoggle").checked=!0)};exports.toggle=o;
},{}],"mahc":[function(require,module,exports) {
"use strict";require("../scss/style.scss");var r=require("./Game.js"),e=require("./toggle.js");function t(r){return u(r)||i(r)||o(r)||n()}function n(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function o(r,e){if(r){if("string"==typeof r)return c(r,e);var t=Object.prototype.toString.call(r).slice(8,-1);return"Object"===t&&r.constructor&&(t=r.constructor.name),"Map"===t||"Set"===t?Array.from(r):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?c(r,e):void 0}}function i(r){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(r))return Array.from(r)}function u(r){if(Array.isArray(r))return c(r)}function c(r,e){(null==e||e>r.length)&&(e=r.length);for(var t=0,n=new Array(e);t<e;t++)n[t]=r[t];return n}var a=t(document.querySelectorAll(".box")),s=document.querySelector("button"),l=new r.Game;(0,e.toggle)(),a.forEach(function(r){return r.addEventListener("click",function(r){return l.pick(r)})}),s.addEventListener("click",function(){return l.resetResult()});
},{"../scss/style.scss":"uGqo","./Game.js":"fFAv","./toggle.js":"sMVY"}]},{},["mahc"], null)
//# sourceMappingURL=js.f5654c4b.js.map