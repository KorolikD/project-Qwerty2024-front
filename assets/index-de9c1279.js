import{e as $,u as o,j as t,r as p,i as L,k as A}from"./index-1e9fb2d9.js";import{s as w}from"./sprite-3811d627.js";const N=async()=>{try{return(await $.get("/products/categories")).data}catch(e){console.error(e)}},T=async()=>{try{return(await $.get("/products")).data}catch(e){console.error(e)}},E=async()=>{try{return(await $.get("/users/current")).data}catch(e){console.error(e)}},D=o.div`
  @media screen and (min-width: 1440px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 68px 0 28px;
  }
`,Y=o.h2`
  font-weight: 700;
  font-size: 24px;
  padding: 40px 0;
  @media screen and (min-width: 768px) {
    font-size: 32px;
    padding: 72px 0 32px;
  }
  @media screen and (min-width: 1440px) {
    padding: 0;
  }
`,q=o.form`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  padding-bottom: 40px;
  @media screen and (min-width: 768px) {
    padding-bottom: 32px;
  }
  @media screen and (min-width: 1440px) {
    padding: 0;
    position: relative;
    &::before {
      content: 'Filters';
      color: ${({theme:e})=>e.colors.textWhite50};
      font-size: 14px;
      position: absolute;
      top: -50%;
      left: 94%;
    }
  }
`,O=o.div`
  width: 100%;
  position: relative;
  @media screen and (min-width: 768px) {
    width: 236px;
  }
`,U=o.input`
  width: 100%;
  padding: 14px;
  font-size: 14px;
  color: ${({theme:e})=>e.colors.white};
  background: transparent;
  outline: none;
  border: 1px solid ${({theme:e})=>e.colors.formBorder};
  border-radius: 12px;

  &:focus:focus-visible {
    border-color: ${({theme:e})=>e.colors.primary};
  }
  &::placeholder {
    color: ${({theme:e})=>e.colors.white};
  }
  @media screen and (min-width: 768px) {
    width: 236px;
    font-size: 16px;
  }
`,V=o.button`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-30%);
  border: none;
  background: transparent;
  cursor: pointer;
`,_=o.svg`
  fill: ${({theme:e})=>e.colors.white};
`,G=o.button`
  position: absolute;
  top: 50%;
  right: 35px;
  transform: translateY(-40%);
  border: none;
  background: transparent;
  cursor: pointer;
`,H=o.svg`
  stroke: ${({theme:e})=>e.colors.primary};
`,J=o.select`
  display: flex;
  gap: 10px;
  width: 146px;
  padding: 14px;
  font-size: 14px;
  color: ${({theme:e})=>e.colors.white};
  background: transparent;
  outline: none;
  border: 1px solid ${({theme:e})=>e.colors.formBorder};
  border-radius: 12px;
  &:focus:focus-visible {
    border-color: ${({theme:e})=>e.colors.primary};
  }
  @media screen and (min-width: 768px) {
    width: 192px;
    font-size: 16px;
  }
`,K=o.select`
  width: 173px;
  padding: 14px;
  font-size: 14px;
  color: ${({theme:e})=>e.colors.white};
  background: transparent;
  outline: none;
  border: 1px solid ${({theme:e})=>e.colors.formBorder};
  border-radius: 12px;
  &:focus:focus-visible {
    border-color: ${({theme:e})=>e.colors.primary};
  }
  @media screen and (min-width: 768px) {
    width: 204px;
    font-size: 16px;
  }
`,h=o.option`
  background-color: ${({theme:e})=>e.colors.graphite};
  color: ${({theme:e})=>e.colors.white};
  font-size: 14px;
  font-family: ${({theme:e})=>e.fonts.mainFont};
  text-transform: capitalize;
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`,M=({onSubmit:e,handleClear:a,categories:n,onUpdateCategory:i,onUpdateRecommendation:x,inputValue:u})=>t.jsxs(D,{children:[t.jsx(Y,{children:"Products"}),t.jsxs(q,{children:[t.jsxs(O,{children:[t.jsx(U,{type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search"}),t.jsx(V,{type:"submit",onClick:r=>{e(r.target.previousElementSibling.value),r.preventDefault()},children:t.jsx(_,{width:"24",height:"24",children:t.jsx("use",{href:w+"#icon-search"})})}),u&&t.jsx(G,{type:"submit",onClick:r=>{r.preventDefault()},children:t.jsx(H,{width:"18",height:"18",children:t.jsx("use",{href:w+"#icon-cross"})})})]}),t.jsxs(J,{name:"category",onChange:r=>i(r.target.value),children:[t.jsx(h,{value:"categories",children:"Categories"}),n.map(r=>t.jsx(h,{value:r,children:r},r))]}),t.jsxs(K,{name:"recommendation",onChange:r=>x(r.target.value),children:[t.jsx(h,{value:"All",children:"All"}),t.jsx(h,{value:"Recommended",children:"Recommended"}),t.jsx(h,{value:"Not recommended",children:"Not recommended"})]})]})]}),Q=o.div`
  width: 335px;

  padding: 16px;
  border: 1px solid ${({theme:e})=>e.colors.formBorder};
  border-radius: 12px;
  background: rgba(239, 237, 232, 0.05);

  @media screen and (min-width: 1440px) {
    width: 405px;
  }
`,X=o.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 33px;
`,Z=o.div`
display: flex;
justify-content: space-between;
align-items: baseline;
`,ee=o.p`
  font-weight: 700;
  font-size: 12px;
  color: ${({theme:e})=>e.colors.white};
  padding: 5px 7px;
  border-radius: 4px;
  background-color: rgba(239, 237, 232, 0.05);
`,te=o.p`
  font-size: 12px;
  margin-right: 12px;
  color: ${({theme:e})=>e.colors.white};
  position: relative;
  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: -24px;
    transform: translateY(-50%);
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background-color: ${({children:e})=>e==="Not recommended"?"red":"green"};
  }
`,oe=o.button`
  display: flex;
  gap: 8px;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.29;
  color: ${({theme:e})=>e.colors.primary};
  background-color: transparent;
  border: none;
`,re=o.div`
  display: flex;
  gap: 16px;
  margin-bottom: 8px;
`,se=o.p`
  font-weight: 400;
  font-size: 20px;
  line-height: 1.2;
  color: ${({theme:e})=>e.colors.white};
  &::first-letter {
    text-transform: uppercase;
  }
  display: block;
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`,ne=o.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 4px 16px;
`,y=o.li`
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
  color: ${({theme:e})=>e.colors.textWhite40};
`,v=o.span`
  color: ${({theme:e})=>e.colors.white};
  text-transform: capitalize;
`,ie=o.svg`
  stroke: ${({theme:e})=>e.colors.primary};
`,ae=o.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: ${({theme:e})=>e.colors.lightSecondary};
`,ce=o.svg`
  fill: white;
`,de=({product:{title:e,calories:a,category:n,weight:i,groupBloodNotAllowed:x},blood:u,isRecommend:r})=>{const m=r(u,x);return t.jsxs(Q,{children:[t.jsxs(X,{children:[t.jsx(ee,{children:"DIET"}),t.jsxs(Z,{children:[t.jsx(te,{children:m}),t.jsxs(oe,{children:["Add",t.jsx(ie,{width:"16",height:"16",children:t.jsx("use",{href:w+"#icon-next"})})]})]})]}),t.jsxs(re,{children:[t.jsx(ae,{children:t.jsx(ce,{width:"14",height:"16",children:t.jsx("use",{href:w+"#icon-running"})})}),t.jsx(se,{children:e})]}),t.jsxs(ne,{children:[t.jsxs(y,{children:["calories: ",t.jsx(v,{children:a})]}),t.jsxs(y,{children:["category: ",t.jsx(v,{children:n})]}),t.jsxs(y,{children:["weight: ",t.jsx(v,{children:i})]})]})]})},le=o.ul`
  height: 500px;
  margin-bottom: 68px;
  display: flex;
  gap: 20px;
  flex-wrap: wrap;

  @media screen and (min-width: 768px) {
    height: 500px;
    row-gap: 32px;
    column-gap: 16px;
    overflow-y: auto;
    &::-webkit-scrollbar {
      width: 8px;
    }

    &::-webkit-scrollbar-track {
      border-radius: 12px;
      background: rgba(239, 237, 232, 0.1);
    }

    &::-webkit-scrollbar-thumb {
      background: linear-gradient(
        90deg,
        #ef8964 0%,
        #ef8964 30%,
        #ef8964 50%,
        #ef8964 70%,
        #ef8964 100%
      );
      border-radius: 12px;
    }
  }

  @media screen and (min-width: 1440px) {
    width: 850px;
  }
`,pe=({products:e,isRecommend:a,blood:n})=>t.jsx(le,{className:"movies-list",children:e.map(i=>t.jsx("li",{children:t.jsx(de,{product:i,isRecommend:a,blood:n})},i._id))}),xe=o.div`
 @media screen and (min-width: 1440px) {
    background-image: url('../../img/products-2x.jpg');
    background-repeat: no-repeat;
    background-position: right bottom;
    background-size: cover;
  }
`,ue=()=>{const[e,a]=p.useState([]),[n,i]=p.useState(""),[x,u]=p.useState([]),[r,m]=p.useState(!1),[k,C]=p.useState(""),[c,b]=L(),z=c.get("query")??"",g=c.get("category")??"",f=c.get("recommendation")??"All";p.useEffect(()=>{P()},[]);async function P(){if(!r){m(!0);try{const d=(await T()).products;a(d);const l=await N();u(l.productsCategories);const j=await E();i(j.blood)}catch(s){console.error(s)}finally{m(!1)}}}const S=(s,d)=>{for(const l in d)if(parseInt(l)===s)return d[l]?"Not recommended":"Recommended"},R=s=>{c.set("category",s),b(c)},B=s=>{c.set("recommendation",s),b(c)},I=s=>{a([]),b({query:s,category:g,recommendation:f})},F=()=>{C("")};console.log(k);const W=e.filter(s=>{const d=s.title.toLowerCase().includes(z.toLowerCase()),l=g==="categories"||g===""||s.category===g,j=f==="All"||f===""||S(n,s.groupBloodNotAllowed)===f;return d&&l&&j});return t.jsxs(xe,{style:{backgroundImage:"url('../../img/products-2x.jpg')"},children:[r&&t.jsx(t.Fragment,{children:t.jsx(A,{})}),t.jsx(M,{onSubmit:I,handleClear:F,categories:x,onUpdateCategory:R,onUpdateRecommendation:B,inputValue:k}),e.length===0&&t.jsx(t.Fragment,{children:t.jsx("p",{children:"Sorry, no results were found for the product filters you selected. You may want to consider other search options to find the product you want. Our range is wide and you have the opportunity to find more options that suit your needs. Try changing the search parameters."})}),e.length>0&&t.jsx(t.Fragment,{children:t.jsx(pe,{products:W,blood:n,isRecommend:S})})]})},ge=ue;export{ge as default};
