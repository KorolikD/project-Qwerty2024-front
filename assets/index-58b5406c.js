import{u as d,t as f,x as P,r as p,j as r,L as xe,e as q}from"./index-11e4c677.js";import{E as he}from"./ExercisesSubcategoriesList-51bbf176.js";import{S as I,s as K}from"./SvgCustom-9aa9d742.js";import{B as G}from"./BasicModalWindow-494eb114.js";import{d as me}from"./dayjs.min-36cbd0cc.js";import"./motion-d14b520c.js";import"./zoom-29e4431c.js";const ue=d.div`
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
`,fe=d.div`
  width: 335px;

  padding: 16px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  border-radius: 12px;
  background: rgba(239, 237, 232, 0.05);

  @media screen and (min-width: 1440px) {
    width: 405px;
  }
`,ge=d.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 33px;
`,we=d.p`
  font-weight: 700;
  font-size: 12px;
  color: white;
  padding: 5px 7px;
  border-radius: 4px;
  width: 73px;
  height: 24px;
  background-color: rgba(239, 237, 232, 0.05);
`,ye=d.button`
  display: flex;
  gap: 8px;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.29;
  color: #e6533c;
  background-color: transparent;
  border: none;
`,be=d.div`
  display: flex;
  gap: 16px;
  margin-bottom: 8px;
`,je=d.p`
  font-weight: 400;
  font-size: 20px;
  line-height: 1.2;
  color: white;
  &::first-letter {
    text-transform: uppercase;
  }
  display: block;
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`,ve=d.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 4px 16px;
`,X=d.li`
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
  color: rgba(239, 237, 232, 0.4);
`,F=d.span`
  color: white;
  text-transform: capitalize;
`,ke=d.svg`
  stroke: #e6533c;
`,Ee=d.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: #efa082;
`,Ae=d.svg`
  fill: #efede8;
`,Ce=d.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: flex-start;
  }
`,Te=d.div`
  width: 270px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
  }
`,We=d.div`
  @media screen and (min-width: 768px) {
    margin-left: 16px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: flex-end;
    width: 344px;
  }
`,Se=d.img`
  margin-bottom: 14px;
  border: 1px solid ${f.colors.modalBorder};
  border-radius: 12px;
`,Be=d.p`
  margin-top: 12px;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: ${f.colors.textWhite30};

  & span {
    color: ${f.colors.primary};
  }
`,Me=d.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 40px;
  min-width: 302px;

  @media screen and (min-width: 768px) {
    margin-top: 0;
    flex-direction: row;
    justify-content: space-between;

    min-width: 344px;
  }
`,U=d.li`
  width: 147px;

  border: 1px solid ${f.colors.modalBorder};
  border-radius: 12px;
  padding: 12px 18px;

  @media screen and (min-width: 768px) {
    width: 168px;
  }
`,z=d.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: ${f.colors.textWhite40};
`,L=d.p`
  font-weight: 700;
  font-size: 14px;
  line-height: 18px;

  color: ${f.colors.white};
  text-transform: capitalize;
`,_=d.button`
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  width: 150px;
  height: 42px;
  padding: 12px 12px;
  margin-top: 24px;

  background-color: ${f.colors.primary};

  font-weight: 500;
  font-size: 16px;
  line-height: 18px;
  color: ${f.colors.white};

  border-radius: 12px;

  @media screen and (min-width: 768px) {
    margin-top: 32px;

    height: 52px;
  }
`,Pe=d.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
`,Ne=d.img`
  width: 118px;

  @media screen and (min-width: 768px) {
    margin-top: 16px;
  }
`,Ue=d.p`
  margin: 27px 0 16px;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  color: ${f.colors.white};

  @media screen and (min-width: 768px) {
    margin: 32px 0 16px;
  }
`,ee=d.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: ${f.colors.textWhite30};

  & span {
    color: ${f.colors.primary};
  }
`,ze=d.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 16px;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: ${f.colors.textWhite30};
`,Le=d.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`,Ie=d.p`
  color: ${f.colors.textWhite40};
  font-size: 10px;
  line-height: 14px;
  margin-bottom: 4px;
`,Oe=d.div`
  display: flex;
  justify-content: center;
  transform: rotate(180deg) scaleX(-1);
`,te=d.span`
  display: flex;
  justify-content: center;
  text-align: center;
  color: ${f.colors.white};
  font-size: 16px;
  line-height: 24px;
  transform: rotate(180deg) scaleX(-1);
`,re=d.div`
  margin-top: 18px;
  height: 24px;
  width: 24px;

  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${f.colors.primary};
  border-radius: 4px;
`;var ie=typeof window>"u"?p.useEffect:p.useLayoutEffect,De=({isPlaying:e,duration:t,startAt:i=0,updateInterval:n=0,onComplete:s,onUpdate:o})=>{let[a,l]=p.useState(i),c=p.useRef(0),x=p.useRef(i),u=p.useRef(i*-1e3),m=p.useRef(null),h=p.useRef(null),g=p.useRef(null),w=v=>{let y=v/1e3;if(h.current===null){h.current=y,m.current=requestAnimationFrame(w);return}let j=y-h.current,b=c.current+j;h.current=y,c.current=b;let E=x.current+(n===0?b:(b/n|0)*n),M=x.current+b,$=typeof t=="number"&&M>=t;l($?t:E),$||(m.current=requestAnimationFrame(w))},B=()=>{m.current&&cancelAnimationFrame(m.current),g.current&&clearTimeout(g.current),h.current=null},T=p.useCallback(v=>{B(),c.current=0;let y=typeof v=="number"?v:i;x.current=y,l(y),e&&(m.current=requestAnimationFrame(w))},[e,i]);return ie(()=>{if(o==null||o(a),t&&a>=t){u.current+=t*1e3;let{shouldRepeat:v=!1,delay:y=0,newStartAt:j}=(s==null?void 0:s(u.current/1e3))||{};v&&(g.current=setTimeout(()=>T(j),y*1e3))}},[a,t]),ie(()=>(e&&(m.current=requestAnimationFrame(w)),B),[e,t,n]),{elapsedTime:a,reset:T}},Re=(e,t,i)=>{let n=e/2,s=t/2,o=n-s,a=2*o,l=i==="clockwise"?"1,0":"0,1",c=2*Math.PI*o;return{path:`m ${n},${s} a ${o},${o} 0 ${l} 0,${a} a ${o},${o} 0 ${l} 0,-${a}`,pathLength:c}},oe=(e,t)=>e===0||e===t?0:typeof t=="number"?e-t:0,Xe=e=>({position:"relative",width:e,height:e}),Fe={display:"flex",justifyContent:"center",alignItems:"center",position:"absolute",left:0,top:0,width:"100%",height:"100%"},le=(e,t,i,n,s)=>{if(n===0)return t;let o=(s?n-e:e)/n;return t+i*o},ne=e=>{var t,i;return(i=(t=e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,(n,s,o,a)=>`#${s}${s}${o}${o}${a}${a}`).substring(1).match(/.{2}/g))==null?void 0:t.map(n=>parseInt(n,16)))!=null?i:[]},Ve=(e,t)=>{var i;let{colors:n,colorsTime:s,isSmoothColorTransition:o=!0}=e;if(typeof n=="string")return n;let a=(i=s==null?void 0:s.findIndex((h,g)=>h>=t&&t>=s[g+1]))!=null?i:-1;if(!s||a===-1)return n[0];if(!o)return n[a];let l=s[a]-t,c=s[a]-s[a+1],x=ne(n[a]),u=ne(n[a+1]),m=!!e.isGrowing;return`rgb(${x.map((h,g)=>le(l,h,u[g]-h,c,m)|0).join(",")})`},Je=e=>{let{duration:t,initialRemainingTime:i,updateInterval:n,size:s=180,strokeWidth:o=12,trailStrokeWidth:a,isPlaying:l=!1,isGrowing:c=!1,rotation:x="clockwise",onComplete:u,onUpdate:m}=e,h=p.useRef(),g=Math.max(o,a??0),{path:w,pathLength:B}=Re(s,g,x),{elapsedTime:T}=De({isPlaying:l,duration:t,startAt:oe(t,i),updateInterval:n,onUpdate:typeof m=="function"?y=>{let j=Math.ceil(t-y);j!==h.current&&(h.current=j,m(j))}:void 0,onComplete:typeof u=="function"?y=>{var j;let{shouldRepeat:b,delay:E,newInitialRemainingTime:M}=(j=u(y))!=null?j:{};if(b)return{shouldRepeat:b,delay:E,newStartAt:oe(t,M)}}:void 0}),v=t-T;return{elapsedTime:T,path:w,pathLength:B,remainingTime:Math.ceil(v),rotation:x,size:s,stroke:Ve(e,v),strokeDashoffset:le(T,0,B,t,c),strokeWidth:o}},ce=e=>{let{children:t,strokeLinecap:i,trailColor:n,trailStrokeWidth:s}=e,{path:o,pathLength:a,stroke:l,strokeDashoffset:c,remainingTime:x,elapsedTime:u,size:m,strokeWidth:h}=Je(e);return P.createElement("div",{style:Xe(m)},P.createElement("svg",{viewBox:`0 0 ${m} ${m}`,width:m,height:m,xmlns:"http://www.w3.org/2000/svg"},P.createElement("path",{d:o,fill:"none",stroke:n??"#d9d9d9",strokeWidth:s??h}),P.createElement("path",{d:o,fill:"none",stroke:l,strokeLinecap:i??"round",strokeWidth:h,strokeDasharray:a,strokeDashoffset:c})),typeof t=="function"&&P.createElement("div",{style:Fe},t({remainingTime:x,elapsedTime:u,color:l})))};ce.displayName="CountdownCircleTimer";//! Стейт в якому будуть дані про кількість калорій і час з одної вправи exercises/params
//! Стейт даних для формування запиту на бекенд /diary/exercise
const qe={isSmoothColorTransition:!0,trailColor:f.colors.graphite,isGrowing:!1,rotation:"clockwise",strokeLinecap:"round",strokeWidth:4,trailStrokeWidth:4,updateInterval:0,size:124,isPlaying:!1,colors:f.colors.primary},Ke=({time:e,getDataFromTimer:t})=>{const[i,n]=p.useState(!1),[s,o]=p.useState(!1),a=()=>{n(!0)},l=()=>{n(!1)};return p.useEffect(()=>{const c=x=>{s||(x.keyCode===32&&!i?a():l())};return document.addEventListener("keydown",c),()=>{document.removeEventListener("keydown",c)}},[i,s]),r.jsxs(Le,{children:[r.jsx(Ie,{children:"Time"}),r.jsx(Oe,{children:r.jsx(ce,{...qe,duration:e*60,initialRemainingTime:e*60,isPlaying:i,onUpdate:c=>{c===0&&o(!0),t(c)},onComplete:()=>({shouldRepeat:!1,delay:1}),children:({remainingTime:c})=>Ze(c)})}),i===!1||s===!0?r.jsx(re,{type:"button",onClick:a,children:s!==!0?r.jsx(I,{icon:"icon-play",size:"14",color:f.colors.white,stroke:f.colors.white}):r.jsx(I,{icon:"icon-done",size:"14",color:f.colors.white,stroke:f.colors.white})}):r.jsx(re,{type:"button",onClick:l,children:r.jsx(I,{icon:"icon-pause",size:"14",color:f.colors.white,stroke:f.colors.white})})]})},Ze=e=>{if(e===0)return r.jsx(te,{children:"Training completed!"});const t=Math.floor(e/60),i=e%60;return r.jsxs(te,{children:[`0${t}`,":",i<10?`0${i}`:i]})};let Ye={data:""},He=e=>typeof window=="object"?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||Ye,Qe=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,$e=/\/\*[^]*?\*\/|  +/g,se=/\n+/g,W=(e,t)=>{let i="",n="",s="";for(let o in e){let a=e[o];o[0]=="@"?o[1]=="i"?i=o+" "+a+";":n+=o[1]=="f"?W(a,o):o+"{"+W(a,o[1]=="k"?"":t)+"}":typeof a=="object"?n+=W(a,t?t.replace(/([^,])+/g,l=>o.replace(/(^:.*)|([^,])+/g,c=>/&/.test(c)?c.replace(/&/g,l):l?l+" "+c:c)):o):a!=null&&(o=/^--/.test(o)?o:o.replace(/[A-Z]/g,"-$&").toLowerCase(),s+=W.p?W.p(o,a):o+":"+a+";")}return i+(t&&s?t+"{"+s+"}":s)+n},A={},de=e=>{if(typeof e=="object"){let t="";for(let i in e)t+=i+de(e[i]);return t}return e},Ge=(e,t,i,n,s)=>{let o=de(e),a=A[o]||(A[o]=(c=>{let x=0,u=11;for(;x<c.length;)u=101*u+c.charCodeAt(x++)>>>0;return"go"+u})(o));if(!A[a]){let c=o!==e?e:(x=>{let u,m,h=[{}];for(;u=Qe.exec(x.replace($e,""));)u[4]?h.shift():u[3]?(m=u[3].replace(se," ").trim(),h.unshift(h[0][m]=h[0][m]||{})):h[0][u[1]]=u[2].replace(se," ").trim();return h[0]})(e);A[a]=W(s?{["@keyframes "+a]:c}:c,i?"":"."+a)}let l=i&&A.g?A.g:null;return i&&(A.g=A[a]),((c,x,u,m)=>{m?x.data=x.data.replace(m,c):x.data.indexOf(c)===-1&&(x.data=u?c+x.data:x.data+c)})(A[a],t,n,l),a},_e=(e,t,i)=>e.reduce((n,s,o)=>{let a=t[o];if(a&&a.call){let l=a(i),c=l&&l.props&&l.props.className||/^go/.test(l)&&l;a=c?"."+c:l&&typeof l=="object"?l.props?"":W(l,""):l===!1?"":l}return n+s+(a??"")},"");function D(e){let t=this||{},i=e.call?e(t.p):e;return Ge(i.unshift?i.raw?_e(i,[].slice.call(arguments,1),t.p):i.reduce((n,s)=>Object.assign(n,s&&s.call?s(t.p):s),{}):i,He(t.target),t.g,t.o,t.k)}let pe,Z,Y;D.bind({g:1});let C=D.bind({k:1});function et(e,t,i,n){W.p=t,pe=e,Z=i,Y=n}function S(e,t){let i=this||{};return function(){let n=arguments;function s(o,a){let l=Object.assign({},o),c=l.className||s.className;i.p=Object.assign({theme:Z&&Z()},l),i.o=/ *go\d+/.test(c),l.className=D.apply(i,n)+(c?" "+c:""),t&&(l.ref=a);let x=e;return e[0]&&(x=l.as||e,delete l.as),Y&&x[0]&&Y(l),pe(x,l)}return t?t(s):s}}var tt=e=>typeof e=="function",H=(e,t)=>tt(e)?e(t):e,rt=(()=>{let e=0;return()=>(++e).toString()})(),it=(()=>{let e;return()=>{if(e===void 0&&typeof window<"u"){let t=matchMedia("(prefers-reduced-motion: reduce)");e=!t||t.matches}return e}})(),ot=20,O=new Map,nt=1e3,ae=e=>{if(O.has(e))return;let t=setTimeout(()=>{O.delete(e),R({type:4,toastId:e})},nt);O.set(e,t)},st=e=>{let t=O.get(e);t&&clearTimeout(t)},Q=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,ot)};case 1:return t.toast.id&&st(t.toast.id),{...e,toasts:e.toasts.map(o=>o.id===t.toast.id?{...o,...t.toast}:o)};case 2:let{toast:i}=t;return e.toasts.find(o=>o.id===i.id)?Q(e,{type:1,toast:i}):Q(e,{type:0,toast:i});case 3:let{toastId:n}=t;return n?ae(n):e.toasts.forEach(o=>{ae(o.id)}),{...e,toasts:e.toasts.map(o=>o.id===n||n===void 0?{...o,visible:!1}:o)};case 4:return t.toastId===void 0?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(o=>o.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let s=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(o=>({...o,pauseDuration:o.pauseDuration+s}))}}},at=[],V={toasts:[],pausedAt:void 0},R=e=>{V=Q(V,e),at.forEach(t=>{t(V)})},lt=(e,t="blank",i)=>({createdAt:Date.now(),visible:!0,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...i,id:(i==null?void 0:i.id)||rt()}),N=e=>(t,i)=>{let n=lt(t,e,i);return R({type:2,toast:n}),n.id},k=(e,t)=>N("blank")(e,t);k.error=N("error");k.success=N("success");k.loading=N("loading");k.custom=N("custom");k.dismiss=e=>{R({type:3,toastId:e})};k.remove=e=>R({type:4,toastId:e});k.promise=(e,t,i)=>{let n=k.loading(t.loading,{...i,...i==null?void 0:i.loading});return e.then(s=>(k.success(H(t.success,s),{id:n,...i,...i==null?void 0:i.success}),s)).catch(s=>{k.error(H(t.error,s),{id:n,...i,...i==null?void 0:i.error})}),e};var ct=C`
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
}`,xt=S("div")`
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
`,ht=C`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,mt=S("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${ht} 1s linear infinite;
`,ut=C`
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

  animation: ${ut} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
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
`,wt=S("div")`
  position: absolute;
`,yt=S("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,bt=C`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,jt=S("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${bt} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,vt=({toast:e})=>{let{icon:t,type:i,iconTheme:n}=e;return t!==void 0?typeof t=="string"?p.createElement(jt,null,t):t:i==="blank"?null:p.createElement(yt,null,p.createElement(mt,{...n}),i!=="loading"&&p.createElement(wt,null,i==="error"?p.createElement(xt,{...n}):p.createElement(gt,{...n})))},kt=e=>`
0% {transform: translate3d(0,${e*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,Et=e=>`
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
`,St=(e,t)=>{let i=e.includes("top")?1:-1,[n,s]=it()?[At,Ct]:[kt(i),Et(i)];return{animation:t?`${C(n)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${C(s)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}};p.memo(({toast:e,position:t,style:i,children:n})=>{let s=e.height?St(e.position||t||"top-center",e.visible):{opacity:0},o=p.createElement(vt,{toast:e}),a=p.createElement(Wt,{...e.ariaProps},H(e.message,e));return p.createElement(Tt,{className:e.className,style:{...s,...i,...e.style}},typeof n=="function"?n({icon:o,message:a}):p.createElement(p.Fragment,null,o,a))});et(p.createElement);D`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`;var Bt=k;const Mt="data:image/png;base64,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",Pt="DD/MM/YYYY",Nt=({subcategory:e})=>{const[t,i]=p.useState(!1),[n,s]=p.useState(!1),[o,a]=p.useState(0),[l,c]=p.useState(0),[x,u]=p.useState(0),[m,h]=p.useState(0);p.useEffect(()=>{a(e.time),c(e.burnedCalories)},[e.time,e.burnedCalories]),p.useEffect(()=>{t===!0&&(a(e.time),c(e.burnedCalories))},[t,e.time,e.burnedCalories]),p.useEffect(()=>{(()=>{h(Math.round(l/o*x))})()});const g=async b=>{try{await q.post("/diary/exercise",b)}catch(E){console.error("Error fetching exercises:",E)}},w=async()=>{const{_id:b}=e,E=me(Date.now()).format(Pt),M={exerciseId:b,date:E,time:x,burnedCalories:m};if(x<1||m<1){Bt.error("You should work out for more than one minute!");return}await g(M),v(),y()},B=b=>{const E=Number(o-b/60);u(E)};function T(){i(!0)}function v(){i(!1)}function y(){s(!0)}function j(){s(!1)}return r.jsxs(fe,{children:[t&&r.jsx(G,{isOpen:t,onRequestClose:v,children:r.jsxs(Ce,{children:[r.jsxs(Te,{children:[r.jsx(Se,{src:e.gifUrl,alt:e.name}),r.jsx(Ke,{time:o,getDataFromTimer:B}),r.jsxs(Be,{children:["Burned calories: ",r.jsx("span",{children:m})]})]}),r.jsxs(We,{children:[r.jsxs(Me,{children:[r.jsxs(U,{children:[r.jsx(z,{children:"Name"}),r.jsx(L,{children:e.name})]}),r.jsxs(U,{children:[r.jsx(z,{children:"Target"}),r.jsx(L,{children:e.target})]}),r.jsxs(U,{children:[r.jsx(z,{children:"Body Part"}),r.jsx(L,{children:e.bodyPart})]}),r.jsxs(U,{children:[r.jsx(z,{children:"Equipment"}),r.jsx(L,{children:e.equipment})]})]}),r.jsx(_,{onClick:w,children:"Add to diary"})]})]})}),n&&r.jsx(G,{isOpen:n,onRequestClose:j,children:r.jsxs(Pe,{children:[r.jsx(Ne,{src:Mt,alt:"Well done"}),r.jsx(Ue,{children:"Well done"}),r.jsxs(ee,{style:{marginBottom:"4px"},children:["Your time: ",r.jsx("span",{children:" 3 minutes"})]}),r.jsxs(ee,{children:["Burned calories: ",r.jsx("span",{children:"150"})]}),r.jsx(_,{onClick:j,children:"Next product"}),r.jsxs(ze,{children:[r.jsx(xe,{style:{color:"inherit"},to:"/diary",children:"To the diary"}),r.jsx(I,{icon:"icon-next",size:"16",color:f.colors.textWhite30})]})]})}),r.jsxs(ge,{children:[r.jsx(we,{children:"WORKOUT"}),r.jsxs(ye,{onClick:T,children:["Start",r.jsx(ke,{width:"16",height:"16",children:r.jsx("use",{href:K+"#icon-next"})})]})]}),r.jsxs(be,{children:[r.jsx(Ee,{children:r.jsx(Ae,{width:"14",height:"16",children:r.jsx("use",{href:K+"#icon-running"})})}),r.jsx(je,{children:e.name})]}),r.jsxs(ve,{children:[r.jsxs(X,{children:["Burned calories: ",r.jsx(F,{children:e.burnedCalories})]}),r.jsxs(X,{children:["Body part: ",r.jsx(F,{children:e.bodyPart})]}),r.jsxs(X,{children:["Target: ",r.jsx(F,{children:e.target})]})]})]})},Ut=d.li`
  display: block;
  padding-bottom: 16px;

  @media screen and (min-width: 768px) {
    padding-bottom: 16px;
  }

  @media screen and (min-width: 1440px) {
    padding-bottom: 16px;
  }
`,zt=d.div`
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
`,Lt=d.p`
  font-weight: 400;
  font-size: 20px;
  line-height: 1.2;
  color: white;

  margin-top: 81px;
  margin-bottom: 0;
`,It=d.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
  color: grey;
  margin-top: 2px;
`,Ot=({subcategory:e,onSelect:t})=>r.jsx(Ut,{onClick:()=>t(e.filter,e.name.toLowerCase()),children:r.jsxs(zt,{style:{backgroundImage:`linear-gradient(rgba(4, 4, 4, 0.5), rgba(4, 4, 4, 0.5)), url(${e.imgURL})`},children:[r.jsx(Lt,{children:e.name}),r.jsx(It,{children:e.filter})]})}),Dt=d.ul`
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
`,J=d.a`
  font-weight: 400;
  font-size: 14px;
  line-height: 1.29;
  color: grey;
  cursor: pointer;
  &:hover {
    color: orange;
  }
`,Rt=d.div`
  justify-content: space-between;
  gap: 32px;
  margin-bottom: 64px;
  margin-top: 64px;

  @media screen and (min-width: 768px) {
    display: flex;
  }
`,Xt=d.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  margin-top: 23px;
  @media screen and (min-width: 1440px) {
    width: 842px;
  }
`,Ft=d.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  margin-top: 20px;
`,Vt=d.button`
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
`,Jt=d.h1`
  font-weight: 700;
  font-size: 24px;
  line-height: 1.17;
  color: white;
  margin: 0;
  text-transform: capitalize;
  margin-right: 20px;
`,qt=d.svg`
  transform: rotate(180deg);
  stroke: grey;
  &:hover {
    color: orange;
  }
`,Kt=d.div`
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
`,Zt={"Body parts":"bodyPart",Equipment:"equipment",Muscles:"target"},Yt=()=>{const[e,t]=p.useState([]),[i,n]=p.useState([]),[s,o]=p.useState(null),[a,l]=p.useState("Exercises"),c=s!==null,x=async h=>{o(null);try{const g=await q.get(`/exercises?filter=${h}`);t(g.data[h]),l("Exercises")}catch(g){console.error("Error fetching exercises:",g)}},u=async(h,g)=>{try{const w=await q.get(`/exercises/params?key=${h}&value=${g}`);n(w.data.exercises),l(g)}catch(w){console.error("Error fetching exercises:",w)}};p.useEffect(()=>{x("bodyPart")},[]);const m=()=>c?r.jsxs("div",{children:[r.jsxs(Vt,{type:"button",onClick:()=>{document.title="React App",o(null),l("Exercises")},children:[r.jsx(qt,{width:"16",height:"16",children:r.jsx("use",{href:K+"#icon-next"})}),"BACK"]}),r.jsx(Kt,{style:{height:"500px"},children:r.jsx(Xt,{children:i.length>0?i.map(h=>r.jsx(Nt,{subcategory:h},h._id)):"Empty"})})]}):e&&e.length>0&&r.jsx(Ft,{children:e.map(h=>r.jsx(Ot,{subcategory:h,onSelect:async(g,w)=>{document.title=g,await u(Zt[g],w),o([g,w])}},h._id))});return r.jsxs("div",{children:[r.jsxs(Rt,{children:[r.jsx(Jt,{children:a}),r.jsxs(Dt,{children:[r.jsx("li",{children:r.jsx(J,{onClick:()=>x("bodyPart"),children:"Body parts"})}),r.jsx("li",{children:r.jsx(J,{onClick:()=>x("equipment"),children:"Equipment"})}),r.jsx("li",{children:r.jsx(J,{onClick:()=>x("target"),children:"Muscles"})})]})]}),m()]})},Ht=()=>r.jsxs(ue,{children:[r.jsx(Yt,{}),r.jsx(he,{})]}),ir=Ht;export{ir as default};
