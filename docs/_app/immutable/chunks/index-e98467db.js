function x(){}const V=t=>t;function ht(t,e){for(const n in e)t[n]=e[n];return t}function X(t){return t()}function J(){return Object.create(null)}function b(t){t.forEach(X)}function D(t){return typeof t=="function"}function zt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let k;function Ft(t,e){return k||(k=document.createElement("a")),k.href=e,t===k.href}function mt(t){return Object.keys(t).length===0}function pt(t,...e){if(t==null)return x;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Gt(t,e,n){t.$$.on_destroy.push(pt(e,n))}function It(t,e,n,i){if(t){const r=Y(t,e,n,i);return t[0](r)}}function Y(t,e,n,i){return t[1]&&i?ht(n.ctx.slice(),t[1](i(e))):n.ctx}function Jt(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const c=[],s=Math.max(e.dirty.length,r.length);for(let u=0;u<s;u+=1)c[u]=e.dirty[u]|r[u];return c}return e.dirty|r}return e.dirty}function Kt(t,e,n,i,r,c){if(r){const s=Y(e,n,i,c);t.p(s,r)}}function Qt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function Wt(t,e,n){return t.set(n),e}const Z=typeof window<"u";let tt=Z?()=>window.performance.now():()=>Date.now(),z=Z?t=>requestAnimationFrame(t):x;const $=new Set;function et(t){$.forEach(e=>{e.c(t)||($.delete(e),e.f())}),$.size!==0&&z(et)}function nt(t){let e;return $.size===0&&z(et),{promise:new Promise(n=>{$.add(e={c:t,f:n})}),abort(){$.delete(e)}}}let O=!1;function yt(){O=!0}function gt(){O=!1}function xt(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function $t(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const o=[];for(let l=0;l<e.length;l++){const f=e[l];f.claim_order!==void 0&&o.push(f)}e=o}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let o=0;o<e.length;o++){const l=e[o].claim_order,f=(r>0&&e[n[r]].claim_order<=l?r+1:xt(1,r,_=>e[n[_]].claim_order,l))-1;i[o]=n[f]+1;const a=f+1;n[a]=o,r=Math.max(a,r)}const c=[],s=[];let u=e.length-1;for(let o=n[r]+1;o!=0;o=i[o-1]){for(c.push(e[o-1]);u>=o;u--)s.push(e[u]);u--}for(;u>=0;u--)s.push(e[u]);c.reverse(),s.sort((o,l)=>o.claim_order-l.claim_order);for(let o=0,l=0;o<s.length;o++){for(;l<c.length&&s[o].claim_order>=c[l].claim_order;)l++;const f=l<c.length?c[l]:null;t.insertBefore(s[o],f)}}function bt(t,e){t.appendChild(e)}function it(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function wt(t){const e=F("style");return vt(it(t),e),e.sheet}function vt(t,e){return bt(t.head||t,e),e.sheet}function Et(t,e){if(O){for($t(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Nt(t,e,n){t.insertBefore(e,n||null)}function At(t,e,n){O&&!n?Et(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function N(t){t.parentNode&&t.parentNode.removeChild(t)}function Ut(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function F(t){return document.createElement(t)}function Tt(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function G(t){return document.createTextNode(t)}function Vt(){return G(" ")}function Xt(){return G("")}function Yt(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function Zt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function kt(t){return Array.from(t.childNodes)}function rt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function st(t,e,n,i,r=!1){rt(t);const c=(()=>{for(let s=t.claim_info.last_index;s<t.length;s++){const u=t[s];if(e(u)){const o=n(u);return o===void 0?t.splice(s,1):t[s]=o,r||(t.claim_info.last_index=s),u}}for(let s=t.claim_info.last_index-1;s>=0;s--){const u=t[s];if(e(u)){const o=n(u);return o===void 0?t.splice(s,1):t[s]=o,r?o===void 0&&t.claim_info.last_index--:t.claim_info.last_index=s,u}}return i()})();return c.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,c}function St(t,e,n,i){return st(t,r=>r.nodeName===e,r=>{const c=[];for(let s=0;s<r.attributes.length;s++){const u=r.attributes[s];n[u.name]||c.push(u.name)}c.forEach(s=>r.removeAttribute(s))},()=>i(e))}function te(t,e,n){return St(t,e,n,F)}function Ct(t,e){return st(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>G(e),!0)}function ee(t){return Ct(t," ")}function K(t,e,n){for(let i=n;i<t.length;i+=1){const r=t[i];if(r.nodeType===8&&r.textContent.trim()===e)return i}return t.length}function ne(t,e){const n=K(t,"HTML_TAG_START",0),i=K(t,"HTML_TAG_END",n);if(n===i)return new Q(void 0,e);rt(t);const r=t.splice(n,i-n+1);N(r[0]),N(r[r.length-1]);const c=r.slice(1,r.length-1);for(const s of c)s.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new Q(c,e)}function ie(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function re(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function Mt(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,i,e),r}class jt{constructor(e=!1){this.is_svg=!1,this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,n,i=null){this.e||(this.is_svg?this.e=Tt(n.nodeName):this.e=F(n.nodeName),this.t=n,this.c(e)),this.i(i)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.childNodes)}i(e){for(let n=0;n<this.n.length;n+=1)Nt(this.t,this.n[n],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(N)}}class Q extends jt{constructor(e,n=!1){super(n),this.e=this.n=null,this.l=e}c(e){this.l?this.n=this.l:super.c(e)}i(e){for(let n=0;n<this.n.length;n+=1)At(this.t,this.n[n],e)}}function se(t,e){return new t(e)}const j=new Map;let H=0;function Ht(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function Lt(t,e){const n={stylesheet:wt(e),rules:{}};return j.set(t,n),n}function ct(t,e,n,i,r,c,s,u=0){const o=16.666/i;let l=`{
`;for(let m=0;m<=1;m+=o){const p=e+(n-e)*c(m);l+=m*100+`%{${s(p,1-p)}}
`}const f=l+`100% {${s(n,1-n)}}
}`,a=`__svelte_${Ht(f)}_${u}`,_=it(t),{stylesheet:d,rules:h}=j.get(_)||Lt(_,t);h[a]||(h[a]=!0,d.insertRule(`@keyframes ${a} ${f}`,d.cssRules.length));const y=t.style.animation||"";return t.style.animation=`${y?`${y}, `:""}${a} ${i}ms linear ${r}ms 1 both`,H+=1,a}function B(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?c=>c.indexOf(e)<0:c=>c.indexOf("__svelte")===-1),r=n.length-i.length;r&&(t.style.animation=i.join(", "),H-=r,H||Dt())}function Dt(){z(()=>{H||(j.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&N(e)}),j.clear())})}let A;function E(t){A=t}function lt(){if(!A)throw new Error("Function called outside component initialization");return A}function ce(t){lt().$$.on_mount.push(t)}function le(t){lt().$$.after_update.push(t)}const v=[],W=[],C=[],U=[],ot=Promise.resolve();let R=!1;function ut(){R||(R=!0,ot.then(at))}function oe(){return ut(),ot}function T(t){C.push(t)}const q=new Set;let S=0;function at(){const t=A;do{for(;S<v.length;){const e=v[S];S++,E(e),Ot(e.$$)}for(E(null),v.length=0,S=0;W.length;)W.pop()();for(let e=0;e<C.length;e+=1){const n=C[e];q.has(n)||(q.add(n),n())}C.length=0}while(v.length);for(;U.length;)U.pop()();R=!1,q.clear(),E(t)}function Ot(t){if(t.fragment!==null){t.update(),b(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(T)}}let w;function ft(){return w||(w=Promise.resolve(),w.then(()=>{w=null})),w}function L(t,e,n){t.dispatchEvent(Mt(`${e?"intro":"outro"}${n}`))}const M=new Set;let g;function ue(){g={r:0,c:[],p:g}}function ae(){g.r||b(g.c),g=g.p}function Pt(t,e){t&&t.i&&(M.delete(t),t.i(e))}function fe(t,e,n,i){if(t&&t.o){if(M.has(t))return;M.add(t),g.c.push(()=>{M.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const _t={duration:0};function _e(t,e,n){const i={direction:"in"};let r=e(t,n,i),c=!1,s,u,o=0;function l(){s&&B(t,s)}function f(){const{delay:_=0,duration:d=300,easing:h=V,tick:y=x,css:m}=r||_t;m&&(s=ct(t,0,1,d,_,h,m,o++)),y(0,1);const p=tt()+_,dt=p+d;u&&u.abort(),c=!0,T(()=>L(t,!0,"start")),u=nt(P=>{if(c){if(P>=dt)return y(1,0),L(t,!0,"end"),l(),c=!1;if(P>=p){const I=h((P-p)/d);y(I,1-I)}}return c})}let a=!1;return{start(){a||(a=!0,B(t),D(r)?(r=r(i),ft().then(f)):f())},invalidate(){a=!1},end(){c&&(l(),c=!1)}}}function de(t,e,n){const i={direction:"out"};let r=e(t,n,i),c=!0,s;const u=g;u.r+=1;function o(){const{delay:l=0,duration:f=300,easing:a=V,tick:_=x,css:d}=r||_t;d&&(s=ct(t,1,0,f,l,a,d));const h=tt()+l,y=h+f;T(()=>L(t,!1,"start")),nt(m=>{if(c){if(m>=y)return _(0,1),L(t,!1,"end"),--u.r||b(u.c),!1;if(m>=h){const p=a((m-h)/f);_(1-p,p)}}return c})}return D(r)?ft().then(()=>{r=r(i),o()}):o(),{end(l){l&&r.tick&&r.tick(1,0),c&&(s&&B(t,s),c=!1)}}}function he(t){t&&t.c()}function me(t,e){t&&t.l(e)}function qt(t,e,n,i){const{fragment:r,after_update:c}=t.$$;r&&r.m(e,n),i||T(()=>{const s=t.$$.on_mount.map(X).filter(D);t.$$.on_destroy?t.$$.on_destroy.push(...s):b(s),t.$$.on_mount=[]}),c.forEach(T)}function Bt(t,e){const n=t.$$;n.fragment!==null&&(b(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Rt(t,e){t.$$.dirty[0]===-1&&(v.push(t),ut(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function pe(t,e,n,i,r,c,s,u=[-1]){const o=A;E(t);const l=t.$$={fragment:null,ctx:[],props:c,update:x,not_equal:r,bound:J(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(o?o.$$.context:[])),callbacks:J(),dirty:u,skip_bound:!1,root:e.target||o.$$.root};s&&s(l.root);let f=!1;if(l.ctx=n?n(t,e.props||{},(a,_,...d)=>{const h=d.length?d[0]:_;return l.ctx&&r(l.ctx[a],l.ctx[a]=h)&&(!l.skip_bound&&l.bound[a]&&l.bound[a](h),f&&Rt(t,a)),_}):[],l.update(),f=!0,b(l.before_update),l.fragment=i?i(l.ctx):!1,e.target){if(e.hydrate){yt();const a=kt(e.target);l.fragment&&l.fragment.l(a),a.forEach(N)}else l.fragment&&l.fragment.c();e.intro&&Pt(t.$$.fragment),qt(t,e.target,e.anchor,e.customElement),gt(),at()}E(o)}class ye{$destroy(){Bt(this,1),this.$destroy=x}$on(e,n){if(!D(n))return x;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!mt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{oe as A,x as B,It as C,Kt as D,Qt as E,Jt as F,Et as G,Gt as H,Ft as I,Yt as J,T as K,_e as L,de as M,Wt as N,Ut as O,Q as P,ne as Q,ye as S,Vt as a,At as b,ee as c,ae as d,Xt as e,Pt as f,ue as g,N as h,pe as i,le as j,F as k,te as l,kt as m,Zt as n,ce as o,re as p,G as q,Ct as r,zt as s,fe as t,ie as u,se as v,he as w,me as x,qt as y,Bt as z};
