import{e as $,u as o,j as t,r as h,i as W,k as A}from"./index-976255ee.js";import{s as k}from"./SvgCustom-7c763f2c.js";import{B as R}from"./BasicModalWindow-289a3b0b.js";import{F as O,a as T,b as P}from"./formik.esm-f3e939ec.js";import{d as L}from"./dayjs.min-c87bfe77.js";import"./motion-bfca4096.js";import"./zoom-94a1aa0f.js";const Y=async()=>{try{return(await $.get("/products/categories")).data}catch(e){console.error(e)}},E=async()=>{try{return(await $.get("/products")).data}catch(e){console.error(e)}},q=async()=>{try{return(await $.get("/users/current")).data}catch(e){console.error(e)}},U=o.div`
  @media screen and (min-width: 1440px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 68px 0 28px;
  }
`,V=o.h2`
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
`,_=o.form`
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
`,G=o.div`
  width: 100%;
  position: relative;
  @media screen and (min-width: 768px) {
    width: 236px;
  }
`,H=o.input`
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
`,J=o.button`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-30%);
  border: none;
  background: transparent;
  cursor: pointer;
`,K=o.svg`
  fill: ${({theme:e})=>e.colors.white};
`,Q=o.button`
  position: absolute;
  top: 50%;
  right: 35px;
  transform: translateY(-40%);
  border: none;
  background: transparent;
  cursor: pointer;
`,X=o.svg`
  stroke: ${({theme:e})=>e.colors.primary};
`,Z=o.select`
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
`,ee=o.select`
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
`,y=o.option`
  background-color: ${({theme:e})=>e.colors.graphite};
  color: ${({theme:e})=>e.colors.white};
  font-size: 14px;
  font-family: ${({theme:e})=>e.fonts.mainFont};
  text-transform: capitalize;
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`,te=({onSubmit:e,handleClear:l,categories:a,onUpdateCategory:c,onUpdateRecommendation:x,inputValue:m})=>t.jsxs(U,{children:[t.jsx(V,{children:"Products"}),t.jsxs(_,{children:[t.jsxs(G,{children:[t.jsx(H,{type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search"}),t.jsx(J,{type:"submit",onClick:r=>{e(r.target.previousElementSibling.value),r.preventDefault()},children:t.jsx(K,{width:"24",height:"24",children:t.jsx("use",{href:k+"#icon-search"})})}),m&&t.jsx(Q,{type:"submit",onClick:r=>{r.preventDefault()},children:t.jsx(X,{width:"18",height:"18",children:t.jsx("use",{href:k+"#icon-cross"})})})]}),t.jsxs(Z,{name:"category",onChange:r=>c(r.target.value),children:[t.jsx(y,{value:"categories",children:"Categories"}),a.map(r=>t.jsx(y,{value:r,children:r},r))]}),t.jsxs(ee,{name:"recommendation",onChange:r=>x(r.target.value),children:[t.jsx(y,{value:"All",children:"All"}),t.jsx(y,{value:"Recommended",children:"Recommended"}),t.jsx(y,{value:"Not recommended",children:"Not recommended"})]})]})]}),oe="DD/MM/YYYY",re=({productId:e,product:l,calories:a,onClose:c,onSuccessOpen:x})=>{const m=async p=>{try{await $.post("/diary/product",p)}catch(d){console.error("Error fetching product:",d)}},r=async p=>{const{weight:d,calories:u}=p,s=L(Date.now()).format(oe);await m({productId:e,date:s,weight:d,calories:u}),c(),x()};return t.jsx(t.Fragment,{children:t.jsx(O,{initialValues:{product:l,weight:0,calories:0},onSubmit:r,children:({values:p,setFieldValue:d})=>t.jsxs(T,{children:[t.jsx(P,{type:"text",name:"product",disabled:!0}),t.jsx(P,{type:"text",name:"weight",onChange:u=>{const s=u.target.value,i=parseFloat(s);if(!isNaN(i)||s===""){const f=s===""?"":Math.round(i*a/100);d("calories",isNaN(f)?"":f),d("weight",isNaN(i)?"":i)}}}),t.jsx(P,{type:"text",name:"calories",disabled:!0}),t.jsx("button",{type:"submit",children:"Submit"}),t.jsx("button",{type:"button",onClick:c,children:"Cancel"})]})})})},se=()=>t.jsx("div",{children:"Well done"}),ne=o.div`
  width: 335px;

  padding: 16px;
  border: 1px solid ${({theme:e})=>e.colors.formBorder};
  border-radius: 12px;
  background: rgba(239, 237, 232, 0.05);

  @media screen and (min-width: 1440px) {
    width: 405px;
  }
`,ie=o.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 33px;
`,ae=o.div`
display: flex;
justify-content: space-between;
align-items: baseline;
`,ce=o.p`
  font-weight: 700;
  font-size: 12px;
  color: ${({theme:e})=>e.colors.white};
  padding: 5px 7px;
  border-radius: 4px;
  background-color: rgba(239, 237, 232, 0.05);
`,de=o.p`
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
`,le=o.button`
  display: flex;
  gap: 8px;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.29;
  color: ${({theme:e})=>e.colors.primary};
  background-color: transparent;
  border: none;
`,pe=o.div`
  display: flex;
  gap: 16px;
  margin-bottom: 8px;
`,ue=o.p`
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
`,he=o.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 4px 16px;
`,z=o.li`
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
  color: ${({theme:e})=>e.colors.textWhite40};
`,F=o.span`
  color: ${({theme:e})=>e.colors.white};
  text-transform: capitalize;
`,xe=o.svg`
  stroke: ${({theme:e})=>e.colors.primary};
`,me=o.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: ${({theme:e})=>e.colors.lightSecondary};
`,ge=o.svg`
  fill: white;
`,fe=({product:{_id:e,title:l,calories:a,category:c,weight:x,groupBloodNotAllowed:m},blood:r,isRecommend:p})=>{const[d,u]=h.useState(!1),[s,i]=h.useState(!1);function f(){u(!0)}function g(){u(!1)}function w(){i(!0)}function S(){i(!1)}const v=p(r,m);return t.jsxs(ne,{children:[t.jsxs(ie,{children:[t.jsx(ce,{children:"DIET"}),t.jsxs(ae,{children:[t.jsx(de,{children:v}),t.jsxs(le,{onClick:f,children:["Add",t.jsx(xe,{width:"16",height:"16",children:t.jsx("use",{href:k+"#icon-next"})})]})]})]}),t.jsxs(pe,{children:[t.jsx(me,{children:t.jsx(ge,{width:"14",height:"16",children:t.jsx("use",{href:k+"#icon-running"})})}),t.jsx(ue,{children:l})]}),t.jsxs(he,{children:[t.jsxs(z,{children:["calories: ",t.jsx(F,{children:a})]}),t.jsxs(z,{children:["category: ",t.jsx(F,{children:c})]}),t.jsxs(z,{children:["weight: ",t.jsx(F,{children:x})]})]}),d&&t.jsx(R,{isOpen:d,onRequestClose:g,children:t.jsx(re,{product:l,calories:a,productId:e,onClose:g,onSuccessOpen:w})}),s&&t.jsx(R,{isOpen:s,onRequestClose:S,children:t.jsx(se,{})})]})},we=o.ul`
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
`,be=({products:e,isRecommend:l,blood:a})=>t.jsx(we,{className:"movies-list",children:e.map(c=>t.jsx("li",{children:t.jsx(fe,{product:c,isRecommend:l,blood:a})},c._id))}),je=o.div`
 @media screen and (min-width: 1440px) {
    background-image: url('../../img/products-2x.jpg');
    background-repeat: no-repeat;
    background-position: right bottom;
    background-size: cover;
  }
`,ye=()=>{const[e,l]=h.useState([]),[a,c]=h.useState(""),[x,m]=h.useState([]),[r,p]=h.useState(!1),[d,u]=h.useState(""),[s,i]=W(),f=s.get("query")??"",g=s.get("category")??"",w=s.get("recommendation")??"All";h.useEffect(()=>{S()},[]);async function S(){if(!r){p(!0);try{const b=(await E()).products;l(b);const j=await Y();m(j.productsCategories);const C=await q();c(C.blood)}catch(n){console.error(n)}finally{p(!1)}}}const v=(n,b)=>{for(const j in b)if(parseInt(j)===n)return b[j]?"Not recommended":"Recommended"},I=n=>{s.set("category",n),i(s)},B=n=>{s.set("recommendation",n),i(s)},D=n=>{l([]),i({query:n,category:g,recommendation:w})},M=()=>{u("")},N=e.filter(n=>{const b=n.title.toLowerCase().includes(f.toLowerCase()),j=g==="categories"||g===""||n.category===g,C=w==="All"||w===""||v(a,n.groupBloodNotAllowed)===w;return b&&j&&C});return t.jsxs(je,{style:{backgroundImage:"url('../../img/products-2x.jpg')"},children:[r&&t.jsx(t.Fragment,{children:t.jsx(A,{})}),t.jsx(te,{onSubmit:D,handleClear:M,categories:x,onUpdateCategory:I,onUpdateRecommendation:B,inputValue:d}),e.length===0&&t.jsx(t.Fragment,{children:t.jsx("p",{children:"Sorry, no results were found for the product filters you selected. You may want to consider other search options to find the product you want. Our range is wide and you have the opportunity to find more options that suit your needs. Try changing the search parameters."})}),e.length>0&&t.jsx(t.Fragment,{children:t.jsx(be,{products:N,blood:a,isRecommend:v})})]})},Fe=ye;export{Fe as default};
