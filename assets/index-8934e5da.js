import{u as t,j as e,r as n,b as f}from"./index-9ce9cf9e.js";import{E as k}from"./ExercisesSubcategoriesList-fd9af632.js";import{s as g}from"./sprite-d58cb6ca.js";const v=t.div`
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
`,C=t.div`
  width: 335px;

  padding: 16px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  border-radius: 12px;
  background: rgba(239, 237, 232, 0.05);

  @media screen and (min-width: 1440px) {
    width: 405px;
  }
`,S=t.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 33px;
`,z=t.p`
  font-weight: 700;
  font-size: 12px;
  color: white;
  padding: 5px 7px;
  border-radius: 4px;
  width: 73px;
  height: 24px;
  background-color: rgba(239, 237, 232, 0.05);
`,B=t.button`
  display: flex;
  gap: 8px;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.29;
  color: #e6533c;
  background-color: transparent;
  border: none;
`,I=t.div`
  display: flex;
  gap: 16px;
  margin-bottom: 8px;
`,P=t.p`
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
`,l=t.li`
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
  color: rgba(239, 237, 232, 0.4);
`,p=t.span`
  color: white;
  text-transform: capitalize;
`,R=t.svg`
  stroke: #e6533c;
`,T=t.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: #efa082;
`,$=t.svg`
  fill: #efede8;
`,q=({subcategory:r})=>e.jsxs(C,{children:[e.jsxs(S,{children:[e.jsx(z,{children:"WORKOUT"}),e.jsxs(B,{children:["Start",e.jsx(R,{width:"16",height:"16",children:e.jsx("use",{href:g+"#icon-next"})})]})]}),e.jsxs(I,{children:[e.jsx(T,{children:e.jsx($,{width:"14",height:"16",children:e.jsx("use",{href:g+"#icon-running"})})}),e.jsx(P,{children:r.name})]}),e.jsxs(L,{children:[e.jsxs(l,{children:["Burned calories: ",e.jsx(p,{children:r.burnedCalories})]}),e.jsxs(l,{children:["Body part: ",e.jsx(p,{children:r.bodyPart})]}),e.jsxs(l,{children:["Target: ",e.jsx(p,{children:r.target})]})]})]}),A=t.li`
  display: block;
  padding-bottom: 16px;

  @media screen and (min-width: 768px) {
    padding-bottom: 16px;
  }

  @media screen and (min-width: 1440px) {
    padding-bottom: 16px;
  }
`,N=t.div`
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
`,O=t.p`
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
`,F=({subcategory:r,onSelect:c})=>e.jsx(A,{onClick:()=>c(r.filter,r.name.toLowerCase()),children:e.jsxs(N,{style:{backgroundImage:`linear-gradient(rgba(4, 4, 4, 0.5), rgba(4, 4, 4, 0.5)), url(${r.imgURL})`},children:[e.jsx(O,{children:r.name}),e.jsx(W,{children:r.filter})]})}),K=t.ul`
  list-style-type: none;
  display: flex;
  gap: 20px;
  margin-bottom: 40px;
  padding-top: 20px;

  @media screen and (min-width: 768px) {
    margin-bottom: 0;
    padding-top: 0;
  }

  li {
    position: relative;
    cursor: pointer;
    transition:
      color 0.3s ease,
      border-bottom-color 0.3s ease;
    &:hover,
    &:focus {
      color: orange;
    }
    &::before {
      content: '';
      position: absolute;
      left: 0;
      bottom: -3px;
      width: 100%;
      height: 3px;
      border-radius: 3px;
      border-bottom: 3px solid transparent;
      transition: border-bottom-color 0.3s ease;
    }
    &:hover::before,
    &:focus::before {
      border-bottom-color: orange;
    }
  }
`,h=t.a`
  font-weight: 400;
  font-size: 14px;
  line-height: 1.29;
  color: grey;
  cursor: pointer;
  &:hover {
    color: orange;
  }
`,M=t.div`
  justify-content: space-between;
  gap: 32px;
  margin-bottom: 64px;
  margin-top: 64px;

  @media screen and (min-width: 768px) {
    display: flex;
  }
`,U=t.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  margin-top: 23px;
  @media screen and (min-width: 1440px) {
    width: 842px;
  }
`,_=t.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  margin-top: 20px;
`,G=t.button`
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
`,D=t.h1`
  font-weight: 700;
  font-size: 24px;
  line-height: 1.17;
  color: white;
  margin: 0;
  text-transform: capitalize;
  margin-right: 20px;
`,H=t.svg`
  transform: rotate(180deg);
  stroke: grey;
  &:hover {
    color: orange;
  }
`,J=t.div`
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

  @media (min-width: 768px) {
    overflow-y: auto;
    height: 507px;
    gap: 32px 16px;
  }
  @media (min-width: 1440px) {
    width: 850px;
  }
`,Q={"Body parts":"bodyPart",Equipment:"equipment",Muscles:"target"},V=()=>{const[r,c]=n.useState([]),[m,u]=n.useState([]),[b,d]=n.useState(null),[w,x]=n.useState("Exercises"),j=b!==null,a=async i=>{d(null);try{const s=await f.get(`/exercises?filter=${i}`);c(s.data[i]),x("Exercises")}catch(s){console.error("Error fetching exercises:",s)}},y=async(i,s)=>{try{const o=await f.get(`/exercises/params?key=${i}&value=${s}`);u(o.data.exercises),x(s)}catch(o){console.error("Error fetching exercises:",o)}};n.useEffect(()=>{a("bodyPart")},[]);const E=()=>j?e.jsxs("div",{children:[e.jsxs(G,{type:"button",onClick:()=>{document.title="React App",d(null),x("Exercises")},children:[e.jsx(H,{width:"16",height:"16",children:e.jsx("use",{href:g+"#icon-next"})}),"BACK"]}),e.jsx(J,{style:{height:"500px"},children:e.jsx(U,{children:m.length>0?m.map(i=>e.jsx(q,{subcategory:i},i._id)):"Empty"})})]}):r&&r.length>0&&e.jsx(_,{children:r.map(i=>e.jsx(F,{subcategory:i,onSelect:async(s,o)=>{document.title=s,await y(Q[s],o),d([s,o])}},i._id))});return e.jsxs("div",{children:[e.jsxs(M,{children:[e.jsx(D,{children:w}),e.jsxs(K,{children:[e.jsx("li",{children:e.jsx(h,{onClick:()=>a("bodyPart"),children:"Body parts"})}),e.jsx("li",{children:e.jsx(h,{onClick:()=>a("equipment"),children:"Equipment"})}),e.jsx("li",{children:e.jsx(h,{onClick:()=>a("target"),children:"Muscles"})})]})]}),E()]})},X=()=>e.jsxs(v,{children:[e.jsx(V,{}),e.jsx(k,{})]}),te=X;export{te as default};
