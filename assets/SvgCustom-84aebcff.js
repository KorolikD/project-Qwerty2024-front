import{u as n,j as t}from"./index-75571770.js";const a="/project-Qwerty2024-front/assets/sprite-fb5c670e.svg",c=n.svg`
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
`,l=({icon:e,size:o,color:s,stroke:$,hover:r,tabSize:i})=>t.jsx(c,{$size:o,$color:s,$stroke:$,$hover:r,$tabSize:i,children:t.jsx("use",{href:`${a}#${e}`})});export{l as S,a as s};
