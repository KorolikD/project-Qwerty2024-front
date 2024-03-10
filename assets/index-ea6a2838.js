import{j as e,L as x,u as o,N as l,a as i,s as p,t as d,b as g,l as u,c as m,O as h}from"./index-f042ea01.js";import{C as j}from"./Container-ea454fc1.js";import{S as s,r as b}from"./react-responsive-df9102ac.js";const f="/project-Qwerty2024-front/logo/mobile-logo.png",y="/project-Qwerty2024-front/logo/mobile-logo@2x.png",a="/project-Qwerty2024-front/logo/desktop-logo.png",w="/project-Qwerty2024-front/logo/desktop-logo@2x.png",$=()=>e.jsx(x,{to:"diary",children:e.jsxs("picture",{children:[e.jsx("source",{media:"(max-width: 768px)",srcSet:`${f} 1x,${y} 2x`}),e.jsx("source",{media:"(min-width: 768px)",srcSet:`${a} 1x,${w} 2x`}),e.jsx("img",{src:a,alt:"Logo"})]})}),k=["Diary","Products","Exercises"],L=o(l)`
  color: ${t=>t.theme.colors.white};
  padding: 10px 27px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  border-radius: 12px;
  &.active {
    background-color: ${({theme:t})=>t.colors.primary};
    border: none;
  }
`,v=o.ul`
  display: flex;
  gap: 16px;
`,S=()=>e.jsx("nav",{children:e.jsx(v,{children:k.map(t=>e.jsx("li",{children:e.jsx(L,{to:t.toLowerCase(),children:t})},t))})}),z=o.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 14px;
  margin-left: auto;
  @media screen and (min-width: 768px) {
    gap: 16px;
  }
`,c=o(l)`
  display: flex;
  align-items: center;
  justify-content: center;
`,B=o.span`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(48, 48, 48, 0.3);
  width: 37px;
  height: 37px;
  border-radius: 50%;
  border: 1px solid ${t=>t.theme.colors.primary};
  overflow: hidden;
  @media screen and (min-width: 768px) {
    width: 46px;
    height: 46px;
  }
`,C=()=>{const{avatarURL:t}=i(p);return e.jsxs(z,{children:[e.jsx(c,{to:"profile",children:e.jsx(s,{icon:"icon-settings",size:"24",stroke:"rgba(239, 237, 232, 0.3)",tabSize:"28"})}),e.jsx(c,{to:"profile",children:e.jsx(B,{children:t?e.jsx("img",{src:t,alt:"avatar"}):e.jsx(s,{icon:"icon-user",size:"21",color:"rgba(239, 237, 232, 0.1)",tabSize:"24"})})})]})},Q=o.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  margin-left: 14px;
  @media screen and (min-width: 768px) {
    gap: 16px;
  }
`,N=()=>e.jsx(Q,{type:"button",children:e.jsx(s,{icon:"icon-menu",size:"24",color:d.colors.primary,tabSize:"32"})}),O=o.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  background-color: transparent;
  margin-left: 16px;
`,A=o.span`
  color: ${({theme:t})=>t.colors.white};
  line-height: 1.5;
`,D=()=>{const t=g();return e.jsxs(O,{onClick:()=>t(u()),children:[e.jsx(A,{children:"Logout"}),e.jsx(s,{icon:"icon-logout",size:"20",stroke:d.colors.primary})]})},E=o.header`
  display: flex;
  margin: 0 auto;
  max-width: 1440px;
  align-items: center;
  padding: 12px 20px;
  background-color: transparent;
  border-bottom: ${({$isAuth:t})=>t?"1px solid rgba(239, 237, 232, 0.2)":"none"};
  @media screen and (min-width: 768px) {
    padding: 19px 32px;
  }
  @media screen and (min-width: 1440px) {
    position: ${({$isAuth:t})=>t?"static":"absolute"};
    top: 0;
    left: 0;
    padding: ${({$isAuth:t})=>t?"19px 96px":"32px 96px"};
  }
`,M=o.div`
  display: flex;
  gap: 32px;
  margin-left: auto;
`,R=()=>{const{blood:t}=i(p),r=i(m),n=b.useMediaQuery({minWidth:1440});return e.jsxs(E,{$isAuth:r,children:[e.jsx($,{}),e.jsxs(M,{children:[n&&r&&t&&e.jsx(S,{}),r&&e.jsx(C,{})]}),!n&&r&&t&&e.jsx(N,{}),n&&r&&e.jsx(D,{})]})},U=()=>e.jsxs(e.Fragment,{children:[e.jsx(R,{}),e.jsx(j,{children:e.jsx(h,{})})]}),F=U;export{F as default};
