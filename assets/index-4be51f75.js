import{u as i,t as x,x as W,r as d,j as e,L as Y,q as H,e as L}from"./index-5847dc1c.js";import{E as Q}from"./ExercisesSubcategoriesList-9089a7cd.js";import{S as P,s as R}from"./SvgCustom-60b42b37.js";import{B as O}from"./BasicModalWindow-cf5e3c4e.js";import{d as G}from"./dayjs.min-429476f1.js";import"./motion-92fcdb2b.js";import"./zoom-025f732b.js";const $=i.div`
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
`,_=i.div`
  width: 335px;

  padding: 16px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  border-radius: 12px;
  background: rgba(239, 237, 232, 0.05);

  @media screen and (min-width: 1440px) {
    width: 405px;
  }
`,ee=i.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 33px;
`,te=i.p`
  font-weight: 700;
  font-size: 12px;
  color: white;
  padding: 5px 7px;
  border-radius: 4px;
  width: 73px;
  height: 24px;
  background-color: rgba(239, 237, 232, 0.05);
`,re=i.button`
  display: flex;
  gap: 8px;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.29;
  color: #e6533c;
  background-color: transparent;
  border: none;
`,ie=i.div`
  display: flex;
  gap: 16px;
  margin-bottom: 8px;
`,ne=i.p`
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
`,oe=i.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 4px 16px;
`,M=i.li`
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
  color: rgba(239, 237, 232, 0.4);
`,U=i.span`
  color: white;
  text-transform: capitalize;
`,se=i.svg`
  stroke: #e6533c;
`,ae=i.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: #efa082;
`,le=i.svg`
  fill: #efede8;
`,ce=i.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: flex-start;
  }
`,de=i.div`
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
`,pe=i.div`
  @media screen and (min-width: 768px) {
    margin-left: 16px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: flex-end;
    width: 344px;
  }
`,xe=i.img`
  margin-bottom: 14px;
  border: 1px solid ${x.colors.modalBorder};
  border-radius: 12px;
`,he=i.p`
  margin-top: 12px;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: ${x.colors.textWhite30};

  & span {
    color: ${x.colors.primary};
  }
`,me=i.ul`
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
`,T=i.li`
  width: 147px;

  border: 1px solid ${x.colors.modalBorder};
  border-radius: 12px;
  padding: 12px 18px;

  @media screen and (min-width: 768px) {
    width: 168px;
  }
`,S=i.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: ${x.colors.textWhite40};
`,B=i.p`
  font-weight: 700;
  font-size: 14px;
  line-height: 18px;

  color: ${x.colors.white};
  text-transform: capitalize;
`,X=i.button`
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  width: 150px;
  height: 42px;
  padding: 12px 12px;
  margin-top: 24px;

  background-color: ${x.colors.primary};

  font-weight: 500;
  font-size: 16px;
  line-height: 18px;
  color: ${x.colors.white};

  border-radius: 12px;

  @media screen and (min-width: 768px) {
    margin-top: 32px;

    height: 52px;
  }
`,ue=i.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
`,fe=i.img`
  width: 118px;

  @media screen and (min-width: 768px) {
    margin-top: 16px;
  }
`,ge=i.p`
  margin: 27px 0 16px;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  color: ${x.colors.white};

  @media screen and (min-width: 768px) {
    margin: 32px 0 16px;
  }
`,I=i.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: ${x.colors.textWhite30};

  & span {
    color: ${x.colors.primary};
  }
`,we=i.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 16px;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: ${x.colors.textWhite30};
`,je=i.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`,ye=i.p`
  color: ${x.colors.textWhite40};
  font-size: 10px;
  line-height: 14px;
  margin-bottom: 4px;
`,ke=i.div`
  display: flex;
  justify-content: center;
  transform: rotate(180deg) scaleX(-1);
`,D=i.span`
  display: flex;
  justify-content: center;
  text-align: center;
  color: ${x.colors.white};
  font-size: 16px;
  line-height: 24px;
  transform: rotate(180deg) scaleX(-1);
`,V=i.div`
  margin-top: 18px;
  height: 24px;
  width: 24px;

  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${x.colors.primary};
  border-radius: 4px;
`;var J=typeof window>"u"?d.useEffect:d.useLayoutEffect,be=({isPlaying:t,duration:r,startAt:n=0,updateInterval:o=0,onComplete:s,onUpdate:a})=>{let[l,u]=d.useState(n),p=d.useRef(0),f=d.useRef(n),y=d.useRef(n*-1e3),h=d.useRef(null),c=d.useRef(null),m=d.useRef(null),g=b=>{let w=b/1e3;if(c.current===null){c.current=w,h.current=requestAnimationFrame(g);return}let k=w-c.current,j=p.current+k;c.current=w,p.current=j;let E=f.current+(o===0?j:(j/o|0)*o),v=f.current+j,z=typeof r=="number"&&v>=r;u(z?r:E),z||(h.current=requestAnimationFrame(g))},A=()=>{h.current&&cancelAnimationFrame(h.current),m.current&&clearTimeout(m.current),c.current=null},C=d.useCallback(b=>{A(),p.current=0;let w=typeof b=="number"?b:n;f.current=w,u(w),t&&(h.current=requestAnimationFrame(g))},[t,n]);return J(()=>{if(a==null||a(l),r&&l>=r){y.current+=r*1e3;let{shouldRepeat:b=!1,delay:w=0,newStartAt:k}=(s==null?void 0:s(y.current/1e3))||{};b&&(m.current=setTimeout(()=>C(k),w*1e3))}},[l,r]),J(()=>(t&&(h.current=requestAnimationFrame(g)),A),[t,r,o]),{elapsedTime:l,reset:C}},Ee=(t,r,n)=>{let o=t/2,s=r/2,a=o-s,l=2*a,u=n==="clockwise"?"1,0":"0,1",p=2*Math.PI*a;return{path:`m ${o},${s} a ${a},${a} 0 ${u} 0,${l} a ${a},${a} 0 ${u} 0,-${l}`,pathLength:p}},F=(t,r)=>t===0||t===r?0:typeof r=="number"?t-r:0,Ce=t=>({position:"relative",width:t,height:t}),Ae={display:"flex",justifyContent:"center",alignItems:"center",position:"absolute",left:0,top:0,width:"100%",height:"100%"},K=(t,r,n,o,s)=>{if(o===0)return r;let a=(s?o-t:t)/o;return r+n*a},q=t=>{var r,n;return(n=(r=t.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,(o,s,a,l)=>`#${s}${s}${a}${a}${l}${l}`).substring(1).match(/.{2}/g))==null?void 0:r.map(o=>parseInt(o,16)))!=null?n:[]},ve=(t,r)=>{var n;let{colors:o,colorsTime:s,isSmoothColorTransition:a=!0}=t;if(typeof o=="string")return o;let l=(n=s==null?void 0:s.findIndex((c,m)=>c>=r&&r>=s[m+1]))!=null?n:-1;if(!s||l===-1)return o[0];if(!a)return o[l];let u=s[l]-r,p=s[l]-s[l+1],f=q(o[l]),y=q(o[l+1]),h=!!t.isGrowing;return`rgb(${f.map((c,m)=>K(u,c,y[m]-c,p,h)|0).join(",")})`},We=t=>{let{duration:r,initialRemainingTime:n,updateInterval:o,size:s=180,strokeWidth:a=12,trailStrokeWidth:l,isPlaying:u=!1,isGrowing:p=!1,rotation:f="clockwise",onComplete:y,onUpdate:h}=t,c=d.useRef(),m=Math.max(a,l??0),{path:g,pathLength:A}=Ee(s,m,f),{elapsedTime:C}=be({isPlaying:u,duration:r,startAt:F(r,n),updateInterval:o,onUpdate:typeof h=="function"?w=>{let k=Math.ceil(r-w);k!==c.current&&(c.current=k,h(k))}:void 0,onComplete:typeof y=="function"?w=>{var k;let{shouldRepeat:j,delay:E,newInitialRemainingTime:v}=(k=y(w))!=null?k:{};if(j)return{shouldRepeat:j,delay:E,newStartAt:F(r,v)}}:void 0}),b=r-C;return{elapsedTime:C,path:g,pathLength:A,remainingTime:Math.ceil(b),rotation:f,size:s,stroke:ve(t,b),strokeDashoffset:K(C,0,A,r,p),strokeWidth:a}},Z=t=>{let{children:r,strokeLinecap:n,trailColor:o,trailStrokeWidth:s}=t,{path:a,pathLength:l,stroke:u,strokeDashoffset:p,remainingTime:f,elapsedTime:y,size:h,strokeWidth:c}=We(t);return W.createElement("div",{style:Ce(h)},W.createElement("svg",{viewBox:`0 0 ${h} ${h}`,width:h,height:h,xmlns:"http://www.w3.org/2000/svg"},W.createElement("path",{d:a,fill:"none",stroke:o??"#d9d9d9",strokeWidth:s??c}),W.createElement("path",{d:a,fill:"none",stroke:u,strokeLinecap:n??"round",strokeWidth:c,strokeDasharray:l,strokeDashoffset:p})),typeof r=="function"&&W.createElement("div",{style:Ae},r({remainingTime:f,elapsedTime:y,color:u})))};Z.displayName="CountdownCircleTimer";//! Стейт в якому будуть дані про кількість калорій і час з одної вправи exercises/params
//! Стейт даних для формування запиту на бекенд /diary/exercise
const Te={isSmoothColorTransition:!0,trailColor:x.colors.graphite,isGrowing:!1,rotation:"clockwise",strokeLinecap:"round",strokeWidth:4,trailStrokeWidth:4,updateInterval:0,size:124,isPlaying:!1,colors:x.colors.primary},Se=({time:t,getDataFromTimer:r})=>{const[n,o]=d.useState(!1),[s,a]=d.useState(!1),l=()=>{o(!0)},u=()=>{o(!1)};return d.useEffect(()=>{const p=f=>{s||(f.keyCode===32&&!n?l():u())};return document.addEventListener("keydown",p),()=>{document.removeEventListener("keydown",p)}},[n,s]),e.jsxs(je,{children:[e.jsx(ye,{children:"Time"}),e.jsx(ke,{children:e.jsx(Z,{...Te,duration:t*60,initialRemainingTime:t*60,isPlaying:n,onUpdate:p=>{p===0&&a(!0),r(p)},onComplete:()=>({shouldRepeat:!1,delay:1}),children:({remainingTime:p})=>Be(p)})}),n===!1||s===!0?e.jsx(V,{type:"button",onClick:l,children:s!==!0?e.jsx(P,{icon:"icon-play",size:"14",color:x.colors.white,stroke:x.colors.white}):e.jsx(P,{icon:"icon-done",size:"14",color:x.colors.white,stroke:x.colors.white})}):e.jsx(V,{type:"button",onClick:u,children:e.jsx(P,{icon:"icon-pause",size:"14",color:x.colors.white,stroke:x.colors.white})})]})},Be=t=>{if(t===0)return e.jsx(D,{children:"Training completed!"});const r=Math.floor(t/60),n=t%60;return e.jsxs(D,{children:[`0${r}`,":",n<10?`0${n}`:n]})},Pe="data:image/png;base64,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",Me="DD/MM/YYYY",Ue=({subcategory:t})=>{const[r,n]=d.useState(!1),[o,s]=d.useState(!1),[a,l]=d.useState(0),[u,p]=d.useState(0),[f,y]=d.useState(0),[h,c]=d.useState(0);d.useEffect(()=>{l(t.time),p(t.burnedCalories)},[t.time,t.burnedCalories]),d.useEffect(()=>{r===!0&&(l(t.time),p(t.burnedCalories))},[r,t.time,t.burnedCalories]),d.useEffect(()=>{(()=>{c(Math.round(u/a*f))})()});const m=async j=>{try{await L.post("/diary/exercise",j)}catch(E){console.error("Error fetching exercises:",E)}},g=async()=>{const{_id:j}=t,E=G(Date.now()).format(Me),v={exerciseId:j,date:E,time:f,burnedCalories:h};if(f<1||h<1){H.error("You should work out for more than one minute!");return}await m(v),b(),w()},A=j=>{const E=Number(a-j/60);y(E)};function C(){n(!0)}function b(){n(!1)}function w(){s(!0)}function k(){s(!1)}return e.jsxs(_,{children:[r&&e.jsx(O,{isOpen:r,onRequestClose:b,children:e.jsxs(ce,{children:[e.jsxs(de,{children:[e.jsx(xe,{src:t.gifUrl,alt:t.name}),e.jsx(Se,{time:a,getDataFromTimer:A}),e.jsxs(he,{children:["Burned calories: ",e.jsx("span",{children:h})]})]}),e.jsxs(pe,{children:[e.jsxs(me,{children:[e.jsxs(T,{children:[e.jsx(S,{children:"Name"}),e.jsx(B,{children:t.name})]}),e.jsxs(T,{children:[e.jsx(S,{children:"Target"}),e.jsx(B,{children:t.target})]}),e.jsxs(T,{children:[e.jsx(S,{children:"Body Part"}),e.jsx(B,{children:t.bodyPart})]}),e.jsxs(T,{children:[e.jsx(S,{children:"Equipment"}),e.jsx(B,{children:t.equipment})]})]}),e.jsx(X,{onClick:g,children:"Add to diary"})]})]})}),o&&e.jsx(O,{isOpen:o,onRequestClose:k,children:e.jsxs(ue,{children:[e.jsx(fe,{src:Pe,alt:"Well done"}),e.jsx(ge,{children:"Well done"}),e.jsxs(I,{style:{marginBottom:"4px"},children:["Your time: ",e.jsx("span",{children:" 3 minutes"})]}),e.jsxs(I,{children:["Burned calories: ",e.jsx("span",{children:"150"})]}),e.jsx(X,{onClick:k,children:"Next product"}),e.jsxs(we,{children:[e.jsx(Y,{style:{color:"inherit"},to:"/diary",children:"To the diary"}),e.jsx(P,{icon:"icon-next",size:"16",color:x.colors.textWhite30})]})]})}),e.jsxs(ee,{children:[e.jsx(te,{children:"WORKOUT"}),e.jsxs(re,{onClick:C,children:["Start",e.jsx(se,{width:"16",height:"16",children:e.jsx("use",{href:R+"#icon-next"})})]})]}),e.jsxs(ie,{children:[e.jsx(ae,{children:e.jsx(le,{width:"14",height:"16",children:e.jsx("use",{href:R+"#icon-running"})})}),e.jsx(ne,{children:t.name})]}),e.jsxs(oe,{children:[e.jsxs(M,{children:["Burned calories: ",e.jsx(U,{children:t.burnedCalories})]}),e.jsxs(M,{children:["Body part: ",e.jsx(U,{children:t.bodyPart})]}),e.jsxs(M,{children:["Target: ",e.jsx(U,{children:t.target})]})]})]})},Ne=i.li`
  display: block;
  padding-bottom: 16px;

  @media screen and (min-width: 768px) {
    padding-bottom: 16px;
  }

  @media screen and (min-width: 1440px) {
    padding-bottom: 16px;
  }
`,Le=i.div`
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
`,Re=i.p`
  font-weight: 400;
  font-size: 20px;
  line-height: 1.2;
  color: white;

  margin-top: 81px;
  margin-bottom: 0;
`,ze=i.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
  color: grey;
  margin-top: 2px;
`,Oe=({subcategory:t,onSelect:r})=>e.jsx(Ne,{onClick:()=>r(t.filter,t.name.toLowerCase()),children:e.jsxs(Le,{style:{backgroundImage:`linear-gradient(rgba(4, 4, 4, 0.5), rgba(4, 4, 4, 0.5)), url(${t.imgURL})`},children:[e.jsx(Re,{children:t.name}),e.jsx(ze,{children:t.filter})]})}),Xe=i.ul`
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
`,N=i.a`
  font-weight: 400;
  font-size: 14px;
  line-height: 1.29;
  color: grey;
  cursor: pointer;
  &:hover {
    color: orange;
  }
`,Ie=i.div`
  justify-content: space-between;
  gap: 32px;
  margin-bottom: 64px;
  margin-top: 64px;

  @media screen and (min-width: 768px) {
    display: flex;
  }
`,De=i.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  margin-top: 23px;
  @media screen and (min-width: 1440px) {
    width: 842px;
  }
`,Ve=i.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  margin-top: 20px;
`,Je=i.button`
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
`,Fe=i.h1`
  font-weight: 700;
  font-size: 24px;
  line-height: 1.17;
  color: white;
  margin: 0;
  text-transform: capitalize;
  margin-right: 20px;
`,qe=i.svg`
  transform: rotate(180deg);
  stroke: grey;
  &:hover {
    color: orange;
  }
`,Ke=i.div`
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
`,Ze={"Body parts":"bodyPart",Equipment:"equipment",Muscles:"target"},Ye=()=>{const[t,r]=d.useState([]),[n,o]=d.useState([]),[s,a]=d.useState(null),[l,u]=d.useState("Exercises"),p=s!==null,f=async c=>{a(null);try{const m=await L.get(`/exercises?filter=${c}`);r(m.data[c]),u("Exercises")}catch(m){console.error("Error fetching exercises:",m)}},y=async(c,m)=>{try{const g=await L.get(`/exercises/params?key=${c}&value=${m}`);o(g.data.exercises),u(m)}catch(g){console.error("Error fetching exercises:",g)}};d.useEffect(()=>{f("bodyPart")},[]);const h=()=>p?e.jsxs("div",{children:[e.jsxs(Je,{type:"button",onClick:()=>{document.title="React App",a(null),u("Exercises")},children:[e.jsx(qe,{width:"16",height:"16",children:e.jsx("use",{href:R+"#icon-next"})}),"BACK"]}),e.jsx(Ke,{style:{height:"500px"},children:e.jsx(De,{children:n.length>0?n.map(c=>e.jsx(Ue,{subcategory:c},c._id)):"Empty"})})]}):t&&t.length>0&&e.jsx(Ve,{children:t.map(c=>e.jsx(Oe,{subcategory:c,onSelect:async(m,g)=>{document.title=m,await y(Ze[m],g),a([m,g])}},c._id))});return e.jsxs("div",{children:[e.jsxs(Ie,{children:[e.jsx(Fe,{children:l}),e.jsxs(Xe,{children:[e.jsx("li",{children:e.jsx(N,{onClick:()=>f("bodyPart"),children:"Body parts"})}),e.jsx("li",{children:e.jsx(N,{onClick:()=>f("equipment"),children:"Equipment"})}),e.jsx("li",{children:e.jsx(N,{onClick:()=>f("target"),children:"Muscles"})})]})]}),h()]})},He=()=>e.jsxs($,{children:[e.jsx(Ye,{}),e.jsx(Q,{})]}),it=He;export{it as default};
