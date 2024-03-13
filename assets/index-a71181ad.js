import{r as s,v as he,w as pe,y as L,z as Q,_ as me,f as ee,B as be,D as ge,E as Y,F as W,G as ne,h as X,H as xe,I as fe,u,a as ae,m as Z,s as J,j as o,J as ve,t as V,M as Ce}from"./index-5847dc1c.js";import{S as te,c as re,A as ye,T as Se,C as we}from"./DayDashboard.styled-f6d582a6.js";import{u as $e}from"./formik.esm-599dc61c.js";import{c as ke,a as N,b as M,F as z,A as D}from"./index.esm-4c34ebc2.js";import{u as le,F as je,a as se,W as Ie,T as Re,b as Be}from"./motion-92fcdb2b.js";import{p as Oe}from"./dayjs.min-429476f1.js";import{s as oe,S as U}from"./SvgCustom-60b42b37.js";import{L as Pe}from"./LogOutBtn-c1ec4758.js";import"./index-2d8ba8fe.js";import"./zoom-025f732b.js";const de=s.createContext(null),ze=de.Provider,ce=s.createContext(null),Ee=ce.Provider;var qe=["prefixCls","className","style","checked","disabled","defaultChecked","type","title","onChange"],De=s.forwardRef(function(e,n){var a,t=e.prefixCls,r=t===void 0?"rc-checkbox":t,c=e.className,i=e.style,d=e.checked,l=e.disabled,C=e.defaultChecked,f=C===void 0?!1:C,S=e.type,I=S===void 0?"checkbox":S,R=e.title,w=e.onChange,B=he(e,qe),m=s.useRef(null),$=le(f,{value:d}),x=pe($,2),k=x[0],j=x[1];s.useImperativeHandle(n,function(){return{focus:function(){var b;(b=m.current)===null||b===void 0||b.focus()},blur:function(){var b;(b=m.current)===null||b===void 0||b.blur()},input:m.current}});var y=L(r,c,(a={},Q(a,"".concat(r,"-checked"),k),Q(a,"".concat(r,"-disabled"),l),a)),p=function(b){l||("checked"in e||j(b.target.checked),w==null||w({target:ee(ee({},e),{},{type:I,checked:b.target.checked}),stopPropagation:function(){b.stopPropagation()},preventDefault:function(){b.preventDefault()},nativeEvent:b.nativeEvent}))};return s.createElement("span",{className:y,title:R,style:i},s.createElement("input",me({},B,{className:"".concat(r,"-input"),ref:m,onChange:p,disabled:l,checked:!!k,type:I})),s.createElement("span",{className:"".concat(r,"-inner")}))});const We=e=>{const{componentCls:n,antCls:a}=e,t=`${n}-group`;return{[t]:Object.assign(Object.assign({},Y(e)),{display:"inline-block",fontSize:0,[`&${t}-rtl`]:{direction:"rtl"},[`${a}-badge ${a}-badge-count`]:{zIndex:1},[`> ${a}-badge:not(:first-child) > ${a}-button-wrapper`]:{borderInlineStart:"none"}})}},Te=e=>{const{componentCls:n,wrapperMarginInlineEnd:a,colorPrimary:t,radioSize:r,motionDurationSlow:c,motionDurationMid:i,motionEaseInOutCirc:d,colorBgContainer:l,colorBorder:C,lineWidth:f,colorBgContainerDisabled:S,colorTextDisabled:I,paddingXS:R,dotColorDisabled:w,lineType:B,radioColor:m,radioBgColor:$,calc:x}=e,k=`${n}-inner`,j=4,y=x(r).sub(x(j).mul(2)),p=x(1).mul(r).equal();return{[`${n}-wrapper`]:Object.assign(Object.assign({},Y(e)),{display:"inline-flex",alignItems:"baseline",marginInlineStart:0,marginInlineEnd:a,cursor:"pointer",[`&${n}-wrapper-rtl`]:{direction:"rtl"},"&-disabled":{cursor:"not-allowed",color:e.colorTextDisabled},"&::after":{display:"inline-block",width:0,overflow:"hidden",content:'"\\a0"'},[`${n}-checked::after`]:{position:"absolute",insetBlockStart:0,insetInlineStart:0,width:"100%",height:"100%",border:`${W(f)} ${B} ${t}`,borderRadius:"50%",visibility:"hidden",content:'""'},[n]:Object.assign(Object.assign({},Y(e)),{position:"relative",display:"inline-block",outline:"none",cursor:"pointer",alignSelf:"center",borderRadius:"50%"}),[`${n}-wrapper:hover &,
        &:hover ${k}`]:{borderColor:t},[`${n}-input:focus-visible + ${k}`]:Object.assign({},ne(e)),[`${n}:hover::after, ${n}-wrapper:hover &::after`]:{visibility:"visible"},[`${n}-inner`]:{"&::after":{boxSizing:"border-box",position:"absolute",insetBlockStart:"50%",insetInlineStart:"50%",display:"block",width:p,height:p,marginBlockStart:x(1).mul(r).div(-2).equal(),marginInlineStart:x(1).mul(r).div(-2).equal(),backgroundColor:m,borderBlockStart:0,borderInlineStart:0,borderRadius:p,transform:"scale(0)",opacity:0,transition:`all ${c} ${d}`,content:'""'},boxSizing:"border-box",position:"relative",insetBlockStart:0,insetInlineStart:0,display:"block",width:p,height:p,backgroundColor:l,borderColor:C,borderStyle:"solid",borderWidth:f,borderRadius:"50%",transition:`all ${i}`},[`${n}-input`]:{position:"absolute",inset:0,zIndex:1,cursor:"pointer",opacity:0},[`${n}-checked`]:{[k]:{borderColor:t,backgroundColor:$,"&::after":{transform:`scale(${e.calc(e.dotSize).div(r).equal()})`,opacity:1,transition:`all ${c} ${d}`}}},[`${n}-disabled`]:{cursor:"not-allowed",[k]:{backgroundColor:S,borderColor:C,cursor:"not-allowed","&::after":{backgroundColor:w}},[`${n}-input`]:{cursor:"not-allowed"},[`${n}-disabled + span`]:{color:I,cursor:"not-allowed"},[`&${n}-checked`]:{[k]:{"&::after":{transform:`scale(${x(y).div(r).equal({unit:!1})})`}}}},[`span${n} + *`]:{paddingInlineStart:R,paddingInlineEnd:R}})}},_e=e=>{const{buttonColor:n,controlHeight:a,componentCls:t,lineWidth:r,lineType:c,colorBorder:i,motionDurationSlow:d,motionDurationMid:l,buttonPaddingInline:C,fontSize:f,buttonBg:S,fontSizeLG:I,controlHeightLG:R,controlHeightSM:w,paddingXS:B,borderRadius:m,borderRadiusSM:$,borderRadiusLG:x,buttonCheckedBg:k,buttonSolidCheckedColor:j,colorTextDisabled:y,colorBgContainerDisabled:p,buttonCheckedBgDisabled:P,buttonCheckedColorDisabled:b,colorPrimary:O,colorPrimaryHover:E,colorPrimaryActive:g,buttonSolidCheckedBg:q,buttonSolidCheckedHoverBg:T,buttonSolidCheckedActiveBg:h,calc:v}=e;return{[`${t}-button-wrapper`]:{position:"relative",display:"inline-block",height:a,margin:0,paddingInline:C,paddingBlock:0,color:n,fontSize:f,lineHeight:W(v(a).sub(v(r).mul(2)).equal()),background:S,border:`${W(r)} ${c} ${i}`,borderBlockStartWidth:v(r).add(.02).equal(),borderInlineStartWidth:0,borderInlineEndWidth:r,cursor:"pointer",transition:[`color ${l}`,`background ${l}`,`box-shadow ${l}`].join(","),a:{color:n},[`> ${t}-button`]:{position:"absolute",insetBlockStart:0,insetInlineStart:0,zIndex:-1,width:"100%",height:"100%"},"&:not(:first-child)":{"&::before":{position:"absolute",insetBlockStart:v(r).mul(-1).equal(),insetInlineStart:v(r).mul(-1).equal(),display:"block",boxSizing:"content-box",width:1,height:"100%",paddingBlock:r,paddingInline:0,backgroundColor:i,transition:`background-color ${d}`,content:'""'}},"&:first-child":{borderInlineStart:`${W(r)} ${c} ${i}`,borderStartStartRadius:m,borderEndStartRadius:m},"&:last-child":{borderStartEndRadius:m,borderEndEndRadius:m},"&:first-child:last-child":{borderRadius:m},[`${t}-group-large &`]:{height:R,fontSize:I,lineHeight:W(v(R).sub(v(r).mul(2)).equal()),"&:first-child":{borderStartStartRadius:x,borderEndStartRadius:x},"&:last-child":{borderStartEndRadius:x,borderEndEndRadius:x}},[`${t}-group-small &`]:{height:w,paddingInline:v(B).sub(r).equal(),paddingBlock:0,lineHeight:W(v(w).sub(v(r).mul(2)).equal()),"&:first-child":{borderStartStartRadius:$,borderEndStartRadius:$},"&:last-child":{borderStartEndRadius:$,borderEndEndRadius:$}},"&:hover":{position:"relative",color:O},"&:has(:focus-visible)":Object.assign({},ne(e)),[`${t}-inner, input[type='checkbox'], input[type='radio']`]:{width:0,height:0,opacity:0,pointerEvents:"none"},[`&-checked:not(${t}-button-wrapper-disabled)`]:{zIndex:1,color:O,background:k,borderColor:O,"&::before":{backgroundColor:O},"&:first-child":{borderColor:O},"&:hover":{color:E,borderColor:E,"&::before":{backgroundColor:E}},"&:active":{color:g,borderColor:g,"&::before":{backgroundColor:g}}},[`${t}-group-solid &-checked:not(${t}-button-wrapper-disabled)`]:{color:j,background:q,borderColor:q,"&:hover":{color:j,background:T,borderColor:T},"&:active":{color:j,background:h,borderColor:h}},"&-disabled":{color:y,backgroundColor:p,borderColor:i,cursor:"not-allowed","&:first-child, &:hover":{color:y,backgroundColor:p,borderColor:i}},[`&-disabled${t}-button-wrapper-checked`]:{color:b,backgroundColor:P,borderColor:i,boxShadow:"none"}}}},Ae=e=>{const{wireframe:n,padding:a,marginXS:t,lineWidth:r,fontSizeLG:c,colorText:i,colorBgContainer:d,colorTextDisabled:l,controlItemBgActiveDisabled:C,colorTextLightSolid:f,colorPrimary:S,colorPrimaryHover:I,colorPrimaryActive:R,colorWhite:w}=e,B=4,m=c,$=n?m-B*2:m-(B+r)*2;return{radioSize:m,dotSize:$,dotColorDisabled:l,buttonSolidCheckedColor:f,buttonSolidCheckedBg:S,buttonSolidCheckedHoverBg:I,buttonSolidCheckedActiveBg:R,buttonBg:d,buttonCheckedBg:d,buttonColor:i,buttonCheckedBgDisabled:C,buttonCheckedColorDisabled:l,buttonPaddingInline:a-r,wrapperMarginInlineEnd:t,radioColor:n?S:w,radioBgColor:n?d:S}},ue=be("Radio",e=>{const{controlOutline:n,controlOutlineWidth:a}=e,t=`0 0 0 ${W(a)} ${n}`,c=ge(e,{radioFocusShadow:t,radioButtonFocusShadow:t});return[We(c),Te(c),_e(c)]},Ae,{unitless:{radioSize:!0,dotSize:!0}});var Fe=globalThis&&globalThis.__rest||function(e,n){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,t=Object.getOwnPropertySymbols(e);r<t.length;r++)n.indexOf(t[r])<0&&Object.prototype.propertyIsEnumerable.call(e,t[r])&&(a[t[r]]=e[t[r]]);return a};const Me=(e,n)=>{var a,t;const r=s.useContext(de),c=s.useContext(ce),{getPrefixCls:i,direction:d,radio:l}=s.useContext(X),C=s.useRef(null),f=xe(n,C),{isFormItemInput:S}=s.useContext(je),I=h=>{var v,_;(v=e.onChange)===null||v===void 0||v.call(e,h),(_=r==null?void 0:r.onChange)===null||_===void 0||_.call(r,h)},{prefixCls:R,className:w,rootClassName:B,children:m,style:$,title:x}=e,k=Fe(e,["prefixCls","className","rootClassName","children","style","title"]),j=i("radio",R),y=((r==null?void 0:r.optionType)||c)==="button",p=y?`${j}-button`:j,P=se(j),[b,O,E]=ue(j,P),g=Object.assign({},k),q=s.useContext(fe);r&&(g.name=r.name,g.onChange=I,g.checked=e.value===r.value,g.disabled=(a=g.disabled)!==null&&a!==void 0?a:r.disabled),g.disabled=(t=g.disabled)!==null&&t!==void 0?t:q;const T=L(`${p}-wrapper`,{[`${p}-wrapper-checked`]:g.checked,[`${p}-wrapper-disabled`]:g.disabled,[`${p}-wrapper-rtl`]:d==="rtl",[`${p}-wrapper-in-form-item`]:S},l==null?void 0:l.className,w,B,O,E,P);return b(s.createElement(Ie,{component:"Radio",disabled:g.disabled},s.createElement("label",{className:T,style:Object.assign(Object.assign({},l==null?void 0:l.style),$),onMouseEnter:e.onMouseEnter,onMouseLeave:e.onMouseLeave,title:x},s.createElement(De,Object.assign({},g,{className:L(g.className,!y&&Re),type:"radio",prefixCls:p,ref:f})),m!==void 0?s.createElement("span",null,m):null)))},Ne=s.forwardRef(Me),G=Ne,Le=s.forwardRef((e,n)=>{const{getPrefixCls:a,direction:t}=s.useContext(X),[r,c]=le(e.defaultValue,{value:e.value}),i=h=>{const v=r,_=h.target.value;"value"in e||c(_);const{onChange:K}=e;K&&_!==v&&K(h)},{prefixCls:d,className:l,rootClassName:C,options:f,buttonStyle:S="outline",disabled:I,children:R,size:w,style:B,id:m,onMouseEnter:$,onMouseLeave:x,onFocus:k,onBlur:j}=e,y=a("radio",d),p=`${y}-group`,P=se(y),[b,O,E]=ue(y,P);let g=R;f&&f.length>0&&(g=f.map(h=>typeof h=="string"||typeof h=="number"?s.createElement(G,{key:h.toString(),prefixCls:y,disabled:I,value:h,checked:r===h},h):s.createElement(G,{key:`radio-group-value-options-${h.value}`,prefixCls:y,disabled:h.disabled||I,value:h.value,checked:r===h.value,title:h.title,style:h.style,id:h.id,required:h.required},h.label)));const q=Be(w),T=L(p,`${p}-${S}`,{[`${p}-${q}`]:q,[`${p}-rtl`]:t==="rtl"},l,C,O,E,P);return b(s.createElement("div",Object.assign({},Oe(e,{aria:!0,data:!0}),{className:T,style:B,onMouseEnter:$,onMouseLeave:x,onFocus:k,onBlur:j,id:m,ref:n}),s.createElement(ze,{value:{onChange:i,value:r,disabled:e.disabled,name:e.name,optionType:e.optionType}},g)))}),Ge=s.memo(Le);var He=globalThis&&globalThis.__rest||function(e,n){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,t=Object.getOwnPropertySymbols(e);r<t.length;r++)n.indexOf(t[r])<0&&Object.prototype.propertyIsEnumerable.call(e,t[r])&&(a[t[r]]=e[t[r]]);return a};const Ve=(e,n)=>{const{getPrefixCls:a}=s.useContext(X),{prefixCls:t}=e,r=He(e,["prefixCls"]),c=a("radio",t);return s.createElement(Ee,{value:"button"},s.createElement(G,Object.assign({prefixCls:c},r,{type:"radio",ref:n})))},Ue=s.forwardRef(Ve),H=G;H.Button=Ue;H.Group=Ge;H.__ANT_RADIO=!0;const Ye=H,Xe=ke().shape({name:N().matches(/^[A-Za-z\s'-]+$/,"Incorrect name format").required("Required").min(3,"Minimum number of characters is 3"),email:N().matches(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,"Invalid email").required("Required"),height:M().min(150,"Minimum height is 150").required("Required"),currentWeight:M().min(35,"Minimum weight is 35").required("Required"),desiredWeight:M().min(35,"Minimum weight is 35").required("Required"),birthday:N().required("Required").matches(/^\d{2}\/\d{2}\/\d{4}$/,"Invalid date format"),blood:M().required("Required").oneOf([1,2,3,4],"Invalid blood type"),sex:N().required("Required").oneOf(["male","female"],"Invalid sex"),levelActivity:M().required("Required").oneOf([1,2,3,4,5],"Invalid activity level")}),Ze=u.button`
  cursor: pointer;

  width: ${({$size:e})=>e==="large"?"136px":"115px"};
  background-color: ${e=>e.$type==="filled"?e.theme.colors.primary:"transparent"};
  border: ${e=>e.$type==="transparent"?`1px solid ${e.theme.colors.primary}`:"none"};
  border-radius: 12px;
  padding: 12px 40px;
  color: ${({theme:e})=>e.colors.white};
  font-size: 20px;
  font-weight: 500;
  line-height: 1.2;
  transition: ${e=>e.$type==="transparent"?"border":"background-color"}
    350ms ease;
  &:hover {
    ${e=>e.$type==="filled"?`background-color: ${e.theme.colors.secondary};`:"border: 1px solid rgba(239, 237, 232, 0.3)"}
  }
`,Je=u(z)`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 375px) {
  }
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1440px) {
  }
`,Ke=u.div`
  display: grid;
  grid-template-columns: auto auto;
  gap: 14px;

  @media screen and (max-width: 375px) {
  }
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1440px) {
  }
`;u.div`
  width: calc(50% - 7px);
`;u.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 14px;

  @media screen and (min-width: 320px) and (max-width: 375px) {
    width: 100%;
    gap: 14px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  @media screen and (min-width: 375px) {
    width: 100%;
    gap: 14px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }

  @media screen and (min-width: 1440px) {
    align-items: flex-start;
    gap: 14px;
    margin-bottom: 14px;
    margin-right: auto;
  }
`;u.div`
  @media screen and (min-width: 320px) and (max-width: 1439px) {
    width: 100%;
  }
`;u.label`
  margin-bottom: 4px;
  font-weight: 400;
  font-size: 12px;
  color: ${({theme:e})=>e.colors.textWhite50};
  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`;u.input`
  width: 100%;
  padding: 14px;
  margin-bottom: 14px;
  align-items: center;
  gap: 10px;
  border-radius: 12px;
  border: 1px solid ${({theme:e})=>e.colors.formBorder};
  background-color: transparent;
  color: ${({theme:e})=>e.colors.white};
  font-size: 14px;
  &:focus,
  &:hover {
    outline: none;
    border-color: ${({theme:e})=>e.colors.primary};
    background-color: transparent;
  }
`;u(D)`
  max-width: 335px;
  width: 100%;
  padding: 14px;
  margin-bottom: 14px;
  align-items: center;
  gap: 10px;
  border-radius: 12px;
  border: 1px solid ${({theme:e})=>e.colors.formBorder};
  background-color: transparent;
  color: ${({theme:e})=>e.colors.white};
  font-size: 14px;
  &:focus,
  &:hover {
    border-color: ${({theme:e})=>e.colors.primary};
    background-color: transparent;
  }

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    max-width: 341px;
  }
`;u.div`
  position: relative;
  margin-top: 40px;

  label {
    position: absolute;
    font-size: 14px;
    top: 50%;
    left: 14px;
    transform: translateY(-50%);
    pointer-events: none;
    transition:
      top 0.2s,
      left 0.2s,
      transform 0.2s;
    color: ${({theme:e})=>e.colors.primary};
  }
`;u.div`
  margin-top: 40px;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
`;const A=u(Ye)`
  > span {
    font-weight: 400;
    font-size: 14px;
    color: ${({theme:e})=>e.colors.white};
    line-height: 1.2;
    @media screen and (max-width: 375px) {
    }
    @media screen and (min-width: 768px) {
    }
    @media screen and (min-width: 1440px) {
    }
  }
`,F=[{label:"Blood",name:"blood",options:[1,2,3,4]},{name:"sex",options:["male","female"]},{name:"levelActivity",options:["Sedentary lifestyle (little or no physical activity)","Light activity (light exercises/sports 1-3 days per week)","Moderately active (moderate exercises/sports 3-5 days per week)","Very active (intense exercises/sports 6-7 days per week)","Extremely active (very strenuous exercises/sports and physical work)"]}],Qe=({date:e,setIsOpenCalendar:n})=>{const a=ae(),t=Z(J),r=d=>{const l={...d,birthday:e};console.log(l),a(ve(l))},c=d=>i.touched[d]&&!i.errors[d]?"success":i.errors[d]?"error":"",i=$e({initialValues:{name:t.name||"",email:t.email||"",height:t.height||"0",currentWeight:t.currentWeight||"0",desiredWeight:t.desiredWeight||"0",birthday:t.birthday||"00/00/0000",blood:t.blood||"",sex:t.sex||"",levelActivity:t.levelActivity||""},validationSchema:Xe,onSubmit:r});return o.jsxs(Je,{onFinish:i.handleSubmit,children:[o.jsx(z.Item,{help:i.errors.name,validateStatus:c("name"),hasFeedback:!0,label:"Name",children:o.jsx(D,{placeholder:"Your name",value:i.values.name,onChange:i.handleChange,name:"name",required:!0,onBlur:i.handleBlur})}),o.jsx(z.Item,{label:"Email",children:o.jsx(D,{type:"email",name:"email",value:i.values.email,onChange:i.handleChange,style:{color:"rgba(239, 237, 232, 0.60)"},readOnly:!0,disabled:!0})}),o.jsxs(Ke,{children:[o.jsx(z.Item,{label:"Height",help:i.errors.height,validateStatus:c("height"),hasFeedback:!0,children:o.jsx(D,{type:"number",name:"height",value:i.values.height,onChange:i.handleChange,required:!0,onBlur:i.handleBlur})}),o.jsx(z.Item,{label:"Current Weight",help:i.errors.currentWeight,validateStatus:c("currentWeight"),hasFeedback:!0,children:o.jsx(D,{type:"number",name:"currentWeight",value:i.values.currentWeight,onChange:i.handleChange,required:!0,onBlur:i.handleBlur})}),o.jsx(z.Item,{label:"Desired Weight",help:i.errors.desiredWeight,validateStatus:c("desiredWeight"),hasFeedback:!0,children:o.jsx(D,{type:"number",name:"desiredWeight",value:i.values.desiredWeight,onChange:i.handleChange,required:!0,onBlur:i.handleBlur})}),o.jsx(z.Item,{label:"Date of birth",help:i.errors.birthday,validateStatus:c("birthday"),hasFeedback:!0,children:o.jsx(D,{type:"text",onClick:()=>n(!0),name:"birthday",value:e,required:!0,onBlur:i.handleBlur,readOnly:!0})})]}),o.jsx(z.Item,{label:"Blood",help:i.errors.blood,validateStatus:c("blood"),hasFeedback:!0,children:o.jsx(A.Group,{onChange:i.handleChange,value:i.values.blood,name:F[0].name,children:F[0].options.map((d,l)=>o.jsx(A,{value:d,children:d},l))})}),o.jsx(A.Group,{onChange:i.handleChange,value:i.values.sex,name:F[1].name,children:F[1].options.map((d,l)=>o.jsx(A,{value:d,children:d},l))}),o.jsx(A.Group,{onChange:i.handleChange,value:i.values.levelActivity,name:F[2].name,children:F[2].options.map((d,l)=>o.jsx(A,{value:l+1,children:d},l))}),o.jsx(Ze,{disabled:!i.isValid,type:"submit",$type:"filled",children:"Save"})]})},et=u.div`
  display: flex;
  gap: 40px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
  margin-top: 40px;

  @media screen and (min-width: 768px) {
    width: 439px;
    gap: 32px;
    margin-top: 64px;
  }
`,tt=u.div`
  position: relative;
  border-radius: 100px;
  border: 1px solid ${({theme:e})=>e.colors.primary};
  width: 90px;
  height: 90px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 768px) {
    width: 150px;
    height: 150px;
  }
`,rt=u.img`
  border-radius: 100px;
  width: 100%;
  height: 100%;
`,ot=u.div`
  cursor: pointer;
  position: absolute;
  bottom: 0;
  transform: translateY(50%);
  width: 24px;
  height: 24px;
  @media screen and (min-width: 768px) {
    width: 32px;
    height: 32px;
  }
`,it=u.svg`
  width: 24px;
  height: 24px;
  @media screen and (min-width: 768px) {
    width: 32px;
    height: 32px;
  }
`,nt=u.svg`
  width: 61px;
  height: 62px;
  fill: ${({theme:e})=>e.colors.formBorder};
  @media screen and (min-width: 768px) {
    width: 102px;
    height: 102px;
  }
`,at=u.label`
  cursor: pointer;
`,lt=u.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  text-align: center;
  gap: 4px;

  @media screen and (max-width: 767px) {
    margin-top: -8px;
  }
`,st=u.p`
  font-size: 18px;
  line-height: 1.1;
  color: ${({theme:e})=>e.colors.white};

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 1.16;
  }
`,dt=u.p`
  color: rgba(239, 237, 232, 0.5);
  font-size: 14px;
  line-height: 1.33;
`,ct=u.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 14px;
  /* margin-top: 40px;
  margin-bottom: 40px; */

  font-size: 12px;
  line-height: 1.33;
  color: rgba(239, 237, 232, 0.8);
`,ie=u.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 96px;
  padding: 14px;

  border: 1px solid rgba(239, 237, 232, 0.2);
  border-radius: 12px;
  background-color: ${e=>e.theme.colors.primary};

  @media screen and (max-width: 767px) {
    max-width: 157px;
  }

  @media screen and (min-width: 768px) {
    height: 108px;
    width: 209px;
  }
`,ut=u.div`
  margin-left: auto;
`,ht=()=>{const e=ae(),{name:n,avatarURL:a,bmr:t,dpa:r}=Z(J),c=o.jsx(nt,{children:o.jsx("use",{href:`${oe}#icon-user`})}),d=a?o.jsx(rt,{src:a,alt:"Avatar"}):c,l=C=>{const f=C.target.files[0];f&&e(Ce({avatar:f}))};return o.jsxs(et,{children:[o.jsxs(tt,{children:[d,o.jsxs(ot,{children:[o.jsx(at,{htmlFor:"fileInput",children:o.jsx(it,{children:o.jsx("use",{href:`${oe}#icon-add-avatar`,"aria-label":"Upload Avatar"})})}),o.jsx("input",{type:"file",accept:"image/*, .jpg, .jpeg, .png",id:"fileInput",name:"avatar",style:{display:"none"},onChange:l})]})]}),o.jsxs(lt,{children:[o.jsx(st,{children:n}),o.jsx(dt,{children:"User"})]}),o.jsxs(ct,{children:[o.jsxs(ie,{children:[o.jsxs(te,{children:[o.jsx(U,{icon:"icon-food",size:"20",color:V.colors.secondary}),o.jsx("p",{children:"Daily calorie intake"})]}),o.jsx(re,{children:t})]}),o.jsxs(ie,{children:[o.jsxs(te,{children:[o.jsx(U,{icon:"icon-dumbbell",size:"20",color:V.colors.secondary}),o.jsx("p",{children:"Daily physical activity"})]}),o.jsxs(re,{children:[r," min"]})]})]}),o.jsxs(ye,{children:[o.jsx("div",{children:o.jsx(U,{icon:"icon-exclamation-mark",size:"16",stroke:V.colors.white})}),o.jsx("p",{children:"We understand that each individual is unique, so the entire approach to diet is relative and tailored to your unique body and goals."})]}),o.jsx(ut,{children:o.jsx(Pe,{})})]})},pt=()=>{const e=new Date;return e.setFullYear(e.getFullYear()-18),e},mt=()=>{const e=Z(J),[n,a]=s.useState(e.birthday?e.birthday:"00.00.0000"),[t,r]=s.useState(!1);return o.jsxs(o.Fragment,{children:[o.jsx(Se,{title:"Profile Settings"}),o.jsx(ht,{}),o.jsx(Qe,{date:n,setIsOpenCalendar:r}),o.jsx(we,{date:n,setDate:a,maxDate:pt(),isOpen:t,setIsOpen:r})]})},kt=mt;export{kt as default};
