(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"32d8379f4a56df014137":function(e,t,r){!function(){var t={262:function(e,t,r){"use strict";var n=r(586);function o(){}function i(){}i.resetWarningCache=o,e.exports=function(){function e(e,t,r,o,i,a){if(a!==n){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}function t(){return e}e.isRequired=e;var r={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:o};return r.PropTypes=r,r}},980:function(e,t,r){e.exports=r(262)()},586:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},592:function(e,t,r){!function(){"use strict";var t={d:function(e,r){for(var n in r)t.o(r,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:r[n]})},o:function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r:function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},n={};t.r(n),t.d(n,{useElapsedTime:function(){return u}});var o=r(297);function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null!=r){var n,o,i=[],a=!0,u=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);a=!0);}catch(e){u=!0,o=e}finally{try{a||null==r.return||r.return()}finally{if(u)throw o}}return i}}(e,t)||function(e,t){if(e){if("string"==typeof e)return a(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?a(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var u=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.duration,n=t.onComplete,a=t.startAt,u=void 0===a?0:a,l=t.autoResetKey,s=i((0,o.useState)(u),2),f=s[0],p=s[1],d=(0,o.useRef)(-1e3*u),y=(0,o.useRef)(null),m=(0,o.useRef)(null),b=(0,o.useRef)(null),v=(0,o.useRef)(!1),g=(0,o.useRef)(!1),h=(0,o.useRef)(0),w=(0,o.useCallback)(function(e){h.current+=1,p("number"==typeof e?e:u)},[]),O=function e(t){var o=t/1e3;if(null===m.current)return m.current=o,void(y.current=requestAnimationFrame(e));var i=o-m.current;if(m.current=o,p(function(e){var t=e+i;return"number"!=typeof r||t<r?t:(g.current=!0,r)}),g.current){if("function"==typeof n){d.current+=1e3*r;var a=d.current/1e3,u=n(a)||{},c=u.shouldRepeat,l=void 0!==c&&c,s=u.delay,f=void 0===s?0:s,h=u.newStartAt;l&&v.current&&(b.current=setTimeout(function(){w(h)},1e3*f))}}else y.current=requestAnimationFrame(e)},S=function(){cancelAnimationFrame(y.current),clearTimeout(b.current),m.current=null};return c(function(){return e&&(y.current=requestAnimationFrame(O)),S},[e]),c(function(){e&&v.current&&(S(),y.current=requestAnimationFrame(O))},[r]),c(function(){v.current&&w()},[l]),c(function(){e&&g.current&&(S(),y.current=requestAnimationFrame(O)),g.current=!1},[h.current]),c(function(){return v.current=!0,function(){v.current=!1}},[]),{elapsedTime:f,reset:w}},c="undefined"==typeof window?o.useEffect:o.useLayoutEffect;e.exports=n}()},297:function(e){"use strict";e.exports=r("8af190b70a6bc55c6f1b")}},n={};function o(e){var r=n[e];if(void 0!==r)return r.exports;var i=n[e]={exports:{}};return t[e](i,i.exports,o),i.exports}o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,{a:t}),t},o.d=function(e,t){for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var i={};!function(){"use strict";o.r(i),o.d(i,{CountdownCircleTimer:function(){return R}});var e=o(297),t=o.n(e),r=function(e){return{position:"relative",width:e,height:e}},n={display:"flex",justifyContent:"center",alignItems:"center",position:"absolute",left:0,top:0,width:"100%",height:"100%"},a=function(e){return e.match(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/)},u=function(e,t){return"Invalid prop '".concat(e,"' supplied to '").concat(t,"'")},c=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"array";return new Error("".concat(u(e,t),". Expect ").concat("array"===r?"an array of tuples where the first element is a":""," HEX color code string.\n ."))},l=function(e,t){return 0===t?0:"number"==typeof e?t-e:0},s=o(980),f=o.n(s),p={duration:f().number.isRequired,colors:function(e,t,r){var n=e[t];return"string"==typeof n?function(e,t,r){if(!a(n))return c(t,r,"string")}(0,t,r):function(e,t,r){for(var n=0;n<e.length;n+=1){var o=e[n][0],i=e[n][1];if(!a(o))return c(t,r);if(!(void 0===i||i>=0&&i<=1))return new Error("".concat(u(t,r),".\n        Expect an array of tuples where the second element is a number between 0 and 1 representing color transition duration."))}}(n,t,r)},children:f().oneOfType([f().func,f().node]),size:f().number,strokeWidth:f().number,trailStrokeWidth:f().number,trailColor:f().string,isPlaying:f().bool,strokeLinecap:f().oneOf(["round","square"]),isLinearGradient:f().bool,gradientUniqueKey:f().string,onComplete:f().func,ariaLabel:f().string,renderAriaTime:f().func,initialRemainingTime:f().number,rotation:f().oneOf(["clockwise","counterclockwise"])};function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function y(e,t){if(e){if("string"==typeof e)return m(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?m(e,t):void 0}}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var b=function(e){var r=e.gradientId,n=e.colors,o=e.defs,i=void 0===o?"defs":o,a=e.linearGradient,u=void 0===a?"linearGradient":a,c=e.stop,l=void 0===c?"stop":c;return t().createElement(i,null,t().createElement(u,{id:r,x1:"1",y1:"0",x2:"0",y2:"0"},function(e){var t="string"==typeof e;if(t||1===e.length)return[{offset:1,stopColor:t?e:e[0][0],key:0}];var r,n=e.length,o=0;return[{offset:0,stopColor:e[0][0],key:0}].concat(function(e){if(Array.isArray(e))return m(e)}(r=e.map(function(e,t){var r,i=(2,function(e){if(Array.isArray(e))return e}(r=e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i=[],a=!0,u=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(i.push(n.value),2!==i.length);a=!0);}catch(e){u=!0,o=e}finally{try{a||null==r.return||r.return()}finally{if(u)throw o}}return i}}(r)||y(r,2)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),a=i[0],u=i[1];return o+=u,{offset:n===t+1?1:o,stopColor:a,key:t+1}}))||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(r)||y(r)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())}(n).map(function(e){return t().createElement(l,d({},e,{key:e.key}))})))},v=f().oneOfType([f().func,f().string]);b.propTypes={gradientId:f().string.isRequired,colors:p.colors,defs:v,linearGradient:v,stop:v};var g=o(592),h=function(e,t,r,n){return 0===n?r:t+r*(e/n)};function w(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function O(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?w(Object(r),!0).forEach(function(t){S(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):w(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function S(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var j=function(e){var t=e.r,r=e.g,n=e.b,o=e.opacity;return"rgba(".concat(t,", ").concat(r,", ").concat(n,", ").concat(o,")")},T=function(e,t){if(1===e.length)return j(e[0]);var r=e.find(function(e){var r=e.colorEndTime;return t<=r});if(void 0===r.duration)return j(r);var n=t-r.colorStartTime,o=0|h(n,r.r,r.goalR,r.duration),i=0|h(n,r.g,r.goalG,r.duration),a=0|h(n,r.b,r.goalB,r.duration);return j({r:o,g:i,b:a,opacity:r.opacity})},P={position:"absolute",width:"1px",height:"1px",margin:"-1px",border:0,clip:"rect(0 0 0 0)",padding:0,overflow:"hidden",whiteSpace:"nowrap",wordWrap:"normal"};function k(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i=[],a=!0,u=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);a=!0);}catch(e){u=!0,o=e}finally{try{a||null==r.return||r.return()}finally{if(u)throw o}}return i}}(e,t)||function(e,t){if(e){if("string"==typeof e)return A(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?A(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function A(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var E=function(t){var o=t.isPlaying,i=t.size,a=t.strokeWidth,u=t.duration,c=t.initialRemainingTime,s=t.colors,f=t.isLinearGradient,p=t.gradientUniqueKey,d=t.onComplete,y=t.rotation,m=(0,e.useRef)({duration:u,startAt:l(c,u)}).current,b=m.duration,v=m.startAt,w=(0,e.useMemo)(function(){return function(e,t,r){var n=e/2,o=t/2,i=n-o,a=2*i,u="clockwise"===y?"1,0":"0,1",c=2*Math.PI*i;return{path:"m ".concat(n,",").concat(o,"\n          a ").concat(i,",").concat(i," 0 ").concat(u," 0,").concat(a,"\n          a ").concat(i,",").concat(i," 0 ").concat(u," 0,-").concat(a),pathLength:c}}(i,a)},[i,a,y]),S=w.path,A=w.pathLength,E=(0,e.useMemo)(function(){return e=b,t=function(e,t){var r=function(e){return e.map(function(e){var t=e[0].replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,function(e,t,r,n){return"#".concat(t).concat(t).concat(r).concat(r).concat(n).concat(n)}).substring(1).match(/.{2}/g).map(function(e){return parseInt(e,16)});return[{r:t[0],g:t[1],b:t[2],opacity:1},e[1]]})}(e);if(!t)return r;var n=0;return r.map(function(e,t){var o=r.length===t+1,i="0%";if(t>0){var a=r[t-1][1],u=Math.round(100*a);(n+=u)>100||o?(n=100,i="100%"):i="".concat(n,"%")}var c={offset:i,stopColor:j(e[0]),key:t};return[O(O({},e[0]),{},{gradient:c}),e[1]]})}("string"==typeof s?[[s,1]]:s,f),r=0,t.map(function(n,o){var i=t.length===o+1;if(r>=e||i)return r=e,O(O({},n[0]),{},{colorEndTime:r});var a=r,u=void 0!==n[1]?a+n[1]*e:e,c=u>=e?e:u,l=t[o+1][0],s={goalR:l.r-n[0].r,goalG:l.g-n[0].g,goalB:l.b-n[0].b};return r=c,O(O(O({},n[0]),s),{},{colorStartTime:a,colorEndTime:c,duration:c-a})});var e,t,r},[s,b,f]),C=(0,e.useMemo)(function(){return"countdown-circle-timer-gradient-".concat(p||Math.random().toString(36).substring(2))},[p]),x=(0,g.useElapsedTime)(o,{duration:b,startAt:v,onComplete:"function"==typeof d?function(){var e=k(d.apply(void 0,arguments)||[],2),t=e[0],r=void 0!==t&&t,n=e[1];return{shouldRepeat:r,delay:(void 0===n?0:n)/1e3,newStartAt:0}}:void 0}).elapsedTime;return{path:S,pathLength:A,gradientId:C,stroke:T(E,x),strokeDashoffset:h(x,0,A,b),timeProps:{remainingTime:Math.ceil(b-x),elapsedTime:x},styles:{wrapperStyle:r(i),timeStyle:n,visuallyHidden:P}}};function C(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function x(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?C(Object(r),!0).forEach(function(t){I(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):C(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function I(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var R=function(e){var r=e.size,n=e.strokeWidth,o=e.trailStrokeWidth,i=e.trailColor,a=e.duration,u=e.isPlaying,c=e.colors,l=e.strokeLinecap,s=e.children,f=e.isLinearGradient,p=e.gradientUniqueKey,d=e.onComplete,y=e.ariaLabel,m=e.renderAriaTime,v=e.initialRemainingTime,g=e.rotation,h=E({isPlaying:u,size:r,strokeWidth:Math.max(n,null!=o?o:0),duration:a,initialRemainingTime:v,colors:c,isLinearGradient:f,gradientUniqueKey:p,onComplete:d,rotation:g}),w=h.path,O=h.pathLength,S=h.stroke,j=h.strokeDashoffset,T=h.gradientId,P=h.styles,k=h.timeProps;return t().createElement("div",{style:P.wrapperStyle,"aria-label":y},t().createElement("svg",{width:r,height:r,xmlns:"http://www.w3.org/2000/svg"},f&&t().createElement(b,{colors:c,gradientId:T}),t().createElement("path",{d:w,fill:"none",stroke:i,strokeWidth:null!=o?o:n}),t().createElement("path",{d:w,fill:"none",stroke:f?"url(#".concat(T,")"):S,strokeLinecap:l,strokeWidth:n,strokeDasharray:O,strokeDashoffset:j})),null!==s&&t().createElement("div",{"aria-hidden":"true",style:x(x({},P.timeStyle),{},{color:S})},t().isValidElement(s)?t().cloneElement(t().Children.only(s),k):s(k)),"function"==typeof m&&t().createElement("div",{role:"timer","aria-live":"assertive",style:P.visuallyHidden},m(k)))};R.propTypes=p,R.defaultProps={size:180,strokeWidth:12,trailColor:"#d9d9d9",isPlaying:!1,strokeLinecap:"round",isLinearGradient:!1,ariaLabel:"Countdown timer",children:null,rotation:"clockwise"},R.displayName="CountdownCircleTimer"}(),e.exports=i}()}}]);