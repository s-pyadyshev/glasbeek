!function(){"use strict";var e,t={790:function(e,t,n){var o,i;o="undefined"!=typeof window?window:global,i=function(){var e=function(t,n){var o=Object.create(e.prototype),i=0,r=0,a=0,s=0,l=[],c=!0,d=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||window.oRequestAnimationFrame||function(e){return setTimeout(e,1e3/60)},u=null,p=!1;try{var m=Object.defineProperty({},"passive",{get:function(){p=!0}});window.addEventListener("testPassive",null,m),window.removeEventListener("testPassive",null,m)}catch(e){}var w=window.cancelAnimationFrame||window.mozCancelAnimationFrame||clearTimeout,v=window.transformProp||function(){var e=document.createElement("div");if(null===e.style.transform){var t=["Webkit","Moz","ms"];for(var n in t)if(void 0!==e.style[t[n]+"Transform"])return t[n]+"Transform"}return"transform"}();o.options={speed:-2,verticalSpeed:null,horizontalSpeed:null,breakpoints:[576,768,1201],center:!1,wrapper:null,relativeToWrapper:!1,round:!0,vertical:!0,horizontal:!1,verticalScrollAxis:"y",horizontalScrollAxis:"x",callback:function(){}},n&&Object.keys(n).forEach((function(e){o.options[e]=n[e]})),n&&n.breakpoints&&function(){if(3===o.options.breakpoints.length&&Array.isArray(o.options.breakpoints)){var e,t=!0,n=!0;if(o.options.breakpoints.forEach((function(o){"number"!=typeof o&&(n=!1),null!==e&&o<e&&(t=!1),e=o})),t&&n)return}o.options.breakpoints=[576,768,1201],console.warn("Rellax: You must pass an array of 3 numbers in ascending order to the breakpoints option. Defaults reverted")}(),t||(t=".rellax");var f="string"==typeof t?document.querySelectorAll(t):[t];if(f.length>0){if(o.elems=f,o.options.wrapper&&!o.options.wrapper.nodeType){var h=document.querySelector(o.options.wrapper);if(!h)return void console.warn("Rellax: The wrapper you're trying to use doesn't exist.");o.options.wrapper=h}var g,x=function(){for(var e=0;e<l.length;e++)o.elems[e].style.cssText=l[e].style;var t,n;l=[],r=window.innerHeight,t=s=window.innerWidth,n=o.options.breakpoints,g=t<n[0]?"xs":t>=n[0]&&t<n[1]?"sm":t>=n[1]&&t<n[2]?"md":"lg",y(),function(){for(var e=0;e<o.elems.length;e++){var t=b(o.elems[e]);l.push(t)}}(),E(),c&&(window.addEventListener("resize",x),c=!1,A())},b=function(e){var t,n=e.getAttribute("data-rellax-percentage"),i=e.getAttribute("data-rellax-speed"),a=e.getAttribute("data-rellax-xs-speed"),l=e.getAttribute("data-rellax-mobile-speed"),c=e.getAttribute("data-rellax-tablet-speed"),d=e.getAttribute("data-rellax-desktop-speed"),u=e.getAttribute("data-rellax-vertical-speed"),p=e.getAttribute("data-rellax-horizontal-speed"),m=e.getAttribute("data-rellax-vertical-scroll-axis"),w=e.getAttribute("data-rellax-horizontal-scroll-axis"),v=e.getAttribute("data-rellax-zindex")||0,f=e.getAttribute("data-rellax-min"),h=e.getAttribute("data-rellax-max"),x=e.getAttribute("data-rellax-min-x"),b=e.getAttribute("data-rellax-max-x"),y=e.getAttribute("data-rellax-min-y"),S=e.getAttribute("data-rellax-max-y"),A=!0;a||l||c||d?t={xs:a,sm:l,md:c,lg:d}:A=!1;var E=o.options.wrapper?o.options.wrapper.scrollTop:window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop;o.options.relativeToWrapper&&(E=(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop)-o.options.wrapper.offsetTop);var k=o.options.vertical&&(n||o.options.center)?E:0,q=o.options.horizontal&&(n||o.options.center)?o.options.wrapper?o.options.wrapper.scrollLeft:window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft:0,z=k+e.getBoundingClientRect().top,T=e.clientHeight||e.offsetHeight||e.scrollHeight,_=q+e.getBoundingClientRect().left,O=e.clientWidth||e.offsetWidth||e.scrollWidth,C=n||(k-z+r)/(T+r),P=n||(q-_+s)/(O+s);o.options.center&&(P=.5,C=.5);var $=A&&null!==t[g]?Number(t[g]):i||o.options.speed,V=u||o.options.verticalSpeed,B=p||o.options.horizontalSpeed,Y=m||o.options.verticalScrollAxis,j=w||o.options.horizontalScrollAxis,R=L(P,C,$,V,B),F=e.style.cssText,M="",X=/transform\s*:/i.exec(F);if(X){var H=X.index,W=F.slice(H),N=W.indexOf(";");M=N?" "+W.slice(11,N).replace(/\s/g,""):" "+W.slice(11).replace(/\s/g,"")}return{baseX:R.x,baseY:R.y,top:z,left:_,height:T,width:O,speed:$,verticalSpeed:V,horizontalSpeed:B,verticalScrollAxis:Y,horizontalScrollAxis:j,style:F,transform:M,zindex:v,min:f,max:h,minX:x,maxX:b,minY:y,maxY:S}},y=function(){var e=i,t=a;if(i=o.options.wrapper?o.options.wrapper.scrollTop:(document.documentElement||document.body.parentNode||document.body).scrollTop||window.pageYOffset,a=o.options.wrapper?o.options.wrapper.scrollLeft:(document.documentElement||document.body.parentNode||document.body).scrollLeft||window.pageXOffset,o.options.relativeToWrapper){var n=(document.documentElement||document.body.parentNode||document.body).scrollTop||window.pageYOffset;i=n-o.options.wrapper.offsetTop}return!(e==i||!o.options.vertical)||!(t==a||!o.options.horizontal)},L=function(e,t,n,i,r){var a={},s=(r||n)*(100*(1-e)),l=(i||n)*(100*(1-t));return a.x=o.options.round?Math.round(s):Math.round(100*s)/100,a.y=o.options.round?Math.round(l):Math.round(100*l)/100,a},S=function(){window.removeEventListener("resize",S),window.removeEventListener("orientationchange",S),(o.options.wrapper?o.options.wrapper:window).removeEventListener("scroll",S),(o.options.wrapper?o.options.wrapper:document).removeEventListener("touchmove",S),u=d(A)},A=function(){y()&&!1===c?(E(),u=d(A)):(u=null,window.addEventListener("resize",S),window.addEventListener("orientationchange",S),(o.options.wrapper?o.options.wrapper:window).addEventListener("scroll",S,!!p&&{passive:!0}),(o.options.wrapper?o.options.wrapper:document).addEventListener("touchmove",S,!!p&&{passive:!0}))},E=function(){for(var e,t=0;t<o.elems.length;t++){var n=l[t].verticalScrollAxis.toLowerCase(),c=l[t].horizontalScrollAxis.toLowerCase(),d=-1!=n.indexOf("x")?i:0,u=-1!=n.indexOf("y")?i:0,p=-1!=c.indexOf("x")?a:0,m=(u+(-1!=c.indexOf("y")?a:0)-l[t].top+r)/(l[t].height+r),w=(d+p-l[t].left+s)/(l[t].width+s),f=(e=L(w,m,l[t].speed,l[t].verticalSpeed,l[t].horizontalSpeed)).y-l[t].baseY,h=e.x-l[t].baseX;null!==l[t].min&&(o.options.vertical&&!o.options.horizontal&&(f=f<=l[t].min?l[t].min:f),o.options.horizontal&&!o.options.vertical&&(h=h<=l[t].min?l[t].min:h)),null!=l[t].minY&&(f=f<=l[t].minY?l[t].minY:f),null!=l[t].minX&&(h=h<=l[t].minX?l[t].minX:h),null!==l[t].max&&(o.options.vertical&&!o.options.horizontal&&(f=f>=l[t].max?l[t].max:f),o.options.horizontal&&!o.options.vertical&&(h=h>=l[t].max?l[t].max:h)),null!=l[t].maxY&&(f=f>=l[t].maxY?l[t].maxY:f),null!=l[t].maxX&&(h=h>=l[t].maxX?l[t].maxX:h);var g=l[t].zindex,x="translate3d("+(o.options.horizontal?h:"0")+"px,"+(o.options.vertical?f:"0")+"px,"+g+"px) "+l[t].transform;o.elems[t].style[v]=x}o.options.callback(e)};return o.destroy=function(){for(var e=0;e<o.elems.length;e++)o.elems[e].style.cssText=l[e].style;c||(window.removeEventListener("resize",x),c=!0),w(u),u=null},x(),o.refresh=x,o}console.warn("Rellax: The elements you're trying to select don't exist.")};return e},"function"==typeof define&&define.amd?define([],i):"object"==typeof module&&module.exports?module.exports=i():o.Rellax=i();const r=()=>{const e=document.querySelector(".js-toggle-menu");if(!e)return;const t=document.querySelector(".menu"),n=document.querySelector("body");e.addEventListener("click",(function(){e.classList.contains("active")?(e.classList.remove("active"),$(".menu__link").css("opacity","1"),$(".menu__link.dropdown").removeClass("active"),$(".js-dropdown").removeClass("is-open"),$(".js-dropdown").next().removeClass("show"),$(".js-dropdown").next().slideUp(0),n.classList.toggle("menu-active"),t.classList.add("menu--closed"),t.classList.remove("menu--open")):(e.classList.add("active"),n.classList.toggle("menu-active"),t.classList.add("menu--open"),t.classList.remove("menu--closed"))}))};var a=n(236),s=n(567);const l=function(){new a.A(".slider-news",{modules:[s.Vx,s.dK],slidesPerView:1,spaceBetween:18,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",clickable:"true",type:"bullets",bulletElement:"button"},breakpoints:{768:{slidesPerView:2.5,spaceBetween:36},1200:{slidesPerView:2.5}}})},c=function(){new a.A(".slider-photo",{modules:[s.Vx,s.dK],slidesPerView:1.5,spaceBetween:25,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",clickable:"true",type:"bullets",bulletElement:"button"},breakpoints:{768:{slidesPerView:2.5,spaceBetween:25}}})},d=function(){const e=new a.A(".slider-services",{modules:[s.Vx,s.dK],slidesPerView:1,spaceBetween:15,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",clickable:"true",type:"bullets",bulletElement:"button"},breakpoints:{768:{slidesPerView:1.5,spaceBetween:25},1600:{slidesPerView:2.5,spaceBetween:25},1921:{slidesPerView:3,spaceBetween:25}}});window.matchMedia("(min-width: 1200px)").matches&&e.slideTo(e.slides.length)},u=function(){new a.A(".slider-product",{modules:[s.Vx,s.dK],navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",clickable:"true",type:"bullets",bulletElement:"button"},spaceBetween:50})},p=function(){new a.A(".slider-clients",{modules:[s.Ij,s.xA],loop:!0,autoplay:{delay:3e3},breakpoints:{320:{grid:{rows:2},slidesPerView:2,spaceBetween:36},768:{grid:{rows:2},slidesPerView:3},1024:{grid:{rows:1},slidesPerView:4},1200:{slidesPerView:5,spaceBetween:60}}})},m=()=>{const e=document.querySelectorAll("[data-tabs]");e.length&&(document.querySelectorAll("[data-tabs-content] > [data-tab-content]").forEach((e=>{e.classList.contains("is-active")||e.classList.add("visually-hidden")})),e.forEach((e=>{const t=e.getAttribute("data-tabs");e.addEventListener("click",(e=>{const n=e.target;if(!n.hasAttribute("data-tab"))return;const o=n,i=o.getAttribute("data-tab"),r=document.querySelectorAll(`[data-tabs-content="${t}"] > [data-tab-content]`),a=document.querySelector(`[data-tabs-content="${t}"] > [data-tab-content="${i}"]`),s=document.querySelector(`[data-tabs-content="${t}"] > [data-tab-content].is-active`),l=document.querySelector(`[data-tabs=${t}] > button.is-active`),c=document.querySelectorAll(`[data-tabs=${t}] > button`);r.forEach((e=>{e.classList.add("visually-hidden"),e.classList.remove("is-active")})),s.classList.remove("is-active"),l.classList.remove("is-active"),c.forEach((e=>e.classList.remove("is-active"))),a.classList.add("is-active"),a.classList.remove("visually-hidden"),o.classList.add("is-active")}))})))},w=()=>{const e=document.querySelectorAll("[data-collapse-target]");e.length&&e.forEach((e=>{e.addEventListener("click",(e=>{const t=e.target.dataset.collapseTarget,n=document.querySelectorAll(`[data-collapse-target="${t}"]`);document.querySelector(`[data-collapse-content="${t}"]`).classList.toggle("active"),n.forEach((e=>e.classList.toggle("active")))}))}))};function v(e,t){let n;return function(){n&&clearTimeout(n),n=setTimeout((()=>{e.apply(this,arguments)}),t)}}const f=e=>{e.forEach((e=>{if(function(e){let t=e.getBoundingClientRect();return!(t.right>window.innerWidth||t.bottom>window.innerHeight||t.top<0||t.left<0)}(e)){if(e.classList.contains("no-animate"))return;"svg"!==e.tagName||e.hasAttribute("height")||e.setAttribute("height",`${e.getAttribute("viewBox").slice(-2)}`);const t=e.dataset.scrollspy;e.classList.add("animate__animated"),e.classList.add(t)}}))},h=function(){const e=document.querySelectorAll("[data-scrollspy]");e.length&&(f(e),document.addEventListener("scroll",function(e){let t=!1;return function(){t||(t=!0,setTimeout((()=>{e.apply(this,arguments),t=!1}),100))}}((()=>{f(e)}))))},g=()=>{const e=document.querySelector(".splash");if(e&&("/"===window.location.pathname||"/en"===window.location.pathname||"/de"===window.location.pathname)){const t=e.querySelector(".scribble svg");sessionStorage.getItem("splashShown")?e.classList.remove("active"):(e.classList.add("active"),t.classList.toggle("animate__animated"),setTimeout((()=>{e.classList.remove("active")}),3e3),sessionStorage.setItem("splashShown","true"))}},x=()=>{const e=document.querySelector(".card--contact"),t=document.querySelector(".form--contact"),n=document.querySelector(".page-header__aside--contact");if(!e||!t||!n)return;const o=v((()=>{window.matchMedia("(max-width: 1024px)").matches?t.after(e):e.contains(n)||n.prepend(e)}),200);o(),window.addEventListener("resize",(()=>{o()}))};var b=n(131);const y=(()=>{let e=null,t=null,n=null,o=!1;const i=(n,o,i)=>{try{const r=L(n),a=n.offsetHeight,s=L(o)+o.offsetHeight,l=L(i)+i.offsetHeight,c=Math.max(0,l-r-a),d=l-s,u=Math.max(0,c-d),p=document.querySelector(".page-header__aside");return t&&(t.destroy(!0),t=null),t=new b.Scene({triggerElement:n,triggerHook:0,duration:u,offset:-parseFloat(window.getComputedStyle(p).paddingTop)}).setPin(n,{pushFollowers:!1}).addTo(e||new b.Controller),!0}catch(e){return console.error("Failed to setup scene:",e),!1}},r=()=>{try{n&&(window.removeEventListener("resize",n),n.timeout&&clearTimeout(n.timeout),n=null),t&&(t.destroy(!0),t=null),e&&(e.destroy(!0),e=null),o=!1}catch(e){console.error("Failed to destroy StickyCardNews:",e)}};return window.addEventListener("unload",r),{init:()=>{try{if(o)return;const t=document.querySelector(".sticky"),a=document.querySelector(".sticky-stop-bottom"),s=document.querySelector(".sticky-stop");if(!t||!a||!s)return;r(),e=new b.Controller,i(t,a,s),n=()=>((e,t,r)=>{o&&e&&t&&r&&(n.timeout&&clearTimeout(n.timeout),n.timeout=setTimeout((()=>{i(e,t,r)}),100))})(t,a,s),window.addEventListener("resize",n),o=!0}catch(e){console.error("Failed to initialize StickyCardNews:",e),r()}},destroy:r,isInitialized:()=>o}})();function L(e){return e.getBoundingClientRect().top+window.scrollY}const S=()=>{const e=document.querySelector(".card-contact"),t=document.querySelector(".pagination"),n=document.querySelector(".page-header__aside");if(!e||!t||!n)return;const o=v((()=>{window.matchMedia("(max-width: 1199px)").matches?t.after(e):e.contains(n)||(n.prepend(e),n.querySelector(".card-contact")&&y.init())}),300);o(),window.addEventListener("resize",o)},A=()=>{const e=document.querySelector(".card-contact"),t=document.querySelector(".article__slider"),n=document.querySelector(".page-header__aside");if(!e||!t||!n)return;const o=v((()=>{window.matchMedia("(max-width: 1199px)").matches?t.after(e):e.contains(n)||(n.prepend(e),n.querySelector(".card-contact")&&y.init())}),300);o(),window.addEventListener("resize",o)};window.addEventListener("load",(()=>{g(),r(),l(),c(),d(),u(),p(),m(),w(),h(),x(),S(),A(),new Rellax(".rellax"),$(".js-dropdown").on(window.matchMedia("(min-width: 1200px)").matches?"mouseenter":"click",(function(e){e.preventDefault();let t=$(this);t.next().hasClass("show")?(t.removeClass("is-open"),t.next().removeClass("show"),t.next().fadeOut(500),$(".menu__link").css("opacity","1"),t.removeClass("active")):(t.addClass("is-open"),t.next().toggleClass("show"),t.next().fadeIn(500),t.addClass("active"),$(".menu__link").css("opacity","0.5"),$(".menu__link").css("border-bottom","1px solid transparent"),t.next().find(".menu__link").css("opacity","1"))})),document.querySelector("body").classList.add("page-loaded")}),!1)}},n={};function o(e){var i=n[e];if(void 0!==i)return i.exports;var r=n[e]={exports:{}};return t[e].call(r.exports,r,r.exports,o),r.exports}o.m=t,e=[],o.O=function(t,n,i,r){if(!n){var a=1/0;for(d=0;d<e.length;d++){n=e[d][0],i=e[d][1],r=e[d][2];for(var s=!0,l=0;l<n.length;l++)(!1&r||a>=r)&&Object.keys(o.O).every((function(e){return o.O[e](n[l])}))?n.splice(l--,1):(s=!1,r<a&&(a=r));if(s){e.splice(d--,1);var c=i();void 0!==c&&(t=c)}}return t}r=r||0;for(var d=e.length;d>0&&e[d-1][2]>r;d--)e[d]=e[d-1];e[d]=[n,i,r]},o.d=function(e,t){for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e={792:0};o.O.j=function(t){return 0===e[t]};var t=function(t,n){var i,r,a=n[0],s=n[1],l=n[2],c=0;if(a.some((function(t){return 0!==e[t]}))){for(i in s)o.o(s,i)&&(o.m[i]=s[i]);if(l)var d=l(o)}for(t&&t(n);c<a.length;c++)r=a[c],o.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return o.O(d)},n=self.webpackChunkninelines_template=self.webpackChunkninelines_template||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var i=o.O(void 0,[121],(function(){return o(790)}));i=o.O(i)}();