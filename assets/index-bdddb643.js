import{at as ae,au as se,av as ie,aw as oe,ax as T,ay as _,az as f,aA as o,aB as ce,aC as fe,aD as de,aE as ue,aF as v,aG as p,aH as G,aI as z,aJ as N,aK as le,aL as he,aM as pe,aN as Z,aO as J,aP as me,aQ as j,aR as ye,aS as ge,aT as Y,aU as xe,a2 as D,r as w,_ as be,aV as we,j as E,L as V}from"./index-f042ea01.js";function Se(r){var e=ae(r);return function(t,n,a,s){for(var i="",c=0;c<e;c++)i+=r[c](t,n,a,s)||"";return i}}function ve(r){return function(e){e.root||(e=e.return)&&r(e)}}function Ce(r){if(r.sheet)return r.sheet;for(var e=0;e<document.styleSheets.length;e++)if(document.styleSheets[e].ownerNode===r)return document.styleSheets[e]}function Ee(r){var e=document.createElement("style");return e.setAttribute("data-emotion",r.key),r.nonce!==void 0&&e.setAttribute("nonce",r.nonce),e.appendChild(document.createTextNode("")),e.setAttribute("data-s",""),e}var Pe=function(){function r(t){var n=this;this._insertTag=function(a){var s;n.tags.length===0?n.insertionPoint?s=n.insertionPoint.nextSibling:n.prepend?s=n.container.firstChild:s=n.before:s=n.tags[n.tags.length-1].nextSibling,n.container.insertBefore(a,s),n.tags.push(a)},this.isSpeedy=t.speedy===void 0?!0:t.speedy,this.tags=[],this.ctr=0,this.nonce=t.nonce,this.key=t.key,this.container=t.container,this.prepend=t.prepend,this.insertionPoint=t.insertionPoint,this.before=null}var e=r.prototype;return e.hydrate=function(n){n.forEach(this._insertTag)},e.insert=function(n){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(Ee(this));var a=this.tags[this.tags.length-1];if(this.isSpeedy){var s=Ce(a);try{s.insertRule(n,s.cssRules.length)}catch{}}else a.appendChild(document.createTextNode(n));this.ctr++},e.flush=function(){this.tags.forEach(function(n){return n.parentNode&&n.parentNode.removeChild(n)}),this.tags=[],this.ctr=0},r}(),_e=function(e,t,n){for(var a=0,s=0;a=s,s=j(),a===38&&s===12&&(t[n]=1),!J(s);)Z();return ge(e,Y)},$e=function(e,t){var n=-1,a=44;do switch(J(a)){case 0:a===38&&j()===12&&(t[n]=1),e[n]+=_e(Y-1,t,n);break;case 2:e[n]+=ye(a);break;case 4:if(a===44){e[++n]=j()===58?"&\f":"",t[n]=e[n].length;break}default:e[n]+=me(a)}while(a=Z());return e},Ae=function(e,t){return he($e(pe(e),t))},q=new WeakMap,ke=function(e){if(!(e.type!=="rule"||!e.parent||e.length<1)){for(var t=e.value,n=e.parent,a=e.column===n.column&&e.line===n.line;n.type!=="rule";)if(n=n.parent,!n)return;if(!(e.props.length===1&&t.charCodeAt(0)!==58&&!q.get(n))&&!a){q.set(e,!0);for(var s=[],i=Ae(t,s),c=n.props,u=0,y=0;u<i.length;u++)for(var l=0;l<c.length;l++,y++)e.props[y]=s[u]?i[u].replace(/&\f/g,c[l]):c[l]+" "+i[u]}}},Oe=function(e){if(e.type==="decl"){var t=e.value;t.charCodeAt(0)===108&&t.charCodeAt(2)===98&&(e.return="",e.value="")}};function X(r,e){switch(ue(r,e)){case 5103:return o+"print-"+r+r;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return o+r+r;case 5349:case 4246:case 4810:case 6968:case 2756:return o+r+N+r+p+r+r;case 6828:case 4268:return o+r+p+r+r;case 6165:return o+r+p+"flex-"+r+r;case 5187:return o+r+f(r,/(\w+).+(:[^]+)/,o+"box-$1$2"+p+"flex-$1$2")+r;case 5443:return o+r+p+"flex-item-"+f(r,/flex-|-self/,"")+r;case 4675:return o+r+p+"flex-line-pack"+f(r,/align-content|flex-|-self/,"")+r;case 5548:return o+r+p+f(r,"shrink","negative")+r;case 5292:return o+r+p+f(r,"basis","preferred-size")+r;case 6060:return o+"box-"+f(r,"-grow","")+o+r+p+f(r,"grow","positive")+r;case 4554:return o+f(r,/([^-])(transform)/g,"$1"+o+"$2")+r;case 6187:return f(f(f(r,/(zoom-|grab)/,o+"$1"),/(image-set)/,o+"$1"),r,"")+r;case 5495:case 3959:return f(r,/(image-set\([^]*)/,o+"$1$`$1");case 4968:return f(f(r,/(.+:)(flex-)?(.*)/,o+"box-pack:$3"+p+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+o+r+r;case 4095:case 3583:case 4068:case 2532:return f(r,/(.+)-inline(.+)/,o+"$1$2")+r;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(G(r)-1-e>6)switch(v(r,e+1)){case 109:if(v(r,e+4)!==45)break;case 102:return f(r,/(.+:)(.+)-([^]+)/,"$1"+o+"$2-$3$1"+N+(v(r,e+3)==108?"$3":"$2-$3"))+r;case 115:return~z(r,"stretch")?X(f(r,"stretch","fill-available"),e)+r:r}break;case 4949:if(v(r,e+1)!==115)break;case 6444:switch(v(r,G(r)-3-(~z(r,"!important")&&10))){case 107:return f(r,":",":"+o)+r;case 101:return f(r,/(.+:)([^;!]+)(;|!.+)?/,"$1"+o+(v(r,14)===45?"inline-":"")+"box$3$1"+o+"$2$3$1"+p+"$2box$3")+r}break;case 5936:switch(v(r,e+11)){case 114:return o+r+p+f(r,/[svh]\w+-[tblr]{2}/,"tb")+r;case 108:return o+r+p+f(r,/[svh]\w+-[tblr]{2}/,"tb-rl")+r;case 45:return o+r+p+f(r,/[svh]\w+-[tblr]{2}/,"lr")+r}return o+r+p+r+r}return r}var Re=function(e,t,n,a){if(e.length>-1&&!e.return)switch(e.type){case ce:e.return=X(e.value,e.length);break;case oe:return T([_(e,{value:f(e.value,"@","@"+o)})],a);case se:if(e.length)return ie(e.props,function(s){switch(le(s,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return T([_(e,{props:[f(s,/:(read-\w+)/,":"+N+"$1")]})],a);case"::placeholder":return T([_(e,{props:[f(s,/:(plac\w+)/,":"+o+"input-$1")]}),_(e,{props:[f(s,/:(plac\w+)/,":"+N+"$1")]}),_(e,{props:[f(s,/:(plac\w+)/,p+"input-$1")]})],a)}return""})}},Te=[Re],Ne=function(e){var t=e.key;if(t==="css"){var n=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(n,function(d){var h=d.getAttribute("data-emotion");h.indexOf(" ")!==-1&&(document.head.appendChild(d),d.setAttribute("data-s",""))})}var a=e.stylisPlugins||Te,s={},i,c=[];i=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+t+' "]'),function(d){for(var h=d.getAttribute("data-emotion").split(" "),b=1;b<h.length;b++)s[h[b]]=!0;c.push(d)});var u,y=[ke,Oe];{var l,g=[fe,ve(function(d){l.insert(d)})],F=Se(y.concat(a,g)),C=function(h){return T(de(h),F)};u=function(h,b,P,S){l=P,C(h?h+"{"+b.styles+"}":b.styles),S&&(m.inserted[b.name]=!0)}}var m={key:t,sheet:new Pe({key:t,container:i,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:s,registered:{},insert:u};return m.sheet.hydrate(c),m},Fe=!0;function Ie(r,e,t){var n="";return t.split(" ").forEach(function(a){r[a]!==void 0?e.push(r[a]+";"):n+=a+" "}),n}var ee=function(e,t,n){var a=e.key+"-"+t.name;(n===!1||Fe===!1)&&e.registered[a]===void 0&&(e.registered[a]=t.styles)},je=function(e,t,n){ee(e,t,n);var a=e.key+"-"+t.name;if(e.inserted[t.name]===void 0){var s=t;do e.insert(t===s?"."+a:"",s,e.sheet,!0),s=s.next;while(s!==void 0)}};function Me(r){for(var e=0,t,n=0,a=r.length;a>=4;++n,a-=4)t=r.charCodeAt(n)&255|(r.charCodeAt(++n)&255)<<8|(r.charCodeAt(++n)&255)<<16|(r.charCodeAt(++n)&255)<<24,t=(t&65535)*1540483477+((t>>>16)*59797<<16),t^=t>>>24,e=(t&65535)*1540483477+((t>>>16)*59797<<16)^(e&65535)*1540483477+((e>>>16)*59797<<16);switch(a){case 3:e^=(r.charCodeAt(n+2)&255)<<16;case 2:e^=(r.charCodeAt(n+1)&255)<<8;case 1:e^=r.charCodeAt(n)&255,e=(e&65535)*1540483477+((e>>>16)*59797<<16)}return e^=e>>>13,e=(e&65535)*1540483477+((e>>>16)*59797<<16),((e^e>>>15)>>>0).toString(36)}var Le={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},We=/[A-Z]|^ms/g,Ge=/_EMO_([^_]+?)_([^]*?)_EMO_/g,re=function(e){return e.charCodeAt(1)===45},B=function(e){return e!=null&&typeof e!="boolean"},I=xe(function(r){return re(r)?r:r.replace(We,"-$&").toLowerCase()}),H=function(e,t){switch(e){case"animation":case"animationName":if(typeof t=="string")return t.replace(Ge,function(n,a,s){return x={name:a,styles:s,next:x},a})}return Le[e]!==1&&!re(e)&&typeof t=="number"&&t!==0?t+"px":t};function $(r,e,t){if(t==null)return"";if(t.__emotion_styles!==void 0)return t;switch(typeof t){case"boolean":return"";case"object":{if(t.anim===1)return x={name:t.name,styles:t.styles,next:x},t.name;if(t.styles!==void 0){var n=t.next;if(n!==void 0)for(;n!==void 0;)x={name:n.name,styles:n.styles,next:x},n=n.next;var a=t.styles+";";return a}return ze(r,e,t)}case"function":{if(r!==void 0){var s=x,i=t(r);return x=s,$(r,e,i)}break}}if(e==null)return t;var c=e[t];return c!==void 0?c:t}function ze(r,e,t){var n="";if(Array.isArray(t))for(var a=0;a<t.length;a++)n+=$(r,e,t[a])+";";else for(var s in t){var i=t[s];if(typeof i!="object")e!=null&&e[i]!==void 0?n+=s+"{"+e[i]+"}":B(i)&&(n+=I(s)+":"+H(s,i)+";");else if(Array.isArray(i)&&typeof i[0]=="string"&&(e==null||e[i[0]]===void 0))for(var c=0;c<i.length;c++)B(i[c])&&(n+=I(s)+":"+H(s,i[c])+";");else{var u=$(r,e,i);switch(s){case"animation":case"animationName":{n+=I(s)+":"+u+";";break}default:n+=s+"{"+u+"}"}}}return n}var K=/label:\s*([^\s;\n{]+)\s*(;|$)/g,x,De=function(e,t,n){if(e.length===1&&typeof e[0]=="object"&&e[0]!==null&&e[0].styles!==void 0)return e[0];var a=!0,s="";x=void 0;var i=e[0];i==null||i.raw===void 0?(a=!1,s+=$(n,t,i)):s+=i[0];for(var c=1;c<e.length;c++)s+=$(n,t,e[c]),a&&(s+=i[c]);K.lastIndex=0;for(var u="",y;(y=K.exec(s))!==null;)u+="-"+y[1];var l=Me(s)+u;return{name:l,styles:s,next:x}},Ve=function(e){return e()},qe=D["useInsertionEffect"]?D["useInsertionEffect"]:!1,Be=qe||Ve,te=w.createContext(typeof HTMLElement<"u"?Ne({key:"css"}):null);te.Provider;var He=function(e){return w.forwardRef(function(t,n){var a=w.useContext(te);return e(t,a,n)})},Ke=w.createContext({}),Ue=we,Qe=function(e){return e!=="theme"},U=function(e){return typeof e=="string"&&e.charCodeAt(0)>96?Ue:Qe},Q=function(e,t,n){var a;if(t){var s=t.shouldForwardProp;a=e.__emotion_forwardProp&&s?function(i){return e.__emotion_forwardProp(i)&&s(i)}:s}return typeof a!="function"&&n&&(a=e.__emotion_forwardProp),a},Ze=function(e){var t=e.cache,n=e.serialized,a=e.isStringTag;return ee(t,n,a),Be(function(){return je(t,n,a)}),null},Je=function r(e,t){var n=e.__emotion_real===e,a=n&&e.__emotion_base||e,s,i;t!==void 0&&(s=t.label,i=t.target);var c=Q(e,t,n),u=c||U(a),y=!u("as");return function(){var l=arguments,g=n&&e.__emotion_styles!==void 0?e.__emotion_styles.slice(0):[];if(s!==void 0&&g.push("label:"+s+";"),l[0]==null||l[0].raw===void 0)g.push.apply(g,l);else{g.push(l[0][0]);for(var F=l.length,C=1;C<F;C++)g.push(l[C],l[0][C])}var m=He(function(d,h,b){var P=y&&d.as||a,S="",M=[],k=d;if(d.theme==null){k={};for(var L in d)k[L]=d[L];k.theme=w.useContext(Ke)}typeof d.className=="string"?S=Ie(h.registered,M,d.className):d.className!=null&&(S=d.className+" ");var W=De(g.concat(M),h.registered,k);S+=h.key+"-"+W.name,i!==void 0&&(S+=" "+i);var ne=y&&c===void 0?U(P):u,O={};for(var R in d)y&&R==="as"||ne(R)&&(O[R]=d[R]);return O.className=S,O.ref=b,w.createElement(w.Fragment,null,w.createElement(Ze,{cache:h,serialized:W,isStringTag:typeof P=="string"}),w.createElement(P,O))});return m.displayName=s!==void 0?s:"Styled("+(typeof a=="string"?a:a.displayName||a.name||"Component")+")",m.defaultProps=e.defaultProps,m.__emotion_real=m,m.__emotion_base=a,m.__emotion_styles=g,m.__emotion_forwardProp=c,Object.defineProperty(m,"toString",{value:function(){return"."+i}}),m.withComponent=function(d,h){return r(d,be({},t,h,{shouldForwardProp:Q(m,h,!0)})).apply(void 0,g)},m}},Ye=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],A=Je.bind();Ye.forEach(function(r){A[r]=A(r)});const Xe=A.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 100px;
`,er=A.h1`
  margin: 0;
  margin-right: 10px;
  color: #ffffff;
  text-shadow:
    0 0 5px #00baff,
    0 0 10px #00baff,
    0 0 20px #00baff,
    0 0 40px #00baff,
    0 0 80px #00baff;
`,rr=A.img`
  width: 40px;
  height: 40px;
  object-fit: cover;
`,tr="/project-Qwerty2024-front/assets/example-def0f7cb.png",nr=()=>E.jsxs(Xe,{children:[E.jsxs("div",{style:{display:"flex",gap:"20px"},children:[E.jsx(V,{to:"signin",children:"LogIn"}),E.jsx(V,{to:"signup",children:"Register"})]}),E.jsx(er,{children:"First Page"}),E.jsx(rr,{src:tr,alt:"Example"})]}),sr=nr;export{sr as default};
