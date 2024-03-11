import{u as t,L as g,j as i,a as s,e as u,f as w}from"./index-d10283e4.js";import{A as f,c as d,a as r,u as h}from"./index.esm-759ee984.js";import{B as j}from"./index-39490bef.js";const a=t(f)`
  width: 335px;
  height: 46px;
  padding: 14px;
  margin: 18px 0 0 0;

  border-radius: 12px;
  color: ${e=>e.theme.colors.white};
  background: transparent;
  border: 1px solid ${e=>e.theme.colors.formBorder};

  &::placeholder {
    font-weight: 400px;
    font-size: 14px;
    width: 100px;
    line-height: 18px;
    color: ${e=>e.theme.colors.grey};

    @media screen and (min-width: 768px) {
      font-size: 16px;
      font-weight: 400;
      line-height: 24px;
      letter-spacing: 0em;
      text-align: left;
      width: 100px;
    }
  }

  @media screen and (min-width: 768px) {
    width: 364px;
    height: 52px;
    padding: 14px;
  }

  &:hover,
  &:focus {
    color: ${e=>e.theme.colors.white} !important;
    background: transparent !important;
    border-color: ${e=>e.theme.colors.lightSecondary};
  }
`,x=t(j)`
  margin-top: 28px;
  width: 136px;
  height: 42px;
  padding: 12px 40px;
  border-radius: 12px;
  gap: 10px;
  background-color: ${e=>e.theme.colors.primary};
  color: ${e=>e.theme.colors.white};
  font-size: 16px;
  font-weight: 500;
  line-height: 18px;

  &:not(:disabled):not(.ant-btn-disabled):hover {
    color: ${e=>e.theme.colors.white} !important;
    background: ${e=>e.theme.colors.lightSecondary} !important;
  }

  @media screen and (min-width: 768px) {
    width: 190px;
    height: 56px;

    padding: 16px 60px 16px 60px;
    border-radius: 12px;
    gap: 10px;
    margin-top: 64px;

    font-size: 20px;

    line-height: 24px;
    letter-spacing: 0em;
    text-align: left;
  }

  @media screen and (min-width: 1200px) {
    width: 190px;
    height: 56px;

    padding: 16px 60px;
    border-radius: 12px;
    gap: 10px;
  }
`,l=t(g)`
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0px;
  text-align: left;
  margin-top: 12px;
  color: ${e=>e.theme.colors.white};
  text-decoration: underline;

  @media screen and (min-width: 576px) {
    font-size: 10px;
  }

  @media screen and (min-width: 1200px) {
    font-size: 12px;
  }
`,c=t.p`
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0px;

  margin-top: 12px;
  color: ${e=>e.theme.colors.grey};

  @media screen and (min-width: 768px) {
    width: 190px;
    height: 18px;

    text-align: center;
  }
`,b=d({name:r().required("Name is required"),email:r().email("Invalid email").required("Email is required"),password:r().min(6,"Password must be at least 6 characters").required("Password is required")}),v=d({email:r().email("Invalid email").required("Email is required"),password:r().required("Password is required")}),y=()=>{const e=s(),n=h({initialValues:{name:"",email:"",password:""},onSubmit:(o,{resetForm:p})=>{e(u(o)),p()},validationSchema:b});return i.jsxs("form",{onSubmit:n.handleSubmit,children:[i.jsx("div",{children:i.jsx(a,{type:"text",name:"name",placeholder:"Name",value:n.values.name,onChange:n.handleChange,required:!0})}),i.jsx("div",{children:i.jsx(a,{type:"email",name:"email",placeholder:"Email",value:n.values.email,onChange:n.handleChange,required:!0})}),i.jsx("div",{children:i.jsx(a,{type:"password",name:"password",placeholder:"Password",value:n.values.password,onChange:n.handleChange,required:!0})}),i.jsx(x,{type:"primary",htmlType:"submit",children:"Sign Up"}),i.jsxs(c,{children:["Already have an account? ",i.jsx(l,{to:"/signin",children:"Sign In"})]})]})},S=()=>{const e=s(),n=h({initialValues:{email:"",password:""},onSubmit:(o,{resetForm:p})=>{e(w(o)),p()},validationSchema:v});return i.jsxs("form",{onSubmit:n.handleSubmit,children:[i.jsx("div",{children:i.jsx(a,{type:"email",name:"email",placeholder:"Email",value:n.values.email,onChange:n.handleChange,required:!0})}),i.jsx("div",{children:i.jsx(a,{type:"password",name:"password",placeholder:"Password",value:n.values.password,onChange:n.handleChange,required:!0})}),i.jsx(x,{type:"primary",htmlType:"submit",children:"Sign In"}),i.jsxs(c,{children:["Don't have an account? ",i.jsx(l,{to:"/signup",children:"Sign Up"})]})]})},F=({type:e})=>e==="SignUp"?i.jsx(y,{}):i.jsx(S,{}),m=t.div`
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${e=>e.theme.white};
  font-size: 24px;
  font-weight: 700;
  position: absolute;
  z-index: 2;
`,$=t(m)`
  background-color: rgba(48, 48, 48, 1);

  width: 146px;
  height: 66px;

  top: 560px;
  left: 121px;

  @media screen and (min-width: 768px) {
    width: 206px;
    height: 96px;
    top: 714px;
    left: 331px;
    padding: 20px 36px 20px 23px;
  }

  @media screen and (min-width: 1200px) {
    width: 206px;
    height: 96px;
    top: 384px;
    left: 770px;
  }
`,z=t(m)`
  background-color: rgba(239, 137, 100, 1);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  padding: 14px;
  width: 119px;
  height: 76px;

  top: 696px;
  left: 236px;

  @media screen and (min-width: 768px) {
    width: 180px;
    height: 110px;
    top: 866px;
    left: 556px;
    gap: 12px;
    padding: 14px 28px;
  }
  @media screen and (min-width: 1200px) {
    width: 180px;
    height: 110px;
    top: 519px;
    left: 1228px;
  }
`,C=t.span`
  color: ${e=>e.theme.colors.white};

  font-size: 16px;
  font-weight: 700;
  line-height: 18px;
  letter-spacing: 0px;
  text-align: left;

  @media screen and (min-width: 768px) {
    font-size: 24px;

    line-height: 24px;
  }

  @media screen and (min-width: 1200px) {
  }
`,q=t.p`
  color: ${e=>e.theme.colors.grey};
  margin: 0;
  margin-top: 4px;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0px;
  text-align: left;

  @media screen and (min-width: 768px) {
    font-size: 16px;

    line-height: 24px;
  }

  @media screen and (min-width: 1200px) {
  }
`,k=t.span`
  color: ${e=>e.theme.colors.white};
  margin-top: 8px;
  font-size: 24px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: -1px;
  text-align: left;

  @media screen and (min-width: 768px) {
    font-size: 48px;

    line-height: 50px;
  }

  @media screen and (min-width: 1200px) {
  }
`,I=t.span`
  color: ${e=>e.theme.colors.textWhite30};
  margin-left: 8px;
  font-size: 12px;
  font-weight: 700;
  line-height: 16px;
  letter-spacing: 0px;
  text-align: left;

  @media screen and (min-width: 768px) {
    font-size: 16px;

    line-height: 24px;
  }

  @media screen and (min-width: 1200px) {
  }
`,B=t.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 8px;
  background-color: ${e=>e.theme.colors.lightSecondary};

  @media screen and (min-width: 768px) {
    width: 40px;
    height: 40px;
    margin-right: 12px;
  }
`,V=t.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  border-radius: 50%;

  background-color: ${e=>e.theme.colors.lightSecondary};

  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
  }
`,P=t.svg`
  width: 12px;
  height: 12px;

  fill: ${e=>e.theme.colors.white};

  @media screen and (min-width: 768px) {
    width: 20px;
    height: 20px;
  }
`,A=t.svg`
  width: 11px;
  height: 12px;
  fill: ${e=>e.theme.colors.white};

  @media screen and (min-width: 768px) {
    width: 16px;
    height: 16px;
  }
`,T=({type:e})=>(()=>{switch(e){case"videoTutorial":return i.jsxs($,{children:[i.jsxs(B,{children:[" ",i.jsx(P,{children:i.jsx("use",{href:"src/img/sprite.svg#icon-play"})})]}),i.jsxs(C,{children:["350+",i.jsx(q,{children:"Video tutorial"})]})]});case"calories":return i.jsxs(z,{children:[i.jsx(V,{children:i.jsxs(A,{children:[" ",i.jsx("use",{href:"src/img/sprite.svg#icon-running"})]})}),i.jsx("p",{children:i.jsxs(k,{children:["500",i.jsx(I,{children:"cal"})]})})]});default:return null}})();export{F as A,T as D};
