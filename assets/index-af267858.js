import{u as f,t as E,x as P,r as d,j as r,L as ue,e as q}from"./index-b45f4a8d.js";import{E as me}from"./ExercisesSubcategoriesList-bd49be83.js";import{S as O,s as K}from"./SvgCustom-8ab7685d.js";import{C as he,B as $,a as xe,T as fe,b as ge,c as ye,d as be,E as je,e as U,f as L,g as I,M as _,S as we,W as Ee,h as ve,I as ee,L as ke,i as Ae,j as Ce,k as Te,l as We,N as Se,m as Be,n as Me,o as Pe,p as Ne,q as F,r as V}from"./BasicModalWindow-0ea638d9.js";import{d as Ue}from"./dayjs.min-386ac3da.js";import"./motion-650b1511.js";import"./zoom-2952b212.js";const Le=f.div`
  margin: 0 auto;

  @media screen and (max-width: 767px) {
    max-width: 335px;
  }

  @media screen and (min-width: 768px) {
    max-width: 704px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1249px;
  }
`,Ie=f.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`,Oe=f.p`
  color: ${E.colors.textWhite40};
  font-size: 10px;
  line-height: 14px;
  margin-bottom: 4px;
`,De=f.div`
  display: flex;
  justify-content: center;
  transform: rotate(180deg) scaleX(-1);
`,te=f.span`
  display: flex;
  justify-content: center;
  text-align: center;
  color: ${E.colors.white};
  font-size: 16px;
  line-height: 24px;
  transform: rotate(180deg) scaleX(-1);
`,re=f.div`
  margin-top: 18px;
  height: 24px;
  width: 24px;

  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${E.colors.primary};
  border-radius: 4px;
`;var se=typeof window>"u"?d.useEffect:d.useLayoutEffect,Re=({isPlaying:e,duration:t,startAt:s=0,updateInterval:o=0,onComplete:n,onUpdate:i})=>{let[a,l]=d.useState(s),c=d.useRef(0),p=d.useRef(s),h=d.useRef(s*-1e3),m=d.useRef(null),u=d.useRef(null),x=d.useRef(null),g=w=>{let y=w/1e3;if(u.current===null){u.current=y,m.current=requestAnimationFrame(g);return}let j=y-u.current,b=c.current+j;u.current=y,c.current=b;let k=p.current+(o===0?b:(b/o|0)*o),M=p.current+b,G=typeof t=="number"&&M>=t;l(G?t:k),G||(m.current=requestAnimationFrame(g))},B=()=>{m.current&&cancelAnimationFrame(m.current),x.current&&clearTimeout(x.current),u.current=null},T=d.useCallback(w=>{B(),c.current=0;let y=typeof w=="number"?w:s;p.current=y,l(y),e&&(m.current=requestAnimationFrame(g))},[e,s]);return se(()=>{if(i==null||i(a),t&&a>=t){h.current+=t*1e3;let{shouldRepeat:w=!1,delay:y=0,newStartAt:j}=(n==null?void 0:n(h.current/1e3))||{};w&&(x.current=setTimeout(()=>T(j),y*1e3))}},[a,t]),se(()=>(e&&(m.current=requestAnimationFrame(g)),B),[e,t,o]),{elapsedTime:a,reset:T}},Xe=(e,t,s)=>{let o=e/2,n=t/2,i=o-n,a=2*i,l=s==="clockwise"?"1,0":"0,1",c=2*Math.PI*i;return{path:`m ${o},${n} a ${i},${i} 0 ${l} 0,${a} a ${i},${i} 0 ${l} 0,-${a}`,pathLength:c}},ie=(e,t)=>e===0||e===t?0:typeof t=="number"?e-t:0,Fe=e=>({position:"relative",width:e,height:e}),Ve={display:"flex",justifyContent:"center",alignItems:"center",position:"absolute",left:0,top:0,width:"100%",height:"100%"},le=(e,t,s,o,n)=>{if(o===0)return t;let i=(n?o-e:e)/o;return t+s*i},oe=e=>{var t,s;return(s=(t=e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,(o,n,i,a)=>`#${n}${n}${i}${i}${a}${a}`).substring(1).match(/.{2}/g))==null?void 0:t.map(o=>parseInt(o,16)))!=null?s:[]},Je=(e,t)=>{var s;let{colors:o,colorsTime:n,isSmoothColorTransition:i=!0}=e;if(typeof o=="string")return o;let a=(s=n==null?void 0:n.findIndex((u,x)=>u>=t&&t>=n[x+1]))!=null?s:-1;if(!n||a===-1)return o[0];if(!i)return o[a];let l=n[a]-t,c=n[a]-n[a+1],p=oe(o[a]),h=oe(o[a+1]),m=!!e.isGrowing;return`rgb(${p.map((u,x)=>le(l,u,h[x]-u,c,m)|0).join(",")})`},ze=e=>{let{duration:t,initialRemainingTime:s,updateInterval:o,size:n=180,strokeWidth:i=12,trailStrokeWidth:a,isPlaying:l=!1,isGrowing:c=!1,rotation:p="clockwise",onComplete:h,onUpdate:m}=e,u=d.useRef(),x=Math.max(i,a??0),{path:g,pathLength:B}=Xe(n,x,p),{elapsedTime:T}=Re({isPlaying:l,duration:t,startAt:ie(t,s),updateInterval:o,onUpdate:typeof m=="function"?y=>{let j=Math.ceil(t-y);j!==u.current&&(u.current=j,m(j))}:void 0,onComplete:typeof h=="function"?y=>{var j;let{shouldRepeat:b,delay:k,newInitialRemainingTime:M}=(j=h(y))!=null?j:{};if(b)return{shouldRepeat:b,delay:k,newStartAt:ie(t,M)}}:void 0}),w=t-T;return{elapsedTime:T,path:g,pathLength:B,remainingTime:Math.ceil(w),rotation:p,size:n,stroke:Je(e,w),strokeDashoffset:le(T,0,B,t,c),strokeWidth:i}},ce=e=>{let{children:t,strokeLinecap:s,trailColor:o,trailStrokeWidth:n}=e,{path:i,pathLength:a,stroke:l,strokeDashoffset:c,remainingTime:p,elapsedTime:h,size:m,strokeWidth:u}=ze(e);return P.createElement("div",{style:Fe(m)},P.createElement("svg",{viewBox:`0 0 ${m} ${m}`,width:m,height:m,xmlns:"http://www.w3.org/2000/svg"},P.createElement("path",{d:i,fill:"none",stroke:o??"#d9d9d9",strokeWidth:n??u}),P.createElement("path",{d:i,fill:"none",stroke:l,strokeLinecap:s??"round",strokeWidth:u,strokeDasharray:a,strokeDashoffset:c})),typeof t=="function"&&P.createElement("div",{style:Ve},t({remainingTime:p,elapsedTime:h,color:l})))};ce.displayName="CountdownCircleTimer";//! Стейт в якому будуть дані про кількість калорій і час з одної вправи exercises/params
//! Стейт даних для формування запиту на бекенд /diary/exercise
const qe={isSmoothColorTransition:!0,trailColor:E.colors.graphite,isGrowing:!1,rotation:"clockwise",strokeLinecap:"round",strokeWidth:4,trailStrokeWidth:4,updateInterval:0,size:124,isPlaying:!1,colors:E.colors.primary},Ke=({time:e,getDataFromTimer:t})=>{const[s,o]=d.useState(!1),[n,i]=d.useState(!1),a=()=>{o(!0)},l=()=>{o(!1)};return d.useEffect(()=>{const c=p=>{n||(p.keyCode===32&&!s?a():l())};return document.addEventListener("keydown",c),()=>{document.removeEventListener("keydown",c)}},[s,n]),r.jsxs(Ie,{children:[r.jsx(Oe,{children:"Time"}),r.jsx(De,{children:r.jsx(ce,{...qe,duration:e*60,initialRemainingTime:e*60,isPlaying:s,onUpdate:c=>{c===0&&i(!0),t(c)},onComplete:()=>({shouldRepeat:!1,delay:1}),children:({remainingTime:c})=>Ze(c)})}),s===!1||n===!0?r.jsx(re,{type:"button",onClick:a,children:n!==!0?r.jsx(O,{icon:"icon-play",size:"14",color:E.colors.white,stroke:E.colors.white}):r.jsx(O,{icon:"icon-done",size:"14",color:E.colors.white,stroke:E.colors.white})}):r.jsx(re,{type:"button",onClick:l,children:r.jsx(O,{icon:"icon-pause",size:"14",color:E.colors.white,stroke:E.colors.white})})]})},Ze=e=>{if(e===0)return r.jsx(te,{children:"Training completed!"});const t=Math.floor(e/60),s=e%60;return r.jsxs(te,{children:[`0${t}`,":",s<10?`0${s}`:s]})};let Ye={data:""},He=e=>typeof window=="object"?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||Ye,Qe=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,Ge=/\/\*[^]*?\*\/|  +/g,ne=/\n+/g,W=(e,t)=>{let s="",o="",n="";for(let i in e){let a=e[i];i[0]=="@"?i[1]=="i"?s=i+" "+a+";":o+=i[1]=="f"?W(a,i):i+"{"+W(a,i[1]=="k"?"":t)+"}":typeof a=="object"?o+=W(a,t?t.replace(/([^,])+/g,l=>i.replace(/(^:.*)|([^,])+/g,c=>/&/.test(c)?c.replace(/&/g,l):l?l+" "+c:c)):i):a!=null&&(i=/^--/.test(i)?i:i.replace(/[A-Z]/g,"-$&").toLowerCase(),n+=W.p?W.p(i,a):i+":"+a+";")}return s+(t&&n?t+"{"+n+"}":n)+o},A={},de=e=>{if(typeof e=="object"){let t="";for(let s in e)t+=s+de(e[s]);return t}return e},$e=(e,t,s,o,n)=>{let i=de(e),a=A[i]||(A[i]=(c=>{let p=0,h=11;for(;p<c.length;)h=101*h+c.charCodeAt(p++)>>>0;return"go"+h})(i));if(!A[a]){let c=i!==e?e:(p=>{let h,m,u=[{}];for(;h=Qe.exec(p.replace(Ge,""));)h[4]?u.shift():h[3]?(m=h[3].replace(ne," ").trim(),u.unshift(u[0][m]=u[0][m]||{})):u[0][h[1]]=h[2].replace(ne," ").trim();return u[0]})(e);A[a]=W(n?{["@keyframes "+a]:c}:c,s?"":"."+a)}let l=s&&A.g?A.g:null;return s&&(A.g=A[a]),((c,p,h,m)=>{m?p.data=p.data.replace(m,c):p.data.indexOf(c)===-1&&(p.data=h?c+p.data:p.data+c)})(A[a],t,o,l),a},_e=(e,t,s)=>e.reduce((o,n,i)=>{let a=t[i];if(a&&a.call){let l=a(s),c=l&&l.props&&l.props.className||/^go/.test(l)&&l;a=c?"."+c:l&&typeof l=="object"?l.props?"":W(l,""):l===!1?"":l}return o+n+(a??"")},"");function R(e){let t=this||{},s=e.call?e(t.p):e;return $e(s.unshift?s.raw?_e(s,[].slice.call(arguments,1),t.p):s.reduce((o,n)=>Object.assign(o,n&&n.call?n(t.p):n),{}):s,He(t.target),t.g,t.o,t.k)}let pe,Z,Y;R.bind({g:1});let C=R.bind({k:1});function et(e,t,s,o){W.p=t,pe=e,Z=s,Y=o}function S(e,t){let s=this||{};return function(){let o=arguments;function n(i,a){let l=Object.assign({},i),c=l.className||n.className;s.p=Object.assign({theme:Z&&Z()},l),s.o=/ *go\d+/.test(c),l.className=R.apply(s,o)+(c?" "+c:""),t&&(l.ref=a);let p=e;return e[0]&&(p=l.as||e,delete l.as),Y&&p[0]&&Y(l),pe(p,l)}return t?t(n):n}}var tt=e=>typeof e=="function",H=(e,t)=>tt(e)?e(t):e,rt=(()=>{let e=0;return()=>(++e).toString()})(),st=(()=>{let e;return()=>{if(e===void 0&&typeof window<"u"){let t=matchMedia("(prefers-reduced-motion: reduce)");e=!t||t.matches}return e}})(),it=20,D=new Map,ot=1e3,ae=e=>{if(D.has(e))return;let t=setTimeout(()=>{D.delete(e),X({type:4,toastId:e})},ot);D.set(e,t)},nt=e=>{let t=D.get(e);t&&clearTimeout(t)},Q=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,it)};case 1:return t.toast.id&&nt(t.toast.id),{...e,toasts:e.toasts.map(i=>i.id===t.toast.id?{...i,...t.toast}:i)};case 2:let{toast:s}=t;return e.toasts.find(i=>i.id===s.id)?Q(e,{type:1,toast:s}):Q(e,{type:0,toast:s});case 3:let{toastId:o}=t;return o?ae(o):e.toasts.forEach(i=>{ae(i.id)}),{...e,toasts:e.toasts.map(i=>i.id===o||o===void 0?{...i,visible:!1}:i)};case 4:return t.toastId===void 0?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(i=>i.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let n=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(i=>({...i,pauseDuration:i.pauseDuration+n}))}}},at=[],J={toasts:[],pausedAt:void 0},X=e=>{J=Q(J,e),at.forEach(t=>{t(J)})},lt=(e,t="blank",s)=>({createdAt:Date.now(),visible:!0,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...s,id:(s==null?void 0:s.id)||rt()}),N=e=>(t,s)=>{let o=lt(t,e,s);return X({type:2,toast:o}),o.id},v=(e,t)=>N("blank")(e,t);v.error=N("error");v.success=N("success");v.loading=N("loading");v.custom=N("custom");v.dismiss=e=>{X({type:3,toastId:e})};v.remove=e=>X({type:4,toastId:e});v.promise=(e,t,s)=>{let o=v.loading(t.loading,{...s,...s==null?void 0:s.loading});return e.then(n=>(v.success(H(t.success,n),{id:o,...s,...s==null?void 0:s.success}),n)).catch(n=>{v.error(H(t.error,n),{id:o,...s,...s==null?void 0:s.error})}),e};var ct=C`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,dt=C`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,pt=C`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,ut=S("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${ct} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${dt} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${pt} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,mt=C`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,ht=S("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${mt} 1s linear infinite;
`,xt=C`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,ft=C`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,gt=S("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${xt} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${ft} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,yt=S("div")`
  position: absolute;
`,bt=S("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,jt=C`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,wt=S("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${jt} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,Et=({toast:e})=>{let{icon:t,type:s,iconTheme:o}=e;return t!==void 0?typeof t=="string"?d.createElement(wt,null,t):t:s==="blank"?null:d.createElement(bt,null,d.createElement(ht,{...o}),s!=="loading"&&d.createElement(yt,null,s==="error"?d.createElement(ut,{...o}):d.createElement(gt,{...o})))},vt=e=>`
0% {transform: translate3d(0,${e*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,kt=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${e*-150}%,-1px) scale(.6); opacity:0;}
`,At="0%{opacity:0;} 100%{opacity:1;}",Ct="0%{opacity:1;} 100%{opacity:0;}",Tt=S("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,Wt=S("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,St=(e,t)=>{let s=e.includes("top")?1:-1,[o,n]=st()?[At,Ct]:[vt(s),kt(s)];return{animation:t?`${C(o)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${C(n)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}};d.memo(({toast:e,position:t,style:s,children:o})=>{let n=e.height?St(e.position||t||"top-center",e.visible):{opacity:0},i=d.createElement(Et,{toast:e}),a=d.createElement(Wt,{...e.ariaProps},H(e.message,e));return d.createElement(Tt,{className:e.className,style:{...n,...s,...e.style}},typeof o=="function"?o({icon:i,message:a}):d.createElement(d.Fragment,null,i,a))});et(d.createElement);R`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`;var Bt=v;const Mt="data:image/png;base64,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",Pt="DD/MM/YYYY",Nt=({subcategory:e})=>{const[t,s]=d.useState(!1),[o,n]=d.useState(!1),[i,a]=d.useState(0),[l,c]=d.useState(0),[p,h]=d.useState(0),[m,u]=d.useState(0);d.useEffect(()=>{a(e.time),c(e.burnedCalories)},[e.time,e.burnedCalories]),d.useEffect(()=>{t===!0&&(a(e.time),c(e.burnedCalories))},[t,e.time,e.burnedCalories]),d.useEffect(()=>{(()=>{u(Math.round(l/i*p))})()});const x=async b=>{try{await q.post("/diary/exercise",b)}catch(k){console.error("Error fetching exercises:",k)}},g=async()=>{const{_id:b}=e,k=Ue(Date.now()).format(Pt),M={exerciseId:b,date:k,time:p,burnedCalories:m};if(p<1||m<1){Bt.error("You should work out for more than one minute!");return}await x(M),w(),y()},B=b=>{const k=Number(i-b/60);h(k)};function T(){s(!0)}function w(){s(!1)}function y(){n(!0)}function j(){n(!1)}return r.jsxs(he,{children:[t&&r.jsx($,{isOpen:t,onRequestClose:w,children:r.jsxs(xe,{children:[r.jsxs(fe,{children:[r.jsx(ge,{src:e.gifUrl,alt:e.name}),r.jsx(Ke,{time:i,getDataFromTimer:B}),r.jsxs(ye,{children:["Burned calories: ",r.jsx("span",{children:m})]})]}),r.jsxs(be,{children:[r.jsxs(je,{children:[r.jsxs(U,{children:[r.jsx(L,{children:"Name"}),r.jsx(I,{children:e.name})]}),r.jsxs(U,{children:[r.jsx(L,{children:"Target"}),r.jsx(I,{children:e.target})]}),r.jsxs(U,{children:[r.jsx(L,{children:"Body Part"}),r.jsx(I,{children:e.bodyPart})]}),r.jsxs(U,{children:[r.jsx(L,{children:"Equipment"}),r.jsx(I,{children:e.equipment})]})]}),r.jsx(_,{onClick:g,children:"Add to diary"})]})]})}),o&&r.jsx($,{isOpen:o,onRequestClose:j,children:r.jsxs(we,{children:[r.jsx(Ee,{src:Mt,alt:"Well done"}),r.jsx(ve,{children:"Well done"}),r.jsxs(ee,{style:{marginBottom:"4px"},children:["Your time: ",r.jsx("span",{children:" 3 minutes"})]}),r.jsxs(ee,{children:["Burned calories: ",r.jsx("span",{children:"150"})]}),r.jsx(_,{onClick:j,children:"Next product"}),r.jsxs(ke,{children:[r.jsx(ue,{style:{color:"inherit"},to:"/diary",children:"To the diary"}),r.jsx(O,{icon:"icon-next",size:"16",color:E.colors.textWhite30})]})]})}),r.jsxs(Ae,{children:[r.jsx(Ce,{children:"WORKOUT"}),r.jsxs(Te,{onClick:T,children:["Start",r.jsx(We,{width:"16",height:"16",children:r.jsx("use",{href:K+"#icon-next"})})]})]}),r.jsxs(Se,{children:[r.jsx(Be,{children:r.jsx(Me,{width:"14",height:"16",children:r.jsx("use",{href:K+"#icon-running"})})}),r.jsx(Pe,{children:e.name})]}),r.jsxs(Ne,{children:[r.jsxs(F,{children:["Burned calories: ",r.jsx(V,{children:e.burnedCalories})]}),r.jsxs(F,{children:["Body part: ",r.jsx(V,{children:e.bodyPart})]}),r.jsxs(F,{children:["Target: ",r.jsx(V,{children:e.target})]})]})]})},Ut=f.li`
  display: block;
  padding-bottom: 16px;

  @media screen and (min-width: 768px) {
    padding-bottom: 16px;
  }

  @media screen and (min-width: 1440px) {
    padding-bottom: 16px;
  }
`,Lt=f.div`
  width: 335px;
  height: 206px;
  text-align: center;
  background-size: cover;
  background-position: center;
  background-color: #040404;
  border: 1px solid rgba(239, 237, 232, 0.2);
  border-radius: 12px;

  @media screen and (min-width: 768px) {
    width: 215px;
  }

  @media screen and (min-width: 1440px) {
    width: 237px;
  }
`,It=f.p`
  font-weight: 400;
  font-size: 20px;
  line-height: 1.2;
  color: white;

  margin-top: 81px;
  margin-bottom: 0;
`,Ot=f.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
  color: grey;
  margin-top: 2px;
`,Dt=({subcategory:e,onSelect:t})=>r.jsx(Ut,{onClick:()=>t(e.filter,e.name.toLowerCase()),children:r.jsxs(Lt,{style:{backgroundImage:`linear-gradient(rgba(4, 4, 4, 0.5), rgba(4, 4, 4, 0.5)), url(${e.imgURL})`},children:[r.jsx(It,{children:e.name}),r.jsx(Ot,{children:e.filter})]})}),Rt=f.ul`
  list-style-type: none;
  display: flex;
  gap: 20px;
  margin-bottom: 40px;
  padding-top: 20px;

  @media screen and (min-width: 768px) {
    margin-bottom: 0;
    padding-top: 0;
  }

  li {
    position: relative;
    cursor: pointer;
    transition:
      color 0.3s ease,
      border-bottom-color 0.3s ease;
    &:hover,
    &:focus {
      color: orange;
    }
    &::before {
      content: '';
      position: absolute;
      left: 0;
      bottom: -3px;
      width: 100%;
      height: 3px;
      border-radius: 3px;
      border-bottom: 3px solid transparent;
      transition: border-bottom-color 0.3s ease;
    }
    &:hover::before,
    &:focus::before {
      border-bottom-color: orange;
    }
  }
`,z=f.a`
  font-weight: 400;
  font-size: 14px;
  line-height: 1.29;
  color: grey;
  cursor: pointer;
  &:hover {
    color: orange;
  }
`,Xt=f.div`
  justify-content: space-between;
  gap: 32px;
  margin-bottom: 64px;
  margin-top: 64px;

  @media screen and (min-width: 768px) {
    display: flex;
  }
`,Ft=f.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  margin-top: 23px;
  @media screen and (min-width: 1440px) {
    width: 842px;
  }
`,Vt=f.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  margin-top: 20px;
`,Jt=f.button`
  display: flex;
  gap: 8px;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.29;
  color: rgba(239, 237, 232, 0.4);
  background: transparent;
  border: none;
  &:hover {
    color: orange;
  }
`,zt=f.h1`
  font-weight: 700;
  font-size: 24px;
  line-height: 1.17;
  color: white;
  margin: 0;
  text-transform: capitalize;
  margin-right: 20px;
`,qt=f.svg`
  transform: rotate(180deg);
  stroke: grey;
  &:hover {
    color: orange;
  }
`,Kt=f.div`
  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    border-radius: 12px;
    background: rgba(239, 237, 232, 0.1);
  }

  &::-webkit-scrollbar-thumb {
    background: linear-gradient(
      90deg,
      #ef8964 0%,
      #ef8964 30%,
      #ef8964 50%,
      #ef8964 70%,
      #ef8964 100%
    );
    border-radius: 12px;
  }

  @media (min-width: 768px) {
    overflow-y: auto;
    height: 507px;
    gap: 32px 16px;
  }
  @media (min-width: 1440px) {
    width: 850px;
  }
`,Zt={"Body parts":"bodyPart",Equipment:"equipment",Muscles:"target"},Yt=()=>{const[e,t]=d.useState([]),[s,o]=d.useState([]),[n,i]=d.useState(null),[a,l]=d.useState("Exercises"),c=n!==null,p=async u=>{i(null);try{const x=await q.get(`/exercises?filter=${u}`);t(x.data[u]),l("Exercises")}catch(x){console.error("Error fetching exercises:",x)}},h=async(u,x)=>{try{const g=await q.get(`/exercises/params?key=${u}&value=${x}`);o(g.data.exercises),l(x)}catch(g){console.error("Error fetching exercises:",g)}};d.useEffect(()=>{p("bodyPart")},[]);const m=()=>c?r.jsxs("div",{children:[r.jsxs(Jt,{type:"button",onClick:()=>{document.title="React App",i(null),l("Exercises")},children:[r.jsx(qt,{width:"16",height:"16",children:r.jsx("use",{href:K+"#icon-next"})}),"BACK"]}),r.jsx(Kt,{style:{height:"500px"},children:r.jsx(Ft,{children:s.length>0?s.map(u=>r.jsx(Nt,{subcategory:u},u._id)):"Empty"})})]}):e&&e.length>0&&r.jsx(Vt,{children:e.map(u=>r.jsx(Dt,{subcategory:u,onSelect:async(x,g)=>{document.title=x,await h(Zt[x],g),i([x,g])}},u._id))});return r.jsxs("div",{children:[r.jsxs(Xt,{children:[r.jsx(zt,{children:a}),r.jsxs(Rt,{children:[r.jsx("li",{children:r.jsx(z,{onClick:()=>p("bodyPart"),children:"Body parts"})}),r.jsx("li",{children:r.jsx(z,{onClick:()=>p("equipment"),children:"Equipment"})}),r.jsx("li",{children:r.jsx(z,{onClick:()=>p("target"),children:"Muscles"})})]})]}),m()]})},Ht=()=>r.jsxs(Le,{children:[r.jsx(Yt,{}),r.jsx(me,{})]}),sr=Ht;export{sr as default};
