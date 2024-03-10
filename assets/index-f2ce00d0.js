import{u as o,L as x,j as t,r as a}from"./index-f042ea01.js";import{C as c}from"./Container-ea454fc1.js";const g=o.div`
  width: 240px;
  height: 100%;
  background-color: ${e=>e.theme.colors.primary};
  color: ${e=>e.theme.colors.white};
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
`,h=o.h1`
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
`,m=o.p`
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
`,l=o(x)`
  padding: 12px 40px;
  font-size: 16px;
  font-weight: 500;
  margin-top: 28px;

  text-align: center;

  color: ${e=>e.theme.colors.white};

  background-color: transparent;
  border: 1px solid ${e=>e.theme.colors.formBorder};
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
`,w=o.div`
  position: absolute;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: right bottom;

  top: 241px;
  left: 107px;
  right: 0;
  bottom: 0;
  background-image: url(${e=>e.image}),
    linear-gradient(73.21deg, #040404 6.11%, rgba(4, 4, 4, 0) 66.68%),
    linear-gradient(170.48deg, #040404 3.66%, rgba(4, 4, 4, 0) 19.15%);

  @media (min-width: 768px) {
    top: 131px;
    left: 331px;
  }

  @media (min-width: 1024px) {
    top: -152px;
    left: 770px;
  }
`,b="/project-Qwerty2024-front/logo/404-mobile-Logo.png",f="/project-Qwerty2024-front/logo/404-mobile-Logo2x.png",s="/project-Qwerty2024-front/logo/404-desktopLogo.png",u="/project-Qwerty2024-front/logo/404-desktopLogo2x.png",j=()=>t.jsx(x,{to:"diary",children:t.jsxs("picture",{children:[t.jsx("source",{media:"(max-width: 768px)",srcSet:`${b} 1x,${f} 2x`}),t.jsx("source",{media:"(min-width: 768px)",srcSet:`${s} 1x,${u} 2x`}),t.jsx("img",{src:s,alt:"Logo"})]})}),k=({images:e})=>{const[d,i]=a.useState("");return a.useEffect(()=>{const n=()=>{const r=window.devicePixelRatio||1,p=window.innerWidth;p>=1024?i(r>=2?e.desktop2x:e.desktop):p>=768?i(r>=2?e.tablet2x:e.tablet):i(r>=2?e.mobile2x:e.mobile)};return n(),window.addEventListener("resize",n),()=>{window.removeEventListener("resize",n)}},[e]),t.jsx(w,{image:d})},y="/project-Qwerty2024-front/assets/hero-1x-71f27de9.jpg",z="/project-Qwerty2024-front/assets/hero-2x-84c9a84b.jpg",v="/project-Qwerty2024-front/assets/hero-mob-2x-29ca5e9d.jpg",L="/project-Qwerty2024-front/assets/hero-mob-1x-d4b8c906.jpg",Q="/project-Qwerty2024-front/assets/hero-tab-2x-41d238e0.jpg",$="/project-Qwerty2024-front/assets/hero-tab-1x-b3fdce1e.jpg",I=()=>{const e={desktop:y,desktop2x:z,tablet:$,tablet2x:Q,mobile:L,mobile2x:v};return t.jsxs(c,{children:[t.jsxs(g,{children:[t.jsx(j,{}),t.jsx(h,{children:"404"}),t.jsx(m,{children:"Sorry, you have reached a page that we could not find. It seems that you are lost among the numbers and letters of our virtual space. Perhaps this page went on vacation or decided to disappear into another dimension. We apologize for this inconvenience."}),t.jsx(l,{to:"/",children:"Go Home"})]}),t.jsx(k,{images:e})]})},S=I;export{S as default};
