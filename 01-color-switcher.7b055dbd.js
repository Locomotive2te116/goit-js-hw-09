const t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]");let r;t.addEventListener("click",(()=>{t.setAttribute("disabled",!0),r=setInterval((()=>{document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}),1e3)})),e.addEventListener("click",(()=>{t.removeAttribute("disabled"),clearInterval(r)}));
//# sourceMappingURL=01-color-switcher.7b055dbd.js.map
