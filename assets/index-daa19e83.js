import{u as i,j as t}from"./index-d10283e4.js";import{C as o}from"./Container-935d05a6.js";import{A as p,D as n}from"./DynamicElementBoxes-65654762.js";import{R as r}from"./ResponsiveBackground-a1940f16.js";import"./index.esm-759ee984.js";import"./index-39490bef.js";const x=i.div`
  display: flex;
  flex-direction: column;
  margin-top: 90px;
  width: 335px;
  height: 368px;
  position: absolute;
  left: 20px;
  z-index: 2;

  @media screen and (min-width: 768px) {
    width: 496px;
    height: 336px;
    top: 189px;
    left: 32px;
    left: 32px;
    margin: 0px;
  }

  @media screen and (min-width: 1200px) {
    width: 496px;
    height: 336px;
    left: 96px;
  }
`,a=i.h1`
  color: ${e=>e.theme.colors.white};
  font-weight: 700px;
  font-size: 24px;

  @media screen and (min-width: 768px) {
    padding: 0px;
    margin: 0px;
    font-size: 32px;
    font-weight: 700;
    line-height: 44px;
    letter-spacing: 0em;
    text-align: left;
  }
`,s=i.p`
  color: ${e=>e.theme.colors.formBorder};
  font-size: 14px;
  font-weight: 400px;
  line-height: 18px;
  margin-top: 14px;
  margin-bottom: 10px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0px;
    text-align: left;
    margin-top: 16px;
    margin-bottom: 18px;
  }
`,m=()=>t.jsx(t.Fragment,{children:t.jsxs(o,{children:[t.jsxs(x,{children:[t.jsx(a,{children:"Sign In"}),t.jsx(s,{children:"Welcome! Please enter your credentials to login to the platform:"}),t.jsx(p,{type:"SignIn"})]}),t.jsx(r,{}),t.jsx(n,{type:"videoTutorial"}),t.jsx(n,{type:"calories"})]})}),w=m;export{w as default};
