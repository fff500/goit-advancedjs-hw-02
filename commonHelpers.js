import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */function r(){return`#${Math.floor(Math.random()*16777215).toString(16).padStart(6,0)}`}const t={body:document.querySelector("body"),startBtn:document.querySelector("[data-start]"),stopBtn:document.querySelector("[data-stop]")};let e;t.startBtn.addEventListener("click",o);t.stopBtn.addEventListener("click",n);function o(){e=setInterval(()=>{t.body.style.backgroundColor=r()},1e3),t.startBtn.setAttribute("disabled",!0)}function n(){clearInterval(e),t.startBtn.removeAttribute("disabled",!1)}
//# sourceMappingURL=commonHelpers.js.map