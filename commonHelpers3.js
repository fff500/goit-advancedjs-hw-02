import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */import{i as a}from"./assets/vendor-651d7991.js";const c=document.querySelector(".form");c.addEventListener("submit",f);function f(r){r.preventDefault();const t=new FormData(c),s={};for(let[e,o]of t.entries())s[e]=o;const{delay:m,step:n,amount:u}=s;setTimeout(()=>{for(let e=1;e<=u;e++)l(e,e*n).then(({position:o,delay:i})=>{a.success({color:"green",message:`✅ Fulfilled promise ${o} in ${i}ms`})}).catch(({position:o,delay:i})=>{a.error({color:"red",message:`❌ Rejected promise ${o} in ${i}ms`})})},m)}function l(r,t){const s=Math.random()>.3;return new Promise((m,n)=>{setTimeout(()=>{s?m({position:r,delay:t}):n({position:r,delay:t})},t)})}
//# sourceMappingURL=commonHelpers3.js.map