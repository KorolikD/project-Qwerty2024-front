import{b as t,j as e,a,e as m}from"./index-53fbda63.js";import{E as b}from"./ExercisesSubcategoriesList-d29276cd.js";const y=t.div`
  margin: 0 auto;

  @media screen and (max-width: 767px) {
    max-width: 335px;
  }

  @media screen and (min-width: 768px) {
    max-width: 704px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1249px;
  }
`,E=t.h1`
  font-weight: 700;
  font-size: 24px;
  line-height: 1.17;
  color: white;
  margin: 0;
`,C=t.li`
  display: block;
  padding-bottom: 20px;

  @media screen and (min-width: 768px) {
    padding-bottom: 32px;
  }

  @media screen and (min-width: 1440px) {
    padding-bottom: 32px;
  }

  /* @media screen and (min-width: 768px) {
    width: calc((100% - 16px) / 3);
  } */
`,k=t.div`
  width: 335px;
  height: 206px;
  text-align: center;
  background-size: cover;
  background-position: center;
  background-color: #040404;
  border: 1px solid rgba(239, 237, 232, 0.2);
  border-radius: 12px;

  @media screen and (min-width: 768px) {
    width: 215px;
  }

  @media screen and (min-width: 1440px) {
    width: 237px;
  }
`,M=t.p`
  font-weight: 400;
  font-size: 20px;
  line-height: 1.2;
  color: white;

  margin-top: 81px;
  margin-bottom: 0;
`,z=t.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
  color: grey;
  margin-top: 2px;
`,N=({subcategory:i,onSelect:c})=>e.jsx(C,{onClick:()=>c(i.filter,i.name.toLowerCase()),children:e.jsxs(k,{style:{backgroundImage:`linear-gradient(rgba(4, 4, 4, 0.5), rgba(4, 4, 4, 0.5)), url(${i.imgURL})`},children:[e.jsx(M,{children:i.name}),e.jsx(z,{children:i.filter})]})}),S=t.ul`
  list-style-type: none;
  display: flex;
  gap: 20px;
  margin-bottom: 40px;
  padding-top: 20px;
  @media screen and (min-width: 768px) {
    margin-bottom: 0;
    padding-top: 0;
  }
`,x=t.a`
  font-weight: 400;
  font-size: 14px;
  line-height: 1.29;
  color: grey;
  cursor: pointer;
  &:hover {
    color: orange;
  }
`,g=t.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  margin-top: 23px;
`,v=t.div`
  width: 335px;
  height: 100%;
  padding: 16px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  border-radius: 12px;
  background: rgba(239, 237, 232, 0.05);

  @media screen and (min-width: 1440px) {
    width: 405px;
  }
`,J=t.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 33px;
`,B=t.p`
  font-weight: 700;
  font-size: 12px;
  color: white;
  padding: 5px 7px;
  border-radius: 4px;
  width: 73px;
  height: 24px;
  background-color: rgba(239, 237, 232, 0.05);
`,D=t.button`
  display: flex;
  gap: 8px;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.29;
  color: orange;
  background-color: transparent;
  border: none;
`,Z=t.div`
  display: flex;
  gap: 16px;
  margin-bottom: 8px;
`,L=t.p`
  font-weight: 400;
  font-size: 20px;
  line-height: 1.2;
  color: white;
  &::first-letter {
    text-transform: uppercase;
  }
  display: block;
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`,T=t.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 4px 16px;
`,p=t.li`
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
  color: rgba(239, 237, 232, 0.4);
`,l=t.span`
  color: white;
  text-transform: capitalize;
`,q=({subcategory:i})=>e.jsxs(v,{children:[e.jsxs(J,{children:[e.jsx(B,{children:"WORKOUT"}),e.jsx(D,{children:"Start"})]}),e.jsx(Z,{children:e.jsx(L,{children:i.name})}),e.jsxs(T,{children:[e.jsxs(p,{children:["Burned calories: ",e.jsx(l,{children:i.burnedCalories})]}),e.jsxs(p,{children:["Body part: ",e.jsx(l,{children:i.bodyPart})]}),e.jsxs(p,{children:["Target: ",e.jsx(l,{children:i.target})]})]})]}),P={"Body parts":"bodyPart",Equipment:"equipment",Muscles:"target"},U=()=>{const[i,c]=a.useState([]),[h,w]=a.useState([]),[u,d]=a.useState(null),j=u!==null,o=async r=>{d(null);try{const s=await m.get(`https://project-qwerty2024-back.onrender.com/api/exercises?filter=${r}`,{headers:{Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZTdmNWMxMzVkMDMzNGExMWJmZDUwZiIsImlhdCI6MTcxMDAxNjI3NywiZXhwIjoxNzEwMDk5MDc3fQ.aI3kmFl8HoTdpl6oJkojjqSxgx-uU4I0B7EMuVQ9a8I"}});console.log(s,"response"),c(s.data[r])}catch(s){console.error("Error fetching exercises:",s)}},f=async(r,s)=>{try{const n=await m.get(`https://project-qwerty2024-back.onrender.com/api/exercises/params?key=${r}&value=${s}`,{headers:{Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZTdmNWMxMzVkMDMzNGExMWJmZDUwZiIsImlhdCI6MTcxMDAxNjI3NywiZXhwIjoxNzEwMDk5MDc3fQ.aI3kmFl8HoTdpl6oJkojjqSxgx-uU4I0B7EMuVQ9a8I"}});w(n.data.exercises)}catch(n){console.error("Error fetching exercises:",n)}};a.useEffect(()=>{o("bodyPart")},[]);const I=()=>j?e.jsxs("div",{children:[e.jsx("button",{onClick:()=>{document.title="React App",d(null)},children:"back"}),e.jsx(g,{children:h.length>0?h.map(r=>e.jsx(q,{subcategory:r},r._id)):"Empty"})]}):i&&i.length>0&&e.jsx(g,{children:i.map(r=>e.jsx(N,{subcategory:r,onSelect:async(s,n)=>{document.title=s,await f(P[s],n),d([s,n])}},r._id))});return e.jsxs("div",{children:[e.jsxs(S,{children:[e.jsx("li",{children:e.jsx(x,{onClick:()=>o("bodyPart"),children:"Body parts"})}),e.jsx("li",{children:e.jsx(x,{onClick:()=>o("equipment"),children:"Equipment"})}),e.jsx("li",{children:e.jsx(x,{onClick:()=>o("target"),children:"Muscles"})})]}),I()]})},R=()=>e.jsxs(y,{children:[e.jsx(E,{children:"Exercises"}),e.jsx(U,{}),e.jsx(b,{})]}),V=R;export{V as default};
