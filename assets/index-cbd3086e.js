import{u as e,L as n,j as o}from"./index-f4f0eb10.js";import{R as p}from"./ResponsiveBackground-f112ee22.js";import{C as r}from"./Container-6b5896f3.js";const x=e.div`
  width: 240px;
  height: 100%;
  background-color: ${t=>t.theme.colors.primary};
  color: ${t=>t.theme.colors.white};
  padding: 20px 24px;
  position: absolute;
  z-index: 2;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: left;

  @media (min-width: 768px) {
    width: 420px;
    min-height: 800px;
    padding: 32px;
  }

  @media (min-width: 1024px) {
    width: 669px;
    min-height: px;
    padding: 32px 96px;
  }
`,d=e.h1`
  padding: 0;
  margin: 0;
  font-size: 66px;
  font-weight: 500;

  letter-spacing: 0.01em;

  margin-top: 213px;

  @media (min-width: 768px) {
    font-size: 160px;
    margin-top: 260px;
  }

  @media (min-width: 1024px) {
    margin-top: 172px;
  }
`,s=e.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0px;
  width: 200px;
  height: 162px;

  @media (min-width: 768px) {
    font-size: 16px;
    width: 356px;
    height: 144px;
    line-height: 24px;
  }

  @media (min-width: 1024px) {
    font-size: 16px;
    width: 447px;
    height: 96px;
    margin-top: 0px;
    margin-bottom: 28px;
    line-height: 24px;
  }
`,a=e(n)`
  padding: 12px 40px;
  font-size: 16px;
  font-weight: 500;
  margin-top: 28px;

  text-align: center;

  color: ${t=>t.theme.colors.white};

  background-color: transparent;
  border: 1px solid ${t=>t.theme.colors.formBorder};
  width: 155px;
  height: 45px;
  border-radius: 12px;

  gap: 10px;

  @media (min-width: 768px) {
    font-size: 20px;
    width: 208px;
    height: 56px;
    padding: 16px 60px;
  }

  @media (min-width: 1024px) {
    font-size: 20px;
    width: 208px;
    height: 56px;
    padding: 16px 60px;
    margin-top: 28px;
  }
`,h="/project-Qwerty2024-front/logo/404-mobile-Logo.png",g="/project-Qwerty2024-front/logo/404-mobile-Logo2x.png",i="/project-Qwerty2024-front/logo/404-desktopLogo.png",c="/project-Qwerty2024-front/logo/404-desktopLogo2x.png",m=()=>o.jsx(n,{to:"diary",children:o.jsxs("picture",{children:[o.jsx("source",{media:"(max-width: 768px)",srcSet:`${h} 1x,${g} 2x`}),o.jsx("source",{media:"(min-width: 768px)",srcSet:`${i} 1x,${c} 2x`}),o.jsx("img",{src:i,alt:"Logo"})]})}),l=()=>o.jsxs(r,{children:[o.jsxs(x,{children:[o.jsx(m,{}),o.jsx(d,{children:"404"}),o.jsx(s,{children:"Sorry, you have reached a page that we could not find. It seems that you are lost among the numbers and letters of our virtual space. Perhaps this page went on vacation or decided to disappear into another dimension. We apologize for this inconvenience."}),o.jsx(a,{to:"/",children:"Go Home"})]}),o.jsx(p,{})]}),j=l;export{j as default};
