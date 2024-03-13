import{u as n,r as C,j as e,t as d,i as x,s as k,k as w,N as F,a as S,m as N,n as A,o as L}from"./index-e5a1b9cd.js";import{d as v}from"./dayjs.min-ec3dcfb4.js";import{C as O,D as Y,a as _,b as j,S as u,c as b,A as R,T as q}from"./DayDashboard.styled-29f46d74.js";import{S as l}from"./SvgCustom-4cd3e6cc.js";import{M as T}from"./react-responsive-8311c36e.js";import"./motion-b0eef5cd.js";import"./index-aaa86848.js";import"./ResizeObserver.es-f4289e8a.js";const H=i=>i.diary.productsList,U=i=>i.diary.exercisesList,G=i=>i.diary.totalCalories,Q=i=>i.diary.burnedCalories,J=i=>i.diary.timeSpentOnExercises,K=i=>i.diary.isLoading,B=i=>i.diary.updateDiaryProducts,W=i=>i.diary.updateDiaryExercises,V=n.div`
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
`,X=n.div`
  display: flex;
  gap: 8px;
  align-items: center;

  > button {
    height: 16px;
    background: transparent;
  }
`,f="DD/MM/YYYY",Z=({date:i,setDate:o,minDate:p})=>{const[s,a]=C.useState(!1),h=v(p).format(f),c=i===h,r=()=>{const y=v(i,f).add(1,"day").format(f);o(y)},t=()=>{const y=v(i,f).subtract(1,"day").format(f);o(y)},D=()=>{a(y=>!y)};return e.jsxs(V,{children:[e.jsxs("button",{onClick:D,children:[e.jsx("span",{children:i}),e.jsx(l,{icon:"icon-calendar",size:"20",stroke:d.colors.secondary})]}),e.jsxs(X,{children:[e.jsx("button",{onClick:t,disabled:c,children:e.jsx(l,{icon:"icon-chevron-left",size:"14",stroke:c?"rgba(239, 237, 232, 0.2)":d.colors.white,color:c?"rgba(239, 237, 232, 0.2)":d.colors.white})}),e.jsx("button",{onClick:r,children:e.jsx(l,{icon:"icon-chevron-right",size:"14",stroke:d.colors.white,color:d.colors.white})}),e.jsx(O,{date:i,setDate:o,minDate:p,isOpen:s,setIsOpen:a})]})]})},ee=()=>{const{bmr:i,dpa:o}=x(k),p=x(G),s=x(Q),a=x(J),h=Math.round(o-a),c=Math.round(i-p),r=c<0?"red":"green",t=h<0?"green":"red";return e.jsxs(Y,{children:[e.jsxs(_,{children:[e.jsxs(j,{children:[e.jsxs(u,{children:[e.jsx(l,{icon:"icon-food",size:"20",color:d.colors.secondary}),e.jsx("p",{children:"Daily calorie intake"})]}),e.jsx(b,{children:i})]}),e.jsxs(j,{children:[e.jsxs(u,{children:[e.jsx(l,{icon:"icon-dumbbell",size:"20",color:d.colors.secondary}),e.jsx("p",{children:"Daily physical activity"})]}),e.jsxs(b,{children:[o," min"]})]}),e.jsxs(j,{children:[e.jsxs(u,{children:[e.jsx(l,{icon:"icon-apple",size:"20",color:d.colors.secondary}),e.jsx("p",{children:"Calories consumed"})]}),e.jsx(b,{children:Math.round(p)})]}),e.jsxs(j,{children:[e.jsxs(u,{children:[e.jsx(l,{icon:"icon-apple",size:"20",color:d.colors.secondary}),e.jsx("p",{children:"Calories burned"})]}),e.jsx(b,{children:Math.round(s)})]}),e.jsxs(j,{$border:r,children:[e.jsxs(u,{children:[e.jsx(l,{icon:"icon-bubble",size:"20",color:d.colors.secondary}),e.jsx("p",{children:"Calories remaining"})]}),e.jsxs(b,{children:[!r&&"-",c]})]}),e.jsxs(j,{$border:t,children:[e.jsxs(u,{children:[e.jsx(l,{icon:"icon-running",size:"20",color:d.colors.secondary}),e.jsx("p",{children:"Sports remaining"})]}),e.jsxs(b,{children:[t&&"+",h," min"]})]})]}),e.jsxs(R,{children:[e.jsx("div",{children:e.jsx(l,{icon:"icon-exclamation-mark",size:"16",stroke:d.colors.white})}),e.jsx("p",{children:"Record all your meals in the calorie diary every day. This will help you be aware of your nutrition and make informed choices."})]})]})},I=n.ul`
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
`,$=n.li`
  display: flex;
  flex-direction: column;
  gap: 14px;
`,z=n.div`
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
`,m=n.p`
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
`,ie=({list:i,forExercisesTable:o,forProductsTable:p,onDelete:s})=>{const{blood:a}=x(k),h=x(B),c=x(W),r=i&&i.length!==void 0&&i.length>=3;return e.jsxs(e.Fragment,{children:[c?e.jsx(w,{}):e.jsx(e.Fragment,{children:o&&e.jsx(I,{height:r?"992px":"auto",children:i.map(t=>e.jsxs($,{children:[e.jsxs("div",{children:["Body Part"," ",e.jsx(m,{children:t.exerciseId.bodyPart})]}),e.jsxs("div",{children:["Equipment"," ",e.jsx(m,{children:t.exerciseId.equipment})]}),e.jsxs("div",{children:["Name"," ",e.jsx(m,{children:t.exerciseId.name})]}),e.jsxs(z,{children:[e.jsxs("div",{children:["Target"," ",e.jsx(m,{children:t.exerciseId.target})]}),e.jsxs("div",{children:["BurnedCalories"," ",e.jsx(m,{children:Math.round(t.burnedCalories)})]}),e.jsxs("div",{children:["Time"," ",e.jsx(m,{children:Math.round(t.time)})]}),e.jsx("button",{onClick:()=>{s({id:t._id})},children:e.jsx(l,{icon:"icon-trash",size:"20",stroke:d.colors.secondary})})]})]},t._id))})}),h?e.jsx(w,{}):e.jsx(e.Fragment,{children:p&&e.jsx(I,{height:r?"752px":"auto",children:i.map(t=>e.jsxs($,{children:[e.jsxs("div",{children:["Title"," ",e.jsx(m,{children:t.productId.title})]}),e.jsxs("div",{children:["Category"," ",e.jsx(m,{children:t.productId.category})]}),e.jsxs(z,{children:[e.jsxs("div",{children:["Calories"," ",e.jsx(m,{children:Math.round(t.calories)})]}),e.jsxs("div",{children:["Weight"," ",e.jsx(m,{children:Math.round(t.weight)})]}),e.jsxs("div",{children:["Recommend"," ",e.jsx(m,{$recommend:!0,$color:t.productId.groupBloodNotAllowed[a],children:t.productId.groupBloodNotAllowed[a]?"Yes":"No"})]}),e.jsx("button",{onClick:()=>{s({id:t._id})},children:e.jsx(l,{icon:"icon-trash",size:"20",stroke:d.colors.secondary})})]})]},t._id))})})]})},M=n.table`
  display: flex;
  flex-direction: column;
  gap: 6px;
  font-size: 16px;
  line-height: 1.5;
  color: ${i=>i.theme.colors.white};
`,g=n.td`
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
`,P=n.button`
  margin-left: 12px;
  width: 20px;
  height: 20px;
  background-color: transparent;

  @media screen and (min-width: 1440px) {
    margin-left: 20px;
  }
`,re=n.thead`
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
`,te=n.tbody`
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
`,ne=n.thead`
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
`,se=n.tbody`
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
`,oe=({list:i,forExercisesTable:o,forProductsTable:p,onDelete:s})=>{const{blood:a}=x(k),h=x(B),c=x(W);return e.jsxs(e.Fragment,{children:[c?e.jsx(w,{}):e.jsx(e.Fragment,{children:o&&e.jsxs(M,{children:[e.jsx(ne,{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Body Part"}),e.jsx("th",{children:"Equipment"}),e.jsx("th",{children:"Name"}),e.jsx("th",{children:"Target"}),e.jsx("th",{children:"Burned Calories"}),e.jsx("th",{children:"Time"}),e.jsx("th",{})]})}),e.jsx(se,{children:i.map(r=>e.jsxs("tr",{children:[e.jsx(g,{children:r.exerciseId.bodyPart}),e.jsx(g,{children:r.exerciseId.equipment}),e.jsx(g,{children:r.exerciseId.name}),e.jsx(g,{children:r.exerciseId.target}),e.jsx(g,{children:Math.round(r.burnedCalories)}),e.jsx(g,{children:Math.round(r.time)}),e.jsx("td",{children:e.jsx(P,{onClick:()=>{s({id:r._id})},children:e.jsx(l,{icon:"icon-trash",size:"20",stroke:d.colors.secondary})})})]},r._id))})]})}),h?e.jsx(w,{}):e.jsx(e.Fragment,{children:p&&e.jsxs(M,{children:[e.jsx(re,{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Title"}),e.jsx("th",{children:"Category"}),e.jsx("th",{children:"Calories"}),e.jsx("th",{children:"Weight"}),e.jsx("th",{children:"Recommend"}),e.jsx("th",{})]})}),e.jsx(te,{children:i.map(r=>e.jsxs("tr",{children:[e.jsx(g,{children:r.productId.title}),e.jsx(g,{children:r.productId.category}),e.jsx(g,{children:Math.round(r.calories)}),e.jsx(g,{children:Math.round(r.weight)}),e.jsx(g,{$recommend:!0,$color:r.productId.groupBloodNotAllowed[a],children:r.productId.groupBloodNotAllowed[a]?"Yes":"No"}),e.jsx("td",{children:e.jsx(P,{onClick:()=>{s({id:r._id})},children:e.jsx(l,{icon:"icon-trash",size:"20",stroke:d.colors.secondary})})})]},r._id))})]})})]})},de=n.div`
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
`,ae=n.div`
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
`,ce=n(F)`
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
`,E=({list:i,date:o,to:p,forExercisesTable:s,forProductsTable:a})=>{const h=S(),c=i&&i.length!==void 0&&i.length!==0?"yes":"no",r=i&&i.length!==void 0&&i.length!==0,t=({id:D})=>{h(s?N({id:D,date:o}):A({id:D,date:o}))};return e.jsxs(de,{list:c,children:[e.jsxs(ae,{children:[e.jsx("p",{children:s?"Exercises":"Products"}),e.jsxs(ce,{to:p,children:["Add ",s?"exercise":"product",e.jsx(l,{icon:"icon-next",size:"16",color:d.colors.primary})]})]}),r?e.jsxs(e.Fragment,{children:[e.jsx(T,{maxWidth:767,children:e.jsx(ie,{list:i,date:o,forExercisesTable:s,forProductsTable:a,onDelete:t})}),e.jsx(T,{minWidth:768,children:e.jsx(oe,{list:i,date:o,forExercisesTable:s,forProductsTable:a,onDelete:t})})]}):e.jsxs(le,{children:["Not found ",s?"exercises":"products"]})]})},xe=n.div`
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
`,pe=n.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    position: relative;
  }
`,he=n.div`
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
`,me=n.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`,ge="DD/MM/YYYY",je=()=>{const[i,o]=C.useState(v().format(ge)),p=x(H),s=x(U),a=x(K),{createdAt:h}=x(k),c=S();return C.useEffect(()=>{i&&c(L(i))},[i,c]),e.jsx(e.Fragment,{children:a?e.jsx(w,{}):e.jsxs(xe,{children:[e.jsxs(pe,{children:[e.jsx(q,{title:"Diary"}),e.jsx(Z,{date:i,setDate:o,minDate:h})]}),e.jsxs(he,{children:[e.jsx(ee,{}),e.jsxs(me,{children:[e.jsx(E,{list:p,date:i,to:"/products",forProductsTable:!0}),e.jsx(E,{list:s,date:i,to:"/exercises",forExercisesTable:!0})]})]})]})})},Ce=je;export{Ce as default};
