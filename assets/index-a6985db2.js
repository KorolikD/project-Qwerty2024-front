import{j as e,u as i,t as r}from"./index-fdc3a640.js";import{S as s}from"./SvgCustom-365a49cd.js";const a=()=>e.jsx(e.Fragment,{children:"DaySwitch"}),t=i.section`
  @media screen and (min-width: 768px) {
    max-width: 593px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 390px;
  }
`,l=i.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 20px;
  column-gap: 13px;
  margin-bottom: 20px;

  font-size: 12px;
  line-height: 1.33;
  color: ${n=>n.theme.colors.textWhite40};

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
`,o=i.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 96px;
  padding: 14px;
  border: 1px solid rgba(239, 237, 232, 0.4);
  border-radius: 12px;
  background: rgba(239, 237, 232, 0.05);

  &:nth-last-child(-n + 2) {
    @media screen and (max-width: 767px) {
      height: 108px;
    }
  }

  &:hover {
    background: ${n=>n.theme.colors.primary};
    div {
      color: rgba(239, 237, 232, 0.8);
    }
  }

  @media screen and (min-width: 768px) {
    padding: 18px;
    height: 116px;
  }
`,d=i.div`
  display: flex;
  gap: 8px;
  align-items: center;
`,c=i.p`
  font-weight: 700;
  font-size: 18px;
  line-height: 1.1;
  color: #efede8;

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 1.33;
  }
`,x=i.div`
  display: flex;
  gap: 8px;

  & > div {
    width: 24px;
    height: 24px;
    background-color: ${n=>n.theme.colors.lightSecondary};
    border-radius: 50%;
  }

  & > p {
    color: ${n=>n.theme.colors.textWhite30};
    font-size: 14px;
    line-height: 1.28;

    @media screen and (min-width: 768px) {
      font-size: 16px;
      line-height: 1.5;
    }
  }
`,p=()=>e.jsxs(t,{children:[e.jsxs(l,{children:[e.jsxs(o,{children:[e.jsxs(d,{children:[e.jsx(s,{icon:"icon-food",size:"20",color:r.colors.secondary}),e.jsx("p",{children:"Daily calorie intake"})]}),e.jsx(c,{children:"bmr"})]}),e.jsxs(o,{children:[e.jsxs(d,{children:[e.jsx(s,{icon:"icon-dumbbell",size:"20",color:r.colors.secondary}),e.jsx("p",{children:"Daily physical activity"})]}),e.jsx(c,{children:"dpa min"})]}),e.jsxs(o,{children:[e.jsxs(d,{children:[e.jsx(s,{icon:"icon-apple",size:"20",color:r.colors.secondary}),e.jsx("p",{children:"Calories consumed"})]}),e.jsx(c,{children:"caloriesC"})]}),e.jsxs(o,{children:[e.jsxs(d,{children:[e.jsx(s,{icon:"icon-apple",size:"20",color:r.colors.secondary}),e.jsx("p",{children:"Calories burned"})]}),e.jsx(c,{children:"caloriesB"})]}),e.jsxs(o,{children:[e.jsxs(d,{children:[e.jsx(s,{icon:"icon-bubble",size:"20",color:r.colors.secondary}),e.jsx("p",{children:"Calories remaining"})]}),e.jsx(c,{children:"restOfC"})]}),e.jsxs(o,{children:[e.jsxs(d,{children:[e.jsx(s,{icon:"icon-running",size:"20",color:r.colors.secondary}),e.jsx("p",{children:"Sports remaining"})]}),e.jsx(c,{children:"rest min"})]})]}),e.jsxs(x,{children:[e.jsx("div",{children:e.jsx(s,{icon:"icon-next",size:"24",color:r.colors.white})}),e.jsx("p",{children:"Record all your meals in the calorie diary every day. This will help you be aware of your nutrition and make informed choices."})]})]}),h=i.div`
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
`,m=i.div`
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
`,g=()=>e.jsxs(h,{children:[e.jsx("div",{children:e.jsxs("div",{children:["Title + ",e.jsx(a,{})]})}),e.jsxs(m,{children:[e.jsx(p,{}),e.jsxs("div",{children:[e.jsx("span",{children:"ProductsTable"})," ",e.jsx("span",{children:"ExercisesTable"})]})]})]}),y=g;export{y as default};
