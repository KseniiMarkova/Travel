(()=>{"use strict";!function(){const e=document.querySelector(".header");window.onscroll=()=>{window.pageYOffset>70?e.classList.add("header_active"):e.classList.remove("header_active")}}(),function(){const e=document.querySelector(".burger"),t=document.querySelector(".header__nav"),n=document.querySelector(".header__nav-close"),c=document.querySelectorAll(".header__link");if(e.addEventListener("click",(()=>{t.classList.add("header__nav_active")})),n.addEventListener("click",(()=>{t.classList.remove("header__nav_active")})),window.innerWidth<768)for(let e=0;e<c.length;e++)c[e].addEventListener("click",(()=>{t.classList.remove("header__nav_active")}))}(),document.querySelectorAll(".js-scroll").forEach((e=>{e.addEventListener("click",(function(){!function(e,t){const n=document.querySelector(".header").clientHeight;let c=document.querySelector(e).getBoundingClientRect().top-n,r=window.pageYOffset,o=null;const i=function(e){null===o&&(o=e);const t=e-o,n=(a=t,l=r,d=c,(a/=500)<1?d/2*a*a+l:-d/2*(--a*(a-2)-1)+l);var a,l,d;window.scrollTo(0,n),t<1e3&&requestAnimationFrame(i)};requestAnimationFrame(i)}(this.getAttribute("href"))}))}))})();