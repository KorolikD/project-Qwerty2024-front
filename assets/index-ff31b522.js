import{u as t,r as C,j as e,t as s,i as x,s as k,k as w,N as W,a as S,m as N,n as A,o as L}from"./index-e0171bad.js";import{d as D}from"./dayjs.min-bb52a37e.js";import{C as O,D as Y,a as _,b as j,S as u,c as y,A as R,T as q}from"./DayDashboard.styled-f20fe3f8.js";import{S as l}from"./SvgCustom-e523116d.js";import{M as T}from"./react-responsive-ea41b347.js";import"./motion-24972cbd.js";import"./index-a5c673f7.js";import"./ResizeObserver.es-f4289e8a.js";const H=i=>i.diary.productsList,U=i=>i.diary.exercisesList,G=i=>i.diary.totalCalories,Q=i=>i.diary.burnedCalories,J=i=>i.diary.timeSpentOnExercises,K=i=>i.diary.isLoading,B=i=>i.diary.updateDiaryProducts,F=i=>i.diary.updateDiaryExercises,V=t.div`
  position: relative;
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
`,X=t.div`
  display: flex;
  gap: 8px;
  align-items: center;

  > button {
    height: 16px;
    background: transparent;
  }

  > div {
    position: absolute;
    top: 8px;
    left: -34px;

    @media screen and (min-width: 768px) {
      left: 0;
    }
  }
`,f="DD/MM/YYYY",Z=({date:i,setDate:d,minDate:p})=>{const[n,c]=C.useState(!1),h=D(p).format(f),a=i===h,r=()=>{const b=D(i,f).add(1,"day").format(f);d(b)},o=()=>{const b=D(i,f).subtract(1,"day").format(f);d(b)},v=()=>{c(b=>!b)};return e.jsxs(V,{children:[e.jsxs("button",{onClick:v,children:[e.jsx("span",{children:i}),e.jsx(l,{icon:"icon-calendar",size:"20",stroke:s.colors.secondary})]}),e.jsxs(X,{children:[e.jsx("button",{onClick:o,disabled:a,children:e.jsx(l,{icon:"icon-chevron-left",size:"14",stroke:a?"rgba(239, 237, 232, 0.2)":s.colors.white,color:a?"rgba(239, 237, 232, 0.2)":s.colors.white,hover:!a&&s.colors.secondary})}),e.jsx("button",{onClick:r,children:e.jsx(l,{icon:"icon-chevron-right",size:"14",stroke:s.colors.white,color:s.colors.white,hover:s.colors.secondary})}),e.jsx("div",{children:e.jsx(O,{date:i,setDate:d,minDate:p,isOpen:n,setIsOpen:c})})]})]})},ee=()=>{const{bmr:i,dpa:d}=x(k),p=x(G),n=x(Q),c=x(J),h=Math.round(d-c),a=Math.round(i-p),r=a<0?"red":"green",o=h<0?"green":"red";return e.jsxs(Y,{children:[e.jsxs(_,{children:[e.jsxs(j,{children:[e.jsxs(u,{children:[e.jsx(l,{icon:"icon-food",size:"20",color:s.colors.secondary}),e.jsx("p",{children:"Daily calorie intake"})]}),e.jsx(y,{children:i})]}),e.jsxs(j,{children:[e.jsxs(u,{children:[e.jsx(l,{icon:"icon-dumbbell",size:"20",color:s.colors.secondary}),e.jsx("p",{children:"Daily physical activity"})]}),e.jsxs(y,{children:[d," min"]})]}),e.jsxs(j,{children:[e.jsxs(u,{children:[e.jsx(l,{icon:"icon-apple",size:"20",color:s.colors.secondary}),e.jsx("p",{children:"Calories consumed"})]}),e.jsx(y,{children:Math.round(p)})]}),e.jsxs(j,{children:[e.jsxs(u,{children:[e.jsx(l,{icon:"icon-apple",size:"20",color:s.colors.secondary}),e.jsx("p",{children:"Calories burned"})]}),e.jsx(y,{children:Math.round(n)})]}),e.jsxs(j,{$border:r,children:[e.jsxs(u,{children:[e.jsx(l,{icon:"icon-bubble",size:"20",color:s.colors.secondary}),e.jsx("p",{children:"Calories remaining"})]}),e.jsxs(y,{children:[!r&&"-",a]})]}),e.jsxs(j,{$border:o,children:[e.jsxs(u,{children:[e.jsx(l,{icon:"icon-running",size:"20",color:s.colors.secondary}),e.jsx("p",{children:"Sports remaining"})]}),e.jsxs(y,{children:[o&&"+",h," min"]})]})]}),e.jsxs(R,{children:[e.jsx("div",{children:e.jsx(l,{icon:"icon-exclamation-mark",size:"16",stroke:s.colors.white})}),e.jsx("p",{children:"Record all your meals in the calorie diary every day. This will help you be aware of your nutrition and make informed choices."})]})]})},$=t.ul`
  display: flex;
  flex-direction: column;
  overflow: auto;
  gap: 36px;
  padding-right: 8px;
  margin: 0;
  font-size: 12px;
  line-height: 1.5;
  color: ${i=>i.theme.colors.secondary};
  height: ${i=>i.height};

  &::-webkit-scrollbar {
    width: 6px;
    height: 203px;
    border-radius: 12px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgba(239, 237, 232, 0.1);
    border-radius: 12px;
  }
`,I=t.li`
  display: flex;
  flex-direction: column;
  gap: 14px;
`,z=t.div`
  display: flex;
  > div {
    overflow: hidden;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    &:nth-child(1) {
      width: 81px;
      margin-right: 15px;
    }

    &:nth-child(2) {
      width: 80px;
      margin-right: 15px;
    }

    &:nth-child(3) {
      width: 76px;
      margin-right: 14px;
    }
  }

  > button {
    margin-top: 33px;
    width: 20px;
    height: 20px;
    background-color: transparent;
  }
`,m=t.p`
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
`,ie=({list:i,forExercisesTable:d,forProductsTable:p,onDelete:n})=>{const{blood:c}=x(k),h=x(B),a=x(F),r=i&&i.length!==void 0&&i.length>=3;return e.jsxs(e.Fragment,{children:[a?e.jsx(w,{}):e.jsx(e.Fragment,{children:d&&e.jsx($,{height:r?"992px":"auto",children:i.map(o=>e.jsxs(I,{children:[e.jsxs("div",{children:["Body Part"," ",e.jsx(m,{children:o.exerciseId.bodyPart})]}),e.jsxs("div",{children:["Equipment"," ",e.jsx(m,{children:o.exerciseId.equipment})]}),e.jsxs("div",{children:["Name"," ",e.jsx(m,{children:o.exerciseId.name})]}),e.jsxs(z,{children:[e.jsxs("div",{children:["Target"," ",e.jsx(m,{children:o.exerciseId.target})]}),e.jsxs("div",{children:["BurnedCalories"," ",e.jsx(m,{children:Math.round(o.burnedCalories)})]}),e.jsxs("div",{children:["Time"," ",e.jsx(m,{children:o.time.toFixed(2)})]}),e.jsx("button",{onClick:()=>{n({id:o._id})},children:e.jsx(l,{icon:"icon-trash",size:"20",stroke:s.colors.secondary,hover:s.colors.primary})})]})]},o._id))})}),h?e.jsx(w,{}):e.jsx(e.Fragment,{children:p&&e.jsx($,{height:r?"752px":"auto",children:i.map(o=>e.jsxs(I,{children:[e.jsxs("div",{children:["Title"," ",e.jsx(m,{children:o.productId.title})]}),e.jsxs("div",{children:["Category"," ",e.jsx(m,{children:o.productId.category})]}),e.jsxs(z,{children:[e.jsxs("div",{children:["Calories"," ",e.jsx(m,{children:Math.round(o.calories)})]}),e.jsxs("div",{children:["Weight"," ",e.jsx(m,{children:Math.round(o.weight)})]}),e.jsxs("div",{children:["Recommend"," ",e.jsx(m,{$recommend:!0,$color:o.productId.groupBloodNotAllowed[c],children:o.productId.groupBloodNotAllowed[c]?"Yes":"No"})]}),e.jsx("button",{onClick:()=>{n({id:o._id})},children:e.jsx(l,{icon:"icon-trash",size:"20",stroke:s.colors.secondary,hover:s.colors.primary})})]})]},o._id))})})]})},M=t.table`
  display: flex;
  flex-direction: column;
  gap: 6px;
  font-size: 16px;
  line-height: 1.5;
  color: ${i=>i.theme.colors.white};
`,g=t.td`
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
`,P=t.button`
  margin-left: 12px;
  width: 20px;
  height: 20px;
  background-color: transparent;

  @media screen and (min-width: 1440px) {
    margin-left: 20px;
  }
`,re=t.thead`
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
`,oe=t.tbody`
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
`,se=t.thead`
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
`,te=t.tbody`
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
`,ne=({list:i,forExercisesTable:d,forProductsTable:p,onDelete:n})=>{const{blood:c}=x(k),h=x(B),a=x(F);return e.jsxs(e.Fragment,{children:[a?e.jsx(w,{}):e.jsx(e.Fragment,{children:d&&e.jsxs(M,{children:[e.jsx(se,{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Body Part"}),e.jsx("th",{children:"Equipment"}),e.jsx("th",{children:"Name"}),e.jsx("th",{children:"Target"}),e.jsx("th",{children:"Burned Calories"}),e.jsx("th",{children:"Time"}),e.jsx("th",{})]})}),e.jsx(te,{children:i.map(r=>e.jsxs("tr",{children:[e.jsx(g,{children:r.exerciseId.bodyPart}),e.jsx(g,{children:r.exerciseId.equipment}),e.jsx(g,{children:r.exerciseId.name}),e.jsx(g,{children:r.exerciseId.target}),e.jsx(g,{children:Math.round(r.burnedCalories)}),e.jsx(g,{children:r.time.toFixed(2)}),e.jsx("td",{children:e.jsx(P,{onClick:()=>{n({id:r._id})},children:e.jsx(l,{icon:"icon-trash",size:"20",stroke:s.colors.secondary,hover:s.colors.primary})})})]},r._id))})]})}),h?e.jsx(w,{}):e.jsx(e.Fragment,{children:p&&e.jsxs(M,{children:[e.jsx(re,{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Title"}),e.jsx("th",{children:"Category"}),e.jsx("th",{children:"Calories"}),e.jsx("th",{children:"Weight"}),e.jsx("th",{children:"Recommend"}),e.jsx("th",{})]})}),e.jsx(oe,{children:i.map(r=>e.jsxs("tr",{children:[e.jsx(g,{children:r.productId.title}),e.jsx(g,{children:r.productId.category}),e.jsx(g,{children:Math.round(r.calories)}),e.jsx(g,{children:Math.round(r.weight)}),e.jsx(g,{$recommend:!0,$color:r.productId.groupBloodNotAllowed[c],children:r.productId.groupBloodNotAllowed[c]?"Yes":"No"}),e.jsx("td",{children:e.jsx(P,{onClick:()=>{n({id:r._id})},children:e.jsx(l,{icon:"icon-trash",size:"20",stroke:s.colors.secondary,hover:s.colors.primary})})})]},r._id))})]})})]})},de=t.div`
  position: relative;
  overflow: hidden;
  margin: 0 auto;
  padding: 16px 8px 16px 16px;
  height: ${i=>i.list==="no"?"335px":"auto"};
  width: 335px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  background: rgba(239, 237, 232, 0.05);
  border-radius: 12px;

  @media screen and (max-width: 767px) {
    min-height: 335px;
  }

  @media screen and (min-width: 768px) {
    height: 238px;
    width: 704px;
  }

  @media screen and (min-width: 1440px) {
    width: 828px;
  }
`,ae=t.div`
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
`,ce=t(W)`
  display: flex;
  gap: 8px;
  align-items: center;
  color: ${i=>i.theme.colors.primary};
  transition: color 350ms ease;

  &:hover,
  &:focus {
    color: ${i=>i.theme.colors.secondary};
  }

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
`,E=({list:i,date:d,to:p,forExercisesTable:n,forProductsTable:c})=>{const h=S(),a=i&&i.length!==void 0&&i.length!==0?"yes":"no",r=i&&i.length!==void 0&&i.length!==0,o=({id:v})=>{h(n?N({id:v,date:d}):A({id:v,date:d}))};return e.jsxs(de,{list:a,children:[e.jsxs(ae,{children:[e.jsx("p",{children:n?"Exercises":"Products"}),e.jsxs(ce,{to:p,children:["Add ",n?"exercise":"product",e.jsx(l,{icon:"icon-next",size:"24",color:s.colors.primary,hover:s.colors.secondary})]})]}),r?e.jsxs(e.Fragment,{children:[e.jsx(T,{maxWidth:767,children:e.jsx(ie,{list:i,date:d,forExercisesTable:n,forProductsTable:c,onDelete:o})}),e.jsx(T,{minWidth:768,children:e.jsx(ne,{list:i,date:d,forExercisesTable:n,forProductsTable:c,onDelete:o})})]}):e.jsxs(le,{children:["Not found ",n?"exercises":"products"]})]})},xe=t.div`
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
`,pe=t.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    position: relative;
  }
`,he=t.div`
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
`,me=t.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`,ge="DD/MM/YYYY",je=()=>{const[i,d]=C.useState(D().format(ge)),p=x(H),n=x(U),c=x(K),{createdAt:h}=x(k),a=S();return C.useEffect(()=>{i&&a(L(i))},[i,a]),e.jsx(e.Fragment,{children:c?e.jsx(w,{}):e.jsxs(xe,{children:[e.jsxs(pe,{children:[e.jsx(q,{title:"Diary"}),e.jsx(Z,{date:i,setDate:d,minDate:h})]}),e.jsxs(he,{children:[e.jsx(ee,{}),e.jsxs(me,{children:[e.jsx(E,{list:p,date:i,to:"/products",forProductsTable:!0}),e.jsx(E,{list:n,date:i,to:"/exercises",forExercisesTable:!0})]})]})]})})},Ce=je;export{Ce as default};
