_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[46],{"3Z9Z":function(e,t,a){"use strict";var r=a("RAs/"),n=a("hVfy"),s=a("eC2I"),i=a.n(s),o=a("q1tI"),l=a.n(o),c=a("vUet"),u=["bsPrefix","className","noGutters","as"],f=["xl","lg","md","sm","xs"],d=l.a.forwardRef((function(e,t){var a=e.bsPrefix,s=e.className,o=e.noGutters,d=e.as,p=void 0===d?"div":d,g=Object(n.a)(e,u),m=Object(c.a)(a,"row"),b=m+"-cols",h=[];return f.forEach((function(e){var t,a=g[e];delete g[e];var r="xs"!==e?"-"+e:"";null!=(t=null!=a&&"object"===typeof a?a.cols:a)&&h.push(""+b+r+"-"+t)})),l.a.createElement(p,Object(r.a)({ref:t},g,{className:i.a.apply(void 0,[s,m,o&&"no-gutters"].concat(h))}))}));d.displayName="Row",d.defaultProps={noGutters:!1},t.a=d},"7vrA":function(e,t,a){"use strict";var r=a("RAs/"),n=a("hVfy"),s=a("eC2I"),i=a.n(s),o=a("q1tI"),l=a.n(o),c=a("vUet"),u=["bsPrefix","fluid","as","className"],f=l.a.forwardRef((function(e,t){var a=e.bsPrefix,s=e.fluid,o=e.as,f=void 0===o?"div":o,d=e.className,p=Object(n.a)(e,u),g=Object(c.a)(a,"container"),m="string"===typeof s?"-"+s:"-fluid";return l.a.createElement(f,Object(r.a)({ref:t},p,{className:i()(d,s?""+g+m:g)}))}));f.displayName="Container",f.defaultProps={fluid:!1},t.a=f},GOVm:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var r=a("q1tI"),n=a.n(r),s=n.a.createElement,i=n.a.createContext(),o=function(e){var t=e.children,a=Object(r.useState)(!1),n=a[0],o=a[1],l=Object(r.useState)(!1),c=l[0],u=l[1],f=Object(r.useState)(!1),d=f[0],p=f[1],g=Object(r.useState)({theme:"light",variant:"primary",align:"left",isFluid:!1,button:"cta"}),m=g[0],b=g[1],h=Object(r.useState)({theme:"dark",style:"style1"}),v=h[0],y=h[1];return s(i.Provider,{value:{themeDark:n,toggleTheme:function(){o(!n)},videoModalVisible:c,toggleVideoModal:function(){u(!c)},visibleOffCanvas:d,toggleOffCanvas:function(){p(!d)},closeOffCanvas:function(){p(!1)},header:m,setHeader:b,footer:v,setFooter:y}},t)};t.b=i},GPKm:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var r=a("rePB"),n=a("q1tI"),s=a.n(n),i=a("GOVm"),o=s.a.createElement;function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){Object(r.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var u={theme:"light",variant:"primary",align:"left",isFluid:!1,button:"cta",buttonText:"Get started free"},f={theme:"dark",style:"style2"},d=function(e){var t=e.children,a=e.headerConfig,r=void 0===a?null:a,l=e.footerConfig,d=void 0===l?null:l,p=Object(n.useContext)(i.b);return Object(n.useEffect)((function(){p.themeDark?(p.setHeader(c(c(c({},u),r),{},{theme:"dark"})),p.setFooter(c(c(c({},f),d),{},{theme:"dark"}))):(p.setHeader(c(c({},u),r)),p.setFooter(c(c({},f),d)))}),[p.themeDark,r,d]),o(s.a.Fragment,null,t)}},JI6e:function(e,t,a){"use strict";var r=a("RAs/"),n=a("hVfy"),s=a("eC2I"),i=a.n(s),o=a("q1tI"),l=a.n(o),c=a("vUet"),u=["bsPrefix","className","as"],f=["xl","lg","md","sm","xs"],d=l.a.forwardRef((function(e,t){var a=e.bsPrefix,s=e.className,o=e.as,d=void 0===o?"div":o,p=Object(n.a)(e,u),g=Object(c.a)(a,"col"),m=[],b=[];return f.forEach((function(e){var t,a,r,n=p[e];if(delete p[e],"object"===typeof n&&null!=n){var s=n.span;t=void 0===s||s,a=n.offset,r=n.order}else t=n;var i="xs"!==e?"-"+e:"";t&&m.push(!0===t?""+g+i:""+g+i+"-"+t),null!=r&&b.push("order"+i+"-"+r),null!=a&&b.push("offset"+i+"-"+a)})),m.length||m.push(g),l.a.createElement(d,Object(r.a)({},p,{ref:t,className:i.a.apply(void 0,[s].concat(m,b))}))}));d.displayName="Col",t.a=d},"P+CZ":function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/pricing3",function(){return a("kVSy")}])},Qg85:function(e,t,a){"use strict";t.a=function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return t.filter((function(e){return null!=e})).reduce((function(e,t){if("function"!==typeof t)throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return null===e?t:function(){for(var a=arguments.length,r=new Array(a),n=0;n<a;n++)r[n]=arguments[n];e.apply(this,r),t.apply(this,r)}}),null)}},"RAs/":function(e,t,a){"use strict";function r(){return(r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}a.d(t,"a",(function(){return r}))},YFqc:function(e,t,a){e.exports=a("cTJO")},cTJO:function(e,t,a){"use strict";var r=a("zoAU"),n=a("7KCV");t.__esModule=!0,t.default=void 0;var s,i=n(a("q1tI")),o=a("elyg"),l=a("nOHt"),c=new Map,u=window.IntersectionObserver,f={};var d=function(e,t){var a=s||(u?s=new u((function(e){e.forEach((function(e){if(c.has(e.target)){var t=c.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(s.unobserve(e.target),c.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0);return a?(a.observe(e),c.set(e,t),function(){try{a.unobserve(e)}catch(t){console.error(t)}c.delete(e)}):function(){}};function p(e,t,a,r){(0,o.isLocalURL)(t)&&(e.prefetch(t,a,r).catch((function(e){0})),f[t+"%"+a]=!0)}var g=function(e){var t=!1!==e.prefetch,a=(0,l.useRouter)(),n=a&&a.pathname||"/",s=i.default.useMemo((function(){var t=(0,o.resolveHref)(n,e.href,!0),a=r(t,2),s=a[0],i=a[1];return{href:s,as:e.as?(0,o.resolveHref)(n,e.as):i||s}}),[n,e.href,e.as]),c=s.href,g=s.as,m=e.children,b=e.replace,h=e.shallow,v=e.scroll,y=e.locale;"string"===typeof m&&(m=i.default.createElement("a",null,m));var x=i.Children.only(m),N=x&&"object"===typeof x&&x.ref,w=i.default.useRef(),O={ref:i.default.useCallback((function(e){(w.current&&(w.current(),w.current=void 0),t&&u&&e&&e.tagName&&(0,o.isLocalURL)(c))&&(f[c+"%"+g]||(w.current=d(e,(function(){p(a,c,g,{locale:"undefined"!==typeof y?y:a&&a.locale})}))));N&&("function"===typeof N?N(e):"object"===typeof N&&(N.current=e))}),[t,N,c,g,a,y]),onClick:function(e){x.props&&"function"===typeof x.props.onClick&&x.props.onClick(e),e.defaultPrevented||function(e,t,a,r,n,s,i,l){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,o.isLocalURL)(a))&&(e.preventDefault(),null==i&&(i=r.indexOf("#")<0),t[n?"replace":"push"](a,r,{shallow:s,locale:l}).then((function(e){e&&i&&(window.scrollTo(0,0),document.body.focus())})))}(e,a,c,g,b,h,v,y)}};return t&&(O.onMouseEnter=function(e){(0,o.isLocalURL)(c)&&(x.props&&"function"===typeof x.props.onMouseEnter&&x.props.onMouseEnter(e),p(a,c,g,{priority:!0}))}),(e.passHref||"a"===x.type&&!("href"in x.props))&&(O.href=(0,o.addBasePath)((0,o.addLocale)(g,"undefined"!==typeof y?y:a&&a.locale,a&&a.defaultLocale))),i.default.cloneElement(x,O)};t.default=g},cWnB:function(e,t,a){"use strict";var r=a("RAs/"),n=a("hVfy"),s=a("eC2I"),i=a.n(s),o=a("q1tI"),l=a.n(o),c=a("vUet"),u=a("Qg85"),f=["as","disabled","onKeyDown"];function d(e){return!e||"#"===e.trim()}var p=l.a.forwardRef((function(e,t){var a=e.as,s=void 0===a?"a":a,i=e.disabled,o=e.onKeyDown,c=Object(n.a)(e,f),p=function(e){var t=c.href,a=c.onClick;(i||d(t))&&e.preventDefault(),i?e.stopPropagation():a&&a(e)};return d(c.href)&&(c.role=c.role||"button",c.href=c.href||"#"),i&&(c.tabIndex=-1,c["aria-disabled"]=!0),l.a.createElement(s,Object(r.a)({ref:t},c,{onClick:p,onKeyDown:Object(u.a)((function(e){" "===e.key&&(e.preventDefault(),p(e))}),o)}))}));p.displayName="SafeAnchor";var g=p,m=["bsPrefix","variant","size","active","className","block","type","as"],b=l.a.forwardRef((function(e,t){var a=e.bsPrefix,s=e.variant,o=e.size,u=e.active,f=e.className,d=e.block,p=e.type,b=e.as,h=Object(n.a)(e,m),v=Object(c.a)(a,"btn"),y=i()(f,v,u&&"active",s&&v+"-"+s,d&&v+"-block",o&&v+"-"+o);if(h.href)return l.a.createElement(g,Object(r.a)({},h,{as:b,ref:t,className:i()(y,h.disabled&&"disabled")}));t&&(h.ref=t),p?h.type=p:b||(h.type="button");var x=b||"button";return l.a.createElement(x,Object(r.a)({},h,{className:y}))}));b.displayName="Button",b.defaultProps={variant:"primary",active:!1,disabled:!1};t.a=b},eC2I:function(e,t,a){var r;!function(){"use strict";var a={}.hasOwnProperty;function n(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var s=typeof r;if("string"===s||"number"===s)e.push(r);else if(Array.isArray(r)){if(r.length){var i=n.apply(null,r);i&&e.push(i)}}else if("object"===s){if(r.toString!==Object.prototype.toString&&!r.toString.toString().includes("[native code]")){e.push(r.toString());continue}for(var o in r)a.call(r,o)&&r[o]&&e.push(o)}}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):void 0===(r=function(){return n}.apply(t,[]))||(e.exports=r)}()},hVfy:function(e,t,a){"use strict";function r(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}a.d(t,"a",(function(){return r}))},kVSy:function(e,t,a){"use strict";a.r(t);var r=a("q1tI"),n=a.n(r),s=a("YFqc"),i=a.n(s),o=a("7vrA"),l=a("3Z9Z"),c=a("JI6e"),u=a("cWnB"),f=a("GPKm"),d=n.a.createElement;t.default=function(){return d(n.a.Fragment,null,d(f.a,{headerConfig:{align:"right",button:"account"}},d("div",{className:"inner-banner pt-25 pt-lg-31 pb-lg-11 bg-default-6"},d(o.a,null,d(l.a,{className:"justify-content-center"},d(c.a,{xl:"8",lg:"9"},d("div",{className:"px-md-12 text-center mb-11 mb-lg-13"},d("h2",{className:"title gr-text-2 mb-9 mb-lg-12"},"Pricing & Plans"),d("p",{className:"gr-text-8 mb-0"},"With lots of unique blocks, you can easily build a page without coding. Build your next consultancy website within few minutes.")))))),d("div",{className:"pricing-section pb-5 pb-lg-20 bg-default-6"},d(o.a,null,d(l.a,{className:"justify-content-center"},d(c.a,{lg:"4",md:"6",sm:"8",className:"mb-9"},d("div",{className:"pricing-card gr-hover-shadow-1 bg-white border rounded-10 text-center pt-9 pb-6 pr-6 pl-6"},d("span",{className:"badge gr-badge text-primary gr-bg-blue-opacity-1 rounded-pill gr-text-12 text-uppercase"},"Basic"),d("h2",{className:"price-value gr-text-3 font-weight-bold text-blackish-blue line-spacing-none mb-2 mt-8"},"$29"),d("p",{className:"gr-text-11 mb-7 mb-lg-11 gr-color-blackish-blue-opacity-7"},"One time purchase"),d("p",{className:"gr-text-9 px-5 gr-color-blackish-blue-opacity-7 mb-0"},"With lots of unique blocks, you can easily build a page without coding. Build your next landing page."),d(u.a,{className:"gr-hover-y w-100 mt-9 mt-lg-15 gr-text-9"},"Get started for free"))),d(c.a,{lg:"4",md:"6",sm:"8",className:"mb-9"},d("div",{className:"pricing-card gr-hover-shadow-1 bg-white border rounded-10 text-center pt-9 pb-6 pr-6 pl-6"},d("span",{className:"badge gr-badge text-primary gr-bg-blue-opacity-1 rounded-pill gr-text-12 text-uppercase"},"Standard"),d("h2",{className:"price-value gr-text-3 font-weight-bold text-blackish-blue line-spacing-none mb-2 mt-8"},"$49"),d("p",{className:"gr-text-11 mb-7 mb-lg-11 gr-color-blackish-blue-opacity-7"},"One time purchase"),d("p",{className:"gr-text-9 px-5 gr-color-blackish-blue-opacity-7 mb-0"},"With lots of unique blocks, you can easily build a page without coding. Build your next landing page."),d(u.a,{className:"gr-hover-y w-100 mt-9 mt-lg-15 gr-text-9"},"Get started for free"))),d(c.a,{lg:"4",md:"6",sm:"8",className:"mb-9"},d("div",{className:"pricing-card gr-hover-shadow-1 bg-white border rounded-10 text-center pt-9 pb-6 pr-6 pl-6"},d("span",{className:"badge gr-badge text-primary gr-bg-blue-opacity-1 rounded-pill gr-text-12 text-uppercase"},"Premium"),d("h2",{className:"price-value gr-text-3 font-weight-bold text-blackish-blue line-spacing-none mb-2 mt-8"},"$99"),d("p",{className:"gr-text-11 mb-7 mb-lg-11 gr-color-blackish-blue-opacity-7"},"One time purchase"),d("p",{className:"gr-text-9 px-5 gr-color-blackish-blue-opacity-7 mb-0"},"With lots of unique blocks, you can easily build a page without coding. Build your next landing page."),d(u.a,{className:"gr-hover-y w-100 mt-9 mt-lg-15 gr-text-9"},"Get started for free")))))),d("div",{className:"pb-13 pb-lg-24 bg-default-6"},d(o.a,null,d(l.a,{className:"justify-content-center"},d(c.a,{xl:"6",lg:"6",className:"pb-9 pb-lg-15"},d("div",{className:"faq d-flex"},d("div",{className:"faq-icon mt-1 circle-xs bg-green text-white mr-5 mr-sm-7"},d("i",{className:"fas fa-question"})),d("div",{className:"faq-texts pr-md-7 pr-lg-0 pr-xl-7"},d("h3",{className:"gr-text-7 font-weight-bold mb-7"},"Can I use Albino for my clients?"),d("p",{className:"gr-text-9 mb-0"},"With lots of unique blocks, you can easily build a page without coding. Build your next landing page. Integer ut Oberyn massa. Sed feugiat vitae turpis a porta. Aliquam sagittis interdum Melisandre."),d(i.a,{href:"/"},d("a",{className:"btn-link with-icon font-weight-bold gr-text-9 mt-9"},"Click to learn more"," ",d("i",{className:"fas fa-arrow-right font-weight-bold"})))))),d(c.a,{xl:"6",lg:"6",className:"pb-9 pb-lg-15"},d("div",{className:"faq d-flex"},d("div",{className:"faq-icon mt-1 circle-xs bg-green text-white mr-5 mr-sm-7"},d("i",{className:"fas fa-question"})),d("div",{className:"faq-texts pr-md-7 pr-lg-0 pr-xl-7"},d("h3",{className:"gr-text-7 font-weight-bold mb-7"},"Does it work with WordPress?"),d("p",{className:"gr-text-9 mb-0"},"With lots of unique blocks, you can easily build a page without coding. Build your next landing page. Integer ut Oberyn massa. Sed feugiat vitae turpis a porta. Aliquam sagittis interdum Melisandre.")))),d(c.a,{xl:"6",lg:"6",className:"pb-9 pb-lg-15"},d("div",{className:"faq d-flex"},d("div",{className:"faq-icon mt-1 circle-xs bg-green text-white mr-5 mr-sm-7"},d("i",{className:"fas fa-question"})),d("div",{className:"faq-texts pr-md-7 pr-lg-0 pr-xl-7"},d("h3",{className:"gr-text-7 font-weight-bold mb-7"},"Do I get free updates?"),d("p",{className:"gr-text-9 mb-0"},"With lots of unique blocks, you can easily build a page without coding. Build your next landing page. Integer ut Oberyn massa. Sed feugiat vitae turpis a porta. Aliquam sagittis interdum Melisandre.")))),d(c.a,{xl:"6",lg:"6",className:"pb-9 pb-lg-15"},d("div",{className:"faq d-flex"},d("div",{className:"faq-icon mt-1 circle-xs bg-green text-white mr-5 mr-sm-7"},d("i",{className:"fas fa-question"})),d("div",{className:"faq-texts pr-md-7 pr-lg-0 pr-xl-7"},d("h3",{className:"gr-text-7 font-weight-bold mb-7"},"Will you provide support?"),d("p",{className:"gr-text-9 mb-0"},"With lots of unique blocks, you can easily build a page without coding. Build your next landing page. Integer ut Oberyn massa. Sed feugiat vitae turpis a porta. Aliquam sagittis interdum Melisandre.")))),d("div",{className:"col-12 text-center mt-lg-9 "},d("p",{className:"gr-text-9 gr-text-9 gr-text-color mb-0"},"Haven\u2019t got your answer? ",d("br",{className:"d-xs-none"}),d(i.a,{href:"/"},d("a",{className:"btn-link"},"Contact our support now")))))))))}},rePB:function(e,t,a){"use strict";function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}a.d(t,"a",(function(){return r}))},vUet:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));a("RAs/");var r=a("q1tI"),n=a.n(r),s=n.a.createContext({});s.Consumer,s.Provider;function i(e,t){var a=Object(r.useContext)(s);return e||a[t]||t}}},[["P+CZ",0,1,2]]]);