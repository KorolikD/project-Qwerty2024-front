import{u as n,r as k,j as e,t as s,h,s as D,N as E,a as W,i as P,k as N,m as L,n as O}from"./index-62398ab0.js";import{d as v,C as A,T as F}from"./Calendar-62d9624d.js";import{S as l}from"./SvgCustom-782c264f.js";import{M as C}from"./react-responsive-3b754d5c.js";import"./index-6c958e41.js";import"./sprite-fc7cd6db.js";const M=i=>i.diary.productsList,Y=i=>i.diary.exercisesList,_=i=>i.diary.totalCalories,R=i=>i.diary.burnedCalories,q=i=>i.diary.timeSpentOnExercises,H=i=>i.diary.isLoading,G=n.div`
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
`,Q=n.div`
  display: flex;
  gap: 8px;
  align-items: center;

  > button {
    height: 16px;
    background: transparent;
  }
`,y="DD/MM/YYYY",U=({date:i,setDate:o,minDate:a})=>{const[t,d]=k.useState(!1),r=v(a).format(y),c=i===r,g=()=>{const f=v(i,y).add(1,"day").format(y);o(f)},m=()=>{const f=v(i,y).subtract(1,"day").format(y);o(f)},w=()=>{d(f=>!f)};return e.jsxs(G,{children:[e.jsxs("button",{onClick:w,children:[e.jsx("span",{children:i}),e.jsx(l,{icon:"icon-calendar",size:"20",stroke:s.colors.secondary})]}),e.jsxs(Q,{children:[e.jsx("button",{onClick:m,disabled:c,children:e.jsx(l,{icon:"icon-chevron-left",size:"14",stroke:c?"rgba(239, 237, 232, 0.2)":s.colors.white,color:c?"rgba(239, 237, 232, 0.2)":s.colors.white})}),e.jsx("button",{onClick:g,children:e.jsx(l,{icon:"icon-chevron-right",size:"14",stroke:s.colors.white,color:s.colors.white})}),e.jsx(A,{date:i,setDate:o,minDate:a,isOpen:t,setIsOpen:d})]})]})},J=n.section`
  @media screen and (min-width: 768px) {
    max-width: 593px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 390px;
  }
`,K=n.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 20px;
  column-gap: 13px;
  margin-top: 0;
  margin-bottom: 20px;

  font-size: 12px;
  line-height: 1.33;
  color: ${i=>i.theme.colors.textWhite40};

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
    margin-bottom: 32px;
    line-height: 1.5;
  }

  @media screen and (max-width: 1439px) and (min-width: 768px) {
    li:nth-child(1) {
      order: 1;
    }

    li:nth-child(2) {
      order: 4;
    }

    li:nth-child(3) {
      order: 2;
    }

    li:nth-child(4) {
      order: 5;
    }

    li:nth-child(5) {
      order: 3;
    }

    li:nth-child(6) {
      order: 6;
    }
  }

  @media screen and (min-width: 1440px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
    margin-bottom: 48px;
    line-height: 1.5;
  }
`,j=n.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 96px;
  padding: 14px;

  border: ${i=>i.$border==="green"?"1px solid #3CBF61":i.$border==="red"?"1px solid #E9101D":"1px solid rgba(239, 237, 232, 0.2)"};
  border-radius: 12px;
  background: rgba(239, 237, 232, 0.05);

  &:nth-child(-n + 2) {
    background: ${i=>i.theme.colors.primary};
    div {
      color: rgba(239, 237, 232, 0.8);
    }
  }

  &:nth-last-child(-n + 2) {
    @media screen and (max-width: 767px) {
      height: 108px;
    }
  }

  @media screen and (min-width: 768px) {
    padding: 18px;
    height: 116px;
  }
`,u=n.div`
  display: flex;
  gap: 8px;
  align-items: center;
`,b=n.p`
  font-weight: 700;
  font-size: 18px;
  line-height: 1.1;
  color: #efede8;

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 1.33;
  }
`,V=n.div`
  display: flex;
  gap: 8px;

  & > div {
    display: flex;
    align-items: center;
    width: 24px;
    height: 24px;
    padding: 5px;
    background-color: ${i=>i.theme.colors.lightSecondary};
    border-radius: 50%;
  }

  & > p {
    color: ${i=>i.theme.colors.textWhite30};
    font-size: 14px;
    line-height: 1.28;

    @media screen and (min-width: 768px) {
      font-size: 16px;
      line-height: 1.5;
    }
  }
`,X=()=>{const{bmr:i,dpa:o}=h(D),a=h(_),t=h(R),d=h(q),r=o-d,c=i-a,g=c<0?"red":"green",m=r<0?"green":"red";return e.jsxs(J,{children:[e.jsxs(K,{children:[e.jsxs(j,{children:[e.jsxs(u,{children:[e.jsx(l,{icon:"icon-food",size:"20",color:s.colors.secondary}),e.jsx("p",{children:"Daily calorie intake"})]}),e.jsx(b,{children:i})]}),e.jsxs(j,{children:[e.jsxs(u,{children:[e.jsx(l,{icon:"icon-dumbbell",size:"20",color:s.colors.secondary}),e.jsx("p",{children:"Daily physical activity"})]}),e.jsxs(b,{children:[o," min"]})]}),e.jsxs(j,{children:[e.jsxs(u,{children:[e.jsx(l,{icon:"icon-apple",size:"20",color:s.colors.secondary}),e.jsx("p",{children:"Calories consumed"})]}),e.jsx(b,{children:a})]}),e.jsxs(j,{children:[e.jsxs(u,{children:[e.jsx(l,{icon:"icon-apple",size:"20",color:s.colors.secondary}),e.jsx("p",{children:"Calories burned"})]}),e.jsx(b,{children:t})]}),e.jsxs(j,{$border:g,children:[e.jsxs(u,{children:[e.jsx(l,{icon:"icon-bubble",size:"20",color:s.colors.secondary}),e.jsx("p",{children:"Calories remaining"})]}),e.jsxs(b,{children:[!g&&"-",c]})]}),e.jsxs(j,{$border:m,children:[e.jsxs(u,{children:[e.jsx(l,{icon:"icon-running",size:"20",color:s.colors.secondary}),e.jsx("p",{children:"Sports remaining"})]}),e.jsxs(b,{children:[m&&"+",r," min"]})]})]}),e.jsxs(V,{children:[e.jsx("div",{children:e.jsx(l,{icon:"icon-exclamation-mark",size:"14",stroke:s.colors.white})}),e.jsx("p",{children:"Record all your meals in the calorie diary every day. This will help you be aware of your nutrition and make informed choices."})]})]})},$=n.ul`
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
`,z=n.li`
  display: flex;
  flex-direction: column;
  gap: 14px;
`,T=n.div`
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
`,Z=({list:i,forExercisesTable:o,forProductsTable:a,onDelete:t})=>{const{blood:d}=h(D);return e.jsxs(e.Fragment,{children:[o&&e.jsx($,{height:"992",children:i.map(r=>e.jsxs(z,{children:[e.jsxs("div",{children:["Body Part"," ",e.jsx(x,{children:r.exerciseId.bodyPart})]}),e.jsxs("div",{children:["Equipment"," ",e.jsx(x,{children:r.exerciseId.equipment})]}),e.jsxs("div",{children:["Name ",e.jsx(x,{children:r.exerciseId.name})]}),e.jsxs(T,{children:[e.jsxs("div",{children:["Target"," ",e.jsx(x,{children:r.exerciseId.target})]}),e.jsxs("div",{children:["BurnedCalories"," ",e.jsx(x,{children:r.burnedCalories})]}),e.jsxs("div",{children:["Time ",e.jsx(x,{children:r.time})]}),e.jsx("button",{onClick:()=>{t({id:r._id})},children:e.jsx(l,{icon:"icon-trash",size:"20",stroke:s.colors.secondary})})]})]},r._id))}),a&&e.jsx($,{height:"752",children:i.map(r=>e.jsxs(z,{children:[e.jsxs("div",{children:["Title ",e.jsx(x,{children:r.productId.title})]}),e.jsxs("div",{children:["Category"," ",e.jsx(x,{children:r.productId.category})]}),e.jsxs(T,{children:[e.jsxs("div",{children:["Calories ",e.jsx(x,{children:r.calories})]}),e.jsxs("div",{children:["Weight ",e.jsx(x,{children:r.weight})]}),e.jsxs("div",{children:["Recommend"," ",e.jsx(x,{$recommend:!0,$color:r.productId.groupBloodNotAllowed[d],children:r.productId.groupBloodNotAllowed[d]?"Yes":"No"})]}),e.jsx("button",{onClick:()=>{t({id:r._id})},children:e.jsx(l,{icon:"icon-trash",size:"20",stroke:s.colors.secondary})})]})]},r._id))})]})},I=n.table`
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
`,S=n.button`
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
`,te=({list:i,forExercisesTable:o,forProductsTable:a,onDelete:t})=>{const{blood:d}=h(D);return e.jsxs(e.Fragment,{children:[o&&e.jsxs(I,{children:[e.jsx(re,{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Body Part"}),e.jsx("th",{children:"Equipment"}),e.jsx("th",{children:"Name"}),e.jsx("th",{children:"Target"}),e.jsx("th",{children:"Burned Calories"}),e.jsx("th",{children:"Time"}),e.jsx("th",{})]})}),e.jsx(ne,{children:i.map(r=>e.jsxs("tr",{children:[e.jsx(p,{children:r.exerciseId.bodyPart}),e.jsx(p,{children:r.exerciseId.equipment}),e.jsx(p,{children:r.exerciseId.name}),e.jsx(p,{children:r.exerciseId.target}),e.jsx(p,{children:r.burnedCalories}),e.jsx(p,{children:r.time}),e.jsx("td",{children:e.jsx(S,{onClick:()=>{t({id:r._id})},children:e.jsx(l,{icon:"icon-trash",size:"20",stroke:s.colors.secondary})})})]},r._id))})]}),a&&e.jsxs(I,{children:[e.jsx(ee,{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Title"}),e.jsx("th",{children:"Category"}),e.jsx("th",{children:"Calories"}),e.jsx("th",{children:"Weight"}),e.jsx("th",{children:"Recommend"}),e.jsx("th",{})]})}),e.jsx(ie,{children:i.map(r=>e.jsxs("tr",{children:[e.jsx(p,{children:r.productId.title}),e.jsx(p,{children:r.productId.category}),e.jsx(p,{children:r.calories}),e.jsx(p,{children:r.weight}),e.jsx(p,{$recommend:!0,$color:r.productId.groupBloodNotAllowed[d],children:r.productId.groupBloodNotAllowed[d]?"Yes":"No"}),e.jsx("td",{children:e.jsx(S,{onClick:()=>{t({id:r._id})},children:e.jsx(l,{icon:"icon-trash",size:"20",stroke:s.colors.secondary})})})]},r._id))})]})]})},oe=n.div`
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
`,se=n.div`
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
`,de=n(E)`
  display: flex;
  gap: 8px;
  align-items: center;
  color: ${i=>i.theme.colors.primary};

  @media screen and (min-width: 768px) {
    font-weight: 500;
    font-size: 16px;
    line-height: 1.5;
  }
`,le=n.p`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 14px;
  line-height: 1.28;
  color: ${i=>i.theme.colors.textWhite30};
`,B=({list:i,date:o,to:a,forExercisesTable:t,forProductsTable:d})=>{const r=W(),c=i&&i.length!==void 0&&i.length!==0?"yes":"no",g=i&&i.length!==void 0&&i.length!==0,m=({id:w})=>{r(t?P({id:w,date:o}):N({id:w,date:o}))};return e.jsxs(oe,{list:c,children:[e.jsxs(se,{children:[e.jsx("p",{children:t?"Exercises":"Products"}),e.jsxs(de,{to:a,children:["Add ",t?"exercise":"product",e.jsx(l,{icon:"icon-next",size:"16",color:s.colors.primary})]})]}),g?e.jsxs(e.Fragment,{children:[e.jsx(C,{maxWidth:767,children:e.jsx(Z,{list:i,date:o,forExercisesTable:t,forProductsTable:d,onDelete:m})}),e.jsx(C,{minWidth:768,children:e.jsx(te,{list:i,date:o,forExercisesTable:t,forProductsTable:d,onDelete:m})})]}):e.jsxs(le,{children:["Not found ",t?"exercises":"products"]})]})},ae=n.div`
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
`,he="DD/MM/YYYY",me=()=>{const[i,o]=k.useState(v().format(he)),a=h(M),t=h(Y),d=h(H),{createdAt:r}=h(D),c=W();return k.useEffect(()=>{i&&c(L(i))},[i,c]),e.jsx(e.Fragment,{children:d?e.jsx(O,{}):e.jsxs(ae,{children:[e.jsxs(ce,{children:[e.jsx(F,{title:"Diary"}),e.jsx(U,{date:i,setDate:o,minDate:r})]}),e.jsxs(xe,{children:[e.jsx(X,{}),e.jsxs(pe,{children:[e.jsx(B,{list:a,date:i,to:"/products",forProductsTable:!0})," ",e.jsx(B,{list:t,date:i,to:"/exercises",forExercisesTable:!0})]})]})]})})},we=me;export{we as default};
