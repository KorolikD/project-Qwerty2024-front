import{u as e,j as t}from"./index-825de9d0.js";import{A as o}from"./AuthForm-1013ca1f.js";import{R as p}from"./ResponsiveBackground-8a92e1b6.js";import{D as n}from"./DynamicElementBoxes-14d6da74.js";import"./formik.esm-97305b55.js";import"./index.esm-ad7582dc.js";import"./motion-2611d0d2.js";import"./index-78eac928.js";import"./ResizeObserver.es-f4289e8a.js";import"./zoom-a265baeb.js";const r=e.div`
  display: flex;
  flex-direction: column;
  padding-top: 58px;
  width: 335px;
  height: 368px;

  @media screen and (min-width: 768px) {
    width: 496px;
    height: 336px;
    padding-top: 108px;
  }

  @media screen and (min-width: 1200px) {
    width: 496px;
    height: 336px;
    padding-top: 119px;
  }
`,x=e.h1`
  color: ${i=>i.theme.colors.white};
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
`,a=e.p`
  color: ${i=>i.theme.colors.formBorder};
  font-size: 14px;
  font-weight: 400px;
  line-height: 18px;
  margin-top: 14px;
  margin-bottom: 28px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0px;
    text-align: left;
    margin-top: 16px;
    margin-bottom: 18px;
  }
`,s=()=>t.jsxs(t.Fragment,{children:[t.jsxs(r,{children:[t.jsx(x,{children:"Sign In"}),t.jsx(a,{children:"Welcome! Please enter your credentials to login to the platform:"}),t.jsx(o,{type:"SignIn"})]}),t.jsxs(p,{children:[t.jsx(n,{type:"videoTutorial"}),t.jsx(n,{type:"calories"})]})]}),y=s;export{y as default};
