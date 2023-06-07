import{Y as O,Z as w,_ as j}from"./index-2473db45.js";function _(n){const e=n-1;return e*e*e+1}function M(n,e){var a={};for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&e.indexOf(t)<0&&(a[t]=n[t]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,t=Object.getOwnPropertySymbols(n);r<t.length;r++)e.indexOf(t[r])<0&&Object.prototype.propertyIsEnumerable.call(n,t[r])&&(a[t[r]]=n[t[r]]);return a}function q(n,{delay:e=0,duration:a=400,easing:t=_,x:r=0,y:m=0,opacity:i=0}={}){const s=getComputedStyle(n),c=+s.opacity,y=s.transform==="none"?"":s.transform,f=c*(1-i),[o,l]=O(r),[d,p]=O(m);return{delay:e,duration:a,easing:t,css:(g,$)=>`
			transform: ${y} translate(${(1-g)*o}${l}, ${(1-g)*d}${p});
			opacity: ${c-f*$}`}}function B(n,{delay:e=0,duration:a=400,easing:t=_,start:r=0,opacity:m=0}={}){const i=getComputedStyle(n),s=+i.opacity,c=i.transform==="none"?"":i.transform,y=1-r,f=s*(1-m);return{delay:e,duration:a,easing:t,css:(o,l)=>`
			transform: ${c} scale(${1-y*l});
			opacity: ${s-f*l}
		`}}function R(n){var{fallback:e}=n,a=M(n,["fallback"]);const t=new Map,r=new Map;function m(s,c,y){const{delay:f=0,duration:o=u=>Math.sqrt(u)*30,easing:l=_}=w(w({},a),y),d=s.getBoundingClientRect(),p=c.getBoundingClientRect(),g=d.left-p.left,$=d.top-p.top,x=d.width/p.width,k=d.height/p.height,v=Math.sqrt(g*g+$*$),h=getComputedStyle(c),C=h.transform==="none"?"":h.transform,S=+h.opacity;return{delay:f,duration:j(o)?o(v):o,easing:l,css:(u,b)=>`
				opacity: ${u*S};
				transform-origin: top left;
				transform: ${C} translate(${b*g}px,${b*$}px) scale(${u+(1-u)*x}, ${u+(1-u)*k});
			`}}function i(s,c,y){return(f,o)=>(s.set(o.key,f),()=>{if(c.has(o.key)){const l=c.get(o.key);return c.delete(o.key),m(l,f,o)}return s.delete(o.key),e&&e(f,o,y)})}return[i(r,t,!1),i(t,r,!0)]}export{R as a,_ as c,q as f,B as s};
