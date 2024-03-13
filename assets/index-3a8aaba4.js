import{e as C,u as o,j as t,L,t as T,r as h,p as A,o as O}from"./index-a20b40e4.js";import{s as $,S as Y}from"./SvgCustom-22b5e265.js";import{S as E,W as q,I as U,M as V,L as _,B as M}from"./BasicModalWindow-1188a28b.js";import{F as Q,a as G,b as I}from"./formik.esm-6a231009.js";import{d as H}from"./dayjs.min-3f8f86d5.js";import"./motion-aa428c4f.js";import"./zoom-9d43db46.js";const J=async()=>{try{return(await C.get("/products/categories")).data}catch(e){console.error(e)}},K=async()=>{try{return(await C.get("/products")).data}catch(e){console.error(e)}},X=async()=>{try{return(await C.get("/users/current")).data}catch(e){console.error(e)}},Z=o.div`
  @media screen and (min-width: 1440px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 68px 0 28px;
  }
`,ee=o.h2`
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
`,te=o.form`
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
`,oe=o.div`
  width: 100%;
  position: relative;
  @media screen and (min-width: 768px) {
    width: 236px;
  }
`,re=o.input`
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
`,se=o.button`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-30%);
  border: none;
  background: transparent;
  cursor: pointer;
`,ne=o.svg`
  fill: ${({theme:e})=>e.colors.white};
`,ie=o.button`
  position: absolute;
  top: 50%;
  right: 35px;
  transform: translateY(-40%);
  border: none;
  background: transparent;
  cursor: pointer;
`,ae=o.svg`
  stroke: ${({theme:e})=>e.colors.primary};
`,ce=o.select`
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
`,de=o.select`
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
`,le=({onSubmit:e,handleClear:i,categories:c,onUpdateCategory:l,onUpdateRecommendation:m,inputValue:g})=>t.jsxs(Z,{children:[t.jsx(ee,{children:"Products"}),t.jsxs(te,{children:[t.jsxs(oe,{children:[t.jsx(re,{type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search"}),t.jsx(se,{type:"submit",onClick:r=>{e(r.target.previousElementSibling.value),r.preventDefault()},children:t.jsx(ne,{width:"24",height:"24",children:t.jsx("use",{href:$+"#icon-search"})})}),g&&t.jsx(ie,{type:"submit",onClick:r=>{r.preventDefault()},children:t.jsx(ae,{width:"18",height:"18",children:t.jsx("use",{href:$+"#icon-cross"})})})]}),t.jsxs(ce,{name:"category",onChange:r=>l(r.target.value),children:[t.jsx(y,{value:"categories",children:"Categories"}),c.map(r=>t.jsx(y,{value:r,children:r},r))]}),t.jsxs(de,{name:"recommendation",onChange:r=>m(r.target.value),children:[t.jsx(y,{value:"All",children:"All"}),t.jsx(y,{value:"Recommended",children:"Recommended"}),t.jsx(y,{value:"Not recommended",children:"Not recommended"})]})]})]}),pe="DD/MM/YYYY",ue=({productId:e,product:i,calories:c,onСonsumeСalories:l,onClose:m,onSuccessOpen:g})=>{const r=async p=>{try{await C.post("/diary/product",p)}catch(d){console.error("Error fetching product:",d)}},f=async p=>{const{weight:d,calories:s}=p,a=H(Date.now()).format(pe);await r({productId:e,date:a,weight:d,calories:s}),l(s),m(),g()};return t.jsx(t.Fragment,{children:t.jsx(Q,{initialValues:{product:i,weight:0,calories:0},onSubmit:f,children:({values:p,setFieldValue:d})=>t.jsxs(G,{children:[t.jsx(I,{type:"text",name:"product",disabled:!0}),t.jsx(I,{type:"text",name:"weight",onChange:s=>{const a=s.target.value,u=parseFloat(a);if(!isNaN(u)||a===""){const x=a===""?"":Math.round(u*c/100);d("calories",isNaN(x)?"":x),d("weight",isNaN(u)?"":u)}}}),t.jsx(I,{type:"text",name:"calories",disabled:!0}),t.jsx("button",{type:"submit",children:"Submit"}),t.jsx("button",{type:"button",onClick:m,children:"Cancel"})]})})})},xe=o.div`
  width: 335px;

  padding: 16px;
  border: 1px solid ${({theme:e})=>e.colors.formBorder};
  border-radius: 12px;
  background: rgba(239, 237, 232, 0.05);

  @media screen and (min-width: 1440px) {
    width: 405px;
  }
`,he=o.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 33px;
`,me=o.div`
display: flex;
justify-content: space-between;
align-items: baseline;
`,ge=o.p`
  font-weight: 700;
  font-size: 12px;
  color: ${({theme:e})=>e.colors.white};
  padding: 5px 7px;
  border-radius: 4px;
  background-color: rgba(239, 237, 232, 0.05);
`,fe=o.p`
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
`,we=o.button`
  display: flex;
  gap: 8px;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.29;
  color: ${({theme:e})=>e.colors.primary};
  background-color: transparent;
  border: none;
`,be=o.div`
  display: flex;
  gap: 16px;
  margin-bottom: 8px;
`,R=o.p`
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
`,je=o.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 4px 16px;
`,W=o.li`
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
  color: ${({theme:e})=>e.colors.textWhite40};
`,F=o.span`
  color: ${({theme:e})=>e.colors.white};
  text-transform: capitalize;
`,ye=o.svg`
  stroke: ${({theme:e})=>e.colors.primary};
`,ve=o.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: ${({theme:e})=>e.colors.lightSecondary};
`,Se=o.svg`
  fill: white;
`,ke="/project-Qwerty2024-front/assets/avocado-1x-5dd1adfd.png",$e=({onClose:e,calories:i})=>t.jsxs(E,{children:[t.jsx(q,{src:ke,alt:"Well done"}),t.jsx(R,{children:"Well done"}),t.jsxs(U,{children:["Calories: ",t.jsx("span",{children:i})]}),t.jsx(V,{onClick:e,children:"Next product"}),t.jsxs(_,{children:[t.jsx(L,{style:{color:"inherit"},to:"/diary",children:"To the diary"}),t.jsx(Y,{icon:"icon-next",size:"16",color:T.colors.textWhite30})]})]}),Ce=({product:{_id:e,title:i,calories:c,category:l,weight:m,groupBloodNotAllowed:g},blood:r,isRecommend:f})=>{const[p,d]=h.useState(!1),[s,a]=h.useState(!1),[u,x]=h.useState(0);function w(){d(!0)}function v(){d(!1)}function S(){a(!0)}function k(){a(!1)}const P=f(r,g);return t.jsxs(xe,{children:[t.jsxs(he,{children:[t.jsx(ge,{children:"DIET"}),t.jsxs(me,{children:[t.jsx(fe,{children:P}),t.jsxs(we,{onClick:w,children:["Add",t.jsx(ye,{width:"16",height:"16",children:t.jsx("use",{href:$+"#icon-next"})})]})]})]}),t.jsxs(be,{children:[t.jsx(ve,{children:t.jsx(Se,{width:"14",height:"16",children:t.jsx("use",{href:$+"#icon-running"})})}),t.jsx(R,{children:i})]}),t.jsxs(je,{children:[t.jsxs(W,{children:["calories: ",t.jsx(F,{children:c})]}),t.jsxs(W,{children:["category: ",t.jsx(F,{children:l})]}),t.jsxs(W,{children:["weight: ",t.jsx(F,{children:m})]})]}),p&&t.jsx(M,{isOpen:p,onRequestClose:v,children:t.jsx(ue,{product:i,calories:c,productId:e,onСonsumeСalories:x,onClose:v,onSuccessOpen:S})}),s&&t.jsx(M,{isOpen:s,onRequestClose:k,children:t.jsx($e,{onClose:k,calories:u})})]})},Pe=o.ul`
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
`,ze=({products:e,isRecommend:i,blood:c})=>t.jsx(Pe,{className:"movies-list",children:e.map(l=>t.jsx("li",{children:t.jsx(Ce,{product:l,isRecommend:i,blood:c})},l._id))}),Ie=o.div`
 @media screen and (min-width: 1440px) {
    background-image: url('../../img/products-2x.jpg');
    background-repeat: no-repeat;
    background-position: right bottom;
    background-size: cover;
  }
`,We=()=>{const[e,i]=h.useState([]),[c,l]=h.useState(""),[m,g]=h.useState([]),[r,f]=h.useState(!1),[p,d]=h.useState(""),[s,a]=A(),u=s.get("query")??"",x=s.get("category")??"",w=s.get("recommendation")??"All";h.useEffect(()=>{v()},[]);async function v(){if(!r){f(!0);try{const b=(await K()).products;i(b);const j=await J();g(j.productsCategories);const z=await X();l(z.blood)}catch(n){console.error(n)}finally{f(!1)}}}const S=(n,b)=>{for(const j in b)if(parseInt(j)===n)return b[j]?"Not recommended":"Recommended"},k=n=>{s.set("category",n),a(s)},P=n=>{s.set("recommendation",n),a(s)},D=n=>{i([]),a({query:n,category:x,recommendation:w})},B=()=>{d("")},N=e.filter(n=>{const b=n.title.toLowerCase().includes(u.toLowerCase()),j=x==="categories"||x===""||n.category===x,z=w==="All"||w===""||S(c,n.groupBloodNotAllowed)===w;return b&&j&&z});return t.jsxs(Ie,{style:{backgroundImage:"url('../../img/products-2x.jpg')"},children:[r&&t.jsx(t.Fragment,{children:t.jsx(O,{})}),t.jsx(le,{onSubmit:D,handleClear:B,categories:m,onUpdateCategory:k,onUpdateRecommendation:P,inputValue:p}),e.length===0&&t.jsx(t.Fragment,{children:t.jsx("p",{children:"Sorry, no results were found for the product filters you selected. You may want to consider other search options to find the product you want. Our range is wide and you have the opportunity to find more options that suit your needs. Try changing the search parameters."})}),e.length>0&&t.jsx(t.Fragment,{children:t.jsx(ze,{products:N,blood:c,isRecommend:S})})]})},Te=We;export{Te as default};
