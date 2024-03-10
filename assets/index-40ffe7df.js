import{u as o,j as e,L as l,N as d,a as i,s as p,t as x,b as g,l as u,c as h,O as m}from"./index-4e71bc1a.js";import{S as r,r as j}from"./react-responsive-ab7f7092.js";const b=o.div`
  padding: 0 5px;
  margin: 0 auto;
  width: 100%;
  @media screen and (min-width: 375px) {
    width: 375px;
    padding: 0 20px;
  }
  @media screen and (min-width: 768px) {
    width: 768px;
    padding: 0 32px;
  }
  @media screen and (min-width: 1440px) {
    width: 1440px;
    padding: 0 96px;
  }
`,f=({children:t})=>e.jsx(b,{children:t}),y="/project-Qwerty2024-front/logo/mobile-logo.png",w="/project-Qwerty2024-front/logo/mobile-logo@2x.png",a="/project-Qwerty2024-front/logo/desktop-logo.png",$="/project-Qwerty2024-front/logo/desktop-logo@2x.png",k=()=>e.jsx(l,{to:"diary",children:e.jsxs("picture",{children:[e.jsx("source",{media:"(max-width: 768px)",srcSet:`${y} 1x,${w} 2x`}),e.jsx("source",{media:"(min-width: 768px)",srcSet:`${a} 1x,${$} 2x`}),e.jsx("img",{src:a,alt:"Logo"})]})}),v=["Diary","Products","Exercises"],L=o(d)`
  color: ${t=>t.theme.colors.white};
  padding: 10px 27px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  border-radius: 12px;
  &.active {
    background-color: ${({theme:t})=>t.colors.primary};
    border: none;
  }
`,S=o.ul`
  display: flex;
  gap: 16px;
`,z=()=>e.jsx("nav",{children:e.jsx(S,{children:v.map(t=>e.jsx("li",{children:e.jsx(L,{to:t.toLowerCase(),children:t})},t))})}),B=o.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 14px;
  margin-left: auto;
  @media screen and (min-width: 768px) {
    gap: 16px;
  }
`,c=o(d)`
  display: flex;
  align-items: center;
  justify-content: center;
`,C=o.span`
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
`,Q=()=>{const{avatarURL:t}=i(p);return e.jsxs(B,{children:[e.jsx(c,{to:"profile",children:e.jsx(r,{icon:"icon-settings",size:"24",stroke:"rgba(239, 237, 232, 0.3)",tabSize:"28"})}),e.jsx(c,{to:"profile",children:e.jsx(C,{children:t?e.jsx("img",{src:t,alt:"avatar"}):e.jsx(r,{icon:"icon-user",size:"21",color:"rgba(239, 237, 232, 0.1)",tabSize:"24"})})})]})},N=o.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  margin-left: 14px;
  @media screen and (min-width: 768px) {
    gap: 16px;
  }
`,O=()=>e.jsx(N,{type:"button",children:e.jsx(r,{icon:"icon-menu",size:"24",color:x.colors.primary,tabSize:"32"})}),W=o.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  background-color: transparent;
  margin-left: 16px;
`,A=o.span`
  color: ${({theme:t})=>t.colors.white};
  line-height: 1.5;
`,D=()=>{const t=g();return e.jsxs(W,{onClick:()=>t(u()),children:[e.jsx(A,{children:"Logout"}),e.jsx(r,{icon:"icon-logout",size:"20",stroke:x.colors.primary})]})},E=o.header`
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
`,R=()=>{const{blood:t}=i(p),n=i(h),s=j.useMediaQuery({minWidth:1440});return e.jsxs(E,{$isAuth:n,children:[e.jsx(k,{}),e.jsxs(M,{children:[s&&n&&t&&e.jsx(z,{}),n&&e.jsx(Q,{})]}),!s&&n&&t&&e.jsx(O,{}),s&&n&&e.jsx(D,{})]})},U=()=>e.jsxs(e.Fragment,{children:[e.jsx(R,{}),e.jsx(f,{children:e.jsx(m,{})})]}),F=U;export{F as default};
