import{u as t,j as e,r as a,b as m}from"./index-279a04c8.js";import{E as y}from"./ExercisesSubcategoriesList-c3aa71b7.js";import{s as h}from"./sprite-d6b80375.js";const E=t.div`
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
`,k=t.h1`
  font-weight: 700;
  font-size: 24px;
  line-height: 1.17;
  color: white;
  margin: 0;
`,v=t.div`
  width: 335px;

  padding: 16px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  border-radius: 12px;
  background: rgba(239, 237, 232, 0.05);

  @media screen and (min-width: 1440px) {
    width: 405px;
  }
`,C=t.div`
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
`,B=t.div`
  display: flex;
  gap: 16px;
  margin-bottom: 8px;
`,I=t.p`
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
`,L=t.ul`
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
`,P=t.svg`
  stroke: orange;
`,R=t.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: orange;
`,$=t.svg`
  fill: white;
`,q=({subcategory:r})=>e.jsxs(v,{children:[e.jsxs(C,{children:[e.jsx(S,{children:"WORKOUT"}),e.jsxs(z,{children:["Start",e.jsx(P,{width:"16",height:"16",children:e.jsx("use",{href:h+"#icon-next"})})]})]}),e.jsxs(B,{children:[e.jsx(R,{children:e.jsx($,{width:"14",height:"16",children:e.jsx("use",{href:h+"#icon-running"})})}),e.jsx(I,{children:r.name})]}),e.jsxs(L,{children:[e.jsxs(x,{children:["Burned calories: ",e.jsx(l,{children:r.burnedCalories})]}),e.jsxs(x,{children:["Body part: ",e.jsx(l,{children:r.bodyPart})]}),e.jsxs(x,{children:["Target: ",e.jsx(l,{children:r.target})]})]})]}),A=t.li`
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
`,O=t.div`
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
`,T=t.p`
  font-weight: 400;
  font-size: 20px;
  line-height: 1.2;
  color: white;

  margin-top: 81px;
  margin-bottom: 0;
`,W=t.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
  color: grey;
  margin-top: 2px;
`,F=({subcategory:r,onSelect:c})=>e.jsx(A,{onClick:()=>c(r.filter,r.name.toLowerCase()),children:e.jsxs(O,{style:{backgroundImage:`linear-gradient(rgba(4, 4, 4, 0.5), rgba(4, 4, 4, 0.5)), url(${r.imgURL})`},children:[e.jsx(T,{children:r.name}),e.jsx(W,{children:r.filter})]})}),K=t.ul`
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
`,M=t.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  margin-top: 23px;
  @media screen and (min-width: 1440px) {
    width: 842px;
  }
`,N=t.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  margin-top: 23px;
`,U=t.button`
  display: flex;
  gap: 8px;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.29;
  color: rgba(239, 237, 232, 0.4);
  background: transparent;
  border: none;
  &:hover {
    color: orange;
  }
`,_=t.svg`
  transform: rotate(180deg);
  stroke: grey;
  &:hover {
    color: orange;
  }
`,G=t.div`
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

  overflow-y: auto;

  @media (min-width: 768px) {
    height: 507px;
    gap: 32px 16px;
  }
  @media (min-width: 1440px) {
    width: 850px;
  }
`,H={"Body parts":"bodyPart",Equipment:"equipment",Muscles:"target"},D=()=>{const[r,c]=a.useState([]),[g,u]=a.useState([]),[w,d]=a.useState(null),f=w!==null,o=async i=>{d(null);try{const n=await m.get(`/exercises?filter=${i}`);console.log(n,"response"),c(n.data[i])}catch(n){console.error("Error fetching exercises:",n)}},b=async(i,n)=>{try{const s=await m.get(`/exercises/params?key=${i}&value=${n}`);u(s.data.exercises)}catch(s){console.error("Error fetching exercises:",s)}};a.useEffect(()=>{o("bodyPart")},[]);const j=()=>f?e.jsxs("div",{children:[e.jsxs(U,{type:"button",onClick:()=>{document.title="React App",d(null)},children:[e.jsx(_,{width:"16",height:"16",children:e.jsx("use",{href:h+"#icon-next"})}),"BACK"]}),e.jsx(G,{style:{height:"500px"},children:e.jsx(M,{children:g.length>0?g.map(i=>e.jsx(q,{subcategory:i},i._id)):"Empty"})})]}):r&&r.length>0&&e.jsx(N,{children:r.map(i=>e.jsx(F,{subcategory:i,onSelect:async(n,s)=>{document.title=n,await b(H[n],s),d([n,s])}},i._id))});return e.jsxs("div",{children:[e.jsxs(K,{children:[e.jsx("li",{children:e.jsx(p,{onClick:()=>o("bodyPart"),children:"Body parts"})}),e.jsx("li",{children:e.jsx(p,{onClick:()=>o("equipment"),children:"Equipment"})}),e.jsx("li",{children:e.jsx(p,{onClick:()=>o("target"),children:"Muscles"})})]}),j()]})},J=()=>e.jsxs(E,{children:[e.jsx(k,{children:"Exercises"}),e.jsx(D,{}),e.jsx(y,{})]}),Y=J;export{Y as default};
