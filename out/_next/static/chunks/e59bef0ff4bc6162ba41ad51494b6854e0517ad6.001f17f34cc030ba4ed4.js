(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[4],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(o.default.useContext(a.AmpStateContext))};var r,o=(r=n("q1tI"))&&r.__esModule?r:{default:r},a=n("lwAK");function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,o=void 0!==r&&r,a=e.hasQuery,i=void 0!==a&&a;return n||o&&i}},"3Z9Z":function(e,t,n){"use strict";var r=n("RAs/"),o=n("hVfy"),a=n("eC2I"),i=n.n(a),c=n("q1tI"),u=n.n(c),s=n("vUet"),f=["bsPrefix","className","noGutters","as"],l=["xl","lg","md","sm","xs"],d=u.a.forwardRef((function(e,t){var n=e.bsPrefix,a=e.className,c=e.noGutters,d=e.as,p=void 0===d?"div":d,v=Object(o.a)(e,f),h=Object(s.a)(n,"row"),m=h+"-cols",y=[];return l.forEach((function(e){var t,n=v[e];delete v[e];var r="xs"!==e?"-"+e:"";null!=(t=null!=n&&"object"===typeof n?n.cols:n)&&y.push(""+m+r+"-"+t)})),u.a.createElement(p,Object(r.a)({ref:t},v,{className:i.a.apply(void 0,[a,h,c&&"no-gutters"].concat(y))}))}));d.displayName="Row",d.defaultProps={noGutters:!1},t.a=d},"48fX":function(e,t,n){var r=n("qhzo");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},"5fIB":function(e,t,n){var r=n("7eYB");e.exports=function(e){if(Array.isArray(e))return r(e)}},"7vrA":function(e,t,n){"use strict";var r=n("RAs/"),o=n("hVfy"),a=n("eC2I"),i=n.n(a),c=n("q1tI"),u=n.n(c),s=n("vUet"),f=["bsPrefix","fluid","as","className"],l=u.a.forwardRef((function(e,t){var n=e.bsPrefix,a=e.fluid,c=e.as,l=void 0===c?"div":c,d=e.className,p=Object(o.a)(e,f),v=Object(s.a)(n,"container"),h="string"===typeof a?"-"+a:"-fluid";return u.a.createElement(l,Object(r.a)({ref:t},p,{className:i()(d,a?""+v+h:v)}))}));l.displayName="Container",l.defaultProps={fluid:!1},t.a=l},"8Kt/":function(e,t,n){"use strict";n("oI91");t.__esModule=!0,t.defaultHead=f,t.default=void 0;var r,o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=s();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=r?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(n,o,a):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),a=(r=n("Xuae"))&&r.__esModule?r:{default:r},i=n("lwAK"),c=n("FYa8"),u=n("/0+H");function s(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return s=function(){return e},e}function f(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function l(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var d=["name","httpEquiv","charSet","itemProp"];function p(e,t){return e.reduce((function(e,t){var n=o.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(l,[]).reverse().concat(f(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(o){var a=!0;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){var i=o.key.slice(o.key.indexOf("$")+1);e.has(i)?a=!1:e.add(i)}switch(o.type){case"title":case"base":t.has(o.type)?a=!1:t.add(o.type);break;case"meta":for(var c=0,u=d.length;c<u;c++){var s=d[c];if(o.props.hasOwnProperty(s))if("charSet"===s)n.has(s)?a=!1:n.add(s);else{var f=o.props[s],l=r[s]||new Set;l.has(f)?a=!1:(l.add(f),r[s]=l)}}}return a}}()).reverse().map((function(e,t){var n=e.key||t;return o.default.cloneElement(e,{key:n})}))}function v(e){var t=e.children,n=(0,o.useContext)(i.AmpStateContext),r=(0,o.useContext)(c.HeadManagerContext);return o.default.createElement(a.default,{reduceComponentsToState:p,headManager:r,inAmpMode:(0,u.isInAmpMode)(n)},t)}v.rewind=function(){};var h=v;t.default=h},FYa8:function(e,t,n){"use strict";var r;t.__esModule=!0,t.HeadManagerContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.HeadManagerContext=o},GOVm:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n("q1tI"),o=n.n(r),a=o.a.createElement,i=o.a.createContext(),c=function(e){var t=e.children,n=Object(r.useState)(!1),o=n[0],c=n[1],u=Object(r.useState)(!1),s=u[0],f=u[1],l=Object(r.useState)(!1),d=l[0],p=l[1],v=Object(r.useState)({theme:"light",variant:"primary",align:"left",isFluid:!1,button:"cta"}),h=v[0],m=v[1],y=Object(r.useState)({theme:"dark",style:"style1"}),b=y[0],g=y[1];return a(i.Provider,{value:{themeDark:o,toggleTheme:function(){c(!o)},videoModalVisible:s,toggleVideoModal:function(){f(!s)},visibleOffCanvas:d,toggleOffCanvas:function(){p(!d)},closeOffCanvas:function(){p(!1)},header:h,setHeader:m,footer:b,setFooter:g}},t)};t.b=i},GPKm:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var r=n("rePB"),o=n("q1tI"),a=n.n(o),i=n("GOVm"),c=a.a.createElement;function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var f={theme:"light",variant:"primary",align:"left",isFluid:!1,button:"cta",buttonText:"Get started free"},l={theme:"dark",style:"style2"},d=function(e){var t=e.children,n=e.headerConfig,r=void 0===n?null:n,u=e.footerConfig,d=void 0===u?null:u,p=Object(o.useContext)(i.b);return Object(o.useEffect)((function(){p.themeDark?(p.setHeader(s(s(s({},f),r),{},{theme:"dark"})),p.setFooter(s(s(s({},l),d),{},{theme:"dark"}))):(p.setHeader(s(s({},f),r)),p.setFooter(s(s({},l),d)))}),[p.themeDark,r,d]),c(a.a.Fragment,null,t)}},JI6e:function(e,t,n){"use strict";var r=n("RAs/"),o=n("hVfy"),a=n("eC2I"),i=n.n(a),c=n("q1tI"),u=n.n(c),s=n("vUet"),f=["bsPrefix","className","as"],l=["xl","lg","md","sm","xs"],d=u.a.forwardRef((function(e,t){var n=e.bsPrefix,a=e.className,c=e.as,d=void 0===c?"div":c,p=Object(o.a)(e,f),v=Object(s.a)(n,"col"),h=[],m=[];return l.forEach((function(e){var t,n,r,o=p[e];if(delete p[e],"object"===typeof o&&null!=o){var a=o.span;t=void 0===a||a,n=o.offset,r=o.order}else t=o;var i="xs"!==e?"-"+e:"";t&&h.push(!0===t?""+v+i:""+v+i+"-"+t),null!=r&&m.push("order"+i+"-"+r),null!=n&&m.push("offset"+i+"-"+n)})),h.length||h.push(v),u.a.createElement(d,Object(r.a)({},p,{ref:t,className:i.a.apply(void 0,[a].concat(h,m))}))}));d.displayName="Col",t.a=d},"RAs/":function(e,t,n){"use strict";function r(){return(r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return r}))},T0f4:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},Xuae:function(e,t,n){"use strict";var r=n("mPvQ"),o=n("/GRZ"),a=n("i2R6"),i=(n("qXWd"),n("48fX")),c=n("tCBg"),u=n("T0f4");function s(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=u(e);if(t){var o=u(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return c(this,n)}}t.__esModule=!0,t.default=void 0;var f=n("q1tI"),l=function(e){i(n,e);var t=s(n);function n(e){var a;return o(this,n),(a=t.call(this,e))._hasHeadManager=void 0,a.emitChange=function(){a._hasHeadManager&&a.props.headManager.updateHead(a.props.reduceComponentsToState(r(a.props.headManager.mountedInstances),a.props))},a._hasHeadManager=a.props.headManager&&a.props.headManager.mountedInstances,a}return a(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(f.Component);t.default=l},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("zoAU"),o=n("7KCV");t.__esModule=!0,t.default=void 0;var a,i=o(n("q1tI")),c=n("elyg"),u=n("nOHt"),s=new Map,f=window.IntersectionObserver,l={};var d=function(e,t){var n=a||(f?a=new f((function(e){e.forEach((function(e){if(s.has(e.target)){var t=s.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(a.unobserve(e.target),s.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0);return n?(n.observe(e),s.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}s.delete(e)}):function(){}};function p(e,t,n,r){(0,c.isLocalURL)(t)&&(e.prefetch(t,n,r).catch((function(e){0})),l[t+"%"+n]=!0)}var v=function(e){var t=!1!==e.prefetch,n=(0,u.useRouter)(),o=n&&n.pathname||"/",a=i.default.useMemo((function(){var t=(0,c.resolveHref)(o,e.href,!0),n=r(t,2),a=n[0],i=n[1];return{href:a,as:e.as?(0,c.resolveHref)(o,e.as):i||a}}),[o,e.href,e.as]),s=a.href,v=a.as,h=e.children,m=e.replace,y=e.shallow,b=e.scroll,g=e.locale;"string"===typeof h&&(h=i.default.createElement("a",null,h));var O=i.Children.only(h),x=O&&"object"===typeof O&&O.ref,w=i.default.useRef(),j={ref:i.default.useCallback((function(e){(w.current&&(w.current(),w.current=void 0),t&&f&&e&&e.tagName&&(0,c.isLocalURL)(s))&&(l[s+"%"+v]||(w.current=d(e,(function(){p(n,s,v,{locale:"undefined"!==typeof g?g:n&&n.locale})}))));x&&("function"===typeof x?x(e):"object"===typeof x&&(x.current=e))}),[t,x,s,v,n,g]),onClick:function(e){O.props&&"function"===typeof O.props.onClick&&O.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,a,i,u){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,c.isLocalURL)(n))&&(e.preventDefault(),null==i&&(i=r.indexOf("#")<0),t[o?"replace":"push"](n,r,{shallow:a,locale:u}).then((function(e){e&&i&&(window.scrollTo(0,0),document.body.focus())})))}(e,n,s,v,m,y,b,g)}};return t&&(j.onMouseEnter=function(e){(0,c.isLocalURL)(s)&&(O.props&&"function"===typeof O.props.onMouseEnter&&O.props.onMouseEnter(e),p(n,s,v,{priority:!0}))}),(e.passHref||"a"===O.type&&!("href"in O.props))&&(j.href=(0,c.addBasePath)((0,c.addLocale)(v,"undefined"!==typeof g?g:n&&n.locale,n&&n.defaultLocale))),i.default.cloneElement(O,j)};t.default=v},eC2I:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var a=typeof r;if("string"===a||"number"===a)e.push(r);else if(Array.isArray(r)){if(r.length){var i=o.apply(null,r);i&&e.push(i)}}else if("object"===a){if(r.toString!==Object.prototype.toString&&!r.toString.toString().includes("[native code]")){e.push(r.toString());continue}for(var c in r)n.call(r,c)&&r[c]&&e.push(c)}}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r)}()},gMDE:function(e,t,n){"use strict";var r=n("q1tI"),o=n.n(r),a=n("YFqc"),i=n.n(a),c=n("7vrA"),u=n("3Z9Z"),s=n("JI6e"),f=o.a.createElement;t.a=function(){return f(o.a.Fragment,null,f("div",{className:"cta-section-1 py-12 pt-lg-20 pb-lg-18 border-bottom border-gray-3 ",style:{backgroundColor:"#ffffff"}},f(c.a,null,f(u.a,{className:"align-items-center "},f(s.a,{lg:"6"},f("div",{className:"section-title cta-text pr-lg-5"},f("h2",{className:"gr-text-5 mb-7"},"Grow your business with best Billing and Accounting Software."),f("p",{className:"gr-text-8"},"Jafinte helps small business owners have an excellent, reliable and robust accounting system for a very affordable cost. We make accounting, billing easy and efficient for your business with our smart software."))),f(s.a,{lg:"6",xl:"5",className:"offset-xl-1"},f("div",{className:"cta-btn d-flex flex-column flex-sm-row justify-content-lg-end mt-5 mt-lg-0"},f(i.a,{href:"/features"},f("a",{className:"btn gr-bg-blue-opacity-1 text-primary--light-only gr-hover-y with-icon mr-sm-7 mb-6 mb-sm-0"},"Learn more",f("i",{className:"icon icon-tail-right font-weight-bold"}))),f("div",{style:{textAlign:"center"}}," ",f("a",{className:"typeform-share button",href:"https://app.Jafinte.in/register","data-mode":"popup",style:{display:"inline-block",textDecoration:"none",backgroundColor:"#2ABB9B",color:"white",cursor:"pointer",fontFamily:"Inter, sans-serif",fontSize:"16px",lineHeight:"50px",textAlign:"center",margin:0,padding:"0px 33px",borderRadius:"10px",maxWidth:"100%",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",fontWeight:"bold",WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale"},"data-size":50,target:"_blank"},"Register for Free")," ")))))))}},hVfy:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}n.d(t,"a",(function(){return r}))},kG2m:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=o},mPvQ:function(e,t,n){var r=n("5fIB"),o=n("rlHP"),a=n("KckH"),i=n("kG2m");e.exports=function(e){return r(e)||o(e)||a(e)||i()}},oI91:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},qXWd:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},rePB:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return r}))},rlHP:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},tCBg:function(e,t,n){var r=n("C+bE"),o=n("qXWd");e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?o(e):t}},vUet:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));n("RAs/");var r=n("q1tI"),o=n.n(r),a=o.a.createContext({});a.Consumer,a.Provider;function i(e,t){var n=Object(r.useContext)(a);return e||n[t]||t}}}]);