import{a as w,j as e,t as o,b as n,f as h,s as b,h as S,N as E,u as W,i as N,k as P,m as A}from"./index-e6cb168e.js";import{C as O,d as v}from"./Calendar-0a34edc6.js";import{S as d}from"./SvgCustom-d555b1e1.js";import{M as $}from"./react-responsive-1674ecfe.js";const f="DD/MM/YYYY",F=({date:i,setDate:t,minDate:c})=>{const[s,l]=w.useState(!1),r=()=>{const a=v(i,f).add(1,"day").format(f);t(a)},m=()=>{const a=v(i,f).subtract(1,"day").format(f);t(a)},g=()=>{l(a=>!a)};return e.jsxs(e.Fragment,{children:[e.jsxs("button",{onClick:g,children:[e.jsx("span",{children:i}),e.jsx(d,{icon:"icon-calendar",size:"20",stroke:o.colors.secondary})]}),e.jsx("button",{onClick:m,children:e.jsx(d,{icon:"icon-back",size:"20",color:o.colors.secondary})}),e.jsx("button",{onClick:r,children:e.jsx(d,{icon:"icon-next",size:"20",color:o.colors.secondary})}),e.jsx(O,{date:i,setDate:t,minDate:c,isOpen:s})]})},Y=n.section`
  @media screen and (min-width: 768px) {
    max-width: 593px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 390px;
  }
`,_=n.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 20px;
  column-gap: 13px;
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

  border: ${i=>i.$border==="green"?"1px solid #3CBF61":i.$border==="red"?"1px solid #E9101D":`1px solid ${i.theme.colors.textWhite40}`};
  border-radius: 12px;
  background: rgba(239, 237, 232, 0.05);

  &:nth-last-child(-n + 2) {
    @media screen and (max-width: 767px) {
      height: 108px;
    }
  }

  &:hover {
    background: ${i=>i.theme.colors.primary};
    border-color: ${i=>i.theme.colors.textWhite40};
    div {
      color: rgba(239, 237, 232, 0.8);
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
`,y=n.p`
  font-weight: 700;
  font-size: 18px;
  line-height: 1.1;
  color: #efede8;

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 1.33;
  }
`,M=n.div`
  display: flex;
  gap: 8px;

  & > div {
    width: 24px;
    height: 24px;
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
`,L=i=>i.diary.productsList,R=i=>i.diary.exercisesList,q=i=>i.diary.totalCalories,H=i=>i.diary.burnedCalories,G=i=>i.diary.timeSpentOnExercises,Q=()=>{const{bmr:i,dpa:t}=h(b),c=h(q),s=h(H),l=h(G),r=t-l,m=i-c,g=m<0?"red":"green",a=r<0?"green":"red";return e.jsxs(Y,{children:[e.jsxs(_,{children:[e.jsxs(j,{children:[e.jsxs(u,{children:[e.jsx(d,{icon:"icon-food",size:"20",color:o.colors.secondary}),e.jsx("p",{children:"Daily calorie intake"})]}),e.jsx(y,{children:i})]}),e.jsxs(j,{children:[e.jsxs(u,{children:[e.jsx(d,{icon:"icon-dumbbell",size:"20",color:o.colors.secondary}),e.jsx("p",{children:"Daily physical activity"})]}),e.jsxs(y,{children:[t," min"]})]}),e.jsxs(j,{children:[e.jsxs(u,{children:[e.jsx(d,{icon:"icon-apple",size:"20",color:o.colors.secondary}),e.jsx("p",{children:"Calories consumed"})]}),e.jsx(y,{children:c})]}),e.jsxs(j,{children:[e.jsxs(u,{children:[e.jsx(d,{icon:"icon-apple",size:"20",color:o.colors.secondary}),e.jsx("p",{children:"Calories burned"})]}),e.jsx(y,{children:s})]}),e.jsxs(j,{$border:g,children:[e.jsxs(u,{children:[e.jsx(d,{icon:"icon-bubble",size:"20",color:o.colors.secondary}),e.jsx("p",{children:"Calories remaining"})]}),e.jsxs(y,{children:[!g&&"-",m]})]}),e.jsxs(j,{$border:a,children:[e.jsxs(u,{children:[e.jsx(d,{icon:"icon-running",size:"20",color:o.colors.secondary}),e.jsx("p",{children:"Sports remaining"})]}),e.jsxs(y,{children:[a&&"+",r," min"]})]})]}),e.jsxs(M,{children:[e.jsx("div",{children:e.jsx(d,{icon:"icon-next",size:"24",color:o.colors.white})}),e.jsx("p",{children:"Record all your meals in the calorie diary every day. This will help you be aware of your nutrition and make informed choices."})]})]})},C=n.ul`
  display: flex;
  flex-direction: column;
  gap: 40px;
  font-size: 12px;
  line-height: 1.5;
  color: ${i=>i.theme.colors.secondary};
  height: 350px;
  /* ::-webkit-scrollbar {
    
  }
  ::-webkit-scrollbar-thumb {
    
  } */
`,k=n.li`
  display: flex;
  flex-direction: column;
  gap: 16px;
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
  border: 1px solid ${i=>i.theme.colors.formBorder};
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
`,U=({list:i,forExercisesTable:t,forProductsTable:c,onDelete:s})=>{const{blood:l}=h(b);return e.jsxs(e.Fragment,{children:[t&&e.jsx(C,{children:i.map(r=>e.jsxs(k,{children:[e.jsxs("div",{children:["Body Part"," ",e.jsx(x,{children:r.exerciseId.bodyPart})]}),e.jsxs("div",{children:["Equipment"," ",e.jsx(x,{children:r.exerciseId.equipment})]}),e.jsxs("div",{children:["Name ",e.jsx(x,{children:r.exerciseId.name})]}),e.jsxs(T,{children:[e.jsxs("div",{children:["Target"," ",e.jsx(x,{children:r.exerciseId.target})]}),e.jsxs("div",{children:["BurnedCalories"," ",e.jsx(x,{children:r.burnedCalories})]}),e.jsxs("div",{children:["Time ",e.jsx(x,{children:r.time})]}),e.jsx("button",{onClick:()=>{s({id:r._id})},children:e.jsx(d,{icon:"icon-trash",size:"20",stroke:o.colors.secondary})})]})]},r._id))}),c&&e.jsx(C,{children:i.map(r=>e.jsxs(k,{children:[e.jsxs("div",{children:["Title ",e.jsx(x,{children:r.productId.title})]}),e.jsxs("div",{children:["Category"," ",e.jsx(x,{children:r.productId.category})]}),e.jsxs(T,{children:[e.jsxs("div",{children:["Calories ",e.jsx(x,{children:r.calories})]}),e.jsxs("div",{children:["Weight ",e.jsx(x,{children:r.weight})]}),e.jsxs("div",{children:["Recommend"," ",e.jsx(x,{$recommend:!0,$color:r.productId.groupBloodNotAllowed[l],children:r.productId.groupBloodNotAllowed[l]?"Yes":"No"})]}),e.jsx("button",{onClick:()=>{s({id:r._id})},children:e.jsx(d,{icon:"icon-trash",size:"20",stroke:o.colors.secondary})})]})]},r._id))})]})},z=n.table`
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 16px;
  line-height: 1.5;
  color: ${i=>i.theme.colors.white};
`,p=n.td`
  padding: 8px 14px;
  border: 1px solid ${i=>i.theme.colors.formBorder};
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
`,I=n.button`
  margin-left: 12px;
  width: 20px;
  height: 20px;
  background-color: transparent;

  @media screen and (min-width: 1440px) {
    margin-left: 20px;
  }
`,J=n.thead`
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
`,K=n.tbody`
  display: flex;
  flex-direction: column;
  gap: 8px;

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
`,V=n.thead`
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
`,X=n.tbody`
  display: flex;
  flex-direction: column;
  gap: 8px;

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
`,Z=S`
/* th, td {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
} */
`,ee=({list:i,forExercisesTable:t,forProductsTable:c,onDelete:s})=>{const{blood:l}=h(b);return e.jsxs(e.Fragment,{children:[t&&e.jsxs(z,{children:[e.jsx(V,{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Body Part"}),e.jsx("th",{children:"Equipment"}),e.jsx("th",{children:"Name"}),e.jsx("th",{children:"Target"}),e.jsx("th",{children:"Burned Calories"}),e.jsx("th",{children:"Time"}),e.jsx("th",{})]})}),e.jsx(X,{children:i.map(r=>e.jsxs("tr",{children:[e.jsx(p,{children:r.exerciseId.bodyPart}),e.jsx(p,{children:r.exerciseId.equipment}),e.jsx(p,{children:r.exerciseId.name}),e.jsx(p,{children:r.exerciseId.target}),e.jsx(p,{children:r.burnedCalories}),e.jsx(p,{children:r.time}),e.jsx("td",{children:e.jsx(I,{onClick:()=>{s({id:r._id})},children:e.jsx(d,{icon:"icon-trash",size:"20",stroke:o.colors.secondary})})})]},r._id))})]}),c&&e.jsxs(z,{children:[e.jsx(J,{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Title"}),e.jsx("th",{children:"Category"}),e.jsx("th",{children:"Calories"}),e.jsx("th",{children:"Weight"}),e.jsx("th",{children:"Recommend"}),e.jsx("th",{})]})}),e.jsx(K,{children:i.map(r=>e.jsxs("tr",{children:[e.jsx(p,{children:r.productId.title}),e.jsx(p,{children:r.productId.category}),e.jsx(p,{children:r.calories}),e.jsx(p,{children:r.weight}),e.jsx(p,{$recommend:!0,$color:r.productId.groupBloodNotAllowed[l],children:r.productId.groupBloodNotAllowed[l]?"Yes":"No"}),e.jsx("td",{children:e.jsx(I,{onClick:()=>{s({id:r._id})},children:e.jsx(d,{icon:"icon-trash",size:"20",stroke:o.colors.secondary})})})]},r._id))})]}),e.jsx(Z,{})]})},ie=n.div`
  position: relative;
  overflow: auto;
  margin: 0 auto;
  padding: 16px 8px 16px 16px;
  height: ${i=>i.list==="no"?"335px":"auto"};
  width: 335px;
  border: 1px solid ${i=>i.theme.colors.textWhite40};
  background: rgba(239, 237, 232, 0.05);
  border-radius: 12px;

  @media screen and (min-width: 768px) {
    height: ${i=>i.list==="no"?"234px":"auto"};
    width: 704px;
  }

  @media screen and (min-width: 1440px) {
    width: 826px;
  }
`,re=n.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 22px;
  font-size: 14px;
  line-height: 1.28;
  color: ${i=>i.theme.colors.textWhite50};
`,ne=n(E)`
  display: flex;
  gap: 8px;
  align-items: center;
  color: ${i=>i.theme.colors.primary};

  @media screen and (min-width: 768px) {
    font-weight: 500;
    font-size: 16px;
    line-height: 1.5;
  }
`,se=n.p`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 14px;
  line-height: 1.28;
  color: ${i=>i.theme.colors.textWhite30};
`,B=({list:i,date:t,to:c,forExercisesTable:s,forProductsTable:l})=>{const r=W(),m=i&&i.length!==void 0&&i.length!==0?"yes":"no",g=i&&i.length!==void 0&&i.length!==0,a=({id:D})=>{r(s?N({id:D,date:t}):P({id:D,date:t}))};return e.jsxs(ie,{list:m,children:[e.jsxs(re,{children:[e.jsx("p",{children:s?"Exercises":"Products"}),e.jsxs(ne,{to:c,children:["Add ",s?"exercise":"product",e.jsx(d,{icon:"icon-next",size:"16",color:o.colors.primary})]})]}),g?e.jsxs(e.Fragment,{children:[e.jsx($,{maxWidth:767,children:e.jsx(U,{list:i,date:t,forExercisesTable:s,forProductsTable:l,onDelete:a})}),e.jsx($,{minWidth:768,children:e.jsx(ee,{list:i,date:t,forExercisesTable:s,forProductsTable:l,onDelete:a})})]}):e.jsxs(se,{children:["Not found ",s?"exercises":"products"]})]})},te=n.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding-top: 40px;
  padding-bottom: 80px;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    gap: 32px;
    padding-top: 52px;
    padding-bottom: 64px;
  }

  @media screen and (min-width: 1440px) {
    padding-bottom: 68px;
  }
`,oe=n.div`
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
`,de=n.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`,le="DD/MM/YYYY",ce=()=>{const[i,t]=w.useState(v().format(le)),c=h(L),s=h(R),{createdAt:l}=h(b),r=W();return w.useEffect(()=>{i&&r(A(i))},[i,r]),e.jsxs(te,{children:[e.jsx("div",{children:e.jsxs("div",{children:["Title +"," ",e.jsx(F,{date:i,setDate:t,minDate:l})]})}),e.jsxs(oe,{children:[e.jsx(Q,{}),e.jsxs(de,{children:[e.jsx(B,{list:c,date:i,to:"/products",forProductsTable:!0})," ",e.jsx(B,{list:s,date:i,to:"/exercises",forExercisesTable:!0})]})]})]})},me=ce;export{me as default};
