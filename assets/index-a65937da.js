import{r as a,A as Kt,_ as J,Y as G,a1 as Xt,a2 as N,R as qt,w as A,f as R,v as $e,U as st,a3 as We,a4 as _t,a5 as lt,a6 as Zt,K as ct,y as Jt,D as M,B as Gt,a7 as Yt,z as Qt,h as be,a8 as en,a0 as tn,C as dt,a9 as nn,aa as on,ab as rn,u as y,t as T,j as f,L as an,e as je}from"./index-676fc85d.js";import{E as sn}from"./ExercisesSubcategoriesList-24209141.js";import{s as Pe}from"./sprite-4bd27eea.js";import{S as ae}from"./SvgCustom-f00d78b8.js";import{B as Be,f as ut,e as ln,P as cn,c as dn,h as Fe,i as un,a as ft,j as fn,N as mn,k as pn,z as gn,C as xn,l as hn,m as Cn,r as vn}from"./motion-b83f32da.js";import{i as bn,g as Ce,E as yn,C as En}from"./zoom-caca5cba.js";import{p as wn,C as Le,w as Sn,d as Nn}from"./dayjs.min-4988ba0f.js";var On={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 010-96 48.01 48.01 0 010 96z"}}]},name:"info-circle",theme:"filled"};const Tn=On;var jn=function(t,n){return a.createElement(Kt,J({},t,{ref:n,icon:Tn}))};const Pn=a.forwardRef(jn);var C={MAC_ENTER:3,BACKSPACE:8,TAB:9,NUM_CENTER:12,ENTER:13,SHIFT:16,CTRL:17,ALT:18,PAUSE:19,CAPS_LOCK:20,ESC:27,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40,PRINT_SCREEN:44,INSERT:45,DELETE:46,ZERO:48,ONE:49,TWO:50,THREE:51,FOUR:52,FIVE:53,SIX:54,SEVEN:55,EIGHT:56,NINE:57,QUESTION_MARK:63,A:65,B:66,C:67,D:68,E:69,F:70,G:71,H:72,I:73,J:74,K:75,L:76,M:77,N:78,O:79,P:80,Q:81,R:82,S:83,T:84,U:85,V:86,W:87,X:88,Y:89,Z:90,META:91,WIN_KEY_RIGHT:92,CONTEXT_MENU:93,NUM_ZERO:96,NUM_ONE:97,NUM_TWO:98,NUM_THREE:99,NUM_FOUR:100,NUM_FIVE:101,NUM_SIX:102,NUM_SEVEN:103,NUM_EIGHT:104,NUM_NINE:105,NUM_MULTIPLY:106,NUM_PLUS:107,NUM_MINUS:109,NUM_PERIOD:110,NUM_DIVISION:111,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,NUMLOCK:144,SEMICOLON:186,DASH:189,EQUALS:187,COMMA:188,PERIOD:190,SLASH:191,APOSTROPHE:192,SINGLE_QUOTE:222,OPEN_SQUARE_BRACKET:219,BACKSLASH:220,CLOSE_SQUARE_BRACKET:221,WIN_KEY:224,MAC_FF_META:224,WIN_IME:229,isTextModifyingKeyEvent:function(t){var n=t.keyCode;if(t.altKey&&!t.ctrlKey||t.metaKey||n>=C.F1&&n<=C.F12)return!1;switch(n){case C.ALT:case C.CAPS_LOCK:case C.CONTEXT_MENU:case C.CTRL:case C.DOWN:case C.END:case C.ESC:case C.HOME:case C.INSERT:case C.LEFT:case C.MAC_FF_META:case C.META:case C.NUMLOCK:case C.NUM_CENTER:case C.PAGE_DOWN:case C.PAGE_UP:case C.PAUSE:case C.PRINT_SCREEN:case C.RIGHT:case C.SHIFT:case C.UP:case C.WIN_KEY:case C.WIN_KEY_RIGHT:return!1;default:return!0}},isCharacterKey:function(t){if(t>=C.ZERO&&t<=C.NINE||t>=C.NUM_ZERO&&t<=C.NUM_MULTIPLY||t>=C.A&&t<=C.Z||window.navigator.userAgent.indexOf("WebKit")!==-1&&t===0)return!0;switch(t){case C.SPACE:case C.QUESTION_MARK:case C.NUM_PLUS:case C.NUM_MINUS:case C.NUM_PERIOD:case C.NUM_DIVISION:case C.SEMICOLON:case C.DASH:case C.EQUALS:case C.COMMA:case C.PERIOD:case C.SLASH:case C.APOSTROPHE:case C.SINGLE_QUOTE:case C.OPEN_SQUARE_BRACKET:case C.BACKSLASH:case C.CLOSE_SQUARE_BRACKET:return!0;default:return!1}}};function Mn(){const[e,t]=a.useState([]),n=a.useCallback(o=>(t(r=>[].concat(G(r),[o])),()=>{t(r=>r.filter(i=>i!==o))}),[]);return[e,n]}function ze(e){return!!(e&&e.then)}const In=e=>{const{type:t,children:n,prefixCls:o,buttonProps:r,close:i,autoFocus:s,emitEvent:l,isSilent:c,quitOnNullishReturnValue:u,actionFn:d}=e,m=a.useRef(!1),p=a.useRef(null),[g,v]=Xt(!1),h=function(){i==null||i.apply(void 0,arguments)};a.useEffect(()=>{let x=null;return s&&(x=setTimeout(()=>{var E;(E=p.current)===null||E===void 0||E.focus()})),()=>{x&&clearTimeout(x)}},[]);const S=x=>{ze(x)&&(v(!0),x.then(function(){v(!1,!0),h.apply(void 0,arguments),m.current=!1},E=>{if(v(!1,!0),m.current=!1,!(c!=null&&c()))return Promise.reject(E)}))},b=x=>{if(m.current)return;if(m.current=!0,!d){h();return}let E;if(l){if(E=d(x),u&&!ze(E)){m.current=!1,h(x);return}}else if(d.length)E=d(i),m.current=!1;else if(E=d(),!E){h();return}S(E)};return a.createElement(Be,Object.assign({},ut(t),{onClick:b,loading:g,prefixCls:o},r,{ref:p}),n)},mt=In,se=N.createContext({}),{Provider:pt}=se,An=()=>{const{autoFocusButton:e,cancelButtonProps:t,cancelTextLocale:n,isSilent:o,mergedOkCancel:r,rootPrefixCls:i,close:s,onCancel:l,onConfirm:c}=a.useContext(se);return r?N.createElement(mt,{isSilent:o,actionFn:l,close:function(){s==null||s.apply(void 0,arguments),c==null||c(!1)},autoFocus:e==="cancel",buttonProps:t,prefixCls:`${i}-btn`},n):null},De=An,Rn=()=>{const{autoFocusButton:e,close:t,isSilent:n,okButtonProps:o,rootPrefixCls:r,okTextLocale:i,okType:s,onConfirm:l,onOk:c}=a.useContext(se);return N.createElement(mt,{isSilent:n,type:s||"primary",actionFn:c,close:function(){t==null||t.apply(void 0,arguments),l==null||l(!0)},autoFocus:e==="ok",buttonProps:o,prefixCls:`${r}-btn`},i)},ke=Rn;var gt=a.createContext({});function He(e,t,n){var o=t;return!o&&n&&(o="".concat(e,"-").concat(n)),o}function Ve(e,t){var n=e["page".concat(t?"Y":"X","Offset")],o="scroll".concat(t?"Top":"Left");if(typeof n!="number"){var r=e.document;n=r.documentElement[o],typeof n!="number"&&(n=r.body[o])}return n}function $n(e){var t=e.getBoundingClientRect(),n={left:t.left,top:t.top},o=e.ownerDocument,r=o.defaultView||o.parentWindow;return n.left+=Ve(r),n.top+=Ve(r,!0),n}const Bn=a.memo(function(e){var t=e.children;return t},function(e,t){var n=t.shouldUpdate;return!n});var Ke={width:0,height:0,overflow:"hidden",outline:"none"},xt=N.forwardRef(function(e,t){var n=e.prefixCls,o=e.className,r=e.style,i=e.title,s=e.ariaId,l=e.footer,c=e.closable,u=e.closeIcon,d=e.onClose,m=e.children,p=e.bodyStyle,g=e.bodyProps,v=e.modalRender,h=e.onMouseDown,S=e.onMouseUp,b=e.holderRef,x=e.visible,E=e.forceRender,w=e.width,j=e.height,O=e.classNames,P=e.styles,D=N.useContext(gt),$=D.panel,k=qt(b,$),L=a.useRef(),Q=a.useRef();N.useImperativeHandle(t,function(){return{focus:function(){var W;(W=L.current)===null||W===void 0||W.focus()},changeActive:function(W){var ee=document,te=ee.activeElement;W&&te===Q.current?L.current.focus():!W&&te===L.current&&Q.current.focus()}}});var B={};w!==void 0&&(B.width=w),j!==void 0&&(B.height=j);var U;l&&(U=N.createElement("div",{className:A("".concat(n,"-footer"),O==null?void 0:O.footer),style:R({},P==null?void 0:P.footer)},l));var H;i&&(H=N.createElement("div",{className:A("".concat(n,"-header"),O==null?void 0:O.header),style:R({},P==null?void 0:P.header)},N.createElement("div",{className:"".concat(n,"-title"),id:s},i)));var V;c&&(V=N.createElement("button",{type:"button",onClick:d,"aria-label":"Close",className:"".concat(n,"-close")},u||N.createElement("span",{className:"".concat(n,"-close-x")})));var _=N.createElement("div",{className:A("".concat(n,"-content"),O==null?void 0:O.content),style:P==null?void 0:P.content},V,H,N.createElement("div",J({className:A("".concat(n,"-body"),O==null?void 0:O.body),style:R(R({},p),P==null?void 0:P.body)},g),m),U);return N.createElement("div",{key:"dialog-element",role:"dialog","aria-labelledby":i?s:null,"aria-modal":"true",ref:k,style:R(R({},r),B),className:A(n,o),onMouseDown:h,onMouseUp:S},N.createElement("div",{tabIndex:0,ref:L,style:Ke,"aria-hidden":"true"}),N.createElement(Bn,{shouldUpdate:x||E},v?v(_):_),N.createElement("div",{tabIndex:0,ref:Q,style:Ke,"aria-hidden":"true"}))}),ht=a.forwardRef(function(e,t){var n=e.prefixCls,o=e.title,r=e.style,i=e.className,s=e.visible,l=e.forceRender,c=e.destroyOnClose,u=e.motionName,d=e.ariaId,m=e.onVisibleChanged,p=e.mousePosition,g=a.useRef(),v=a.useState(),h=$e(v,2),S=h[0],b=h[1],x={};S&&(x.transformOrigin=S);function E(){var w=$n(g.current);b(p?"".concat(p.x-w.left,"px ").concat(p.y-w.top,"px"):"")}return a.createElement(st,{visible:s,onVisibleChanged:m,onAppearPrepare:E,onEnterPrepare:E,forceRender:l,motionName:u,removeOnLeave:c,ref:g},function(w,j){var O=w.className,P=w.style;return a.createElement(xt,J({},e,{ref:t,title:o,ariaId:d,prefixCls:n,holderRef:j,style:R(R(R({},P),r),x),className:A(i,O)}))})});ht.displayName="Content";function Fn(e){var t=e.prefixCls,n=e.style,o=e.visible,r=e.maskProps,i=e.motionName,s=e.className;return a.createElement(st,{key:"mask",visible:o,motionName:i,leavedClassName:"".concat(t,"-mask-hidden")},function(l,c){var u=l.className,d=l.style;return a.createElement("div",J({ref:c,style:R(R({},d),n),className:A("".concat(t,"-mask"),u,s)},r))})}function Ln(e){var t=e.prefixCls,n=t===void 0?"rc-dialog":t,o=e.zIndex,r=e.visible,i=r===void 0?!1:r,s=e.keyboard,l=s===void 0?!0:s,c=e.focusTriggerAfterClose,u=c===void 0?!0:c,d=e.wrapStyle,m=e.wrapClassName,p=e.wrapProps,g=e.onClose,v=e.afterOpenChange,h=e.afterClose,S=e.transitionName,b=e.animation,x=e.closable,E=x===void 0?!0:x,w=e.mask,j=w===void 0?!0:w,O=e.maskTransitionName,P=e.maskAnimation,D=e.maskClosable,$=D===void 0?!0:D,k=e.maskStyle,L=e.maskProps,Q=e.rootClassName,B=e.classNames,U=e.styles,H=a.useRef(),V=a.useRef(),_=a.useRef(),ie=a.useState(i),W=$e(ie,2),ee=W[0],te=W[1],ne=ln();function K(){We(V.current,document.activeElement)||(H.current=document.activeElement)}function zt(){if(!We(V.current,document.activeElement)){var I;(I=_.current)===null||I===void 0||I.focus()}}function Dt(I){if(I)zt();else{if(te(!1),j&&H.current&&u){try{H.current.focus({preventScroll:!0})}catch{}H.current=null}ee&&(h==null||h())}v==null||v(I)}function Ee(I){g==null||g(I)}var de=a.useRef(!1),we=a.useRef(),kt=function(){clearTimeout(we.current),de.current=!0},Ht=function(){we.current=setTimeout(function(){de.current=!1})},Ue=null;$&&(Ue=function(Se){de.current?de.current=!1:V.current===Se.target&&Ee(Se)});function Vt(I){if(l&&I.keyCode===C.ESC){I.stopPropagation(),Ee(I);return}i&&I.keyCode===C.TAB&&_.current.changeActive(!I.shiftKey)}return a.useEffect(function(){i&&(te(!0),K())},[i]),a.useEffect(function(){return function(){clearTimeout(we.current)}},[]),a.createElement("div",J({className:A("".concat(n,"-root"),Q)},wn(e,{data:!0})),a.createElement(Fn,{prefixCls:n,visible:j&&i,motionName:He(n,O,P),style:R(R({zIndex:o},k),U==null?void 0:U.mask),maskProps:L,className:B==null?void 0:B.mask}),a.createElement("div",J({tabIndex:-1,onKeyDown:Vt,className:A("".concat(n,"-wrap"),m,B==null?void 0:B.wrapper),ref:V,onClick:Ue,style:R(R(R({zIndex:o},d),U==null?void 0:U.wrapper),{},{display:ee?null:"none"})},p),a.createElement(ht,J({},e,{onMouseDown:kt,onMouseUp:Ht,ref:_,closable:E,ariaId:ne,prefixCls:n,visible:i&&ee,onClose:Ee,onVisibleChanged:Dt,motionName:He(n,S,b)}))))}var Ct=function(t){var n=t.visible,o=t.getContainer,r=t.forceRender,i=t.destroyOnClose,s=i===void 0?!1:i,l=t.afterClose,c=t.panelRef,u=a.useState(n),d=$e(u,2),m=d[0],p=d[1],g=a.useMemo(function(){return{panel:c}},[c]);return a.useEffect(function(){n&&p(!0)},[n]),!r&&s&&!m?null:a.createElement(gt.Provider,{value:g},a.createElement(cn,{open:n||r||m,autoDestroy:!1,getContainer:o,autoLock:n||m},a.createElement(Ln,J({},t,{destroyOnClose:s,afterClose:function(){l==null||l(),p(!1)}}))))};Ct.displayName="Dialog";function Un(e,t,n){return typeof e=="boolean"?e:t===void 0?!!n:t!==!1&&t!==null}function Wn(e,t,n){let o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:N.createElement(Le,null),r=arguments.length>4&&arguments[4]!==void 0?arguments[4]:!1;if(!Un(e,t,r))return[!1,null];const s=typeof t=="boolean"||t===void 0||t===null?o:t;return[!0,n?n(s):s]}const zn=()=>_t()&&window.document.documentElement;function Xe(){}const Dn=a.createContext({add:Xe,remove:Xe});function kn(e){const t=a.useContext(Dn),n=a.useRef();return dn(r=>{if(r){const i=e?r.querySelector(e):r;t.add(i),n.current=i}else t.remove(n.current)})}const Hn=()=>{const{cancelButtonProps:e,cancelTextLocale:t,onCancel:n}=a.useContext(se);return N.createElement(Be,Object.assign({onClick:n},e),t)},qe=Hn,Vn=()=>{const{confirmLoading:e,okButtonProps:t,okType:n,okTextLocale:o,onOk:r}=a.useContext(se);return N.createElement(Be,Object.assign({},ut(n),{loading:e,onClick:r},t),o)},_e=Vn;function vt(e,t){return N.createElement("span",{className:`${e}-close-x`},t||N.createElement(Le,{className:`${e}-close-icon`}))}const bt=e=>{const{okText:t,okType:n="primary",cancelText:o,confirmLoading:r,onOk:i,onCancel:s,okButtonProps:l,cancelButtonProps:c,footer:u}=e,[d]=Fe("Modal",lt()),m=t||(d==null?void 0:d.okText),p=o||(d==null?void 0:d.cancelText),g={confirmLoading:r,okButtonProps:l,cancelButtonProps:c,okTextLocale:m,cancelTextLocale:p,okType:n,onOk:i,onCancel:s},v=N.useMemo(()=>g,G(Object.values(g)));let h;return typeof u=="function"||typeof u>"u"?(h=N.createElement(N.Fragment,null,N.createElement(qe,null),N.createElement(_e,null)),typeof u=="function"&&(h=u(h,{OkBtn:_e,CancelBtn:qe})),h=N.createElement(pt,{value:v},h)):h=u,N.createElement(Zt,{disabled:!1},h)},Kn=new ct("antFadeIn",{"0%":{opacity:0},"100%":{opacity:1}}),Xn=new ct("antFadeOut",{"0%":{opacity:1},"100%":{opacity:0}}),qn=function(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;const{antCls:n}=e,o=`${n}-fade`,r=t?"&":"";return[un(o,Kn,Xn,e.motionDurationMid,t),{[`
        ${r}${o}-enter,
        ${r}${o}-appear
      `]:{opacity:0,animationTimingFunction:"linear"},[`${r}${o}-leave`]:{animationTimingFunction:"linear"}}]};function Ze(e){return{position:e,inset:0}}const _n=e=>{const{componentCls:t,antCls:n}=e;return[{[`${t}-root`]:{[`${t}${n}-zoom-enter, ${t}${n}-zoom-appear`]:{transform:"none",opacity:0,animationDuration:e.motionDurationSlow,userSelect:"none"},[`${t}${n}-zoom-leave ${t}-content`]:{pointerEvents:"none"},[`${t}-mask`]:Object.assign(Object.assign({},Ze("fixed")),{zIndex:e.zIndexPopupBase,height:"100%",backgroundColor:e.colorBgMask,pointerEvents:"none",[`${t}-hidden`]:{display:"none"}}),[`${t}-wrap`]:Object.assign(Object.assign({},Ze("fixed")),{zIndex:e.zIndexPopupBase,overflow:"auto",outline:0,WebkitOverflowScrolling:"touch"})}},{[`${t}-root`]:qn(e)}]},Zn=e=>{const{componentCls:t}=e;return[{[`${t}-root`]:{[`${t}-wrap-rtl`]:{direction:"rtl"},[`${t}-centered`]:{textAlign:"center","&::before":{display:"inline-block",width:0,height:"100%",verticalAlign:"middle",content:'""'},[t]:{top:0,display:"inline-block",paddingBottom:0,textAlign:"start",verticalAlign:"middle"}},[`@media (max-width: ${e.screenSMMax}px)`]:{[t]:{maxWidth:"calc(100vw - 16px)",margin:`${M(e.marginXS)} auto`},[`${t}-centered`]:{[t]:{flex:1}}}}},{[t]:Object.assign(Object.assign({},Gt(e)),{pointerEvents:"none",position:"relative",top:100,width:"auto",maxWidth:`calc(100vw - ${M(e.calc(e.margin).mul(2).equal())})`,margin:"0 auto",paddingBottom:e.paddingLG,[`${t}-title`]:{margin:0,color:e.titleColor,fontWeight:e.fontWeightStrong,fontSize:e.titleFontSize,lineHeight:e.titleLineHeight,wordWrap:"break-word"},[`${t}-content`]:{position:"relative",backgroundColor:e.contentBg,backgroundClip:"padding-box",border:0,borderRadius:e.borderRadiusLG,boxShadow:e.boxShadow,pointerEvents:"auto",padding:e.contentPadding},[`${t}-close`]:Object.assign({position:"absolute",top:e.calc(e.modalHeaderHeight).sub(e.modalCloseBtnSize).div(2).equal(),insetInlineEnd:e.calc(e.modalHeaderHeight).sub(e.modalCloseBtnSize).div(2).equal(),zIndex:e.calc(e.zIndexPopupBase).add(10).equal(),padding:0,color:e.modalCloseIconColor,fontWeight:e.fontWeightStrong,lineHeight:1,textDecoration:"none",background:"transparent",borderRadius:e.borderRadiusSM,width:e.modalCloseBtnSize,height:e.modalCloseBtnSize,border:0,outline:0,cursor:"pointer",transition:`color ${e.motionDurationMid}, background-color ${e.motionDurationMid}`,"&-x":{display:"flex",fontSize:e.fontSizeLG,fontStyle:"normal",lineHeight:`${M(e.modalCloseBtnSize)}`,justifyContent:"center",textTransform:"none",textRendering:"auto"},"&:hover":{color:e.modalIconHoverColor,backgroundColor:e.closeBtnHoverBg,textDecoration:"none"},"&:active":{backgroundColor:e.closeBtnActiveBg}},Yt(e)),[`${t}-header`]:{color:e.colorText,background:e.headerBg,borderRadius:`${M(e.borderRadiusLG)} ${M(e.borderRadiusLG)} 0 0`,marginBottom:e.headerMarginBottom,padding:e.headerPadding,borderBottom:e.headerBorderBottom},[`${t}-body`]:{fontSize:e.fontSize,lineHeight:e.lineHeight,wordWrap:"break-word",padding:e.bodyPadding},[`${t}-footer`]:{textAlign:"end",background:e.footerBg,marginTop:e.footerMarginTop,padding:e.footerPadding,borderTop:e.footerBorderTop,borderRadius:e.footerBorderRadius,[`> ${e.antCls}-btn + ${e.antCls}-btn`]:{marginInlineStart:e.marginXS}},[`${t}-open`]:{overflow:"hidden"}})},{[`${t}-pure-panel`]:{top:"auto",padding:0,display:"flex",flexDirection:"column",[`${t}-content,
          ${t}-body,
          ${t}-confirm-body-wrapper`]:{display:"flex",flexDirection:"column",flex:"auto"},[`${t}-confirm-body`]:{marginBottom:"auto"}}}]},Jn=e=>{const{componentCls:t}=e;return{[`${t}-root`]:{[`${t}-wrap-rtl`]:{direction:"rtl",[`${t}-confirm-body`]:{direction:"rtl"}}}}},yt=e=>{const t=e.padding,n=e.fontSizeHeading5,o=e.lineHeightHeading5;return Qt(e,{modalHeaderHeight:e.calc(e.calc(o).mul(n).equal()).add(e.calc(t).mul(2).equal()).equal(),modalFooterBorderColorSplit:e.colorSplit,modalFooterBorderStyle:e.lineType,modalFooterBorderWidth:e.lineWidth,modalIconHoverColor:e.colorIconHover,modalCloseIconColor:e.colorIcon,modalCloseBtnSize:e.fontHeight,modalConfirmIconSize:e.fontHeight,modalTitleHeight:e.calc(e.titleFontSize).mul(e.titleLineHeight).equal()})},Et=e=>({footerBg:"transparent",headerBg:e.colorBgElevated,titleLineHeight:e.lineHeightHeading5,titleFontSize:e.fontSizeHeading5,contentBg:e.colorBgElevated,titleColor:e.colorTextHeading,closeBtnHoverBg:e.wireframe?"transparent":e.colorFillContent,closeBtnActiveBg:e.wireframe?"transparent":e.colorFillContentHover,contentPadding:e.wireframe?0:`${M(e.paddingMD)} ${M(e.paddingContentHorizontalLG)}`,headerPadding:e.wireframe?`${M(e.padding)} ${M(e.paddingLG)}`:0,headerBorderBottom:e.wireframe?`${M(e.lineWidth)} ${e.lineType} ${e.colorSplit}`:"none",headerMarginBottom:e.wireframe?0:e.marginXS,bodyPadding:e.wireframe?e.paddingLG:0,footerPadding:e.wireframe?`${M(e.paddingXS)} ${M(e.padding)}`:0,footerBorderTop:e.wireframe?`${M(e.lineWidth)} ${e.lineType} ${e.colorSplit}`:"none",footerBorderRadius:e.wireframe?`0 0 ${M(e.borderRadiusLG)} ${M(e.borderRadiusLG)}`:0,footerMarginTop:e.wireframe?0:e.marginSM,confirmBodyPadding:e.wireframe?`${M(e.padding*2)} ${M(e.padding*2)} ${M(e.paddingLG)}`:0,confirmIconMarginInlineEnd:e.wireframe?e.margin:e.marginSM,confirmBtnsMarginTop:e.wireframe?e.marginLG:e.marginSM}),wt=Jt("Modal",e=>{const t=yt(e);return[Zn(t),Jn(t),_n(t),bn(t,"zoom")]},Et,{unitless:{titleLineHeight:!0}});var Gn=globalThis&&globalThis.__rest||function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]]);return n};let Me;const Yn=e=>{Me={x:e.pageX,y:e.pageY},setTimeout(()=>{Me=null},100)};zn()&&document.documentElement.addEventListener("click",Yn,!0);const Qn=e=>{var t;const{getPopupContainer:n,getPrefixCls:o,direction:r,modal:i}=a.useContext(be),s=ne=>{const{onCancel:K}=e;K==null||K(ne)},l=ne=>{const{onOk:K}=e;K==null||K(ne)},{prefixCls:c,className:u,rootClassName:d,open:m,wrapClassName:p,centered:g,getContainer:v,closeIcon:h,closable:S,focusTriggerAfterClose:b=!0,style:x,visible:E,width:w=520,footer:j,classNames:O,styles:P}=e,D=Gn(e,["prefixCls","className","rootClassName","open","wrapClassName","centered","getContainer","closeIcon","closable","focusTriggerAfterClose","style","visible","width","footer","classNames","styles"]),$=o("modal",c),k=o(),L=ft($),[Q,B,U]=wt($,L),H=A(p,{[`${$}-centered`]:!!g,[`${$}-wrap-rtl`]:r==="rtl"}),V=j!==null&&a.createElement(bt,Object.assign({},e,{onOk:l,onCancel:s})),[_,ie]=Wn(S,typeof h<"u"?h:i==null?void 0:i.closeIcon,ne=>vt($,ne),a.createElement(Le,{className:`${$}-close-icon`}),!0),W=kn(`.${$}-content`),[ee,te]=fn("Modal",D.zIndex);return Q(a.createElement(mn,null,a.createElement(pn,{status:!0,override:!0},a.createElement(gn.Provider,{value:te},a.createElement(Ct,Object.assign({width:w},D,{zIndex:ee,getContainer:v===void 0?n:v,prefixCls:$,rootClassName:A(B,d,U,L),footer:V,visible:m??E,mousePosition:(t=D.mousePosition)!==null&&t!==void 0?t:Me,onClose:s,closable:_,closeIcon:ie,focusTriggerAfterClose:b,transitionName:Ce(k,"zoom",e.transitionName),maskTransitionName:Ce(k,"fade",e.maskTransitionName),className:A(B,u,i==null?void 0:i.className),style:Object.assign(Object.assign({},i==null?void 0:i.style),x),classNames:Object.assign(Object.assign(Object.assign({},i==null?void 0:i.classNames),O),{wrapper:A(H,O==null?void 0:O.wrapper)}),styles:Object.assign(Object.assign({},i==null?void 0:i.styles),P),panelRef:W}))))))},St=Qn,eo=e=>{const{componentCls:t,titleFontSize:n,titleLineHeight:o,modalConfirmIconSize:r,fontSize:i,lineHeight:s,modalTitleHeight:l,fontHeight:c,confirmBodyPadding:u}=e,d=`${t}-confirm`;return{[d]:{"&-rtl":{direction:"rtl"},[`${e.antCls}-modal-header`]:{display:"none"},[`${d}-body-wrapper`]:Object.assign({},tn()),[`&${t} ${t}-body`]:{padding:u},[`${d}-body`]:{display:"flex",flexWrap:"nowrap",alignItems:"start",[`> ${e.iconCls}`]:{flex:"none",fontSize:r,marginInlineEnd:e.confirmIconMarginInlineEnd,marginTop:e.calc(e.calc(c).sub(r).equal()).div(2).equal()},[`&-has-title > ${e.iconCls}`]:{marginTop:e.calc(e.calc(l).sub(r).equal()).div(2).equal()}},[`${d}-paragraph`]:{display:"flex",flexDirection:"column",flex:"auto",rowGap:e.marginXS,maxWidth:`calc(100% - ${M(e.calc(e.modalConfirmIconSize).add(e.marginSM).equal())})`},[`${d}-title`]:{color:e.colorTextHeading,fontWeight:e.fontWeightStrong,fontSize:n,lineHeight:o},[`${d}-content`]:{color:e.colorText,fontSize:i,lineHeight:s},[`${d}-btns`]:{textAlign:"end",marginTop:e.confirmBtnsMarginTop,[`${e.antCls}-btn + ${e.antCls}-btn`]:{marginBottom:0,marginInlineStart:e.marginXS}}},[`${d}-error ${d}-body > ${e.iconCls}`]:{color:e.colorError},[`${d}-warning ${d}-body > ${e.iconCls},
        ${d}-confirm ${d}-body > ${e.iconCls}`]:{color:e.colorWarning},[`${d}-info ${d}-body > ${e.iconCls}`]:{color:e.colorInfo},[`${d}-success ${d}-body > ${e.iconCls}`]:{color:e.colorSuccess}}},to=en(["Modal","confirm"],e=>{const t=yt(e);return[eo(t)]},Et,{order:-1e3});var no=globalThis&&globalThis.__rest||function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]]);return n};function Nt(e){const{prefixCls:t,icon:n,okText:o,cancelText:r,confirmPrefixCls:i,type:s,okCancel:l,footer:c,locale:u}=e,d=no(e,["prefixCls","icon","okText","cancelText","confirmPrefixCls","type","okCancel","footer","locale"]);let m=n;if(!n&&n!==null)switch(s){case"info":m=a.createElement(Pn,null);break;case"success":m=a.createElement(En,null);break;case"error":m=a.createElement(xn,null);break;default:m=a.createElement(yn,null)}const p=l??s==="confirm",g=e.autoFocusButton===null?!1:e.autoFocusButton||"ok",[v]=Fe("Modal"),h=u||v,S=o||(p?h==null?void 0:h.okText:h==null?void 0:h.justOkText),b=r||(h==null?void 0:h.cancelText),x=Object.assign({autoFocusButton:g,cancelTextLocale:b,okTextLocale:S,mergedOkCancel:p},d),E=a.useMemo(()=>x,G(Object.values(x))),w=a.createElement(a.Fragment,null,a.createElement(De,null),a.createElement(ke,null)),j=e.title!==void 0&&e.title!==null,O=`${i}-body`;return a.createElement("div",{className:`${i}-body-wrapper`},a.createElement("div",{className:A(O,{[`${O}-has-title`]:j})},m,a.createElement("div",{className:`${i}-paragraph`},j&&a.createElement("span",{className:`${i}-title`},e.title),a.createElement("div",{className:`${i}-content`},e.content))),c===void 0||typeof c=="function"?a.createElement(pt,{value:E},a.createElement("div",{className:`${i}-btns`},typeof c=="function"?c(w,{OkBtn:ke,CancelBtn:De}):w)):c,a.createElement(to,{prefixCls:t}))}const oo=e=>{const{close:t,zIndex:n,afterClose:o,open:r,keyboard:i,centered:s,getContainer:l,maskStyle:c,direction:u,prefixCls:d,wrapClassName:m,rootPrefixCls:p,bodyStyle:g,closable:v=!1,closeIcon:h,modalRender:S,focusTriggerAfterClose:b,onConfirm:x,styles:E}=e,w=`${d}-confirm`,j=e.width||416,O=e.style||{},P=e.mask===void 0?!0:e.mask,D=e.maskClosable===void 0?!1:e.maskClosable,$=A(w,`${w}-${e.type}`,{[`${w}-rtl`]:u==="rtl"},e.className),[,k]=nn(),L=a.useMemo(()=>n!==void 0?n:k.zIndexPopupBase+hn,[n,k]);return a.createElement(St,{prefixCls:d,className:$,wrapClassName:A({[`${w}-centered`]:!!e.centered},m),onCancel:()=>{t==null||t({triggerCancel:!0}),x==null||x(!1)},open:r,title:"",footer:null,transitionName:Ce(p||"","zoom",e.transitionName),maskTransitionName:Ce(p||"","fade",e.maskTransitionName),mask:P,maskClosable:D,style:O,styles:Object.assign({body:g,mask:c},E),width:j,zIndex:L,afterClose:o,keyboard:i,centered:s,getContainer:l,closable:v,closeIcon:h,modalRender:S,focusTriggerAfterClose:b},a.createElement(Nt,Object.assign({},e,{confirmPrefixCls:w})))},Ot=e=>{const{rootPrefixCls:t,iconPrefixCls:n,direction:o,theme:r}=e;return a.createElement(dt,{prefixCls:t,iconPrefixCls:n,direction:o,theme:r},a.createElement(oo,Object.assign({},e)))},ro=[],oe=ro;let Tt="";function jt(){return Tt}const io=e=>{var t,n;const{prefixCls:o,getContainer:r,direction:i}=e,s=lt(),l=a.useContext(be),c=jt()||l.getPrefixCls(),u=o||`${c}-modal`;let d=r;return d===!1&&(d=void 0),N.createElement(Ot,Object.assign({},e,{rootPrefixCls:c,prefixCls:u,iconPrefixCls:l.iconPrefixCls,theme:l.theme,direction:i??l.direction,locale:(n=(t=l.locale)===null||t===void 0?void 0:t.Modal)!==null&&n!==void 0?n:s,getContainer:d}))};function le(e){const t=on(),n=document.createDocumentFragment();let o=Object.assign(Object.assign({},e),{close:l,open:!0}),r;function i(){for(var u=arguments.length,d=new Array(u),m=0;m<u;m++)d[m]=arguments[m];const p=d.some(g=>g&&g.triggerCancel);e.onCancel&&p&&e.onCancel.apply(e,[()=>{}].concat(G(d.slice(1))));for(let g=0;g<oe.length;g++)if(oe[g]===l){oe.splice(g,1);break}Cn(n)}function s(u){clearTimeout(r),r=setTimeout(()=>{const d=t.getPrefixCls(void 0,jt()),m=t.getIconPrefixCls(),p=t.getTheme(),g=N.createElement(io,Object.assign({},u));vn(N.createElement(dt,{prefixCls:d,iconPrefixCls:m,theme:p},t.holderRender?t.holderRender(g):g),n)})}function l(){for(var u=arguments.length,d=new Array(u),m=0;m<u;m++)d[m]=arguments[m];o=Object.assign(Object.assign({},o),{open:!1,afterClose:()=>{typeof e.afterClose=="function"&&e.afterClose(),i.apply(this,d)}}),o.visible&&delete o.visible,s(o)}function c(u){typeof u=="function"?o=u(o):o=Object.assign(Object.assign({},o),u),s(o)}return s(o),oe.push(l),{destroy:l,update:c}}function Pt(e){return Object.assign(Object.assign({},e),{type:"warning"})}function Mt(e){return Object.assign(Object.assign({},e),{type:"info"})}function It(e){return Object.assign(Object.assign({},e),{type:"success"})}function At(e){return Object.assign(Object.assign({},e),{type:"error"})}function Rt(e){return Object.assign(Object.assign({},e),{type:"confirm"})}function ao(e){let{rootPrefixCls:t}=e;Tt=t}var so=globalThis&&globalThis.__rest||function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]]);return n};const lo=(e,t)=>{var n,{afterClose:o,config:r}=e,i=so(e,["afterClose","config"]);const[s,l]=a.useState(!0),[c,u]=a.useState(r),{direction:d,getPrefixCls:m}=a.useContext(be),p=m("modal"),g=m(),v=()=>{var x;o(),(x=c.afterClose)===null||x===void 0||x.call(c)},h=function(){l(!1);for(var x=arguments.length,E=new Array(x),w=0;w<x;w++)E[w]=arguments[w];const j=E.some(O=>O&&O.triggerCancel);c.onCancel&&j&&c.onCancel.apply(c,[()=>{}].concat(G(E.slice(1))))};a.useImperativeHandle(t,()=>({destroy:h,update:x=>{u(E=>Object.assign(Object.assign({},E),x))}}));const S=(n=c.okCancel)!==null&&n!==void 0?n:c.type==="confirm",[b]=Fe("Modal",rn.Modal);return a.createElement(Ot,Object.assign({prefixCls:p,rootPrefixCls:g},c,{close:h,open:s,afterClose:v,okText:c.okText||(S?b==null?void 0:b.okText:b==null?void 0:b.justOkText),direction:c.direction||d,cancelText:c.cancelText||(b==null?void 0:b.cancelText)},i))},co=a.forwardRef(lo);let Je=0;const uo=a.memo(a.forwardRef((e,t)=>{const[n,o]=Mn();return a.useImperativeHandle(t,()=>({patchElement:o}),[]),a.createElement(a.Fragment,null,n)}));function fo(){const e=a.useRef(null),[t,n]=a.useState([]);a.useEffect(()=>{t.length&&(G(t).forEach(s=>{s()}),n([]))},[t]);const o=a.useCallback(i=>function(l){var c;Je+=1;const u=a.createRef();let d;const m=new Promise(S=>{d=S});let p=!1,g;const v=a.createElement(co,{key:`modal-${Je}`,config:i(l),ref:u,afterClose:()=>{g==null||g()},isSilent:()=>p,onConfirm:S=>{d(S)}});return g=(c=e.current)===null||c===void 0?void 0:c.patchElement(v),g&&oe.push(g),{destroy:()=>{function S(){var b;(b=u.current)===null||b===void 0||b.destroy()}u.current?S():n(b=>[].concat(G(b),[S]))},update:S=>{function b(){var x;(x=u.current)===null||x===void 0||x.update(S)}u.current?b():n(x=>[].concat(G(x),[b]))},then:S=>(p=!0,m.then(S))}},[]);return[a.useMemo(()=>({info:o(Mt),success:o(It),error:o(At),warning:o(Pt),confirm:o(Rt)}),[]),a.createElement(uo,{key:"modal-holder",ref:e})]}var mo=globalThis&&globalThis.__rest||function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]]);return n};const po=e=>{const{prefixCls:t,className:n,closeIcon:o,closable:r,type:i,title:s,children:l,footer:c}=e,u=mo(e,["prefixCls","className","closeIcon","closable","type","title","children","footer"]),{getPrefixCls:d}=a.useContext(be),m=d(),p=t||d("modal"),g=ft(m),[v,h,S]=wt(p,g),b=`${p}-confirm`;let x={};return i?x={closable:r??!1,title:"",footer:"",children:a.createElement(Nt,Object.assign({},e,{prefixCls:p,confirmPrefixCls:b,rootPrefixCls:m,content:l}))}:x={closable:r??!0,title:s,footer:c!==null&&a.createElement(bt,Object.assign({},e)),children:l},v(a.createElement(xt,Object.assign({prefixCls:p,className:A(h,`${p}-pure-panel`,i&&b,i&&`${b}-${i}`,n,S,g)},u,{closeIcon:vt(p,o),closable:r},x)))},go=Sn(po);function $t(e){return le(Pt(e))}const z=St;z.useModal=fo;z.info=function(t){return le(Mt(t))};z.success=function(t){return le(It(t))};z.error=function(t){return le(At(t))};z.warning=$t;z.warn=$t;z.confirm=function(t){return le(Rt(t))};z.destroyAll=function(){for(;oe.length;){const t=oe.pop();t&&t()}};z.config=ao;z._InternalPanelDoNotUseOrYouWillBeFired=go;const xo=z,ho=y.div`
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
`,Co=y.div`
  width: 335px;

  padding: 16px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  border-radius: 12px;
  background: rgba(239, 237, 232, 0.05);

  @media screen and (min-width: 1440px) {
    width: 405px;
  }
`,vo=y.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 33px;
`,bo=y.p`
  font-weight: 700;
  font-size: 12px;
  color: white;
  padding: 5px 7px;
  border-radius: 4px;
  width: 73px;
  height: 24px;
  background-color: rgba(239, 237, 232, 0.05);
`,yo=y.button`
  display: flex;
  gap: 8px;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.29;
  color: #e6533c;
  background-color: transparent;
  border: none;
`,Eo=y.div`
  display: flex;
  gap: 16px;
  margin-bottom: 8px;
`,wo=y.p`
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
`,So=y.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 4px 16px;
`,Ne=y.li`
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
  color: rgba(239, 237, 232, 0.4);
`,Oe=y.span`
  color: white;
  text-transform: capitalize;
`,No=y.svg`
  stroke: #e6533c;
`,Oo=y.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: #efa082;
`,To=y.svg`
  fill: #efede8;
`,jo=y.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: flex-start;
  }
`,Po=y.div`
  width: 270px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
  }
`,Mo=y.div`
  @media screen and (min-width: 768px) {
    margin-left: 16px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: flex-end;
    width: 344px;
  }
`,Io=y.img`
  margin-bottom: 14px;
  border: 1px solid ${T.colors.modalBorder};
  border-radius: 12px;
`,Ao=y.p`
  margin-top: 12px;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: ${T.colors.textWhite30};

  & span {
    color: ${T.colors.primary};
  }
`,Ro=y.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 40px;
  min-width: 302px;

  @media screen and (min-width: 768px) {
    margin-top: 0;
    flex-direction: row;
    justify-content: space-between;

    min-width: 344px;
  }
`,ue=y.li`
  width: 147px;

  border: 1px solid ${T.colors.modalBorder};
  border-radius: 12px;
  padding: 12px 18px;

  @media screen and (min-width: 768px) {
    width: 168px;
  }
`,fe=y.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: ${T.colors.textWhite40};
`,me=y.p`
  font-weight: 700;
  font-size: 14px;
  line-height: 18px;

  color: ${T.colors.white};
  text-transform: capitalize;
`,Ge=y.button`
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  width: 150px;
  height: 42px;
  padding: 12px 12px;
  margin-top: 24px;

  background-color: ${T.colors.primary};

  font-weight: 500;
  font-size: 16px;
  line-height: 18px;
  color: ${T.colors.white};

  border-radius: 12px;

  @media screen and (min-width: 768px) {
    margin-top: 32px;

    height: 52px;
  }
`,$o=y.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
`,Bo=y.img`
  width: 118px;

  @media screen and (min-width: 768px) {
    margin-top: 16px;
  }
`,Fo=y.p`
  margin: 27px 0 16px;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  color: ${T.colors.white};

  @media screen and (min-width: 768px) {
    margin: 32px 0 16px;
  }
`,Ye=y.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: ${T.colors.textWhite30};

  & span {
    color: ${T.colors.primary};
  }
`,Lo=y.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 16px;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: ${T.colors.textWhite30};
`,Uo=y.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`,Wo=y.p`
  color: ${T.colors.textWhite40};
  font-size: 10px;
  line-height: 14px;
  margin-bottom: 4px;
`,zo=y.div`
  display: flex;
  justify-content: center;
  transform: rotate(180deg) scaleX(-1);
`,Qe=y.span`
  display: flex;
  justify-content: center;
  text-align: center;
  color: ${T.colors.white};
  font-size: 16px;
  line-height: 24px;
  transform: rotate(180deg) scaleX(-1);
`,et=y.div`
  margin-top: 18px;
  height: 24px;
  width: 24px;

  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${T.colors.primary};
  border-radius: 4px;
`;var tt=typeof window>"u"?a.useEffect:a.useLayoutEffect,Do=({isPlaying:e,duration:t,startAt:n=0,updateInterval:o=0,onComplete:r,onUpdate:i})=>{let[s,l]=a.useState(n),c=a.useRef(0),u=a.useRef(n),d=a.useRef(n*-1e3),m=a.useRef(null),p=a.useRef(null),g=a.useRef(null),v=b=>{let x=b/1e3;if(p.current===null){p.current=x,m.current=requestAnimationFrame(v);return}let E=x-p.current,w=c.current+E;p.current=x,c.current=w;let j=u.current+(o===0?w:(w/o|0)*o),O=u.current+w,P=typeof t=="number"&&O>=t;l(P?t:j),P||(m.current=requestAnimationFrame(v))},h=()=>{m.current&&cancelAnimationFrame(m.current),g.current&&clearTimeout(g.current),p.current=null},S=a.useCallback(b=>{h(),c.current=0;let x=typeof b=="number"?b:n;u.current=x,l(x),e&&(m.current=requestAnimationFrame(v))},[e,n]);return tt(()=>{if(i==null||i(s),t&&s>=t){d.current+=t*1e3;let{shouldRepeat:b=!1,delay:x=0,newStartAt:E}=(r==null?void 0:r(d.current/1e3))||{};b&&(g.current=setTimeout(()=>S(E),x*1e3))}},[s,t]),tt(()=>(e&&(m.current=requestAnimationFrame(v)),h),[e,t,o]),{elapsedTime:s,reset:S}},ko=(e,t,n)=>{let o=e/2,r=t/2,i=o-r,s=2*i,l=n==="clockwise"?"1,0":"0,1",c=2*Math.PI*i;return{path:`m ${o},${r} a ${i},${i} 0 ${l} 0,${s} a ${i},${i} 0 ${l} 0,-${s}`,pathLength:c}},nt=(e,t)=>e===0||e===t?0:typeof t=="number"?e-t:0,Ho=e=>({position:"relative",width:e,height:e}),Vo={display:"flex",justifyContent:"center",alignItems:"center",position:"absolute",left:0,top:0,width:"100%",height:"100%"},Bt=(e,t,n,o,r)=>{if(o===0)return t;let i=(r?o-e:e)/o;return t+n*i},ot=e=>{var t,n;return(n=(t=e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,(o,r,i,s)=>`#${r}${r}${i}${i}${s}${s}`).substring(1).match(/.{2}/g))==null?void 0:t.map(o=>parseInt(o,16)))!=null?n:[]},Ko=(e,t)=>{var n;let{colors:o,colorsTime:r,isSmoothColorTransition:i=!0}=e;if(typeof o=="string")return o;let s=(n=r==null?void 0:r.findIndex((p,g)=>p>=t&&t>=r[g+1]))!=null?n:-1;if(!r||s===-1)return o[0];if(!i)return o[s];let l=r[s]-t,c=r[s]-r[s+1],u=ot(o[s]),d=ot(o[s+1]),m=!!e.isGrowing;return`rgb(${u.map((p,g)=>Bt(l,p,d[g]-p,c,m)|0).join(",")})`},Xo=e=>{let{duration:t,initialRemainingTime:n,updateInterval:o,size:r=180,strokeWidth:i=12,trailStrokeWidth:s,isPlaying:l=!1,isGrowing:c=!1,rotation:u="clockwise",onComplete:d,onUpdate:m}=e,p=a.useRef(),g=Math.max(i,s??0),{path:v,pathLength:h}=ko(r,g,u),{elapsedTime:S}=Do({isPlaying:l,duration:t,startAt:nt(t,n),updateInterval:o,onUpdate:typeof m=="function"?x=>{let E=Math.ceil(t-x);E!==p.current&&(p.current=E,m(E))}:void 0,onComplete:typeof d=="function"?x=>{var E;let{shouldRepeat:w,delay:j,newInitialRemainingTime:O}=(E=d(x))!=null?E:{};if(w)return{shouldRepeat:w,delay:j,newStartAt:nt(t,O)}}:void 0}),b=t-S;return{elapsedTime:S,path:v,pathLength:h,remainingTime:Math.ceil(b),rotation:u,size:r,stroke:Ko(e,b),strokeDashoffset:Bt(S,0,h,t,c),strokeWidth:i}},Ft=e=>{let{children:t,strokeLinecap:n,trailColor:o,trailStrokeWidth:r}=e,{path:i,pathLength:s,stroke:l,strokeDashoffset:c,remainingTime:u,elapsedTime:d,size:m,strokeWidth:p}=Xo(e);return N.createElement("div",{style:Ho(m)},N.createElement("svg",{viewBox:`0 0 ${m} ${m}`,width:m,height:m,xmlns:"http://www.w3.org/2000/svg"},N.createElement("path",{d:i,fill:"none",stroke:o??"#d9d9d9",strokeWidth:r??p}),N.createElement("path",{d:i,fill:"none",stroke:l,strokeLinecap:n??"round",strokeWidth:p,strokeDasharray:s,strokeDashoffset:c})),typeof t=="function"&&N.createElement("div",{style:Vo},t({remainingTime:u,elapsedTime:d,color:l})))};Ft.displayName="CountdownCircleTimer";//! Стейт в якому будуть дані про кількість калорій і час з одної вправи exercises/params
//! Стейт даних для формування запиту на бекенд /diary/exercise
const qo={isSmoothColorTransition:!0,trailColor:T.colors.graphite,isGrowing:!1,rotation:"clockwise",strokeLinecap:"round",strokeWidth:4,trailStrokeWidth:4,updateInterval:0,size:124,isPlaying:!1,colors:T.colors.primary},_o=({time:e,getDataFromTimer:t})=>{const[n,o]=a.useState(!1),[r,i]=a.useState(!1),s=()=>{o(!0)},l=()=>{o(!1)};return a.useEffect(()=>{const c=u=>{r||(u.keyCode===32&&!n?s():l())};return document.addEventListener("keydown",c),()=>{document.removeEventListener("keydown",c)}},[n,r]),f.jsxs(Uo,{children:[f.jsx(Wo,{children:"Time"}),f.jsx(zo,{children:f.jsx(Ft,{...qo,duration:e*60,initialRemainingTime:e*60,isPlaying:n,onUpdate:c=>{c===0&&i(!0),t(c)},onComplete:()=>({shouldRepeat:!1,delay:1}),children:({remainingTime:c})=>Zo(c)})}),n===!1||r===!0?f.jsx(et,{type:"button",onClick:s,children:r!==!0?f.jsx(ae,{icon:"icon-play",size:"14",color:T.colors.white,stroke:T.colors.white}):f.jsx(ae,{icon:"icon-done",size:"14",color:T.colors.white,stroke:T.colors.white})}):f.jsx(et,{type:"button",onClick:l,children:f.jsx(ae,{icon:"icon-pause",size:"14",color:T.colors.white,stroke:T.colors.white})})]})},Zo=e=>{if(e===0)return f.jsx(Qe,{children:"Training completed!"});const t=Math.floor(e/60),n=e%60;return f.jsxs(Qe,{children:[`0${t}`,":",n<10?`0${n}`:n]})};y.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  border: 1px solid rgba(239, 237, 232, 0.2);
  border-radius: 12px;
  background-color: #10100f;

  padding: 48px 24px;

  @media screen and (max-width: 374px) {
    min-width: 300px;
    min-height: 362px;
  }

  @media screen and (min-width: 375px) {
    min-width: 335px;
    min-height: 362px;
  }

  @media screen and (min-width: 768px) {
    min-width: 430px;
    min-height: 428px;
    padding: 64px 24px;
  }
`;const Jo=y.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 14px;
  right: 14px;
  width: 22px;
  height: 22px;
  background: transparent;

  @media (min-width: 768px) {
    top: 16px;
    right: 16px;
    width: 26px;
    height: 26px;
  }
`;const rt=({isOpen:e,onRequestClose:t,children:n})=>f.jsx(f.Fragment,{children:f.jsxs(xo,{centered:!0,open:e,closeIcon:!1,onCancel:t,footer:null,width:"auto",children:[f.jsx(Jo,{type:"button",onClick:t,children:f.jsx(ae,{icon:"icon-cross",size:"22",color:T.colors.white,stroke:T.colors.white,hover:T.colors.primary})}),n]})});let Go={data:""},Yo=e=>typeof window=="object"?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||Go,Qo=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,er=/\/\*[^]*?\*\/|  +/g,it=/\n+/g,Z=(e,t)=>{let n="",o="",r="";for(let i in e){let s=e[i];i[0]=="@"?i[1]=="i"?n=i+" "+s+";":o+=i[1]=="f"?Z(s,i):i+"{"+Z(s,i[1]=="k"?"":t)+"}":typeof s=="object"?o+=Z(s,t?t.replace(/([^,])+/g,l=>i.replace(/(^:.*)|([^,])+/g,c=>/&/.test(c)?c.replace(/&/g,l):l?l+" "+c:c)):i):s!=null&&(i=/^--/.test(i)?i:i.replace(/[A-Z]/g,"-$&").toLowerCase(),r+=Z.p?Z.p(i,s):i+":"+s+";")}return n+(t&&r?t+"{"+r+"}":r)+o},X={},Lt=e=>{if(typeof e=="object"){let t="";for(let n in e)t+=n+Lt(e[n]);return t}return e},tr=(e,t,n,o,r)=>{let i=Lt(e),s=X[i]||(X[i]=(c=>{let u=0,d=11;for(;u<c.length;)d=101*d+c.charCodeAt(u++)>>>0;return"go"+d})(i));if(!X[s]){let c=i!==e?e:(u=>{let d,m,p=[{}];for(;d=Qo.exec(u.replace(er,""));)d[4]?p.shift():d[3]?(m=d[3].replace(it," ").trim(),p.unshift(p[0][m]=p[0][m]||{})):p[0][d[1]]=d[2].replace(it," ").trim();return p[0]})(e);X[s]=Z(r?{["@keyframes "+s]:c}:c,n?"":"."+s)}let l=n&&X.g?X.g:null;return n&&(X.g=X[s]),((c,u,d,m)=>{m?u.data=u.data.replace(m,c):u.data.indexOf(c)===-1&&(u.data=d?c+u.data:u.data+c)})(X[s],t,o,l),s},nr=(e,t,n)=>e.reduce((o,r,i)=>{let s=t[i];if(s&&s.call){let l=s(n),c=l&&l.props&&l.props.className||/^go/.test(l)&&l;s=c?"."+c:l&&typeof l=="object"?l.props?"":Z(l,""):l===!1?"":l}return o+r+(s??"")},"");function ye(e){let t=this||{},n=e.call?e(t.p):e;return tr(n.unshift?n.raw?nr(n,[].slice.call(arguments,1),t.p):n.reduce((o,r)=>Object.assign(o,r&&r.call?r(t.p):r),{}):n,Yo(t.target),t.g,t.o,t.k)}let Ut,Ie,Ae;ye.bind({g:1});let q=ye.bind({k:1});function or(e,t,n,o){Z.p=t,Ut=e,Ie=n,Ae=o}function Y(e,t){let n=this||{};return function(){let o=arguments;function r(i,s){let l=Object.assign({},i),c=l.className||r.className;n.p=Object.assign({theme:Ie&&Ie()},l),n.o=/ *go\d+/.test(c),l.className=ye.apply(n,o)+(c?" "+c:""),t&&(l.ref=s);let u=e;return e[0]&&(u=l.as||e,delete l.as),Ae&&u[0]&&Ae(l),Ut(u,l)}return t?t(r):r}}var rr=e=>typeof e=="function",ve=(e,t)=>rr(e)?e(t):e,ir=(()=>{let e=0;return()=>(++e).toString()})(),Wt=(()=>{let e;return()=>{if(e===void 0&&typeof window<"u"){let t=matchMedia("(prefers-reduced-motion: reduce)");e=!t||t.matches}return e}})(),ar=20,ge=new Map,sr=1e3,at=e=>{if(ge.has(e))return;let t=setTimeout(()=>{ge.delete(e),re({type:4,toastId:e})},sr);ge.set(e,t)},lr=e=>{let t=ge.get(e);t&&clearTimeout(t)},Re=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,ar)};case 1:return t.toast.id&&lr(t.toast.id),{...e,toasts:e.toasts.map(i=>i.id===t.toast.id?{...i,...t.toast}:i)};case 2:let{toast:n}=t;return e.toasts.find(i=>i.id===n.id)?Re(e,{type:1,toast:n}):Re(e,{type:0,toast:n});case 3:let{toastId:o}=t;return o?at(o):e.toasts.forEach(i=>{at(i.id)}),{...e,toasts:e.toasts.map(i=>i.id===o||o===void 0?{...i,visible:!1}:i)};case 4:return t.toastId===void 0?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(i=>i.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let r=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(i=>({...i,pauseDuration:i.pauseDuration+r}))}}},xe=[],he={toasts:[],pausedAt:void 0},re=e=>{he=Re(he,e),xe.forEach(t=>{t(he)})},cr={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},dr=(e={})=>{let[t,n]=a.useState(he);a.useEffect(()=>(xe.push(n),()=>{let r=xe.indexOf(n);r>-1&&xe.splice(r,1)}),[t]);let o=t.toasts.map(r=>{var i,s;return{...e,...e[r.type],...r,duration:r.duration||((i=e[r.type])==null?void 0:i.duration)||(e==null?void 0:e.duration)||cr[r.type],style:{...e.style,...(s=e[r.type])==null?void 0:s.style,...r.style}}});return{...t,toasts:o}},ur=(e,t="blank",n)=>({createdAt:Date.now(),visible:!0,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...n,id:(n==null?void 0:n.id)||ir()}),ce=e=>(t,n)=>{let o=ur(t,e,n);return re({type:2,toast:o}),o.id},F=(e,t)=>ce("blank")(e,t);F.error=ce("error");F.success=ce("success");F.loading=ce("loading");F.custom=ce("custom");F.dismiss=e=>{re({type:3,toastId:e})};F.remove=e=>re({type:4,toastId:e});F.promise=(e,t,n)=>{let o=F.loading(t.loading,{...n,...n==null?void 0:n.loading});return e.then(r=>(F.success(ve(t.success,r),{id:o,...n,...n==null?void 0:n.success}),r)).catch(r=>{F.error(ve(t.error,r),{id:o,...n,...n==null?void 0:n.error})}),e};var fr=(e,t)=>{re({type:1,toast:{id:e,height:t}})},mr=()=>{re({type:5,time:Date.now()})},pr=e=>{let{toasts:t,pausedAt:n}=dr(e);a.useEffect(()=>{if(n)return;let i=Date.now(),s=t.map(l=>{if(l.duration===1/0)return;let c=(l.duration||0)+l.pauseDuration-(i-l.createdAt);if(c<0){l.visible&&F.dismiss(l.id);return}return setTimeout(()=>F.dismiss(l.id),c)});return()=>{s.forEach(l=>l&&clearTimeout(l))}},[t,n]);let o=a.useCallback(()=>{n&&re({type:6,time:Date.now()})},[n]),r=a.useCallback((i,s)=>{let{reverseOrder:l=!1,gutter:c=8,defaultPosition:u}=s||{},d=t.filter(g=>(g.position||u)===(i.position||u)&&g.height),m=d.findIndex(g=>g.id===i.id),p=d.filter((g,v)=>v<m&&g.visible).length;return d.filter(g=>g.visible).slice(...l?[p+1]:[0,p]).reduce((g,v)=>g+(v.height||0)+c,0)},[t]);return{toasts:t,handlers:{updateHeight:fr,startPause:mr,endPause:o,calculateOffset:r}}},gr=q`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,xr=q`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,hr=q`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,Cr=Y("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${gr} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${xr} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${hr} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,vr=q`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,br=Y("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${vr} 1s linear infinite;
`,yr=q`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,Er=q`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,wr=Y("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${yr} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${Er} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,Sr=Y("div")`
  position: absolute;
`,Nr=Y("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,Or=q`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,Tr=Y("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${Or} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,jr=({toast:e})=>{let{icon:t,type:n,iconTheme:o}=e;return t!==void 0?typeof t=="string"?a.createElement(Tr,null,t):t:n==="blank"?null:a.createElement(Nr,null,a.createElement(br,{...o}),n!=="loading"&&a.createElement(Sr,null,n==="error"?a.createElement(Cr,{...o}):a.createElement(wr,{...o})))},Pr=e=>`
0% {transform: translate3d(0,${e*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,Mr=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${e*-150}%,-1px) scale(.6); opacity:0;}
`,Ir="0%{opacity:0;} 100%{opacity:1;}",Ar="0%{opacity:1;} 100%{opacity:0;}",Rr=Y("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,$r=Y("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,Br=(e,t)=>{let n=e.includes("top")?1:-1,[o,r]=Wt()?[Ir,Ar]:[Pr(n),Mr(n)];return{animation:t?`${q(o)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${q(r)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},Fr=a.memo(({toast:e,position:t,style:n,children:o})=>{let r=e.height?Br(e.position||t||"top-center",e.visible):{opacity:0},i=a.createElement(jr,{toast:e}),s=a.createElement($r,{...e.ariaProps},ve(e.message,e));return a.createElement(Rr,{className:e.className,style:{...r,...n,...e.style}},typeof o=="function"?o({icon:i,message:s}):a.createElement(a.Fragment,null,i,s))});or(a.createElement);var Lr=({id:e,className:t,style:n,onHeightUpdate:o,children:r})=>{let i=a.useCallback(s=>{if(s){let l=()=>{let c=s.getBoundingClientRect().height;o(e,c)};l(),new MutationObserver(l).observe(s,{subtree:!0,childList:!0,characterData:!0})}},[e,o]);return a.createElement("div",{ref:i,className:t,style:n},r)},Ur=(e,t)=>{let n=e.includes("top"),o=n?{top:0}:{bottom:0},r=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:Wt()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(n?1:-1)}px)`,...o,...r}},Wr=ye`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,pe=16,zr=({reverseOrder:e,position:t="top-center",toastOptions:n,gutter:o,children:r,containerStyle:i,containerClassName:s})=>{let{toasts:l,handlers:c}=pr(n);return a.createElement("div",{style:{position:"fixed",zIndex:9999,top:pe,left:pe,right:pe,bottom:pe,pointerEvents:"none",...i},className:s,onMouseEnter:c.startPause,onMouseLeave:c.endPause},l.map(u=>{let d=u.position||t,m=c.calculateOffset(u,{reverseOrder:e,gutter:o,defaultPosition:t}),p=Ur(d,m);return a.createElement(Lr,{id:u.id,key:u.id,onHeightUpdate:c.updateHeight,className:u.visible?Wr:"",style:p},u.type==="custom"?ve(u.message,u):r?r(u):a.createElement(Fr,{toast:u,position:d}))}))},Dr=F;const kr="data:image/png;base64,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",Hr="DD/MM/YYYY",Vr=({subcategory:e})=>{const[t,n]=a.useState(!1),[o,r]=a.useState(!1),[i,s]=a.useState(0),[l,c]=a.useState(0),[u,d]=a.useState(0),[m,p]=a.useState(0);a.useEffect(()=>{s(e.time),c(e.burnedCalories)},[e.time,e.burnedCalories]),a.useEffect(()=>{t===!0&&(s(e.time),c(e.burnedCalories))},[t,e.time,e.burnedCalories]),a.useEffect(()=>{(()=>{p(Math.round(l/i*u))})()});const g=async w=>{try{await je.post("/diary/exercise",w)}catch(j){console.error("Error fetching exercises:",j)}},v=async()=>{const{_id:w}=e,j=Nn(Date.now()).format(Hr),O={exerciseId:w,date:j,time:u,burnedCalories:m};if(u<1||m<1){Dr.error("You should work out for more than one minute!");return}alert(JSON.stringify(O,null,2)),await g(O),b(),x()},h=w=>{const j=Number(i-w/60);d(j)};function S(){n(!0)}function b(){n(!1)}function x(){r(!0)}function E(){r(!1)}return f.jsxs(Co,{children:[f.jsx(zr,{position:"top-right",reverseOrder:!1}),t&&f.jsx(rt,{isOpen:t,onRequestClose:b,children:f.jsxs(jo,{children:[f.jsxs(Po,{children:[f.jsx(Io,{src:e.gifUrl,alt:e.name}),f.jsx(_o,{time:i,getDataFromTimer:h}),f.jsxs(Ao,{children:["Burned calories: ",f.jsx("span",{children:m})]})]}),f.jsxs(Mo,{children:[f.jsxs(Ro,{children:[f.jsxs(ue,{children:[f.jsx(fe,{children:"Name"}),f.jsx(me,{children:e.name})]}),f.jsxs(ue,{children:[f.jsx(fe,{children:"Target"}),f.jsx(me,{children:e.target})]}),f.jsxs(ue,{children:[f.jsx(fe,{children:"Body Part"}),f.jsx(me,{children:e.bodyPart})]}),f.jsxs(ue,{children:[f.jsx(fe,{children:"Equipment"}),f.jsx(me,{children:e.equipment})]})]}),f.jsx(Ge,{onClick:v,children:"Add to diary"})]})]})}),o&&f.jsx(rt,{isOpen:o,onRequestClose:E,children:f.jsxs($o,{children:[f.jsx(Bo,{src:kr,alt:"Well done"}),f.jsx(Fo,{children:"Well done"}),f.jsxs(Ye,{style:{marginBottom:"4px"},children:["Your time: ",f.jsx("span",{children:" 3 minutes"})]}),f.jsxs(Ye,{children:["Burned calories: ",f.jsx("span",{children:"150"})]}),f.jsx(Ge,{onClick:E,children:"Next product"}),f.jsxs(Lo,{children:[f.jsx(an,{style:{color:"inherit"},to:"/diary",children:"To the diary"}),f.jsx(ae,{icon:"icon-next",size:"16",color:T.colors.textWhite30})]})]})}),f.jsxs(vo,{children:[f.jsx(bo,{children:"WORKOUT"}),f.jsxs(yo,{onClick:S,children:["Start",f.jsx(No,{width:"16",height:"16",children:f.jsx("use",{href:Pe+"#icon-next"})})]})]}),f.jsxs(Eo,{children:[f.jsx(Oo,{children:f.jsx(To,{width:"14",height:"16",children:f.jsx("use",{href:Pe+"#icon-running"})})}),f.jsx(wo,{children:e.name})]}),f.jsxs(So,{children:[f.jsxs(Ne,{children:["Burned calories: ",f.jsx(Oe,{children:e.burnedCalories})]}),f.jsxs(Ne,{children:["Body part: ",f.jsx(Oe,{children:e.bodyPart})]}),f.jsxs(Ne,{children:["Target: ",f.jsx(Oe,{children:e.target})]})]})]})},Kr=y.li`
  display: block;
  padding-bottom: 16px;

  @media screen and (min-width: 768px) {
    padding-bottom: 16px;
  }

  @media screen and (min-width: 1440px) {
    padding-bottom: 16px;
  }
`,Xr=y.div`
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
`,qr=y.p`
  font-weight: 400;
  font-size: 20px;
  line-height: 1.2;
  color: white;

  margin-top: 81px;
  margin-bottom: 0;
`,_r=y.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
  color: grey;
  margin-top: 2px;
`,Zr=({subcategory:e,onSelect:t})=>f.jsx(Kr,{onClick:()=>t(e.filter,e.name.toLowerCase()),children:f.jsxs(Xr,{style:{backgroundImage:`linear-gradient(rgba(4, 4, 4, 0.5), rgba(4, 4, 4, 0.5)), url(${e.imgURL})`},children:[f.jsx(qr,{children:e.name}),f.jsx(_r,{children:e.filter})]})}),Jr=y.ul`
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
`,Te=y.a`
  font-weight: 400;
  font-size: 14px;
  line-height: 1.29;
  color: grey;
  cursor: pointer;
  &:hover {
    color: orange;
  }
`,Gr=y.div`
  justify-content: space-between;
  gap: 32px;
  margin-bottom: 64px;
  margin-top: 64px;

  @media screen and (min-width: 768px) {
    display: flex;
  }
`,Yr=y.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  margin-top: 23px;
  @media screen and (min-width: 1440px) {
    width: 842px;
  }
`,Qr=y.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  margin-top: 20px;
`,ei=y.button`
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
`,ti=y.h1`
  font-weight: 700;
  font-size: 24px;
  line-height: 1.17;
  color: white;
  margin: 0;
  text-transform: capitalize;
  margin-right: 20px;
`,ni=y.svg`
  transform: rotate(180deg);
  stroke: grey;
  &:hover {
    color: orange;
  }
`,oi=y.div`
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
`,ri={"Body parts":"bodyPart",Equipment:"equipment",Muscles:"target"},ii=()=>{const[e,t]=a.useState([]),[n,o]=a.useState([]),[r,i]=a.useState(null),[s,l]=a.useState("Exercises"),c=r!==null,u=async p=>{i(null);try{const g=await je.get(`/exercises?filter=${p}`);t(g.data[p]),l("Exercises")}catch(g){console.error("Error fetching exercises:",g)}},d=async(p,g)=>{try{const v=await je.get(`/exercises/params?key=${p}&value=${g}`);o(v.data.exercises),l(g)}catch(v){console.error("Error fetching exercises:",v)}};a.useEffect(()=>{u("bodyPart")},[]);const m=()=>c?f.jsxs("div",{children:[f.jsxs(ei,{type:"button",onClick:()=>{document.title="React App",i(null),l("Exercises")},children:[f.jsx(ni,{width:"16",height:"16",children:f.jsx("use",{href:Pe+"#icon-next"})}),"BACK"]}),f.jsx(oi,{style:{height:"500px"},children:f.jsx(Yr,{children:n.length>0?n.map(p=>f.jsx(Vr,{subcategory:p},p._id)):"Empty"})})]}):e&&e.length>0&&f.jsx(Qr,{children:e.map(p=>f.jsx(Zr,{subcategory:p,onSelect:async(g,v)=>{document.title=g,await d(ri[g],v),i([g,v])}},p._id))});return f.jsxs("div",{children:[f.jsxs(Gr,{children:[f.jsx(ti,{children:s}),f.jsxs(Jr,{children:[f.jsx("li",{children:f.jsx(Te,{onClick:()=>u("bodyPart"),children:"Body parts"})}),f.jsx("li",{children:f.jsx(Te,{onClick:()=>u("equipment"),children:"Equipment"})}),f.jsx("li",{children:f.jsx(Te,{onClick:()=>u("target"),children:"Muscles"})})]})]}),m()]})},ai=()=>f.jsxs(ho,{children:[f.jsx(ii,{}),f.jsx(sn,{})]}),pi=ai;export{pi as default};
