(window.MIP=window.MIP||[]).push({name:"mip-bridge-baidu",func:function(){var e=function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="https://c.mipcdn.com/static/v2/",n(n.s=318)}({0:function(e,t){e.exports=__mipComponentsWebpackHelpers__["@babel/runtime/helpers/esm/classCallCheck"]},1:function(e,t){e.exports=__mipComponentsWebpackHelpers__["@babel/runtime/helpers/esm/createClass"]},318:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return _});var r=n(0),i=n.n(r),o=n(1),u=n.n(o),s=n(6),p=n.n(s),c=n(4),l=n.n(c),a=n(5),d=n.n(a),m=MIP,b=m.CustomElement,f=m.util.log("mip-bridge-baidu"),_=function(e){function t(){return i()(this,t),p()(this,l()(t).apply(this,arguments))}return d()(t,e),u()(t,[{key:"build",value:function(){var e=this.getBridgeScriptUrl();if(e){var t=this.element,n=document.createElement("script");n.src=e,t.appendChild(n)}}},{key:"getBridgeScriptUrl",value:function(){var e=this.element,t=e.getAttribute("site-id");if(e.hasAttribute("siteid")&&(t=t||e.getAttribute("siteid"),f.warn("siteId 属性将被废弃，请使用 site-id 代替。")),t)return"//p.qiao.baidu.com/cps/b.js?siteId=".concat(encodeURIComponent(t));var n=e.getAttribute("token");return n?"//hm.baidu.com/hm.js?".concat(encodeURIComponent(n)):""}}]),t}(b)},4:function(e,t){e.exports=__mipComponentsWebpackHelpers__["@babel/runtime/helpers/esm/getPrototypeOf"]},5:function(e,t){e.exports=__mipComponentsWebpackHelpers__["@babel/runtime/helpers/esm/inherits"]},6:function(e,t){e.exports=__mipComponentsWebpackHelpers__["@babel/runtime/helpers/esm/possibleConstructorReturn"]}});e.__esModule&&(e=e.default),e&&MIP.registerElement("mip-bridge-baidu",e)}});