(function () {
  'use strict';

  window.Vue=function(e){function t(e,t){const n=Object.create(null),o=e.split(",");for(let r=0;r<o.length;r++)n[o[r]]=!0;return t?e=>!!n[e.toLowerCase()]:e=>!!n[e]}const n=t("Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt"),o=t("itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly");function r(e){if(T(e)){const t={};for(let n=0;n<e.length;n++){const o=e[n],s=r(A(o)?l(o):o);if(s)for(const e in s)t[e]=s[e];}return t}if(O(e))return e}const s=/;(?![^(]*\))/g,i=/:(.+)/;function l(e){const t={};return e.split(s).forEach((e=>{if(e){const n=e.split(i);n.length>1&&(t[n[0].trim()]=n[1].trim());}})),t}function c(e){let t="";if(A(e))t=e;else if(T(e))for(let n=0;n<e.length;n++){const o=c(e[n]);o&&(t+=o+" ");}else if(O(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const a=t("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot"),u=t("svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistanceLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view"),p=t("area,base,br,col,embed,hr,img,input,link,meta,param,source,track,wbr");function f(e,t){if(e===t)return !0;let n=$(e),o=$(t);if(n||o)return !(!n||!o)&&e.getTime()===t.getTime();if(n=T(e),o=T(t),n||o)return !(!n||!o)&&function(e,t){if(e.length!==t.length)return !1;let n=!0;for(let o=0;n&&o<e.length;o++)n=f(e[o],t[o]);return n}(e,t);if(n=O(e),o=O(t),n||o){if(!n||!o)return !1;if(Object.keys(e).length!==Object.keys(t).length)return !1;for(const n in e){const o=e.hasOwnProperty(n),r=t.hasOwnProperty(n);if(o&&!r||!o&&r||!f(e[n],t[n]))return !1}}return String(e)===String(t)}function d(e,t){return e.findIndex((e=>f(e,t)))}const h=(e,t)=>N(t)?{[`Map(${t.size})`]:[...t.entries()].reduce(((e,[t,n])=>(e[`${t} =>`]=n,e)),{})}:E(t)?{[`Set(${t.size})`]:[...t.values()]}:!O(t)||T(t)||P(t)?t:String(t),m={},g=[],v=()=>{},y=()=>!1,b=/^on[^a-z]/,_=e=>b.test(e),x=e=>e.startsWith("onUpdate:"),S=Object.assign,C=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1);},k=Object.prototype.hasOwnProperty,w=(e,t)=>k.call(e,t),T=Array.isArray,N=e=>"[object Map]"===R(e),E=e=>"[object Set]"===R(e),$=e=>e instanceof Date,F=e=>"function"==typeof e,A=e=>"string"==typeof e,M=e=>"symbol"==typeof e,O=e=>null!==e&&"object"==typeof e,I=e=>O(e)&&F(e.then)&&F(e.catch),B=Object.prototype.toString,R=e=>B.call(e),P=e=>"[object Object]"===R(e),V=e=>A(e)&&"NaN"!==e&&"-"!==e[0]&&""+parseInt(e,10)===e,L=t(",key,ref,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),j=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},U=/-(\w)/g,H=j((e=>e.replace(U,((e,t)=>t?t.toUpperCase():"")))),D=/\B([A-Z])/g,W=j((e=>e.replace(D,"-$1").toLowerCase())),z=j((e=>e.charAt(0).toUpperCase()+e.slice(1))),K=j((e=>e?`on${z(e)}`:"")),G=(e,t)=>e!==t&&(e==e||t==t),q=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t);},J=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n});},Z=e=>{const t=parseFloat(e);return isNaN(t)?e:t},Q=new WeakMap,X=[];let Y;const ee=Symbol(""),te=Symbol("");function ne(e,t=m){(function(e){return e&&!0===e._isEffect})(e)&&(e=e.raw);const n=function(e,t){const n=function(){if(!n.active)return e();if(!X.includes(n)){se(n);try{return le.push(ie),ie=!0,X.push(n),Y=n,e()}finally{X.pop(),ae(),Y=X[X.length-1];}}};return n.id=re++,n.allowRecurse=!!t.allowRecurse,n._isEffect=!0,n.active=!0,n.raw=e,n.deps=[],n.options=t,n}(e,t);return t.lazy||n(),n}function oe(e){e.active&&(se(e),e.options.onStop&&e.options.onStop(),e.active=!1);}let re=0;function se(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0;}}let ie=!0;const le=[];function ce(){le.push(ie),ie=!1;}function ae(){const e=le.pop();ie=void 0===e||e;}function ue(e,t,n){if(!ie||void 0===Y)return;let o=Q.get(e);o||Q.set(e,o=new Map);let r=o.get(n);r||o.set(n,r=new Set),r.has(Y)||(r.add(Y),Y.deps.push(r));}function pe(e,t,n,o,r,s){const i=Q.get(e);if(!i)return;const l=new Set,c=e=>{e&&e.forEach((e=>{(e!==Y||e.allowRecurse)&&l.add(e);}));};if("clear"===t)i.forEach(c);else if("length"===n&&T(e))i.forEach(((e,t)=>{("length"===t||t>=o)&&c(e);}));else switch(void 0!==n&&c(i.get(n)),t){case"add":T(e)?V(n)&&c(i.get("length")):(c(i.get(ee)),N(e)&&c(i.get(te)));break;case"delete":T(e)||(c(i.get(ee)),N(e)&&c(i.get(te)));break;case"set":N(e)&&c(i.get(ee));}l.forEach((e=>{e.options.scheduler?e.options.scheduler(e):e();}));}const fe=t("__proto__,__v_isRef,__isVue"),de=new Set(Object.getOwnPropertyNames(Symbol).map((e=>Symbol[e])).filter(M)),he=be(),me=be(!1,!0),ge=be(!0),ve=be(!0,!0),ye={};function be(e=!1,t=!1){return function(n,o,r){if("__v_isReactive"===o)return !e;if("__v_isReadonly"===o)return e;if("__v_raw"===o&&r===(e?t?Qe:Ze:t?Je:qe).get(n))return n;const s=T(n);if(!e&&s&&w(ye,o))return Reflect.get(ye,o,r);const i=Reflect.get(n,o,r);if(M(o)?de.has(o):fe(o))return i;if(e||ue(n,0,o),t)return i;if(ct(i)){return !s||!V(o)?i.value:i}return O(i)?e?tt(i):Ye(i):i}}["includes","indexOf","lastIndexOf"].forEach((e=>{const t=Array.prototype[e];ye[e]=function(...e){const n=it(this);for(let t=0,r=this.length;t<r;t++)ue(n,0,t+"");const o=t.apply(n,e);return -1===o||!1===o?t.apply(n,e.map(it)):o};})),["push","pop","shift","unshift","splice"].forEach((e=>{const t=Array.prototype[e];ye[e]=function(...e){ce();const n=t.apply(this,e);return ae(),n};}));function _e(e=!1){return function(t,n,o,r){let s=t[n];if(!e&&(o=it(o),s=it(s),!T(t)&&ct(s)&&!ct(o)))return s.value=o,!0;const i=T(t)&&V(n)?Number(n)<t.length:w(t,n),l=Reflect.set(t,n,o,r);return t===it(r)&&(i?G(o,s)&&pe(t,"set",n,o):pe(t,"add",n,o)),l}}const xe={get:he,set:_e(),deleteProperty:function(e,t){const n=w(e,t),o=Reflect.deleteProperty(e,t);return o&&n&&pe(e,"delete",t,void 0),o},has:function(e,t){const n=Reflect.has(e,t);return M(t)&&de.has(t)||ue(e,0,t),n},ownKeys:function(e){return ue(e,0,T(e)?"length":ee),Reflect.ownKeys(e)}},Se={get:ge,set:(e,t)=>!0,deleteProperty:(e,t)=>!0},Ce=S({},xe,{get:me,set:_e(!0)}),ke=S({},Se,{get:ve}),we=e=>O(e)?Ye(e):e,Te=e=>O(e)?tt(e):e,Ne=e=>e,Ee=e=>Reflect.getPrototypeOf(e);function $e(e,t,n=!1,o=!1){const r=it(e=e.__v_raw),s=it(t);t!==s&&!n&&ue(r,0,t),!n&&ue(r,0,s);const{has:i}=Ee(r),l=o?Ne:n?Te:we;return i.call(r,t)?l(e.get(t)):i.call(r,s)?l(e.get(s)):void(e!==r&&e.get(t))}function Fe(e,t=!1){const n=this.__v_raw,o=it(n),r=it(e);return e!==r&&!t&&ue(o,0,e),!t&&ue(o,0,r),e===r?n.has(e):n.has(e)||n.has(r)}function Ae(e,t=!1){return e=e.__v_raw,!t&&ue(it(e),0,ee),Reflect.get(e,"size",e)}function Me(e){e=it(e);const t=it(this);return Ee(t).has.call(t,e)||(t.add(e),pe(t,"add",e,e)),this}function Oe(e,t){t=it(t);const n=it(this),{has:o,get:r}=Ee(n);let s=o.call(n,e);s||(e=it(e),s=o.call(n,e));const i=r.call(n,e);return n.set(e,t),s?G(t,i)&&pe(n,"set",e,t):pe(n,"add",e,t),this}function Ie(e){const t=it(this),{has:n,get:o}=Ee(t);let r=n.call(t,e);r||(e=it(e),r=n.call(t,e)),o&&o.call(t,e);const s=t.delete(e);return r&&pe(t,"delete",e,void 0),s}function Be(){const e=it(this),t=0!==e.size,n=e.clear();return t&&pe(e,"clear",void 0,void 0),n}function Re(e,t){return function(n,o){const r=this,s=r.__v_raw,i=it(s),l=t?Ne:e?Te:we;return !e&&ue(i,0,ee),s.forEach(((e,t)=>n.call(o,l(e),l(t),r)))}}function Pe(e,t,n){return function(...o){const r=this.__v_raw,s=it(r),i=N(s),l="entries"===e||e===Symbol.iterator&&i,c="keys"===e&&i,a=r[e](...o),u=n?Ne:t?Te:we;return !t&&ue(s,0,c?te:ee),{next(){const{value:e,done:t}=a.next();return t?{value:e,done:t}:{value:l?[u(e[0]),u(e[1])]:u(e),done:t}},[Symbol.iterator](){return this}}}}function Ve(e){return function(...t){return "delete"!==e&&this}}const Le={get(e){return $e(this,e)},get size(){return Ae(this)},has:Fe,add:Me,set:Oe,delete:Ie,clear:Be,forEach:Re(!1,!1)},je={get(e){return $e(this,e,!1,!0)},get size(){return Ae(this)},has:Fe,add:Me,set:Oe,delete:Ie,clear:Be,forEach:Re(!1,!0)},Ue={get(e){return $e(this,e,!0)},get size(){return Ae(this,!0)},has(e){return Fe.call(this,e,!0)},add:Ve("add"),set:Ve("set"),delete:Ve("delete"),clear:Ve("clear"),forEach:Re(!0,!1)},He={get(e){return $e(this,e,!0,!0)},get size(){return Ae(this,!0)},has(e){return Fe.call(this,e,!0)},add:Ve("add"),set:Ve("set"),delete:Ve("delete"),clear:Ve("clear"),forEach:Re(!0,!0)};function De(e,t){const n=t?e?He:je:e?Ue:Le;return (t,o,r)=>"__v_isReactive"===o?!e:"__v_isReadonly"===o?e:"__v_raw"===o?t:Reflect.get(w(n,o)&&o in t?n:t,o,r)}["keys","values","entries",Symbol.iterator].forEach((e=>{Le[e]=Pe(e,!1,!1),Ue[e]=Pe(e,!0,!1),je[e]=Pe(e,!1,!0),He[e]=Pe(e,!0,!0);}));const We={get:De(!1,!1)},ze={get:De(!1,!0)},Ke={get:De(!0,!1)},Ge={get:De(!0,!0)},qe=new WeakMap,Je=new WeakMap,Ze=new WeakMap,Qe=new WeakMap;function Xe(e){return e.__v_skip||!Object.isExtensible(e)?0:function(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}((e=>R(e).slice(8,-1))(e))}function Ye(e){return e&&e.__v_isReadonly?e:nt(e,!1,xe,We,qe)}function et(e){return nt(e,!1,Ce,ze,Je)}function tt(e){return nt(e,!0,Se,Ke,Ze)}function nt(e,t,n,o,r){if(!O(e))return e;if(e.__v_raw&&(!t||!e.__v_isReactive))return e;const s=r.get(e);if(s)return s;const i=Xe(e);if(0===i)return e;const l=new Proxy(e,2===i?o:n);return r.set(e,l),l}function ot(e){return rt(e)?ot(e.__v_raw):!(!e||!e.__v_isReactive)}function rt(e){return !(!e||!e.__v_isReadonly)}function st(e){return ot(e)||rt(e)}function it(e){return e&&it(e.__v_raw)||e}const lt=e=>O(e)?Ye(e):e;function ct(e){return Boolean(e&&!0===e.__v_isRef)}function at(e){return pt(e)}class ut{constructor(e,t=!1){this._rawValue=e,this._shallow=t,this.__v_isRef=!0,this._value=t?e:lt(e);}get value(){return ue(it(this),0,"value"),this._value}set value(e){G(it(e),this._rawValue)&&(this._rawValue=e,this._value=this._shallow?e:lt(e),pe(it(this),"set","value",e));}}function pt(e,t=!1){return ct(e)?e:new ut(e,t)}function ft(e){return ct(e)?e.value:e}const dt={get:(e,t,n)=>ft(Reflect.get(e,t,n)),set:(e,t,n,o)=>{const r=e[t];return ct(r)&&!ct(n)?(r.value=n,!0):Reflect.set(e,t,n,o)}};function ht(e){return ot(e)?e:new Proxy(e,dt)}class mt{constructor(e){this.__v_isRef=!0;const{get:t,set:n}=e((()=>ue(this,0,"value")),(()=>pe(this,"set","value")));this._get=t,this._set=n;}get value(){return this._get()}set value(e){this._set(e);}}class gt{constructor(e,t){this._object=e,this._key=t,this.__v_isRef=!0;}get value(){return this._object[this._key]}set value(e){this._object[this._key]=e;}}function vt(e,t){return ct(e[t])?e[t]:new gt(e,t)}class yt{constructor(e,t,n){this._setter=t,this._dirty=!0,this.__v_isRef=!0,this.effect=ne(e,{lazy:!0,scheduler:()=>{this._dirty||(this._dirty=!0,pe(it(this),"set","value"));}}),this.__v_isReadonly=n;}get value(){const e=it(this);return e._dirty&&(e._value=this.effect(),e._dirty=!1),ue(e,0,"value"),e._value}set value(e){this._setter(e);}}const bt=[];function _t(e,...t){ce();const n=bt.length?bt[bt.length-1].component:null,o=n&&n.appContext.config.warnHandler,r=function(){let e=bt[bt.length-1];if(!e)return [];const t=[];for(;e;){const n=t[0];n&&n.vnode===e?n.recurseCount++:t.push({vnode:e,recurseCount:0});const o=e.component&&e.component.parent;e=o&&o.vnode;}return t}();if(o)Ct(o,n,11,[e+t.join(""),n&&n.proxy,r.map((({vnode:e})=>`at <${Lr(n,e.type)}>`)).join("\n"),r]);else {const n=[`[Vue warn]: ${e}`,...t];r.length&&n.push("\n",...function(e){const t=[];return e.forEach(((e,n)=>{t.push(...0===n?[]:["\n"],...function({vnode:e,recurseCount:t}){const n=t>0?`... (${t} recursive calls)`:"",o=` at <${Lr(e.component,e.type,!!e.component&&null==e.component.parent)}`,r=">"+n;return e.props?[o,...xt(e.props),r]:[o+r]}(e));})),t}(r)),console.warn(...n);}ae();}function xt(e){const t=[],n=Object.keys(e);return n.slice(0,3).forEach((n=>{t.push(...St(n,e[n]));})),n.length>3&&t.push(" ..."),t}function St(e,t,n){return A(t)?(t=JSON.stringify(t),n?t:[`${e}=${t}`]):"number"==typeof t||"boolean"==typeof t||null==t?n?t:[`${e}=${t}`]:ct(t)?(t=St(e,it(t.value),!0),n?t:[`${e}=Ref<`,t,">"]):F(t)?[`${e}=fn${t.name?`<${t.name}>`:""}`]:(t=it(t),n?t:[`${e}=`,t])}function Ct(e,t,n,o){let r;try{r=o?e(...o):e();}catch(s){wt(s,t,n);}return r}function kt(e,t,n,o){if(F(e)){const r=Ct(e,t,n,o);return r&&I(r)&&r.catch((e=>{wt(e,t,n);})),r}const r=[];for(let s=0;s<e.length;s++)r.push(kt(e[s],t,n,o));return r}function wt(e,t,n,o=!0){if(t){let o=t.parent;const r=t.proxy,s=n;for(;o;){const t=o.ec;if(t)for(let n=0;n<t.length;n++)if(!1===t[n](e,r,s))return;o=o.parent;}const i=t.appContext.config.errorHandler;if(i)return void Ct(i,null,10,[e,r,s])}!function(e,t,n,o=!0){console.error(e);}(e,0,0,o);}let Tt=!1,Nt=!1;const Et=[];let $t=0;const Ft=[];let At=null,Mt=0;const Ot=[];let It=null,Bt=0;const Rt=Promise.resolve();let Pt=null,Vt=null;function Lt(e){const t=Pt||Rt;return e?t.then(this?e.bind(this):e):t}function jt(e){if(!(Et.length&&Et.includes(e,Tt&&e.allowRecurse?$t+1:$t)||e===Vt)){const t=function(e){let t=$t+1,n=Et.length;const o=Kt(e);for(;t<n;){const e=t+n>>>1;Kt(Et[e])<o?t=e+1:n=e;}return t}(e);t>-1?Et.splice(t,0,e):Et.push(e),Ut();}}function Ut(){Tt||Nt||(Nt=!0,Pt=Rt.then(Gt));}function Ht(e,t,n,o){T(e)?n.push(...e):t&&t.includes(e,e.allowRecurse?o+1:o)||n.push(e),Ut();}function Dt(e){Ht(e,It,Ot,Bt);}function Wt(e,t=null){if(Ft.length){for(Vt=t,At=[...new Set(Ft)],Ft.length=0,Mt=0;Mt<At.length;Mt++)At[Mt]();At=null,Mt=0,Vt=null,Wt(e,t);}}function zt(e){if(Ot.length){const e=[...new Set(Ot)];if(Ot.length=0,It)return void It.push(...e);for(It=e,It.sort(((e,t)=>Kt(e)-Kt(t))),Bt=0;Bt<It.length;Bt++)It[Bt]();It=null,Bt=0;}}const Kt=e=>null==e.id?1/0:e.id;function Gt(e){Nt=!1,Tt=!0,Wt(e),Et.sort(((e,t)=>Kt(e)-Kt(t)));try{for($t=0;$t<Et.length;$t++){const e=Et[$t];e&&!1!==e.active&&Ct(e,null,14);}}finally{$t=0,Et.length=0,zt(),Tt=!1,Pt=null,(Et.length||Ft.length||Ot.length)&&Gt(e);}}function qt(e,t,...n){const o=e.vnode.props||m;let r=n;const s=t.startsWith("update:"),i=s&&t.slice(7);if(i&&i in o){const e=`${"modelValue"===i?"model":i}Modifiers`,{number:t,trim:s}=o[e]||m;s?r=n.map((e=>e.trim())):t&&(r=n.map(Z));}let l,c=o[l=K(t)]||o[l=K(H(t))];!c&&s&&(c=o[l=K(W(t))]),c&&kt(c,e,6,r);const a=o[l+"Once"];if(a){if(e.emitted){if(e.emitted[l])return}else (e.emitted={})[l]=!0;kt(a,e,6,r);}}function Jt(e,t,n=!1){const o=t.emitsCache,r=o.get(e);if(void 0!==r)return r;const s=e.emits;let i={},l=!1;if(!F(e)){const o=e=>{const n=Jt(e,t,!0);n&&(l=!0,S(i,n));};!n&&t.mixins.length&&t.mixins.forEach(o),e.extends&&o(e.extends),e.mixins&&e.mixins.forEach(o);}return s||l?(T(s)?s.forEach((e=>i[e]=null)):S(i,s),o.set(e,i),i):(o.set(e,null),null)}function Zt(e,t){return !(!e||!_(t))&&(t=t.slice(2).replace(/Once$/,""),w(e,t[0].toLowerCase()+t.slice(1))||w(e,W(t))||w(e,t))}let Qt=null,Xt=null;function Yt(e){const t=Qt;return Qt=e,Xt=e&&e.type.__scopeId||null,t}function en(e,t=Qt,n){if(!t)return e;if(e._n)return e;const o=(...n)=>{o._d&&sr(-1);const r=Yt(t),s=e(...n);return Yt(r),o._d&&sr(1),s};return o._n=!0,o._c=!0,o._d=!0,o}function tn(e){const{type:t,vnode:n,proxy:o,withProxy:r,props:s,propsOptions:[i],slots:l,attrs:c,emit:a,render:u,renderCache:p,data:f,setupState:d,ctx:h,inheritAttrs:m}=e;let g;const v=Yt(e);try{let e;if(4&n.shapeFlag){const t=r||o;g=mr(u.call(t,t,p,s,d,f,h)),e=c;}else {const n=t;0,g=mr(n(s,n.length>1?{attrs:c,slots:l,emit:a}:null)),e=t.props?c:on(c);}let v=g;if(e&&!1!==m){const t=Object.keys(e),{shapeFlag:n}=v;t.length&&(1&n||6&n)&&(i&&t.some(x)&&(e=rn(e,i)),v=dr(v,e));}0,n.dirs&&(v.dirs=v.dirs?v.dirs.concat(n.dirs):n.dirs),n.transition&&(v.transition=n.transition),g=v;}catch(y){er.length=0,wt(y,e,1),g=fr(Xo);}return Yt(v),g}function nn(e){let t;for(let n=0;n<e.length;n++){const o=e[n];if(!lr(o))return;if(o.type!==Xo||"v-if"===o.children){if(t)return;t=o;}}return t}const on=e=>{let t;for(const n in e)("class"===n||"style"===n||_(n))&&((t||(t={}))[n]=e[n]);return t},rn=(e,t)=>{const n={};for(const o in e)x(o)&&o.slice(9)in t||(n[o]=e[o]);return n};function sn(e,t,n){const o=Object.keys(t);if(o.length!==Object.keys(e).length)return !0;for(let r=0;r<o.length;r++){const s=o[r];if(t[s]!==e[s]&&!Zt(n,s))return !0}return !1}function ln({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent;}const cn={name:"Suspense",__isSuspense:!0,process(e,t,n,o,r,s,i,l,c,a){null==e?function(e,t,n,o,r,s,i,l,c){const{p:a,o:{createElement:u}}=c,p=u("div"),f=e.suspense=an(e,r,o,t,p,n,s,i,l,c);a(null,f.pendingBranch=e.ssContent,p,null,o,f,s,i),f.deps>0?(a(null,e.ssFallback,t,n,o,null,s,i),fn(f,e.ssFallback)):f.resolve();}(t,n,o,r,s,i,l,c,a):function(e,t,n,o,r,s,i,l,{p:c,um:a,o:{createElement:u}}){const p=t.suspense=e.suspense;p.vnode=t,t.el=e.el;const f=t.ssContent,d=t.ssFallback,{activeBranch:h,pendingBranch:m,isInFallback:g,isHydrating:v}=p;if(m)p.pendingBranch=f,cr(f,m)?(c(m,f,p.hiddenContainer,null,r,p,s,i,l),p.deps<=0?p.resolve():g&&(c(h,d,n,o,r,null,s,i,l),fn(p,d))):(p.pendingId++,v?(p.isHydrating=!1,p.activeBranch=m):a(m,r,p),p.deps=0,p.effects.length=0,p.hiddenContainer=u("div"),g?(c(null,f,p.hiddenContainer,null,r,p,s,i,l),p.deps<=0?p.resolve():(c(h,d,n,o,r,null,s,i,l),fn(p,d))):h&&cr(f,h)?(c(h,f,n,o,r,p,s,i,l),p.resolve(!0)):(c(null,f,p.hiddenContainer,null,r,p,s,i,l),p.deps<=0&&p.resolve()));else if(h&&cr(f,h))c(h,f,n,o,r,p,s,i,l),fn(p,f);else {const e=t.props&&t.props.onPending;if(F(e)&&e(),p.pendingBranch=f,p.pendingId++,c(null,f,p.hiddenContainer,null,r,p,s,i,l),p.deps<=0)p.resolve();else {const{timeout:e,pendingId:t}=p;e>0?setTimeout((()=>{p.pendingId===t&&p.fallback(d);}),e):0===e&&p.fallback(d);}}}(e,t,n,o,r,i,l,c,a);},hydrate:function(e,t,n,o,r,s,i,l,c){const a=t.suspense=an(t,o,n,e.parentNode,document.createElement("div"),null,r,s,i,l,!0),u=c(e,a.pendingBranch=t.ssContent,n,a,s,i);0===a.deps&&a.resolve();return u},create:an,normalize:function(e){const{shapeFlag:t,children:n}=e,o=32&t;e.ssContent=un(o?n.default:n),e.ssFallback=o?un(n.fallback):fr(Comment);}};function an(e,t,n,o,r,s,i,l,c,a,u=!1){const{p:p,m:f,um:d,n:h,o:{parentNode:m,remove:g}}=a,v=Z(e.props&&e.props.timeout),y={vnode:e,parent:t,parentComponent:n,isSVG:i,container:o,hiddenContainer:r,anchor:s,deps:0,pendingId:0,timeout:"number"==typeof v?v:-1,activeBranch:null,pendingBranch:null,isInFallback:!0,isHydrating:u,isUnmounted:!1,effects:[],resolve(e=!1){const{vnode:t,activeBranch:n,pendingBranch:o,pendingId:r,effects:s,parentComponent:i,container:l}=y;if(y.isHydrating)y.isHydrating=!1;else if(!e){const e=n&&o.transition&&"out-in"===o.transition.mode;e&&(n.transition.afterLeave=()=>{r===y.pendingId&&f(o,l,t,0);});let{anchor:t}=y;n&&(t=h(n),d(n,i,y,!0)),e||f(o,l,t,0);}fn(y,o),y.pendingBranch=null,y.isInFallback=!1;let c=y.parent,a=!1;for(;c;){if(c.pendingBranch){c.effects.push(...s),a=!0;break}c=c.parent;}a||Dt(s),y.effects=[];const u=t.props&&t.props.onResolve;F(u)&&u();},fallback(e){if(!y.pendingBranch)return;const{vnode:t,activeBranch:n,parentComponent:o,container:r,isSVG:s}=y,i=t.props&&t.props.onFallback;F(i)&&i();const a=h(n),u=()=>{y.isInFallback&&(p(null,e,r,a,o,null,s,l,c),fn(y,e));},f=e.transition&&"out-in"===e.transition.mode;f&&(n.transition.afterLeave=u),d(n,o,null,!0),y.isInFallback=!0,f||u();},move(e,t,n){y.activeBranch&&f(y.activeBranch,e,t,n),y.container=e;},next:()=>y.activeBranch&&h(y.activeBranch),registerDep(e,t){const n=!!y.pendingBranch;n&&y.deps++;const o=e.vnode.el;e.asyncDep.catch((t=>{wt(t,e,0);})).then((r=>{if(e.isUnmounted||y.isUnmounted||y.pendingId!==e.suspenseId)return;e.asyncResolved=!0;const{vnode:s}=e;Mr(e,r),o&&(s.el=o);const l=!o&&e.subTree.el;t(e,s,m(o||e.subTree.el),o?null:h(e.subTree),y,i,c),l&&g(l),ln(e,s.el),n&&0==--y.deps&&y.resolve();}));},unmount(e,t){y.isUnmounted=!0,y.activeBranch&&d(y.activeBranch,n,e,t),y.pendingBranch&&d(y.pendingBranch,n,e,t);}};return y}function un(e){let t;if(F(e)){const n=e._c;n&&(e._d=!1,nr()),e=e(),n&&(e._d=!0,t=tr,or());}if(T(e)){const t=nn(e);e=t;}return e=mr(e),t&&(e.dynamicChildren=t.filter((t=>t!==e))),e}function pn(e,t){t&&t.pendingBranch?T(e)?t.effects.push(...e):t.effects.push(e):Dt(e);}function fn(e,t){e.activeBranch=t;const{vnode:n,parentComponent:o}=e,r=n.el=t.el;o&&o.subTree===n&&(o.vnode.el=r,ln(o,r));}function dn(e,t){if(Tr){let n=Tr.provides;const o=Tr.parent&&Tr.parent.provides;o===n&&(n=Tr.provides=Object.create(o)),n[e]=t;}}function hn(e,t,n=!1){const o=Tr||Qt;if(o){const r=null==o.parent?o.vnode.appContext&&o.vnode.appContext.provides:o.parent.provides;if(r&&e in r)return r[e];if(arguments.length>1)return n&&F(t)?t():t}}function mn(e,t){return yn(e,null,t)}const gn={};function vn(e,t,n){return yn(e,t,n)}function yn(e,t,{immediate:n,deep:o,flush:r,onTrack:s,onTrigger:i}=m,l=Tr){let c,a,u=!1,p=!1;if(ct(e)?(c=()=>e.value,u=!!e._shallow):ot(e)?(c=()=>e,o=!0):T(e)?(p=!0,u=e.some(ot),c=()=>e.map((e=>ct(e)?e.value:ot(e)?xn(e):F(e)?Ct(e,l,2):void 0))):c=F(e)?t?()=>Ct(e,l,2):()=>{if(!l||!l.isUnmounted)return a&&a(),kt(e,l,3,[f])}:v,t&&o){const e=c;c=()=>xn(e());}let f=e=>{a=y.options.onStop=()=>{Ct(e,l,4);};},d=p?[]:gn;const h=()=>{if(y.active)if(t){const e=y();(o||u||(p?e.some(((e,t)=>G(e,d[t]))):G(e,d)))&&(a&&a(),kt(t,l,3,[e,d===gn?void 0:d,f]),d=e);}else y();};let g;h.allowRecurse=!!t,g="sync"===r?h:"post"===r?()=>Io(h,l&&l.suspense):()=>{!l||l.isMounted?function(e){Ht(e,At,Ft,Mt);}(h):h();};const y=ne(c,{lazy:!0,onTrack:s,onTrigger:i,scheduler:g});return Rr(y,l),t?n?h():d=y():"post"===r?Io(y,l&&l.suspense):y(),()=>{oe(y),l&&C(l.effects,y);}}function bn(e,t,n){const o=this.proxy,r=A(e)?e.includes(".")?_n(o,e):()=>o[e]:e.bind(o,o);let s;return F(t)?s=t:(s=t.handler,n=t),yn(r,s.bind(o),n,this)}function _n(e,t){const n=t.split(".");return ()=>{let t=e;for(let e=0;e<n.length&&t;e++)t=t[n[e]];return t}}function xn(e,t=new Set){if(!O(e)||t.has(e)||e.__v_skip)return e;if(t.add(e),ct(e))xn(e.value,t);else if(T(e))for(let n=0;n<e.length;n++)xn(e[n],t);else if(E(e)||N(e))e.forEach((e=>{xn(e,t);}));else if(P(e))for(const n in e)xn(e[n],t);return e}function Sn(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Kn((()=>{e.isMounted=!0;})),Jn((()=>{e.isUnmounting=!0;})),e}const Cn=[Function,Array],kn={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Cn,onEnter:Cn,onAfterEnter:Cn,onEnterCancelled:Cn,onBeforeLeave:Cn,onLeave:Cn,onAfterLeave:Cn,onLeaveCancelled:Cn,onBeforeAppear:Cn,onAppear:Cn,onAfterAppear:Cn,onAppearCancelled:Cn},setup(e,{slots:t}){const n=Nr(),o=Sn();let r;return ()=>{const s=t.default&&Fn(t.default(),!0);if(!s||!s.length)return;const i=it(e),{mode:l}=i,c=s[0];if(o.isLeaving)return Nn(c);const a=En(c);if(!a)return Nn(c);const u=Tn(a,i,o,n);$n(a,u);const p=n.subTree,f=p&&En(p);let d=!1;const{getTransitionKey:h}=a.type;if(h){const e=h();void 0===r?r=e:e!==r&&(r=e,d=!0);}if(f&&f.type!==Xo&&(!cr(a,f)||d)){const e=Tn(f,i,o,n);if($n(f,e),"out-in"===l)return o.isLeaving=!0,e.afterLeave=()=>{o.isLeaving=!1,n.update();},Nn(c);"in-out"===l&&a.type!==Xo&&(e.delayLeave=(e,t,n)=>{wn(o,f)[String(f.key)]=f,e._leaveCb=()=>{t(),e._leaveCb=void 0,delete u.delayedLeave;},u.delayedLeave=n;});}return c}}};function wn(e,t){const{leavingVNodes:n}=e;let o=n.get(t.type);return o||(o=Object.create(null),n.set(t.type,o)),o}function Tn(e,t,n,o){const{appear:r,mode:s,persisted:i=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:a,onEnterCancelled:u,onBeforeLeave:p,onLeave:f,onAfterLeave:d,onLeaveCancelled:h,onBeforeAppear:m,onAppear:g,onAfterAppear:v,onAppearCancelled:y}=t,b=String(e.key),_=wn(n,e),x=(e,t)=>{e&&kt(e,o,9,t);},S={mode:s,persisted:i,beforeEnter(t){let o=l;if(!n.isMounted){if(!r)return;o=m||l;}t._leaveCb&&t._leaveCb(!0);const s=_[b];s&&cr(e,s)&&s.el._leaveCb&&s.el._leaveCb(),x(o,[t]);},enter(e){let t=c,o=a,s=u;if(!n.isMounted){if(!r)return;t=g||c,o=v||a,s=y||u;}let i=!1;const l=e._enterCb=t=>{i||(i=!0,x(t?s:o,[e]),S.delayedLeave&&S.delayedLeave(),e._enterCb=void 0);};t?(t(e,l),t.length<=1&&l()):l();},leave(t,o){const r=String(e.key);if(t._enterCb&&t._enterCb(!0),n.isUnmounting)return o();x(p,[t]);let s=!1;const i=t._leaveCb=n=>{s||(s=!0,o(),x(n?h:d,[t]),t._leaveCb=void 0,_[r]===e&&delete _[r]);};_[r]=e,f?(f(t,i),f.length<=1&&i()):i();},clone:e=>Tn(e,t,n,o)};return S}function Nn(e){if(In(e))return (e=dr(e)).children=null,e}function En(e){return In(e)?e.children?e.children[0]:void 0:e}function $n(e,t){6&e.shapeFlag&&e.component?$n(e.component.subTree,t):128&e.shapeFlag?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t;}function Fn(e,t=!1){let n=[],o=0;for(let r=0;r<e.length;r++){const s=e[r];s.type===Zo?(128&s.patchFlag&&o++,n=n.concat(Fn(s.children,t))):(t||s.type!==Xo)&&n.push(s);}if(o>1)for(let r=0;r<n.length;r++)n[r].patchFlag=-2;return n}function An(e){return F(e)?{setup:e,name:e.name}:e}const Mn=e=>!!e.type.__asyncLoader;function On(e,{vnode:{ref:t,props:n,children:o}}){const r=fr(e,n,o);return r.ref=t,r}const In=e=>e.type.__isKeepAlive,Bn={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(e,{slots:t}){const n=Nr(),o=n.ctx;if(!o.renderer)return t.default;const r=new Map,s=new Set;let i=null;const l=n.suspense,{renderer:{p:c,m:a,um:u,o:{createElement:p}}}=o,f=p("div");function d(e){Un(e),u(e,n,l);}function h(e){r.forEach(((t,n)=>{const o=Vr(t.type);!o||e&&e(o)||m(n);}));}function m(e){const t=r.get(e);i&&t.type===i.type?i&&Un(i):d(t),r.delete(e),s.delete(e);}o.activate=(e,t,n,o,r)=>{const s=e.component;a(e,t,n,0,l),c(s.vnode,e,t,n,s,l,o,e.slotScopeIds,r),Io((()=>{s.isDeactivated=!1,s.a&&q(s.a);const t=e.props&&e.props.onVnodeMounted;t&&Lo(t,s.parent,e);}),l);},o.deactivate=e=>{const t=e.component;a(e,f,null,1,l),Io((()=>{t.da&&q(t.da);const n=e.props&&e.props.onVnodeUnmounted;n&&Lo(n,t.parent,e),t.isDeactivated=!0;}),l);},vn((()=>[e.include,e.exclude]),(([e,t])=>{e&&h((t=>Rn(e,t))),t&&h((e=>!Rn(t,e)));}),{flush:"post",deep:!0});let g=null;const v=()=>{null!=g&&r.set(g,Hn(n.subTree));};return Kn(v),qn(v),Jn((()=>{r.forEach((e=>{const{subTree:t,suspense:o}=n,r=Hn(t);if(e.type!==r.type)d(e);else {Un(r);const e=r.component.da;e&&Io(e,o);}}));})),()=>{if(g=null,!t.default)return null;const n=t.default(),o=n[0];if(n.length>1)return i=null,n;if(!(lr(o)&&(4&o.shapeFlag||128&o.shapeFlag)))return i=null,o;let l=Hn(o);const c=l.type,a=Vr(Mn(l)?l.type.__asyncResolved||{}:c),{include:u,exclude:p,max:f}=e;if(u&&(!a||!Rn(u,a))||p&&a&&Rn(p,a))return i=l,o;const d=null==l.key?c:l.key,h=r.get(d);return l.el&&(l=dr(l),128&o.shapeFlag&&(o.ssContent=l)),g=d,h?(l.el=h.el,l.component=h.component,l.transition&&$n(l,l.transition),l.shapeFlag|=512,s.delete(d),s.add(d)):(s.add(d),f&&s.size>parseInt(f,10)&&m(s.values().next().value)),l.shapeFlag|=256,i=l,o}}};function Rn(e,t){return T(e)?e.some((e=>Rn(e,t))):A(e)?e.split(",").indexOf(t)>-1:!!e.test&&e.test(t)}function Pn(e,t){Ln(e,"a",t);}function Vn(e,t){Ln(e,"da",t);}function Ln(e,t,n=Tr){const o=e.__wdc||(e.__wdc=()=>{let t=n;for(;t;){if(t.isDeactivated)return;t=t.parent;}e();});if(Dn(t,o,n),n){let e=n.parent;for(;e&&e.parent;)In(e.parent.vnode)&&jn(o,t,n,e),e=e.parent;}}function jn(e,t,n,o){const r=Dn(t,e,o,!0);Zn((()=>{C(o[t],r);}),n);}function Un(e){let t=e.shapeFlag;256&t&&(t-=256),512&t&&(t-=512),e.shapeFlag=t;}function Hn(e){return 128&e.shapeFlag?e.ssContent:e}function Dn(e,t,n=Tr,o=!1){if(n){const r=n[e]||(n[e]=[]),s=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;ce(),Er(n);const r=kt(t,n,e,o);return Er(null),ae(),r});return o?r.unshift(s):r.push(s),s}}const Wn=e=>(t,n=Tr)=>(!Ar||"sp"===e)&&Dn(e,t,n),zn=Wn("bm"),Kn=Wn("m"),Gn=Wn("bu"),qn=Wn("u"),Jn=Wn("bum"),Zn=Wn("um"),Qn=Wn("sp"),Xn=Wn("rtg"),Yn=Wn("rtc");function eo(e,t=Tr){Dn("ec",e,t);}let to=!0;function no(e){const t=so(e),n=e.proxy,o=e.ctx;to=!1,t.beforeCreate&&oo(t.beforeCreate,e,"bc");const{data:r,computed:s,methods:i,watch:l,provide:c,inject:a,created:u,beforeMount:p,mounted:f,beforeUpdate:d,updated:h,activated:g,deactivated:y,beforeUnmount:b,unmounted:_,render:x,renderTracked:S,renderTriggered:C,errorCaptured:k,serverPrefetch:w,expose:N,inheritAttrs:E,components:$,directives:A}=t;if(a&&function(e,t,n=v){T(e)&&(e=ao(e));for(const o in e){const n=e[o];t[o]=O(n)?"default"in n?hn(n.from||o,n.default,!0):hn(n.from||o):hn(n);}}(a,o,null),i)for(const m in i){const e=i[m];F(e)&&(o[m]=e.bind(n));}if(r){const t=r.call(n,n);O(t)&&(e.data=Ye(t));}if(to=!0,s)for(const m in s){const e=s[m],t=jr({get:F(e)?e.bind(n,n):F(e.get)?e.get.bind(n,n):v,set:!F(e)&&F(e.set)?e.set.bind(n):v});Object.defineProperty(o,m,{enumerable:!0,configurable:!0,get:()=>t.value,set:e=>t.value=e});}if(l)for(const m in l)ro(l[m],o,n,m);if(c){const e=F(c)?c.call(n):c;Reflect.ownKeys(e).forEach((t=>{dn(t,e[t]);}));}function M(e,t){T(t)?t.forEach((t=>e(t.bind(n)))):t&&e(t.bind(n));}if(u&&oo(u,e,"c"),M(zn,p),M(Kn,f),M(Gn,d),M(qn,h),M(Pn,g),M(Vn,y),M(eo,k),M(Yn,S),M(Xn,C),M(Jn,b),M(Zn,_),M(Qn,w),T(N))if(N.length){const t=e.exposed||(e.exposed=ht({}));N.forEach((e=>{t[e]=vt(n,e);}));}else e.exposed||(e.exposed=m);x&&e.render===v&&(e.render=x),null!=E&&(e.inheritAttrs=E),$&&(e.components=$),A&&(e.directives=A);}function oo(e,t,n){kt(T(e)?e.map((e=>e.bind(t.proxy))):e.bind(t.proxy),t,n);}function ro(e,t,n,o){const r=o.includes(".")?_n(n,o):()=>n[o];if(A(e)){const n=t[e];F(n)&&vn(r,n);}else if(F(e))vn(r,e.bind(n));else if(O(e))if(T(e))e.forEach((e=>ro(e,t,n,o)));else {const o=F(e.handler)?e.handler.bind(n):t[e.handler];F(o)&&vn(r,o,e);}}function so(e){const t=e.type,{mixins:n,extends:o}=t,{mixins:r,optionsCache:s,config:{optionMergeStrategies:i}}=e.appContext,l=s.get(t);let c;return l?c=l:r.length||n||o?(c={},r.length&&r.forEach((e=>io(c,e,i,!0))),io(c,t,i)):c=t,s.set(t,c),c}function io(e,t,n,o=!1){const{mixins:r,extends:s}=t;s&&io(e,s,n,!0),r&&r.forEach((t=>io(e,t,n,!0)));for(const i in t)if(o&&"expose"===i);else {const o=lo[i]||n&&n[i];e[i]=o?o(e[i],t[i]):t[i];}return e}const lo={data:co,props:po,emits:po,methods:po,computed:po,beforeCreate:uo,created:uo,beforeMount:uo,mounted:uo,beforeUpdate:uo,updated:uo,beforeDestroy:uo,destroyed:uo,activated:uo,deactivated:uo,errorCaptured:uo,serverPrefetch:uo,components:po,directives:po,watch:po,provide:co,inject:function(e,t){return po(ao(e),ao(t))}};function co(e,t){return t?e?function(){return S(F(e)?e.call(this,this):e,F(t)?t.call(this,this):t)}:t:e}function ao(e){if(T(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function uo(e,t){return e?[...new Set([].concat(e,t))]:t}function po(e,t){return e?S(S(Object.create(null),e),t):t}function fo(e,t,n,o){const[r,s]=e.propsOptions;let i,l=!1;if(t)for(let c in t){if(L(c))continue;const a=t[c];let u;r&&w(r,u=H(c))?s&&s.includes(u)?(i||(i={}))[u]=a:n[u]=a:Zt(e.emitsOptions,c)||a!==o[c]&&(o[c]=a,l=!0);}if(s){const t=it(n),o=i||m;for(let i=0;i<s.length;i++){const l=s[i];n[l]=ho(r,t,l,o[l],e,!w(o,l));}}return l}function ho(e,t,n,o,r,s){const i=e[n];if(null!=i){const e=w(i,"default");if(e&&void 0===o){const e=i.default;if(i.type!==Function&&F(e)){const{propsDefaults:s}=r;n in s?o=s[n]:(Er(r),o=s[n]=e.call(null,t),Er(null));}else o=e;}i[0]&&(s&&!e?o=!1:!i[1]||""!==o&&o!==W(n)||(o=!0));}return o}function mo(e,t,n=!1){const o=t.propsCache,r=o.get(e);if(r)return r;const s=e.props,i={},l=[];let c=!1;if(!F(e)){const o=e=>{c=!0;const[n,o]=mo(e,t,!0);S(i,n),o&&l.push(...o);};!n&&t.mixins.length&&t.mixins.forEach(o),e.extends&&o(e.extends),e.mixins&&e.mixins.forEach(o);}if(!s&&!c)return o.set(e,g),g;if(T(s))for(let u=0;u<s.length;u++){const e=H(s[u]);go(e)&&(i[e]=m);}else if(s)for(const u in s){const e=H(u);if(go(e)){const t=s[u],n=i[e]=T(t)||F(t)?{type:t}:t;if(n){const t=bo(Boolean,n.type),o=bo(String,n.type);n[0]=t>-1,n[1]=o<0||t<o,(t>-1||w(n,"default"))&&l.push(e);}}}const a=[i,l];return o.set(e,a),a}function go(e){return "$"!==e[0]}function vo(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:""}function yo(e,t){return vo(e)===vo(t)}function bo(e,t){return T(t)?t.findIndex((t=>yo(t,e))):F(t)&&yo(t,e)?0:-1}const _o=e=>"_"===e[0]||"$stable"===e,xo=e=>T(e)?e.map(mr):[mr(e)],So=(e,t,n)=>{const o=en((e=>xo(t(e))),n);return o._c=!1,o},Co=(e,t,n)=>{const o=e._ctx;for(const r in e){if(_o(r))continue;const n=e[r];if(F(n))t[r]=So(0,n,o);else if(null!=n){const e=xo(n);t[r]=()=>e;}}},ko=(e,t)=>{const n=xo(t);e.slots.default=()=>n;};function wo(e,t,n,o){const r=e.dirs,s=t&&t.dirs;for(let i=0;i<r.length;i++){const l=r[i];s&&(l.oldValue=s[i].value);let c=l.dir[o];c&&(ce(),kt(c,n,8,[e.el,l,e,t]),ae());}}function To(){return {app:null,config:{isNativeTag:y,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let No=0;function Eo(e,t){return function(n,o=null){null==o||O(o)||(o=null);const r=To(),s=new Set;let i=!1;const l=r.app={_uid:No++,_component:n,_props:o,_container:null,_context:r,version:Dr,get config(){return r.config},set config(e){},use:(e,...t)=>(s.has(e)||(e&&F(e.install)?(s.add(e),e.install(l,...t)):F(e)&&(s.add(e),e(l,...t))),l),mixin:e=>(r.mixins.includes(e)||r.mixins.push(e),l),component:(e,t)=>t?(r.components[e]=t,l):r.components[e],directive:(e,t)=>t?(r.directives[e]=t,l):r.directives[e],mount(s,c,a){if(!i){const u=fr(n,o);return u.appContext=r,c&&t?t(u,s):e(u,s,a),i=!0,l._container=s,s.__vue_app__=l,u.component.proxy}},unmount(){i&&(e(null,l._container),delete l._container.__vue_app__);},provide:(e,t)=>(r.provides[e]=t,l)};return l}}let $o=!1;const Fo=e=>/svg/.test(e.namespaceURI)&&"foreignObject"!==e.tagName,Ao=e=>8===e.nodeType;function Mo(e){const{mt:t,p:n,o:{patchProp:o,nextSibling:r,parentNode:s,remove:i,insert:l,createComment:c}}=e,a=(n,o,i,l,c,m=!1)=>{const g=Ao(n)&&"["===n.data,v=()=>d(n,o,i,l,c,g),{type:y,ref:b,shapeFlag:_}=o,x=n.nodeType;o.el=n;let S=null;switch(y){case Qo:3!==x?S=v():(n.data!==o.children&&($o=!0,n.data=o.children),S=r(n));break;case Xo:S=8!==x||g?v():r(n);break;case Yo:if(1===x){S=n;const e=!o.children.length;for(let t=0;t<o.staticCount;t++)e&&(o.children+=S.outerHTML),t===o.staticCount-1&&(o.anchor=S),S=r(S);return S}S=v();break;case Zo:S=g?f(n,o,i,l,c,m):v();break;default:if(1&_)S=1!==x||o.type.toLowerCase()!==n.tagName.toLowerCase()?v():u(n,o,i,l,c,m);else if(6&_){o.slotScopeIds=c;const e=s(n);if(t(o,e,null,i,l,Fo(e),m),S=g?h(n):r(n),Mn(o)){let t;g?(t=fr(Zo),t.anchor=S?S.previousSibling:e.lastChild):t=3===n.nodeType?hr(""):fr("div"),t.el=n,o.component.subTree=t;}}else 64&_?S=8!==x?v():o.type.hydrate(n,o,i,l,c,m,e,p):128&_&&(S=o.type.hydrate(n,o,i,l,Fo(s(n)),c,m,e,a));}return null!=b&&Bo(b,null,l,o),S},u=(e,t,n,r,s,l)=>{l=l||!!t.dynamicChildren;const{props:c,patchFlag:a,shapeFlag:u,dirs:f}=t;if(-1!==a){if(f&&wo(t,null,n,"created"),c)if(!l||16&a||32&a)for(const t in c)!L(t)&&_(t)&&o(e,t,null,c[t]);else c.onClick&&o(e,"onClick",null,c.onClick);let d;if((d=c&&c.onVnodeBeforeMount)&&Lo(d,n,t),f&&wo(t,null,n,"beforeMount"),((d=c&&c.onVnodeMounted)||f)&&pn((()=>{d&&Lo(d,n,t),f&&wo(t,null,n,"mounted");}),r),16&u&&(!c||!c.innerHTML&&!c.textContent)){let o=p(e.firstChild,t,e,n,r,s,l);for(;o;){$o=!0;const e=o;o=o.nextSibling,i(e);}}else 8&u&&e.textContent!==t.children&&($o=!0,e.textContent=t.children);}return e.nextSibling},p=(e,t,o,r,s,i,l)=>{l=l||!!t.dynamicChildren;const c=t.children,u=c.length;for(let p=0;p<u;p++){const t=l?c[p]:c[p]=mr(c[p]);if(e)e=a(e,t,r,s,i,l);else {if(t.type===Qo&&!t.children)continue;$o=!0,n(null,t,o,null,r,s,Fo(o),i);}}return e},f=(e,t,n,o,i,a)=>{const{slotScopeIds:u}=t;u&&(i=i?i.concat(u):u);const f=s(e),d=p(r(e),t,f,n,o,i,a);return d&&Ao(d)&&"]"===d.data?r(t.anchor=d):($o=!0,l(t.anchor=c("]"),f,d),d)},d=(e,t,o,l,c,a)=>{if($o=!0,t.el=null,a){const t=h(e);for(;;){const n=r(e);if(!n||n===t)break;i(n);}}const u=r(e),p=s(e);return i(e),n(null,t,p,u,o,l,Fo(p),c),u},h=e=>{let t=0;for(;e;)if((e=r(e))&&Ao(e)&&("["===e.data&&t++,"]"===e.data)){if(0===t)return r(e);t--;}return e};return [(e,t)=>{$o=!1,a(t.firstChild,e,null,null,null),zt(),$o&&console.error("Hydration completed but contains mismatches.");},a]}const Oo={scheduler:jt,allowRecurse:!0},Io=pn,Bo=(e,t,n,o,r=!1)=>{if(T(e))return void e.forEach(((e,s)=>Bo(e,t&&(T(t)?t[s]:t),n,o,r)));if(Mn(o)&&!r)return;const s=r?null:4&o.shapeFlag?o.component.exposed||o.component.proxy:o.el,{i:i,r:l}=e,c=t&&t.r,a=i.refs===m?i.refs={}:i.refs,u=i.setupState;if(null!=c&&c!==l&&(A(c)?(a[c]=null,w(u,c)&&(u[c]=null)):ct(c)&&(c.value=null)),A(l)){const e=()=>{a[l]=s,w(u,l)&&(u[l]=s);};s?(e.id=-1,Io(e,n)):e();}else if(ct(l)){const e=()=>{l.value=s;};s?(e.id=-1,Io(e,n)):e();}else F(l)&&Ct(l,i,12,[s,a]);};function Ro(e){return Vo(e)}function Po(e){return Vo(e,Mo)}function Vo(e,t){const{insert:n,remove:o,patchProp:r,forcePatchProp:s,createElement:i,createText:l,createComment:c,setText:a,setElementText:u,parentNode:p,nextSibling:f,setScopeId:d=v,cloneNode:h,insertStaticContent:y}=e,b=(e,t,n,o=null,r=null,s=null,i=!1,l=null,c=!1)=>{e&&!cr(e,t)&&(o=Y(e),K(e,r,s,!0),e=null),-2===t.patchFlag&&(c=!1,t.dynamicChildren=null);const{type:a,ref:u,shapeFlag:p}=t;switch(a){case Qo:_(e,t,n,o);break;case Xo:x(e,t,n,o);break;case Yo:null==e&&C(t,n,o,i);break;case Zo:M(e,t,n,o,r,s,i,l,c);break;default:1&p?k(e,t,n,o,r,s,i,l,c):6&p?O(e,t,n,o,r,s,i,l,c):(64&p||128&p)&&a.process(e,t,n,o,r,s,i,l,c,te);}null!=u&&r&&Bo(u,e&&e.ref,s,t||e,!t);},_=(e,t,o,r)=>{if(null==e)n(t.el=l(t.children),o,r);else {const n=t.el=e.el;t.children!==e.children&&a(n,t.children);}},x=(e,t,o,r)=>{null==e?n(t.el=c(t.children||""),o,r):t.el=e.el;},C=(e,t,n,o)=>{[e.el,e.anchor]=y(e.children,t,n,o);},k=(e,t,n,o,r,s,i,l,c)=>{i=i||"svg"===t.type,null==e?T(t,n,o,r,s,i,l,c):$(e,t,r,s,i,l,c);},T=(e,t,o,s,l,c,a,p)=>{let f,d;const{type:m,props:g,shapeFlag:v,transition:y,patchFlag:b,dirs:_}=e;if(e.el&&void 0!==h&&-1===b)f=e.el=h(e.el);else {if(f=e.el=i(e.type,c,g&&g.is,g),8&v?u(f,e.children):16&v&&E(e.children,f,null,s,l,c&&"foreignObject"!==m,a,p||!!e.dynamicChildren),_&&wo(e,null,s,"created"),g){for(const t in g)L(t)||r(f,t,null,g[t],c,e.children,s,l,X);(d=g.onVnodeBeforeMount)&&Lo(d,s,e);}N(f,e,e.scopeId,a,s);}_&&wo(e,null,s,"beforeMount");const x=(!l||l&&!l.pendingBranch)&&y&&!y.persisted;x&&y.beforeEnter(f),n(f,t,o),((d=g&&g.onVnodeMounted)||x||_)&&Io((()=>{d&&Lo(d,s,e),x&&y.enter(f),_&&wo(e,null,s,"mounted");}),l);},N=(e,t,n,o,r)=>{if(n&&d(e,n),o)for(let s=0;s<o.length;s++)d(e,o[s]);if(r){if(t===r.subTree){const t=r.vnode;N(e,t,t.scopeId,t.slotScopeIds,r.parent);}}},E=(e,t,n,o,r,s,i,l,c=0)=>{for(let a=c;a<e.length;a++){const c=e[a]=l?gr(e[a]):mr(e[a]);b(null,c,t,n,o,r,s,i,l);}},$=(e,t,n,o,i,l,c)=>{const a=t.el=e.el;let{patchFlag:p,dynamicChildren:f,dirs:d}=t;p|=16&e.patchFlag;const h=e.props||m,g=t.props||m;let v;if((v=g.onVnodeBeforeUpdate)&&Lo(v,n,t,e),d&&wo(t,e,n,"beforeUpdate"),p>0){if(16&p)A(a,t,h,g,n,o,i);else if(2&p&&h.class!==g.class&&r(a,"class",null,g.class,i),4&p&&r(a,"style",h.style,g.style,i),8&p){const l=t.dynamicProps;for(let t=0;t<l.length;t++){const c=l[t],u=h[c],p=g[c];(p!==u||s&&s(a,c))&&r(a,c,u,p,i,e.children,n,o,X);}}1&p&&e.children!==t.children&&u(a,t.children);}else c||null!=f||A(a,t,h,g,n,o,i);const y=i&&"foreignObject"!==t.type;f?F(e.dynamicChildren,f,a,n,o,y,l):c||j(e,t,a,null,n,o,y,l,!1),((v=g.onVnodeUpdated)||d)&&Io((()=>{v&&Lo(v,n,t,e),d&&wo(t,e,n,"updated");}),o);},F=(e,t,n,o,r,s,i)=>{for(let l=0;l<t.length;l++){const c=e[l],a=t[l],u=c.el&&(c.type===Zo||!cr(c,a)||6&c.shapeFlag||64&c.shapeFlag)?p(c.el):n;b(c,a,u,null,o,r,s,i,!0);}},A=(e,t,n,o,i,l,c)=>{if(n!==o){for(const a in o){if(L(a))continue;const u=o[a],p=n[a];(u!==p||s&&s(e,a))&&r(e,a,p,u,c,t.children,i,l,X);}if(n!==m)for(const s in n)L(s)||s in o||r(e,s,n[s],null,c,t.children,i,l,X);}},M=(e,t,o,r,s,i,c,a,u)=>{const p=t.el=e?e.el:l(""),f=t.anchor=e?e.anchor:l("");let{patchFlag:d,dynamicChildren:h,slotScopeIds:m}=t;h&&(u=!0),m&&(a=a?a.concat(m):m),null==e?(n(p,o,r),n(f,o,r),E(t.children,o,f,s,i,c,a,u)):d>0&&64&d&&h&&e.dynamicChildren?(F(e.dynamicChildren,h,o,s,i,c,a),(null!=t.key||s&&t===s.subTree)&&jo(e,t,!0)):j(e,t,o,f,s,i,c,a,u);},O=(e,t,n,o,r,s,i,l,c)=>{t.slotScopeIds=l,null==e?512&t.shapeFlag?r.ctx.activate(t,n,o,i,c):B(t,n,o,r,s,i,c):R(e,t,c);},B=(e,t,n,o,r,s,i)=>{const l=e.component=function(e,t,n){const o=e.type,r=(t?t.appContext:e.appContext)||kr,s={uid:wr++,vnode:e,type:o,parent:t,appContext:r,root:null,next:null,subTree:null,update:null,render:null,proxy:null,exposed:null,withProxy:null,effects:null,provides:t?t.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:mo(o,r),emitsOptions:Jt(o,r),emit:null,emitted:null,propsDefaults:m,inheritAttrs:o.inheritAttrs,ctx:m,data:m,props:m,attrs:m,slots:m,refs:m,setupState:m,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=t?t.root:s,s.emit=qt.bind(null,s),s}(e,o,r);if(In(e)&&(l.ctx.renderer=te),function(e,t=!1){Ar=t;const{props:n,children:o}=e.vnode,r=$r(e);(function(e,t,n,o=!1){const r={},s={};J(s,ar,1),e.propsDefaults=Object.create(null),fo(e,t,r,s);for(const i in e.propsOptions[0])i in r||(r[i]=void 0);e.props=n?o?r:et(r):e.type.props?r:s,e.attrs=s;})(e,n,r,t),((e,t)=>{if(32&e.vnode.shapeFlag){const n=t._;n?(e.slots=it(t),J(t,"_",n)):Co(t,e.slots={});}else e.slots={},t&&ko(e,t);J(e.slots,ar,1);})(e,o);r?function(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,Sr);const{setup:o}=n;if(o){const n=e.setupContext=o.length>1?Br(e):null;Tr=e,ce();const r=Ct(o,e,0,[e.props,n]);if(ae(),Tr=null,I(r)){if(t)return r.then((t=>{Mr(e,t);})).catch((t=>{wt(t,e,0);}));e.asyncDep=r;}else Mr(e,r);}else Ir(e);}(e,t):void 0;Ar=!1;}(l),l.asyncDep){if(r&&r.registerDep(l,P),!e.el){const e=l.subTree=fr(Xo);x(null,e,t,n);}}else P(l,e,t,n,r,s,i);},R=(e,t,n)=>{const o=t.component=e.component;if(function(e,t,n){const{props:o,children:r,component:s}=e,{props:i,children:l,patchFlag:c}=t,a=s.emitsOptions;if(t.dirs||t.transition)return !0;if(!(n&&c>=0))return !(!r&&!l||l&&l.$stable)||o!==i&&(o?!i||sn(o,i,a):!!i);if(1024&c)return !0;if(16&c)return o?sn(o,i,a):!!i;if(8&c){const e=t.dynamicProps;for(let t=0;t<e.length;t++){const n=e[t];if(i[n]!==o[n]&&!Zt(a,n))return !0}}return !1}(e,t,n)){if(o.asyncDep&&!o.asyncResolved)return void V(o,t,n);o.next=t,function(e){const t=Et.indexOf(e);t>$t&&Et.splice(t,1);}(o.update),o.update();}else t.component=e.component,t.el=e.el,o.vnode=t;},P=(e,t,n,o,r,s,i)=>{e.update=ne((function(){if(e.isMounted){let t,{next:n,bu:o,u:l,parent:c,vnode:a}=e,u=n;n?(n.el=a.el,V(e,n,i)):n=a,o&&q(o),(t=n.props&&n.props.onVnodeBeforeUpdate)&&Lo(t,c,n,a);const f=tn(e),d=e.subTree;e.subTree=f,b(d,f,p(d.el),Y(d),e,r,s),n.el=f.el,null===u&&ln(e,f.el),l&&Io(l,r),(t=n.props&&n.props.onVnodeUpdated)&&Io((()=>Lo(t,c,n,a)),r);}else {let i;const{el:l,props:c}=t,{bm:a,m:u,parent:p}=e;if(a&&q(a),(i=c&&c.onVnodeBeforeMount)&&Lo(i,p,t),l&&se){const n=()=>{e.subTree=tn(e),se(l,e.subTree,e,r,null);};Mn(t)?t.type.__asyncLoader().then((()=>!e.isUnmounted&&n())):n();}else {const i=e.subTree=tn(e);b(null,i,n,o,e,r,s),t.el=i.el;}if(u&&Io(u,r),i=c&&c.onVnodeMounted){const e=t;Io((()=>Lo(i,p,e)),r);}256&t.shapeFlag&&e.a&&Io(e.a,r),e.isMounted=!0,t=n=o=null;}}),Oo);},V=(e,t,n)=>{t.component=e;const o=e.vnode.props;e.vnode=t,e.next=null,function(e,t,n,o){const{props:r,attrs:s,vnode:{patchFlag:i}}=e,l=it(r),[c]=e.propsOptions;let a=!1;if(!(o||i>0)||16&i){let o;fo(e,t,r,s)&&(a=!0);for(const s in l)t&&(w(t,s)||(o=W(s))!==s&&w(t,o))||(c?!n||void 0===n[s]&&void 0===n[o]||(r[s]=ho(c,l,s,void 0,e,!0)):delete r[s]);if(s!==l)for(const e in s)t&&w(t,e)||(delete s[e],a=!0);}else if(8&i){const n=e.vnode.dynamicProps;for(let o=0;o<n.length;o++){let i=n[o];const u=t[i];if(c)if(w(s,i))u!==s[i]&&(s[i]=u,a=!0);else {const t=H(i);r[t]=ho(c,l,t,u,e,!1);}else u!==s[i]&&(s[i]=u,a=!0);}}a&&pe(e,"set","$attrs");}(e,t.props,o,n),((e,t,n)=>{const{vnode:o,slots:r}=e;let s=!0,i=m;if(32&o.shapeFlag){const e=t._;e?n&&1===e?s=!1:(S(r,t),n||1!==e||delete r._):(s=!t.$stable,Co(t,r)),i=t;}else t&&(ko(e,t),i={default:1});if(s)for(const l in r)_o(l)||l in i||delete r[l];})(e,t.children,n),ce(),Wt(void 0,e.update),ae();},j=(e,t,n,o,r,s,i,l,c=!1)=>{const a=e&&e.children,p=e?e.shapeFlag:0,f=t.children,{patchFlag:d,shapeFlag:h}=t;if(d>0){if(128&d)return void D(a,f,n,o,r,s,i,l,c);if(256&d)return void U(a,f,n,o,r,s,i,l,c)}8&h?(16&p&&X(a,r,s),f!==a&&u(n,f)):16&p?16&h?D(a,f,n,o,r,s,i,l,c):X(a,r,s,!0):(8&p&&u(n,""),16&h&&E(f,n,o,r,s,i,l,c));},U=(e,t,n,o,r,s,i,l,c)=>{const a=(e=e||g).length,u=(t=t||g).length,p=Math.min(a,u);let f;for(f=0;f<p;f++){const o=t[f]=c?gr(t[f]):mr(t[f]);b(e[f],o,n,null,r,s,i,l,c);}a>u?X(e,r,s,!0,!1,p):E(t,n,o,r,s,i,l,c,p);},D=(e,t,n,o,r,s,i,l,c)=>{let a=0;const u=t.length;let p=e.length-1,f=u-1;for(;a<=p&&a<=f;){const o=e[a],u=t[a]=c?gr(t[a]):mr(t[a]);if(!cr(o,u))break;b(o,u,n,null,r,s,i,l,c),a++;}for(;a<=p&&a<=f;){const o=e[p],a=t[f]=c?gr(t[f]):mr(t[f]);if(!cr(o,a))break;b(o,a,n,null,r,s,i,l,c),p--,f--;}if(a>p){if(a<=f){const e=f+1,p=e<u?t[e].el:o;for(;a<=f;)b(null,t[a]=c?gr(t[a]):mr(t[a]),n,p,r,s,i,l,c),a++;}}else if(a>f)for(;a<=p;)K(e[a],r,s,!0),a++;else {const d=a,h=a,m=new Map;for(a=h;a<=f;a++){const e=t[a]=c?gr(t[a]):mr(t[a]);null!=e.key&&m.set(e.key,a);}let v,y=0;const _=f-h+1;let x=!1,S=0;const C=new Array(_);for(a=0;a<_;a++)C[a]=0;for(a=d;a<=p;a++){const o=e[a];if(y>=_){K(o,r,s,!0);continue}let u;if(null!=o.key)u=m.get(o.key);else for(v=h;v<=f;v++)if(0===C[v-h]&&cr(o,t[v])){u=v;break}void 0===u?K(o,r,s,!0):(C[u-h]=a+1,u>=S?S=u:x=!0,b(o,t[u],n,null,r,s,i,l,c),y++);}const k=x?function(e){const t=e.slice(),n=[0];let o,r,s,i,l;const c=e.length;for(o=0;o<c;o++){const c=e[o];if(0!==c){if(r=n[n.length-1],e[r]<c){t[o]=r,n.push(o);continue}for(s=0,i=n.length-1;s<i;)l=(s+i)/2|0,e[n[l]]<c?s=l+1:i=l;c<e[n[s]]&&(s>0&&(t[o]=n[s-1]),n[s]=o);}}s=n.length,i=n[s-1];for(;s-- >0;)n[s]=i,i=t[i];return n}(C):g;for(v=k.length-1,a=_-1;a>=0;a--){const e=h+a,p=t[e],f=e+1<u?t[e+1].el:o;0===C[a]?b(null,p,n,f,r,s,i,l,c):x&&(v<0||a!==k[v]?z(p,n,f,2):v--);}}},z=(e,t,o,r,s=null)=>{const{el:i,type:l,transition:c,children:a,shapeFlag:u}=e;if(6&u)return void z(e.component.subTree,t,o,r);if(128&u)return void e.suspense.move(t,o,r);if(64&u)return void l.move(e,t,o,te);if(l===Zo){n(i,t,o);for(let e=0;e<a.length;e++)z(a[e],t,o,r);return void n(e.anchor,t,o)}if(l===Yo)return void(({el:e,anchor:t},o,r)=>{let s;for(;e&&e!==t;)s=f(e),n(e,o,r),e=s;n(t,o,r);})(e,t,o);if(2!==r&&1&u&&c)if(0===r)c.beforeEnter(i),n(i,t,o),Io((()=>c.enter(i)),s);else {const{leave:e,delayLeave:r,afterLeave:s}=c,l=()=>n(i,t,o),a=()=>{e(i,(()=>{l(),s&&s();}));};r?r(i,l,a):a();}else n(i,t,o);},K=(e,t,n,o=!1,r=!1)=>{const{type:s,props:i,ref:l,children:c,dynamicChildren:a,shapeFlag:u,patchFlag:p,dirs:f}=e;if(null!=l&&Bo(l,null,n,e,!0),256&u)return void t.ctx.deactivate(e);const d=1&u&&f;let h;if((h=i&&i.onVnodeBeforeUnmount)&&Lo(h,t,e),6&u)Q(e.component,n,o);else {if(128&u)return void e.suspense.unmount(n,o);d&&wo(e,null,t,"beforeUnmount"),64&u?e.type.remove(e,t,n,r,te,o):a&&(s!==Zo||p>0&&64&p)?X(a,t,n,!1,!0):(s===Zo&&(128&p||256&p)||!r&&16&u)&&X(c,t,n),o&&G(e);}((h=i&&i.onVnodeUnmounted)||d)&&Io((()=>{h&&Lo(h,t,e),d&&wo(e,null,t,"unmounted");}),n);},G=e=>{const{type:t,el:n,anchor:r,transition:s}=e;if(t===Zo)return void Z(n,r);if(t===Yo)return void(({el:e,anchor:t})=>{let n;for(;e&&e!==t;)n=f(e),o(e),e=n;o(t);})(e);const i=()=>{o(n),s&&!s.persisted&&s.afterLeave&&s.afterLeave();};if(1&e.shapeFlag&&s&&!s.persisted){const{leave:t,delayLeave:o}=s,r=()=>t(n,i);o?o(e.el,i,r):r();}else i();},Z=(e,t)=>{let n;for(;e!==t;)n=f(e),o(e),e=n;o(t);},Q=(e,t,n)=>{const{bum:o,effects:r,update:s,subTree:i,um:l}=e;if(o&&q(o),r)for(let c=0;c<r.length;c++)oe(r[c]);s&&(oe(s),K(i,e,t,n)),l&&Io(l,t),Io((()=>{e.isUnmounted=!0;}),t),t&&t.pendingBranch&&!t.isUnmounted&&e.asyncDep&&!e.asyncResolved&&e.suspenseId===t.pendingId&&(t.deps--,0===t.deps&&t.resolve());},X=(e,t,n,o=!1,r=!1,s=0)=>{for(let i=s;i<e.length;i++)K(e[i],t,n,o,r);},Y=e=>6&e.shapeFlag?Y(e.component.subTree):128&e.shapeFlag?e.suspense.next():f(e.anchor||e.el),ee=(e,t,n)=>{null==e?t._vnode&&K(t._vnode,null,null,!0):b(t._vnode||null,e,t,null,null,null,n),zt(),t._vnode=e;},te={p:b,um:K,m:z,r:G,mt:B,mc:E,pc:j,pbc:F,n:Y,o:e};let re,se;return t&&([re,se]=t(te)),{render:ee,hydrate:re,createApp:Eo(ee,re)}}function Lo(e,t,n,o=null){kt(e,t,7,[n,o]);}function jo(e,t,n=!1){const o=e.children,r=t.children;if(T(o)&&T(r))for(let s=0;s<o.length;s++){const e=o[s];let t=r[s];1&t.shapeFlag&&!t.dynamicChildren&&((t.patchFlag<=0||32===t.patchFlag)&&(t=r[s]=gr(r[s]),t.el=e.el),n||jo(e,t));}}const Uo=e=>e&&(e.disabled||""===e.disabled),Ho=e=>"undefined"!=typeof SVGElement&&e instanceof SVGElement,Do=(e,t)=>{const n=e&&e.to;if(A(n)){if(t){return t(n)}return null}return n};function Wo(e,t,n,{o:{insert:o},m:r},s=2){0===s&&o(e.targetAnchor,t,n);const{el:i,anchor:l,shapeFlag:c,children:a,props:u}=e,p=2===s;if(p&&o(i,t,n),(!p||Uo(u))&&16&c)for(let f=0;f<a.length;f++)r(a[f],t,n,2);p&&o(l,t,n);}const zo={__isTeleport:!0,process(e,t,n,o,r,s,i,l,c,a){const{mc:u,pc:p,pbc:f,o:{insert:d,querySelector:h,createText:m}}=a,g=Uo(t.props);let{shapeFlag:v,children:y,dynamicChildren:b}=t;if(null==e){const e=t.el=m(""),a=t.anchor=m("");d(e,n,o),d(a,n,o);const p=t.target=Do(t.props,h),f=t.targetAnchor=m("");p&&(d(f,p),i=i||Ho(p));const b=(e,t)=>{16&v&&u(y,e,t,r,s,i,l,c);};g?b(n,a):p&&b(p,f);}else {t.el=e.el;const o=t.anchor=e.anchor,u=t.target=e.target,d=t.targetAnchor=e.targetAnchor,m=Uo(e.props),v=m?n:u,y=m?o:d;if(i=i||Ho(u),b?(f(e.dynamicChildren,b,v,r,s,i,l),jo(e,t,!0)):c||p(e,t,v,y,r,s,i,l,!1),g)m||Wo(t,n,o,a,1);else if((t.props&&t.props.to)!==(e.props&&e.props.to)){const e=t.target=Do(t.props,h);e&&Wo(t,e,null,a,0);}else m&&Wo(t,u,d,a,1);}},remove(e,t,n,o,{um:r,o:{remove:s}},i){const{shapeFlag:l,children:c,anchor:a,targetAnchor:u,target:p,props:f}=e;if(p&&s(u),(i||!Uo(f))&&(s(a),16&l))for(let d=0;d<c.length;d++){const e=c[d];r(e,t,n,!0,!!e.dynamicChildren);}},move:Wo,hydrate:function(e,t,n,o,r,s,{o:{nextSibling:i,parentNode:l,querySelector:c}},a){const u=t.target=Do(t.props,c);if(u){const c=u._lpa||u.firstChild;16&t.shapeFlag&&(Uo(t.props)?(t.anchor=a(i(e),t,l(e),n,o,r,s),t.targetAnchor=c):(t.anchor=i(e),t.targetAnchor=a(c,t,u,n,o,r,s)),u._lpa=t.targetAnchor&&i(t.targetAnchor));}return t.anchor&&i(t.anchor)}},Ko="components";const Go=Symbol();function qo(e,t,n=!0,o=!1){const r=Qt||Tr;if(r){const n=r.type;if(e===Ko){const e=Vr(n);if(e&&(e===t||e===H(t)||e===z(H(t))))return n}const s=Jo(r[e]||n[e],t)||Jo(r.appContext[e],t);return !s&&o?n:s}}function Jo(e,t){return e&&(e[t]||e[H(t)]||e[z(H(t))])}const Zo=Symbol(void 0),Qo=Symbol(void 0),Xo=Symbol(void 0),Yo=Symbol(void 0),er=[];let tr=null;function nr(e=!1){er.push(tr=e?null:[]);}function or(){er.pop(),tr=er[er.length-1]||null;}let rr=1;function sr(e){rr+=e;}function ir(e,t,n,o,r){const s=fr(e,t,n,o,r,!0);return s.dynamicChildren=rr>0?tr||g:null,or(),rr>0&&tr&&tr.push(s),s}function lr(e){return !!e&&!0===e.__v_isVNode}function cr(e,t){return e.type===t.type&&e.key===t.key}const ar="__vInternal",ur=({key:e})=>null!=e?e:null,pr=({ref:e})=>null!=e?A(e)||ct(e)||F(e)?{i:Qt,r:e}:e:null,fr=function(e,t=null,n=null,o=0,s=null,i=!1){e&&e!==Go||(e=Xo);if(lr(e)){const o=dr(e,t,!0);return n&&vr(o,n),o}l=e,F(l)&&"__vccOpts"in l&&(e=e.__vccOpts);var l;if(t){(st(t)||ar in t)&&(t=S({},t));let{class:e,style:n}=t;e&&!A(e)&&(t.class=c(e)),O(n)&&(st(n)&&!T(n)&&(n=S({},n)),t.style=r(n));}const a=A(e)?1:(e=>e.__isSuspense)(e)?128:(e=>e.__isTeleport)(e)?64:O(e)?4:F(e)?2:0,u={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&ur(t),ref:t&&pr(t),scopeId:Xt,slotScopeIds:null,children:null,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:a,patchFlag:o,dynamicProps:s,dynamicChildren:null,appContext:null};vr(u,n),128&a&&e.normalize(u);rr>0&&!i&&tr&&(o>0||6&a)&&32!==o&&tr.push(u);return u};function dr(e,t,n=!1){const{props:o,ref:r,patchFlag:s,children:i}=e,l=t?yr(o||{},t):o;return {__v_isVNode:!0,__v_skip:!0,type:e.type,props:l,key:l&&ur(l),ref:t&&t.ref?n&&r?T(r)?r.concat(pr(t)):[r,pr(t)]:pr(t):r,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:i,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Zo?-1===s?16:16|s:s,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&dr(e.ssContent),ssFallback:e.ssFallback&&dr(e.ssFallback),el:e.el,anchor:e.anchor}}function hr(e=" ",t=0){return fr(Qo,null,e,t)}function mr(e){return null==e||"boolean"==typeof e?fr(Xo):T(e)?fr(Zo,null,e.slice()):"object"==typeof e?gr(e):fr(Qo,null,String(e))}function gr(e){return null===e.el?e:dr(e)}function vr(e,t){let n=0;const{shapeFlag:o}=e;if(null==t)t=null;else if(T(t))n=16;else if("object"==typeof t){if(1&o||64&o){const n=t.default;return void(n&&(n._c&&(n._d=!1),vr(e,n()),n._c&&(n._d=!0)))}{n=32;const o=t._;o||ar in t?3===o&&Qt&&(1===Qt.slots._?t._=1:(t._=2,e.patchFlag|=1024)):t._ctx=Qt;}}else F(t)?(t={default:t,_ctx:Qt},n=32):(t=String(t),64&o?(n=16,t=[hr(t)]):n=8);e.children=t,e.shapeFlag|=n;}function yr(...e){const t=S({},e[0]);for(let n=1;n<e.length;n++){const o=e[n];for(const e in o)if("class"===e)t.class!==o.class&&(t.class=c([t.class,o.class]));else if("style"===e)t.style=r([t.style,o.style]);else if(_(e)){const n=t[e],r=o[e];n!==r&&(t[e]=n?[].concat(n,r):r);}else ""!==e&&(t[e]=o[e]);}return t}function br(e){return e.some((e=>!lr(e)||e.type!==Xo&&!(e.type===Zo&&!br(e.children))))?e:null}const _r=e=>e?$r(e)?e.exposed?e.exposed:e.proxy:_r(e.parent):null,xr=S(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>_r(e.parent),$root:e=>_r(e.root),$emit:e=>e.emit,$options:e=>so(e),$forceUpdate:e=>()=>jt(e.update),$nextTick:e=>Lt.bind(e.proxy),$watch:e=>bn.bind(e)}),Sr={get({_:e},t){const{ctx:n,setupState:o,data:r,props:s,accessCache:i,type:l,appContext:c}=e;if("__v_skip"===t)return !0;let a;if("$"!==t[0]){const l=i[t];if(void 0!==l)switch(l){case 0:return o[t];case 1:return r[t];case 3:return n[t];case 2:return s[t]}else {if(o!==m&&w(o,t))return i[t]=0,o[t];if(r!==m&&w(r,t))return i[t]=1,r[t];if((a=e.propsOptions[0])&&w(a,t))return i[t]=2,s[t];if(n!==m&&w(n,t))return i[t]=3,n[t];to&&(i[t]=4);}}const u=xr[t];let p,f;return u?("$attrs"===t&&ue(e,0,t),u(e)):(p=l.__cssModules)&&(p=p[t])?p:n!==m&&w(n,t)?(i[t]=3,n[t]):(f=c.config.globalProperties,w(f,t)?f[t]:void 0)},set({_:e},t,n){const{data:o,setupState:r,ctx:s}=e;if(r!==m&&w(r,t))r[t]=n;else if(o!==m&&w(o,t))o[t]=n;else if(w(e.props,t))return !1;return ("$"!==t[0]||!(t.slice(1)in e))&&(s[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:o,appContext:r,propsOptions:s}},i){let l;return void 0!==n[i]||e!==m&&w(e,i)||t!==m&&w(t,i)||(l=s[0])&&w(l,i)||w(o,i)||w(xr,i)||w(r.config.globalProperties,i)}},Cr=S({},Sr,{get(e,t){if(t!==Symbol.unscopables)return Sr.get(e,t,e)},has:(e,t)=>"_"!==t[0]&&!n(t)}),kr=To();let wr=0;let Tr=null;const Nr=()=>Tr||Qt,Er=e=>{Tr=e;};function $r(e){return 4&e.vnode.shapeFlag}let Fr,Ar=!1;function Mr(e,t,n){F(t)?e.render=t:O(t)&&(e.setupState=ht(t)),Ir(e);}function Or(e){Fr=e;}function Ir(e,t,n){const o=e.type;if(!e.render){if(Fr&&!o.render){const t=o.template;if(t){const{isCustomElement:n,compilerOptions:r}=e.appContext.config,{delimiters:s,compilerOptions:i}=o,l=S(S({isCustomElement:n,delimiters:s},r),i);o.render=Fr(t,l);}}e.render=o.render||v,e.render._rc&&(e.withProxy=new Proxy(e.ctx,Cr));}Tr=e,ce(),no(e),ae(),Tr=null;}function Br(e){const t=t=>{e.exposed=ht(t);};return {attrs:e.attrs,slots:e.slots,emit:e.emit,expose:t}}function Rr(e,t=Tr){t&&(t.effects||(t.effects=[])).push(e);}const Pr=/(?:^|[-_])(\w)/g;function Vr(e){return F(e)&&e.displayName||e.name}function Lr(e,t,n=!1){let o=Vr(t);if(!o&&t.__file){const e=t.__file.match(/([^/\\]+)\.\w+$/);e&&(o=e[1]);}if(!o&&e&&e.parent){const n=e=>{for(const n in e)if(e[n]===t)return n};o=n(e.components||e.parent.type.components)||n(e.appContext.components);}return o?o.replace(Pr,(e=>e.toUpperCase())).replace(/[-_]/g,""):n?"App":"Anonymous"}function jr(e){const t=function(e){let t,n;return F(e)?(t=e,n=v):(t=e.get,n=e.set),new yt(t,n,F(e)||!e.set)}(e);return Rr(t.effect),t}function Ur(e,t,n){const o=arguments.length;return 2===o?O(t)&&!T(t)?lr(t)?fr(e,null,[t]):fr(e,t):fr(e,null,t):(o>3?n=Array.prototype.slice.call(arguments,2):3===o&&lr(n)&&(n=[n]),fr(e,t,n))}const Hr=Symbol("");const Dr="3.1.1",Wr="http://www.w3.org/2000/svg",zr="undefined"!=typeof document?document:null;let Kr,Gr;const qr={insert:(e,t,n)=>{t.insertBefore(e,n||null);},remove:e=>{const t=e.parentNode;t&&t.removeChild(e);},createElement:(e,t,n,o)=>{const r=t?zr.createElementNS(Wr,e):zr.createElement(e,n?{is:n}:void 0);return "select"===e&&o&&null!=o.multiple&&r.setAttribute("multiple",o.multiple),r},createText:e=>zr.createTextNode(e),createComment:e=>zr.createComment(e),setText:(e,t)=>{e.nodeValue=t;},setElementText:(e,t)=>{e.textContent=t;},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>zr.querySelector(e),setScopeId(e,t){e.setAttribute(t,"");},cloneNode(e){const t=e.cloneNode(!0);return "_value"in e&&(t._value=e._value),t},insertStaticContent(e,t,n,o){const r=o?Gr||(Gr=zr.createElementNS(Wr,"svg")):Kr||(Kr=zr.createElement("div"));r.innerHTML=e;const s=r.firstChild;let i=s,l=i;for(;i;)l=i,qr.insert(i,t,n),i=r.firstChild;return [s,l]}};const Jr=/\s*!important$/;function Zr(e,t,n){if(T(n))n.forEach((n=>Zr(e,t,n)));else if(t.startsWith("--"))e.setProperty(t,n);else {const o=function(e,t){const n=Xr[t];if(n)return n;let o=H(t);if("filter"!==o&&o in e)return Xr[t]=o;o=z(o);for(let r=0;r<Qr.length;r++){const n=Qr[r]+o;if(n in e)return Xr[t]=n}return t}(e,t);Jr.test(n)?e.setProperty(W(o),n.replace(Jr,""),"important"):e[o]=n;}}const Qr=["Webkit","Moz","ms"],Xr={};const Yr="http://www.w3.org/1999/xlink";let es=Date.now,ts=!1;if("undefined"!=typeof window){es()>document.createEvent("Event").timeStamp&&(es=()=>performance.now());const e=navigator.userAgent.match(/firefox\/(\d+)/i);ts=!!(e&&Number(e[1])<=53);}let ns=0;const os=Promise.resolve(),rs=()=>{ns=0;};function ss(e,t,n,o){e.addEventListener(t,n,o);}function is(e,t,n,o,r=null){const s=e._vei||(e._vei={}),i=s[t];if(o&&i)i.value=o;else {const[n,l]=function(e){let t;if(ls.test(e)){let n;for(t={};n=e.match(ls);)e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0;}return [W(e.slice(2)),t]}(t);if(o){ss(e,n,s[t]=function(e,t){const n=e=>{const o=e.timeStamp||es();(ts||o>=n.attached-1)&&kt(function(e,t){if(T(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0;},t.map((e=>t=>!t._stopped&&e(t)))}return t}(e,n.value),t,5,[e]);};return n.value=e,n.attached=(()=>ns||(os.then(rs),ns=es()))(),n}(o,r),l);}else i&&(!function(e,t,n,o){e.removeEventListener(t,n,o);}(e,n,i,l),s[t]=void 0);}}const ls=/(?:Once|Passive|Capture)$/;const cs=/^on[a-z]/;function as(e,t){if(128&e.shapeFlag){const n=e.suspense;e=n.activeBranch,n.pendingBranch&&!n.isHydrating&&n.effects.push((()=>{as(n.activeBranch,t);}));}for(;e.component;)e=e.component.subTree;if(1&e.shapeFlag&&e.el){const n=e.el.style;for(const e in t)n.setProperty(`--${e}`,t[e]);}else e.type===Zo&&e.children.forEach((e=>as(e,t)));}const us="transition",ps="animation",fs=(e,{slots:t})=>Ur(kn,vs(e),t);fs.displayName="Transition";const ds={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},hs=fs.props=S({},kn.props,ds),ms=(e,t=[])=>{T(e)?e.forEach((e=>e(...t))):e&&e(...t);},gs=e=>!!e&&(T(e)?e.some((e=>e.length>1)):e.length>1);function vs(e){const t={};for(const S in e)S in ds||(t[S]=e[S]);if(!1===e.css)return t;const{name:n="v",type:o,duration:r,enterFromClass:s=`${n}-enter-from`,enterActiveClass:i=`${n}-enter-active`,enterToClass:l=`${n}-enter-to`,appearFromClass:c=s,appearActiveClass:a=i,appearToClass:u=l,leaveFromClass:p=`${n}-leave-from`,leaveActiveClass:f=`${n}-leave-active`,leaveToClass:d=`${n}-leave-to`}=e,h=function(e){if(null==e)return null;if(O(e))return [ys(e.enter),ys(e.leave)];{const t=ys(e);return [t,t]}}(r),m=h&&h[0],g=h&&h[1],{onBeforeEnter:v,onEnter:y,onEnterCancelled:b,onLeave:_,onLeaveCancelled:x,onBeforeAppear:C=v,onAppear:k=y,onAppearCancelled:w=b}=t,T=(e,t,n)=>{_s(e,t?u:l),_s(e,t?a:i),n&&n();},N=(e,t)=>{_s(e,d),_s(e,f),t&&t();},E=e=>(t,n)=>{const r=e?k:y,i=()=>T(t,e,n);ms(r,[t,i]),xs((()=>{_s(t,e?c:s),bs(t,e?u:l),gs(r)||Cs(t,o,m,i);}));};return S(t,{onBeforeEnter(e){ms(v,[e]),bs(e,s),bs(e,i);},onBeforeAppear(e){ms(C,[e]),bs(e,c),bs(e,a);},onEnter:E(!1),onAppear:E(!0),onLeave(e,t){const n=()=>N(e,t);bs(e,p),Ns(),bs(e,f),xs((()=>{_s(e,p),bs(e,d),gs(_)||Cs(e,o,g,n);})),ms(_,[e,n]);},onEnterCancelled(e){T(e,!1),ms(b,[e]);},onAppearCancelled(e){T(e,!0),ms(w,[e]);},onLeaveCancelled(e){N(e),ms(x,[e]);}})}function ys(e){return Z(e)}function bs(e,t){t.split(/\s+/).forEach((t=>t&&e.classList.add(t))),(e._vtc||(e._vtc=new Set)).add(t);}function _s(e,t){t.split(/\s+/).forEach((t=>t&&e.classList.remove(t)));const{_vtc:n}=e;n&&(n.delete(t),n.size||(e._vtc=void 0));}function xs(e){requestAnimationFrame((()=>{requestAnimationFrame(e);}));}let Ss=0;function Cs(e,t,n,o){const r=e._endId=++Ss,s=()=>{r===e._endId&&o();};if(n)return setTimeout(s,n);const{type:i,timeout:l,propCount:c}=ks(e,t);if(!i)return o();const a=i+"end";let u=0;const p=()=>{e.removeEventListener(a,f),s();},f=t=>{t.target===e&&++u>=c&&p();};setTimeout((()=>{u<c&&p();}),l+1),e.addEventListener(a,f);}function ks(e,t){const n=window.getComputedStyle(e),o=e=>(n[e]||"").split(", "),r=o("transitionDelay"),s=o("transitionDuration"),i=ws(r,s),l=o("animationDelay"),c=o("animationDuration"),a=ws(l,c);let u=null,p=0,f=0;t===us?i>0&&(u=us,p=i,f=s.length):t===ps?a>0&&(u=ps,p=a,f=c.length):(p=Math.max(i,a),u=p>0?i>a?us:ps:null,f=u?u===us?s.length:c.length:0);return {type:u,timeout:p,propCount:f,hasTransform:u===us&&/\b(transform|all)(,|$)/.test(n.transitionProperty)}}function ws(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map(((t,n)=>Ts(t)+Ts(e[n]))))}function Ts(e){return 1e3*Number(e.slice(0,-1).replace(",","."))}function Ns(){return document.body.offsetHeight}const Es=new WeakMap,$s=new WeakMap,Fs={name:"TransitionGroup",props:S({},hs,{tag:String,moveClass:String}),setup(e,{slots:t}){const n=Nr(),o=Sn();let r,s;return qn((()=>{if(!r.length)return;const t=e.moveClass||`${e.name||"v"}-move`;if(!function(e,t,n){const o=e.cloneNode();e._vtc&&e._vtc.forEach((e=>{e.split(/\s+/).forEach((e=>e&&o.classList.remove(e)));}));n.split(/\s+/).forEach((e=>e&&o.classList.add(e))),o.style.display="none";const r=1===t.nodeType?t:t.parentNode;r.appendChild(o);const{hasTransform:s}=ks(o);return r.removeChild(o),s}(r[0].el,n.vnode.el,t))return;r.forEach(As),r.forEach(Ms);const o=r.filter(Os);Ns(),o.forEach((e=>{const n=e.el,o=n.style;bs(n,t),o.transform=o.webkitTransform=o.transitionDuration="";const r=n._moveCb=e=>{e&&e.target!==n||e&&!/transform$/.test(e.propertyName)||(n.removeEventListener("transitionend",r),n._moveCb=null,_s(n,t));};n.addEventListener("transitionend",r);}));})),()=>{const i=it(e),l=vs(i);let c=i.tag||Zo;r=s,s=t.default?Fn(t.default()):[];for(let e=0;e<s.length;e++){const t=s[e];null!=t.key&&$n(t,Tn(t,l,o,n));}if(r)for(let e=0;e<r.length;e++){const t=r[e];$n(t,Tn(t,l,o,n)),Es.set(t,t.el.getBoundingClientRect());}return fr(c,null,s)}}};function As(e){const t=e.el;t._moveCb&&t._moveCb(),t._enterCb&&t._enterCb();}function Ms(e){$s.set(e,e.el.getBoundingClientRect());}function Os(e){const t=Es.get(e),n=$s.get(e),o=t.left-n.left,r=t.top-n.top;if(o||r){const t=e.el.style;return t.transform=t.webkitTransform=`translate(${o}px,${r}px)`,t.transitionDuration="0s",e}}const Is=e=>{const t=e.props["onUpdate:modelValue"];return T(t)?e=>q(t,e):t};function Bs(e){e.target.composing=!0;}function Rs(e){const t=e.target;t.composing&&(t.composing=!1,function(e,t){const n=document.createEvent("HTMLEvents");n.initEvent(t,!0,!0),e.dispatchEvent(n);}(t,"input"));}const Ps={created(e,{modifiers:{lazy:t,trim:n,number:o}},r){e._assign=Is(r);const s=o||"number"===e.type;ss(e,t?"change":"input",(t=>{if(t.target.composing)return;let o=e.value;n?o=o.trim():s&&(o=Z(o)),e._assign(o);})),n&&ss(e,"change",(()=>{e.value=e.value.trim();})),t||(ss(e,"compositionstart",Bs),ss(e,"compositionend",Rs),ss(e,"change",Rs));},mounted(e,{value:t}){e.value=null==t?"":t;},beforeUpdate(e,{value:t,modifiers:{trim:n,number:o}},r){if(e._assign=Is(r),e.composing)return;if(document.activeElement===e){if(n&&e.value.trim()===t)return;if((o||"number"===e.type)&&Z(e.value)===t)return}const s=null==t?"":t;e.value!==s&&(e.value=s);}},Vs={created(e,t,n){e._assign=Is(n),ss(e,"change",(()=>{const t=e._modelValue,n=Ds(e),o=e.checked,r=e._assign;if(T(t)){const e=d(t,n),s=-1!==e;if(o&&!s)r(t.concat(n));else if(!o&&s){const n=[...t];n.splice(e,1),r(n);}}else if(E(t)){const e=new Set(t);o?e.add(n):e.delete(n),r(e);}else r(Ws(e,o));}));},mounted:Ls,beforeUpdate(e,t,n){e._assign=Is(n),Ls(e,t,n);}};function Ls(e,{value:t,oldValue:n},o){e._modelValue=t,T(t)?e.checked=d(t,o.props.value)>-1:E(t)?e.checked=t.has(o.props.value):t!==n&&(e.checked=f(t,Ws(e,!0)));}const js={created(e,{value:t},n){e.checked=f(t,n.props.value),e._assign=Is(n),ss(e,"change",(()=>{e._assign(Ds(e));}));},beforeUpdate(e,{value:t,oldValue:n},o){e._assign=Is(o),t!==n&&(e.checked=f(t,o.props.value));}},Us={created(e,{value:t,modifiers:{number:n}},o){const r=E(t);ss(e,"change",(()=>{const t=Array.prototype.filter.call(e.options,(e=>e.selected)).map((e=>n?Z(Ds(e)):Ds(e)));e._assign(e.multiple?r?new Set(t):t:t[0]);})),e._assign=Is(o);},mounted(e,{value:t}){Hs(e,t);},beforeUpdate(e,t,n){e._assign=Is(n);},updated(e,{value:t}){Hs(e,t);}};function Hs(e,t){const n=e.multiple;if(!n||T(t)||E(t)){for(let o=0,r=e.options.length;o<r;o++){const r=e.options[o],s=Ds(r);if(n)r.selected=T(t)?d(t,s)>-1:t.has(s);else if(f(Ds(r),t))return void(e.selectedIndex!==o&&(e.selectedIndex=o))}n||-1===e.selectedIndex||(e.selectedIndex=-1);}}function Ds(e){return "_value"in e?e._value:e.value}function Ws(e,t){const n=t?"_trueValue":"_falseValue";return n in e?e[n]:t}const zs={created(e,t,n){Ks(e,t,n,null,"created");},mounted(e,t,n){Ks(e,t,n,null,"mounted");},beforeUpdate(e,t,n,o){Ks(e,t,n,o,"beforeUpdate");},updated(e,t,n,o){Ks(e,t,n,o,"updated");}};function Ks(e,t,n,o,r){let s;switch(e.tagName){case"SELECT":s=Us;break;case"TEXTAREA":s=Ps;break;default:switch(n.props&&n.props.type){case"checkbox":s=Vs;break;case"radio":s=js;break;default:s=Ps;}}const i=s[r];i&&i(e,t,n,o);}const Gs=["ctrl","shift","alt","meta"],qs={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&0!==e.button,middle:e=>"button"in e&&1!==e.button,right:e=>"button"in e&&2!==e.button,exact:(e,t)=>Gs.some((n=>e[`${n}Key`]&&!t.includes(n)))},Js={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Zs={beforeMount(e,{value:t},{transition:n}){e._vod="none"===e.style.display?"":e.style.display,n&&t?n.beforeEnter(e):Qs(e,t);},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e);},updated(e,{value:t,oldValue:n},{transition:o}){!t!=!n&&(o?t?(o.beforeEnter(e),Qs(e,!0),o.enter(e)):o.leave(e,(()=>{Qs(e,!1);})):Qs(e,t));},beforeUnmount(e,{value:t}){Qs(e,t);}};function Qs(e,t){e.style.display=t?e._vod:"none";}const Xs=S({patchProp:(e,t,n,r,s=!1,i,l,c,a)=>{switch(t){case"class":!function(e,t,n){if(null==t&&(t=""),n)e.setAttribute("class",t);else {const n=e._vtc;n&&(t=(t?[t,...n]:[...n]).join(" ")),e.className=t;}}(e,r,s);break;case"style":!function(e,t,n){const o=e.style;if(n)if(A(n)){if(t!==n){const t=o.display;o.cssText=n,"_vod"in e&&(o.display=t);}}else {for(const e in n)Zr(o,e,n[e]);if(t&&!A(t))for(const e in t)null==n[e]&&Zr(o,e,"");}else e.removeAttribute("style");}(e,n,r);break;default:_(t)?x(t)||is(e,t,0,r,l):function(e,t,n,o){if(o)return "innerHTML"===t||!!(t in e&&cs.test(t)&&F(n));if("spellcheck"===t||"draggable"===t)return !1;if("form"===t)return !1;if("list"===t&&"INPUT"===e.tagName)return !1;if("type"===t&&"TEXTAREA"===e.tagName)return !1;if(cs.test(t)&&A(n))return !1;return t in e}(e,t,r,s)?function(e,t,n,o,r,s,i){if("innerHTML"===t||"textContent"===t)return o&&i(o,r,s),void(e[t]=null==n?"":n);if("value"===t&&"PROGRESS"!==e.tagName){e._value=n;const o=null==n?"":n;return e.value!==o&&(e.value=o),void(null==n&&e.removeAttribute(t))}if(""===n||null==n){const o=typeof e[t];if(""===n&&"boolean"===o)return void(e[t]=!0);if(null==n&&"string"===o)return e[t]="",void e.removeAttribute(t);if("number"===o)return e[t]=0,void e.removeAttribute(t)}try{e[t]=n;}catch(l){}}(e,t,r,i,l,c,a):("true-value"===t?e._trueValue=r:"false-value"===t&&(e._falseValue=r),function(e,t,n,r,s){if(r&&t.startsWith("xlink:"))null==n?e.removeAttributeNS(Yr,t.slice(6,t.length)):e.setAttributeNS(Yr,t,n);else {const r=o(t);null==n||r&&!1===n?e.removeAttribute(t):e.setAttribute(t,r?"":n);}}(e,t,r,s));}},forcePatchProp:(e,t)=>"value"===t},qr);let Ys,ei=!1;function ti(){return Ys||(Ys=Ro(Xs))}function ni(){return Ys=ei?Ys:Po(Xs),ei=!0,Ys}function oi(e){if(A(e)){return document.querySelector(e)}return e}function ri(e){throw e}function si(e){}function ii(e,t,n,o){const r=new SyntaxError(String(e));return r.code=e,r.loc=t,r}const li=Symbol(""),ci=Symbol(""),ai=Symbol(""),ui=Symbol(""),pi=Symbol(""),fi=Symbol(""),di=Symbol(""),hi=Symbol(""),mi=Symbol(""),gi=Symbol(""),vi=Symbol(""),yi=Symbol(""),bi=Symbol(""),_i=Symbol(""),xi=Symbol(""),Si=Symbol(""),Ci=Symbol(""),ki=Symbol(""),wi=Symbol(""),Ti=Symbol(""),Ni=Symbol(""),Ei=Symbol(""),$i=Symbol(""),Fi=Symbol(""),Ai=Symbol(""),Mi=Symbol(""),Oi=Symbol(""),Ii=Symbol(""),Bi=Symbol(""),Ri=Symbol(""),Pi=Symbol(""),Vi=Symbol(""),Li={[li]:"Fragment",[ci]:"Teleport",[ai]:"Suspense",[ui]:"KeepAlive",[pi]:"BaseTransition",[fi]:"openBlock",[di]:"createBlock",[hi]:"createVNode",[mi]:"createCommentVNode",[gi]:"createTextVNode",[vi]:"createStaticVNode",[yi]:"resolveComponent",[bi]:"resolveDynamicComponent",[_i]:"resolveDirective",[xi]:"resolveFilter",[Si]:"withDirectives",[Ci]:"renderList",[ki]:"renderSlot",[wi]:"createSlots",[Ti]:"toDisplayString",[Ni]:"mergeProps",[Ei]:"toHandlers",[$i]:"camelize",[Fi]:"capitalize",[Ai]:"toHandlerKey",[Mi]:"setBlockTracking",[Oi]:"pushScopeId",[Ii]:"popScopeId",[Bi]:"withScopeId",[Ri]:"withCtx",[Pi]:"unref",[Vi]:"isRef"};const ji={source:"",start:{line:1,column:1,offset:0},end:{line:1,column:1,offset:0}};function Ui(e,t,n,o,r,s,i,l=!1,c=!1,a=ji){return e&&(l?(e.helper(fi),e.helper(di)):e.helper(hi),i&&e.helper(Si)),{type:13,tag:t,props:n,children:o,patchFlag:r,dynamicProps:s,directives:i,isBlock:l,disableTracking:c,loc:a}}function Hi(e,t=ji){return {type:17,loc:t,elements:e}}function Di(e,t=ji){return {type:15,loc:t,properties:e}}function Wi(e,t){return {type:16,loc:ji,key:A(e)?zi(e,!0):e,value:t}}function zi(e,t,n=ji,o=0){return {type:4,loc:n,content:e,isStatic:t,constType:t?3:o}}function Ki(e,t=ji){return {type:8,loc:t,children:e}}function Gi(e,t=[],n=ji){return {type:14,loc:n,callee:e,arguments:t}}function qi(e,t,n=!1,o=!1,r=ji){return {type:18,params:e,returns:t,newline:n,isSlot:o,loc:r}}function Ji(e,t,n,o=!0){return {type:19,test:e,consequent:t,alternate:n,newline:o,loc:ji}}const Zi=e=>4===e.type&&e.isStatic,Qi=(e,t)=>e===t||e===W(t);function Xi(e){return Qi(e,"Teleport")?ci:Qi(e,"Suspense")?ai:Qi(e,"KeepAlive")?ui:Qi(e,"BaseTransition")?pi:void 0}const Yi=/^\d|[^\$\w]/,el=e=>!Yi.test(e),tl=/^[A-Za-z_$\xA0-\uFFFF][\w$\xA0-\uFFFF]*(?:\s*\.\s*[A-Za-z_$\xA0-\uFFFF][\w$\xA0-\uFFFF]*|\[(.+)\])*$/,nl=e=>{if(!e)return !1;const t=tl.exec(e.trim());return !!t&&(!t[1]||(!/[\[\]]/.test(t[1])||nl(t[1].trim())))};function ol(e,t,n){const o={source:e.source.substr(t,n),start:rl(e.start,e.source,t),end:e.end};return null!=n&&(o.end=rl(e.start,e.source,t+n)),o}function rl(e,t,n=t.length){return sl(S({},e),t,n)}function sl(e,t,n=t.length){let o=0,r=-1;for(let s=0;s<n;s++)10===t.charCodeAt(s)&&(o++,r=s);return e.offset+=n,e.line+=o,e.column=-1===r?e.column+n:n-r,e}function il(e,t,n=!1){for(let o=0;o<e.props.length;o++){const r=e.props[o];if(7===r.type&&(n||r.exp)&&(A(t)?r.name===t:t.test(r.name)))return r}}function ll(e,t,n=!1,o=!1){for(let r=0;r<e.props.length;r++){const s=e.props[r];if(6===s.type){if(n)continue;if(s.name===t&&(s.value||o))return s}else if("bind"===s.name&&(s.exp||o)&&cl(s.arg,t))return s}}function cl(e,t){return !(!e||!Zi(e)||e.content!==t)}function al(e){return 5===e.type||2===e.type}function ul(e){return 7===e.type&&"slot"===e.name}function pl(e){return 1===e.type&&3===e.tagType}function fl(e){return 1===e.type&&2===e.tagType}function dl(e,t,n){let o;const r=13===e.type?e.props:e.arguments[2];if(null==r||A(r))o=Di([t]);else if(14===r.type){const e=r.arguments[0];A(e)||15!==e.type?r.callee===Ei?o=Gi(n.helper(Ni),[Di([t]),r]):r.arguments.unshift(Di([t])):e.properties.unshift(t),!o&&(o=r);}else if(15===r.type){let e=!1;if(4===t.key.type){const n=t.key.content;e=r.properties.some((e=>4===e.key.type&&e.key.content===n));}e||r.properties.unshift(t),o=r;}else o=Gi(n.helper(Ni),[Di([t]),r]);13===e.type?e.props=o:e.arguments[2]=o;}function hl(e,t){return `_${t}_${e.replace(/[^\w]/g,"_")}`}const ml=/&(gt|lt|amp|apos|quot);/g,gl={gt:">",lt:"<",amp:"&",apos:"'",quot:'"'},vl={delimiters:["{{","}}"],getNamespace:()=>0,getTextMode:()=>0,isVoidTag:y,isPreTag:y,isCustomElement:y,decodeEntities:e=>e.replace(ml,((e,t)=>gl[t])),onError:ri,onWarn:si,comments:!1};function yl(e,t={}){const n=function(e,t){const n=S({},vl);for(const o in t)n[o]=t[o]||vl[o];return {options:n,column:1,line:1,offset:0,originalSource:e,source:e,inPre:!1,inVPre:!1,onWarn:n.onWarn}}(e,t),o=Ml(n);return function(e,t=ji){return {type:0,children:e,helpers:[],components:[],directives:[],hoists:[],imports:[],cached:0,temps:0,codegenNode:void 0,loc:t}}(bl(n,0,[]),Ol(n,o))}function bl(e,t,n){const o=Il(n),r=o?o.ns:0,s=[];for(;!Ll(e,t,n);){const i=e.source;let l;if(0===t||1===t)if(!e.inVPre&&Bl(i,e.options.delimiters[0]))l=$l(e,t);else if(0===t&&"<"===i[0])if(1===i.length);else if("!"===i[1])l=Bl(i,"\x3c!--")?Sl(e):Bl(i,"<!DOCTYPE")?Cl(e):Bl(i,"<![CDATA[")&&0!==r?xl(e,n):Cl(e);else if("/"===i[1])if(2===i.length);else {if(">"===i[2]){Rl(e,3);continue}if(/[a-z]/i.test(i[2])){Tl(e,1,o);continue}l=Cl(e);}else /[a-z]/i.test(i[1])?l=kl(e,n):"?"===i[1]&&(l=Cl(e));if(l||(l=Fl(e,t)),T(l))for(let e=0;e<l.length;e++)_l(s,l[e]);else _l(s,l);}let i=!1;if(2!==t&&1!==t){const t="preserve"===e.options.whitespace;for(let n=0;n<s.length;n++){const o=s[n];if(!e.inPre&&2===o.type)if(/[^\t\r\n\f ]/.test(o.content))t||(o.content=o.content.replace(/[\t\r\n\f ]+/g," "));else {const e=s[n-1],r=s[n+1];!e||!r||!t&&(3===e.type||3===r.type||1===e.type&&1===r.type&&/[\r\n]/.test(o.content))?(i=!0,s[n]=null):o.content=" ";}3!==o.type||e.options.comments||(i=!0,s[n]=null);}if(e.inPre&&o&&e.options.isPreTag(o.tag)){const e=s[0];e&&2===e.type&&(e.content=e.content.replace(/^\r?\n/,""));}}return i?s.filter(Boolean):s}function _l(e,t){if(2===t.type){const n=Il(e);if(n&&2===n.type&&n.loc.end.offset===t.loc.start.offset)return n.content+=t.content,n.loc.end=t.loc.end,void(n.loc.source+=t.loc.source)}e.push(t);}function xl(e,t){Rl(e,9);const n=bl(e,3,t);return 0===e.source.length||Rl(e,3),n}function Sl(e){const t=Ml(e);let n;const o=/--(\!)?>/.exec(e.source);if(o){n=e.source.slice(4,o.index);const t=e.source.slice(0,o.index);let r=1,s=0;for(;-1!==(s=t.indexOf("\x3c!--",r));)Rl(e,s-r+1),r=s+1;Rl(e,o.index+o[0].length-r+1);}else n=e.source.slice(4),Rl(e,e.source.length);return {type:3,content:n,loc:Ol(e,t)}}function Cl(e){const t=Ml(e),n="?"===e.source[1]?1:2;let o;const r=e.source.indexOf(">");return -1===r?(o=e.source.slice(n),Rl(e,e.source.length)):(o=e.source.slice(n,r),Rl(e,r+1)),{type:3,content:o,loc:Ol(e,t)}}function kl(e,t){const n=e.inPre,o=e.inVPre,r=Il(t),s=Tl(e,0,r),i=e.inPre&&!n,l=e.inVPre&&!o;if(s.isSelfClosing||e.options.isVoidTag(s.tag))return s;t.push(s);const c=e.options.getTextMode(s,r),a=bl(e,c,t);if(t.pop(),s.children=a,jl(e.source,s.tag))Tl(e,1,r);else if(0===e.source.length&&"script"===s.tag.toLowerCase()){const e=a[0];e&&Bl(e.loc.source,"\x3c!--");}return s.loc=Ol(e,s.loc.start),i&&(e.inPre=!1),l&&(e.inVPre=!1),s}const wl=t("if,else,else-if,for,slot");function Tl(e,t,n){const o=Ml(e),r=/^<\/?([a-z][^\t\r\n\f />]*)/i.exec(e.source),s=r[1],i=e.options.getNamespace(s,n);Rl(e,r[0].length),Pl(e);const l=Ml(e),c=e.source;let a=Nl(e,t);e.options.isPreTag(s)&&(e.inPre=!0),0===t&&!e.inVPre&&a.some((e=>7===e.type&&"pre"===e.name))&&(e.inVPre=!0,S(e,l),e.source=c,a=Nl(e,t).filter((e=>"v-pre"!==e.name)));let u=!1;if(0===e.source.length||(u=Bl(e.source,"/>"),Rl(e,u?2:1)),1===t)return;let p=0;const f=e.options;if(!e.inVPre&&!f.isCustomElement(s)){const e=a.some((e=>{if("is"===e.name)return 7===e.type||(!(!e.value||!e.value.content.startsWith("vue:"))||void 0)}));f.isNativeTag&&!e?f.isNativeTag(s)||(p=1):(e||Xi(s)||f.isBuiltInComponent&&f.isBuiltInComponent(s)||/^[A-Z]/.test(s)||"component"===s)&&(p=1),"slot"===s?p=2:"template"===s&&a.some((e=>7===e.type&&wl(e.name)))&&(p=3);}return {type:1,ns:i,tag:s,tagType:p,props:a,isSelfClosing:u,children:[],loc:Ol(e,o),codegenNode:void 0}}function Nl(e,t){const n=[],o=new Set;for(;e.source.length>0&&!Bl(e.source,">")&&!Bl(e.source,"/>");){if(Bl(e.source,"/")){Rl(e,1),Pl(e);continue}const r=El(e,o);0===t&&n.push(r),/^[^\t\r\n\f />]/.test(e.source),Pl(e);}return n}function El(e,t){const n=Ml(e),o=/^[^\t\r\n\f />][^\t\r\n\f />=]*/.exec(e.source)[0];t.has(o),t.add(o);{const e=/["'<]/g;for(;e.exec(o););}let r;Rl(e,o.length),/^[\t\r\n\f ]*=/.test(e.source)&&(Pl(e),Rl(e,1),Pl(e),r=function(e){const t=Ml(e);let n;const o=e.source[0],r='"'===o||"'"===o;if(r){Rl(e,1);const t=e.source.indexOf(o);-1===t?n=Al(e,e.source.length,4):(n=Al(e,t,4),Rl(e,1));}else {const t=/^[^\t\r\n\f >]+/.exec(e.source);if(!t)return;const o=/["'<=`]/g;for(;o.exec(t[0]););n=Al(e,t[0].length,4);}return {content:n,isQuoted:r,loc:Ol(e,t)}}(e));const s=Ol(e,n);if(!e.inVPre&&/^(v-|:|@|#)/.test(o)){const t=/(?:^v-([a-z0-9-]+))?(?:(?::|^@|^#)(\[[^\]]+\]|[^\.]+))?(.+)?$/i.exec(o);let i,l=t[1]||(Bl(o,":")?"bind":Bl(o,"@")?"on":"slot");if(t[2]){const r="slot"===l,s=o.lastIndexOf(t[2]),c=Ol(e,Vl(e,n,s),Vl(e,n,s+t[2].length+(r&&t[3]||"").length));let a=t[2],u=!0;a.startsWith("[")?(u=!1,a.endsWith("]"),a=a.substr(1,a.length-2)):r&&(a+=t[3]||""),i={type:4,content:a,isStatic:u,constType:u?3:0,loc:c};}if(r&&r.isQuoted){const e=r.loc;e.start.offset++,e.start.column++,e.end=rl(e.start,r.content),e.source=e.source.slice(1,-1);}const c=t[3]?t[3].substr(1).split("."):[];return {type:7,name:l,exp:r&&{type:4,content:r.content,isStatic:!1,constType:0,loc:r.loc},arg:i,modifiers:c,loc:s}}return {type:6,name:o,value:r&&{type:2,content:r.content,loc:r.loc},loc:s}}function $l(e,t){const[n,o]=e.options.delimiters,r=e.source.indexOf(o,n.length);if(-1===r)return;const s=Ml(e);Rl(e,n.length);const i=Ml(e),l=Ml(e),c=r-n.length,a=e.source.slice(0,c),u=Al(e,c,t),p=u.trim(),f=u.indexOf(p);f>0&&sl(i,a,f);return sl(l,a,c-(u.length-p.length-f)),Rl(e,o.length),{type:5,content:{type:4,isStatic:!1,constType:0,content:p,loc:Ol(e,i,l)},loc:Ol(e,s)}}function Fl(e,t){const n=["<",e.options.delimiters[0]];3===t&&n.push("]]>");let o=e.source.length;for(let s=0;s<n.length;s++){const t=e.source.indexOf(n[s],1);-1!==t&&o>t&&(o=t);}const r=Ml(e);return {type:2,content:Al(e,o,t),loc:Ol(e,r)}}function Al(e,t,n){const o=e.source.slice(0,t);return Rl(e,t),2===n||3===n||-1===o.indexOf("&")?o:e.options.decodeEntities(o,4===n)}function Ml(e){const{column:t,line:n,offset:o}=e;return {column:t,line:n,offset:o}}function Ol(e,t,n){return {start:t,end:n=n||Ml(e),source:e.originalSource.slice(t.offset,n.offset)}}function Il(e){return e[e.length-1]}function Bl(e,t){return e.startsWith(t)}function Rl(e,t){const{source:n}=e;sl(e,n,t),e.source=n.slice(t);}function Pl(e){const t=/^[\t\r\n\f ]+/.exec(e.source);t&&Rl(e,t[0].length);}function Vl(e,t,n){return rl(t,e.originalSource.slice(t.offset,n),n)}function Ll(e,t,n){const o=e.source;switch(t){case 0:if(Bl(o,"</"))for(let e=n.length-1;e>=0;--e)if(jl(o,n[e].tag))return !0;break;case 1:case 2:{const e=Il(n);if(e&&jl(o,e.tag))return !0;break}case 3:if(Bl(o,"]]>"))return !0}return !o}function jl(e,t){return Bl(e,"</")&&e.substr(2,t.length).toLowerCase()===t.toLowerCase()&&/[\t\r\n\f />]/.test(e[2+t.length]||">")}function Ul(e,t){Dl(e,t,Hl(e,e.children[0]));}function Hl(e,t){const{children:n}=e;return 1===n.length&&1===t.type&&!fl(t)}function Dl(e,t,n=!1){let o=!1,r=!0;const{children:s}=e;for(let i=0;i<s.length;i++){const e=s[i];if(1===e.type&&0===e.tagType){const s=n?0:Wl(e,t);if(s>0){if(s<3&&(r=!1),s>=2){e.codegenNode.patchFlag="-1",e.codegenNode=t.hoist(e.codegenNode),o=!0;continue}}else {const n=e.codegenNode;if(13===n.type){const o=Gl(n);if((!o||512===o||1===o)&&zl(e,t)>=2){const o=Kl(e);o&&(n.props=t.hoist(o));}}}}else if(12===e.type){const n=Wl(e.content,t);n>0&&(n<3&&(r=!1),n>=2&&(e.codegenNode=t.hoist(e.codegenNode),o=!0));}if(1===e.type){const n=1===e.tagType;n&&t.scopes.vSlot++,Dl(e,t),n&&t.scopes.vSlot--;}else if(11===e.type)Dl(e,t,1===e.children.length);else if(9===e.type)for(let n=0;n<e.branches.length;n++)Dl(e.branches[n],t,1===e.branches[n].children.length);}r&&o&&t.transformHoist&&t.transformHoist(s,t,e);}function Wl(e,t){const{constantCache:n}=t;switch(e.type){case 1:if(0!==e.tagType)return 0;const o=n.get(e);if(void 0!==o)return o;const r=e.codegenNode;if(13!==r.type)return 0;if(Gl(r))return n.set(e,0),0;{let o=3;const s=zl(e,t);if(0===s)return n.set(e,0),0;s<o&&(o=s);for(let r=0;r<e.children.length;r++){const s=Wl(e.children[r],t);if(0===s)return n.set(e,0),0;s<o&&(o=s);}if(o>1)for(let r=0;r<e.props.length;r++){const s=e.props[r];if(7===s.type&&"bind"===s.name&&s.exp){const r=Wl(s.exp,t);if(0===r)return n.set(e,0),0;r<o&&(o=r);}}return r.isBlock&&(t.removeHelper(fi),t.removeHelper(di),r.isBlock=!1,t.helper(hi)),n.set(e,o),o}case 2:case 3:return 3;case 9:case 11:case 10:return 0;case 5:case 12:return Wl(e.content,t);case 4:return e.constType;case 8:let s=3;for(let n=0;n<e.children.length;n++){const o=e.children[n];if(A(o)||M(o))continue;const r=Wl(o,t);if(0===r)return 0;r<s&&(s=r);}return s;default:return 0}}function zl(e,t){let n=3;const o=Kl(e);if(o&&15===o.type){const{properties:e}=o;for(let o=0;o<e.length;o++){const{key:r,value:s}=e[o],i=Wl(r,t);if(0===i)return i;if(i<n&&(n=i),4!==s.type)return 0;const l=Wl(s,t);if(0===l)return l;l<n&&(n=l);}}return n}function Kl(e){const t=e.codegenNode;if(13===t.type)return t.props}function Gl(e){const t=e.patchFlag;return t?parseInt(t,10):void 0}function ql(e,{filename:t="",prefixIdentifiers:n=!1,hoistStatic:o=!1,cacheHandlers:r=!1,nodeTransforms:s=[],directiveTransforms:i={},transformHoist:l=null,isBuiltInComponent:c=v,isCustomElement:a=v,expressionPlugins:u=[],scopeId:p=null,slotted:f=!0,ssr:d=!1,ssrCssVars:h="",bindingMetadata:g=m,inline:y=!1,isTS:b=!1,onError:_=ri,onWarn:x=si,compatConfig:S}){const C=t.replace(/\?.*$/,"").match(/([^/\\]+)\.\w+$/),k={selfName:C&&z(H(C[1])),prefixIdentifiers:n,hoistStatic:o,cacheHandlers:r,nodeTransforms:s,directiveTransforms:i,transformHoist:l,isBuiltInComponent:c,isCustomElement:a,expressionPlugins:u,scopeId:p,slotted:f,ssr:d,ssrCssVars:h,bindingMetadata:g,inline:y,isTS:b,onError:_,onWarn:x,compatConfig:S,root:e,helpers:new Map,components:new Set,directives:new Set,hoists:[],imports:[],constantCache:new Map,temps:0,cached:0,identifiers:Object.create(null),scopes:{vFor:0,vSlot:0,vPre:0,vOnce:0},parent:null,currentNode:e,childIndex:0,helper(e){const t=k.helpers.get(e)||0;return k.helpers.set(e,t+1),e},removeHelper(e){const t=k.helpers.get(e);if(t){const n=t-1;n?k.helpers.set(e,n):k.helpers.delete(e);}},helperString:e=>`_${Li[k.helper(e)]}`,replaceNode(e){k.parent.children[k.childIndex]=k.currentNode=e;},removeNode(e){const t=e?k.parent.children.indexOf(e):k.currentNode?k.childIndex:-1;e&&e!==k.currentNode?k.childIndex>t&&(k.childIndex--,k.onNodeRemoved()):(k.currentNode=null,k.onNodeRemoved()),k.parent.children.splice(t,1);},onNodeRemoved:()=>{},addIdentifiers(e){},removeIdentifiers(e){},hoist(e){k.hoists.push(e);const t=zi(`_hoisted_${k.hoists.length}`,!1,e.loc,2);return t.hoisted=e,t},cache:(e,t=!1)=>function(e,t,n=!1){return {type:20,index:e,value:t,isVNode:n,loc:ji}}(++k.cached,e,t)};return k}function Jl(e,t){const n=ql(e,t);Zl(e,n),t.hoistStatic&&Ul(e,n),t.ssr||function(e,t){const{helper:n,removeHelper:o}=t,{children:r}=e;if(1===r.length){const t=r[0];if(Hl(e,t)&&t.codegenNode){const r=t.codegenNode;13===r.type&&(r.isBlock||(o(hi),r.isBlock=!0,n(fi),n(di))),e.codegenNode=r;}else e.codegenNode=t;}else if(r.length>1){let o=64;e.codegenNode=Ui(t,n(li),void 0,e.children,o+"",void 0,void 0,!0);}}(e,n),e.helpers=[...n.helpers.keys()],e.components=[...n.components],e.directives=[...n.directives],e.imports=n.imports,e.hoists=n.hoists,e.temps=n.temps,e.cached=n.cached;}function Zl(e,t){t.currentNode=e;const{nodeTransforms:n}=t,o=[];for(let s=0;s<n.length;s++){const r=n[s](e,t);if(r&&(T(r)?o.push(...r):o.push(r)),!t.currentNode)return;e=t.currentNode;}switch(e.type){case 3:t.ssr||t.helper(mi);break;case 5:t.ssr||t.helper(Ti);break;case 9:for(let n=0;n<e.branches.length;n++)Zl(e.branches[n],t);break;case 10:case 11:case 1:case 0:!function(e,t){let n=0;const o=()=>{n--;};for(;n<e.children.length;n++){const r=e.children[n];A(r)||(t.parent=e,t.childIndex=n,t.onNodeRemoved=o,Zl(r,t));}}(e,t);}t.currentNode=e;let r=o.length;for(;r--;)o[r]();}function Ql(e,t){const n=A(e)?t=>t===e:t=>e.test(t);return (e,o)=>{if(1===e.type){const{props:r}=e;if(3===e.tagType&&r.some(ul))return;const s=[];for(let i=0;i<r.length;i++){const l=r[i];if(7===l.type&&n(l.name)){r.splice(i,1),i--;const n=t(e,l,o);n&&s.push(n);}}return s}}}const Xl="/*#__PURE__*/";function Yl(e,t={}){const n=function(e,{mode:t="function",prefixIdentifiers:n="module"===t,sourceMap:o=!1,filename:r="template.vue.html",scopeId:s=null,optimizeImports:i=!1,runtimeGlobalName:l="Vue",runtimeModuleName:c="vue",ssr:a=!1}){const u={mode:t,prefixIdentifiers:n,sourceMap:o,filename:r,scopeId:s,optimizeImports:i,runtimeGlobalName:l,runtimeModuleName:c,ssr:a,source:e.loc.source,code:"",column:1,line:1,offset:0,indentLevel:0,pure:!1,map:void 0,helper:e=>`_${Li[e]}`,push(e,t){u.code+=e;},indent(){p(++u.indentLevel);},deindent(e=!1){e?--u.indentLevel:p(--u.indentLevel);},newline(){p(u.indentLevel);}};function p(e){u.push("\n"+"  ".repeat(e));}return u}(e,t);t.onContextCreated&&t.onContextCreated(n);const{mode:o,push:r,prefixIdentifiers:s,indent:i,deindent:l,newline:c,ssr:a}=n,u=e.helpers.length>0,p=!s&&"module"!==o;!function(e,t){const{push:n,newline:o,runtimeGlobalName:r}=t,s=r,i=e=>`${Li[e]}: _${Li[e]}`;if(e.helpers.length>0&&(n(`const _Vue = ${s}\n`),e.hoists.length)){n(`const { ${[hi,mi,gi,vi].filter((t=>e.helpers.includes(t))).map(i).join(", ")} } = _Vue\n`);}(function(e,t){if(!e.length)return;t.pure=!0;const{push:n,newline:o}=t;o(),e.forEach(((e,r)=>{e&&(n(`const _hoisted_${r+1} = `),oc(e,t),o());})),t.pure=!1;})(e.hoists,t),o(),n("return ");}(e,n);if(r(`function ${a?"ssrRender":"render"}(${(a?["_ctx","_push","_parent","_attrs"]:["_ctx","_cache"]).join(", ")}) {`),i(),p&&(r("with (_ctx) {"),i(),u&&(r(`const { ${e.helpers.map((e=>`${Li[e]}: _${Li[e]}`)).join(", ")} } = _Vue`),r("\n"),c())),e.components.length&&(ec(e.components,"component",n),(e.directives.length||e.temps>0)&&c()),e.directives.length&&(ec(e.directives,"directive",n),e.temps>0&&c()),e.temps>0){r("let ");for(let t=0;t<e.temps;t++)r(`${t>0?", ":""}_temp${t}`);}return (e.components.length||e.directives.length||e.temps)&&(r("\n"),c()),a||r("return "),e.codegenNode?oc(e.codegenNode,n):r("null"),p&&(l(),r("}")),l(),r("}"),{ast:e,code:n.code,preamble:"",map:n.map?n.map.toJSON():void 0}}function ec(e,t,{helper:n,push:o,newline:r}){const s=n("component"===t?yi:_i);for(let i=0;i<e.length;i++){let n=e[i];const l=n.endsWith("__self");l&&(n=n.slice(0,-6)),o(`const ${hl(n,t)} = ${s}(${JSON.stringify(n)}${l?", true":""})`),i<e.length-1&&r();}}function tc(e,t){const n=e.length>3||!1;t.push("["),n&&t.indent(),nc(e,t,n),n&&t.deindent(),t.push("]");}function nc(e,t,n=!1,o=!0){const{push:r,newline:s}=t;for(let i=0;i<e.length;i++){const l=e[i];A(l)?r(l):T(l)?tc(l,t):oc(l,t),i<e.length-1&&(n?(o&&r(","),s()):o&&r(", "));}}function oc(e,t){if(A(e))t.push(e);else if(M(e))t.push(t.helper(e));else switch(e.type){case 1:case 9:case 11:oc(e.codegenNode,t);break;case 2:!function(e,t){t.push(JSON.stringify(e.content),e);}(e,t);break;case 4:rc(e,t);break;case 5:!function(e,t){const{push:n,helper:o,pure:r}=t;r&&n(Xl);n(`${o(Ti)}(`),oc(e.content,t),n(")");}(e,t);break;case 12:oc(e.codegenNode,t);break;case 8:sc(e,t);break;case 3:!function(e,t){const{push:n,helper:o,pure:r}=t;r&&n(Xl);n(`${o(mi)}(${JSON.stringify(e.content)})`,e);}(e,t);break;case 13:!function(e,t){const{push:n,helper:o,pure:r}=t,{tag:s,props:i,children:l,patchFlag:c,dynamicProps:a,directives:u,isBlock:p,disableTracking:f}=e;u&&n(o(Si)+"(");p&&n(`(${o(fi)}(${f?"true":""}), `);r&&n(Xl);n(o(p?di:hi)+"(",e),nc(function(e){let t=e.length;for(;t--&&null==e[t];);return e.slice(0,t+1).map((e=>e||"null"))}([s,i,l,c,a]),t),n(")"),p&&n(")");u&&(n(", "),oc(u,t),n(")"));}(e,t);break;case 14:!function(e,t){const{push:n,helper:o,pure:r}=t,s=A(e.callee)?e.callee:o(e.callee);r&&n(Xl);n(s+"(",e),nc(e.arguments,t),n(")");}(e,t);break;case 15:!function(e,t){const{push:n,indent:o,deindent:r,newline:s}=t,{properties:i}=e;if(!i.length)return void n("{}",e);const l=i.length>1||!1;n(l?"{":"{ "),l&&o();for(let c=0;c<i.length;c++){const{key:e,value:o}=i[c];ic(e,t),n(": "),oc(o,t),c<i.length-1&&(n(","),s());}l&&r(),n(l?"}":" }");}(e,t);break;case 17:!function(e,t){tc(e.elements,t);}(e,t);break;case 18:!function(e,t){const{push:n,indent:o,deindent:r}=t,{params:s,returns:i,body:l,newline:c,isSlot:a}=e;a&&n(`_${Li[Ri]}(`);n("(",e),T(s)?nc(s,t):s&&oc(s,t);n(") => "),(c||l)&&(n("{"),o());i?(c&&n("return "),T(i)?tc(i,t):oc(i,t)):l&&oc(l,t);(c||l)&&(r(),n("}"));a&&n(")");}(e,t);break;case 19:!function(e,t){const{test:n,consequent:o,alternate:r,newline:s}=e,{push:i,indent:l,deindent:c,newline:a}=t;if(4===n.type){const e=!el(n.content);e&&i("("),rc(n,t),e&&i(")");}else i("("),oc(n,t),i(")");s&&l(),t.indentLevel++,s||i(" "),i("? "),oc(o,t),t.indentLevel--,s&&a(),s||i(" "),i(": ");const u=19===r.type;u||t.indentLevel++;oc(r,t),u||t.indentLevel--;s&&c(!0);}(e,t);break;case 20:!function(e,t){const{push:n,helper:o,indent:r,deindent:s,newline:i}=t;n(`_cache[${e.index}] || (`),e.isVNode&&(r(),n(`${o(Mi)}(-1),`),i());n(`_cache[${e.index}] = `),oc(e.value,t),e.isVNode&&(n(","),i(),n(`${o(Mi)}(1),`),i(),n(`_cache[${e.index}]`),s());n(")");}(e,t);}}function rc(e,t){const{content:n,isStatic:o}=e;t.push(o?JSON.stringify(n):n,e);}function sc(e,t){for(let n=0;n<e.children.length;n++){const o=e.children[n];A(o)?t.push(o):oc(o,t);}}function ic(e,t){const{push:n}=t;if(8===e.type)n("["),sc(e,t),n("]");else if(e.isStatic){n(el(e.content)?e.content:JSON.stringify(e.content),e);}else n(`[${e.content}]`,e);}const lc=Ql(/^(if|else|else-if)$/,((e,t,n)=>function(e,t,n,o){if(!("else"===t.name||t.exp&&t.exp.content.trim())){t.exp=zi("true",!1,t.exp?t.exp.loc:e.loc);}if("if"===t.name){const r=cc(e,t),s={type:9,loc:e.loc,branches:[r]};if(n.replaceNode(s),o)return o(s,r,!0)}else {const r=n.parent.children;let s=r.indexOf(e);for(;s-- >=-1;){const i=r[s];if(!i||2!==i.type||i.content.trim().length){if(i&&9===i.type){n.removeNode();const r=cc(e,t);i.branches.push(r);const s=o&&o(i,r,!1);Zl(r,n),s&&s(),n.currentNode=null;}break}n.removeNode(i);}}}(e,t,n,((e,t,o)=>{const r=n.parent.children;let s=r.indexOf(e),i=0;for(;s-- >=0;){const e=r[s];e&&9===e.type&&(i+=e.branches.length);}return ()=>{if(o)e.codegenNode=ac(t,i,n);else {(function(e){for(;;)if(19===e.type){if(19!==e.alternate.type)return e;e=e.alternate;}else 20===e.type&&(e=e.value);}(e.codegenNode)).alternate=ac(t,i+e.branches.length-1,n);}}}))));function cc(e,t){return {type:10,loc:e.loc,condition:"else"===t.name?void 0:t.exp,children:3!==e.tagType||il(e,"for")?[e]:e.children,userKey:ll(e,"key")}}function ac(e,t,n){return e.condition?Ji(e.condition,uc(e,t,n),Gi(n.helper(mi),['""',"true"])):uc(e,t,n)}function uc(e,t,n){const{helper:o,removeHelper:r}=n,s=Wi("key",zi(`${t}`,!1,ji,2)),{children:i}=e,l=i[0];if(1!==i.length||1!==l.type){if(1===i.length&&11===l.type){const e=l.codegenNode;return dl(e,s,n),e}{let t=64;return Ui(n,o(li),Di([s]),i,t+"",void 0,void 0,!0,!1,e.loc)}}{const e=l.codegenNode;return 13!==e.type||e.isBlock||(r(hi),e.isBlock=!0,o(fi),o(di)),dl(e,s,n),e}}const pc=Ql("for",((e,t,n)=>{const{helper:o,removeHelper:r}=n;return function(e,t,n,o){if(!t.exp)return;const r=mc(t.exp);if(!r)return;const{scopes:s}=n,{source:i,value:l,key:c,index:a}=r,u={type:11,loc:t.loc,source:i,valueAlias:l,keyAlias:c,objectIndexAlias:a,parseResult:r,children:pl(e)?e.children:[e]};n.replaceNode(u),s.vFor++;const p=o&&o(u);return ()=>{s.vFor--,p&&p();}}(e,t,n,(t=>{const s=Gi(o(Ci),[t.source]),i=ll(e,"key"),l=i?Wi("key",6===i.type?zi(i.value.content,!0):i.exp):null,c=4===t.source.type&&t.source.constType>0,a=c?64:i?128:256;return t.codegenNode=Ui(n,o(li),void 0,s,a+"",void 0,void 0,!0,!c,e.loc),()=>{let i;const a=pl(e),{children:u}=t,p=1!==u.length||1!==u[0].type,f=fl(e)?e:a&&1===e.children.length&&fl(e.children[0])?e.children[0]:null;f?(i=f.codegenNode,a&&l&&dl(i,l,n)):p?i=Ui(n,o(li),l?Di([l]):void 0,e.children,"64",void 0,void 0,!0):(i=u[0].codegenNode,a&&l&&dl(i,l,n),i.isBlock!==!c&&(i.isBlock?(r(fi),r(di)):r(hi)),i.isBlock=!c,i.isBlock?(o(fi),o(di)):o(hi)),s.arguments.push(qi(vc(t.parseResult),i,!0));}}))}));const fc=/([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/,dc=/,([^,\}\]]*)(?:,([^,\}\]]*))?$/,hc=/^\(|\)$/g;function mc(e,t){const n=e.loc,o=e.content,r=o.match(fc);if(!r)return;const[,s,i]=r,l={source:gc(n,i.trim(),o.indexOf(i,s.length)),value:void 0,key:void 0,index:void 0};let c=s.trim().replace(hc,"").trim();const a=s.indexOf(c),u=c.match(dc);if(u){c=c.replace(dc,"").trim();const e=u[1].trim();let t;if(e&&(t=o.indexOf(e,a+c.length),l.key=gc(n,e,t)),u[2]){const r=u[2].trim();r&&(l.index=gc(n,r,o.indexOf(r,l.key?t+e.length:a+c.length)));}}return c&&(l.value=gc(n,c,a)),l}function gc(e,t,n){return zi(t,!1,ol(e,n,t.length))}function vc({value:e,key:t,index:n}){const o=[];return e&&o.push(e),t&&(e||o.push(zi("_",!1)),o.push(t)),n&&(t||(e||o.push(zi("_",!1)),o.push(zi("__",!1))),o.push(n)),o}const yc=zi("undefined",!1),bc=(e,t)=>{if(1===e.type&&(1===e.tagType||3===e.tagType)){const n=il(e,"slot");if(n)return t.scopes.vSlot++,()=>{t.scopes.vSlot--;}}},_c=(e,t,n)=>qi(e,t,!1,!0,t.length?t[0].loc:n);function xc(e,t,n=_c){t.helper(Ri);const{children:o,loc:r}=e,s=[],i=[];let l=t.scopes.vSlot>0||t.scopes.vFor>0;const c=il(e,"slot",!0);if(c){const{arg:e,exp:t}=c;e&&!Zi(e)&&(l=!0),s.push(Wi(e||zi("default",!0),n(t,o,r)));}let a=!1,u=!1;const p=[],f=new Set;for(let m=0;m<o.length;m++){const e=o[m];let r;if(!pl(e)||!(r=il(e,"slot",!0))){3!==e.type&&p.push(e);continue}if(c)break;a=!0;const{children:d,loc:h}=e,{arg:g=zi("default",!0),exp:v}=r;let y;Zi(g)?y=g?g.content:"default":l=!0;const b=n(v,d,h);let _,x,S;if(_=il(e,"if"))l=!0,i.push(Ji(_.exp,Sc(g,b),yc));else if(x=il(e,/^else(-if)?$/,!0)){let e,t=m;for(;t--&&(e=o[t],3===e.type););if(e&&pl(e)&&il(e,"if")){o.splice(m,1),m--;let e=i[i.length-1];for(;19===e.alternate.type;)e=e.alternate;e.alternate=x.exp?Ji(x.exp,Sc(g,b),yc):Sc(g,b);}}else if(S=il(e,"for")){l=!0;const e=S.parseResult||mc(S.exp);e&&i.push(Gi(t.helper(Ci),[e.source,qi(vc(e),Sc(g,b),!0)]));}else {if(y){if(f.has(y))continue;f.add(y),"default"===y&&(u=!0);}s.push(Wi(g,b));}}if(!c){const e=(e,t)=>Wi("default",n(e,t,r));a?p.length&&p.some((e=>kc(e)))&&(u||s.push(e(void 0,p))):s.push(e(void 0,o));}const d=l?2:Cc(e.children)?3:1;let h=Di(s.concat(Wi("_",zi(d+"",!1))),r);return i.length&&(h=Gi(t.helper(wi),[h,Hi(i)])),{slots:h,hasDynamicSlots:l}}function Sc(e,t){return Di([Wi("name",e),Wi("fn",t)])}function Cc(e){for(let t=0;t<e.length;t++){const n=e[t];switch(n.type){case 1:if(2===n.tagType||0===n.tagType&&Cc(n.children))return !0;break;case 9:if(Cc(n.branches))return !0;break;case 10:case 11:if(Cc(n.children))return !0}}return !1}function kc(e){return 2!==e.type&&12!==e.type||(2===e.type?!!e.content.trim():kc(e.content))}const wc=new WeakMap,Tc=(e,t)=>function(){if(1!==(e=t.currentNode).type||0!==e.tagType&&1!==e.tagType)return;const{tag:n,props:o}=e,r=1===e.tagType;let s=r?function(e,t,n=!1){let{tag:o}=e;const r=Fc(o),s=ll(e,"is")||!r&&il(e,"is");if(s)if(r||6!==s.type){const e=6===s.type?s.value&&zi(s.value.content,!0):s.exp;if(e)return Gi(t.helper(bi),[e])}else o=s.value.content.replace(/^vue:/,"");const i=Xi(o)||t.isBuiltInComponent(o);if(i)return n||t.helper(i),i;return t.helper(yi),t.components.add(o),hl(o,"component")}(e,t):`"${n}"`;let i,l,c,a,u,p,f=0,d=O(s)&&s.callee===bi||s===ci||s===ai||!r&&("svg"===n||"foreignObject"===n||ll(e,"key",!0));if(o.length>0){const n=Nc(e,t);i=n.props,f=n.patchFlag,u=n.dynamicPropNames;const o=n.directives;p=o&&o.length?Hi(o.map((e=>function(e,t){const n=[],o=wc.get(e);o?n.push(t.helperString(o)):(t.helper(_i),t.directives.add(e.name),n.push(hl(e.name,"directive")));const{loc:r}=e;e.exp&&n.push(e.exp);e.arg&&(e.exp||n.push("void 0"),n.push(e.arg));if(Object.keys(e.modifiers).length){e.arg||(e.exp||n.push("void 0"),n.push("void 0"));const t=zi("true",!1,r);n.push(Di(e.modifiers.map((e=>Wi(e,t))),r));}return Hi(n,e.loc)}(e,t)))):void 0;}if(e.children.length>0){s===ui&&(d=!0,f|=1024);if(r&&s!==ci&&s!==ui){const{slots:n,hasDynamicSlots:o}=xc(e,t);l=n,o&&(f|=1024);}else if(1===e.children.length&&s!==ci){const n=e.children[0],o=n.type,r=5===o||8===o;r&&0===Wl(n,t)&&(f|=1),l=r||2===o?n:e.children;}else l=e.children;}0!==f&&(c=String(f),u&&u.length&&(a=function(e){let t="[";for(let n=0,o=e.length;n<o;n++)t+=JSON.stringify(e[n]),n<o-1&&(t+=", ");return t+"]"}(u))),e.codegenNode=Ui(t,s,i,l,c,a,p,!!d,!1,e.loc);};function Nc(e,t,n=e.props,o=!1){const{tag:r,loc:s}=e,i=1===e.tagType;let l=[];const c=[],a=[];let u=0,p=!1,f=!1,d=!1,h=!1,m=!1,g=!1;const v=[],y=({key:e,value:n})=>{if(Zi(e)){const o=e.content,r=_(o);if(i||!r||"onclick"===o.toLowerCase()||"onUpdate:modelValue"===o||L(o)||(h=!0),r&&L(o)&&(g=!0),20===n.type||(4===n.type||8===n.type)&&Wl(n,t)>0)return;"ref"===o?p=!0:"class"!==o||i?"style"!==o||i?"key"===o||v.includes(o)||v.push(o):d=!0:f=!0;}else m=!0;};for(let _=0;_<n.length;_++){const i=n[_];if(6===i.type){const{loc:e,name:t,value:n}=i;let o=!0;if("ref"===t&&(p=!0),"is"===t&&(Fc(r)||n&&n.content.startsWith("vue:")))continue;l.push(Wi(zi(t,!0,ol(e,0,t.length)),zi(n?n.content:"",o,n?n.loc:e)));}else {const{name:n,arg:u,exp:p,loc:f}=i,d="bind"===n,h="on"===n;if("slot"===n)continue;if("once"===n)continue;if("is"===n||d&&Fc(r)&&cl(u,"is"))continue;if(h&&o)continue;if(!u&&(d||h)){m=!0,p&&(l.length&&(c.push(Di(Ec(l),s)),l=[]),c.push(d?p:{type:14,loc:f,callee:t.helper(Ei),arguments:[p]}));continue}const g=t.directiveTransforms[n];if(g){const{props:n,needRuntime:r}=g(i,e,t);!o&&n.forEach(y),l.push(...n),r&&(a.push(i),M(r)&&wc.set(i,r));}else a.push(i);}}let b;return c.length?(l.length&&c.push(Di(Ec(l),s)),b=c.length>1?Gi(t.helper(Ni),c,s):c[0]):l.length&&(b=Di(Ec(l),s)),m?u|=16:(f&&(u|=2),d&&(u|=4),v.length&&(u|=8),h&&(u|=32)),0!==u&&32!==u||!(p||g||a.length>0)||(u|=512),{props:b,directives:a,patchFlag:u,dynamicPropNames:v}}function Ec(e){const t=new Map,n=[];for(let o=0;o<e.length;o++){const r=e[o];if(8===r.key.type||!r.key.isStatic){n.push(r);continue}const s=r.key.content,i=t.get(s);i?("style"===s||"class"===s||s.startsWith("on"))&&$c(i,r):(t.set(s,r),n.push(r));}return n}function $c(e,t){17===e.value.type?e.value.elements.push(t.value):e.value=Hi([e.value,t.value],e.loc);}function Fc(e){return e[0].toLowerCase()+e.slice(1)==="component"}const Ac=(e,t)=>{if(fl(e)){const{children:n,loc:o}=e,{slotName:r,slotProps:s}=function(e,t){let n,o='"default"';const r=[];for(let s=0;s<e.props.length;s++){const t=e.props[s];6===t.type?t.value&&("name"===t.name?o=JSON.stringify(t.value.content):(t.name=H(t.name),r.push(t))):"bind"===t.name&&cl(t.arg,"name")?t.exp&&(o=t.exp):("bind"===t.name&&t.arg&&Zi(t.arg)&&(t.arg.content=H(t.arg.content)),r.push(t));}if(r.length>0){const{props:o,directives:s}=Nc(e,t,r);n=o;}return {slotName:o,slotProps:n}}(e,t),i=[t.prefixIdentifiers?"_ctx.$slots":"$slots",r];s&&i.push(s),n.length&&(s||i.push("{}"),i.push(qi([],n,!1,!1,o))),t.scopeId&&!t.slotted&&(s||i.push("{}"),n.length||i.push("undefined"),i.push("true")),e.codegenNode=Gi(t.helper(ki),i,o);}};const Mc=/^\s*([\w$_]+|\([^)]*?\))\s*=>|^\s*function(?:\s+[\w$]+)?\s*\(/,Oc=(e,t,n,o)=>{const{loc:r,modifiers:s,arg:i}=e;let l;if(4===i.type)if(i.isStatic){l=zi(K(H(i.content)),!0,i.loc);}else l=Ki([`${n.helperString(Ai)}(`,i,")"]);else l=i,l.children.unshift(`${n.helperString(Ai)}(`),l.children.push(")");let c=e.exp;c&&!c.content.trim()&&(c=void 0);let a=n.cacheHandlers&&!c;if(c){const e=nl(c.content),t=!(e||Mc.test(c.content)),n=c.content.includes(";");(t||a&&e)&&(c=Ki([`${t?"$event":"(...args)"} => ${n?"{":"("}`,c,n?"}":")"]));}let u={props:[Wi(l,c||zi("() => {}",!1,r))]};return o&&(u=o(u)),a&&(u.props[0].value=n.cache(u.props[0].value)),u},Ic=(e,t,n)=>{const{exp:o,modifiers:r,loc:s}=e,i=e.arg;return 4!==i.type?(i.children.unshift("("),i.children.push(') || ""')):i.isStatic||(i.content=`${i.content} || ""`),r.includes("camel")&&(4===i.type?i.content=i.isStatic?H(i.content):`${n.helperString($i)}(${i.content})`:(i.children.unshift(`${n.helperString($i)}(`),i.children.push(")"))),!o||4===o.type&&!o.content.trim()?{props:[Wi(i,zi("",!0,s))]}:{props:[Wi(i,o)]}},Bc=(e,t)=>{if(0===e.type||1===e.type||11===e.type||10===e.type)return ()=>{const n=e.children;let o,r=!1;for(let e=0;e<n.length;e++){const t=n[e];if(al(t)){r=!0;for(let r=e+1;r<n.length;r++){const s=n[r];if(!al(s)){o=void 0;break}o||(o=n[e]={type:8,loc:t.loc,children:[t]}),o.children.push(" + ",s),n.splice(r,1),r--;}}}if(r&&(1!==n.length||0!==e.type&&(1!==e.type||0!==e.tagType||e.props.find((e=>7===e.type&&!t.directiveTransforms[e.name])))))for(let e=0;e<n.length;e++){const o=n[e];if(al(o)||8===o.type){const r=[];2===o.type&&" "===o.content||r.push(o),t.ssr||0!==Wl(o,t)||r.push("1"),n[e]={type:12,content:o,loc:o.loc,codegenNode:Gi(t.helper(gi),r)};}}}},Rc=new WeakSet,Pc=(e,t)=>{if(1===e.type&&il(e,"once",!0)){if(Rc.has(e))return;return Rc.add(e),t.helper(Mi),()=>{const e=t.currentNode;e.codegenNode&&(e.codegenNode=t.cache(e.codegenNode,!0));}}},Vc=(e,t,n)=>{const{exp:o,arg:r}=e;if(!o)return Lc();const s=o.loc.source;if(!nl(4===o.type?o.content:s))return Lc();const i=r||zi("modelValue",!0),l=r?Zi(r)?`onUpdate:${r.content}`:Ki(['"onUpdate:" + ',r]):"onUpdate:modelValue";let c;c=Ki([`${n.isTS?"($event: any)":"$event"} => (`,o," = $event)"]);const a=[Wi(i,e.exp),Wi(l,c)];if(e.modifiers.length&&1===t.tagType){const t=e.modifiers.map((e=>(el(e)?e:JSON.stringify(e))+": true")).join(", "),n=r?Zi(r)?`${r.content}Modifiers`:Ki([r,' + "Modifiers"']):"modelModifiers";a.push(Wi(n,zi(`{ ${t} }`,!1,e.loc,2)));}return Lc(a)};function Lc(e=[]){return {props:e}}function jc(e,t={}){const n=t.onError||ri,o="module"===t.mode;!0===t.prefixIdentifiers?n(ii(45)):o&&n(ii(46));t.cacheHandlers&&n(ii(47)),t.scopeId&&!o&&n(ii(48));const r=A(e)?yl(e,t):e,[s,i]=[[Pc,lc,pc,Ac,Tc,bc,Bc],{on:Oc,bind:Ic,model:Vc}];return Jl(r,S({},t,{prefixIdentifiers:false,nodeTransforms:[...s,...t.nodeTransforms||[]],directiveTransforms:S({},i,t.directiveTransforms||{})})),Yl(r,S({},t,{prefixIdentifiers:false}))}const Uc=Symbol(""),Hc=Symbol(""),Dc=Symbol(""),Wc=Symbol(""),zc=Symbol(""),Kc=Symbol(""),Gc=Symbol(""),qc=Symbol(""),Jc=Symbol(""),Zc=Symbol("");var Qc;let Xc;Qc={[Uc]:"vModelRadio",[Hc]:"vModelCheckbox",[Dc]:"vModelText",[Wc]:"vModelSelect",[zc]:"vModelDynamic",[Kc]:"withModifiers",[Gc]:"withKeys",[qc]:"vShow",[Jc]:"Transition",[Zc]:"TransitionGroup"},Object.getOwnPropertySymbols(Qc).forEach((e=>{Li[e]=Qc[e];}));const Yc=t("style,iframe,script,noscript",!0),ea={isVoidTag:p,isNativeTag:e=>a(e)||u(e),isPreTag:e=>"pre"===e,decodeEntities:function(e,t=!1){return Xc||(Xc=document.createElement("div")),t?(Xc.innerHTML=`<div foo="${e.replace(/"/g,"&quot;")}">`,Xc.children[0].getAttribute("foo")):(Xc.innerHTML=e,Xc.textContent)},isBuiltInComponent:e=>Qi(e,"Transition")?Jc:Qi(e,"TransitionGroup")?Zc:void 0,getNamespace(e,t){let n=t?t.ns:0;if(t&&2===n)if("annotation-xml"===t.tag){if("svg"===e)return 1;t.props.some((e=>6===e.type&&"encoding"===e.name&&null!=e.value&&("text/html"===e.value.content||"application/xhtml+xml"===e.value.content)))&&(n=0);}else /^m(?:[ions]|text)$/.test(t.tag)&&"mglyph"!==e&&"malignmark"!==e&&(n=0);else t&&1===n&&("foreignObject"!==t.tag&&"desc"!==t.tag&&"title"!==t.tag||(n=0));if(0===n){if("svg"===e)return 1;if("math"===e)return 2}return n},getTextMode({tag:e,ns:t}){if(0===t){if("textarea"===e||"title"===e)return 1;if(Yc(e))return 2}return 0}},ta=(e,t)=>{const n=l(e);return zi(JSON.stringify(n),!1,t,3)};const na=t("passive,once,capture"),oa=t("stop,prevent,self,ctrl,shift,alt,meta,exact,middle"),ra=t("left,right"),sa=t("onkeyup,onkeydown,onkeypress",!0),ia=(e,t)=>Zi(e)&&"onclick"===e.content.toLowerCase()?zi(t,!0):4!==e.type?Ki(["(",e,`) === "onClick" ? "${t}" : (`,e,")"]):e,la=(e,t)=>{1!==e.type||0!==e.tagType||"script"!==e.tag&&"style"!==e.tag||t.removeNode();},ca=[e=>{1===e.type&&e.props.forEach(((t,n)=>{6===t.type&&"style"===t.name&&t.value&&(e.props[n]={type:7,name:"bind",arg:zi("style",!0,t.loc),exp:ta(t.value.content,t.loc),modifiers:[],loc:t.loc});}));}],aa={cloak:()=>({props:[]}),html:(e,t,n)=>{const{exp:o,loc:r}=e;return t.children.length&&(t.children.length=0),{props:[Wi(zi("innerHTML",!0,r),o||zi("",!0))]}},text:(e,t,n)=>{const{exp:o,loc:r}=e;return t.children.length&&(t.children.length=0),{props:[Wi(zi("textContent",!0),o?Gi(n.helperString(Ti),[o],r):zi("",!0))]}},model:(e,t,n)=>{const o=Vc(e,t,n);if(!o.props.length||1===t.tagType)return o;const{tag:r}=t,s=n.isCustomElement(r);if("input"===r||"textarea"===r||"select"===r||s){let e=Dc,i=!1;if("input"===r||s){const n=ll(t,"type");if(n){if(7===n.type)e=zc;else if(n.value)switch(n.value.content){case"radio":e=Uc;break;case"checkbox":e=Hc;break;case"file":i=!0;}}else (function(e){return e.props.some((e=>!(7!==e.type||"bind"!==e.name||e.arg&&4===e.arg.type&&e.arg.isStatic)))})(t)&&(e=zc);}else "select"===r&&(e=Wc);i||(o.needRuntime=n.helper(e));}return o.props=o.props.filter((e=>!(4===e.key.type&&"modelValue"===e.key.content))),o},on:(e,t,n)=>Oc(e,0,n,(t=>{const{modifiers:o}=e;if(!o.length)return t;let{key:r,value:s}=t.props[0];const{keyModifiers:i,nonKeyModifiers:l,eventOptionModifiers:c}=((e,t,n,o)=>{const r=[],s=[],i=[];for(let l=0;l<t.length;l++){const n=t[l];na(n)?i.push(n):ra(n)?Zi(e)?sa(e.content)?r.push(n):s.push(n):(r.push(n),s.push(n)):oa(n)?s.push(n):r.push(n);}return {keyModifiers:r,nonKeyModifiers:s,eventOptionModifiers:i}})(r,o);if(l.includes("right")&&(r=ia(r,"onContextmenu")),l.includes("middle")&&(r=ia(r,"onMouseup")),l.length&&(s=Gi(n.helper(Kc),[s,JSON.stringify(l)])),!i.length||Zi(r)&&!sa(r.content)||(s=Gi(n.helper(Gc),[s,JSON.stringify(i)])),c.length){const e=c.map(z).join("");r=Zi(r)?zi(`${r.content}${e}`,!0):Ki(["(",r,`) + "${e}"`]);}return {props:[Wi(r,s)]}})),show:(e,t,n)=>({props:[],needRuntime:n.helper(qc)})};const ua=Object.create(null);function pa(e,t){if(!A(e)){if(!e.nodeType)return v;e=e.innerHTML;}const n=e,o=ua[n];if(o)return o;if("#"===e[0]){const t=document.querySelector(e);e=t?t.innerHTML:"";}const{code:r}=function(e,t={}){return jc(e,S({},ea,t,{nodeTransforms:[la,...ca,...t.nodeTransforms||[]],directiveTransforms:S({},aa,t.directiveTransforms||{}),transformHoist:null}))}(e,S({hoistStatic:!0,onError:void 0,onWarn:v},t)),s=new Function(r)();return s._rc=!0,ua[n]=s}return Or(pa),e.BaseTransition=kn,e.Comment=Xo,e.Fragment=Zo,e.KeepAlive=Bn,e.Static=Yo,e.Suspense=cn,e.Teleport=zo,e.Text=Qo,e.Transition=fs,e.TransitionGroup=Fs,e.callWithAsyncErrorHandling=kt,e.callWithErrorHandling=Ct,e.camelize=H,e.capitalize=z,e.cloneVNode=dr,e.compatUtils=null,e.compile=pa,e.computed=jr,e.createApp=(...e)=>{const t=ti().createApp(...e),{mount:n}=t;return t.mount=e=>{const o=oi(e);if(!o)return;const r=t._component;F(r)||r.render||r.template||(r.template=o.innerHTML),o.innerHTML="";const s=n(o,!1,o instanceof SVGElement);return o instanceof Element&&(o.removeAttribute("v-cloak"),o.setAttribute("data-v-app","")),s},t},e.createBlock=ir,e.createCommentVNode=function(e="",t=!1){return t?(nr(),ir(Xo,null,e)):fr(Xo,null,e)},e.createHydrationRenderer=Po,e.createRenderer=Ro,e.createSSRApp=(...e)=>{const t=ni().createApp(...e),{mount:n}=t;return t.mount=e=>{const t=oi(e);if(t)return n(t,!0,t instanceof SVGElement)},t},e.createSlots=function(e,t){for(let n=0;n<t.length;n++){const o=t[n];if(T(o))for(let t=0;t<o.length;t++)e[o[t].name]=o[t].fn;else o&&(e[o.name]=o.fn);}return e},e.createStaticVNode=function(e,t){const n=fr(Yo,null,e);return n.staticCount=t,n},e.createTextVNode=hr,e.createVNode=fr,e.customRef=function(e){return new mt(e)},e.defineAsyncComponent=function(e){F(e)&&(e={loader:e});const{loader:t,loadingComponent:n,errorComponent:o,delay:r=200,timeout:s,suspensible:i=!0,onError:l}=e;let c,a=null,u=0;const p=()=>{let e;return a||(e=a=t().catch((e=>{if(e=e instanceof Error?e:new Error(String(e)),l)return new Promise(((t,n)=>{l(e,(()=>t((u++,a=null,p()))),(()=>n(e)),u+1);}));throw e})).then((t=>e!==a&&a?a:(t&&(t.__esModule||"Module"===t[Symbol.toStringTag])&&(t=t.default),c=t,t))))};return An({name:"AsyncComponentWrapper",__asyncLoader:p,get __asyncResolved(){return c},setup(){const e=Tr;if(c)return ()=>On(c,e);const t=t=>{a=null,wt(t,e,13,!o);};if(i&&e.suspense)return p().then((t=>()=>On(t,e))).catch((e=>(t(e),()=>o?fr(o,{error:e}):null)));const l=at(!1),u=at(),f=at(!!r);return r&&setTimeout((()=>{f.value=!1;}),r),null!=s&&setTimeout((()=>{if(!l.value&&!u.value){const e=new Error(`Async component timed out after ${s}ms.`);t(e),u.value=e;}}),s),p().then((()=>{l.value=!0,e.parent&&In(e.parent.vnode)&&jt(e.parent.update);})).catch((e=>{t(e),u.value=e;})),()=>l.value&&c?On(c,e):u.value&&o?fr(o,{error:u.value}):n&&!f.value?fr(n):void 0}})},e.defineComponent=An,e.defineEmit=function(){return null},e.defineProps=function(){return null},e.getCurrentInstance=Nr,e.getTransitionRawChildren=Fn,e.h=Ur,e.handleError=wt,e.hydrate=(...e)=>{ni().hydrate(...e);},e.initCustomFormatter=function(){},e.inject=hn,e.isProxy=st,e.isReactive=ot,e.isReadonly=rt,e.isRef=ct,e.isRuntimeOnly=()=>!Fr,e.isVNode=lr,e.markRaw=function(e){return J(e,"__v_skip",!0),e},e.mergeProps=yr,e.nextTick=Lt,e.onActivated=Pn,e.onBeforeMount=zn,e.onBeforeUnmount=Jn,e.onBeforeUpdate=Gn,e.onDeactivated=Vn,e.onErrorCaptured=eo,e.onMounted=Kn,e.onRenderTracked=Yn,e.onRenderTriggered=Xn,e.onServerPrefetch=Qn,e.onUnmounted=Zn,e.onUpdated=qn,e.openBlock=nr,e.popScopeId=function(){Xt=null;},e.provide=dn,e.proxyRefs=ht,e.pushScopeId=function(e){Xt=e;},e.queuePostFlushCb=Dt,e.reactive=Ye,e.readonly=tt,e.ref=at,e.registerRuntimeCompiler=Or,e.render=(...e)=>{ti().render(...e);},e.renderList=function(e,t){let n;if(T(e)||A(e)){n=new Array(e.length);for(let o=0,r=e.length;o<r;o++)n[o]=t(e[o],o);}else if("number"==typeof e){n=new Array(e);for(let o=0;o<e;o++)n[o]=t(o+1,o);}else if(O(e))if(e[Symbol.iterator])n=Array.from(e,t);else {const o=Object.keys(e);n=new Array(o.length);for(let r=0,s=o.length;r<s;r++){const s=o[r];n[r]=t(e[s],s,r);}}else n=[];return n},e.renderSlot=function(e,t,n={},o,r){let s=e[t];s&&s._c&&(s._d=!1),nr();const i=s&&br(s(n)),l=ir(Zo,{key:n.key||`_${t}`},i||(o?o():[]),i&&1===e._?64:-2);return !r&&l.scopeId&&(l.slotScopeIds=[l.scopeId+"-s"]),s&&s._c&&(s._d=!0),l},e.resolveComponent=function(e,t){return qo(Ko,e,!0,t)||e},e.resolveDirective=function(e){return qo("directives",e)},e.resolveDynamicComponent=function(e){return A(e)?qo(Ko,e,!1)||e:e||Go},e.resolveFilter=null,e.resolveTransitionHooks=Tn,e.setBlockTracking=sr,e.setDevtoolsHook=function(t){e.devtools=t;},e.setTransitionHooks=$n,e.shallowReactive=et,e.shallowReadonly=function(e){return nt(e,!0,ke,Ge,Qe)},e.shallowRef=function(e){return pt(e,!0)},e.ssrContextKey=Hr,e.ssrUtils=null,e.toDisplayString=e=>null==e?"":O(e)?JSON.stringify(e,h,2):String(e),e.toHandlerKey=K,e.toHandlers=function(e){const t={};for(const n in e)t[K(n)]=e[n];return t},e.toRaw=it,e.toRef=vt,e.toRefs=function(e){const t=T(e)?new Array(e.length):{};for(const n in e)t[n]=vt(e,n);return t},e.transformVNodeArgs=function(e){},e.triggerRef=function(e){pe(it(e),"set","value",void 0);},e.unref=ft,e.useContext=function(){const e=Nr();return e.setupContext||(e.setupContext=Br(e))},e.useCssModule=function(e="$style"){return m},e.useCssVars=function(e){const t=Nr();if(!t)return;const n=()=>as(t.subTree,e(t.proxy));Kn((()=>mn(n,{flush:"post"}))),qn(n);},e.useSSRContext=()=>{},e.useTransitionState=Sn,e.vModelCheckbox=Vs,e.vModelDynamic=zs,e.vModelRadio=js,e.vModelSelect=Us,e.vModelText=Ps,e.vShow=Zs,e.version=Dr,e.warn=_t,e.watch=vn,e.watchEffect=mn,e.withCtx=en,e.withDirectives=function(e,t){if(null===Qt)return e;const n=Qt.proxy,o=e.dirs||(e.dirs=[]);for(let r=0;r<t.length;r++){let[e,s,i,l=m]=t[r];F(e)&&(e={mounted:e,updated:e}),o.push({dir:e,instance:n,value:s,oldValue:void 0,arg:i,modifiers:l});}return e},e.withKeys=(e,t)=>n=>{if(!("key"in n))return;const o=W(n.key);return t.some((e=>e===o||Js[e]===o))?e(n):void 0},e.withModifiers=(e,t)=>(n,...o)=>{for(let e=0;e<t.length;e++){const o=qs[t[e]];if(o&&o(n,t))return}return e(n,...o)},e.withScopeId=e=>en,Object.defineProperty(e,"__esModule",{value:!0}),e}({});

  /*!
    * vue-router v4.0.8
    * (c) 2021 Eduardo San Martin Morote
    * @license MIT
    */
  window.VueRouter=function(e,t){const n="function"==typeof Symbol&&"symbol"==typeof Symbol.toStringTag,r=e=>n?Symbol(e):"_vr_"+e,o=r("rvlm"),a=r("rvd"),i=r("r"),c=r("rl"),s=r("rvl"),l="undefined"!=typeof window;const u=Object.assign;function f(e,t){const n={};for(const r in t){const o=t[r];n[r]=Array.isArray(o)?o.map(e):e(o);}return n}let p=()=>{};const h=/\/$/;function d(e,t,n="/"){let r,o={},a="",i="";const c=t.indexOf("?"),s=t.indexOf("#",c>-1?c:0);return c>-1&&(r=t.slice(0,c),a=t.slice(c+1,s>-1?s:t.length),o=e(a)),s>-1&&(r=r||t.slice(0,s),i=t.slice(s,t.length)),r=function(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/");let o,a,i=n.length-1;for(o=0;o<r.length;o++)if(a=r[o],1!==i&&"."!==a){if(".."!==a)break;i--;}return n.slice(0,i).join("/")+"/"+r.slice(o-(o===r.length?1:0)).join("/")}(null!=r?r:t,n),{fullPath:r+(a&&"?")+a+i,path:r,query:o,hash:i}}function m(e,t){return !t||e.toLowerCase().indexOf(t.toLowerCase())?e:e.slice(t.length)||"/"}function v(e,t){return (e.aliasOf||e)===(t.aliasOf||t)}function g(e,t){if(Object.keys(e).length!==Object.keys(t).length)return !1;for(let n in e)if(!y(e[n],t[n]))return !1;return !0}function y(e,t){return Array.isArray(e)?b(e,t):Array.isArray(t)?b(t,e):e===t}function b(e,t){return Array.isArray(t)?e.length===t.length&&e.every(((e,n)=>e===t[n])):1===e.length&&e[0]===t}var w,E;!function(e){e.pop="pop",e.push="push";}(w||(w={})),function(e){e.back="back",e.forward="forward",e.unknown="";}(E||(E={}));function R(e){if(!e)if(l){const t=document.querySelector("base");e=(e=t&&t.getAttribute("href")||"/").replace(/^\w+:\/\/[^\/]+/,"");}else e="/";return "/"!==e[0]&&"#"!==e[0]&&(e="/"+e),e.replace(h,"")}const O=/^[^#]+#/;function A(e,t){return e.replace(O,"#")+t}const k=()=>({left:window.pageXOffset,top:window.pageYOffset});function x(e){let t;if("el"in e){let n=e.el;const r="string"==typeof n&&n.startsWith("#"),o="string"==typeof n?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!o)return;t=function(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return {behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}(o,e);}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(null!=t.left?t.left:window.pageXOffset,null!=t.top?t.top:window.pageYOffset);}function P(e,t){return (history.state?history.state.position-t:-1)+e}const j=new Map;let C=()=>location.protocol+"//"+location.host;function $(e,t){const{pathname:n,search:r,hash:o}=t,a=e.indexOf("#");if(a>-1){let t=o.includes(e.slice(a))?e.slice(a).length:1,n=o.slice(t);return "/"!==n[0]&&(n="/"+n),m(n,"")}return m(n,e)+r+o}function S(e,t,n,r=!1,o=!1){return {back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:o?k():null}}function L(e){const t=function(e){const{history:t,location:n}=window;let r={value:$(e,n)},o={value:t.state};function a(r,a,i){const c=e.indexOf("#"),s=c>-1?(n.host&&document.querySelector("base")?e:e.slice(c))+r:C()+e+r;try{t[i?"replaceState":"pushState"](a,"",s),o.value=a;}catch(e){console.error(e),n[i?"replace":"assign"](s);}}return o.value||a(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0),{location:r,state:o,push:function(e,n){const i=u({},o.value,t.state,{forward:e,scroll:k()});a(i.current,i,!0),a(e,u({},S(r.value,e,null),{position:i.position+1},n),!1),r.value=e;},replace:function(e,n){a(e,u({},t.state,S(o.value.back,e,o.value.forward,!0),n,{position:o.value.position}),!0),r.value=e;}}}(e=R(e)),n=function(e,t,n,r){let o=[],a=[],i=null;const c=({state:a})=>{const c=$(e,location),s=n.value,l=t.value;let u=0;if(a){if(n.value=c,t.value=a,i&&i===s)return void(i=null);u=l?a.position-l.position:0;}else r(c);o.forEach((e=>{e(n.value,s,{delta:u,type:w.pop,direction:u?u>0?E.forward:E.back:E.unknown});}));};function s(){const{history:e}=window;e.state&&e.replaceState(u({},e.state,{scroll:k()}),"");}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",s),{pauseListeners:function(){i=n.value;},listen:function(e){o.push(e);const t=()=>{const t=o.indexOf(e);t>-1&&o.splice(t,1);};return a.push(t),t},destroy:function(){for(const e of a)e();a=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",s);}}}(e,t.state,t.location,t.replace);const r=u({location:"",base:e,go:function(e,t=!0){t||n.pauseListeners(),history.go(e);},createHref:A.bind(null,e)},t,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>t.state.value}),r}function q(e){return "string"==typeof e||"symbol"==typeof e}const M={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},_=r("nf");var T;function B(e,t){return u(new Error,{type:e,[_]:!0},t)}function G(e,t){return e instanceof Error&&_ in e&&(null==t||!!(e.type&t))}e.NavigationFailureType=void 0,(T=e.NavigationFailureType||(e.NavigationFailureType={}))[T.aborted=4]="aborted",T[T.cancelled=8]="cancelled",T[T.duplicated=16]="duplicated";const F="[^/]+?",I={sensitive:!1,strict:!1,start:!0,end:!0},K=/[.+*?^${}()[\]/\\]/g;function U(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++;}return e.length<t.length?1===e.length&&80===e[0]?-1:1:e.length>t.length?1===t.length&&80===t[0]?1:-1:0}function V(e,t){let n=0;const r=e.score,o=t.score;for(;n<r.length&&n<o.length;){const e=U(r[n],o[n]);if(e)return e;n++;}return o.length-r.length}const H={type:0,value:""},D=/[a-zA-Z0-9_]/;function W(e,t,n){const r=function(e,t){const n=u({},I,t);let r=[],o=n.start?"^":"";const a=[];for(const t of e){const e=t.length?[]:[90];n.strict&&!t.length&&(o+="/");for(let r=0;r<t.length;r++){const i=t[r];let c=40+(n.sensitive?.25:0);if(0===i.type)r||(o+="/"),o+=i.value.replace(K,"\\$&"),c+=40;else if(1===i.type){const{value:e,repeatable:n,optional:s,regexp:l}=i;a.push({name:e,repeatable:n,optional:s});const u=l||F;if(u!==F){c+=10;try{new RegExp(`(${u})`);}catch(t){throw new Error(`Invalid custom RegExp for param "${e}" (${u}): `+t.message)}}let f=n?`((?:${u})(?:/(?:${u}))*)`:`(${u})`;r||(f=s&&t.length<2?`(?:/${f})`:"/"+f),s&&(f+="?"),o+=f,c+=20,s&&(c+=-8),n&&(c+=-20),".*"===u&&(c+=-50);}e.push(c);}r.push(e);}if(n.strict&&n.end){const e=r.length-1;r[e][r[e].length-1]+=.7000000000000001;}n.strict||(o+="/?"),n.end?o+="$":n.strict&&(o+="(?:/|$)");const i=new RegExp(o,n.sensitive?"":"i");return {re:i,score:r,keys:a,parse:function(e){const t=e.match(i),n={};if(!t)return null;for(let e=1;e<t.length;e++){const r=t[e]||"",o=a[e-1];n[o.name]=r&&o.repeatable?r.split("/"):r;}return n},stringify:function(t){let n="",r=!1;for(const o of e){r&&n.endsWith("/")||(n+="/"),r=!1;for(const e of o)if(0===e.type)n+=e.value;else if(1===e.type){const{value:a,repeatable:i,optional:c}=e,s=a in t?t[a]:"";if(Array.isArray(s)&&!i)throw new Error(`Provided param "${a}" is an array but it is not repeatable (* or + modifiers)`);const l=Array.isArray(s)?s.join("/"):s;if(!l){if(!c)throw new Error(`Missing required param "${a}"`);o.length<2&&(n.endsWith("/")?n=n.slice(0,-1):r=!0);}n+=l;}}return n}}}(function(e){if(!e)return [[]];if("/"===e)return [[H]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(e){throw new Error(`ERR (${n})/"${l}": ${e}`)}let n=0,r=n;const o=[];let a;function i(){a&&o.push(a),a=[];}let c,s=0,l="",u="";function f(){l&&(0===n?a.push({type:0,value:l}):1===n||2===n||3===n?(a.length>1&&("*"===c||"+"===c)&&t(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),a.push({type:1,value:l,regexp:u,repeatable:"*"===c||"+"===c,optional:"*"===c||"?"===c})):t("Invalid state to consume buffer"),l="");}function p(){l+=c;}for(;s<e.length;)if(c=e[s++],"\\"!==c||2===n)switch(n){case 0:"/"===c?(l&&f(),i()):":"===c?(f(),n=1):p();break;case 4:p(),n=r;break;case 1:"("===c?n=2:D.test(c)?p():(f(),n=0,"*"!==c&&"?"!==c&&"+"!==c&&s--);break;case 2:")"===c?"\\"==u[u.length-1]?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:f(),n=0,"*"!==c&&"?"!==c&&"+"!==c&&s--,u="";break;default:t("Unknown state");}else r=n,n=4;return 2===n&&t(`Unfinished custom RegExp for param "${l}"`),f(),i(),o}(e.path),n),o=u(r,{record:e,parent:t,children:[],alias:[]});return t&&!o.record.aliasOf==!t.record.aliasOf&&t.children.push(o),o}function N(e,t){const n=[],r=new Map;function o(e,n,r){let c=!r,s=function(e){return {path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:z(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||{}:{default:e.component}}}(e);s.aliasOf=r&&r.record;const l=Y(t,e),f=[s];if("alias"in e){const t="string"==typeof e.alias?[e.alias]:e.alias;for(const e of t)f.push(u({},s,{components:r?r.record.components:s.components,path:e,aliasOf:r?r.record:s}));}let h,d;for(const t of f){let{path:u}=t;if(n&&"/"!==u[0]){let e=n.record.path,r="/"===e[e.length-1]?"":"/";t.path=n.record.path+(u&&r+u);}if(h=W(t,n,l),r?r.alias.push(h):(d=d||h,d!==h&&d.alias.push(h),c&&e.name&&!Q(h)&&a(e.name)),"children"in s){let e=s.children;for(let t=0;t<e.length;t++)o(e[t],h,r&&r.children[t]);}r=r||h,i(h);}return d?()=>{a(d);}:p}function a(e){if(q(e)){const t=r.get(e);t&&(r.delete(e),n.splice(n.indexOf(t),1),t.children.forEach(a),t.alias.forEach(a));}else {let t=n.indexOf(e);t>-1&&(n.splice(t,1),e.record.name&&r.delete(e.record.name),e.children.forEach(a),e.alias.forEach(a));}}function i(e){let t=0;for(;t<n.length&&V(e,n[t])>=0;)t++;n.splice(t,0,e),e.record.name&&!Q(e)&&r.set(e.record.name,e);}return t=Y({strict:!1,end:!0,sensitive:!1},t),e.forEach((e=>o(e))),{addRoute:o,resolve:function(e,t){let o,a,i,c={};if("name"in e&&e.name){if(o=r.get(e.name),!o)throw B(1,{location:e});i=o.record.name,c=u(function(e,t){let n={};for(let r of t)r in e&&(n[r]=e[r]);return n}(t.params,o.keys.filter((e=>!e.optional)).map((e=>e.name))),e.params),a=o.stringify(c);}else if("path"in e)a=e.path,o=n.find((e=>e.re.test(a))),o&&(c=o.parse(a),i=o.record.name);else {if(o=t.name?r.get(t.name):n.find((e=>e.re.test(t.path))),!o)throw B(1,{location:e,currentLocation:t});i=o.record.name,c=u({},t.params,e.params),a=o.stringify(c);}const s=[];let l=o;for(;l;)s.unshift(l.record),l=l.parent;return {name:i,path:a,params:c,matched:s,meta:X(s)}},removeRoute:a,getRoutes:function(){return n},getRecordMatcher:function(e){return r.get(e)}}}function z(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(let r in e.components)t[r]="boolean"==typeof n?n:n[r];return t}function Q(e){for(;e;){if(e.record.aliasOf)return !0;e=e.parent;}return !1}function X(e){return e.reduce(((e,t)=>u(e,t.meta)),{})}function Y(e,t){let n={};for(let r in e)n[r]=r in t?t[r]:e[r];return n}const Z=/#/g,J=/&/g,ee=/\//g,te=/=/g,ne=/\?/g,re=/\+/g,oe=/%5B/g,ae=/%5D/g,ie=/%5E/g,ce=/%60/g,se=/%7B/g,le=/%7C/g,ue=/%7D/g,fe=/%20/g;function pe(e){return encodeURI(""+e).replace(le,"|").replace(oe,"[").replace(ae,"]")}function he(e){return pe(e).replace(re,"%2B").replace(fe,"+").replace(Z,"%23").replace(J,"%26").replace(ce,"`").replace(se,"{").replace(ue,"}").replace(ie,"^")}function de(e){return function(e){return pe(e).replace(Z,"%23").replace(ne,"%3F")}(e).replace(ee,"%2F")}function me(e){try{return decodeURIComponent(""+e)}catch(e){}return ""+e}function ve(e){const t={};if(""===e||"?"===e)return t;const n=("?"===e[0]?e.slice(1):e).split("&");for(let e=0;e<n.length;++e){const r=n[e].replace(re," ");let o=r.indexOf("="),a=me(o<0?r:r.slice(0,o));if(Object.prototype.hasOwnProperty(a))continue;let i=o<0?null:me(r.slice(o+1));if(a in t){let e=t[a];Array.isArray(e)||(e=t[a]=[e]),e.push(i);}else t[a]=i;}return t}function ge(e){let t="";for(let n in e){const r=e[n];if(n=he(n).replace(te,"%3D"),null==r){void 0!==r&&(t+=(t.length?"&":"")+n);continue}(Array.isArray(r)?r.map((e=>e&&he(e))):[r&&he(r)]).forEach((e=>{void 0!==e&&(t+=(t.length?"&":"")+n,null!=e&&(t+="="+e));}));}return t}function ye(e){const t={};for(let n in e){let r=e[n];void 0!==r&&(t[n]=Array.isArray(r)?r.map((e=>null==e?null:""+e)):null==r?r:""+r);}return t}function be(){let e=[];return {add:function(t){return e.push(t),()=>{const n=e.indexOf(t);n>-1&&e.splice(n,1);}},list:()=>e,reset:function(){e=[];}}}function we(e,n,r){const o=()=>{e[n].delete(r);};t.onUnmounted(o),t.onDeactivated(o),t.onActivated((()=>{e[n].add(r);})),e[n].add(r);}function Ee(e,t,n,r,o){const a=r&&(r.enterCallbacks[o]=r.enterCallbacks[o]||[]);return ()=>new Promise(((i,c)=>{const s=e=>{var s;!1===e?c(B(4,{from:n,to:t})):e instanceof Error?c(e):"string"==typeof(s=e)||s&&"object"==typeof s?c(B(2,{from:t,to:e})):(a&&r.enterCallbacks[o]===a&&"function"==typeof e&&a.push(e),i());},l=e.call(r&&r.instances[o],t,n,s);let u=Promise.resolve(l);e.length<3&&(u=u.then(s)),u.catch((e=>c(e)));}))}function Re(e,t,r,o){const a=[];for(const c of e)for(const e in c.components){let s=c.components[e];if("beforeRouteEnter"===t||c.instances[e])if("object"==typeof(i=s)||"displayName"in i||"props"in i||"__vccOpts"in i){const n=(s.__vccOpts||s)[t];n&&a.push(Ee(n,r,o,c,e));}else {let i=s();i=i.catch(console.error),a.push((()=>i.then((a=>{if(!a)return Promise.reject(new Error(`Couldn't resolve component "${e}" at "${c.path}"`));const i=(s=a).__esModule||n&&"Module"===s[Symbol.toStringTag]?a.default:a;var s;c.components[e]=i;const l=(i.__vccOpts||i)[t];return l&&Ee(l,r,o,c,e)()}))));}}var i;return a}function Oe(e){const n=t.inject(i),r=t.inject(c),o=t.computed((()=>n.resolve(t.unref(e.to)))),a=t.computed((()=>{let{matched:e}=o.value,{length:t}=e;const n=e[t-1];let a=r.matched;if(!n||!a.length)return -1;let i=a.findIndex(v.bind(null,n));if(i>-1)return i;let c=ke(e[t-2]);return t>1&&ke(n)===c&&a[a.length-1].path!==c?a.findIndex(v.bind(null,e[t-2])):i})),s=t.computed((()=>a.value>-1&&function(e,t){for(let n in t){let r=t[n],o=e[n];if("string"==typeof r){if(r!==o)return !1}else if(!Array.isArray(o)||o.length!==r.length||r.some(((e,t)=>e!==o[t])))return !1}return !0}(r.params,o.value.params))),l=t.computed((()=>a.value>-1&&a.value===r.matched.length-1&&g(r.params,o.value.params)));return {route:o,href:t.computed((()=>o.value.href)),isActive:s,isExactActive:l,navigate:function(r={}){return function(e){if(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)return;if(e.defaultPrevented)return;if(void 0!==e.button&&0!==e.button)return;if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}e.preventDefault&&e.preventDefault();return !0}(r)?n[t.unref(e.replace)?"replace":"push"](t.unref(e.to)):Promise.resolve()}}}const Ae=t.defineComponent({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},setup(e,{slots:n}){const r=t.reactive(Oe(e)),{options:o}=t.inject(i),a=t.computed((()=>({[xe(e.activeClass,o.linkActiveClass,"router-link-active")]:r.isActive,[xe(e.exactActiveClass,o.linkExactActiveClass,"router-link-exact-active")]:r.isExactActive})));return ()=>{const o=n.default&&n.default(r);return e.custom?o:t.h("a",{"aria-current":r.isExactActive?e.ariaCurrentValue:null,href:r.href,onClick:r.navigate,class:a.value},o)}}});function ke(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const xe=(e,t,n)=>null!=e?e:null!=t?t:n;function Pe(e,t){if(!e)return null;const n=e(t);return 1===n.length?n[0]:n}const je=t.defineComponent({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},setup(e,{attrs:n,slots:r}){const i=t.inject(s),c=t.computed((()=>e.route||i.value)),l=t.inject(a,0),f=t.computed((()=>c.value.matched[l]));t.provide(a,l+1),t.provide(o,f),t.provide(s,c);const p=t.ref();return t.watch((()=>[p.value,f.value,e.name]),(([e,t,n],[r,o,a])=>{t&&(t.instances[n]=e,o&&o!==t&&e&&e===r&&(t.leaveGuards.size||(t.leaveGuards=o.leaveGuards),t.updateGuards.size||(t.updateGuards=o.updateGuards))),!e||!t||o&&v(t,o)&&r||(t.enterCallbacks[n]||[]).forEach((t=>t(e)));}),{flush:"post"}),()=>{const o=c.value,a=f.value,i=a&&a.components[e.name],s=e.name;if(!i)return Pe(r.default,{Component:i,route:o});const l=a.props[e.name],h=l?!0===l?o.params:"function"==typeof l?l(o):l:null,d=t.h(i,u({},h,n,{onVnodeUnmounted:e=>{e.component.isUnmounted&&(a.instances[s]=null);},ref:p}));return Pe(r.default,{Component:d,route:o})||d}}});function Ce(e){return e.reduce(((e,t)=>e.then((()=>t()))),Promise.resolve())}return e.RouterLink=Ae,e.RouterView=je,e.START_LOCATION=M,e.createMemoryHistory=function(e=""){let t=[],n=[""],r=0;function o(e){r++,r===n.length||n.splice(r),n.push(e);}const a={location:"",state:{},base:e,createHref:A.bind(null,e),replace(e){n.splice(r--,1),o(e);},push(e,t){o(e);},listen:e=>(t.push(e),()=>{const n=t.indexOf(e);n>-1&&t.splice(n,1);}),destroy(){t=[],n=[""],r=0;},go(e,o=!0){const a=this.location,i=e<0?E.back:E.forward;r=Math.max(0,Math.min(r+e,n.length-1)),o&&function(e,n,{direction:r,delta:o}){const a={direction:r,delta:o,type:w.pop};for(let r of t)r(e,n,a);}(this.location,a,{direction:i,delta:e});}};return Object.defineProperty(a,"location",{enumerable:!0,get:()=>n[r]}),a},e.createRouter=function(e){const n=N(e.routes,e);let r=e.parseQuery||ve,o=e.stringifyQuery||ge,a=e.history;const h=be(),m=be(),y=be(),b=t.shallowRef(M);let w=M;l&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const E=f.bind(null,(e=>""+e)),R=f.bind(null,de),O=f.bind(null,me);function A(e,t){if(t=u({},t||b.value),"string"==typeof e){let o=d(r,e,t.path),i=n.resolve({path:o.path},t),c=a.createHref(o.fullPath);return u(o,i,{params:O(i.params),hash:me(o.hash),redirectedFrom:void 0,href:c})}let i;"path"in e?i=u({},e,{path:d(r,e.path,t.path).path}):(i=u({},e,{params:R(e.params)}),t.params=R(t.params));let c=n.resolve(i,t);const s=e.hash||"";c.params=E(O(c.params));const l=function(e,t){let n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}(o,u({},e,{hash:(f=s,pe(f).replace(se,"{").replace(ue,"}").replace(ie,"^")),path:c.path}));var f;let p=a.createHref(l);return u({fullPath:l,hash:s,query:o===ge?ye(e.query):e.query},c,{redirectedFrom:void 0,href:p})}function C(e){return "string"==typeof e?d(r,e,b.value.path):u({},e)}function $(e,t){if(w!==e)return B(8,{from:t,to:e})}function S(e){return _(e)}function L(e){const t=e.matched[e.matched.length-1];if(t&&t.redirect){const{redirect:n}=t;let r="function"==typeof n?n(e):n;return "string"==typeof r&&(r=r.indexOf("?")>-1||r.indexOf("#")>-1?r=C(r):{path:r}),u({query:e.query,hash:e.hash,params:e.params},r)}}function _(e,t){const n=w=A(e),r=b.value,a=e.state,i=e.force,c=!0===e.replace,s=L(n);if(s)return _(u(C(s),{state:a,force:i,replace:c}),t||n);const l=n;let f;return l.redirectedFrom=t,!i&&function(e,t,n){let r=t.matched.length-1,o=n.matched.length-1;return r>-1&&r===o&&v(t.matched[r],n.matched[o])&&g(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}(o,r,n)&&(f=B(16,{to:l,from:r}),X(r,r,!0,!1)),(f?Promise.resolve(f):F(l,r)).catch((e=>G(e)?e:z(e))).then((e=>{if(e){if(G(e,2))return _(u(C(e.to),{state:a,force:i,replace:c}),t||l)}else e=K(l,r,!0,c,a);return I(l,r,e),e}))}function T(e,t){const n=$(e,t);return n?Promise.reject(n):Promise.resolve()}function F(e,t){let n;const[r,o,a]=function(e,t){const n=[],r=[],o=[],a=Math.max(t.matched.length,e.matched.length);for(let i=0;i<a;i++){const a=t.matched[i];a&&(e.matched.find((e=>v(e,a)))?r.push(a):n.push(a));const c=e.matched[i];c&&(t.matched.find((e=>v(e,c)))||o.push(c));}return [n,r,o]}(e,t);n=Re(r.reverse(),"beforeRouteLeave",e,t);for(const o of r)o.leaveGuards.forEach((r=>{n.push(Ee(r,e,t));}));const i=T.bind(null,e,t);return n.push(i),Ce(n).then((()=>{n=[];for(const r of h.list())n.push(Ee(r,e,t));return n.push(i),Ce(n)})).then((()=>{n=Re(o,"beforeRouteUpdate",e,t);for(const r of o)r.updateGuards.forEach((r=>{n.push(Ee(r,e,t));}));return n.push(i),Ce(n)})).then((()=>{n=[];for(const r of e.matched)if(r.beforeEnter&&t.matched.indexOf(r)<0)if(Array.isArray(r.beforeEnter))for(const o of r.beforeEnter)n.push(Ee(o,e,t));else n.push(Ee(r.beforeEnter,e,t));return n.push(i),Ce(n)})).then((()=>(e.matched.forEach((e=>e.enterCallbacks={})),n=Re(a,"beforeRouteEnter",e,t),n.push(i),Ce(n)))).then((()=>{n=[];for(const r of m.list())n.push(Ee(r,e,t));return n.push(i),Ce(n)})).catch((e=>G(e,8)?e:Promise.reject(e)))}function I(e,t,n){for(const r of y.list())r(e,t,n);}function K(e,t,n,r,o){const i=$(e,t);if(i)return i;const c=t===M,s=l?history.state:{};n&&(r||c?a.replace(e.fullPath,u({scroll:c&&s&&s.scroll},o)):a.push(e.fullPath,o)),b.value=e,X(e,t,n,c),Q();}let U;function V(){U=a.listen(((e,t,n)=>{let r=A(e);const o=L(r);if(o)return void _(u(o,{replace:!0}),r).catch(p);w=r;const i=b.value;var c,s;l&&(c=P(i.fullPath,n.delta),s=k(),j.set(c,s)),F(r,i).catch((e=>G(e,12)?e:G(e,2)?(_(e.to,r).catch(p),Promise.reject()):(n.delta&&a.go(-n.delta,!1),z(e)))).then((e=>{(e=e||K(r,i,!1))&&n.delta&&a.go(-n.delta,!1),I(r,i,e);})).catch(p);}));}let H,D=be(),W=be();function z(e){return Q(e),W.list().forEach((t=>t(e))),Promise.reject(e)}function Q(e){H||(H=!0,V(),D.list().forEach((([t,n])=>e?n(e):t())),D.reset());}function X(n,r,o,a){const{scrollBehavior:i}=e;if(!l||!i)return Promise.resolve();let c=!o&&function(e){const t=j.get(e);return j.delete(e),t}(P(n.fullPath,0))||(a||!o)&&history.state&&history.state.scroll||null;return t.nextTick().then((()=>i(n,r,c))).then((e=>e&&x(e))).catch(z)}const Y=e=>a.go(e);let Z;const J=new Set;return {currentRoute:b,addRoute:function(e,t){let r,o;return q(e)?(r=n.getRecordMatcher(e),o=t):o=e,n.addRoute(o,r)},removeRoute:function(e){let t=n.getRecordMatcher(e);t&&n.removeRoute(t);},hasRoute:function(e){return !!n.getRecordMatcher(e)},getRoutes:function(){return n.getRoutes().map((e=>e.record))},resolve:A,options:e,push:S,replace:function(e){return S(u(C(e),{replace:!0}))},go:Y,back:()=>Y(-1),forward:()=>Y(1),beforeEach:h.add,beforeResolve:m.add,afterEach:y.add,onError:W.add,isReady:function(){return H&&b.value!==M?Promise.resolve():new Promise(((e,t)=>{D.add([e,t]);}))},install(e){e.component("RouterLink",Ae),e.component("RouterView",je),e.config.globalProperties.$router=this,Object.defineProperty(e.config.globalProperties,"$route",{enumerable:!0,get:()=>t.unref(b)}),l&&!Z&&b.value===M&&(Z=!0,S(a.location).catch((e=>{})));const n={};for(let e in M)n[e]=t.computed((()=>b.value[e]));e.provide(i,this),e.provide(c,t.reactive(n)),e.provide(s,b);let r=e.unmount;J.add(e),e.unmount=function(){J.delete(e),J.size<1&&(U(),b.value=M,Z=!1,H=!1),r();};}}},e.createRouterMatcher=N,e.createWebHashHistory=function(e){return (e=location.host?e||location.pathname+location.search:"").indexOf("#")<0&&(e+="#"),L(e)},e.createWebHistory=L,e.isNavigationFailure=G,e.matchedRouteKey=o,e.onBeforeRouteLeave=function(e){const n=t.inject(o,{}).value;n&&we(n,"leaveGuards",e);},e.onBeforeRouteUpdate=function(e){const n=t.inject(o,{}).value;n&&we(n,"updateGuards",e);},e.parseQuery=ve,e.routeLocationKey=c,e.routerKey=i,e.routerViewLocationKey=s,e.stringifyQuery=ge,e.useLink=Oe,e.useRoute=function(){return t.inject(c)},e.useRouter=function(){return t.inject(i)},e.viewDepthKey=a,Object.defineProperty(e,"__esModule",{value:!0}),e}({},Vue);

  // WebReflection / element-notifier
  function onMutation(callback, root) {

      let loop = function loop(nodes, added, removed, connected, pass) {

          for (let i = 0, length = nodes.length; i < length; i++) {

              let node = nodes[i];

              if (pass || 'querySelectorAll' in node) {

                  if (connected) {
                      if (!added.has(node)) {
                          added.add(node);
                          removed["delete"](node);
                          callback(node, connected);
                      }
                  } else if (!removed.has(node)) {
                      removed.add(node);
                      added["delete"](node);
                      callback(node, connected);
                  }

                  if (!pass) loop((node.shadowRoot || node)['querySelectorAll']('*'), added, removed, connected, true);
              }
          }
      };

      let observer = new MutationObserver(records => {
          for (let added = new Set(), removed = new Set(), i = 0, length = records.length; i < length; i++) {
              let _records$i = records[i],
                  addedNodes = _records$i.addedNodes,
                  removedNodes = _records$i.removedNodes;
              loop(removedNodes, added, removed, false, false);
              loop(addedNodes, added, removed, true, false);
          }
      });

      observer.observe(root || document, {
          subtree: true,
          childList: true
      });

      return observer;
  }

  function on$1(element, name, delegate, fn) {

      if (!fn) {
         element.addEventListener(name, arguments[2]);
      } else {
          element.addEventListener(name, function (e) {

              let target = e.target;

              while (target !== element) {

                  if (!target) {
                      break;
                  }

                  if (target.matches(delegate)){
                      return fn.apply(target, arguments);
                  }

                  target = target.parentNode;
              }
          }, true);
      }

      return element;
  }

  function trigger(ele, name, data = {}) {
      ele.dispatchEvent(new CustomEvent(name, Object.assign({bubbles: true}, data)));
  }

  on$1(document.documentElement, 'click', function(e) {

      let dropdowns = document.body.querySelectorAll('kiss-dropdown[open="true"]'),
          dp = e.target.closest('kiss-dropdown');

      for (let i=0;i<dropdowns.length;i++) {
          if (!dp || dp!==dropdowns[i]) dropdowns[i].close();
      }

  });

  customElements.define('kiss-dropdown', class extends HTMLElement {

      connectedCallback() {

          this.addEventListener('click', (e) => {

              if (e.target.matches('input,select,textarea')) {
                  return;
              }
              
              if (this.getAttribute('open') == 'true') {

                  if (this.getAttribute('autohide') == 'false') {
                      return
                  }

                  this.close();
              } else {
                  this.open();
              }
          });
      }

      open() {
          this.setAttribute('open', 'true');
      }

      close() {
          this.removeAttribute('open');
      }
  });

  customElements.define('kiss-dialog', class extends HTMLElement {

      connectedCallback() {

          on$1(this, 'click', '[kiss-dialog-close]', e => {
              e.preventDefault();
              this.close();
          });
      }

      show() {
          this.setAttribute('open', 'true');
      }

      close() {
          this.removeAttribute('open');
      }
  });

  on$1(document.documentElement, 'click', '[kiss-offcanvas]', function (e) {

      e.preventDefault();

      let offcanvas = document.querySelector(this.getAttribute('kiss-offcanvas') || this.getAttribute('href'));

      if (offcanvas && offcanvas.show) {
          offcanvas.show();
      }
  });

  customElements.define('kiss-offcanvas', class extends HTMLElement {

      connectedCallback() {

          let $self = this, pointerStart = null;

          on$1(this, 'pointerdown', e => pointerStart = e.target);
          on$1(this, 'pointerup', e => {

              if (e.target == this && pointerStart == this) {

                  e.preventDefault();

                  if (!this.matches('[modal="true"]')) {
                      this.close();
                  }
              }
          });


          on$1(this, 'click', '[kiss-offcanvas-close]', function(e){

              if (this.getAttribute('kiss-offcanvas-close') != 'no-prevent') {
                  e.preventDefault();
              }

              $self.close();
          });

      }

      show() {
          this.setAttribute('open', 'true');
      }

      close() {
          this.removeAttribute('open');
      }
  });

  on$1(document.documentElement, 'click', '[kiss-popoutmenu]', function (e) {

      e.preventDefault();

      let menu = document.querySelector(this.getAttribute('kiss-popoutmenu') || this.getAttribute('href'));

      if (menu && menu.show) {

          let position = this.getAttribute('kiss-popoutmenu-pos');

          menu.show(position ? this : null, position);
      }
  });

  customElements.define('kiss-popoutmenu', class extends HTMLElement {

      connectedCallback() {

          on$1(this, 'click', e => {
              this.close();
          });
      }

      show(ele, position = 'left') {

          let content = this.querySelector('kiss-content');

          if (content) {
              content.style.position = '';
              content.style.top = '';
              content.style.left = '';
          }

          if (content && ele) {

              let rect = ele.getBoundingClientRect(),
                  left = rect.left,
                  top = rect.top + ele.offsetHeight;

              switch (position) {
                  case "right":
                      left = rect.right - content.offsetWidth;
                      break;

                  case "center":
                      left = (rect.right - ele.offsetWidth/2) - content.offsetWidth / 2;
                      break;

                  case "left":
                  default:
                      left = rect.left;
                      break;
              }

              if (left + content.offsetWidth > this.offsetWidth) {
                  left = rect.right - content.offsetWidth;
              }

              content.style.position = 'absolute';
              content.style.top = `${top}px`;
              content.style.left = `${left}px`;

          }

          this.setAttribute('open', 'true');
      }

      close() {
          this.removeAttribute('open');
          trigger(this, 'popoutmenuclose');
      }
  });

  customElements.define('kiss-parallax', class extends HTMLElement {

      connectedCallback() {

          let $this = this;

          this.speed = .3;
          this.mobilePx = 450;
          this.mobileDisable = this.getAttribute('mobile') == 'false';
          this.conditions = [];
          this.active = true;

          this.transform = this.getAttribute('transform') || 'translateY';

          this.winHeight = window.innerHeight;
          this.accumulated = 0;
          this.getRect();

          this.startScroll = this.targetR.top - this.winHeight > 0
            ? this.targetR.top - this.winHeight
            : 0;

          window.addEventListener('scroll', event => {
              requestAnimationFrame(() => {
                  if ($this.mobileDisable && window.innerWidth < this.mobilePx) return

                  if ($this.active) {
                    $this.update();
                  }
              });
          });
      }

      // HELPERS
      scrollY() {
          return window.scrollY || window.pageYOffset;
      }

      getTranslation() {
          const dist = this.scrollY() - this.startScroll;
          const translation = (dist * this.speed) + this.accumulated;
          return translation >= 0 ? translation : 0;
      }

      getRect() {
          this.targetR = this.getBoundingClientRect();
          return this.targetR;
      }

      inWindow() {
          this.getRect();

          const top = this.targetR.top;
          const bottom = this.targetR.bottom;

          return top < this.winHeight && bottom > 0;
      }

      update() {

          if (this._isHidden()) {
              return;
          }

          let translate = this.getTranslation();
          let percent = ((translate / this.speed)/this.winHeight) * 100;

          if (percent < 0) percent = 0;
          if (percent > 100) percent = 100;

          let style = {transform : '', filter: ''}, mod;

          this.transform.split(' ').forEach(prop => {

              mod = prop.split('*');
              prop = mod[0];
              mod = Number(mod[1] || 1);

              switch (prop) {
                  case 'translateX':
                  case 'translateY':
                      style.transform += ` ${prop}(${(translate * mod)}px)`;
                      break;

                  case 'rotate':
                  case 'rotateX':
                  case 'rotateY':
                      style.transform += ` ${prop}(${(translate * mod)}deg)`;
                      break;

                  case 'opacity':
                      style.opacity = (mod < 0 ?  (percent/100) : 1 - (percent/100)) * Math.abs(mod);
                      break;
              }
          });

          Object.assign(this.style, style);
      }

      _isHidden() {
          return (this.offsetTop === null)
      }
  });

  function debounce(func, wait, immediate) {

      let timeout;

      return function () {
          let context = this, args = arguments;
          let later = () => {
              timeout = null;
              if (!immediate) func.apply(context, args);
          };
          let callNow = immediate && !timeout;
          clearTimeout(timeout);
          timeout = setTimeout(later, wait);
          if (callNow) func.apply(context, args);
      };
  }

  customElements.define('kiss-row', class extends HTMLElement {

      connectedCallback() {

          document.addEventListener('DOMContentLoaded', () => requestAnimationFrame(() => {
              this.update();

              setTimeout(() => {
                  this.update();
              }, 500);
          }));

          let debouncedUpdate = debounce(() => this.update() , 15);

          window.addEventListener('resize', debouncedUpdate);
          onMutation(debouncedUpdate, this);
          setTimeout(() => this.update(), 0);
      }

      update() {

          if (this.getAttribute('collapse') == 'true') return;

          if (!this.children.length || this._isHidden(this)) return;

          let firstVisible = null, children = this.children, top, diff;

          for (let i = 0; i < children.length; i++) {

              if (!firstVisible && !this._isHidden(children[i])) {
                  firstVisible = children[i];
              }

              children[i].classList.remove('kiss-row-margin');
          }

          if (!firstVisible) return;

          top = firstVisible.offsetTop;

          for (let i = 0; i < children.length; i++) {

              diff = Math.abs(top - (!this._isHidden(children[i]) ? children[i].offsetTop : top));

              if (diff > 1) {
                  children[i].classList.add('kiss-row-margin');
              }
          }
      }

      disconnectedCallback() {

      }

      _isHidden(el) {
          return (el.offsetTop === null)
      }
  });

  customElements.define('kiss-svg', class extends HTMLElement {

      static get observedAttributes() {
          return ['src'];
      }

      connectedCallback() {
          this.update();
      }

      attributeChangedCallback(attrName, oldVal, newVal) {
          if (attrName == 'src') this.update();
      }

      update() {

          let url = this.getAttribute('src');
          let width = this.getAttribute('width');
          let height = this.getAttribute('height');

          if (!url.trim()) {
              this.innerHTML = '';
              return;
          }

          if (width && height) {
              this.innerHTML = `<canvas width="${width}" height="${height}"></canvas>`;
          }

          fetch(url).then(response => response.text()).then(content => {

              content = content.trim();

              let attrs = {
                  width: this.getAttribute('width') || '',
                  height: this.getAttribute('height') || ''
              };

              if (!content.match(/^<svg/)) {
                  this.innerHTML = '';
                  return;
              }

              this.innerHTML = content;

              let svg = this.children[0];

              Object.keys(attrs).forEach(attr => attrs[attr] && svg.setAttribute(attr, attrs[attr]));
          }).catch(() => {
              this.innerHTML = '';
          });
      }

  });

  let tooltipContainer = null;

  on$1(document.documentElement, 'mouseenter', '[kiss-tooltip]', function(e) {

      e.preventDefault();

      if (!tooltipContainer) {

          tooltipContainer = document.createElement('kiss-tooltip');
          document.body.appendChild(tooltipContainer);

      }

      tooltipContainer.show(this.getAttribute('aria-label'), this, this.getAttribute('kiss-tooltip'));
  });


  customElements.define('kiss-tooltip', class extends HTMLElement {

      connectedCallback() {

      }

      show(text, ele, position = 'bottom') {

          this.innerText = text;
          this.setAttribute('show', 'true');

          if (ele) {
              let rect = ele.getBoundingClientRect(),
              left = null,
              top = null,
              offset = 5;

              switch (position) {
                  case "right":
                      top = (rect.top + rect.height / 2) - this.offsetHeight / 2;
                      left = rect.right + offset;
                      break;

                  case "bottom":
                      top = rect.bottom + offset;
                      left = rect.left;
                      break;
                  default:
                      left = rect.left;
                      break;
              }

              Object.assign(this.style, {
                  top: `${top}px`,
                  left: `${left}px`
              });

              this.$element = ele;

              if (!ele.__tooltiped) {

                  on$1(ele, 'mouseleave', e => {
                      tooltipContainer.hide();
                  });

                  ele.__tooltiped = true;
              }

          }
      }

      hide() {
          this.setAttribute('show', 'false');
      }

      isActive() {
          return this.getAttribute('show') == 'true';
      }
  });

  HTMLElement.prototype.on = function(event, selector, handler) {
      return on$1(this, event, selector, handler)
  };

  HTMLElement.prototype.onMutation = function(cb) {
      return onMutation(cb, this)
  };

  /**
   * JSONStorage - a simple storage helper inspired by the redis api.
   *
   * @author     Artur Heinze
   * @copyright  (c) since 2012 Artur Heinze
   * @license    MIT - http://opensource.org/licenses/MIT
   * @url        https://github.com/aheinze/JSONStorage
   */
  (function (global) {

      function Store(name, adapter) {

          var $this = this;

          this.name = name;
          this.adapter = adapter;
          this.data = adapter.load(name);
          this.data.__ex = this.data.__ex || {}; // expires data container

          // cleanup expires data
          (function () {

              var time = (new Date()).getTime();

              for (var key in $this.data.__ex) {
                  if ($this.data.__ex[key] < time) {
                      delete $this.data[key];
                      delete $this.data.__ex[key];
                  }
              }

          })();
      }

      Store.prototype.store = function () {
          try {
              this.adapter.store(this.name, this.data);
          } catch (e) { }
      };

      Store.prototype.toString = function () {
          return JSON.stringify(this.data);
      };

      Store.prototype.flushdb = function () {

          var $this = this;

          this.data = {};
          this.data.__ex = {};

          setTimeout(function () {
              $this.store();
          }, 0); // async saving!?

          return true;
      };

      Store.prototype.get = function (key, def) {

          if (this.data.__ex[key] && this.data.__ex[key] < (new Date()).getTime()) {
              delete this.data[key];
              delete this.data.__ex[key];
          }

          return this.data[key] !== undefined ? this.data[key] : def;
      };

      Store.prototype.set = function (key, value) {
          this.data[key] = value;
          this.store();
      };

      Store.prototype.setex = function (key, seconds, value) {
          this.set(key, value);
          this.expire(key, seconds);
      };

      Store.prototype.expire = function (key, seconds) {
          if (this.data[key]) this.data.__ex[key] = (new Date()).getTime() + (seconds * 1000);
      };

      Store.prototype.exists = function (key) {
          return this.get(key, "___no___") !== "___no___";
      };

      Store.prototype.del = function () {

          var keys = arguments,
              key = null,
              removed = 0;

          for (var i = 0; i < keys.length; i++) {

              key = keys[i];

              if (this.exists(key)) {
                  delete this.data[key];

                  if (this.data.__ex[key]) {
                      delete this.data.__ex[key];
                  }

                  removed++;
              }
          }

          this.store();

          return removed;
      };

      Store.prototype.type = function (key) {

          key = this.get(key);

          if (typeof (key) === 'object') {
              return JSON.stringify(key)[0] === "[" ? "list" : "set";
          }

          return typeof (key);
      };

      Store.prototype.append = function (key, value) {

          value = String(value);

          var current = String(this.get(key, "")),
              newone = current + value;

          this.set(key, newone);

          return newone.length;
      };

      Store.prototype.incr = function (key, by) {

          by = by || 1;

          var current = Number(this.get(key, 0)),
              newone = current + by;

          this.set(key, newone);

          return newone;
      };

      Store.prototype.decr = function (key, by) {
          by = by || 1;
          return this.incr(key, (by * -1));
      };

      /* List methods */

      Store.prototype.llen = function (key) {
          return this.get(key, []).length;
      };

      Store.prototype.lpush = function (key, value) {
          var list = this.get(key, []),
              ret = list.unshift(value);

          this.set(key, list);
          return ret;
      };

      Store.prototype.rpush = function (key, value) {
          var list = this.get(key, []),
              ret = list.push(value);

          this.set(key, list);
          return ret;
      };

      Store.prototype.lset = function (key, index, value) {
          var list = this.get(key, []);

          if (index < 0) {
              index = list.length - Math.abs(index);
          }

          if (list[index]) {
              list[index] = value;
              this.set(key, list);
              return true;
          }

          return false;
      };

      Store.prototype.lindex = function (key, index) {
          var list = this.get(key, []);

          if (index < 0) {
              index = list.length - Math.abs(index);
          }

          return list[index] ? list[index] : null;
      };

      /* Hash methods */

      Store.prototype.hset = function (key, field, value) {
          var set = this.get(key, {});

          set[field] = value;
          this.set(key, set);
      };

      Store.prototype.hget = function (key, field, def) {
          var set = this.get(key, {});

          return set[field] !== undefined ? set[field] : def;
      };

      Store.prototype.hgetall = function (key) {
          return this.get(key, {});
      };

      Store.prototype.hexists = function (key, field) {
          var set = this.get(key, {});

          return (set[field] !== undefined);
      };

      Store.prototype.hkeys = function (key) {
          var set = this.get(key, {}),
              keys = [],
              name = null;

          for (name in set) {
              if (set.hasOwnProperty(name)) {
                  keys.push(name);
              }
          }

          return keys;
      };

      Store.prototype.hvals = function (key) {
          var set = this.get(key, {}),
              vals = [],
              name = null;

          for (name in set) {
              if (set.hasOwnProperty(name)) {
                  vals.push(keys[name]);
              }
          }

          return vals;
      };

      Store.prototype.hlen = function (key) {
          return this.hkeys(key).length;
      };

      Store.prototype.hdel = function (key) {

          if (!this.exists(key)) return 0;

          var set = this.get(key, {}),
              field = null,
              removed = 0;

          for (var i = 1; i < arguments.length; i++) {

              field = arguments[i];

              if (set[field] !== undefined) {
                  delete set[field];
                  removed++;
              }
          }

          this.set(key, set);

          return removed;
      };

      Store.prototype.hincrby = function (key, field, by) {
          by = by || 1;
          var current = Number(this.hget(key, field, 0)),
              newone = current + by;

          this.hset(key, field, newone);

          return newone;
      };

      Store.prototype.hmget = function (key) {
          var set = this.get(key, {}),
              field = null,
              values = [];

          for (var i = 1; i < arguments.length; i++) {
              field = arguments[i];
              values.push(set[field] !== undefined ? set[field] : null);
          }

          return values;
      };

      Store.prototype.hmset = function (key) {
          var set = this.get(key, {}),
              field = null,
              value = null;

          for (var i = 1; i < arguments.length; i++) {
              field = arguments[i];
              value = arguments[(i + 1)] ? arguments[(i + 1)] : null;
              set[field] = value;
              i = i + 1;
          }

          this.set(key, set);
      };

      var JSONStorage = {

          select: function (name, adapter) {
              return (new Store(name, typeof (adapter) == 'object' ? adapter : (this.adapters[adapter] || this.adapters['memory'])));
          },

          adapters: {

              memory: (function () {
                  var dbs = {};

                  return {
                      load: function (name) {
                          return dbs[name] || {};
                      },
                      store: function (name, data) {
                          dbs[name] = data;
                      }
                  }
              })(),

              local: {
                  load: function (name) {
                      return global.localStorage["jsonstorage." + name] ? JSON.parse(global.localStorage["jsonstorage." + name]) : {};
                  },
                  store: function (name, data) {
                      global.localStorage["jsonstorage." + name] = JSON.stringify(data);
                  }
              },

              session: {
                  load: function (name) {
                      return global.sessionStorage["jsonstorage." + name] ? JSON.parse(global.sessionStorage["jsonstorage." + name]) : {};
                  },
                  store: function (name, data) {
                      global.sessionStorage["jsonstorage." + name] = JSON.stringify(data);
                  }
              }
          }
      };

      // AMD support
      if (typeof define === 'function' && define.amd) {
          define(function () {
              return JSONStorage;
          });
          // CommonJS and Node.js module support.
      } else if (typeof exports !== 'undefined') {
          // Support Node.js specific `module.exports` (which can be a function)
          if (typeof module != 'undefined' && module.exports) {
              exports = module.exports = JSONStorage;
          }
          // But always support CommonJS module 1.1.1 spec (`exports` cannot be a function)
          exports.JSONStorage = JSONStorage;
      } else {
          global.JSONStorage = JSONStorage;
      }

  })(typeof window === 'undefined' ? {} : window);

  /**
   * Translation tool
   */
  (function(global){

          function extend(destination, source) {

              if (!destination || !source) return destination;

              for (var field in source) {
                  if (destination[field] === source[field]) continue;
                  destination[field] = source[field];
              }

              return destination;
          }


          var i18n = {

                  __data : {},

                  register: function(key, data){

                      switch(arguments.length) {
                          case 1:
                              extend(this.__data, key);
                              break;
                          case 2:
                              this.__data[key] = data;
                              break;
                      }
                  },
                  get: function(key){

                      var args = arguments.length ==1 ? [] : Array.prototype.slice.call(arguments, 1);

                      if (!this.__data[key]) {
                          return this.printf(key, args);
                      }

                      return this.printf(String(this.__data[key]), args);
                  },

                  key: function(key) {
                    return this.__data[key] ? this.__data[key] : null;
                  },

                  printf: function() {
                      // From: http://phpjs.org/functions
                        // +   original by: Ash Searle (http://hexmen.com/blog/)
                        // + namespaced by: Michael White (http://getsprink.com)
                        // +    tweaked by: Jack
                        // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
                        // +      input by: Paulo Freitas
                        // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
                        // +      input by: Brett Zamir (http://brett-zamir.me)
                        // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
                        // +   improved by: Dj
                        // +   improved by: Allidylls
                        // *     example 1: sprintf("%01.2f", 123.1);
                        // *     returns 1: 123.10
                        // *     example 2: sprintf("[%10s]", 'monkey');
                        // *     returns 2: '[    monkey]'
                        // *     example 3: sprintf("[%'#10s]", 'monkey');
                        // *     returns 3: '[####monkey]'
                        // *     example 4: sprintf("%d", 123456789012345);
                        // *     returns 4: '123456789012345'
                        var regex = /%%|%(\d+\$)?([-+\'#0 ]*)(\*\d+\$|\*|\d+)?(\.(\*\d+\$|\*|\d+))?([scboxXuideEfFgG])/g;
                        var a = arguments,
                          i = 0,
                          format = a[i++];

                        // pad()
                        var pad = function (str, len, chr, leftJustify) {
                          if (!chr) {
                            chr = ' ';
                          }
                          var padding = (str.length >= len) ? '' : Array(1 + len - str.length >>> 0).join(chr);
                          return leftJustify ? str + padding : padding + str;
                        };

                        // justify()
                        var justify = function (value, prefix, leftJustify, minWidth, zeroPad, customPadChar) {
                          var diff = minWidth - value.length;
                          if (diff > 0) {
                            if (leftJustify || !zeroPad) {
                              value = pad(value, minWidth, customPadChar, leftJustify);
                            } else {
                              value = value.slice(0, prefix.length) + pad('', diff, '0', true) + value.slice(prefix.length);
                            }
                          }
                          return value;
                        };

                        // formatBaseX()
                        var formatBaseX = function (value, base, prefix, leftJustify, minWidth, precision, zeroPad) {
                          // Note: casts negative numbers to positive ones
                          var number = value >>> 0;
                          prefix = prefix && number && {
                            '2': '0b',
                            '8': '0',
                            '16': '0x'
                          }[base] || '';
                          value = prefix + pad(number.toString(base), precision || 0, '0', false);
                          return justify(value, prefix, leftJustify, minWidth, zeroPad);
                        };

                        // formatString()
                        var formatString = function (value, leftJustify, minWidth, precision, zeroPad, customPadChar) {
                          if (precision != null) {
                            value = value.slice(0, precision);
                          }
                          return justify(value, '', leftJustify, minWidth, zeroPad, customPadChar);
                        };

                        // doFormat()
                        var doFormat = function (substring, valueIndex, flags, minWidth, _, precision, type) {
                          var number;
                          var prefix;
                          var method;
                          var textTransform;
                          var value;

                          if (substring === '%%') {
                            return '%';
                          }

                          // parse flags
                          var leftJustify = false,
                            positivePrefix = '',
                            zeroPad = false,
                            prefixBaseX = false,
                            customPadChar = ' ';
                          var flagsl = flags.length;
                          for (var j = 0; flags && j < flagsl; j++) {
                            switch (flags.charAt(j)) {
                            case ' ':
                              positivePrefix = ' ';
                              break;
                            case '+':
                              positivePrefix = '+';
                              break;
                            case '-':
                              leftJustify = true;
                              break;
                            case "'":
                              customPadChar = flags.charAt(j + 1);
                              break;
                            case '0':
                              zeroPad = true;
                              break;
                            case '#':
                              prefixBaseX = true;
                              break;
                            }
                          }

                          // parameters may be null, undefined, empty-string or real valued
                          // we want to ignore null, undefined and empty-string values
                          if (!minWidth) {
                            minWidth = 0;
                          } else if (minWidth === '*') {
                            minWidth = +a[i++];
                          } else if (minWidth.charAt(0) == '*') {
                            minWidth = +a[minWidth.slice(1, -1)];
                          } else {
                            minWidth = +minWidth;
                          }

                          // Note: undocumented perl feature:
                          if (minWidth < 0) {
                            minWidth = -minWidth;
                            leftJustify = true;
                          }

                          if (!isFinite(minWidth)) {
                            throw new Error('sprintf: (minimum-)width must be finite');
                          }

                          if (!precision) {
                            precision = 'fFeE'.indexOf(type) > -1 ? 6 : (type === 'd') ? 0 : undefined;
                          } else if (precision === '*') {
                            precision = +a[i++];
                          } else if (precision.charAt(0) == '*') {
                            precision = +a[precision.slice(1, -1)];
                          } else {
                            precision = +precision;
                          }

                          // grab value using valueIndex if required?
                          value = valueIndex ? a[valueIndex.slice(0, -1)] : a[i++];

                          switch (type) {
                          case 's':
                            return formatString(String(value), leftJustify, minWidth, precision, zeroPad, customPadChar);
                          case 'c':
                            return formatString(String.fromCharCode(+value), leftJustify, minWidth, precision, zeroPad);
                          case 'b':
                            return formatBaseX(value, 2, prefixBaseX, leftJustify, minWidth, precision, zeroPad);
                          case 'o':
                            return formatBaseX(value, 8, prefixBaseX, leftJustify, minWidth, precision, zeroPad);
                          case 'x':
                            return formatBaseX(value, 16, prefixBaseX, leftJustify, minWidth, precision, zeroPad);
                          case 'X':
                            return formatBaseX(value, 16, prefixBaseX, leftJustify, minWidth, precision, zeroPad).toUpperCase();
                          case 'u':
                            return formatBaseX(value, 10, prefixBaseX, leftJustify, minWidth, precision, zeroPad);
                          case 'i':
                          case 'd':
                            number = +value || 0;
                            number = Math.round(number - number % 1); // Plain Math.round doesn't just truncate
                            prefix = number < 0 ? '-' : positivePrefix;
                            value = prefix + pad(String(Math.abs(number)), precision, '0', false);
                            return justify(value, prefix, leftJustify, minWidth, zeroPad);
                          case 'e':
                          case 'E':
                          case 'f': // Should handle locales (as per setlocale)
                          case 'F':
                          case 'g':
                          case 'G':
                            number = +value;
                            prefix = number < 0 ? '-' : positivePrefix;
                            method = ['toExponential', 'toFixed', 'toPrecision']['efg'.indexOf(type.toLowerCase())];
                            textTransform = ['toString', 'toUpperCase']['eEfFgG'.indexOf(type) % 2];
                            value = prefix + Math.abs(number)[method](precision);
                            return justify(value, prefix, leftJustify, minWidth, zeroPad)[textTransform]();
                          default:
                            return substring;
                          }
                        };

                        return format.replace(regex, doFormat);
                  }

          };

          // AMD support
          if (typeof define === 'function' && define.amd) {
              define(function () { return i18n; });

          // CommonJS and Node.js module support.
          } else if (typeof exports !== 'undefined') {
              // Support Node.js specific `module.exports` (which can be a function)
              if (typeof module != 'undefined' && module.exports) {
               exports = module.exports = i18n;
              }
              // But always support CommonJS module 1.1.1 spec (`exports` cannot be a function)
              exports.i18n = i18n;
          } else {
              // browser client
              window.i18n = i18n;
          }

  })();

  let formatSize = function (bytes) {
      if (bytes == 0) { return "0.00 B"; }
      let e = Math.floor(Math.log(bytes) / Math.log(1024));
      return ((bytes / Math.pow(1024, e)).toFixed(2) + ' ' + ' KMGTP'.charAt(e) + 'B').replace('.00', '');
  };

  let formatNumber = function(num, round = 2) {
      return (new Intl.NumberFormat(navigator.language, { style: 'decimal', maximumFractionDigits: round})).format(num);
  };

  let formatDuration = function (time) {
      // Hours, minutes and seconds
      let hrs = ~~(time / 3600);
      let mins = ~~((time % 3600) / 60);
      let secs = ~~time % 60;

      // Output like "1:01" or "4:03:59" or "123:03:59"
      let ret = "";

      if (hrs > 0) {
          ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
      }

      ret += "" + mins + ":" + (secs < 10 ? "0" : "");
      ret += "" + secs;
      return ret;
  };

  let on = function (element, name, delegate, fn) {

      if (!fn) {
          element.addEventListener(name, arguments[2]);
      } else {
          element.addEventListener(name, function (e) {

              let target = e.target;

              while (target !== element) {

                  if (!target) {
                      break;
                  }

                  if (target.matches(delegate)) {
                      return fn.apply(target, arguments);
                  }

                  target = target.parentNode;
              }
          });
      }

      return element;
  };

  let toKebabCase = function(str) {
      return str.replace(/([a-z])([A-Z])/g, '$1-$2').replace(/\s+/g, '-').toLowerCase();
  };

  let copyText = function (text, cb) {
      var inp = document.createElement('textarea');
      document.body.appendChild(inp);
      inp.value = text;
      inp.select();
      try { document.execCommand('copy', false); } catch (e) { }
      inp.remove();
      if (cb) cb();
  };

  let interpolate = function (str, params) {
      const names = Object.keys(params);
      const vals = Object.values(params);
      return new Function(...names, `return \`${str}\`;`)(...vals);
  };

  let uuid = function() {
      return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
          (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
      );
  };

  let truncate = function(text, length, clamp = '...') {
      let content = text || '';
      return content.length > length ? content.slice(0, length) + clamp : content;
  };

  let stripTags = function(input, allowed) {

      // making sure the allowed arg is a string containing only tags in lowercase (<a><b><c>)
      allowed = (((allowed || '') + '').toLowerCase().match(/<[a-z][a-z0-9]*>/g) || []).join('');
      const tags = /<\/?([a-z0-9]*)\b[^>]*>?/gi;
      const commentsAndPhpTags = /<!--[\s\S]*?-->|<\?(?:php)?[\s\S]*?\?>/gi;
      let after = input;

      after = (after.substring(after.length - 1) === '<') ? after.substring(0, after.length - 1) : after;

      while (true) {
          const before = after;
          after = before.replace(commentsAndPhpTags, '').replace(tags, ($0, $1) => {
              return allowed.indexOf('<' + $1.toLowerCase() + '>') > -1 ? $0 : ''
          });
          if (before === after) {
              return after
          }
      }
  };

  var utils = {
      copyText,
      formatSize,
      formatDuration,
      formatNumber,
      interpolate,
      on,
      toKebabCase,
      uuid,
      truncate,
      stripTags
  };

  var ui$1 = {

      notify: function (message, status, timeout) {

          if (timeout !== false && !timeout) {
              timeout = 2500;
          }

          new Noty({
              type: status || 'info',
              text: message,
              timeout: timeout,
              layout: 'topCenter',
              theme: 'app',
              progressBar: true
          }).show();
      },

      block: function (content) {

      },

      unblock: function () {

      },

      offcanvas: function (content, options) {

          let id = Math.random().toString(36).substring(2) + Date.now().toString(36),
              size = '';

          options = options || {};

          switch (options.size) {
              case 'large':
                  size = 'kiss-width-1-3@m kiss-width-1-4@xl';
                  break;
              case 'xlarge':
                  size = 'kiss-width-2-3@m kiss-width-1-2@xl';
                  break;
              case 'xxlarge':
                  size = 'kiss-width-3-4';
                  break;
              case 'screen':
                  size = 'kiss-width-1-1';
                  break;
          }

          document.body.insertAdjacentHTML('beforeend', `
            <kiss-offcanvas id="offcanvas-${id}" flip="${(options.flip && 'true') || ''}">
                <kiss-content class="${size}">
                    ${content}
                </kiss-content>
            </kiss-offcanvas>
        `);

          let offcanvas = document.getElementById(`offcanvas-${id}`);

          offcanvas.__close = offcanvas.close;
          offcanvas.__show = offcanvas.show;

          offcanvas.close = function() {
              offcanvas.__close();
              setTimeout(() => {
                  offcanvas.parentNode.removeChild(offcanvas);
              }, 300);
          };

          offcanvas.show = function() {
              offcanvas.__show();

              setTimeout(() => {
                  let ele = offcanvas.querySelector('[autofocus]');

                  if (ele) {
                      ele.focus();
                  }
              }, 300);
          };

          return offcanvas;
      },


      dialog: function (content, options, dialogtype) {

          let id = Math.random().toString(36).substring(2) + Date.now().toString(36);

          document.body.insertAdjacentHTML('beforeend', `
            <kiss-dialog id="dialog-${id}" size="${(options && options.size) || ''}" type="${dialogtype}">
                <kiss-content class="animated fadeInUp faster">
                    ${content}
                </kiss-content>
            </kiss-dialog>
        `);

          let dialog = document.getElementById(`dialog-${id}`);

          dialog.__close = dialog.close;
          dialog.__show = dialog.show;

          dialog.close = function() {
              dialog.__close();
              dialog.parentNode.removeChild(dialog);
          };

          dialog.show = function() {
              dialog.__show();

              setTimeout(() => {
                  let ele = dialog.querySelector('[autofocus]');

                  if (ele) {
                      ele.focus();
                  }
              }, 300);
          };

          return dialog;
      },

      alert: function (content, options) {

          let dialog = this.dialog(/*html*/`
            <div class="kiss-margin">
                ${content}
            </div>
            <div class="kiss-margin-top kiss-flex kiss-flex-middle">
                <button type="button" class="kiss-button kiss-button-primary kiss-flex-1" kiss-dialog-close>${App.i18n.get('Ok')}</button>
            </div>
        `, options, 'alert');

          dialog.show();
      },

      confirm: function (text, onconfirm, oncancel, options) {

          let dialog = this.dialog(/*html*/`
            <div class="kiss-margin-bottom">
                ${text}
            </div>
            <div class="kiss-margin-top kiss-flex kiss-flex-middle kiss-button-group">
                <button type="button" class="kiss-button-cancel kiss-button kiss-flex-1">${App.i18n.get('Cancel')}</button>
                <button type="button" class="kiss-button-confirm kiss-button kiss-button-primary kiss-flex-1">${App.i18n.get('Ok')}</button>
            </div>
        `, options, 'confirm');

          App.utils.on(dialog, 'click', '.kiss-button-confirm', () => {
              if (onconfirm) onconfirm();
              dialog.close();
          });

          App.utils.on(dialog, 'click', '.kiss-button-cancel', () => {
              if (oncancel) oncancel();
              dialog.close();
          });

          dialog.show();
      },

      prompt: function (text, value = '', clb, options) {
          let dialog = this.dialog(/*html*/`
            <form>
                <div class="kiss-margin kiss-text-bold">${text}</div>
                <div class="kiss-margin-bottom">
                    <input class="kiss-width-1-1 kiss-input" type="text" required>
                </div>
                <div class="kiss-margin-top kiss-flex kiss-flex-middle kiss-button-group">
                    <button type="button" class="kiss-button-cancel kiss-button kiss-flex-1">${App.i18n.get('Cancel')}</button>
                    <button type="submit" class="kiss-button-confirm kiss-button kiss-button-primary kiss-flex-1">${App.i18n.get('Ok')}</button>
                </div>
            </form>
        `, options, 'confirm');

          let input = dialog.querySelector('.kiss-input');

          input.value = value;

          App.utils.on(dialog, 'submit', (e) => {
              e.preventDefault();
              if (clb) clb(input.value);
              dialog.close();
          });

          App.utils.on(dialog, 'click', '.kiss-button-cancel', () => {
              dialog.close();
          });

          dialog.show();

          setTimeout(() => input.focus(), 300);
      }
  };

  var assets = {

      _ress: {},

      require: function (ress, onSuccess, onError) {

          onSuccess = onSuccess || function () { };
          onError = onError || function () { };

          var req = [],
              ress = Array.isArray(ress) ? ress : [ress];

          for (var i = 0, len = ress.length; i < len; i++) {

              if (!ress[i]) continue;

              if (!this._ress[ress[i]]) {

                  if (ress[i].match(/\.js$/i)) {
                      this._ress[ress[i]] = this.getScript(ress[i]);
                  } else if (ress[i].match(/\.(jpg|jpeg|gif|png)$/i)) {
                      this._ress[ress[i]] = this.getImage(ress[i]);
                  } else if (ress[i].match(/\.css$/i)) {
                      this._ress[ress[i]] = this.getCss(ress[i]);
                  } else {
                      continue;
                  }
              }

              req.push(this._ress[ress[i]]);
          }

          return Promise.all(req).then(onSuccess).catch(function (e) {
              onError.apply(self, [e]);
          });
      },

      getScript: function (url) {

          return new Promise(function (resolve, reject) {

              var script = document.createElement('script');

              script.async = true;

              script.onload = function () {
                  resolve(url);
              };

              script.onerror = function () {
                  reject(url);
              };

              script.src = (url.match(/^(\/\/|http)/) ? url : App.base(url)) + '?v=' + App.version;

              document.getElementsByTagName('head')[0].appendChild(script);

          });
      },

      getCss: function (url) {

          return new Promise(function (resolve, reject) {

              var link = document.createElement('link');
              link.type = 'text/css';
              link.rel = 'stylesheet';
              link.href = (url.match(/^(\/\/|http)/) ? url : App.base(url)) + '?v=' + App.version;

              document.getElementsByTagName('head')[0].appendChild(link);

              var img = document.createElement('img');
              img.onerror = function () {
                  resolve(url);
              };
              img.src = link.href + '?v=' + App.version;
          });
      },

      getImage: function (url) {

          return new Promise(function (resolve, reject) {

              var img = document.createElement('img');

              img.onload = function () { resolve(url); };
              img.onerror = function () { reject(url); };

              img.src = (url.match(/^(\/\/|http)/) ? url : App.base(url)) + '?v=' + App.version;
          });
      }
  };

  var ui = {

      offcanvas(component, data, callbacks, options) {

          let offcanvas;

          data = data || {};
          callbacks = callbacks || {};

          let def = {

              $viewSetup(app) {

                  app.mixin({
                      methods: {
                          $close() {

                              if (this.$el.closest) {
                                  this.$el.closest('kiss-offcanvas').close();
                              } else {
                                  this.$el.parentNode.closest('kiss-offcanvas').close();
                              }
                          },
                          $call(name, ...args) {
                              if (callbacks[name]) {
                                  callbacks[name](...args);
                              }
                          }
                      }
                  });
              },

              data() {
                  return  {
                      data
                  }
              },

              components: {
                  'vue-offcanvas-content': component
              }
          };

          offcanvas = App.ui.offcanvas(/*html*/`
            <div class="vue-offcanvas">
                <vue-offcanvas-content v-bind="data"></vue-offcanvas-content>
            </div>
        `, options || {});

          offcanvas.$view = offcanvas.querySelector('.vue-offcanvas');

          VueView.compile(offcanvas.$view, def);
          setTimeout(() => offcanvas.show());

          return offcanvas;
      },

      modal(url, data, callbacks, options) {

          data = data || {};
          callbacks = callbacks || {};

          let def = {

              $viewSetup(app) {

                  app.mixin({
                      methods: {
                          $close() {

                              if (this.$el.closest) {
                                  this.$el.closest('kiss-dialog').close();
                              } else {
                                  this.$el.parentNode.closest('kiss-dialog').close();
                              }
                          },
                          $call(name, ...args) {
                              if (callbacks[name]) {
                                  callbacks[name](...args);
                              }
                          }
                      }
                  });
              },

              data() {
                  return  {
                      data
                  }
              },

              components: {
                  'vue-dialog-content':  url
              }
          };

          let dialog = App.ui.dialog(/*html*/`
            <div class="vue-modal">
                <vue-dialog-content v-bind="data"></vue-dialog-content>
            </div>
        `, options || {});

          dialog.$view = dialog.querySelector('.vue-modal');

          VueView.compile(dialog.$view, def);
          dialog.show();

          return dialog;
      }
  };

  /**
   * Dynamic vue template (Vue 3.x)
   */
  (function() {

      let VueView = {

          ready: new Promise(function(resolve) {
              document.addEventListener('DOMContentLoaded', e => resolve());
          }),

          components: {},

          component(name, def) {
              this.components[name] = def;
          },

          compile(el, def) {
              this.ready.then(() => {
                  this._compile(el, def);
              });
          },

          _compile: async function(el, definition) {

              let script = definition ? null : el.querySelector('script');
              let template = definition ? null : el.querySelector('template');
              let def = definition || {}, app;

              if (script) {
                  let module = await import(`data:text/javascript;charset=utf-8,${encodeURIComponent(script.innerHTML)}`);
                  def = module.default;
                  script.parentNode.removeChild(script);
              }

              if (template) {
                  def.template = template.innerHTML;
                  template.parentNode.removeChild(template);
              }

              def = Object.assign({}, def || {});

              def.components = def.components || {};

              Object.keys(def.components).forEach(name => {

                  if (typeof(def.components[name]) == 'string') {
                      def.components[name] = (function(url) {
                          return Vue.defineAsyncComponent(() => App.utils.import(url));
                      })(def.components[name]);
                  }
              });

              app = Vue.createApp(def);

              Object.keys(VueView.components).forEach(name => {

                  if (typeof(VueView.components[name]) == 'string') {
                      app.component(name, Vue.defineAsyncComponent(() => App.utils.import(VueView.components[name])));
                  } else {
                      app.component(name, VueView.components[name]);
                  }
              });

              app.mixin({
                  data() {
                      return {
                          App: window.App
                      }
                  },

                  methods: {
                      t(key) {
                          return App.i18n.get(key);
                      },

                      $route(url) {
                          return App.route(url);
                      },

                      $base(url) {
                          return App.base(url);
                      },

                      $request(url, data) {
                          return App.request(url, data);
                      }
                  }
              });

              if (def.$routes) {

                  const router = VueRouter.createRouter({
                      history: VueRouter.createWebHashHistory(),
                      routes: def.$routes()
                  });

                  app.use(router);
              }

              if (def.$viewSetup) {
                  def.$viewSetup(app);
              }

              app.mount(el);
              el.setAttribute('init', true);

              return app;
          }
      };

      class VueElement extends HTMLElement {
          connectedCallback() {
              VueView.compile(this);
          }
      }

      customElements.define('vue-view', VueElement);

      VueView.ui = ui;

      window.VueView = VueView;

  })();

  customElements.define('app-avatar', class extends HTMLElement {

      static get observedAttributes() {
          return ['name', 'size', 'color'];
      }

      constructor() {
          super();
      }

      connectedCallback() {
          setTimeout(() => this.draw(), 0);
      }

      attributeChangedCallback(name, oldValue, newValue) {
          this.draw();
      }

      disconnectedCallback() {

      }

      draw() {

          this.innerHTML = '<canvas></canvas>';

          let name = this.getAttribute('name') || '';
          let size = this.getAttribute('size') || 60;
          let color = this.getAttribute('color') || null;

          let canvas = this.querySelector('canvas');

          let colours = [
              "#1abc9c", "#2ecc71", "#3498db", "#9b59b6", "#34495e", "#16a085", "#27ae60", "#2980b9", "#8e44ad", "#2c3e50",
              "#f1c40f", "#e67e22", "#e74c3c", "#ecf0f1", "#95a5a6", "#f39c12", "#d35400", "#c0392b", "#bdc3c7", "#7f8c8d"
          ],

              nameSplit = String(name).toUpperCase().split(' '),
              initials, charIndex, colourIndex, context, dataURI;


          if (nameSplit.length == 1) {
              initials = nameSplit[0] ? nameSplit[0].charAt(0) : '?';
          } else {
              initials = nameSplit[0].charAt(0) + nameSplit[1].charAt(0);
          }

          charIndex = (initials == '?' ? 72 : initials.charCodeAt(0)) - 64;
          colourIndex = charIndex % 20;
          canvas.width = size;
          canvas.height = size;
          context = canvas.getContext("2d");

          context.fillStyle = color ? color : colours[colourIndex - 1];
          context.fillRect(0, 0, canvas.width, canvas.height);
          context.font = Math.round(canvas.width / 2) + "px Arial";
          context.textAlign = "center";
          context.fillStyle = "#FFF";
          context.fillText(initials, size / 2, size / 1.5);

          dataURI = canvas.toDataURL();

          this.canvas = canvas;

          return dataURI;
      }
  });

  customElements.define('app-actionbar', class extends HTMLElement {

      constructor() {
          super();
      }

      connectedCallback() {

          let idle = setInterval(() => {

              if (this.offsetHeight) {
                  clearInterval(idle);
                  this.update();
              }
          }, 10);

          // just to be sure
          window.addEventListener("load", evt => {
              this.update();
          });
      }

      disconnectedCallback() {
          document.body.style.paddingBottom = '';
      }

      update() {

          if (this.getAttribute('space') !== 'false') {
              document.body.style.paddingBottom = `calc(2rem + ${this.offsetHeight}px)`;
          }
      }
  });

  const fn = e => {

      let element = e.target, closest = e.target.matches('app-fieldcontainer') ? e.target : null;

      while ((element = element.parentElement)) {
          if (element.matches('app-fieldcontainer')) {
              closest = element;
          }
      }

      let containers = document.querySelectorAll('app-fieldcontainer');

      containers.forEach(container => {

          if (container !== closest) {
              container.removeAttribute('active');
          }
      });
  };


  document.addEventListener('click', fn);
  document.addEventListener('focusin', fn);

  customElements.define('app-fieldcontainer', class extends HTMLElement {

      constructor() {
          super();
      }

      connectedCallback() {

          this.addEventListener('click', e => this.setAttribute('active','true'));
          this.addEventListener('focusin', e => this.setAttribute('active','true'));
      }

      disconnectedCallback() {

      }
  });

  customElements.define('app-loader', class extends HTMLElement {

      static get observedAttributes() {
          return ['label', 'mode']; 
      }

      constructor() {
          super();
      }

      connectedCallback() {
          this.render();
      }

      attributeChangedCallback(oldvalue, newvalue) {
          if (oldvalue != newvalue)this.render();
      }

      render() {

          let template;
          let mode = this.getAttribute('mode');

          switch (mode) {
              case 'dots':
                  template = '<div></div><div></div><div></div><div></div>';
                  break;
              default:

                  if (mode !== 'orbit') {
                      this.setAttribute('mode', 'orbit');
                  }

                  template = '<div><div></div><div></div><div></div></div>';
          }

          this.innerHTML = template;
      }
  });

  customElements.define('app-loader-cover', class extends HTMLElement {

      static get observedAttributes() {
          return ['label', 'mode']; 
      }

      constructor() {
          super();
      }

      connectedCallback() {
          this.innerHTML = `
        <div>
            <app-loader></app-loader>
            <div class="app-loader-cover-label"></div> 
        </div>
        `;

          this.label = this.querySelector('.app-loader-cover-label');
          this.loader = this.querySelector('app-loader');

          this.render();
      }

      attributeChangedCallback() {
          this.render();
      }

      render() {

          this.label.innerText = this.getAttribute('label') || '';
          this.loader.setAttribute('mode', this.getAttribute('mode'));
      }
  });

  customElements.define('app-scrollcontainer', class extends HTMLElement {

      static get observedAttributes() {
          return ['boundary'];
      }

      constructor() {
          super();
      }

      connectedCallback() {

          document.addEventListener('DOMContentLoaded', () => requestAnimationFrame(() => {
              setTimeout(() => this.expand());
          }));

          window.addEventListener('resize',  () => requestAnimationFrame(() => {
              setTimeout(() => this.expand());
          }));

          window.addEventListener('load',  () => requestAnimationFrame(() => {
              setTimeout(() => this.expand());
          }));
      }

      attributeChangedCallback(oldvalue, newvalue) {
          if (oldvalue != newvalue)this.expand();
      }

      expand() {

          this.style.maxHeight = '';

          let rect = this.getBoundingClientRect();
          let mode = this.getAttribute('mode');

          if (rect.top > window.innerHeight) {
              return;
          }

          let maxHeight = window.innerHeight - rect.top;

          switch (mode) {
              case 'boundary':

                  let boundary = this.getAttribute('boundary');

                  if (boundary) {
                      boundary = document.querySelector(boundary);

                      if (boundary) {
                          maxHeight = boundary.getBoundingClientRect().top - rect.top;
                      }
                  }

                  if (maxHeight > window.innerHeight) {
                      return;
                  }

                  break;
          }


          this.style.maxHeight = `${maxHeight}px`;
      }
  });

  customElements.define('app-tabs', class extends HTMLElement {

      static get observedAttributes() {
          return [];
      }

      constructor() {
          super();
      }

      connectedCallback() {

          if (this.getAttribute('static') == 'true') {
              return;
          }

          this.activeIndex = Number(this.getAttribute('index') || 0);

          this.nav = document.createElement("ul");

          this.nav.classList.add('app-tabs-nav');
          this.prepend(this.nav);

          this.render();

          this.addEventListener('click', e => {
              if (!e.target.classList.contains('app-tabs-nav-link')) return;
              this.setIndex(e.target.getAttribute('index'));
              e.preventDefault();
          });
      }

      attributeChangedCallback(oldvalue, newvalue) {
          if (oldvalue != newvalue) this.render();
      }

      setIndex(index) {

          this.activeIndex = Number(index);

          this.tabs.forEach((tab, idx) => {

              this.nav.children[idx].setAttribute('active', this.activeIndex == idx ? 'true' : 'false');
              tab.setAttribute('active', this.activeIndex == idx ? 'true' : 'false');
          });
      }

      render() {

          if (this.getAttribute('static') == 'true') {
              return;
          }

          this.tabs = [];

          this.nav.innerHTML = '';

          let item;

          for (let i = 0; i < this.children.length; i++) {

              if (this.children[i].tagName.toLowerCase() == 'tab') {

                  item = document.createElement("li");
                  item.innerHTML = `<a class="app-tabs-nav-link" index="${this.tabs.length}">${this.children[i].getAttribute('caption') || 'Tab'}</a>`;
                  this.nav.append(item);

                  this.tabs.push(this.children[i]);

                  this.children[i].setAttribute('active', 'false');
                  item.setAttribute('active', 'false');
              }
          }

          this.setIndex(this.activeIndex);
      }
  });

  // General
  VueView.component('vue-draggable', Vue.defineAsyncComponent(() => {
      return new Promise(resolve => {
          App.assets.require(['app:assets/vendor/Sortable.js']).then(() => {
              App.assets.require(['app:assets/vendor/vue/components/vue-draggable.js']).then(() => resolve(window.vuedraggable));
          });
      })
  }));

  // Fields
  VueView.component('field-boolean', 'app:assets/vue-components/field-boolean.js');
  VueView.component('field-code', 'app:assets/vue-components/field-code.js');
  VueView.component('field-color', 'app:assets/vue-components/field-color.js');
  VueView.component('field-date', 'app:assets/vue-components/field-date.js');
  VueView.component('field-datetime', 'app:assets/vue-components/field-datetime.js');
  VueView.component('field-nav', 'app:assets/vue-components/field-nav.js');
  VueView.component('field-number', 'app:assets/vue-components/field-number.js');
  VueView.component('field-object', 'app:assets/vue-components/field-object.js');
  VueView.component('field-select', 'app:assets/vue-components/field-select.js');
  VueView.component('field-set', 'app:assets/vue-components/field-set.js');
  VueView.component('field-text', 'app:assets/vue-components/field-text.js');
  VueView.component('field-time', 'app:assets/vue-components/field-time.js');
  VueView.component('field-wysiwyg', 'app:assets/vue-components/field-wysiwyg.js');

  let html = document.documentElement;
  let App$1 = {

      base_url: (html.getAttribute("data-base") || '').replace(/\/$/, ''),
      version: (html.getAttribute("data-version") || '0.0.1'),

      _events: {},
      _paths: {},

      base: function (url) {

          let path = url.match(/^(\w+)\:/);

          if (path && this._paths[path[1]]) {
              return url.replace(path[0], this._paths[path[1]]);
          }

          return this.base_url + url;
      },

      route: function (url) {
          return this.base_url + url;
      },

      reroute: function (url) {
          location.href = url.match(/^http/) ? url : this.route(url);
      },

      request: function (url, data, type) {

          url = this.route(url);
          type = type || 'json';

          return new Promise(function (fulfill, reject) {

              var xhr = new XMLHttpRequest();

              xhr.open('post', url, true);
              xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');

              url += (url.indexOf('?') !== -1 ? '&' : '?') + 'nc=' + Math.random().toString(36).substr(2);

              if (data) {

                  if (typeof (data) === 'object' && data instanceof HTMLFormElement) {
                      data = new FormData(data);
                  } else if (typeof (data) === 'object' && data instanceof FormData) ; else if (typeof (data) === 'object') {

                      xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
                      data = JSON.stringify(data || {});
                  }
              }

              xhr.onloadend = function () {

                  var resdata = xhr.responseText;

                  if (type == 'json') {
                      try {
                          resdata = JSON.parse(xhr.responseText);
                      } catch (e) {
                          resdata = null;
                      }
                  }

                  if (this.status == 200) {
                      fulfill(resdata, xhr);
                  } else {
                      reject(resdata, xhr);
                  }
              };

              // send the collected data as JSON
              xhr.send(data);
          });
      },

      on: function (name, fn) {
          if (!this._events[name]) this._events[name] = [];
          this._events[name].push(fn);
      },

      off: function (name, fn) {
          if (!this._events[name]) return;

          if (!fn) {
              this._events[name] = [];
          } else {

              for (var i = 0; i < this._events[name].length; i++) {
                  if (this._events[name][i] === fn) {
                      this._events[name].splice(i, 1);
                      break;
                  }
              }
          }
      },

      trigger: function (name, params) {

          if (!this._events[name]) return;

          var event = { "name": name, "params": params };

          for (var i = 0; i < this._events[name].length; i++) {
              this._events[name][i].apply(App$1, [event]);
          }
      },

      deferred: function () {

          var resolve, fail;

          var d = new Promise(function (fullfill, reject) {
              resolve = fullfill;
              fail = reject;
          });

          d.resolve = function (data) {
              resolve(data);
          };

          d.reject = function (data) {
              fail(data);
          };

          return d;
      }
  };

  // general services
  App$1.session = window.JSONStorage ? window.JSONStorage.select("app", "session") : null;
  App$1.storage = window.JSONStorage ? window.JSONStorage.select("app", "local") : null;
  App$1.memory = window.JSONStorage ? window.JSONStorage.select("app", "memory") : null;
  App$1.i18n = window.i18n || null;
  App$1.assets = assets;
  App$1.ui = ui$1;
  App$1.utils = utils;

  // custom utils
  App$1.utils.import = function(uri) {
      return import(App$1.base(uri)+'?v='+App$1.version);
  };

  window.App = App$1;

}());
