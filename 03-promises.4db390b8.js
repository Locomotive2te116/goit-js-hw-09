function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},i=t.parcelRequired7c6;null==i&&((i=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var i={id:e,exports:{}};return r[e]=i,t.call(i.exports,i,i.exports),i.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){n[e]=t},t.parcelRequired7c6=i);var o=i("7Y9D8");const u=document.querySelector("form"),l=document.querySelectorAll("input"),s=document.querySelector('[type="submit"]');function d(t,r){const n=Math.random()>.3;return new Promise(((e,i)=>{n?e(`✅ Fulfilled promise ${t} in ${r}ms`):i(`❌ Rejected promise ${t} in ${r}ms`)})).then((t=>{setTimeout((()=>{e(o).Notify.success(t)}),r)})).catch((t=>{setTimeout((()=>{e(o).Notify.failure(t)}),r)}))}s.setAttribute("disabled",!0),u.addEventListener("input",(()=>{const e=[...l].some((e=>""===e.value));e?s.setAttribute("disabled",!0):e||s.removeAttribute("disabled")})),u.addEventListener("submit",(e=>{e.preventDefault();const t=[...l].filter((e=>"delay"===e.getAttribute("name")))[0],r=[...l].filter((e=>"step"===e.getAttribute("name")))[0],n=[...l].filter((e=>"amount"===e.getAttribute("name")))[0];let i=Number(t.value);const o=Number(r.value),u=Number(n.value);for(let e=1;e<=u;e+=1)d(e,i),i+=o}));
//# sourceMappingURL=03-promises.4db390b8.js.map
