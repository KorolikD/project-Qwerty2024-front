import{e as P,u as o,j as t,t as C,r as i,p as Q,L as ee,q as te,k as oe}from"./index-e0171bad.js";import{s as z,S as re}from"./SvgCustom-e523116d.js";import{S as se,A as ne,a as ie,I as ae,M as ce,L as de,B as O}from"./BasicModalWindow-3938658d.js";import{F as E,a as pe,b as le}from"./formik.esm-230794b5.js";import{d as xe}from"./dayjs.min-bb52a37e.js";import{p as he}from"./hero-2x-31d4f1ba.js";import"./motion-24972cbd.js";import"./zoom-73884dc9.js";const ue=async()=>{try{return(await P.get("/products/categories")).data}catch(e){console.error(e)}},me=async({pageNumber:e,category:s,allowed:c,title:d})=>{try{const n={pageNumber:e};return n.allowed=c===!0||c===!1?c:n.allowed,n.category=s!==""?s:n.category,n.title=d!==""?d:n.title,(await P.get("/products",{params:n})).data}catch(n){console.error(n)}},ge=async()=>{try{return(await P.get("/users/current")).data}catch(e){console.error(e)}},fe=o.div`
  @media screen and (min-width: 1440px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 68px 0 28px;
  }
`,we=o.h2`
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
`,be=o.form`
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
`,je=o.div`
  width: 100%;
  position: relative;
  @media screen and (min-width: 768px) {
    width: 236px;
  }
`,ye=o.input`
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
`,Se=o.button`
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
`,$e=o.svg`
  fill: ${({theme:e})=>e.colors.white};
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-40%);
`,ve=o.button`
  width: 24px;
  height: 24px;
  position: absolute;
  top: 50%;
  right: 35px;
  transform: translateY(-40%);
  border: none;
  background: transparent;
  cursor: pointer;
`,ke=o.svg`
  stroke: ${({theme:e})=>e.colors.primary};
`,Ce=o.select`
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
`,ze=o.select`
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
`,v=o.option`
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
`,Pe=({onSubmit:e,onChange:s,handleClear:c,inputValue:d,categories:n,onUpdateCategory:h,onUpdateRecommendation:p})=>t.jsxs(fe,{children:[t.jsx(we,{children:"Products"}),t.jsxs(be,{children:[t.jsxs(je,{children:[t.jsx(ye,{type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search",value:d,onChange:s}),t.jsx(Se,{type:"submit",onClick:a=>{e(d),a.preventDefault()}}),t.jsx($e,{width:"24",height:"24",children:t.jsx("use",{href:z+"#icon-search"})}),d&&t.jsx(ve,{onClick:c,children:t.jsx(ke,{width:"18",height:"18",children:t.jsx("use",{href:z+"#icon-cross"})})})]}),t.jsxs(Ce,{name:"category",onChange:a=>h(a.target.value),children:[t.jsx(v,{value:"",children:"Categories"}),n.map(a=>t.jsx(v,{value:a,children:a},a))]}),t.jsxs(ze,{name:"recommendation",onChange:a=>p(a.target.value),children:[t.jsx(v,{value:"",children:"All"}),t.jsx(v,{value:"Recommended",children:"Recommended"}),t.jsx(v,{value:"Not recommended",children:"Not recommended"})]})]})]}),We=o.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 303px;

  @media screen and (min-width: 768px) {
    width: 413px;
  }
`,Ie=o.div`
  display: flex;
  gap: 16px;
  flex-direction: column;
  margin-bottom: 16px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`,Me=o(E)`
  width: 287px;
  height: 34px;
  padding: 8px 14px;

  border-radius: 12px;
  color: ${e=>e.theme.colors.textWhite30};
  background-color: transparent;
  border: 1px solid ${e=>e.theme.colors.primary};

  @media screen and (min-width: 768px) {
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0em;
  }

  @media screen and (min-width: 768px) {
    width: 244px;
    height: 52px;
    padding: 14px;
  }
`,Te=o.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
  color: ${e=>e.theme.colors.textWhite40};
`,Re=o.span`
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
  color: ${e=>e.theme.colors.white};
`,Ae=o.div`
  position: relative;
  &::after {
    content: 'grams';
    position: absolute;
    top: 8px;
    right: 14px;
    font-weight: 400;
    font-size: 12px;
    line-height: 1.5;

    color: ${e=>e.theme.colors.textWhite40};
    display: block;

    @media screen and (min-width: 768px) {
      top: 16px;
    }
  }
`,Ne=o(E)`
  width: 287px;
  height: 34px;
  padding: 8px 14px;

  border-radius: 12px;
  color: ${e=>e.theme.colors.white};
  background-color: transparent;
  border: 1px solid ${e=>e.theme.colors.primary};

  @media screen and (min-width: 768px) {
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0em;
  }

  @media screen and (min-width: 768px) {
    width: 155px;
    height: 52px;
    padding: 14px;
  }
`,De=o.div`
  display: flex;
  gap: 14px;
  margin-top: 24px;

  @media screen and (min-width: 768px) {
    margin-top: 64px;
    gap: 16px;
  }
`,Be=o.button`
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  width: 150px;
  height: 42px;
  padding: 12px 12px;

  background-color: ${C.colors.primary};

  font-weight: 500;
  font-size: 16px;
  line-height: 18px;
  color: ${C.colors.white};

  border-radius: 12px;

  @media screen and (min-width: 768px) {
    height: 52px;
  }
`,Fe=o.button`
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  width: 121px;
  height: 42px;
  padding: 12px 12px;

  background-color: transparent;
  border: 1px solid rgba(239, 237, 232, 0.3);

  font-weight: 500;
  font-size: 16px;
  line-height: 18px;
  color: ${C.colors.white};

  border-radius: 12px;

  @media screen and (min-width: 768px) {
    width: 142px;

    height: 52px;
  }
`,Le="DD/MM/YYYY",Oe=({productId:e,product:s,calories:c,onСonsumeСalories:d,onClose:n,onSuccessOpen:h})=>{const[p,a]=i.useState(0),j=u=>P.post("/diary/product",u),y=async u=>{try{const{weight:l}=u,g=xe(Date.now()).format(Le);await j({productId:e,date:g,weight:l,calories:p}),d(p),n(),h()}catch(l){Q.error(l.message)}};return t.jsx(We,{children:t.jsx(pe,{initialValues:{product:s,weight:0,calories:0},onSubmit:y,children:({values:u,setFieldValue:l})=>t.jsxs(le,{children:[t.jsxs(Ie,{children:[t.jsx(Me,{type:"text",name:"product",disabled:!0}),t.jsx(Ae,{children:t.jsx(Ne,{type:"text",name:"weight",onChange:g=>{const f=g.target.value,m=parseFloat(f);if(!isNaN(m)||f===""){const w=f===""?0:Math.round(m*c/100);a(isNaN(w)?0:w),l("weight",isNaN(m)?0:m)}}})})]}),t.jsxs(Te,{children:["Calories: ",t.jsx(Re,{children:p||0})]}),t.jsxs(De,{children:[t.jsx(Be,{type:"submit",children:"Submit"}),t.jsx(Fe,{type:"button",onClick:n,children:"Cancel"})]})]})})})},Ee="/project-Qwerty2024-front/assets/avocado-1x-5dd1adfd.png",Ye=({onClose:e,calories:s})=>t.jsxs(se,{children:[t.jsx(ne,{src:Ee,alt:"Well done"}),t.jsx(ie,{children:"Well done"}),t.jsxs(ae,{children:["Calories: ",t.jsx("span",{children:s})]}),t.jsx(ce,{onClick:e,children:"Next product"}),t.jsxs(de,{children:[t.jsx(ee,{style:{color:"inherit"},to:"/diary",children:"To the diary"}),t.jsx(re,{icon:"icon-next",size:"16",color:C.colors.textWhite30})]})]}),qe=o.div`
  width: 335px;

  padding: 16px;
  border: 1px solid ${({theme:e})=>e.colors.formBorder};
  border-radius: 12px;
  background: rgba(239, 237, 232, 0.05);

  @media screen and (min-width: 1440px) {
    width: 405px;
  }
`,He=o.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 33px;
`,_e=o.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`,Ue=o.p`
  font-weight: 700;
  font-size: 12px;
  color: ${({theme:e})=>e.colors.white};
  padding: 5px 7px;
  border-radius: 4px;
  background-color: rgba(239, 237, 232, 0.05);
`,Ve=o.p`
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
`,Ge=o.button`
  display: flex;
  gap: 8px;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.29;
  color: ${({theme:e})=>e.colors.primary};
  background-color: transparent;
  border: none;
`,Je=o.div`
  display: flex;
  gap: 16px;
  margin-bottom: 8px;
`,Ke=o.p`
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
`,Xe=o.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 4px 16px;
`,M=o.li`
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
  color: ${({theme:e})=>e.colors.textWhite40};
`,T=o.span`
  color: ${({theme:e})=>e.colors.white};
  text-transform: capitalize;
`,Ze=o.svg`
  stroke: ${({theme:e})=>e.colors.primary};
`,Qe=o.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: ${({theme:e})=>e.colors.lightSecondary};
`,et=o.svg`
  fill: white;
`,tt=({product:{_id:e,title:s,calories:c,category:d,weight:n,groupBloodNotAllowed:h},blood:p,isRecommend:a})=>{const[j,y]=i.useState(!1),[u,l]=i.useState(!1),[g,f]=i.useState(0);function m(){y(!0)}function w(){y(!1)}function S(){l(!0)}function $(){l(!1)}const W=a(p,h);return t.jsxs(qe,{children:[t.jsxs(He,{children:[t.jsx(Ue,{children:"DIET"}),t.jsxs(_e,{children:[t.jsx(Ve,{children:W}),t.jsxs(Ge,{onClick:m,children:["Add",t.jsx(Ze,{width:"16",height:"16",children:t.jsx("use",{href:z+"#icon-next"})})]})]})]}),t.jsxs(Je,{children:[t.jsx(Qe,{children:t.jsx(et,{width:"14",height:"16",children:t.jsx("use",{href:z+"#icon-running"})})}),t.jsx(Ke,{children:s})]}),t.jsxs(Xe,{children:[t.jsxs(M,{children:["calories: ",t.jsx(T,{children:c})]}),t.jsxs(M,{children:["category: ",t.jsx(T,{children:d})]}),t.jsxs(M,{children:["weight: ",t.jsx(T,{children:n})]})]}),j&&t.jsx(O,{isOpen:j,onRequestClose:w,children:t.jsx(Oe,{product:s,calories:c,productId:e,onСonsumeСalories:f,onClose:w,onSuccessOpen:S})}),u&&t.jsx(O,{isOpen:u,onRequestClose:$,children:t.jsx(Ye,{onClose:$,calories:g})})]})},ot=o.ul`
  height: 500px;
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  align-content: flex-start;

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
`,rt=({products:e,isRecommend:s,blood:c,listRef:d})=>t.jsx(ot,{className:"movies-list",ref:d,children:e.map((n,h)=>t.jsx("li",{children:t.jsx(tt,{product:n,isRecommend:s,blood:c})},n._id+h))}),st="/project-Qwerty2024-front/assets/products-1x-ef677aa9.jpg",nt=o.div`
  padding-bottom: 68px;
  @media screen and (min-width: 1440px) {
    height: 716px;
    margin-right: -96px;
    background-image: url(${st});
    background-repeat: no-repeat;
    background-position: right;
  };
  @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${he});
    }
`,it=o.div`
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
`,at=o.span`
  color: ${({theme:e})=>e.colors.primary};
`,ct=o.p`
  padding-top: 16px;
  font-size: 14px;
  color: ${({theme:e})=>e.colors.primary};
  line-height: 1.5;
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`,dt=()=>t.jsxs(it,{children:[t.jsxs("p",{children:[t.jsx(at,{children:"Sorry, no results were found "}),"for the product filters you selected. You may want to consider other search options to find the product you want. Our range is wide and you have the opportunity to find more options that suit your needs."]}),t.jsx(ct,{children:"Try changing the search parameters."})]}),pt=()=>{const[e,s]=te();i.useEffect(()=>{s("")},[s]);const c=e.get("query")??"",d=e.get("category")??"",n=e.get("recommendation")??"All",[h,p]=i.useState([]),[a,j]=i.useState(""),[y,u]=i.useState([]),[l,g]=i.useState(!1),[f,m]=i.useState(""),[w,S]=i.useState(1),[$,W]=i.useState(!0),[R,Y]=i.useState(d),[A,I]=i.useState(n),[k,N]=i.useState(c),[D,B]=i.useState(!1),[F,q]=i.useState(0),L=i.useRef("");i.useEffect(()=>{const r=L.current,x=()=>{!l&&$&&r.scrollTop+r.clientHeight>=r.scrollHeight&&(S(b=>b+1),q(r.scrollTop))};return r&&(r.scrollTop=F,r.addEventListener("scroll",x)),()=>{r&&r.removeEventListener("scroll",x)}},[$,l,F]),i.useEffect(()=>{async function r(){g(!0);try{const x=await me({pageNumber:w,category:R,allowed:A,title:k});if(!x)return;const b=x.products;h.length===0?p(b):p(Z=>[...Z,...b]);const K=await ue();u(K.productsCategories);const X=await ge();j(X.blood),x.totalDocs===0?B(!0):B(!1),W(x.page<x.totalPages&&b.length>0)}catch(x){console.error(x)}finally{g(!1)}}r()},[w,R,A,k]);const H=(r,x)=>{for(const b in x)if(parseInt(b)===r)return x[b]?"Recommended":"Not recommended"},_=r=>{Y(r),S(1),p([]),r===""?(e.delete("category"),s(e)):(e.set("category",r),s(e))},U=r=>{r==="Recommended"?(I(!0),e.set("recommended",r),s(e)):r==="Not recommended"?(I(!1),e.set("recommended",r),s(e)):(I(""),e.delete("recommended"),s(e)),S(1),p([])},V=r=>{r.preventDefault(),m(r.target.value)},G=r=>{r.preventDefault(),m(""),N(""),k&&p([]),e.delete("query"),s(e)},J=r=>{k!==r&&(N(r),S(1),p([]),e.set("query",r),s(e)),r===""&&(e.delete("query"),s(e))};return t.jsxs(nt,{children:[t.jsx(Pe,{onSubmit:J,onChange:V,handleClear:G,inputValue:f,categories:y,onUpdateCategory:_,onUpdateRecommendation:U}),l&&t.jsx(oe,{}),!l&&!D&&t.jsx(rt,{products:h,blood:a,isRecommend:H,listRef:L}),D&&t.jsx(dt,{}),h.length!==0]})},bt=pt;export{bt as default};
