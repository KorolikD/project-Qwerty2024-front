import{r as a,D as Z,a7 as Xt,x as j,Z as qt,v as B,f as M,_ as ne,q as Ie,a0 as st,a8 as ke,a9 as Jt,aa as lt,ab as Kt,K as ct,F as Zt,M as $,H as Yt,ac as Gt,G as Qt,h as ve,ad as _t,a6 as en,C as dt,ae as tn,R as nn,af as on,u as C,t as O,j as f,L as rn,e as Pe}from"./index-1e9fb2d9.js";import{E as an}from"./ExercisesSubcategoriesList-c7851f89.js";import{s as Te}from"./sprite-3811d627.js";import{S as ie}from"./SvgCustom-da3455ff.js";import{B as Ae,h as ut,f as sn,P as ln,d as cn,j as Re,i as dn,a as ft,k as un,N as fn,l as mn,z as pn,b as gn,C as xn,m as hn,r as bn}from"./motion-55db76eb.js";import{i as vn,g as he,E as Cn,C as yn}from"./zoom-53ab3e47.js";import{K as Fe,I as wn}from"./KeyCode-cbfc194f.js";import{p as En,C as ze,w as jn,d as Sn}from"./dayjs.min-0465ebff.js";function On(){const[e,t]=a.useState([]),n=a.useCallback(o=>(t(r=>[].concat(Z(r),[o])),()=>{t(r=>r.filter(i=>i!==o))}),[]);return[e,n]}function Le(e){return!!(e&&e.then)}const Pn=e=>{const{type:t,children:n,prefixCls:o,buttonProps:r,close:i,autoFocus:s,emitEvent:l,isSilent:c,quitOnNullishReturnValue:u,actionFn:d}=e,m=a.useRef(!1),p=a.useRef(null),[g,b]=Xt(!1),h=function(){i==null||i.apply(void 0,arguments)};a.useEffect(()=>{let x=null;return s&&(x=setTimeout(()=>{var y;(y=p.current)===null||y===void 0||y.focus()})),()=>{x&&clearTimeout(x)}},[]);const E=x=>{Le(x)&&(b(!0),x.then(function(){b(!1,!0),h.apply(void 0,arguments),m.current=!1},y=>{if(b(!1,!0),m.current=!1,!(c!=null&&c()))return Promise.reject(y)}))},v=x=>{if(m.current)return;if(m.current=!0,!d){h();return}let y;if(l){if(y=d(x),u&&!Le(y)){m.current=!1,h(x);return}}else if(d.length)y=d(i),m.current=!1;else if(y=d(),!y){h();return}E(y)};return a.createElement(Ae,Object.assign({},ut(t),{onClick:v,loading:g,prefixCls:o},r,{ref:p}),n)},mt=Pn,ae=j.createContext({}),{Provider:pt}=ae,Tn=()=>{const{autoFocusButton:e,cancelButtonProps:t,cancelTextLocale:n,isSilent:o,mergedOkCancel:r,rootPrefixCls:i,close:s,onCancel:l,onConfirm:c}=a.useContext(ae);return r?j.createElement(mt,{isSilent:o,actionFn:l,close:function(){s==null||s.apply(void 0,arguments),c==null||c(!1)},autoFocus:e==="cancel",buttonProps:t,prefixCls:`${i}-btn`},n):null},De=Tn,$n=()=>{const{autoFocusButton:e,close:t,isSilent:n,okButtonProps:o,rootPrefixCls:r,okTextLocale:i,okType:s,onConfirm:l,onOk:c}=a.useContext(ae);return j.createElement(mt,{isSilent:n,type:s||"primary",actionFn:c,close:function(){t==null||t.apply(void 0,arguments),l==null||l(!0)},autoFocus:e==="ok",buttonProps:o,prefixCls:`${r}-btn`},i)},He=$n;var gt=a.createContext({});function Ue(e,t,n){var o=t;return!o&&n&&(o="".concat(e,"-").concat(n)),o}function Ve(e,t){var n=e["page".concat(t?"Y":"X","Offset")],o="scroll".concat(t?"Top":"Left");if(typeof n!="number"){var r=e.document;n=r.documentElement[o],typeof n!="number"&&(n=r.body[o])}return n}function Nn(e){var t=e.getBoundingClientRect(),n={left:t.left,top:t.top},o=e.ownerDocument,r=o.defaultView||o.parentWindow;return n.left+=Ve(r),n.top+=Ve(r,!0),n}const Bn=a.memo(function(e){var t=e.children;return t},function(e,t){var n=t.shouldUpdate;return!n});var Xe={width:0,height:0,overflow:"hidden",outline:"none"},xt=j.forwardRef(function(e,t){var n=e.prefixCls,o=e.className,r=e.style,i=e.title,s=e.ariaId,l=e.footer,c=e.closable,u=e.closeIcon,d=e.onClose,m=e.children,p=e.bodyStyle,g=e.bodyProps,b=e.modalRender,h=e.onMouseDown,E=e.onMouseUp,v=e.holderRef,x=e.visible,y=e.forceRender,w=e.width,P=e.height,S=e.classNames,T=e.styles,L=j.useContext(gt),I=L.panel,D=qt(v,I),z=a.useRef(),G=a.useRef();j.useImperativeHandle(t,function(){return{focus:function(){var k;(k=z.current)===null||k===void 0||k.focus()},changeActive:function(k){var Q=document,_=Q.activeElement;k&&_===G.current?z.current.focus():!k&&_===z.current&&G.current.focus()}}});var A={};w!==void 0&&(A.width=w),P!==void 0&&(A.height=P);var W;l&&(W=j.createElement("div",{className:B("".concat(n,"-footer"),S==null?void 0:S.footer),style:M({},T==null?void 0:T.footer)},l));var H;i&&(H=j.createElement("div",{className:B("".concat(n,"-header"),S==null?void 0:S.header),style:M({},T==null?void 0:T.header)},j.createElement("div",{className:"".concat(n,"-title"),id:s},i)));var U;c&&(U=j.createElement("button",{type:"button",onClick:d,"aria-label":"Close",className:"".concat(n,"-close")},u||j.createElement("span",{className:"".concat(n,"-close-x")})));var J=j.createElement("div",{className:B("".concat(n,"-content"),S==null?void 0:S.content),style:T==null?void 0:T.content},U,H,j.createElement("div",ne({className:B("".concat(n,"-body"),S==null?void 0:S.body),style:M(M({},p),T==null?void 0:T.body)},g),m),W);return j.createElement("div",{key:"dialog-element",role:"dialog","aria-labelledby":i?s:null,"aria-modal":"true",ref:D,style:M(M({},r),A),className:B(n,o),onMouseDown:h,onMouseUp:E},j.createElement("div",{tabIndex:0,ref:z,style:Xe,"aria-hidden":"true"}),j.createElement(Bn,{shouldUpdate:x||y},b?b(J):J),j.createElement("div",{tabIndex:0,ref:G,style:Xe,"aria-hidden":"true"}))}),ht=a.forwardRef(function(e,t){var n=e.prefixCls,o=e.title,r=e.style,i=e.className,s=e.visible,l=e.forceRender,c=e.destroyOnClose,u=e.motionName,d=e.ariaId,m=e.onVisibleChanged,p=e.mousePosition,g=a.useRef(),b=a.useState(),h=Ie(b,2),E=h[0],v=h[1],x={};E&&(x.transformOrigin=E);function y(){var w=Nn(g.current);v(p?"".concat(p.x-w.left,"px ").concat(p.y-w.top,"px"):"")}return a.createElement(st,{visible:s,onVisibleChanged:m,onAppearPrepare:y,onEnterPrepare:y,forceRender:l,motionName:u,removeOnLeave:c,ref:g},function(w,P){var S=w.className,T=w.style;return a.createElement(xt,ne({},e,{ref:t,title:o,ariaId:d,prefixCls:n,holderRef:P,style:M(M(M({},T),r),x),className:B(i,S)}))})});ht.displayName="Content";function Mn(e){var t=e.prefixCls,n=e.style,o=e.visible,r=e.maskProps,i=e.motionName,s=e.className;return a.createElement(st,{key:"mask",visible:o,motionName:i,leavedClassName:"".concat(t,"-mask-hidden")},function(l,c){var u=l.className,d=l.style;return a.createElement("div",ne({ref:c,style:M(M({},d),n),className:B("".concat(t,"-mask"),u,s)},r))})}function In(e){var t=e.prefixCls,n=t===void 0?"rc-dialog":t,o=e.zIndex,r=e.visible,i=r===void 0?!1:r,s=e.keyboard,l=s===void 0?!0:s,c=e.focusTriggerAfterClose,u=c===void 0?!0:c,d=e.wrapStyle,m=e.wrapClassName,p=e.wrapProps,g=e.onClose,b=e.afterOpenChange,h=e.afterClose,E=e.transitionName,v=e.animation,x=e.closable,y=x===void 0?!0:x,w=e.mask,P=w===void 0?!0:w,S=e.maskTransitionName,T=e.maskAnimation,L=e.maskClosable,I=L===void 0?!0:L,D=e.maskStyle,z=e.maskProps,G=e.rootClassName,A=e.classNames,W=e.styles,H=a.useRef(),U=a.useRef(),J=a.useRef(),re=a.useState(i),k=Ie(re,2),Q=k[0],_=k[1],ee=sn();function V(){ke(U.current,document.activeElement)||(H.current=document.activeElement)}function Lt(){if(!ke(U.current,document.activeElement)){var N;(N=J.current)===null||N===void 0||N.focus()}}function Dt(N){if(N)Lt();else{if(_(!1),P&&H.current&&u){try{H.current.focus({preventScroll:!0})}catch{}H.current=null}Q&&(h==null||h())}b==null||b(N)}function ye(N){g==null||g(N)}var ce=a.useRef(!1),we=a.useRef(),Ht=function(){clearTimeout(we.current),ce.current=!0},Ut=function(){we.current=setTimeout(function(){ce.current=!1})},We=null;I&&(We=function(Ee){ce.current?ce.current=!1:U.current===Ee.target&&ye(Ee)});function Vt(N){if(l&&N.keyCode===Fe.ESC){N.stopPropagation(),ye(N);return}i&&N.keyCode===Fe.TAB&&J.current.changeActive(!N.shiftKey)}return a.useEffect(function(){i&&(_(!0),V())},[i]),a.useEffect(function(){return function(){clearTimeout(we.current)}},[]),a.createElement("div",ne({className:B("".concat(n,"-root"),G)},En(e,{data:!0})),a.createElement(Mn,{prefixCls:n,visible:P&&i,motionName:Ue(n,S,T),style:M(M({zIndex:o},D),W==null?void 0:W.mask),maskProps:z,className:A==null?void 0:A.mask}),a.createElement("div",ne({tabIndex:-1,onKeyDown:Vt,className:B("".concat(n,"-wrap"),m,A==null?void 0:A.wrapper),ref:U,onClick:We,style:M(M(M({zIndex:o},d),W==null?void 0:W.wrapper),{},{display:Q?null:"none"})},p),a.createElement(ht,ne({},e,{onMouseDown:Ht,onMouseUp:Ut,ref:J,closable:y,ariaId:ee,prefixCls:n,visible:i&&Q,onClose:ye,onVisibleChanged:Dt,motionName:Ue(n,E,v)}))))}var bt=function(t){var n=t.visible,o=t.getContainer,r=t.forceRender,i=t.destroyOnClose,s=i===void 0?!1:i,l=t.afterClose,c=t.panelRef,u=a.useState(n),d=Ie(u,2),m=d[0],p=d[1],g=a.useMemo(function(){return{panel:c}},[c]);return a.useEffect(function(){n&&p(!0)},[n]),!r&&s&&!m?null:a.createElement(gt.Provider,{value:g},a.createElement(ln,{open:n||r||m,autoDestroy:!1,getContainer:o,autoLock:n||m},a.createElement(In,ne({},t,{destroyOnClose:s,afterClose:function(){l==null||l(),p(!1)}}))))};bt.displayName="Dialog";function An(e,t,n){return typeof e=="boolean"?e:t===void 0?!!n:t!==!1&&t!==null}function Rn(e,t,n){let o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:j.createElement(ze,null),r=arguments.length>4&&arguments[4]!==void 0?arguments[4]:!1;if(!An(e,t,r))return[!1,null];const s=typeof t=="boolean"||t===void 0||t===null?o:t;return[!0,n?n(s):s]}const zn=()=>Jt()&&window.document.documentElement;function qe(){}const Wn=a.createContext({add:qe,remove:qe});function kn(e){const t=a.useContext(Wn),n=a.useRef();return cn(r=>{if(r){const i=e?r.querySelector(e):r;t.add(i),n.current=i}else t.remove(n.current)})}const Fn=()=>{const{cancelButtonProps:e,cancelTextLocale:t,onCancel:n}=a.useContext(ae);return j.createElement(Ae,Object.assign({onClick:n},e),t)},Je=Fn,Ln=()=>{const{confirmLoading:e,okButtonProps:t,okType:n,okTextLocale:o,onOk:r}=a.useContext(ae);return j.createElement(Ae,Object.assign({},ut(n),{loading:e,onClick:r},t),o)},Ke=Ln;function vt(e,t){return j.createElement("span",{className:`${e}-close-x`},t||j.createElement(ze,{className:`${e}-close-icon`}))}const Ct=e=>{const{okText:t,okType:n="primary",cancelText:o,confirmLoading:r,onOk:i,onCancel:s,okButtonProps:l,cancelButtonProps:c,footer:u}=e,[d]=Re("Modal",lt()),m=t||(d==null?void 0:d.okText),p=o||(d==null?void 0:d.cancelText),g={confirmLoading:r,okButtonProps:l,cancelButtonProps:c,okTextLocale:m,cancelTextLocale:p,okType:n,onOk:i,onCancel:s},b=j.useMemo(()=>g,Z(Object.values(g)));let h;return typeof u=="function"||typeof u>"u"?(h=j.createElement(j.Fragment,null,j.createElement(Je,null),j.createElement(Ke,null)),typeof u=="function"&&(h=u(h,{OkBtn:Ke,CancelBtn:Je})),h=j.createElement(pt,{value:b},h)):h=u,j.createElement(Kt,{disabled:!1},h)},Dn=new ct("antFadeIn",{"0%":{opacity:0},"100%":{opacity:1}}),Hn=new ct("antFadeOut",{"0%":{opacity:1},"100%":{opacity:0}}),Un=function(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;const{antCls:n}=e,o=`${n}-fade`,r=t?"&":"";return[dn(o,Dn,Hn,e.motionDurationMid,t),{[`
        ${r}${o}-enter,
        ${r}${o}-appear
      `]:{opacity:0,animationTimingFunction:"linear"},[`${r}${o}-leave`]:{animationTimingFunction:"linear"}}]};function Ze(e){return{position:e,inset:0}}const Vn=e=>{const{componentCls:t,antCls:n}=e;return[{[`${t}-root`]:{[`${t}${n}-zoom-enter, ${t}${n}-zoom-appear`]:{transform:"none",opacity:0,animationDuration:e.motionDurationSlow,userSelect:"none"},[`${t}${n}-zoom-leave ${t}-content`]:{pointerEvents:"none"},[`${t}-mask`]:Object.assign(Object.assign({},Ze("fixed")),{zIndex:e.zIndexPopupBase,height:"100%",backgroundColor:e.colorBgMask,pointerEvents:"none",[`${t}-hidden`]:{display:"none"}}),[`${t}-wrap`]:Object.assign(Object.assign({},Ze("fixed")),{zIndex:e.zIndexPopupBase,overflow:"auto",outline:0,WebkitOverflowScrolling:"touch"})}},{[`${t}-root`]:Un(e)}]},Xn=e=>{const{componentCls:t}=e;return[{[`${t}-root`]:{[`${t}-wrap-rtl`]:{direction:"rtl"},[`${t}-centered`]:{textAlign:"center","&::before":{display:"inline-block",width:0,height:"100%",verticalAlign:"middle",content:'""'},[t]:{top:0,display:"inline-block",paddingBottom:0,textAlign:"start",verticalAlign:"middle"}},[`@media (max-width: ${e.screenSMMax}px)`]:{[t]:{maxWidth:"calc(100vw - 16px)",margin:`${$(e.marginXS)} auto`},[`${t}-centered`]:{[t]:{flex:1}}}}},{[t]:Object.assign(Object.assign({},Yt(e)),{pointerEvents:"none",position:"relative",top:100,width:"auto",maxWidth:`calc(100vw - ${$(e.calc(e.margin).mul(2).equal())})`,margin:"0 auto",paddingBottom:e.paddingLG,[`${t}-title`]:{margin:0,color:e.titleColor,fontWeight:e.fontWeightStrong,fontSize:e.titleFontSize,lineHeight:e.titleLineHeight,wordWrap:"break-word"},[`${t}-content`]:{position:"relative",backgroundColor:e.contentBg,backgroundClip:"padding-box",border:0,borderRadius:e.borderRadiusLG,boxShadow:e.boxShadow,pointerEvents:"auto",padding:e.contentPadding},[`${t}-close`]:Object.assign({position:"absolute",top:e.calc(e.modalHeaderHeight).sub(e.modalCloseBtnSize).div(2).equal(),insetInlineEnd:e.calc(e.modalHeaderHeight).sub(e.modalCloseBtnSize).div(2).equal(),zIndex:e.calc(e.zIndexPopupBase).add(10).equal(),padding:0,color:e.modalCloseIconColor,fontWeight:e.fontWeightStrong,lineHeight:1,textDecoration:"none",background:"transparent",borderRadius:e.borderRadiusSM,width:e.modalCloseBtnSize,height:e.modalCloseBtnSize,border:0,outline:0,cursor:"pointer",transition:`color ${e.motionDurationMid}, background-color ${e.motionDurationMid}`,"&-x":{display:"flex",fontSize:e.fontSizeLG,fontStyle:"normal",lineHeight:`${$(e.modalCloseBtnSize)}`,justifyContent:"center",textTransform:"none",textRendering:"auto"},"&:hover":{color:e.modalIconHoverColor,backgroundColor:e.closeBtnHoverBg,textDecoration:"none"},"&:active":{backgroundColor:e.closeBtnActiveBg}},Gt(e)),[`${t}-header`]:{color:e.colorText,background:e.headerBg,borderRadius:`${$(e.borderRadiusLG)} ${$(e.borderRadiusLG)} 0 0`,marginBottom:e.headerMarginBottom,padding:e.headerPadding,borderBottom:e.headerBorderBottom},[`${t}-body`]:{fontSize:e.fontSize,lineHeight:e.lineHeight,wordWrap:"break-word",padding:e.bodyPadding},[`${t}-footer`]:{textAlign:"end",background:e.footerBg,marginTop:e.footerMarginTop,padding:e.footerPadding,borderTop:e.footerBorderTop,borderRadius:e.footerBorderRadius,[`> ${e.antCls}-btn + ${e.antCls}-btn`]:{marginInlineStart:e.marginXS}},[`${t}-open`]:{overflow:"hidden"}})},{[`${t}-pure-panel`]:{top:"auto",padding:0,display:"flex",flexDirection:"column",[`${t}-content,
          ${t}-body,
          ${t}-confirm-body-wrapper`]:{display:"flex",flexDirection:"column",flex:"auto"},[`${t}-confirm-body`]:{marginBottom:"auto"}}}]},qn=e=>{const{componentCls:t}=e;return{[`${t}-root`]:{[`${t}-wrap-rtl`]:{direction:"rtl",[`${t}-confirm-body`]:{direction:"rtl"}}}}},yt=e=>{const t=e.padding,n=e.fontSizeHeading5,o=e.lineHeightHeading5;return Qt(e,{modalHeaderHeight:e.calc(e.calc(o).mul(n).equal()).add(e.calc(t).mul(2).equal()).equal(),modalFooterBorderColorSplit:e.colorSplit,modalFooterBorderStyle:e.lineType,modalFooterBorderWidth:e.lineWidth,modalIconHoverColor:e.colorIconHover,modalCloseIconColor:e.colorIcon,modalCloseBtnSize:e.fontHeight,modalConfirmIconSize:e.fontHeight,modalTitleHeight:e.calc(e.titleFontSize).mul(e.titleLineHeight).equal()})},wt=e=>({footerBg:"transparent",headerBg:e.colorBgElevated,titleLineHeight:e.lineHeightHeading5,titleFontSize:e.fontSizeHeading5,contentBg:e.colorBgElevated,titleColor:e.colorTextHeading,closeBtnHoverBg:e.wireframe?"transparent":e.colorFillContent,closeBtnActiveBg:e.wireframe?"transparent":e.colorFillContentHover,contentPadding:e.wireframe?0:`${$(e.paddingMD)} ${$(e.paddingContentHorizontalLG)}`,headerPadding:e.wireframe?`${$(e.padding)} ${$(e.paddingLG)}`:0,headerBorderBottom:e.wireframe?`${$(e.lineWidth)} ${e.lineType} ${e.colorSplit}`:"none",headerMarginBottom:e.wireframe?0:e.marginXS,bodyPadding:e.wireframe?e.paddingLG:0,footerPadding:e.wireframe?`${$(e.paddingXS)} ${$(e.padding)}`:0,footerBorderTop:e.wireframe?`${$(e.lineWidth)} ${e.lineType} ${e.colorSplit}`:"none",footerBorderRadius:e.wireframe?`0 0 ${$(e.borderRadiusLG)} ${$(e.borderRadiusLG)}`:0,footerMarginTop:e.wireframe?0:e.marginSM,confirmBodyPadding:e.wireframe?`${$(e.padding*2)} ${$(e.padding*2)} ${$(e.paddingLG)}`:0,confirmIconMarginInlineEnd:e.wireframe?e.margin:e.marginSM,confirmBtnsMarginTop:e.wireframe?e.marginLG:e.marginSM}),Et=Zt("Modal",e=>{const t=yt(e);return[Xn(t),qn(t),Vn(t),vn(t,"zoom")]},wt,{unitless:{titleLineHeight:!0}});var Jn=globalThis&&globalThis.__rest||function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]]);return n};let $e;const Kn=e=>{$e={x:e.pageX,y:e.pageY},setTimeout(()=>{$e=null},100)};zn()&&document.documentElement.addEventListener("click",Kn,!0);const Zn=e=>{var t;const{getPopupContainer:n,getPrefixCls:o,direction:r,modal:i}=a.useContext(ve),s=ee=>{const{onCancel:V}=e;V==null||V(ee)},l=ee=>{const{onOk:V}=e;V==null||V(ee)},{prefixCls:c,className:u,rootClassName:d,open:m,wrapClassName:p,centered:g,getContainer:b,closeIcon:h,closable:E,focusTriggerAfterClose:v=!0,style:x,visible:y,width:w=520,footer:P,classNames:S,styles:T}=e,L=Jn(e,["prefixCls","className","rootClassName","open","wrapClassName","centered","getContainer","closeIcon","closable","focusTriggerAfterClose","style","visible","width","footer","classNames","styles"]),I=o("modal",c),D=o(),z=ft(I),[G,A,W]=Et(I,z),H=B(p,{[`${I}-centered`]:!!g,[`${I}-wrap-rtl`]:r==="rtl"}),U=P!==null&&a.createElement(Ct,Object.assign({},e,{onOk:l,onCancel:s})),[J,re]=Rn(E,typeof h<"u"?h:i==null?void 0:i.closeIcon,ee=>vt(I,ee),a.createElement(ze,{className:`${I}-close-icon`}),!0),k=kn(`.${I}-content`),[Q,_]=un("Modal",L.zIndex);return G(a.createElement(fn,null,a.createElement(mn,{status:!0,override:!0},a.createElement(pn.Provider,{value:_},a.createElement(bt,Object.assign({width:w},L,{zIndex:Q,getContainer:b===void 0?n:b,prefixCls:I,rootClassName:B(A,d,W,z),footer:U,visible:m??y,mousePosition:(t=L.mousePosition)!==null&&t!==void 0?t:$e,onClose:s,closable:J,closeIcon:re,focusTriggerAfterClose:v,transitionName:he(D,"zoom",e.transitionName),maskTransitionName:he(D,"fade",e.maskTransitionName),className:B(A,u,i==null?void 0:i.className),style:Object.assign(Object.assign({},i==null?void 0:i.style),x),classNames:Object.assign(Object.assign(Object.assign({},i==null?void 0:i.classNames),S),{wrapper:B(H,S==null?void 0:S.wrapper)}),styles:Object.assign(Object.assign({},i==null?void 0:i.styles),T),panelRef:k}))))))},jt=Zn,Yn=e=>{const{componentCls:t,titleFontSize:n,titleLineHeight:o,modalConfirmIconSize:r,fontSize:i,lineHeight:s,modalTitleHeight:l,fontHeight:c,confirmBodyPadding:u}=e,d=`${t}-confirm`;return{[d]:{"&-rtl":{direction:"rtl"},[`${e.antCls}-modal-header`]:{display:"none"},[`${d}-body-wrapper`]:Object.assign({},en()),[`&${t} ${t}-body`]:{padding:u},[`${d}-body`]:{display:"flex",flexWrap:"nowrap",alignItems:"start",[`> ${e.iconCls}`]:{flex:"none",fontSize:r,marginInlineEnd:e.confirmIconMarginInlineEnd,marginTop:e.calc(e.calc(c).sub(r).equal()).div(2).equal()},[`&-has-title > ${e.iconCls}`]:{marginTop:e.calc(e.calc(l).sub(r).equal()).div(2).equal()}},[`${d}-paragraph`]:{display:"flex",flexDirection:"column",flex:"auto",rowGap:e.marginXS,maxWidth:`calc(100% - ${$(e.calc(e.modalConfirmIconSize).add(e.marginSM).equal())})`},[`${d}-title`]:{color:e.colorTextHeading,fontWeight:e.fontWeightStrong,fontSize:n,lineHeight:o},[`${d}-content`]:{color:e.colorText,fontSize:i,lineHeight:s},[`${d}-btns`]:{textAlign:"end",marginTop:e.confirmBtnsMarginTop,[`${e.antCls}-btn + ${e.antCls}-btn`]:{marginBottom:0,marginInlineStart:e.marginXS}}},[`${d}-error ${d}-body > ${e.iconCls}`]:{color:e.colorError},[`${d}-warning ${d}-body > ${e.iconCls},
        ${d}-confirm ${d}-body > ${e.iconCls}`]:{color:e.colorWarning},[`${d}-info ${d}-body > ${e.iconCls}`]:{color:e.colorInfo},[`${d}-success ${d}-body > ${e.iconCls}`]:{color:e.colorSuccess}}},Gn=_t(["Modal","confirm"],e=>{const t=yt(e);return[Yn(t)]},wt,{order:-1e3});var Qn=globalThis&&globalThis.__rest||function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]]);return n};function St(e){const{prefixCls:t,icon:n,okText:o,cancelText:r,confirmPrefixCls:i,type:s,okCancel:l,footer:c,locale:u}=e,d=Qn(e,["prefixCls","icon","okText","cancelText","confirmPrefixCls","type","okCancel","footer","locale"]);let m=n;if(!n&&n!==null)switch(s){case"info":m=a.createElement(wn,null);break;case"success":m=a.createElement(yn,null);break;case"error":m=a.createElement(gn,null);break;default:m=a.createElement(Cn,null)}const p=l??s==="confirm",g=e.autoFocusButton===null?!1:e.autoFocusButton||"ok",[b]=Re("Modal"),h=u||b,E=o||(p?h==null?void 0:h.okText:h==null?void 0:h.justOkText),v=r||(h==null?void 0:h.cancelText),x=Object.assign({autoFocusButton:g,cancelTextLocale:v,okTextLocale:E,mergedOkCancel:p},d),y=a.useMemo(()=>x,Z(Object.values(x))),w=a.createElement(a.Fragment,null,a.createElement(De,null),a.createElement(He,null)),P=e.title!==void 0&&e.title!==null,S=`${i}-body`;return a.createElement("div",{className:`${i}-body-wrapper`},a.createElement("div",{className:B(S,{[`${S}-has-title`]:P})},m,a.createElement("div",{className:`${i}-paragraph`},P&&a.createElement("span",{className:`${i}-title`},e.title),a.createElement("div",{className:`${i}-content`},e.content))),c===void 0||typeof c=="function"?a.createElement(pt,{value:y},a.createElement("div",{className:`${i}-btns`},typeof c=="function"?c(w,{OkBtn:He,CancelBtn:De}):w)):c,a.createElement(Gn,{prefixCls:t}))}const _n=e=>{const{close:t,zIndex:n,afterClose:o,open:r,keyboard:i,centered:s,getContainer:l,maskStyle:c,direction:u,prefixCls:d,wrapClassName:m,rootPrefixCls:p,bodyStyle:g,closable:b=!1,closeIcon:h,modalRender:E,focusTriggerAfterClose:v,onConfirm:x,styles:y}=e,w=`${d}-confirm`,P=e.width||416,S=e.style||{},T=e.mask===void 0?!0:e.mask,L=e.maskClosable===void 0?!1:e.maskClosable,I=B(w,`${w}-${e.type}`,{[`${w}-rtl`]:u==="rtl"},e.className),[,D]=tn(),z=a.useMemo(()=>n!==void 0?n:D.zIndexPopupBase+xn,[n,D]);return a.createElement(jt,{prefixCls:d,className:I,wrapClassName:B({[`${w}-centered`]:!!e.centered},m),onCancel:()=>{t==null||t({triggerCancel:!0}),x==null||x(!1)},open:r,title:"",footer:null,transitionName:he(p||"","zoom",e.transitionName),maskTransitionName:he(p||"","fade",e.maskTransitionName),mask:T,maskClosable:L,style:S,styles:Object.assign({body:g,mask:c},y),width:P,zIndex:z,afterClose:o,keyboard:i,centered:s,getContainer:l,closable:b,closeIcon:h,modalRender:E,focusTriggerAfterClose:v},a.createElement(St,Object.assign({},e,{confirmPrefixCls:w})))},Ot=e=>{const{rootPrefixCls:t,iconPrefixCls:n,direction:o,theme:r}=e;return a.createElement(dt,{prefixCls:t,iconPrefixCls:n,direction:o,theme:r},a.createElement(_n,Object.assign({},e)))},eo=[],te=eo;let Pt="";function Tt(){return Pt}const to=e=>{var t,n;const{prefixCls:o,getContainer:r,direction:i}=e,s=lt(),l=a.useContext(ve),c=Tt()||l.getPrefixCls(),u=o||`${c}-modal`;let d=r;return d===!1&&(d=void 0),j.createElement(Ot,Object.assign({},e,{rootPrefixCls:c,prefixCls:u,iconPrefixCls:l.iconPrefixCls,theme:l.theme,direction:i??l.direction,locale:(n=(t=l.locale)===null||t===void 0?void 0:t.Modal)!==null&&n!==void 0?n:s,getContainer:d}))};function se(e){const t=nn(),n=document.createDocumentFragment();let o=Object.assign(Object.assign({},e),{close:l,open:!0}),r;function i(){for(var u=arguments.length,d=new Array(u),m=0;m<u;m++)d[m]=arguments[m];const p=d.some(g=>g&&g.triggerCancel);e.onCancel&&p&&e.onCancel.apply(e,[()=>{}].concat(Z(d.slice(1))));for(let g=0;g<te.length;g++)if(te[g]===l){te.splice(g,1);break}hn(n)}function s(u){clearTimeout(r),r=setTimeout(()=>{const d=t.getPrefixCls(void 0,Tt()),m=t.getIconPrefixCls(),p=t.getTheme(),g=j.createElement(to,Object.assign({},u));bn(j.createElement(dt,{prefixCls:d,iconPrefixCls:m,theme:p},t.holderRender?t.holderRender(g):g),n)})}function l(){for(var u=arguments.length,d=new Array(u),m=0;m<u;m++)d[m]=arguments[m];o=Object.assign(Object.assign({},o),{open:!1,afterClose:()=>{typeof e.afterClose=="function"&&e.afterClose(),i.apply(this,d)}}),o.visible&&delete o.visible,s(o)}function c(u){typeof u=="function"?o=u(o):o=Object.assign(Object.assign({},o),u),s(o)}return s(o),te.push(l),{destroy:l,update:c}}function $t(e){return Object.assign(Object.assign({},e),{type:"warning"})}function Nt(e){return Object.assign(Object.assign({},e),{type:"info"})}function Bt(e){return Object.assign(Object.assign({},e),{type:"success"})}function Mt(e){return Object.assign(Object.assign({},e),{type:"error"})}function It(e){return Object.assign(Object.assign({},e),{type:"confirm"})}function no(e){let{rootPrefixCls:t}=e;Pt=t}var oo=globalThis&&globalThis.__rest||function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]]);return n};const ro=(e,t)=>{var n,{afterClose:o,config:r}=e,i=oo(e,["afterClose","config"]);const[s,l]=a.useState(!0),[c,u]=a.useState(r),{direction:d,getPrefixCls:m}=a.useContext(ve),p=m("modal"),g=m(),b=()=>{var x;o(),(x=c.afterClose)===null||x===void 0||x.call(c)},h=function(){l(!1);for(var x=arguments.length,y=new Array(x),w=0;w<x;w++)y[w]=arguments[w];const P=y.some(S=>S&&S.triggerCancel);c.onCancel&&P&&c.onCancel.apply(c,[()=>{}].concat(Z(y.slice(1))))};a.useImperativeHandle(t,()=>({destroy:h,update:x=>{u(y=>Object.assign(Object.assign({},y),x))}}));const E=(n=c.okCancel)!==null&&n!==void 0?n:c.type==="confirm",[v]=Re("Modal",on.Modal);return a.createElement(Ot,Object.assign({prefixCls:p,rootPrefixCls:g},c,{close:h,open:s,afterClose:b,okText:c.okText||(E?v==null?void 0:v.okText:v==null?void 0:v.justOkText),direction:c.direction||d,cancelText:c.cancelText||(v==null?void 0:v.cancelText)},i))},io=a.forwardRef(ro);let Ye=0;const ao=a.memo(a.forwardRef((e,t)=>{const[n,o]=On();return a.useImperativeHandle(t,()=>({patchElement:o}),[]),a.createElement(a.Fragment,null,n)}));function so(){const e=a.useRef(null),[t,n]=a.useState([]);a.useEffect(()=>{t.length&&(Z(t).forEach(s=>{s()}),n([]))},[t]);const o=a.useCallback(i=>function(l){var c;Ye+=1;const u=a.createRef();let d;const m=new Promise(E=>{d=E});let p=!1,g;const b=a.createElement(io,{key:`modal-${Ye}`,config:i(l),ref:u,afterClose:()=>{g==null||g()},isSilent:()=>p,onConfirm:E=>{d(E)}});return g=(c=e.current)===null||c===void 0?void 0:c.patchElement(b),g&&te.push(g),{destroy:()=>{function E(){var v;(v=u.current)===null||v===void 0||v.destroy()}u.current?E():n(v=>[].concat(Z(v),[E]))},update:E=>{function v(){var x;(x=u.current)===null||x===void 0||x.update(E)}u.current?v():n(x=>[].concat(Z(x),[v]))},then:E=>(p=!0,m.then(E))}},[]);return[a.useMemo(()=>({info:o(Nt),success:o(Bt),error:o(Mt),warning:o($t),confirm:o(It)}),[]),a.createElement(ao,{key:"modal-holder",ref:e})]}var lo=globalThis&&globalThis.__rest||function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]]);return n};const co=e=>{const{prefixCls:t,className:n,closeIcon:o,closable:r,type:i,title:s,children:l,footer:c}=e,u=lo(e,["prefixCls","className","closeIcon","closable","type","title","children","footer"]),{getPrefixCls:d}=a.useContext(ve),m=d(),p=t||d("modal"),g=ft(m),[b,h,E]=Et(p,g),v=`${p}-confirm`;let x={};return i?x={closable:r??!1,title:"",footer:"",children:a.createElement(St,Object.assign({},e,{prefixCls:p,confirmPrefixCls:v,rootPrefixCls:m,content:l}))}:x={closable:r??!0,title:s,footer:c!==null&&a.createElement(Ct,Object.assign({},e)),children:l},b(a.createElement(xt,Object.assign({prefixCls:p,className:B(h,`${p}-pure-panel`,i&&v,i&&`${v}-${i}`,n,E,g)},u,{closeIcon:vt(p,o),closable:r},x)))},uo=jn(co);function At(e){return se($t(e))}const F=jt;F.useModal=so;F.info=function(t){return se(Nt(t))};F.success=function(t){return se(Bt(t))};F.error=function(t){return se(Mt(t))};F.warning=At;F.warn=At;F.confirm=function(t){return se(It(t))};F.destroyAll=function(){for(;te.length;){const t=te.pop();t&&t()}};F.config=no;F._InternalPanelDoNotUseOrYouWillBeFired=uo;const fo=F,mo=C.div`
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
`,po=C.div`
  width: 335px;

  padding: 16px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  border-radius: 12px;
  background: rgba(239, 237, 232, 0.05);

  @media screen and (min-width: 1440px) {
    width: 405px;
  }
`,go=C.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 33px;
`,xo=C.p`
  font-weight: 700;
  font-size: 12px;
  color: white;
  padding: 5px 7px;
  border-radius: 4px;
  width: 73px;
  height: 24px;
  background-color: rgba(239, 237, 232, 0.05);
`,ho=C.button`
  display: flex;
  gap: 8px;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.29;
  color: #e6533c;
  background-color: transparent;
  border: none;
`,bo=C.div`
  display: flex;
  gap: 16px;
  margin-bottom: 8px;
`,vo=C.p`
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
`,Co=C.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 4px 16px;
`,je=C.li`
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
  color: rgba(239, 237, 232, 0.4);
`,Se=C.span`
  color: white;
  text-transform: capitalize;
`,yo=C.svg`
  stroke: #e6533c;
`,wo=C.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: #efa082;
`,Eo=C.svg`
  fill: #efede8;
`,jo=C.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: flex-start;
  }
`,So=C.div`
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
`,Oo=C.div`
  @media screen and (min-width: 768px) {
    margin-left: 16px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: flex-end;
    width: 344px;
  }
`,Po=C.img`
  margin-bottom: 14px;
  border: 1px solid ${O.colors.modalBorder};
  border-radius: 12px;
`,To=C.p`
  margin-top: 12px;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: ${O.colors.textWhite30};

  & span {
    color: ${O.colors.primary};
  }
`,$o=C.ul`
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
`,de=C.li`
  width: 147px;

  border: 1px solid ${O.colors.modalBorder};
  border-radius: 12px;
  padding: 12px 18px;

  @media screen and (min-width: 768px) {
    width: 168px;
  }
`,ue=C.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: ${O.colors.textWhite40};
`,fe=C.p`
  font-weight: 700;
  font-size: 14px;
  line-height: 18px;

  color: ${O.colors.white};
  text-transform: capitalize;
`,Ge=C.button`
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  width: 150px;
  height: 42px;
  padding: 12px 12px;
  margin-top: 24px;

  background-color: ${O.colors.primary};

  font-weight: 500;
  font-size: 16px;
  line-height: 18px;
  color: ${O.colors.white};

  border-radius: 12px;

  @media screen and (min-width: 768px) {
    margin-top: 32px;

    height: 52px;
  }
`,No=C.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
`,Bo=C.img`
  width: 118px;

  @media screen and (min-width: 768px) {
    margin-top: 16px;
  }
`,Mo=C.p`
  margin: 27px 0 16px;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  color: ${O.colors.white};

  @media screen and (min-width: 768px) {
    margin: 32px 0 16px;
  }
`,Qe=C.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: ${O.colors.textWhite30};

  & span {
    color: ${O.colors.primary};
  }
`,Io=C.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 16px;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: ${O.colors.textWhite30};
`,Ao=C.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`,Ro=C.p`
  color: ${O.colors.textWhite40};
  font-size: 10px;
  line-height: 14px;
  margin-bottom: 4px;
`,zo=C.div`
  display: flex;
  justify-content: center;
  transform: rotate(180deg) scaleX(-1);
`,_e=C.span`
  display: flex;
  justify-content: center;
  text-align: center;
  color: ${O.colors.white};
  font-size: 16px;
  line-height: 24px;
  transform: rotate(180deg) scaleX(-1);
`,et=C.div`
  margin-top: 18px;
  height: 24px;
  width: 24px;

  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${O.colors.primary};
  border-radius: 4px;
`;var tt=typeof window>"u"?a.useEffect:a.useLayoutEffect,Wo=({isPlaying:e,duration:t,startAt:n=0,updateInterval:o=0,onComplete:r,onUpdate:i})=>{let[s,l]=a.useState(n),c=a.useRef(0),u=a.useRef(n),d=a.useRef(n*-1e3),m=a.useRef(null),p=a.useRef(null),g=a.useRef(null),b=v=>{let x=v/1e3;if(p.current===null){p.current=x,m.current=requestAnimationFrame(b);return}let y=x-p.current,w=c.current+y;p.current=x,c.current=w;let P=u.current+(o===0?w:(w/o|0)*o),S=u.current+w,T=typeof t=="number"&&S>=t;l(T?t:P),T||(m.current=requestAnimationFrame(b))},h=()=>{m.current&&cancelAnimationFrame(m.current),g.current&&clearTimeout(g.current),p.current=null},E=a.useCallback(v=>{h(),c.current=0;let x=typeof v=="number"?v:n;u.current=x,l(x),e&&(m.current=requestAnimationFrame(b))},[e,n]);return tt(()=>{if(i==null||i(s),t&&s>=t){d.current+=t*1e3;let{shouldRepeat:v=!1,delay:x=0,newStartAt:y}=(r==null?void 0:r(d.current/1e3))||{};v&&(g.current=setTimeout(()=>E(y),x*1e3))}},[s,t]),tt(()=>(e&&(m.current=requestAnimationFrame(b)),h),[e,t,o]),{elapsedTime:s,reset:E}},ko=(e,t,n)=>{let o=e/2,r=t/2,i=o-r,s=2*i,l=n==="clockwise"?"1,0":"0,1",c=2*Math.PI*i;return{path:`m ${o},${r} a ${i},${i} 0 ${l} 0,${s} a ${i},${i} 0 ${l} 0,-${s}`,pathLength:c}},nt=(e,t)=>e===0||e===t?0:typeof t=="number"?e-t:0,Fo=e=>({position:"relative",width:e,height:e}),Lo={display:"flex",justifyContent:"center",alignItems:"center",position:"absolute",left:0,top:0,width:"100%",height:"100%"},Rt=(e,t,n,o,r)=>{if(o===0)return t;let i=(r?o-e:e)/o;return t+n*i},ot=e=>{var t,n;return(n=(t=e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,(o,r,i,s)=>`#${r}${r}${i}${i}${s}${s}`).substring(1).match(/.{2}/g))==null?void 0:t.map(o=>parseInt(o,16)))!=null?n:[]},Do=(e,t)=>{var n;let{colors:o,colorsTime:r,isSmoothColorTransition:i=!0}=e;if(typeof o=="string")return o;let s=(n=r==null?void 0:r.findIndex((p,g)=>p>=t&&t>=r[g+1]))!=null?n:-1;if(!r||s===-1)return o[0];if(!i)return o[s];let l=r[s]-t,c=r[s]-r[s+1],u=ot(o[s]),d=ot(o[s+1]),m=!!e.isGrowing;return`rgb(${u.map((p,g)=>Rt(l,p,d[g]-p,c,m)|0).join(",")})`},Ho=e=>{let{duration:t,initialRemainingTime:n,updateInterval:o,size:r=180,strokeWidth:i=12,trailStrokeWidth:s,isPlaying:l=!1,isGrowing:c=!1,rotation:u="clockwise",onComplete:d,onUpdate:m}=e,p=a.useRef(),g=Math.max(i,s??0),{path:b,pathLength:h}=ko(r,g,u),{elapsedTime:E}=Wo({isPlaying:l,duration:t,startAt:nt(t,n),updateInterval:o,onUpdate:typeof m=="function"?x=>{let y=Math.ceil(t-x);y!==p.current&&(p.current=y,m(y))}:void 0,onComplete:typeof d=="function"?x=>{var y;let{shouldRepeat:w,delay:P,newInitialRemainingTime:S}=(y=d(x))!=null?y:{};if(w)return{shouldRepeat:w,delay:P,newStartAt:nt(t,S)}}:void 0}),v=t-E;return{elapsedTime:E,path:b,pathLength:h,remainingTime:Math.ceil(v),rotation:u,size:r,stroke:Do(e,v),strokeDashoffset:Rt(E,0,h,t,c),strokeWidth:i}},zt=e=>{let{children:t,strokeLinecap:n,trailColor:o,trailStrokeWidth:r}=e,{path:i,pathLength:s,stroke:l,strokeDashoffset:c,remainingTime:u,elapsedTime:d,size:m,strokeWidth:p}=Ho(e);return j.createElement("div",{style:Fo(m)},j.createElement("svg",{viewBox:`0 0 ${m} ${m}`,width:m,height:m,xmlns:"http://www.w3.org/2000/svg"},j.createElement("path",{d:i,fill:"none",stroke:o??"#d9d9d9",strokeWidth:r??p}),j.createElement("path",{d:i,fill:"none",stroke:l,strokeLinecap:n??"round",strokeWidth:p,strokeDasharray:s,strokeDashoffset:c})),typeof t=="function"&&j.createElement("div",{style:Lo},t({remainingTime:u,elapsedTime:d,color:l})))};zt.displayName="CountdownCircleTimer";//! Стейт в якому будуть дані про кількість калорій і час з одної вправи exercises/params
//! Стейт даних для формування запиту на бекенд /diary/exercise
const Uo={isSmoothColorTransition:!0,trailColor:O.colors.graphite,isGrowing:!1,rotation:"clockwise",strokeLinecap:"round",strokeWidth:4,trailStrokeWidth:4,updateInterval:0,size:124,isPlaying:!1,colors:O.colors.primary},Vo=({time:e,getDataFromTimer:t})=>{const[n,o]=a.useState(!1),[r,i]=a.useState(!1),s=()=>{o(!0)},l=()=>{o(!1)};return a.useEffect(()=>{const c=u=>{r||(u.keyCode===32&&!n?s():l())};return document.addEventListener("keydown",c),()=>{document.removeEventListener("keydown",c)}},[n,r]),f.jsxs(Ao,{children:[f.jsx(Ro,{children:"Time"}),f.jsx(zo,{children:f.jsx(zt,{...Uo,duration:e*60,initialRemainingTime:e*60,isPlaying:n,onUpdate:c=>{c===0&&i(!0),t(c)},onComplete:()=>({shouldRepeat:!1,delay:1}),children:({remainingTime:c})=>Xo(c)})}),n===!1||r===!0?f.jsx(et,{type:"button",onClick:s,children:r!==!0?f.jsx(ie,{icon:"icon-play",size:"14",color:O.colors.white,stroke:O.colors.white}):f.jsx(ie,{icon:"icon-done",size:"14",color:O.colors.white,stroke:O.colors.white})}):f.jsx(et,{type:"button",onClick:l,children:f.jsx(ie,{icon:"icon-pause",size:"14",color:O.colors.white,stroke:O.colors.white})})]})},Xo=e=>{if(e===0)return f.jsx(_e,{children:"Training completed!"});const t=Math.floor(e/60),n=e%60;return f.jsxs(_e,{children:[`0${t}`,":",n<10?`0${n}`:n]})};C.div`
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
`;const qo=C.button`
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
`;const rt=({isOpen:e,onRequestClose:t,children:n})=>f.jsx(f.Fragment,{children:f.jsxs(fo,{centered:!0,open:e,closeIcon:!1,onCancel:t,footer:null,width:"auto",children:[f.jsx(qo,{type:"button",onClick:t,children:f.jsx(ie,{icon:"icon-cross",size:"22",color:O.colors.white,stroke:O.colors.white,hover:O.colors.primary})}),n]})});let Jo={data:""},Ko=e=>typeof window=="object"?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||Jo,Zo=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,Yo=/\/\*[^]*?\*\/|  +/g,it=/\n+/g,K=(e,t)=>{let n="",o="",r="";for(let i in e){let s=e[i];i[0]=="@"?i[1]=="i"?n=i+" "+s+";":o+=i[1]=="f"?K(s,i):i+"{"+K(s,i[1]=="k"?"":t)+"}":typeof s=="object"?o+=K(s,t?t.replace(/([^,])+/g,l=>i.replace(/(^:.*)|([^,])+/g,c=>/&/.test(c)?c.replace(/&/g,l):l?l+" "+c:c)):i):s!=null&&(i=/^--/.test(i)?i:i.replace(/[A-Z]/g,"-$&").toLowerCase(),r+=K.p?K.p(i,s):i+":"+s+";")}return n+(t&&r?t+"{"+r+"}":r)+o},X={},Wt=e=>{if(typeof e=="object"){let t="";for(let n in e)t+=n+Wt(e[n]);return t}return e},Go=(e,t,n,o,r)=>{let i=Wt(e),s=X[i]||(X[i]=(c=>{let u=0,d=11;for(;u<c.length;)d=101*d+c.charCodeAt(u++)>>>0;return"go"+d})(i));if(!X[s]){let c=i!==e?e:(u=>{let d,m,p=[{}];for(;d=Zo.exec(u.replace(Yo,""));)d[4]?p.shift():d[3]?(m=d[3].replace(it," ").trim(),p.unshift(p[0][m]=p[0][m]||{})):p[0][d[1]]=d[2].replace(it," ").trim();return p[0]})(e);X[s]=K(r?{["@keyframes "+s]:c}:c,n?"":"."+s)}let l=n&&X.g?X.g:null;return n&&(X.g=X[s]),((c,u,d,m)=>{m?u.data=u.data.replace(m,c):u.data.indexOf(c)===-1&&(u.data=d?c+u.data:u.data+c)})(X[s],t,o,l),s},Qo=(e,t,n)=>e.reduce((o,r,i)=>{let s=t[i];if(s&&s.call){let l=s(n),c=l&&l.props&&l.props.className||/^go/.test(l)&&l;s=c?"."+c:l&&typeof l=="object"?l.props?"":K(l,""):l===!1?"":l}return o+r+(s??"")},"");function Ce(e){let t=this||{},n=e.call?e(t.p):e;return Go(n.unshift?n.raw?Qo(n,[].slice.call(arguments,1),t.p):n.reduce((o,r)=>Object.assign(o,r&&r.call?r(t.p):r),{}):n,Ko(t.target),t.g,t.o,t.k)}let kt,Ne,Be;Ce.bind({g:1});let q=Ce.bind({k:1});function _o(e,t,n,o){K.p=t,kt=e,Ne=n,Be=o}function Y(e,t){let n=this||{};return function(){let o=arguments;function r(i,s){let l=Object.assign({},i),c=l.className||r.className;n.p=Object.assign({theme:Ne&&Ne()},l),n.o=/ *go\d+/.test(c),l.className=Ce.apply(n,o)+(c?" "+c:""),t&&(l.ref=s);let u=e;return e[0]&&(u=l.as||e,delete l.as),Be&&u[0]&&Be(l),kt(u,l)}return t?t(r):r}}var er=e=>typeof e=="function",be=(e,t)=>er(e)?e(t):e,tr=(()=>{let e=0;return()=>(++e).toString()})(),Ft=(()=>{let e;return()=>{if(e===void 0&&typeof window<"u"){let t=matchMedia("(prefers-reduced-motion: reduce)");e=!t||t.matches}return e}})(),nr=20,pe=new Map,or=1e3,at=e=>{if(pe.has(e))return;let t=setTimeout(()=>{pe.delete(e),oe({type:4,toastId:e})},or);pe.set(e,t)},rr=e=>{let t=pe.get(e);t&&clearTimeout(t)},Me=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,nr)};case 1:return t.toast.id&&rr(t.toast.id),{...e,toasts:e.toasts.map(i=>i.id===t.toast.id?{...i,...t.toast}:i)};case 2:let{toast:n}=t;return e.toasts.find(i=>i.id===n.id)?Me(e,{type:1,toast:n}):Me(e,{type:0,toast:n});case 3:let{toastId:o}=t;return o?at(o):e.toasts.forEach(i=>{at(i.id)}),{...e,toasts:e.toasts.map(i=>i.id===o||o===void 0?{...i,visible:!1}:i)};case 4:return t.toastId===void 0?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(i=>i.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let r=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(i=>({...i,pauseDuration:i.pauseDuration+r}))}}},ge=[],xe={toasts:[],pausedAt:void 0},oe=e=>{xe=Me(xe,e),ge.forEach(t=>{t(xe)})},ir={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},ar=(e={})=>{let[t,n]=a.useState(xe);a.useEffect(()=>(ge.push(n),()=>{let r=ge.indexOf(n);r>-1&&ge.splice(r,1)}),[t]);let o=t.toasts.map(r=>{var i,s;return{...e,...e[r.type],...r,duration:r.duration||((i=e[r.type])==null?void 0:i.duration)||(e==null?void 0:e.duration)||ir[r.type],style:{...e.style,...(s=e[r.type])==null?void 0:s.style,...r.style}}});return{...t,toasts:o}},sr=(e,t="blank",n)=>({createdAt:Date.now(),visible:!0,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...n,id:(n==null?void 0:n.id)||tr()}),le=e=>(t,n)=>{let o=sr(t,e,n);return oe({type:2,toast:o}),o.id},R=(e,t)=>le("blank")(e,t);R.error=le("error");R.success=le("success");R.loading=le("loading");R.custom=le("custom");R.dismiss=e=>{oe({type:3,toastId:e})};R.remove=e=>oe({type:4,toastId:e});R.promise=(e,t,n)=>{let o=R.loading(t.loading,{...n,...n==null?void 0:n.loading});return e.then(r=>(R.success(be(t.success,r),{id:o,...n,...n==null?void 0:n.success}),r)).catch(r=>{R.error(be(t.error,r),{id:o,...n,...n==null?void 0:n.error})}),e};var lr=(e,t)=>{oe({type:1,toast:{id:e,height:t}})},cr=()=>{oe({type:5,time:Date.now()})},dr=e=>{let{toasts:t,pausedAt:n}=ar(e);a.useEffect(()=>{if(n)return;let i=Date.now(),s=t.map(l=>{if(l.duration===1/0)return;let c=(l.duration||0)+l.pauseDuration-(i-l.createdAt);if(c<0){l.visible&&R.dismiss(l.id);return}return setTimeout(()=>R.dismiss(l.id),c)});return()=>{s.forEach(l=>l&&clearTimeout(l))}},[t,n]);let o=a.useCallback(()=>{n&&oe({type:6,time:Date.now()})},[n]),r=a.useCallback((i,s)=>{let{reverseOrder:l=!1,gutter:c=8,defaultPosition:u}=s||{},d=t.filter(g=>(g.position||u)===(i.position||u)&&g.height),m=d.findIndex(g=>g.id===i.id),p=d.filter((g,b)=>b<m&&g.visible).length;return d.filter(g=>g.visible).slice(...l?[p+1]:[0,p]).reduce((g,b)=>g+(b.height||0)+c,0)},[t]);return{toasts:t,handlers:{updateHeight:lr,startPause:cr,endPause:o,calculateOffset:r}}},ur=q`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,fr=q`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,mr=q`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,pr=Y("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${ur} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${fr} 0.15s ease-out forwards;
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
    animation: ${mr} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,gr=q`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,xr=Y("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${gr} 1s linear infinite;
`,hr=q`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,br=q`
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
}`,vr=Y("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${hr} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${br} 0.2s ease-out forwards;
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
`,Cr=Y("div")`
  position: absolute;
`,yr=Y("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,wr=q`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,Er=Y("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${wr} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,jr=({toast:e})=>{let{icon:t,type:n,iconTheme:o}=e;return t!==void 0?typeof t=="string"?a.createElement(Er,null,t):t:n==="blank"?null:a.createElement(yr,null,a.createElement(xr,{...o}),n!=="loading"&&a.createElement(Cr,null,n==="error"?a.createElement(pr,{...o}):a.createElement(vr,{...o})))},Sr=e=>`
0% {transform: translate3d(0,${e*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,Or=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${e*-150}%,-1px) scale(.6); opacity:0;}
`,Pr="0%{opacity:0;} 100%{opacity:1;}",Tr="0%{opacity:1;} 100%{opacity:0;}",$r=Y("div")`
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
`,Nr=Y("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,Br=(e,t)=>{let n=e.includes("top")?1:-1,[o,r]=Ft()?[Pr,Tr]:[Sr(n),Or(n)];return{animation:t?`${q(o)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${q(r)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},Mr=a.memo(({toast:e,position:t,style:n,children:o})=>{let r=e.height?Br(e.position||t||"top-center",e.visible):{opacity:0},i=a.createElement(jr,{toast:e}),s=a.createElement(Nr,{...e.ariaProps},be(e.message,e));return a.createElement($r,{className:e.className,style:{...r,...n,...e.style}},typeof o=="function"?o({icon:i,message:s}):a.createElement(a.Fragment,null,i,s))});_o(a.createElement);var Ir=({id:e,className:t,style:n,onHeightUpdate:o,children:r})=>{let i=a.useCallback(s=>{if(s){let l=()=>{let c=s.getBoundingClientRect().height;o(e,c)};l(),new MutationObserver(l).observe(s,{subtree:!0,childList:!0,characterData:!0})}},[e,o]);return a.createElement("div",{ref:i,className:t,style:n},r)},Ar=(e,t)=>{let n=e.includes("top"),o=n?{top:0}:{bottom:0},r=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:Ft()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(n?1:-1)}px)`,...o,...r}},Rr=Ce`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,me=16,zr=({reverseOrder:e,position:t="top-center",toastOptions:n,gutter:o,children:r,containerStyle:i,containerClassName:s})=>{let{toasts:l,handlers:c}=dr(n);return a.createElement("div",{style:{position:"fixed",zIndex:9999,top:me,left:me,right:me,bottom:me,pointerEvents:"none",...i},className:s,onMouseEnter:c.startPause,onMouseLeave:c.endPause},l.map(u=>{let d=u.position||t,m=c.calculateOffset(u,{reverseOrder:e,gutter:o,defaultPosition:t}),p=Ar(d,m);return a.createElement(Ir,{id:u.id,key:u.id,onHeightUpdate:c.updateHeight,className:u.visible?Rr:"",style:p},u.type==="custom"?be(u.message,u):r?r(u):a.createElement(Mr,{toast:u,position:d}))}))},Wr=R;const kr="data:image/png;base64,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",Fr="DD/MM/YYYY",Lr=({subcategory:e})=>{const[t,n]=a.useState(!1),[o,r]=a.useState(!1),[i,s]=a.useState(0),[l,c]=a.useState(0),[u,d]=a.useState(0),[m,p]=a.useState(0);a.useEffect(()=>{s(e.time),c(e.burnedCalories)},[e.time,e.burnedCalories]),a.useEffect(()=>{t===!0&&(s(e.time),c(e.burnedCalories))},[t,e.time,e.burnedCalories]),a.useEffect(()=>{(()=>{p(Math.round(l/i*u))})()});const g=async w=>{try{await Pe.post("/diary/exercise",w)}catch(P){console.error("Error fetching exercises:",P)}},b=async()=>{const{_id:w}=e,P=Sn(Date.now()).format(Fr),S={exerciseId:w,date:P,time:u,burnedCalories:m};if(u<1||m<1){Wr.error("You should work out for more than one minute!");return}alert(JSON.stringify(S,null,2)),await g(S),v(),x()},h=w=>{const P=Number(i-w/60);d(P)};function E(){n(!0)}function v(){n(!1)}function x(){r(!0)}function y(){r(!1)}return f.jsxs(po,{children:[f.jsx(zr,{position:"top-right",reverseOrder:!1}),t&&f.jsx(rt,{isOpen:t,onRequestClose:v,children:f.jsxs(jo,{children:[f.jsxs(So,{children:[f.jsx(Po,{src:e.gifUrl,alt:e.name}),f.jsx(Vo,{time:i,getDataFromTimer:h}),f.jsxs(To,{children:["Burned calories: ",f.jsx("span",{children:m})]})]}),f.jsxs(Oo,{children:[f.jsxs($o,{children:[f.jsxs(de,{children:[f.jsx(ue,{children:"Name"}),f.jsx(fe,{children:e.name})]}),f.jsxs(de,{children:[f.jsx(ue,{children:"Target"}),f.jsx(fe,{children:e.target})]}),f.jsxs(de,{children:[f.jsx(ue,{children:"Body Part"}),f.jsx(fe,{children:e.bodyPart})]}),f.jsxs(de,{children:[f.jsx(ue,{children:"Equipment"}),f.jsx(fe,{children:e.equipment})]})]}),f.jsx(Ge,{onClick:b,children:"Add to diary"})]})]})}),o&&f.jsx(rt,{isOpen:o,onRequestClose:y,children:f.jsxs(No,{children:[f.jsx(Bo,{src:kr,alt:"Well done"}),f.jsx(Mo,{children:"Well done"}),f.jsxs(Qe,{style:{marginBottom:"4px"},children:["Your time: ",f.jsx("span",{children:" 3 minutes"})]}),f.jsxs(Qe,{children:["Burned calories: ",f.jsx("span",{children:"150"})]}),f.jsx(Ge,{onClick:y,children:"Next product"}),f.jsxs(Io,{children:[f.jsx(rn,{style:{color:"inherit"},to:"/diary",children:"To the diary"}),f.jsx(ie,{icon:"icon-next",size:"16",color:O.colors.textWhite30})]})]})}),f.jsxs(go,{children:[f.jsx(xo,{children:"WORKOUT"}),f.jsxs(ho,{onClick:E,children:["Start",f.jsx(yo,{width:"16",height:"16",children:f.jsx("use",{href:Te+"#icon-next"})})]})]}),f.jsxs(bo,{children:[f.jsx(wo,{children:f.jsx(Eo,{width:"14",height:"16",children:f.jsx("use",{href:Te+"#icon-running"})})}),f.jsx(vo,{children:e.name})]}),f.jsxs(Co,{children:[f.jsxs(je,{children:["Burned calories: ",f.jsx(Se,{children:e.burnedCalories})]}),f.jsxs(je,{children:["Body part: ",f.jsx(Se,{children:e.bodyPart})]}),f.jsxs(je,{children:["Target: ",f.jsx(Se,{children:e.target})]})]})]})},Dr=C.li`
  display: block;
  padding-bottom: 16px;

  @media screen and (min-width: 768px) {
    padding-bottom: 16px;
  }

  @media screen and (min-width: 1440px) {
    padding-bottom: 16px;
  }
`,Hr=C.div`
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
`,Ur=C.p`
  font-weight: 400;
  font-size: 20px;
  line-height: 1.2;
  color: white;

  margin-top: 81px;
  margin-bottom: 0;
`,Vr=C.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
  color: grey;
  margin-top: 2px;
`,Xr=({subcategory:e,onSelect:t})=>f.jsx(Dr,{onClick:()=>t(e.filter,e.name.toLowerCase()),children:f.jsxs(Hr,{style:{backgroundImage:`linear-gradient(rgba(4, 4, 4, 0.5), rgba(4, 4, 4, 0.5)), url(${e.imgURL})`},children:[f.jsx(Ur,{children:e.name}),f.jsx(Vr,{children:e.filter})]})}),qr=C.ul`
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
`,Oe=C.a`
  font-weight: 400;
  font-size: 14px;
  line-height: 1.29;
  color: grey;
  cursor: pointer;
  &:hover {
    color: orange;
  }
`,Jr=C.div`
  justify-content: space-between;
  gap: 32px;
  margin-bottom: 64px;
  margin-top: 64px;

  @media screen and (min-width: 768px) {
    display: flex;
  }
`,Kr=C.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  margin-top: 23px;
  @media screen and (min-width: 1440px) {
    width: 842px;
  }
`,Zr=C.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  margin-top: 20px;
`,Yr=C.button`
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
`,Gr=C.h1`
  font-weight: 700;
  font-size: 24px;
  line-height: 1.17;
  color: white;
  margin: 0;
  text-transform: capitalize;
  margin-right: 20px;
`,Qr=C.svg`
  transform: rotate(180deg);
  stroke: grey;
  &:hover {
    color: orange;
  }
`,_r=C.div`
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
`,ei={"Body parts":"bodyPart",Equipment:"equipment",Muscles:"target"},ti=()=>{const[e,t]=a.useState([]),[n,o]=a.useState([]),[r,i]=a.useState(null),[s,l]=a.useState("Exercises"),c=r!==null,u=async p=>{i(null);try{const g=await Pe.get(`/exercises?filter=${p}`);t(g.data[p]),l("Exercises")}catch(g){console.error("Error fetching exercises:",g)}},d=async(p,g)=>{try{const b=await Pe.get(`/exercises/params?key=${p}&value=${g}`);o(b.data.exercises),l(g)}catch(b){console.error("Error fetching exercises:",b)}};a.useEffect(()=>{u("bodyPart")},[]);const m=()=>c?f.jsxs("div",{children:[f.jsxs(Yr,{type:"button",onClick:()=>{document.title="React App",i(null),l("Exercises")},children:[f.jsx(Qr,{width:"16",height:"16",children:f.jsx("use",{href:Te+"#icon-next"})}),"BACK"]}),f.jsx(_r,{style:{height:"500px"},children:f.jsx(Kr,{children:n.length>0?n.map(p=>f.jsx(Lr,{subcategory:p},p._id)):"Empty"})})]}):e&&e.length>0&&f.jsx(Zr,{children:e.map(p=>f.jsx(Xr,{subcategory:p,onSelect:async(g,b)=>{document.title=g,await d(ei[g],b),i([g,b])}},p._id))});return f.jsxs("div",{children:[f.jsxs(Jr,{children:[f.jsx(Gr,{children:s}),f.jsxs(qr,{children:[f.jsx("li",{children:f.jsx(Oe,{onClick:()=>u("bodyPart"),children:"Body parts"})}),f.jsx("li",{children:f.jsx(Oe,{onClick:()=>u("equipment"),children:"Equipment"})}),f.jsx("li",{children:f.jsx(Oe,{onClick:()=>u("target"),children:"Muscles"})})]})]}),m()]})},ni=()=>f.jsxs(mo,{children:[f.jsx(ti,{}),f.jsx(an,{})]}),ui=ni;export{ui as default};
