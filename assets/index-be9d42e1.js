import{j as e,L as l,u as t,N as p,a as n,s as d,t as x,b as g,O as m}from"./index-4e8bc0a4.js";import{C as u}from"./Container-8fe17af5.js";import{S as i}from"./SvgCustom-6e49b77a.js";import{L as h}from"./LogOutBtn-edb346db.js";import{r as j}from"./react-responsive-62141b3e.js";const b="/project-Qwerty2024-front/logo/mobile-logo.png",f="/project-Qwerty2024-front/logo/mobile-logo@2x.png",a="/project-Qwerty2024-front/logo/desktop-logo.png",y="/project-Qwerty2024-front/logo/desktop-logo@2x.png",w=()=>e.jsx(l,{to:"diary",children:e.jsxs("picture",{children:[e.jsx("source",{media:"(max-width: 768px)",srcSet:`${b} 1x,${f} 2x`}),e.jsx("source",{media:"(min-width: 768px)",srcSet:`${a} 1x,${y} 2x`}),e.jsx("img",{src:a,alt:"Logo"})]})}),$=["Diary","Products","Exercises"],L=t(p)`
  color: ${o=>o.theme.colors.white};
  padding: 10px 27px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  border-radius: 12px;
  &.active {
    background-color: ${({theme:o})=>o.colors.primary};
    border: none;
  }
`,v=t.ul`
  display: flex;
  gap: 16px;
`,k=()=>e.jsx("nav",{children:e.jsx(v,{children:$.map(o=>e.jsx("li",{children:e.jsx(L,{to:o.toLowerCase(),children:o})},o))})}),S=t.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 14px;
  margin-left: auto;
  @media screen and (min-width: 768px) {
    gap: 16px;
  }
`,c=t(p)`
  display: flex;
  align-items: center;
  justify-content: center;
`,z=t.span`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(48, 48, 48, 0.3);
  width: 37px;
  height: 37px;
  border-radius: 50%;
  border: 1px solid ${o=>o.theme.colors.primary};
  overflow: hidden;
  @media screen and (min-width: 768px) {
    width: 46px;
    height: 46px;
  }
`,B=()=>{const{avatarURL:o}=n(d);return e.jsxs(S,{children:[e.jsx(c,{to:"profile",children:e.jsx(i,{icon:"icon-settings",size:"24",stroke:"rgba(239, 237, 232, 0.3)",tabSize:"28"})}),e.jsx(c,{to:"profile",children:e.jsx(z,{children:o?e.jsx("img",{src:o,alt:"avatar"}):e.jsx(i,{icon:"icon-user",size:"21",color:"rgba(239, 237, 232, 0.1)",tabSize:"24"})})})]})},C=t.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  margin-left: 14px;
  @media screen and (min-width: 768px) {
    gap: 16px;
  }
`,Q=()=>e.jsx(C,{type:"button",children:e.jsx(i,{icon:"icon-menu",size:"24",color:x.colors.primary,tabSize:"32"})}),N=t.header`
  display: flex;
  margin: 0 auto;
  max-width: 1440px;
  align-items: center;
  padding: 12px 20px;
  background-color: transparent;
  border-bottom: ${({$isAuth:o})=>o?"1px solid rgba(239, 237, 232, 0.2)":"none"};
  @media screen and (min-width: 768px) {
    padding: 19px 32px;
  }
  @media screen and (min-width: 1440px) {
    position: ${({$isAuth:o})=>o?"static":"absolute"};
    top: 0;
    left: 0;
    padding: ${({$isAuth:o})=>o?"19px 96px":"32px 96px"};
  }
`,A=t.div`
  display: flex;
  gap: 32px;
  margin-left: auto;
`,E=()=>{const{blood:o}=n(d),r=n(g),s=j.useMediaQuery({minWidth:1440});return e.jsxs(N,{$isAuth:r,children:[e.jsx(w,{}),e.jsxs(A,{children:[s&&r&&o&&e.jsx(k,{}),r&&e.jsx(B,{})]}),!s&&r&&o&&e.jsx(Q,{}),s&&r&&e.jsx(h,{})]})},M=()=>e.jsxs(e.Fragment,{children:[e.jsx(E,{}),e.jsx(u,{children:e.jsx(m,{})})]}),I=M;export{I as default};
