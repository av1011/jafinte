_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[38],{GPKm:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var a=n("rePB"),o=n("q1tI"),i=n.n(o),l=n("GOVm"),s=i.a.createElement;function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){Object(a.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var d={theme:"light",variant:"primary",align:"left",isFluid:!1,button:"cta",buttonText:"Get started free"},p={theme:"dark",style:"style2"},m=function(e){var t=e.children,n=e.headerConfig,a=void 0===n?null:n,r=e.footerConfig,m=void 0===r?null:r,u=Object(o.useContext)(l.b);return Object(o.useEffect)((function(){u.themeDark?(u.setHeader(c(c(c({},d),a),{},{theme:"dark"})),u.setFooter(c(c(c({},p),m),{},{theme:"dark"}))):(u.setHeader(c(c({},d),a)),u.setFooter(c(c({},p),m)))}),[u.themeDark,a,m]),s(i.a.Fragment,null,t)}},YFqc:function(e,t,n){e.exports=n("cTJO")},YKE2:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/job-details",function(){return n("pfOR")}])},cTJO:function(e,t,n){"use strict";var a=n("zoAU"),o=n("7KCV");t.__esModule=!0,t.default=void 0;var i,l=o(n("q1tI")),s=n("elyg"),r=n("nOHt"),c=new Map,d=window.IntersectionObserver,p={};var m=function(e,t){var n=i||(d?i=new d((function(e){e.forEach((function(e){if(c.has(e.target)){var t=c.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),c.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0);return n?(n.observe(e),c.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}c.delete(e)}):function(){}};function u(e,t,n,a){(0,s.isLocalURL)(t)&&(e.prefetch(t,n,a).catch((function(e){0})),p[t+"%"+n]=!0)}var f=function(e){var t=!1!==e.prefetch,n=(0,r.useRouter)(),o=n&&n.pathname||"/",i=l.default.useMemo((function(){var t=(0,s.resolveHref)(o,e.href,!0),n=a(t,2),i=n[0],l=n[1];return{href:i,as:e.as?(0,s.resolveHref)(o,e.as):l||i}}),[o,e.href,e.as]),c=i.href,f=i.as,h=e.children,b=e.replace,g=e.shallow,w=e.scroll,y=e.locale;"string"===typeof h&&(h=l.default.createElement("a",null,h));var v=l.Children.only(h),N=v&&"object"===typeof v&&v.ref,x=l.default.useRef(),_={ref:l.default.useCallback((function(e){(x.current&&(x.current(),x.current=void 0),t&&d&&e&&e.tagName&&(0,s.isLocalURL)(c))&&(p[c+"%"+f]||(x.current=m(e,(function(){u(n,c,f,{locale:"undefined"!==typeof y?y:n&&n.locale})}))));N&&("function"===typeof N?N(e):"object"===typeof N&&(N.current=e))}),[t,N,c,f,n,y]),onClick:function(e){v.props&&"function"===typeof v.props.onClick&&v.props.onClick(e),e.defaultPrevented||function(e,t,n,a,o,i,l,r){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,s.isLocalURL)(n))&&(e.preventDefault(),null==l&&(l=a.indexOf("#")<0),t[o?"replace":"push"](n,a,{shallow:i,locale:r}).then((function(e){e&&l&&(window.scrollTo(0,0),document.body.focus())})))}(e,n,c,f,b,g,w,y)}};return t&&(_.onMouseEnter=function(e){(0,s.isLocalURL)(c)&&(v.props&&"function"===typeof v.props.onMouseEnter&&v.props.onMouseEnter(e),u(n,c,f,{priority:!0}))}),(e.passHref||"a"===v.type&&!("href"in v.props))&&(_.href=(0,s.addBasePath)((0,s.addLocale)(f,"undefined"!==typeof y?y:n&&n.locale,n&&n.defaultLocale))),l.default.cloneElement(v,_)};t.default=f},pfOR:function(e,t,n){"use strict";n.r(t);var a=n("vOnD"),o=n("q1tI"),i=n.n(o),l=n("YFqc"),s=n.n(l),r=n("7vrA"),c=n("3Z9Z"),d=n("JI6e"),p=n("GPKm"),m=i.a.createElement;t.default=function(){return m(i.a.Fragment,null,m(p.a,{headerConfig:{align:"right",button:"account"}},m("div",{className:"inner-banner pt-29 pt-lg-30 pb-9 pb-lg-12 bg-default-6"},m(r.a,null,m(c.a,{className:"justify-content-center pt-5"},m(d.a,{xl:"8",lg:"9"},m("div",{className:"px-md-15 text-center"},m("h2",{className:"title gr-text-2 mb-8 mb-lg-10"},"Full Stack Developer"),m("p",{className:"gr-text-7 mb-0 mb-lg-13"},"Full Time, Remote")))))),m("div",{className:"main-block pb-6 pb-lg-17 bg-default-6"},m(r.a,null,m(c.a,{className:"justify-content-center"},m(d.a,{xl:"8",lg:"9"},m("div",{className:"single-block mb-12 mb-lg-15"},m("p",{className:"gr-text-9 mb-9"},"Headquartered in Melbourne, Australia, Envato is a completely online company with an ecosystem of sites and services to help people get creative. We\u2019ve consistently been named as one of the Best Places to Work in Australia, since 2015, in the BRW Awards, and we\u2019ve also been awarded the title of Australia's Coolest Company for Women and Diversity by JobAdvisor."),m("p",{className:"gr-text-9 mb-9"},"Envato was found in 2006 and, since then, we\u2019ve helped a community of creative sellers earn more than $500 Million. Millions of people around the world choose our marketplace, studio and courses to buy files, hire freelancers, or learn the skills needed to build websites, videos, apps, graphics and more. Find out more at Envato Market, Envato Elements, Envato Sites, Envato Studio and Tuts+."),m("p",{className:"gr-text-9 mb-0"},"You might be surprised to know that not only do we run some of the biggest websites in the world; we\u2019re also growing really fast! We have close to 600 staff and contractors worldwide, adding more than 100 people to the business, year on year, since 2017.")),m("div",{className:"single-block mb-12 mb-lg-15"},m("h3",{className:"gr-text-6 font-weight-bold mb-9"},"What you\u2019ll be doing"),m("p",{className:"gr-text-9 mb-0"},"A Senior Data Engineer provides technical and delivery leadership for a team of developers working on data integration and processing projects. This role will work with stakeholders and other developers to design and implement technical data solutions for the business in a way that balances quality, cost, time and maintainability.")),m("div",{className:"single-block mb-12 mb-lg-14"},m("h3",{className:"gr-text-6 font-weight-bold pb-3"},"Skills & Qualifications"),m("ul",{className:"list-unstyled"},m("li",{className:"mt-7 gr-text-9"},m(u,{className:"rounded-circle bg-opposite d-inline-block mr-5"}),"Business Intelligence solutions"),m("li",{className:"mt-7 gr-text-9"},m(f,{className:"rounded-circle bg-opposite d-inline-block mr-5"}),"Cloud computing platforms (AWS)"),m("li",{className:"mt-7 gr-text-9"},m(h,{className:"rounded-circle bg-opposite d-inline-block mr-5"}),"Relevant server-side programming languages (C# .NET)"),m("li",{className:"mt-7 gr-text-9"},m(b,{className:"rounded-circle bg-opposite d-inline-block mr-5"}),"SQL and NoSQL database solutions (AWS Redshift and AWS DynamoDB)"),m("li",{className:"mt-7 gr-text-9"},m(g,{className:"rounded-circle bg-opposite d-inline-block mr-5"}),"Big data processing frameworks and concepts"),m("li",{className:"mt-7 gr-text-9"},m(w,{className:"rounded-circle bg-opposite d-inline-block mr-5"})," ","DevOps practices"),m("li",{className:"mt-7 gr-text-9"},m(y,{className:"rounded-circle bg-opposite d-inline-block mr-5"}),"Serverless Architecture"),m("li",{className:"mt-7 gr-text-9"},m(v,{className:"rounded-circle bg-opposite d-inline-block mr-5"}),"*NIX operating systems"),m("li",{className:"mt-7 gr-text-9"},m(N,{className:"rounded-circle bg-opposite d-inline-block mr-5"}),"Demonstrates ability to communicate effectively with the rest of the team"))),m("div",{className:"single-block mb-12 mb-lg-15"},m("h3",{className:"gr-text-6 font-weight-bold mb-9"},"How to apply"),m("p",{className:"gr-text-9 mb-9"},"A Senior Data Engineer provides technical and delivery leadership for a team of developers working on data integration and processing projects. This role will work with stakeholders and other developers to design and implement technical data solutions for the business in a way that balances quality, cost, time and maintainability."),m(s.a,{href:"/"},m("a",{className:"btn btn-primary mt-3 mt-lg-10"},"Apply for this job")))))))))};var u=Object(a.c)("i").withConfig({displayName:"job-details___StyledI",componentId:"sc-11lwe5d-0"})(["width:9px;height:9px;"]),f=Object(a.c)("i").withConfig({displayName:"job-details___StyledI2",componentId:"sc-11lwe5d-1"})(["width:9px;height:9px;"]),h=Object(a.c)("i").withConfig({displayName:"job-details___StyledI3",componentId:"sc-11lwe5d-2"})(["width:9px;height:9px;"]),b=Object(a.c)("i").withConfig({displayName:"job-details___StyledI4",componentId:"sc-11lwe5d-3"})(["width:9px;height:9px;"]),g=Object(a.c)("i").withConfig({displayName:"job-details___StyledI5",componentId:"sc-11lwe5d-4"})(["width:9px;height:9px;"]),w=Object(a.c)("i").withConfig({displayName:"job-details___StyledI6",componentId:"sc-11lwe5d-5"})(["width:9px;height:9px;"]),y=Object(a.c)("i").withConfig({displayName:"job-details___StyledI7",componentId:"sc-11lwe5d-6"})(["width:9px;height:9px;"]),v=Object(a.c)("i").withConfig({displayName:"job-details___StyledI8",componentId:"sc-11lwe5d-7"})(["width:9px;height:9px;"]),N=Object(a.c)("i").withConfig({displayName:"job-details___StyledI9",componentId:"sc-11lwe5d-8"})(["width:9px;height:9px;"])}},[["YKE2",0,1,2,3]]]);