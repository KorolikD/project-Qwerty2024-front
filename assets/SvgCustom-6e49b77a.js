import{u as a,j as t}from"./index-4e8bc0a4.js";const n="/project-Qwerty2024-front/assets/sprite-8afa6a4b.svg",c=a.svg`
  stroke: ${e=>e.$color||e.$stroke?e.$color||e.$stroke:e.theme.colors.secondary};
  fill: ${e=>e.$color?e.$color:"none"};
  width: ${e=>`${e.$size}px`};
  height: ${e=>`${e.$size}px`};
  transition:
    fill 350ms ease,
    stroke 350ms ease;
  &:hover {
    stroke: ${e=>e.$hover};
    fill: ${e=>e.$color?e.$hover:"none"};
  }
  @media screen and (min-width: 768px) {
    width: ${e=>`${e.$tabSize}px`};
    height: ${e=>`${e.$tabSize}px`};
  }
`,l=({icon:e,size:o,color:s,stroke:$,hover:r,tabSize:i})=>t.jsx(c,{$size:o,$color:s,$stroke:$,$hover:r,$tabSize:i,children:t.jsx("use",{href:`${n}#${e}`})});export{l as S,n as s};
