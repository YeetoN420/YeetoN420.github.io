import{S as W,i as Y,s as L,k as g,a as R,l as v,m as y,c as T,h as u,n as h,b as p,G as k,t as N,d as F,f as O,H as K,R as U,T as z,U as A,g as C,B as J,V as X,q as I,r as S,u as j,J as Z,O as D,W as Q,e as P,X as $,K as x}from"../../../chunks/index-2473db45.js";import{w as ee}from"../../../chunks/index-940bf9b4.js";import{f as V}from"../../../chunks/index-4ddd30b1.js";const te=window.localStorage.getItem("story_id")??"1",E=ee(te);E.subscribe(o=>{window.localStorage.setItem("story_id",o),console.log(o)});let le=[{id:"1",message:"Look a great ak skin wonderful.",img:"Empress.png",choices:[{id:"2",text:"Begin"}]},{id:"2",message:"What will be your path?",img:"T-Spawn.jpg",choices:[{id:"3",text:"Left"},{id:"4",text:"Right"}]},{id:"3",message:"Wrong! Try again!",img:"Trasch_can.png",choices:[{id:"4",text:"Other right"},{id:"4",text:"Right"}]},{id:"4",message:"🤣🤣🤣🤣🤣",html:'<div style="width:480px"><iframe allow="fullscreen" frameBorder="0" height="360" src="https://giphy.com/embed/uhYPkjP03h9RvVdazZ/video" width="480"></iframe></div>',choices:[{id:"1",text:"Reset!"}]}];function B(o,e,a){const s=o.slice();return s[4]=e[a],s}function ie(o){let e,a,s,l;return{c(){e=g("p"),a=I("STORY FOR ID "),s=I(o[0]),l=I(" MISSING")},l(n){e=v(n,"P",{});var c=y(e);a=S(c,"STORY FOR ID "),s=S(c,o[0]),l=S(c," MISSING"),c.forEach(u)},m(n,c){p(n,e,c),k(e,a),k(e,s),k(e,l)},p(n,c){c&1&&j(s,n[0])},d(n){n&&u(e)}}}function se(o){let e,a,s,l=o[1].message+"",n,c,i,t=o[1].img&&G(o),f=o[1].html&&M(o),b=o[1].choices,m=[];for(let r=0;r<b.length;r+=1)m[r]=q(B(o,b,r));return{c(){t&&t.c(),e=R(),f&&f.c(),a=R(),s=g("p"),n=I(l),c=R(),i=g("div");for(let r=0;r<m.length;r+=1)m[r].c();this.h()},l(r){t&&t.l(r),e=T(r),f&&f.l(r),a=T(r),s=v(r,"P",{});var d=y(s);n=S(d,l),d.forEach(u),c=T(r),i=v(r,"DIV",{class:!0});var _=y(i);for(let w=0;w<m.length;w+=1)m[w].l(_);_.forEach(u),this.h()},h(){h(i,"class","row svelte-a8ojyg")},m(r,d){t&&t.m(r,d),p(r,e,d),f&&f.m(r,d),p(r,a,d),p(r,s,d),k(s,n),p(r,c,d),p(r,i,d);for(let _=0;_<m.length;_+=1)m[_]&&m[_].m(i,null)},p(r,d){if(r[1].img?t?t.p(r,d):(t=G(r),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null),r[1].html?f?f.p(r,d):(f=M(r),f.c(),f.m(a.parentNode,a)):f&&(f.d(1),f=null),d&2&&l!==(l=r[1].message+"")&&j(n,l),d&6){b=r[1].choices;let _;for(_=0;_<b.length;_+=1){const w=B(r,b,_);m[_]?m[_].p(w,d):(m[_]=q(w),m[_].c(),m[_].m(i,null))}for(;_<m.length;_+=1)m[_].d(1);m.length=b.length}},d(r){t&&t.d(r),r&&u(e),f&&f.d(r),r&&u(a),r&&u(s),r&&u(c),r&&u(i),Z(m,r)}}}function G(o){let e,a,s;return{c(){e=g("img"),this.h()},l(l){e=v(l,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){D(e.src,a=o[1].img)||h(e,"src",a),h(e,"alt",s=o[1].message),h(e,"class","svelte-a8ojyg")},m(l,n){p(l,e,n)},p(l,n){n&2&&!D(e.src,a=l[1].img)&&h(e,"src",a),n&2&&s!==(s=l[1].message)&&h(e,"alt",s)},d(l){l&&u(e)}}}function M(o){let e,a=o[1].html+"",s;return{c(){e=new Q(!1),s=P(),this.h()},l(l){e=$(l,!1),s=P(),this.h()},h(){e.a=s},m(l,n){e.m(a,l,n),p(l,s,n)},p(l,n){n&2&&a!==(a=l[1].html+"")&&e.p(a)},d(l){l&&u(s),l&&e.d()}}}function q(o){let e,a=o[4].text+"",s,l,n;function c(){return o[3](o[4])}return{c(){e=g("button"),s=I(a)},l(i){e=v(i,"BUTTON",{});var t=y(e);s=S(t,a),t.forEach(u)},m(i,t){p(i,e,t),k(e,s),l||(n=x(e,"click",c),l=!0)},p(i,t){o=i,t&2&&a!==(a=o[4].text+"")&&j(s,a)},d(i){i&&u(e),l=!1,n()}}}function H(o){let e,a,s,l;function n(t,f){return t[1]?se:ie}let c=n(o),i=c(o);return{c(){e=g("div"),i.c(),this.h()},l(t){e=v(t,"DIV",{class:!0});var f=y(e);i.l(f),f.forEach(u),this.h()},h(){h(e,"class","container svelte-a8ojyg")},m(t,f){p(t,e,f),i.m(e,null),l=!0},p(t,f){c===(c=n(t))&&i?i.p(t,f):(i.d(1),i=c(t),i&&(i.c(),i.m(e,null)))},i(t){l||(t&&U(()=>{l&&(s&&s.end(1),a=z(e,V,{x:800,duration:750}),a.start())}),l=!0)},o(t){a&&a.invalidate(),t&&(s=A(e,V,{x:-800,duration:750})),l=!1},d(t){t&&u(e),i.d(),t&&s&&s.end()}}}function ae(o){let e,a,s,l,n=o[0],c=H(o);return{c(){e=g("main"),a=g("link"),s=R(),l=g("div"),c.c(),this.h()},l(i){e=v(i,"MAIN",{class:!0});var t=y(e);a=v(t,"LINK",{rel:!0,href:!0}),s=T(t),l=v(t,"DIV",{class:!0});var f=y(l);c.l(f),f.forEach(u),t.forEach(u),this.h()},h(){h(a,"rel","stylesheet"),h(a,"href","/pico.min.css"),h(l,"class","grid svelte-a8ojyg"),h(e,"class","svelte-a8ojyg")},m(i,t){p(i,e,t),k(e,a),k(e,s),k(e,l),c.m(l,null)},p(i,[t]){t&1&&L(n,n=i[0])?(C(),N(c,1,1,J),F(),c=H(i),c.c(),O(c,1),c.m(l,null)):c.p(i,t)},i(i){O(c)},o(i){N(c)},d(i){i&&u(e),c.d(i)}}}function re(o,e,a){let s,l,n;K(o,E,i=>a(2,n=i));const c=i=>{X(E,n=i.id,n)};return o.$$.update=()=>{o.$$.dirty&4&&a(0,s=n),o.$$.dirty&1&&a(1,l=le.find(i=>i.id==s))},[s,l,n,c]}class fe extends W{constructor(e){super(),Y(this,e,re,ae,L,{})}}export{fe as default};
