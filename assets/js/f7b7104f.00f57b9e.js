"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[437],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(r),m=a,d=p["".concat(l,".").concat(m)]||p[m]||f[m]||o;return r?n.createElement(d,i(i({ref:t},u),{},{components:r})):n.createElement(d,i({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8845:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>f,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const o={title:"terser v4.2.1"},i=void 0,s={permalink:"/blog/2019/8/24/terser-v4.2.1",source:"@site/blog/2019-8-24-terser-v4.2.1.md",title:"terser v4.2.1",description:"Version 4.2.1 is out!",date:"2019-08-24T00:00:00.000Z",formattedDate:"August 24, 2019",tags:[],readingTime:.425,hasTruncateMarker:!1,authors:[],frontMatter:{title:"terser v4.2.1"},prevItem:{title:"terser v4.3.0",permalink:"/blog/2019/9/7/terser-v4.3.0"},nextItem:{title:"terser v4.2.0",permalink:"/blog/2019/8/19/terser-v4.2.0"}},l={authorsImageUrls:[]},c=[{value:"Here&#39;s what&#39;s new:",id:"heres-whats-new",level:3}],u={toc:c},p="wrapper";function f(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Version 4.2.1 is out!"),(0,a.kt)("h3",{id:"heres-whats-new"},"Here's what's new:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Minor refactors"),(0,a.kt)("li",{parentName:"ul"},"Fixed a bug similar to ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/terser-js/terser/issues/369"},"#369")," in collapse_vars"),(0,a.kt)("li",{parentName:"ul"},"Functions can no longer be inlined into a place where they're going to be compared with themselves."),(0,a.kt)("li",{parentName:"ul"},"reduce_funcs option is now legacy, as using reduce_vars without reduce_funcs caused some weird corner cases. As a result, it is now implied in reduce_vars and can't be turned off without turning off reduce_vars."),(0,a.kt)("li",{parentName:"ul"},"Bug which would cause a random stack overflow has now been fixed.")))}f.isMDXComponent=!0}}]);