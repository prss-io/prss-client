/*! For license information please see index.js.LICENSE.txt */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.PRSS=e():t.PRSS=e()}(self,()=>(()=>{"use strict";var t={d:(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r:t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},e={};function n(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function r(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?n(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function u(t){return function(t){if(Array.isArray(t))return a(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||c(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var n=[],r=!0,o=!1,u=void 0;try{for(var i,c=t[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!e||n.length!==e);r=!0);}catch(t){o=!0,u=t}finally{try{r||null==c.return||c.return()}finally{if(o)throw u}}return n}(t,e)||c(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(t,e){if(t){if("string"==typeof t)return a(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(t,e):void 0}}function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}t.r(e),t.d(e,{appendToBody:()=>k,appendToHead:()=>x,findInStructure:()=>N,formattedDate:()=>S,getAllProps:()=>y,getComponent:()=>M,getItem:()=>E,getItemBySlug:()=>D,getItemChildren:()=>L,getItemChildrenBySlug:()=>z,getItems:()=>C,getJsonProp:()=>p,getPathUrl:()=>v,getProp:()=>s,getRawPostItem:()=>j,getSiteUrl:()=>g,getStructurePaths:()=>O,hasItem:()=>H,init:()=>d,objGet:()=>h,propExists:()=>m,removeTagsFromElem:()=>I,setContent:()=>T,shuffle:()=>F,stripShortcodes:()=>P,stripTags:()=>A,timeAgo:()=>b,truncateStr:()=>B,truncateString:()=>w,walkStructure:()=>R});var l=null,f=null,d=function(t){t?l=t:console.error("Attempted to load empty data",t)},s=function(t,e){if(l||e)return h(t,e||l)},p=function(t){var e;if(m(t))try{e=JSON.parse(s(t))}catch(e){console.error("Prop '".concat(t,"' could not be parsed."),e)}return e},m=function(t){return void 0!==s(t)},h=function(t,e){return t.split(".").reduce((function(t,e){return t?t[e]:""}),e)},y=function(){return l},g=function(){var t=s("site.url");return t?t.replaceAll("localhost:9000","localhost:3000"):"http://localhost:3000"},v=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=g();return e&&e.length&&"/"!==e[e.length-1]&&(e+="/"),t&&t.length&&"/"!==t[t.length-1]&&(t+="/"),e+t},b=function(t){var e=function(t){for(var e=0,n=[["year",31536e3],["month",2592e3],["day",86400],["hour",3600],["minute",60],["second",1]];e<n.length;e++){var r=i(n[e],2),o=r[0],u=r[1],c=Math.floor(t/u);return c>=1?{interval:c,epoch:o}:{interval:0,epoch:"minute"}}}(Math.floor((new Date-new Date(t))/1e3)),n=e.interval,r=e.epoch,o=1===n?"":"s";return"".concat(n," ").concat(r).concat(o," ago")},S=function(t){var e=new Date(t),n=new Intl.DateTimeFormat("en",{year:"numeric"}).format(e),r=new Intl.DateTimeFormat("en",{month:"short"}).format(e),o=new Intl.DateTimeFormat("en",{day:"2-digit"}).format(e);return"".concat(o," ").concat(r,", ").concat(n)},O=function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];return e.forEach((function(e){var o=e.key,u="".concat(n,"/").concat(o);r.push(u),e.children&&t(e.children,u,r)})),r},j=function(t,e){return(e||PRSSItems||[]).find((function(e){return e.uuid===t}))},P=function(t){var e=t;return u(e.matchAll(/\[([a-zA-Z]+)=?([a-zA-Z0-9]+)?\](.+?)\[\/[a-zA-Z]+\]?/gi)).forEach((function(t){var n=i(t,1)[0];n&&(e=e.replace(n,""))})),e},w=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:50,n=t.replace(/"/g,"").replace(/\s+/g," ").trim();return n?n.length<=e?n:"".concat(n.substring(0,e),"..."):null},I=function(t,e){return e.forEach((function(e){return t.querySelectorAll(e).forEach((function(t){return t.innerHTML=""}))}))},A=function(t){var e=P(t),n=(new DOMParser).parseFromString(e,"text/html");return I(n,["pre","h1","h2"]),n.body.textContent||""},T=function(t,e){var n,r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],o=document.querySelector(t);if(!o&&r&&t.includes(".")&&2===t.split(".").length){var u=t.split("."),c=i(u,2),a=c[0],l=c[1];(o=document.createElement(a)).className=l,n=!0}o&&(o.innerHTML=e),n&&document.body.appendChild(o)},D=function(t){return C().find((function(e){return e.slug===t}))},M=function(t){return C().find((function(e){return"component"===e.template&&e.slug===t}))},E=function(t){var e=C().find((function(e){return e.uuid===t}));if(e)return e;console.error("getItem: No item found with id ".concat(t))},x=function(t){return document.head.innerHTML+=t},k=function(t){return document.body.innerHTML+=t},C=function(t,e,n){if(!PRSSItems&&!n)return console.error("getItems: No PRSSItems found."),[];var o=s("site").structure,u=O(o).map((function(t){var e,n=t.split("/").map((function(t){return t?(e=j(t)).slug:""})).slice(2).join("/");return e?r({},e,{path:n,url:v(n)}):null}));f||!u.length||n||(f=u);var i=u;return t&&(i=i.filter((function(e){return e.template===t}))),e&&(i=i.sort((function(t,e){return e.createdAt-t.createdAt}))),n&&(i=i.filter((function(t){return!!n.find((function(e){return e.uuid===t.uuid}))}))),i},R=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=u(t),o=function t(n){var o=n.key,u=n.children,i=void 0===u?[]:u,c=j(o);return c?r({key:o},e?e(c):{},{children:i.map(t)}):n};return n=n.map((function(t){return o(t)}))},F=function(){for(var t,e,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],r=u(n),o=r.length;0!==o;)e=Math.floor(Math.random()*o),t=r[o-=1],r[o]=r[e],r[e]=t;return r},H=function(t,e){return JSON.stringify(e).includes(t)},N=function(t){var e;return s("site").structure.some((function n(r){return r.key===t?(e=r,!0):!!r.children&&r.children.some(n)})),e},L=function(t){var e=N(t);return(e&&e.children?e.children:[]).map((function(t){return E(t.key)}))},z=function(t){var e,n=null===(e=D(t))||void 0===e?void 0:e.uuid;return L(n)},B=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:50;return t.length>e?t.substring(0,e)+"...":t};return e})());
//# sourceMappingURL=index.js.map