!function(){var t,e=document.querySelector("[data-start]"),r=document.querySelector("[data-stop]");r.setAttribute("disabled",!0),e.addEventListener("click",(function(){e.setAttribute("disabled",!0),r.removeAttribute("disabled"),t=setInterval((function(){document.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}),1e3)})),r.addEventListener("click",(function(){e.removeAttribute("disabled"),r.setAttribute("disabled",!0),clearInterval(t)}))}();
//# sourceMappingURL=01-color-switcher.5bfd62a6.js.map
