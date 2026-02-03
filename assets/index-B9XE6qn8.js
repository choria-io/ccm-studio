(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function r(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerPolicy&&(n.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?n.credentials="include":i.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(i){if(i.ep)return;i.ep=!0;const n=r(i);fetch(i.href,n)}})();const Wi=globalThis,Bo=Wi.ShadowRoot&&(Wi.ShadyCSS===void 0||Wi.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Uo=Symbol(),Ra=new WeakMap;let cd=class{constructor(t,r,s){if(this._$cssResult$=!0,s!==Uo)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=r}get styleSheet(){let t=this.o;const r=this.t;if(Bo&&t===void 0){const s=r!==void 0&&r.length===1;s&&(t=Ra.get(r)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&Ra.set(r,t))}return t}toString(){return this.cssText}};const Qu=e=>new cd(typeof e=="string"?e:e+"",void 0,Uo),ie=(e,...t)=>{const r=e.length===1?e[0]:t.reduce((s,i,n)=>s+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[n+1],e[0]);return new cd(r,e,Uo)},Zu=(e,t)=>{if(Bo)e.adoptedStyleSheets=t.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(const r of t){const s=document.createElement("style"),i=Wi.litNonce;i!==void 0&&s.setAttribute("nonce",i),s.textContent=r.cssText,e.appendChild(s)}},Na=Bo?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let r="";for(const s of t.cssRules)r+=s.cssText;return Qu(r)})(e):e;const{is:eh,defineProperty:th,getOwnPropertyDescriptor:rh,getOwnPropertyNames:sh,getOwnPropertySymbols:ih,getPrototypeOf:nh}=Object,fn=globalThis,Da=fn.trustedTypes,oh=Da?Da.emptyScript:"",ah=fn.reactiveElementPolyfillSupport,us=(e,t)=>e,Dr={toAttribute(e,t){switch(t){case Boolean:e=e?oh:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=e!==null;break;case Number:r=e===null?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},Ho=(e,t)=>!eh(e,t),La={attribute:!0,type:String,converter:Dr,reflect:!1,useDefault:!1,hasChanged:Ho};Symbol.metadata??=Symbol("metadata"),fn.litPropertyMetadata??=new WeakMap;let Sr=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,r=La){if(r.state&&(r.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((r=Object.create(r)).wrapped=!0),this.elementProperties.set(t,r),!r.noAccessor){const s=Symbol(),i=this.getPropertyDescriptor(t,s,r);i!==void 0&&th(this.prototype,t,i)}}static getPropertyDescriptor(t,r,s){const{get:i,set:n}=rh(this.prototype,t)??{get(){return this[r]},set(o){this[r]=o}};return{get:i,set(o){const a=i?.call(this);n?.call(this,o),this.requestUpdate(t,a,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??La}static _$Ei(){if(this.hasOwnProperty(us("elementProperties")))return;const t=nh(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(us("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(us("properties"))){const r=this.properties,s=[...sh(r),...ih(r)];for(const i of s)this.createProperty(i,r[i])}const t=this[Symbol.metadata];if(t!==null){const r=litPropertyMetadata.get(t);if(r!==void 0)for(const[s,i]of r)this.elementProperties.set(s,i)}this._$Eh=new Map;for(const[r,s]of this.elementProperties){const i=this._$Eu(r,s);i!==void 0&&this._$Eh.set(i,r)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const r=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const i of s)r.unshift(Na(i))}else t!==void 0&&r.push(Na(t));return r}static _$Eu(t,r){const s=r.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,r=this.constructor.elementProperties;for(const s of r.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Zu(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,r,s){this._$AK(t,s)}_$ET(t,r){const s=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,s);if(i!==void 0&&s.reflect===!0){const n=(s.converter?.toAttribute!==void 0?s.converter:Dr).toAttribute(r,s.type);this._$Em=t,n==null?this.removeAttribute(i):this.setAttribute(i,n),this._$Em=null}}_$AK(t,r){const s=this.constructor,i=s._$Eh.get(t);if(i!==void 0&&this._$Em!==i){const n=s.getPropertyOptions(i),o=typeof n.converter=="function"?{fromAttribute:n.converter}:n.converter?.fromAttribute!==void 0?n.converter:Dr;this._$Em=i;const a=o.fromAttribute(r,n.type);this[i]=a??this._$Ej?.get(i)??a,this._$Em=null}}requestUpdate(t,r,s,i=!1,n){if(t!==void 0){const o=this.constructor;if(i===!1&&(n=this[t]),s??=o.getPropertyOptions(t),!((s.hasChanged??Ho)(n,r)||s.useDefault&&s.reflect&&n===this._$Ej?.get(t)&&!this.hasAttribute(o._$Eu(t,s))))return;this.C(t,r,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,r,{useDefault:s,reflect:i,wrapped:n},o){s&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,o??r??this[t]),n!==!0||o!==void 0)||(this._$AL.has(t)||(this.hasUpdated||s||(r=void 0),this._$AL.set(t,r)),i===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(r){Promise.reject(r)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[i,n]of this._$Ep)this[i]=n;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[i,n]of s){const{wrapped:o}=n,a=this[i];o!==!0||this._$AL.has(i)||a===void 0||this.C(i,void 0,n,a)}}let t=!1;const r=this._$AL;try{t=this.shouldUpdate(r),t?(this.willUpdate(r),this._$EO?.forEach(s=>s.hostUpdate?.()),this.update(r)):this._$EM()}catch(s){throw t=!1,this._$EM(),s}t&&this._$AE(r)}willUpdate(t){}_$AE(t){this._$EO?.forEach(r=>r.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(r=>this._$ET(r,this[r])),this._$EM()}updated(t){}firstUpdated(t){}};Sr.elementStyles=[],Sr.shadowRootOptions={mode:"open"},Sr[us("elementProperties")]=new Map,Sr[us("finalized")]=new Map,ah?.({ReactiveElement:Sr}),(fn.reactiveElementVersions??=[]).push("2.1.2");const Ko=globalThis,za=e=>e,en=Ko.trustedTypes,ja=en?en.createPolicy("lit-html",{createHTML:e=>e}):void 0,dd="$lit$",Vt=`lit$${Math.random().toFixed(9).slice(2)}$`,ud="?"+Vt,lh=`<${ud}>`,nr=document,gs=()=>nr.createComment(""),ys=e=>e===null||typeof e!="object"&&typeof e!="function",Wo=Array.isArray,ch=e=>Wo(e)||typeof e?.[Symbol.iterator]=="function",Un=`[ 	
\f\r]`,Xr=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ma=/-->/g,qa=/>/g,Yt=RegExp(`>|${Un}(?:([^\\s"'>=/]+)(${Un}*=${Un}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Fa=/'/g,Va=/"/g,hd=/^(?:script|style|textarea|title)$/i,dh=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),N=dh(1),ot=Symbol.for("lit-noChange"),$e=Symbol.for("lit-nothing"),Ba=new WeakMap,rr=nr.createTreeWalker(nr,129);function pd(e,t){if(!Wo(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return ja!==void 0?ja.createHTML(t):t}const uh=(e,t)=>{const r=e.length-1,s=[];let i,n=t===2?"<svg>":t===3?"<math>":"",o=Xr;for(let a=0;a<r;a++){const l=e[a];let c,d,p=-1,u=0;for(;u<l.length&&(o.lastIndex=u,d=o.exec(l),d!==null);)u=o.lastIndex,o===Xr?d[1]==="!--"?o=Ma:d[1]!==void 0?o=qa:d[2]!==void 0?(hd.test(d[2])&&(i=RegExp("</"+d[2],"g")),o=Yt):d[3]!==void 0&&(o=Yt):o===Yt?d[0]===">"?(o=i??Xr,p=-1):d[1]===void 0?p=-2:(p=o.lastIndex-d[2].length,c=d[1],o=d[3]===void 0?Yt:d[3]==='"'?Va:Fa):o===Va||o===Fa?o=Yt:o===Ma||o===qa?o=Xr:(o=Yt,i=void 0);const h=o===Yt&&e[a+1].startsWith("/>")?" ":"";n+=o===Xr?l+lh:p>=0?(s.push(c),l.slice(0,p)+dd+l.slice(p)+Vt+h):l+Vt+(p===-2?a:h)}return[pd(e,n+(e[r]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),s]};class bs{constructor({strings:t,_$litType$:r},s){let i;this.parts=[];let n=0,o=0;const a=t.length-1,l=this.parts,[c,d]=uh(t,r);if(this.el=bs.createElement(c,s),rr.currentNode=this.el.content,r===2||r===3){const p=this.el.content.firstChild;p.replaceWith(...p.childNodes)}for(;(i=rr.nextNode())!==null&&l.length<a;){if(i.nodeType===1){if(i.hasAttributes())for(const p of i.getAttributeNames())if(p.endsWith(dd)){const u=d[o++],h=i.getAttribute(p).split(Vt),y=/([.?@])?(.*)/.exec(u);l.push({type:1,index:n,name:y[2],strings:h,ctor:y[1]==="."?ph:y[1]==="?"?fh:y[1]==="@"?mh:mn}),i.removeAttribute(p)}else p.startsWith(Vt)&&(l.push({type:6,index:n}),i.removeAttribute(p));if(hd.test(i.tagName)){const p=i.textContent.split(Vt),u=p.length-1;if(u>0){i.textContent=en?en.emptyScript:"";for(let h=0;h<u;h++)i.append(p[h],gs()),rr.nextNode(),l.push({type:2,index:++n});i.append(p[u],gs())}}}else if(i.nodeType===8)if(i.data===ud)l.push({type:2,index:n});else{let p=-1;for(;(p=i.data.indexOf(Vt,p+1))!==-1;)l.push({type:7,index:n}),p+=Vt.length-1}n++}}static createElement(t,r){const s=nr.createElement("template");return s.innerHTML=t,s}}function Lr(e,t,r=e,s){if(t===ot)return t;let i=s!==void 0?r._$Co?.[s]:r._$Cl;const n=ys(t)?void 0:t._$litDirective$;return i?.constructor!==n&&(i?._$AO?.(!1),n===void 0?i=void 0:(i=new n(e),i._$AT(e,r,s)),s!==void 0?(r._$Co??=[])[s]=i:r._$Cl=i),i!==void 0&&(t=Lr(e,i._$AS(e,t.values),i,s)),t}class hh{constructor(t,r){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:r},parts:s}=this._$AD,i=(t?.creationScope??nr).importNode(r,!0);rr.currentNode=i;let n=rr.nextNode(),o=0,a=0,l=s[0];for(;l!==void 0;){if(o===l.index){let c;l.type===2?c=new Ss(n,n.nextSibling,this,t):l.type===1?c=new l.ctor(n,l.name,l.strings,this,t):l.type===6&&(c=new gh(n,this,t)),this._$AV.push(c),l=s[++a]}o!==l?.index&&(n=rr.nextNode(),o++)}return rr.currentNode=nr,i}p(t){let r=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,r),r+=s.strings.length-2):s._$AI(t[r])),r++}}class Ss{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,r,s,i){this.type=2,this._$AH=$e,this._$AN=void 0,this._$AA=t,this._$AB=r,this._$AM=s,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&t?.nodeType===11&&(t=r.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,r=this){t=Lr(this,t,r),ys(t)?t===$e||t==null||t===""?(this._$AH!==$e&&this._$AR(),this._$AH=$e):t!==this._$AH&&t!==ot&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):ch(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==$e&&ys(this._$AH)?this._$AA.nextSibling.data=t:this.T(nr.createTextNode(t)),this._$AH=t}$(t){const{values:r,_$litType$:s}=t,i=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=bs.createElement(pd(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===i)this._$AH.p(r);else{const n=new hh(i,this),o=n.u(this.options);n.p(r),this.T(o),this._$AH=n}}_$AC(t){let r=Ba.get(t.strings);return r===void 0&&Ba.set(t.strings,r=new bs(t)),r}k(t){Wo(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let s,i=0;for(const n of t)i===r.length?r.push(s=new Ss(this.O(gs()),this.O(gs()),this,this.options)):s=r[i],s._$AI(n),i++;i<r.length&&(this._$AR(s&&s._$AB.nextSibling,i),r.length=i)}_$AR(t=this._$AA.nextSibling,r){for(this._$AP?.(!1,!0,r);t!==this._$AB;){const s=za(t).nextSibling;za(t).remove(),t=s}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}}class mn{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,r,s,i,n){this.type=1,this._$AH=$e,this._$AN=void 0,this.element=t,this.name=r,this._$AM=i,this.options=n,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=$e}_$AI(t,r=this,s,i){const n=this.strings;let o=!1;if(n===void 0)t=Lr(this,t,r,0),o=!ys(t)||t!==this._$AH&&t!==ot,o&&(this._$AH=t);else{const a=t;let l,c;for(t=n[0],l=0;l<n.length-1;l++)c=Lr(this,a[s+l],r,l),c===ot&&(c=this._$AH[l]),o||=!ys(c)||c!==this._$AH[l],c===$e?t=$e:t!==$e&&(t+=(c??"")+n[l+1]),this._$AH[l]=c}o&&!i&&this.j(t)}j(t){t===$e?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class ph extends mn{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===$e?void 0:t}}class fh extends mn{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==$e)}}class mh extends mn{constructor(t,r,s,i,n){super(t,r,s,i,n),this.type=5}_$AI(t,r=this){if((t=Lr(this,t,r,0)??$e)===ot)return;const s=this._$AH,i=t===$e&&s!==$e||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,n=t!==$e&&(s===$e||i);i&&this.element.removeEventListener(this.name,this,s),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class gh{constructor(t,r,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=r,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){Lr(this,t)}}const yh=Ko.litHtmlPolyfillSupport;yh?.(bs,Ss),(Ko.litHtmlVersions??=[]).push("3.3.2");const bh=(e,t,r)=>{const s=r?.renderBefore??t;let i=s._$litPart$;if(i===void 0){const n=r?.renderBefore??null;s._$litPart$=i=new Ss(t.insertBefore(gs(),n),n,void 0,r??{})}return i._$AI(e),i};const Go=globalThis;let Ee=class extends Sr{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=bh(r,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return ot}};Ee._$litElement$=!0,Ee.finalized=!0,Go.litElementHydrateSupport?.({LitElement:Ee});const vh=Go.litElementPolyfillSupport;vh?.({LitElement:Ee});(Go.litElementVersions??=[]).push("4.2.2");var wh=ie`
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
`;const wo=new Set,Cr=new Map;let tr,Yo="ltr",Jo="en";const fd=typeof MutationObserver<"u"&&typeof document<"u"&&typeof document.documentElement<"u";if(fd){const e=new MutationObserver(gd);Yo=document.documentElement.dir||"ltr",Jo=document.documentElement.lang||navigator.language,e.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]})}function md(...e){e.map(t=>{const r=t.$code.toLowerCase();Cr.has(r)?Cr.set(r,Object.assign(Object.assign({},Cr.get(r)),t)):Cr.set(r,t),tr||(tr=t)}),gd()}function gd(){fd&&(Yo=document.documentElement.dir||"ltr",Jo=document.documentElement.lang||navigator.language),[...wo.keys()].map(e=>{typeof e.requestUpdate=="function"&&e.requestUpdate()})}let _h=class{constructor(t){this.host=t,this.host.addController(this)}hostConnected(){wo.add(this.host)}hostDisconnected(){wo.delete(this.host)}dir(){return`${this.host.dir||Yo}`.toLowerCase()}lang(){return`${this.host.lang||Jo}`.toLowerCase()}getTranslationData(t){var r,s;const i=new Intl.Locale(t.replace(/_/g,"-")),n=i?.language.toLowerCase(),o=(s=(r=i?.region)===null||r===void 0?void 0:r.toLowerCase())!==null&&s!==void 0?s:"",a=Cr.get(`${n}-${o}`),l=Cr.get(n);return{locale:i,language:n,region:o,primary:a,secondary:l}}exists(t,r){var s;const{primary:i,secondary:n}=this.getTranslationData((s=r.lang)!==null&&s!==void 0?s:this.lang());return r=Object.assign({includeFallback:!1},r),!!(i&&i[t]||n&&n[t]||r.includeFallback&&tr&&tr[t])}term(t,...r){const{primary:s,secondary:i}=this.getTranslationData(this.lang());let n;if(s&&s[t])n=s[t];else if(i&&i[t])n=i[t];else if(tr&&tr[t])n=tr[t];else return console.error(`No translation found for: ${String(t)}`),String(t);return typeof n=="function"?n(...r):n}date(t,r){return t=new Date(t),new Intl.DateTimeFormat(this.lang(),r).format(t)}number(t,r){return t=Number(t),isNaN(t)?"":new Intl.NumberFormat(this.lang(),r).format(t)}relativeTime(t,r,s){return new Intl.RelativeTimeFormat(this.lang(),s).format(t,r)}};var yd={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(e,t)=>`Go to slide ${e} of ${t}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:e=>e===0?"No options selected":e===1?"1 option selected":`${e} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:e=>`Slide ${e}`,toggleColorFormat:"Toggle color format"};md(yd);var $h=yd,Fe=class extends _h{};md($h);var ke=ie`
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
`,bd=Object.defineProperty,kh=Object.defineProperties,xh=Object.getOwnPropertyDescriptor,Sh=Object.getOwnPropertyDescriptors,Ua=Object.getOwnPropertySymbols,Ch=Object.prototype.hasOwnProperty,Eh=Object.prototype.propertyIsEnumerable,Hn=(e,t)=>(t=Symbol[e])?t:Symbol.for("Symbol."+e),Xo=e=>{throw TypeError(e)},Ha=(e,t,r)=>t in e?bd(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Gt=(e,t)=>{for(var r in t||(t={}))Ch.call(t,r)&&Ha(e,r,t[r]);if(Ua)for(var r of Ua(t))Eh.call(t,r)&&Ha(e,r,t[r]);return e},gn=(e,t)=>kh(e,Sh(t)),x=(e,t,r,s)=>{for(var i=s>1?void 0:s?xh(t,r):t,n=e.length-1,o;n>=0;n--)(o=e[n])&&(i=(s?o(t,r,i):o(i))||i);return s&&i&&bd(t,r,i),i},vd=(e,t,r)=>t.has(e)||Xo("Cannot "+r),Ah=(e,t,r)=>(vd(e,t,"read from private field"),t.get(e)),Th=(e,t,r)=>t.has(e)?Xo("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),Ph=(e,t,r,s)=>(vd(e,t,"write to private field"),t.set(e,r),r),Oh=function(e,t){this[0]=e,this[1]=t},Ih=e=>{var t=e[Hn("asyncIterator")],r=!1,s,i={};return t==null?(t=e[Hn("iterator")](),s=n=>i[n]=o=>t[n](o)):(t=t.call(e),s=n=>i[n]=o=>{if(r){if(r=!1,n==="throw")throw o;return o}return r=!0,{done:!1,value:new Oh(new Promise(a=>{var l=t[n](o);l instanceof Object||Xo("Object expected"),a(l)}),1)}}),i[Hn("iterator")]=()=>i,s("next"),"throw"in t?s("throw"):i.throw=n=>{throw n},"return"in t&&s("return"),i};const Ze=e=>(t,r)=>{r!==void 0?r.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)};const Rh={attribute:!0,type:String,converter:Dr,reflect:!1,hasChanged:Ho},Nh=(e=Rh,t,r)=>{const{kind:s,metadata:i}=r;let n=globalThis.litPropertyMetadata.get(i);if(n===void 0&&globalThis.litPropertyMetadata.set(i,n=new Map),s==="setter"&&((e=Object.create(e)).wrapped=!0),n.set(r.name,e),s==="accessor"){const{name:o}=r;return{set(a){const l=t.get.call(this);t.set.call(this,a),this.requestUpdate(o,l,e,!0,a)},init(a){return a!==void 0&&this.C(o,void 0,e,a),a}}}if(s==="setter"){const{name:o}=r;return function(a){const l=this[o];t.call(this,a),this.requestUpdate(o,l,e,!0,a)}}throw Error("Unsupported decorator location: "+s)};function A(e){return(t,r)=>typeof r=="object"?Nh(e,t,r):((s,i,n)=>{const o=i.hasOwnProperty(n);return i.constructor.createProperty(n,s),o?Object.getOwnPropertyDescriptor(i,n):void 0})(e,t,r)}function H(e){return A({...e,state:!0,attribute:!1})}function Dh(e){return(t,r)=>{const s=typeof t=="function"?t:t[r];Object.assign(s,e)}}const Lh=(e,t,r)=>(r.configurable=!0,r.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(e,t,r),r);function ce(e,t){return(r,s,i)=>{const n=o=>o.renderRoot?.querySelector(e)??null;return Lh(r,s,{get(){return n(this)}})}}var Gi,be=class extends Ee{constructor(){super(),Th(this,Gi,!1),this.initialReflectedProperties=new Map,Object.entries(this.constructor.dependencies).forEach(([e,t])=>{this.constructor.define(e,t)})}emit(e,t){const r=new CustomEvent(e,Gt({bubbles:!0,cancelable:!1,composed:!0,detail:{}},t));return this.dispatchEvent(r),r}static define(e,t=this,r={}){const s=customElements.get(e);if(!s){try{customElements.define(e,t,r)}catch{customElements.define(e,class extends t{},r)}return}let i=" (unknown version)",n=i;"version"in t&&t.version&&(i=" v"+t.version),"version"in s&&s.version&&(n=" v"+s.version),!(i&&n&&i===n)&&console.warn(`Attempted to register <${e}>${i}, but <${e}>${n} has already been registered.`)}attributeChangedCallback(e,t,r){Ah(this,Gi)||(this.constructor.elementProperties.forEach((s,i)=>{s.reflect&&this[i]!=null&&this.initialReflectedProperties.set(i,this[i])}),Ph(this,Gi,!0)),super.attributeChangedCallback(e,t,r)}willUpdate(e){super.willUpdate(e),this.initialReflectedProperties.forEach((t,r)=>{e.has(r)&&this[r]==null&&(this[r]=t)})}};Gi=new WeakMap;be.version="2.20.1";be.dependencies={};x([A()],be.prototype,"dir",2);x([A()],be.prototype,"lang",2);var Qo=class extends be{constructor(){super(...arguments),this.localize=new Fe(this)}render(){return N`
      <svg part="base" class="spinner" role="progressbar" aria-label=${this.localize.term("loading")}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `}};Qo.styles=[ke,wh];var Qr=new WeakMap,Zr=new WeakMap,es=new WeakMap,Kn=new WeakSet,Fs=new WeakMap,Cs=class{constructor(e,t){this.handleFormData=r=>{const s=this.options.disabled(this.host),i=this.options.name(this.host),n=this.options.value(this.host),o=this.host.tagName.toLowerCase()==="sl-button";this.host.isConnected&&!s&&!o&&typeof i=="string"&&i.length>0&&typeof n<"u"&&(Array.isArray(n)?n.forEach(a=>{r.formData.append(i,a.toString())}):r.formData.append(i,n.toString()))},this.handleFormSubmit=r=>{var s;const i=this.options.disabled(this.host),n=this.options.reportValidity;this.form&&!this.form.noValidate&&((s=Qr.get(this.form))==null||s.forEach(o=>{this.setUserInteracted(o,!0)})),this.form&&!this.form.noValidate&&!i&&!n(this.host)&&(r.preventDefault(),r.stopImmediatePropagation())},this.handleFormReset=()=>{this.options.setValue(this.host,this.options.defaultValue(this.host)),this.setUserInteracted(this.host,!1),Fs.set(this.host,[])},this.handleInteraction=r=>{const s=Fs.get(this.host);s.includes(r.type)||s.push(r.type),s.length===this.options.assumeInteractionOn.length&&this.setUserInteracted(this.host,!0)},this.checkFormValidity=()=>{if(this.form&&!this.form.noValidate){const r=this.form.querySelectorAll("*");for(const s of r)if(typeof s.checkValidity=="function"&&!s.checkValidity())return!1}return!0},this.reportFormValidity=()=>{if(this.form&&!this.form.noValidate){const r=this.form.querySelectorAll("*");for(const s of r)if(typeof s.reportValidity=="function"&&!s.reportValidity())return!1}return!0},(this.host=e).addController(this),this.options=Gt({form:r=>{const s=r.form;if(s){const n=r.getRootNode().querySelector(`#${s}`);if(n)return n}return r.closest("form")},name:r=>r.name,value:r=>r.value,defaultValue:r=>r.defaultValue,disabled:r=>{var s;return(s=r.disabled)!=null?s:!1},reportValidity:r=>typeof r.reportValidity=="function"?r.reportValidity():!0,checkValidity:r=>typeof r.checkValidity=="function"?r.checkValidity():!0,setValue:(r,s)=>r.value=s,assumeInteractionOn:["sl-input"]},t)}hostConnected(){const e=this.options.form(this.host);e&&this.attachForm(e),Fs.set(this.host,[]),this.options.assumeInteractionOn.forEach(t=>{this.host.addEventListener(t,this.handleInteraction)})}hostDisconnected(){this.detachForm(),Fs.delete(this.host),this.options.assumeInteractionOn.forEach(e=>{this.host.removeEventListener(e,this.handleInteraction)})}hostUpdated(){const e=this.options.form(this.host);e||this.detachForm(),e&&this.form!==e&&(this.detachForm(),this.attachForm(e)),this.host.hasUpdated&&this.setValidity(this.host.validity.valid)}attachForm(e){e?(this.form=e,Qr.has(this.form)?Qr.get(this.form).add(this.host):Qr.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),Zr.has(this.form)||(Zr.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity()),es.has(this.form)||(es.set(this.form,this.form.checkValidity),this.form.checkValidity=()=>this.checkFormValidity())):this.form=void 0}detachForm(){if(!this.form)return;const e=Qr.get(this.form);e&&(e.delete(this.host),e.size<=0&&(this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),Zr.has(this.form)&&(this.form.reportValidity=Zr.get(this.form),Zr.delete(this.form)),es.has(this.form)&&(this.form.checkValidity=es.get(this.form),es.delete(this.form)),this.form=void 0))}setUserInteracted(e,t){t?Kn.add(e):Kn.delete(e),e.requestUpdate()}doAction(e,t){if(this.form){const r=document.createElement("button");r.type=e,r.style.position="absolute",r.style.width="0",r.style.height="0",r.style.clipPath="inset(50%)",r.style.overflow="hidden",r.style.whiteSpace="nowrap",t&&(r.name=t.name,r.value=t.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach(s=>{t.hasAttribute(s)&&r.setAttribute(s,t.getAttribute(s))})),this.form.append(r),r.click(),r.remove()}}getForm(){var e;return(e=this.form)!=null?e:null}reset(e){this.doAction("reset",e)}submit(e){this.doAction("submit",e)}setValidity(e){const t=this.host,r=!!Kn.has(t),s=!!t.required;t.toggleAttribute("data-required",s),t.toggleAttribute("data-optional",!s),t.toggleAttribute("data-invalid",!e),t.toggleAttribute("data-valid",e),t.toggleAttribute("data-user-invalid",!e&&r),t.toggleAttribute("data-user-valid",e&&r)}updateValidity(){const e=this.host;this.setValidity(e.validity.valid)}emitInvalidEvent(e){const t=new CustomEvent("sl-invalid",{bubbles:!1,composed:!1,cancelable:!0,detail:{}});e||t.preventDefault(),this.host.dispatchEvent(t)||e?.preventDefault()}},Zo=Object.freeze({badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:!0,valueMissing:!1});Object.freeze(gn(Gt({},Zo),{valid:!1,valueMissing:!0}));Object.freeze(gn(Gt({},Zo),{valid:!1,customError:!0}));var zh=ie`
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
`,zt=class{constructor(e,...t){this.slotNames=[],this.handleSlotChange=r=>{const s=r.target;(this.slotNames.includes("[default]")&&!s.name||s.name&&this.slotNames.includes(s.name))&&this.host.requestUpdate()},(this.host=e).addController(this),this.slotNames=t}hasDefaultSlot(){return[...this.host.childNodes].some(e=>{if(e.nodeType===e.TEXT_NODE&&e.textContent.trim()!=="")return!0;if(e.nodeType===e.ELEMENT_NODE){const t=e;if(t.tagName.toLowerCase()==="sl-visually-hidden")return!1;if(!t.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(e){return this.host.querySelector(`:scope > [slot="${e}"]`)!==null}test(e){return e==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(e)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}};function jh(e){if(!e)return"";const t=e.assignedNodes({flatten:!0});let r="";return[...t].forEach(s=>{s.nodeType===Node.TEXT_NODE&&(r+=s.textContent)}),r}var _o="";function $o(e){_o=e}function Mh(e=""){if(!_o){const t=[...document.getElementsByTagName("script")],r=t.find(s=>s.hasAttribute("data-shoelace"));if(r)$o(r.getAttribute("data-shoelace"));else{const s=t.find(n=>/shoelace(\.min)?\.js($|\?)/.test(n.src)||/shoelace-autoloader(\.min)?\.js($|\?)/.test(n.src));let i="";s&&(i=s.getAttribute("src")),$o(i.split("/").slice(0,-1).join("/"))}}return _o.replace(/\/$/,"")+(e?`/${e.replace(/^\//,"")}`:"")}var qh={name:"default",resolver:e=>Mh(`assets/icons/${e}.svg`)},Fh=qh,Ka={caret:`
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
  `},Vh={name:"system",resolver:e=>e in Ka?`data:image/svg+xml,${encodeURIComponent(Ka[e])}`:""},Bh=Vh,Uh=[Fh,Bh],ko=[];function Hh(e){ko.push(e)}function Kh(e){ko=ko.filter(t=>t!==e)}function Wa(e){return Uh.find(t=>t.name===e)}var Wh=ie`
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
`;function de(e,t){const r=Gt({waitUntilFirstUpdate:!1},t);return(s,i)=>{const{update:n}=s,o=Array.isArray(e)?e:[e];s.update=function(a){o.forEach(l=>{const c=l;if(a.has(c)){const d=a.get(c),p=this[c];d!==p&&(!r.waitUntilFirstUpdate||this.hasUpdated)&&this[i](d,p)}}),n.call(this,a)}}}const Gh=(e,t)=>e?._$litType$!==void 0,wd=e=>e.strings===void 0,Yh={},Jh=(e,t=Yh)=>e._$AH=t;var ts=Symbol(),Vs=Symbol(),Wn,Gn=new Map,Le=class extends be{constructor(){super(...arguments),this.initialRender=!1,this.svg=null,this.label="",this.library="default"}async resolveIcon(e,t){var r;let s;if(t?.spriteSheet)return this.svg=N`<svg part="svg">
        <use part="use" href="${e}"></use>
      </svg>`,this.svg;try{if(s=await fetch(e,{mode:"cors"}),!s.ok)return s.status===410?ts:Vs}catch{return Vs}try{const i=document.createElement("div");i.innerHTML=await s.text();const n=i.firstElementChild;if(((r=n?.tagName)==null?void 0:r.toLowerCase())!=="svg")return ts;Wn||(Wn=new DOMParser);const a=Wn.parseFromString(n.outerHTML,"text/html").body.querySelector("svg");return a?(a.part.add("svg"),document.adoptNode(a)):ts}catch{return ts}}connectedCallback(){super.connectedCallback(),Hh(this)}firstUpdated(){this.initialRender=!0,this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),Kh(this)}getIconSource(){const e=Wa(this.library);return this.name&&e?{url:e.resolver(this.name),fromLibrary:!0}:{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label=="string"&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){var e;const{url:t,fromLibrary:r}=this.getIconSource(),s=r?Wa(this.library):void 0;if(!t){this.svg=null;return}let i=Gn.get(t);if(i||(i=this.resolveIcon(t,s),Gn.set(t,i)),!this.initialRender)return;const n=await i;if(n===Vs&&Gn.delete(t),t===this.getIconSource().url){if(Gh(n)){if(this.svg=n,s){await this.updateComplete;const o=this.shadowRoot.querySelector("[part='svg']");typeof s.mutator=="function"&&o&&s.mutator(o)}return}switch(n){case Vs:case ts:this.svg=null,this.emit("sl-error");break;default:this.svg=n.cloneNode(!0),(e=s?.mutator)==null||e.call(s,this.svg),this.emit("sl-load")}}}render(){return this.svg}};Le.styles=[ke,Wh];x([H()],Le.prototype,"svg",2);x([A({reflect:!0})],Le.prototype,"name",2);x([A()],Le.prototype,"src",2);x([A()],Le.prototype,"label",2);x([A({reflect:!0})],Le.prototype,"library",2);x([de("label")],Le.prototype,"handleLabelChange",1);x([de(["name","src","library"])],Le.prototype,"setIcon",1);const It={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4},yn=e=>(...t)=>({_$litDirective$:e,values:t});let bn=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,r,s){this._$Ct=t,this._$AM=r,this._$Ci=s}_$AS(t,r){return this.update(t,r)}update(t,r){return this.render(...r)}};const ve=yn(class extends bn{constructor(e){if(super(e),e.type!==It.ATTRIBUTE||e.name!=="class"||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(s=>s!=="")));for(const s in t)t[s]&&!this.nt?.has(s)&&this.st.add(s);return this.render(t)}const r=e.element.classList;for(const s of this.st)s in t||(r.remove(s),this.st.delete(s));for(const s in t){const i=!!t[s];i===this.st.has(s)||this.nt?.has(s)||(i?(r.add(s),this.st.add(s)):(r.remove(s),this.st.delete(s)))}return ot}});const _d=Symbol.for(""),Xh=e=>{if(e?.r===_d)return e?._$litStatic$},tn=(e,...t)=>({_$litStatic$:t.reduce((r,s,i)=>r+(n=>{if(n._$litStatic$!==void 0)return n._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${n}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(s)+e[i+1],e[0]),r:_d}),Ga=new Map,Qh=e=>(t,...r)=>{const s=r.length;let i,n;const o=[],a=[];let l,c=0,d=!1;for(;c<s;){for(l=t[c];c<s&&(n=r[c],(i=Xh(n))!==void 0);)l+=i+t[++c],d=!0;c!==s&&a.push(n),o.push(l),c++}if(c===s&&o.push(t[s]),d){const p=o.join("$$lit$$");(t=Ga.get(p))===void 0&&(o.raw=o,Ga.set(p,t=o)),r=a}return e(t,...r)},Yi=Qh(N);const Q=e=>e??$e;var ge=class extends be{constructor(){super(...arguments),this.formControlController=new Cs(this,{assumeInteractionOn:["click"]}),this.hasSlotController=new zt(this,"[default]","prefix","suffix"),this.localize=new Fe(this),this.hasFocus=!1,this.invalid=!1,this.title="",this.variant="default",this.size="medium",this.caret=!1,this.disabled=!1,this.loading=!1,this.outline=!1,this.pill=!1,this.circle=!1,this.type="button",this.name="",this.value="",this.href="",this.rel="noreferrer noopener"}get validity(){return this.isButton()?this.button.validity:Zo}get validationMessage(){return this.isButton()?this.button.validationMessage:""}firstUpdated(){this.isButton()&&this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(){this.type==="submit"&&this.formControlController.submit(this),this.type==="reset"&&this.formControlController.reset(this)}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.isButton()&&this.formControlController.setValidity(this.disabled)}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}checkValidity(){return this.isButton()?this.button.checkValidity():!0}getForm(){return this.formControlController.getForm()}reportValidity(){return this.isButton()?this.button.reportValidity():!0}setCustomValidity(e){this.isButton()&&(this.button.setCustomValidity(e),this.formControlController.updateValidity())}render(){const e=this.isLink(),t=e?tn`a`:tn`button`;return Yi`
      <${t}
        part="base"
        class=${ve({button:!0,"button--default":this.variant==="default","button--primary":this.variant==="primary","button--success":this.variant==="success","button--neutral":this.variant==="neutral","button--warning":this.variant==="warning","button--danger":this.variant==="danger","button--text":this.variant==="text","button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--caret":this.caret,"button--circle":this.circle,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--loading":this.loading,"button--standard":!this.outline,"button--outline":this.outline,"button--pill":this.pill,"button--rtl":this.localize.dir()==="rtl","button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
        ?disabled=${Q(e?void 0:this.disabled)}
        type=${Q(e?void 0:this.type)}
        title=${this.title}
        name=${Q(e?void 0:this.name)}
        value=${Q(e?void 0:this.value)}
        href=${Q(e&&!this.disabled?this.href:void 0)}
        target=${Q(e?this.target:void 0)}
        download=${Q(e?this.download:void 0)}
        rel=${Q(e?this.rel:void 0)}
        role=${Q(e?void 0:"button")}
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
        ${this.caret?Yi` <sl-icon part="caret" class="button__caret" library="system" name="caret"></sl-icon> `:""}
        ${this.loading?Yi`<sl-spinner part="spinner"></sl-spinner>`:""}
      </${t}>
    `}};ge.styles=[ke,zh];ge.dependencies={"sl-icon":Le,"sl-spinner":Qo};x([ce(".button")],ge.prototype,"button",2);x([H()],ge.prototype,"hasFocus",2);x([H()],ge.prototype,"invalid",2);x([A()],ge.prototype,"title",2);x([A({reflect:!0})],ge.prototype,"variant",2);x([A({reflect:!0})],ge.prototype,"size",2);x([A({type:Boolean,reflect:!0})],ge.prototype,"caret",2);x([A({type:Boolean,reflect:!0})],ge.prototype,"disabled",2);x([A({type:Boolean,reflect:!0})],ge.prototype,"loading",2);x([A({type:Boolean,reflect:!0})],ge.prototype,"outline",2);x([A({type:Boolean,reflect:!0})],ge.prototype,"pill",2);x([A({type:Boolean,reflect:!0})],ge.prototype,"circle",2);x([A()],ge.prototype,"type",2);x([A()],ge.prototype,"name",2);x([A()],ge.prototype,"value",2);x([A()],ge.prototype,"href",2);x([A()],ge.prototype,"target",2);x([A()],ge.prototype,"rel",2);x([A()],ge.prototype,"download",2);x([A()],ge.prototype,"form",2);x([A({attribute:"formaction"})],ge.prototype,"formAction",2);x([A({attribute:"formenctype"})],ge.prototype,"formEnctype",2);x([A({attribute:"formmethod"})],ge.prototype,"formMethod",2);x([A({attribute:"formnovalidate",type:Boolean})],ge.prototype,"formNoValidate",2);x([A({attribute:"formtarget"})],ge.prototype,"formTarget",2);x([de("disabled",{waitUntilFirstUpdate:!0})],ge.prototype,"handleDisabledChange",1);ge.define("sl-button");var Zh=ie`
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
`,ea=(e="value")=>(t,r)=>{const s=t.constructor,i=s.prototype.attributeChangedCallback;s.prototype.attributeChangedCallback=function(n,o,a){var l;const c=s.getPropertyOptions(e),d=typeof c.attribute=="string"?c.attribute:e;if(n===d){const p=c.converter||Dr,h=(typeof p=="function"?p:(l=p?.fromAttribute)!=null?l:Dr.fromAttribute)(a,c.type);this[e]!==h&&(this[r]=h)}i.call(this,n,o,a)}},vn=ie`
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
`;const rn=yn(class extends bn{constructor(e){if(super(e),e.type!==It.PROPERTY&&e.type!==It.ATTRIBUTE&&e.type!==It.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!wd(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===ot||t===$e)return t;const r=e.element,s=e.name;if(e.type===It.PROPERTY){if(t===r[s])return ot}else if(e.type===It.BOOLEAN_ATTRIBUTE){if(!!t===r.hasAttribute(s))return ot}else if(e.type===It.ATTRIBUTE&&r.getAttribute(s)===t+"")return ot;return Jh(e),t}});var re=class extends be{constructor(){super(...arguments),this.formControlController=new Cs(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new zt(this,"help-text","label"),this.localize=new Fe(this),this.hasFocus=!1,this.title="",this.__numberInput=Object.assign(document.createElement("input"),{type:"number"}),this.__dateInput=Object.assign(document.createElement("input"),{type:"date"}),this.type="text",this.name="",this.value="",this.defaultValue="",this.size="medium",this.filled=!1,this.pill=!1,this.label="",this.helpText="",this.clearable=!1,this.disabled=!1,this.placeholder="",this.readonly=!1,this.passwordToggle=!1,this.passwordVisible=!1,this.noSpinButtons=!1,this.form="",this.required=!1,this.spellcheck=!0}get valueAsDate(){var e;return this.__dateInput.type=this.type,this.__dateInput.value=this.value,((e=this.input)==null?void 0:e.valueAsDate)||this.__dateInput.valueAsDate}set valueAsDate(e){this.__dateInput.type=this.type,this.__dateInput.valueAsDate=e,this.value=this.__dateInput.value}get valueAsNumber(){var e;return this.__numberInput.value=this.value,((e=this.input)==null?void 0:e.valueAsNumber)||this.__numberInput.valueAsNumber}set valueAsNumber(e){this.__numberInput.valueAsNumber=e,this.value=this.__numberInput.value}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleChange(){this.value=this.input.value,this.emit("sl-change")}handleClearClick(e){e.preventDefault(),this.value!==""&&(this.value="",this.emit("sl-clear"),this.emit("sl-input"),this.emit("sl-change")),this.input.focus()}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleInput(){this.value=this.input.value,this.formControlController.updateValidity(),this.emit("sl-input")}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleKeyDown(e){const t=e.metaKey||e.ctrlKey||e.shiftKey||e.altKey;e.key==="Enter"&&!t&&setTimeout(()=>{!e.defaultPrevented&&!e.isComposing&&this.formControlController.submit()})}handlePasswordToggle(){this.passwordVisible=!this.passwordVisible}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStepChange(){this.input.step=String(this.step),this.formControlController.updateValidity()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity()}focus(e){this.input.focus(e)}blur(){this.input.blur()}select(){this.input.select()}setSelectionRange(e,t,r="none"){this.input.setSelectionRange(e,t,r)}setRangeText(e,t,r,s="preserve"){const i=t??this.input.selectionStart,n=r??this.input.selectionEnd;this.input.setRangeText(e,i,n,s),this.value!==this.input.value&&(this.value=this.input.value)}showPicker(){"showPicker"in HTMLInputElement.prototype&&this.input.showPicker()}stepUp(){this.input.stepUp(),this.value!==this.input.value&&(this.value=this.input.value)}stepDown(){this.input.stepDown(),this.value!==this.input.value&&(this.value=this.input.value)}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){const e=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),r=this.label?!0:!!e,s=this.helpText?!0:!!t,n=this.clearable&&!this.disabled&&!this.readonly&&(typeof this.value=="number"||this.value.length>0);return N`
      <div
        part="form-control"
        class=${ve({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":r,"form-control--has-help-text":s})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${r?"false":"true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${ve({input:!0,"input--small":this.size==="small","input--medium":this.size==="medium","input--large":this.size==="large","input--pill":this.pill,"input--standard":!this.filled,"input--filled":this.filled,"input--disabled":this.disabled,"input--focused":this.hasFocus,"input--empty":!this.value,"input--no-spin-buttons":this.noSpinButtons})}
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
              name=${Q(this.name)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${Q(this.placeholder)}
              minlength=${Q(this.minlength)}
              maxlength=${Q(this.maxlength)}
              min=${Q(this.min)}
              max=${Q(this.max)}
              step=${Q(this.step)}
              .value=${rn(this.value)}
              autocapitalize=${Q(this.autocapitalize)}
              autocomplete=${Q(this.autocomplete)}
              autocorrect=${Q(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${this.spellcheck}
              pattern=${Q(this.pattern)}
              enterkeyhint=${Q(this.enterkeyhint)}
              inputmode=${Q(this.inputmode)}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @keydown=${this.handleKeyDown}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            />

            ${n?N`
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
            ${this.passwordToggle&&!this.disabled?N`
                  <button
                    part="password-toggle-button"
                    class="input__password-toggle"
                    type="button"
                    aria-label=${this.localize.term(this.passwordVisible?"hidePassword":"showPassword")}
                    @click=${this.handlePasswordToggle}
                    tabindex="-1"
                  >
                    ${this.passwordVisible?N`
                          <slot name="show-password-icon">
                            <sl-icon name="eye-slash" library="system"></sl-icon>
                          </slot>
                        `:N`
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
          aria-hidden=${s?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};re.styles=[ke,vn,Zh];re.dependencies={"sl-icon":Le};x([ce(".input__control")],re.prototype,"input",2);x([H()],re.prototype,"hasFocus",2);x([A()],re.prototype,"title",2);x([A({reflect:!0})],re.prototype,"type",2);x([A()],re.prototype,"name",2);x([A()],re.prototype,"value",2);x([ea()],re.prototype,"defaultValue",2);x([A({reflect:!0})],re.prototype,"size",2);x([A({type:Boolean,reflect:!0})],re.prototype,"filled",2);x([A({type:Boolean,reflect:!0})],re.prototype,"pill",2);x([A()],re.prototype,"label",2);x([A({attribute:"help-text"})],re.prototype,"helpText",2);x([A({type:Boolean})],re.prototype,"clearable",2);x([A({type:Boolean,reflect:!0})],re.prototype,"disabled",2);x([A()],re.prototype,"placeholder",2);x([A({type:Boolean,reflect:!0})],re.prototype,"readonly",2);x([A({attribute:"password-toggle",type:Boolean})],re.prototype,"passwordToggle",2);x([A({attribute:"password-visible",type:Boolean})],re.prototype,"passwordVisible",2);x([A({attribute:"no-spin-buttons",type:Boolean})],re.prototype,"noSpinButtons",2);x([A({reflect:!0})],re.prototype,"form",2);x([A({type:Boolean,reflect:!0})],re.prototype,"required",2);x([A()],re.prototype,"pattern",2);x([A({type:Number})],re.prototype,"minlength",2);x([A({type:Number})],re.prototype,"maxlength",2);x([A()],re.prototype,"min",2);x([A()],re.prototype,"max",2);x([A()],re.prototype,"step",2);x([A()],re.prototype,"autocapitalize",2);x([A()],re.prototype,"autocorrect",2);x([A()],re.prototype,"autocomplete",2);x([A({type:Boolean})],re.prototype,"autofocus",2);x([A()],re.prototype,"enterkeyhint",2);x([A({type:Boolean,converter:{fromAttribute:e=>!(!e||e==="false"),toAttribute:e=>e?"true":"false"}})],re.prototype,"spellcheck",2);x([A()],re.prototype,"inputmode",2);x([de("disabled",{waitUntilFirstUpdate:!0})],re.prototype,"handleDisabledChange",1);x([de("step",{waitUntilFirstUpdate:!0})],re.prototype,"handleStepChange",1);x([de("value",{waitUntilFirstUpdate:!0})],re.prototype,"handleValueChange",1);re.define("sl-input");var ep=ie`
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
`,tp=ie`
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
`,Ae=class extends be{constructor(){super(...arguments),this.hasFocus=!1,this.label="",this.disabled=!1}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(e){this.disabled&&(e.preventDefault(),e.stopPropagation())}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}render(){const e=!!this.href,t=e?tn`a`:tn`button`;return Yi`
      <${t}
        part="base"
        class=${ve({"icon-button":!0,"icon-button--disabled":!e&&this.disabled,"icon-button--focused":this.hasFocus})}
        ?disabled=${Q(e?void 0:this.disabled)}
        type=${Q(e?void 0:"button")}
        href=${Q(e?this.href:void 0)}
        target=${Q(e?this.target:void 0)}
        download=${Q(e?this.download:void 0)}
        rel=${Q(e&&this.target?"noreferrer noopener":void 0)}
        role=${Q(e?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        aria-label="${this.label}"
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <sl-icon
          class="icon-button__icon"
          name=${Q(this.name)}
          library=${Q(this.library)}
          src=${Q(this.src)}
          aria-hidden="true"
        ></sl-icon>
      </${t}>
    `}};Ae.styles=[ke,tp];Ae.dependencies={"sl-icon":Le};x([ce(".icon-button")],Ae.prototype,"button",2);x([H()],Ae.prototype,"hasFocus",2);x([A()],Ae.prototype,"name",2);x([A()],Ae.prototype,"library",2);x([A()],Ae.prototype,"src",2);x([A()],Ae.prototype,"href",2);x([A()],Ae.prototype,"target",2);x([A()],Ae.prototype,"download",2);x([A()],Ae.prototype,"label",2);x([A({type:Boolean,reflect:!0})],Ae.prototype,"disabled",2);var pr=class extends be{constructor(){super(...arguments),this.localize=new Fe(this),this.variant="neutral",this.size="medium",this.pill=!1,this.removable=!1}handleRemoveClick(){this.emit("sl-remove")}render(){return N`
      <span
        part="base"
        class=${ve({tag:!0,"tag--primary":this.variant==="primary","tag--success":this.variant==="success","tag--neutral":this.variant==="neutral","tag--warning":this.variant==="warning","tag--danger":this.variant==="danger","tag--text":this.variant==="text","tag--small":this.size==="small","tag--medium":this.size==="medium","tag--large":this.size==="large","tag--pill":this.pill,"tag--removable":this.removable})}
      >
        <slot part="content" class="tag__content"></slot>

        ${this.removable?N`
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
    `}};pr.styles=[ke,ep];pr.dependencies={"sl-icon-button":Ae};x([A({reflect:!0})],pr.prototype,"variant",2);x([A({reflect:!0})],pr.prototype,"size",2);x([A({type:Boolean,reflect:!0})],pr.prototype,"pill",2);x([A({type:Boolean})],pr.prototype,"removable",2);var rp=ie`
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
`;function sp(e,t){return{top:Math.round(e.getBoundingClientRect().top-t.getBoundingClientRect().top),left:Math.round(e.getBoundingClientRect().left-t.getBoundingClientRect().left)}}var xo=new Set;function ip(){const e=document.documentElement.clientWidth;return Math.abs(window.innerWidth-e)}function np(){const e=Number(getComputedStyle(document.body).paddingRight.replace(/px/,""));return isNaN(e)||!e?0:e}function Ya(e){if(xo.add(e),!document.documentElement.classList.contains("sl-scroll-lock")){const t=ip()+np();let r=getComputedStyle(document.documentElement).scrollbarGutter;(!r||r==="auto")&&(r="stable"),t<2&&(r=""),document.documentElement.style.setProperty("--sl-scroll-lock-gutter",r),document.documentElement.classList.add("sl-scroll-lock"),document.documentElement.style.setProperty("--sl-scroll-lock-size",`${t}px`)}}function Ja(e){xo.delete(e),xo.size===0&&(document.documentElement.classList.remove("sl-scroll-lock"),document.documentElement.style.removeProperty("--sl-scroll-lock-size"))}function So(e,t,r="vertical",s="smooth"){const i=sp(e,t),n=i.top+t.scrollTop,o=i.left+t.scrollLeft,a=t.scrollLeft,l=t.scrollLeft+t.offsetWidth,c=t.scrollTop,d=t.scrollTop+t.offsetHeight;(r==="horizontal"||r==="both")&&(o<a?t.scrollTo({left:o,behavior:s}):o+e.clientWidth>l&&t.scrollTo({left:o-t.offsetWidth+e.clientWidth,behavior:s})),(r==="vertical"||r==="both")&&(n<c?t.scrollTo({top:n,behavior:s}):n+e.clientHeight>d&&t.scrollTo({top:n-t.offsetHeight+e.clientHeight,behavior:s}))}var op=ie`
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
`;const Ut=Math.min,Ke=Math.max,sn=Math.round,Bs=Math.floor,$t=e=>({x:e,y:e}),ap={left:"right",right:"left",bottom:"top",top:"bottom"},lp={start:"end",end:"start"};function Co(e,t,r){return Ke(e,Ut(t,r))}function Vr(e,t){return typeof e=="function"?e(t):e}function Ht(e){return e.split("-")[0]}function Br(e){return e.split("-")[1]}function $d(e){return e==="x"?"y":"x"}function ta(e){return e==="y"?"height":"width"}const cp=new Set(["top","bottom"]);function Rt(e){return cp.has(Ht(e))?"y":"x"}function ra(e){return $d(Rt(e))}function dp(e,t,r){r===void 0&&(r=!1);const s=Br(e),i=ra(e),n=ta(i);let o=i==="x"?s===(r?"end":"start")?"right":"left":s==="start"?"bottom":"top";return t.reference[n]>t.floating[n]&&(o=nn(o)),[o,nn(o)]}function up(e){const t=nn(e);return[Eo(e),t,Eo(t)]}function Eo(e){return e.replace(/start|end/g,t=>lp[t])}const Xa=["left","right"],Qa=["right","left"],hp=["top","bottom"],pp=["bottom","top"];function fp(e,t,r){switch(e){case"top":case"bottom":return r?t?Qa:Xa:t?Xa:Qa;case"left":case"right":return t?hp:pp;default:return[]}}function mp(e,t,r,s){const i=Br(e);let n=fp(Ht(e),r==="start",s);return i&&(n=n.map(o=>o+"-"+i),t&&(n=n.concat(n.map(Eo)))),n}function nn(e){return e.replace(/left|right|bottom|top/g,t=>ap[t])}function gp(e){return{top:0,right:0,bottom:0,left:0,...e}}function kd(e){return typeof e!="number"?gp(e):{top:e,right:e,bottom:e,left:e}}function on(e){const{x:t,y:r,width:s,height:i}=e;return{width:s,height:i,top:r,left:t,right:t+s,bottom:r+i,x:t,y:r}}function Za(e,t,r){let{reference:s,floating:i}=e;const n=Rt(t),o=ra(t),a=ta(o),l=Ht(t),c=n==="y",d=s.x+s.width/2-i.width/2,p=s.y+s.height/2-i.height/2,u=s[a]/2-i[a]/2;let h;switch(l){case"top":h={x:d,y:s.y-i.height};break;case"bottom":h={x:d,y:s.y+s.height};break;case"right":h={x:s.x+s.width,y:p};break;case"left":h={x:s.x-i.width,y:p};break;default:h={x:s.x,y:s.y}}switch(Br(t)){case"start":h[o]-=u*(r&&c?-1:1);break;case"end":h[o]+=u*(r&&c?-1:1);break}return h}async function yp(e,t){var r;t===void 0&&(t={});const{x:s,y:i,platform:n,rects:o,elements:a,strategy:l}=e,{boundary:c="clippingAncestors",rootBoundary:d="viewport",elementContext:p="floating",altBoundary:u=!1,padding:h=0}=Vr(t,e),y=kd(h),f=a[u?p==="floating"?"reference":"floating":p],w=on(await n.getClippingRect({element:(r=await(n.isElement==null?void 0:n.isElement(f)))==null||r?f:f.contextElement||await(n.getDocumentElement==null?void 0:n.getDocumentElement(a.floating)),boundary:c,rootBoundary:d,strategy:l})),m=p==="floating"?{x:s,y:i,width:o.floating.width,height:o.floating.height}:o.reference,v=await(n.getOffsetParent==null?void 0:n.getOffsetParent(a.floating)),$=await(n.isElement==null?void 0:n.isElement(v))?await(n.getScale==null?void 0:n.getScale(v))||{x:1,y:1}:{x:1,y:1},b=on(n.convertOffsetParentRelativeRectToViewportRelativeRect?await n.convertOffsetParentRelativeRectToViewportRelativeRect({elements:a,rect:m,offsetParent:v,strategy:l}):m);return{top:(w.top-b.top+y.top)/$.y,bottom:(b.bottom-w.bottom+y.bottom)/$.y,left:(w.left-b.left+y.left)/$.x,right:(b.right-w.right+y.right)/$.x}}const bp=async(e,t,r)=>{const{placement:s="bottom",strategy:i="absolute",middleware:n=[],platform:o}=r,a=n.filter(Boolean),l=await(o.isRTL==null?void 0:o.isRTL(t));let c=await o.getElementRects({reference:e,floating:t,strategy:i}),{x:d,y:p}=Za(c,s,l),u=s,h={},y=0;for(let f=0;f<a.length;f++){var g;const{name:w,fn:m}=a[f],{x:v,y:$,data:b,reset:_}=await m({x:d,y:p,initialPlacement:s,placement:u,strategy:i,middlewareData:h,rects:c,platform:{...o,detectOverflow:(g=o.detectOverflow)!=null?g:yp},elements:{reference:e,floating:t}});d=v??d,p=$??p,h={...h,[w]:{...h[w],...b}},_&&y<=50&&(y++,typeof _=="object"&&(_.placement&&(u=_.placement),_.rects&&(c=_.rects===!0?await o.getElementRects({reference:e,floating:t,strategy:i}):_.rects),{x:d,y:p}=Za(c,u,l)),f=-1)}return{x:d,y:p,placement:u,strategy:i,middlewareData:h}},vp=e=>({name:"arrow",options:e,async fn(t){const{x:r,y:s,placement:i,rects:n,platform:o,elements:a,middlewareData:l}=t,{element:c,padding:d=0}=Vr(e,t)||{};if(c==null)return{};const p=kd(d),u={x:r,y:s},h=ra(i),y=ta(h),g=await o.getDimensions(c),f=h==="y",w=f?"top":"left",m=f?"bottom":"right",v=f?"clientHeight":"clientWidth",$=n.reference[y]+n.reference[h]-u[h]-n.floating[y],b=u[h]-n.reference[h],_=await(o.getOffsetParent==null?void 0:o.getOffsetParent(c));let S=_?_[v]:0;(!S||!await(o.isElement==null?void 0:o.isElement(_)))&&(S=a.floating[v]||n.floating[y]);const C=$/2-b/2,O=S/2-g[y]/2-1,M=Ut(p[w],O),D=Ut(p[m],O),z=M,B=S-g[y]-D,V=S/2-g[y]/2+C,X=Co(z,V,B),ae=!l.arrow&&Br(i)!=null&&V!==X&&n.reference[y]/2-(V<z?M:D)-g[y]/2<0,Z=ae?V<z?V-z:V-B:0;return{[h]:u[h]+Z,data:{[h]:X,centerOffset:V-X-Z,...ae&&{alignmentOffset:Z}},reset:ae}}}),wp=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var r,s;const{placement:i,middlewareData:n,rects:o,initialPlacement:a,platform:l,elements:c}=t,{mainAxis:d=!0,crossAxis:p=!0,fallbackPlacements:u,fallbackStrategy:h="bestFit",fallbackAxisSideDirection:y="none",flipAlignment:g=!0,...f}=Vr(e,t);if((r=n.arrow)!=null&&r.alignmentOffset)return{};const w=Ht(i),m=Rt(a),v=Ht(a)===a,$=await(l.isRTL==null?void 0:l.isRTL(c.floating)),b=u||(v||!g?[nn(a)]:up(a)),_=y!=="none";!u&&_&&b.push(...mp(a,g,y,$));const S=[a,...b],C=await l.detectOverflow(t,f),O=[];let M=((s=n.flip)==null?void 0:s.overflows)||[];if(d&&O.push(C[w]),p){const V=dp(i,o,$);O.push(C[V[0]],C[V[1]])}if(M=[...M,{placement:i,overflows:O}],!O.every(V=>V<=0)){var D,z;const V=(((D=n.flip)==null?void 0:D.index)||0)+1,X=S[V];if(X&&(!(p==="alignment"?m!==Rt(X):!1)||M.every(J=>Rt(J.placement)===m?J.overflows[0]>0:!0)))return{data:{index:V,overflows:M},reset:{placement:X}};let ae=(z=M.filter(Z=>Z.overflows[0]<=0).sort((Z,J)=>Z.overflows[1]-J.overflows[1])[0])==null?void 0:z.placement;if(!ae)switch(h){case"bestFit":{var B;const Z=(B=M.filter(J=>{if(_){const fe=Rt(J.placement);return fe===m||fe==="y"}return!0}).map(J=>[J.placement,J.overflows.filter(fe=>fe>0).reduce((fe,F)=>fe+F,0)]).sort((J,fe)=>J[1]-fe[1])[0])==null?void 0:B[0];Z&&(ae=Z);break}case"initialPlacement":ae=a;break}if(i!==ae)return{reset:{placement:ae}}}return{}}}},_p=new Set(["left","top"]);async function $p(e,t){const{placement:r,platform:s,elements:i}=e,n=await(s.isRTL==null?void 0:s.isRTL(i.floating)),o=Ht(r),a=Br(r),l=Rt(r)==="y",c=_p.has(o)?-1:1,d=n&&l?-1:1,p=Vr(t,e);let{mainAxis:u,crossAxis:h,alignmentAxis:y}=typeof p=="number"?{mainAxis:p,crossAxis:0,alignmentAxis:null}:{mainAxis:p.mainAxis||0,crossAxis:p.crossAxis||0,alignmentAxis:p.alignmentAxis};return a&&typeof y=="number"&&(h=a==="end"?y*-1:y),l?{x:h*d,y:u*c}:{x:u*c,y:h*d}}const kp=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){var r,s;const{x:i,y:n,placement:o,middlewareData:a}=t,l=await $p(t,e);return o===((r=a.offset)==null?void 0:r.placement)&&(s=a.arrow)!=null&&s.alignmentOffset?{}:{x:i+l.x,y:n+l.y,data:{...l,placement:o}}}}},xp=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){const{x:r,y:s,placement:i,platform:n}=t,{mainAxis:o=!0,crossAxis:a=!1,limiter:l={fn:w=>{let{x:m,y:v}=w;return{x:m,y:v}}},...c}=Vr(e,t),d={x:r,y:s},p=await n.detectOverflow(t,c),u=Rt(Ht(i)),h=$d(u);let y=d[h],g=d[u];if(o){const w=h==="y"?"top":"left",m=h==="y"?"bottom":"right",v=y+p[w],$=y-p[m];y=Co(v,y,$)}if(a){const w=u==="y"?"top":"left",m=u==="y"?"bottom":"right",v=g+p[w],$=g-p[m];g=Co(v,g,$)}const f=l.fn({...t,[h]:y,[u]:g});return{...f,data:{x:f.x-r,y:f.y-s,enabled:{[h]:o,[u]:a}}}}}},Sp=function(e){return e===void 0&&(e={}),{name:"size",options:e,async fn(t){var r,s;const{placement:i,rects:n,platform:o,elements:a}=t,{apply:l=()=>{},...c}=Vr(e,t),d=await o.detectOverflow(t,c),p=Ht(i),u=Br(i),h=Rt(i)==="y",{width:y,height:g}=n.floating;let f,w;p==="top"||p==="bottom"?(f=p,w=u===(await(o.isRTL==null?void 0:o.isRTL(a.floating))?"start":"end")?"left":"right"):(w=p,f=u==="end"?"top":"bottom");const m=g-d.top-d.bottom,v=y-d.left-d.right,$=Ut(g-d[f],m),b=Ut(y-d[w],v),_=!t.middlewareData.shift;let S=$,C=b;if((r=t.middlewareData.shift)!=null&&r.enabled.x&&(C=v),(s=t.middlewareData.shift)!=null&&s.enabled.y&&(S=m),_&&!u){const M=Ke(d.left,0),D=Ke(d.right,0),z=Ke(d.top,0),B=Ke(d.bottom,0);h?C=y-2*(M!==0||D!==0?M+D:Ke(d.left,d.right)):S=g-2*(z!==0||B!==0?z+B:Ke(d.top,d.bottom))}await l({...t,availableWidth:C,availableHeight:S});const O=await o.getDimensions(a.floating);return y!==O.width||g!==O.height?{reset:{rects:!0}}:{}}}};function wn(){return typeof window<"u"}function Ur(e){return xd(e)?(e.nodeName||"").toLowerCase():"#document"}function Je(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function Ct(e){var t;return(t=(xd(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function xd(e){return wn()?e instanceof Node||e instanceof Je(e).Node:!1}function ft(e){return wn()?e instanceof Element||e instanceof Je(e).Element:!1}function kt(e){return wn()?e instanceof HTMLElement||e instanceof Je(e).HTMLElement:!1}function el(e){return!wn()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof Je(e).ShadowRoot}const Cp=new Set(["inline","contents"]);function Es(e){const{overflow:t,overflowX:r,overflowY:s,display:i}=mt(e);return/auto|scroll|overlay|hidden|clip/.test(t+s+r)&&!Cp.has(i)}const Ep=new Set(["table","td","th"]);function Ap(e){return Ep.has(Ur(e))}const Tp=[":popover-open",":modal"];function _n(e){return Tp.some(t=>{try{return e.matches(t)}catch{return!1}})}const Pp=["transform","translate","scale","rotate","perspective"],Op=["transform","translate","scale","rotate","perspective","filter"],Ip=["paint","layout","strict","content"];function $n(e){const t=sa(),r=ft(e)?mt(e):e;return Pp.some(s=>r[s]?r[s]!=="none":!1)||(r.containerType?r.containerType!=="normal":!1)||!t&&(r.backdropFilter?r.backdropFilter!=="none":!1)||!t&&(r.filter?r.filter!=="none":!1)||Op.some(s=>(r.willChange||"").includes(s))||Ip.some(s=>(r.contain||"").includes(s))}function Rp(e){let t=Kt(e);for(;kt(t)&&!zr(t);){if($n(t))return t;if(_n(t))return null;t=Kt(t)}return null}function sa(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}const Np=new Set(["html","body","#document"]);function zr(e){return Np.has(Ur(e))}function mt(e){return Je(e).getComputedStyle(e)}function kn(e){return ft(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function Kt(e){if(Ur(e)==="html")return e;const t=e.assignedSlot||e.parentNode||el(e)&&e.host||Ct(e);return el(t)?t.host:t}function Sd(e){const t=Kt(e);return zr(t)?e.ownerDocument?e.ownerDocument.body:e.body:kt(t)&&Es(t)?t:Sd(t)}function vs(e,t,r){var s;t===void 0&&(t=[]),r===void 0&&(r=!0);const i=Sd(e),n=i===((s=e.ownerDocument)==null?void 0:s.body),o=Je(i);if(n){const a=Ao(o);return t.concat(o,o.visualViewport||[],Es(i)?i:[],a&&r?vs(a):[])}return t.concat(i,vs(i,[],r))}function Ao(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function Cd(e){const t=mt(e);let r=parseFloat(t.width)||0,s=parseFloat(t.height)||0;const i=kt(e),n=i?e.offsetWidth:r,o=i?e.offsetHeight:s,a=sn(r)!==n||sn(s)!==o;return a&&(r=n,s=o),{width:r,height:s,$:a}}function ia(e){return ft(e)?e:e.contextElement}function Ir(e){const t=ia(e);if(!kt(t))return $t(1);const r=t.getBoundingClientRect(),{width:s,height:i,$:n}=Cd(t);let o=(n?sn(r.width):r.width)/s,a=(n?sn(r.height):r.height)/i;return(!o||!Number.isFinite(o))&&(o=1),(!a||!Number.isFinite(a))&&(a=1),{x:o,y:a}}const Dp=$t(0);function Ed(e){const t=Je(e);return!sa()||!t.visualViewport?Dp:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function Lp(e,t,r){return t===void 0&&(t=!1),!r||t&&r!==Je(e)?!1:t}function or(e,t,r,s){t===void 0&&(t=!1),r===void 0&&(r=!1);const i=e.getBoundingClientRect(),n=ia(e);let o=$t(1);t&&(s?ft(s)&&(o=Ir(s)):o=Ir(e));const a=Lp(n,r,s)?Ed(n):$t(0);let l=(i.left+a.x)/o.x,c=(i.top+a.y)/o.y,d=i.width/o.x,p=i.height/o.y;if(n){const u=Je(n),h=s&&ft(s)?Je(s):s;let y=u,g=Ao(y);for(;g&&s&&h!==y;){const f=Ir(g),w=g.getBoundingClientRect(),m=mt(g),v=w.left+(g.clientLeft+parseFloat(m.paddingLeft))*f.x,$=w.top+(g.clientTop+parseFloat(m.paddingTop))*f.y;l*=f.x,c*=f.y,d*=f.x,p*=f.y,l+=v,c+=$,y=Je(g),g=Ao(y)}}return on({width:d,height:p,x:l,y:c})}function xn(e,t){const r=kn(e).scrollLeft;return t?t.left+r:or(Ct(e)).left+r}function Ad(e,t){const r=e.getBoundingClientRect(),s=r.left+t.scrollLeft-xn(e,r),i=r.top+t.scrollTop;return{x:s,y:i}}function zp(e){let{elements:t,rect:r,offsetParent:s,strategy:i}=e;const n=i==="fixed",o=Ct(s),a=t?_n(t.floating):!1;if(s===o||a&&n)return r;let l={scrollLeft:0,scrollTop:0},c=$t(1);const d=$t(0),p=kt(s);if((p||!p&&!n)&&((Ur(s)!=="body"||Es(o))&&(l=kn(s)),kt(s))){const h=or(s);c=Ir(s),d.x=h.x+s.clientLeft,d.y=h.y+s.clientTop}const u=o&&!p&&!n?Ad(o,l):$t(0);return{width:r.width*c.x,height:r.height*c.y,x:r.x*c.x-l.scrollLeft*c.x+d.x+u.x,y:r.y*c.y-l.scrollTop*c.y+d.y+u.y}}function jp(e){return Array.from(e.getClientRects())}function Mp(e){const t=Ct(e),r=kn(e),s=e.ownerDocument.body,i=Ke(t.scrollWidth,t.clientWidth,s.scrollWidth,s.clientWidth),n=Ke(t.scrollHeight,t.clientHeight,s.scrollHeight,s.clientHeight);let o=-r.scrollLeft+xn(e);const a=-r.scrollTop;return mt(s).direction==="rtl"&&(o+=Ke(t.clientWidth,s.clientWidth)-i),{width:i,height:n,x:o,y:a}}const tl=25;function qp(e,t){const r=Je(e),s=Ct(e),i=r.visualViewport;let n=s.clientWidth,o=s.clientHeight,a=0,l=0;if(i){n=i.width,o=i.height;const d=sa();(!d||d&&t==="fixed")&&(a=i.offsetLeft,l=i.offsetTop)}const c=xn(s);if(c<=0){const d=s.ownerDocument,p=d.body,u=getComputedStyle(p),h=d.compatMode==="CSS1Compat"&&parseFloat(u.marginLeft)+parseFloat(u.marginRight)||0,y=Math.abs(s.clientWidth-p.clientWidth-h);y<=tl&&(n-=y)}else c<=tl&&(n+=c);return{width:n,height:o,x:a,y:l}}const Fp=new Set(["absolute","fixed"]);function Vp(e,t){const r=or(e,!0,t==="fixed"),s=r.top+e.clientTop,i=r.left+e.clientLeft,n=kt(e)?Ir(e):$t(1),o=e.clientWidth*n.x,a=e.clientHeight*n.y,l=i*n.x,c=s*n.y;return{width:o,height:a,x:l,y:c}}function rl(e,t,r){let s;if(t==="viewport")s=qp(e,r);else if(t==="document")s=Mp(Ct(e));else if(ft(t))s=Vp(t,r);else{const i=Ed(e);s={x:t.x-i.x,y:t.y-i.y,width:t.width,height:t.height}}return on(s)}function Td(e,t){const r=Kt(e);return r===t||!ft(r)||zr(r)?!1:mt(r).position==="fixed"||Td(r,t)}function Bp(e,t){const r=t.get(e);if(r)return r;let s=vs(e,[],!1).filter(a=>ft(a)&&Ur(a)!=="body"),i=null;const n=mt(e).position==="fixed";let o=n?Kt(e):e;for(;ft(o)&&!zr(o);){const a=mt(o),l=$n(o);!l&&a.position==="fixed"&&(i=null),(n?!l&&!i:!l&&a.position==="static"&&!!i&&Fp.has(i.position)||Es(o)&&!l&&Td(e,o))?s=s.filter(d=>d!==o):i=a,o=Kt(o)}return t.set(e,s),s}function Up(e){let{element:t,boundary:r,rootBoundary:s,strategy:i}=e;const o=[...r==="clippingAncestors"?_n(t)?[]:Bp(t,this._c):[].concat(r),s],a=o[0],l=o.reduce((c,d)=>{const p=rl(t,d,i);return c.top=Ke(p.top,c.top),c.right=Ut(p.right,c.right),c.bottom=Ut(p.bottom,c.bottom),c.left=Ke(p.left,c.left),c},rl(t,a,i));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function Hp(e){const{width:t,height:r}=Cd(e);return{width:t,height:r}}function Kp(e,t,r){const s=kt(t),i=Ct(t),n=r==="fixed",o=or(e,!0,n,t);let a={scrollLeft:0,scrollTop:0};const l=$t(0);function c(){l.x=xn(i)}if(s||!s&&!n)if((Ur(t)!=="body"||Es(i))&&(a=kn(t)),s){const h=or(t,!0,n,t);l.x=h.x+t.clientLeft,l.y=h.y+t.clientTop}else i&&c();n&&!s&&i&&c();const d=i&&!s&&!n?Ad(i,a):$t(0),p=o.left+a.scrollLeft-l.x-d.x,u=o.top+a.scrollTop-l.y-d.y;return{x:p,y:u,width:o.width,height:o.height}}function Yn(e){return mt(e).position==="static"}function sl(e,t){if(!kt(e)||mt(e).position==="fixed")return null;if(t)return t(e);let r=e.offsetParent;return Ct(e)===r&&(r=r.ownerDocument.body),r}function Pd(e,t){const r=Je(e);if(_n(e))return r;if(!kt(e)){let i=Kt(e);for(;i&&!zr(i);){if(ft(i)&&!Yn(i))return i;i=Kt(i)}return r}let s=sl(e,t);for(;s&&Ap(s)&&Yn(s);)s=sl(s,t);return s&&zr(s)&&Yn(s)&&!$n(s)?r:s||Rp(e)||r}const Wp=async function(e){const t=this.getOffsetParent||Pd,r=this.getDimensions,s=await r(e.floating);return{reference:Kp(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:s.width,height:s.height}}};function Gp(e){return mt(e).direction==="rtl"}const Ji={convertOffsetParentRelativeRectToViewportRelativeRect:zp,getDocumentElement:Ct,getClippingRect:Up,getOffsetParent:Pd,getElementRects:Wp,getClientRects:jp,getDimensions:Hp,getScale:Ir,isElement:ft,isRTL:Gp};function Od(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function Yp(e,t){let r=null,s;const i=Ct(e);function n(){var a;clearTimeout(s),(a=r)==null||a.disconnect(),r=null}function o(a,l){a===void 0&&(a=!1),l===void 0&&(l=1),n();const c=e.getBoundingClientRect(),{left:d,top:p,width:u,height:h}=c;if(a||t(),!u||!h)return;const y=Bs(p),g=Bs(i.clientWidth-(d+u)),f=Bs(i.clientHeight-(p+h)),w=Bs(d),v={rootMargin:-y+"px "+-g+"px "+-f+"px "+-w+"px",threshold:Ke(0,Ut(1,l))||1};let $=!0;function b(_){const S=_[0].intersectionRatio;if(S!==l){if(!$)return o();S?o(!1,S):s=setTimeout(()=>{o(!1,1e-7)},1e3)}S===1&&!Od(c,e.getBoundingClientRect())&&o(),$=!1}try{r=new IntersectionObserver(b,{...v,root:i.ownerDocument})}catch{r=new IntersectionObserver(b,v)}r.observe(e)}return o(!0),n}function Jp(e,t,r,s){s===void 0&&(s={});const{ancestorScroll:i=!0,ancestorResize:n=!0,elementResize:o=typeof ResizeObserver=="function",layoutShift:a=typeof IntersectionObserver=="function",animationFrame:l=!1}=s,c=ia(e),d=i||n?[...c?vs(c):[],...vs(t)]:[];d.forEach(w=>{i&&w.addEventListener("scroll",r,{passive:!0}),n&&w.addEventListener("resize",r)});const p=c&&a?Yp(c,r):null;let u=-1,h=null;o&&(h=new ResizeObserver(w=>{let[m]=w;m&&m.target===c&&h&&(h.unobserve(t),cancelAnimationFrame(u),u=requestAnimationFrame(()=>{var v;(v=h)==null||v.observe(t)})),r()}),c&&!l&&h.observe(c),h.observe(t));let y,g=l?or(e):null;l&&f();function f(){const w=or(e);g&&!Od(g,w)&&r(),g=w,y=requestAnimationFrame(f)}return r(),()=>{var w;d.forEach(m=>{i&&m.removeEventListener("scroll",r),n&&m.removeEventListener("resize",r)}),p?.(),(w=h)==null||w.disconnect(),h=null,l&&cancelAnimationFrame(y)}}const Xp=kp,Qp=xp,Zp=wp,il=Sp,ef=vp,tf=(e,t,r)=>{const s=new Map,i={platform:Ji,...r},n={...i.platform,_c:s};return bp(e,t,{...i,platform:n})};function rf(e){return sf(e)}function Jn(e){return e.assignedSlot?e.assignedSlot:e.parentNode instanceof ShadowRoot?e.parentNode.host:e.parentNode}function sf(e){for(let t=e;t;t=Jn(t))if(t instanceof Element&&getComputedStyle(t).display==="none")return null;for(let t=Jn(e);t;t=Jn(t)){if(!(t instanceof Element))continue;const r=getComputedStyle(t);if(r.display!=="contents"&&(r.position!=="static"||$n(r)||t.tagName==="BODY"))return t}return null}function nf(e){return e!==null&&typeof e=="object"&&"getBoundingClientRect"in e&&("contextElement"in e?e.contextElement instanceof Element:!0)}var ye=class extends be{constructor(){super(...arguments),this.localize=new Fe(this),this.active=!1,this.placement="top",this.strategy="absolute",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="best-fit",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0,this.hoverBridge=!1,this.updateHoverBridge=()=>{if(this.hoverBridge&&this.anchorEl){const e=this.anchorEl.getBoundingClientRect(),t=this.popup.getBoundingClientRect(),r=this.placement.includes("top")||this.placement.includes("bottom");let s=0,i=0,n=0,o=0,a=0,l=0,c=0,d=0;r?e.top<t.top?(s=e.left,i=e.bottom,n=e.right,o=e.bottom,a=t.left,l=t.top,c=t.right,d=t.top):(s=t.left,i=t.bottom,n=t.right,o=t.bottom,a=e.left,l=e.top,c=e.right,d=e.top):e.left<t.left?(s=e.right,i=e.top,n=t.left,o=t.top,a=e.right,l=e.bottom,c=t.left,d=t.bottom):(s=t.right,i=t.top,n=e.left,o=e.top,a=t.right,l=t.bottom,c=e.left,d=e.bottom),this.style.setProperty("--hover-bridge-top-left-x",`${s}px`),this.style.setProperty("--hover-bridge-top-left-y",`${i}px`),this.style.setProperty("--hover-bridge-top-right-x",`${n}px`),this.style.setProperty("--hover-bridge-top-right-y",`${o}px`),this.style.setProperty("--hover-bridge-bottom-left-x",`${a}px`),this.style.setProperty("--hover-bridge-bottom-left-y",`${l}px`),this.style.setProperty("--hover-bridge-bottom-right-x",`${c}px`),this.style.setProperty("--hover-bridge-bottom-right-y",`${d}px`)}}}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(e){super.updated(e),e.has("active")&&(this.active?this.start():this.stop()),e.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&typeof this.anchor=="string"){const e=this.getRootNode();this.anchorEl=e.getElementById(this.anchor)}else this.anchor instanceof Element||nf(this.anchor)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector('[slot="anchor"]');this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.active&&this.start()}start(){!this.anchorEl||!this.active||(this.cleanup=Jp(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(e=>{this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame(()=>e())):e()})}reposition(){if(!this.active||!this.anchorEl)return;const e=[Xp({mainAxis:this.distance,crossAxis:this.skidding})];this.sync?e.push(il({apply:({rects:r})=>{const s=this.sync==="width"||this.sync==="both",i=this.sync==="height"||this.sync==="both";this.popup.style.width=s?`${r.reference.width}px`:"",this.popup.style.height=i?`${r.reference.height}px`:""}})):(this.popup.style.width="",this.popup.style.height=""),this.flip&&e.push(Zp({boundary:this.flipBoundary,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:this.flipFallbackStrategy==="best-fit"?"bestFit":"initialPlacement",padding:this.flipPadding})),this.shift&&e.push(Qp({boundary:this.shiftBoundary,padding:this.shiftPadding})),this.autoSize?e.push(il({boundary:this.autoSizeBoundary,padding:this.autoSizePadding,apply:({availableWidth:r,availableHeight:s})=>{this.autoSize==="vertical"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-height",`${s}px`):this.style.removeProperty("--auto-size-available-height"),this.autoSize==="horizontal"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-width",`${r}px`):this.style.removeProperty("--auto-size-available-width")}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&e.push(ef({element:this.arrowEl,padding:this.arrowPadding}));const t=this.strategy==="absolute"?r=>Ji.getOffsetParent(r,rf):Ji.getOffsetParent;tf(this.anchorEl,this.popup,{placement:this.placement,middleware:e,strategy:this.strategy,platform:gn(Gt({},Ji),{getOffsetParent:t})}).then(({x:r,y:s,middlewareData:i,placement:n})=>{const o=this.localize.dir()==="rtl",a={top:"bottom",right:"left",bottom:"top",left:"right"}[n.split("-")[0]];if(this.setAttribute("data-current-placement",n),Object.assign(this.popup.style,{left:`${r}px`,top:`${s}px`}),this.arrow){const l=i.arrow.x,c=i.arrow.y;let d="",p="",u="",h="";if(this.arrowPlacement==="start"){const y=typeof l=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";d=typeof c=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",p=o?y:"",h=o?"":y}else if(this.arrowPlacement==="end"){const y=typeof l=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";p=o?"":y,h=o?y:"",u=typeof c=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else this.arrowPlacement==="center"?(h=typeof l=="number"?"calc(50% - var(--arrow-size-diagonal))":"",d=typeof c=="number"?"calc(50% - var(--arrow-size-diagonal))":""):(h=typeof l=="number"?`${l}px`:"",d=typeof c=="number"?`${c}px`:"");Object.assign(this.arrowEl.style,{top:d,right:p,bottom:u,left:h,[a]:"calc(var(--arrow-size-diagonal) * -1)"})}}),requestAnimationFrame(()=>this.updateHoverBridge()),this.emit("sl-reposition")}render(){return N`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span
        part="hover-bridge"
        class=${ve({"popup-hover-bridge":!0,"popup-hover-bridge--visible":this.hoverBridge&&this.active})}
      ></span>

      <div
        part="popup"
        class=${ve({popup:!0,"popup--active":this.active,"popup--fixed":this.strategy==="fixed","popup--has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?N`<div part="arrow" class="popup__arrow" role="presentation"></div>`:""}
      </div>
    `}};ye.styles=[ke,op];x([ce(".popup")],ye.prototype,"popup",2);x([ce(".popup__arrow")],ye.prototype,"arrowEl",2);x([A()],ye.prototype,"anchor",2);x([A({type:Boolean,reflect:!0})],ye.prototype,"active",2);x([A({reflect:!0})],ye.prototype,"placement",2);x([A({reflect:!0})],ye.prototype,"strategy",2);x([A({type:Number})],ye.prototype,"distance",2);x([A({type:Number})],ye.prototype,"skidding",2);x([A({type:Boolean})],ye.prototype,"arrow",2);x([A({attribute:"arrow-placement"})],ye.prototype,"arrowPlacement",2);x([A({attribute:"arrow-padding",type:Number})],ye.prototype,"arrowPadding",2);x([A({type:Boolean})],ye.prototype,"flip",2);x([A({attribute:"flip-fallback-placements",converter:{fromAttribute:e=>e.split(" ").map(t=>t.trim()).filter(t=>t!==""),toAttribute:e=>e.join(" ")}})],ye.prototype,"flipFallbackPlacements",2);x([A({attribute:"flip-fallback-strategy"})],ye.prototype,"flipFallbackStrategy",2);x([A({type:Object})],ye.prototype,"flipBoundary",2);x([A({attribute:"flip-padding",type:Number})],ye.prototype,"flipPadding",2);x([A({type:Boolean})],ye.prototype,"shift",2);x([A({type:Object})],ye.prototype,"shiftBoundary",2);x([A({attribute:"shift-padding",type:Number})],ye.prototype,"shiftPadding",2);x([A({attribute:"auto-size"})],ye.prototype,"autoSize",2);x([A()],ye.prototype,"sync",2);x([A({type:Object})],ye.prototype,"autoSizeBoundary",2);x([A({attribute:"auto-size-padding",type:Number})],ye.prototype,"autoSizePadding",2);x([A({attribute:"hover-bridge",type:Boolean})],ye.prototype,"hoverBridge",2);var Id=new Map,of=new WeakMap;function af(e){return e??{keyframes:[],options:{duration:0}}}function nl(e,t){return t.toLowerCase()==="rtl"?{keyframes:e.rtlKeyframes||e.keyframes,options:e.options}:e}function et(e,t){Id.set(e,af(t))}function We(e,t,r){const s=of.get(e);if(s?.[t])return nl(s[t],r.dir);const i=Id.get(t);return i?nl(i,r.dir):{keyframes:[],options:{duration:0}}}function xt(e,t){return new Promise(r=>{function s(i){i.target===e&&(e.removeEventListener(t,s),r())}e.addEventListener(t,s)})}function Ge(e,t,r){return new Promise(s=>{if(r?.duration===1/0)throw new Error("Promise-based animations must be finite.");const i=e.animate(t,gn(Gt({},r),{duration:lf()?0:r.duration}));i.addEventListener("cancel",s,{once:!0}),i.addEventListener("finish",s,{once:!0})})}function ol(e){return e=e.toString().toLowerCase(),e.indexOf("ms")>-1?parseFloat(e):e.indexOf("s")>-1?parseFloat(e)*1e3:parseFloat(e)}function lf(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function at(e){return Promise.all(e.getAnimations().map(t=>new Promise(r=>{t.cancel(),requestAnimationFrame(r)})))}let To=class extends bn{constructor(t){if(super(t),this.it=$e,t.type!==It.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===$e||t==null)return this._t=void 0,this.it=t;if(t===ot)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const r=[t];return r.raw=r,this._t={_$litType$:this.constructor.resultType,strings:r,values:[]}}};To.directiveName="unsafeHTML",To.resultType=1;const na=yn(To);var ue=class extends be{constructor(){super(...arguments),this.formControlController=new Cs(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new zt(this,"help-text","label"),this.localize=new Fe(this),this.typeToSelectString="",this.hasFocus=!1,this.displayLabel="",this.selectedOptions=[],this.valueHasChanged=!1,this.name="",this._value="",this.defaultValue="",this.size="medium",this.placeholder="",this.multiple=!1,this.maxOptionsVisible=3,this.disabled=!1,this.clearable=!1,this.open=!1,this.hoist=!1,this.filled=!1,this.pill=!1,this.label="",this.placement="bottom",this.helpText="",this.form="",this.required=!1,this.getTag=e=>N`
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
    `,this.handleDocumentFocusIn=e=>{const t=e.composedPath();this&&!t.includes(this)&&this.hide()},this.handleDocumentKeyDown=e=>{const t=e.target,r=t.closest(".select__clear")!==null,s=t.closest("sl-icon-button")!==null;if(!(r||s)){if(e.key==="Escape"&&this.open&&!this.closeWatcher&&(e.preventDefault(),e.stopPropagation(),this.hide(),this.displayInput.focus({preventScroll:!0})),e.key==="Enter"||e.key===" "&&this.typeToSelectString===""){if(e.preventDefault(),e.stopImmediatePropagation(),!this.open){this.show();return}this.currentOption&&!this.currentOption.disabled&&(this.valueHasChanged=!0,this.multiple?this.toggleOptionSelection(this.currentOption):this.setSelectedOptions(this.currentOption),this.updateComplete.then(()=>{this.emit("sl-input"),this.emit("sl-change")}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})));return}if(["ArrowUp","ArrowDown","Home","End"].includes(e.key)){const i=this.getAllOptions(),n=i.indexOf(this.currentOption);let o=Math.max(0,n);if(e.preventDefault(),!this.open&&(this.show(),this.currentOption))return;e.key==="ArrowDown"?(o=n+1,o>i.length-1&&(o=0)):e.key==="ArrowUp"?(o=n-1,o<0&&(o=i.length-1)):e.key==="Home"?o=0:e.key==="End"&&(o=i.length-1),this.setCurrentOption(i[o])}if(e.key&&e.key.length===1||e.key==="Backspace"){const i=this.getAllOptions();if(e.metaKey||e.ctrlKey||e.altKey)return;if(!this.open){if(e.key==="Backspace")return;this.show()}e.stopPropagation(),e.preventDefault(),clearTimeout(this.typeToSelectTimeout),this.typeToSelectTimeout=window.setTimeout(()=>this.typeToSelectString="",1e3),e.key==="Backspace"?this.typeToSelectString=this.typeToSelectString.slice(0,-1):this.typeToSelectString+=e.key.toLowerCase();for(const n of i)if(n.getTextLabel().toLowerCase().startsWith(this.typeToSelectString)){this.setCurrentOption(n);break}}}},this.handleDocumentMouseDown=e=>{const t=e.composedPath();this&&!t.includes(this)&&this.hide()}}get value(){return this._value}set value(e){this.multiple?e=Array.isArray(e)?e:e.split(" "):e=Array.isArray(e)?e.join(" "):e,this._value!==e&&(this.valueHasChanged=!0,this._value=e)}get validity(){return this.valueInput.validity}get validationMessage(){return this.valueInput.validationMessage}connectedCallback(){super.connectedCallback(),setTimeout(()=>{this.handleDefaultSlotChange()}),this.open=!1}addOpenListeners(){var e;document.addEventListener("focusin",this.handleDocumentFocusIn),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown),this.getRootNode()!==document&&this.getRootNode().addEventListener("focusin",this.handleDocumentFocusIn),"CloseWatcher"in window&&((e=this.closeWatcher)==null||e.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.open&&(this.hide(),this.displayInput.focus({preventScroll:!0}))})}removeOpenListeners(){var e;document.removeEventListener("focusin",this.handleDocumentFocusIn),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown),this.getRootNode()!==document&&this.getRootNode().removeEventListener("focusin",this.handleDocumentFocusIn),(e=this.closeWatcher)==null||e.destroy()}handleFocus(){this.hasFocus=!0,this.displayInput.setSelectionRange(0,0),this.emit("sl-focus")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleLabelClick(){this.displayInput.focus()}handleComboboxMouseDown(e){const r=e.composedPath().some(s=>s instanceof Element&&s.tagName.toLowerCase()==="sl-icon-button");this.disabled||r||(e.preventDefault(),this.displayInput.focus({preventScroll:!0}),this.open=!this.open)}handleComboboxKeyDown(e){e.key!=="Tab"&&(e.stopPropagation(),this.handleDocumentKeyDown(e))}handleClearClick(e){e.stopPropagation(),this.valueHasChanged=!0,this.value!==""&&(this.setSelectedOptions([]),this.displayInput.focus({preventScroll:!0}),this.updateComplete.then(()=>{this.emit("sl-clear"),this.emit("sl-input"),this.emit("sl-change")}))}handleClearMouseDown(e){e.stopPropagation(),e.preventDefault()}handleOptionClick(e){const r=e.target.closest("sl-option"),s=this.value;r&&!r.disabled&&(this.valueHasChanged=!0,this.multiple?this.toggleOptionSelection(r):this.setSelectedOptions(r),this.updateComplete.then(()=>this.displayInput.focus({preventScroll:!0})),this.value!==s&&this.updateComplete.then(()=>{this.emit("sl-input"),this.emit("sl-change")}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})))}handleDefaultSlotChange(){customElements.get("sl-option")||customElements.whenDefined("sl-option").then(()=>this.handleDefaultSlotChange());const e=this.getAllOptions(),t=this.valueHasChanged?this.value:this.defaultValue,r=Array.isArray(t)?t:[t],s=[];e.forEach(i=>s.push(i.value)),this.setSelectedOptions(e.filter(i=>r.includes(i.value)))}handleTagRemove(e,t){e.stopPropagation(),this.valueHasChanged=!0,this.disabled||(this.toggleOptionSelection(t,!1),this.updateComplete.then(()=>{this.emit("sl-input"),this.emit("sl-change")}))}getAllOptions(){return[...this.querySelectorAll("sl-option")]}getFirstOption(){return this.querySelector("sl-option")}setCurrentOption(e){this.getAllOptions().forEach(r=>{r.current=!1,r.tabIndex=-1}),e&&(this.currentOption=e,e.current=!0,e.tabIndex=0,e.focus())}setSelectedOptions(e){const t=this.getAllOptions(),r=Array.isArray(e)?e:[e];t.forEach(s=>s.selected=!1),r.length&&r.forEach(s=>s.selected=!0),this.selectionChanged()}toggleOptionSelection(e,t){t===!0||t===!1?e.selected=t:e.selected=!e.selected,this.selectionChanged()}selectionChanged(){var e,t,r;const s=this.getAllOptions();this.selectedOptions=s.filter(n=>n.selected);const i=this.valueHasChanged;if(this.multiple)this.value=this.selectedOptions.map(n=>n.value),this.placeholder&&this.value.length===0?this.displayLabel="":this.displayLabel=this.localize.term("numOptionsSelected",this.selectedOptions.length);else{const n=this.selectedOptions[0];this.value=(e=n?.value)!=null?e:"",this.displayLabel=(r=(t=n?.getTextLabel)==null?void 0:t.call(n))!=null?r:""}this.valueHasChanged=i,this.updateComplete.then(()=>{this.formControlController.updateValidity()})}get tags(){return this.selectedOptions.map((e,t)=>{if(t<this.maxOptionsVisible||this.maxOptionsVisible<=0){const r=this.getTag(e,t);return N`<div @sl-remove=${s=>this.handleTagRemove(s,e)}>
          ${typeof r=="string"?na(r):r}
        </div>`}else if(t===this.maxOptionsVisible)return N`<sl-tag size=${this.size}>+${this.selectedOptions.length-t}</sl-tag>`;return N``})}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleDisabledChange(){this.disabled&&(this.open=!1,this.handleOpenChange())}attributeChangedCallback(e,t,r){if(super.attributeChangedCallback(e,t,r),e==="value"){const s=this.valueHasChanged;this.value=this.defaultValue,this.valueHasChanged=s}}handleValueChange(){if(!this.valueHasChanged){const r=this.valueHasChanged;this.value=this.defaultValue,this.valueHasChanged=r}const e=this.getAllOptions(),t=Array.isArray(this.value)?this.value:[this.value];this.setSelectedOptions(e.filter(r=>t.includes(r.value)))}async handleOpenChange(){if(this.open&&!this.disabled){this.setCurrentOption(this.selectedOptions[0]||this.getFirstOption()),this.emit("sl-show"),this.addOpenListeners(),await at(this),this.listbox.hidden=!1,this.popup.active=!0,requestAnimationFrame(()=>{this.setCurrentOption(this.currentOption)});const{keyframes:e,options:t}=We(this,"select.show",{dir:this.localize.dir()});await Ge(this.popup.popup,e,t),this.currentOption&&So(this.currentOption,this.listbox,"vertical","auto"),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),await at(this);const{keyframes:e,options:t}=We(this,"select.hide",{dir:this.localize.dir()});await Ge(this.popup.popup,e,t),this.listbox.hidden=!0,this.popup.active=!1,this.emit("sl-after-hide")}}async show(){if(this.open||this.disabled){this.open=!1;return}return this.open=!0,xt(this,"sl-after-show")}async hide(){if(!this.open||this.disabled){this.open=!1;return}return this.open=!1,xt(this,"sl-after-hide")}checkValidity(){return this.valueInput.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.valueInput.reportValidity()}setCustomValidity(e){this.valueInput.setCustomValidity(e),this.formControlController.updateValidity()}focus(e){this.displayInput.focus(e)}blur(){this.displayInput.blur()}render(){const e=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),r=this.label?!0:!!e,s=this.helpText?!0:!!t,i=this.clearable&&!this.disabled&&this.value.length>0,n=this.placeholder&&this.value&&this.value.length<=0;return N`
      <div
        part="form-control"
        class=${ve({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":r,"form-control--has-help-text":s})}
      >
        <label
          id="label"
          part="form-control-label"
          class="form-control__label"
          aria-hidden=${r?"false":"true"}
          @click=${this.handleLabelClick}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <sl-popup
            class=${ve({select:!0,"select--standard":!0,"select--filled":this.filled,"select--pill":this.pill,"select--open":this.open,"select--disabled":this.disabled,"select--multiple":this.multiple,"select--focused":this.hasFocus,"select--placeholder-visible":n,"select--top":this.placement==="top","select--bottom":this.placement==="bottom","select--small":this.size==="small","select--medium":this.size==="medium","select--large":this.size==="large"})}
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

              ${this.multiple?N`<div part="tags" class="select__tags">${this.tags}</div>`:""}

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

              ${i?N`
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
          aria-hidden=${s?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};ue.styles=[ke,vn,rp];ue.dependencies={"sl-icon":Le,"sl-popup":ye,"sl-tag":pr};x([ce(".select")],ue.prototype,"popup",2);x([ce(".select__combobox")],ue.prototype,"combobox",2);x([ce(".select__display-input")],ue.prototype,"displayInput",2);x([ce(".select__value-input")],ue.prototype,"valueInput",2);x([ce(".select__listbox")],ue.prototype,"listbox",2);x([H()],ue.prototype,"hasFocus",2);x([H()],ue.prototype,"displayLabel",2);x([H()],ue.prototype,"currentOption",2);x([H()],ue.prototype,"selectedOptions",2);x([H()],ue.prototype,"valueHasChanged",2);x([A()],ue.prototype,"name",2);x([H()],ue.prototype,"value",1);x([A({attribute:"value"})],ue.prototype,"defaultValue",2);x([A({reflect:!0})],ue.prototype,"size",2);x([A()],ue.prototype,"placeholder",2);x([A({type:Boolean,reflect:!0})],ue.prototype,"multiple",2);x([A({attribute:"max-options-visible",type:Number})],ue.prototype,"maxOptionsVisible",2);x([A({type:Boolean,reflect:!0})],ue.prototype,"disabled",2);x([A({type:Boolean})],ue.prototype,"clearable",2);x([A({type:Boolean,reflect:!0})],ue.prototype,"open",2);x([A({type:Boolean})],ue.prototype,"hoist",2);x([A({type:Boolean,reflect:!0})],ue.prototype,"filled",2);x([A({type:Boolean,reflect:!0})],ue.prototype,"pill",2);x([A()],ue.prototype,"label",2);x([A({reflect:!0})],ue.prototype,"placement",2);x([A({attribute:"help-text"})],ue.prototype,"helpText",2);x([A({reflect:!0})],ue.prototype,"form",2);x([A({type:Boolean,reflect:!0})],ue.prototype,"required",2);x([A()],ue.prototype,"getTag",2);x([de("disabled",{waitUntilFirstUpdate:!0})],ue.prototype,"handleDisabledChange",1);x([de(["defaultValue","value"],{waitUntilFirstUpdate:!0})],ue.prototype,"handleValueChange",1);x([de("open",{waitUntilFirstUpdate:!0})],ue.prototype,"handleOpenChange",1);et("select.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}});et("select.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}});ue.define("sl-select");var cf=ie`
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
`,dt=class extends be{constructor(){super(...arguments),this.localize=new Fe(this),this.isInitialized=!1,this.current=!1,this.selected=!1,this.hasHover=!1,this.value="",this.disabled=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","option"),this.setAttribute("aria-selected","false")}handleDefaultSlotChange(){this.isInitialized?customElements.whenDefined("sl-select").then(()=>{const e=this.closest("sl-select");e&&e.handleDefaultSlotChange()}):this.isInitialized=!0}handleMouseEnter(){this.hasHover=!0}handleMouseLeave(){this.hasHover=!1}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleSelectedChange(){this.setAttribute("aria-selected",this.selected?"true":"false")}handleValueChange(){typeof this.value!="string"&&(this.value=String(this.value)),this.value.includes(" ")&&(console.error("Option values cannot include a space. All spaces have been replaced with underscores.",this),this.value=this.value.replace(/ /g,"_"))}getTextLabel(){const e=this.childNodes;let t="";return[...e].forEach(r=>{r.nodeType===Node.ELEMENT_NODE&&(r.hasAttribute("slot")||(t+=r.textContent)),r.nodeType===Node.TEXT_NODE&&(t+=r.textContent)}),t.trim()}render(){return N`
      <div
        part="base"
        class=${ve({option:!0,"option--current":this.current,"option--disabled":this.disabled,"option--selected":this.selected,"option--hover":this.hasHover})}
        @mouseenter=${this.handleMouseEnter}
        @mouseleave=${this.handleMouseLeave}
      >
        <sl-icon part="checked-icon" class="option__check" name="check" library="system" aria-hidden="true"></sl-icon>
        <slot part="prefix" name="prefix" class="option__prefix"></slot>
        <slot part="label" class="option__label" @slotchange=${this.handleDefaultSlotChange}></slot>
        <slot part="suffix" name="suffix" class="option__suffix"></slot>
      </div>
    `}};dt.styles=[ke,cf];dt.dependencies={"sl-icon":Le};x([ce(".option__label")],dt.prototype,"defaultSlot",2);x([H()],dt.prototype,"current",2);x([H()],dt.prototype,"selected",2);x([H()],dt.prototype,"hasHover",2);x([A({reflect:!0})],dt.prototype,"value",2);x([A({type:Boolean,reflect:!0})],dt.prototype,"disabled",2);x([de("disabled")],dt.prototype,"handleDisabledChange",1);x([de("selected")],dt.prototype,"handleSelectedChange",1);x([de("value")],dt.prototype,"handleValueChange",1);dt.define("sl-option");var df=ie`
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
`,pe=class extends be{constructor(){super(...arguments),this.formControlController=new Cs(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new zt(this,"help-text","label"),this.hasFocus=!1,this.title="",this.name="",this.value="",this.size="medium",this.filled=!1,this.label="",this.helpText="",this.placeholder="",this.rows=4,this.resize="vertical",this.disabled=!1,this.readonly=!1,this.form="",this.required=!1,this.spellcheck=!0,this.defaultValue=""}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>this.setTextareaHeight()),this.updateComplete.then(()=>{this.setTextareaHeight(),this.resizeObserver.observe(this.input)})}firstUpdated(){this.formControlController.updateValidity()}disconnectedCallback(){var e;super.disconnectedCallback(),this.input&&((e=this.resizeObserver)==null||e.unobserve(this.input))}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleChange(){this.value=this.input.value,this.setTextareaHeight(),this.emit("sl-change")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleInput(){this.value=this.input.value,this.emit("sl-input")}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}setTextareaHeight(){this.resize==="auto"?(this.sizeAdjuster.style.height=`${this.input.clientHeight}px`,this.input.style.height="auto",this.input.style.height=`${this.input.scrollHeight}px`):this.input.style.height=""}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleRowsChange(){this.setTextareaHeight()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity(),this.setTextareaHeight()}focus(e){this.input.focus(e)}blur(){this.input.blur()}select(){this.input.select()}scrollPosition(e){if(e){typeof e.top=="number"&&(this.input.scrollTop=e.top),typeof e.left=="number"&&(this.input.scrollLeft=e.left);return}return{top:this.input.scrollTop,left:this.input.scrollTop}}setSelectionRange(e,t,r="none"){this.input.setSelectionRange(e,t,r)}setRangeText(e,t,r,s="preserve"){const i=t??this.input.selectionStart,n=r??this.input.selectionEnd;this.input.setRangeText(e,i,n,s),this.value!==this.input.value&&(this.value=this.input.value,this.setTextareaHeight())}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){const e=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),r=this.label?!0:!!e,s=this.helpText?!0:!!t;return N`
      <div
        part="form-control"
        class=${ve({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":r,"form-control--has-help-text":s})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${r?"false":"true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${ve({textarea:!0,"textarea--small":this.size==="small","textarea--medium":this.size==="medium","textarea--large":this.size==="large","textarea--standard":!this.filled,"textarea--filled":this.filled,"textarea--disabled":this.disabled,"textarea--focused":this.hasFocus,"textarea--empty":!this.value,"textarea--resize-none":this.resize==="none","textarea--resize-vertical":this.resize==="vertical","textarea--resize-auto":this.resize==="auto"})}
          >
            <textarea
              part="textarea"
              id="input"
              class="textarea__control"
              title=${this.title}
              name=${Q(this.name)}
              .value=${rn(this.value)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${Q(this.placeholder)}
              rows=${Q(this.rows)}
              minlength=${Q(this.minlength)}
              maxlength=${Q(this.maxlength)}
              autocapitalize=${Q(this.autocapitalize)}
              autocorrect=${Q(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${Q(this.spellcheck)}
              enterkeyhint=${Q(this.enterkeyhint)}
              inputmode=${Q(this.inputmode)}
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
          aria-hidden=${s?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};pe.styles=[ke,vn,df];x([ce(".textarea__control")],pe.prototype,"input",2);x([ce(".textarea__size-adjuster")],pe.prototype,"sizeAdjuster",2);x([H()],pe.prototype,"hasFocus",2);x([A()],pe.prototype,"title",2);x([A()],pe.prototype,"name",2);x([A()],pe.prototype,"value",2);x([A({reflect:!0})],pe.prototype,"size",2);x([A({type:Boolean,reflect:!0})],pe.prototype,"filled",2);x([A()],pe.prototype,"label",2);x([A({attribute:"help-text"})],pe.prototype,"helpText",2);x([A()],pe.prototype,"placeholder",2);x([A({type:Number})],pe.prototype,"rows",2);x([A()],pe.prototype,"resize",2);x([A({type:Boolean,reflect:!0})],pe.prototype,"disabled",2);x([A({type:Boolean,reflect:!0})],pe.prototype,"readonly",2);x([A({reflect:!0})],pe.prototype,"form",2);x([A({type:Boolean,reflect:!0})],pe.prototype,"required",2);x([A({type:Number})],pe.prototype,"minlength",2);x([A({type:Number})],pe.prototype,"maxlength",2);x([A()],pe.prototype,"autocapitalize",2);x([A()],pe.prototype,"autocorrect",2);x([A()],pe.prototype,"autocomplete",2);x([A({type:Boolean})],pe.prototype,"autofocus",2);x([A()],pe.prototype,"enterkeyhint",2);x([A({type:Boolean,converter:{fromAttribute:e=>!(!e||e==="false"),toAttribute:e=>e?"true":"false"}})],pe.prototype,"spellcheck",2);x([A()],pe.prototype,"inputmode",2);x([ea()],pe.prototype,"defaultValue",2);x([de("disabled",{waitUntilFirstUpdate:!0})],pe.prototype,"handleDisabledChange",1);x([de("rows",{waitUntilFirstUpdate:!0})],pe.prototype,"handleRowsChange",1);x([de("value",{waitUntilFirstUpdate:!0})],pe.prototype,"handleValueChange",1);pe.define("sl-textarea");var uf=ie`
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
`,Te=class extends be{constructor(){super(...arguments),this.formControlController=new Cs(this,{value:e=>e.checked?e.value||"on":void 0,defaultValue:e=>e.defaultChecked,setValue:(e,t)=>e.checked=t}),this.hasSlotController=new zt(this,"help-text"),this.hasFocus=!1,this.title="",this.name="",this.size="medium",this.disabled=!1,this.checked=!1,this.indeterminate=!1,this.defaultChecked=!1,this.form="",this.required=!1,this.helpText=""}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleClick(){this.checked=!this.checked,this.indeterminate=!1,this.emit("sl-change")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleInput(){this.emit("sl-input")}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStateChange(){this.input.checked=this.checked,this.input.indeterminate=this.indeterminate,this.formControlController.updateValidity()}click(){this.input.click()}focus(e){this.input.focus(e)}blur(){this.input.blur()}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){const e=this.hasSlotController.test("help-text"),t=this.helpText?!0:!!e;return N`
      <div
        class=${ve({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-help-text":t})}
      >
        <label
          part="base"
          class=${ve({checkbox:!0,"checkbox--checked":this.checked,"checkbox--disabled":this.disabled,"checkbox--focused":this.hasFocus,"checkbox--indeterminate":this.indeterminate,"checkbox--small":this.size==="small","checkbox--medium":this.size==="medium","checkbox--large":this.size==="large"})}
        >
          <input
            class="checkbox__input"
            type="checkbox"
            title=${this.title}
            name=${this.name}
            value=${Q(this.value)}
            .indeterminate=${rn(this.indeterminate)}
            .checked=${rn(this.checked)}
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
            ${this.checked?N`
                  <sl-icon part="checked-icon" class="checkbox__checked-icon" library="system" name="check"></sl-icon>
                `:""}
            ${!this.checked&&this.indeterminate?N`
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
    `}};Te.styles=[ke,vn,uf];Te.dependencies={"sl-icon":Le};x([ce('input[type="checkbox"]')],Te.prototype,"input",2);x([H()],Te.prototype,"hasFocus",2);x([A()],Te.prototype,"title",2);x([A()],Te.prototype,"name",2);x([A()],Te.prototype,"value",2);x([A({reflect:!0})],Te.prototype,"size",2);x([A({type:Boolean,reflect:!0})],Te.prototype,"disabled",2);x([A({type:Boolean,reflect:!0})],Te.prototype,"checked",2);x([A({type:Boolean,reflect:!0})],Te.prototype,"indeterminate",2);x([ea("checked")],Te.prototype,"defaultChecked",2);x([A({reflect:!0})],Te.prototype,"form",2);x([A({type:Boolean,reflect:!0})],Te.prototype,"required",2);x([A({attribute:"help-text"})],Te.prototype,"helpText",2);x([de("disabled",{waitUntilFirstUpdate:!0})],Te.prototype,"handleDisabledChange",1);x([de(["checked","indeterminate"],{waitUntilFirstUpdate:!0})],Te.prototype,"handleStateChange",1);Te.define("sl-checkbox");function*oa(e=document.activeElement){e!=null&&(yield e,"shadowRoot"in e&&e.shadowRoot&&e.shadowRoot.mode!=="closed"&&(yield*Ih(oa(e.shadowRoot.activeElement))))}function Rd(){return[...oa()].pop()}var al=new WeakMap;function Nd(e){let t=al.get(e);return t||(t=window.getComputedStyle(e,null),al.set(e,t)),t}function hf(e){if(typeof e.checkVisibility=="function")return e.checkVisibility({checkOpacity:!1,checkVisibilityCSS:!0});const t=Nd(e);return t.visibility!=="hidden"&&t.display!=="none"}function pf(e){const t=Nd(e),{overflowY:r,overflowX:s}=t;return r==="scroll"||s==="scroll"?!0:r!=="auto"||s!=="auto"?!1:e.scrollHeight>e.clientHeight&&r==="auto"||e.scrollWidth>e.clientWidth&&s==="auto"}function ff(e){const t=e.tagName.toLowerCase(),r=Number(e.getAttribute("tabindex"));if(e.hasAttribute("tabindex")&&(isNaN(r)||r<=-1)||e.hasAttribute("disabled")||e.closest("[inert]"))return!1;if(t==="input"&&e.getAttribute("type")==="radio"){const n=e.getRootNode(),o=`input[type='radio'][name="${e.getAttribute("name")}"]`,a=n.querySelector(`${o}:checked`);return a?a===e:n.querySelector(o)===e}return hf(e)?(t==="audio"||t==="video")&&e.hasAttribute("controls")||e.hasAttribute("tabindex")||e.hasAttribute("contenteditable")&&e.getAttribute("contenteditable")!=="false"||["button","input","select","textarea","a","audio","video","summary","iframe"].includes(t)?!0:pf(e):!1}function mf(e){var t,r;const s=Po(e),i=(t=s[0])!=null?t:null,n=(r=s[s.length-1])!=null?r:null;return{start:i,end:n}}function gf(e,t){var r;return((r=e.getRootNode({composed:!0}))==null?void 0:r.host)!==t}function Po(e){const t=new WeakMap,r=[];function s(i){if(i instanceof Element){if(i.hasAttribute("inert")||i.closest("[inert]")||t.has(i))return;t.set(i,!0),!r.includes(i)&&ff(i)&&r.push(i),i instanceof HTMLSlotElement&&gf(i,e)&&i.assignedElements({flatten:!0}).forEach(n=>{s(n)}),i.shadowRoot!==null&&i.shadowRoot.mode==="open"&&s(i.shadowRoot)}for(const n of i.children)s(n)}return s(e),r.sort((i,n)=>{const o=Number(i.getAttribute("tabindex"))||0;return(Number(n.getAttribute("tabindex"))||0)-o})}var rs=[],yf=class{constructor(e){this.tabDirection="forward",this.handleFocusIn=()=>{this.isActive()&&this.checkFocus()},this.handleKeyDown=t=>{var r;if(t.key!=="Tab"||this.isExternalActivated||!this.isActive())return;const s=Rd();if(this.previousFocus=s,this.previousFocus&&this.possiblyHasTabbableChildren(this.previousFocus))return;t.shiftKey?this.tabDirection="backward":this.tabDirection="forward";const i=Po(this.element);let n=i.findIndex(a=>a===s);this.previousFocus=this.currentFocus;const o=this.tabDirection==="forward"?1:-1;for(;;){n+o>=i.length?n=0:n+o<0?n=i.length-1:n+=o,this.previousFocus=this.currentFocus;const a=i[n];if(this.tabDirection==="backward"&&this.previousFocus&&this.possiblyHasTabbableChildren(this.previousFocus)||a&&this.possiblyHasTabbableChildren(a))return;t.preventDefault(),this.currentFocus=a,(r=this.currentFocus)==null||r.focus({preventScroll:!1});const l=[...oa()];if(l.includes(this.currentFocus)||!l.includes(this.previousFocus))break}setTimeout(()=>this.checkFocus())},this.handleKeyUp=()=>{this.tabDirection="forward"},this.element=e,this.elementsWithTabbableControls=["iframe"]}activate(){rs.push(this.element),document.addEventListener("focusin",this.handleFocusIn),document.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keyup",this.handleKeyUp)}deactivate(){rs=rs.filter(e=>e!==this.element),this.currentFocus=null,document.removeEventListener("focusin",this.handleFocusIn),document.removeEventListener("keydown",this.handleKeyDown),document.removeEventListener("keyup",this.handleKeyUp)}isActive(){return rs[rs.length-1]===this.element}activateExternal(){this.isExternalActivated=!0}deactivateExternal(){this.isExternalActivated=!1}checkFocus(){if(this.isActive()&&!this.isExternalActivated){const e=Po(this.element);if(!this.element.matches(":focus-within")){const t=e[0],r=e[e.length-1],s=this.tabDirection==="forward"?t:r;typeof s?.focus=="function"&&(this.currentFocus=s,s.focus({preventScroll:!1}))}}}possiblyHasTabbableChildren(e){return this.elementsWithTabbableControls.includes(e.tagName.toLowerCase())||e.hasAttribute("controls")}},bf=ie`
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
`,Dd=e=>{var t;const{activeElement:r}=document;r&&e.contains(r)&&((t=document.activeElement)==null||t.blur())},Et=class extends be{constructor(){super(...arguments),this.hasSlotController=new zt(this,"footer"),this.localize=new Fe(this),this.modal=new yf(this),this.open=!1,this.label="",this.noHeader=!1,this.handleDocumentKeyDown=e=>{e.key==="Escape"&&this.modal.isActive()&&this.open&&(e.stopPropagation(),this.requestClose("keyboard"))}}firstUpdated(){this.dialog.hidden=!this.open,this.open&&(this.addOpenListeners(),this.modal.activate(),Ya(this))}disconnectedCallback(){super.disconnectedCallback(),this.modal.deactivate(),Ja(this),this.removeOpenListeners()}requestClose(e){if(this.emit("sl-request-close",{cancelable:!0,detail:{source:e}}).defaultPrevented){const r=We(this,"dialog.denyClose",{dir:this.localize.dir()});Ge(this.panel,r.keyframes,r.options);return}this.hide()}addOpenListeners(){var e;"CloseWatcher"in window?((e=this.closeWatcher)==null||e.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>this.requestClose("keyboard")):document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){var e;(e=this.closeWatcher)==null||e.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown)}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.modal.activate(),Ya(this);const e=this.querySelector("[autofocus]");e&&e.removeAttribute("autofocus"),await Promise.all([at(this.dialog),at(this.overlay)]),this.dialog.hidden=!1,requestAnimationFrame(()=>{this.emit("sl-initial-focus",{cancelable:!0}).defaultPrevented||(e?e.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),e&&e.setAttribute("autofocus","")});const t=We(this,"dialog.show",{dir:this.localize.dir()}),r=We(this,"dialog.overlay.show",{dir:this.localize.dir()});await Promise.all([Ge(this.panel,t.keyframes,t.options),Ge(this.overlay,r.keyframes,r.options)]),this.emit("sl-after-show")}else{Dd(this),this.emit("sl-hide"),this.removeOpenListeners(),this.modal.deactivate(),await Promise.all([at(this.dialog),at(this.overlay)]);const e=We(this,"dialog.hide",{dir:this.localize.dir()}),t=We(this,"dialog.overlay.hide",{dir:this.localize.dir()});await Promise.all([Ge(this.overlay,t.keyframes,t.options).then(()=>{this.overlay.hidden=!0}),Ge(this.panel,e.keyframes,e.options).then(()=>{this.panel.hidden=!0})]),this.dialog.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1,Ja(this);const r=this.originalTrigger;typeof r?.focus=="function"&&setTimeout(()=>r.focus()),this.emit("sl-after-hide")}}async show(){if(!this.open)return this.open=!0,xt(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,xt(this,"sl-after-hide")}render(){return N`
      <div
        part="base"
        class=${ve({dialog:!0,"dialog--open":this.open,"dialog--has-footer":this.hasSlotController.test("footer")})}
      >
        <div part="overlay" class="dialog__overlay" @click=${()=>this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="dialog__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open?"false":"true"}
          aria-label=${Q(this.noHeader?this.label:void 0)}
          aria-labelledby=${Q(this.noHeader?void 0:"title")}
          tabindex="-1"
        >
          ${this.noHeader?"":N`
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
    `}};Et.styles=[ke,bf];Et.dependencies={"sl-icon-button":Ae};x([ce(".dialog")],Et.prototype,"dialog",2);x([ce(".dialog__panel")],Et.prototype,"panel",2);x([ce(".dialog__overlay")],Et.prototype,"overlay",2);x([A({type:Boolean,reflect:!0})],Et.prototype,"open",2);x([A({reflect:!0})],Et.prototype,"label",2);x([A({attribute:"no-header",type:Boolean,reflect:!0})],Et.prototype,"noHeader",2);x([de("open",{waitUntilFirstUpdate:!0})],Et.prototype,"handleOpenChange",1);et("dialog.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}});et("dialog.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}});et("dialog.denyClose",{keyframes:[{scale:1},{scale:1.02},{scale:1}],options:{duration:250}});et("dialog.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}});et("dialog.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}});Et.define("sl-dialog");var vf=ie`
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
`,wf=ie`
  :host {
    display: contents;
  }
`,Sn=class extends be{constructor(){super(...arguments),this.observedElements=[],this.disabled=!1}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(e=>{this.emit("sl-resize",{detail:{entries:e}})}),this.disabled||this.startObserver()}disconnectedCallback(){super.disconnectedCallback(),this.stopObserver()}handleSlotChange(){this.disabled||this.startObserver()}startObserver(){const e=this.shadowRoot.querySelector("slot");if(e!==null){const t=e.assignedElements({flatten:!0});this.observedElements.forEach(r=>this.resizeObserver.unobserve(r)),this.observedElements=[],t.forEach(r=>{this.resizeObserver.observe(r),this.observedElements.push(r)})}}stopObserver(){this.resizeObserver.disconnect()}handleDisabledChange(){this.disabled?this.stopObserver():this.startObserver()}render(){return N` <slot @slotchange=${this.handleSlotChange}></slot> `}};Sn.styles=[ke,wf];x([A({type:Boolean,reflect:!0})],Sn.prototype,"disabled",2);x([de("disabled",{waitUntilFirstUpdate:!0})],Sn.prototype,"handleDisabledChange",1);var Ne=class extends be{constructor(){super(...arguments),this.tabs=[],this.focusableTabs=[],this.panels=[],this.localize=new Fe(this),this.hasScrollControls=!1,this.shouldHideScrollStartButton=!1,this.shouldHideScrollEndButton=!1,this.placement="top",this.activation="auto",this.noScrollControls=!1,this.fixedScrollControls=!1,this.scrollOffset=1}connectedCallback(){const e=Promise.all([customElements.whenDefined("sl-tab"),customElements.whenDefined("sl-tab-panel")]);super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>{this.repositionIndicator(),this.updateScrollControls()}),this.mutationObserver=new MutationObserver(t=>{const r=t.filter(({target:s})=>{if(s===this)return!0;if(s.closest("sl-tab-group")!==this)return!1;const i=s.tagName.toLowerCase();return i==="sl-tab"||i==="sl-tab-panel"});if(r.length!==0){if(r.some(s=>!["aria-labelledby","aria-controls"].includes(s.attributeName))&&setTimeout(()=>this.setAriaLabels()),r.some(s=>s.attributeName==="disabled"))this.syncTabsAndPanels();else if(r.some(s=>s.attributeName==="active")){const i=r.filter(n=>n.attributeName==="active"&&n.target.tagName.toLowerCase()==="sl-tab").map(n=>n.target).find(n=>n.active);i&&this.setActiveTab(i)}}}),this.updateComplete.then(()=>{this.syncTabsAndPanels(),this.mutationObserver.observe(this,{attributes:!0,attributeFilter:["active","disabled","name","panel"],childList:!0,subtree:!0}),this.resizeObserver.observe(this.nav),e.then(()=>{new IntersectionObserver((r,s)=>{var i;r[0].intersectionRatio>0&&(this.setAriaLabels(),this.setActiveTab((i=this.getActiveTab())!=null?i:this.tabs[0],{emitEvents:!1}),s.unobserve(r[0].target))}).observe(this.tabGroup)})})}disconnectedCallback(){var e,t;super.disconnectedCallback(),(e=this.mutationObserver)==null||e.disconnect(),this.nav&&((t=this.resizeObserver)==null||t.unobserve(this.nav))}getAllTabs(){return this.shadowRoot.querySelector('slot[name="nav"]').assignedElements()}getAllPanels(){return[...this.body.assignedElements()].filter(e=>e.tagName.toLowerCase()==="sl-tab-panel")}getActiveTab(){return this.tabs.find(e=>e.active)}handleClick(e){const r=e.target.closest("sl-tab");r?.closest("sl-tab-group")===this&&r!==null&&this.setActiveTab(r,{scrollBehavior:"smooth"})}handleKeyDown(e){const r=e.target.closest("sl-tab");if(r?.closest("sl-tab-group")===this&&(["Enter"," "].includes(e.key)&&r!==null&&(this.setActiveTab(r,{scrollBehavior:"smooth"}),e.preventDefault()),["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(e.key))){const i=this.tabs.find(a=>a.matches(":focus")),n=this.localize.dir()==="rtl";let o=null;if(i?.tagName.toLowerCase()==="sl-tab"){if(e.key==="Home")o=this.focusableTabs[0];else if(e.key==="End")o=this.focusableTabs[this.focusableTabs.length-1];else if(["top","bottom"].includes(this.placement)&&e.key===(n?"ArrowRight":"ArrowLeft")||["start","end"].includes(this.placement)&&e.key==="ArrowUp"){const a=this.tabs.findIndex(l=>l===i);o=this.findNextFocusableTab(a,"backward")}else if(["top","bottom"].includes(this.placement)&&e.key===(n?"ArrowLeft":"ArrowRight")||["start","end"].includes(this.placement)&&e.key==="ArrowDown"){const a=this.tabs.findIndex(l=>l===i);o=this.findNextFocusableTab(a,"forward")}if(!o)return;o.tabIndex=0,o.focus({preventScroll:!0}),this.activation==="auto"?this.setActiveTab(o,{scrollBehavior:"smooth"}):this.tabs.forEach(a=>{a.tabIndex=a===o?0:-1}),["top","bottom"].includes(this.placement)&&So(o,this.nav,"horizontal"),e.preventDefault()}}}handleScrollToStart(){this.nav.scroll({left:this.localize.dir()==="rtl"?this.nav.scrollLeft+this.nav.clientWidth:this.nav.scrollLeft-this.nav.clientWidth,behavior:"smooth"})}handleScrollToEnd(){this.nav.scroll({left:this.localize.dir()==="rtl"?this.nav.scrollLeft-this.nav.clientWidth:this.nav.scrollLeft+this.nav.clientWidth,behavior:"smooth"})}setActiveTab(e,t){if(t=Gt({emitEvents:!0,scrollBehavior:"auto"},t),e!==this.activeTab&&!e.disabled){const r=this.activeTab;this.activeTab=e,this.tabs.forEach(s=>{s.active=s===this.activeTab,s.tabIndex=s===this.activeTab?0:-1}),this.panels.forEach(s=>{var i;return s.active=s.name===((i=this.activeTab)==null?void 0:i.panel)}),this.syncIndicator(),["top","bottom"].includes(this.placement)&&So(this.activeTab,this.nav,"horizontal",t.scrollBehavior),t.emitEvents&&(r&&this.emit("sl-tab-hide",{detail:{name:r.panel}}),this.emit("sl-tab-show",{detail:{name:this.activeTab.panel}}))}}setAriaLabels(){this.tabs.forEach(e=>{const t=this.panels.find(r=>r.name===e.panel);t&&(e.setAttribute("aria-controls",t.getAttribute("id")),t.setAttribute("aria-labelledby",e.getAttribute("id")))})}repositionIndicator(){const e=this.getActiveTab();if(!e)return;const t=e.clientWidth,r=e.clientHeight,s=this.localize.dir()==="rtl",i=this.getAllTabs(),o=i.slice(0,i.indexOf(e)).reduce((a,l)=>({left:a.left+l.clientWidth,top:a.top+l.clientHeight}),{left:0,top:0});switch(this.placement){case"top":case"bottom":this.indicator.style.width=`${t}px`,this.indicator.style.height="auto",this.indicator.style.translate=s?`${-1*o.left}px`:`${o.left}px`;break;case"start":case"end":this.indicator.style.width="auto",this.indicator.style.height=`${r}px`,this.indicator.style.translate=`0 ${o.top}px`;break}}syncTabsAndPanels(){this.tabs=this.getAllTabs(),this.focusableTabs=this.tabs.filter(e=>!e.disabled),this.panels=this.getAllPanels(),this.syncIndicator(),this.updateComplete.then(()=>this.updateScrollControls())}findNextFocusableTab(e,t){let r=null;const s=t==="forward"?1:-1;let i=e+s;for(;e<this.tabs.length;){if(r=this.tabs[i]||null,r===null){t==="forward"?r=this.focusableTabs[0]:r=this.focusableTabs[this.focusableTabs.length-1];break}if(!r.disabled)break;i+=s}return r}updateScrollButtons(){this.hasScrollControls&&!this.fixedScrollControls&&(this.shouldHideScrollStartButton=this.scrollFromStart()<=this.scrollOffset,this.shouldHideScrollEndButton=this.isScrolledToEnd())}isScrolledToEnd(){return this.scrollFromStart()+this.nav.clientWidth>=this.nav.scrollWidth-this.scrollOffset}scrollFromStart(){return this.localize.dir()==="rtl"?-this.nav.scrollLeft:this.nav.scrollLeft}updateScrollControls(){this.noScrollControls?this.hasScrollControls=!1:this.hasScrollControls=["top","bottom"].includes(this.placement)&&this.nav.scrollWidth>this.nav.clientWidth+1,this.updateScrollButtons()}syncIndicator(){this.getActiveTab()?(this.indicator.style.display="block",this.repositionIndicator()):this.indicator.style.display="none"}show(e){const t=this.tabs.find(r=>r.panel===e);t&&this.setActiveTab(t,{scrollBehavior:"smooth"})}render(){const e=this.localize.dir()==="rtl";return N`
      <div
        part="base"
        class=${ve({"tab-group":!0,"tab-group--top":this.placement==="top","tab-group--bottom":this.placement==="bottom","tab-group--start":this.placement==="start","tab-group--end":this.placement==="end","tab-group--rtl":this.localize.dir()==="rtl","tab-group--has-scroll-controls":this.hasScrollControls})}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
      >
        <div class="tab-group__nav-container" part="nav">
          ${this.hasScrollControls?N`
                <sl-icon-button
                  part="scroll-button scroll-button--start"
                  exportparts="base:scroll-button__base"
                  class=${ve({"tab-group__scroll-button":!0,"tab-group__scroll-button--start":!0,"tab-group__scroll-button--start--hidden":this.shouldHideScrollStartButton})}
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

          ${this.hasScrollControls?N`
                <sl-icon-button
                  part="scroll-button scroll-button--end"
                  exportparts="base:scroll-button__base"
                  class=${ve({"tab-group__scroll-button":!0,"tab-group__scroll-button--end":!0,"tab-group__scroll-button--end--hidden":this.shouldHideScrollEndButton})}
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
    `}};Ne.styles=[ke,vf];Ne.dependencies={"sl-icon-button":Ae,"sl-resize-observer":Sn};x([ce(".tab-group")],Ne.prototype,"tabGroup",2);x([ce(".tab-group__body")],Ne.prototype,"body",2);x([ce(".tab-group__nav")],Ne.prototype,"nav",2);x([ce(".tab-group__indicator")],Ne.prototype,"indicator",2);x([H()],Ne.prototype,"hasScrollControls",2);x([H()],Ne.prototype,"shouldHideScrollStartButton",2);x([H()],Ne.prototype,"shouldHideScrollEndButton",2);x([A()],Ne.prototype,"placement",2);x([A()],Ne.prototype,"activation",2);x([A({attribute:"no-scroll-controls",type:Boolean})],Ne.prototype,"noScrollControls",2);x([A({attribute:"fixed-scroll-controls",type:Boolean})],Ne.prototype,"fixedScrollControls",2);x([Dh({passive:!0})],Ne.prototype,"updateScrollButtons",1);x([de("noScrollControls",{waitUntilFirstUpdate:!0})],Ne.prototype,"updateScrollControls",1);x([de("placement",{waitUntilFirstUpdate:!0})],Ne.prototype,"syncIndicator",1);Ne.define("sl-tab-group");var _f=(e,t)=>{let r=0;return function(...s){window.clearTimeout(r),r=window.setTimeout(()=>{e.call(this,...s)},t)}},ll=(e,t,r)=>{const s=e[t];e[t]=function(...i){s.call(this,...i),r.call(this,s,...i)}};(()=>{if(typeof window>"u")return;if(!("onscrollend"in window)){const t=new Set,r=new WeakMap,s=n=>{for(const o of n.changedTouches)t.add(o.identifier)},i=n=>{for(const o of n.changedTouches)t.delete(o.identifier)};document.addEventListener("touchstart",s,!0),document.addEventListener("touchend",i,!0),document.addEventListener("touchcancel",i,!0),ll(EventTarget.prototype,"addEventListener",function(n,o){if(o!=="scrollend")return;const a=_f(()=>{t.size?a():this.dispatchEvent(new Event("scrollend"))},100);n.call(this,"scroll",a,{passive:!0}),r.set(this,a)}),ll(EventTarget.prototype,"removeEventListener",function(n,o){if(o!=="scrollend")return;const a=r.get(this);a&&n.call(this,"scroll",a,{passive:!0})})}})();var $f=ie`
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
`,kf=0,yt=class extends be{constructor(){super(...arguments),this.localize=new Fe(this),this.attrId=++kf,this.componentId=`sl-tab-${this.attrId}`,this.panel="",this.active=!1,this.closable=!1,this.disabled=!1,this.tabIndex=0}connectedCallback(){super.connectedCallback(),this.setAttribute("role","tab")}handleCloseClick(e){e.stopPropagation(),this.emit("sl-close")}handleActiveChange(){this.setAttribute("aria-selected",this.active?"true":"false")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false"),this.disabled&&!this.active?this.tabIndex=-1:this.tabIndex=0}render(){return this.id=this.id.length>0?this.id:this.componentId,N`
      <div
        part="base"
        class=${ve({tab:!0,"tab--active":this.active,"tab--closable":this.closable,"tab--disabled":this.disabled})}
      >
        <slot></slot>
        ${this.closable?N`
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
    `}};yt.styles=[ke,$f];yt.dependencies={"sl-icon-button":Ae};x([ce(".tab")],yt.prototype,"tab",2);x([A({reflect:!0})],yt.prototype,"panel",2);x([A({type:Boolean,reflect:!0})],yt.prototype,"active",2);x([A({type:Boolean,reflect:!0})],yt.prototype,"closable",2);x([A({type:Boolean,reflect:!0})],yt.prototype,"disabled",2);x([A({type:Number,reflect:!0})],yt.prototype,"tabIndex",2);x([de("active")],yt.prototype,"handleActiveChange",1);x([de("disabled")],yt.prototype,"handleDisabledChange",1);yt.define("sl-tab");var xf=ie`
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
`,Sf=0,As=class extends be{constructor(){super(...arguments),this.attrId=++Sf,this.componentId=`sl-tab-panel-${this.attrId}`,this.name="",this.active=!1}connectedCallback(){super.connectedCallback(),this.id=this.id.length>0?this.id:this.componentId,this.setAttribute("role","tabpanel")}handleActiveChange(){this.setAttribute("aria-hidden",this.active?"false":"true")}render(){return N`
      <slot
        part="base"
        class=${ve({"tab-panel":!0,"tab-panel--active":this.active})}
      ></slot>
    `}};As.styles=[ke,xf];x([A({reflect:!0})],As.prototype,"name",2);x([A({type:Boolean,reflect:!0})],As.prototype,"active",2);x([de("active")],As.prototype,"handleActiveChange",1);As.define("sl-tab-panel");Le.define("sl-icon");Ae.define("sl-icon-button");var Cf=ie`
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
`,De=class extends be{constructor(){super(),this.localize=new Fe(this),this.content="",this.placement="top",this.disabled=!1,this.distance=8,this.open=!1,this.skidding=0,this.trigger="hover focus",this.hoist=!1,this.handleBlur=()=>{this.hasTrigger("focus")&&this.hide()},this.handleClick=()=>{this.hasTrigger("click")&&(this.open?this.hide():this.show())},this.handleFocus=()=>{this.hasTrigger("focus")&&this.show()},this.handleDocumentKeyDown=e=>{e.key==="Escape"&&(e.stopPropagation(),this.hide())},this.handleMouseOver=()=>{if(this.hasTrigger("hover")){const e=ol(getComputedStyle(this).getPropertyValue("--show-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.show(),e)}},this.handleMouseOut=()=>{if(this.hasTrigger("hover")){const e=ol(getComputedStyle(this).getPropertyValue("--hide-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.hide(),e)}},this.addEventListener("blur",this.handleBlur,!0),this.addEventListener("focus",this.handleFocus,!0),this.addEventListener("click",this.handleClick),this.addEventListener("mouseover",this.handleMouseOver),this.addEventListener("mouseout",this.handleMouseOut)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this.closeWatcher)==null||e.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown)}firstUpdated(){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition())}hasTrigger(e){return this.trigger.split(" ").includes(e)}async handleOpenChange(){var e,t;if(this.open){if(this.disabled)return;this.emit("sl-show"),"CloseWatcher"in window?((e=this.closeWatcher)==null||e.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide()}):document.addEventListener("keydown",this.handleDocumentKeyDown),await at(this.body),this.body.hidden=!1,this.popup.active=!0;const{keyframes:r,options:s}=We(this,"tooltip.show",{dir:this.localize.dir()});await Ge(this.popup.popup,r,s),this.popup.reposition(),this.emit("sl-after-show")}else{this.emit("sl-hide"),(t=this.closeWatcher)==null||t.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown),await at(this.body);const{keyframes:r,options:s}=We(this,"tooltip.hide",{dir:this.localize.dir()});await Ge(this.popup.popup,r,s),this.popup.active=!1,this.body.hidden=!0,this.emit("sl-after-hide")}}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}async show(){if(!this.open)return this.open=!0,xt(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,xt(this,"sl-after-hide")}render(){return N`
      <sl-popup
        part="base"
        exportparts="
          popup:base__popup,
          arrow:base__arrow
        "
        class=${ve({tooltip:!0,"tooltip--open":this.open})}
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
    `}};De.styles=[ke,Cf];De.dependencies={"sl-popup":ye};x([ce("slot:not([name])")],De.prototype,"defaultSlot",2);x([ce(".tooltip__body")],De.prototype,"body",2);x([ce("sl-popup")],De.prototype,"popup",2);x([A()],De.prototype,"content",2);x([A()],De.prototype,"placement",2);x([A({type:Boolean,reflect:!0})],De.prototype,"disabled",2);x([A({type:Number})],De.prototype,"distance",2);x([A({type:Boolean,reflect:!0})],De.prototype,"open",2);x([A({type:Number})],De.prototype,"skidding",2);x([A()],De.prototype,"trigger",2);x([A({type:Boolean})],De.prototype,"hoist",2);x([de("open",{waitUntilFirstUpdate:!0})],De.prototype,"handleOpenChange",1);x([de(["content","distance","hoist","placement","skidding"])],De.prototype,"handleOptionsChange",1);x([de("disabled")],De.prototype,"handleDisabledChange",1);et("tooltip.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:150,easing:"ease"}});et("tooltip.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:150,easing:"ease"}});De.define("sl-tooltip");var Ef=ie`
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
`;function Af(e,t){function r(i){const n=e.getBoundingClientRect(),o=e.ownerDocument.defaultView,a=n.left+o.scrollX,l=n.top+o.scrollY,c=i.pageX-a,d=i.pageY-l;t?.onMove&&t.onMove(c,d)}function s(){document.removeEventListener("pointermove",r),document.removeEventListener("pointerup",s),t?.onStop&&t.onStop()}document.addEventListener("pointermove",r,{passive:!0}),document.addEventListener("pointerup",s),t?.initialEvent instanceof PointerEvent&&r(t.initialEvent)}function cl(e,t,r){const s=i=>Object.is(i,-0)?0:i;return e<t?s(t):e>r?s(r):s(e)}var dl=()=>null,tt=class extends be{constructor(){super(...arguments),this.isCollapsed=!1,this.localize=new Fe(this),this.positionBeforeCollapsing=0,this.position=50,this.vertical=!1,this.disabled=!1,this.snapValue="",this.snapFunction=dl,this.snapThreshold=12}toSnapFunction(e){const t=e.split(" ");return({pos:r,size:s,snapThreshold:i,isRtl:n,vertical:o})=>{let a=r,l=Number.POSITIVE_INFINITY;return t.forEach(c=>{let d;if(c.startsWith("repeat(")){const u=e.substring(7,e.length-1),h=u.endsWith("%"),y=Number.parseFloat(u),g=h?s*(y/100):y;d=Math.round((n&&!o?s-r:r)/g)*g}else c.endsWith("%")?d=s*(Number.parseFloat(c)/100):d=Number.parseFloat(c);n&&!o&&(d=s-d);const p=Math.abs(r-d);p<=i&&p<l&&(a=d,l=p)}),a}}set snap(e){this.snapValue=e??"",e?this.snapFunction=typeof e=="string"?this.toSnapFunction(e):e:this.snapFunction=dl}get snap(){return this.snapValue}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(e=>this.handleResize(e)),this.updateComplete.then(()=>this.resizeObserver.observe(this)),this.detectSize(),this.cachedPositionInPixels=this.percentageToPixels(this.position)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this.resizeObserver)==null||e.unobserve(this)}detectSize(){const{width:e,height:t}=this.getBoundingClientRect();this.size=this.vertical?t:e}percentageToPixels(e){return this.size*(e/100)}pixelsToPercentage(e){return e/this.size*100}handleDrag(e){const t=this.localize.dir()==="rtl";this.disabled||(e.cancelable&&e.preventDefault(),Af(this,{onMove:(r,s)=>{var i;let n=this.vertical?s:r;this.primary==="end"&&(n=this.size-n),n=(i=this.snapFunction({pos:n,size:this.size,snapThreshold:this.snapThreshold,isRtl:t,vertical:this.vertical}))!=null?i:n,this.position=cl(this.pixelsToPercentage(n),0,100)},initialEvent:e}))}handleKeyDown(e){if(!this.disabled&&["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End","Enter"].includes(e.key)){let t=this.position;const r=(e.shiftKey?10:1)*(this.primary==="end"?-1:1);if(e.preventDefault(),(e.key==="ArrowLeft"&&!this.vertical||e.key==="ArrowUp"&&this.vertical)&&(t-=r),(e.key==="ArrowRight"&&!this.vertical||e.key==="ArrowDown"&&this.vertical)&&(t+=r),e.key==="Home"&&(t=this.primary==="end"?100:0),e.key==="End"&&(t=this.primary==="end"?0:100),e.key==="Enter")if(this.isCollapsed)t=this.positionBeforeCollapsing,this.isCollapsed=!1;else{const s=this.position;t=0,requestAnimationFrame(()=>{this.isCollapsed=!0,this.positionBeforeCollapsing=s})}this.position=cl(t,0,100)}}handleResize(e){const{width:t,height:r}=e[0].contentRect;this.size=this.vertical?r:t,(isNaN(this.cachedPositionInPixels)||this.position===1/0)&&(this.cachedPositionInPixels=Number(this.getAttribute("position-in-pixels")),this.positionInPixels=Number(this.getAttribute("position-in-pixels")),this.position=this.pixelsToPercentage(this.positionInPixels)),this.primary&&(this.position=this.pixelsToPercentage(this.cachedPositionInPixels))}handlePositionChange(){this.cachedPositionInPixels=this.percentageToPixels(this.position),this.isCollapsed=!1,this.positionBeforeCollapsing=0,this.positionInPixels=this.percentageToPixels(this.position),this.emit("sl-reposition")}handlePositionInPixelsChange(){this.position=this.pixelsToPercentage(this.positionInPixels)}handleVerticalChange(){this.detectSize()}render(){const e=this.vertical?"gridTemplateRows":"gridTemplateColumns",t=this.vertical?"gridTemplateColumns":"gridTemplateRows",r=this.localize.dir()==="rtl",s=`
      clamp(
        0%,
        clamp(
          var(--min),
          ${this.position}% - var(--divider-width) / 2,
          var(--max)
        ),
        calc(100% - var(--divider-width))
      )
    `,i="auto";return this.primary==="end"?r&&!this.vertical?this.style[e]=`${s} var(--divider-width) ${i}`:this.style[e]=`${i} var(--divider-width) ${s}`:r&&!this.vertical?this.style[e]=`${i} var(--divider-width) ${s}`:this.style[e]=`${s} var(--divider-width) ${i}`,this.style[t]="",N`
      <slot name="start" part="panel start" class="start"></slot>

      <div
        part="divider"
        class="divider"
        tabindex=${Q(this.disabled?void 0:"0")}
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
    `}};tt.styles=[ke,Ef];x([ce(".divider")],tt.prototype,"divider",2);x([A({type:Number,reflect:!0})],tt.prototype,"position",2);x([A({attribute:"position-in-pixels",type:Number})],tt.prototype,"positionInPixels",2);x([A({type:Boolean,reflect:!0})],tt.prototype,"vertical",2);x([A({type:Boolean,reflect:!0})],tt.prototype,"disabled",2);x([A()],tt.prototype,"primary",2);x([A({reflect:!0})],tt.prototype,"snap",1);x([A({type:Number,attribute:"snap-threshold"})],tt.prototype,"snapThreshold",2);x([de("position")],tt.prototype,"handlePositionChange",1);x([de("positionInPixels")],tt.prototype,"handlePositionInPixelsChange",1);x([de("vertical")],tt.prototype,"handleVerticalChange",1);tt.define("sl-split-panel");var Tf=ie`
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
`,Ld=class extends be{constructor(){super(...arguments),this.hasSlotController=new zt(this,"footer","header","image")}render(){return N`
      <div
        part="base"
        class=${ve({card:!0,"card--has-footer":this.hasSlotController.test("footer"),"card--has-image":this.hasSlotController.test("image"),"card--has-header":this.hasSlotController.test("header")})}
      >
        <slot name="image" part="image" class="card__image"></slot>
        <slot name="header" part="header" class="card__header"></slot>
        <slot part="body" class="card__body"></slot>
        <slot name="footer" part="footer" class="card__footer"></slot>
      </div>
    `}};Ld.styles=[ke,Tf];Ld.define("sl-card");var Pf=ie`
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
`,Ts=class extends be{constructor(){super(...arguments),this.variant="primary",this.pill=!1,this.pulse=!1}render(){return N`
      <span
        part="base"
        class=${ve({badge:!0,"badge--primary":this.variant==="primary","badge--success":this.variant==="success","badge--neutral":this.variant==="neutral","badge--warning":this.variant==="warning","badge--danger":this.variant==="danger","badge--pill":this.pill,"badge--pulse":this.pulse})}
        role="status"
      >
        <slot></slot>
      </span>
    `}};Ts.styles=[ke,Pf];x([A({reflect:!0})],Ts.prototype,"variant",2);x([A({type:Boolean,reflect:!0})],Ts.prototype,"pill",2);x([A({type:Boolean,reflect:!0})],Ts.prototype,"pulse",2);Ts.define("sl-badge");var Of=ie`
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
`,ze=class extends be{constructor(){super(...arguments),this.localize=new Fe(this),this.open=!1,this.placement="bottom-start",this.disabled=!1,this.stayOpenOnSelect=!1,this.distance=0,this.skidding=0,this.hoist=!1,this.sync=void 0,this.handleKeyDown=e=>{this.open&&e.key==="Escape"&&(e.stopPropagation(),this.hide(),this.focusOnTrigger())},this.handleDocumentKeyDown=e=>{var t;if(e.key==="Escape"&&this.open&&!this.closeWatcher){e.stopPropagation(),this.focusOnTrigger(),this.hide();return}if(e.key==="Tab"){if(this.open&&((t=document.activeElement)==null?void 0:t.tagName.toLowerCase())==="sl-menu-item"){e.preventDefault(),this.hide(),this.focusOnTrigger();return}const r=(s,i)=>{if(!s)return null;const n=s.closest(i);if(n)return n;const o=s.getRootNode();return o instanceof ShadowRoot?r(o.host,i):null};setTimeout(()=>{var s;const i=((s=this.containingElement)==null?void 0:s.getRootNode())instanceof ShadowRoot?Rd():document.activeElement;(!this.containingElement||r(i,this.containingElement.tagName.toLowerCase())!==this.containingElement)&&this.hide()})}},this.handleDocumentMouseDown=e=>{const t=e.composedPath();this.containingElement&&!t.includes(this.containingElement)&&this.hide()},this.handlePanelSelect=e=>{const t=e.target;!this.stayOpenOnSelect&&t.tagName.toLowerCase()==="sl-menu"&&(this.hide(),this.focusOnTrigger())}}connectedCallback(){super.connectedCallback(),this.containingElement||(this.containingElement=this)}firstUpdated(){this.panel.hidden=!this.open,this.open&&(this.addOpenListeners(),this.popup.active=!0)}disconnectedCallback(){super.disconnectedCallback(),this.removeOpenListeners(),this.hide()}focusOnTrigger(){const e=this.trigger.assignedElements({flatten:!0})[0];typeof e?.focus=="function"&&e.focus()}getMenu(){return this.panel.assignedElements({flatten:!0}).find(e=>e.tagName.toLowerCase()==="sl-menu")}handleTriggerClick(){this.open?this.hide():(this.show(),this.focusOnTrigger())}async handleTriggerKeyDown(e){if([" ","Enter"].includes(e.key)){e.preventDefault(),this.handleTriggerClick();return}const t=this.getMenu();if(t){const r=t.getAllItems(),s=r[0],i=r[r.length-1];["ArrowDown","ArrowUp","Home","End"].includes(e.key)&&(e.preventDefault(),this.open||(this.show(),await this.updateComplete),r.length>0&&this.updateComplete.then(()=>{(e.key==="ArrowDown"||e.key==="Home")&&(t.setCurrentItem(s),s.focus()),(e.key==="ArrowUp"||e.key==="End")&&(t.setCurrentItem(i),i.focus())}))}}handleTriggerKeyUp(e){e.key===" "&&e.preventDefault()}handleTriggerSlotChange(){this.updateAccessibleTrigger()}updateAccessibleTrigger(){const t=this.trigger.assignedElements({flatten:!0}).find(s=>mf(s).start);let r;if(t){switch(t.tagName.toLowerCase()){case"sl-button":case"sl-icon-button":r=t.button;break;default:r=t}r.setAttribute("aria-haspopup","true"),r.setAttribute("aria-expanded",this.open?"true":"false")}}async show(){if(!this.open)return this.open=!0,xt(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,xt(this,"sl-after-hide")}reposition(){this.popup.reposition()}addOpenListeners(){var e;this.panel.addEventListener("sl-select",this.handlePanelSelect),"CloseWatcher"in window?((e=this.closeWatcher)==null||e.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide(),this.focusOnTrigger()}):this.panel.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown)}removeOpenListeners(){var e;this.panel&&(this.panel.removeEventListener("sl-select",this.handlePanelSelect),this.panel.removeEventListener("keydown",this.handleKeyDown)),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown),(e=this.closeWatcher)==null||e.destroy()}async handleOpenChange(){if(this.disabled){this.open=!1;return}if(this.updateAccessibleTrigger(),this.open){this.emit("sl-show"),this.addOpenListeners(),await at(this),this.panel.hidden=!1,this.popup.active=!0;const{keyframes:e,options:t}=We(this,"dropdown.show",{dir:this.localize.dir()});await Ge(this.popup.popup,e,t),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),await at(this);const{keyframes:e,options:t}=We(this,"dropdown.hide",{dir:this.localize.dir()});await Ge(this.popup.popup,e,t),this.panel.hidden=!0,this.popup.active=!1,this.emit("sl-after-hide")}}render(){return N`
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
        sync=${Q(this.sync?this.sync:void 0)}
        class=${ve({dropdown:!0,"dropdown--open":this.open})}
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
    `}};ze.styles=[ke,Of];ze.dependencies={"sl-popup":ye};x([ce(".dropdown")],ze.prototype,"popup",2);x([ce(".dropdown__trigger")],ze.prototype,"trigger",2);x([ce(".dropdown__panel")],ze.prototype,"panel",2);x([A({type:Boolean,reflect:!0})],ze.prototype,"open",2);x([A({reflect:!0})],ze.prototype,"placement",2);x([A({type:Boolean,reflect:!0})],ze.prototype,"disabled",2);x([A({attribute:"stay-open-on-select",type:Boolean,reflect:!0})],ze.prototype,"stayOpenOnSelect",2);x([A({attribute:!1})],ze.prototype,"containingElement",2);x([A({type:Number})],ze.prototype,"distance",2);x([A({type:Number})],ze.prototype,"skidding",2);x([A({type:Boolean})],ze.prototype,"hoist",2);x([A({reflect:!0})],ze.prototype,"sync",2);x([de("open",{waitUntilFirstUpdate:!0})],ze.prototype,"handleOpenChange",1);et("dropdown.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}});et("dropdown.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}});ze.define("sl-dropdown");var If=ie`
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
`,aa=class extends be{connectedCallback(){super.connectedCallback(),this.setAttribute("role","menu")}handleClick(e){const t=["menuitem","menuitemcheckbox"],r=e.composedPath(),s=r.find(a=>{var l;return t.includes(((l=a?.getAttribute)==null?void 0:l.call(a,"role"))||"")});if(!s||r.find(a=>{var l;return((l=a?.getAttribute)==null?void 0:l.call(a,"role"))==="menu"})!==this)return;const o=s;o.type==="checkbox"&&(o.checked=!o.checked),this.emit("sl-select",{detail:{item:o}})}handleKeyDown(e){if(e.key==="Enter"||e.key===" "){const t=this.getCurrentItem();e.preventDefault(),e.stopPropagation(),t?.click()}else if(["ArrowDown","ArrowUp","Home","End"].includes(e.key)){const t=this.getAllItems(),r=this.getCurrentItem();let s=r?t.indexOf(r):0;t.length>0&&(e.preventDefault(),e.stopPropagation(),e.key==="ArrowDown"?s++:e.key==="ArrowUp"?s--:e.key==="Home"?s=0:e.key==="End"&&(s=t.length-1),s<0&&(s=t.length-1),s>t.length-1&&(s=0),this.setCurrentItem(t[s]),t[s].focus())}}handleMouseDown(e){const t=e.target;this.isMenuItem(t)&&this.setCurrentItem(t)}handleSlotChange(){const e=this.getAllItems();e.length>0&&this.setCurrentItem(e[0])}isMenuItem(e){var t;return e.tagName.toLowerCase()==="sl-menu-item"||["menuitem","menuitemcheckbox","menuitemradio"].includes((t=e.getAttribute("role"))!=null?t:"")}getAllItems(){return[...this.defaultSlot.assignedElements({flatten:!0})].filter(e=>!(e.inert||!this.isMenuItem(e)))}getCurrentItem(){return this.getAllItems().find(e=>e.getAttribute("tabindex")==="0")}setCurrentItem(e){this.getAllItems().forEach(r=>{r.setAttribute("tabindex",r===e?"0":"-1")})}render(){return N`
      <slot
        @slotchange=${this.handleSlotChange}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleMouseDown}
      ></slot>
    `}};aa.styles=[ke,If];x([ce("slot")],aa.prototype,"defaultSlot",2);aa.define("sl-menu");var Rf=ie`
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
`;const hs=(e,t)=>{const r=e._$AN;if(r===void 0)return!1;for(const s of r)s._$AO?.(t,!1),hs(s,t);return!0},an=e=>{let t,r;do{if((t=e._$AM)===void 0)break;r=t._$AN,r.delete(e),e=t}while(r?.size===0)},zd=e=>{for(let t;t=e._$AM;e=t){let r=t._$AN;if(r===void 0)t._$AN=r=new Set;else if(r.has(e))break;r.add(e),Lf(t)}};function Nf(e){this._$AN!==void 0?(an(this),this._$AM=e,zd(this)):this._$AM=e}function Df(e,t=!1,r=0){const s=this._$AH,i=this._$AN;if(i!==void 0&&i.size!==0)if(t)if(Array.isArray(s))for(let n=r;n<s.length;n++)hs(s[n],!1),an(s[n]);else s!=null&&(hs(s,!1),an(s));else hs(this,e)}const Lf=e=>{e.type==It.CHILD&&(e._$AP??=Df,e._$AQ??=Nf)};class zf extends bn{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,r,s){super._$AT(t,r,s),zd(this),this.isConnected=t._$AU}_$AO(t,r=!0){t!==this.isConnected&&(this.isConnected=t,t?this.reconnected?.():this.disconnected?.()),r&&(hs(this,t),an(this))}setValue(t){if(wd(this._$Ct))this._$Ct._$AI(t,this);else{const r=[...this._$Ct._$AH];r[this._$Ci]=t,this._$Ct._$AI(r,this,0)}}disconnected(){}reconnected(){}}const jf=()=>new Mf;class Mf{}const Xn=new WeakMap,qf=yn(class extends zf{render(e){return $e}update(e,[t]){const r=t!==this.G;return r&&this.G!==void 0&&this.rt(void 0),(r||this.lt!==this.ct)&&(this.G=t,this.ht=e.options?.host,this.rt(this.ct=e.element)),$e}rt(e){if(this.isConnected||(e=void 0),typeof this.G=="function"){const t=this.ht??globalThis;let r=Xn.get(t);r===void 0&&(r=new WeakMap,Xn.set(t,r)),r.get(this.G)!==void 0&&this.G.call(this.ht,void 0),r.set(this.G,e),e!==void 0&&this.G.call(this.ht,e)}else this.G.value=e}get lt(){return typeof this.G=="function"?Xn.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});var Ff=class{constructor(e,t){this.popupRef=jf(),this.enableSubmenuTimer=-1,this.isConnected=!1,this.isPopupConnected=!1,this.skidding=0,this.submenuOpenDelay=100,this.handleMouseMove=r=>{this.host.style.setProperty("--safe-triangle-cursor-x",`${r.clientX}px`),this.host.style.setProperty("--safe-triangle-cursor-y",`${r.clientY}px`)},this.handleMouseOver=()=>{this.hasSlotController.test("submenu")&&this.enableSubmenu()},this.handleKeyDown=r=>{switch(r.key){case"Escape":case"Tab":this.disableSubmenu();break;case"ArrowLeft":r.target!==this.host&&(r.preventDefault(),r.stopPropagation(),this.host.focus(),this.disableSubmenu());break;case"ArrowRight":case"Enter":case" ":this.handleSubmenuEntry(r);break}},this.handleClick=r=>{var s;r.target===this.host?(r.preventDefault(),r.stopPropagation()):r.target instanceof Element&&(r.target.tagName==="sl-menu-item"||(s=r.target.role)!=null&&s.startsWith("menuitem"))&&this.disableSubmenu()},this.handleFocusOut=r=>{r.relatedTarget&&r.relatedTarget instanceof Element&&this.host.contains(r.relatedTarget)||this.disableSubmenu()},this.handlePopupMouseover=r=>{r.stopPropagation()},this.handlePopupReposition=()=>{const r=this.host.renderRoot.querySelector("slot[name='submenu']"),s=r?.assignedElements({flatten:!0}).filter(c=>c.localName==="sl-menu")[0],i=getComputedStyle(this.host).direction==="rtl";if(!s)return;const{left:n,top:o,width:a,height:l}=s.getBoundingClientRect();this.host.style.setProperty("--safe-triangle-submenu-start-x",`${i?n+a:n}px`),this.host.style.setProperty("--safe-triangle-submenu-start-y",`${o}px`),this.host.style.setProperty("--safe-triangle-submenu-end-x",`${i?n+a:n}px`),this.host.style.setProperty("--safe-triangle-submenu-end-y",`${o+l}px`)},(this.host=e).addController(this),this.hasSlotController=t}hostConnected(){this.hasSlotController.test("submenu")&&!this.host.disabled&&this.addListeners()}hostDisconnected(){this.removeListeners()}hostUpdated(){this.hasSlotController.test("submenu")&&!this.host.disabled?(this.addListeners(),this.updateSkidding()):this.removeListeners()}addListeners(){this.isConnected||(this.host.addEventListener("mousemove",this.handleMouseMove),this.host.addEventListener("mouseover",this.handleMouseOver),this.host.addEventListener("keydown",this.handleKeyDown),this.host.addEventListener("click",this.handleClick),this.host.addEventListener("focusout",this.handleFocusOut),this.isConnected=!0),this.isPopupConnected||this.popupRef.value&&(this.popupRef.value.addEventListener("mouseover",this.handlePopupMouseover),this.popupRef.value.addEventListener("sl-reposition",this.handlePopupReposition),this.isPopupConnected=!0)}removeListeners(){this.isConnected&&(this.host.removeEventListener("mousemove",this.handleMouseMove),this.host.removeEventListener("mouseover",this.handleMouseOver),this.host.removeEventListener("keydown",this.handleKeyDown),this.host.removeEventListener("click",this.handleClick),this.host.removeEventListener("focusout",this.handleFocusOut),this.isConnected=!1),this.isPopupConnected&&this.popupRef.value&&(this.popupRef.value.removeEventListener("mouseover",this.handlePopupMouseover),this.popupRef.value.removeEventListener("sl-reposition",this.handlePopupReposition),this.isPopupConnected=!1)}handleSubmenuEntry(e){const t=this.host.renderRoot.querySelector("slot[name='submenu']");if(!t){console.error("Cannot activate a submenu if no corresponding menuitem can be found.",this);return}let r=null;for(const s of t.assignedElements())if(r=s.querySelectorAll("sl-menu-item, [role^='menuitem']"),r.length!==0)break;if(!(!r||r.length===0)){r[0].setAttribute("tabindex","0");for(let s=1;s!==r.length;++s)r[s].setAttribute("tabindex","-1");this.popupRef.value&&(e.preventDefault(),e.stopPropagation(),this.popupRef.value.active?r[0]instanceof HTMLElement&&r[0].focus():(this.enableSubmenu(!1),this.host.updateComplete.then(()=>{r[0]instanceof HTMLElement&&r[0].focus()}),this.host.requestUpdate()))}}setSubmenuState(e){this.popupRef.value&&this.popupRef.value.active!==e&&(this.popupRef.value.active=e,this.host.requestUpdate())}enableSubmenu(e=!0){e?(window.clearTimeout(this.enableSubmenuTimer),this.enableSubmenuTimer=window.setTimeout(()=>{this.setSubmenuState(!0)},this.submenuOpenDelay)):this.setSubmenuState(!0)}disableSubmenu(){window.clearTimeout(this.enableSubmenuTimer),this.setSubmenuState(!1)}updateSkidding(){var e;if(!((e=this.host.parentElement)!=null&&e.computedStyleMap))return;const t=this.host.parentElement.computedStyleMap(),s=["padding-top","border-top-width","margin-top"].reduce((i,n)=>{var o;const a=(o=t.get(n))!=null?o:new CSSUnitValue(0,"px"),c=(a instanceof CSSUnitValue?a:new CSSUnitValue(0,"px")).to("px");return i-c.value},0);this.skidding=s}isExpanded(){return this.popupRef.value?this.popupRef.value.active:!1}renderSubmenu(){const e=getComputedStyle(this.host).direction==="rtl";return this.isConnected?N`
      <sl-popup
        ${qf(this.popupRef)}
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
    `:N` <slot name="submenu" hidden></slot> `}},rt=class extends be{constructor(){super(...arguments),this.localize=new Fe(this),this.type="normal",this.checked=!1,this.value="",this.loading=!1,this.disabled=!1,this.hasSlotController=new zt(this,"submenu"),this.submenuController=new Ff(this,this.hasSlotController),this.handleHostClick=e=>{this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())},this.handleMouseOver=e=>{this.focus(),e.stopPropagation()}}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this.handleHostClick),this.addEventListener("mouseover",this.handleMouseOver)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this.handleHostClick),this.removeEventListener("mouseover",this.handleMouseOver)}handleDefaultSlotChange(){const e=this.getTextLabel();if(typeof this.cachedTextLabel>"u"){this.cachedTextLabel=e;return}e!==this.cachedTextLabel&&(this.cachedTextLabel=e,this.emit("slotchange",{bubbles:!0,composed:!1,cancelable:!1}))}handleCheckedChange(){if(this.checked&&this.type!=="checkbox"){this.checked=!1,console.error('The checked attribute can only be used on menu items with type="checkbox"',this);return}this.type==="checkbox"?this.setAttribute("aria-checked",this.checked?"true":"false"):this.removeAttribute("aria-checked")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleTypeChange(){this.type==="checkbox"?(this.setAttribute("role","menuitemcheckbox"),this.setAttribute("aria-checked",this.checked?"true":"false")):(this.setAttribute("role","menuitem"),this.removeAttribute("aria-checked"))}getTextLabel(){return jh(this.defaultSlot)}isSubmenu(){return this.hasSlotController.test("submenu")}render(){const e=this.localize.dir()==="rtl",t=this.submenuController.isExpanded();return N`
      <div
        id="anchor"
        part="base"
        class=${ve({"menu-item":!0,"menu-item--rtl":e,"menu-item--checked":this.checked,"menu-item--disabled":this.disabled,"menu-item--loading":this.loading,"menu-item--has-submenu":this.isSubmenu(),"menu-item--submenu-expanded":t})}
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
        ${this.loading?N` <sl-spinner part="spinner" exportparts="base:spinner__base"></sl-spinner> `:""}
      </div>
    `}};rt.styles=[ke,Rf];rt.dependencies={"sl-icon":Le,"sl-popup":ye,"sl-spinner":Qo};x([ce("slot:not([name])")],rt.prototype,"defaultSlot",2);x([ce(".menu-item")],rt.prototype,"menuItem",2);x([A()],rt.prototype,"type",2);x([A({type:Boolean,reflect:!0})],rt.prototype,"checked",2);x([A()],rt.prototype,"value",2);x([A({type:Boolean,reflect:!0})],rt.prototype,"loading",2);x([A({type:Boolean,reflect:!0})],rt.prototype,"disabled",2);x([de("checked")],rt.prototype,"handleCheckedChange",1);x([de("disabled")],rt.prototype,"handleDisabledChange",1);x([de("type")],rt.prototype,"handleTypeChange",1);rt.define("sl-menu-item");var Vf=ie`
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
`,st=class Zt extends be{constructor(){super(...arguments),this.hasSlotController=new zt(this,"icon","suffix"),this.localize=new Fe(this),this.open=!1,this.closable=!1,this.variant="primary",this.duration=1/0,this.remainingTime=this.duration}static get toastStack(){return this.currentToastStack||(this.currentToastStack=Object.assign(document.createElement("div"),{className:"sl-toast-stack"})),this.currentToastStack}firstUpdated(){this.base.hidden=!this.open}restartAutoHide(){this.handleCountdownChange(),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval),this.open&&this.duration<1/0&&(this.autoHideTimeout=window.setTimeout(()=>this.hide(),this.duration),this.remainingTime=this.duration,this.remainingTimeInterval=window.setInterval(()=>{this.remainingTime-=100},100))}pauseAutoHide(){var t;(t=this.countdownAnimation)==null||t.pause(),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval)}resumeAutoHide(){var t;this.duration<1/0&&(this.autoHideTimeout=window.setTimeout(()=>this.hide(),this.remainingTime),this.remainingTimeInterval=window.setInterval(()=>{this.remainingTime-=100},100),(t=this.countdownAnimation)==null||t.play())}handleCountdownChange(){if(this.open&&this.duration<1/0&&this.countdown){const{countdownElement:t}=this,r="100%",s="0";this.countdownAnimation=t.animate([{width:r},{width:s}],{duration:this.duration,easing:"linear"})}}handleCloseClick(){this.hide()}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.duration<1/0&&this.restartAutoHide(),await at(this.base),this.base.hidden=!1;const{keyframes:t,options:r}=We(this,"alert.show",{dir:this.localize.dir()});await Ge(this.base,t,r),this.emit("sl-after-show")}else{Dd(this),this.emit("sl-hide"),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval),await at(this.base);const{keyframes:t,options:r}=We(this,"alert.hide",{dir:this.localize.dir()});await Ge(this.base,t,r),this.base.hidden=!0,this.emit("sl-after-hide")}}handleDurationChange(){this.restartAutoHide()}async show(){if(!this.open)return this.open=!0,xt(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,xt(this,"sl-after-hide")}async toast(){return new Promise(t=>{this.handleCountdownChange(),Zt.toastStack.parentElement===null&&document.body.append(Zt.toastStack),Zt.toastStack.appendChild(this),requestAnimationFrame(()=>{this.clientWidth,this.show()}),this.addEventListener("sl-after-hide",()=>{Zt.toastStack.removeChild(this),t(),Zt.toastStack.querySelector("sl-alert")===null&&Zt.toastStack.remove()},{once:!0})})}render(){return N`
      <div
        part="base"
        class=${ve({alert:!0,"alert--open":this.open,"alert--closable":this.closable,"alert--has-countdown":!!this.countdown,"alert--has-icon":this.hasSlotController.test("icon"),"alert--primary":this.variant==="primary","alert--success":this.variant==="success","alert--neutral":this.variant==="neutral","alert--warning":this.variant==="warning","alert--danger":this.variant==="danger"})}
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

        ${this.closable?N`
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

        ${this.countdown?N`
              <div
                class=${ve({alert__countdown:!0,"alert__countdown--ltr":this.countdown==="ltr"})}
              >
                <div class="alert__countdown-elapsed"></div>
              </div>
            `:""}
      </div>
    `}};st.styles=[ke,Vf];st.dependencies={"sl-icon-button":Ae};x([ce('[part~="base"]')],st.prototype,"base",2);x([ce(".alert__countdown-elapsed")],st.prototype,"countdownElement",2);x([A({type:Boolean,reflect:!0})],st.prototype,"open",2);x([A({type:Boolean,reflect:!0})],st.prototype,"closable",2);x([A({reflect:!0})],st.prototype,"variant",2);x([A({type:Number})],st.prototype,"duration",2);x([A({type:String,reflect:!0})],st.prototype,"countdown",2);x([H()],st.prototype,"remainingTime",2);x([de("open",{waitUntilFirstUpdate:!0})],st.prototype,"handleOpenChange",1);x([de("duration")],st.prototype,"handleDurationChange",1);var Bf=st;et("alert.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}});et("alert.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}});Bf.define("sl-alert");$o("https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.20/cdn");function jd(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Us={exports:{}},Qn={},At={},Jt={},Zn={},eo={},to={},ul;function ln(){return ul||(ul=1,(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.regexpCode=e.getEsmExportName=e.getProperty=e.safeStringify=e.stringify=e.strConcat=e.addCodeArg=e.str=e._=e.nil=e._Code=e.Name=e.IDENTIFIER=e._CodeOrName=void 0;class t{}e._CodeOrName=t,e.IDENTIFIER=/^[a-z$_][a-z$_0-9]*$/i;class r extends t{constructor(m){if(super(),!e.IDENTIFIER.test(m))throw new Error("CodeGen: name must be a valid identifier");this.str=m}toString(){return this.str}emptyStr(){return!1}get names(){return{[this.str]:1}}}e.Name=r;class s extends t{constructor(m){super(),this._items=typeof m=="string"?[m]:m}toString(){return this.str}emptyStr(){if(this._items.length>1)return!1;const m=this._items[0];return m===""||m==='""'}get str(){var m;return(m=this._str)!==null&&m!==void 0?m:this._str=this._items.reduce((v,$)=>`${v}${$}`,"")}get names(){var m;return(m=this._names)!==null&&m!==void 0?m:this._names=this._items.reduce((v,$)=>($ instanceof r&&(v[$.str]=(v[$.str]||0)+1),v),{})}}e._Code=s,e.nil=new s("");function i(w,...m){const v=[w[0]];let $=0;for(;$<m.length;)a(v,m[$]),v.push(w[++$]);return new s(v)}e._=i;const n=new s("+");function o(w,...m){const v=[h(w[0])];let $=0;for(;$<m.length;)v.push(n),a(v,m[$]),v.push(n,h(w[++$]));return l(v),new s(v)}e.str=o;function a(w,m){m instanceof s?w.push(...m._items):m instanceof r?w.push(m):w.push(p(m))}e.addCodeArg=a;function l(w){let m=1;for(;m<w.length-1;){if(w[m]===n){const v=c(w[m-1],w[m+1]);if(v!==void 0){w.splice(m-1,3,v);continue}w[m++]="+"}m++}}function c(w,m){if(m==='""')return w;if(w==='""')return m;if(typeof w=="string")return m instanceof r||w[w.length-1]!=='"'?void 0:typeof m!="string"?`${w.slice(0,-1)}${m}"`:m[0]==='"'?w.slice(0,-1)+m.slice(1):void 0;if(typeof m=="string"&&m[0]==='"'&&!(w instanceof r))return`"${w}${m.slice(1)}`}function d(w,m){return m.emptyStr()?w:w.emptyStr()?m:o`${w}${m}`}e.strConcat=d;function p(w){return typeof w=="number"||typeof w=="boolean"||w===null?w:h(Array.isArray(w)?w.join(","):w)}function u(w){return new s(h(w))}e.stringify=u;function h(w){return JSON.stringify(w).replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029")}e.safeStringify=h;function y(w){return typeof w=="string"&&e.IDENTIFIER.test(w)?new s(`.${w}`):i`[${w}]`}e.getProperty=y;function g(w){if(typeof w=="string"&&e.IDENTIFIER.test(w))return new s(`${w}`);throw new Error(`CodeGen: invalid export name: ${w}, use explicit $id name mapping`)}e.getEsmExportName=g;function f(w){return new s(w.toString())}e.regexpCode=f})(to)),to}var ro={},hl;function pl(){return hl||(hl=1,(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.ValueScope=e.ValueScopeName=e.Scope=e.varKinds=e.UsedValueState=void 0;const t=ln();class r extends Error{constructor(c){super(`CodeGen: "code" for ${c} not defined`),this.value=c.value}}var s;(function(l){l[l.Started=0]="Started",l[l.Completed=1]="Completed"})(s||(e.UsedValueState=s={})),e.varKinds={const:new t.Name("const"),let:new t.Name("let"),var:new t.Name("var")};class i{constructor({prefixes:c,parent:d}={}){this._names={},this._prefixes=c,this._parent=d}toName(c){return c instanceof t.Name?c:this.name(c)}name(c){return new t.Name(this._newName(c))}_newName(c){const d=this._names[c]||this._nameGroup(c);return`${c}${d.index++}`}_nameGroup(c){var d,p;if(!((p=(d=this._parent)===null||d===void 0?void 0:d._prefixes)===null||p===void 0)&&p.has(c)||this._prefixes&&!this._prefixes.has(c))throw new Error(`CodeGen: prefix "${c}" is not allowed in this scope`);return this._names[c]={prefix:c,index:0}}}e.Scope=i;class n extends t.Name{constructor(c,d){super(d),this.prefix=c}setValue(c,{property:d,itemIndex:p}){this.value=c,this.scopePath=(0,t._)`.${new t.Name(d)}[${p}]`}}e.ValueScopeName=n;const o=(0,t._)`\n`;class a extends i{constructor(c){super(c),this._values={},this._scope=c.scope,this.opts={...c,_n:c.lines?o:t.nil}}get(){return this._scope}name(c){return new n(c,this._newName(c))}value(c,d){var p;if(d.ref===void 0)throw new Error("CodeGen: ref must be passed in value");const u=this.toName(c),{prefix:h}=u,y=(p=d.key)!==null&&p!==void 0?p:d.ref;let g=this._values[h];if(g){const m=g.get(y);if(m)return m}else g=this._values[h]=new Map;g.set(y,u);const f=this._scope[h]||(this._scope[h]=[]),w=f.length;return f[w]=d.ref,u.setValue(d,{property:h,itemIndex:w}),u}getValue(c,d){const p=this._values[c];if(p)return p.get(d)}scopeRefs(c,d=this._values){return this._reduceValues(d,p=>{if(p.scopePath===void 0)throw new Error(`CodeGen: name "${p}" has no value`);return(0,t._)`${c}${p.scopePath}`})}scopeCode(c=this._values,d,p){return this._reduceValues(c,u=>{if(u.value===void 0)throw new Error(`CodeGen: name "${u}" has no value`);return u.value.code},d,p)}_reduceValues(c,d,p={},u){let h=t.nil;for(const y in c){const g=c[y];if(!g)continue;const f=p[y]=p[y]||new Map;g.forEach(w=>{if(f.has(w))return;f.set(w,s.Started);let m=d(w);if(m){const v=this.opts.es5?e.varKinds.var:e.varKinds.const;h=(0,t._)`${h}${v} ${w} = ${m};${this.opts._n}`}else if(m=u?.(w))h=(0,t._)`${h}${m}${this.opts._n}`;else throw new r(w);f.set(w,s.Completed)})}return h}}e.ValueScope=a})(ro)),ro}var fl;function ee(){return fl||(fl=1,(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.or=e.and=e.not=e.CodeGen=e.operators=e.varKinds=e.ValueScopeName=e.ValueScope=e.Scope=e.Name=e.regexpCode=e.stringify=e.getProperty=e.nil=e.strConcat=e.str=e._=void 0;const t=ln(),r=pl();var s=ln();Object.defineProperty(e,"_",{enumerable:!0,get:function(){return s._}}),Object.defineProperty(e,"str",{enumerable:!0,get:function(){return s.str}}),Object.defineProperty(e,"strConcat",{enumerable:!0,get:function(){return s.strConcat}}),Object.defineProperty(e,"nil",{enumerable:!0,get:function(){return s.nil}}),Object.defineProperty(e,"getProperty",{enumerable:!0,get:function(){return s.getProperty}}),Object.defineProperty(e,"stringify",{enumerable:!0,get:function(){return s.stringify}}),Object.defineProperty(e,"regexpCode",{enumerable:!0,get:function(){return s.regexpCode}}),Object.defineProperty(e,"Name",{enumerable:!0,get:function(){return s.Name}});var i=pl();Object.defineProperty(e,"Scope",{enumerable:!0,get:function(){return i.Scope}}),Object.defineProperty(e,"ValueScope",{enumerable:!0,get:function(){return i.ValueScope}}),Object.defineProperty(e,"ValueScopeName",{enumerable:!0,get:function(){return i.ValueScopeName}}),Object.defineProperty(e,"varKinds",{enumerable:!0,get:function(){return i.varKinds}}),e.operators={GT:new t._Code(">"),GTE:new t._Code(">="),LT:new t._Code("<"),LTE:new t._Code("<="),EQ:new t._Code("==="),NEQ:new t._Code("!=="),NOT:new t._Code("!"),OR:new t._Code("||"),AND:new t._Code("&&"),ADD:new t._Code("+")};class n{optimizeNodes(){return this}optimizeNames(k,E){return this}}class o extends n{constructor(k,E,L){super(),this.varKind=k,this.name=E,this.rhs=L}render({es5:k,_n:E}){const L=k?r.varKinds.var:this.varKind,K=this.rhs===void 0?"":` = ${this.rhs}`;return`${L} ${this.name}${K};`+E}optimizeNames(k,E){if(k[this.name.str])return this.rhs&&(this.rhs=V(this.rhs,k,E)),this}get names(){return this.rhs instanceof t._CodeOrName?this.rhs.names:{}}}class a extends n{constructor(k,E,L){super(),this.lhs=k,this.rhs=E,this.sideEffects=L}render({_n:k}){return`${this.lhs} = ${this.rhs};`+k}optimizeNames(k,E){if(!(this.lhs instanceof t.Name&&!k[this.lhs.str]&&!this.sideEffects))return this.rhs=V(this.rhs,k,E),this}get names(){const k=this.lhs instanceof t.Name?{}:{...this.lhs.names};return B(k,this.rhs)}}class l extends a{constructor(k,E,L,K){super(k,L,K),this.op=E}render({_n:k}){return`${this.lhs} ${this.op}= ${this.rhs};`+k}}class c extends n{constructor(k){super(),this.label=k,this.names={}}render({_n:k}){return`${this.label}:`+k}}class d extends n{constructor(k){super(),this.label=k,this.names={}}render({_n:k}){return`break${this.label?` ${this.label}`:""};`+k}}class p extends n{constructor(k){super(),this.error=k}render({_n:k}){return`throw ${this.error};`+k}get names(){return this.error.names}}class u extends n{constructor(k){super(),this.code=k}render({_n:k}){return`${this.code};`+k}optimizeNodes(){return`${this.code}`?this:void 0}optimizeNames(k,E){return this.code=V(this.code,k,E),this}get names(){return this.code instanceof t._CodeOrName?this.code.names:{}}}class h extends n{constructor(k=[]){super(),this.nodes=k}render(k){return this.nodes.reduce((E,L)=>E+L.render(k),"")}optimizeNodes(){const{nodes:k}=this;let E=k.length;for(;E--;){const L=k[E].optimizeNodes();Array.isArray(L)?k.splice(E,1,...L):L?k[E]=L:k.splice(E,1)}return k.length>0?this:void 0}optimizeNames(k,E){const{nodes:L}=this;let K=L.length;for(;K--;){const W=L[K];W.optimizeNames(k,E)||(X(k,W.names),L.splice(K,1))}return L.length>0?this:void 0}get names(){return this.nodes.reduce((k,E)=>z(k,E.names),{})}}class y extends h{render(k){return"{"+k._n+super.render(k)+"}"+k._n}}class g extends h{}class f extends y{}f.kind="else";class w extends y{constructor(k,E){super(E),this.condition=k}render(k){let E=`if(${this.condition})`+super.render(k);return this.else&&(E+="else "+this.else.render(k)),E}optimizeNodes(){super.optimizeNodes();const k=this.condition;if(k===!0)return this.nodes;let E=this.else;if(E){const L=E.optimizeNodes();E=this.else=Array.isArray(L)?new f(L):L}if(E)return k===!1?E instanceof w?E:E.nodes:this.nodes.length?this:new w(ae(k),E instanceof w?[E]:E.nodes);if(!(k===!1||!this.nodes.length))return this}optimizeNames(k,E){var L;if(this.else=(L=this.else)===null||L===void 0?void 0:L.optimizeNames(k,E),!!(super.optimizeNames(k,E)||this.else))return this.condition=V(this.condition,k,E),this}get names(){const k=super.names;return B(k,this.condition),this.else&&z(k,this.else.names),k}}w.kind="if";class m extends y{}m.kind="for";class v extends m{constructor(k){super(),this.iteration=k}render(k){return`for(${this.iteration})`+super.render(k)}optimizeNames(k,E){if(super.optimizeNames(k,E))return this.iteration=V(this.iteration,k,E),this}get names(){return z(super.names,this.iteration.names)}}class $ extends m{constructor(k,E,L,K){super(),this.varKind=k,this.name=E,this.from=L,this.to=K}render(k){const E=k.es5?r.varKinds.var:this.varKind,{name:L,from:K,to:W}=this;return`for(${E} ${L}=${K}; ${L}<${W}; ${L}++)`+super.render(k)}get names(){const k=B(super.names,this.from);return B(k,this.to)}}class b extends m{constructor(k,E,L,K){super(),this.loop=k,this.varKind=E,this.name=L,this.iterable=K}render(k){return`for(${this.varKind} ${this.name} ${this.loop} ${this.iterable})`+super.render(k)}optimizeNames(k,E){if(super.optimizeNames(k,E))return this.iterable=V(this.iterable,k,E),this}get names(){return z(super.names,this.iterable.names)}}class _ extends y{constructor(k,E,L){super(),this.name=k,this.args=E,this.async=L}render(k){return`${this.async?"async ":""}function ${this.name}(${this.args})`+super.render(k)}}_.kind="func";class S extends h{render(k){return"return "+super.render(k)}}S.kind="return";class C extends y{render(k){let E="try"+super.render(k);return this.catch&&(E+=this.catch.render(k)),this.finally&&(E+=this.finally.render(k)),E}optimizeNodes(){var k,E;return super.optimizeNodes(),(k=this.catch)===null||k===void 0||k.optimizeNodes(),(E=this.finally)===null||E===void 0||E.optimizeNodes(),this}optimizeNames(k,E){var L,K;return super.optimizeNames(k,E),(L=this.catch)===null||L===void 0||L.optimizeNames(k,E),(K=this.finally)===null||K===void 0||K.optimizeNames(k,E),this}get names(){const k=super.names;return this.catch&&z(k,this.catch.names),this.finally&&z(k,this.finally.names),k}}class O extends y{constructor(k){super(),this.error=k}render(k){return`catch(${this.error})`+super.render(k)}}O.kind="catch";class M extends y{render(k){return"finally"+super.render(k)}}M.kind="finally";class D{constructor(k,E={}){this._values={},this._blockStarts=[],this._constants={},this.opts={...E,_n:E.lines?`
`:""},this._extScope=k,this._scope=new r.Scope({parent:k}),this._nodes=[new g]}toString(){return this._root.render(this.opts)}name(k){return this._scope.name(k)}scopeName(k){return this._extScope.name(k)}scopeValue(k,E){const L=this._extScope.value(k,E);return(this._values[L.prefix]||(this._values[L.prefix]=new Set)).add(L),L}getScopeValue(k,E){return this._extScope.getValue(k,E)}scopeRefs(k){return this._extScope.scopeRefs(k,this._values)}scopeCode(){return this._extScope.scopeCode(this._values)}_def(k,E,L,K){const W=this._scope.toName(E);return L!==void 0&&K&&(this._constants[W.str]=L),this._leafNode(new o(k,W,L)),W}const(k,E,L){return this._def(r.varKinds.const,k,E,L)}let(k,E,L){return this._def(r.varKinds.let,k,E,L)}var(k,E,L){return this._def(r.varKinds.var,k,E,L)}assign(k,E,L){return this._leafNode(new a(k,E,L))}add(k,E){return this._leafNode(new l(k,e.operators.ADD,E))}code(k){return typeof k=="function"?k():k!==t.nil&&this._leafNode(new u(k)),this}object(...k){const E=["{"];for(const[L,K]of k)E.length>1&&E.push(","),E.push(L),(L!==K||this.opts.es5)&&(E.push(":"),(0,t.addCodeArg)(E,K));return E.push("}"),new t._Code(E)}if(k,E,L){if(this._blockNode(new w(k)),E&&L)this.code(E).else().code(L).endIf();else if(E)this.code(E).endIf();else if(L)throw new Error('CodeGen: "else" body without "then" body');return this}elseIf(k){return this._elseNode(new w(k))}else(){return this._elseNode(new f)}endIf(){return this._endBlockNode(w,f)}_for(k,E){return this._blockNode(k),E&&this.code(E).endFor(),this}for(k,E){return this._for(new v(k),E)}forRange(k,E,L,K,W=this.opts.es5?r.varKinds.var:r.varKinds.let){const he=this._scope.toName(k);return this._for(new $(W,he,E,L),()=>K(he))}forOf(k,E,L,K=r.varKinds.const){const W=this._scope.toName(k);if(this.opts.es5){const he=E instanceof t.Name?E:this.var("_arr",E);return this.forRange("_i",0,(0,t._)`${he}.length`,oe=>{this.var(W,(0,t._)`${he}[${oe}]`),L(W)})}return this._for(new b("of",K,W,E),()=>L(W))}forIn(k,E,L,K=this.opts.es5?r.varKinds.var:r.varKinds.const){if(this.opts.ownProperties)return this.forOf(k,(0,t._)`Object.keys(${E})`,L);const W=this._scope.toName(k);return this._for(new b("in",K,W,E),()=>L(W))}endFor(){return this._endBlockNode(m)}label(k){return this._leafNode(new c(k))}break(k){return this._leafNode(new d(k))}return(k){const E=new S;if(this._blockNode(E),this.code(k),E.nodes.length!==1)throw new Error('CodeGen: "return" should have one node');return this._endBlockNode(S)}try(k,E,L){if(!E&&!L)throw new Error('CodeGen: "try" without "catch" and "finally"');const K=new C;if(this._blockNode(K),this.code(k),E){const W=this.name("e");this._currNode=K.catch=new O(W),E(W)}return L&&(this._currNode=K.finally=new M,this.code(L)),this._endBlockNode(O,M)}throw(k){return this._leafNode(new p(k))}block(k,E){return this._blockStarts.push(this._nodes.length),k&&this.code(k).endBlock(E),this}endBlock(k){const E=this._blockStarts.pop();if(E===void 0)throw new Error("CodeGen: not in self-balancing block");const L=this._nodes.length-E;if(L<0||k!==void 0&&L!==k)throw new Error(`CodeGen: wrong number of nodes: ${L} vs ${k} expected`);return this._nodes.length=E,this}func(k,E=t.nil,L,K){return this._blockNode(new _(k,E,L)),K&&this.code(K).endFunc(),this}endFunc(){return this._endBlockNode(_)}optimize(k=1){for(;k-- >0;)this._root.optimizeNodes(),this._root.optimizeNames(this._root.names,this._constants)}_leafNode(k){return this._currNode.nodes.push(k),this}_blockNode(k){this._currNode.nodes.push(k),this._nodes.push(k)}_endBlockNode(k,E){const L=this._currNode;if(L instanceof k||E&&L instanceof E)return this._nodes.pop(),this;throw new Error(`CodeGen: not in block "${E?`${k.kind}/${E.kind}`:k.kind}"`)}_elseNode(k){const E=this._currNode;if(!(E instanceof w))throw new Error('CodeGen: "else" without "if"');return this._currNode=E.else=k,this}get _root(){return this._nodes[0]}get _currNode(){const k=this._nodes;return k[k.length-1]}set _currNode(k){const E=this._nodes;E[E.length-1]=k}}e.CodeGen=D;function z(I,k){for(const E in k)I[E]=(I[E]||0)+(k[E]||0);return I}function B(I,k){return k instanceof t._CodeOrName?z(I,k.names):I}function V(I,k,E){if(I instanceof t.Name)return L(I);if(!K(I))return I;return new t._Code(I._items.reduce((W,he)=>(he instanceof t.Name&&(he=L(he)),he instanceof t._Code?W.push(...he._items):W.push(he),W),[]));function L(W){const he=E[W.str];return he===void 0||k[W.str]!==1?W:(delete k[W.str],he)}function K(W){return W instanceof t._Code&&W._items.some(he=>he instanceof t.Name&&k[he.str]===1&&E[he.str]!==void 0)}}function X(I,k){for(const E in k)I[E]=(I[E]||0)-(k[E]||0)}function ae(I){return typeof I=="boolean"||typeof I=="number"||I===null?!I:(0,t._)`!${j(I)}`}e.not=ae;const Z=P(e.operators.AND);function J(...I){return I.reduce(Z)}e.and=J;const fe=P(e.operators.OR);function F(...I){return I.reduce(fe)}e.or=F;function P(I){return(k,E)=>k===t.nil?E:E===t.nil?k:(0,t._)`${j(k)} ${I} ${j(E)}`}function j(I){return I instanceof t.Name?I:(0,t._)`(${I})`}})(eo)),eo}var se={},ml;function le(){if(ml)return se;ml=1,Object.defineProperty(se,"__esModule",{value:!0}),se.checkStrictMode=se.getErrorPath=se.Type=se.useFunc=se.setEvaluated=se.evaluatedPropsToName=se.mergeEvaluated=se.eachItem=se.unescapeJsonPointer=se.escapeJsonPointer=se.escapeFragment=se.unescapeFragment=se.schemaRefOrVal=se.schemaHasRulesButRef=se.schemaHasRules=se.checkUnknownRules=se.alwaysValidSchema=se.toHash=void 0;const e=ee(),t=ln();function r(b){const _={};for(const S of b)_[S]=!0;return _}se.toHash=r;function s(b,_){return typeof _=="boolean"?_:Object.keys(_).length===0?!0:(i(b,_),!n(_,b.self.RULES.all))}se.alwaysValidSchema=s;function i(b,_=b.schema){const{opts:S,self:C}=b;if(!S.strictSchema||typeof _=="boolean")return;const O=C.RULES.keywords;for(const M in _)O[M]||$(b,`unknown keyword: "${M}"`)}se.checkUnknownRules=i;function n(b,_){if(typeof b=="boolean")return!b;for(const S in b)if(_[S])return!0;return!1}se.schemaHasRules=n;function o(b,_){if(typeof b=="boolean")return!b;for(const S in b)if(S!=="$ref"&&_.all[S])return!0;return!1}se.schemaHasRulesButRef=o;function a({topSchemaRef:b,schemaPath:_},S,C,O){if(!O){if(typeof S=="number"||typeof S=="boolean")return S;if(typeof S=="string")return(0,e._)`${S}`}return(0,e._)`${b}${_}${(0,e.getProperty)(C)}`}se.schemaRefOrVal=a;function l(b){return p(decodeURIComponent(b))}se.unescapeFragment=l;function c(b){return encodeURIComponent(d(b))}se.escapeFragment=c;function d(b){return typeof b=="number"?`${b}`:b.replace(/~/g,"~0").replace(/\//g,"~1")}se.escapeJsonPointer=d;function p(b){return b.replace(/~1/g,"/").replace(/~0/g,"~")}se.unescapeJsonPointer=p;function u(b,_){if(Array.isArray(b))for(const S of b)_(S);else _(b)}se.eachItem=u;function h({mergeNames:b,mergeToName:_,mergeValues:S,resultToName:C}){return(O,M,D,z)=>{const B=D===void 0?M:D instanceof e.Name?(M instanceof e.Name?b(O,M,D):_(O,M,D),D):M instanceof e.Name?(_(O,D,M),M):S(M,D);return z===e.Name&&!(B instanceof e.Name)?C(O,B):B}}se.mergeEvaluated={props:h({mergeNames:(b,_,S)=>b.if((0,e._)`${S} !== true && ${_} !== undefined`,()=>{b.if((0,e._)`${_} === true`,()=>b.assign(S,!0),()=>b.assign(S,(0,e._)`${S} || {}`).code((0,e._)`Object.assign(${S}, ${_})`))}),mergeToName:(b,_,S)=>b.if((0,e._)`${S} !== true`,()=>{_===!0?b.assign(S,!0):(b.assign(S,(0,e._)`${S} || {}`),g(b,S,_))}),mergeValues:(b,_)=>b===!0?!0:{...b,..._},resultToName:y}),items:h({mergeNames:(b,_,S)=>b.if((0,e._)`${S} !== true && ${_} !== undefined`,()=>b.assign(S,(0,e._)`${_} === true ? true : ${S} > ${_} ? ${S} : ${_}`)),mergeToName:(b,_,S)=>b.if((0,e._)`${S} !== true`,()=>b.assign(S,_===!0?!0:(0,e._)`${S} > ${_} ? ${S} : ${_}`)),mergeValues:(b,_)=>b===!0?!0:Math.max(b,_),resultToName:(b,_)=>b.var("items",_)})};function y(b,_){if(_===!0)return b.var("props",!0);const S=b.var("props",(0,e._)`{}`);return _!==void 0&&g(b,S,_),S}se.evaluatedPropsToName=y;function g(b,_,S){Object.keys(S).forEach(C=>b.assign((0,e._)`${_}${(0,e.getProperty)(C)}`,!0))}se.setEvaluated=g;const f={};function w(b,_){return b.scopeValue("func",{ref:_,code:f[_.code]||(f[_.code]=new t._Code(_.code))})}se.useFunc=w;var m;(function(b){b[b.Num=0]="Num",b[b.Str=1]="Str"})(m||(se.Type=m={}));function v(b,_,S){if(b instanceof e.Name){const C=_===m.Num;return S?C?(0,e._)`"[" + ${b} + "]"`:(0,e._)`"['" + ${b} + "']"`:C?(0,e._)`"/" + ${b}`:(0,e._)`"/" + ${b}.replace(/~/g, "~0").replace(/\\//g, "~1")`}return S?(0,e.getProperty)(b).toString():"/"+d(b)}se.getErrorPath=v;function $(b,_,S=b.opts.strictSchema){if(S){if(_=`strict mode: ${_}`,S===!0)throw new Error(_);b.self.logger.warn(_)}}return se.checkStrictMode=$,se}var Hs={},gl;function bt(){if(gl)return Hs;gl=1,Object.defineProperty(Hs,"__esModule",{value:!0});const e=ee(),t={data:new e.Name("data"),valCxt:new e.Name("valCxt"),instancePath:new e.Name("instancePath"),parentData:new e.Name("parentData"),parentDataProperty:new e.Name("parentDataProperty"),rootData:new e.Name("rootData"),dynamicAnchors:new e.Name("dynamicAnchors"),vErrors:new e.Name("vErrors"),errors:new e.Name("errors"),this:new e.Name("this"),self:new e.Name("self"),scope:new e.Name("scope"),json:new e.Name("json"),jsonPos:new e.Name("jsonPos"),jsonLen:new e.Name("jsonLen"),jsonPart:new e.Name("jsonPart")};return Hs.default=t,Hs}var yl;function Cn(){return yl||(yl=1,(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.extendErrors=e.resetErrorsCount=e.reportExtraError=e.reportError=e.keyword$DataError=e.keywordError=void 0;const t=ee(),r=le(),s=bt();e.keywordError={message:({keyword:f})=>(0,t.str)`must pass "${f}" keyword validation`},e.keyword$DataError={message:({keyword:f,schemaType:w})=>w?(0,t.str)`"${f}" keyword must be ${w} ($data)`:(0,t.str)`"${f}" keyword is invalid ($data)`};function i(f,w=e.keywordError,m,v){const{it:$}=f,{gen:b,compositeRule:_,allErrors:S}=$,C=p(f,w,m);v??(_||S)?l(b,C):c($,(0,t._)`[${C}]`)}e.reportError=i;function n(f,w=e.keywordError,m){const{it:v}=f,{gen:$,compositeRule:b,allErrors:_}=v,S=p(f,w,m);l($,S),b||_||c(v,s.default.vErrors)}e.reportExtraError=n;function o(f,w){f.assign(s.default.errors,w),f.if((0,t._)`${s.default.vErrors} !== null`,()=>f.if(w,()=>f.assign((0,t._)`${s.default.vErrors}.length`,w),()=>f.assign(s.default.vErrors,null)))}e.resetErrorsCount=o;function a({gen:f,keyword:w,schemaValue:m,data:v,errsCount:$,it:b}){if($===void 0)throw new Error("ajv implementation error");const _=f.name("err");f.forRange("i",$,s.default.errors,S=>{f.const(_,(0,t._)`${s.default.vErrors}[${S}]`),f.if((0,t._)`${_}.instancePath === undefined`,()=>f.assign((0,t._)`${_}.instancePath`,(0,t.strConcat)(s.default.instancePath,b.errorPath))),f.assign((0,t._)`${_}.schemaPath`,(0,t.str)`${b.errSchemaPath}/${w}`),b.opts.verbose&&(f.assign((0,t._)`${_}.schema`,m),f.assign((0,t._)`${_}.data`,v))})}e.extendErrors=a;function l(f,w){const m=f.const("err",w);f.if((0,t._)`${s.default.vErrors} === null`,()=>f.assign(s.default.vErrors,(0,t._)`[${m}]`),(0,t._)`${s.default.vErrors}.push(${m})`),f.code((0,t._)`${s.default.errors}++`)}function c(f,w){const{gen:m,validateName:v,schemaEnv:$}=f;$.$async?m.throw((0,t._)`new ${f.ValidationError}(${w})`):(m.assign((0,t._)`${v}.errors`,w),m.return(!1))}const d={keyword:new t.Name("keyword"),schemaPath:new t.Name("schemaPath"),params:new t.Name("params"),propertyName:new t.Name("propertyName"),message:new t.Name("message"),schema:new t.Name("schema"),parentSchema:new t.Name("parentSchema")};function p(f,w,m){const{createErrors:v}=f.it;return v===!1?(0,t._)`{}`:u(f,w,m)}function u(f,w,m={}){const{gen:v,it:$}=f,b=[h($,m),y(f,m)];return g(f,w,b),v.object(...b)}function h({errorPath:f},{instancePath:w}){const m=w?(0,t.str)`${f}${(0,r.getErrorPath)(w,r.Type.Str)}`:f;return[s.default.instancePath,(0,t.strConcat)(s.default.instancePath,m)]}function y({keyword:f,it:{errSchemaPath:w}},{schemaPath:m,parentSchema:v}){let $=v?w:(0,t.str)`${w}/${f}`;return m&&($=(0,t.str)`${$}${(0,r.getErrorPath)(m,r.Type.Str)}`),[d.schemaPath,$]}function g(f,{params:w,message:m},v){const{keyword:$,data:b,schemaValue:_,it:S}=f,{opts:C,propertyName:O,topSchemaRef:M,schemaPath:D}=S;v.push([d.keyword,$],[d.params,typeof w=="function"?w(f):w||(0,t._)`{}`]),C.messages&&v.push([d.message,typeof m=="function"?m(f):m]),C.verbose&&v.push([d.schema,_],[d.parentSchema,(0,t._)`${M}${D}`],[s.default.data,b]),O&&v.push([d.propertyName,O])}})(Zn)),Zn}var bl;function Uf(){if(bl)return Jt;bl=1,Object.defineProperty(Jt,"__esModule",{value:!0}),Jt.boolOrEmptySchema=Jt.topBoolOrEmptySchema=void 0;const e=Cn(),t=ee(),r=bt(),s={message:"boolean schema is false"};function i(a){const{gen:l,schema:c,validateName:d}=a;c===!1?o(a,!1):typeof c=="object"&&c.$async===!0?l.return(r.default.data):(l.assign((0,t._)`${d}.errors`,null),l.return(!0))}Jt.topBoolOrEmptySchema=i;function n(a,l){const{gen:c,schema:d}=a;d===!1?(c.var(l,!1),o(a)):c.var(l,!0)}Jt.boolOrEmptySchema=n;function o(a,l){const{gen:c,data:d}=a,p={gen:c,keyword:"false schema",data:d,schema:!1,schemaCode:!1,schemaValue:!1,params:{},it:a};(0,e.reportError)(p,s,void 0,l)}return Jt}var Ie={},Xt={},vl;function Md(){if(vl)return Xt;vl=1,Object.defineProperty(Xt,"__esModule",{value:!0}),Xt.getRules=Xt.isJSONType=void 0;const e=["string","number","integer","boolean","null","object","array"],t=new Set(e);function r(i){return typeof i=="string"&&t.has(i)}Xt.isJSONType=r;function s(){const i={number:{type:"number",rules:[]},string:{type:"string",rules:[]},array:{type:"array",rules:[]},object:{type:"object",rules:[]}};return{types:{...i,integer:!0,boolean:!0,null:!0},rules:[{rules:[]},i.number,i.string,i.array,i.object],post:{rules:[]},all:{},keywords:{}}}return Xt.getRules=s,Xt}var Tt={},wl;function qd(){if(wl)return Tt;wl=1,Object.defineProperty(Tt,"__esModule",{value:!0}),Tt.shouldUseRule=Tt.shouldUseGroup=Tt.schemaHasRulesForType=void 0;function e({schema:s,self:i},n){const o=i.RULES.types[n];return o&&o!==!0&&t(s,o)}Tt.schemaHasRulesForType=e;function t(s,i){return i.rules.some(n=>r(s,n))}Tt.shouldUseGroup=t;function r(s,i){var n;return s[i.keyword]!==void 0||((n=i.definition.implements)===null||n===void 0?void 0:n.some(o=>s[o]!==void 0))}return Tt.shouldUseRule=r,Tt}var _l;function cn(){if(_l)return Ie;_l=1,Object.defineProperty(Ie,"__esModule",{value:!0}),Ie.reportTypeError=Ie.checkDataTypes=Ie.checkDataType=Ie.coerceAndCheckDataType=Ie.getJSONTypes=Ie.getSchemaTypes=Ie.DataType=void 0;const e=Md(),t=qd(),r=Cn(),s=ee(),i=le();var n;(function(m){m[m.Correct=0]="Correct",m[m.Wrong=1]="Wrong"})(n||(Ie.DataType=n={}));function o(m){const v=a(m.type);if(v.includes("null")){if(m.nullable===!1)throw new Error("type: null contradicts nullable: false")}else{if(!v.length&&m.nullable!==void 0)throw new Error('"nullable" cannot be used without "type"');m.nullable===!0&&v.push("null")}return v}Ie.getSchemaTypes=o;function a(m){const v=Array.isArray(m)?m:m?[m]:[];if(v.every(e.isJSONType))return v;throw new Error("type must be JSONType or JSONType[]: "+v.join(","))}Ie.getJSONTypes=a;function l(m,v){const{gen:$,data:b,opts:_}=m,S=d(v,_.coerceTypes),C=v.length>0&&!(S.length===0&&v.length===1&&(0,t.schemaHasRulesForType)(m,v[0]));if(C){const O=y(v,b,_.strictNumbers,n.Wrong);$.if(O,()=>{S.length?p(m,v,S):f(m)})}return C}Ie.coerceAndCheckDataType=l;const c=new Set(["string","number","integer","boolean","null"]);function d(m,v){return v?m.filter($=>c.has($)||v==="array"&&$==="array"):[]}function p(m,v,$){const{gen:b,data:_,opts:S}=m,C=b.let("dataType",(0,s._)`typeof ${_}`),O=b.let("coerced",(0,s._)`undefined`);S.coerceTypes==="array"&&b.if((0,s._)`${C} == 'object' && Array.isArray(${_}) && ${_}.length == 1`,()=>b.assign(_,(0,s._)`${_}[0]`).assign(C,(0,s._)`typeof ${_}`).if(y(v,_,S.strictNumbers),()=>b.assign(O,_))),b.if((0,s._)`${O} !== undefined`);for(const D of $)(c.has(D)||D==="array"&&S.coerceTypes==="array")&&M(D);b.else(),f(m),b.endIf(),b.if((0,s._)`${O} !== undefined`,()=>{b.assign(_,O),u(m,O)});function M(D){switch(D){case"string":b.elseIf((0,s._)`${C} == "number" || ${C} == "boolean"`).assign(O,(0,s._)`"" + ${_}`).elseIf((0,s._)`${_} === null`).assign(O,(0,s._)`""`);return;case"number":b.elseIf((0,s._)`${C} == "boolean" || ${_} === null
              || (${C} == "string" && ${_} && ${_} == +${_})`).assign(O,(0,s._)`+${_}`);return;case"integer":b.elseIf((0,s._)`${C} === "boolean" || ${_} === null
              || (${C} === "string" && ${_} && ${_} == +${_} && !(${_} % 1))`).assign(O,(0,s._)`+${_}`);return;case"boolean":b.elseIf((0,s._)`${_} === "false" || ${_} === 0 || ${_} === null`).assign(O,!1).elseIf((0,s._)`${_} === "true" || ${_} === 1`).assign(O,!0);return;case"null":b.elseIf((0,s._)`${_} === "" || ${_} === 0 || ${_} === false`),b.assign(O,null);return;case"array":b.elseIf((0,s._)`${C} === "string" || ${C} === "number"
              || ${C} === "boolean" || ${_} === null`).assign(O,(0,s._)`[${_}]`)}}}function u({gen:m,parentData:v,parentDataProperty:$},b){m.if((0,s._)`${v} !== undefined`,()=>m.assign((0,s._)`${v}[${$}]`,b))}function h(m,v,$,b=n.Correct){const _=b===n.Correct?s.operators.EQ:s.operators.NEQ;let S;switch(m){case"null":return(0,s._)`${v} ${_} null`;case"array":S=(0,s._)`Array.isArray(${v})`;break;case"object":S=(0,s._)`${v} && typeof ${v} == "object" && !Array.isArray(${v})`;break;case"integer":S=C((0,s._)`!(${v} % 1) && !isNaN(${v})`);break;case"number":S=C();break;default:return(0,s._)`typeof ${v} ${_} ${m}`}return b===n.Correct?S:(0,s.not)(S);function C(O=s.nil){return(0,s.and)((0,s._)`typeof ${v} == "number"`,O,$?(0,s._)`isFinite(${v})`:s.nil)}}Ie.checkDataType=h;function y(m,v,$,b){if(m.length===1)return h(m[0],v,$,b);let _;const S=(0,i.toHash)(m);if(S.array&&S.object){const C=(0,s._)`typeof ${v} != "object"`;_=S.null?C:(0,s._)`!${v} || ${C}`,delete S.null,delete S.array,delete S.object}else _=s.nil;S.number&&delete S.integer;for(const C in S)_=(0,s.and)(_,h(C,v,$,b));return _}Ie.checkDataTypes=y;const g={message:({schema:m})=>`must be ${m}`,params:({schema:m,schemaValue:v})=>typeof m=="string"?(0,s._)`{type: ${m}}`:(0,s._)`{type: ${v}}`};function f(m){const v=w(m);(0,r.reportError)(v,g)}Ie.reportTypeError=f;function w(m){const{gen:v,data:$,schema:b}=m,_=(0,i.schemaRefOrVal)(m,b,"type");return{gen:v,keyword:"type",data:$,schema:b.type,schemaCode:_,schemaValue:_,parentSchema:b,params:{},it:m}}return Ie}var ss={},$l;function Hf(){if($l)return ss;$l=1,Object.defineProperty(ss,"__esModule",{value:!0}),ss.assignDefaults=void 0;const e=ee(),t=le();function r(i,n){const{properties:o,items:a}=i.schema;if(n==="object"&&o)for(const l in o)s(i,l,o[l].default);else n==="array"&&Array.isArray(a)&&a.forEach((l,c)=>s(i,c,l.default))}ss.assignDefaults=r;function s(i,n,o){const{gen:a,compositeRule:l,data:c,opts:d}=i;if(o===void 0)return;const p=(0,e._)`${c}${(0,e.getProperty)(n)}`;if(l){(0,t.checkStrictMode)(i,`default is ignored for: ${p}`);return}let u=(0,e._)`${p} === undefined`;d.useDefaults==="empty"&&(u=(0,e._)`${u} || ${p} === null || ${p} === ""`),a.if(u,(0,e._)`${p} = ${(0,e.stringify)(o)}`)}return ss}var ht={},me={},kl;function vt(){if(kl)return me;kl=1,Object.defineProperty(me,"__esModule",{value:!0}),me.validateUnion=me.validateArray=me.usePattern=me.callValidateCode=me.schemaProperties=me.allSchemaProperties=me.noPropertyInData=me.propertyInData=me.isOwnProperty=me.hasPropFunc=me.reportMissingProp=me.checkMissingProp=me.checkReportMissingProp=void 0;const e=ee(),t=le(),r=bt(),s=le();function i(m,v){const{gen:$,data:b,it:_}=m;$.if(d($,b,v,_.opts.ownProperties),()=>{m.setParams({missingProperty:(0,e._)`${v}`},!0),m.error()})}me.checkReportMissingProp=i;function n({gen:m,data:v,it:{opts:$}},b,_){return(0,e.or)(...b.map(S=>(0,e.and)(d(m,v,S,$.ownProperties),(0,e._)`${_} = ${S}`)))}me.checkMissingProp=n;function o(m,v){m.setParams({missingProperty:v},!0),m.error()}me.reportMissingProp=o;function a(m){return m.scopeValue("func",{ref:Object.prototype.hasOwnProperty,code:(0,e._)`Object.prototype.hasOwnProperty`})}me.hasPropFunc=a;function l(m,v,$){return(0,e._)`${a(m)}.call(${v}, ${$})`}me.isOwnProperty=l;function c(m,v,$,b){const _=(0,e._)`${v}${(0,e.getProperty)($)} !== undefined`;return b?(0,e._)`${_} && ${l(m,v,$)}`:_}me.propertyInData=c;function d(m,v,$,b){const _=(0,e._)`${v}${(0,e.getProperty)($)} === undefined`;return b?(0,e.or)(_,(0,e.not)(l(m,v,$))):_}me.noPropertyInData=d;function p(m){return m?Object.keys(m).filter(v=>v!=="__proto__"):[]}me.allSchemaProperties=p;function u(m,v){return p(v).filter($=>!(0,t.alwaysValidSchema)(m,v[$]))}me.schemaProperties=u;function h({schemaCode:m,data:v,it:{gen:$,topSchemaRef:b,schemaPath:_,errorPath:S},it:C},O,M,D){const z=D?(0,e._)`${m}, ${v}, ${b}${_}`:v,B=[[r.default.instancePath,(0,e.strConcat)(r.default.instancePath,S)],[r.default.parentData,C.parentData],[r.default.parentDataProperty,C.parentDataProperty],[r.default.rootData,r.default.rootData]];C.opts.dynamicRef&&B.push([r.default.dynamicAnchors,r.default.dynamicAnchors]);const V=(0,e._)`${z}, ${$.object(...B)}`;return M!==e.nil?(0,e._)`${O}.call(${M}, ${V})`:(0,e._)`${O}(${V})`}me.callValidateCode=h;const y=(0,e._)`new RegExp`;function g({gen:m,it:{opts:v}},$){const b=v.unicodeRegExp?"u":"",{regExp:_}=v.code,S=_($,b);return m.scopeValue("pattern",{key:S.toString(),ref:S,code:(0,e._)`${_.code==="new RegExp"?y:(0,s.useFunc)(m,_)}(${$}, ${b})`})}me.usePattern=g;function f(m){const{gen:v,data:$,keyword:b,it:_}=m,S=v.name("valid");if(_.allErrors){const O=v.let("valid",!0);return C(()=>v.assign(O,!1)),O}return v.var(S,!0),C(()=>v.break()),S;function C(O){const M=v.const("len",(0,e._)`${$}.length`);v.forRange("i",0,M,D=>{m.subschema({keyword:b,dataProp:D,dataPropType:t.Type.Num},S),v.if((0,e.not)(S),O)})}}me.validateArray=f;function w(m){const{gen:v,schema:$,keyword:b,it:_}=m;if(!Array.isArray($))throw new Error("ajv implementation error");if($.some(M=>(0,t.alwaysValidSchema)(_,M))&&!_.opts.unevaluated)return;const C=v.let("valid",!1),O=v.name("_valid");v.block(()=>$.forEach((M,D)=>{const z=m.subschema({keyword:b,schemaProp:D,compositeRule:!0},O);v.assign(C,(0,e._)`${C} || ${O}`),m.mergeValidEvaluated(z,O)||v.if((0,e.not)(C))})),m.result(C,()=>m.reset(),()=>m.error(!0))}return me.validateUnion=w,me}var xl;function Kf(){if(xl)return ht;xl=1,Object.defineProperty(ht,"__esModule",{value:!0}),ht.validateKeywordUsage=ht.validSchemaType=ht.funcKeywordCode=ht.macroKeywordCode=void 0;const e=ee(),t=bt(),r=vt(),s=Cn();function i(u,h){const{gen:y,keyword:g,schema:f,parentSchema:w,it:m}=u,v=h.macro.call(m.self,f,w,m),$=c(y,g,v);m.opts.validateSchema!==!1&&m.self.validateSchema(v,!0);const b=y.name("valid");u.subschema({schema:v,schemaPath:e.nil,errSchemaPath:`${m.errSchemaPath}/${g}`,topSchemaRef:$,compositeRule:!0},b),u.pass(b,()=>u.error(!0))}ht.macroKeywordCode=i;function n(u,h){var y;const{gen:g,keyword:f,schema:w,parentSchema:m,$data:v,it:$}=u;l($,h);const b=!v&&h.compile?h.compile.call($.self,w,m,$):h.validate,_=c(g,f,b),S=g.let("valid");u.block$data(S,C),u.ok((y=h.valid)!==null&&y!==void 0?y:S);function C(){if(h.errors===!1)D(),h.modifying&&o(u),z(()=>u.error());else{const B=h.async?O():M();h.modifying&&o(u),z(()=>a(u,B))}}function O(){const B=g.let("ruleErrs",null);return g.try(()=>D((0,e._)`await `),V=>g.assign(S,!1).if((0,e._)`${V} instanceof ${$.ValidationError}`,()=>g.assign(B,(0,e._)`${V}.errors`),()=>g.throw(V))),B}function M(){const B=(0,e._)`${_}.errors`;return g.assign(B,null),D(e.nil),B}function D(B=h.async?(0,e._)`await `:e.nil){const V=$.opts.passContext?t.default.this:t.default.self,X=!("compile"in h&&!v||h.schema===!1);g.assign(S,(0,e._)`${B}${(0,r.callValidateCode)(u,_,V,X)}`,h.modifying)}function z(B){var V;g.if((0,e.not)((V=h.valid)!==null&&V!==void 0?V:S),B)}}ht.funcKeywordCode=n;function o(u){const{gen:h,data:y,it:g}=u;h.if(g.parentData,()=>h.assign(y,(0,e._)`${g.parentData}[${g.parentDataProperty}]`))}function a(u,h){const{gen:y}=u;y.if((0,e._)`Array.isArray(${h})`,()=>{y.assign(t.default.vErrors,(0,e._)`${t.default.vErrors} === null ? ${h} : ${t.default.vErrors}.concat(${h})`).assign(t.default.errors,(0,e._)`${t.default.vErrors}.length`),(0,s.extendErrors)(u)},()=>u.error())}function l({schemaEnv:u},h){if(h.async&&!u.$async)throw new Error("async keyword in sync schema")}function c(u,h,y){if(y===void 0)throw new Error(`keyword "${h}" failed to compile`);return u.scopeValue("keyword",typeof y=="function"?{ref:y}:{ref:y,code:(0,e.stringify)(y)})}function d(u,h,y=!1){return!h.length||h.some(g=>g==="array"?Array.isArray(u):g==="object"?u&&typeof u=="object"&&!Array.isArray(u):typeof u==g||y&&typeof u>"u")}ht.validSchemaType=d;function p({schema:u,opts:h,self:y,errSchemaPath:g},f,w){if(Array.isArray(f.keyword)?!f.keyword.includes(w):f.keyword!==w)throw new Error("ajv implementation error");const m=f.dependencies;if(m?.some(v=>!Object.prototype.hasOwnProperty.call(u,v)))throw new Error(`parent schema must have dependencies of ${w}: ${m.join(",")}`);if(f.validateSchema&&!f.validateSchema(u[w])){const $=`keyword "${w}" value is invalid at path "${g}": `+y.errorsText(f.validateSchema.errors);if(h.validateSchema==="log")y.logger.error($);else throw new Error($)}}return ht.validateKeywordUsage=p,ht}var Pt={},Sl;function Wf(){if(Sl)return Pt;Sl=1,Object.defineProperty(Pt,"__esModule",{value:!0}),Pt.extendSubschemaMode=Pt.extendSubschemaData=Pt.getSubschema=void 0;const e=ee(),t=le();function r(n,{keyword:o,schemaProp:a,schema:l,schemaPath:c,errSchemaPath:d,topSchemaRef:p}){if(o!==void 0&&l!==void 0)throw new Error('both "keyword" and "schema" passed, only one allowed');if(o!==void 0){const u=n.schema[o];return a===void 0?{schema:u,schemaPath:(0,e._)`${n.schemaPath}${(0,e.getProperty)(o)}`,errSchemaPath:`${n.errSchemaPath}/${o}`}:{schema:u[a],schemaPath:(0,e._)`${n.schemaPath}${(0,e.getProperty)(o)}${(0,e.getProperty)(a)}`,errSchemaPath:`${n.errSchemaPath}/${o}/${(0,t.escapeFragment)(a)}`}}if(l!==void 0){if(c===void 0||d===void 0||p===void 0)throw new Error('"schemaPath", "errSchemaPath" and "topSchemaRef" are required with "schema"');return{schema:l,schemaPath:c,topSchemaRef:p,errSchemaPath:d}}throw new Error('either "keyword" or "schema" must be passed')}Pt.getSubschema=r;function s(n,o,{dataProp:a,dataPropType:l,data:c,dataTypes:d,propertyName:p}){if(c!==void 0&&a!==void 0)throw new Error('both "data" and "dataProp" passed, only one allowed');const{gen:u}=o;if(a!==void 0){const{errorPath:y,dataPathArr:g,opts:f}=o,w=u.let("data",(0,e._)`${o.data}${(0,e.getProperty)(a)}`,!0);h(w),n.errorPath=(0,e.str)`${y}${(0,t.getErrorPath)(a,l,f.jsPropertySyntax)}`,n.parentDataProperty=(0,e._)`${a}`,n.dataPathArr=[...g,n.parentDataProperty]}if(c!==void 0){const y=c instanceof e.Name?c:u.let("data",c,!0);h(y),p!==void 0&&(n.propertyName=p)}d&&(n.dataTypes=d);function h(y){n.data=y,n.dataLevel=o.dataLevel+1,n.dataTypes=[],o.definedProperties=new Set,n.parentData=o.data,n.dataNames=[...o.dataNames,y]}}Pt.extendSubschemaData=s;function i(n,{jtdDiscriminator:o,jtdMetadata:a,compositeRule:l,createErrors:c,allErrors:d}){l!==void 0&&(n.compositeRule=l),c!==void 0&&(n.createErrors=c),d!==void 0&&(n.allErrors=d),n.jtdDiscriminator=o,n.jtdMetadata=a}return Pt.extendSubschemaMode=i,Pt}var je={},so,Cl;function Fd(){return Cl||(Cl=1,so=function e(t,r){if(t===r)return!0;if(t&&r&&typeof t=="object"&&typeof r=="object"){if(t.constructor!==r.constructor)return!1;var s,i,n;if(Array.isArray(t)){if(s=t.length,s!=r.length)return!1;for(i=s;i--!==0;)if(!e(t[i],r[i]))return!1;return!0}if(t.constructor===RegExp)return t.source===r.source&&t.flags===r.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===r.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===r.toString();if(n=Object.keys(t),s=n.length,s!==Object.keys(r).length)return!1;for(i=s;i--!==0;)if(!Object.prototype.hasOwnProperty.call(r,n[i]))return!1;for(i=s;i--!==0;){var o=n[i];if(!e(t[o],r[o]))return!1}return!0}return t!==t&&r!==r}),so}var io={exports:{}},El;function Gf(){if(El)return io.exports;El=1;var e=io.exports=function(s,i,n){typeof i=="function"&&(n=i,i={}),n=i.cb||n;var o=typeof n=="function"?n:n.pre||function(){},a=n.post||function(){};t(i,o,a,s,"",s)};e.keywords={additionalItems:!0,items:!0,contains:!0,additionalProperties:!0,propertyNames:!0,not:!0,if:!0,then:!0,else:!0},e.arrayKeywords={items:!0,allOf:!0,anyOf:!0,oneOf:!0},e.propsKeywords={$defs:!0,definitions:!0,properties:!0,patternProperties:!0,dependencies:!0},e.skipKeywords={default:!0,enum:!0,const:!0,required:!0,maximum:!0,minimum:!0,exclusiveMaximum:!0,exclusiveMinimum:!0,multipleOf:!0,maxLength:!0,minLength:!0,pattern:!0,format:!0,maxItems:!0,minItems:!0,uniqueItems:!0,maxProperties:!0,minProperties:!0};function t(s,i,n,o,a,l,c,d,p,u){if(o&&typeof o=="object"&&!Array.isArray(o)){i(o,a,l,c,d,p,u);for(var h in o){var y=o[h];if(Array.isArray(y)){if(h in e.arrayKeywords)for(var g=0;g<y.length;g++)t(s,i,n,y[g],a+"/"+h+"/"+g,l,a,h,o,g)}else if(h in e.propsKeywords){if(y&&typeof y=="object")for(var f in y)t(s,i,n,y[f],a+"/"+h+"/"+r(f),l,a,h,o,f)}else(h in e.keywords||s.allKeys&&!(h in e.skipKeywords))&&t(s,i,n,y,a+"/"+h,l,a,h,o)}n(o,a,l,c,d,p,u)}}function r(s){return s.replace(/~/g,"~0").replace(/\//g,"~1")}return io.exports}var Al;function En(){if(Al)return je;Al=1,Object.defineProperty(je,"__esModule",{value:!0}),je.getSchemaRefs=je.resolveUrl=je.normalizeId=je._getFullPath=je.getFullPath=je.inlineRef=void 0;const e=le(),t=Fd(),r=Gf(),s=new Set(["type","format","pattern","maxLength","minLength","maxProperties","minProperties","maxItems","minItems","maximum","minimum","uniqueItems","multipleOf","required","enum","const"]);function i(g,f=!0){return typeof g=="boolean"?!0:f===!0?!o(g):f?a(g)<=f:!1}je.inlineRef=i;const n=new Set(["$ref","$recursiveRef","$recursiveAnchor","$dynamicRef","$dynamicAnchor"]);function o(g){for(const f in g){if(n.has(f))return!0;const w=g[f];if(Array.isArray(w)&&w.some(o)||typeof w=="object"&&o(w))return!0}return!1}function a(g){let f=0;for(const w in g){if(w==="$ref")return 1/0;if(f++,!s.has(w)&&(typeof g[w]=="object"&&(0,e.eachItem)(g[w],m=>f+=a(m)),f===1/0))return 1/0}return f}function l(g,f="",w){w!==!1&&(f=p(f));const m=g.parse(f);return c(g,m)}je.getFullPath=l;function c(g,f){return g.serialize(f).split("#")[0]+"#"}je._getFullPath=c;const d=/#\/?$/;function p(g){return g?g.replace(d,""):""}je.normalizeId=p;function u(g,f,w){return w=p(w),g.resolve(f,w)}je.resolveUrl=u;const h=/^[a-z_][-a-z0-9._]*$/i;function y(g,f){if(typeof g=="boolean")return{};const{schemaId:w,uriResolver:m}=this.opts,v=p(g[w]||f),$={"":v},b=l(m,v,!1),_={},S=new Set;return r(g,{allKeys:!0},(M,D,z,B)=>{if(B===void 0)return;const V=b+D;let X=$[B];typeof M[w]=="string"&&(X=ae.call(this,M[w])),Z.call(this,M.$anchor),Z.call(this,M.$dynamicAnchor),$[D]=X;function ae(J){const fe=this.opts.uriResolver.resolve;if(J=p(X?fe(X,J):J),S.has(J))throw O(J);S.add(J);let F=this.refs[J];return typeof F=="string"&&(F=this.refs[F]),typeof F=="object"?C(M,F.schema,J):J!==p(V)&&(J[0]==="#"?(C(M,_[J],J),_[J]=M):this.refs[J]=V),J}function Z(J){if(typeof J=="string"){if(!h.test(J))throw new Error(`invalid anchor "${J}"`);ae.call(this,`#${J}`)}}}),_;function C(M,D,z){if(D!==void 0&&!t(M,D))throw O(z)}function O(M){return new Error(`reference "${M}" resolves to more than one schema`)}}return je.getSchemaRefs=y,je}var Tl;function Ps(){if(Tl)return At;Tl=1,Object.defineProperty(At,"__esModule",{value:!0}),At.getData=At.KeywordCxt=At.validateFunctionCode=void 0;const e=Uf(),t=cn(),r=qd(),s=cn(),i=Hf(),n=Kf(),o=Wf(),a=ee(),l=bt(),c=En(),d=le(),p=Cn();function u(T){if(b(T)&&(S(T),$(T))){f(T);return}h(T,()=>(0,e.topBoolOrEmptySchema)(T))}At.validateFunctionCode=u;function h({gen:T,validateName:R,schema:q,schemaEnv:U,opts:Y},ne){Y.code.es5?T.func(R,(0,a._)`${l.default.data}, ${l.default.valCxt}`,U.$async,()=>{T.code((0,a._)`"use strict"; ${m(q,Y)}`),g(T,Y),T.code(ne)}):T.func(R,(0,a._)`${l.default.data}, ${y(Y)}`,U.$async,()=>T.code(m(q,Y)).code(ne))}function y(T){return(0,a._)`{${l.default.instancePath}="", ${l.default.parentData}, ${l.default.parentDataProperty}, ${l.default.rootData}=${l.default.data}${T.dynamicRef?(0,a._)`, ${l.default.dynamicAnchors}={}`:a.nil}}={}`}function g(T,R){T.if(l.default.valCxt,()=>{T.var(l.default.instancePath,(0,a._)`${l.default.valCxt}.${l.default.instancePath}`),T.var(l.default.parentData,(0,a._)`${l.default.valCxt}.${l.default.parentData}`),T.var(l.default.parentDataProperty,(0,a._)`${l.default.valCxt}.${l.default.parentDataProperty}`),T.var(l.default.rootData,(0,a._)`${l.default.valCxt}.${l.default.rootData}`),R.dynamicRef&&T.var(l.default.dynamicAnchors,(0,a._)`${l.default.valCxt}.${l.default.dynamicAnchors}`)},()=>{T.var(l.default.instancePath,(0,a._)`""`),T.var(l.default.parentData,(0,a._)`undefined`),T.var(l.default.parentDataProperty,(0,a._)`undefined`),T.var(l.default.rootData,l.default.data),R.dynamicRef&&T.var(l.default.dynamicAnchors,(0,a._)`{}`)})}function f(T){const{schema:R,opts:q,gen:U}=T;h(T,()=>{q.$comment&&R.$comment&&B(T),M(T),U.let(l.default.vErrors,null),U.let(l.default.errors,0),q.unevaluated&&w(T),C(T),V(T)})}function w(T){const{gen:R,validateName:q}=T;T.evaluated=R.const("evaluated",(0,a._)`${q}.evaluated`),R.if((0,a._)`${T.evaluated}.dynamicProps`,()=>R.assign((0,a._)`${T.evaluated}.props`,(0,a._)`undefined`)),R.if((0,a._)`${T.evaluated}.dynamicItems`,()=>R.assign((0,a._)`${T.evaluated}.items`,(0,a._)`undefined`))}function m(T,R){const q=typeof T=="object"&&T[R.schemaId];return q&&(R.code.source||R.code.process)?(0,a._)`/*# sourceURL=${q} */`:a.nil}function v(T,R){if(b(T)&&(S(T),$(T))){_(T,R);return}(0,e.boolOrEmptySchema)(T,R)}function $({schema:T,self:R}){if(typeof T=="boolean")return!T;for(const q in T)if(R.RULES.all[q])return!0;return!1}function b(T){return typeof T.schema!="boolean"}function _(T,R){const{schema:q,gen:U,opts:Y}=T;Y.$comment&&q.$comment&&B(T),D(T),z(T);const ne=U.const("_errs",l.default.errors);C(T,ne),U.var(R,(0,a._)`${ne} === ${l.default.errors}`)}function S(T){(0,d.checkUnknownRules)(T),O(T)}function C(T,R){if(T.opts.jtd)return ae(T,[],!1,R);const q=(0,t.getSchemaTypes)(T.schema),U=(0,t.coerceAndCheckDataType)(T,q);ae(T,q,!U,R)}function O(T){const{schema:R,errSchemaPath:q,opts:U,self:Y}=T;R.$ref&&U.ignoreKeywordsWithRef&&(0,d.schemaHasRulesButRef)(R,Y.RULES)&&Y.logger.warn(`$ref: keywords ignored in schema at path "${q}"`)}function M(T){const{schema:R,opts:q}=T;R.default!==void 0&&q.useDefaults&&q.strictSchema&&(0,d.checkStrictMode)(T,"default is ignored in the schema root")}function D(T){const R=T.schema[T.opts.schemaId];R&&(T.baseId=(0,c.resolveUrl)(T.opts.uriResolver,T.baseId,R))}function z(T){if(T.schema.$async&&!T.schemaEnv.$async)throw new Error("async schema in sync schema")}function B({gen:T,schemaEnv:R,schema:q,errSchemaPath:U,opts:Y}){const ne=q.$comment;if(Y.$comment===!0)T.code((0,a._)`${l.default.self}.logger.log(${ne})`);else if(typeof Y.$comment=="function"){const Pe=(0,a.str)`${U}/$comment`,ut=T.scopeValue("root",{ref:R.root});T.code((0,a._)`${l.default.self}.opts.$comment(${ne}, ${Pe}, ${ut}.schema)`)}}function V(T){const{gen:R,schemaEnv:q,validateName:U,ValidationError:Y,opts:ne}=T;q.$async?R.if((0,a._)`${l.default.errors} === 0`,()=>R.return(l.default.data),()=>R.throw((0,a._)`new ${Y}(${l.default.vErrors})`)):(R.assign((0,a._)`${U}.errors`,l.default.vErrors),ne.unevaluated&&X(T),R.return((0,a._)`${l.default.errors} === 0`))}function X({gen:T,evaluated:R,props:q,items:U}){q instanceof a.Name&&T.assign((0,a._)`${R}.props`,q),U instanceof a.Name&&T.assign((0,a._)`${R}.items`,U)}function ae(T,R,q,U){const{gen:Y,schema:ne,data:Pe,allErrors:ut,opts:Be,self:Ue}=T,{RULES:Oe}=Ue;if(ne.$ref&&(Be.ignoreKeywordsWithRef||!(0,d.schemaHasRulesButRef)(ne,Oe))){Y.block(()=>K(T,"$ref",Oe.all.$ref.definition));return}Be.jtd||J(T,R),Y.block(()=>{for(const it of Oe.rules)gr(it);gr(Oe.post)});function gr(it){(0,r.shouldUseGroup)(ne,it)&&(it.type?(Y.if((0,s.checkDataType)(it.type,Pe,Be.strictNumbers)),Z(T,it),R.length===1&&R[0]===it.type&&q&&(Y.else(),(0,s.reportTypeError)(T)),Y.endIf()):Z(T,it),ut||Y.if((0,a._)`${l.default.errors} === ${U||0}`))}}function Z(T,R){const{gen:q,schema:U,opts:{useDefaults:Y}}=T;Y&&(0,i.assignDefaults)(T,R.type),q.block(()=>{for(const ne of R.rules)(0,r.shouldUseRule)(U,ne)&&K(T,ne.keyword,ne.definition,R.type)})}function J(T,R){T.schemaEnv.meta||!T.opts.strictTypes||(fe(T,R),T.opts.allowUnionTypes||F(T,R),P(T,T.dataTypes))}function fe(T,R){if(R.length){if(!T.dataTypes.length){T.dataTypes=R;return}R.forEach(q=>{I(T.dataTypes,q)||E(T,`type "${q}" not allowed by context "${T.dataTypes.join(",")}"`)}),k(T,R)}}function F(T,R){R.length>1&&!(R.length===2&&R.includes("null"))&&E(T,"use allowUnionTypes to allow union type keyword")}function P(T,R){const q=T.self.RULES.all;for(const U in q){const Y=q[U];if(typeof Y=="object"&&(0,r.shouldUseRule)(T.schema,Y)){const{type:ne}=Y.definition;ne.length&&!ne.some(Pe=>j(R,Pe))&&E(T,`missing type "${ne.join(",")}" for keyword "${U}"`)}}}function j(T,R){return T.includes(R)||R==="number"&&T.includes("integer")}function I(T,R){return T.includes(R)||R==="integer"&&T.includes("number")}function k(T,R){const q=[];for(const U of T.dataTypes)I(R,U)?q.push(U):R.includes("integer")&&U==="number"&&q.push("integer");T.dataTypes=q}function E(T,R){const q=T.schemaEnv.baseId+T.errSchemaPath;R+=` at "${q}" (strictTypes)`,(0,d.checkStrictMode)(T,R,T.opts.strictTypes)}class L{constructor(R,q,U){if((0,n.validateKeywordUsage)(R,q,U),this.gen=R.gen,this.allErrors=R.allErrors,this.keyword=U,this.data=R.data,this.schema=R.schema[U],this.$data=q.$data&&R.opts.$data&&this.schema&&this.schema.$data,this.schemaValue=(0,d.schemaRefOrVal)(R,this.schema,U,this.$data),this.schemaType=q.schemaType,this.parentSchema=R.schema,this.params={},this.it=R,this.def=q,this.$data)this.schemaCode=R.gen.const("vSchema",oe(this.$data,R));else if(this.schemaCode=this.schemaValue,!(0,n.validSchemaType)(this.schema,q.schemaType,q.allowUndefined))throw new Error(`${U} value must be ${JSON.stringify(q.schemaType)}`);("code"in q?q.trackErrors:q.errors!==!1)&&(this.errsCount=R.gen.const("_errs",l.default.errors))}result(R,q,U){this.failResult((0,a.not)(R),q,U)}failResult(R,q,U){this.gen.if(R),U?U():this.error(),q?(this.gen.else(),q(),this.allErrors&&this.gen.endIf()):this.allErrors?this.gen.endIf():this.gen.else()}pass(R,q){this.failResult((0,a.not)(R),void 0,q)}fail(R){if(R===void 0){this.error(),this.allErrors||this.gen.if(!1);return}this.gen.if(R),this.error(),this.allErrors?this.gen.endIf():this.gen.else()}fail$data(R){if(!this.$data)return this.fail(R);const{schemaCode:q}=this;this.fail((0,a._)`${q} !== undefined && (${(0,a.or)(this.invalid$data(),R)})`)}error(R,q,U){if(q){this.setParams(q),this._error(R,U),this.setParams({});return}this._error(R,U)}_error(R,q){(R?p.reportExtraError:p.reportError)(this,this.def.error,q)}$dataError(){(0,p.reportError)(this,this.def.$dataError||p.keyword$DataError)}reset(){if(this.errsCount===void 0)throw new Error('add "trackErrors" to keyword definition');(0,p.resetErrorsCount)(this.gen,this.errsCount)}ok(R){this.allErrors||this.gen.if(R)}setParams(R,q){q?Object.assign(this.params,R):this.params=R}block$data(R,q,U=a.nil){this.gen.block(()=>{this.check$data(R,U),q()})}check$data(R=a.nil,q=a.nil){if(!this.$data)return;const{gen:U,schemaCode:Y,schemaType:ne,def:Pe}=this;U.if((0,a.or)((0,a._)`${Y} === undefined`,q)),R!==a.nil&&U.assign(R,!0),(ne.length||Pe.validateSchema)&&(U.elseIf(this.invalid$data()),this.$dataError(),R!==a.nil&&U.assign(R,!1)),U.else()}invalid$data(){const{gen:R,schemaCode:q,schemaType:U,def:Y,it:ne}=this;return(0,a.or)(Pe(),ut());function Pe(){if(U.length){if(!(q instanceof a.Name))throw new Error("ajv implementation error");const Be=Array.isArray(U)?U:[U];return(0,a._)`${(0,s.checkDataTypes)(Be,q,ne.opts.strictNumbers,s.DataType.Wrong)}`}return a.nil}function ut(){if(Y.validateSchema){const Be=R.scopeValue("validate$data",{ref:Y.validateSchema});return(0,a._)`!${Be}(${q})`}return a.nil}}subschema(R,q){const U=(0,o.getSubschema)(this.it,R);(0,o.extendSubschemaData)(U,this.it,R),(0,o.extendSubschemaMode)(U,R);const Y={...this.it,...U,items:void 0,props:void 0};return v(Y,q),Y}mergeEvaluated(R,q){const{it:U,gen:Y}=this;U.opts.unevaluated&&(U.props!==!0&&R.props!==void 0&&(U.props=d.mergeEvaluated.props(Y,R.props,U.props,q)),U.items!==!0&&R.items!==void 0&&(U.items=d.mergeEvaluated.items(Y,R.items,U.items,q)))}mergeValidEvaluated(R,q){const{it:U,gen:Y}=this;if(U.opts.unevaluated&&(U.props!==!0||U.items!==!0))return Y.if(q,()=>this.mergeEvaluated(R,a.Name)),!0}}At.KeywordCxt=L;function K(T,R,q,U){const Y=new L(T,q,R);"code"in q?q.code(Y,U):Y.$data&&q.validate?(0,n.funcKeywordCode)(Y,q):"macro"in q?(0,n.macroKeywordCode)(Y,q):(q.compile||q.validate)&&(0,n.funcKeywordCode)(Y,q)}const W=/^\/(?:[^~]|~0|~1)*$/,he=/^([0-9]+)(#|\/(?:[^~]|~0|~1)*)?$/;function oe(T,{dataLevel:R,dataNames:q,dataPathArr:U}){let Y,ne;if(T==="")return l.default.rootData;if(T[0]==="/"){if(!W.test(T))throw new Error(`Invalid JSON-pointer: ${T}`);Y=T,ne=l.default.rootData}else{const Ue=he.exec(T);if(!Ue)throw new Error(`Invalid JSON-pointer: ${T}`);const Oe=+Ue[1];if(Y=Ue[2],Y==="#"){if(Oe>=R)throw new Error(Be("property/index",Oe));return U[R-Oe]}if(Oe>R)throw new Error(Be("data",Oe));if(ne=q[R-Oe],!Y)return ne}let Pe=ne;const ut=Y.split("/");for(const Ue of ut)Ue&&(ne=(0,a._)`${ne}${(0,a.getProperty)((0,d.unescapeJsonPointer)(Ue))}`,Pe=(0,a._)`${Pe} && ${ne}`);return Pe;function Be(Ue,Oe){return`Cannot access ${Ue} ${Oe} levels up, current level is ${R}`}}return At.getData=oe,At}var Ks={},Pl;function An(){if(Pl)return Ks;Pl=1,Object.defineProperty(Ks,"__esModule",{value:!0});class e extends Error{constructor(r){super("validation failed"),this.errors=r,this.ajv=this.validation=!0}}return Ks.default=e,Ks}var Ws={},Ol;function Os(){if(Ol)return Ws;Ol=1,Object.defineProperty(Ws,"__esModule",{value:!0});const e=En();class t extends Error{constructor(s,i,n,o){super(o||`can't resolve reference ${n} from id ${i}`),this.missingRef=(0,e.resolveUrl)(s,i,n),this.missingSchema=(0,e.normalizeId)((0,e.getFullPath)(s,this.missingRef))}}return Ws.default=t,Ws}var He={},Il;function Tn(){if(Il)return He;Il=1,Object.defineProperty(He,"__esModule",{value:!0}),He.resolveSchema=He.getCompilingSchema=He.resolveRef=He.compileSchema=He.SchemaEnv=void 0;const e=ee(),t=An(),r=bt(),s=En(),i=le(),n=Ps();class o{constructor(w){var m;this.refs={},this.dynamicAnchors={};let v;typeof w.schema=="object"&&(v=w.schema),this.schema=w.schema,this.schemaId=w.schemaId,this.root=w.root||this,this.baseId=(m=w.baseId)!==null&&m!==void 0?m:(0,s.normalizeId)(v?.[w.schemaId||"$id"]),this.schemaPath=w.schemaPath,this.localRefs=w.localRefs,this.meta=w.meta,this.$async=v?.$async,this.refs={}}}He.SchemaEnv=o;function a(f){const w=d.call(this,f);if(w)return w;const m=(0,s.getFullPath)(this.opts.uriResolver,f.root.baseId),{es5:v,lines:$}=this.opts.code,{ownProperties:b}=this.opts,_=new e.CodeGen(this.scope,{es5:v,lines:$,ownProperties:b});let S;f.$async&&(S=_.scopeValue("Error",{ref:t.default,code:(0,e._)`require("ajv/dist/runtime/validation_error").default`}));const C=_.scopeName("validate");f.validateName=C;const O={gen:_,allErrors:this.opts.allErrors,data:r.default.data,parentData:r.default.parentData,parentDataProperty:r.default.parentDataProperty,dataNames:[r.default.data],dataPathArr:[e.nil],dataLevel:0,dataTypes:[],definedProperties:new Set,topSchemaRef:_.scopeValue("schema",this.opts.code.source===!0?{ref:f.schema,code:(0,e.stringify)(f.schema)}:{ref:f.schema}),validateName:C,ValidationError:S,schema:f.schema,schemaEnv:f,rootId:m,baseId:f.baseId||m,schemaPath:e.nil,errSchemaPath:f.schemaPath||(this.opts.jtd?"":"#"),errorPath:(0,e._)`""`,opts:this.opts,self:this};let M;try{this._compilations.add(f),(0,n.validateFunctionCode)(O),_.optimize(this.opts.code.optimize);const D=_.toString();M=`${_.scopeRefs(r.default.scope)}return ${D}`,this.opts.code.process&&(M=this.opts.code.process(M,f));const B=new Function(`${r.default.self}`,`${r.default.scope}`,M)(this,this.scope.get());if(this.scope.value(C,{ref:B}),B.errors=null,B.schema=f.schema,B.schemaEnv=f,f.$async&&(B.$async=!0),this.opts.code.source===!0&&(B.source={validateName:C,validateCode:D,scopeValues:_._values}),this.opts.unevaluated){const{props:V,items:X}=O;B.evaluated={props:V instanceof e.Name?void 0:V,items:X instanceof e.Name?void 0:X,dynamicProps:V instanceof e.Name,dynamicItems:X instanceof e.Name},B.source&&(B.source.evaluated=(0,e.stringify)(B.evaluated))}return f.validate=B,f}catch(D){throw delete f.validate,delete f.validateName,M&&this.logger.error("Error compiling schema, function code:",M),D}finally{this._compilations.delete(f)}}He.compileSchema=a;function l(f,w,m){var v;m=(0,s.resolveUrl)(this.opts.uriResolver,w,m);const $=f.refs[m];if($)return $;let b=u.call(this,f,m);if(b===void 0){const _=(v=f.localRefs)===null||v===void 0?void 0:v[m],{schemaId:S}=this.opts;_&&(b=new o({schema:_,schemaId:S,root:f,baseId:w}))}if(b!==void 0)return f.refs[m]=c.call(this,b)}He.resolveRef=l;function c(f){return(0,s.inlineRef)(f.schema,this.opts.inlineRefs)?f.schema:f.validate?f:a.call(this,f)}function d(f){for(const w of this._compilations)if(p(w,f))return w}He.getCompilingSchema=d;function p(f,w){return f.schema===w.schema&&f.root===w.root&&f.baseId===w.baseId}function u(f,w){let m;for(;typeof(m=this.refs[w])=="string";)w=m;return m||this.schemas[w]||h.call(this,f,w)}function h(f,w){const m=this.opts.uriResolver.parse(w),v=(0,s._getFullPath)(this.opts.uriResolver,m);let $=(0,s.getFullPath)(this.opts.uriResolver,f.baseId,void 0);if(Object.keys(f.schema).length>0&&v===$)return g.call(this,m,f);const b=(0,s.normalizeId)(v),_=this.refs[b]||this.schemas[b];if(typeof _=="string"){const S=h.call(this,f,_);return typeof S?.schema!="object"?void 0:g.call(this,m,S)}if(typeof _?.schema=="object"){if(_.validate||a.call(this,_),b===(0,s.normalizeId)(w)){const{schema:S}=_,{schemaId:C}=this.opts,O=S[C];return O&&($=(0,s.resolveUrl)(this.opts.uriResolver,$,O)),new o({schema:S,schemaId:C,root:f,baseId:$})}return g.call(this,m,_)}}He.resolveSchema=h;const y=new Set(["properties","patternProperties","enum","dependencies","definitions"]);function g(f,{baseId:w,schema:m,root:v}){var $;if((($=f.fragment)===null||$===void 0?void 0:$[0])!=="/")return;for(const S of f.fragment.slice(1).split("/")){if(typeof m=="boolean")return;const C=m[(0,i.unescapeFragment)(S)];if(C===void 0)return;m=C;const O=typeof m=="object"&&m[this.opts.schemaId];!y.has(S)&&O&&(w=(0,s.resolveUrl)(this.opts.uriResolver,w,O))}let b;if(typeof m!="boolean"&&m.$ref&&!(0,i.schemaHasRulesButRef)(m,this.RULES)){const S=(0,s.resolveUrl)(this.opts.uriResolver,w,m.$ref);b=h.call(this,v,S)}const{schemaId:_}=this.opts;if(b=b||new o({schema:m,schemaId:_,root:v,baseId:w}),b.schema!==b.root.schema)return b}return He}const Yf="https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#",Jf="Meta-schema for $data reference (JSON AnySchema extension proposal)",Xf="object",Qf=["$data"],Zf={$data:{type:"string",anyOf:[{format:"relative-json-pointer"},{format:"json-pointer"}]}},em=!1,tm={$id:Yf,description:Jf,type:Xf,required:Qf,properties:Zf,additionalProperties:em};var Gs={},is={exports:{}},no,Rl;function Vd(){if(Rl)return no;Rl=1;const e=RegExp.prototype.test.bind(/^[\da-f]{8}-[\da-f]{4}-[\da-f]{4}-[\da-f]{4}-[\da-f]{12}$/iu),t=RegExp.prototype.test.bind(/^(?:(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)$/u);function r(u){let h="",y=0,g=0;for(g=0;g<u.length;g++)if(y=u[g].charCodeAt(0),y!==48){if(!(y>=48&&y<=57||y>=65&&y<=70||y>=97&&y<=102))return"";h+=u[g];break}for(g+=1;g<u.length;g++){if(y=u[g].charCodeAt(0),!(y>=48&&y<=57||y>=65&&y<=70||y>=97&&y<=102))return"";h+=u[g]}return h}const s=RegExp.prototype.test.bind(/[^!"$&'()*+,\-.;=_`a-z{}~]/u);function i(u){return u.length=0,!0}function n(u,h,y){if(u.length){const g=r(u);if(g!=="")h.push(g);else return y.error=!0,!1;u.length=0}return!0}function o(u){let h=0;const y={error:!1,address:"",zone:""},g=[],f=[];let w=!1,m=!1,v=n;for(let $=0;$<u.length;$++){const b=u[$];if(!(b==="["||b==="]"))if(b===":"){if(w===!0&&(m=!0),!v(f,g,y))break;if(++h>7){y.error=!0;break}$>0&&u[$-1]===":"&&(w=!0),g.push(":");continue}else if(b==="%"){if(!v(f,g,y))break;v=i}else{f.push(b);continue}}return f.length&&(v===i?y.zone=f.join(""):m?g.push(f.join("")):g.push(r(f))),y.address=g.join(""),y}function a(u){if(l(u,":")<2)return{host:u,isIPV6:!1};const h=o(u);if(h.error)return{host:u,isIPV6:!1};{let y=h.address,g=h.address;return h.zone&&(y+="%"+h.zone,g+="%25"+h.zone),{host:y,isIPV6:!0,escapedHost:g}}}function l(u,h){let y=0;for(let g=0;g<u.length;g++)u[g]===h&&y++;return y}function c(u){let h=u;const y=[];let g=-1,f=0;for(;f=h.length;){if(f===1){if(h===".")break;if(h==="/"){y.push("/");break}else{y.push(h);break}}else if(f===2){if(h[0]==="."){if(h[1]===".")break;if(h[1]==="/"){h=h.slice(2);continue}}else if(h[0]==="/"&&(h[1]==="."||h[1]==="/")){y.push("/");break}}else if(f===3&&h==="/.."){y.length!==0&&y.pop(),y.push("/");break}if(h[0]==="."){if(h[1]==="."){if(h[2]==="/"){h=h.slice(3);continue}}else if(h[1]==="/"){h=h.slice(2);continue}}else if(h[0]==="/"&&h[1]==="."){if(h[2]==="/"){h=h.slice(2);continue}else if(h[2]==="."&&h[3]==="/"){h=h.slice(3),y.length!==0&&y.pop();continue}}if((g=h.indexOf("/",1))===-1){y.push(h);break}else y.push(h.slice(0,g)),h=h.slice(g)}return y.join("")}function d(u,h){const y=h!==!0?escape:unescape;return u.scheme!==void 0&&(u.scheme=y(u.scheme)),u.userinfo!==void 0&&(u.userinfo=y(u.userinfo)),u.host!==void 0&&(u.host=y(u.host)),u.path!==void 0&&(u.path=y(u.path)),u.query!==void 0&&(u.query=y(u.query)),u.fragment!==void 0&&(u.fragment=y(u.fragment)),u}function p(u){const h=[];if(u.userinfo!==void 0&&(h.push(u.userinfo),h.push("@")),u.host!==void 0){let y=unescape(u.host);if(!t(y)){const g=a(y);g.isIPV6===!0?y=`[${g.escapedHost}]`:y=u.host}h.push(y)}return(typeof u.port=="number"||typeof u.port=="string")&&(h.push(":"),h.push(String(u.port))),h.length?h.join(""):void 0}return no={nonSimpleDomain:s,recomposeAuthority:p,normalizeComponentEncoding:d,removeDotSegments:c,isIPv4:t,isUUID:e,normalizeIPv6:a,stringArrayToHexStripped:r},no}var oo,Nl;function rm(){if(Nl)return oo;Nl=1;const{isUUID:e}=Vd(),t=/([\da-z][\d\-a-z]{0,31}):((?:[\w!$'()*+,\-.:;=@]|%[\da-f]{2})+)/iu,r=["http","https","ws","wss","urn","urn:uuid"];function s(b){return r.indexOf(b)!==-1}function i(b){return b.secure===!0?!0:b.secure===!1?!1:b.scheme?b.scheme.length===3&&(b.scheme[0]==="w"||b.scheme[0]==="W")&&(b.scheme[1]==="s"||b.scheme[1]==="S")&&(b.scheme[2]==="s"||b.scheme[2]==="S"):!1}function n(b){return b.host||(b.error=b.error||"HTTP URIs must have a host."),b}function o(b){const _=String(b.scheme).toLowerCase()==="https";return(b.port===(_?443:80)||b.port==="")&&(b.port=void 0),b.path||(b.path="/"),b}function a(b){return b.secure=i(b),b.resourceName=(b.path||"/")+(b.query?"?"+b.query:""),b.path=void 0,b.query=void 0,b}function l(b){if((b.port===(i(b)?443:80)||b.port==="")&&(b.port=void 0),typeof b.secure=="boolean"&&(b.scheme=b.secure?"wss":"ws",b.secure=void 0),b.resourceName){const[_,S]=b.resourceName.split("?");b.path=_&&_!=="/"?_:void 0,b.query=S,b.resourceName=void 0}return b.fragment=void 0,b}function c(b,_){if(!b.path)return b.error="URN can not be parsed",b;const S=b.path.match(t);if(S){const C=_.scheme||b.scheme||"urn";b.nid=S[1].toLowerCase(),b.nss=S[2];const O=`${C}:${_.nid||b.nid}`,M=$(O);b.path=void 0,M&&(b=M.parse(b,_))}else b.error=b.error||"URN can not be parsed.";return b}function d(b,_){if(b.nid===void 0)throw new Error("URN without nid cannot be serialized");const S=_.scheme||b.scheme||"urn",C=b.nid.toLowerCase(),O=`${S}:${_.nid||C}`,M=$(O);M&&(b=M.serialize(b,_));const D=b,z=b.nss;return D.path=`${C||_.nid}:${z}`,_.skipEscape=!0,D}function p(b,_){const S=b;return S.uuid=S.nss,S.nss=void 0,!_.tolerant&&(!S.uuid||!e(S.uuid))&&(S.error=S.error||"UUID is not valid."),S}function u(b){const _=b;return _.nss=(b.uuid||"").toLowerCase(),_}const h={scheme:"http",domainHost:!0,parse:n,serialize:o},y={scheme:"https",domainHost:h.domainHost,parse:n,serialize:o},g={scheme:"ws",domainHost:!0,parse:a,serialize:l},f={scheme:"wss",domainHost:g.domainHost,parse:g.parse,serialize:g.serialize},v={http:h,https:y,ws:g,wss:f,urn:{scheme:"urn",parse:c,serialize:d,skipNormalize:!0},"urn:uuid":{scheme:"urn:uuid",parse:p,serialize:u,skipNormalize:!0}};Object.setPrototypeOf(v,null);function $(b){return b&&(v[b]||v[b.toLowerCase()])||void 0}return oo={wsIsSecure:i,SCHEMES:v,isValidSchemeName:s,getSchemeHandler:$},oo}var Dl;function sm(){if(Dl)return is.exports;Dl=1;const{normalizeIPv6:e,removeDotSegments:t,recomposeAuthority:r,normalizeComponentEncoding:s,isIPv4:i,nonSimpleDomain:n}=Vd(),{SCHEMES:o,getSchemeHandler:a}=rm();function l(f,w){return typeof f=="string"?f=u(y(f,w),w):typeof f=="object"&&(f=y(u(f,w),w)),f}function c(f,w,m){const v=m?Object.assign({scheme:"null"},m):{scheme:"null"},$=d(y(f,v),y(w,v),v,!0);return v.skipEscape=!0,u($,v)}function d(f,w,m,v){const $={};return v||(f=y(u(f,m),m),w=y(u(w,m),m)),m=m||{},!m.tolerant&&w.scheme?($.scheme=w.scheme,$.userinfo=w.userinfo,$.host=w.host,$.port=w.port,$.path=t(w.path||""),$.query=w.query):(w.userinfo!==void 0||w.host!==void 0||w.port!==void 0?($.userinfo=w.userinfo,$.host=w.host,$.port=w.port,$.path=t(w.path||""),$.query=w.query):(w.path?(w.path[0]==="/"?$.path=t(w.path):((f.userinfo!==void 0||f.host!==void 0||f.port!==void 0)&&!f.path?$.path="/"+w.path:f.path?$.path=f.path.slice(0,f.path.lastIndexOf("/")+1)+w.path:$.path=w.path,$.path=t($.path)),$.query=w.query):($.path=f.path,w.query!==void 0?$.query=w.query:$.query=f.query),$.userinfo=f.userinfo,$.host=f.host,$.port=f.port),$.scheme=f.scheme),$.fragment=w.fragment,$}function p(f,w,m){return typeof f=="string"?(f=unescape(f),f=u(s(y(f,m),!0),{...m,skipEscape:!0})):typeof f=="object"&&(f=u(s(f,!0),{...m,skipEscape:!0})),typeof w=="string"?(w=unescape(w),w=u(s(y(w,m),!0),{...m,skipEscape:!0})):typeof w=="object"&&(w=u(s(w,!0),{...m,skipEscape:!0})),f.toLowerCase()===w.toLowerCase()}function u(f,w){const m={host:f.host,scheme:f.scheme,userinfo:f.userinfo,port:f.port,path:f.path,query:f.query,nid:f.nid,nss:f.nss,uuid:f.uuid,fragment:f.fragment,reference:f.reference,resourceName:f.resourceName,secure:f.secure,error:""},v=Object.assign({},w),$=[],b=a(v.scheme||m.scheme);b&&b.serialize&&b.serialize(m,v),m.path!==void 0&&(v.skipEscape?m.path=unescape(m.path):(m.path=escape(m.path),m.scheme!==void 0&&(m.path=m.path.split("%3A").join(":")))),v.reference!=="suffix"&&m.scheme&&$.push(m.scheme,":");const _=r(m);if(_!==void 0&&(v.reference!=="suffix"&&$.push("//"),$.push(_),m.path&&m.path[0]!=="/"&&$.push("/")),m.path!==void 0){let S=m.path;!v.absolutePath&&(!b||!b.absolutePath)&&(S=t(S)),_===void 0&&S[0]==="/"&&S[1]==="/"&&(S="/%2F"+S.slice(2)),$.push(S)}return m.query!==void 0&&$.push("?",m.query),m.fragment!==void 0&&$.push("#",m.fragment),$.join("")}const h=/^(?:([^#/:?]+):)?(?:\/\/((?:([^#/?@]*)@)?(\[[^#/?\]]+\]|[^#/:?]*)(?::(\d*))?))?([^#?]*)(?:\?([^#]*))?(?:#((?:.|[\n\r])*))?/u;function y(f,w){const m=Object.assign({},w),v={scheme:void 0,userinfo:void 0,host:"",port:void 0,path:"",query:void 0,fragment:void 0};let $=!1;m.reference==="suffix"&&(m.scheme?f=m.scheme+":"+f:f="//"+f);const b=f.match(h);if(b){if(v.scheme=b[1],v.userinfo=b[3],v.host=b[4],v.port=parseInt(b[5],10),v.path=b[6]||"",v.query=b[7],v.fragment=b[8],isNaN(v.port)&&(v.port=b[5]),v.host)if(i(v.host)===!1){const C=e(v.host);v.host=C.host.toLowerCase(),$=C.isIPV6}else $=!0;v.scheme===void 0&&v.userinfo===void 0&&v.host===void 0&&v.port===void 0&&v.query===void 0&&!v.path?v.reference="same-document":v.scheme===void 0?v.reference="relative":v.fragment===void 0?v.reference="absolute":v.reference="uri",m.reference&&m.reference!=="suffix"&&m.reference!==v.reference&&(v.error=v.error||"URI is not a "+m.reference+" reference.");const _=a(m.scheme||v.scheme);if(!m.unicodeSupport&&(!_||!_.unicodeSupport)&&v.host&&(m.domainHost||_&&_.domainHost)&&$===!1&&n(v.host))try{v.host=URL.domainToASCII(v.host.toLowerCase())}catch(S){v.error=v.error||"Host's domain name can not be converted to ASCII: "+S}(!_||_&&!_.skipNormalize)&&(f.indexOf("%")!==-1&&(v.scheme!==void 0&&(v.scheme=unescape(v.scheme)),v.host!==void 0&&(v.host=unescape(v.host))),v.path&&(v.path=escape(unescape(v.path))),v.fragment&&(v.fragment=encodeURI(decodeURIComponent(v.fragment)))),_&&_.parse&&_.parse(v,m)}else v.error=v.error||"URI can not be parsed.";return v}const g={SCHEMES:o,normalize:l,resolve:c,resolveComponent:d,equal:p,serialize:u,parse:y};return is.exports=g,is.exports.default=g,is.exports.fastUri=g,is.exports}var Ll;function im(){if(Ll)return Gs;Ll=1,Object.defineProperty(Gs,"__esModule",{value:!0});const e=sm();return e.code='require("ajv/dist/runtime/uri").default',Gs.default=e,Gs}var zl;function Bd(){return zl||(zl=1,(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.CodeGen=e.Name=e.nil=e.stringify=e.str=e._=e.KeywordCxt=void 0;var t=Ps();Object.defineProperty(e,"KeywordCxt",{enumerable:!0,get:function(){return t.KeywordCxt}});var r=ee();Object.defineProperty(e,"_",{enumerable:!0,get:function(){return r._}}),Object.defineProperty(e,"str",{enumerable:!0,get:function(){return r.str}}),Object.defineProperty(e,"stringify",{enumerable:!0,get:function(){return r.stringify}}),Object.defineProperty(e,"nil",{enumerable:!0,get:function(){return r.nil}}),Object.defineProperty(e,"Name",{enumerable:!0,get:function(){return r.Name}}),Object.defineProperty(e,"CodeGen",{enumerable:!0,get:function(){return r.CodeGen}});const s=An(),i=Os(),n=Md(),o=Tn(),a=ee(),l=En(),c=cn(),d=le(),p=tm,u=im(),h=(F,P)=>new RegExp(F,P);h.code="new RegExp";const y=["removeAdditional","useDefaults","coerceTypes"],g=new Set(["validate","serialize","parse","wrapper","root","schema","keyword","pattern","formats","validate$data","func","obj","Error"]),f={errorDataPath:"",format:"`validateFormats: false` can be used instead.",nullable:'"nullable" keyword is supported by default.',jsonPointers:"Deprecated jsPropertySyntax can be used instead.",extendRefs:"Deprecated ignoreKeywordsWithRef can be used instead.",missingRefs:"Pass empty schema with $id that should be ignored to ajv.addSchema.",processCode:"Use option `code: {process: (code, schemaEnv: object) => string}`",sourceCode:"Use option `code: {source: true}`",strictDefaults:"It is default now, see option `strict`.",strictKeywords:"It is default now, see option `strict`.",uniqueItems:'"uniqueItems" keyword is always validated.',unknownFormats:"Disable strict mode or pass `true` to `ajv.addFormat` (or `formats` option).",cache:"Map is used as cache, schema object as key.",serialize:"Map is used as cache, schema object as key.",ajvErrors:"It is default now."},w={ignoreKeywordsWithRef:"",jsPropertySyntax:"",unicode:'"minLength"/"maxLength" account for unicode characters by default.'},m=200;function v(F){var P,j,I,k,E,L,K,W,he,oe,T,R,q,U,Y,ne,Pe,ut,Be,Ue,Oe,gr,it,Fn,Vn;const Jr=F.strict,Bn=(P=F.code)===null||P===void 0?void 0:P.optimize,Oa=Bn===!0||Bn===void 0?1:Bn||0,Ia=(I=(j=F.code)===null||j===void 0?void 0:j.regExp)!==null&&I!==void 0?I:h,Xu=(k=F.uriResolver)!==null&&k!==void 0?k:u.default;return{strictSchema:(L=(E=F.strictSchema)!==null&&E!==void 0?E:Jr)!==null&&L!==void 0?L:!0,strictNumbers:(W=(K=F.strictNumbers)!==null&&K!==void 0?K:Jr)!==null&&W!==void 0?W:!0,strictTypes:(oe=(he=F.strictTypes)!==null&&he!==void 0?he:Jr)!==null&&oe!==void 0?oe:"log",strictTuples:(R=(T=F.strictTuples)!==null&&T!==void 0?T:Jr)!==null&&R!==void 0?R:"log",strictRequired:(U=(q=F.strictRequired)!==null&&q!==void 0?q:Jr)!==null&&U!==void 0?U:!1,code:F.code?{...F.code,optimize:Oa,regExp:Ia}:{optimize:Oa,regExp:Ia},loopRequired:(Y=F.loopRequired)!==null&&Y!==void 0?Y:m,loopEnum:(ne=F.loopEnum)!==null&&ne!==void 0?ne:m,meta:(Pe=F.meta)!==null&&Pe!==void 0?Pe:!0,messages:(ut=F.messages)!==null&&ut!==void 0?ut:!0,inlineRefs:(Be=F.inlineRefs)!==null&&Be!==void 0?Be:!0,schemaId:(Ue=F.schemaId)!==null&&Ue!==void 0?Ue:"$id",addUsedSchema:(Oe=F.addUsedSchema)!==null&&Oe!==void 0?Oe:!0,validateSchema:(gr=F.validateSchema)!==null&&gr!==void 0?gr:!0,validateFormats:(it=F.validateFormats)!==null&&it!==void 0?it:!0,unicodeRegExp:(Fn=F.unicodeRegExp)!==null&&Fn!==void 0?Fn:!0,int32range:(Vn=F.int32range)!==null&&Vn!==void 0?Vn:!0,uriResolver:Xu}}class ${constructor(P={}){this.schemas={},this.refs={},this.formats={},this._compilations=new Set,this._loading={},this._cache=new Map,P=this.opts={...P,...v(P)};const{es5:j,lines:I}=this.opts.code;this.scope=new a.ValueScope({scope:{},prefixes:g,es5:j,lines:I}),this.logger=z(P.logger);const k=P.validateFormats;P.validateFormats=!1,this.RULES=(0,n.getRules)(),b.call(this,f,P,"NOT SUPPORTED"),b.call(this,w,P,"DEPRECATED","warn"),this._metaOpts=M.call(this),P.formats&&C.call(this),this._addVocabularies(),this._addDefaultMetaSchema(),P.keywords&&O.call(this,P.keywords),typeof P.meta=="object"&&this.addMetaSchema(P.meta),S.call(this),P.validateFormats=k}_addVocabularies(){this.addKeyword("$async")}_addDefaultMetaSchema(){const{$data:P,meta:j,schemaId:I}=this.opts;let k=p;I==="id"&&(k={...p},k.id=k.$id,delete k.$id),j&&P&&this.addMetaSchema(k,k[I],!1)}defaultMeta(){const{meta:P,schemaId:j}=this.opts;return this.opts.defaultMeta=typeof P=="object"?P[j]||P:void 0}validate(P,j){let I;if(typeof P=="string"){if(I=this.getSchema(P),!I)throw new Error(`no schema with key or ref "${P}"`)}else I=this.compile(P);const k=I(j);return"$async"in I||(this.errors=I.errors),k}compile(P,j){const I=this._addSchema(P,j);return I.validate||this._compileSchemaEnv(I)}compileAsync(P,j){if(typeof this.opts.loadSchema!="function")throw new Error("options.loadSchema should be a function");const{loadSchema:I}=this.opts;return k.call(this,P,j);async function k(oe,T){await E.call(this,oe.$schema);const R=this._addSchema(oe,T);return R.validate||L.call(this,R)}async function E(oe){oe&&!this.getSchema(oe)&&await k.call(this,{$ref:oe},!0)}async function L(oe){try{return this._compileSchemaEnv(oe)}catch(T){if(!(T instanceof i.default))throw T;return K.call(this,T),await W.call(this,T.missingSchema),L.call(this,oe)}}function K({missingSchema:oe,missingRef:T}){if(this.refs[oe])throw new Error(`AnySchema ${oe} is loaded but ${T} cannot be resolved`)}async function W(oe){const T=await he.call(this,oe);this.refs[oe]||await E.call(this,T.$schema),this.refs[oe]||this.addSchema(T,oe,j)}async function he(oe){const T=this._loading[oe];if(T)return T;try{return await(this._loading[oe]=I(oe))}finally{delete this._loading[oe]}}}addSchema(P,j,I,k=this.opts.validateSchema){if(Array.isArray(P)){for(const L of P)this.addSchema(L,void 0,I,k);return this}let E;if(typeof P=="object"){const{schemaId:L}=this.opts;if(E=P[L],E!==void 0&&typeof E!="string")throw new Error(`schema ${L} must be string`)}return j=(0,l.normalizeId)(j||E),this._checkUnique(j),this.schemas[j]=this._addSchema(P,I,j,k,!0),this}addMetaSchema(P,j,I=this.opts.validateSchema){return this.addSchema(P,j,!0,I),this}validateSchema(P,j){if(typeof P=="boolean")return!0;let I;if(I=P.$schema,I!==void 0&&typeof I!="string")throw new Error("$schema must be a string");if(I=I||this.opts.defaultMeta||this.defaultMeta(),!I)return this.logger.warn("meta-schema not available"),this.errors=null,!0;const k=this.validate(I,P);if(!k&&j){const E="schema is invalid: "+this.errorsText();if(this.opts.validateSchema==="log")this.logger.error(E);else throw new Error(E)}return k}getSchema(P){let j;for(;typeof(j=_.call(this,P))=="string";)P=j;if(j===void 0){const{schemaId:I}=this.opts,k=new o.SchemaEnv({schema:{},schemaId:I});if(j=o.resolveSchema.call(this,k,P),!j)return;this.refs[P]=j}return j.validate||this._compileSchemaEnv(j)}removeSchema(P){if(P instanceof RegExp)return this._removeAllSchemas(this.schemas,P),this._removeAllSchemas(this.refs,P),this;switch(typeof P){case"undefined":return this._removeAllSchemas(this.schemas),this._removeAllSchemas(this.refs),this._cache.clear(),this;case"string":{const j=_.call(this,P);return typeof j=="object"&&this._cache.delete(j.schema),delete this.schemas[P],delete this.refs[P],this}case"object":{const j=P;this._cache.delete(j);let I=P[this.opts.schemaId];return I&&(I=(0,l.normalizeId)(I),delete this.schemas[I],delete this.refs[I]),this}default:throw new Error("ajv.removeSchema: invalid parameter")}}addVocabulary(P){for(const j of P)this.addKeyword(j);return this}addKeyword(P,j){let I;if(typeof P=="string")I=P,typeof j=="object"&&(this.logger.warn("these parameters are deprecated, see docs for addKeyword"),j.keyword=I);else if(typeof P=="object"&&j===void 0){if(j=P,I=j.keyword,Array.isArray(I)&&!I.length)throw new Error("addKeywords: keyword must be string or non-empty array")}else throw new Error("invalid addKeywords parameters");if(V.call(this,I,j),!j)return(0,d.eachItem)(I,E=>X.call(this,E)),this;Z.call(this,j);const k={...j,type:(0,c.getJSONTypes)(j.type),schemaType:(0,c.getJSONTypes)(j.schemaType)};return(0,d.eachItem)(I,k.type.length===0?E=>X.call(this,E,k):E=>k.type.forEach(L=>X.call(this,E,k,L))),this}getKeyword(P){const j=this.RULES.all[P];return typeof j=="object"?j.definition:!!j}removeKeyword(P){const{RULES:j}=this;delete j.keywords[P],delete j.all[P];for(const I of j.rules){const k=I.rules.findIndex(E=>E.keyword===P);k>=0&&I.rules.splice(k,1)}return this}addFormat(P,j){return typeof j=="string"&&(j=new RegExp(j)),this.formats[P]=j,this}errorsText(P=this.errors,{separator:j=", ",dataVar:I="data"}={}){return!P||P.length===0?"No errors":P.map(k=>`${I}${k.instancePath} ${k.message}`).reduce((k,E)=>k+j+E)}$dataMetaSchema(P,j){const I=this.RULES.all;P=JSON.parse(JSON.stringify(P));for(const k of j){const E=k.split("/").slice(1);let L=P;for(const K of E)L=L[K];for(const K in I){const W=I[K];if(typeof W!="object")continue;const{$data:he}=W.definition,oe=L[K];he&&oe&&(L[K]=fe(oe))}}return P}_removeAllSchemas(P,j){for(const I in P){const k=P[I];(!j||j.test(I))&&(typeof k=="string"?delete P[I]:k&&!k.meta&&(this._cache.delete(k.schema),delete P[I]))}}_addSchema(P,j,I,k=this.opts.validateSchema,E=this.opts.addUsedSchema){let L;const{schemaId:K}=this.opts;if(typeof P=="object")L=P[K];else{if(this.opts.jtd)throw new Error("schema must be object");if(typeof P!="boolean")throw new Error("schema must be object or boolean")}let W=this._cache.get(P);if(W!==void 0)return W;I=(0,l.normalizeId)(L||I);const he=l.getSchemaRefs.call(this,P,I);return W=new o.SchemaEnv({schema:P,schemaId:K,meta:j,baseId:I,localRefs:he}),this._cache.set(W.schema,W),E&&!I.startsWith("#")&&(I&&this._checkUnique(I),this.refs[I]=W),k&&this.validateSchema(P,!0),W}_checkUnique(P){if(this.schemas[P]||this.refs[P])throw new Error(`schema with key or id "${P}" already exists`)}_compileSchemaEnv(P){if(P.meta?this._compileMetaSchema(P):o.compileSchema.call(this,P),!P.validate)throw new Error("ajv implementation error");return P.validate}_compileMetaSchema(P){const j=this.opts;this.opts=this._metaOpts;try{o.compileSchema.call(this,P)}finally{this.opts=j}}}$.ValidationError=s.default,$.MissingRefError=i.default,e.default=$;function b(F,P,j,I="error"){for(const k in F){const E=k;E in P&&this.logger[I](`${j}: option ${k}. ${F[E]}`)}}function _(F){return F=(0,l.normalizeId)(F),this.schemas[F]||this.refs[F]}function S(){const F=this.opts.schemas;if(F)if(Array.isArray(F))this.addSchema(F);else for(const P in F)this.addSchema(F[P],P)}function C(){for(const F in this.opts.formats){const P=this.opts.formats[F];P&&this.addFormat(F,P)}}function O(F){if(Array.isArray(F)){this.addVocabulary(F);return}this.logger.warn("keywords option as map is deprecated, pass array");for(const P in F){const j=F[P];j.keyword||(j.keyword=P),this.addKeyword(j)}}function M(){const F={...this.opts};for(const P of y)delete F[P];return F}const D={log(){},warn(){},error(){}};function z(F){if(F===!1)return D;if(F===void 0)return console;if(F.log&&F.warn&&F.error)return F;throw new Error("logger must implement log, warn and error methods")}const B=/^[a-z_$][a-z0-9_$:-]*$/i;function V(F,P){const{RULES:j}=this;if((0,d.eachItem)(F,I=>{if(j.keywords[I])throw new Error(`Keyword ${I} is already defined`);if(!B.test(I))throw new Error(`Keyword ${I} has invalid name`)}),!!P&&P.$data&&!("code"in P||"validate"in P))throw new Error('$data keyword must have "code" or "validate" function')}function X(F,P,j){var I;const k=P?.post;if(j&&k)throw new Error('keyword with "post" flag cannot have "type"');const{RULES:E}=this;let L=k?E.post:E.rules.find(({type:W})=>W===j);if(L||(L={type:j,rules:[]},E.rules.push(L)),E.keywords[F]=!0,!P)return;const K={keyword:F,definition:{...P,type:(0,c.getJSONTypes)(P.type),schemaType:(0,c.getJSONTypes)(P.schemaType)}};P.before?ae.call(this,L,K,P.before):L.rules.push(K),E.all[F]=K,(I=P.implements)===null||I===void 0||I.forEach(W=>this.addKeyword(W))}function ae(F,P,j){const I=F.rules.findIndex(k=>k.keyword===j);I>=0?F.rules.splice(I,0,P):(F.rules.push(P),this.logger.warn(`rule ${j} is not defined`))}function Z(F){let{metaSchema:P}=F;P!==void 0&&(F.$data&&this.opts.$data&&(P=fe(P)),F.validateSchema=this.compile(P,!0))}const J={$ref:"https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#"};function fe(F){return{anyOf:[F,J]}}})(Qn)),Qn}var Ys={},Js={},Xs={},jl;function nm(){if(jl)return Xs;jl=1,Object.defineProperty(Xs,"__esModule",{value:!0});const e={keyword:"id",code(){throw new Error('NOT SUPPORTED: keyword "id", use "$id" for schema ID')}};return Xs.default=e,Xs}var Mt={},Ml;function la(){if(Ml)return Mt;Ml=1,Object.defineProperty(Mt,"__esModule",{value:!0}),Mt.callRef=Mt.getValidate=void 0;const e=Os(),t=vt(),r=ee(),s=bt(),i=Tn(),n=le(),o={keyword:"$ref",schemaType:"string",code(c){const{gen:d,schema:p,it:u}=c,{baseId:h,schemaEnv:y,validateName:g,opts:f,self:w}=u,{root:m}=y;if((p==="#"||p==="#/")&&h===m.baseId)return $();const v=i.resolveRef.call(w,m,h,p);if(v===void 0)throw new e.default(u.opts.uriResolver,h,p);if(v instanceof i.SchemaEnv)return b(v);return _(v);function $(){if(y===m)return l(c,g,y,y.$async);const S=d.scopeValue("root",{ref:m});return l(c,(0,r._)`${S}.validate`,m,m.$async)}function b(S){const C=a(c,S);l(c,C,S,S.$async)}function _(S){const C=d.scopeValue("schema",f.code.source===!0?{ref:S,code:(0,r.stringify)(S)}:{ref:S}),O=d.name("valid"),M=c.subschema({schema:S,dataTypes:[],schemaPath:r.nil,topSchemaRef:C,errSchemaPath:p},O);c.mergeEvaluated(M),c.ok(O)}}};function a(c,d){const{gen:p}=c;return d.validate?p.scopeValue("validate",{ref:d.validate}):(0,r._)`${p.scopeValue("wrapper",{ref:d})}.validate`}Mt.getValidate=a;function l(c,d,p,u){const{gen:h,it:y}=c,{allErrors:g,schemaEnv:f,opts:w}=y,m=w.passContext?s.default.this:r.nil;u?v():$();function v(){if(!f.$async)throw new Error("async schema referenced by sync schema");const S=h.let("valid");h.try(()=>{h.code((0,r._)`await ${(0,t.callValidateCode)(c,d,m)}`),_(d),g||h.assign(S,!0)},C=>{h.if((0,r._)`!(${C} instanceof ${y.ValidationError})`,()=>h.throw(C)),b(C),g||h.assign(S,!1)}),c.ok(S)}function $(){c.result((0,t.callValidateCode)(c,d,m),()=>_(d),()=>b(d))}function b(S){const C=(0,r._)`${S}.errors`;h.assign(s.default.vErrors,(0,r._)`${s.default.vErrors} === null ? ${C} : ${s.default.vErrors}.concat(${C})`),h.assign(s.default.errors,(0,r._)`${s.default.vErrors}.length`)}function _(S){var C;if(!y.opts.unevaluated)return;const O=(C=p?.validate)===null||C===void 0?void 0:C.evaluated;if(y.props!==!0)if(O&&!O.dynamicProps)O.props!==void 0&&(y.props=n.mergeEvaluated.props(h,O.props,y.props));else{const M=h.var("props",(0,r._)`${S}.evaluated.props`);y.props=n.mergeEvaluated.props(h,M,y.props,r.Name)}if(y.items!==!0)if(O&&!O.dynamicItems)O.items!==void 0&&(y.items=n.mergeEvaluated.items(h,O.items,y.items));else{const M=h.var("items",(0,r._)`${S}.evaluated.items`);y.items=n.mergeEvaluated.items(h,M,y.items,r.Name)}}}return Mt.callRef=l,Mt.default=o,Mt}var ql;function Ud(){if(ql)return Js;ql=1,Object.defineProperty(Js,"__esModule",{value:!0});const e=nm(),t=la(),r=["$schema","$id","$defs","$vocabulary",{keyword:"$comment"},"definitions",e.default,t.default];return Js.default=r,Js}var Qs={},Zs={},Fl;function om(){if(Fl)return Zs;Fl=1,Object.defineProperty(Zs,"__esModule",{value:!0});const e=ee(),t=e.operators,r={maximum:{okStr:"<=",ok:t.LTE,fail:t.GT},minimum:{okStr:">=",ok:t.GTE,fail:t.LT},exclusiveMaximum:{okStr:"<",ok:t.LT,fail:t.GTE},exclusiveMinimum:{okStr:">",ok:t.GT,fail:t.LTE}},s={message:({keyword:n,schemaCode:o})=>(0,e.str)`must be ${r[n].okStr} ${o}`,params:({keyword:n,schemaCode:o})=>(0,e._)`{comparison: ${r[n].okStr}, limit: ${o}}`},i={keyword:Object.keys(r),type:"number",schemaType:"number",$data:!0,error:s,code(n){const{keyword:o,data:a,schemaCode:l}=n;n.fail$data((0,e._)`${a} ${r[o].fail} ${l} || isNaN(${a})`)}};return Zs.default=i,Zs}var ei={},Vl;function am(){if(Vl)return ei;Vl=1,Object.defineProperty(ei,"__esModule",{value:!0});const e=ee(),r={keyword:"multipleOf",type:"number",schemaType:"number",$data:!0,error:{message:({schemaCode:s})=>(0,e.str)`must be multiple of ${s}`,params:({schemaCode:s})=>(0,e._)`{multipleOf: ${s}}`},code(s){const{gen:i,data:n,schemaCode:o,it:a}=s,l=a.opts.multipleOfPrecision,c=i.let("res"),d=l?(0,e._)`Math.abs(Math.round(${c}) - ${c}) > 1e-${l}`:(0,e._)`${c} !== parseInt(${c})`;s.fail$data((0,e._)`(${o} === 0 || (${c} = ${n}/${o}, ${d}))`)}};return ei.default=r,ei}var ti={},ri={},Bl;function lm(){if(Bl)return ri;Bl=1,Object.defineProperty(ri,"__esModule",{value:!0});function e(t){const r=t.length;let s=0,i=0,n;for(;i<r;)s++,n=t.charCodeAt(i++),n>=55296&&n<=56319&&i<r&&(n=t.charCodeAt(i),(n&64512)===56320&&i++);return s}return ri.default=e,e.code='require("ajv/dist/runtime/ucs2length").default',ri}var Ul;function cm(){if(Ul)return ti;Ul=1,Object.defineProperty(ti,"__esModule",{value:!0});const e=ee(),t=le(),r=lm(),i={keyword:["maxLength","minLength"],type:"string",schemaType:"number",$data:!0,error:{message({keyword:n,schemaCode:o}){const a=n==="maxLength"?"more":"fewer";return(0,e.str)`must NOT have ${a} than ${o} characters`},params:({schemaCode:n})=>(0,e._)`{limit: ${n}}`},code(n){const{keyword:o,data:a,schemaCode:l,it:c}=n,d=o==="maxLength"?e.operators.GT:e.operators.LT,p=c.opts.unicode===!1?(0,e._)`${a}.length`:(0,e._)`${(0,t.useFunc)(n.gen,r.default)}(${a})`;n.fail$data((0,e._)`${p} ${d} ${l}`)}};return ti.default=i,ti}var si={},Hl;function dm(){if(Hl)return si;Hl=1,Object.defineProperty(si,"__esModule",{value:!0});const e=vt(),t=ee(),s={keyword:"pattern",type:"string",schemaType:"string",$data:!0,error:{message:({schemaCode:i})=>(0,t.str)`must match pattern "${i}"`,params:({schemaCode:i})=>(0,t._)`{pattern: ${i}}`},code(i){const{data:n,$data:o,schema:a,schemaCode:l,it:c}=i,d=c.opts.unicodeRegExp?"u":"",p=o?(0,t._)`(new RegExp(${l}, ${d}))`:(0,e.usePattern)(i,a);i.fail$data((0,t._)`!${p}.test(${n})`)}};return si.default=s,si}var ii={},Kl;function um(){if(Kl)return ii;Kl=1,Object.defineProperty(ii,"__esModule",{value:!0});const e=ee(),r={keyword:["maxProperties","minProperties"],type:"object",schemaType:"number",$data:!0,error:{message({keyword:s,schemaCode:i}){const n=s==="maxProperties"?"more":"fewer";return(0,e.str)`must NOT have ${n} than ${i} properties`},params:({schemaCode:s})=>(0,e._)`{limit: ${s}}`},code(s){const{keyword:i,data:n,schemaCode:o}=s,a=i==="maxProperties"?e.operators.GT:e.operators.LT;s.fail$data((0,e._)`Object.keys(${n}).length ${a} ${o}`)}};return ii.default=r,ii}var ni={},Wl;function hm(){if(Wl)return ni;Wl=1,Object.defineProperty(ni,"__esModule",{value:!0});const e=vt(),t=ee(),r=le(),i={keyword:"required",type:"object",schemaType:"array",$data:!0,error:{message:({params:{missingProperty:n}})=>(0,t.str)`must have required property '${n}'`,params:({params:{missingProperty:n}})=>(0,t._)`{missingProperty: ${n}}`},code(n){const{gen:o,schema:a,schemaCode:l,data:c,$data:d,it:p}=n,{opts:u}=p;if(!d&&a.length===0)return;const h=a.length>=u.loopRequired;if(p.allErrors?y():g(),u.strictRequired){const m=n.parentSchema.properties,{definedProperties:v}=n.it;for(const $ of a)if(m?.[$]===void 0&&!v.has($)){const b=p.schemaEnv.baseId+p.errSchemaPath,_=`required property "${$}" is not defined at "${b}" (strictRequired)`;(0,r.checkStrictMode)(p,_,p.opts.strictRequired)}}function y(){if(h||d)n.block$data(t.nil,f);else for(const m of a)(0,e.checkReportMissingProp)(n,m)}function g(){const m=o.let("missing");if(h||d){const v=o.let("valid",!0);n.block$data(v,()=>w(m,v)),n.ok(v)}else o.if((0,e.checkMissingProp)(n,a,m)),(0,e.reportMissingProp)(n,m),o.else()}function f(){o.forOf("prop",l,m=>{n.setParams({missingProperty:m}),o.if((0,e.noPropertyInData)(o,c,m,u.ownProperties),()=>n.error())})}function w(m,v){n.setParams({missingProperty:m}),o.forOf(m,l,()=>{o.assign(v,(0,e.propertyInData)(o,c,m,u.ownProperties)),o.if((0,t.not)(v),()=>{n.error(),o.break()})},t.nil)}}};return ni.default=i,ni}var oi={},Gl;function pm(){if(Gl)return oi;Gl=1,Object.defineProperty(oi,"__esModule",{value:!0});const e=ee(),r={keyword:["maxItems","minItems"],type:"array",schemaType:"number",$data:!0,error:{message({keyword:s,schemaCode:i}){const n=s==="maxItems"?"more":"fewer";return(0,e.str)`must NOT have ${n} than ${i} items`},params:({schemaCode:s})=>(0,e._)`{limit: ${s}}`},code(s){const{keyword:i,data:n,schemaCode:o}=s,a=i==="maxItems"?e.operators.GT:e.operators.LT;s.fail$data((0,e._)`${n}.length ${a} ${o}`)}};return oi.default=r,oi}var ai={},li={},Yl;function ca(){if(Yl)return li;Yl=1,Object.defineProperty(li,"__esModule",{value:!0});const e=Fd();return e.code='require("ajv/dist/runtime/equal").default',li.default=e,li}var Jl;function fm(){if(Jl)return ai;Jl=1,Object.defineProperty(ai,"__esModule",{value:!0});const e=cn(),t=ee(),r=le(),s=ca(),n={keyword:"uniqueItems",type:"array",schemaType:"boolean",$data:!0,error:{message:({params:{i:o,j:a}})=>(0,t.str)`must NOT have duplicate items (items ## ${a} and ${o} are identical)`,params:({params:{i:o,j:a}})=>(0,t._)`{i: ${o}, j: ${a}}`},code(o){const{gen:a,data:l,$data:c,schema:d,parentSchema:p,schemaCode:u,it:h}=o;if(!c&&!d)return;const y=a.let("valid"),g=p.items?(0,e.getSchemaTypes)(p.items):[];o.block$data(y,f,(0,t._)`${u} === false`),o.ok(y);function f(){const $=a.let("i",(0,t._)`${l}.length`),b=a.let("j");o.setParams({i:$,j:b}),a.assign(y,!0),a.if((0,t._)`${$} > 1`,()=>(w()?m:v)($,b))}function w(){return g.length>0&&!g.some($=>$==="object"||$==="array")}function m($,b){const _=a.name("item"),S=(0,e.checkDataTypes)(g,_,h.opts.strictNumbers,e.DataType.Wrong),C=a.const("indices",(0,t._)`{}`);a.for((0,t._)`;${$}--;`,()=>{a.let(_,(0,t._)`${l}[${$}]`),a.if(S,(0,t._)`continue`),g.length>1&&a.if((0,t._)`typeof ${_} == "string"`,(0,t._)`${_} += "_"`),a.if((0,t._)`typeof ${C}[${_}] == "number"`,()=>{a.assign(b,(0,t._)`${C}[${_}]`),o.error(),a.assign(y,!1).break()}).code((0,t._)`${C}[${_}] = ${$}`)})}function v($,b){const _=(0,r.useFunc)(a,s.default),S=a.name("outer");a.label(S).for((0,t._)`;${$}--;`,()=>a.for((0,t._)`${b} = ${$}; ${b}--;`,()=>a.if((0,t._)`${_}(${l}[${$}], ${l}[${b}])`,()=>{o.error(),a.assign(y,!1).break(S)})))}}};return ai.default=n,ai}var ci={},Xl;function mm(){if(Xl)return ci;Xl=1,Object.defineProperty(ci,"__esModule",{value:!0});const e=ee(),t=le(),r=ca(),i={keyword:"const",$data:!0,error:{message:"must be equal to constant",params:({schemaCode:n})=>(0,e._)`{allowedValue: ${n}}`},code(n){const{gen:o,data:a,$data:l,schemaCode:c,schema:d}=n;l||d&&typeof d=="object"?n.fail$data((0,e._)`!${(0,t.useFunc)(o,r.default)}(${a}, ${c})`):n.fail((0,e._)`${d} !== ${a}`)}};return ci.default=i,ci}var di={},Ql;function gm(){if(Ql)return di;Ql=1,Object.defineProperty(di,"__esModule",{value:!0});const e=ee(),t=le(),r=ca(),i={keyword:"enum",schemaType:"array",$data:!0,error:{message:"must be equal to one of the allowed values",params:({schemaCode:n})=>(0,e._)`{allowedValues: ${n}}`},code(n){const{gen:o,data:a,$data:l,schema:c,schemaCode:d,it:p}=n;if(!l&&c.length===0)throw new Error("enum must have non-empty array");const u=c.length>=p.opts.loopEnum;let h;const y=()=>h??(h=(0,t.useFunc)(o,r.default));let g;if(u||l)g=o.let("valid"),n.block$data(g,f);else{if(!Array.isArray(c))throw new Error("ajv implementation error");const m=o.const("vSchema",d);g=(0,e.or)(...c.map((v,$)=>w(m,$)))}n.pass(g);function f(){o.assign(g,!1),o.forOf("v",d,m=>o.if((0,e._)`${y()}(${a}, ${m})`,()=>o.assign(g,!0).break()))}function w(m,v){const $=c[v];return typeof $=="object"&&$!==null?(0,e._)`${y()}(${a}, ${m}[${v}])`:(0,e._)`${a} === ${$}`}}};return di.default=i,di}var Zl;function Hd(){if(Zl)return Qs;Zl=1,Object.defineProperty(Qs,"__esModule",{value:!0});const e=om(),t=am(),r=cm(),s=dm(),i=um(),n=hm(),o=pm(),a=fm(),l=mm(),c=gm(),d=[e.default,t.default,r.default,s.default,i.default,n.default,o.default,a.default,{keyword:"type",schemaType:["string","array"]},{keyword:"nullable",schemaType:"boolean"},l.default,c.default];return Qs.default=d,Qs}var ui={},yr={},ec;function Kd(){if(ec)return yr;ec=1,Object.defineProperty(yr,"__esModule",{value:!0}),yr.validateAdditionalItems=void 0;const e=ee(),t=le(),s={keyword:"additionalItems",type:"array",schemaType:["boolean","object"],before:"uniqueItems",error:{message:({params:{len:n}})=>(0,e.str)`must NOT have more than ${n} items`,params:({params:{len:n}})=>(0,e._)`{limit: ${n}}`},code(n){const{parentSchema:o,it:a}=n,{items:l}=o;if(!Array.isArray(l)){(0,t.checkStrictMode)(a,'"additionalItems" is ignored when "items" is not an array of schemas');return}i(n,l)}};function i(n,o){const{gen:a,schema:l,data:c,keyword:d,it:p}=n;p.items=!0;const u=a.const("len",(0,e._)`${c}.length`);if(l===!1)n.setParams({len:o.length}),n.pass((0,e._)`${u} <= ${o.length}`);else if(typeof l=="object"&&!(0,t.alwaysValidSchema)(p,l)){const y=a.var("valid",(0,e._)`${u} <= ${o.length}`);a.if((0,e.not)(y),()=>h(y)),n.ok(y)}function h(y){a.forRange("i",o.length,u,g=>{n.subschema({keyword:d,dataProp:g,dataPropType:t.Type.Num},y),p.allErrors||a.if((0,e.not)(y),()=>a.break())})}}return yr.validateAdditionalItems=i,yr.default=s,yr}var hi={},br={},tc;function Wd(){if(tc)return br;tc=1,Object.defineProperty(br,"__esModule",{value:!0}),br.validateTuple=void 0;const e=ee(),t=le(),r=vt(),s={keyword:"items",type:"array",schemaType:["object","array","boolean"],before:"uniqueItems",code(n){const{schema:o,it:a}=n;if(Array.isArray(o))return i(n,"additionalItems",o);a.items=!0,!(0,t.alwaysValidSchema)(a,o)&&n.ok((0,r.validateArray)(n))}};function i(n,o,a=n.schema){const{gen:l,parentSchema:c,data:d,keyword:p,it:u}=n;g(c),u.opts.unevaluated&&a.length&&u.items!==!0&&(u.items=t.mergeEvaluated.items(l,a.length,u.items));const h=l.name("valid"),y=l.const("len",(0,e._)`${d}.length`);a.forEach((f,w)=>{(0,t.alwaysValidSchema)(u,f)||(l.if((0,e._)`${y} > ${w}`,()=>n.subschema({keyword:p,schemaProp:w,dataProp:w},h)),n.ok(h))});function g(f){const{opts:w,errSchemaPath:m}=u,v=a.length,$=v===f.minItems&&(v===f.maxItems||f[o]===!1);if(w.strictTuples&&!$){const b=`"${p}" is ${v}-tuple, but minItems or maxItems/${o} are not specified or different at path "${m}"`;(0,t.checkStrictMode)(u,b,w.strictTuples)}}}return br.validateTuple=i,br.default=s,br}var rc;function ym(){if(rc)return hi;rc=1,Object.defineProperty(hi,"__esModule",{value:!0});const e=Wd(),t={keyword:"prefixItems",type:"array",schemaType:["array"],before:"uniqueItems",code:r=>(0,e.validateTuple)(r,"items")};return hi.default=t,hi}var pi={},sc;function bm(){if(sc)return pi;sc=1,Object.defineProperty(pi,"__esModule",{value:!0});const e=ee(),t=le(),r=vt(),s=Kd(),n={keyword:"items",type:"array",schemaType:["object","boolean"],before:"uniqueItems",error:{message:({params:{len:o}})=>(0,e.str)`must NOT have more than ${o} items`,params:({params:{len:o}})=>(0,e._)`{limit: ${o}}`},code(o){const{schema:a,parentSchema:l,it:c}=o,{prefixItems:d}=l;c.items=!0,!(0,t.alwaysValidSchema)(c,a)&&(d?(0,s.validateAdditionalItems)(o,d):o.ok((0,r.validateArray)(o)))}};return pi.default=n,pi}var fi={},ic;function vm(){if(ic)return fi;ic=1,Object.defineProperty(fi,"__esModule",{value:!0});const e=ee(),t=le(),s={keyword:"contains",type:"array",schemaType:["object","boolean"],before:"uniqueItems",trackErrors:!0,error:{message:({params:{min:i,max:n}})=>n===void 0?(0,e.str)`must contain at least ${i} valid item(s)`:(0,e.str)`must contain at least ${i} and no more than ${n} valid item(s)`,params:({params:{min:i,max:n}})=>n===void 0?(0,e._)`{minContains: ${i}}`:(0,e._)`{minContains: ${i}, maxContains: ${n}}`},code(i){const{gen:n,schema:o,parentSchema:a,data:l,it:c}=i;let d,p;const{minContains:u,maxContains:h}=a;c.opts.next?(d=u===void 0?1:u,p=h):d=1;const y=n.const("len",(0,e._)`${l}.length`);if(i.setParams({min:d,max:p}),p===void 0&&d===0){(0,t.checkStrictMode)(c,'"minContains" == 0 without "maxContains": "contains" keyword ignored');return}if(p!==void 0&&d>p){(0,t.checkStrictMode)(c,'"minContains" > "maxContains" is always invalid'),i.fail();return}if((0,t.alwaysValidSchema)(c,o)){let v=(0,e._)`${y} >= ${d}`;p!==void 0&&(v=(0,e._)`${v} && ${y} <= ${p}`),i.pass(v);return}c.items=!0;const g=n.name("valid");p===void 0&&d===1?w(g,()=>n.if(g,()=>n.break())):d===0?(n.let(g,!0),p!==void 0&&n.if((0,e._)`${l}.length > 0`,f)):(n.let(g,!1),f()),i.result(g,()=>i.reset());function f(){const v=n.name("_valid"),$=n.let("count",0);w(v,()=>n.if(v,()=>m($)))}function w(v,$){n.forRange("i",0,y,b=>{i.subschema({keyword:"contains",dataProp:b,dataPropType:t.Type.Num,compositeRule:!0},v),$()})}function m(v){n.code((0,e._)`${v}++`),p===void 0?n.if((0,e._)`${v} >= ${d}`,()=>n.assign(g,!0).break()):(n.if((0,e._)`${v} > ${p}`,()=>n.assign(g,!1).break()),d===1?n.assign(g,!0):n.if((0,e._)`${v} >= ${d}`,()=>n.assign(g,!0)))}}};return fi.default=s,fi}var ao={},nc;function da(){return nc||(nc=1,(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.validateSchemaDeps=e.validatePropertyDeps=e.error=void 0;const t=ee(),r=le(),s=vt();e.error={message:({params:{property:l,depsCount:c,deps:d}})=>{const p=c===1?"property":"properties";return(0,t.str)`must have ${p} ${d} when property ${l} is present`},params:({params:{property:l,depsCount:c,deps:d,missingProperty:p}})=>(0,t._)`{property: ${l},
    missingProperty: ${p},
    depsCount: ${c},
    deps: ${d}}`};const i={keyword:"dependencies",type:"object",schemaType:"object",error:e.error,code(l){const[c,d]=n(l);o(l,c),a(l,d)}};function n({schema:l}){const c={},d={};for(const p in l){if(p==="__proto__")continue;const u=Array.isArray(l[p])?c:d;u[p]=l[p]}return[c,d]}function o(l,c=l.schema){const{gen:d,data:p,it:u}=l;if(Object.keys(c).length===0)return;const h=d.let("missing");for(const y in c){const g=c[y];if(g.length===0)continue;const f=(0,s.propertyInData)(d,p,y,u.opts.ownProperties);l.setParams({property:y,depsCount:g.length,deps:g.join(", ")}),u.allErrors?d.if(f,()=>{for(const w of g)(0,s.checkReportMissingProp)(l,w)}):(d.if((0,t._)`${f} && (${(0,s.checkMissingProp)(l,g,h)})`),(0,s.reportMissingProp)(l,h),d.else())}}e.validatePropertyDeps=o;function a(l,c=l.schema){const{gen:d,data:p,keyword:u,it:h}=l,y=d.name("valid");for(const g in c)(0,r.alwaysValidSchema)(h,c[g])||(d.if((0,s.propertyInData)(d,p,g,h.opts.ownProperties),()=>{const f=l.subschema({keyword:u,schemaProp:g},y);l.mergeValidEvaluated(f,y)},()=>d.var(y,!0)),l.ok(y))}e.validateSchemaDeps=a,e.default=i})(ao)),ao}var mi={},oc;function wm(){if(oc)return mi;oc=1,Object.defineProperty(mi,"__esModule",{value:!0});const e=ee(),t=le(),s={keyword:"propertyNames",type:"object",schemaType:["object","boolean"],error:{message:"property name must be valid",params:({params:i})=>(0,e._)`{propertyName: ${i.propertyName}}`},code(i){const{gen:n,schema:o,data:a,it:l}=i;if((0,t.alwaysValidSchema)(l,o))return;const c=n.name("valid");n.forIn("key",a,d=>{i.setParams({propertyName:d}),i.subschema({keyword:"propertyNames",data:d,dataTypes:["string"],propertyName:d,compositeRule:!0},c),n.if((0,e.not)(c),()=>{i.error(!0),l.allErrors||n.break()})}),i.ok(c)}};return mi.default=s,mi}var gi={},ac;function Gd(){if(ac)return gi;ac=1,Object.defineProperty(gi,"__esModule",{value:!0});const e=vt(),t=ee(),r=bt(),s=le(),n={keyword:"additionalProperties",type:["object"],schemaType:["boolean","object"],allowUndefined:!0,trackErrors:!0,error:{message:"must NOT have additional properties",params:({params:o})=>(0,t._)`{additionalProperty: ${o.additionalProperty}}`},code(o){const{gen:a,schema:l,parentSchema:c,data:d,errsCount:p,it:u}=o;if(!p)throw new Error("ajv implementation error");const{allErrors:h,opts:y}=u;if(u.props=!0,y.removeAdditional!=="all"&&(0,s.alwaysValidSchema)(u,l))return;const g=(0,e.allSchemaProperties)(c.properties),f=(0,e.allSchemaProperties)(c.patternProperties);w(),o.ok((0,t._)`${p} === ${r.default.errors}`);function w(){a.forIn("key",d,_=>{!g.length&&!f.length?$(_):a.if(m(_),()=>$(_))})}function m(_){let S;if(g.length>8){const C=(0,s.schemaRefOrVal)(u,c.properties,"properties");S=(0,e.isOwnProperty)(a,C,_)}else g.length?S=(0,t.or)(...g.map(C=>(0,t._)`${_} === ${C}`)):S=t.nil;return f.length&&(S=(0,t.or)(S,...f.map(C=>(0,t._)`${(0,e.usePattern)(o,C)}.test(${_})`))),(0,t.not)(S)}function v(_){a.code((0,t._)`delete ${d}[${_}]`)}function $(_){if(y.removeAdditional==="all"||y.removeAdditional&&l===!1){v(_);return}if(l===!1){o.setParams({additionalProperty:_}),o.error(),h||a.break();return}if(typeof l=="object"&&!(0,s.alwaysValidSchema)(u,l)){const S=a.name("valid");y.removeAdditional==="failing"?(b(_,S,!1),a.if((0,t.not)(S),()=>{o.reset(),v(_)})):(b(_,S),h||a.if((0,t.not)(S),()=>a.break()))}}function b(_,S,C){const O={keyword:"additionalProperties",dataProp:_,dataPropType:s.Type.Str};C===!1&&Object.assign(O,{compositeRule:!0,createErrors:!1,allErrors:!1}),o.subschema(O,S)}}};return gi.default=n,gi}var yi={},lc;function _m(){if(lc)return yi;lc=1,Object.defineProperty(yi,"__esModule",{value:!0});const e=Ps(),t=vt(),r=le(),s=Gd(),i={keyword:"properties",type:"object",schemaType:"object",code(n){const{gen:o,schema:a,parentSchema:l,data:c,it:d}=n;d.opts.removeAdditional==="all"&&l.additionalProperties===void 0&&s.default.code(new e.KeywordCxt(d,s.default,"additionalProperties"));const p=(0,t.allSchemaProperties)(a);for(const f of p)d.definedProperties.add(f);d.opts.unevaluated&&p.length&&d.props!==!0&&(d.props=r.mergeEvaluated.props(o,(0,r.toHash)(p),d.props));const u=p.filter(f=>!(0,r.alwaysValidSchema)(d,a[f]));if(u.length===0)return;const h=o.name("valid");for(const f of u)y(f)?g(f):(o.if((0,t.propertyInData)(o,c,f,d.opts.ownProperties)),g(f),d.allErrors||o.else().var(h,!0),o.endIf()),n.it.definedProperties.add(f),n.ok(h);function y(f){return d.opts.useDefaults&&!d.compositeRule&&a[f].default!==void 0}function g(f){n.subschema({keyword:"properties",schemaProp:f,dataProp:f},h)}}};return yi.default=i,yi}var bi={},cc;function $m(){if(cc)return bi;cc=1,Object.defineProperty(bi,"__esModule",{value:!0});const e=vt(),t=ee(),r=le(),s=le(),i={keyword:"patternProperties",type:"object",schemaType:"object",code(n){const{gen:o,schema:a,data:l,parentSchema:c,it:d}=n,{opts:p}=d,u=(0,e.allSchemaProperties)(a),h=u.filter($=>(0,r.alwaysValidSchema)(d,a[$]));if(u.length===0||h.length===u.length&&(!d.opts.unevaluated||d.props===!0))return;const y=p.strictSchema&&!p.allowMatchingProperties&&c.properties,g=o.name("valid");d.props!==!0&&!(d.props instanceof t.Name)&&(d.props=(0,s.evaluatedPropsToName)(o,d.props));const{props:f}=d;w();function w(){for(const $ of u)y&&m($),d.allErrors?v($):(o.var(g,!0),v($),o.if(g))}function m($){for(const b in y)new RegExp($).test(b)&&(0,r.checkStrictMode)(d,`property ${b} matches pattern ${$} (use allowMatchingProperties)`)}function v($){o.forIn("key",l,b=>{o.if((0,t._)`${(0,e.usePattern)(n,$)}.test(${b})`,()=>{const _=h.includes($);_||n.subschema({keyword:"patternProperties",schemaProp:$,dataProp:b,dataPropType:s.Type.Str},g),d.opts.unevaluated&&f!==!0?o.assign((0,t._)`${f}[${b}]`,!0):!_&&!d.allErrors&&o.if((0,t.not)(g),()=>o.break())})})}}};return bi.default=i,bi}var vi={},dc;function km(){if(dc)return vi;dc=1,Object.defineProperty(vi,"__esModule",{value:!0});const e=le(),t={keyword:"not",schemaType:["object","boolean"],trackErrors:!0,code(r){const{gen:s,schema:i,it:n}=r;if((0,e.alwaysValidSchema)(n,i)){r.fail();return}const o=s.name("valid");r.subschema({keyword:"not",compositeRule:!0,createErrors:!1,allErrors:!1},o),r.failResult(o,()=>r.reset(),()=>r.error())},error:{message:"must NOT be valid"}};return vi.default=t,vi}var wi={},uc;function xm(){if(uc)return wi;uc=1,Object.defineProperty(wi,"__esModule",{value:!0});const t={keyword:"anyOf",schemaType:"array",trackErrors:!0,code:vt().validateUnion,error:{message:"must match a schema in anyOf"}};return wi.default=t,wi}var _i={},hc;function Sm(){if(hc)return _i;hc=1,Object.defineProperty(_i,"__esModule",{value:!0});const e=ee(),t=le(),s={keyword:"oneOf",schemaType:"array",trackErrors:!0,error:{message:"must match exactly one schema in oneOf",params:({params:i})=>(0,e._)`{passingSchemas: ${i.passing}}`},code(i){const{gen:n,schema:o,parentSchema:a,it:l}=i;if(!Array.isArray(o))throw new Error("ajv implementation error");if(l.opts.discriminator&&a.discriminator)return;const c=o,d=n.let("valid",!1),p=n.let("passing",null),u=n.name("_valid");i.setParams({passing:p}),n.block(h),i.result(d,()=>i.reset(),()=>i.error(!0));function h(){c.forEach((y,g)=>{let f;(0,t.alwaysValidSchema)(l,y)?n.var(u,!0):f=i.subschema({keyword:"oneOf",schemaProp:g,compositeRule:!0},u),g>0&&n.if((0,e._)`${u} && ${d}`).assign(d,!1).assign(p,(0,e._)`[${p}, ${g}]`).else(),n.if(u,()=>{n.assign(d,!0),n.assign(p,g),f&&i.mergeEvaluated(f,e.Name)})})}}};return _i.default=s,_i}var $i={},pc;function Cm(){if(pc)return $i;pc=1,Object.defineProperty($i,"__esModule",{value:!0});const e=le(),t={keyword:"allOf",schemaType:"array",code(r){const{gen:s,schema:i,it:n}=r;if(!Array.isArray(i))throw new Error("ajv implementation error");const o=s.name("valid");i.forEach((a,l)=>{if((0,e.alwaysValidSchema)(n,a))return;const c=r.subschema({keyword:"allOf",schemaProp:l},o);r.ok(o),r.mergeEvaluated(c)})}};return $i.default=t,$i}var ki={},fc;function Em(){if(fc)return ki;fc=1,Object.defineProperty(ki,"__esModule",{value:!0});const e=ee(),t=le(),s={keyword:"if",schemaType:["object","boolean"],trackErrors:!0,error:{message:({params:n})=>(0,e.str)`must match "${n.ifClause}" schema`,params:({params:n})=>(0,e._)`{failingKeyword: ${n.ifClause}}`},code(n){const{gen:o,parentSchema:a,it:l}=n;a.then===void 0&&a.else===void 0&&(0,t.checkStrictMode)(l,'"if" without "then" and "else" is ignored');const c=i(l,"then"),d=i(l,"else");if(!c&&!d)return;const p=o.let("valid",!0),u=o.name("_valid");if(h(),n.reset(),c&&d){const g=o.let("ifClause");n.setParams({ifClause:g}),o.if(u,y("then",g),y("else",g))}else c?o.if(u,y("then")):o.if((0,e.not)(u),y("else"));n.pass(p,()=>n.error(!0));function h(){const g=n.subschema({keyword:"if",compositeRule:!0,createErrors:!1,allErrors:!1},u);n.mergeEvaluated(g)}function y(g,f){return()=>{const w=n.subschema({keyword:g},u);o.assign(p,u),n.mergeValidEvaluated(w,p),f?o.assign(f,(0,e._)`${g}`):n.setParams({ifClause:g})}}}};function i(n,o){const a=n.schema[o];return a!==void 0&&!(0,t.alwaysValidSchema)(n,a)}return ki.default=s,ki}var xi={},mc;function Am(){if(mc)return xi;mc=1,Object.defineProperty(xi,"__esModule",{value:!0});const e=le(),t={keyword:["then","else"],schemaType:["object","boolean"],code({keyword:r,parentSchema:s,it:i}){s.if===void 0&&(0,e.checkStrictMode)(i,`"${r}" without "if" is ignored`)}};return xi.default=t,xi}var gc;function Yd(){if(gc)return ui;gc=1,Object.defineProperty(ui,"__esModule",{value:!0});const e=Kd(),t=ym(),r=Wd(),s=bm(),i=vm(),n=da(),o=wm(),a=Gd(),l=_m(),c=$m(),d=km(),p=xm(),u=Sm(),h=Cm(),y=Em(),g=Am();function f(w=!1){const m=[d.default,p.default,u.default,h.default,y.default,g.default,o.default,a.default,n.default,l.default,c.default];return w?m.push(t.default,s.default):m.push(e.default,r.default),m.push(i.default),m}return ui.default=f,ui}var Si={},vr={},yc;function Jd(){if(yc)return vr;yc=1,Object.defineProperty(vr,"__esModule",{value:!0}),vr.dynamicAnchor=void 0;const e=ee(),t=bt(),r=Tn(),s=la(),i={keyword:"$dynamicAnchor",schemaType:"string",code:a=>n(a,a.schema)};function n(a,l){const{gen:c,it:d}=a;d.schemaEnv.root.dynamicAnchors[l]=!0;const p=(0,e._)`${t.default.dynamicAnchors}${(0,e.getProperty)(l)}`,u=d.errSchemaPath==="#"?d.validateName:o(a);c.if((0,e._)`!${p}`,()=>c.assign(p,u))}vr.dynamicAnchor=n;function o(a){const{schemaEnv:l,schema:c,self:d}=a.it,{root:p,baseId:u,localRefs:h,meta:y}=l.root,{schemaId:g}=d.opts,f=new r.SchemaEnv({schema:c,schemaId:g,root:p,baseId:u,localRefs:h,meta:y});return r.compileSchema.call(d,f),(0,s.getValidate)(a,f)}return vr.default=i,vr}var wr={},bc;function Xd(){if(bc)return wr;bc=1,Object.defineProperty(wr,"__esModule",{value:!0}),wr.dynamicRef=void 0;const e=ee(),t=bt(),r=la(),s={keyword:"$dynamicRef",schemaType:"string",code:n=>i(n,n.schema)};function i(n,o){const{gen:a,keyword:l,it:c}=n;if(o[0]!=="#")throw new Error(`"${l}" only supports hash fragment reference`);const d=o.slice(1);if(c.allErrors)p();else{const h=a.let("valid",!1);p(h),n.ok(h)}function p(h){if(c.schemaEnv.root.dynamicAnchors[d]){const y=a.let("_v",(0,e._)`${t.default.dynamicAnchors}${(0,e.getProperty)(d)}`);a.if(y,u(y,h),u(c.validateName,h))}else u(c.validateName,h)()}function u(h,y){return y?()=>a.block(()=>{(0,r.callRef)(n,h),a.let(y,!0)}):()=>(0,r.callRef)(n,h)}}return wr.dynamicRef=i,wr.default=s,wr}var Ci={},vc;function Tm(){if(vc)return Ci;vc=1,Object.defineProperty(Ci,"__esModule",{value:!0});const e=Jd(),t=le(),r={keyword:"$recursiveAnchor",schemaType:"boolean",code(s){s.schema?(0,e.dynamicAnchor)(s,""):(0,t.checkStrictMode)(s.it,"$recursiveAnchor: false is ignored")}};return Ci.default=r,Ci}var Ei={},wc;function Pm(){if(wc)return Ei;wc=1,Object.defineProperty(Ei,"__esModule",{value:!0});const e=Xd(),t={keyword:"$recursiveRef",schemaType:"string",code:r=>(0,e.dynamicRef)(r,r.schema)};return Ei.default=t,Ei}var _c;function Om(){if(_c)return Si;_c=1,Object.defineProperty(Si,"__esModule",{value:!0});const e=Jd(),t=Xd(),r=Tm(),s=Pm(),i=[e.default,t.default,r.default,s.default];return Si.default=i,Si}var Ai={},Ti={},$c;function Im(){if($c)return Ti;$c=1,Object.defineProperty(Ti,"__esModule",{value:!0});const e=da(),t={keyword:"dependentRequired",type:"object",schemaType:"object",error:e.error,code:r=>(0,e.validatePropertyDeps)(r)};return Ti.default=t,Ti}var Pi={},kc;function Rm(){if(kc)return Pi;kc=1,Object.defineProperty(Pi,"__esModule",{value:!0});const e=da(),t={keyword:"dependentSchemas",type:"object",schemaType:"object",code:r=>(0,e.validateSchemaDeps)(r)};return Pi.default=t,Pi}var Oi={},xc;function Nm(){if(xc)return Oi;xc=1,Object.defineProperty(Oi,"__esModule",{value:!0});const e=le(),t={keyword:["maxContains","minContains"],type:"array",schemaType:"number",code({keyword:r,parentSchema:s,it:i}){s.contains===void 0&&(0,e.checkStrictMode)(i,`"${r}" without "contains" is ignored`)}};return Oi.default=t,Oi}var Sc;function Dm(){if(Sc)return Ai;Sc=1,Object.defineProperty(Ai,"__esModule",{value:!0});const e=Im(),t=Rm(),r=Nm(),s=[e.default,t.default,r.default];return Ai.default=s,Ai}var Ii={},Ri={},Cc;function Lm(){if(Cc)return Ri;Cc=1,Object.defineProperty(Ri,"__esModule",{value:!0});const e=ee(),t=le(),r=bt(),i={keyword:"unevaluatedProperties",type:"object",schemaType:["boolean","object"],trackErrors:!0,error:{message:"must NOT have unevaluated properties",params:({params:n})=>(0,e._)`{unevaluatedProperty: ${n.unevaluatedProperty}}`},code(n){const{gen:o,schema:a,data:l,errsCount:c,it:d}=n;if(!c)throw new Error("ajv implementation error");const{allErrors:p,props:u}=d;u instanceof e.Name?o.if((0,e._)`${u} !== true`,()=>o.forIn("key",l,f=>o.if(y(u,f),()=>h(f)))):u!==!0&&o.forIn("key",l,f=>u===void 0?h(f):o.if(g(u,f),()=>h(f))),d.props=!0,n.ok((0,e._)`${c} === ${r.default.errors}`);function h(f){if(a===!1){n.setParams({unevaluatedProperty:f}),n.error(),p||o.break();return}if(!(0,t.alwaysValidSchema)(d,a)){const w=o.name("valid");n.subschema({keyword:"unevaluatedProperties",dataProp:f,dataPropType:t.Type.Str},w),p||o.if((0,e.not)(w),()=>o.break())}}function y(f,w){return(0,e._)`!${f} || !${f}[${w}]`}function g(f,w){const m=[];for(const v in f)f[v]===!0&&m.push((0,e._)`${w} !== ${v}`);return(0,e.and)(...m)}}};return Ri.default=i,Ri}var Ni={},Ec;function zm(){if(Ec)return Ni;Ec=1,Object.defineProperty(Ni,"__esModule",{value:!0});const e=ee(),t=le(),s={keyword:"unevaluatedItems",type:"array",schemaType:["boolean","object"],error:{message:({params:{len:i}})=>(0,e.str)`must NOT have more than ${i} items`,params:({params:{len:i}})=>(0,e._)`{limit: ${i}}`},code(i){const{gen:n,schema:o,data:a,it:l}=i,c=l.items||0;if(c===!0)return;const d=n.const("len",(0,e._)`${a}.length`);if(o===!1)i.setParams({len:c}),i.fail((0,e._)`${d} > ${c}`);else if(typeof o=="object"&&!(0,t.alwaysValidSchema)(l,o)){const u=n.var("valid",(0,e._)`${d} <= ${c}`);n.if((0,e.not)(u),()=>p(u,c)),i.ok(u)}l.items=!0;function p(u,h){n.forRange("i",h,d,y=>{i.subschema({keyword:"unevaluatedItems",dataProp:y,dataPropType:t.Type.Num},u),l.allErrors||n.if((0,e.not)(u),()=>n.break())})}}};return Ni.default=s,Ni}var Ac;function jm(){if(Ac)return Ii;Ac=1,Object.defineProperty(Ii,"__esModule",{value:!0});const e=Lm(),t=zm(),r=[e.default,t.default];return Ii.default=r,Ii}var Di={},Li={},Tc;function Mm(){if(Tc)return Li;Tc=1,Object.defineProperty(Li,"__esModule",{value:!0});const e=ee(),r={keyword:"format",type:["number","string"],schemaType:"string",$data:!0,error:{message:({schemaCode:s})=>(0,e.str)`must match format "${s}"`,params:({schemaCode:s})=>(0,e._)`{format: ${s}}`},code(s,i){const{gen:n,data:o,$data:a,schema:l,schemaCode:c,it:d}=s,{opts:p,errSchemaPath:u,schemaEnv:h,self:y}=d;if(!p.validateFormats)return;a?g():f();function g(){const w=n.scopeValue("formats",{ref:y.formats,code:p.code.formats}),m=n.const("fDef",(0,e._)`${w}[${c}]`),v=n.let("fType"),$=n.let("format");n.if((0,e._)`typeof ${m} == "object" && !(${m} instanceof RegExp)`,()=>n.assign(v,(0,e._)`${m}.type || "string"`).assign($,(0,e._)`${m}.validate`),()=>n.assign(v,(0,e._)`"string"`).assign($,m)),s.fail$data((0,e.or)(b(),_()));function b(){return p.strictSchema===!1?e.nil:(0,e._)`${c} && !${$}`}function _(){const S=h.$async?(0,e._)`(${m}.async ? await ${$}(${o}) : ${$}(${o}))`:(0,e._)`${$}(${o})`,C=(0,e._)`(typeof ${$} == "function" ? ${S} : ${$}.test(${o}))`;return(0,e._)`${$} && ${$} !== true && ${v} === ${i} && !${C}`}}function f(){const w=y.formats[l];if(!w){b();return}if(w===!0)return;const[m,v,$]=_(w);m===i&&s.pass(S());function b(){if(p.strictSchema===!1){y.logger.warn(C());return}throw new Error(C());function C(){return`unknown format "${l}" ignored in schema at path "${u}"`}}function _(C){const O=C instanceof RegExp?(0,e.regexpCode)(C):p.code.formats?(0,e._)`${p.code.formats}${(0,e.getProperty)(l)}`:void 0,M=n.scopeValue("formats",{key:l,ref:C,code:O});return typeof C=="object"&&!(C instanceof RegExp)?[C.type||"string",C.validate,(0,e._)`${M}.validate`]:["string",C,M]}function S(){if(typeof w=="object"&&!(w instanceof RegExp)&&w.async){if(!h.$async)throw new Error("async format in sync schema");return(0,e._)`await ${$}(${o})`}return typeof v=="function"?(0,e._)`${$}(${o})`:(0,e._)`${$}.test(${o})`}}}};return Li.default=r,Li}var Pc;function Qd(){if(Pc)return Di;Pc=1,Object.defineProperty(Di,"__esModule",{value:!0});const t=[Mm().default];return Di.default=t,Di}var Qt={},Oc;function Zd(){return Oc||(Oc=1,Object.defineProperty(Qt,"__esModule",{value:!0}),Qt.contentVocabulary=Qt.metadataVocabulary=void 0,Qt.metadataVocabulary=["title","description","default","deprecated","readOnly","writeOnly","examples"],Qt.contentVocabulary=["contentMediaType","contentEncoding","contentSchema"]),Qt}var Ic;function qm(){if(Ic)return Ys;Ic=1,Object.defineProperty(Ys,"__esModule",{value:!0});const e=Ud(),t=Hd(),r=Yd(),s=Om(),i=Dm(),n=jm(),o=Qd(),a=Zd(),l=[s.default,e.default,t.default,(0,r.default)(!0),o.default,a.metadataVocabulary,a.contentVocabulary,i.default,n.default];return Ys.default=l,Ys}var zi={},ns={},Rc;function Fm(){if(Rc)return ns;Rc=1,Object.defineProperty(ns,"__esModule",{value:!0}),ns.DiscrError=void 0;var e;return(function(t){t.Tag="tag",t.Mapping="mapping"})(e||(ns.DiscrError=e={})),ns}var Nc;function eu(){if(Nc)return zi;Nc=1,Object.defineProperty(zi,"__esModule",{value:!0});const e=ee(),t=Fm(),r=Tn(),s=Os(),i=le(),o={keyword:"discriminator",type:"object",schemaType:"object",error:{message:({params:{discrError:a,tagName:l}})=>a===t.DiscrError.Tag?`tag "${l}" must be string`:`value of tag "${l}" must be in oneOf`,params:({params:{discrError:a,tag:l,tagName:c}})=>(0,e._)`{error: ${a}, tag: ${c}, tagValue: ${l}}`},code(a){const{gen:l,data:c,schema:d,parentSchema:p,it:u}=a,{oneOf:h}=p;if(!u.opts.discriminator)throw new Error("discriminator: requires discriminator option");const y=d.propertyName;if(typeof y!="string")throw new Error("discriminator: requires propertyName");if(d.mapping)throw new Error("discriminator: mapping is not supported");if(!h)throw new Error("discriminator: requires oneOf keyword");const g=l.let("valid",!1),f=l.const("tag",(0,e._)`${c}${(0,e.getProperty)(y)}`);l.if((0,e._)`typeof ${f} == "string"`,()=>w(),()=>a.error(!1,{discrError:t.DiscrError.Tag,tag:f,tagName:y})),a.ok(g);function w(){const $=v();l.if(!1);for(const b in $)l.elseIf((0,e._)`${f} === ${b}`),l.assign(g,m($[b]));l.else(),a.error(!1,{discrError:t.DiscrError.Mapping,tag:f,tagName:y}),l.endIf()}function m($){const b=l.name("valid"),_=a.subschema({keyword:"oneOf",schemaProp:$},b);return a.mergeEvaluated(_,e.Name),b}function v(){var $;const b={},_=C(p);let S=!0;for(let D=0;D<h.length;D++){let z=h[D];if(z?.$ref&&!(0,i.schemaHasRulesButRef)(z,u.self.RULES)){const V=z.$ref;if(z=r.resolveRef.call(u.self,u.schemaEnv.root,u.baseId,V),z instanceof r.SchemaEnv&&(z=z.schema),z===void 0)throw new s.default(u.opts.uriResolver,u.baseId,V)}const B=($=z?.properties)===null||$===void 0?void 0:$[y];if(typeof B!="object")throw new Error(`discriminator: oneOf subschemas (or referenced schemas) must have "properties/${y}"`);S=S&&(_||C(z)),O(B,D)}if(!S)throw new Error(`discriminator: "${y}" must be required`);return b;function C({required:D}){return Array.isArray(D)&&D.includes(y)}function O(D,z){if(D.const)M(D.const,z);else if(D.enum)for(const B of D.enum)M(B,z);else throw new Error(`discriminator: "properties/${y}" must have "const" or "enum"`)}function M(D,z){if(typeof D!="string"||D in b)throw new Error(`discriminator: "${y}" values must be unique strings`);b[D]=z}}}};return zi.default=o,zi}var ji={};const Vm="https://json-schema.org/draft/2020-12/schema",Bm="https://json-schema.org/draft/2020-12/schema",Um={"https://json-schema.org/draft/2020-12/vocab/core":!0,"https://json-schema.org/draft/2020-12/vocab/applicator":!0,"https://json-schema.org/draft/2020-12/vocab/unevaluated":!0,"https://json-schema.org/draft/2020-12/vocab/validation":!0,"https://json-schema.org/draft/2020-12/vocab/meta-data":!0,"https://json-schema.org/draft/2020-12/vocab/format-annotation":!0,"https://json-schema.org/draft/2020-12/vocab/content":!0},Hm="meta",Km="Core and Validation specifications meta-schema",Wm=[{$ref:"meta/core"},{$ref:"meta/applicator"},{$ref:"meta/unevaluated"},{$ref:"meta/validation"},{$ref:"meta/meta-data"},{$ref:"meta/format-annotation"},{$ref:"meta/content"}],Gm=["object","boolean"],Ym="This meta-schema also defines keywords that have appeared in previous drafts in order to prevent incompatible extensions as they remain in common use.",Jm={definitions:{$comment:'"definitions" has been replaced by "$defs".',type:"object",additionalProperties:{$dynamicRef:"#meta"},deprecated:!0,default:{}},dependencies:{$comment:'"dependencies" has been split and replaced by "dependentSchemas" and "dependentRequired" in order to serve their differing semantics.',type:"object",additionalProperties:{anyOf:[{$dynamicRef:"#meta"},{$ref:"meta/validation#/$defs/stringArray"}]},deprecated:!0,default:{}},$recursiveAnchor:{$comment:'"$recursiveAnchor" has been replaced by "$dynamicAnchor".',$ref:"meta/core#/$defs/anchorString",deprecated:!0},$recursiveRef:{$comment:'"$recursiveRef" has been replaced by "$dynamicRef".',$ref:"meta/core#/$defs/uriReferenceString",deprecated:!0}},Xm={$schema:Vm,$id:Bm,$vocabulary:Um,$dynamicAnchor:Hm,title:Km,allOf:Wm,type:Gm,$comment:Ym,properties:Jm},Qm="https://json-schema.org/draft/2020-12/schema",Zm="https://json-schema.org/draft/2020-12/meta/applicator",eg={"https://json-schema.org/draft/2020-12/vocab/applicator":!0},tg="meta",rg="Applicator vocabulary meta-schema",sg=["object","boolean"],ig={prefixItems:{$ref:"#/$defs/schemaArray"},items:{$dynamicRef:"#meta"},contains:{$dynamicRef:"#meta"},additionalProperties:{$dynamicRef:"#meta"},properties:{type:"object",additionalProperties:{$dynamicRef:"#meta"},default:{}},patternProperties:{type:"object",additionalProperties:{$dynamicRef:"#meta"},propertyNames:{format:"regex"},default:{}},dependentSchemas:{type:"object",additionalProperties:{$dynamicRef:"#meta"},default:{}},propertyNames:{$dynamicRef:"#meta"},if:{$dynamicRef:"#meta"},then:{$dynamicRef:"#meta"},else:{$dynamicRef:"#meta"},allOf:{$ref:"#/$defs/schemaArray"},anyOf:{$ref:"#/$defs/schemaArray"},oneOf:{$ref:"#/$defs/schemaArray"},not:{$dynamicRef:"#meta"}},ng={schemaArray:{type:"array",minItems:1,items:{$dynamicRef:"#meta"}}},og={$schema:Qm,$id:Zm,$vocabulary:eg,$dynamicAnchor:tg,title:rg,type:sg,properties:ig,$defs:ng},ag="https://json-schema.org/draft/2020-12/schema",lg="https://json-schema.org/draft/2020-12/meta/unevaluated",cg={"https://json-schema.org/draft/2020-12/vocab/unevaluated":!0},dg="meta",ug="Unevaluated applicator vocabulary meta-schema",hg=["object","boolean"],pg={unevaluatedItems:{$dynamicRef:"#meta"},unevaluatedProperties:{$dynamicRef:"#meta"}},fg={$schema:ag,$id:lg,$vocabulary:cg,$dynamicAnchor:dg,title:ug,type:hg,properties:pg},mg="https://json-schema.org/draft/2020-12/schema",gg="https://json-schema.org/draft/2020-12/meta/content",yg={"https://json-schema.org/draft/2020-12/vocab/content":!0},bg="meta",vg="Content vocabulary meta-schema",wg=["object","boolean"],_g={contentEncoding:{type:"string"},contentMediaType:{type:"string"},contentSchema:{$dynamicRef:"#meta"}},$g={$schema:mg,$id:gg,$vocabulary:yg,$dynamicAnchor:bg,title:vg,type:wg,properties:_g},kg="https://json-schema.org/draft/2020-12/schema",xg="https://json-schema.org/draft/2020-12/meta/core",Sg={"https://json-schema.org/draft/2020-12/vocab/core":!0},Cg="meta",Eg="Core vocabulary meta-schema",Ag=["object","boolean"],Tg={$id:{$ref:"#/$defs/uriReferenceString",$comment:"Non-empty fragments not allowed.",pattern:"^[^#]*#?$"},$schema:{$ref:"#/$defs/uriString"},$ref:{$ref:"#/$defs/uriReferenceString"},$anchor:{$ref:"#/$defs/anchorString"},$dynamicRef:{$ref:"#/$defs/uriReferenceString"},$dynamicAnchor:{$ref:"#/$defs/anchorString"},$vocabulary:{type:"object",propertyNames:{$ref:"#/$defs/uriString"},additionalProperties:{type:"boolean"}},$comment:{type:"string"},$defs:{type:"object",additionalProperties:{$dynamicRef:"#meta"}}},Pg={anchorString:{type:"string",pattern:"^[A-Za-z_][-A-Za-z0-9._]*$"},uriString:{type:"string",format:"uri"},uriReferenceString:{type:"string",format:"uri-reference"}},Og={$schema:kg,$id:xg,$vocabulary:Sg,$dynamicAnchor:Cg,title:Eg,type:Ag,properties:Tg,$defs:Pg},Ig="https://json-schema.org/draft/2020-12/schema",Rg="https://json-schema.org/draft/2020-12/meta/format-annotation",Ng={"https://json-schema.org/draft/2020-12/vocab/format-annotation":!0},Dg="meta",Lg="Format vocabulary meta-schema for annotation results",zg=["object","boolean"],jg={format:{type:"string"}},Mg={$schema:Ig,$id:Rg,$vocabulary:Ng,$dynamicAnchor:Dg,title:Lg,type:zg,properties:jg},qg="https://json-schema.org/draft/2020-12/schema",Fg="https://json-schema.org/draft/2020-12/meta/meta-data",Vg={"https://json-schema.org/draft/2020-12/vocab/meta-data":!0},Bg="meta",Ug="Meta-data vocabulary meta-schema",Hg=["object","boolean"],Kg={title:{type:"string"},description:{type:"string"},default:!0,deprecated:{type:"boolean",default:!1},readOnly:{type:"boolean",default:!1},writeOnly:{type:"boolean",default:!1},examples:{type:"array",items:!0}},Wg={$schema:qg,$id:Fg,$vocabulary:Vg,$dynamicAnchor:Bg,title:Ug,type:Hg,properties:Kg},Gg="https://json-schema.org/draft/2020-12/schema",Yg="https://json-schema.org/draft/2020-12/meta/validation",Jg={"https://json-schema.org/draft/2020-12/vocab/validation":!0},Xg="meta",Qg="Validation vocabulary meta-schema",Zg=["object","boolean"],ey={type:{anyOf:[{$ref:"#/$defs/simpleTypes"},{type:"array",items:{$ref:"#/$defs/simpleTypes"},minItems:1,uniqueItems:!0}]},const:!0,enum:{type:"array",items:!0},multipleOf:{type:"number",exclusiveMinimum:0},maximum:{type:"number"},exclusiveMaximum:{type:"number"},minimum:{type:"number"},exclusiveMinimum:{type:"number"},maxLength:{$ref:"#/$defs/nonNegativeInteger"},minLength:{$ref:"#/$defs/nonNegativeIntegerDefault0"},pattern:{type:"string",format:"regex"},maxItems:{$ref:"#/$defs/nonNegativeInteger"},minItems:{$ref:"#/$defs/nonNegativeIntegerDefault0"},uniqueItems:{type:"boolean",default:!1},maxContains:{$ref:"#/$defs/nonNegativeInteger"},minContains:{$ref:"#/$defs/nonNegativeInteger",default:1},maxProperties:{$ref:"#/$defs/nonNegativeInteger"},minProperties:{$ref:"#/$defs/nonNegativeIntegerDefault0"},required:{$ref:"#/$defs/stringArray"},dependentRequired:{type:"object",additionalProperties:{$ref:"#/$defs/stringArray"}}},ty={nonNegativeInteger:{type:"integer",minimum:0},nonNegativeIntegerDefault0:{$ref:"#/$defs/nonNegativeInteger",default:0},simpleTypes:{enum:["array","boolean","integer","null","number","object","string"]},stringArray:{type:"array",items:{type:"string"},uniqueItems:!0,default:[]}},ry={$schema:Gg,$id:Yg,$vocabulary:Jg,$dynamicAnchor:Xg,title:Qg,type:Zg,properties:ey,$defs:ty};var Dc;function sy(){if(Dc)return ji;Dc=1,Object.defineProperty(ji,"__esModule",{value:!0});const e=Xm,t=og,r=fg,s=$g,i=Og,n=Mg,o=Wg,a=ry,l=["/properties"];function c(d){return[e,t,r,s,i,p(this,n),o,p(this,a)].forEach(u=>this.addMetaSchema(u,void 0,!1)),this;function p(u,h){return d?u.$dataMetaSchema(h,l):h}}return ji.default=c,ji}var Lc;function iy(){return Lc||(Lc=1,(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.MissingRefError=t.ValidationError=t.CodeGen=t.Name=t.nil=t.stringify=t.str=t._=t.KeywordCxt=t.Ajv2020=void 0;const r=Bd(),s=qm(),i=eu(),n=sy(),o="https://json-schema.org/draft/2020-12/schema";class a extends r.default{constructor(h={}){super({...h,dynamicRef:!0,next:!0,unevaluated:!0})}_addVocabularies(){super._addVocabularies(),s.default.forEach(h=>this.addVocabulary(h)),this.opts.discriminator&&this.addKeyword(i.default)}_addDefaultMetaSchema(){super._addDefaultMetaSchema();const{$data:h,meta:y}=this.opts;y&&(n.default.call(this,h),this.refs["http://json-schema.org/schema"]=o)}defaultMeta(){return this.opts.defaultMeta=super.defaultMeta()||(this.getSchema(o)?o:void 0)}}t.Ajv2020=a,e.exports=t=a,e.exports.Ajv2020=a,Object.defineProperty(t,"__esModule",{value:!0}),t.default=a;var l=Ps();Object.defineProperty(t,"KeywordCxt",{enumerable:!0,get:function(){return l.KeywordCxt}});var c=ee();Object.defineProperty(t,"_",{enumerable:!0,get:function(){return c._}}),Object.defineProperty(t,"str",{enumerable:!0,get:function(){return c.str}}),Object.defineProperty(t,"stringify",{enumerable:!0,get:function(){return c.stringify}}),Object.defineProperty(t,"nil",{enumerable:!0,get:function(){return c.nil}}),Object.defineProperty(t,"Name",{enumerable:!0,get:function(){return c.Name}}),Object.defineProperty(t,"CodeGen",{enumerable:!0,get:function(){return c.CodeGen}});var d=An();Object.defineProperty(t,"ValidationError",{enumerable:!0,get:function(){return d.default}});var p=Os();Object.defineProperty(t,"MissingRefError",{enumerable:!0,get:function(){return p.default}})})(Us,Us.exports)),Us.exports}var ny=iy();const oy=jd(ny);var Mi={exports:{}},lo={},zc;function ay(){return zc||(zc=1,(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.formatNames=e.fastFormats=e.fullFormats=void 0;function t(D,z){return{validate:D,compare:z}}e.fullFormats={date:t(n,o),time:t(l(!0),c),"date-time":t(u(!0),h),"iso-time":t(l(),d),"iso-date-time":t(u(),y),duration:/^P(?!$)((\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+S)?)?|(\d+W)?)$/,uri:w,"uri-reference":/^(?:[a-z][a-z0-9+\-.]*:)?(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'"()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?(?:\?(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i,"uri-template":/^(?:(?:[^\x00-\x20"'<>%\\^`{|}]|%[0-9a-f]{2})|\{[+#./;?&=,!@|]?(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?(?:,(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?)*\})*$/i,url:/^(?:https?|ftp):\/\/(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u{00a1}-\u{ffff}]+-)*[a-z0-9\u{00a1}-\u{ffff}]+)(?:\.(?:[a-z0-9\u{00a1}-\u{ffff}]+-)*[a-z0-9\u{00a1}-\u{ffff}]+)*(?:\.(?:[a-z\u{00a1}-\u{ffff}]{2,})))(?::\d{2,5})?(?:\/[^\s]*)?$/iu,email:/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i,hostname:/^(?=.{1,253}\.?$)[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[-0-9a-z]{0,61}[0-9a-z])?)*\.?$/i,ipv4:/^(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)$/,ipv6:/^((([0-9a-f]{1,4}:){7}([0-9a-f]{1,4}|:))|(([0-9a-f]{1,4}:){6}(:[0-9a-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9a-f]{1,4}:){5}(((:[0-9a-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9a-f]{1,4}:){4}(((:[0-9a-f]{1,4}){1,3})|((:[0-9a-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){3}(((:[0-9a-f]{1,4}){1,4})|((:[0-9a-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){2}(((:[0-9a-f]{1,4}){1,5})|((:[0-9a-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){1}(((:[0-9a-f]{1,4}){1,6})|((:[0-9a-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9a-f]{1,4}){1,7})|((:[0-9a-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))$/i,regex:M,uuid:/^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i,"json-pointer":/^(?:\/(?:[^~/]|~0|~1)*)*$/,"json-pointer-uri-fragment":/^#(?:\/(?:[a-z0-9_\-.!$&'()*+,;:=@]|%[0-9a-f]{2}|~0|~1)*)*$/i,"relative-json-pointer":/^(?:0|[1-9][0-9]*)(?:#|(?:\/(?:[^~/]|~0|~1)*)*)$/,byte:v,int32:{type:"number",validate:_},int64:{type:"number",validate:S},float:{type:"number",validate:C},double:{type:"number",validate:C},password:!0,binary:!0},e.fastFormats={...e.fullFormats,date:t(/^\d\d\d\d-[0-1]\d-[0-3]\d$/,o),time:t(/^(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)$/i,c),"date-time":t(/^\d\d\d\d-[0-1]\d-[0-3]\dt(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)$/i,h),"iso-time":t(/^(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)?$/i,d),"iso-date-time":t(/^\d\d\d\d-[0-1]\d-[0-3]\d[t\s](?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)?$/i,y),uri:/^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/)?[^\s]*$/i,"uri-reference":/^(?:(?:[a-z][a-z0-9+\-.]*:)?\/?\/)?(?:[^\\\s#][^\s#]*)?(?:#[^\\\s]*)?$/i,email:/^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)*$/i},e.formatNames=Object.keys(e.fullFormats);function r(D){return D%4===0&&(D%100!==0||D%400===0)}const s=/^(\d\d\d\d)-(\d\d)-(\d\d)$/,i=[0,31,28,31,30,31,30,31,31,30,31,30,31];function n(D){const z=s.exec(D);if(!z)return!1;const B=+z[1],V=+z[2],X=+z[3];return V>=1&&V<=12&&X>=1&&X<=(V===2&&r(B)?29:i[V])}function o(D,z){if(D&&z)return D>z?1:D<z?-1:0}const a=/^(\d\d):(\d\d):(\d\d(?:\.\d+)?)(z|([+-])(\d\d)(?::?(\d\d))?)?$/i;function l(D){return function(B){const V=a.exec(B);if(!V)return!1;const X=+V[1],ae=+V[2],Z=+V[3],J=V[4],fe=V[5]==="-"?-1:1,F=+(V[6]||0),P=+(V[7]||0);if(F>23||P>59||D&&!J)return!1;if(X<=23&&ae<=59&&Z<60)return!0;const j=ae-P*fe,I=X-F*fe-(j<0?1:0);return(I===23||I===-1)&&(j===59||j===-1)&&Z<61}}function c(D,z){if(!(D&&z))return;const B=new Date("2020-01-01T"+D).valueOf(),V=new Date("2020-01-01T"+z).valueOf();if(B&&V)return B-V}function d(D,z){if(!(D&&z))return;const B=a.exec(D),V=a.exec(z);if(B&&V)return D=B[1]+B[2]+B[3],z=V[1]+V[2]+V[3],D>z?1:D<z?-1:0}const p=/t|\s/i;function u(D){const z=l(D);return function(V){const X=V.split(p);return X.length===2&&n(X[0])&&z(X[1])}}function h(D,z){if(!(D&&z))return;const B=new Date(D).valueOf(),V=new Date(z).valueOf();if(B&&V)return B-V}function y(D,z){if(!(D&&z))return;const[B,V]=D.split(p),[X,ae]=z.split(p),Z=o(B,X);if(Z!==void 0)return Z||c(V,ae)}const g=/\/|:/,f=/^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)(?:\?(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i;function w(D){return g.test(D)&&f.test(D)}const m=/^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/gm;function v(D){return m.lastIndex=0,m.test(D)}const $=-2147483648,b=2**31-1;function _(D){return Number.isInteger(D)&&D<=b&&D>=$}function S(D){return Number.isInteger(D)}function C(){return!0}const O=/[^\\]\\Z/;function M(D){if(O.test(D))return!1;try{return new RegExp(D),!0}catch{return!1}}})(lo)),lo}var co={},qi={exports:{}},Fi={},jc;function ly(){if(jc)return Fi;jc=1,Object.defineProperty(Fi,"__esModule",{value:!0});const e=Ud(),t=Hd(),r=Yd(),s=Qd(),i=Zd(),n=[e.default,t.default,(0,r.default)(),s.default,i.metadataVocabulary,i.contentVocabulary];return Fi.default=n,Fi}const cy="http://json-schema.org/draft-07/schema#",dy="http://json-schema.org/draft-07/schema#",uy="Core schema meta-schema",hy={schemaArray:{type:"array",minItems:1,items:{$ref:"#"}},nonNegativeInteger:{type:"integer",minimum:0},nonNegativeIntegerDefault0:{allOf:[{$ref:"#/definitions/nonNegativeInteger"},{default:0}]},simpleTypes:{enum:["array","boolean","integer","null","number","object","string"]},stringArray:{type:"array",items:{type:"string"},uniqueItems:!0,default:[]}},py=["object","boolean"],fy={$id:{type:"string",format:"uri-reference"},$schema:{type:"string",format:"uri"},$ref:{type:"string",format:"uri-reference"},$comment:{type:"string"},title:{type:"string"},description:{type:"string"},default:!0,readOnly:{type:"boolean",default:!1},examples:{type:"array",items:!0},multipleOf:{type:"number",exclusiveMinimum:0},maximum:{type:"number"},exclusiveMaximum:{type:"number"},minimum:{type:"number"},exclusiveMinimum:{type:"number"},maxLength:{$ref:"#/definitions/nonNegativeInteger"},minLength:{$ref:"#/definitions/nonNegativeIntegerDefault0"},pattern:{type:"string",format:"regex"},additionalItems:{$ref:"#"},items:{anyOf:[{$ref:"#"},{$ref:"#/definitions/schemaArray"}],default:!0},maxItems:{$ref:"#/definitions/nonNegativeInteger"},minItems:{$ref:"#/definitions/nonNegativeIntegerDefault0"},uniqueItems:{type:"boolean",default:!1},contains:{$ref:"#"},maxProperties:{$ref:"#/definitions/nonNegativeInteger"},minProperties:{$ref:"#/definitions/nonNegativeIntegerDefault0"},required:{$ref:"#/definitions/stringArray"},additionalProperties:{$ref:"#"},definitions:{type:"object",additionalProperties:{$ref:"#"},default:{}},properties:{type:"object",additionalProperties:{$ref:"#"},default:{}},patternProperties:{type:"object",additionalProperties:{$ref:"#"},propertyNames:{format:"regex"},default:{}},dependencies:{type:"object",additionalProperties:{anyOf:[{$ref:"#"},{$ref:"#/definitions/stringArray"}]}},propertyNames:{$ref:"#"},const:!0,enum:{type:"array",items:!0,minItems:1,uniqueItems:!0},type:{anyOf:[{$ref:"#/definitions/simpleTypes"},{type:"array",items:{$ref:"#/definitions/simpleTypes"},minItems:1,uniqueItems:!0}]},format:{type:"string"},contentMediaType:{type:"string"},contentEncoding:{type:"string"},if:{$ref:"#"},then:{$ref:"#"},else:{$ref:"#"},allOf:{$ref:"#/definitions/schemaArray"},anyOf:{$ref:"#/definitions/schemaArray"},oneOf:{$ref:"#/definitions/schemaArray"},not:{$ref:"#"}},my={$schema:cy,$id:dy,title:uy,definitions:hy,type:py,properties:fy,default:!0};var Mc;function gy(){return Mc||(Mc=1,(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.MissingRefError=t.ValidationError=t.CodeGen=t.Name=t.nil=t.stringify=t.str=t._=t.KeywordCxt=t.Ajv=void 0;const r=Bd(),s=ly(),i=eu(),n=my,o=["/properties"],a="http://json-schema.org/draft-07/schema";class l extends r.default{_addVocabularies(){super._addVocabularies(),s.default.forEach(y=>this.addVocabulary(y)),this.opts.discriminator&&this.addKeyword(i.default)}_addDefaultMetaSchema(){if(super._addDefaultMetaSchema(),!this.opts.meta)return;const y=this.opts.$data?this.$dataMetaSchema(n,o):n;this.addMetaSchema(y,a,!1),this.refs["http://json-schema.org/schema"]=a}defaultMeta(){return this.opts.defaultMeta=super.defaultMeta()||(this.getSchema(a)?a:void 0)}}t.Ajv=l,e.exports=t=l,e.exports.Ajv=l,Object.defineProperty(t,"__esModule",{value:!0}),t.default=l;var c=Ps();Object.defineProperty(t,"KeywordCxt",{enumerable:!0,get:function(){return c.KeywordCxt}});var d=ee();Object.defineProperty(t,"_",{enumerable:!0,get:function(){return d._}}),Object.defineProperty(t,"str",{enumerable:!0,get:function(){return d.str}}),Object.defineProperty(t,"stringify",{enumerable:!0,get:function(){return d.stringify}}),Object.defineProperty(t,"nil",{enumerable:!0,get:function(){return d.nil}}),Object.defineProperty(t,"Name",{enumerable:!0,get:function(){return d.Name}}),Object.defineProperty(t,"CodeGen",{enumerable:!0,get:function(){return d.CodeGen}});var p=An();Object.defineProperty(t,"ValidationError",{enumerable:!0,get:function(){return p.default}});var u=Os();Object.defineProperty(t,"MissingRefError",{enumerable:!0,get:function(){return u.default}})})(qi,qi.exports)),qi.exports}var qc;function yy(){return qc||(qc=1,(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.formatLimitDefinition=void 0;const t=gy(),r=ee(),s=r.operators,i={formatMaximum:{okStr:"<=",ok:s.LTE,fail:s.GT},formatMinimum:{okStr:">=",ok:s.GTE,fail:s.LT},formatExclusiveMaximum:{okStr:"<",ok:s.LT,fail:s.GTE},formatExclusiveMinimum:{okStr:">",ok:s.GT,fail:s.LTE}},n={message:({keyword:a,schemaCode:l})=>(0,r.str)`should be ${i[a].okStr} ${l}`,params:({keyword:a,schemaCode:l})=>(0,r._)`{comparison: ${i[a].okStr}, limit: ${l}}`};e.formatLimitDefinition={keyword:Object.keys(i),type:"string",schemaType:"string",$data:!0,error:n,code(a){const{gen:l,data:c,schemaCode:d,keyword:p,it:u}=a,{opts:h,self:y}=u;if(!h.validateFormats)return;const g=new t.KeywordCxt(u,y.RULES.all.format.definition,"format");g.$data?f():w();function f(){const v=l.scopeValue("formats",{ref:y.formats,code:h.code.formats}),$=l.const("fmt",(0,r._)`${v}[${g.schemaCode}]`);a.fail$data((0,r.or)((0,r._)`typeof ${$} != "object"`,(0,r._)`${$} instanceof RegExp`,(0,r._)`typeof ${$}.compare != "function"`,m($)))}function w(){const v=g.schema,$=y.formats[v];if(!$||$===!0)return;if(typeof $!="object"||$ instanceof RegExp||typeof $.compare!="function")throw new Error(`"${p}": format "${v}" does not define "compare" function`);const b=l.scopeValue("formats",{key:v,ref:$,code:h.code.formats?(0,r._)`${h.code.formats}${(0,r.getProperty)(v)}`:void 0});a.fail$data(m(b))}function m(v){return(0,r._)`${v}.compare(${c}, ${d}) ${i[p].fail} 0`}},dependencies:["format"]};const o=a=>(a.addKeyword(e.formatLimitDefinition),a);e.default=o})(co)),co}var Fc;function by(){return Fc||(Fc=1,(function(e,t){Object.defineProperty(t,"__esModule",{value:!0});const r=ay(),s=yy(),i=ee(),n=new i.Name("fullFormats"),o=new i.Name("fastFormats"),a=(c,d={keywords:!0})=>{if(Array.isArray(d))return l(c,d,r.fullFormats,n),c;const[p,u]=d.mode==="fast"?[r.fastFormats,o]:[r.fullFormats,n],h=d.formats||r.formatNames;return l(c,h,p,u),d.keywords&&(0,s.default)(c),c};a.get=(c,d="full")=>{const u=(d==="fast"?r.fastFormats:r.fullFormats)[c];if(!u)throw new Error(`Unknown format "${c}"`);return u};function l(c,d,p,u){var h,y;(h=(y=c.opts.code).formats)!==null&&h!==void 0||(y.formats=(0,i._)`require("ajv-formats/dist/formats").${u}`);for(const g of d)c.addFormat(g,p[g])}e.exports=t=a,Object.defineProperty(t,"__esModule",{value:!0}),t.default=a})(Mi,Mi.exports)),Mi.exports}var vy=by();const wy=jd(vy),_y="https://json-schema.org/draft/2020-12/schema",$y="https://choria.io/schemas/ccm/v1/manifest.json",ky="CCM Manifest",xy="A CCM manifest file combining Hiera data and configuration management resources",Sy="object",Cy={data:{type:"object",description:"Base data section containing key-value pairs that can be referenced in resources using template expressions like {{ Data.key }}",additionalProperties:!0},ccm:{type:"object",description:"CCM configuration section containing resource definitions",properties:{pre_message:{type:"string",description:"Message to display before applying resources"},post_message:{type:"string",description:"Message to display after applying resources"},fail_on_error:{type:"boolean",description:"If true, stop processing resources when any resource fails. If false, continue processing remaining resources.",default:!1},resources_jet_file:{type:"string",description:"Path to a Jet template file that generates the resources list"},resources:{type:"array",description:"List of configuration management resources to apply",items:{$ref:"#/$defs/resource"}}},additionalProperties:!1},hierarchy:{$ref:"#/$defs/hierarchy"},overrides:{type:"object",description:"Override sections keyed by hierarchy order entries (e.g., 'os:debian'). Values in matching overrides will replace or merge with base data depending on the merge strategy.",additionalProperties:{type:"object",description:"Override data values for a specific hierarchy entry",additionalProperties:!0}}},Ey=!1,Ay=JSON.parse(`{"hierarchy":{"type":"object","description":"Describes how data sections should be resolved using Hiera-like lookups","properties":{"order":{"type":"array","description":"Lookup sequence for data sections. Entries can contain template expressions like {{ lookup('facts.host.info.platformFamily') }}","items":{"type":"string"}},"merge":{"type":"string","description":"Merge strategy for combining data from multiple hierarchy levels","enum":["first","deep"],"default":"first"}},"additionalProperties":false},"resource":{"type":"object","description":"A configuration management resource entry. Each entry should have exactly one resource type key.","properties":{"package":{"oneOf":[{"$ref":"#/$defs/packageResourceList"},{"$ref":"#/$defs/packageResourcePropertiesWithName"}]},"service":{"oneOf":[{"$ref":"#/$defs/serviceResourceList"},{"$ref":"#/$defs/serviceResourcePropertiesWithName"}]},"file":{"oneOf":[{"$ref":"#/$defs/fileResourceList"},{"$ref":"#/$defs/fileResourcePropertiesWithName"}]},"exec":{"oneOf":[{"$ref":"#/$defs/execResourceList"},{"$ref":"#/$defs/execResourcePropertiesWithName"}]},"archive":{"oneOf":[{"$ref":"#/$defs/archiveResourceList"},{"$ref":"#/$defs/archiveResourcePropertiesWithName"}]}},"minProperties":1,"maxProperties":1,"additionalProperties":false},"packageResourceList":{"type":"array","description":"List of package resources to manage (named format)","items":{"type":"object","description":"Package resource entry keyed by package name or template expression","additionalProperties":{"$ref":"#/$defs/packageResourceProperties"},"minProperties":1,"maxProperties":1}},"serviceResourceList":{"type":"array","description":"List of service resources to manage (named format)","items":{"type":"object","description":"Service resource entry keyed by service name or template expression","additionalProperties":{"$ref":"#/$defs/serviceResourceProperties"},"minProperties":1,"maxProperties":1}},"fileResourceList":{"type":"array","description":"List of file resources to manage (named format)","items":{"type":"object","description":"File resource entry keyed by absolute file path","additionalProperties":{"$ref":"#/$defs/fileResourceProperties"},"minProperties":1,"maxProperties":1}},"execResourceList":{"type":"array","description":"List of exec resources to manage (named format)","items":{"type":"object","description":"Exec resource entry keyed by command to execute","additionalProperties":{"$ref":"#/$defs/execResourceProperties"},"minProperties":1,"maxProperties":1}},"archiveResourceList":{"type":"array","description":"List of archive resources to manage (named format)","items":{"type":"object","description":"Archive resource entry keyed by absolute file path where the archive will be saved","additionalProperties":{"$ref":"#/$defs/archiveResourceProperties"},"minProperties":1,"maxProperties":1}},"packageResourcePropertiesWithName":{"type":"object","description":"Properties for a package resource (direct format with name)","properties":{"name":{"type":"string","description":"The package name"},"alias":{"type":"string","description":"An alternative name for the resource that can be used in require/subscribe references"},"ensure":{"type":"string","description":"Desired state of the package: 'present' to install, 'absent' to remove, 'latest' to upgrade to latest version, or a specific version string","examples":["present","absent","latest","1.2.3"]},"provider":{"type":"string","description":"Specific provider to use for managing this resource"},"health_checks":{"type":"array","description":"Health checks to run after applying the resource","items":{"$ref":"#/$defs/healthCheck"}},"require":{"type":"array","description":"List of resources that must be applied before this resource, in format 'type#name'","items":{"type":"string","pattern":"^[a-z]+#.+$"}},"control":{"$ref":"#/$defs/resourceControl"}},"required":["name"],"additionalProperties":false},"serviceResourcePropertiesWithName":{"type":"object","description":"Properties for a service resource (direct format with name)","properties":{"name":{"type":"string","description":"The service name"},"alias":{"type":"string","description":"An alternative name for the resource that can be used in require/subscribe references"},"ensure":{"type":"string","description":"Desired running state of the service","enum":["running","stopped"],"default":"running"},"provider":{"type":"string","description":"Specific provider to use for managing this resource"},"health_checks":{"type":"array","description":"Health checks to run after applying the resource","items":{"$ref":"#/$defs/healthCheck"}},"require":{"type":"array","description":"List of resources that must be applied before this resource, in format 'type#name'","items":{"type":"string","pattern":"^[a-z]+#.+$"}},"control":{"$ref":"#/$defs/resourceControl"},"enable":{"type":"boolean","description":"Whether the service should be enabled to start on boot"},"subscribe":{"type":"array","description":"List of resources to subscribe to for refresh notifications, in format 'type#name'. When a subscribed resource changes, this service will be restarted.","items":{"type":"string","pattern":"^[a-z]+#.+$"}}},"required":["name"],"additionalProperties":false},"fileResourcePropertiesWithName":{"type":"object","description":"Properties for a file resource (direct format with name)","properties":{"name":{"type":"string","description":"The absolute file path"},"alias":{"type":"string","description":"An alternative name for the resource that can be used in require/subscribe references"},"ensure":{"type":"string","description":"Desired state of the file: 'present' for a regular file, 'absent' to remove, 'directory' to create a directory","enum":["present","absent","directory"],"default":"present"},"provider":{"type":"string","description":"Specific provider to use for managing this resource"},"health_checks":{"type":"array","description":"Health checks to run after applying the resource","items":{"$ref":"#/$defs/healthCheck"}},"require":{"type":"array","description":"List of resources that must be applied before this resource, in format 'type#name'","items":{"type":"string","pattern":"^[a-z]+#.+$"}},"control":{"$ref":"#/$defs/resourceControl"},"content":{"type":"string","description":"Desired file contents as a string. Mutually exclusive with 'source'."},"source":{"type":"string","description":"Local file path to use as the source for file contents. Mutually exclusive with 'content'."},"owner":{"type":"string","description":"User that should own the file"},"group":{"type":"string","description":"Group that should own the file"},"mode":{"type":"string","description":"File permissions in octal notation","pattern":"^[0-7]{3,4}$","examples":["0644","0755","0600"]}},"required":["name"],"additionalProperties":false},"execResourcePropertiesWithName":{"type":"object","description":"Properties for an exec resource (direct format with name)","properties":{"name":{"type":"string","description":"A descriptive name for the resource, or the command to execute if 'command' is not specified"},"command":{"type":"string","description":"The command to execute. If not specified, the 'name' property will be used as the command."},"alias":{"type":"string","description":"An alternative name for the resource that can be used in require/subscribe references"},"ensure":{"type":"string","description":"Desired state of the exec resource","enum":["present","absent"],"default":"present"},"provider":{"type":"string","description":"Specific provider to use for managing this resource"},"health_checks":{"type":"array","description":"Health checks to run after applying the resource","items":{"$ref":"#/$defs/healthCheck"}},"require":{"type":"array","description":"List of resources that must be applied before this resource, in format 'type#name'","items":{"type":"string","pattern":"^[a-z]+#.+$"}},"control":{"$ref":"#/$defs/resourceControl"},"cwd":{"type":"string","description":"Working directory from which to run the command"},"environment":{"type":"array","description":"Additional environment variables to set when running the command, in KEY=value format","items":{"type":"string","pattern":"^[A-Za-z_][A-Za-z0-9_]*=.+$"}},"path":{"type":"string","description":"Search path for executable commands, as a colon-separated list of absolute directories","examples":["/usr/local/bin:/usr/bin:/bin"]},"returns":{"type":"array","description":"Expected exit codes indicating success. Defaults to [0] if not specified.","items":{"type":"integer"},"default":[0]},"timeout":{"type":"string","description":"Maximum time the command is allowed to run. If exceeded, the command will be terminated. Specified as a duration string.","examples":["10s","5m","1h"]},"creates":{"type":"string","description":"A file that the command creates. If this file exists, the command will not run."},"refreshonly":{"type":"boolean","description":"If true, the command only runs when notified by a subscribed resource","default":false},"subscribe":{"type":"array","description":"List of resources to subscribe to for refresh notifications, in format 'type#name'","items":{"type":"string","pattern":"^[a-z]+#.+$"}},"logoutput":{"type":"boolean","description":"Whether to log the command's output","default":false}},"required":["name"],"additionalProperties":false},"archiveResourcePropertiesWithName":{"type":"object","description":"Properties for an archive resource (direct format with name)","properties":{"name":{"type":"string","description":"The absolute file path where the archive will be saved"},"alias":{"type":"string","description":"An alternative name for the resource that can be used in require/subscribe references"},"ensure":{"type":"string","description":"Desired state of the archive","enum":["present","absent"],"default":"present"},"provider":{"type":"string","description":"Specific provider to use for managing this resource"},"health_checks":{"type":"array","description":"Health checks to run after applying the resource","items":{"$ref":"#/$defs/healthCheck"}},"require":{"type":"array","description":"List of resources that must be applied before this resource, in format 'type#name'","items":{"type":"string","pattern":"^[a-z]+#.+$"}},"control":{"$ref":"#/$defs/resourceControl"},"url":{"type":"string","description":"HTTP/HTTPS URL to download the archive from. Must end in .zip, .tar.gz, .tgz, or .tar","format":"uri"},"headers":{"type":"object","description":"Additional HTTP headers to send with the request","additionalProperties":{"type":"string"}},"username":{"type":"string","description":"Username for HTTP Basic Authentication"},"password":{"type":"string","description":"Password for HTTP Basic Authentication"},"checksum":{"type":"string","description":"Expected SHA256 checksum of the downloaded archive (hex encoded)"},"extract_parent":{"type":"string","description":"Directory to extract the archive contents into"},"cleanup":{"type":"boolean","description":"Remove the archive file after successful extraction. Requires extract_parent to be set.","default":false},"creates":{"type":"string","description":"A file path that the archive creates. If this file exists, the archive will not be downloaded or extracted."},"owner":{"type":"string","description":"User that should own the archive file"},"group":{"type":"string","description":"Group that should own the archive file"}},"required":["name"],"additionalProperties":false},"packageResourceProperties":{"type":"object","description":"Properties for a package resource","properties":{"alias":{"type":"string","description":"An alternative name for the resource that can be used in require/subscribe references"},"ensure":{"type":"string","description":"Desired state of the package: 'present' to install, 'absent' to remove, 'latest' to upgrade to latest version, or a specific version string","examples":["present","absent","latest","1.2.3"]},"provider":{"type":"string","description":"Specific provider to use for managing this resource"},"health_checks":{"type":"array","description":"Health checks to run after applying the resource","items":{"$ref":"#/$defs/healthCheck"}},"require":{"type":"array","description":"List of resources that must be applied before this resource, in format 'type#name'","items":{"type":"string","pattern":"^[a-z]+#.+$"}},"control":{"$ref":"#/$defs/resourceControl"}},"additionalProperties":false},"serviceResourceProperties":{"type":"object","description":"Properties for a service resource","properties":{"alias":{"type":"string","description":"An alternative name for the resource that can be used in require/subscribe references"},"ensure":{"type":"string","description":"Desired running state of the service","enum":["running","stopped"],"default":"running"},"provider":{"type":"string","description":"Specific provider to use for managing this resource"},"health_checks":{"type":"array","description":"Health checks to run after applying the resource","items":{"$ref":"#/$defs/healthCheck"}},"require":{"type":"array","description":"List of resources that must be applied before this resource, in format 'type#name'","items":{"type":"string","pattern":"^[a-z]+#.+$"}},"control":{"$ref":"#/$defs/resourceControl"},"enable":{"type":"boolean","description":"Whether the service should be enabled to start on boot"},"subscribe":{"type":"array","description":"List of resources to subscribe to for refresh notifications, in format 'type#name'. When a subscribed resource changes, this service will be restarted.","items":{"type":"string","pattern":"^[a-z]+#.+$"}}},"additionalProperties":false},"fileResourceProperties":{"type":"object","description":"Properties for a file resource","properties":{"alias":{"type":"string","description":"An alternative name for the resource that can be used in require/subscribe references"},"ensure":{"type":"string","description":"Desired state of the file: 'present' for a regular file, 'absent' to remove, 'directory' to create a directory","enum":["present","absent","directory"],"default":"present"},"provider":{"type":"string","description":"Specific provider to use for managing this resource"},"health_checks":{"type":"array","description":"Health checks to run after applying the resource","items":{"$ref":"#/$defs/healthCheck"}},"require":{"type":"array","description":"List of resources that must be applied before this resource, in format 'type#name'","items":{"type":"string","pattern":"^[a-z]+#.+$"}},"control":{"$ref":"#/$defs/resourceControl"},"content":{"type":"string","description":"Desired file contents as a string. Mutually exclusive with 'source'."},"source":{"type":"string","description":"Local file path to use as the source for file contents. Mutually exclusive with 'content'."},"owner":{"type":"string","description":"User that should own the file"},"group":{"type":"string","description":"Group that should own the file"},"mode":{"type":"string","description":"File permissions in octal notation","pattern":"^[0-7]{3,4}$","examples":["0644","0755","0600"]}},"additionalProperties":false},"execResourceProperties":{"type":"object","description":"Properties for an exec resource that runs commands","properties":{"command":{"type":"string","description":"The command to execute. If not specified, the resource name (key) will be used as the command."},"alias":{"type":"string","description":"An alternative name for the resource that can be used in require/subscribe references"},"ensure":{"type":"string","description":"Desired state of the exec resource","enum":["present","absent"],"default":"present"},"provider":{"type":"string","description":"Specific provider to use for managing this resource"},"health_checks":{"type":"array","description":"Health checks to run after applying the resource","items":{"$ref":"#/$defs/healthCheck"}},"require":{"type":"array","description":"List of resources that must be applied before this resource, in format 'type#name'","items":{"type":"string","pattern":"^[a-z]+#.+$"}},"control":{"$ref":"#/$defs/resourceControl"},"cwd":{"type":"string","description":"Working directory from which to run the command"},"environment":{"type":"array","description":"Additional environment variables to set when running the command, in KEY=value format","items":{"type":"string","pattern":"^[A-Za-z_][A-Za-z0-9_]*=.+$"}},"path":{"type":"string","description":"Search path for executable commands, as a colon-separated list of absolute directories","examples":["/usr/local/bin:/usr/bin:/bin"]},"returns":{"type":"array","description":"Expected exit codes indicating success. Defaults to [0] if not specified.","items":{"type":"integer"},"default":[0]},"timeout":{"type":"string","description":"Maximum time the command is allowed to run. If exceeded, the command will be terminated. Specified as a duration string.","examples":["10s","5m","1h"]},"creates":{"type":"string","description":"A file that the command creates. If this file exists, the command will not run."},"refreshonly":{"type":"boolean","description":"If true, the command only runs when notified by a subscribed resource","default":false},"subscribe":{"type":"array","description":"List of resources to subscribe to for refresh notifications, in format 'type#name'","items":{"type":"string","pattern":"^[a-z]+#.+$"}},"logoutput":{"type":"boolean","description":"Whether to log the command's output","default":false}},"additionalProperties":false},"archiveResourceProperties":{"type":"object","description":"Properties for an archive resource that downloads and extracts archives","properties":{"alias":{"type":"string","description":"An alternative name for the resource that can be used in require/subscribe references"},"ensure":{"type":"string","description":"Desired state of the archive","enum":["present","absent"],"default":"present"},"provider":{"type":"string","description":"Specific provider to use for managing this resource"},"health_checks":{"type":"array","description":"Health checks to run after applying the resource","items":{"$ref":"#/$defs/healthCheck"}},"require":{"type":"array","description":"List of resources that must be applied before this resource, in format 'type#name'","items":{"type":"string","pattern":"^[a-z]+#.+$"}},"control":{"$ref":"#/$defs/resourceControl"},"url":{"type":"string","description":"HTTP/HTTPS URL to download the archive from. Must end in .zip, .tar.gz, .tgz, or .tar","format":"uri"},"headers":{"type":"object","description":"Additional HTTP headers to send with the request","additionalProperties":{"type":"string"}},"username":{"type":"string","description":"Username for HTTP Basic Authentication"},"password":{"type":"string","description":"Password for HTTP Basic Authentication"},"checksum":{"type":"string","description":"Expected SHA256 checksum of the downloaded archive (hex encoded)"},"extract_parent":{"type":"string","description":"Directory to extract the archive contents into"},"cleanup":{"type":"boolean","description":"Remove the archive file after successful extraction. Requires extract_parent to be set.","default":false},"creates":{"type":"string","description":"A file path that the archive creates. If this file exists, the archive will not be downloaded or extracted."},"owner":{"type":"string","description":"User that should own the archive file"},"group":{"type":"string","description":"Group that should own the archive file"}},"additionalProperties":false},"healthCheck":{"type":"object","description":"Health check configuration to verify resource state after application","properties":{"command":{"type":"string","description":"Command to execute for the health check"},"name":{"type":"string","description":"Optional name for the health check"},"timeout":{"type":"string","description":"Maximum time to wait for the health check command to complete","examples":["10s","30s"]},"tries":{"type":"integer","description":"Number of times to retry the health check before failing","minimum":1},"try_sleep":{"type":"string","description":"Time to wait between health check retries","examples":["1s","5s"]},"format":{"type":"string","description":"Expected output format of the health check command. Defaults to 'nagios' if not specified.","enum":["nagios"],"default":"nagios"}},"required":["command"],"additionalProperties":false},"resourceControl":{"type":"object","description":"Control conditions that determine whether a resource should be managed","properties":{"if":{"type":"string","description":"Expression that must evaluate to true for the resource to be managed. Has access to Facts, Data, and Environ variables.","examples":["Facts.os == \\"linux\\"","lookup(\\"facts.kernel\\", \\"\\") == \\"Linux\\""]},"unless":{"type":"string","description":"Expression that must evaluate to false for the resource to be managed. Has access to Facts, Data, and Environ variables.","examples":["Facts.os == \\"windows\\"","lookup(\\"facts.virtual\\", \\"\\") == \\"docker\\""]}},"additionalProperties":false}}`),Ty={$schema:_y,$id:$y,title:ky,description:xy,type:Sy,properties:Cy,additionalProperties:Ey,$defs:Ay},tu=new oy({allErrors:!0,verbose:!0,strict:!1});wy(tu);const Vc=tu.compile(Ty);function Py(e){return e?e.map(t=>{const r=t.instancePath||"root",s=t.message||"Invalid value";switch(t.keyword){case"required":return`${r}: Missing required property '${t.params.missingProperty}'`;case"type":return`${r}: Expected ${t.params.type}`;case"enum":return`${r}: Must be one of: ${t.params.allowedValues.join(", ")}`;case"pattern":return`${r}: Does not match expected pattern`;case"additionalProperties":return`${r}: Unknown property '${t.params.additionalProperty}'`;case"format":return`${r}: Invalid format, expected ${t.params.format}`;default:return`${r}: ${s}`}}):[]}function Oy(e){const t=[],r=Dy(e);return Vc(r)||Py(Vc.errors).forEach(i=>{t.push({path:Ly(i),message:zy(i),severity:"error"})}),t.push(...Iy(e)),t}function Iy(e){const t=[];e.ccm.resources.forEach((s,i)=>{(!s.name||s.name.trim()==="")&&t.push({path:`ccm.resources[${i}].name`,message:"Resource name is required",severity:"error"}),e.ccm.resources.filter((o,a)=>a!==i&&o.type===s.type&&o.name===s.name).length>0&&t.push({path:`ccm.resources[${i}].name`,message:`Duplicate ${s.type} resource name: ${s.name}`,severity:"warning"}),s.require?.forEach((o,a)=>{Bc(o,e)||t.push({path:`ccm.resources[${i}].require[${a}]`,message:`Unknown resource reference: ${o}`,severity:"warning"}),(o===`${s.type}#${s.name}`||s.alias&&o===`${s.type}#${s.alias}`)&&t.push({path:`ccm.resources[${i}].require[${a}]`,message:"Resource cannot require itself",severity:"error"})}),"subscribe"in s.properties&&s.properties.subscribe?.forEach((a,l)=>{Bc(a,e)||t.push({path:`ccm.resources[${i}].subscribe[${l}]`,message:`Unknown resource reference: ${a}`,severity:"warning"})}),t.push(...Ny(s,i))});const r=Ry(e.hierarchy.order);return Object.keys(e.overrides).forEach(s=>{const i=s.split(":")[0];r.length>0&&!r.includes(i)&&t.push({path:`overrides.${s}`,message:`Override key '${s}' does not match any hierarchy dimension`,severity:"warning"})}),t}function Bc(e,t){const r=e.match(/^(\w+)#(.+)$/);if(!r)return!1;const[,s,i]=r;return t.ccm.resources.some(n=>n.type===s&&(n.name===i||n.alias===i))}function Ry(e){return e.map(t=>t.match(/^(\w+):/)?.[1]).filter(t=>t!==void 0)}function Ny(e,t){const r=[];switch(e.type){case"file":e.properties.content&&e.properties.source&&r.push({path:`ccm.resources[${t}]`,message:"File resource cannot have both content and source",severity:"error"}),e.properties.mode&&!/^[0-7]{3,4}$/.test(String(e.properties.mode))&&r.push({path:`ccm.resources[${t}].mode`,message:"Mode must be octal notation (e.g., 0644)",severity:"error"});break;case"archive":e.properties.url||r.push({path:`ccm.resources[${t}].url`,message:"Archive resource requires a URL",severity:"error"}),e.properties.cleanup&&(!e.properties.extract_parent||!e.properties.creates)&&r.push({path:`ccm.resources[${t}].cleanup`,message:"Cleanup requires extract_parent and creates to be set",severity:"warning"});break;case"exec":e.properties.refreshonly&&!e.properties.subscribe?.length&&r.push({path:`ccm.resources[${t}].refreshonly`,message:"refreshonly is set but no subscribe references defined",severity:"warning"});break}return r}function Dy(e){const t={};return Object.keys(e.data).length>0&&(t.data=e.data),e.hierarchy.order.length>0&&(t.hierarchy={order:e.hierarchy.order,...e.hierarchy.merge!=="first"?{merge:e.hierarchy.merge}:{}}),Object.keys(e.overrides).length>0&&(t.overrides=e.overrides),(e.ccm.resources.length>0||e.ccm.pre_message||e.ccm.post_message||e.ccm.fail_on_error)&&(t.ccm={...e.ccm.pre_message&&{pre_message:e.ccm.pre_message},...e.ccm.post_message&&{post_message:e.ccm.post_message},...e.ccm.fail_on_error&&{fail_on_error:e.ccm.fail_on_error},resources:e.ccm.resources.map(r=>({[r.type]:[{[r.name]:{...r.properties,...r.alias&&{alias:r.alias},...r.require?.length&&{require:r.require},...r.control&&{control:r.control}}}]}))}),t}function Ly(e){const t=e.match(/^([^:]+):/);return t?t[1]:""}function zy(e){const t=e.match(/^[^:]+:\s*(.+)$/);return t?t[1]:e}const ua=Symbol.for("yaml.alias"),Oo=Symbol.for("yaml.document"),Bt=Symbol.for("yaml.map"),ru=Symbol.for("yaml.pair"),St=Symbol.for("yaml.scalar"),Hr=Symbol.for("yaml.seq"),ct=Symbol.for("yaml.node.type"),fr=e=>!!e&&typeof e=="object"&&e[ct]===ua,Pn=e=>!!e&&typeof e=="object"&&e[ct]===Oo,Is=e=>!!e&&typeof e=="object"&&e[ct]===Bt,Ce=e=>!!e&&typeof e=="object"&&e[ct]===ru,we=e=>!!e&&typeof e=="object"&&e[ct]===St,Rs=e=>!!e&&typeof e=="object"&&e[ct]===Hr;function xe(e){if(e&&typeof e=="object")switch(e[ct]){case Bt:case Hr:return!0}return!1}function Se(e){if(e&&typeof e=="object")switch(e[ct]){case ua:case Bt:case St:case Hr:return!0}return!1}const su=e=>(we(e)||xe(e))&&!!e.anchor,er=Symbol("break visit"),jy=Symbol("skip children"),ps=Symbol("remove node");function Kr(e,t){const r=My(t);Pn(e)?Er(null,e.contents,r,Object.freeze([e]))===ps&&(e.contents=null):Er(null,e,r,Object.freeze([]))}Kr.BREAK=er;Kr.SKIP=jy;Kr.REMOVE=ps;function Er(e,t,r,s){const i=qy(e,t,r,s);if(Se(i)||Ce(i))return Fy(e,s,i),Er(e,i,r,s);if(typeof i!="symbol"){if(xe(t)){s=Object.freeze(s.concat(t));for(let n=0;n<t.items.length;++n){const o=Er(n,t.items[n],r,s);if(typeof o=="number")n=o-1;else{if(o===er)return er;o===ps&&(t.items.splice(n,1),n-=1)}}}else if(Ce(t)){s=Object.freeze(s.concat(t));const n=Er("key",t.key,r,s);if(n===er)return er;n===ps&&(t.key=null);const o=Er("value",t.value,r,s);if(o===er)return er;o===ps&&(t.value=null)}}return i}function My(e){return typeof e=="object"&&(e.Collection||e.Node||e.Value)?Object.assign({Alias:e.Node,Map:e.Node,Scalar:e.Node,Seq:e.Node},e.Value&&{Map:e.Value,Scalar:e.Value,Seq:e.Value},e.Collection&&{Map:e.Collection,Seq:e.Collection},e):e}function qy(e,t,r,s){if(typeof r=="function")return r(e,t,s);if(Is(t))return r.Map?.(e,t,s);if(Rs(t))return r.Seq?.(e,t,s);if(Ce(t))return r.Pair?.(e,t,s);if(we(t))return r.Scalar?.(e,t,s);if(fr(t))return r.Alias?.(e,t,s)}function Fy(e,t,r){const s=t[t.length-1];if(xe(s))s.items[e]=r;else if(Ce(s))e==="key"?s.key=r:s.value=r;else if(Pn(s))s.contents=r;else{const i=fr(s)?"alias":"scalar";throw new Error(`Cannot replace node with ${i} parent`)}}const Vy={"!":"%21",",":"%2C","[":"%5B","]":"%5D","{":"%7B","}":"%7D"},By=e=>e.replace(/[!,[\]{}]/g,t=>Vy[t]);class Me{constructor(t,r){this.docStart=null,this.docEnd=!1,this.yaml=Object.assign({},Me.defaultYaml,t),this.tags=Object.assign({},Me.defaultTags,r)}clone(){const t=new Me(this.yaml,this.tags);return t.docStart=this.docStart,t}atDocument(){const t=new Me(this.yaml,this.tags);switch(this.yaml.version){case"1.1":this.atNextDocument=!0;break;case"1.2":this.atNextDocument=!1,this.yaml={explicit:Me.defaultYaml.explicit,version:"1.2"},this.tags=Object.assign({},Me.defaultTags);break}return t}add(t,r){this.atNextDocument&&(this.yaml={explicit:Me.defaultYaml.explicit,version:"1.1"},this.tags=Object.assign({},Me.defaultTags),this.atNextDocument=!1);const s=t.trim().split(/[ \t]+/),i=s.shift();switch(i){case"%TAG":{if(s.length!==2&&(r(0,"%TAG directive should contain exactly two parts"),s.length<2))return!1;const[n,o]=s;return this.tags[n]=o,!0}case"%YAML":{if(this.yaml.explicit=!0,s.length!==1)return r(0,"%YAML directive should contain exactly one part"),!1;const[n]=s;if(n==="1.1"||n==="1.2")return this.yaml.version=n,!0;{const o=/^\d+\.\d+$/.test(n);return r(6,`Unsupported YAML version ${n}`,o),!1}}default:return r(0,`Unknown directive ${i}`,!0),!1}}tagName(t,r){if(t==="!")return"!";if(t[0]!=="!")return r(`Not a valid tag: ${t}`),null;if(t[1]==="<"){const o=t.slice(2,-1);return o==="!"||o==="!!"?(r(`Verbatim tags aren't resolved, so ${t} is invalid.`),null):(t[t.length-1]!==">"&&r("Verbatim tags must end with a >"),o)}const[,s,i]=t.match(/^(.*!)([^!]*)$/s);i||r(`The ${t} tag has no suffix`);const n=this.tags[s];if(n)try{return n+decodeURIComponent(i)}catch(o){return r(String(o)),null}return s==="!"?t:(r(`Could not resolve tag: ${t}`),null)}tagString(t){for(const[r,s]of Object.entries(this.tags))if(t.startsWith(s))return r+By(t.substring(s.length));return t[0]==="!"?t:`!<${t}>`}toString(t){const r=this.yaml.explicit?[`%YAML ${this.yaml.version||"1.2"}`]:[],s=Object.entries(this.tags);let i;if(t&&s.length>0&&Se(t.contents)){const n={};Kr(t.contents,(o,a)=>{Se(a)&&a.tag&&(n[a.tag]=!0)}),i=Object.keys(n)}else i=[];for(const[n,o]of s)n==="!!"&&o==="tag:yaml.org,2002:"||(!t||i.some(a=>a.startsWith(o)))&&r.push(`%TAG ${n} ${o}`);return r.join(`
`)}}Me.defaultYaml={explicit:!1,version:"1.2"};Me.defaultTags={"!!":"tag:yaml.org,2002:"};function iu(e){if(/[\x00-\x19\s,[\]{}]/.test(e)){const r=`Anchor must not contain whitespace or control characters: ${JSON.stringify(e)}`;throw new Error(r)}return!0}function nu(e){const t=new Set;return Kr(e,{Value(r,s){s.anchor&&t.add(s.anchor)}}),t}function ou(e,t){for(let r=1;;++r){const s=`${e}${r}`;if(!t.has(s))return s}}function Uy(e,t){const r=[],s=new Map;let i=null;return{onAnchor:n=>{r.push(n),i??(i=nu(e));const o=ou(t,i);return i.add(o),o},setAnchors:()=>{for(const n of r){const o=s.get(n);if(typeof o=="object"&&o.anchor&&(we(o.node)||xe(o.node)))o.node.anchor=o.anchor;else{const a=new Error("Failed to resolve repeated object (this should not happen)");throw a.source=n,a}}},sourceObjects:s}}function Ar(e,t,r,s){if(s&&typeof s=="object")if(Array.isArray(s))for(let i=0,n=s.length;i<n;++i){const o=s[i],a=Ar(e,s,String(i),o);a===void 0?delete s[i]:a!==o&&(s[i]=a)}else if(s instanceof Map)for(const i of Array.from(s.keys())){const n=s.get(i),o=Ar(e,s,i,n);o===void 0?s.delete(i):o!==n&&s.set(i,o)}else if(s instanceof Set)for(const i of Array.from(s)){const n=Ar(e,s,i,i);n===void 0?s.delete(i):n!==i&&(s.delete(i),s.add(n))}else for(const[i,n]of Object.entries(s)){const o=Ar(e,s,i,n);o===void 0?delete s[i]:o!==n&&(s[i]=o)}return e.call(t,r,s)}function lt(e,t,r){if(Array.isArray(e))return e.map((s,i)=>lt(s,String(i),r));if(e&&typeof e.toJSON=="function"){if(!r||!su(e))return e.toJSON(t,r);const s={aliasCount:0,count:1,res:void 0};r.anchors.set(e,s),r.onCreate=n=>{s.res=n,delete r.onCreate};const i=e.toJSON(t,r);return r.onCreate&&r.onCreate(i),i}return typeof e=="bigint"&&!r?.keep?Number(e):e}class ha{constructor(t){Object.defineProperty(this,ct,{value:t})}clone(){const t=Object.create(Object.getPrototypeOf(this),Object.getOwnPropertyDescriptors(this));return this.range&&(t.range=this.range.slice()),t}toJS(t,{mapAsMap:r,maxAliasCount:s,onAnchor:i,reviver:n}={}){if(!Pn(t))throw new TypeError("A document argument is required");const o={anchors:new Map,doc:t,keep:!0,mapAsMap:r===!0,mapKeyWarned:!1,maxAliasCount:typeof s=="number"?s:100},a=lt(this,"",o);if(typeof i=="function")for(const{count:l,res:c}of o.anchors.values())i(c,l);return typeof n=="function"?Ar(n,{"":a},"",a):a}}class pa extends ha{constructor(t){super(ua),this.source=t,Object.defineProperty(this,"tag",{set(){throw new Error("Alias nodes cannot have tags")}})}resolve(t,r){let s;r?.aliasResolveCache?s=r.aliasResolveCache:(s=[],Kr(t,{Node:(n,o)=>{(fr(o)||su(o))&&s.push(o)}}),r&&(r.aliasResolveCache=s));let i;for(const n of s){if(n===this)break;n.anchor===this.source&&(i=n)}return i}toJSON(t,r){if(!r)return{source:this.source};const{anchors:s,doc:i,maxAliasCount:n}=r,o=this.resolve(i,r);if(!o){const l=`Unresolved alias (the anchor must be set before the alias): ${this.source}`;throw new ReferenceError(l)}let a=s.get(o);if(a||(lt(o,null,r),a=s.get(o)),a?.res===void 0){const l="This should not happen: Alias anchor was not resolved?";throw new ReferenceError(l)}if(n>=0&&(a.count+=1,a.aliasCount===0&&(a.aliasCount=Xi(i,o,s)),a.count*a.aliasCount>n)){const l="Excessive alias count indicates a resource exhaustion attack";throw new ReferenceError(l)}return a.res}toString(t,r,s){const i=`*${this.source}`;if(t){if(iu(this.source),t.options.verifyAliasOrder&&!t.anchors.has(this.source)){const n=`Unresolved alias (the anchor must be set before the alias): ${this.source}`;throw new Error(n)}if(t.implicitKey)return`${i} `}return i}}function Xi(e,t,r){if(fr(t)){const s=t.resolve(e),i=r&&s&&r.get(s);return i?i.count*i.aliasCount:0}else if(xe(t)){let s=0;for(const i of t.items){const n=Xi(e,i,r);n>s&&(s=n)}return s}else if(Ce(t)){const s=Xi(e,t.key,r),i=Xi(e,t.value,r);return Math.max(s,i)}return 1}const au=e=>!e||typeof e!="function"&&typeof e!="object";class te extends ha{constructor(t){super(St),this.value=t}toJSON(t,r){return r?.keep?this.value:lt(this.value,t,r)}toString(){return String(this.value)}}te.BLOCK_FOLDED="BLOCK_FOLDED";te.BLOCK_LITERAL="BLOCK_LITERAL";te.PLAIN="PLAIN";te.QUOTE_DOUBLE="QUOTE_DOUBLE";te.QUOTE_SINGLE="QUOTE_SINGLE";const Hy="tag:yaml.org,2002:";function Ky(e,t,r){if(t){const s=r.filter(n=>n.tag===t),i=s.find(n=>!n.format)??s[0];if(!i)throw new Error(`Tag ${t} not found`);return i}return r.find(s=>s.identify?.(e)&&!s.format)}function ws(e,t,r){if(Pn(e)&&(e=e.contents),Se(e))return e;if(Ce(e)){const p=r.schema[Bt].createNode?.(r.schema,null,r);return p.items.push(e),p}(e instanceof String||e instanceof Number||e instanceof Boolean||typeof BigInt<"u"&&e instanceof BigInt)&&(e=e.valueOf());const{aliasDuplicateObjects:s,onAnchor:i,onTagObj:n,schema:o,sourceObjects:a}=r;let l;if(s&&e&&typeof e=="object"){if(l=a.get(e),l)return l.anchor??(l.anchor=i(e)),new pa(l.anchor);l={anchor:null,node:null},a.set(e,l)}t?.startsWith("!!")&&(t=Hy+t.slice(2));let c=Ky(e,t,o.tags);if(!c){if(e&&typeof e.toJSON=="function"&&(e=e.toJSON()),!e||typeof e!="object"){const p=new te(e);return l&&(l.node=p),p}c=e instanceof Map?o[Bt]:Symbol.iterator in Object(e)?o[Hr]:o[Bt]}n&&(n(c),delete r.onTagObj);const d=c?.createNode?c.createNode(r.schema,e,r):typeof c?.nodeClass?.from=="function"?c.nodeClass.from(r.schema,e,r):new te(e);return t?d.tag=t:c.default||(d.tag=c.tag),l&&(l.node=d),d}function dn(e,t,r){let s=r;for(let i=t.length-1;i>=0;--i){const n=t[i];if(typeof n=="number"&&Number.isInteger(n)&&n>=0){const o=[];o[n]=s,s=o}else s=new Map([[n,s]])}return ws(s,void 0,{aliasDuplicateObjects:!1,keepUndefined:!1,onAnchor:()=>{throw new Error("This should not happen, please report a bug.")},schema:e,sourceObjects:new Map})}const cs=e=>e==null||typeof e=="object"&&!!e[Symbol.iterator]().next().done;class lu extends ha{constructor(t,r){super(t),Object.defineProperty(this,"schema",{value:r,configurable:!0,enumerable:!1,writable:!0})}clone(t){const r=Object.create(Object.getPrototypeOf(this),Object.getOwnPropertyDescriptors(this));return t&&(r.schema=t),r.items=r.items.map(s=>Se(s)||Ce(s)?s.clone(t):s),this.range&&(r.range=this.range.slice()),r}addIn(t,r){if(cs(t))this.add(r);else{const[s,...i]=t,n=this.get(s,!0);if(xe(n))n.addIn(i,r);else if(n===void 0&&this.schema)this.set(s,dn(this.schema,i,r));else throw new Error(`Expected YAML collection at ${s}. Remaining path: ${i}`)}}deleteIn(t){const[r,...s]=t;if(s.length===0)return this.delete(r);const i=this.get(r,!0);if(xe(i))return i.deleteIn(s);throw new Error(`Expected YAML collection at ${r}. Remaining path: ${s}`)}getIn(t,r){const[s,...i]=t,n=this.get(s,!0);return i.length===0?!r&&we(n)?n.value:n:xe(n)?n.getIn(i,r):void 0}hasAllNullValues(t){return this.items.every(r=>{if(!Ce(r))return!1;const s=r.value;return s==null||t&&we(s)&&s.value==null&&!s.commentBefore&&!s.comment&&!s.tag})}hasIn(t){const[r,...s]=t;if(s.length===0)return this.has(r);const i=this.get(r,!0);return xe(i)?i.hasIn(s):!1}setIn(t,r){const[s,...i]=t;if(i.length===0)this.set(s,r);else{const n=this.get(s,!0);if(xe(n))n.setIn(i,r);else if(n===void 0&&this.schema)this.set(s,dn(this.schema,i,r));else throw new Error(`Expected YAML collection at ${s}. Remaining path: ${i}`)}}}const Wy=e=>e.replace(/^(?!$)(?: $)?/gm,"#");function Nt(e,t){return/^\n+$/.test(e)?e.substring(1):t?e.replace(/^(?! *$)/gm,t):e}const sr=(e,t,r)=>e.endsWith(`
`)?Nt(r,t):r.includes(`
`)?`
`+Nt(r,t):(e.endsWith(" ")?"":" ")+r,cu="flow",Io="block",Qi="quoted";function On(e,t,r="flow",{indentAtStart:s,lineWidth:i=80,minContentWidth:n=20,onFold:o,onOverflow:a}={}){if(!i||i<0)return e;i<n&&(n=0);const l=Math.max(1+n,1+i-t.length);if(e.length<=l)return e;const c=[],d={};let p=i-t.length;typeof s=="number"&&(s>i-Math.max(2,n)?c.push(0):p=i-s);let u,h,y=!1,g=-1,f=-1,w=-1;r===Io&&(g=Uc(e,g,t.length),g!==-1&&(p=g+l));for(let v;v=e[g+=1];){if(r===Qi&&v==="\\"){switch(f=g,e[g+1]){case"x":g+=3;break;case"u":g+=5;break;case"U":g+=9;break;default:g+=1}w=g}if(v===`
`)r===Io&&(g=Uc(e,g,t.length)),p=g+t.length+l,u=void 0;else{if(v===" "&&h&&h!==" "&&h!==`
`&&h!=="	"){const $=e[g+1];$&&$!==" "&&$!==`
`&&$!=="	"&&(u=g)}if(g>=p)if(u)c.push(u),p=u+l,u=void 0;else if(r===Qi){for(;h===" "||h==="	";)h=v,v=e[g+=1],y=!0;const $=g>w+1?g-2:f-1;if(d[$])return e;c.push($),d[$]=!0,p=$+l,u=void 0}else y=!0}h=v}if(y&&a&&a(),c.length===0)return e;o&&o();let m=e.slice(0,c[0]);for(let v=0;v<c.length;++v){const $=c[v],b=c[v+1]||e.length;$===0?m=`
${t}${e.slice(0,b)}`:(r===Qi&&d[$]&&(m+=`${e[$]}\\`),m+=`
${t}${e.slice($+1,b)}`)}return m}function Uc(e,t,r){let s=t,i=t+1,n=e[i];for(;n===" "||n==="	";)if(t<i+r)n=e[++t];else{do n=e[++t];while(n&&n!==`
`);s=t,i=t+1,n=e[i]}return s}const In=(e,t)=>({indentAtStart:t?e.indent.length:e.indentAtStart,lineWidth:e.options.lineWidth,minContentWidth:e.options.minContentWidth}),Rn=e=>/^(%|---|\.\.\.)/m.test(e);function Gy(e,t,r){if(!t||t<0)return!1;const s=t-r,i=e.length;if(i<=s)return!1;for(let n=0,o=0;n<i;++n)if(e[n]===`
`){if(n-o>s)return!0;if(o=n+1,i-o<=s)return!1}return!0}function fs(e,t){const r=JSON.stringify(e);if(t.options.doubleQuotedAsJSON)return r;const{implicitKey:s}=t,i=t.options.doubleQuotedMinMultiLineLength,n=t.indent||(Rn(e)?"  ":"");let o="",a=0;for(let l=0,c=r[l];c;c=r[++l])if(c===" "&&r[l+1]==="\\"&&r[l+2]==="n"&&(o+=r.slice(a,l)+"\\ ",l+=1,a=l,c="\\"),c==="\\")switch(r[l+1]){case"u":{o+=r.slice(a,l);const d=r.substr(l+2,4);switch(d){case"0000":o+="\\0";break;case"0007":o+="\\a";break;case"000b":o+="\\v";break;case"001b":o+="\\e";break;case"0085":o+="\\N";break;case"00a0":o+="\\_";break;case"2028":o+="\\L";break;case"2029":o+="\\P";break;default:d.substr(0,2)==="00"?o+="\\x"+d.substr(2):o+=r.substr(l,6)}l+=5,a=l+1}break;case"n":if(s||r[l+2]==='"'||r.length<i)l+=1;else{for(o+=r.slice(a,l)+`

`;r[l+2]==="\\"&&r[l+3]==="n"&&r[l+4]!=='"';)o+=`
`,l+=2;o+=n,r[l+2]===" "&&(o+="\\"),l+=1,a=l+1}break;default:l+=1}return o=a?o+r.slice(a):r,s?o:On(o,n,Qi,In(t,!1))}function Ro(e,t){if(t.options.singleQuote===!1||t.implicitKey&&e.includes(`
`)||/[ \t]\n|\n[ \t]/.test(e))return fs(e,t);const r=t.indent||(Rn(e)?"  ":""),s="'"+e.replace(/'/g,"''").replace(/\n+/g,`$&
${r}`)+"'";return t.implicitKey?s:On(s,r,cu,In(t,!1))}function Tr(e,t){const{singleQuote:r}=t.options;let s;if(r===!1)s=fs;else{const i=e.includes('"'),n=e.includes("'");i&&!n?s=Ro:n&&!i?s=fs:s=r?Ro:fs}return s(e,t)}let No;try{No=new RegExp(`(^|(?<!
))
+(?!
|$)`,"g")}catch{No=/\n+(?!\n|$)/g}function Zi({comment:e,type:t,value:r},s,i,n){const{blockQuote:o,commentString:a,lineWidth:l}=s.options;if(!o||/\n[\t ]+$/.test(r))return Tr(r,s);const c=s.indent||(s.forceBlockIndent||Rn(r)?"  ":""),d=o==="literal"?!0:o==="folded"||t===te.BLOCK_FOLDED?!1:t===te.BLOCK_LITERAL?!0:!Gy(r,l,c.length);if(!r)return d?`|
`:`>
`;let p,u;for(u=r.length;u>0;--u){const b=r[u-1];if(b!==`
`&&b!=="	"&&b!==" ")break}let h=r.substring(u);const y=h.indexOf(`
`);y===-1?p="-":r===h||y!==h.length-1?(p="+",n&&n()):p="",h&&(r=r.slice(0,-h.length),h[h.length-1]===`
`&&(h=h.slice(0,-1)),h=h.replace(No,`$&${c}`));let g=!1,f,w=-1;for(f=0;f<r.length;++f){const b=r[f];if(b===" ")g=!0;else if(b===`
`)w=f;else break}let m=r.substring(0,w<f?w+1:f);m&&(r=r.substring(m.length),m=m.replace(/\n+/g,`$&${c}`));let $=(g?c?"2":"1":"")+p;if(e&&($+=" "+a(e.replace(/ ?[\r\n]+/g," ")),i&&i()),!d){const b=r.replace(/\n+/g,`
$&`).replace(/(?:^|\n)([\t ].*)(?:([\n\t ]*)\n(?![\n\t ]))?/g,"$1$2").replace(/\n+/g,`$&${c}`);let _=!1;const S=In(s,!0);o!=="folded"&&t!==te.BLOCK_FOLDED&&(S.onOverflow=()=>{_=!0});const C=On(`${m}${b}${h}`,c,Io,S);if(!_)return`>${$}
${c}${C}`}return r=r.replace(/\n+/g,`$&${c}`),`|${$}
${c}${m}${r}${h}`}function Yy(e,t,r,s){const{type:i,value:n}=e,{actualString:o,implicitKey:a,indent:l,indentStep:c,inFlow:d}=t;if(a&&n.includes(`
`)||d&&/[[\]{},]/.test(n))return Tr(n,t);if(/^[\n\t ,[\]{}#&*!|>'"%@`]|^[?-]$|^[?-][ \t]|[\n:][ \t]|[ \t]\n|[\n\t ]#|[\n\t :]$/.test(n))return a||d||!n.includes(`
`)?Tr(n,t):Zi(e,t,r,s);if(!a&&!d&&i!==te.PLAIN&&n.includes(`
`))return Zi(e,t,r,s);if(Rn(n)){if(l==="")return t.forceBlockIndent=!0,Zi(e,t,r,s);if(a&&l===c)return Tr(n,t)}const p=n.replace(/\n+/g,`$&
${l}`);if(o){const u=g=>g.default&&g.tag!=="tag:yaml.org,2002:str"&&g.test?.test(p),{compat:h,tags:y}=t.doc.schema;if(y.some(u)||h?.some(u))return Tr(n,t)}return a?p:On(p,l,cu,In(t,!1))}function fa(e,t,r,s){const{implicitKey:i,inFlow:n}=t,o=typeof e.value=="string"?e:Object.assign({},e,{value:String(e.value)});let{type:a}=e;a!==te.QUOTE_DOUBLE&&/[\x00-\x08\x0b-\x1f\x7f-\x9f\u{D800}-\u{DFFF}]/u.test(o.value)&&(a=te.QUOTE_DOUBLE);const l=d=>{switch(d){case te.BLOCK_FOLDED:case te.BLOCK_LITERAL:return i||n?Tr(o.value,t):Zi(o,t,r,s);case te.QUOTE_DOUBLE:return fs(o.value,t);case te.QUOTE_SINGLE:return Ro(o.value,t);case te.PLAIN:return Yy(o,t,r,s);default:return null}};let c=l(a);if(c===null){const{defaultKeyType:d,defaultStringType:p}=t.options,u=i&&d||p;if(c=l(u),c===null)throw new Error(`Unsupported default string type ${u}`)}return c}function du(e,t){const r=Object.assign({blockQuote:!0,commentString:Wy,defaultKeyType:null,defaultStringType:"PLAIN",directives:null,doubleQuotedAsJSON:!1,doubleQuotedMinMultiLineLength:40,falseStr:"false",flowCollectionPadding:!0,indentSeq:!0,lineWidth:80,minContentWidth:20,nullStr:"null",simpleKeys:!1,singleQuote:null,trueStr:"true",verifyAliasOrder:!0},e.schema.toStringOptions,t);let s;switch(r.collectionStyle){case"block":s=!1;break;case"flow":s=!0;break;default:s=null}return{anchors:new Set,doc:e,flowCollectionPadding:r.flowCollectionPadding?" ":"",indent:"",indentStep:typeof r.indent=="number"?" ".repeat(r.indent):"  ",inFlow:s,options:r}}function Jy(e,t){if(t.tag){const i=e.filter(n=>n.tag===t.tag);if(i.length>0)return i.find(n=>n.format===t.format)??i[0]}let r,s;if(we(t)){s=t.value;let i=e.filter(n=>n.identify?.(s));if(i.length>1){const n=i.filter(o=>o.test);n.length>0&&(i=n)}r=i.find(n=>n.format===t.format)??i.find(n=>!n.format)}else s=t,r=e.find(i=>i.nodeClass&&s instanceof i.nodeClass);if(!r){const i=s?.constructor?.name??(s===null?"null":typeof s);throw new Error(`Tag not resolved for ${i} value`)}return r}function Xy(e,t,{anchors:r,doc:s}){if(!s.directives)return"";const i=[],n=(we(e)||xe(e))&&e.anchor;n&&iu(n)&&(r.add(n),i.push(`&${n}`));const o=e.tag??(t.default?null:t.tag);return o&&i.push(s.directives.tagString(o)),i.join(" ")}function jr(e,t,r,s){if(Ce(e))return e.toString(t,r,s);if(fr(e)){if(t.doc.directives)return e.toString(t);if(t.resolvedAliases?.has(e))throw new TypeError("Cannot stringify circular structure without alias nodes");t.resolvedAliases?t.resolvedAliases.add(e):t.resolvedAliases=new Set([e]),e=e.resolve(t.doc)}let i;const n=Se(e)?e:t.doc.createNode(e,{onTagObj:l=>i=l});i??(i=Jy(t.doc.schema.tags,n));const o=Xy(n,i,t);o.length>0&&(t.indentAtStart=(t.indentAtStart??0)+o.length+1);const a=typeof i.stringify=="function"?i.stringify(n,t,r,s):we(n)?fa(n,t,r,s):n.toString(t,r,s);return o?we(n)||a[0]==="{"||a[0]==="["?`${o} ${a}`:`${o}
${t.indent}${a}`:a}function Qy({key:e,value:t},r,s,i){const{allNullValues:n,doc:o,indent:a,indentStep:l,options:{commentString:c,indentSeq:d,simpleKeys:p}}=r;let u=Se(e)&&e.comment||null;if(p){if(u)throw new Error("With simple keys, key nodes cannot have comments");if(xe(e)||!Se(e)&&typeof e=="object"){const S="With simple keys, collection cannot be used as a key value";throw new Error(S)}}let h=!p&&(!e||u&&t==null&&!r.inFlow||xe(e)||(we(e)?e.type===te.BLOCK_FOLDED||e.type===te.BLOCK_LITERAL:typeof e=="object"));r=Object.assign({},r,{allNullValues:!1,implicitKey:!h&&(p||!n),indent:a+l});let y=!1,g=!1,f=jr(e,r,()=>y=!0,()=>g=!0);if(!h&&!r.inFlow&&f.length>1024){if(p)throw new Error("With simple keys, single line scalar must not span more than 1024 characters");h=!0}if(r.inFlow){if(n||t==null)return y&&s&&s(),f===""?"?":h?`? ${f}`:f}else if(n&&!p||t==null&&h)return f=`? ${f}`,u&&!y?f+=sr(f,r.indent,c(u)):g&&i&&i(),f;y&&(u=null),h?(u&&(f+=sr(f,r.indent,c(u))),f=`? ${f}
${a}:`):(f=`${f}:`,u&&(f+=sr(f,r.indent,c(u))));let w,m,v;Se(t)?(w=!!t.spaceBefore,m=t.commentBefore,v=t.comment):(w=!1,m=null,v=null,t&&typeof t=="object"&&(t=o.createNode(t))),r.implicitKey=!1,!h&&!u&&we(t)&&(r.indentAtStart=f.length+1),g=!1,!d&&l.length>=2&&!r.inFlow&&!h&&Rs(t)&&!t.flow&&!t.tag&&!t.anchor&&(r.indent=r.indent.substring(2));let $=!1;const b=jr(t,r,()=>$=!0,()=>g=!0);let _=" ";if(u||w||m){if(_=w?`
`:"",m){const S=c(m);_+=`
${Nt(S,r.indent)}`}b===""&&!r.inFlow?_===`
`&&v&&(_=`

`):_+=`
${r.indent}`}else if(!h&&xe(t)){const S=b[0],C=b.indexOf(`
`),O=C!==-1,M=r.inFlow??t.flow??t.items.length===0;if(O||!M){let D=!1;if(O&&(S==="&"||S==="!")){let z=b.indexOf(" ");S==="&"&&z!==-1&&z<C&&b[z+1]==="!"&&(z=b.indexOf(" ",z+1)),(z===-1||C<z)&&(D=!0)}D||(_=`
${r.indent}`)}}else(b===""||b[0]===`
`)&&(_="");return f+=_+b,r.inFlow?$&&s&&s():v&&!$?f+=sr(f,r.indent,c(v)):g&&i&&i(),f}function Zy(e,t){(e==="debug"||e==="warn")&&console.warn(t)}const Vi="<<",Dt={identify:e=>e===Vi||typeof e=="symbol"&&e.description===Vi,default:"key",tag:"tag:yaml.org,2002:merge",test:/^<<$/,resolve:()=>Object.assign(new te(Symbol(Vi)),{addToJSMap:uu}),stringify:()=>Vi},eb=(e,t)=>(Dt.identify(t)||we(t)&&(!t.type||t.type===te.PLAIN)&&Dt.identify(t.value))&&e?.doc.schema.tags.some(r=>r.tag===Dt.tag&&r.default);function uu(e,t,r){if(r=e&&fr(r)?r.resolve(e.doc):r,Rs(r))for(const s of r.items)uo(e,t,s);else if(Array.isArray(r))for(const s of r)uo(e,t,s);else uo(e,t,r)}function uo(e,t,r){const s=e&&fr(r)?r.resolve(e.doc):r;if(!Is(s))throw new Error("Merge sources must be maps or map aliases");const i=s.toJSON(null,e,Map);for(const[n,o]of i)t instanceof Map?t.has(n)||t.set(n,o):t instanceof Set?t.add(n):Object.prototype.hasOwnProperty.call(t,n)||Object.defineProperty(t,n,{value:o,writable:!0,enumerable:!0,configurable:!0});return t}function hu(e,t,{key:r,value:s}){if(Se(r)&&r.addToJSMap)r.addToJSMap(e,t,s);else if(eb(e,r))uu(e,t,s);else{const i=lt(r,"",e);if(t instanceof Map)t.set(i,lt(s,i,e));else if(t instanceof Set)t.add(i);else{const n=tb(r,i,e),o=lt(s,n,e);n in t?Object.defineProperty(t,n,{value:o,writable:!0,enumerable:!0,configurable:!0}):t[n]=o}}return t}function tb(e,t,r){if(t===null)return"";if(typeof t!="object")return String(t);if(Se(e)&&r?.doc){const s=du(r.doc,{});s.anchors=new Set;for(const n of r.anchors.keys())s.anchors.add(n.anchor);s.inFlow=!0,s.inStringifyKey=!0;const i=e.toString(s);if(!r.mapKeyWarned){let n=JSON.stringify(i);n.length>40&&(n=n.substring(0,36)+'..."'),Zy(r.doc.options.logLevel,`Keys with collection values will be stringified due to JS Object restrictions: ${n}. Set mapAsMap: true to use object keys.`),r.mapKeyWarned=!0}return i}return JSON.stringify(t)}function ma(e,t,r){const s=ws(e,void 0,r),i=ws(t,void 0,r);return new qe(s,i)}class qe{constructor(t,r=null){Object.defineProperty(this,ct,{value:ru}),this.key=t,this.value=r}clone(t){let{key:r,value:s}=this;return Se(r)&&(r=r.clone(t)),Se(s)&&(s=s.clone(t)),new qe(r,s)}toJSON(t,r){const s=r?.mapAsMap?new Map:{};return hu(r,s,this)}toString(t,r,s){return t?.doc?Qy(this,t,r,s):JSON.stringify(this)}}function pu(e,t,r){return(t.inFlow??e.flow?sb:rb)(e,t,r)}function rb({comment:e,items:t},r,{blockItemPrefix:s,flowChars:i,itemIndent:n,onChompKeep:o,onComment:a}){const{indent:l,options:{commentString:c}}=r,d=Object.assign({},r,{indent:n,type:null});let p=!1;const u=[];for(let y=0;y<t.length;++y){const g=t[y];let f=null;if(Se(g))!p&&g.spaceBefore&&u.push(""),un(r,u,g.commentBefore,p),g.comment&&(f=g.comment);else if(Ce(g)){const m=Se(g.key)?g.key:null;m&&(!p&&m.spaceBefore&&u.push(""),un(r,u,m.commentBefore,p))}p=!1;let w=jr(g,d,()=>f=null,()=>p=!0);f&&(w+=sr(w,n,c(f))),p&&f&&(p=!1),u.push(s+w)}let h;if(u.length===0)h=i.start+i.end;else{h=u[0];for(let y=1;y<u.length;++y){const g=u[y];h+=g?`
${l}${g}`:`
`}}return e?(h+=`
`+Nt(c(e),l),a&&a()):p&&o&&o(),h}function sb({items:e},t,{flowChars:r,itemIndent:s}){const{indent:i,indentStep:n,flowCollectionPadding:o,options:{commentString:a}}=t;s+=n;const l=Object.assign({},t,{indent:s,inFlow:!0,type:null});let c=!1,d=0;const p=[];for(let y=0;y<e.length;++y){const g=e[y];let f=null;if(Se(g))g.spaceBefore&&p.push(""),un(t,p,g.commentBefore,!1),g.comment&&(f=g.comment);else if(Ce(g)){const m=Se(g.key)?g.key:null;m&&(m.spaceBefore&&p.push(""),un(t,p,m.commentBefore,!1),m.comment&&(c=!0));const v=Se(g.value)?g.value:null;v?(v.comment&&(f=v.comment),v.commentBefore&&(c=!0)):g.value==null&&m?.comment&&(f=m.comment)}f&&(c=!0);let w=jr(g,l,()=>f=null);y<e.length-1&&(w+=","),f&&(w+=sr(w,s,a(f))),!c&&(p.length>d||w.includes(`
`))&&(c=!0),p.push(w),d=p.length}const{start:u,end:h}=r;if(p.length===0)return u+h;if(!c){const y=p.reduce((g,f)=>g+f.length+2,2);c=t.options.lineWidth>0&&y>t.options.lineWidth}if(c){let y=u;for(const g of p)y+=g?`
${n}${i}${g}`:`
`;return`${y}
${i}${h}`}else return`${u}${o}${p.join(" ")}${o}${h}`}function un({indent:e,options:{commentString:t}},r,s,i){if(s&&i&&(s=s.replace(/^\n+/,"")),s){const n=Nt(t(s),e);r.push(n.trimStart())}}function ir(e,t){const r=we(t)?t.value:t;for(const s of e)if(Ce(s)&&(s.key===t||s.key===r||we(s.key)&&s.key.value===r))return s}class nt extends lu{static get tagName(){return"tag:yaml.org,2002:map"}constructor(t){super(Bt,t),this.items=[]}static from(t,r,s){const{keepUndefined:i,replacer:n}=s,o=new this(t),a=(l,c)=>{if(typeof n=="function")c=n.call(r,l,c);else if(Array.isArray(n)&&!n.includes(l))return;(c!==void 0||i)&&o.items.push(ma(l,c,s))};if(r instanceof Map)for(const[l,c]of r)a(l,c);else if(r&&typeof r=="object")for(const l of Object.keys(r))a(l,r[l]);return typeof t.sortMapEntries=="function"&&o.items.sort(t.sortMapEntries),o}add(t,r){let s;Ce(t)?s=t:!t||typeof t!="object"||!("key"in t)?s=new qe(t,t?.value):s=new qe(t.key,t.value);const i=ir(this.items,s.key),n=this.schema?.sortMapEntries;if(i){if(!r)throw new Error(`Key ${s.key} already set`);we(i.value)&&au(s.value)?i.value.value=s.value:i.value=s.value}else if(n){const o=this.items.findIndex(a=>n(s,a)<0);o===-1?this.items.push(s):this.items.splice(o,0,s)}else this.items.push(s)}delete(t){const r=ir(this.items,t);return r?this.items.splice(this.items.indexOf(r),1).length>0:!1}get(t,r){const i=ir(this.items,t)?.value;return(!r&&we(i)?i.value:i)??void 0}has(t){return!!ir(this.items,t)}set(t,r){this.add(new qe(t,r),!0)}toJSON(t,r,s){const i=s?new s:r?.mapAsMap?new Map:{};r?.onCreate&&r.onCreate(i);for(const n of this.items)hu(r,i,n);return i}toString(t,r,s){if(!t)return JSON.stringify(this);for(const i of this.items)if(!Ce(i))throw new Error(`Map items must all be pairs; found ${JSON.stringify(i)} instead`);return!t.allNullValues&&this.hasAllNullValues(!1)&&(t=Object.assign({},t,{allNullValues:!0})),pu(this,t,{blockItemPrefix:"",flowChars:{start:"{",end:"}"},itemIndent:t.indent||"",onChompKeep:s,onComment:r})}}const Wr={collection:"map",default:!0,nodeClass:nt,tag:"tag:yaml.org,2002:map",resolve(e,t){return Is(e)||t("Expected a mapping for this tag"),e},createNode:(e,t,r)=>nt.from(e,t,r)};class ar extends lu{static get tagName(){return"tag:yaml.org,2002:seq"}constructor(t){super(Hr,t),this.items=[]}add(t){this.items.push(t)}delete(t){const r=Bi(t);return typeof r!="number"?!1:this.items.splice(r,1).length>0}get(t,r){const s=Bi(t);if(typeof s!="number")return;const i=this.items[s];return!r&&we(i)?i.value:i}has(t){const r=Bi(t);return typeof r=="number"&&r<this.items.length}set(t,r){const s=Bi(t);if(typeof s!="number")throw new Error(`Expected a valid index, not ${t}.`);const i=this.items[s];we(i)&&au(r)?i.value=r:this.items[s]=r}toJSON(t,r){const s=[];r?.onCreate&&r.onCreate(s);let i=0;for(const n of this.items)s.push(lt(n,String(i++),r));return s}toString(t,r,s){return t?pu(this,t,{blockItemPrefix:"- ",flowChars:{start:"[",end:"]"},itemIndent:(t.indent||"")+"  ",onChompKeep:s,onComment:r}):JSON.stringify(this)}static from(t,r,s){const{replacer:i}=s,n=new this(t);if(r&&Symbol.iterator in Object(r)){let o=0;for(let a of r){if(typeof i=="function"){const l=r instanceof Set?a:String(o++);a=i.call(r,l,a)}n.items.push(ws(a,void 0,s))}}return n}}function Bi(e){let t=we(e)?e.value:e;return t&&typeof t=="string"&&(t=Number(t)),typeof t=="number"&&Number.isInteger(t)&&t>=0?t:null}const Gr={collection:"seq",default:!0,nodeClass:ar,tag:"tag:yaml.org,2002:seq",resolve(e,t){return Rs(e)||t("Expected a sequence for this tag"),e},createNode:(e,t,r)=>ar.from(e,t,r)},Nn={identify:e=>typeof e=="string",default:!0,tag:"tag:yaml.org,2002:str",resolve:e=>e,stringify(e,t,r,s){return t=Object.assign({actualString:!0},t),fa(e,t,r,s)}},Dn={identify:e=>e==null,createNode:()=>new te(null),default:!0,tag:"tag:yaml.org,2002:null",test:/^(?:~|[Nn]ull|NULL)?$/,resolve:()=>new te(null),stringify:({source:e},t)=>typeof e=="string"&&Dn.test.test(e)?e:t.options.nullStr},ga={identify:e=>typeof e=="boolean",default:!0,tag:"tag:yaml.org,2002:bool",test:/^(?:[Tt]rue|TRUE|[Ff]alse|FALSE)$/,resolve:e=>new te(e[0]==="t"||e[0]==="T"),stringify({source:e,value:t},r){if(e&&ga.test.test(e)){const s=e[0]==="t"||e[0]==="T";if(t===s)return e}return t?r.options.trueStr:r.options.falseStr}};function wt({format:e,minFractionDigits:t,tag:r,value:s}){if(typeof s=="bigint")return String(s);const i=typeof s=="number"?s:Number(s);if(!isFinite(i))return isNaN(i)?".nan":i<0?"-.inf":".inf";let n=Object.is(s,-0)?"-0":JSON.stringify(s);if(!e&&t&&(!r||r==="tag:yaml.org,2002:float")&&/^\d/.test(n)){let o=n.indexOf(".");o<0&&(o=n.length,n+=".");let a=t-(n.length-o-1);for(;a-- >0;)n+="0"}return n}const fu={identify:e=>typeof e=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^(?:[-+]?\.(?:inf|Inf|INF)|\.nan|\.NaN|\.NAN)$/,resolve:e=>e.slice(-3).toLowerCase()==="nan"?NaN:e[0]==="-"?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY,stringify:wt},mu={identify:e=>typeof e=="number",default:!0,tag:"tag:yaml.org,2002:float",format:"EXP",test:/^[-+]?(?:\.[0-9]+|[0-9]+(?:\.[0-9]*)?)[eE][-+]?[0-9]+$/,resolve:e=>parseFloat(e),stringify(e){const t=Number(e.value);return isFinite(t)?t.toExponential():wt(e)}},gu={identify:e=>typeof e=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^[-+]?(?:\.[0-9]+|[0-9]+\.[0-9]*)$/,resolve(e){const t=new te(parseFloat(e)),r=e.indexOf(".");return r!==-1&&e[e.length-1]==="0"&&(t.minFractionDigits=e.length-r-1),t},stringify:wt},Ln=e=>typeof e=="bigint"||Number.isInteger(e),ya=(e,t,r,{intAsBigInt:s})=>s?BigInt(e):parseInt(e.substring(t),r);function yu(e,t,r){const{value:s}=e;return Ln(s)&&s>=0?r+s.toString(t):wt(e)}const bu={identify:e=>Ln(e)&&e>=0,default:!0,tag:"tag:yaml.org,2002:int",format:"OCT",test:/^0o[0-7]+$/,resolve:(e,t,r)=>ya(e,2,8,r),stringify:e=>yu(e,8,"0o")},vu={identify:Ln,default:!0,tag:"tag:yaml.org,2002:int",test:/^[-+]?[0-9]+$/,resolve:(e,t,r)=>ya(e,0,10,r),stringify:wt},wu={identify:e=>Ln(e)&&e>=0,default:!0,tag:"tag:yaml.org,2002:int",format:"HEX",test:/^0x[0-9a-fA-F]+$/,resolve:(e,t,r)=>ya(e,2,16,r),stringify:e=>yu(e,16,"0x")},ib=[Wr,Gr,Nn,Dn,ga,bu,vu,wu,fu,mu,gu];function Hc(e){return typeof e=="bigint"||Number.isInteger(e)}const Ui=({value:e})=>JSON.stringify(e),nb=[{identify:e=>typeof e=="string",default:!0,tag:"tag:yaml.org,2002:str",resolve:e=>e,stringify:Ui},{identify:e=>e==null,createNode:()=>new te(null),default:!0,tag:"tag:yaml.org,2002:null",test:/^null$/,resolve:()=>null,stringify:Ui},{identify:e=>typeof e=="boolean",default:!0,tag:"tag:yaml.org,2002:bool",test:/^true$|^false$/,resolve:e=>e==="true",stringify:Ui},{identify:Hc,default:!0,tag:"tag:yaml.org,2002:int",test:/^-?(?:0|[1-9][0-9]*)$/,resolve:(e,t,{intAsBigInt:r})=>r?BigInt(e):parseInt(e,10),stringify:({value:e})=>Hc(e)?e.toString():JSON.stringify(e)},{identify:e=>typeof e=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^-?(?:0|[1-9][0-9]*)(?:\.[0-9]*)?(?:[eE][-+]?[0-9]+)?$/,resolve:e=>parseFloat(e),stringify:Ui}],ob={default:!0,tag:"",test:/^/,resolve(e,t){return t(`Unresolved plain scalar ${JSON.stringify(e)}`),e}},ab=[Wr,Gr].concat(nb,ob),ba={identify:e=>e instanceof Uint8Array,default:!1,tag:"tag:yaml.org,2002:binary",resolve(e,t){if(typeof atob=="function"){const r=atob(e.replace(/[\n\r]/g,"")),s=new Uint8Array(r.length);for(let i=0;i<r.length;++i)s[i]=r.charCodeAt(i);return s}else return t("This environment does not support reading binary tags; either Buffer or atob is required"),e},stringify({comment:e,type:t,value:r},s,i,n){if(!r)return"";const o=r;let a;if(typeof btoa=="function"){let l="";for(let c=0;c<o.length;++c)l+=String.fromCharCode(o[c]);a=btoa(l)}else throw new Error("This environment does not support writing binary tags; either Buffer or btoa is required");if(t??(t=te.BLOCK_LITERAL),t!==te.QUOTE_DOUBLE){const l=Math.max(s.options.lineWidth-s.indent.length,s.options.minContentWidth),c=Math.ceil(a.length/l),d=new Array(c);for(let p=0,u=0;p<c;++p,u+=l)d[p]=a.substr(u,l);a=d.join(t===te.BLOCK_LITERAL?`
`:" ")}return fa({comment:e,type:t,value:a},s,i,n)}};function _u(e,t){if(Rs(e))for(let r=0;r<e.items.length;++r){let s=e.items[r];if(!Ce(s)){if(Is(s)){s.items.length>1&&t("Each pair must have its own sequence indicator");const i=s.items[0]||new qe(new te(null));if(s.commentBefore&&(i.key.commentBefore=i.key.commentBefore?`${s.commentBefore}
${i.key.commentBefore}`:s.commentBefore),s.comment){const n=i.value??i.key;n.comment=n.comment?`${s.comment}
${n.comment}`:s.comment}s=i}e.items[r]=Ce(s)?s:new qe(s)}}else t("Expected a sequence for this tag");return e}function $u(e,t,r){const{replacer:s}=r,i=new ar(e);i.tag="tag:yaml.org,2002:pairs";let n=0;if(t&&Symbol.iterator in Object(t))for(let o of t){typeof s=="function"&&(o=s.call(t,String(n++),o));let a,l;if(Array.isArray(o))if(o.length===2)a=o[0],l=o[1];else throw new TypeError(`Expected [key, value] tuple: ${o}`);else if(o&&o instanceof Object){const c=Object.keys(o);if(c.length===1)a=c[0],l=o[a];else throw new TypeError(`Expected tuple with one key, not ${c.length} keys`)}else a=o;i.items.push(ma(a,l,r))}return i}const va={collection:"seq",default:!1,tag:"tag:yaml.org,2002:pairs",resolve:_u,createNode:$u};class Rr extends ar{constructor(){super(),this.add=nt.prototype.add.bind(this),this.delete=nt.prototype.delete.bind(this),this.get=nt.prototype.get.bind(this),this.has=nt.prototype.has.bind(this),this.set=nt.prototype.set.bind(this),this.tag=Rr.tag}toJSON(t,r){if(!r)return super.toJSON(t);const s=new Map;r?.onCreate&&r.onCreate(s);for(const i of this.items){let n,o;if(Ce(i)?(n=lt(i.key,"",r),o=lt(i.value,n,r)):n=lt(i,"",r),s.has(n))throw new Error("Ordered maps must not include duplicate keys");s.set(n,o)}return s}static from(t,r,s){const i=$u(t,r,s),n=new this;return n.items=i.items,n}}Rr.tag="tag:yaml.org,2002:omap";const wa={collection:"seq",identify:e=>e instanceof Map,nodeClass:Rr,default:!1,tag:"tag:yaml.org,2002:omap",resolve(e,t){const r=_u(e,t),s=[];for(const{key:i}of r.items)we(i)&&(s.includes(i.value)?t(`Ordered maps must not include duplicate keys: ${i.value}`):s.push(i.value));return Object.assign(new Rr,r)},createNode:(e,t,r)=>Rr.from(e,t,r)};function ku({value:e,source:t},r){return t&&(e?xu:Su).test.test(t)?t:e?r.options.trueStr:r.options.falseStr}const xu={identify:e=>e===!0,default:!0,tag:"tag:yaml.org,2002:bool",test:/^(?:Y|y|[Yy]es|YES|[Tt]rue|TRUE|[Oo]n|ON)$/,resolve:()=>new te(!0),stringify:ku},Su={identify:e=>e===!1,default:!0,tag:"tag:yaml.org,2002:bool",test:/^(?:N|n|[Nn]o|NO|[Ff]alse|FALSE|[Oo]ff|OFF)$/,resolve:()=>new te(!1),stringify:ku},lb={identify:e=>typeof e=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^(?:[-+]?\.(?:inf|Inf|INF)|\.nan|\.NaN|\.NAN)$/,resolve:e=>e.slice(-3).toLowerCase()==="nan"?NaN:e[0]==="-"?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY,stringify:wt},cb={identify:e=>typeof e=="number",default:!0,tag:"tag:yaml.org,2002:float",format:"EXP",test:/^[-+]?(?:[0-9][0-9_]*)?(?:\.[0-9_]*)?[eE][-+]?[0-9]+$/,resolve:e=>parseFloat(e.replace(/_/g,"")),stringify(e){const t=Number(e.value);return isFinite(t)?t.toExponential():wt(e)}},db={identify:e=>typeof e=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^[-+]?(?:[0-9][0-9_]*)?\.[0-9_]*$/,resolve(e){const t=new te(parseFloat(e.replace(/_/g,""))),r=e.indexOf(".");if(r!==-1){const s=e.substring(r+1).replace(/_/g,"");s[s.length-1]==="0"&&(t.minFractionDigits=s.length)}return t},stringify:wt},Ns=e=>typeof e=="bigint"||Number.isInteger(e);function zn(e,t,r,{intAsBigInt:s}){const i=e[0];if((i==="-"||i==="+")&&(t+=1),e=e.substring(t).replace(/_/g,""),s){switch(r){case 2:e=`0b${e}`;break;case 8:e=`0o${e}`;break;case 16:e=`0x${e}`;break}const o=BigInt(e);return i==="-"?BigInt(-1)*o:o}const n=parseInt(e,r);return i==="-"?-1*n:n}function _a(e,t,r){const{value:s}=e;if(Ns(s)){const i=s.toString(t);return s<0?"-"+r+i.substr(1):r+i}return wt(e)}const ub={identify:Ns,default:!0,tag:"tag:yaml.org,2002:int",format:"BIN",test:/^[-+]?0b[0-1_]+$/,resolve:(e,t,r)=>zn(e,2,2,r),stringify:e=>_a(e,2,"0b")},hb={identify:Ns,default:!0,tag:"tag:yaml.org,2002:int",format:"OCT",test:/^[-+]?0[0-7_]+$/,resolve:(e,t,r)=>zn(e,1,8,r),stringify:e=>_a(e,8,"0")},pb={identify:Ns,default:!0,tag:"tag:yaml.org,2002:int",test:/^[-+]?[0-9][0-9_]*$/,resolve:(e,t,r)=>zn(e,0,10,r),stringify:wt},fb={identify:Ns,default:!0,tag:"tag:yaml.org,2002:int",format:"HEX",test:/^[-+]?0x[0-9a-fA-F_]+$/,resolve:(e,t,r)=>zn(e,2,16,r),stringify:e=>_a(e,16,"0x")};class Nr extends nt{constructor(t){super(t),this.tag=Nr.tag}add(t){let r;Ce(t)?r=t:t&&typeof t=="object"&&"key"in t&&"value"in t&&t.value===null?r=new qe(t.key,null):r=new qe(t,null),ir(this.items,r.key)||this.items.push(r)}get(t,r){const s=ir(this.items,t);return!r&&Ce(s)?we(s.key)?s.key.value:s.key:s}set(t,r){if(typeof r!="boolean")throw new Error(`Expected boolean value for set(key, value) in a YAML set, not ${typeof r}`);const s=ir(this.items,t);s&&!r?this.items.splice(this.items.indexOf(s),1):!s&&r&&this.items.push(new qe(t))}toJSON(t,r){return super.toJSON(t,r,Set)}toString(t,r,s){if(!t)return JSON.stringify(this);if(this.hasAllNullValues(!0))return super.toString(Object.assign({},t,{allNullValues:!0}),r,s);throw new Error("Set items must all have null values")}static from(t,r,s){const{replacer:i}=s,n=new this(t);if(r&&Symbol.iterator in Object(r))for(let o of r)typeof i=="function"&&(o=i.call(r,o,o)),n.items.push(ma(o,null,s));return n}}Nr.tag="tag:yaml.org,2002:set";const $a={collection:"map",identify:e=>e instanceof Set,nodeClass:Nr,default:!1,tag:"tag:yaml.org,2002:set",createNode:(e,t,r)=>Nr.from(e,t,r),resolve(e,t){if(Is(e)){if(e.hasAllNullValues(!0))return Object.assign(new Nr,e);t("Set items must all have null values")}else t("Expected a mapping for this tag");return e}};function ka(e,t){const r=e[0],s=r==="-"||r==="+"?e.substring(1):e,i=o=>t?BigInt(o):Number(o),n=s.replace(/_/g,"").split(":").reduce((o,a)=>o*i(60)+i(a),i(0));return r==="-"?i(-1)*n:n}function Cu(e){let{value:t}=e,r=o=>o;if(typeof t=="bigint")r=o=>BigInt(o);else if(isNaN(t)||!isFinite(t))return wt(e);let s="";t<0&&(s="-",t*=r(-1));const i=r(60),n=[t%i];return t<60?n.unshift(0):(t=(t-n[0])/i,n.unshift(t%i),t>=60&&(t=(t-n[0])/i,n.unshift(t))),s+n.map(o=>String(o).padStart(2,"0")).join(":").replace(/000000\d*$/,"")}const Eu={identify:e=>typeof e=="bigint"||Number.isInteger(e),default:!0,tag:"tag:yaml.org,2002:int",format:"TIME",test:/^[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+$/,resolve:(e,t,{intAsBigInt:r})=>ka(e,r),stringify:Cu},Au={identify:e=>typeof e=="number",default:!0,tag:"tag:yaml.org,2002:float",format:"TIME",test:/^[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+\.[0-9_]*$/,resolve:e=>ka(e,!1),stringify:Cu},jn={identify:e=>e instanceof Date,default:!0,tag:"tag:yaml.org,2002:timestamp",test:RegExp("^([0-9]{4})-([0-9]{1,2})-([0-9]{1,2})(?:(?:t|T|[ \\t]+)([0-9]{1,2}):([0-9]{1,2}):([0-9]{1,2}(\\.[0-9]+)?)(?:[ \\t]*(Z|[-+][012]?[0-9](?::[0-9]{2})?))?)?$"),resolve(e){const t=e.match(jn.test);if(!t)throw new Error("!!timestamp expects a date, starting with yyyy-mm-dd");const[,r,s,i,n,o,a]=t.map(Number),l=t[7]?Number((t[7]+"00").substr(1,3)):0;let c=Date.UTC(r,s-1,i,n||0,o||0,a||0,l);const d=t[8];if(d&&d!=="Z"){let p=ka(d,!1);Math.abs(p)<30&&(p*=60),c-=6e4*p}return new Date(c)},stringify:({value:e})=>e?.toISOString().replace(/(T00:00:00)?\.000Z$/,"")??""},Kc=[Wr,Gr,Nn,Dn,xu,Su,ub,hb,pb,fb,lb,cb,db,ba,Dt,wa,va,$a,Eu,Au,jn],Wc=new Map([["core",ib],["failsafe",[Wr,Gr,Nn]],["json",ab],["yaml11",Kc],["yaml-1.1",Kc]]),Gc={binary:ba,bool:ga,float:gu,floatExp:mu,floatNaN:fu,floatTime:Au,int:vu,intHex:wu,intOct:bu,intTime:Eu,map:Wr,merge:Dt,null:Dn,omap:wa,pairs:va,seq:Gr,set:$a,timestamp:jn},mb={"tag:yaml.org,2002:binary":ba,"tag:yaml.org,2002:merge":Dt,"tag:yaml.org,2002:omap":wa,"tag:yaml.org,2002:pairs":va,"tag:yaml.org,2002:set":$a,"tag:yaml.org,2002:timestamp":jn};function ho(e,t,r){const s=Wc.get(t);if(s&&!e)return r&&!s.includes(Dt)?s.concat(Dt):s.slice();let i=s;if(!i)if(Array.isArray(e))i=[];else{const n=Array.from(Wc.keys()).filter(o=>o!=="yaml11").map(o=>JSON.stringify(o)).join(", ");throw new Error(`Unknown schema "${t}"; use one of ${n} or define customTags array`)}if(Array.isArray(e))for(const n of e)i=i.concat(n);else typeof e=="function"&&(i=e(i.slice()));return r&&(i=i.concat(Dt)),i.reduce((n,o)=>{const a=typeof o=="string"?Gc[o]:o;if(!a){const l=JSON.stringify(o),c=Object.keys(Gc).map(d=>JSON.stringify(d)).join(", ");throw new Error(`Unknown custom tag ${l}; use one of ${c}`)}return n.includes(a)||n.push(a),n},[])}const gb=(e,t)=>e.key<t.key?-1:e.key>t.key?1:0;class xa{constructor({compat:t,customTags:r,merge:s,resolveKnownTags:i,schema:n,sortMapEntries:o,toStringDefaults:a}){this.compat=Array.isArray(t)?ho(t,"compat"):t?ho(null,t):null,this.name=typeof n=="string"&&n||"core",this.knownTags=i?mb:{},this.tags=ho(r,this.name,s),this.toStringOptions=a??null,Object.defineProperty(this,Bt,{value:Wr}),Object.defineProperty(this,St,{value:Nn}),Object.defineProperty(this,Hr,{value:Gr}),this.sortMapEntries=typeof o=="function"?o:o===!0?gb:null}clone(){const t=Object.create(xa.prototype,Object.getOwnPropertyDescriptors(this));return t.tags=this.tags.slice(),t}}function yb(e,t){const r=[];let s=t.directives===!0;if(t.directives!==!1&&e.directives){const l=e.directives.toString(e);l?(r.push(l),s=!0):e.directives.docStart&&(s=!0)}s&&r.push("---");const i=du(e,t),{commentString:n}=i.options;if(e.commentBefore){r.length!==1&&r.unshift("");const l=n(e.commentBefore);r.unshift(Nt(l,""))}let o=!1,a=null;if(e.contents){if(Se(e.contents)){if(e.contents.spaceBefore&&s&&r.push(""),e.contents.commentBefore){const d=n(e.contents.commentBefore);r.push(Nt(d,""))}i.forceBlockIndent=!!e.comment,a=e.contents.comment}const l=a?void 0:()=>o=!0;let c=jr(e.contents,i,()=>a=null,l);a&&(c+=sr(c,"",n(a))),(c[0]==="|"||c[0]===">")&&r[r.length-1]==="---"?r[r.length-1]=`--- ${c}`:r.push(c)}else r.push(jr(e.contents,i));if(e.directives?.docEnd)if(e.comment){const l=n(e.comment);l.includes(`
`)?(r.push("..."),r.push(Nt(l,""))):r.push(`... ${l}`)}else r.push("...");else{let l=e.comment;l&&o&&(l=l.replace(/^\n+/,"")),l&&((!o||a)&&r[r.length-1]!==""&&r.push(""),r.push(Nt(n(l),"")))}return r.join(`
`)+`
`}let Sa=class Tu{constructor(t,r,s){this.commentBefore=null,this.comment=null,this.errors=[],this.warnings=[],Object.defineProperty(this,ct,{value:Oo});let i=null;typeof r=="function"||Array.isArray(r)?i=r:s===void 0&&r&&(s=r,r=void 0);const n=Object.assign({intAsBigInt:!1,keepSourceTokens:!1,logLevel:"warn",prettyErrors:!0,strict:!0,stringKeys:!1,uniqueKeys:!0,version:"1.2"},s);this.options=n;let{version:o}=n;s?._directives?(this.directives=s._directives.atDocument(),this.directives.yaml.explicit&&(o=this.directives.yaml.version)):this.directives=new Me({version:o}),this.setSchema(o,s),this.contents=t===void 0?null:this.createNode(t,i,s)}clone(){const t=Object.create(Tu.prototype,{[ct]:{value:Oo}});return t.commentBefore=this.commentBefore,t.comment=this.comment,t.errors=this.errors.slice(),t.warnings=this.warnings.slice(),t.options=Object.assign({},this.options),this.directives&&(t.directives=this.directives.clone()),t.schema=this.schema.clone(),t.contents=Se(this.contents)?this.contents.clone(t.schema):this.contents,this.range&&(t.range=this.range.slice()),t}add(t){_r(this.contents)&&this.contents.add(t)}addIn(t,r){_r(this.contents)&&this.contents.addIn(t,r)}createAlias(t,r){if(!t.anchor){const s=nu(this);t.anchor=!r||s.has(r)?ou(r||"a",s):r}return new pa(t.anchor)}createNode(t,r,s){let i;if(typeof r=="function")t=r.call({"":t},"",t),i=r;else if(Array.isArray(r)){const f=m=>typeof m=="number"||m instanceof String||m instanceof Number,w=r.filter(f).map(String);w.length>0&&(r=r.concat(w)),i=r}else s===void 0&&r&&(s=r,r=void 0);const{aliasDuplicateObjects:n,anchorPrefix:o,flow:a,keepUndefined:l,onTagObj:c,tag:d}=s??{},{onAnchor:p,setAnchors:u,sourceObjects:h}=Uy(this,o||"a"),y={aliasDuplicateObjects:n??!0,keepUndefined:l??!1,onAnchor:p,onTagObj:c,replacer:i,schema:this.schema,sourceObjects:h},g=ws(t,d,y);return a&&xe(g)&&(g.flow=!0),u(),g}createPair(t,r,s={}){const i=this.createNode(t,null,s),n=this.createNode(r,null,s);return new qe(i,n)}delete(t){return _r(this.contents)?this.contents.delete(t):!1}deleteIn(t){return cs(t)?this.contents==null?!1:(this.contents=null,!0):_r(this.contents)?this.contents.deleteIn(t):!1}get(t,r){return xe(this.contents)?this.contents.get(t,r):void 0}getIn(t,r){return cs(t)?!r&&we(this.contents)?this.contents.value:this.contents:xe(this.contents)?this.contents.getIn(t,r):void 0}has(t){return xe(this.contents)?this.contents.has(t):!1}hasIn(t){return cs(t)?this.contents!==void 0:xe(this.contents)?this.contents.hasIn(t):!1}set(t,r){this.contents==null?this.contents=dn(this.schema,[t],r):_r(this.contents)&&this.contents.set(t,r)}setIn(t,r){cs(t)?this.contents=r:this.contents==null?this.contents=dn(this.schema,Array.from(t),r):_r(this.contents)&&this.contents.setIn(t,r)}setSchema(t,r={}){typeof t=="number"&&(t=String(t));let s;switch(t){case"1.1":this.directives?this.directives.yaml.version="1.1":this.directives=new Me({version:"1.1"}),s={resolveKnownTags:!1,schema:"yaml-1.1"};break;case"1.2":case"next":this.directives?this.directives.yaml.version=t:this.directives=new Me({version:t}),s={resolveKnownTags:!0,schema:"core"};break;case null:this.directives&&delete this.directives,s=null;break;default:{const i=JSON.stringify(t);throw new Error(`Expected '1.1', '1.2' or null as first argument, but found: ${i}`)}}if(r.schema instanceof Object)this.schema=r.schema;else if(s)this.schema=new xa(Object.assign(s,r));else throw new Error("With a null YAML version, the { schema: Schema } option is required")}toJS({json:t,jsonArg:r,mapAsMap:s,maxAliasCount:i,onAnchor:n,reviver:o}={}){const a={anchors:new Map,doc:this,keep:!t,mapAsMap:s===!0,mapKeyWarned:!1,maxAliasCount:typeof i=="number"?i:100},l=lt(this.contents,r??"",a);if(typeof n=="function")for(const{count:c,res:d}of a.anchors.values())n(d,c);return typeof o=="function"?Ar(o,{"":l},"",l):l}toJSON(t,r){return this.toJS({json:!0,jsonArg:t,mapAsMap:!1,onAnchor:r})}toString(t={}){if(this.errors.length>0)throw new Error("Document with errors cannot be stringified");if("indent"in t&&(!Number.isInteger(t.indent)||Number(t.indent)<=0)){const r=JSON.stringify(t.indent);throw new Error(`"indent" option must be a positive integer, not ${r}`)}return yb(this,t)}};function _r(e){if(xe(e))return!0;throw new Error("Expected a YAML collection as document contents")}class Pu extends Error{constructor(t,r,s,i){super(),this.name=t,this.code=s,this.message=i,this.pos=r}}class ds extends Pu{constructor(t,r,s){super("YAMLParseError",t,r,s)}}class bb extends Pu{constructor(t,r,s){super("YAMLWarning",t,r,s)}}const Yc=(e,t)=>r=>{if(r.pos[0]===-1)return;r.linePos=r.pos.map(a=>t.linePos(a));const{line:s,col:i}=r.linePos[0];r.message+=` at line ${s}, column ${i}`;let n=i-1,o=e.substring(t.lineStarts[s-1],t.lineStarts[s]).replace(/[\n\r]+$/,"");if(n>=60&&o.length>80){const a=Math.min(n-39,o.length-79);o="…"+o.substring(a),n-=a-1}if(o.length>80&&(o=o.substring(0,79)+"…"),s>1&&/^ *$/.test(o.substring(0,n))){let a=e.substring(t.lineStarts[s-2],t.lineStarts[s-1]);a.length>80&&(a=a.substring(0,79)+`…
`),o=a+o}if(/[^ ]/.test(o)){let a=1;const l=r.linePos[1];l?.line===s&&l.col>i&&(a=Math.max(1,Math.min(l.col-i,80-n)));const c=" ".repeat(n)+"^".repeat(a);r.message+=`:

${o}
${c}
`}};function Mr(e,{flow:t,indicator:r,next:s,offset:i,onError:n,parentIndent:o,startOnNewline:a}){let l=!1,c=a,d=a,p="",u="",h=!1,y=!1,g=null,f=null,w=null,m=null,v=null,$=null,b=null;for(const C of e)switch(y&&(C.type!=="space"&&C.type!=="newline"&&C.type!=="comma"&&n(C.offset,"MISSING_CHAR","Tags and anchors must be separated from the next token by white space"),y=!1),g&&(c&&C.type!=="comment"&&C.type!=="newline"&&n(g,"TAB_AS_INDENT","Tabs are not allowed as indentation"),g=null),C.type){case"space":!t&&(r!=="doc-start"||s?.type!=="flow-collection")&&C.source.includes("	")&&(g=C),d=!0;break;case"comment":{d||n(C,"MISSING_CHAR","Comments must be separated from other tokens by white space characters");const O=C.source.substring(1)||" ";p?p+=u+O:p=O,u="",c=!1;break}case"newline":c?p?p+=C.source:(!$||r!=="seq-item-ind")&&(l=!0):u+=C.source,c=!0,h=!0,(f||w)&&(m=C),d=!0;break;case"anchor":f&&n(C,"MULTIPLE_ANCHORS","A node can have at most one anchor"),C.source.endsWith(":")&&n(C.offset+C.source.length-1,"BAD_ALIAS","Anchor ending in : is ambiguous",!0),f=C,b??(b=C.offset),c=!1,d=!1,y=!0;break;case"tag":{w&&n(C,"MULTIPLE_TAGS","A node can have at most one tag"),w=C,b??(b=C.offset),c=!1,d=!1,y=!0;break}case r:(f||w)&&n(C,"BAD_PROP_ORDER",`Anchors and tags must be after the ${C.source} indicator`),$&&n(C,"UNEXPECTED_TOKEN",`Unexpected ${C.source} in ${t??"collection"}`),$=C,c=r==="seq-item-ind"||r==="explicit-key-ind",d=!1;break;case"comma":if(t){v&&n(C,"UNEXPECTED_TOKEN",`Unexpected , in ${t}`),v=C,c=!1,d=!1;break}default:n(C,"UNEXPECTED_TOKEN",`Unexpected ${C.type} token`),c=!1,d=!1}const _=e[e.length-1],S=_?_.offset+_.source.length:i;return y&&s&&s.type!=="space"&&s.type!=="newline"&&s.type!=="comma"&&(s.type!=="scalar"||s.source!=="")&&n(s.offset,"MISSING_CHAR","Tags and anchors must be separated from the next token by white space"),g&&(c&&g.indent<=o||s?.type==="block-map"||s?.type==="block-seq")&&n(g,"TAB_AS_INDENT","Tabs are not allowed as indentation"),{comma:v,found:$,spaceBefore:l,comment:p,hasNewline:h,anchor:f,tag:w,newlineAfterProp:m,end:S,start:b??S}}function _s(e){if(!e)return null;switch(e.type){case"alias":case"scalar":case"double-quoted-scalar":case"single-quoted-scalar":if(e.source.includes(`
`))return!0;if(e.end){for(const t of e.end)if(t.type==="newline")return!0}return!1;case"flow-collection":for(const t of e.items){for(const r of t.start)if(r.type==="newline")return!0;if(t.sep){for(const r of t.sep)if(r.type==="newline")return!0}if(_s(t.key)||_s(t.value))return!0}return!1;default:return!0}}function Do(e,t,r){if(t?.type==="flow-collection"){const s=t.end[0];s.indent===e&&(s.source==="]"||s.source==="}")&&_s(t)&&r(s,"BAD_INDENT","Flow end indicator should be more indented than parent",!0)}}function Ou(e,t,r){const{uniqueKeys:s}=e.options;if(s===!1)return!1;const i=typeof s=="function"?s:(n,o)=>n===o||we(n)&&we(o)&&n.value===o.value;return t.some(n=>i(n.key,r))}const Jc="All mapping items must start at the same column";function vb({composeNode:e,composeEmptyNode:t},r,s,i,n){const o=n?.nodeClass??nt,a=new o(r.schema);r.atRoot&&(r.atRoot=!1);let l=s.offset,c=null;for(const d of s.items){const{start:p,key:u,sep:h,value:y}=d,g=Mr(p,{indicator:"explicit-key-ind",next:u??h?.[0],offset:l,onError:i,parentIndent:s.indent,startOnNewline:!0}),f=!g.found;if(f){if(u&&(u.type==="block-seq"?i(l,"BLOCK_AS_IMPLICIT_KEY","A block sequence may not be used as an implicit map key"):"indent"in u&&u.indent!==s.indent&&i(l,"BAD_INDENT",Jc)),!g.anchor&&!g.tag&&!h){c=g.end,g.comment&&(a.comment?a.comment+=`
`+g.comment:a.comment=g.comment);continue}(g.newlineAfterProp||_s(u))&&i(u??p[p.length-1],"MULTILINE_IMPLICIT_KEY","Implicit keys need to be on a single line")}else g.found?.indent!==s.indent&&i(l,"BAD_INDENT",Jc);r.atKey=!0;const w=g.end,m=u?e(r,u,g,i):t(r,w,p,null,g,i);r.schema.compat&&Do(s.indent,u,i),r.atKey=!1,Ou(r,a.items,m)&&i(w,"DUPLICATE_KEY","Map keys must be unique");const v=Mr(h??[],{indicator:"map-value-ind",next:y,offset:m.range[2],onError:i,parentIndent:s.indent,startOnNewline:!u||u.type==="block-scalar"});if(l=v.end,v.found){f&&(y?.type==="block-map"&&!v.hasNewline&&i(l,"BLOCK_AS_IMPLICIT_KEY","Nested mappings are not allowed in compact mappings"),r.options.strict&&g.start<v.found.offset-1024&&i(m.range,"KEY_OVER_1024_CHARS","The : indicator must be at most 1024 chars after the start of an implicit block mapping key"));const $=y?e(r,y,v,i):t(r,l,h,null,v,i);r.schema.compat&&Do(s.indent,y,i),l=$.range[2];const b=new qe(m,$);r.options.keepSourceTokens&&(b.srcToken=d),a.items.push(b)}else{f&&i(m.range,"MISSING_CHAR","Implicit map keys need to be followed by map values"),v.comment&&(m.comment?m.comment+=`
`+v.comment:m.comment=v.comment);const $=new qe(m);r.options.keepSourceTokens&&($.srcToken=d),a.items.push($)}}return c&&c<l&&i(c,"IMPOSSIBLE","Map comment with trailing content"),a.range=[s.offset,l,c??l],a}function wb({composeNode:e,composeEmptyNode:t},r,s,i,n){const o=n?.nodeClass??ar,a=new o(r.schema);r.atRoot&&(r.atRoot=!1),r.atKey&&(r.atKey=!1);let l=s.offset,c=null;for(const{start:d,value:p}of s.items){const u=Mr(d,{indicator:"seq-item-ind",next:p,offset:l,onError:i,parentIndent:s.indent,startOnNewline:!0});if(!u.found)if(u.anchor||u.tag||p)p?.type==="block-seq"?i(u.end,"BAD_INDENT","All sequence items must start at the same column"):i(l,"MISSING_CHAR","Sequence item without - indicator");else{c=u.end,u.comment&&(a.comment=u.comment);continue}const h=p?e(r,p,u,i):t(r,u.end,d,null,u,i);r.schema.compat&&Do(s.indent,p,i),l=h.range[2],a.items.push(h)}return a.range=[s.offset,l,c??l],a}function Ds(e,t,r,s){let i="";if(e){let n=!1,o="";for(const a of e){const{source:l,type:c}=a;switch(c){case"space":n=!0;break;case"comment":{r&&!n&&s(a,"MISSING_CHAR","Comments must be separated from other tokens by white space characters");const d=l.substring(1)||" ";i?i+=o+d:i=d,o="";break}case"newline":i&&(o+=l),n=!0;break;default:s(a,"UNEXPECTED_TOKEN",`Unexpected ${c} at node end`)}t+=l.length}}return{comment:i,offset:t}}const po="Block collections are not allowed within flow collections",fo=e=>e&&(e.type==="block-map"||e.type==="block-seq");function _b({composeNode:e,composeEmptyNode:t},r,s,i,n){const o=s.start.source==="{",a=o?"flow map":"flow sequence",l=n?.nodeClass??(o?nt:ar),c=new l(r.schema);c.flow=!0;const d=r.atRoot;d&&(r.atRoot=!1),r.atKey&&(r.atKey=!1);let p=s.offset+s.start.source.length;for(let f=0;f<s.items.length;++f){const w=s.items[f],{start:m,key:v,sep:$,value:b}=w,_=Mr(m,{flow:a,indicator:"explicit-key-ind",next:v??$?.[0],offset:p,onError:i,parentIndent:s.indent,startOnNewline:!1});if(!_.found){if(!_.anchor&&!_.tag&&!$&&!b){f===0&&_.comma?i(_.comma,"UNEXPECTED_TOKEN",`Unexpected , in ${a}`):f<s.items.length-1&&i(_.start,"UNEXPECTED_TOKEN",`Unexpected empty item in ${a}`),_.comment&&(c.comment?c.comment+=`
`+_.comment:c.comment=_.comment),p=_.end;continue}!o&&r.options.strict&&_s(v)&&i(v,"MULTILINE_IMPLICIT_KEY","Implicit keys of flow sequence pairs need to be on a single line")}if(f===0)_.comma&&i(_.comma,"UNEXPECTED_TOKEN",`Unexpected , in ${a}`);else if(_.comma||i(_.start,"MISSING_CHAR",`Missing , between ${a} items`),_.comment){let S="";e:for(const C of m)switch(C.type){case"comma":case"space":break;case"comment":S=C.source.substring(1);break e;default:break e}if(S){let C=c.items[c.items.length-1];Ce(C)&&(C=C.value??C.key),C.comment?C.comment+=`
`+S:C.comment=S,_.comment=_.comment.substring(S.length+1)}}if(!o&&!$&&!_.found){const S=b?e(r,b,_,i):t(r,_.end,$,null,_,i);c.items.push(S),p=S.range[2],fo(b)&&i(S.range,"BLOCK_IN_FLOW",po)}else{r.atKey=!0;const S=_.end,C=v?e(r,v,_,i):t(r,S,m,null,_,i);fo(v)&&i(C.range,"BLOCK_IN_FLOW",po),r.atKey=!1;const O=Mr($??[],{flow:a,indicator:"map-value-ind",next:b,offset:C.range[2],onError:i,parentIndent:s.indent,startOnNewline:!1});if(O.found){if(!o&&!_.found&&r.options.strict){if($)for(const z of $){if(z===O.found)break;if(z.type==="newline"){i(z,"MULTILINE_IMPLICIT_KEY","Implicit keys of flow sequence pairs need to be on a single line");break}}_.start<O.found.offset-1024&&i(O.found,"KEY_OVER_1024_CHARS","The : indicator must be at most 1024 chars after the start of an implicit flow sequence key")}}else b&&("source"in b&&b.source?.[0]===":"?i(b,"MISSING_CHAR",`Missing space after : in ${a}`):i(O.start,"MISSING_CHAR",`Missing , or : between ${a} items`));const M=b?e(r,b,O,i):O.found?t(r,O.end,$,null,O,i):null;M?fo(b)&&i(M.range,"BLOCK_IN_FLOW",po):O.comment&&(C.comment?C.comment+=`
`+O.comment:C.comment=O.comment);const D=new qe(C,M);if(r.options.keepSourceTokens&&(D.srcToken=w),o){const z=c;Ou(r,z.items,C)&&i(S,"DUPLICATE_KEY","Map keys must be unique"),z.items.push(D)}else{const z=new nt(r.schema);z.flow=!0,z.items.push(D);const B=(M??C).range;z.range=[C.range[0],B[1],B[2]],c.items.push(z)}p=M?M.range[2]:O.end}}const u=o?"}":"]",[h,...y]=s.end;let g=p;if(h?.source===u)g=h.offset+h.source.length;else{const f=a[0].toUpperCase()+a.substring(1),w=d?`${f} must end with a ${u}`:`${f} in block collection must be sufficiently indented and end with a ${u}`;i(p,d?"MISSING_CHAR":"BAD_INDENT",w),h&&h.source.length!==1&&y.unshift(h)}if(y.length>0){const f=Ds(y,g,r.options.strict,i);f.comment&&(c.comment?c.comment+=`
`+f.comment:c.comment=f.comment),c.range=[s.offset,g,f.offset]}else c.range=[s.offset,g,g];return c}function mo(e,t,r,s,i,n){const o=r.type==="block-map"?vb(e,t,r,s,n):r.type==="block-seq"?wb(e,t,r,s,n):_b(e,t,r,s,n),a=o.constructor;return i==="!"||i===a.tagName?(o.tag=a.tagName,o):(i&&(o.tag=i),o)}function $b(e,t,r,s,i){const n=s.tag,o=n?t.directives.tagName(n.source,u=>i(n,"TAG_RESOLVE_FAILED",u)):null;if(r.type==="block-seq"){const{anchor:u,newlineAfterProp:h}=s,y=u&&n?u.offset>n.offset?u:n:u??n;y&&(!h||h.offset<y.offset)&&i(y,"MISSING_CHAR","Missing newline after block sequence props")}const a=r.type==="block-map"?"map":r.type==="block-seq"?"seq":r.start.source==="{"?"map":"seq";if(!n||!o||o==="!"||o===nt.tagName&&a==="map"||o===ar.tagName&&a==="seq")return mo(e,t,r,i,o);let l=t.schema.tags.find(u=>u.tag===o&&u.collection===a);if(!l){const u=t.schema.knownTags[o];if(u?.collection===a)t.schema.tags.push(Object.assign({},u,{default:!1})),l=u;else return u?i(n,"BAD_COLLECTION_TYPE",`${u.tag} used for ${a} collection, but expects ${u.collection??"scalar"}`,!0):i(n,"TAG_RESOLVE_FAILED",`Unresolved tag: ${o}`,!0),mo(e,t,r,i,o)}const c=mo(e,t,r,i,o,l),d=l.resolve?.(c,u=>i(n,"TAG_RESOLVE_FAILED",u),t.options)??c,p=Se(d)?d:new te(d);return p.range=c.range,p.tag=o,l?.format&&(p.format=l.format),p}function kb(e,t,r){const s=t.offset,i=xb(t,e.options.strict,r);if(!i)return{value:"",type:null,comment:"",range:[s,s,s]};const n=i.mode===">"?te.BLOCK_FOLDED:te.BLOCK_LITERAL,o=t.source?Sb(t.source):[];let a=o.length;for(let g=o.length-1;g>=0;--g){const f=o[g][1];if(f===""||f==="\r")a=g;else break}if(a===0){const g=i.chomp==="+"&&o.length>0?`
`.repeat(Math.max(1,o.length-1)):"";let f=s+i.length;return t.source&&(f+=t.source.length),{value:g,type:n,comment:i.comment,range:[s,f,f]}}let l=t.indent+i.indent,c=t.offset+i.length,d=0;for(let g=0;g<a;++g){const[f,w]=o[g];if(w===""||w==="\r")i.indent===0&&f.length>l&&(l=f.length);else{f.length<l&&r(c+f.length,"MISSING_CHAR","Block scalars with more-indented leading empty lines must use an explicit indentation indicator"),i.indent===0&&(l=f.length),d=g,l===0&&!e.atRoot&&r(c,"BAD_INDENT","Block scalar values in collections must be indented");break}c+=f.length+w.length+1}for(let g=o.length-1;g>=a;--g)o[g][0].length>l&&(a=g+1);let p="",u="",h=!1;for(let g=0;g<d;++g)p+=o[g][0].slice(l)+`
`;for(let g=d;g<a;++g){let[f,w]=o[g];c+=f.length+w.length+1;const m=w[w.length-1]==="\r";if(m&&(w=w.slice(0,-1)),w&&f.length<l){const $=`Block scalar lines must not be less indented than their ${i.indent?"explicit indentation indicator":"first line"}`;r(c-w.length-(m?2:1),"BAD_INDENT",$),f=""}n===te.BLOCK_LITERAL?(p+=u+f.slice(l)+w,u=`
`):f.length>l||w[0]==="	"?(u===" "?u=`
`:!h&&u===`
`&&(u=`

`),p+=u+f.slice(l)+w,u=`
`,h=!0):w===""?u===`
`?p+=`
`:u=`
`:(p+=u+w,u=" ",h=!1)}switch(i.chomp){case"-":break;case"+":for(let g=a;g<o.length;++g)p+=`
`+o[g][0].slice(l);p[p.length-1]!==`
`&&(p+=`
`);break;default:p+=`
`}const y=s+i.length+t.source.length;return{value:p,type:n,comment:i.comment,range:[s,y,y]}}function xb({offset:e,props:t},r,s){if(t[0].type!=="block-scalar-header")return s(t[0],"IMPOSSIBLE","Block scalar header not found"),null;const{source:i}=t[0],n=i[0];let o=0,a="",l=-1;for(let u=1;u<i.length;++u){const h=i[u];if(!a&&(h==="-"||h==="+"))a=h;else{const y=Number(h);!o&&y?o=y:l===-1&&(l=e+u)}}l!==-1&&s(l,"UNEXPECTED_TOKEN",`Block scalar header includes extra characters: ${i}`);let c=!1,d="",p=i.length;for(let u=1;u<t.length;++u){const h=t[u];switch(h.type){case"space":c=!0;case"newline":p+=h.source.length;break;case"comment":r&&!c&&s(h,"MISSING_CHAR","Comments must be separated from other tokens by white space characters"),p+=h.source.length,d=h.source.substring(1);break;case"error":s(h,"UNEXPECTED_TOKEN",h.message),p+=h.source.length;break;default:{const y=`Unexpected token in block scalar header: ${h.type}`;s(h,"UNEXPECTED_TOKEN",y);const g=h.source;g&&typeof g=="string"&&(p+=g.length)}}}return{mode:n,indent:o,chomp:a,comment:d,length:p}}function Sb(e){const t=e.split(/\n( *)/),r=t[0],s=r.match(/^( *)/),n=[s?.[1]?[s[1],r.slice(s[1].length)]:["",r]];for(let o=1;o<t.length;o+=2)n.push([t[o],t[o+1]]);return n}function Cb(e,t,r){const{offset:s,type:i,source:n,end:o}=e;let a,l;const c=(u,h,y)=>r(s+u,h,y);switch(i){case"scalar":a=te.PLAIN,l=Eb(n,c);break;case"single-quoted-scalar":a=te.QUOTE_SINGLE,l=Ab(n,c);break;case"double-quoted-scalar":a=te.QUOTE_DOUBLE,l=Tb(n,c);break;default:return r(e,"UNEXPECTED_TOKEN",`Expected a flow scalar value, but found: ${i}`),{value:"",type:null,comment:"",range:[s,s+n.length,s+n.length]}}const d=s+n.length,p=Ds(o,d,t,r);return{value:l,type:a,comment:p.comment,range:[s,d,p.offset]}}function Eb(e,t){let r="";switch(e[0]){case"	":r="a tab character";break;case",":r="flow indicator character ,";break;case"%":r="directive indicator character %";break;case"|":case">":{r=`block scalar indicator ${e[0]}`;break}case"@":case"`":{r=`reserved character ${e[0]}`;break}}return r&&t(0,"BAD_SCALAR_START",`Plain value cannot start with ${r}`),Iu(e)}function Ab(e,t){return(e[e.length-1]!=="'"||e.length===1)&&t(e.length,"MISSING_CHAR","Missing closing 'quote"),Iu(e.slice(1,-1)).replace(/''/g,"'")}function Iu(e){let t,r;try{t=new RegExp(`(.*?)(?<![ 	])[ 	]*\r?
`,"sy"),r=new RegExp(`[ 	]*(.*?)(?:(?<![ 	])[ 	]*)?\r?
`,"sy")}catch{t=/(.*?)[ \t]*\r?\n/sy,r=/[ \t]*(.*?)[ \t]*\r?\n/sy}let s=t.exec(e);if(!s)return e;let i=s[1],n=" ",o=t.lastIndex;for(r.lastIndex=o;s=r.exec(e);)s[1]===""?n===`
`?i+=n:n=`
`:(i+=n+s[1],n=" "),o=r.lastIndex;const a=/[ \t]*(.*)/sy;return a.lastIndex=o,s=a.exec(e),i+n+(s?.[1]??"")}function Tb(e,t){let r="";for(let s=1;s<e.length-1;++s){const i=e[s];if(!(i==="\r"&&e[s+1]===`
`))if(i===`
`){const{fold:n,offset:o}=Pb(e,s);r+=n,s=o}else if(i==="\\"){let n=e[++s];const o=Ob[n];if(o)r+=o;else if(n===`
`)for(n=e[s+1];n===" "||n==="	";)n=e[++s+1];else if(n==="\r"&&e[s+1]===`
`)for(n=e[++s+1];n===" "||n==="	";)n=e[++s+1];else if(n==="x"||n==="u"||n==="U"){const a={x:2,u:4,U:8}[n];r+=Ib(e,s+1,a,t),s+=a}else{const a=e.substr(s-1,2);t(s-1,"BAD_DQ_ESCAPE",`Invalid escape sequence ${a}`),r+=a}}else if(i===" "||i==="	"){const n=s;let o=e[s+1];for(;o===" "||o==="	";)o=e[++s+1];o!==`
`&&!(o==="\r"&&e[s+2]===`
`)&&(r+=s>n?e.slice(n,s+1):i)}else r+=i}return(e[e.length-1]!=='"'||e.length===1)&&t(e.length,"MISSING_CHAR",'Missing closing "quote'),r}function Pb(e,t){let r="",s=e[t+1];for(;(s===" "||s==="	"||s===`
`||s==="\r")&&!(s==="\r"&&e[t+2]!==`
`);)s===`
`&&(r+=`
`),t+=1,s=e[t+1];return r||(r=" "),{fold:r,offset:t}}const Ob={0:"\0",a:"\x07",b:"\b",e:"\x1B",f:"\f",n:`
`,r:"\r",t:"	",v:"\v",N:"",_:" ",L:"\u2028",P:"\u2029"," ":" ",'"':'"',"/":"/","\\":"\\","	":"	"};function Ib(e,t,r,s){const i=e.substr(t,r),o=i.length===r&&/^[0-9a-fA-F]+$/.test(i)?parseInt(i,16):NaN;if(isNaN(o)){const a=e.substr(t-2,r+2);return s(t-2,"BAD_DQ_ESCAPE",`Invalid escape sequence ${a}`),a}return String.fromCodePoint(o)}function Ru(e,t,r,s){const{value:i,type:n,comment:o,range:a}=t.type==="block-scalar"?kb(e,t,s):Cb(t,e.options.strict,s),l=r?e.directives.tagName(r.source,p=>s(r,"TAG_RESOLVE_FAILED",p)):null;let c;e.options.stringKeys&&e.atKey?c=e.schema[St]:l?c=Rb(e.schema,i,l,r,s):t.type==="scalar"?c=Nb(e,i,t,s):c=e.schema[St];let d;try{const p=c.resolve(i,u=>s(r??t,"TAG_RESOLVE_FAILED",u),e.options);d=we(p)?p:new te(p)}catch(p){const u=p instanceof Error?p.message:String(p);s(r??t,"TAG_RESOLVE_FAILED",u),d=new te(i)}return d.range=a,d.source=i,n&&(d.type=n),l&&(d.tag=l),c.format&&(d.format=c.format),o&&(d.comment=o),d}function Rb(e,t,r,s,i){if(r==="!")return e[St];const n=[];for(const a of e.tags)if(!a.collection&&a.tag===r)if(a.default&&a.test)n.push(a);else return a;for(const a of n)if(a.test?.test(t))return a;const o=e.knownTags[r];return o&&!o.collection?(e.tags.push(Object.assign({},o,{default:!1,test:void 0})),o):(i(s,"TAG_RESOLVE_FAILED",`Unresolved tag: ${r}`,r!=="tag:yaml.org,2002:str"),e[St])}function Nb({atKey:e,directives:t,schema:r},s,i,n){const o=r.tags.find(a=>(a.default===!0||e&&a.default==="key")&&a.test?.test(s))||r[St];if(r.compat){const a=r.compat.find(l=>l.default&&l.test?.test(s))??r[St];if(o.tag!==a.tag){const l=t.tagString(o.tag),c=t.tagString(a.tag),d=`Value may be parsed as either ${l} or ${c}`;n(i,"TAG_RESOLVE_FAILED",d,!0)}}return o}function Db(e,t,r){if(t){r??(r=t.length);for(let s=r-1;s>=0;--s){let i=t[s];switch(i.type){case"space":case"comment":case"newline":e-=i.source.length;continue}for(i=t[++s];i?.type==="space";)e+=i.source.length,i=t[++s];break}}return e}const Lb={composeNode:Nu,composeEmptyNode:Ca};function Nu(e,t,r,s){const i=e.atKey,{spaceBefore:n,comment:o,anchor:a,tag:l}=r;let c,d=!0;switch(t.type){case"alias":c=zb(e,t,s),(a||l)&&s(t,"ALIAS_PROPS","An alias node must not specify any properties");break;case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":case"block-scalar":c=Ru(e,t,l,s),a&&(c.anchor=a.source.substring(1));break;case"block-map":case"block-seq":case"flow-collection":c=$b(Lb,e,t,r,s),a&&(c.anchor=a.source.substring(1));break;default:{const p=t.type==="error"?t.message:`Unsupported token (type: ${t.type})`;s(t,"UNEXPECTED_TOKEN",p),c=Ca(e,t.offset,void 0,null,r,s),d=!1}}return a&&c.anchor===""&&s(a,"BAD_ALIAS","Anchor cannot be an empty string"),i&&e.options.stringKeys&&(!we(c)||typeof c.value!="string"||c.tag&&c.tag!=="tag:yaml.org,2002:str")&&s(l??t,"NON_STRING_KEY","With stringKeys, all keys must be strings"),n&&(c.spaceBefore=!0),o&&(t.type==="scalar"&&t.source===""?c.comment=o:c.commentBefore=o),e.options.keepSourceTokens&&d&&(c.srcToken=t),c}function Ca(e,t,r,s,{spaceBefore:i,comment:n,anchor:o,tag:a,end:l},c){const d={type:"scalar",offset:Db(t,r,s),indent:-1,source:""},p=Ru(e,d,a,c);return o&&(p.anchor=o.source.substring(1),p.anchor===""&&c(o,"BAD_ALIAS","Anchor cannot be an empty string")),i&&(p.spaceBefore=!0),n&&(p.comment=n,p.range[2]=l),p}function zb({options:e},{offset:t,source:r,end:s},i){const n=new pa(r.substring(1));n.source===""&&i(t,"BAD_ALIAS","Alias cannot be an empty string"),n.source.endsWith(":")&&i(t+r.length-1,"BAD_ALIAS","Alias ending in : is ambiguous",!0);const o=t+r.length,a=Ds(s,o,e.strict,i);return n.range=[t,o,a.offset],a.comment&&(n.comment=a.comment),n}function jb(e,t,{offset:r,start:s,value:i,end:n},o){const a=Object.assign({_directives:t},e),l=new Sa(void 0,a),c={atKey:!1,atRoot:!0,directives:l.directives,options:l.options,schema:l.schema},d=Mr(s,{indicator:"doc-start",next:i??n?.[0],offset:r,onError:o,parentIndent:0,startOnNewline:!0});d.found&&(l.directives.docStart=!0,i&&(i.type==="block-map"||i.type==="block-seq")&&!d.hasNewline&&o(d.end,"MISSING_CHAR","Block collection cannot start on same line with directives-end marker")),l.contents=i?Nu(c,i,d,o):Ca(c,d.end,s,null,d,o);const p=l.contents.range[2],u=Ds(n,p,!1,o);return u.comment&&(l.comment=u.comment),l.range=[r,p,u.offset],l}function os(e){if(typeof e=="number")return[e,e+1];if(Array.isArray(e))return e.length===2?e:[e[0],e[1]];const{offset:t,source:r}=e;return[t,t+(typeof r=="string"?r.length:1)]}function Xc(e){let t="",r=!1,s=!1;for(let i=0;i<e.length;++i){const n=e[i];switch(n[0]){case"#":t+=(t===""?"":s?`

`:`
`)+(n.substring(1)||" "),r=!0,s=!1;break;case"%":e[i+1]?.[0]!=="#"&&(i+=1),r=!1;break;default:r||(s=!0),r=!1}}return{comment:t,afterEmptyLine:s}}class Mb{constructor(t={}){this.doc=null,this.atDirectives=!1,this.prelude=[],this.errors=[],this.warnings=[],this.onError=(r,s,i,n)=>{const o=os(r);n?this.warnings.push(new bb(o,s,i)):this.errors.push(new ds(o,s,i))},this.directives=new Me({version:t.version||"1.2"}),this.options=t}decorate(t,r){const{comment:s,afterEmptyLine:i}=Xc(this.prelude);if(s){const n=t.contents;if(r)t.comment=t.comment?`${t.comment}
${s}`:s;else if(i||t.directives.docStart||!n)t.commentBefore=s;else if(xe(n)&&!n.flow&&n.items.length>0){let o=n.items[0];Ce(o)&&(o=o.key);const a=o.commentBefore;o.commentBefore=a?`${s}
${a}`:s}else{const o=n.commentBefore;n.commentBefore=o?`${s}
${o}`:s}}r?(Array.prototype.push.apply(t.errors,this.errors),Array.prototype.push.apply(t.warnings,this.warnings)):(t.errors=this.errors,t.warnings=this.warnings),this.prelude=[],this.errors=[],this.warnings=[]}streamInfo(){return{comment:Xc(this.prelude).comment,directives:this.directives,errors:this.errors,warnings:this.warnings}}*compose(t,r=!1,s=-1){for(const i of t)yield*this.next(i);yield*this.end(r,s)}*next(t){switch(t.type){case"directive":this.directives.add(t.source,(r,s,i)=>{const n=os(t);n[0]+=r,this.onError(n,"BAD_DIRECTIVE",s,i)}),this.prelude.push(t.source),this.atDirectives=!0;break;case"document":{const r=jb(this.options,this.directives,t,this.onError);this.atDirectives&&!r.directives.docStart&&this.onError(t,"MISSING_CHAR","Missing directives-end/doc-start indicator line"),this.decorate(r,!1),this.doc&&(yield this.doc),this.doc=r,this.atDirectives=!1;break}case"byte-order-mark":case"space":break;case"comment":case"newline":this.prelude.push(t.source);break;case"error":{const r=t.source?`${t.message}: ${JSON.stringify(t.source)}`:t.message,s=new ds(os(t),"UNEXPECTED_TOKEN",r);this.atDirectives||!this.doc?this.errors.push(s):this.doc.errors.push(s);break}case"doc-end":{if(!this.doc){const s="Unexpected doc-end without preceding document";this.errors.push(new ds(os(t),"UNEXPECTED_TOKEN",s));break}this.doc.directives.docEnd=!0;const r=Ds(t.end,t.offset+t.source.length,this.doc.options.strict,this.onError);if(this.decorate(this.doc,!0),r.comment){const s=this.doc.comment;this.doc.comment=s?`${s}
${r.comment}`:r.comment}this.doc.range[2]=r.offset;break}default:this.errors.push(new ds(os(t),"UNEXPECTED_TOKEN",`Unsupported token ${t.type}`))}}*end(t=!1,r=-1){if(this.doc)this.decorate(this.doc,!0),yield this.doc,this.doc=null;else if(t){const s=Object.assign({_directives:this.directives},this.options),i=new Sa(void 0,s);this.atDirectives&&this.onError(r,"MISSING_CHAR","Missing directives-end indicator line"),i.range=[0,r,r],this.decorate(i,!1),yield i}}}const Du="\uFEFF",Lu="",zu="",Lo="";function qb(e){switch(e){case Du:return"byte-order-mark";case Lu:return"doc-mode";case zu:return"flow-error-end";case Lo:return"scalar";case"---":return"doc-start";case"...":return"doc-end";case"":case`
`:case`\r
`:return"newline";case"-":return"seq-item-ind";case"?":return"explicit-key-ind";case":":return"map-value-ind";case"{":return"flow-map-start";case"}":return"flow-map-end";case"[":return"flow-seq-start";case"]":return"flow-seq-end";case",":return"comma"}switch(e[0]){case" ":case"	":return"space";case"#":return"comment";case"%":return"directive-line";case"*":return"alias";case"&":return"anchor";case"!":return"tag";case"'":return"single-quoted-scalar";case'"':return"double-quoted-scalar";case"|":case">":return"block-scalar-header"}return null}function pt(e){switch(e){case void 0:case" ":case`
`:case"\r":case"	":return!0;default:return!1}}const Qc=new Set("0123456789ABCDEFabcdef"),Fb=new Set("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-#;/?:@&=+$_.!~*'()"),Hi=new Set(",[]{}"),Vb=new Set(` ,[]{}
\r	`),go=e=>!e||Vb.has(e);class Bb{constructor(){this.atEnd=!1,this.blockScalarIndent=-1,this.blockScalarKeep=!1,this.buffer="",this.flowKey=!1,this.flowLevel=0,this.indentNext=0,this.indentValue=0,this.lineEndPos=null,this.next=null,this.pos=0}*lex(t,r=!1){if(t){if(typeof t!="string")throw TypeError("source is not a string");this.buffer=this.buffer?this.buffer+t:t,this.lineEndPos=null}this.atEnd=!r;let s=this.next??"stream";for(;s&&(r||this.hasChars(1));)s=yield*this.parseNext(s)}atLineEnd(){let t=this.pos,r=this.buffer[t];for(;r===" "||r==="	";)r=this.buffer[++t];return!r||r==="#"||r===`
`?!0:r==="\r"?this.buffer[t+1]===`
`:!1}charAt(t){return this.buffer[this.pos+t]}continueScalar(t){let r=this.buffer[t];if(this.indentNext>0){let s=0;for(;r===" ";)r=this.buffer[++s+t];if(r==="\r"){const i=this.buffer[s+t+1];if(i===`
`||!i&&!this.atEnd)return t+s+1}return r===`
`||s>=this.indentNext||!r&&!this.atEnd?t+s:-1}if(r==="-"||r==="."){const s=this.buffer.substr(t,3);if((s==="---"||s==="...")&&pt(this.buffer[t+3]))return-1}return t}getLine(){let t=this.lineEndPos;return(typeof t!="number"||t!==-1&&t<this.pos)&&(t=this.buffer.indexOf(`
`,this.pos),this.lineEndPos=t),t===-1?this.atEnd?this.buffer.substring(this.pos):null:(this.buffer[t-1]==="\r"&&(t-=1),this.buffer.substring(this.pos,t))}hasChars(t){return this.pos+t<=this.buffer.length}setNext(t){return this.buffer=this.buffer.substring(this.pos),this.pos=0,this.lineEndPos=null,this.next=t,null}peek(t){return this.buffer.substr(this.pos,t)}*parseNext(t){switch(t){case"stream":return yield*this.parseStream();case"line-start":return yield*this.parseLineStart();case"block-start":return yield*this.parseBlockStart();case"doc":return yield*this.parseDocument();case"flow":return yield*this.parseFlowCollection();case"quoted-scalar":return yield*this.parseQuotedScalar();case"block-scalar":return yield*this.parseBlockScalar();case"plain-scalar":return yield*this.parsePlainScalar()}}*parseStream(){let t=this.getLine();if(t===null)return this.setNext("stream");if(t[0]===Du&&(yield*this.pushCount(1),t=t.substring(1)),t[0]==="%"){let r=t.length,s=t.indexOf("#");for(;s!==-1;){const n=t[s-1];if(n===" "||n==="	"){r=s-1;break}else s=t.indexOf("#",s+1)}for(;;){const n=t[r-1];if(n===" "||n==="	")r-=1;else break}const i=(yield*this.pushCount(r))+(yield*this.pushSpaces(!0));return yield*this.pushCount(t.length-i),this.pushNewline(),"stream"}if(this.atLineEnd()){const r=yield*this.pushSpaces(!0);return yield*this.pushCount(t.length-r),yield*this.pushNewline(),"stream"}return yield Lu,yield*this.parseLineStart()}*parseLineStart(){const t=this.charAt(0);if(!t&&!this.atEnd)return this.setNext("line-start");if(t==="-"||t==="."){if(!this.atEnd&&!this.hasChars(4))return this.setNext("line-start");const r=this.peek(3);if((r==="---"||r==="...")&&pt(this.charAt(3)))return yield*this.pushCount(3),this.indentValue=0,this.indentNext=0,r==="---"?"doc":"stream"}return this.indentValue=yield*this.pushSpaces(!1),this.indentNext>this.indentValue&&!pt(this.charAt(1))&&(this.indentNext=this.indentValue),yield*this.parseBlockStart()}*parseBlockStart(){const[t,r]=this.peek(2);if(!r&&!this.atEnd)return this.setNext("block-start");if((t==="-"||t==="?"||t===":")&&pt(r)){const s=(yield*this.pushCount(1))+(yield*this.pushSpaces(!0));return this.indentNext=this.indentValue+1,this.indentValue+=s,yield*this.parseBlockStart()}return"doc"}*parseDocument(){yield*this.pushSpaces(!0);const t=this.getLine();if(t===null)return this.setNext("doc");let r=yield*this.pushIndicators();switch(t[r]){case"#":yield*this.pushCount(t.length-r);case void 0:return yield*this.pushNewline(),yield*this.parseLineStart();case"{":case"[":return yield*this.pushCount(1),this.flowKey=!1,this.flowLevel=1,"flow";case"}":case"]":return yield*this.pushCount(1),"doc";case"*":return yield*this.pushUntil(go),"doc";case'"':case"'":return yield*this.parseQuotedScalar();case"|":case">":return r+=yield*this.parseBlockScalarHeader(),r+=yield*this.pushSpaces(!0),yield*this.pushCount(t.length-r),yield*this.pushNewline(),yield*this.parseBlockScalar();default:return yield*this.parsePlainScalar()}}*parseFlowCollection(){let t,r,s=-1;do t=yield*this.pushNewline(),t>0?(r=yield*this.pushSpaces(!1),this.indentValue=s=r):r=0,r+=yield*this.pushSpaces(!0);while(t+r>0);const i=this.getLine();if(i===null)return this.setNext("flow");if((s!==-1&&s<this.indentNext&&i[0]!=="#"||s===0&&(i.startsWith("---")||i.startsWith("..."))&&pt(i[3]))&&!(s===this.indentNext-1&&this.flowLevel===1&&(i[0]==="]"||i[0]==="}")))return this.flowLevel=0,yield zu,yield*this.parseLineStart();let n=0;for(;i[n]===",";)n+=yield*this.pushCount(1),n+=yield*this.pushSpaces(!0),this.flowKey=!1;switch(n+=yield*this.pushIndicators(),i[n]){case void 0:return"flow";case"#":return yield*this.pushCount(i.length-n),"flow";case"{":case"[":return yield*this.pushCount(1),this.flowKey=!1,this.flowLevel+=1,"flow";case"}":case"]":return yield*this.pushCount(1),this.flowKey=!0,this.flowLevel-=1,this.flowLevel?"flow":"doc";case"*":return yield*this.pushUntil(go),"flow";case'"':case"'":return this.flowKey=!0,yield*this.parseQuotedScalar();case":":{const o=this.charAt(1);if(this.flowKey||pt(o)||o===",")return this.flowKey=!1,yield*this.pushCount(1),yield*this.pushSpaces(!0),"flow"}default:return this.flowKey=!1,yield*this.parsePlainScalar()}}*parseQuotedScalar(){const t=this.charAt(0);let r=this.buffer.indexOf(t,this.pos+1);if(t==="'")for(;r!==-1&&this.buffer[r+1]==="'";)r=this.buffer.indexOf("'",r+2);else for(;r!==-1;){let n=0;for(;this.buffer[r-1-n]==="\\";)n+=1;if(n%2===0)break;r=this.buffer.indexOf('"',r+1)}const s=this.buffer.substring(0,r);let i=s.indexOf(`
`,this.pos);if(i!==-1){for(;i!==-1;){const n=this.continueScalar(i+1);if(n===-1)break;i=s.indexOf(`
`,n)}i!==-1&&(r=i-(s[i-1]==="\r"?2:1))}if(r===-1){if(!this.atEnd)return this.setNext("quoted-scalar");r=this.buffer.length}return yield*this.pushToIndex(r+1,!1),this.flowLevel?"flow":"doc"}*parseBlockScalarHeader(){this.blockScalarIndent=-1,this.blockScalarKeep=!1;let t=this.pos;for(;;){const r=this.buffer[++t];if(r==="+")this.blockScalarKeep=!0;else if(r>"0"&&r<="9")this.blockScalarIndent=Number(r)-1;else if(r!=="-")break}return yield*this.pushUntil(r=>pt(r)||r==="#")}*parseBlockScalar(){let t=this.pos-1,r=0,s;e:for(let n=this.pos;s=this.buffer[n];++n)switch(s){case" ":r+=1;break;case`
`:t=n,r=0;break;case"\r":{const o=this.buffer[n+1];if(!o&&!this.atEnd)return this.setNext("block-scalar");if(o===`
`)break}default:break e}if(!s&&!this.atEnd)return this.setNext("block-scalar");if(r>=this.indentNext){this.blockScalarIndent===-1?this.indentNext=r:this.indentNext=this.blockScalarIndent+(this.indentNext===0?1:this.indentNext);do{const n=this.continueScalar(t+1);if(n===-1)break;t=this.buffer.indexOf(`
`,n)}while(t!==-1);if(t===-1){if(!this.atEnd)return this.setNext("block-scalar");t=this.buffer.length}}let i=t+1;for(s=this.buffer[i];s===" ";)s=this.buffer[++i];if(s==="	"){for(;s==="	"||s===" "||s==="\r"||s===`
`;)s=this.buffer[++i];t=i-1}else if(!this.blockScalarKeep)do{let n=t-1,o=this.buffer[n];o==="\r"&&(o=this.buffer[--n]);const a=n;for(;o===" ";)o=this.buffer[--n];if(o===`
`&&n>=this.pos&&n+1+r>a)t=n;else break}while(!0);return yield Lo,yield*this.pushToIndex(t+1,!0),yield*this.parseLineStart()}*parsePlainScalar(){const t=this.flowLevel>0;let r=this.pos-1,s=this.pos-1,i;for(;i=this.buffer[++s];)if(i===":"){const n=this.buffer[s+1];if(pt(n)||t&&Hi.has(n))break;r=s}else if(pt(i)){let n=this.buffer[s+1];if(i==="\r"&&(n===`
`?(s+=1,i=`
`,n=this.buffer[s+1]):r=s),n==="#"||t&&Hi.has(n))break;if(i===`
`){const o=this.continueScalar(s+1);if(o===-1)break;s=Math.max(s,o-2)}}else{if(t&&Hi.has(i))break;r=s}return!i&&!this.atEnd?this.setNext("plain-scalar"):(yield Lo,yield*this.pushToIndex(r+1,!0),t?"flow":"doc")}*pushCount(t){return t>0?(yield this.buffer.substr(this.pos,t),this.pos+=t,t):0}*pushToIndex(t,r){const s=this.buffer.slice(this.pos,t);return s?(yield s,this.pos+=s.length,s.length):(r&&(yield""),0)}*pushIndicators(){switch(this.charAt(0)){case"!":return(yield*this.pushTag())+(yield*this.pushSpaces(!0))+(yield*this.pushIndicators());case"&":return(yield*this.pushUntil(go))+(yield*this.pushSpaces(!0))+(yield*this.pushIndicators());case"-":case"?":case":":{const t=this.flowLevel>0,r=this.charAt(1);if(pt(r)||t&&Hi.has(r))return t?this.flowKey&&(this.flowKey=!1):this.indentNext=this.indentValue+1,(yield*this.pushCount(1))+(yield*this.pushSpaces(!0))+(yield*this.pushIndicators())}}return 0}*pushTag(){if(this.charAt(1)==="<"){let t=this.pos+2,r=this.buffer[t];for(;!pt(r)&&r!==">";)r=this.buffer[++t];return yield*this.pushToIndex(r===">"?t+1:t,!1)}else{let t=this.pos+1,r=this.buffer[t];for(;r;)if(Fb.has(r))r=this.buffer[++t];else if(r==="%"&&Qc.has(this.buffer[t+1])&&Qc.has(this.buffer[t+2]))r=this.buffer[t+=3];else break;return yield*this.pushToIndex(t,!1)}}*pushNewline(){const t=this.buffer[this.pos];return t===`
`?yield*this.pushCount(1):t==="\r"&&this.charAt(1)===`
`?yield*this.pushCount(2):0}*pushSpaces(t){let r=this.pos-1,s;do s=this.buffer[++r];while(s===" "||t&&s==="	");const i=r-this.pos;return i>0&&(yield this.buffer.substr(this.pos,i),this.pos=r),i}*pushUntil(t){let r=this.pos,s=this.buffer[r];for(;!t(s);)s=this.buffer[++r];return yield*this.pushToIndex(r,!1)}}class Ub{constructor(){this.lineStarts=[],this.addNewLine=t=>this.lineStarts.push(t),this.linePos=t=>{let r=0,s=this.lineStarts.length;for(;r<s;){const n=r+s>>1;this.lineStarts[n]<t?r=n+1:s=n}if(this.lineStarts[r]===t)return{line:r+1,col:1};if(r===0)return{line:0,col:t};const i=this.lineStarts[r-1];return{line:r,col:t-i+1}}}}function Ft(e,t){for(let r=0;r<e.length;++r)if(e[r].type===t)return!0;return!1}function Zc(e){for(let t=0;t<e.length;++t)switch(e[t].type){case"space":case"comment":case"newline":break;default:return t}return-1}function ju(e){switch(e?.type){case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":case"flow-collection":return!0;default:return!1}}function Ki(e){switch(e.type){case"document":return e.start;case"block-map":{const t=e.items[e.items.length-1];return t.sep??t.start}case"block-seq":return e.items[e.items.length-1].start;default:return[]}}function $r(e){if(e.length===0)return[];let t=e.length;e:for(;--t>=0;)switch(e[t].type){case"doc-start":case"explicit-key-ind":case"map-value-ind":case"seq-item-ind":case"newline":break e}for(;e[++t]?.type==="space";);return e.splice(t,e.length)}function ed(e){if(e.start.type==="flow-seq-start")for(const t of e.items)t.sep&&!t.value&&!Ft(t.start,"explicit-key-ind")&&!Ft(t.sep,"map-value-ind")&&(t.key&&(t.value=t.key),delete t.key,ju(t.value)?t.value.end?Array.prototype.push.apply(t.value.end,t.sep):t.value.end=t.sep:Array.prototype.push.apply(t.start,t.sep),delete t.sep)}class Hb{constructor(t){this.atNewLine=!0,this.atScalar=!1,this.indent=0,this.offset=0,this.onKeyLine=!1,this.stack=[],this.source="",this.type="",this.lexer=new Bb,this.onNewLine=t}*parse(t,r=!1){this.onNewLine&&this.offset===0&&this.onNewLine(0);for(const s of this.lexer.lex(t,r))yield*this.next(s);r||(yield*this.end())}*next(t){if(this.source=t,this.atScalar){this.atScalar=!1,yield*this.step(),this.offset+=t.length;return}const r=qb(t);if(r)if(r==="scalar")this.atNewLine=!1,this.atScalar=!0,this.type="scalar";else{switch(this.type=r,yield*this.step(),r){case"newline":this.atNewLine=!0,this.indent=0,this.onNewLine&&this.onNewLine(this.offset+t.length);break;case"space":this.atNewLine&&t[0]===" "&&(this.indent+=t.length);break;case"explicit-key-ind":case"map-value-ind":case"seq-item-ind":this.atNewLine&&(this.indent+=t.length);break;case"doc-mode":case"flow-error-end":return;default:this.atNewLine=!1}this.offset+=t.length}else{const s=`Not a YAML token: ${t}`;yield*this.pop({type:"error",offset:this.offset,message:s,source:t}),this.offset+=t.length}}*end(){for(;this.stack.length>0;)yield*this.pop()}get sourceToken(){return{type:this.type,offset:this.offset,indent:this.indent,source:this.source}}*step(){const t=this.peek(1);if(this.type==="doc-end"&&t?.type!=="doc-end"){for(;this.stack.length>0;)yield*this.pop();this.stack.push({type:"doc-end",offset:this.offset,source:this.source});return}if(!t)return yield*this.stream();switch(t.type){case"document":return yield*this.document(t);case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":return yield*this.scalar(t);case"block-scalar":return yield*this.blockScalar(t);case"block-map":return yield*this.blockMap(t);case"block-seq":return yield*this.blockSequence(t);case"flow-collection":return yield*this.flowCollection(t);case"doc-end":return yield*this.documentEnd(t)}yield*this.pop()}peek(t){return this.stack[this.stack.length-t]}*pop(t){const r=t??this.stack.pop();if(!r)yield{type:"error",offset:this.offset,source:"",message:"Tried to pop an empty stack"};else if(this.stack.length===0)yield r;else{const s=this.peek(1);switch(r.type==="block-scalar"?r.indent="indent"in s?s.indent:0:r.type==="flow-collection"&&s.type==="document"&&(r.indent=0),r.type==="flow-collection"&&ed(r),s.type){case"document":s.value=r;break;case"block-scalar":s.props.push(r);break;case"block-map":{const i=s.items[s.items.length-1];if(i.value){s.items.push({start:[],key:r,sep:[]}),this.onKeyLine=!0;return}else if(i.sep)i.value=r;else{Object.assign(i,{key:r,sep:[]}),this.onKeyLine=!i.explicitKey;return}break}case"block-seq":{const i=s.items[s.items.length-1];i.value?s.items.push({start:[],value:r}):i.value=r;break}case"flow-collection":{const i=s.items[s.items.length-1];!i||i.value?s.items.push({start:[],key:r,sep:[]}):i.sep?i.value=r:Object.assign(i,{key:r,sep:[]});return}default:yield*this.pop(),yield*this.pop(r)}if((s.type==="document"||s.type==="block-map"||s.type==="block-seq")&&(r.type==="block-map"||r.type==="block-seq")){const i=r.items[r.items.length-1];i&&!i.sep&&!i.value&&i.start.length>0&&Zc(i.start)===-1&&(r.indent===0||i.start.every(n=>n.type!=="comment"||n.indent<r.indent))&&(s.type==="document"?s.end=i.start:s.items.push({start:i.start}),r.items.splice(-1,1))}}}*stream(){switch(this.type){case"directive-line":yield{type:"directive",offset:this.offset,source:this.source};return;case"byte-order-mark":case"space":case"comment":case"newline":yield this.sourceToken;return;case"doc-mode":case"doc-start":{const t={type:"document",offset:this.offset,start:[]};this.type==="doc-start"&&t.start.push(this.sourceToken),this.stack.push(t);return}}yield{type:"error",offset:this.offset,message:`Unexpected ${this.type} token in YAML stream`,source:this.source}}*document(t){if(t.value)return yield*this.lineEnd(t);switch(this.type){case"doc-start":{Zc(t.start)!==-1?(yield*this.pop(),yield*this.step()):t.start.push(this.sourceToken);return}case"anchor":case"tag":case"space":case"comment":case"newline":t.start.push(this.sourceToken);return}const r=this.startBlockValue(t);r?this.stack.push(r):yield{type:"error",offset:this.offset,message:`Unexpected ${this.type} token in YAML document`,source:this.source}}*scalar(t){if(this.type==="map-value-ind"){const r=Ki(this.peek(2)),s=$r(r);let i;t.end?(i=t.end,i.push(this.sourceToken),delete t.end):i=[this.sourceToken];const n={type:"block-map",offset:t.offset,indent:t.indent,items:[{start:s,key:t,sep:i}]};this.onKeyLine=!0,this.stack[this.stack.length-1]=n}else yield*this.lineEnd(t)}*blockScalar(t){switch(this.type){case"space":case"comment":case"newline":t.props.push(this.sourceToken);return;case"scalar":if(t.source=this.source,this.atNewLine=!0,this.indent=0,this.onNewLine){let r=this.source.indexOf(`
`)+1;for(;r!==0;)this.onNewLine(this.offset+r),r=this.source.indexOf(`
`,r)+1}yield*this.pop();break;default:yield*this.pop(),yield*this.step()}}*blockMap(t){const r=t.items[t.items.length-1];switch(this.type){case"newline":if(this.onKeyLine=!1,r.value){const s="end"in r.value?r.value.end:void 0;(Array.isArray(s)?s[s.length-1]:void 0)?.type==="comment"?s?.push(this.sourceToken):t.items.push({start:[this.sourceToken]})}else r.sep?r.sep.push(this.sourceToken):r.start.push(this.sourceToken);return;case"space":case"comment":if(r.value)t.items.push({start:[this.sourceToken]});else if(r.sep)r.sep.push(this.sourceToken);else{if(this.atIndentedComment(r.start,t.indent)){const i=t.items[t.items.length-2]?.value?.end;if(Array.isArray(i)){Array.prototype.push.apply(i,r.start),i.push(this.sourceToken),t.items.pop();return}}r.start.push(this.sourceToken)}return}if(this.indent>=t.indent){const s=!this.onKeyLine&&this.indent===t.indent,i=s&&(r.sep||r.explicitKey)&&this.type!=="seq-item-ind";let n=[];if(i&&r.sep&&!r.value){const o=[];for(let a=0;a<r.sep.length;++a){const l=r.sep[a];switch(l.type){case"newline":o.push(a);break;case"space":break;case"comment":l.indent>t.indent&&(o.length=0);break;default:o.length=0}}o.length>=2&&(n=r.sep.splice(o[1]))}switch(this.type){case"anchor":case"tag":i||r.value?(n.push(this.sourceToken),t.items.push({start:n}),this.onKeyLine=!0):r.sep?r.sep.push(this.sourceToken):r.start.push(this.sourceToken);return;case"explicit-key-ind":!r.sep&&!r.explicitKey?(r.start.push(this.sourceToken),r.explicitKey=!0):i||r.value?(n.push(this.sourceToken),t.items.push({start:n,explicitKey:!0})):this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:[this.sourceToken],explicitKey:!0}]}),this.onKeyLine=!0;return;case"map-value-ind":if(r.explicitKey)if(r.sep)if(r.value)t.items.push({start:[],key:null,sep:[this.sourceToken]});else if(Ft(r.sep,"map-value-ind"))this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:n,key:null,sep:[this.sourceToken]}]});else if(ju(r.key)&&!Ft(r.sep,"newline")){const o=$r(r.start),a=r.key,l=r.sep;l.push(this.sourceToken),delete r.key,delete r.sep,this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:o,key:a,sep:l}]})}else n.length>0?r.sep=r.sep.concat(n,this.sourceToken):r.sep.push(this.sourceToken);else if(Ft(r.start,"newline"))Object.assign(r,{key:null,sep:[this.sourceToken]});else{const o=$r(r.start);this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:o,key:null,sep:[this.sourceToken]}]})}else r.sep?r.value||i?t.items.push({start:n,key:null,sep:[this.sourceToken]}):Ft(r.sep,"map-value-ind")?this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:[],key:null,sep:[this.sourceToken]}]}):r.sep.push(this.sourceToken):Object.assign(r,{key:null,sep:[this.sourceToken]});this.onKeyLine=!0;return;case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":{const o=this.flowScalar(this.type);i||r.value?(t.items.push({start:n,key:o,sep:[]}),this.onKeyLine=!0):r.sep?this.stack.push(o):(Object.assign(r,{key:o,sep:[]}),this.onKeyLine=!0);return}default:{const o=this.startBlockValue(t);if(o){if(o.type==="block-seq"){if(!r.explicitKey&&r.sep&&!Ft(r.sep,"newline")){yield*this.pop({type:"error",offset:this.offset,message:"Unexpected block-seq-ind on same line with key",source:this.source});return}}else s&&t.items.push({start:n});this.stack.push(o);return}}}}yield*this.pop(),yield*this.step()}*blockSequence(t){const r=t.items[t.items.length-1];switch(this.type){case"newline":if(r.value){const s="end"in r.value?r.value.end:void 0;(Array.isArray(s)?s[s.length-1]:void 0)?.type==="comment"?s?.push(this.sourceToken):t.items.push({start:[this.sourceToken]})}else r.start.push(this.sourceToken);return;case"space":case"comment":if(r.value)t.items.push({start:[this.sourceToken]});else{if(this.atIndentedComment(r.start,t.indent)){const i=t.items[t.items.length-2]?.value?.end;if(Array.isArray(i)){Array.prototype.push.apply(i,r.start),i.push(this.sourceToken),t.items.pop();return}}r.start.push(this.sourceToken)}return;case"anchor":case"tag":if(r.value||this.indent<=t.indent)break;r.start.push(this.sourceToken);return;case"seq-item-ind":if(this.indent!==t.indent)break;r.value||Ft(r.start,"seq-item-ind")?t.items.push({start:[this.sourceToken]}):r.start.push(this.sourceToken);return}if(this.indent>t.indent){const s=this.startBlockValue(t);if(s){this.stack.push(s);return}}yield*this.pop(),yield*this.step()}*flowCollection(t){const r=t.items[t.items.length-1];if(this.type==="flow-error-end"){let s;do yield*this.pop(),s=this.peek(1);while(s?.type==="flow-collection")}else if(t.end.length===0){switch(this.type){case"comma":case"explicit-key-ind":!r||r.sep?t.items.push({start:[this.sourceToken]}):r.start.push(this.sourceToken);return;case"map-value-ind":!r||r.value?t.items.push({start:[],key:null,sep:[this.sourceToken]}):r.sep?r.sep.push(this.sourceToken):Object.assign(r,{key:null,sep:[this.sourceToken]});return;case"space":case"comment":case"newline":case"anchor":case"tag":!r||r.value?t.items.push({start:[this.sourceToken]}):r.sep?r.sep.push(this.sourceToken):r.start.push(this.sourceToken);return;case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":{const i=this.flowScalar(this.type);!r||r.value?t.items.push({start:[],key:i,sep:[]}):r.sep?this.stack.push(i):Object.assign(r,{key:i,sep:[]});return}case"flow-map-end":case"flow-seq-end":t.end.push(this.sourceToken);return}const s=this.startBlockValue(t);s?this.stack.push(s):(yield*this.pop(),yield*this.step())}else{const s=this.peek(2);if(s.type==="block-map"&&(this.type==="map-value-ind"&&s.indent===t.indent||this.type==="newline"&&!s.items[s.items.length-1].sep))yield*this.pop(),yield*this.step();else if(this.type==="map-value-ind"&&s.type!=="flow-collection"){const i=Ki(s),n=$r(i);ed(t);const o=t.end.splice(1,t.end.length);o.push(this.sourceToken);const a={type:"block-map",offset:t.offset,indent:t.indent,items:[{start:n,key:t,sep:o}]};this.onKeyLine=!0,this.stack[this.stack.length-1]=a}else yield*this.lineEnd(t)}}flowScalar(t){if(this.onNewLine){let r=this.source.indexOf(`
`)+1;for(;r!==0;)this.onNewLine(this.offset+r),r=this.source.indexOf(`
`,r)+1}return{type:t,offset:this.offset,indent:this.indent,source:this.source}}startBlockValue(t){switch(this.type){case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":return this.flowScalar(this.type);case"block-scalar-header":return{type:"block-scalar",offset:this.offset,indent:this.indent,props:[this.sourceToken],source:""};case"flow-map-start":case"flow-seq-start":return{type:"flow-collection",offset:this.offset,indent:this.indent,start:this.sourceToken,items:[],end:[]};case"seq-item-ind":return{type:"block-seq",offset:this.offset,indent:this.indent,items:[{start:[this.sourceToken]}]};case"explicit-key-ind":{this.onKeyLine=!0;const r=Ki(t),s=$r(r);return s.push(this.sourceToken),{type:"block-map",offset:this.offset,indent:this.indent,items:[{start:s,explicitKey:!0}]}}case"map-value-ind":{this.onKeyLine=!0;const r=Ki(t),s=$r(r);return{type:"block-map",offset:this.offset,indent:this.indent,items:[{start:s,key:null,sep:[this.sourceToken]}]}}}return null}atIndentedComment(t,r){return this.type!=="comment"||this.indent<=r?!1:t.every(s=>s.type==="newline"||s.type==="space")}*documentEnd(t){this.type!=="doc-mode"&&(t.end?t.end.push(this.sourceToken):t.end=[this.sourceToken],this.type==="newline"&&(yield*this.pop()))}*lineEnd(t){switch(this.type){case"comma":case"doc-start":case"doc-end":case"flow-seq-end":case"flow-map-end":case"map-value-ind":yield*this.pop(),yield*this.step();break;case"newline":this.onKeyLine=!1;default:t.end?t.end.push(this.sourceToken):t.end=[this.sourceToken],this.type==="newline"&&(yield*this.pop())}}}function Kb(e){const t=e.prettyErrors!==!1;return{lineCounter:e.lineCounter||t&&new Ub||null,prettyErrors:t}}function Wb(e,t={}){const{lineCounter:r,prettyErrors:s}=Kb(t),i=new Hb(r?.addNewLine),n=new Mb(t);let o=null;for(const a of n.compose(i.parse(e),!0,e.length))if(!o)o=a;else if(o.options.logLevel!=="silent"){o.errors.push(new ds(a.range.slice(0,2),"MULTIPLE_DOCS","Source contains multiple documents; please use YAML.parseAllDocuments()"));break}return s&&r&&(o.errors.forEach(Yc(e,r)),o.warnings.forEach(Yc(e,r))),o}let Pr=null;function Mu(e){if(Pr=Wb(e,{keepSourceTokens:!0}),Pr.errors.length>0){const t=Pr.errors.map(r=>r.message).join("; ");throw new Error(`YAML parse error: ${t}`)}return Pr.toJS()}function Gb(e){if(Pr)return Yb(Pr,e);const t=new Sa(e);return qu(t),t.toString({indent:2,lineWidth:0,singleQuote:!1})}function Yb(e,t){const r=e.clone();return r.contents=r.createNode(t),zo(e.contents,r.contents),qu(r),r.toString()}function qu(e){const t=e.contents;if(!t||!("items"in t))return;const r=t.items;if(Array.isArray(r))for(let s=1;s<r.length;s++){const i=r[s];i&&i.key&&(i.key.spaceBefore=!0)}}function zo(e,t){if(!(!e||!t)&&(e.commentBefore&&(t.commentBefore=e.commentBefore),e.comment&&(t.comment=e.comment),e.items&&t.items))for(const r of e.items){const s=r.key?.value??r.key,i=t.items.find(n=>(n.key?.value??n.key)===s);i&&(zo(r,i),zo(r.value,i.value))}}const Jb=/^[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)*$/,Xb=/%[0-9a-fA-F]{2}/;function $s(e){if(!e||e.trim()==="")return{valid:!1,error:"Filename cannot be empty"};if(e.includes("/")||e.includes("\\"))return{valid:!1,error:"Filename cannot contain path separators (/ or \\)"};if(e.includes(".."))return{valid:!1,error:'Filename cannot contain ".." (path traversal)'};if(Xb.test(e))return{valid:!1,error:"Filename cannot contain URL-encoded characters"};for(let t=0;t<e.length;t++){const r=e.charCodeAt(t);if(r<32||r===127)return{valid:!1,error:"Filename cannot contain control characters"}}return Jb.test(e)?{valid:!0}:{valid:!1,error:"Filename must contain only letters, numbers, dashes, underscores, and dots (not consecutive)"}}function Qb(e){if(!e||e.trim()==="")return null;let t=e;t=t.replace(/[/\\]/g,"");try{t=decodeURIComponent(t)}catch{t=t.replace(/%[0-9a-fA-F]{2}/g,"")}return t=t.replace(/[\x00-\x1f\x7f]/g,""),t=t.replace(/\.{2,}/g,"."),t=t.replace(/[^a-zA-Z0-9._-]/g,"_"),t=t.replace(/_+/g,"_"),t=t.replace(/^[._]+|[._]+$/g,""),!t||t.length===0||!$s(t).valid?null:t}const yo={data:{},hierarchy:{order:[],merge:"first"},overrides:{},ccm:{resources:[]}};class Zb{constructor(){this.subscribers=new Set,this.state={manifest:structuredClone(yo),errors:[],isDirty:!1,templates:new Map,activeTemplateId:null}}subscribe(t){return this.subscribers.add(t),t(this.state),()=>this.subscribers.delete(t)}notify(){this.subscribers.forEach(t=>t(this.state))}getState(){return this.state}getManifest(){return this.state.manifest}getResources(){return this.state.manifest.ccm.resources}getResourceById(t){return this.state.manifest.ccm.resources.find(r=>r.id===t)}getResourceReferences(){return this.state.manifest.ccm.resources.map(t=>({type:t.type,name:t.name,alias:t.alias}))}getTemplates(){return this.state.templates}getActiveTemplate(){return this.state.activeTemplateId&&this.state.templates.get(this.state.activeTemplateId)||null}getTemplateById(t){return this.state.templates.get(t)}update(t){t(this.state.manifest),this.state={...this.state,isDirty:!0},this.validate(),this.notify()}setData(t){this.update(r=>{r.data=t})}setDataValue(t,r){this.update(s=>{s.data[t]=r})}deleteDataKey(t){this.update(r=>{delete r.data[t]})}checkDataPathConflict(t){const r=t.split(".");let s=this.state.manifest.data;for(let i=0;i<r.length-1;i++){const n=r[i];if(typeof s!="object"||s===null||Array.isArray(s))return null;const o=s[n];if(o===void 0)return null;if(typeof o!="object"||o===null||Array.isArray(o)){const a=r.slice(0,i+1).join(".");return`Cannot set "${t}": "${a}" is not an object`}s=o}return typeof s=="object"&&s!==null&&!Array.isArray(s)&&r[r.length-1]in s?`A variable with key "${t}" already exists`:null}setDataPath(t,r){const s=t.split(".");if(s.length===1){this.setDataValue(t,r);return}this.update(i=>{let n=i.data;for(let o=0;o<s.length-1;o++){const a=s[o];a in n||(n[a]={});const l=n[a];if(typeof l!="object"||l===null||Array.isArray(l))throw new Error(`Cannot set "${t}": "${s.slice(0,o+1).join(".")}" is not an object`);n=l}n[s[s.length-1]]=r})}deleteDataPath(t){const r=t.split(".");if(r.length===1){this.deleteDataKey(t);return}this.update(s=>{const i=[];let n=s.data;for(let a=0;a<r.length-1;a++){const l=r[a];if(!(l in n))return;const c=n[l];if(typeof c!="object"||c===null||Array.isArray(c))return;i.push({obj:n,key:l}),n=c}const o=r[r.length-1];delete n[o];for(let a=i.length-1;a>=0;a--){const{obj:l,key:c}=i[a],d=l[c];if(Object.keys(d).length===0)delete l[c];else break}})}getFlattenedData(){const t=[],r=(s,i)=>{for(const[n,o]of Object.entries(s)){const a=i?`${i}.${n}`:n;o!==null&&typeof o=="object"&&!Array.isArray(o)?r(o,a):t.push({key:a,value:o})}};return r(this.state.manifest.data,""),t}setHierarchyOrder(t){this.update(r=>{r.hierarchy.order=t})}setHierarchyMerge(t){this.update(r=>{r.hierarchy.merge=t})}setOverride(t,r){this.update(s=>{s.overrides[t]=r})}deleteOverride(t){this.update(r=>{delete r.overrides[t]})}checkOverridePathConflict(t,r){const s=this.state.manifest.overrides[t];if(!s)return null;const i=r.split(".");let n=s;for(let o=0;o<i.length-1;o++){const a=i[o];if(typeof n!="object"||n===null||Array.isArray(n))return null;const l=n[a];if(l===void 0)return null;if(typeof l!="object"||l===null||Array.isArray(l)){const c=i.slice(0,o+1).join(".");return`Cannot set "${r}": "${c}" is not an object`}n=l}return typeof n=="object"&&n!==null&&!Array.isArray(n)&&i[i.length-1]in n?`A variable with key "${r}" already exists`:null}setOverridePath(t,r,s){const i=r.split(".");this.update(n=>{if(n.overrides[t]||(n.overrides[t]={}),i.length===1){n.overrides[t][r]=s;return}let o=n.overrides[t];for(let a=0;a<i.length-1;a++){const l=i[a];l in o||(o[l]={});const c=o[l];if(typeof c!="object"||c===null||Array.isArray(c))throw new Error(`Cannot set "${r}": "${i.slice(0,a+1).join(".")}" is not an object`);o=c}o[i[i.length-1]]=s})}deleteOverridePath(t,r){const s=r.split(".");this.update(i=>{const n=i.overrides[t];if(!n)return;if(s.length===1){delete n[r];return}const o=[];let a=n;for(let c=0;c<s.length-1;c++){const d=s[c];if(!(d in a))return;const p=a[d];if(typeof p!="object"||p===null||Array.isArray(p))return;o.push({obj:a,key:d}),a=p}const l=s[s.length-1];delete a[l];for(let c=o.length-1;c>=0;c--){const{obj:d,key:p}=o[c],u=d[p];if(Object.keys(u).length===0)delete d[p];else break}})}getFlattenedOverride(t){const r=this.state.manifest.overrides[t];if(!r)return[];const s=[],i=(n,o)=>{for(const[a,l]of Object.entries(n)){const c=o?`${o}.${a}`:a;l!==null&&typeof l=="object"&&!Array.isArray(l)?i(l,c):s.push({key:c,value:l})}};return i(r,""),s}setCcmPreMessage(t){this.update(r=>{r.ccm.pre_message=t})}setCcmPostMessage(t){this.update(r=>{r.ccm.post_message=t})}setCcmFailOnError(t){this.update(r=>{r.ccm.fail_on_error=t||void 0})}addResource(t){const r=crypto.randomUUID(),s={...t,id:r};return this.update(i=>{i.ccm.resources=[...i.ccm.resources,s]}),r}updateResource(t,r){this.update(s=>{s.ccm.resources=s.ccm.resources.map(i=>i.id===t?{...r,id:t}:i)})}deleteResource(t){this.update(r=>{r.ccm.resources=r.ccm.resources.filter(s=>s.id!==t)})}reorderResources(t,r){this.update(s=>{const i=[...s.ccm.resources],[n]=i.splice(t,1);i.splice(r,0,n),s.ccm.resources=i})}duplicateResource(t){const r=this.getResourceById(t);if(!r)return;const s=structuredClone(r);s.name=`${s.name}_copy`;const{id:i,...n}=s;return this.addResource(n)}addTemplate(t,r=""){const s=t.endsWith(".jet")?t:`${t}.jet`,i=$s(s);if(!i.valid)throw new Error(`Invalid template filename: ${i.error}`);const n=crypto.randomUUID(),o={id:n,name:s,content:r},a=new Map(this.state.templates);return a.set(n,o),this.state={...this.state,templates:a,isDirty:!0},this.notify(),n}updateTemplateContent(t,r){const s=this.state.templates.get(t);if(!s)return;const i=new Map(this.state.templates);i.set(t,{...s,content:r}),this.state={...this.state,templates:i,isDirty:!0},this.notify()}renameTemplate(t,r){const s=this.state.templates.get(t);if(!s)return;const i=r.endsWith(".jet")?r:`${r}.jet`,n=$s(i);if(!n.valid)throw new Error(`Invalid template filename: ${n.error}`);const o=new Map(this.state.templates);o.set(t,{...s,name:i}),this.state={...this.state,templates:o,isDirty:!0},this.notify()}deleteTemplate(t){if(!this.state.templates.has(t))return;const r=new Map(this.state.templates);r.delete(t);const s=this.state.activeTemplateId===t?null:this.state.activeTemplateId;this.state={...this.state,templates:r,activeTemplateId:s,isDirty:!0},this.notify()}setActiveTemplate(t){t!==null&&!this.state.templates.has(t)||(this.state={...this.state,activeTemplateId:t},this.notify())}validate(){this.state.errors=Oy(this.state.manifest)}getErrors(){return this.state.errors}hasErrors(){return this.state.errors.some(t=>t.severity==="error")}toYaml(){return Gb(this.toExportFormat())}fromYaml(t){try{const r=Mu(t);return this.loadManifest(r)}catch(r){return{success:!1,errors:[r.message]}}}toExportFormat(){const t=this.state.manifest,r={};Object.keys(t.data).length>0&&(r.data=t.data),t.hierarchy.order.length>0&&(r.hierarchy={order:t.hierarchy.order,...t.hierarchy.merge!=="first"?{merge:t.hierarchy.merge}:{}}),Object.keys(t.overrides).length>0&&(r.overrides=t.overrides);const s={};return t.ccm.pre_message&&(s.pre_message=t.ccm.pre_message),t.ccm.post_message&&(s.post_message=t.ccm.post_message),t.ccm.fail_on_error&&(s.fail_on_error=t.ccm.fail_on_error),t.ccm.resources.length>0&&(s.resources=t.ccm.resources.map(i=>this.resourceToExportFormat(i))),Object.keys(s).length>0&&(r.ccm=s),r}resourceToExportFormat(t){const r={...t.properties};return t.alias&&(r.alias=t.alias),t.require?.length&&(r.require=t.require),t.control&&(r.control=t.control),t.health_checks?.length&&(r.health_checks=t.health_checks),{[t.type]:[{[t.name]:Object.keys(r).length>0?r:{}}]}}loadManifest(t){try{const r=this.parseManifestFormat(t);return this.state={...this.state,manifest:r,isDirty:!0},this.validate(),this.notify(),{success:!0}}catch(r){return{success:!1,errors:[r.message]}}}parseManifestFormat(t){if(typeof t!="object"||t===null)throw new Error("Invalid manifest: expected object");const r=t,s=structuredClone(yo);if(r.data&&typeof r.data=="object"&&(s.data=r.data),r.hierarchy&&typeof r.hierarchy=="object"){const i=r.hierarchy;Array.isArray(i.order)&&(s.hierarchy.order=i.order),(i.merge==="first"||i.merge==="deep")&&(s.hierarchy.merge=i.merge)}if(r.overrides&&typeof r.overrides=="object"&&(s.overrides=r.overrides),r.ccm&&typeof r.ccm=="object"){const i=r.ccm;typeof i.pre_message=="string"&&(s.ccm.pre_message=i.pre_message),typeof i.post_message=="string"&&(s.ccm.post_message=i.post_message),typeof i.fail_on_error=="boolean"&&(s.ccm.fail_on_error=i.fail_on_error),Array.isArray(i.resources)&&(s.ccm.resources=i.resources.flatMap(n=>this.parseResources(n)))}return s}parseResources(t){if(typeof t!="object"||t===null)throw new Error("Invalid resource format");const r=t,s=Object.keys(r)[0],i=r[s];if(!Array.isArray(i)||i.length===0)throw new Error(`Invalid resource format for type: ${s}`);const n=[];let o={};for(const a of i){const l=a,c=Object.keys(l)[0],d=l[c]||{};if(c==="defaults"){o={...d};continue}const p={...o,...d},{alias:u,require:h,control:y,health_checks:g,...f}=p;n.push({id:crypto.randomUUID(),type:s,name:c,properties:f,...u&&{alias:u},...h&&{require:h},...y&&{control:y},...g&&{health_checks:g}})}return n}markSaved(){this.state={...this.state,isDirty:!1,lastSaved:new Date},this.notify()}restoreState(t,r){this.state={...this.state,manifest:structuredClone(t),templates:r?new Map(r):new Map,activeTemplateId:null,isDirty:!1},this.validate(),this.notify()}reset(){this.state={manifest:structuredClone(yo),errors:[],isDirty:!1,templates:new Map,activeTemplateId:null},this.notify()}}const G=new Zb,kr="ccm-studio-manifest",ev=2,ks={save(e,t){try{const r={version:ev,manifest:e,templates:Array.from(t.values()),savedAt:new Date().toISOString()};localStorage.setItem(kr,JSON.stringify(r))}catch(r){console.error("Failed to save to localStorage:",r)}},load(){try{const e=localStorage.getItem(kr);if(!e)return null;const t=JSON.parse(e);if(t.version===1)return this.migrateV1(t);const r=t,s=new Map;for(const i of r.templates||[]){const n=$s(i.name);if(n.valid)s.set(i.id,i);else{const o=Qb(i.name);o?(console.warn(`Template filename "${i.name}" was invalid and sanitized to "${o}"`),s.set(i.id,{...i,name:o})):console.error(`Template "${i.name}" skipped: ${n.error}`)}}return{manifest:r.manifest,templates:s}}catch(e){return console.error("Failed to load from localStorage:",e),null}},hasSavedData(){return localStorage.getItem(kr)!==null},getLastSaved(){try{const e=localStorage.getItem(kr);if(!e)return null;const t=JSON.parse(e);return new Date(t.savedAt)}catch{return null}},getSummary(){try{const e=localStorage.getItem(kr);if(!e)return null;const t=JSON.parse(e),r=t.manifest?.ccm?.resources?.length??0,s=t.version===2?t.templates?.length??0:0;return{resourceCount:r,templateCount:s,lastSaved:new Date(t.savedAt)}}catch{return null}},clear(){localStorage.removeItem(kr)},migrateV1(e){return console.info("Migrating localStorage data from v1 to v2 (adding templates support)"),{manifest:e.manifest,templates:new Map}}},tv=1e3;let bo=null;function Fu(){G.subscribe(e=>{e.isDirty&&(bo&&clearTimeout(bo),bo=setTimeout(()=>{ks.save(e.manifest,e.templates),console.debug("Auto-saved to localStorage")},tv))})}function rv(){const e=ks.load();return e?(G.restoreState(e.manifest,e.templates),!0):!1}var Xe=Uint8Array,Ye=Uint16Array,Ea=Int32Array,Aa=new Xe([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Ta=new Xe([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),td=new Xe([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Vu=function(e,t){for(var r=new Ye(31),s=0;s<31;++s)r[s]=t+=1<<e[s-1];for(var i=new Ea(r[30]),s=1;s<30;++s)for(var n=r[s];n<r[s+1];++n)i[n]=n-r[s]<<5|s;return{b:r,r:i}},Bu=Vu(Aa,2),sv=Bu.b,jo=Bu.r;sv[28]=258,jo[258]=28;var iv=Vu(Ta,0),rd=iv.r,Mo=new Ye(32768);for(var _e=0;_e<32768;++_e){var qt=(_e&43690)>>1|(_e&21845)<<1;qt=(qt&52428)>>2|(qt&13107)<<2,qt=(qt&61680)>>4|(qt&3855)<<4,Mo[_e]=((qt&65280)>>8|(qt&255)<<8)>>1}var ms=(function(e,t,r){for(var s=e.length,i=0,n=new Ye(t);i<s;++i)e[i]&&++n[e[i]-1];var o=new Ye(t);for(i=1;i<t;++i)o[i]=o[i-1]+n[i-1]<<1;var a;if(r){a=new Ye(1<<t);var l=15-t;for(i=0;i<s;++i)if(e[i])for(var c=i<<4|e[i],d=t-e[i],p=o[e[i]-1]++<<d,u=p|(1<<d)-1;p<=u;++p)a[Mo[p]>>l]=c}else for(a=new Ye(s),i=0;i<s;++i)e[i]&&(a[i]=Mo[o[e[i]-1]++]>>15-e[i]);return a}),lr=new Xe(288);for(var _e=0;_e<144;++_e)lr[_e]=8;for(var _e=144;_e<256;++_e)lr[_e]=9;for(var _e=256;_e<280;++_e)lr[_e]=7;for(var _e=280;_e<288;++_e)lr[_e]=8;var hn=new Xe(32);for(var _e=0;_e<32;++_e)hn[_e]=5;var nv=ms(lr,9,0),ov=ms(hn,5,0),Uu=function(e){return(e+7)/8|0},Hu=function(e,t,r){return(r==null||r>e.length)&&(r=e.length),new Xe(e.subarray(t,r))},Ot=function(e,t,r){r<<=t&7;var s=t/8|0;e[s]|=r,e[s+1]|=r>>8},as=function(e,t,r){r<<=t&7;var s=t/8|0;e[s]|=r,e[s+1]|=r>>8,e[s+2]|=r>>16},vo=function(e,t){for(var r=[],s=0;s<e.length;++s)e[s]&&r.push({s,f:e[s]});var i=r.length,n=r.slice();if(!i)return{t:Wu,l:0};if(i==1){var o=new Xe(r[0].s+1);return o[r[0].s]=1,{t:o,l:1}}r.sort(function(b,_){return b.f-_.f}),r.push({s:-1,f:25001});var a=r[0],l=r[1],c=0,d=1,p=2;for(r[0]={s:-1,f:a.f+l.f,l:a,r:l};d!=i-1;)a=r[r[c].f<r[p].f?c++:p++],l=r[c!=d&&r[c].f<r[p].f?c++:p++],r[d++]={s:-1,f:a.f+l.f,l:a,r:l};for(var u=n[0].s,s=1;s<i;++s)n[s].s>u&&(u=n[s].s);var h=new Ye(u+1),y=qo(r[d-1],h,0);if(y>t){var s=0,g=0,f=y-t,w=1<<f;for(n.sort(function(_,S){return h[S.s]-h[_.s]||_.f-S.f});s<i;++s){var m=n[s].s;if(h[m]>t)g+=w-(1<<y-h[m]),h[m]=t;else break}for(g>>=f;g>0;){var v=n[s].s;h[v]<t?g-=1<<t-h[v]++-1:++s}for(;s>=0&&g;--s){var $=n[s].s;h[$]==t&&(--h[$],++g)}y=t}return{t:new Xe(h),l:y}},qo=function(e,t,r){return e.s==-1?Math.max(qo(e.l,t,r+1),qo(e.r,t,r+1)):t[e.s]=r},sd=function(e){for(var t=e.length;t&&!e[--t];);for(var r=new Ye(++t),s=0,i=e[0],n=1,o=function(l){r[s++]=l},a=1;a<=t;++a)if(e[a]==i&&a!=t)++n;else{if(!i&&n>2){for(;n>138;n-=138)o(32754);n>2&&(o(n>10?n-11<<5|28690:n-3<<5|12305),n=0)}else if(n>3){for(o(i),--n;n>6;n-=6)o(8304);n>2&&(o(n-3<<5|8208),n=0)}for(;n--;)o(i);n=1,i=e[a]}return{c:r.subarray(0,s),n:t}},ls=function(e,t){for(var r=0,s=0;s<t.length;++s)r+=e[s]*t[s];return r},Ku=function(e,t,r){var s=r.length,i=Uu(t+2);e[i]=s&255,e[i+1]=s>>8,e[i+2]=e[i]^255,e[i+3]=e[i+1]^255;for(var n=0;n<s;++n)e[i+n+4]=r[n];return(i+4+s)*8},id=function(e,t,r,s,i,n,o,a,l,c,d){Ot(t,d++,r),++i[256];for(var p=vo(i,15),u=p.t,h=p.l,y=vo(n,15),g=y.t,f=y.l,w=sd(u),m=w.c,v=w.n,$=sd(g),b=$.c,_=$.n,S=new Ye(19),C=0;C<m.length;++C)++S[m[C]&31];for(var C=0;C<b.length;++C)++S[b[C]&31];for(var O=vo(S,7),M=O.t,D=O.l,z=19;z>4&&!M[td[z-1]];--z);var B=c+5<<3,V=ls(i,lr)+ls(n,hn)+o,X=ls(i,u)+ls(n,g)+o+14+3*z+ls(S,M)+2*S[16]+3*S[17]+7*S[18];if(l>=0&&B<=V&&B<=X)return Ku(t,d,e.subarray(l,l+c));var ae,Z,J,fe;if(Ot(t,d,1+(X<V)),d+=2,X<V){ae=ms(u,h,0),Z=u,J=ms(g,f,0),fe=g;var F=ms(M,D,0);Ot(t,d,v-257),Ot(t,d+5,_-1),Ot(t,d+10,z-4),d+=14;for(var C=0;C<z;++C)Ot(t,d+3*C,M[td[C]]);d+=3*z;for(var P=[m,b],j=0;j<2;++j)for(var I=P[j],C=0;C<I.length;++C){var k=I[C]&31;Ot(t,d,F[k]),d+=M[k],k>15&&(Ot(t,d,I[C]>>5&127),d+=I[C]>>12)}}else ae=nv,Z=lr,J=ov,fe=hn;for(var C=0;C<a;++C){var E=s[C];if(E>255){var k=E>>18&31;as(t,d,ae[k+257]),d+=Z[k+257],k>7&&(Ot(t,d,E>>23&31),d+=Aa[k]);var L=E&31;as(t,d,J[L]),d+=fe[L],L>3&&(as(t,d,E>>5&8191),d+=Ta[L])}else as(t,d,ae[E]),d+=Z[E]}return as(t,d,ae[256]),d+Z[256]},av=new Ea([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),Wu=new Xe(0),lv=function(e,t,r,s,i,n){var o=n.z||e.length,a=new Xe(s+o+5*(1+Math.ceil(o/7e3))+i),l=a.subarray(s,a.length-i),c=n.l,d=(n.r||0)&7;if(t){d&&(l[0]=n.r>>3);for(var p=av[t-1],u=p>>13,h=p&8191,y=(1<<r)-1,g=n.p||new Ye(32768),f=n.h||new Ye(y+1),w=Math.ceil(r/3),m=2*w,v=function(U){return(e[U]^e[U+1]<<w^e[U+2]<<m)&y},$=new Ea(25e3),b=new Ye(288),_=new Ye(32),S=0,C=0,O=n.i||0,M=0,D=n.w||0,z=0;O+2<o;++O){var B=v(O),V=O&32767,X=f[B];if(g[V]=X,f[B]=V,D<=O){var ae=o-O;if((S>7e3||M>24576)&&(ae>423||!c)){d=id(e,l,0,$,b,_,C,M,z,O-z,d),M=S=C=0,z=O;for(var Z=0;Z<286;++Z)b[Z]=0;for(var Z=0;Z<30;++Z)_[Z]=0}var J=2,fe=0,F=h,P=V-X&32767;if(ae>2&&B==v(O-P))for(var j=Math.min(u,ae)-1,I=Math.min(32767,O),k=Math.min(258,ae);P<=I&&--F&&V!=X;){if(e[O+J]==e[O+J-P]){for(var E=0;E<k&&e[O+E]==e[O+E-P];++E);if(E>J){if(J=E,fe=P,E>j)break;for(var L=Math.min(P,E-2),K=0,Z=0;Z<L;++Z){var W=O-P+Z&32767,he=g[W],oe=W-he&32767;oe>K&&(K=oe,X=W)}}}V=X,X=g[V],P+=V-X&32767}if(fe){$[M++]=268435456|jo[J]<<18|rd[fe];var T=jo[J]&31,R=rd[fe]&31;C+=Aa[T]+Ta[R],++b[257+T],++_[R],D=O+J,++S}else $[M++]=e[O],++b[e[O]]}}for(O=Math.max(O,D);O<o;++O)$[M++]=e[O],++b[e[O]];d=id(e,l,c,$,b,_,C,M,z,O-z,d),c||(n.r=d&7|l[d/8|0]<<3,d-=7,n.h=f,n.p=g,n.i=O,n.w=D)}else{for(var O=n.w||0;O<o+c;O+=65535){var q=O+65535;q>=o&&(l[d/8|0]=c,q=o),d=Ku(l,d+1,e.subarray(O,q))}n.i=o}return Hu(a,0,s+Uu(d)+i)},cv=(function(){for(var e=new Int32Array(256),t=0;t<256;++t){for(var r=t,s=9;--s;)r=(r&1&&-306674912)^r>>>1;e[t]=r}return e})(),dv=function(){var e=-1;return{p:function(t){for(var r=e,s=0;s<t.length;++s)r=cv[r&255^t[s]]^r>>>8;e=r},d:function(){return~e}}},uv=function(e,t,r,s,i){if(!i&&(i={l:1},t.dictionary)){var n=t.dictionary.subarray(-32768),o=new Xe(n.length+e.length);o.set(n),o.set(e,n.length),e=o,i.w=n.length}return lv(e,t.level==null?6:t.level,t.mem==null?i.l?Math.ceil(Math.max(8,Math.min(13,Math.log(e.length)))*1.5):20:12+t.mem,r,s,i)},Fo=function(e,t,r){for(;r;++t)e[t]=r,r>>>=8},hv=function(e,t){var r=t.filename;if(e[0]=31,e[1]=139,e[2]=8,e[8]=t.level<2?4:t.level==9?2:0,e[9]=3,t.mtime!=0&&Fo(e,4,Math.floor(new Date(t.mtime||Date.now())/1e3)),r){e[3]=8;for(var s=0;s<=r.length;++s)e[s+10]=r.charCodeAt(s)}},pv=function(e){return 10+(e.filename?e.filename.length+1:0)};function fv(e,t){t||(t={});var r=dv(),s=e.length;r.p(e);var i=uv(e,t,pv(t),8),n=i.length;return hv(i,t),Fo(i,n-8,r.d()),Fo(i,n-4,s),i}var nd=typeof TextEncoder<"u"&&new TextEncoder,mv=typeof TextDecoder<"u"&&new TextDecoder,gv=0;try{mv.decode(Wu,{stream:!0}),gv=1}catch{}function yv(e,t){var r;if(nd)return nd.encode(e);for(var s=e.length,i=new Xe(e.length+(e.length>>1)),n=0,o=function(c){i[n++]=c},r=0;r<s;++r){if(n+5>i.length){var a=new Xe(n+8+(s-r<<1));a.set(i),i=a}var l=e.charCodeAt(r);l<128||t?o(l):l<2048?(o(192|l>>6),o(128|l&63)):l>55295&&l<57344?(l=65536+(l&1047552)|e.charCodeAt(++r)&1023,o(240|l>>18),o(128|l>>12&63),o(128|l>>6&63),o(128|l&63)):(o(224|l>>12),o(128|l>>6&63),o(128|l&63))}return Hu(i,0,n)}const Or=512,bv=["manifest.yaml","manifest.json"];function vv(e){wv(e);const t=_v(e);return fv(t)}function wv(e){const t=[];for(const r of e){if(r.path.startsWith("/")||r.path.startsWith("\\")){t.push(`"${r.path}": absolute paths not allowed`);continue}if(r.path.includes("..")){t.push(`"${r.path}": path traversal not allowed`);continue}if(!bv.includes(r.path))if(r.path.startsWith("templates/")){const s=r.path.slice(10),i=$s(s);i.valid||t.push(`"${r.path}": ${i.error}`)}else t.push(`"${r.path}": only manifest.yaml and templates/* allowed`)}if(t.length>0)throw new Error(`Invalid archive files:
${t.join(`
`)}`)}function _v(e){const t=[];for(const n of e){const o=yv(n.content),a=$v(n.path,o.length);t.push(a),t.push(o);const l=Or-o.length%Or;l<Or&&t.push(new Uint8Array(l))}t.push(new Uint8Array(Or*2));const r=t.reduce((n,o)=>n+o.length,0),s=new Uint8Array(r);let i=0;for(const n of t)s.set(n,i),i+=n.length;return s}function $v(e,t){const r=new Uint8Array(Or),s=new TextEncoder,i=s.encode(e);r.set(i.slice(0,100),0),xr(r,100,420,8),xr(r,108,0,8),xr(r,116,0,8),xr(r,124,t,12);const n=Math.floor(Date.now()/1e3);xr(r,136,n,12);for(let l=148;l<156;l++)r[l]=32;r[156]=48;const o=s.encode("ustar\0");r.set(o,257),r[263]=48,r[264]=48;let a=0;for(let l=0;l<Or;l++)a+=r[l];return xr(r,148,a,7),r[155]=32,r}function xr(e,t,r,s){const i=r.toString(8).padStart(s-1,"0"),o=new TextEncoder().encode(i);e.set(o.slice(0,s-1),t),e[t+s-1]=0}function kv(e={}){const t=G.toYaml(),r=e.filename||"manifest.yaml";let s=t;e.includeComments&&(s=`# CCM Manifest
# Generated by CCM Studio
# ${new Date().toISOString()}

${t}`),Sv(s,r,"text/yaml")}function xv(e={}){const t=[];let r=G.toYaml();e.includeHeaderComment&&(r=`# CCM Manifest
# Generated by CCM Studio
# ${new Date().toISOString()}

${r}`),t.push({path:"manifest.yaml",content:r});const s=G.getTemplates();for(const o of s.values())t.push({path:`templates/${o.name}`,content:o.content});const i=vv(t),n=e.filename||"manifest.tar.gz";Cv(i,n,"application/gzip")}function Sv(e,t,r){const s=new Blob([e],{type:r});Gu(s,t)}function Cv(e,t,r){const s=new Blob([e],{type:r});Gu(s,t)}function Gu(e,t){const r=URL.createObjectURL(e),s=document.createElement("a");s.href=r,s.download=t,document.body.appendChild(s),s.click(),document.body.removeChild(s),URL.revokeObjectURL(r)}function Ev(){G.getTemplates().size>0?xv():kv()}function Av(e,t){const r=[];let s;try{t?.endsWith(".json")||e.trim().startsWith("{")?s=JSON.parse(e):s=Mu(e)}catch(a){return{success:!1,errors:[`Parse error: ${a.message}`]}}if(typeof s!="object"||s===null)return{success:!1,errors:["Invalid manifest: expected an object"]};const i=s,n=["data","hierarchy","overrides","ccm"];Object.keys(i).forEach(a=>{n.includes(a)||r.push(`Unknown top-level key '${a}' will be ignored`)});const o=G.loadManifest(s);return o.success?{success:!0,warnings:r.length>0?r:void 0}:{success:!1,errors:o.errors}}var Tv=Object.defineProperty,Pv=Object.getOwnPropertyDescriptor,Mn=(e,t,r,s)=>{for(var i=s>1?void 0:s?Pv(t,r):t,n=e.length-1,o;n>=0;n--)(o=e[n])&&(i=(s?o(t,r,i):o(i))||i);return s&&i&&Tv(t,r,i),i};let qr=class extends Ee{constructor(){super(...arguments),this.isDirty=!1,this.hasErrors=!1,this.logoUrl="/logo-circle.svg"}render(){return N`
      <div class="header">
        <div class="branding">
          <div class="logo">
            <img src=${this.logoUrl} alt="CCM Studio Logo">
          </div>
          <span class="title">CCM Studio</span>
          ${this.isDirty?N`<div class="dirty-indicator" title="Unsaved changes"></div>`:""}
        </div>

        <div class="actions">
          ${this.hasErrors?N`<span class="error-badge">
                <sl-icon name="exclamation-triangle"></sl-icon>
                <span class="error-text">Validation errors</span>
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
              <sl-icon slot="prefix" name="three-dots-vertical"></sl-icon>
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
    `}handleNew(){this.dispatchEvent(new CustomEvent("new-manifest"))}handleExport(){this.dispatchEvent(new CustomEvent("export-yaml"))}async handleImportFile(){const e=document.createElement("input");e.type="file",e.accept=".yaml,.yml",e.onchange=async()=>{const t=e.files?.[0];if(t){const r=await t.text();this.dispatchEvent(new CustomEvent("import-yaml",{detail:r}))}},e.click()}async handleImportClipboard(){try{const e=await navigator.clipboard.readText();this.dispatchEvent(new CustomEvent("import-yaml",{detail:e}))}catch(e){console.error("Failed to read clipboard:",e)}}};qr.styles=ie`
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

      .actions {
        gap: 4px;
      }

      /* Hide button labels and make buttons square/icon-only */
      sl-button::part(label) {
        display: none;
      }

      sl-button::part(base) {
        padding: 0;
        min-width: 32px;
        justify-content: center;
      }

      sl-button::part(prefix) {
        margin: 0;
      }

      /* Dropdown trigger buttons with caret */
      sl-dropdown sl-button::part(base) {
        min-width: 40px;
      }

      .error-text {
        display: none;
      }
    }

    @media (max-width: 420px) {
      .title {
        display: none;
      }

      .branding {
        gap: 8px;
      }

      .actions {
        gap: 2px;
      }

      .error-badge {
        margin-right: 4px;
      }
    }
  `;Mn([A({type:Boolean})],qr.prototype,"isDirty",2);Mn([A({type:Boolean})],qr.prototype,"hasErrors",2);Mn([A({type:String})],qr.prototype,"logoUrl",2);qr=Mn([Ze("ccm-header")],qr);var Ov=Object.defineProperty,Iv=Object.getOwnPropertyDescriptor,Yr=(e,t,r,s)=>{for(var i=s>1?void 0:s?Iv(t,r):t,n=e.length-1,o;n>=0;n--)(o=e[n])&&(i=(s?o(t,r,i):o(i))||i);return s&&i&&Ov(t,r,i),i};let Wt=class extends Ee{constructor(){super(...arguments),this.collapsed=!1,this.mobile=!1,this.yaml="",this.showCopyToast=!1}connectedCallback(){super.connectedCallback(),this.unsubscribe=G.subscribe(e=>{this.storeState=e,this.yaml=G.toYaml()})}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribe?.()}render(){if(this.collapsed){const t=this.mobile?"chevron-up":"chevron-left",r=this.mobile?"top":"left";return N`
        <div class="collapsed-content">
          <sl-tooltip content="Expand panel" placement=${r}>
            <sl-icon-button
              name=${t}
              label="Expand YAML panel"
              @click=${this.handleToggle}
            ></sl-icon-button>
          </sl-tooltip>
          <span class="collapsed-label">YAML</span>
        </div>
      `}const e=this.storeState?.errors.filter(t=>t.severity==="error")??[];return N`
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

      ${e.length>0?N`
        <div class="error-banner">
          <strong>Validation Errors</strong>
          <ul>
            ${e.map(t=>N`<li>${t.path}: ${t.message}</li>`)}
          </ul>
        </div>
      `:""}

      <div class="yaml-content">
        ${this.hasContent()?N`<pre>${this.highlightYaml(this.yaml)}</pre>`:N`
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
    `}hasContent(){const e=this.yaml.trim();return e!==""&&e!=="{}"}highlightYaml(e){const r=e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/^(\s*)(#.*)$/gm,'$1<span class="yaml-comment">$2</span>').replace(/^(\s*)([\w_-]+):/gm,'$1<span class="yaml-key">$2</span>:').replace(/: (true|false)$/gm,': <span class="yaml-boolean">$1</span>').replace(/: (\d+(?:\.\d+)?)$/gm,': <span class="yaml-number">$1</span>').replace(/: null$/gm,': <span class="yaml-null">null</span>').replace(/: "([^"]*)"$/gm,': <span class="yaml-string">"$1"</span>').replace(/: '([^']*)'$/gm,`: <span class="yaml-string">'$1'</span>`);return na(r)}async handleCopy(){try{await navigator.clipboard.writeText(this.yaml),this.showCopyToast=!0,setTimeout(()=>{this.showCopyToast=!1},2e3)}catch(e){console.error("Failed to copy:",e),this.showImportError(["Failed to copy to clipboard"])}}async handlePaste(){try{const e=await navigator.clipboard.readText(),t=G.fromYaml(e);t.success||this.showImportError(t.errors??["Unknown parse error"])}catch(e){console.error("Failed to paste:",e),this.showImportError([e.message])}}showImportError(e){const t=Object.assign(document.createElement("sl-alert"),{variant:"danger",closable:!0,duration:5e3});t.innerHTML=`
      <sl-icon slot="icon" name="exclamation-octagon"></sl-icon>
      <strong>Import Failed</strong><br>
      ${e.map(r=>this.escapeHtml(r)).join("<br>")}
    `,document.body.appendChild(t),t.toast()}escapeHtml(e){const t=document.createElement("div");return t.textContent=e,t.innerHTML}handleToggle(){this.dispatchEvent(new CustomEvent("toggle-collapse"))}};Wt.styles=ie`
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
      border-left: 1px solid #475569;
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
  `;Yr([A({type:Boolean,reflect:!0})],Wt.prototype,"collapsed",2);Yr([A({type:Boolean,reflect:!0})],Wt.prototype,"mobile",2);Yr([H()],Wt.prototype,"storeState",2);Yr([H()],Wt.prototype,"yaml",2);Yr([H()],Wt.prototype,"showCopyToast",2);Wt=Yr([Ze("ccm-yaml-panel")],Wt);var Rv=Object.defineProperty,Nv=Object.getOwnPropertyDescriptor,Ls=(e,t,r,s)=>{for(var i=s>1?void 0:s?Nv(t,r):t,n=e.length-1,o;n>=0;n--)(o=e[n])&&(i=(s?o(t,r,i):o(i))||i);return s&&i&&Rv(t,r,i),i};let cr=class extends Ee{constructor(){super(...arguments),this.newKey="",this.newType="string",this.keyError=""}connectedCallback(){super.connectedCallback(),this.unsubscribe=G.subscribe(e=>{this.storeState=e,this.requestUpdate()})}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribe?.()}render(){const e=this.storeState?.manifest.data??{},t=this.dataToEntries(e);return N`
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

      ${t.length>0?N`
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
      `:N`
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
      ${this.keyError?N`<div class="key-error">${this.keyError}</div>`:""}
      </div>
    `}renderDataRow(e){return N`
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
    `}renderValueEditor(e){switch(e.type){case"boolean":return N`
          <sl-switch
            ?checked=${e.value===!0}
            @sl-change=${r=>this.handleValueChange(e.key,r.target.checked)}
          >
            ${e.value?"true":"false"}
          </sl-switch>
        `;case"number":return N`
          <sl-input
            type="number"
            size="small"
            .value=${String(e.value??"")}
            @sl-change=${r=>this.handleValueChange(e.key,parseFloat(r.target.value))}
          ></sl-input>
        `;case"array":const t=Array.isArray(e.value)?e.value:[];return N`
          <div class="array-editor">
            ${t.map((r,s)=>N`
              <div class="array-item">
                <sl-input
                  size="small"
                  .value=${String(r)}
                  @sl-change=${i=>this.handleArrayItemChange(e.key,s,i.target.value)}
                ></sl-input>
                <sl-icon-button
                  name="x"
                  label="Remove item"
                  @click=${()=>this.handleArrayItemRemove(e.key,s)}
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
        `;default:return N`
          <sl-input
            size="small"
            .value=${String(e.value??"")}
            @sl-change=${r=>this.handleValueChange(e.key,r.target.value)}
          ></sl-input>
        `}}dataToEntries(e){return G.getFlattenedData().map(({key:t,value:r})=>({key:t,value:r,type:this.inferType(r)}))}inferType(e){return Array.isArray(e)?"array":typeof e=="boolean"?"boolean":typeof e=="number"?"number":"string"}getDefaultValue(e){switch(e){case"boolean":return!1;case"number":return 0;case"array":return[];default:return""}}handleKeyInput(e){const t=e.target.value;if(this.newKey=t,!t){this.keyError="";return}const s=t.split(".").find(n=>!/^[a-zA-Z_][a-zA-Z0-9_]*$/.test(n));if(s!==void 0){s===""?this.keyError="Invalid key: empty segment (consecutive dots or leading/trailing dot)":this.keyError=`Invalid segment "${s}": must be a valid identifier`;return}const i=G.checkDataPathConflict(t);if(i){this.keyError=i;return}this.keyError=""}handleAdd(){const e=this.newKey.trim();!e||this.keyError||(G.setDataPath(e,this.getDefaultValue(this.newType)),this.newKey="",this.keyError="")}handleAddKeydown(e){e.key==="Enter"&&!this.keyError&&this.handleAdd()}handleValueChange(e,t){G.setDataPath(e,t)}handleDelete(e){G.deleteDataPath(e)}getValueAtPath(e){const t=e.split(".");let r=this.storeState.manifest.data;for(const s of t){if(r==null||typeof r!="object")return;r=r[s]}return r}handleArrayItemChange(e,t,r){const s=this.getValueAtPath(e);if(!Array.isArray(s))return;const i=[...s];i[t]=r,G.setDataPath(e,i)}handleArrayItemAdd(e){const t=this.getValueAtPath(e);Array.isArray(t)&&G.setDataPath(e,[...t,""])}handleArrayItemRemove(e,t){const r=this.getValueAtPath(e);if(!Array.isArray(r))return;const s=r.filter((i,n)=>n!==t);G.setDataPath(e,s)}};cr.styles=ie`
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
  `;Ls([H()],cr.prototype,"storeState",2);Ls([H()],cr.prototype,"newKey",2);Ls([H()],cr.prototype,"newType",2);Ls([H()],cr.prototype,"keyError",2);cr=Ls([Ze("ccm-data-editor")],cr);var Dv=Object.defineProperty,Lv=Object.getOwnPropertyDescriptor,mr=(e,t,r,s)=>{for(var i=s>1?void 0:s?Lv(t,r):t,n=e.length-1,o;n>=0;n--)(o=e[n])&&(i=(s?o(t,r,i):o(i))||i);return s&&i&&Dv(t,r,i),i};let Lt=class extends Ee{constructor(){super(...arguments),this.openSections=new Set,this.newOverrideKey="",this.newEntryKeys={},this.newEntryTypes={},this.entryKeyErrors={}}connectedCallback(){super.connectedCallback(),this.unsubscribe=G.subscribe(e=>{this.storeState=e})}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribe?.()}render(){const e=this.storeState?.manifest.overrides??{},t=Object.keys(e),r=this.storeState?.manifest.hierarchy.order??[],s=this.generateSuggestions(r,t);return N`
      <div class="section-header">
        <span class="section-title">Data Overrides</span>
      </div>
      <p class="section-description">
        Define data values for specific hierarchy matches. Keys should match
        hierarchy patterns (e.g., <code>os:debian</code> for <code>os:{{ ... }}</code>).
        Use dot notation for nested keys (e.g., <code>server.port</code>).
      </p>

      ${s.length>0?N`
        <div class="suggestions">
          <div class="suggestions-label">Suggested overrides based on hierarchy:</div>
          <div class="suggestion-chips">
            ${s.map(i=>N`
              <sl-tag
                size="small"
                style="cursor: pointer"
                @click=${()=>this.addOverride(i)}
              >
                + ${i}
              </sl-tag>
            `)}
          </div>
        </div>
      `:""}

      ${t.length>0?N`
        <div class="override-cards">
          ${t.map(i=>this.renderOverrideCard(i))}
        </div>
      `:N`
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
          @sl-input=${i=>this.newOverrideKey=i.target.value}
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
    `}renderOverrideCard(e){const t=this.openSections.has(e),r=this.getOverrideEntries(e),s=r.length,i=this.entryKeyErrors[e]||"",n=this.newEntryKeys[e]||"",o=this.newEntryTypes[e]||"string";return N`
      <div class="override-card ${t?"open":""}">
        <div
          class="override-header"
          @click=${()=>this.toggleSection(e)}
        >
          <div class="override-key">
            <sl-icon name="chevron-right"></sl-icon>
            ${e}
            <sl-badge variant="neutral" class="override-badge">
              ${s} ${s===1?"value":"values"}
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
          ${r.length>0?N`
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
                ${r.map(a=>this.renderEntryRow(e,a))}
              </tbody>
            </table>
          `:N`
            <p style="color: var(--sl-color-neutral-400); font-size: 13px;">
              No values defined in this override
            </p>
          `}

          <div class="add-entry-row">
            <sl-input
              placeholder="key or nested.key"
              size="small"
              .value=${n}
              @sl-input=${a=>this.handleEntryKeyInput(e,a.target.value)}
              @keydown=${a=>this.handleEntryAddKeydown(a,e)}
            ></sl-input>
            <sl-select
              size="small"
              .value=${o}
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
              ?disabled=${!n.trim()||!!i}
            >
              <sl-icon slot="prefix" name="plus"></sl-icon>
              Add
            </sl-button>
          </div>
          ${i?N`<div class="key-error">${i}</div>`:""}
        </div>
      </div>
    `}renderEntryRow(e,t){return N`
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
    `}renderValueEditor(e,t){return t.type==="array"&&Array.isArray(t.value)?N`
        <div class="array-editor">
          ${t.value.map((r,s)=>N`
            <div class="array-item">
              <sl-input
                size="small"
                .value=${String(r)}
                @sl-change=${i=>this.updateArrayItem(e,t.key,s,i.target.value)}
              ></sl-input>
              <sl-icon-button
                name="x"
                @click=${()=>this.removeArrayItem(e,t.key,s)}
              ></sl-icon-button>
            </div>
          `)}
          <sl-button size="small" @click=${()=>this.addArrayItem(e,t.key)}>
            + Add
          </sl-button>
        </div>
      `:t.type==="boolean"?N`
        <sl-switch
          ?checked=${t.value===!0}
          @sl-change=${r=>this.updateEntry(e,t.key,r.target.checked)}
        >
          ${t.value?"true":"false"}
        </sl-switch>
      `:t.type==="number"?N`
        <sl-input
          type="number"
          size="small"
          .value=${String(t.value)}
          @sl-change=${r=>this.updateEntry(e,t.key,parseFloat(r.target.value))}
        ></sl-input>
      `:N`
      <sl-input
        size="small"
        .value=${String(t.value??"")}
        @sl-change=${r=>this.updateEntry(e,t.key,r.target.value)}
      ></sl-input>
    `}getOverrideEntries(e){return G.getFlattenedOverride(e).map(({key:t,value:r})=>({key:t,value:r,type:this.inferType(r)}))}inferType(e){return Array.isArray(e)?"array":typeof e=="boolean"?"boolean":typeof e=="number"?"number":"string"}getDefaultValue(e){switch(e){case"boolean":return!1;case"number":return 0;case"array":return[];default:return""}}generateSuggestions(e,t){const r=[];return e.forEach(s=>{const i=s.match(/^(\w+):/);if(i){const n=i[1];({os:["debian","rhel","ubuntu","centos"],env:["production","staging","development"],role:["web","db","app","cache"]}[n]||["default"]).forEach(l=>{const c=`${n}:${l}`;t.includes(c)||r.push(c)})}}),r.slice(0,6)}toggleSection(e){this.openSections.has(e)?this.openSections.delete(e):this.openSections.add(e),this.requestUpdate()}addOverride(e){G.setOverride(e,{}),this.openSections.add(e),this.requestUpdate()}handleAddOverride(){const e=this.newOverrideKey.trim();e&&(this.addOverride(e),this.newOverrideKey="")}handleAddKeydown(e){e.key==="Enter"&&this.handleAddOverride()}deleteOverride(e){G.deleteOverride(e),this.openSections.delete(e),delete this.newEntryKeys[e],delete this.newEntryTypes[e],delete this.entryKeyErrors[e],this.requestUpdate()}handleEntryKeyInput(e,t){if(this.newEntryKeys={...this.newEntryKeys,[e]:t},!t){this.entryKeyErrors={...this.entryKeyErrors,[e]:""};return}const s=t.split(".").find(n=>!/^[a-zA-Z_][a-zA-Z0-9_]*$/.test(n));if(s!==void 0){s===""?this.entryKeyErrors={...this.entryKeyErrors,[e]:"Invalid key: empty segment (consecutive dots or leading/trailing dot)"}:this.entryKeyErrors={...this.entryKeyErrors,[e]:`Invalid segment "${s}": must be a valid identifier`};return}const i=G.checkOverridePathConflict(e,t);if(i){this.entryKeyErrors={...this.entryKeyErrors,[e]:i};return}this.entryKeyErrors={...this.entryKeyErrors,[e]:""}}handleEntryAddKeydown(e,t){e.key==="Enter"&&!this.entryKeyErrors[t]&&this.addEntryToOverride(t)}addEntryToOverride(e){const t=this.newEntryKeys[e]?.trim();if(!t||this.entryKeyErrors[e])return;const r=this.newEntryTypes[e]||"string";G.setOverridePath(e,t,this.getDefaultValue(r)),this.newEntryKeys={...this.newEntryKeys,[e]:""},this.entryKeyErrors={...this.entryKeyErrors,[e]:""}}updateEntry(e,t,r){G.setOverridePath(e,t,r)}deleteEntry(e,t){G.deleteOverridePath(e,t)}getValueAtPath(e,t){const r=this.storeState.manifest.overrides[e];if(!r)return;const s=t.split(".");let i=r;for(const n of s){if(i==null||typeof i!="object")return;i=i[n]}return i}updateArrayItem(e,t,r,s){const i=this.getValueAtPath(e,t);if(!Array.isArray(i))return;const n=[...i];n[r]=s,G.setOverridePath(e,t,n)}addArrayItem(e,t){const r=this.getValueAtPath(e,t);Array.isArray(r)&&G.setOverridePath(e,t,[...r,""])}removeArrayItem(e,t,r){const s=this.getValueAtPath(e,t);if(!Array.isArray(s))return;const i=s.filter((n,o)=>o!==r);G.setOverridePath(e,t,i)}};Lt.styles=ie`
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
  `;mr([H()],Lt.prototype,"storeState",2);mr([H()],Lt.prototype,"openSections",2);mr([H()],Lt.prototype,"newOverrideKey",2);mr([H()],Lt.prototype,"newEntryKeys",2);mr([H()],Lt.prototype,"newEntryTypes",2);mr([H()],Lt.prototype,"entryKeyErrors",2);Lt=mr([Ze("ccm-overrides-editor")],Lt);var zv=Object.defineProperty,jv=Object.getOwnPropertyDescriptor,qn=(e,t,r,s)=>{for(var i=s>1?void 0:s?jv(t,r):t,n=e.length-1,o;n>=0;n--)(o=e[n])&&(i=(s?o(t,r,i):o(i))||i);return s&&i&&zv(t,r,i),i};let Fr=class extends Ee{constructor(){super(...arguments),this.newOrderEntry="",this.draggedIndex=null}connectedCallback(){super.connectedCallback(),this.unsubscribe=G.subscribe(e=>{this.storeState=e})}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribe?.()}render(){const e=this.storeState?.manifest.hierarchy,t=e?.order??[],r=e?.merge??"first";return N`
      <div class="content-wrapper">
      <!-- Merge Strategy - Compact inline -->
      <div class="merge-row">
        <span class="section-title">Merge Strategy</span>
        <sl-select
          size="small"
          value=${r}
          @sl-change=${s=>this.setMerge(s.target.value)}
        >
          <sl-option value="first">First Match</sl-option>
          <sl-option value="deep">Deep Merge</sl-option>
        </sl-select>
        <span class="merge-hint">
          ${r==="first"?"Stop at first matching override":"Combine all matching overrides"}
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

        ${t.length>0?N`
          <div class="order-list">
            ${t.map((s,i)=>this.renderOrderItem(s,i))}
          </div>
        `:N`
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
            @sl-input=${s=>this.newOrderEntry=s.target.value}
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
    `}renderOrderItem(e,t){return N`
      <div
        class="order-item"
        @click=${()=>this.editOrder(t,e)}
        @dragover=${r=>this.handleDragOver(r)}
        @drop=${r=>this.handleDrop(r,t)}
      >
        <div
          class="drag-handle"
          draggable="true"
          @click=${r=>r.stopPropagation()}
          @dragstart=${r=>this.handleDragStart(r,t)}
          @dragend=${this.handleDragEnd}
        >
          <sl-icon name="grip-vertical"></sl-icon>
        </div>
        <div class="order-number">${t+1}</div>
        <div class="order-value">${e}</div>
        <div class="order-actions" @click=${r=>r.stopPropagation()}>
          <sl-icon-button
            name="trash"
            @click=${()=>this.removeOrder(t)}
          ></sl-icon-button>
        </div>
      </div>
    `}setMerge(e){G.setHierarchyMerge(e)}handleAddOrder(){const e=this.newOrderEntry.trim();if(!e)return;const t=[...this.storeState.manifest.hierarchy.order??[],e];G.setHierarchyOrder(t),this.newOrderEntry=""}handleAddKeydown(e){e.key==="Enter"&&this.handleAddOrder()}addPreset(e){const t=this.storeState.manifest.hierarchy.order??[];t.includes(e)||G.setHierarchyOrder([...t,e])}removeOrder(e){const t=[...this.storeState.manifest.hierarchy.order];t.splice(e,1),G.setHierarchyOrder(t)}async editOrder(e,t){const r=prompt("Edit hierarchy entry:",t);if(r!==null&&r.trim()){const s=[...this.storeState.manifest.hierarchy.order];s[e]=r.trim(),G.setHierarchyOrder(s)}}handleDragStart(e,t){this.draggedIndex=t;const r=e.target,s=r.closest(".order-item");r.classList.add("dragging"),s?.classList.add("dragging"),e.dataTransfer.effectAllowed="move"}handleDragEnd(e){const t=e.target,r=t.closest(".order-item");t.classList.remove("dragging"),r?.classList.remove("dragging"),this.draggedIndex=null,this.shadowRoot?.querySelectorAll(".order-item").forEach(s=>{s.classList.remove("drag-over")})}handleDragOver(e){e.preventDefault(),e.dataTransfer.dropEffect="move";const t=e.target.closest(".order-item");t&&(this.shadowRoot?.querySelectorAll(".order-item").forEach(r=>{r.classList.remove("drag-over")}),t.classList.add("drag-over"))}handleDrop(e,t){if(e.preventDefault(),this.draggedIndex===null||this.draggedIndex===t)return;const r=[...this.storeState.manifest.hierarchy.order],[s]=r.splice(this.draggedIndex,1);r.splice(t,0,s),G.setHierarchyOrder(r)}};Fr.styles=ie`
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
  `;qn([H()],Fr.prototype,"storeState",2);qn([H()],Fr.prototype,"newOrderEntry",2);qn([H()],Fr.prototype,"draggedIndex",2);Fr=qn([Ze("ccm-hierarchy-editor")],Fr);var Mv=Object.defineProperty,qv=Object.getOwnPropertyDescriptor,Pa=(e,t,r,s)=>{for(var i=s>1?void 0:s?qv(t,r):t,n=e.length-1,o;n>=0;n--)(o=e[n])&&(i=(s?o(t,r,i):o(i))||i);return s&&i&&Mv(t,r,i),i};let xs=class extends Ee{constructor(){super(...arguments),this.resources=[],this.draggedIndex=null}render(){return this.resources.length===0?N`
        <div class="empty-state">
          <sl-icon name="inbox"></sl-icon>
          <p>No resources defined</p>
          <p class="hint">Click "Add Resource" to get started</p>
        </div>
      `:N`
      <div class="resource-list">
        ${this.resources.map((e,t)=>this.renderResourceCard(e,t))}
      </div>
    `}renderResourceCard(e,t){const r=this.getResourceMeta(e);return N`
      <div
        class="resource-card"
        @click=${()=>this.emitEdit(e)}
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

        <span class="resource-type ${e.type}">${e.type}</span>

        <div class="resource-info">
          <div class="resource-name">
            ${e.alias?N`<sl-icon name="bookmark" class="alias-icon"></sl-icon>${e.alias}`:e.name}
            ${e.health_checks?.length?N`<sl-tooltip content="Has health checks"><sl-icon name="heart-pulse" class="monitoring-icon"></sl-icon></sl-tooltip>`:""}
          </div>
          ${r?N`<div class="resource-meta">${r}</div>`:""}
        </div>

        <div class="resource-actions" @click=${s=>s.stopPropagation()}>
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
    `}getResourceMeta(e){const t=[];switch(e.type){case"package":e.properties.ensure&&t.push(`ensure: ${e.properties.ensure}`);break;case"service":e.properties.ensure&&t.push(String(e.properties.ensure)),e.properties.enable&&t.push("enabled");break;case"file":e.properties.ensure==="directory"&&t.push("directory"),e.properties.mode&&t.push(String(e.properties.mode));break;case"exec":e.properties.creates&&t.push(`creates: ${e.properties.creates}`);break;case"archive":e.properties.extract_parent&&t.push(`→ ${e.properties.extract_parent}`);break}e.require?.length&&t.push(`requires ${e.require.length}`);const r=e.properties.subscribe;return r?.length&&t.push(`subscribes ${r.length}`),t.join(" · ")}handleDragStart(e,t){this.draggedIndex=t;const r=e.target,s=r.closest(".resource-card");r.classList.add("dragging"),s?.classList.add("dragging"),e.dataTransfer.effectAllowed="move"}handleDragEnd(e){const t=e.target,r=t.closest(".resource-card");t.classList.remove("dragging"),r?.classList.remove("dragging"),this.draggedIndex=null,this.shadowRoot?.querySelectorAll(".resource-card").forEach(s=>{s.classList.remove("drag-over")})}handleDragOver(e){e.preventDefault(),e.dataTransfer.dropEffect="move";const t=e.target.closest(".resource-card");t&&(this.shadowRoot?.querySelectorAll(".resource-card").forEach(r=>{r.classList.remove("drag-over")}),t.classList.add("drag-over"))}handleDrop(e,t){e.preventDefault(),!(this.draggedIndex===null||this.draggedIndex===t)&&this.dispatchEvent(new CustomEvent("reorder-resources",{detail:{from:this.draggedIndex,to:t}}))}emitEdit(e){this.dispatchEvent(new CustomEvent("edit-resource",{detail:e}))}emitDuplicate(e){this.dispatchEvent(new CustomEvent("duplicate-resource",{detail:e}))}emitDelete(e){this.dispatchEvent(new CustomEvent("delete-resource",{detail:e}))}};xs.styles=ie`
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

    /* Mobile: always show action buttons since hover doesn't work */
    @media (max-width: 600px) {
      .resource-actions {
        opacity: 1;
      }

      .resource-card {
        padding: 12px;
      }

      .resource-actions sl-icon-button::part(base) {
        padding: 4px;
      }
    }
  `;Pa([A({type:Array})],xs.prototype,"resources",2);Pa([H()],xs.prototype,"draggedIndex",2);xs=Pa([Ze("ccm-resource-list")],xs);const Yu=new Map;function zs(e){Yu.set(e.type,e)}zs({type:"file",label:"File",icon:"file-earmark",nameLabel:"File Path",namePlaceholder:"/etc/myapp/config.yaml",nameHint:"Absolute path to the file or directory",fields:[{name:"ensure",type:"select",label:"Ensure",default:"present",options:[{value:"present",label:"Present (file)"},{value:"absent",label:"Absent"},{value:"directory",label:"Directory"}]},{name:"content",type:"textarea",label:"Content",placeholder:"File contents...",hint:"Inline content. Mutually exclusive with Source."},{name:"source",type:"text",label:"Source",placeholder:"/path/to/source/file",hint:"Copy from this local file. Mutually exclusive with Content."},{name:"owner",type:"text",label:"Owner",placeholder:"root"},{name:"group",type:"text",label:"Group",placeholder:"root"},{name:"mode",type:"text",label:"Mode",placeholder:"0644",hint:"Permissions in octal notation (e.g., 0644, 0755)"}]});zs({type:"exec",label:"Exec",icon:"terminal",nameLabel:"Name or Command",namePlaceholder:"/usr/bin/setup-app --init",nameHint:"Command to execute, or a descriptive name if using command field",fields:[{name:"command",type:"text",label:"Command",placeholder:"/usr/bin/actual-command --flags",hint:"If specified, runs this instead of name. Useful for long commands."},{name:"ensure",type:"select",label:"Ensure",default:"present",options:[{value:"present",label:"Present (execute)"},{value:"absent",label:"Absent"}]},{name:"creates",type:"text",label:"Creates",placeholder:"/path/to/created/file",hint:"Skip execution if this file exists"},{name:"cwd",type:"text",label:"Working Directory",placeholder:"/opt/myapp"},{name:"path",type:"text",label:"Path",placeholder:"/usr/local/bin:/usr/bin:/bin",hint:"Search path for executables (colon-separated)"},{name:"timeout",type:"text",label:"Timeout",placeholder:"30s",hint:"Maximum execution time (e.g., 10s, 5m, 1h)"},{name:"environment",type:"array",label:"Environment Variables",placeholder:"KEY=value",hint:"Additional environment variables"},{name:"returns",type:"text",label:"Expected Returns",placeholder:"0",hint:"Comma-separated exit codes indicating success (default: 0)"},{name:"refreshonly",type:"checkbox",label:"Refresh only",hint:"Only run when triggered by a subscribed resource"},{name:"logoutput",type:"checkbox",label:"Log output",hint:"Log command output"},{name:"subscribe",type:"array",label:"Subscribe",placeholder:"type#name",hint:"Run when these resources change (with refreshonly)",autocomplete:"resource-ref"},{name:"provider",type:"select",label:"Provider",options:[{value:"",label:"(auto-detect / posix)"},{value:"posix",label:"POSIX (direct execution)"},{value:"shell",label:"Shell (/bin/sh -c)"}],hint:"Use shell for pipes, redirects, and builtins"}]});zs({type:"archive",label:"Archive",icon:"file-zip",nameLabel:"Archive Path",namePlaceholder:"/opt/downloads/app-v1.2.3.tar.gz",nameHint:"Where to save the archive. Extension must match URL.",fields:[{name:"url",type:"text",label:"URL",placeholder:"https://releases.example.com/app.tar.gz",required:!0,hint:"HTTP/HTTPS URL to download from (.zip, .tar.gz, .tgz, .tar)"},{name:"ensure",type:"select",label:"Ensure",default:"present",options:[{value:"present",label:"Present"},{value:"absent",label:"Absent"}]},{name:"checksum",type:"text",label:"Checksum (SHA256)",placeholder:"a1b2c3d4e5f6...",hint:"Expected SHA256 hash of the downloaded file"},{name:"extract_parent",type:"text",label:"Extract To",placeholder:"/opt/app",hint:"Directory to extract archive contents into"},{name:"creates",type:"text",label:"Creates",placeholder:"/opt/app/bin/app",hint:"Skip download/extract if this file exists"},{name:"cleanup",type:"checkbox",label:"Cleanup after extraction",hint:"Delete archive file after successful extraction (requires extract_parent and creates)"},{name:"owner",type:"text",label:"Owner",placeholder:"root"},{name:"group",type:"text",label:"Group",placeholder:"root"},{name:"username",type:"text",label:"Username",hint:"For HTTP Basic Authentication"},{name:"password",type:"text",label:"Password",hint:"For HTTP Basic Authentication"},{name:"headers",type:"keyvalue",label:"HTTP Headers",keyPlaceholder:"Header-Name",valuePlaceholder:"value",hint:"Additional headers (e.g., Authorization)"}]});zs({type:"package",label:"Package",icon:"box",nameLabel:"Package Name",namePlaceholder:"httpd",nameHint:"Use real package names, not virtual names or aliases",fields:[{name:"ensure",type:"text",label:"Ensure",placeholder:"present, absent, latest, or version number",default:"present",hint:'Desired state: present, absent, latest, or specific version like "5.9"'},{name:"provider",type:"select",label:"Provider",options:[{value:"",label:"(auto-detect)"},{value:"dnf",label:"DNF (RHEL/Fedora)"},{value:"apt",label:"APT (Debian/Ubuntu)"}],hint:"Force a specific package manager"}]});zs({type:"service",label:"Service",icon:"gear",nameLabel:"Service Name",namePlaceholder:"httpd",nameHint:"Use real service names, not aliases",fields:[{name:"ensure",type:"select",label:"Ensure",default:"running",options:[{value:"running",label:"Running"},{value:"stopped",label:"Stopped"}]},{name:"enable",type:"checkbox",label:"Enable at boot",hint:"Start this service automatically on system boot"},{name:"subscribe",type:"array",label:"Subscribe",placeholder:"type#name (e.g., file#/etc/httpd/conf/httpd.conf)",hint:"Restart service when these resources change",autocomplete:"resource-ref"},{name:"provider",type:"select",label:"Provider",options:[{value:"",label:"(auto-detect)"},{value:"systemd",label:"systemd"}]}]});var Fv=Object.defineProperty,Vv=Object.getOwnPropertyDescriptor,Ve=(e,t,r,s)=>{for(var i=s>1?void 0:s?Vv(t,r):t,n=e.length-1,o;n>=0;n--)(o=e[n])&&(i=(s?o(t,r,i):o(i))||i);return s&&i&&Fv(t,r,i),i};let Re=class extends Ee{constructor(){super(...arguments),this.open=!1,this.resourceType="package",this.resource=null,this.formData={},this.showAdvanced=!1,this.showMonitoring=!1,this.healthChecks=[],this.requireSuggestions=[],this.showRequireSuggestions=!1,this.activeRequireIndex=-1,this.autocompleteSuggestions=[],this.showAutocompleteSuggestions=!1,this.activeAutocompleteField="",this.activeAutocompleteIndex=-1}get typeDef(){return Yu.get(this.resourceType)}get isEditing(){return this.resource!==null}connectedCallback(){super.connectedCallback(),this.handleKeydown=this.handleKeydown.bind(this)}willUpdate(e){e.has("open")&&(this.open?(this.initFormData(),document.addEventListener("keydown",this.handleKeydown)):document.removeEventListener("keydown",this.handleKeydown))}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("keydown",this.handleKeydown)}handleKeydown(e){if(e.key==="Escape")e.preventDefault(),this.handleClose();else if(e.key==="Enter"){const t=e.target;if(t.tagName==="TEXTAREA"||t.tagName==="SL-TEXTAREA"||this.showRequireSuggestions)return;e.preventDefault(),this.handleSave()}}initFormData(){this.resource?(this.formData={name:this.resource.name,...this.resource.properties,alias:this.resource.alias,require:this.resource.require??[],control_if:this.resource.control?.if??"",control_unless:this.resource.control?.unless??""},this.healthChecks=this.resource.health_checks?.map(e=>({...e}))??[],(this.resource.alias||this.resource.require?.length||this.resource.control)&&(this.showAdvanced=!0),this.resource.health_checks?.length&&(this.showMonitoring=!0)):(this.formData={name:"",require:[],control_if:"",control_unless:""},this.healthChecks=[],this.showAdvanced=!1,this.showMonitoring=!1,this.typeDef.fields.forEach(e=>{e.default!==void 0&&(this.formData[e.name]=e.default)}))}render(){const e=this.typeDef,t=this.isEditing?`Edit ${e.label}`:`Add ${e.label}`;return N`
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
                @sl-input=${r=>this.updateField("name",r.target.value)}
                required
              ></sl-input>
              ${e.nameHint?N`<div class="hint">${e.nameHint}</div>`:""}
            </div>

            ${e.fields.map(r=>this.renderField(r))}
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
                  @sl-input=${r=>this.updateField("alias",r.target.value)}
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
                    @sl-input=${r=>this.updateField("control_if",r.target.value)}
                  ></sl-input>
                </div>
                <div class="form-group">
                  <sl-input
                    label="Unless Condition"
                    placeholder="Facts.virtual == 'docker'"
                    .value=${String(this.formData.control_unless??"")}
                    @sl-input=${r=>this.updateField("control_unless",r.target.value)}
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
              ${this.healthChecks.length>0?N`<span style="color: var(--sl-color-neutral-400); font-weight: normal;">(${this.healthChecks.length})</span>`:""}
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
    `}renderField(e){const t=this.formData[e.name];switch(e.type){case"select":return N`
          <div class="form-group">
            <sl-select
              label=${e.label}
              .value=${String(t??e.default??"")}
              @sl-change=${r=>this.updateField(e.name,r.target.value)}
            >
              ${e.options?.map(r=>N`
                <sl-option value=${r.value}>${r.label}</sl-option>
              `)}
            </sl-select>
            ${e.hint?N`<div class="hint">${e.hint}</div>`:""}
          </div>
        `;case"textarea":return N`
          <div class="form-group">
            <sl-textarea
              label=${e.label}
              placeholder=${e.placeholder??""}
              .value=${String(t??"")}
              @sl-input=${r=>this.updateField(e.name,r.target.value)}
              rows="4"
            ></sl-textarea>
            ${e.hint?N`<div class="hint">${e.hint}</div>`:""}
          </div>
        `;case"checkbox":return N`
          <div class="form-group">
            <sl-checkbox
              ?checked=${t===!0}
              @sl-change=${r=>this.updateField(e.name,r.target.checked)}
            >
              ${e.label}
            </sl-checkbox>
            ${e.hint?N`<div class="hint">${e.hint}</div>`:""}
          </div>
        `;case"array":return this.renderArrayField(e);case"keyvalue":return this.renderKeyValueField(e);default:return N`
          <div class="form-group">
            <sl-input
              label=${e.label}
              placeholder=${e.placeholder??""}
              .value=${String(t??"")}
              @sl-input=${r=>this.updateField(e.name,r.target.value)}
            ></sl-input>
            ${e.hint?N`<div class="hint">${e.hint}</div>`:""}
          </div>
        `}}renderArrayField(e){const t=this.formData[e.name],r=Array.isArray(t)?t:[],s=e.autocomplete==="resource-ref";return N`
      <div class="form-group">
        <div class="array-field">
          <label>${e.label}</label>
          ${r.map((i,n)=>N`
            <div class="array-item ${s?"autocomplete-wrapper":""}">
              <sl-input
                placeholder=${e.placeholder??""}
                .value=${i}
                @sl-input=${o=>{this.updateArrayItem(e.name,n,o.target.value),s&&this.updateAutocompleteSuggestions(e.name,n,o.target.value)}}
                @focus=${s?()=>{this.activeAutocompleteField=e.name,this.activeAutocompleteIndex=n,this.updateAutocompleteSuggestions(e.name,n,i),this.showAutocompleteSuggestions=!0}:void 0}
                @blur=${s?()=>setTimeout(()=>this.showAutocompleteSuggestions=!1,200):void 0}
              ></sl-input>
              <sl-icon-button
                name="x"
                @click=${()=>this.removeArrayItem(e.name,n)}
              ></sl-icon-button>

              ${s&&this.showAutocompleteSuggestions&&this.activeAutocompleteField===e.name&&this.activeAutocompleteIndex===n&&this.autocompleteSuggestions.length>0?N`
                <div class="autocomplete-list">
                  ${this.autocompleteSuggestions.map(o=>N`
                    <div
                      class="autocomplete-item"
                      @mousedown=${a=>{a.preventDefault(),this.updateArrayItem(e.name,n,o),this.showAutocompleteSuggestions=!1}}
                    >
                      <code>${o.split("#")[0]}</code>
                      ${o.split("#")[1]}
                    </div>
                  `)}
                </div>
              `:""}
            </div>
          `)}
          <sl-button size="small" class="array-add" @click=${()=>this.addArrayItem(e.name)}>
            <sl-icon slot="prefix" name="plus"></sl-icon>
            Add
          </sl-button>
        </div>
        ${e.hint?N`<div class="hint">${e.hint}</div>`:""}
      </div>
    `}renderKeyValueField(e){const t=this.formData[e.name]??{},r=Object.entries(t);return N`
      <div class="form-group">
        <div class="array-field">
          <label>${e.label}</label>
          ${r.map(([s,i],n)=>N`
            <div class="kv-item">
              <sl-input
                placeholder=${e.keyPlaceholder??"Key"}
                .value=${s}
                @sl-input=${o=>this.updateKeyValueKey(e.name,n,r,o.target.value)}
              ></sl-input>
              <sl-input
                placeholder=${e.valuePlaceholder??"Value"}
                .value=${i}
                @sl-input=${o=>this.updateKeyValueValue(e.name,s,o.target.value)}
              ></sl-input>
              <sl-icon-button
                name="x"
                @click=${()=>this.removeKeyValueItem(e.name,s)}
              ></sl-icon-button>
            </div>
          `)}
          <sl-button size="small" class="array-add" @click=${()=>this.addKeyValueItem(e.name)}>
            <sl-icon slot="prefix" name="plus"></sl-icon>
            Add
          </sl-button>
        </div>
        ${e.hint?N`<div class="hint">${e.hint}</div>`:""}
      </div>
    `}renderRequireField(){const e=this.formData.require,t=Array.isArray(e)?e:[];return N`
      <div class="array-field">
        <label>Dependencies (require)</label>
        ${t.map((r,s)=>N`
          <div class="array-item autocomplete-wrapper">
            <sl-input
              placeholder="type#name (e.g., package#httpd)"
              .value=${r}
              @sl-input=${i=>{this.updateArrayItem("require",s,i.target.value),this.updateRequireSuggestions(i.target.value),this.activeRequireIndex=s}}
              @focus=${()=>{this.activeRequireIndex=s,this.updateRequireSuggestions(r),this.showRequireSuggestions=!0}}
              @blur=${()=>setTimeout(()=>this.showRequireSuggestions=!1,200)}
            ></sl-input>
            <sl-icon-button
              name="x"
              @click=${()=>this.removeArrayItem("require",s)}
            ></sl-icon-button>

            ${this.showRequireSuggestions&&this.activeRequireIndex===s&&this.requireSuggestions.length>0?N`
              <div class="autocomplete-list">
                ${this.requireSuggestions.map(i=>N`
                  <div
                    class="autocomplete-item"
                    @mousedown=${n=>{n.preventDefault(),this.updateArrayItem("require",s,i),this.showRequireSuggestions=!1}}
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
    `}renderHealthChecks(){return N`
      ${this.healthChecks.map((e,t)=>N`
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
                .value=${e.tries?.toString()??""}
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
      `)}
      <sl-button size="small" @click=${this.addHealthCheck}>
        <sl-icon slot="prefix" name="plus"></sl-icon>
        Add Health Check
      </sl-button>
      <div class="hint" style="margin-top: 8px;">Health checks run after the resource is applied to verify its state (Nagios plugin format)</div>
    `}addHealthCheck(){this.healthChecks=[...this.healthChecks,{command:""}]}removeHealthCheck(e){this.healthChecks=this.healthChecks.filter((t,r)=>r!==e)}updateHealthCheck(e,t,r){const s=[...this.healthChecks];if(t==="tries"){const i=parseInt(r,10);s[e]={...s[e],[t]:isNaN(i)?void 0:i}}else s[e]={...s[e],[t]:r};this.healthChecks=s}updateRequireSuggestions(e){const r=G.getResourceReferences().filter(s=>s.name!==this.formData.name).flatMap(s=>{const i=[`${s.type}#${s.name}`];return s.alias&&i.push(`${s.type}#${s.alias}`),i});this.requireSuggestions=r.filter(s=>s.toLowerCase().includes(e.toLowerCase())).slice(0,5)}updateAutocompleteSuggestions(e,t,r){this.activeAutocompleteField=e,this.activeAutocompleteIndex=t;const i=G.getResourceReferences().filter(n=>n.name!==this.formData.name).flatMap(n=>{const o=[`${n.type}#${n.name}`];return n.alias&&o.push(`${n.type}#${n.alias}`),o});this.autocompleteSuggestions=i.filter(n=>n.toLowerCase().includes(r.toLowerCase())).slice(0,5)}updateField(e,t){this.formData={...this.formData,[e]:t}}updateArrayItem(e,t,r){const s=[...this.formData[e]||[]];s[t]=r,this.formData={...this.formData,[e]:s}}addArrayItem(e){const t=[...this.formData[e]||[],""];this.formData={...this.formData,[e]:t}}removeArrayItem(e,t){const r=(this.formData[e]||[]).filter((s,i)=>i!==t);this.formData={...this.formData,[e]:r}}updateKeyValueKey(e,t,r,s){const i={};r.forEach(([n,o],a)=>{i[a===t?s:n]=o}),this.formData={...this.formData,[e]:i}}updateKeyValueValue(e,t,r){const s={...this.formData[e]||{},[t]:r};this.formData={...this.formData,[e]:s}}addKeyValueItem(e){const t={...this.formData[e]||{},"":""};this.formData={...this.formData,[e]:t}}removeKeyValueItem(e,t){const r={...this.formData[e]||{}};delete r[t],this.formData={...this.formData,[e]:r}}handleClose(){this.dispatchEvent(new CustomEvent("close"))}handleSave(){if(!this.formData.name)return;const{name:e,alias:t,require:r,control_if:s,control_unless:i,...n}=this.formData,o={};Object.entries(n).forEach(([u,h])=>{if(h!==""&&h!==void 0&&h!==null){if(Array.isArray(h)&&h.length===0||Array.isArray(h)&&h.every(y=>y==="")||typeof h=="object"&&!Array.isArray(h)&&Object.keys(h).length===0)return;if(Array.isArray(h)){const y=h.filter(g=>g!=="");y.length>0&&(o[u]=y);return}if(typeof h=="object"&&!Array.isArray(h)){const y={};Object.entries(h).forEach(([g,f])=>{g!==""&&f!==""&&(y[g]=f)}),Object.keys(y).length>0&&(o[u]=y);return}o[u]=h}});const a=(r||[]).filter(u=>u.trim()),l=s||i?{...s?{if:s}:{},...i?{unless:i}:{}}:void 0,c=t?.trim()||void 0,d=this.healthChecks.filter(u=>u.command?.trim()).map(u=>{const h={command:u.command.trim()};return u.name?.trim()&&(h.name=u.name.trim()),u.timeout?.trim()&&(h.timeout=u.timeout.trim()),u.tries!==void 0&&u.tries>=1&&(h.tries=u.tries),u.try_sleep?.trim()&&(h.try_sleep=u.try_sleep.trim()),u.format&&(h.format=u.format),h}),p={type:this.resourceType,name:e,properties:o,...c?{alias:c}:{},...a.length?{require:a}:{},...l?{control:l}:{},...d.length?{health_checks:d}:{}};this.dispatchEvent(new CustomEvent("save",{detail:p}))}};Re.styles=ie`
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
  `;Ve([A({type:Boolean})],Re.prototype,"open",2);Ve([A({type:String})],Re.prototype,"resourceType",2);Ve([A({type:Object})],Re.prototype,"resource",2);Ve([H()],Re.prototype,"formData",2);Ve([H()],Re.prototype,"showAdvanced",2);Ve([H()],Re.prototype,"showMonitoring",2);Ve([H()],Re.prototype,"healthChecks",2);Ve([H()],Re.prototype,"requireSuggestions",2);Ve([H()],Re.prototype,"showRequireSuggestions",2);Ve([H()],Re.prototype,"activeRequireIndex",2);Ve([H()],Re.prototype,"autocompleteSuggestions",2);Ve([H()],Re.prototype,"showAutocompleteSuggestions",2);Ve([H()],Re.prototype,"activeAutocompleteField",2);Ve([H()],Re.prototype,"activeAutocompleteIndex",2);Re=Ve([Ze("ccm-resource-form")],Re);var Bv=Object.defineProperty,Uv=Object.getOwnPropertyDescriptor,js=(e,t,r,s)=>{for(var i=s>1?void 0:s?Uv(t,r):t,n=e.length-1,o;n>=0;n--)(o=e[n])&&(i=(s?o(t,r,i):o(i))||i);return s&&i&&Bv(t,r,i),i};let dr=class extends Ee{constructor(){super(...arguments),this.showForm=!1,this.editingResource=null,this.newResourceType="package"}connectedCallback(){super.connectedCallback(),this.unsubscribe=G.subscribe(e=>{this.storeState=e})}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribe?.()}render(){const e=this.storeState?.manifest.ccm,t=e?.resources??[];return N`
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
            <sl-menu-item value="archive">
              <sl-icon slot="prefix" name="file-zip"></sl-icon>
              Archive
            </sl-menu-item>
            <sl-menu-item value="exec">
              <sl-icon slot="prefix" name="terminal"></sl-icon>
              Exec
            </sl-menu-item>
            <sl-menu-item value="file">
              <sl-icon slot="prefix" name="file-earmark"></sl-icon>
              File
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
          .value=${e?.pre_message??""}
          @sl-change=${r=>G.setCcmPreMessage(r.target.value||void 0)}
        ></sl-textarea>
        <sl-textarea
          label="Post-message"
          placeholder="Message shown after applying resources"
          size="small"
          resize="vertical"
          rows="1"
          .value=${e?.post_message??""}
          @sl-change=${r=>G.setCcmPostMessage(r.target.value||void 0)}
        ></sl-textarea>
        <sl-checkbox
          ?checked=${e?.fail_on_error??!1}
          @sl-change=${r=>G.setCcmFailOnError(r.target.checked)}
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
    `}handleAddResource(e){const t=e.detail.item.value;this.newResourceType=t,this.editingResource=null,this.showForm=!0}handleEditResource(e){this.editingResource=e.detail,this.newResourceType=e.detail.type,this.showForm=!0}handleDuplicateResource(e){G.duplicateResource(e.detail)}handleDeleteResource(e){G.deleteResource(e.detail)}handleReorderResources(e){G.reorderResources(e.detail.from,e.detail.to)}handleFormClose(){this.showForm=!1,this.editingResource=null}handleFormSave(e){this.editingResource?G.updateResource(this.editingResource.id,e.detail):G.addResource(e.detail),this.showForm=!1,this.editingResource=null}};dr.styles=ie`
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
  `;js([H()],dr.prototype,"storeState",2);js([H()],dr.prototype,"showForm",2);js([H()],dr.prototype,"editingResource",2);js([H()],dr.prototype,"newResourceType",2);dr=js([Ze("ccm-resources-editor")],dr);var Hv=Object.defineProperty,Kv=Object.getOwnPropertyDescriptor,Ms=(e,t,r,s)=>{for(var i=s>1?void 0:s?Kv(t,r):t,n=e.length-1,o;n>=0;n--)(o=e[n])&&(i=(s?o(t,r,i):o(i))||i);return s&&i&&Hv(t,r,i),i};let ur=class extends Ee{constructor(){super(...arguments),this.open=!1,this.lastSaved=null,this.resourceCount=0,this.templateCount=0}connectedCallback(){super.connectedCallback(),this.handleKeydown=this.handleKeydown.bind(this)}updated(e){e.has("open")&&(this.open?document.addEventListener("keydown",this.handleKeydown):document.removeEventListener("keydown",this.handleKeydown))}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("keydown",this.handleKeydown)}handleKeydown(e){e.key==="Enter"&&(e.preventDefault(),this.handleRecover())}render(){return N`
      <sl-dialog
        label="Recover Unsaved Work?"
        ?open=${this.open}
        @sl-request-close=${this.handleClose}
      >
        <div class="recovery-info">
          <p>You have unsaved work from a previous session.</p>
          ${this.resourceCount>0||this.templateCount>0?N`
            <p>Found ${this.formatSummary()}</p>
          `:""}
          ${this.lastSaved?N`
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
    `}handleClose(){this.handleDiscard()}handleRecover(){this.dispatchEvent(new CustomEvent("recover"))}handleDiscard(){this.dispatchEvent(new CustomEvent("discard"))}formatSummary(){const e=[];return this.resourceCount>0&&e.push(`${this.resourceCount} resource${this.resourceCount===1?"":"s"}`),this.templateCount>0&&e.push(`${this.templateCount} template${this.templateCount===1?"":"s"}`),e.join(" and ")}};ur.styles=ie`
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
  `;Ms([A({type:Boolean})],ur.prototype,"open",2);Ms([A({type:Object})],ur.prototype,"lastSaved",2);Ms([A({type:Number})],ur.prototype,"resourceCount",2);Ms([A({type:Number})],ur.prototype,"templateCount",2);ur=Ms([Ze("ccm-recovery-dialog")],ur);var Wv=Object.defineProperty,Gv=Object.getOwnPropertyDescriptor,qs=(e,t,r,s)=>{for(var i=s>1?void 0:s?Gv(t,r):t,n=e.length-1,o;n>=0;n--)(o=e[n])&&(i=(s?o(t,r,i):o(i))||i);return s&&i&&Wv(t,r,i),i};let hr=class extends Ee{constructor(){super(...arguments),this.templates=[],this.activeTemplateId=null,this.renamingId=null,this.renameValue=""}render(){return N`
      <div class="header">
        <h3>Templates</h3>
        <sl-tooltip content="Add template">
          <sl-icon-button
            name="plus-lg"
            @click=${this.handleAddClick}
          ></sl-icon-button>
        </sl-tooltip>
      </div>

      ${this.templates.length===0?this.renderEmptyState():this.renderTemplateList()}
    `}renderEmptyState(){return N`
      <div class="empty-state">
        <sl-icon name="file-earmark-code"></sl-icon>
        <p>No templates</p>
        <p class="hint">Click + to add a Jet template</p>
      </div>
    `}renderTemplateList(){return N`
      <div class="template-list">
        ${this.templates.map(e=>this.renderTemplateItem(e))}
      </div>
    `}renderTemplateItem(e){const t=e.id===this.activeTemplateId,r=e.id===this.renamingId;return N`
      <div
        class="template-item ${t?"active":""}"
        @click=${()=>this.handleSelect(e.id)}
      >
        <sl-icon name="file-earmark-code" class="template-icon"></sl-icon>

        ${r?N`
              <sl-input
                class="rename-input"
                size="small"
                value=${this.renameValue}
                @sl-input=${s=>this.renameValue=s.target.value}
                @keydown=${this.handleRenameKeydown}
                @sl-blur=${this.handleRenameBlur}
                @click=${s=>s.stopPropagation()}
              ></sl-input>
            `:N`<span class="template-name">${e.name}</span>`}

        <div class="template-actions" @click=${s=>s.stopPropagation()}>
          <sl-tooltip content="Download">
            <sl-icon-button
              name="download"
              @click=${()=>this.handleDownload(e.id)}
            ></sl-icon-button>
          </sl-tooltip>
          <sl-tooltip content="Rename">
            <sl-icon-button
              name="pencil"
              @click=${()=>this.startRename(e)}
            ></sl-icon-button>
          </sl-tooltip>
          <sl-tooltip content="Delete">
            <sl-icon-button
              name="trash"
              @click=${()=>this.handleDelete(e.id)}
            ></sl-icon-button>
          </sl-tooltip>
        </div>
      </div>
    `}async handleAddClick(){const e=await this.promptForFilename("New Template","template.conf.jet");e&&this.dispatchEvent(new CustomEvent("template-add",{detail:e,bubbles:!0,composed:!0}))}handleSelect(e){this.renamingId||this.dispatchEvent(new CustomEvent("template-select",{detail:e,bubbles:!0,composed:!0}))}handleDownload(e){this.dispatchEvent(new CustomEvent("template-download",{detail:e,bubbles:!0,composed:!0}))}handleDelete(e){this.dispatchEvent(new CustomEvent("template-delete",{detail:e,bubbles:!0,composed:!0}))}startRename(e){this.renamingId=e.id,this.renameValue=e.name,this.updateComplete.then(()=>{this.shadowRoot?.querySelector(".rename-input")?.focus()})}handleRenameKeydown(e){e.key==="Enter"?this.commitRename():e.key==="Escape"&&this.cancelRename()}handleRenameBlur(){setTimeout(()=>{this.renamingId&&this.commitRename()},100)}commitRename(){if(!this.renamingId||!this.renameValue.trim()){this.cancelRename();return}this.dispatchEvent(new CustomEvent("template-rename",{detail:{id:this.renamingId,name:this.renameValue.trim()},bubbles:!0,composed:!0})),this.renamingId=null,this.renameValue=""}cancelRename(){this.renamingId=null,this.renameValue=""}promptForFilename(e,t){const r=window.prompt(e,t);return Promise.resolve(r)}};hr.styles=ie`
    :host {
      display: block;
    }

    .header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 12px 16px;
      border-bottom: 1px solid var(--sl-color-neutral-200);
    }

    .header h3 {
      margin: 0;
      font-size: 14px;
      font-weight: 600;
      color: var(--sl-color-neutral-700);
    }

    .template-list {
      display: flex;
      flex-direction: column;
    }

    .template-item {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 10px 16px;
      border-bottom: 1px solid var(--sl-color-neutral-100);
      cursor: pointer;
      transition: background-color 0.15s ease;
    }

    .template-item:hover {
      background: var(--sl-color-neutral-50);
    }

    .template-item.active {
      background: var(--sl-color-primary-50);
      border-left: 3px solid var(--sl-color-primary-600);
      padding-left: 13px;
    }

    .template-icon {
      color: var(--sl-color-neutral-500);
      font-size: 16px;
      flex-shrink: 0;
    }

    .template-item.active .template-icon {
      color: var(--sl-color-primary-600);
    }

    .template-name {
      flex: 1;
      min-width: 0;
      font-size: 13px;
      color: var(--sl-color-neutral-800);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .template-item.active .template-name {
      font-weight: 500;
      color: var(--sl-color-primary-700);
    }

    .template-actions {
      display: flex;
      gap: 2px;
      opacity: 0;
      transition: opacity 0.15s ease;
    }

    .template-item:hover .template-actions {
      opacity: 1;
    }

    .template-item.active .template-actions {
      opacity: 1;
    }

    .template-actions sl-icon-button::part(base) {
      padding: 4px;
      font-size: 14px;
    }

    .empty-state {
      text-align: center;
      padding: 48px 24px;
      color: var(--sl-color-neutral-400);
    }

    .empty-state sl-icon {
      font-size: 48px;
      margin-bottom: 12px;
      opacity: 0.5;
    }

    .empty-state p {
      margin: 8px 0;
      font-size: 14px;
    }

    .empty-state .hint {
      font-size: 12px;
    }

    /* Rename input */
    .rename-input {
      flex: 1;
      min-width: 0;
    }

    .rename-input::part(base) {
      min-height: 28px;
    }

    .rename-input::part(input) {
      font-size: 13px;
      padding: 0 8px;
    }

    /* Mobile: always show action buttons */
    @media (max-width: 600px) {
      .template-actions {
        opacity: 1;
      }
    }
  `;qs([A({type:Array})],hr.prototype,"templates",2);qs([A({type:String})],hr.prototype,"activeTemplateId",2);qs([H()],hr.prototype,"renamingId",2);qs([H()],hr.prototype,"renameValue",2);hr=qs([Ze("ccm-template-list")],hr);const Yv=[{path:"host.info.hostname",detail:"System hostname"},{path:"host.info.os",detail:"Operating system (linux, windows, etc.)"},{path:"host.info.platform",detail:"Platform name (almalinux, ubuntu, etc.)"},{path:"host.info.platformFamily",detail:"Platform family (rhel, debian, etc.)"},{path:"host.info.platformVersion",detail:"Platform version"},{path:"host.info.kernelVersion",detail:"Kernel version string"},{path:"host.info.kernelArch",detail:"Kernel architecture (x86_64, arm64, etc.)"},{path:"host.info.virtualizationSystem",detail:"Virtualization platform (docker, kvm, etc.)"},{path:"host.info.virtualizationRole",detail:"Virtualization role (guest, host)"}],Jv=[{name:"lower",detail:"Convert to lowercase"},{name:"upper",detail:"Convert to uppercase"},{name:"len",detail:"Length of string/array/map"},{name:"isset",detail:"Check if values are non-nil"},{name:"split",detail:"Split string by separator"},{name:"replace",detail:"Replace substring"},{name:"hasPrefix",detail:"Check string prefix"},{name:"hasSuffix",detail:"Check string suffix"},{name:"repeat",detail:"Repeat string N times"},{name:"trimSpace",detail:"Remove leading/trailing whitespace"},{name:"html",detail:"Escape HTML characters"},{name:"url",detail:"URL encode string"},{name:"json",detail:"JSON encode value"},{name:"raw",detail:"Output without escaping"},{name:"ints",detail:"Create integer range"},{name:"dump",detail:"Debug output"},{name:"lookup",detail:"Lookup data by path"}],Xv=[{name:"HOME",detail:"User home directory"},{name:"USER",detail:"Current username"},{name:"PATH",detail:"Executable search path"},{name:"SHELL",detail:"User default shell"},{name:"LANG",detail:"System locale"},{name:"PWD",detail:"Current working directory"},{name:"HOSTNAME",detail:"System hostname"},{name:"TERM",detail:"Terminal type"}],Qv=[{name:"Data",detail:"Access data variables (Data.key)"},{name:"Facts",detail:"Access system facts (Facts.host.info.os)"},{name:"Environ",detail:"Access environment variables (Environ.HOME)"}];function Zv(e,t){const r=e.substring(0,t),s=r.lastIndexOf("[[");if(s===-1)return{type:"none",prefix:""};const i=r.substring(s+2);if(i.includes("]]"))return{type:"none",prefix:""};const n=i.trimStart(),o=n.match(/Data\.([\w.]*)$/);if(o)return{type:"data",prefix:o[1]};const a=n.match(/lookup\s*\(\s*["']data\.([^"']*)$/);if(a)return{type:"data-lookup",prefix:a[1]};const l=n.match(/Facts\.([\w.]*)$/);if(l)return{type:"facts",prefix:l[1]};const c=n.match(/lookup\s*\(\s*["']facts\.([^"']*)$/);if(c)return{type:"facts-lookup",prefix:c[1]};const d=n.match(/Environ\.(\w*)$/);if(d)return{type:"environ",prefix:d[1]};const p=n.match(/(?:^|[\s(|])(\w*)$/);return p?{type:"function",prefix:p[1]}:{type:"none",prefix:""}}function Vo(e,t=""){const r=[];for(const[s,i]of Object.entries(e)){const n=t?`${t}.${s}`:s;r.push(n),i&&typeof i=="object"&&!Array.isArray(i)&&r.push(...Vo(i,n))}return r}function e0(e){const t=new Set;Vo(e.data).forEach(r=>t.add(r));for(const r of Object.values(e.overrides))Vo(r).forEach(s=>t.add(s));return Array.from(t).sort()}function t0(e,t,r){const s=Zv(e,t);switch(s.type){case"data":return od(r,s.prefix,"Data.");case"data-lookup":return od(r,s.prefix,"");case"facts":return ad(s.prefix);case"facts-lookup":return ad(s.prefix);case"environ":return r0(s.prefix);case"function":return s0(s.prefix);default:return[]}}function od(e,t,r){const s=e0(e),i=t.toLowerCase();return s.filter(n=>n.toLowerCase().startsWith(i)).map(n=>({label:n,detail:"Data value",insertText:n.substring(t.length),kind:"data"}))}function ad(e,t){const r=e.toLowerCase();return Yv.filter(s=>s.path.toLowerCase().startsWith(r)).map(s=>({label:s.path,detail:s.detail,insertText:s.path.substring(e.length),kind:"fact"}))}function r0(e){const t=e.toLowerCase();return Xv.filter(r=>r.name.toLowerCase().startsWith(t)).map(r=>({label:r.name,detail:r.detail,insertText:r.name.substring(e.length),kind:"environ"}))}function s0(e){const t=e.toLowerCase(),r=Qv.filter(i=>i.name.toLowerCase().startsWith(t)).map(i=>({label:i.name,detail:i.detail,insertText:i.name.substring(e.length),kind:"function"})),s=Jv.filter(i=>i.name.toLowerCase().startsWith(t)).map(i=>({label:i.name,detail:i.detail,insertText:i.name.substring(e.length),kind:"function"}));return[...r,...s]}var i0=Object.defineProperty,n0=Object.getOwnPropertyDescriptor,_t=(e,t,r,s)=>{for(var i=s>1?void 0:s?n0(t,r):t,n=e.length-1,o;n>=0;n--)(o=e[n])&&(i=(s?o(t,r,i):o(i))||i);return s&&i&&i0(t,r,i),i};let Qe=class extends Ee{constructor(){super(...arguments),this.content="",this.placeholder="Enter template content...",this.manifest=null,this.internalContent="",this.completions=[],this.selectedIndex=0,this.showAutocomplete=!1,this.popupPosition={top:0,left:0},this.boundHandleClickOutside=this.handleClickOutside.bind(this)}connectedCallback(){super.connectedCallback(),this.internalContent=this.content,document.addEventListener("click",this.boundHandleClickOutside)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("click",this.boundHandleClickOutside)}willUpdate(e){e.has("content")&&this.content!==this.internalContent&&(this.internalContent=this.content)}render(){return N`
      <div class="editor-container">
        <div class="editor-layer highlight-layer">${this.highlightContent()}</div>
        <textarea
          class="editor-layer input-layer"
          .value=${this.internalContent}
          placeholder=${this.placeholder}
          @input=${this.handleInput}
          @keydown=${this.handleKeydown}
          @scroll=${this.syncScroll}
          spellcheck="false"
        ></textarea>
        ${this.showAutocomplete?this.renderAutocomplete():""}
      </div>
    `}renderAutocomplete(){return N`
      <div
        class="autocomplete-popup"
        style="top: ${this.popupPosition.top}px; left: ${this.popupPosition.left}px;"
        @click=${e=>e.stopPropagation()}
      >
        ${this.completions.length===0?N`<div class="autocomplete-empty">No matches</div>`:this.completions.map((e,t)=>N`
              <div
                class="autocomplete-item ${t===this.selectedIndex?"selected":""}"
                @click=${()=>this.selectCompletion(e)}
                @mouseenter=${()=>this.selectedIndex=t}
              >
                <span class="autocomplete-icon ${e.kind}">${this.getKindIcon(e.kind)}</span>
                <span class="autocomplete-label">${e.label}</span>
                ${e.detail?N`<span class="autocomplete-detail">${e.detail}</span>`:""}
              </div>
            `)}
      </div>
    `}getKindIcon(e){switch(e){case"data":return"D";case"fact":return"F";case"function":return"fn";case"environ":return"E";default:return"?"}}handleInput(e){const t=e.target;this.internalContent=t.value,this.updateAutocomplete(t),this.debounceTimer&&clearTimeout(this.debounceTimer),this.debounceTimer=setTimeout(()=>{this.dispatchEvent(new CustomEvent("content-change",{detail:this.internalContent,bubbles:!0,composed:!0}))},300)}updateAutocomplete(e){if(!this.manifest){this.hideAutocomplete();return}const t=e.selectionStart,r=t0(this.internalContent,t,this.manifest);r.length>0?(this.completions=r,this.selectedIndex=0,this.showAutocomplete=!0,this.updatePopupPosition(e)):this.hideAutocomplete()}updatePopupPosition(e){const r=this.internalContent.substring(0,e.selectionStart).split(`
`),s=r.length,i=r[r.length-1].length,n=20.8,o=7.8,a=16,l=s*n+a-e.scrollTop,c=i*o+a-e.scrollLeft,d=this.getBoundingClientRect(),p=d.height-220,u=d.width-220;this.popupPosition={top:Math.min(Math.max(l,0),p),left:Math.min(Math.max(c,0),u)}}hideAutocomplete(){this.showAutocomplete=!1,this.completions=[],this.selectedIndex=0}selectCompletion(e){if(!this.textarea)return;const t=this.textarea.selectionStart,r=this.internalContent.substring(0,t),s=this.internalContent.substring(t);this.internalContent=r+e.insertText+s,this.hideAutocomplete(),this.updateComplete.then(()=>{const i=t+e.insertText.length;this.textarea.value=this.internalContent,this.textarea.selectionStart=this.textarea.selectionEnd=i,this.textarea.focus(),this.dispatchEvent(new CustomEvent("content-change",{detail:this.internalContent,bubbles:!0,composed:!0}))})}handleClickOutside(e){e.composedPath().includes(this)||this.hideAutocomplete()}handleKeydown(e){if(this.showAutocomplete&&this.completions.length>0)switch(e.key){case"ArrowDown":e.preventDefault(),this.selectedIndex=(this.selectedIndex+1)%this.completions.length,this.scrollSelectedIntoView();return;case"ArrowUp":e.preventDefault(),this.selectedIndex=(this.selectedIndex-1+this.completions.length)%this.completions.length,this.scrollSelectedIntoView();return;case"Enter":case"Tab":e.preventDefault(),this.selectCompletion(this.completions[this.selectedIndex]);return;case"Escape":e.preventDefault(),this.hideAutocomplete();return}if(e.key==="Tab"){e.preventDefault();const t=e.target,r=t.selectionStart,s=t.selectionEnd,i=this.internalContent.substring(0,r),n=this.internalContent.substring(s);this.internalContent=i+"  "+n,this.updateComplete.then(()=>{t.value=this.internalContent,t.selectionStart=t.selectionEnd=r+2}),this.debounceTimer&&clearTimeout(this.debounceTimer),this.debounceTimer=setTimeout(()=>{this.dispatchEvent(new CustomEvent("content-change",{detail:this.internalContent,bubbles:!0,composed:!0}))},300)}e.key==="Escape"&&this.showAutocomplete&&(e.preventDefault(),this.hideAutocomplete())}scrollSelectedIntoView(){this.updateComplete.then(()=>{const e=this.shadowRoot?.querySelector(".autocomplete-popup"),t=e?.querySelector(".autocomplete-item.selected");t&&e&&t.scrollIntoView({block:"nearest"})})}syncScroll(){this.textarea&&this.highlightDiv&&(this.highlightDiv.scrollTop=this.textarea.scrollTop,this.highlightDiv.scrollLeft=this.textarea.scrollLeft)}highlightContent(){if(!this.internalContent)return"";let e=this.internalContent.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");return e=e.replace(/\{\*[\s\S]*?\*\}/g,t=>`<span class="jet-comment">${t}</span>`),e=e.replace(/\[\[([\s\S]*?)\]\]/g,(t,r)=>`<span class="jet-delimiter">[[</span>${this.highlightJetExpression(r)}<span class="jet-delimiter">]]</span>`),na(e)}highlightJetExpression(e){const t=["if","else","end","range","block","yield","include","extends","return","try","catch","import","set","with"],r=new RegExp(`\\b(${t.join("|")})\\b`,"g");let s=e;return s=s.replace(/"([^"\\]|\\.)*"/g,i=>`<span class="jet-string">${i}</span>`),s=s.replace(/'([^'\\]|\\.)*'/g,i=>`<span class="jet-string">${i}</span>`),s=s.replace(/\b([a-zA-Z_][a-zA-Z0-9_]*)\s*\(/g,(i,n)=>t.includes(n)?i:`<span class="jet-function">${n}</span>(`),s=s.replace(r,'<span class="jet-keyword">$1</span>'),s=s.replace(/\b(Data)(\.[a-zA-Z_][a-zA-Z0-9_.]*)?/g,(i,n,o)=>o?`<span class="jet-variable">${n}${o}</span>`:`<span class="jet-variable">${n}</span>`),s=s.replace(new RegExp("(?<![a-zA-Z0-9_])(\\.[a-zA-Z_][a-zA-Z0-9_]*)","g"),'<span class="jet-variable">$1</span>'),s=s.replace(/(\|&gt;|==|!=|&lt;=|&gt;=|&amp;&amp;|\|\||!)/g,'<span class="jet-operator">$1</span>'),s}};Qe.styles=ie`
    :host {
      display: block;
      height: 100%;
      position: relative;
      background: #1e293b;
    }

    .editor-container {
      position: relative;
      height: 100%;
      overflow: hidden;
    }

    /* Shared styles for both layers */
    .editor-layer {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      padding: 16px;
      margin: 0;
      border: none;
      font-family: var(--sl-font-mono);
      font-size: 13px;
      line-height: 1.6;
      white-space: pre-wrap;
      word-wrap: break-word;
      overflow-wrap: break-word;
    }

    /* Highlight layer (behind) */
    .highlight-layer {
      color: #e2e8f0;
      pointer-events: none;
      overflow: auto;
    }

    /* Textarea layer (on top, transparent text) */
    .input-layer {
      background: transparent;
      color: transparent;
      caret-color: #e2e8f0;
      resize: none;
      outline: none;
      overflow: auto;
    }

    .input-layer::placeholder {
      color: #64748b;
    }

    /* Syntax highlighting classes */
    .jet-delimiter { color: #f97316; font-weight: 500; }
    .jet-keyword { color: #c084fc; }
    .jet-string { color: #86efac; }
    .jet-variable { color: #7dd3fc; }
    .jet-function { color: #7dd3fc; }
    .jet-comment { color: #64748b; font-style: italic; }
    .jet-operator { color: #94a3b8; }

    /* Autocomplete popup */
    .autocomplete-popup {
      position: absolute;
      z-index: 1000;
      background: #1e293b;
      border: 1px solid #475569;
      border-radius: 6px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
      max-height: 200px;
      overflow-y: auto;
      min-width: 200px;
      max-width: 350px;
    }

    .autocomplete-item {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 8px 12px;
      cursor: pointer;
      border-bottom: 1px solid #334155;
    }

    .autocomplete-item:last-child {
      border-bottom: none;
    }

    .autocomplete-item:hover,
    .autocomplete-item.selected {
      background: #334155;
    }

    .autocomplete-item.selected {
      background: #3b82f6;
    }

    .autocomplete-icon {
      width: 18px;
      height: 18px;
      border-radius: 3px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 10px;
      font-weight: 600;
      flex-shrink: 0;
    }

    .autocomplete-icon.data {
      background: #3b82f6;
      color: white;
    }

    .autocomplete-icon.fact {
      background: #8b5cf6;
      color: white;
    }

    .autocomplete-icon.function {
      background: #f97316;
      color: white;
    }

    .autocomplete-icon.environ {
      background: #10b981;
      color: white;
    }

    .autocomplete-label {
      flex: 1;
      font-family: var(--sl-font-mono);
      font-size: 12px;
      color: #e2e8f0;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .autocomplete-detail {
      font-size: 11px;
      color: #94a3b8;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      max-width: 120px;
    }

    .autocomplete-empty {
      padding: 12px;
      text-align: center;
      color: #64748b;
      font-size: 12px;
    }
  `;_t([A({type:String})],Qe.prototype,"content",2);_t([A({type:String})],Qe.prototype,"placeholder",2);_t([A({type:Object})],Qe.prototype,"manifest",2);_t([H()],Qe.prototype,"internalContent",2);_t([H()],Qe.prototype,"completions",2);_t([H()],Qe.prototype,"selectedIndex",2);_t([H()],Qe.prototype,"showAutocomplete",2);_t([H()],Qe.prototype,"popupPosition",2);_t([ce(".input-layer")],Qe.prototype,"textarea",2);_t([ce(".highlight-layer")],Qe.prototype,"highlightDiv",2);Qe=_t([Ze("ccm-template-editor")],Qe);var o0=Object.defineProperty,a0=Object.getOwnPropertyDescriptor,Ju=(e,t,r,s)=>{for(var i=s>1?void 0:s?a0(t,r):t,n=e.length-1,o;n>=0;n--)(o=e[n])&&(i=(s?o(t,r,i):o(i))||i);return s&&i&&o0(t,r,i),i};let pn=class extends Ee{connectedCallback(){super.connectedCallback(),this.unsubscribe=G.subscribe(e=>{this.storeState=e})}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribe?.()}render(){const e=Array.from(this.storeState?.templates?.values()??[]),t=this.storeState?.activeTemplateId?this.storeState.templates.get(this.storeState.activeTemplateId):null;return N`
      <div class="container">
        <div class="list-panel">
          <ccm-template-list
            .templates=${e}
            .activeTemplateId=${this.storeState?.activeTemplateId}
            @template-select=${this.handleSelect}
            @template-add=${this.handleAdd}
            @template-delete=${this.handleDelete}
            @template-rename=${this.handleRename}
            @template-download=${this.handleDownload}
          ></ccm-template-list>
        </div>

        <div class="editor-panel">
          ${t?this.renderEditor(t):this.renderEmptyState(e.length===0)}
        </div>
      </div>
    `}renderEditor(e){return N`
      <div class="editor-header">
        <h3>
          <sl-icon name="file-earmark-code"></sl-icon>
          ${e.name}
        </h3>
      </div>
      <div class="editor-content">
        <ccm-template-editor
          .content=${e.content}
          .manifest=${this.storeState.manifest}
          @content-change=${this.handleContentChange}
        ></ccm-template-editor>
      </div>
    `}renderEmptyState(e){return e?N`
        <div class="empty-state">
          <sl-icon name="file-earmark-code"></sl-icon>
          <h3>No Templates</h3>
          <p>Click the + button to create your first Jet template</p>
        </div>
      `:N`
      <div class="empty-state">
        <sl-icon name="cursor-text"></sl-icon>
        <h3>Select a Template</h3>
        <p>Choose a template from the list to start editing</p>
      </div>
    `}handleSelect(e){G.setActiveTemplate(e.detail)}handleAdd(e){try{const t=G.addTemplate(e.detail);G.setActiveTemplate(t)}catch(t){this.showErrorToast(t.message)}}handleDelete(e){const t=G.getTemplateById(e.detail);t&&confirm(`Delete template "${t.name}"?`)&&G.deleteTemplate(e.detail)}handleRename(e){try{G.renameTemplate(e.detail.id,e.detail.name)}catch(t){this.showErrorToast(t.message)}}handleDownload(e){const t=G.getTemplateById(e.detail);t&&this.downloadTemplate(t)}downloadTemplate(e){const t=new Blob([e.content],{type:"text/plain"}),r=URL.createObjectURL(t),s=document.createElement("a");s.href=r,s.download=e.name,document.body.appendChild(s),s.click(),document.body.removeChild(s),URL.revokeObjectURL(r),this.showToast(`Downloaded ${e.name}`)}handleContentChange(e){this.storeState?.activeTemplateId&&G.updateTemplateContent(this.storeState.activeTemplateId,e.detail)}showToast(e){const t=Object.assign(document.createElement("sl-alert"),{variant:"success",closable:!0,duration:3e3,innerHTML:`<sl-icon name="check-circle" slot="icon"></sl-icon>${e}`});document.body.appendChild(t),t.toast()}showErrorToast(e){const t=Object.assign(document.createElement("sl-alert"),{variant:"danger",closable:!0,duration:5e3,innerHTML:`<sl-icon name="exclamation-triangle" slot="icon"></sl-icon>${e}`});document.body.appendChild(t),t.toast()}};pn.styles=ie`
    :host {
      display: block;
      height: 100%;
    }

    .container {
      display: flex;
      height: 100%;
      gap: 1px;
      background: var(--sl-color-neutral-200);
    }

    .list-panel {
      width: 240px;
      min-width: 200px;
      max-width: 300px;
      background: var(--sl-color-neutral-0);
      display: flex;
      flex-direction: column;
      overflow: hidden;
    }

    .editor-panel {
      flex: 1;
      min-width: 0;
      background: var(--sl-color-neutral-0);
      display: flex;
      flex-direction: column;
      overflow: hidden;
    }

    .editor-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 12px 16px;
      border-bottom: 1px solid var(--sl-color-neutral-200);
      background: var(--sl-color-neutral-50);
    }

    .editor-header h3 {
      margin: 0;
      font-size: 14px;
      font-weight: 500;
      color: var(--sl-color-neutral-700);
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .editor-header sl-icon {
      color: var(--sl-color-neutral-500);
    }

    .editor-content {
      flex: 1;
      min-height: 0;
      overflow: hidden;
    }

    ccm-template-editor {
      height: 100%;
    }

    /* Empty state */
    .empty-state {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100%;
      color: var(--sl-color-neutral-400);
      text-align: center;
      padding: 48px;
    }

    .empty-state sl-icon {
      font-size: 64px;
      margin-bottom: 16px;
      opacity: 0.5;
    }

    .empty-state h3 {
      margin: 0 0 8px 0;
      font-size: 16px;
      font-weight: 500;
      color: var(--sl-color-neutral-600);
    }

    .empty-state p {
      margin: 0;
      font-size: 14px;
    }

    /* Mobile: stack vertically */
    @media (max-width: 600px) {
      .container {
        flex-direction: column;
      }

      .list-panel {
        width: 100%;
        max-width: none;
        height: auto;
        max-height: 200px;
        border-bottom: 1px solid var(--sl-color-neutral-200);
      }

      .editor-panel {
        flex: 1;
        min-height: 300px;
      }
    }
  `;Ju([H()],pn.prototype,"storeState",2);pn=Ju([Ze("ccm-templates-editor")],pn);var l0=Object.defineProperty,c0=Object.getOwnPropertyDescriptor,jt=(e,t,r,s)=>{for(var i=s>1?void 0:s?c0(t,r):t,n=e.length-1,o;n>=0;n--)(o=e[n])&&(i=(s?o(t,r,i):o(i))||i);return s&&i&&l0(t,r,i),i};let gt=class extends Ee{constructor(){super(...arguments),this.yamlPanelCollapsed=!1,this.activeTab="resources",this.showRecoveryDialog=!1,this.recoveryLastSaved=null,this.recoveryResourceCount=0,this.recoveryTemplateCount=0,this.isMobile=!1,this.boundRecoveryHandler=this.handleRecoveryAvailable.bind(this),this.mediaQuery=window.matchMedia("(max-width: 900px)"),this.handleMediaChange=e=>{this.isMobile=e.matches}}connectedCallback(){super.connectedCallback(),this.isMobile=this.mediaQuery.matches,this.mediaQuery.addEventListener("change",this.handleMediaChange),this.unsubscribe=G.subscribe(e=>{this.storeState=e}),window.addEventListener("ccm-recovery-available",this.boundRecoveryHandler)}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribe?.(),window.removeEventListener("ccm-recovery-available",this.boundRecoveryHandler),this.mediaQuery.removeEventListener("change",this.handleMediaChange)}handleRecoveryAvailable(e){const{lastSaved:t,resourceCount:r,templateCount:s}=e.detail;this.recoveryLastSaved=t,this.recoveryResourceCount=r??0,this.recoveryTemplateCount=s??0,this.showRecoveryDialog=!0}render(){return N`
      <ccm-header
        .isDirty=${this.storeState?.isDirty??!1}
        .hasErrors=${G.hasErrors()}
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
        .resourceCount=${this.recoveryResourceCount}
        .templateCount=${this.recoveryTemplateCount}
        @recover=${this.handleRecover}
        @discard=${this.handleDiscardRecovery}
      ></ccm-recovery-dialog>
    `}handleTabChange(e){this.activeTab=e.detail.name}handleToggleYamlPanel(){this.yamlPanelCollapsed=!this.yamlPanelCollapsed}handleImport(e){const t=e.detail,r=Av(t);r.success?r.warnings?.length?this.showAlert("Imported with warnings: "+r.warnings.join(", "),"warning"):this.showAlert("Manifest imported successfully","success"):(console.error("Import failed:",r.errors),this.showAlert("Import failed: "+(r.errors?.join(", ")||"Unknown error"),"danger"))}handleExport(){Ev()}handleNew(){this.storeState?.isDirty&&!confirm("Discard unsaved changes?")||G.reset()}handleRecover(){this.showRecoveryDialog=!1,window.dispatchEvent(new CustomEvent("ccm-recovery-decision",{detail:{recover:!0}})),this.showAlert("Previous work recovered","success")}handleDiscardRecovery(){this.showRecoveryDialog=!1,window.dispatchEvent(new CustomEvent("ccm-recovery-decision",{detail:{recover:!1}}))}showAlert(e,t="success"){const r=Object.assign(document.createElement("sl-alert"),{variant:t,closable:!0,duration:3e3,innerHTML:`<sl-icon name="${t==="success"?"check-circle":"exclamation-triangle"}" slot="icon"></sl-icon>${e}`});document.body.appendChild(r),r.toast()}renderDesktopLayout(){return this.yamlPanelCollapsed?N`
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
      `:N`
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
    `}renderMobileLayout(){return this.yamlPanelCollapsed?N`
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
      `:N`
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
    `}renderEditorTabs(){return N`
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
        <sl-tab slot="nav" panel="templates" ?active=${this.activeTab==="templates"}>
          Templates
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

        <sl-tab-panel name="templates">
          <ccm-templates-editor></ccm-templates-editor>
        </sl-tab-panel>
      </sl-tab-group>
    `}};gt.styles=ie`
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

  `;jt([H()],gt.prototype,"storeState",2);jt([H()],gt.prototype,"yamlPanelCollapsed",2);jt([H()],gt.prototype,"activeTab",2);jt([H()],gt.prototype,"showRecoveryDialog",2);jt([H()],gt.prototype,"recoveryLastSaved",2);jt([H()],gt.prototype,"recoveryResourceCount",2);jt([H()],gt.prototype,"recoveryTemplateCount",2);jt([H()],gt.prototype,"isMobile",2);gt=jt([Ze("ccm-studio")],gt);function ld(){if(ks.hasSavedData()){const e=ks.getSummary();window.dispatchEvent(new CustomEvent("ccm-recovery-available",{detail:{lastSaved:e?.lastSaved??null,resourceCount:e?.resourceCount??0,templateCount:e?.templateCount??0}}))}else Fu()}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",ld):requestAnimationFrame(ld);window.addEventListener("ccm-recovery-decision",e=>{const{recover:t}=e.detail;t?rv():ks.clear(),Fu()});
