(()=>{"use strict";var e={208:(e,n,t)=>{t.d(n,{A:()=>u});var o=t(601),a=t.n(o),d=t(314),c=t.n(d),r=t(417),i=t.n(r),s=new URL(t(161),t.b),l=c()(a()),p=i()(s);l.push([e.id,`*{\n    box-sizing: border-box;\n}\n\nbody{\n    background-image:url(${p});\n    object-fit: contain;\n    margin: 0px;\n}\n\nnav{\n    display: flex;\n    align-items: center;\n    justify-content: left;\n    gap: 5px;\n    width: 100%;\n    height: 11vh;\n    background-color: rgb(181, 90, 15);\n    position: fixed;\n    border: 3px solid brown;\n}\nbutton{\n    height: auto;\n    background-color: burlywood;\n    color: black;\n    font-size: 24px;\n    padding: 5px;\n    \n}\nh1{\n    font-size: 80px;\n    text-align: center;\n    color: brown;\n    margin-top: 8px;\n    margin-left: 60px;\n    text-decoration: underline;\n    margin-bottom: 10px;\n}\nul{\n    padding: 0px;\n}\nli{\n    list-style: none;\n    font-size: 24px;\n    color: beige;\n    border: 1px rgb(244, 160, 3,0.5) solid;\n    border-radius: 2px;\n    padding: 5px;\n}\n.order{\n    list-style-type: normal;\n    font-size: 28px;\n    color: burlywood;\n    margin-bottom: 20px;\n    line-height: 1.5em;\n}\nimg{\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n    \n}\n.logo{\n    margin-left: 20px;\n    width: 70px;\n    height: 110px;\n    margin-top: 10px;\n}\n.headline{\n    width: 50vw;\n    padding: 8px;\n    text-align: center;\n    align-self: center;\n    line-height: 2em;\n    color: orange;\n    font-size: 28px;\n    border: 2px solid rgb(222, 184, 135,0.4);\n    border-radius: 5px;\n}\n\nh2{\n    align-self: center;\n    color: orange;\n    font-size: 60px;\n    text-decoration: underline;\n    text-decoration-style: wavy;\n    text-decoration-color: burlywood;\n}\n.order-header{\n    align-self: center;\n    color: orange;\n    font-size: 60px;\n    text-decoration: underline;\n    text-decoration-style: normal;\n    text-decoration-color: burlywood;\n}\n\n#content{\n    background-color: rgb(0, 0, 0,0.88);\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    gap: 20px;\n    border: 5px  solid;\n    border-radius: 5px;\n    padding: 100px;\n}\n\n.hours{\n    align-self: center;\n    font-size: 18px;\n    line-height: 2.4em;\n}\n\n.menu-container{\n    width: 500px;\n    height:400px;\n    align-self: center;\n    border: 3px brown solid;\n    border-radius: 5px;\n    margin: 8px;\n    padding: 5px;\n}\n\n.info{\n    font-size: 28px;\n    align-self: center;\n    color: wheat;\n    border: 1px solid orange;\n    border-radius: 3px;\n    padding: 20px;\n}\n\nspan{\n    font-size: 28px;\n    display: block;\n    text-align: center;\n    color: rgb(202, 43, 43);\n    margin-top: 10px;\n}\n\n.hours-header{\n    color: brown;\n    align-self: center;\n    font-size: 60px;\n    text-decoration: underline;\n    text-decoration-style: 'normal';\n}`,""]);const u=l},314:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",o=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),o&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),o&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,o,a,d){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(o)for(var r=0;r<this.length;r++){var i=this[r][0];null!=i&&(c[i]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);o&&c[l[0]]||(void 0!==d&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=d),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),a&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=a):l[4]="".concat(a)),n.push(l))}},n}},417:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},601:e=>{e.exports=function(e){return e[1]}},72:e=>{var n=[];function t(e){for(var t=-1,o=0;o<n.length;o++)if(n[o].identifier===e){t=o;break}return t}function o(e,o){for(var d={},c=[],r=0;r<e.length;r++){var i=e[r],s=o.base?i[0]+o.base:i[0],l=d[s]||0,p="".concat(s," ").concat(l);d[s]=l+1;var u=t(p),m={css:i[1],media:i[2],sourceMap:i[3],supports:i[4],layer:i[5]};if(-1!==u)n[u].references++,n[u].updater(m);else{var h=a(m,o);o.byIndex=r,n.splice(r,0,{identifier:p,updater:h,references:1})}c.push(p)}return c}function a(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,a){var d=o(e=e||[],a=a||{});return function(e){e=e||[];for(var c=0;c<d.length;c++){var r=t(d[c]);n[r].references--}for(var i=o(e,a),s=0;s<d.length;s++){var l=t(d[s]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}d=i}}},659:e=>{var n={};e.exports=function(e,t){var o=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},540:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},56:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,a&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var d=t.sourceMap;d&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(d))))," */")),n.styleTagTransform(o,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},113:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},161:(e,n,t)=>{e.exports=t.p+"76040babb0d8186f085e.jpeg"}},n={};function t(o){var a=n[o];if(void 0!==a)return a.exports;var d=n[o]={id:o,exports:{}};return e[o](d,d.exports,t),d.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var o=n.getElementsByTagName("script");if(o.length)for(var a=o.length-1;a>-1&&(!e||!/^http(s?):/.test(e));)e=o[a--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var e=t(72),n=t.n(e),o=t(825),a=t.n(o),d=t(659),c=t.n(d),r=t(56),i=t.n(r),s=t(540),l=t.n(s),p=t(113),u=t.n(p),m=t(208),h={};h.styleTagTransform=u(),h.setAttributes=i(),h.insert=c().bind(null,"head"),h.domAPI=a(),h.insertStyleElement=l(),n()(m.A,h),m.A&&m.A.locals&&m.A.locals;const f=t.p+"8b28bc9cfcbffcf0dc5d.jpeg";function C(){const e=document.querySelector("#content"),n=document.createElement("h1");n.textContent="JD's BBQ TAKEOUT",e.appendChild(n);const t=document.createElement("img");t.src=f,t.classList.add("logo"),n.appendChild(t);const o=document.createElement("div"),a=document.createElement("p");a.textContent="Welcome to JD's BBQ home of the greatest barbecue; from tender ribs to juicy briskets,\ncome savor the taste of true Texas-style barbecue.",o.classList.add("headline"),o.appendChild(a),e.appendChild(o);const d=document.createElement("div"),c=document.createElement("h2");c.classList.add("hours-header"),c.textContent="Hours",d.classList.add("hours"),d.appendChild(c),e.appendChild(d);const r=document.createElement("ul"),i=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];for(let e=0;e<i.length;e++){const n=document.createElement("li");n.textContent=`${i[e]}: 9 am - 11 pm`,r.appendChild(n)}d.appendChild(r)}const g=t.p+"014da07eecd139f30e8b.jpeg",x=t.p+"696d22962d53dced082e.jpeg",b=t.p+"eb9d0d2e8488b89a8801.jpeg",E=t.p+"9c8fecc7d7955940a8ba.jpeg",v=t.p+"db085a39490164bb8d12.jpeg",y=t.p+"67a104f29dd3c3575a54.jpeg",w=t.p+"52cc4086fb69cafc6979.jpeg",L=t.p+"faf63638a63f046bf94d.jpeg",S=t.p+"98d1d39562b68c9f7cbf.jpeg",k=t.p+"0ab26876d72edfe7ca93.jpeg",B=t.p+"a0ddd10a9e5575eccfc9.jpeg",j=t.p+"0b5473c930d1c426cb92.png",T=t.p+"d4d6b92d2e8aaf75ec21.png",$=t.p+"5a81bd4ef0522f9dd620.png";C();const A=document.querySelector("body"),R=document.querySelector("#homepage"),z=document.querySelector("#menu"),M=document.querySelector("#contact");R.addEventListener("click",(()=>{document.querySelector("#content").remove();const e=document.createElement("div");e.setAttribute("id","content"),A.appendChild(e),C()})),z.addEventListener("click",(()=>{document.querySelector("#content").remove();const e=document.createElement("div");e.setAttribute("id","content"),A.appendChild(e),function(){const e=document.querySelector("#content"),n=document.createElement("h1");n.textContent="MENU",e.appendChild(n);const t=document.createElement("img");t.src=f,t.classList.add("logo"),n.appendChild(t);const o=document.createElement("h2");o.textContent="MAINS",e.appendChild(o);const a=document.createElement("div"),d=document.createElement("img");a.classList.add("menu-container"),d.src=g,a.appendChild(d),e.appendChild(a);const c=document.createElement("p"),r=document.createElement("span");c.classList.add("info"),c.textContent="Chicken & Half Rack BBQ Ribs with a side of your choice.",r.textContent="$ 23.99",e.appendChild(c),c.appendChild(r);const i=document.createElement("div"),s=document.createElement("img");i.classList.add("menu-container"),s.src=x,i.appendChild(s),e.appendChild(i);const l=document.createElement("p"),p=document.createElement("span");l.classList.add("info"),l.textContent="Half Rack BBQ Back Ribs with a side of your choice.",p.textContent="$ 14.99",e.appendChild(l),l.appendChild(p);const u=document.createElement("div"),m=document.createElement("img");u.classList.add("menu-container"),m.src=b,u.appendChild(m),e.appendChild(u);const h=document.createElement("p"),C=document.createElement("span");h.classList.add("info"),h.textContent="Full Rack BBQ Back Ribs with a side of your choice.",C.textContent="$ 21.99",e.appendChild(h),h.appendChild(C);const A=document.createElement("div"),R=document.createElement("img");A.classList.add("menu-container"),R.src=E,A.appendChild(R),e.appendChild(A);const z=document.createElement("p"),M=document.createElement("span");z.classList.add("info"),z.textContent="NEW! Third Rack BBQ Back Ribs with a side of your choice.",M.textContent="$11.99",e.appendChild(z),z.appendChild(M);const q=document.createElement("div"),I=document.createElement("img");q.classList.add("menu-container"),I.src=v,q.appendChild(I),e.appendChild(q);const P=document.createElement("p"),Q=document.createElement("span");P.classList.add("info"),P.textContent="Wings & Half Rack Ribs with a side of your choice.",Q.textContent="$21.99",e.appendChild(P),P.appendChild(Q);const F=document.createElement("div"),N=document.createElement("img");F.classList.add("menu-container"),F.appendChild(N),N.src=y,e.appendChild(F);const H=document.createElement("p"),U=document.createElement("span");H.classList.add("info"),H.textContent="Wings & Third Rack Ribs with a side of your choice.",U.textContent="$18.99",e.appendChild(H),H.appendChild(U);const D=document.createElement("h2");D.textContent="SIDES",e.appendChild(D);const O=document.createElement("div"),J=document.createElement("img");O.classList.add("menu-container"),J.src=w,O.appendChild(J),e.appendChild(O);const W=document.createElement("p"),_=document.createElement("span");W.classList.add("info"),W.textContent="Fresh Cut Fries",_.textContent="$3.99",e.appendChild(W),W.appendChild(_);const Y=document.createElement("div"),G=document.createElement("img");Y.classList.add("menu-container"),G.src=L,Y.appendChild(G),e.appendChild(Y);const K=document.createElement("p"),V=document.createElement("span");K.classList.add("info"),K.textContent="Sweet Potato Fries",V.textContent="$5.99",e.appendChild(K),K.appendChild(V);const X=document.createElement("div"),Z=document.createElement("img");X.classList.add("menu-container"),Z.src=S,X.appendChild(Z),e.appendChild(X);const ee=document.createElement("p"),ne=document.createElement("span");ee.classList.add("info"),ee.textContent="Creamy Coleslaw",ne.textContent="$3.49",e.appendChild(ee),ee.appendChild(ne);const te=document.createElement("div"),oe=document.createElement("img");te.classList.add("menu-container"),oe.src=k,te.appendChild(oe),e.appendChild(te);const ae=document.createElement("p"),de=document.createElement("span");ae.classList.add("info"),ae.textContent="Caesar Salad",de.textContent="$4.99",e.appendChild(ae),ae.appendChild(de);const ce=document.createElement("div"),re=document.createElement("img");ce.classList.add("menu-container"),re.src=B,ce.appendChild(re),e.appendChild(ce);const ie=document.createElement("p"),se=document.createElement("span");ie.classList.add("info"),ie.textContent="Loaded Baked Potato",se.textContent="$3.99",e.appendChild(ie),ie.appendChild(se);const le=document.createElement("h2");le.textContent="BEVERAGES",e.appendChild(le);const pe=document.createElement("div"),ue=document.createElement("img");pe.classList.add("menu-container"),ue.src=j,pe.appendChild(ue),e.appendChild(pe);const me=document.createElement("p"),he=document.createElement("span");me.classList.add("info"),me.textContent="Canned Pop",he.textContent="$2.99",e.appendChild(me),me.appendChild(he);const fe=document.createElement("div"),Ce=document.createElement("img");fe.classList.add("menu-container"),Ce.src=T,fe.appendChild(Ce),e.appendChild(fe);const ge=document.createElement("p"),xe=document.createElement("span");ge.classList.add("info"),ge.textContent="Canned Beer",xe.textContent="$3.99",e.appendChild(ge),ge.appendChild(xe);const be=document.createElement("div"),Ee=document.createElement("img");be.classList.add("menu-container"),Ee.src=$,be.appendChild(Ee),e.appendChild(be);const ve=document.createElement("p"),ye=document.createElement("span");ve.classList.add("info"),ve.textContent="Bottled Beer",ye.textContent="$5.99",e.appendChild(ve),ve.appendChild(ye)}()})),M.addEventListener("click",(()=>{document.querySelector("#content").remove();const e=document.createElement("div");e.setAttribute("id","content"),A.appendChild(e),function(){const e=document.querySelector("#content"),n=document.createElement("h1");n.textContent="Contact Us",e.appendChild(n);const t=document.createElement("img");t.src=f,t.classList.add("logo"),n.appendChild(t);const o=document.createElement("h2");o.classList.add("order-header"),o.textContent="How To Order",e.appendChild(o);const a=document.createElement("ol"),d=document.createElement("li"),c=document.createElement("li");d.classList.add("order"),c.classList.add("order"),d.textContent="Call us between these hours at 416-955-3181 with your order and allow up to 30 minutes before pickup.\n    You will receive an order # please bring that number with you.",c.textContent="Email us @ JDBBQ@gmail.com between these hours with your order and allow up to 30 minutes before pickup.\n    You will receive an order # in your email please bring that number with you.",a.appendChild(d),a.appendChild(c),e.appendChild(a);const r=document.createElement("h2"),i=document.createElement("p");r.classList.add("order-header"),i.classList.add("info"),r.textContent="Customer Service",i.textContent="Please contact me directly with any complaints or comments either @ my email\n    JDBBQ@gmail.com or 416-955-3181, Thank you.",e.appendChild(r),e.appendChild(i)}()}))})()})();