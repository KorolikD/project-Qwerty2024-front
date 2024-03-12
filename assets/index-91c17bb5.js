import{r as a,A as xt,_ as oe,o as B,p as L,q as re,R as F,v as bt,C as Ct,w as Re,x as K,y as Z,z as yt,B as qe,D as Ke,K as Ae,E as me,F as J,G as St,H as Et,I as G,J as Ve,M as Nt,O as wt,P as $t,Q as Ot,u as j,a as Qe,i as Ye,s as Xe,j as s,S as Rt,t as we,T as It}from"./index-f4f0eb10.js";import{e as kt,p as Pt,C as jt,S as _e,c as Me,A as At,T as _t}from"./DayDashboard.styled-78bd0093.js";import{C as Mt,E as Tt,c as Ft,a as $e,b as ne,d as Lt,F as Ze,A as X,u as Ut}from"./index.esm-6fb89713.js";import{C as Dt,u as pe,a as Bt,b as Je,F as zt,W as Wt,T as Ht,c as Gt,r as qt}from"./index-046384ff.js";import{s as Te}from"./sprite-34ae3165.js";import{L as Kt}from"./LogOutBtn-4e3102d6.js";import{S as Oe}from"./SvgCustom-92975104.js";var Vt={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 010-96 48.01 48.01 0 010 96z"}}]},name:"info-circle",theme:"filled"};const Qt=Vt;var Yt=function(t,r){return a.createElement(xt,oe({},t,{ref:r,icon:Qt}))};const Xt=a.forwardRef(Yt);var f={MAC_ENTER:3,BACKSPACE:8,TAB:9,NUM_CENTER:12,ENTER:13,SHIFT:16,CTRL:17,ALT:18,PAUSE:19,CAPS_LOCK:20,ESC:27,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40,PRINT_SCREEN:44,INSERT:45,DELETE:46,ZERO:48,ONE:49,TWO:50,THREE:51,FOUR:52,FIVE:53,SIX:54,SEVEN:55,EIGHT:56,NINE:57,QUESTION_MARK:63,A:65,B:66,C:67,D:68,E:69,F:70,G:71,H:72,I:73,J:74,K:75,L:76,M:77,N:78,O:79,P:80,Q:81,R:82,S:83,T:84,U:85,V:86,W:87,X:88,Y:89,Z:90,META:91,WIN_KEY_RIGHT:92,CONTEXT_MENU:93,NUM_ZERO:96,NUM_ONE:97,NUM_TWO:98,NUM_THREE:99,NUM_FOUR:100,NUM_FIVE:101,NUM_SIX:102,NUM_SEVEN:103,NUM_EIGHT:104,NUM_NINE:105,NUM_MULTIPLY:106,NUM_PLUS:107,NUM_MINUS:109,NUM_PERIOD:110,NUM_DIVISION:111,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,NUMLOCK:144,SEMICOLON:186,DASH:189,EQUALS:187,COMMA:188,PERIOD:190,SLASH:191,APOSTROPHE:192,SINGLE_QUOTE:222,OPEN_SQUARE_BRACKET:219,BACKSLASH:220,CLOSE_SQUARE_BRACKET:221,WIN_KEY:224,MAC_FF_META:224,WIN_IME:229,isTextModifyingKeyEvent:function(t){var r=t.keyCode;if(t.altKey&&!t.ctrlKey||t.metaKey||r>=f.F1&&r<=f.F12)return!1;switch(r){case f.ALT:case f.CAPS_LOCK:case f.CONTEXT_MENU:case f.CTRL:case f.DOWN:case f.END:case f.ESC:case f.HOME:case f.INSERT:case f.LEFT:case f.MAC_FF_META:case f.META:case f.NUMLOCK:case f.NUM_CENTER:case f.PAGE_DOWN:case f.PAGE_UP:case f.PAUSE:case f.PRINT_SCREEN:case f.RIGHT:case f.SHIFT:case f.UP:case f.WIN_KEY:case f.WIN_KEY_RIGHT:return!1;default:return!0}},isCharacterKey:function(t){if(t>=f.ZERO&&t<=f.NINE||t>=f.NUM_ZERO&&t<=f.NUM_MULTIPLY||t>=f.A&&t<=f.Z||window.navigator.userAgent.indexOf("WebKit")!==-1&&t===0)return!0;switch(t){case f.SPACE:case f.QUESTION_MARK:case f.NUM_PLUS:case f.NUM_MINUS:case f.NUM_PERIOD:case f.NUM_DIVISION:case f.SEMICOLON:case f.DASH:case f.EQUALS:case f.COMMA:case f.PERIOD:case f.SLASH:case f.APOSTROPHE:case f.SINGLE_QUOTE:case f.OPEN_SQUARE_BRACKET:case f.BACKSLASH:case f.CLOSE_SQUARE_BRACKET:return!0;default:return!1}}},et=a.forwardRef(function(e,t){var r=e.prefixCls,n=e.style,o=e.className,i=e.duration,m=i===void 0?4.5:i,C=e.eventKey,l=e.content,u=e.closable,g=e.closeIcon,x=g===void 0?"x":g,S=e.props,E=e.onClick,h=e.onNoticeClose,I=e.times,b=e.hovering,$=a.useState(!1),O=B($,2),R=O[0],k=O[1],N=b||R,y=function(){h(C)},w=function(v){(v.key==="Enter"||v.code==="Enter"||v.keyCode===f.ENTER)&&y()};a.useEffect(function(){if(!N&&m>0){var p=setTimeout(function(){y()},m*1e3);return function(){clearTimeout(p)}}},[m,N,I]);var c="".concat(r,"-notice");return a.createElement("div",oe({},S,{ref:t,className:L(c,o,re({},"".concat(c,"-closable"),u)),style:n,onMouseEnter:function(v){var d;k(!0),S==null||(d=S.onMouseEnter)===null||d===void 0||d.call(S,v)},onMouseLeave:function(v){var d;k(!1),S==null||(d=S.onMouseLeave)===null||d===void 0||d.call(S,v)},onClick:E}),a.createElement("div",{className:"".concat(c,"-content")},l),u&&a.createElement("a",{tabIndex:0,className:"".concat(c,"-close"),onKeyDown:w,onClick:function(v){v.preventDefault(),v.stopPropagation(),y()}},x))}),tt=F.createContext({}),Zt=function(t){var r=t.children,n=t.classNames;return F.createElement(tt.Provider,{value:{classNames:n}},r)},Fe=8,Le=3,Ue=16,Jt=function(t){var r={offset:Fe,threshold:Le,gap:Ue};if(t&&bt(t)==="object"){var n,o,i;r.offset=(n=t.offset)!==null&&n!==void 0?n:Fe,r.threshold=(o=t.threshold)!==null&&o!==void 0?o:Le,r.gap=(i=t.gap)!==null&&i!==void 0?i:Ue}return[!!t,r]},en=["className","style","classNames","styles"],tn=function(t){var r,n=t.configList,o=t.placement,i=t.prefixCls,m=t.className,C=t.style,l=t.motion,u=t.onAllNoticeRemoved,g=t.onNoticeClose,x=t.stack,S=a.useContext(tt),E=S.classNames,h=a.useRef({}),I=a.useState(null),b=B(I,2),$=b[0],O=b[1],R=a.useState([]),k=B(R,2),N=k[0],y=k[1],w=n.map(function(M){return{config:M,key:String(M.key)}}),c=Jt(x),p=B(c,2),v=p[0],d=p[1],_=d.offset,T=d.threshold,P=d.gap,A=v&&(N.length>0||w.length<=T),z=typeof l=="function"?l(o):l;return a.useEffect(function(){v&&N.length>1&&y(function(M){return M.filter(function(W){return w.some(function(se){var ve=se.key;return W===ve})})})},[N,w,v]),a.useEffect(function(){var M;if(v&&h.current[(M=w[w.length-1])===null||M===void 0?void 0:M.key]){var W;O(h.current[(W=w[w.length-1])===null||W===void 0?void 0:W.key])}},[w,v]),F.createElement(Ct,oe({key:o,className:L(i,"".concat(i,"-").concat(o),E==null?void 0:E.list,m,(r={},re(r,"".concat(i,"-stack"),!!v),re(r,"".concat(i,"-stack-expanded"),A),r)),style:C,keys:w,motionAppear:!0},z,{onAllRemoved:function(){u(o)}}),function(M,W){var se=M.config,ve=M.className,ct=M.style,dt=M.index,ke=se,xe=ke.key,ut=ke.times,D=String(xe),ee=se,mt=ee.className,ft=ee.style,le=ee.classNames,ce=ee.styles,pt=Re(ee,en),be=w.findIndex(function(ue){return ue.key===D}),de={};if(v){var te=w.length-1-(be>-1?be:dt-1),Pe=o==="top"||o==="bottom"?"-50%":"0";if(te>0){var Ce,ye,Se;de.height=A?(Ce=h.current[D])===null||Ce===void 0?void 0:Ce.offsetHeight:$==null?void 0:$.offsetHeight;for(var je=0,Ee=0;Ee<te;Ee++){var Ne;je+=((Ne=h.current[w[w.length-1-Ee].key])===null||Ne===void 0?void 0:Ne.offsetHeight)+P}var gt=(A?je:te*_)*(o.startsWith("top")?1:-1),ht=!A&&$!==null&&$!==void 0&&$.offsetWidth&&(ye=h.current[D])!==null&&ye!==void 0&&ye.offsetWidth?(($==null?void 0:$.offsetWidth)-_*2*(te<3?te:3))/((Se=h.current[D])===null||Se===void 0?void 0:Se.offsetWidth):1;de.transform="translate3d(".concat(Pe,", ").concat(gt,"px, 0) scaleX(").concat(ht,")")}else de.transform="translate3d(".concat(Pe,", 0, 0)")}return F.createElement("div",{ref:W,className:L("".concat(i,"-notice-wrapper"),ve,le==null?void 0:le.wrapper),style:K(K(K({},ct),de),ce==null?void 0:ce.wrapper),onMouseEnter:function(){return y(function(H){return H.includes(D)?H:[].concat(Z(H),[D])})},onMouseLeave:function(){return y(function(H){return H.filter(function(vt){return vt!==D})})}},F.createElement(et,oe({},pt,{ref:function(H){be>-1?h.current[D]=H:delete h.current[D]},prefixCls:i,classNames:le,styles:ce,className:L(mt,E==null?void 0:E.notice),style:ft,times:ut,key:xe,eventKey:xe,onNoticeClose:g,hovering:v&&N.length>0})))})},nn=a.forwardRef(function(e,t){var r=e.prefixCls,n=r===void 0?"rc-notification":r,o=e.container,i=e.motion,m=e.maxCount,C=e.className,l=e.style,u=e.onAllRemoved,g=e.stack,x=e.renderNotifications,S=a.useState([]),E=B(S,2),h=E[0],I=E[1],b=function(p){var v,d=h.find(function(_){return _.key===p});d==null||(v=d.onClose)===null||v===void 0||v.call(d),I(function(_){return _.filter(function(T){return T.key!==p})})};a.useImperativeHandle(t,function(){return{open:function(p){I(function(v){var d=Z(v),_=d.findIndex(function(A){return A.key===p.key}),T=K({},p);if(_>=0){var P;T.times=(((P=v[_])===null||P===void 0?void 0:P.times)||0)+1,d[_]=T}else T.times=0,d.push(T);return m>0&&d.length>m&&(d=d.slice(-m)),d})},close:function(p){b(p)},destroy:function(){I([])}}});var $=a.useState({}),O=B($,2),R=O[0],k=O[1];a.useEffect(function(){var c={};h.forEach(function(p){var v=p.placement,d=v===void 0?"topRight":v;d&&(c[d]=c[d]||[],c[d].push(p))}),Object.keys(R).forEach(function(p){c[p]=c[p]||[]}),k(c)},[h]);var N=function(p){k(function(v){var d=K({},v),_=d[p]||[];return _.length||delete d[p],d})},y=a.useRef(!1);if(a.useEffect(function(){Object.keys(R).length>0?y.current=!0:y.current&&(u==null||u(),y.current=!1)},[R]),!o)return null;var w=Object.keys(R);return yt.createPortal(a.createElement(a.Fragment,null,w.map(function(c){var p=R[c],v=a.createElement(tn,{key:c,configList:p,placement:c,prefixCls:n,className:C==null?void 0:C(c),style:l==null?void 0:l(c),motion:i,onNoticeClose:b,onAllNoticeRemoved:N,stack:g});return x?x(v,{prefixCls:n,key:c}):v})),o)}),on=["getContainer","motion","prefixCls","maxCount","className","style","onAllRemoved","stack","renderNotifications"],rn=function(){return document.body},De=0;function an(){for(var e={},t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return r.forEach(function(o){o&&Object.keys(o).forEach(function(i){var m=o[i];m!==void 0&&(e[i]=m)})}),e}function sn(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=e.getContainer,r=t===void 0?rn:t,n=e.motion,o=e.prefixCls,i=e.maxCount,m=e.className,C=e.style,l=e.onAllRemoved,u=e.stack,g=e.renderNotifications,x=Re(e,on),S=a.useState(),E=B(S,2),h=E[0],I=E[1],b=a.useRef(),$=a.createElement(nn,{container:h,ref:b,prefixCls:o,motion:n,maxCount:i,className:m,style:C,onAllRemoved:l,stack:u,renderNotifications:g}),O=a.useState([]),R=B(O,2),k=R[0],N=R[1],y=a.useMemo(function(){return{open:function(c){var p=an(x,c);(p.key===null||p.key===void 0)&&(p.key="rc-notification-".concat(De),De+=1),N(function(v){return[].concat(Z(v),[{type:"open",config:p}])})},close:function(c){N(function(p){return[].concat(Z(p),[{type:"close",key:c}])})},destroy:function(){N(function(c){return[].concat(Z(c),[{type:"destroy"}])})}}},[]);return a.useEffect(function(){I(r())}),a.useEffect(function(){b.current&&k.length&&(k.forEach(function(w){switch(w.type){case"open":b.current.open(w.config);break;case"close":b.current.close(w.key);break;case"destroy":b.current.destroy();break}}),N(function(w){return w.filter(function(c){return!k.includes(c)})}))},[k]),[y,$]}const ln=e=>{const{componentCls:t,iconCls:r,boxShadow:n,colorText:o,colorSuccess:i,colorError:m,colorWarning:C,colorInfo:l,fontSizeLG:u,motionEaseInOutCirc:g,motionDurationSlow:x,marginXS:S,paddingXS:E,borderRadiusLG:h,zIndexPopup:I,contentPadding:b,contentBg:$}=e,O=`${t}-notice`,R=new Ae("MessageMoveIn",{"0%":{padding:0,transform:"translateY(-100%)",opacity:0},"100%":{padding:E,transform:"translateY(0)",opacity:1}}),k=new Ae("MessageMoveOut",{"0%":{maxHeight:e.height,padding:E,opacity:1},"100%":{maxHeight:0,padding:0,opacity:0}}),N={padding:E,textAlign:"center",[`${t}-custom-content > ${r}`]:{verticalAlign:"text-bottom",marginInlineEnd:S,fontSize:u},[`${O}-content`]:{display:"inline-block",padding:b,background:$,borderRadius:h,boxShadow:n,pointerEvents:"all"},[`${t}-success > ${r}`]:{color:i},[`${t}-error > ${r}`]:{color:m},[`${t}-warning > ${r}`]:{color:C},[`${t}-info > ${r},
      ${t}-loading > ${r}`]:{color:l}};return[{[t]:Object.assign(Object.assign({},me(e)),{color:o,position:"fixed",top:S,width:"100%",pointerEvents:"none",zIndex:I,[`${t}-move-up`]:{animationFillMode:"forwards"},[`
        ${t}-move-up-appear,
        ${t}-move-up-enter
      `]:{animationName:R,animationDuration:x,animationPlayState:"paused",animationTimingFunction:g},[`
        ${t}-move-up-appear${t}-move-up-appear-active,
        ${t}-move-up-enter${t}-move-up-enter-active
      `]:{animationPlayState:"running"},[`${t}-move-up-leave`]:{animationName:k,animationDuration:x,animationPlayState:"paused",animationTimingFunction:g},[`${t}-move-up-leave${t}-move-up-leave-active`]:{animationPlayState:"running"},"&-rtl":{direction:"rtl",span:{direction:"rtl"}}})},{[t]:{[`${O}-wrapper`]:Object.assign({},N)}},{[`${t}-notice-pure-panel`]:Object.assign(Object.assign({},N),{padding:0,textAlign:"start"})}]},cn=e=>({zIndexPopup:e.zIndexPopupBase+Dt+10,contentBg:e.colorBgElevated,contentPadding:`${(e.controlHeightLG-e.fontSize*e.lineHeight)/2}px ${e.paddingSM}px`}),nt=qe("Message",e=>{const t=Ke(e,{height:150});return[ln(t)]},cn);var dn=globalThis&&globalThis.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]]);return r};const un={info:a.createElement(Xt,null),success:a.createElement(Mt,null),error:a.createElement(Bt,null),warning:a.createElement(Tt,null),loading:a.createElement(St,null)},ot=e=>{let{prefixCls:t,type:r,icon:n,children:o}=e;return a.createElement("div",{className:L(`${t}-custom-content`,`${t}-${r}`)},n||un[r],a.createElement("span",null,o))},mn=e=>{const{prefixCls:t,className:r,type:n,icon:o,content:i}=e,m=dn(e,["prefixCls","className","type","icon","content"]),{getPrefixCls:C}=a.useContext(J),l=t||C("message"),u=pe(l),[g,x,S]=nt(l,u);return g(a.createElement(et,Object.assign({},m,{prefixCls:l,className:L(r,x,`${l}-notice-pure-panel`,S,u),eventKey:"pure",duration:null,content:a.createElement(ot,{prefixCls:l,type:n,icon:o},i)})))},fn=mn;function pn(e,t){return{motionName:t??`${e}-move-up`}}function Ie(e){let t;const r=new Promise(o=>{t=e(()=>{o(!0)})}),n=()=>{t==null||t()};return n.then=(o,i)=>r.then(o,i),n.promise=r,n}var gn=globalThis&&globalThis.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]]);return r};const hn=8,vn=3,xn=e=>{let{children:t,prefixCls:r}=e;const n=pe(r),[o,i,m]=nt(r,n);return o(a.createElement(Zt,{classNames:{list:L(i,m,n)}},t))},bn=(e,t)=>{let{prefixCls:r,key:n}=t;return a.createElement(xn,{prefixCls:r,key:n},e)},Cn=a.forwardRef((e,t)=>{const{top:r,prefixCls:n,getContainer:o,maxCount:i,duration:m=vn,rtl:C,transitionName:l,onAllRemoved:u}=e,{getPrefixCls:g,getPopupContainer:x,message:S,direction:E}=a.useContext(J),h=n||g("message"),I=()=>({left:"50%",transform:"translateX(-50%)",top:r??hn}),b=()=>L({[`${h}-rtl`]:C??E==="rtl"}),$=()=>pn(h,l),O=a.createElement("span",{className:`${h}-close-x`},a.createElement(kt,{className:`${h}-close-icon`})),[R,k]=sn({prefixCls:h,style:I,className:b,motion:$,closable:!1,closeIcon:O,duration:m,getContainer:()=>(o==null?void 0:o())||(x==null?void 0:x())||document.body,maxCount:i,onAllRemoved:u,renderNotifications:bn});return a.useImperativeHandle(t,()=>Object.assign(Object.assign({},R),{prefixCls:h,message:S})),k});let Be=0;function rt(e){const t=a.useRef(null);return Et(),[a.useMemo(()=>{const n=l=>{var u;(u=t.current)===null||u===void 0||u.close(l)},o=l=>{if(!t.current){const y=()=>{};return y.then=()=>{},y}const{open:u,prefixCls:g,message:x}=t.current,S=`${g}-notice`,{content:E,icon:h,type:I,key:b,className:$,style:O,onClose:R}=l,k=gn(l,["content","icon","type","key","className","style","onClose"]);let N=b;return N==null&&(Be+=1,N=`antd-message-${Be}`),Ie(y=>(u(Object.assign(Object.assign({},k),{key:N,content:a.createElement(ot,{prefixCls:g,type:I,icon:h},E),placement:"top",className:L(I&&`${S}-${I}`,$,x==null?void 0:x.className),style:Object.assign(Object.assign({},x==null?void 0:x.style),O),onClose:()=>{R==null||R(),y()}})),()=>{n(N)}))},m={open:o,destroy:l=>{var u;l!==void 0?n(l):(u=t.current)===null||u===void 0||u.destroy()}};return["info","success","warning","error","loading"].forEach(l=>{const u=(g,x,S)=>{let E;g&&typeof g=="object"&&"content"in g?E=g:E={content:g};let h,I;typeof x=="function"?I=x:(h=x,I=S);const b=Object.assign(Object.assign({onClose:I,duration:h},E),{type:l});return o(b)};m[l]=u}),m},[]),a.createElement(Cn,Object.assign({key:"message-holder"},e,{ref:t}))]}function yn(e){return rt(e)}const Sn=F.createContext({}),at=a.createContext(null),En=at.Provider,it=a.createContext(null),Nn=it.Provider;var wn=["prefixCls","className","style","checked","disabled","defaultChecked","type","title","onChange"],$n=a.forwardRef(function(e,t){var r,n=e.prefixCls,o=n===void 0?"rc-checkbox":n,i=e.className,m=e.style,C=e.checked,l=e.disabled,u=e.defaultChecked,g=u===void 0?!1:u,x=e.type,S=x===void 0?"checkbox":x,E=e.title,h=e.onChange,I=Re(e,wn),b=a.useRef(null),$=Je(g,{value:C}),O=B($,2),R=O[0],k=O[1];a.useImperativeHandle(t,function(){return{focus:function(){var c;(c=b.current)===null||c===void 0||c.focus()},blur:function(){var c;(c=b.current)===null||c===void 0||c.blur()},input:b.current}});var N=L(o,i,(r={},re(r,"".concat(o,"-checked"),R),re(r,"".concat(o,"-disabled"),l),r)),y=function(c){l||("checked"in e||k(c.target.checked),h==null||h({target:K(K({},e),{},{type:S,checked:c.target.checked}),stopPropagation:function(){c.stopPropagation()},preventDefault:function(){c.preventDefault()},nativeEvent:c.nativeEvent}))};return a.createElement("span",{className:N,title:E,style:m},a.createElement("input",oe({},I,{className:"".concat(o,"-input"),ref:b,onChange:y,disabled:l,checked:!!R,type:S})),a.createElement("span",{className:"".concat(o,"-inner")}))});const On=e=>{const{componentCls:t,antCls:r}=e,n=`${t}-group`;return{[n]:Object.assign(Object.assign({},me(e)),{display:"inline-block",fontSize:0,[`&${n}-rtl`]:{direction:"rtl"},[`${r}-badge ${r}-badge-count`]:{zIndex:1},[`> ${r}-badge:not(:first-child) > ${r}-button-wrapper`]:{borderInlineStart:"none"}})}},Rn=e=>{const{componentCls:t,wrapperMarginInlineEnd:r,colorPrimary:n,radioSize:o,motionDurationSlow:i,motionDurationMid:m,motionEaseInOutCirc:C,colorBgContainer:l,colorBorder:u,lineWidth:g,colorBgContainerDisabled:x,colorTextDisabled:S,paddingXS:E,dotColorDisabled:h,lineType:I,radioColor:b,radioBgColor:$,calc:O}=e,R=`${t}-inner`,k=4,N=O(o).sub(O(k).mul(2)),y=O(1).mul(o).equal();return{[`${t}-wrapper`]:Object.assign(Object.assign({},me(e)),{display:"inline-flex",alignItems:"baseline",marginInlineStart:0,marginInlineEnd:r,cursor:"pointer",[`&${t}-wrapper-rtl`]:{direction:"rtl"},"&-disabled":{cursor:"not-allowed",color:e.colorTextDisabled},"&::after":{display:"inline-block",width:0,overflow:"hidden",content:'"\\a0"'},[`${t}-checked::after`]:{position:"absolute",insetBlockStart:0,insetInlineStart:0,width:"100%",height:"100%",border:`${G(g)} ${I} ${n}`,borderRadius:"50%",visibility:"hidden",content:'""'},[t]:Object.assign(Object.assign({},me(e)),{position:"relative",display:"inline-block",outline:"none",cursor:"pointer",alignSelf:"center",borderRadius:"50%"}),[`${t}-wrapper:hover &,
        &:hover ${R}`]:{borderColor:n},[`${t}-input:focus-visible + ${R}`]:Object.assign({},Ve(e)),[`${t}:hover::after, ${t}-wrapper:hover &::after`]:{visibility:"visible"},[`${t}-inner`]:{"&::after":{boxSizing:"border-box",position:"absolute",insetBlockStart:"50%",insetInlineStart:"50%",display:"block",width:y,height:y,marginBlockStart:O(1).mul(o).div(-2).equal(),marginInlineStart:O(1).mul(o).div(-2).equal(),backgroundColor:b,borderBlockStart:0,borderInlineStart:0,borderRadius:y,transform:"scale(0)",opacity:0,transition:`all ${i} ${C}`,content:'""'},boxSizing:"border-box",position:"relative",insetBlockStart:0,insetInlineStart:0,display:"block",width:y,height:y,backgroundColor:l,borderColor:u,borderStyle:"solid",borderWidth:g,borderRadius:"50%",transition:`all ${m}`},[`${t}-input`]:{position:"absolute",inset:0,zIndex:1,cursor:"pointer",opacity:0},[`${t}-checked`]:{[R]:{borderColor:n,backgroundColor:$,"&::after":{transform:`scale(${e.calc(e.dotSize).div(o).equal()})`,opacity:1,transition:`all ${i} ${C}`}}},[`${t}-disabled`]:{cursor:"not-allowed",[R]:{backgroundColor:x,borderColor:u,cursor:"not-allowed","&::after":{backgroundColor:h}},[`${t}-input`]:{cursor:"not-allowed"},[`${t}-disabled + span`]:{color:S,cursor:"not-allowed"},[`&${t}-checked`]:{[R]:{"&::after":{transform:`scale(${O(N).div(o).equal({unit:!1})})`}}}},[`span${t} + *`]:{paddingInlineStart:E,paddingInlineEnd:E}})}},In=e=>{const{buttonColor:t,controlHeight:r,componentCls:n,lineWidth:o,lineType:i,colorBorder:m,motionDurationSlow:C,motionDurationMid:l,buttonPaddingInline:u,fontSize:g,buttonBg:x,fontSizeLG:S,controlHeightLG:E,controlHeightSM:h,paddingXS:I,borderRadius:b,borderRadiusSM:$,borderRadiusLG:O,buttonCheckedBg:R,buttonSolidCheckedColor:k,colorTextDisabled:N,colorBgContainerDisabled:y,buttonCheckedBgDisabled:w,buttonCheckedColorDisabled:c,colorPrimary:p,colorPrimaryHover:v,colorPrimaryActive:d,buttonSolidCheckedBg:_,buttonSolidCheckedHoverBg:T,buttonSolidCheckedActiveBg:P,calc:A}=e;return{[`${n}-button-wrapper`]:{position:"relative",display:"inline-block",height:r,margin:0,paddingInline:u,paddingBlock:0,color:t,fontSize:g,lineHeight:G(A(r).sub(A(o).mul(2)).equal()),background:x,border:`${G(o)} ${i} ${m}`,borderBlockStartWidth:A(o).add(.02).equal(),borderInlineStartWidth:0,borderInlineEndWidth:o,cursor:"pointer",transition:[`color ${l}`,`background ${l}`,`box-shadow ${l}`].join(","),a:{color:t},[`> ${n}-button`]:{position:"absolute",insetBlockStart:0,insetInlineStart:0,zIndex:-1,width:"100%",height:"100%"},"&:not(:first-child)":{"&::before":{position:"absolute",insetBlockStart:A(o).mul(-1).equal(),insetInlineStart:A(o).mul(-1).equal(),display:"block",boxSizing:"content-box",width:1,height:"100%",paddingBlock:o,paddingInline:0,backgroundColor:m,transition:`background-color ${C}`,content:'""'}},"&:first-child":{borderInlineStart:`${G(o)} ${i} ${m}`,borderStartStartRadius:b,borderEndStartRadius:b},"&:last-child":{borderStartEndRadius:b,borderEndEndRadius:b},"&:first-child:last-child":{borderRadius:b},[`${n}-group-large &`]:{height:E,fontSize:S,lineHeight:G(A(E).sub(A(o).mul(2)).equal()),"&:first-child":{borderStartStartRadius:O,borderEndStartRadius:O},"&:last-child":{borderStartEndRadius:O,borderEndEndRadius:O}},[`${n}-group-small &`]:{height:h,paddingInline:A(I).sub(o).equal(),paddingBlock:0,lineHeight:G(A(h).sub(A(o).mul(2)).equal()),"&:first-child":{borderStartStartRadius:$,borderEndStartRadius:$},"&:last-child":{borderStartEndRadius:$,borderEndEndRadius:$}},"&:hover":{position:"relative",color:p},"&:has(:focus-visible)":Object.assign({},Ve(e)),[`${n}-inner, input[type='checkbox'], input[type='radio']`]:{width:0,height:0,opacity:0,pointerEvents:"none"},[`&-checked:not(${n}-button-wrapper-disabled)`]:{zIndex:1,color:p,background:R,borderColor:p,"&::before":{backgroundColor:p},"&:first-child":{borderColor:p},"&:hover":{color:v,borderColor:v,"&::before":{backgroundColor:v}},"&:active":{color:d,borderColor:d,"&::before":{backgroundColor:d}}},[`${n}-group-solid &-checked:not(${n}-button-wrapper-disabled)`]:{color:k,background:_,borderColor:_,"&:hover":{color:k,background:T,borderColor:T},"&:active":{color:k,background:P,borderColor:P}},"&-disabled":{color:N,backgroundColor:y,borderColor:m,cursor:"not-allowed","&:first-child, &:hover":{color:N,backgroundColor:y,borderColor:m}},[`&-disabled${n}-button-wrapper-checked`]:{color:c,backgroundColor:w,borderColor:m,boxShadow:"none"}}}},kn=e=>{const{wireframe:t,padding:r,marginXS:n,lineWidth:o,fontSizeLG:i,colorText:m,colorBgContainer:C,colorTextDisabled:l,controlItemBgActiveDisabled:u,colorTextLightSolid:g,colorPrimary:x,colorPrimaryHover:S,colorPrimaryActive:E,colorWhite:h}=e,I=4,b=i,$=t?b-I*2:b-(I+o)*2;return{radioSize:b,dotSize:$,dotColorDisabled:l,buttonSolidCheckedColor:g,buttonSolidCheckedBg:x,buttonSolidCheckedHoverBg:S,buttonSolidCheckedActiveBg:E,buttonBg:C,buttonCheckedBg:C,buttonColor:m,buttonCheckedBgDisabled:u,buttonCheckedColorDisabled:l,buttonPaddingInline:r-o,wrapperMarginInlineEnd:n,radioColor:t?x:h,radioBgColor:t?C:x}},st=qe("Radio",e=>{const{controlOutline:t,controlOutlineWidth:r}=e,n=`0 0 0 ${G(r)} ${t}`,i=Ke(e,{radioFocusShadow:n,radioButtonFocusShadow:n});return[On(i),Rn(i),In(i)]},kn,{unitless:{radioSize:!0,dotSize:!0}});var Pn=globalThis&&globalThis.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]]);return r};const jn=(e,t)=>{var r,n;const o=a.useContext(at),i=a.useContext(it),{getPrefixCls:m,direction:C,radio:l}=a.useContext(J),u=a.useRef(null),g=Nt(t,u),{isFormItemInput:x}=a.useContext(zt),S=P=>{var A,z;(A=e.onChange)===null||A===void 0||A.call(e,P),(z=o==null?void 0:o.onChange)===null||z===void 0||z.call(o,P)},{prefixCls:E,className:h,rootClassName:I,children:b,style:$,title:O}=e,R=Pn(e,["prefixCls","className","rootClassName","children","style","title"]),k=m("radio",E),N=((o==null?void 0:o.optionType)||i)==="button",y=N?`${k}-button`:k,w=pe(k),[c,p,v]=st(k,w),d=Object.assign({},R),_=a.useContext(wt);o&&(d.name=o.name,d.onChange=S,d.checked=e.value===o.value,d.disabled=(r=d.disabled)!==null&&r!==void 0?r:o.disabled),d.disabled=(n=d.disabled)!==null&&n!==void 0?n:_;const T=L(`${y}-wrapper`,{[`${y}-wrapper-checked`]:d.checked,[`${y}-wrapper-disabled`]:d.disabled,[`${y}-wrapper-rtl`]:C==="rtl",[`${y}-wrapper-in-form-item`]:x},l==null?void 0:l.className,h,I,p,v,w);return c(a.createElement(Wt,{component:"Radio",disabled:d.disabled},a.createElement("label",{className:T,style:Object.assign(Object.assign({},l==null?void 0:l.style),$),onMouseEnter:e.onMouseEnter,onMouseLeave:e.onMouseLeave,title:O},a.createElement($n,Object.assign({},d,{className:L(d.className,!N&&Ht),type:"radio",prefixCls:y,ref:g})),b!==void 0?a.createElement("span",null,b):null)))},An=a.forwardRef(jn),fe=An,_n=a.forwardRef((e,t)=>{const{getPrefixCls:r,direction:n}=a.useContext(J),[o,i]=Je(e.defaultValue,{value:e.value}),m=P=>{const A=o,z=P.target.value;"value"in e||i(z);const{onChange:M}=e;M&&z!==A&&M(P)},{prefixCls:C,className:l,rootClassName:u,options:g,buttonStyle:x="outline",disabled:S,children:E,size:h,style:I,id:b,onMouseEnter:$,onMouseLeave:O,onFocus:R,onBlur:k}=e,N=r("radio",C),y=`${N}-group`,w=pe(N),[c,p,v]=st(N,w);let d=E;g&&g.length>0&&(d=g.map(P=>typeof P=="string"||typeof P=="number"?a.createElement(fe,{key:P.toString(),prefixCls:N,disabled:S,value:P,checked:o===P},P):a.createElement(fe,{key:`radio-group-value-options-${P.value}`,prefixCls:N,disabled:P.disabled||S,value:P.value,checked:o===P.value,title:P.title,style:P.style,id:P.id,required:P.required},P.label)));const _=Gt(h),T=L(y,`${y}-${x}`,{[`${y}-${_}`]:_,[`${y}-rtl`]:n==="rtl"},l,u,p,v,w);return c(a.createElement("div",Object.assign({},Pt(e,{aria:!0,data:!0}),{className:T,style:I,onMouseEnter:$,onMouseLeave:O,onFocus:R,onBlur:k,id:b,ref:t}),a.createElement(En,{value:{onChange:m,value:o,disabled:e.disabled,name:e.name,optionType:e.optionType}},d)))}),Mn=a.memo(_n);var Tn=globalThis&&globalThis.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]]);return r};const Fn=(e,t)=>{const{getPrefixCls:r}=a.useContext(J),{prefixCls:n}=e,o=Tn(e,["prefixCls"]),i=r("radio",n);return a.createElement(Nn,{value:"button"},a.createElement(fe,Object.assign({prefixCls:i},o,{type:"radio",ref:t})))},Ln=a.forwardRef(Fn),ge=fe;ge.Button=Ln;ge.Group=Mn;ge.__ANT_RADIO=!0;const Un=ge;let U=null,q=e=>e(),ae=[],ie={};function ze(){const{getContainer:e,duration:t,rtl:r,maxCount:n,top:o}=ie,i=(e==null?void 0:e())||document.body;return{getContainer:()=>i,duration:t,rtl:r,maxCount:n,top:o}}const Dn=F.forwardRef((e,t)=>{const{messageConfig:r,sync:n}=e,{getPrefixCls:o}=a.useContext(J),i=ie.prefixCls||o("message"),m=a.useContext(Sn),[C,l]=rt(Object.assign(Object.assign(Object.assign({},r),{prefixCls:i}),m.message));return F.useImperativeHandle(t,()=>{const u=Object.assign({},C);return Object.keys(u).forEach(g=>{u[g]=function(){return n(),C[g].apply(C,arguments)}}),{instance:u,sync:n}}),l}),Bn=F.forwardRef((e,t)=>{const[r,n]=F.useState(ze),o=()=>{n(ze)};F.useEffect(o,[]);const i=Ot(),m=i.getRootPrefixCls(),C=i.getIconPrefixCls(),l=i.getTheme(),u=F.createElement(Dn,{ref:t,sync:o,messageConfig:r});return F.createElement($t,{prefixCls:m,iconPrefixCls:C,theme:l},i.holderRender?i.holderRender(u):u)});function he(){if(!U){const e=document.createDocumentFragment(),t={fragment:e};U=t,q(()=>{qt(F.createElement(Bn,{ref:r=>{const{instance:n,sync:o}=r||{};Promise.resolve().then(()=>{!t.instance&&n&&(t.instance=n,t.sync=o,he())})}}),e)});return}U.instance&&(ae.forEach(e=>{const{type:t,skipped:r}=e;if(!r)switch(t){case"open":{q(()=>{const n=U.instance.open(Object.assign(Object.assign({},ie),e.config));n==null||n.then(e.resolve),e.setCloseFn(n)});break}case"destroy":q(()=>{U==null||U.instance.destroy(e.key)});break;default:q(()=>{var n;const o=(n=U.instance)[t].apply(n,Z(e.args));o==null||o.then(e.resolve),e.setCloseFn(o)})}}),ae=[])}function zn(e){ie=Object.assign(Object.assign({},ie),e),q(()=>{var t;(t=U==null?void 0:U.sync)===null||t===void 0||t.call(U)})}function Wn(e){const t=Ie(r=>{let n;const o={type:"open",config:e,resolve:r,setCloseFn:i=>{n=i}};return ae.push(o),()=>{n?q(()=>{n()}):o.skipped=!0}});return he(),t}function Hn(e,t){const r=Ie(n=>{let o;const i={type:e,args:t,resolve:n,setCloseFn:m=>{o=m}};return ae.push(i),()=>{o?q(()=>{o()}):i.skipped=!0}});return he(),r}function Gn(e){ae.push({type:"destroy",key:e}),he()}const qn=["success","info","warning","error","loading"],Kn={open:Wn,destroy:Gn,config:zn,useMessage:yn,_InternalPanelDoNotUseOrYouWillBeFired:fn},lt=Kn;qn.forEach(e=>{lt[e]=function(){for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return Hn(e,r)}});const We=lt,Vn=Ft().shape({name:$e().required("Required"),email:$e().matches(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,"Invalid email").required("Required"),height:ne().min(150,"Minimum height is 150").required("Required"),currentWeight:ne().min(35,"Minimum weight is 35").required("Required"),desiredWeight:ne().min(35,"Minimum weight is 35").required("Required"),birthday:Lt().required("Required").max(new Date,"Birthday must be in the past"),blood:ne().required("Required").oneOf([1,2,3,4],"Invalid blood type"),sex:$e().required("Required").oneOf(["male","female"],"Invalid sex"),levelActivity:ne().required("Required").oneOf([1,2,3,4,5],"Invalid activity level")}),Qn=j.button`
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
`,Yn=j(Ze)`
  @media screen and (max-width: 375px) {
  }
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1440px) {
  }
`,He=j.div`
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
`;j.div`
  width: calc(50% - 7px);
  
`;j.div`
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
`;j.div`
  @media screen and (min-width: 320px) and (max-width: 1439px) {
    width: 100%;
  }
`;const V=j.label`
  margin-bottom: 4px;
  font-weight: 400;
  font-size: 12px;
  color: ${({theme:e})=>e.colors.textWhite50};
  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`;j.input`
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
`;j(X)`
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
`;j.div`
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
`;j.div`
  margin-top: 40px;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
`;const Q=j(Un)`

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
`,Y=[{label:"Blood",name:"blood",options:[1,2,3,4]},{name:"sex",options:["male","female"]},{name:"levelActivity",options:["Sedentary lifestyle (little or no physical activity)","Light activity (light exercises/sports 1-3 days per week)","Moderately active (moderate exercises/sports 3-5 days per week)","Very active (intense exercises/sports 6-7 days per week)","Extremely active (very strenuous exercises/sports and physical work)"]}],Xn=()=>{const e=Qe(),t=Ye(Xe),r=o=>{console.log(o),We.success("Class"),e(Rt(o))},n=Ut({initialValues:{name:t.name||"",email:t.email||"",height:t.height||"",currentWeight:t.currentWeight||"0",desiredWeight:t.desiredWeight||"0",birthday:t.birthday||"00/00/0000",blood:t.blood||"",sex:t.sex||"",levelActivity:t.levelActivity||""},validationSchema:Vn,onSubmit:r});return s.jsxs(Yn,{onFinishFailed:()=>We.error("Bly"),onFinish:n.handleSubmit,children:[s.jsxs(Ze.Item,{help:n.errors.name,validateStatus:n.errors.name?"error":"",hasFeedback:!0,children:[s.jsx(V,{htmlFor:"name",children:"Name"}),s.jsx(X,{type:"text",name:"name",id:"name",placeholder:"Your name",value:n.values.name,onChange:n.handleChange})]}),s.jsxs("div",{children:[s.jsx(V,{htmlFor:"email",children:"Email"}),s.jsx(X,{type:"email",name:"email",id:"email",value:n.values.email,onChange:n.handleChange,style:{color:"rgba(239, 237, 232, 0.60)"},readOnly:!0,disabled:!0})]}),s.jsxs(He,{children:[s.jsxs("div",{children:[s.jsx(V,{htmlFor:"height",children:"Height"}),s.jsx(X,{type:"number",name:"height",id:"height",value:n.values.height,onChange:n.handleChange})]}),s.jsxs("div",{children:[s.jsx(V,{htmlFor:"currentWeight",children:"Current Weight"}),s.jsx(X,{type:"number",name:"currentWeight",id:"currentWeight",value:n.values.currentWeight,onChange:n.handleChange})]})]}),s.jsxs(He,{children:[s.jsxs("div",{children:[s.jsx(V,{htmlFor:"desiredWeight",children:"Desired Weight"}),s.jsx(X,{type:"number",name:"desiredWeight",id:"desiredWeight",value:n.values.desiredWeight,onChange:n.handleChange})]}),s.jsxs("div",{children:[s.jsx(V,{htmlFor:"birthday",children:"Date of birth"}),s.jsx(jt,{id:"birthday",value:n.values.birthday,onChange:o=>n.setFieldValue("birthday",o)})]})]}),s.jsx(Q.Group,{onChange:n.handleChange,value:n.values.blood,name:Y[0].name,children:Y[0].options.map((o,i)=>s.jsx(Q,{value:o,children:o},i))}),s.jsx(Q.Group,{onChange:n.handleChange,value:n.values.sex,name:Y[1].name,children:Y[1].options.map((o,i)=>s.jsx(Q,{value:o,children:o},i))}),s.jsx(Q.Group,{onChange:n.handleChange,value:n.values.levelActivity,name:Y[2].name,children:Y[2].options.map((o,i)=>s.jsx(Q,{value:i+1,children:o},i))}),n.values.isSubmitSuccessful&&s.jsx("div",{style:{color:"green"},children:"Form submitted successfully!"}),n.values.submitError&&s.jsx("div",{style:{color:"red"},children:n.values.submitError}),s.jsx(Qn,{type:"submit",$type:"filled",children:"Save"})]})},Zn=j.div`
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
`,Jn=j.div`
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
`,eo=j.img`
  border-radius: 100px;
  width: 100%;
  height: 100%;
`,to=j.div`
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
`,no=j.svg`
  width: 24px;
  height: 24px;
  @media screen and (min-width: 768px) {
    width: 32px;
    height: 32px;
  }
`,oo=j.svg`
  width: 61px;
  height: 62px;
  fill: ${({theme:e})=>e.colors.formBorder};
  @media screen and (min-width: 768px) {
    width: 102px;
    height: 102px;
  }
`,ro=j.label`
  cursor: pointer;
`,ao=j.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  text-align: center;
  gap: 4px;

  @media screen and (max-width: 767px) {
    margin-top: -8px;
  }
`,io=j.p`
  font-size: 18px;
  line-height: 1.1;
  color: ${({theme:e})=>e.colors.white};

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 1.16;
  }
`,so=j.p`
  color: rgba(239, 237, 232, 0.5);
  font-size: 14px;
  line-height: 1.33;
`,lo=j.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 14px;
  /* margin-top: 40px;
  margin-bottom: 40px; */

  font-size: 12px;
  line-height: 1.33;
  color: rgba(239, 237, 232, 0.8);
`,Ge=j.li`
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
`,co=j.div`
  margin-left: auto;
`,uo=()=>{const e=Qe(),{name:t,avatarURL:r,bmr:n,dpa:o}=Ye(Xe),i=s.jsx(oo,{children:s.jsx("use",{href:`${Te}#icon-user`})}),C=r?s.jsx(eo,{src:r,alt:"Avatar"}):i,l=u=>{const g=u.target.files[0];g&&e(It({avatar:g}))};return s.jsxs(Zn,{children:[s.jsxs(Jn,{children:[C,s.jsxs(to,{children:[s.jsx(ro,{htmlFor:"fileInput",children:s.jsx(no,{children:s.jsx("use",{href:`${Te}#icon-add-avatar`,"aria-label":"Upload Avatar"})})}),s.jsx("input",{type:"file",accept:"image/*, .jpg, .jpeg, .png",id:"fileInput",name:"avatar",style:{display:"none"},onChange:l})]})]}),s.jsxs(ao,{children:[s.jsx(io,{children:t}),s.jsx(so,{children:"User"})]}),s.jsxs(lo,{children:[s.jsxs(Ge,{children:[s.jsxs(_e,{children:[s.jsx(Oe,{icon:"icon-food",size:"20",color:we.colors.secondary}),s.jsx("p",{children:"Daily calorie intake"})]}),s.jsx(Me,{children:n})]}),s.jsxs(Ge,{children:[s.jsxs(_e,{children:[s.jsx(Oe,{icon:"icon-dumbbell",size:"20",color:we.colors.secondary}),s.jsx("p",{children:"Daily physical activity"})]}),s.jsxs(Me,{children:[o," min"]})]})]}),s.jsxs(At,{children:[s.jsx("div",{children:s.jsx(Oe,{icon:"icon-exclamation-mark",size:"16",stroke:we.colors.white})}),s.jsx("p",{children:"We understand that each individual is unique, so the entire approach to diet is relative and tailored to your unique body and goals."})]}),s.jsx(co,{children:s.jsx(Kt,{})})]})},mo=()=>s.jsxs(s.Fragment,{children:[s.jsx(_t,{title:"Profile Settings"}),s.jsx(uo,{}),s.jsx(Xn,{})]}),Co=mo;export{Co as default};
