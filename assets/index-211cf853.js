import{e as z,u as o,j as t,L as K,t as V,r as i,p as X,k as Z}from"./index-7bc65556.js";import{s as C,S as Q}from"./SvgCustom-0f9a1f94.js";import{S as ee,W as te,I as oe,M as re,L as se,B}from"./BasicModalWindow-fa18006f.js";import{F as ne,a as ie,b as M}from"./formik.esm-426deab0.js";import{d as ae}from"./dayjs.min-fed3e19a.js";import{p as ce}from"./hero-2x-31d4f1ba.js";import"./motion-7b8a3993.js";import"./zoom-239256d9.js";const de=async()=>{try{return(await z.get("/products/categories")).data}catch(e){console.error(e)}},le=async(e,s,l,a)=>{try{return(await z.get("/products",{params:{pageNumber:e,category:s,allowed:l,title:a}})).data}catch(d){console.error(d)}},pe=async()=>{try{return(await z.get("/users/current")).data}catch(e){console.error(e)}},xe=o.div`
  @media screen and (min-width: 1440px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 68px 0 28px;
  }
`,he=o.h2`
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
`,ue=o.form`
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
`,me=o.div`
  width: 100%;
  position: relative;
  @media screen and (min-width: 768px) {
    width: 236px;
  }
`,ge=o.input`
  width: 100%;
  height: 100%;
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
`,fe=o.button`
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
`,we=o.svg`
  fill: ${({theme:e})=>e.colors.white};
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-40%);
`,be=o.button`
  width: 24px;
  height: 24px;
  position: absolute;
  top: 50%;
  right: 35px;
  transform: translateY(-40%);
  border: none;
  background: transparent;
  cursor: pointer;
`,je=o.svg`
  stroke: ${({theme:e})=>e.colors.primary};
`,ye=o.select`
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
`,ve=o.select`
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
`,Se=({onSubmit:e,onChange:s,handleClear:l,inputValue:a,categories:d,onUpdateCategory:u,onUpdateRecommendation:p})=>t.jsxs(xe,{children:[t.jsx(he,{children:"Products"}),t.jsxs(ue,{children:[t.jsxs(me,{children:[t.jsx(ge,{type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search",value:a,onChange:s}),t.jsx(fe,{type:"submit",onClick:n=>{e(a),n.preventDefault()}}),t.jsx(we,{width:"24",height:"24",children:t.jsx("use",{href:C+"#icon-search"})}),a&&t.jsx(be,{onClick:l,children:t.jsx(je,{width:"18",height:"18",children:t.jsx("use",{href:C+"#icon-cross"})})})]}),t.jsxs(ye,{name:"category",onChange:n=>u(n.target.value),children:[t.jsx(y,{value:"",children:"Categories"}),d.map(n=>t.jsx(y,{value:n,children:n},n))]}),t.jsxs(ve,{name:"recommendation",onChange:n=>p(n.target.value),children:[t.jsx(y,{value:"",children:"All"}),t.jsx(y,{value:"Recommended",children:"Recommended"}),t.jsx(y,{value:"Not recommended",children:"Not recommended"})]})]})]}),$e="DD/MM/YYYY",ke=({productId:e,product:s,calories:l,onСonsumeСalories:a,onClose:d,onSuccessOpen:u})=>{const p=async m=>{try{await z.post("/diary/product",m)}catch(x){console.error("Error fetching product:",x)}},n=async m=>{const{weight:x,calories:g}=m,c=ae(Date.now()).format($e);await p({productId:e,date:c,weight:x,calories:g}),a(g),d(),u()};return t.jsx(t.Fragment,{children:t.jsx(ne,{initialValues:{product:s,weight:0,calories:0},onSubmit:n,children:({values:m,setFieldValue:x})=>t.jsxs(ie,{children:[t.jsx(M,{type:"text",name:"product",disabled:!0}),t.jsx(M,{type:"text",name:"weight",onChange:g=>{const c=g.target.value,h=parseFloat(c);if(!isNaN(h)||c===""){const f=c===""?"":Math.round(h*l/100);x("calories",isNaN(f)?"":f),x("weight",isNaN(h)?"":h)}}}),t.jsx(M,{type:"text",name:"calories",disabled:!0}),t.jsx("button",{type:"submit",children:"Submit"}),t.jsx("button",{type:"button",onClick:d,children:"Cancel"})]})})})},Ce=o.div`
  width: 335px;

  padding: 16px;
  border: 1px solid ${({theme:e})=>e.colors.formBorder};
  border-radius: 12px;
  background: rgba(239, 237, 232, 0.05);

  @media screen and (min-width: 1440px) {
    width: 405px;
  }
`,ze=o.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 33px;
`,Pe=o.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`,We=o.p`
  font-weight: 700;
  font-size: 12px;
  color: ${({theme:e})=>e.colors.white};
  padding: 5px 7px;
  border-radius: 4px;
  background-color: rgba(239, 237, 232, 0.05);
`,Me=o.p`
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
`,Fe=o.button`
  display: flex;
  gap: 8px;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.29;
  color: ${({theme:e})=>e.colors.primary};
  background-color: transparent;
  border: none;
`,Ie=o.div`
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
`,F=o.li`
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
  color: ${({theme:e})=>e.colors.textWhite40};
`,I=o.span`
  color: ${({theme:e})=>e.colors.white};
  text-transform: capitalize;
`,Ne=o.svg`
  stroke: ${({theme:e})=>e.colors.primary};
`,De=o.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: ${({theme:e})=>e.colors.lightSecondary};
`,Te=o.svg`
  fill: white;
`,Be="/project-Qwerty2024-front/assets/avocado-1x-5dd1adfd.png",Le=({onClose:e,calories:s})=>t.jsxs(ee,{children:[t.jsx(te,{src:Be,alt:"Well done"}),t.jsx(L,{children:"Well done"}),t.jsxs(oe,{children:["Calories: ",t.jsx("span",{children:s})]}),t.jsx(re,{onClick:e,children:"Next product"}),t.jsxs(se,{children:[t.jsx(K,{style:{color:"inherit"},to:"/diary",children:"To the diary"}),t.jsx(Q,{icon:"icon-next",size:"16",color:V.colors.textWhite30})]})]}),Ee=({product:{_id:e,title:s,calories:l,category:a,weight:d,groupBloodNotAllowed:u},blood:p,isRecommend:n})=>{const[m,x]=i.useState(!1),[g,c]=i.useState(!1),[h,f]=i.useState(0);function v(){x(!0)}function b(){x(!1)}function w(){c(!0)}function S(){c(!1)}const P=n(p,u);return t.jsxs(Ce,{children:[t.jsxs(ze,{children:[t.jsx(We,{children:"DIET"}),t.jsxs(Pe,{children:[t.jsx(Me,{children:P}),t.jsxs(Fe,{onClick:v,children:["Add",t.jsx(Ne,{width:"16",height:"16",children:t.jsx("use",{href:C+"#icon-next"})})]})]})]}),t.jsxs(Ie,{children:[t.jsx(De,{children:t.jsx(Te,{width:"14",height:"16",children:t.jsx("use",{href:C+"#icon-running"})})}),t.jsx(L,{children:s})]}),t.jsxs(Re,{children:[t.jsxs(F,{children:["calories: ",t.jsx(I,{children:l})]}),t.jsxs(F,{children:["category: ",t.jsx(I,{children:a})]}),t.jsxs(F,{children:["weight: ",t.jsx(I,{children:d})]})]}),m&&t.jsx(B,{isOpen:m,onRequestClose:b,children:t.jsx(ke,{product:s,calories:l,productId:e,onСonsumeСalories:f,onClose:b,onSuccessOpen:w})}),g&&t.jsx(B,{isOpen:g,onRequestClose:S,children:t.jsx(Le,{onClose:S,calories:h})})]})},Ae=o.ul`
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
`,Oe=({products:e,isRecommend:s,blood:l})=>t.jsx(Ae,{className:"movies-list",children:e.map((a,d)=>t.jsx("li",{children:t.jsx(Ee,{product:a,isRecommend:s,blood:l})},a._id+d))}),Ye="/project-Qwerty2024-front/assets/products-1x-ef677aa9.jpg",qe=o.div`
  padding-bottom: 68px;
  @media screen and (min-width: 1440px) {
    height: 716px;
    margin-right: -96px;
    background-image: url(${Ye});
    background-repeat: no-repeat;
    background-position: right;
  };
  @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${ce});
    }
`,He=o.div`
  padding-top: 24px;
  font-size: 14px;
  line-height: 1.5;
  color: ${({theme:e})=>e.colors.textWhite30};
  @media screen and (min-width: 768px) {
    padding-top: 100px;
    font-size: 16px;
  }
  @media screen and (min-width: 1440px) {
    width: 580px;
    padding-top: 104px;
  }
`,Ue=o.span`
  color: ${({theme:e})=>e.colors.primary};
`,_e=o.p`
  padding-top: 16px;
  font-size: 14px;
  color: ${({theme:e})=>e.colors.primary};
  line-height: 1.5;
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`,Ge=()=>t.jsxs(He,{children:[t.jsxs("p",{children:[t.jsx(Ue,{children:"Sorry, no results were found "}),"for the product filters you selected. You may want to consider other search options to find the product you want. Our range is wide and you have the opportunity to find more options that suit your needs."]}),t.jsx(_e,{children:"Try changing the search parameters."})]}),Je=()=>{const[e,s]=X(),l=e.get("query")??"",a=e.get("category")??"",d=e.get("recommendation")??"All",[u,p]=i.useState([]),[n,m]=i.useState(""),[x,g]=i.useState([]),[c,h]=i.useState(!1),[f,v]=i.useState(""),[b,w]=i.useState(1),[S,P]=i.useState(!0),[R,E]=i.useState(a),[N,W]=i.useState(d),[$,D]=i.useState(l);i.useEffect(()=>(window.addEventListener("scroll",T),()=>window.removeEventListener("scroll",T)),[]),i.useEffect(()=>{A()},[b,R,N,$]);async function A(){if(!c){h(!0);try{const r=await le(b,R,N,$),j=r.products;p(J=>[...J,...j]);const k=await de();g(k.productsCategories);const G=await pe();m(G.blood),P(r.page<r.totalPages&&j.length>0)}catch(r){console.error(r)}finally{h(!1)}}}const O=(r,j)=>{for(const k in j)if(parseInt(k)===r)return j[k]?"Recommended":"Not recommended"},Y=r=>{E(r),w(1),p([]),r===""?(e.delete("category"),s(e)):(e.set("category",r),s(e))},q=r=>{r==="Recommended"?(W(!0),e.set("recommended",r),s(e)):r==="Not recommended"?(W(!1),e.set("recommended",r),s(e)):(W(""),e.delete("recommended"),s(e)),w(1),p([])},H=r=>{r.preventDefault(),v(r.target.value)},U=r=>{r.preventDefault(),v(""),D(""),$&&p([]),e.delete("query"),s(e)},_=r=>{$!==r&&(D(r),w(1),p([]),e.set("query",r),s(e)),r===""&&(e.delete("query"),s(e))},T=()=>{!c&&S&&window.innerHeight+document.documentElement.scrollTop>=document.documentElement.offsetHeight-200&&w(r=>r+1)};return t.jsxs(qe,{children:[c&&t.jsx(t.Fragment,{children:t.jsx(Z,{})}),t.jsx(Se,{onSubmit:_,onChange:H,handleClear:U,inputValue:f,categories:x,onUpdateCategory:Y,onUpdateRecommendation:q}),!c&&u.length>0&&t.jsx(t.Fragment,{children:t.jsx(Oe,{products:u,blood:n,isRecommend:O})}),!c&&u.length===0&&t.jsx(t.Fragment,{children:t.jsx(Ge,{})})]})},rt=Je;export{rt as default};
