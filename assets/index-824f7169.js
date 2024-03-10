import{b as t,a as k,j as e,t as o,f as p,s as D,h as E,N as P,u as W,i as N,k as A,m as O}from"./index-923bf442.js";import{d as v,C as M,T as Y}from"./Calendar-f9f35ff4.js";import{S as d}from"./SvgCustom-70e273dd.js";import{M as C}from"./react-responsive-f95e17b9.js";const _=i=>i.diary.productsList,F=i=>i.diary.exercisesList,L=i=>i.diary.totalCalories,R=i=>i.diary.burnedCalories,q=i=>i.diary.timeSpentOnExercises,H=t.div`
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
`,G=t.div`
  display: flex;
  gap: 8px;
  align-items: center;

  > button {
    height: 16px;
    background: transparent;
  }
`,y="DD/MM/YYYY",Q=({date:i,setDate:s,minDate:a})=>{const[n,l]=k.useState(!1),r=v(a).format(y),h=i===r,g=()=>{const f=v(i,y).add(1,"day").format(y);s(f)},m=()=>{const f=v(i,y).subtract(1,"day").format(y);s(f)},w=()=>{l(f=>!f)};return e.jsxs(H,{children:[e.jsxs("button",{onClick:w,children:[e.jsx("span",{children:i}),e.jsx(d,{icon:"icon-calendar",size:"20",stroke:o.colors.secondary})]}),e.jsxs(G,{children:[e.jsx("button",{onClick:m,disabled:h,children:e.jsx(d,{icon:"icon-chevron-left",size:"14",stroke:h?"rgba(239, 237, 232, 0.2)":o.colors.white,color:h?"rgba(239, 237, 232, 0.2)":o.colors.white})}),e.jsx("button",{onClick:g,children:e.jsx(d,{icon:"icon-chevron-right",size:"14",stroke:o.colors.white,color:o.colors.white})}),e.jsx(M,{date:i,setDate:s,minDate:a,isOpen:n})]})]})},U=t.section`
  @media screen and (min-width: 768px) {
    max-width: 593px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 390px;
  }
`,J=t.ul`
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

  @media screen and (min-width: 1440px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
    margin-bottom: 48px;
    line-height: 1.5;
  }
`,j=t.li`
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
`,u=t.div`
  display: flex;
  gap: 8px;
  align-items: center;
`,b=t.p`
  font-weight: 700;
  font-size: 18px;
  line-height: 1.1;
  color: #efede8;

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 1.33;
  }
`,K=t.div`
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
`,V=()=>{const{bmr:i,dpa:s}=p(D),a=p(L),n=p(R),l=p(q),r=s-l,h=i-a,g=h<0?"red":"green",m=r<0?"green":"red";return e.jsxs(U,{children:[e.jsxs(J,{children:[e.jsxs(j,{children:[e.jsxs(u,{children:[e.jsx(d,{icon:"icon-food",size:"20",color:o.colors.secondary}),e.jsx("p",{children:"Daily calorie intake"})]}),e.jsx(b,{children:i})]}),e.jsxs(j,{children:[e.jsxs(u,{children:[e.jsx(d,{icon:"icon-dumbbell",size:"20",color:o.colors.secondary}),e.jsx("p",{children:"Daily physical activity"})]}),e.jsxs(b,{children:[s," min"]})]}),e.jsxs(j,{children:[e.jsxs(u,{children:[e.jsx(d,{icon:"icon-apple",size:"20",color:o.colors.secondary}),e.jsx("p",{children:"Calories consumed"})]}),e.jsx(b,{children:a})]}),e.jsxs(j,{children:[e.jsxs(u,{children:[e.jsx(d,{icon:"icon-apple",size:"20",color:o.colors.secondary}),e.jsx("p",{children:"Calories burned"})]}),e.jsx(b,{children:n})]}),e.jsxs(j,{$border:g,children:[e.jsxs(u,{children:[e.jsx(d,{icon:"icon-bubble",size:"20",color:o.colors.secondary}),e.jsx("p",{children:"Calories remaining"})]}),e.jsxs(b,{children:[!g&&"-",h]})]}),e.jsxs(j,{$border:m,children:[e.jsxs(u,{children:[e.jsx(d,{icon:"icon-running",size:"20",color:o.colors.secondary}),e.jsx("p",{children:"Sports remaining"})]}),e.jsxs(b,{children:[m&&"+",r," min"]})]})]}),e.jsxs(K,{children:[e.jsx("div",{children:e.jsx(d,{icon:"icon-exclamation-mark",size:"14",stroke:o.colors.white})}),e.jsx("p",{children:"Record all your meals in the calorie diary every day. This will help you be aware of your nutrition and make informed choices."})]})]})},$=t.ul`
  display: flex;
  flex-direction: column;
  overflow: auto;
  gap: 40px;
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
`,T=t.li`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,z=t.div`
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
`,c=t.p`
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
`,X=({list:i,forExercisesTable:s,forProductsTable:a,onDelete:n})=>{const{blood:l}=p(D);return e.jsxs(e.Fragment,{children:[s&&e.jsx($,{height:"992",children:i.map(r=>e.jsxs(T,{children:[e.jsxs("div",{children:["Body Part"," ",e.jsx(c,{children:r.exerciseId.bodyPart})]}),e.jsxs("div",{children:["Equipment"," ",e.jsx(c,{children:r.exerciseId.equipment})]}),e.jsxs("div",{children:["Name ",e.jsx(c,{children:r.exerciseId.name})]}),e.jsxs(z,{children:[e.jsxs("div",{children:["Target"," ",e.jsx(c,{children:r.exerciseId.target})]}),e.jsxs("div",{children:["BurnedCalories"," ",e.jsx(c,{children:r.burnedCalories})]}),e.jsxs("div",{children:["Time ",e.jsx(c,{children:r.time})]}),e.jsx("button",{onClick:()=>{n({id:r._id})},children:e.jsx(d,{icon:"icon-trash",size:"20",stroke:o.colors.secondary})})]})]},r._id))}),a&&e.jsx($,{height:"725",children:i.map(r=>e.jsxs(T,{children:[e.jsxs("div",{children:["Title ",e.jsx(c,{children:r.productId.title})]}),e.jsxs("div",{children:["Category"," ",e.jsx(c,{children:r.productId.category})]}),e.jsxs(z,{children:[e.jsxs("div",{children:["Calories ",e.jsx(c,{children:r.calories})]}),e.jsxs("div",{children:["Weight ",e.jsx(c,{children:r.weight})]}),e.jsxs("div",{children:["Recommend"," ",e.jsx(c,{$recommend:!0,$color:r.productId.groupBloodNotAllowed[l],children:r.productId.groupBloodNotAllowed[l]?"Yes":"No"})]}),e.jsx("button",{onClick:()=>{n({id:r._id})},children:e.jsx(d,{icon:"icon-trash",size:"20",stroke:o.colors.secondary})})]})]},r._id))})]})},I=t.table`
  display: flex;
  flex-direction: column;
  gap: 8px;
  overflow: auto;
  height: ${i=>i.height}px;
  padding-right: 18px;
  font-size: 16px;
  line-height: 1.5;
  color: ${i=>i.theme.colors.white};

  &::-webkit-scrollbar {
    width: 6px;
    height: 90px;
    border-radius: 12px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgba(239, 237, 232, 0.1);
    border-radius: 12px;
  }
`,x=t.td`
  padding: 8px 14px;
  border: 1px solid rgba(239, 237, 232, 0.2);;
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
`,S=t.button`
  margin-left: 12px;
  width: 20px;
  height: 20px;
  background-color: transparent;

  @media screen and (min-width: 1440px) {
    margin-left: 20px;
  }
`,Z=t.thead`
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
`,ee=t.tbody`
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
`,ie=t.thead`
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
`,re=t.tbody`
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
`,te=E`
/* th, td {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
} */
`,ne=({list:i,forExercisesTable:s,forProductsTable:a,onDelete:n})=>{const{blood:l}=p(D);return e.jsxs(e.Fragment,{children:[s&&e.jsxs(I,{height:"154",children:[e.jsx(ie,{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Body Part"}),e.jsx("th",{children:"Equipment"}),e.jsx("th",{children:"Name"}),e.jsx("th",{children:"Target"}),e.jsx("th",{children:"Burned Calories"}),e.jsx("th",{children:"Time"}),e.jsx("th",{})]})}),e.jsx(re,{children:i.map(r=>e.jsxs("tr",{children:[e.jsx(x,{children:r.exerciseId.bodyPart}),e.jsx(x,{children:r.exerciseId.equipment}),e.jsx(x,{children:r.exerciseId.name}),e.jsx(x,{children:r.exerciseId.target}),e.jsx(x,{children:r.burnedCalories}),e.jsx(x,{children:r.time}),e.jsx("td",{children:e.jsx(S,{onClick:()=>{n({id:r._id})},children:e.jsx(d,{icon:"icon-trash",size:"20",stroke:o.colors.secondary})})})]},r._id))})]}),a&&e.jsxs(I,{height:"154",children:[e.jsx(Z,{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Title"}),e.jsx("th",{children:"Category"}),e.jsx("th",{children:"Calories"}),e.jsx("th",{children:"Weight"}),e.jsx("th",{children:"Recommend"}),e.jsx("th",{})]})}),e.jsx(ee,{children:i.map(r=>e.jsxs("tr",{children:[e.jsx(x,{children:r.productId.title}),e.jsx(x,{children:r.productId.category}),e.jsx(x,{children:r.calories}),e.jsx(x,{children:r.weight}),e.jsx(x,{$recommend:!0,$color:r.productId.groupBloodNotAllowed[l],children:r.productId.groupBloodNotAllowed[l]?"Yes":"No"}),e.jsx("td",{children:e.jsx(S,{onClick:()=>{n({id:r._id})},children:e.jsx(d,{icon:"icon-trash",size:"20",stroke:o.colors.secondary})})})]},r._id))})]}),e.jsx(te,{})]})},se=t.div`
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
    height: 234px;
    width: 704px;
  }

  @media screen and (min-width: 1440px) {
    width: 826px;
  }
`,oe=t.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 22px;
  font-size: 14px;
  line-height: 1.28;
  color: ${i=>i.theme.colors.textWhite50};
`,de=t(P)`
  display: flex;
  gap: 8px;
  align-items: center;
  color: ${i=>i.theme.colors.primary};

  @media screen and (min-width: 768px) {
    font-weight: 500;
    font-size: 16px;
    line-height: 1.5;
  }
`,le=t.p`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 14px;
  line-height: 1.28;
  color: ${i=>i.theme.colors.textWhite30};
`,B=({list:i,date:s,to:a,forExercisesTable:n,forProductsTable:l})=>{const r=W(),h=i&&i.length!==void 0&&i.length!==0?"yes":"no",g=i&&i.length!==void 0&&i.length!==0,m=({id:w})=>{r(n?N({id:w,date:s}):A({id:w,date:s}))};return e.jsxs(se,{list:h,children:[e.jsxs(oe,{children:[e.jsx("p",{children:n?"Exercises":"Products"}),e.jsxs(de,{to:a,children:["Add ",n?"exercise":"product",e.jsx(d,{icon:"icon-next",size:"16",color:o.colors.primary})]})]}),g?e.jsxs(e.Fragment,{children:[e.jsx(C,{maxWidth:767,children:e.jsx(X,{list:i,date:s,forExercisesTable:n,forProductsTable:l,onDelete:m})}),e.jsx(C,{minWidth:768,children:e.jsx(ne,{list:i,date:s,forExercisesTable:n,forProductsTable:l,onDelete:m})})]}):e.jsxs(le,{children:["Not found ",n?"exercises":"products"]})]})},ae=t.div`
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
`,ce=t.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    position: relative;
  }
`,xe=t.div`
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
`,pe=t.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`,he="DD/MM/YYYY",me=()=>{const[i,s]=k.useState(v().format(he)),a=p(_),n=p(F),{createdAt:l}=p(D),r=W();return k.useEffect(()=>{i&&r(O(i))},[i,r]),e.jsxs(ae,{children:[e.jsxs(ce,{children:[e.jsx(Y,{title:"Diary"}),e.jsx(Q,{date:i,setDate:s,minDate:l})]}),e.jsxs(xe,{children:[e.jsx(V,{}),e.jsxs(pe,{children:[e.jsx(B,{list:a,date:i,to:"/products",forProductsTable:!0})," ",e.jsx(B,{list:n,date:i,to:"/exercises",forExercisesTable:!0})]})]})]})},fe=me;export{fe as default};
