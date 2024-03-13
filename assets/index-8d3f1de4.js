import{u as n,r as k,j as e,t as o,i as h,s as D,N as P,a as B,k as W,m as E,n as N,o as A}from"./index-0c37053f.js";import{d as v}from"./dayjs.min-b22ab815.js";import{C as L,D as O,a as Y,b as j,S as u,c as b,A as _,T as F}from"./DayDashboard.styled-0b41b7ec.js";import{S as a}from"./SvgCustom-df19c237.js";import{M as C}from"./react-responsive-1f4a51bf.js";import"./motion-8087da4d.js";import"./index-34965bed.js";import"./ResizeObserver.es-f4289e8a.js";const R=i=>i.diary.productsList,q=i=>i.diary.exercisesList,H=i=>i.diary.totalCalories,G=i=>i.diary.burnedCalories,Q=i=>i.diary.timeSpentOnExercises,U=i=>i.diary.isLoading,J=n.div`
  display: flex;
  gap: 20px;
  align-items: center;

  @media screen and (min-width: 768px) {
    position: absolute;
    right: 0;
    top: -20px;
    gap: 40px;
  }

  > button {
    display: flex;
    gap: 8px;
    align-items: center;
    background: transparent;
    color: ${i=>i.theme.colors.white};
    font-weight: 700;
    font-size: 18px;
    line-height: 1.1;

    @media screen and (min-width: 768px) {
      font-size: 24px;
      line-height: 1.5;
    }
  }
`,K=n.div`
  display: flex;
  gap: 8px;
  align-items: center;

  > button {
    height: 16px;
    background: transparent;
  }
`,f="DD/MM/YYYY",V=({date:i,setDate:t,minDate:l})=>{const[s,d]=k.useState(!1),r=v(l).format(f),c=i===r,g=()=>{const y=v(i,f).add(1,"day").format(f);t(y)},m=()=>{const y=v(i,f).subtract(1,"day").format(f);t(y)},w=()=>{d(y=>!y)};return e.jsxs(J,{children:[e.jsxs("button",{onClick:w,children:[e.jsx("span",{children:i}),e.jsx(a,{icon:"icon-calendar",size:"20",stroke:o.colors.secondary})]}),e.jsxs(K,{children:[e.jsx("button",{onClick:m,disabled:c,children:e.jsx(a,{icon:"icon-chevron-left",size:"14",stroke:c?"rgba(239, 237, 232, 0.2)":o.colors.white,color:c?"rgba(239, 237, 232, 0.2)":o.colors.white})}),e.jsx("button",{onClick:g,children:e.jsx(a,{icon:"icon-chevron-right",size:"14",stroke:o.colors.white,color:o.colors.white})}),e.jsx(L,{date:i,setDate:t,minDate:l,isOpen:s,setIsOpen:d})]})]})},X=()=>{const{bmr:i,dpa:t}=h(D),l=h(H),s=h(G),d=h(Q),r=Math.round(t-d),c=Math.round(i-l),g=c<0?"red":"green",m=r<0?"green":"red";return e.jsxs(O,{children:[e.jsxs(Y,{children:[e.jsxs(j,{children:[e.jsxs(u,{children:[e.jsx(a,{icon:"icon-food",size:"20",color:o.colors.secondary}),e.jsx("p",{children:"Daily calorie intake"})]}),e.jsx(b,{children:i})]}),e.jsxs(j,{children:[e.jsxs(u,{children:[e.jsx(a,{icon:"icon-dumbbell",size:"20",color:o.colors.secondary}),e.jsx("p",{children:"Daily physical activity"})]}),e.jsxs(b,{children:[t," min"]})]}),e.jsxs(j,{children:[e.jsxs(u,{children:[e.jsx(a,{icon:"icon-apple",size:"20",color:o.colors.secondary}),e.jsx("p",{children:"Calories consumed"})]}),e.jsx(b,{children:Math.round(l)})]}),e.jsxs(j,{children:[e.jsxs(u,{children:[e.jsx(a,{icon:"icon-apple",size:"20",color:o.colors.secondary}),e.jsx("p",{children:"Calories burned"})]}),e.jsx(b,{children:Math.round(s)})]}),e.jsxs(j,{$border:g,children:[e.jsxs(u,{children:[e.jsx(a,{icon:"icon-bubble",size:"20",color:o.colors.secondary}),e.jsx("p",{children:"Calories remaining"})]}),e.jsxs(b,{children:[!g&&"-",c]})]}),e.jsxs(j,{$border:m,children:[e.jsxs(u,{children:[e.jsx(a,{icon:"icon-running",size:"20",color:o.colors.secondary}),e.jsx("p",{children:"Sports remaining"})]}),e.jsxs(b,{children:[m&&"+",r," min"]})]})]}),e.jsxs(_,{children:[e.jsx("div",{children:e.jsx(a,{icon:"icon-exclamation-mark",size:"16",stroke:o.colors.white})}),e.jsx("p",{children:"Record all your meals in the calorie diary every day. This will help you be aware of your nutrition and make informed choices."})]})]})},T=n.ul`
  display: flex;
  flex-direction: column;
  overflow: auto;
  gap: 36px;
  padding-right: 8px;
  margin: 0;
  font-size: 12px;
  line-height: 1.5;
  color: ${i=>i.theme.colors.secondary};
  height: ${i=>i.height}px;

  &::-webkit-scrollbar {
    width: 6px;
    height: 203px;
    border-radius: 12px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgba(239, 237, 232, 0.1);
    border-radius: 12px;
  }
`,I=n.li`
  display: flex;
  flex-direction: column;
  gap: 14px;
`,$=n.div`
  display: flex;
  > div {
    overflow: hidden;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    &:nth-child(1) {
      width: 81px;
      margin-right: 16px;
    }

    &:nth-child(2) {
      width: 80px;
      margin-right: 16px;
    }

    &:nth-child(3) {
      width: 76px;
      margin-right: 16px;
    }
  }

  > button {
    margin-top: 33px;
    width: 20px;
    height: 20px;
    background-color: transparent;
  }
`,x=n.p`
  margin-top: 8px;
  padding: 10px 14px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  border-radius: 12px;
  color: ${i=>i.theme.colors.white};
  font-size: 14px;
  line-height: 1.28;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  &::first-letter {
    text-transform: uppercase;
  }

  &::before {
    ${i=>i.$recommend&&`
      content: '';
      display: inline-block;
      margin-right: 8px;
      width: 14px;
      height: 14px;
      border-radius: 10px;
      background: ${i.$color?"#419B09":"#E9101D"};
    `}
  }
`,Z=({list:i,forExercisesTable:t,forProductsTable:l,onDelete:s})=>{const{blood:d}=h(D);return e.jsxs(e.Fragment,{children:[t&&e.jsx(T,{height:"992",children:i.map(r=>e.jsxs(I,{children:[e.jsxs("div",{children:["Body Part"," ",e.jsx(x,{children:r.exerciseId.bodyPart})]}),e.jsxs("div",{children:["Equipment"," ",e.jsx(x,{children:r.exerciseId.equipment})]}),e.jsxs("div",{children:["Name ",e.jsx(x,{children:r.exerciseId.name})]}),e.jsxs($,{children:[e.jsxs("div",{children:["Target"," ",e.jsx(x,{children:r.exerciseId.target})]}),e.jsxs("div",{children:["BurnedCalories"," ",e.jsx(x,{children:Math.round(r.burnedCalories)})]}),e.jsxs("div",{children:["Time"," ",e.jsx(x,{children:Math.round(r.time)})]}),e.jsx("button",{onClick:()=>{s({id:r._id})},children:e.jsx(a,{icon:"icon-trash",size:"20",stroke:o.colors.secondary})})]})]},r._id))}),l&&e.jsx(T,{height:"752",children:i.map(r=>e.jsxs(I,{children:[e.jsxs("div",{children:["Title ",e.jsx(x,{children:r.productId.title})]}),e.jsxs("div",{children:["Category"," ",e.jsx(x,{children:r.productId.category})]}),e.jsxs($,{children:[e.jsxs("div",{children:["Calories"," ",e.jsx(x,{children:Math.round(r.calories)})]}),e.jsxs("div",{children:["Weight"," ",e.jsx(x,{children:Math.round(r.weight)})]}),e.jsxs("div",{children:["Recommend"," ",e.jsx(x,{$recommend:!0,$color:r.productId.groupBloodNotAllowed[d],children:r.productId.groupBloodNotAllowed[d]?"Yes":"No"})]}),e.jsx("button",{onClick:()=>{s({id:r._id})},children:e.jsx(a,{icon:"icon-trash",size:"20",stroke:o.colors.secondary})})]})]},r._id))})]})},z=n.table`
  display: flex;
  flex-direction: column;
  gap: 6px;
  font-size: 16px;
  line-height: 1.5;
  color: ${i=>i.theme.colors.white};
`,p=n.td`
  padding: 8px 14px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  border-radius: 12px;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  &::first-letter {
    text-transform: uppercase;
  }

  &::before {
    ${i=>i.$recommend&&` 
      content: ''; 
      display: inline-block; 
      margin-right: 8px; 
      width: 14px; 
      height: 14px; 
      border-radius: 10px; 
      background: ${i.$color?"#419B09":"#E9101D"};
    `}
  }
`,M=n.button`
  margin-left: 12px;
  width: 20px;
  height: 20px;
  background-color: transparent;

  @media screen and (min-width: 1440px) {
    margin-left: 20px;
  }
`,ee=n.thead`
  font-weight: 400;
  font-size: 12px;
  color: ${i=>i.theme.colors.secondary};

  & > tr {
    display: grid;
    grid-template-columns: 204px 128px 90px 90px 80px 20px;
    gap: 8px;
    text-align: left;

    @media screen and (min-width: 1440px) {
      grid-template-columns: 212px 166px 105px 105px 110px 20px;
    }

    & > th {
      font-weight: 400;
      padding: 0;
    }
  }
`,ie=n.tbody`
  display: flex;
  flex-direction: column;
  gap: 8px;

  overflow: auto;
  overflow-x: hidden;
  height: 144px;

  &::-webkit-scrollbar {
    width: 6px;
    height: 90px;
    border-radius: 12px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(239, 237, 232, 0.1);
    border-radius: 12px;
  }

  & > tr {
    display: grid;
    grid-template-columns: 204px 128px 90px 90px 80px 20px;
    gap: 8px;
    align-items: center;
    text-align: left;

    @media screen and (min-width: 1440px) {
      grid-template-columns: 212px 166px 105px 105px 110px 20px;
    }
  }
`,re=n.thead`
  font-weight: 400;
  font-size: 12px;
  color: ${i=>i.theme.colors.secondary};

  & > tr {
    display: grid;
    grid-template-columns: 90px 132px 128px 84px 78px 72px 20px;
    gap: 8px;
    text-align: left;

    @media screen and (min-width: 1440px) {
      grid-template-columns: 115px 157px 131px 106px 91px 82px 20px;
    }

    & > th {
      font-weight: 400;
      padding: 0;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
`,ne=n.tbody`
  display: flex;
  flex-direction: column;
  gap: 8px;

  overflow: auto;
  overflow-x: hidden;
  height: 144px;

  &::-webkit-scrollbar {
    width: 6px;
    height: 90px;
    border-radius: 12px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(239, 237, 232, 0.1);
    border-radius: 12px;
  }

  & > tr {
    display: grid;
    grid-template-columns: 90px 132px 128px 84px 78px 72px 20px;
    gap: 8px;
    align-items: center;
    text-align: left;

    @media screen and (min-width: 1440px) {
      grid-template-columns: 115px 157px 131px 106px 91px 82px 20px;
    }
  }
`,se=({list:i,forExercisesTable:t,forProductsTable:l,onDelete:s})=>{const{blood:d}=h(D);return e.jsxs(e.Fragment,{children:[t&&e.jsxs(z,{children:[e.jsx(re,{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Body Part"}),e.jsx("th",{children:"Equipment"}),e.jsx("th",{children:"Name"}),e.jsx("th",{children:"Target"}),e.jsx("th",{children:"Burned Calories"}),e.jsx("th",{children:"Time"}),e.jsx("th",{})]})}),e.jsx(ne,{children:i.map(r=>e.jsxs("tr",{children:[e.jsx(p,{children:r.exerciseId.bodyPart}),e.jsx(p,{children:r.exerciseId.equipment}),e.jsx(p,{children:r.exerciseId.name}),e.jsx(p,{children:r.exerciseId.target}),e.jsx(p,{children:Math.round(r.burnedCalories)}),e.jsx(p,{children:Math.round(r.time)}),e.jsx("td",{children:e.jsx(M,{onClick:()=>{s({id:r._id})},children:e.jsx(a,{icon:"icon-trash",size:"20",stroke:o.colors.secondary})})})]},r._id))})]}),l&&e.jsxs(z,{children:[e.jsx(ee,{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Title"}),e.jsx("th",{children:"Category"}),e.jsx("th",{children:"Calories"}),e.jsx("th",{children:"Weight"}),e.jsx("th",{children:"Recommend"}),e.jsx("th",{})]})}),e.jsx(ie,{children:i.map(r=>e.jsxs("tr",{children:[e.jsx(p,{children:r.productId.title}),e.jsx(p,{children:r.productId.category}),e.jsx(p,{children:Math.round(r.calories)}),e.jsx(p,{children:Math.round(r.weight)}),e.jsx(p,{$recommend:!0,$color:r.productId.groupBloodNotAllowed[d],children:r.productId.groupBloodNotAllowed[d]?"Yes":"No"}),e.jsx("td",{children:e.jsx(M,{onClick:()=>{s({id:r._id})},children:e.jsx(a,{icon:"icon-trash",size:"20",stroke:o.colors.secondary})})})]},r._id))})]})]})},te=n.div`
  position: relative;
  overflow: hidden;
  margin: 0 auto;
  padding: 16px 8px 16px 16px;
  height: ${i=>i.list==="no"?"335px":"auto"};
  width: 335px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  background: rgba(239, 237, 232, 0.05);
  border-radius: 12px;

  @media screen and (min-width: 768px) {
    height: 238px;
    width: 704px;
  }

  @media screen and (min-width: 1440px) {
    width: 828px;
  }
`,oe=n.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 22px;
  font-size: 14px;
  line-height: 1.28;
  color: ${i=>i.theme.colors.textWhite50};

  @media screen and (min-width: 768px) {
    margin-bottom: 16px;
  }
`,de=n(P)`
  display: flex;
  gap: 8px;
  align-items: center;
  color: ${i=>i.theme.colors.primary};

  @media screen and (min-width: 768px) {
    font-weight: 500;
    font-size: 16px;
    line-height: 1.5;
  }
`,ae=n.p`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 14px;
  line-height: 1.28;
  color: ${i=>i.theme.colors.textWhite30};
`,S=({list:i,date:t,to:l,forExercisesTable:s,forProductsTable:d})=>{const r=B(),c=i&&i.length!==void 0&&i.length!==0?"yes":"no",g=i&&i.length!==void 0&&i.length!==0,m=({id:w})=>{r(s?W({id:w,date:t}):E({id:w,date:t}))};return e.jsxs(te,{list:c,children:[e.jsxs(oe,{children:[e.jsx("p",{children:s?"Exercises":"Products"}),e.jsxs(de,{to:l,children:["Add ",s?"exercise":"product",e.jsx(a,{icon:"icon-next",size:"16",color:o.colors.primary})]})]}),g?e.jsxs(e.Fragment,{children:[e.jsx(C,{maxWidth:767,children:e.jsx(Z,{list:i,date:t,forExercisesTable:s,forProductsTable:d,onDelete:m})}),e.jsx(C,{minWidth:768,children:e.jsx(se,{list:i,date:t,forExercisesTable:s,forProductsTable:d,onDelete:m})})]}):e.jsxs(ae,{children:["Not found ",s?"exercises":"products"]})]})},le=n.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding-top: 40px;
  padding-bottom: 80px;
  margin: 0 auto;

  @media screen and (max-width: 374px) {
    width: 100%;
    padding-left: 5px;
    padding-right: 5px;
  }

  @media screen and (min-width: 768px) {
    gap: 32px;
    /* padding-top: 52px; */
    padding-top: 72px;
    padding-bottom: 64px;
  }

  @media screen and (min-width: 1440px) {
    padding-bottom: 68px;
  }
`,ce=n.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    position: relative;
  }
`,xe=n.div`
  display: flex;
  flex-direction: column;
  gap: 40px;

  @media screen and (min-width: 768px) {
    flex-direction: column-reverse;
    gap: 64px;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row-reverse;
    gap: 32px;
  }
`,pe=n.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`,he="DD/MM/YYYY",me=()=>{const[i,t]=k.useState(v().format(he)),l=h(R),s=h(q),d=h(U),{createdAt:r}=h(D),c=B();return k.useEffect(()=>{i&&c(N(i))},[i,c]),e.jsx(e.Fragment,{children:d?e.jsx(A,{}):e.jsxs(le,{children:[e.jsxs(ce,{children:[e.jsx(F,{title:"Diary"}),e.jsx(V,{date:i,setDate:t,minDate:r})]}),e.jsxs(xe,{children:[e.jsx(X,{}),e.jsxs(pe,{children:[e.jsx(S,{list:l,date:i,to:"/products",forProductsTable:!0}),e.jsx(S,{list:s,date:i,to:"/exercises",forExercisesTable:!0})]})]})]})})},De=me;export{De as default};
