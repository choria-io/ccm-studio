(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function s(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=s(i);fetch(i.href,o)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const mi=globalThis,Ln=mi.ShadowRoot&&(mi.ShadyCSS===void 0||mi.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,jn=Symbol(),yl=new WeakMap;let Vc=class{constructor(t,s,r){if(this._$cssResult$=!0,r!==jn)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=s}get styleSheet(){let t=this.o;const s=this.t;if(Ln&&t===void 0){const r=s!==void 0&&s.length===1;r&&(t=yl.get(s)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&yl.set(s,t))}return t}toString(){return this.cssText}};const ah=e=>new Vc(typeof e=="string"?e:e+"",void 0,jn),ee=(e,...t)=>{const s=e.length===1?e[0]:t.reduce((r,i,o)=>r+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[o+1],e[0]);return new Vc(s,e,jn)},lh=(e,t)=>{if(Ln)e.adoptedStyleSheets=t.map(s=>s instanceof CSSStyleSheet?s:s.styleSheet);else for(const s of t){const r=document.createElement("style"),i=mi.litNonce;i!==void 0&&r.setAttribute("nonce",i),r.textContent=s.cssText,e.appendChild(r)}},bl=Ln?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let s="";for(const r of t.cssRules)s+=r.cssText;return ah(s)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:ch,defineProperty:dh,getOwnPropertyDescriptor:uh,getOwnPropertyNames:hh,getOwnPropertySymbols:ph,getPrototypeOf:fh}=Object,qt=globalThis,vl=qt.trustedTypes,mh=vl?vl.emptyScript:"",Lo=qt.reactiveElementPolyfillSupport,_r=(e,t)=>e,Ms={toAttribute(e,t){switch(t){case Boolean:e=e?mh:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let s=e;switch(t){case Boolean:s=e!==null;break;case Number:s=e===null?null:Number(e);break;case Object:case Array:try{s=JSON.parse(e)}catch{s=null}}return s}},Mn=(e,t)=>!ch(e,t),wl={attribute:!0,type:String,converter:Ms,reflect:!1,useDefault:!1,hasChanged:Mn};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),qt.litPropertyMetadata??(qt.litPropertyMetadata=new WeakMap);let Cs=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,s=wl){if(s.state&&(s.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((s=Object.create(s)).wrapped=!0),this.elementProperties.set(t,s),!s.noAccessor){const r=Symbol(),i=this.getPropertyDescriptor(t,r,s);i!==void 0&&dh(this.prototype,t,i)}}static getPropertyDescriptor(t,s,r){const{get:i,set:o}=uh(this.prototype,t)??{get(){return this[s]},set(n){this[s]=n}};return{get:i,set(n){const a=i==null?void 0:i.call(this);o==null||o.call(this,n),this.requestUpdate(t,a,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??wl}static _$Ei(){if(this.hasOwnProperty(_r("elementProperties")))return;const t=fh(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(_r("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(_r("properties"))){const s=this.properties,r=[...hh(s),...ph(s)];for(const i of r)this.createProperty(i,s[i])}const t=this[Symbol.metadata];if(t!==null){const s=litPropertyMetadata.get(t);if(s!==void 0)for(const[r,i]of s)this.elementProperties.set(r,i)}this._$Eh=new Map;for(const[s,r]of this.elementProperties){const i=this._$Eu(s,r);i!==void 0&&this._$Eh.set(i,s)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const s=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const i of r)s.unshift(bl(i))}else t!==void 0&&s.push(bl(t));return s}static _$Eu(t,s){const r=s.attribute;return r===!1?void 0:typeof r=="string"?r:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(s=>this.enableUpdating=s),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(s=>s(this))}addController(t){var s;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((s=t.hostConnected)==null||s.call(t))}removeController(t){var s;(s=this._$EO)==null||s.delete(t)}_$E_(){const t=new Map,s=this.constructor.elementProperties;for(const r of s.keys())this.hasOwnProperty(r)&&(t.set(r,this[r]),delete this[r]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return lh(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(s=>{var r;return(r=s.hostConnected)==null?void 0:r.call(s)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(s=>{var r;return(r=s.hostDisconnected)==null?void 0:r.call(s)})}attributeChangedCallback(t,s,r){this._$AK(t,r)}_$ET(t,s){var o;const r=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,r);if(i!==void 0&&r.reflect===!0){const n=(((o=r.converter)==null?void 0:o.toAttribute)!==void 0?r.converter:Ms).toAttribute(s,r.type);this._$Em=t,n==null?this.removeAttribute(i):this.setAttribute(i,n),this._$Em=null}}_$AK(t,s){var o,n;const r=this.constructor,i=r._$Eh.get(t);if(i!==void 0&&this._$Em!==i){const a=r.getPropertyOptions(i),l=typeof a.converter=="function"?{fromAttribute:a.converter}:((o=a.converter)==null?void 0:o.fromAttribute)!==void 0?a.converter:Ms;this._$Em=i;const c=l.fromAttribute(s,a.type);this[i]=c??((n=this._$Ej)==null?void 0:n.get(i))??c,this._$Em=null}}requestUpdate(t,s,r,i=!1,o){var n;if(t!==void 0){const a=this.constructor;if(i===!1&&(o=this[t]),r??(r=a.getPropertyOptions(t)),!((r.hasChanged??Mn)(o,s)||r.useDefault&&r.reflect&&o===((n=this._$Ej)==null?void 0:n.get(t))&&!this.hasAttribute(a._$Eu(t,r))))return;this.C(t,s,r)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,s,{useDefault:r,reflect:i,wrapped:o},n){r&&!(this._$Ej??(this._$Ej=new Map)).has(t)&&(this._$Ej.set(t,n??s??this[t]),o!==!0||n!==void 0)||(this._$AL.has(t)||(this.hasUpdated||r||(s=void 0),this._$AL.set(t,s)),i===!0&&this._$Em!==t&&(this._$Eq??(this._$Eq=new Set)).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(s){Promise.reject(s)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var r;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[o,n]of this._$Ep)this[o]=n;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[o,n]of i){const{wrapped:a}=n,l=this[o];a!==!0||this._$AL.has(o)||l===void 0||this.C(o,void 0,n,l)}}let t=!1;const s=this._$AL;try{t=this.shouldUpdate(s),t?(this.willUpdate(s),(r=this._$EO)==null||r.forEach(i=>{var o;return(o=i.hostUpdate)==null?void 0:o.call(i)}),this.update(s)):this._$EM()}catch(i){throw t=!1,this._$EM(),i}t&&this._$AE(s)}willUpdate(t){}_$AE(t){var s;(s=this._$EO)==null||s.forEach(r=>{var i;return(i=r.hostUpdated)==null?void 0:i.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&(this._$Eq=this._$Eq.forEach(s=>this._$ET(s,this[s]))),this._$EM()}updated(t){}firstUpdated(t){}};Cs.elementStyles=[],Cs.shadowRootOptions={mode:"open"},Cs[_r("elementProperties")]=new Map,Cs[_r("finalized")]=new Map,Lo==null||Lo({ReactiveElement:Cs}),(qt.reactiveElementVersions??(qt.reactiveElementVersions=[])).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const $r=globalThis,_l=e=>e,Ci=$r.trustedTypes,$l=Ci?Ci.createPolicy("lit-html",{createHTML:e=>e}):void 0,Bc="$lit$",Vt=`lit$${Math.random().toFixed(9).slice(2)}$`,qc="?"+Vt,gh=`<${qc}>`,ds=document,Tr=()=>ds.createComment(""),Nr=e=>e===null||typeof e!="object"&&typeof e!="function",Fn=Array.isArray,yh=e=>Fn(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",jo=`[ 	
\f\r]`,ar=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,kl=/-->/g,xl=/>/g,Xt=RegExp(`>|${jo}(?:([^\\s"'>=/]+)(${jo}*=${jo}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Sl=/'/g,El=/"/g,Uc=/^(?:script|style|textarea|title)$/i,bh=e=>(t,...s)=>({_$litType$:e,strings:t,values:s}),A=bh(1),tt=Symbol.for("lit-noChange"),me=Symbol.for("lit-nothing"),Cl=new WeakMap,ns=ds.createTreeWalker(ds,129);function Hc(e,t){if(!Fn(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return $l!==void 0?$l.createHTML(t):t}const vh=(e,t)=>{const s=e.length-1,r=[];let i,o=t===2?"<svg>":t===3?"<math>":"",n=ar;for(let a=0;a<s;a++){const l=e[a];let c,u,d=-1,p=0;for(;p<l.length&&(n.lastIndex=p,u=n.exec(l),u!==null);)p=n.lastIndex,n===ar?u[1]==="!--"?n=kl:u[1]!==void 0?n=xl:u[2]!==void 0?(Uc.test(u[2])&&(i=RegExp("</"+u[2],"g")),n=Xt):u[3]!==void 0&&(n=Xt):n===Xt?u[0]===">"?(n=i??ar,d=-1):u[1]===void 0?d=-2:(d=n.lastIndex-u[2].length,c=u[1],n=u[3]===void 0?Xt:u[3]==='"'?El:Sl):n===El||n===Sl?n=Xt:n===kl||n===xl?n=ar:(n=Xt,i=void 0);const h=n===Xt&&e[a+1].startsWith("/>")?" ":"";o+=n===ar?l+gh:d>=0?(r.push(c),l.slice(0,d)+Bc+l.slice(d)+Vt+h):l+Vt+(d===-2?a:h)}return[Hc(e,o+(e[s]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),r]};class Ir{constructor({strings:t,_$litType$:s},r){let i;this.parts=[];let o=0,n=0;const a=t.length-1,l=this.parts,[c,u]=vh(t,s);if(this.el=Ir.createElement(c,r),ns.currentNode=this.el.content,s===2||s===3){const d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(i=ns.nextNode())!==null&&l.length<a;){if(i.nodeType===1){if(i.hasAttributes())for(const d of i.getAttributeNames())if(d.endsWith(Bc)){const p=u[n++],h=i.getAttribute(d).split(Vt),v=/([.?@])?(.*)/.exec(p);l.push({type:1,index:o,name:v[2],strings:h,ctor:v[1]==="."?_h:v[1]==="?"?$h:v[1]==="@"?kh:Bi}),i.removeAttribute(d)}else d.startsWith(Vt)&&(l.push({type:6,index:o}),i.removeAttribute(d));if(Uc.test(i.tagName)){const d=i.textContent.split(Vt),p=d.length-1;if(p>0){i.textContent=Ci?Ci.emptyScript:"";for(let h=0;h<p;h++)i.append(d[h],Tr()),ns.nextNode(),l.push({type:2,index:++o});i.append(d[p],Tr())}}}else if(i.nodeType===8)if(i.data===qc)l.push({type:2,index:o});else{let d=-1;for(;(d=i.data.indexOf(Vt,d+1))!==-1;)l.push({type:7,index:o}),d+=Vt.length-1}o++}}static createElement(t,s){const r=ds.createElement("template");return r.innerHTML=t,r}}function Fs(e,t,s=e,r){var n,a;if(t===tt)return t;let i=r!==void 0?(n=s._$Co)==null?void 0:n[r]:s._$Cl;const o=Nr(t)?void 0:t._$litDirective$;return(i==null?void 0:i.constructor)!==o&&((a=i==null?void 0:i._$AO)==null||a.call(i,!1),o===void 0?i=void 0:(i=new o(e),i._$AT(e,s,r)),r!==void 0?(s._$Co??(s._$Co=[]))[r]=i:s._$Cl=i),i!==void 0&&(t=Fs(e,i._$AS(e,t.values),i,r)),t}class wh{constructor(t,s){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=s}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:s},parts:r}=this._$AD,i=((t==null?void 0:t.creationScope)??ds).importNode(s,!0);ns.currentNode=i;let o=ns.nextNode(),n=0,a=0,l=r[0];for(;l!==void 0;){if(n===l.index){let c;l.type===2?c=new Vr(o,o.nextSibling,this,t):l.type===1?c=new l.ctor(o,l.name,l.strings,this,t):l.type===6&&(c=new xh(o,this,t)),this._$AV.push(c),l=r[++a]}n!==(l==null?void 0:l.index)&&(o=ns.nextNode(),n++)}return ns.currentNode=ds,i}p(t){let s=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(t,r,s),s+=r.strings.length-2):r._$AI(t[s])),s++}}class Vr{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,s,r,i){this.type=2,this._$AH=me,this._$AN=void 0,this._$AA=t,this._$AB=s,this._$AM=r,this.options=i,this._$Cv=(i==null?void 0:i.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const s=this._$AM;return s!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=s.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,s=this){t=Fs(this,t,s),Nr(t)?t===me||t==null||t===""?(this._$AH!==me&&this._$AR(),this._$AH=me):t!==this._$AH&&t!==tt&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):yh(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==me&&Nr(this._$AH)?this._$AA.nextSibling.data=t:this.T(ds.createTextNode(t)),this._$AH=t}$(t){var o;const{values:s,_$litType$:r}=t,i=typeof r=="number"?this._$AC(t):(r.el===void 0&&(r.el=Ir.createElement(Hc(r.h,r.h[0]),this.options)),r);if(((o=this._$AH)==null?void 0:o._$AD)===i)this._$AH.p(s);else{const n=new wh(i,this),a=n.u(this.options);n.p(s),this.T(a),this._$AH=n}}_$AC(t){let s=Cl.get(t.strings);return s===void 0&&Cl.set(t.strings,s=new Ir(t)),s}k(t){Fn(this._$AH)||(this._$AH=[],this._$AR());const s=this._$AH;let r,i=0;for(const o of t)i===s.length?s.push(r=new Vr(this.O(Tr()),this.O(Tr()),this,this.options)):r=s[i],r._$AI(o),i++;i<s.length&&(this._$AR(r&&r._$AB.nextSibling,i),s.length=i)}_$AR(t=this._$AA.nextSibling,s){var r;for((r=this._$AP)==null?void 0:r.call(this,!1,!0,s);t!==this._$AB;){const i=_l(t).nextSibling;_l(t).remove(),t=i}}setConnected(t){var s;this._$AM===void 0&&(this._$Cv=t,(s=this._$AP)==null||s.call(this,t))}}class Bi{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,s,r,i,o){this.type=1,this._$AH=me,this._$AN=void 0,this.element=t,this.name=s,this._$AM=i,this.options=o,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=me}_$AI(t,s=this,r,i){const o=this.strings;let n=!1;if(o===void 0)t=Fs(this,t,s,0),n=!Nr(t)||t!==this._$AH&&t!==tt,n&&(this._$AH=t);else{const a=t;let l,c;for(t=o[0],l=0;l<o.length-1;l++)c=Fs(this,a[r+l],s,l),c===tt&&(c=this._$AH[l]),n||(n=!Nr(c)||c!==this._$AH[l]),c===me?t=me:t!==me&&(t+=(c??"")+o[l+1]),this._$AH[l]=c}n&&!i&&this.j(t)}j(t){t===me?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class _h extends Bi{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===me?void 0:t}}class $h extends Bi{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==me)}}class kh extends Bi{constructor(t,s,r,i,o){super(t,s,r,i,o),this.type=5}_$AI(t,s=this){if((t=Fs(this,t,s,0)??me)===tt)return;const r=this._$AH,i=t===me&&r!==me||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,o=t!==me&&(r===me||i);i&&this.element.removeEventListener(this.name,this,r),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var s;typeof this._$AH=="function"?this._$AH.call(((s=this.options)==null?void 0:s.host)??this.element,t):this._$AH.handleEvent(t)}}class xh{constructor(t,s,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=s,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){Fs(this,t)}}const Mo=$r.litHtmlPolyfillSupport;Mo==null||Mo(Ir,Vr),($r.litHtmlVersions??($r.litHtmlVersions=[])).push("3.3.2");const Sh=(e,t,s)=>{const r=(s==null?void 0:s.renderBefore)??t;let i=r._$litPart$;if(i===void 0){const o=(s==null?void 0:s.renderBefore)??null;r._$litPart$=i=new Vr(t.insertBefore(Tr(),o),o,void 0,s??{})}return i._$AI(e),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const cs=globalThis;let Me=class extends Cs{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var s;const t=super.createRenderRoot();return(s=this.renderOptions).renderBefore??(s.renderBefore=t.firstChild),t}update(t){const s=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Sh(s,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return tt}};var Fc;Me._$litElement$=!0,Me.finalized=!0,(Fc=cs.litElementHydrateSupport)==null||Fc.call(cs,{LitElement:Me});const Fo=cs.litElementPolyfillSupport;Fo==null||Fo({LitElement:Me});(cs.litElementVersions??(cs.litElementVersions=[])).push("4.2.2");var Eh=ee`
  :host {
    --track-width: 2px;
    --track-color: rgb(128 128 128 / 25%);
    --indicator-color: var(--sl-color-primary-600);
    --speed: 2s;

    display: inline-flex;
    width: 1em;
    height: 1em;
    flex: none;
  }

  .spinner {
    flex: 1 1 auto;
    height: 100%;
    width: 100%;
  }

  .spinner__track,
  .spinner__indicator {
    fill: none;
    stroke-width: var(--track-width);
    r: calc(0.5em - var(--track-width) / 2);
    cx: 0.5em;
    cy: 0.5em;
    transform-origin: 50% 50%;
  }

  .spinner__track {
    stroke: var(--track-color);
    transform-origin: 0% 0%;
  }

  .spinner__indicator {
    stroke: var(--indicator-color);
    stroke-linecap: round;
    stroke-dasharray: 150% 75%;
    animation: spin var(--speed) linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
      stroke-dasharray: 0.05em, 3em;
    }

    50% {
      transform: rotate(450deg);
      stroke-dasharray: 1.375em, 1.375em;
    }

    100% {
      transform: rotate(1080deg);
      stroke-dasharray: 0.05em, 3em;
    }
  }
`;const cn=new Set,Ps=new Map;let ts,Vn="ltr",Bn="en";const Kc=typeof MutationObserver<"u"&&typeof document<"u"&&typeof document.documentElement<"u";if(Kc){const e=new MutationObserver(Gc);Vn=document.documentElement.dir||"ltr",Bn=document.documentElement.lang||navigator.language,e.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]})}function Wc(...e){e.map(t=>{const s=t.$code.toLowerCase();Ps.has(s)?Ps.set(s,Object.assign(Object.assign({},Ps.get(s)),t)):Ps.set(s,t),ts||(ts=t)}),Gc()}function Gc(){Kc&&(Vn=document.documentElement.dir||"ltr",Bn=document.documentElement.lang||navigator.language),[...cn.keys()].map(e=>{typeof e.requestUpdate=="function"&&e.requestUpdate()})}let Ch=class{constructor(t){this.host=t,this.host.addController(this)}hostConnected(){cn.add(this.host)}hostDisconnected(){cn.delete(this.host)}dir(){return`${this.host.dir||Vn}`.toLowerCase()}lang(){return`${this.host.lang||Bn}`.toLowerCase()}getTranslationData(t){var s,r;const i=new Intl.Locale(t.replace(/_/g,"-")),o=i==null?void 0:i.language.toLowerCase(),n=(r=(s=i==null?void 0:i.region)===null||s===void 0?void 0:s.toLowerCase())!==null&&r!==void 0?r:"",a=Ps.get(`${o}-${n}`),l=Ps.get(o);return{locale:i,language:o,region:n,primary:a,secondary:l}}exists(t,s){var r;const{primary:i,secondary:o}=this.getTranslationData((r=s.lang)!==null&&r!==void 0?r:this.lang());return s=Object.assign({includeFallback:!1},s),!!(i&&i[t]||o&&o[t]||s.includeFallback&&ts&&ts[t])}term(t,...s){const{primary:r,secondary:i}=this.getTranslationData(this.lang());let o;if(r&&r[t])o=r[t];else if(i&&i[t])o=i[t];else if(ts&&ts[t])o=ts[t];else return console.error(`No translation found for: ${String(t)}`),String(t);return typeof o=="function"?o(...s):o}date(t,s){return t=new Date(t),new Intl.DateTimeFormat(this.lang(),s).format(t)}number(t,s){return t=Number(t),isNaN(t)?"":new Intl.NumberFormat(this.lang(),s).format(t)}relativeTime(t,s,r){return new Intl.RelativeTimeFormat(this.lang(),r).format(t,s)}};var Yc={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(e,t)=>`Go to slide ${e} of ${t}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:e=>e===0?"No options selected":e===1?"1 option selected":`${e} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:e=>`Slide ${e}`,toggleColorFormat:"Toggle color format"};Wc(Yc);var Ah=Yc,Ve=class extends Ch{};Wc(Ah);var ge=ee`
  :host {
    box-sizing: border-box;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }

  [hidden] {
    display: none !important;
  }
`,Jc=Object.defineProperty,Ph=Object.defineProperties,Oh=Object.getOwnPropertyDescriptor,Th=Object.getOwnPropertyDescriptors,Al=Object.getOwnPropertySymbols,Nh=Object.prototype.hasOwnProperty,Ih=Object.prototype.propertyIsEnumerable,Vo=(e,t)=>(t=Symbol[e])?t:Symbol.for("Symbol."+e),qn=e=>{throw TypeError(e)},Pl=(e,t,s)=>t in e?Jc(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,Jt=(e,t)=>{for(var s in t||(t={}))Nh.call(t,s)&&Pl(e,s,t[s]);if(Al)for(var s of Al(t))Ih.call(t,s)&&Pl(e,s,t[s]);return e},qi=(e,t)=>Ph(e,Th(t)),m=(e,t,s,r)=>{for(var i=r>1?void 0:r?Oh(t,s):t,o=e.length-1,n;o>=0;o--)(n=e[o])&&(i=(r?n(t,s,i):n(i))||i);return r&&i&&Jc(t,s,i),i},Xc=(e,t,s)=>t.has(e)||qn("Cannot "+s),Rh=(e,t,s)=>(Xc(e,t,"read from private field"),t.get(e)),Dh=(e,t,s)=>t.has(e)?qn("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),zh=(e,t,s,r)=>(Xc(e,t,"write to private field"),t.set(e,s),s),Lh=function(e,t){this[0]=e,this[1]=t},jh=e=>{var t=e[Vo("asyncIterator")],s=!1,r,i={};return t==null?(t=e[Vo("iterator")](),r=o=>i[o]=n=>t[o](n)):(t=t.call(e),r=o=>i[o]=n=>{if(s){if(s=!1,o==="throw")throw n;return n}return s=!0,{done:!1,value:new Lh(new Promise(a=>{var l=t[o](n);l instanceof Object||qn("Object expected"),a(l)}),1)}}),i[Vo("iterator")]=()=>i,r("next"),"throw"in t?r("throw"):i.throw=o=>{throw o},"return"in t&&r("return"),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const kt=e=>(t,s)=>{s!==void 0?s.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Mh={attribute:!0,type:String,converter:Ms,reflect:!1,hasChanged:Mn},Fh=(e=Mh,t,s)=>{const{kind:r,metadata:i}=s;let o=globalThis.litPropertyMetadata.get(i);if(o===void 0&&globalThis.litPropertyMetadata.set(i,o=new Map),r==="setter"&&((e=Object.create(e)).wrapped=!0),o.set(s.name,e),r==="accessor"){const{name:n}=s;return{set(a){const l=t.get.call(this);t.set.call(this,a),this.requestUpdate(n,l,e,!0,a)},init(a){return a!==void 0&&this.C(n,void 0,e,a),a}}}if(r==="setter"){const{name:n}=s;return function(a){const l=this[n];t.call(this,a),this.requestUpdate(n,l,e,!0,a)}}throw Error("Unsupported decorator location: "+r)};function _(e){return(t,s)=>typeof s=="object"?Fh(e,t,s):((r,i,o)=>{const n=i.hasOwnProperty(o);return i.constructor.createProperty(o,r),n?Object.getOwnPropertyDescriptor(i,o):void 0})(e,t,s)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function B(e){return _({...e,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Vh(e){return(t,s)=>{const r=typeof t=="function"?t:t[s];Object.assign(r,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Bh=(e,t,s)=>(s.configurable=!0,s.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(e,t,s),s);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function re(e,t){return(s,r,i)=>{const o=n=>{var a;return((a=n.renderRoot)==null?void 0:a.querySelector(e))??null};return Bh(s,r,{get(){return o(this)}})}}var gi,ce=class extends Me{constructor(){super(),Dh(this,gi,!1),this.initialReflectedProperties=new Map,Object.entries(this.constructor.dependencies).forEach(([e,t])=>{this.constructor.define(e,t)})}emit(e,t){const s=new CustomEvent(e,Jt({bubbles:!0,cancelable:!1,composed:!0,detail:{}},t));return this.dispatchEvent(s),s}static define(e,t=this,s={}){const r=customElements.get(e);if(!r){try{customElements.define(e,t,s)}catch{customElements.define(e,class extends t{},s)}return}let i=" (unknown version)",o=i;"version"in t&&t.version&&(i=" v"+t.version),"version"in r&&r.version&&(o=" v"+r.version),!(i&&o&&i===o)&&console.warn(`Attempted to register <${e}>${i}, but <${e}>${o} has already been registered.`)}attributeChangedCallback(e,t,s){Rh(this,gi)||(this.constructor.elementProperties.forEach((r,i)=>{r.reflect&&this[i]!=null&&this.initialReflectedProperties.set(i,this[i])}),zh(this,gi,!0)),super.attributeChangedCallback(e,t,s)}willUpdate(e){super.willUpdate(e),this.initialReflectedProperties.forEach((t,s)=>{e.has(s)&&this[s]==null&&(this[s]=t)})}};gi=new WeakMap;ce.version="2.20.1";ce.dependencies={};m([_()],ce.prototype,"dir",2);m([_()],ce.prototype,"lang",2);var Un=class extends ce{constructor(){super(...arguments),this.localize=new Ve(this)}render(){return A`
      <svg part="base" class="spinner" role="progressbar" aria-label=${this.localize.term("loading")}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `}};Un.styles=[ge,Eh];var lr=new WeakMap,cr=new WeakMap,dr=new WeakMap,Bo=new WeakSet,ti=new WeakMap,Br=class{constructor(e,t){this.handleFormData=s=>{const r=this.options.disabled(this.host),i=this.options.name(this.host),o=this.options.value(this.host),n=this.host.tagName.toLowerCase()==="sl-button";this.host.isConnected&&!r&&!n&&typeof i=="string"&&i.length>0&&typeof o<"u"&&(Array.isArray(o)?o.forEach(a=>{s.formData.append(i,a.toString())}):s.formData.append(i,o.toString()))},this.handleFormSubmit=s=>{var r;const i=this.options.disabled(this.host),o=this.options.reportValidity;this.form&&!this.form.noValidate&&((r=lr.get(this.form))==null||r.forEach(n=>{this.setUserInteracted(n,!0)})),this.form&&!this.form.noValidate&&!i&&!o(this.host)&&(s.preventDefault(),s.stopImmediatePropagation())},this.handleFormReset=()=>{this.options.setValue(this.host,this.options.defaultValue(this.host)),this.setUserInteracted(this.host,!1),ti.set(this.host,[])},this.handleInteraction=s=>{const r=ti.get(this.host);r.includes(s.type)||r.push(s.type),r.length===this.options.assumeInteractionOn.length&&this.setUserInteracted(this.host,!0)},this.checkFormValidity=()=>{if(this.form&&!this.form.noValidate){const s=this.form.querySelectorAll("*");for(const r of s)if(typeof r.checkValidity=="function"&&!r.checkValidity())return!1}return!0},this.reportFormValidity=()=>{if(this.form&&!this.form.noValidate){const s=this.form.querySelectorAll("*");for(const r of s)if(typeof r.reportValidity=="function"&&!r.reportValidity())return!1}return!0},(this.host=e).addController(this),this.options=Jt({form:s=>{const r=s.form;if(r){const o=s.getRootNode().querySelector(`#${r}`);if(o)return o}return s.closest("form")},name:s=>s.name,value:s=>s.value,defaultValue:s=>s.defaultValue,disabled:s=>{var r;return(r=s.disabled)!=null?r:!1},reportValidity:s=>typeof s.reportValidity=="function"?s.reportValidity():!0,checkValidity:s=>typeof s.checkValidity=="function"?s.checkValidity():!0,setValue:(s,r)=>s.value=r,assumeInteractionOn:["sl-input"]},t)}hostConnected(){const e=this.options.form(this.host);e&&this.attachForm(e),ti.set(this.host,[]),this.options.assumeInteractionOn.forEach(t=>{this.host.addEventListener(t,this.handleInteraction)})}hostDisconnected(){this.detachForm(),ti.delete(this.host),this.options.assumeInteractionOn.forEach(e=>{this.host.removeEventListener(e,this.handleInteraction)})}hostUpdated(){const e=this.options.form(this.host);e||this.detachForm(),e&&this.form!==e&&(this.detachForm(),this.attachForm(e)),this.host.hasUpdated&&this.setValidity(this.host.validity.valid)}attachForm(e){e?(this.form=e,lr.has(this.form)?lr.get(this.form).add(this.host):lr.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),cr.has(this.form)||(cr.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity()),dr.has(this.form)||(dr.set(this.form,this.form.checkValidity),this.form.checkValidity=()=>this.checkFormValidity())):this.form=void 0}detachForm(){if(!this.form)return;const e=lr.get(this.form);e&&(e.delete(this.host),e.size<=0&&(this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),cr.has(this.form)&&(this.form.reportValidity=cr.get(this.form),cr.delete(this.form)),dr.has(this.form)&&(this.form.checkValidity=dr.get(this.form),dr.delete(this.form)),this.form=void 0))}setUserInteracted(e,t){t?Bo.add(e):Bo.delete(e),e.requestUpdate()}doAction(e,t){if(this.form){const s=document.createElement("button");s.type=e,s.style.position="absolute",s.style.width="0",s.style.height="0",s.style.clipPath="inset(50%)",s.style.overflow="hidden",s.style.whiteSpace="nowrap",t&&(s.name=t.name,s.value=t.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach(r=>{t.hasAttribute(r)&&s.setAttribute(r,t.getAttribute(r))})),this.form.append(s),s.click(),s.remove()}}getForm(){var e;return(e=this.form)!=null?e:null}reset(e){this.doAction("reset",e)}submit(e){this.doAction("submit",e)}setValidity(e){const t=this.host,s=!!Bo.has(t),r=!!t.required;t.toggleAttribute("data-required",r),t.toggleAttribute("data-optional",!r),t.toggleAttribute("data-invalid",!e),t.toggleAttribute("data-valid",e),t.toggleAttribute("data-user-invalid",!e&&s),t.toggleAttribute("data-user-valid",e&&s)}updateValidity(){const e=this.host;this.setValidity(e.validity.valid)}emitInvalidEvent(e){const t=new CustomEvent("sl-invalid",{bubbles:!1,composed:!1,cancelable:!0,detail:{}});e||t.preventDefault(),this.host.dispatchEvent(t)||e==null||e.preventDefault()}},Hn=Object.freeze({badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:!0,valueMissing:!1});Object.freeze(qi(Jt({},Hn),{valid:!1,valueMissing:!0}));Object.freeze(qi(Jt({},Hn),{valid:!1,customError:!0}));var qh=ee`
  :host {
    display: inline-block;
    position: relative;
    width: auto;
    cursor: pointer;
  }

  .button {
    display: inline-flex;
    align-items: stretch;
    justify-content: center;
    width: 100%;
    border-style: solid;
    border-width: var(--sl-input-border-width);
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-font-weight-semibold);
    text-decoration: none;
    user-select: none;
    -webkit-user-select: none;
    white-space: nowrap;
    vertical-align: middle;
    padding: 0;
    transition:
      var(--sl-transition-x-fast) background-color,
      var(--sl-transition-x-fast) color,
      var(--sl-transition-x-fast) border,
      var(--sl-transition-x-fast) box-shadow;
    cursor: inherit;
  }

  .button::-moz-focus-inner {
    border: 0;
  }

  .button:focus {
    outline: none;
  }

  .button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* When disabled, prevent mouse events from bubbling up from children */
  .button--disabled * {
    pointer-events: none;
  }

  .button__prefix,
  .button__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    pointer-events: none;
  }

  .button__label {
    display: inline-block;
  }

  .button__label::slotted(sl-icon) {
    vertical-align: -2px;
  }

  /*
   * Standard buttons
   */

  /* Default */
  .button--standard.button--default {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-input-border-color);
    color: var(--sl-color-neutral-700);
  }

  .button--standard.button--default:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-50);
    border-color: var(--sl-color-primary-300);
    color: var(--sl-color-primary-700);
  }

  .button--standard.button--default:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-100);
    border-color: var(--sl-color-primary-400);
    color: var(--sl-color-primary-700);
  }

  /* Primary */
  .button--standard.button--primary {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--standard.button--success {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:hover:not(.button--disabled) {
    background-color: var(--sl-color-success-500);
    border-color: var(--sl-color-success-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:active:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--standard.button--neutral {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:hover:not(.button--disabled) {
    background-color: var(--sl-color-neutral-500);
    border-color: var(--sl-color-neutral-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:active:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--standard.button--warning {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }
  .button--standard.button--warning:hover:not(.button--disabled) {
    background-color: var(--sl-color-warning-500);
    border-color: var(--sl-color-warning-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--warning:active:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--standard.button--danger {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:hover:not(.button--disabled) {
    background-color: var(--sl-color-danger-500);
    border-color: var(--sl-color-danger-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:active:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  /*
   * Outline buttons
   */

  .button--outline {
    background: none;
    border: solid 1px;
  }

  /* Default */
  .button--outline.button--default {
    border-color: var(--sl-input-border-color);
    color: var(--sl-color-neutral-700);
  }

  .button--outline.button--default:hover:not(.button--disabled),
  .button--outline.button--default.button--checked:not(.button--disabled) {
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--default:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Primary */
  .button--outline.button--primary {
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-primary-600);
  }

  .button--outline.button--primary:hover:not(.button--disabled),
  .button--outline.button--primary.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--primary:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--outline.button--success {
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-success-600);
  }

  .button--outline.button--success:hover:not(.button--disabled),
  .button--outline.button--success.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--success:active:not(.button--disabled) {
    border-color: var(--sl-color-success-700);
    background-color: var(--sl-color-success-700);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--outline.button--neutral {
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-600);
  }

  .button--outline.button--neutral:hover:not(.button--disabled),
  .button--outline.button--neutral.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--neutral:active:not(.button--disabled) {
    border-color: var(--sl-color-neutral-700);
    background-color: var(--sl-color-neutral-700);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--outline.button--warning {
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-warning-600);
  }

  .button--outline.button--warning:hover:not(.button--disabled),
  .button--outline.button--warning.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--warning:active:not(.button--disabled) {
    border-color: var(--sl-color-warning-700);
    background-color: var(--sl-color-warning-700);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--outline.button--danger {
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-danger-600);
  }

  .button--outline.button--danger:hover:not(.button--disabled),
  .button--outline.button--danger.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--danger:active:not(.button--disabled) {
    border-color: var(--sl-color-danger-700);
    background-color: var(--sl-color-danger-700);
    color: var(--sl-color-neutral-0);
  }

  @media (forced-colors: active) {
    .button.button--outline.button--checked:not(.button--disabled) {
      outline: solid 2px transparent;
    }
  }

  /*
   * Text buttons
   */

  .button--text {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-600);
  }

  .button--text:hover:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:focus-visible:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:active:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-700);
  }

  /*
   * Size modifiers
   */

  .button--small {
    height: auto;
    min-height: var(--sl-input-height-small);
    font-size: var(--sl-button-font-size-small);
    line-height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-small);
  }

  .button--medium {
    height: auto;
    min-height: var(--sl-input-height-medium);
    font-size: var(--sl-button-font-size-medium);
    line-height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-medium);
  }

  .button--large {
    height: auto;
    min-height: var(--sl-input-height-large);
    font-size: var(--sl-button-font-size-large);
    line-height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-large);
  }

  /*
   * Pill modifier
   */

  .button--pill.button--small {
    border-radius: var(--sl-input-height-small);
  }

  .button--pill.button--medium {
    border-radius: var(--sl-input-height-medium);
  }

  .button--pill.button--large {
    border-radius: var(--sl-input-height-large);
  }

  /*
   * Circle modifier
   */

  .button--circle {
    padding-left: 0;
    padding-right: 0;
  }

  .button--circle.button--small {
    width: var(--sl-input-height-small);
    border-radius: 50%;
  }

  .button--circle.button--medium {
    width: var(--sl-input-height-medium);
    border-radius: 50%;
  }

  .button--circle.button--large {
    width: var(--sl-input-height-large);
    border-radius: 50%;
  }

  .button--circle .button__prefix,
  .button--circle .button__suffix,
  .button--circle .button__caret {
    display: none;
  }

  /*
   * Caret modifier
   */

  .button--caret .button__suffix {
    display: none;
  }

  .button--caret .button__caret {
    height: auto;
  }

  /*
   * Loading modifier
   */

  .button--loading {
    position: relative;
    cursor: wait;
  }

  .button--loading .button__prefix,
  .button--loading .button__label,
  .button--loading .button__suffix,
  .button--loading .button__caret {
    visibility: hidden;
  }

  .button--loading sl-spinner {
    --indicator-color: currentColor;
    position: absolute;
    font-size: 1em;
    height: 1em;
    width: 1em;
    top: calc(50% - 0.5em);
    left: calc(50% - 0.5em);
  }

  /*
   * Badges
   */

  .button ::slotted(sl-badge) {
    position: absolute;
    top: 0;
    right: 0;
    translate: 50% -50%;
    pointer-events: none;
  }

  .button--rtl ::slotted(sl-badge) {
    right: auto;
    left: 0;
    translate: -50% -50%;
  }

  /*
   * Button spacing
   */

  .button--has-label.button--small .button__label {
    padding: 0 var(--sl-spacing-small);
  }

  .button--has-label.button--medium .button__label {
    padding: 0 var(--sl-spacing-medium);
  }

  .button--has-label.button--large .button__label {
    padding: 0 var(--sl-spacing-large);
  }

  .button--has-prefix.button--small {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--small .button__label {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--medium {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--medium .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-suffix.button--small,
  .button--caret.button--small {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--small .button__label,
  .button--caret.button--small .button__label {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--medium,
  .button--caret.button--medium {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--medium .button__label,
  .button--caret.button--medium .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large,
  .button--caret.button--large {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large .button__label,
  .button--caret.button--large .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  /*
   * Button groups support a variety of button types (e.g. buttons with tooltips, buttons as dropdown triggers, etc.).
   * This means buttons aren't always direct descendants of the button group, thus we can't target them with the
   * ::slotted selector. To work around this, the button group component does some magic to add these special classes to
   * buttons and we style them here instead.
   */

  :host([data-sl-button-group__button--first]:not([data-sl-button-group__button--last])) .button {
    border-start-end-radius: 0;
    border-end-end-radius: 0;
  }

  :host([data-sl-button-group__button--inner]) .button {
    border-radius: 0;
  }

  :host([data-sl-button-group__button--last]:not([data-sl-button-group__button--first])) .button {
    border-start-start-radius: 0;
    border-end-start-radius: 0;
  }

  /* All except the first */
  :host([data-sl-button-group__button]:not([data-sl-button-group__button--first])) {
    margin-inline-start: calc(-1 * var(--sl-input-border-width));
  }

  /* Add a visual separator between solid buttons */
  :host(
      [data-sl-button-group__button]:not(
          [data-sl-button-group__button--first],
          [data-sl-button-group__button--radio],
          [variant='default']
        ):not(:hover)
    )
    .button:after {
    content: '';
    position: absolute;
    top: 0;
    inset-inline-start: 0;
    bottom: 0;
    border-left: solid 1px rgb(128 128 128 / 33%);
    mix-blend-mode: multiply;
  }

  /* Bump hovered, focused, and checked buttons up so their focus ring isn't clipped */
  :host([data-sl-button-group__button--hover]) {
    z-index: 1;
  }

  /* Focus and checked are always on top */
  :host([data-sl-button-group__button--focus]),
  :host([data-sl-button-group__button][checked]) {
    z-index: 2;
  }
`,zt=class{constructor(e,...t){this.slotNames=[],this.handleSlotChange=s=>{const r=s.target;(this.slotNames.includes("[default]")&&!r.name||r.name&&this.slotNames.includes(r.name))&&this.host.requestUpdate()},(this.host=e).addController(this),this.slotNames=t}hasDefaultSlot(){return[...this.host.childNodes].some(e=>{if(e.nodeType===e.TEXT_NODE&&e.textContent.trim()!=="")return!0;if(e.nodeType===e.ELEMENT_NODE){const t=e;if(t.tagName.toLowerCase()==="sl-visually-hidden")return!1;if(!t.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(e){return this.host.querySelector(`:scope > [slot="${e}"]`)!==null}test(e){return e==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(e)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}};function Uh(e){if(!e)return"";const t=e.assignedNodes({flatten:!0});let s="";return[...t].forEach(r=>{r.nodeType===Node.TEXT_NODE&&(s+=r.textContent)}),s}var dn="";function un(e){dn=e}function Hh(e=""){if(!dn){const t=[...document.getElementsByTagName("script")],s=t.find(r=>r.hasAttribute("data-shoelace"));if(s)un(s.getAttribute("data-shoelace"));else{const r=t.find(o=>/shoelace(\.min)?\.js($|\?)/.test(o.src)||/shoelace-autoloader(\.min)?\.js($|\?)/.test(o.src));let i="";r&&(i=r.getAttribute("src")),un(i.split("/").slice(0,-1).join("/"))}}return dn.replace(/\/$/,"")+(e?`/${e.replace(/^\//,"")}`:"")}var Kh={name:"default",resolver:e=>Hh(`assets/icons/${e}.svg`)},Wh=Kh,Ol={caret:`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  `,check:`
    <svg part="checked-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor">
          <g transform="translate(3.428571, 3.428571)">
            <path d="M0,5.71428571 L3.42857143,9.14285714"></path>
            <path d="M9.14285714,0 L3.42857143,9.14285714"></path>
          </g>
        </g>
      </g>
    </svg>
  `,"chevron-down":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,"chevron-left":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
    </svg>
  `,"chevron-right":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,copy:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-copy" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V2Zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H6ZM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1H2Z"/>
    </svg>
  `,eye:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
    </svg>
  `,"eye-slash":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16">
      <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/>
      <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/>
      <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"/>
    </svg>
  `,eyedropper:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eyedropper" viewBox="0 0 16 16">
      <path d="M13.354.646a1.207 1.207 0 0 0-1.708 0L8.5 3.793l-.646-.647a.5.5 0 1 0-.708.708L8.293 5l-7.147 7.146A.5.5 0 0 0 1 12.5v1.793l-.854.853a.5.5 0 1 0 .708.707L1.707 15H3.5a.5.5 0 0 0 .354-.146L11 7.707l1.146 1.147a.5.5 0 0 0 .708-.708l-.647-.646 3.147-3.146a1.207 1.207 0 0 0 0-1.708l-2-2zM2 12.707l7-7L10.293 7l-7 7H2v-1.293z"></path>
    </svg>
  `,"grip-vertical":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-grip-vertical" viewBox="0 0 16 16">
      <path d="M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>
    </svg>
  `,indeterminate:`
    <svg part="indeterminate-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor" stroke-width="2">
          <g transform="translate(2.285714, 6.857143)">
            <path d="M10.2857143,1.14285714 L1.14285714,1.14285714"></path>
          </g>
        </g>
      </g>
    </svg>
  `,"person-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
    </svg>
  `,"play-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
      <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path>
    </svg>
  `,"pause-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pause-fill" viewBox="0 0 16 16">
      <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"></path>
    </svg>
  `,radio:`
    <svg part="checked-icon" class="radio__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g fill="currentColor">
          <circle cx="8" cy="8" r="3.42857143"></circle>
        </g>
      </g>
    </svg>
  `,"star-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
    </svg>
  `,"x-lg":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
      <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
    </svg>
  `,"x-circle-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"></path>
    </svg>
  `},Gh={name:"system",resolver:e=>e in Ol?`data:image/svg+xml,${encodeURIComponent(Ol[e])}`:""},Yh=Gh,Jh=[Wh,Yh],hn=[];function Xh(e){hn.push(e)}function Qh(e){hn=hn.filter(t=>t!==e)}function Tl(e){return Jh.find(t=>t.name===e)}var Zh=ee`
  :host {
    display: inline-block;
    width: 1em;
    height: 1em;
    box-sizing: content-box !important;
  }

  svg {
    display: block;
    height: 100%;
    width: 100%;
  }
`;function te(e,t){const s=Jt({waitUntilFirstUpdate:!1},t);return(r,i)=>{const{update:o}=r,n=Array.isArray(e)?e:[e];r.update=function(a){n.forEach(l=>{const c=l;if(a.has(c)){const u=a.get(c),d=this[c];u!==d&&(!s.waitUntilFirstUpdate||this.hasUpdated)&&this[i](u,d)}}),o.call(this,a)}}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ep=(e,t)=>(e==null?void 0:e._$litType$)!==void 0,Qc=e=>e.strings===void 0,tp={},sp=(e,t=tp)=>e._$AH=t;var ur=Symbol(),si=Symbol(),qo,Uo=new Map,Re=class extends ce{constructor(){super(...arguments),this.initialRender=!1,this.svg=null,this.label="",this.library="default"}async resolveIcon(e,t){var s;let r;if(t!=null&&t.spriteSheet)return this.svg=A`<svg part="svg">
        <use part="use" href="${e}"></use>
      </svg>`,this.svg;try{if(r=await fetch(e,{mode:"cors"}),!r.ok)return r.status===410?ur:si}catch{return si}try{const i=document.createElement("div");i.innerHTML=await r.text();const o=i.firstElementChild;if(((s=o==null?void 0:o.tagName)==null?void 0:s.toLowerCase())!=="svg")return ur;qo||(qo=new DOMParser);const a=qo.parseFromString(o.outerHTML,"text/html").body.querySelector("svg");return a?(a.part.add("svg"),document.adoptNode(a)):ur}catch{return ur}}connectedCallback(){super.connectedCallback(),Xh(this)}firstUpdated(){this.initialRender=!0,this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),Qh(this)}getIconSource(){const e=Tl(this.library);return this.name&&e?{url:e.resolver(this.name),fromLibrary:!0}:{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label=="string"&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){var e;const{url:t,fromLibrary:s}=this.getIconSource(),r=s?Tl(this.library):void 0;if(!t){this.svg=null;return}let i=Uo.get(t);if(i||(i=this.resolveIcon(t,r),Uo.set(t,i)),!this.initialRender)return;const o=await i;if(o===si&&Uo.delete(t),t===this.getIconSource().url){if(ep(o)){if(this.svg=o,r){await this.updateComplete;const n=this.shadowRoot.querySelector("[part='svg']");typeof r.mutator=="function"&&n&&r.mutator(n)}return}switch(o){case si:case ur:this.svg=null,this.emit("sl-error");break;default:this.svg=o.cloneNode(!0),(e=r==null?void 0:r.mutator)==null||e.call(r,this.svg),this.emit("sl-load")}}}render(){return this.svg}};Re.styles=[ge,Zh];m([B()],Re.prototype,"svg",2);m([_({reflect:!0})],Re.prototype,"name",2);m([_()],Re.prototype,"src",2);m([_()],Re.prototype,"label",2);m([_({reflect:!0})],Re.prototype,"library",2);m([te("label")],Re.prototype,"handleLabelChange",1);m([te(["name","src","library"])],Re.prototype,"setIcon",1);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Et={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4},Ui=e=>(...t)=>({_$litDirective$:e,values:t});let Hi=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,s,r){this._$Ct=t,this._$AM=s,this._$Ci=r}_$AS(t,s){return this.update(t,s)}update(t,s){return this.render(...s)}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ue=Ui(class extends Hi{constructor(e){var t;if(super(e),e.type!==Et.ATTRIBUTE||e.name!=="class"||((t=e.strings)==null?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){var r,i;if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(o=>o!=="")));for(const o in t)t[o]&&!((r=this.nt)!=null&&r.has(o))&&this.st.add(o);return this.render(t)}const s=e.element.classList;for(const o of this.st)o in t||(s.remove(o),this.st.delete(o));for(const o in t){const n=!!t[o];n===this.st.has(o)||(i=this.nt)!=null&&i.has(o)||(n?(s.add(o),this.st.add(o)):(s.remove(o),this.st.delete(o)))}return tt}});/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Zc=Symbol.for(""),rp=e=>{if((e==null?void 0:e.r)===Zc)return e==null?void 0:e._$litStatic$},Ai=(e,...t)=>({_$litStatic$:t.reduce((s,r,i)=>s+(o=>{if(o._$litStatic$!==void 0)return o._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${o}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(r)+e[i+1],e[0]),r:Zc}),Nl=new Map,ip=e=>(t,...s)=>{const r=s.length;let i,o;const n=[],a=[];let l,c=0,u=!1;for(;c<r;){for(l=t[c];c<r&&(o=s[c],(i=rp(o))!==void 0);)l+=i+t[++c],u=!0;c!==r&&a.push(o),n.push(l),c++}if(c===r&&n.push(t[r]),u){const d=n.join("$$lit$$");(t=Nl.get(d))===void 0&&(n.raw=n,Nl.set(d,t=n)),s=a}return e(t,...s)},yi=ip(A);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const U=e=>e??me;var ae=class extends ce{constructor(){super(...arguments),this.formControlController=new Br(this,{assumeInteractionOn:["click"]}),this.hasSlotController=new zt(this,"[default]","prefix","suffix"),this.localize=new Ve(this),this.hasFocus=!1,this.invalid=!1,this.title="",this.variant="default",this.size="medium",this.caret=!1,this.disabled=!1,this.loading=!1,this.outline=!1,this.pill=!1,this.circle=!1,this.type="button",this.name="",this.value="",this.href="",this.rel="noreferrer noopener"}get validity(){return this.isButton()?this.button.validity:Hn}get validationMessage(){return this.isButton()?this.button.validationMessage:""}firstUpdated(){this.isButton()&&this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(){this.type==="submit"&&this.formControlController.submit(this),this.type==="reset"&&this.formControlController.reset(this)}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.isButton()&&this.formControlController.setValidity(this.disabled)}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}checkValidity(){return this.isButton()?this.button.checkValidity():!0}getForm(){return this.formControlController.getForm()}reportValidity(){return this.isButton()?this.button.reportValidity():!0}setCustomValidity(e){this.isButton()&&(this.button.setCustomValidity(e),this.formControlController.updateValidity())}render(){const e=this.isLink(),t=e?Ai`a`:Ai`button`;return yi`
      <${t}
        part="base"
        class=${ue({button:!0,"button--default":this.variant==="default","button--primary":this.variant==="primary","button--success":this.variant==="success","button--neutral":this.variant==="neutral","button--warning":this.variant==="warning","button--danger":this.variant==="danger","button--text":this.variant==="text","button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--caret":this.caret,"button--circle":this.circle,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--loading":this.loading,"button--standard":!this.outline,"button--outline":this.outline,"button--pill":this.pill,"button--rtl":this.localize.dir()==="rtl","button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
        ?disabled=${U(e?void 0:this.disabled)}
        type=${U(e?void 0:this.type)}
        title=${this.title}
        name=${U(e?void 0:this.name)}
        value=${U(e?void 0:this.value)}
        href=${U(e&&!this.disabled?this.href:void 0)}
        target=${U(e?this.target:void 0)}
        download=${U(e?this.download:void 0)}
        rel=${U(e?this.rel:void 0)}
        role=${U(e?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @invalid=${this.isButton()?this.handleInvalid:null}
        @click=${this.handleClick}
      >
        <slot name="prefix" part="prefix" class="button__prefix"></slot>
        <slot part="label" class="button__label"></slot>
        <slot name="suffix" part="suffix" class="button__suffix"></slot>
        ${this.caret?yi` <sl-icon part="caret" class="button__caret" library="system" name="caret"></sl-icon> `:""}
        ${this.loading?yi`<sl-spinner part="spinner"></sl-spinner>`:""}
      </${t}>
    `}};ae.styles=[ge,qh];ae.dependencies={"sl-icon":Re,"sl-spinner":Un};m([re(".button")],ae.prototype,"button",2);m([B()],ae.prototype,"hasFocus",2);m([B()],ae.prototype,"invalid",2);m([_()],ae.prototype,"title",2);m([_({reflect:!0})],ae.prototype,"variant",2);m([_({reflect:!0})],ae.prototype,"size",2);m([_({type:Boolean,reflect:!0})],ae.prototype,"caret",2);m([_({type:Boolean,reflect:!0})],ae.prototype,"disabled",2);m([_({type:Boolean,reflect:!0})],ae.prototype,"loading",2);m([_({type:Boolean,reflect:!0})],ae.prototype,"outline",2);m([_({type:Boolean,reflect:!0})],ae.prototype,"pill",2);m([_({type:Boolean,reflect:!0})],ae.prototype,"circle",2);m([_()],ae.prototype,"type",2);m([_()],ae.prototype,"name",2);m([_()],ae.prototype,"value",2);m([_()],ae.prototype,"href",2);m([_()],ae.prototype,"target",2);m([_()],ae.prototype,"rel",2);m([_()],ae.prototype,"download",2);m([_()],ae.prototype,"form",2);m([_({attribute:"formaction"})],ae.prototype,"formAction",2);m([_({attribute:"formenctype"})],ae.prototype,"formEnctype",2);m([_({attribute:"formmethod"})],ae.prototype,"formMethod",2);m([_({attribute:"formnovalidate",type:Boolean})],ae.prototype,"formNoValidate",2);m([_({attribute:"formtarget"})],ae.prototype,"formTarget",2);m([te("disabled",{waitUntilFirstUpdate:!0})],ae.prototype,"handleDisabledChange",1);ae.define("sl-button");var op=ee`
  :host {
    display: block;
  }

  .input {
    flex: 1 1 auto;
    display: inline-flex;
    align-items: stretch;
    justify-content: start;
    position: relative;
    width: 100%;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    overflow: hidden;
    cursor: text;
    transition:
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) border,
      var(--sl-transition-fast) box-shadow,
      var(--sl-transition-fast) background-color;
  }

  /* Standard inputs */
  .input--standard {
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
  }

  .input--standard:hover:not(.input--disabled) {
    background-color: var(--sl-input-background-color-hover);
    border-color: var(--sl-input-border-color-hover);
  }

  .input--standard.input--focused:not(.input--disabled) {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
  }

  .input--standard.input--focused:not(.input--disabled) .input__control {
    color: var(--sl-input-color-focus);
  }

  .input--standard.input--disabled {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .input--standard.input--disabled .input__control {
    color: var(--sl-input-color-disabled);
  }

  .input--standard.input--disabled .input__control::placeholder {
    color: var(--sl-input-placeholder-color-disabled);
  }

  /* Filled inputs */
  .input--filled {
    border: none;
    background-color: var(--sl-input-filled-background-color);
    color: var(--sl-input-color);
  }

  .input--filled:hover:not(.input--disabled) {
    background-color: var(--sl-input-filled-background-color-hover);
  }

  .input--filled.input--focused:not(.input--disabled) {
    background-color: var(--sl-input-filled-background-color-focus);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .input--filled.input--disabled {
    background-color: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .input__control {
    flex: 1 1 auto;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    min-width: 0;
    height: 100%;
    color: var(--sl-input-color);
    border: none;
    background: inherit;
    box-shadow: none;
    padding: 0;
    margin: 0;
    cursor: inherit;
    -webkit-appearance: none;
  }

  .input__control::-webkit-search-decoration,
  .input__control::-webkit-search-cancel-button,
  .input__control::-webkit-search-results-button,
  .input__control::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  .input__control:-webkit-autofill,
  .input__control:-webkit-autofill:hover,
  .input__control:-webkit-autofill:focus,
  .input__control:-webkit-autofill:active {
    box-shadow: 0 0 0 var(--sl-input-height-large) var(--sl-input-background-color-hover) inset !important;
    -webkit-text-fill-color: var(--sl-color-primary-500);
    caret-color: var(--sl-input-color);
  }

  .input--filled .input__control:-webkit-autofill,
  .input--filled .input__control:-webkit-autofill:hover,
  .input--filled .input__control:-webkit-autofill:focus,
  .input--filled .input__control:-webkit-autofill:active {
    box-shadow: 0 0 0 var(--sl-input-height-large) var(--sl-input-filled-background-color) inset !important;
  }

  .input__control::placeholder {
    color: var(--sl-input-placeholder-color);
    user-select: none;
    -webkit-user-select: none;
  }

  .input:hover:not(.input--disabled) .input__control {
    color: var(--sl-input-color-hover);
  }

  .input__control:focus {
    outline: none;
  }

  .input__prefix,
  .input__suffix {
    display: inline-flex;
    flex: 0 0 auto;
    align-items: center;
    cursor: default;
  }

  .input__prefix ::slotted(sl-icon),
  .input__suffix ::slotted(sl-icon) {
    color: var(--sl-input-icon-color);
  }

  /*
   * Size modifiers
   */

  .input--small {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
    height: var(--sl-input-height-small);
  }

  .input--small .input__control {
    height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-small);
  }

  .input--small .input__clear,
  .input--small .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-small) * 2);
  }

  .input--small .input__prefix ::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-small);
  }

  .input--small .input__suffix ::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-small);
  }

  .input--medium {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
    height: var(--sl-input-height-medium);
  }

  .input--medium .input__control {
    height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-medium);
  }

  .input--medium .input__clear,
  .input--medium .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-medium) * 2);
  }

  .input--medium .input__prefix ::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-medium);
  }

  .input--medium .input__suffix ::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-medium);
  }

  .input--large {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
    height: var(--sl-input-height-large);
  }

  .input--large .input__control {
    height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-large);
  }

  .input--large .input__clear,
  .input--large .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-large) * 2);
  }

  .input--large .input__prefix ::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-large);
  }

  .input--large .input__suffix ::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-large);
  }

  /*
   * Pill modifier
   */

  .input--pill.input--small {
    border-radius: var(--sl-input-height-small);
  }

  .input--pill.input--medium {
    border-radius: var(--sl-input-height-medium);
  }

  .input--pill.input--large {
    border-radius: var(--sl-input-height-large);
  }

  /*
   * Clearable + Password Toggle
   */

  .input__clear,
  .input__password-toggle {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: inherit;
    color: var(--sl-input-icon-color);
    border: none;
    background: none;
    padding: 0;
    transition: var(--sl-transition-fast) color;
    cursor: pointer;
  }

  .input__clear:hover,
  .input__password-toggle:hover {
    color: var(--sl-input-icon-color-hover);
  }

  .input__clear:focus,
  .input__password-toggle:focus {
    outline: none;
  }

  /* Don't show the browser's password toggle in Edge */
  ::-ms-reveal {
    display: none;
  }

  /* Hide the built-in number spinner */
  .input--no-spin-buttons input[type='number']::-webkit-outer-spin-button,
  .input--no-spin-buttons input[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
    display: none;
  }

  .input--no-spin-buttons input[type='number'] {
    -moz-appearance: textfield;
  }
`,Kn=(e="value")=>(t,s)=>{const r=t.constructor,i=r.prototype.attributeChangedCallback;r.prototype.attributeChangedCallback=function(o,n,a){var l;const c=r.getPropertyOptions(e),u=typeof c.attribute=="string"?c.attribute:e;if(o===u){const d=c.converter||Ms,h=(typeof d=="function"?d:(l=d==null?void 0:d.fromAttribute)!=null?l:Ms.fromAttribute)(a,c.type);this[e]!==h&&(this[s]=h)}i.call(this,o,n,a)}},Ki=ee`
  .form-control .form-control__label {
    display: none;
  }

  .form-control .form-control__help-text {
    display: none;
  }

  /* Label */
  .form-control--has-label .form-control__label {
    display: inline-block;
    color: var(--sl-input-label-color);
    margin-bottom: var(--sl-spacing-3x-small);
  }

  .form-control--has-label.form-control--small .form-control__label {
    font-size: var(--sl-input-label-font-size-small);
  }

  .form-control--has-label.form-control--medium .form-control__label {
    font-size: var(--sl-input-label-font-size-medium);
  }

  .form-control--has-label.form-control--large .form-control__label {
    font-size: var(--sl-input-label-font-size-large);
  }

  :host([required]) .form-control--has-label .form-control__label::after {
    content: var(--sl-input-required-content);
    margin-inline-start: var(--sl-input-required-content-offset);
    color: var(--sl-input-required-content-color);
  }

  /* Help text */
  .form-control--has-help-text .form-control__help-text {
    display: block;
    color: var(--sl-input-help-text-color);
    margin-top: var(--sl-spacing-3x-small);
  }

  .form-control--has-help-text.form-control--small .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-small);
  }

  .form-control--has-help-text.form-control--medium .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-medium);
  }

  .form-control--has-help-text.form-control--large .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-large);
  }

  .form-control--has-help-text.form-control--radio-group .form-control__help-text {
    margin-top: var(--sl-spacing-2x-small);
  }
`;/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Pi=Ui(class extends Hi{constructor(e){if(super(e),e.type!==Et.PROPERTY&&e.type!==Et.ATTRIBUTE&&e.type!==Et.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!Qc(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===tt||t===me)return t;const s=e.element,r=e.name;if(e.type===Et.PROPERTY){if(t===s[r])return tt}else if(e.type===Et.BOOLEAN_ATTRIBUTE){if(!!t===s.hasAttribute(r))return tt}else if(e.type===Et.ATTRIBUTE&&s.getAttribute(r)===t+"")return tt;return sp(e),t}});var X=class extends ce{constructor(){super(...arguments),this.formControlController=new Br(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new zt(this,"help-text","label"),this.localize=new Ve(this),this.hasFocus=!1,this.title="",this.__numberInput=Object.assign(document.createElement("input"),{type:"number"}),this.__dateInput=Object.assign(document.createElement("input"),{type:"date"}),this.type="text",this.name="",this.value="",this.defaultValue="",this.size="medium",this.filled=!1,this.pill=!1,this.label="",this.helpText="",this.clearable=!1,this.disabled=!1,this.placeholder="",this.readonly=!1,this.passwordToggle=!1,this.passwordVisible=!1,this.noSpinButtons=!1,this.form="",this.required=!1,this.spellcheck=!0}get valueAsDate(){var e;return this.__dateInput.type=this.type,this.__dateInput.value=this.value,((e=this.input)==null?void 0:e.valueAsDate)||this.__dateInput.valueAsDate}set valueAsDate(e){this.__dateInput.type=this.type,this.__dateInput.valueAsDate=e,this.value=this.__dateInput.value}get valueAsNumber(){var e;return this.__numberInput.value=this.value,((e=this.input)==null?void 0:e.valueAsNumber)||this.__numberInput.valueAsNumber}set valueAsNumber(e){this.__numberInput.valueAsNumber=e,this.value=this.__numberInput.value}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleChange(){this.value=this.input.value,this.emit("sl-change")}handleClearClick(e){e.preventDefault(),this.value!==""&&(this.value="",this.emit("sl-clear"),this.emit("sl-input"),this.emit("sl-change")),this.input.focus()}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleInput(){this.value=this.input.value,this.formControlController.updateValidity(),this.emit("sl-input")}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleKeyDown(e){const t=e.metaKey||e.ctrlKey||e.shiftKey||e.altKey;e.key==="Enter"&&!t&&setTimeout(()=>{!e.defaultPrevented&&!e.isComposing&&this.formControlController.submit()})}handlePasswordToggle(){this.passwordVisible=!this.passwordVisible}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStepChange(){this.input.step=String(this.step),this.formControlController.updateValidity()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity()}focus(e){this.input.focus(e)}blur(){this.input.blur()}select(){this.input.select()}setSelectionRange(e,t,s="none"){this.input.setSelectionRange(e,t,s)}setRangeText(e,t,s,r="preserve"){const i=t??this.input.selectionStart,o=s??this.input.selectionEnd;this.input.setRangeText(e,i,o,r),this.value!==this.input.value&&(this.value=this.input.value)}showPicker(){"showPicker"in HTMLInputElement.prototype&&this.input.showPicker()}stepUp(){this.input.stepUp(),this.value!==this.input.value&&(this.value=this.input.value)}stepDown(){this.input.stepDown(),this.value!==this.input.value&&(this.value=this.input.value)}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){const e=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),s=this.label?!0:!!e,r=this.helpText?!0:!!t,o=this.clearable&&!this.disabled&&!this.readonly&&(typeof this.value=="number"||this.value.length>0);return A`
      <div
        part="form-control"
        class=${ue({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":s,"form-control--has-help-text":r})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${s?"false":"true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${ue({input:!0,"input--small":this.size==="small","input--medium":this.size==="medium","input--large":this.size==="large","input--pill":this.pill,"input--standard":!this.filled,"input--filled":this.filled,"input--disabled":this.disabled,"input--focused":this.hasFocus,"input--empty":!this.value,"input--no-spin-buttons":this.noSpinButtons})}
          >
            <span part="prefix" class="input__prefix">
              <slot name="prefix"></slot>
            </span>

            <input
              part="input"
              id="input"
              class="input__control"
              type=${this.type==="password"&&this.passwordVisible?"text":this.type}
              title=${this.title}
              name=${U(this.name)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${U(this.placeholder)}
              minlength=${U(this.minlength)}
              maxlength=${U(this.maxlength)}
              min=${U(this.min)}
              max=${U(this.max)}
              step=${U(this.step)}
              .value=${Pi(this.value)}
              autocapitalize=${U(this.autocapitalize)}
              autocomplete=${U(this.autocomplete)}
              autocorrect=${U(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${this.spellcheck}
              pattern=${U(this.pattern)}
              enterkeyhint=${U(this.enterkeyhint)}
              inputmode=${U(this.inputmode)}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @keydown=${this.handleKeyDown}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            />

            ${o?A`
                  <button
                    part="clear-button"
                    class="input__clear"
                    type="button"
                    aria-label=${this.localize.term("clearEntry")}
                    @click=${this.handleClearClick}
                    tabindex="-1"
                  >
                    <slot name="clear-icon">
                      <sl-icon name="x-circle-fill" library="system"></sl-icon>
                    </slot>
                  </button>
                `:""}
            ${this.passwordToggle&&!this.disabled?A`
                  <button
                    part="password-toggle-button"
                    class="input__password-toggle"
                    type="button"
                    aria-label=${this.localize.term(this.passwordVisible?"hidePassword":"showPassword")}
                    @click=${this.handlePasswordToggle}
                    tabindex="-1"
                  >
                    ${this.passwordVisible?A`
                          <slot name="show-password-icon">
                            <sl-icon name="eye-slash" library="system"></sl-icon>
                          </slot>
                        `:A`
                          <slot name="hide-password-icon">
                            <sl-icon name="eye" library="system"></sl-icon>
                          </slot>
                        `}
                  </button>
                `:""}

            <span part="suffix" class="input__suffix">
              <slot name="suffix"></slot>
            </span>
          </div>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${r?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};X.styles=[ge,Ki,op];X.dependencies={"sl-icon":Re};m([re(".input__control")],X.prototype,"input",2);m([B()],X.prototype,"hasFocus",2);m([_()],X.prototype,"title",2);m([_({reflect:!0})],X.prototype,"type",2);m([_()],X.prototype,"name",2);m([_()],X.prototype,"value",2);m([Kn()],X.prototype,"defaultValue",2);m([_({reflect:!0})],X.prototype,"size",2);m([_({type:Boolean,reflect:!0})],X.prototype,"filled",2);m([_({type:Boolean,reflect:!0})],X.prototype,"pill",2);m([_()],X.prototype,"label",2);m([_({attribute:"help-text"})],X.prototype,"helpText",2);m([_({type:Boolean})],X.prototype,"clearable",2);m([_({type:Boolean,reflect:!0})],X.prototype,"disabled",2);m([_()],X.prototype,"placeholder",2);m([_({type:Boolean,reflect:!0})],X.prototype,"readonly",2);m([_({attribute:"password-toggle",type:Boolean})],X.prototype,"passwordToggle",2);m([_({attribute:"password-visible",type:Boolean})],X.prototype,"passwordVisible",2);m([_({attribute:"no-spin-buttons",type:Boolean})],X.prototype,"noSpinButtons",2);m([_({reflect:!0})],X.prototype,"form",2);m([_({type:Boolean,reflect:!0})],X.prototype,"required",2);m([_()],X.prototype,"pattern",2);m([_({type:Number})],X.prototype,"minlength",2);m([_({type:Number})],X.prototype,"maxlength",2);m([_()],X.prototype,"min",2);m([_()],X.prototype,"max",2);m([_()],X.prototype,"step",2);m([_()],X.prototype,"autocapitalize",2);m([_()],X.prototype,"autocorrect",2);m([_()],X.prototype,"autocomplete",2);m([_({type:Boolean})],X.prototype,"autofocus",2);m([_()],X.prototype,"enterkeyhint",2);m([_({type:Boolean,converter:{fromAttribute:e=>!(!e||e==="false"),toAttribute:e=>e?"true":"false"}})],X.prototype,"spellcheck",2);m([_()],X.prototype,"inputmode",2);m([te("disabled",{waitUntilFirstUpdate:!0})],X.prototype,"handleDisabledChange",1);m([te("step",{waitUntilFirstUpdate:!0})],X.prototype,"handleStepChange",1);m([te("value",{waitUntilFirstUpdate:!0})],X.prototype,"handleValueChange",1);X.define("sl-input");var np=ee`
  :host {
    display: inline-block;
  }

  .tag {
    display: flex;
    align-items: center;
    border: solid 1px;
    line-height: 1;
    white-space: nowrap;
    user-select: none;
    -webkit-user-select: none;
  }

  .tag__remove::part(base) {
    color: inherit;
    padding: 0;
  }

  /*
   * Variant modifiers
   */

  .tag--primary {
    background-color: var(--sl-color-primary-50);
    border-color: var(--sl-color-primary-200);
    color: var(--sl-color-primary-800);
  }

  .tag--primary:active > sl-icon-button {
    color: var(--sl-color-primary-600);
  }

  .tag--success {
    background-color: var(--sl-color-success-50);
    border-color: var(--sl-color-success-200);
    color: var(--sl-color-success-800);
  }

  .tag--success:active > sl-icon-button {
    color: var(--sl-color-success-600);
  }

  .tag--neutral {
    background-color: var(--sl-color-neutral-50);
    border-color: var(--sl-color-neutral-200);
    color: var(--sl-color-neutral-800);
  }

  .tag--neutral:active > sl-icon-button {
    color: var(--sl-color-neutral-600);
  }

  .tag--warning {
    background-color: var(--sl-color-warning-50);
    border-color: var(--sl-color-warning-200);
    color: var(--sl-color-warning-800);
  }

  .tag--warning:active > sl-icon-button {
    color: var(--sl-color-warning-600);
  }

  .tag--danger {
    background-color: var(--sl-color-danger-50);
    border-color: var(--sl-color-danger-200);
    color: var(--sl-color-danger-800);
  }

  .tag--danger:active > sl-icon-button {
    color: var(--sl-color-danger-600);
  }

  /*
   * Size modifiers
   */

  .tag--small {
    font-size: var(--sl-button-font-size-small);
    height: calc(var(--sl-input-height-small) * 0.8);
    line-height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-small);
    padding: 0 var(--sl-spacing-x-small);
  }

  .tag--medium {
    font-size: var(--sl-button-font-size-medium);
    height: calc(var(--sl-input-height-medium) * 0.8);
    line-height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-medium);
    padding: 0 var(--sl-spacing-small);
  }

  .tag--large {
    font-size: var(--sl-button-font-size-large);
    height: calc(var(--sl-input-height-large) * 0.8);
    line-height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-large);
    padding: 0 var(--sl-spacing-medium);
  }

  .tag__remove {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  /*
   * Pill modifier
   */

  .tag--pill {
    border-radius: var(--sl-border-radius-pill);
  }
`,ap=ee`
  :host {
    display: inline-block;
    color: var(--sl-color-neutral-600);
  }

  .icon-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-medium);
    font-size: inherit;
    color: inherit;
    padding: var(--sl-spacing-x-small);
    cursor: pointer;
    transition: var(--sl-transition-x-fast) color;
    -webkit-appearance: none;
  }

  .icon-button:hover:not(.icon-button--disabled),
  .icon-button:focus-visible:not(.icon-button--disabled) {
    color: var(--sl-color-primary-600);
  }

  .icon-button:active:not(.icon-button--disabled) {
    color: var(--sl-color-primary-700);
  }

  .icon-button:focus {
    outline: none;
  }

  .icon-button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .icon-button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .icon-button__icon {
    pointer-events: none;
  }
`,Se=class extends ce{constructor(){super(...arguments),this.hasFocus=!1,this.label="",this.disabled=!1}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(e){this.disabled&&(e.preventDefault(),e.stopPropagation())}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}render(){const e=!!this.href,t=e?Ai`a`:Ai`button`;return yi`
      <${t}
        part="base"
        class=${ue({"icon-button":!0,"icon-button--disabled":!e&&this.disabled,"icon-button--focused":this.hasFocus})}
        ?disabled=${U(e?void 0:this.disabled)}
        type=${U(e?void 0:"button")}
        href=${U(e?this.href:void 0)}
        target=${U(e?this.target:void 0)}
        download=${U(e?this.download:void 0)}
        rel=${U(e&&this.target?"noreferrer noopener":void 0)}
        role=${U(e?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        aria-label="${this.label}"
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <sl-icon
          class="icon-button__icon"
          name=${U(this.name)}
          library=${U(this.library)}
          src=${U(this.src)}
          aria-hidden="true"
        ></sl-icon>
      </${t}>
    `}};Se.styles=[ge,ap];Se.dependencies={"sl-icon":Re};m([re(".icon-button")],Se.prototype,"button",2);m([B()],Se.prototype,"hasFocus",2);m([_()],Se.prototype,"name",2);m([_()],Se.prototype,"library",2);m([_()],Se.prototype,"src",2);m([_()],Se.prototype,"href",2);m([_()],Se.prototype,"target",2);m([_()],Se.prototype,"download",2);m([_()],Se.prototype,"label",2);m([_({type:Boolean,reflect:!0})],Se.prototype,"disabled",2);var ys=class extends ce{constructor(){super(...arguments),this.localize=new Ve(this),this.variant="neutral",this.size="medium",this.pill=!1,this.removable=!1}handleRemoveClick(){this.emit("sl-remove")}render(){return A`
      <span
        part="base"
        class=${ue({tag:!0,"tag--primary":this.variant==="primary","tag--success":this.variant==="success","tag--neutral":this.variant==="neutral","tag--warning":this.variant==="warning","tag--danger":this.variant==="danger","tag--text":this.variant==="text","tag--small":this.size==="small","tag--medium":this.size==="medium","tag--large":this.size==="large","tag--pill":this.pill,"tag--removable":this.removable})}
      >
        <slot part="content" class="tag__content"></slot>

        ${this.removable?A`
              <sl-icon-button
                part="remove-button"
                exportparts="base:remove-button__base"
                name="x-lg"
                library="system"
                label=${this.localize.term("remove")}
                class="tag__remove"
                @click=${this.handleRemoveClick}
                tabindex="-1"
              ></sl-icon-button>
            `:""}
      </span>
    `}};ys.styles=[ge,np];ys.dependencies={"sl-icon-button":Se};m([_({reflect:!0})],ys.prototype,"variant",2);m([_({reflect:!0})],ys.prototype,"size",2);m([_({type:Boolean,reflect:!0})],ys.prototype,"pill",2);m([_({type:Boolean})],ys.prototype,"removable",2);var lp=ee`
  :host {
    display: block;
  }

  /** The popup */
  .select {
    flex: 1 1 auto;
    display: inline-flex;
    width: 100%;
    position: relative;
    vertical-align: middle;
  }

  .select::part(popup) {
    z-index: var(--sl-z-index-dropdown);
  }

  .select[data-current-placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .select[data-current-placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  /* Combobox */
  .select__combobox {
    flex: 1;
    display: flex;
    width: 100%;
    min-width: 0;
    position: relative;
    align-items: center;
    justify-content: start;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    overflow: hidden;
    cursor: pointer;
    transition:
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) border,
      var(--sl-transition-fast) box-shadow,
      var(--sl-transition-fast) background-color;
  }

  .select__display-input {
    position: relative;
    width: 100%;
    font: inherit;
    border: none;
    background: none;
    color: var(--sl-input-color);
    cursor: inherit;
    overflow: hidden;
    padding: 0;
    margin: 0;
    -webkit-appearance: none;
  }

  .select__display-input::placeholder {
    color: var(--sl-input-placeholder-color);
  }

  .select:not(.select--disabled):hover .select__display-input {
    color: var(--sl-input-color-hover);
  }

  .select__display-input:focus {
    outline: none;
  }

  /* Visually hide the display input when multiple is enabled */
  .select--multiple:not(.select--placeholder-visible) .select__display-input {
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
  }

  .select__value-input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    opacity: 0;
    z-index: -1;
  }

  .select__tags {
    display: flex;
    flex: 1;
    align-items: center;
    flex-wrap: wrap;
    margin-inline-start: var(--sl-spacing-2x-small);
  }

  .select__tags::slotted(sl-tag) {
    cursor: pointer !important;
  }

  .select--disabled .select__tags,
  .select--disabled .select__tags::slotted(sl-tag) {
    cursor: not-allowed !important;
  }

  /* Standard selects */
  .select--standard .select__combobox {
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
  }

  .select--standard.select--disabled .select__combobox {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    color: var(--sl-input-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
    outline: none;
  }

  .select--standard:not(.select--disabled).select--open .select__combobox,
  .select--standard:not(.select--disabled).select--focused .select__combobox {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
  }

  /* Filled selects */
  .select--filled .select__combobox {
    border: none;
    background-color: var(--sl-input-filled-background-color);
    color: var(--sl-input-color);
  }

  .select--filled:hover:not(.select--disabled) .select__combobox {
    background-color: var(--sl-input-filled-background-color-hover);
  }

  .select--filled.select--disabled .select__combobox {
    background-color: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .select--filled:not(.select--disabled).select--open .select__combobox,
  .select--filled:not(.select--disabled).select--focused .select__combobox {
    background-color: var(--sl-input-filled-background-color-focus);
    outline: var(--sl-focus-ring);
  }

  /* Sizes */
  .select--small .select__combobox {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
    min-height: var(--sl-input-height-small);
    padding-block: 0;
    padding-inline: var(--sl-input-spacing-small);
  }

  .select--small .select__clear {
    margin-inline-start: var(--sl-input-spacing-small);
  }

  .select--small .select__prefix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-small);
  }

  .select--small.select--multiple:not(.select--placeholder-visible) .select__prefix::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-small);
  }

  .select--small.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-block: 2px;
    padding-inline-start: 0;
  }

  .select--small .select__tags {
    gap: 2px;
  }

  .select--medium .select__combobox {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
    min-height: var(--sl-input-height-medium);
    padding-block: 0;
    padding-inline: var(--sl-input-spacing-medium);
  }

  .select--medium .select__clear {
    margin-inline-start: var(--sl-input-spacing-medium);
  }

  .select--medium .select__prefix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-medium);
  }

  .select--medium.select--multiple:not(.select--placeholder-visible) .select__prefix::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-medium);
  }

  .select--medium.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-inline-start: 0;
    padding-block: 3px;
  }

  .select--medium .select__tags {
    gap: 3px;
  }

  .select--large .select__combobox {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
    min-height: var(--sl-input-height-large);
    padding-block: 0;
    padding-inline: var(--sl-input-spacing-large);
  }

  .select--large .select__clear {
    margin-inline-start: var(--sl-input-spacing-large);
  }

  .select--large .select__prefix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-large);
  }

  .select--large.select--multiple:not(.select--placeholder-visible) .select__prefix::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-large);
  }

  .select--large.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-inline-start: 0;
    padding-block: 4px;
  }

  .select--large .select__tags {
    gap: 4px;
  }

  /* Pills */
  .select--pill.select--small .select__combobox {
    border-radius: var(--sl-input-height-small);
  }

  .select--pill.select--medium .select__combobox {
    border-radius: var(--sl-input-height-medium);
  }

  .select--pill.select--large .select__combobox {
    border-radius: var(--sl-input-height-large);
  }

  /* Prefix and Suffix */
  .select__prefix,
  .select__suffix {
    flex: 0;
    display: inline-flex;
    align-items: center;
    color: var(--sl-input-placeholder-color);
  }

  .select__suffix::slotted(*) {
    margin-inline-start: var(--sl-spacing-small);
  }

  /* Clear button */
  .select__clear {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: inherit;
    color: var(--sl-input-icon-color);
    border: none;
    background: none;
    padding: 0;
    transition: var(--sl-transition-fast) color;
    cursor: pointer;
  }

  .select__clear:hover {
    color: var(--sl-input-icon-color-hover);
  }

  .select__clear:focus {
    outline: none;
  }

  /* Expand icon */
  .select__expand-icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    transition: var(--sl-transition-medium) rotate ease;
    rotate: 0;
    margin-inline-start: var(--sl-spacing-small);
  }

  .select--open .select__expand-icon {
    rotate: -180deg;
  }

  /* Listbox */
  .select__listbox {
    display: block;
    position: relative;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    box-shadow: var(--sl-shadow-large);
    background: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-radius: var(--sl-border-radius-medium);
    padding-block: var(--sl-spacing-x-small);
    padding-inline: 0;
    overflow: auto;
    overscroll-behavior: none;

    /* Make sure it adheres to the popup's auto size */
    max-width: var(--auto-size-available-width);
    max-height: var(--auto-size-available-height);
  }

  .select__listbox ::slotted(sl-divider) {
    --spacing: var(--sl-spacing-x-small);
  }

  .select__listbox ::slotted(small) {
    display: block;
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    color: var(--sl-color-neutral-500);
    padding-block: var(--sl-spacing-2x-small);
    padding-inline: var(--sl-spacing-x-large);
  }
`;function cp(e,t){return{top:Math.round(e.getBoundingClientRect().top-t.getBoundingClientRect().top),left:Math.round(e.getBoundingClientRect().left-t.getBoundingClientRect().left)}}var pn=new Set;function dp(){const e=document.documentElement.clientWidth;return Math.abs(window.innerWidth-e)}function up(){const e=Number(getComputedStyle(document.body).paddingRight.replace(/px/,""));return isNaN(e)||!e?0:e}function Il(e){if(pn.add(e),!document.documentElement.classList.contains("sl-scroll-lock")){const t=dp()+up();let s=getComputedStyle(document.documentElement).scrollbarGutter;(!s||s==="auto")&&(s="stable"),t<2&&(s=""),document.documentElement.style.setProperty("--sl-scroll-lock-gutter",s),document.documentElement.classList.add("sl-scroll-lock"),document.documentElement.style.setProperty("--sl-scroll-lock-size",`${t}px`)}}function Rl(e){pn.delete(e),pn.size===0&&(document.documentElement.classList.remove("sl-scroll-lock"),document.documentElement.style.removeProperty("--sl-scroll-lock-size"))}function fn(e,t,s="vertical",r="smooth"){const i=cp(e,t),o=i.top+t.scrollTop,n=i.left+t.scrollLeft,a=t.scrollLeft,l=t.scrollLeft+t.offsetWidth,c=t.scrollTop,u=t.scrollTop+t.offsetHeight;(s==="horizontal"||s==="both")&&(n<a?t.scrollTo({left:n,behavior:r}):n+e.clientWidth>l&&t.scrollTo({left:n-t.offsetWidth+e.clientWidth,behavior:r})),(s==="vertical"||s==="both")&&(o<c?t.scrollTo({top:o,behavior:r}):o+e.clientHeight>u&&t.scrollTo({top:o-t.offsetHeight+e.clientHeight,behavior:r}))}var hp=ee`
  :host {
    --arrow-color: var(--sl-color-neutral-1000);
    --arrow-size: 6px;

    /*
     * These properties are computed to account for the arrow's dimensions after being rotated 45º. The constant
     * 0.7071 is derived from sin(45), which is the diagonal size of the arrow's container after rotating.
     */
    --arrow-size-diagonal: calc(var(--arrow-size) * 0.7071);
    --arrow-padding-offset: calc(var(--arrow-size-diagonal) - var(--arrow-size));

    display: contents;
  }

  .popup {
    position: absolute;
    isolation: isolate;
    max-width: var(--auto-size-available-width, none);
    max-height: var(--auto-size-available-height, none);
  }

  .popup--fixed {
    position: fixed;
  }

  .popup:not(.popup--active) {
    display: none;
  }

  .popup__arrow {
    position: absolute;
    width: calc(var(--arrow-size-diagonal) * 2);
    height: calc(var(--arrow-size-diagonal) * 2);
    rotate: 45deg;
    background: var(--arrow-color);
    z-index: -1;
  }

  /* Hover bridge */
  .popup-hover-bridge:not(.popup-hover-bridge--visible) {
    display: none;
  }

  .popup-hover-bridge {
    position: fixed;
    z-index: calc(var(--sl-z-index-dropdown) - 1);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    clip-path: polygon(
      var(--hover-bridge-top-left-x, 0) var(--hover-bridge-top-left-y, 0),
      var(--hover-bridge-top-right-x, 0) var(--hover-bridge-top-right-y, 0),
      var(--hover-bridge-bottom-right-x, 0) var(--hover-bridge-bottom-right-y, 0),
      var(--hover-bridge-bottom-left-x, 0) var(--hover-bridge-bottom-left-y, 0)
    );
  }
`;const Kt=Math.min,qe=Math.max,Oi=Math.round,ri=Math.floor,vt=e=>({x:e,y:e}),pp={left:"right",right:"left",bottom:"top",top:"bottom"},fp={start:"end",end:"start"};function mn(e,t,s){return qe(e,Kt(t,s))}function Ws(e,t){return typeof e=="function"?e(t):e}function Wt(e){return e.split("-")[0]}function Gs(e){return e.split("-")[1]}function ed(e){return e==="x"?"y":"x"}function Wn(e){return e==="y"?"height":"width"}const mp=new Set(["top","bottom"]);function Ct(e){return mp.has(Wt(e))?"y":"x"}function Gn(e){return ed(Ct(e))}function gp(e,t,s){s===void 0&&(s=!1);const r=Gs(e),i=Gn(e),o=Wn(i);let n=i==="x"?r===(s?"end":"start")?"right":"left":r==="start"?"bottom":"top";return t.reference[o]>t.floating[o]&&(n=Ti(n)),[n,Ti(n)]}function yp(e){const t=Ti(e);return[gn(e),t,gn(t)]}function gn(e){return e.replace(/start|end/g,t=>fp[t])}const Dl=["left","right"],zl=["right","left"],bp=["top","bottom"],vp=["bottom","top"];function wp(e,t,s){switch(e){case"top":case"bottom":return s?t?zl:Dl:t?Dl:zl;case"left":case"right":return t?bp:vp;default:return[]}}function _p(e,t,s,r){const i=Gs(e);let o=wp(Wt(e),s==="start",r);return i&&(o=o.map(n=>n+"-"+i),t&&(o=o.concat(o.map(gn)))),o}function Ti(e){return e.replace(/left|right|bottom|top/g,t=>pp[t])}function $p(e){return{top:0,right:0,bottom:0,left:0,...e}}function td(e){return typeof e!="number"?$p(e):{top:e,right:e,bottom:e,left:e}}function Ni(e){const{x:t,y:s,width:r,height:i}=e;return{width:r,height:i,top:s,left:t,right:t+r,bottom:s+i,x:t,y:s}}function Ll(e,t,s){let{reference:r,floating:i}=e;const o=Ct(t),n=Gn(t),a=Wn(n),l=Wt(t),c=o==="y",u=r.x+r.width/2-i.width/2,d=r.y+r.height/2-i.height/2,p=r[a]/2-i[a]/2;let h;switch(l){case"top":h={x:u,y:r.y-i.height};break;case"bottom":h={x:u,y:r.y+r.height};break;case"right":h={x:r.x+r.width,y:d};break;case"left":h={x:r.x-i.width,y:d};break;default:h={x:r.x,y:r.y}}switch(Gs(t)){case"start":h[n]-=p*(s&&c?-1:1);break;case"end":h[n]+=p*(s&&c?-1:1);break}return h}async function kp(e,t){var s;t===void 0&&(t={});const{x:r,y:i,platform:o,rects:n,elements:a,strategy:l}=e,{boundary:c="clippingAncestors",rootBoundary:u="viewport",elementContext:d="floating",altBoundary:p=!1,padding:h=0}=Ws(t,e),v=td(h),g=a[p?d==="floating"?"reference":"floating":d],y=Ni(await o.getClippingRect({element:(s=await(o.isElement==null?void 0:o.isElement(g)))==null||s?g:g.contextElement||await(o.getDocumentElement==null?void 0:o.getDocumentElement(a.floating)),boundary:c,rootBoundary:u,strategy:l})),w=d==="floating"?{x:r,y:i,width:n.floating.width,height:n.floating.height}:n.reference,k=await(o.getOffsetParent==null?void 0:o.getOffsetParent(a.floating)),S=await(o.isElement==null?void 0:o.isElement(k))?await(o.getScale==null?void 0:o.getScale(k))||{x:1,y:1}:{x:1,y:1},C=Ni(o.convertOffsetParentRelativeRectToViewportRelativeRect?await o.convertOffsetParentRelativeRectToViewportRelativeRect({elements:a,rect:w,offsetParent:k,strategy:l}):w);return{top:(y.top-C.top+v.top)/S.y,bottom:(C.bottom-y.bottom+v.bottom)/S.y,left:(y.left-C.left+v.left)/S.x,right:(C.right-y.right+v.right)/S.x}}const xp=async(e,t,s)=>{const{placement:r="bottom",strategy:i="absolute",middleware:o=[],platform:n}=s,a=o.filter(Boolean),l=await(n.isRTL==null?void 0:n.isRTL(t));let c=await n.getElementRects({reference:e,floating:t,strategy:i}),{x:u,y:d}=Ll(c,r,l),p=r,h={},v=0;for(let g=0;g<a.length;g++){var f;const{name:y,fn:w}=a[g],{x:k,y:S,data:C,reset:T}=await w({x:u,y:d,initialPlacement:r,placement:p,strategy:i,middlewareData:h,rects:c,platform:{...n,detectOverflow:(f=n.detectOverflow)!=null?f:kp},elements:{reference:e,floating:t}});u=k??u,d=S??d,h={...h,[y]:{...h[y],...C}},T&&v<=50&&(v++,typeof T=="object"&&(T.placement&&(p=T.placement),T.rects&&(c=T.rects===!0?await n.getElementRects({reference:e,floating:t,strategy:i}):T.rects),{x:u,y:d}=Ll(c,p,l)),g=-1)}return{x:u,y:d,placement:p,strategy:i,middlewareData:h}},Sp=e=>({name:"arrow",options:e,async fn(t){const{x:s,y:r,placement:i,rects:o,platform:n,elements:a,middlewareData:l}=t,{element:c,padding:u=0}=Ws(e,t)||{};if(c==null)return{};const d=td(u),p={x:s,y:r},h=Gn(i),v=Wn(h),f=await n.getDimensions(c),g=h==="y",y=g?"top":"left",w=g?"bottom":"right",k=g?"clientHeight":"clientWidth",S=o.reference[v]+o.reference[h]-p[h]-o.floating[v],C=p[h]-o.reference[h],T=await(n.getOffsetParent==null?void 0:n.getOffsetParent(c));let I=T?T[k]:0;(!I||!await(n.isElement==null?void 0:n.isElement(T)))&&(I=a.floating[k]||o.floating[v]);const R=S/2-C/2,q=I/2-f[v]/2-1,Q=Kt(d[y],q),z=Kt(d[w],q),L=Q,W=I-f[v]-z,F=I/2-f[v]/2+R,pe=mn(L,F,W),$e=!l.arrow&&Gs(i)!=null&&F!==pe&&o.reference[v]/2-(F<L?Q:z)-f[v]/2<0,ye=$e?F<L?F-L:F-W:0;return{[h]:p[h]+ye,data:{[h]:pe,centerOffset:F-pe-ye,...$e&&{alignmentOffset:ye}},reset:$e}}}),Ep=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var s,r;const{placement:i,middlewareData:o,rects:n,initialPlacement:a,platform:l,elements:c}=t,{mainAxis:u=!0,crossAxis:d=!0,fallbackPlacements:p,fallbackStrategy:h="bestFit",fallbackAxisSideDirection:v="none",flipAlignment:f=!0,...g}=Ws(e,t);if((s=o.arrow)!=null&&s.alignmentOffset)return{};const y=Wt(i),w=Ct(a),k=Wt(a)===a,S=await(l.isRTL==null?void 0:l.isRTL(c.floating)),C=p||(k||!f?[Ti(a)]:yp(a)),T=v!=="none";!p&&T&&C.push(..._p(a,f,v,S));const I=[a,...C],R=await l.detectOverflow(t,g),q=[];let Q=((r=o.flip)==null?void 0:r.overflows)||[];if(u&&q.push(R[y]),d){const F=gp(i,n,S);q.push(R[F[0]],R[F[1]])}if(Q=[...Q,{placement:i,overflows:q}],!q.every(F=>F<=0)){var z,L;const F=(((z=o.flip)==null?void 0:z.index)||0)+1,pe=I[F];if(pe&&(!(d==="alignment"?w!==Ct(pe):!1)||Q.every(Ce=>Ct(Ce.placement)===w?Ce.overflows[0]>0:!0)))return{data:{index:F,overflows:Q},reset:{placement:pe}};let $e=(L=Q.filter(ye=>ye.overflows[0]<=0).sort((ye,Ce)=>ye.overflows[1]-Ce.overflows[1])[0])==null?void 0:L.placement;if(!$e)switch(h){case"bestFit":{var W;const ye=(W=Q.filter(Ce=>{if(T){const Ne=Ct(Ce.placement);return Ne===w||Ne==="y"}return!0}).map(Ce=>[Ce.placement,Ce.overflows.filter(Ne=>Ne>0).reduce((Ne,N)=>Ne+N,0)]).sort((Ce,Ne)=>Ce[1]-Ne[1])[0])==null?void 0:W[0];ye&&($e=ye);break}case"initialPlacement":$e=a;break}if(i!==$e)return{reset:{placement:$e}}}return{}}}},Cp=new Set(["left","top"]);async function Ap(e,t){const{placement:s,platform:r,elements:i}=e,o=await(r.isRTL==null?void 0:r.isRTL(i.floating)),n=Wt(s),a=Gs(s),l=Ct(s)==="y",c=Cp.has(n)?-1:1,u=o&&l?-1:1,d=Ws(t,e);let{mainAxis:p,crossAxis:h,alignmentAxis:v}=typeof d=="number"?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:d.mainAxis||0,crossAxis:d.crossAxis||0,alignmentAxis:d.alignmentAxis};return a&&typeof v=="number"&&(h=a==="end"?v*-1:v),l?{x:h*u,y:p*c}:{x:p*c,y:h*u}}const Pp=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){var s,r;const{x:i,y:o,placement:n,middlewareData:a}=t,l=await Ap(t,e);return n===((s=a.offset)==null?void 0:s.placement)&&(r=a.arrow)!=null&&r.alignmentOffset?{}:{x:i+l.x,y:o+l.y,data:{...l,placement:n}}}}},Op=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){const{x:s,y:r,placement:i,platform:o}=t,{mainAxis:n=!0,crossAxis:a=!1,limiter:l={fn:y=>{let{x:w,y:k}=y;return{x:w,y:k}}},...c}=Ws(e,t),u={x:s,y:r},d=await o.detectOverflow(t,c),p=Ct(Wt(i)),h=ed(p);let v=u[h],f=u[p];if(n){const y=h==="y"?"top":"left",w=h==="y"?"bottom":"right",k=v+d[y],S=v-d[w];v=mn(k,v,S)}if(a){const y=p==="y"?"top":"left",w=p==="y"?"bottom":"right",k=f+d[y],S=f-d[w];f=mn(k,f,S)}const g=l.fn({...t,[h]:v,[p]:f});return{...g,data:{x:g.x-s,y:g.y-r,enabled:{[h]:n,[p]:a}}}}}},Tp=function(e){return e===void 0&&(e={}),{name:"size",options:e,async fn(t){var s,r;const{placement:i,rects:o,platform:n,elements:a}=t,{apply:l=()=>{},...c}=Ws(e,t),u=await n.detectOverflow(t,c),d=Wt(i),p=Gs(i),h=Ct(i)==="y",{width:v,height:f}=o.floating;let g,y;d==="top"||d==="bottom"?(g=d,y=p===(await(n.isRTL==null?void 0:n.isRTL(a.floating))?"start":"end")?"left":"right"):(y=d,g=p==="end"?"top":"bottom");const w=f-u.top-u.bottom,k=v-u.left-u.right,S=Kt(f-u[g],w),C=Kt(v-u[y],k),T=!t.middlewareData.shift;let I=S,R=C;if((s=t.middlewareData.shift)!=null&&s.enabled.x&&(R=k),(r=t.middlewareData.shift)!=null&&r.enabled.y&&(I=w),T&&!p){const Q=qe(u.left,0),z=qe(u.right,0),L=qe(u.top,0),W=qe(u.bottom,0);h?R=v-2*(Q!==0||z!==0?Q+z:qe(u.left,u.right)):I=f-2*(L!==0||W!==0?L+W:qe(u.top,u.bottom))}await l({...t,availableWidth:R,availableHeight:I});const q=await n.getDimensions(a.floating);return v!==q.width||f!==q.height?{reset:{rects:!0}}:{}}}};function Wi(){return typeof window<"u"}function Ys(e){return sd(e)?(e.nodeName||"").toLowerCase():"#document"}function Ke(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function xt(e){var t;return(t=(sd(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function sd(e){return Wi()?e instanceof Node||e instanceof Ke(e).Node:!1}function ut(e){return Wi()?e instanceof Element||e instanceof Ke(e).Element:!1}function wt(e){return Wi()?e instanceof HTMLElement||e instanceof Ke(e).HTMLElement:!1}function jl(e){return!Wi()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof Ke(e).ShadowRoot}const Np=new Set(["inline","contents"]);function qr(e){const{overflow:t,overflowX:s,overflowY:r,display:i}=ht(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+s)&&!Np.has(i)}const Ip=new Set(["table","td","th"]);function Rp(e){return Ip.has(Ys(e))}const Dp=[":popover-open",":modal"];function Gi(e){return Dp.some(t=>{try{return e.matches(t)}catch{return!1}})}const zp=["transform","translate","scale","rotate","perspective"],Lp=["transform","translate","scale","rotate","perspective","filter"],jp=["paint","layout","strict","content"];function Yi(e){const t=Yn(),s=ut(e)?ht(e):e;return zp.some(r=>s[r]?s[r]!=="none":!1)||(s.containerType?s.containerType!=="normal":!1)||!t&&(s.backdropFilter?s.backdropFilter!=="none":!1)||!t&&(s.filter?s.filter!=="none":!1)||Lp.some(r=>(s.willChange||"").includes(r))||jp.some(r=>(s.contain||"").includes(r))}function Mp(e){let t=Gt(e);for(;wt(t)&&!Vs(t);){if(Yi(t))return t;if(Gi(t))return null;t=Gt(t)}return null}function Yn(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}const Fp=new Set(["html","body","#document"]);function Vs(e){return Fp.has(Ys(e))}function ht(e){return Ke(e).getComputedStyle(e)}function Ji(e){return ut(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function Gt(e){if(Ys(e)==="html")return e;const t=e.assignedSlot||e.parentNode||jl(e)&&e.host||xt(e);return jl(t)?t.host:t}function rd(e){const t=Gt(e);return Vs(t)?e.ownerDocument?e.ownerDocument.body:e.body:wt(t)&&qr(t)?t:rd(t)}function Rr(e,t,s){var r;t===void 0&&(t=[]),s===void 0&&(s=!0);const i=rd(e),o=i===((r=e.ownerDocument)==null?void 0:r.body),n=Ke(i);if(o){const a=yn(n);return t.concat(n,n.visualViewport||[],qr(i)?i:[],a&&s?Rr(a):[])}return t.concat(i,Rr(i,[],s))}function yn(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function id(e){const t=ht(e);let s=parseFloat(t.width)||0,r=parseFloat(t.height)||0;const i=wt(e),o=i?e.offsetWidth:s,n=i?e.offsetHeight:r,a=Oi(s)!==o||Oi(r)!==n;return a&&(s=o,r=n),{width:s,height:r,$:a}}function Jn(e){return ut(e)?e:e.contextElement}function Rs(e){const t=Jn(e);if(!wt(t))return vt(1);const s=t.getBoundingClientRect(),{width:r,height:i,$:o}=id(t);let n=(o?Oi(s.width):s.width)/r,a=(o?Oi(s.height):s.height)/i;return(!n||!Number.isFinite(n))&&(n=1),(!a||!Number.isFinite(a))&&(a=1),{x:n,y:a}}const Vp=vt(0);function od(e){const t=Ke(e);return!Yn()||!t.visualViewport?Vp:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function Bp(e,t,s){return t===void 0&&(t=!1),!s||t&&s!==Ke(e)?!1:t}function us(e,t,s,r){t===void 0&&(t=!1),s===void 0&&(s=!1);const i=e.getBoundingClientRect(),o=Jn(e);let n=vt(1);t&&(r?ut(r)&&(n=Rs(r)):n=Rs(e));const a=Bp(o,s,r)?od(o):vt(0);let l=(i.left+a.x)/n.x,c=(i.top+a.y)/n.y,u=i.width/n.x,d=i.height/n.y;if(o){const p=Ke(o),h=r&&ut(r)?Ke(r):r;let v=p,f=yn(v);for(;f&&r&&h!==v;){const g=Rs(f),y=f.getBoundingClientRect(),w=ht(f),k=y.left+(f.clientLeft+parseFloat(w.paddingLeft))*g.x,S=y.top+(f.clientTop+parseFloat(w.paddingTop))*g.y;l*=g.x,c*=g.y,u*=g.x,d*=g.y,l+=k,c+=S,v=Ke(f),f=yn(v)}}return Ni({width:u,height:d,x:l,y:c})}function Xi(e,t){const s=Ji(e).scrollLeft;return t?t.left+s:us(xt(e)).left+s}function nd(e,t){const s=e.getBoundingClientRect(),r=s.left+t.scrollLeft-Xi(e,s),i=s.top+t.scrollTop;return{x:r,y:i}}function qp(e){let{elements:t,rect:s,offsetParent:r,strategy:i}=e;const o=i==="fixed",n=xt(r),a=t?Gi(t.floating):!1;if(r===n||a&&o)return s;let l={scrollLeft:0,scrollTop:0},c=vt(1);const u=vt(0),d=wt(r);if((d||!d&&!o)&&((Ys(r)!=="body"||qr(n))&&(l=Ji(r)),wt(r))){const h=us(r);c=Rs(r),u.x=h.x+r.clientLeft,u.y=h.y+r.clientTop}const p=n&&!d&&!o?nd(n,l):vt(0);return{width:s.width*c.x,height:s.height*c.y,x:s.x*c.x-l.scrollLeft*c.x+u.x+p.x,y:s.y*c.y-l.scrollTop*c.y+u.y+p.y}}function Up(e){return Array.from(e.getClientRects())}function Hp(e){const t=xt(e),s=Ji(e),r=e.ownerDocument.body,i=qe(t.scrollWidth,t.clientWidth,r.scrollWidth,r.clientWidth),o=qe(t.scrollHeight,t.clientHeight,r.scrollHeight,r.clientHeight);let n=-s.scrollLeft+Xi(e);const a=-s.scrollTop;return ht(r).direction==="rtl"&&(n+=qe(t.clientWidth,r.clientWidth)-i),{width:i,height:o,x:n,y:a}}const Ml=25;function Kp(e,t){const s=Ke(e),r=xt(e),i=s.visualViewport;let o=r.clientWidth,n=r.clientHeight,a=0,l=0;if(i){o=i.width,n=i.height;const u=Yn();(!u||u&&t==="fixed")&&(a=i.offsetLeft,l=i.offsetTop)}const c=Xi(r);if(c<=0){const u=r.ownerDocument,d=u.body,p=getComputedStyle(d),h=u.compatMode==="CSS1Compat"&&parseFloat(p.marginLeft)+parseFloat(p.marginRight)||0,v=Math.abs(r.clientWidth-d.clientWidth-h);v<=Ml&&(o-=v)}else c<=Ml&&(o+=c);return{width:o,height:n,x:a,y:l}}const Wp=new Set(["absolute","fixed"]);function Gp(e,t){const s=us(e,!0,t==="fixed"),r=s.top+e.clientTop,i=s.left+e.clientLeft,o=wt(e)?Rs(e):vt(1),n=e.clientWidth*o.x,a=e.clientHeight*o.y,l=i*o.x,c=r*o.y;return{width:n,height:a,x:l,y:c}}function Fl(e,t,s){let r;if(t==="viewport")r=Kp(e,s);else if(t==="document")r=Hp(xt(e));else if(ut(t))r=Gp(t,s);else{const i=od(e);r={x:t.x-i.x,y:t.y-i.y,width:t.width,height:t.height}}return Ni(r)}function ad(e,t){const s=Gt(e);return s===t||!ut(s)||Vs(s)?!1:ht(s).position==="fixed"||ad(s,t)}function Yp(e,t){const s=t.get(e);if(s)return s;let r=Rr(e,[],!1).filter(a=>ut(a)&&Ys(a)!=="body"),i=null;const o=ht(e).position==="fixed";let n=o?Gt(e):e;for(;ut(n)&&!Vs(n);){const a=ht(n),l=Yi(n);!l&&a.position==="fixed"&&(i=null),(o?!l&&!i:!l&&a.position==="static"&&!!i&&Wp.has(i.position)||qr(n)&&!l&&ad(e,n))?r=r.filter(u=>u!==n):i=a,n=Gt(n)}return t.set(e,r),r}function Jp(e){let{element:t,boundary:s,rootBoundary:r,strategy:i}=e;const n=[...s==="clippingAncestors"?Gi(t)?[]:Yp(t,this._c):[].concat(s),r],a=n[0],l=n.reduce((c,u)=>{const d=Fl(t,u,i);return c.top=qe(d.top,c.top),c.right=Kt(d.right,c.right),c.bottom=Kt(d.bottom,c.bottom),c.left=qe(d.left,c.left),c},Fl(t,a,i));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function Xp(e){const{width:t,height:s}=id(e);return{width:t,height:s}}function Qp(e,t,s){const r=wt(t),i=xt(t),o=s==="fixed",n=us(e,!0,o,t);let a={scrollLeft:0,scrollTop:0};const l=vt(0);function c(){l.x=Xi(i)}if(r||!r&&!o)if((Ys(t)!=="body"||qr(i))&&(a=Ji(t)),r){const h=us(t,!0,o,t);l.x=h.x+t.clientLeft,l.y=h.y+t.clientTop}else i&&c();o&&!r&&i&&c();const u=i&&!r&&!o?nd(i,a):vt(0),d=n.left+a.scrollLeft-l.x-u.x,p=n.top+a.scrollTop-l.y-u.y;return{x:d,y:p,width:n.width,height:n.height}}function Ho(e){return ht(e).position==="static"}function Vl(e,t){if(!wt(e)||ht(e).position==="fixed")return null;if(t)return t(e);let s=e.offsetParent;return xt(e)===s&&(s=s.ownerDocument.body),s}function ld(e,t){const s=Ke(e);if(Gi(e))return s;if(!wt(e)){let i=Gt(e);for(;i&&!Vs(i);){if(ut(i)&&!Ho(i))return i;i=Gt(i)}return s}let r=Vl(e,t);for(;r&&Rp(r)&&Ho(r);)r=Vl(r,t);return r&&Vs(r)&&Ho(r)&&!Yi(r)?s:r||Mp(e)||s}const Zp=async function(e){const t=this.getOffsetParent||ld,s=this.getDimensions,r=await s(e.floating);return{reference:Qp(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}};function ef(e){return ht(e).direction==="rtl"}const bi={convertOffsetParentRelativeRectToViewportRelativeRect:qp,getDocumentElement:xt,getClippingRect:Jp,getOffsetParent:ld,getElementRects:Zp,getClientRects:Up,getDimensions:Xp,getScale:Rs,isElement:ut,isRTL:ef};function cd(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function tf(e,t){let s=null,r;const i=xt(e);function o(){var a;clearTimeout(r),(a=s)==null||a.disconnect(),s=null}function n(a,l){a===void 0&&(a=!1),l===void 0&&(l=1),o();const c=e.getBoundingClientRect(),{left:u,top:d,width:p,height:h}=c;if(a||t(),!p||!h)return;const v=ri(d),f=ri(i.clientWidth-(u+p)),g=ri(i.clientHeight-(d+h)),y=ri(u),k={rootMargin:-v+"px "+-f+"px "+-g+"px "+-y+"px",threshold:qe(0,Kt(1,l))||1};let S=!0;function C(T){const I=T[0].intersectionRatio;if(I!==l){if(!S)return n();I?n(!1,I):r=setTimeout(()=>{n(!1,1e-7)},1e3)}I===1&&!cd(c,e.getBoundingClientRect())&&n(),S=!1}try{s=new IntersectionObserver(C,{...k,root:i.ownerDocument})}catch{s=new IntersectionObserver(C,k)}s.observe(e)}return n(!0),o}function sf(e,t,s,r){r===void 0&&(r={});const{ancestorScroll:i=!0,ancestorResize:o=!0,elementResize:n=typeof ResizeObserver=="function",layoutShift:a=typeof IntersectionObserver=="function",animationFrame:l=!1}=r,c=Jn(e),u=i||o?[...c?Rr(c):[],...Rr(t)]:[];u.forEach(y=>{i&&y.addEventListener("scroll",s,{passive:!0}),o&&y.addEventListener("resize",s)});const d=c&&a?tf(c,s):null;let p=-1,h=null;n&&(h=new ResizeObserver(y=>{let[w]=y;w&&w.target===c&&h&&(h.unobserve(t),cancelAnimationFrame(p),p=requestAnimationFrame(()=>{var k;(k=h)==null||k.observe(t)})),s()}),c&&!l&&h.observe(c),h.observe(t));let v,f=l?us(e):null;l&&g();function g(){const y=us(e);f&&!cd(f,y)&&s(),f=y,v=requestAnimationFrame(g)}return s(),()=>{var y;u.forEach(w=>{i&&w.removeEventListener("scroll",s),o&&w.removeEventListener("resize",s)}),d==null||d(),(y=h)==null||y.disconnect(),h=null,l&&cancelAnimationFrame(v)}}const rf=Pp,of=Op,nf=Ep,Bl=Tp,af=Sp,lf=(e,t,s)=>{const r=new Map,i={platform:bi,...s},o={...i.platform,_c:r};return xp(e,t,{...i,platform:o})};function cf(e){return df(e)}function Ko(e){return e.assignedSlot?e.assignedSlot:e.parentNode instanceof ShadowRoot?e.parentNode.host:e.parentNode}function df(e){for(let t=e;t;t=Ko(t))if(t instanceof Element&&getComputedStyle(t).display==="none")return null;for(let t=Ko(e);t;t=Ko(t)){if(!(t instanceof Element))continue;const s=getComputedStyle(t);if(s.display!=="contents"&&(s.position!=="static"||Yi(s)||t.tagName==="BODY"))return t}return null}function uf(e){return e!==null&&typeof e=="object"&&"getBoundingClientRect"in e&&("contextElement"in e?e.contextElement instanceof Element:!0)}var le=class extends ce{constructor(){super(...arguments),this.localize=new Ve(this),this.active=!1,this.placement="top",this.strategy="absolute",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="best-fit",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0,this.hoverBridge=!1,this.updateHoverBridge=()=>{if(this.hoverBridge&&this.anchorEl){const e=this.anchorEl.getBoundingClientRect(),t=this.popup.getBoundingClientRect(),s=this.placement.includes("top")||this.placement.includes("bottom");let r=0,i=0,o=0,n=0,a=0,l=0,c=0,u=0;s?e.top<t.top?(r=e.left,i=e.bottom,o=e.right,n=e.bottom,a=t.left,l=t.top,c=t.right,u=t.top):(r=t.left,i=t.bottom,o=t.right,n=t.bottom,a=e.left,l=e.top,c=e.right,u=e.top):e.left<t.left?(r=e.right,i=e.top,o=t.left,n=t.top,a=e.right,l=e.bottom,c=t.left,u=t.bottom):(r=t.right,i=t.top,o=e.left,n=e.top,a=t.right,l=t.bottom,c=e.left,u=e.bottom),this.style.setProperty("--hover-bridge-top-left-x",`${r}px`),this.style.setProperty("--hover-bridge-top-left-y",`${i}px`),this.style.setProperty("--hover-bridge-top-right-x",`${o}px`),this.style.setProperty("--hover-bridge-top-right-y",`${n}px`),this.style.setProperty("--hover-bridge-bottom-left-x",`${a}px`),this.style.setProperty("--hover-bridge-bottom-left-y",`${l}px`),this.style.setProperty("--hover-bridge-bottom-right-x",`${c}px`),this.style.setProperty("--hover-bridge-bottom-right-y",`${u}px`)}}}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(e){super.updated(e),e.has("active")&&(this.active?this.start():this.stop()),e.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&typeof this.anchor=="string"){const e=this.getRootNode();this.anchorEl=e.getElementById(this.anchor)}else this.anchor instanceof Element||uf(this.anchor)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector('[slot="anchor"]');this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.active&&this.start()}start(){!this.anchorEl||!this.active||(this.cleanup=sf(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(e=>{this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame(()=>e())):e()})}reposition(){if(!this.active||!this.anchorEl)return;const e=[rf({mainAxis:this.distance,crossAxis:this.skidding})];this.sync?e.push(Bl({apply:({rects:s})=>{const r=this.sync==="width"||this.sync==="both",i=this.sync==="height"||this.sync==="both";this.popup.style.width=r?`${s.reference.width}px`:"",this.popup.style.height=i?`${s.reference.height}px`:""}})):(this.popup.style.width="",this.popup.style.height=""),this.flip&&e.push(nf({boundary:this.flipBoundary,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:this.flipFallbackStrategy==="best-fit"?"bestFit":"initialPlacement",padding:this.flipPadding})),this.shift&&e.push(of({boundary:this.shiftBoundary,padding:this.shiftPadding})),this.autoSize?e.push(Bl({boundary:this.autoSizeBoundary,padding:this.autoSizePadding,apply:({availableWidth:s,availableHeight:r})=>{this.autoSize==="vertical"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-height",`${r}px`):this.style.removeProperty("--auto-size-available-height"),this.autoSize==="horizontal"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-width",`${s}px`):this.style.removeProperty("--auto-size-available-width")}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&e.push(af({element:this.arrowEl,padding:this.arrowPadding}));const t=this.strategy==="absolute"?s=>bi.getOffsetParent(s,cf):bi.getOffsetParent;lf(this.anchorEl,this.popup,{placement:this.placement,middleware:e,strategy:this.strategy,platform:qi(Jt({},bi),{getOffsetParent:t})}).then(({x:s,y:r,middlewareData:i,placement:o})=>{const n=this.localize.dir()==="rtl",a={top:"bottom",right:"left",bottom:"top",left:"right"}[o.split("-")[0]];if(this.setAttribute("data-current-placement",o),Object.assign(this.popup.style,{left:`${s}px`,top:`${r}px`}),this.arrow){const l=i.arrow.x,c=i.arrow.y;let u="",d="",p="",h="";if(this.arrowPlacement==="start"){const v=typeof l=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";u=typeof c=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",d=n?v:"",h=n?"":v}else if(this.arrowPlacement==="end"){const v=typeof l=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";d=n?"":v,h=n?v:"",p=typeof c=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else this.arrowPlacement==="center"?(h=typeof l=="number"?"calc(50% - var(--arrow-size-diagonal))":"",u=typeof c=="number"?"calc(50% - var(--arrow-size-diagonal))":""):(h=typeof l=="number"?`${l}px`:"",u=typeof c=="number"?`${c}px`:"");Object.assign(this.arrowEl.style,{top:u,right:d,bottom:p,left:h,[a]:"calc(var(--arrow-size-diagonal) * -1)"})}}),requestAnimationFrame(()=>this.updateHoverBridge()),this.emit("sl-reposition")}render(){return A`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span
        part="hover-bridge"
        class=${ue({"popup-hover-bridge":!0,"popup-hover-bridge--visible":this.hoverBridge&&this.active})}
      ></span>

      <div
        part="popup"
        class=${ue({popup:!0,"popup--active":this.active,"popup--fixed":this.strategy==="fixed","popup--has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?A`<div part="arrow" class="popup__arrow" role="presentation"></div>`:""}
      </div>
    `}};le.styles=[ge,hp];m([re(".popup")],le.prototype,"popup",2);m([re(".popup__arrow")],le.prototype,"arrowEl",2);m([_()],le.prototype,"anchor",2);m([_({type:Boolean,reflect:!0})],le.prototype,"active",2);m([_({reflect:!0})],le.prototype,"placement",2);m([_({reflect:!0})],le.prototype,"strategy",2);m([_({type:Number})],le.prototype,"distance",2);m([_({type:Number})],le.prototype,"skidding",2);m([_({type:Boolean})],le.prototype,"arrow",2);m([_({attribute:"arrow-placement"})],le.prototype,"arrowPlacement",2);m([_({attribute:"arrow-padding",type:Number})],le.prototype,"arrowPadding",2);m([_({type:Boolean})],le.prototype,"flip",2);m([_({attribute:"flip-fallback-placements",converter:{fromAttribute:e=>e.split(" ").map(t=>t.trim()).filter(t=>t!==""),toAttribute:e=>e.join(" ")}})],le.prototype,"flipFallbackPlacements",2);m([_({attribute:"flip-fallback-strategy"})],le.prototype,"flipFallbackStrategy",2);m([_({type:Object})],le.prototype,"flipBoundary",2);m([_({attribute:"flip-padding",type:Number})],le.prototype,"flipPadding",2);m([_({type:Boolean})],le.prototype,"shift",2);m([_({type:Object})],le.prototype,"shiftBoundary",2);m([_({attribute:"shift-padding",type:Number})],le.prototype,"shiftPadding",2);m([_({attribute:"auto-size"})],le.prototype,"autoSize",2);m([_()],le.prototype,"sync",2);m([_({type:Object})],le.prototype,"autoSizeBoundary",2);m([_({attribute:"auto-size-padding",type:Number})],le.prototype,"autoSizePadding",2);m([_({attribute:"hover-bridge",type:Boolean})],le.prototype,"hoverBridge",2);var dd=new Map,hf=new WeakMap;function pf(e){return e??{keyframes:[],options:{duration:0}}}function ql(e,t){return t.toLowerCase()==="rtl"?{keyframes:e.rtlKeyframes||e.keyframes,options:e.options}:e}function Ge(e,t){dd.set(e,pf(t))}function Ue(e,t,s){const r=hf.get(e);if(r!=null&&r[t])return ql(r[t],s.dir);const i=dd.get(t);return i?ql(i,s.dir):{keyframes:[],options:{duration:0}}}function _t(e,t){return new Promise(s=>{function r(i){i.target===e&&(e.removeEventListener(t,r),s())}e.addEventListener(t,r)})}function He(e,t,s){return new Promise(r=>{if((s==null?void 0:s.duration)===1/0)throw new Error("Promise-based animations must be finite.");const i=e.animate(t,qi(Jt({},s),{duration:ff()?0:s.duration}));i.addEventListener("cancel",r,{once:!0}),i.addEventListener("finish",r,{once:!0})})}function Ul(e){return e=e.toString().toLowerCase(),e.indexOf("ms")>-1?parseFloat(e):e.indexOf("s")>-1?parseFloat(e)*1e3:parseFloat(e)}function ff(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function st(e){return Promise.all(e.getAnimations().map(t=>new Promise(s=>{t.cancel(),requestAnimationFrame(s)})))}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let bn=class extends Hi{constructor(t){if(super(t),this.it=me,t.type!==Et.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===me||t==null)return this._t=void 0,this.it=t;if(t===tt)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const s=[t];return s.raw=s,this._t={_$litType$:this.constructor.resultType,strings:s,values:[]}}};bn.directiveName="unsafeHTML",bn.resultType=1;const ud=Ui(bn);var se=class extends ce{constructor(){super(...arguments),this.formControlController=new Br(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new zt(this,"help-text","label"),this.localize=new Ve(this),this.typeToSelectString="",this.hasFocus=!1,this.displayLabel="",this.selectedOptions=[],this.valueHasChanged=!1,this.name="",this._value="",this.defaultValue="",this.size="medium",this.placeholder="",this.multiple=!1,this.maxOptionsVisible=3,this.disabled=!1,this.clearable=!1,this.open=!1,this.hoist=!1,this.filled=!1,this.pill=!1,this.label="",this.placement="bottom",this.helpText="",this.form="",this.required=!1,this.getTag=e=>A`
      <sl-tag
        part="tag"
        exportparts="
              base:tag__base,
              content:tag__content,
              remove-button:tag__remove-button,
              remove-button__base:tag__remove-button__base
            "
        ?pill=${this.pill}
        size=${this.size}
        removable
        @sl-remove=${t=>this.handleTagRemove(t,e)}
      >
        ${e.getTextLabel()}
      </sl-tag>
    `,this.handleDocumentFocusIn=e=>{const t=e.composedPath();this&&!t.includes(this)&&this.hide()},this.handleDocumentKeyDown=e=>{const t=e.target,s=t.closest(".select__clear")!==null,r=t.closest("sl-icon-button")!==null;if(!(s||r)){if(e.key==="Escape"&&this.open&&!this.closeWatcher&&(e.preventDefault(),e.stopPropagation(),this.hide(),this.displayInput.focus({preventScroll:!0})),e.key==="Enter"||e.key===" "&&this.typeToSelectString===""){if(e.preventDefault(),e.stopImmediatePropagation(),!this.open){this.show();return}this.currentOption&&!this.currentOption.disabled&&(this.valueHasChanged=!0,this.multiple?this.toggleOptionSelection(this.currentOption):this.setSelectedOptions(this.currentOption),this.updateComplete.then(()=>{this.emit("sl-input"),this.emit("sl-change")}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})));return}if(["ArrowUp","ArrowDown","Home","End"].includes(e.key)){const i=this.getAllOptions(),o=i.indexOf(this.currentOption);let n=Math.max(0,o);if(e.preventDefault(),!this.open&&(this.show(),this.currentOption))return;e.key==="ArrowDown"?(n=o+1,n>i.length-1&&(n=0)):e.key==="ArrowUp"?(n=o-1,n<0&&(n=i.length-1)):e.key==="Home"?n=0:e.key==="End"&&(n=i.length-1),this.setCurrentOption(i[n])}if(e.key&&e.key.length===1||e.key==="Backspace"){const i=this.getAllOptions();if(e.metaKey||e.ctrlKey||e.altKey)return;if(!this.open){if(e.key==="Backspace")return;this.show()}e.stopPropagation(),e.preventDefault(),clearTimeout(this.typeToSelectTimeout),this.typeToSelectTimeout=window.setTimeout(()=>this.typeToSelectString="",1e3),e.key==="Backspace"?this.typeToSelectString=this.typeToSelectString.slice(0,-1):this.typeToSelectString+=e.key.toLowerCase();for(const o of i)if(o.getTextLabel().toLowerCase().startsWith(this.typeToSelectString)){this.setCurrentOption(o);break}}}},this.handleDocumentMouseDown=e=>{const t=e.composedPath();this&&!t.includes(this)&&this.hide()}}get value(){return this._value}set value(e){this.multiple?e=Array.isArray(e)?e:e.split(" "):e=Array.isArray(e)?e.join(" "):e,this._value!==e&&(this.valueHasChanged=!0,this._value=e)}get validity(){return this.valueInput.validity}get validationMessage(){return this.valueInput.validationMessage}connectedCallback(){super.connectedCallback(),setTimeout(()=>{this.handleDefaultSlotChange()}),this.open=!1}addOpenListeners(){var e;document.addEventListener("focusin",this.handleDocumentFocusIn),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown),this.getRootNode()!==document&&this.getRootNode().addEventListener("focusin",this.handleDocumentFocusIn),"CloseWatcher"in window&&((e=this.closeWatcher)==null||e.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.open&&(this.hide(),this.displayInput.focus({preventScroll:!0}))})}removeOpenListeners(){var e;document.removeEventListener("focusin",this.handleDocumentFocusIn),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown),this.getRootNode()!==document&&this.getRootNode().removeEventListener("focusin",this.handleDocumentFocusIn),(e=this.closeWatcher)==null||e.destroy()}handleFocus(){this.hasFocus=!0,this.displayInput.setSelectionRange(0,0),this.emit("sl-focus")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleLabelClick(){this.displayInput.focus()}handleComboboxMouseDown(e){const s=e.composedPath().some(r=>r instanceof Element&&r.tagName.toLowerCase()==="sl-icon-button");this.disabled||s||(e.preventDefault(),this.displayInput.focus({preventScroll:!0}),this.open=!this.open)}handleComboboxKeyDown(e){e.key!=="Tab"&&(e.stopPropagation(),this.handleDocumentKeyDown(e))}handleClearClick(e){e.stopPropagation(),this.valueHasChanged=!0,this.value!==""&&(this.setSelectedOptions([]),this.displayInput.focus({preventScroll:!0}),this.updateComplete.then(()=>{this.emit("sl-clear"),this.emit("sl-input"),this.emit("sl-change")}))}handleClearMouseDown(e){e.stopPropagation(),e.preventDefault()}handleOptionClick(e){const s=e.target.closest("sl-option"),r=this.value;s&&!s.disabled&&(this.valueHasChanged=!0,this.multiple?this.toggleOptionSelection(s):this.setSelectedOptions(s),this.updateComplete.then(()=>this.displayInput.focus({preventScroll:!0})),this.value!==r&&this.updateComplete.then(()=>{this.emit("sl-input"),this.emit("sl-change")}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})))}handleDefaultSlotChange(){customElements.get("sl-option")||customElements.whenDefined("sl-option").then(()=>this.handleDefaultSlotChange());const e=this.getAllOptions(),t=this.valueHasChanged?this.value:this.defaultValue,s=Array.isArray(t)?t:[t],r=[];e.forEach(i=>r.push(i.value)),this.setSelectedOptions(e.filter(i=>s.includes(i.value)))}handleTagRemove(e,t){e.stopPropagation(),this.valueHasChanged=!0,this.disabled||(this.toggleOptionSelection(t,!1),this.updateComplete.then(()=>{this.emit("sl-input"),this.emit("sl-change")}))}getAllOptions(){return[...this.querySelectorAll("sl-option")]}getFirstOption(){return this.querySelector("sl-option")}setCurrentOption(e){this.getAllOptions().forEach(s=>{s.current=!1,s.tabIndex=-1}),e&&(this.currentOption=e,e.current=!0,e.tabIndex=0,e.focus())}setSelectedOptions(e){const t=this.getAllOptions(),s=Array.isArray(e)?e:[e];t.forEach(r=>r.selected=!1),s.length&&s.forEach(r=>r.selected=!0),this.selectionChanged()}toggleOptionSelection(e,t){t===!0||t===!1?e.selected=t:e.selected=!e.selected,this.selectionChanged()}selectionChanged(){var e,t,s;const r=this.getAllOptions();this.selectedOptions=r.filter(o=>o.selected);const i=this.valueHasChanged;if(this.multiple)this.value=this.selectedOptions.map(o=>o.value),this.placeholder&&this.value.length===0?this.displayLabel="":this.displayLabel=this.localize.term("numOptionsSelected",this.selectedOptions.length);else{const o=this.selectedOptions[0];this.value=(e=o==null?void 0:o.value)!=null?e:"",this.displayLabel=(s=(t=o==null?void 0:o.getTextLabel)==null?void 0:t.call(o))!=null?s:""}this.valueHasChanged=i,this.updateComplete.then(()=>{this.formControlController.updateValidity()})}get tags(){return this.selectedOptions.map((e,t)=>{if(t<this.maxOptionsVisible||this.maxOptionsVisible<=0){const s=this.getTag(e,t);return A`<div @sl-remove=${r=>this.handleTagRemove(r,e)}>
          ${typeof s=="string"?ud(s):s}
        </div>`}else if(t===this.maxOptionsVisible)return A`<sl-tag size=${this.size}>+${this.selectedOptions.length-t}</sl-tag>`;return A``})}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleDisabledChange(){this.disabled&&(this.open=!1,this.handleOpenChange())}attributeChangedCallback(e,t,s){if(super.attributeChangedCallback(e,t,s),e==="value"){const r=this.valueHasChanged;this.value=this.defaultValue,this.valueHasChanged=r}}handleValueChange(){if(!this.valueHasChanged){const s=this.valueHasChanged;this.value=this.defaultValue,this.valueHasChanged=s}const e=this.getAllOptions(),t=Array.isArray(this.value)?this.value:[this.value];this.setSelectedOptions(e.filter(s=>t.includes(s.value)))}async handleOpenChange(){if(this.open&&!this.disabled){this.setCurrentOption(this.selectedOptions[0]||this.getFirstOption()),this.emit("sl-show"),this.addOpenListeners(),await st(this),this.listbox.hidden=!1,this.popup.active=!0,requestAnimationFrame(()=>{this.setCurrentOption(this.currentOption)});const{keyframes:e,options:t}=Ue(this,"select.show",{dir:this.localize.dir()});await He(this.popup.popup,e,t),this.currentOption&&fn(this.currentOption,this.listbox,"vertical","auto"),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),await st(this);const{keyframes:e,options:t}=Ue(this,"select.hide",{dir:this.localize.dir()});await He(this.popup.popup,e,t),this.listbox.hidden=!0,this.popup.active=!1,this.emit("sl-after-hide")}}async show(){if(this.open||this.disabled){this.open=!1;return}return this.open=!0,_t(this,"sl-after-show")}async hide(){if(!this.open||this.disabled){this.open=!1;return}return this.open=!1,_t(this,"sl-after-hide")}checkValidity(){return this.valueInput.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.valueInput.reportValidity()}setCustomValidity(e){this.valueInput.setCustomValidity(e),this.formControlController.updateValidity()}focus(e){this.displayInput.focus(e)}blur(){this.displayInput.blur()}render(){const e=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),s=this.label?!0:!!e,r=this.helpText?!0:!!t,i=this.clearable&&!this.disabled&&this.value.length>0,o=this.placeholder&&this.value&&this.value.length<=0;return A`
      <div
        part="form-control"
        class=${ue({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":s,"form-control--has-help-text":r})}
      >
        <label
          id="label"
          part="form-control-label"
          class="form-control__label"
          aria-hidden=${s?"false":"true"}
          @click=${this.handleLabelClick}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <sl-popup
            class=${ue({select:!0,"select--standard":!0,"select--filled":this.filled,"select--pill":this.pill,"select--open":this.open,"select--disabled":this.disabled,"select--multiple":this.multiple,"select--focused":this.hasFocus,"select--placeholder-visible":o,"select--top":this.placement==="top","select--bottom":this.placement==="bottom","select--small":this.size==="small","select--medium":this.size==="medium","select--large":this.size==="large"})}
            placement=${this.placement}
            strategy=${this.hoist?"fixed":"absolute"}
            flip
            shift
            sync="width"
            auto-size="vertical"
            auto-size-padding="10"
          >
            <div
              part="combobox"
              class="select__combobox"
              slot="anchor"
              @keydown=${this.handleComboboxKeyDown}
              @mousedown=${this.handleComboboxMouseDown}
            >
              <slot part="prefix" name="prefix" class="select__prefix"></slot>

              <input
                part="display-input"
                class="select__display-input"
                type="text"
                placeholder=${this.placeholder}
                .disabled=${this.disabled}
                .value=${this.displayLabel}
                autocomplete="off"
                spellcheck="false"
                autocapitalize="off"
                readonly
                aria-controls="listbox"
                aria-expanded=${this.open?"true":"false"}
                aria-haspopup="listbox"
                aria-labelledby="label"
                aria-disabled=${this.disabled?"true":"false"}
                aria-describedby="help-text"
                role="combobox"
                tabindex="0"
                @focus=${this.handleFocus}
                @blur=${this.handleBlur}
              />

              ${this.multiple?A`<div part="tags" class="select__tags">${this.tags}</div>`:""}

              <input
                class="select__value-input"
                type="text"
                ?disabled=${this.disabled}
                ?required=${this.required}
                .value=${Array.isArray(this.value)?this.value.join(", "):this.value}
                tabindex="-1"
                aria-hidden="true"
                @focus=${()=>this.focus()}
                @invalid=${this.handleInvalid}
              />

              ${i?A`
                    <button
                      part="clear-button"
                      class="select__clear"
                      type="button"
                      aria-label=${this.localize.term("clearEntry")}
                      @mousedown=${this.handleClearMouseDown}
                      @click=${this.handleClearClick}
                      tabindex="-1"
                    >
                      <slot name="clear-icon">
                        <sl-icon name="x-circle-fill" library="system"></sl-icon>
                      </slot>
                    </button>
                  `:""}

              <slot name="suffix" part="suffix" class="select__suffix"></slot>

              <slot name="expand-icon" part="expand-icon" class="select__expand-icon">
                <sl-icon library="system" name="chevron-down"></sl-icon>
              </slot>
            </div>

            <div
              id="listbox"
              role="listbox"
              aria-expanded=${this.open?"true":"false"}
              aria-multiselectable=${this.multiple?"true":"false"}
              aria-labelledby="label"
              part="listbox"
              class="select__listbox"
              tabindex="-1"
              @mouseup=${this.handleOptionClick}
              @slotchange=${this.handleDefaultSlotChange}
            >
              <slot></slot>
            </div>
          </sl-popup>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${r?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};se.styles=[ge,Ki,lp];se.dependencies={"sl-icon":Re,"sl-popup":le,"sl-tag":ys};m([re(".select")],se.prototype,"popup",2);m([re(".select__combobox")],se.prototype,"combobox",2);m([re(".select__display-input")],se.prototype,"displayInput",2);m([re(".select__value-input")],se.prototype,"valueInput",2);m([re(".select__listbox")],se.prototype,"listbox",2);m([B()],se.prototype,"hasFocus",2);m([B()],se.prototype,"displayLabel",2);m([B()],se.prototype,"currentOption",2);m([B()],se.prototype,"selectedOptions",2);m([B()],se.prototype,"valueHasChanged",2);m([_()],se.prototype,"name",2);m([B()],se.prototype,"value",1);m([_({attribute:"value"})],se.prototype,"defaultValue",2);m([_({reflect:!0})],se.prototype,"size",2);m([_()],se.prototype,"placeholder",2);m([_({type:Boolean,reflect:!0})],se.prototype,"multiple",2);m([_({attribute:"max-options-visible",type:Number})],se.prototype,"maxOptionsVisible",2);m([_({type:Boolean,reflect:!0})],se.prototype,"disabled",2);m([_({type:Boolean})],se.prototype,"clearable",2);m([_({type:Boolean,reflect:!0})],se.prototype,"open",2);m([_({type:Boolean})],se.prototype,"hoist",2);m([_({type:Boolean,reflect:!0})],se.prototype,"filled",2);m([_({type:Boolean,reflect:!0})],se.prototype,"pill",2);m([_()],se.prototype,"label",2);m([_({reflect:!0})],se.prototype,"placement",2);m([_({attribute:"help-text"})],se.prototype,"helpText",2);m([_({reflect:!0})],se.prototype,"form",2);m([_({type:Boolean,reflect:!0})],se.prototype,"required",2);m([_()],se.prototype,"getTag",2);m([te("disabled",{waitUntilFirstUpdate:!0})],se.prototype,"handleDisabledChange",1);m([te(["defaultValue","value"],{waitUntilFirstUpdate:!0})],se.prototype,"handleValueChange",1);m([te("open",{waitUntilFirstUpdate:!0})],se.prototype,"handleOpenChange",1);Ge("select.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}});Ge("select.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}});se.define("sl-select");var mf=ee`
  :host {
    display: block;
    user-select: none;
    -webkit-user-select: none;
  }

  :host(:focus) {
    outline: none;
  }

  .option {
    position: relative;
    display: flex;
    align-items: center;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-letter-spacing-normal);
    color: var(--sl-color-neutral-700);
    padding: var(--sl-spacing-x-small) var(--sl-spacing-medium) var(--sl-spacing-x-small) var(--sl-spacing-x-small);
    transition: var(--sl-transition-fast) fill;
    cursor: pointer;
  }

  .option--hover:not(.option--current):not(.option--disabled) {
    background-color: var(--sl-color-neutral-100);
    color: var(--sl-color-neutral-1000);
  }

  .option--current,
  .option--current.option--disabled {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
    opacity: 1;
  }

  .option--disabled {
    outline: none;
    opacity: 0.5;
    cursor: not-allowed;
  }

  .option__label {
    flex: 1 1 auto;
    display: inline-block;
    line-height: var(--sl-line-height-dense);
  }

  .option .option__check {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    visibility: hidden;
    padding-inline-end: var(--sl-spacing-2x-small);
  }

  .option--selected .option__check {
    visibility: visible;
  }

  .option__prefix,
  .option__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .option__prefix::slotted(*) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .option__suffix::slotted(*) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  @media (forced-colors: active) {
    :host(:hover:not([aria-disabled='true'])) .option {
      outline: dashed 1px SelectedItem;
      outline-offset: -1px;
    }
  }
`,nt=class extends ce{constructor(){super(...arguments),this.localize=new Ve(this),this.isInitialized=!1,this.current=!1,this.selected=!1,this.hasHover=!1,this.value="",this.disabled=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","option"),this.setAttribute("aria-selected","false")}handleDefaultSlotChange(){this.isInitialized?customElements.whenDefined("sl-select").then(()=>{const e=this.closest("sl-select");e&&e.handleDefaultSlotChange()}):this.isInitialized=!0}handleMouseEnter(){this.hasHover=!0}handleMouseLeave(){this.hasHover=!1}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleSelectedChange(){this.setAttribute("aria-selected",this.selected?"true":"false")}handleValueChange(){typeof this.value!="string"&&(this.value=String(this.value)),this.value.includes(" ")&&(console.error("Option values cannot include a space. All spaces have been replaced with underscores.",this),this.value=this.value.replace(/ /g,"_"))}getTextLabel(){const e=this.childNodes;let t="";return[...e].forEach(s=>{s.nodeType===Node.ELEMENT_NODE&&(s.hasAttribute("slot")||(t+=s.textContent)),s.nodeType===Node.TEXT_NODE&&(t+=s.textContent)}),t.trim()}render(){return A`
      <div
        part="base"
        class=${ue({option:!0,"option--current":this.current,"option--disabled":this.disabled,"option--selected":this.selected,"option--hover":this.hasHover})}
        @mouseenter=${this.handleMouseEnter}
        @mouseleave=${this.handleMouseLeave}
      >
        <sl-icon part="checked-icon" class="option__check" name="check" library="system" aria-hidden="true"></sl-icon>
        <slot part="prefix" name="prefix" class="option__prefix"></slot>
        <slot part="label" class="option__label" @slotchange=${this.handleDefaultSlotChange}></slot>
        <slot part="suffix" name="suffix" class="option__suffix"></slot>
      </div>
    `}};nt.styles=[ge,mf];nt.dependencies={"sl-icon":Re};m([re(".option__label")],nt.prototype,"defaultSlot",2);m([B()],nt.prototype,"current",2);m([B()],nt.prototype,"selected",2);m([B()],nt.prototype,"hasHover",2);m([_({reflect:!0})],nt.prototype,"value",2);m([_({type:Boolean,reflect:!0})],nt.prototype,"disabled",2);m([te("disabled")],nt.prototype,"handleDisabledChange",1);m([te("selected")],nt.prototype,"handleSelectedChange",1);m([te("value")],nt.prototype,"handleValueChange",1);nt.define("sl-option");var gf=ee`
  :host {
    display: block;
  }

  .textarea {
    display: grid;
    align-items: center;
    position: relative;
    width: 100%;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    transition:
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) border,
      var(--sl-transition-fast) box-shadow,
      var(--sl-transition-fast) background-color;
    cursor: text;
  }

  /* Standard textareas */
  .textarea--standard {
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
  }

  .textarea--standard:hover:not(.textarea--disabled) {
    background-color: var(--sl-input-background-color-hover);
    border-color: var(--sl-input-border-color-hover);
  }
  .textarea--standard:hover:not(.textarea--disabled) .textarea__control {
    color: var(--sl-input-color-hover);
  }

  .textarea--standard.textarea--focused:not(.textarea--disabled) {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    color: var(--sl-input-color-focus);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
  }

  .textarea--standard.textarea--focused:not(.textarea--disabled) .textarea__control {
    color: var(--sl-input-color-focus);
  }

  .textarea--standard.textarea--disabled {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .textarea__control,
  .textarea__size-adjuster {
    grid-area: 1 / 1 / 2 / 2;
  }

  .textarea__size-adjuster {
    visibility: hidden;
    pointer-events: none;
    opacity: 0;
  }

  .textarea--standard.textarea--disabled .textarea__control {
    color: var(--sl-input-color-disabled);
  }

  .textarea--standard.textarea--disabled .textarea__control::placeholder {
    color: var(--sl-input-placeholder-color-disabled);
  }

  /* Filled textareas */
  .textarea--filled {
    border: none;
    background-color: var(--sl-input-filled-background-color);
    color: var(--sl-input-color);
  }

  .textarea--filled:hover:not(.textarea--disabled) {
    background-color: var(--sl-input-filled-background-color-hover);
  }

  .textarea--filled.textarea--focused:not(.textarea--disabled) {
    background-color: var(--sl-input-filled-background-color-focus);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .textarea--filled.textarea--disabled {
    background-color: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .textarea__control {
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    line-height: 1.4;
    color: var(--sl-input-color);
    border: none;
    background: none;
    box-shadow: none;
    cursor: inherit;
    -webkit-appearance: none;
  }

  .textarea__control::-webkit-search-decoration,
  .textarea__control::-webkit-search-cancel-button,
  .textarea__control::-webkit-search-results-button,
  .textarea__control::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  .textarea__control::placeholder {
    color: var(--sl-input-placeholder-color);
    user-select: none;
    -webkit-user-select: none;
  }

  .textarea__control:focus {
    outline: none;
  }

  /*
   * Size modifiers
   */

  .textarea--small {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
  }

  .textarea--small .textarea__control {
    padding: 0.5em var(--sl-input-spacing-small);
  }

  .textarea--medium {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
  }

  .textarea--medium .textarea__control {
    padding: 0.5em var(--sl-input-spacing-medium);
  }

  .textarea--large {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
  }

  .textarea--large .textarea__control {
    padding: 0.5em var(--sl-input-spacing-large);
  }

  /*
   * Resize types
   */

  .textarea--resize-none .textarea__control {
    resize: none;
  }

  .textarea--resize-vertical .textarea__control {
    resize: vertical;
  }

  .textarea--resize-auto .textarea__control {
    height: auto;
    resize: none;
    overflow-y: hidden;
  }
`,ie=class extends ce{constructor(){super(...arguments),this.formControlController=new Br(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new zt(this,"help-text","label"),this.hasFocus=!1,this.title="",this.name="",this.value="",this.size="medium",this.filled=!1,this.label="",this.helpText="",this.placeholder="",this.rows=4,this.resize="vertical",this.disabled=!1,this.readonly=!1,this.form="",this.required=!1,this.spellcheck=!0,this.defaultValue=""}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>this.setTextareaHeight()),this.updateComplete.then(()=>{this.setTextareaHeight(),this.resizeObserver.observe(this.input)})}firstUpdated(){this.formControlController.updateValidity()}disconnectedCallback(){var e;super.disconnectedCallback(),this.input&&((e=this.resizeObserver)==null||e.unobserve(this.input))}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleChange(){this.value=this.input.value,this.setTextareaHeight(),this.emit("sl-change")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleInput(){this.value=this.input.value,this.emit("sl-input")}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}setTextareaHeight(){this.resize==="auto"?(this.sizeAdjuster.style.height=`${this.input.clientHeight}px`,this.input.style.height="auto",this.input.style.height=`${this.input.scrollHeight}px`):this.input.style.height=""}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleRowsChange(){this.setTextareaHeight()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity(),this.setTextareaHeight()}focus(e){this.input.focus(e)}blur(){this.input.blur()}select(){this.input.select()}scrollPosition(e){if(e){typeof e.top=="number"&&(this.input.scrollTop=e.top),typeof e.left=="number"&&(this.input.scrollLeft=e.left);return}return{top:this.input.scrollTop,left:this.input.scrollTop}}setSelectionRange(e,t,s="none"){this.input.setSelectionRange(e,t,s)}setRangeText(e,t,s,r="preserve"){const i=t??this.input.selectionStart,o=s??this.input.selectionEnd;this.input.setRangeText(e,i,o,r),this.value!==this.input.value&&(this.value=this.input.value,this.setTextareaHeight())}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){const e=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),s=this.label?!0:!!e,r=this.helpText?!0:!!t;return A`
      <div
        part="form-control"
        class=${ue({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":s,"form-control--has-help-text":r})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${s?"false":"true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${ue({textarea:!0,"textarea--small":this.size==="small","textarea--medium":this.size==="medium","textarea--large":this.size==="large","textarea--standard":!this.filled,"textarea--filled":this.filled,"textarea--disabled":this.disabled,"textarea--focused":this.hasFocus,"textarea--empty":!this.value,"textarea--resize-none":this.resize==="none","textarea--resize-vertical":this.resize==="vertical","textarea--resize-auto":this.resize==="auto"})}
          >
            <textarea
              part="textarea"
              id="input"
              class="textarea__control"
              title=${this.title}
              name=${U(this.name)}
              .value=${Pi(this.value)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${U(this.placeholder)}
              rows=${U(this.rows)}
              minlength=${U(this.minlength)}
              maxlength=${U(this.maxlength)}
              autocapitalize=${U(this.autocapitalize)}
              autocorrect=${U(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${U(this.spellcheck)}
              enterkeyhint=${U(this.enterkeyhint)}
              inputmode=${U(this.inputmode)}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            ></textarea>
            <!-- This "adjuster" exists to prevent layout shifting. https://github.com/shoelace-style/shoelace/issues/2180 -->
            <div part="textarea-adjuster" class="textarea__size-adjuster" ?hidden=${this.resize!=="auto"}></div>
          </div>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${r?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};ie.styles=[ge,Ki,gf];m([re(".textarea__control")],ie.prototype,"input",2);m([re(".textarea__size-adjuster")],ie.prototype,"sizeAdjuster",2);m([B()],ie.prototype,"hasFocus",2);m([_()],ie.prototype,"title",2);m([_()],ie.prototype,"name",2);m([_()],ie.prototype,"value",2);m([_({reflect:!0})],ie.prototype,"size",2);m([_({type:Boolean,reflect:!0})],ie.prototype,"filled",2);m([_()],ie.prototype,"label",2);m([_({attribute:"help-text"})],ie.prototype,"helpText",2);m([_()],ie.prototype,"placeholder",2);m([_({type:Number})],ie.prototype,"rows",2);m([_()],ie.prototype,"resize",2);m([_({type:Boolean,reflect:!0})],ie.prototype,"disabled",2);m([_({type:Boolean,reflect:!0})],ie.prototype,"readonly",2);m([_({reflect:!0})],ie.prototype,"form",2);m([_({type:Boolean,reflect:!0})],ie.prototype,"required",2);m([_({type:Number})],ie.prototype,"minlength",2);m([_({type:Number})],ie.prototype,"maxlength",2);m([_()],ie.prototype,"autocapitalize",2);m([_()],ie.prototype,"autocorrect",2);m([_()],ie.prototype,"autocomplete",2);m([_({type:Boolean})],ie.prototype,"autofocus",2);m([_()],ie.prototype,"enterkeyhint",2);m([_({type:Boolean,converter:{fromAttribute:e=>!(!e||e==="false"),toAttribute:e=>e?"true":"false"}})],ie.prototype,"spellcheck",2);m([_()],ie.prototype,"inputmode",2);m([Kn()],ie.prototype,"defaultValue",2);m([te("disabled",{waitUntilFirstUpdate:!0})],ie.prototype,"handleDisabledChange",1);m([te("rows",{waitUntilFirstUpdate:!0})],ie.prototype,"handleRowsChange",1);m([te("value",{waitUntilFirstUpdate:!0})],ie.prototype,"handleValueChange",1);ie.define("sl-textarea");var yf=ee`
  :host {
    display: inline-block;
  }

  .checkbox {
    position: relative;
    display: inline-flex;
    align-items: flex-start;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    color: var(--sl-input-label-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .checkbox--small {
    --toggle-size: var(--sl-toggle-size-small);
    font-size: var(--sl-input-font-size-small);
  }

  .checkbox--medium {
    --toggle-size: var(--sl-toggle-size-medium);
    font-size: var(--sl-input-font-size-medium);
  }

  .checkbox--large {
    --toggle-size: var(--sl-toggle-size-large);
    font-size: var(--sl-input-font-size-large);
  }

  .checkbox__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--toggle-size);
    height: var(--toggle-size);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
    border-radius: 2px;
    background-color: var(--sl-input-background-color);
    color: var(--sl-color-neutral-0);
    transition:
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) box-shadow;
  }

  .checkbox__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  .checkbox__checked-icon,
  .checkbox__indeterminate-icon {
    display: inline-flex;
    width: var(--toggle-size);
    height: var(--toggle-size);
  }

  /* Hover */
  .checkbox:not(.checkbox--checked):not(.checkbox--disabled) .checkbox__control:hover {
    border-color: var(--sl-input-border-color-hover);
    background-color: var(--sl-input-background-color-hover);
  }

  /* Focus */
  .checkbox:not(.checkbox--checked):not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Checked/indeterminate */
  .checkbox--checked .checkbox__control,
  .checkbox--indeterminate .checkbox__control {
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
  }

  /* Checked/indeterminate + hover */
  .checkbox.checkbox--checked:not(.checkbox--disabled) .checkbox__control:hover,
  .checkbox.checkbox--indeterminate:not(.checkbox--disabled) .checkbox__control:hover {
    border-color: var(--sl-color-primary-500);
    background-color: var(--sl-color-primary-500);
  }

  /* Checked/indeterminate + focus */
  .checkbox.checkbox--checked:not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control,
  .checkbox.checkbox--indeterminate:not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Disabled */
  .checkbox--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .checkbox__label {
    display: inline-block;
    color: var(--sl-input-label-color);
    line-height: var(--toggle-size);
    margin-inline-start: 0.5em;
    user-select: none;
    -webkit-user-select: none;
  }

  :host([required]) .checkbox__label::after {
    content: var(--sl-input-required-content);
    color: var(--sl-input-required-content-color);
    margin-inline-start: var(--sl-input-required-content-offset);
  }
`,Ee=class extends ce{constructor(){super(...arguments),this.formControlController=new Br(this,{value:e=>e.checked?e.value||"on":void 0,defaultValue:e=>e.defaultChecked,setValue:(e,t)=>e.checked=t}),this.hasSlotController=new zt(this,"help-text"),this.hasFocus=!1,this.title="",this.name="",this.size="medium",this.disabled=!1,this.checked=!1,this.indeterminate=!1,this.defaultChecked=!1,this.form="",this.required=!1,this.helpText=""}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleClick(){this.checked=!this.checked,this.indeterminate=!1,this.emit("sl-change")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleInput(){this.emit("sl-input")}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStateChange(){this.input.checked=this.checked,this.input.indeterminate=this.indeterminate,this.formControlController.updateValidity()}click(){this.input.click()}focus(e){this.input.focus(e)}blur(){this.input.blur()}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){const e=this.hasSlotController.test("help-text"),t=this.helpText?!0:!!e;return A`
      <div
        class=${ue({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-help-text":t})}
      >
        <label
          part="base"
          class=${ue({checkbox:!0,"checkbox--checked":this.checked,"checkbox--disabled":this.disabled,"checkbox--focused":this.hasFocus,"checkbox--indeterminate":this.indeterminate,"checkbox--small":this.size==="small","checkbox--medium":this.size==="medium","checkbox--large":this.size==="large"})}
        >
          <input
            class="checkbox__input"
            type="checkbox"
            title=${this.title}
            name=${this.name}
            value=${U(this.value)}
            .indeterminate=${Pi(this.indeterminate)}
            .checked=${Pi(this.checked)}
            .disabled=${this.disabled}
            .required=${this.required}
            aria-checked=${this.checked?"true":"false"}
            aria-describedby="help-text"
            @click=${this.handleClick}
            @input=${this.handleInput}
            @invalid=${this.handleInvalid}
            @blur=${this.handleBlur}
            @focus=${this.handleFocus}
          />

          <span
            part="control${this.checked?" control--checked":""}${this.indeterminate?" control--indeterminate":""}"
            class="checkbox__control"
          >
            ${this.checked?A`
                  <sl-icon part="checked-icon" class="checkbox__checked-icon" library="system" name="check"></sl-icon>
                `:""}
            ${!this.checked&&this.indeterminate?A`
                  <sl-icon
                    part="indeterminate-icon"
                    class="checkbox__indeterminate-icon"
                    library="system"
                    name="indeterminate"
                  ></sl-icon>
                `:""}
          </span>

          <div part="label" class="checkbox__label">
            <slot></slot>
          </div>
        </label>

        <div
          aria-hidden=${t?"false":"true"}
          class="form-control__help-text"
          id="help-text"
          part="form-control-help-text"
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};Ee.styles=[ge,Ki,yf];Ee.dependencies={"sl-icon":Re};m([re('input[type="checkbox"]')],Ee.prototype,"input",2);m([B()],Ee.prototype,"hasFocus",2);m([_()],Ee.prototype,"title",2);m([_()],Ee.prototype,"name",2);m([_()],Ee.prototype,"value",2);m([_({reflect:!0})],Ee.prototype,"size",2);m([_({type:Boolean,reflect:!0})],Ee.prototype,"disabled",2);m([_({type:Boolean,reflect:!0})],Ee.prototype,"checked",2);m([_({type:Boolean,reflect:!0})],Ee.prototype,"indeterminate",2);m([Kn("checked")],Ee.prototype,"defaultChecked",2);m([_({reflect:!0})],Ee.prototype,"form",2);m([_({type:Boolean,reflect:!0})],Ee.prototype,"required",2);m([_({attribute:"help-text"})],Ee.prototype,"helpText",2);m([te("disabled",{waitUntilFirstUpdate:!0})],Ee.prototype,"handleDisabledChange",1);m([te(["checked","indeterminate"],{waitUntilFirstUpdate:!0})],Ee.prototype,"handleStateChange",1);Ee.define("sl-checkbox");function*Xn(e=document.activeElement){e!=null&&(yield e,"shadowRoot"in e&&e.shadowRoot&&e.shadowRoot.mode!=="closed"&&(yield*jh(Xn(e.shadowRoot.activeElement))))}function hd(){return[...Xn()].pop()}var Hl=new WeakMap;function pd(e){let t=Hl.get(e);return t||(t=window.getComputedStyle(e,null),Hl.set(e,t)),t}function bf(e){if(typeof e.checkVisibility=="function")return e.checkVisibility({checkOpacity:!1,checkVisibilityCSS:!0});const t=pd(e);return t.visibility!=="hidden"&&t.display!=="none"}function vf(e){const t=pd(e),{overflowY:s,overflowX:r}=t;return s==="scroll"||r==="scroll"?!0:s!=="auto"||r!=="auto"?!1:e.scrollHeight>e.clientHeight&&s==="auto"||e.scrollWidth>e.clientWidth&&r==="auto"}function wf(e){const t=e.tagName.toLowerCase(),s=Number(e.getAttribute("tabindex"));if(e.hasAttribute("tabindex")&&(isNaN(s)||s<=-1)||e.hasAttribute("disabled")||e.closest("[inert]"))return!1;if(t==="input"&&e.getAttribute("type")==="radio"){const o=e.getRootNode(),n=`input[type='radio'][name="${e.getAttribute("name")}"]`,a=o.querySelector(`${n}:checked`);return a?a===e:o.querySelector(n)===e}return bf(e)?(t==="audio"||t==="video")&&e.hasAttribute("controls")||e.hasAttribute("tabindex")||e.hasAttribute("contenteditable")&&e.getAttribute("contenteditable")!=="false"||["button","input","select","textarea","a","audio","video","summary","iframe"].includes(t)?!0:vf(e):!1}function _f(e){var t,s;const r=vn(e),i=(t=r[0])!=null?t:null,o=(s=r[r.length-1])!=null?s:null;return{start:i,end:o}}function $f(e,t){var s;return((s=e.getRootNode({composed:!0}))==null?void 0:s.host)!==t}function vn(e){const t=new WeakMap,s=[];function r(i){if(i instanceof Element){if(i.hasAttribute("inert")||i.closest("[inert]")||t.has(i))return;t.set(i,!0),!s.includes(i)&&wf(i)&&s.push(i),i instanceof HTMLSlotElement&&$f(i,e)&&i.assignedElements({flatten:!0}).forEach(o=>{r(o)}),i.shadowRoot!==null&&i.shadowRoot.mode==="open"&&r(i.shadowRoot)}for(const o of i.children)r(o)}return r(e),s.sort((i,o)=>{const n=Number(i.getAttribute("tabindex"))||0;return(Number(o.getAttribute("tabindex"))||0)-n})}var hr=[],kf=class{constructor(e){this.tabDirection="forward",this.handleFocusIn=()=>{this.isActive()&&this.checkFocus()},this.handleKeyDown=t=>{var s;if(t.key!=="Tab"||this.isExternalActivated||!this.isActive())return;const r=hd();if(this.previousFocus=r,this.previousFocus&&this.possiblyHasTabbableChildren(this.previousFocus))return;t.shiftKey?this.tabDirection="backward":this.tabDirection="forward";const i=vn(this.element);let o=i.findIndex(a=>a===r);this.previousFocus=this.currentFocus;const n=this.tabDirection==="forward"?1:-1;for(;;){o+n>=i.length?o=0:o+n<0?o=i.length-1:o+=n,this.previousFocus=this.currentFocus;const a=i[o];if(this.tabDirection==="backward"&&this.previousFocus&&this.possiblyHasTabbableChildren(this.previousFocus)||a&&this.possiblyHasTabbableChildren(a))return;t.preventDefault(),this.currentFocus=a,(s=this.currentFocus)==null||s.focus({preventScroll:!1});const l=[...Xn()];if(l.includes(this.currentFocus)||!l.includes(this.previousFocus))break}setTimeout(()=>this.checkFocus())},this.handleKeyUp=()=>{this.tabDirection="forward"},this.element=e,this.elementsWithTabbableControls=["iframe"]}activate(){hr.push(this.element),document.addEventListener("focusin",this.handleFocusIn),document.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keyup",this.handleKeyUp)}deactivate(){hr=hr.filter(e=>e!==this.element),this.currentFocus=null,document.removeEventListener("focusin",this.handleFocusIn),document.removeEventListener("keydown",this.handleKeyDown),document.removeEventListener("keyup",this.handleKeyUp)}isActive(){return hr[hr.length-1]===this.element}activateExternal(){this.isExternalActivated=!0}deactivateExternal(){this.isExternalActivated=!1}checkFocus(){if(this.isActive()&&!this.isExternalActivated){const e=vn(this.element);if(!this.element.matches(":focus-within")){const t=e[0],s=e[e.length-1],r=this.tabDirection==="forward"?t:s;typeof(r==null?void 0:r.focus)=="function"&&(this.currentFocus=r,r.focus({preventScroll:!1}))}}}possiblyHasTabbableChildren(e){return this.elementsWithTabbableControls.includes(e.tagName.toLowerCase())||e.hasAttribute("controls")}},xf=ee`
  :host {
    --width: 31rem;
    --header-spacing: var(--sl-spacing-large);
    --body-spacing: var(--sl-spacing-large);
    --footer-spacing: var(--sl-spacing-large);

    display: contents;
  }

  .dialog {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: var(--sl-z-index-dialog);
  }

  .dialog__panel {
    display: flex;
    flex-direction: column;
    z-index: 2;
    width: var(--width);
    max-width: calc(100% - var(--sl-spacing-2x-large));
    max-height: calc(100% - var(--sl-spacing-2x-large));
    background-color: var(--sl-panel-background-color);
    border-radius: var(--sl-border-radius-medium);
    box-shadow: var(--sl-shadow-x-large);
  }

  .dialog__panel:focus {
    outline: none;
  }

  /* Ensure there's enough vertical padding for phones that don't update vh when chrome appears (e.g. iPhone) */
  @media screen and (max-width: 420px) {
    .dialog__panel {
      max-height: 80vh;
    }
  }

  .dialog--open .dialog__panel {
    display: flex;
    opacity: 1;
  }

  .dialog__header {
    flex: 0 0 auto;
    display: flex;
  }

  .dialog__title {
    flex: 1 1 auto;
    font: inherit;
    font-size: var(--sl-font-size-large);
    line-height: var(--sl-line-height-dense);
    padding: var(--header-spacing);
    margin: 0;
  }

  .dialog__header-actions {
    flex-shrink: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: end;
    gap: var(--sl-spacing-2x-small);
    padding: 0 var(--header-spacing);
  }

  .dialog__header-actions sl-icon-button,
  .dialog__header-actions ::slotted(sl-icon-button) {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-medium);
  }

  .dialog__body {
    flex: 1 1 auto;
    display: block;
    padding: var(--body-spacing);
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  .dialog__footer {
    flex: 0 0 auto;
    text-align: right;
    padding: var(--footer-spacing);
  }

  .dialog__footer ::slotted(sl-button:not(:first-of-type)) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  .dialog:not(.dialog--has-footer) .dialog__footer {
    display: none;
  }

  .dialog__overlay {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: var(--sl-overlay-background-color);
  }

  @media (forced-colors: active) {
    .dialog__panel {
      border: solid 1px var(--sl-color-neutral-0);
    }
  }
`,fd=e=>{var t;const{activeElement:s}=document;s&&e.contains(s)&&((t=document.activeElement)==null||t.blur())},St=class extends ce{constructor(){super(...arguments),this.hasSlotController=new zt(this,"footer"),this.localize=new Ve(this),this.modal=new kf(this),this.open=!1,this.label="",this.noHeader=!1,this.handleDocumentKeyDown=e=>{e.key==="Escape"&&this.modal.isActive()&&this.open&&(e.stopPropagation(),this.requestClose("keyboard"))}}firstUpdated(){this.dialog.hidden=!this.open,this.open&&(this.addOpenListeners(),this.modal.activate(),Il(this))}disconnectedCallback(){super.disconnectedCallback(),this.modal.deactivate(),Rl(this),this.removeOpenListeners()}requestClose(e){if(this.emit("sl-request-close",{cancelable:!0,detail:{source:e}}).defaultPrevented){const s=Ue(this,"dialog.denyClose",{dir:this.localize.dir()});He(this.panel,s.keyframes,s.options);return}this.hide()}addOpenListeners(){var e;"CloseWatcher"in window?((e=this.closeWatcher)==null||e.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>this.requestClose("keyboard")):document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){var e;(e=this.closeWatcher)==null||e.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown)}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.modal.activate(),Il(this);const e=this.querySelector("[autofocus]");e&&e.removeAttribute("autofocus"),await Promise.all([st(this.dialog),st(this.overlay)]),this.dialog.hidden=!1,requestAnimationFrame(()=>{this.emit("sl-initial-focus",{cancelable:!0}).defaultPrevented||(e?e.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),e&&e.setAttribute("autofocus","")});const t=Ue(this,"dialog.show",{dir:this.localize.dir()}),s=Ue(this,"dialog.overlay.show",{dir:this.localize.dir()});await Promise.all([He(this.panel,t.keyframes,t.options),He(this.overlay,s.keyframes,s.options)]),this.emit("sl-after-show")}else{fd(this),this.emit("sl-hide"),this.removeOpenListeners(),this.modal.deactivate(),await Promise.all([st(this.dialog),st(this.overlay)]);const e=Ue(this,"dialog.hide",{dir:this.localize.dir()}),t=Ue(this,"dialog.overlay.hide",{dir:this.localize.dir()});await Promise.all([He(this.overlay,t.keyframes,t.options).then(()=>{this.overlay.hidden=!0}),He(this.panel,e.keyframes,e.options).then(()=>{this.panel.hidden=!0})]),this.dialog.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1,Rl(this);const s=this.originalTrigger;typeof(s==null?void 0:s.focus)=="function"&&setTimeout(()=>s.focus()),this.emit("sl-after-hide")}}async show(){if(!this.open)return this.open=!0,_t(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,_t(this,"sl-after-hide")}render(){return A`
      <div
        part="base"
        class=${ue({dialog:!0,"dialog--open":this.open,"dialog--has-footer":this.hasSlotController.test("footer")})}
      >
        <div part="overlay" class="dialog__overlay" @click=${()=>this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="dialog__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open?"false":"true"}
          aria-label=${U(this.noHeader?this.label:void 0)}
          aria-labelledby=${U(this.noHeader?void 0:"title")}
          tabindex="-1"
        >
          ${this.noHeader?"":A`
                <header part="header" class="dialog__header">
                  <h2 part="title" class="dialog__title" id="title">
                    <slot name="label"> ${this.label.length>0?this.label:"\uFEFF"} </slot>
                  </h2>
                  <div part="header-actions" class="dialog__header-actions">
                    <slot name="header-actions"></slot>
                    <sl-icon-button
                      part="close-button"
                      exportparts="base:close-button__base"
                      class="dialog__close"
                      name="x-lg"
                      label=${this.localize.term("close")}
                      library="system"
                      @click="${()=>this.requestClose("close-button")}"
                    ></sl-icon-button>
                  </div>
                </header>
              `}
          ${""}
          <div part="body" class="dialog__body" tabindex="-1"><slot></slot></div>

          <footer part="footer" class="dialog__footer">
            <slot name="footer"></slot>
          </footer>
        </div>
      </div>
    `}};St.styles=[ge,xf];St.dependencies={"sl-icon-button":Se};m([re(".dialog")],St.prototype,"dialog",2);m([re(".dialog__panel")],St.prototype,"panel",2);m([re(".dialog__overlay")],St.prototype,"overlay",2);m([_({type:Boolean,reflect:!0})],St.prototype,"open",2);m([_({reflect:!0})],St.prototype,"label",2);m([_({attribute:"no-header",type:Boolean,reflect:!0})],St.prototype,"noHeader",2);m([te("open",{waitUntilFirstUpdate:!0})],St.prototype,"handleOpenChange",1);Ge("dialog.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}});Ge("dialog.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}});Ge("dialog.denyClose",{keyframes:[{scale:1},{scale:1.02},{scale:1}],options:{duration:250}});Ge("dialog.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}});Ge("dialog.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}});St.define("sl-dialog");var Sf=ee`
  :host {
    --indicator-color: var(--sl-color-primary-600);
    --track-color: var(--sl-color-neutral-200);
    --track-width: 2px;

    display: block;
  }

  .tab-group {
    display: flex;
    border-radius: 0;
  }

  .tab-group__tabs {
    display: flex;
    position: relative;
  }

  .tab-group__indicator {
    position: absolute;
    transition:
      var(--sl-transition-fast) translate ease,
      var(--sl-transition-fast) width ease;
  }

  .tab-group--has-scroll-controls .tab-group__nav-container {
    position: relative;
    padding: 0 var(--sl-spacing-x-large);
  }

  .tab-group--has-scroll-controls .tab-group__scroll-button--start--hidden,
  .tab-group--has-scroll-controls .tab-group__scroll-button--end--hidden {
    visibility: hidden;
  }

  .tab-group__body {
    display: block;
    overflow: auto;
  }

  .tab-group__scroll-button {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    width: var(--sl-spacing-x-large);
  }

  .tab-group__scroll-button--start {
    left: 0;
  }

  .tab-group__scroll-button--end {
    right: 0;
  }

  .tab-group--rtl .tab-group__scroll-button--start {
    left: auto;
    right: 0;
  }

  .tab-group--rtl .tab-group__scroll-button--end {
    left: 0;
    right: auto;
  }

  /*
   * Top
   */

  .tab-group--top {
    flex-direction: column;
  }

  .tab-group--top .tab-group__nav-container {
    order: 1;
  }

  .tab-group--top .tab-group__nav {
    display: flex;
    overflow-x: auto;

    /* Hide scrollbar in Firefox */
    scrollbar-width: none;
  }

  /* Hide scrollbar in Chrome/Safari */
  .tab-group--top .tab-group__nav::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  .tab-group--top .tab-group__tabs {
    flex: 1 1 auto;
    position: relative;
    flex-direction: row;
    border-bottom: solid var(--track-width) var(--track-color);
  }

  .tab-group--top .tab-group__indicator {
    bottom: calc(-1 * var(--track-width));
    border-bottom: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--top .tab-group__body {
    order: 2;
  }

  .tab-group--top ::slotted(sl-tab-panel) {
    --padding: var(--sl-spacing-medium) 0;
  }

  /*
   * Bottom
   */

  .tab-group--bottom {
    flex-direction: column;
  }

  .tab-group--bottom .tab-group__nav-container {
    order: 2;
  }

  .tab-group--bottom .tab-group__nav {
    display: flex;
    overflow-x: auto;

    /* Hide scrollbar in Firefox */
    scrollbar-width: none;
  }

  /* Hide scrollbar in Chrome/Safari */
  .tab-group--bottom .tab-group__nav::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  .tab-group--bottom .tab-group__tabs {
    flex: 1 1 auto;
    position: relative;
    flex-direction: row;
    border-top: solid var(--track-width) var(--track-color);
  }

  .tab-group--bottom .tab-group__indicator {
    top: calc(-1 * var(--track-width));
    border-top: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--bottom .tab-group__body {
    order: 1;
  }

  .tab-group--bottom ::slotted(sl-tab-panel) {
    --padding: var(--sl-spacing-medium) 0;
  }

  /*
   * Start
   */

  .tab-group--start {
    flex-direction: row;
  }

  .tab-group--start .tab-group__nav-container {
    order: 1;
  }

  .tab-group--start .tab-group__tabs {
    flex: 0 0 auto;
    flex-direction: column;
    border-inline-end: solid var(--track-width) var(--track-color);
  }

  .tab-group--start .tab-group__indicator {
    right: calc(-1 * var(--track-width));
    border-right: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--start.tab-group--rtl .tab-group__indicator {
    right: auto;
    left: calc(-1 * var(--track-width));
  }

  .tab-group--start .tab-group__body {
    flex: 1 1 auto;
    order: 2;
  }

  .tab-group--start ::slotted(sl-tab-panel) {
    --padding: 0 var(--sl-spacing-medium);
  }

  /*
   * End
   */

  .tab-group--end {
    flex-direction: row;
  }

  .tab-group--end .tab-group__nav-container {
    order: 2;
  }

  .tab-group--end .tab-group__tabs {
    flex: 0 0 auto;
    flex-direction: column;
    border-left: solid var(--track-width) var(--track-color);
  }

  .tab-group--end .tab-group__indicator {
    left: calc(-1 * var(--track-width));
    border-inline-start: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--end.tab-group--rtl .tab-group__indicator {
    right: calc(-1 * var(--track-width));
    left: auto;
  }

  .tab-group--end .tab-group__body {
    flex: 1 1 auto;
    order: 1;
  }

  .tab-group--end ::slotted(sl-tab-panel) {
    --padding: 0 var(--sl-spacing-medium);
  }
`,Ef=ee`
  :host {
    display: contents;
  }
`,Qi=class extends ce{constructor(){super(...arguments),this.observedElements=[],this.disabled=!1}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(e=>{this.emit("sl-resize",{detail:{entries:e}})}),this.disabled||this.startObserver()}disconnectedCallback(){super.disconnectedCallback(),this.stopObserver()}handleSlotChange(){this.disabled||this.startObserver()}startObserver(){const e=this.shadowRoot.querySelector("slot");if(e!==null){const t=e.assignedElements({flatten:!0});this.observedElements.forEach(s=>this.resizeObserver.unobserve(s)),this.observedElements=[],t.forEach(s=>{this.resizeObserver.observe(s),this.observedElements.push(s)})}}stopObserver(){this.resizeObserver.disconnect()}handleDisabledChange(){this.disabled?this.stopObserver():this.startObserver()}render(){return A` <slot @slotchange=${this.handleSlotChange}></slot> `}};Qi.styles=[ge,Ef];m([_({type:Boolean,reflect:!0})],Qi.prototype,"disabled",2);m([te("disabled",{waitUntilFirstUpdate:!0})],Qi.prototype,"handleDisabledChange",1);var Oe=class extends ce{constructor(){super(...arguments),this.tabs=[],this.focusableTabs=[],this.panels=[],this.localize=new Ve(this),this.hasScrollControls=!1,this.shouldHideScrollStartButton=!1,this.shouldHideScrollEndButton=!1,this.placement="top",this.activation="auto",this.noScrollControls=!1,this.fixedScrollControls=!1,this.scrollOffset=1}connectedCallback(){const e=Promise.all([customElements.whenDefined("sl-tab"),customElements.whenDefined("sl-tab-panel")]);super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>{this.repositionIndicator(),this.updateScrollControls()}),this.mutationObserver=new MutationObserver(t=>{const s=t.filter(({target:r})=>{if(r===this)return!0;if(r.closest("sl-tab-group")!==this)return!1;const i=r.tagName.toLowerCase();return i==="sl-tab"||i==="sl-tab-panel"});if(s.length!==0){if(s.some(r=>!["aria-labelledby","aria-controls"].includes(r.attributeName))&&setTimeout(()=>this.setAriaLabels()),s.some(r=>r.attributeName==="disabled"))this.syncTabsAndPanels();else if(s.some(r=>r.attributeName==="active")){const i=s.filter(o=>o.attributeName==="active"&&o.target.tagName.toLowerCase()==="sl-tab").map(o=>o.target).find(o=>o.active);i&&this.setActiveTab(i)}}}),this.updateComplete.then(()=>{this.syncTabsAndPanels(),this.mutationObserver.observe(this,{attributes:!0,attributeFilter:["active","disabled","name","panel"],childList:!0,subtree:!0}),this.resizeObserver.observe(this.nav),e.then(()=>{new IntersectionObserver((s,r)=>{var i;s[0].intersectionRatio>0&&(this.setAriaLabels(),this.setActiveTab((i=this.getActiveTab())!=null?i:this.tabs[0],{emitEvents:!1}),r.unobserve(s[0].target))}).observe(this.tabGroup)})})}disconnectedCallback(){var e,t;super.disconnectedCallback(),(e=this.mutationObserver)==null||e.disconnect(),this.nav&&((t=this.resizeObserver)==null||t.unobserve(this.nav))}getAllTabs(){return this.shadowRoot.querySelector('slot[name="nav"]').assignedElements()}getAllPanels(){return[...this.body.assignedElements()].filter(e=>e.tagName.toLowerCase()==="sl-tab-panel")}getActiveTab(){return this.tabs.find(e=>e.active)}handleClick(e){const s=e.target.closest("sl-tab");(s==null?void 0:s.closest("sl-tab-group"))===this&&s!==null&&this.setActiveTab(s,{scrollBehavior:"smooth"})}handleKeyDown(e){const s=e.target.closest("sl-tab");if((s==null?void 0:s.closest("sl-tab-group"))===this&&(["Enter"," "].includes(e.key)&&s!==null&&(this.setActiveTab(s,{scrollBehavior:"smooth"}),e.preventDefault()),["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(e.key))){const i=this.tabs.find(a=>a.matches(":focus")),o=this.localize.dir()==="rtl";let n=null;if((i==null?void 0:i.tagName.toLowerCase())==="sl-tab"){if(e.key==="Home")n=this.focusableTabs[0];else if(e.key==="End")n=this.focusableTabs[this.focusableTabs.length-1];else if(["top","bottom"].includes(this.placement)&&e.key===(o?"ArrowRight":"ArrowLeft")||["start","end"].includes(this.placement)&&e.key==="ArrowUp"){const a=this.tabs.findIndex(l=>l===i);n=this.findNextFocusableTab(a,"backward")}else if(["top","bottom"].includes(this.placement)&&e.key===(o?"ArrowLeft":"ArrowRight")||["start","end"].includes(this.placement)&&e.key==="ArrowDown"){const a=this.tabs.findIndex(l=>l===i);n=this.findNextFocusableTab(a,"forward")}if(!n)return;n.tabIndex=0,n.focus({preventScroll:!0}),this.activation==="auto"?this.setActiveTab(n,{scrollBehavior:"smooth"}):this.tabs.forEach(a=>{a.tabIndex=a===n?0:-1}),["top","bottom"].includes(this.placement)&&fn(n,this.nav,"horizontal"),e.preventDefault()}}}handleScrollToStart(){this.nav.scroll({left:this.localize.dir()==="rtl"?this.nav.scrollLeft+this.nav.clientWidth:this.nav.scrollLeft-this.nav.clientWidth,behavior:"smooth"})}handleScrollToEnd(){this.nav.scroll({left:this.localize.dir()==="rtl"?this.nav.scrollLeft-this.nav.clientWidth:this.nav.scrollLeft+this.nav.clientWidth,behavior:"smooth"})}setActiveTab(e,t){if(t=Jt({emitEvents:!0,scrollBehavior:"auto"},t),e!==this.activeTab&&!e.disabled){const s=this.activeTab;this.activeTab=e,this.tabs.forEach(r=>{r.active=r===this.activeTab,r.tabIndex=r===this.activeTab?0:-1}),this.panels.forEach(r=>{var i;return r.active=r.name===((i=this.activeTab)==null?void 0:i.panel)}),this.syncIndicator(),["top","bottom"].includes(this.placement)&&fn(this.activeTab,this.nav,"horizontal",t.scrollBehavior),t.emitEvents&&(s&&this.emit("sl-tab-hide",{detail:{name:s.panel}}),this.emit("sl-tab-show",{detail:{name:this.activeTab.panel}}))}}setAriaLabels(){this.tabs.forEach(e=>{const t=this.panels.find(s=>s.name===e.panel);t&&(e.setAttribute("aria-controls",t.getAttribute("id")),t.setAttribute("aria-labelledby",e.getAttribute("id")))})}repositionIndicator(){const e=this.getActiveTab();if(!e)return;const t=e.clientWidth,s=e.clientHeight,r=this.localize.dir()==="rtl",i=this.getAllTabs(),n=i.slice(0,i.indexOf(e)).reduce((a,l)=>({left:a.left+l.clientWidth,top:a.top+l.clientHeight}),{left:0,top:0});switch(this.placement){case"top":case"bottom":this.indicator.style.width=`${t}px`,this.indicator.style.height="auto",this.indicator.style.translate=r?`${-1*n.left}px`:`${n.left}px`;break;case"start":case"end":this.indicator.style.width="auto",this.indicator.style.height=`${s}px`,this.indicator.style.translate=`0 ${n.top}px`;break}}syncTabsAndPanels(){this.tabs=this.getAllTabs(),this.focusableTabs=this.tabs.filter(e=>!e.disabled),this.panels=this.getAllPanels(),this.syncIndicator(),this.updateComplete.then(()=>this.updateScrollControls())}findNextFocusableTab(e,t){let s=null;const r=t==="forward"?1:-1;let i=e+r;for(;e<this.tabs.length;){if(s=this.tabs[i]||null,s===null){t==="forward"?s=this.focusableTabs[0]:s=this.focusableTabs[this.focusableTabs.length-1];break}if(!s.disabled)break;i+=r}return s}updateScrollButtons(){this.hasScrollControls&&!this.fixedScrollControls&&(this.shouldHideScrollStartButton=this.scrollFromStart()<=this.scrollOffset,this.shouldHideScrollEndButton=this.isScrolledToEnd())}isScrolledToEnd(){return this.scrollFromStart()+this.nav.clientWidth>=this.nav.scrollWidth-this.scrollOffset}scrollFromStart(){return this.localize.dir()==="rtl"?-this.nav.scrollLeft:this.nav.scrollLeft}updateScrollControls(){this.noScrollControls?this.hasScrollControls=!1:this.hasScrollControls=["top","bottom"].includes(this.placement)&&this.nav.scrollWidth>this.nav.clientWidth+1,this.updateScrollButtons()}syncIndicator(){this.getActiveTab()?(this.indicator.style.display="block",this.repositionIndicator()):this.indicator.style.display="none"}show(e){const t=this.tabs.find(s=>s.panel===e);t&&this.setActiveTab(t,{scrollBehavior:"smooth"})}render(){const e=this.localize.dir()==="rtl";return A`
      <div
        part="base"
        class=${ue({"tab-group":!0,"tab-group--top":this.placement==="top","tab-group--bottom":this.placement==="bottom","tab-group--start":this.placement==="start","tab-group--end":this.placement==="end","tab-group--rtl":this.localize.dir()==="rtl","tab-group--has-scroll-controls":this.hasScrollControls})}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
      >
        <div class="tab-group__nav-container" part="nav">
          ${this.hasScrollControls?A`
                <sl-icon-button
                  part="scroll-button scroll-button--start"
                  exportparts="base:scroll-button__base"
                  class=${ue({"tab-group__scroll-button":!0,"tab-group__scroll-button--start":!0,"tab-group__scroll-button--start--hidden":this.shouldHideScrollStartButton})}
                  name=${e?"chevron-right":"chevron-left"}
                  library="system"
                  tabindex="-1"
                  aria-hidden="true"
                  label=${this.localize.term("scrollToStart")}
                  @click=${this.handleScrollToStart}
                ></sl-icon-button>
              `:""}

          <div class="tab-group__nav" @scrollend=${this.updateScrollButtons}>
            <div part="tabs" class="tab-group__tabs" role="tablist">
              <div part="active-tab-indicator" class="tab-group__indicator"></div>
              <sl-resize-observer @sl-resize=${this.syncIndicator}>
                <slot name="nav" @slotchange=${this.syncTabsAndPanels}></slot>
              </sl-resize-observer>
            </div>
          </div>

          ${this.hasScrollControls?A`
                <sl-icon-button
                  part="scroll-button scroll-button--end"
                  exportparts="base:scroll-button__base"
                  class=${ue({"tab-group__scroll-button":!0,"tab-group__scroll-button--end":!0,"tab-group__scroll-button--end--hidden":this.shouldHideScrollEndButton})}
                  name=${e?"chevron-left":"chevron-right"}
                  library="system"
                  tabindex="-1"
                  aria-hidden="true"
                  label=${this.localize.term("scrollToEnd")}
                  @click=${this.handleScrollToEnd}
                ></sl-icon-button>
              `:""}
        </div>

        <slot part="body" class="tab-group__body" @slotchange=${this.syncTabsAndPanels}></slot>
      </div>
    `}};Oe.styles=[ge,Sf];Oe.dependencies={"sl-icon-button":Se,"sl-resize-observer":Qi};m([re(".tab-group")],Oe.prototype,"tabGroup",2);m([re(".tab-group__body")],Oe.prototype,"body",2);m([re(".tab-group__nav")],Oe.prototype,"nav",2);m([re(".tab-group__indicator")],Oe.prototype,"indicator",2);m([B()],Oe.prototype,"hasScrollControls",2);m([B()],Oe.prototype,"shouldHideScrollStartButton",2);m([B()],Oe.prototype,"shouldHideScrollEndButton",2);m([_()],Oe.prototype,"placement",2);m([_()],Oe.prototype,"activation",2);m([_({attribute:"no-scroll-controls",type:Boolean})],Oe.prototype,"noScrollControls",2);m([_({attribute:"fixed-scroll-controls",type:Boolean})],Oe.prototype,"fixedScrollControls",2);m([Vh({passive:!0})],Oe.prototype,"updateScrollButtons",1);m([te("noScrollControls",{waitUntilFirstUpdate:!0})],Oe.prototype,"updateScrollControls",1);m([te("placement",{waitUntilFirstUpdate:!0})],Oe.prototype,"syncIndicator",1);Oe.define("sl-tab-group");var Cf=(e,t)=>{let s=0;return function(...r){window.clearTimeout(s),s=window.setTimeout(()=>{e.call(this,...r)},t)}},Kl=(e,t,s)=>{const r=e[t];e[t]=function(...i){r.call(this,...i),s.call(this,r,...i)}};(()=>{if(typeof window>"u")return;if(!("onscrollend"in window)){const t=new Set,s=new WeakMap,r=o=>{for(const n of o.changedTouches)t.add(n.identifier)},i=o=>{for(const n of o.changedTouches)t.delete(n.identifier)};document.addEventListener("touchstart",r,!0),document.addEventListener("touchend",i,!0),document.addEventListener("touchcancel",i,!0),Kl(EventTarget.prototype,"addEventListener",function(o,n){if(n!=="scrollend")return;const a=Cf(()=>{t.size?a():this.dispatchEvent(new Event("scrollend"))},100);o.call(this,"scroll",a,{passive:!0}),s.set(this,a)}),Kl(EventTarget.prototype,"removeEventListener",function(o,n){if(n!=="scrollend")return;const a=s.get(this);a&&o.call(this,"scroll",a,{passive:!0})})}})();var Af=ee`
  :host {
    display: inline-block;
  }

  .tab {
    display: inline-flex;
    align-items: center;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    border-radius: var(--sl-border-radius-medium);
    color: var(--sl-color-neutral-600);
    padding: var(--sl-spacing-medium) var(--sl-spacing-large);
    white-space: nowrap;
    user-select: none;
    -webkit-user-select: none;
    cursor: pointer;
    transition:
      var(--transition-speed) box-shadow,
      var(--transition-speed) color;
  }

  .tab:hover:not(.tab--disabled) {
    color: var(--sl-color-primary-600);
  }

  :host(:focus) {
    outline: transparent;
  }

  :host(:focus-visible) {
    color: var(--sl-color-primary-600);
    outline: var(--sl-focus-ring);
    outline-offset: calc(-1 * var(--sl-focus-ring-width) - var(--sl-focus-ring-offset));
  }

  .tab.tab--active:not(.tab--disabled) {
    color: var(--sl-color-primary-600);
  }

  .tab.tab--closable {
    padding-inline-end: var(--sl-spacing-small);
  }

  .tab.tab--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .tab__close-button {
    font-size: var(--sl-font-size-small);
    margin-inline-start: var(--sl-spacing-small);
  }

  .tab__close-button::part(base) {
    padding: var(--sl-spacing-3x-small);
  }

  @media (forced-colors: active) {
    .tab.tab--active:not(.tab--disabled) {
      outline: solid 1px transparent;
      outline-offset: -3px;
    }
  }
`,Pf=0,pt=class extends ce{constructor(){super(...arguments),this.localize=new Ve(this),this.attrId=++Pf,this.componentId=`sl-tab-${this.attrId}`,this.panel="",this.active=!1,this.closable=!1,this.disabled=!1,this.tabIndex=0}connectedCallback(){super.connectedCallback(),this.setAttribute("role","tab")}handleCloseClick(e){e.stopPropagation(),this.emit("sl-close")}handleActiveChange(){this.setAttribute("aria-selected",this.active?"true":"false")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false"),this.disabled&&!this.active?this.tabIndex=-1:this.tabIndex=0}render(){return this.id=this.id.length>0?this.id:this.componentId,A`
      <div
        part="base"
        class=${ue({tab:!0,"tab--active":this.active,"tab--closable":this.closable,"tab--disabled":this.disabled})}
      >
        <slot></slot>
        ${this.closable?A`
              <sl-icon-button
                part="close-button"
                exportparts="base:close-button__base"
                name="x-lg"
                library="system"
                label=${this.localize.term("close")}
                class="tab__close-button"
                @click=${this.handleCloseClick}
                tabindex="-1"
              ></sl-icon-button>
            `:""}
      </div>
    `}};pt.styles=[ge,Af];pt.dependencies={"sl-icon-button":Se};m([re(".tab")],pt.prototype,"tab",2);m([_({reflect:!0})],pt.prototype,"panel",2);m([_({type:Boolean,reflect:!0})],pt.prototype,"active",2);m([_({type:Boolean,reflect:!0})],pt.prototype,"closable",2);m([_({type:Boolean,reflect:!0})],pt.prototype,"disabled",2);m([_({type:Number,reflect:!0})],pt.prototype,"tabIndex",2);m([te("active")],pt.prototype,"handleActiveChange",1);m([te("disabled")],pt.prototype,"handleDisabledChange",1);pt.define("sl-tab");var Of=ee`
  :host {
    --padding: 0;

    display: none;
  }

  :host([active]) {
    display: block;
  }

  .tab-panel {
    display: block;
    padding: var(--padding);
  }
`,Tf=0,Ur=class extends ce{constructor(){super(...arguments),this.attrId=++Tf,this.componentId=`sl-tab-panel-${this.attrId}`,this.name="",this.active=!1}connectedCallback(){super.connectedCallback(),this.id=this.id.length>0?this.id:this.componentId,this.setAttribute("role","tabpanel")}handleActiveChange(){this.setAttribute("aria-hidden",this.active?"false":"true")}render(){return A`
      <slot
        part="base"
        class=${ue({"tab-panel":!0,"tab-panel--active":this.active})}
      ></slot>
    `}};Ur.styles=[ge,Of];m([_({reflect:!0})],Ur.prototype,"name",2);m([_({type:Boolean,reflect:!0})],Ur.prototype,"active",2);m([te("active")],Ur.prototype,"handleActiveChange",1);Ur.define("sl-tab-panel");Re.define("sl-icon");Se.define("sl-icon-button");var Nf=ee`
  :host {
    --max-width: 20rem;
    --hide-delay: 0ms;
    --show-delay: 150ms;

    display: contents;
  }

  .tooltip {
    --arrow-size: var(--sl-tooltip-arrow-size);
    --arrow-color: var(--sl-tooltip-background-color);
  }

  .tooltip::part(popup) {
    z-index: var(--sl-z-index-tooltip);
  }

  .tooltip[placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .tooltip[placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .tooltip[placement^='left']::part(popup) {
    transform-origin: right;
  }

  .tooltip[placement^='right']::part(popup) {
    transform-origin: left;
  }

  .tooltip__body {
    display: block;
    width: max-content;
    max-width: var(--max-width);
    border-radius: var(--sl-tooltip-border-radius);
    background-color: var(--sl-tooltip-background-color);
    font-family: var(--sl-tooltip-font-family);
    font-size: var(--sl-tooltip-font-size);
    font-weight: var(--sl-tooltip-font-weight);
    line-height: var(--sl-tooltip-line-height);
    text-align: start;
    white-space: normal;
    color: var(--sl-tooltip-color);
    padding: var(--sl-tooltip-padding);
    pointer-events: none;
    user-select: none;
    -webkit-user-select: none;
  }
`,Te=class extends ce{constructor(){super(),this.localize=new Ve(this),this.content="",this.placement="top",this.disabled=!1,this.distance=8,this.open=!1,this.skidding=0,this.trigger="hover focus",this.hoist=!1,this.handleBlur=()=>{this.hasTrigger("focus")&&this.hide()},this.handleClick=()=>{this.hasTrigger("click")&&(this.open?this.hide():this.show())},this.handleFocus=()=>{this.hasTrigger("focus")&&this.show()},this.handleDocumentKeyDown=e=>{e.key==="Escape"&&(e.stopPropagation(),this.hide())},this.handleMouseOver=()=>{if(this.hasTrigger("hover")){const e=Ul(getComputedStyle(this).getPropertyValue("--show-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.show(),e)}},this.handleMouseOut=()=>{if(this.hasTrigger("hover")){const e=Ul(getComputedStyle(this).getPropertyValue("--hide-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.hide(),e)}},this.addEventListener("blur",this.handleBlur,!0),this.addEventListener("focus",this.handleFocus,!0),this.addEventListener("click",this.handleClick),this.addEventListener("mouseover",this.handleMouseOver),this.addEventListener("mouseout",this.handleMouseOut)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this.closeWatcher)==null||e.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown)}firstUpdated(){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition())}hasTrigger(e){return this.trigger.split(" ").includes(e)}async handleOpenChange(){var e,t;if(this.open){if(this.disabled)return;this.emit("sl-show"),"CloseWatcher"in window?((e=this.closeWatcher)==null||e.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide()}):document.addEventListener("keydown",this.handleDocumentKeyDown),await st(this.body),this.body.hidden=!1,this.popup.active=!0;const{keyframes:s,options:r}=Ue(this,"tooltip.show",{dir:this.localize.dir()});await He(this.popup.popup,s,r),this.popup.reposition(),this.emit("sl-after-show")}else{this.emit("sl-hide"),(t=this.closeWatcher)==null||t.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown),await st(this.body);const{keyframes:s,options:r}=Ue(this,"tooltip.hide",{dir:this.localize.dir()});await He(this.popup.popup,s,r),this.popup.active=!1,this.body.hidden=!0,this.emit("sl-after-hide")}}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}async show(){if(!this.open)return this.open=!0,_t(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,_t(this,"sl-after-hide")}render(){return A`
      <sl-popup
        part="base"
        exportparts="
          popup:base__popup,
          arrow:base__arrow
        "
        class=${ue({tooltip:!0,"tooltip--open":this.open})}
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        strategy=${this.hoist?"fixed":"absolute"}
        flip
        shift
        arrow
        hover-bridge
      >
        ${""}
        <slot slot="anchor" aria-describedby="tooltip"></slot>

        ${""}
        <div part="body" id="tooltip" class="tooltip__body" role="tooltip" aria-live=${this.open?"polite":"off"}>
          <slot name="content">${this.content}</slot>
        </div>
      </sl-popup>
    `}};Te.styles=[ge,Nf];Te.dependencies={"sl-popup":le};m([re("slot:not([name])")],Te.prototype,"defaultSlot",2);m([re(".tooltip__body")],Te.prototype,"body",2);m([re("sl-popup")],Te.prototype,"popup",2);m([_()],Te.prototype,"content",2);m([_()],Te.prototype,"placement",2);m([_({type:Boolean,reflect:!0})],Te.prototype,"disabled",2);m([_({type:Number})],Te.prototype,"distance",2);m([_({type:Boolean,reflect:!0})],Te.prototype,"open",2);m([_({type:Number})],Te.prototype,"skidding",2);m([_()],Te.prototype,"trigger",2);m([_({type:Boolean})],Te.prototype,"hoist",2);m([te("open",{waitUntilFirstUpdate:!0})],Te.prototype,"handleOpenChange",1);m([te(["content","distance","hoist","placement","skidding"])],Te.prototype,"handleOptionsChange",1);m([te("disabled")],Te.prototype,"handleDisabledChange",1);Ge("tooltip.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:150,easing:"ease"}});Ge("tooltip.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:150,easing:"ease"}});Te.define("sl-tooltip");var If=ee`
  :host {
    --divider-width: 4px;
    --divider-hit-area: 12px;
    --min: 0%;
    --max: 100%;

    display: grid;
  }

  .start,
  .end {
    overflow: hidden;
  }

  .divider {
    flex: 0 0 var(--divider-width);
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    background-color: var(--sl-color-neutral-200);
    color: var(--sl-color-neutral-900);
    z-index: 1;
  }

  .divider:focus {
    outline: none;
  }

  :host(:not([disabled])) .divider:focus-visible {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  :host([disabled]) .divider {
    cursor: not-allowed;
  }

  /* Horizontal */
  :host(:not([vertical], [disabled])) .divider {
    cursor: col-resize;
  }

  :host(:not([vertical])) .divider::after {
    display: flex;
    content: '';
    position: absolute;
    height: 100%;
    left: calc(var(--divider-hit-area) / -2 + var(--divider-width) / 2);
    width: var(--divider-hit-area);
  }

  /* Vertical */
  :host([vertical]) {
    flex-direction: column;
  }

  :host([vertical]:not([disabled])) .divider {
    cursor: row-resize;
  }

  :host([vertical]) .divider::after {
    content: '';
    position: absolute;
    width: 100%;
    top: calc(var(--divider-hit-area) / -2 + var(--divider-width) / 2);
    height: var(--divider-hit-area);
  }

  @media (forced-colors: active) {
    .divider {
      outline: solid 1px transparent;
    }
  }
`;function Rf(e,t){function s(i){const o=e.getBoundingClientRect(),n=e.ownerDocument.defaultView,a=o.left+n.scrollX,l=o.top+n.scrollY,c=i.pageX-a,u=i.pageY-l;t!=null&&t.onMove&&t.onMove(c,u)}function r(){document.removeEventListener("pointermove",s),document.removeEventListener("pointerup",r),t!=null&&t.onStop&&t.onStop()}document.addEventListener("pointermove",s,{passive:!0}),document.addEventListener("pointerup",r),(t==null?void 0:t.initialEvent)instanceof PointerEvent&&s(t.initialEvent)}function Wl(e,t,s){const r=i=>Object.is(i,-0)?0:i;return e<t?r(t):e>s?r(s):r(e)}var Gl=()=>null,Ye=class extends ce{constructor(){super(...arguments),this.isCollapsed=!1,this.localize=new Ve(this),this.positionBeforeCollapsing=0,this.position=50,this.vertical=!1,this.disabled=!1,this.snapValue="",this.snapFunction=Gl,this.snapThreshold=12}toSnapFunction(e){const t=e.split(" ");return({pos:s,size:r,snapThreshold:i,isRtl:o,vertical:n})=>{let a=s,l=Number.POSITIVE_INFINITY;return t.forEach(c=>{let u;if(c.startsWith("repeat(")){const p=e.substring(7,e.length-1),h=p.endsWith("%"),v=Number.parseFloat(p),f=h?r*(v/100):v;u=Math.round((o&&!n?r-s:s)/f)*f}else c.endsWith("%")?u=r*(Number.parseFloat(c)/100):u=Number.parseFloat(c);o&&!n&&(u=r-u);const d=Math.abs(s-u);d<=i&&d<l&&(a=u,l=d)}),a}}set snap(e){this.snapValue=e??"",e?this.snapFunction=typeof e=="string"?this.toSnapFunction(e):e:this.snapFunction=Gl}get snap(){return this.snapValue}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(e=>this.handleResize(e)),this.updateComplete.then(()=>this.resizeObserver.observe(this)),this.detectSize(),this.cachedPositionInPixels=this.percentageToPixels(this.position)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this.resizeObserver)==null||e.unobserve(this)}detectSize(){const{width:e,height:t}=this.getBoundingClientRect();this.size=this.vertical?t:e}percentageToPixels(e){return this.size*(e/100)}pixelsToPercentage(e){return e/this.size*100}handleDrag(e){const t=this.localize.dir()==="rtl";this.disabled||(e.cancelable&&e.preventDefault(),Rf(this,{onMove:(s,r)=>{var i;let o=this.vertical?r:s;this.primary==="end"&&(o=this.size-o),o=(i=this.snapFunction({pos:o,size:this.size,snapThreshold:this.snapThreshold,isRtl:t,vertical:this.vertical}))!=null?i:o,this.position=Wl(this.pixelsToPercentage(o),0,100)},initialEvent:e}))}handleKeyDown(e){if(!this.disabled&&["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End","Enter"].includes(e.key)){let t=this.position;const s=(e.shiftKey?10:1)*(this.primary==="end"?-1:1);if(e.preventDefault(),(e.key==="ArrowLeft"&&!this.vertical||e.key==="ArrowUp"&&this.vertical)&&(t-=s),(e.key==="ArrowRight"&&!this.vertical||e.key==="ArrowDown"&&this.vertical)&&(t+=s),e.key==="Home"&&(t=this.primary==="end"?100:0),e.key==="End"&&(t=this.primary==="end"?0:100),e.key==="Enter")if(this.isCollapsed)t=this.positionBeforeCollapsing,this.isCollapsed=!1;else{const r=this.position;t=0,requestAnimationFrame(()=>{this.isCollapsed=!0,this.positionBeforeCollapsing=r})}this.position=Wl(t,0,100)}}handleResize(e){const{width:t,height:s}=e[0].contentRect;this.size=this.vertical?s:t,(isNaN(this.cachedPositionInPixels)||this.position===1/0)&&(this.cachedPositionInPixels=Number(this.getAttribute("position-in-pixels")),this.positionInPixels=Number(this.getAttribute("position-in-pixels")),this.position=this.pixelsToPercentage(this.positionInPixels)),this.primary&&(this.position=this.pixelsToPercentage(this.cachedPositionInPixels))}handlePositionChange(){this.cachedPositionInPixels=this.percentageToPixels(this.position),this.isCollapsed=!1,this.positionBeforeCollapsing=0,this.positionInPixels=this.percentageToPixels(this.position),this.emit("sl-reposition")}handlePositionInPixelsChange(){this.position=this.pixelsToPercentage(this.positionInPixels)}handleVerticalChange(){this.detectSize()}render(){const e=this.vertical?"gridTemplateRows":"gridTemplateColumns",t=this.vertical?"gridTemplateColumns":"gridTemplateRows",s=this.localize.dir()==="rtl",r=`
      clamp(
        0%,
        clamp(
          var(--min),
          ${this.position}% - var(--divider-width) / 2,
          var(--max)
        ),
        calc(100% - var(--divider-width))
      )
    `,i="auto";return this.primary==="end"?s&&!this.vertical?this.style[e]=`${r} var(--divider-width) ${i}`:this.style[e]=`${i} var(--divider-width) ${r}`:s&&!this.vertical?this.style[e]=`${i} var(--divider-width) ${r}`:this.style[e]=`${r} var(--divider-width) ${i}`,this.style[t]="",A`
      <slot name="start" part="panel start" class="start"></slot>

      <div
        part="divider"
        class="divider"
        tabindex=${U(this.disabled?void 0:"0")}
        role="separator"
        aria-valuenow=${this.position}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-label=${this.localize.term("resize")}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleDrag}
        @touchstart=${this.handleDrag}
      >
        <slot name="divider"></slot>
      </div>

      <slot name="end" part="panel end" class="end"></slot>
    `}};Ye.styles=[ge,If];m([re(".divider")],Ye.prototype,"divider",2);m([_({type:Number,reflect:!0})],Ye.prototype,"position",2);m([_({attribute:"position-in-pixels",type:Number})],Ye.prototype,"positionInPixels",2);m([_({type:Boolean,reflect:!0})],Ye.prototype,"vertical",2);m([_({type:Boolean,reflect:!0})],Ye.prototype,"disabled",2);m([_()],Ye.prototype,"primary",2);m([_({reflect:!0})],Ye.prototype,"snap",1);m([_({type:Number,attribute:"snap-threshold"})],Ye.prototype,"snapThreshold",2);m([te("position")],Ye.prototype,"handlePositionChange",1);m([te("positionInPixels")],Ye.prototype,"handlePositionInPixelsChange",1);m([te("vertical")],Ye.prototype,"handleVerticalChange",1);Ye.define("sl-split-panel");var Df=ee`
  :host {
    --border-color: var(--sl-color-neutral-200);
    --border-radius: var(--sl-border-radius-medium);
    --border-width: 1px;
    --padding: var(--sl-spacing-large);

    display: inline-block;
  }

  .card {
    display: flex;
    flex-direction: column;
    background-color: var(--sl-panel-background-color);
    box-shadow: var(--sl-shadow-x-small);
    border: solid var(--border-width) var(--border-color);
    border-radius: var(--border-radius);
  }

  .card__image {
    display: flex;
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
    margin: calc(-1 * var(--border-width));
    overflow: hidden;
  }

  .card__image::slotted(img) {
    display: block;
    width: 100%;
  }

  .card:not(.card--has-image) .card__image {
    display: none;
  }

  .card__header {
    display: block;
    border-bottom: solid var(--border-width) var(--border-color);
    padding: calc(var(--padding) / 2) var(--padding);
  }

  .card:not(.card--has-header) .card__header {
    display: none;
  }

  .card:not(.card--has-image) .card__header {
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
  }

  .card__body {
    display: block;
    padding: var(--padding);
  }

  .card--has-footer .card__footer {
    display: block;
    border-top: solid var(--border-width) var(--border-color);
    padding: var(--padding);
  }

  .card:not(.card--has-footer) .card__footer {
    display: none;
  }
`,md=class extends ce{constructor(){super(...arguments),this.hasSlotController=new zt(this,"footer","header","image")}render(){return A`
      <div
        part="base"
        class=${ue({card:!0,"card--has-footer":this.hasSlotController.test("footer"),"card--has-image":this.hasSlotController.test("image"),"card--has-header":this.hasSlotController.test("header")})}
      >
        <slot name="image" part="image" class="card__image"></slot>
        <slot name="header" part="header" class="card__header"></slot>
        <slot part="body" class="card__body"></slot>
        <slot name="footer" part="footer" class="card__footer"></slot>
      </div>
    `}};md.styles=[ge,Df];md.define("sl-card");var zf=ee`
  :host {
    display: inline-flex;
  }

  .badge {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: max(12px, 0.75em);
    font-weight: var(--sl-font-weight-semibold);
    letter-spacing: var(--sl-letter-spacing-normal);
    line-height: 1;
    border-radius: var(--sl-border-radius-small);
    border: solid 1px var(--sl-color-neutral-0);
    white-space: nowrap;
    padding: 0.35em 0.6em;
    user-select: none;
    -webkit-user-select: none;
    cursor: inherit;
  }

  /* Variant modifiers */
  .badge--primary {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--success {
    background-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--neutral {
    background-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--warning {
    background-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--danger {
    background-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  /* Pill modifier */
  .badge--pill {
    border-radius: var(--sl-border-radius-pill);
  }

  /* Pulse modifier */
  .badge--pulse {
    animation: pulse 1.5s infinite;
  }

  .badge--pulse.badge--primary {
    --pulse-color: var(--sl-color-primary-600);
  }

  .badge--pulse.badge--success {
    --pulse-color: var(--sl-color-success-600);
  }

  .badge--pulse.badge--neutral {
    --pulse-color: var(--sl-color-neutral-600);
  }

  .badge--pulse.badge--warning {
    --pulse-color: var(--sl-color-warning-600);
  }

  .badge--pulse.badge--danger {
    --pulse-color: var(--sl-color-danger-600);
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 var(--pulse-color);
    }
    70% {
      box-shadow: 0 0 0 0.5rem transparent;
    }
    100% {
      box-shadow: 0 0 0 0 transparent;
    }
  }
`,Hr=class extends ce{constructor(){super(...arguments),this.variant="primary",this.pill=!1,this.pulse=!1}render(){return A`
      <span
        part="base"
        class=${ue({badge:!0,"badge--primary":this.variant==="primary","badge--success":this.variant==="success","badge--neutral":this.variant==="neutral","badge--warning":this.variant==="warning","badge--danger":this.variant==="danger","badge--pill":this.pill,"badge--pulse":this.pulse})}
        role="status"
      >
        <slot></slot>
      </span>
    `}};Hr.styles=[ge,zf];m([_({reflect:!0})],Hr.prototype,"variant",2);m([_({type:Boolean,reflect:!0})],Hr.prototype,"pill",2);m([_({type:Boolean,reflect:!0})],Hr.prototype,"pulse",2);Hr.define("sl-badge");var Lf=ee`
  :host {
    display: inline-block;
  }

  .dropdown::part(popup) {
    z-index: var(--sl-z-index-dropdown);
  }

  .dropdown[data-current-placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .dropdown[data-current-placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .dropdown[data-current-placement^='left']::part(popup) {
    transform-origin: right;
  }

  .dropdown[data-current-placement^='right']::part(popup) {
    transform-origin: left;
  }

  .dropdown__trigger {
    display: block;
  }

  .dropdown__panel {
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    box-shadow: var(--sl-shadow-large);
    border-radius: var(--sl-border-radius-medium);
    pointer-events: none;
  }

  .dropdown--open .dropdown__panel {
    display: block;
    pointer-events: all;
  }

  /* When users slot a menu, make sure it conforms to the popup's auto-size */
  ::slotted(sl-menu) {
    max-width: var(--auto-size-available-width) !important;
    max-height: var(--auto-size-available-height) !important;
  }
`,De=class extends ce{constructor(){super(...arguments),this.localize=new Ve(this),this.open=!1,this.placement="bottom-start",this.disabled=!1,this.stayOpenOnSelect=!1,this.distance=0,this.skidding=0,this.hoist=!1,this.sync=void 0,this.handleKeyDown=e=>{this.open&&e.key==="Escape"&&(e.stopPropagation(),this.hide(),this.focusOnTrigger())},this.handleDocumentKeyDown=e=>{var t;if(e.key==="Escape"&&this.open&&!this.closeWatcher){e.stopPropagation(),this.focusOnTrigger(),this.hide();return}if(e.key==="Tab"){if(this.open&&((t=document.activeElement)==null?void 0:t.tagName.toLowerCase())==="sl-menu-item"){e.preventDefault(),this.hide(),this.focusOnTrigger();return}const s=(r,i)=>{if(!r)return null;const o=r.closest(i);if(o)return o;const n=r.getRootNode();return n instanceof ShadowRoot?s(n.host,i):null};setTimeout(()=>{var r;const i=((r=this.containingElement)==null?void 0:r.getRootNode())instanceof ShadowRoot?hd():document.activeElement;(!this.containingElement||s(i,this.containingElement.tagName.toLowerCase())!==this.containingElement)&&this.hide()})}},this.handleDocumentMouseDown=e=>{const t=e.composedPath();this.containingElement&&!t.includes(this.containingElement)&&this.hide()},this.handlePanelSelect=e=>{const t=e.target;!this.stayOpenOnSelect&&t.tagName.toLowerCase()==="sl-menu"&&(this.hide(),this.focusOnTrigger())}}connectedCallback(){super.connectedCallback(),this.containingElement||(this.containingElement=this)}firstUpdated(){this.panel.hidden=!this.open,this.open&&(this.addOpenListeners(),this.popup.active=!0)}disconnectedCallback(){super.disconnectedCallback(),this.removeOpenListeners(),this.hide()}focusOnTrigger(){const e=this.trigger.assignedElements({flatten:!0})[0];typeof(e==null?void 0:e.focus)=="function"&&e.focus()}getMenu(){return this.panel.assignedElements({flatten:!0}).find(e=>e.tagName.toLowerCase()==="sl-menu")}handleTriggerClick(){this.open?this.hide():(this.show(),this.focusOnTrigger())}async handleTriggerKeyDown(e){if([" ","Enter"].includes(e.key)){e.preventDefault(),this.handleTriggerClick();return}const t=this.getMenu();if(t){const s=t.getAllItems(),r=s[0],i=s[s.length-1];["ArrowDown","ArrowUp","Home","End"].includes(e.key)&&(e.preventDefault(),this.open||(this.show(),await this.updateComplete),s.length>0&&this.updateComplete.then(()=>{(e.key==="ArrowDown"||e.key==="Home")&&(t.setCurrentItem(r),r.focus()),(e.key==="ArrowUp"||e.key==="End")&&(t.setCurrentItem(i),i.focus())}))}}handleTriggerKeyUp(e){e.key===" "&&e.preventDefault()}handleTriggerSlotChange(){this.updateAccessibleTrigger()}updateAccessibleTrigger(){const t=this.trigger.assignedElements({flatten:!0}).find(r=>_f(r).start);let s;if(t){switch(t.tagName.toLowerCase()){case"sl-button":case"sl-icon-button":s=t.button;break;default:s=t}s.setAttribute("aria-haspopup","true"),s.setAttribute("aria-expanded",this.open?"true":"false")}}async show(){if(!this.open)return this.open=!0,_t(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,_t(this,"sl-after-hide")}reposition(){this.popup.reposition()}addOpenListeners(){var e;this.panel.addEventListener("sl-select",this.handlePanelSelect),"CloseWatcher"in window?((e=this.closeWatcher)==null||e.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide(),this.focusOnTrigger()}):this.panel.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown)}removeOpenListeners(){var e;this.panel&&(this.panel.removeEventListener("sl-select",this.handlePanelSelect),this.panel.removeEventListener("keydown",this.handleKeyDown)),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown),(e=this.closeWatcher)==null||e.destroy()}async handleOpenChange(){if(this.disabled){this.open=!1;return}if(this.updateAccessibleTrigger(),this.open){this.emit("sl-show"),this.addOpenListeners(),await st(this),this.panel.hidden=!1,this.popup.active=!0;const{keyframes:e,options:t}=Ue(this,"dropdown.show",{dir:this.localize.dir()});await He(this.popup.popup,e,t),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),await st(this);const{keyframes:e,options:t}=Ue(this,"dropdown.hide",{dir:this.localize.dir()});await He(this.popup.popup,e,t),this.panel.hidden=!0,this.popup.active=!1,this.emit("sl-after-hide")}}render(){return A`
      <sl-popup
        part="base"
        exportparts="popup:base__popup"
        id="dropdown"
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        strategy=${this.hoist?"fixed":"absolute"}
        flip
        shift
        auto-size="vertical"
        auto-size-padding="10"
        sync=${U(this.sync?this.sync:void 0)}
        class=${ue({dropdown:!0,"dropdown--open":this.open})}
      >
        <slot
          name="trigger"
          slot="anchor"
          part="trigger"
          class="dropdown__trigger"
          @click=${this.handleTriggerClick}
          @keydown=${this.handleTriggerKeyDown}
          @keyup=${this.handleTriggerKeyUp}
          @slotchange=${this.handleTriggerSlotChange}
        ></slot>

        <div aria-hidden=${this.open?"false":"true"} aria-labelledby="dropdown">
          <slot part="panel" class="dropdown__panel"></slot>
        </div>
      </sl-popup>
    `}};De.styles=[ge,Lf];De.dependencies={"sl-popup":le};m([re(".dropdown")],De.prototype,"popup",2);m([re(".dropdown__trigger")],De.prototype,"trigger",2);m([re(".dropdown__panel")],De.prototype,"panel",2);m([_({type:Boolean,reflect:!0})],De.prototype,"open",2);m([_({reflect:!0})],De.prototype,"placement",2);m([_({type:Boolean,reflect:!0})],De.prototype,"disabled",2);m([_({attribute:"stay-open-on-select",type:Boolean,reflect:!0})],De.prototype,"stayOpenOnSelect",2);m([_({attribute:!1})],De.prototype,"containingElement",2);m([_({type:Number})],De.prototype,"distance",2);m([_({type:Number})],De.prototype,"skidding",2);m([_({type:Boolean})],De.prototype,"hoist",2);m([_({reflect:!0})],De.prototype,"sync",2);m([te("open",{waitUntilFirstUpdate:!0})],De.prototype,"handleOpenChange",1);Ge("dropdown.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}});Ge("dropdown.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}});De.define("sl-dropdown");var jf=ee`
  :host {
    display: block;
    position: relative;
    background: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-radius: var(--sl-border-radius-medium);
    padding: var(--sl-spacing-x-small) 0;
    overflow: auto;
    overscroll-behavior: none;
  }

  ::slotted(sl-divider) {
    --spacing: var(--sl-spacing-x-small);
  }
`,Qn=class extends ce{connectedCallback(){super.connectedCallback(),this.setAttribute("role","menu")}handleClick(e){const t=["menuitem","menuitemcheckbox"],s=e.composedPath(),r=s.find(a=>{var l;return t.includes(((l=a==null?void 0:a.getAttribute)==null?void 0:l.call(a,"role"))||"")});if(!r||s.find(a=>{var l;return((l=a==null?void 0:a.getAttribute)==null?void 0:l.call(a,"role"))==="menu"})!==this)return;const n=r;n.type==="checkbox"&&(n.checked=!n.checked),this.emit("sl-select",{detail:{item:n}})}handleKeyDown(e){if(e.key==="Enter"||e.key===" "){const t=this.getCurrentItem();e.preventDefault(),e.stopPropagation(),t==null||t.click()}else if(["ArrowDown","ArrowUp","Home","End"].includes(e.key)){const t=this.getAllItems(),s=this.getCurrentItem();let r=s?t.indexOf(s):0;t.length>0&&(e.preventDefault(),e.stopPropagation(),e.key==="ArrowDown"?r++:e.key==="ArrowUp"?r--:e.key==="Home"?r=0:e.key==="End"&&(r=t.length-1),r<0&&(r=t.length-1),r>t.length-1&&(r=0),this.setCurrentItem(t[r]),t[r].focus())}}handleMouseDown(e){const t=e.target;this.isMenuItem(t)&&this.setCurrentItem(t)}handleSlotChange(){const e=this.getAllItems();e.length>0&&this.setCurrentItem(e[0])}isMenuItem(e){var t;return e.tagName.toLowerCase()==="sl-menu-item"||["menuitem","menuitemcheckbox","menuitemradio"].includes((t=e.getAttribute("role"))!=null?t:"")}getAllItems(){return[...this.defaultSlot.assignedElements({flatten:!0})].filter(e=>!(e.inert||!this.isMenuItem(e)))}getCurrentItem(){return this.getAllItems().find(e=>e.getAttribute("tabindex")==="0")}setCurrentItem(e){this.getAllItems().forEach(s=>{s.setAttribute("tabindex",s===e?"0":"-1")})}render(){return A`
      <slot
        @slotchange=${this.handleSlotChange}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleMouseDown}
      ></slot>
    `}};Qn.styles=[ge,jf];m([re("slot")],Qn.prototype,"defaultSlot",2);Qn.define("sl-menu");var Mf=ee`
  :host {
    --submenu-offset: -2px;

    display: block;
  }

  :host([inert]) {
    display: none;
  }

  .menu-item {
    position: relative;
    display: flex;
    align-items: stretch;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-letter-spacing-normal);
    color: var(--sl-color-neutral-700);
    padding: var(--sl-spacing-2x-small) var(--sl-spacing-2x-small);
    transition: var(--sl-transition-fast) fill;
    user-select: none;
    -webkit-user-select: none;
    white-space: nowrap;
    cursor: pointer;
  }

  .menu-item.menu-item--disabled {
    outline: none;
    opacity: 0.5;
    cursor: not-allowed;
  }

  .menu-item.menu-item--loading {
    outline: none;
    cursor: wait;
  }

  .menu-item.menu-item--loading *:not(sl-spinner) {
    opacity: 0.5;
  }

  .menu-item--loading sl-spinner {
    --indicator-color: currentColor;
    --track-width: 1px;
    position: absolute;
    font-size: 0.75em;
    top: calc(50% - 0.5em);
    left: 0.65rem;
    opacity: 1;
  }

  .menu-item .menu-item__label {
    flex: 1 1 auto;
    display: inline-block;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  .menu-item .menu-item__prefix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .menu-item .menu-item__prefix::slotted(*) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .menu-item .menu-item__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .menu-item .menu-item__suffix::slotted(*) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  /* Safe triangle */
  .menu-item--submenu-expanded::after {
    content: '';
    position: fixed;
    z-index: calc(var(--sl-z-index-dropdown) - 1);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    clip-path: polygon(
      var(--safe-triangle-cursor-x, 0) var(--safe-triangle-cursor-y, 0),
      var(--safe-triangle-submenu-start-x, 0) var(--safe-triangle-submenu-start-y, 0),
      var(--safe-triangle-submenu-end-x, 0) var(--safe-triangle-submenu-end-y, 0)
    );
  }

  :host(:focus-visible) {
    outline: none;
  }

  :host(:hover:not([aria-disabled='true'], :focus-visible)) .menu-item,
  .menu-item--submenu-expanded {
    background-color: var(--sl-color-neutral-100);
    color: var(--sl-color-neutral-1000);
  }

  :host(:focus-visible) .menu-item {
    outline: none;
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
    opacity: 1;
  }

  .menu-item .menu-item__check,
  .menu-item .menu-item__chevron {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.5em;
    visibility: hidden;
  }

  .menu-item--checked .menu-item__check,
  .menu-item--has-submenu .menu-item__chevron {
    visibility: visible;
  }

  /* Add elevation and z-index to submenus */
  sl-popup::part(popup) {
    box-shadow: var(--sl-shadow-large);
    z-index: var(--sl-z-index-dropdown);
    margin-left: var(--submenu-offset);
  }

  .menu-item--rtl sl-popup::part(popup) {
    margin-left: calc(-1 * var(--submenu-offset));
  }

  @media (forced-colors: active) {
    :host(:hover:not([aria-disabled='true'])) .menu-item,
    :host(:focus-visible) .menu-item {
      outline: dashed 1px SelectedItem;
      outline-offset: -1px;
    }
  }

  ::slotted(sl-menu) {
    max-width: var(--auto-size-available-width) !important;
    max-height: var(--auto-size-available-height) !important;
  }
`;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const kr=(e,t)=>{var r;const s=e._$AN;if(s===void 0)return!1;for(const i of s)(r=i._$AO)==null||r.call(i,t,!1),kr(i,t);return!0},Ii=e=>{let t,s;do{if((t=e._$AM)===void 0)break;s=t._$AN,s.delete(e),e=t}while((s==null?void 0:s.size)===0)},gd=e=>{for(let t;t=e._$AM;e=t){let s=t._$AN;if(s===void 0)t._$AN=s=new Set;else if(s.has(e))break;s.add(e),Bf(t)}};function Ff(e){this._$AN!==void 0?(Ii(this),this._$AM=e,gd(this)):this._$AM=e}function Vf(e,t=!1,s=0){const r=this._$AH,i=this._$AN;if(i!==void 0&&i.size!==0)if(t)if(Array.isArray(r))for(let o=s;o<r.length;o++)kr(r[o],!1),Ii(r[o]);else r!=null&&(kr(r,!1),Ii(r));else kr(this,e)}const Bf=e=>{e.type==Et.CHILD&&(e._$AP??(e._$AP=Vf),e._$AQ??(e._$AQ=Ff))};class qf extends Hi{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,s,r){super._$AT(t,s,r),gd(this),this.isConnected=t._$AU}_$AO(t,s=!0){var r,i;t!==this.isConnected&&(this.isConnected=t,t?(r=this.reconnected)==null||r.call(this):(i=this.disconnected)==null||i.call(this)),s&&(kr(this,t),Ii(this))}setValue(t){if(Qc(this._$Ct))this._$Ct._$AI(t,this);else{const s=[...this._$Ct._$AH];s[this._$Ci]=t,this._$Ct._$AI(s,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Uf=()=>new Hf;class Hf{}const Wo=new WeakMap,Kf=Ui(class extends qf{render(e){return me}update(e,[t]){var r;const s=t!==this.G;return s&&this.G!==void 0&&this.rt(void 0),(s||this.lt!==this.ct)&&(this.G=t,this.ht=(r=e.options)==null?void 0:r.host,this.rt(this.ct=e.element)),me}rt(e){if(this.isConnected||(e=void 0),typeof this.G=="function"){const t=this.ht??globalThis;let s=Wo.get(t);s===void 0&&(s=new WeakMap,Wo.set(t,s)),s.get(this.G)!==void 0&&this.G.call(this.ht,void 0),s.set(this.G,e),e!==void 0&&this.G.call(this.ht,e)}else this.G.value=e}get lt(){var e,t;return typeof this.G=="function"?(e=Wo.get(this.ht??globalThis))==null?void 0:e.get(this.G):(t=this.G)==null?void 0:t.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});var Wf=class{constructor(e,t){this.popupRef=Uf(),this.enableSubmenuTimer=-1,this.isConnected=!1,this.isPopupConnected=!1,this.skidding=0,this.submenuOpenDelay=100,this.handleMouseMove=s=>{this.host.style.setProperty("--safe-triangle-cursor-x",`${s.clientX}px`),this.host.style.setProperty("--safe-triangle-cursor-y",`${s.clientY}px`)},this.handleMouseOver=()=>{this.hasSlotController.test("submenu")&&this.enableSubmenu()},this.handleKeyDown=s=>{switch(s.key){case"Escape":case"Tab":this.disableSubmenu();break;case"ArrowLeft":s.target!==this.host&&(s.preventDefault(),s.stopPropagation(),this.host.focus(),this.disableSubmenu());break;case"ArrowRight":case"Enter":case" ":this.handleSubmenuEntry(s);break}},this.handleClick=s=>{var r;s.target===this.host?(s.preventDefault(),s.stopPropagation()):s.target instanceof Element&&(s.target.tagName==="sl-menu-item"||(r=s.target.role)!=null&&r.startsWith("menuitem"))&&this.disableSubmenu()},this.handleFocusOut=s=>{s.relatedTarget&&s.relatedTarget instanceof Element&&this.host.contains(s.relatedTarget)||this.disableSubmenu()},this.handlePopupMouseover=s=>{s.stopPropagation()},this.handlePopupReposition=()=>{const s=this.host.renderRoot.querySelector("slot[name='submenu']"),r=s==null?void 0:s.assignedElements({flatten:!0}).filter(c=>c.localName==="sl-menu")[0],i=getComputedStyle(this.host).direction==="rtl";if(!r)return;const{left:o,top:n,width:a,height:l}=r.getBoundingClientRect();this.host.style.setProperty("--safe-triangle-submenu-start-x",`${i?o+a:o}px`),this.host.style.setProperty("--safe-triangle-submenu-start-y",`${n}px`),this.host.style.setProperty("--safe-triangle-submenu-end-x",`${i?o+a:o}px`),this.host.style.setProperty("--safe-triangle-submenu-end-y",`${n+l}px`)},(this.host=e).addController(this),this.hasSlotController=t}hostConnected(){this.hasSlotController.test("submenu")&&!this.host.disabled&&this.addListeners()}hostDisconnected(){this.removeListeners()}hostUpdated(){this.hasSlotController.test("submenu")&&!this.host.disabled?(this.addListeners(),this.updateSkidding()):this.removeListeners()}addListeners(){this.isConnected||(this.host.addEventListener("mousemove",this.handleMouseMove),this.host.addEventListener("mouseover",this.handleMouseOver),this.host.addEventListener("keydown",this.handleKeyDown),this.host.addEventListener("click",this.handleClick),this.host.addEventListener("focusout",this.handleFocusOut),this.isConnected=!0),this.isPopupConnected||this.popupRef.value&&(this.popupRef.value.addEventListener("mouseover",this.handlePopupMouseover),this.popupRef.value.addEventListener("sl-reposition",this.handlePopupReposition),this.isPopupConnected=!0)}removeListeners(){this.isConnected&&(this.host.removeEventListener("mousemove",this.handleMouseMove),this.host.removeEventListener("mouseover",this.handleMouseOver),this.host.removeEventListener("keydown",this.handleKeyDown),this.host.removeEventListener("click",this.handleClick),this.host.removeEventListener("focusout",this.handleFocusOut),this.isConnected=!1),this.isPopupConnected&&this.popupRef.value&&(this.popupRef.value.removeEventListener("mouseover",this.handlePopupMouseover),this.popupRef.value.removeEventListener("sl-reposition",this.handlePopupReposition),this.isPopupConnected=!1)}handleSubmenuEntry(e){const t=this.host.renderRoot.querySelector("slot[name='submenu']");if(!t){console.error("Cannot activate a submenu if no corresponding menuitem can be found.",this);return}let s=null;for(const r of t.assignedElements())if(s=r.querySelectorAll("sl-menu-item, [role^='menuitem']"),s.length!==0)break;if(!(!s||s.length===0)){s[0].setAttribute("tabindex","0");for(let r=1;r!==s.length;++r)s[r].setAttribute("tabindex","-1");this.popupRef.value&&(e.preventDefault(),e.stopPropagation(),this.popupRef.value.active?s[0]instanceof HTMLElement&&s[0].focus():(this.enableSubmenu(!1),this.host.updateComplete.then(()=>{s[0]instanceof HTMLElement&&s[0].focus()}),this.host.requestUpdate()))}}setSubmenuState(e){this.popupRef.value&&this.popupRef.value.active!==e&&(this.popupRef.value.active=e,this.host.requestUpdate())}enableSubmenu(e=!0){e?(window.clearTimeout(this.enableSubmenuTimer),this.enableSubmenuTimer=window.setTimeout(()=>{this.setSubmenuState(!0)},this.submenuOpenDelay)):this.setSubmenuState(!0)}disableSubmenu(){window.clearTimeout(this.enableSubmenuTimer),this.setSubmenuState(!1)}updateSkidding(){var e;if(!((e=this.host.parentElement)!=null&&e.computedStyleMap))return;const t=this.host.parentElement.computedStyleMap(),r=["padding-top","border-top-width","margin-top"].reduce((i,o)=>{var n;const a=(n=t.get(o))!=null?n:new CSSUnitValue(0,"px"),c=(a instanceof CSSUnitValue?a:new CSSUnitValue(0,"px")).to("px");return i-c.value},0);this.skidding=r}isExpanded(){return this.popupRef.value?this.popupRef.value.active:!1}renderSubmenu(){const e=getComputedStyle(this.host).direction==="rtl";return this.isConnected?A`
      <sl-popup
        ${Kf(this.popupRef)}
        placement=${e?"left-start":"right-start"}
        anchor="anchor"
        flip
        flip-fallback-strategy="best-fit"
        skidding="${this.skidding}"
        strategy="fixed"
        auto-size="vertical"
        auto-size-padding="10"
      >
        <slot name="submenu"></slot>
      </sl-popup>
    `:A` <slot name="submenu" hidden></slot> `}},Je=class extends ce{constructor(){super(...arguments),this.localize=new Ve(this),this.type="normal",this.checked=!1,this.value="",this.loading=!1,this.disabled=!1,this.hasSlotController=new zt(this,"submenu"),this.submenuController=new Wf(this,this.hasSlotController),this.handleHostClick=e=>{this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())},this.handleMouseOver=e=>{this.focus(),e.stopPropagation()}}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this.handleHostClick),this.addEventListener("mouseover",this.handleMouseOver)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this.handleHostClick),this.removeEventListener("mouseover",this.handleMouseOver)}handleDefaultSlotChange(){const e=this.getTextLabel();if(typeof this.cachedTextLabel>"u"){this.cachedTextLabel=e;return}e!==this.cachedTextLabel&&(this.cachedTextLabel=e,this.emit("slotchange",{bubbles:!0,composed:!1,cancelable:!1}))}handleCheckedChange(){if(this.checked&&this.type!=="checkbox"){this.checked=!1,console.error('The checked attribute can only be used on menu items with type="checkbox"',this);return}this.type==="checkbox"?this.setAttribute("aria-checked",this.checked?"true":"false"):this.removeAttribute("aria-checked")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleTypeChange(){this.type==="checkbox"?(this.setAttribute("role","menuitemcheckbox"),this.setAttribute("aria-checked",this.checked?"true":"false")):(this.setAttribute("role","menuitem"),this.removeAttribute("aria-checked"))}getTextLabel(){return Uh(this.defaultSlot)}isSubmenu(){return this.hasSlotController.test("submenu")}render(){const e=this.localize.dir()==="rtl",t=this.submenuController.isExpanded();return A`
      <div
        id="anchor"
        part="base"
        class=${ue({"menu-item":!0,"menu-item--rtl":e,"menu-item--checked":this.checked,"menu-item--disabled":this.disabled,"menu-item--loading":this.loading,"menu-item--has-submenu":this.isSubmenu(),"menu-item--submenu-expanded":t})}
        ?aria-haspopup="${this.isSubmenu()}"
        ?aria-expanded="${!!t}"
      >
        <span part="checked-icon" class="menu-item__check">
          <sl-icon name="check" library="system" aria-hidden="true"></sl-icon>
        </span>

        <slot name="prefix" part="prefix" class="menu-item__prefix"></slot>

        <slot part="label" class="menu-item__label" @slotchange=${this.handleDefaultSlotChange}></slot>

        <slot name="suffix" part="suffix" class="menu-item__suffix"></slot>

        <span part="submenu-icon" class="menu-item__chevron">
          <sl-icon name=${e?"chevron-left":"chevron-right"} library="system" aria-hidden="true"></sl-icon>
        </span>

        ${this.submenuController.renderSubmenu()}
        ${this.loading?A` <sl-spinner part="spinner" exportparts="base:spinner__base"></sl-spinner> `:""}
      </div>
    `}};Je.styles=[ge,Mf];Je.dependencies={"sl-icon":Re,"sl-popup":le,"sl-spinner":Un};m([re("slot:not([name])")],Je.prototype,"defaultSlot",2);m([re(".menu-item")],Je.prototype,"menuItem",2);m([_()],Je.prototype,"type",2);m([_({type:Boolean,reflect:!0})],Je.prototype,"checked",2);m([_()],Je.prototype,"value",2);m([_({type:Boolean,reflect:!0})],Je.prototype,"loading",2);m([_({type:Boolean,reflect:!0})],Je.prototype,"disabled",2);m([te("checked")],Je.prototype,"handleCheckedChange",1);m([te("disabled")],Je.prototype,"handleDisabledChange",1);m([te("type")],Je.prototype,"handleTypeChange",1);Je.define("sl-menu-item");var Gf=ee`
  :host {
    display: contents;

    /* For better DX, we'll reset the margin here so the base part can inherit it */
    margin: 0;
  }

  .alert {
    position: relative;
    display: flex;
    align-items: stretch;
    background-color: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-top-width: calc(var(--sl-panel-border-width) * 3);
    border-radius: var(--sl-border-radius-medium);
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-normal);
    line-height: 1.6;
    color: var(--sl-color-neutral-700);
    margin: inherit;
    overflow: hidden;
  }

  .alert:not(.alert--has-icon) .alert__icon,
  .alert:not(.alert--closable) .alert__close-button {
    display: none;
  }

  .alert__icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-large);
    padding-inline-start: var(--sl-spacing-large);
  }

  .alert--has-countdown {
    border-bottom: none;
  }

  .alert--primary {
    border-top-color: var(--sl-color-primary-600);
  }

  .alert--primary .alert__icon {
    color: var(--sl-color-primary-600);
  }

  .alert--success {
    border-top-color: var(--sl-color-success-600);
  }

  .alert--success .alert__icon {
    color: var(--sl-color-success-600);
  }

  .alert--neutral {
    border-top-color: var(--sl-color-neutral-600);
  }

  .alert--neutral .alert__icon {
    color: var(--sl-color-neutral-600);
  }

  .alert--warning {
    border-top-color: var(--sl-color-warning-600);
  }

  .alert--warning .alert__icon {
    color: var(--sl-color-warning-600);
  }

  .alert--danger {
    border-top-color: var(--sl-color-danger-600);
  }

  .alert--danger .alert__icon {
    color: var(--sl-color-danger-600);
  }

  .alert__message {
    flex: 1 1 auto;
    display: block;
    padding: var(--sl-spacing-large);
    overflow: hidden;
  }

  .alert__close-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-medium);
    margin-inline-end: var(--sl-spacing-medium);
    align-self: center;
  }

  .alert__countdown {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: calc(var(--sl-panel-border-width) * 3);
    background-color: var(--sl-panel-border-color);
    display: flex;
  }

  .alert__countdown--ltr {
    justify-content: flex-end;
  }

  .alert__countdown .alert__countdown-elapsed {
    height: 100%;
    width: 0;
  }

  .alert--primary .alert__countdown-elapsed {
    background-color: var(--sl-color-primary-600);
  }

  .alert--success .alert__countdown-elapsed {
    background-color: var(--sl-color-success-600);
  }

  .alert--neutral .alert__countdown-elapsed {
    background-color: var(--sl-color-neutral-600);
  }

  .alert--warning .alert__countdown-elapsed {
    background-color: var(--sl-color-warning-600);
  }

  .alert--danger .alert__countdown-elapsed {
    background-color: var(--sl-color-danger-600);
  }

  .alert__timer {
    display: none;
  }
`,Xe=class Zt extends ce{constructor(){super(...arguments),this.hasSlotController=new zt(this,"icon","suffix"),this.localize=new Ve(this),this.open=!1,this.closable=!1,this.variant="primary",this.duration=1/0,this.remainingTime=this.duration}static get toastStack(){return this.currentToastStack||(this.currentToastStack=Object.assign(document.createElement("div"),{className:"sl-toast-stack"})),this.currentToastStack}firstUpdated(){this.base.hidden=!this.open}restartAutoHide(){this.handleCountdownChange(),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval),this.open&&this.duration<1/0&&(this.autoHideTimeout=window.setTimeout(()=>this.hide(),this.duration),this.remainingTime=this.duration,this.remainingTimeInterval=window.setInterval(()=>{this.remainingTime-=100},100))}pauseAutoHide(){var t;(t=this.countdownAnimation)==null||t.pause(),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval)}resumeAutoHide(){var t;this.duration<1/0&&(this.autoHideTimeout=window.setTimeout(()=>this.hide(),this.remainingTime),this.remainingTimeInterval=window.setInterval(()=>{this.remainingTime-=100},100),(t=this.countdownAnimation)==null||t.play())}handleCountdownChange(){if(this.open&&this.duration<1/0&&this.countdown){const{countdownElement:t}=this,s="100%",r="0";this.countdownAnimation=t.animate([{width:s},{width:r}],{duration:this.duration,easing:"linear"})}}handleCloseClick(){this.hide()}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.duration<1/0&&this.restartAutoHide(),await st(this.base),this.base.hidden=!1;const{keyframes:t,options:s}=Ue(this,"alert.show",{dir:this.localize.dir()});await He(this.base,t,s),this.emit("sl-after-show")}else{fd(this),this.emit("sl-hide"),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval),await st(this.base);const{keyframes:t,options:s}=Ue(this,"alert.hide",{dir:this.localize.dir()});await He(this.base,t,s),this.base.hidden=!0,this.emit("sl-after-hide")}}handleDurationChange(){this.restartAutoHide()}async show(){if(!this.open)return this.open=!0,_t(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,_t(this,"sl-after-hide")}async toast(){return new Promise(t=>{this.handleCountdownChange(),Zt.toastStack.parentElement===null&&document.body.append(Zt.toastStack),Zt.toastStack.appendChild(this),requestAnimationFrame(()=>{this.clientWidth,this.show()}),this.addEventListener("sl-after-hide",()=>{Zt.toastStack.removeChild(this),t(),Zt.toastStack.querySelector("sl-alert")===null&&Zt.toastStack.remove()},{once:!0})})}render(){return A`
      <div
        part="base"
        class=${ue({alert:!0,"alert--open":this.open,"alert--closable":this.closable,"alert--has-countdown":!!this.countdown,"alert--has-icon":this.hasSlotController.test("icon"),"alert--primary":this.variant==="primary","alert--success":this.variant==="success","alert--neutral":this.variant==="neutral","alert--warning":this.variant==="warning","alert--danger":this.variant==="danger"})}
        role="alert"
        aria-hidden=${this.open?"false":"true"}
        @mouseenter=${this.pauseAutoHide}
        @mouseleave=${this.resumeAutoHide}
      >
        <div part="icon" class="alert__icon">
          <slot name="icon"></slot>
        </div>

        <div part="message" class="alert__message" aria-live="polite">
          <slot></slot>
        </div>

        ${this.closable?A`
              <sl-icon-button
                part="close-button"
                exportparts="base:close-button__base"
                class="alert__close-button"
                name="x-lg"
                library="system"
                label=${this.localize.term("close")}
                @click=${this.handleCloseClick}
              ></sl-icon-button>
            `:""}

        <div role="timer" class="alert__timer">${this.remainingTime}</div>

        ${this.countdown?A`
              <div
                class=${ue({alert__countdown:!0,"alert__countdown--ltr":this.countdown==="ltr"})}
              >
                <div class="alert__countdown-elapsed"></div>
              </div>
            `:""}
      </div>
    `}};Xe.styles=[ge,Gf];Xe.dependencies={"sl-icon-button":Se};m([re('[part~="base"]')],Xe.prototype,"base",2);m([re(".alert__countdown-elapsed")],Xe.prototype,"countdownElement",2);m([_({type:Boolean,reflect:!0})],Xe.prototype,"open",2);m([_({type:Boolean,reflect:!0})],Xe.prototype,"closable",2);m([_({reflect:!0})],Xe.prototype,"variant",2);m([_({type:Number})],Xe.prototype,"duration",2);m([_({type:String,reflect:!0})],Xe.prototype,"countdown",2);m([B()],Xe.prototype,"remainingTime",2);m([te("open",{waitUntilFirstUpdate:!0})],Xe.prototype,"handleOpenChange",1);m([te("duration")],Xe.prototype,"handleDurationChange",1);var Yf=Xe;Ge("alert.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}});Ge("alert.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}});Yf.define("sl-alert");un("https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.20/cdn");function yd(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var wn={exports:{}},Zn={},rt={},Bs={},Kr={},G={},Dr={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.regexpCode=e.getEsmExportName=e.getProperty=e.safeStringify=e.stringify=e.strConcat=e.addCodeArg=e.str=e._=e.nil=e._Code=e.Name=e.IDENTIFIER=e._CodeOrName=void 0;class t{}e._CodeOrName=t,e.IDENTIFIER=/^[a-z$_][a-z$_0-9]*$/i;class s extends t{constructor(w){if(super(),!e.IDENTIFIER.test(w))throw new Error("CodeGen: name must be a valid identifier");this.str=w}toString(){return this.str}emptyStr(){return!1}get names(){return{[this.str]:1}}}e.Name=s;class r extends t{constructor(w){super(),this._items=typeof w=="string"?[w]:w}toString(){return this.str}emptyStr(){if(this._items.length>1)return!1;const w=this._items[0];return w===""||w==='""'}get str(){var w;return(w=this._str)!==null&&w!==void 0?w:this._str=this._items.reduce((k,S)=>`${k}${S}`,"")}get names(){var w;return(w=this._names)!==null&&w!==void 0?w:this._names=this._items.reduce((k,S)=>(S instanceof s&&(k[S.str]=(k[S.str]||0)+1),k),{})}}e._Code=r,e.nil=new r("");function i(y,...w){const k=[y[0]];let S=0;for(;S<w.length;)a(k,w[S]),k.push(y[++S]);return new r(k)}e._=i;const o=new r("+");function n(y,...w){const k=[h(y[0])];let S=0;for(;S<w.length;)k.push(o),a(k,w[S]),k.push(o,h(y[++S]));return l(k),new r(k)}e.str=n;function a(y,w){w instanceof r?y.push(...w._items):w instanceof s?y.push(w):y.push(d(w))}e.addCodeArg=a;function l(y){let w=1;for(;w<y.length-1;){if(y[w]===o){const k=c(y[w-1],y[w+1]);if(k!==void 0){y.splice(w-1,3,k);continue}y[w++]="+"}w++}}function c(y,w){if(w==='""')return y;if(y==='""')return w;if(typeof y=="string")return w instanceof s||y[y.length-1]!=='"'?void 0:typeof w!="string"?`${y.slice(0,-1)}${w}"`:w[0]==='"'?y.slice(0,-1)+w.slice(1):void 0;if(typeof w=="string"&&w[0]==='"'&&!(y instanceof s))return`"${y}${w.slice(1)}`}function u(y,w){return w.emptyStr()?y:y.emptyStr()?w:n`${y}${w}`}e.strConcat=u;function d(y){return typeof y=="number"||typeof y=="boolean"||y===null?y:h(Array.isArray(y)?y.join(","):y)}function p(y){return new r(h(y))}e.stringify=p;function h(y){return JSON.stringify(y).replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029")}e.safeStringify=h;function v(y){return typeof y=="string"&&e.IDENTIFIER.test(y)?new r(`.${y}`):i`[${y}]`}e.getProperty=v;function f(y){if(typeof y=="string"&&e.IDENTIFIER.test(y))return new r(`${y}`);throw new Error(`CodeGen: invalid export name: ${y}, use explicit $id name mapping`)}e.getEsmExportName=f;function g(y){return new r(y.toString())}e.regexpCode=g})(Dr);var _n={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.ValueScope=e.ValueScopeName=e.Scope=e.varKinds=e.UsedValueState=void 0;const t=Dr;class s extends Error{constructor(c){super(`CodeGen: "code" for ${c} not defined`),this.value=c.value}}var r;(function(l){l[l.Started=0]="Started",l[l.Completed=1]="Completed"})(r||(e.UsedValueState=r={})),e.varKinds={const:new t.Name("const"),let:new t.Name("let"),var:new t.Name("var")};class i{constructor({prefixes:c,parent:u}={}){this._names={},this._prefixes=c,this._parent=u}toName(c){return c instanceof t.Name?c:this.name(c)}name(c){return new t.Name(this._newName(c))}_newName(c){const u=this._names[c]||this._nameGroup(c);return`${c}${u.index++}`}_nameGroup(c){var u,d;if(!((d=(u=this._parent)===null||u===void 0?void 0:u._prefixes)===null||d===void 0)&&d.has(c)||this._prefixes&&!this._prefixes.has(c))throw new Error(`CodeGen: prefix "${c}" is not allowed in this scope`);return this._names[c]={prefix:c,index:0}}}e.Scope=i;class o extends t.Name{constructor(c,u){super(u),this.prefix=c}setValue(c,{property:u,itemIndex:d}){this.value=c,this.scopePath=(0,t._)`.${new t.Name(u)}[${d}]`}}e.ValueScopeName=o;const n=(0,t._)`\n`;class a extends i{constructor(c){super(c),this._values={},this._scope=c.scope,this.opts={...c,_n:c.lines?n:t.nil}}get(){return this._scope}name(c){return new o(c,this._newName(c))}value(c,u){var d;if(u.ref===void 0)throw new Error("CodeGen: ref must be passed in value");const p=this.toName(c),{prefix:h}=p,v=(d=u.key)!==null&&d!==void 0?d:u.ref;let f=this._values[h];if(f){const w=f.get(v);if(w)return w}else f=this._values[h]=new Map;f.set(v,p);const g=this._scope[h]||(this._scope[h]=[]),y=g.length;return g[y]=u.ref,p.setValue(u,{property:h,itemIndex:y}),p}getValue(c,u){const d=this._values[c];if(d)return d.get(u)}scopeRefs(c,u=this._values){return this._reduceValues(u,d=>{if(d.scopePath===void 0)throw new Error(`CodeGen: name "${d}" has no value`);return(0,t._)`${c}${d.scopePath}`})}scopeCode(c=this._values,u,d){return this._reduceValues(c,p=>{if(p.value===void 0)throw new Error(`CodeGen: name "${p}" has no value`);return p.value.code},u,d)}_reduceValues(c,u,d={},p){let h=t.nil;for(const v in c){const f=c[v];if(!f)continue;const g=d[v]=d[v]||new Map;f.forEach(y=>{if(g.has(y))return;g.set(y,r.Started);let w=u(y);if(w){const k=this.opts.es5?e.varKinds.var:e.varKinds.const;h=(0,t._)`${h}${k} ${y} = ${w};${this.opts._n}`}else if(w=p==null?void 0:p(y))h=(0,t._)`${h}${w}${this.opts._n}`;else throw new s(y);g.set(y,r.Completed)})}return h}}e.ValueScope=a})(_n);(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.or=e.and=e.not=e.CodeGen=e.operators=e.varKinds=e.ValueScopeName=e.ValueScope=e.Scope=e.Name=e.regexpCode=e.stringify=e.getProperty=e.nil=e.strConcat=e.str=e._=void 0;const t=Dr,s=_n;var r=Dr;Object.defineProperty(e,"_",{enumerable:!0,get:function(){return r._}}),Object.defineProperty(e,"str",{enumerable:!0,get:function(){return r.str}}),Object.defineProperty(e,"strConcat",{enumerable:!0,get:function(){return r.strConcat}}),Object.defineProperty(e,"nil",{enumerable:!0,get:function(){return r.nil}}),Object.defineProperty(e,"getProperty",{enumerable:!0,get:function(){return r.getProperty}}),Object.defineProperty(e,"stringify",{enumerable:!0,get:function(){return r.stringify}}),Object.defineProperty(e,"regexpCode",{enumerable:!0,get:function(){return r.regexpCode}}),Object.defineProperty(e,"Name",{enumerable:!0,get:function(){return r.Name}});var i=_n;Object.defineProperty(e,"Scope",{enumerable:!0,get:function(){return i.Scope}}),Object.defineProperty(e,"ValueScope",{enumerable:!0,get:function(){return i.ValueScope}}),Object.defineProperty(e,"ValueScopeName",{enumerable:!0,get:function(){return i.ValueScopeName}}),Object.defineProperty(e,"varKinds",{enumerable:!0,get:function(){return i.varKinds}}),e.operators={GT:new t._Code(">"),GTE:new t._Code(">="),LT:new t._Code("<"),LTE:new t._Code("<="),EQ:new t._Code("==="),NEQ:new t._Code("!=="),NOT:new t._Code("!"),OR:new t._Code("||"),AND:new t._Code("&&"),ADD:new t._Code("+")};class o{optimizeNodes(){return this}optimizeNames(b,$){return this}}class n extends o{constructor(b,$,P){super(),this.varKind=b,this.name=$,this.rhs=P}render({es5:b,_n:$}){const P=b?s.varKinds.var:this.varKind,M=this.rhs===void 0?"":` = ${this.rhs}`;return`${P} ${this.name}${M};`+$}optimizeNames(b,$){if(b[this.name.str])return this.rhs&&(this.rhs=F(this.rhs,b,$)),this}get names(){return this.rhs instanceof t._CodeOrName?this.rhs.names:{}}}class a extends o{constructor(b,$,P){super(),this.lhs=b,this.rhs=$,this.sideEffects=P}render({_n:b}){return`${this.lhs} = ${this.rhs};`+b}optimizeNames(b,$){if(!(this.lhs instanceof t.Name&&!b[this.lhs.str]&&!this.sideEffects))return this.rhs=F(this.rhs,b,$),this}get names(){const b=this.lhs instanceof t.Name?{}:{...this.lhs.names};return W(b,this.rhs)}}class l extends a{constructor(b,$,P,M){super(b,P,M),this.op=$}render({_n:b}){return`${this.lhs} ${this.op}= ${this.rhs};`+b}}class c extends o{constructor(b){super(),this.label=b,this.names={}}render({_n:b}){return`${this.label}:`+b}}class u extends o{constructor(b){super(),this.label=b,this.names={}}render({_n:b}){return`break${this.label?` ${this.label}`:""};`+b}}class d extends o{constructor(b){super(),this.error=b}render({_n:b}){return`throw ${this.error};`+b}get names(){return this.error.names}}class p extends o{constructor(b){super(),this.code=b}render({_n:b}){return`${this.code};`+b}optimizeNodes(){return`${this.code}`?this:void 0}optimizeNames(b,$){return this.code=F(this.code,b,$),this}get names(){return this.code instanceof t._CodeOrName?this.code.names:{}}}class h extends o{constructor(b=[]){super(),this.nodes=b}render(b){return this.nodes.reduce(($,P)=>$+P.render(b),"")}optimizeNodes(){const{nodes:b}=this;let $=b.length;for(;$--;){const P=b[$].optimizeNodes();Array.isArray(P)?b.splice($,1,...P):P?b[$]=P:b.splice($,1)}return b.length>0?this:void 0}optimizeNames(b,$){const{nodes:P}=this;let M=P.length;for(;M--;){const V=P[M];V.optimizeNames(b,$)||(pe(b,V.names),P.splice(M,1))}return P.length>0?this:void 0}get names(){return this.nodes.reduce((b,$)=>L(b,$.names),{})}}class v extends h{render(b){return"{"+b._n+super.render(b)+"}"+b._n}}class f extends h{}class g extends v{}g.kind="else";class y extends v{constructor(b,$){super($),this.condition=b}render(b){let $=`if(${this.condition})`+super.render(b);return this.else&&($+="else "+this.else.render(b)),$}optimizeNodes(){super.optimizeNodes();const b=this.condition;if(b===!0)return this.nodes;let $=this.else;if($){const P=$.optimizeNodes();$=this.else=Array.isArray(P)?new g(P):P}if($)return b===!1?$ instanceof y?$:$.nodes:this.nodes.length?this:new y($e(b),$ instanceof y?[$]:$.nodes);if(!(b===!1||!this.nodes.length))return this}optimizeNames(b,$){var P;if(this.else=(P=this.else)===null||P===void 0?void 0:P.optimizeNames(b,$),!!(super.optimizeNames(b,$)||this.else))return this.condition=F(this.condition,b,$),this}get names(){const b=super.names;return W(b,this.condition),this.else&&L(b,this.else.names),b}}y.kind="if";class w extends v{}w.kind="for";class k extends w{constructor(b){super(),this.iteration=b}render(b){return`for(${this.iteration})`+super.render(b)}optimizeNames(b,$){if(super.optimizeNames(b,$))return this.iteration=F(this.iteration,b,$),this}get names(){return L(super.names,this.iteration.names)}}class S extends w{constructor(b,$,P,M){super(),this.varKind=b,this.name=$,this.from=P,this.to=M}render(b){const $=b.es5?s.varKinds.var:this.varKind,{name:P,from:M,to:V}=this;return`for(${$} ${P}=${M}; ${P}<${V}; ${P}++)`+super.render(b)}get names(){const b=W(super.names,this.from);return W(b,this.to)}}class C extends w{constructor(b,$,P,M){super(),this.loop=b,this.varKind=$,this.name=P,this.iterable=M}render(b){return`for(${this.varKind} ${this.name} ${this.loop} ${this.iterable})`+super.render(b)}optimizeNames(b,$){if(super.optimizeNames(b,$))return this.iterable=F(this.iterable,b,$),this}get names(){return L(super.names,this.iterable.names)}}class T extends v{constructor(b,$,P){super(),this.name=b,this.args=$,this.async=P}render(b){return`${this.async?"async ":""}function ${this.name}(${this.args})`+super.render(b)}}T.kind="func";class I extends h{render(b){return"return "+super.render(b)}}I.kind="return";class R extends v{render(b){let $="try"+super.render(b);return this.catch&&($+=this.catch.render(b)),this.finally&&($+=this.finally.render(b)),$}optimizeNodes(){var b,$;return super.optimizeNodes(),(b=this.catch)===null||b===void 0||b.optimizeNodes(),($=this.finally)===null||$===void 0||$.optimizeNodes(),this}optimizeNames(b,$){var P,M;return super.optimizeNames(b,$),(P=this.catch)===null||P===void 0||P.optimizeNames(b,$),(M=this.finally)===null||M===void 0||M.optimizeNames(b,$),this}get names(){const b=super.names;return this.catch&&L(b,this.catch.names),this.finally&&L(b,this.finally.names),b}}class q extends v{constructor(b){super(),this.error=b}render(b){return`catch(${this.error})`+super.render(b)}}q.kind="catch";class Q extends v{render(b){return"finally"+super.render(b)}}Q.kind="finally";class z{constructor(b,$={}){this._values={},this._blockStarts=[],this._constants={},this.opts={...$,_n:$.lines?`
`:""},this._extScope=b,this._scope=new s.Scope({parent:b}),this._nodes=[new f]}toString(){return this._root.render(this.opts)}name(b){return this._scope.name(b)}scopeName(b){return this._extScope.name(b)}scopeValue(b,$){const P=this._extScope.value(b,$);return(this._values[P.prefix]||(this._values[P.prefix]=new Set)).add(P),P}getScopeValue(b,$){return this._extScope.getValue(b,$)}scopeRefs(b){return this._extScope.scopeRefs(b,this._values)}scopeCode(){return this._extScope.scopeCode(this._values)}_def(b,$,P,M){const V=this._scope.toName($);return P!==void 0&&M&&(this._constants[V.str]=P),this._leafNode(new n(b,V,P)),V}const(b,$,P){return this._def(s.varKinds.const,b,$,P)}let(b,$,P){return this._def(s.varKinds.let,b,$,P)}var(b,$,P){return this._def(s.varKinds.var,b,$,P)}assign(b,$,P){return this._leafNode(new a(b,$,P))}add(b,$){return this._leafNode(new l(b,e.operators.ADD,$))}code(b){return typeof b=="function"?b():b!==t.nil&&this._leafNode(new p(b)),this}object(...b){const $=["{"];for(const[P,M]of b)$.length>1&&$.push(","),$.push(P),(P!==M||this.opts.es5)&&($.push(":"),(0,t.addCodeArg)($,M));return $.push("}"),new t._Code($)}if(b,$,P){if(this._blockNode(new y(b)),$&&P)this.code($).else().code(P).endIf();else if($)this.code($).endIf();else if(P)throw new Error('CodeGen: "else" body without "then" body');return this}elseIf(b){return this._elseNode(new y(b))}else(){return this._elseNode(new g)}endIf(){return this._endBlockNode(y,g)}_for(b,$){return this._blockNode(b),$&&this.code($).endFor(),this}for(b,$){return this._for(new k(b),$)}forRange(b,$,P,M,V=this.opts.es5?s.varKinds.var:s.varKinds.let){const ne=this._scope.toName(b);return this._for(new S(V,ne,$,P),()=>M(ne))}forOf(b,$,P,M=s.varKinds.const){const V=this._scope.toName(b);if(this.opts.es5){const ne=$ instanceof t.Name?$:this.var("_arr",$);return this.forRange("_i",0,(0,t._)`${ne}.length`,oe=>{this.var(V,(0,t._)`${ne}[${oe}]`),P(V)})}return this._for(new C("of",M,V,$),()=>P(V))}forIn(b,$,P,M=this.opts.es5?s.varKinds.var:s.varKinds.const){if(this.opts.ownProperties)return this.forOf(b,(0,t._)`Object.keys(${$})`,P);const V=this._scope.toName(b);return this._for(new C("in",M,V,$),()=>P(V))}endFor(){return this._endBlockNode(w)}label(b){return this._leafNode(new c(b))}break(b){return this._leafNode(new u(b))}return(b){const $=new I;if(this._blockNode($),this.code(b),$.nodes.length!==1)throw new Error('CodeGen: "return" should have one node');return this._endBlockNode(I)}try(b,$,P){if(!$&&!P)throw new Error('CodeGen: "try" without "catch" and "finally"');const M=new R;if(this._blockNode(M),this.code(b),$){const V=this.name("e");this._currNode=M.catch=new q(V),$(V)}return P&&(this._currNode=M.finally=new Q,this.code(P)),this._endBlockNode(q,Q)}throw(b){return this._leafNode(new d(b))}block(b,$){return this._blockStarts.push(this._nodes.length),b&&this.code(b).endBlock($),this}endBlock(b){const $=this._blockStarts.pop();if($===void 0)throw new Error("CodeGen: not in self-balancing block");const P=this._nodes.length-$;if(P<0||b!==void 0&&P!==b)throw new Error(`CodeGen: wrong number of nodes: ${P} vs ${b} expected`);return this._nodes.length=$,this}func(b,$=t.nil,P,M){return this._blockNode(new T(b,$,P)),M&&this.code(M).endFunc(),this}endFunc(){return this._endBlockNode(T)}optimize(b=1){for(;b-- >0;)this._root.optimizeNodes(),this._root.optimizeNames(this._root.names,this._constants)}_leafNode(b){return this._currNode.nodes.push(b),this}_blockNode(b){this._currNode.nodes.push(b),this._nodes.push(b)}_endBlockNode(b,$){const P=this._currNode;if(P instanceof b||$&&P instanceof $)return this._nodes.pop(),this;throw new Error(`CodeGen: not in block "${$?`${b.kind}/${$.kind}`:b.kind}"`)}_elseNode(b){const $=this._currNode;if(!($ instanceof y))throw new Error('CodeGen: "else" without "if"');return this._currNode=$.else=b,this}get _root(){return this._nodes[0]}get _currNode(){const b=this._nodes;return b[b.length-1]}set _currNode(b){const $=this._nodes;$[$.length-1]=b}}e.CodeGen=z;function L(E,b){for(const $ in b)E[$]=(E[$]||0)+(b[$]||0);return E}function W(E,b){return b instanceof t._CodeOrName?L(E,b.names):E}function F(E,b,$){if(E instanceof t.Name)return P(E);if(!M(E))return E;return new t._Code(E._items.reduce((V,ne)=>(ne instanceof t.Name&&(ne=P(ne)),ne instanceof t._Code?V.push(...ne._items):V.push(ne),V),[]));function P(V){const ne=$[V.str];return ne===void 0||b[V.str]!==1?V:(delete b[V.str],ne)}function M(V){return V instanceof t._Code&&V._items.some(ne=>ne instanceof t.Name&&b[ne.str]===1&&$[ne.str]!==void 0)}}function pe(E,b){for(const $ in b)E[$]=(E[$]||0)-(b[$]||0)}function $e(E){return typeof E=="boolean"||typeof E=="number"||E===null?!E:(0,t._)`!${O(E)}`}e.not=$e;const ye=x(e.operators.AND);function Ce(...E){return E.reduce(ye)}e.and=Ce;const Ne=x(e.operators.OR);function N(...E){return E.reduce(Ne)}e.or=N;function x(E){return(b,$)=>b===t.nil?$:$===t.nil?b:(0,t._)`${O(b)} ${E} ${O($)}`}function O(E){return E instanceof t.Name?E:(0,t._)`(${E})`}})(G);var D={};Object.defineProperty(D,"__esModule",{value:!0});D.checkStrictMode=D.getErrorPath=D.Type=D.useFunc=D.setEvaluated=D.evaluatedPropsToName=D.mergeEvaluated=D.eachItem=D.unescapeJsonPointer=D.escapeJsonPointer=D.escapeFragment=D.unescapeFragment=D.schemaRefOrVal=D.schemaHasRulesButRef=D.schemaHasRules=D.checkUnknownRules=D.alwaysValidSchema=D.toHash=void 0;const de=G,Jf=Dr;function Xf(e){const t={};for(const s of e)t[s]=!0;return t}D.toHash=Xf;function Qf(e,t){return typeof t=="boolean"?t:Object.keys(t).length===0?!0:(bd(e,t),!vd(t,e.self.RULES.all))}D.alwaysValidSchema=Qf;function bd(e,t=e.schema){const{opts:s,self:r}=e;if(!s.strictSchema||typeof t=="boolean")return;const i=r.RULES.keywords;for(const o in t)i[o]||$d(e,`unknown keyword: "${o}"`)}D.checkUnknownRules=bd;function vd(e,t){if(typeof e=="boolean")return!e;for(const s in e)if(t[s])return!0;return!1}D.schemaHasRules=vd;function Zf(e,t){if(typeof e=="boolean")return!e;for(const s in e)if(s!=="$ref"&&t.all[s])return!0;return!1}D.schemaHasRulesButRef=Zf;function em({topSchemaRef:e,schemaPath:t},s,r,i){if(!i){if(typeof s=="number"||typeof s=="boolean")return s;if(typeof s=="string")return(0,de._)`${s}`}return(0,de._)`${e}${t}${(0,de.getProperty)(r)}`}D.schemaRefOrVal=em;function tm(e){return wd(decodeURIComponent(e))}D.unescapeFragment=tm;function sm(e){return encodeURIComponent(ea(e))}D.escapeFragment=sm;function ea(e){return typeof e=="number"?`${e}`:e.replace(/~/g,"~0").replace(/\//g,"~1")}D.escapeJsonPointer=ea;function wd(e){return e.replace(/~1/g,"/").replace(/~0/g,"~")}D.unescapeJsonPointer=wd;function rm(e,t){if(Array.isArray(e))for(const s of e)t(s);else t(e)}D.eachItem=rm;function Yl({mergeNames:e,mergeToName:t,mergeValues:s,resultToName:r}){return(i,o,n,a)=>{const l=n===void 0?o:n instanceof de.Name?(o instanceof de.Name?e(i,o,n):t(i,o,n),n):o instanceof de.Name?(t(i,n,o),o):s(o,n);return a===de.Name&&!(l instanceof de.Name)?r(i,l):l}}D.mergeEvaluated={props:Yl({mergeNames:(e,t,s)=>e.if((0,de._)`${s} !== true && ${t} !== undefined`,()=>{e.if((0,de._)`${t} === true`,()=>e.assign(s,!0),()=>e.assign(s,(0,de._)`${s} || {}`).code((0,de._)`Object.assign(${s}, ${t})`))}),mergeToName:(e,t,s)=>e.if((0,de._)`${s} !== true`,()=>{t===!0?e.assign(s,!0):(e.assign(s,(0,de._)`${s} || {}`),ta(e,s,t))}),mergeValues:(e,t)=>e===!0?!0:{...e,...t},resultToName:_d}),items:Yl({mergeNames:(e,t,s)=>e.if((0,de._)`${s} !== true && ${t} !== undefined`,()=>e.assign(s,(0,de._)`${t} === true ? true : ${s} > ${t} ? ${s} : ${t}`)),mergeToName:(e,t,s)=>e.if((0,de._)`${s} !== true`,()=>e.assign(s,t===!0?!0:(0,de._)`${s} > ${t} ? ${s} : ${t}`)),mergeValues:(e,t)=>e===!0?!0:Math.max(e,t),resultToName:(e,t)=>e.var("items",t)})};function _d(e,t){if(t===!0)return e.var("props",!0);const s=e.var("props",(0,de._)`{}`);return t!==void 0&&ta(e,s,t),s}D.evaluatedPropsToName=_d;function ta(e,t,s){Object.keys(s).forEach(r=>e.assign((0,de._)`${t}${(0,de.getProperty)(r)}`,!0))}D.setEvaluated=ta;const Jl={};function im(e,t){return e.scopeValue("func",{ref:t,code:Jl[t.code]||(Jl[t.code]=new Jf._Code(t.code))})}D.useFunc=im;var $n;(function(e){e[e.Num=0]="Num",e[e.Str=1]="Str"})($n||(D.Type=$n={}));function om(e,t,s){if(e instanceof de.Name){const r=t===$n.Num;return s?r?(0,de._)`"[" + ${e} + "]"`:(0,de._)`"['" + ${e} + "']"`:r?(0,de._)`"/" + ${e}`:(0,de._)`"/" + ${e}.replace(/~/g, "~0").replace(/\\//g, "~1")`}return s?(0,de.getProperty)(e).toString():"/"+ea(e)}D.getErrorPath=om;function $d(e,t,s=e.opts.strictSchema){if(s){if(t=`strict mode: ${t}`,s===!0)throw new Error(t);e.self.logger.warn(t)}}D.checkStrictMode=$d;var Qe={};Object.defineProperty(Qe,"__esModule",{value:!0});const Ie=G,nm={data:new Ie.Name("data"),valCxt:new Ie.Name("valCxt"),instancePath:new Ie.Name("instancePath"),parentData:new Ie.Name("parentData"),parentDataProperty:new Ie.Name("parentDataProperty"),rootData:new Ie.Name("rootData"),dynamicAnchors:new Ie.Name("dynamicAnchors"),vErrors:new Ie.Name("vErrors"),errors:new Ie.Name("errors"),this:new Ie.Name("this"),self:new Ie.Name("self"),scope:new Ie.Name("scope"),json:new Ie.Name("json"),jsonPos:new Ie.Name("jsonPos"),jsonLen:new Ie.Name("jsonLen"),jsonPart:new Ie.Name("jsonPart")};Qe.default=nm;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.extendErrors=e.resetErrorsCount=e.reportExtraError=e.reportError=e.keyword$DataError=e.keywordError=void 0;const t=G,s=D,r=Qe;e.keywordError={message:({keyword:g})=>(0,t.str)`must pass "${g}" keyword validation`},e.keyword$DataError={message:({keyword:g,schemaType:y})=>y?(0,t.str)`"${g}" keyword must be ${y} ($data)`:(0,t.str)`"${g}" keyword is invalid ($data)`};function i(g,y=e.keywordError,w,k){const{it:S}=g,{gen:C,compositeRule:T,allErrors:I}=S,R=d(g,y,w);k??(T||I)?l(C,R):c(S,(0,t._)`[${R}]`)}e.reportError=i;function o(g,y=e.keywordError,w){const{it:k}=g,{gen:S,compositeRule:C,allErrors:T}=k,I=d(g,y,w);l(S,I),C||T||c(k,r.default.vErrors)}e.reportExtraError=o;function n(g,y){g.assign(r.default.errors,y),g.if((0,t._)`${r.default.vErrors} !== null`,()=>g.if(y,()=>g.assign((0,t._)`${r.default.vErrors}.length`,y),()=>g.assign(r.default.vErrors,null)))}e.resetErrorsCount=n;function a({gen:g,keyword:y,schemaValue:w,data:k,errsCount:S,it:C}){if(S===void 0)throw new Error("ajv implementation error");const T=g.name("err");g.forRange("i",S,r.default.errors,I=>{g.const(T,(0,t._)`${r.default.vErrors}[${I}]`),g.if((0,t._)`${T}.instancePath === undefined`,()=>g.assign((0,t._)`${T}.instancePath`,(0,t.strConcat)(r.default.instancePath,C.errorPath))),g.assign((0,t._)`${T}.schemaPath`,(0,t.str)`${C.errSchemaPath}/${y}`),C.opts.verbose&&(g.assign((0,t._)`${T}.schema`,w),g.assign((0,t._)`${T}.data`,k))})}e.extendErrors=a;function l(g,y){const w=g.const("err",y);g.if((0,t._)`${r.default.vErrors} === null`,()=>g.assign(r.default.vErrors,(0,t._)`[${w}]`),(0,t._)`${r.default.vErrors}.push(${w})`),g.code((0,t._)`${r.default.errors}++`)}function c(g,y){const{gen:w,validateName:k,schemaEnv:S}=g;S.$async?w.throw((0,t._)`new ${g.ValidationError}(${y})`):(w.assign((0,t._)`${k}.errors`,y),w.return(!1))}const u={keyword:new t.Name("keyword"),schemaPath:new t.Name("schemaPath"),params:new t.Name("params"),propertyName:new t.Name("propertyName"),message:new t.Name("message"),schema:new t.Name("schema"),parentSchema:new t.Name("parentSchema")};function d(g,y,w){const{createErrors:k}=g.it;return k===!1?(0,t._)`{}`:p(g,y,w)}function p(g,y,w={}){const{gen:k,it:S}=g,C=[h(S,w),v(g,w)];return f(g,y,C),k.object(...C)}function h({errorPath:g},{instancePath:y}){const w=y?(0,t.str)`${g}${(0,s.getErrorPath)(y,s.Type.Str)}`:g;return[r.default.instancePath,(0,t.strConcat)(r.default.instancePath,w)]}function v({keyword:g,it:{errSchemaPath:y}},{schemaPath:w,parentSchema:k}){let S=k?y:(0,t.str)`${y}/${g}`;return w&&(S=(0,t.str)`${S}${(0,s.getErrorPath)(w,s.Type.Str)}`),[u.schemaPath,S]}function f(g,{params:y,message:w},k){const{keyword:S,data:C,schemaValue:T,it:I}=g,{opts:R,propertyName:q,topSchemaRef:Q,schemaPath:z}=I;k.push([u.keyword,S],[u.params,typeof y=="function"?y(g):y||(0,t._)`{}`]),R.messages&&k.push([u.message,typeof w=="function"?w(g):w]),R.verbose&&k.push([u.schema,T],[u.parentSchema,(0,t._)`${Q}${z}`],[r.default.data,C]),q&&k.push([u.propertyName,q])}})(Kr);Object.defineProperty(Bs,"__esModule",{value:!0});Bs.boolOrEmptySchema=Bs.topBoolOrEmptySchema=void 0;const am=Kr,lm=G,cm=Qe,dm={message:"boolean schema is false"};function um(e){const{gen:t,schema:s,validateName:r}=e;s===!1?kd(e,!1):typeof s=="object"&&s.$async===!0?t.return(cm.default.data):(t.assign((0,lm._)`${r}.errors`,null),t.return(!0))}Bs.topBoolOrEmptySchema=um;function hm(e,t){const{gen:s,schema:r}=e;r===!1?(s.var(t,!1),kd(e)):s.var(t,!0)}Bs.boolOrEmptySchema=hm;function kd(e,t){const{gen:s,data:r}=e,i={gen:s,keyword:"false schema",data:r,schema:!1,schemaCode:!1,schemaValue:!1,params:{},it:e};(0,am.reportError)(i,dm,void 0,t)}var ke={},hs={};Object.defineProperty(hs,"__esModule",{value:!0});hs.getRules=hs.isJSONType=void 0;const pm=["string","number","integer","boolean","null","object","array"],fm=new Set(pm);function mm(e){return typeof e=="string"&&fm.has(e)}hs.isJSONType=mm;function gm(){const e={number:{type:"number",rules:[]},string:{type:"string",rules:[]},array:{type:"array",rules:[]},object:{type:"object",rules:[]}};return{types:{...e,integer:!0,boolean:!0,null:!0},rules:[{rules:[]},e.number,e.string,e.array,e.object],post:{rules:[]},all:{},keywords:{}}}hs.getRules=gm;var Pt={};Object.defineProperty(Pt,"__esModule",{value:!0});Pt.shouldUseRule=Pt.shouldUseGroup=Pt.schemaHasRulesForType=void 0;function ym({schema:e,self:t},s){const r=t.RULES.types[s];return r&&r!==!0&&xd(e,r)}Pt.schemaHasRulesForType=ym;function xd(e,t){return t.rules.some(s=>Sd(e,s))}Pt.shouldUseGroup=xd;function Sd(e,t){var s;return e[t.keyword]!==void 0||((s=t.definition.implements)===null||s===void 0?void 0:s.some(r=>e[r]!==void 0))}Pt.shouldUseRule=Sd;Object.defineProperty(ke,"__esModule",{value:!0});ke.reportTypeError=ke.checkDataTypes=ke.checkDataType=ke.coerceAndCheckDataType=ke.getJSONTypes=ke.getSchemaTypes=ke.DataType=void 0;const bm=hs,vm=Pt,wm=Kr,J=G,Ed=D;var Ds;(function(e){e[e.Correct=0]="Correct",e[e.Wrong=1]="Wrong"})(Ds||(ke.DataType=Ds={}));function _m(e){const t=Cd(e.type);if(t.includes("null")){if(e.nullable===!1)throw new Error("type: null contradicts nullable: false")}else{if(!t.length&&e.nullable!==void 0)throw new Error('"nullable" cannot be used without "type"');e.nullable===!0&&t.push("null")}return t}ke.getSchemaTypes=_m;function Cd(e){const t=Array.isArray(e)?e:e?[e]:[];if(t.every(bm.isJSONType))return t;throw new Error("type must be JSONType or JSONType[]: "+t.join(","))}ke.getJSONTypes=Cd;function $m(e,t){const{gen:s,data:r,opts:i}=e,o=km(t,i.coerceTypes),n=t.length>0&&!(o.length===0&&t.length===1&&(0,vm.schemaHasRulesForType)(e,t[0]));if(n){const a=sa(t,r,i.strictNumbers,Ds.Wrong);s.if(a,()=>{o.length?xm(e,t,o):ra(e)})}return n}ke.coerceAndCheckDataType=$m;const Ad=new Set(["string","number","integer","boolean","null"]);function km(e,t){return t?e.filter(s=>Ad.has(s)||t==="array"&&s==="array"):[]}function xm(e,t,s){const{gen:r,data:i,opts:o}=e,n=r.let("dataType",(0,J._)`typeof ${i}`),a=r.let("coerced",(0,J._)`undefined`);o.coerceTypes==="array"&&r.if((0,J._)`${n} == 'object' && Array.isArray(${i}) && ${i}.length == 1`,()=>r.assign(i,(0,J._)`${i}[0]`).assign(n,(0,J._)`typeof ${i}`).if(sa(t,i,o.strictNumbers),()=>r.assign(a,i))),r.if((0,J._)`${a} !== undefined`);for(const c of s)(Ad.has(c)||c==="array"&&o.coerceTypes==="array")&&l(c);r.else(),ra(e),r.endIf(),r.if((0,J._)`${a} !== undefined`,()=>{r.assign(i,a),Sm(e,a)});function l(c){switch(c){case"string":r.elseIf((0,J._)`${n} == "number" || ${n} == "boolean"`).assign(a,(0,J._)`"" + ${i}`).elseIf((0,J._)`${i} === null`).assign(a,(0,J._)`""`);return;case"number":r.elseIf((0,J._)`${n} == "boolean" || ${i} === null
              || (${n} == "string" && ${i} && ${i} == +${i})`).assign(a,(0,J._)`+${i}`);return;case"integer":r.elseIf((0,J._)`${n} === "boolean" || ${i} === null
              || (${n} === "string" && ${i} && ${i} == +${i} && !(${i} % 1))`).assign(a,(0,J._)`+${i}`);return;case"boolean":r.elseIf((0,J._)`${i} === "false" || ${i} === 0 || ${i} === null`).assign(a,!1).elseIf((0,J._)`${i} === "true" || ${i} === 1`).assign(a,!0);return;case"null":r.elseIf((0,J._)`${i} === "" || ${i} === 0 || ${i} === false`),r.assign(a,null);return;case"array":r.elseIf((0,J._)`${n} === "string" || ${n} === "number"
              || ${n} === "boolean" || ${i} === null`).assign(a,(0,J._)`[${i}]`)}}}function Sm({gen:e,parentData:t,parentDataProperty:s},r){e.if((0,J._)`${t} !== undefined`,()=>e.assign((0,J._)`${t}[${s}]`,r))}function kn(e,t,s,r=Ds.Correct){const i=r===Ds.Correct?J.operators.EQ:J.operators.NEQ;let o;switch(e){case"null":return(0,J._)`${t} ${i} null`;case"array":o=(0,J._)`Array.isArray(${t})`;break;case"object":o=(0,J._)`${t} && typeof ${t} == "object" && !Array.isArray(${t})`;break;case"integer":o=n((0,J._)`!(${t} % 1) && !isNaN(${t})`);break;case"number":o=n();break;default:return(0,J._)`typeof ${t} ${i} ${e}`}return r===Ds.Correct?o:(0,J.not)(o);function n(a=J.nil){return(0,J.and)((0,J._)`typeof ${t} == "number"`,a,s?(0,J._)`isFinite(${t})`:J.nil)}}ke.checkDataType=kn;function sa(e,t,s,r){if(e.length===1)return kn(e[0],t,s,r);let i;const o=(0,Ed.toHash)(e);if(o.array&&o.object){const n=(0,J._)`typeof ${t} != "object"`;i=o.null?n:(0,J._)`!${t} || ${n}`,delete o.null,delete o.array,delete o.object}else i=J.nil;o.number&&delete o.integer;for(const n in o)i=(0,J.and)(i,kn(n,t,s,r));return i}ke.checkDataTypes=sa;const Em={message:({schema:e})=>`must be ${e}`,params:({schema:e,schemaValue:t})=>typeof e=="string"?(0,J._)`{type: ${e}}`:(0,J._)`{type: ${t}}`};function ra(e){const t=Cm(e);(0,wm.reportError)(t,Em)}ke.reportTypeError=ra;function Cm(e){const{gen:t,data:s,schema:r}=e,i=(0,Ed.schemaRefOrVal)(e,r,"type");return{gen:t,keyword:"type",data:s,schema:r.type,schemaCode:i,schemaValue:i,parentSchema:r,params:{},it:e}}var Zi={};Object.defineProperty(Zi,"__esModule",{value:!0});Zi.assignDefaults=void 0;const ks=G,Am=D;function Pm(e,t){const{properties:s,items:r}=e.schema;if(t==="object"&&s)for(const i in s)Xl(e,i,s[i].default);else t==="array"&&Array.isArray(r)&&r.forEach((i,o)=>Xl(e,o,i.default))}Zi.assignDefaults=Pm;function Xl(e,t,s){const{gen:r,compositeRule:i,data:o,opts:n}=e;if(s===void 0)return;const a=(0,ks._)`${o}${(0,ks.getProperty)(t)}`;if(i){(0,Am.checkStrictMode)(e,`default is ignored for: ${a}`);return}let l=(0,ks._)`${a} === undefined`;n.useDefaults==="empty"&&(l=(0,ks._)`${l} || ${a} === null || ${a} === ""`),r.if(l,(0,ks._)`${a} = ${(0,ks.stringify)(s)}`)}var yt={},Z={};Object.defineProperty(Z,"__esModule",{value:!0});Z.validateUnion=Z.validateArray=Z.usePattern=Z.callValidateCode=Z.schemaProperties=Z.allSchemaProperties=Z.noPropertyInData=Z.propertyInData=Z.isOwnProperty=Z.hasPropFunc=Z.reportMissingProp=Z.checkMissingProp=Z.checkReportMissingProp=void 0;const fe=G,ia=D,Lt=Qe,Om=D;function Tm(e,t){const{gen:s,data:r,it:i}=e;s.if(na(s,r,t,i.opts.ownProperties),()=>{e.setParams({missingProperty:(0,fe._)`${t}`},!0),e.error()})}Z.checkReportMissingProp=Tm;function Nm({gen:e,data:t,it:{opts:s}},r,i){return(0,fe.or)(...r.map(o=>(0,fe.and)(na(e,t,o,s.ownProperties),(0,fe._)`${i} = ${o}`)))}Z.checkMissingProp=Nm;function Im(e,t){e.setParams({missingProperty:t},!0),e.error()}Z.reportMissingProp=Im;function Pd(e){return e.scopeValue("func",{ref:Object.prototype.hasOwnProperty,code:(0,fe._)`Object.prototype.hasOwnProperty`})}Z.hasPropFunc=Pd;function oa(e,t,s){return(0,fe._)`${Pd(e)}.call(${t}, ${s})`}Z.isOwnProperty=oa;function Rm(e,t,s,r){const i=(0,fe._)`${t}${(0,fe.getProperty)(s)} !== undefined`;return r?(0,fe._)`${i} && ${oa(e,t,s)}`:i}Z.propertyInData=Rm;function na(e,t,s,r){const i=(0,fe._)`${t}${(0,fe.getProperty)(s)} === undefined`;return r?(0,fe.or)(i,(0,fe.not)(oa(e,t,s))):i}Z.noPropertyInData=na;function Od(e){return e?Object.keys(e).filter(t=>t!=="__proto__"):[]}Z.allSchemaProperties=Od;function Dm(e,t){return Od(t).filter(s=>!(0,ia.alwaysValidSchema)(e,t[s]))}Z.schemaProperties=Dm;function zm({schemaCode:e,data:t,it:{gen:s,topSchemaRef:r,schemaPath:i,errorPath:o},it:n},a,l,c){const u=c?(0,fe._)`${e}, ${t}, ${r}${i}`:t,d=[[Lt.default.instancePath,(0,fe.strConcat)(Lt.default.instancePath,o)],[Lt.default.parentData,n.parentData],[Lt.default.parentDataProperty,n.parentDataProperty],[Lt.default.rootData,Lt.default.rootData]];n.opts.dynamicRef&&d.push([Lt.default.dynamicAnchors,Lt.default.dynamicAnchors]);const p=(0,fe._)`${u}, ${s.object(...d)}`;return l!==fe.nil?(0,fe._)`${a}.call(${l}, ${p})`:(0,fe._)`${a}(${p})`}Z.callValidateCode=zm;const Lm=(0,fe._)`new RegExp`;function jm({gen:e,it:{opts:t}},s){const r=t.unicodeRegExp?"u":"",{regExp:i}=t.code,o=i(s,r);return e.scopeValue("pattern",{key:o.toString(),ref:o,code:(0,fe._)`${i.code==="new RegExp"?Lm:(0,Om.useFunc)(e,i)}(${s}, ${r})`})}Z.usePattern=jm;function Mm(e){const{gen:t,data:s,keyword:r,it:i}=e,o=t.name("valid");if(i.allErrors){const a=t.let("valid",!0);return n(()=>t.assign(a,!1)),a}return t.var(o,!0),n(()=>t.break()),o;function n(a){const l=t.const("len",(0,fe._)`${s}.length`);t.forRange("i",0,l,c=>{e.subschema({keyword:r,dataProp:c,dataPropType:ia.Type.Num},o),t.if((0,fe.not)(o),a)})}}Z.validateArray=Mm;function Fm(e){const{gen:t,schema:s,keyword:r,it:i}=e;if(!Array.isArray(s))throw new Error("ajv implementation error");if(s.some(l=>(0,ia.alwaysValidSchema)(i,l))&&!i.opts.unevaluated)return;const n=t.let("valid",!1),a=t.name("_valid");t.block(()=>s.forEach((l,c)=>{const u=e.subschema({keyword:r,schemaProp:c,compositeRule:!0},a);t.assign(n,(0,fe._)`${n} || ${a}`),e.mergeValidEvaluated(u,a)||t.if((0,fe.not)(n))})),e.result(n,()=>e.reset(),()=>e.error(!0))}Z.validateUnion=Fm;Object.defineProperty(yt,"__esModule",{value:!0});yt.validateKeywordUsage=yt.validSchemaType=yt.funcKeywordCode=yt.macroKeywordCode=void 0;const ze=G,ss=Qe,Vm=Z,Bm=Kr;function qm(e,t){const{gen:s,keyword:r,schema:i,parentSchema:o,it:n}=e,a=t.macro.call(n.self,i,o,n),l=Td(s,r,a);n.opts.validateSchema!==!1&&n.self.validateSchema(a,!0);const c=s.name("valid");e.subschema({schema:a,schemaPath:ze.nil,errSchemaPath:`${n.errSchemaPath}/${r}`,topSchemaRef:l,compositeRule:!0},c),e.pass(c,()=>e.error(!0))}yt.macroKeywordCode=qm;function Um(e,t){var s;const{gen:r,keyword:i,schema:o,parentSchema:n,$data:a,it:l}=e;Km(l,t);const c=!a&&t.compile?t.compile.call(l.self,o,n,l):t.validate,u=Td(r,i,c),d=r.let("valid");e.block$data(d,p),e.ok((s=t.valid)!==null&&s!==void 0?s:d);function p(){if(t.errors===!1)f(),t.modifying&&Ql(e),g(()=>e.error());else{const y=t.async?h():v();t.modifying&&Ql(e),g(()=>Hm(e,y))}}function h(){const y=r.let("ruleErrs",null);return r.try(()=>f((0,ze._)`await `),w=>r.assign(d,!1).if((0,ze._)`${w} instanceof ${l.ValidationError}`,()=>r.assign(y,(0,ze._)`${w}.errors`),()=>r.throw(w))),y}function v(){const y=(0,ze._)`${u}.errors`;return r.assign(y,null),f(ze.nil),y}function f(y=t.async?(0,ze._)`await `:ze.nil){const w=l.opts.passContext?ss.default.this:ss.default.self,k=!("compile"in t&&!a||t.schema===!1);r.assign(d,(0,ze._)`${y}${(0,Vm.callValidateCode)(e,u,w,k)}`,t.modifying)}function g(y){var w;r.if((0,ze.not)((w=t.valid)!==null&&w!==void 0?w:d),y)}}yt.funcKeywordCode=Um;function Ql(e){const{gen:t,data:s,it:r}=e;t.if(r.parentData,()=>t.assign(s,(0,ze._)`${r.parentData}[${r.parentDataProperty}]`))}function Hm(e,t){const{gen:s}=e;s.if((0,ze._)`Array.isArray(${t})`,()=>{s.assign(ss.default.vErrors,(0,ze._)`${ss.default.vErrors} === null ? ${t} : ${ss.default.vErrors}.concat(${t})`).assign(ss.default.errors,(0,ze._)`${ss.default.vErrors}.length`),(0,Bm.extendErrors)(e)},()=>e.error())}function Km({schemaEnv:e},t){if(t.async&&!e.$async)throw new Error("async keyword in sync schema")}function Td(e,t,s){if(s===void 0)throw new Error(`keyword "${t}" failed to compile`);return e.scopeValue("keyword",typeof s=="function"?{ref:s}:{ref:s,code:(0,ze.stringify)(s)})}function Wm(e,t,s=!1){return!t.length||t.some(r=>r==="array"?Array.isArray(e):r==="object"?e&&typeof e=="object"&&!Array.isArray(e):typeof e==r||s&&typeof e>"u")}yt.validSchemaType=Wm;function Gm({schema:e,opts:t,self:s,errSchemaPath:r},i,o){if(Array.isArray(i.keyword)?!i.keyword.includes(o):i.keyword!==o)throw new Error("ajv implementation error");const n=i.dependencies;if(n!=null&&n.some(a=>!Object.prototype.hasOwnProperty.call(e,a)))throw new Error(`parent schema must have dependencies of ${o}: ${n.join(",")}`);if(i.validateSchema&&!i.validateSchema(e[o])){const l=`keyword "${o}" value is invalid at path "${r}": `+s.errorsText(i.validateSchema.errors);if(t.validateSchema==="log")s.logger.error(l);else throw new Error(l)}}yt.validateKeywordUsage=Gm;var Ut={};Object.defineProperty(Ut,"__esModule",{value:!0});Ut.extendSubschemaMode=Ut.extendSubschemaData=Ut.getSubschema=void 0;const gt=G,Nd=D;function Ym(e,{keyword:t,schemaProp:s,schema:r,schemaPath:i,errSchemaPath:o,topSchemaRef:n}){if(t!==void 0&&r!==void 0)throw new Error('both "keyword" and "schema" passed, only one allowed');if(t!==void 0){const a=e.schema[t];return s===void 0?{schema:a,schemaPath:(0,gt._)`${e.schemaPath}${(0,gt.getProperty)(t)}`,errSchemaPath:`${e.errSchemaPath}/${t}`}:{schema:a[s],schemaPath:(0,gt._)`${e.schemaPath}${(0,gt.getProperty)(t)}${(0,gt.getProperty)(s)}`,errSchemaPath:`${e.errSchemaPath}/${t}/${(0,Nd.escapeFragment)(s)}`}}if(r!==void 0){if(i===void 0||o===void 0||n===void 0)throw new Error('"schemaPath", "errSchemaPath" and "topSchemaRef" are required with "schema"');return{schema:r,schemaPath:i,topSchemaRef:n,errSchemaPath:o}}throw new Error('either "keyword" or "schema" must be passed')}Ut.getSubschema=Ym;function Jm(e,t,{dataProp:s,dataPropType:r,data:i,dataTypes:o,propertyName:n}){if(i!==void 0&&s!==void 0)throw new Error('both "data" and "dataProp" passed, only one allowed');const{gen:a}=t;if(s!==void 0){const{errorPath:c,dataPathArr:u,opts:d}=t,p=a.let("data",(0,gt._)`${t.data}${(0,gt.getProperty)(s)}`,!0);l(p),e.errorPath=(0,gt.str)`${c}${(0,Nd.getErrorPath)(s,r,d.jsPropertySyntax)}`,e.parentDataProperty=(0,gt._)`${s}`,e.dataPathArr=[...u,e.parentDataProperty]}if(i!==void 0){const c=i instanceof gt.Name?i:a.let("data",i,!0);l(c),n!==void 0&&(e.propertyName=n)}o&&(e.dataTypes=o);function l(c){e.data=c,e.dataLevel=t.dataLevel+1,e.dataTypes=[],t.definedProperties=new Set,e.parentData=t.data,e.dataNames=[...t.dataNames,c]}}Ut.extendSubschemaData=Jm;function Xm(e,{jtdDiscriminator:t,jtdMetadata:s,compositeRule:r,createErrors:i,allErrors:o}){r!==void 0&&(e.compositeRule=r),i!==void 0&&(e.createErrors=i),o!==void 0&&(e.allErrors=o),e.jtdDiscriminator=t,e.jtdMetadata=s}Ut.extendSubschemaMode=Xm;var Pe={},Id=function e(t,s){if(t===s)return!0;if(t&&s&&typeof t=="object"&&typeof s=="object"){if(t.constructor!==s.constructor)return!1;var r,i,o;if(Array.isArray(t)){if(r=t.length,r!=s.length)return!1;for(i=r;i--!==0;)if(!e(t[i],s[i]))return!1;return!0}if(t.constructor===RegExp)return t.source===s.source&&t.flags===s.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===s.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===s.toString();if(o=Object.keys(t),r=o.length,r!==Object.keys(s).length)return!1;for(i=r;i--!==0;)if(!Object.prototype.hasOwnProperty.call(s,o[i]))return!1;for(i=r;i--!==0;){var n=o[i];if(!e(t[n],s[n]))return!1}return!0}return t!==t&&s!==s},Rd={exports:{}},Bt=Rd.exports=function(e,t,s){typeof t=="function"&&(s=t,t={}),s=t.cb||s;var r=typeof s=="function"?s:s.pre||function(){},i=s.post||function(){};vi(t,r,i,e,"",e)};Bt.keywords={additionalItems:!0,items:!0,contains:!0,additionalProperties:!0,propertyNames:!0,not:!0,if:!0,then:!0,else:!0};Bt.arrayKeywords={items:!0,allOf:!0,anyOf:!0,oneOf:!0};Bt.propsKeywords={$defs:!0,definitions:!0,properties:!0,patternProperties:!0,dependencies:!0};Bt.skipKeywords={default:!0,enum:!0,const:!0,required:!0,maximum:!0,minimum:!0,exclusiveMaximum:!0,exclusiveMinimum:!0,multipleOf:!0,maxLength:!0,minLength:!0,pattern:!0,format:!0,maxItems:!0,minItems:!0,uniqueItems:!0,maxProperties:!0,minProperties:!0};function vi(e,t,s,r,i,o,n,a,l,c){if(r&&typeof r=="object"&&!Array.isArray(r)){t(r,i,o,n,a,l,c);for(var u in r){var d=r[u];if(Array.isArray(d)){if(u in Bt.arrayKeywords)for(var p=0;p<d.length;p++)vi(e,t,s,d[p],i+"/"+u+"/"+p,o,i,u,r,p)}else if(u in Bt.propsKeywords){if(d&&typeof d=="object")for(var h in d)vi(e,t,s,d[h],i+"/"+u+"/"+Qm(h),o,i,u,r,h)}else(u in Bt.keywords||e.allKeys&&!(u in Bt.skipKeywords))&&vi(e,t,s,d,i+"/"+u,o,i,u,r)}s(r,i,o,n,a,l,c)}}function Qm(e){return e.replace(/~/g,"~0").replace(/\//g,"~1")}var Zm=Rd.exports;Object.defineProperty(Pe,"__esModule",{value:!0});Pe.getSchemaRefs=Pe.resolveUrl=Pe.normalizeId=Pe._getFullPath=Pe.getFullPath=Pe.inlineRef=void 0;const eg=D,tg=Id,sg=Zm,rg=new Set(["type","format","pattern","maxLength","minLength","maxProperties","minProperties","maxItems","minItems","maximum","minimum","uniqueItems","multipleOf","required","enum","const"]);function ig(e,t=!0){return typeof e=="boolean"?!0:t===!0?!xn(e):t?Dd(e)<=t:!1}Pe.inlineRef=ig;const og=new Set(["$ref","$recursiveRef","$recursiveAnchor","$dynamicRef","$dynamicAnchor"]);function xn(e){for(const t in e){if(og.has(t))return!0;const s=e[t];if(Array.isArray(s)&&s.some(xn)||typeof s=="object"&&xn(s))return!0}return!1}function Dd(e){let t=0;for(const s in e){if(s==="$ref")return 1/0;if(t++,!rg.has(s)&&(typeof e[s]=="object"&&(0,eg.eachItem)(e[s],r=>t+=Dd(r)),t===1/0))return 1/0}return t}function zd(e,t="",s){s!==!1&&(t=zs(t));const r=e.parse(t);return Ld(e,r)}Pe.getFullPath=zd;function Ld(e,t){return e.serialize(t).split("#")[0]+"#"}Pe._getFullPath=Ld;const ng=/#\/?$/;function zs(e){return e?e.replace(ng,""):""}Pe.normalizeId=zs;function ag(e,t,s){return s=zs(s),e.resolve(t,s)}Pe.resolveUrl=ag;const lg=/^[a-z_][-a-z0-9._]*$/i;function cg(e,t){if(typeof e=="boolean")return{};const{schemaId:s,uriResolver:r}=this.opts,i=zs(e[s]||t),o={"":i},n=zd(r,i,!1),a={},l=new Set;return sg(e,{allKeys:!0},(d,p,h,v)=>{if(v===void 0)return;const f=n+p;let g=o[v];typeof d[s]=="string"&&(g=y.call(this,d[s])),w.call(this,d.$anchor),w.call(this,d.$dynamicAnchor),o[p]=g;function y(k){const S=this.opts.uriResolver.resolve;if(k=zs(g?S(g,k):k),l.has(k))throw u(k);l.add(k);let C=this.refs[k];return typeof C=="string"&&(C=this.refs[C]),typeof C=="object"?c(d,C.schema,k):k!==zs(f)&&(k[0]==="#"?(c(d,a[k],k),a[k]=d):this.refs[k]=f),k}function w(k){if(typeof k=="string"){if(!lg.test(k))throw new Error(`invalid anchor "${k}"`);y.call(this,`#${k}`)}}}),a;function c(d,p,h){if(p!==void 0&&!tg(d,p))throw u(h)}function u(d){return new Error(`reference "${d}" resolves to more than one schema`)}}Pe.getSchemaRefs=cg;Object.defineProperty(rt,"__esModule",{value:!0});rt.getData=rt.KeywordCxt=rt.validateFunctionCode=void 0;const jd=Bs,Zl=ke,aa=Pt,Ri=ke,dg=Zi,xr=yt,Go=Ut,j=G,K=Qe,ug=Pe,Ot=D,pr=Kr;function hg(e){if(Vd(e)&&(Bd(e),Fd(e))){mg(e);return}Md(e,()=>(0,jd.topBoolOrEmptySchema)(e))}rt.validateFunctionCode=hg;function Md({gen:e,validateName:t,schema:s,schemaEnv:r,opts:i},o){i.code.es5?e.func(t,(0,j._)`${K.default.data}, ${K.default.valCxt}`,r.$async,()=>{e.code((0,j._)`"use strict"; ${ec(s,i)}`),fg(e,i),e.code(o)}):e.func(t,(0,j._)`${K.default.data}, ${pg(i)}`,r.$async,()=>e.code(ec(s,i)).code(o))}function pg(e){return(0,j._)`{${K.default.instancePath}="", ${K.default.parentData}, ${K.default.parentDataProperty}, ${K.default.rootData}=${K.default.data}${e.dynamicRef?(0,j._)`, ${K.default.dynamicAnchors}={}`:j.nil}}={}`}function fg(e,t){e.if(K.default.valCxt,()=>{e.var(K.default.instancePath,(0,j._)`${K.default.valCxt}.${K.default.instancePath}`),e.var(K.default.parentData,(0,j._)`${K.default.valCxt}.${K.default.parentData}`),e.var(K.default.parentDataProperty,(0,j._)`${K.default.valCxt}.${K.default.parentDataProperty}`),e.var(K.default.rootData,(0,j._)`${K.default.valCxt}.${K.default.rootData}`),t.dynamicRef&&e.var(K.default.dynamicAnchors,(0,j._)`${K.default.valCxt}.${K.default.dynamicAnchors}`)},()=>{e.var(K.default.instancePath,(0,j._)`""`),e.var(K.default.parentData,(0,j._)`undefined`),e.var(K.default.parentDataProperty,(0,j._)`undefined`),e.var(K.default.rootData,K.default.data),t.dynamicRef&&e.var(K.default.dynamicAnchors,(0,j._)`{}`)})}function mg(e){const{schema:t,opts:s,gen:r}=e;Md(e,()=>{s.$comment&&t.$comment&&Ud(e),wg(e),r.let(K.default.vErrors,null),r.let(K.default.errors,0),s.unevaluated&&gg(e),qd(e),kg(e)})}function gg(e){const{gen:t,validateName:s}=e;e.evaluated=t.const("evaluated",(0,j._)`${s}.evaluated`),t.if((0,j._)`${e.evaluated}.dynamicProps`,()=>t.assign((0,j._)`${e.evaluated}.props`,(0,j._)`undefined`)),t.if((0,j._)`${e.evaluated}.dynamicItems`,()=>t.assign((0,j._)`${e.evaluated}.items`,(0,j._)`undefined`))}function ec(e,t){const s=typeof e=="object"&&e[t.schemaId];return s&&(t.code.source||t.code.process)?(0,j._)`/*# sourceURL=${s} */`:j.nil}function yg(e,t){if(Vd(e)&&(Bd(e),Fd(e))){bg(e,t);return}(0,jd.boolOrEmptySchema)(e,t)}function Fd({schema:e,self:t}){if(typeof e=="boolean")return!e;for(const s in e)if(t.RULES.all[s])return!0;return!1}function Vd(e){return typeof e.schema!="boolean"}function bg(e,t){const{schema:s,gen:r,opts:i}=e;i.$comment&&s.$comment&&Ud(e),_g(e),$g(e);const o=r.const("_errs",K.default.errors);qd(e,o),r.var(t,(0,j._)`${o} === ${K.default.errors}`)}function Bd(e){(0,Ot.checkUnknownRules)(e),vg(e)}function qd(e,t){if(e.opts.jtd)return tc(e,[],!1,t);const s=(0,Zl.getSchemaTypes)(e.schema),r=(0,Zl.coerceAndCheckDataType)(e,s);tc(e,s,!r,t)}function vg(e){const{schema:t,errSchemaPath:s,opts:r,self:i}=e;t.$ref&&r.ignoreKeywordsWithRef&&(0,Ot.schemaHasRulesButRef)(t,i.RULES)&&i.logger.warn(`$ref: keywords ignored in schema at path "${s}"`)}function wg(e){const{schema:t,opts:s}=e;t.default!==void 0&&s.useDefaults&&s.strictSchema&&(0,Ot.checkStrictMode)(e,"default is ignored in the schema root")}function _g(e){const t=e.schema[e.opts.schemaId];t&&(e.baseId=(0,ug.resolveUrl)(e.opts.uriResolver,e.baseId,t))}function $g(e){if(e.schema.$async&&!e.schemaEnv.$async)throw new Error("async schema in sync schema")}function Ud({gen:e,schemaEnv:t,schema:s,errSchemaPath:r,opts:i}){const o=s.$comment;if(i.$comment===!0)e.code((0,j._)`${K.default.self}.logger.log(${o})`);else if(typeof i.$comment=="function"){const n=(0,j.str)`${r}/$comment`,a=e.scopeValue("root",{ref:t.root});e.code((0,j._)`${K.default.self}.opts.$comment(${o}, ${n}, ${a}.schema)`)}}function kg(e){const{gen:t,schemaEnv:s,validateName:r,ValidationError:i,opts:o}=e;s.$async?t.if((0,j._)`${K.default.errors} === 0`,()=>t.return(K.default.data),()=>t.throw((0,j._)`new ${i}(${K.default.vErrors})`)):(t.assign((0,j._)`${r}.errors`,K.default.vErrors),o.unevaluated&&xg(e),t.return((0,j._)`${K.default.errors} === 0`))}function xg({gen:e,evaluated:t,props:s,items:r}){s instanceof j.Name&&e.assign((0,j._)`${t}.props`,s),r instanceof j.Name&&e.assign((0,j._)`${t}.items`,r)}function tc(e,t,s,r){const{gen:i,schema:o,data:n,allErrors:a,opts:l,self:c}=e,{RULES:u}=c;if(o.$ref&&(l.ignoreKeywordsWithRef||!(0,Ot.schemaHasRulesButRef)(o,u))){i.block(()=>Wd(e,"$ref",u.all.$ref.definition));return}l.jtd||Sg(e,t),i.block(()=>{for(const p of u.rules)d(p);d(u.post)});function d(p){(0,aa.shouldUseGroup)(o,p)&&(p.type?(i.if((0,Ri.checkDataType)(p.type,n,l.strictNumbers)),sc(e,p),t.length===1&&t[0]===p.type&&s&&(i.else(),(0,Ri.reportTypeError)(e)),i.endIf()):sc(e,p),a||i.if((0,j._)`${K.default.errors} === ${r||0}`))}}function sc(e,t){const{gen:s,schema:r,opts:{useDefaults:i}}=e;i&&(0,dg.assignDefaults)(e,t.type),s.block(()=>{for(const o of t.rules)(0,aa.shouldUseRule)(r,o)&&Wd(e,o.keyword,o.definition,t.type)})}function Sg(e,t){e.schemaEnv.meta||!e.opts.strictTypes||(Eg(e,t),e.opts.allowUnionTypes||Cg(e,t),Ag(e,e.dataTypes))}function Eg(e,t){if(t.length){if(!e.dataTypes.length){e.dataTypes=t;return}t.forEach(s=>{Hd(e.dataTypes,s)||la(e,`type "${s}" not allowed by context "${e.dataTypes.join(",")}"`)}),Og(e,t)}}function Cg(e,t){t.length>1&&!(t.length===2&&t.includes("null"))&&la(e,"use allowUnionTypes to allow union type keyword")}function Ag(e,t){const s=e.self.RULES.all;for(const r in s){const i=s[r];if(typeof i=="object"&&(0,aa.shouldUseRule)(e.schema,i)){const{type:o}=i.definition;o.length&&!o.some(n=>Pg(t,n))&&la(e,`missing type "${o.join(",")}" for keyword "${r}"`)}}}function Pg(e,t){return e.includes(t)||t==="number"&&e.includes("integer")}function Hd(e,t){return e.includes(t)||t==="integer"&&e.includes("number")}function Og(e,t){const s=[];for(const r of e.dataTypes)Hd(t,r)?s.push(r):t.includes("integer")&&r==="number"&&s.push("integer");e.dataTypes=s}function la(e,t){const s=e.schemaEnv.baseId+e.errSchemaPath;t+=` at "${s}" (strictTypes)`,(0,Ot.checkStrictMode)(e,t,e.opts.strictTypes)}class Kd{constructor(t,s,r){if((0,xr.validateKeywordUsage)(t,s,r),this.gen=t.gen,this.allErrors=t.allErrors,this.keyword=r,this.data=t.data,this.schema=t.schema[r],this.$data=s.$data&&t.opts.$data&&this.schema&&this.schema.$data,this.schemaValue=(0,Ot.schemaRefOrVal)(t,this.schema,r,this.$data),this.schemaType=s.schemaType,this.parentSchema=t.schema,this.params={},this.it=t,this.def=s,this.$data)this.schemaCode=t.gen.const("vSchema",Gd(this.$data,t));else if(this.schemaCode=this.schemaValue,!(0,xr.validSchemaType)(this.schema,s.schemaType,s.allowUndefined))throw new Error(`${r} value must be ${JSON.stringify(s.schemaType)}`);("code"in s?s.trackErrors:s.errors!==!1)&&(this.errsCount=t.gen.const("_errs",K.default.errors))}result(t,s,r){this.failResult((0,j.not)(t),s,r)}failResult(t,s,r){this.gen.if(t),r?r():this.error(),s?(this.gen.else(),s(),this.allErrors&&this.gen.endIf()):this.allErrors?this.gen.endIf():this.gen.else()}pass(t,s){this.failResult((0,j.not)(t),void 0,s)}fail(t){if(t===void 0){this.error(),this.allErrors||this.gen.if(!1);return}this.gen.if(t),this.error(),this.allErrors?this.gen.endIf():this.gen.else()}fail$data(t){if(!this.$data)return this.fail(t);const{schemaCode:s}=this;this.fail((0,j._)`${s} !== undefined && (${(0,j.or)(this.invalid$data(),t)})`)}error(t,s,r){if(s){this.setParams(s),this._error(t,r),this.setParams({});return}this._error(t,r)}_error(t,s){(t?pr.reportExtraError:pr.reportError)(this,this.def.error,s)}$dataError(){(0,pr.reportError)(this,this.def.$dataError||pr.keyword$DataError)}reset(){if(this.errsCount===void 0)throw new Error('add "trackErrors" to keyword definition');(0,pr.resetErrorsCount)(this.gen,this.errsCount)}ok(t){this.allErrors||this.gen.if(t)}setParams(t,s){s?Object.assign(this.params,t):this.params=t}block$data(t,s,r=j.nil){this.gen.block(()=>{this.check$data(t,r),s()})}check$data(t=j.nil,s=j.nil){if(!this.$data)return;const{gen:r,schemaCode:i,schemaType:o,def:n}=this;r.if((0,j.or)((0,j._)`${i} === undefined`,s)),t!==j.nil&&r.assign(t,!0),(o.length||n.validateSchema)&&(r.elseIf(this.invalid$data()),this.$dataError(),t!==j.nil&&r.assign(t,!1)),r.else()}invalid$data(){const{gen:t,schemaCode:s,schemaType:r,def:i,it:o}=this;return(0,j.or)(n(),a());function n(){if(r.length){if(!(s instanceof j.Name))throw new Error("ajv implementation error");const l=Array.isArray(r)?r:[r];return(0,j._)`${(0,Ri.checkDataTypes)(l,s,o.opts.strictNumbers,Ri.DataType.Wrong)}`}return j.nil}function a(){if(i.validateSchema){const l=t.scopeValue("validate$data",{ref:i.validateSchema});return(0,j._)`!${l}(${s})`}return j.nil}}subschema(t,s){const r=(0,Go.getSubschema)(this.it,t);(0,Go.extendSubschemaData)(r,this.it,t),(0,Go.extendSubschemaMode)(r,t);const i={...this.it,...r,items:void 0,props:void 0};return yg(i,s),i}mergeEvaluated(t,s){const{it:r,gen:i}=this;r.opts.unevaluated&&(r.props!==!0&&t.props!==void 0&&(r.props=Ot.mergeEvaluated.props(i,t.props,r.props,s)),r.items!==!0&&t.items!==void 0&&(r.items=Ot.mergeEvaluated.items(i,t.items,r.items,s)))}mergeValidEvaluated(t,s){const{it:r,gen:i}=this;if(r.opts.unevaluated&&(r.props!==!0||r.items!==!0))return i.if(s,()=>this.mergeEvaluated(t,j.Name)),!0}}rt.KeywordCxt=Kd;function Wd(e,t,s,r){const i=new Kd(e,s,t);"code"in s?s.code(i,r):i.$data&&s.validate?(0,xr.funcKeywordCode)(i,s):"macro"in s?(0,xr.macroKeywordCode)(i,s):(s.compile||s.validate)&&(0,xr.funcKeywordCode)(i,s)}const Tg=/^\/(?:[^~]|~0|~1)*$/,Ng=/^([0-9]+)(#|\/(?:[^~]|~0|~1)*)?$/;function Gd(e,{dataLevel:t,dataNames:s,dataPathArr:r}){let i,o;if(e==="")return K.default.rootData;if(e[0]==="/"){if(!Tg.test(e))throw new Error(`Invalid JSON-pointer: ${e}`);i=e,o=K.default.rootData}else{const c=Ng.exec(e);if(!c)throw new Error(`Invalid JSON-pointer: ${e}`);const u=+c[1];if(i=c[2],i==="#"){if(u>=t)throw new Error(l("property/index",u));return r[t-u]}if(u>t)throw new Error(l("data",u));if(o=s[t-u],!i)return o}let n=o;const a=i.split("/");for(const c of a)c&&(o=(0,j._)`${o}${(0,j.getProperty)((0,Ot.unescapeJsonPointer)(c))}`,n=(0,j._)`${n} && ${o}`);return n;function l(c,u){return`Cannot access ${c} ${u} levels up, current level is ${t}`}}rt.getData=Gd;var Js={};Object.defineProperty(Js,"__esModule",{value:!0});class Ig extends Error{constructor(t){super("validation failed"),this.errors=t,this.ajv=this.validation=!0}}Js.default=Ig;var bs={};Object.defineProperty(bs,"__esModule",{value:!0});const Yo=Pe;class Rg extends Error{constructor(t,s,r,i){super(i||`can't resolve reference ${r} from id ${s}`),this.missingRef=(0,Yo.resolveUrl)(t,s,r),this.missingSchema=(0,Yo.normalizeId)((0,Yo.getFullPath)(t,this.missingRef))}}bs.default=Rg;var je={};Object.defineProperty(je,"__esModule",{value:!0});je.resolveSchema=je.getCompilingSchema=je.resolveRef=je.compileSchema=je.SchemaEnv=void 0;const at=G,Dg=Js,Qt=Qe,dt=Pe,rc=D,zg=rt;class eo{constructor(t){var s;this.refs={},this.dynamicAnchors={};let r;typeof t.schema=="object"&&(r=t.schema),this.schema=t.schema,this.schemaId=t.schemaId,this.root=t.root||this,this.baseId=(s=t.baseId)!==null&&s!==void 0?s:(0,dt.normalizeId)(r==null?void 0:r[t.schemaId||"$id"]),this.schemaPath=t.schemaPath,this.localRefs=t.localRefs,this.meta=t.meta,this.$async=r==null?void 0:r.$async,this.refs={}}}je.SchemaEnv=eo;function ca(e){const t=Yd.call(this,e);if(t)return t;const s=(0,dt.getFullPath)(this.opts.uriResolver,e.root.baseId),{es5:r,lines:i}=this.opts.code,{ownProperties:o}=this.opts,n=new at.CodeGen(this.scope,{es5:r,lines:i,ownProperties:o});let a;e.$async&&(a=n.scopeValue("Error",{ref:Dg.default,code:(0,at._)`require("ajv/dist/runtime/validation_error").default`}));const l=n.scopeName("validate");e.validateName=l;const c={gen:n,allErrors:this.opts.allErrors,data:Qt.default.data,parentData:Qt.default.parentData,parentDataProperty:Qt.default.parentDataProperty,dataNames:[Qt.default.data],dataPathArr:[at.nil],dataLevel:0,dataTypes:[],definedProperties:new Set,topSchemaRef:n.scopeValue("schema",this.opts.code.source===!0?{ref:e.schema,code:(0,at.stringify)(e.schema)}:{ref:e.schema}),validateName:l,ValidationError:a,schema:e.schema,schemaEnv:e,rootId:s,baseId:e.baseId||s,schemaPath:at.nil,errSchemaPath:e.schemaPath||(this.opts.jtd?"":"#"),errorPath:(0,at._)`""`,opts:this.opts,self:this};let u;try{this._compilations.add(e),(0,zg.validateFunctionCode)(c),n.optimize(this.opts.code.optimize);const d=n.toString();u=`${n.scopeRefs(Qt.default.scope)}return ${d}`,this.opts.code.process&&(u=this.opts.code.process(u,e));const h=new Function(`${Qt.default.self}`,`${Qt.default.scope}`,u)(this,this.scope.get());if(this.scope.value(l,{ref:h}),h.errors=null,h.schema=e.schema,h.schemaEnv=e,e.$async&&(h.$async=!0),this.opts.code.source===!0&&(h.source={validateName:l,validateCode:d,scopeValues:n._values}),this.opts.unevaluated){const{props:v,items:f}=c;h.evaluated={props:v instanceof at.Name?void 0:v,items:f instanceof at.Name?void 0:f,dynamicProps:v instanceof at.Name,dynamicItems:f instanceof at.Name},h.source&&(h.source.evaluated=(0,at.stringify)(h.evaluated))}return e.validate=h,e}catch(d){throw delete e.validate,delete e.validateName,u&&this.logger.error("Error compiling schema, function code:",u),d}finally{this._compilations.delete(e)}}je.compileSchema=ca;function Lg(e,t,s){var r;s=(0,dt.resolveUrl)(this.opts.uriResolver,t,s);const i=e.refs[s];if(i)return i;let o=Fg.call(this,e,s);if(o===void 0){const n=(r=e.localRefs)===null||r===void 0?void 0:r[s],{schemaId:a}=this.opts;n&&(o=new eo({schema:n,schemaId:a,root:e,baseId:t}))}if(o!==void 0)return e.refs[s]=jg.call(this,o)}je.resolveRef=Lg;function jg(e){return(0,dt.inlineRef)(e.schema,this.opts.inlineRefs)?e.schema:e.validate?e:ca.call(this,e)}function Yd(e){for(const t of this._compilations)if(Mg(t,e))return t}je.getCompilingSchema=Yd;function Mg(e,t){return e.schema===t.schema&&e.root===t.root&&e.baseId===t.baseId}function Fg(e,t){let s;for(;typeof(s=this.refs[t])=="string";)t=s;return s||this.schemas[t]||to.call(this,e,t)}function to(e,t){const s=this.opts.uriResolver.parse(t),r=(0,dt._getFullPath)(this.opts.uriResolver,s);let i=(0,dt.getFullPath)(this.opts.uriResolver,e.baseId,void 0);if(Object.keys(e.schema).length>0&&r===i)return Jo.call(this,s,e);const o=(0,dt.normalizeId)(r),n=this.refs[o]||this.schemas[o];if(typeof n=="string"){const a=to.call(this,e,n);return typeof(a==null?void 0:a.schema)!="object"?void 0:Jo.call(this,s,a)}if(typeof(n==null?void 0:n.schema)=="object"){if(n.validate||ca.call(this,n),o===(0,dt.normalizeId)(t)){const{schema:a}=n,{schemaId:l}=this.opts,c=a[l];return c&&(i=(0,dt.resolveUrl)(this.opts.uriResolver,i,c)),new eo({schema:a,schemaId:l,root:e,baseId:i})}return Jo.call(this,s,n)}}je.resolveSchema=to;const Vg=new Set(["properties","patternProperties","enum","dependencies","definitions"]);function Jo(e,{baseId:t,schema:s,root:r}){var i;if(((i=e.fragment)===null||i===void 0?void 0:i[0])!=="/")return;for(const a of e.fragment.slice(1).split("/")){if(typeof s=="boolean")return;const l=s[(0,rc.unescapeFragment)(a)];if(l===void 0)return;s=l;const c=typeof s=="object"&&s[this.opts.schemaId];!Vg.has(a)&&c&&(t=(0,dt.resolveUrl)(this.opts.uriResolver,t,c))}let o;if(typeof s!="boolean"&&s.$ref&&!(0,rc.schemaHasRulesButRef)(s,this.RULES)){const a=(0,dt.resolveUrl)(this.opts.uriResolver,t,s.$ref);o=to.call(this,r,a)}const{schemaId:n}=this.opts;if(o=o||new eo({schema:s,schemaId:n,root:r,baseId:t}),o.schema!==o.root.schema)return o}const Bg="https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#",qg="Meta-schema for $data reference (JSON AnySchema extension proposal)",Ug="object",Hg=["$data"],Kg={$data:{type:"string",anyOf:[{format:"relative-json-pointer"},{format:"json-pointer"}]}},Wg=!1,Gg={$id:Bg,description:qg,type:Ug,required:Hg,properties:Kg,additionalProperties:Wg};var da={},so={exports:{}};const Yg=RegExp.prototype.test.bind(/^[\da-f]{8}-[\da-f]{4}-[\da-f]{4}-[\da-f]{4}-[\da-f]{12}$/iu),Jd=RegExp.prototype.test.bind(/^(?:(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)$/u);function Xd(e){let t="",s=0,r=0;for(r=0;r<e.length;r++)if(s=e[r].charCodeAt(0),s!==48){if(!(s>=48&&s<=57||s>=65&&s<=70||s>=97&&s<=102))return"";t+=e[r];break}for(r+=1;r<e.length;r++){if(s=e[r].charCodeAt(0),!(s>=48&&s<=57||s>=65&&s<=70||s>=97&&s<=102))return"";t+=e[r]}return t}const Jg=RegExp.prototype.test.bind(/[^!"$&'()*+,\-.;=_`a-z{}~]/u);function ic(e){return e.length=0,!0}function Xg(e,t,s){if(e.length){const r=Xd(e);if(r!=="")t.push(r);else return s.error=!0,!1;e.length=0}return!0}function Qg(e){let t=0;const s={error:!1,address:"",zone:""},r=[],i=[];let o=!1,n=!1,a=Xg;for(let l=0;l<e.length;l++){const c=e[l];if(!(c==="["||c==="]"))if(c===":"){if(o===!0&&(n=!0),!a(i,r,s))break;if(++t>7){s.error=!0;break}l>0&&e[l-1]===":"&&(o=!0),r.push(":");continue}else if(c==="%"){if(!a(i,r,s))break;a=ic}else{i.push(c);continue}}return i.length&&(a===ic?s.zone=i.join(""):n?r.push(i.join("")):r.push(Xd(i))),s.address=r.join(""),s}function Qd(e){if(Zg(e,":")<2)return{host:e,isIPV6:!1};const t=Qg(e);if(t.error)return{host:e,isIPV6:!1};{let s=t.address,r=t.address;return t.zone&&(s+="%"+t.zone,r+="%25"+t.zone),{host:s,isIPV6:!0,escapedHost:r}}}function Zg(e,t){let s=0;for(let r=0;r<e.length;r++)e[r]===t&&s++;return s}function ey(e){let t=e;const s=[];let r=-1,i=0;for(;i=t.length;){if(i===1){if(t===".")break;if(t==="/"){s.push("/");break}else{s.push(t);break}}else if(i===2){if(t[0]==="."){if(t[1]===".")break;if(t[1]==="/"){t=t.slice(2);continue}}else if(t[0]==="/"&&(t[1]==="."||t[1]==="/")){s.push("/");break}}else if(i===3&&t==="/.."){s.length!==0&&s.pop(),s.push("/");break}if(t[0]==="."){if(t[1]==="."){if(t[2]==="/"){t=t.slice(3);continue}}else if(t[1]==="/"){t=t.slice(2);continue}}else if(t[0]==="/"&&t[1]==="."){if(t[2]==="/"){t=t.slice(2);continue}else if(t[2]==="."&&t[3]==="/"){t=t.slice(3),s.length!==0&&s.pop();continue}}if((r=t.indexOf("/",1))===-1){s.push(t);break}else s.push(t.slice(0,r)),t=t.slice(r)}return s.join("")}function ty(e,t){const s=t!==!0?escape:unescape;return e.scheme!==void 0&&(e.scheme=s(e.scheme)),e.userinfo!==void 0&&(e.userinfo=s(e.userinfo)),e.host!==void 0&&(e.host=s(e.host)),e.path!==void 0&&(e.path=s(e.path)),e.query!==void 0&&(e.query=s(e.query)),e.fragment!==void 0&&(e.fragment=s(e.fragment)),e}function sy(e){const t=[];if(e.userinfo!==void 0&&(t.push(e.userinfo),t.push("@")),e.host!==void 0){let s=unescape(e.host);if(!Jd(s)){const r=Qd(s);r.isIPV6===!0?s=`[${r.escapedHost}]`:s=e.host}t.push(s)}return(typeof e.port=="number"||typeof e.port=="string")&&(t.push(":"),t.push(String(e.port))),t.length?t.join(""):void 0}var Zd={nonSimpleDomain:Jg,recomposeAuthority:sy,normalizeComponentEncoding:ty,removeDotSegments:ey,isIPv4:Jd,isUUID:Yg,normalizeIPv6:Qd};const{isUUID:ry}=Zd,iy=/([\da-z][\d\-a-z]{0,31}):((?:[\w!$'()*+,\-.:;=@]|%[\da-f]{2})+)/iu;function eu(e){return e.secure===!0?!0:e.secure===!1?!1:e.scheme?e.scheme.length===3&&(e.scheme[0]==="w"||e.scheme[0]==="W")&&(e.scheme[1]==="s"||e.scheme[1]==="S")&&(e.scheme[2]==="s"||e.scheme[2]==="S"):!1}function tu(e){return e.host||(e.error=e.error||"HTTP URIs must have a host."),e}function su(e){const t=String(e.scheme).toLowerCase()==="https";return(e.port===(t?443:80)||e.port==="")&&(e.port=void 0),e.path||(e.path="/"),e}function oy(e){return e.secure=eu(e),e.resourceName=(e.path||"/")+(e.query?"?"+e.query:""),e.path=void 0,e.query=void 0,e}function ny(e){if((e.port===(eu(e)?443:80)||e.port==="")&&(e.port=void 0),typeof e.secure=="boolean"&&(e.scheme=e.secure?"wss":"ws",e.secure=void 0),e.resourceName){const[t,s]=e.resourceName.split("?");e.path=t&&t!=="/"?t:void 0,e.query=s,e.resourceName=void 0}return e.fragment=void 0,e}function ay(e,t){if(!e.path)return e.error="URN can not be parsed",e;const s=e.path.match(iy);if(s){const r=t.scheme||e.scheme||"urn";e.nid=s[1].toLowerCase(),e.nss=s[2];const i=`${r}:${t.nid||e.nid}`,o=ua(i);e.path=void 0,o&&(e=o.parse(e,t))}else e.error=e.error||"URN can not be parsed.";return e}function ly(e,t){if(e.nid===void 0)throw new Error("URN without nid cannot be serialized");const s=t.scheme||e.scheme||"urn",r=e.nid.toLowerCase(),i=`${s}:${t.nid||r}`,o=ua(i);o&&(e=o.serialize(e,t));const n=e,a=e.nss;return n.path=`${r||t.nid}:${a}`,t.skipEscape=!0,n}function cy(e,t){const s=e;return s.uuid=s.nss,s.nss=void 0,!t.tolerant&&(!s.uuid||!ry(s.uuid))&&(s.error=s.error||"UUID is not valid."),s}function dy(e){const t=e;return t.nss=(e.uuid||"").toLowerCase(),t}const ru={scheme:"http",domainHost:!0,parse:tu,serialize:su},uy={scheme:"https",domainHost:ru.domainHost,parse:tu,serialize:su},wi={scheme:"ws",domainHost:!0,parse:oy,serialize:ny},hy={scheme:"wss",domainHost:wi.domainHost,parse:wi.parse,serialize:wi.serialize},py={scheme:"urn",parse:ay,serialize:ly,skipNormalize:!0},fy={scheme:"urn:uuid",parse:cy,serialize:dy,skipNormalize:!0},Di={http:ru,https:uy,ws:wi,wss:hy,urn:py,"urn:uuid":fy};Object.setPrototypeOf(Di,null);function ua(e){return e&&(Di[e]||Di[e.toLowerCase()])||void 0}var my={SCHEMES:Di,getSchemeHandler:ua};const{normalizeIPv6:gy,removeDotSegments:yr,recomposeAuthority:yy,normalizeComponentEncoding:ii,isIPv4:by,nonSimpleDomain:vy}=Zd,{SCHEMES:wy,getSchemeHandler:iu}=my;function _y(e,t){return typeof e=="string"?e=bt(Nt(e,t),t):typeof e=="object"&&(e=Nt(bt(e,t),t)),e}function $y(e,t,s){const r=s?Object.assign({scheme:"null"},s):{scheme:"null"},i=ou(Nt(e,r),Nt(t,r),r,!0);return r.skipEscape=!0,bt(i,r)}function ou(e,t,s,r){const i={};return r||(e=Nt(bt(e,s),s),t=Nt(bt(t,s),s)),s=s||{},!s.tolerant&&t.scheme?(i.scheme=t.scheme,i.userinfo=t.userinfo,i.host=t.host,i.port=t.port,i.path=yr(t.path||""),i.query=t.query):(t.userinfo!==void 0||t.host!==void 0||t.port!==void 0?(i.userinfo=t.userinfo,i.host=t.host,i.port=t.port,i.path=yr(t.path||""),i.query=t.query):(t.path?(t.path[0]==="/"?i.path=yr(t.path):((e.userinfo!==void 0||e.host!==void 0||e.port!==void 0)&&!e.path?i.path="/"+t.path:e.path?i.path=e.path.slice(0,e.path.lastIndexOf("/")+1)+t.path:i.path=t.path,i.path=yr(i.path)),i.query=t.query):(i.path=e.path,t.query!==void 0?i.query=t.query:i.query=e.query),i.userinfo=e.userinfo,i.host=e.host,i.port=e.port),i.scheme=e.scheme),i.fragment=t.fragment,i}function ky(e,t,s){return typeof e=="string"?(e=unescape(e),e=bt(ii(Nt(e,s),!0),{...s,skipEscape:!0})):typeof e=="object"&&(e=bt(ii(e,!0),{...s,skipEscape:!0})),typeof t=="string"?(t=unescape(t),t=bt(ii(Nt(t,s),!0),{...s,skipEscape:!0})):typeof t=="object"&&(t=bt(ii(t,!0),{...s,skipEscape:!0})),e.toLowerCase()===t.toLowerCase()}function bt(e,t){const s={host:e.host,scheme:e.scheme,userinfo:e.userinfo,port:e.port,path:e.path,query:e.query,nid:e.nid,nss:e.nss,uuid:e.uuid,fragment:e.fragment,reference:e.reference,resourceName:e.resourceName,secure:e.secure,error:""},r=Object.assign({},t),i=[],o=iu(r.scheme||s.scheme);o&&o.serialize&&o.serialize(s,r),s.path!==void 0&&(r.skipEscape?s.path=unescape(s.path):(s.path=escape(s.path),s.scheme!==void 0&&(s.path=s.path.split("%3A").join(":")))),r.reference!=="suffix"&&s.scheme&&i.push(s.scheme,":");const n=yy(s);if(n!==void 0&&(r.reference!=="suffix"&&i.push("//"),i.push(n),s.path&&s.path[0]!=="/"&&i.push("/")),s.path!==void 0){let a=s.path;!r.absolutePath&&(!o||!o.absolutePath)&&(a=yr(a)),n===void 0&&a[0]==="/"&&a[1]==="/"&&(a="/%2F"+a.slice(2)),i.push(a)}return s.query!==void 0&&i.push("?",s.query),s.fragment!==void 0&&i.push("#",s.fragment),i.join("")}const xy=/^(?:([^#/:?]+):)?(?:\/\/((?:([^#/?@]*)@)?(\[[^#/?\]]+\]|[^#/:?]*)(?::(\d*))?))?([^#?]*)(?:\?([^#]*))?(?:#((?:.|[\n\r])*))?/u;function Nt(e,t){const s=Object.assign({},t),r={scheme:void 0,userinfo:void 0,host:"",port:void 0,path:"",query:void 0,fragment:void 0};let i=!1;s.reference==="suffix"&&(s.scheme?e=s.scheme+":"+e:e="//"+e);const o=e.match(xy);if(o){if(r.scheme=o[1],r.userinfo=o[3],r.host=o[4],r.port=parseInt(o[5],10),r.path=o[6]||"",r.query=o[7],r.fragment=o[8],isNaN(r.port)&&(r.port=o[5]),r.host)if(by(r.host)===!1){const l=gy(r.host);r.host=l.host.toLowerCase(),i=l.isIPV6}else i=!0;r.scheme===void 0&&r.userinfo===void 0&&r.host===void 0&&r.port===void 0&&r.query===void 0&&!r.path?r.reference="same-document":r.scheme===void 0?r.reference="relative":r.fragment===void 0?r.reference="absolute":r.reference="uri",s.reference&&s.reference!=="suffix"&&s.reference!==r.reference&&(r.error=r.error||"URI is not a "+s.reference+" reference.");const n=iu(s.scheme||r.scheme);if(!s.unicodeSupport&&(!n||!n.unicodeSupport)&&r.host&&(s.domainHost||n&&n.domainHost)&&i===!1&&vy(r.host))try{r.host=URL.domainToASCII(r.host.toLowerCase())}catch(a){r.error=r.error||"Host's domain name can not be converted to ASCII: "+a}(!n||n&&!n.skipNormalize)&&(e.indexOf("%")!==-1&&(r.scheme!==void 0&&(r.scheme=unescape(r.scheme)),r.host!==void 0&&(r.host=unescape(r.host))),r.path&&(r.path=escape(unescape(r.path))),r.fragment&&(r.fragment=encodeURI(decodeURIComponent(r.fragment)))),n&&n.parse&&n.parse(r,s)}else r.error=r.error||"URI can not be parsed.";return r}const ha={SCHEMES:wy,normalize:_y,resolve:$y,resolveComponent:ou,equal:ky,serialize:bt,parse:Nt};so.exports=ha;so.exports.default=ha;so.exports.fastUri=ha;var Sy=so.exports;Object.defineProperty(da,"__esModule",{value:!0});const nu=Sy;nu.code='require("ajv/dist/runtime/uri").default';da.default=nu;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.CodeGen=e.Name=e.nil=e.stringify=e.str=e._=e.KeywordCxt=void 0;var t=rt;Object.defineProperty(e,"KeywordCxt",{enumerable:!0,get:function(){return t.KeywordCxt}});var s=G;Object.defineProperty(e,"_",{enumerable:!0,get:function(){return s._}}),Object.defineProperty(e,"str",{enumerable:!0,get:function(){return s.str}}),Object.defineProperty(e,"stringify",{enumerable:!0,get:function(){return s.stringify}}),Object.defineProperty(e,"nil",{enumerable:!0,get:function(){return s.nil}}),Object.defineProperty(e,"Name",{enumerable:!0,get:function(){return s.Name}}),Object.defineProperty(e,"CodeGen",{enumerable:!0,get:function(){return s.CodeGen}});const r=Js,i=bs,o=hs,n=je,a=G,l=Pe,c=ke,u=D,d=Gg,p=da,h=(N,x)=>new RegExp(N,x);h.code="new RegExp";const v=["removeAdditional","useDefaults","coerceTypes"],f=new Set(["validate","serialize","parse","wrapper","root","schema","keyword","pattern","formats","validate$data","func","obj","Error"]),g={errorDataPath:"",format:"`validateFormats: false` can be used instead.",nullable:'"nullable" keyword is supported by default.',jsonPointers:"Deprecated jsPropertySyntax can be used instead.",extendRefs:"Deprecated ignoreKeywordsWithRef can be used instead.",missingRefs:"Pass empty schema with $id that should be ignored to ajv.addSchema.",processCode:"Use option `code: {process: (code, schemaEnv: object) => string}`",sourceCode:"Use option `code: {source: true}`",strictDefaults:"It is default now, see option `strict`.",strictKeywords:"It is default now, see option `strict`.",uniqueItems:'"uniqueItems" keyword is always validated.',unknownFormats:"Disable strict mode or pass `true` to `ajv.addFormat` (or `formats` option).",cache:"Map is used as cache, schema object as key.",serialize:"Map is used as cache, schema object as key.",ajvErrors:"It is default now."},y={ignoreKeywordsWithRef:"",jsPropertySyntax:"",unicode:'"minLength"/"maxLength" account for unicode characters by default.'},w=200;function k(N){var x,O,E,b,$,P,M,V,ne,oe,xe,$s,ko,xo,So,Eo,Co,Ao,Po,Oo,To,No,Io,Ro,Do;const nr=N.strict,zo=(x=N.code)===null||x===void 0?void 0:x.optimize,ml=zo===!0||zo===void 0?1:zo||0,gl=(E=(O=N.code)===null||O===void 0?void 0:O.regExp)!==null&&E!==void 0?E:h,nh=(b=N.uriResolver)!==null&&b!==void 0?b:p.default;return{strictSchema:(P=($=N.strictSchema)!==null&&$!==void 0?$:nr)!==null&&P!==void 0?P:!0,strictNumbers:(V=(M=N.strictNumbers)!==null&&M!==void 0?M:nr)!==null&&V!==void 0?V:!0,strictTypes:(oe=(ne=N.strictTypes)!==null&&ne!==void 0?ne:nr)!==null&&oe!==void 0?oe:"log",strictTuples:($s=(xe=N.strictTuples)!==null&&xe!==void 0?xe:nr)!==null&&$s!==void 0?$s:"log",strictRequired:(xo=(ko=N.strictRequired)!==null&&ko!==void 0?ko:nr)!==null&&xo!==void 0?xo:!1,code:N.code?{...N.code,optimize:ml,regExp:gl}:{optimize:ml,regExp:gl},loopRequired:(So=N.loopRequired)!==null&&So!==void 0?So:w,loopEnum:(Eo=N.loopEnum)!==null&&Eo!==void 0?Eo:w,meta:(Co=N.meta)!==null&&Co!==void 0?Co:!0,messages:(Ao=N.messages)!==null&&Ao!==void 0?Ao:!0,inlineRefs:(Po=N.inlineRefs)!==null&&Po!==void 0?Po:!0,schemaId:(Oo=N.schemaId)!==null&&Oo!==void 0?Oo:"$id",addUsedSchema:(To=N.addUsedSchema)!==null&&To!==void 0?To:!0,validateSchema:(No=N.validateSchema)!==null&&No!==void 0?No:!0,validateFormats:(Io=N.validateFormats)!==null&&Io!==void 0?Io:!0,unicodeRegExp:(Ro=N.unicodeRegExp)!==null&&Ro!==void 0?Ro:!0,int32range:(Do=N.int32range)!==null&&Do!==void 0?Do:!0,uriResolver:nh}}class S{constructor(x={}){this.schemas={},this.refs={},this.formats={},this._compilations=new Set,this._loading={},this._cache=new Map,x=this.opts={...x,...k(x)};const{es5:O,lines:E}=this.opts.code;this.scope=new a.ValueScope({scope:{},prefixes:f,es5:O,lines:E}),this.logger=L(x.logger);const b=x.validateFormats;x.validateFormats=!1,this.RULES=(0,o.getRules)(),C.call(this,g,x,"NOT SUPPORTED"),C.call(this,y,x,"DEPRECATED","warn"),this._metaOpts=Q.call(this),x.formats&&R.call(this),this._addVocabularies(),this._addDefaultMetaSchema(),x.keywords&&q.call(this,x.keywords),typeof x.meta=="object"&&this.addMetaSchema(x.meta),I.call(this),x.validateFormats=b}_addVocabularies(){this.addKeyword("$async")}_addDefaultMetaSchema(){const{$data:x,meta:O,schemaId:E}=this.opts;let b=d;E==="id"&&(b={...d},b.id=b.$id,delete b.$id),O&&x&&this.addMetaSchema(b,b[E],!1)}defaultMeta(){const{meta:x,schemaId:O}=this.opts;return this.opts.defaultMeta=typeof x=="object"?x[O]||x:void 0}validate(x,O){let E;if(typeof x=="string"){if(E=this.getSchema(x),!E)throw new Error(`no schema with key or ref "${x}"`)}else E=this.compile(x);const b=E(O);return"$async"in E||(this.errors=E.errors),b}compile(x,O){const E=this._addSchema(x,O);return E.validate||this._compileSchemaEnv(E)}compileAsync(x,O){if(typeof this.opts.loadSchema!="function")throw new Error("options.loadSchema should be a function");const{loadSchema:E}=this.opts;return b.call(this,x,O);async function b(oe,xe){await $.call(this,oe.$schema);const $s=this._addSchema(oe,xe);return $s.validate||P.call(this,$s)}async function $(oe){oe&&!this.getSchema(oe)&&await b.call(this,{$ref:oe},!0)}async function P(oe){try{return this._compileSchemaEnv(oe)}catch(xe){if(!(xe instanceof i.default))throw xe;return M.call(this,xe),await V.call(this,xe.missingSchema),P.call(this,oe)}}function M({missingSchema:oe,missingRef:xe}){if(this.refs[oe])throw new Error(`AnySchema ${oe} is loaded but ${xe} cannot be resolved`)}async function V(oe){const xe=await ne.call(this,oe);this.refs[oe]||await $.call(this,xe.$schema),this.refs[oe]||this.addSchema(xe,oe,O)}async function ne(oe){const xe=this._loading[oe];if(xe)return xe;try{return await(this._loading[oe]=E(oe))}finally{delete this._loading[oe]}}}addSchema(x,O,E,b=this.opts.validateSchema){if(Array.isArray(x)){for(const P of x)this.addSchema(P,void 0,E,b);return this}let $;if(typeof x=="object"){const{schemaId:P}=this.opts;if($=x[P],$!==void 0&&typeof $!="string")throw new Error(`schema ${P} must be string`)}return O=(0,l.normalizeId)(O||$),this._checkUnique(O),this.schemas[O]=this._addSchema(x,E,O,b,!0),this}addMetaSchema(x,O,E=this.opts.validateSchema){return this.addSchema(x,O,!0,E),this}validateSchema(x,O){if(typeof x=="boolean")return!0;let E;if(E=x.$schema,E!==void 0&&typeof E!="string")throw new Error("$schema must be a string");if(E=E||this.opts.defaultMeta||this.defaultMeta(),!E)return this.logger.warn("meta-schema not available"),this.errors=null,!0;const b=this.validate(E,x);if(!b&&O){const $="schema is invalid: "+this.errorsText();if(this.opts.validateSchema==="log")this.logger.error($);else throw new Error($)}return b}getSchema(x){let O;for(;typeof(O=T.call(this,x))=="string";)x=O;if(O===void 0){const{schemaId:E}=this.opts,b=new n.SchemaEnv({schema:{},schemaId:E});if(O=n.resolveSchema.call(this,b,x),!O)return;this.refs[x]=O}return O.validate||this._compileSchemaEnv(O)}removeSchema(x){if(x instanceof RegExp)return this._removeAllSchemas(this.schemas,x),this._removeAllSchemas(this.refs,x),this;switch(typeof x){case"undefined":return this._removeAllSchemas(this.schemas),this._removeAllSchemas(this.refs),this._cache.clear(),this;case"string":{const O=T.call(this,x);return typeof O=="object"&&this._cache.delete(O.schema),delete this.schemas[x],delete this.refs[x],this}case"object":{const O=x;this._cache.delete(O);let E=x[this.opts.schemaId];return E&&(E=(0,l.normalizeId)(E),delete this.schemas[E],delete this.refs[E]),this}default:throw new Error("ajv.removeSchema: invalid parameter")}}addVocabulary(x){for(const O of x)this.addKeyword(O);return this}addKeyword(x,O){let E;if(typeof x=="string")E=x,typeof O=="object"&&(this.logger.warn("these parameters are deprecated, see docs for addKeyword"),O.keyword=E);else if(typeof x=="object"&&O===void 0){if(O=x,E=O.keyword,Array.isArray(E)&&!E.length)throw new Error("addKeywords: keyword must be string or non-empty array")}else throw new Error("invalid addKeywords parameters");if(F.call(this,E,O),!O)return(0,u.eachItem)(E,$=>pe.call(this,$)),this;ye.call(this,O);const b={...O,type:(0,c.getJSONTypes)(O.type),schemaType:(0,c.getJSONTypes)(O.schemaType)};return(0,u.eachItem)(E,b.type.length===0?$=>pe.call(this,$,b):$=>b.type.forEach(P=>pe.call(this,$,b,P))),this}getKeyword(x){const O=this.RULES.all[x];return typeof O=="object"?O.definition:!!O}removeKeyword(x){const{RULES:O}=this;delete O.keywords[x],delete O.all[x];for(const E of O.rules){const b=E.rules.findIndex($=>$.keyword===x);b>=0&&E.rules.splice(b,1)}return this}addFormat(x,O){return typeof O=="string"&&(O=new RegExp(O)),this.formats[x]=O,this}errorsText(x=this.errors,{separator:O=", ",dataVar:E="data"}={}){return!x||x.length===0?"No errors":x.map(b=>`${E}${b.instancePath} ${b.message}`).reduce((b,$)=>b+O+$)}$dataMetaSchema(x,O){const E=this.RULES.all;x=JSON.parse(JSON.stringify(x));for(const b of O){const $=b.split("/").slice(1);let P=x;for(const M of $)P=P[M];for(const M in E){const V=E[M];if(typeof V!="object")continue;const{$data:ne}=V.definition,oe=P[M];ne&&oe&&(P[M]=Ne(oe))}}return x}_removeAllSchemas(x,O){for(const E in x){const b=x[E];(!O||O.test(E))&&(typeof b=="string"?delete x[E]:b&&!b.meta&&(this._cache.delete(b.schema),delete x[E]))}}_addSchema(x,O,E,b=this.opts.validateSchema,$=this.opts.addUsedSchema){let P;const{schemaId:M}=this.opts;if(typeof x=="object")P=x[M];else{if(this.opts.jtd)throw new Error("schema must be object");if(typeof x!="boolean")throw new Error("schema must be object or boolean")}let V=this._cache.get(x);if(V!==void 0)return V;E=(0,l.normalizeId)(P||E);const ne=l.getSchemaRefs.call(this,x,E);return V=new n.SchemaEnv({schema:x,schemaId:M,meta:O,baseId:E,localRefs:ne}),this._cache.set(V.schema,V),$&&!E.startsWith("#")&&(E&&this._checkUnique(E),this.refs[E]=V),b&&this.validateSchema(x,!0),V}_checkUnique(x){if(this.schemas[x]||this.refs[x])throw new Error(`schema with key or id "${x}" already exists`)}_compileSchemaEnv(x){if(x.meta?this._compileMetaSchema(x):n.compileSchema.call(this,x),!x.validate)throw new Error("ajv implementation error");return x.validate}_compileMetaSchema(x){const O=this.opts;this.opts=this._metaOpts;try{n.compileSchema.call(this,x)}finally{this.opts=O}}}S.ValidationError=r.default,S.MissingRefError=i.default,e.default=S;function C(N,x,O,E="error"){for(const b in N){const $=b;$ in x&&this.logger[E](`${O}: option ${b}. ${N[$]}`)}}function T(N){return N=(0,l.normalizeId)(N),this.schemas[N]||this.refs[N]}function I(){const N=this.opts.schemas;if(N)if(Array.isArray(N))this.addSchema(N);else for(const x in N)this.addSchema(N[x],x)}function R(){for(const N in this.opts.formats){const x=this.opts.formats[N];x&&this.addFormat(N,x)}}function q(N){if(Array.isArray(N)){this.addVocabulary(N);return}this.logger.warn("keywords option as map is deprecated, pass array");for(const x in N){const O=N[x];O.keyword||(O.keyword=x),this.addKeyword(O)}}function Q(){const N={...this.opts};for(const x of v)delete N[x];return N}const z={log(){},warn(){},error(){}};function L(N){if(N===!1)return z;if(N===void 0)return console;if(N.log&&N.warn&&N.error)return N;throw new Error("logger must implement log, warn and error methods")}const W=/^[a-z_$][a-z0-9_$:-]*$/i;function F(N,x){const{RULES:O}=this;if((0,u.eachItem)(N,E=>{if(O.keywords[E])throw new Error(`Keyword ${E} is already defined`);if(!W.test(E))throw new Error(`Keyword ${E} has invalid name`)}),!!x&&x.$data&&!("code"in x||"validate"in x))throw new Error('$data keyword must have "code" or "validate" function')}function pe(N,x,O){var E;const b=x==null?void 0:x.post;if(O&&b)throw new Error('keyword with "post" flag cannot have "type"');const{RULES:$}=this;let P=b?$.post:$.rules.find(({type:V})=>V===O);if(P||(P={type:O,rules:[]},$.rules.push(P)),$.keywords[N]=!0,!x)return;const M={keyword:N,definition:{...x,type:(0,c.getJSONTypes)(x.type),schemaType:(0,c.getJSONTypes)(x.schemaType)}};x.before?$e.call(this,P,M,x.before):P.rules.push(M),$.all[N]=M,(E=x.implements)===null||E===void 0||E.forEach(V=>this.addKeyword(V))}function $e(N,x,O){const E=N.rules.findIndex(b=>b.keyword===O);E>=0?N.rules.splice(E,0,x):(N.rules.push(x),this.logger.warn(`rule ${O} is not defined`))}function ye(N){let{metaSchema:x}=N;x!==void 0&&(N.$data&&this.opts.$data&&(x=Ne(x)),N.validateSchema=this.compile(x,!0))}const Ce={$ref:"https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#"};function Ne(N){return{anyOf:[N,Ce]}}})(Zn);var pa={},ro={},fa={};Object.defineProperty(fa,"__esModule",{value:!0});const Ey={keyword:"id",code(){throw new Error('NOT SUPPORTED: keyword "id", use "$id" for schema ID')}};fa.default=Ey;var It={};Object.defineProperty(It,"__esModule",{value:!0});It.callRef=It.getValidate=void 0;const Cy=bs,oc=Z,Be=G,xs=Qe,nc=je,oi=D,Ay={keyword:"$ref",schemaType:"string",code(e){const{gen:t,schema:s,it:r}=e,{baseId:i,schemaEnv:o,validateName:n,opts:a,self:l}=r,{root:c}=o;if((s==="#"||s==="#/")&&i===c.baseId)return d();const u=nc.resolveRef.call(l,c,i,s);if(u===void 0)throw new Cy.default(r.opts.uriResolver,i,s);if(u instanceof nc.SchemaEnv)return p(u);return h(u);function d(){if(o===c)return _i(e,n,o,o.$async);const v=t.scopeValue("root",{ref:c});return _i(e,(0,Be._)`${v}.validate`,c,c.$async)}function p(v){const f=au(e,v);_i(e,f,v,v.$async)}function h(v){const f=t.scopeValue("schema",a.code.source===!0?{ref:v,code:(0,Be.stringify)(v)}:{ref:v}),g=t.name("valid"),y=e.subschema({schema:v,dataTypes:[],schemaPath:Be.nil,topSchemaRef:f,errSchemaPath:s},g);e.mergeEvaluated(y),e.ok(g)}}};function au(e,t){const{gen:s}=e;return t.validate?s.scopeValue("validate",{ref:t.validate}):(0,Be._)`${s.scopeValue("wrapper",{ref:t})}.validate`}It.getValidate=au;function _i(e,t,s,r){const{gen:i,it:o}=e,{allErrors:n,schemaEnv:a,opts:l}=o,c=l.passContext?xs.default.this:Be.nil;r?u():d();function u(){if(!a.$async)throw new Error("async schema referenced by sync schema");const v=i.let("valid");i.try(()=>{i.code((0,Be._)`await ${(0,oc.callValidateCode)(e,t,c)}`),h(t),n||i.assign(v,!0)},f=>{i.if((0,Be._)`!(${f} instanceof ${o.ValidationError})`,()=>i.throw(f)),p(f),n||i.assign(v,!1)}),e.ok(v)}function d(){e.result((0,oc.callValidateCode)(e,t,c),()=>h(t),()=>p(t))}function p(v){const f=(0,Be._)`${v}.errors`;i.assign(xs.default.vErrors,(0,Be._)`${xs.default.vErrors} === null ? ${f} : ${xs.default.vErrors}.concat(${f})`),i.assign(xs.default.errors,(0,Be._)`${xs.default.vErrors}.length`)}function h(v){var f;if(!o.opts.unevaluated)return;const g=(f=s==null?void 0:s.validate)===null||f===void 0?void 0:f.evaluated;if(o.props!==!0)if(g&&!g.dynamicProps)g.props!==void 0&&(o.props=oi.mergeEvaluated.props(i,g.props,o.props));else{const y=i.var("props",(0,Be._)`${v}.evaluated.props`);o.props=oi.mergeEvaluated.props(i,y,o.props,Be.Name)}if(o.items!==!0)if(g&&!g.dynamicItems)g.items!==void 0&&(o.items=oi.mergeEvaluated.items(i,g.items,o.items));else{const y=i.var("items",(0,Be._)`${v}.evaluated.items`);o.items=oi.mergeEvaluated.items(i,y,o.items,Be.Name)}}}It.callRef=_i;It.default=Ay;Object.defineProperty(ro,"__esModule",{value:!0});const Py=fa,Oy=It,Ty=["$schema","$id","$defs","$vocabulary",{keyword:"$comment"},"definitions",Py.default,Oy.default];ro.default=Ty;var io={},ma={};Object.defineProperty(ma,"__esModule",{value:!0});const zi=G,jt=zi.operators,Li={maximum:{okStr:"<=",ok:jt.LTE,fail:jt.GT},minimum:{okStr:">=",ok:jt.GTE,fail:jt.LT},exclusiveMaximum:{okStr:"<",ok:jt.LT,fail:jt.GTE},exclusiveMinimum:{okStr:">",ok:jt.GT,fail:jt.LTE}},Ny={message:({keyword:e,schemaCode:t})=>(0,zi.str)`must be ${Li[e].okStr} ${t}`,params:({keyword:e,schemaCode:t})=>(0,zi._)`{comparison: ${Li[e].okStr}, limit: ${t}}`},Iy={keyword:Object.keys(Li),type:"number",schemaType:"number",$data:!0,error:Ny,code(e){const{keyword:t,data:s,schemaCode:r}=e;e.fail$data((0,zi._)`${s} ${Li[t].fail} ${r} || isNaN(${s})`)}};ma.default=Iy;var ga={};Object.defineProperty(ga,"__esModule",{value:!0});const Sr=G,Ry={message:({schemaCode:e})=>(0,Sr.str)`must be multiple of ${e}`,params:({schemaCode:e})=>(0,Sr._)`{multipleOf: ${e}}`},Dy={keyword:"multipleOf",type:"number",schemaType:"number",$data:!0,error:Ry,code(e){const{gen:t,data:s,schemaCode:r,it:i}=e,o=i.opts.multipleOfPrecision,n=t.let("res"),a=o?(0,Sr._)`Math.abs(Math.round(${n}) - ${n}) > 1e-${o}`:(0,Sr._)`${n} !== parseInt(${n})`;e.fail$data((0,Sr._)`(${r} === 0 || (${n} = ${s}/${r}, ${a}))`)}};ga.default=Dy;var ya={},ba={};Object.defineProperty(ba,"__esModule",{value:!0});function lu(e){const t=e.length;let s=0,r=0,i;for(;r<t;)s++,i=e.charCodeAt(r++),i>=55296&&i<=56319&&r<t&&(i=e.charCodeAt(r),(i&64512)===56320&&r++);return s}ba.default=lu;lu.code='require("ajv/dist/runtime/ucs2length").default';Object.defineProperty(ya,"__esModule",{value:!0});const rs=G,zy=D,Ly=ba,jy={message({keyword:e,schemaCode:t}){const s=e==="maxLength"?"more":"fewer";return(0,rs.str)`must NOT have ${s} than ${t} characters`},params:({schemaCode:e})=>(0,rs._)`{limit: ${e}}`},My={keyword:["maxLength","minLength"],type:"string",schemaType:"number",$data:!0,error:jy,code(e){const{keyword:t,data:s,schemaCode:r,it:i}=e,o=t==="maxLength"?rs.operators.GT:rs.operators.LT,n=i.opts.unicode===!1?(0,rs._)`${s}.length`:(0,rs._)`${(0,zy.useFunc)(e.gen,Ly.default)}(${s})`;e.fail$data((0,rs._)`${n} ${o} ${r}`)}};ya.default=My;var va={};Object.defineProperty(va,"__esModule",{value:!0});const Fy=Z,ji=G,Vy={message:({schemaCode:e})=>(0,ji.str)`must match pattern "${e}"`,params:({schemaCode:e})=>(0,ji._)`{pattern: ${e}}`},By={keyword:"pattern",type:"string",schemaType:"string",$data:!0,error:Vy,code(e){const{data:t,$data:s,schema:r,schemaCode:i,it:o}=e,n=o.opts.unicodeRegExp?"u":"",a=s?(0,ji._)`(new RegExp(${i}, ${n}))`:(0,Fy.usePattern)(e,r);e.fail$data((0,ji._)`!${a}.test(${t})`)}};va.default=By;var wa={};Object.defineProperty(wa,"__esModule",{value:!0});const Er=G,qy={message({keyword:e,schemaCode:t}){const s=e==="maxProperties"?"more":"fewer";return(0,Er.str)`must NOT have ${s} than ${t} properties`},params:({schemaCode:e})=>(0,Er._)`{limit: ${e}}`},Uy={keyword:["maxProperties","minProperties"],type:"object",schemaType:"number",$data:!0,error:qy,code(e){const{keyword:t,data:s,schemaCode:r}=e,i=t==="maxProperties"?Er.operators.GT:Er.operators.LT;e.fail$data((0,Er._)`Object.keys(${s}).length ${i} ${r}`)}};wa.default=Uy;var _a={};Object.defineProperty(_a,"__esModule",{value:!0});const fr=Z,Cr=G,Hy=D,Ky={message:({params:{missingProperty:e}})=>(0,Cr.str)`must have required property '${e}'`,params:({params:{missingProperty:e}})=>(0,Cr._)`{missingProperty: ${e}}`},Wy={keyword:"required",type:"object",schemaType:"array",$data:!0,error:Ky,code(e){const{gen:t,schema:s,schemaCode:r,data:i,$data:o,it:n}=e,{opts:a}=n;if(!o&&s.length===0)return;const l=s.length>=a.loopRequired;if(n.allErrors?c():u(),a.strictRequired){const h=e.parentSchema.properties,{definedProperties:v}=e.it;for(const f of s)if((h==null?void 0:h[f])===void 0&&!v.has(f)){const g=n.schemaEnv.baseId+n.errSchemaPath,y=`required property "${f}" is not defined at "${g}" (strictRequired)`;(0,Hy.checkStrictMode)(n,y,n.opts.strictRequired)}}function c(){if(l||o)e.block$data(Cr.nil,d);else for(const h of s)(0,fr.checkReportMissingProp)(e,h)}function u(){const h=t.let("missing");if(l||o){const v=t.let("valid",!0);e.block$data(v,()=>p(h,v)),e.ok(v)}else t.if((0,fr.checkMissingProp)(e,s,h)),(0,fr.reportMissingProp)(e,h),t.else()}function d(){t.forOf("prop",r,h=>{e.setParams({missingProperty:h}),t.if((0,fr.noPropertyInData)(t,i,h,a.ownProperties),()=>e.error())})}function p(h,v){e.setParams({missingProperty:h}),t.forOf(h,r,()=>{t.assign(v,(0,fr.propertyInData)(t,i,h,a.ownProperties)),t.if((0,Cr.not)(v),()=>{e.error(),t.break()})},Cr.nil)}}};_a.default=Wy;var $a={};Object.defineProperty($a,"__esModule",{value:!0});const Ar=G,Gy={message({keyword:e,schemaCode:t}){const s=e==="maxItems"?"more":"fewer";return(0,Ar.str)`must NOT have ${s} than ${t} items`},params:({schemaCode:e})=>(0,Ar._)`{limit: ${e}}`},Yy={keyword:["maxItems","minItems"],type:"array",schemaType:"number",$data:!0,error:Gy,code(e){const{keyword:t,data:s,schemaCode:r}=e,i=t==="maxItems"?Ar.operators.GT:Ar.operators.LT;e.fail$data((0,Ar._)`${s}.length ${i} ${r}`)}};$a.default=Yy;var ka={},Wr={};Object.defineProperty(Wr,"__esModule",{value:!0});const cu=Id;cu.code='require("ajv/dist/runtime/equal").default';Wr.default=cu;Object.defineProperty(ka,"__esModule",{value:!0});const Xo=ke,Ae=G,Jy=D,Xy=Wr,Qy={message:({params:{i:e,j:t}})=>(0,Ae.str)`must NOT have duplicate items (items ## ${t} and ${e} are identical)`,params:({params:{i:e,j:t}})=>(0,Ae._)`{i: ${e}, j: ${t}}`},Zy={keyword:"uniqueItems",type:"array",schemaType:"boolean",$data:!0,error:Qy,code(e){const{gen:t,data:s,$data:r,schema:i,parentSchema:o,schemaCode:n,it:a}=e;if(!r&&!i)return;const l=t.let("valid"),c=o.items?(0,Xo.getSchemaTypes)(o.items):[];e.block$data(l,u,(0,Ae._)`${n} === false`),e.ok(l);function u(){const v=t.let("i",(0,Ae._)`${s}.length`),f=t.let("j");e.setParams({i:v,j:f}),t.assign(l,!0),t.if((0,Ae._)`${v} > 1`,()=>(d()?p:h)(v,f))}function d(){return c.length>0&&!c.some(v=>v==="object"||v==="array")}function p(v,f){const g=t.name("item"),y=(0,Xo.checkDataTypes)(c,g,a.opts.strictNumbers,Xo.DataType.Wrong),w=t.const("indices",(0,Ae._)`{}`);t.for((0,Ae._)`;${v}--;`,()=>{t.let(g,(0,Ae._)`${s}[${v}]`),t.if(y,(0,Ae._)`continue`),c.length>1&&t.if((0,Ae._)`typeof ${g} == "string"`,(0,Ae._)`${g} += "_"`),t.if((0,Ae._)`typeof ${w}[${g}] == "number"`,()=>{t.assign(f,(0,Ae._)`${w}[${g}]`),e.error(),t.assign(l,!1).break()}).code((0,Ae._)`${w}[${g}] = ${v}`)})}function h(v,f){const g=(0,Jy.useFunc)(t,Xy.default),y=t.name("outer");t.label(y).for((0,Ae._)`;${v}--;`,()=>t.for((0,Ae._)`${f} = ${v}; ${f}--;`,()=>t.if((0,Ae._)`${g}(${s}[${v}], ${s}[${f}])`,()=>{e.error(),t.assign(l,!1).break(y)})))}}};ka.default=Zy;var xa={};Object.defineProperty(xa,"__esModule",{value:!0});const Sn=G,eb=D,tb=Wr,sb={message:"must be equal to constant",params:({schemaCode:e})=>(0,Sn._)`{allowedValue: ${e}}`},rb={keyword:"const",$data:!0,error:sb,code(e){const{gen:t,data:s,$data:r,schemaCode:i,schema:o}=e;r||o&&typeof o=="object"?e.fail$data((0,Sn._)`!${(0,eb.useFunc)(t,tb.default)}(${s}, ${i})`):e.fail((0,Sn._)`${o} !== ${s}`)}};xa.default=rb;var Sa={};Object.defineProperty(Sa,"__esModule",{value:!0});const br=G,ib=D,ob=Wr,nb={message:"must be equal to one of the allowed values",params:({schemaCode:e})=>(0,br._)`{allowedValues: ${e}}`},ab={keyword:"enum",schemaType:"array",$data:!0,error:nb,code(e){const{gen:t,data:s,$data:r,schema:i,schemaCode:o,it:n}=e;if(!r&&i.length===0)throw new Error("enum must have non-empty array");const a=i.length>=n.opts.loopEnum;let l;const c=()=>l??(l=(0,ib.useFunc)(t,ob.default));let u;if(a||r)u=t.let("valid"),e.block$data(u,d);else{if(!Array.isArray(i))throw new Error("ajv implementation error");const h=t.const("vSchema",o);u=(0,br.or)(...i.map((v,f)=>p(h,f)))}e.pass(u);function d(){t.assign(u,!1),t.forOf("v",o,h=>t.if((0,br._)`${c()}(${s}, ${h})`,()=>t.assign(u,!0).break()))}function p(h,v){const f=i[v];return typeof f=="object"&&f!==null?(0,br._)`${c()}(${s}, ${h}[${v}])`:(0,br._)`${s} === ${f}`}}};Sa.default=ab;Object.defineProperty(io,"__esModule",{value:!0});const lb=ma,cb=ga,db=ya,ub=va,hb=wa,pb=_a,fb=$a,mb=ka,gb=xa,yb=Sa,bb=[lb.default,cb.default,db.default,ub.default,hb.default,pb.default,fb.default,mb.default,{keyword:"type",schemaType:["string","array"]},{keyword:"nullable",schemaType:"boolean"},gb.default,yb.default];io.default=bb;var oo={},Xs={};Object.defineProperty(Xs,"__esModule",{value:!0});Xs.validateAdditionalItems=void 0;const is=G,En=D,vb={message:({params:{len:e}})=>(0,is.str)`must NOT have more than ${e} items`,params:({params:{len:e}})=>(0,is._)`{limit: ${e}}`},wb={keyword:"additionalItems",type:"array",schemaType:["boolean","object"],before:"uniqueItems",error:vb,code(e){const{parentSchema:t,it:s}=e,{items:r}=t;if(!Array.isArray(r)){(0,En.checkStrictMode)(s,'"additionalItems" is ignored when "items" is not an array of schemas');return}du(e,r)}};function du(e,t){const{gen:s,schema:r,data:i,keyword:o,it:n}=e;n.items=!0;const a=s.const("len",(0,is._)`${i}.length`);if(r===!1)e.setParams({len:t.length}),e.pass((0,is._)`${a} <= ${t.length}`);else if(typeof r=="object"&&!(0,En.alwaysValidSchema)(n,r)){const c=s.var("valid",(0,is._)`${a} <= ${t.length}`);s.if((0,is.not)(c),()=>l(c)),e.ok(c)}function l(c){s.forRange("i",t.length,a,u=>{e.subschema({keyword:o,dataProp:u,dataPropType:En.Type.Num},c),n.allErrors||s.if((0,is.not)(c),()=>s.break())})}}Xs.validateAdditionalItems=du;Xs.default=wb;var Ea={},Qs={};Object.defineProperty(Qs,"__esModule",{value:!0});Qs.validateTuple=void 0;const ac=G,$i=D,_b=Z,$b={keyword:"items",type:"array",schemaType:["object","array","boolean"],before:"uniqueItems",code(e){const{schema:t,it:s}=e;if(Array.isArray(t))return uu(e,"additionalItems",t);s.items=!0,!(0,$i.alwaysValidSchema)(s,t)&&e.ok((0,_b.validateArray)(e))}};function uu(e,t,s=e.schema){const{gen:r,parentSchema:i,data:o,keyword:n,it:a}=e;u(i),a.opts.unevaluated&&s.length&&a.items!==!0&&(a.items=$i.mergeEvaluated.items(r,s.length,a.items));const l=r.name("valid"),c=r.const("len",(0,ac._)`${o}.length`);s.forEach((d,p)=>{(0,$i.alwaysValidSchema)(a,d)||(r.if((0,ac._)`${c} > ${p}`,()=>e.subschema({keyword:n,schemaProp:p,dataProp:p},l)),e.ok(l))});function u(d){const{opts:p,errSchemaPath:h}=a,v=s.length,f=v===d.minItems&&(v===d.maxItems||d[t]===!1);if(p.strictTuples&&!f){const g=`"${n}" is ${v}-tuple, but minItems or maxItems/${t} are not specified or different at path "${h}"`;(0,$i.checkStrictMode)(a,g,p.strictTuples)}}}Qs.validateTuple=uu;Qs.default=$b;Object.defineProperty(Ea,"__esModule",{value:!0});const kb=Qs,xb={keyword:"prefixItems",type:"array",schemaType:["array"],before:"uniqueItems",code:e=>(0,kb.validateTuple)(e,"items")};Ea.default=xb;var Ca={};Object.defineProperty(Ca,"__esModule",{value:!0});const lc=G,Sb=D,Eb=Z,Cb=Xs,Ab={message:({params:{len:e}})=>(0,lc.str)`must NOT have more than ${e} items`,params:({params:{len:e}})=>(0,lc._)`{limit: ${e}}`},Pb={keyword:"items",type:"array",schemaType:["object","boolean"],before:"uniqueItems",error:Ab,code(e){const{schema:t,parentSchema:s,it:r}=e,{prefixItems:i}=s;r.items=!0,!(0,Sb.alwaysValidSchema)(r,t)&&(i?(0,Cb.validateAdditionalItems)(e,i):e.ok((0,Eb.validateArray)(e)))}};Ca.default=Pb;var Aa={};Object.defineProperty(Aa,"__esModule",{value:!0});const Ze=G,ni=D,Ob={message:({params:{min:e,max:t}})=>t===void 0?(0,Ze.str)`must contain at least ${e} valid item(s)`:(0,Ze.str)`must contain at least ${e} and no more than ${t} valid item(s)`,params:({params:{min:e,max:t}})=>t===void 0?(0,Ze._)`{minContains: ${e}}`:(0,Ze._)`{minContains: ${e}, maxContains: ${t}}`},Tb={keyword:"contains",type:"array",schemaType:["object","boolean"],before:"uniqueItems",trackErrors:!0,error:Ob,code(e){const{gen:t,schema:s,parentSchema:r,data:i,it:o}=e;let n,a;const{minContains:l,maxContains:c}=r;o.opts.next?(n=l===void 0?1:l,a=c):n=1;const u=t.const("len",(0,Ze._)`${i}.length`);if(e.setParams({min:n,max:a}),a===void 0&&n===0){(0,ni.checkStrictMode)(o,'"minContains" == 0 without "maxContains": "contains" keyword ignored');return}if(a!==void 0&&n>a){(0,ni.checkStrictMode)(o,'"minContains" > "maxContains" is always invalid'),e.fail();return}if((0,ni.alwaysValidSchema)(o,s)){let f=(0,Ze._)`${u} >= ${n}`;a!==void 0&&(f=(0,Ze._)`${f} && ${u} <= ${a}`),e.pass(f);return}o.items=!0;const d=t.name("valid");a===void 0&&n===1?h(d,()=>t.if(d,()=>t.break())):n===0?(t.let(d,!0),a!==void 0&&t.if((0,Ze._)`${i}.length > 0`,p)):(t.let(d,!1),p()),e.result(d,()=>e.reset());function p(){const f=t.name("_valid"),g=t.let("count",0);h(f,()=>t.if(f,()=>v(g)))}function h(f,g){t.forRange("i",0,u,y=>{e.subschema({keyword:"contains",dataProp:y,dataPropType:ni.Type.Num,compositeRule:!0},f),g()})}function v(f){t.code((0,Ze._)`${f}++`),a===void 0?t.if((0,Ze._)`${f} >= ${n}`,()=>t.assign(d,!0).break()):(t.if((0,Ze._)`${f} > ${a}`,()=>t.assign(d,!1).break()),n===1?t.assign(d,!0):t.if((0,Ze._)`${f} >= ${n}`,()=>t.assign(d,!0)))}}};Aa.default=Tb;var no={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.validateSchemaDeps=e.validatePropertyDeps=e.error=void 0;const t=G,s=D,r=Z;e.error={message:({params:{property:l,depsCount:c,deps:u}})=>{const d=c===1?"property":"properties";return(0,t.str)`must have ${d} ${u} when property ${l} is present`},params:({params:{property:l,depsCount:c,deps:u,missingProperty:d}})=>(0,t._)`{property: ${l},
    missingProperty: ${d},
    depsCount: ${c},
    deps: ${u}}`};const i={keyword:"dependencies",type:"object",schemaType:"object",error:e.error,code(l){const[c,u]=o(l);n(l,c),a(l,u)}};function o({schema:l}){const c={},u={};for(const d in l){if(d==="__proto__")continue;const p=Array.isArray(l[d])?c:u;p[d]=l[d]}return[c,u]}function n(l,c=l.schema){const{gen:u,data:d,it:p}=l;if(Object.keys(c).length===0)return;const h=u.let("missing");for(const v in c){const f=c[v];if(f.length===0)continue;const g=(0,r.propertyInData)(u,d,v,p.opts.ownProperties);l.setParams({property:v,depsCount:f.length,deps:f.join(", ")}),p.allErrors?u.if(g,()=>{for(const y of f)(0,r.checkReportMissingProp)(l,y)}):(u.if((0,t._)`${g} && (${(0,r.checkMissingProp)(l,f,h)})`),(0,r.reportMissingProp)(l,h),u.else())}}e.validatePropertyDeps=n;function a(l,c=l.schema){const{gen:u,data:d,keyword:p,it:h}=l,v=u.name("valid");for(const f in c)(0,s.alwaysValidSchema)(h,c[f])||(u.if((0,r.propertyInData)(u,d,f,h.opts.ownProperties),()=>{const g=l.subschema({keyword:p,schemaProp:f},v);l.mergeValidEvaluated(g,v)},()=>u.var(v,!0)),l.ok(v))}e.validateSchemaDeps=a,e.default=i})(no);var Pa={};Object.defineProperty(Pa,"__esModule",{value:!0});const hu=G,Nb=D,Ib={message:"property name must be valid",params:({params:e})=>(0,hu._)`{propertyName: ${e.propertyName}}`},Rb={keyword:"propertyNames",type:"object",schemaType:["object","boolean"],error:Ib,code(e){const{gen:t,schema:s,data:r,it:i}=e;if((0,Nb.alwaysValidSchema)(i,s))return;const o=t.name("valid");t.forIn("key",r,n=>{e.setParams({propertyName:n}),e.subschema({keyword:"propertyNames",data:n,dataTypes:["string"],propertyName:n,compositeRule:!0},o),t.if((0,hu.not)(o),()=>{e.error(!0),i.allErrors||t.break()})}),e.ok(o)}};Pa.default=Rb;var ao={};Object.defineProperty(ao,"__esModule",{value:!0});const ai=Z,ct=G,Db=Qe,li=D,zb={message:"must NOT have additional properties",params:({params:e})=>(0,ct._)`{additionalProperty: ${e.additionalProperty}}`},Lb={keyword:"additionalProperties",type:["object"],schemaType:["boolean","object"],allowUndefined:!0,trackErrors:!0,error:zb,code(e){const{gen:t,schema:s,parentSchema:r,data:i,errsCount:o,it:n}=e;if(!o)throw new Error("ajv implementation error");const{allErrors:a,opts:l}=n;if(n.props=!0,l.removeAdditional!=="all"&&(0,li.alwaysValidSchema)(n,s))return;const c=(0,ai.allSchemaProperties)(r.properties),u=(0,ai.allSchemaProperties)(r.patternProperties);d(),e.ok((0,ct._)`${o} === ${Db.default.errors}`);function d(){t.forIn("key",i,g=>{!c.length&&!u.length?v(g):t.if(p(g),()=>v(g))})}function p(g){let y;if(c.length>8){const w=(0,li.schemaRefOrVal)(n,r.properties,"properties");y=(0,ai.isOwnProperty)(t,w,g)}else c.length?y=(0,ct.or)(...c.map(w=>(0,ct._)`${g} === ${w}`)):y=ct.nil;return u.length&&(y=(0,ct.or)(y,...u.map(w=>(0,ct._)`${(0,ai.usePattern)(e,w)}.test(${g})`))),(0,ct.not)(y)}function h(g){t.code((0,ct._)`delete ${i}[${g}]`)}function v(g){if(l.removeAdditional==="all"||l.removeAdditional&&s===!1){h(g);return}if(s===!1){e.setParams({additionalProperty:g}),e.error(),a||t.break();return}if(typeof s=="object"&&!(0,li.alwaysValidSchema)(n,s)){const y=t.name("valid");l.removeAdditional==="failing"?(f(g,y,!1),t.if((0,ct.not)(y),()=>{e.reset(),h(g)})):(f(g,y),a||t.if((0,ct.not)(y),()=>t.break()))}}function f(g,y,w){const k={keyword:"additionalProperties",dataProp:g,dataPropType:li.Type.Str};w===!1&&Object.assign(k,{compositeRule:!0,createErrors:!1,allErrors:!1}),e.subschema(k,y)}}};ao.default=Lb;var Oa={};Object.defineProperty(Oa,"__esModule",{value:!0});const jb=rt,cc=Z,Qo=D,dc=ao,Mb={keyword:"properties",type:"object",schemaType:"object",code(e){const{gen:t,schema:s,parentSchema:r,data:i,it:o}=e;o.opts.removeAdditional==="all"&&r.additionalProperties===void 0&&dc.default.code(new jb.KeywordCxt(o,dc.default,"additionalProperties"));const n=(0,cc.allSchemaProperties)(s);for(const d of n)o.definedProperties.add(d);o.opts.unevaluated&&n.length&&o.props!==!0&&(o.props=Qo.mergeEvaluated.props(t,(0,Qo.toHash)(n),o.props));const a=n.filter(d=>!(0,Qo.alwaysValidSchema)(o,s[d]));if(a.length===0)return;const l=t.name("valid");for(const d of a)c(d)?u(d):(t.if((0,cc.propertyInData)(t,i,d,o.opts.ownProperties)),u(d),o.allErrors||t.else().var(l,!0),t.endIf()),e.it.definedProperties.add(d),e.ok(l);function c(d){return o.opts.useDefaults&&!o.compositeRule&&s[d].default!==void 0}function u(d){e.subschema({keyword:"properties",schemaProp:d,dataProp:d},l)}}};Oa.default=Mb;var Ta={};Object.defineProperty(Ta,"__esModule",{value:!0});const uc=Z,ci=G,hc=D,pc=D,Fb={keyword:"patternProperties",type:"object",schemaType:"object",code(e){const{gen:t,schema:s,data:r,parentSchema:i,it:o}=e,{opts:n}=o,a=(0,uc.allSchemaProperties)(s),l=a.filter(f=>(0,hc.alwaysValidSchema)(o,s[f]));if(a.length===0||l.length===a.length&&(!o.opts.unevaluated||o.props===!0))return;const c=n.strictSchema&&!n.allowMatchingProperties&&i.properties,u=t.name("valid");o.props!==!0&&!(o.props instanceof ci.Name)&&(o.props=(0,pc.evaluatedPropsToName)(t,o.props));const{props:d}=o;p();function p(){for(const f of a)c&&h(f),o.allErrors?v(f):(t.var(u,!0),v(f),t.if(u))}function h(f){for(const g in c)new RegExp(f).test(g)&&(0,hc.checkStrictMode)(o,`property ${g} matches pattern ${f} (use allowMatchingProperties)`)}function v(f){t.forIn("key",r,g=>{t.if((0,ci._)`${(0,uc.usePattern)(e,f)}.test(${g})`,()=>{const y=l.includes(f);y||e.subschema({keyword:"patternProperties",schemaProp:f,dataProp:g,dataPropType:pc.Type.Str},u),o.opts.unevaluated&&d!==!0?t.assign((0,ci._)`${d}[${g}]`,!0):!y&&!o.allErrors&&t.if((0,ci.not)(u),()=>t.break())})})}}};Ta.default=Fb;var Na={};Object.defineProperty(Na,"__esModule",{value:!0});const Vb=D,Bb={keyword:"not",schemaType:["object","boolean"],trackErrors:!0,code(e){const{gen:t,schema:s,it:r}=e;if((0,Vb.alwaysValidSchema)(r,s)){e.fail();return}const i=t.name("valid");e.subschema({keyword:"not",compositeRule:!0,createErrors:!1,allErrors:!1},i),e.failResult(i,()=>e.reset(),()=>e.error())},error:{message:"must NOT be valid"}};Na.default=Bb;var Ia={};Object.defineProperty(Ia,"__esModule",{value:!0});const qb=Z,Ub={keyword:"anyOf",schemaType:"array",trackErrors:!0,code:qb.validateUnion,error:{message:"must match a schema in anyOf"}};Ia.default=Ub;var Ra={};Object.defineProperty(Ra,"__esModule",{value:!0});const ki=G,Hb=D,Kb={message:"must match exactly one schema in oneOf",params:({params:e})=>(0,ki._)`{passingSchemas: ${e.passing}}`},Wb={keyword:"oneOf",schemaType:"array",trackErrors:!0,error:Kb,code(e){const{gen:t,schema:s,parentSchema:r,it:i}=e;if(!Array.isArray(s))throw new Error("ajv implementation error");if(i.opts.discriminator&&r.discriminator)return;const o=s,n=t.let("valid",!1),a=t.let("passing",null),l=t.name("_valid");e.setParams({passing:a}),t.block(c),e.result(n,()=>e.reset(),()=>e.error(!0));function c(){o.forEach((u,d)=>{let p;(0,Hb.alwaysValidSchema)(i,u)?t.var(l,!0):p=e.subschema({keyword:"oneOf",schemaProp:d,compositeRule:!0},l),d>0&&t.if((0,ki._)`${l} && ${n}`).assign(n,!1).assign(a,(0,ki._)`[${a}, ${d}]`).else(),t.if(l,()=>{t.assign(n,!0),t.assign(a,d),p&&e.mergeEvaluated(p,ki.Name)})})}}};Ra.default=Wb;var Da={};Object.defineProperty(Da,"__esModule",{value:!0});const Gb=D,Yb={keyword:"allOf",schemaType:"array",code(e){const{gen:t,schema:s,it:r}=e;if(!Array.isArray(s))throw new Error("ajv implementation error");const i=t.name("valid");s.forEach((o,n)=>{if((0,Gb.alwaysValidSchema)(r,o))return;const a=e.subschema({keyword:"allOf",schemaProp:n},i);e.ok(i),e.mergeEvaluated(a)})}};Da.default=Yb;var za={};Object.defineProperty(za,"__esModule",{value:!0});const Mi=G,pu=D,Jb={message:({params:e})=>(0,Mi.str)`must match "${e.ifClause}" schema`,params:({params:e})=>(0,Mi._)`{failingKeyword: ${e.ifClause}}`},Xb={keyword:"if",schemaType:["object","boolean"],trackErrors:!0,error:Jb,code(e){const{gen:t,parentSchema:s,it:r}=e;s.then===void 0&&s.else===void 0&&(0,pu.checkStrictMode)(r,'"if" without "then" and "else" is ignored');const i=fc(r,"then"),o=fc(r,"else");if(!i&&!o)return;const n=t.let("valid",!0),a=t.name("_valid");if(l(),e.reset(),i&&o){const u=t.let("ifClause");e.setParams({ifClause:u}),t.if(a,c("then",u),c("else",u))}else i?t.if(a,c("then")):t.if((0,Mi.not)(a),c("else"));e.pass(n,()=>e.error(!0));function l(){const u=e.subschema({keyword:"if",compositeRule:!0,createErrors:!1,allErrors:!1},a);e.mergeEvaluated(u)}function c(u,d){return()=>{const p=e.subschema({keyword:u},a);t.assign(n,a),e.mergeValidEvaluated(p,n),d?t.assign(d,(0,Mi._)`${u}`):e.setParams({ifClause:u})}}}};function fc(e,t){const s=e.schema[t];return s!==void 0&&!(0,pu.alwaysValidSchema)(e,s)}za.default=Xb;var La={};Object.defineProperty(La,"__esModule",{value:!0});const Qb=D,Zb={keyword:["then","else"],schemaType:["object","boolean"],code({keyword:e,parentSchema:t,it:s}){t.if===void 0&&(0,Qb.checkStrictMode)(s,`"${e}" without "if" is ignored`)}};La.default=Zb;Object.defineProperty(oo,"__esModule",{value:!0});const ev=Xs,tv=Ea,sv=Qs,rv=Ca,iv=Aa,ov=no,nv=Pa,av=ao,lv=Oa,cv=Ta,dv=Na,uv=Ia,hv=Ra,pv=Da,fv=za,mv=La;function gv(e=!1){const t=[dv.default,uv.default,hv.default,pv.default,fv.default,mv.default,nv.default,av.default,ov.default,lv.default,cv.default];return e?t.push(tv.default,rv.default):t.push(ev.default,sv.default),t.push(iv.default),t}oo.default=gv;var ja={},Zs={};Object.defineProperty(Zs,"__esModule",{value:!0});Zs.dynamicAnchor=void 0;const Zo=G,yv=Qe,mc=je,bv=It,vv={keyword:"$dynamicAnchor",schemaType:"string",code:e=>fu(e,e.schema)};function fu(e,t){const{gen:s,it:r}=e;r.schemaEnv.root.dynamicAnchors[t]=!0;const i=(0,Zo._)`${yv.default.dynamicAnchors}${(0,Zo.getProperty)(t)}`,o=r.errSchemaPath==="#"?r.validateName:wv(e);s.if((0,Zo._)`!${i}`,()=>s.assign(i,o))}Zs.dynamicAnchor=fu;function wv(e){const{schemaEnv:t,schema:s,self:r}=e.it,{root:i,baseId:o,localRefs:n,meta:a}=t.root,{schemaId:l}=r.opts,c=new mc.SchemaEnv({schema:s,schemaId:l,root:i,baseId:o,localRefs:n,meta:a});return mc.compileSchema.call(r,c),(0,bv.getValidate)(e,c)}Zs.default=vv;var er={};Object.defineProperty(er,"__esModule",{value:!0});er.dynamicRef=void 0;const gc=G,_v=Qe,yc=It,$v={keyword:"$dynamicRef",schemaType:"string",code:e=>mu(e,e.schema)};function mu(e,t){const{gen:s,keyword:r,it:i}=e;if(t[0]!=="#")throw new Error(`"${r}" only supports hash fragment reference`);const o=t.slice(1);if(i.allErrors)n();else{const l=s.let("valid",!1);n(l),e.ok(l)}function n(l){if(i.schemaEnv.root.dynamicAnchors[o]){const c=s.let("_v",(0,gc._)`${_v.default.dynamicAnchors}${(0,gc.getProperty)(o)}`);s.if(c,a(c,l),a(i.validateName,l))}else a(i.validateName,l)()}function a(l,c){return c?()=>s.block(()=>{(0,yc.callRef)(e,l),s.let(c,!0)}):()=>(0,yc.callRef)(e,l)}}er.dynamicRef=mu;er.default=$v;var Ma={};Object.defineProperty(Ma,"__esModule",{value:!0});const kv=Zs,xv=D,Sv={keyword:"$recursiveAnchor",schemaType:"boolean",code(e){e.schema?(0,kv.dynamicAnchor)(e,""):(0,xv.checkStrictMode)(e.it,"$recursiveAnchor: false is ignored")}};Ma.default=Sv;var Fa={};Object.defineProperty(Fa,"__esModule",{value:!0});const Ev=er,Cv={keyword:"$recursiveRef",schemaType:"string",code:e=>(0,Ev.dynamicRef)(e,e.schema)};Fa.default=Cv;Object.defineProperty(ja,"__esModule",{value:!0});const Av=Zs,Pv=er,Ov=Ma,Tv=Fa,Nv=[Av.default,Pv.default,Ov.default,Tv.default];ja.default=Nv;var Va={},Ba={};Object.defineProperty(Ba,"__esModule",{value:!0});const bc=no,Iv={keyword:"dependentRequired",type:"object",schemaType:"object",error:bc.error,code:e=>(0,bc.validatePropertyDeps)(e)};Ba.default=Iv;var qa={};Object.defineProperty(qa,"__esModule",{value:!0});const Rv=no,Dv={keyword:"dependentSchemas",type:"object",schemaType:"object",code:e=>(0,Rv.validateSchemaDeps)(e)};qa.default=Dv;var Ua={};Object.defineProperty(Ua,"__esModule",{value:!0});const zv=D,Lv={keyword:["maxContains","minContains"],type:"array",schemaType:"number",code({keyword:e,parentSchema:t,it:s}){t.contains===void 0&&(0,zv.checkStrictMode)(s,`"${e}" without "contains" is ignored`)}};Ua.default=Lv;Object.defineProperty(Va,"__esModule",{value:!0});const jv=Ba,Mv=qa,Fv=Ua,Vv=[jv.default,Mv.default,Fv.default];Va.default=Vv;var Ha={},Ka={};Object.defineProperty(Ka,"__esModule",{value:!0});const Mt=G,vc=D,Bv=Qe,qv={message:"must NOT have unevaluated properties",params:({params:e})=>(0,Mt._)`{unevaluatedProperty: ${e.unevaluatedProperty}}`},Uv={keyword:"unevaluatedProperties",type:"object",schemaType:["boolean","object"],trackErrors:!0,error:qv,code(e){const{gen:t,schema:s,data:r,errsCount:i,it:o}=e;if(!i)throw new Error("ajv implementation error");const{allErrors:n,props:a}=o;a instanceof Mt.Name?t.if((0,Mt._)`${a} !== true`,()=>t.forIn("key",r,d=>t.if(c(a,d),()=>l(d)))):a!==!0&&t.forIn("key",r,d=>a===void 0?l(d):t.if(u(a,d),()=>l(d))),o.props=!0,e.ok((0,Mt._)`${i} === ${Bv.default.errors}`);function l(d){if(s===!1){e.setParams({unevaluatedProperty:d}),e.error(),n||t.break();return}if(!(0,vc.alwaysValidSchema)(o,s)){const p=t.name("valid");e.subschema({keyword:"unevaluatedProperties",dataProp:d,dataPropType:vc.Type.Str},p),n||t.if((0,Mt.not)(p),()=>t.break())}}function c(d,p){return(0,Mt._)`!${d} || !${d}[${p}]`}function u(d,p){const h=[];for(const v in d)d[v]===!0&&h.push((0,Mt._)`${p} !== ${v}`);return(0,Mt.and)(...h)}}};Ka.default=Uv;var Wa={};Object.defineProperty(Wa,"__esModule",{value:!0});const os=G,wc=D,Hv={message:({params:{len:e}})=>(0,os.str)`must NOT have more than ${e} items`,params:({params:{len:e}})=>(0,os._)`{limit: ${e}}`},Kv={keyword:"unevaluatedItems",type:"array",schemaType:["boolean","object"],error:Hv,code(e){const{gen:t,schema:s,data:r,it:i}=e,o=i.items||0;if(o===!0)return;const n=t.const("len",(0,os._)`${r}.length`);if(s===!1)e.setParams({len:o}),e.fail((0,os._)`${n} > ${o}`);else if(typeof s=="object"&&!(0,wc.alwaysValidSchema)(i,s)){const l=t.var("valid",(0,os._)`${n} <= ${o}`);t.if((0,os.not)(l),()=>a(l,o)),e.ok(l)}i.items=!0;function a(l,c){t.forRange("i",c,n,u=>{e.subschema({keyword:"unevaluatedItems",dataProp:u,dataPropType:wc.Type.Num},l),i.allErrors||t.if((0,os.not)(l),()=>t.break())})}}};Wa.default=Kv;Object.defineProperty(Ha,"__esModule",{value:!0});const Wv=Ka,Gv=Wa,Yv=[Wv.default,Gv.default];Ha.default=Yv;var lo={},Ga={};Object.defineProperty(Ga,"__esModule",{value:!0});const be=G,Jv={message:({schemaCode:e})=>(0,be.str)`must match format "${e}"`,params:({schemaCode:e})=>(0,be._)`{format: ${e}}`},Xv={keyword:"format",type:["number","string"],schemaType:"string",$data:!0,error:Jv,code(e,t){const{gen:s,data:r,$data:i,schema:o,schemaCode:n,it:a}=e,{opts:l,errSchemaPath:c,schemaEnv:u,self:d}=a;if(!l.validateFormats)return;i?p():h();function p(){const v=s.scopeValue("formats",{ref:d.formats,code:l.code.formats}),f=s.const("fDef",(0,be._)`${v}[${n}]`),g=s.let("fType"),y=s.let("format");s.if((0,be._)`typeof ${f} == "object" && !(${f} instanceof RegExp)`,()=>s.assign(g,(0,be._)`${f}.type || "string"`).assign(y,(0,be._)`${f}.validate`),()=>s.assign(g,(0,be._)`"string"`).assign(y,f)),e.fail$data((0,be.or)(w(),k()));function w(){return l.strictSchema===!1?be.nil:(0,be._)`${n} && !${y}`}function k(){const S=u.$async?(0,be._)`(${f}.async ? await ${y}(${r}) : ${y}(${r}))`:(0,be._)`${y}(${r})`,C=(0,be._)`(typeof ${y} == "function" ? ${S} : ${y}.test(${r}))`;return(0,be._)`${y} && ${y} !== true && ${g} === ${t} && !${C}`}}function h(){const v=d.formats[o];if(!v){w();return}if(v===!0)return;const[f,g,y]=k(v);f===t&&e.pass(S());function w(){if(l.strictSchema===!1){d.logger.warn(C());return}throw new Error(C());function C(){return`unknown format "${o}" ignored in schema at path "${c}"`}}function k(C){const T=C instanceof RegExp?(0,be.regexpCode)(C):l.code.formats?(0,be._)`${l.code.formats}${(0,be.getProperty)(o)}`:void 0,I=s.scopeValue("formats",{key:o,ref:C,code:T});return typeof C=="object"&&!(C instanceof RegExp)?[C.type||"string",C.validate,(0,be._)`${I}.validate`]:["string",C,I]}function S(){if(typeof v=="object"&&!(v instanceof RegExp)&&v.async){if(!u.$async)throw new Error("async format in sync schema");return(0,be._)`await ${y}(${r})`}return typeof g=="function"?(0,be._)`${y}(${r})`:(0,be._)`${y}.test(${r})`}}}};Ga.default=Xv;Object.defineProperty(lo,"__esModule",{value:!0});const Qv=Ga,Zv=[Qv.default];lo.default=Zv;var ps={};Object.defineProperty(ps,"__esModule",{value:!0});ps.contentVocabulary=ps.metadataVocabulary=void 0;ps.metadataVocabulary=["title","description","default","deprecated","readOnly","writeOnly","examples"];ps.contentVocabulary=["contentMediaType","contentEncoding","contentSchema"];Object.defineProperty(pa,"__esModule",{value:!0});const e0=ro,t0=io,s0=oo,r0=ja,i0=Va,o0=Ha,n0=lo,_c=ps,a0=[r0.default,e0.default,t0.default,(0,s0.default)(!0),n0.default,_c.metadataVocabulary,_c.contentVocabulary,i0.default,o0.default];pa.default=a0;var co={},uo={};Object.defineProperty(uo,"__esModule",{value:!0});uo.DiscrError=void 0;var $c;(function(e){e.Tag="tag",e.Mapping="mapping"})($c||(uo.DiscrError=$c={}));Object.defineProperty(co,"__esModule",{value:!0});const As=G,Cn=uo,kc=je,l0=bs,c0=D,d0={message:({params:{discrError:e,tagName:t}})=>e===Cn.DiscrError.Tag?`tag "${t}" must be string`:`value of tag "${t}" must be in oneOf`,params:({params:{discrError:e,tag:t,tagName:s}})=>(0,As._)`{error: ${e}, tag: ${s}, tagValue: ${t}}`},u0={keyword:"discriminator",type:"object",schemaType:"object",error:d0,code(e){const{gen:t,data:s,schema:r,parentSchema:i,it:o}=e,{oneOf:n}=i;if(!o.opts.discriminator)throw new Error("discriminator: requires discriminator option");const a=r.propertyName;if(typeof a!="string")throw new Error("discriminator: requires propertyName");if(r.mapping)throw new Error("discriminator: mapping is not supported");if(!n)throw new Error("discriminator: requires oneOf keyword");const l=t.let("valid",!1),c=t.const("tag",(0,As._)`${s}${(0,As.getProperty)(a)}`);t.if((0,As._)`typeof ${c} == "string"`,()=>u(),()=>e.error(!1,{discrError:Cn.DiscrError.Tag,tag:c,tagName:a})),e.ok(l);function u(){const h=p();t.if(!1);for(const v in h)t.elseIf((0,As._)`${c} === ${v}`),t.assign(l,d(h[v]));t.else(),e.error(!1,{discrError:Cn.DiscrError.Mapping,tag:c,tagName:a}),t.endIf()}function d(h){const v=t.name("valid"),f=e.subschema({keyword:"oneOf",schemaProp:h},v);return e.mergeEvaluated(f,As.Name),v}function p(){var h;const v={},f=y(i);let g=!0;for(let S=0;S<n.length;S++){let C=n[S];if(C!=null&&C.$ref&&!(0,c0.schemaHasRulesButRef)(C,o.self.RULES)){const I=C.$ref;if(C=kc.resolveRef.call(o.self,o.schemaEnv.root,o.baseId,I),C instanceof kc.SchemaEnv&&(C=C.schema),C===void 0)throw new l0.default(o.opts.uriResolver,o.baseId,I)}const T=(h=C==null?void 0:C.properties)===null||h===void 0?void 0:h[a];if(typeof T!="object")throw new Error(`discriminator: oneOf subschemas (or referenced schemas) must have "properties/${a}"`);g=g&&(f||y(C)),w(T,S)}if(!g)throw new Error(`discriminator: "${a}" must be required`);return v;function y({required:S}){return Array.isArray(S)&&S.includes(a)}function w(S,C){if(S.const)k(S.const,C);else if(S.enum)for(const T of S.enum)k(T,C);else throw new Error(`discriminator: "properties/${a}" must have "const" or "enum"`)}function k(S,C){if(typeof S!="string"||S in v)throw new Error(`discriminator: "${a}" values must be unique strings`);v[S]=C}}}};co.default=u0;var Ya={};const h0="https://json-schema.org/draft/2020-12/schema",p0="https://json-schema.org/draft/2020-12/schema",f0={"https://json-schema.org/draft/2020-12/vocab/core":!0,"https://json-schema.org/draft/2020-12/vocab/applicator":!0,"https://json-schema.org/draft/2020-12/vocab/unevaluated":!0,"https://json-schema.org/draft/2020-12/vocab/validation":!0,"https://json-schema.org/draft/2020-12/vocab/meta-data":!0,"https://json-schema.org/draft/2020-12/vocab/format-annotation":!0,"https://json-schema.org/draft/2020-12/vocab/content":!0},m0="meta",g0="Core and Validation specifications meta-schema",y0=[{$ref:"meta/core"},{$ref:"meta/applicator"},{$ref:"meta/unevaluated"},{$ref:"meta/validation"},{$ref:"meta/meta-data"},{$ref:"meta/format-annotation"},{$ref:"meta/content"}],b0=["object","boolean"],v0="This meta-schema also defines keywords that have appeared in previous drafts in order to prevent incompatible extensions as they remain in common use.",w0={definitions:{$comment:'"definitions" has been replaced by "$defs".',type:"object",additionalProperties:{$dynamicRef:"#meta"},deprecated:!0,default:{}},dependencies:{$comment:'"dependencies" has been split and replaced by "dependentSchemas" and "dependentRequired" in order to serve their differing semantics.',type:"object",additionalProperties:{anyOf:[{$dynamicRef:"#meta"},{$ref:"meta/validation#/$defs/stringArray"}]},deprecated:!0,default:{}},$recursiveAnchor:{$comment:'"$recursiveAnchor" has been replaced by "$dynamicAnchor".',$ref:"meta/core#/$defs/anchorString",deprecated:!0},$recursiveRef:{$comment:'"$recursiveRef" has been replaced by "$dynamicRef".',$ref:"meta/core#/$defs/uriReferenceString",deprecated:!0}},_0={$schema:h0,$id:p0,$vocabulary:f0,$dynamicAnchor:m0,title:g0,allOf:y0,type:b0,$comment:v0,properties:w0},$0="https://json-schema.org/draft/2020-12/schema",k0="https://json-schema.org/draft/2020-12/meta/applicator",x0={"https://json-schema.org/draft/2020-12/vocab/applicator":!0},S0="meta",E0="Applicator vocabulary meta-schema",C0=["object","boolean"],A0={prefixItems:{$ref:"#/$defs/schemaArray"},items:{$dynamicRef:"#meta"},contains:{$dynamicRef:"#meta"},additionalProperties:{$dynamicRef:"#meta"},properties:{type:"object",additionalProperties:{$dynamicRef:"#meta"},default:{}},patternProperties:{type:"object",additionalProperties:{$dynamicRef:"#meta"},propertyNames:{format:"regex"},default:{}},dependentSchemas:{type:"object",additionalProperties:{$dynamicRef:"#meta"},default:{}},propertyNames:{$dynamicRef:"#meta"},if:{$dynamicRef:"#meta"},then:{$dynamicRef:"#meta"},else:{$dynamicRef:"#meta"},allOf:{$ref:"#/$defs/schemaArray"},anyOf:{$ref:"#/$defs/schemaArray"},oneOf:{$ref:"#/$defs/schemaArray"},not:{$dynamicRef:"#meta"}},P0={schemaArray:{type:"array",minItems:1,items:{$dynamicRef:"#meta"}}},O0={$schema:$0,$id:k0,$vocabulary:x0,$dynamicAnchor:S0,title:E0,type:C0,properties:A0,$defs:P0},T0="https://json-schema.org/draft/2020-12/schema",N0="https://json-schema.org/draft/2020-12/meta/unevaluated",I0={"https://json-schema.org/draft/2020-12/vocab/unevaluated":!0},R0="meta",D0="Unevaluated applicator vocabulary meta-schema",z0=["object","boolean"],L0={unevaluatedItems:{$dynamicRef:"#meta"},unevaluatedProperties:{$dynamicRef:"#meta"}},j0={$schema:T0,$id:N0,$vocabulary:I0,$dynamicAnchor:R0,title:D0,type:z0,properties:L0},M0="https://json-schema.org/draft/2020-12/schema",F0="https://json-schema.org/draft/2020-12/meta/content",V0={"https://json-schema.org/draft/2020-12/vocab/content":!0},B0="meta",q0="Content vocabulary meta-schema",U0=["object","boolean"],H0={contentEncoding:{type:"string"},contentMediaType:{type:"string"},contentSchema:{$dynamicRef:"#meta"}},K0={$schema:M0,$id:F0,$vocabulary:V0,$dynamicAnchor:B0,title:q0,type:U0,properties:H0},W0="https://json-schema.org/draft/2020-12/schema",G0="https://json-schema.org/draft/2020-12/meta/core",Y0={"https://json-schema.org/draft/2020-12/vocab/core":!0},J0="meta",X0="Core vocabulary meta-schema",Q0=["object","boolean"],Z0={$id:{$ref:"#/$defs/uriReferenceString",$comment:"Non-empty fragments not allowed.",pattern:"^[^#]*#?$"},$schema:{$ref:"#/$defs/uriString"},$ref:{$ref:"#/$defs/uriReferenceString"},$anchor:{$ref:"#/$defs/anchorString"},$dynamicRef:{$ref:"#/$defs/uriReferenceString"},$dynamicAnchor:{$ref:"#/$defs/anchorString"},$vocabulary:{type:"object",propertyNames:{$ref:"#/$defs/uriString"},additionalProperties:{type:"boolean"}},$comment:{type:"string"},$defs:{type:"object",additionalProperties:{$dynamicRef:"#meta"}}},ew={anchorString:{type:"string",pattern:"^[A-Za-z_][-A-Za-z0-9._]*$"},uriString:{type:"string",format:"uri"},uriReferenceString:{type:"string",format:"uri-reference"}},tw={$schema:W0,$id:G0,$vocabulary:Y0,$dynamicAnchor:J0,title:X0,type:Q0,properties:Z0,$defs:ew},sw="https://json-schema.org/draft/2020-12/schema",rw="https://json-schema.org/draft/2020-12/meta/format-annotation",iw={"https://json-schema.org/draft/2020-12/vocab/format-annotation":!0},ow="meta",nw="Format vocabulary meta-schema for annotation results",aw=["object","boolean"],lw={format:{type:"string"}},cw={$schema:sw,$id:rw,$vocabulary:iw,$dynamicAnchor:ow,title:nw,type:aw,properties:lw},dw="https://json-schema.org/draft/2020-12/schema",uw="https://json-schema.org/draft/2020-12/meta/meta-data",hw={"https://json-schema.org/draft/2020-12/vocab/meta-data":!0},pw="meta",fw="Meta-data vocabulary meta-schema",mw=["object","boolean"],gw={title:{type:"string"},description:{type:"string"},default:!0,deprecated:{type:"boolean",default:!1},readOnly:{type:"boolean",default:!1},writeOnly:{type:"boolean",default:!1},examples:{type:"array",items:!0}},yw={$schema:dw,$id:uw,$vocabulary:hw,$dynamicAnchor:pw,title:fw,type:mw,properties:gw},bw="https://json-schema.org/draft/2020-12/schema",vw="https://json-schema.org/draft/2020-12/meta/validation",ww={"https://json-schema.org/draft/2020-12/vocab/validation":!0},_w="meta",$w="Validation vocabulary meta-schema",kw=["object","boolean"],xw={type:{anyOf:[{$ref:"#/$defs/simpleTypes"},{type:"array",items:{$ref:"#/$defs/simpleTypes"},minItems:1,uniqueItems:!0}]},const:!0,enum:{type:"array",items:!0},multipleOf:{type:"number",exclusiveMinimum:0},maximum:{type:"number"},exclusiveMaximum:{type:"number"},minimum:{type:"number"},exclusiveMinimum:{type:"number"},maxLength:{$ref:"#/$defs/nonNegativeInteger"},minLength:{$ref:"#/$defs/nonNegativeIntegerDefault0"},pattern:{type:"string",format:"regex"},maxItems:{$ref:"#/$defs/nonNegativeInteger"},minItems:{$ref:"#/$defs/nonNegativeIntegerDefault0"},uniqueItems:{type:"boolean",default:!1},maxContains:{$ref:"#/$defs/nonNegativeInteger"},minContains:{$ref:"#/$defs/nonNegativeInteger",default:1},maxProperties:{$ref:"#/$defs/nonNegativeInteger"},minProperties:{$ref:"#/$defs/nonNegativeIntegerDefault0"},required:{$ref:"#/$defs/stringArray"},dependentRequired:{type:"object",additionalProperties:{$ref:"#/$defs/stringArray"}}},Sw={nonNegativeInteger:{type:"integer",minimum:0},nonNegativeIntegerDefault0:{$ref:"#/$defs/nonNegativeInteger",default:0},simpleTypes:{enum:["array","boolean","integer","null","number","object","string"]},stringArray:{type:"array",items:{type:"string"},uniqueItems:!0,default:[]}},Ew={$schema:bw,$id:vw,$vocabulary:ww,$dynamicAnchor:_w,title:$w,type:kw,properties:xw,$defs:Sw};Object.defineProperty(Ya,"__esModule",{value:!0});const Cw=_0,Aw=O0,Pw=j0,Ow=K0,Tw=tw,Nw=cw,Iw=yw,Rw=Ew,Dw=["/properties"];function zw(e){return[Cw,Aw,Pw,Ow,Tw,t(this,Nw),Iw,t(this,Rw)].forEach(s=>this.addMetaSchema(s,void 0,!1)),this;function t(s,r){return e?s.$dataMetaSchema(r,Dw):r}}Ya.default=zw;(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.MissingRefError=t.ValidationError=t.CodeGen=t.Name=t.nil=t.stringify=t.str=t._=t.KeywordCxt=t.Ajv2020=void 0;const s=Zn,r=pa,i=co,o=Ya,n="https://json-schema.org/draft/2020-12/schema";class a extends s.default{constructor(h={}){super({...h,dynamicRef:!0,next:!0,unevaluated:!0})}_addVocabularies(){super._addVocabularies(),r.default.forEach(h=>this.addVocabulary(h)),this.opts.discriminator&&this.addKeyword(i.default)}_addDefaultMetaSchema(){super._addDefaultMetaSchema();const{$data:h,meta:v}=this.opts;v&&(o.default.call(this,h),this.refs["http://json-schema.org/schema"]=n)}defaultMeta(){return this.opts.defaultMeta=super.defaultMeta()||(this.getSchema(n)?n:void 0)}}t.Ajv2020=a,e.exports=t=a,e.exports.Ajv2020=a,Object.defineProperty(t,"__esModule",{value:!0}),t.default=a;var l=rt;Object.defineProperty(t,"KeywordCxt",{enumerable:!0,get:function(){return l.KeywordCxt}});var c=G;Object.defineProperty(t,"_",{enumerable:!0,get:function(){return c._}}),Object.defineProperty(t,"str",{enumerable:!0,get:function(){return c.str}}),Object.defineProperty(t,"stringify",{enumerable:!0,get:function(){return c.stringify}}),Object.defineProperty(t,"nil",{enumerable:!0,get:function(){return c.nil}}),Object.defineProperty(t,"Name",{enumerable:!0,get:function(){return c.Name}}),Object.defineProperty(t,"CodeGen",{enumerable:!0,get:function(){return c.CodeGen}});var u=Js;Object.defineProperty(t,"ValidationError",{enumerable:!0,get:function(){return u.default}});var d=bs;Object.defineProperty(t,"MissingRefError",{enumerable:!0,get:function(){return d.default}})})(wn,wn.exports);var Lw=wn.exports;const jw=yd(Lw);var An={exports:{}},gu={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.formatNames=e.fastFormats=e.fullFormats=void 0;function t(z,L){return{validate:z,compare:L}}e.fullFormats={date:t(o,n),time:t(l(!0),c),"date-time":t(p(!0),h),"iso-time":t(l(),u),"iso-date-time":t(p(),v),duration:/^P(?!$)((\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+S)?)?|(\d+W)?)$/,uri:y,"uri-reference":/^(?:[a-z][a-z0-9+\-.]*:)?(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'"()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?(?:\?(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i,"uri-template":/^(?:(?:[^\x00-\x20"'<>%\\^`{|}]|%[0-9a-f]{2})|\{[+#./;?&=,!@|]?(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?(?:,(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?)*\})*$/i,url:/^(?:https?|ftp):\/\/(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u{00a1}-\u{ffff}]+-)*[a-z0-9\u{00a1}-\u{ffff}]+)(?:\.(?:[a-z0-9\u{00a1}-\u{ffff}]+-)*[a-z0-9\u{00a1}-\u{ffff}]+)*(?:\.(?:[a-z\u{00a1}-\u{ffff}]{2,})))(?::\d{2,5})?(?:\/[^\s]*)?$/iu,email:/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i,hostname:/^(?=.{1,253}\.?$)[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[-0-9a-z]{0,61}[0-9a-z])?)*\.?$/i,ipv4:/^(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)$/,ipv6:/^((([0-9a-f]{1,4}:){7}([0-9a-f]{1,4}|:))|(([0-9a-f]{1,4}:){6}(:[0-9a-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9a-f]{1,4}:){5}(((:[0-9a-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9a-f]{1,4}:){4}(((:[0-9a-f]{1,4}){1,3})|((:[0-9a-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){3}(((:[0-9a-f]{1,4}){1,4})|((:[0-9a-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){2}(((:[0-9a-f]{1,4}){1,5})|((:[0-9a-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){1}(((:[0-9a-f]{1,4}){1,6})|((:[0-9a-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9a-f]{1,4}){1,7})|((:[0-9a-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))$/i,regex:Q,uuid:/^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i,"json-pointer":/^(?:\/(?:[^~/]|~0|~1)*)*$/,"json-pointer-uri-fragment":/^#(?:\/(?:[a-z0-9_\-.!$&'()*+,;:=@]|%[0-9a-f]{2}|~0|~1)*)*$/i,"relative-json-pointer":/^(?:0|[1-9][0-9]*)(?:#|(?:\/(?:[^~/]|~0|~1)*)*)$/,byte:k,int32:{type:"number",validate:T},int64:{type:"number",validate:I},float:{type:"number",validate:R},double:{type:"number",validate:R},password:!0,binary:!0},e.fastFormats={...e.fullFormats,date:t(/^\d\d\d\d-[0-1]\d-[0-3]\d$/,n),time:t(/^(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)$/i,c),"date-time":t(/^\d\d\d\d-[0-1]\d-[0-3]\dt(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)$/i,h),"iso-time":t(/^(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)?$/i,u),"iso-date-time":t(/^\d\d\d\d-[0-1]\d-[0-3]\d[t\s](?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)?$/i,v),uri:/^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/)?[^\s]*$/i,"uri-reference":/^(?:(?:[a-z][a-z0-9+\-.]*:)?\/?\/)?(?:[^\\\s#][^\s#]*)?(?:#[^\\\s]*)?$/i,email:/^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)*$/i},e.formatNames=Object.keys(e.fullFormats);function s(z){return z%4===0&&(z%100!==0||z%400===0)}const r=/^(\d\d\d\d)-(\d\d)-(\d\d)$/,i=[0,31,28,31,30,31,30,31,31,30,31,30,31];function o(z){const L=r.exec(z);if(!L)return!1;const W=+L[1],F=+L[2],pe=+L[3];return F>=1&&F<=12&&pe>=1&&pe<=(F===2&&s(W)?29:i[F])}function n(z,L){if(z&&L)return z>L?1:z<L?-1:0}const a=/^(\d\d):(\d\d):(\d\d(?:\.\d+)?)(z|([+-])(\d\d)(?::?(\d\d))?)?$/i;function l(z){return function(W){const F=a.exec(W);if(!F)return!1;const pe=+F[1],$e=+F[2],ye=+F[3],Ce=F[4],Ne=F[5]==="-"?-1:1,N=+(F[6]||0),x=+(F[7]||0);if(N>23||x>59||z&&!Ce)return!1;if(pe<=23&&$e<=59&&ye<60)return!0;const O=$e-x*Ne,E=pe-N*Ne-(O<0?1:0);return(E===23||E===-1)&&(O===59||O===-1)&&ye<61}}function c(z,L){if(!(z&&L))return;const W=new Date("2020-01-01T"+z).valueOf(),F=new Date("2020-01-01T"+L).valueOf();if(W&&F)return W-F}function u(z,L){if(!(z&&L))return;const W=a.exec(z),F=a.exec(L);if(W&&F)return z=W[1]+W[2]+W[3],L=F[1]+F[2]+F[3],z>L?1:z<L?-1:0}const d=/t|\s/i;function p(z){const L=l(z);return function(F){const pe=F.split(d);return pe.length===2&&o(pe[0])&&L(pe[1])}}function h(z,L){if(!(z&&L))return;const W=new Date(z).valueOf(),F=new Date(L).valueOf();if(W&&F)return W-F}function v(z,L){if(!(z&&L))return;const[W,F]=z.split(d),[pe,$e]=L.split(d),ye=n(W,pe);if(ye!==void 0)return ye||c(F,$e)}const f=/\/|:/,g=/^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)(?:\?(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i;function y(z){return f.test(z)&&g.test(z)}const w=/^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/gm;function k(z){return w.lastIndex=0,w.test(z)}const S=-2147483648,C=2**31-1;function T(z){return Number.isInteger(z)&&z<=C&&z>=S}function I(z){return Number.isInteger(z)}function R(){return!0}const q=/[^\\]\\Z/;function Q(z){if(q.test(z))return!1;try{return new RegExp(z),!0}catch{return!1}}})(gu);var yu={},Pn={exports:{}},Ja={};Object.defineProperty(Ja,"__esModule",{value:!0});const Mw=ro,Fw=io,Vw=oo,Bw=lo,xc=ps,qw=[Mw.default,Fw.default,(0,Vw.default)(),Bw.default,xc.metadataVocabulary,xc.contentVocabulary];Ja.default=qw;const Uw="http://json-schema.org/draft-07/schema#",Hw="http://json-schema.org/draft-07/schema#",Kw="Core schema meta-schema",Ww={schemaArray:{type:"array",minItems:1,items:{$ref:"#"}},nonNegativeInteger:{type:"integer",minimum:0},nonNegativeIntegerDefault0:{allOf:[{$ref:"#/definitions/nonNegativeInteger"},{default:0}]},simpleTypes:{enum:["array","boolean","integer","null","number","object","string"]},stringArray:{type:"array",items:{type:"string"},uniqueItems:!0,default:[]}},Gw=["object","boolean"],Yw={$id:{type:"string",format:"uri-reference"},$schema:{type:"string",format:"uri"},$ref:{type:"string",format:"uri-reference"},$comment:{type:"string"},title:{type:"string"},description:{type:"string"},default:!0,readOnly:{type:"boolean",default:!1},examples:{type:"array",items:!0},multipleOf:{type:"number",exclusiveMinimum:0},maximum:{type:"number"},exclusiveMaximum:{type:"number"},minimum:{type:"number"},exclusiveMinimum:{type:"number"},maxLength:{$ref:"#/definitions/nonNegativeInteger"},minLength:{$ref:"#/definitions/nonNegativeIntegerDefault0"},pattern:{type:"string",format:"regex"},additionalItems:{$ref:"#"},items:{anyOf:[{$ref:"#"},{$ref:"#/definitions/schemaArray"}],default:!0},maxItems:{$ref:"#/definitions/nonNegativeInteger"},minItems:{$ref:"#/definitions/nonNegativeIntegerDefault0"},uniqueItems:{type:"boolean",default:!1},contains:{$ref:"#"},maxProperties:{$ref:"#/definitions/nonNegativeInteger"},minProperties:{$ref:"#/definitions/nonNegativeIntegerDefault0"},required:{$ref:"#/definitions/stringArray"},additionalProperties:{$ref:"#"},definitions:{type:"object",additionalProperties:{$ref:"#"},default:{}},properties:{type:"object",additionalProperties:{$ref:"#"},default:{}},patternProperties:{type:"object",additionalProperties:{$ref:"#"},propertyNames:{format:"regex"},default:{}},dependencies:{type:"object",additionalProperties:{anyOf:[{$ref:"#"},{$ref:"#/definitions/stringArray"}]}},propertyNames:{$ref:"#"},const:!0,enum:{type:"array",items:!0,minItems:1,uniqueItems:!0},type:{anyOf:[{$ref:"#/definitions/simpleTypes"},{type:"array",items:{$ref:"#/definitions/simpleTypes"},minItems:1,uniqueItems:!0}]},format:{type:"string"},contentMediaType:{type:"string"},contentEncoding:{type:"string"},if:{$ref:"#"},then:{$ref:"#"},else:{$ref:"#"},allOf:{$ref:"#/definitions/schemaArray"},anyOf:{$ref:"#/definitions/schemaArray"},oneOf:{$ref:"#/definitions/schemaArray"},not:{$ref:"#"}},Jw={$schema:Uw,$id:Hw,title:Kw,definitions:Ww,type:Gw,properties:Yw,default:!0};(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.MissingRefError=t.ValidationError=t.CodeGen=t.Name=t.nil=t.stringify=t.str=t._=t.KeywordCxt=t.Ajv=void 0;const s=Zn,r=Ja,i=co,o=Jw,n=["/properties"],a="http://json-schema.org/draft-07/schema";class l extends s.default{_addVocabularies(){super._addVocabularies(),r.default.forEach(v=>this.addVocabulary(v)),this.opts.discriminator&&this.addKeyword(i.default)}_addDefaultMetaSchema(){if(super._addDefaultMetaSchema(),!this.opts.meta)return;const v=this.opts.$data?this.$dataMetaSchema(o,n):o;this.addMetaSchema(v,a,!1),this.refs["http://json-schema.org/schema"]=a}defaultMeta(){return this.opts.defaultMeta=super.defaultMeta()||(this.getSchema(a)?a:void 0)}}t.Ajv=l,e.exports=t=l,e.exports.Ajv=l,Object.defineProperty(t,"__esModule",{value:!0}),t.default=l;var c=rt;Object.defineProperty(t,"KeywordCxt",{enumerable:!0,get:function(){return c.KeywordCxt}});var u=G;Object.defineProperty(t,"_",{enumerable:!0,get:function(){return u._}}),Object.defineProperty(t,"str",{enumerable:!0,get:function(){return u.str}}),Object.defineProperty(t,"stringify",{enumerable:!0,get:function(){return u.stringify}}),Object.defineProperty(t,"nil",{enumerable:!0,get:function(){return u.nil}}),Object.defineProperty(t,"Name",{enumerable:!0,get:function(){return u.Name}}),Object.defineProperty(t,"CodeGen",{enumerable:!0,get:function(){return u.CodeGen}});var d=Js;Object.defineProperty(t,"ValidationError",{enumerable:!0,get:function(){return d.default}});var p=bs;Object.defineProperty(t,"MissingRefError",{enumerable:!0,get:function(){return p.default}})})(Pn,Pn.exports);var Xw=Pn.exports;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.formatLimitDefinition=void 0;const t=Xw,s=G,r=s.operators,i={formatMaximum:{okStr:"<=",ok:r.LTE,fail:r.GT},formatMinimum:{okStr:">=",ok:r.GTE,fail:r.LT},formatExclusiveMaximum:{okStr:"<",ok:r.LT,fail:r.GTE},formatExclusiveMinimum:{okStr:">",ok:r.GT,fail:r.LTE}},o={message:({keyword:a,schemaCode:l})=>(0,s.str)`should be ${i[a].okStr} ${l}`,params:({keyword:a,schemaCode:l})=>(0,s._)`{comparison: ${i[a].okStr}, limit: ${l}}`};e.formatLimitDefinition={keyword:Object.keys(i),type:"string",schemaType:"string",$data:!0,error:o,code(a){const{gen:l,data:c,schemaCode:u,keyword:d,it:p}=a,{opts:h,self:v}=p;if(!h.validateFormats)return;const f=new t.KeywordCxt(p,v.RULES.all.format.definition,"format");f.$data?g():y();function g(){const k=l.scopeValue("formats",{ref:v.formats,code:h.code.formats}),S=l.const("fmt",(0,s._)`${k}[${f.schemaCode}]`);a.fail$data((0,s.or)((0,s._)`typeof ${S} != "object"`,(0,s._)`${S} instanceof RegExp`,(0,s._)`typeof ${S}.compare != "function"`,w(S)))}function y(){const k=f.schema,S=v.formats[k];if(!S||S===!0)return;if(typeof S!="object"||S instanceof RegExp||typeof S.compare!="function")throw new Error(`"${d}": format "${k}" does not define "compare" function`);const C=l.scopeValue("formats",{key:k,ref:S,code:h.code.formats?(0,s._)`${h.code.formats}${(0,s.getProperty)(k)}`:void 0});a.fail$data(w(C))}function w(k){return(0,s._)`${k}.compare(${c}, ${u}) ${i[d].fail} 0`}},dependencies:["format"]};const n=a=>(a.addKeyword(e.formatLimitDefinition),a);e.default=n})(yu);(function(e,t){Object.defineProperty(t,"__esModule",{value:!0});const s=gu,r=yu,i=G,o=new i.Name("fullFormats"),n=new i.Name("fastFormats"),a=(c,u={keywords:!0})=>{if(Array.isArray(u))return l(c,u,s.fullFormats,o),c;const[d,p]=u.mode==="fast"?[s.fastFormats,n]:[s.fullFormats,o],h=u.formats||s.formatNames;return l(c,h,d,p),u.keywords&&(0,r.default)(c),c};a.get=(c,u="full")=>{const p=(u==="fast"?s.fastFormats:s.fullFormats)[c];if(!p)throw new Error(`Unknown format "${c}"`);return p};function l(c,u,d,p){var h,v;(h=(v=c.opts.code).formats)!==null&&h!==void 0||(v.formats=(0,i._)`require("ajv-formats/dist/formats").${p}`);for(const f of u)c.addFormat(f,d[f])}e.exports=t=a,Object.defineProperty(t,"__esModule",{value:!0}),t.default=a})(An,An.exports);var Qw=An.exports;const Zw=yd(Qw),e_="https://json-schema.org/draft/2020-12/schema",t_="https://choria.io/schemas/ccm/v1/manifest.json",s_="CCM Manifest",r_="A CCM manifest file combining Hiera data and configuration management resources",i_="object",o_={data:{type:"object",description:"Base data section containing key-value pairs that can be referenced in resources using template expressions like {{ Data.key }}",additionalProperties:!0},ccm:{type:"object",description:"CCM configuration section containing resource definitions",properties:{pre_message:{type:"string",description:"Message to display before applying resources"},post_message:{type:"string",description:"Message to display after applying resources"},fail_on_error:{type:"boolean",description:"If true, stop processing resources when any resource fails. If false, continue processing remaining resources.",default:!1},resources_jet_file:{type:"string",description:"Path to a Jet template file that generates the resources list"},resources:{type:"array",description:"List of configuration management resources to apply",items:{$ref:"#/$defs/resource"}}},additionalProperties:!1},hierarchy:{$ref:"#/$defs/hierarchy"},overrides:{type:"object",description:"Override sections keyed by hierarchy order entries (e.g., 'os:debian'). Values in matching overrides will replace or merge with base data depending on the merge strategy.",additionalProperties:{type:"object",description:"Override data values for a specific hierarchy entry",additionalProperties:!0}}},n_=!1,a_={hierarchy:{type:"object",description:"Describes how data sections should be resolved using Hiera-like lookups",properties:{order:{type:"array",description:"Lookup sequence for data sections. Entries can contain template expressions like {{ lookup('facts.host.info.platformFamily') }}",items:{type:"string"}},merge:{type:"string",description:"Merge strategy for combining data from multiple hierarchy levels",enum:["first","deep"],default:"first"}},additionalProperties:!1},resource:{type:"object",description:"A configuration management resource entry. Each entry should have exactly one resource type key.",properties:{package:{oneOf:[{$ref:"#/$defs/packageResourceList"},{$ref:"#/$defs/packageResourcePropertiesWithName"}]},service:{oneOf:[{$ref:"#/$defs/serviceResourceList"},{$ref:"#/$defs/serviceResourcePropertiesWithName"}]},file:{oneOf:[{$ref:"#/$defs/fileResourceList"},{$ref:"#/$defs/fileResourcePropertiesWithName"}]},exec:{oneOf:[{$ref:"#/$defs/execResourceList"},{$ref:"#/$defs/execResourcePropertiesWithName"}]},archive:{oneOf:[{$ref:"#/$defs/archiveResourceList"},{$ref:"#/$defs/archiveResourcePropertiesWithName"}]}},minProperties:1,maxProperties:1,additionalProperties:!1},packageResourceList:{type:"array",description:"List of package resources to manage (named format)",items:{type:"object",description:"Package resource entry keyed by package name or template expression",additionalProperties:{$ref:"#/$defs/packageResourceProperties"},minProperties:1,maxProperties:1}},serviceResourceList:{type:"array",description:"List of service resources to manage (named format)",items:{type:"object",description:"Service resource entry keyed by service name or template expression",additionalProperties:{$ref:"#/$defs/serviceResourceProperties"},minProperties:1,maxProperties:1}},fileResourceList:{type:"array",description:"List of file resources to manage (named format)",items:{type:"object",description:"File resource entry keyed by absolute file path",additionalProperties:{$ref:"#/$defs/fileResourceProperties"},minProperties:1,maxProperties:1}},execResourceList:{type:"array",description:"List of exec resources to manage (named format)",items:{type:"object",description:"Exec resource entry keyed by command to execute",additionalProperties:{$ref:"#/$defs/execResourceProperties"},minProperties:1,maxProperties:1}},archiveResourceList:{type:"array",description:"List of archive resources to manage (named format)",items:{type:"object",description:"Archive resource entry keyed by absolute file path where the archive will be saved",additionalProperties:{$ref:"#/$defs/archiveResourceProperties"},minProperties:1,maxProperties:1}},packageResourcePropertiesWithName:{type:"object",description:"Properties for a package resource (direct format with name)",properties:{name:{type:"string",description:"The package name"},alias:{type:"string",description:"An alternative name for the resource that can be used in require/subscribe references"},ensure:{type:"string",description:"Desired state of the package: 'present' to install, 'absent' to remove, 'latest' to upgrade to latest version, or a specific version string",examples:["present","absent","latest","1.2.3"]},provider:{type:"string",description:"Specific provider to use for managing this resource"},health_checks:{type:"array",description:"Health checks to run after applying the resource",items:{$ref:"#/$defs/healthCheck"}},require:{type:"array",description:"List of resources that must be applied before this resource, in format 'type#name'",items:{type:"string",pattern:"^[a-z]+#.+$"}},control:{$ref:"#/$defs/resourceControl"}},required:["name"],additionalProperties:!1},serviceResourcePropertiesWithName:{type:"object",description:"Properties for a service resource (direct format with name)",properties:{name:{type:"string",description:"The service name"},alias:{type:"string",description:"An alternative name for the resource that can be used in require/subscribe references"},ensure:{type:"string",description:"Desired running state of the service",enum:["running","stopped"],default:"running"},provider:{type:"string",description:"Specific provider to use for managing this resource"},health_checks:{type:"array",description:"Health checks to run after applying the resource",items:{$ref:"#/$defs/healthCheck"}},require:{type:"array",description:"List of resources that must be applied before this resource, in format 'type#name'",items:{type:"string",pattern:"^[a-z]+#.+$"}},control:{$ref:"#/$defs/resourceControl"},enable:{type:"boolean",description:"Whether the service should be enabled to start on boot"},subscribe:{type:"array",description:"List of resources to subscribe to for refresh notifications, in format 'type#name'. When a subscribed resource changes, this service will be restarted.",items:{type:"string",pattern:"^[a-z]+#.+$"}}},required:["name"],additionalProperties:!1},fileResourcePropertiesWithName:{type:"object",description:"Properties for a file resource (direct format with name)",properties:{name:{type:"string",description:"The absolute file path"},alias:{type:"string",description:"An alternative name for the resource that can be used in require/subscribe references"},ensure:{type:"string",description:"Desired state of the file: 'present' for a regular file, 'absent' to remove, 'directory' to create a directory",enum:["present","absent","directory"],default:"present"},provider:{type:"string",description:"Specific provider to use for managing this resource"},health_checks:{type:"array",description:"Health checks to run after applying the resource",items:{$ref:"#/$defs/healthCheck"}},require:{type:"array",description:"List of resources that must be applied before this resource, in format 'type#name'",items:{type:"string",pattern:"^[a-z]+#.+$"}},control:{$ref:"#/$defs/resourceControl"},content:{type:"string",description:"Desired file contents as a string. Mutually exclusive with 'source'."},source:{type:"string",description:"Local file path to use as the source for file contents. Mutually exclusive with 'content'."},owner:{type:"string",description:"User that should own the file"},group:{type:"string",description:"Group that should own the file"},mode:{type:"string",description:"File permissions in octal notation",pattern:"^[0-7]{3,4}$",examples:["0644","0755","0600"]}},required:["name"],additionalProperties:!1},execResourcePropertiesWithName:{type:"object",description:"Properties for an exec resource (direct format with name)",properties:{name:{type:"string",description:"A descriptive name for the resource, or the command to execute if 'command' is not specified"},command:{type:"string",description:"The command to execute. If not specified, the 'name' property will be used as the command."},alias:{type:"string",description:"An alternative name for the resource that can be used in require/subscribe references"},ensure:{type:"string",description:"Desired state of the exec resource",enum:["present","absent"],default:"present"},provider:{type:"string",description:"Specific provider to use for managing this resource"},health_checks:{type:"array",description:"Health checks to run after applying the resource",items:{$ref:"#/$defs/healthCheck"}},require:{type:"array",description:"List of resources that must be applied before this resource, in format 'type#name'",items:{type:"string",pattern:"^[a-z]+#.+$"}},control:{$ref:"#/$defs/resourceControl"},cwd:{type:"string",description:"Working directory from which to run the command"},environment:{type:"array",description:"Additional environment variables to set when running the command, in KEY=value format",items:{type:"string",pattern:"^[A-Za-z_][A-Za-z0-9_]*=.+$"}},path:{type:"string",description:"Search path for executable commands, as a colon-separated list of absolute directories",examples:["/usr/local/bin:/usr/bin:/bin"]},returns:{type:"array",description:"Expected exit codes indicating success. Defaults to [0] if not specified.",items:{type:"integer"},default:[0]},timeout:{type:"string",description:"Maximum time the command is allowed to run. If exceeded, the command will be terminated. Specified as a duration string.",examples:["10s","5m","1h"]},creates:{type:"string",description:"A file that the command creates. If this file exists, the command will not run."},refreshonly:{type:"boolean",description:"If true, the command only runs when notified by a subscribed resource",default:!1},subscribe:{type:"array",description:"List of resources to subscribe to for refresh notifications, in format 'type#name'",items:{type:"string",pattern:"^[a-z]+#.+$"}},logoutput:{type:"boolean",description:"Whether to log the command's output",default:!1}},required:["name"],additionalProperties:!1},archiveResourcePropertiesWithName:{type:"object",description:"Properties for an archive resource (direct format with name)",properties:{name:{type:"string",description:"The absolute file path where the archive will be saved"},alias:{type:"string",description:"An alternative name for the resource that can be used in require/subscribe references"},ensure:{type:"string",description:"Desired state of the archive",enum:["present","absent"],default:"present"},provider:{type:"string",description:"Specific provider to use for managing this resource"},health_checks:{type:"array",description:"Health checks to run after applying the resource",items:{$ref:"#/$defs/healthCheck"}},require:{type:"array",description:"List of resources that must be applied before this resource, in format 'type#name'",items:{type:"string",pattern:"^[a-z]+#.+$"}},control:{$ref:"#/$defs/resourceControl"},url:{type:"string",description:"HTTP/HTTPS URL to download the archive from. Must end in .zip, .tar.gz, .tgz, or .tar",format:"uri"},headers:{type:"object",description:"Additional HTTP headers to send with the request",additionalProperties:{type:"string"}},username:{type:"string",description:"Username for HTTP Basic Authentication"},password:{type:"string",description:"Password for HTTP Basic Authentication"},checksum:{type:"string",description:"Expected SHA256 checksum of the downloaded archive (hex encoded)"},extract_parent:{type:"string",description:"Directory to extract the archive contents into"},cleanup:{type:"boolean",description:"Remove the archive file after successful extraction. Requires extract_parent to be set.",default:!1},creates:{type:"string",description:"A file path that the archive creates. If this file exists, the archive will not be downloaded or extracted."},owner:{type:"string",description:"User that should own the archive file"},group:{type:"string",description:"Group that should own the archive file"}},required:["name"],additionalProperties:!1},packageResourceProperties:{type:"object",description:"Properties for a package resource",properties:{alias:{type:"string",description:"An alternative name for the resource that can be used in require/subscribe references"},ensure:{type:"string",description:"Desired state of the package: 'present' to install, 'absent' to remove, 'latest' to upgrade to latest version, or a specific version string",examples:["present","absent","latest","1.2.3"]},provider:{type:"string",description:"Specific provider to use for managing this resource"},health_checks:{type:"array",description:"Health checks to run after applying the resource",items:{$ref:"#/$defs/healthCheck"}},require:{type:"array",description:"List of resources that must be applied before this resource, in format 'type#name'",items:{type:"string",pattern:"^[a-z]+#.+$"}},control:{$ref:"#/$defs/resourceControl"}},additionalProperties:!1},serviceResourceProperties:{type:"object",description:"Properties for a service resource",properties:{alias:{type:"string",description:"An alternative name for the resource that can be used in require/subscribe references"},ensure:{type:"string",description:"Desired running state of the service",enum:["running","stopped"],default:"running"},provider:{type:"string",description:"Specific provider to use for managing this resource"},health_checks:{type:"array",description:"Health checks to run after applying the resource",items:{$ref:"#/$defs/healthCheck"}},require:{type:"array",description:"List of resources that must be applied before this resource, in format 'type#name'",items:{type:"string",pattern:"^[a-z]+#.+$"}},control:{$ref:"#/$defs/resourceControl"},enable:{type:"boolean",description:"Whether the service should be enabled to start on boot"},subscribe:{type:"array",description:"List of resources to subscribe to for refresh notifications, in format 'type#name'. When a subscribed resource changes, this service will be restarted.",items:{type:"string",pattern:"^[a-z]+#.+$"}}},additionalProperties:!1},fileResourceProperties:{type:"object",description:"Properties for a file resource",properties:{alias:{type:"string",description:"An alternative name for the resource that can be used in require/subscribe references"},ensure:{type:"string",description:"Desired state of the file: 'present' for a regular file, 'absent' to remove, 'directory' to create a directory",enum:["present","absent","directory"],default:"present"},provider:{type:"string",description:"Specific provider to use for managing this resource"},health_checks:{type:"array",description:"Health checks to run after applying the resource",items:{$ref:"#/$defs/healthCheck"}},require:{type:"array",description:"List of resources that must be applied before this resource, in format 'type#name'",items:{type:"string",pattern:"^[a-z]+#.+$"}},control:{$ref:"#/$defs/resourceControl"},content:{type:"string",description:"Desired file contents as a string. Mutually exclusive with 'source'."},source:{type:"string",description:"Local file path to use as the source for file contents. Mutually exclusive with 'content'."},owner:{type:"string",description:"User that should own the file"},group:{type:"string",description:"Group that should own the file"},mode:{type:"string",description:"File permissions in octal notation",pattern:"^[0-7]{3,4}$",examples:["0644","0755","0600"]}},additionalProperties:!1},execResourceProperties:{type:"object",description:"Properties for an exec resource that runs commands",properties:{command:{type:"string",description:"The command to execute. If not specified, the resource name (key) will be used as the command."},alias:{type:"string",description:"An alternative name for the resource that can be used in require/subscribe references"},ensure:{type:"string",description:"Desired state of the exec resource",enum:["present","absent"],default:"present"},provider:{type:"string",description:"Specific provider to use for managing this resource"},health_checks:{type:"array",description:"Health checks to run after applying the resource",items:{$ref:"#/$defs/healthCheck"}},require:{type:"array",description:"List of resources that must be applied before this resource, in format 'type#name'",items:{type:"string",pattern:"^[a-z]+#.+$"}},control:{$ref:"#/$defs/resourceControl"},cwd:{type:"string",description:"Working directory from which to run the command"},environment:{type:"array",description:"Additional environment variables to set when running the command, in KEY=value format",items:{type:"string",pattern:"^[A-Za-z_][A-Za-z0-9_]*=.+$"}},path:{type:"string",description:"Search path for executable commands, as a colon-separated list of absolute directories",examples:["/usr/local/bin:/usr/bin:/bin"]},returns:{type:"array",description:"Expected exit codes indicating success. Defaults to [0] if not specified.",items:{type:"integer"},default:[0]},timeout:{type:"string",description:"Maximum time the command is allowed to run. If exceeded, the command will be terminated. Specified as a duration string.",examples:["10s","5m","1h"]},creates:{type:"string",description:"A file that the command creates. If this file exists, the command will not run."},refreshonly:{type:"boolean",description:"If true, the command only runs when notified by a subscribed resource",default:!1},subscribe:{type:"array",description:"List of resources to subscribe to for refresh notifications, in format 'type#name'",items:{type:"string",pattern:"^[a-z]+#.+$"}},logoutput:{type:"boolean",description:"Whether to log the command's output",default:!1}},additionalProperties:!1},archiveResourceProperties:{type:"object",description:"Properties for an archive resource that downloads and extracts archives",properties:{alias:{type:"string",description:"An alternative name for the resource that can be used in require/subscribe references"},ensure:{type:"string",description:"Desired state of the archive",enum:["present","absent"],default:"present"},provider:{type:"string",description:"Specific provider to use for managing this resource"},health_checks:{type:"array",description:"Health checks to run after applying the resource",items:{$ref:"#/$defs/healthCheck"}},require:{type:"array",description:"List of resources that must be applied before this resource, in format 'type#name'",items:{type:"string",pattern:"^[a-z]+#.+$"}},control:{$ref:"#/$defs/resourceControl"},url:{type:"string",description:"HTTP/HTTPS URL to download the archive from. Must end in .zip, .tar.gz, .tgz, or .tar",format:"uri"},headers:{type:"object",description:"Additional HTTP headers to send with the request",additionalProperties:{type:"string"}},username:{type:"string",description:"Username for HTTP Basic Authentication"},password:{type:"string",description:"Password for HTTP Basic Authentication"},checksum:{type:"string",description:"Expected SHA256 checksum of the downloaded archive (hex encoded)"},extract_parent:{type:"string",description:"Directory to extract the archive contents into"},cleanup:{type:"boolean",description:"Remove the archive file after successful extraction. Requires extract_parent to be set.",default:!1},creates:{type:"string",description:"A file path that the archive creates. If this file exists, the archive will not be downloaded or extracted."},owner:{type:"string",description:"User that should own the archive file"},group:{type:"string",description:"Group that should own the archive file"}},additionalProperties:!1},healthCheck:{type:"object",description:"Health check configuration to verify resource state after application",properties:{command:{type:"string",description:"Command to execute for the health check"},name:{type:"string",description:"Optional name for the health check"},timeout:{type:"string",description:"Maximum time to wait for the health check command to complete",examples:["10s","30s"]},tries:{type:"integer",description:"Number of times to retry the health check before failing",minimum:1},try_sleep:{type:"string",description:"Time to wait between health check retries",examples:["1s","5s"]},format:{type:"string",description:"Expected output format of the health check command. Defaults to 'nagios' if not specified.",enum:["nagios"],default:"nagios"}},required:["command"],additionalProperties:!1},resourceControl:{type:"object",description:"Control conditions that determine whether a resource should be managed",properties:{if:{type:"string",description:"Expression that must evaluate to true for the resource to be managed. Has access to Facts, Data, and Environ variables.",examples:['Facts.os == "linux"','lookup("facts.kernel", "") == "Linux"']},unless:{type:"string",description:"Expression that must evaluate to false for the resource to be managed. Has access to Facts, Data, and Environ variables.",examples:['Facts.os == "windows"','lookup("facts.virtual", "") == "docker"']}},additionalProperties:!1}},l_={$schema:e_,$id:t_,title:s_,description:r_,type:i_,properties:o_,additionalProperties:n_,$defs:a_},bu=new jw({allErrors:!0,verbose:!0,strict:!1});Zw(bu);const Sc=bu.compile(l_);function c_(e){return e?e.map(t=>{const s=t.instancePath||"root",r=t.message||"Invalid value";switch(t.keyword){case"required":return`${s}: Missing required property '${t.params.missingProperty}'`;case"type":return`${s}: Expected ${t.params.type}`;case"enum":return`${s}: Must be one of: ${t.params.allowedValues.join(", ")}`;case"pattern":return`${s}: Does not match expected pattern`;case"additionalProperties":return`${s}: Unknown property '${t.params.additionalProperty}'`;case"format":return`${s}: Invalid format, expected ${t.params.format}`;default:return`${s}: ${r}`}}):[]}function d_(e){const t=[],s=f_(e);return Sc(s)||c_(Sc.errors).forEach(i=>{t.push({path:m_(i),message:g_(i),severity:"error"})}),t.push(...u_(e)),t}function u_(e){const t=[];e.ccm.resources.forEach((r,i)=>{var n;if((!r.name||r.name.trim()==="")&&t.push({path:`ccm.resources[${i}].name`,message:"Resource name is required",severity:"error"}),e.ccm.resources.filter((a,l)=>l!==i&&a.type===r.type&&a.name===r.name).length>0&&t.push({path:`ccm.resources[${i}].name`,message:`Duplicate ${r.type} resource name: ${r.name}`,severity:"warning"}),(n=r.require)==null||n.forEach((a,l)=>{Ec(a,e)||t.push({path:`ccm.resources[${i}].require[${l}]`,message:`Unknown resource reference: ${a}`,severity:"warning"}),(a===`${r.type}#${r.name}`||r.alias&&a===`${r.type}#${r.alias}`)&&t.push({path:`ccm.resources[${i}].require[${l}]`,message:"Resource cannot require itself",severity:"error"})}),"subscribe"in r.properties){const a=r.properties.subscribe;a==null||a.forEach((l,c)=>{Ec(l,e)||t.push({path:`ccm.resources[${i}].subscribe[${c}]`,message:`Unknown resource reference: ${l}`,severity:"warning"})})}t.push(...p_(r,i))});const s=h_(e.hierarchy.order);return Object.keys(e.overrides).forEach(r=>{const i=r.split(":")[0];s.length>0&&!s.includes(i)&&t.push({path:`overrides.${r}`,message:`Override key '${r}' does not match any hierarchy dimension`,severity:"warning"})}),t}function Ec(e,t){const s=e.match(/^(\w+)#(.+)$/);if(!s)return!1;const[,r,i]=s;return t.ccm.resources.some(o=>o.type===r&&(o.name===i||o.alias===i))}function h_(e){return e.map(t=>{var s;return(s=t.match(/^(\w+):/))==null?void 0:s[1]}).filter(t=>t!==void 0)}function p_(e,t){var r;const s=[];switch(e.type){case"file":e.properties.content&&e.properties.source&&s.push({path:`ccm.resources[${t}]`,message:"File resource cannot have both content and source",severity:"error"}),e.properties.mode&&!/^[0-7]{3,4}$/.test(String(e.properties.mode))&&s.push({path:`ccm.resources[${t}].mode`,message:"Mode must be octal notation (e.g., 0644)",severity:"error"});break;case"archive":e.properties.url||s.push({path:`ccm.resources[${t}].url`,message:"Archive resource requires a URL",severity:"error"}),e.properties.cleanup&&(!e.properties.extract_parent||!e.properties.creates)&&s.push({path:`ccm.resources[${t}].cleanup`,message:"Cleanup requires extract_parent and creates to be set",severity:"warning"});break;case"exec":e.properties.refreshonly&&!((r=e.properties.subscribe)!=null&&r.length)&&s.push({path:`ccm.resources[${t}].refreshonly`,message:"refreshonly is set but no subscribe references defined",severity:"warning"});break}return s}function f_(e){const t={};return Object.keys(e.data).length>0&&(t.data=e.data),e.hierarchy.order.length>0&&(t.hierarchy={order:e.hierarchy.order,...e.hierarchy.merge!=="first"?{merge:e.hierarchy.merge}:{}}),Object.keys(e.overrides).length>0&&(t.overrides=e.overrides),(e.ccm.resources.length>0||e.ccm.pre_message||e.ccm.post_message||e.ccm.fail_on_error)&&(t.ccm={...e.ccm.pre_message&&{pre_message:e.ccm.pre_message},...e.ccm.post_message&&{post_message:e.ccm.post_message},...e.ccm.fail_on_error&&{fail_on_error:e.ccm.fail_on_error},resources:e.ccm.resources.map(s=>{var r;return{[s.type]:[{[s.name]:{...s.properties,...s.alias&&{alias:s.alias},...((r=s.require)==null?void 0:r.length)&&{require:s.require},...s.control&&{control:s.control}}}]}})}),t}function m_(e){const t=e.match(/^([^:]+):/);return t?t[1]:""}function g_(e){const t=e.match(/^[^:]+:\s*(.+)$/);return t?t[1]:e}const Xa=Symbol.for("yaml.alias"),On=Symbol.for("yaml.document"),Ht=Symbol.for("yaml.map"),vu=Symbol.for("yaml.pair"),$t=Symbol.for("yaml.scalar"),tr=Symbol.for("yaml.seq"),ot=Symbol.for("yaml.node.type"),vs=e=>!!e&&typeof e=="object"&&e[ot]===Xa,ho=e=>!!e&&typeof e=="object"&&e[ot]===On,Gr=e=>!!e&&typeof e=="object"&&e[ot]===Ht,_e=e=>!!e&&typeof e=="object"&&e[ot]===vu,he=e=>!!e&&typeof e=="object"&&e[ot]===$t,Yr=e=>!!e&&typeof e=="object"&&e[ot]===tr;function ve(e){if(e&&typeof e=="object")switch(e[ot]){case Ht:case tr:return!0}return!1}function we(e){if(e&&typeof e=="object")switch(e[ot]){case Xa:case Ht:case $t:case tr:return!0}return!1}const wu=e=>(he(e)||ve(e))&&!!e.anchor,es=Symbol("break visit"),y_=Symbol("skip children"),Pr=Symbol("remove node");function sr(e,t){const s=b_(t);ho(e)?Os(null,e.contents,s,Object.freeze([e]))===Pr&&(e.contents=null):Os(null,e,s,Object.freeze([]))}sr.BREAK=es;sr.SKIP=y_;sr.REMOVE=Pr;function Os(e,t,s,r){const i=v_(e,t,s,r);if(we(i)||_e(i))return w_(e,r,i),Os(e,i,s,r);if(typeof i!="symbol"){if(ve(t)){r=Object.freeze(r.concat(t));for(let o=0;o<t.items.length;++o){const n=Os(o,t.items[o],s,r);if(typeof n=="number")o=n-1;else{if(n===es)return es;n===Pr&&(t.items.splice(o,1),o-=1)}}}else if(_e(t)){r=Object.freeze(r.concat(t));const o=Os("key",t.key,s,r);if(o===es)return es;o===Pr&&(t.key=null);const n=Os("value",t.value,s,r);if(n===es)return es;n===Pr&&(t.value=null)}}return i}function b_(e){return typeof e=="object"&&(e.Collection||e.Node||e.Value)?Object.assign({Alias:e.Node,Map:e.Node,Scalar:e.Node,Seq:e.Node},e.Value&&{Map:e.Value,Scalar:e.Value,Seq:e.Value},e.Collection&&{Map:e.Collection,Seq:e.Collection},e):e}function v_(e,t,s,r){var i,o,n,a,l;if(typeof s=="function")return s(e,t,r);if(Gr(t))return(i=s.Map)==null?void 0:i.call(s,e,t,r);if(Yr(t))return(o=s.Seq)==null?void 0:o.call(s,e,t,r);if(_e(t))return(n=s.Pair)==null?void 0:n.call(s,e,t,r);if(he(t))return(a=s.Scalar)==null?void 0:a.call(s,e,t,r);if(vs(t))return(l=s.Alias)==null?void 0:l.call(s,e,t,r)}function w_(e,t,s){const r=t[t.length-1];if(ve(r))r.items[e]=s;else if(_e(r))e==="key"?r.key=s:r.value=s;else if(ho(r))r.contents=s;else{const i=vs(r)?"alias":"scalar";throw new Error(`Cannot replace node with ${i} parent`)}}const __={"!":"%21",",":"%2C","[":"%5B","]":"%5D","{":"%7B","}":"%7D"},$_=e=>e.replace(/[!,[\]{}]/g,t=>__[t]);class Le{constructor(t,s){this.docStart=null,this.docEnd=!1,this.yaml=Object.assign({},Le.defaultYaml,t),this.tags=Object.assign({},Le.defaultTags,s)}clone(){const t=new Le(this.yaml,this.tags);return t.docStart=this.docStart,t}atDocument(){const t=new Le(this.yaml,this.tags);switch(this.yaml.version){case"1.1":this.atNextDocument=!0;break;case"1.2":this.atNextDocument=!1,this.yaml={explicit:Le.defaultYaml.explicit,version:"1.2"},this.tags=Object.assign({},Le.defaultTags);break}return t}add(t,s){this.atNextDocument&&(this.yaml={explicit:Le.defaultYaml.explicit,version:"1.1"},this.tags=Object.assign({},Le.defaultTags),this.atNextDocument=!1);const r=t.trim().split(/[ \t]+/),i=r.shift();switch(i){case"%TAG":{if(r.length!==2&&(s(0,"%TAG directive should contain exactly two parts"),r.length<2))return!1;const[o,n]=r;return this.tags[o]=n,!0}case"%YAML":{if(this.yaml.explicit=!0,r.length!==1)return s(0,"%YAML directive should contain exactly one part"),!1;const[o]=r;if(o==="1.1"||o==="1.2")return this.yaml.version=o,!0;{const n=/^\d+\.\d+$/.test(o);return s(6,`Unsupported YAML version ${o}`,n),!1}}default:return s(0,`Unknown directive ${i}`,!0),!1}}tagName(t,s){if(t==="!")return"!";if(t[0]!=="!")return s(`Not a valid tag: ${t}`),null;if(t[1]==="<"){const n=t.slice(2,-1);return n==="!"||n==="!!"?(s(`Verbatim tags aren't resolved, so ${t} is invalid.`),null):(t[t.length-1]!==">"&&s("Verbatim tags must end with a >"),n)}const[,r,i]=t.match(/^(.*!)([^!]*)$/s);i||s(`The ${t} tag has no suffix`);const o=this.tags[r];if(o)try{return o+decodeURIComponent(i)}catch(n){return s(String(n)),null}return r==="!"?t:(s(`Could not resolve tag: ${t}`),null)}tagString(t){for(const[s,r]of Object.entries(this.tags))if(t.startsWith(r))return s+$_(t.substring(r.length));return t[0]==="!"?t:`!<${t}>`}toString(t){const s=this.yaml.explicit?[`%YAML ${this.yaml.version||"1.2"}`]:[],r=Object.entries(this.tags);let i;if(t&&r.length>0&&we(t.contents)){const o={};sr(t.contents,(n,a)=>{we(a)&&a.tag&&(o[a.tag]=!0)}),i=Object.keys(o)}else i=[];for(const[o,n]of r)o==="!!"&&n==="tag:yaml.org,2002:"||(!t||i.some(a=>a.startsWith(n)))&&s.push(`%TAG ${o} ${n}`);return s.join(`
`)}}Le.defaultYaml={explicit:!1,version:"1.2"};Le.defaultTags={"!!":"tag:yaml.org,2002:"};function _u(e){if(/[\x00-\x19\s,[\]{}]/.test(e)){const s=`Anchor must not contain whitespace or control characters: ${JSON.stringify(e)}`;throw new Error(s)}return!0}function $u(e){const t=new Set;return sr(e,{Value(s,r){r.anchor&&t.add(r.anchor)}}),t}function ku(e,t){for(let s=1;;++s){const r=`${e}${s}`;if(!t.has(r))return r}}function k_(e,t){const s=[],r=new Map;let i=null;return{onAnchor:o=>{s.push(o),i??(i=$u(e));const n=ku(t,i);return i.add(n),n},setAnchors:()=>{for(const o of s){const n=r.get(o);if(typeof n=="object"&&n.anchor&&(he(n.node)||ve(n.node)))n.node.anchor=n.anchor;else{const a=new Error("Failed to resolve repeated object (this should not happen)");throw a.source=o,a}}},sourceObjects:r}}function Ts(e,t,s,r){if(r&&typeof r=="object")if(Array.isArray(r))for(let i=0,o=r.length;i<o;++i){const n=r[i],a=Ts(e,r,String(i),n);a===void 0?delete r[i]:a!==n&&(r[i]=a)}else if(r instanceof Map)for(const i of Array.from(r.keys())){const o=r.get(i),n=Ts(e,r,i,o);n===void 0?r.delete(i):n!==o&&r.set(i,n)}else if(r instanceof Set)for(const i of Array.from(r)){const o=Ts(e,r,i,i);o===void 0?r.delete(i):o!==i&&(r.delete(i),r.add(o))}else for(const[i,o]of Object.entries(r)){const n=Ts(e,r,i,o);n===void 0?delete r[i]:n!==o&&(r[i]=n)}return e.call(t,s,r)}function it(e,t,s){if(Array.isArray(e))return e.map((r,i)=>it(r,String(i),s));if(e&&typeof e.toJSON=="function"){if(!s||!wu(e))return e.toJSON(t,s);const r={aliasCount:0,count:1,res:void 0};s.anchors.set(e,r),s.onCreate=o=>{r.res=o,delete s.onCreate};const i=e.toJSON(t,s);return s.onCreate&&s.onCreate(i),i}return typeof e=="bigint"&&!(s!=null&&s.keep)?Number(e):e}class Qa{constructor(t){Object.defineProperty(this,ot,{value:t})}clone(){const t=Object.create(Object.getPrototypeOf(this),Object.getOwnPropertyDescriptors(this));return this.range&&(t.range=this.range.slice()),t}toJS(t,{mapAsMap:s,maxAliasCount:r,onAnchor:i,reviver:o}={}){if(!ho(t))throw new TypeError("A document argument is required");const n={anchors:new Map,doc:t,keep:!0,mapAsMap:s===!0,mapKeyWarned:!1,maxAliasCount:typeof r=="number"?r:100},a=it(this,"",n);if(typeof i=="function")for(const{count:l,res:c}of n.anchors.values())i(c,l);return typeof o=="function"?Ts(o,{"":a},"",a):a}}class Za extends Qa{constructor(t){super(Xa),this.source=t,Object.defineProperty(this,"tag",{set(){throw new Error("Alias nodes cannot have tags")}})}resolve(t,s){let r;s!=null&&s.aliasResolveCache?r=s.aliasResolveCache:(r=[],sr(t,{Node:(o,n)=>{(vs(n)||wu(n))&&r.push(n)}}),s&&(s.aliasResolveCache=r));let i;for(const o of r){if(o===this)break;o.anchor===this.source&&(i=o)}return i}toJSON(t,s){if(!s)return{source:this.source};const{anchors:r,doc:i,maxAliasCount:o}=s,n=this.resolve(i,s);if(!n){const l=`Unresolved alias (the anchor must be set before the alias): ${this.source}`;throw new ReferenceError(l)}let a=r.get(n);if(a||(it(n,null,s),a=r.get(n)),(a==null?void 0:a.res)===void 0){const l="This should not happen: Alias anchor was not resolved?";throw new ReferenceError(l)}if(o>=0&&(a.count+=1,a.aliasCount===0&&(a.aliasCount=xi(i,n,r)),a.count*a.aliasCount>o)){const l="Excessive alias count indicates a resource exhaustion attack";throw new ReferenceError(l)}return a.res}toString(t,s,r){const i=`*${this.source}`;if(t){if(_u(this.source),t.options.verifyAliasOrder&&!t.anchors.has(this.source)){const o=`Unresolved alias (the anchor must be set before the alias): ${this.source}`;throw new Error(o)}if(t.implicitKey)return`${i} `}return i}}function xi(e,t,s){if(vs(t)){const r=t.resolve(e),i=s&&r&&s.get(r);return i?i.count*i.aliasCount:0}else if(ve(t)){let r=0;for(const i of t.items){const o=xi(e,i,s);o>r&&(r=o)}return r}else if(_e(t)){const r=xi(e,t.key,s),i=xi(e,t.value,s);return Math.max(r,i)}return 1}const xu=e=>!e||typeof e!="function"&&typeof e!="object";class Y extends Qa{constructor(t){super($t),this.value=t}toJSON(t,s){return s!=null&&s.keep?this.value:it(this.value,t,s)}toString(){return String(this.value)}}Y.BLOCK_FOLDED="BLOCK_FOLDED";Y.BLOCK_LITERAL="BLOCK_LITERAL";Y.PLAIN="PLAIN";Y.QUOTE_DOUBLE="QUOTE_DOUBLE";Y.QUOTE_SINGLE="QUOTE_SINGLE";const x_="tag:yaml.org,2002:";function S_(e,t,s){if(t){const r=s.filter(o=>o.tag===t),i=r.find(o=>!o.format)??r[0];if(!i)throw new Error(`Tag ${t} not found`);return i}return s.find(r=>{var i;return((i=r.identify)==null?void 0:i.call(r,e))&&!r.format})}function zr(e,t,s){var d,p,h;if(ho(e)&&(e=e.contents),we(e))return e;if(_e(e)){const v=(p=(d=s.schema[Ht]).createNode)==null?void 0:p.call(d,s.schema,null,s);return v.items.push(e),v}(e instanceof String||e instanceof Number||e instanceof Boolean||typeof BigInt<"u"&&e instanceof BigInt)&&(e=e.valueOf());const{aliasDuplicateObjects:r,onAnchor:i,onTagObj:o,schema:n,sourceObjects:a}=s;let l;if(r&&e&&typeof e=="object"){if(l=a.get(e),l)return l.anchor??(l.anchor=i(e)),new Za(l.anchor);l={anchor:null,node:null},a.set(e,l)}t!=null&&t.startsWith("!!")&&(t=x_+t.slice(2));let c=S_(e,t,n.tags);if(!c){if(e&&typeof e.toJSON=="function"&&(e=e.toJSON()),!e||typeof e!="object"){const v=new Y(e);return l&&(l.node=v),v}c=e instanceof Map?n[Ht]:Symbol.iterator in Object(e)?n[tr]:n[Ht]}o&&(o(c),delete s.onTagObj);const u=c!=null&&c.createNode?c.createNode(s.schema,e,s):typeof((h=c==null?void 0:c.nodeClass)==null?void 0:h.from)=="function"?c.nodeClass.from(s.schema,e,s):new Y(e);return t?u.tag=t:c.default||(u.tag=c.tag),l&&(l.node=u),u}function Fi(e,t,s){let r=s;for(let i=t.length-1;i>=0;--i){const o=t[i];if(typeof o=="number"&&Number.isInteger(o)&&o>=0){const n=[];n[o]=r,r=n}else r=new Map([[o,r]])}return zr(r,void 0,{aliasDuplicateObjects:!1,keepUndefined:!1,onAnchor:()=>{throw new Error("This should not happen, please report a bug.")},schema:e,sourceObjects:new Map})}const vr=e=>e==null||typeof e=="object"&&!!e[Symbol.iterator]().next().done;class Su extends Qa{constructor(t,s){super(t),Object.defineProperty(this,"schema",{value:s,configurable:!0,enumerable:!1,writable:!0})}clone(t){const s=Object.create(Object.getPrototypeOf(this),Object.getOwnPropertyDescriptors(this));return t&&(s.schema=t),s.items=s.items.map(r=>we(r)||_e(r)?r.clone(t):r),this.range&&(s.range=this.range.slice()),s}addIn(t,s){if(vr(t))this.add(s);else{const[r,...i]=t,o=this.get(r,!0);if(ve(o))o.addIn(i,s);else if(o===void 0&&this.schema)this.set(r,Fi(this.schema,i,s));else throw new Error(`Expected YAML collection at ${r}. Remaining path: ${i}`)}}deleteIn(t){const[s,...r]=t;if(r.length===0)return this.delete(s);const i=this.get(s,!0);if(ve(i))return i.deleteIn(r);throw new Error(`Expected YAML collection at ${s}. Remaining path: ${r}`)}getIn(t,s){const[r,...i]=t,o=this.get(r,!0);return i.length===0?!s&&he(o)?o.value:o:ve(o)?o.getIn(i,s):void 0}hasAllNullValues(t){return this.items.every(s=>{if(!_e(s))return!1;const r=s.value;return r==null||t&&he(r)&&r.value==null&&!r.commentBefore&&!r.comment&&!r.tag})}hasIn(t){const[s,...r]=t;if(r.length===0)return this.has(s);const i=this.get(s,!0);return ve(i)?i.hasIn(r):!1}setIn(t,s){const[r,...i]=t;if(i.length===0)this.set(r,s);else{const o=this.get(r,!0);if(ve(o))o.setIn(i,s);else if(o===void 0&&this.schema)this.set(r,Fi(this.schema,i,s));else throw new Error(`Expected YAML collection at ${r}. Remaining path: ${i}`)}}}const E_=e=>e.replace(/^(?!$)(?: $)?/gm,"#");function At(e,t){return/^\n+$/.test(e)?e.substring(1):t?e.replace(/^(?! *$)/gm,t):e}const as=(e,t,s)=>e.endsWith(`
`)?At(s,t):s.includes(`
`)?`
`+At(s,t):(e.endsWith(" ")?"":" ")+s,Eu="flow",Tn="block",Si="quoted";function po(e,t,s="flow",{indentAtStart:r,lineWidth:i=80,minContentWidth:o=20,onFold:n,onOverflow:a}={}){if(!i||i<0)return e;i<o&&(o=0);const l=Math.max(1+o,1+i-t.length);if(e.length<=l)return e;const c=[],u={};let d=i-t.length;typeof r=="number"&&(r>i-Math.max(2,o)?c.push(0):d=i-r);let p,h,v=!1,f=-1,g=-1,y=-1;s===Tn&&(f=Cc(e,f,t.length),f!==-1&&(d=f+l));for(let k;k=e[f+=1];){if(s===Si&&k==="\\"){switch(g=f,e[f+1]){case"x":f+=3;break;case"u":f+=5;break;case"U":f+=9;break;default:f+=1}y=f}if(k===`
`)s===Tn&&(f=Cc(e,f,t.length)),d=f+t.length+l,p=void 0;else{if(k===" "&&h&&h!==" "&&h!==`
`&&h!=="	"){const S=e[f+1];S&&S!==" "&&S!==`
`&&S!=="	"&&(p=f)}if(f>=d)if(p)c.push(p),d=p+l,p=void 0;else if(s===Si){for(;h===" "||h==="	";)h=k,k=e[f+=1],v=!0;const S=f>y+1?f-2:g-1;if(u[S])return e;c.push(S),u[S]=!0,d=S+l,p=void 0}else v=!0}h=k}if(v&&a&&a(),c.length===0)return e;n&&n();let w=e.slice(0,c[0]);for(let k=0;k<c.length;++k){const S=c[k],C=c[k+1]||e.length;S===0?w=`
${t}${e.slice(0,C)}`:(s===Si&&u[S]&&(w+=`${e[S]}\\`),w+=`
${t}${e.slice(S+1,C)}`)}return w}function Cc(e,t,s){let r=t,i=t+1,o=e[i];for(;o===" "||o==="	";)if(t<i+s)o=e[++t];else{do o=e[++t];while(o&&o!==`
`);r=t,i=t+1,o=e[i]}return r}const fo=(e,t)=>({indentAtStart:t?e.indent.length:e.indentAtStart,lineWidth:e.options.lineWidth,minContentWidth:e.options.minContentWidth}),mo=e=>/^(%|---|\.\.\.)/m.test(e);function C_(e,t,s){if(!t||t<0)return!1;const r=t-s,i=e.length;if(i<=r)return!1;for(let o=0,n=0;o<i;++o)if(e[o]===`
`){if(o-n>r)return!0;if(n=o+1,i-n<=r)return!1}return!0}function Or(e,t){const s=JSON.stringify(e);if(t.options.doubleQuotedAsJSON)return s;const{implicitKey:r}=t,i=t.options.doubleQuotedMinMultiLineLength,o=t.indent||(mo(e)?"  ":"");let n="",a=0;for(let l=0,c=s[l];c;c=s[++l])if(c===" "&&s[l+1]==="\\"&&s[l+2]==="n"&&(n+=s.slice(a,l)+"\\ ",l+=1,a=l,c="\\"),c==="\\")switch(s[l+1]){case"u":{n+=s.slice(a,l);const u=s.substr(l+2,4);switch(u){case"0000":n+="\\0";break;case"0007":n+="\\a";break;case"000b":n+="\\v";break;case"001b":n+="\\e";break;case"0085":n+="\\N";break;case"00a0":n+="\\_";break;case"2028":n+="\\L";break;case"2029":n+="\\P";break;default:u.substr(0,2)==="00"?n+="\\x"+u.substr(2):n+=s.substr(l,6)}l+=5,a=l+1}break;case"n":if(r||s[l+2]==='"'||s.length<i)l+=1;else{for(n+=s.slice(a,l)+`

`;s[l+2]==="\\"&&s[l+3]==="n"&&s[l+4]!=='"';)n+=`
`,l+=2;n+=o,s[l+2]===" "&&(n+="\\"),l+=1,a=l+1}break;default:l+=1}return n=a?n+s.slice(a):s,r?n:po(n,o,Si,fo(t,!1))}function Nn(e,t){if(t.options.singleQuote===!1||t.implicitKey&&e.includes(`
`)||/[ \t]\n|\n[ \t]/.test(e))return Or(e,t);const s=t.indent||(mo(e)?"  ":""),r="'"+e.replace(/'/g,"''").replace(/\n+/g,`$&
${s}`)+"'";return t.implicitKey?r:po(r,s,Eu,fo(t,!1))}function Ns(e,t){const{singleQuote:s}=t.options;let r;if(s===!1)r=Or;else{const i=e.includes('"'),o=e.includes("'");i&&!o?r=Nn:o&&!i?r=Or:r=s?Nn:Or}return r(e,t)}let In;try{In=new RegExp(`(^|(?<!
))
+(?!
|$)`,"g")}catch{In=/\n+(?!\n|$)/g}function Ei({comment:e,type:t,value:s},r,i,o){const{blockQuote:n,commentString:a,lineWidth:l}=r.options;if(!n||/\n[\t ]+$/.test(s))return Ns(s,r);const c=r.indent||(r.forceBlockIndent||mo(s)?"  ":""),u=n==="literal"?!0:n==="folded"||t===Y.BLOCK_FOLDED?!1:t===Y.BLOCK_LITERAL?!0:!C_(s,l,c.length);if(!s)return u?`|
`:`>
`;let d,p;for(p=s.length;p>0;--p){const C=s[p-1];if(C!==`
`&&C!=="	"&&C!==" ")break}let h=s.substring(p);const v=h.indexOf(`
`);v===-1?d="-":s===h||v!==h.length-1?(d="+",o&&o()):d="",h&&(s=s.slice(0,-h.length),h[h.length-1]===`
`&&(h=h.slice(0,-1)),h=h.replace(In,`$&${c}`));let f=!1,g,y=-1;for(g=0;g<s.length;++g){const C=s[g];if(C===" ")f=!0;else if(C===`
`)y=g;else break}let w=s.substring(0,y<g?y+1:g);w&&(s=s.substring(w.length),w=w.replace(/\n+/g,`$&${c}`));let S=(f?c?"2":"1":"")+d;if(e&&(S+=" "+a(e.replace(/ ?[\r\n]+/g," ")),i&&i()),!u){const C=s.replace(/\n+/g,`
$&`).replace(/(?:^|\n)([\t ].*)(?:([\n\t ]*)\n(?![\n\t ]))?/g,"$1$2").replace(/\n+/g,`$&${c}`);let T=!1;const I=fo(r,!0);n!=="folded"&&t!==Y.BLOCK_FOLDED&&(I.onOverflow=()=>{T=!0});const R=po(`${w}${C}${h}`,c,Tn,I);if(!T)return`>${S}
${c}${R}`}return s=s.replace(/\n+/g,`$&${c}`),`|${S}
${c}${w}${s}${h}`}function A_(e,t,s,r){const{type:i,value:o}=e,{actualString:n,implicitKey:a,indent:l,indentStep:c,inFlow:u}=t;if(a&&o.includes(`
`)||u&&/[[\]{},]/.test(o))return Ns(o,t);if(/^[\n\t ,[\]{}#&*!|>'"%@`]|^[?-]$|^[?-][ \t]|[\n:][ \t]|[ \t]\n|[\n\t ]#|[\n\t :]$/.test(o))return a||u||!o.includes(`
`)?Ns(o,t):Ei(e,t,s,r);if(!a&&!u&&i!==Y.PLAIN&&o.includes(`
`))return Ei(e,t,s,r);if(mo(o)){if(l==="")return t.forceBlockIndent=!0,Ei(e,t,s,r);if(a&&l===c)return Ns(o,t)}const d=o.replace(/\n+/g,`$&
${l}`);if(n){const p=f=>{var g;return f.default&&f.tag!=="tag:yaml.org,2002:str"&&((g=f.test)==null?void 0:g.test(d))},{compat:h,tags:v}=t.doc.schema;if(v.some(p)||h!=null&&h.some(p))return Ns(o,t)}return a?d:po(d,l,Eu,fo(t,!1))}function el(e,t,s,r){const{implicitKey:i,inFlow:o}=t,n=typeof e.value=="string"?e:Object.assign({},e,{value:String(e.value)});let{type:a}=e;a!==Y.QUOTE_DOUBLE&&/[\x00-\x08\x0b-\x1f\x7f-\x9f\u{D800}-\u{DFFF}]/u.test(n.value)&&(a=Y.QUOTE_DOUBLE);const l=u=>{switch(u){case Y.BLOCK_FOLDED:case Y.BLOCK_LITERAL:return i||o?Ns(n.value,t):Ei(n,t,s,r);case Y.QUOTE_DOUBLE:return Or(n.value,t);case Y.QUOTE_SINGLE:return Nn(n.value,t);case Y.PLAIN:return A_(n,t,s,r);default:return null}};let c=l(a);if(c===null){const{defaultKeyType:u,defaultStringType:d}=t.options,p=i&&u||d;if(c=l(p),c===null)throw new Error(`Unsupported default string type ${p}`)}return c}function Cu(e,t){const s=Object.assign({blockQuote:!0,commentString:E_,defaultKeyType:null,defaultStringType:"PLAIN",directives:null,doubleQuotedAsJSON:!1,doubleQuotedMinMultiLineLength:40,falseStr:"false",flowCollectionPadding:!0,indentSeq:!0,lineWidth:80,minContentWidth:20,nullStr:"null",simpleKeys:!1,singleQuote:null,trueStr:"true",verifyAliasOrder:!0},e.schema.toStringOptions,t);let r;switch(s.collectionStyle){case"block":r=!1;break;case"flow":r=!0;break;default:r=null}return{anchors:new Set,doc:e,flowCollectionPadding:s.flowCollectionPadding?" ":"",indent:"",indentStep:typeof s.indent=="number"?" ".repeat(s.indent):"  ",inFlow:r,options:s}}function P_(e,t){var i;if(t.tag){const o=e.filter(n=>n.tag===t.tag);if(o.length>0)return o.find(n=>n.format===t.format)??o[0]}let s,r;if(he(t)){r=t.value;let o=e.filter(n=>{var a;return(a=n.identify)==null?void 0:a.call(n,r)});if(o.length>1){const n=o.filter(a=>a.test);n.length>0&&(o=n)}s=o.find(n=>n.format===t.format)??o.find(n=>!n.format)}else r=t,s=e.find(o=>o.nodeClass&&r instanceof o.nodeClass);if(!s){const o=((i=r==null?void 0:r.constructor)==null?void 0:i.name)??(r===null?"null":typeof r);throw new Error(`Tag not resolved for ${o} value`)}return s}function O_(e,t,{anchors:s,doc:r}){if(!r.directives)return"";const i=[],o=(he(e)||ve(e))&&e.anchor;o&&_u(o)&&(s.add(o),i.push(`&${o}`));const n=e.tag??(t.default?null:t.tag);return n&&i.push(r.directives.tagString(n)),i.join(" ")}function qs(e,t,s,r){var l;if(_e(e))return e.toString(t,s,r);if(vs(e)){if(t.doc.directives)return e.toString(t);if((l=t.resolvedAliases)!=null&&l.has(e))throw new TypeError("Cannot stringify circular structure without alias nodes");t.resolvedAliases?t.resolvedAliases.add(e):t.resolvedAliases=new Set([e]),e=e.resolve(t.doc)}let i;const o=we(e)?e:t.doc.createNode(e,{onTagObj:c=>i=c});i??(i=P_(t.doc.schema.tags,o));const n=O_(o,i,t);n.length>0&&(t.indentAtStart=(t.indentAtStart??0)+n.length+1);const a=typeof i.stringify=="function"?i.stringify(o,t,s,r):he(o)?el(o,t,s,r):o.toString(t,s,r);return n?he(o)||a[0]==="{"||a[0]==="["?`${n} ${a}`:`${n}
${t.indent}${a}`:a}function T_({key:e,value:t},s,r,i){const{allNullValues:o,doc:n,indent:a,indentStep:l,options:{commentString:c,indentSeq:u,simpleKeys:d}}=s;let p=we(e)&&e.comment||null;if(d){if(p)throw new Error("With simple keys, key nodes cannot have comments");if(ve(e)||!we(e)&&typeof e=="object"){const I="With simple keys, collection cannot be used as a key value";throw new Error(I)}}let h=!d&&(!e||p&&t==null&&!s.inFlow||ve(e)||(he(e)?e.type===Y.BLOCK_FOLDED||e.type===Y.BLOCK_LITERAL:typeof e=="object"));s=Object.assign({},s,{allNullValues:!1,implicitKey:!h&&(d||!o),indent:a+l});let v=!1,f=!1,g=qs(e,s,()=>v=!0,()=>f=!0);if(!h&&!s.inFlow&&g.length>1024){if(d)throw new Error("With simple keys, single line scalar must not span more than 1024 characters");h=!0}if(s.inFlow){if(o||t==null)return v&&r&&r(),g===""?"?":h?`? ${g}`:g}else if(o&&!d||t==null&&h)return g=`? ${g}`,p&&!v?g+=as(g,s.indent,c(p)):f&&i&&i(),g;v&&(p=null),h?(p&&(g+=as(g,s.indent,c(p))),g=`? ${g}
${a}:`):(g=`${g}:`,p&&(g+=as(g,s.indent,c(p))));let y,w,k;we(t)?(y=!!t.spaceBefore,w=t.commentBefore,k=t.comment):(y=!1,w=null,k=null,t&&typeof t=="object"&&(t=n.createNode(t))),s.implicitKey=!1,!h&&!p&&he(t)&&(s.indentAtStart=g.length+1),f=!1,!u&&l.length>=2&&!s.inFlow&&!h&&Yr(t)&&!t.flow&&!t.tag&&!t.anchor&&(s.indent=s.indent.substring(2));let S=!1;const C=qs(t,s,()=>S=!0,()=>f=!0);let T=" ";if(p||y||w){if(T=y?`
`:"",w){const I=c(w);T+=`
${At(I,s.indent)}`}C===""&&!s.inFlow?T===`
`&&k&&(T=`

`):T+=`
${s.indent}`}else if(!h&&ve(t)){const I=C[0],R=C.indexOf(`
`),q=R!==-1,Q=s.inFlow??t.flow??t.items.length===0;if(q||!Q){let z=!1;if(q&&(I==="&"||I==="!")){let L=C.indexOf(" ");I==="&"&&L!==-1&&L<R&&C[L+1]==="!"&&(L=C.indexOf(" ",L+1)),(L===-1||R<L)&&(z=!0)}z||(T=`
${s.indent}`)}}else(C===""||C[0]===`
`)&&(T="");return g+=T+C,s.inFlow?S&&r&&r():k&&!S?g+=as(g,s.indent,c(k)):f&&i&&i(),g}function N_(e,t){(e==="debug"||e==="warn")&&console.warn(t)}const di="<<",Tt={identify:e=>e===di||typeof e=="symbol"&&e.description===di,default:"key",tag:"tag:yaml.org,2002:merge",test:/^<<$/,resolve:()=>Object.assign(new Y(Symbol(di)),{addToJSMap:Au}),stringify:()=>di},I_=(e,t)=>(Tt.identify(t)||he(t)&&(!t.type||t.type===Y.PLAIN)&&Tt.identify(t.value))&&(e==null?void 0:e.doc.schema.tags.some(s=>s.tag===Tt.tag&&s.default));function Au(e,t,s){if(s=e&&vs(s)?s.resolve(e.doc):s,Yr(s))for(const r of s.items)en(e,t,r);else if(Array.isArray(s))for(const r of s)en(e,t,r);else en(e,t,s)}function en(e,t,s){const r=e&&vs(s)?s.resolve(e.doc):s;if(!Gr(r))throw new Error("Merge sources must be maps or map aliases");const i=r.toJSON(null,e,Map);for(const[o,n]of i)t instanceof Map?t.has(o)||t.set(o,n):t instanceof Set?t.add(o):Object.prototype.hasOwnProperty.call(t,o)||Object.defineProperty(t,o,{value:n,writable:!0,enumerable:!0,configurable:!0});return t}function Pu(e,t,{key:s,value:r}){if(we(s)&&s.addToJSMap)s.addToJSMap(e,t,r);else if(I_(e,s))Au(e,t,r);else{const i=it(s,"",e);if(t instanceof Map)t.set(i,it(r,i,e));else if(t instanceof Set)t.add(i);else{const o=R_(s,i,e),n=it(r,o,e);o in t?Object.defineProperty(t,o,{value:n,writable:!0,enumerable:!0,configurable:!0}):t[o]=n}}return t}function R_(e,t,s){if(t===null)return"";if(typeof t!="object")return String(t);if(we(e)&&(s!=null&&s.doc)){const r=Cu(s.doc,{});r.anchors=new Set;for(const o of s.anchors.keys())r.anchors.add(o.anchor);r.inFlow=!0,r.inStringifyKey=!0;const i=e.toString(r);if(!s.mapKeyWarned){let o=JSON.stringify(i);o.length>40&&(o=o.substring(0,36)+'..."'),N_(s.doc.options.logLevel,`Keys with collection values will be stringified due to JS Object restrictions: ${o}. Set mapAsMap: true to use object keys.`),s.mapKeyWarned=!0}return i}return JSON.stringify(t)}function tl(e,t,s){const r=zr(e,void 0,s),i=zr(t,void 0,s);return new Fe(r,i)}class Fe{constructor(t,s=null){Object.defineProperty(this,ot,{value:vu}),this.key=t,this.value=s}clone(t){let{key:s,value:r}=this;return we(s)&&(s=s.clone(t)),we(r)&&(r=r.clone(t)),new Fe(s,r)}toJSON(t,s){const r=s!=null&&s.mapAsMap?new Map:{};return Pu(s,r,this)}toString(t,s,r){return t!=null&&t.doc?T_(this,t,s,r):JSON.stringify(this)}}function Ou(e,t,s){return(t.inFlow??e.flow?z_:D_)(e,t,s)}function D_({comment:e,items:t},s,{blockItemPrefix:r,flowChars:i,itemIndent:o,onChompKeep:n,onComment:a}){const{indent:l,options:{commentString:c}}=s,u=Object.assign({},s,{indent:o,type:null});let d=!1;const p=[];for(let v=0;v<t.length;++v){const f=t[v];let g=null;if(we(f))!d&&f.spaceBefore&&p.push(""),Vi(s,p,f.commentBefore,d),f.comment&&(g=f.comment);else if(_e(f)){const w=we(f.key)?f.key:null;w&&(!d&&w.spaceBefore&&p.push(""),Vi(s,p,w.commentBefore,d))}d=!1;let y=qs(f,u,()=>g=null,()=>d=!0);g&&(y+=as(y,o,c(g))),d&&g&&(d=!1),p.push(r+y)}let h;if(p.length===0)h=i.start+i.end;else{h=p[0];for(let v=1;v<p.length;++v){const f=p[v];h+=f?`
${l}${f}`:`
`}}return e?(h+=`
`+At(c(e),l),a&&a()):d&&n&&n(),h}function z_({items:e},t,{flowChars:s,itemIndent:r}){const{indent:i,indentStep:o,flowCollectionPadding:n,options:{commentString:a}}=t;r+=o;const l=Object.assign({},t,{indent:r,inFlow:!0,type:null});let c=!1,u=0;const d=[];for(let v=0;v<e.length;++v){const f=e[v];let g=null;if(we(f))f.spaceBefore&&d.push(""),Vi(t,d,f.commentBefore,!1),f.comment&&(g=f.comment);else if(_e(f)){const w=we(f.key)?f.key:null;w&&(w.spaceBefore&&d.push(""),Vi(t,d,w.commentBefore,!1),w.comment&&(c=!0));const k=we(f.value)?f.value:null;k?(k.comment&&(g=k.comment),k.commentBefore&&(c=!0)):f.value==null&&(w!=null&&w.comment)&&(g=w.comment)}g&&(c=!0);let y=qs(f,l,()=>g=null);v<e.length-1&&(y+=","),g&&(y+=as(y,r,a(g))),!c&&(d.length>u||y.includes(`
`))&&(c=!0),d.push(y),u=d.length}const{start:p,end:h}=s;if(d.length===0)return p+h;if(!c){const v=d.reduce((f,g)=>f+g.length+2,2);c=t.options.lineWidth>0&&v>t.options.lineWidth}if(c){let v=p;for(const f of d)v+=f?`
${o}${i}${f}`:`
`;return`${v}
${i}${h}`}else return`${p}${n}${d.join(" ")}${n}${h}`}function Vi({indent:e,options:{commentString:t}},s,r,i){if(r&&i&&(r=r.replace(/^\n+/,"")),r){const o=At(t(r),e);s.push(o.trimStart())}}function ls(e,t){const s=he(t)?t.value:t;for(const r of e)if(_e(r)&&(r.key===t||r.key===s||he(r.key)&&r.key.value===s))return r}class et extends Su{static get tagName(){return"tag:yaml.org,2002:map"}constructor(t){super(Ht,t),this.items=[]}static from(t,s,r){const{keepUndefined:i,replacer:o}=r,n=new this(t),a=(l,c)=>{if(typeof o=="function")c=o.call(s,l,c);else if(Array.isArray(o)&&!o.includes(l))return;(c!==void 0||i)&&n.items.push(tl(l,c,r))};if(s instanceof Map)for(const[l,c]of s)a(l,c);else if(s&&typeof s=="object")for(const l of Object.keys(s))a(l,s[l]);return typeof t.sortMapEntries=="function"&&n.items.sort(t.sortMapEntries),n}add(t,s){var n;let r;_e(t)?r=t:!t||typeof t!="object"||!("key"in t)?r=new Fe(t,t==null?void 0:t.value):r=new Fe(t.key,t.value);const i=ls(this.items,r.key),o=(n=this.schema)==null?void 0:n.sortMapEntries;if(i){if(!s)throw new Error(`Key ${r.key} already set`);he(i.value)&&xu(r.value)?i.value.value=r.value:i.value=r.value}else if(o){const a=this.items.findIndex(l=>o(r,l)<0);a===-1?this.items.push(r):this.items.splice(a,0,r)}else this.items.push(r)}delete(t){const s=ls(this.items,t);return s?this.items.splice(this.items.indexOf(s),1).length>0:!1}get(t,s){const r=ls(this.items,t),i=r==null?void 0:r.value;return(!s&&he(i)?i.value:i)??void 0}has(t){return!!ls(this.items,t)}set(t,s){this.add(new Fe(t,s),!0)}toJSON(t,s,r){const i=r?new r:s!=null&&s.mapAsMap?new Map:{};s!=null&&s.onCreate&&s.onCreate(i);for(const o of this.items)Pu(s,i,o);return i}toString(t,s,r){if(!t)return JSON.stringify(this);for(const i of this.items)if(!_e(i))throw new Error(`Map items must all be pairs; found ${JSON.stringify(i)} instead`);return!t.allNullValues&&this.hasAllNullValues(!1)&&(t=Object.assign({},t,{allNullValues:!0})),Ou(this,t,{blockItemPrefix:"",flowChars:{start:"{",end:"}"},itemIndent:t.indent||"",onChompKeep:r,onComment:s})}}const rr={collection:"map",default:!0,nodeClass:et,tag:"tag:yaml.org,2002:map",resolve(e,t){return Gr(e)||t("Expected a mapping for this tag"),e},createNode:(e,t,s)=>et.from(e,t,s)};class fs extends Su{static get tagName(){return"tag:yaml.org,2002:seq"}constructor(t){super(tr,t),this.items=[]}add(t){this.items.push(t)}delete(t){const s=ui(t);return typeof s!="number"?!1:this.items.splice(s,1).length>0}get(t,s){const r=ui(t);if(typeof r!="number")return;const i=this.items[r];return!s&&he(i)?i.value:i}has(t){const s=ui(t);return typeof s=="number"&&s<this.items.length}set(t,s){const r=ui(t);if(typeof r!="number")throw new Error(`Expected a valid index, not ${t}.`);const i=this.items[r];he(i)&&xu(s)?i.value=s:this.items[r]=s}toJSON(t,s){const r=[];s!=null&&s.onCreate&&s.onCreate(r);let i=0;for(const o of this.items)r.push(it(o,String(i++),s));return r}toString(t,s,r){return t?Ou(this,t,{blockItemPrefix:"- ",flowChars:{start:"[",end:"]"},itemIndent:(t.indent||"")+"  ",onChompKeep:r,onComment:s}):JSON.stringify(this)}static from(t,s,r){const{replacer:i}=r,o=new this(t);if(s&&Symbol.iterator in Object(s)){let n=0;for(let a of s){if(typeof i=="function"){const l=s instanceof Set?a:String(n++);a=i.call(s,l,a)}o.items.push(zr(a,void 0,r))}}return o}}function ui(e){let t=he(e)?e.value:e;return t&&typeof t=="string"&&(t=Number(t)),typeof t=="number"&&Number.isInteger(t)&&t>=0?t:null}const ir={collection:"seq",default:!0,nodeClass:fs,tag:"tag:yaml.org,2002:seq",resolve(e,t){return Yr(e)||t("Expected a sequence for this tag"),e},createNode:(e,t,s)=>fs.from(e,t,s)},go={identify:e=>typeof e=="string",default:!0,tag:"tag:yaml.org,2002:str",resolve:e=>e,stringify(e,t,s,r){return t=Object.assign({actualString:!0},t),el(e,t,s,r)}},yo={identify:e=>e==null,createNode:()=>new Y(null),default:!0,tag:"tag:yaml.org,2002:null",test:/^(?:~|[Nn]ull|NULL)?$/,resolve:()=>new Y(null),stringify:({source:e},t)=>typeof e=="string"&&yo.test.test(e)?e:t.options.nullStr},sl={identify:e=>typeof e=="boolean",default:!0,tag:"tag:yaml.org,2002:bool",test:/^(?:[Tt]rue|TRUE|[Ff]alse|FALSE)$/,resolve:e=>new Y(e[0]==="t"||e[0]==="T"),stringify({source:e,value:t},s){if(e&&sl.test.test(e)){const r=e[0]==="t"||e[0]==="T";if(t===r)return e}return t?s.options.trueStr:s.options.falseStr}};function ft({format:e,minFractionDigits:t,tag:s,value:r}){if(typeof r=="bigint")return String(r);const i=typeof r=="number"?r:Number(r);if(!isFinite(i))return isNaN(i)?".nan":i<0?"-.inf":".inf";let o=Object.is(r,-0)?"-0":JSON.stringify(r);if(!e&&t&&(!s||s==="tag:yaml.org,2002:float")&&/^\d/.test(o)){let n=o.indexOf(".");n<0&&(n=o.length,o+=".");let a=t-(o.length-n-1);for(;a-- >0;)o+="0"}return o}const Tu={identify:e=>typeof e=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^(?:[-+]?\.(?:inf|Inf|INF)|\.nan|\.NaN|\.NAN)$/,resolve:e=>e.slice(-3).toLowerCase()==="nan"?NaN:e[0]==="-"?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY,stringify:ft},Nu={identify:e=>typeof e=="number",default:!0,tag:"tag:yaml.org,2002:float",format:"EXP",test:/^[-+]?(?:\.[0-9]+|[0-9]+(?:\.[0-9]*)?)[eE][-+]?[0-9]+$/,resolve:e=>parseFloat(e),stringify(e){const t=Number(e.value);return isFinite(t)?t.toExponential():ft(e)}},Iu={identify:e=>typeof e=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^[-+]?(?:\.[0-9]+|[0-9]+\.[0-9]*)$/,resolve(e){const t=new Y(parseFloat(e)),s=e.indexOf(".");return s!==-1&&e[e.length-1]==="0"&&(t.minFractionDigits=e.length-s-1),t},stringify:ft},bo=e=>typeof e=="bigint"||Number.isInteger(e),rl=(e,t,s,{intAsBigInt:r})=>r?BigInt(e):parseInt(e.substring(t),s);function Ru(e,t,s){const{value:r}=e;return bo(r)&&r>=0?s+r.toString(t):ft(e)}const Du={identify:e=>bo(e)&&e>=0,default:!0,tag:"tag:yaml.org,2002:int",format:"OCT",test:/^0o[0-7]+$/,resolve:(e,t,s)=>rl(e,2,8,s),stringify:e=>Ru(e,8,"0o")},zu={identify:bo,default:!0,tag:"tag:yaml.org,2002:int",test:/^[-+]?[0-9]+$/,resolve:(e,t,s)=>rl(e,0,10,s),stringify:ft},Lu={identify:e=>bo(e)&&e>=0,default:!0,tag:"tag:yaml.org,2002:int",format:"HEX",test:/^0x[0-9a-fA-F]+$/,resolve:(e,t,s)=>rl(e,2,16,s),stringify:e=>Ru(e,16,"0x")},L_=[rr,ir,go,yo,sl,Du,zu,Lu,Tu,Nu,Iu];function Ac(e){return typeof e=="bigint"||Number.isInteger(e)}const hi=({value:e})=>JSON.stringify(e),j_=[{identify:e=>typeof e=="string",default:!0,tag:"tag:yaml.org,2002:str",resolve:e=>e,stringify:hi},{identify:e=>e==null,createNode:()=>new Y(null),default:!0,tag:"tag:yaml.org,2002:null",test:/^null$/,resolve:()=>null,stringify:hi},{identify:e=>typeof e=="boolean",default:!0,tag:"tag:yaml.org,2002:bool",test:/^true$|^false$/,resolve:e=>e==="true",stringify:hi},{identify:Ac,default:!0,tag:"tag:yaml.org,2002:int",test:/^-?(?:0|[1-9][0-9]*)$/,resolve:(e,t,{intAsBigInt:s})=>s?BigInt(e):parseInt(e,10),stringify:({value:e})=>Ac(e)?e.toString():JSON.stringify(e)},{identify:e=>typeof e=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^-?(?:0|[1-9][0-9]*)(?:\.[0-9]*)?(?:[eE][-+]?[0-9]+)?$/,resolve:e=>parseFloat(e),stringify:hi}],M_={default:!0,tag:"",test:/^/,resolve(e,t){return t(`Unresolved plain scalar ${JSON.stringify(e)}`),e}},F_=[rr,ir].concat(j_,M_),il={identify:e=>e instanceof Uint8Array,default:!1,tag:"tag:yaml.org,2002:binary",resolve(e,t){if(typeof atob=="function"){const s=atob(e.replace(/[\n\r]/g,"")),r=new Uint8Array(s.length);for(let i=0;i<s.length;++i)r[i]=s.charCodeAt(i);return r}else return t("This environment does not support reading binary tags; either Buffer or atob is required"),e},stringify({comment:e,type:t,value:s},r,i,o){if(!s)return"";const n=s;let a;if(typeof btoa=="function"){let l="";for(let c=0;c<n.length;++c)l+=String.fromCharCode(n[c]);a=btoa(l)}else throw new Error("This environment does not support writing binary tags; either Buffer or btoa is required");if(t??(t=Y.BLOCK_LITERAL),t!==Y.QUOTE_DOUBLE){const l=Math.max(r.options.lineWidth-r.indent.length,r.options.minContentWidth),c=Math.ceil(a.length/l),u=new Array(c);for(let d=0,p=0;d<c;++d,p+=l)u[d]=a.substr(p,l);a=u.join(t===Y.BLOCK_LITERAL?`
`:" ")}return el({comment:e,type:t,value:a},r,i,o)}};function ju(e,t){if(Yr(e))for(let s=0;s<e.items.length;++s){let r=e.items[s];if(!_e(r)){if(Gr(r)){r.items.length>1&&t("Each pair must have its own sequence indicator");const i=r.items[0]||new Fe(new Y(null));if(r.commentBefore&&(i.key.commentBefore=i.key.commentBefore?`${r.commentBefore}
${i.key.commentBefore}`:r.commentBefore),r.comment){const o=i.value??i.key;o.comment=o.comment?`${r.comment}
${o.comment}`:r.comment}r=i}e.items[s]=_e(r)?r:new Fe(r)}}else t("Expected a sequence for this tag");return e}function Mu(e,t,s){const{replacer:r}=s,i=new fs(e);i.tag="tag:yaml.org,2002:pairs";let o=0;if(t&&Symbol.iterator in Object(t))for(let n of t){typeof r=="function"&&(n=r.call(t,String(o++),n));let a,l;if(Array.isArray(n))if(n.length===2)a=n[0],l=n[1];else throw new TypeError(`Expected [key, value] tuple: ${n}`);else if(n&&n instanceof Object){const c=Object.keys(n);if(c.length===1)a=c[0],l=n[a];else throw new TypeError(`Expected tuple with one key, not ${c.length} keys`)}else a=n;i.items.push(tl(a,l,s))}return i}const ol={collection:"seq",default:!1,tag:"tag:yaml.org,2002:pairs",resolve:ju,createNode:Mu};class Ls extends fs{constructor(){super(),this.add=et.prototype.add.bind(this),this.delete=et.prototype.delete.bind(this),this.get=et.prototype.get.bind(this),this.has=et.prototype.has.bind(this),this.set=et.prototype.set.bind(this),this.tag=Ls.tag}toJSON(t,s){if(!s)return super.toJSON(t);const r=new Map;s!=null&&s.onCreate&&s.onCreate(r);for(const i of this.items){let o,n;if(_e(i)?(o=it(i.key,"",s),n=it(i.value,o,s)):o=it(i,"",s),r.has(o))throw new Error("Ordered maps must not include duplicate keys");r.set(o,n)}return r}static from(t,s,r){const i=Mu(t,s,r),o=new this;return o.items=i.items,o}}Ls.tag="tag:yaml.org,2002:omap";const nl={collection:"seq",identify:e=>e instanceof Map,nodeClass:Ls,default:!1,tag:"tag:yaml.org,2002:omap",resolve(e,t){const s=ju(e,t),r=[];for(const{key:i}of s.items)he(i)&&(r.includes(i.value)?t(`Ordered maps must not include duplicate keys: ${i.value}`):r.push(i.value));return Object.assign(new Ls,s)},createNode:(e,t,s)=>Ls.from(e,t,s)};function Fu({value:e,source:t},s){return t&&(e?Vu:Bu).test.test(t)?t:e?s.options.trueStr:s.options.falseStr}const Vu={identify:e=>e===!0,default:!0,tag:"tag:yaml.org,2002:bool",test:/^(?:Y|y|[Yy]es|YES|[Tt]rue|TRUE|[Oo]n|ON)$/,resolve:()=>new Y(!0),stringify:Fu},Bu={identify:e=>e===!1,default:!0,tag:"tag:yaml.org,2002:bool",test:/^(?:N|n|[Nn]o|NO|[Ff]alse|FALSE|[Oo]ff|OFF)$/,resolve:()=>new Y(!1),stringify:Fu},V_={identify:e=>typeof e=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^(?:[-+]?\.(?:inf|Inf|INF)|\.nan|\.NaN|\.NAN)$/,resolve:e=>e.slice(-3).toLowerCase()==="nan"?NaN:e[0]==="-"?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY,stringify:ft},B_={identify:e=>typeof e=="number",default:!0,tag:"tag:yaml.org,2002:float",format:"EXP",test:/^[-+]?(?:[0-9][0-9_]*)?(?:\.[0-9_]*)?[eE][-+]?[0-9]+$/,resolve:e=>parseFloat(e.replace(/_/g,"")),stringify(e){const t=Number(e.value);return isFinite(t)?t.toExponential():ft(e)}},q_={identify:e=>typeof e=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^[-+]?(?:[0-9][0-9_]*)?\.[0-9_]*$/,resolve(e){const t=new Y(parseFloat(e.replace(/_/g,""))),s=e.indexOf(".");if(s!==-1){const r=e.substring(s+1).replace(/_/g,"");r[r.length-1]==="0"&&(t.minFractionDigits=r.length)}return t},stringify:ft},Jr=e=>typeof e=="bigint"||Number.isInteger(e);function vo(e,t,s,{intAsBigInt:r}){const i=e[0];if((i==="-"||i==="+")&&(t+=1),e=e.substring(t).replace(/_/g,""),r){switch(s){case 2:e=`0b${e}`;break;case 8:e=`0o${e}`;break;case 16:e=`0x${e}`;break}const n=BigInt(e);return i==="-"?BigInt(-1)*n:n}const o=parseInt(e,s);return i==="-"?-1*o:o}function al(e,t,s){const{value:r}=e;if(Jr(r)){const i=r.toString(t);return r<0?"-"+s+i.substr(1):s+i}return ft(e)}const U_={identify:Jr,default:!0,tag:"tag:yaml.org,2002:int",format:"BIN",test:/^[-+]?0b[0-1_]+$/,resolve:(e,t,s)=>vo(e,2,2,s),stringify:e=>al(e,2,"0b")},H_={identify:Jr,default:!0,tag:"tag:yaml.org,2002:int",format:"OCT",test:/^[-+]?0[0-7_]+$/,resolve:(e,t,s)=>vo(e,1,8,s),stringify:e=>al(e,8,"0")},K_={identify:Jr,default:!0,tag:"tag:yaml.org,2002:int",test:/^[-+]?[0-9][0-9_]*$/,resolve:(e,t,s)=>vo(e,0,10,s),stringify:ft},W_={identify:Jr,default:!0,tag:"tag:yaml.org,2002:int",format:"HEX",test:/^[-+]?0x[0-9a-fA-F_]+$/,resolve:(e,t,s)=>vo(e,2,16,s),stringify:e=>al(e,16,"0x")};class js extends et{constructor(t){super(t),this.tag=js.tag}add(t){let s;_e(t)?s=t:t&&typeof t=="object"&&"key"in t&&"value"in t&&t.value===null?s=new Fe(t.key,null):s=new Fe(t,null),ls(this.items,s.key)||this.items.push(s)}get(t,s){const r=ls(this.items,t);return!s&&_e(r)?he(r.key)?r.key.value:r.key:r}set(t,s){if(typeof s!="boolean")throw new Error(`Expected boolean value for set(key, value) in a YAML set, not ${typeof s}`);const r=ls(this.items,t);r&&!s?this.items.splice(this.items.indexOf(r),1):!r&&s&&this.items.push(new Fe(t))}toJSON(t,s){return super.toJSON(t,s,Set)}toString(t,s,r){if(!t)return JSON.stringify(this);if(this.hasAllNullValues(!0))return super.toString(Object.assign({},t,{allNullValues:!0}),s,r);throw new Error("Set items must all have null values")}static from(t,s,r){const{replacer:i}=r,o=new this(t);if(s&&Symbol.iterator in Object(s))for(let n of s)typeof i=="function"&&(n=i.call(s,n,n)),o.items.push(tl(n,null,r));return o}}js.tag="tag:yaml.org,2002:set";const ll={collection:"map",identify:e=>e instanceof Set,nodeClass:js,default:!1,tag:"tag:yaml.org,2002:set",createNode:(e,t,s)=>js.from(e,t,s),resolve(e,t){if(Gr(e)){if(e.hasAllNullValues(!0))return Object.assign(new js,e);t("Set items must all have null values")}else t("Expected a mapping for this tag");return e}};function cl(e,t){const s=e[0],r=s==="-"||s==="+"?e.substring(1):e,i=n=>t?BigInt(n):Number(n),o=r.replace(/_/g,"").split(":").reduce((n,a)=>n*i(60)+i(a),i(0));return s==="-"?i(-1)*o:o}function qu(e){let{value:t}=e,s=n=>n;if(typeof t=="bigint")s=n=>BigInt(n);else if(isNaN(t)||!isFinite(t))return ft(e);let r="";t<0&&(r="-",t*=s(-1));const i=s(60),o=[t%i];return t<60?o.unshift(0):(t=(t-o[0])/i,o.unshift(t%i),t>=60&&(t=(t-o[0])/i,o.unshift(t))),r+o.map(n=>String(n).padStart(2,"0")).join(":").replace(/000000\d*$/,"")}const Uu={identify:e=>typeof e=="bigint"||Number.isInteger(e),default:!0,tag:"tag:yaml.org,2002:int",format:"TIME",test:/^[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+$/,resolve:(e,t,{intAsBigInt:s})=>cl(e,s),stringify:qu},Hu={identify:e=>typeof e=="number",default:!0,tag:"tag:yaml.org,2002:float",format:"TIME",test:/^[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+\.[0-9_]*$/,resolve:e=>cl(e,!1),stringify:qu},wo={identify:e=>e instanceof Date,default:!0,tag:"tag:yaml.org,2002:timestamp",test:RegExp("^([0-9]{4})-([0-9]{1,2})-([0-9]{1,2})(?:(?:t|T|[ \\t]+)([0-9]{1,2}):([0-9]{1,2}):([0-9]{1,2}(\\.[0-9]+)?)(?:[ \\t]*(Z|[-+][012]?[0-9](?::[0-9]{2})?))?)?$"),resolve(e){const t=e.match(wo.test);if(!t)throw new Error("!!timestamp expects a date, starting with yyyy-mm-dd");const[,s,r,i,o,n,a]=t.map(Number),l=t[7]?Number((t[7]+"00").substr(1,3)):0;let c=Date.UTC(s,r-1,i,o||0,n||0,a||0,l);const u=t[8];if(u&&u!=="Z"){let d=cl(u,!1);Math.abs(d)<30&&(d*=60),c-=6e4*d}return new Date(c)},stringify:({value:e})=>(e==null?void 0:e.toISOString().replace(/(T00:00:00)?\.000Z$/,""))??""},Pc=[rr,ir,go,yo,Vu,Bu,U_,H_,K_,W_,V_,B_,q_,il,Tt,nl,ol,ll,Uu,Hu,wo],Oc=new Map([["core",L_],["failsafe",[rr,ir,go]],["json",F_],["yaml11",Pc],["yaml-1.1",Pc]]),Tc={binary:il,bool:sl,float:Iu,floatExp:Nu,floatNaN:Tu,floatTime:Hu,int:zu,intHex:Lu,intOct:Du,intTime:Uu,map:rr,merge:Tt,null:yo,omap:nl,pairs:ol,seq:ir,set:ll,timestamp:wo},G_={"tag:yaml.org,2002:binary":il,"tag:yaml.org,2002:merge":Tt,"tag:yaml.org,2002:omap":nl,"tag:yaml.org,2002:pairs":ol,"tag:yaml.org,2002:set":ll,"tag:yaml.org,2002:timestamp":wo};function tn(e,t,s){const r=Oc.get(t);if(r&&!e)return s&&!r.includes(Tt)?r.concat(Tt):r.slice();let i=r;if(!i)if(Array.isArray(e))i=[];else{const o=Array.from(Oc.keys()).filter(n=>n!=="yaml11").map(n=>JSON.stringify(n)).join(", ");throw new Error(`Unknown schema "${t}"; use one of ${o} or define customTags array`)}if(Array.isArray(e))for(const o of e)i=i.concat(o);else typeof e=="function"&&(i=e(i.slice()));return s&&(i=i.concat(Tt)),i.reduce((o,n)=>{const a=typeof n=="string"?Tc[n]:n;if(!a){const l=JSON.stringify(n),c=Object.keys(Tc).map(u=>JSON.stringify(u)).join(", ");throw new Error(`Unknown custom tag ${l}; use one of ${c}`)}return o.includes(a)||o.push(a),o},[])}const Y_=(e,t)=>e.key<t.key?-1:e.key>t.key?1:0;class dl{constructor({compat:t,customTags:s,merge:r,resolveKnownTags:i,schema:o,sortMapEntries:n,toStringDefaults:a}){this.compat=Array.isArray(t)?tn(t,"compat"):t?tn(null,t):null,this.name=typeof o=="string"&&o||"core",this.knownTags=i?G_:{},this.tags=tn(s,this.name,r),this.toStringOptions=a??null,Object.defineProperty(this,Ht,{value:rr}),Object.defineProperty(this,$t,{value:go}),Object.defineProperty(this,tr,{value:ir}),this.sortMapEntries=typeof n=="function"?n:n===!0?Y_:null}clone(){const t=Object.create(dl.prototype,Object.getOwnPropertyDescriptors(this));return t.tags=this.tags.slice(),t}}function J_(e,t){var l;const s=[];let r=t.directives===!0;if(t.directives!==!1&&e.directives){const c=e.directives.toString(e);c?(s.push(c),r=!0):e.directives.docStart&&(r=!0)}r&&s.push("---");const i=Cu(e,t),{commentString:o}=i.options;if(e.commentBefore){s.length!==1&&s.unshift("");const c=o(e.commentBefore);s.unshift(At(c,""))}let n=!1,a=null;if(e.contents){if(we(e.contents)){if(e.contents.spaceBefore&&r&&s.push(""),e.contents.commentBefore){const d=o(e.contents.commentBefore);s.push(At(d,""))}i.forceBlockIndent=!!e.comment,a=e.contents.comment}const c=a?void 0:()=>n=!0;let u=qs(e.contents,i,()=>a=null,c);a&&(u+=as(u,"",o(a))),(u[0]==="|"||u[0]===">")&&s[s.length-1]==="---"?s[s.length-1]=`--- ${u}`:s.push(u)}else s.push(qs(e.contents,i));if((l=e.directives)!=null&&l.docEnd)if(e.comment){const c=o(e.comment);c.includes(`
`)?(s.push("..."),s.push(At(c,""))):s.push(`... ${c}`)}else s.push("...");else{let c=e.comment;c&&n&&(c=c.replace(/^\n+/,"")),c&&((!n||a)&&s[s.length-1]!==""&&s.push(""),s.push(At(o(c),"")))}return s.join(`
`)+`
`}let ul=class Ku{constructor(t,s,r){this.commentBefore=null,this.comment=null,this.errors=[],this.warnings=[],Object.defineProperty(this,ot,{value:On});let i=null;typeof s=="function"||Array.isArray(s)?i=s:r===void 0&&s&&(r=s,s=void 0);const o=Object.assign({intAsBigInt:!1,keepSourceTokens:!1,logLevel:"warn",prettyErrors:!0,strict:!0,stringKeys:!1,uniqueKeys:!0,version:"1.2"},r);this.options=o;let{version:n}=o;r!=null&&r._directives?(this.directives=r._directives.atDocument(),this.directives.yaml.explicit&&(n=this.directives.yaml.version)):this.directives=new Le({version:n}),this.setSchema(n,r),this.contents=t===void 0?null:this.createNode(t,i,r)}clone(){const t=Object.create(Ku.prototype,{[ot]:{value:On}});return t.commentBefore=this.commentBefore,t.comment=this.comment,t.errors=this.errors.slice(),t.warnings=this.warnings.slice(),t.options=Object.assign({},this.options),this.directives&&(t.directives=this.directives.clone()),t.schema=this.schema.clone(),t.contents=we(this.contents)?this.contents.clone(t.schema):this.contents,this.range&&(t.range=this.range.slice()),t}add(t){Ss(this.contents)&&this.contents.add(t)}addIn(t,s){Ss(this.contents)&&this.contents.addIn(t,s)}createAlias(t,s){if(!t.anchor){const r=$u(this);t.anchor=!s||r.has(s)?ku(s||"a",r):s}return new Za(t.anchor)}createNode(t,s,r){let i;if(typeof s=="function")t=s.call({"":t},"",t),i=s;else if(Array.isArray(s)){const g=w=>typeof w=="number"||w instanceof String||w instanceof Number,y=s.filter(g).map(String);y.length>0&&(s=s.concat(y)),i=s}else r===void 0&&s&&(r=s,s=void 0);const{aliasDuplicateObjects:o,anchorPrefix:n,flow:a,keepUndefined:l,onTagObj:c,tag:u}=r??{},{onAnchor:d,setAnchors:p,sourceObjects:h}=k_(this,n||"a"),v={aliasDuplicateObjects:o??!0,keepUndefined:l??!1,onAnchor:d,onTagObj:c,replacer:i,schema:this.schema,sourceObjects:h},f=zr(t,u,v);return a&&ve(f)&&(f.flow=!0),p(),f}createPair(t,s,r={}){const i=this.createNode(t,null,r),o=this.createNode(s,null,r);return new Fe(i,o)}delete(t){return Ss(this.contents)?this.contents.delete(t):!1}deleteIn(t){return vr(t)?this.contents==null?!1:(this.contents=null,!0):Ss(this.contents)?this.contents.deleteIn(t):!1}get(t,s){return ve(this.contents)?this.contents.get(t,s):void 0}getIn(t,s){return vr(t)?!s&&he(this.contents)?this.contents.value:this.contents:ve(this.contents)?this.contents.getIn(t,s):void 0}has(t){return ve(this.contents)?this.contents.has(t):!1}hasIn(t){return vr(t)?this.contents!==void 0:ve(this.contents)?this.contents.hasIn(t):!1}set(t,s){this.contents==null?this.contents=Fi(this.schema,[t],s):Ss(this.contents)&&this.contents.set(t,s)}setIn(t,s){vr(t)?this.contents=s:this.contents==null?this.contents=Fi(this.schema,Array.from(t),s):Ss(this.contents)&&this.contents.setIn(t,s)}setSchema(t,s={}){typeof t=="number"&&(t=String(t));let r;switch(t){case"1.1":this.directives?this.directives.yaml.version="1.1":this.directives=new Le({version:"1.1"}),r={resolveKnownTags:!1,schema:"yaml-1.1"};break;case"1.2":case"next":this.directives?this.directives.yaml.version=t:this.directives=new Le({version:t}),r={resolveKnownTags:!0,schema:"core"};break;case null:this.directives&&delete this.directives,r=null;break;default:{const i=JSON.stringify(t);throw new Error(`Expected '1.1', '1.2' or null as first argument, but found: ${i}`)}}if(s.schema instanceof Object)this.schema=s.schema;else if(r)this.schema=new dl(Object.assign(r,s));else throw new Error("With a null YAML version, the { schema: Schema } option is required")}toJS({json:t,jsonArg:s,mapAsMap:r,maxAliasCount:i,onAnchor:o,reviver:n}={}){const a={anchors:new Map,doc:this,keep:!t,mapAsMap:r===!0,mapKeyWarned:!1,maxAliasCount:typeof i=="number"?i:100},l=it(this.contents,s??"",a);if(typeof o=="function")for(const{count:c,res:u}of a.anchors.values())o(u,c);return typeof n=="function"?Ts(n,{"":l},"",l):l}toJSON(t,s){return this.toJS({json:!0,jsonArg:t,mapAsMap:!1,onAnchor:s})}toString(t={}){if(this.errors.length>0)throw new Error("Document with errors cannot be stringified");if("indent"in t&&(!Number.isInteger(t.indent)||Number(t.indent)<=0)){const s=JSON.stringify(t.indent);throw new Error(`"indent" option must be a positive integer, not ${s}`)}return J_(this,t)}};function Ss(e){if(ve(e))return!0;throw new Error("Expected a YAML collection as document contents")}class Wu extends Error{constructor(t,s,r,i){super(),this.name=t,this.code=r,this.message=i,this.pos=s}}class wr extends Wu{constructor(t,s,r){super("YAMLParseError",t,s,r)}}class X_ extends Wu{constructor(t,s,r){super("YAMLWarning",t,s,r)}}const Nc=(e,t)=>s=>{if(s.pos[0]===-1)return;s.linePos=s.pos.map(a=>t.linePos(a));const{line:r,col:i}=s.linePos[0];s.message+=` at line ${r}, column ${i}`;let o=i-1,n=e.substring(t.lineStarts[r-1],t.lineStarts[r]).replace(/[\n\r]+$/,"");if(o>=60&&n.length>80){const a=Math.min(o-39,n.length-79);n="…"+n.substring(a),o-=a-1}if(n.length>80&&(n=n.substring(0,79)+"…"),r>1&&/^ *$/.test(n.substring(0,o))){let a=e.substring(t.lineStarts[r-2],t.lineStarts[r-1]);a.length>80&&(a=a.substring(0,79)+`…
`),n=a+n}if(/[^ ]/.test(n)){let a=1;const l=s.linePos[1];(l==null?void 0:l.line)===r&&l.col>i&&(a=Math.max(1,Math.min(l.col-i,80-o)));const c=" ".repeat(o)+"^".repeat(a);s.message+=`:

${n}
${c}
`}};function Us(e,{flow:t,indicator:s,next:r,offset:i,onError:o,parentIndent:n,startOnNewline:a}){let l=!1,c=a,u=a,d="",p="",h=!1,v=!1,f=null,g=null,y=null,w=null,k=null,S=null,C=null;for(const R of e)switch(v&&(R.type!=="space"&&R.type!=="newline"&&R.type!=="comma"&&o(R.offset,"MISSING_CHAR","Tags and anchors must be separated from the next token by white space"),v=!1),f&&(c&&R.type!=="comment"&&R.type!=="newline"&&o(f,"TAB_AS_INDENT","Tabs are not allowed as indentation"),f=null),R.type){case"space":!t&&(s!=="doc-start"||(r==null?void 0:r.type)!=="flow-collection")&&R.source.includes("	")&&(f=R),u=!0;break;case"comment":{u||o(R,"MISSING_CHAR","Comments must be separated from other tokens by white space characters");const q=R.source.substring(1)||" ";d?d+=p+q:d=q,p="",c=!1;break}case"newline":c?d?d+=R.source:(!S||s!=="seq-item-ind")&&(l=!0):p+=R.source,c=!0,h=!0,(g||y)&&(w=R),u=!0;break;case"anchor":g&&o(R,"MULTIPLE_ANCHORS","A node can have at most one anchor"),R.source.endsWith(":")&&o(R.offset+R.source.length-1,"BAD_ALIAS","Anchor ending in : is ambiguous",!0),g=R,C??(C=R.offset),c=!1,u=!1,v=!0;break;case"tag":{y&&o(R,"MULTIPLE_TAGS","A node can have at most one tag"),y=R,C??(C=R.offset),c=!1,u=!1,v=!0;break}case s:(g||y)&&o(R,"BAD_PROP_ORDER",`Anchors and tags must be after the ${R.source} indicator`),S&&o(R,"UNEXPECTED_TOKEN",`Unexpected ${R.source} in ${t??"collection"}`),S=R,c=s==="seq-item-ind"||s==="explicit-key-ind",u=!1;break;case"comma":if(t){k&&o(R,"UNEXPECTED_TOKEN",`Unexpected , in ${t}`),k=R,c=!1,u=!1;break}default:o(R,"UNEXPECTED_TOKEN",`Unexpected ${R.type} token`),c=!1,u=!1}const T=e[e.length-1],I=T?T.offset+T.source.length:i;return v&&r&&r.type!=="space"&&r.type!=="newline"&&r.type!=="comma"&&(r.type!=="scalar"||r.source!=="")&&o(r.offset,"MISSING_CHAR","Tags and anchors must be separated from the next token by white space"),f&&(c&&f.indent<=n||(r==null?void 0:r.type)==="block-map"||(r==null?void 0:r.type)==="block-seq")&&o(f,"TAB_AS_INDENT","Tabs are not allowed as indentation"),{comma:k,found:S,spaceBefore:l,comment:d,hasNewline:h,anchor:g,tag:y,newlineAfterProp:w,end:I,start:C??I}}function Lr(e){if(!e)return null;switch(e.type){case"alias":case"scalar":case"double-quoted-scalar":case"single-quoted-scalar":if(e.source.includes(`
`))return!0;if(e.end){for(const t of e.end)if(t.type==="newline")return!0}return!1;case"flow-collection":for(const t of e.items){for(const s of t.start)if(s.type==="newline")return!0;if(t.sep){for(const s of t.sep)if(s.type==="newline")return!0}if(Lr(t.key)||Lr(t.value))return!0}return!1;default:return!0}}function Rn(e,t,s){if((t==null?void 0:t.type)==="flow-collection"){const r=t.end[0];r.indent===e&&(r.source==="]"||r.source==="}")&&Lr(t)&&s(r,"BAD_INDENT","Flow end indicator should be more indented than parent",!0)}}function Gu(e,t,s){const{uniqueKeys:r}=e.options;if(r===!1)return!1;const i=typeof r=="function"?r:(o,n)=>o===n||he(o)&&he(n)&&o.value===n.value;return t.some(o=>i(o.key,s))}const Ic="All mapping items must start at the same column";function Q_({composeNode:e,composeEmptyNode:t},s,r,i,o){var u;const n=(o==null?void 0:o.nodeClass)??et,a=new n(s.schema);s.atRoot&&(s.atRoot=!1);let l=r.offset,c=null;for(const d of r.items){const{start:p,key:h,sep:v,value:f}=d,g=Us(p,{indicator:"explicit-key-ind",next:h??(v==null?void 0:v[0]),offset:l,onError:i,parentIndent:r.indent,startOnNewline:!0}),y=!g.found;if(y){if(h&&(h.type==="block-seq"?i(l,"BLOCK_AS_IMPLICIT_KEY","A block sequence may not be used as an implicit map key"):"indent"in h&&h.indent!==r.indent&&i(l,"BAD_INDENT",Ic)),!g.anchor&&!g.tag&&!v){c=g.end,g.comment&&(a.comment?a.comment+=`
`+g.comment:a.comment=g.comment);continue}(g.newlineAfterProp||Lr(h))&&i(h??p[p.length-1],"MULTILINE_IMPLICIT_KEY","Implicit keys need to be on a single line")}else((u=g.found)==null?void 0:u.indent)!==r.indent&&i(l,"BAD_INDENT",Ic);s.atKey=!0;const w=g.end,k=h?e(s,h,g,i):t(s,w,p,null,g,i);s.schema.compat&&Rn(r.indent,h,i),s.atKey=!1,Gu(s,a.items,k)&&i(w,"DUPLICATE_KEY","Map keys must be unique");const S=Us(v??[],{indicator:"map-value-ind",next:f,offset:k.range[2],onError:i,parentIndent:r.indent,startOnNewline:!h||h.type==="block-scalar"});if(l=S.end,S.found){y&&((f==null?void 0:f.type)==="block-map"&&!S.hasNewline&&i(l,"BLOCK_AS_IMPLICIT_KEY","Nested mappings are not allowed in compact mappings"),s.options.strict&&g.start<S.found.offset-1024&&i(k.range,"KEY_OVER_1024_CHARS","The : indicator must be at most 1024 chars after the start of an implicit block mapping key"));const C=f?e(s,f,S,i):t(s,l,v,null,S,i);s.schema.compat&&Rn(r.indent,f,i),l=C.range[2];const T=new Fe(k,C);s.options.keepSourceTokens&&(T.srcToken=d),a.items.push(T)}else{y&&i(k.range,"MISSING_CHAR","Implicit map keys need to be followed by map values"),S.comment&&(k.comment?k.comment+=`
`+S.comment:k.comment=S.comment);const C=new Fe(k);s.options.keepSourceTokens&&(C.srcToken=d),a.items.push(C)}}return c&&c<l&&i(c,"IMPOSSIBLE","Map comment with trailing content"),a.range=[r.offset,l,c??l],a}function Z_({composeNode:e,composeEmptyNode:t},s,r,i,o){const n=(o==null?void 0:o.nodeClass)??fs,a=new n(s.schema);s.atRoot&&(s.atRoot=!1),s.atKey&&(s.atKey=!1);let l=r.offset,c=null;for(const{start:u,value:d}of r.items){const p=Us(u,{indicator:"seq-item-ind",next:d,offset:l,onError:i,parentIndent:r.indent,startOnNewline:!0});if(!p.found)if(p.anchor||p.tag||d)(d==null?void 0:d.type)==="block-seq"?i(p.end,"BAD_INDENT","All sequence items must start at the same column"):i(l,"MISSING_CHAR","Sequence item without - indicator");else{c=p.end,p.comment&&(a.comment=p.comment);continue}const h=d?e(s,d,p,i):t(s,p.end,u,null,p,i);s.schema.compat&&Rn(r.indent,d,i),l=h.range[2],a.items.push(h)}return a.range=[r.offset,l,c??l],a}function Xr(e,t,s,r){let i="";if(e){let o=!1,n="";for(const a of e){const{source:l,type:c}=a;switch(c){case"space":o=!0;break;case"comment":{s&&!o&&r(a,"MISSING_CHAR","Comments must be separated from other tokens by white space characters");const u=l.substring(1)||" ";i?i+=n+u:i=u,n="";break}case"newline":i&&(n+=l),o=!0;break;default:r(a,"UNEXPECTED_TOKEN",`Unexpected ${c} at node end`)}t+=l.length}}return{comment:i,offset:t}}const sn="Block collections are not allowed within flow collections",rn=e=>e&&(e.type==="block-map"||e.type==="block-seq");function e$({composeNode:e,composeEmptyNode:t},s,r,i,o){var g;const n=r.start.source==="{",a=n?"flow map":"flow sequence",l=(o==null?void 0:o.nodeClass)??(n?et:fs),c=new l(s.schema);c.flow=!0;const u=s.atRoot;u&&(s.atRoot=!1),s.atKey&&(s.atKey=!1);let d=r.offset+r.start.source.length;for(let y=0;y<r.items.length;++y){const w=r.items[y],{start:k,key:S,sep:C,value:T}=w,I=Us(k,{flow:a,indicator:"explicit-key-ind",next:S??(C==null?void 0:C[0]),offset:d,onError:i,parentIndent:r.indent,startOnNewline:!1});if(!I.found){if(!I.anchor&&!I.tag&&!C&&!T){y===0&&I.comma?i(I.comma,"UNEXPECTED_TOKEN",`Unexpected , in ${a}`):y<r.items.length-1&&i(I.start,"UNEXPECTED_TOKEN",`Unexpected empty item in ${a}`),I.comment&&(c.comment?c.comment+=`
`+I.comment:c.comment=I.comment),d=I.end;continue}!n&&s.options.strict&&Lr(S)&&i(S,"MULTILINE_IMPLICIT_KEY","Implicit keys of flow sequence pairs need to be on a single line")}if(y===0)I.comma&&i(I.comma,"UNEXPECTED_TOKEN",`Unexpected , in ${a}`);else if(I.comma||i(I.start,"MISSING_CHAR",`Missing , between ${a} items`),I.comment){let R="";e:for(const q of k)switch(q.type){case"comma":case"space":break;case"comment":R=q.source.substring(1);break e;default:break e}if(R){let q=c.items[c.items.length-1];_e(q)&&(q=q.value??q.key),q.comment?q.comment+=`
`+R:q.comment=R,I.comment=I.comment.substring(R.length+1)}}if(!n&&!C&&!I.found){const R=T?e(s,T,I,i):t(s,I.end,C,null,I,i);c.items.push(R),d=R.range[2],rn(T)&&i(R.range,"BLOCK_IN_FLOW",sn)}else{s.atKey=!0;const R=I.end,q=S?e(s,S,I,i):t(s,R,k,null,I,i);rn(S)&&i(q.range,"BLOCK_IN_FLOW",sn),s.atKey=!1;const Q=Us(C??[],{flow:a,indicator:"map-value-ind",next:T,offset:q.range[2],onError:i,parentIndent:r.indent,startOnNewline:!1});if(Q.found){if(!n&&!I.found&&s.options.strict){if(C)for(const W of C){if(W===Q.found)break;if(W.type==="newline"){i(W,"MULTILINE_IMPLICIT_KEY","Implicit keys of flow sequence pairs need to be on a single line");break}}I.start<Q.found.offset-1024&&i(Q.found,"KEY_OVER_1024_CHARS","The : indicator must be at most 1024 chars after the start of an implicit flow sequence key")}}else T&&("source"in T&&((g=T.source)==null?void 0:g[0])===":"?i(T,"MISSING_CHAR",`Missing space after : in ${a}`):i(Q.start,"MISSING_CHAR",`Missing , or : between ${a} items`));const z=T?e(s,T,Q,i):Q.found?t(s,Q.end,C,null,Q,i):null;z?rn(T)&&i(z.range,"BLOCK_IN_FLOW",sn):Q.comment&&(q.comment?q.comment+=`
`+Q.comment:q.comment=Q.comment);const L=new Fe(q,z);if(s.options.keepSourceTokens&&(L.srcToken=w),n){const W=c;Gu(s,W.items,q)&&i(R,"DUPLICATE_KEY","Map keys must be unique"),W.items.push(L)}else{const W=new et(s.schema);W.flow=!0,W.items.push(L);const F=(z??q).range;W.range=[q.range[0],F[1],F[2]],c.items.push(W)}d=z?z.range[2]:Q.end}}const p=n?"}":"]",[h,...v]=r.end;let f=d;if((h==null?void 0:h.source)===p)f=h.offset+h.source.length;else{const y=a[0].toUpperCase()+a.substring(1),w=u?`${y} must end with a ${p}`:`${y} in block collection must be sufficiently indented and end with a ${p}`;i(d,u?"MISSING_CHAR":"BAD_INDENT",w),h&&h.source.length!==1&&v.unshift(h)}if(v.length>0){const y=Xr(v,f,s.options.strict,i);y.comment&&(c.comment?c.comment+=`
`+y.comment:c.comment=y.comment),c.range=[r.offset,f,y.offset]}else c.range=[r.offset,f,f];return c}function on(e,t,s,r,i,o){const n=s.type==="block-map"?Q_(e,t,s,r,o):s.type==="block-seq"?Z_(e,t,s,r,o):e$(e,t,s,r,o),a=n.constructor;return i==="!"||i===a.tagName?(n.tag=a.tagName,n):(i&&(n.tag=i),n)}function t$(e,t,s,r,i){var p;const o=r.tag,n=o?t.directives.tagName(o.source,h=>i(o,"TAG_RESOLVE_FAILED",h)):null;if(s.type==="block-seq"){const{anchor:h,newlineAfterProp:v}=r,f=h&&o?h.offset>o.offset?h:o:h??o;f&&(!v||v.offset<f.offset)&&i(f,"MISSING_CHAR","Missing newline after block sequence props")}const a=s.type==="block-map"?"map":s.type==="block-seq"?"seq":s.start.source==="{"?"map":"seq";if(!o||!n||n==="!"||n===et.tagName&&a==="map"||n===fs.tagName&&a==="seq")return on(e,t,s,i,n);let l=t.schema.tags.find(h=>h.tag===n&&h.collection===a);if(!l){const h=t.schema.knownTags[n];if((h==null?void 0:h.collection)===a)t.schema.tags.push(Object.assign({},h,{default:!1})),l=h;else return h?i(o,"BAD_COLLECTION_TYPE",`${h.tag} used for ${a} collection, but expects ${h.collection??"scalar"}`,!0):i(o,"TAG_RESOLVE_FAILED",`Unresolved tag: ${n}`,!0),on(e,t,s,i,n)}const c=on(e,t,s,i,n,l),u=((p=l.resolve)==null?void 0:p.call(l,c,h=>i(o,"TAG_RESOLVE_FAILED",h),t.options))??c,d=we(u)?u:new Y(u);return d.range=c.range,d.tag=n,l!=null&&l.format&&(d.format=l.format),d}function s$(e,t,s){const r=t.offset,i=r$(t,e.options.strict,s);if(!i)return{value:"",type:null,comment:"",range:[r,r,r]};const o=i.mode===">"?Y.BLOCK_FOLDED:Y.BLOCK_LITERAL,n=t.source?i$(t.source):[];let a=n.length;for(let f=n.length-1;f>=0;--f){const g=n[f][1];if(g===""||g==="\r")a=f;else break}if(a===0){const f=i.chomp==="+"&&n.length>0?`
`.repeat(Math.max(1,n.length-1)):"";let g=r+i.length;return t.source&&(g+=t.source.length),{value:f,type:o,comment:i.comment,range:[r,g,g]}}let l=t.indent+i.indent,c=t.offset+i.length,u=0;for(let f=0;f<a;++f){const[g,y]=n[f];if(y===""||y==="\r")i.indent===0&&g.length>l&&(l=g.length);else{g.length<l&&s(c+g.length,"MISSING_CHAR","Block scalars with more-indented leading empty lines must use an explicit indentation indicator"),i.indent===0&&(l=g.length),u=f,l===0&&!e.atRoot&&s(c,"BAD_INDENT","Block scalar values in collections must be indented");break}c+=g.length+y.length+1}for(let f=n.length-1;f>=a;--f)n[f][0].length>l&&(a=f+1);let d="",p="",h=!1;for(let f=0;f<u;++f)d+=n[f][0].slice(l)+`
`;for(let f=u;f<a;++f){let[g,y]=n[f];c+=g.length+y.length+1;const w=y[y.length-1]==="\r";if(w&&(y=y.slice(0,-1)),y&&g.length<l){const S=`Block scalar lines must not be less indented than their ${i.indent?"explicit indentation indicator":"first line"}`;s(c-y.length-(w?2:1),"BAD_INDENT",S),g=""}o===Y.BLOCK_LITERAL?(d+=p+g.slice(l)+y,p=`
`):g.length>l||y[0]==="	"?(p===" "?p=`
`:!h&&p===`
`&&(p=`

`),d+=p+g.slice(l)+y,p=`
`,h=!0):y===""?p===`
`?d+=`
`:p=`
`:(d+=p+y,p=" ",h=!1)}switch(i.chomp){case"-":break;case"+":for(let f=a;f<n.length;++f)d+=`
`+n[f][0].slice(l);d[d.length-1]!==`
`&&(d+=`
`);break;default:d+=`
`}const v=r+i.length+t.source.length;return{value:d,type:o,comment:i.comment,range:[r,v,v]}}function r$({offset:e,props:t},s,r){if(t[0].type!=="block-scalar-header")return r(t[0],"IMPOSSIBLE","Block scalar header not found"),null;const{source:i}=t[0],o=i[0];let n=0,a="",l=-1;for(let p=1;p<i.length;++p){const h=i[p];if(!a&&(h==="-"||h==="+"))a=h;else{const v=Number(h);!n&&v?n=v:l===-1&&(l=e+p)}}l!==-1&&r(l,"UNEXPECTED_TOKEN",`Block scalar header includes extra characters: ${i}`);let c=!1,u="",d=i.length;for(let p=1;p<t.length;++p){const h=t[p];switch(h.type){case"space":c=!0;case"newline":d+=h.source.length;break;case"comment":s&&!c&&r(h,"MISSING_CHAR","Comments must be separated from other tokens by white space characters"),d+=h.source.length,u=h.source.substring(1);break;case"error":r(h,"UNEXPECTED_TOKEN",h.message),d+=h.source.length;break;default:{const v=`Unexpected token in block scalar header: ${h.type}`;r(h,"UNEXPECTED_TOKEN",v);const f=h.source;f&&typeof f=="string"&&(d+=f.length)}}}return{mode:o,indent:n,chomp:a,comment:u,length:d}}function i$(e){const t=e.split(/\n( *)/),s=t[0],r=s.match(/^( *)/),o=[r!=null&&r[1]?[r[1],s.slice(r[1].length)]:["",s]];for(let n=1;n<t.length;n+=2)o.push([t[n],t[n+1]]);return o}function o$(e,t,s){const{offset:r,type:i,source:o,end:n}=e;let a,l;const c=(p,h,v)=>s(r+p,h,v);switch(i){case"scalar":a=Y.PLAIN,l=n$(o,c);break;case"single-quoted-scalar":a=Y.QUOTE_SINGLE,l=a$(o,c);break;case"double-quoted-scalar":a=Y.QUOTE_DOUBLE,l=l$(o,c);break;default:return s(e,"UNEXPECTED_TOKEN",`Expected a flow scalar value, but found: ${i}`),{value:"",type:null,comment:"",range:[r,r+o.length,r+o.length]}}const u=r+o.length,d=Xr(n,u,t,s);return{value:l,type:a,comment:d.comment,range:[r,u,d.offset]}}function n$(e,t){let s="";switch(e[0]){case"	":s="a tab character";break;case",":s="flow indicator character ,";break;case"%":s="directive indicator character %";break;case"|":case">":{s=`block scalar indicator ${e[0]}`;break}case"@":case"`":{s=`reserved character ${e[0]}`;break}}return s&&t(0,"BAD_SCALAR_START",`Plain value cannot start with ${s}`),Yu(e)}function a$(e,t){return(e[e.length-1]!=="'"||e.length===1)&&t(e.length,"MISSING_CHAR","Missing closing 'quote"),Yu(e.slice(1,-1)).replace(/''/g,"'")}function Yu(e){let t,s;try{t=new RegExp(`(.*?)(?<![ 	])[ 	]*\r?
`,"sy"),s=new RegExp(`[ 	]*(.*?)(?:(?<![ 	])[ 	]*)?\r?
`,"sy")}catch{t=/(.*?)[ \t]*\r?\n/sy,s=/[ \t]*(.*?)[ \t]*\r?\n/sy}let r=t.exec(e);if(!r)return e;let i=r[1],o=" ",n=t.lastIndex;for(s.lastIndex=n;r=s.exec(e);)r[1]===""?o===`
`?i+=o:o=`
`:(i+=o+r[1],o=" "),n=s.lastIndex;const a=/[ \t]*(.*)/sy;return a.lastIndex=n,r=a.exec(e),i+o+((r==null?void 0:r[1])??"")}function l$(e,t){let s="";for(let r=1;r<e.length-1;++r){const i=e[r];if(!(i==="\r"&&e[r+1]===`
`))if(i===`
`){const{fold:o,offset:n}=c$(e,r);s+=o,r=n}else if(i==="\\"){let o=e[++r];const n=d$[o];if(n)s+=n;else if(o===`
`)for(o=e[r+1];o===" "||o==="	";)o=e[++r+1];else if(o==="\r"&&e[r+1]===`
`)for(o=e[++r+1];o===" "||o==="	";)o=e[++r+1];else if(o==="x"||o==="u"||o==="U"){const a={x:2,u:4,U:8}[o];s+=u$(e,r+1,a,t),r+=a}else{const a=e.substr(r-1,2);t(r-1,"BAD_DQ_ESCAPE",`Invalid escape sequence ${a}`),s+=a}}else if(i===" "||i==="	"){const o=r;let n=e[r+1];for(;n===" "||n==="	";)n=e[++r+1];n!==`
`&&!(n==="\r"&&e[r+2]===`
`)&&(s+=r>o?e.slice(o,r+1):i)}else s+=i}return(e[e.length-1]!=='"'||e.length===1)&&t(e.length,"MISSING_CHAR",'Missing closing "quote'),s}function c$(e,t){let s="",r=e[t+1];for(;(r===" "||r==="	"||r===`
`||r==="\r")&&!(r==="\r"&&e[t+2]!==`
`);)r===`
`&&(s+=`
`),t+=1,r=e[t+1];return s||(s=" "),{fold:s,offset:t}}const d$={0:"\0",a:"\x07",b:"\b",e:"\x1B",f:"\f",n:`
`,r:"\r",t:"	",v:"\v",N:"",_:" ",L:"\u2028",P:"\u2029"," ":" ",'"':'"',"/":"/","\\":"\\","	":"	"};function u$(e,t,s,r){const i=e.substr(t,s),n=i.length===s&&/^[0-9a-fA-F]+$/.test(i)?parseInt(i,16):NaN;if(isNaN(n)){const a=e.substr(t-2,s+2);return r(t-2,"BAD_DQ_ESCAPE",`Invalid escape sequence ${a}`),a}return String.fromCodePoint(n)}function Ju(e,t,s,r){const{value:i,type:o,comment:n,range:a}=t.type==="block-scalar"?s$(e,t,r):o$(t,e.options.strict,r),l=s?e.directives.tagName(s.source,d=>r(s,"TAG_RESOLVE_FAILED",d)):null;let c;e.options.stringKeys&&e.atKey?c=e.schema[$t]:l?c=h$(e.schema,i,l,s,r):t.type==="scalar"?c=p$(e,i,t,r):c=e.schema[$t];let u;try{const d=c.resolve(i,p=>r(s??t,"TAG_RESOLVE_FAILED",p),e.options);u=he(d)?d:new Y(d)}catch(d){const p=d instanceof Error?d.message:String(d);r(s??t,"TAG_RESOLVE_FAILED",p),u=new Y(i)}return u.range=a,u.source=i,o&&(u.type=o),l&&(u.tag=l),c.format&&(u.format=c.format),n&&(u.comment=n),u}function h$(e,t,s,r,i){var a;if(s==="!")return e[$t];const o=[];for(const l of e.tags)if(!l.collection&&l.tag===s)if(l.default&&l.test)o.push(l);else return l;for(const l of o)if((a=l.test)!=null&&a.test(t))return l;const n=e.knownTags[s];return n&&!n.collection?(e.tags.push(Object.assign({},n,{default:!1,test:void 0})),n):(i(r,"TAG_RESOLVE_FAILED",`Unresolved tag: ${s}`,s!=="tag:yaml.org,2002:str"),e[$t])}function p$({atKey:e,directives:t,schema:s},r,i,o){const n=s.tags.find(a=>{var l;return(a.default===!0||e&&a.default==="key")&&((l=a.test)==null?void 0:l.test(r))})||s[$t];if(s.compat){const a=s.compat.find(l=>{var c;return l.default&&((c=l.test)==null?void 0:c.test(r))})??s[$t];if(n.tag!==a.tag){const l=t.tagString(n.tag),c=t.tagString(a.tag),u=`Value may be parsed as either ${l} or ${c}`;o(i,"TAG_RESOLVE_FAILED",u,!0)}}return n}function f$(e,t,s){if(t){s??(s=t.length);for(let r=s-1;r>=0;--r){let i=t[r];switch(i.type){case"space":case"comment":case"newline":e-=i.source.length;continue}for(i=t[++r];(i==null?void 0:i.type)==="space";)e+=i.source.length,i=t[++r];break}}return e}const m$={composeNode:Xu,composeEmptyNode:hl};function Xu(e,t,s,r){const i=e.atKey,{spaceBefore:o,comment:n,anchor:a,tag:l}=s;let c,u=!0;switch(t.type){case"alias":c=g$(e,t,r),(a||l)&&r(t,"ALIAS_PROPS","An alias node must not specify any properties");break;case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":case"block-scalar":c=Ju(e,t,l,r),a&&(c.anchor=a.source.substring(1));break;case"block-map":case"block-seq":case"flow-collection":c=t$(m$,e,t,s,r),a&&(c.anchor=a.source.substring(1));break;default:{const d=t.type==="error"?t.message:`Unsupported token (type: ${t.type})`;r(t,"UNEXPECTED_TOKEN",d),c=hl(e,t.offset,void 0,null,s,r),u=!1}}return a&&c.anchor===""&&r(a,"BAD_ALIAS","Anchor cannot be an empty string"),i&&e.options.stringKeys&&(!he(c)||typeof c.value!="string"||c.tag&&c.tag!=="tag:yaml.org,2002:str")&&r(l??t,"NON_STRING_KEY","With stringKeys, all keys must be strings"),o&&(c.spaceBefore=!0),n&&(t.type==="scalar"&&t.source===""?c.comment=n:c.commentBefore=n),e.options.keepSourceTokens&&u&&(c.srcToken=t),c}function hl(e,t,s,r,{spaceBefore:i,comment:o,anchor:n,tag:a,end:l},c){const u={type:"scalar",offset:f$(t,s,r),indent:-1,source:""},d=Ju(e,u,a,c);return n&&(d.anchor=n.source.substring(1),d.anchor===""&&c(n,"BAD_ALIAS","Anchor cannot be an empty string")),i&&(d.spaceBefore=!0),o&&(d.comment=o,d.range[2]=l),d}function g$({options:e},{offset:t,source:s,end:r},i){const o=new Za(s.substring(1));o.source===""&&i(t,"BAD_ALIAS","Alias cannot be an empty string"),o.source.endsWith(":")&&i(t+s.length-1,"BAD_ALIAS","Alias ending in : is ambiguous",!0);const n=t+s.length,a=Xr(r,n,e.strict,i);return o.range=[t,n,a.offset],a.comment&&(o.comment=a.comment),o}function y$(e,t,{offset:s,start:r,value:i,end:o},n){const a=Object.assign({_directives:t},e),l=new ul(void 0,a),c={atKey:!1,atRoot:!0,directives:l.directives,options:l.options,schema:l.schema},u=Us(r,{indicator:"doc-start",next:i??(o==null?void 0:o[0]),offset:s,onError:n,parentIndent:0,startOnNewline:!0});u.found&&(l.directives.docStart=!0,i&&(i.type==="block-map"||i.type==="block-seq")&&!u.hasNewline&&n(u.end,"MISSING_CHAR","Block collection cannot start on same line with directives-end marker")),l.contents=i?Xu(c,i,u,n):hl(c,u.end,r,null,u,n);const d=l.contents.range[2],p=Xr(o,d,!1,n);return p.comment&&(l.comment=p.comment),l.range=[s,d,p.offset],l}function mr(e){if(typeof e=="number")return[e,e+1];if(Array.isArray(e))return e.length===2?e:[e[0],e[1]];const{offset:t,source:s}=e;return[t,t+(typeof s=="string"?s.length:1)]}function Rc(e){var i;let t="",s=!1,r=!1;for(let o=0;o<e.length;++o){const n=e[o];switch(n[0]){case"#":t+=(t===""?"":r?`

`:`
`)+(n.substring(1)||" "),s=!0,r=!1;break;case"%":((i=e[o+1])==null?void 0:i[0])!=="#"&&(o+=1),s=!1;break;default:s||(r=!0),s=!1}}return{comment:t,afterEmptyLine:r}}class b${constructor(t={}){this.doc=null,this.atDirectives=!1,this.prelude=[],this.errors=[],this.warnings=[],this.onError=(s,r,i,o)=>{const n=mr(s);o?this.warnings.push(new X_(n,r,i)):this.errors.push(new wr(n,r,i))},this.directives=new Le({version:t.version||"1.2"}),this.options=t}decorate(t,s){const{comment:r,afterEmptyLine:i}=Rc(this.prelude);if(r){const o=t.contents;if(s)t.comment=t.comment?`${t.comment}
${r}`:r;else if(i||t.directives.docStart||!o)t.commentBefore=r;else if(ve(o)&&!o.flow&&o.items.length>0){let n=o.items[0];_e(n)&&(n=n.key);const a=n.commentBefore;n.commentBefore=a?`${r}
${a}`:r}else{const n=o.commentBefore;o.commentBefore=n?`${r}
${n}`:r}}s?(Array.prototype.push.apply(t.errors,this.errors),Array.prototype.push.apply(t.warnings,this.warnings)):(t.errors=this.errors,t.warnings=this.warnings),this.prelude=[],this.errors=[],this.warnings=[]}streamInfo(){return{comment:Rc(this.prelude).comment,directives:this.directives,errors:this.errors,warnings:this.warnings}}*compose(t,s=!1,r=-1){for(const i of t)yield*this.next(i);yield*this.end(s,r)}*next(t){switch(t.type){case"directive":this.directives.add(t.source,(s,r,i)=>{const o=mr(t);o[0]+=s,this.onError(o,"BAD_DIRECTIVE",r,i)}),this.prelude.push(t.source),this.atDirectives=!0;break;case"document":{const s=y$(this.options,this.directives,t,this.onError);this.atDirectives&&!s.directives.docStart&&this.onError(t,"MISSING_CHAR","Missing directives-end/doc-start indicator line"),this.decorate(s,!1),this.doc&&(yield this.doc),this.doc=s,this.atDirectives=!1;break}case"byte-order-mark":case"space":break;case"comment":case"newline":this.prelude.push(t.source);break;case"error":{const s=t.source?`${t.message}: ${JSON.stringify(t.source)}`:t.message,r=new wr(mr(t),"UNEXPECTED_TOKEN",s);this.atDirectives||!this.doc?this.errors.push(r):this.doc.errors.push(r);break}case"doc-end":{if(!this.doc){const r="Unexpected doc-end without preceding document";this.errors.push(new wr(mr(t),"UNEXPECTED_TOKEN",r));break}this.doc.directives.docEnd=!0;const s=Xr(t.end,t.offset+t.source.length,this.doc.options.strict,this.onError);if(this.decorate(this.doc,!0),s.comment){const r=this.doc.comment;this.doc.comment=r?`${r}
${s.comment}`:s.comment}this.doc.range[2]=s.offset;break}default:this.errors.push(new wr(mr(t),"UNEXPECTED_TOKEN",`Unsupported token ${t.type}`))}}*end(t=!1,s=-1){if(this.doc)this.decorate(this.doc,!0),yield this.doc,this.doc=null;else if(t){const r=Object.assign({_directives:this.directives},this.options),i=new ul(void 0,r);this.atDirectives&&this.onError(s,"MISSING_CHAR","Missing directives-end indicator line"),i.range=[0,s,s],this.decorate(i,!1),yield i}}}const Qu="\uFEFF",Zu="",eh="",Dn="";function v$(e){switch(e){case Qu:return"byte-order-mark";case Zu:return"doc-mode";case eh:return"flow-error-end";case Dn:return"scalar";case"---":return"doc-start";case"...":return"doc-end";case"":case`
`:case`\r
`:return"newline";case"-":return"seq-item-ind";case"?":return"explicit-key-ind";case":":return"map-value-ind";case"{":return"flow-map-start";case"}":return"flow-map-end";case"[":return"flow-seq-start";case"]":return"flow-seq-end";case",":return"comma"}switch(e[0]){case" ":case"	":return"space";case"#":return"comment";case"%":return"directive-line";case"*":return"alias";case"&":return"anchor";case"!":return"tag";case"'":return"single-quoted-scalar";case'"':return"double-quoted-scalar";case"|":case">":return"block-scalar-header"}return null}function lt(e){switch(e){case void 0:case" ":case`
`:case"\r":case"	":return!0;default:return!1}}const Dc=new Set("0123456789ABCDEFabcdef"),w$=new Set("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-#;/?:@&=+$_.!~*'()"),pi=new Set(",[]{}"),_$=new Set(` ,[]{}
\r	`),nn=e=>!e||_$.has(e);class $${constructor(){this.atEnd=!1,this.blockScalarIndent=-1,this.blockScalarKeep=!1,this.buffer="",this.flowKey=!1,this.flowLevel=0,this.indentNext=0,this.indentValue=0,this.lineEndPos=null,this.next=null,this.pos=0}*lex(t,s=!1){if(t){if(typeof t!="string")throw TypeError("source is not a string");this.buffer=this.buffer?this.buffer+t:t,this.lineEndPos=null}this.atEnd=!s;let r=this.next??"stream";for(;r&&(s||this.hasChars(1));)r=yield*this.parseNext(r)}atLineEnd(){let t=this.pos,s=this.buffer[t];for(;s===" "||s==="	";)s=this.buffer[++t];return!s||s==="#"||s===`
`?!0:s==="\r"?this.buffer[t+1]===`
`:!1}charAt(t){return this.buffer[this.pos+t]}continueScalar(t){let s=this.buffer[t];if(this.indentNext>0){let r=0;for(;s===" ";)s=this.buffer[++r+t];if(s==="\r"){const i=this.buffer[r+t+1];if(i===`
`||!i&&!this.atEnd)return t+r+1}return s===`
`||r>=this.indentNext||!s&&!this.atEnd?t+r:-1}if(s==="-"||s==="."){const r=this.buffer.substr(t,3);if((r==="---"||r==="...")&&lt(this.buffer[t+3]))return-1}return t}getLine(){let t=this.lineEndPos;return(typeof t!="number"||t!==-1&&t<this.pos)&&(t=this.buffer.indexOf(`
`,this.pos),this.lineEndPos=t),t===-1?this.atEnd?this.buffer.substring(this.pos):null:(this.buffer[t-1]==="\r"&&(t-=1),this.buffer.substring(this.pos,t))}hasChars(t){return this.pos+t<=this.buffer.length}setNext(t){return this.buffer=this.buffer.substring(this.pos),this.pos=0,this.lineEndPos=null,this.next=t,null}peek(t){return this.buffer.substr(this.pos,t)}*parseNext(t){switch(t){case"stream":return yield*this.parseStream();case"line-start":return yield*this.parseLineStart();case"block-start":return yield*this.parseBlockStart();case"doc":return yield*this.parseDocument();case"flow":return yield*this.parseFlowCollection();case"quoted-scalar":return yield*this.parseQuotedScalar();case"block-scalar":return yield*this.parseBlockScalar();case"plain-scalar":return yield*this.parsePlainScalar()}}*parseStream(){let t=this.getLine();if(t===null)return this.setNext("stream");if(t[0]===Qu&&(yield*this.pushCount(1),t=t.substring(1)),t[0]==="%"){let s=t.length,r=t.indexOf("#");for(;r!==-1;){const o=t[r-1];if(o===" "||o==="	"){s=r-1;break}else r=t.indexOf("#",r+1)}for(;;){const o=t[s-1];if(o===" "||o==="	")s-=1;else break}const i=(yield*this.pushCount(s))+(yield*this.pushSpaces(!0));return yield*this.pushCount(t.length-i),this.pushNewline(),"stream"}if(this.atLineEnd()){const s=yield*this.pushSpaces(!0);return yield*this.pushCount(t.length-s),yield*this.pushNewline(),"stream"}return yield Zu,yield*this.parseLineStart()}*parseLineStart(){const t=this.charAt(0);if(!t&&!this.atEnd)return this.setNext("line-start");if(t==="-"||t==="."){if(!this.atEnd&&!this.hasChars(4))return this.setNext("line-start");const s=this.peek(3);if((s==="---"||s==="...")&&lt(this.charAt(3)))return yield*this.pushCount(3),this.indentValue=0,this.indentNext=0,s==="---"?"doc":"stream"}return this.indentValue=yield*this.pushSpaces(!1),this.indentNext>this.indentValue&&!lt(this.charAt(1))&&(this.indentNext=this.indentValue),yield*this.parseBlockStart()}*parseBlockStart(){const[t,s]=this.peek(2);if(!s&&!this.atEnd)return this.setNext("block-start");if((t==="-"||t==="?"||t===":")&&lt(s)){const r=(yield*this.pushCount(1))+(yield*this.pushSpaces(!0));return this.indentNext=this.indentValue+1,this.indentValue+=r,yield*this.parseBlockStart()}return"doc"}*parseDocument(){yield*this.pushSpaces(!0);const t=this.getLine();if(t===null)return this.setNext("doc");let s=yield*this.pushIndicators();switch(t[s]){case"#":yield*this.pushCount(t.length-s);case void 0:return yield*this.pushNewline(),yield*this.parseLineStart();case"{":case"[":return yield*this.pushCount(1),this.flowKey=!1,this.flowLevel=1,"flow";case"}":case"]":return yield*this.pushCount(1),"doc";case"*":return yield*this.pushUntil(nn),"doc";case'"':case"'":return yield*this.parseQuotedScalar();case"|":case">":return s+=yield*this.parseBlockScalarHeader(),s+=yield*this.pushSpaces(!0),yield*this.pushCount(t.length-s),yield*this.pushNewline(),yield*this.parseBlockScalar();default:return yield*this.parsePlainScalar()}}*parseFlowCollection(){let t,s,r=-1;do t=yield*this.pushNewline(),t>0?(s=yield*this.pushSpaces(!1),this.indentValue=r=s):s=0,s+=yield*this.pushSpaces(!0);while(t+s>0);const i=this.getLine();if(i===null)return this.setNext("flow");if((r!==-1&&r<this.indentNext&&i[0]!=="#"||r===0&&(i.startsWith("---")||i.startsWith("..."))&&lt(i[3]))&&!(r===this.indentNext-1&&this.flowLevel===1&&(i[0]==="]"||i[0]==="}")))return this.flowLevel=0,yield eh,yield*this.parseLineStart();let o=0;for(;i[o]===",";)o+=yield*this.pushCount(1),o+=yield*this.pushSpaces(!0),this.flowKey=!1;switch(o+=yield*this.pushIndicators(),i[o]){case void 0:return"flow";case"#":return yield*this.pushCount(i.length-o),"flow";case"{":case"[":return yield*this.pushCount(1),this.flowKey=!1,this.flowLevel+=1,"flow";case"}":case"]":return yield*this.pushCount(1),this.flowKey=!0,this.flowLevel-=1,this.flowLevel?"flow":"doc";case"*":return yield*this.pushUntil(nn),"flow";case'"':case"'":return this.flowKey=!0,yield*this.parseQuotedScalar();case":":{const n=this.charAt(1);if(this.flowKey||lt(n)||n===",")return this.flowKey=!1,yield*this.pushCount(1),yield*this.pushSpaces(!0),"flow"}default:return this.flowKey=!1,yield*this.parsePlainScalar()}}*parseQuotedScalar(){const t=this.charAt(0);let s=this.buffer.indexOf(t,this.pos+1);if(t==="'")for(;s!==-1&&this.buffer[s+1]==="'";)s=this.buffer.indexOf("'",s+2);else for(;s!==-1;){let o=0;for(;this.buffer[s-1-o]==="\\";)o+=1;if(o%2===0)break;s=this.buffer.indexOf('"',s+1)}const r=this.buffer.substring(0,s);let i=r.indexOf(`
`,this.pos);if(i!==-1){for(;i!==-1;){const o=this.continueScalar(i+1);if(o===-1)break;i=r.indexOf(`
`,o)}i!==-1&&(s=i-(r[i-1]==="\r"?2:1))}if(s===-1){if(!this.atEnd)return this.setNext("quoted-scalar");s=this.buffer.length}return yield*this.pushToIndex(s+1,!1),this.flowLevel?"flow":"doc"}*parseBlockScalarHeader(){this.blockScalarIndent=-1,this.blockScalarKeep=!1;let t=this.pos;for(;;){const s=this.buffer[++t];if(s==="+")this.blockScalarKeep=!0;else if(s>"0"&&s<="9")this.blockScalarIndent=Number(s)-1;else if(s!=="-")break}return yield*this.pushUntil(s=>lt(s)||s==="#")}*parseBlockScalar(){let t=this.pos-1,s=0,r;e:for(let o=this.pos;r=this.buffer[o];++o)switch(r){case" ":s+=1;break;case`
`:t=o,s=0;break;case"\r":{const n=this.buffer[o+1];if(!n&&!this.atEnd)return this.setNext("block-scalar");if(n===`
`)break}default:break e}if(!r&&!this.atEnd)return this.setNext("block-scalar");if(s>=this.indentNext){this.blockScalarIndent===-1?this.indentNext=s:this.indentNext=this.blockScalarIndent+(this.indentNext===0?1:this.indentNext);do{const o=this.continueScalar(t+1);if(o===-1)break;t=this.buffer.indexOf(`
`,o)}while(t!==-1);if(t===-1){if(!this.atEnd)return this.setNext("block-scalar");t=this.buffer.length}}let i=t+1;for(r=this.buffer[i];r===" ";)r=this.buffer[++i];if(r==="	"){for(;r==="	"||r===" "||r==="\r"||r===`
`;)r=this.buffer[++i];t=i-1}else if(!this.blockScalarKeep)do{let o=t-1,n=this.buffer[o];n==="\r"&&(n=this.buffer[--o]);const a=o;for(;n===" ";)n=this.buffer[--o];if(n===`
`&&o>=this.pos&&o+1+s>a)t=o;else break}while(!0);return yield Dn,yield*this.pushToIndex(t+1,!0),yield*this.parseLineStart()}*parsePlainScalar(){const t=this.flowLevel>0;let s=this.pos-1,r=this.pos-1,i;for(;i=this.buffer[++r];)if(i===":"){const o=this.buffer[r+1];if(lt(o)||t&&pi.has(o))break;s=r}else if(lt(i)){let o=this.buffer[r+1];if(i==="\r"&&(o===`
`?(r+=1,i=`
`,o=this.buffer[r+1]):s=r),o==="#"||t&&pi.has(o))break;if(i===`
`){const n=this.continueScalar(r+1);if(n===-1)break;r=Math.max(r,n-2)}}else{if(t&&pi.has(i))break;s=r}return!i&&!this.atEnd?this.setNext("plain-scalar"):(yield Dn,yield*this.pushToIndex(s+1,!0),t?"flow":"doc")}*pushCount(t){return t>0?(yield this.buffer.substr(this.pos,t),this.pos+=t,t):0}*pushToIndex(t,s){const r=this.buffer.slice(this.pos,t);return r?(yield r,this.pos+=r.length,r.length):(s&&(yield""),0)}*pushIndicators(){switch(this.charAt(0)){case"!":return(yield*this.pushTag())+(yield*this.pushSpaces(!0))+(yield*this.pushIndicators());case"&":return(yield*this.pushUntil(nn))+(yield*this.pushSpaces(!0))+(yield*this.pushIndicators());case"-":case"?":case":":{const t=this.flowLevel>0,s=this.charAt(1);if(lt(s)||t&&pi.has(s))return t?this.flowKey&&(this.flowKey=!1):this.indentNext=this.indentValue+1,(yield*this.pushCount(1))+(yield*this.pushSpaces(!0))+(yield*this.pushIndicators())}}return 0}*pushTag(){if(this.charAt(1)==="<"){let t=this.pos+2,s=this.buffer[t];for(;!lt(s)&&s!==">";)s=this.buffer[++t];return yield*this.pushToIndex(s===">"?t+1:t,!1)}else{let t=this.pos+1,s=this.buffer[t];for(;s;)if(w$.has(s))s=this.buffer[++t];else if(s==="%"&&Dc.has(this.buffer[t+1])&&Dc.has(this.buffer[t+2]))s=this.buffer[t+=3];else break;return yield*this.pushToIndex(t,!1)}}*pushNewline(){const t=this.buffer[this.pos];return t===`
`?yield*this.pushCount(1):t==="\r"&&this.charAt(1)===`
`?yield*this.pushCount(2):0}*pushSpaces(t){let s=this.pos-1,r;do r=this.buffer[++s];while(r===" "||t&&r==="	");const i=s-this.pos;return i>0&&(yield this.buffer.substr(this.pos,i),this.pos=s),i}*pushUntil(t){let s=this.pos,r=this.buffer[s];for(;!t(r);)r=this.buffer[++s];return yield*this.pushToIndex(s,!1)}}class k${constructor(){this.lineStarts=[],this.addNewLine=t=>this.lineStarts.push(t),this.linePos=t=>{let s=0,r=this.lineStarts.length;for(;s<r;){const o=s+r>>1;this.lineStarts[o]<t?s=o+1:r=o}if(this.lineStarts[s]===t)return{line:s+1,col:1};if(s===0)return{line:0,col:t};const i=this.lineStarts[s-1];return{line:s,col:t-i+1}}}}function Ft(e,t){for(let s=0;s<e.length;++s)if(e[s].type===t)return!0;return!1}function zc(e){for(let t=0;t<e.length;++t)switch(e[t].type){case"space":case"comment":case"newline":break;default:return t}return-1}function th(e){switch(e==null?void 0:e.type){case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":case"flow-collection":return!0;default:return!1}}function fi(e){switch(e.type){case"document":return e.start;case"block-map":{const t=e.items[e.items.length-1];return t.sep??t.start}case"block-seq":return e.items[e.items.length-1].start;default:return[]}}function Es(e){var s;if(e.length===0)return[];let t=e.length;e:for(;--t>=0;)switch(e[t].type){case"doc-start":case"explicit-key-ind":case"map-value-ind":case"seq-item-ind":case"newline":break e}for(;((s=e[++t])==null?void 0:s.type)==="space";);return e.splice(t,e.length)}function Lc(e){if(e.start.type==="flow-seq-start")for(const t of e.items)t.sep&&!t.value&&!Ft(t.start,"explicit-key-ind")&&!Ft(t.sep,"map-value-ind")&&(t.key&&(t.value=t.key),delete t.key,th(t.value)?t.value.end?Array.prototype.push.apply(t.value.end,t.sep):t.value.end=t.sep:Array.prototype.push.apply(t.start,t.sep),delete t.sep)}class x${constructor(t){this.atNewLine=!0,this.atScalar=!1,this.indent=0,this.offset=0,this.onKeyLine=!1,this.stack=[],this.source="",this.type="",this.lexer=new $$,this.onNewLine=t}*parse(t,s=!1){this.onNewLine&&this.offset===0&&this.onNewLine(0);for(const r of this.lexer.lex(t,s))yield*this.next(r);s||(yield*this.end())}*next(t){if(this.source=t,this.atScalar){this.atScalar=!1,yield*this.step(),this.offset+=t.length;return}const s=v$(t);if(s)if(s==="scalar")this.atNewLine=!1,this.atScalar=!0,this.type="scalar";else{switch(this.type=s,yield*this.step(),s){case"newline":this.atNewLine=!0,this.indent=0,this.onNewLine&&this.onNewLine(this.offset+t.length);break;case"space":this.atNewLine&&t[0]===" "&&(this.indent+=t.length);break;case"explicit-key-ind":case"map-value-ind":case"seq-item-ind":this.atNewLine&&(this.indent+=t.length);break;case"doc-mode":case"flow-error-end":return;default:this.atNewLine=!1}this.offset+=t.length}else{const r=`Not a YAML token: ${t}`;yield*this.pop({type:"error",offset:this.offset,message:r,source:t}),this.offset+=t.length}}*end(){for(;this.stack.length>0;)yield*this.pop()}get sourceToken(){return{type:this.type,offset:this.offset,indent:this.indent,source:this.source}}*step(){const t=this.peek(1);if(this.type==="doc-end"&&(t==null?void 0:t.type)!=="doc-end"){for(;this.stack.length>0;)yield*this.pop();this.stack.push({type:"doc-end",offset:this.offset,source:this.source});return}if(!t)return yield*this.stream();switch(t.type){case"document":return yield*this.document(t);case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":return yield*this.scalar(t);case"block-scalar":return yield*this.blockScalar(t);case"block-map":return yield*this.blockMap(t);case"block-seq":return yield*this.blockSequence(t);case"flow-collection":return yield*this.flowCollection(t);case"doc-end":return yield*this.documentEnd(t)}yield*this.pop()}peek(t){return this.stack[this.stack.length-t]}*pop(t){const s=t??this.stack.pop();if(!s)yield{type:"error",offset:this.offset,source:"",message:"Tried to pop an empty stack"};else if(this.stack.length===0)yield s;else{const r=this.peek(1);switch(s.type==="block-scalar"?s.indent="indent"in r?r.indent:0:s.type==="flow-collection"&&r.type==="document"&&(s.indent=0),s.type==="flow-collection"&&Lc(s),r.type){case"document":r.value=s;break;case"block-scalar":r.props.push(s);break;case"block-map":{const i=r.items[r.items.length-1];if(i.value){r.items.push({start:[],key:s,sep:[]}),this.onKeyLine=!0;return}else if(i.sep)i.value=s;else{Object.assign(i,{key:s,sep:[]}),this.onKeyLine=!i.explicitKey;return}break}case"block-seq":{const i=r.items[r.items.length-1];i.value?r.items.push({start:[],value:s}):i.value=s;break}case"flow-collection":{const i=r.items[r.items.length-1];!i||i.value?r.items.push({start:[],key:s,sep:[]}):i.sep?i.value=s:Object.assign(i,{key:s,sep:[]});return}default:yield*this.pop(),yield*this.pop(s)}if((r.type==="document"||r.type==="block-map"||r.type==="block-seq")&&(s.type==="block-map"||s.type==="block-seq")){const i=s.items[s.items.length-1];i&&!i.sep&&!i.value&&i.start.length>0&&zc(i.start)===-1&&(s.indent===0||i.start.every(o=>o.type!=="comment"||o.indent<s.indent))&&(r.type==="document"?r.end=i.start:r.items.push({start:i.start}),s.items.splice(-1,1))}}}*stream(){switch(this.type){case"directive-line":yield{type:"directive",offset:this.offset,source:this.source};return;case"byte-order-mark":case"space":case"comment":case"newline":yield this.sourceToken;return;case"doc-mode":case"doc-start":{const t={type:"document",offset:this.offset,start:[]};this.type==="doc-start"&&t.start.push(this.sourceToken),this.stack.push(t);return}}yield{type:"error",offset:this.offset,message:`Unexpected ${this.type} token in YAML stream`,source:this.source}}*document(t){if(t.value)return yield*this.lineEnd(t);switch(this.type){case"doc-start":{zc(t.start)!==-1?(yield*this.pop(),yield*this.step()):t.start.push(this.sourceToken);return}case"anchor":case"tag":case"space":case"comment":case"newline":t.start.push(this.sourceToken);return}const s=this.startBlockValue(t);s?this.stack.push(s):yield{type:"error",offset:this.offset,message:`Unexpected ${this.type} token in YAML document`,source:this.source}}*scalar(t){if(this.type==="map-value-ind"){const s=fi(this.peek(2)),r=Es(s);let i;t.end?(i=t.end,i.push(this.sourceToken),delete t.end):i=[this.sourceToken];const o={type:"block-map",offset:t.offset,indent:t.indent,items:[{start:r,key:t,sep:i}]};this.onKeyLine=!0,this.stack[this.stack.length-1]=o}else yield*this.lineEnd(t)}*blockScalar(t){switch(this.type){case"space":case"comment":case"newline":t.props.push(this.sourceToken);return;case"scalar":if(t.source=this.source,this.atNewLine=!0,this.indent=0,this.onNewLine){let s=this.source.indexOf(`
`)+1;for(;s!==0;)this.onNewLine(this.offset+s),s=this.source.indexOf(`
`,s)+1}yield*this.pop();break;default:yield*this.pop(),yield*this.step()}}*blockMap(t){var r;const s=t.items[t.items.length-1];switch(this.type){case"newline":if(this.onKeyLine=!1,s.value){const i="end"in s.value?s.value.end:void 0,o=Array.isArray(i)?i[i.length-1]:void 0;(o==null?void 0:o.type)==="comment"?i==null||i.push(this.sourceToken):t.items.push({start:[this.sourceToken]})}else s.sep?s.sep.push(this.sourceToken):s.start.push(this.sourceToken);return;case"space":case"comment":if(s.value)t.items.push({start:[this.sourceToken]});else if(s.sep)s.sep.push(this.sourceToken);else{if(this.atIndentedComment(s.start,t.indent)){const i=t.items[t.items.length-2],o=(r=i==null?void 0:i.value)==null?void 0:r.end;if(Array.isArray(o)){Array.prototype.push.apply(o,s.start),o.push(this.sourceToken),t.items.pop();return}}s.start.push(this.sourceToken)}return}if(this.indent>=t.indent){const i=!this.onKeyLine&&this.indent===t.indent,o=i&&(s.sep||s.explicitKey)&&this.type!=="seq-item-ind";let n=[];if(o&&s.sep&&!s.value){const a=[];for(let l=0;l<s.sep.length;++l){const c=s.sep[l];switch(c.type){case"newline":a.push(l);break;case"space":break;case"comment":c.indent>t.indent&&(a.length=0);break;default:a.length=0}}a.length>=2&&(n=s.sep.splice(a[1]))}switch(this.type){case"anchor":case"tag":o||s.value?(n.push(this.sourceToken),t.items.push({start:n}),this.onKeyLine=!0):s.sep?s.sep.push(this.sourceToken):s.start.push(this.sourceToken);return;case"explicit-key-ind":!s.sep&&!s.explicitKey?(s.start.push(this.sourceToken),s.explicitKey=!0):o||s.value?(n.push(this.sourceToken),t.items.push({start:n,explicitKey:!0})):this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:[this.sourceToken],explicitKey:!0}]}),this.onKeyLine=!0;return;case"map-value-ind":if(s.explicitKey)if(s.sep)if(s.value)t.items.push({start:[],key:null,sep:[this.sourceToken]});else if(Ft(s.sep,"map-value-ind"))this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:n,key:null,sep:[this.sourceToken]}]});else if(th(s.key)&&!Ft(s.sep,"newline")){const a=Es(s.start),l=s.key,c=s.sep;c.push(this.sourceToken),delete s.key,delete s.sep,this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:a,key:l,sep:c}]})}else n.length>0?s.sep=s.sep.concat(n,this.sourceToken):s.sep.push(this.sourceToken);else if(Ft(s.start,"newline"))Object.assign(s,{key:null,sep:[this.sourceToken]});else{const a=Es(s.start);this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:a,key:null,sep:[this.sourceToken]}]})}else s.sep?s.value||o?t.items.push({start:n,key:null,sep:[this.sourceToken]}):Ft(s.sep,"map-value-ind")?this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:[],key:null,sep:[this.sourceToken]}]}):s.sep.push(this.sourceToken):Object.assign(s,{key:null,sep:[this.sourceToken]});this.onKeyLine=!0;return;case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":{const a=this.flowScalar(this.type);o||s.value?(t.items.push({start:n,key:a,sep:[]}),this.onKeyLine=!0):s.sep?this.stack.push(a):(Object.assign(s,{key:a,sep:[]}),this.onKeyLine=!0);return}default:{const a=this.startBlockValue(t);if(a){if(a.type==="block-seq"){if(!s.explicitKey&&s.sep&&!Ft(s.sep,"newline")){yield*this.pop({type:"error",offset:this.offset,message:"Unexpected block-seq-ind on same line with key",source:this.source});return}}else i&&t.items.push({start:n});this.stack.push(a);return}}}}yield*this.pop(),yield*this.step()}*blockSequence(t){var r;const s=t.items[t.items.length-1];switch(this.type){case"newline":if(s.value){const i="end"in s.value?s.value.end:void 0,o=Array.isArray(i)?i[i.length-1]:void 0;(o==null?void 0:o.type)==="comment"?i==null||i.push(this.sourceToken):t.items.push({start:[this.sourceToken]})}else s.start.push(this.sourceToken);return;case"space":case"comment":if(s.value)t.items.push({start:[this.sourceToken]});else{if(this.atIndentedComment(s.start,t.indent)){const i=t.items[t.items.length-2],o=(r=i==null?void 0:i.value)==null?void 0:r.end;if(Array.isArray(o)){Array.prototype.push.apply(o,s.start),o.push(this.sourceToken),t.items.pop();return}}s.start.push(this.sourceToken)}return;case"anchor":case"tag":if(s.value||this.indent<=t.indent)break;s.start.push(this.sourceToken);return;case"seq-item-ind":if(this.indent!==t.indent)break;s.value||Ft(s.start,"seq-item-ind")?t.items.push({start:[this.sourceToken]}):s.start.push(this.sourceToken);return}if(this.indent>t.indent){const i=this.startBlockValue(t);if(i){this.stack.push(i);return}}yield*this.pop(),yield*this.step()}*flowCollection(t){const s=t.items[t.items.length-1];if(this.type==="flow-error-end"){let r;do yield*this.pop(),r=this.peek(1);while((r==null?void 0:r.type)==="flow-collection")}else if(t.end.length===0){switch(this.type){case"comma":case"explicit-key-ind":!s||s.sep?t.items.push({start:[this.sourceToken]}):s.start.push(this.sourceToken);return;case"map-value-ind":!s||s.value?t.items.push({start:[],key:null,sep:[this.sourceToken]}):s.sep?s.sep.push(this.sourceToken):Object.assign(s,{key:null,sep:[this.sourceToken]});return;case"space":case"comment":case"newline":case"anchor":case"tag":!s||s.value?t.items.push({start:[this.sourceToken]}):s.sep?s.sep.push(this.sourceToken):s.start.push(this.sourceToken);return;case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":{const i=this.flowScalar(this.type);!s||s.value?t.items.push({start:[],key:i,sep:[]}):s.sep?this.stack.push(i):Object.assign(s,{key:i,sep:[]});return}case"flow-map-end":case"flow-seq-end":t.end.push(this.sourceToken);return}const r=this.startBlockValue(t);r?this.stack.push(r):(yield*this.pop(),yield*this.step())}else{const r=this.peek(2);if(r.type==="block-map"&&(this.type==="map-value-ind"&&r.indent===t.indent||this.type==="newline"&&!r.items[r.items.length-1].sep))yield*this.pop(),yield*this.step();else if(this.type==="map-value-ind"&&r.type!=="flow-collection"){const i=fi(r),o=Es(i);Lc(t);const n=t.end.splice(1,t.end.length);n.push(this.sourceToken);const a={type:"block-map",offset:t.offset,indent:t.indent,items:[{start:o,key:t,sep:n}]};this.onKeyLine=!0,this.stack[this.stack.length-1]=a}else yield*this.lineEnd(t)}}flowScalar(t){if(this.onNewLine){let s=this.source.indexOf(`
`)+1;for(;s!==0;)this.onNewLine(this.offset+s),s=this.source.indexOf(`
`,s)+1}return{type:t,offset:this.offset,indent:this.indent,source:this.source}}startBlockValue(t){switch(this.type){case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":return this.flowScalar(this.type);case"block-scalar-header":return{type:"block-scalar",offset:this.offset,indent:this.indent,props:[this.sourceToken],source:""};case"flow-map-start":case"flow-seq-start":return{type:"flow-collection",offset:this.offset,indent:this.indent,start:this.sourceToken,items:[],end:[]};case"seq-item-ind":return{type:"block-seq",offset:this.offset,indent:this.indent,items:[{start:[this.sourceToken]}]};case"explicit-key-ind":{this.onKeyLine=!0;const s=fi(t),r=Es(s);return r.push(this.sourceToken),{type:"block-map",offset:this.offset,indent:this.indent,items:[{start:r,explicitKey:!0}]}}case"map-value-ind":{this.onKeyLine=!0;const s=fi(t),r=Es(s);return{type:"block-map",offset:this.offset,indent:this.indent,items:[{start:r,key:null,sep:[this.sourceToken]}]}}}return null}atIndentedComment(t,s){return this.type!=="comment"||this.indent<=s?!1:t.every(r=>r.type==="newline"||r.type==="space")}*documentEnd(t){this.type!=="doc-mode"&&(t.end?t.end.push(this.sourceToken):t.end=[this.sourceToken],this.type==="newline"&&(yield*this.pop()))}*lineEnd(t){switch(this.type){case"comma":case"doc-start":case"doc-end":case"flow-seq-end":case"flow-map-end":case"map-value-ind":yield*this.pop(),yield*this.step();break;case"newline":this.onKeyLine=!1;case"space":case"comment":default:t.end?t.end.push(this.sourceToken):t.end=[this.sourceToken],this.type==="newline"&&(yield*this.pop())}}}function S$(e){const t=e.prettyErrors!==!1;return{lineCounter:e.lineCounter||t&&new k$||null,prettyErrors:t}}function E$(e,t={}){const{lineCounter:s,prettyErrors:r}=S$(t),i=new x$(s==null?void 0:s.addNewLine),o=new b$(t);let n=null;for(const a of o.compose(i.parse(e),!0,e.length))if(!n)n=a;else if(n.options.logLevel!=="silent"){n.errors.push(new wr(a.range.slice(0,2),"MULTIPLE_DOCS","Source contains multiple documents; please use YAML.parseAllDocuments()"));break}return r&&s&&(n.errors.forEach(Nc(e,s)),n.warnings.forEach(Nc(e,s))),n}let Is=null;function sh(e){if(Is=E$(e,{keepSourceTokens:!0}),Is.errors.length>0){const t=Is.errors.map(s=>s.message).join("; ");throw new Error(`YAML parse error: ${t}`)}return Is.toJS()}function C$(e){if(Is)return A$(Is,e);const t=new ul(e);return rh(t),t.toString({indent:2,lineWidth:0,singleQuote:!1})}function A$(e,t){const s=e.clone();return s.contents=s.createNode(t),zn(e.contents,s.contents),rh(s),s.toString()}function rh(e){const t=e.contents;if(!t||!("items"in t))return;const s=t.items;if(Array.isArray(s))for(let r=1;r<s.length;r++){const i=s[r];i&&i.key&&(i.key.spaceBefore=!0)}}function zn(e,t){var s;if(!(!e||!t)&&(e.commentBefore&&(t.commentBefore=e.commentBefore),e.comment&&(t.comment=e.comment),e.items&&t.items))for(const r of e.items){const i=((s=r.key)==null?void 0:s.value)??r.key,o=t.items.find(n=>{var a;return(((a=n.key)==null?void 0:a.value)??n.key)===i});o&&(zn(r,o),zn(r.value,o.value))}}const an={data:{},hierarchy:{order:[],merge:"first"},overrides:{},ccm:{resources:[]}};class P${constructor(){this.subscribers=new Set,this.state={manifest:structuredClone(an),errors:[],isDirty:!1}}subscribe(t){return this.subscribers.add(t),t(this.state),()=>this.subscribers.delete(t)}notify(){this.subscribers.forEach(t=>t(this.state))}getState(){return this.state}getManifest(){return this.state.manifest}getResources(){return this.state.manifest.ccm.resources}getResourceById(t){return this.state.manifest.ccm.resources.find(s=>s.id===t)}getResourceReferences(){return this.state.manifest.ccm.resources.map(t=>({type:t.type,name:t.name,alias:t.alias}))}update(t){t(this.state.manifest),this.state={...this.state,isDirty:!0},this.validate(),this.notify()}setData(t){this.update(s=>{s.data=t})}setDataValue(t,s){this.update(r=>{r.data[t]=s})}deleteDataKey(t){this.update(s=>{delete s.data[t]})}checkDataPathConflict(t){const s=t.split(".");let r=this.state.manifest.data;for(let i=0;i<s.length-1;i++){const o=s[i];if(typeof r!="object"||r===null||Array.isArray(r))return null;const n=r[o];if(n===void 0)return null;if(typeof n!="object"||n===null||Array.isArray(n)){const a=s.slice(0,i+1).join(".");return`Cannot set "${t}": "${a}" is not an object`}r=n}return typeof r=="object"&&r!==null&&!Array.isArray(r)&&s[s.length-1]in r?`A variable with key "${t}" already exists`:null}setDataPath(t,s){const r=t.split(".");if(r.length===1){this.setDataValue(t,s);return}this.update(i=>{let o=i.data;for(let n=0;n<r.length-1;n++){const a=r[n];a in o||(o[a]={});const l=o[a];if(typeof l!="object"||l===null||Array.isArray(l))throw new Error(`Cannot set "${t}": "${r.slice(0,n+1).join(".")}" is not an object`);o=l}o[r[r.length-1]]=s})}deleteDataPath(t){const s=t.split(".");if(s.length===1){this.deleteDataKey(t);return}this.update(r=>{const i=[];let o=r.data;for(let a=0;a<s.length-1;a++){const l=s[a];if(!(l in o))return;const c=o[l];if(typeof c!="object"||c===null||Array.isArray(c))return;i.push({obj:o,key:l}),o=c}const n=s[s.length-1];delete o[n];for(let a=i.length-1;a>=0;a--){const{obj:l,key:c}=i[a],u=l[c];if(Object.keys(u).length===0)delete l[c];else break}})}getFlattenedData(){const t=[],s=(r,i)=>{for(const[o,n]of Object.entries(r)){const a=i?`${i}.${o}`:o;n!==null&&typeof n=="object"&&!Array.isArray(n)?s(n,a):t.push({key:a,value:n})}};return s(this.state.manifest.data,""),t}setHierarchyOrder(t){this.update(s=>{s.hierarchy.order=t})}setHierarchyMerge(t){this.update(s=>{s.hierarchy.merge=t})}setOverride(t,s){this.update(r=>{r.overrides[t]=s})}deleteOverride(t){this.update(s=>{delete s.overrides[t]})}checkOverridePathConflict(t,s){const r=this.state.manifest.overrides[t];if(!r)return null;const i=s.split(".");let o=r;for(let n=0;n<i.length-1;n++){const a=i[n];if(typeof o!="object"||o===null||Array.isArray(o))return null;const l=o[a];if(l===void 0)return null;if(typeof l!="object"||l===null||Array.isArray(l)){const c=i.slice(0,n+1).join(".");return`Cannot set "${s}": "${c}" is not an object`}o=l}return typeof o=="object"&&o!==null&&!Array.isArray(o)&&i[i.length-1]in o?`A variable with key "${s}" already exists`:null}setOverridePath(t,s,r){const i=s.split(".");this.update(o=>{if(o.overrides[t]||(o.overrides[t]={}),i.length===1){o.overrides[t][s]=r;return}let n=o.overrides[t];for(let a=0;a<i.length-1;a++){const l=i[a];l in n||(n[l]={});const c=n[l];if(typeof c!="object"||c===null||Array.isArray(c))throw new Error(`Cannot set "${s}": "${i.slice(0,a+1).join(".")}" is not an object`);n=c}n[i[i.length-1]]=r})}deleteOverridePath(t,s){const r=s.split(".");this.update(i=>{const o=i.overrides[t];if(!o)return;if(r.length===1){delete o[s];return}const n=[];let a=o;for(let c=0;c<r.length-1;c++){const u=r[c];if(!(u in a))return;const d=a[u];if(typeof d!="object"||d===null||Array.isArray(d))return;n.push({obj:a,key:u}),a=d}const l=r[r.length-1];delete a[l];for(let c=n.length-1;c>=0;c--){const{obj:u,key:d}=n[c],p=u[d];if(Object.keys(p).length===0)delete u[d];else break}})}getFlattenedOverride(t){const s=this.state.manifest.overrides[t];if(!s)return[];const r=[],i=(o,n)=>{for(const[a,l]of Object.entries(o)){const c=n?`${n}.${a}`:a;l!==null&&typeof l=="object"&&!Array.isArray(l)?i(l,c):r.push({key:c,value:l})}};return i(s,""),r}setCcmPreMessage(t){this.update(s=>{s.ccm.pre_message=t})}setCcmPostMessage(t){this.update(s=>{s.ccm.post_message=t})}setCcmFailOnError(t){this.update(s=>{s.ccm.fail_on_error=t||void 0})}addResource(t){const s=crypto.randomUUID(),r={...t,id:s};return this.update(i=>{i.ccm.resources=[...i.ccm.resources,r]}),s}updateResource(t,s){this.update(r=>{r.ccm.resources=r.ccm.resources.map(i=>i.id===t?{...s,id:t}:i)})}deleteResource(t){this.update(s=>{s.ccm.resources=s.ccm.resources.filter(r=>r.id!==t)})}reorderResources(t,s){this.update(r=>{const i=[...r.ccm.resources],[o]=i.splice(t,1);i.splice(s,0,o),r.ccm.resources=i})}duplicateResource(t){const s=this.getResourceById(t);if(!s)return;const r=structuredClone(s);r.name=`${r.name}_copy`;const{id:i,...o}=r;return this.addResource(o)}validate(){this.state.errors=d_(this.state.manifest)}getErrors(){return this.state.errors}hasErrors(){return this.state.errors.some(t=>t.severity==="error")}toYaml(){return C$(this.toExportFormat())}fromYaml(t){try{const s=sh(t);return this.loadManifest(s)}catch(s){return{success:!1,errors:[s.message]}}}toExportFormat(){const t=this.state.manifest,s={};Object.keys(t.data).length>0&&(s.data=t.data),t.hierarchy.order.length>0&&(s.hierarchy={order:t.hierarchy.order,...t.hierarchy.merge!=="first"?{merge:t.hierarchy.merge}:{}}),Object.keys(t.overrides).length>0&&(s.overrides=t.overrides);const r={};return t.ccm.pre_message&&(r.pre_message=t.ccm.pre_message),t.ccm.post_message&&(r.post_message=t.ccm.post_message),t.ccm.fail_on_error&&(r.fail_on_error=t.ccm.fail_on_error),t.ccm.resources.length>0&&(r.resources=t.ccm.resources.map(i=>this.resourceToExportFormat(i))),Object.keys(r).length>0&&(s.ccm=r),s}resourceToExportFormat(t){var r,i;const s={...t.properties};return t.alias&&(s.alias=t.alias),(r=t.require)!=null&&r.length&&(s.require=t.require),t.control&&(s.control=t.control),(i=t.health_checks)!=null&&i.length&&(s.health_checks=t.health_checks),{[t.type]:[{[t.name]:Object.keys(s).length>0?s:{}}]}}loadManifest(t){try{const s=this.parseManifestFormat(t);return this.state={...this.state,manifest:s,isDirty:!0},this.validate(),this.notify(),{success:!0}}catch(s){return{success:!1,errors:[s.message]}}}parseManifestFormat(t){if(typeof t!="object"||t===null)throw new Error("Invalid manifest: expected object");const s=t,r=structuredClone(an);if(s.data&&typeof s.data=="object"&&(r.data=s.data),s.hierarchy&&typeof s.hierarchy=="object"){const i=s.hierarchy;Array.isArray(i.order)&&(r.hierarchy.order=i.order),(i.merge==="first"||i.merge==="deep")&&(r.hierarchy.merge=i.merge)}if(s.overrides&&typeof s.overrides=="object"&&(r.overrides=s.overrides),s.ccm&&typeof s.ccm=="object"){const i=s.ccm;typeof i.pre_message=="string"&&(r.ccm.pre_message=i.pre_message),typeof i.post_message=="string"&&(r.ccm.post_message=i.post_message),typeof i.fail_on_error=="boolean"&&(r.ccm.fail_on_error=i.fail_on_error),Array.isArray(i.resources)&&(r.ccm.resources=i.resources.map(o=>this.parseResource(o)))}return r}parseResource(t){if(typeof t!="object"||t===null)throw new Error("Invalid resource format");const s=t,r=Object.keys(s)[0],i=s[r];if(!Array.isArray(i)||i.length===0)throw new Error(`Invalid resource format for type: ${r}`);const o=i[0],n=Object.keys(o)[0],a=o[n]||{},{alias:l,require:c,control:u,health_checks:d,...p}=a;return{id:crypto.randomUUID(),type:r,name:n,properties:p,...l&&{alias:l},...c&&{require:c},...u&&{control:u},...d&&{health_checks:d}}}markSaved(){this.state={...this.state,isDirty:!1,lastSaved:new Date},this.notify()}restoreState(t){this.state={...this.state,manifest:structuredClone(t),isDirty:!1},this.validate(),this.notify()}reset(){this.state={manifest:structuredClone(an),errors:[],isDirty:!1},this.notify()}}const H=new P$,gr="ccm-studio-manifest",jc=1,jr={save(e){try{const t={version:jc,manifest:e,savedAt:new Date().toISOString()};localStorage.setItem(gr,JSON.stringify(t))}catch(t){console.error("Failed to save to localStorage:",t)}},load(){try{const e=localStorage.getItem(gr);if(!e)return null;const t=JSON.parse(e);return t.version!==jc?this.migrate(t):t.manifest}catch(e){return console.error("Failed to load from localStorage:",e),null}},hasSavedData(){return localStorage.getItem(gr)!==null},getLastSaved(){try{const e=localStorage.getItem(gr);if(!e)return null;const t=JSON.parse(e);return new Date(t.savedAt)}catch{return null}},clear(){localStorage.removeItem(gr)},migrate(e){return console.warn("Migrating localStorage data from version",e.version),e.manifest}},O$=1e3;let ln=null;function ih(){H.subscribe(e=>{e.isDirty&&(ln&&clearTimeout(ln),ln=setTimeout(()=>{jr.save(e.manifest),console.debug("Auto-saved to localStorage")},O$))})}function T$(){const e=jr.load();return e?(H.restoreState(e),!0):!1}function N$(e={}){const t=H.toYaml(),s=e.filename||"manifest.yaml";let r=t;e.includeComments&&(r=`# CCM Manifest
# Generated by CCM Studio
# ${new Date().toISOString()}

${t}`),I$(r,s,"text/yaml")}function I$(e,t,s){const r=new Blob([e],{type:s}),i=URL.createObjectURL(r),o=document.createElement("a");o.href=i,o.download=t,document.body.appendChild(o),o.click(),document.body.removeChild(o),URL.revokeObjectURL(i)}function R$(e,t){const s=[];let r;try{t!=null&&t.endsWith(".json")||e.trim().startsWith("{")?r=JSON.parse(e):r=sh(e)}catch(a){return{success:!1,errors:[`Parse error: ${a.message}`]}}if(typeof r!="object"||r===null)return{success:!1,errors:["Invalid manifest: expected an object"]};const i=r,o=["data","hierarchy","overrides","ccm"];Object.keys(i).forEach(a=>{o.includes(a)||s.push(`Unknown top-level key '${a}' will be ignored`)});const n=H.loadManifest(r);return n.success?{success:!0,warnings:s.length>0?s:void 0}:{success:!1,errors:n.errors}}var D$=Object.defineProperty,z$=Object.getOwnPropertyDescriptor,_o=(e,t,s,r)=>{for(var i=r>1?void 0:r?z$(t,s):t,o=e.length-1,n;o>=0;o--)(n=e[o])&&(i=(r?n(t,s,i):n(i))||i);return r&&i&&D$(t,s,i),i};let Hs=class extends Me{constructor(){super(...arguments),this.isDirty=!1,this.hasErrors=!1,this.logoUrl="/logo-circle.svg"}render(){return A`
      <div class="header">
        <div class="branding">
          <div class="logo">
            <img src=${this.logoUrl} alt="CCM Studio Logo">
          </div>
          <span class="title">CCM Studio</span>
          ${this.isDirty?A`<div class="dirty-indicator" title="Unsaved changes"></div>`:""}
        </div>

        <div class="actions">
          ${this.hasErrors?A`<span class="error-badge">
                <sl-icon name="exclamation-triangle"></sl-icon>
                Validation errors
              </span>`:""}

          <sl-button size="small" @click=${this.handleNew}>
            <sl-icon slot="prefix" name="file-earmark-plus"></sl-icon>
            New
          </sl-button>

          <sl-dropdown>
            <sl-button size="small" slot="trigger" caret>
              <sl-icon slot="prefix" name="folder2-open"></sl-icon>
              Import
            </sl-button>
            <sl-menu>
              <sl-menu-item @click=${this.handleImportFile}>
                <sl-icon slot="prefix" name="file-earmark-arrow-up"></sl-icon>
                From file...
              </sl-menu-item>
              <sl-menu-item @click=${this.handleImportClipboard}>
                <sl-icon slot="prefix" name="clipboard"></sl-icon>
                From clipboard
              </sl-menu-item>
            </sl-menu>
          </sl-dropdown>

          <sl-button size="small" variant="primary" @click=${this.handleExport}>
            <sl-icon slot="prefix" name="download"></sl-icon>
            Export
          </sl-button>

          <sl-dropdown>
            <sl-button size="small" slot="trigger">
              <sl-icon name="three-dots-vertical"></sl-icon>
            </sl-button>
            <sl-menu>
              <sl-menu-item @click=${()=>window.open("https://choria-cm.dev","_blank")}>
                <sl-icon slot="prefix" name="house"></sl-icon>
                Choria CM Home
              </sl-menu-item>
              <sl-menu-item @click=${()=>window.open("https://choria-cm.dev/yamlmanifests/","_blank")}>
                <sl-icon slot="prefix" name="book"></sl-icon>
                Manifest Documentation
              </sl-menu-item>
            </sl-menu>
          </sl-dropdown>
        </div>
      </div>
    `}handleNew(){this.dispatchEvent(new CustomEvent("new-manifest"))}handleExport(){this.dispatchEvent(new CustomEvent("export-yaml"))}async handleImportFile(){const e=document.createElement("input");e.type="file",e.accept=".yaml,.yml",e.onchange=async()=>{var s;const t=(s=e.files)==null?void 0:s[0];if(t){const r=await t.text();this.dispatchEvent(new CustomEvent("import-yaml",{detail:r}))}},e.click()}async handleImportClipboard(){try{const e=await navigator.clipboard.readText();this.dispatchEvent(new CustomEvent("import-yaml",{detail:e}))}catch(e){console.error("Failed to read clipboard:",e)}}};Hs.styles=ee`
    :host {
      display: block;
      background: var(--sl-color-neutral-0);
      border-bottom: 1px solid var(--sl-color-neutral-200);
    }

    .header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 12px 20px;
      max-height: 60px;
    }

    .branding {
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .logo {
      width: 32px;
      height: 32px;
      border-radius: 6px;
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .logo img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }

    .logo-placeholder {
      width: 100%;
      height: 100%;
      background: linear-gradient(135deg, var(--ccm-orange), var(--ccm-blue));
    }

    .title {
      font-size: 18px;
      font-weight: 600;
      color: var(--sl-color-neutral-900);
    }

    .dirty-indicator {
      width: 8px;
      height: 8px;
      background: var(--ccm-orange);
      border-radius: 50%;
      margin-left: 8px;
    }

    .actions {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .error-badge {
      color: var(--sl-color-danger-600);
      font-size: 13px;
      margin-right: 8px;
      display: flex;
      align-items: center;
      gap: 4px;
    }

    @media (max-width: 600px) {
      .header {
        padding: 8px 12px;
      }

      .title {
        font-size: 16px;
      }

      sl-button::part(label) {
        display: none;
      }
    }
  `;_o([_({type:Boolean})],Hs.prototype,"isDirty",2);_o([_({type:Boolean})],Hs.prototype,"hasErrors",2);_o([_({type:String})],Hs.prototype,"logoUrl",2);Hs=_o([kt("ccm-header")],Hs);var L$=Object.defineProperty,j$=Object.getOwnPropertyDescriptor,or=(e,t,s,r)=>{for(var i=r>1?void 0:r?j$(t,s):t,o=e.length-1,n;o>=0;o--)(n=e[o])&&(i=(r?n(t,s,i):n(i))||i);return r&&i&&L$(t,s,i),i};let Yt=class extends Me{constructor(){super(...arguments),this.collapsed=!1,this.mobile=!1,this.yaml="",this.showCopyToast=!1}connectedCallback(){super.connectedCallback(),this.unsubscribe=H.subscribe(e=>{this.storeState=e,this.yaml=H.toYaml()})}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this.unsubscribe)==null||e.call(this)}render(){var t;if(this.collapsed){const s=this.mobile?"chevron-up":"chevron-left",r=this.mobile?"top":"left";return A`
        <div class="collapsed-content">
          <sl-tooltip content="Expand panel" placement=${r}>
            <sl-icon-button
              name=${s}
              label="Expand YAML panel"
              @click=${this.handleToggle}
            ></sl-icon-button>
          </sl-tooltip>
          <span class="collapsed-label">YAML</span>
        </div>
      `}const e=((t=this.storeState)==null?void 0:t.errors.filter(s=>s.severity==="error"))??[];return A`
      <div class="panel-header">
        <div class="panel-title">
          <sl-icon name="file-earmark-code"></sl-icon>
          <span>manifest.yaml</span>
        </div>

        <div class="panel-actions">
          <sl-tooltip content="Copy to clipboard">
            <sl-icon-button
              name="clipboard"
              label="Copy YAML to clipboard"
              @click=${this.handleCopy}
            ></sl-icon-button>
          </sl-tooltip>

          <sl-tooltip content="Paste from clipboard">
            <sl-icon-button
              name="clipboard-plus"
              label="Paste YAML from clipboard"
              @click=${this.handlePaste}
            ></sl-icon-button>
          </sl-tooltip>

          <sl-tooltip content="Collapse panel">
            <sl-icon-button
              name=${this.mobile?"chevron-down":"chevron-right"}
              label="Collapse YAML panel"
              @click=${this.handleToggle}
            ></sl-icon-button>
          </sl-tooltip>
        </div>
      </div>

      ${e.length>0?A`
        <div class="error-banner">
          <strong>Validation Errors</strong>
          <ul>
            ${e.map(s=>A`<li>${s.path}: ${s.message}</li>`)}
          </ul>
        </div>
      `:""}

      <div class="yaml-content">
        ${this.hasContent()?A`<pre>${this.highlightYaml(this.yaml)}</pre>`:A`
            <div class="empty-state">
              <sl-icon name="file-earmark"></sl-icon>
              <p>Empty manifest</p>
              <p>Add resources, data, or hierarchy to get started</p>
            </div>
          `}
      </div>

      <div class="copy-toast ${this.showCopyToast?"show":""}">
        Copied to clipboard
      </div>
    `}hasContent(){const e=this.yaml.trim();return e!==""&&e!=="{}"}highlightYaml(e){const s=e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/^(\s*)(#.*)$/gm,'$1<span class="yaml-comment">$2</span>').replace(/^(\s*)([\w_-]+):/gm,'$1<span class="yaml-key">$2</span>:').replace(/: (true|false)$/gm,': <span class="yaml-boolean">$1</span>').replace(/: (\d+(?:\.\d+)?)$/gm,': <span class="yaml-number">$1</span>').replace(/: null$/gm,': <span class="yaml-null">null</span>').replace(/: "([^"]*)"$/gm,': <span class="yaml-string">"$1"</span>').replace(/: '([^']*)'$/gm,`: <span class="yaml-string">'$1'</span>`);return ud(s)}async handleCopy(){try{await navigator.clipboard.writeText(this.yaml),this.showCopyToast=!0,setTimeout(()=>{this.showCopyToast=!1},2e3)}catch(e){console.error("Failed to copy:",e),this.showImportError(["Failed to copy to clipboard"])}}async handlePaste(){try{const e=await navigator.clipboard.readText(),t=H.fromYaml(e);t.success||this.showImportError(t.errors??["Unknown parse error"])}catch(e){console.error("Failed to paste:",e),this.showImportError([e.message])}}showImportError(e){const t=Object.assign(document.createElement("sl-alert"),{variant:"danger",closable:!0,duration:5e3});t.innerHTML=`
      <sl-icon slot="icon" name="exclamation-octagon"></sl-icon>
      <strong>Import Failed</strong><br>
      ${e.map(s=>this.escapeHtml(s)).join("<br>")}
    `,document.body.appendChild(t),t.toast()}escapeHtml(e){const t=document.createElement("div");return t.textContent=e,t.innerHTML}handleToggle(){this.dispatchEvent(new CustomEvent("toggle-collapse"))}};Yt.styles=ee`
    :host {
      display: flex;
      flex-direction: column;
      height: 100%;
      background: #1e293b;
      position: relative;
    }

    .panel-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 12px 16px;
      background: #334155;
      border-bottom: 1px solid #475569;
    }

    .panel-title {
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 13px;
      font-weight: 500;
      color: #94a3b8;
    }

    .panel-actions {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .panel-actions sl-icon-button::part(base) {
      color: #94a3b8;
    }

    .panel-actions sl-icon-button::part(base):hover {
      color: #e2e8f0;
    }

    .yaml-content {
      flex: 1;
      overflow: auto;
      padding: 16px;
    }

    .yaml-content pre {
      margin: 0;
      font-family: var(--sl-font-mono);
      font-size: 13px;
      line-height: 1.6;
      color: #e2e8f0;
      white-space: pre-wrap;
      word-break: break-word;
    }

    /* Syntax highlighting */
    .yaml-key { color: #7dd3fc; }
    .yaml-string { color: #86efac; }
    .yaml-number { color: #fbbf24; }
    .yaml-boolean { color: #f472b6; }
    .yaml-null { color: #94a3b8; }
    .yaml-comment { color: #64748b; font-style: italic; }

    /* Desktop collapsed state - narrow vertical bar on right */
    :host([collapsed]:not([mobile])) {
      width: 48px !important;
      min-width: 48px !important;
      max-width: 48px !important;
    }

    :host([collapsed]:not([mobile])) .panel-header {
      flex-direction: column;
      padding: 12px 8px;
    }

    :host([collapsed]) .panel-title span,
    :host([collapsed]) .panel-actions,
    :host([collapsed]) .yaml-content,
    :host([collapsed]) .error-banner {
      display: none;
    }

    /* Error banner */
    .error-banner {
      background: #7f1d1d;
      color: #fecaca;
      padding: 12px 16px;
      font-size: 13px;
      border-bottom: 1px solid #991b1b;
    }

    .error-banner strong {
      display: block;
      margin-bottom: 8px;
    }

    .error-banner ul {
      margin: 0;
      padding-left: 20px;
    }

    .error-banner li {
      margin: 4px 0;
    }

    /* Empty state */
    .empty-state {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100%;
      color: #64748b;
      text-align: center;
      padding: 24px;
    }

    .empty-state sl-icon {
      font-size: 48px;
      margin-bottom: 16px;
      opacity: 0.5;
    }

    .empty-state p {
      margin: 4px 0;
    }

    /* Copy success toast */
    .copy-toast {
      position: absolute;
      bottom: 16px;
      right: 16px;
      background: #059669;
      color: white;
      padding: 8px 16px;
      border-radius: 6px;
      font-size: 13px;
      opacity: 0;
      transform: translateY(8px);
      transition: all 0.2s ease;
      pointer-events: none;
    }

    .copy-toast.show {
      opacity: 1;
      transform: translateY(0);
    }

    /* Collapsed expand button */
    .collapsed-content {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 12px 8px;
      background: #334155;
    }

    .collapsed-content sl-icon-button::part(base) {
      color: #94a3b8;
    }

    .collapsed-content sl-icon-button::part(base):hover {
      color: #e2e8f0;
    }

    .collapsed-label {
      writing-mode: vertical-rl;
      text-orientation: mixed;
      font-size: 12px;
      color: #64748b;
      margin-top: 12px;
    }

    /* Mobile collapsed state - horizontal bar at bottom */
    :host([mobile][collapsed]) {
      width: 100% !important;
      min-width: 100% !important;
      max-width: 100% !important;
      height: 48px !important;
      min-height: 48px !important;
      max-height: 48px !important;
    }

    :host([mobile][collapsed]) .collapsed-content {
      flex-direction: row;
      justify-content: center;
      align-items: center;
      gap: 8px;
      width: 100%;
      height: 100%;
    }

    :host([mobile][collapsed]) .collapsed-label {
      writing-mode: horizontal-tb;
      text-orientation: mixed;
      margin-top: 0;
      margin-left: 8px;
    }
  `;or([_({type:Boolean,reflect:!0})],Yt.prototype,"collapsed",2);or([_({type:Boolean,reflect:!0})],Yt.prototype,"mobile",2);or([B()],Yt.prototype,"storeState",2);or([B()],Yt.prototype,"yaml",2);or([B()],Yt.prototype,"showCopyToast",2);Yt=or([kt("ccm-yaml-panel")],Yt);var M$=Object.defineProperty,F$=Object.getOwnPropertyDescriptor,Qr=(e,t,s,r)=>{for(var i=r>1?void 0:r?F$(t,s):t,o=e.length-1,n;o>=0;o--)(n=e[o])&&(i=(r?n(t,s,i):n(i))||i);return r&&i&&M$(t,s,i),i};let ms=class extends Me{constructor(){super(...arguments),this.newKey="",this.newType="string",this.keyError=""}connectedCallback(){super.connectedCallback(),this.unsubscribe=H.subscribe(e=>{this.storeState=e,this.requestUpdate()})}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this.unsubscribe)==null||e.call(this)}render(){var s;const e=((s=this.storeState)==null?void 0:s.manifest.data)??{},t=this.dataToEntries(e);return A`
      <div class="content-wrapper">
      <div class="section-header">
        <span class="section-title">Data Variables</span>
      </div>

      <p class="section-description">
        Define variables that can be referenced in resources using
        <code>{{ lookup('data.key') }}</code> or <code>{{ Data.key }}</code>.
        Use dot notation for nested structures, e.g. <code>server.host</code> creates
        <code>server: { host: ... }</code> in YAML.
      </p>

      ${t.length>0?A`
        <table class="data-table">
          <thead>
            <tr>
              <th>Key</th>
              <th>Type</th>
              <th>Value</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            ${t.map(r=>this.renderDataRow(r))}
          </tbody>
        </table>
      `:A`
        <div class="empty-state">
          <sl-icon name="database"></sl-icon>
          <p>No data variables defined</p>
          <p>Add variables below to use in your resources</p>
        </div>
      `}

      <div class="add-row">
        <sl-input
          label="Key"
          placeholder="variable_name"
          size="small"
          .value=${this.newKey}
          @sl-input=${this.handleKeyInput}
          @keydown=${this.handleAddKeydown}
        >
        </sl-input>

        <sl-select
          label="Type"
          size="small"
          .value=${this.newType}
          @sl-change=${r=>this.newType=r.target.value}
        >
          <sl-option value="string">String</sl-option>
          <sl-option value="number">Number</sl-option>
          <sl-option value="boolean">Boolean</sl-option>
          <sl-option value="array">Array</sl-option>
        </sl-select>

        <sl-button
          variant="primary"
          size="small"
          @click=${this.handleAdd}
          ?disabled=${!this.newKey.trim()||!!this.keyError}
        >
          <sl-icon slot="prefix" name="plus"></sl-icon>
          Add Variable
        </sl-button>
      </div>
      ${this.keyError?A`<div class="key-error">${this.keyError}</div>`:""}
      </div>
    `}renderDataRow(e){return A`
      <tr>
        <td class="key-cell">
          <code>${e.key}</code>
        </td>
        <td class="type-cell">
          <sl-badge variant="neutral">${e.type}</sl-badge>
        </td>
        <td class="value-cell">
          ${this.renderValueEditor(e)}
        </td>
        <td class="actions-cell">
          <sl-icon-button
            name="trash"
            label="Delete variable"
            @click=${()=>this.handleDelete(e.key)}
          ></sl-icon-button>
        </td>
      </tr>
    `}renderValueEditor(e){switch(e.type){case"boolean":return A`
          <sl-switch
            ?checked=${e.value===!0}
            @sl-change=${s=>this.handleValueChange(e.key,s.target.checked)}
          >
            ${e.value?"true":"false"}
          </sl-switch>
        `;case"number":return A`
          <sl-input
            type="number"
            size="small"
            .value=${String(e.value??"")}
            @sl-change=${s=>this.handleValueChange(e.key,parseFloat(s.target.value))}
          ></sl-input>
        `;case"array":const t=Array.isArray(e.value)?e.value:[];return A`
          <div class="array-editor">
            ${t.map((s,r)=>A`
              <div class="array-item">
                <sl-input
                  size="small"
                  .value=${String(s)}
                  @sl-change=${i=>this.handleArrayItemChange(e.key,r,i.target.value)}
                ></sl-input>
                <sl-icon-button
                  name="x"
                  label="Remove item"
                  @click=${()=>this.handleArrayItemRemove(e.key,r)}
                ></sl-icon-button>
              </div>
            `)}
            <sl-button
              size="small"
              class="add-array-item"
              @click=${()=>this.handleArrayItemAdd(e.key)}
            >
              <sl-icon slot="prefix" name="plus"></sl-icon>
              Add item
            </sl-button>
          </div>
        `;case"string":default:return A`
          <sl-input
            size="small"
            .value=${String(e.value??"")}
            @sl-change=${s=>this.handleValueChange(e.key,s.target.value)}
          ></sl-input>
        `}}dataToEntries(e){return H.getFlattenedData().map(({key:t,value:s})=>({key:t,value:s,type:this.inferType(s)}))}inferType(e){return Array.isArray(e)?"array":typeof e=="boolean"?"boolean":typeof e=="number"?"number":"string"}getDefaultValue(e){switch(e){case"boolean":return!1;case"number":return 0;case"array":return[];default:return""}}handleKeyInput(e){const t=e.target.value;if(this.newKey=t,!t){this.keyError="";return}const r=t.split(".").find(o=>!/^[a-zA-Z_][a-zA-Z0-9_]*$/.test(o));if(r!==void 0){r===""?this.keyError="Invalid key: empty segment (consecutive dots or leading/trailing dot)":this.keyError=`Invalid segment "${r}": must be a valid identifier`;return}const i=H.checkDataPathConflict(t);if(i){this.keyError=i;return}this.keyError=""}handleAdd(){const e=this.newKey.trim();!e||this.keyError||(H.setDataPath(e,this.getDefaultValue(this.newType)),this.newKey="",this.keyError="")}handleAddKeydown(e){e.key==="Enter"&&!this.keyError&&this.handleAdd()}handleValueChange(e,t){H.setDataPath(e,t)}handleDelete(e){H.deleteDataPath(e)}getValueAtPath(e){const t=e.split(".");let s=this.storeState.manifest.data;for(const r of t){if(s==null||typeof s!="object")return;s=s[r]}return s}handleArrayItemChange(e,t,s){const r=this.getValueAtPath(e);if(!Array.isArray(r))return;const i=[...r];i[t]=s,H.setDataPath(e,i)}handleArrayItemAdd(e){const t=this.getValueAtPath(e);Array.isArray(t)&&H.setDataPath(e,[...t,""])}handleArrayItemRemove(e,t){const s=this.getValueAtPath(e);if(!Array.isArray(s))return;const r=s.filter((i,o)=>o!==t);H.setDataPath(e,r)}};ms.styles=ee`
    :host {
      display: block;
    }

    .content-wrapper {
      padding: 20px;
      padding-bottom: 100px;
    }

    .section-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 16px;
    }

    .section-title {
      font-size: 14px;
      font-weight: 600;
      color: var(--sl-color-neutral-700);
    }

    .section-description {
      font-size: 13px;
      color: var(--sl-color-neutral-500);
      margin-bottom: 20px;
    }

    .section-description code {
      background: var(--sl-color-neutral-100);
      padding: 2px 6px;
      border-radius: 4px;
      font-size: 12px;
    }

    .data-table {
      width: 100%;
      border-collapse: collapse;
    }

    .data-table th {
      text-align: left;
      padding: 10px 12px;
      font-size: 12px;
      font-weight: 600;
      color: var(--sl-color-neutral-500);
      text-transform: uppercase;
      letter-spacing: 0.5px;
      border-bottom: 1px solid var(--sl-color-neutral-200);
    }

    .data-table td {
      padding: 8px 12px;
      border-bottom: 1px solid var(--sl-color-neutral-100);
      vertical-align: top;
    }

    .data-table tr:hover {
      background: var(--sl-color-neutral-50);
    }

    .key-cell {
      width: 30%;
      font-family: var(--sl-font-mono);
      font-size: 13px;
    }

    .type-cell {
      width: 15%;
    }

    .value-cell {
      width: 45%;
    }

    .actions-cell {
      width: 10%;
      text-align: right;
    }

    .array-editor {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .array-item {
      display: flex;
      gap: 8px;
      align-items: center;
    }

    .array-item sl-input {
      flex: 1;
    }

    .add-array-item {
      align-self: flex-start;
    }

    .empty-state {
      text-align: center;
      padding: 48px 24px;
      color: var(--sl-color-neutral-400);
    }

    .empty-state sl-icon {
      font-size: 48px;
      margin-bottom: 16px;
    }

    .add-row {
      display: flex;
      gap: 12px;
      align-items: flex-end;
      margin-top: 16px;
      padding: 16px;
      background: var(--sl-color-neutral-50);
      border-radius: 8px;
    }

    .add-row sl-input,
    .add-row sl-select {
      flex: 1;
    }

    .key-error {
      color: var(--sl-color-danger-600);
      font-size: 12px;
      margin-top: 4px;
    }
  `;Qr([B()],ms.prototype,"storeState",2);Qr([B()],ms.prototype,"newKey",2);Qr([B()],ms.prototype,"newType",2);Qr([B()],ms.prototype,"keyError",2);ms=Qr([kt("ccm-data-editor")],ms);var V$=Object.defineProperty,B$=Object.getOwnPropertyDescriptor,ws=(e,t,s,r)=>{for(var i=r>1?void 0:r?B$(t,s):t,o=e.length-1,n;o>=0;o--)(n=e[o])&&(i=(r?n(t,s,i):n(i))||i);return r&&i&&V$(t,s,i),i};let Rt=class extends Me{constructor(){super(...arguments),this.openSections=new Set,this.newOverrideKey="",this.newEntryKeys={},this.newEntryTypes={},this.entryKeyErrors={}}connectedCallback(){super.connectedCallback(),this.unsubscribe=H.subscribe(e=>{this.storeState=e})}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this.unsubscribe)==null||e.call(this)}render(){var i,o;const e=((i=this.storeState)==null?void 0:i.manifest.overrides)??{},t=Object.keys(e),s=((o=this.storeState)==null?void 0:o.manifest.hierarchy.order)??[],r=this.generateSuggestions(s,t);return A`
      <div class="section-header">
        <span class="section-title">Data Overrides</span>
      </div>
      <p class="section-description">
        Define data values for specific hierarchy matches. Keys should match
        hierarchy patterns (e.g., <code>os:debian</code> for <code>os:{{ ... }}</code>).
        Use dot notation for nested keys (e.g., <code>server.port</code>).
      </p>

      ${r.length>0?A`
        <div class="suggestions">
          <div class="suggestions-label">Suggested overrides based on hierarchy:</div>
          <div class="suggestion-chips">
            ${r.map(n=>A`
              <sl-tag
                size="small"
                style="cursor: pointer"
                @click=${()=>this.addOverride(n)}
              >
                + ${n}
              </sl-tag>
            `)}
          </div>
        </div>
      `:""}

      ${t.length>0?A`
        <div class="override-cards">
          ${t.map(n=>this.renderOverrideCard(n))}
        </div>
      `:A`
        <div class="empty-state">
          <p>No overrides defined</p>
          <p>Add overrides to vary data by hierarchy dimension</p>
        </div>
      `}

      <div class="add-override">
        <sl-input
          placeholder="os:debian or role:web"
          size="small"
          .value=${this.newOverrideKey}
          @sl-input=${n=>this.newOverrideKey=n.target.value}
          @keydown=${this.handleAddKeydown}
        ></sl-input>
        <sl-button
          size="small"
          variant="primary"
          @click=${this.handleAddOverride}
          ?disabled=${!this.newOverrideKey.trim()}
        >
          <sl-icon slot="prefix" name="plus"></sl-icon>
          Add Override
        </sl-button>
      </div>
    `}renderOverrideCard(e){const t=this.openSections.has(e),s=this.getOverrideEntries(e),r=s.length,i=this.entryKeyErrors[e]||"",o=this.newEntryKeys[e]||"",n=this.newEntryTypes[e]||"string";return A`
      <div class="override-card ${t?"open":""}">
        <div
          class="override-header"
          @click=${()=>this.toggleSection(e)}
        >
          <div class="override-key">
            <sl-icon name="chevron-right"></sl-icon>
            ${e}
            <sl-badge variant="neutral" class="override-badge">
              ${r} ${r===1?"value":"values"}
            </sl-badge>
          </div>
          <div class="override-actions" @click=${a=>a.stopPropagation()}>
            <sl-icon-button
              name="trash"
              @click=${()=>this.deleteOverride(e)}
            ></sl-icon-button>
          </div>
        </div>

        <div class="override-content">
          ${s.length>0?A`
            <table class="data-table">
              <thead>
                <tr>
                  <th>Key</th>
                  <th>Type</th>
                  <th>Value</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                ${s.map(a=>this.renderEntryRow(e,a))}
              </tbody>
            </table>
          `:A`
            <p style="color: var(--sl-color-neutral-400); font-size: 13px;">
              No values defined in this override
            </p>
          `}

          <div class="add-entry-row">
            <sl-input
              placeholder="key or nested.key"
              size="small"
              .value=${o}
              @sl-input=${a=>this.handleEntryKeyInput(e,a.target.value)}
              @keydown=${a=>this.handleEntryAddKeydown(a,e)}
            ></sl-input>
            <sl-select
              size="small"
              .value=${n}
              @sl-change=${a=>{this.newEntryTypes={...this.newEntryTypes,[e]:a.target.value}}}
              style="width: 120px;"
            >
              <sl-option value="string">String</sl-option>
              <sl-option value="number">Number</sl-option>
              <sl-option value="boolean">Boolean</sl-option>
              <sl-option value="array">Array</sl-option>
            </sl-select>
            <sl-button
              size="small"
              @click=${()=>this.addEntryToOverride(e)}
              ?disabled=${!o.trim()||!!i}
            >
              <sl-icon slot="prefix" name="plus"></sl-icon>
              Add
            </sl-button>
          </div>
          ${i?A`<div class="key-error">${i}</div>`:""}
        </div>
      </div>
    `}renderEntryRow(e,t){return A`
      <tr>
        <td class="key-cell"><code>${t.key}</code></td>
        <td class="type-cell">
          <sl-badge variant="neutral">${t.type}</sl-badge>
        </td>
        <td class="value-cell">
          ${this.renderValueEditor(e,t)}
        </td>
        <td class="actions-cell">
          <sl-icon-button
            name="trash"
            @click=${()=>this.deleteEntry(e,t.key)}
          ></sl-icon-button>
        </td>
      </tr>
    `}renderValueEditor(e,t){return t.type==="array"&&Array.isArray(t.value)?A`
        <div class="array-editor">
          ${t.value.map((s,r)=>A`
            <div class="array-item">
              <sl-input
                size="small"
                .value=${String(s)}
                @sl-change=${i=>this.updateArrayItem(e,t.key,r,i.target.value)}
              ></sl-input>
              <sl-icon-button
                name="x"
                @click=${()=>this.removeArrayItem(e,t.key,r)}
              ></sl-icon-button>
            </div>
          `)}
          <sl-button size="small" @click=${()=>this.addArrayItem(e,t.key)}>
            + Add
          </sl-button>
        </div>
      `:t.type==="boolean"?A`
        <sl-switch
          ?checked=${t.value===!0}
          @sl-change=${s=>this.updateEntry(e,t.key,s.target.checked)}
        >
          ${t.value?"true":"false"}
        </sl-switch>
      `:t.type==="number"?A`
        <sl-input
          type="number"
          size="small"
          .value=${String(t.value)}
          @sl-change=${s=>this.updateEntry(e,t.key,parseFloat(s.target.value))}
        ></sl-input>
      `:A`
      <sl-input
        size="small"
        .value=${String(t.value??"")}
        @sl-change=${s=>this.updateEntry(e,t.key,s.target.value)}
      ></sl-input>
    `}getOverrideEntries(e){return H.getFlattenedOverride(e).map(({key:t,value:s})=>({key:t,value:s,type:this.inferType(s)}))}inferType(e){return Array.isArray(e)?"array":typeof e=="boolean"?"boolean":typeof e=="number"?"number":"string"}getDefaultValue(e){switch(e){case"boolean":return!1;case"number":return 0;case"array":return[];default:return""}}generateSuggestions(e,t){const s=[];return e.forEach(r=>{const i=r.match(/^(\w+):/);if(i){const o=i[1];({os:["debian","rhel","ubuntu","centos"],env:["production","staging","development"],role:["web","db","app","cache"]}[o]||["default"]).forEach(l=>{const c=`${o}:${l}`;t.includes(c)||s.push(c)})}}),s.slice(0,6)}toggleSection(e){this.openSections.has(e)?this.openSections.delete(e):this.openSections.add(e),this.requestUpdate()}addOverride(e){H.setOverride(e,{}),this.openSections.add(e),this.requestUpdate()}handleAddOverride(){const e=this.newOverrideKey.trim();e&&(this.addOverride(e),this.newOverrideKey="")}handleAddKeydown(e){e.key==="Enter"&&this.handleAddOverride()}deleteOverride(e){H.deleteOverride(e),this.openSections.delete(e),delete this.newEntryKeys[e],delete this.newEntryTypes[e],delete this.entryKeyErrors[e],this.requestUpdate()}handleEntryKeyInput(e,t){if(this.newEntryKeys={...this.newEntryKeys,[e]:t},!t){this.entryKeyErrors={...this.entryKeyErrors,[e]:""};return}const r=t.split(".").find(o=>!/^[a-zA-Z_][a-zA-Z0-9_]*$/.test(o));if(r!==void 0){r===""?this.entryKeyErrors={...this.entryKeyErrors,[e]:"Invalid key: empty segment (consecutive dots or leading/trailing dot)"}:this.entryKeyErrors={...this.entryKeyErrors,[e]:`Invalid segment "${r}": must be a valid identifier`};return}const i=H.checkOverridePathConflict(e,t);if(i){this.entryKeyErrors={...this.entryKeyErrors,[e]:i};return}this.entryKeyErrors={...this.entryKeyErrors,[e]:""}}handleEntryAddKeydown(e,t){e.key==="Enter"&&!this.entryKeyErrors[t]&&this.addEntryToOverride(t)}addEntryToOverride(e){var r;const t=(r=this.newEntryKeys[e])==null?void 0:r.trim();if(!t||this.entryKeyErrors[e])return;const s=this.newEntryTypes[e]||"string";H.setOverridePath(e,t,this.getDefaultValue(s)),this.newEntryKeys={...this.newEntryKeys,[e]:""},this.entryKeyErrors={...this.entryKeyErrors,[e]:""}}updateEntry(e,t,s){H.setOverridePath(e,t,s)}deleteEntry(e,t){H.deleteOverridePath(e,t)}getValueAtPath(e,t){const s=this.storeState.manifest.overrides[e];if(!s)return;const r=t.split(".");let i=s;for(const o of r){if(i==null||typeof i!="object")return;i=i[o]}return i}updateArrayItem(e,t,s,r){const i=this.getValueAtPath(e,t);if(!Array.isArray(i))return;const o=[...i];o[s]=r,H.setOverridePath(e,t,o)}addArrayItem(e,t){const s=this.getValueAtPath(e,t);Array.isArray(s)&&H.setOverridePath(e,t,[...s,""])}removeArrayItem(e,t,s){const r=this.getValueAtPath(e,t);if(!Array.isArray(r))return;const i=r.filter((o,n)=>n!==s);H.setOverridePath(e,t,i)}};Rt.styles=ee`
    :host {
      display: block;
    }

    .section-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 12px;
    }

    .section-title {
      font-size: 14px;
      font-weight: 600;
      color: var(--sl-color-neutral-700);
    }

    .section-description {
      font-size: 13px;
      color: var(--sl-color-neutral-500);
      margin-bottom: 16px;
      line-height: 1.5;
    }

    .section-description code {
      background: var(--sl-color-neutral-100);
      padding: 2px 6px;
      border-radius: 4px;
      font-size: 12px;
    }

    /* Override cards */
    .override-cards {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    .override-card {
      border: 1px solid var(--sl-color-neutral-200);
      border-radius: 8px;
      overflow: hidden;
    }

    .override-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 12px 16px;
      background: var(--sl-color-neutral-50);
      cursor: pointer;
      user-select: none;
    }

    .override-header:hover {
      background: var(--sl-color-neutral-100);
    }

    .override-key {
      display: flex;
      align-items: center;
      gap: 8px;
      font-family: var(--sl-font-mono);
      font-size: 14px;
      font-weight: 500;
    }

    .override-key sl-icon {
      transition: transform 0.2s ease;
    }

    .override-card.open .override-key sl-icon {
      transform: rotate(90deg);
    }

    .override-badge {
      font-size: 12px;
    }

    .override-actions {
      display: flex;
      gap: 4px;
    }

    .override-content {
      display: none;
      padding: 16px;
      border-top: 1px solid var(--sl-color-neutral-200);
    }

    .override-card.open .override-content {
      display: block;
    }

    /* Data table within override */
    .data-table {
      width: 100%;
      border-collapse: collapse;
      font-size: 13px;
    }

    .data-table th {
      text-align: left;
      padding: 8px;
      font-size: 11px;
      font-weight: 600;
      color: var(--sl-color-neutral-500);
      text-transform: uppercase;
      border-bottom: 1px solid var(--sl-color-neutral-200);
    }

    .data-table td {
      padding: 8px;
      border-bottom: 1px solid var(--sl-color-neutral-100);
    }

    .key-cell {
      width: 30%;
      font-family: var(--sl-font-mono);
    }

    .type-cell {
      width: 15%;
    }

    .value-cell {
      width: 45%;
    }

    .actions-cell {
      width: 10%;
      text-align: right;
    }

    /* Add entry row */
    .add-entry-row {
      display: flex;
      gap: 8px;
      padding: 12px;
      background: var(--sl-color-neutral-50);
      border-radius: 4px;
      margin-top: 12px;
      align-items: flex-end;
    }

    .add-entry-row sl-input {
      flex: 1;
    }

    .key-error {
      color: var(--sl-color-danger-600);
      font-size: 12px;
      margin-top: 4px;
      padding: 0 12px;
    }

    /* Add override section */
    .add-override {
      display: flex;
      gap: 8px;
      margin-top: 16px;
    }

    .add-override sl-input {
      flex: 1;
    }

    /* Empty state */
    .empty-state {
      text-align: center;
      padding: 32px;
      background: var(--sl-color-neutral-50);
      border-radius: 8px;
      color: var(--sl-color-neutral-500);
    }

    /* Array editor */
    .array-editor {
      display: flex;
      flex-direction: column;
      gap: 4px;
    }

    .array-item {
      display: flex;
      gap: 4px;
    }

    .array-item sl-input {
      flex: 1;
    }

    /* Suggestions */
    .suggestions {
      margin-bottom: 12px;
    }

    .suggestions-label {
      font-size: 12px;
      color: var(--sl-color-neutral-500);
      margin-bottom: 8px;
    }

    .suggestion-chips {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
    }
  `;ws([B()],Rt.prototype,"storeState",2);ws([B()],Rt.prototype,"openSections",2);ws([B()],Rt.prototype,"newOverrideKey",2);ws([B()],Rt.prototype,"newEntryKeys",2);ws([B()],Rt.prototype,"newEntryTypes",2);ws([B()],Rt.prototype,"entryKeyErrors",2);Rt=ws([kt("ccm-overrides-editor")],Rt);var q$=Object.defineProperty,U$=Object.getOwnPropertyDescriptor,$o=(e,t,s,r)=>{for(var i=r>1?void 0:r?U$(t,s):t,o=e.length-1,n;o>=0;o--)(n=e[o])&&(i=(r?n(t,s,i):n(i))||i);return r&&i&&q$(t,s,i),i};let Ks=class extends Me{constructor(){super(...arguments),this.newOrderEntry="",this.draggedIndex=null}connectedCallback(){super.connectedCallback(),this.unsubscribe=H.subscribe(e=>{this.storeState=e})}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this.unsubscribe)==null||e.call(this)}render(){var r;const e=(r=this.storeState)==null?void 0:r.manifest.hierarchy,t=(e==null?void 0:e.order)??[],s=(e==null?void 0:e.merge)??"first";return A`
      <div class="content-wrapper">
      <!-- Merge Strategy - Compact inline -->
      <div class="merge-row">
        <span class="section-title">Merge Strategy</span>
        <sl-select
          size="small"
          value=${s}
          @sl-change=${i=>this.setMerge(i.target.value)}
        >
          <sl-option value="first">First Match</sl-option>
          <sl-option value="deep">Deep Merge</sl-option>
        </sl-select>
        <span class="merge-hint">
          ${s==="first"?"Stop at first matching override":"Combine all matching overrides"}
        </span>
      </div>

      <!-- Hierarchy Order Section -->
      <div class="section">
        <div class="section-header">
          <span class="section-title">Lookup Order</span>
        </div>
        <p class="section-description">
          Define dimensions for data lookup. Use template expressions like
          <code>\{{ lookup('facts.host.info.platformFamily') }}</code>.
          Order matters: first entries have highest priority.
        </p>

        <!-- Common Presets -->
        <div class="presets">
          <div class="presets-label">Quick add:</div>
          <div class="preset-chips">
            <sl-tag
              class="preset-chip"
              size="small"
              @click=${()=>this.addPreset("os:{{ lookup('facts.host.info.platformFamily') }}")}
            >
              + OS Family
            </sl-tag>
            <sl-tag
              class="preset-chip"
              size="small"
              @click=${()=>this.addPreset("host:{{ lookup('facts.host.info.hostname') }}")}
            >
              + Hostname
            </sl-tag>
            <sl-tag
              class="preset-chip"
              size="small"
              @click=${()=>this.addPreset("env:{{ lookup('facts.env') }}")}
            >
              + Environment
            </sl-tag>
            <sl-tag
              class="preset-chip"
              size="small"
              @click=${()=>this.addPreset("role:{{ lookup('facts.role') }}")}
            >
              + Role
            </sl-tag>
          </div>
        </div>

        ${t.length>0?A`
          <div class="order-list">
            ${t.map((i,o)=>this.renderOrderItem(i,o))}
          </div>
        `:A`
          <div class="empty-state">
            <sl-icon name="layers"></sl-icon>
            <p>No hierarchy defined</p>
            <p>Add lookup dimensions or use quick add buttons above</p>
          </div>
        `}

        <div class="add-order">
          <sl-input
            placeholder="dimension:{{ lookup('facts.key') }}"
            size="small"
            .value=${this.newOrderEntry}
            @sl-input=${i=>this.newOrderEntry=i.target.value}
            @keydown=${this.handleAddKeydown}
          ></sl-input>
          <sl-button
            size="small"
            variant="primary"
            @click=${this.handleAddOrder}
            ?disabled=${!this.newOrderEntry.trim()}
          >
            <sl-icon slot="prefix" name="plus"></sl-icon>
            Add
          </sl-button>
        </div>
      </div>

      <div class="divider"></div>

      <!-- Overrides Section (separate component) -->
      <ccm-overrides-editor></ccm-overrides-editor>
      </div>
    `}renderOrderItem(e,t){return A`
      <div
        class="order-item"
        @click=${()=>this.editOrder(t,e)}
        @dragover=${s=>this.handleDragOver(s)}
        @drop=${s=>this.handleDrop(s,t)}
      >
        <div
          class="drag-handle"
          draggable="true"
          @click=${s=>s.stopPropagation()}
          @dragstart=${s=>this.handleDragStart(s,t)}
          @dragend=${this.handleDragEnd}
        >
          <sl-icon name="grip-vertical"></sl-icon>
        </div>
        <div class="order-number">${t+1}</div>
        <div class="order-value">${e}</div>
        <div class="order-actions" @click=${s=>s.stopPropagation()}>
          <sl-icon-button
            name="trash"
            @click=${()=>this.removeOrder(t)}
          ></sl-icon-button>
        </div>
      </div>
    `}setMerge(e){H.setHierarchyMerge(e)}handleAddOrder(){const e=this.newOrderEntry.trim();if(!e)return;const t=[...this.storeState.manifest.hierarchy.order??[],e];H.setHierarchyOrder(t),this.newOrderEntry=""}handleAddKeydown(e){e.key==="Enter"&&this.handleAddOrder()}addPreset(e){const t=this.storeState.manifest.hierarchy.order??[];t.includes(e)||H.setHierarchyOrder([...t,e])}removeOrder(e){const t=[...this.storeState.manifest.hierarchy.order];t.splice(e,1),H.setHierarchyOrder(t)}async editOrder(e,t){const s=prompt("Edit hierarchy entry:",t);if(s!==null&&s.trim()){const r=[...this.storeState.manifest.hierarchy.order];r[e]=s.trim(),H.setHierarchyOrder(r)}}handleDragStart(e,t){this.draggedIndex=t;const s=e.target,r=s.closest(".order-item");s.classList.add("dragging"),r==null||r.classList.add("dragging"),e.dataTransfer.effectAllowed="move"}handleDragEnd(e){var r;const t=e.target,s=t.closest(".order-item");t.classList.remove("dragging"),s==null||s.classList.remove("dragging"),this.draggedIndex=null,(r=this.shadowRoot)==null||r.querySelectorAll(".order-item").forEach(i=>{i.classList.remove("drag-over")})}handleDragOver(e){var s;e.preventDefault(),e.dataTransfer.dropEffect="move";const t=e.target.closest(".order-item");t&&((s=this.shadowRoot)==null||s.querySelectorAll(".order-item").forEach(r=>{r.classList.remove("drag-over")}),t.classList.add("drag-over"))}handleDrop(e,t){if(e.preventDefault(),this.draggedIndex===null||this.draggedIndex===t)return;const s=[...this.storeState.manifest.hierarchy.order],[r]=s.splice(this.draggedIndex,1);s.splice(t,0,r),H.setHierarchyOrder(s)}};Ks.styles=ee`
    :host {
      display: block;
    }

    .content-wrapper {
      padding: 20px;
      padding-bottom: 100px;
    }

    .section {
      margin-bottom: 32px;
    }

    .section-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 12px;
    }

    .section-title {
      font-size: 14px;
      font-weight: 600;
      color: var(--sl-color-neutral-700);
    }

    .section-description {
      font-size: 13px;
      color: var(--sl-color-neutral-500);
      margin-bottom: 16px;
      line-height: 1.5;
    }

    .section-description code {
      background: var(--sl-color-neutral-100);
      padding: 2px 6px;
      border-radius: 4px;
      font-size: 12px;
    }

    /* Merge strategy - compact inline style */
    .merge-row {
      display: flex;
      align-items: center;
      gap: 12px;
      margin-bottom: 16px;
      padding: 12px 16px;
      background: var(--sl-color-neutral-50);
      border-radius: 8px;
    }

    .merge-row .section-title {
      margin: 0;
      white-space: nowrap;
    }

    .merge-row sl-select {
      min-width: 140px;
    }

    .merge-hint {
      font-size: 12px;
      color: var(--sl-color-neutral-500);
      flex: 1;
    }

    /* Order list */
    .order-list {
      display: flex;
      flex-direction: column;
      gap: 8px;
      min-height: 100px;
    }

    .order-item {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 12px;
      background: var(--sl-color-neutral-0);
      border: 1px solid var(--sl-color-neutral-200);
      border-radius: 8px;
      cursor: pointer;
      transition: all 0.15s ease;
    }

    .order-item:hover {
      border-color: var(--sl-color-primary-600);
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
    }

    .order-item.dragging {
      opacity: 0.5;
    }

    .order-item.drag-over {
      border-color: var(--sl-color-primary-600);
      background: var(--sl-color-primary-50);
    }

    .drag-handle {
      color: var(--sl-color-neutral-400);
      cursor: grab;
      padding: 4px;
      margin: -4px;
      border-radius: 4px;
    }

    .drag-handle:hover {
      background: var(--sl-color-neutral-100);
      color: var(--sl-color-neutral-600);
    }

    .drag-handle.dragging {
      cursor: grabbing;
    }

    .order-number {
      width: 24px;
      height: 24px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: var(--sl-color-neutral-100);
      border-radius: 50%;
      font-size: 12px;
      font-weight: 600;
      color: var(--sl-color-neutral-600);
    }

    .order-value {
      flex: 1;
      font-family: var(--sl-font-mono);
      font-size: 13px;
    }

    .order-actions {
      display: flex;
      gap: 4px;
    }

    /* Add order input */
    .add-order {
      display: flex;
      gap: 8px;
      margin-top: 12px;
    }

    .add-order sl-input {
      flex: 1;
    }

    /* Empty state */
    .empty-state {
      text-align: center;
      padding: 32px;
      background: var(--sl-color-neutral-50);
      border-radius: 8px;
      color: var(--sl-color-neutral-500);
    }

    .empty-state sl-icon {
      font-size: 32px;
      margin-bottom: 12px;
    }

    /* Presets */
    .presets {
      margin-bottom: 16px;
    }

    .presets-label {
      font-size: 12px;
      color: var(--sl-color-neutral-500);
      margin-bottom: 8px;
    }

    .preset-chips {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
    }

    .preset-chip {
      font-size: 12px;
      cursor: pointer;
    }

    /* Divider */
    .divider {
      height: 1px;
      background: var(--sl-color-neutral-200);
      margin: 32px 0;
    }
  `;$o([B()],Ks.prototype,"storeState",2);$o([B()],Ks.prototype,"newOrderEntry",2);$o([B()],Ks.prototype,"draggedIndex",2);Ks=$o([kt("ccm-hierarchy-editor")],Ks);var H$=Object.defineProperty,K$=Object.getOwnPropertyDescriptor,pl=(e,t,s,r)=>{for(var i=r>1?void 0:r?K$(t,s):t,o=e.length-1,n;o>=0;o--)(n=e[o])&&(i=(r?n(t,s,i):n(i))||i);return r&&i&&H$(t,s,i),i};let Mr=class extends Me{constructor(){super(...arguments),this.resources=[],this.draggedIndex=null}render(){return this.resources.length===0?A`
        <div class="empty-state">
          <sl-icon name="inbox"></sl-icon>
          <p>No resources defined</p>
          <p class="hint">Click "Add Resource" to get started</p>
        </div>
      `:A`
      <div class="resource-list">
        ${this.resources.map((e,t)=>this.renderResourceCard(e,t))}
      </div>
    `}renderResourceCard(e,t){var r;const s=this.getResourceMeta(e);return A`
      <div
        class="resource-card"
        @click=${()=>this.emitEdit(e)}
        @dragover=${i=>this.handleDragOver(i)}
        @drop=${i=>this.handleDrop(i,t)}
      >
        <div
          class="drag-handle"
          draggable="true"
          @click=${i=>i.stopPropagation()}
          @dragstart=${i=>this.handleDragStart(i,t)}
          @dragend=${this.handleDragEnd}
        >
          <sl-icon name="grip-vertical"></sl-icon>
        </div>

        <span class="resource-type ${e.type}">${e.type}</span>

        <div class="resource-info">
          <div class="resource-name">
            ${e.alias?A`<sl-icon name="bookmark" class="alias-icon"></sl-icon>${e.alias}`:e.name}
            ${(r=e.health_checks)!=null&&r.length?A`<sl-tooltip content="Has health checks"><sl-icon name="heart-pulse" class="monitoring-icon"></sl-icon></sl-tooltip>`:""}
          </div>
          ${s?A`<div class="resource-meta">${s}</div>`:""}
        </div>

        <div class="resource-actions" @click=${i=>i.stopPropagation()}>
          <sl-tooltip content="Edit">
            <sl-icon-button
              name="pencil"
              @click=${()=>this.emitEdit(e)}
            ></sl-icon-button>
          </sl-tooltip>
          <sl-tooltip content="Duplicate">
            <sl-icon-button
              name="copy"
              @click=${()=>this.emitDuplicate(e.id)}
            ></sl-icon-button>
          </sl-tooltip>
          <sl-tooltip content="Delete">
            <sl-icon-button
              name="trash"
              @click=${()=>this.emitDelete(e.id)}
            ></sl-icon-button>
          </sl-tooltip>
        </div>
      </div>
    `}getResourceMeta(e){var s;const t=[];switch(e.type){case"package":e.properties.ensure&&t.push(`ensure: ${e.properties.ensure}`);break;case"service":e.properties.ensure&&t.push(String(e.properties.ensure)),e.properties.enable&&t.push("enabled");break;case"file":e.properties.ensure==="directory"&&t.push("directory"),e.properties.mode&&t.push(String(e.properties.mode));break;case"exec":e.properties.creates&&t.push(`creates: ${e.properties.creates}`);break;case"archive":e.properties.extract_parent&&t.push(`→ ${e.properties.extract_parent}`);break}return(s=e.require)!=null&&s.length&&t.push(`requires ${e.require.length}`),t.join(" · ")}handleDragStart(e,t){this.draggedIndex=t;const s=e.target,r=s.closest(".resource-card");s.classList.add("dragging"),r==null||r.classList.add("dragging"),e.dataTransfer.effectAllowed="move"}handleDragEnd(e){var r;const t=e.target,s=t.closest(".resource-card");t.classList.remove("dragging"),s==null||s.classList.remove("dragging"),this.draggedIndex=null,(r=this.shadowRoot)==null||r.querySelectorAll(".resource-card").forEach(i=>{i.classList.remove("drag-over")})}handleDragOver(e){var s;e.preventDefault(),e.dataTransfer.dropEffect="move";const t=e.target.closest(".resource-card");t&&((s=this.shadowRoot)==null||s.querySelectorAll(".resource-card").forEach(r=>{r.classList.remove("drag-over")}),t.classList.add("drag-over"))}handleDrop(e,t){e.preventDefault(),!(this.draggedIndex===null||this.draggedIndex===t)&&this.dispatchEvent(new CustomEvent("reorder-resources",{detail:{from:this.draggedIndex,to:t}}))}emitEdit(e){this.dispatchEvent(new CustomEvent("edit-resource",{detail:e}))}emitDuplicate(e){this.dispatchEvent(new CustomEvent("duplicate-resource",{detail:e}))}emitDelete(e){this.dispatchEvent(new CustomEvent("delete-resource",{detail:e}))}};Mr.styles=ee`
    :host {
      display: block;
    }

    .resource-list {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .resource-card {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 12px 16px;
      background: var(--sl-color-neutral-0);
      border: 1px solid var(--sl-color-neutral-200);
      border-radius: 8px;
      cursor: pointer;
      transition: all 0.15s ease;
    }

    .resource-card:hover {
      border-color: var(--sl-color-primary-600);
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
    }

    .resource-card.dragging {
      opacity: 0.5;
      cursor: grabbing;
    }

    .resource-card.drag-over {
      border-color: var(--sl-color-primary-600);
      background: var(--sl-color-primary-50);
    }

    .drag-handle {
      color: var(--sl-color-neutral-400);
      cursor: grab;
      padding: 4px;
      margin: -4px;
      border-radius: 4px;
    }

    .drag-handle:hover {
      background: var(--sl-color-neutral-100);
      color: var(--sl-color-neutral-600);
    }

    .drag-handle.dragging {
      cursor: grabbing;
    }

    .resource-type {
      padding: 4px 10px;
      font-size: 11px;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      border-radius: 4px;
    }

    .resource-type.file {
      background: var(--ccm-resource-file-bg);
      color: var(--ccm-resource-file-text);
    }

    .resource-type.exec {
      background: var(--ccm-resource-exec-bg);
      color: var(--ccm-resource-exec-text);
    }

    .resource-type.archive {
      background: var(--ccm-resource-archive-bg);
      color: var(--ccm-resource-archive-text);
    }

    .resource-type.package {
      background: var(--ccm-resource-package-bg);
      color: var(--ccm-resource-package-text);
    }

    .resource-type.service {
      background: var(--ccm-resource-service-bg);
      color: var(--ccm-resource-service-text);
    }

    .resource-info {
      flex: 1;
      min-width: 0;
    }

    .resource-name {
      display: flex;
      align-items: center;
      gap: 6px;
      font-size: 14px;
      font-weight: 500;
      color: var(--sl-color-neutral-900);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .alias-icon {
      color: var(--sl-color-neutral-400);
      flex-shrink: 0;
      font-size: 14px;
    }

    .monitoring-icon {
      color: var(--sl-color-success-600);
      flex-shrink: 0;
      font-size: 14px;
    }

    .resource-meta {
      font-size: 12px;
      color: var(--sl-color-neutral-500);
      margin-top: 2px;
    }

    .resource-meta code {
      background: var(--sl-color-neutral-100);
      padding: 1px 4px;
      border-radius: 3px;
    }

    .resource-actions {
      display: flex;
      gap: 4px;
      opacity: 0;
      transition: opacity 0.15s ease;
    }

    .resource-card:hover .resource-actions {
      opacity: 1;
    }

    /* Validation error indicator */
    .resource-card.has-error {
      border-color: var(--sl-color-danger-600);
    }

    .resource-card.has-error .resource-name {
      color: var(--sl-color-danger-600);
    }

    .error-icon {
      color: var(--sl-color-danger-600);
    }

    /* Empty state */
    .empty-state {
      text-align: center;
      padding: 64px 24px;
      color: var(--sl-color-neutral-400);
    }

    .empty-state sl-icon {
      font-size: 64px;
      margin-bottom: 16px;
      opacity: 0.5;
    }

    .empty-state p {
      margin: 8px 0;
    }

    .empty-state .hint {
      font-size: 13px;
    }
  `;pl([_({type:Array})],Mr.prototype,"resources",2);pl([B()],Mr.prototype,"draggedIndex",2);Mr=pl([kt("ccm-resource-list")],Mr);const oh=new Map;function Zr(e){oh.set(e.type,e)}Zr({type:"file",label:"File",icon:"file-earmark",nameLabel:"File Path",namePlaceholder:"/etc/myapp/config.yaml",nameHint:"Absolute path to the file or directory",fields:[{name:"ensure",type:"select",label:"Ensure",default:"present",options:[{value:"present",label:"Present (file)"},{value:"absent",label:"Absent"},{value:"directory",label:"Directory"}]},{name:"content",type:"textarea",label:"Content",placeholder:"File contents...",hint:"Inline content. Mutually exclusive with Source."},{name:"source",type:"text",label:"Source",placeholder:"/path/to/source/file",hint:"Copy from this local file. Mutually exclusive with Content."},{name:"owner",type:"text",label:"Owner",placeholder:"root"},{name:"group",type:"text",label:"Group",placeholder:"root"},{name:"mode",type:"text",label:"Mode",placeholder:"0644",hint:"Permissions in octal notation (e.g., 0644, 0755)"}]});Zr({type:"exec",label:"Exec",icon:"terminal",nameLabel:"Name or Command",namePlaceholder:"/usr/bin/setup-app --init",nameHint:"Command to execute, or a descriptive name if using command field",fields:[{name:"command",type:"text",label:"Command",placeholder:"/usr/bin/actual-command --flags",hint:"If specified, runs this instead of name. Useful for long commands."},{name:"ensure",type:"select",label:"Ensure",default:"present",options:[{value:"present",label:"Present (execute)"},{value:"absent",label:"Absent"}]},{name:"creates",type:"text",label:"Creates",placeholder:"/path/to/created/file",hint:"Skip execution if this file exists"},{name:"cwd",type:"text",label:"Working Directory",placeholder:"/opt/myapp"},{name:"path",type:"text",label:"Path",placeholder:"/usr/local/bin:/usr/bin:/bin",hint:"Search path for executables (colon-separated)"},{name:"timeout",type:"text",label:"Timeout",placeholder:"30s",hint:"Maximum execution time (e.g., 10s, 5m, 1h)"},{name:"environment",type:"array",label:"Environment Variables",placeholder:"KEY=value",hint:"Additional environment variables"},{name:"returns",type:"text",label:"Expected Returns",placeholder:"0",hint:"Comma-separated exit codes indicating success (default: 0)"},{name:"refreshonly",type:"checkbox",label:"Refresh only",hint:"Only run when triggered by a subscribed resource"},{name:"logoutput",type:"checkbox",label:"Log output",hint:"Log command output"},{name:"subscribe",type:"array",label:"Subscribe",placeholder:"type#name",hint:"Run when these resources change (with refreshonly)"},{name:"provider",type:"select",label:"Provider",options:[{value:"",label:"(auto-detect / posix)"},{value:"posix",label:"POSIX (direct execution)"},{value:"shell",label:"Shell (/bin/sh -c)"}],hint:"Use shell for pipes, redirects, and builtins"}]});Zr({type:"archive",label:"Archive",icon:"file-zip",nameLabel:"Archive Path",namePlaceholder:"/opt/downloads/app-v1.2.3.tar.gz",nameHint:"Where to save the archive. Extension must match URL.",fields:[{name:"url",type:"text",label:"URL",placeholder:"https://releases.example.com/app.tar.gz",required:!0,hint:"HTTP/HTTPS URL to download from (.zip, .tar.gz, .tgz, .tar)"},{name:"ensure",type:"select",label:"Ensure",default:"present",options:[{value:"present",label:"Present"},{value:"absent",label:"Absent"}]},{name:"checksum",type:"text",label:"Checksum (SHA256)",placeholder:"a1b2c3d4e5f6...",hint:"Expected SHA256 hash of the downloaded file"},{name:"extract_parent",type:"text",label:"Extract To",placeholder:"/opt/app",hint:"Directory to extract archive contents into"},{name:"creates",type:"text",label:"Creates",placeholder:"/opt/app/bin/app",hint:"Skip download/extract if this file exists"},{name:"cleanup",type:"checkbox",label:"Cleanup after extraction",hint:"Delete archive file after successful extraction (requires extract_parent and creates)"},{name:"owner",type:"text",label:"Owner",placeholder:"root"},{name:"group",type:"text",label:"Group",placeholder:"root"},{name:"username",type:"text",label:"Username",hint:"For HTTP Basic Authentication"},{name:"password",type:"text",label:"Password",hint:"For HTTP Basic Authentication"},{name:"headers",type:"keyvalue",label:"HTTP Headers",keyPlaceholder:"Header-Name",valuePlaceholder:"value",hint:"Additional headers (e.g., Authorization)"}]});Zr({type:"package",label:"Package",icon:"box",nameLabel:"Package Name",namePlaceholder:"httpd",nameHint:"Use real package names, not virtual names or aliases",fields:[{name:"ensure",type:"text",label:"Ensure",placeholder:"present, absent, latest, or version number",default:"present",hint:'Desired state: present, absent, latest, or specific version like "5.9"'},{name:"provider",type:"select",label:"Provider",options:[{value:"",label:"(auto-detect)"},{value:"dnf",label:"DNF (RHEL/Fedora)"},{value:"apt",label:"APT (Debian/Ubuntu)"}],hint:"Force a specific package manager"}]});Zr({type:"service",label:"Service",icon:"gear",nameLabel:"Service Name",namePlaceholder:"httpd",nameHint:"Use real service names, not aliases",fields:[{name:"ensure",type:"select",label:"Ensure",default:"running",options:[{value:"running",label:"Running"},{value:"stopped",label:"Stopped"}]},{name:"enable",type:"checkbox",label:"Enable at boot",hint:"Start this service automatically on system boot"},{name:"subscribe",type:"array",label:"Subscribe",placeholder:"type#name (e.g., file#/etc/httpd/conf/httpd.conf)",hint:"Restart service when these resources change"},{name:"provider",type:"select",label:"Provider",options:[{value:"",label:"(auto-detect)"},{value:"systemd",label:"systemd"}]}]});var W$=Object.defineProperty,G$=Object.getOwnPropertyDescriptor,mt=(e,t,s,r)=>{for(var i=r>1?void 0:r?G$(t,s):t,o=e.length-1,n;o>=0;o--)(n=e[o])&&(i=(r?n(t,s,i):n(i))||i);return r&&i&&W$(t,s,i),i};let We=class extends Me{constructor(){super(...arguments),this.open=!1,this.resourceType="package",this.resource=null,this.formData={},this.showAdvanced=!1,this.showMonitoring=!1,this.healthChecks=[],this.requireSuggestions=[],this.showRequireSuggestions=!1,this.activeRequireIndex=-1}get typeDef(){return oh.get(this.resourceType)}get isEditing(){return this.resource!==null}connectedCallback(){super.connectedCallback(),this.handleKeydown=this.handleKeydown.bind(this)}willUpdate(e){e.has("open")&&(this.open?(this.initFormData(),document.addEventListener("keydown",this.handleKeydown)):document.removeEventListener("keydown",this.handleKeydown))}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("keydown",this.handleKeydown)}handleKeydown(e){if(e.key==="Escape")e.preventDefault(),this.handleClose();else if(e.key==="Enter"){const t=e.target;if(t.tagName==="TEXTAREA"||t.tagName==="SL-TEXTAREA"||this.showRequireSuggestions)return;e.preventDefault(),this.handleSave()}}initFormData(){var e,t,s,r,i;this.resource?(this.formData={name:this.resource.name,...this.resource.properties,alias:this.resource.alias,require:this.resource.require??[],control_if:((e=this.resource.control)==null?void 0:e.if)??"",control_unless:((t=this.resource.control)==null?void 0:t.unless)??""},this.healthChecks=((s=this.resource.health_checks)==null?void 0:s.map(o=>({...o})))??[],(this.resource.alias||(r=this.resource.require)!=null&&r.length||this.resource.control)&&(this.showAdvanced=!0),(i=this.resource.health_checks)!=null&&i.length&&(this.showMonitoring=!0)):(this.formData={name:"",require:[],control_if:"",control_unless:""},this.healthChecks=[],this.showAdvanced=!1,this.showMonitoring=!1,this.typeDef.fields.forEach(o=>{o.default!==void 0&&(this.formData[o.name]=o.default)}))}render(){const e=this.typeDef,t=this.isEditing?`Edit ${e.label}`:`Add ${e.label}`;return A`
      <sl-dialog
        label=${t}
        ?open=${this.open}
        @sl-request-close=${this.handleClose}
      >
        <div class="form-content">
          <!-- Basic Section -->
          <div class="form-section">
            <div class="section-title">Basic</div>

            <div class="form-group">
              <sl-input
                label="${e.nameLabel} *"
                placeholder=${e.namePlaceholder}
                .value=${String(this.formData.name??"")}
                @sl-input=${s=>this.updateField("name",s.target.value)}
                required
              ></sl-input>
              ${e.nameHint?A`<div class="hint">${e.nameHint}</div>`:""}
            </div>

            ${e.fields.map(s=>this.renderField(s))}
          </div>

          <!-- Advanced Section -->
          <div class="form-section">
            <div
              class="advanced-toggle ${this.showAdvanced?"open":""}"
              @click=${()=>this.showAdvanced=!this.showAdvanced}
            >
              <sl-icon name="chevron-right"></sl-icon>
              Advanced Options
            </div>

            <div class="advanced-content ${this.showAdvanced?"open":""}">
              <div class="form-group">
                <sl-input
                  label="Alias"
                  placeholder="Alternative name for references"
                  .value=${String(this.formData.alias??"")}
                  @sl-input=${s=>this.updateField("alias",s.target.value)}
                ></sl-input>
                <div class="hint">Used in require/subscribe references instead of name</div>
              </div>

              <div class="form-group">
                ${this.renderRequireField()}
              </div>

              <div class="form-row">
                <div class="form-group">
                  <sl-input
                    label="If Condition"
                    placeholder="Facts.os == 'linux'"
                    .value=${String(this.formData.control_if??"")}
                    @sl-input=${s=>this.updateField("control_if",s.target.value)}
                  ></sl-input>
                </div>
                <div class="form-group">
                  <sl-input
                    label="Unless Condition"
                    placeholder="Facts.virtual == 'docker'"
                    .value=${String(this.formData.control_unless??"")}
                    @sl-input=${s=>this.updateField("control_unless",s.target.value)}
                  ></sl-input>
                </div>
              </div>
              <div class="hint">Expressions that control whether this resource is managed</div>
            </div>
          </div>

          <!-- Monitoring Section -->
          <div class="form-section">
            <div
              class="advanced-toggle ${this.showMonitoring?"open":""}"
              @click=${()=>this.showMonitoring=!this.showMonitoring}
            >
              <sl-icon name="chevron-right"></sl-icon>
              Monitoring
              ${this.healthChecks.length>0?A`<span style="color: var(--sl-color-neutral-400); font-weight: normal;">(${this.healthChecks.length})</span>`:""}
            </div>

            <div class="advanced-content ${this.showMonitoring?"open":""}">
              ${this.renderHealthChecks()}
            </div>
          </div>
        </div>

        <div class="form-footer" slot="footer">
          <sl-button @click=${this.handleClose}>Cancel</sl-button>
          <sl-button variant="primary" @click=${this.handleSave}>
            ${this.isEditing?"Save Changes":"Add Resource"}
          </sl-button>
        </div>
      </sl-dialog>
    `}renderField(e){var s;const t=this.formData[e.name];switch(e.type){case"select":return A`
          <div class="form-group">
            <sl-select
              label=${e.label}
              .value=${String(t??e.default??"")}
              @sl-change=${r=>this.updateField(e.name,r.target.value)}
            >
              ${(s=e.options)==null?void 0:s.map(r=>A`
                <sl-option value=${r.value}>${r.label}</sl-option>
              `)}
            </sl-select>
            ${e.hint?A`<div class="hint">${e.hint}</div>`:""}
          </div>
        `;case"textarea":return A`
          <div class="form-group">
            <sl-textarea
              label=${e.label}
              placeholder=${e.placeholder??""}
              .value=${String(t??"")}
              @sl-input=${r=>this.updateField(e.name,r.target.value)}
              rows="4"
            ></sl-textarea>
            ${e.hint?A`<div class="hint">${e.hint}</div>`:""}
          </div>
        `;case"checkbox":return A`
          <div class="form-group">
            <sl-checkbox
              ?checked=${t===!0}
              @sl-change=${r=>this.updateField(e.name,r.target.checked)}
            >
              ${e.label}
            </sl-checkbox>
            ${e.hint?A`<div class="hint">${e.hint}</div>`:""}
          </div>
        `;case"array":return this.renderArrayField(e);case"keyvalue":return this.renderKeyValueField(e);case"text":default:return A`
          <div class="form-group">
            <sl-input
              label=${e.label}
              placeholder=${e.placeholder??""}
              .value=${String(t??"")}
              @sl-input=${r=>this.updateField(e.name,r.target.value)}
            ></sl-input>
            ${e.hint?A`<div class="hint">${e.hint}</div>`:""}
          </div>
        `}}renderArrayField(e){const t=this.formData[e.name],s=Array.isArray(t)?t:[];return A`
      <div class="form-group">
        <div class="array-field">
          <label>${e.label}</label>
          ${s.map((r,i)=>A`
            <div class="array-item">
              <sl-input
                placeholder=${e.placeholder??""}
                .value=${r}
                @sl-input=${o=>this.updateArrayItem(e.name,i,o.target.value)}
              ></sl-input>
              <sl-icon-button
                name="x"
                @click=${()=>this.removeArrayItem(e.name,i)}
              ></sl-icon-button>
            </div>
          `)}
          <sl-button size="small" class="array-add" @click=${()=>this.addArrayItem(e.name)}>
            <sl-icon slot="prefix" name="plus"></sl-icon>
            Add
          </sl-button>
        </div>
        ${e.hint?A`<div class="hint">${e.hint}</div>`:""}
      </div>
    `}renderKeyValueField(e){const t=this.formData[e.name]??{},s=Object.entries(t);return A`
      <div class="form-group">
        <div class="array-field">
          <label>${e.label}</label>
          ${s.map(([r,i],o)=>A`
            <div class="kv-item">
              <sl-input
                placeholder=${e.keyPlaceholder??"Key"}
                .value=${r}
                @sl-input=${n=>this.updateKeyValueKey(e.name,o,s,n.target.value)}
              ></sl-input>
              <sl-input
                placeholder=${e.valuePlaceholder??"Value"}
                .value=${i}
                @sl-input=${n=>this.updateKeyValueValue(e.name,r,n.target.value)}
              ></sl-input>
              <sl-icon-button
                name="x"
                @click=${()=>this.removeKeyValueItem(e.name,r)}
              ></sl-icon-button>
            </div>
          `)}
          <sl-button size="small" class="array-add" @click=${()=>this.addKeyValueItem(e.name)}>
            <sl-icon slot="prefix" name="plus"></sl-icon>
            Add
          </sl-button>
        </div>
        ${e.hint?A`<div class="hint">${e.hint}</div>`:""}
      </div>
    `}renderRequireField(){const e=this.formData.require,t=Array.isArray(e)?e:[];return A`
      <div class="array-field">
        <label>Dependencies (require)</label>
        ${t.map((s,r)=>A`
          <div class="array-item autocomplete-wrapper">
            <sl-input
              placeholder="type#name (e.g., package#httpd)"
              .value=${s}
              @sl-input=${i=>{this.updateArrayItem("require",r,i.target.value),this.updateRequireSuggestions(i.target.value),this.activeRequireIndex=r}}
              @focus=${()=>{this.activeRequireIndex=r,this.updateRequireSuggestions(s),this.showRequireSuggestions=!0}}
              @blur=${()=>setTimeout(()=>this.showRequireSuggestions=!1,200)}
            ></sl-input>
            <sl-icon-button
              name="x"
              @click=${()=>this.removeArrayItem("require",r)}
            ></sl-icon-button>

            ${this.showRequireSuggestions&&this.activeRequireIndex===r&&this.requireSuggestions.length>0?A`
              <div class="autocomplete-list">
                ${this.requireSuggestions.map(i=>A`
                  <div
                    class="autocomplete-item"
                    @mousedown=${o=>{o.preventDefault(),this.updateArrayItem("require",r,i),this.showRequireSuggestions=!1}}
                  >
                    <code>${i.split("#")[0]}</code>
                    ${i.split("#")[1]}
                  </div>
                `)}
              </div>
            `:""}
          </div>
        `)}
        <sl-button size="small" class="array-add" @click=${()=>this.addArrayItem("require")}>
          <sl-icon slot="prefix" name="plus"></sl-icon>
          Add Dependency
        </sl-button>
      </div>
      <div class="hint">Resources that must be applied before this one</div>
    `}renderHealthChecks(){return A`
      ${this.healthChecks.map((e,t)=>{var s;return A`
        <div class="health-check-card">
          <div class="health-check-header">
            <span class="health-check-title">Health Check ${t+1}</span>
            <sl-icon-button
              name="trash"
              @click=${()=>this.removeHealthCheck(t)}
            ></sl-icon-button>
          </div>
          <div class="health-check-fields">
            <div class="health-check-row single">
              <sl-input
                label="Command *"
                placeholder="/usr/lib/nagios/plugins/check_http -H localhost"
                .value=${e.command??""}
                @sl-input=${r=>this.updateHealthCheck(t,"command",r.target.value)}
              ></sl-input>
            </div>
            <div class="health-check-row">
              <sl-input
                label="Name"
                placeholder="Optional name for this check"
                .value=${e.name??""}
                @sl-input=${r=>this.updateHealthCheck(t,"name",r.target.value)}
              ></sl-input>
              <sl-input
                label="Timeout"
                placeholder="10s"
                .value=${e.timeout??""}
                @sl-input=${r=>this.updateHealthCheck(t,"timeout",r.target.value)}
              ></sl-input>
            </div>
            <div class="health-check-row">
              <sl-input
                label="Tries"
                type="number"
                min="1"
                placeholder="1"
                .value=${((s=e.tries)==null?void 0:s.toString())??""}
                @sl-input=${r=>this.updateHealthCheck(t,"tries",r.target.value)}
              ></sl-input>
              <sl-input
                label="Try Sleep"
                placeholder="5s"
                .value=${e.try_sleep??""}
                @sl-input=${r=>this.updateHealthCheck(t,"try_sleep",r.target.value)}
              ></sl-input>
            </div>
          </div>
        </div>
      `})}
      <sl-button size="small" @click=${this.addHealthCheck}>
        <sl-icon slot="prefix" name="plus"></sl-icon>
        Add Health Check
      </sl-button>
      <div class="hint" style="margin-top: 8px;">Health checks run after the resource is applied to verify its state (Nagios plugin format)</div>
    `}addHealthCheck(){this.healthChecks=[...this.healthChecks,{command:""}]}removeHealthCheck(e){this.healthChecks=this.healthChecks.filter((t,s)=>s!==e)}updateHealthCheck(e,t,s){const r=[...this.healthChecks];if(t==="tries"){const i=parseInt(s,10);r[e]={...r[e],[t]:isNaN(i)?void 0:i}}else r[e]={...r[e],[t]:s};this.healthChecks=r}updateRequireSuggestions(e){const s=H.getResourceReferences().filter(r=>r.name!==this.formData.name).flatMap(r=>{const i=[`${r.type}#${r.name}`];return r.alias&&i.push(`${r.type}#${r.alias}`),i});this.requireSuggestions=s.filter(r=>r.toLowerCase().includes(e.toLowerCase())).slice(0,5)}updateField(e,t){this.formData={...this.formData,[e]:t}}updateArrayItem(e,t,s){const r=[...this.formData[e]||[]];r[t]=s,this.formData={...this.formData,[e]:r}}addArrayItem(e){const t=[...this.formData[e]||[],""];this.formData={...this.formData,[e]:t}}removeArrayItem(e,t){const s=(this.formData[e]||[]).filter((r,i)=>i!==t);this.formData={...this.formData,[e]:s}}updateKeyValueKey(e,t,s,r){const i={};s.forEach(([o,n],a)=>{i[a===t?r:o]=n}),this.formData={...this.formData,[e]:i}}updateKeyValueValue(e,t,s){const r={...this.formData[e]||{},[t]:s};this.formData={...this.formData,[e]:r}}addKeyValueItem(e){const t={...this.formData[e]||{},"":""};this.formData={...this.formData,[e]:t}}removeKeyValueItem(e,t){const s={...this.formData[e]||{}};delete s[t],this.formData={...this.formData,[e]:s}}handleClose(){this.dispatchEvent(new CustomEvent("close"))}handleSave(){if(!this.formData.name)return;const{name:e,alias:t,require:s,control_if:r,control_unless:i,...o}=this.formData,n={};Object.entries(o).forEach(([p,h])=>{if(h!==""&&h!==void 0&&h!==null){if(Array.isArray(h)&&h.length===0||Array.isArray(h)&&h.every(v=>v==="")||typeof h=="object"&&!Array.isArray(h)&&Object.keys(h).length===0)return;if(Array.isArray(h)){const v=h.filter(f=>f!=="");v.length>0&&(n[p]=v);return}if(typeof h=="object"&&!Array.isArray(h)){const v={};Object.entries(h).forEach(([f,g])=>{f!==""&&g!==""&&(v[f]=g)}),Object.keys(v).length>0&&(n[p]=v);return}n[p]=h}});const a=(s||[]).filter(p=>p.trim()),l=r||i?{...r?{if:r}:{},...i?{unless:i}:{}}:void 0,c=(t==null?void 0:t.trim())||void 0,u=this.healthChecks.filter(p=>{var h;return(h=p.command)==null?void 0:h.trim()}).map(p=>{var v,f,g;const h={command:p.command.trim()};return(v=p.name)!=null&&v.trim()&&(h.name=p.name.trim()),(f=p.timeout)!=null&&f.trim()&&(h.timeout=p.timeout.trim()),p.tries!==void 0&&p.tries>=1&&(h.tries=p.tries),(g=p.try_sleep)!=null&&g.trim()&&(h.try_sleep=p.try_sleep.trim()),p.format&&(h.format=p.format),h}),d={type:this.resourceType,name:e,properties:n,...c?{alias:c}:{},...a.length?{require:a}:{},...l?{control:l}:{},...u.length?{health_checks:u}:{}};this.dispatchEvent(new CustomEvent("save",{detail:d}))}};We.styles=ee`
    sl-dialog::part(panel) {
      width: 600px;
      max-width: 90vw;
    }

    sl-dialog::part(body) {
      padding: 0;
    }

    .form-content {
      padding: 24px;
      max-height: 70vh;
      overflow-y: auto;
    }

    .form-section {
      margin-bottom: 24px;
    }

    .form-section:last-child {
      margin-bottom: 0;
    }

    .section-title {
      font-size: 13px;
      font-weight: 600;
      color: var(--sl-color-neutral-600);
      text-transform: uppercase;
      letter-spacing: 0.5px;
      margin-bottom: 16px;
      padding-bottom: 8px;
      border-bottom: 1px solid var(--sl-color-neutral-200);
    }

    .form-row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 16px;
    }

    .form-row.single {
      grid-template-columns: 1fr;
    }

    .form-group {
      margin-bottom: 16px;
    }

    .form-group:last-child {
      margin-bottom: 0;
    }

    sl-input, sl-select, sl-textarea {
      width: 100%;
    }

    .hint {
      font-size: 12px;
      color: var(--sl-color-neutral-500);
      margin-top: 4px;
    }

    /* Array field */
    .array-field {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .array-field > label {
      font-size: 14px;
      font-weight: 500;
      color: var(--sl-color-neutral-700);
      margin-bottom: 4px;
    }

    .array-item {
      display: flex;
      gap: 8px;
    }

    .array-item sl-input,
    .array-item sl-select {
      flex: 1;
    }

    .array-add {
      align-self: flex-start;
    }

    /* Advanced section */
    .advanced-toggle {
      display: flex;
      align-items: center;
      gap: 8px;
      cursor: pointer;
      font-size: 13px;
      color: var(--sl-color-neutral-600);
      margin-bottom: 16px;
    }

    .advanced-toggle sl-icon {
      transition: transform 0.2s ease;
    }

    .advanced-toggle.open sl-icon {
      transform: rotate(90deg);
    }

    .advanced-content {
      display: none;
    }

    .advanced-content.open {
      display: block;
    }

    /* Footer */
    .form-footer {
      display: flex;
      justify-content: flex-end;
      gap: 12px;
      padding: 16px 24px;
      border-top: 1px solid var(--sl-color-neutral-200);
      background: var(--sl-color-neutral-50);
    }

    /* Autocomplete dropdown */
    .autocomplete-wrapper {
      position: relative;
    }

    .autocomplete-list {
      position: absolute;
      top: 100%;
      left: 0;
      right: 0;
      background: white;
      border: 1px solid var(--sl-color-neutral-200);
      border-radius: 4px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
      max-height: 200px;
      overflow-y: auto;
      z-index: 100;
    }

    .autocomplete-item {
      padding: 8px 12px;
      cursor: pointer;
      font-size: 13px;
    }

    .autocomplete-item:hover {
      background: var(--sl-color-neutral-50);
    }

    .autocomplete-item code {
      background: var(--sl-color-neutral-100);
      padding: 2px 6px;
      border-radius: 3px;
      margin-right: 8px;
    }

    /* Key-value field */
    .kv-item {
      display: grid;
      grid-template-columns: 1fr 1fr auto;
      gap: 8px;
    }

    /* Health check cards */
    .health-check-card {
      background: var(--sl-color-neutral-50);
      border: 1px solid var(--sl-color-neutral-200);
      border-radius: 8px;
      padding: 16px;
      margin-bottom: 12px;
    }

    .health-check-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 12px;
    }

    .health-check-title {
      font-size: 13px;
      font-weight: 600;
      color: var(--sl-color-neutral-700);
    }

    .health-check-fields {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    .health-check-row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 12px;
    }

    .health-check-row.single {
      grid-template-columns: 1fr;
    }
  `;mt([_({type:Boolean})],We.prototype,"open",2);mt([_({type:String})],We.prototype,"resourceType",2);mt([_({type:Object})],We.prototype,"resource",2);mt([B()],We.prototype,"formData",2);mt([B()],We.prototype,"showAdvanced",2);mt([B()],We.prototype,"showMonitoring",2);mt([B()],We.prototype,"healthChecks",2);mt([B()],We.prototype,"requireSuggestions",2);mt([B()],We.prototype,"showRequireSuggestions",2);mt([B()],We.prototype,"activeRequireIndex",2);We=mt([kt("ccm-resource-form")],We);var Y$=Object.defineProperty,J$=Object.getOwnPropertyDescriptor,ei=(e,t,s,r)=>{for(var i=r>1?void 0:r?J$(t,s):t,o=e.length-1,n;o>=0;o--)(n=e[o])&&(i=(r?n(t,s,i):n(i))||i);return r&&i&&Y$(t,s,i),i};let gs=class extends Me{constructor(){super(...arguments),this.showForm=!1,this.editingResource=null,this.newResourceType="package"}connectedCallback(){super.connectedCallback(),this.unsubscribe=H.subscribe(e=>{this.storeState=e})}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this.unsubscribe)==null||e.call(this)}render(){var s;const e=(s=this.storeState)==null?void 0:s.manifest.ccm,t=(e==null?void 0:e.resources)??[];return A`
      <div class="header">
        <span class="header-title">
          Resources
          <span class="header-count">(${t.length})</span>
        </span>

        <sl-dropdown>
          <sl-button slot="trigger" variant="primary" size="small" caret>
            <sl-icon slot="prefix" name="plus"></sl-icon>
            Add Resource
          </sl-button>
          <sl-menu @sl-select=${this.handleAddResource}>
            <sl-menu-item value="file">
              <sl-icon slot="prefix" name="file-earmark"></sl-icon>
              File
            </sl-menu-item>
            <sl-menu-item value="exec">
              <sl-icon slot="prefix" name="terminal"></sl-icon>
              Exec
            </sl-menu-item>
            <sl-menu-item value="archive">
              <sl-icon slot="prefix" name="file-zip"></sl-icon>
              Archive
            </sl-menu-item>
            <sl-menu-item value="package">
              <sl-icon slot="prefix" name="box"></sl-icon>
              Package
            </sl-menu-item>
            <sl-menu-item value="service">
              <sl-icon slot="prefix" name="gear"></sl-icon>
              Service
            </sl-menu-item>
          </sl-menu>
        </sl-dropdown>
      </div>

      <!-- CCM Settings -->
      <div class="settings">
        <sl-textarea
          label="Pre-message"
          placeholder="Message shown before applying resources"
          size="small"
          resize="vertical"
          rows="1"
          .value=${(e==null?void 0:e.pre_message)??""}
          @sl-change=${r=>H.setCcmPreMessage(r.target.value||void 0)}
        ></sl-textarea>
        <sl-textarea
          label="Post-message"
          placeholder="Message shown after applying resources"
          size="small"
          resize="vertical"
          rows="1"
          .value=${(e==null?void 0:e.post_message)??""}
          @sl-change=${r=>H.setCcmPostMessage(r.target.value||void 0)}
        ></sl-textarea>
        <sl-checkbox
          ?checked=${(e==null?void 0:e.fail_on_error)??!1}
          @sl-change=${r=>H.setCcmFailOnError(r.target.checked)}
        >
          Fail on error
        </sl-checkbox>
      </div>

      <div class="content">
        <ccm-resource-list
          .resources=${t}
          @edit-resource=${this.handleEditResource}
          @duplicate-resource=${this.handleDuplicateResource}
          @delete-resource=${this.handleDeleteResource}
          @reorder-resources=${this.handleReorderResources}
        ></ccm-resource-list>
      </div>

      <!-- Resource Form Modal -->
      <ccm-resource-form
        ?open=${this.showForm}
        .resourceType=${this.newResourceType}
        .resource=${this.editingResource}
        @close=${this.handleFormClose}
        @save=${this.handleFormSave}
      ></ccm-resource-form>
    `}handleAddResource(e){const t=e.detail.item.value;this.newResourceType=t,this.editingResource=null,this.showForm=!0}handleEditResource(e){this.editingResource=e.detail,this.newResourceType=e.detail.type,this.showForm=!0}handleDuplicateResource(e){H.duplicateResource(e.detail)}handleDeleteResource(e){H.deleteResource(e.detail)}handleReorderResources(e){H.reorderResources(e.detail.from,e.detail.to)}handleFormClose(){this.showForm=!1,this.editingResource=null}handleFormSave(e){this.editingResource?H.updateResource(this.editingResource.id,e.detail):H.addResource(e.detail),this.showForm=!1,this.editingResource=null}};gs.styles=ee`
    :host {
      display: flex;
      flex-direction: column;
      height: 100%;
    }

    .header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 16px 20px;
      border-bottom: 1px solid var(--sl-color-neutral-200);
      background: var(--sl-color-neutral-0);
    }

    .header-title {
      font-size: 14px;
      font-weight: 600;
      color: var(--sl-color-neutral-700);
    }

    .header-count {
      font-weight: 400;
      color: var(--sl-color-neutral-400);
    }

    .settings {
      display: flex;
      gap: 16px;
      padding: 12px 20px;
      background: var(--sl-color-neutral-50);
      border-bottom: 1px solid var(--sl-color-neutral-200);
      align-items: flex-end;
    }

    .settings sl-textarea {
      flex: 1;
    }

    .settings sl-textarea::part(textarea) {
      min-height: 38px;
      max-height: 200px;
    }

    .settings sl-checkbox {
      margin-bottom: 8px;
    }

    .content {
      flex: 1;
      overflow: auto;
      padding: 20px 20px 80px 20px;
    }
  `;ei([B()],gs.prototype,"storeState",2);ei([B()],gs.prototype,"showForm",2);ei([B()],gs.prototype,"editingResource",2);ei([B()],gs.prototype,"newResourceType",2);gs=ei([kt("ccm-resources-editor")],gs);var X$=Object.defineProperty,Q$=Object.getOwnPropertyDescriptor,fl=(e,t,s,r)=>{for(var i=r>1?void 0:r?Q$(t,s):t,o=e.length-1,n;o>=0;o--)(n=e[o])&&(i=(r?n(t,s,i):n(i))||i);return r&&i&&X$(t,s,i),i};let Fr=class extends Me{constructor(){super(...arguments),this.open=!1,this.lastSaved=null}connectedCallback(){super.connectedCallback(),this.handleKeydown=this.handleKeydown.bind(this)}updated(e){e.has("open")&&(this.open?document.addEventListener("keydown",this.handleKeydown):document.removeEventListener("keydown",this.handleKeydown))}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("keydown",this.handleKeydown)}handleKeydown(e){e.key==="Enter"&&(e.preventDefault(),this.handleRecover())}render(){return A`
      <sl-dialog
        label="Recover Unsaved Work?"
        ?open=${this.open}
        @sl-request-close=${this.handleClose}
      >
        <div class="recovery-info">
          <p>You have unsaved work from a previous session.</p>
          ${this.lastSaved?A`
            <p class="timestamp">
              Last saved: ${this.lastSaved.toLocaleString()}
            </p>
          `:""}
        </div>

        <sl-button slot="footer" @click=${this.handleDiscard}>
          Start Fresh
        </sl-button>
        <sl-button slot="footer" variant="primary" @click=${this.handleRecover}>
          Recover Work
        </sl-button>
      </sl-dialog>
    `}handleClose(){this.handleDiscard()}handleRecover(){this.dispatchEvent(new CustomEvent("recover"))}handleDiscard(){this.dispatchEvent(new CustomEvent("discard"))}};Fr.styles=ee`
    .recovery-info {
      margin-bottom: 16px;
    }

    .recovery-info p {
      margin: 0 0 8px 0;
    }

    .timestamp {
      font-size: 13px;
      color: var(--sl-color-neutral-500);
      margin-top: 8px;
    }

    sl-dialog::part(footer) {
      display: flex;
      justify-content: flex-end;
      gap: 8px;
    }
  `;fl([_({type:Boolean})],Fr.prototype,"open",2);fl([_({type:Object})],Fr.prototype,"lastSaved",2);Fr=fl([kt("ccm-recovery-dialog")],Fr);var Z$=Object.defineProperty,ek=Object.getOwnPropertyDescriptor,_s=(e,t,s,r)=>{for(var i=r>1?void 0:r?ek(t,s):t,o=e.length-1,n;o>=0;o--)(n=e[o])&&(i=(r?n(t,s,i):n(i))||i);return r&&i&&Z$(t,s,i),i};let Dt=class extends Me{constructor(){super(...arguments),this.yamlPanelCollapsed=!1,this.activeTab="resources",this.showRecoveryDialog=!1,this.recoveryLastSaved=null,this.isMobile=!1,this.boundRecoveryHandler=this.handleRecoveryAvailable.bind(this),this.mediaQuery=window.matchMedia("(max-width: 900px)"),this.handleMediaChange=e=>{this.isMobile=e.matches}}connectedCallback(){super.connectedCallback(),this.isMobile=this.mediaQuery.matches,this.mediaQuery.addEventListener("change",this.handleMediaChange),this.unsubscribe=H.subscribe(e=>{this.storeState=e}),window.addEventListener("ccm-recovery-available",this.boundRecoveryHandler)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this.unsubscribe)==null||e.call(this),window.removeEventListener("ccm-recovery-available",this.boundRecoveryHandler),this.mediaQuery.removeEventListener("change",this.handleMediaChange)}handleRecoveryAvailable(e){const{lastSaved:t}=e.detail;this.recoveryLastSaved=t,this.showRecoveryDialog=!0}render(){var e;return A`
      <ccm-header
        .isDirty=${((e=this.storeState)==null?void 0:e.isDirty)??!1}
        .hasErrors=${H.hasErrors()}
        @import-yaml=${this.handleImport}
        @export-yaml=${this.handleExport}
        @new-manifest=${this.handleNew}
      ></ccm-header>

      <div class="main-content ${this.isMobile?"mobile":""}">
        ${this.isMobile?this.renderMobileLayout():this.renderDesktopLayout()}
      </div>

      <ccm-recovery-dialog
        ?open=${this.showRecoveryDialog}
        .lastSaved=${this.recoveryLastSaved}
        @recover=${this.handleRecover}
        @discard=${this.handleDiscardRecovery}
      ></ccm-recovery-dialog>
    `}handleTabChange(e){this.activeTab=e.detail.name}handleToggleYamlPanel(){this.yamlPanelCollapsed=!this.yamlPanelCollapsed}handleImport(e){var r,i;const t=e.detail,s=R$(t);s.success?(i=s.warnings)!=null&&i.length?this.showAlert("Imported with warnings: "+s.warnings.join(", "),"warning"):this.showAlert("Manifest imported successfully","success"):(console.error("Import failed:",s.errors),this.showAlert("Import failed: "+(((r=s.errors)==null?void 0:r.join(", "))||"Unknown error"),"danger"))}handleExport(){N$()}handleNew(){var e;(e=this.storeState)!=null&&e.isDirty&&!confirm("Discard unsaved changes?")||H.reset()}handleRecover(){this.showRecoveryDialog=!1,window.dispatchEvent(new CustomEvent("ccm-recovery-decision",{detail:{recover:!0}})),this.showAlert("Previous work recovered","success")}handleDiscardRecovery(){this.showRecoveryDialog=!1,window.dispatchEvent(new CustomEvent("ccm-recovery-decision",{detail:{recover:!1}}))}showAlert(e,t="success"){const s=Object.assign(document.createElement("sl-alert"),{variant:t,closable:!0,duration:3e3,innerHTML:`<sl-icon name="${t==="success"?"check-circle":"exclamation-triangle"}" slot="icon"></sl-icon>${e}`});document.body.appendChild(s),s.toast()}renderDesktopLayout(){return this.yamlPanelCollapsed?A`
        <div class="collapsed-layout">
          <div class="editor-panel">
            ${this.renderEditorTabs()}
          </div>
          <div class="yaml-panel collapsed">
            <ccm-yaml-panel
              .collapsed=${!0}
              @toggle-collapse=${this.handleToggleYamlPanel}
            ></ccm-yaml-panel>
          </div>
        </div>
      `:A`
      <sl-split-panel position="60">
        <div slot="start" class="editor-panel">
          ${this.renderEditorTabs()}
        </div>
        <div slot="end" class="yaml-panel">
          <ccm-yaml-panel
            .collapsed=${!1}
            @toggle-collapse=${this.handleToggleYamlPanel}
          ></ccm-yaml-panel>
        </div>
      </sl-split-panel>
    `}renderMobileLayout(){return this.yamlPanelCollapsed?A`
        <div class="collapsed-layout-mobile">
          <div class="editor-panel">
            ${this.renderEditorTabs()}
          </div>
          <div class="yaml-panel collapsed">
            <ccm-yaml-panel
              .collapsed=${!0}
              .mobile=${!0}
              @toggle-collapse=${this.handleToggleYamlPanel}
            ></ccm-yaml-panel>
          </div>
        </div>
      `:A`
      <sl-split-panel vertical position="70">
        <div slot="start" class="editor-panel">
          ${this.renderEditorTabs()}
        </div>
        <div slot="end" class="yaml-panel">
          <ccm-yaml-panel
            .collapsed=${!1}
            .mobile=${!0}
            @toggle-collapse=${this.handleToggleYamlPanel}
          ></ccm-yaml-panel>
        </div>
      </sl-split-panel>
    `}renderEditorTabs(){return A`
      <sl-tab-group @sl-tab-show=${this.handleTabChange}>
        <sl-tab slot="nav" panel="resources" ?active=${this.activeTab==="resources"}>
          Resources
        </sl-tab>
        <sl-tab slot="nav" panel="data" ?active=${this.activeTab==="data"}>
          Data
        </sl-tab>
        <sl-tab slot="nav" panel="hierarchy" ?active=${this.activeTab==="hierarchy"}>
          Hierarchy
        </sl-tab>

        <sl-tab-panel name="resources">
          <div class="tab-scroll-container">
            <ccm-resources-editor></ccm-resources-editor>
          </div>
        </sl-tab-panel>

        <sl-tab-panel name="data">
          <div class="tab-scroll-container">
            <ccm-data-editor></ccm-data-editor>
          </div>
        </sl-tab-panel>

        <sl-tab-panel name="hierarchy">
          <div class="tab-scroll-container">
            <ccm-hierarchy-editor></ccm-hierarchy-editor>
          </div>
        </sl-tab-panel>
      </sl-tab-group>
    `}};Dt.styles=ee`
    :host {
      display: flex;
      flex-direction: column;
      height: 100vh;
      background: var(--sl-color-neutral-50);
    }

    .main-content {
      flex: 1;
      overflow: hidden;
    }

    sl-split-panel {
      height: 100%;
      --divider-width: 4px;
      --divider-hit-area: 12px;
    }

    sl-split-panel::part(divider) {
      background: var(--sl-color-neutral-200);
    }

    sl-split-panel::part(divider):hover {
      background: var(--sl-color-primary-500);
    }

    .editor-panel {
      display: flex;
      flex-direction: column;
      min-width: 300px;
      height: 100%;
      background: var(--sl-color-neutral-0);
    }

    .yaml-panel {
      display: flex;
      flex-direction: column;
      min-width: 200px;
      height: 100%;
      background: var(--sl-color-neutral-100);
    }

    /* Desktop collapsed layout - horizontal flexbox */
    .collapsed-layout {
      display: flex;
      height: 100%;
    }

    .collapsed-layout .editor-panel {
      flex: 1;
      min-width: 0;
    }

    .collapsed-layout .yaml-panel {
      width: 48px;
      min-width: 48px;
      max-width: 48px;
      flex-shrink: 0;
    }

    /* Mobile collapsed layout - vertical flexbox */
    .collapsed-layout-mobile {
      display: flex;
      flex-direction: column;
      height: 100%;
    }

    .collapsed-layout-mobile .editor-panel {
      flex: 1;
      min-height: 0;
      min-width: auto;
      overflow: hidden;
    }

    .collapsed-layout-mobile .yaml-panel {
      height: 48px;
      min-height: 48px;
      max-height: 48px;
      flex-shrink: 0;
      min-width: auto;
      width: 100%;
    }

    /* Reduce bottom padding in mobile collapsed mode since YAML bar is only 48px */
    .collapsed-layout-mobile .tab-scroll-container {
      padding-bottom: 16px;
    }

    /* Mobile: vertical split panel */
    .main-content.mobile sl-split-panel {
      --divider-width: 4px;
    }

    .main-content.mobile .editor-panel {
      height: 100%;
      min-height: 200px;
      min-width: auto;
      overflow: hidden;
    }

    .main-content.mobile .yaml-panel {
      height: 100%;
      min-height: 150px;
      min-width: auto;
    }

    /* Override mobile yaml-panel min-height when collapsed */
    .main-content.mobile .collapsed-layout-mobile .yaml-panel {
      height: 48px !important;
      min-height: 48px !important;
      max-height: 48px !important;
    }

    sl-tab-group {
      flex: 1;
      display: flex;
      flex-direction: column;
      min-height: 0;
    }

    sl-tab-group::part(base) {
      height: 100%;
      display: flex;
      flex-direction: column;
    }

    sl-tab-group::part(body) {
      flex: 1;
      overflow: hidden;
      min-height: 0;
    }

    sl-tab-panel {
      padding: 0;
      height: 100%;
    }

    sl-tab-panel::part(base) {
      height: 100%;
      position: relative;
    }

    .tab-scroll-container {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      overflow: auto;
      padding-bottom: 80px;
    }

  `;_s([B()],Dt.prototype,"storeState",2);_s([B()],Dt.prototype,"yamlPanelCollapsed",2);_s([B()],Dt.prototype,"activeTab",2);_s([B()],Dt.prototype,"showRecoveryDialog",2);_s([B()],Dt.prototype,"recoveryLastSaved",2);_s([B()],Dt.prototype,"isMobile",2);Dt=_s([kt("ccm-studio")],Dt);function Mc(){jr.hasSavedData()?window.dispatchEvent(new CustomEvent("ccm-recovery-available",{detail:{lastSaved:jr.getLastSaved()}})):ih()}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Mc):requestAnimationFrame(Mc);window.addEventListener("ccm-recovery-decision",e=>{const{recover:t}=e.detail;t?T$():jr.clear(),ih()});
