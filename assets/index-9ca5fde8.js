import{u as g,r as D,Y as Ge,Z as Ze,g as Je,j as i,t as ue,b as Oe}from"./index-d10283e4.js";import{E as Qe}from"./ExercisesSubcategoriesList-1d46a685.js";import{S as Xe,s as pe}from"./SvgCustom-762475dc.js";import{p as Pe}from"./index-387d7a00.js";const et=g.div`
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
`,tt=g.div`
  width: 335px;

  padding: 16px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  border-radius: 12px;
  background: rgba(239, 237, 232, 0.05);

  @media screen and (min-width: 1440px) {
    width: 405px;
  }
`,nt=g.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 33px;
`,ot=g.p`
  font-weight: 700;
  font-size: 12px;
  color: white;
  padding: 5px 7px;
  border-radius: 4px;
  width: 73px;
  height: 24px;
  background-color: rgba(239, 237, 232, 0.05);
`,rt=g.button`
  display: flex;
  gap: 8px;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.29;
  color: #e6533c;
  background-color: transparent;
  border: none;
`,at=g.div`
  display: flex;
  gap: 16px;
  margin-bottom: 8px;
`,st=g.p`
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
`,it=g.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 4px 16px;
`,ce=g.li`
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
  color: rgba(239, 237, 232, 0.4);
`,de=g.span`
  color: white;
  text-transform: capitalize;
`,lt=g.svg`
  stroke: #e6533c;
`,ut=g.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: #efa082;
`,ct=g.svg`
  fill: #efede8;
`;var he={exports:{}},W={},me={exports:{}},N={},ve={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=y;/*!
 * Adapted from jQuery UI core
 *
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/category/ui-core/
 */var o="none",r="contents",s=/input|select|textarea|button|object|iframe/;function h(p,d){return d.getPropertyValue("overflow")!=="visible"||p.scrollWidth<=0&&p.scrollHeight<=0}function O(p){var d=p.offsetWidth<=0&&p.offsetHeight<=0;if(d&&!p.innerHTML)return!0;try{var m=window.getComputedStyle(p),b=m.getPropertyValue("display");return d?b!==r&&h(p,m):b===o}catch{return console.warn("Failed to inspect element style"),!1}}function a(p){for(var d=p,m=p.getRootNode&&p.getRootNode();d&&d!==document.body;){if(m&&d===m&&(d=m.host.parentNode),O(d))return!1;d=d.parentNode}return!0}function x(p,d){var m=p.nodeName.toLowerCase(),b=s.test(m)&&!p.disabled||m==="a"&&p.href||d;return b&&a(p)}function v(p){var d=p.getAttribute("tabindex");d===null&&(d=void 0);var m=isNaN(d);return(m||d>=0)&&x(p,!m)}function y(p){var d=[].slice.call(p.querySelectorAll("*"),0).reduce(function(m,b){return m.concat(b.shadowRoot?y(b.shadowRoot):[b])},[]);return d.filter(v)}t.exports=e.default})(ve,ve.exports);var Ae=ve.exports;Object.defineProperty(N,"__esModule",{value:!0});N.resetState=ht;N.log=mt;N.handleBlur=V;N.handleFocus=G;N.markForFocusLater=vt;N.returnFocus=gt;N.popWithoutFocus=yt;N.setupScopedFocus=bt;N.teardownScopedFocus=xt;var dt=Ae,ft=pt(dt);function pt(t){return t&&t.__esModule?t:{default:t}}var q=[],H=null,ge=!1;function ht(){q=[]}function mt(){}function V(){ge=!0}function G(){if(ge){if(ge=!1,!H)return;setTimeout(function(){if(!H.contains(document.activeElement)){var t=(0,ft.default)(H)[0]||H;t.focus()}},0)}}function vt(){q.push(document.activeElement)}function gt(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,e=null;try{q.length!==0&&(e=q.pop(),e.focus({preventScroll:t}));return}catch{console.warn(["You tried to return focus to",e,"but it is not in the DOM anymore"].join(" "))}}function yt(){q.length>0&&q.pop()}function bt(t){H=t,window.addEventListener?(window.addEventListener("blur",V,!1),document.addEventListener("focus",G,!0)):(window.attachEvent("onBlur",V),document.attachEvent("onFocus",G))}function xt(){H=null,window.addEventListener?(window.removeEventListener("blur",V),document.removeEventListener("focus",G)):(window.detachEvent("onBlur",V),document.detachEvent("onFocus",G))}var ye={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=O;var o=Ae,r=s(o);function s(a){return a&&a.__esModule?a:{default:a}}function h(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:document;return a.activeElement.shadowRoot?h(a.activeElement.shadowRoot):a.activeElement}function O(a,x){var v=(0,r.default)(a);if(!v.length){x.preventDefault();return}var y=void 0,p=x.shiftKey,d=v[0],m=v[v.length-1],b=h();if(a===b){if(!p)return;y=m}if(m===b&&!p&&(y=d),d===b&&p&&(y=m),y){x.preventDefault(),y.focus();return}var A=/(\bChrome\b|\bSafari\b)\//.exec(navigator.userAgent),z=A!=null&&A[1]!="Chrome"&&/\biPod\b|\biPad\b/g.exec(navigator.userAgent)==null;if(z){var I=v.indexOf(b);if(I>-1&&(I+=p?-1:1),y=v[I],typeof y>"u"){x.preventDefault(),y=p?m:d,y.focus();return}x.preventDefault(),y.focus()}}t.exports=e.default})(ye,ye.exports);var wt=ye.exports,P={},Ot=function(){},Ct=Ot,R={},De={exports:{}};/*!
  Copyright (c) 2015 Jed Watson.
  Based on code that is Copyright 2013-2015, Facebook, Inc.
  All rights reserved.
*/(function(t){(function(){var e=!!(typeof window<"u"&&window.document&&window.document.createElement),o={canUseDOM:e,canUseWorkers:typeof Worker<"u",canUseEventListeners:e&&!!(window.addEventListener||window.attachEvent),canUseViewport:e&&!!window.screen};t.exports?t.exports=o:window.ExecutionEnvironment=o})()})(De);var Et=De.exports;Object.defineProperty(R,"__esModule",{value:!0});R.canUseDOM=R.SafeNodeList=R.SafeHTMLCollection=void 0;var _t=Et,St=Mt(_t);function Mt(t){return t&&t.__esModule?t:{default:t}}var ae=St.default,Tt=ae.canUseDOM?window.HTMLElement:{};R.SafeHTMLCollection=ae.canUseDOM?window.HTMLCollection:{};R.SafeNodeList=ae.canUseDOM?window.NodeList:{};R.canUseDOM=ae.canUseDOM;R.default=Tt;Object.defineProperty(P,"__esModule",{value:!0});P.resetState=Dt;P.log=kt;P.assertNodeList=ke;P.setElement=Lt;P.validateElement=be;P.hide=jt;P.show=Ft;P.documentNotReadyOrSSRTesting=Ut;var Rt=Ct,Nt=At(Rt),Pt=R;function At(t){return t&&t.__esModule?t:{default:t}}var M=null;function Dt(){M&&(M.removeAttribute?M.removeAttribute("aria-hidden"):M.length!=null?M.forEach(function(t){return t.removeAttribute("aria-hidden")}):document.querySelectorAll(M).forEach(function(t){return t.removeAttribute("aria-hidden")})),M=null}function kt(){}function ke(t,e){if(!t||!t.length)throw new Error("react-modal: No elements were found for selector "+e+".")}function Lt(t){var e=t;if(typeof e=="string"&&Pt.canUseDOM){var o=document.querySelectorAll(e);ke(o,e),e=o}return M=e||M,M}function be(t){var e=t||M;return e?Array.isArray(e)||e instanceof HTMLCollection||e instanceof NodeList?e:[e]:((0,Nt.default)(!1,["react-modal: App element is not defined.","Please use `Modal.setAppElement(el)` or set `appElement={el}`.","This is needed so screen readers don't see main content","when modal is opened. It is not recommended, but you can opt-out","by setting `ariaHideApp={false}`."].join(" ")),[])}function jt(t){var e=!0,o=!1,r=void 0;try{for(var s=be(t)[Symbol.iterator](),h;!(e=(h=s.next()).done);e=!0){var O=h.value;O.setAttribute("aria-hidden","true")}}catch(a){o=!0,r=a}finally{try{!e&&s.return&&s.return()}finally{if(o)throw r}}}function Ft(t){var e=!0,o=!1,r=void 0;try{for(var s=be(t)[Symbol.iterator](),h;!(e=(h=s.next()).done);e=!0){var O=h.value;O.removeAttribute("aria-hidden")}}catch(a){o=!0,r=a}finally{try{!e&&s.return&&s.return()}finally{if(o)throw r}}}function Ut(){M=null}var B={};Object.defineProperty(B,"__esModule",{value:!0});B.resetState=Wt;B.log=It;var K={},Y={};function Ce(t,e){t.classList.remove(e)}function Wt(){var t=document.getElementsByTagName("html")[0];for(var e in K)Ce(t,K[e]);var o=document.body;for(var r in Y)Ce(o,Y[r]);K={},Y={}}function It(){}var Ht=function(e,o){return e[o]||(e[o]=0),e[o]+=1,o},qt=function(e,o){return e[o]&&(e[o]-=1),o},Bt=function(e,o,r){r.forEach(function(s){Ht(o,s),e.add(s)})},$t=function(e,o,r){r.forEach(function(s){qt(o,s),o[s]===0&&e.remove(s)})};B.add=function(e,o){return Bt(e.classList,e.nodeName.toLowerCase()=="html"?K:Y,o.split(" "))};B.remove=function(e,o){return $t(e.classList,e.nodeName.toLowerCase()=="html"?K:Y,o.split(" "))};var $={};Object.defineProperty($,"__esModule",{value:!0});$.log=Kt;$.resetState=Yt;function zt(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var Le=function t(){var e=this;zt(this,t),this.register=function(o){e.openInstances.indexOf(o)===-1&&(e.openInstances.push(o),e.emit("register"))},this.deregister=function(o){var r=e.openInstances.indexOf(o);r!==-1&&(e.openInstances.splice(r,1),e.emit("deregister"))},this.subscribe=function(o){e.subscribers.push(o)},this.emit=function(o){e.subscribers.forEach(function(r){return r(o,e.openInstances.slice())})},this.openInstances=[],this.subscribers=[]},ne=new Le;function Kt(){console.log("portalOpenInstances ----------"),console.log(ne.openInstances.length),ne.openInstances.forEach(function(t){return console.log(t)}),console.log("end portalOpenInstances ----------")}function Yt(){ne=new Le}$.default=ne;var xe={};Object.defineProperty(xe,"__esModule",{value:!0});xe.resetState=Jt;xe.log=Qt;var Vt=$,Gt=Zt(Vt);function Zt(t){return t&&t.__esModule?t:{default:t}}var _=void 0,T=void 0,U=[];function Jt(){for(var t=[_,T],e=0;e<t.length;e++){var o=t[e];o&&o.parentNode&&o.parentNode.removeChild(o)}_=T=null,U=[]}function Qt(){console.log("bodyTrap ----------"),console.log(U.length);for(var t=[_,T],e=0;e<t.length;e++){var o=t[e],r=o||{};console.log(r.nodeName,r.className,r.id)}console.log("edn bodyTrap ----------")}function Ee(){U.length!==0&&U[U.length-1].focusContent()}function Xt(t,e){!_&&!T&&(_=document.createElement("div"),_.setAttribute("data-react-modal-body-trap",""),_.style.position="absolute",_.style.opacity="0",_.setAttribute("tabindex","0"),_.addEventListener("focus",Ee),T=_.cloneNode(),T.addEventListener("focus",Ee)),U=e,U.length>0?(document.body.firstChild!==_&&document.body.insertBefore(_,document.body.firstChild),document.body.lastChild!==T&&document.body.appendChild(T)):(_.parentElement&&_.parentElement.removeChild(_),T.parentElement&&T.parentElement.removeChild(T))}Gt.default.subscribe(Xt);(function(t,e){Object.defineProperty(e,"__esModule",{value:!0});var o=Object.assign||function(f){for(var c=1;c<arguments.length;c++){var w=arguments[c];for(var n in w)Object.prototype.hasOwnProperty.call(w,n)&&(f[n]=w[n])}return f},r=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(f){return typeof f}:function(f){return f&&typeof Symbol=="function"&&f.constructor===Symbol&&f!==Symbol.prototype?"symbol":typeof f},s=function(){function f(c,w){for(var n=0;n<w.length;n++){var l=w[n];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(c,l.key,l)}}return function(c,w,n){return w&&f(c.prototype,w),n&&f(c,n),c}}(),h=D,O=Pe,a=Q(O),x=N,v=se(x),y=wt,p=Q(y),d=P,m=se(d),b=B,A=se(b),z=R,I=Q(z),Ie=$,we=Q(Ie);function se(f){if(f&&f.__esModule)return f;var c={};if(f!=null)for(var w in f)Object.prototype.hasOwnProperty.call(f,w)&&(c[w]=f[w]);return c.default=f,c}function Q(f){return f&&f.__esModule?f:{default:f}}function He(f,c){if(!(f instanceof c))throw new TypeError("Cannot call a class as a function")}function qe(f,c){if(!f)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return c&&(typeof c=="object"||typeof c=="function")?c:f}function Be(f,c){if(typeof c!="function"&&c!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof c);f.prototype=Object.create(c&&c.prototype,{constructor:{value:f,enumerable:!1,writable:!0,configurable:!0}}),c&&(Object.setPrototypeOf?Object.setPrototypeOf(f,c):f.__proto__=c)}var ie={overlay:"ReactModal__Overlay",content:"ReactModal__Content"},$e=function(c){return c.code==="Tab"||c.keyCode===9},ze=function(c){return c.code==="Escape"||c.keyCode===27},X=0,le=function(f){Be(c,f);function c(w){He(this,c);var n=qe(this,(c.__proto__||Object.getPrototypeOf(c)).call(this,w));return n.setOverlayRef=function(l){n.overlay=l,n.props.overlayRef&&n.props.overlayRef(l)},n.setContentRef=function(l){n.content=l,n.props.contentRef&&n.props.contentRef(l)},n.afterClose=function(){var l=n.props,E=l.appElement,S=l.ariaHideApp,C=l.htmlOpenClassName,L=l.bodyOpenClassName,j=l.parentSelector,ee=j&&j().ownerDocument||document;L&&A.remove(ee.body,L),C&&A.remove(ee.getElementsByTagName("html")[0],C),S&&X>0&&(X-=1,X===0&&m.show(E)),n.props.shouldFocusAfterRender&&(n.props.shouldReturnFocusAfterClose?(v.returnFocus(n.props.preventScroll),v.teardownScopedFocus()):v.popWithoutFocus()),n.props.onAfterClose&&n.props.onAfterClose(),we.default.deregister(n)},n.open=function(){n.beforeOpen(),n.state.afterOpen&&n.state.beforeClose?(clearTimeout(n.closeTimer),n.setState({beforeClose:!1})):(n.props.shouldFocusAfterRender&&(v.setupScopedFocus(n.node),v.markForFocusLater()),n.setState({isOpen:!0},function(){n.openAnimationFrame=requestAnimationFrame(function(){n.setState({afterOpen:!0}),n.props.isOpen&&n.props.onAfterOpen&&n.props.onAfterOpen({overlayEl:n.overlay,contentEl:n.content})})}))},n.close=function(){n.props.closeTimeoutMS>0?n.closeWithTimeout():n.closeWithoutTimeout()},n.focusContent=function(){return n.content&&!n.contentHasFocus()&&n.content.focus({preventScroll:!0})},n.closeWithTimeout=function(){var l=Date.now()+n.props.closeTimeoutMS;n.setState({beforeClose:!0,closesAt:l},function(){n.closeTimer=setTimeout(n.closeWithoutTimeout,n.state.closesAt-Date.now())})},n.closeWithoutTimeout=function(){n.setState({beforeClose:!1,isOpen:!1,afterOpen:!1,closesAt:null},n.afterClose)},n.handleKeyDown=function(l){$e(l)&&(0,p.default)(n.content,l),n.props.shouldCloseOnEsc&&ze(l)&&(l.stopPropagation(),n.requestClose(l))},n.handleOverlayOnClick=function(l){n.shouldClose===null&&(n.shouldClose=!0),n.shouldClose&&n.props.shouldCloseOnOverlayClick&&(n.ownerHandlesClose()?n.requestClose(l):n.focusContent()),n.shouldClose=null},n.handleContentOnMouseUp=function(){n.shouldClose=!1},n.handleOverlayOnMouseDown=function(l){!n.props.shouldCloseOnOverlayClick&&l.target==n.overlay&&l.preventDefault()},n.handleContentOnClick=function(){n.shouldClose=!1},n.handleContentOnMouseDown=function(){n.shouldClose=!1},n.requestClose=function(l){return n.ownerHandlesClose()&&n.props.onRequestClose(l)},n.ownerHandlesClose=function(){return n.props.onRequestClose},n.shouldBeClosed=function(){return!n.state.isOpen&&!n.state.beforeClose},n.contentHasFocus=function(){return document.activeElement===n.content||n.content.contains(document.activeElement)},n.buildClassName=function(l,E){var S=(typeof E>"u"?"undefined":r(E))==="object"?E:{base:ie[l],afterOpen:ie[l]+"--after-open",beforeClose:ie[l]+"--before-close"},C=S.base;return n.state.afterOpen&&(C=C+" "+S.afterOpen),n.state.beforeClose&&(C=C+" "+S.beforeClose),typeof E=="string"&&E?C+" "+E:C},n.attributesFromObject=function(l,E){return Object.keys(E).reduce(function(S,C){return S[l+"-"+C]=E[C],S},{})},n.state={afterOpen:!1,beforeClose:!1},n.shouldClose=null,n.moveFromContentToOverlay=null,n}return s(c,[{key:"componentDidMount",value:function(){this.props.isOpen&&this.open()}},{key:"componentDidUpdate",value:function(n,l){this.props.isOpen&&!n.isOpen?this.open():!this.props.isOpen&&n.isOpen&&this.close(),this.props.shouldFocusAfterRender&&this.state.isOpen&&!l.isOpen&&this.focusContent()}},{key:"componentWillUnmount",value:function(){this.state.isOpen&&this.afterClose(),clearTimeout(this.closeTimer),cancelAnimationFrame(this.openAnimationFrame)}},{key:"beforeOpen",value:function(){var n=this.props,l=n.appElement,E=n.ariaHideApp,S=n.htmlOpenClassName,C=n.bodyOpenClassName,L=n.parentSelector,j=L&&L().ownerDocument||document;C&&A.add(j.body,C),S&&A.add(j.getElementsByTagName("html")[0],S),E&&(X+=1,m.hide(l)),we.default.register(this)}},{key:"render",value:function(){var n=this.props,l=n.id,E=n.className,S=n.overlayClassName,C=n.defaultStyles,L=n.children,j=E?{}:C.content,ee=S?{}:C.overlay;if(this.shouldBeClosed())return null;var Ke={ref:this.setOverlayRef,className:this.buildClassName("overlay",S),style:o({},ee,this.props.style.overlay),onClick:this.handleOverlayOnClick,onMouseDown:this.handleOverlayOnMouseDown},Ye=o({id:l,ref:this.setContentRef,style:o({},j,this.props.style.content),className:this.buildClassName("content",E),tabIndex:"-1",onKeyDown:this.handleKeyDown,onMouseDown:this.handleContentOnMouseDown,onMouseUp:this.handleContentOnMouseUp,onClick:this.handleContentOnClick,role:this.props.role,"aria-label":this.props.contentLabel},this.attributesFromObject("aria",o({modal:!0},this.props.aria)),this.attributesFromObject("data",this.props.data||{}),{"data-testid":this.props.testId}),Ve=this.props.contentElement(Ye,L);return this.props.overlayElement(Ke,Ve)}}]),c}(h.Component);le.defaultProps={style:{overlay:{},content:{}},defaultStyles:{}},le.propTypes={isOpen:a.default.bool.isRequired,defaultStyles:a.default.shape({content:a.default.object,overlay:a.default.object}),style:a.default.shape({content:a.default.object,overlay:a.default.object}),className:a.default.oneOfType([a.default.string,a.default.object]),overlayClassName:a.default.oneOfType([a.default.string,a.default.object]),parentSelector:a.default.func,bodyOpenClassName:a.default.string,htmlOpenClassName:a.default.string,ariaHideApp:a.default.bool,appElement:a.default.oneOfType([a.default.instanceOf(I.default),a.default.instanceOf(z.SafeHTMLCollection),a.default.instanceOf(z.SafeNodeList),a.default.arrayOf(a.default.instanceOf(I.default))]),onAfterOpen:a.default.func,onAfterClose:a.default.func,onRequestClose:a.default.func,closeTimeoutMS:a.default.number,shouldFocusAfterRender:a.default.bool,shouldCloseOnOverlayClick:a.default.bool,shouldReturnFocusAfterClose:a.default.bool,preventScroll:a.default.bool,role:a.default.string,contentLabel:a.default.string,aria:a.default.object,data:a.default.object,children:a.default.node,shouldCloseOnEsc:a.default.bool,overlayRef:a.default.func,contentRef:a.default.func,id:a.default.string,overlayElement:a.default.func,contentElement:a.default.func,testId:a.default.string},e.default=le,t.exports=e.default})(me,me.exports);var en=me.exports;function je(){var t=this.constructor.getDerivedStateFromProps(this.props,this.state);t!=null&&this.setState(t)}function Fe(t){function e(o){var r=this.constructor.getDerivedStateFromProps(t,o);return r??null}this.setState(e.bind(this))}function Ue(t,e){try{var o=this.props,r=this.state;this.props=t,this.state=e,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(o,r)}finally{this.props=o,this.state=r}}je.__suppressDeprecationWarning=!0;Fe.__suppressDeprecationWarning=!0;Ue.__suppressDeprecationWarning=!0;function tn(t){var e=t.prototype;if(!e||!e.isReactComponent)throw new Error("Can only polyfill class components");if(typeof t.getDerivedStateFromProps!="function"&&typeof e.getSnapshotBeforeUpdate!="function")return t;var o=null,r=null,s=null;if(typeof e.componentWillMount=="function"?o="componentWillMount":typeof e.UNSAFE_componentWillMount=="function"&&(o="UNSAFE_componentWillMount"),typeof e.componentWillReceiveProps=="function"?r="componentWillReceiveProps":typeof e.UNSAFE_componentWillReceiveProps=="function"&&(r="UNSAFE_componentWillReceiveProps"),typeof e.componentWillUpdate=="function"?s="componentWillUpdate":typeof e.UNSAFE_componentWillUpdate=="function"&&(s="UNSAFE_componentWillUpdate"),o!==null||r!==null||s!==null){var h=t.displayName||t.name,O=typeof t.getDerivedStateFromProps=="function"?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";throw Error(`Unsafe legacy lifecycles will not be called for components using new component APIs.

`+h+" uses "+O+" but also contains the following legacy lifecycles:"+(o!==null?`
  `+o:"")+(r!==null?`
  `+r:"")+(s!==null?`
  `+s:"")+`

The above lifecycles should be removed. Learn more about this warning here:
https://fb.me/react-async-component-lifecycle-hooks`)}if(typeof t.getDerivedStateFromProps=="function"&&(e.componentWillMount=je,e.componentWillReceiveProps=Fe),typeof e.getSnapshotBeforeUpdate=="function"){if(typeof e.componentDidUpdate!="function")throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");e.componentWillUpdate=Ue;var a=e.componentDidUpdate;e.componentDidUpdate=function(v,y,p){var d=this.__reactInternalSnapshotFlag?this.__reactInternalSnapshot:p;a.call(this,v,y,d)}}return t}const nn=Object.freeze(Object.defineProperty({__proto__:null,polyfill:tn},Symbol.toStringTag,{value:"Module"})),on=Ge(nn);Object.defineProperty(W,"__esModule",{value:!0});W.bodyOpenClassName=W.portalClassName=void 0;var _e=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(t[r]=o[r])}return t},rn=function(){function t(e,o){for(var r=0;r<o.length;r++){var s=o[r];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}return function(e,o,r){return o&&t(e.prototype,o),r&&t(e,r),e}}(),We=D,oe=Z(We),an=Ze,re=Z(an),sn=Pe,u=Z(sn),ln=en,Se=Z(ln),un=P,cn=fn(un),k=R,Me=Z(k),dn=on;function fn(t){if(t&&t.__esModule)return t;var e={};if(t!=null)for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e.default=t,e}function Z(t){return t&&t.__esModule?t:{default:t}}function pn(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Te(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t}function hn(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var mn=W.portalClassName="ReactModalPortal",vn=W.bodyOpenClassName="ReactModal__Body--open",F=k.canUseDOM&&re.default.createPortal!==void 0,Re=function(e){return document.createElement(e)},Ne=function(){return F?re.default.createPortal:re.default.unstable_renderSubtreeIntoContainer};function te(t){return t()}var J=function(t){hn(e,t);function e(){var o,r,s,h;pn(this,e);for(var O=arguments.length,a=Array(O),x=0;x<O;x++)a[x]=arguments[x];return h=(r=(s=Te(this,(o=e.__proto__||Object.getPrototypeOf(e)).call.apply(o,[this].concat(a))),s),s.removePortal=function(){!F&&re.default.unmountComponentAtNode(s.node);var v=te(s.props.parentSelector);v&&v.contains(s.node)?v.removeChild(s.node):console.warn('React-Modal: "parentSelector" prop did not returned any DOM element. Make sure that the parent element is unmounted to avoid any memory leaks.')},s.portalRef=function(v){s.portal=v},s.renderPortal=function(v){var y=Ne(),p=y(s,oe.default.createElement(Se.default,_e({defaultStyles:e.defaultStyles},v)),s.node);s.portalRef(p)},r),Te(s,h)}return rn(e,[{key:"componentDidMount",value:function(){if(k.canUseDOM){F||(this.node=Re("div")),this.node.className=this.props.portalClassName;var r=te(this.props.parentSelector);r.appendChild(this.node),!F&&this.renderPortal(this.props)}}},{key:"getSnapshotBeforeUpdate",value:function(r){var s=te(r.parentSelector),h=te(this.props.parentSelector);return{prevParent:s,nextParent:h}}},{key:"componentDidUpdate",value:function(r,s,h){if(k.canUseDOM){var O=this.props,a=O.isOpen,x=O.portalClassName;r.portalClassName!==x&&(this.node.className=x);var v=h.prevParent,y=h.nextParent;y!==v&&(v.removeChild(this.node),y.appendChild(this.node)),!(!r.isOpen&&!a)&&!F&&this.renderPortal(this.props)}}},{key:"componentWillUnmount",value:function(){if(!(!k.canUseDOM||!this.node||!this.portal)){var r=this.portal.state,s=Date.now(),h=r.isOpen&&this.props.closeTimeoutMS&&(r.closesAt||s+this.props.closeTimeoutMS);h?(r.beforeClose||this.portal.closeWithTimeout(),setTimeout(this.removePortal,h-s)):this.removePortal()}}},{key:"render",value:function(){if(!k.canUseDOM||!F)return null;!this.node&&F&&(this.node=Re("div"));var r=Ne();return r(oe.default.createElement(Se.default,_e({ref:this.portalRef,defaultStyles:e.defaultStyles},this.props)),this.node)}}],[{key:"setAppElement",value:function(r){cn.setElement(r)}}]),e}(We.Component);J.propTypes={isOpen:u.default.bool.isRequired,style:u.default.shape({content:u.default.object,overlay:u.default.object}),portalClassName:u.default.string,bodyOpenClassName:u.default.string,htmlOpenClassName:u.default.string,className:u.default.oneOfType([u.default.string,u.default.shape({base:u.default.string.isRequired,afterOpen:u.default.string.isRequired,beforeClose:u.default.string.isRequired})]),overlayClassName:u.default.oneOfType([u.default.string,u.default.shape({base:u.default.string.isRequired,afterOpen:u.default.string.isRequired,beforeClose:u.default.string.isRequired})]),appElement:u.default.oneOfType([u.default.instanceOf(Me.default),u.default.instanceOf(k.SafeHTMLCollection),u.default.instanceOf(k.SafeNodeList),u.default.arrayOf(u.default.instanceOf(Me.default))]),onAfterOpen:u.default.func,onRequestClose:u.default.func,closeTimeoutMS:u.default.number,ariaHideApp:u.default.bool,shouldFocusAfterRender:u.default.bool,shouldCloseOnOverlayClick:u.default.bool,shouldReturnFocusAfterClose:u.default.bool,preventScroll:u.default.bool,parentSelector:u.default.func,aria:u.default.object,data:u.default.object,role:u.default.string,contentLabel:u.default.string,shouldCloseOnEsc:u.default.bool,overlayRef:u.default.func,contentRef:u.default.func,id:u.default.string,overlayElement:u.default.func,contentElement:u.default.func};J.defaultProps={isOpen:!1,portalClassName:mn,bodyOpenClassName:vn,role:"dialog",ariaHideApp:!0,closeTimeoutMS:0,shouldFocusAfterRender:!0,shouldCloseOnEsc:!0,shouldCloseOnOverlayClick:!0,shouldReturnFocusAfterClose:!0,preventScroll:!1,parentSelector:function(){return document.body},overlayElement:function(e,o){return oe.default.createElement("div",e,o)},contentElement:function(e,o){return oe.default.createElement("div",e,o)}};J.defaultStyles={overlay:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(255, 255, 255, 0.75)"},content:{position:"absolute",top:"40px",left:"40px",right:"40px",bottom:"40px",border:"1px solid #ccc",background:"#fff",overflow:"auto",WebkitOverflowScrolling:"touch",borderRadius:"4px",outline:"none",padding:"20px"}};(0,dn.polyfill)(J);W.default=J;(function(t,e){Object.defineProperty(e,"__esModule",{value:!0});var o=W,r=s(o);function s(h){return h&&h.__esModule?h:{default:h}}e.default=r.default,t.exports=e.default})(he,he.exports);var gn=he.exports;const yn=Je(gn);g.div`
  position: fixed;
  top: 0;
  left: 0;
  padding: 0 20px;

  width: 100vw;
  height: 100vh;

  background-color: #10100f;
`;g.div`
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
`;const bn=g.button`
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
`,xn={overlay:{position:"fixed",top:0,left:0,width:"100vw",height:"100vh",backgroundColor:"rgba(18, 20, 23, 0.50)",overflow:"hidden"},content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)"}},wn=({isOpen:t,onRequestClose:e,children:o})=>i.jsxs(yn,{isOpen:t,onRequestClose:e,shouldCloseOnOverlayClick:!0,shouldCloseOnEsc:!0,ariaHideApp:!1,style:xn,children:[i.jsx(bn,{type:"button",onClick:e,children:i.jsx(Xe,{icon:"icon-cross",size:"22",color:ue.colors.white,stroke:ue.colors.white,hover:ue.colors.primary})}),o]}),On=({subcategory:t})=>{console.log(`🤬>>>  subcategory:
`,t);const[e,o]=D.useState(!1);function r(){o(!0)}function s(){o(!1)}return i.jsxs(tt,{children:[i.jsx(wn,{isOpen:e,onRequestClose:s,children:i.jsx("div",{style:{height:400,width:400}})}),i.jsxs(nt,{children:[i.jsx(ot,{children:"WORKOUT"}),i.jsxs(rt,{onClick:r,children:["Start",i.jsx(lt,{width:"16",height:"16",children:i.jsx("use",{href:pe+"#icon-next"})})]})]}),i.jsxs(at,{children:[i.jsx(ut,{children:i.jsx(ct,{width:"14",height:"16",children:i.jsx("use",{href:pe+"#icon-running"})})}),i.jsx(st,{children:t.name})]}),i.jsxs(it,{children:[i.jsxs(ce,{children:["Burned calories: ",i.jsx(de,{children:t.burnedCalories})]}),i.jsxs(ce,{children:["Body part: ",i.jsx(de,{children:t.bodyPart})]}),i.jsxs(ce,{children:["Target: ",i.jsx(de,{children:t.target})]})]})]})},Cn=g.li`
  display: block;
  padding-bottom: 16px;

  @media screen and (min-width: 768px) {
    padding-bottom: 16px;
  }

  @media screen and (min-width: 1440px) {
    padding-bottom: 16px;
  }
`,En=g.div`
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
`,_n=g.p`
  font-weight: 400;
  font-size: 20px;
  line-height: 1.2;
  color: white;

  margin-top: 81px;
  margin-bottom: 0;
`,Sn=g.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
  color: grey;
  margin-top: 2px;
`,Mn=({subcategory:t,onSelect:e})=>i.jsx(Cn,{onClick:()=>e(t.filter,t.name.toLowerCase()),children:i.jsxs(En,{style:{backgroundImage:`linear-gradient(rgba(4, 4, 4, 0.5), rgba(4, 4, 4, 0.5)), url(${t.imgURL})`},children:[i.jsx(_n,{children:t.name}),i.jsx(Sn,{children:t.filter})]})}),Tn=g.ul`
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
`,fe=g.a`
  font-weight: 400;
  font-size: 14px;
  line-height: 1.29;
  color: grey;
  cursor: pointer;
  &:hover {
    color: orange;
  }
`,Rn=g.div`
  justify-content: space-between;
  gap: 32px;
  margin-bottom: 64px;
  margin-top: 64px;

  @media screen and (min-width: 768px) {
    display: flex;
  }
`,Nn=g.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  margin-top: 23px;
  @media screen and (min-width: 1440px) {
    width: 842px;
  }
`,Pn=g.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  margin-top: 20px;
`,An=g.button`
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
`,Dn=g.h1`
  font-weight: 700;
  font-size: 24px;
  line-height: 1.17;
  color: white;
  margin: 0;
  text-transform: capitalize;
  margin-right: 20px;
`,kn=g.svg`
  transform: rotate(180deg);
  stroke: grey;
  &:hover {
    color: orange;
  }
`,Ln=g.div`
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
`,jn={"Body parts":"bodyPart",Equipment:"equipment",Muscles:"target"},Fn=()=>{const[t,e]=D.useState([]),[o,r]=D.useState([]),[s,h]=D.useState(null),[O,a]=D.useState("Exercises"),x=s!==null,v=async d=>{h(null);try{const m=await Oe.get(`/exercises?filter=${d}`);e(m.data[d]),a("Exercises")}catch(m){console.error("Error fetching exercises:",m)}},y=async(d,m)=>{try{const b=await Oe.get(`/exercises/params?key=${d}&value=${m}`);r(b.data.exercises),a(m)}catch(b){console.error("Error fetching exercises:",b)}};D.useEffect(()=>{v("bodyPart")},[]);const p=()=>x?i.jsxs("div",{children:[i.jsxs(An,{type:"button",onClick:()=>{document.title="React App",h(null),a("Exercises")},children:[i.jsx(kn,{width:"16",height:"16",children:i.jsx("use",{href:pe+"#icon-next"})}),"BACK"]}),i.jsx(Ln,{style:{height:"500px"},children:i.jsx(Nn,{children:o.length>0?o.map(d=>i.jsx(On,{subcategory:d},d._id)):"Empty"})})]}):t&&t.length>0&&i.jsx(Pn,{children:t.map(d=>i.jsx(Mn,{subcategory:d,onSelect:async(m,b)=>{document.title=m,await y(jn[m],b),h([m,b])}},d._id))});return i.jsxs("div",{children:[i.jsxs(Rn,{children:[i.jsx(Dn,{children:O}),i.jsxs(Tn,{children:[i.jsx("li",{children:i.jsx(fe,{onClick:()=>v("bodyPart"),children:"Body parts"})}),i.jsx("li",{children:i.jsx(fe,{onClick:()=>v("equipment"),children:"Equipment"})}),i.jsx("li",{children:i.jsx(fe,{onClick:()=>v("target"),children:"Muscles"})})]})]}),p()]})},Un=()=>i.jsxs(et,{children:[i.jsx(Fn,{}),i.jsx(Qe,{})]}),Bn=Un;export{Bn as default};
