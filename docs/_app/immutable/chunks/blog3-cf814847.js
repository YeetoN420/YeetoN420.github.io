import{S as Ms,i as Cs,s as Fs,k as t,q as c,a as e,l as o,m as r,r as k,h as a,c as l,n as cs,b as p,G as i,B as ks}from"./index-2473db45.js";function Ls(_s){let u,W,S,d,X,T,b,Y,M,C,F,y,Z,L,v,$,B,h,ss,G,f,Es=`<code class="language-js"><span class="token operator">&lt;</span>script<span class="token operator">></span>
    <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> onMount <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">"svelte"</span><span class="token punctuation">;</span>
   

    <span class="token keyword">let</span> image<span class="token punctuation">;</span>
    <span class="token keyword">let</span> images <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">"megawin3.gif"</span><span class="token punctuation">,</span> <span class="token string">"superwin.gif"</span><span class="token punctuation">,</span> <span class="token string">"giphy.gif"</span><span class="token punctuation">,</span> <span class="token string">"jackpot.gif"</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

    <span class="token keyword">let</span> ericsBooleanToControlThePopup <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>

<span class="token comment">// Easy Turtorials kod för bildspel</span>

    <span class="token function">onMount</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">&#123;</span>

        <span class="token function">setInterval</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
            <span class="token keyword">let</span> random <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            image<span class="token punctuation">.</span>src <span class="token operator">=</span> images<span class="token punctuation">[</span>random<span class="token punctuation">]</span><span class="token punctuation">;</span> 
        <span class="token punctuation">&#125;</span><span class="token punctuation">,</span> <span class="token number">5500</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">&#125;</span><span class="token punctuation">)</span>

<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span></code>`,q,m,Ps=`<code class="language-js">        <span class="token operator">&lt;</span>a href<span class="token operator">=</span><span class="token string">"https://www.spelpaus.se/"</span><span class="token operator">></span> 
            <span class="token operator">&lt;</span>img <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"spelpaus"</span> alt<span class="token operator">=</span><span class="token string">""</span> src<span class="token operator">=</span><span class="token string">"Spellpaus.png"</span><span class="token operator">/</span><span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">></span>

        <span class="token operator">&lt;</span>a href<span class="token operator">=</span><span class="token string">"https://stodlinjen.se/spelberoende-test-pgsi"</span><span class="token operator">></span>
            <span class="token operator">&lt;</span>img <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"självtest"</span> alt<span class="token operator">=</span><span class="token string">""</span> src<span class="token operator">=</span><span class="token string">"självtest.png"</span><span class="token operator">/</span><span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">></span>


        <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"Navigation-buttons"</span><span class="token operator">></span>
            <span class="token operator">&lt;</span>form action<span class="token operator">=</span><span class="token string">"http://localhost:5173/Project"</span><span class="token operator">></span>
                <span class="token operator">&lt;</span>button <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"navigate"</span> type<span class="token operator">=</span><span class="token string">"submit"</span><span class="token operator">></span>Hem<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
            <span class="token operator">&lt;</span><span class="token operator">/</span>form<span class="token operator">></span>
            
            <span class="token operator">&lt;</span>form action<span class="token operator">=</span><span class="token string">"http://localhost:5173/Project_Kampanjer"</span><span class="token operator">></span>
                <span class="token operator">&lt;</span>button <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"navigate"</span> type<span class="token operator">=</span><span class="token string">"submit"</span><span class="token operator">></span>Kampanjer<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
            <span class="token operator">&lt;</span><span class="token operator">/</span>form<span class="token operator">></span>
            
            <span class="token operator">&lt;</span>form action<span class="token operator">=</span><span class="token string">"http://localhost:5173/Project_Regler_och_villkor"</span><span class="token operator">></span>
                <span class="token operator">&lt;</span>button <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"navigate"</span> type<span class="token operator">=</span><span class="token string">"submit"</span><span class="token operator">></span>Regler och villkor<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
            <span class="token operator">&lt;</span><span class="token operator">/</span>form<span class="token operator">></span>
            
            <span class="token operator">&lt;</span>form action<span class="token operator">=</span><span class="token string">"http://localhost:5173/Project_Insättningar_och_uttag"</span><span class="token operator">></span>
                <span class="token operator">&lt;</span>button <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"navigate"</span> type<span class="token operator">=</span><span class="token string">"submit"</span><span class="token operator">></span>Uttag<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
            <span class="token operator">&lt;</span><span class="token operator">/</span>form<span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>

        <span class="token operator">&lt;</span>fieldset <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"casinogame"</span><span class="token operator">></span>
            <span class="token operator">&lt;</span>img alt<span class="token operator">=</span><span class="token string">""</span> src<span class="token operator">=</span><span class="token string">""</span><span class="token operator">/</span><span class="token operator">></span>
            <span class="token operator">&lt;</span>h4<span class="token operator">></span>
                Spel kommer snart<span class="token operator">!</span><span class="token operator">!</span>
            <span class="token operator">&lt;</span><span class="token operator">/</span>h4<span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>fieldset<span class="token operator">></span>
        
        <span class="token operator">&lt;</span>fieldset <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"casinogame"</span><span class="token operator">></span>
            <span class="token operator">&lt;</span>img alt<span class="token operator">=</span><span class="token string">""</span> src<span class="token operator">=</span><span class="token string">""</span><span class="token operator">/</span><span class="token operator">></span>
            <span class="token operator">&lt;</span>h5<span class="token operator">></span>
                Spel kommer snart<span class="token operator">!</span><span class="token operator">!</span>
            <span class="token operator">&lt;</span><span class="token operator">/</span>h5<span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>fieldset<span class="token operator">></span>

        <span class="token operator">&lt;</span>fieldset <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"casinogame"</span><span class="token operator">></span>
            <span class="token operator">&lt;</span>img alt<span class="token operator">=</span><span class="token string">""</span> src<span class="token operator">=</span><span class="token string">""</span><span class="token operator">/</span><span class="token operator">></span>
            <span class="token operator">&lt;</span>h6<span class="token operator">></span>
                Spel kommer snart<span class="token operator">!</span><span class="token operator">!</span>
            <span class="token operator">&lt;</span><span class="token operator">/</span>h6<span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>fieldset<span class="token operator">></span></code>`,z,g,Rs=`<code class="language-js">
<span class="token punctuation">.</span>spelpaus<span class="token operator">:</span>hover<span class="token punctuation">&#123;</span>
    <span class="token literal-property property">cursor</span><span class="token operator">:</span> pointer<span class="token punctuation">;</span>
    <span class="token literal-property property">outline</span><span class="token operator">:</span> auto<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>

<span class="token punctuation">.</span>spelpaus<span class="token punctuation">&#123;</span>
    max<span class="token operator">-</span>width<span class="token operator">:</span> 70px<span class="token punctuation">;</span>
    max<span class="token operator">-</span>height<span class="token operator">:</span> 40px<span class="token punctuation">;</span>
    background<span class="token operator">-</span>color<span class="token operator">:</span> #fff<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>

<span class="token punctuation">.</span>självtest<span class="token operator">:</span>hover<span class="token punctuation">&#123;</span>
    <span class="token literal-property property">cursor</span><span class="token operator">:</span> pointer<span class="token punctuation">;</span>
    <span class="token literal-property property">outline</span><span class="token operator">:</span> auto<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>

<span class="token punctuation">.</span>självtest<span class="token punctuation">&#123;</span>
    min<span class="token operator">-</span>width<span class="token operator">:</span> 90px<span class="token punctuation">;</span>
    min<span class="token operator">-</span>height<span class="token operator">:</span> 37px<span class="token punctuation">;</span>
    max<span class="token operator">-</span>width<span class="token operator">:</span> 90px<span class="token punctuation">;</span>
    max<span class="token operator">-</span>height<span class="token operator">:</span> 37px<span class="token punctuation">;</span>
    background<span class="token operator">-</span>color<span class="token operator">:</span> #fff<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>

<span class="token operator">:</span><span class="token function">global</span><span class="token punctuation">(</span><span class="token parameter">body</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>

        <span class="token literal-property property">background</span><span class="token operator">:</span> linear<span class="token operator">-</span><span class="token function">gradient</span><span class="token punctuation">(</span>0deg<span class="token punctuation">,</span> <span class="token function">rgba</span><span class="token punctuation">(</span><span class="token number">47</span><span class="token punctuation">,</span><span class="token number">13</span><span class="token punctuation">,</span><span class="token number">13</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token number">0</span><span class="token operator">%</span><span class="token punctuation">,</span> <span class="token function">rgba</span><span class="token punctuation">(</span><span class="token number">250</span><span class="token punctuation">,</span><span class="token number">19</span><span class="token punctuation">,</span><span class="token number">19</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token number">100</span><span class="token operator">%</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        background<span class="token operator">-</span>position<span class="token operator">:</span> center<span class="token punctuation">;</span>
        background<span class="token operator">-</span>repeat<span class="token operator">:</span> no<span class="token operator">-</span>repeat<span class="token punctuation">;</span>
        background<span class="token operator">-</span>size<span class="token operator">:</span> cover<span class="token punctuation">;</span>
        <span class="token literal-property property">height</span><span class="token operator">:</span> max<span class="token operator">-</span>content<span class="token punctuation">;</span>
        <span class="token literal-property property">overflow</span><span class="token operator">:</span> auto<span class="token punctuation">;</span>
    <span class="token punctuation">&#125;</span>

    hr<span class="token punctuation">&#123;</span>
        border<span class="token operator">-</span>color<span class="token operator">:</span> black<span class="token punctuation">;</span>
        <span class="token literal-property property">outline</span><span class="token operator">:</span> none<span class="token punctuation">;</span>
    <span class="token punctuation">&#125;</span>


<span class="token punctuation">.</span>Navigation<span class="token operator">-</span>buttons<span class="token punctuation">&#123;</span>
    <span class="token literal-property property">display</span><span class="token operator">:</span> flex<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>

<span class="token punctuation">.</span>navigate<span class="token punctuation">&#123;</span>
    <span class="token literal-property property">padding</span><span class="token operator">:</span> 10px 25px<span class="token punctuation">;</span>
    margin<span class="token operator">-</span>left<span class="token operator">:</span> 10px<span class="token punctuation">;</span>
    font<span class="token operator">-</span>size<span class="token operator">:</span> 20px<span class="token punctuation">;</span>
    font<span class="token operator">-</span>weight<span class="token operator">:</span> <span class="token number">500</span><span class="token punctuation">;</span>
    <span class="token literal-property property">background</span><span class="token operator">:</span> none<span class="token punctuation">;</span>
    <span class="token literal-property property">border</span><span class="token operator">:</span> none<span class="token punctuation">;</span>
    <span class="token literal-property property">outline</span><span class="token operator">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>

<span class="token punctuation">.</span>navigate<span class="token operator">:</span>hover<span class="token punctuation">&#123;</span>
    <span class="token literal-property property">background</span><span class="token operator">:</span> radial<span class="token operator">-</span><span class="token function">gradient</span><span class="token punctuation">(</span>circle<span class="token punctuation">,</span> <span class="token function">rgba</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">,</span><span class="token number">255</span><span class="token punctuation">,</span><span class="token number">255</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token number">0</span><span class="token operator">%</span><span class="token punctuation">,</span> <span class="token function">rgba</span><span class="token punctuation">(</span><span class="token number">190</span><span class="token punctuation">,</span><span class="token number">19</span><span class="token punctuation">,</span><span class="token number">19</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token number">85</span><span class="token operator">%</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>

<span class="token punctuation">.</span>navigate<span class="token operator">:</span>active<span class="token punctuation">&#123;</span>
    <span class="token literal-property property">outline</span><span class="token operator">:</span> auto<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>

<span class="token punctuation">.</span>casinogame<span class="token operator">:</span>hover<span class="token punctuation">&#123;</span>
    <span class="token literal-property property">cursor</span><span class="token operator">:</span> pointer<span class="token punctuation">;</span>
    <span class="token literal-property property">outline</span><span class="token operator">:</span> auto<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>

<span class="token punctuation">.</span>casinogame<span class="token punctuation">&#123;</span>
    border<span class="token operator">-</span>color<span class="token operator">:</span> black<span class="token punctuation">;</span>
    <span class="token literal-property property">border</span><span class="token operator">:</span> solid 4px<span class="token punctuation">;</span>
    <span class="token literal-property property">height</span><span class="token operator">:</span> 100px<span class="token punctuation">;</span>
    <span class="token literal-property property">width</span><span class="token operator">:</span> 150px<span class="token punctuation">;</span>
    <span class="token literal-property property">display</span><span class="token operator">:</span> flex<span class="token punctuation">;</span>
    flex<span class="token operator">-</span>direction<span class="token operator">:</span> row<span class="token punctuation">;</span>
    <span class="token literal-property property">float</span><span class="token operator">:</span> left<span class="token punctuation">;</span>
    <span class="token literal-property property">margin</span><span class="token operator">:</span> auto<span class="token punctuation">;</span>
    margin<span class="token operator">-</span>left<span class="token operator">:</span> 20px<span class="token punctuation">;</span>
    margin<span class="token operator">-</span>top<span class="token operator">:</span> 20px<span class="token punctuation">;</span>
    <span class="token literal-property property">background</span><span class="token operator">:</span> linear<span class="token operator">-</span><span class="token function">gradient</span><span class="token punctuation">(</span>45deg<span class="token punctuation">,</span> <span class="token function">rgba</span><span class="token punctuation">(</span><span class="token number">220</span><span class="token punctuation">,</span><span class="token number">235</span><span class="token punctuation">,</span><span class="token number">255</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token number">0</span><span class="token operator">%</span><span class="token punctuation">,</span> <span class="token function">rgba</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">18</span><span class="token punctuation">,</span><span class="token number">180</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token number">73</span><span class="token operator">%</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>

body<span class="token punctuation">&#123;</span>
    <span class="token literal-property property">height</span><span class="token operator">:</span> 100vh<span class="token punctuation">;</span>
    <span class="token literal-property property">width</span><span class="token operator">:</span> 100vw<span class="token punctuation">;</span>

<span class="token punctuation">&#125;</span>

<span class="token punctuation">.</span>reel<span class="token punctuation">&#123;</span>
    <span class="token literal-property property">display</span><span class="token operator">:</span> block<span class="token punctuation">;</span>
    <span class="token literal-property property">transition</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">.</span>3s<span class="token punctuation">;</span>
    min<span class="token operator">-</span>width<span class="token operator">:</span> 800px<span class="token punctuation">;</span>
    min<span class="token operator">-</span>height<span class="token operator">:</span> 400px<span class="token punctuation">;</span>
    max<span class="token operator">-</span>width<span class="token operator">:</span> 800px<span class="token punctuation">;</span>
    max<span class="token operator">-</span>height<span class="token operator">:</span> 400px<span class="token punctuation">;</span>
    <span class="token literal-property property">border</span><span class="token operator">:</span> solid 7px<span class="token punctuation">;</span>
    <span class="token literal-property property">margin</span><span class="token operator">:</span> auto<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span></code>`,I,j,as,K,x,ns,N,w,ps,U,_,ts,A,E,os,D,P,es,J,R,ls,O,H,rs,Q,V;return{c(){u=t("h1"),W=c("Erik Rohlin"),S=e(),d=t("h2"),X=c("Framsteg:"),T=e(),b=t("p"),Y=c(`Gjort det lätt at ta sig runt, laggt till möhjlighet till “uttag”, förbättrat bildspelet, har stylat sifan så att jag själv är nöjd,
fixat snabb tillgång till spelhjälp och självtest vilket finns på alla spelsidor.`),M=e(),C=t("hr"),F=e(),y=t("p"),Z=c(`La till knappar och länka dem till sidor som är en del av det stora projectet för att göra det lätt att komma åt det man vill
på sidan.
Till “uttag” gjorde jag endast en kopia av vad jag gjorde för att fix “insättning”.
För att förbättra bildspelet ändrade jag bilderna till att vara mer passande och fixade storleken.
Css har jag även fixat som jag är relativt nöjd med där ingår en del googling för att hitta hur och vad man ska göra för att få önskat resultat.
För tillgång till spelhjälp har jag fixat bilder med länkar till sidorna spelpaus och självtest.`),L=e(),v=t("h1"),$=c("Reflektion"),B=e(),h=t("p"),ss=c(`Största utmaningen var defenitivt att få css upp till en duglig nivå medan det lättaste var att fixa knapar bilder och
annat som jag har gjort flera gånger tidigare.`),G=e(),f=t("pre"),q=e(),m=t("pre"),z=e(),g=t("pre"),I=e(),j=t("h1"),as=c("Cecklista"),K=e(),x=t("p"),ns=c("förklarande text vid dem andra delarna av sidan + “möjlighet till uttag” ✅"),N=e(),w=t("p"),ps=c("lätt att ta sig runt ✅"),U=e(),_=t("p"),ts=c("spelhjälp och självtest ✅"),A=e(),E=t("p"),os=c("bildspel ✅"),D=e(),P=t("p"),es=c("möjlighet till “insätting” ✅"),J=e(),R=t("p"),ls=c("hyffsad css ✅"),O=e(),H=t("p"),rs=c("egna casinospel ❌"),Q=e(),V=t("hr"),this.h()},l(s){u=o(s,"H1",{});var n=r(u);W=k(n,"Erik Rohlin"),n.forEach(a),S=l(s),d=o(s,"H2",{});var is=r(d);X=k(is,"Framsteg:"),is.forEach(a),T=l(s),b=o(s,"P",{});var us=r(b);Y=k(us,`Gjort det lätt at ta sig runt, laggt till möhjlighet till “uttag”, förbättrat bildspelet, har stylat sifan så att jag själv är nöjd,
fixat snabb tillgång till spelhjälp och självtest vilket finns på alla spelsidor.`),us.forEach(a),M=l(s),C=o(s,"HR",{}),F=l(s),y=o(s,"P",{});var fs=r(y);Z=k(fs,`La till knappar och länka dem till sidor som är en del av det stora projectet för att göra det lätt att komma åt det man vill
på sidan.
Till “uttag” gjorde jag endast en kopia av vad jag gjorde för att fix “insättning”.
För att förbättra bildspelet ändrade jag bilderna till att vara mer passande och fixade storleken.
Css har jag även fixat som jag är relativt nöjd med där ingår en del googling för att hitta hur och vad man ska göra för att få önskat resultat.
För tillgång till spelhjälp har jag fixat bilder med länkar till sidorna spelpaus och självtest.`),fs.forEach(a),L=l(s),v=o(s,"H1",{});var ms=r(v);$=k(ms,"Reflektion"),ms.forEach(a),B=l(s),h=o(s,"P",{});var gs=r(h);ss=k(gs,`Största utmaningen var defenitivt att få css upp till en duglig nivå medan det lättaste var att fixa knapar bilder och
annat som jag har gjort flera gånger tidigare.`),gs.forEach(a),G=l(s),f=o(s,"PRE",{class:!0});var Hs=r(f);Hs.forEach(a),q=l(s),m=o(s,"PRE",{class:!0});var Ss=r(m);Ss.forEach(a),z=l(s),g=o(s,"PRE",{class:!0});var Ts=r(g);Ts.forEach(a),I=l(s),j=o(s,"H1",{});var ds=r(j);as=k(ds,"Cecklista"),ds.forEach(a),K=l(s),x=o(s,"P",{});var bs=r(x);ns=k(bs,"förklarande text vid dem andra delarna av sidan + “möjlighet till uttag” ✅"),bs.forEach(a),N=l(s),w=o(s,"P",{});var ys=r(w);ps=k(ys,"lätt att ta sig runt ✅"),ys.forEach(a),U=l(s),_=o(s,"P",{});var vs=r(_);ts=k(vs,"spelhjälp och självtest ✅"),vs.forEach(a),A=l(s),E=o(s,"P",{});var hs=r(E);os=k(hs,"bildspel ✅"),hs.forEach(a),D=l(s),P=o(s,"P",{});var js=r(P);es=k(js,"möjlighet till “insätting” ✅"),js.forEach(a),J=l(s),R=o(s,"P",{});var xs=r(R);ls=k(xs,"hyffsad css ✅"),xs.forEach(a),O=l(s),H=o(s,"P",{});var ws=r(H);rs=k(ws,"egna casinospel ❌"),ws.forEach(a),Q=l(s),V=o(s,"HR",{}),this.h()},h(){cs(f,"class","language-js"),cs(m,"class","language-js"),cs(g,"class","language-js")},m(s,n){p(s,u,n),i(u,W),p(s,S,n),p(s,d,n),i(d,X),p(s,T,n),p(s,b,n),i(b,Y),p(s,M,n),p(s,C,n),p(s,F,n),p(s,y,n),i(y,Z),p(s,L,n),p(s,v,n),i(v,$),p(s,B,n),p(s,h,n),i(h,ss),p(s,G,n),p(s,f,n),f.innerHTML=Es,p(s,q,n),p(s,m,n),m.innerHTML=Ps,p(s,z,n),p(s,g,n),g.innerHTML=Rs,p(s,I,n),p(s,j,n),i(j,as),p(s,K,n),p(s,x,n),i(x,ns),p(s,N,n),p(s,w,n),i(w,ps),p(s,U,n),p(s,_,n),i(_,ts),p(s,A,n),p(s,E,n),i(E,os),p(s,D,n),p(s,P,n),i(P,es),p(s,J,n),p(s,R,n),i(R,ls),p(s,O,n),p(s,H,n),i(H,rs),p(s,Q,n),p(s,V,n)},p:ks,i:ks,o:ks,d(s){s&&a(u),s&&a(S),s&&a(d),s&&a(T),s&&a(b),s&&a(M),s&&a(C),s&&a(F),s&&a(y),s&&a(L),s&&a(v),s&&a(B),s&&a(h),s&&a(G),s&&a(f),s&&a(q),s&&a(m),s&&a(z),s&&a(g),s&&a(I),s&&a(j),s&&a(K),s&&a(x),s&&a(N),s&&a(w),s&&a(U),s&&a(_),s&&a(A),s&&a(E),s&&a(D),s&&a(P),s&&a(J),s&&a(R),s&&a(O),s&&a(H),s&&a(Q),s&&a(V)}}}const Gs={title:"Blog 3",date:"2023-5-29"};class qs extends Ms{constructor(u){super(),Cs(this,u,null,Ls,Fs,{})}}export{qs as default,Gs as metadata};
