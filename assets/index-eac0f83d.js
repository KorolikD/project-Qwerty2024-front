import{r as i,q as D,_ as de,v as B,w as ne,x as M,y as vt,z as xt,B as Ee,f as U,D as Q,E as bt,F as Ge,G as Ue,K as Ie,H as ue,h as Z,I as Ct,J as yt,M as H,O as Ve,P as St,Q as wt,C as $t,R as kt,u as P,a as Ke,m as Xe,s as Ye,j as s,S as jt,t as $e,T as Et}from"./index-1e9fb2d9.js";import{C as Ot,S as Ae,c as Fe,A as Nt,T as Rt}from"./DayDashboard.styled-3fe4d369.js";import{c as Pt,a as ke,b as te,d as It,F as Qe,A as Y,u as At}from"./index.esm-2ab1e9d1.js";import{C as Ft,a as fe,b as Tt,u as Ze,F as Mt,W as Bt,T as _t,c as zt,r as Dt}from"./motion-55db76eb.js";import{C as Lt,p as Wt}from"./dayjs.min-0465ebff.js";import{C as qt,E as Ht}from"./zoom-53ab3e47.js";import{K as Gt,I as Ut}from"./KeyCode-cbfc194f.js";import{s as Te}from"./sprite-3811d627.js";import{L as Vt}from"./LogOutBtn-21c3720a.js";import{S as je}from"./SvgCustom-da3455ff.js";import"./index-3748ffa4.js";var Je=i.forwardRef(function(e,n){var r=e.prefixCls,t=e.style,o=e.className,a=e.duration,m=a===void 0?4.5:a,b=e.eventKey,l=e.content,u=e.closable,p=e.closeIcon,v=p===void 0?"x":p,y=e.props,S=e.onClick,g=e.onNoticeClose,O=e.times,x=e.hovering,k=i.useState(!1),j=D(k,2),E=j[0],N=j[1],w=x||E,C=function(){g(b)},$=function(h){(h.key==="Enter"||h.code==="Enter"||h.keyCode===Gt.ENTER)&&C()};i.useEffect(function(){if(!w&&m>0){var f=setTimeout(function(){C()},m*1e3);return function(){clearTimeout(f)}}},[m,w,O]);var c="".concat(r,"-notice");return i.createElement("div",de({},y,{ref:n,className:B(c,o,ne({},"".concat(c,"-closable"),u)),style:t,onMouseEnter:function(h){var d;N(!0),y==null||(d=y.onMouseEnter)===null||d===void 0||d.call(y,h)},onMouseLeave:function(h){var d;N(!1),y==null||(d=y.onMouseLeave)===null||d===void 0||d.call(y,h)},onClick:S}),i.createElement("div",{className:"".concat(c,"-content")},l),u&&i.createElement("a",{tabIndex:0,className:"".concat(c,"-close"),onKeyDown:$,onClick:function(h){h.preventDefault(),h.stopPropagation(),C()}},v))}),et=M.createContext({}),Kt=function(n){var r=n.children,t=n.classNames;return M.createElement(et.Provider,{value:{classNames:t}},r)},Me=8,Be=3,_e=16,Xt=function(n){var r={offset:Me,threshold:Be,gap:_e};if(n&&vt(n)==="object"){var t,o,a;r.offset=(t=n.offset)!==null&&t!==void 0?t:Me,r.threshold=(o=n.threshold)!==null&&o!==void 0?o:Be,r.gap=(a=n.gap)!==null&&a!==void 0?a:_e}return[!!n,r]},Yt=["className","style","classNames","styles"],Qt=function(n){var r,t=n.configList,o=n.placement,a=n.prefixCls,m=n.className,b=n.style,l=n.motion,u=n.onAllNoticeRemoved,p=n.onNoticeClose,v=n.stack,y=i.useContext(et),S=y.classNames,g=i.useRef({}),O=i.useState(null),x=D(O,2),k=x[0],j=x[1],E=i.useState([]),N=D(E,2),w=N[0],C=N[1],$=t.map(function(F){return{config:F,key:String(F.key)}}),c=Xt(v),f=D(c,2),h=f[0],d=f[1],A=d.offset,T=d.threshold,R=d.gap,I=h&&(w.length>0||$.length<=T),L=typeof l=="function"?l(o):l;return i.useEffect(function(){h&&w.length>1&&C(function(F){return F.filter(function(W){return $.some(function(ie){var he=ie.key;return W===he})})})},[w,$,h]),i.useEffect(function(){var F;if(h&&g.current[(F=$[$.length-1])===null||F===void 0?void 0:F.key]){var W;j(g.current[(W=$[$.length-1])===null||W===void 0?void 0:W.key])}},[$,h]),M.createElement(xt,de({key:o,className:B(a,"".concat(a,"-").concat(o),S==null?void 0:S.list,m,(r={},ne(r,"".concat(a,"-stack"),!!h),ne(r,"".concat(a,"-stack-expanded"),I),r)),style:b,keys:$,motionAppear:!0},L,{onAllRemoved:function(){u(o)}}),function(F,W){var ie=F.config,he=F.className,lt=F.style,ct=F.index,Ne=ie,ve=Ne.key,dt=Ne.times,z=String(ve),J=ie,ut=J.className,mt=J.style,ae=J.classNames,se=J.styles,ft=Ee(J,Yt),xe=$.findIndex(function(ce){return ce.key===z}),le={};if(h){var ee=$.length-1-(xe>-1?xe:ct-1),Re=o==="top"||o==="bottom"?"-50%":"0";if(ee>0){var be,Ce,ye;le.height=I?(be=g.current[z])===null||be===void 0?void 0:be.offsetHeight:k==null?void 0:k.offsetHeight;for(var Pe=0,Se=0;Se<ee;Se++){var we;Pe+=((we=g.current[$[$.length-1-Se].key])===null||we===void 0?void 0:we.offsetHeight)+R}var pt=(I?Pe:ee*A)*(o.startsWith("top")?1:-1),gt=!I&&k!==null&&k!==void 0&&k.offsetWidth&&(Ce=g.current[z])!==null&&Ce!==void 0&&Ce.offsetWidth?((k==null?void 0:k.offsetWidth)-A*2*(ee<3?ee:3))/((ye=g.current[z])===null||ye===void 0?void 0:ye.offsetWidth):1;le.transform="translate3d(".concat(Re,", ").concat(pt,"px, 0) scaleX(").concat(gt,")")}else le.transform="translate3d(".concat(Re,", 0, 0)")}return M.createElement("div",{ref:W,className:B("".concat(a,"-notice-wrapper"),he,ae==null?void 0:ae.wrapper),style:U(U(U({},lt),le),se==null?void 0:se.wrapper),onMouseEnter:function(){return C(function(q){return q.includes(z)?q:[].concat(Q(q),[z])})},onMouseLeave:function(){return C(function(q){return q.filter(function(ht){return ht!==z})})}},M.createElement(Je,de({},ft,{ref:function(q){xe>-1?g.current[z]=q:delete g.current[z]},prefixCls:a,classNames:ae,styles:se,className:B(ut,S==null?void 0:S.notice),style:mt,times:dt,key:ve,eventKey:ve,onNoticeClose:p,hovering:h&&w.length>0})))})},Zt=i.forwardRef(function(e,n){var r=e.prefixCls,t=r===void 0?"rc-notification":r,o=e.container,a=e.motion,m=e.maxCount,b=e.className,l=e.style,u=e.onAllRemoved,p=e.stack,v=e.renderNotifications,y=i.useState([]),S=D(y,2),g=S[0],O=S[1],x=function(f){var h,d=g.find(function(A){return A.key===f});d==null||(h=d.onClose)===null||h===void 0||h.call(d),O(function(A){return A.filter(function(T){return T.key!==f})})};i.useImperativeHandle(n,function(){return{open:function(f){O(function(h){var d=Q(h),A=d.findIndex(function(I){return I.key===f.key}),T=U({},f);if(A>=0){var R;T.times=(((R=h[A])===null||R===void 0?void 0:R.times)||0)+1,d[A]=T}else T.times=0,d.push(T);return m>0&&d.length>m&&(d=d.slice(-m)),d})},close:function(f){x(f)},destroy:function(){O([])}}});var k=i.useState({}),j=D(k,2),E=j[0],N=j[1];i.useEffect(function(){var c={};g.forEach(function(f){var h=f.placement,d=h===void 0?"topRight":h;d&&(c[d]=c[d]||[],c[d].push(f))}),Object.keys(E).forEach(function(f){c[f]=c[f]||[]}),N(c)},[g]);var w=function(f){N(function(h){var d=U({},h),A=d[f]||[];return A.length||delete d[f],d})},C=i.useRef(!1);if(i.useEffect(function(){Object.keys(E).length>0?C.current=!0:C.current&&(u==null||u(),C.current=!1)},[E]),!o)return null;var $=Object.keys(E);return bt.createPortal(i.createElement(i.Fragment,null,$.map(function(c){var f=E[c],h=i.createElement(Qt,{key:c,configList:f,placement:c,prefixCls:t,className:b==null?void 0:b(c),style:l==null?void 0:l(c),motion:a,onNoticeClose:x,onAllNoticeRemoved:w,stack:p});return v?v(h,{prefixCls:t,key:c}):h})),o)}),Jt=["getContainer","motion","prefixCls","maxCount","className","style","onAllRemoved","stack","renderNotifications"],en=function(){return document.body},ze=0;function tn(){for(var e={},n=arguments.length,r=new Array(n),t=0;t<n;t++)r[t]=arguments[t];return r.forEach(function(o){o&&Object.keys(o).forEach(function(a){var m=o[a];m!==void 0&&(e[a]=m)})}),e}function nn(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.getContainer,r=n===void 0?en:n,t=e.motion,o=e.prefixCls,a=e.maxCount,m=e.className,b=e.style,l=e.onAllRemoved,u=e.stack,p=e.renderNotifications,v=Ee(e,Jt),y=i.useState(),S=D(y,2),g=S[0],O=S[1],x=i.useRef(),k=i.createElement(Zt,{container:g,ref:x,prefixCls:o,motion:t,maxCount:a,className:m,style:b,onAllRemoved:l,stack:u,renderNotifications:p}),j=i.useState([]),E=D(j,2),N=E[0],w=E[1],C=i.useMemo(function(){return{open:function(c){var f=tn(v,c);(f.key===null||f.key===void 0)&&(f.key="rc-notification-".concat(ze),ze+=1),w(function(h){return[].concat(Q(h),[{type:"open",config:f}])})},close:function(c){w(function(f){return[].concat(Q(f),[{type:"close",key:c}])})},destroy:function(){w(function(c){return[].concat(Q(c),[{type:"destroy"}])})}}},[]);return i.useEffect(function(){O(r())}),i.useEffect(function(){x.current&&N.length&&(N.forEach(function($){switch($.type){case"open":x.current.open($.config);break;case"close":x.current.close($.key);break;case"destroy":x.current.destroy();break}}),w(function($){return $.filter(function(c){return!N.includes(c)})}))},[N]),[C,k]}const on=e=>{const{componentCls:n,iconCls:r,boxShadow:t,colorText:o,colorSuccess:a,colorError:m,colorWarning:b,colorInfo:l,fontSizeLG:u,motionEaseInOutCirc:p,motionDurationSlow:v,marginXS:y,paddingXS:S,borderRadiusLG:g,zIndexPopup:O,contentPadding:x,contentBg:k}=e,j=`${n}-notice`,E=new Ie("MessageMoveIn",{"0%":{padding:0,transform:"translateY(-100%)",opacity:0},"100%":{padding:S,transform:"translateY(0)",opacity:1}}),N=new Ie("MessageMoveOut",{"0%":{maxHeight:e.height,padding:S,opacity:1},"100%":{maxHeight:0,padding:0,opacity:0}}),w={padding:S,textAlign:"center",[`${n}-custom-content > ${r}`]:{verticalAlign:"text-bottom",marginInlineEnd:y,fontSize:u},[`${j}-content`]:{display:"inline-block",padding:x,background:k,borderRadius:g,boxShadow:t,pointerEvents:"all"},[`${n}-success > ${r}`]:{color:a},[`${n}-error > ${r}`]:{color:m},[`${n}-warning > ${r}`]:{color:b},[`${n}-info > ${r},
      ${n}-loading > ${r}`]:{color:l}};return[{[n]:Object.assign(Object.assign({},ue(e)),{color:o,position:"fixed",top:y,width:"100%",pointerEvents:"none",zIndex:O,[`${n}-move-up`]:{animationFillMode:"forwards"},[`
        ${n}-move-up-appear,
        ${n}-move-up-enter
      `]:{animationName:E,animationDuration:v,animationPlayState:"paused",animationTimingFunction:p},[`
        ${n}-move-up-appear${n}-move-up-appear-active,
        ${n}-move-up-enter${n}-move-up-enter-active
      `]:{animationPlayState:"running"},[`${n}-move-up-leave`]:{animationName:N,animationDuration:v,animationPlayState:"paused",animationTimingFunction:p},[`${n}-move-up-leave${n}-move-up-leave-active`]:{animationPlayState:"running"},"&-rtl":{direction:"rtl",span:{direction:"rtl"}}})},{[n]:{[`${j}-wrapper`]:Object.assign({},w)}},{[`${n}-notice-pure-panel`]:Object.assign(Object.assign({},w),{padding:0,textAlign:"start"})}]},rn=e=>({zIndexPopup:e.zIndexPopupBase+Ft+10,contentBg:e.colorBgElevated,contentPadding:`${(e.controlHeightLG-e.fontSize*e.lineHeight)/2}px ${e.paddingSM}px`}),tt=Ge("Message",e=>{const n=Ue(e,{height:150});return[on(n)]},rn);var an=globalThis&&globalThis.__rest||function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,t=Object.getOwnPropertySymbols(e);o<t.length;o++)n.indexOf(t[o])<0&&Object.prototype.propertyIsEnumerable.call(e,t[o])&&(r[t[o]]=e[t[o]]);return r};const sn={info:i.createElement(Ut,null),success:i.createElement(qt,null),error:i.createElement(Tt,null),warning:i.createElement(Ht,null),loading:i.createElement(Ct,null)},nt=e=>{let{prefixCls:n,type:r,icon:t,children:o}=e;return i.createElement("div",{className:B(`${n}-custom-content`,`${n}-${r}`)},t||sn[r],i.createElement("span",null,o))},ln=e=>{const{prefixCls:n,className:r,type:t,icon:o,content:a}=e,m=an(e,["prefixCls","className","type","icon","content"]),{getPrefixCls:b}=i.useContext(Z),l=n||b("message"),u=fe(l),[p,v,y]=tt(l,u);return p(i.createElement(Je,Object.assign({},m,{prefixCls:l,className:B(r,v,`${l}-notice-pure-panel`,y,u),eventKey:"pure",duration:null,content:i.createElement(nt,{prefixCls:l,type:t,icon:o},a)})))},cn=ln;function dn(e,n){return{motionName:n??`${e}-move-up`}}function Oe(e){let n;const r=new Promise(o=>{n=e(()=>{o(!0)})}),t=()=>{n==null||n()};return t.then=(o,a)=>r.then(o,a),t.promise=r,t}var un=globalThis&&globalThis.__rest||function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,t=Object.getOwnPropertySymbols(e);o<t.length;o++)n.indexOf(t[o])<0&&Object.prototype.propertyIsEnumerable.call(e,t[o])&&(r[t[o]]=e[t[o]]);return r};const mn=8,fn=3,pn=e=>{let{children:n,prefixCls:r}=e;const t=fe(r),[o,a,m]=tt(r,t);return o(i.createElement(Kt,{classNames:{list:B(a,m,t)}},n))},gn=(e,n)=>{let{prefixCls:r,key:t}=n;return i.createElement(pn,{prefixCls:r,key:t},e)},hn=i.forwardRef((e,n)=>{const{top:r,prefixCls:t,getContainer:o,maxCount:a,duration:m=fn,rtl:b,transitionName:l,onAllRemoved:u}=e,{getPrefixCls:p,getPopupContainer:v,message:y,direction:S}=i.useContext(Z),g=t||p("message"),O=()=>({left:"50%",transform:"translateX(-50%)",top:r??mn}),x=()=>B({[`${g}-rtl`]:b??S==="rtl"}),k=()=>dn(g,l),j=i.createElement("span",{className:`${g}-close-x`},i.createElement(Lt,{className:`${g}-close-icon`})),[E,N]=nn({prefixCls:g,style:O,className:x,motion:k,closable:!1,closeIcon:j,duration:m,getContainer:()=>(o==null?void 0:o())||(v==null?void 0:v())||document.body,maxCount:a,onAllRemoved:u,renderNotifications:gn});return i.useImperativeHandle(n,()=>Object.assign(Object.assign({},E),{prefixCls:g,message:y})),N});let De=0;function ot(e){const n=i.useRef(null);return yt(),[i.useMemo(()=>{const t=l=>{var u;(u=n.current)===null||u===void 0||u.close(l)},o=l=>{if(!n.current){const C=()=>{};return C.then=()=>{},C}const{open:u,prefixCls:p,message:v}=n.current,y=`${p}-notice`,{content:S,icon:g,type:O,key:x,className:k,style:j,onClose:E}=l,N=un(l,["content","icon","type","key","className","style","onClose"]);let w=x;return w==null&&(De+=1,w=`antd-message-${De}`),Oe(C=>(u(Object.assign(Object.assign({},N),{key:w,content:i.createElement(nt,{prefixCls:p,type:O,icon:g},S),placement:"top",className:B(O&&`${y}-${O}`,k,v==null?void 0:v.className),style:Object.assign(Object.assign({},v==null?void 0:v.style),j),onClose:()=>{E==null||E(),C()}})),()=>{t(w)}))},m={open:o,destroy:l=>{var u;l!==void 0?t(l):(u=n.current)===null||u===void 0||u.destroy()}};return["info","success","warning","error","loading"].forEach(l=>{const u=(p,v,y)=>{let S;p&&typeof p=="object"&&"content"in p?S=p:S={content:p};let g,O;typeof v=="function"?O=v:(g=v,O=y);const x=Object.assign(Object.assign({onClose:O,duration:g},S),{type:l});return o(x)};m[l]=u}),m},[]),i.createElement(hn,Object.assign({key:"message-holder"},e,{ref:n}))]}function vn(e){return ot(e)}const xn=M.createContext({}),rt=i.createContext(null),bn=rt.Provider,it=i.createContext(null),Cn=it.Provider;var yn=["prefixCls","className","style","checked","disabled","defaultChecked","type","title","onChange"],Sn=i.forwardRef(function(e,n){var r,t=e.prefixCls,o=t===void 0?"rc-checkbox":t,a=e.className,m=e.style,b=e.checked,l=e.disabled,u=e.defaultChecked,p=u===void 0?!1:u,v=e.type,y=v===void 0?"checkbox":v,S=e.title,g=e.onChange,O=Ee(e,yn),x=i.useRef(null),k=Ze(p,{value:b}),j=D(k,2),E=j[0],N=j[1];i.useImperativeHandle(n,function(){return{focus:function(){var c;(c=x.current)===null||c===void 0||c.focus()},blur:function(){var c;(c=x.current)===null||c===void 0||c.blur()},input:x.current}});var w=B(o,a,(r={},ne(r,"".concat(o,"-checked"),E),ne(r,"".concat(o,"-disabled"),l),r)),C=function(c){l||("checked"in e||N(c.target.checked),g==null||g({target:U(U({},e),{},{type:y,checked:c.target.checked}),stopPropagation:function(){c.stopPropagation()},preventDefault:function(){c.preventDefault()},nativeEvent:c.nativeEvent}))};return i.createElement("span",{className:w,title:S,style:m},i.createElement("input",de({},O,{className:"".concat(o,"-input"),ref:x,onChange:C,disabled:l,checked:!!E,type:y})),i.createElement("span",{className:"".concat(o,"-inner")}))});const wn=e=>{const{componentCls:n,antCls:r}=e,t=`${n}-group`;return{[t]:Object.assign(Object.assign({},ue(e)),{display:"inline-block",fontSize:0,[`&${t}-rtl`]:{direction:"rtl"},[`${r}-badge ${r}-badge-count`]:{zIndex:1},[`> ${r}-badge:not(:first-child) > ${r}-button-wrapper`]:{borderInlineStart:"none"}})}},$n=e=>{const{componentCls:n,wrapperMarginInlineEnd:r,colorPrimary:t,radioSize:o,motionDurationSlow:a,motionDurationMid:m,motionEaseInOutCirc:b,colorBgContainer:l,colorBorder:u,lineWidth:p,colorBgContainerDisabled:v,colorTextDisabled:y,paddingXS:S,dotColorDisabled:g,lineType:O,radioColor:x,radioBgColor:k,calc:j}=e,E=`${n}-inner`,N=4,w=j(o).sub(j(N).mul(2)),C=j(1).mul(o).equal();return{[`${n}-wrapper`]:Object.assign(Object.assign({},ue(e)),{display:"inline-flex",alignItems:"baseline",marginInlineStart:0,marginInlineEnd:r,cursor:"pointer",[`&${n}-wrapper-rtl`]:{direction:"rtl"},"&-disabled":{cursor:"not-allowed",color:e.colorTextDisabled},"&::after":{display:"inline-block",width:0,overflow:"hidden",content:'"\\a0"'},[`${n}-checked::after`]:{position:"absolute",insetBlockStart:0,insetInlineStart:0,width:"100%",height:"100%",border:`${H(p)} ${O} ${t}`,borderRadius:"50%",visibility:"hidden",content:'""'},[n]:Object.assign(Object.assign({},ue(e)),{position:"relative",display:"inline-block",outline:"none",cursor:"pointer",alignSelf:"center",borderRadius:"50%"}),[`${n}-wrapper:hover &,
        &:hover ${E}`]:{borderColor:t},[`${n}-input:focus-visible + ${E}`]:Object.assign({},Ve(e)),[`${n}:hover::after, ${n}-wrapper:hover &::after`]:{visibility:"visible"},[`${n}-inner`]:{"&::after":{boxSizing:"border-box",position:"absolute",insetBlockStart:"50%",insetInlineStart:"50%",display:"block",width:C,height:C,marginBlockStart:j(1).mul(o).div(-2).equal(),marginInlineStart:j(1).mul(o).div(-2).equal(),backgroundColor:x,borderBlockStart:0,borderInlineStart:0,borderRadius:C,transform:"scale(0)",opacity:0,transition:`all ${a} ${b}`,content:'""'},boxSizing:"border-box",position:"relative",insetBlockStart:0,insetInlineStart:0,display:"block",width:C,height:C,backgroundColor:l,borderColor:u,borderStyle:"solid",borderWidth:p,borderRadius:"50%",transition:`all ${m}`},[`${n}-input`]:{position:"absolute",inset:0,zIndex:1,cursor:"pointer",opacity:0},[`${n}-checked`]:{[E]:{borderColor:t,backgroundColor:k,"&::after":{transform:`scale(${e.calc(e.dotSize).div(o).equal()})`,opacity:1,transition:`all ${a} ${b}`}}},[`${n}-disabled`]:{cursor:"not-allowed",[E]:{backgroundColor:v,borderColor:u,cursor:"not-allowed","&::after":{backgroundColor:g}},[`${n}-input`]:{cursor:"not-allowed"},[`${n}-disabled + span`]:{color:y,cursor:"not-allowed"},[`&${n}-checked`]:{[E]:{"&::after":{transform:`scale(${j(w).div(o).equal({unit:!1})})`}}}},[`span${n} + *`]:{paddingInlineStart:S,paddingInlineEnd:S}})}},kn=e=>{const{buttonColor:n,controlHeight:r,componentCls:t,lineWidth:o,lineType:a,colorBorder:m,motionDurationSlow:b,motionDurationMid:l,buttonPaddingInline:u,fontSize:p,buttonBg:v,fontSizeLG:y,controlHeightLG:S,controlHeightSM:g,paddingXS:O,borderRadius:x,borderRadiusSM:k,borderRadiusLG:j,buttonCheckedBg:E,buttonSolidCheckedColor:N,colorTextDisabled:w,colorBgContainerDisabled:C,buttonCheckedBgDisabled:$,buttonCheckedColorDisabled:c,colorPrimary:f,colorPrimaryHover:h,colorPrimaryActive:d,buttonSolidCheckedBg:A,buttonSolidCheckedHoverBg:T,buttonSolidCheckedActiveBg:R,calc:I}=e;return{[`${t}-button-wrapper`]:{position:"relative",display:"inline-block",height:r,margin:0,paddingInline:u,paddingBlock:0,color:n,fontSize:p,lineHeight:H(I(r).sub(I(o).mul(2)).equal()),background:v,border:`${H(o)} ${a} ${m}`,borderBlockStartWidth:I(o).add(.02).equal(),borderInlineStartWidth:0,borderInlineEndWidth:o,cursor:"pointer",transition:[`color ${l}`,`background ${l}`,`box-shadow ${l}`].join(","),a:{color:n},[`> ${t}-button`]:{position:"absolute",insetBlockStart:0,insetInlineStart:0,zIndex:-1,width:"100%",height:"100%"},"&:not(:first-child)":{"&::before":{position:"absolute",insetBlockStart:I(o).mul(-1).equal(),insetInlineStart:I(o).mul(-1).equal(),display:"block",boxSizing:"content-box",width:1,height:"100%",paddingBlock:o,paddingInline:0,backgroundColor:m,transition:`background-color ${b}`,content:'""'}},"&:first-child":{borderInlineStart:`${H(o)} ${a} ${m}`,borderStartStartRadius:x,borderEndStartRadius:x},"&:last-child":{borderStartEndRadius:x,borderEndEndRadius:x},"&:first-child:last-child":{borderRadius:x},[`${t}-group-large &`]:{height:S,fontSize:y,lineHeight:H(I(S).sub(I(o).mul(2)).equal()),"&:first-child":{borderStartStartRadius:j,borderEndStartRadius:j},"&:last-child":{borderStartEndRadius:j,borderEndEndRadius:j}},[`${t}-group-small &`]:{height:g,paddingInline:I(O).sub(o).equal(),paddingBlock:0,lineHeight:H(I(g).sub(I(o).mul(2)).equal()),"&:first-child":{borderStartStartRadius:k,borderEndStartRadius:k},"&:last-child":{borderStartEndRadius:k,borderEndEndRadius:k}},"&:hover":{position:"relative",color:f},"&:has(:focus-visible)":Object.assign({},Ve(e)),[`${t}-inner, input[type='checkbox'], input[type='radio']`]:{width:0,height:0,opacity:0,pointerEvents:"none"},[`&-checked:not(${t}-button-wrapper-disabled)`]:{zIndex:1,color:f,background:E,borderColor:f,"&::before":{backgroundColor:f},"&:first-child":{borderColor:f},"&:hover":{color:h,borderColor:h,"&::before":{backgroundColor:h}},"&:active":{color:d,borderColor:d,"&::before":{backgroundColor:d}}},[`${t}-group-solid &-checked:not(${t}-button-wrapper-disabled)`]:{color:N,background:A,borderColor:A,"&:hover":{color:N,background:T,borderColor:T},"&:active":{color:N,background:R,borderColor:R}},"&-disabled":{color:w,backgroundColor:C,borderColor:m,cursor:"not-allowed","&:first-child, &:hover":{color:w,backgroundColor:C,borderColor:m}},[`&-disabled${t}-button-wrapper-checked`]:{color:c,backgroundColor:$,borderColor:m,boxShadow:"none"}}}},jn=e=>{const{wireframe:n,padding:r,marginXS:t,lineWidth:o,fontSizeLG:a,colorText:m,colorBgContainer:b,colorTextDisabled:l,controlItemBgActiveDisabled:u,colorTextLightSolid:p,colorPrimary:v,colorPrimaryHover:y,colorPrimaryActive:S,colorWhite:g}=e,O=4,x=a,k=n?x-O*2:x-(O+o)*2;return{radioSize:x,dotSize:k,dotColorDisabled:l,buttonSolidCheckedColor:p,buttonSolidCheckedBg:v,buttonSolidCheckedHoverBg:y,buttonSolidCheckedActiveBg:S,buttonBg:b,buttonCheckedBg:b,buttonColor:m,buttonCheckedBgDisabled:u,buttonCheckedColorDisabled:l,buttonPaddingInline:r-o,wrapperMarginInlineEnd:t,radioColor:n?v:g,radioBgColor:n?b:v}},at=Ge("Radio",e=>{const{controlOutline:n,controlOutlineWidth:r}=e,t=`0 0 0 ${H(r)} ${n}`,a=Ue(e,{radioFocusShadow:t,radioButtonFocusShadow:t});return[wn(a),$n(a),kn(a)]},jn,{unitless:{radioSize:!0,dotSize:!0}});var En=globalThis&&globalThis.__rest||function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,t=Object.getOwnPropertySymbols(e);o<t.length;o++)n.indexOf(t[o])<0&&Object.prototype.propertyIsEnumerable.call(e,t[o])&&(r[t[o]]=e[t[o]]);return r};const On=(e,n)=>{var r,t;const o=i.useContext(rt),a=i.useContext(it),{getPrefixCls:m,direction:b,radio:l}=i.useContext(Z),u=i.useRef(null),p=St(n,u),{isFormItemInput:v}=i.useContext(Mt),y=R=>{var I,L;(I=e.onChange)===null||I===void 0||I.call(e,R),(L=o==null?void 0:o.onChange)===null||L===void 0||L.call(o,R)},{prefixCls:S,className:g,rootClassName:O,children:x,style:k,title:j}=e,E=En(e,["prefixCls","className","rootClassName","children","style","title"]),N=m("radio",S),w=((o==null?void 0:o.optionType)||a)==="button",C=w?`${N}-button`:N,$=fe(N),[c,f,h]=at(N,$),d=Object.assign({},E),A=i.useContext(wt);o&&(d.name=o.name,d.onChange=y,d.checked=e.value===o.value,d.disabled=(r=d.disabled)!==null&&r!==void 0?r:o.disabled),d.disabled=(t=d.disabled)!==null&&t!==void 0?t:A;const T=B(`${C}-wrapper`,{[`${C}-wrapper-checked`]:d.checked,[`${C}-wrapper-disabled`]:d.disabled,[`${C}-wrapper-rtl`]:b==="rtl",[`${C}-wrapper-in-form-item`]:v},l==null?void 0:l.className,g,O,f,h,$);return c(i.createElement(Bt,{component:"Radio",disabled:d.disabled},i.createElement("label",{className:T,style:Object.assign(Object.assign({},l==null?void 0:l.style),k),onMouseEnter:e.onMouseEnter,onMouseLeave:e.onMouseLeave,title:j},i.createElement(Sn,Object.assign({},d,{className:B(d.className,!w&&_t),type:"radio",prefixCls:C,ref:p})),x!==void 0?i.createElement("span",null,x):null)))},Nn=i.forwardRef(On),me=Nn,Rn=i.forwardRef((e,n)=>{const{getPrefixCls:r,direction:t}=i.useContext(Z),[o,a]=Ze(e.defaultValue,{value:e.value}),m=R=>{const I=o,L=R.target.value;"value"in e||a(L);const{onChange:F}=e;F&&L!==I&&F(R)},{prefixCls:b,className:l,rootClassName:u,options:p,buttonStyle:v="outline",disabled:y,children:S,size:g,style:O,id:x,onMouseEnter:k,onMouseLeave:j,onFocus:E,onBlur:N}=e,w=r("radio",b),C=`${w}-group`,$=fe(w),[c,f,h]=at(w,$);let d=S;p&&p.length>0&&(d=p.map(R=>typeof R=="string"||typeof R=="number"?i.createElement(me,{key:R.toString(),prefixCls:w,disabled:y,value:R,checked:o===R},R):i.createElement(me,{key:`radio-group-value-options-${R.value}`,prefixCls:w,disabled:R.disabled||y,value:R.value,checked:o===R.value,title:R.title,style:R.style,id:R.id,required:R.required},R.label)));const A=zt(g),T=B(C,`${C}-${v}`,{[`${C}-${A}`]:A,[`${C}-rtl`]:t==="rtl"},l,u,f,h,$);return c(i.createElement("div",Object.assign({},Wt(e,{aria:!0,data:!0}),{className:T,style:O,onMouseEnter:k,onMouseLeave:j,onFocus:E,onBlur:N,id:x,ref:n}),i.createElement(bn,{value:{onChange:m,value:o,disabled:e.disabled,name:e.name,optionType:e.optionType}},d)))}),Pn=i.memo(Rn);var In=globalThis&&globalThis.__rest||function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,t=Object.getOwnPropertySymbols(e);o<t.length;o++)n.indexOf(t[o])<0&&Object.prototype.propertyIsEnumerable.call(e,t[o])&&(r[t[o]]=e[t[o]]);return r};const An=(e,n)=>{const{getPrefixCls:r}=i.useContext(Z),{prefixCls:t}=e,o=In(e,["prefixCls"]),a=r("radio",t);return i.createElement(Cn,{value:"button"},i.createElement(me,Object.assign({prefixCls:a},o,{type:"radio",ref:n})))},Fn=i.forwardRef(An),pe=me;pe.Button=Fn;pe.Group=Pn;pe.__ANT_RADIO=!0;const Tn=pe;let _=null,G=e=>e(),oe=[],re={};function Le(){const{getContainer:e,duration:n,rtl:r,maxCount:t,top:o}=re,a=(e==null?void 0:e())||document.body;return{getContainer:()=>a,duration:n,rtl:r,maxCount:t,top:o}}const Mn=M.forwardRef((e,n)=>{const{messageConfig:r,sync:t}=e,{getPrefixCls:o}=i.useContext(Z),a=re.prefixCls||o("message"),m=i.useContext(xn),[b,l]=ot(Object.assign(Object.assign(Object.assign({},r),{prefixCls:a}),m.message));return M.useImperativeHandle(n,()=>{const u=Object.assign({},b);return Object.keys(u).forEach(p=>{u[p]=function(){return t(),b[p].apply(b,arguments)}}),{instance:u,sync:t}}),l}),Bn=M.forwardRef((e,n)=>{const[r,t]=M.useState(Le),o=()=>{t(Le)};M.useEffect(o,[]);const a=kt(),m=a.getRootPrefixCls(),b=a.getIconPrefixCls(),l=a.getTheme(),u=M.createElement(Mn,{ref:n,sync:o,messageConfig:r});return M.createElement($t,{prefixCls:m,iconPrefixCls:b,theme:l},a.holderRender?a.holderRender(u):u)});function ge(){if(!_){const e=document.createDocumentFragment(),n={fragment:e};_=n,G(()=>{Dt(M.createElement(Bn,{ref:r=>{const{instance:t,sync:o}=r||{};Promise.resolve().then(()=>{!n.instance&&t&&(n.instance=t,n.sync=o,ge())})}}),e)});return}_.instance&&(oe.forEach(e=>{const{type:n,skipped:r}=e;if(!r)switch(n){case"open":{G(()=>{const t=_.instance.open(Object.assign(Object.assign({},re),e.config));t==null||t.then(e.resolve),e.setCloseFn(t)});break}case"destroy":G(()=>{_==null||_.instance.destroy(e.key)});break;default:G(()=>{var t;const o=(t=_.instance)[n].apply(t,Q(e.args));o==null||o.then(e.resolve),e.setCloseFn(o)})}}),oe=[])}function _n(e){re=Object.assign(Object.assign({},re),e),G(()=>{var n;(n=_==null?void 0:_.sync)===null||n===void 0||n.call(_)})}function zn(e){const n=Oe(r=>{let t;const o={type:"open",config:e,resolve:r,setCloseFn:a=>{t=a}};return oe.push(o),()=>{t?G(()=>{t()}):o.skipped=!0}});return ge(),n}function Dn(e,n){const r=Oe(t=>{let o;const a={type:e,args:n,resolve:t,setCloseFn:m=>{o=m}};return oe.push(a),()=>{o?G(()=>{o()}):a.skipped=!0}});return ge(),r}function Ln(e){oe.push({type:"destroy",key:e}),ge()}const Wn=["success","info","warning","error","loading"],qn={open:zn,destroy:Ln,config:_n,useMessage:vn,_InternalPanelDoNotUseOrYouWillBeFired:cn},st=qn;Wn.forEach(e=>{st[e]=function(){for(var n=arguments.length,r=new Array(n),t=0;t<n;t++)r[t]=arguments[t];return Dn(e,r)}});const We=st,Hn=Pt().shape({name:ke().required("Required"),email:ke().matches(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,"Invalid email").required("Required"),height:te().min(150,"Minimum height is 150").required("Required"),currentWeight:te().min(35,"Minimum weight is 35").required("Required"),desiredWeight:te().min(35,"Minimum weight is 35").required("Required"),birthday:It().required("Required").max(new Date,"Birthday must be in the past"),blood:te().required("Required").oneOf([1,2,3,4],"Invalid blood type"),sex:ke().required("Required").oneOf(["male","female"],"Invalid sex"),levelActivity:te().required("Required").oneOf([1,2,3,4,5],"Invalid activity level")}),Gn=P.button`
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
`,Un=P(Qe)`
  @media screen and (max-width: 375px) {
  }
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1440px) {
  }
`,qe=P.div`
  display: inline-flex;
  align-items: flex-end;
  margin-top: 20px;
  gap: 14px;
  
  @media screen and (max-width: 375px) {
  }
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1440px) {
  }
`;P.div`
  width: calc(50% - 7px);
  
`;P.div`
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

  @media screen and (min-width: 375px){
    width: 100%;
    gap: 14px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  @media screen and (min-width:768px){
    flex-direction:row;
  }

  @media screen and (min-width:1440px){
    align-items: flex-start;
    gap:14px;
    margin-bottom: 14px;
    margin-right:auto;
  
  }
`;P.div`
  @media screen and (min-width: 320px) and (max-width: 1439px) {
    width: 100%;
  }
`;const V=P.label`
  margin-bottom: 4px;
  font-weight: 400;
  font-size: 12px;
  color: ${({theme:e})=>e.colors.textWhite50};
  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`;P.input`
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
`;P(Y)`
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
`;P.div`
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
`;P.div`
  margin-top: 40px;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
`;const K=P(Tn)`

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
`,X=[{label:"Blood",name:"blood",options:[1,2,3,4]},{name:"sex",options:["male","female"]},{name:"levelActivity",options:["Sedentary lifestyle (little or no physical activity)","Light activity (light exercises/sports 1-3 days per week)","Moderately active (moderate exercises/sports 3-5 days per week)","Very active (intense exercises/sports 6-7 days per week)","Extremely active (very strenuous exercises/sports and physical work)"]}],Vn=()=>{const e=Ke(),n=Xe(Ye),r=o=>{console.log(o),We.success("Class"),e(jt(o))},t=At({initialValues:{name:n.name||"",email:n.email||"",height:n.height||"",currentWeight:n.currentWeight||"0",desiredWeight:n.desiredWeight||"0",birthday:n.birthday||"00/00/0000",blood:n.blood||"",sex:n.sex||"",levelActivity:n.levelActivity||""},validationSchema:Hn,onSubmit:r});return s.jsxs(Un,{onFinishFailed:()=>We.error("Bly"),onFinish:t.handleSubmit,children:[s.jsxs(Qe.Item,{help:t.errors.name,validateStatus:t.errors.name?"error":"",hasFeedback:!0,children:[s.jsx(V,{htmlFor:"name",children:"Name"}),s.jsx(Y,{type:"text",name:"name",id:"name",placeholder:"Your name",value:t.values.name,onChange:t.handleChange})]}),s.jsxs("div",{children:[s.jsx(V,{htmlFor:"email",children:"Email"}),s.jsx(Y,{type:"email",name:"email",id:"email",value:t.values.email,onChange:t.handleChange,style:{color:"rgba(239, 237, 232, 0.60)"},readOnly:!0,disabled:!0})]}),s.jsxs(qe,{children:[s.jsxs("div",{children:[s.jsx(V,{htmlFor:"height",children:"Height"}),s.jsx(Y,{type:"number",name:"height",id:"height",value:t.values.height,onChange:t.handleChange})]}),s.jsxs("div",{children:[s.jsx(V,{htmlFor:"currentWeight",children:"Current Weight"}),s.jsx(Y,{type:"number",name:"currentWeight",id:"currentWeight",value:t.values.currentWeight,onChange:t.handleChange})]})]}),s.jsxs(qe,{children:[s.jsxs("div",{children:[s.jsx(V,{htmlFor:"desiredWeight",children:"Desired Weight"}),s.jsx(Y,{type:"number",name:"desiredWeight",id:"desiredWeight",value:t.values.desiredWeight,onChange:t.handleChange})]}),s.jsxs("div",{children:[s.jsx(V,{htmlFor:"birthday",children:"Date of birth"}),s.jsx(Ot,{id:"birthday",value:t.values.birthday,onChange:o=>t.setFieldValue("birthday",o)})]})]}),s.jsx(K.Group,{onChange:t.handleChange,value:t.values.blood,name:X[0].name,children:X[0].options.map((o,a)=>s.jsx(K,{value:o,children:o},a))}),s.jsx(K.Group,{onChange:t.handleChange,value:t.values.sex,name:X[1].name,children:X[1].options.map((o,a)=>s.jsx(K,{value:o,children:o},a))}),s.jsx(K.Group,{onChange:t.handleChange,value:t.values.levelActivity,name:X[2].name,children:X[2].options.map((o,a)=>s.jsx(K,{value:a+1,children:o},a))}),t.values.isSubmitSuccessful&&s.jsx("div",{style:{color:"green"},children:"Form submitted successfully!"}),t.values.submitError&&s.jsx("div",{style:{color:"red"},children:t.values.submitError}),s.jsx(Gn,{type:"submit",$type:"filled",children:"Save"})]})},Kn=P.div`
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
`,Xn=P.div`
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
`,Yn=P.img`
  border-radius: 100px;
  width: 100%;
  height: 100%;
`,Qn=P.div`
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
`,Zn=P.svg`
  width: 24px;
  height: 24px;
  @media screen and (min-width: 768px) {
    width: 32px;
    height: 32px;
  }
`,Jn=P.svg`
  width: 61px;
  height: 62px;
  fill: ${({theme:e})=>e.colors.formBorder};
  @media screen and (min-width: 768px) {
    width: 102px;
    height: 102px;
  }
`,eo=P.label`
  cursor: pointer;
`,to=P.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  text-align: center;
  gap: 4px;

  @media screen and (max-width: 767px) {
    margin-top: -8px;
  }
`,no=P.p`
  font-size: 18px;
  line-height: 1.1;
  color: ${({theme:e})=>e.colors.white};

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 1.16;
  }
`,oo=P.p`
  color: rgba(239, 237, 232, 0.5);
  font-size: 14px;
  line-height: 1.33;
`,ro=P.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 14px;
  /* margin-top: 40px;
  margin-bottom: 40px; */

  font-size: 12px;
  line-height: 1.33;
  color: rgba(239, 237, 232, 0.8);
`,He=P.li`
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
`,io=P.div`
  margin-left: auto;
`,ao=()=>{const e=Ke(),{name:n,avatarURL:r,bmr:t,dpa:o}=Xe(Ye),a=s.jsx(Jn,{children:s.jsx("use",{href:`${Te}#icon-user`})}),b=r?s.jsx(Yn,{src:r,alt:"Avatar"}):a,l=u=>{const p=u.target.files[0];p&&e(Et({avatar:p}))};return s.jsxs(Kn,{children:[s.jsxs(Xn,{children:[b,s.jsxs(Qn,{children:[s.jsx(eo,{htmlFor:"fileInput",children:s.jsx(Zn,{children:s.jsx("use",{href:`${Te}#icon-add-avatar`,"aria-label":"Upload Avatar"})})}),s.jsx("input",{type:"file",accept:"image/*, .jpg, .jpeg, .png",id:"fileInput",name:"avatar",style:{display:"none"},onChange:l})]})]}),s.jsxs(to,{children:[s.jsx(no,{children:n}),s.jsx(oo,{children:"User"})]}),s.jsxs(ro,{children:[s.jsxs(He,{children:[s.jsxs(Ae,{children:[s.jsx(je,{icon:"icon-food",size:"20",color:$e.colors.secondary}),s.jsx("p",{children:"Daily calorie intake"})]}),s.jsx(Fe,{children:t})]}),s.jsxs(He,{children:[s.jsxs(Ae,{children:[s.jsx(je,{icon:"icon-dumbbell",size:"20",color:$e.colors.secondary}),s.jsx("p",{children:"Daily physical activity"})]}),s.jsxs(Fe,{children:[o," min"]})]})]}),s.jsxs(Nt,{children:[s.jsx("div",{children:s.jsx(je,{icon:"icon-exclamation-mark",size:"16",stroke:$e.colors.white})}),s.jsx("p",{children:"We understand that each individual is unique, so the entire approach to diet is relative and tailored to your unique body and goals."})]}),s.jsx(io,{children:s.jsx(Vt,{})})]})},so=()=>s.jsxs(s.Fragment,{children:[s.jsx(Rt,{title:"Profile Settings"}),s.jsx(ao,{}),s.jsx(Vn,{})]}),Co=so;export{Co as default};
