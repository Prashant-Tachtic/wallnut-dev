"use strict";(self.webpackChunkecomm_levity=self.webpackChunkecomm_levity||[]).push([[725],{2725:(e,t,r)=>{r.r(t),r.d(t,{default:()=>w});r(7327),r(6699),r(2023),r(1249),r(9070),r(7941),r(2526),r(5003),r(9554),r(4747),r(9337),r(3321);var n=r(7294),a=r(1893),i=r(5697),l=r.n(i),c=(r(1038),r(8783),r(4553),r(9753),r(1817),r(1539),r(2165),r(6992),r(3948),r(7042),r(8309),r(3848));function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,a,i=[],l=!0,c=!1;try{for(r=r.call(e);!(l=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);l=!0);}catch(e){c=!0,a=e}finally{try{l||null==r.return||r.return()}finally{if(c)throw a}}return i}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return s(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return s(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var u=function(e){var t=e.images,r=e.watchForReset,a=(0,n.useRef)(),i=o((0,n.useState)(0),2),l=i[0],s=i[1];(0,n.useEffect)((function(){a.current.scrollTo(0,0),s(0)}),[r]);var u=function(e){var t=a.current.children[e].getBoundingClientRect();a.current.scrollTo(a.current.scrollLeft+t.left,0),s(e)};return n.createElement("div",{className:"md:hidden mb-5 w-full h-full"},n.createElement(m,{ref:a,onScroll:function(){var e=a.current.scrollLeft,t=a.current.scrollWidth/a.current.children.length,r=Array.from(a.current.children).map((function(e,r){return Math.round(r*t)})).findIndex((function(t){return t-5>e||e<t+5}));s(r)}},t.map((function(e,t){return n.createElement("a",{key:t,href:e.pageUrl},n.createElement(c.Z,{image:e.url,alt:e.alt,backgroundImage:!0}))}))),t.length>1&&n.createElement(n.Fragment,null,n.createElement("div",{className:"flex justify-center space-x-1 mt-2"},t.map((function(e,t){return n.createElement(c.Z,{key:t,image:e.url,currentImage:l===t,onClick:function(){return u(t)},onMouseOver:function(){return u(t)},thumbnail:!0,alt:e.alt})})))))};u.defaultProps={watchForReset:""},u.propTypes={images:l().arrayOf(l().shape({url:l().string,alt:l().string,pageUrl:l().string})).isRequired,watchForReset:l().string};var m=a.ZP.div.attrs({className:"relative"}).withConfig({displayName:"InstagramCarousel__CarouselContainer",componentId:"sc-170d3do-0"})(["height:395px;overflow-x:scroll;overflow-y:hidden;white-space:nowrap;scroll-snap-type:x mandatory;-ms-overflow-style:none;scrollbar-width:none;&::-webkit-scrollbar{display:none;}& > *{scroll-snap-align:center;}"]);const d=u;function g(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function f(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var p=[{pageUrl:"/products/the-classic-lounge-chair?variant=41295081963671"},{pageUrl:"/products/the-scandinavian-dining-chair?variant=41295083700375"},{pageUrl:"/products/the-scandinavian-dining-chair?variant=41295083667607"},{pageUrl:"/products/the-scandinavian-lounge-chair?variant=41295079964823"},{pageUrl:"/products/the-classic-dining-chair?variant=41295112208535"},{pageUrl:"/products/the-classic-lounge-chair?variant=41295082225815"}],h=function(e){return e.filter((function(e){return e.settings.grid_picture.includes("Mobile")})).map((function(e,t){return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?g(Object(r),!0).forEach((function(t){f(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):g(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({url:e.settings.grid_picture,alt:"carousel image"},p[t])}))},y=function(e){var t=e.settings,r=e.blocks,a=t.link_text,i=t.link_url;return n.createElement(b,null,n.createElement("div",{className:"mb-5"},n.createElement("h1",{className:"inline font-serif text-navy"},"Bring "),n.createElement("h1",{className:"md:inline font-serif font-normal text-navy"},"#Levityhome")),n.createElement("div",{className:"hidden md:flex"},n.createElement("a",{href:p[0].pageUrl},n.createElement(v,{image:r[0].settings.grid_picture})),n.createElement("a",{className:"md:ml-auto lg:mb-6 md:mb-3",href:p[1].pageUrl},n.createElement(v,{image:r[1].settings.grid_picture}))),n.createElement("div",{className:"hidden md:flex"},n.createElement("a",{href:p[2].pageUrl},n.createElement(v,{image:r[2].settings.grid_picture})),n.createElement("a",{className:"md:ml-auto lg:mb-6 md:mb-3",href:p[3].pageUrl},n.createElement(v,{image:r[3].settings.grid_picture}))),n.createElement("div",{className:"hidden md:flex"},n.createElement("a",{href:p[4].pageUrl},n.createElement(v,{image:r[4].settings.grid_picture})),n.createElement("a",{className:"md:ml-auto lg:mb-6 md:mb-3",href:p[5].pageUrl},n.createElement(v,{image:r[5].settings.grid_picture}))),n.createElement(d,{images:h(r),display:"md:hidden"}),n.createElement("a",{className:"no-underline text-navy font-normal border-b-2 border-orange-burnt pb-1",href:i},a))},b=a.ZP.div.attrs({className:"lg:max-w-6xl md:w-11/12 mx-auto md:mb-20 mb-15 text-center"}).withConfig({displayName:"InstagramGrid__StyledDiv",componentId:"sc-1r9otmz-0"})([""]),v=a.ZP.img.attrs((function(e){return{src:e.image,alt:"grid"}})).withConfig({displayName:"InstagramGrid__StyledImage",componentId:"sc-1r9otmz-1"})(["@media screen and (min-width:960px){height:450px;}@media screen and (min-width:760px) and (max-width:959px){height:275px;}"]);y.defaultProps={settings:{link_text:"",link_url:""},blocks:[]},y.propTypes={settings:l().shape({link_text:l().string,link_url:l().string}),blocks:l().arrayOf({})};const w=y}}]);