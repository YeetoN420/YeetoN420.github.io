import{S as B,i as C,s as G,k as f,q as _,a as Y,l as d,m as q,r as g,h as v,c as k,b as I,G as s,u as y,B as A,H as M}from"../../../../chunks/index-f11a4517.js";import{p as N}from"../../../../chunks/stores-9d13a7f9.js";function R(l){let e,o,r="You searched for: "+l[0].params.category,i,E,H,b,n,c=l[0].status+"",h,$,m=l[0].error.message+"",p;return{c(){e=f("main"),o=f("h2"),i=_(r),E=Y(),H=f("hr"),b=Y(),n=f("h1"),h=_(c),$=_(": "),p=_(m)},l(t){e=d(t,"MAIN",{});var a=q(e);o=d(a,"H2",{});var S=q(o);i=g(S,r),S.forEach(v),E=k(a),H=d(a,"HR",{}),b=k(a),n=d(a,"H1",{});var u=q(n);h=g(u,c),$=g(u,": "),p=g(u,m),u.forEach(v),a.forEach(v)},m(t,a){I(t,e,a),s(e,o),s(o,i),s(e,E),s(e,H),s(e,b),s(e,n),s(n,h),s(n,$),s(n,p)},p(t,[a]){a&1&&r!==(r="You searched for: "+t[0].params.category)&&y(i,r),a&1&&c!==(c=t[0].status+"")&&y(h,c),a&1&&m!==(m=t[0].error.message+"")&&y(p,m)},i:A,o:A,d(t){t&&v(e)}}}function j(l,e,o){let r;return M(l,N,i=>o(0,r=i)),[r]}class z extends B{constructor(e){super(),C(this,e,j,R,G,{})}}export{z as default};
