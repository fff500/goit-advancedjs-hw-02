import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */import{g as o}from"./assets/helpers-822ac739.js";const t={body:document.querySelector("body"),startBtn:document.querySelector("[data-start]"),stopBtn:document.querySelector("[data-stop]")};t.startBtn.addEventListener("click",r);t.stopBtn.addEventListener("click",n);let e;function r(){e=setInterval(()=>{t.body.style.backgroundColor=o()},1e3),t.startBtn.setAttribute("disabled",!0)}function n(){clearInterval(e),t.startBtn.removeAttribute("disabled")}
//# sourceMappingURL=commonHelpers.js.map
