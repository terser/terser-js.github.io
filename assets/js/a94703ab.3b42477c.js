"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[368],{1081:(e,t,n)=>{n.r(t),n.d(t,{default:()=>pe});var a=n(7294),o=n(512),i=n(833),s=n(5281),r=n(2802),l=n(1116),c=n(5999),d=n(2466),u=n(5936);const m={backToTopButton:"backToTopButton_sjWU",backToTopButtonShow:"backToTopButtonShow_xfvO"};var b=n(5893);function h(){const{shown:e,scrollToTop:t}=function(e){let{threshold:t}=e;const[n,o]=(0,a.useState)(!1),i=(0,a.useRef)(!1),{startScroll:s,cancelScroll:r}=(0,d.Ct)();return(0,d.RF)(((e,n)=>{let{scrollY:a}=e;const s=n?.scrollY;s&&(i.current?i.current=!1:a>=s?(r(),o(!1)):a<t?o(!1):a+window.innerHeight<document.documentElement.scrollHeight&&o(!0))})),(0,u.S)((e=>{e.location.hash&&(i.current=!0,o(!1))})),{shown:n,scrollToTop:()=>s(0)}}({threshold:300});return(0,b.jsx)("button",{"aria-label":(0,c.I)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,o.Z)("clean-btn",s.k.common.backToTopButton,m.backToTopButton,e&&m.backToTopButtonShow),type:"button",onClick:t})}var p=n(1442),x=n(6550),f=n(7524),j=n(6668),v=n(1327);function k(e){return(0,b.jsx)("svg",{width:"20",height:"20","aria-hidden":"true",...e,children:(0,b.jsxs)("g",{fill:"#7a7a7a",children:[(0,b.jsx)("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),(0,b.jsx)("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})]})})}const _={collapseSidebarButton:"collapseSidebarButton_PEFL",collapseSidebarButtonIcon:"collapseSidebarButtonIcon_kv0_"};function g(e){let{onClick:t}=e;return(0,b.jsx)("button",{type:"button",title:(0,c.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,c.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,o.Z)("button button--secondary button--outline",_.collapseSidebarButton),onClick:t,children:(0,b.jsx)(k,{className:_.collapseSidebarButtonIcon})})}var C=n(9689),S=n(902);const I=Symbol("EmptyContext"),N=a.createContext(I);function T(e){let{children:t}=e;const[n,o]=(0,a.useState)(null),i=(0,a.useMemo)((()=>({expandedItem:n,setExpandedItem:o})),[n]);return(0,b.jsx)(N.Provider,{value:i,children:t})}var y=n(6043),B=n(8596),Z=n(3692),w=n(2389);function A(e){let{collapsed:t,categoryLabel:n,onClick:a}=e;return(0,b.jsx)("button",{"aria-label":t?(0,c.I)({id:"theme.DocSidebarItem.expandCategoryAriaLabel",message:"Expand sidebar category '{label}'",description:"The ARIA label to expand the sidebar category"},{label:n}):(0,c.I)({id:"theme.DocSidebarItem.collapseCategoryAriaLabel",message:"Collapse sidebar category '{label}'",description:"The ARIA label to collapse the sidebar category"},{label:n}),type:"button",className:"clean-btn menu__caret",onClick:a})}function L(e){let{item:t,onItemClick:n,activePath:i,level:l,index:c,...d}=e;const{items:u,label:m,collapsible:h,className:p,href:x}=t,{docs:{sidebar:{autoCollapseCategories:f}}}=(0,j.L)(),v=function(e){const t=(0,w.Z)();return(0,a.useMemo)((()=>e.href&&!e.linkUnlisted?e.href:!t&&e.collapsible?(0,r.LM)(e):void 0),[e,t])}(t),k=(0,r._F)(t,i),_=(0,B.Mg)(x,i),{collapsed:g,setCollapsed:C}=(0,y.u)({initialState:()=>!!h&&(!k&&t.collapsed)}),{expandedItem:T,setExpandedItem:L}=function(){const e=(0,a.useContext)(N);if(e===I)throw new S.i6("DocSidebarItemsExpandedStateProvider");return e}(),E=function(e){void 0===e&&(e=!g),L(e?null:c),C(e)};return function(e){let{isActive:t,collapsed:n,updateCollapsed:o}=e;const i=(0,S.D9)(t);(0,a.useEffect)((()=>{t&&!i&&n&&o(!1)}),[t,i,n,o])}({isActive:k,collapsed:g,updateCollapsed:E}),(0,a.useEffect)((()=>{h&&null!=T&&T!==c&&f&&C(!0)}),[h,T,c,C,f]),(0,b.jsxs)("li",{className:(0,o.Z)(s.k.docs.docSidebarItemCategory,s.k.docs.docSidebarItemCategoryLevel(l),"menu__list-item",{"menu__list-item--collapsed":g},p),children:[(0,b.jsxs)("div",{className:(0,o.Z)("menu__list-item-collapsible",{"menu__list-item-collapsible--active":_}),children:[(0,b.jsx)(Z.Z,{className:(0,o.Z)("menu__link",{"menu__link--sublist":h,"menu__link--sublist-caret":!x&&h,"menu__link--active":k}),onClick:h?e=>{n?.(t),x?E(!1):(e.preventDefault(),E())}:()=>{n?.(t)},"aria-current":_?"page":void 0,"aria-expanded":h?!g:void 0,href:h?v??"#":v,...d,children:m}),x&&h&&(0,b.jsx)(A,{collapsed:g,categoryLabel:m,onClick:e=>{e.preventDefault(),E()}})]}),(0,b.jsx)(y.z,{lazy:!0,as:"ul",className:"menu__list",collapsed:g,children:(0,b.jsx)(K,{items:u,tabIndex:g?-1:0,onItemClick:n,activePath:i,level:l+1})})]})}var E=n(3919),H=n(9471);const M={menuExternalLink:"menuExternalLink_NmtK"};function W(e){let{item:t,onItemClick:n,activePath:a,level:i,index:l,...c}=e;const{href:d,label:u,className:m,autoAddBaseUrl:h}=t,p=(0,r._F)(t,a),x=(0,E.Z)(d);return(0,b.jsx)("li",{className:(0,o.Z)(s.k.docs.docSidebarItemLink,s.k.docs.docSidebarItemLinkLevel(i),"menu__list-item",m),children:(0,b.jsxs)(Z.Z,{className:(0,o.Z)("menu__link",!x&&M.menuExternalLink,{"menu__link--active":p}),autoAddBaseUrl:h,"aria-current":p?"page":void 0,to:d,...x&&{onClick:n?()=>n(t):void 0},...c,children:[u,!x&&(0,b.jsx)(H.Z,{})]})},u)}const R={menuHtmlItem:"menuHtmlItem_M9Kj"};function F(e){let{item:t,level:n,index:a}=e;const{value:i,defaultStyle:r,className:l}=t;return(0,b.jsx)("li",{className:(0,o.Z)(s.k.docs.docSidebarItemLink,s.k.docs.docSidebarItemLinkLevel(n),r&&[R.menuHtmlItem,"menu__list-item"],l),dangerouslySetInnerHTML:{__html:i}},a)}function P(e){let{item:t,...n}=e;switch(t.type){case"category":return(0,b.jsx)(L,{item:t,...n});case"html":return(0,b.jsx)(F,{item:t,...n});default:return(0,b.jsx)(W,{item:t,...n})}}function D(e){let{items:t,...n}=e;const a=(0,r.f)(t,n.activePath);return(0,b.jsx)(T,{children:a.map(((e,t)=>(0,b.jsx)(P,{item:e,index:t,...n},t)))})}const V=(0,a.memo)(D);var U=n(7828);function K(e){return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(V,{...e}),(0,b.jsx)("div",{style:{padding:"2ex 1ex"},children:(0,b.jsx)(U.Z,{desktopOnly:!0},e.activePath)})]})}const Y={menu:"menu_SIkG",menuWithAnnouncementBar:"menuWithAnnouncementBar_GW3s"};function z(e){let{path:t,sidebar:n,className:i}=e;const r=function(){const{isActive:e}=(0,C.nT)(),[t,n]=(0,a.useState)(e);return(0,d.RF)((t=>{let{scrollY:a}=t;e&&n(0===a)}),[e]),e&&t}();return(0,b.jsx)("nav",{"aria-label":(0,c.I)({id:"theme.docs.sidebar.navAriaLabel",message:"Docs sidebar",description:"The ARIA label for the sidebar navigation"}),className:(0,o.Z)("menu thin-scrollbar",Y.menu,r&&Y.menuWithAnnouncementBar,i),children:(0,b.jsx)("ul",{className:(0,o.Z)(s.k.docs.docSidebarMenu,"menu__list"),children:(0,b.jsx)(K,{items:n,activePath:t,level:1})})})}const G="sidebar_njMd",O="sidebarWithHideableNavbar_wUlq",q="sidebarHidden_VK0M",J="sidebarLogo_isFc";function Q(e){let{path:t,sidebar:n,onCollapse:a,isHidden:i}=e;const{navbar:{hideOnScroll:s},docs:{sidebar:{hideable:r}}}=(0,j.L)();return(0,b.jsxs)("div",{className:(0,o.Z)(G,s&&O,i&&q),children:[s&&(0,b.jsx)(v.Z,{tabIndex:-1,className:J}),(0,b.jsx)(z,{path:t,sidebar:n}),r&&(0,b.jsx)(g,{onClick:a})]})}const X=a.memo(Q);var $=n(3102),ee=n(3163);const te=e=>{let{sidebar:t,path:n}=e;const a=(0,ee.e)();return(0,b.jsx)("ul",{className:(0,o.Z)(s.k.docs.docSidebarMenu,"menu__list"),children:(0,b.jsx)(K,{items:t,activePath:n,onItemClick:e=>{"category"===e.type&&e.href&&a.toggle(),"link"===e.type&&a.toggle()},level:1})})};function ne(e){return(0,b.jsx)($.Zo,{component:te,props:e})}const ae=a.memo(ne);function oe(e){const t=(0,f.i)(),n="desktop"===t||"ssr"===t,a="mobile"===t;return(0,b.jsxs)(b.Fragment,{children:[n&&(0,b.jsx)(X,{...e}),a&&(0,b.jsx)(ae,{...e})]})}const ie={expandButton:"expandButton_TmdG",expandButtonIcon:"expandButtonIcon_i1dp"};function se(e){let{toggleSidebar:t}=e;return(0,b.jsx)("div",{className:ie.expandButton,title:(0,c.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,c.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:t,onClick:t,children:(0,b.jsx)(k,{className:ie.expandButtonIcon})})}const re={docSidebarContainer:"docSidebarContainer_YfHR",docSidebarContainerHidden:"docSidebarContainerHidden_DPk8",sidebarViewport:"sidebarViewport_aRkj"};function le(e){let{children:t}=e;const n=(0,l.V)();return(0,b.jsx)(a.Fragment,{children:t},n?.name??"noSidebar")}function ce(e){let{sidebar:t,hiddenSidebarContainer:n,setHiddenSidebarContainer:i}=e;const{pathname:r}=(0,x.TH)(),[l,c]=(0,a.useState)(!1),d=(0,a.useCallback)((()=>{l&&c(!1),!l&&(0,p.n)()&&c(!0),i((e=>!e))}),[i,l]);return(0,b.jsx)("aside",{className:(0,o.Z)(s.k.docs.docSidebarContainer,re.docSidebarContainer,n&&re.docSidebarContainerHidden),onTransitionEnd:e=>{e.currentTarget.classList.contains(re.docSidebarContainer)&&n&&c(!0)},children:(0,b.jsx)(le,{children:(0,b.jsxs)("div",{className:(0,o.Z)(re.sidebarViewport,l&&re.sidebarViewportHidden),children:[(0,b.jsx)(oe,{sidebar:t,path:r,onCollapse:d,isHidden:l}),l&&(0,b.jsx)(se,{toggleSidebar:d})]})})})}const de={docMainContainer:"docMainContainer_TBSr",docMainContainerEnhanced:"docMainContainerEnhanced_lQrH",docItemWrapperEnhanced:"docItemWrapperEnhanced_JWYK"};function ue(e){let{hiddenSidebarContainer:t,children:n}=e;const a=(0,l.V)();return(0,b.jsx)("main",{className:(0,o.Z)(de.docMainContainer,(t||!a)&&de.docMainContainerEnhanced),children:(0,b.jsx)("div",{className:(0,o.Z)("container padding-top--md padding-bottom--lg",de.docItemWrapper,t&&de.docItemWrapperEnhanced),children:n})})}const me={docRoot:"docRoot_UBD9",docsWrapper:"docsWrapper_hBAB"};function be(e){let{children:t}=e;const n=(0,l.V)(),[o,i]=(0,a.useState)(!1);return(0,b.jsxs)("div",{className:me.docsWrapper,children:[(0,b.jsx)(h,{}),(0,b.jsxs)("div",{className:me.docRoot,children:[n&&(0,b.jsx)(ce,{sidebar:n.items,hiddenSidebarContainer:o,setHiddenSidebarContainer:i}),(0,b.jsx)(ue,{hiddenSidebarContainer:o,children:t})]})]})}var he=n(5658);function pe(e){const t=(0,r.SN)(e);if(!t)return(0,b.jsx)(he.Z,{});const{docElement:n,sidebarName:a,sidebarItems:c}=t;return(0,b.jsx)(i.FG,{className:(0,o.Z)(s.k.page.docsDocPage),children:(0,b.jsx)(l.b,{name:a,items:c,children:(0,b.jsx)(be,{children:n})})})}},5658:(e,t,n)=>{n.d(t,{Z:()=>r});n(7294);var a=n(512),o=n(5999),i=n(2503),s=n(5893);function r(e){let{className:t}=e;return(0,s.jsx)("main",{className:(0,a.Z)("container margin-vert--xl",t),children:(0,s.jsx)("div",{className:"row",children:(0,s.jsxs)("div",{className:"col col--6 col--offset-3",children:[(0,s.jsx)(i.Z,{as:"h1",className:"hero__title",children:(0,s.jsx)(o.Z,{id:"theme.NotFound.title",description:"The title of the 404 page",children:"Page Not Found"})}),(0,s.jsx)("p",{children:(0,s.jsx)(o.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page",children:"We could not find what you were looking for."})}),(0,s.jsx)("p",{children:(0,s.jsx)(o.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page",children:"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."})})]})})})}},7828:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7294),o=n(5893);function i(e){let{desktopOnly:t}=e;const n=(0,a.useRef)(null);return(0,a.useEffect)((()=>{if(t&&!window.matchMedia?.("(min-width: 1000px)").matches)return;let e;const a=setTimeout((()=>{n.current&&(e=s(n.current))}),100);return()=>{clearTimeout(a),e?.remove()}}),[]),(0,o.jsx)("div",{ref:n})}const s=e=>{const t=document.createElement("script");return t.id="_carbonads_js",t.async=!0,t.type="text/javascript",t.src="//cdn.carbonads.com/carbon.js?serve=CWYDK53W&placement=terserorg",e.appendChild(t),t}}}]);