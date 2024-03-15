import{u as s,L as b,j as t,a as p,b as S,d as j}from"./index-2abda365.js";import{u as h}from"./formik.esm-a6edf218.js";import{A as c,c as m,a as i,F as n}from"./index.esm-07dd1fa1.js";import{B as v}from"./motion-bf6a1084.js";const l=s(c)`
  width: 335px;
  height: 46px;
  padding: 14px;

  border-radius: 12px;
  color: ${e=>e.theme.colors.white};
  background-color: rgba(255, 255, 255, 0);
  border: 1px solid ${e=>e.theme.colors.formBorder};

  &::placeholder {
    font-weight: 400;
    font-size: 14px;
    width: 100px;
    line-height: 18px;
    opacity: 1;

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
`,u=s(c.Password)`
  width: 335px;
  height: 46px;
  padding: 14px;

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
`,x=s(v)`
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
`,g=s(b)`
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
`,w=s.p`
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
`,f=/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,$=m({name:i().required("Name is required"),email:i().matches(f,"Error email").required("Email is required"),password:i().min(6,"Password must be at least 6 characters").required("Password is required")}),y=m({email:i().matches(f,"Error email").required("Email is required"),password:i().required("Password is required")}),k=()=>{const e=p(),r=h({initialValues:{name:"",email:"",password:""},onSubmit:(a,{resetForm:d})=>{e(S(a)),d()},validationSchema:$}),o=a=>r.touched[a]&&r.errors[a]?"error":r.touched[a]&&!r.errors[a]?"success":"";return t.jsxs("form",{onSubmit:r.handleSubmit,children:[t.jsx(n.Item,{help:r.errors.name||"Success name",hasFeedback:!0,validateStatus:o("name"),children:t.jsx(l,{type:"text",name:"name",placeholder:"Name",value:r.values.name,onChange:r.handleChange,onBlur:r.handleBlur,autoComplete:"off",required:!0})}),t.jsx(n.Item,{help:r.errors.email||"Success email",hasFeedback:!0,validateStatus:o("email"),children:t.jsx(l,{type:"email",name:"email",placeholder:"Email",value:r.values.email,onChange:r.handleChange,onBlur:r.handleBlur,autoComplete:"off",required:!0})}),t.jsx(n.Item,{help:r.errors.password||"Success password",hasFeedback:!0,validateStatus:o("password"),children:t.jsx(u,{type:"password",name:"password",placeholder:"Password",value:r.values.password,onChange:r.handleChange,onBlur:r.handleBlur,autoComplete:"off",required:!0})}),t.jsx(x,{type:"primary",htmlType:"submit",children:"Sign Up"}),t.jsxs(w,{children:["Already have an account?",t.jsx(g,{to:"/signin",children:"Sign In"})]})]})},q=()=>{const e=p(),r=h({initialValues:{email:"",password:""},onSubmit:(a,{resetForm:d})=>{e(j(a)),d()},validationSchema:y}),o=a=>r.touched[a]&&r.errors[a]?"error":r.touched[a]&&!r.errors[a]?"success":"";return t.jsxs("form",{onSubmit:r.handleSubmit,children:[t.jsx(n.Item,{help:r.errors.email||"Success email",hasFeedback:!0,validateStatus:o("email"),children:t.jsx(l,{type:"email",name:"email",placeholder:"Email",value:r.values.email,onChange:r.handleChange,onBlur:r.handleBlur,autoComplete:"off",required:!0})}),t.jsx(n.Item,{help:r.errors.password||"Success password",hasFeedback:!0,validateStatus:o("password"),children:t.jsx(u,{type:"password",name:"password",placeholder:"Password",value:r.values.password,onChange:r.handleChange,onBlur:r.handleBlur,autoComplete:"off",required:!0})}),t.jsx(x,{type:"primary",htmlType:"submit",children:"Sign In"}),t.jsxs(w,{children:["Don't have an account?",t.jsx(g,{to:"/signup",children:"Sign Up"})]})]})},F=({type:e})=>e==="SignUp"?t.jsx(k,{}):t.jsx(q,{});export{F as A};
