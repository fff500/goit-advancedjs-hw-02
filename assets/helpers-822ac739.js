function u(){return`#${Math.floor(Math.random()*16777215).toString(16).padStart(6,0)}`}function h(o){const t=Math.floor(o/864e5),n=Math.floor(o%864e5/36e5),r=Math.floor(o%864e5%36e5/6e4),a=Math.floor(o%864e5%36e5%6e4/1e3);return{days:t,hours:n,minutes:r,seconds:a}}function i(o){return`${o}`.length<2?`0${o}`:`${o}`}export{i as a,h as c,u as g};
//# sourceMappingURL=helpers-822ac739.js.map
