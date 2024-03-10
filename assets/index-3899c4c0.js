import{b as t,j as e,a,e as g}from"./index-923bf442.js";import{E}from"./ExercisesSubcategoriesList-5644937b.js";const y=t.div`
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
`,C=t.h1`
  font-weight: 700;
  font-size: 24px;
  line-height: 1.17;
  color: white;
  margin: 0;
`,k=t.div`
  width: 335px;
  height: 100%;
  padding: 16px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  border-radius: 12px;
  background: rgba(239, 237, 232, 0.05);

  @media screen and (min-width: 1440px) {
    width: 405px;
  }
`,v=t.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 33px;
`,S=t.p`
  font-weight: 700;
  font-size: 12px;
  color: white;
  padding: 5px 7px;
  border-radius: 4px;
  width: 73px;
  height: 24px;
  background-color: rgba(239, 237, 232, 0.05);
`,z=t.button`
  display: flex;
  gap: 8px;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.29;
  color: orange;
  background-color: transparent;
  border: none;
`,I=t.div`
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
`,P=t.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 4px 16px;
`,x=t.li`
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
  color: rgba(239, 237, 232, 0.4);
`,l=t.span`
  color: white;
  text-transform: capitalize;
`,B=({subcategory:i})=>e.jsxs(k,{children:[e.jsxs(v,{children:[e.jsx(S,{children:"WORKOUT"}),e.jsx(z,{children:"Start"})]}),e.jsx(I,{children:e.jsx(L,{children:i.name})}),e.jsxs(P,{children:[e.jsxs(x,{children:["Burned calories: ",e.jsx(l,{children:i.burnedCalories})]}),e.jsxs(x,{children:["Body part: ",e.jsx(l,{children:i.bodyPart})]}),e.jsxs(x,{children:["Target: ",e.jsx(l,{children:i.target})]})]})]}),R=t.li`
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
`,$=t.div`
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
`,q=t.p`
  font-weight: 400;
  font-size: 20px;
  line-height: 1.2;
  color: white;

  margin-top: 81px;
  margin-bottom: 0;
`,O=t.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
  color: grey;
  margin-top: 2px;
`,T=({subcategory:i,onSelect:c})=>e.jsx(R,{onClick:()=>c(i.filter,i.name.toLowerCase()),children:e.jsxs($,{style:{backgroundImage:`linear-gradient(rgba(4, 4, 4, 0.5), rgba(4, 4, 4, 0.5)), url(${i.imgURL})`},children:[e.jsx(q,{children:i.name}),e.jsx(O,{children:i.filter})]})}),W=t.ul`
  list-style-type: none;
  display: flex;
  gap: 20px;
  margin-bottom: 40px;
  padding-top: 20px;
  @media screen and (min-width: 768px) {
    margin-bottom: 0;
    padding-top: 0;
  }
`,p=t.a`
  font-weight: 400;
  font-size: 14px;
  line-height: 1.29;
  color: grey;
  cursor: pointer;
  &:hover {
    color: orange;
  }
`,m=t.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  margin-top: 23px;
`,A={"Body parts":"bodyPart",Equipment:"equipment",Muscles:"target"},F=()=>{const[i,c]=a.useState([]),[h,u]=a.useState([]),[w,d]=a.useState(null),f=w!==null,o=async r=>{d(null);try{const s=await g.get(`/exercises?filter=${r}`);console.log(s,"response"),c(s.data[r])}catch(s){console.error("Error fetching exercises:",s)}},j=async(r,s)=>{try{const n=await g.get(`/exercises/params?key=${r}&value=${s}`);u(n.data.exercises)}catch(n){console.error("Error fetching exercises:",n)}};a.useEffect(()=>{o("bodyPart")},[]);const b=()=>f?e.jsxs("div",{children:[e.jsx("button",{onClick:()=>{document.title="React App",d(null)},children:"back"}),e.jsx(m,{children:h.length>0?h.map(r=>e.jsx(B,{subcategory:r},r._id)):"Empty"})]}):i&&i.length>0&&e.jsx(m,{children:i.map(r=>e.jsx(T,{subcategory:r,onSelect:async(s,n)=>{document.title=s,await j(A[s],n),d([s,n])}},r._id))});return e.jsxs("div",{children:[e.jsxs(W,{children:[e.jsx("li",{children:e.jsx(p,{onClick:()=>o("bodyPart"),children:"Body parts"})}),e.jsx("li",{children:e.jsx(p,{onClick:()=>o("equipment"),children:"Equipment"})}),e.jsx("li",{children:e.jsx(p,{onClick:()=>o("target"),children:"Muscles"})})]}),b()]})},M=()=>e.jsxs(y,{children:[e.jsx(C,{children:"Exercises"}),e.jsx(F,{}),e.jsx(E,{})]}),_=M;export{_ as default};
