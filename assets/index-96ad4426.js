import{e as P,u as o,j as t,L as K,t as V,r as a,p as X,k as Z}from"./index-be2148ce.js";import{s as C,S as Q}from"./SvgCustom-a1c4b9cf.js";import{S as ee,W as te,I as oe,M as re,L as se,B}from"./BasicModalWindow-955e61ad.js";import{F as ne,a as ie,b as M}from"./formik.esm-1740cb3c.js";import{d as ae}from"./dayjs.min-1b515786.js";import"./motion-1440b6c3.js";import"./zoom-ba83ae59.js";const ce=async()=>{try{return(await P.get("/products/categories")).data}catch(e){console.error(e)}},de=async(e,s,l,n)=>{try{return(await P.get("/products",{params:{pageNumber:e,category:s,allowed:l,title:n}})).data}catch(c){console.error(c)}},le=async()=>{try{return(await P.get("/users/current")).data}catch(e){console.error(e)}},pe=o.div`
  @media screen and (min-width: 1440px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 68px 0 28px;
  }
`,ue=o.h2`
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
`,xe=o.form`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  padding-bottom: 40px;
  @media screen and (min-width: 768px) {
    padding-bottom: 32px;
  }
  @media screen and (min-width: 1440px) {
    margin-right: 96px;
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
`,he=o.div`
  width: 100%;
  position: relative;
  @media screen and (min-width: 768px) {
    width: 236px;
  }
`,me=o.input`
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
`,ge=o.button`
  width: 24px;
  height: 24px;
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-40%);
  border: none;
  background: transparent;
  cursor: pointer;
  z-index: 1000;
`,fe=o.svg`
  fill: ${({theme:e})=>e.colors.white};
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-40%);
`,we=o.button`
  width: 24px;
  height: 24px;
  position: absolute;
  top: 50%;
  right: 35px;
  transform: translateY(-40%);
  border: none;
  background: transparent;
  cursor: pointer;
`,be=o.svg`
  stroke: ${({theme:e})=>e.colors.primary};
`,je=o.select`
  display: flex;
  gap: 10px;
  width: 146px;
  padding: 14px;
  font-size: 14px;
  text-transform: capitalize;
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
`,ye=o.select`
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
  appearance: none;
  user-select: none;
  text-indent: -9999px;

  background-color: ${({theme:e})=>e.colors.graphite};
  color: ${({theme:e})=>e.colors.white};
  font-size: 14px;
  font-family: ${({theme:e})=>e.fonts.mainFont};
  text-transform: capitalize;
  &:focus:hover {
    background-color: ${({theme:e})=>e.colors.grey};
  }
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`,ve=({onSubmit:e,onChange:s,handleClear:l,inputValue:n,categories:c,onUpdateCategory:h,onUpdateRecommendation:p})=>t.jsxs(pe,{children:[t.jsx(ue,{children:"Products"}),t.jsxs(xe,{children:[t.jsxs(he,{children:[t.jsx(me,{type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search",value:n,onChange:s}),t.jsx(ge,{type:"submit",onClick:i=>{e(n),i.preventDefault()}}),t.jsx(fe,{width:"24",height:"24",children:t.jsx("use",{href:C+"#icon-search"})}),n&&t.jsx(we,{onClick:l,children:t.jsx(be,{width:"18",height:"18",children:t.jsx("use",{href:C+"#icon-cross"})})})]}),t.jsxs(je,{name:"category",onChange:i=>h(i.target.value),children:[t.jsx(y,{value:"",children:"Categories"}),c.map(i=>t.jsx(y,{value:i,children:i},i))]}),t.jsxs(ye,{name:"recommendation",onChange:i=>p(i.target.value),children:[t.jsx(y,{value:"",children:"All"}),t.jsx(y,{value:"Recommended",children:"Recommended"}),t.jsx(y,{value:"Not recommended",children:"Not recommended"})]})]})]}),Se="DD/MM/YYYY",ke=({productId:e,product:s,calories:l,onСonsumeСalories:n,onClose:c,onSuccessOpen:h})=>{const p=async m=>{try{await P.post("/diary/product",m)}catch(u){console.error("Error fetching product:",u)}},i=async m=>{const{weight:u,calories:g}=m,d=ae(Date.now()).format(Se);await p({productId:e,date:d,weight:u,calories:g}),n(g),c(),h()};return t.jsx(t.Fragment,{children:t.jsx(ne,{initialValues:{product:s,weight:0,calories:0},onSubmit:i,children:({values:m,setFieldValue:u})=>t.jsxs(ie,{children:[t.jsx(M,{type:"text",name:"product",disabled:!0}),t.jsx(M,{type:"text",name:"weight",onChange:g=>{const d=g.target.value,x=parseFloat(d);if(!isNaN(x)||d===""){const f=d===""?"":Math.round(x*l/100);u("calories",isNaN(f)?"":f),u("weight",isNaN(x)?"":x)}}}),t.jsx(M,{type:"text",name:"calories",disabled:!0}),t.jsx("button",{type:"submit",children:"Submit"}),t.jsx("button",{type:"button",onClick:c,children:"Cancel"})]})})})},$e=o.div`
  width: 335px;

  padding: 16px;
  border: 1px solid ${({theme:e})=>e.colors.formBorder};
  border-radius: 12px;
  background: rgba(239, 237, 232, 0.05);

  @media screen and (min-width: 1440px) {
    width: 405px;
  }
`,Ce=o.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 33px;
`,Pe=o.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`,ze=o.p`
  font-weight: 700;
  font-size: 12px;
  color: ${({theme:e})=>e.colors.white};
  padding: 5px 7px;
  border-radius: 4px;
  background-color: rgba(239, 237, 232, 0.05);
`,Ie=o.p`
  font-size: 12px;
  margin-right: 12px;
  color: ${({theme:e})=>e.colors.white};
  position: relative;
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: -24px;
    transform: translateY(-50%);
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background-color: ${({children:e})=>e==="Not recommended"?"red":"green"};
  }
`,Me=o.button`
  display: flex;
  gap: 8px;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.29;
  color: ${({theme:e})=>e.colors.primary};
  background-color: transparent;
  border: none;
`,We=o.div`
  display: flex;
  gap: 16px;
  margin-bottom: 8px;
`,L=o.p`
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
`,Re=o.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 4px 16px;
`,W=o.li`
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
  color: ${({theme:e})=>e.colors.textWhite40};
`,R=o.span`
  color: ${({theme:e})=>e.colors.white};
  text-transform: capitalize;
`,Fe=o.svg`
  stroke: ${({theme:e})=>e.colors.primary};
`,De=o.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: ${({theme:e})=>e.colors.lightSecondary};
`,Ne=o.svg`
  fill: white;
`,Te="/project-Qwerty2024-front/assets/avocado-1x-5dd1adfd.png",Be=({onClose:e,calories:s})=>t.jsxs(ee,{children:[t.jsx(te,{src:Te,alt:"Well done"}),t.jsx(L,{children:"Well done"}),t.jsxs(oe,{children:["Calories: ",t.jsx("span",{children:s})]}),t.jsx(re,{onClick:e,children:"Next product"}),t.jsxs(se,{children:[t.jsx(K,{style:{color:"inherit"},to:"/diary",children:"To the diary"}),t.jsx(Q,{icon:"icon-next",size:"16",color:V.colors.textWhite30})]})]}),Le=({product:{_id:e,title:s,calories:l,category:n,weight:c,groupBloodNotAllowed:h},blood:p,isRecommend:i})=>{const[m,u]=a.useState(!1),[g,d]=a.useState(!1),[x,f]=a.useState(0);function v(){u(!0)}function b(){u(!1)}function w(){d(!0)}function S(){d(!1)}const z=i(p,h);return t.jsxs($e,{children:[t.jsxs(Ce,{children:[t.jsx(ze,{children:"DIET"}),t.jsxs(Pe,{children:[t.jsx(Ie,{children:z}),t.jsxs(Me,{onClick:v,children:["Add",t.jsx(Fe,{width:"16",height:"16",children:t.jsx("use",{href:C+"#icon-next"})})]})]})]}),t.jsxs(We,{children:[t.jsx(De,{children:t.jsx(Ne,{width:"14",height:"16",children:t.jsx("use",{href:C+"#icon-running"})})}),t.jsx(L,{children:s})]}),t.jsxs(Re,{children:[t.jsxs(W,{children:["calories: ",t.jsx(R,{children:l})]}),t.jsxs(W,{children:["category: ",t.jsx(R,{children:n})]}),t.jsxs(W,{children:["weight: ",t.jsx(R,{children:c})]})]}),m&&t.jsx(B,{isOpen:m,onRequestClose:b,children:t.jsx(ke,{product:s,calories:l,productId:e,onСonsumeСalories:f,onClose:b,onSuccessOpen:w})}),g&&t.jsx(B,{isOpen:g,onRequestClose:S,children:t.jsx(Be,{onClose:S,calories:x})})]})},Ee=o.ul`
  height: 500px;
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
`,Oe=({products:e,isRecommend:s,blood:l})=>t.jsx(Ee,{className:"movies-list",children:e.map((n,c)=>t.jsx("li",{children:t.jsx(Le,{product:n,isRecommend:s,blood:l})},n._id+c))}),Ye="/project-Qwerty2024-front/assets/products-1x-ef677aa9.jpg",Ae=o.div`
  padding-bottom: 68px;
  @media screen and (min-width: 1440px) {
    margin-right: -96px;
    background-image: url(${Ye});
    background-repeat: no-repeat;
    background-position: right;
  }
`,qe=()=>{const[e,s]=X(),l=e.get("query")??"",n=e.get("category")??"",c=e.get("recommendation")??"All",[h,p]=a.useState([]),[i,m]=a.useState(""),[u,g]=a.useState([]),[d,x]=a.useState(!1),[f,v]=a.useState(""),[b,w]=a.useState(1),[S,z]=a.useState(!0),[F,E]=a.useState(n),[D,I]=a.useState(c),[k,N]=a.useState(l);a.useEffect(()=>(window.addEventListener("scroll",T),()=>window.removeEventListener("scroll",T)),[]),a.useEffect(()=>{O()},[b,F,D,k]);async function O(){if(!d){x(!0);try{const r=await de(b,F,D,k),j=r.products;console.log(j),p(J=>[...J,...j]);const $=await ce();g($.productsCategories);const G=await le();m(G.blood),z(r.page<r.totalPages)}catch(r){console.error(r)}finally{x(!1)}}}const Y=(r,j)=>{for(const $ in j)if(parseInt($)===r)return j[$]?"Recommended":"Not recommended"},A=r=>{e.set("category",r),s(e),E(r),w(1),p([])},q=r=>{e.set("recommended",r),s(e),I(r==="Recommended"?!0:r==="Not recommended"?!1:""),w(1),p([])},H=r=>{r.preventDefault(),v(r.target.value)},U=r=>{r.preventDefault(),v(""),N(""),k&&p([])},_=r=>{k!==r&&(N(r),w(1),console.log("submit reset"),p([]),e.set("query",r),s({query:r,category:n,recommended:c}))},T=()=>{!d&&S&&window.innerHeight+document.documentElement.scrollTop>=document.documentElement.offsetHeight-20&&w(r=>r+1)};return t.jsxs(Ae,{style:{backgroundImage:"url('../../img/products-2x.jpg')"},children:[d&&t.jsx(t.Fragment,{children:t.jsx(Z,{})}),t.jsx(ve,{onSubmit:_,onChange:H,handleClear:U,inputValue:f,categories:u,onUpdateCategory:A,onUpdateRecommendation:q}),!d&&h.length===0&&t.jsx(t.Fragment,{children:t.jsx("p",{children:"Sorry, no results were found for the product filters you selected. You may want to consider other search options to find the product you want. Our range is wide and you have the opportunity to find more options that suit your needs. Try changing the search parameters."})}),h.length>0&&t.jsx(t.Fragment,{children:t.jsx(Oe,{products:h,blood:i,isRecommend:Y})})]})},Xe=qe;export{Xe as default};
