import{u as n,j as $}from"./index-74324f87.js";import{s as a}from"./sprite-a5e91dfb.js";const h=n.svg`
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
`,m=({icon:e,size:o,color:t,stroke:r,hover:s,tabSize:i})=>$.jsx(h,{$size:o,$color:t,$stroke:r,$hover:s,$tabSize:i,children:$.jsx("use",{href:`${a}#${e}`})});export{m as S};
