import{u as i,L as x,r as a,j as s}from"./index-279a04c8.js";const f=i.div`
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
`,u=i.h1`
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
`,k=i.p`
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
`,j=i(x)`
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
`,d=i.div`
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
`,g="/project-Qwerty2024-front/assets/hero-1x-71f27de9.jpg",h="/project-Qwerty2024-front/assets/hero-2x-84c9a84b.jpg",m="/project-Qwerty2024-front/assets/hero-mob-2x-29ca5e9d.jpg",c="/project-Qwerty2024-front/assets/hero-mob-1x-d4b8c906.jpg",l="/project-Qwerty2024-front/assets/hero-tab-2x-41d238e0.jpg",b="/project-Qwerty2024-front/assets/hero-tab-1x-b3fdce1e.jpg",z=()=>{const[e,o]=a.useState(""),t={desktop:g,desktop2x:h,tablet:b,tablet2x:l,mobile:c,mobile2x:m};return a.useEffect(()=>{const n=()=>{const p=window.devicePixelRatio||1,r=window.innerWidth;r>=1024?o(p>=2?t.desktop2x:t.desktop):r>=768?o(p>=2?t.tablet2x:t.tablet):o(p>=2?t.mobile2x:t.mobile)};return n(),window.addEventListener("resize",n),()=>{window.removeEventListener("resize",n)}},[t]),s.jsx(d,{image:e})};export{j as B,f as I,k as P,z as R,u as T};
