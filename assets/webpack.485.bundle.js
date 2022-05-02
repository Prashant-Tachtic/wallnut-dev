"use strict";(self.webpackChunkecomm_levity=self.webpackChunkecomm_levity||[]).push([[485],{7271:(e,t,r)=>{r.d(t,{Z:()=>g});r(7268);var n=r(7294),o=r(5697),a=r.n(o),i=r(1893),c=r(1573),l=function(e){var t=e.option,r=e.small;return n.createElement(u,{small:r,"aria-label":"change to ".concat(t.toLowerCase()," variant"),option:t})},u=i.ZP.div.attrs((function(e){var t=e.small;return{className:"bg-white bg-no-repeat rounded-full ".concat(t?"h-8 w-8":"h-7 w-7 md:h-9 md:w-9")}})).withConfig({displayName:"ColorSwatch__ColorSwatchContainer",componentId:"sc-skv415-0"})(["",""],(function(e){var t=e.option;return"\n    background-image: url(".concat((0,c.n3)(t),");\n    background-size: 36px 36px;\n  ")}));l.defaultProps={small:!1},l.propTypes={option:a().string.isRequired,small:a().bool};const g=l},1994:(e,t,r)=>{r.d(t,{Z:()=>s});r(9753),r(2526),r(1817),r(1539),r(2165),r(6992),r(8783),r(3948),r(7042),r(8309),r(1038);var n=r(7294),o=r(5697),a=r.n(o),i=r(1893);function c(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,o,a=[],i=!0,c=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);i=!0);}catch(e){c=!0,o=e}finally{try{i||null==r.return||r.return()}finally{if(c)throw o}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return l(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return l(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var u=function(e){var t=e.image,r=e.currentImage,o=e.onClick,a=e.onMouseOver,i=e.thumbnail,l=e.alt,u=e.backgroundImage,s=e.bgCover,b=c((0,n.useState)(!1),2),d=b[0],p=b[1],f=c((0,n.useState)({width:0,height:0}),2),h=f[0],v=f[1],w=(0,n.useRef)();return(0,n.useEffect)((function(){if(w.current){var e=document.createElement("img");e.src=t,e.onload=function(){p(e.width>e.height),v({width:e.width,height:e.height})}}}),[w,t,h]),i?n.createElement(m,{image:t,currentImage:r,onClick:o,onMouseOver:a,role:"img","aria-label":"".concat(l," thumbnail")}):u?n.createElement(g,{ref:w,image:t,role:"img","aria-label":l,isLandscape:d,imageSize:h,bgCover:s}):n.createElement("img",{alt:l,src:t})},g=i.ZP.span.attrs((function(e){var t=e.isLandscape,r=e.bgCover,n="bg-center bg-no-repeat h-full w-full inline-block";return{className:n="".concat(n,t||r?" bg-cover":" bg-contain")}})).withConfig({displayName:"Image__ImageContainer",componentId:"sc-1dfreok-0"})(["background-image:url(",");"],(function(e){return e.image})),m=i.ZP.span.attrs({className:"cursor-pointer bg-contain bg-center bg-no-repeat lg:bg-transparent mt-2 h-1.5 w-10 lg:h-16 lg:w-16"}).withConfig({displayName:"Image__ThumbnailContainer",componentId:"sc-1dfreok-1"})([""," @media (min-width:1024px){"," background-origin:content-box;background-image:url(",");}"],(function(e){return e.currentImage?{"--tw-bg-opacity":"1",backgroundColor:"rgba(107, 114, 128, var(--tw-bg-opacity))","@media (min-width: 1024px)":{borderBottomWidth:"2px","--tw-border-opacity":"1",borderColor:"rgba(107, 114, 128, var(--tw-border-opacity))"}}:{"--tw-bg-opacity":"1",backgroundColor:"rgba(229, 231, 235, var(--tw-bg-opacity))","@media (min-width: 1024px)":{opacity:"0.5"}}}),{paddingBottom:"0.25rem"},(function(e){return e.image}));u.defaultProps={thumbnail:!1,currentImage:!1,onClick:function(){},onMouseOver:function(){},backgroundImage:!1,bgCover:!1},u.propTypes={image:a().string.isRequired,currentImage:a().bool,onClick:a().func,onMouseOver:a().func,thumbnail:a().bool,alt:a().string.isRequired,backgroundImage:a().bool,bgCover:a().bool};const s=u}}]);