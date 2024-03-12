import{u as t,L as a,j as i}from"./index-1e9fb2d9.js";import{R as d}from"./ResponsiveBackground-7ba4ebe0.js";import{D as s}from"./DynamicElementBoxes-17f94797.js";const x=t.div`
  text-align: left;

  padding-top: 66px;

  @media screen and (min-width: 768px) {
    width: 598px;
    height: 234px;

    padding-top: 157px;
  }
  @media screen and (min-width: 1024px) {
    padding-top: 200px;
  }
`,c=t.h1`
  color: ${e=>e.theme.colors.white};
  font-size: 38px;
  font-weight: 500;
  line-height: 1.05;
  letter-spacing: 0.01em;
  text-align: left;

  @media screen and (min-width: 768px) {
    font-size: 70px;
    line-height: 1.1;
    letter-spacing: 0.01em;
  }
  @media screen and (min-width: 1024px) {
  }
`,h=t.div`
  display: flex;
  margin-top: 52px;
  gap: 14px;
  padding: 0px;
  @media screen and (min-width: 768px) {
    gap: 20px;
  }
`,l=t.svg`
  fill: transparent;
  position: absolute;
  z-index: -1;
  width: 98px;
  height: 35px;
  top: 170px;
  left: 11px;
  @media screen and (min-width: 768px) {
    width: 185px;
    height: 67px;
    top: 320px;
    left: 16px;
  }
  @media screen and (min-width: 1024px) {
    width: 185px;
    height: 67px;
    top: 284px;
    left: 80px;
  }
`,g=t(a)`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 42px;
  width: ${({$size:e})=>e==="signup"?"140px":"135px"};
  background-color: ${e=>e.$type==="signup"?e.theme.colors.primary:"transparent"};
  border: ${e=>e.$type==="signup"?`1px solid ${e.theme.colors.primary}`:`1px solid ${e.theme.colors.formBorder}`};
  border-radius: 12px;
  padding: 12px 40px;
  color: ${({theme:e})=>e.colors.white};
  font-size: 16px;
  font-weight: 500;
  line-height: 1.1;
  transition: ${e=>e.$type==="transparent"?"border":"background-color"}
    350ms ease;
  &:hover {
    ${e=>e.$type==="signup"?`background-color: ${e.theme.colors.secondary};`:"border: 1px solid rgba(239, 237, 232, 0.3)"}
  }

  @media screen and (min-width: 768px) {
    height: 56px;
    width: ${({$size:e})=>e==="signup"?"190px":"182px"};

    font-size: 20px;

    line-height: 1.2;
    letter-spacing: 0em;
  }
`,r=({children:e,variant:n="signup",size:p="signup"})=>{const o=n==="signup"?"/signup":"/signin";return i.jsx(g,{to:o,$size:p,$type:n,children:e})},m=()=>i.jsxs(i.Fragment,{children:[i.jsxs(x,{children:[i.jsx(l,{children:i.jsx("use",{href:"src/img/sprite.svg#icon-circle"})}),i.jsx(c,{children:"Transforming your body shape with Power Pulse"}),i.jsxs(h,{children:[i.jsx(r,{size:"signup",variant:"signup",children:"Sign Up"}),i.jsx(r,{size:"signin",variant:"",children:"Sign In"})]})]}),i.jsx(d,{}),i.jsx(s,{type:"videoTutorial"}),i.jsx(s,{type:"calories"})]}),$=m;export{$ as default};
