(()=>{"use strict";var e={653:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.elements=void 0;var n=document.querySelectorAll(".controlls div"),o=document.querySelector("body"),l=document.querySelectorAll(".cardsBtn div"),r=document.getElementById("playBtn"),u=document.getElementById("pauseBtn"),s=document.getElementById("stopBtn"),d=document.getElementById("addTime"),a=document.getElementById("removeTime"),i=document.querySelector(".florestSound"),c=document.querySelector(".rainSound"),f=document.querySelector(".coffeSound"),m=document.querySelector(".fireSound"),v=document.querySelector(".ligthModeBtn"),p=document.querySelector(".darkModeBtn"),y=document.querySelectorAll(".volume-slider"),S={playBtn:r,pauseBtn:u,stopBtn:s,addTime:d,removeTime:a,minutesDisplay:document.querySelector(".minutes"),secondsDisplay:document.querySelector(".seconds"),florestCard:i,rainCard:c,coffeCard:f,fireCard:m,ligthModeBtn:v,allControllsBtn:n,darkModeBtn:p,allControllCardsBG:l,allDocument:o,volumeSliders:y};t.elements=S},73:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.RunApp=function(){var e=o.elements.playBtn,t=o.elements.pauseBtn,n=o.elements.stopBtn,i=o.elements.addTime,c=o.elements.removeTime,f=o.elements.florestCard,m=o.elements.rainCard,v=o.elements.coffeCard,p=o.elements.fireCard,y=o.elements.ligthModeBtn,S=o.elements.allControllsBtn,C=o.elements.darkModeBtn,B=o.elements.allDocument,g=o.elements.allControllCardsBG;function E(e,t,n,o){var l=e.classList.contains("activeIcon");[f,m,v,p].forEach((function(e){o.value=0,e.classList.remove("activeIcon"),e.classList.remove("activeIconDarkClicked")})),[r.sounds.florestSoundPause,r.sounds.rainSoundPause,r.sounds.coffeSoundPause,r.sounds.fireSoundPause].forEach((function(e){e()})),l||(n.classList.contains("darkMode")?(e.classList.add("activeIconDarkClicked"),e.classList.add("activeIcon"),o.value=50):(o.value=50,e.classList.add("activeIcon")),t())}e.addEventListener("click",(function(n){n.preventDefault(),(0,l.Sounds)().pressButton(),e.style.display="none",t.style.display="flex",(0,r.countdown)()})),t.addEventListener("click",(function(n){n.preventDefault(),(0,l.Sounds)().pressButton(),t.style.display="none",e.style.display="flex",(0,r.pauseTimeOut)()})),n.addEventListener("click",(function(e){e.preventDefault(),(0,l.Sounds)().pressButton(),(0,r.stopTimeOut)()})),i.addEventListener("click",(function(e){e.preventDefault(),(0,r.addTimerBtn)()})),c.addEventListener("click",(function(e){e.preventDefault(),(0,r.removeTimerBtn)()})),f.addEventListener("click",(function(){E(f,r.sounds.florestSoundplay,B,u)})),m.addEventListener("click",(function(){E(m,r.sounds.rainSoundplay,B,s)})),v.addEventListener("click",(function(){E(v,r.sounds.coffeSoundplay,B,d)})),p.addEventListener("click",(function(){E(p,r.sounds.fireSoundplay,B,a)})),y.addEventListener("click",(function(){document.body.classList.toggle("darkMode"),S.forEach((function(e){e.classList.toggle("BtnDarkMode")})),y.style.display="none",C.style.display="block",g.forEach((function(e){e.classList.toggle("activeIconDark"),e.style.setProperty("--Slide-color","#e1e1e6")}))})),C.addEventListener("click",(function(){document.body.classList.toggle("darkMode"),g.forEach((function(e){e.classList.toggle("activeIconDark"),e.style.setProperty("--Slide-color","#323238")})),S.forEach((function(e){e.classList.toggle("BtnDarkMode")})),y.style.display="block",C.style.display="none"}))};var o=n(653),l=n(552),r=n(953),u=r.cardsVolumeControll.florestSoundControll,s=r.cardsVolumeControll.rainSoundControll,d=r.cardsVolumeControll.coffeSoundControll,a=r.cardsVolumeControll.fireSoundControll},953:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.addTimerBtn=function(){a+=5,s.textContent=a},t.cardsVolumeControll=void 0,t.countdown=function(){var e=Number(d.textContent);u=setInterval((function(){if(--e<0&&(e=59,a--),0===a&&0===e)return(0,l.Sounds)().timerFinish(),i(),void clearInterval(u);d.textContent=String(e).padStart(2,"0"),s.textContent=String(a).padStart(2,"0")}),1e3)},t.pauseTimeOut=function(){clearTimeout(u)},t.removeTimerBtn=function(){(a>=25||a>=5)&&(a-=5,s.textContent=String(a).padStart(2,"0"))},t.sounds=void 0,t.stopTimeOut=function(){i(),clearTimeout(u)};var o=n(653),l=n(552),r=(0,l.Sounds)();t.sounds=r;var u,s=o.elements.minutesDisplay,d=o.elements.secondsDisplay;document.querySelectorAll(".volume-slider").forEach((function(e){e.addEventListener("click",(function(e){e.stopPropagation()}))}));var a=Number(s.textContent);function i(){pauseBtn.style.display="none",playBtn.style.display="flex",d.textContent="00",s.textContent=25,a=Number(s.textContent)}var c={florestSoundControll:document.getElementById("volume-florestSound"),rainSoundControll:document.getElementById("volume-rainSound"),coffeSoundControll:document.getElementById("volume-coffeSound"),fireSoundControll:document.getElementById("volume-fireSound")};t.cardsVolumeControll=c},552:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Sounds=function(){var e,t,n,l=new Audio("sounds/button-press.wav"),i=new Audio("sounds/kichen-timer.mp3"),c=new Audio("sounds/Floresta.wav"),f=new Audio("sounds/Chuva.wav"),m=new Audio("sounds/Cafeteria.wav"),v=new Audio("sounds/Lareira.wav");function p(e,t){e.volume=t/100}function y(){v.pause()}return o.elements.volumeSliders.forEach((function(e){e.addEventListener("input",(function(t){var n=t.currentTarget.value;e.value=n,p(c,u.value),p(f,s.value),p(m,d.value),p(v,a.value)}))})),e={pressButton:function(){l.play()},timerFinish:function(){i.play()},florestSoundplay:function(){c.loop=!0,c.volume=.5,c.play()},rainSoundplay:function(){f.loop=!0,f.volume=.5,f.play()},coffeSoundplay:function(){m.loop=!0,m.volume=.5,m.play()},florestSoundPause:function(){c.pause()},fireSoundplay:function(){v.loop=!0,v.volume=.5,v.play()},fireSoundPause:y,rainSoundPause:function(){f.pause()},coffeSoundPause:function(){m.pause()}},n=y,(t=function(e){var t=function(e,t){if("object"!==r(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,"string");if("object"!==r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===r(t)?t:String(t)}(t="fireSoundPause"))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e};var o=n(653),l=n(953);function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}var u=l.cardsVolumeControll.florestSoundControll,s=l.cardsVolumeControll.rainSoundControll,d=l.cardsVolumeControll.coffeSoundControll,a=l.cardsVolumeControll.fireSoundControll}},t={};(0,function n(o){var l=t[o];if(void 0!==l)return l.exports;var r=t[o]={exports:{}};return e[o](r,r.exports,n),r.exports}(73).RunApp)()})();