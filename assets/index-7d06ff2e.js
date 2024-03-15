import{e as z,u as o,j as t,t as k,r as i,p as K,L as X,q as Z,k as Q}from"./index-2abda365.js";import{s as C,S as ee}from"./SvgCustom-95e71a28.js";import{S as te,A as oe,a as re,I as se,M as ne,L as ie,B as F}from"./BasicModalWindow-efd19a41.js";import{F as L,a as ae,b as ce}from"./formik.esm-a6edf218.js";import{d as de}from"./dayjs.min-878c57a9.js";import{p as pe}from"./hero-2x-31d4f1ba.js";import"./motion-bf6a1084.js";import"./zoom-41f389b3.js";const le=async()=>{try{return(await z.get("/products/categories")).data}catch(e){console.error(e)}},xe=async({pageNumber:e,category:r,allowed:d,title:a})=>{try{const n={pageNumber:e};return n.allowed=d===!0||d===!1?d:n.allowed,n.category=r!==""?r:n.category,n.title=a!==""?a:n.title,(await z.get("/products",{params:n})).data}catch(n){console.error(n)}},he=async()=>{try{return(await z.get("/users/current")).data}catch(e){console.error(e)}},ue=o.div`
  @media screen and (min-width: 1440px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 68px 0 28px;
  }
`,me=o.h2`
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
`,ge=o.form`
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
`,fe=o.div`
  width: 100%;
  position: relative;
  @media screen and (min-width: 768px) {
    width: 236px;
  }
`,we=o.input`
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
`,be=o.button`
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
`,je=o.svg`
  fill: ${({theme:e})=>e.colors.white};
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-40%);
`,ye=o.button`
  width: 24px;
  height: 24px;
  position: absolute;
  top: 50%;
  right: 35px;
  transform: translateY(-40%);
  border: none;
  background: transparent;
  cursor: pointer;
`,$e=o.svg`
  stroke: ${({theme:e})=>e.colors.primary};
`,Se=o.select`
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
`,S=o.option`
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
`,ke=({onSubmit:e,onChange:r,handleClear:d,inputValue:a,categories:n,onUpdateCategory:x,onUpdateRecommendation:p})=>t.jsxs(ue,{children:[t.jsx(me,{children:"Products"}),t.jsxs(ge,{children:[t.jsxs(fe,{children:[t.jsx(we,{type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search",value:a,onChange:r}),t.jsx(be,{type:"submit",onClick:c=>{e(a),c.preventDefault()}}),t.jsx(je,{width:"24",height:"24",children:t.jsx("use",{href:C+"#icon-search"})}),a&&t.jsx(ye,{onClick:d,children:t.jsx($e,{width:"18",height:"18",children:t.jsx("use",{href:C+"#icon-cross"})})})]}),t.jsxs(Se,{name:"category",onChange:c=>x(c.target.value),children:[t.jsx(S,{value:"",children:"Categories"}),n.map(c=>t.jsx(S,{value:c,children:c},c))]}),t.jsxs(ve,{name:"recommendation",onChange:c=>p(c.target.value),children:[t.jsx(S,{value:"",children:"All"}),t.jsx(S,{value:"Recommended",children:"Recommended"}),t.jsx(S,{value:"Not recommended",children:"Not recommended"})]})]})]}),Ce=o.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 303px;

  @media screen and (min-width: 768px) {
    width: 413px;
  }
`,ze=o.div`
  display: flex;
  gap: 16px;
  flex-direction: column;
  margin-bottom: 16px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`,Pe=o(L)`
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
`,We=o.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
  color: ${e=>e.theme.colors.textWhite40};
`,Ie=o.span`
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
  color: ${e=>e.theme.colors.white};
`,Me=o.div`
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
`,Ae=o(L)`
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
`,Ne=o.div`
  display: flex;
  gap: 14px;
  margin-top: 24px;

  @media screen and (min-width: 768px) {
    margin-top: 64px;
    gap: 16px;
  }
`,Re=o.button`
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  width: 150px;
  height: 42px;
  padding: 12px 12px;

  background-color: ${k.colors.primary};

  font-weight: 500;
  font-size: 16px;
  line-height: 18px;
  color: ${k.colors.white};

  border-radius: 12px;

  @media screen and (min-width: 768px) {
    height: 52px;
  }
`,De=o.button`
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
  color: ${k.colors.white};

  border-radius: 12px;

  @media screen and (min-width: 768px) {
    width: 142px;

    height: 52px;
  }
`,Be="DD/MM/YYYY",Te=({productId:e,product:r,calories:d,onСonsumeСalories:a,onClose:n,onSuccessOpen:x})=>{const[p,c]=i.useState(0),b=u=>z.post("/diary/product",u),j=async u=>{try{const{weight:l}=u,g=de(Date.now()).format(Be);await b({productId:e,date:g,weight:l,calories:p}),a(p),n(),x()}catch(l){K.error(l.message)}};return t.jsx(Ce,{children:t.jsx(ae,{initialValues:{product:r,weight:0,calories:0},onSubmit:j,children:({values:u,setFieldValue:l})=>t.jsxs(ce,{children:[t.jsxs(ze,{children:[t.jsx(Pe,{type:"text",name:"product",disabled:!0}),t.jsx(Me,{children:t.jsx(Ae,{type:"text",name:"weight",onChange:g=>{const f=g.target.value,m=parseFloat(f);if(!isNaN(m)||f===""){const w=f===""?0:Math.round(m*d/100);c(isNaN(w)?0:w),l("weight",isNaN(m)?0:m)}}})})]}),t.jsxs(We,{children:["Calories: ",t.jsx(Ie,{children:p||0})]}),t.jsxs(Ne,{children:[t.jsx(Re,{type:"submit",children:"Submit"}),t.jsx(De,{type:"button",onClick:n,children:"Cancel"})]})]})})})},Fe="/project-Qwerty2024-front/assets/avocado-1x-5dd1adfd.png",Le=({onClose:e,calories:r})=>t.jsxs(te,{children:[t.jsx(oe,{src:Fe,alt:"Well done"}),t.jsx(re,{children:"Well done"}),t.jsxs(se,{children:["Calories: ",t.jsx("span",{children:r})]}),t.jsx(ne,{onClick:e,children:"Next product"}),t.jsxs(ie,{children:[t.jsx(X,{style:{color:"inherit"},to:"/diary",children:"To the diary"}),t.jsx(ee,{icon:"icon-next",size:"16",color:k.colors.textWhite30})]})]}),Oe=o.div`
  width: 335px;

  padding: 16px;
  border: 1px solid ${({theme:e})=>e.colors.formBorder};
  border-radius: 12px;
  background: rgba(239, 237, 232, 0.05);

  @media screen and (min-width: 1440px) {
    width: 405px;
  }
`,Ye=o.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 33px;
`,qe=o.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`,Ee=o.p`
  font-weight: 700;
  font-size: 12px;
  color: ${({theme:e})=>e.colors.white};
  padding: 5px 7px;
  border-radius: 4px;
  background-color: rgba(239, 237, 232, 0.05);
`,_e=o.p`
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
`,Ue=o.button`
  display: flex;
  gap: 8px;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.29;
  color: ${({theme:e})=>e.colors.primary};
  background-color: transparent;
  border: none;
`,He=o.div`
  display: flex;
  gap: 16px;
  margin-bottom: 8px;
`,Ve=o.p`
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
`,Ge=o.ul`
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
`,Je=o.svg`
  stroke: ${({theme:e})=>e.colors.primary};
`,Ke=o.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: ${({theme:e})=>e.colors.lightSecondary};
`,Xe=o.svg`
  fill: white;
`,Ze=({product:{_id:e,title:r,calories:d,category:a,weight:n,groupBloodNotAllowed:x},blood:p,isRecommend:c})=>{const[b,j]=i.useState(!1),[u,l]=i.useState(!1),[g,f]=i.useState(0);function m(){j(!0)}function w(){j(!1)}function $(){l(!0)}function P(){l(!1)}const W=c(p,x);return t.jsxs(Oe,{children:[t.jsxs(Ye,{children:[t.jsx(Ee,{children:"DIET"}),t.jsxs(qe,{children:[t.jsx(_e,{children:W}),t.jsxs(Ue,{onClick:m,children:["Add",t.jsx(Je,{width:"16",height:"16",children:t.jsx("use",{href:C+"#icon-next"})})]})]})]}),t.jsxs(He,{children:[t.jsx(Ke,{children:t.jsx(Xe,{width:"14",height:"16",children:t.jsx("use",{href:C+"#icon-running"})})}),t.jsx(Ve,{children:r})]}),t.jsxs(Ge,{children:[t.jsxs(M,{children:["calories: ",t.jsx(A,{children:d})]}),t.jsxs(M,{children:["category: ",t.jsx(A,{children:a})]}),t.jsxs(M,{children:["weight: ",t.jsx(A,{children:n})]})]}),b&&t.jsx(F,{isOpen:b,onRequestClose:w,children:t.jsx(Te,{product:r,calories:d,productId:e,onСonsumeСalories:f,onClose:w,onSuccessOpen:$})}),u&&t.jsx(F,{isOpen:u,onRequestClose:P,children:t.jsx(Le,{onClose:P,calories:g})})]})},Qe=o.ul`
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
`,et=({products:e,isRecommend:r,blood:d})=>t.jsx(Qe,{className:"movies-list",children:e.map((a,n)=>t.jsx("li",{children:t.jsx(Ze,{product:a,isRecommend:r,blood:d})},a._id+n))}),tt="/project-Qwerty2024-front/assets/products-1x-ef677aa9.jpg",ot=o.div`
  padding-bottom: 68px;
  @media screen and (min-width: 1440px) {
    height: 716px;
    margin-right: -96px;
    background-image: url(${tt});
    background-repeat: no-repeat;
    background-position: right;
  };
  @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${pe});
    }
`,rt=o.div`
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
`,st=o.span`
  color: ${({theme:e})=>e.colors.primary};
`,nt=o.p`
  padding-top: 16px;
  font-size: 14px;
  color: ${({theme:e})=>e.colors.primary};
  line-height: 1.5;
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`,it=()=>t.jsxs(rt,{children:[t.jsxs("p",{children:[t.jsx(st,{children:"Sorry, no results were found "}),"for the product filters you selected. You may want to consider other search options to find the product you want. Our range is wide and you have the opportunity to find more options that suit your needs."]}),t.jsx(nt,{children:"Try changing the search parameters."})]}),at=()=>{const[e,r]=Z(),d=e.get("query")??"",a=e.get("category")??"",n=e.get("recommendation")??"All",[x,p]=i.useState([]),[c,b]=i.useState(""),[j,u]=i.useState([]),[l,g]=i.useState(!1),[f,m]=i.useState(""),[w,$]=i.useState(1),[P,W]=i.useState(!0),[N,O]=i.useState(a),[R,I]=i.useState(n),[v,D]=i.useState(d),[B,T]=i.useState(!1);i.useEffect(()=>{async function s(){g(!0);try{const h=await xe({pageNumber:w,category:N,allowed:R,title:v});if(!h)return;const y=h.products;x.length===0?p(y):p(J=>[...J,...y]);const V=await le();u(V.productsCategories);const G=await he();b(G.blood),h.totalDocs===0?T(!0):T(!1),W(h.page<h.totalPages&&y.length>0)}catch(h){console.error(h)}finally{g(!1)}}s()},[w,N,R,v]);const Y=(s,h)=>{for(const y in h)if(parseInt(y)===s)return h[y]?"Recommended":"Not recommended"},q=s=>{O(s),$(1),p([]),s===""?(e.delete("category"),r(e)):(e.set("category",s),r(e))},E=s=>{s==="Recommended"?(I(!0),e.set("recommended",s),r(e)):s==="Not recommended"?(I(!1),e.set("recommended",s),r(e)):(I(""),e.delete("recommended"),r(e)),$(1),p([])},_=s=>{s.preventDefault(),m(s.target.value)},U=s=>{s.preventDefault(),m(""),D(""),v&&p([]),e.delete("query"),r(e)},H=s=>{v!==s&&(D(s),$(1),p([]),e.set("query",s),r(e)),s===""&&(e.delete("query"),r(e))};return t.jsxs(ot,{children:[t.jsx(ke,{onSubmit:H,onChange:_,handleClear:U,inputValue:f,categories:j,onUpdateCategory:q,onUpdateRecommendation:E}),l&&t.jsx(Q,{}),!l&&!B&&t.jsx(et,{products:x,blood:c,isRecommend:Y}),B&&t.jsx(it,{}),x.length!==0]})},gt=at;export{gt as default};
