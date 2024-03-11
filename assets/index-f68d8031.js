import{u as i,j as e}from"./index-9ce9cf9e.js";import{C as n}from"./Container-9ae023ed.js";import{A as p,D as o}from"./DynamicElementBoxes-3d354764.js";import{R as r}from"./ResponsiveBackground-241e69e1.js";import"./index.esm-666c2d4a.js";import"./index-d5be3308.js";const s=i.div`
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
    margin-top: 0px;
    left: 32px;
  }

  @media screen and (min-width: 1200px) {
    width: 496px;
    height: 336px;
    left: 96px;
  }
`,x=i.h1`
  color: ${t=>t.theme.colors.white};
  font-weight: 700px;
  font-size: 24px;

  @media screen and (min-width: 768px) {
    font-size: 32px;
    font-weight: 700;
    line-height: 44px;
    letter-spacing: 0em;
    text-align: left;
  }

  @media screen and (min-width: 1200px) {
  }
`,a=i.p`
  color: ${t=>t.theme.colors.formBorder};
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
  }
`,h=()=>e.jsx(e.Fragment,{children:e.jsxs(n,{children:[e.jsxs(s,{children:[e.jsx(x,{children:"Sign Up"}),e.jsx(a,{children:"Thank you for your interest in our platform. To complete the registration process, please provide us with the following information."}),e.jsx(p,{type:"SignUp"})]}),e.jsx(o,{type:"videoTutorial"}),e.jsx(o,{type:"calories"}),e.jsx(r,{})]})}),w=h;export{w as default};
