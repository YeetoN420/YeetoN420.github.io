import{S as Ys,i as Zs,s as $s,k as t,q as c,a as e,l as o,m as r,r as i,h as a,c as l,n as Js,b as p,G as k,B as Ps}from"./index-2473db45.js";function sa(Ns){let u,os,K,y,es,F,b,ls,I,d,rs,G,q,z,v,cs,A,E,is,L,x,ks,U,_,us,O,h,fs,D,f,Qs=`<code class="language-js"> <span class="token function">onMount</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">&#123;</span>

        <span class="token function">setInterval</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
            <span class="token keyword">let</span> random <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            image<span class="token punctuation">.</span>src <span class="token operator">=</span> images<span class="token punctuation">[</span>random<span class="token punctuation">]</span><span class="token punctuation">;</span> 
        <span class="token punctuation">&#125;</span><span class="token punctuation">,</span> <span class="token number">5500</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">&#125;</span><span class="token punctuation">)</span>

    <span class="token keyword">let</span> image<span class="token punctuation">;</span>
    <span class="token keyword">let</span> images <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">"wave.jpeg"</span><span class="token punctuation">,</span> <span class="token string">"Empress.png"</span><span class="token punctuation">,</span> <span class="token string">"favicon.png"</span><span class="token punctuation">,</span> <span class="token string">"T-Spawn.jpg"</span><span class="token punctuation">]</span><span class="token punctuation">;</span></code>`,J,w,ms,N,m,Vs=`<code class="language-js"><span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"container"</span><span class="token operator">></span>
            <span class="token operator">&lt;</span>button type<span class="token operator">=</span><span class="token string">"submit"</span> <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"Insättning"</span> <span class="token literal-property property">on</span><span class="token operator">:</span>click<span class="token operator">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">&#123;</span>ericsBooleanToControlThePopup<span class="token operator">=</span><span class="token boolean">true</span><span class="token punctuation">&#125;</span><span class="token punctuation">&#125;</span> <span class="token operator">></span>Insättning<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>

            <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">:</span>openPopup<span class="token operator">=</span><span class="token punctuation">&#123;</span>ericsBooleanToControlThePopup<span class="token punctuation">&#125;</span> <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"popup"</span> id<span class="token operator">=</span><span class="token string">"popup"</span><span class="token operator">></span>
                <span class="token operator">&lt;</span>img alt<span class="token operator">=</span><span class="token string">""</span> src<span class="token operator">=</span><span class="token string">"Swish.png"</span><span class="token operator">></span>

                <span class="token operator">&lt;</span>h2<span class="token operator">></span>Make a deposit by Swishing the number<span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">></span>
                <span class="token operator">&lt;</span>h3<span class="token operator">></span><span class="token number">076</span> <span class="token number">794</span> <span class="token number">68</span> <span class="token number">94</span><span class="token operator">&lt;</span><span class="token operator">/</span>h3<span class="token operator">></span>

                <span class="token operator">&lt;</span>button type<span class="token operator">=</span><span class="token string">"button"</span> <span class="token literal-property property">on</span><span class="token operator">:</span>click<span class="token operator">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">&#123;</span>ericsBooleanToControlThePopup<span class="token operator">=</span><span class="token boolean">false</span><span class="token punctuation">&#125;</span><span class="token punctuation">&#125;</span><span class="token operator">></span><span class="token constant">OK</span><span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
            <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>

<span class="token punctuation">.</span>Insättning<span class="token punctuation">&#123;</span>
    <span class="token literal-property property">border</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token literal-property property">cursor</span><span class="token operator">:</span> pointer<span class="token punctuation">;</span>
    <span class="token literal-property property">outline</span><span class="token operator">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>

h3<span class="token punctuation">&#123;</span>
    font<span class="token operator">-</span>size<span class="token operator">:</span> 30px<span class="token punctuation">;</span>
    text<span class="token operator">-</span>decoration<span class="token operator">:</span> underline<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>

<span class="token punctuation">.</span>popup img<span class="token punctuation">&#123;</span>
    <span class="token literal-property property">width</span><span class="token operator">:</span> 250px<span class="token punctuation">;</span>
    <span class="token literal-property property">height</span><span class="token operator">:</span> 175px<span class="token punctuation">;</span>
    margin<span class="token operator">-</span>top<span class="token operator">:</span> <span class="token operator">-</span><span class="token number">25</span><span class="token operator">%</span><span class="token punctuation">;</span>
    border<span class="token operator">-</span>radius<span class="token operator">:</span> <span class="token number">20</span><span class="token operator">%</span><span class="token punctuation">;</span>
    box<span class="token operator">-</span>shadow<span class="token operator">:</span> <span class="token number">0</span> 2px 5px <span class="token function">rgba</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0.2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>

<span class="token punctuation">.</span>popup button<span class="token punctuation">&#123;</span>
    <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">100</span><span class="token operator">%</span><span class="token punctuation">;</span>
    
    <span class="token literal-property property">padding</span><span class="token operator">:</span> 10px <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token literal-property property">background</span><span class="token operator">:</span> #6fd649<span class="token punctuation">;</span>
    <span class="token literal-property property">color</span><span class="token operator">:</span> #fff<span class="token punctuation">;</span>
    <span class="token literal-property property">border</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token literal-property property">outline</span><span class="token operator">:</span> none<span class="token punctuation">;</span>
    font<span class="token operator">-</span>size<span class="token operator">:</span> 18px<span class="token punctuation">;</span>
    border<span class="token operator">-</span>radius<span class="token operator">:</span> 4px<span class="token punctuation">;</span>
    <span class="token literal-property property">cursor</span><span class="token operator">:</span> pointer<span class="token punctuation">;</span>
    box<span class="token operator">-</span>shadow<span class="token operator">:</span> <span class="token number">0</span> 5px 5px <span class="token function">rgba</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0.2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>

<span class="token punctuation">.</span>popup<span class="token punctuation">&#123;</span>
    <span class="token literal-property property">width</span><span class="token operator">:</span> 400px<span class="token punctuation">;</span>
    border<span class="token operator">-</span>radius<span class="token operator">:</span> 6px<span class="token punctuation">;</span>
    <span class="token literal-property property">position</span><span class="token operator">:</span> absolute<span class="token punctuation">;</span>
    <span class="token literal-property property">background</span><span class="token operator">:</span> #fff<span class="token punctuation">;</span>
    <span class="token literal-property property">color</span><span class="token operator">:</span> #<span class="token number">333</span><span class="token punctuation">;</span>
    <span class="token literal-property property">left</span><span class="token operator">:</span> <span class="token number">50</span><span class="token operator">%</span><span class="token punctuation">;</span>
    <span class="token literal-property property">top</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token literal-property property">transform</span><span class="token operator">:</span> <span class="token function">translate</span><span class="token punctuation">(</span> <span class="token operator">-</span><span class="token number">50</span><span class="token operator">%</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">50</span><span class="token operator">%</span><span class="token punctuation">)</span> <span class="token function">scale</span><span class="token punctuation">(</span><span class="token number">0.1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    text<span class="token operator">-</span>align<span class="token operator">:</span> center<span class="token punctuation">;</span>
    <span class="token literal-property property">padding</span><span class="token operator">:</span> 0px 30px 30px<span class="token punctuation">;</span>
    <span class="token literal-property property">visibility</span><span class="token operator">:</span> hidden<span class="token punctuation">;</span>
    <span class="token literal-property property">transition</span><span class="token operator">:</span> transform <span class="token number">0</span><span class="token punctuation">.</span>4s<span class="token punctuation">,</span> top <span class="token number">0</span><span class="token punctuation">.</span>4s<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>
<span class="token punctuation">.</span>openPopup<span class="token punctuation">&#123;</span>
    <span class="token literal-property property">visibility</span><span class="token operator">:</span> visible<span class="token punctuation">;</span>
    <span class="token literal-property property">top</span><span class="token operator">:</span> <span class="token number">50</span><span class="token operator">%</span><span class="token punctuation">;</span>
    <span class="token literal-property property">transform</span><span class="token operator">:</span> <span class="token function">translate</span><span class="token punctuation">(</span> <span class="token operator">-</span><span class="token number">50</span><span class="token operator">%</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">50</span><span class="token operator">%</span><span class="token punctuation">)</span> <span class="token function">scale</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>

<span class="token punctuation">.</span>container<span class="token punctuation">&#123;</span>
    <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">100</span><span class="token operator">%</span><span class="token punctuation">;</span>
    <span class="token literal-property property">height</span><span class="token operator">:</span> 100px<span class="token punctuation">;</span>
    <span class="token literal-property property">display</span><span class="token operator">:</span> flex<span class="token punctuation">;</span>
    align<span class="token operator">-</span>items<span class="token operator">:</span> center<span class="token punctuation">;</span>
    justify<span class="token operator">-</span>content<span class="token operator">:</span> center<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span></code>`,Q,j,ys,V,P,bs,W,g,ds,X,T,vs,Y,H,Es,Z,M,xs,$,C,_s,ss,R,hs,as,S,ws,ns,B,js,ps,ts;return{c(){u=t("h1"),os=c("Erik Rohlin"),K=e(),y=t("h2"),es=c("Framsteg:"),F=e(),b=t("p"),ls=c("Har laggts till funktionalitet som en popup vilket ger en tillgång till att mitt nummer i syfte för att swisha."),I=e(),d=t("p"),rs=c(`Utöver det har jag laggt till ett bildspel som spelar upp olika bilder i en loop,
har just ny random bilder men planerar att lägga till bilder som komplimenterar sidan.`),G=e(),q=t("hr"),z=e(),v=t("p"),cs=c(`Koden till bildspelet funkar så att för bildspelet tar den in 4 bilder kan variera om man ändrar let random = Math.floor(Math.random() * 4); och
let images = [“wave.jpeg”, “Empress.png”, “favicon.png”, “T-Spawn.jpg”]; sedan genereas en slumpmässig bild med 5,5 sek mellanrum.`),A=e(),E=t("p"),is=c(`Koden till popupen fungerar så att det finns ett gömt förminskat fönrster som kommer fram vid ett knapptryck och återgår till sitt
gömda läge efter ett annat knapptryck.`),L=e(),x=t("h1"),ks=c("Credit till Easy Turtorials bildspel och Popup"),U=e(),_=t("h1"),us=c("Reflektion"),O=e(),h=t("p"),fs=c("Gick smidigt och lätt då Easy Turtorials gav instruktioner och tips som var extremt lätta att följa och förstå."),D=e(),f=t("pre"),J=e(),w=t("h1"),ms=c("Popup"),N=e(),m=t("pre"),Q=e(),j=t("h1"),ys=c("Framtid"),V=e(),P=t("p"),bs=c("Att fixa css är blir det nästa fokuset och även lägga till lite annan funktionalitet"),W=e(),g=t("h1"),ds=c("Cecklista"),X=e(),T=t("p"),vs=c("förklarande text vid dem andra delarna av sidan + “möjlighet till uttag” ❌"),Y=e(),H=t("p"),Es=c("lätt att ta sig runt ❌"),Z=e(),M=t("p"),xs=c("spelhjälp och självtest ❌"),$=e(),C=t("p"),_s=c("bildspel ✅"),ss=e(),R=t("p"),hs=c("möjlighet till “insätting” ✅"),as=e(),S=t("p"),ws=c("hyffsad css ❌"),ns=e(),B=t("p"),js=c("egna casinospel ❌"),ps=e(),ts=t("hr"),this.h()},l(s){u=o(s,"H1",{});var n=r(u);os=i(n,"Erik Rohlin"),n.forEach(a),K=l(s),y=o(s,"H2",{});var gs=r(y);es=i(gs,"Framsteg:"),gs.forEach(a),F=l(s),b=o(s,"P",{});var Ts=r(b);ls=i(Ts,"Har laggts till funktionalitet som en popup vilket ger en tillgång till att mitt nummer i syfte för att swisha."),Ts.forEach(a),I=l(s),d=o(s,"P",{});var Hs=r(d);rs=i(Hs,`Utöver det har jag laggt till ett bildspel som spelar upp olika bilder i en loop,
har just ny random bilder men planerar att lägga till bilder som komplimenterar sidan.`),Hs.forEach(a),G=l(s),q=o(s,"HR",{}),z=l(s),v=o(s,"P",{});var Ms=r(v);cs=i(Ms,`Koden till bildspelet funkar så att för bildspelet tar den in 4 bilder kan variera om man ändrar let random = Math.floor(Math.random() * 4); och
let images = [“wave.jpeg”, “Empress.png”, “favicon.png”, “T-Spawn.jpg”]; sedan genereas en slumpmässig bild med 5,5 sek mellanrum.`),Ms.forEach(a),A=l(s),E=o(s,"P",{});var Cs=r(E);is=i(Cs,`Koden till popupen fungerar så att det finns ett gömt förminskat fönrster som kommer fram vid ett knapptryck och återgår till sitt
gömda läge efter ett annat knapptryck.`),Cs.forEach(a),L=l(s),x=o(s,"H1",{});var Rs=r(x);ks=i(Rs,"Credit till Easy Turtorials bildspel och Popup"),Rs.forEach(a),U=l(s),_=o(s,"H1",{});var Ss=r(_);us=i(Ss,"Reflektion"),Ss.forEach(a),O=l(s),h=o(s,"P",{});var Bs=r(h);fs=i(Bs,"Gick smidigt och lätt då Easy Turtorials gav instruktioner och tips som var extremt lätta att följa och förstå."),Bs.forEach(a),D=l(s),f=o(s,"PRE",{class:!0});var Ws=r(f);Ws.forEach(a),J=l(s),w=o(s,"H1",{});var Ks=r(w);ms=i(Ks,"Popup"),Ks.forEach(a),N=l(s),m=o(s,"PRE",{class:!0});var Xs=r(m);Xs.forEach(a),Q=l(s),j=o(s,"H1",{});var Fs=r(j);ys=i(Fs,"Framtid"),Fs.forEach(a),V=l(s),P=o(s,"P",{});var Is=r(P);bs=i(Is,"Att fixa css är blir det nästa fokuset och även lägga till lite annan funktionalitet"),Is.forEach(a),W=l(s),g=o(s,"H1",{});var Gs=r(g);ds=i(Gs,"Cecklista"),Gs.forEach(a),X=l(s),T=o(s,"P",{});var qs=r(T);vs=i(qs,"förklarande text vid dem andra delarna av sidan + “möjlighet till uttag” ❌"),qs.forEach(a),Y=l(s),H=o(s,"P",{});var zs=r(H);Es=i(zs,"lätt att ta sig runt ❌"),zs.forEach(a),Z=l(s),M=o(s,"P",{});var As=r(M);xs=i(As,"spelhjälp och självtest ❌"),As.forEach(a),$=l(s),C=o(s,"P",{});var Ls=r(C);_s=i(Ls,"bildspel ✅"),Ls.forEach(a),ss=l(s),R=o(s,"P",{});var Us=r(R);hs=i(Us,"möjlighet till “insätting” ✅"),Us.forEach(a),as=l(s),S=o(s,"P",{});var Os=r(S);ws=i(Os,"hyffsad css ❌"),Os.forEach(a),ns=l(s),B=o(s,"P",{});var Ds=r(B);js=i(Ds,"egna casinospel ❌"),Ds.forEach(a),ps=l(s),ts=o(s,"HR",{}),this.h()},h(){Js(f,"class","language-js"),Js(m,"class","language-js")},m(s,n){p(s,u,n),k(u,os),p(s,K,n),p(s,y,n),k(y,es),p(s,F,n),p(s,b,n),k(b,ls),p(s,I,n),p(s,d,n),k(d,rs),p(s,G,n),p(s,q,n),p(s,z,n),p(s,v,n),k(v,cs),p(s,A,n),p(s,E,n),k(E,is),p(s,L,n),p(s,x,n),k(x,ks),p(s,U,n),p(s,_,n),k(_,us),p(s,O,n),p(s,h,n),k(h,fs),p(s,D,n),p(s,f,n),f.innerHTML=Qs,p(s,J,n),p(s,w,n),k(w,ms),p(s,N,n),p(s,m,n),m.innerHTML=Vs,p(s,Q,n),p(s,j,n),k(j,ys),p(s,V,n),p(s,P,n),k(P,bs),p(s,W,n),p(s,g,n),k(g,ds),p(s,X,n),p(s,T,n),k(T,vs),p(s,Y,n),p(s,H,n),k(H,Es),p(s,Z,n),p(s,M,n),k(M,xs),p(s,$,n),p(s,C,n),k(C,_s),p(s,ss,n),p(s,R,n),k(R,hs),p(s,as,n),p(s,S,n),k(S,ws),p(s,ns,n),p(s,B,n),k(B,js),p(s,ps,n),p(s,ts,n)},p:Ps,i:Ps,o:Ps,d(s){s&&a(u),s&&a(K),s&&a(y),s&&a(F),s&&a(b),s&&a(I),s&&a(d),s&&a(G),s&&a(q),s&&a(z),s&&a(v),s&&a(A),s&&a(E),s&&a(L),s&&a(x),s&&a(U),s&&a(_),s&&a(O),s&&a(h),s&&a(D),s&&a(f),s&&a(J),s&&a(w),s&&a(N),s&&a(m),s&&a(Q),s&&a(j),s&&a(V),s&&a(P),s&&a(W),s&&a(g),s&&a(X),s&&a(T),s&&a(Y),s&&a(H),s&&a(Z),s&&a(M),s&&a($),s&&a(C),s&&a(ss),s&&a(R),s&&a(as),s&&a(S),s&&a(ns),s&&a(B),s&&a(ps),s&&a(ts)}}}const na={title:"Blog 2",date:"2023-5-29"};class pa extends Ys{constructor(u){super(),Zs(this,u,null,sa,$s,{})}}export{pa as default,na as metadata};
