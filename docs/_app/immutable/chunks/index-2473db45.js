function x(){}const Q=t=>t;function $t(t,e){for(const n in e)t[n]=e[n];return t}function lt(t){return t()}function nt(){return Object.create(null)}function T(t){t.forEach(lt)}function D(t){return typeof t=="function"}function Xt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let B;function Yt(t,e){return B||(B=document.createElement("a")),B.href=e,t===B.href}function bt(t){return Object.keys(t).length===0}function Et(t,...e){if(t==null)return x;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Zt(t,e,n){t.$$.on_destroy.push(Et(e,n))}function te(t,e,n,i){if(t){const s=ct(t,e,n,i);return t[0](s)}}function ct(t,e,n,i){return t[1]&&i?$t(n.ctx.slice(),t[1](i(e))):n.ctx}function ee(t,e,n,i){if(t[2]&&i){const s=t[2](i(n));if(e.dirty===void 0)return s;if(typeof s=="object"){const o=[],r=Math.max(e.dirty.length,s.length);for(let a=0;a<r;a+=1)o[a]=e.dirty[a]|s[a];return o}return e.dirty|s}return e.dirty}function ne(t,e,n,i,s,o){if(s){const r=ct(e,n,i,o);t.p(r,s)}}function ie(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function se(t,e,n){return t.set(n),e}function re(t){return t&&D(t.destroy)?t.destroy:x}function oe(t){const e=typeof t=="string"&&t.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);return e?[parseFloat(e[1]),e[2]||"px"]:[t,"px"]}const at=typeof window<"u";let U=at?()=>window.performance.now():()=>Date.now(),V=at?t=>requestAnimationFrame(t):x;const k=new Set;function ft(t){k.forEach(e=>{e.c(t)||(k.delete(e),e.f())}),k.size!==0&&V(ft)}function X(t){let e;return k.size===0&&V(ft),{promise:new Promise(n=>{k.add(e={c:t,f:n})}),abort(){k.delete(e)}}}let W=!1;function vt(){W=!0}function Tt(){W=!1}function Nt(t,e,n,i){for(;t<e;){const s=t+(e-t>>1);n(s)<=i?t=s+1:e=s}return t}function At(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const l=[];for(let c=0;c<e.length;c++){const u=e[c];u.claim_order!==void 0&&l.push(u)}e=l}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let s=0;for(let l=0;l<e.length;l++){const c=e[l].claim_order,u=(s>0&&e[n[s]].claim_order<=c?s+1:Nt(1,s,_=>e[n[_]].claim_order,c))-1;i[l]=n[u]+1;const f=u+1;n[f]=l,s=Math.max(f,s)}const o=[],r=[];let a=e.length-1;for(let l=n[s]+1;l!=0;l=i[l-1]){for(o.push(e[l-1]);a>=l;a--)r.push(e[a]);a--}for(;a>=0;a--)r.push(e[a]);o.reverse(),r.sort((l,c)=>l.claim_order-c.claim_order);for(let l=0,c=0;l<r.length;l++){for(;c<o.length&&r[l].claim_order>=o[c].claim_order;)c++;const u=c<o.length?o[c]:null;t.insertBefore(r[l],u)}}function kt(t,e){t.appendChild(e)}function ut(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function Ct(t){const e=Y("style");return St(ut(t),e),e.sheet}function St(t,e){return kt(t.head||t,e),e.sheet}function Mt(t,e){if(W){for(At(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Lt(t,e,n){t.insertBefore(e,n||null)}function Ht(t,e,n){W&&!n?Mt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function H(t){t.parentNode&&t.parentNode.removeChild(t)}function le(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function Y(t){return document.createElement(t)}function Rt(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function Z(t){return document.createTextNode(t)}function ce(){return Z(" ")}function ae(){return Z("")}function fe(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function ue(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function jt(t){return Array.from(t.childNodes)}function _t(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function dt(t,e,n,i,s=!1){_t(t);const o=(()=>{for(let r=t.claim_info.last_index;r<t.length;r++){const a=t[r];if(e(a)){const l=n(a);return l===void 0?t.splice(r,1):t[r]=l,s||(t.claim_info.last_index=r),a}}for(let r=t.claim_info.last_index-1;r>=0;r--){const a=t[r];if(e(a)){const l=n(a);return l===void 0?t.splice(r,1):t[r]=l,s?l===void 0&&t.claim_info.last_index--:t.claim_info.last_index=r,a}}return i()})();return o.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,o}function Dt(t,e,n,i){return dt(t,s=>s.nodeName===e,s=>{const o=[];for(let r=0;r<s.attributes.length;r++){const a=s.attributes[r];n[a.name]||o.push(a.name)}o.forEach(r=>s.removeAttribute(r))},()=>i(e))}function _e(t,e,n){return Dt(t,e,n,Y)}function Pt(t,e){return dt(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>Z(e),!0)}function de(t){return Pt(t," ")}function it(t,e,n){for(let i=n;i<t.length;i+=1){const s=t[i];if(s.nodeType===8&&s.textContent.trim()===e)return i}return t.length}function he(t,e){const n=it(t,"HTML_TAG_START",0),i=it(t,"HTML_TAG_END",n);if(n===i)return new st(void 0,e);_t(t);const s=t.splice(n,i-n+1);H(s[0]),H(s[s.length-1]);const o=s.slice(1,s.length-1);for(const r of o)r.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new st(o,e)}function me(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function pe(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function ye(t,e,n){t.classList[n?"add":"remove"](e)}function Bt(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const s=document.createEvent("CustomEvent");return s.initCustomEvent(t,n,i,e),s}function ge(t,e){const n=[];let i=0;for(const s of e.childNodes)if(s.nodeType===8){const o=s.textContent.trim();o===`HEAD_${t}_END`?(i-=1,n.push(s)):o===`HEAD_${t}_START`&&(i+=1,n.push(s))}else i>0&&n.push(s);return n}class Ot{constructor(e=!1){this.is_svg=!1,this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,n,i=null){this.e||(this.is_svg?this.e=Rt(n.nodeName):this.e=Y(n.nodeType===11?"TEMPLATE":n.nodeName),this.t=n.tagName!=="TEMPLATE"?n:n.content,this.c(e)),this.i(i)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.nodeName==="TEMPLATE"?this.e.content.childNodes:this.e.childNodes)}i(e){for(let n=0;n<this.n.length;n+=1)Lt(this.t,this.n[n],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(H)}}class st extends Ot{constructor(e,n=!1){super(n),this.e=this.n=null,this.l=e}c(e){this.l?this.n=this.l:super.c(e)}i(e){for(let n=0;n<this.n.length;n+=1)Ht(this.t,this.n[n],e)}}function xe(t,e){return new t(e)}const q=new Map;let z=0;function qt(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function zt(t,e){const n={stylesheet:Ct(e),rules:{}};return q.set(t,n),n}function tt(t,e,n,i,s,o,r,a=0){const l=16.666/i;let c=`{
`;for(let m=0;m<=1;m+=l){const y=e+(n-e)*o(m);c+=m*100+`%{${r(y,1-y)}}
`}const u=c+`100% {${r(n,1-n)}}
}`,f=`__svelte_${qt(u)}_${a}`,_=ut(t),{stylesheet:d,rules:h}=q.get(_)||zt(_,t);h[f]||(h[f]=!0,d.insertRule(`@keyframes ${f} ${u}`,d.cssRules.length));const g=t.style.animation||"";return t.style.animation=`${g?`${g}, `:""}${f} ${i}ms linear ${s}ms 1 both`,z+=1,f}function F(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?o=>o.indexOf(e)<0:o=>o.indexOf("__svelte")===-1),s=n.length-i.length;s&&(t.style.animation=i.join(", "),z-=s,z||Ft())}function Ft(){V(()=>{z||(q.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&H(e)}),q.clear())})}function we(t,e,n,i){if(!e)return x;const s=t.getBoundingClientRect();if(e.left===s.left&&e.right===s.right&&e.top===s.top&&e.bottom===s.bottom)return x;const{delay:o=0,duration:r=300,easing:a=Q,start:l=U()+o,end:c=l+r,tick:u=x,css:f}=n(t,{from:e,to:s},i);let _=!0,d=!1,h;function g(){f&&(h=tt(t,0,1,r,o,a,f)),o||(d=!0)}function m(){f&&F(t,h),_=!1}return X(y=>{if(!d&&y>=l&&(d=!0),d&&y>=c&&(u(1,0),m()),!_)return!1;if(d){const v=y-l,b=0+1*a(v/r);u(b,1-b)}return!0}),g(),u(0,1),m}function $e(t){const e=getComputedStyle(t);if(e.position!=="absolute"&&e.position!=="fixed"){const{width:n,height:i}=e,s=t.getBoundingClientRect();t.style.position="absolute",t.style.width=n,t.style.height=i,Gt(t,s)}}function Gt(t,e){const n=t.getBoundingClientRect();if(e.left!==n.left||e.top!==n.top){const i=getComputedStyle(t),s=i.transform==="none"?"":i.transform;t.style.transform=`${s} translate(${e.left-n.left}px, ${e.top-n.top}px)`}}let R;function L(t){R=t}function ht(){if(!R)throw new Error("Function called outside component initialization");return R}function be(t){ht().$$.on_mount.push(t)}function Ee(t){ht().$$.after_update.push(t)}const A=[],rt=[];let C=[];const ot=[],mt=Promise.resolve();let K=!1;function pt(){K||(K=!0,mt.then(yt))}function ve(){return pt(),mt}function j(t){C.push(t)}const J=new Set;let N=0;function yt(){if(N!==0)return;const t=R;do{try{for(;N<A.length;){const e=A[N];N++,L(e),Wt(e.$$)}}catch(e){throw A.length=0,N=0,e}for(L(null),A.length=0,N=0;rt.length;)rt.pop()();for(let e=0;e<C.length;e+=1){const n=C[e];J.has(n)||(J.add(n),n())}C.length=0}while(A.length);for(;ot.length;)ot.pop()();K=!1,J.clear(),L(t)}function Wt(t){if(t.fragment!==null){t.update(),T(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(j)}}function It(t){const e=[],n=[];C.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),C=e}let M;function gt(){return M||(M=Promise.resolve(),M.then(()=>{M=null})),M}function G(t,e,n){t.dispatchEvent(Bt(`${e?"intro":"outro"}${n}`))}const O=new Set;let E;function Te(){E={r:0,c:[],p:E}}function Ne(){E.r||T(E.c),E=E.p}function xt(t,e){t&&t.i&&(O.delete(t),t.i(e))}function Jt(t,e,n,i){if(t&&t.o){if(O.has(t))return;O.add(t),E.c.push(()=>{O.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const wt={duration:0};function Ae(t,e,n){const i={direction:"in"};let s=e(t,n,i),o=!1,r,a,l=0;function c(){r&&F(t,r)}function u(){const{delay:_=0,duration:d=300,easing:h=Q,tick:g=x,css:m}=s||wt;m&&(r=tt(t,0,1,d,_,h,m,l++)),g(0,1);const y=U()+_,v=y+d;a&&a.abort(),o=!0,j(()=>G(t,!0,"start")),a=X(b=>{if(o){if(b>=v)return g(1,0),G(t,!0,"end"),c(),o=!1;if(b>=y){const S=h((b-y)/d);g(S,1-S)}}return o})}let f=!1;return{start(){f||(f=!0,F(t),D(s)?(s=s(i),gt().then(u)):u())},invalidate(){f=!1},end(){o&&(c(),o=!1)}}}function ke(t,e,n){const i={direction:"out"};let s=e(t,n,i),o=!0,r;const a=E;a.r+=1;function l(){const{delay:c=0,duration:u=300,easing:f=Q,tick:_=x,css:d}=s||wt;d&&(r=tt(t,1,0,u,c,f,d));const h=U()+c,g=h+u;j(()=>G(t,!1,"start")),X(m=>{if(o){if(m>=g)return _(0,1),G(t,!1,"end"),--a.r||T(a.c),!1;if(m>=h){const y=f((m-h)/u);_(1-y,y)}}return o})}return D(s)?gt().then(()=>{s=s(i),l()}):l(),{end(c){c&&s.tick&&s.tick(1,0),o&&(r&&F(t,r),o=!1)}}}const Ce=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function Kt(t,e){Jt(t,1,1,()=>{e.delete(t.key)})}function Se(t,e){t.f(),Kt(t,e)}function Me(t,e,n,i,s,o,r,a,l,c,u,f){let _=t.length,d=o.length,h=_;const g={};for(;h--;)g[t[h].key]=h;const m=[],y=new Map,v=new Map,b=[];for(h=d;h--;){const p=f(s,o,h),w=n(p);let $=r.get(w);$?i&&b.push(()=>$.p(p,e)):($=c(w,p),$.c()),y.set(w,m[h]=$),w in g&&v.set(w,Math.abs(h-g[w]))}const S=new Set,et=new Set;function I(p){xt(p,1),p.m(a,u),r.set(p.key,p),u=p.first,d--}for(;_&&d;){const p=m[d-1],w=t[_-1],$=p.key,P=w.key;p===w?(u=p.first,_--,d--):y.has(P)?!r.has($)||S.has($)?I(p):et.has(P)?_--:v.get($)>v.get(P)?(et.add($),I(p)):(S.add(P),_--):(l(w,r),_--)}for(;_--;){const p=t[_];y.has(p.key)||l(p,r)}for(;d;)I(m[d-1]);return T(b),m}function Le(t){t&&t.c()}function He(t,e){t&&t.l(e)}function Qt(t,e,n,i){const{fragment:s,after_update:o}=t.$$;s&&s.m(e,n),i||j(()=>{const r=t.$$.on_mount.map(lt).filter(D);t.$$.on_destroy?t.$$.on_destroy.push(...r):T(r),t.$$.on_mount=[]}),o.forEach(j)}function Ut(t,e){const n=t.$$;n.fragment!==null&&(It(n.after_update),T(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Vt(t,e){t.$$.dirty[0]===-1&&(A.push(t),pt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Re(t,e,n,i,s,o,r,a=[-1]){const l=R;L(t);const c=t.$$={fragment:null,ctx:[],props:o,update:x,not_equal:s,bound:nt(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:nt(),dirty:a,skip_bound:!1,root:e.target||l.$$.root};r&&r(c.root);let u=!1;if(c.ctx=n?n(t,e.props||{},(f,_,...d)=>{const h=d.length?d[0]:_;return c.ctx&&s(c.ctx[f],c.ctx[f]=h)&&(!c.skip_bound&&c.bound[f]&&c.bound[f](h),u&&Vt(t,f)),_}):[],c.update(),u=!0,T(c.before_update),c.fragment=i?i(c.ctx):!1,e.target){if(e.hydrate){vt();const f=jt(e.target);c.fragment&&c.fragment.l(f),f.forEach(H)}else c.fragment&&c.fragment.c();e.intro&&xt(t.$$.fragment),Qt(t,e.target,e.anchor,e.customElement),Tt(),yt()}L(l)}class je{$destroy(){Ut(this,1),this.$destroy=x}$on(e,n){if(!D(n))return x;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const s=i.indexOf(n);s!==-1&&i.splice(s,1)}}$set(e){this.$$set&&!bt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{Me as $,ve as A,x as B,te as C,ne as D,ie as E,ee as F,Mt as G,Zt as H,ge as I,le as J,fe as K,re as L,T as M,Ce as N,Yt as O,ye as P,rt as Q,j as R,je as S,Ae as T,ke as U,se as V,st as W,he as X,oe as Y,$t as Z,D as _,ce as a,$e as a0,Gt as a1,we as a2,Se as a3,Ht as b,de as c,Ne as d,ae as e,xt as f,Te as g,H as h,Re as i,Ee as j,Y as k,_e as l,jt as m,ue as n,be as o,pe as p,Z as q,Pt as r,Xt as s,Jt as t,me as u,xe as v,Le as w,He as x,Qt as y,Ut as z};