_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[50],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(o.default.useContext(a.AmpStateContext))};var r,o=(r=n("q1tI"))&&r.__esModule?r:{default:r},a=n("lwAK");function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,o=void 0!==r&&r,a=e.hasQuery,i=void 0!==a&&a;return n||o&&i}},"/GRZ":function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},"0cRT":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/refund-policy",function(){return n("IfP5")}])},"3Z9Z":function(e,t,n){"use strict";var r=n("RAs/"),o=n("hVfy"),a=n("eC2I"),i=n.n(a),u=n("q1tI"),c=n.n(u),s=n("vUet"),l=["bsPrefix","className","noGutters","as"],f=["xl","lg","md","sm","xs"],d=c.a.forwardRef((function(e,t){var n=e.bsPrefix,a=e.className,u=e.noGutters,d=e.as,p=void 0===d?"div":d,y=Object(o.a)(e,l),h=Object(s.a)(n,"row"),m=h+"-cols",v=[];return f.forEach((function(e){var t,n=y[e];delete y[e];var r="xs"!==e?"-"+e:"";null!=(t=null!=n&&"object"===typeof n?n.cols:n)&&v.push(""+m+r+"-"+t)})),c.a.createElement(p,Object(r.a)({ref:t},y,{className:i.a.apply(void 0,[a,h,u&&"no-gutters"].concat(v))}))}));d.displayName="Row",d.defaultProps={noGutters:!1},t.a=d},"48fX":function(e,t,n){var r=n("qhzo");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},"5fIB":function(e,t,n){var r=n("7eYB");e.exports=function(e){if(Array.isArray(e))return r(e)}},"7eYB":function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}},"7vrA":function(e,t,n){"use strict";var r=n("RAs/"),o=n("hVfy"),a=n("eC2I"),i=n.n(a),u=n("q1tI"),c=n.n(u),s=n("vUet"),l=["bsPrefix","fluid","as","className"],f=c.a.forwardRef((function(e,t){var n=e.bsPrefix,a=e.fluid,u=e.as,f=void 0===u?"div":u,d=e.className,p=Object(o.a)(e,l),y=Object(s.a)(n,"container"),h="string"===typeof a?"-"+a:"-fluid";return c.a.createElement(f,Object(r.a)({ref:t},p,{className:i()(d,a?""+y+h:y)}))}));f.displayName="Container",f.defaultProps={fluid:!1},t.a=f},"8Kt/":function(e,t,n){"use strict";n("oI91");t.__esModule=!0,t.defaultHead=l,t.default=void 0;var r,o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=s();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=r?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(n,o,a):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),a=(r=n("Xuae"))&&r.__esModule?r:{default:r},i=n("lwAK"),u=n("FYa8"),c=n("/0+H");function s(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return s=function(){return e},e}function l(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function f(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var d=["name","httpEquiv","charSet","itemProp"];function p(e,t){return e.reduce((function(e,t){var n=o.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(f,[]).reverse().concat(l(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(o){var a=!0;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){var i=o.key.slice(o.key.indexOf("$")+1);e.has(i)?a=!1:e.add(i)}switch(o.type){case"title":case"base":t.has(o.type)?a=!1:t.add(o.type);break;case"meta":for(var u=0,c=d.length;u<c;u++){var s=d[u];if(o.props.hasOwnProperty(s))if("charSet"===s)n.has(s)?a=!1:n.add(s);else{var l=o.props[s],f=r[s]||new Set;f.has(l)?a=!1:(f.add(l),r[s]=f)}}}return a}}()).reverse().map((function(e,t){var n=e.key||t;return o.default.cloneElement(e,{key:n})}))}function y(e){var t=e.children,n=(0,o.useContext)(i.AmpStateContext),r=(0,o.useContext)(u.HeadManagerContext);return o.default.createElement(a.default,{reduceComponentsToState:p,headManager:r,inAmpMode:(0,c.isInAmpMode)(n)},t)}y.rewind=function(){};var h=y;t.default=h},"C+bE":function(e,t){function n(t){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?e.exports=n=function(e){return typeof e}:e.exports=n=function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(t)}e.exports=n},FYa8:function(e,t,n){"use strict";var r;t.__esModule=!0,t.HeadManagerContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.HeadManagerContext=o},GOVm:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n("q1tI"),o=n.n(r),a=o.a.createElement,i=o.a.createContext(),u=function(e){var t=e.children,n=Object(r.useState)(!1),o=n[0],u=n[1],c=Object(r.useState)(!1),s=c[0],l=c[1],f=Object(r.useState)(!1),d=f[0],p=f[1],y=Object(r.useState)({theme:"light",variant:"primary",align:"left",isFluid:!1,button:"cta"}),h=y[0],m=y[1],v=Object(r.useState)({theme:"dark",style:"style1"}),b=v[0],g=v[1];return a(i.Provider,{value:{themeDark:o,toggleTheme:function(){u(!o)},videoModalVisible:s,toggleVideoModal:function(){l(!s)},visibleOffCanvas:d,toggleOffCanvas:function(){p(!d)},closeOffCanvas:function(){p(!1)},header:h,setHeader:m,footer:b,setFooter:g}},t)};t.b=i},GPKm:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var r=n("rePB"),o=n("q1tI"),a=n.n(o),i=n("GOVm"),u=a.a.createElement;function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var l={theme:"light",variant:"primary",align:"left",isFluid:!1,button:"cta",buttonText:"Get started free"},f={theme:"dark",style:"style2"},d=function(e){var t=e.children,n=e.headerConfig,r=void 0===n?null:n,c=e.footerConfig,d=void 0===c?null:c,p=Object(o.useContext)(i.b);return Object(o.useEffect)((function(){p.themeDark?(p.setHeader(s(s(s({},l),r),{},{theme:"dark"})),p.setFooter(s(s(s({},f),d),{},{theme:"dark"}))):(p.setHeader(s(s({},l),r)),p.setFooter(s(s({},f),d)))}),[p.themeDark,r,d]),u(a.a.Fragment,null,t)}},IfP5:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),o=n.n(r),a=n("7vrA"),i=n("3Z9Z"),u=n("JI6e"),c=n("GPKm"),s=n("8Kt/"),l=n.n(s),f=o.a.createElement;t.default=function(){return f(o.a.Fragment,null,f(l.a,null,f("title",null,"Refund & Cancellation Policy | Free Billing and Accounting Software | Jafinte"),f("meta",{property:"og:title",content:"Free Billing and Accounting Software | Jafinte",key:"title"})),f(c.a,{headerConfig:{align:"right",button:"account"},footerConfig:{theme:"light",style:"style1"}},f("div",{className:"inner-banner pt-29 pb-6"},f(a.a,null,f(i.a,{className:"justify-content-center pt-5"},f(u.a,{xl:"8",lg:"9",md:"11"},f("div",{className:"px-xl-15 px-lg-8 text-center"},f("h2",{className:"title gr-text-2 mb-9"},"Privacy Policy")))))),f("div",{className:"main-block pb-21"},f(a.a,null,f(i.a,{className:"justify-content-center"},f(u.a,{lg:"10",xl:"8"},f("div",{className:"px-lg-8 px-xl-3"},f("div",{className:"single-block mb-11"},f("p",{className:"gr-text-9"},f("h5",null,f("b",{style:{width:"80%",marginLeft:"6rem"}},"Refund Policy")),f("p",{style:{width:"80%",marginLeft:"6rem"}},"When you buy our products/services, your purchase is covered by our 24 hours money back guarantee. If you are, for any reason, not entirely happy with your purchase, we will cheerfully issue a full refund, subject to deductions for legal documents or services provided. To request a refund under this guarantee, you must contact us within the first 24 hours of your payment. Just send an email to support@Jafinte.in . We'll gladly refund you 70% of your fees within 24-72 hours of your refund request."),f("h5",null,f("b",{style:{width:"80%",marginLeft:"6rem"}},"Cancellation Policy")),f("p",{style:{width:"80%",marginLeft:"6rem"}},"Jafinte believes in helping its customers as far as possible, and has therefore a liberal cancellation policy. Under this policy:"),f("p",{style:{width:"80%",marginLeft:"6rem"}},"Cancellations will be considered only if the request is made within 24 hours of placing an order. However, the cancellation request will not be entertained if the orders have been communicated to the operational team and Operations team has initiated the process of assignment. Cancellation and refund of fees or charges will be strictly governed by the Company Refund Policy of the company informed and declared from time to time."),f("p",{style:{width:"80%",marginLeft:"6rem"}},"There is no cancellation of orders placed under the Same day delivery category."),f("p",{style:{width:"80%",marginLeft:"6rem"}},"No cancellations are entertained for those products/services that the Jafinte marketing team has obtained on special discounts and offers on occasions like New Year, Pongal, Diwali, Independence Day, Foundation Day etc. These are limited occasion offers and therefore cancellations are not possible."))),f("div",{className:"single-block mb-11"},f("h3",{className:"gr-text-8 font-weight-bold pb-3"})))))))))}},JI6e:function(e,t,n){"use strict";var r=n("RAs/"),o=n("hVfy"),a=n("eC2I"),i=n.n(a),u=n("q1tI"),c=n.n(u),s=n("vUet"),l=["bsPrefix","className","as"],f=["xl","lg","md","sm","xs"],d=c.a.forwardRef((function(e,t){var n=e.bsPrefix,a=e.className,u=e.as,d=void 0===u?"div":u,p=Object(o.a)(e,l),y=Object(s.a)(n,"col"),h=[],m=[];return f.forEach((function(e){var t,n,r,o=p[e];if(delete p[e],"object"===typeof o&&null!=o){var a=o.span;t=void 0===a||a,n=o.offset,r=o.order}else t=o;var i="xs"!==e?"-"+e:"";t&&h.push(!0===t?""+y+i:""+y+i+"-"+t),null!=r&&m.push("order"+i+"-"+r),null!=n&&m.push("offset"+i+"-"+n)})),h.length||h.push(y),c.a.createElement(d,Object(r.a)({},p,{ref:t,className:i.a.apply(void 0,[a].concat(h,m))}))}));d.displayName="Col",t.a=d},KckH:function(e,t,n){var r=n("7eYB");e.exports=function(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}},Qetd:function(e,t,n){"use strict";var r=Object.assign.bind(Object);e.exports=r,e.exports.default=e.exports},"RAs/":function(e,t,n){"use strict";function r(){return(r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return r}))},T0f4:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},Xuae:function(e,t,n){"use strict";var r=n("mPvQ"),o=n("/GRZ"),a=n("i2R6"),i=(n("qXWd"),n("48fX")),u=n("tCBg"),c=n("T0f4");function s(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=c(e);if(t){var o=c(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return u(this,n)}}t.__esModule=!0,t.default=void 0;var l=n("q1tI"),f=function(e){i(n,e);var t=s(n);function n(e){var a;return o(this,n),(a=t.call(this,e))._hasHeadManager=void 0,a.emitChange=function(){a._hasHeadManager&&a.props.headManager.updateHead(a.props.reduceComponentsToState(r(a.props.headManager.mountedInstances),a.props))},a._hasHeadManager=a.props.headManager&&a.props.headManager.mountedInstances,a}return a(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(l.Component);t.default=f},eC2I:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var a=typeof r;if("string"===a||"number"===a)e.push(r);else if(Array.isArray(r)){if(r.length){var i=o.apply(null,r);i&&e.push(i)}}else if("object"===a){if(r.toString!==Object.prototype.toString&&!r.toString.toString().includes("[native code]")){e.push(r.toString());continue}for(var u in r)n.call(r,u)&&r[u]&&e.push(u)}}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r)}()},hVfy:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}n.d(t,"a",(function(){return r}))},i2R6:function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}},kG2m:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=o},mPvQ:function(e,t,n){var r=n("5fIB"),o=n("rlHP"),a=n("KckH"),i=n("kG2m");e.exports=function(e){return r(e)||o(e)||a(e)||i()}},oI91:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},qXWd:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},qhzo:function(e,t){function n(t,r){return e.exports=n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},n(t,r)}e.exports=n},rePB:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return r}))},rlHP:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},tCBg:function(e,t,n){var r=n("C+bE"),o=n("qXWd");e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?o(e):t}},vUet:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));n("RAs/");var r=n("q1tI"),o=n.n(r),a=o.a.createContext({});a.Consumer,a.Provider;function i(e,t){var n=Object(r.useContext)(a);return e||n[t]||t}}},[["0cRT",0,1]]]);