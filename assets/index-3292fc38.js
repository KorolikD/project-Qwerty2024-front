import{e as P,u as o,j as t,t as C,r as s,p as J,L as K,q as X,k as Z}from"./index-c226385b.js";import{s as z,S as Q}from"./SvgCustom-95437f66.js";import{S as ee,A as te,a as oe,I as re,M as ne,L as se,B}from"./BasicModalWindow-ef1d2355.js";import{F as D,a as ie,b as ae}from"./formik.esm-7dd70633.js";import{d as ce}from"./dayjs.min-038e26a6.js";import{p as de}from"./hero-2x-31d4f1ba.js";import"./motion-5cd6d654.js";import"./zoom-9e814506.js";const pe=async()=>{try{return(await P.get("/products/categories")).data}catch(e){console.error(e)}},le=async(e,n,l,a)=>{try{return(await P.get("/products",{params:{pageNumber:e,category:n,allowed:l,title:a}})).data}catch(d){console.error(d)}},xe=async()=>{try{return(await P.get("/users/current")).data}catch(e){console.error(e)}},he=o.div`
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
`,me=o.form`
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
`,ge=o.div`
  width: 100%;
  position: relative;
  @media screen and (min-width: 768px) {
    width: 236px;
  }
`,fe=o.input`
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
`,we=o.button`
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
`,be=o.svg`
  fill: ${({theme:e})=>e.colors.white};
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-40%);
`,je=o.button`
  width: 24px;
  height: 24px;
  position: absolute;
  top: 50%;
  right: 35px;
  transform: translateY(-40%);
  border: none;
  background: transparent;
  cursor: pointer;
`,ye=o.svg`
  stroke: ${({theme:e})=>e.colors.primary};
`,$e=o.select`
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
`,$=o.option`
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
`,Se=({onSubmit:e,onChange:n,handleClear:l,inputValue:a,categories:d,onUpdateCategory:x,onUpdateRecommendation:p})=>t.jsxs(he,{children:[t.jsx(ue,{children:"Products"}),t.jsxs(me,{children:[t.jsxs(ge,{children:[t.jsx(fe,{type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search",value:a,onChange:n}),t.jsx(we,{type:"submit",onClick:i=>{e(a),i.preventDefault()}}),t.jsx(be,{width:"24",height:"24",children:t.jsx("use",{href:z+"#icon-search"})}),a&&t.jsx(je,{onClick:l,children:t.jsx(ye,{width:"18",height:"18",children:t.jsx("use",{href:z+"#icon-cross"})})})]}),t.jsxs($e,{name:"category",onChange:i=>x(i.target.value),children:[t.jsx($,{value:"",children:"Categories"}),d.map(i=>t.jsx($,{value:i,children:i},i))]}),t.jsxs(ve,{name:"recommendation",onChange:i=>p(i.target.value),children:[t.jsx($,{value:"",children:"All"}),t.jsx($,{value:"Recommended",children:"Recommended"}),t.jsx($,{value:"Not recommended",children:"Not recommended"})]})]})]}),ke=o.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 303px;

  @media screen and (min-width: 768px) {
    width: 413px;
  }
`,Ce=o.div`
  display: flex;
  gap: 16px;
  flex-direction: column;
  margin-bottom: 16px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`,ze=o(D)`
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
`,Pe=o.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
  color: ${e=>e.theme.colors.textWhite40};
`,We=o.span`
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
  color: ${e=>e.theme.colors.white};
`,Ie=o.div`
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
`,Me=o(D)`
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
`,Ae=o.div`
  display: flex;
  gap: 14px;
  margin-top: 24px;

  @media screen and (min-width: 768px) {
    margin-top: 64px;
    gap: 16px;
  }
`,Fe=o.button`
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
`,Re=o.button`
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
`,Ne="DD/MM/YYYY",Te=({productId:e,product:n,calories:l,onСonsumeСalories:a,onClose:d,onSuccessOpen:x})=>{const[p,i]=s.useState(0),w=h=>P.post("/diary/product",h),b=async h=>{try{const{weight:c}=h,m=ce(Date.now()).format(Ne);await w({productId:e,date:m,weight:c,calories:p}),a(p),d(),x()}catch(c){J.error(c.message)}};return t.jsx(ke,{children:t.jsx(ie,{initialValues:{product:n,weight:0,calories:0},onSubmit:b,children:({values:h,setFieldValue:c})=>t.jsxs(ae,{children:[t.jsxs(Ce,{children:[t.jsx(ze,{type:"text",name:"product",disabled:!0}),t.jsx(Ie,{children:t.jsx(Me,{type:"text",name:"weight",onChange:m=>{const g=m.target.value,u=parseFloat(g);if(!isNaN(u)||g===""){const f=g===""?0:Math.round(u*l/100);i(isNaN(f)?0:f),c("weight",isNaN(u)?0:u)}}})})]}),t.jsxs(Pe,{children:["Calories: ",t.jsx(We,{children:p||0})]}),t.jsxs(Ae,{children:[t.jsx(Fe,{type:"submit",children:"Submit"}),t.jsx(Re,{type:"button",onClick:d,children:"Cancel"})]})]})})})},Be="/project-Qwerty2024-front/assets/avocado-1x-5dd1adfd.png",De=({onClose:e,calories:n})=>t.jsxs(ee,{children:[t.jsx(te,{src:Be,alt:"Well done"}),t.jsx(oe,{children:"Well done"}),t.jsxs(re,{children:["Calories: ",t.jsx("span",{children:n})]}),t.jsx(ne,{onClick:e,children:"Next product"}),t.jsxs(se,{children:[t.jsx(K,{style:{color:"inherit"},to:"/diary",children:"To the diary"}),t.jsx(Q,{icon:"icon-next",size:"16",color:C.colors.textWhite30})]})]}),Le=o.div`
  width: 335px;

  padding: 16px;
  border: 1px solid ${({theme:e})=>e.colors.formBorder};
  border-radius: 12px;
  background: rgba(239, 237, 232, 0.05);

  @media screen and (min-width: 1440px) {
    width: 405px;
  }
`,Ee=o.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 33px;
`,Oe=o.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`,Ye=o.p`
  font-weight: 700;
  font-size: 12px;
  color: ${({theme:e})=>e.colors.white};
  padding: 5px 7px;
  border-radius: 4px;
  background-color: rgba(239, 237, 232, 0.05);
`,qe=o.p`
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
`,He=o.button`
  display: flex;
  gap: 8px;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.29;
  color: ${({theme:e})=>e.colors.primary};
  background-color: transparent;
  border: none;
`,_e=o.div`
  display: flex;
  gap: 16px;
  margin-bottom: 8px;
`,Ue=o.p`
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
`,Ve=o.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 4px 16px;
`,M=o.li`
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
  color: ${({theme:e})=>e.colors.textWhite40};
`,A=o.span`
  color: ${({theme:e})=>e.colors.white};
  text-transform: capitalize;
`,Ge=o.svg`
  stroke: ${({theme:e})=>e.colors.primary};
`,Je=o.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: ${({theme:e})=>e.colors.lightSecondary};
`,Ke=o.svg`
  fill: white;
`,Xe=({product:{_id:e,title:n,calories:l,category:a,weight:d,groupBloodNotAllowed:x},blood:p,isRecommend:i})=>{const[w,b]=s.useState(!1),[h,c]=s.useState(!1),[m,g]=s.useState(0);function u(){b(!0)}function f(){b(!1)}function j(){c(!0)}function v(){c(!1)}const W=i(p,x);return t.jsxs(Le,{children:[t.jsxs(Ee,{children:[t.jsx(Ye,{children:"DIET"}),t.jsxs(Oe,{children:[t.jsx(qe,{children:W}),t.jsxs(He,{onClick:u,children:["Add",t.jsx(Ge,{width:"16",height:"16",children:t.jsx("use",{href:z+"#icon-next"})})]})]})]}),t.jsxs(_e,{children:[t.jsx(Je,{children:t.jsx(Ke,{width:"14",height:"16",children:t.jsx("use",{href:z+"#icon-running"})})}),t.jsx(Ue,{children:n})]}),t.jsxs(Ve,{children:[t.jsxs(M,{children:["calories: ",t.jsx(A,{children:l})]}),t.jsxs(M,{children:["category: ",t.jsx(A,{children:a})]}),t.jsxs(M,{children:["weight: ",t.jsx(A,{children:d})]})]}),w&&t.jsx(B,{isOpen:w,onRequestClose:f,children:t.jsx(Te,{product:n,calories:l,productId:e,onСonsumeСalories:g,onClose:f,onSuccessOpen:j})}),h&&t.jsx(B,{isOpen:h,onRequestClose:v,children:t.jsx(De,{onClose:v,calories:m})})]})},Ze=o.ul`
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
`,Qe=({products:e,isRecommend:n,blood:l})=>t.jsx(Ze,{className:"movies-list",children:e.map((a,d)=>t.jsx("li",{children:t.jsx(Xe,{product:a,isRecommend:n,blood:l})},a._id+d))}),et="/project-Qwerty2024-front/assets/products-1x-ef677aa9.jpg",tt=o.div`
  padding-bottom: 68px;
  @media screen and (min-width: 1440px) {
    height: 716px;
    margin-right: -96px;
    background-image: url(${et});
    background-repeat: no-repeat;
    background-position: right;
  };
  @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${de});
    }
`,ot=o.div`
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
`,rt=o.span`
  color: ${({theme:e})=>e.colors.primary};
`,nt=o.p`
  padding-top: 16px;
  font-size: 14px;
  color: ${({theme:e})=>e.colors.primary};
  line-height: 1.5;
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`,st=()=>t.jsxs(ot,{children:[t.jsxs("p",{children:[t.jsx(rt,{children:"Sorry, no results were found "}),"for the product filters you selected. You may want to consider other search options to find the product you want. Our range is wide and you have the opportunity to find more options that suit your needs."]}),t.jsx(nt,{children:"Try changing the search parameters."})]}),it=()=>{const[e,n]=X(),l=e.get("query")??"",a=e.get("category")??"",d=e.get("recommendation")??"All",[x,p]=s.useState([]),[i,w]=s.useState(""),[b,h]=s.useState([]),[c,m]=s.useState(!1),[g,u]=s.useState(""),[f,j]=s.useState(1),[v,W]=s.useState(!0),[F,L]=s.useState(a),[R,I]=s.useState(d),[S,N]=s.useState(l);s.useEffect(()=>(window.addEventListener("scroll",T),()=>window.removeEventListener("scroll",T)),[]),s.useEffect(()=>{E()},[f,F,R,S]);async function E(){if(!c){m(!0);try{const r=await le(f,F,R,S),y=r.products;p(G=>[...G,...y]);const k=await pe();h(k.productsCategories);const V=await xe();w(V.blood),W(r.page<r.totalPages&&y.length>0)}catch(r){console.error(r)}finally{m(!1)}}}const O=(r,y)=>{for(const k in y)if(parseInt(k)===r)return y[k]?"Recommended":"Not recommended"},Y=r=>{L(r),j(1),p([]),r===""?(e.delete("category"),n(e)):(e.set("category",r),n(e))},q=r=>{r==="Recommended"?(I(!0),e.set("recommended",r),n(e)):r==="Not recommended"?(I(!1),e.set("recommended",r),n(e)):(I(""),e.delete("recommended"),n(e)),j(1),p([])},H=r=>{r.preventDefault(),u(r.target.value)},_=r=>{r.preventDefault(),u(""),N(""),S&&p([]),e.delete("query"),n(e)},U=r=>{S!==r&&(N(r),j(1),p([]),e.set("query",r),n(e)),r===""&&(e.delete("query"),n(e))},T=()=>{!c&&v&&window.innerHeight+document.documentElement.scrollTop>=document.documentElement.offsetHeight-200&&j(r=>r+1)};return t.jsxs(tt,{children:[c&&t.jsx(t.Fragment,{children:t.jsx(Z,{})}),t.jsx(Se,{onSubmit:U,onChange:H,handleClear:_,inputValue:g,categories:b,onUpdateCategory:Y,onUpdateRecommendation:q}),!c&&x.length>0&&t.jsx(t.Fragment,{children:t.jsx(Qe,{products:x,blood:i,isRecommend:O})}),!c&&x.length===0&&t.jsx(t.Fragment,{children:t.jsx(st,{})})]})},mt=it;export{mt as default};
