import{u as s,L as f,j as t,a as h,b,d as S}from"./index-d26f62b3.js";import{u as p}from"./formik.esm-c0c195aa.js";import{A as c,c as m,a as o,F as n}from"./index.esm-b2ced643.js";import{B as j}from"./motion-12812518.js";const l=s(c)`
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
`,x=s(j)`
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
`,g=s(f)`
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
`,v=m({name:o().required("Name is required"),email:o().required("Email is required"),password:o().min(6,"Password must be at least 6 characters").required("Password is required")}),y=m({email:o().required("Email is required"),password:o().required("Password is required")}),$=()=>{const e=h(),r=p({initialValues:{name:"",email:"",password:""},onSubmit:(a,{resetForm:d})=>{e(b(a)),d()},validationSchema:v}),i=a=>r.touched[a]&&r.errors[a]?"error":r.touched[a]&&!r.errors[a]?"success":"";return t.jsxs("form",{onSubmit:r.handleSubmit,children:[t.jsx(n.Item,{help:r.errors.name||"correct",hasFeedback:!0,validateStatus:i("name"),children:t.jsx(l,{type:"text",name:"name",placeholder:"Name",value:r.values.name,onChange:r.handleChange,onBlur:r.handleBlur,required:!0})}),t.jsx(n.Item,{help:r.errors.email||"correct",hasFeedback:!0,validateStatus:i("email"),children:t.jsx(l,{type:"email",name:"email",placeholder:"Email",value:r.values.email,onChange:r.handleChange,onBlur:r.handleBlur,required:!0})}),t.jsx(n.Item,{help:r.errors.password||"correct",hasFeedback:!0,validateStatus:i("password"),children:t.jsx(u,{type:"password",name:"password",placeholder:"Password",value:r.values.password,onChange:r.handleChange,onBlur:r.handleBlur,required:!0})}),t.jsx(x,{type:"primary",htmlType:"submit",children:"Sign Up"}),t.jsxs(w,{children:["Already have an account?",t.jsx(g,{to:"/signin",children:"Sign In"})]})]})},k=()=>{const e=h(),r=p({initialValues:{email:"",password:""},onSubmit:(a,{resetForm:d})=>{e(S(a)),d()},validationSchema:y}),i=a=>r.touched[a]&&r.errors[a]?"error":r.touched[a]&&!r.errors[a]?"success":"";return t.jsxs("form",{onSubmit:r.handleSubmit,children:[t.jsx(n.Item,{help:r.errors.email||"correct",hasFeedback:!0,validateStatus:i("email"),children:t.jsx(l,{type:"email",name:"email",placeholder:"Email",value:r.values.email,onChange:r.handleChange,onBlur:r.handleBlur,required:!0})}),t.jsx(n.Item,{help:r.errors.password||"correct",hasFeedback:!0,validateStatus:i("password"),children:t.jsx(u,{type:"password",name:"password",placeholder:"Password",value:r.values.password,onChange:r.handleChange,onBlur:r.handleBlur,required:!0})}),t.jsx(x,{type:"primary",htmlType:"submit",children:"Sign In"}),t.jsxs(w,{children:["Don't have an account?",t.jsx(g,{to:"/signup",children:"Sign Up"})]})]})},z=({type:e})=>e==="SignUp"?t.jsx($,{}):t.jsx(k,{});export{z as A};
