_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[7],{OKEM:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n("FdF9").default.createElement,r=function(e){var t=e.className,n=e.children;return a("span",{className:"inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold bg-gray-200 rounded ".concat(t)},n)}},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var a=n("zoAU"),r=n("7KCV");t.__esModule=!0,t.default=void 0;var o,c=r(n("FdF9")),l=n("elyg"),s=n("nOHt"),i=new Map,u=window.IntersectionObserver,f={};var h=function(e,t){var n=o||(u?o=new u((function(e){e.forEach((function(e){if(i.has(e.target)){var t=i.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(o.unobserve(e.target),i.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0);return n?(n.observe(e),i.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}i.delete(e)}):function(){}};function d(e,t,n,a){(0,l.isLocalURL)(t)&&(e.prefetch(t,n,a).catch((function(e){0})),f[t+"%"+n]=!0)}var p=function(e){var t=!1!==e.prefetch,n=c.default.useState(),r=a(n,2),o=r[0],i=r[1],p=(0,s.useRouter)(),m=p&&p.pathname||"/",v=c.default.useMemo((function(){var t=(0,l.resolveHref)(m,e.href,!0),n=a(t,2),r=n[0],o=n[1];return{href:r,as:e.as?(0,l.resolveHref)(m,e.as):o||r}}),[m,e.href,e.as]),w=v.href,g=v.as;c.default.useEffect((function(){if(t&&u&&o&&o.tagName&&(0,l.isLocalURL)(w)&&!f[w+"%"+g])return h(o,(function(){d(p,w,g)}))}),[t,o,w,g,p]);var b=e.children,N=e.replace,y=e.shallow,x=e.scroll,E=e.locale;"string"===typeof b&&(b=c.default.createElement("a",null,b));var O=c.Children.only(b),C={ref:function(e){e&&i(e),O&&"object"===typeof O&&O.ref&&("function"===typeof O.ref?O.ref(e):"object"===typeof O.ref&&(O.ref.current=e))},onClick:function(e){O.props&&"function"===typeof O.props.onClick&&O.props.onClick(e),e.defaultPrevented||function(e,t,n,a,r,o,c,s){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,l.isLocalURL)(n))&&(e.preventDefault(),null==c&&(c=a.indexOf("#")<0),t[r?"replace":"push"](n,a,{shallow:o,locale:s}).then((function(e){e&&c&&(window.scrollTo(0,0),document.body.focus())})))}(e,p,w,g,N,y,x,E)}};return t&&(C.onMouseEnter=function(e){(0,l.isLocalURL)(w)&&(O.props&&"function"===typeof O.props.onMouseEnter&&O.props.onMouseEnter(e),d(p,w,g,{priority:!0}))}),(e.passHref||"a"===O.type&&!("href"in O.props))&&(C.href=(0,l.addBasePath)((0,l.addLocale)(g,"undefined"!==typeof E?E:p&&p.locale,p&&p.defaultLocale))),c.default.cloneElement(O,C)};t.default=p},qUeO:function(e,t,n){"use strict";n.r(t);var a=n("FdF9"),r=n("OKEM"),o=n("YFqc"),c=n.n(o);function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var s=a.createElement("path",{d:"M17 2h-4v4.059a8.946 8.946 0 014 1.459V2zm-6 0H7v5.518a8.946 8.946 0 014-1.459V2zm1 20a7 7 0 100-14 7 7 0 000 14zm-1.225-8.519L12 11l1.225 2.481 2.738.397-1.981 1.932.468 2.727L12 17.25l-2.449 1.287.468-2.727-1.981-1.932 2.737-.397z"});var i=function(e){return a.createElement("svg",l({width:24,height:24},e),s)};function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var f=a.createElement("path",{d:"M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z"});var h=function(e){return a.createElement("svg",u({width:24,height:24},e),f)},d=a.default.createElement,p=function(e){for(var t=e.className,n=e.size,a=e.count,r=void 0===a?0:a,o=e.icon,c=void 0===o?h:o,l=e.unselectedColor,s=void 0===l?"white":l,i=e.selectedColor,u=void 0===i?"orange":i,f=e.onChangeCount,p=void 0===f?function(){}:f,m=[],v=function(e){m.push(d(c,{fill:r>e?u:s,onClick:function(){return p(e+1)}}))},w=0;w<n;w++)v(w);return d("div",{className:"flex flex-row ".concat(t)},m)},m=a.default.createElement,v=function(e){var t=e.className,n=e.children,a=e.href,r=e.imgSrc,o=e.title,l=e.stars,s=e.approved;return m(c.a,{href:a},m("div",{className:"max-w-sm overflow-hidden shadow-lg ".concat(t)},m("img",{src:r,className:"object-cover object-top w-full h-64"}),m("div",{className:"px-6 py-2"},m("div",{className:"w-auto flex flex-row ${className"},s&&m(p,{className:"mr-6",size:1,icon:i,count:1,selectedColor:"#666"}),l>0&&m(p,{size:5,icon:h,count:l,selectedColor:"#666",unselectedColor:"#ccc"})),m("h2",{className:"mb-2 text-xl font-semibold"},o),n)))},w=a.default.createElement,g=function(e){var t=e.className;return w("section",{className:"p-4 ".concat(t)},w("h1",{className:"text-2xl font-bold text-accent-1"},"Search by Category"),w("div",{className:"mt-2 mb-4"},w(r.a,{className:"text-white bg-blue-500"},"House Improvement"),w(r.a,{className:"text-white bg-green-700"},"Gardening"),w(r.a,{className:"text-white bg-purple-500"},"Neighbourhood")),w("h1",{className:"text-2xl font-bold text-accent-1"},"Editor's Choice"),w(v,{className:"mt-2 text-base text-accent-1",href:"hack/001",imgSrc:"hacks/001/title.jpg",title:"Plastic Bottle Cutter",stars:5,approved:!0},w("p",null,"With the plastic bottle cutter you can easily create stable polymer ropes of different widths from old plastic bottles.")),w("h1",{className:"mt-8 text-2xl font-bold text-accent-1"},"Hot Topic: Waste Water"),w(v,{className:"mt-2 text-base text-accent-1",href:"003",imgSrc:"hacks/003/title.jpg",title:"Grey Water Tower",stars:4,approved:!0},w("p",null,"Don't waste your waste water, water your plants instead...")),w("h1",{className:"mt-8 text-2xl font-bold text-accent-1"},"Latest Addition"),w(v,{className:"mt-2 text-base text-accent-1",href:"002",imgSrc:"hacks/002/title.jpg",title:"Working Ram",stars:2,approved:!1},w("p",null,"Easy to build and very stable working ram, made out of PET ropes produced with the ",w(c.a,{href:"hack/001"},"Plastic Bottle Cutter"))))};function b(){return(b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var N=a.createElement("path",{d:"M55.146 51.887L41.588 37.786A22.926 22.926 0 0046.984 23c0-12.682-10.318-23-23-23s-23 10.318-23 23 10.318 23 23 23c4.761 0 9.298-1.436 13.177-4.162l13.661 14.208c.571.593 1.339.92 2.162.92.779 0 1.518-.297 2.079-.837a3.004 3.004 0 00.083-4.242zM23.984 6c9.374 0 17 7.626 17 17s-7.626 17-17 17-17-7.626-17-17 7.626-17 17-17z"});var y=function(e){return a.createElement("svg",b({width:512,height:512,viewBox:"0 0 56.966 56.966"},e),N)};function x(){return(x=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var E=a.createElement("path",{d:"M13 5h9v2h-9zM2 7h7v2h2V3H9v2H2zm7 10h13v2H9zm10-6h3v2h-3zm-2 4V9.012h-2V11H2v2h13v2zM7 21v-6H5v2H2v2h3v2z"});var O=function(e){return a.createElement("svg",x({width:24,height:24},e),E)},C=a.default.createElement,k=function(e){var t=e.className;return C("div",{className:"mt-4 flex flex-row ".concat(t)},C(L,null),C(j,null))},j=function(e){var t=e.className,n=e.stars,r=void 0===n?0:n,o=Object(a.useState)(r),c=o[0],l=o[1];return C("div",{className:"flex flex-row ".concat(t)},C(h,{fill:c>0?"orange":"white",onClick:function(){return l(1==c?0:1)}}),C(h,{fill:c>1?"orange":"white",onClick:function(){return l(2)}}),C(h,{fill:c>2?"orange":"white",onClick:function(){return l(3)}}),C(h,{fill:c>3?"orange":"white",onClick:function(){return l(4)}}),C(h,{fill:c>4?"orange":"white",onClick:function(){return l(5)}}))},L=function(e){var t=e.className,n=Object(a.useState)(!1),r=n[0],o=n[1];return C("div",{className:"pr-6 ".concat(t)},C(i,{fill:r?"orange":"white",onClick:function(){return o((function(e){return!e}))}}))},z=a.default.createElement,M=function(e){var t=e.className,n=e.children,r=Object(a.useState)(!1),o=r[0],c=r[1];return z("section",{className:"relative w-full p-3 ".concat(t)},z("button",{className:"absolute p-3 focus:outline-none",onClick:function(){return c((function(e){return!e}))}},z(O,{className:"w-6 h-6",fill:"gray"})),z("button",{type:"submit",className:"absolute right-0 p-3 pr-6 focus:outline-none"},z(y,{className:"w-6 h-6",fill:"gray"})),z("input",{className:"w-full h-12 px-12 text-lg rounded-sm shadow-lg w- text-accent-1 focus:outline-none focus:shadow-outline",type:"search",placeholder:"Search..."}),o&&z(k,null),n)},_=a.default.createElement,H=function(e){var t=e.className;return _("main",{className:"container flex flex-col h-screen ".concat(t)},_(M,{className:"bg-accent-1"}),_(g,{className:"flex-1 overflow-y-auto"}))},P=a.default.createElement;t.default=function(){return P(H,null)}},swOd:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/hack-storage",function(){return n("qUeO")}])}},[["swOd",0,1,2]]]);