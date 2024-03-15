import{r as d,v as be,w as xe,x as L,y as Q,_ as fe,f as ee,z as ve,B as Ce,D as X,E as D,F as le,h as Z,G as ye,H as Se,u as c,i as se,s as de,a as ce,j as t,I as we,t as U,J as je}from"./index-2abda365.js";import{C as ke,S as te,c as re,A as $e,T as Ie}from"./DayDashboard.styled-e39a6908.js";import{u as Re}from"./formik.esm-a6edf218.js";import{c as Be,a as N,b as F,F as _,A as Oe}from"./index.esm-07dd1fa1.js";import{u as ue,F as Ee,a as he,W as Pe,T as ze,b as De}from"./motion-bf6a1084.js";import{p as We}from"./dayjs.min-878c57a9.js";import{S as G,s as oe}from"./SvgCustom-95e71a28.js";import{L as qe}from"./LogOutBtn-8356a67f.js";import"./index-99fa9382.js";import"./ResizeObserver.es-f4289e8a.js";import"./zoom-41f389b3.js";const pe=d.createContext(null),Ae=pe.Provider,me=d.createContext(null),Te=me.Provider;var _e=["prefixCls","className","style","checked","disabled","defaultChecked","type","title","onChange"],Fe=d.forwardRef(function(e,n){var a,o=e.prefixCls,r=o===void 0?"rc-checkbox":o,u=e.className,b=e.style,v=e.checked,s=e.disabled,i=e.defaultChecked,l=i===void 0?!1:i,h=e.type,S=h===void 0?"checkbox":h,R=e.title,j=e.onChange,B=be(e,_e),g=d.useRef(null),k=ue(l,{value:v}),C=xe(k,2),$=C[0],I=C[1];d.useImperativeHandle(n,function(){return{focus:function(){var x;(x=g.current)===null||x===void 0||x.focus()},blur:function(){var x;(x=g.current)===null||x===void 0||x.blur()},input:g.current}});var w=L(r,u,(a={},Q(a,"".concat(r,"-checked"),$),Q(a,"".concat(r,"-disabled"),s),a)),m=function(x){s||("checked"in e||I(x.target.checked),j==null||j({target:ee(ee({},e),{},{type:S,checked:x.target.checked}),stopPropagation:function(){x.stopPropagation()},preventDefault:function(){x.preventDefault()},nativeEvent:x.nativeEvent}))};return d.createElement("span",{className:w,title:R,style:b},d.createElement("input",fe({},B,{className:"".concat(r,"-input"),ref:g,onChange:m,disabled:s,checked:!!$,type:S})),d.createElement("span",{className:"".concat(r,"-inner")}))});const Ne=e=>{const{componentCls:n,antCls:a}=e,o=`${n}-group`;return{[o]:Object.assign(Object.assign({},X(e)),{display:"inline-block",fontSize:0,[`&${o}-rtl`]:{direction:"rtl"},[`${a}-badge ${a}-badge-count`]:{zIndex:1},[`> ${a}-badge:not(:first-child) > ${a}-button-wrapper`]:{borderInlineStart:"none"}})}},Me=e=>{const{componentCls:n,wrapperMarginInlineEnd:a,colorPrimary:o,radioSize:r,motionDurationSlow:u,motionDurationMid:b,motionEaseInOutCirc:v,colorBgContainer:s,colorBorder:i,lineWidth:l,colorBgContainerDisabled:h,colorTextDisabled:S,paddingXS:R,dotColorDisabled:j,lineType:B,radioColor:g,radioBgColor:k,calc:C}=e,$=`${n}-inner`,I=4,w=C(r).sub(C(I).mul(2)),m=C(1).mul(r).equal();return{[`${n}-wrapper`]:Object.assign(Object.assign({},X(e)),{display:"inline-flex",alignItems:"baseline",marginInlineStart:0,marginInlineEnd:a,cursor:"pointer",[`&${n}-wrapper-rtl`]:{direction:"rtl"},"&-disabled":{cursor:"not-allowed",color:e.colorTextDisabled},"&::after":{display:"inline-block",width:0,overflow:"hidden",content:'"\\a0"'},[`${n}-checked::after`]:{position:"absolute",insetBlockStart:0,insetInlineStart:0,width:"100%",height:"100%",border:`${D(l)} ${B} ${o}`,borderRadius:"50%",visibility:"hidden",content:'""'},[n]:Object.assign(Object.assign({},X(e)),{position:"relative",display:"inline-block",outline:"none",cursor:"pointer",alignSelf:"center",borderRadius:"50%"}),[`${n}-wrapper:hover &,
        &:hover ${$}`]:{borderColor:o},[`${n}-input:focus-visible + ${$}`]:Object.assign({},le(e)),[`${n}:hover::after, ${n}-wrapper:hover &::after`]:{visibility:"visible"},[`${n}-inner`]:{"&::after":{boxSizing:"border-box",position:"absolute",insetBlockStart:"50%",insetInlineStart:"50%",display:"block",width:m,height:m,marginBlockStart:C(1).mul(r).div(-2).equal(),marginInlineStart:C(1).mul(r).div(-2).equal(),backgroundColor:g,borderBlockStart:0,borderInlineStart:0,borderRadius:m,transform:"scale(0)",opacity:0,transition:`all ${u} ${v}`,content:'""'},boxSizing:"border-box",position:"relative",insetBlockStart:0,insetInlineStart:0,display:"block",width:m,height:m,backgroundColor:s,borderColor:i,borderStyle:"solid",borderWidth:l,borderRadius:"50%",transition:`all ${b}`},[`${n}-input`]:{position:"absolute",inset:0,zIndex:1,cursor:"pointer",opacity:0},[`${n}-checked`]:{[$]:{borderColor:o,backgroundColor:k,"&::after":{transform:`scale(${e.calc(e.dotSize).div(r).equal()})`,opacity:1,transition:`all ${u} ${v}`}}},[`${n}-disabled`]:{cursor:"not-allowed",[$]:{backgroundColor:h,borderColor:i,cursor:"not-allowed","&::after":{backgroundColor:j}},[`${n}-input`]:{cursor:"not-allowed"},[`${n}-disabled + span`]:{color:S,cursor:"not-allowed"},[`&${n}-checked`]:{[$]:{"&::after":{transform:`scale(${C(w).div(r).equal({unit:!1})})`}}}},[`span${n} + *`]:{paddingInlineStart:R,paddingInlineEnd:R}})}},Ge=e=>{const{buttonColor:n,controlHeight:a,componentCls:o,lineWidth:r,lineType:u,colorBorder:b,motionDurationSlow:v,motionDurationMid:s,buttonPaddingInline:i,fontSize:l,buttonBg:h,fontSizeLG:S,controlHeightLG:R,controlHeightSM:j,paddingXS:B,borderRadius:g,borderRadiusSM:k,borderRadiusLG:C,buttonCheckedBg:$,buttonSolidCheckedColor:I,colorTextDisabled:w,colorBgContainerDisabled:m,buttonCheckedBgDisabled:E,buttonCheckedColorDisabled:x,colorPrimary:O,colorPrimaryHover:P,colorPrimaryActive:f,buttonSolidCheckedBg:z,buttonSolidCheckedHoverBg:W,buttonSolidCheckedActiveBg:p,calc:y}=e;return{[`${o}-button-wrapper`]:{position:"relative",display:"inline-block",height:a,margin:0,paddingInline:i,paddingBlock:0,color:n,fontSize:l,lineHeight:D(y(a).sub(y(r).mul(2)).equal()),background:h,border:`${D(r)} ${u} ${b}`,borderBlockStartWidth:y(r).add(.02).equal(),borderInlineStartWidth:0,borderInlineEndWidth:r,cursor:"pointer",transition:[`color ${s}`,`background ${s}`,`box-shadow ${s}`].join(","),a:{color:n},[`> ${o}-button`]:{position:"absolute",insetBlockStart:0,insetInlineStart:0,zIndex:-1,width:"100%",height:"100%"},"&:not(:first-child)":{"&::before":{position:"absolute",insetBlockStart:y(r).mul(-1).equal(),insetInlineStart:y(r).mul(-1).equal(),display:"block",boxSizing:"content-box",width:1,height:"100%",paddingBlock:r,paddingInline:0,backgroundColor:b,transition:`background-color ${v}`,content:'""'}},"&:first-child":{borderInlineStart:`${D(r)} ${u} ${b}`,borderStartStartRadius:g,borderEndStartRadius:g},"&:last-child":{borderStartEndRadius:g,borderEndEndRadius:g},"&:first-child:last-child":{borderRadius:g},[`${o}-group-large &`]:{height:R,fontSize:S,lineHeight:D(y(R).sub(y(r).mul(2)).equal()),"&:first-child":{borderStartStartRadius:C,borderEndStartRadius:C},"&:last-child":{borderStartEndRadius:C,borderEndEndRadius:C}},[`${o}-group-small &`]:{height:j,paddingInline:y(B).sub(r).equal(),paddingBlock:0,lineHeight:D(y(j).sub(y(r).mul(2)).equal()),"&:first-child":{borderStartStartRadius:k,borderEndStartRadius:k},"&:last-child":{borderStartEndRadius:k,borderEndEndRadius:k}},"&:hover":{position:"relative",color:O},"&:has(:focus-visible)":Object.assign({},le(e)),[`${o}-inner, input[type='checkbox'], input[type='radio']`]:{width:0,height:0,opacity:0,pointerEvents:"none"},[`&-checked:not(${o}-button-wrapper-disabled)`]:{zIndex:1,color:O,background:$,borderColor:O,"&::before":{backgroundColor:O},"&:first-child":{borderColor:O},"&:hover":{color:P,borderColor:P,"&::before":{backgroundColor:P}},"&:active":{color:f,borderColor:f,"&::before":{backgroundColor:f}}},[`${o}-group-solid &-checked:not(${o}-button-wrapper-disabled)`]:{color:I,background:z,borderColor:z,"&:hover":{color:I,background:W,borderColor:W},"&:active":{color:I,background:p,borderColor:p}},"&-disabled":{color:w,backgroundColor:m,borderColor:b,cursor:"not-allowed","&:first-child, &:hover":{color:w,backgroundColor:m,borderColor:b}},[`&-disabled${o}-button-wrapper-checked`]:{color:x,backgroundColor:E,borderColor:b,boxShadow:"none"}}}},Le=e=>{const{wireframe:n,padding:a,marginXS:o,lineWidth:r,fontSizeLG:u,colorText:b,colorBgContainer:v,colorTextDisabled:s,controlItemBgActiveDisabled:i,colorTextLightSolid:l,colorPrimary:h,colorPrimaryHover:S,colorPrimaryActive:R,colorWhite:j}=e,B=4,g=u,k=n?g-B*2:g-(B+r)*2;return{radioSize:g,dotSize:k,dotColorDisabled:s,buttonSolidCheckedColor:l,buttonSolidCheckedBg:h,buttonSolidCheckedHoverBg:S,buttonSolidCheckedActiveBg:R,buttonBg:v,buttonCheckedBg:v,buttonColor:b,buttonCheckedBgDisabled:i,buttonCheckedColorDisabled:s,buttonPaddingInline:a-r,wrapperMarginInlineEnd:o,radioColor:n?h:j,radioBgColor:n?v:h}},ge=ve("Radio",e=>{const{controlOutline:n,controlOutlineWidth:a}=e,o=`0 0 0 ${D(a)} ${n}`,u=Ce(e,{radioFocusShadow:o,radioButtonFocusShadow:o});return[Ne(u),Me(u),Ge(u)]},Le,{unitless:{radioSize:!0,dotSize:!0}});var He=globalThis&&globalThis.__rest||function(e,n){var a={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&n.indexOf(o)<0&&(a[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,o=Object.getOwnPropertySymbols(e);r<o.length;r++)n.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(a[o[r]]=e[o[r]]);return a};const Ve=(e,n)=>{var a,o;const r=d.useContext(pe),u=d.useContext(me),{getPrefixCls:b,direction:v,radio:s}=d.useContext(Z),i=d.useRef(null),l=ye(n,i),{isFormItemInput:h}=d.useContext(Ee),S=p=>{var y,q;(y=e.onChange)===null||y===void 0||y.call(e,p),(q=r==null?void 0:r.onChange)===null||q===void 0||q.call(r,p)},{prefixCls:R,className:j,rootClassName:B,children:g,style:k,title:C}=e,$=He(e,["prefixCls","className","rootClassName","children","style","title"]),I=b("radio",R),w=((r==null?void 0:r.optionType)||u)==="button",m=w?`${I}-button`:I,E=he(I),[x,O,P]=ge(I,E),f=Object.assign({},$),z=d.useContext(Se);r&&(f.name=r.name,f.onChange=S,f.checked=e.value===r.value,f.disabled=(a=f.disabled)!==null&&a!==void 0?a:r.disabled),f.disabled=(o=f.disabled)!==null&&o!==void 0?o:z;const W=L(`${m}-wrapper`,{[`${m}-wrapper-checked`]:f.checked,[`${m}-wrapper-disabled`]:f.disabled,[`${m}-wrapper-rtl`]:v==="rtl",[`${m}-wrapper-in-form-item`]:h},s==null?void 0:s.className,j,B,O,P,E);return x(d.createElement(Pe,{component:"Radio",disabled:f.disabled},d.createElement("label",{className:W,style:Object.assign(Object.assign({},s==null?void 0:s.style),k),onMouseEnter:e.onMouseEnter,onMouseLeave:e.onMouseLeave,title:C},d.createElement(Fe,Object.assign({},f,{className:L(f.className,!w&&ze),type:"radio",prefixCls:m,ref:l})),g!==void 0?d.createElement("span",null,g):null)))},Ue=d.forwardRef(Ve),H=Ue,Ye=d.forwardRef((e,n)=>{const{getPrefixCls:a,direction:o}=d.useContext(Z),[r,u]=ue(e.defaultValue,{value:e.value}),b=p=>{const y=r,q=p.target.value;"value"in e||u(q);const{onChange:K}=e;K&&q!==y&&K(p)},{prefixCls:v,className:s,rootClassName:i,options:l,buttonStyle:h="outline",disabled:S,children:R,size:j,style:B,id:g,onMouseEnter:k,onMouseLeave:C,onFocus:$,onBlur:I}=e,w=a("radio",v),m=`${w}-group`,E=he(w),[x,O,P]=ge(w,E);let f=R;l&&l.length>0&&(f=l.map(p=>typeof p=="string"||typeof p=="number"?d.createElement(H,{key:p.toString(),prefixCls:w,disabled:S,value:p,checked:r===p},p):d.createElement(H,{key:`radio-group-value-options-${p.value}`,prefixCls:w,disabled:p.disabled||S,value:p.value,checked:r===p.value,title:p.title,style:p.style,id:p.id,required:p.required},p.label)));const z=De(j),W=L(m,`${m}-${h}`,{[`${m}-${z}`]:z,[`${m}-rtl`]:o==="rtl"},s,i,O,P,E);return x(d.createElement("div",Object.assign({},We(e,{aria:!0,data:!0}),{className:W,style:B,onMouseEnter:k,onMouseLeave:C,onFocus:$,onBlur:I,id:g,ref:n}),d.createElement(Ae,{value:{onChange:b,value:r,disabled:e.disabled,name:e.name,optionType:e.optionType}},f)))}),Xe=d.memo(Ye);var Ze=globalThis&&globalThis.__rest||function(e,n){var a={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&n.indexOf(o)<0&&(a[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,o=Object.getOwnPropertySymbols(e);r<o.length;r++)n.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(a[o[r]]=e[o[r]]);return a};const Je=(e,n)=>{const{getPrefixCls:a}=d.useContext(Z),{prefixCls:o}=e,r=Ze(e,["prefixCls"]),u=a("radio",o);return d.createElement(Te,{value:"button"},d.createElement(H,Object.assign({prefixCls:u},r,{type:"radio",ref:n})))},Ke=d.forwardRef(Je),V=H;V.Button=Ke;V.Group=Xe;V.__ANT_RADIO=!0;const J=V,Qe=Be().shape({name:N().matches(/^[A-Za-z\s'-]+$/,"Incorrect name format").required("Required").min(3,"Minimum number of characters is 3"),email:N().matches(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,"Invalid email").required("Required"),height:F().min(150,"Minimum height is 150").required("Required"),currentWeight:F().min(35,"Minimum weight is 35").required("Required"),desiredWeight:F().min(35,"Minimum weight is 35").required("Required"),birthday:N().required("Required").matches(/^\d{2}\/\d{2}\/\d{4}$/,"Invalid date format"),blood:F().required("Required").oneOf([1,2,3,4],"Invalid blood type"),sex:N().required("Required").oneOf(["male","female"],"Invalid sex"),levelActivity:F().required("Required").oneOf([1,2,3,4,5],"Invalid activity level")}),et=c.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 115px;
  height: 42px;

  margin-bottom: 44px;

  background-color: ${e=>e.theme.colors.primary};
  border-radius: 12px;
  padding: 12px 40px;
  color: ${({disabled:e,theme:n})=>e?"rgba(239, 237, 232, 0.6)":n.colors.white};
  font-size: 16px;
  font-weight: 500;
  line-height: 1.2;
  transition: background-color 350ms ease;
  &:hover {
    background-color: ${e=>e.theme.colors.secondary};
  }

  @media screen and (min-width: 768px) {
    width: 144px;
    height: 56px;
    font-size: 20px;
    padding: 16px 50px;
    margin-bottom: 54px;
  }
  @media screen and (min-width: 1440px) {
    margin-bottom: 0;
  }
`,tt=c.div`
  position: absolute;
  top: 0;
  left: 0;
`,rt=c.div`
  position: absolute;
  top: 17px;
  right: 14px;
`,ot=c(_.Item)`
  margin-bottom: 40px;
  @media screen and (min-width: 768px) {
    margin-bottom: 38px;
  }
  @media screen and (min-width: 1440px) {
    margin-bottom: 48px;
  }
`,it=c.div`
  @media screen and (min-width: 768px) {
    display: flex;
    gap: 14px;
    margin-bottom: 14px;
  }
`,nt=c(_)`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 1440px) {
    margin-top: 5px;
  }
`,at=c.div`
  display: grid;
  grid-template-columns: auto auto;
  gap: 14px;
  margin-bottom: 20px;
  .ant-form-item {
    input {
      font-size: 16px;
      line-height: 1.5;
    }
  }

  @media screen and (min-width: 768px) {
    display: flex;
    margin-bottom: 16px;
  }
  @media screen and (min-width: 1440px) {
  }
`,ie=c(_.Item)`
  width: 100%;
  margin-bottom: 14px;
  @media screen and (min-width: 768px) {
    margin-bottom: 0;
  }
`,M=c(_.Item)`
  margin: 0;
`,A=c(Oe)`
  width: 100%;
  padding: 14px;
  line-height: 1.3;
  align-items: center;
  border-radius: 12px;
  border: 1px solid ${({theme:e})=>e.colors.formBorder};
  background-color: transparent;
  color: ${({theme:e})=>e.colors.white};
  font-size: 14px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
  }
`,lt=c.div`
  position: relative;
`,st=c.div`
  display: flex;
  gap: 20px;
  margin-bottom: 40px;
  @media screen and (min-width: 768px) {
    gap: 32px;
    margin-bottom: 32px;
  }
  .ant-form-item {
    margin-bottom: 0;
  }

  .ant-form-item:nth-child(2) {
    display: flex;
    align-items: end;
  }
`,Y=c(J)``,ne=c(J.Group)`
  display: flex;
  gap: 8px;
`,dt=c(J.Group)`
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media screen and (min-width: 768px) {
  }
`,T=[{label:"Blood",name:"blood",options:[1,2,3,4]},{name:"sex",options:["male","female"]},{name:"levelActivity",options:["Sedentary lifestyle (little or no physical activity)","Light activity (light exercises/sports 1-3 days per week)","Moderately active (moderate exercises/sports 3-5 days per week)","Very active (intense exercises/sports 6-7 days per week)","Extremely active (very strenuous exercises/sports and physical work)"]}];const ct=()=>{const e=se(de),n=ce(),[a,o]=d.useState(e.birthday?e.birthday:"00.00.0000"),[r,u]=d.useState(!1),b=l=>{const h={...l,birthday:a};console.log(h),n(we(h))},v=()=>{const l=new Date;return l.setFullYear(l.getFullYear()-18),l},s=l=>i.touched[l]&&!i.errors[l]?"success":i.errors[l]?"error":"",i=Re({initialValues:{name:e.name||"",email:e.email||"",height:e.height||"0",currentWeight:e.currentWeight||"0",desiredWeight:e.desiredWeight||"0",birthday:e.birthday||"00/00/0000",blood:e.blood||"",sex:e.sex||"",levelActivity:e.levelActivity||""},validationSchema:Qe,onSubmit:b});return t.jsxs(nt,{onFinish:i.handleSubmit,children:[t.jsxs(it,{children:[t.jsx(ie,{label:"Name",help:i.errors.name,validateStatus:s("name"),hasFeedback:!0,children:t.jsx(A,{placeholder:"Your name",value:i.values.name,onChange:i.handleChange,name:"name",required:!0,onBlur:i.handleBlur})}),t.jsx(ie,{label:"Email",children:t.jsx(A,{placeholder:"Your Email",type:"email",name:"email",value:i.values.email,onChange:i.handleChange,style:{color:"rgba(239, 237, 232, 0.60)"},readOnly:!0,disabled:!0})})]}),t.jsxs(at,{children:[t.jsx(M,{help:i.errors.height,validateStatus:s("height"),hasFeedback:!0,label:"Height",children:t.jsx(A,{placeholder:"Your Height",type:"number",name:"height",value:i.values.height,onChange:i.handleChange,required:!0,onBlur:i.handleBlur})}),t.jsx(M,{help:i.errors.currentWeight,validateStatus:s("currentWeight"),hasFeedback:!0,label:"Current Weight",children:t.jsx(A,{placeholder:"Your Current Weight",type:"number",name:"currentWeight",value:i.values.currentWeight,onChange:i.handleChange,required:!0,onBlur:i.handleBlur})}),t.jsx(M,{label:"Desired Weight",help:i.errors.desiredWeight,validateStatus:s("desiredWeight"),hasFeedback:!0,children:t.jsx(A,{placeholder:"Your Desired Weight",type:"number",name:"desiredWeight",value:i.values.desiredWeight,onChange:i.handleChange,required:!0,onBlur:i.handleBlur})}),t.jsx(M,{label:"Date of birth",help:i.errors.birthday,validateStatus:s("birthday"),children:t.jsxs(lt,{children:[t.jsx(A,{placeholder:"Your Date of birth",type:"text",onClick:()=>u(!0),name:"birthday",value:a,required:!0,onBlur:i.handleBlur,readOnly:!0}),t.jsx(rt,{children:t.jsx(G,{icon:"icon-calendar",stroke:"#EFEDE8",size:"18"})}),t.jsx(tt,{children:t.jsx(ke,{date:a,setDate:o,maxDate:v(),isOpen:r,setIsOpen:u})})]})})]}),t.jsxs(st,{children:[t.jsx(_.Item,{label:"Blood",help:i.errors.blood,validateStatus:s("blood"),hasFeedback:!0,children:t.jsx(ne,{onChange:i.handleChange,value:i.values.blood,name:T[0].name,children:T[0].options.map((l,h)=>t.jsx(Y,{value:l,children:l},h))})}),t.jsx(_.Item,{help:i.errors.sex,validateStatus:s("sex"),hasFeedback:!0,children:t.jsx(ne,{onChange:i.handleChange,value:i.values.sex,name:T[1].name,children:T[1].options.map((l,h)=>{let S=l.charAt(0).toUpperCase()+l.slice(1);return t.jsx(Y,{value:l,children:S},h)})})})]}),t.jsx(ot,{help:i.errors.levelActivity,validateStatus:s("levelActivity"),hasFeedback:!0,children:t.jsx(dt,{onChange:i.handleChange,value:i.values.levelActivity,name:T[2].name,children:T[2].options.map((l,h)=>t.jsx(Y,{value:h+1,children:l},h))})}),t.jsx(et,{disabled:!i.isValid,children:"Save"})]})},ut=c.div`
  display: flex;
  gap: 40px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 40px auto 18px;

  @media screen and (min-width: 768px) {
    width: 439px;
    gap: 32px;
    margin-top: 64px;
    margin-bottom: 38px;
  }
  @media screen and (min-width: 768px) {
    margin: 0 auto;
  }
`,ht=c.div`
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
`,pt=c.img`
  border-radius: 100px;
  width: 100%;
  height: 100%;
`,mt=c.div`
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
`,gt=c.svg`
  width: 24px;
  height: 24px;
  @media screen and (min-width: 768px) {
    width: 32px;
    height: 32px;
  }
`,bt=c.svg`
  width: 61px;
  height: 62px;
  fill: ${({theme:e})=>e.colors.formBorder};
  @media screen and (min-width: 768px) {
    width: 102px;
    height: 102px;
  }
`,xt=c.label`
  cursor: pointer;
`,ft=c.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  text-align: center;
  gap: 4px;

  @media screen and (max-width: 767px) {
    margin-top: -8px;
  }
`,vt=c.p`
  font-size: 18px;
  line-height: 1.1;
  color: ${({theme:e})=>e.colors.white};

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 1.16;
  }
`,Ct=c.p`
  color: rgba(239, 237, 232, 0.5);
  font-size: 14px;
  line-height: 1.33;
`,yt=c.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 14px;
  /* margin-top: 40px;
  margin-bottom: 40px; */

  font-size: 12px;
  line-height: 1.33;
  color: rgba(239, 237, 232, 0.8);
`,ae=c.li`
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
`,St=c.div`
  margin-left: auto;
`,wt=()=>{const e=ce(),{name:n,avatarURL:a,bmr:o,dpa:r}=se(de),u=t.jsx(bt,{children:t.jsx("use",{href:`${oe}#icon-user`})}),v=a?t.jsx(pt,{src:a,alt:"Avatar"}):u,s=i=>{const l=i.target.files[0];l&&e(je({avatar:l}))};return t.jsxs(ut,{children:[t.jsxs(ht,{children:[v,t.jsxs(mt,{children:[t.jsx(xt,{htmlFor:"fileInput",children:t.jsx(gt,{children:t.jsx("use",{href:`${oe}#icon-add-avatar`,"aria-label":"Upload Avatar"})})}),t.jsx("input",{type:"file",accept:"image/*, .jpg, .jpeg, .png",id:"fileInput",name:"avatar",style:{display:"none"},onChange:s})]})]}),t.jsxs(ft,{children:[t.jsx(vt,{children:n}),t.jsx(Ct,{children:"User"})]}),t.jsxs(yt,{children:[t.jsxs(ae,{children:[t.jsxs(te,{children:[t.jsx(G,{icon:"icon-food",size:"20",color:U.colors.secondary}),t.jsx("p",{children:"Daily calorie intake"})]}),t.jsx(re,{children:o})]}),t.jsxs(ae,{children:[t.jsxs(te,{children:[t.jsx(G,{icon:"icon-dumbbell",size:"20",color:U.colors.secondary}),t.jsx("p",{children:"Daily physical activity"})]}),t.jsxs(re,{children:[r," min"]})]})]}),t.jsxs($e,{children:[t.jsx("div",{children:t.jsx(G,{icon:"icon-exclamation-mark",size:"16",stroke:U.colors.white})}),t.jsx("p",{children:"We understand that each individual is unique, so the entire approach to diet is relative and tailored to your unique body and goals."})]}),t.jsx(St,{children:t.jsx(qe,{})})]})},jt=c.div`
  margin-top: 40px;
  @media screen and (min-width: 768px) {
    margin-top: 72px;
  }
`,kt=c.div`
  margin-top: 40px;
  @media screen and (min-width: 768px) {
    margin-top: 64px;
  }
  @media screen and (min-width: 1440px) {
    display: flex;
    flex-direction: row-reverse;
    margin-top: 27px;
  }
`,$t=()=>t.jsx(t.Fragment,{children:t.jsxs(jt,{children:[t.jsx(Ie,{title:"Profile Settings"}),t.jsxs(kt,{children:[t.jsx(wt,{}),t.jsx(ct,{})]})]})}),Tt=$t;export{Tt as default};
