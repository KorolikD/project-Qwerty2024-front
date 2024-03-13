import{u as i,r as n,j as c}from"./index-e5a1b9cd.js";const d=i.div`
  position: absolute;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: right bottom;
  z-index: -1;
  top: 241px;
  left: 107px;
  right: 0;
  bottom: 0;
  background-image: url(${t=>t.image}),
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
`,g="/project-Qwerty2024-front/assets/hero-1x-71f27de9.jpg",p="/project-Qwerty2024-front/assets/hero-2x-84c9a84b.jpg",b="/project-Qwerty2024-front/assets/hero-mob-2x-29ca5e9d.jpg",x="/project-Qwerty2024-front/assets/hero-mob-1x-d4b8c906.jpg",m="/project-Qwerty2024-front/assets/hero-tab-2x-41d238e0.jpg",u="/project-Qwerty2024-front/assets/hero-tab-1x-b3fdce1e.jpg",f=()=>{const[t,o]=n.useState(""),e={desktop:g,desktop2x:p,tablet:u,tablet2x:m,mobile:x,mobile2x:b};return n.useEffect(()=>{const r=()=>{const a=window.devicePixelRatio||1,s=window.innerWidth;s>=1024?o(a>=2?e.desktop2x:e.desktop):s>=768?o(a>=2?e.tablet2x:e.tablet):o(a>=2?e.mobile2x:e.mobile)};return r(),window.addEventListener("resize",r),()=>{window.removeEventListener("resize",r)}},[e]),c.jsx(d,{image:t})};export{f as R};
