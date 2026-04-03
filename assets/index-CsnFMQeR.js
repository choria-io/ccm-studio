var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(e&&(t=e(e=0)),t),s=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),c=(e,n)=>{let r={};for(var i in e)t(r,i,{get:e[i],enumerable:!0});return n||t(r,Symbol.toStringTag,{value:`Module`}),r},l=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},u=(n,r,a)=>(a=n==null?{}:e(i(n)),l(r||!n||!n.__esModule?t(a,`default`,{value:n,enumerable:!0}):a,n)),d=e=>a.call(e,`module.exports`)?e[`module.exports`]:l(t({},`__esModule`,{value:!0}),e);(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var f=globalThis,p=f.ShadowRoot&&(f.ShadyCSS===void 0||f.ShadyCSS.nativeShadow)&&`adoptedStyleSheets`in Document.prototype&&`replace`in CSSStyleSheet.prototype,m=Symbol(),h=new WeakMap,g=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==m)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(p&&e===void 0){let n=t!==void 0&&t.length===1;n&&(e=h.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&h.set(t,e))}return e}toString(){return this.cssText}},_=e=>new g(typeof e==`string`?e:e+``,void 0,m),v=(e,...t)=>new g(e.length===1?e[0]:t.reduce((t,n,r)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if(typeof e==`number`)return e;throw Error(`Value passed to 'css' function must be a 'css' function result: `+e+`. Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.`)})(n)+e[r+1],e[0]),e,m),y=(e,t)=>{if(p)e.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let n of t){let t=document.createElement(`style`),r=f.litNonce;r!==void 0&&t.setAttribute(`nonce`,r),t.textContent=n.cssText,e.appendChild(t)}},b=p?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t=``;for(let n of e.cssRules)t+=n.cssText;return _(t)})(e):e,{is:x,defineProperty:S,getOwnPropertyDescriptor:C,getOwnPropertyNames:w,getOwnPropertySymbols:T,getPrototypeOf:ee}=Object,te=globalThis,E=te.trustedTypes,ne=E?E.emptyScript:``,re=te.reactiveElementPolyfillSupport,ie=(e,t)=>e,D={toAttribute(e,t){switch(t){case Boolean:e=e?ne:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},O=(e,t)=>!x(e,t),ae={attribute:!0,type:String,converter:D,reflect:!1,useDefault:!1,hasChanged:O};Symbol.metadata??=Symbol(`metadata`),te.litPropertyMetadata??=new WeakMap;var oe=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=ae){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let n=Symbol(),r=this.getPropertyDescriptor(e,n,t);r!==void 0&&S(this.prototype,e,r)}}static getPropertyDescriptor(e,t,n){let{get:r,set:i}=C(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:r,set(t){let a=r?.call(this);i?.call(this,t),this.requestUpdate(e,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??ae}static _$Ei(){if(this.hasOwnProperty(ie(`elementProperties`)))return;let e=ee(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(ie(`finalized`)))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(ie(`properties`))){let e=this.properties,t=[...w(e),...T(e)];for(let n of t)this.createProperty(n,e[n])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[e,n]of t)this.elementProperties.set(e,n)}this._$Eh=new Map;for(let[e,t]of this.elementProperties){let n=this._$Eu(e,t);n!==void 0&&this._$Eh.set(n,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let e of n)t.unshift(b(e))}else e!==void 0&&t.push(b(e));return t}static _$Eu(e,t){let n=t.attribute;return!1===n?void 0:typeof n==`string`?n:typeof e==`string`?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return y(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){let n=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,n);if(r!==void 0&&!0===n.reflect){let i=(n.converter?.toAttribute===void 0?D:n.converter).toAttribute(t,n.type);this._$Em=e,i==null?this.removeAttribute(r):this.setAttribute(r,i),this._$Em=null}}_$AK(e,t){let n=this.constructor,r=n._$Eh.get(e);if(r!==void 0&&this._$Em!==r){let e=n.getPropertyOptions(r),i=typeof e.converter==`function`?{fromAttribute:e.converter}:e.converter?.fromAttribute===void 0?D:e.converter;this._$Em=r;let a=i.fromAttribute(t,e.type);this[r]=a??this._$Ej?.get(r)??a,this._$Em=null}}requestUpdate(e,t,n,r=!1,i){if(e!==void 0){let a=this.constructor;if(!1===r&&(i=this[e]),n??=a.getPropertyOptions(e),!((n.hasChanged??O)(i,t)||n.useDefault&&n.reflect&&i===this._$Ej?.get(e)&&!this.hasAttribute(a._$Eu(e,n))))return;this.C(e,t,n)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:r,wrapped:i},a){n&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,a??t??this[e]),!0!==i||a!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),!0===r&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[t,n]of e){let{wrapped:e}=n,r=this[t];!0!==e||this._$AL.has(t)||r===void 0||this.C(t,void 0,n,r)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};oe.elementStyles=[],oe.shadowRootOptions={mode:`open`},oe[ie(`elementProperties`)]=new Map,oe[ie(`finalized`)]=new Map,re?.({ReactiveElement:oe}),(te.reactiveElementVersions??=[]).push(`2.1.2`);var se=globalThis,ce=e=>e,le=se.trustedTypes,ue=le?le.createPolicy(`lit-html`,{createHTML:e=>e}):void 0,de=`$lit$`,k=`lit$${Math.random().toFixed(9).slice(2)}$`,fe=`?`+k,pe=`<${fe}>`,me=document,he=()=>me.createComment(``),ge=e=>e===null||typeof e!=`object`&&typeof e!=`function`,_e=Array.isArray,ve=e=>_e(e)||typeof e?.[Symbol.iterator]==`function`,ye=`[ 	
\f\r]`,be=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,xe=/-->/g,Se=/>/g,Ce=RegExp(`>|${ye}(?:([^\\s"'>=/]+)(${ye}*=${ye}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,`g`),we=/'/g,Te=/"/g,Ee=/^(?:script|style|textarea|title)$/i,A=(e=>(t,...n)=>({_$litType$:e,strings:t,values:n}))(1),De=Symbol.for(`lit-noChange`),j=Symbol.for(`lit-nothing`),Oe=new WeakMap,ke=me.createTreeWalker(me,129);function Ae(e,t){if(!_e(e)||!e.hasOwnProperty(`raw`))throw Error(`invalid template strings array`);return ue===void 0?t:ue.createHTML(t)}var je=(e,t)=>{let n=e.length-1,r=[],i,a=t===2?`<svg>`:t===3?`<math>`:``,o=be;for(let t=0;t<n;t++){let n=e[t],s,c,l=-1,u=0;for(;u<n.length&&(o.lastIndex=u,c=o.exec(n),c!==null);)u=o.lastIndex,o===be?c[1]===`!--`?o=xe:c[1]===void 0?c[2]===void 0?c[3]!==void 0&&(o=Ce):(Ee.test(c[2])&&(i=RegExp(`</`+c[2],`g`)),o=Ce):o=Se:o===Ce?c[0]===`>`?(o=i??be,l=-1):c[1]===void 0?l=-2:(l=o.lastIndex-c[2].length,s=c[1],o=c[3]===void 0?Ce:c[3]===`"`?Te:we):o===Te||o===we?o=Ce:o===xe||o===Se?o=be:(o=Ce,i=void 0);let d=o===Ce&&e[t+1].startsWith(`/>`)?` `:``;a+=o===be?n+pe:l>=0?(r.push(s),n.slice(0,l)+de+n.slice(l)+k+d):n+k+(l===-2?t:d)}return[Ae(e,a+(e[n]||`<?>`)+(t===2?`</svg>`:t===3?`</math>`:``)),r]},Me=class e{constructor({strings:t,_$litType$:n},r){let i;this.parts=[];let a=0,o=0,s=t.length-1,c=this.parts,[l,u]=je(t,n);if(this.el=e.createElement(l,r),ke.currentNode=this.el.content,n===2||n===3){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;(i=ke.nextNode())!==null&&c.length<s;){if(i.nodeType===1){if(i.hasAttributes())for(let e of i.getAttributeNames())if(e.endsWith(de)){let t=u[o++],n=i.getAttribute(e).split(k),r=/([.?@])?(.*)/.exec(t);c.push({type:1,index:a,name:r[2],strings:n,ctor:r[1]===`.`?Le:r[1]===`?`?Re:r[1]===`@`?ze:Ie}),i.removeAttribute(e)}else e.startsWith(k)&&(c.push({type:6,index:a}),i.removeAttribute(e));if(Ee.test(i.tagName)){let e=i.textContent.split(k),t=e.length-1;if(t>0){i.textContent=le?le.emptyScript:``;for(let n=0;n<t;n++)i.append(e[n],he()),ke.nextNode(),c.push({type:2,index:++a});i.append(e[t],he())}}}else if(i.nodeType===8)if(i.data===fe)c.push({type:2,index:a});else{let e=-1;for(;(e=i.data.indexOf(k,e+1))!==-1;)c.push({type:7,index:a}),e+=k.length-1}a++}}static createElement(e,t){let n=me.createElement(`template`);return n.innerHTML=e,n}};function Ne(e,t,n=e,r){if(t===De)return t;let i=r===void 0?n._$Cl:n._$Co?.[r],a=ge(t)?void 0:t._$litDirective$;return i?.constructor!==a&&(i?._$AO?.(!1),a===void 0?i=void 0:(i=new a(e),i._$AT(e,n,r)),r===void 0?n._$Cl=i:(n._$Co??=[])[r]=i),i!==void 0&&(t=Ne(e,i._$AS(e,t.values),i,r)),t}var Pe=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,r=(e?.creationScope??me).importNode(t,!0);ke.currentNode=r;let i=ke.nextNode(),a=0,o=0,s=n[0];for(;s!==void 0;){if(a===s.index){let t;s.type===2?t=new Fe(i,i.nextSibling,this,e):s.type===1?t=new s.ctor(i,s.name,s.strings,this,e):s.type===6&&(t=new Be(i,this,e)),this._$AV.push(t),s=n[++o]}a!==s?.index&&(i=ke.nextNode(),a++)}return ke.currentNode=me,r}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings===void 0?n._$AI(e[t]):(n._$AI(e,n,t),t+=n.strings.length-2)),t++}},Fe=class e{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,r){this.type=2,this._$AH=j,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Ne(this,e,t),ge(e)?e===j||e==null||e===``?(this._$AH!==j&&this._$AR(),this._$AH=j):e!==this._$AH&&e!==De&&this._(e):e._$litType$===void 0?e.nodeType===void 0?ve(e)?this.k(e):this._(e):this.T(e):this.$(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==j&&ge(this._$AH)?this._$AA.nextSibling.data=e:this.T(me.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:n}=e,r=typeof n==`number`?this._$AC(e):(n.el===void 0&&(n.el=Me.createElement(Ae(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===r)this._$AH.p(t);else{let e=new Pe(r,this),n=e.u(this.options);e.p(t),this.T(n),this._$AH=e}}_$AC(e){let t=Oe.get(e.strings);return t===void 0&&Oe.set(e.strings,t=new Me(e)),t}k(t){_e(this._$AH)||(this._$AH=[],this._$AR());let n=this._$AH,r,i=0;for(let a of t)i===n.length?n.push(r=new e(this.O(he()),this.O(he()),this,this.options)):r=n[i],r._$AI(a),i++;i<n.length&&(this._$AR(r&&r._$AB.nextSibling,i),n.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let t=ce(e).nextSibling;ce(e).remove(),e=t}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},Ie=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,r,i){this.type=1,this._$AH=j,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=i,n.length>2||n[0]!==``||n[1]!==``?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=j}_$AI(e,t=this,n,r){let i=this.strings,a=!1;if(i===void 0)e=Ne(this,e,t,0),a=!ge(e)||e!==this._$AH&&e!==De,a&&(this._$AH=e);else{let r=e,o,s;for(e=i[0],o=0;o<i.length-1;o++)s=Ne(this,r[n+o],t,o),s===De&&(s=this._$AH[o]),a||=!ge(s)||s!==this._$AH[o],s===j?e=j:e!==j&&(e+=(s??``)+i[o+1]),this._$AH[o]=s}a&&!r&&this.j(e)}j(e){e===j?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??``)}},Le=class extends Ie{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===j?void 0:e}},Re=class extends Ie{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==j)}},ze=class extends Ie{constructor(e,t,n,r,i){super(e,t,n,r,i),this.type=5}_$AI(e,t=this){if((e=Ne(this,e,t,0)??j)===De)return;let n=this._$AH,r=e===j&&n!==j||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,i=e!==j&&(n===j||r);r&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH==`function`?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},Be=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){Ne(this,e)}},Ve={M:de,P:k,A:fe,C:1,L:je,R:Pe,D:ve,V:Ne,I:Fe,H:Ie,N:Re,U:ze,B:Le,F:Be},He=se.litHtmlPolyfillSupport;He?.(Me,Fe),(se.litHtmlVersions??=[]).push(`3.3.2`);var Ue=(e,t,n)=>{let r=n?.renderBefore??t,i=r._$litPart$;if(i===void 0){let e=n?.renderBefore??null;r._$litPart$=i=new Fe(t.insertBefore(he(),e),e,void 0,n??{})}return i._$AI(e),i},We=globalThis,Ge=class extends oe{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Ue(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return De}};Ge._$litElement$=!0,Ge.finalized=!0,We.litElementHydrateSupport?.({LitElement:Ge});var Ke=We.litElementPolyfillSupport;Ke?.({LitElement:Ge}),(We.litElementVersions??=[]).push(`4.2.2`);var qe=v`
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
`,Je=new Set,Ye=new Map,Xe,Ze=`ltr`,Qe=`en`,$e=typeof MutationObserver<`u`&&typeof document<`u`&&document.documentElement!==void 0;if($e){let e=new MutationObserver(tt);Ze=document.documentElement.dir||`ltr`,Qe=document.documentElement.lang||navigator.language,e.observe(document.documentElement,{attributes:!0,attributeFilter:[`dir`,`lang`]})}function et(...e){e.map(e=>{let t=e.$code.toLowerCase();Ye.has(t)?Ye.set(t,Object.assign(Object.assign({},Ye.get(t)),e)):Ye.set(t,e),Xe||=e}),tt()}function tt(){$e&&(Ze=document.documentElement.dir||`ltr`,Qe=document.documentElement.lang||navigator.language),[...Je.keys()].map(e=>{typeof e.requestUpdate==`function`&&e.requestUpdate()})}var nt=class{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){Je.add(this.host)}hostDisconnected(){Je.delete(this.host)}dir(){return`${this.host.dir||Ze}`.toLowerCase()}lang(){return`${this.host.lang||Qe}`.toLowerCase()}getTranslationData(e){let t=new Intl.Locale(e.replace(/_/g,`-`)),n=t?.language.toLowerCase(),r=(t?.region)?.toLowerCase()??``;return{locale:t,language:n,region:r,primary:Ye.get(`${n}-${r}`),secondary:Ye.get(n)}}exists(e,t){let{primary:n,secondary:r}=this.getTranslationData(t.lang??this.lang());return t=Object.assign({includeFallback:!1},t),!!(n&&n[e]||r&&r[e]||t.includeFallback&&Xe&&Xe[e])}term(e,...t){let{primary:n,secondary:r}=this.getTranslationData(this.lang()),i;if(n&&n[e])i=n[e];else if(r&&r[e])i=r[e];else if(Xe&&Xe[e])i=Xe[e];else return console.error(`No translation found for: ${String(e)}`),String(e);return typeof i==`function`?i(...t):i}date(e,t){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),t).format(e)}number(e,t){return e=Number(e),isNaN(e)?``:new Intl.NumberFormat(this.lang(),t).format(e)}relativeTime(e,t,n){return new Intl.RelativeTimeFormat(this.lang(),n).format(e,t)}},rt={$code:`en`,$name:`English`,$dir:`ltr`,carousel:`Carousel`,clearEntry:`Clear entry`,close:`Close`,copied:`Copied`,copy:`Copy`,currentValue:`Current value`,error:`Error`,goToSlide:(e,t)=>`Go to slide ${e} of ${t}`,hidePassword:`Hide password`,loading:`Loading`,nextSlide:`Next slide`,numOptionsSelected:e=>e===0?`No options selected`:e===1?`1 option selected`:`${e} options selected`,previousSlide:`Previous slide`,progress:`Progress`,remove:`Remove`,resize:`Resize`,scrollToEnd:`Scroll to end`,scrollToStart:`Scroll to start`,selectAColorFromTheScreen:`Select a color from the screen`,showPassword:`Show password`,slideNum:e=>`Slide ${e}`,toggleColorFormat:`Toggle color format`};et(rt);var it=rt,at=class extends nt{};et(it);var M=v`
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
`,ot=Object.defineProperty,st=Object.defineProperties,ct=Object.getOwnPropertyDescriptor,lt=Object.getOwnPropertyDescriptors,ut=Object.getOwnPropertySymbols,dt=Object.prototype.hasOwnProperty,ft=Object.prototype.propertyIsEnumerable,pt=(e,t)=>(t=Symbol[e])?t:Symbol.for(`Symbol.`+e),mt=e=>{throw TypeError(e)},ht=(e,t,n)=>t in e?ot(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,gt=(e,t)=>{for(var n in t||={})dt.call(t,n)&&ht(e,n,t[n]);if(ut)for(var n of ut(t))ft.call(t,n)&&ht(e,n,t[n]);return e},_t=(e,t)=>st(e,lt(t)),N=(e,t,n,r)=>{for(var i=r>1?void 0:r?ct(t,n):t,a=e.length-1,o;a>=0;a--)(o=e[a])&&(i=(r?o(t,n,i):o(i))||i);return r&&i&&ot(t,n,i),i},vt=(e,t,n)=>t.has(e)||mt(`Cannot `+n),yt=(e,t,n)=>(vt(e,t,`read from private field`),n?n.call(e):t.get(e)),bt=(e,t,n)=>t.has(e)?mt(`Cannot add the same private member more than once`):t instanceof WeakSet?t.add(e):t.set(e,n),xt=(e,t,n,r)=>(vt(e,t,`write to private field`),r?r.call(e,n):t.set(e,n),n),St=function(e,t){this[0]=e,this[1]=t},Ct=e=>{var t=e[pt(`asyncIterator`)],n=!1,r,i={};return t==null?(t=e[pt(`iterator`)](),r=e=>i[e]=n=>t[e](n)):(t=t.call(e),r=e=>i[e]=r=>{if(n){if(n=!1,e===`throw`)throw r;return r}return n=!0,{done:!1,value:new St(new Promise(n=>{var i=t[e](r);i instanceof Object||mt(`Object expected`),n(i)}),1)}}),i[pt(`iterator`)]=()=>i,r(`next`),`throw`in t?r(`throw`):i.throw=e=>{throw e},`return`in t&&r(`return`),i},wt=e=>(t,n)=>{n===void 0?customElements.define(e,t):n.addInitializer(()=>{customElements.define(e,t)})},Tt={attribute:!0,type:String,converter:D,reflect:!1,hasChanged:O},Et=(e=Tt,t,n)=>{let{kind:r,metadata:i}=n,a=globalThis.litPropertyMetadata.get(i);if(a===void 0&&globalThis.litPropertyMetadata.set(i,a=new Map),r===`setter`&&((e=Object.create(e)).wrapped=!0),a.set(n.name,e),r===`accessor`){let{name:r}=n;return{set(n){let i=t.get.call(this);t.set.call(this,n),this.requestUpdate(r,i,e,!0,n)},init(t){return t!==void 0&&this.C(r,void 0,e,t),t}}}if(r===`setter`){let{name:r}=n;return function(n){let i=this[r];t.call(this,n),this.requestUpdate(r,i,e,!0,n)}}throw Error(`Unsupported decorator location: `+r)};function P(e){return(t,n)=>typeof n==`object`?Et(e,t,n):((e,t,n)=>{let r=t.hasOwnProperty(n);return t.constructor.createProperty(n,e),r?Object.getOwnPropertyDescriptor(t,n):void 0})(e,t,n)}function F(e){return P({...e,state:!0,attribute:!1})}function Dt(e){return(t,n)=>{let r=typeof t==`function`?t:t[n];Object.assign(r,e)}}var Ot=(e,t,n)=>(n.configurable=!0,n.enumerable=!0,Reflect.decorate&&typeof t!=`object`&&Object.defineProperty(e,t,n),n);function I(e,t){return(n,r,i)=>{let a=t=>t.renderRoot?.querySelector(e)??null;if(t){let{get:e,set:t}=typeof r==`object`?n:i??(()=>{let e=Symbol();return{get(){return this[e]},set(t){this[e]=t}}})();return Ot(n,r,{get(){let n=e.call(this);return n===void 0&&(n=a(this),(n!==null||this.hasUpdated)&&t.call(this,n)),n}})}return Ot(n,r,{get(){return a(this)}})}}var kt,L=class extends Ge{constructor(){super(),bt(this,kt,!1),this.initialReflectedProperties=new Map,Object.entries(this.constructor.dependencies).forEach(([e,t])=>{this.constructor.define(e,t)})}emit(e,t){let n=new CustomEvent(e,gt({bubbles:!0,cancelable:!1,composed:!0,detail:{}},t));return this.dispatchEvent(n),n}static define(e,t=this,n={}){let r=customElements.get(e);if(!r){try{customElements.define(e,t,n)}catch{customElements.define(e,class extends t{},n)}return}let i=` (unknown version)`,a=i;`version`in t&&t.version&&(i=` v`+t.version),`version`in r&&r.version&&(a=` v`+r.version),!(i&&a&&i===a)&&console.warn(`Attempted to register <${e}>${i}, but <${e}>${a} has already been registered.`)}attributeChangedCallback(e,t,n){yt(this,kt)||(this.constructor.elementProperties.forEach((e,t)=>{e.reflect&&this[t]!=null&&this.initialReflectedProperties.set(t,this[t])}),xt(this,kt,!0)),super.attributeChangedCallback(e,t,n)}willUpdate(e){super.willUpdate(e),this.initialReflectedProperties.forEach((t,n)=>{e.has(n)&&this[n]==null&&(this[n]=t)})}};kt=new WeakMap,L.version=`2.20.1`,L.dependencies={},N([P()],L.prototype,`dir`,2),N([P()],L.prototype,`lang`,2);var At=class extends L{constructor(){super(...arguments),this.localize=new at(this)}render(){return A`
      <svg part="base" class="spinner" role="progressbar" aria-label=${this.localize.term(`loading`)}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `}};At.styles=[M,qe];var jt=new WeakMap,Mt=new WeakMap,Nt=new WeakMap,Pt=new WeakSet,Ft=new WeakMap,It=class{constructor(e,t){this.handleFormData=e=>{let t=this.options.disabled(this.host),n=this.options.name(this.host),r=this.options.value(this.host),i=this.host.tagName.toLowerCase()===`sl-button`;this.host.isConnected&&!t&&!i&&typeof n==`string`&&n.length>0&&r!==void 0&&(Array.isArray(r)?r.forEach(t=>{e.formData.append(n,t.toString())}):e.formData.append(n,r.toString()))},this.handleFormSubmit=e=>{var t;let n=this.options.disabled(this.host),r=this.options.reportValidity;this.form&&!this.form.noValidate&&((t=jt.get(this.form))==null||t.forEach(e=>{this.setUserInteracted(e,!0)})),this.form&&!this.form.noValidate&&!n&&!r(this.host)&&(e.preventDefault(),e.stopImmediatePropagation())},this.handleFormReset=()=>{this.options.setValue(this.host,this.options.defaultValue(this.host)),this.setUserInteracted(this.host,!1),Ft.set(this.host,[])},this.handleInteraction=e=>{let t=Ft.get(this.host);t.includes(e.type)||t.push(e.type),t.length===this.options.assumeInteractionOn.length&&this.setUserInteracted(this.host,!0)},this.checkFormValidity=()=>{if(this.form&&!this.form.noValidate){let e=this.form.querySelectorAll(`*`);for(let t of e)if(typeof t.checkValidity==`function`&&!t.checkValidity())return!1}return!0},this.reportFormValidity=()=>{if(this.form&&!this.form.noValidate){let e=this.form.querySelectorAll(`*`);for(let t of e)if(typeof t.reportValidity==`function`&&!t.reportValidity())return!1}return!0},(this.host=e).addController(this),this.options=gt({form:e=>{let t=e.form;if(t){let n=e.getRootNode().querySelector(`#${t}`);if(n)return n}return e.closest(`form`)},name:e=>e.name,value:e=>e.value,defaultValue:e=>e.defaultValue,disabled:e=>e.disabled??!1,reportValidity:e=>typeof e.reportValidity==`function`?e.reportValidity():!0,checkValidity:e=>typeof e.checkValidity==`function`?e.checkValidity():!0,setValue:(e,t)=>e.value=t,assumeInteractionOn:[`sl-input`]},t)}hostConnected(){let e=this.options.form(this.host);e&&this.attachForm(e),Ft.set(this.host,[]),this.options.assumeInteractionOn.forEach(e=>{this.host.addEventListener(e,this.handleInteraction)})}hostDisconnected(){this.detachForm(),Ft.delete(this.host),this.options.assumeInteractionOn.forEach(e=>{this.host.removeEventListener(e,this.handleInteraction)})}hostUpdated(){let e=this.options.form(this.host);e||this.detachForm(),e&&this.form!==e&&(this.detachForm(),this.attachForm(e)),this.host.hasUpdated&&this.setValidity(this.host.validity.valid)}attachForm(e){e?(this.form=e,jt.has(this.form)?jt.get(this.form).add(this.host):jt.set(this.form,new Set([this.host])),this.form.addEventListener(`formdata`,this.handleFormData),this.form.addEventListener(`submit`,this.handleFormSubmit),this.form.addEventListener(`reset`,this.handleFormReset),Mt.has(this.form)||(Mt.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity()),Nt.has(this.form)||(Nt.set(this.form,this.form.checkValidity),this.form.checkValidity=()=>this.checkFormValidity())):this.form=void 0}detachForm(){if(!this.form)return;let e=jt.get(this.form);e&&(e.delete(this.host),e.size<=0&&(this.form.removeEventListener(`formdata`,this.handleFormData),this.form.removeEventListener(`submit`,this.handleFormSubmit),this.form.removeEventListener(`reset`,this.handleFormReset),Mt.has(this.form)&&(this.form.reportValidity=Mt.get(this.form),Mt.delete(this.form)),Nt.has(this.form)&&(this.form.checkValidity=Nt.get(this.form),Nt.delete(this.form)),this.form=void 0))}setUserInteracted(e,t){t?Pt.add(e):Pt.delete(e),e.requestUpdate()}doAction(e,t){if(this.form){let n=document.createElement(`button`);n.type=e,n.style.position=`absolute`,n.style.width=`0`,n.style.height=`0`,n.style.clipPath=`inset(50%)`,n.style.overflow=`hidden`,n.style.whiteSpace=`nowrap`,t&&(n.name=t.name,n.value=t.value,[`formaction`,`formenctype`,`formmethod`,`formnovalidate`,`formtarget`].forEach(e=>{t.hasAttribute(e)&&n.setAttribute(e,t.getAttribute(e))})),this.form.append(n),n.click(),n.remove()}}getForm(){return this.form??null}reset(e){this.doAction(`reset`,e)}submit(e){this.doAction(`submit`,e)}setValidity(e){let t=this.host,n=!!Pt.has(t),r=!!t.required;t.toggleAttribute(`data-required`,r),t.toggleAttribute(`data-optional`,!r),t.toggleAttribute(`data-invalid`,!e),t.toggleAttribute(`data-valid`,e),t.toggleAttribute(`data-user-invalid`,!e&&n),t.toggleAttribute(`data-user-valid`,e&&n)}updateValidity(){let e=this.host;this.setValidity(e.validity.valid)}emitInvalidEvent(e){let t=new CustomEvent(`sl-invalid`,{bubbles:!1,composed:!1,cancelable:!0,detail:{}});e||t.preventDefault(),this.host.dispatchEvent(t)||e?.preventDefault()}},Lt=Object.freeze({badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:!0,valueMissing:!1});Object.freeze(_t(gt({},Lt),{valid:!1,valueMissing:!0})),Object.freeze(_t(gt({},Lt),{valid:!1,customError:!0}));var Rt=v`
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
`,zt=class{constructor(e,...t){this.slotNames=[],this.handleSlotChange=e=>{let t=e.target;(this.slotNames.includes(`[default]`)&&!t.name||t.name&&this.slotNames.includes(t.name))&&this.host.requestUpdate()},(this.host=e).addController(this),this.slotNames=t}hasDefaultSlot(){return[...this.host.childNodes].some(e=>{if(e.nodeType===e.TEXT_NODE&&e.textContent.trim()!==``)return!0;if(e.nodeType===e.ELEMENT_NODE){let t=e;if(t.tagName.toLowerCase()===`sl-visually-hidden`)return!1;if(!t.hasAttribute(`slot`))return!0}return!1})}hasNamedSlot(e){return this.host.querySelector(`:scope > [slot="${e}"]`)!==null}test(e){return e===`[default]`?this.hasDefaultSlot():this.hasNamedSlot(e)}hostConnected(){this.host.shadowRoot.addEventListener(`slotchange`,this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener(`slotchange`,this.handleSlotChange)}};function Bt(e){if(!e)return``;let t=e.assignedNodes({flatten:!0}),n=``;return[...t].forEach(e=>{e.nodeType===Node.TEXT_NODE&&(n+=e.textContent)}),n}var Vt=``;function Ht(e){Vt=e}function Ut(e=``){if(!Vt){let e=[...document.getElementsByTagName(`script`)],t=e.find(e=>e.hasAttribute(`data-shoelace`));if(t)Ht(t.getAttribute(`data-shoelace`));else{let t=e.find(e=>/shoelace(\.min)?\.js($|\?)/.test(e.src)||/shoelace-autoloader(\.min)?\.js($|\?)/.test(e.src)),n=``;t&&(n=t.getAttribute(`src`)),Ht(n.split(`/`).slice(0,-1).join(`/`))}}return Vt.replace(/\/$/,``)+(e?`/${e.replace(/^\//,``)}`:``)}var Wt={name:`default`,resolver:e=>Ut(`assets/icons/${e}.svg`)},Gt={caret:`
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
  `},Kt=[Wt,{name:`system`,resolver:e=>e in Gt?`data:image/svg+xml,${encodeURIComponent(Gt[e])}`:``}],qt=[];function Jt(e){qt.push(e)}function Yt(e){qt=qt.filter(t=>t!==e)}function Xt(e){return Kt.find(t=>t.name===e)}var Zt=v`
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
`;function R(e,t){let n=gt({waitUntilFirstUpdate:!1},t);return(t,r)=>{let{update:i}=t,a=Array.isArray(e)?e:[e];t.update=function(e){a.forEach(t=>{let i=t;if(e.has(i)){let t=e.get(i),a=this[i];t!==a&&(!n.waitUntilFirstUpdate||this.hasUpdated)&&this[r](t,a)}}),i.call(this,e)}}}var{I:Qt}=Ve,$t=(e,t)=>t===void 0?e?._$litType$!==void 0:e?._$litType$===t,en=e=>e.strings===void 0,tn={},nn=(e,t=tn)=>e._$AH=t,rn=Symbol(),an=Symbol(),on,sn=new Map,cn=class extends L{constructor(){super(...arguments),this.initialRender=!1,this.svg=null,this.label=``,this.library=`default`}async resolveIcon(e,t){let n;if(t?.spriteSheet)return this.svg=A`<svg part="svg">
        <use part="use" href="${e}"></use>
      </svg>`,this.svg;try{if(n=await fetch(e,{mode:`cors`}),!n.ok)return n.status===410?rn:an}catch{return an}try{let e=document.createElement(`div`);e.innerHTML=await n.text();let t=e.firstElementChild;if((t?.tagName)?.toLowerCase()!==`svg`)return rn;on||=new DOMParser;let r=on.parseFromString(t.outerHTML,`text/html`).body.querySelector(`svg`);return r?(r.part.add(`svg`),document.adoptNode(r)):rn}catch{return rn}}connectedCallback(){super.connectedCallback(),Jt(this)}firstUpdated(){this.initialRender=!0,this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),Yt(this)}getIconSource(){let e=Xt(this.library);return this.name&&e?{url:e.resolver(this.name),fromLibrary:!0}:{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label==`string`&&this.label.length>0?(this.setAttribute(`role`,`img`),this.setAttribute(`aria-label`,this.label),this.removeAttribute(`aria-hidden`)):(this.removeAttribute(`role`),this.removeAttribute(`aria-label`),this.setAttribute(`aria-hidden`,`true`))}async setIcon(){var e;let{url:t,fromLibrary:n}=this.getIconSource(),r=n?Xt(this.library):void 0;if(!t){this.svg=null;return}let i=sn.get(t);if(i||(i=this.resolveIcon(t,r),sn.set(t,i)),!this.initialRender)return;let a=await i;if(a===an&&sn.delete(t),t===this.getIconSource().url){if($t(a)){if(this.svg=a,r){await this.updateComplete;let e=this.shadowRoot.querySelector(`[part='svg']`);typeof r.mutator==`function`&&e&&r.mutator(e)}return}switch(a){case an:case rn:this.svg=null,this.emit(`sl-error`);break;default:this.svg=a.cloneNode(!0),(e=r?.mutator)==null||e.call(r,this.svg),this.emit(`sl-load`)}}}render(){return this.svg}};cn.styles=[M,Zt],N([F()],cn.prototype,`svg`,2),N([P({reflect:!0})],cn.prototype,`name`,2),N([P()],cn.prototype,`src`,2),N([P()],cn.prototype,`label`,2),N([P({reflect:!0})],cn.prototype,`library`,2),N([R(`label`)],cn.prototype,`handleLabelChange`,1),N([R([`name`,`src`,`library`])],cn.prototype,`setIcon`,1);var ln={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},un=e=>(...t)=>({_$litDirective$:e,values:t}),dn=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}},z=un(class extends dn{constructor(e){if(super(e),e.type!==ln.ATTRIBUTE||e.name!==`class`||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return` `+Object.keys(e).filter(t=>e[t]).join(` `)+` `}update(e,[t]){if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(` `).split(/\s/).filter(e=>e!==``)));for(let e in t)t[e]&&!this.nt?.has(e)&&this.st.add(e);return this.render(t)}let n=e.element.classList;for(let e of this.st)e in t||(n.remove(e),this.st.delete(e));for(let e in t){let r=!!t[e];r===this.st.has(e)||this.nt?.has(e)||(r?(n.add(e),this.st.add(e)):(n.remove(e),this.st.delete(e)))}return De}}),fn=Symbol.for(``),pn=e=>{if(e?.r===fn)return e?._$litStatic$},mn=(e,...t)=>({_$litStatic$:t.reduce((t,n,r)=>t+(e=>{if(e._$litStatic$!==void 0)return e._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${e}. Use 'unsafeStatic' to pass non-literal values, but\n            take care to ensure page security.`)})(n)+e[r+1],e[0]),r:fn}),hn=new Map,gn=(e=>(t,...n)=>{let r=n.length,i,a,o=[],s=[],c,l=0,u=!1;for(;l<r;){for(c=t[l];l<r&&(a=n[l],i=pn(a))!==void 0;)c+=i+t[++l],u=!0;l!==r&&s.push(a),o.push(c),l++}if(l===r&&o.push(t[r]),u){let e=o.join(`$$lit$$`);(t=hn.get(e))===void 0&&(o.raw=o,hn.set(e,t=o)),n=s}return e(t,...n)})(A),B=e=>e??j,V=class extends L{constructor(){super(...arguments),this.formControlController=new It(this,{assumeInteractionOn:[`click`]}),this.hasSlotController=new zt(this,`[default]`,`prefix`,`suffix`),this.localize=new at(this),this.hasFocus=!1,this.invalid=!1,this.title=``,this.variant=`default`,this.size=`medium`,this.caret=!1,this.disabled=!1,this.loading=!1,this.outline=!1,this.pill=!1,this.circle=!1,this.type=`button`,this.name=``,this.value=``,this.href=``,this.rel=`noreferrer noopener`}get validity(){return this.isButton()?this.button.validity:Lt}get validationMessage(){return this.isButton()?this.button.validationMessage:``}firstUpdated(){this.isButton()&&this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit(`sl-blur`)}handleFocus(){this.hasFocus=!0,this.emit(`sl-focus`)}handleClick(){this.type===`submit`&&this.formControlController.submit(this),this.type===`reset`&&this.formControlController.reset(this)}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.isButton()&&this.formControlController.setValidity(this.disabled)}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}checkValidity(){return this.isButton()?this.button.checkValidity():!0}getForm(){return this.formControlController.getForm()}reportValidity(){return this.isButton()?this.button.reportValidity():!0}setCustomValidity(e){this.isButton()&&(this.button.setCustomValidity(e),this.formControlController.updateValidity())}render(){let e=this.isLink(),t=e?mn`a`:mn`button`;return gn`
      <${t}
        part="base"
        class=${z({button:!0,"button--default":this.variant===`default`,"button--primary":this.variant===`primary`,"button--success":this.variant===`success`,"button--neutral":this.variant===`neutral`,"button--warning":this.variant===`warning`,"button--danger":this.variant===`danger`,"button--text":this.variant===`text`,"button--small":this.size===`small`,"button--medium":this.size===`medium`,"button--large":this.size===`large`,"button--caret":this.caret,"button--circle":this.circle,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--loading":this.loading,"button--standard":!this.outline,"button--outline":this.outline,"button--pill":this.pill,"button--rtl":this.localize.dir()===`rtl`,"button--has-label":this.hasSlotController.test(`[default]`),"button--has-prefix":this.hasSlotController.test(`prefix`),"button--has-suffix":this.hasSlotController.test(`suffix`)})}
        ?disabled=${B(e?void 0:this.disabled)}
        type=${B(e?void 0:this.type)}
        title=${this.title}
        name=${B(e?void 0:this.name)}
        value=${B(e?void 0:this.value)}
        href=${B(e&&!this.disabled?this.href:void 0)}
        target=${B(e?this.target:void 0)}
        download=${B(e?this.download:void 0)}
        rel=${B(e?this.rel:void 0)}
        role=${B(e?void 0:`button`)}
        aria-disabled=${this.disabled?`true`:`false`}
        tabindex=${this.disabled?`-1`:`0`}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @invalid=${this.isButton()?this.handleInvalid:null}
        @click=${this.handleClick}
      >
        <slot name="prefix" part="prefix" class="button__prefix"></slot>
        <slot part="label" class="button__label"></slot>
        <slot name="suffix" part="suffix" class="button__suffix"></slot>
        ${this.caret?gn` <sl-icon part="caret" class="button__caret" library="system" name="caret"></sl-icon> `:``}
        ${this.loading?gn`<sl-spinner part="spinner"></sl-spinner>`:``}
      </${t}>
    `}};V.styles=[M,Rt],V.dependencies={"sl-icon":cn,"sl-spinner":At},N([I(`.button`)],V.prototype,`button`,2),N([F()],V.prototype,`hasFocus`,2),N([F()],V.prototype,`invalid`,2),N([P()],V.prototype,`title`,2),N([P({reflect:!0})],V.prototype,`variant`,2),N([P({reflect:!0})],V.prototype,`size`,2),N([P({type:Boolean,reflect:!0})],V.prototype,`caret`,2),N([P({type:Boolean,reflect:!0})],V.prototype,`disabled`,2),N([P({type:Boolean,reflect:!0})],V.prototype,`loading`,2),N([P({type:Boolean,reflect:!0})],V.prototype,`outline`,2),N([P({type:Boolean,reflect:!0})],V.prototype,`pill`,2),N([P({type:Boolean,reflect:!0})],V.prototype,`circle`,2),N([P()],V.prototype,`type`,2),N([P()],V.prototype,`name`,2),N([P()],V.prototype,`value`,2),N([P()],V.prototype,`href`,2),N([P()],V.prototype,`target`,2),N([P()],V.prototype,`rel`,2),N([P()],V.prototype,`download`,2),N([P()],V.prototype,`form`,2),N([P({attribute:`formaction`})],V.prototype,`formAction`,2),N([P({attribute:`formenctype`})],V.prototype,`formEnctype`,2),N([P({attribute:`formmethod`})],V.prototype,`formMethod`,2),N([P({attribute:`formnovalidate`,type:Boolean})],V.prototype,`formNoValidate`,2),N([P({attribute:`formtarget`})],V.prototype,`formTarget`,2),N([R(`disabled`,{waitUntilFirstUpdate:!0})],V.prototype,`handleDisabledChange`,1),V.define(`sl-button`);var _n=v`
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
`,vn=(e=`value`)=>(t,n)=>{let r=t.constructor,i=r.prototype.attributeChangedCallback;r.prototype.attributeChangedCallback=function(t,a,o){let s=r.getPropertyOptions(e);if(t===(typeof s.attribute==`string`?s.attribute:e)){let t=s.converter||D,r=(typeof t==`function`?t:t?.fromAttribute??D.fromAttribute)(o,s.type);this[e]!==r&&(this[n]=r)}i.call(this,t,a,o)}},yn=v`
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
`,bn=un(class extends dn{constructor(e){if(super(e),e.type!==ln.PROPERTY&&e.type!==ln.ATTRIBUTE&&e.type!==ln.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!en(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===De||t===j)return t;let n=e.element,r=e.name;if(e.type===ln.PROPERTY){if(t===n[r])return De}else if(e.type===ln.BOOLEAN_ATTRIBUTE){if(!!t===n.hasAttribute(r))return De}else if(e.type===ln.ATTRIBUTE&&n.getAttribute(r)===t+``)return De;return nn(e),t}}),H=class extends L{constructor(){super(...arguments),this.formControlController=new It(this,{assumeInteractionOn:[`sl-blur`,`sl-input`]}),this.hasSlotController=new zt(this,`help-text`,`label`),this.localize=new at(this),this.hasFocus=!1,this.title=``,this.__numberInput=Object.assign(document.createElement(`input`),{type:`number`}),this.__dateInput=Object.assign(document.createElement(`input`),{type:`date`}),this.type=`text`,this.name=``,this.value=``,this.defaultValue=``,this.size=`medium`,this.filled=!1,this.pill=!1,this.label=``,this.helpText=``,this.clearable=!1,this.disabled=!1,this.placeholder=``,this.readonly=!1,this.passwordToggle=!1,this.passwordVisible=!1,this.noSpinButtons=!1,this.form=``,this.required=!1,this.spellcheck=!0}get valueAsDate(){return this.__dateInput.type=this.type,this.__dateInput.value=this.value,this.input?.valueAsDate||this.__dateInput.valueAsDate}set valueAsDate(e){this.__dateInput.type=this.type,this.__dateInput.valueAsDate=e,this.value=this.__dateInput.value}get valueAsNumber(){return this.__numberInput.value=this.value,this.input?.valueAsNumber||this.__numberInput.valueAsNumber}set valueAsNumber(e){this.__numberInput.valueAsNumber=e,this.value=this.__numberInput.value}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit(`sl-blur`)}handleChange(){this.value=this.input.value,this.emit(`sl-change`)}handleClearClick(e){e.preventDefault(),this.value!==``&&(this.value=``,this.emit(`sl-clear`),this.emit(`sl-input`),this.emit(`sl-change`)),this.input.focus()}handleFocus(){this.hasFocus=!0,this.emit(`sl-focus`)}handleInput(){this.value=this.input.value,this.formControlController.updateValidity(),this.emit(`sl-input`)}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleKeyDown(e){let t=e.metaKey||e.ctrlKey||e.shiftKey||e.altKey;e.key===`Enter`&&!t&&setTimeout(()=>{!e.defaultPrevented&&!e.isComposing&&this.formControlController.submit()})}handlePasswordToggle(){this.passwordVisible=!this.passwordVisible}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStepChange(){this.input.step=String(this.step),this.formControlController.updateValidity()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity()}focus(e){this.input.focus(e)}blur(){this.input.blur()}select(){this.input.select()}setSelectionRange(e,t,n=`none`){this.input.setSelectionRange(e,t,n)}setRangeText(e,t,n,r=`preserve`){let i=t??this.input.selectionStart,a=n??this.input.selectionEnd;this.input.setRangeText(e,i,a,r),this.value!==this.input.value&&(this.value=this.input.value)}showPicker(){`showPicker`in HTMLInputElement.prototype&&this.input.showPicker()}stepUp(){this.input.stepUp(),this.value!==this.input.value&&(this.value=this.input.value)}stepDown(){this.input.stepDown(),this.value!==this.input.value&&(this.value=this.input.value)}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){let e=this.hasSlotController.test(`label`),t=this.hasSlotController.test(`help-text`),n=this.label?!0:!!e,r=this.helpText?!0:!!t,i=this.clearable&&!this.disabled&&!this.readonly&&(typeof this.value==`number`||this.value.length>0);return A`
      <div
        part="form-control"
        class=${z({"form-control":!0,"form-control--small":this.size===`small`,"form-control--medium":this.size===`medium`,"form-control--large":this.size===`large`,"form-control--has-label":n,"form-control--has-help-text":r})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${n?`false`:`true`}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${z({input:!0,"input--small":this.size===`small`,"input--medium":this.size===`medium`,"input--large":this.size===`large`,"input--pill":this.pill,"input--standard":!this.filled,"input--filled":this.filled,"input--disabled":this.disabled,"input--focused":this.hasFocus,"input--empty":!this.value,"input--no-spin-buttons":this.noSpinButtons})}
          >
            <span part="prefix" class="input__prefix">
              <slot name="prefix"></slot>
            </span>

            <input
              part="input"
              id="input"
              class="input__control"
              type=${this.type===`password`&&this.passwordVisible?`text`:this.type}
              title=${this.title}
              name=${B(this.name)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${B(this.placeholder)}
              minlength=${B(this.minlength)}
              maxlength=${B(this.maxlength)}
              min=${B(this.min)}
              max=${B(this.max)}
              step=${B(this.step)}
              .value=${bn(this.value)}
              autocapitalize=${B(this.autocapitalize)}
              autocomplete=${B(this.autocomplete)}
              autocorrect=${B(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${this.spellcheck}
              pattern=${B(this.pattern)}
              enterkeyhint=${B(this.enterkeyhint)}
              inputmode=${B(this.inputmode)}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @keydown=${this.handleKeyDown}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            />

            ${i?A`
                  <button
                    part="clear-button"
                    class="input__clear"
                    type="button"
                    aria-label=${this.localize.term(`clearEntry`)}
                    @click=${this.handleClearClick}
                    tabindex="-1"
                  >
                    <slot name="clear-icon">
                      <sl-icon name="x-circle-fill" library="system"></sl-icon>
                    </slot>
                  </button>
                `:``}
            ${this.passwordToggle&&!this.disabled?A`
                  <button
                    part="password-toggle-button"
                    class="input__password-toggle"
                    type="button"
                    aria-label=${this.localize.term(this.passwordVisible?`hidePassword`:`showPassword`)}
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
                `:``}

            <span part="suffix" class="input__suffix">
              <slot name="suffix"></slot>
            </span>
          </div>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${r?`false`:`true`}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};H.styles=[M,yn,_n],H.dependencies={"sl-icon":cn},N([I(`.input__control`)],H.prototype,`input`,2),N([F()],H.prototype,`hasFocus`,2),N([P()],H.prototype,`title`,2),N([P({reflect:!0})],H.prototype,`type`,2),N([P()],H.prototype,`name`,2),N([P()],H.prototype,`value`,2),N([vn()],H.prototype,`defaultValue`,2),N([P({reflect:!0})],H.prototype,`size`,2),N([P({type:Boolean,reflect:!0})],H.prototype,`filled`,2),N([P({type:Boolean,reflect:!0})],H.prototype,`pill`,2),N([P()],H.prototype,`label`,2),N([P({attribute:`help-text`})],H.prototype,`helpText`,2),N([P({type:Boolean})],H.prototype,`clearable`,2),N([P({type:Boolean,reflect:!0})],H.prototype,`disabled`,2),N([P()],H.prototype,`placeholder`,2),N([P({type:Boolean,reflect:!0})],H.prototype,`readonly`,2),N([P({attribute:`password-toggle`,type:Boolean})],H.prototype,`passwordToggle`,2),N([P({attribute:`password-visible`,type:Boolean})],H.prototype,`passwordVisible`,2),N([P({attribute:`no-spin-buttons`,type:Boolean})],H.prototype,`noSpinButtons`,2),N([P({reflect:!0})],H.prototype,`form`,2),N([P({type:Boolean,reflect:!0})],H.prototype,`required`,2),N([P()],H.prototype,`pattern`,2),N([P({type:Number})],H.prototype,`minlength`,2),N([P({type:Number})],H.prototype,`maxlength`,2),N([P()],H.prototype,`min`,2),N([P()],H.prototype,`max`,2),N([P()],H.prototype,`step`,2),N([P()],H.prototype,`autocapitalize`,2),N([P()],H.prototype,`autocorrect`,2),N([P()],H.prototype,`autocomplete`,2),N([P({type:Boolean})],H.prototype,`autofocus`,2),N([P()],H.prototype,`enterkeyhint`,2),N([P({type:Boolean,converter:{fromAttribute:e=>!(!e||e===`false`),toAttribute:e=>e?`true`:`false`}})],H.prototype,`spellcheck`,2),N([P()],H.prototype,`inputmode`,2),N([R(`disabled`,{waitUntilFirstUpdate:!0})],H.prototype,`handleDisabledChange`,1),N([R(`step`,{waitUntilFirstUpdate:!0})],H.prototype,`handleStepChange`,1),N([R(`value`,{waitUntilFirstUpdate:!0})],H.prototype,`handleValueChange`,1),H.define(`sl-input`);var xn=v`
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
`,Sn=v`
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
`,Cn=class extends L{constructor(){super(...arguments),this.hasFocus=!1,this.label=``,this.disabled=!1}handleBlur(){this.hasFocus=!1,this.emit(`sl-blur`)}handleFocus(){this.hasFocus=!0,this.emit(`sl-focus`)}handleClick(e){this.disabled&&(e.preventDefault(),e.stopPropagation())}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}render(){let e=!!this.href,t=e?mn`a`:mn`button`;return gn`
      <${t}
        part="base"
        class=${z({"icon-button":!0,"icon-button--disabled":!e&&this.disabled,"icon-button--focused":this.hasFocus})}
        ?disabled=${B(e?void 0:this.disabled)}
        type=${B(e?void 0:`button`)}
        href=${B(e?this.href:void 0)}
        target=${B(e?this.target:void 0)}
        download=${B(e?this.download:void 0)}
        rel=${B(e&&this.target?`noreferrer noopener`:void 0)}
        role=${B(e?void 0:`button`)}
        aria-disabled=${this.disabled?`true`:`false`}
        aria-label="${this.label}"
        tabindex=${this.disabled?`-1`:`0`}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <sl-icon
          class="icon-button__icon"
          name=${B(this.name)}
          library=${B(this.library)}
          src=${B(this.src)}
          aria-hidden="true"
        ></sl-icon>
      </${t}>
    `}};Cn.styles=[M,Sn],Cn.dependencies={"sl-icon":cn},N([I(`.icon-button`)],Cn.prototype,`button`,2),N([F()],Cn.prototype,`hasFocus`,2),N([P()],Cn.prototype,`name`,2),N([P()],Cn.prototype,`library`,2),N([P()],Cn.prototype,`src`,2),N([P()],Cn.prototype,`href`,2),N([P()],Cn.prototype,`target`,2),N([P()],Cn.prototype,`download`,2),N([P()],Cn.prototype,`label`,2),N([P({type:Boolean,reflect:!0})],Cn.prototype,`disabled`,2);var wn=class extends L{constructor(){super(...arguments),this.localize=new at(this),this.variant=`neutral`,this.size=`medium`,this.pill=!1,this.removable=!1}handleRemoveClick(){this.emit(`sl-remove`)}render(){return A`
      <span
        part="base"
        class=${z({tag:!0,"tag--primary":this.variant===`primary`,"tag--success":this.variant===`success`,"tag--neutral":this.variant===`neutral`,"tag--warning":this.variant===`warning`,"tag--danger":this.variant===`danger`,"tag--text":this.variant===`text`,"tag--small":this.size===`small`,"tag--medium":this.size===`medium`,"tag--large":this.size===`large`,"tag--pill":this.pill,"tag--removable":this.removable})}
      >
        <slot part="content" class="tag__content"></slot>

        ${this.removable?A`
              <sl-icon-button
                part="remove-button"
                exportparts="base:remove-button__base"
                name="x-lg"
                library="system"
                label=${this.localize.term(`remove`)}
                class="tag__remove"
                @click=${this.handleRemoveClick}
                tabindex="-1"
              ></sl-icon-button>
            `:``}
      </span>
    `}};wn.styles=[M,xn],wn.dependencies={"sl-icon-button":Cn},N([P({reflect:!0})],wn.prototype,`variant`,2),N([P({reflect:!0})],wn.prototype,`size`,2),N([P({type:Boolean,reflect:!0})],wn.prototype,`pill`,2),N([P({type:Boolean})],wn.prototype,`removable`,2);var Tn=v`
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
`;function En(e,t){return{top:Math.round(e.getBoundingClientRect().top-t.getBoundingClientRect().top),left:Math.round(e.getBoundingClientRect().left-t.getBoundingClientRect().left)}}var Dn=new Set;function On(){let e=document.documentElement.clientWidth;return Math.abs(window.innerWidth-e)}function kn(){let e=Number(getComputedStyle(document.body).paddingRight.replace(/px/,``));return isNaN(e)||!e?0:e}function An(e){if(Dn.add(e),!document.documentElement.classList.contains(`sl-scroll-lock`)){let e=On()+kn(),t=getComputedStyle(document.documentElement).scrollbarGutter;(!t||t===`auto`)&&(t=`stable`),e<2&&(t=``),document.documentElement.style.setProperty(`--sl-scroll-lock-gutter`,t),document.documentElement.classList.add(`sl-scroll-lock`),document.documentElement.style.setProperty(`--sl-scroll-lock-size`,`${e}px`)}}function jn(e){Dn.delete(e),Dn.size===0&&(document.documentElement.classList.remove(`sl-scroll-lock`),document.documentElement.style.removeProperty(`--sl-scroll-lock-size`))}function Mn(e,t,n=`vertical`,r=`smooth`){let i=En(e,t),a=i.top+t.scrollTop,o=i.left+t.scrollLeft,s=t.scrollLeft,c=t.scrollLeft+t.offsetWidth,l=t.scrollTop,u=t.scrollTop+t.offsetHeight;(n===`horizontal`||n===`both`)&&(o<s?t.scrollTo({left:o,behavior:r}):o+e.clientWidth>c&&t.scrollTo({left:o-t.offsetWidth+e.clientWidth,behavior:r})),(n===`vertical`||n===`both`)&&(a<l?t.scrollTo({top:a,behavior:r}):a+e.clientHeight>u&&t.scrollTo({top:a-t.offsetHeight+e.clientHeight,behavior:r}))}var Nn=v`
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
`,Pn=Math.min,Fn=Math.max,In=Math.round,Ln=Math.floor,Rn=e=>({x:e,y:e}),zn={left:`right`,right:`left`,bottom:`top`,top:`bottom`},Bn={start:`end`,end:`start`};function Vn(e,t,n){return Fn(e,Pn(t,n))}function Hn(e,t){return typeof e==`function`?e(t):e}function Un(e){return e.split(`-`)[0]}function Wn(e){return e.split(`-`)[1]}function Gn(e){return e===`x`?`y`:`x`}function Kn(e){return e===`y`?`height`:`width`}var qn=new Set([`top`,`bottom`]);function Jn(e){return qn.has(Un(e))?`y`:`x`}function Yn(e){return Gn(Jn(e))}function Xn(e,t,n){n===void 0&&(n=!1);let r=Wn(e),i=Yn(e),a=Kn(i),o=i===`x`?r===(n?`end`:`start`)?`right`:`left`:r===`start`?`bottom`:`top`;return t.reference[a]>t.floating[a]&&(o=ar(o)),[o,ar(o)]}function Zn(e){let t=ar(e);return[Qn(e),t,Qn(t)]}function Qn(e){return e.replace(/start|end/g,e=>Bn[e])}var $n=[`left`,`right`],er=[`right`,`left`],tr=[`top`,`bottom`],nr=[`bottom`,`top`];function rr(e,t,n){switch(e){case`top`:case`bottom`:return n?t?er:$n:t?$n:er;case`left`:case`right`:return t?tr:nr;default:return[]}}function ir(e,t,n,r){let i=Wn(e),a=rr(Un(e),n===`start`,r);return i&&(a=a.map(e=>e+`-`+i),t&&(a=a.concat(a.map(Qn)))),a}function ar(e){return e.replace(/left|right|bottom|top/g,e=>zn[e])}function or(e){return{top:0,right:0,bottom:0,left:0,...e}}function sr(e){return typeof e==`number`?{top:e,right:e,bottom:e,left:e}:or(e)}function cr(e){let{x:t,y:n,width:r,height:i}=e;return{width:r,height:i,top:n,left:t,right:t+r,bottom:n+i,x:t,y:n}}function lr(e,t,n){let{reference:r,floating:i}=e,a=Jn(t),o=Yn(t),s=Kn(o),c=Un(t),l=a===`y`,u=r.x+r.width/2-i.width/2,d=r.y+r.height/2-i.height/2,f=r[s]/2-i[s]/2,p;switch(c){case`top`:p={x:u,y:r.y-i.height};break;case`bottom`:p={x:u,y:r.y+r.height};break;case`right`:p={x:r.x+r.width,y:d};break;case`left`:p={x:r.x-i.width,y:d};break;default:p={x:r.x,y:r.y}}switch(Wn(t)){case`start`:p[o]-=f*(n&&l?-1:1);break;case`end`:p[o]+=f*(n&&l?-1:1);break}return p}async function ur(e,t){t===void 0&&(t={});let{x:n,y:r,platform:i,rects:a,elements:o,strategy:s}=e,{boundary:c=`clippingAncestors`,rootBoundary:l=`viewport`,elementContext:u=`floating`,altBoundary:d=!1,padding:f=0}=Hn(t,e),p=sr(f),m=o[d?u===`floating`?`reference`:`floating`:u],h=cr(await i.getClippingRect({element:await(i.isElement==null?void 0:i.isElement(m))??!0?m:m.contextElement||await(i.getDocumentElement==null?void 0:i.getDocumentElement(o.floating)),boundary:c,rootBoundary:l,strategy:s})),g=u===`floating`?{x:n,y:r,width:a.floating.width,height:a.floating.height}:a.reference,_=await(i.getOffsetParent==null?void 0:i.getOffsetParent(o.floating)),v=await(i.isElement==null?void 0:i.isElement(_))&&await(i.getScale==null?void 0:i.getScale(_))||{x:1,y:1},y=cr(i.convertOffsetParentRelativeRectToViewportRelativeRect?await i.convertOffsetParentRelativeRectToViewportRelativeRect({elements:o,rect:g,offsetParent:_,strategy:s}):g);return{top:(h.top-y.top+p.top)/v.y,bottom:(y.bottom-h.bottom+p.bottom)/v.y,left:(h.left-y.left+p.left)/v.x,right:(y.right-h.right+p.right)/v.x}}var dr=async(e,t,n)=>{let{placement:r=`bottom`,strategy:i=`absolute`,middleware:a=[],platform:o}=n,s=a.filter(Boolean),c=await(o.isRTL==null?void 0:o.isRTL(t)),l=await o.getElementRects({reference:e,floating:t,strategy:i}),{x:u,y:d}=lr(l,r,c),f=r,p={},m=0;for(let n=0;n<s.length;n++){let{name:a,fn:h}=s[n],{x:g,y:_,data:v,reset:y}=await h({x:u,y:d,initialPlacement:r,placement:f,strategy:i,middlewareData:p,rects:l,platform:{...o,detectOverflow:o.detectOverflow??ur},elements:{reference:e,floating:t}});u=g??u,d=_??d,p={...p,[a]:{...p[a],...v}},y&&m<=50&&(m++,typeof y==`object`&&(y.placement&&(f=y.placement),y.rects&&(l=y.rects===!0?await o.getElementRects({reference:e,floating:t,strategy:i}):y.rects),{x:u,y:d}=lr(l,f,c)),n=-1)}return{x:u,y:d,placement:f,strategy:i,middlewareData:p}},fr=e=>({name:`arrow`,options:e,async fn(t){let{x:n,y:r,placement:i,rects:a,platform:o,elements:s,middlewareData:c}=t,{element:l,padding:u=0}=Hn(e,t)||{};if(l==null)return{};let d=sr(u),f={x:n,y:r},p=Yn(i),m=Kn(p),h=await o.getDimensions(l),g=p===`y`,_=g?`top`:`left`,v=g?`bottom`:`right`,y=g?`clientHeight`:`clientWidth`,b=a.reference[m]+a.reference[p]-f[p]-a.floating[m],x=f[p]-a.reference[p],S=await(o.getOffsetParent==null?void 0:o.getOffsetParent(l)),C=S?S[y]:0;(!C||!await(o.isElement==null?void 0:o.isElement(S)))&&(C=s.floating[y]||a.floating[m]);let w=b/2-x/2,T=C/2-h[m]/2-1,ee=Pn(d[_],T),te=Pn(d[v],T),E=ee,ne=C-h[m]-te,re=C/2-h[m]/2+w,ie=Vn(E,re,ne),D=!c.arrow&&Wn(i)!=null&&re!==ie&&a.reference[m]/2-(re<E?ee:te)-h[m]/2<0,O=D?re<E?re-E:re-ne:0;return{[p]:f[p]+O,data:{[p]:ie,centerOffset:re-ie-O,...D&&{alignmentOffset:O}},reset:D}}}),pr=function(e){return e===void 0&&(e={}),{name:`flip`,options:e,async fn(t){var n;let{placement:r,middlewareData:i,rects:a,initialPlacement:o,platform:s,elements:c}=t,{mainAxis:l=!0,crossAxis:u=!0,fallbackPlacements:d,fallbackStrategy:f=`bestFit`,fallbackAxisSideDirection:p=`none`,flipAlignment:m=!0,...h}=Hn(e,t);if((n=i.arrow)!=null&&n.alignmentOffset)return{};let g=Un(r),_=Jn(o),v=Un(o)===o,y=await(s.isRTL==null?void 0:s.isRTL(c.floating)),b=d||(v||!m?[ar(o)]:Zn(o)),x=p!==`none`;!d&&x&&b.push(...ir(o,m,p,y));let S=[o,...b],C=await s.detectOverflow(t,h),w=[],T=i.flip?.overflows||[];if(l&&w.push(C[g]),u){let e=Xn(r,a,y);w.push(C[e[0]],C[e[1]])}if(T=[...T,{placement:r,overflows:w}],!w.every(e=>e<=0)){let e=(i.flip?.index||0)+1,t=S[e];if(t&&(!(u===`alignment`&&_!==Jn(t))||T.every(e=>Jn(e.placement)===_?e.overflows[0]>0:!0)))return{data:{index:e,overflows:T},reset:{placement:t}};let n=T.filter(e=>e.overflows[0]<=0).sort((e,t)=>e.overflows[1]-t.overflows[1])[0]?.placement;if(!n)switch(f){case`bestFit`:{let e=T.filter(e=>{if(x){let t=Jn(e.placement);return t===_||t===`y`}return!0}).map(e=>[e.placement,e.overflows.filter(e=>e>0).reduce((e,t)=>e+t,0)]).sort((e,t)=>e[1]-t[1])[0]?.[0];e&&(n=e);break}case`initialPlacement`:n=o;break}if(r!==n)return{reset:{placement:n}}}return{}}}},mr=new Set([`left`,`top`]);async function hr(e,t){let{placement:n,platform:r,elements:i}=e,a=await(r.isRTL==null?void 0:r.isRTL(i.floating)),o=Un(n),s=Wn(n),c=Jn(n)===`y`,l=mr.has(o)?-1:1,u=a&&c?-1:1,d=Hn(t,e),{mainAxis:f,crossAxis:p,alignmentAxis:m}=typeof d==`number`?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:d.mainAxis||0,crossAxis:d.crossAxis||0,alignmentAxis:d.alignmentAxis};return s&&typeof m==`number`&&(p=s===`end`?m*-1:m),c?{x:p*u,y:f*l}:{x:f*l,y:p*u}}var gr=function(e){return e===void 0&&(e=0),{name:`offset`,options:e,async fn(t){var n;let{x:r,y:i,placement:a,middlewareData:o}=t,s=await hr(t,e);return a===o.offset?.placement&&(n=o.arrow)!=null&&n.alignmentOffset?{}:{x:r+s.x,y:i+s.y,data:{...s,placement:a}}}}},_r=function(e){return e===void 0&&(e={}),{name:`shift`,options:e,async fn(t){let{x:n,y:r,placement:i,platform:a}=t,{mainAxis:o=!0,crossAxis:s=!1,limiter:c={fn:e=>{let{x:t,y:n}=e;return{x:t,y:n}}},...l}=Hn(e,t),u={x:n,y:r},d=await a.detectOverflow(t,l),f=Jn(Un(i)),p=Gn(f),m=u[p],h=u[f];if(o){let e=p===`y`?`top`:`left`,t=p===`y`?`bottom`:`right`,n=m+d[e],r=m-d[t];m=Vn(n,m,r)}if(s){let e=f===`y`?`top`:`left`,t=f===`y`?`bottom`:`right`,n=h+d[e],r=h-d[t];h=Vn(n,h,r)}let g=c.fn({...t,[p]:m,[f]:h});return{...g,data:{x:g.x-n,y:g.y-r,enabled:{[p]:o,[f]:s}}}}}},vr=function(e){return e===void 0&&(e={}),{name:`size`,options:e,async fn(t){var n,r;let{placement:i,rects:a,platform:o,elements:s}=t,{apply:c=()=>{},...l}=Hn(e,t),u=await o.detectOverflow(t,l),d=Un(i),f=Wn(i),p=Jn(i)===`y`,{width:m,height:h}=a.floating,g,_;d===`top`||d===`bottom`?(g=d,_=f===(await(o.isRTL==null?void 0:o.isRTL(s.floating))?`start`:`end`)?`left`:`right`):(_=d,g=f===`end`?`top`:`bottom`);let v=h-u.top-u.bottom,y=m-u.left-u.right,b=Pn(h-u[g],v),x=Pn(m-u[_],y),S=!t.middlewareData.shift,C=b,w=x;if((n=t.middlewareData.shift)!=null&&n.enabled.x&&(w=y),(r=t.middlewareData.shift)!=null&&r.enabled.y&&(C=v),S&&!f){let e=Fn(u.left,0),t=Fn(u.right,0),n=Fn(u.top,0),r=Fn(u.bottom,0);p?w=m-2*(e!==0||t!==0?e+t:Fn(u.left,u.right)):C=h-2*(n!==0||r!==0?n+r:Fn(u.top,u.bottom))}await c({...t,availableWidth:w,availableHeight:C});let T=await o.getDimensions(s.floating);return m!==T.width||h!==T.height?{reset:{rects:!0}}:{}}}};function yr(){return typeof window<`u`}function br(e){return Cr(e)?(e.nodeName||``).toLowerCase():`#document`}function xr(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function Sr(e){return((Cr(e)?e.ownerDocument:e.document)||window.document)?.documentElement}function Cr(e){return yr()?e instanceof Node||e instanceof xr(e).Node:!1}function wr(e){return yr()?e instanceof Element||e instanceof xr(e).Element:!1}function Tr(e){return yr()?e instanceof HTMLElement||e instanceof xr(e).HTMLElement:!1}function Er(e){return!yr()||typeof ShadowRoot>`u`?!1:e instanceof ShadowRoot||e instanceof xr(e).ShadowRoot}var Dr=new Set([`inline`,`contents`]);function Or(e){let{overflow:t,overflowX:n,overflowY:r,display:i}=Vr(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&!Dr.has(i)}var kr=new Set([`table`,`td`,`th`]);function Ar(e){return kr.has(br(e))}var jr=[`:popover-open`,`:modal`];function Mr(e){return jr.some(t=>{try{return e.matches(t)}catch{return!1}})}var Nr=[`transform`,`translate`,`scale`,`rotate`,`perspective`],Pr=[`transform`,`translate`,`scale`,`rotate`,`perspective`,`filter`],Fr=[`paint`,`layout`,`strict`,`content`];function Ir(e){let t=Rr(),n=wr(e)?Vr(e):e;return Nr.some(e=>n[e]?n[e]!==`none`:!1)||(n.containerType?n.containerType!==`normal`:!1)||!t&&(n.backdropFilter?n.backdropFilter!==`none`:!1)||!t&&(n.filter?n.filter!==`none`:!1)||Pr.some(e=>(n.willChange||``).includes(e))||Fr.some(e=>(n.contain||``).includes(e))}function Lr(e){let t=Ur(e);for(;Tr(t)&&!Br(t);){if(Ir(t))return t;if(Mr(t))return null;t=Ur(t)}return null}function Rr(){return typeof CSS>`u`||!CSS.supports?!1:CSS.supports(`-webkit-backdrop-filter`,`none`)}var zr=new Set([`html`,`body`,`#document`]);function Br(e){return zr.has(br(e))}function Vr(e){return xr(e).getComputedStyle(e)}function Hr(e){return wr(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function Ur(e){if(br(e)===`html`)return e;let t=e.assignedSlot||e.parentNode||Er(e)&&e.host||Sr(e);return Er(t)?t.host:t}function Wr(e){let t=Ur(e);return Br(t)?e.ownerDocument?e.ownerDocument.body:e.body:Tr(t)&&Or(t)?t:Wr(t)}function Gr(e,t,n){t===void 0&&(t=[]),n===void 0&&(n=!0);let r=Wr(e),i=r===e.ownerDocument?.body,a=xr(r);if(i){let e=Kr(a);return t.concat(a,a.visualViewport||[],Or(r)?r:[],e&&n?Gr(e):[])}return t.concat(r,Gr(r,[],n))}function Kr(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function qr(e){let t=Vr(e),n=parseFloat(t.width)||0,r=parseFloat(t.height)||0,i=Tr(e),a=i?e.offsetWidth:n,o=i?e.offsetHeight:r,s=In(n)!==a||In(r)!==o;return s&&(n=a,r=o),{width:n,height:r,$:s}}function Jr(e){return wr(e)?e:e.contextElement}function Yr(e){let t=Jr(e);if(!Tr(t))return Rn(1);let n=t.getBoundingClientRect(),{width:r,height:i,$:a}=qr(t),o=(a?In(n.width):n.width)/r,s=(a?In(n.height):n.height)/i;return(!o||!Number.isFinite(o))&&(o=1),(!s||!Number.isFinite(s))&&(s=1),{x:o,y:s}}var Xr=Rn(0);function Zr(e){let t=xr(e);return!Rr()||!t.visualViewport?Xr:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function Qr(e,t,n){return t===void 0&&(t=!1),!n||t&&n!==xr(e)?!1:t}function $r(e,t,n,r){t===void 0&&(t=!1),n===void 0&&(n=!1);let i=e.getBoundingClientRect(),a=Jr(e),o=Rn(1);t&&(r?wr(r)&&(o=Yr(r)):o=Yr(e));let s=Qr(a,n,r)?Zr(a):Rn(0),c=(i.left+s.x)/o.x,l=(i.top+s.y)/o.y,u=i.width/o.x,d=i.height/o.y;if(a){let e=xr(a),t=r&&wr(r)?xr(r):r,n=e,i=Kr(n);for(;i&&r&&t!==n;){let e=Yr(i),t=i.getBoundingClientRect(),r=Vr(i),a=t.left+(i.clientLeft+parseFloat(r.paddingLeft))*e.x,o=t.top+(i.clientTop+parseFloat(r.paddingTop))*e.y;c*=e.x,l*=e.y,u*=e.x,d*=e.y,c+=a,l+=o,n=xr(i),i=Kr(n)}}return cr({width:u,height:d,x:c,y:l})}function ei(e,t){let n=Hr(e).scrollLeft;return t?t.left+n:$r(Sr(e)).left+n}function ti(e,t){let n=e.getBoundingClientRect();return{x:n.left+t.scrollLeft-ei(e,n),y:n.top+t.scrollTop}}function ni(e){let{elements:t,rect:n,offsetParent:r,strategy:i}=e,a=i===`fixed`,o=Sr(r),s=t?Mr(t.floating):!1;if(r===o||s&&a)return n;let c={scrollLeft:0,scrollTop:0},l=Rn(1),u=Rn(0),d=Tr(r);if((d||!d&&!a)&&((br(r)!==`body`||Or(o))&&(c=Hr(r)),Tr(r))){let e=$r(r);l=Yr(r),u.x=e.x+r.clientLeft,u.y=e.y+r.clientTop}let f=o&&!d&&!a?ti(o,c):Rn(0);return{width:n.width*l.x,height:n.height*l.y,x:n.x*l.x-c.scrollLeft*l.x+u.x+f.x,y:n.y*l.y-c.scrollTop*l.y+u.y+f.y}}function ri(e){return Array.from(e.getClientRects())}function ii(e){let t=Sr(e),n=Hr(e),r=e.ownerDocument.body,i=Fn(t.scrollWidth,t.clientWidth,r.scrollWidth,r.clientWidth),a=Fn(t.scrollHeight,t.clientHeight,r.scrollHeight,r.clientHeight),o=-n.scrollLeft+ei(e),s=-n.scrollTop;return Vr(r).direction===`rtl`&&(o+=Fn(t.clientWidth,r.clientWidth)-i),{width:i,height:a,x:o,y:s}}var ai=25;function oi(e,t){let n=xr(e),r=Sr(e),i=n.visualViewport,a=r.clientWidth,o=r.clientHeight,s=0,c=0;if(i){a=i.width,o=i.height;let e=Rr();(!e||e&&t===`fixed`)&&(s=i.offsetLeft,c=i.offsetTop)}let l=ei(r);if(l<=0){let e=r.ownerDocument,t=e.body,n=getComputedStyle(t),i=e.compatMode===`CSS1Compat`&&parseFloat(n.marginLeft)+parseFloat(n.marginRight)||0,o=Math.abs(r.clientWidth-t.clientWidth-i);o<=ai&&(a-=o)}else l<=ai&&(a+=l);return{width:a,height:o,x:s,y:c}}var si=new Set([`absolute`,`fixed`]);function ci(e,t){let n=$r(e,!0,t===`fixed`),r=n.top+e.clientTop,i=n.left+e.clientLeft,a=Tr(e)?Yr(e):Rn(1);return{width:e.clientWidth*a.x,height:e.clientHeight*a.y,x:i*a.x,y:r*a.y}}function li(e,t,n){let r;if(t===`viewport`)r=oi(e,n);else if(t===`document`)r=ii(Sr(e));else if(wr(t))r=ci(t,n);else{let n=Zr(e);r={x:t.x-n.x,y:t.y-n.y,width:t.width,height:t.height}}return cr(r)}function ui(e,t){let n=Ur(e);return n===t||!wr(n)||Br(n)?!1:Vr(n).position===`fixed`||ui(n,t)}function di(e,t){let n=t.get(e);if(n)return n;let r=Gr(e,[],!1).filter(e=>wr(e)&&br(e)!==`body`),i=null,a=Vr(e).position===`fixed`,o=a?Ur(e):e;for(;wr(o)&&!Br(o);){let t=Vr(o),n=Ir(o);!n&&t.position===`fixed`&&(i=null),(a?!n&&!i:!n&&t.position===`static`&&i&&si.has(i.position)||Or(o)&&!n&&ui(e,o))?r=r.filter(e=>e!==o):i=t,o=Ur(o)}return t.set(e,r),r}function fi(e){let{element:t,boundary:n,rootBoundary:r,strategy:i}=e,a=[...n===`clippingAncestors`?Mr(t)?[]:di(t,this._c):[].concat(n),r],o=a[0],s=a.reduce((e,n)=>{let r=li(t,n,i);return e.top=Fn(r.top,e.top),e.right=Pn(r.right,e.right),e.bottom=Pn(r.bottom,e.bottom),e.left=Fn(r.left,e.left),e},li(t,o,i));return{width:s.right-s.left,height:s.bottom-s.top,x:s.left,y:s.top}}function pi(e){let{width:t,height:n}=qr(e);return{width:t,height:n}}function mi(e,t,n){let r=Tr(t),i=Sr(t),a=n===`fixed`,o=$r(e,!0,a,t),s={scrollLeft:0,scrollTop:0},c=Rn(0);function l(){c.x=ei(i)}if(r||!r&&!a)if((br(t)!==`body`||Or(i))&&(s=Hr(t)),r){let e=$r(t,!0,a,t);c.x=e.x+t.clientLeft,c.y=e.y+t.clientTop}else i&&l();a&&!r&&i&&l();let u=i&&!r&&!a?ti(i,s):Rn(0);return{x:o.left+s.scrollLeft-c.x-u.x,y:o.top+s.scrollTop-c.y-u.y,width:o.width,height:o.height}}function hi(e){return Vr(e).position===`static`}function gi(e,t){if(!Tr(e)||Vr(e).position===`fixed`)return null;if(t)return t(e);let n=e.offsetParent;return Sr(e)===n&&(n=n.ownerDocument.body),n}function _i(e,t){let n=xr(e);if(Mr(e))return n;if(!Tr(e)){let t=Ur(e);for(;t&&!Br(t);){if(wr(t)&&!hi(t))return t;t=Ur(t)}return n}let r=gi(e,t);for(;r&&Ar(r)&&hi(r);)r=gi(r,t);return r&&Br(r)&&hi(r)&&!Ir(r)?n:r||Lr(e)||n}var vi=async function(e){let t=this.getOffsetParent||_i,n=this.getDimensions,r=await n(e.floating);return{reference:mi(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}};function yi(e){return Vr(e).direction===`rtl`}var bi={convertOffsetParentRelativeRectToViewportRelativeRect:ni,getDocumentElement:Sr,getClippingRect:fi,getOffsetParent:_i,getElementRects:vi,getClientRects:ri,getDimensions:pi,getScale:Yr,isElement:wr,isRTL:yi};function xi(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function Si(e,t){let n=null,r,i=Sr(e);function a(){var e;clearTimeout(r),(e=n)==null||e.disconnect(),n=null}function o(s,c){s===void 0&&(s=!1),c===void 0&&(c=1),a();let l=e.getBoundingClientRect(),{left:u,top:d,width:f,height:p}=l;if(s||t(),!f||!p)return;let m=Ln(d),h=Ln(i.clientWidth-(u+f)),g=Ln(i.clientHeight-(d+p)),_=Ln(u),v={rootMargin:-m+`px `+-h+`px `+-g+`px `+-_+`px`,threshold:Fn(0,Pn(1,c))||1},y=!0;function b(t){let n=t[0].intersectionRatio;if(n!==c){if(!y)return o();n?o(!1,n):r=setTimeout(()=>{o(!1,1e-7)},1e3)}n===1&&!xi(l,e.getBoundingClientRect())&&o(),y=!1}try{n=new IntersectionObserver(b,{...v,root:i.ownerDocument})}catch{n=new IntersectionObserver(b,v)}n.observe(e)}return o(!0),a}function Ci(e,t,n,r){r===void 0&&(r={});let{ancestorScroll:i=!0,ancestorResize:a=!0,elementResize:o=typeof ResizeObserver==`function`,layoutShift:s=typeof IntersectionObserver==`function`,animationFrame:c=!1}=r,l=Jr(e),u=i||a?[...l?Gr(l):[],...Gr(t)]:[];u.forEach(e=>{i&&e.addEventListener(`scroll`,n,{passive:!0}),a&&e.addEventListener(`resize`,n)});let d=l&&s?Si(l,n):null,f=-1,p=null;o&&(p=new ResizeObserver(e=>{let[r]=e;r&&r.target===l&&p&&(p.unobserve(t),cancelAnimationFrame(f),f=requestAnimationFrame(()=>{var e;(e=p)==null||e.observe(t)})),n()}),l&&!c&&p.observe(l),p.observe(t));let m,h=c?$r(e):null;c&&g();function g(){let t=$r(e);h&&!xi(h,t)&&n(),h=t,m=requestAnimationFrame(g)}return n(),()=>{var e;u.forEach(e=>{i&&e.removeEventListener(`scroll`,n),a&&e.removeEventListener(`resize`,n)}),d?.(),(e=p)==null||e.disconnect(),p=null,c&&cancelAnimationFrame(m)}}var wi=gr,Ti=_r,Ei=pr,Di=vr,Oi=fr,ki=(e,t,n)=>{let r=new Map,i={platform:bi,...n},a={...i.platform,_c:r};return dr(e,t,{...i,platform:a})};function Ai(e){return Mi(e)}function ji(e){return e.assignedSlot?e.assignedSlot:e.parentNode instanceof ShadowRoot?e.parentNode.host:e.parentNode}function Mi(e){for(let t=e;t;t=ji(t))if(t instanceof Element&&getComputedStyle(t).display===`none`)return null;for(let t=ji(e);t;t=ji(t)){if(!(t instanceof Element))continue;let e=getComputedStyle(t);if(e.display!==`contents`&&(e.position!==`static`||Ir(e)||t.tagName===`BODY`))return t}return null}function Ni(e){return typeof e==`object`&&!!e&&`getBoundingClientRect`in e&&(`contextElement`in e?e.contextElement instanceof Element:!0)}var U=class extends L{constructor(){super(...arguments),this.localize=new at(this),this.active=!1,this.placement=`top`,this.strategy=`absolute`,this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement=`anchor`,this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements=``,this.flipFallbackStrategy=`best-fit`,this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0,this.hoverBridge=!1,this.updateHoverBridge=()=>{if(this.hoverBridge&&this.anchorEl){let e=this.anchorEl.getBoundingClientRect(),t=this.popup.getBoundingClientRect(),n=this.placement.includes(`top`)||this.placement.includes(`bottom`),r=0,i=0,a=0,o=0,s=0,c=0,l=0,u=0;n?e.top<t.top?(r=e.left,i=e.bottom,a=e.right,o=e.bottom,s=t.left,c=t.top,l=t.right,u=t.top):(r=t.left,i=t.bottom,a=t.right,o=t.bottom,s=e.left,c=e.top,l=e.right,u=e.top):e.left<t.left?(r=e.right,i=e.top,a=t.left,o=t.top,s=e.right,c=e.bottom,l=t.left,u=t.bottom):(r=t.right,i=t.top,a=e.left,o=e.top,s=t.right,c=t.bottom,l=e.left,u=e.bottom),this.style.setProperty(`--hover-bridge-top-left-x`,`${r}px`),this.style.setProperty(`--hover-bridge-top-left-y`,`${i}px`),this.style.setProperty(`--hover-bridge-top-right-x`,`${a}px`),this.style.setProperty(`--hover-bridge-top-right-y`,`${o}px`),this.style.setProperty(`--hover-bridge-bottom-left-x`,`${s}px`),this.style.setProperty(`--hover-bridge-bottom-left-y`,`${c}px`),this.style.setProperty(`--hover-bridge-bottom-right-x`,`${l}px`),this.style.setProperty(`--hover-bridge-bottom-right-y`,`${u}px`)}}}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(e){super.updated(e),e.has(`active`)&&(this.active?this.start():this.stop()),e.has(`anchor`)&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){await this.stop(),this.anchor&&typeof this.anchor==`string`?this.anchorEl=this.getRootNode().getElementById(this.anchor):this.anchor instanceof Element||Ni(this.anchor)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector(`[slot="anchor"]`),this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.active&&this.start()}start(){!this.anchorEl||!this.active||(this.cleanup=Ci(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(e=>{this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute(`data-current-placement`),this.style.removeProperty(`--auto-size-available-width`),this.style.removeProperty(`--auto-size-available-height`),requestAnimationFrame(()=>e())):e()})}reposition(){if(!this.active||!this.anchorEl)return;let e=[wi({mainAxis:this.distance,crossAxis:this.skidding})];this.sync?e.push(Di({apply:({rects:e})=>{let t=this.sync===`width`||this.sync===`both`,n=this.sync===`height`||this.sync===`both`;this.popup.style.width=t?`${e.reference.width}px`:``,this.popup.style.height=n?`${e.reference.height}px`:``}})):(this.popup.style.width=``,this.popup.style.height=``),this.flip&&e.push(Ei({boundary:this.flipBoundary,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:this.flipFallbackStrategy===`best-fit`?`bestFit`:`initialPlacement`,padding:this.flipPadding})),this.shift&&e.push(Ti({boundary:this.shiftBoundary,padding:this.shiftPadding})),this.autoSize?e.push(Di({boundary:this.autoSizeBoundary,padding:this.autoSizePadding,apply:({availableWidth:e,availableHeight:t})=>{this.autoSize===`vertical`||this.autoSize===`both`?this.style.setProperty(`--auto-size-available-height`,`${t}px`):this.style.removeProperty(`--auto-size-available-height`),this.autoSize===`horizontal`||this.autoSize===`both`?this.style.setProperty(`--auto-size-available-width`,`${e}px`):this.style.removeProperty(`--auto-size-available-width`)}})):(this.style.removeProperty(`--auto-size-available-width`),this.style.removeProperty(`--auto-size-available-height`)),this.arrow&&e.push(Oi({element:this.arrowEl,padding:this.arrowPadding}));let t=this.strategy===`absolute`?e=>bi.getOffsetParent(e,Ai):bi.getOffsetParent;ki(this.anchorEl,this.popup,{placement:this.placement,middleware:e,strategy:this.strategy,platform:_t(gt({},bi),{getOffsetParent:t})}).then(({x:e,y:t,middlewareData:n,placement:r})=>{let i=this.localize.dir()===`rtl`,a={top:`bottom`,right:`left`,bottom:`top`,left:`right`}[r.split(`-`)[0]];if(this.setAttribute(`data-current-placement`,r),Object.assign(this.popup.style,{left:`${e}px`,top:`${t}px`}),this.arrow){let e=n.arrow.x,t=n.arrow.y,r=``,o=``,s=``,c=``;if(this.arrowPlacement===`start`){let n=typeof e==`number`?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:``;r=typeof t==`number`?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:``,o=i?n:``,c=i?``:n}else if(this.arrowPlacement===`end`){let n=typeof e==`number`?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:``;o=i?``:n,c=i?n:``,s=typeof t==`number`?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:``}else this.arrowPlacement===`center`?(c=typeof e==`number`?`calc(50% - var(--arrow-size-diagonal))`:``,r=typeof t==`number`?`calc(50% - var(--arrow-size-diagonal))`:``):(c=typeof e==`number`?`${e}px`:``,r=typeof t==`number`?`${t}px`:``);Object.assign(this.arrowEl.style,{top:r,right:o,bottom:s,left:c,[a]:`calc(var(--arrow-size-diagonal) * -1)`})}}),requestAnimationFrame(()=>this.updateHoverBridge()),this.emit(`sl-reposition`)}render(){return A`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span
        part="hover-bridge"
        class=${z({"popup-hover-bridge":!0,"popup-hover-bridge--visible":this.hoverBridge&&this.active})}
      ></span>

      <div
        part="popup"
        class=${z({popup:!0,"popup--active":this.active,"popup--fixed":this.strategy===`fixed`,"popup--has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?A`<div part="arrow" class="popup__arrow" role="presentation"></div>`:``}
      </div>
    `}};U.styles=[M,Nn],N([I(`.popup`)],U.prototype,`popup`,2),N([I(`.popup__arrow`)],U.prototype,`arrowEl`,2),N([P()],U.prototype,`anchor`,2),N([P({type:Boolean,reflect:!0})],U.prototype,`active`,2),N([P({reflect:!0})],U.prototype,`placement`,2),N([P({reflect:!0})],U.prototype,`strategy`,2),N([P({type:Number})],U.prototype,`distance`,2),N([P({type:Number})],U.prototype,`skidding`,2),N([P({type:Boolean})],U.prototype,`arrow`,2),N([P({attribute:`arrow-placement`})],U.prototype,`arrowPlacement`,2),N([P({attribute:`arrow-padding`,type:Number})],U.prototype,`arrowPadding`,2),N([P({type:Boolean})],U.prototype,`flip`,2),N([P({attribute:`flip-fallback-placements`,converter:{fromAttribute:e=>e.split(` `).map(e=>e.trim()).filter(e=>e!==``),toAttribute:e=>e.join(` `)}})],U.prototype,`flipFallbackPlacements`,2),N([P({attribute:`flip-fallback-strategy`})],U.prototype,`flipFallbackStrategy`,2),N([P({type:Object})],U.prototype,`flipBoundary`,2),N([P({attribute:`flip-padding`,type:Number})],U.prototype,`flipPadding`,2),N([P({type:Boolean})],U.prototype,`shift`,2),N([P({type:Object})],U.prototype,`shiftBoundary`,2),N([P({attribute:`shift-padding`,type:Number})],U.prototype,`shiftPadding`,2),N([P({attribute:`auto-size`})],U.prototype,`autoSize`,2),N([P()],U.prototype,`sync`,2),N([P({type:Object})],U.prototype,`autoSizeBoundary`,2),N([P({attribute:`auto-size-padding`,type:Number})],U.prototype,`autoSizePadding`,2),N([P({attribute:`hover-bridge`,type:Boolean})],U.prototype,`hoverBridge`,2);var Pi=new Map,Fi=new WeakMap;function Ii(e){return e??{keyframes:[],options:{duration:0}}}function Li(e,t){return t.toLowerCase()===`rtl`?{keyframes:e.rtlKeyframes||e.keyframes,options:e.options}:e}function Ri(e,t){Pi.set(e,Ii(t))}function zi(e,t,n){let r=Fi.get(e);if(r?.[t])return Li(r[t],n.dir);let i=Pi.get(t);return i?Li(i,n.dir):{keyframes:[],options:{duration:0}}}function Bi(e,t){return new Promise(n=>{function r(i){i.target===e&&(e.removeEventListener(t,r),n())}e.addEventListener(t,r)})}function Vi(e,t,n){return new Promise(r=>{if(n?.duration===1/0)throw Error(`Promise-based animations must be finite.`);let i=e.animate(t,_t(gt({},n),{duration:Ui()?0:n.duration}));i.addEventListener(`cancel`,r,{once:!0}),i.addEventListener(`finish`,r,{once:!0})})}function Hi(e){return e=e.toString().toLowerCase(),e.indexOf(`ms`)>-1?parseFloat(e):e.indexOf(`s`)>-1?parseFloat(e)*1e3:parseFloat(e)}function Ui(){return window.matchMedia(`(prefers-reduced-motion: reduce)`).matches}function Wi(e){return Promise.all(e.getAnimations().map(e=>new Promise(t=>{e.cancel(),requestAnimationFrame(t)})))}var Gi=class extends dn{constructor(e){if(super(e),this.it=j,e.type!==ln.CHILD)throw Error(this.constructor.directiveName+`() can only be used in child bindings`)}render(e){if(e===j||e==null)return this._t=void 0,this.it=e;if(e===De)return e;if(typeof e!=`string`)throw Error(this.constructor.directiveName+`() called with a non-string value`);if(e===this.it)return this._t;this.it=e;let t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}};Gi.directiveName=`unsafeHTML`,Gi.resultType=1;var Ki=un(Gi),W=class extends L{constructor(){super(...arguments),this.formControlController=new It(this,{assumeInteractionOn:[`sl-blur`,`sl-input`]}),this.hasSlotController=new zt(this,`help-text`,`label`),this.localize=new at(this),this.typeToSelectString=``,this.hasFocus=!1,this.displayLabel=``,this.selectedOptions=[],this.valueHasChanged=!1,this.name=``,this._value=``,this.defaultValue=``,this.size=`medium`,this.placeholder=``,this.multiple=!1,this.maxOptionsVisible=3,this.disabled=!1,this.clearable=!1,this.open=!1,this.hoist=!1,this.filled=!1,this.pill=!1,this.label=``,this.placement=`bottom`,this.helpText=``,this.form=``,this.required=!1,this.getTag=e=>A`
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
    `,this.handleDocumentFocusIn=e=>{let t=e.composedPath();this&&!t.includes(this)&&this.hide()},this.handleDocumentKeyDown=e=>{let t=e.target,n=t.closest(`.select__clear`)!==null,r=t.closest(`sl-icon-button`)!==null;if(!(n||r)){if(e.key===`Escape`&&this.open&&!this.closeWatcher&&(e.preventDefault(),e.stopPropagation(),this.hide(),this.displayInput.focus({preventScroll:!0})),e.key===`Enter`||e.key===` `&&this.typeToSelectString===``){if(e.preventDefault(),e.stopImmediatePropagation(),!this.open){this.show();return}this.currentOption&&!this.currentOption.disabled&&(this.valueHasChanged=!0,this.multiple?this.toggleOptionSelection(this.currentOption):this.setSelectedOptions(this.currentOption),this.updateComplete.then(()=>{this.emit(`sl-input`),this.emit(`sl-change`)}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})));return}if([`ArrowUp`,`ArrowDown`,`Home`,`End`].includes(e.key)){let t=this.getAllOptions(),n=t.indexOf(this.currentOption),r=Math.max(0,n);if(e.preventDefault(),!this.open&&(this.show(),this.currentOption))return;e.key===`ArrowDown`?(r=n+1,r>t.length-1&&(r=0)):e.key===`ArrowUp`?(r=n-1,r<0&&(r=t.length-1)):e.key===`Home`?r=0:e.key===`End`&&(r=t.length-1),this.setCurrentOption(t[r])}if(e.key&&e.key.length===1||e.key===`Backspace`){let t=this.getAllOptions();if(e.metaKey||e.ctrlKey||e.altKey)return;if(!this.open){if(e.key===`Backspace`)return;this.show()}e.stopPropagation(),e.preventDefault(),clearTimeout(this.typeToSelectTimeout),this.typeToSelectTimeout=window.setTimeout(()=>this.typeToSelectString=``,1e3),e.key===`Backspace`?this.typeToSelectString=this.typeToSelectString.slice(0,-1):this.typeToSelectString+=e.key.toLowerCase();for(let e of t)if(e.getTextLabel().toLowerCase().startsWith(this.typeToSelectString)){this.setCurrentOption(e);break}}}},this.handleDocumentMouseDown=e=>{let t=e.composedPath();this&&!t.includes(this)&&this.hide()}}get value(){return this._value}set value(e){e=this.multiple?Array.isArray(e)?e:e.split(` `):Array.isArray(e)?e.join(` `):e,this._value!==e&&(this.valueHasChanged=!0,this._value=e)}get validity(){return this.valueInput.validity}get validationMessage(){return this.valueInput.validationMessage}connectedCallback(){super.connectedCallback(),setTimeout(()=>{this.handleDefaultSlotChange()}),this.open=!1}addOpenListeners(){var e;document.addEventListener(`focusin`,this.handleDocumentFocusIn),document.addEventListener(`keydown`,this.handleDocumentKeyDown),document.addEventListener(`mousedown`,this.handleDocumentMouseDown),this.getRootNode()!==document&&this.getRootNode().addEventListener(`focusin`,this.handleDocumentFocusIn),`CloseWatcher`in window&&((e=this.closeWatcher)==null||e.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.open&&(this.hide(),this.displayInput.focus({preventScroll:!0}))})}removeOpenListeners(){var e;document.removeEventListener(`focusin`,this.handleDocumentFocusIn),document.removeEventListener(`keydown`,this.handleDocumentKeyDown),document.removeEventListener(`mousedown`,this.handleDocumentMouseDown),this.getRootNode()!==document&&this.getRootNode().removeEventListener(`focusin`,this.handleDocumentFocusIn),(e=this.closeWatcher)==null||e.destroy()}handleFocus(){this.hasFocus=!0,this.displayInput.setSelectionRange(0,0),this.emit(`sl-focus`)}handleBlur(){this.hasFocus=!1,this.emit(`sl-blur`)}handleLabelClick(){this.displayInput.focus()}handleComboboxMouseDown(e){let t=e.composedPath().some(e=>e instanceof Element&&e.tagName.toLowerCase()===`sl-icon-button`);this.disabled||t||(e.preventDefault(),this.displayInput.focus({preventScroll:!0}),this.open=!this.open)}handleComboboxKeyDown(e){e.key!==`Tab`&&(e.stopPropagation(),this.handleDocumentKeyDown(e))}handleClearClick(e){e.stopPropagation(),this.valueHasChanged=!0,this.value!==``&&(this.setSelectedOptions([]),this.displayInput.focus({preventScroll:!0}),this.updateComplete.then(()=>{this.emit(`sl-clear`),this.emit(`sl-input`),this.emit(`sl-change`)}))}handleClearMouseDown(e){e.stopPropagation(),e.preventDefault()}handleOptionClick(e){let t=e.target.closest(`sl-option`),n=this.value;t&&!t.disabled&&(this.valueHasChanged=!0,this.multiple?this.toggleOptionSelection(t):this.setSelectedOptions(t),this.updateComplete.then(()=>this.displayInput.focus({preventScroll:!0})),this.value!==n&&this.updateComplete.then(()=>{this.emit(`sl-input`),this.emit(`sl-change`)}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})))}handleDefaultSlotChange(){customElements.get(`sl-option`)||customElements.whenDefined(`sl-option`).then(()=>this.handleDefaultSlotChange());let e=this.getAllOptions(),t=this.valueHasChanged?this.value:this.defaultValue,n=Array.isArray(t)?t:[t],r=[];e.forEach(e=>r.push(e.value)),this.setSelectedOptions(e.filter(e=>n.includes(e.value)))}handleTagRemove(e,t){e.stopPropagation(),this.valueHasChanged=!0,this.disabled||(this.toggleOptionSelection(t,!1),this.updateComplete.then(()=>{this.emit(`sl-input`),this.emit(`sl-change`)}))}getAllOptions(){return[...this.querySelectorAll(`sl-option`)]}getFirstOption(){return this.querySelector(`sl-option`)}setCurrentOption(e){this.getAllOptions().forEach(e=>{e.current=!1,e.tabIndex=-1}),e&&(this.currentOption=e,e.current=!0,e.tabIndex=0,e.focus())}setSelectedOptions(e){let t=this.getAllOptions(),n=Array.isArray(e)?e:[e];t.forEach(e=>e.selected=!1),n.length&&n.forEach(e=>e.selected=!0),this.selectionChanged()}toggleOptionSelection(e,t){t===!0||t===!1?e.selected=t:e.selected=!e.selected,this.selectionChanged()}selectionChanged(){this.selectedOptions=this.getAllOptions().filter(e=>e.selected);let e=this.valueHasChanged;if(this.multiple)this.value=this.selectedOptions.map(e=>e.value),this.placeholder&&this.value.length===0?this.displayLabel=``:this.displayLabel=this.localize.term(`numOptionsSelected`,this.selectedOptions.length);else{let e=this.selectedOptions[0];this.value=e?.value??``,this.displayLabel=(e?.getTextLabel)?.call(e)??``}this.valueHasChanged=e,this.updateComplete.then(()=>{this.formControlController.updateValidity()})}get tags(){return this.selectedOptions.map((e,t)=>{if(t<this.maxOptionsVisible||this.maxOptionsVisible<=0){let n=this.getTag(e,t);return A`<div @sl-remove=${t=>this.handleTagRemove(t,e)}>
          ${typeof n==`string`?Ki(n):n}
        </div>`}else if(t===this.maxOptionsVisible)return A`<sl-tag size=${this.size}>+${this.selectedOptions.length-t}</sl-tag>`;return A``})}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleDisabledChange(){this.disabled&&(this.open=!1,this.handleOpenChange())}attributeChangedCallback(e,t,n){if(super.attributeChangedCallback(e,t,n),e===`value`){let e=this.valueHasChanged;this.value=this.defaultValue,this.valueHasChanged=e}}handleValueChange(){if(!this.valueHasChanged){let e=this.valueHasChanged;this.value=this.defaultValue,this.valueHasChanged=e}let e=this.getAllOptions(),t=Array.isArray(this.value)?this.value:[this.value];this.setSelectedOptions(e.filter(e=>t.includes(e.value)))}async handleOpenChange(){if(this.open&&!this.disabled){this.setCurrentOption(this.selectedOptions[0]||this.getFirstOption()),this.emit(`sl-show`),this.addOpenListeners(),await Wi(this),this.listbox.hidden=!1,this.popup.active=!0,requestAnimationFrame(()=>{this.setCurrentOption(this.currentOption)});let{keyframes:e,options:t}=zi(this,`select.show`,{dir:this.localize.dir()});await Vi(this.popup.popup,e,t),this.currentOption&&Mn(this.currentOption,this.listbox,`vertical`,`auto`),this.emit(`sl-after-show`)}else{this.emit(`sl-hide`),this.removeOpenListeners(),await Wi(this);let{keyframes:e,options:t}=zi(this,`select.hide`,{dir:this.localize.dir()});await Vi(this.popup.popup,e,t),this.listbox.hidden=!0,this.popup.active=!1,this.emit(`sl-after-hide`)}}async show(){if(this.open||this.disabled){this.open=!1;return}return this.open=!0,Bi(this,`sl-after-show`)}async hide(){if(!this.open||this.disabled){this.open=!1;return}return this.open=!1,Bi(this,`sl-after-hide`)}checkValidity(){return this.valueInput.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.valueInput.reportValidity()}setCustomValidity(e){this.valueInput.setCustomValidity(e),this.formControlController.updateValidity()}focus(e){this.displayInput.focus(e)}blur(){this.displayInput.blur()}render(){let e=this.hasSlotController.test(`label`),t=this.hasSlotController.test(`help-text`),n=this.label?!0:!!e,r=this.helpText?!0:!!t,i=this.clearable&&!this.disabled&&this.value.length>0,a=this.placeholder&&this.value&&this.value.length<=0;return A`
      <div
        part="form-control"
        class=${z({"form-control":!0,"form-control--small":this.size===`small`,"form-control--medium":this.size===`medium`,"form-control--large":this.size===`large`,"form-control--has-label":n,"form-control--has-help-text":r})}
      >
        <label
          id="label"
          part="form-control-label"
          class="form-control__label"
          aria-hidden=${n?`false`:`true`}
          @click=${this.handleLabelClick}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <sl-popup
            class=${z({select:!0,"select--standard":!0,"select--filled":this.filled,"select--pill":this.pill,"select--open":this.open,"select--disabled":this.disabled,"select--multiple":this.multiple,"select--focused":this.hasFocus,"select--placeholder-visible":a,"select--top":this.placement===`top`,"select--bottom":this.placement===`bottom`,"select--small":this.size===`small`,"select--medium":this.size===`medium`,"select--large":this.size===`large`})}
            placement=${this.placement}
            strategy=${this.hoist?`fixed`:`absolute`}
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
                aria-expanded=${this.open?`true`:`false`}
                aria-haspopup="listbox"
                aria-labelledby="label"
                aria-disabled=${this.disabled?`true`:`false`}
                aria-describedby="help-text"
                role="combobox"
                tabindex="0"
                @focus=${this.handleFocus}
                @blur=${this.handleBlur}
              />

              ${this.multiple?A`<div part="tags" class="select__tags">${this.tags}</div>`:``}

              <input
                class="select__value-input"
                type="text"
                ?disabled=${this.disabled}
                ?required=${this.required}
                .value=${Array.isArray(this.value)?this.value.join(`, `):this.value}
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
                      aria-label=${this.localize.term(`clearEntry`)}
                      @mousedown=${this.handleClearMouseDown}
                      @click=${this.handleClearClick}
                      tabindex="-1"
                    >
                      <slot name="clear-icon">
                        <sl-icon name="x-circle-fill" library="system"></sl-icon>
                      </slot>
                    </button>
                  `:``}

              <slot name="suffix" part="suffix" class="select__suffix"></slot>

              <slot name="expand-icon" part="expand-icon" class="select__expand-icon">
                <sl-icon library="system" name="chevron-down"></sl-icon>
              </slot>
            </div>

            <div
              id="listbox"
              role="listbox"
              aria-expanded=${this.open?`true`:`false`}
              aria-multiselectable=${this.multiple?`true`:`false`}
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
          aria-hidden=${r?`false`:`true`}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};W.styles=[M,yn,Tn],W.dependencies={"sl-icon":cn,"sl-popup":U,"sl-tag":wn},N([I(`.select`)],W.prototype,`popup`,2),N([I(`.select__combobox`)],W.prototype,`combobox`,2),N([I(`.select__display-input`)],W.prototype,`displayInput`,2),N([I(`.select__value-input`)],W.prototype,`valueInput`,2),N([I(`.select__listbox`)],W.prototype,`listbox`,2),N([F()],W.prototype,`hasFocus`,2),N([F()],W.prototype,`displayLabel`,2),N([F()],W.prototype,`currentOption`,2),N([F()],W.prototype,`selectedOptions`,2),N([F()],W.prototype,`valueHasChanged`,2),N([P()],W.prototype,`name`,2),N([F()],W.prototype,`value`,1),N([P({attribute:`value`})],W.prototype,`defaultValue`,2),N([P({reflect:!0})],W.prototype,`size`,2),N([P()],W.prototype,`placeholder`,2),N([P({type:Boolean,reflect:!0})],W.prototype,`multiple`,2),N([P({attribute:`max-options-visible`,type:Number})],W.prototype,`maxOptionsVisible`,2),N([P({type:Boolean,reflect:!0})],W.prototype,`disabled`,2),N([P({type:Boolean})],W.prototype,`clearable`,2),N([P({type:Boolean,reflect:!0})],W.prototype,`open`,2),N([P({type:Boolean})],W.prototype,`hoist`,2),N([P({type:Boolean,reflect:!0})],W.prototype,`filled`,2),N([P({type:Boolean,reflect:!0})],W.prototype,`pill`,2),N([P()],W.prototype,`label`,2),N([P({reflect:!0})],W.prototype,`placement`,2),N([P({attribute:`help-text`})],W.prototype,`helpText`,2),N([P({reflect:!0})],W.prototype,`form`,2),N([P({type:Boolean,reflect:!0})],W.prototype,`required`,2),N([P()],W.prototype,`getTag`,2),N([R(`disabled`,{waitUntilFirstUpdate:!0})],W.prototype,`handleDisabledChange`,1),N([R([`defaultValue`,`value`],{waitUntilFirstUpdate:!0})],W.prototype,`handleValueChange`,1),N([R(`open`,{waitUntilFirstUpdate:!0})],W.prototype,`handleOpenChange`,1),Ri(`select.show`,{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:`ease`}}),Ri(`select.hide`,{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:`ease`}}),W.define(`sl-select`);var qi=v`
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
`,Ji=class extends L{constructor(){super(...arguments),this.localize=new at(this),this.isInitialized=!1,this.current=!1,this.selected=!1,this.hasHover=!1,this.value=``,this.disabled=!1}connectedCallback(){super.connectedCallback(),this.setAttribute(`role`,`option`),this.setAttribute(`aria-selected`,`false`)}handleDefaultSlotChange(){this.isInitialized?customElements.whenDefined(`sl-select`).then(()=>{let e=this.closest(`sl-select`);e&&e.handleDefaultSlotChange()}):this.isInitialized=!0}handleMouseEnter(){this.hasHover=!0}handleMouseLeave(){this.hasHover=!1}handleDisabledChange(){this.setAttribute(`aria-disabled`,this.disabled?`true`:`false`)}handleSelectedChange(){this.setAttribute(`aria-selected`,this.selected?`true`:`false`)}handleValueChange(){typeof this.value!=`string`&&(this.value=String(this.value)),this.value.includes(` `)&&(console.error(`Option values cannot include a space. All spaces have been replaced with underscores.`,this),this.value=this.value.replace(/ /g,`_`))}getTextLabel(){let e=this.childNodes,t=``;return[...e].forEach(e=>{e.nodeType===Node.ELEMENT_NODE&&(e.hasAttribute(`slot`)||(t+=e.textContent)),e.nodeType===Node.TEXT_NODE&&(t+=e.textContent)}),t.trim()}render(){return A`
      <div
        part="base"
        class=${z({option:!0,"option--current":this.current,"option--disabled":this.disabled,"option--selected":this.selected,"option--hover":this.hasHover})}
        @mouseenter=${this.handleMouseEnter}
        @mouseleave=${this.handleMouseLeave}
      >
        <sl-icon part="checked-icon" class="option__check" name="check" library="system" aria-hidden="true"></sl-icon>
        <slot part="prefix" name="prefix" class="option__prefix"></slot>
        <slot part="label" class="option__label" @slotchange=${this.handleDefaultSlotChange}></slot>
        <slot part="suffix" name="suffix" class="option__suffix"></slot>
      </div>
    `}};Ji.styles=[M,qi],Ji.dependencies={"sl-icon":cn},N([I(`.option__label`)],Ji.prototype,`defaultSlot`,2),N([F()],Ji.prototype,`current`,2),N([F()],Ji.prototype,`selected`,2),N([F()],Ji.prototype,`hasHover`,2),N([P({reflect:!0})],Ji.prototype,`value`,2),N([P({type:Boolean,reflect:!0})],Ji.prototype,`disabled`,2),N([R(`disabled`)],Ji.prototype,`handleDisabledChange`,1),N([R(`selected`)],Ji.prototype,`handleSelectedChange`,1),N([R(`value`)],Ji.prototype,`handleValueChange`,1),Ji.define(`sl-option`);var Yi=v`
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
`,G=class extends L{constructor(){super(...arguments),this.formControlController=new It(this,{assumeInteractionOn:[`sl-blur`,`sl-input`]}),this.hasSlotController=new zt(this,`help-text`,`label`),this.hasFocus=!1,this.title=``,this.name=``,this.value=``,this.size=`medium`,this.filled=!1,this.label=``,this.helpText=``,this.placeholder=``,this.rows=4,this.resize=`vertical`,this.disabled=!1,this.readonly=!1,this.form=``,this.required=!1,this.spellcheck=!0,this.defaultValue=``}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>this.setTextareaHeight()),this.updateComplete.then(()=>{this.setTextareaHeight(),this.resizeObserver.observe(this.input)})}firstUpdated(){this.formControlController.updateValidity()}disconnectedCallback(){var e;super.disconnectedCallback(),this.input&&((e=this.resizeObserver)==null||e.unobserve(this.input))}handleBlur(){this.hasFocus=!1,this.emit(`sl-blur`)}handleChange(){this.value=this.input.value,this.setTextareaHeight(),this.emit(`sl-change`)}handleFocus(){this.hasFocus=!0,this.emit(`sl-focus`)}handleInput(){this.value=this.input.value,this.emit(`sl-input`)}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}setTextareaHeight(){this.resize===`auto`?(this.sizeAdjuster.style.height=`${this.input.clientHeight}px`,this.input.style.height=`auto`,this.input.style.height=`${this.input.scrollHeight}px`):this.input.style.height=``}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleRowsChange(){this.setTextareaHeight()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity(),this.setTextareaHeight()}focus(e){this.input.focus(e)}blur(){this.input.blur()}select(){this.input.select()}scrollPosition(e){if(e){typeof e.top==`number`&&(this.input.scrollTop=e.top),typeof e.left==`number`&&(this.input.scrollLeft=e.left);return}return{top:this.input.scrollTop,left:this.input.scrollTop}}setSelectionRange(e,t,n=`none`){this.input.setSelectionRange(e,t,n)}setRangeText(e,t,n,r=`preserve`){let i=t??this.input.selectionStart,a=n??this.input.selectionEnd;this.input.setRangeText(e,i,a,r),this.value!==this.input.value&&(this.value=this.input.value,this.setTextareaHeight())}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){let e=this.hasSlotController.test(`label`),t=this.hasSlotController.test(`help-text`),n=this.label?!0:!!e,r=this.helpText?!0:!!t;return A`
      <div
        part="form-control"
        class=${z({"form-control":!0,"form-control--small":this.size===`small`,"form-control--medium":this.size===`medium`,"form-control--large":this.size===`large`,"form-control--has-label":n,"form-control--has-help-text":r})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${n?`false`:`true`}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${z({textarea:!0,"textarea--small":this.size===`small`,"textarea--medium":this.size===`medium`,"textarea--large":this.size===`large`,"textarea--standard":!this.filled,"textarea--filled":this.filled,"textarea--disabled":this.disabled,"textarea--focused":this.hasFocus,"textarea--empty":!this.value,"textarea--resize-none":this.resize===`none`,"textarea--resize-vertical":this.resize===`vertical`,"textarea--resize-auto":this.resize===`auto`})}
          >
            <textarea
              part="textarea"
              id="input"
              class="textarea__control"
              title=${this.title}
              name=${B(this.name)}
              .value=${bn(this.value)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${B(this.placeholder)}
              rows=${B(this.rows)}
              minlength=${B(this.minlength)}
              maxlength=${B(this.maxlength)}
              autocapitalize=${B(this.autocapitalize)}
              autocorrect=${B(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${B(this.spellcheck)}
              enterkeyhint=${B(this.enterkeyhint)}
              inputmode=${B(this.inputmode)}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            ></textarea>
            <!-- This "adjuster" exists to prevent layout shifting. https://github.com/shoelace-style/shoelace/issues/2180 -->
            <div part="textarea-adjuster" class="textarea__size-adjuster" ?hidden=${this.resize!==`auto`}></div>
          </div>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${r?`false`:`true`}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};G.styles=[M,yn,Yi],N([I(`.textarea__control`)],G.prototype,`input`,2),N([I(`.textarea__size-adjuster`)],G.prototype,`sizeAdjuster`,2),N([F()],G.prototype,`hasFocus`,2),N([P()],G.prototype,`title`,2),N([P()],G.prototype,`name`,2),N([P()],G.prototype,`value`,2),N([P({reflect:!0})],G.prototype,`size`,2),N([P({type:Boolean,reflect:!0})],G.prototype,`filled`,2),N([P()],G.prototype,`label`,2),N([P({attribute:`help-text`})],G.prototype,`helpText`,2),N([P()],G.prototype,`placeholder`,2),N([P({type:Number})],G.prototype,`rows`,2),N([P()],G.prototype,`resize`,2),N([P({type:Boolean,reflect:!0})],G.prototype,`disabled`,2),N([P({type:Boolean,reflect:!0})],G.prototype,`readonly`,2),N([P({reflect:!0})],G.prototype,`form`,2),N([P({type:Boolean,reflect:!0})],G.prototype,`required`,2),N([P({type:Number})],G.prototype,`minlength`,2),N([P({type:Number})],G.prototype,`maxlength`,2),N([P()],G.prototype,`autocapitalize`,2),N([P()],G.prototype,`autocorrect`,2),N([P()],G.prototype,`autocomplete`,2),N([P({type:Boolean})],G.prototype,`autofocus`,2),N([P()],G.prototype,`enterkeyhint`,2),N([P({type:Boolean,converter:{fromAttribute:e=>!(!e||e===`false`),toAttribute:e=>e?`true`:`false`}})],G.prototype,`spellcheck`,2),N([P()],G.prototype,`inputmode`,2),N([vn()],G.prototype,`defaultValue`,2),N([R(`disabled`,{waitUntilFirstUpdate:!0})],G.prototype,`handleDisabledChange`,1),N([R(`rows`,{waitUntilFirstUpdate:!0})],G.prototype,`handleRowsChange`,1),N([R(`value`,{waitUntilFirstUpdate:!0})],G.prototype,`handleValueChange`,1),G.define(`sl-textarea`);var Xi=v`
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
`,Zi=class extends L{constructor(){super(...arguments),this.formControlController=new It(this,{value:e=>e.checked?e.value||`on`:void 0,defaultValue:e=>e.defaultChecked,setValue:(e,t)=>e.checked=t}),this.hasSlotController=new zt(this,`help-text`),this.hasFocus=!1,this.title=``,this.name=``,this.size=`medium`,this.disabled=!1,this.checked=!1,this.indeterminate=!1,this.defaultChecked=!1,this.form=``,this.required=!1,this.helpText=``}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleClick(){this.checked=!this.checked,this.indeterminate=!1,this.emit(`sl-change`)}handleBlur(){this.hasFocus=!1,this.emit(`sl-blur`)}handleInput(){this.emit(`sl-input`)}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleFocus(){this.hasFocus=!0,this.emit(`sl-focus`)}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStateChange(){this.input.checked=this.checked,this.input.indeterminate=this.indeterminate,this.formControlController.updateValidity()}click(){this.input.click()}focus(e){this.input.focus(e)}blur(){this.input.blur()}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){let e=this.hasSlotController.test(`help-text`),t=this.helpText?!0:!!e;return A`
      <div
        class=${z({"form-control":!0,"form-control--small":this.size===`small`,"form-control--medium":this.size===`medium`,"form-control--large":this.size===`large`,"form-control--has-help-text":t})}
      >
        <label
          part="base"
          class=${z({checkbox:!0,"checkbox--checked":this.checked,"checkbox--disabled":this.disabled,"checkbox--focused":this.hasFocus,"checkbox--indeterminate":this.indeterminate,"checkbox--small":this.size===`small`,"checkbox--medium":this.size===`medium`,"checkbox--large":this.size===`large`})}
        >
          <input
            class="checkbox__input"
            type="checkbox"
            title=${this.title}
            name=${this.name}
            value=${B(this.value)}
            .indeterminate=${bn(this.indeterminate)}
            .checked=${bn(this.checked)}
            .disabled=${this.disabled}
            .required=${this.required}
            aria-checked=${this.checked?`true`:`false`}
            aria-describedby="help-text"
            @click=${this.handleClick}
            @input=${this.handleInput}
            @invalid=${this.handleInvalid}
            @blur=${this.handleBlur}
            @focus=${this.handleFocus}
          />

          <span
            part="control${this.checked?` control--checked`:``}${this.indeterminate?` control--indeterminate`:``}"
            class="checkbox__control"
          >
            ${this.checked?A`
                  <sl-icon part="checked-icon" class="checkbox__checked-icon" library="system" name="check"></sl-icon>
                `:``}
            ${!this.checked&&this.indeterminate?A`
                  <sl-icon
                    part="indeterminate-icon"
                    class="checkbox__indeterminate-icon"
                    library="system"
                    name="indeterminate"
                  ></sl-icon>
                `:``}
          </span>

          <div part="label" class="checkbox__label">
            <slot></slot>
          </div>
        </label>

        <div
          aria-hidden=${t?`false`:`true`}
          class="form-control__help-text"
          id="help-text"
          part="form-control-help-text"
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};Zi.styles=[M,yn,Xi],Zi.dependencies={"sl-icon":cn},N([I(`input[type="checkbox"]`)],Zi.prototype,`input`,2),N([F()],Zi.prototype,`hasFocus`,2),N([P()],Zi.prototype,`title`,2),N([P()],Zi.prototype,`name`,2),N([P()],Zi.prototype,`value`,2),N([P({reflect:!0})],Zi.prototype,`size`,2),N([P({type:Boolean,reflect:!0})],Zi.prototype,`disabled`,2),N([P({type:Boolean,reflect:!0})],Zi.prototype,`checked`,2),N([P({type:Boolean,reflect:!0})],Zi.prototype,`indeterminate`,2),N([vn(`checked`)],Zi.prototype,`defaultChecked`,2),N([P({reflect:!0})],Zi.prototype,`form`,2),N([P({type:Boolean,reflect:!0})],Zi.prototype,`required`,2),N([P({attribute:`help-text`})],Zi.prototype,`helpText`,2),N([R(`disabled`,{waitUntilFirstUpdate:!0})],Zi.prototype,`handleDisabledChange`,1),N([R([`checked`,`indeterminate`],{waitUntilFirstUpdate:!0})],Zi.prototype,`handleStateChange`,1),Zi.define(`sl-checkbox`);function*Qi(e=document.activeElement){e!=null&&(yield e,`shadowRoot`in e&&e.shadowRoot&&e.shadowRoot.mode!==`closed`&&(yield*Ct(Qi(e.shadowRoot.activeElement))))}function $i(){return[...Qi()].pop()}var ea=new WeakMap;function ta(e){let t=ea.get(e);return t||(t=window.getComputedStyle(e,null),ea.set(e,t)),t}function na(e){if(typeof e.checkVisibility==`function`)return e.checkVisibility({checkOpacity:!1,checkVisibilityCSS:!0});let t=ta(e);return t.visibility!==`hidden`&&t.display!==`none`}function ra(e){let{overflowY:t,overflowX:n}=ta(e);return t===`scroll`||n===`scroll`?!0:t!==`auto`||n!==`auto`?!1:e.scrollHeight>e.clientHeight&&t===`auto`||e.scrollWidth>e.clientWidth&&n===`auto`}function ia(e){let t=e.tagName.toLowerCase(),n=Number(e.getAttribute(`tabindex`));if(e.hasAttribute(`tabindex`)&&(isNaN(n)||n<=-1)||e.hasAttribute(`disabled`)||e.closest(`[inert]`))return!1;if(t===`input`&&e.getAttribute(`type`)===`radio`){let t=e.getRootNode(),n=`input[type='radio'][name="${e.getAttribute(`name`)}"]`,r=t.querySelector(`${n}:checked`);return r?r===e:t.querySelector(n)===e}return na(e)?(t===`audio`||t===`video`)&&e.hasAttribute(`controls`)||e.hasAttribute(`tabindex`)||e.hasAttribute(`contenteditable`)&&e.getAttribute(`contenteditable`)!==`false`||[`button`,`input`,`select`,`textarea`,`a`,`audio`,`video`,`summary`,`iframe`].includes(t)?!0:ra(e):!1}function aa(e){let t=sa(e);return{start:t[0]??null,end:t[t.length-1]??null}}function oa(e,t){return e.getRootNode({composed:!0})?.host!==t}function sa(e){let t=new WeakMap,n=[];function r(i){if(i instanceof Element){if(i.hasAttribute(`inert`)||i.closest(`[inert]`)||t.has(i))return;t.set(i,!0),!n.includes(i)&&ia(i)&&n.push(i),i instanceof HTMLSlotElement&&oa(i,e)&&i.assignedElements({flatten:!0}).forEach(e=>{r(e)}),i.shadowRoot!==null&&i.shadowRoot.mode===`open`&&r(i.shadowRoot)}for(let e of i.children)r(e)}return r(e),n.sort((e,t)=>{let n=Number(e.getAttribute(`tabindex`))||0;return(Number(t.getAttribute(`tabindex`))||0)-n})}var ca=[],la=class{constructor(e){this.tabDirection=`forward`,this.handleFocusIn=()=>{this.isActive()&&this.checkFocus()},this.handleKeyDown=e=>{var t;if(e.key!==`Tab`||this.isExternalActivated||!this.isActive())return;let n=$i();if(this.previousFocus=n,this.previousFocus&&this.possiblyHasTabbableChildren(this.previousFocus))return;e.shiftKey?this.tabDirection=`backward`:this.tabDirection=`forward`;let r=sa(this.element),i=r.findIndex(e=>e===n);this.previousFocus=this.currentFocus;let a=this.tabDirection===`forward`?1:-1;for(;;){i+a>=r.length?i=0:i+a<0?i=r.length-1:i+=a,this.previousFocus=this.currentFocus;let n=r[i];if(this.tabDirection===`backward`&&this.previousFocus&&this.possiblyHasTabbableChildren(this.previousFocus)||n&&this.possiblyHasTabbableChildren(n))return;e.preventDefault(),this.currentFocus=n,(t=this.currentFocus)==null||t.focus({preventScroll:!1});let o=[...Qi()];if(o.includes(this.currentFocus)||!o.includes(this.previousFocus))break}setTimeout(()=>this.checkFocus())},this.handleKeyUp=()=>{this.tabDirection=`forward`},this.element=e,this.elementsWithTabbableControls=[`iframe`]}activate(){ca.push(this.element),document.addEventListener(`focusin`,this.handleFocusIn),document.addEventListener(`keydown`,this.handleKeyDown),document.addEventListener(`keyup`,this.handleKeyUp)}deactivate(){ca=ca.filter(e=>e!==this.element),this.currentFocus=null,document.removeEventListener(`focusin`,this.handleFocusIn),document.removeEventListener(`keydown`,this.handleKeyDown),document.removeEventListener(`keyup`,this.handleKeyUp)}isActive(){return ca[ca.length-1]===this.element}activateExternal(){this.isExternalActivated=!0}deactivateExternal(){this.isExternalActivated=!1}checkFocus(){if(this.isActive()&&!this.isExternalActivated){let e=sa(this.element);if(!this.element.matches(`:focus-within`)){let t=e[0],n=e[e.length-1],r=this.tabDirection===`forward`?t:n;typeof r?.focus==`function`&&(this.currentFocus=r,r.focus({preventScroll:!1}))}}}possiblyHasTabbableChildren(e){return this.elementsWithTabbableControls.includes(e.tagName.toLowerCase())||e.hasAttribute(`controls`)}},ua=v`
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
`,da=e=>{var t;let{activeElement:n}=document;n&&e.contains(n)&&((t=document.activeElement)==null||t.blur())},fa=class extends L{constructor(){super(...arguments),this.hasSlotController=new zt(this,`footer`),this.localize=new at(this),this.modal=new la(this),this.open=!1,this.label=``,this.noHeader=!1,this.handleDocumentKeyDown=e=>{e.key===`Escape`&&this.modal.isActive()&&this.open&&(e.stopPropagation(),this.requestClose(`keyboard`))}}firstUpdated(){this.dialog.hidden=!this.open,this.open&&(this.addOpenListeners(),this.modal.activate(),An(this))}disconnectedCallback(){super.disconnectedCallback(),this.modal.deactivate(),jn(this),this.removeOpenListeners()}requestClose(e){if(this.emit(`sl-request-close`,{cancelable:!0,detail:{source:e}}).defaultPrevented){let e=zi(this,`dialog.denyClose`,{dir:this.localize.dir()});Vi(this.panel,e.keyframes,e.options);return}this.hide()}addOpenListeners(){var e;`CloseWatcher`in window?((e=this.closeWatcher)==null||e.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>this.requestClose(`keyboard`)):document.addEventListener(`keydown`,this.handleDocumentKeyDown)}removeOpenListeners(){var e;(e=this.closeWatcher)==null||e.destroy(),document.removeEventListener(`keydown`,this.handleDocumentKeyDown)}async handleOpenChange(){if(this.open){this.emit(`sl-show`),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.modal.activate(),An(this);let e=this.querySelector(`[autofocus]`);e&&e.removeAttribute(`autofocus`),await Promise.all([Wi(this.dialog),Wi(this.overlay)]),this.dialog.hidden=!1,requestAnimationFrame(()=>{this.emit(`sl-initial-focus`,{cancelable:!0}).defaultPrevented||(e?e.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),e&&e.setAttribute(`autofocus`,``)});let t=zi(this,`dialog.show`,{dir:this.localize.dir()}),n=zi(this,`dialog.overlay.show`,{dir:this.localize.dir()});await Promise.all([Vi(this.panel,t.keyframes,t.options),Vi(this.overlay,n.keyframes,n.options)]),this.emit(`sl-after-show`)}else{da(this),this.emit(`sl-hide`),this.removeOpenListeners(),this.modal.deactivate(),await Promise.all([Wi(this.dialog),Wi(this.overlay)]);let e=zi(this,`dialog.hide`,{dir:this.localize.dir()}),t=zi(this,`dialog.overlay.hide`,{dir:this.localize.dir()});await Promise.all([Vi(this.overlay,t.keyframes,t.options).then(()=>{this.overlay.hidden=!0}),Vi(this.panel,e.keyframes,e.options).then(()=>{this.panel.hidden=!0})]),this.dialog.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1,jn(this);let n=this.originalTrigger;typeof n?.focus==`function`&&setTimeout(()=>n.focus()),this.emit(`sl-after-hide`)}}async show(){if(!this.open)return this.open=!0,Bi(this,`sl-after-show`)}async hide(){if(this.open)return this.open=!1,Bi(this,`sl-after-hide`)}render(){return A`
      <div
        part="base"
        class=${z({dialog:!0,"dialog--open":this.open,"dialog--has-footer":this.hasSlotController.test(`footer`)})}
      >
        <div part="overlay" class="dialog__overlay" @click=${()=>this.requestClose(`overlay`)} tabindex="-1"></div>

        <div
          part="panel"
          class="dialog__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open?`false`:`true`}
          aria-label=${B(this.noHeader?this.label:void 0)}
          aria-labelledby=${B(this.noHeader?void 0:`title`)}
          tabindex="-1"
        >
          ${this.noHeader?``:A`
                <header part="header" class="dialog__header">
                  <h2 part="title" class="dialog__title" id="title">
                    <slot name="label"> ${this.label.length>0?this.label:`﻿`} </slot>
                  </h2>
                  <div part="header-actions" class="dialog__header-actions">
                    <slot name="header-actions"></slot>
                    <sl-icon-button
                      part="close-button"
                      exportparts="base:close-button__base"
                      class="dialog__close"
                      name="x-lg"
                      label=${this.localize.term(`close`)}
                      library="system"
                      @click="${()=>this.requestClose(`close-button`)}"
                    ></sl-icon-button>
                  </div>
                </header>
              `}
          ${``}
          <div part="body" class="dialog__body" tabindex="-1"><slot></slot></div>

          <footer part="footer" class="dialog__footer">
            <slot name="footer"></slot>
          </footer>
        </div>
      </div>
    `}};fa.styles=[M,ua],fa.dependencies={"sl-icon-button":Cn},N([I(`.dialog`)],fa.prototype,`dialog`,2),N([I(`.dialog__panel`)],fa.prototype,`panel`,2),N([I(`.dialog__overlay`)],fa.prototype,`overlay`,2),N([P({type:Boolean,reflect:!0})],fa.prototype,`open`,2),N([P({reflect:!0})],fa.prototype,`label`,2),N([P({attribute:`no-header`,type:Boolean,reflect:!0})],fa.prototype,`noHeader`,2),N([R(`open`,{waitUntilFirstUpdate:!0})],fa.prototype,`handleOpenChange`,1),Ri(`dialog.show`,{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:`ease`}}),Ri(`dialog.hide`,{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:`ease`}}),Ri(`dialog.denyClose`,{keyframes:[{scale:1},{scale:1.02},{scale:1}],options:{duration:250}}),Ri(`dialog.overlay.show`,{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}}),Ri(`dialog.overlay.hide`,{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}}),fa.define(`sl-dialog`);var pa=v`
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
`,ma=v`
  :host {
    display: contents;
  }
`,ha=class extends L{constructor(){super(...arguments),this.observedElements=[],this.disabled=!1}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(e=>{this.emit(`sl-resize`,{detail:{entries:e}})}),this.disabled||this.startObserver()}disconnectedCallback(){super.disconnectedCallback(),this.stopObserver()}handleSlotChange(){this.disabled||this.startObserver()}startObserver(){let e=this.shadowRoot.querySelector(`slot`);if(e!==null){let t=e.assignedElements({flatten:!0});this.observedElements.forEach(e=>this.resizeObserver.unobserve(e)),this.observedElements=[],t.forEach(e=>{this.resizeObserver.observe(e),this.observedElements.push(e)})}}stopObserver(){this.resizeObserver.disconnect()}handleDisabledChange(){this.disabled?this.stopObserver():this.startObserver()}render(){return A` <slot @slotchange=${this.handleSlotChange}></slot> `}};ha.styles=[M,ma],N([P({type:Boolean,reflect:!0})],ha.prototype,`disabled`,2),N([R(`disabled`,{waitUntilFirstUpdate:!0})],ha.prototype,`handleDisabledChange`,1);var ga=class extends L{constructor(){super(...arguments),this.tabs=[],this.focusableTabs=[],this.panels=[],this.localize=new at(this),this.hasScrollControls=!1,this.shouldHideScrollStartButton=!1,this.shouldHideScrollEndButton=!1,this.placement=`top`,this.activation=`auto`,this.noScrollControls=!1,this.fixedScrollControls=!1,this.scrollOffset=1}connectedCallback(){let e=Promise.all([customElements.whenDefined(`sl-tab`),customElements.whenDefined(`sl-tab-panel`)]);super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>{this.repositionIndicator(),this.updateScrollControls()}),this.mutationObserver=new MutationObserver(e=>{let t=e.filter(({target:e})=>{if(e===this)return!0;if(e.closest(`sl-tab-group`)!==this)return!1;let t=e.tagName.toLowerCase();return t===`sl-tab`||t===`sl-tab-panel`});if(t.length!==0){if(t.some(e=>![`aria-labelledby`,`aria-controls`].includes(e.attributeName))&&setTimeout(()=>this.setAriaLabels()),t.some(e=>e.attributeName===`disabled`))this.syncTabsAndPanels();else if(t.some(e=>e.attributeName===`active`)){let e=t.filter(e=>e.attributeName===`active`&&e.target.tagName.toLowerCase()===`sl-tab`).map(e=>e.target).find(e=>e.active);e&&this.setActiveTab(e)}}}),this.updateComplete.then(()=>{this.syncTabsAndPanels(),this.mutationObserver.observe(this,{attributes:!0,attributeFilter:[`active`,`disabled`,`name`,`panel`],childList:!0,subtree:!0}),this.resizeObserver.observe(this.nav),e.then(()=>{new IntersectionObserver((e,t)=>{e[0].intersectionRatio>0&&(this.setAriaLabels(),this.setActiveTab(this.getActiveTab()??this.tabs[0],{emitEvents:!1}),t.unobserve(e[0].target))}).observe(this.tabGroup)})})}disconnectedCallback(){var e,t;super.disconnectedCallback(),(e=this.mutationObserver)==null||e.disconnect(),this.nav&&((t=this.resizeObserver)==null||t.unobserve(this.nav))}getAllTabs(){return this.shadowRoot.querySelector(`slot[name="nav"]`).assignedElements()}getAllPanels(){return[...this.body.assignedElements()].filter(e=>e.tagName.toLowerCase()===`sl-tab-panel`)}getActiveTab(){return this.tabs.find(e=>e.active)}handleClick(e){let t=e.target.closest(`sl-tab`);t?.closest(`sl-tab-group`)===this&&t!==null&&this.setActiveTab(t,{scrollBehavior:`smooth`})}handleKeyDown(e){let t=e.target.closest(`sl-tab`);if(t?.closest(`sl-tab-group`)===this&&([`Enter`,` `].includes(e.key)&&t!==null&&(this.setActiveTab(t,{scrollBehavior:`smooth`}),e.preventDefault()),[`ArrowLeft`,`ArrowRight`,`ArrowUp`,`ArrowDown`,`Home`,`End`].includes(e.key))){let t=this.tabs.find(e=>e.matches(`:focus`)),n=this.localize.dir()===`rtl`,r=null;if(t?.tagName.toLowerCase()===`sl-tab`){if(e.key===`Home`)r=this.focusableTabs[0];else if(e.key===`End`)r=this.focusableTabs[this.focusableTabs.length-1];else if([`top`,`bottom`].includes(this.placement)&&e.key===(n?`ArrowRight`:`ArrowLeft`)||[`start`,`end`].includes(this.placement)&&e.key===`ArrowUp`){let e=this.tabs.findIndex(e=>e===t);r=this.findNextFocusableTab(e,`backward`)}else if([`top`,`bottom`].includes(this.placement)&&e.key===(n?`ArrowLeft`:`ArrowRight`)||[`start`,`end`].includes(this.placement)&&e.key===`ArrowDown`){let e=this.tabs.findIndex(e=>e===t);r=this.findNextFocusableTab(e,`forward`)}if(!r)return;r.tabIndex=0,r.focus({preventScroll:!0}),this.activation===`auto`?this.setActiveTab(r,{scrollBehavior:`smooth`}):this.tabs.forEach(e=>{e.tabIndex=e===r?0:-1}),[`top`,`bottom`].includes(this.placement)&&Mn(r,this.nav,`horizontal`),e.preventDefault()}}}handleScrollToStart(){this.nav.scroll({left:this.localize.dir()===`rtl`?this.nav.scrollLeft+this.nav.clientWidth:this.nav.scrollLeft-this.nav.clientWidth,behavior:`smooth`})}handleScrollToEnd(){this.nav.scroll({left:this.localize.dir()===`rtl`?this.nav.scrollLeft-this.nav.clientWidth:this.nav.scrollLeft+this.nav.clientWidth,behavior:`smooth`})}setActiveTab(e,t){if(t=gt({emitEvents:!0,scrollBehavior:`auto`},t),e!==this.activeTab&&!e.disabled){let n=this.activeTab;this.activeTab=e,this.tabs.forEach(e=>{e.active=e===this.activeTab,e.tabIndex=e===this.activeTab?0:-1}),this.panels.forEach(e=>e.active=e.name===this.activeTab?.panel),this.syncIndicator(),[`top`,`bottom`].includes(this.placement)&&Mn(this.activeTab,this.nav,`horizontal`,t.scrollBehavior),t.emitEvents&&(n&&this.emit(`sl-tab-hide`,{detail:{name:n.panel}}),this.emit(`sl-tab-show`,{detail:{name:this.activeTab.panel}}))}}setAriaLabels(){this.tabs.forEach(e=>{let t=this.panels.find(t=>t.name===e.panel);t&&(e.setAttribute(`aria-controls`,t.getAttribute(`id`)),t.setAttribute(`aria-labelledby`,e.getAttribute(`id`)))})}repositionIndicator(){let e=this.getActiveTab();if(!e)return;let t=e.clientWidth,n=e.clientHeight,r=this.localize.dir()===`rtl`,i=this.getAllTabs(),a=i.slice(0,i.indexOf(e)).reduce((e,t)=>({left:e.left+t.clientWidth,top:e.top+t.clientHeight}),{left:0,top:0});switch(this.placement){case`top`:case`bottom`:this.indicator.style.width=`${t}px`,this.indicator.style.height=`auto`,this.indicator.style.translate=r?`${-1*a.left}px`:`${a.left}px`;break;case`start`:case`end`:this.indicator.style.width=`auto`,this.indicator.style.height=`${n}px`,this.indicator.style.translate=`0 ${a.top}px`;break}}syncTabsAndPanels(){this.tabs=this.getAllTabs(),this.focusableTabs=this.tabs.filter(e=>!e.disabled),this.panels=this.getAllPanels(),this.syncIndicator(),this.updateComplete.then(()=>this.updateScrollControls())}findNextFocusableTab(e,t){let n=null,r=t===`forward`?1:-1,i=e+r;for(;e<this.tabs.length;){if(n=this.tabs[i]||null,n===null){n=t===`forward`?this.focusableTabs[0]:this.focusableTabs[this.focusableTabs.length-1];break}if(!n.disabled)break;i+=r}return n}updateScrollButtons(){this.hasScrollControls&&!this.fixedScrollControls&&(this.shouldHideScrollStartButton=this.scrollFromStart()<=this.scrollOffset,this.shouldHideScrollEndButton=this.isScrolledToEnd())}isScrolledToEnd(){return this.scrollFromStart()+this.nav.clientWidth>=this.nav.scrollWidth-this.scrollOffset}scrollFromStart(){return this.localize.dir()===`rtl`?-this.nav.scrollLeft:this.nav.scrollLeft}updateScrollControls(){this.noScrollControls?this.hasScrollControls=!1:this.hasScrollControls=[`top`,`bottom`].includes(this.placement)&&this.nav.scrollWidth>this.nav.clientWidth+1,this.updateScrollButtons()}syncIndicator(){this.getActiveTab()?(this.indicator.style.display=`block`,this.repositionIndicator()):this.indicator.style.display=`none`}show(e){let t=this.tabs.find(t=>t.panel===e);t&&this.setActiveTab(t,{scrollBehavior:`smooth`})}render(){let e=this.localize.dir()===`rtl`;return A`
      <div
        part="base"
        class=${z({"tab-group":!0,"tab-group--top":this.placement===`top`,"tab-group--bottom":this.placement===`bottom`,"tab-group--start":this.placement===`start`,"tab-group--end":this.placement===`end`,"tab-group--rtl":this.localize.dir()===`rtl`,"tab-group--has-scroll-controls":this.hasScrollControls})}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
      >
        <div class="tab-group__nav-container" part="nav">
          ${this.hasScrollControls?A`
                <sl-icon-button
                  part="scroll-button scroll-button--start"
                  exportparts="base:scroll-button__base"
                  class=${z({"tab-group__scroll-button":!0,"tab-group__scroll-button--start":!0,"tab-group__scroll-button--start--hidden":this.shouldHideScrollStartButton})}
                  name=${e?`chevron-right`:`chevron-left`}
                  library="system"
                  tabindex="-1"
                  aria-hidden="true"
                  label=${this.localize.term(`scrollToStart`)}
                  @click=${this.handleScrollToStart}
                ></sl-icon-button>
              `:``}

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
                  class=${z({"tab-group__scroll-button":!0,"tab-group__scroll-button--end":!0,"tab-group__scroll-button--end--hidden":this.shouldHideScrollEndButton})}
                  name=${e?`chevron-left`:`chevron-right`}
                  library="system"
                  tabindex="-1"
                  aria-hidden="true"
                  label=${this.localize.term(`scrollToEnd`)}
                  @click=${this.handleScrollToEnd}
                ></sl-icon-button>
              `:``}
        </div>

        <slot part="body" class="tab-group__body" @slotchange=${this.syncTabsAndPanels}></slot>
      </div>
    `}};ga.styles=[M,pa],ga.dependencies={"sl-icon-button":Cn,"sl-resize-observer":ha},N([I(`.tab-group`)],ga.prototype,`tabGroup`,2),N([I(`.tab-group__body`)],ga.prototype,`body`,2),N([I(`.tab-group__nav`)],ga.prototype,`nav`,2),N([I(`.tab-group__indicator`)],ga.prototype,`indicator`,2),N([F()],ga.prototype,`hasScrollControls`,2),N([F()],ga.prototype,`shouldHideScrollStartButton`,2),N([F()],ga.prototype,`shouldHideScrollEndButton`,2),N([P()],ga.prototype,`placement`,2),N([P()],ga.prototype,`activation`,2),N([P({attribute:`no-scroll-controls`,type:Boolean})],ga.prototype,`noScrollControls`,2),N([P({attribute:`fixed-scroll-controls`,type:Boolean})],ga.prototype,`fixedScrollControls`,2),N([Dt({passive:!0})],ga.prototype,`updateScrollButtons`,1),N([R(`noScrollControls`,{waitUntilFirstUpdate:!0})],ga.prototype,`updateScrollControls`,1),N([R(`placement`,{waitUntilFirstUpdate:!0})],ga.prototype,`syncIndicator`,1),ga.define(`sl-tab-group`);var _a=(e,t)=>{let n=0;return function(...r){window.clearTimeout(n),n=window.setTimeout(()=>{e.call(this,...r)},t)}},va=(e,t,n)=>{let r=e[t];e[t]=function(...e){r.call(this,...e),n.call(this,r,...e)}};(()=>{if(!(typeof window>`u`)&&!(`onscrollend`in window)){let e=new Set,t=new WeakMap,n=t=>{for(let n of t.changedTouches)e.add(n.identifier)},r=t=>{for(let n of t.changedTouches)e.delete(n.identifier)};document.addEventListener(`touchstart`,n,!0),document.addEventListener(`touchend`,r,!0),document.addEventListener(`touchcancel`,r,!0),va(EventTarget.prototype,`addEventListener`,function(n,r){if(r!==`scrollend`)return;let i=_a(()=>{e.size?i():this.dispatchEvent(new Event(`scrollend`))},100);n.call(this,`scroll`,i,{passive:!0}),t.set(this,i)}),va(EventTarget.prototype,`removeEventListener`,function(e,n){if(n!==`scrollend`)return;let r=t.get(this);r&&e.call(this,`scroll`,r,{passive:!0})})}})();var ya=v`
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
`,ba=0,xa=class extends L{constructor(){super(...arguments),this.localize=new at(this),this.attrId=++ba,this.componentId=`sl-tab-${this.attrId}`,this.panel=``,this.active=!1,this.closable=!1,this.disabled=!1,this.tabIndex=0}connectedCallback(){super.connectedCallback(),this.setAttribute(`role`,`tab`)}handleCloseClick(e){e.stopPropagation(),this.emit(`sl-close`)}handleActiveChange(){this.setAttribute(`aria-selected`,this.active?`true`:`false`)}handleDisabledChange(){this.setAttribute(`aria-disabled`,this.disabled?`true`:`false`),this.disabled&&!this.active?this.tabIndex=-1:this.tabIndex=0}render(){return this.id=this.id.length>0?this.id:this.componentId,A`
      <div
        part="base"
        class=${z({tab:!0,"tab--active":this.active,"tab--closable":this.closable,"tab--disabled":this.disabled})}
      >
        <slot></slot>
        ${this.closable?A`
              <sl-icon-button
                part="close-button"
                exportparts="base:close-button__base"
                name="x-lg"
                library="system"
                label=${this.localize.term(`close`)}
                class="tab__close-button"
                @click=${this.handleCloseClick}
                tabindex="-1"
              ></sl-icon-button>
            `:``}
      </div>
    `}};xa.styles=[M,ya],xa.dependencies={"sl-icon-button":Cn},N([I(`.tab`)],xa.prototype,`tab`,2),N([P({reflect:!0})],xa.prototype,`panel`,2),N([P({type:Boolean,reflect:!0})],xa.prototype,`active`,2),N([P({type:Boolean,reflect:!0})],xa.prototype,`closable`,2),N([P({type:Boolean,reflect:!0})],xa.prototype,`disabled`,2),N([P({type:Number,reflect:!0})],xa.prototype,`tabIndex`,2),N([R(`active`)],xa.prototype,`handleActiveChange`,1),N([R(`disabled`)],xa.prototype,`handleDisabledChange`,1),xa.define(`sl-tab`);var Sa=v`
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
`,Ca=0,wa=class extends L{constructor(){super(...arguments),this.attrId=++Ca,this.componentId=`sl-tab-panel-${this.attrId}`,this.name=``,this.active=!1}connectedCallback(){super.connectedCallback(),this.id=this.id.length>0?this.id:this.componentId,this.setAttribute(`role`,`tabpanel`)}handleActiveChange(){this.setAttribute(`aria-hidden`,this.active?`false`:`true`)}render(){return A`
      <slot
        part="base"
        class=${z({"tab-panel":!0,"tab-panel--active":this.active})}
      ></slot>
    `}};wa.styles=[M,Sa],N([P({reflect:!0})],wa.prototype,`name`,2),N([P({type:Boolean,reflect:!0})],wa.prototype,`active`,2),N([R(`active`)],wa.prototype,`handleActiveChange`,1),wa.define(`sl-tab-panel`),cn.define(`sl-icon`),Cn.define(`sl-icon-button`);var Ta=v`
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
`,Ea=class extends L{constructor(){super(),this.localize=new at(this),this.content=``,this.placement=`top`,this.disabled=!1,this.distance=8,this.open=!1,this.skidding=0,this.trigger=`hover focus`,this.hoist=!1,this.handleBlur=()=>{this.hasTrigger(`focus`)&&this.hide()},this.handleClick=()=>{this.hasTrigger(`click`)&&(this.open?this.hide():this.show())},this.handleFocus=()=>{this.hasTrigger(`focus`)&&this.show()},this.handleDocumentKeyDown=e=>{e.key===`Escape`&&(e.stopPropagation(),this.hide())},this.handleMouseOver=()=>{if(this.hasTrigger(`hover`)){let e=Hi(getComputedStyle(this).getPropertyValue(`--show-delay`));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.show(),e)}},this.handleMouseOut=()=>{if(this.hasTrigger(`hover`)){let e=Hi(getComputedStyle(this).getPropertyValue(`--hide-delay`));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.hide(),e)}},this.addEventListener(`blur`,this.handleBlur,!0),this.addEventListener(`focus`,this.handleFocus,!0),this.addEventListener(`click`,this.handleClick),this.addEventListener(`mouseover`,this.handleMouseOver),this.addEventListener(`mouseout`,this.handleMouseOut)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this.closeWatcher)==null||e.destroy(),document.removeEventListener(`keydown`,this.handleDocumentKeyDown)}firstUpdated(){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition())}hasTrigger(e){return this.trigger.split(` `).includes(e)}async handleOpenChange(){var e,t;if(this.open){if(this.disabled)return;this.emit(`sl-show`),`CloseWatcher`in window?((e=this.closeWatcher)==null||e.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide()}):document.addEventListener(`keydown`,this.handleDocumentKeyDown),await Wi(this.body),this.body.hidden=!1,this.popup.active=!0;let{keyframes:t,options:n}=zi(this,`tooltip.show`,{dir:this.localize.dir()});await Vi(this.popup.popup,t,n),this.popup.reposition(),this.emit(`sl-after-show`)}else{this.emit(`sl-hide`),(t=this.closeWatcher)==null||t.destroy(),document.removeEventListener(`keydown`,this.handleDocumentKeyDown),await Wi(this.body);let{keyframes:e,options:n}=zi(this,`tooltip.hide`,{dir:this.localize.dir()});await Vi(this.popup.popup,e,n),this.popup.active=!1,this.body.hidden=!0,this.emit(`sl-after-hide`)}}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}async show(){if(!this.open)return this.open=!0,Bi(this,`sl-after-show`)}async hide(){if(this.open)return this.open=!1,Bi(this,`sl-after-hide`)}render(){return A`
      <sl-popup
        part="base"
        exportparts="
          popup:base__popup,
          arrow:base__arrow
        "
        class=${z({tooltip:!0,"tooltip--open":this.open})}
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        strategy=${this.hoist?`fixed`:`absolute`}
        flip
        shift
        arrow
        hover-bridge
      >
        ${``}
        <slot slot="anchor" aria-describedby="tooltip"></slot>

        ${``}
        <div part="body" id="tooltip" class="tooltip__body" role="tooltip" aria-live=${this.open?`polite`:`off`}>
          <slot name="content">${this.content}</slot>
        </div>
      </sl-popup>
    `}};Ea.styles=[M,Ta],Ea.dependencies={"sl-popup":U},N([I(`slot:not([name])`)],Ea.prototype,`defaultSlot`,2),N([I(`.tooltip__body`)],Ea.prototype,`body`,2),N([I(`sl-popup`)],Ea.prototype,`popup`,2),N([P()],Ea.prototype,`content`,2),N([P()],Ea.prototype,`placement`,2),N([P({type:Boolean,reflect:!0})],Ea.prototype,`disabled`,2),N([P({type:Number})],Ea.prototype,`distance`,2),N([P({type:Boolean,reflect:!0})],Ea.prototype,`open`,2),N([P({type:Number})],Ea.prototype,`skidding`,2),N([P()],Ea.prototype,`trigger`,2),N([P({type:Boolean})],Ea.prototype,`hoist`,2),N([R(`open`,{waitUntilFirstUpdate:!0})],Ea.prototype,`handleOpenChange`,1),N([R([`content`,`distance`,`hoist`,`placement`,`skidding`])],Ea.prototype,`handleOptionsChange`,1),N([R(`disabled`)],Ea.prototype,`handleDisabledChange`,1),Ri(`tooltip.show`,{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:150,easing:`ease`}}),Ri(`tooltip.hide`,{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:150,easing:`ease`}}),Ea.define(`sl-tooltip`);var Da=v`
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
`;function Oa(e,t){function n(n){let r=e.getBoundingClientRect(),i=e.ownerDocument.defaultView,a=r.left+i.scrollX,o=r.top+i.scrollY,s=n.pageX-a,c=n.pageY-o;t?.onMove&&t.onMove(s,c)}function r(){document.removeEventListener(`pointermove`,n),document.removeEventListener(`pointerup`,r),t?.onStop&&t.onStop()}document.addEventListener(`pointermove`,n,{passive:!0}),document.addEventListener(`pointerup`,r),t?.initialEvent instanceof PointerEvent&&n(t.initialEvent)}function ka(e,t,n){return(e=>Object.is(e,-0)?0:e)(e<t?t:e>n?n:e)}var Aa=()=>null,ja=class extends L{constructor(){super(...arguments),this.isCollapsed=!1,this.localize=new at(this),this.positionBeforeCollapsing=0,this.position=50,this.vertical=!1,this.disabled=!1,this.snapValue=``,this.snapFunction=Aa,this.snapThreshold=12}toSnapFunction(e){let t=e.split(` `);return({pos:n,size:r,snapThreshold:i,isRtl:a,vertical:o})=>{let s=n,c=1/0;return t.forEach(t=>{let l;if(t.startsWith(`repeat(`)){let t=e.substring(7,e.length-1),i=t.endsWith(`%`),s=Number.parseFloat(t),c=i?s/100*r:s;l=Math.round((a&&!o?r-n:n)/c)*c}else l=t.endsWith(`%`)?Number.parseFloat(t)/100*r:Number.parseFloat(t);a&&!o&&(l=r-l);let u=Math.abs(n-l);u<=i&&u<c&&(s=l,c=u)}),s}}set snap(e){this.snapValue=e??``,e?this.snapFunction=typeof e==`string`?this.toSnapFunction(e):e:this.snapFunction=Aa}get snap(){return this.snapValue}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(e=>this.handleResize(e)),this.updateComplete.then(()=>this.resizeObserver.observe(this)),this.detectSize(),this.cachedPositionInPixels=this.percentageToPixels(this.position)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this.resizeObserver)==null||e.unobserve(this)}detectSize(){let{width:e,height:t}=this.getBoundingClientRect();this.size=this.vertical?t:e}percentageToPixels(e){return this.size*(e/100)}pixelsToPercentage(e){return e/this.size*100}handleDrag(e){let t=this.localize.dir()===`rtl`;this.disabled||(e.cancelable&&e.preventDefault(),Oa(this,{onMove:(e,n)=>{let r=this.vertical?n:e;this.primary===`end`&&(r=this.size-r),r=this.snapFunction({pos:r,size:this.size,snapThreshold:this.snapThreshold,isRtl:t,vertical:this.vertical})??r,this.position=ka(this.pixelsToPercentage(r),0,100)},initialEvent:e}))}handleKeyDown(e){if(!this.disabled&&[`ArrowLeft`,`ArrowRight`,`ArrowUp`,`ArrowDown`,`Home`,`End`,`Enter`].includes(e.key)){let t=this.position,n=(e.shiftKey?10:1)*(this.primary===`end`?-1:1);if(e.preventDefault(),(e.key===`ArrowLeft`&&!this.vertical||e.key===`ArrowUp`&&this.vertical)&&(t-=n),(e.key===`ArrowRight`&&!this.vertical||e.key===`ArrowDown`&&this.vertical)&&(t+=n),e.key===`Home`&&(t=this.primary===`end`?100:0),e.key===`End`&&(t=this.primary===`end`?0:100),e.key===`Enter`)if(this.isCollapsed)t=this.positionBeforeCollapsing,this.isCollapsed=!1;else{let e=this.position;t=0,requestAnimationFrame(()=>{this.isCollapsed=!0,this.positionBeforeCollapsing=e})}this.position=ka(t,0,100)}}handleResize(e){let{width:t,height:n}=e[0].contentRect;this.size=this.vertical?n:t,(isNaN(this.cachedPositionInPixels)||this.position===1/0)&&(this.cachedPositionInPixels=Number(this.getAttribute(`position-in-pixels`)),this.positionInPixels=Number(this.getAttribute(`position-in-pixels`)),this.position=this.pixelsToPercentage(this.positionInPixels)),this.primary&&(this.position=this.pixelsToPercentage(this.cachedPositionInPixels))}handlePositionChange(){this.cachedPositionInPixels=this.percentageToPixels(this.position),this.isCollapsed=!1,this.positionBeforeCollapsing=0,this.positionInPixels=this.percentageToPixels(this.position),this.emit(`sl-reposition`)}handlePositionInPixelsChange(){this.position=this.pixelsToPercentage(this.positionInPixels)}handleVerticalChange(){this.detectSize()}render(){let e=this.vertical?`gridTemplateRows`:`gridTemplateColumns`,t=this.vertical?`gridTemplateColumns`:`gridTemplateRows`,n=this.localize.dir()===`rtl`,r=`
      clamp(
        0%,
        clamp(
          var(--min),
          ${this.position}% - var(--divider-width) / 2,
          var(--max)
        ),
        calc(100% - var(--divider-width))
      )
    `,i=`auto`;return this.primary===`end`?n&&!this.vertical?this.style[e]=`${r} var(--divider-width) ${i}`:this.style[e]=`${i} var(--divider-width) ${r}`:n&&!this.vertical?this.style[e]=`${i} var(--divider-width) ${r}`:this.style[e]=`${r} var(--divider-width) ${i}`,this.style[t]=``,A`
      <slot name="start" part="panel start" class="start"></slot>

      <div
        part="divider"
        class="divider"
        tabindex=${B(this.disabled?void 0:`0`)}
        role="separator"
        aria-valuenow=${this.position}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-label=${this.localize.term(`resize`)}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleDrag}
        @touchstart=${this.handleDrag}
      >
        <slot name="divider"></slot>
      </div>

      <slot name="end" part="panel end" class="end"></slot>
    `}};ja.styles=[M,Da],N([I(`.divider`)],ja.prototype,`divider`,2),N([P({type:Number,reflect:!0})],ja.prototype,`position`,2),N([P({attribute:`position-in-pixels`,type:Number})],ja.prototype,`positionInPixels`,2),N([P({type:Boolean,reflect:!0})],ja.prototype,`vertical`,2),N([P({type:Boolean,reflect:!0})],ja.prototype,`disabled`,2),N([P()],ja.prototype,`primary`,2),N([P({reflect:!0})],ja.prototype,`snap`,1),N([P({type:Number,attribute:`snap-threshold`})],ja.prototype,`snapThreshold`,2),N([R(`position`)],ja.prototype,`handlePositionChange`,1),N([R(`positionInPixels`)],ja.prototype,`handlePositionInPixelsChange`,1),N([R(`vertical`)],ja.prototype,`handleVerticalChange`,1),ja.define(`sl-split-panel`);var Ma=v`
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
`,Na=class extends L{constructor(){super(...arguments),this.hasSlotController=new zt(this,`footer`,`header`,`image`)}render(){return A`
      <div
        part="base"
        class=${z({card:!0,"card--has-footer":this.hasSlotController.test(`footer`),"card--has-image":this.hasSlotController.test(`image`),"card--has-header":this.hasSlotController.test(`header`)})}
      >
        <slot name="image" part="image" class="card__image"></slot>
        <slot name="header" part="header" class="card__header"></slot>
        <slot part="body" class="card__body"></slot>
        <slot name="footer" part="footer" class="card__footer"></slot>
      </div>
    `}};Na.styles=[M,Ma],Na.define(`sl-card`);var Pa=v`
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
`,Fa=class extends L{constructor(){super(...arguments),this.variant=`primary`,this.pill=!1,this.pulse=!1}render(){return A`
      <span
        part="base"
        class=${z({badge:!0,"badge--primary":this.variant===`primary`,"badge--success":this.variant===`success`,"badge--neutral":this.variant===`neutral`,"badge--warning":this.variant===`warning`,"badge--danger":this.variant===`danger`,"badge--pill":this.pill,"badge--pulse":this.pulse})}
        role="status"
      >
        <slot></slot>
      </span>
    `}};Fa.styles=[M,Pa],N([P({reflect:!0})],Fa.prototype,`variant`,2),N([P({type:Boolean,reflect:!0})],Fa.prototype,`pill`,2),N([P({type:Boolean,reflect:!0})],Fa.prototype,`pulse`,2),Fa.define(`sl-badge`);var Ia=v`
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
`,La=class extends L{constructor(){super(...arguments),this.localize=new at(this),this.open=!1,this.placement=`bottom-start`,this.disabled=!1,this.stayOpenOnSelect=!1,this.distance=0,this.skidding=0,this.hoist=!1,this.sync=void 0,this.handleKeyDown=e=>{this.open&&e.key===`Escape`&&(e.stopPropagation(),this.hide(),this.focusOnTrigger())},this.handleDocumentKeyDown=e=>{if(e.key===`Escape`&&this.open&&!this.closeWatcher){e.stopPropagation(),this.focusOnTrigger(),this.hide();return}if(e.key===`Tab`){if(this.open&&document.activeElement?.tagName.toLowerCase()===`sl-menu-item`){e.preventDefault(),this.hide(),this.focusOnTrigger();return}let t=(e,n)=>{if(!e)return null;let r=e.closest(n);if(r)return r;let i=e.getRootNode();return i instanceof ShadowRoot?t(i.host,n):null};setTimeout(()=>{let e=this.containingElement?.getRootNode()instanceof ShadowRoot?$i():document.activeElement;(!this.containingElement||t(e,this.containingElement.tagName.toLowerCase())!==this.containingElement)&&this.hide()})}},this.handleDocumentMouseDown=e=>{let t=e.composedPath();this.containingElement&&!t.includes(this.containingElement)&&this.hide()},this.handlePanelSelect=e=>{let t=e.target;!this.stayOpenOnSelect&&t.tagName.toLowerCase()===`sl-menu`&&(this.hide(),this.focusOnTrigger())}}connectedCallback(){super.connectedCallback(),this.containingElement||=this}firstUpdated(){this.panel.hidden=!this.open,this.open&&(this.addOpenListeners(),this.popup.active=!0)}disconnectedCallback(){super.disconnectedCallback(),this.removeOpenListeners(),this.hide()}focusOnTrigger(){let e=this.trigger.assignedElements({flatten:!0})[0];typeof e?.focus==`function`&&e.focus()}getMenu(){return this.panel.assignedElements({flatten:!0}).find(e=>e.tagName.toLowerCase()===`sl-menu`)}handleTriggerClick(){this.open?this.hide():(this.show(),this.focusOnTrigger())}async handleTriggerKeyDown(e){if([` `,`Enter`].includes(e.key)){e.preventDefault(),this.handleTriggerClick();return}let t=this.getMenu();if(t){let n=t.getAllItems(),r=n[0],i=n[n.length-1];[`ArrowDown`,`ArrowUp`,`Home`,`End`].includes(e.key)&&(e.preventDefault(),this.open||(this.show(),await this.updateComplete),n.length>0&&this.updateComplete.then(()=>{(e.key===`ArrowDown`||e.key===`Home`)&&(t.setCurrentItem(r),r.focus()),(e.key===`ArrowUp`||e.key===`End`)&&(t.setCurrentItem(i),i.focus())}))}}handleTriggerKeyUp(e){e.key===` `&&e.preventDefault()}handleTriggerSlotChange(){this.updateAccessibleTrigger()}updateAccessibleTrigger(){let e=this.trigger.assignedElements({flatten:!0}).find(e=>aa(e).start),t;if(e){switch(e.tagName.toLowerCase()){case`sl-button`:case`sl-icon-button`:t=e.button;break;default:t=e}t.setAttribute(`aria-haspopup`,`true`),t.setAttribute(`aria-expanded`,this.open?`true`:`false`)}}async show(){if(!this.open)return this.open=!0,Bi(this,`sl-after-show`)}async hide(){if(this.open)return this.open=!1,Bi(this,`sl-after-hide`)}reposition(){this.popup.reposition()}addOpenListeners(){var e;this.panel.addEventListener(`sl-select`,this.handlePanelSelect),`CloseWatcher`in window?((e=this.closeWatcher)==null||e.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide(),this.focusOnTrigger()}):this.panel.addEventListener(`keydown`,this.handleKeyDown),document.addEventListener(`keydown`,this.handleDocumentKeyDown),document.addEventListener(`mousedown`,this.handleDocumentMouseDown)}removeOpenListeners(){var e;this.panel&&(this.panel.removeEventListener(`sl-select`,this.handlePanelSelect),this.panel.removeEventListener(`keydown`,this.handleKeyDown)),document.removeEventListener(`keydown`,this.handleDocumentKeyDown),document.removeEventListener(`mousedown`,this.handleDocumentMouseDown),(e=this.closeWatcher)==null||e.destroy()}async handleOpenChange(){if(this.disabled){this.open=!1;return}if(this.updateAccessibleTrigger(),this.open){this.emit(`sl-show`),this.addOpenListeners(),await Wi(this),this.panel.hidden=!1,this.popup.active=!0;let{keyframes:e,options:t}=zi(this,`dropdown.show`,{dir:this.localize.dir()});await Vi(this.popup.popup,e,t),this.emit(`sl-after-show`)}else{this.emit(`sl-hide`),this.removeOpenListeners(),await Wi(this);let{keyframes:e,options:t}=zi(this,`dropdown.hide`,{dir:this.localize.dir()});await Vi(this.popup.popup,e,t),this.panel.hidden=!0,this.popup.active=!1,this.emit(`sl-after-hide`)}}render(){return A`
      <sl-popup
        part="base"
        exportparts="popup:base__popup"
        id="dropdown"
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        strategy=${this.hoist?`fixed`:`absolute`}
        flip
        shift
        auto-size="vertical"
        auto-size-padding="10"
        sync=${B(this.sync?this.sync:void 0)}
        class=${z({dropdown:!0,"dropdown--open":this.open})}
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

        <div aria-hidden=${this.open?`false`:`true`} aria-labelledby="dropdown">
          <slot part="panel" class="dropdown__panel"></slot>
        </div>
      </sl-popup>
    `}};La.styles=[M,Ia],La.dependencies={"sl-popup":U},N([I(`.dropdown`)],La.prototype,`popup`,2),N([I(`.dropdown__trigger`)],La.prototype,`trigger`,2),N([I(`.dropdown__panel`)],La.prototype,`panel`,2),N([P({type:Boolean,reflect:!0})],La.prototype,`open`,2),N([P({reflect:!0})],La.prototype,`placement`,2),N([P({type:Boolean,reflect:!0})],La.prototype,`disabled`,2),N([P({attribute:`stay-open-on-select`,type:Boolean,reflect:!0})],La.prototype,`stayOpenOnSelect`,2),N([P({attribute:!1})],La.prototype,`containingElement`,2),N([P({type:Number})],La.prototype,`distance`,2),N([P({type:Number})],La.prototype,`skidding`,2),N([P({type:Boolean})],La.prototype,`hoist`,2),N([P({reflect:!0})],La.prototype,`sync`,2),N([R(`open`,{waitUntilFirstUpdate:!0})],La.prototype,`handleOpenChange`,1),Ri(`dropdown.show`,{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:`ease`}}),Ri(`dropdown.hide`,{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:`ease`}}),La.define(`sl-dropdown`);var Ra=v`
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
`,za=class extends L{connectedCallback(){super.connectedCallback(),this.setAttribute(`role`,`menu`)}handleClick(e){let t=[`menuitem`,`menuitemcheckbox`],n=e.composedPath(),r=n.find(e=>t.includes((e?.getAttribute)?.call(e,`role`)||``));if(!r||n.find(e=>(e?.getAttribute)?.call(e,`role`)===`menu`)!==this)return;let i=r;i.type===`checkbox`&&(i.checked=!i.checked),this.emit(`sl-select`,{detail:{item:i}})}handleKeyDown(e){if(e.key===`Enter`||e.key===` `){let t=this.getCurrentItem();e.preventDefault(),e.stopPropagation(),t?.click()}else if([`ArrowDown`,`ArrowUp`,`Home`,`End`].includes(e.key)){let t=this.getAllItems(),n=this.getCurrentItem(),r=n?t.indexOf(n):0;t.length>0&&(e.preventDefault(),e.stopPropagation(),e.key===`ArrowDown`?r++:e.key===`ArrowUp`?r--:e.key===`Home`?r=0:e.key===`End`&&(r=t.length-1),r<0&&(r=t.length-1),r>t.length-1&&(r=0),this.setCurrentItem(t[r]),t[r].focus())}}handleMouseDown(e){let t=e.target;this.isMenuItem(t)&&this.setCurrentItem(t)}handleSlotChange(){let e=this.getAllItems();e.length>0&&this.setCurrentItem(e[0])}isMenuItem(e){return e.tagName.toLowerCase()===`sl-menu-item`||[`menuitem`,`menuitemcheckbox`,`menuitemradio`].includes(e.getAttribute(`role`)??``)}getAllItems(){return[...this.defaultSlot.assignedElements({flatten:!0})].filter(e=>!(e.inert||!this.isMenuItem(e)))}getCurrentItem(){return this.getAllItems().find(e=>e.getAttribute(`tabindex`)===`0`)}setCurrentItem(e){this.getAllItems().forEach(t=>{t.setAttribute(`tabindex`,t===e?`0`:`-1`)})}render(){return A`
      <slot
        @slotchange=${this.handleSlotChange}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleMouseDown}
      ></slot>
    `}};za.styles=[M,Ra],N([I(`slot`)],za.prototype,`defaultSlot`,2),za.define(`sl-menu`);var Ba=v`
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
`,Va=(e,t)=>{let n=e._$AN;if(n===void 0)return!1;for(let e of n)e._$AO?.(t,!1),Va(e,t);return!0},Ha=e=>{let t,n;do{if((t=e._$AM)===void 0)break;n=t._$AN,n.delete(e),e=t}while(n?.size===0)},Ua=e=>{for(let t;t=e._$AM;e=t){let n=t._$AN;if(n===void 0)t._$AN=n=new Set;else if(n.has(e))break;n.add(e),Ka(t)}};function Wa(e){this._$AN===void 0?this._$AM=e:(Ha(this),this._$AM=e,Ua(this))}function Ga(e,t=!1,n=0){let r=this._$AH,i=this._$AN;if(i!==void 0&&i.size!==0)if(t)if(Array.isArray(r))for(let e=n;e<r.length;e++)Va(r[e],!1),Ha(r[e]);else r!=null&&(Va(r,!1),Ha(r));else Va(this,e)}var Ka=e=>{e.type==ln.CHILD&&(e._$AP??=Ga,e._$AQ??=Wa)},qa=class extends dn{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,n){super._$AT(e,t,n),Ua(this),this.isConnected=e._$AU}_$AO(e,t=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),t&&(Va(this,e),Ha(this))}setValue(e){if(en(this._$Ct))this._$Ct._$AI(e,this);else{let t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}},Ja=()=>new Ya,Ya=class{},Xa=new WeakMap,Za=un(class extends qa{render(e){return j}update(e,[t]){let n=t!==this.G;return n&&this.G!==void 0&&this.rt(void 0),(n||this.lt!==this.ct)&&(this.G=t,this.ht=e.options?.host,this.rt(this.ct=e.element)),j}rt(e){if(this.isConnected||(e=void 0),typeof this.G==`function`){let t=this.ht??globalThis,n=Xa.get(t);n===void 0&&(n=new WeakMap,Xa.set(t,n)),n.get(this.G)!==void 0&&this.G.call(this.ht,void 0),n.set(this.G,e),e!==void 0&&this.G.call(this.ht,e)}else this.G.value=e}get lt(){return typeof this.G==`function`?Xa.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),Qa=class{constructor(e,t){this.popupRef=Ja(),this.enableSubmenuTimer=-1,this.isConnected=!1,this.isPopupConnected=!1,this.skidding=0,this.submenuOpenDelay=100,this.handleMouseMove=e=>{this.host.style.setProperty(`--safe-triangle-cursor-x`,`${e.clientX}px`),this.host.style.setProperty(`--safe-triangle-cursor-y`,`${e.clientY}px`)},this.handleMouseOver=()=>{this.hasSlotController.test(`submenu`)&&this.enableSubmenu()},this.handleKeyDown=e=>{switch(e.key){case`Escape`:case`Tab`:this.disableSubmenu();break;case`ArrowLeft`:e.target!==this.host&&(e.preventDefault(),e.stopPropagation(),this.host.focus(),this.disableSubmenu());break;case`ArrowRight`:case`Enter`:case` `:this.handleSubmenuEntry(e);break;default:break}},this.handleClick=e=>{e.target===this.host?(e.preventDefault(),e.stopPropagation()):e.target instanceof Element&&(e.target.tagName===`sl-menu-item`||e.target.role?.startsWith(`menuitem`))&&this.disableSubmenu()},this.handleFocusOut=e=>{e.relatedTarget&&e.relatedTarget instanceof Element&&this.host.contains(e.relatedTarget)||this.disableSubmenu()},this.handlePopupMouseover=e=>{e.stopPropagation()},this.handlePopupReposition=()=>{let e=this.host.renderRoot.querySelector(`slot[name='submenu']`)?.assignedElements({flatten:!0}).filter(e=>e.localName===`sl-menu`)[0],t=getComputedStyle(this.host).direction===`rtl`;if(!e)return;let{left:n,top:r,width:i,height:a}=e.getBoundingClientRect();this.host.style.setProperty(`--safe-triangle-submenu-start-x`,`${t?n+i:n}px`),this.host.style.setProperty(`--safe-triangle-submenu-start-y`,`${r}px`),this.host.style.setProperty(`--safe-triangle-submenu-end-x`,`${t?n+i:n}px`),this.host.style.setProperty(`--safe-triangle-submenu-end-y`,`${r+a}px`)},(this.host=e).addController(this),this.hasSlotController=t}hostConnected(){this.hasSlotController.test(`submenu`)&&!this.host.disabled&&this.addListeners()}hostDisconnected(){this.removeListeners()}hostUpdated(){this.hasSlotController.test(`submenu`)&&!this.host.disabled?(this.addListeners(),this.updateSkidding()):this.removeListeners()}addListeners(){this.isConnected||=(this.host.addEventListener(`mousemove`,this.handleMouseMove),this.host.addEventListener(`mouseover`,this.handleMouseOver),this.host.addEventListener(`keydown`,this.handleKeyDown),this.host.addEventListener(`click`,this.handleClick),this.host.addEventListener(`focusout`,this.handleFocusOut),!0),this.isPopupConnected||this.popupRef.value&&(this.popupRef.value.addEventListener(`mouseover`,this.handlePopupMouseover),this.popupRef.value.addEventListener(`sl-reposition`,this.handlePopupReposition),this.isPopupConnected=!0)}removeListeners(){this.isConnected&&=(this.host.removeEventListener(`mousemove`,this.handleMouseMove),this.host.removeEventListener(`mouseover`,this.handleMouseOver),this.host.removeEventListener(`keydown`,this.handleKeyDown),this.host.removeEventListener(`click`,this.handleClick),this.host.removeEventListener(`focusout`,this.handleFocusOut),!1),this.isPopupConnected&&this.popupRef.value&&(this.popupRef.value.removeEventListener(`mouseover`,this.handlePopupMouseover),this.popupRef.value.removeEventListener(`sl-reposition`,this.handlePopupReposition),this.isPopupConnected=!1)}handleSubmenuEntry(e){let t=this.host.renderRoot.querySelector(`slot[name='submenu']`);if(!t){console.error(`Cannot activate a submenu if no corresponding menuitem can be found.`,this);return}let n=null;for(let e of t.assignedElements())if(n=e.querySelectorAll(`sl-menu-item, [role^='menuitem']`),n.length!==0)break;if(!(!n||n.length===0)){n[0].setAttribute(`tabindex`,`0`);for(let e=1;e!==n.length;++e)n[e].setAttribute(`tabindex`,`-1`);this.popupRef.value&&(e.preventDefault(),e.stopPropagation(),this.popupRef.value.active?n[0]instanceof HTMLElement&&n[0].focus():(this.enableSubmenu(!1),this.host.updateComplete.then(()=>{n[0]instanceof HTMLElement&&n[0].focus()}),this.host.requestUpdate()))}}setSubmenuState(e){this.popupRef.value&&this.popupRef.value.active!==e&&(this.popupRef.value.active=e,this.host.requestUpdate())}enableSubmenu(e=!0){e?(window.clearTimeout(this.enableSubmenuTimer),this.enableSubmenuTimer=window.setTimeout(()=>{this.setSubmenuState(!0)},this.submenuOpenDelay)):this.setSubmenuState(!0)}disableSubmenu(){window.clearTimeout(this.enableSubmenuTimer),this.setSubmenuState(!1)}updateSkidding(){if(!this.host.parentElement?.computedStyleMap)return;let e=this.host.parentElement.computedStyleMap();this.skidding=[`padding-top`,`border-top-width`,`margin-top`].reduce((t,n)=>{let r=e.get(n)??new CSSUnitValue(0,`px`);return t-(r instanceof CSSUnitValue?r:new CSSUnitValue(0,`px`)).to(`px`).value},0)}isExpanded(){return this.popupRef.value?this.popupRef.value.active:!1}renderSubmenu(){let e=getComputedStyle(this.host).direction===`rtl`;return this.isConnected?A`
      <sl-popup
        ${Za(this.popupRef)}
        placement=${e?`left-start`:`right-start`}
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
    `:A` <slot name="submenu" hidden></slot> `}},$a=class extends L{constructor(){super(...arguments),this.localize=new at(this),this.type=`normal`,this.checked=!1,this.value=``,this.loading=!1,this.disabled=!1,this.hasSlotController=new zt(this,`submenu`),this.submenuController=new Qa(this,this.hasSlotController),this.handleHostClick=e=>{this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())},this.handleMouseOver=e=>{this.focus(),e.stopPropagation()}}connectedCallback(){super.connectedCallback(),this.addEventListener(`click`,this.handleHostClick),this.addEventListener(`mouseover`,this.handleMouseOver)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(`click`,this.handleHostClick),this.removeEventListener(`mouseover`,this.handleMouseOver)}handleDefaultSlotChange(){let e=this.getTextLabel();if(this.cachedTextLabel===void 0){this.cachedTextLabel=e;return}e!==this.cachedTextLabel&&(this.cachedTextLabel=e,this.emit(`slotchange`,{bubbles:!0,composed:!1,cancelable:!1}))}handleCheckedChange(){if(this.checked&&this.type!==`checkbox`){this.checked=!1,console.error(`The checked attribute can only be used on menu items with type="checkbox"`,this);return}this.type===`checkbox`?this.setAttribute(`aria-checked`,this.checked?`true`:`false`):this.removeAttribute(`aria-checked`)}handleDisabledChange(){this.setAttribute(`aria-disabled`,this.disabled?`true`:`false`)}handleTypeChange(){this.type===`checkbox`?(this.setAttribute(`role`,`menuitemcheckbox`),this.setAttribute(`aria-checked`,this.checked?`true`:`false`)):(this.setAttribute(`role`,`menuitem`),this.removeAttribute(`aria-checked`))}getTextLabel(){return Bt(this.defaultSlot)}isSubmenu(){return this.hasSlotController.test(`submenu`)}render(){let e=this.localize.dir()===`rtl`,t=this.submenuController.isExpanded();return A`
      <div
        id="anchor"
        part="base"
        class=${z({"menu-item":!0,"menu-item--rtl":e,"menu-item--checked":this.checked,"menu-item--disabled":this.disabled,"menu-item--loading":this.loading,"menu-item--has-submenu":this.isSubmenu(),"menu-item--submenu-expanded":t})}
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
          <sl-icon name=${e?`chevron-left`:`chevron-right`} library="system" aria-hidden="true"></sl-icon>
        </span>

        ${this.submenuController.renderSubmenu()}
        ${this.loading?A` <sl-spinner part="spinner" exportparts="base:spinner__base"></sl-spinner> `:``}
      </div>
    `}};$a.styles=[M,Ba],$a.dependencies={"sl-icon":cn,"sl-popup":U,"sl-spinner":At},N([I(`slot:not([name])`)],$a.prototype,`defaultSlot`,2),N([I(`.menu-item`)],$a.prototype,`menuItem`,2),N([P()],$a.prototype,`type`,2),N([P({type:Boolean,reflect:!0})],$a.prototype,`checked`,2),N([P()],$a.prototype,`value`,2),N([P({type:Boolean,reflect:!0})],$a.prototype,`loading`,2),N([P({type:Boolean,reflect:!0})],$a.prototype,`disabled`,2),N([R(`checked`)],$a.prototype,`handleCheckedChange`,1),N([R(`disabled`)],$a.prototype,`handleDisabledChange`,1),N([R(`type`)],$a.prototype,`handleTypeChange`,1),$a.define(`sl-menu-item`);var eo=v`
  :host {
    --color: var(--sl-panel-border-color);
    --width: var(--sl-panel-border-width);
    --spacing: var(--sl-spacing-medium);
  }

  :host(:not([vertical])) {
    display: block;
    border-top: solid var(--width) var(--color);
    margin: var(--spacing) 0;
  }

  :host([vertical]) {
    display: inline-block;
    height: 100%;
    border-left: solid var(--width) var(--color);
    margin: 0 var(--spacing);
  }
`,to=class extends L{constructor(){super(...arguments),this.vertical=!1}connectedCallback(){super.connectedCallback(),this.setAttribute(`role`,`separator`)}handleVerticalChange(){this.setAttribute(`aria-orientation`,this.vertical?`vertical`:`horizontal`)}};to.styles=[M,eo],N([P({type:Boolean,reflect:!0})],to.prototype,`vertical`,2),N([R(`vertical`)],to.prototype,`handleVerticalChange`,1),to.define(`sl-divider`);var no=v`
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
`,ro=class e extends L{constructor(){super(...arguments),this.hasSlotController=new zt(this,`icon`,`suffix`),this.localize=new at(this),this.open=!1,this.closable=!1,this.variant=`primary`,this.duration=1/0,this.remainingTime=this.duration}static get toastStack(){return this.currentToastStack||=Object.assign(document.createElement(`div`),{className:`sl-toast-stack`}),this.currentToastStack}firstUpdated(){this.base.hidden=!this.open}restartAutoHide(){this.handleCountdownChange(),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval),this.open&&this.duration<1/0&&(this.autoHideTimeout=window.setTimeout(()=>this.hide(),this.duration),this.remainingTime=this.duration,this.remainingTimeInterval=window.setInterval(()=>{this.remainingTime-=100},100))}pauseAutoHide(){var e;(e=this.countdownAnimation)==null||e.pause(),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval)}resumeAutoHide(){var e;this.duration<1/0&&(this.autoHideTimeout=window.setTimeout(()=>this.hide(),this.remainingTime),this.remainingTimeInterval=window.setInterval(()=>{this.remainingTime-=100},100),(e=this.countdownAnimation)==null||e.play())}handleCountdownChange(){if(this.open&&this.duration<1/0&&this.countdown){let{countdownElement:e}=this;this.countdownAnimation=e.animate([{width:`100%`},{width:`0`}],{duration:this.duration,easing:`linear`})}}handleCloseClick(){this.hide()}async handleOpenChange(){if(this.open){this.emit(`sl-show`),this.duration<1/0&&this.restartAutoHide(),await Wi(this.base),this.base.hidden=!1;let{keyframes:e,options:t}=zi(this,`alert.show`,{dir:this.localize.dir()});await Vi(this.base,e,t),this.emit(`sl-after-show`)}else{da(this),this.emit(`sl-hide`),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval),await Wi(this.base);let{keyframes:e,options:t}=zi(this,`alert.hide`,{dir:this.localize.dir()});await Vi(this.base,e,t),this.base.hidden=!0,this.emit(`sl-after-hide`)}}handleDurationChange(){this.restartAutoHide()}async show(){if(!this.open)return this.open=!0,Bi(this,`sl-after-show`)}async hide(){if(this.open)return this.open=!1,Bi(this,`sl-after-hide`)}async toast(){return new Promise(t=>{this.handleCountdownChange(),e.toastStack.parentElement===null&&document.body.append(e.toastStack),e.toastStack.appendChild(this),requestAnimationFrame(()=>{this.clientWidth,this.show()}),this.addEventListener(`sl-after-hide`,()=>{e.toastStack.removeChild(this),t(),e.toastStack.querySelector(`sl-alert`)===null&&e.toastStack.remove()},{once:!0})})}render(){return A`
      <div
        part="base"
        class=${z({alert:!0,"alert--open":this.open,"alert--closable":this.closable,"alert--has-countdown":!!this.countdown,"alert--has-icon":this.hasSlotController.test(`icon`),"alert--primary":this.variant===`primary`,"alert--success":this.variant===`success`,"alert--neutral":this.variant===`neutral`,"alert--warning":this.variant===`warning`,"alert--danger":this.variant===`danger`})}
        role="alert"
        aria-hidden=${this.open?`false`:`true`}
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
                label=${this.localize.term(`close`)}
                @click=${this.handleCloseClick}
              ></sl-icon-button>
            `:``}

        <div role="timer" class="alert__timer">${this.remainingTime}</div>

        ${this.countdown?A`
              <div
                class=${z({alert__countdown:!0,"alert__countdown--ltr":this.countdown===`ltr`})}
              >
                <div class="alert__countdown-elapsed"></div>
              </div>
            `:``}
      </div>
    `}};ro.styles=[M,no],ro.dependencies={"sl-icon-button":Cn},N([I(`[part~="base"]`)],ro.prototype,`base`,2),N([I(`.alert__countdown-elapsed`)],ro.prototype,`countdownElement`,2),N([P({type:Boolean,reflect:!0})],ro.prototype,`open`,2),N([P({type:Boolean,reflect:!0})],ro.prototype,`closable`,2),N([P({reflect:!0})],ro.prototype,`variant`,2),N([P({type:Number})],ro.prototype,`duration`,2),N([P({type:String,reflect:!0})],ro.prototype,`countdown`,2),N([F()],ro.prototype,`remainingTime`,2),N([R(`open`,{waitUntilFirstUpdate:!0})],ro.prototype,`handleOpenChange`,1),N([R(`duration`)],ro.prototype,`handleDurationChange`,1);var io=ro;Ri(`alert.show`,{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:`ease`}}),Ri(`alert.hide`,{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:`ease`}}),io.define(`sl-alert`),Ht(`https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.20/cdn`);var ao=s((e=>{Object.defineProperty(e,`__esModule`,{value:!0}),e.regexpCode=e.getEsmExportName=e.getProperty=e.safeStringify=e.stringify=e.strConcat=e.addCodeArg=e.str=e._=e.nil=e._Code=e.Name=e.IDENTIFIER=e._CodeOrName=void 0;var t=class{};e._CodeOrName=t,e.IDENTIFIER=/^[a-z$_][a-z$_0-9]*$/i;var n=class extends t{constructor(t){if(super(),!e.IDENTIFIER.test(t))throw Error(`CodeGen: name must be a valid identifier`);this.str=t}toString(){return this.str}emptyStr(){return!1}get names(){return{[this.str]:1}}};e.Name=n;var r=class extends t{constructor(e){super(),this._items=typeof e==`string`?[e]:e}toString(){return this.str}emptyStr(){if(this._items.length>1)return!1;let e=this._items[0];return e===``||e===`""`}get str(){return this._str??=this._items.reduce((e,t)=>`${e}${t}`,``)}get names(){return this._names??=this._items.reduce((e,t)=>(t instanceof n&&(e[t.str]=(e[t.str]||0)+1),e),{})}};e._Code=r,e.nil=new r(``);function i(e,...t){let n=[e[0]],i=0;for(;i<t.length;)s(n,t[i]),n.push(e[++i]);return new r(n)}e._=i;var a=new r(`+`);function o(e,...t){let n=[p(e[0])],i=0;for(;i<t.length;)n.push(a),s(n,t[i]),n.push(a,p(e[++i]));return c(n),new r(n)}e.str=o;function s(e,t){t instanceof r?e.push(...t._items):t instanceof n?e.push(t):e.push(d(t))}e.addCodeArg=s;function c(e){let t=1;for(;t<e.length-1;){if(e[t]===a){let n=l(e[t-1],e[t+1]);if(n!==void 0){e.splice(t-1,3,n);continue}e[t++]=`+`}t++}}function l(e,t){if(t===`""`)return e;if(e===`""`)return t;if(typeof e==`string`)return t instanceof n||e[e.length-1]!==`"`?void 0:typeof t==`string`?t[0]===`"`?e.slice(0,-1)+t.slice(1):void 0:`${e.slice(0,-1)}${t}"`;if(typeof t==`string`&&t[0]===`"`&&!(e instanceof n))return`"${e}${t.slice(1)}`}function u(e,t){return t.emptyStr()?e:e.emptyStr()?t:o`${e}${t}`}e.strConcat=u;function d(e){return typeof e==`number`||typeof e==`boolean`||e===null?e:p(Array.isArray(e)?e.join(`,`):e)}function f(e){return new r(p(e))}e.stringify=f;function p(e){return JSON.stringify(e).replace(/\u2028/g,`\\u2028`).replace(/\u2029/g,`\\u2029`)}e.safeStringify=p;function m(t){return typeof t==`string`&&e.IDENTIFIER.test(t)?new r(`.${t}`):i`[${t}]`}e.getProperty=m;function h(t){if(typeof t==`string`&&e.IDENTIFIER.test(t))return new r(`${t}`);throw Error(`CodeGen: invalid export name: ${t}, use explicit $id name mapping`)}e.getEsmExportName=h;function g(e){return new r(e.toString())}e.regexpCode=g})),oo=s((e=>{Object.defineProperty(e,`__esModule`,{value:!0}),e.ValueScope=e.ValueScopeName=e.Scope=e.varKinds=e.UsedValueState=void 0;var t=ao(),n=class extends Error{constructor(e){super(`CodeGen: "code" for ${e} not defined`),this.value=e.value}},r;(function(e){e[e.Started=0]=`Started`,e[e.Completed=1]=`Completed`})(r||(e.UsedValueState=r={})),e.varKinds={const:new t.Name(`const`),let:new t.Name(`let`),var:new t.Name(`var`)};var i=class{constructor({prefixes:e,parent:t}={}){this._names={},this._prefixes=e,this._parent=t}toName(e){return e instanceof t.Name?e:this.name(e)}name(e){return new t.Name(this._newName(e))}_newName(e){let t=this._names[e]||this._nameGroup(e);return`${e}${t.index++}`}_nameGroup(e){if((this._parent?._prefixes)?.has(e)||this._prefixes&&!this._prefixes.has(e))throw Error(`CodeGen: prefix "${e}" is not allowed in this scope`);return this._names[e]={prefix:e,index:0}}};e.Scope=i;var a=class extends t.Name{constructor(e,t){super(t),this.prefix=e}setValue(e,{property:n,itemIndex:r}){this.value=e,this.scopePath=(0,t._)`.${new t.Name(n)}[${r}]`}};e.ValueScopeName=a;var o=(0,t._)`\n`;e.ValueScope=class extends i{constructor(e){super(e),this._values={},this._scope=e.scope,this.opts={...e,_n:e.lines?o:t.nil}}get(){return this._scope}name(e){return new a(e,this._newName(e))}value(e,t){if(t.ref===void 0)throw Error(`CodeGen: ref must be passed in value`);let n=this.toName(e),{prefix:r}=n,i=t.key??t.ref,a=this._values[r];if(a){let e=a.get(i);if(e)return e}else a=this._values[r]=new Map;a.set(i,n);let o=this._scope[r]||(this._scope[r]=[]),s=o.length;return o[s]=t.ref,n.setValue(t,{property:r,itemIndex:s}),n}getValue(e,t){let n=this._values[e];if(n)return n.get(t)}scopeRefs(e,n=this._values){return this._reduceValues(n,n=>{if(n.scopePath===void 0)throw Error(`CodeGen: name "${n}" has no value`);return(0,t._)`${e}${n.scopePath}`})}scopeCode(e=this._values,t,n){return this._reduceValues(e,e=>{if(e.value===void 0)throw Error(`CodeGen: name "${e}" has no value`);return e.value.code},t,n)}_reduceValues(i,a,o={},s){let c=t.nil;for(let l in i){let u=i[l];if(!u)continue;let d=o[l]=o[l]||new Map;u.forEach(i=>{if(d.has(i))return;d.set(i,r.Started);let o=a(i);if(o){let n=this.opts.es5?e.varKinds.var:e.varKinds.const;c=(0,t._)`${c}${n} ${i} = ${o};${this.opts._n}`}else if(o=s?.(i))c=(0,t._)`${c}${o}${this.opts._n}`;else throw new n(i);d.set(i,r.Completed)})}return c}}})),K=s((e=>{Object.defineProperty(e,`__esModule`,{value:!0}),e.or=e.and=e.not=e.CodeGen=e.operators=e.varKinds=e.ValueScopeName=e.ValueScope=e.Scope=e.Name=e.regexpCode=e.stringify=e.getProperty=e.nil=e.strConcat=e.str=e._=void 0;var t=ao(),n=oo(),r=ao();Object.defineProperty(e,`_`,{enumerable:!0,get:function(){return r._}}),Object.defineProperty(e,`str`,{enumerable:!0,get:function(){return r.str}}),Object.defineProperty(e,`strConcat`,{enumerable:!0,get:function(){return r.strConcat}}),Object.defineProperty(e,`nil`,{enumerable:!0,get:function(){return r.nil}}),Object.defineProperty(e,`getProperty`,{enumerable:!0,get:function(){return r.getProperty}}),Object.defineProperty(e,`stringify`,{enumerable:!0,get:function(){return r.stringify}}),Object.defineProperty(e,`regexpCode`,{enumerable:!0,get:function(){return r.regexpCode}}),Object.defineProperty(e,`Name`,{enumerable:!0,get:function(){return r.Name}});var i=oo();Object.defineProperty(e,`Scope`,{enumerable:!0,get:function(){return i.Scope}}),Object.defineProperty(e,`ValueScope`,{enumerable:!0,get:function(){return i.ValueScope}}),Object.defineProperty(e,`ValueScopeName`,{enumerable:!0,get:function(){return i.ValueScopeName}}),Object.defineProperty(e,`varKinds`,{enumerable:!0,get:function(){return i.varKinds}}),e.operators={GT:new t._Code(`>`),GTE:new t._Code(`>=`),LT:new t._Code(`<`),LTE:new t._Code(`<=`),EQ:new t._Code(`===`),NEQ:new t._Code(`!==`),NOT:new t._Code(`!`),OR:new t._Code(`||`),AND:new t._Code(`&&`),ADD:new t._Code(`+`)};var a=class{optimizeNodes(){return this}optimizeNames(e,t){return this}},o=class extends a{constructor(e,t,n){super(),this.varKind=e,this.name=t,this.rhs=n}render({es5:e,_n:t}){let r=e?n.varKinds.var:this.varKind,i=this.rhs===void 0?``:` = ${this.rhs}`;return`${r} ${this.name}${i};`+t}optimizeNames(e,t){if(e[this.name.str])return this.rhs&&=ne(this.rhs,e,t),this}get names(){return this.rhs instanceof t._CodeOrName?this.rhs.names:{}}},s=class extends a{constructor(e,t,n){super(),this.lhs=e,this.rhs=t,this.sideEffects=n}render({_n:e}){return`${this.lhs} = ${this.rhs};`+e}optimizeNames(e,n){if(!(this.lhs instanceof t.Name&&!e[this.lhs.str]&&!this.sideEffects))return this.rhs=ne(this.rhs,e,n),this}get names(){return E(this.lhs instanceof t.Name?{}:{...this.lhs.names},this.rhs)}},c=class extends s{constructor(e,t,n,r){super(e,n,r),this.op=t}render({_n:e}){return`${this.lhs} ${this.op}= ${this.rhs};`+e}},l=class extends a{constructor(e){super(),this.label=e,this.names={}}render({_n:e}){return`${this.label}:`+e}},u=class extends a{constructor(e){super(),this.label=e,this.names={}}render({_n:e}){return`break${this.label?` ${this.label}`:``};`+e}},d=class extends a{constructor(e){super(),this.error=e}render({_n:e}){return`throw ${this.error};`+e}get names(){return this.error.names}},f=class extends a{constructor(e){super(),this.code=e}render({_n:e}){return`${this.code};`+e}optimizeNodes(){return`${this.code}`?this:void 0}optimizeNames(e,t){return this.code=ne(this.code,e,t),this}get names(){return this.code instanceof t._CodeOrName?this.code.names:{}}},p=class extends a{constructor(e=[]){super(),this.nodes=e}render(e){return this.nodes.reduce((t,n)=>t+n.render(e),``)}optimizeNodes(){let{nodes:e}=this,t=e.length;for(;t--;){let n=e[t].optimizeNodes();Array.isArray(n)?e.splice(t,1,...n):n?e[t]=n:e.splice(t,1)}return e.length>0?this:void 0}optimizeNames(e,t){let{nodes:n}=this,r=n.length;for(;r--;){let i=n[r];i.optimizeNames(e,t)||(re(e,i.names),n.splice(r,1))}return n.length>0?this:void 0}get names(){return this.nodes.reduce((e,t)=>te(e,t.names),{})}},m=class extends p{render(e){return`{`+e._n+super.render(e)+`}`+e._n}},h=class extends p{},g=class extends m{};g.kind=`else`;var _=class e extends m{constructor(e,t){super(t),this.condition=e}render(e){let t=`if(${this.condition})`+super.render(e);return this.else&&(t+=`else `+this.else.render(e)),t}optimizeNodes(){super.optimizeNodes();let t=this.condition;if(t===!0)return this.nodes;let n=this.else;if(n){let e=n.optimizeNodes();n=this.else=Array.isArray(e)?new g(e):e}if(n)return t===!1?n instanceof e?n:n.nodes:this.nodes.length?this:new e(ie(t),n instanceof e?[n]:n.nodes);if(!(t===!1||!this.nodes.length))return this}optimizeNames(e,t){if(this.else=this.else?.optimizeNames(e,t),super.optimizeNames(e,t)||this.else)return this.condition=ne(this.condition,e,t),this}get names(){let e=super.names;return E(e,this.condition),this.else&&te(e,this.else.names),e}};_.kind=`if`;var v=class extends m{};v.kind=`for`;var y=class extends v{constructor(e){super(),this.iteration=e}render(e){return`for(${this.iteration})`+super.render(e)}optimizeNames(e,t){if(super.optimizeNames(e,t))return this.iteration=ne(this.iteration,e,t),this}get names(){return te(super.names,this.iteration.names)}},b=class extends v{constructor(e,t,n,r){super(),this.varKind=e,this.name=t,this.from=n,this.to=r}render(e){let t=e.es5?n.varKinds.var:this.varKind,{name:r,from:i,to:a}=this;return`for(${t} ${r}=${i}; ${r}<${a}; ${r}++)`+super.render(e)}get names(){return E(E(super.names,this.from),this.to)}},x=class extends v{constructor(e,t,n,r){super(),this.loop=e,this.varKind=t,this.name=n,this.iterable=r}render(e){return`for(${this.varKind} ${this.name} ${this.loop} ${this.iterable})`+super.render(e)}optimizeNames(e,t){if(super.optimizeNames(e,t))return this.iterable=ne(this.iterable,e,t),this}get names(){return te(super.names,this.iterable.names)}},S=class extends m{constructor(e,t,n){super(),this.name=e,this.args=t,this.async=n}render(e){return`${this.async?`async `:``}function ${this.name}(${this.args})`+super.render(e)}};S.kind=`func`;var C=class extends p{render(e){return`return `+super.render(e)}};C.kind=`return`;var w=class extends m{render(e){let t=`try`+super.render(e);return this.catch&&(t+=this.catch.render(e)),this.finally&&(t+=this.finally.render(e)),t}optimizeNodes(){var e,t;return super.optimizeNodes(),(e=this.catch)==null||e.optimizeNodes(),(t=this.finally)==null||t.optimizeNodes(),this}optimizeNames(e,t){var n,r;return super.optimizeNames(e,t),(n=this.catch)==null||n.optimizeNames(e,t),(r=this.finally)==null||r.optimizeNames(e,t),this}get names(){let e=super.names;return this.catch&&te(e,this.catch.names),this.finally&&te(e,this.finally.names),e}},T=class extends m{constructor(e){super(),this.error=e}render(e){return`catch(${this.error})`+super.render(e)}};T.kind=`catch`;var ee=class extends m{render(e){return`finally`+super.render(e)}};ee.kind=`finally`,e.CodeGen=class{constructor(e,t={}){this._values={},this._blockStarts=[],this._constants={},this.opts={...t,_n:t.lines?`
`:``},this._extScope=e,this._scope=new n.Scope({parent:e}),this._nodes=[new h]}toString(){return this._root.render(this.opts)}name(e){return this._scope.name(e)}scopeName(e){return this._extScope.name(e)}scopeValue(e,t){let n=this._extScope.value(e,t);return(this._values[n.prefix]||(this._values[n.prefix]=new Set)).add(n),n}getScopeValue(e,t){return this._extScope.getValue(e,t)}scopeRefs(e){return this._extScope.scopeRefs(e,this._values)}scopeCode(){return this._extScope.scopeCode(this._values)}_def(e,t,n,r){let i=this._scope.toName(t);return n!==void 0&&r&&(this._constants[i.str]=n),this._leafNode(new o(e,i,n)),i}const(e,t,r){return this._def(n.varKinds.const,e,t,r)}let(e,t,r){return this._def(n.varKinds.let,e,t,r)}var(e,t,r){return this._def(n.varKinds.var,e,t,r)}assign(e,t,n){return this._leafNode(new s(e,t,n))}add(t,n){return this._leafNode(new c(t,e.operators.ADD,n))}code(e){return typeof e==`function`?e():e!==t.nil&&this._leafNode(new f(e)),this}object(...e){let n=[`{`];for(let[r,i]of e)n.length>1&&n.push(`,`),n.push(r),(r!==i||this.opts.es5)&&(n.push(`:`),(0,t.addCodeArg)(n,i));return n.push(`}`),new t._Code(n)}if(e,t,n){if(this._blockNode(new _(e)),t&&n)this.code(t).else().code(n).endIf();else if(t)this.code(t).endIf();else if(n)throw Error(`CodeGen: "else" body without "then" body`);return this}elseIf(e){return this._elseNode(new _(e))}else(){return this._elseNode(new g)}endIf(){return this._endBlockNode(_,g)}_for(e,t){return this._blockNode(e),t&&this.code(t).endFor(),this}for(e,t){return this._for(new y(e),t)}forRange(e,t,r,i,a=this.opts.es5?n.varKinds.var:n.varKinds.let){let o=this._scope.toName(e);return this._for(new b(a,o,t,r),()=>i(o))}forOf(e,r,i,a=n.varKinds.const){let o=this._scope.toName(e);if(this.opts.es5){let e=r instanceof t.Name?r:this.var(`_arr`,r);return this.forRange(`_i`,0,(0,t._)`${e}.length`,n=>{this.var(o,(0,t._)`${e}[${n}]`),i(o)})}return this._for(new x(`of`,a,o,r),()=>i(o))}forIn(e,r,i,a=this.opts.es5?n.varKinds.var:n.varKinds.const){if(this.opts.ownProperties)return this.forOf(e,(0,t._)`Object.keys(${r})`,i);let o=this._scope.toName(e);return this._for(new x(`in`,a,o,r),()=>i(o))}endFor(){return this._endBlockNode(v)}label(e){return this._leafNode(new l(e))}break(e){return this._leafNode(new u(e))}return(e){let t=new C;if(this._blockNode(t),this.code(e),t.nodes.length!==1)throw Error(`CodeGen: "return" should have one node`);return this._endBlockNode(C)}try(e,t,n){if(!t&&!n)throw Error(`CodeGen: "try" without "catch" and "finally"`);let r=new w;if(this._blockNode(r),this.code(e),t){let e=this.name(`e`);this._currNode=r.catch=new T(e),t(e)}return n&&(this._currNode=r.finally=new ee,this.code(n)),this._endBlockNode(T,ee)}throw(e){return this._leafNode(new d(e))}block(e,t){return this._blockStarts.push(this._nodes.length),e&&this.code(e).endBlock(t),this}endBlock(e){let t=this._blockStarts.pop();if(t===void 0)throw Error(`CodeGen: not in self-balancing block`);let n=this._nodes.length-t;if(n<0||e!==void 0&&n!==e)throw Error(`CodeGen: wrong number of nodes: ${n} vs ${e} expected`);return this._nodes.length=t,this}func(e,n=t.nil,r,i){return this._blockNode(new S(e,n,r)),i&&this.code(i).endFunc(),this}endFunc(){return this._endBlockNode(S)}optimize(e=1){for(;e-- >0;)this._root.optimizeNodes(),this._root.optimizeNames(this._root.names,this._constants)}_leafNode(e){return this._currNode.nodes.push(e),this}_blockNode(e){this._currNode.nodes.push(e),this._nodes.push(e)}_endBlockNode(e,t){let n=this._currNode;if(n instanceof e||t&&n instanceof t)return this._nodes.pop(),this;throw Error(`CodeGen: not in block "${t?`${e.kind}/${t.kind}`:e.kind}"`)}_elseNode(e){let t=this._currNode;if(!(t instanceof _))throw Error(`CodeGen: "else" without "if"`);return this._currNode=t.else=e,this}get _root(){return this._nodes[0]}get _currNode(){let e=this._nodes;return e[e.length-1]}set _currNode(e){let t=this._nodes;t[t.length-1]=e}};function te(e,t){for(let n in t)e[n]=(e[n]||0)+(t[n]||0);return e}function E(e,n){return n instanceof t._CodeOrName?te(e,n.names):e}function ne(e,n,r){if(e instanceof t.Name)return i(e);if(!a(e))return e;return new t._Code(e._items.reduce((e,n)=>(n instanceof t.Name&&(n=i(n)),n instanceof t._Code?e.push(...n._items):e.push(n),e),[]));function i(e){let t=r[e.str];return t===void 0||n[e.str]!==1?e:(delete n[e.str],t)}function a(e){return e instanceof t._Code&&e._items.some(e=>e instanceof t.Name&&n[e.str]===1&&r[e.str]!==void 0)}}function re(e,t){for(let n in t)e[n]=(e[n]||0)-(t[n]||0)}function ie(e){return typeof e==`boolean`||typeof e==`number`||e===null?!e:(0,t._)`!${ce(e)}`}e.not=ie;var D=se(e.operators.AND);function O(...e){return e.reduce(D)}e.and=O;var ae=se(e.operators.OR);function oe(...e){return e.reduce(ae)}e.or=oe;function se(e){return(n,r)=>n===t.nil?r:r===t.nil?n:(0,t._)`${ce(n)} ${e} ${ce(r)}`}function ce(e){return e instanceof t.Name?e:(0,t._)`(${e})`}})),q=s((e=>{Object.defineProperty(e,`__esModule`,{value:!0}),e.checkStrictMode=e.getErrorPath=e.Type=e.useFunc=e.setEvaluated=e.evaluatedPropsToName=e.mergeEvaluated=e.eachItem=e.unescapeJsonPointer=e.escapeJsonPointer=e.escapeFragment=e.unescapeFragment=e.schemaRefOrVal=e.schemaHasRulesButRef=e.schemaHasRules=e.checkUnknownRules=e.alwaysValidSchema=e.toHash=void 0;var t=K(),n=ao();function r(e){let t={};for(let n of e)t[n]=!0;return t}e.toHash=r;function i(e,t){return typeof t==`boolean`?t:Object.keys(t).length===0?!0:(a(e,t),!o(t,e.self.RULES.all))}e.alwaysValidSchema=i;function a(e,t=e.schema){let{opts:n,self:r}=e;if(!n.strictSchema||typeof t==`boolean`)return;let i=r.RULES.keywords;for(let n in t)i[n]||x(e,`unknown keyword: "${n}"`)}e.checkUnknownRules=a;function o(e,t){if(typeof e==`boolean`)return!e;for(let n in e)if(t[n])return!0;return!1}e.schemaHasRules=o;function s(e,t){if(typeof e==`boolean`)return!e;for(let n in e)if(n!==`$ref`&&t.all[n])return!0;return!1}e.schemaHasRulesButRef=s;function c({topSchemaRef:e,schemaPath:n},r,i,a){if(!a){if(typeof r==`number`||typeof r==`boolean`)return r;if(typeof r==`string`)return(0,t._)`${r}`}return(0,t._)`${e}${n}${(0,t.getProperty)(i)}`}e.schemaRefOrVal=c;function l(e){return f(decodeURIComponent(e))}e.unescapeFragment=l;function u(e){return encodeURIComponent(d(e))}e.escapeFragment=u;function d(e){return typeof e==`number`?`${e}`:e.replace(/~/g,`~0`).replace(/\//g,`~1`)}e.escapeJsonPointer=d;function f(e){return e.replace(/~1/g,`/`).replace(/~0/g,`~`)}e.unescapeJsonPointer=f;function p(e,t){if(Array.isArray(e))for(let n of e)t(n);else t(e)}e.eachItem=p;function m({mergeNames:e,mergeToName:n,mergeValues:r,resultToName:i}){return(a,o,s,c)=>{let l=s===void 0?o:s instanceof t.Name?(o instanceof t.Name?e(a,o,s):n(a,o,s),s):o instanceof t.Name?(n(a,s,o),o):r(o,s);return c===t.Name&&!(l instanceof t.Name)?i(a,l):l}}e.mergeEvaluated={props:m({mergeNames:(e,n,r)=>e.if((0,t._)`${r} !== true && ${n} !== undefined`,()=>{e.if((0,t._)`${n} === true`,()=>e.assign(r,!0),()=>e.assign(r,(0,t._)`${r} || {}`).code((0,t._)`Object.assign(${r}, ${n})`))}),mergeToName:(e,n,r)=>e.if((0,t._)`${r} !== true`,()=>{n===!0?e.assign(r,!0):(e.assign(r,(0,t._)`${r} || {}`),g(e,r,n))}),mergeValues:(e,t)=>e===!0?!0:{...e,...t},resultToName:h}),items:m({mergeNames:(e,n,r)=>e.if((0,t._)`${r} !== true && ${n} !== undefined`,()=>e.assign(r,(0,t._)`${n} === true ? true : ${r} > ${n} ? ${r} : ${n}`)),mergeToName:(e,n,r)=>e.if((0,t._)`${r} !== true`,()=>e.assign(r,n===!0?!0:(0,t._)`${r} > ${n} ? ${r} : ${n}`)),mergeValues:(e,t)=>e===!0?!0:Math.max(e,t),resultToName:(e,t)=>e.var(`items`,t)})};function h(e,n){if(n===!0)return e.var(`props`,!0);let r=e.var(`props`,(0,t._)`{}`);return n!==void 0&&g(e,r,n),r}e.evaluatedPropsToName=h;function g(e,n,r){Object.keys(r).forEach(r=>e.assign((0,t._)`${n}${(0,t.getProperty)(r)}`,!0))}e.setEvaluated=g;var _={};function v(e,t){return e.scopeValue(`func`,{ref:t,code:_[t.code]||(_[t.code]=new n._Code(t.code))})}e.useFunc=v;var y;(function(e){e[e.Num=0]=`Num`,e[e.Str=1]=`Str`})(y||(e.Type=y={}));function b(e,n,r){if(e instanceof t.Name){let i=n===y.Num;return r?i?(0,t._)`"[" + ${e} + "]"`:(0,t._)`"['" + ${e} + "']"`:i?(0,t._)`"/" + ${e}`:(0,t._)`"/" + ${e}.replace(/~/g, "~0").replace(/\\//g, "~1")`}return r?(0,t.getProperty)(e).toString():`/`+d(e)}e.getErrorPath=b;function x(e,t,n=e.opts.strictSchema){if(n){if(t=`strict mode: ${t}`,n===!0)throw Error(t);e.self.logger.warn(t)}}e.checkStrictMode=x})),so=s((e=>{Object.defineProperty(e,`__esModule`,{value:!0});var t=K();e.default={data:new t.Name(`data`),valCxt:new t.Name(`valCxt`),instancePath:new t.Name(`instancePath`),parentData:new t.Name(`parentData`),parentDataProperty:new t.Name(`parentDataProperty`),rootData:new t.Name(`rootData`),dynamicAnchors:new t.Name(`dynamicAnchors`),vErrors:new t.Name(`vErrors`),errors:new t.Name(`errors`),this:new t.Name(`this`),self:new t.Name(`self`),scope:new t.Name(`scope`),json:new t.Name(`json`),jsonPos:new t.Name(`jsonPos`),jsonLen:new t.Name(`jsonLen`),jsonPart:new t.Name(`jsonPart`)}})),co=s((e=>{Object.defineProperty(e,`__esModule`,{value:!0}),e.extendErrors=e.resetErrorsCount=e.reportExtraError=e.reportError=e.keyword$DataError=e.keywordError=void 0;var t=K(),n=q(),r=so();e.keywordError={message:({keyword:e})=>(0,t.str)`must pass "${e}" keyword validation`},e.keyword$DataError={message:({keyword:e,schemaType:n})=>n?(0,t.str)`"${e}" keyword must be ${n} ($data)`:(0,t.str)`"${e}" keyword is invalid ($data)`};function i(n,r=e.keywordError,i,a){let{it:o}=n,{gen:s,compositeRule:u,allErrors:f}=o,p=d(n,r,i);a??(u||f)?c(s,p):l(o,(0,t._)`[${p}]`)}e.reportError=i;function a(t,n=e.keywordError,i){let{it:a}=t,{gen:o,compositeRule:s,allErrors:u}=a;c(o,d(t,n,i)),s||u||l(a,r.default.vErrors)}e.reportExtraError=a;function o(e,n){e.assign(r.default.errors,n),e.if((0,t._)`${r.default.vErrors} !== null`,()=>e.if(n,()=>e.assign((0,t._)`${r.default.vErrors}.length`,n),()=>e.assign(r.default.vErrors,null)))}e.resetErrorsCount=o;function s({gen:e,keyword:n,schemaValue:i,data:a,errsCount:o,it:s}){if(o===void 0)throw Error(`ajv implementation error`);let c=e.name(`err`);e.forRange(`i`,o,r.default.errors,o=>{e.const(c,(0,t._)`${r.default.vErrors}[${o}]`),e.if((0,t._)`${c}.instancePath === undefined`,()=>e.assign((0,t._)`${c}.instancePath`,(0,t.strConcat)(r.default.instancePath,s.errorPath))),e.assign((0,t._)`${c}.schemaPath`,(0,t.str)`${s.errSchemaPath}/${n}`),s.opts.verbose&&(e.assign((0,t._)`${c}.schema`,i),e.assign((0,t._)`${c}.data`,a))})}e.extendErrors=s;function c(e,n){let i=e.const(`err`,n);e.if((0,t._)`${r.default.vErrors} === null`,()=>e.assign(r.default.vErrors,(0,t._)`[${i}]`),(0,t._)`${r.default.vErrors}.push(${i})`),e.code((0,t._)`${r.default.errors}++`)}function l(e,n){let{gen:r,validateName:i,schemaEnv:a}=e;a.$async?r.throw((0,t._)`new ${e.ValidationError}(${n})`):(r.assign((0,t._)`${i}.errors`,n),r.return(!1))}var u={keyword:new t.Name(`keyword`),schemaPath:new t.Name(`schemaPath`),params:new t.Name(`params`),propertyName:new t.Name(`propertyName`),message:new t.Name(`message`),schema:new t.Name(`schema`),parentSchema:new t.Name(`parentSchema`)};function d(e,n,r){let{createErrors:i}=e.it;return i===!1?(0,t._)`{}`:f(e,n,r)}function f(e,t,n={}){let{gen:r,it:i}=e,a=[p(i,n),m(e,n)];return h(e,t,a),r.object(...a)}function p({errorPath:e},{instancePath:i}){let a=i?(0,t.str)`${e}${(0,n.getErrorPath)(i,n.Type.Str)}`:e;return[r.default.instancePath,(0,t.strConcat)(r.default.instancePath,a)]}function m({keyword:e,it:{errSchemaPath:r}},{schemaPath:i,parentSchema:a}){let o=a?r:(0,t.str)`${r}/${e}`;return i&&(o=(0,t.str)`${o}${(0,n.getErrorPath)(i,n.Type.Str)}`),[u.schemaPath,o]}function h(e,{params:n,message:i},a){let{keyword:o,data:s,schemaValue:c,it:l}=e,{opts:d,propertyName:f,topSchemaRef:p,schemaPath:m}=l;a.push([u.keyword,o],[u.params,typeof n==`function`?n(e):n||(0,t._)`{}`]),d.messages&&a.push([u.message,typeof i==`function`?i(e):i]),d.verbose&&a.push([u.schema,c],[u.parentSchema,(0,t._)`${p}${m}`],[r.default.data,s]),f&&a.push([u.propertyName,f])}})),lo=s((e=>{Object.defineProperty(e,`__esModule`,{value:!0}),e.boolOrEmptySchema=e.topBoolOrEmptySchema=void 0;var t=co(),n=K(),r=so(),i={message:`boolean schema is false`};function a(e){let{gen:t,schema:i,validateName:a}=e;i===!1?s(e,!1):typeof i==`object`&&i.$async===!0?t.return(r.default.data):(t.assign((0,n._)`${a}.errors`,null),t.return(!0))}e.topBoolOrEmptySchema=a;function o(e,t){let{gen:n,schema:r}=e;r===!1?(n.var(t,!1),s(e)):n.var(t,!0)}e.boolOrEmptySchema=o;function s(e,n){let{gen:r,data:a}=e,o={gen:r,keyword:`false schema`,data:a,schema:!1,schemaCode:!1,schemaValue:!1,params:{},it:e};(0,t.reportError)(o,i,void 0,n)}})),uo=s((e=>{Object.defineProperty(e,`__esModule`,{value:!0}),e.getRules=e.isJSONType=void 0;var t=new Set([`string`,`number`,`integer`,`boolean`,`null`,`object`,`array`]);function n(e){return typeof e==`string`&&t.has(e)}e.isJSONType=n;function r(){let e={number:{type:`number`,rules:[]},string:{type:`string`,rules:[]},array:{type:`array`,rules:[]},object:{type:`object`,rules:[]}};return{types:{...e,integer:!0,boolean:!0,null:!0},rules:[{rules:[]},e.number,e.string,e.array,e.object],post:{rules:[]},all:{},keywords:{}}}e.getRules=r})),fo=s((e=>{Object.defineProperty(e,`__esModule`,{value:!0}),e.shouldUseRule=e.shouldUseGroup=e.schemaHasRulesForType=void 0;function t({schema:e,self:t},r){let i=t.RULES.types[r];return i&&i!==!0&&n(e,i)}e.schemaHasRulesForType=t;function n(e,t){return t.rules.some(t=>r(e,t))}e.shouldUseGroup=n;function r(e,t){return e[t.keyword]!==void 0||t.definition.implements?.some(t=>e[t]!==void 0)}e.shouldUseRule=r})),po=s((e=>{Object.defineProperty(e,`__esModule`,{value:!0}),e.reportTypeError=e.checkDataTypes=e.checkDataType=e.coerceAndCheckDataType=e.getJSONTypes=e.getSchemaTypes=e.DataType=void 0;var t=uo(),n=fo(),r=co(),i=K(),a=q(),o;(function(e){e[e.Correct=0]=`Correct`,e[e.Wrong=1]=`Wrong`})(o||(e.DataType=o={}));function s(e){let t=c(e.type);if(t.includes(`null`)){if(e.nullable===!1)throw Error(`type: null contradicts nullable: false`)}else{if(!t.length&&e.nullable!==void 0)throw Error(`"nullable" cannot be used without "type"`);e.nullable===!0&&t.push(`null`)}return t}e.getSchemaTypes=s;function c(e){let n=Array.isArray(e)?e:e?[e]:[];if(n.every(t.isJSONType))return n;throw Error(`type must be JSONType or JSONType[]: `+n.join(`,`))}e.getJSONTypes=c;function l(e,t){let{gen:r,data:i,opts:a}=e,s=d(t,a.coerceTypes),c=t.length>0&&!(s.length===0&&t.length===1&&(0,n.schemaHasRulesForType)(e,t[0]));if(c){let n=h(t,i,a.strictNumbers,o.Wrong);r.if(n,()=>{s.length?f(e,t,s):_(e)})}return c}e.coerceAndCheckDataType=l;var u=new Set([`string`,`number`,`integer`,`boolean`,`null`]);function d(e,t){return t?e.filter(e=>u.has(e)||t===`array`&&e===`array`):[]}function f(e,t,n){let{gen:r,data:a,opts:o}=e,s=r.let(`dataType`,(0,i._)`typeof ${a}`),c=r.let(`coerced`,(0,i._)`undefined`);o.coerceTypes===`array`&&r.if((0,i._)`${s} == 'object' && Array.isArray(${a}) && ${a}.length == 1`,()=>r.assign(a,(0,i._)`${a}[0]`).assign(s,(0,i._)`typeof ${a}`).if(h(t,a,o.strictNumbers),()=>r.assign(c,a))),r.if((0,i._)`${c} !== undefined`);for(let e of n)(u.has(e)||e===`array`&&o.coerceTypes===`array`)&&l(e);r.else(),_(e),r.endIf(),r.if((0,i._)`${c} !== undefined`,()=>{r.assign(a,c),p(e,c)});function l(e){switch(e){case`string`:r.elseIf((0,i._)`${s} == "number" || ${s} == "boolean"`).assign(c,(0,i._)`"" + ${a}`).elseIf((0,i._)`${a} === null`).assign(c,(0,i._)`""`);return;case`number`:r.elseIf((0,i._)`${s} == "boolean" || ${a} === null
              || (${s} == "string" && ${a} && ${a} == +${a})`).assign(c,(0,i._)`+${a}`);return;case`integer`:r.elseIf((0,i._)`${s} === "boolean" || ${a} === null
              || (${s} === "string" && ${a} && ${a} == +${a} && !(${a} % 1))`).assign(c,(0,i._)`+${a}`);return;case`boolean`:r.elseIf((0,i._)`${a} === "false" || ${a} === 0 || ${a} === null`).assign(c,!1).elseIf((0,i._)`${a} === "true" || ${a} === 1`).assign(c,!0);return;case`null`:r.elseIf((0,i._)`${a} === "" || ${a} === 0 || ${a} === false`),r.assign(c,null);return;case`array`:r.elseIf((0,i._)`${s} === "string" || ${s} === "number"
              || ${s} === "boolean" || ${a} === null`).assign(c,(0,i._)`[${a}]`)}}}function p({gen:e,parentData:t,parentDataProperty:n},r){e.if((0,i._)`${t} !== undefined`,()=>e.assign((0,i._)`${t}[${n}]`,r))}function m(e,t,n,r=o.Correct){let a=r===o.Correct?i.operators.EQ:i.operators.NEQ,s;switch(e){case`null`:return(0,i._)`${t} ${a} null`;case`array`:s=(0,i._)`Array.isArray(${t})`;break;case`object`:s=(0,i._)`${t} && typeof ${t} == "object" && !Array.isArray(${t})`;break;case`integer`:s=c((0,i._)`!(${t} % 1) && !isNaN(${t})`);break;case`number`:s=c();break;default:return(0,i._)`typeof ${t} ${a} ${e}`}return r===o.Correct?s:(0,i.not)(s);function c(e=i.nil){return(0,i.and)((0,i._)`typeof ${t} == "number"`,e,n?(0,i._)`isFinite(${t})`:i.nil)}}e.checkDataType=m;function h(e,t,n,r){if(e.length===1)return m(e[0],t,n,r);let o,s=(0,a.toHash)(e);if(s.array&&s.object){let e=(0,i._)`typeof ${t} != "object"`;o=s.null?e:(0,i._)`!${t} || ${e}`,delete s.null,delete s.array,delete s.object}else o=i.nil;s.number&&delete s.integer;for(let e in s)o=(0,i.and)(o,m(e,t,n,r));return o}e.checkDataTypes=h;var g={message:({schema:e})=>`must be ${e}`,params:({schema:e,schemaValue:t})=>typeof e==`string`?(0,i._)`{type: ${e}}`:(0,i._)`{type: ${t}}`};function _(e){let t=v(e);(0,r.reportError)(t,g)}e.reportTypeError=_;function v(e){let{gen:t,data:n,schema:r}=e,i=(0,a.schemaRefOrVal)(e,r,`type`);return{gen:t,keyword:`type`,data:n,schema:r.type,schemaCode:i,schemaValue:i,parentSchema:r,params:{},it:e}}})),mo=s((e=>{Object.defineProperty(e,`__esModule`,{value:!0}),e.assignDefaults=void 0;var t=K(),n=q();function r(e,t){let{properties:n,items:r}=e.schema;if(t===`object`&&n)for(let t in n)i(e,t,n[t].default);else t===`array`&&Array.isArray(r)&&r.forEach((t,n)=>i(e,n,t.default))}e.assignDefaults=r;function i(e,r,i){let{gen:a,compositeRule:o,data:s,opts:c}=e;if(i===void 0)return;let l=(0,t._)`${s}${(0,t.getProperty)(r)}`;if(o){(0,n.checkStrictMode)(e,`default is ignored for: ${l}`);return}let u=(0,t._)`${l} === undefined`;c.useDefaults===`empty`&&(u=(0,t._)`${u} || ${l} === null || ${l} === ""`),a.if(u,(0,t._)`${l} = ${(0,t.stringify)(i)}`)}})),ho=s((e=>{Object.defineProperty(e,`__esModule`,{value:!0}),e.validateUnion=e.validateArray=e.usePattern=e.callValidateCode=e.schemaProperties=e.allSchemaProperties=e.noPropertyInData=e.propertyInData=e.isOwnProperty=e.hasPropFunc=e.reportMissingProp=e.checkMissingProp=e.checkReportMissingProp=void 0;var t=K(),n=q(),r=so(),i=q();function a(e,n){let{gen:r,data:i,it:a}=e;r.if(d(r,i,n,a.opts.ownProperties),()=>{e.setParams({missingProperty:(0,t._)`${n}`},!0),e.error()})}e.checkReportMissingProp=a;function o({gen:e,data:n,it:{opts:r}},i,a){return(0,t.or)(...i.map(i=>(0,t.and)(d(e,n,i,r.ownProperties),(0,t._)`${a} = ${i}`)))}e.checkMissingProp=o;function s(e,t){e.setParams({missingProperty:t},!0),e.error()}e.reportMissingProp=s;function c(e){return e.scopeValue(`func`,{ref:Object.prototype.hasOwnProperty,code:(0,t._)`Object.prototype.hasOwnProperty`})}e.hasPropFunc=c;function l(e,n,r){return(0,t._)`${c(e)}.call(${n}, ${r})`}e.isOwnProperty=l;function u(e,n,r,i){let a=(0,t._)`${n}${(0,t.getProperty)(r)} !== undefined`;return i?(0,t._)`${a} && ${l(e,n,r)}`:a}e.propertyInData=u;function d(e,n,r,i){let a=(0,t._)`${n}${(0,t.getProperty)(r)} === undefined`;return i?(0,t.or)(a,(0,t.not)(l(e,n,r))):a}e.noPropertyInData=d;function f(e){return e?Object.keys(e).filter(e=>e!==`__proto__`):[]}e.allSchemaProperties=f;function p(e,t){return f(t).filter(r=>!(0,n.alwaysValidSchema)(e,t[r]))}e.schemaProperties=p;function m({schemaCode:e,data:n,it:{gen:i,topSchemaRef:a,schemaPath:o,errorPath:s},it:c},l,u,d){let f=d?(0,t._)`${e}, ${n}, ${a}${o}`:n,p=[[r.default.instancePath,(0,t.strConcat)(r.default.instancePath,s)],[r.default.parentData,c.parentData],[r.default.parentDataProperty,c.parentDataProperty],[r.default.rootData,r.default.rootData]];c.opts.dynamicRef&&p.push([r.default.dynamicAnchors,r.default.dynamicAnchors]);let m=(0,t._)`${f}, ${i.object(...p)}`;return u===t.nil?(0,t._)`${l}(${m})`:(0,t._)`${l}.call(${u}, ${m})`}e.callValidateCode=m;var h=(0,t._)`new RegExp`;function g({gen:e,it:{opts:n}},r){let a=n.unicodeRegExp?`u`:``,{regExp:o}=n.code,s=o(r,a);return e.scopeValue(`pattern`,{key:s.toString(),ref:s,code:(0,t._)`${o.code===`new RegExp`?h:(0,i.useFunc)(e,o)}(${r}, ${a})`})}e.usePattern=g;function _(e){let{gen:r,data:i,keyword:a,it:o}=e,s=r.name(`valid`);if(o.allErrors){let e=r.let(`valid`,!0);return c(()=>r.assign(e,!1)),e}return r.var(s,!0),c(()=>r.break()),s;function c(o){let c=r.const(`len`,(0,t._)`${i}.length`);r.forRange(`i`,0,c,i=>{e.subschema({keyword:a,dataProp:i,dataPropType:n.Type.Num},s),r.if((0,t.not)(s),o)})}}e.validateArray=_;function v(e){let{gen:r,schema:i,keyword:a,it:o}=e;if(!Array.isArray(i))throw Error(`ajv implementation error`);if(i.some(e=>(0,n.alwaysValidSchema)(o,e))&&!o.opts.unevaluated)return;let s=r.let(`valid`,!1),c=r.name(`_valid`);r.block(()=>i.forEach((n,i)=>{let o=e.subschema({keyword:a,schemaProp:i,compositeRule:!0},c);r.assign(s,(0,t._)`${s} || ${c}`),e.mergeValidEvaluated(o,c)||r.if((0,t.not)(s))})),e.result(s,()=>e.reset(),()=>e.error(!0))}e.validateUnion=v})),go=s((e=>{Object.defineProperty(e,`__esModule`,{value:!0}),e.validateKeywordUsage=e.validSchemaType=e.funcKeywordCode=e.macroKeywordCode=void 0;var t=K(),n=so(),r=ho(),i=co();function a(e,n){let{gen:r,keyword:i,schema:a,parentSchema:o,it:s}=e,c=n.macro.call(s.self,a,o,s),l=u(r,i,c);s.opts.validateSchema!==!1&&s.self.validateSchema(c,!0);let d=r.name(`valid`);e.subschema({schema:c,schemaPath:t.nil,errSchemaPath:`${s.errSchemaPath}/${i}`,topSchemaRef:l,compositeRule:!0},d),e.pass(d,()=>e.error(!0))}e.macroKeywordCode=a;function o(e,i){let{gen:a,keyword:o,schema:d,parentSchema:f,$data:p,it:m}=e;l(m,i);let h=u(a,o,!p&&i.compile?i.compile.call(m.self,d,f,m):i.validate),g=a.let(`valid`);e.block$data(g,_),e.ok(i.valid??g);function _(){if(i.errors===!1)b(),i.modifying&&s(e),x(()=>e.error());else{let t=i.async?v():y();i.modifying&&s(e),x(()=>c(e,t))}}function v(){let e=a.let(`ruleErrs`,null);return a.try(()=>b((0,t._)`await `),n=>a.assign(g,!1).if((0,t._)`${n} instanceof ${m.ValidationError}`,()=>a.assign(e,(0,t._)`${n}.errors`),()=>a.throw(n))),e}function y(){let e=(0,t._)`${h}.errors`;return a.assign(e,null),b(t.nil),e}function b(o=i.async?(0,t._)`await `:t.nil){let s=m.opts.passContext?n.default.this:n.default.self,c=!(`compile`in i&&!p||i.schema===!1);a.assign(g,(0,t._)`${o}${(0,r.callValidateCode)(e,h,s,c)}`,i.modifying)}function x(e){a.if((0,t.not)(i.valid??g),e)}}e.funcKeywordCode=o;function s(e){let{gen:n,data:r,it:i}=e;n.if(i.parentData,()=>n.assign(r,(0,t._)`${i.parentData}[${i.parentDataProperty}]`))}function c(e,r){let{gen:a}=e;a.if((0,t._)`Array.isArray(${r})`,()=>{a.assign(n.default.vErrors,(0,t._)`${n.default.vErrors} === null ? ${r} : ${n.default.vErrors}.concat(${r})`).assign(n.default.errors,(0,t._)`${n.default.vErrors}.length`),(0,i.extendErrors)(e)},()=>e.error())}function l({schemaEnv:e},t){if(t.async&&!e.$async)throw Error(`async keyword in sync schema`)}function u(e,n,r){if(r===void 0)throw Error(`keyword "${n}" failed to compile`);return e.scopeValue(`keyword`,typeof r==`function`?{ref:r}:{ref:r,code:(0,t.stringify)(r)})}function d(e,t,n=!1){return!t.length||t.some(t=>t===`array`?Array.isArray(e):t===`object`?e&&typeof e==`object`&&!Array.isArray(e):typeof e==t||n&&e===void 0)}e.validSchemaType=d;function f({schema:e,opts:t,self:n,errSchemaPath:r},i,a){if(Array.isArray(i.keyword)?!i.keyword.includes(a):i.keyword!==a)throw Error(`ajv implementation error`);let o=i.dependencies;if(o?.some(t=>!Object.prototype.hasOwnProperty.call(e,t)))throw Error(`parent schema must have dependencies of ${a}: ${o.join(`,`)}`);if(i.validateSchema&&!i.validateSchema(e[a])){let e=`keyword "${a}" value is invalid at path "${r}": `+n.errorsText(i.validateSchema.errors);if(t.validateSchema===`log`)n.logger.error(e);else throw Error(e)}}e.validateKeywordUsage=f})),_o=s((e=>{Object.defineProperty(e,`__esModule`,{value:!0}),e.extendSubschemaMode=e.extendSubschemaData=e.getSubschema=void 0;var t=K(),n=q();function r(e,{keyword:r,schemaProp:i,schema:a,schemaPath:o,errSchemaPath:s,topSchemaRef:c}){if(r!==void 0&&a!==void 0)throw Error(`both "keyword" and "schema" passed, only one allowed`);if(r!==void 0){let a=e.schema[r];return i===void 0?{schema:a,schemaPath:(0,t._)`${e.schemaPath}${(0,t.getProperty)(r)}`,errSchemaPath:`${e.errSchemaPath}/${r}`}:{schema:a[i],schemaPath:(0,t._)`${e.schemaPath}${(0,t.getProperty)(r)}${(0,t.getProperty)(i)}`,errSchemaPath:`${e.errSchemaPath}/${r}/${(0,n.escapeFragment)(i)}`}}if(a!==void 0){if(o===void 0||s===void 0||c===void 0)throw Error(`"schemaPath", "errSchemaPath" and "topSchemaRef" are required with "schema"`);return{schema:a,schemaPath:o,topSchemaRef:c,errSchemaPath:s}}throw Error(`either "keyword" or "schema" must be passed`)}e.getSubschema=r;function i(e,r,{dataProp:i,dataPropType:a,data:o,dataTypes:s,propertyName:c}){if(o!==void 0&&i!==void 0)throw Error(`both "data" and "dataProp" passed, only one allowed`);let{gen:l}=r;if(i!==void 0){let{errorPath:o,dataPathArr:s,opts:c}=r;u(l.let(`data`,(0,t._)`${r.data}${(0,t.getProperty)(i)}`,!0)),e.errorPath=(0,t.str)`${o}${(0,n.getErrorPath)(i,a,c.jsPropertySyntax)}`,e.parentDataProperty=(0,t._)`${i}`,e.dataPathArr=[...s,e.parentDataProperty]}o!==void 0&&(u(o instanceof t.Name?o:l.let(`data`,o,!0)),c!==void 0&&(e.propertyName=c)),s&&(e.dataTypes=s);function u(t){e.data=t,e.dataLevel=r.dataLevel+1,e.dataTypes=[],r.definedProperties=new Set,e.parentData=r.data,e.dataNames=[...r.dataNames,t]}}e.extendSubschemaData=i;function a(e,{jtdDiscriminator:t,jtdMetadata:n,compositeRule:r,createErrors:i,allErrors:a}){r!==void 0&&(e.compositeRule=r),i!==void 0&&(e.createErrors=i),a!==void 0&&(e.allErrors=a),e.jtdDiscriminator=t,e.jtdMetadata=n}e.extendSubschemaMode=a})),vo=s(((e,t)=>{t.exports=function e(t,n){if(t===n)return!0;if(t&&n&&typeof t==`object`&&typeof n==`object`){if(t.constructor!==n.constructor)return!1;var r,i,a;if(Array.isArray(t)){if(r=t.length,r!=n.length)return!1;for(i=r;i--!==0;)if(!e(t[i],n[i]))return!1;return!0}if(t.constructor===RegExp)return t.source===n.source&&t.flags===n.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===n.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===n.toString();if(a=Object.keys(t),r=a.length,r!==Object.keys(n).length)return!1;for(i=r;i--!==0;)if(!Object.prototype.hasOwnProperty.call(n,a[i]))return!1;for(i=r;i--!==0;){var o=a[i];if(!e(t[o],n[o]))return!1}return!0}return t!==t&&n!==n}})),yo=s(((e,t)=>{var n=t.exports=function(e,t,n){typeof t==`function`&&(n=t,t={}),n=t.cb||n;var i=typeof n==`function`?n:n.pre||function(){},a=n.post||function(){};r(t,i,a,e,``,e)};n.keywords={additionalItems:!0,items:!0,contains:!0,additionalProperties:!0,propertyNames:!0,not:!0,if:!0,then:!0,else:!0},n.arrayKeywords={items:!0,allOf:!0,anyOf:!0,oneOf:!0},n.propsKeywords={$defs:!0,definitions:!0,properties:!0,patternProperties:!0,dependencies:!0},n.skipKeywords={default:!0,enum:!0,const:!0,required:!0,maximum:!0,minimum:!0,exclusiveMaximum:!0,exclusiveMinimum:!0,multipleOf:!0,maxLength:!0,minLength:!0,pattern:!0,format:!0,maxItems:!0,minItems:!0,uniqueItems:!0,maxProperties:!0,minProperties:!0};function r(e,t,a,o,s,c,l,u,d,f){if(o&&typeof o==`object`&&!Array.isArray(o)){for(var p in t(o,s,c,l,u,d,f),o){var m=o[p];if(Array.isArray(m)){if(p in n.arrayKeywords)for(var h=0;h<m.length;h++)r(e,t,a,m[h],s+`/`+p+`/`+h,c,s,p,o,h)}else if(p in n.propsKeywords){if(m&&typeof m==`object`)for(var g in m)r(e,t,a,m[g],s+`/`+p+`/`+i(g),c,s,p,o,g)}else (p in n.keywords||e.allKeys&&!(p in n.skipKeywords))&&r(e,t,a,m,s+`/`+p,c,s,p,o)}a(o,s,c,l,u,d,f)}}function i(e){return e.replace(/~/g,`~0`).replace(/\//g,`~1`)}})),bo=s((e=>{Object.defineProperty(e,`__esModule`,{value:!0}),e.getSchemaRefs=e.resolveUrl=e.normalizeId=e._getFullPath=e.getFullPath=e.inlineRef=void 0;var t=q(),n=vo(),r=yo(),i=new Set([`type`,`format`,`pattern`,`maxLength`,`minLength`,`maxProperties`,`minProperties`,`maxItems`,`minItems`,`maximum`,`minimum`,`uniqueItems`,`multipleOf`,`required`,`enum`,`const`]);function a(e,t=!0){return typeof e==`boolean`?!0:t===!0?!s(e):t?c(e)<=t:!1}e.inlineRef=a;var o=new Set([`$ref`,`$recursiveRef`,`$recursiveAnchor`,`$dynamicRef`,`$dynamicAnchor`]);function s(e){for(let t in e){if(o.has(t))return!0;let n=e[t];if(Array.isArray(n)&&n.some(s)||typeof n==`object`&&s(n))return!0}return!1}function c(e){let n=0;for(let r in e)if(r===`$ref`||(n++,!i.has(r)&&(typeof e[r]==`object`&&(0,t.eachItem)(e[r],e=>n+=c(e)),n===1/0)))return 1/0;return n}function l(e,t=``,n){return n!==!1&&(t=f(t)),u(e,e.parse(t))}e.getFullPath=l;function u(e,t){return e.serialize(t).split(`#`)[0]+`#`}e._getFullPath=u;var d=/#\/?$/;function f(e){return e?e.replace(d,``):``}e.normalizeId=f;function p(e,t,n){return n=f(n),e.resolve(t,n)}e.resolveUrl=p;var m=/^[a-z_][-a-z0-9._]*$/i;function h(e,t){if(typeof e==`boolean`)return{};let{schemaId:i,uriResolver:a}=this.opts,o=f(e[i]||t),s={"":o},c=l(a,o,!1),u={},d=new Set;return r(e,{allKeys:!0},(e,t,n,r)=>{if(r===void 0)return;let a=c+t,o=s[r];typeof e[i]==`string`&&(o=l.call(this,e[i])),g.call(this,e.$anchor),g.call(this,e.$dynamicAnchor),s[t]=o;function l(t){let n=this.opts.uriResolver.resolve;if(t=f(o?n(o,t):t),d.has(t))throw h(t);d.add(t);let r=this.refs[t];return typeof r==`string`&&(r=this.refs[r]),typeof r==`object`?p(e,r.schema,t):t!==f(a)&&(t[0]===`#`?(p(e,u[t],t),u[t]=e):this.refs[t]=a),t}function g(e){if(typeof e==`string`){if(!m.test(e))throw Error(`invalid anchor "${e}"`);l.call(this,`#${e}`)}}}),u;function p(e,t,r){if(t!==void 0&&!n(e,t))throw h(r)}function h(e){return Error(`reference "${e}" resolves to more than one schema`)}}e.getSchemaRefs=h})),xo=s((e=>{Object.defineProperty(e,`__esModule`,{value:!0}),e.getData=e.KeywordCxt=e.validateFunctionCode=void 0;var t=lo(),n=po(),r=fo(),i=po(),a=mo(),o=go(),s=_o(),c=K(),l=so(),u=bo(),d=q(),f=co();function p(e){if(S(e)&&(w(e),x(e))){_(e);return}m(e,()=>(0,t.topBoolOrEmptySchema)(e))}e.validateFunctionCode=p;function m({gen:e,validateName:t,schema:n,schemaEnv:r,opts:i},a){i.code.es5?e.func(t,(0,c._)`${l.default.data}, ${l.default.valCxt}`,r.$async,()=>{e.code((0,c._)`"use strict"; ${y(n,i)}`),g(e,i),e.code(a)}):e.func(t,(0,c._)`${l.default.data}, ${h(i)}`,r.$async,()=>e.code(y(n,i)).code(a))}function h(e){return(0,c._)`{${l.default.instancePath}="", ${l.default.parentData}, ${l.default.parentDataProperty}, ${l.default.rootData}=${l.default.data}${e.dynamicRef?(0,c._)`, ${l.default.dynamicAnchors}={}`:c.nil}}={}`}function g(e,t){e.if(l.default.valCxt,()=>{e.var(l.default.instancePath,(0,c._)`${l.default.valCxt}.${l.default.instancePath}`),e.var(l.default.parentData,(0,c._)`${l.default.valCxt}.${l.default.parentData}`),e.var(l.default.parentDataProperty,(0,c._)`${l.default.valCxt}.${l.default.parentDataProperty}`),e.var(l.default.rootData,(0,c._)`${l.default.valCxt}.${l.default.rootData}`),t.dynamicRef&&e.var(l.default.dynamicAnchors,(0,c._)`${l.default.valCxt}.${l.default.dynamicAnchors}`)},()=>{e.var(l.default.instancePath,(0,c._)`""`),e.var(l.default.parentData,(0,c._)`undefined`),e.var(l.default.parentDataProperty,(0,c._)`undefined`),e.var(l.default.rootData,l.default.data),t.dynamicRef&&e.var(l.default.dynamicAnchors,(0,c._)`{}`)})}function _(e){let{schema:t,opts:n,gen:r}=e;m(e,()=>{n.$comment&&t.$comment&&re(e),te(e),r.let(l.default.vErrors,null),r.let(l.default.errors,0),n.unevaluated&&v(e),T(e),ie(e)})}function v(e){let{gen:t,validateName:n}=e;e.evaluated=t.const(`evaluated`,(0,c._)`${n}.evaluated`),t.if((0,c._)`${e.evaluated}.dynamicProps`,()=>t.assign((0,c._)`${e.evaluated}.props`,(0,c._)`undefined`)),t.if((0,c._)`${e.evaluated}.dynamicItems`,()=>t.assign((0,c._)`${e.evaluated}.items`,(0,c._)`undefined`))}function y(e,t){let n=typeof e==`object`&&e[t.schemaId];return n&&(t.code.source||t.code.process)?(0,c._)`/*# sourceURL=${n} */`:c.nil}function b(e,n){if(S(e)&&(w(e),x(e))){C(e,n);return}(0,t.boolOrEmptySchema)(e,n)}function x({schema:e,self:t}){if(typeof e==`boolean`)return!e;for(let n in e)if(t.RULES.all[n])return!0;return!1}function S(e){return typeof e.schema!=`boolean`}function C(e,t){let{schema:n,gen:r,opts:i}=e;i.$comment&&n.$comment&&re(e),E(e),ne(e);let a=r.const(`_errs`,l.default.errors);T(e,a),r.var(t,(0,c._)`${a} === ${l.default.errors}`)}function w(e){(0,d.checkUnknownRules)(e),ee(e)}function T(e,t){if(e.opts.jtd)return O(e,[],!1,t);let r=(0,n.getSchemaTypes)(e.schema);O(e,r,!(0,n.coerceAndCheckDataType)(e,r),t)}function ee(e){let{schema:t,errSchemaPath:n,opts:r,self:i}=e;t.$ref&&r.ignoreKeywordsWithRef&&(0,d.schemaHasRulesButRef)(t,i.RULES)&&i.logger.warn(`$ref: keywords ignored in schema at path "${n}"`)}function te(e){let{schema:t,opts:n}=e;t.default!==void 0&&n.useDefaults&&n.strictSchema&&(0,d.checkStrictMode)(e,`default is ignored in the schema root`)}function E(e){let t=e.schema[e.opts.schemaId];t&&(e.baseId=(0,u.resolveUrl)(e.opts.uriResolver,e.baseId,t))}function ne(e){if(e.schema.$async&&!e.schemaEnv.$async)throw Error(`async schema in sync schema`)}function re({gen:e,schemaEnv:t,schema:n,errSchemaPath:r,opts:i}){let a=n.$comment;if(i.$comment===!0)e.code((0,c._)`${l.default.self}.logger.log(${a})`);else if(typeof i.$comment==`function`){let n=(0,c.str)`${r}/$comment`,i=e.scopeValue(`root`,{ref:t.root});e.code((0,c._)`${l.default.self}.opts.$comment(${a}, ${n}, ${i}.schema)`)}}function ie(e){let{gen:t,schemaEnv:n,validateName:r,ValidationError:i,opts:a}=e;n.$async?t.if((0,c._)`${l.default.errors} === 0`,()=>t.return(l.default.data),()=>t.throw((0,c._)`new ${i}(${l.default.vErrors})`)):(t.assign((0,c._)`${r}.errors`,l.default.vErrors),a.unevaluated&&D(e),t.return((0,c._)`${l.default.errors} === 0`))}function D({gen:e,evaluated:t,props:n,items:r}){n instanceof c.Name&&e.assign((0,c._)`${t}.props`,n),r instanceof c.Name&&e.assign((0,c._)`${t}.items`,r)}function O(e,t,n,a){let{gen:o,schema:s,data:u,allErrors:f,opts:p,self:m}=e,{RULES:h}=m;if(s.$ref&&(p.ignoreKeywordsWithRef||!(0,d.schemaHasRulesButRef)(s,h))){o.block(()=>me(e,`$ref`,h.all.$ref.definition));return}p.jtd||oe(e,t),o.block(()=>{for(let e of h.rules)g(e);g(h.post)});function g(d){(0,r.shouldUseGroup)(s,d)&&(d.type?(o.if((0,i.checkDataType)(d.type,u,p.strictNumbers)),ae(e,d),t.length===1&&t[0]===d.type&&n&&(o.else(),(0,i.reportTypeError)(e)),o.endIf()):ae(e,d),f||o.if((0,c._)`${l.default.errors} === ${a||0}`))}}function ae(e,t){let{gen:n,schema:i,opts:{useDefaults:o}}=e;o&&(0,a.assignDefaults)(e,t.type),n.block(()=>{for(let n of t.rules)(0,r.shouldUseRule)(i,n)&&me(e,n.keyword,n.definition,t.type)})}function oe(e,t){e.schemaEnv.meta||!e.opts.strictTypes||(se(e,t),e.opts.allowUnionTypes||ce(e,t),le(e,e.dataTypes))}function se(e,t){if(t.length){if(!e.dataTypes.length){e.dataTypes=t;return}t.forEach(t=>{de(e.dataTypes,t)||fe(e,`type "${t}" not allowed by context "${e.dataTypes.join(`,`)}"`)}),k(e,t)}}function ce(e,t){t.length>1&&!(t.length===2&&t.includes(`null`))&&fe(e,`use allowUnionTypes to allow union type keyword`)}function le(e,t){let n=e.self.RULES.all;for(let i in n){let a=n[i];if(typeof a==`object`&&(0,r.shouldUseRule)(e.schema,a)){let{type:n}=a.definition;n.length&&!n.some(e=>ue(t,e))&&fe(e,`missing type "${n.join(`,`)}" for keyword "${i}"`)}}}function ue(e,t){return e.includes(t)||t===`number`&&e.includes(`integer`)}function de(e,t){return e.includes(t)||t===`integer`&&e.includes(`number`)}function k(e,t){let n=[];for(let r of e.dataTypes)de(t,r)?n.push(r):t.includes(`integer`)&&r===`number`&&n.push(`integer`);e.dataTypes=n}function fe(e,t){let n=e.schemaEnv.baseId+e.errSchemaPath;t+=` at "${n}" (strictTypes)`,(0,d.checkStrictMode)(e,t,e.opts.strictTypes)}var pe=class{constructor(e,t,n){if((0,o.validateKeywordUsage)(e,t,n),this.gen=e.gen,this.allErrors=e.allErrors,this.keyword=n,this.data=e.data,this.schema=e.schema[n],this.$data=t.$data&&e.opts.$data&&this.schema&&this.schema.$data,this.schemaValue=(0,d.schemaRefOrVal)(e,this.schema,n,this.$data),this.schemaType=t.schemaType,this.parentSchema=e.schema,this.params={},this.it=e,this.def=t,this.$data)this.schemaCode=e.gen.const(`vSchema`,_e(this.$data,e));else if(this.schemaCode=this.schemaValue,!(0,o.validSchemaType)(this.schema,t.schemaType,t.allowUndefined))throw Error(`${n} value must be ${JSON.stringify(t.schemaType)}`);(`code`in t?t.trackErrors:t.errors!==!1)&&(this.errsCount=e.gen.const(`_errs`,l.default.errors))}result(e,t,n){this.failResult((0,c.not)(e),t,n)}failResult(e,t,n){this.gen.if(e),n?n():this.error(),t?(this.gen.else(),t(),this.allErrors&&this.gen.endIf()):this.allErrors?this.gen.endIf():this.gen.else()}pass(e,t){this.failResult((0,c.not)(e),void 0,t)}fail(e){if(e===void 0){this.error(),this.allErrors||this.gen.if(!1);return}this.gen.if(e),this.error(),this.allErrors?this.gen.endIf():this.gen.else()}fail$data(e){if(!this.$data)return this.fail(e);let{schemaCode:t}=this;this.fail((0,c._)`${t} !== undefined && (${(0,c.or)(this.invalid$data(),e)})`)}error(e,t,n){if(t){this.setParams(t),this._error(e,n),this.setParams({});return}this._error(e,n)}_error(e,t){(e?f.reportExtraError:f.reportError)(this,this.def.error,t)}$dataError(){(0,f.reportError)(this,this.def.$dataError||f.keyword$DataError)}reset(){if(this.errsCount===void 0)throw Error(`add "trackErrors" to keyword definition`);(0,f.resetErrorsCount)(this.gen,this.errsCount)}ok(e){this.allErrors||this.gen.if(e)}setParams(e,t){t?Object.assign(this.params,e):this.params=e}block$data(e,t,n=c.nil){this.gen.block(()=>{this.check$data(e,n),t()})}check$data(e=c.nil,t=c.nil){if(!this.$data)return;let{gen:n,schemaCode:r,schemaType:i,def:a}=this;n.if((0,c.or)((0,c._)`${r} === undefined`,t)),e!==c.nil&&n.assign(e,!0),(i.length||a.validateSchema)&&(n.elseIf(this.invalid$data()),this.$dataError(),e!==c.nil&&n.assign(e,!1)),n.else()}invalid$data(){let{gen:e,schemaCode:t,schemaType:n,def:r,it:a}=this;return(0,c.or)(o(),s());function o(){if(n.length){if(!(t instanceof c.Name))throw Error(`ajv implementation error`);let e=Array.isArray(n)?n:[n];return(0,c._)`${(0,i.checkDataTypes)(e,t,a.opts.strictNumbers,i.DataType.Wrong)}`}return c.nil}function s(){if(r.validateSchema){let n=e.scopeValue(`validate$data`,{ref:r.validateSchema});return(0,c._)`!${n}(${t})`}return c.nil}}subschema(e,t){let n=(0,s.getSubschema)(this.it,e);(0,s.extendSubschemaData)(n,this.it,e),(0,s.extendSubschemaMode)(n,e);let r={...this.it,...n,items:void 0,props:void 0};return b(r,t),r}mergeEvaluated(e,t){let{it:n,gen:r}=this;n.opts.unevaluated&&(n.props!==!0&&e.props!==void 0&&(n.props=d.mergeEvaluated.props(r,e.props,n.props,t)),n.items!==!0&&e.items!==void 0&&(n.items=d.mergeEvaluated.items(r,e.items,n.items,t)))}mergeValidEvaluated(e,t){let{it:n,gen:r}=this;if(n.opts.unevaluated&&(n.props!==!0||n.items!==!0))return r.if(t,()=>this.mergeEvaluated(e,c.Name)),!0}};e.KeywordCxt=pe;function me(e,t,n,r){let i=new pe(e,n,t);`code`in n?n.code(i,r):i.$data&&n.validate?(0,o.funcKeywordCode)(i,n):`macro`in n?(0,o.macroKeywordCode)(i,n):(n.compile||n.validate)&&(0,o.funcKeywordCode)(i,n)}var he=/^\/(?:[^~]|~0|~1)*$/,ge=/^([0-9]+)(#|\/(?:[^~]|~0|~1)*)?$/;function _e(e,{dataLevel:t,dataNames:n,dataPathArr:r}){let i,a;if(e===``)return l.default.rootData;if(e[0]===`/`){if(!he.test(e))throw Error(`Invalid JSON-pointer: ${e}`);i=e,a=l.default.rootData}else{let o=ge.exec(e);if(!o)throw Error(`Invalid JSON-pointer: ${e}`);let s=+o[1];if(i=o[2],i===`#`){if(s>=t)throw Error(u(`property/index`,s));return r[t-s]}if(s>t)throw Error(u(`data`,s));if(a=n[t-s],!i)return a}let o=a,s=i.split(`/`);for(let e of s)e&&(a=(0,c._)`${a}${(0,c.getProperty)((0,d.unescapeJsonPointer)(e))}`,o=(0,c._)`${o} && ${a}`);return o;function u(e,n){return`Cannot access ${e} ${n} levels up, current level is ${t}`}}e.getData=_e})),So=s((e=>{Object.defineProperty(e,`__esModule`,{value:!0}),e.default=class extends Error{constructor(e){super(`validation failed`),this.errors=e,this.ajv=this.validation=!0}}})),Co=s((e=>{Object.defineProperty(e,`__esModule`,{value:!0});var t=bo();e.default=class extends Error{constructor(e,n,r,i){super(i||`can't resolve reference ${r} from id ${n}`),this.missingRef=(0,t.resolveUrl)(e,n,r),this.missingSchema=(0,t.normalizeId)((0,t.getFullPath)(e,this.missingRef))}}})),wo=s((e=>{Object.defineProperty(e,`__esModule`,{value:!0}),e.resolveSchema=e.getCompilingSchema=e.resolveRef=e.compileSchema=e.SchemaEnv=void 0;var t=K(),n=So(),r=so(),i=bo(),a=q(),o=xo(),s=class{constructor(e){this.refs={},this.dynamicAnchors={};let t;typeof e.schema==`object`&&(t=e.schema),this.schema=e.schema,this.schemaId=e.schemaId,this.root=e.root||this,this.baseId=e.baseId??(0,i.normalizeId)(t?.[e.schemaId||`$id`]),this.schemaPath=e.schemaPath,this.localRefs=e.localRefs,this.meta=e.meta,this.$async=t?.$async,this.refs={}}};e.SchemaEnv=s;function c(e){let a=d.call(this,e);if(a)return a;let s=(0,i.getFullPath)(this.opts.uriResolver,e.root.baseId),{es5:c,lines:l}=this.opts.code,{ownProperties:u}=this.opts,f=new t.CodeGen(this.scope,{es5:c,lines:l,ownProperties:u}),p;e.$async&&(p=f.scopeValue(`Error`,{ref:n.default,code:(0,t._)`require("ajv/dist/runtime/validation_error").default`}));let m=f.scopeName(`validate`);e.validateName=m;let h={gen:f,allErrors:this.opts.allErrors,data:r.default.data,parentData:r.default.parentData,parentDataProperty:r.default.parentDataProperty,dataNames:[r.default.data],dataPathArr:[t.nil],dataLevel:0,dataTypes:[],definedProperties:new Set,topSchemaRef:f.scopeValue(`schema`,this.opts.code.source===!0?{ref:e.schema,code:(0,t.stringify)(e.schema)}:{ref:e.schema}),validateName:m,ValidationError:p,schema:e.schema,schemaEnv:e,rootId:s,baseId:e.baseId||s,schemaPath:t.nil,errSchemaPath:e.schemaPath||(this.opts.jtd?``:`#`),errorPath:(0,t._)`""`,opts:this.opts,self:this},g;try{this._compilations.add(e),(0,o.validateFunctionCode)(h),f.optimize(this.opts.code.optimize);let n=f.toString();g=`${f.scopeRefs(r.default.scope)}return ${n}`,this.opts.code.process&&(g=this.opts.code.process(g,e));let i=Function(`${r.default.self}`,`${r.default.scope}`,g)(this,this.scope.get());if(this.scope.value(m,{ref:i}),i.errors=null,i.schema=e.schema,i.schemaEnv=e,e.$async&&(i.$async=!0),this.opts.code.source===!0&&(i.source={validateName:m,validateCode:n,scopeValues:f._values}),this.opts.unevaluated){let{props:e,items:n}=h;i.evaluated={props:e instanceof t.Name?void 0:e,items:n instanceof t.Name?void 0:n,dynamicProps:e instanceof t.Name,dynamicItems:n instanceof t.Name},i.source&&(i.source.evaluated=(0,t.stringify)(i.evaluated))}return e.validate=i,e}catch(t){throw delete e.validate,delete e.validateName,g&&this.logger.error(`Error compiling schema, function code:`,g),t}finally{this._compilations.delete(e)}}e.compileSchema=c;function l(e,t,n){n=(0,i.resolveUrl)(this.opts.uriResolver,t,n);let r=e.refs[n];if(r)return r;let a=p.call(this,e,n);if(a===void 0){let r=e.localRefs?.[n],{schemaId:i}=this.opts;r&&(a=new s({schema:r,schemaId:i,root:e,baseId:t}))}if(a!==void 0)return e.refs[n]=u.call(this,a)}e.resolveRef=l;function u(e){return(0,i.inlineRef)(e.schema,this.opts.inlineRefs)?e.schema:e.validate?e:c.call(this,e)}function d(e){for(let t of this._compilations)if(f(t,e))return t}e.getCompilingSchema=d;function f(e,t){return e.schema===t.schema&&e.root===t.root&&e.baseId===t.baseId}function p(e,t){let n;for(;typeof(n=this.refs[t])==`string`;)t=n;return n||this.schemas[t]||m.call(this,e,t)}function m(e,t){let n=this.opts.uriResolver.parse(t),r=(0,i._getFullPath)(this.opts.uriResolver,n),a=(0,i.getFullPath)(this.opts.uriResolver,e.baseId,void 0);if(Object.keys(e.schema).length>0&&r===a)return g.call(this,n,e);let o=(0,i.normalizeId)(r),l=this.refs[o]||this.schemas[o];if(typeof l==`string`){let t=m.call(this,e,l);return typeof t?.schema==`object`?g.call(this,n,t):void 0}if(typeof l?.schema==`object`){if(l.validate||c.call(this,l),o===(0,i.normalizeId)(t)){let{schema:t}=l,{schemaId:n}=this.opts,r=t[n];return r&&(a=(0,i.resolveUrl)(this.opts.uriResolver,a,r)),new s({schema:t,schemaId:n,root:e,baseId:a})}return g.call(this,n,l)}}e.resolveSchema=m;var h=new Set([`properties`,`patternProperties`,`enum`,`dependencies`,`definitions`]);function g(e,{baseId:t,schema:n,root:r}){if(e.fragment?.[0]!==`/`)return;for(let r of e.fragment.slice(1).split(`/`)){if(typeof n==`boolean`)return;let e=n[(0,a.unescapeFragment)(r)];if(e===void 0)return;n=e;let o=typeof n==`object`&&n[this.opts.schemaId];!h.has(r)&&o&&(t=(0,i.resolveUrl)(this.opts.uriResolver,t,o))}let o;if(typeof n!=`boolean`&&n.$ref&&!(0,a.schemaHasRulesButRef)(n,this.RULES)){let e=(0,i.resolveUrl)(this.opts.uriResolver,t,n.$ref);o=m.call(this,r,e)}let{schemaId:c}=this.opts;if(o||=new s({schema:n,schemaId:c,root:r,baseId:t}),o.schema!==o.root.schema)return o}})),To=c({$id:()=>Eo,additionalProperties:()=>!1,default:()=>jo,description:()=>Do,properties:()=>Ao,required:()=>ko,type:()=>Oo}),Eo,Do,Oo,ko,Ao,jo,Mo=o((()=>{Eo=`https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#`,Do=`Meta-schema for $data reference (JSON AnySchema extension proposal)`,Oo=`object`,ko=[`$data`],Ao={$data:{type:`string`,anyOf:[{format:`relative-json-pointer`},{format:`json-pointer`}]}},jo={$id:Eo,description:Do,type:Oo,required:ko,properties:Ao,additionalProperties:!1}})),No=s(((e,t)=>{var n=RegExp.prototype.test.bind(/^[\da-f]{8}-[\da-f]{4}-[\da-f]{4}-[\da-f]{4}-[\da-f]{12}$/iu),r=RegExp.prototype.test.bind(/^(?:(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)$/u);function i(e){let t=``,n=0,r=0;for(r=0;r<e.length;r++)if(n=e[r].charCodeAt(0),n!==48){if(!(n>=48&&n<=57||n>=65&&n<=70||n>=97&&n<=102))return``;t+=e[r];break}for(r+=1;r<e.length;r++){if(n=e[r].charCodeAt(0),!(n>=48&&n<=57||n>=65&&n<=70||n>=97&&n<=102))return``;t+=e[r]}return t}var a=RegExp.prototype.test.bind(/[^!"$&'()*+,\-.;=_`a-z{}~]/u);function o(e){return e.length=0,!0}function s(e,t,n){if(e.length){let r=i(e);if(r!==``)t.push(r);else return n.error=!0,!1;e.length=0}return!0}function c(e){let t=0,n={error:!1,address:``,zone:``},r=[],a=[],c=!1,l=!1,u=s;for(let i=0;i<e.length;i++){let s=e[i];if(!(s===`[`||s===`]`))if(s===`:`){if(c===!0&&(l=!0),!u(a,r,n))break;if(++t>7){n.error=!0;break}i>0&&e[i-1]===`:`&&(c=!0),r.push(`:`);continue}else if(s===`%`){if(!u(a,r,n))break;u=o}else{a.push(s);continue}}return a.length&&(u===o?n.zone=a.join(``):l?r.push(a.join(``)):r.push(i(a))),n.address=r.join(``),n}function l(e){if(u(e,`:`)<2)return{host:e,isIPV6:!1};let t=c(e);if(t.error)return{host:e,isIPV6:!1};{let e=t.address,n=t.address;return t.zone&&(e+=`%`+t.zone,n+=`%25`+t.zone),{host:e,isIPV6:!0,escapedHost:n}}}function u(e,t){let n=0;for(let r=0;r<e.length;r++)e[r]===t&&n++;return n}function d(e){let t=e,n=[],r=-1,i=0;for(;i=t.length;){if(i===1){if(t===`.`)break;if(t===`/`){n.push(`/`);break}else{n.push(t);break}}else if(i===2){if(t[0]===`.`){if(t[1]===`.`)break;if(t[1]===`/`){t=t.slice(2);continue}}else if(t[0]===`/`&&(t[1]===`.`||t[1]===`/`)){n.push(`/`);break}}else if(i===3&&t===`/..`){n.length!==0&&n.pop(),n.push(`/`);break}if(t[0]===`.`){if(t[1]===`.`){if(t[2]===`/`){t=t.slice(3);continue}}else if(t[1]===`/`){t=t.slice(2);continue}}else if(t[0]===`/`&&t[1]===`.`){if(t[2]===`/`){t=t.slice(2);continue}else if(t[2]===`.`&&t[3]===`/`){t=t.slice(3),n.length!==0&&n.pop();continue}}if((r=t.indexOf(`/`,1))===-1){n.push(t);break}else n.push(t.slice(0,r)),t=t.slice(r)}return n.join(``)}function f(e,t){let n=t===!0?unescape:escape;return e.scheme!==void 0&&(e.scheme=n(e.scheme)),e.userinfo!==void 0&&(e.userinfo=n(e.userinfo)),e.host!==void 0&&(e.host=n(e.host)),e.path!==void 0&&(e.path=n(e.path)),e.query!==void 0&&(e.query=n(e.query)),e.fragment!==void 0&&(e.fragment=n(e.fragment)),e}function p(e){let t=[];if(e.userinfo!==void 0&&(t.push(e.userinfo),t.push(`@`)),e.host!==void 0){let n=unescape(e.host);if(!r(n)){let t=l(n);n=t.isIPV6===!0?`[${t.escapedHost}]`:e.host}t.push(n)}return(typeof e.port==`number`||typeof e.port==`string`)&&(t.push(`:`),t.push(String(e.port))),t.length?t.join(``):void 0}t.exports={nonSimpleDomain:a,recomposeAuthority:p,normalizeComponentEncoding:f,removeDotSegments:d,isIPv4:r,isUUID:n,normalizeIPv6:l,stringArrayToHexStripped:i}})),Po=s(((e,t)=>{var{isUUID:n}=No(),r=/([\da-z][\d\-a-z]{0,31}):((?:[\w!$'()*+,\-.:;=@]|%[\da-f]{2})+)/iu,i=[`http`,`https`,`ws`,`wss`,`urn`,`urn:uuid`];function a(e){return i.indexOf(e)!==-1}function o(e){return e.secure===!0?!0:e.secure===!1?!1:e.scheme?e.scheme.length===3&&(e.scheme[0]===`w`||e.scheme[0]===`W`)&&(e.scheme[1]===`s`||e.scheme[1]===`S`)&&(e.scheme[2]===`s`||e.scheme[2]===`S`):!1}function s(e){return e.host||(e.error=e.error||`HTTP URIs must have a host.`),e}function c(e){let t=String(e.scheme).toLowerCase()===`https`;return(e.port===(t?443:80)||e.port===``)&&(e.port=void 0),e.path||=`/`,e}function l(e){return e.secure=o(e),e.resourceName=(e.path||`/`)+(e.query?`?`+e.query:``),e.path=void 0,e.query=void 0,e}function u(e){if((e.port===(o(e)?443:80)||e.port===``)&&(e.port=void 0),typeof e.secure==`boolean`&&(e.scheme=e.secure?`wss`:`ws`,e.secure=void 0),e.resourceName){let[t,n]=e.resourceName.split(`?`);e.path=t&&t!==`/`?t:void 0,e.query=n,e.resourceName=void 0}return e.fragment=void 0,e}function d(e,t){if(!e.path)return e.error=`URN can not be parsed`,e;let n=e.path.match(r);if(n){let r=t.scheme||e.scheme||`urn`;e.nid=n[1].toLowerCase(),e.nss=n[2];let i=S(`${r}:${t.nid||e.nid}`);e.path=void 0,i&&(e=i.parse(e,t))}else e.error=e.error||`URN can not be parsed.`;return e}function f(e,t){if(e.nid===void 0)throw Error(`URN without nid cannot be serialized`);let n=t.scheme||e.scheme||`urn`,r=e.nid.toLowerCase(),i=S(`${n}:${t.nid||r}`);i&&(e=i.serialize(e,t));let a=e,o=e.nss;return a.path=`${r||t.nid}:${o}`,t.skipEscape=!0,a}function p(e,t){let r=e;return r.uuid=r.nss,r.nss=void 0,!t.tolerant&&(!r.uuid||!n(r.uuid))&&(r.error=r.error||`UUID is not valid.`),r}function m(e){let t=e;return t.nss=(e.uuid||``).toLowerCase(),t}var h={scheme:`http`,domainHost:!0,parse:s,serialize:c},g={scheme:`https`,domainHost:h.domainHost,parse:s,serialize:c},_={scheme:`ws`,domainHost:!0,parse:l,serialize:u},v={scheme:`wss`,domainHost:_.domainHost,parse:_.parse,serialize:_.serialize},y={scheme:`urn`,parse:d,serialize:f,skipNormalize:!0},b={scheme:`urn:uuid`,parse:p,serialize:m,skipNormalize:!0},x={http:h,https:g,ws:_,wss:v,urn:y,"urn:uuid":b};Object.setPrototypeOf(x,null);function S(e){return e&&(x[e]||x[e.toLowerCase()])||void 0}t.exports={wsIsSecure:o,SCHEMES:x,isValidSchemeName:a,getSchemeHandler:S}})),Fo=s(((e,t)=>{var{normalizeIPv6:n,removeDotSegments:r,recomposeAuthority:i,normalizeComponentEncoding:a,isIPv4:o,nonSimpleDomain:s}=No(),{SCHEMES:c,getSchemeHandler:l}=Po();function u(e,t){return typeof e==`string`?e=m(g(e,t),t):typeof e==`object`&&(e=g(m(e,t),t)),e}function d(e,t,n){let r=n?Object.assign({scheme:`null`},n):{scheme:`null`},i=f(g(e,r),g(t,r),r,!0);return r.skipEscape=!0,m(i,r)}function f(e,t,n,i){let a={};return i||(e=g(m(e,n),n),t=g(m(t,n),n)),n||={},!n.tolerant&&t.scheme?(a.scheme=t.scheme,a.userinfo=t.userinfo,a.host=t.host,a.port=t.port,a.path=r(t.path||``),a.query=t.query):(t.userinfo!==void 0||t.host!==void 0||t.port!==void 0?(a.userinfo=t.userinfo,a.host=t.host,a.port=t.port,a.path=r(t.path||``),a.query=t.query):(t.path?(t.path[0]===`/`?a.path=r(t.path):((e.userinfo!==void 0||e.host!==void 0||e.port!==void 0)&&!e.path?a.path=`/`+t.path:e.path?a.path=e.path.slice(0,e.path.lastIndexOf(`/`)+1)+t.path:a.path=t.path,a.path=r(a.path)),a.query=t.query):(a.path=e.path,t.query===void 0?a.query=e.query:a.query=t.query),a.userinfo=e.userinfo,a.host=e.host,a.port=e.port),a.scheme=e.scheme),a.fragment=t.fragment,a}function p(e,t,n){return typeof e==`string`?(e=unescape(e),e=m(a(g(e,n),!0),{...n,skipEscape:!0})):typeof e==`object`&&(e=m(a(e,!0),{...n,skipEscape:!0})),typeof t==`string`?(t=unescape(t),t=m(a(g(t,n),!0),{...n,skipEscape:!0})):typeof t==`object`&&(t=m(a(t,!0),{...n,skipEscape:!0})),e.toLowerCase()===t.toLowerCase()}function m(e,t){let n={host:e.host,scheme:e.scheme,userinfo:e.userinfo,port:e.port,path:e.path,query:e.query,nid:e.nid,nss:e.nss,uuid:e.uuid,fragment:e.fragment,reference:e.reference,resourceName:e.resourceName,secure:e.secure,error:``},a=Object.assign({},t),o=[],s=l(a.scheme||n.scheme);s&&s.serialize&&s.serialize(n,a),n.path!==void 0&&(a.skipEscape?n.path=unescape(n.path):(n.path=escape(n.path),n.scheme!==void 0&&(n.path=n.path.split(`%3A`).join(`:`)))),a.reference!==`suffix`&&n.scheme&&o.push(n.scheme,`:`);let c=i(n);if(c!==void 0&&(a.reference!==`suffix`&&o.push(`//`),o.push(c),n.path&&n.path[0]!==`/`&&o.push(`/`)),n.path!==void 0){let e=n.path;!a.absolutePath&&(!s||!s.absolutePath)&&(e=r(e)),c===void 0&&e[0]===`/`&&e[1]===`/`&&(e=`/%2F`+e.slice(2)),o.push(e)}return n.query!==void 0&&o.push(`?`,n.query),n.fragment!==void 0&&o.push(`#`,n.fragment),o.join(``)}var h=/^(?:([^#/:?]+):)?(?:\/\/((?:([^#/?@]*)@)?(\[[^#/?\]]+\]|[^#/:?]*)(?::(\d*))?))?([^#?]*)(?:\?([^#]*))?(?:#((?:.|[\n\r])*))?/u;function g(e,t){let r=Object.assign({},t),i={scheme:void 0,userinfo:void 0,host:``,port:void 0,path:``,query:void 0,fragment:void 0},a=!1;r.reference===`suffix`&&(e=r.scheme?r.scheme+`:`+e:`//`+e);let c=e.match(h);if(c){if(i.scheme=c[1],i.userinfo=c[3],i.host=c[4],i.port=parseInt(c[5],10),i.path=c[6]||``,i.query=c[7],i.fragment=c[8],isNaN(i.port)&&(i.port=c[5]),i.host)if(o(i.host)===!1){let e=n(i.host);i.host=e.host.toLowerCase(),a=e.isIPV6}else a=!0;i.scheme===void 0&&i.userinfo===void 0&&i.host===void 0&&i.port===void 0&&i.query===void 0&&!i.path?i.reference=`same-document`:i.scheme===void 0?i.reference=`relative`:i.fragment===void 0?i.reference=`absolute`:i.reference=`uri`,r.reference&&r.reference!==`suffix`&&r.reference!==i.reference&&(i.error=i.error||`URI is not a `+r.reference+` reference.`);let t=l(r.scheme||i.scheme);if(!r.unicodeSupport&&(!t||!t.unicodeSupport)&&i.host&&(r.domainHost||t&&t.domainHost)&&a===!1&&s(i.host))try{i.host=URL.domainToASCII(i.host.toLowerCase())}catch(e){i.error=i.error||`Host's domain name can not be converted to ASCII: `+e}(!t||t&&!t.skipNormalize)&&(e.indexOf(`%`)!==-1&&(i.scheme!==void 0&&(i.scheme=unescape(i.scheme)),i.host!==void 0&&(i.host=unescape(i.host))),i.path&&=escape(unescape(i.path)),i.fragment&&=encodeURI(decodeURIComponent(i.fragment))),t&&t.parse&&t.parse(i,r)}else i.error=i.error||`URI can not be parsed.`;return i}var _={SCHEMES:c,normalize:u,resolve:d,resolveComponent:f,equal:p,serialize:m,parse:g};t.exports=_,t.exports.default=_,t.exports.fastUri=_})),Io=s((e=>{Object.defineProperty(e,`__esModule`,{value:!0});var t=Fo();t.code=`require("ajv/dist/runtime/uri").default`,e.default=t})),Lo=s((e=>{Object.defineProperty(e,`__esModule`,{value:!0}),e.CodeGen=e.Name=e.nil=e.stringify=e.str=e._=e.KeywordCxt=void 0;var t=xo();Object.defineProperty(e,`KeywordCxt`,{enumerable:!0,get:function(){return t.KeywordCxt}});var n=K();Object.defineProperty(e,`_`,{enumerable:!0,get:function(){return n._}}),Object.defineProperty(e,`str`,{enumerable:!0,get:function(){return n.str}}),Object.defineProperty(e,`stringify`,{enumerable:!0,get:function(){return n.stringify}}),Object.defineProperty(e,`nil`,{enumerable:!0,get:function(){return n.nil}}),Object.defineProperty(e,`Name`,{enumerable:!0,get:function(){return n.Name}}),Object.defineProperty(e,`CodeGen`,{enumerable:!0,get:function(){return n.CodeGen}});var r=So(),i=Co(),a=uo(),o=wo(),s=K(),c=bo(),l=po(),u=q(),f=(Mo(),d(To).default),p=Io(),m=(e,t)=>new RegExp(e,t);m.code=`new RegExp`;var h=[`removeAdditional`,`useDefaults`,`coerceTypes`],g=new Set([`validate`,`serialize`,`parse`,`wrapper`,`root`,`schema`,`keyword`,`pattern`,`formats`,`validate$data`,`func`,`obj`,`Error`]),_={errorDataPath:``,format:"`validateFormats: false` can be used instead.",nullable:`"nullable" keyword is supported by default.`,jsonPointers:`Deprecated jsPropertySyntax can be used instead.`,extendRefs:`Deprecated ignoreKeywordsWithRef can be used instead.`,missingRefs:`Pass empty schema with $id that should be ignored to ajv.addSchema.`,processCode:"Use option `code: {process: (code, schemaEnv: object) => string}`",sourceCode:"Use option `code: {source: true}`",strictDefaults:"It is default now, see option `strict`.",strictKeywords:"It is default now, see option `strict`.",uniqueItems:`"uniqueItems" keyword is always validated.`,unknownFormats:"Disable strict mode or pass `true` to `ajv.addFormat` (or `formats` option).",cache:`Map is used as cache, schema object as key.`,serialize:`Map is used as cache, schema object as key.`,ajvErrors:`It is default now.`},v={ignoreKeywordsWithRef:``,jsPropertySyntax:``,unicode:`"minLength"/"maxLength" account for unicode characters by default.`},y=200;function b(e){let t=e.strict,n=e.code?.optimize,r=n===!0||n===void 0?1:n||0,i=e.code?.regExp??m,a=e.uriResolver??p.default;return{strictSchema:e.strictSchema??t??!0,strictNumbers:e.strictNumbers??t??!0,strictTypes:e.strictTypes??t??`log`,strictTuples:e.strictTuples??t??`log`,strictRequired:e.strictRequired??t??!1,code:e.code?{...e.code,optimize:r,regExp:i}:{optimize:r,regExp:i},loopRequired:e.loopRequired??y,loopEnum:e.loopEnum??y,meta:e.meta??!0,messages:e.messages??!0,inlineRefs:e.inlineRefs??!0,schemaId:e.schemaId??`$id`,addUsedSchema:e.addUsedSchema??!0,validateSchema:e.validateSchema??!0,validateFormats:e.validateFormats??!0,unicodeRegExp:e.unicodeRegExp??!0,int32range:e.int32range??!0,uriResolver:a}}var x=class{constructor(e={}){this.schemas={},this.refs={},this.formats={},this._compilations=new Set,this._loading={},this._cache=new Map,e=this.opts={...e,...b(e)};let{es5:t,lines:n}=this.opts.code;this.scope=new s.ValueScope({scope:{},prefixes:g,es5:t,lines:n}),this.logger=ne(e.logger);let r=e.validateFormats;e.validateFormats=!1,this.RULES=(0,a.getRules)(),S.call(this,_,e,`NOT SUPPORTED`),S.call(this,v,e,`DEPRECATED`,`warn`),this._metaOpts=te.call(this),e.formats&&T.call(this),this._addVocabularies(),this._addDefaultMetaSchema(),e.keywords&&ee.call(this,e.keywords),typeof e.meta==`object`&&this.addMetaSchema(e.meta),w.call(this),e.validateFormats=r}_addVocabularies(){this.addKeyword(`$async`)}_addDefaultMetaSchema(){let{$data:e,meta:t,schemaId:n}=this.opts,r=f;n===`id`&&(r={...f},r.id=r.$id,delete r.$id),t&&e&&this.addMetaSchema(r,r[n],!1)}defaultMeta(){let{meta:e,schemaId:t}=this.opts;return this.opts.defaultMeta=typeof e==`object`?e[t]||e:void 0}validate(e,t){let n;if(typeof e==`string`){if(n=this.getSchema(e),!n)throw Error(`no schema with key or ref "${e}"`)}else n=this.compile(e);let r=n(t);return`$async`in n||(this.errors=n.errors),r}compile(e,t){let n=this._addSchema(e,t);return n.validate||this._compileSchemaEnv(n)}compileAsync(e,t){if(typeof this.opts.loadSchema!=`function`)throw Error(`options.loadSchema should be a function`);let{loadSchema:n}=this.opts;return r.call(this,e,t);async function r(e,t){await a.call(this,e.$schema);let n=this._addSchema(e,t);return n.validate||o.call(this,n)}async function a(e){e&&!this.getSchema(e)&&await r.call(this,{$ref:e},!0)}async function o(e){try{return this._compileSchemaEnv(e)}catch(t){if(!(t instanceof i.default))throw t;return s.call(this,t),await c.call(this,t.missingSchema),o.call(this,e)}}function s({missingSchema:e,missingRef:t}){if(this.refs[e])throw Error(`AnySchema ${e} is loaded but ${t} cannot be resolved`)}async function c(e){let n=await l.call(this,e);this.refs[e]||await a.call(this,n.$schema),this.refs[e]||this.addSchema(n,e,t)}async function l(e){let t=this._loading[e];if(t)return t;try{return await(this._loading[e]=n(e))}finally{delete this._loading[e]}}}addSchema(e,t,n,r=this.opts.validateSchema){if(Array.isArray(e)){for(let t of e)this.addSchema(t,void 0,n,r);return this}let i;if(typeof e==`object`){let{schemaId:t}=this.opts;if(i=e[t],i!==void 0&&typeof i!=`string`)throw Error(`schema ${t} must be string`)}return t=(0,c.normalizeId)(t||i),this._checkUnique(t),this.schemas[t]=this._addSchema(e,n,t,r,!0),this}addMetaSchema(e,t,n=this.opts.validateSchema){return this.addSchema(e,t,!0,n),this}validateSchema(e,t){if(typeof e==`boolean`)return!0;let n;if(n=e.$schema,n!==void 0&&typeof n!=`string`)throw Error(`$schema must be a string`);if(n=n||this.opts.defaultMeta||this.defaultMeta(),!n)return this.logger.warn(`meta-schema not available`),this.errors=null,!0;let r=this.validate(n,e);if(!r&&t){let e=`schema is invalid: `+this.errorsText();if(this.opts.validateSchema===`log`)this.logger.error(e);else throw Error(e)}return r}getSchema(e){let t;for(;typeof(t=C.call(this,e))==`string`;)e=t;if(t===void 0){let{schemaId:n}=this.opts,r=new o.SchemaEnv({schema:{},schemaId:n});if(t=o.resolveSchema.call(this,r,e),!t)return;this.refs[e]=t}return t.validate||this._compileSchemaEnv(t)}removeSchema(e){if(e instanceof RegExp)return this._removeAllSchemas(this.schemas,e),this._removeAllSchemas(this.refs,e),this;switch(typeof e){case`undefined`:return this._removeAllSchemas(this.schemas),this._removeAllSchemas(this.refs),this._cache.clear(),this;case`string`:{let t=C.call(this,e);return typeof t==`object`&&this._cache.delete(t.schema),delete this.schemas[e],delete this.refs[e],this}case`object`:{let t=e;this._cache.delete(t);let n=e[this.opts.schemaId];return n&&(n=(0,c.normalizeId)(n),delete this.schemas[n],delete this.refs[n]),this}default:throw Error(`ajv.removeSchema: invalid parameter`)}}addVocabulary(e){for(let t of e)this.addKeyword(t);return this}addKeyword(e,t){let n;if(typeof e==`string`)n=e,typeof t==`object`&&(this.logger.warn(`these parameters are deprecated, see docs for addKeyword`),t.keyword=n);else if(typeof e==`object`&&t===void 0){if(t=e,n=t.keyword,Array.isArray(n)&&!n.length)throw Error(`addKeywords: keyword must be string or non-empty array`)}else throw Error(`invalid addKeywords parameters`);if(ie.call(this,n,t),!t)return(0,u.eachItem)(n,e=>D.call(this,e)),this;ae.call(this,t);let r={...t,type:(0,l.getJSONTypes)(t.type),schemaType:(0,l.getJSONTypes)(t.schemaType)};return(0,u.eachItem)(n,r.type.length===0?e=>D.call(this,e,r):e=>r.type.forEach(t=>D.call(this,e,r,t))),this}getKeyword(e){let t=this.RULES.all[e];return typeof t==`object`?t.definition:!!t}removeKeyword(e){let{RULES:t}=this;delete t.keywords[e],delete t.all[e];for(let n of t.rules){let t=n.rules.findIndex(t=>t.keyword===e);t>=0&&n.rules.splice(t,1)}return this}addFormat(e,t){return typeof t==`string`&&(t=new RegExp(t)),this.formats[e]=t,this}errorsText(e=this.errors,{separator:t=`, `,dataVar:n=`data`}={}){return!e||e.length===0?`No errors`:e.map(e=>`${n}${e.instancePath} ${e.message}`).reduce((e,n)=>e+t+n)}$dataMetaSchema(e,t){let n=this.RULES.all;e=JSON.parse(JSON.stringify(e));for(let r of t){let t=r.split(`/`).slice(1),i=e;for(let e of t)i=i[e];for(let e in n){let t=n[e];if(typeof t!=`object`)continue;let{$data:r}=t.definition,a=i[e];r&&a&&(i[e]=se(a))}}return e}_removeAllSchemas(e,t){for(let n in e){let r=e[n];(!t||t.test(n))&&(typeof r==`string`?delete e[n]:r&&!r.meta&&(this._cache.delete(r.schema),delete e[n]))}}_addSchema(e,t,n,r=this.opts.validateSchema,i=this.opts.addUsedSchema){let a,{schemaId:s}=this.opts;if(typeof e==`object`)a=e[s];else if(this.opts.jtd)throw Error(`schema must be object`);else if(typeof e!=`boolean`)throw Error(`schema must be object or boolean`);let l=this._cache.get(e);if(l!==void 0)return l;n=(0,c.normalizeId)(a||n);let u=c.getSchemaRefs.call(this,e,n);return l=new o.SchemaEnv({schema:e,schemaId:s,meta:t,baseId:n,localRefs:u}),this._cache.set(l.schema,l),i&&!n.startsWith(`#`)&&(n&&this._checkUnique(n),this.refs[n]=l),r&&this.validateSchema(e,!0),l}_checkUnique(e){if(this.schemas[e]||this.refs[e])throw Error(`schema with key or id "${e}" already exists`)}_compileSchemaEnv(e){if(e.meta?this._compileMetaSchema(e):o.compileSchema.call(this,e),!e.validate)throw Error(`ajv implementation error`);return e.validate}_compileMetaSchema(e){let t=this.opts;this.opts=this._metaOpts;try{o.compileSchema.call(this,e)}finally{this.opts=t}}};x.ValidationError=r.default,x.MissingRefError=i.default,e.default=x;function S(e,t,n,r=`error`){for(let i in e){let a=i;a in t&&this.logger[r](`${n}: option ${i}. ${e[a]}`)}}function C(e){return e=(0,c.normalizeId)(e),this.schemas[e]||this.refs[e]}function w(){let e=this.opts.schemas;if(e)if(Array.isArray(e))this.addSchema(e);else for(let t in e)this.addSchema(e[t],t)}function T(){for(let e in this.opts.formats){let t=this.opts.formats[e];t&&this.addFormat(e,t)}}function ee(e){if(Array.isArray(e)){this.addVocabulary(e);return}this.logger.warn(`keywords option as map is deprecated, pass array`);for(let t in e){let n=e[t];n.keyword||=t,this.addKeyword(n)}}function te(){let e={...this.opts};for(let t of h)delete e[t];return e}var E={log(){},warn(){},error(){}};function ne(e){if(e===!1)return E;if(e===void 0)return console;if(e.log&&e.warn&&e.error)return e;throw Error(`logger must implement log, warn and error methods`)}var re=/^[a-z_$][a-z0-9_$:-]*$/i;function ie(e,t){let{RULES:n}=this;if((0,u.eachItem)(e,e=>{if(n.keywords[e])throw Error(`Keyword ${e} is already defined`);if(!re.test(e))throw Error(`Keyword ${e} has invalid name`)}),t&&t.$data&&!(`code`in t||`validate`in t))throw Error(`$data keyword must have "code" or "validate" function`)}function D(e,t,n){var r;let i=t?.post;if(n&&i)throw Error(`keyword with "post" flag cannot have "type"`);let{RULES:a}=this,o=i?a.post:a.rules.find(({type:e})=>e===n);if(o||(o={type:n,rules:[]},a.rules.push(o)),a.keywords[e]=!0,!t)return;let s={keyword:e,definition:{...t,type:(0,l.getJSONTypes)(t.type),schemaType:(0,l.getJSONTypes)(t.schemaType)}};t.before?O.call(this,o,s,t.before):o.rules.push(s),a.all[e]=s,(r=t.implements)==null||r.forEach(e=>this.addKeyword(e))}function O(e,t,n){let r=e.rules.findIndex(e=>e.keyword===n);r>=0?e.rules.splice(r,0,t):(e.rules.push(t),this.logger.warn(`rule ${n} is not defined`))}function ae(e){let{metaSchema:t}=e;t!==void 0&&(e.$data&&this.opts.$data&&(t=se(t)),e.validateSchema=this.compile(t,!0))}var oe={$ref:`https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#`};function se(e){return{anyOf:[e,oe]}}})),Ro=s((e=>{Object.defineProperty(e,`__esModule`,{value:!0}),e.default={keyword:`id`,code(){throw Error(`NOT SUPPORTED: keyword "id", use "$id" for schema ID`)}}})),zo=s((e=>{Object.defineProperty(e,`__esModule`,{value:!0}),e.callRef=e.getValidate=void 0;var t=Co(),n=ho(),r=K(),i=so(),a=wo(),o=q(),s={keyword:`$ref`,schemaType:`string`,code(e){let{gen:n,schema:i,it:o}=e,{baseId:s,schemaEnv:u,validateName:d,opts:f,self:p}=o,{root:m}=u;if((i===`#`||i===`#/`)&&s===m.baseId)return g();let h=a.resolveRef.call(p,m,s,i);if(h===void 0)throw new t.default(o.opts.uriResolver,s,i);if(h instanceof a.SchemaEnv)return _(h);return v(h);function g(){if(u===m)return l(e,d,u,u.$async);let t=n.scopeValue(`root`,{ref:m});return l(e,(0,r._)`${t}.validate`,m,m.$async)}function _(t){l(e,c(e,t),t,t.$async)}function v(t){let a=n.scopeValue(`schema`,f.code.source===!0?{ref:t,code:(0,r.stringify)(t)}:{ref:t}),o=n.name(`valid`),s=e.subschema({schema:t,dataTypes:[],schemaPath:r.nil,topSchemaRef:a,errSchemaPath:i},o);e.mergeEvaluated(s),e.ok(o)}}};function c(e,t){let{gen:n}=e;return t.validate?n.scopeValue(`validate`,{ref:t.validate}):(0,r._)`${n.scopeValue(`wrapper`,{ref:t})}.validate`}e.getValidate=c;function l(e,t,a,s){let{gen:c,it:l}=e,{allErrors:u,schemaEnv:d,opts:f}=l,p=f.passContext?i.default.this:r.nil;s?m():h();function m(){if(!d.$async)throw Error(`async schema referenced by sync schema`);let i=c.let(`valid`);c.try(()=>{c.code((0,r._)`await ${(0,n.callValidateCode)(e,t,p)}`),_(t),u||c.assign(i,!0)},e=>{c.if((0,r._)`!(${e} instanceof ${l.ValidationError})`,()=>c.throw(e)),g(e),u||c.assign(i,!1)}),e.ok(i)}function h(){e.result((0,n.callValidateCode)(e,t,p),()=>_(t),()=>g(t))}function g(e){let t=(0,r._)`${e}.errors`;c.assign(i.default.vErrors,(0,r._)`${i.default.vErrors} === null ? ${t} : ${i.default.vErrors}.concat(${t})`),c.assign(i.default.errors,(0,r._)`${i.default.vErrors}.length`)}function _(e){if(!l.opts.unevaluated)return;let t=a?.validate?.evaluated;if(l.props!==!0)if(t&&!t.dynamicProps)t.props!==void 0&&(l.props=o.mergeEvaluated.props(c,t.props,l.props));else{let t=c.var(`props`,(0,r._)`${e}.evaluated.props`);l.props=o.mergeEvaluated.props(c,t,l.props,r.Name)}if(l.items!==!0)if(t&&!t.dynamicItems)t.items!==void 0&&(l.items=o.mergeEvaluated.items(c,t.items,l.items));else{let t=c.var(`items`,(0,r._)`${e}.evaluated.items`);l.items=o.mergeEvaluated.items(c,t,l.items,r.Name)}}}e.callRef=l,e.default=s})),Bo=s((e=>{Object.defineProperty(e,`__esModule`,{value:!0});var t=Ro(),n=zo();e.default=[`$schema`,`$id`,`$defs`,`$vocabulary`,{keyword:`$comment`},`definitions`,t.default,n.default]})),Vo=s((e=>{Object.defineProperty(e,`__esModule`,{value:!0});var t=K(),n=t.operators,r={maximum:{okStr:`<=`,ok:n.LTE,fail:n.GT},minimum:{okStr:`>=`,ok:n.GTE,fail:n.LT},exclusiveMaximum:{okStr:`<`,ok:n.LT,fail:n.GTE},exclusiveMinimum:{okStr:`>`,ok:n.GT,fail:n.LTE}};e.default={keyword:Object.keys(r),type:`number`,schemaType:`number`,$data:!0,error:{message:({keyword:e,schemaCode:n})=>(0,t.str)`must be ${r[e].okStr} ${n}`,params:({keyword:e,schemaCode:n})=>(0,t._)`{comparison: ${r[e].okStr}, limit: ${n}}`},code(e){let{keyword:n,data:i,schemaCode:a}=e;e.fail$data((0,t._)`${i} ${r[n].fail} ${a} || isNaN(${i})`)}}})),Ho=s((e=>{Object.defineProperty(e,`__esModule`,{value:!0});var t=K();e.default={keyword:`multipleOf`,type:`number`,schemaType:`number`,$data:!0,error:{message:({schemaCode:e})=>(0,t.str)`must be multiple of ${e}`,params:({schemaCode:e})=>(0,t._)`{multipleOf: ${e}}`},code(e){let{gen:n,data:r,schemaCode:i,it:a}=e,o=a.opts.multipleOfPrecision,s=n.let(`res`),c=o?(0,t._)`Math.abs(Math.round(${s}) - ${s}) > 1e-${o}`:(0,t._)`${s} !== parseInt(${s})`;e.fail$data((0,t._)`(${i} === 0 || (${s} = ${r}/${i}, ${c}))`)}}})),Uo=s((e=>{Object.defineProperty(e,`__esModule`,{value:!0});function t(e){let t=e.length,n=0,r=0,i;for(;r<t;)n++,i=e.charCodeAt(r++),i>=55296&&i<=56319&&r<t&&(i=e.charCodeAt(r),(i&64512)==56320&&r++);return n}e.default=t,t.code=`require("ajv/dist/runtime/ucs2length").default`})),Wo=s((e=>{Object.defineProperty(e,`__esModule`,{value:!0});var t=K(),n=q(),r=Uo();e.default={keyword:[`maxLength`,`minLength`],type:`string`,schemaType:`number`,$data:!0,error:{message({keyword:e,schemaCode:n}){let r=e===`maxLength`?`more`:`fewer`;return(0,t.str)`must NOT have ${r} than ${n} characters`},params:({schemaCode:e})=>(0,t._)`{limit: ${e}}`},code(e){let{keyword:i,data:a,schemaCode:o,it:s}=e,c=i===`maxLength`?t.operators.GT:t.operators.LT,l=s.opts.unicode===!1?(0,t._)`${a}.length`:(0,t._)`${(0,n.useFunc)(e.gen,r.default)}(${a})`;e.fail$data((0,t._)`${l} ${c} ${o}`)}}})),Go=s((e=>{Object.defineProperty(e,`__esModule`,{value:!0});var t=ho(),n=q(),r=K();e.default={keyword:`pattern`,type:`string`,schemaType:`string`,$data:!0,error:{message:({schemaCode:e})=>(0,r.str)`must match pattern "${e}"`,params:({schemaCode:e})=>(0,r._)`{pattern: ${e}}`},code(e){let{gen:i,data:a,$data:o,schema:s,schemaCode:c,it:l}=e,u=l.opts.unicodeRegExp?`u`:``;if(o){let{regExp:t}=l.opts.code,o=t.code===`new RegExp`?(0,r._)`new RegExp`:(0,n.useFunc)(i,t),s=i.let(`valid`);i.try(()=>i.assign(s,(0,r._)`${o}(${c}, ${u}).test(${a})`),()=>i.assign(s,!1)),e.fail$data((0,r._)`!${s}`)}else{let n=(0,t.usePattern)(e,s);e.fail$data((0,r._)`!${n}.test(${a})`)}}}})),Ko=s((e=>{Object.defineProperty(e,`__esModule`,{value:!0});var t=K();e.default={keyword:[`maxProperties`,`minProperties`],type:`object`,schemaType:`number`,$data:!0,error:{message({keyword:e,schemaCode:n}){let r=e===`maxProperties`?`more`:`fewer`;return(0,t.str)`must NOT have ${r} than ${n} properties`},params:({schemaCode:e})=>(0,t._)`{limit: ${e}}`},code(e){let{keyword:n,data:r,schemaCode:i}=e,a=n===`maxProperties`?t.operators.GT:t.operators.LT;e.fail$data((0,t._)`Object.keys(${r}).length ${a} ${i}`)}}})),qo=s((e=>{Object.defineProperty(e,`__esModule`,{value:!0});var t=ho(),n=K(),r=q();e.default={keyword:`required`,type:`object`,schemaType:`array`,$data:!0,error:{message:({params:{missingProperty:e}})=>(0,n.str)`must have required property '${e}'`,params:({params:{missingProperty:e}})=>(0,n._)`{missingProperty: ${e}}`},code(e){let{gen:i,schema:a,schemaCode:o,data:s,$data:c,it:l}=e,{opts:u}=l;if(!c&&a.length===0)return;let d=a.length>=u.loopRequired;if(l.allErrors?f():p(),u.strictRequired){let t=e.parentSchema.properties,{definedProperties:n}=e.it;for(let e of a)if(t?.[e]===void 0&&!n.has(e)){let t=`required property "${e}" is not defined at "${l.schemaEnv.baseId+l.errSchemaPath}" (strictRequired)`;(0,r.checkStrictMode)(l,t,l.opts.strictRequired)}}function f(){if(d||c)e.block$data(n.nil,m);else for(let n of a)(0,t.checkReportMissingProp)(e,n)}function p(){let n=i.let(`missing`);if(d||c){let t=i.let(`valid`,!0);e.block$data(t,()=>h(n,t)),e.ok(t)}else i.if((0,t.checkMissingProp)(e,a,n)),(0,t.reportMissingProp)(e,n),i.else()}function m(){i.forOf(`prop`,o,n=>{e.setParams({missingProperty:n}),i.if((0,t.noPropertyInData)(i,s,n,u.ownProperties),()=>e.error())})}function h(r,a){e.setParams({missingProperty:r}),i.forOf(r,o,()=>{i.assign(a,(0,t.propertyInData)(i,s,r,u.ownProperties)),i.if((0,n.not)(a),()=>{e.error(),i.break()})},n.nil)}}}})),Jo=s((e=>{Object.defineProperty(e,`__esModule`,{value:!0});var t=K();e.default={keyword:[`maxItems`,`minItems`],type:`array`,schemaType:`number`,$data:!0,error:{message({keyword:e,schemaCode:n}){let r=e===`maxItems`?`more`:`fewer`;return(0,t.str)`must NOT have ${r} than ${n} items`},params:({schemaCode:e})=>(0,t._)`{limit: ${e}}`},code(e){let{keyword:n,data:r,schemaCode:i}=e,a=n===`maxItems`?t.operators.GT:t.operators.LT;e.fail$data((0,t._)`${r}.length ${a} ${i}`)}}})),Yo=s((e=>{Object.defineProperty(e,`__esModule`,{value:!0});var t=vo();t.code=`require("ajv/dist/runtime/equal").default`,e.default=t})),Xo=s((e=>{Object.defineProperty(e,`__esModule`,{value:!0});var t=po(),n=K(),r=q(),i=Yo();e.default={keyword:`uniqueItems`,type:`array`,schemaType:`boolean`,$data:!0,error:{message:({params:{i:e,j:t}})=>(0,n.str)`must NOT have duplicate items (items ## ${t} and ${e} are identical)`,params:({params:{i:e,j:t}})=>(0,n._)`{i: ${e}, j: ${t}}`},code(e){let{gen:a,data:o,$data:s,schema:c,parentSchema:l,schemaCode:u,it:d}=e;if(!s&&!c)return;let f=a.let(`valid`),p=l.items?(0,t.getSchemaTypes)(l.items):[];e.block$data(f,m,(0,n._)`${u} === false`),e.ok(f);function m(){let t=a.let(`i`,(0,n._)`${o}.length`),r=a.let(`j`);e.setParams({i:t,j:r}),a.assign(f,!0),a.if((0,n._)`${t} > 1`,()=>(h()?g:_)(t,r))}function h(){return p.length>0&&!p.some(e=>e===`object`||e===`array`)}function g(r,i){let s=a.name(`item`),c=(0,t.checkDataTypes)(p,s,d.opts.strictNumbers,t.DataType.Wrong),l=a.const(`indices`,(0,n._)`{}`);a.for((0,n._)`;${r}--;`,()=>{a.let(s,(0,n._)`${o}[${r}]`),a.if(c,(0,n._)`continue`),p.length>1&&a.if((0,n._)`typeof ${s} == "string"`,(0,n._)`${s} += "_"`),a.if((0,n._)`typeof ${l}[${s}] == "number"`,()=>{a.assign(i,(0,n._)`${l}[${s}]`),e.error(),a.assign(f,!1).break()}).code((0,n._)`${l}[${s}] = ${r}`)})}function _(t,s){let c=(0,r.useFunc)(a,i.default),l=a.name(`outer`);a.label(l).for((0,n._)`;${t}--;`,()=>a.for((0,n._)`${s} = ${t}; ${s}--;`,()=>a.if((0,n._)`${c}(${o}[${t}], ${o}[${s}])`,()=>{e.error(),a.assign(f,!1).break(l)})))}}}})),Zo=s((e=>{Object.defineProperty(e,`__esModule`,{value:!0});var t=K(),n=q(),r=Yo();e.default={keyword:`const`,$data:!0,error:{message:`must be equal to constant`,params:({schemaCode:e})=>(0,t._)`{allowedValue: ${e}}`},code(e){let{gen:i,data:a,$data:o,schemaCode:s,schema:c}=e;o||c&&typeof c==`object`?e.fail$data((0,t._)`!${(0,n.useFunc)(i,r.default)}(${a}, ${s})`):e.fail((0,t._)`${c} !== ${a}`)}}})),Qo=s((e=>{Object.defineProperty(e,`__esModule`,{value:!0});var t=K(),n=q(),r=Yo();e.default={keyword:`enum`,schemaType:`array`,$data:!0,error:{message:`must be equal to one of the allowed values`,params:({schemaCode:e})=>(0,t._)`{allowedValues: ${e}}`},code(e){let{gen:i,data:a,$data:o,schema:s,schemaCode:c,it:l}=e;if(!o&&s.length===0)throw Error(`enum must have non-empty array`);let u=s.length>=l.opts.loopEnum,d,f=()=>d??=(0,n.useFunc)(i,r.default),p;if(u||o)p=i.let(`valid`),e.block$data(p,m);else{if(!Array.isArray(s))throw Error(`ajv implementation error`);let e=i.const(`vSchema`,c);p=(0,t.or)(...s.map((t,n)=>h(e,n)))}e.pass(p);function m(){i.assign(p,!1),i.forOf(`v`,c,e=>i.if((0,t._)`${f()}(${a}, ${e})`,()=>i.assign(p,!0).break()))}function h(e,n){let r=s[n];return typeof r==`object`&&r?(0,t._)`${f()}(${a}, ${e}[${n}])`:(0,t._)`${a} === ${r}`}}}})),$o=s((e=>{Object.defineProperty(e,`__esModule`,{value:!0});var t=Vo(),n=Ho(),r=Wo(),i=Go(),a=Ko(),o=qo(),s=Jo(),c=Xo(),l=Zo(),u=Qo();e.default=[t.default,n.default,r.default,i.default,a.default,o.default,s.default,c.default,{keyword:`type`,schemaType:[`string`,`array`]},{keyword:`nullable`,schemaType:`boolean`},l.default,u.default]})),es=s((e=>{Object.defineProperty(e,`__esModule`,{value:!0}),e.validateAdditionalItems=void 0;var t=K(),n=q(),r={keyword:`additionalItems`,type:`array`,schemaType:[`boolean`,`object`],before:`uniqueItems`,error:{message:({params:{len:e}})=>(0,t.str)`must NOT have more than ${e} items`,params:({params:{len:e}})=>(0,t._)`{limit: ${e}}`},code(e){let{parentSchema:t,it:r}=e,{items:a}=t;if(!Array.isArray(a)){(0,n.checkStrictMode)(r,`"additionalItems" is ignored when "items" is not an array of schemas`);return}i(e,a)}};function i(e,r){let{gen:i,schema:a,data:o,keyword:s,it:c}=e;c.items=!0;let l=i.const(`len`,(0,t._)`${o}.length`);if(a===!1)e.setParams({len:r.length}),e.pass((0,t._)`${l} <= ${r.length}`);else if(typeof a==`object`&&!(0,n.alwaysValidSchema)(c,a)){let n=i.var(`valid`,(0,t._)`${l} <= ${r.length}`);i.if((0,t.not)(n),()=>u(n)),e.ok(n)}function u(a){i.forRange(`i`,r.length,l,r=>{e.subschema({keyword:s,dataProp:r,dataPropType:n.Type.Num},a),c.allErrors||i.if((0,t.not)(a),()=>i.break())})}}e.validateAdditionalItems=i,e.default=r})),ts=s((e=>{Object.defineProperty(e,`__esModule`,{value:!0}),e.validateTuple=void 0;var t=K(),n=q(),r=ho(),i={keyword:`items`,type:`array`,schemaType:[`object`,`array`,`boolean`],before:`uniqueItems`,code(e){let{schema:t,it:i}=e;if(Array.isArray(t))return a(e,`additionalItems`,t);i.items=!0,!(0,n.alwaysValidSchema)(i,t)&&e.ok((0,r.validateArray)(e))}};function a(e,r,i=e.schema){let{gen:a,parentSchema:o,data:s,keyword:c,it:l}=e;f(o),l.opts.unevaluated&&i.length&&l.items!==!0&&(l.items=n.mergeEvaluated.items(a,i.length,l.items));let u=a.name(`valid`),d=a.const(`len`,(0,t._)`${s}.length`);i.forEach((r,i)=>{(0,n.alwaysValidSchema)(l,r)||(a.if((0,t._)`${d} > ${i}`,()=>e.subschema({keyword:c,schemaProp:i,dataProp:i},u)),e.ok(u))});function f(e){let{opts:t,errSchemaPath:a}=l,o=i.length,s=o===e.minItems&&(o===e.maxItems||e[r]===!1);if(t.strictTuples&&!s){let e=`"${c}" is ${o}-tuple, but minItems or maxItems/${r} are not specified or different at path "${a}"`;(0,n.checkStrictMode)(l,e,t.strictTuples)}}}e.validateTuple=a,e.default=i})),ns=s((e=>{Object.defineProperty(e,`__esModule`,{value:!0});var t=ts();e.default={keyword:`prefixItems`,type:`array`,schemaType:[`array`],before:`uniqueItems`,code:e=>(0,t.validateTuple)(e,`items`)}})),rs=s((e=>{Object.defineProperty(e,`__esModule`,{value:!0});var t=K(),n=q(),r=ho(),i=es();e.default={keyword:`items`,type:`array`,schemaType:[`object`,`boolean`],before:`uniqueItems`,error:{message:({params:{len:e}})=>(0,t.str)`must NOT have more than ${e} items`,params:({params:{len:e}})=>(0,t._)`{limit: ${e}}`},code(e){let{schema:t,parentSchema:a,it:o}=e,{prefixItems:s}=a;o.items=!0,!(0,n.alwaysValidSchema)(o,t)&&(s?(0,i.validateAdditionalItems)(e,s):e.ok((0,r.validateArray)(e)))}}})),is=s((e=>{Object.defineProperty(e,`__esModule`,{value:!0});var t=K(),n=q();e.default={keyword:`contains`,type:`array`,schemaType:[`object`,`boolean`],before:`uniqueItems`,trackErrors:!0,error:{message:({params:{min:e,max:n}})=>n===void 0?(0,t.str)`must contain at least ${e} valid item(s)`:(0,t.str)`must contain at least ${e} and no more than ${n} valid item(s)`,params:({params:{min:e,max:n}})=>n===void 0?(0,t._)`{minContains: ${e}}`:(0,t._)`{minContains: ${e}, maxContains: ${n}}`},code(e){let{gen:r,schema:i,parentSchema:a,data:o,it:s}=e,c,l,{minContains:u,maxContains:d}=a;s.opts.next?(c=u===void 0?1:u,l=d):c=1;let f=r.const(`len`,(0,t._)`${o}.length`);if(e.setParams({min:c,max:l}),l===void 0&&c===0){(0,n.checkStrictMode)(s,`"minContains" == 0 without "maxContains": "contains" keyword ignored`);return}if(l!==void 0&&c>l){(0,n.checkStrictMode)(s,`"minContains" > "maxContains" is always invalid`),e.fail();return}if((0,n.alwaysValidSchema)(s,i)){let n=(0,t._)`${f} >= ${c}`;l!==void 0&&(n=(0,t._)`${n} && ${f} <= ${l}`),e.pass(n);return}s.items=!0;let p=r.name(`valid`);l===void 0&&c===1?h(p,()=>r.if(p,()=>r.break())):c===0?(r.let(p,!0),l!==void 0&&r.if((0,t._)`${o}.length > 0`,m)):(r.let(p,!1),m()),e.result(p,()=>e.reset());function m(){let e=r.name(`_valid`),t=r.let(`count`,0);h(e,()=>r.if(e,()=>g(t)))}function h(t,i){r.forRange(`i`,0,f,r=>{e.subschema({keyword:`contains`,dataProp:r,dataPropType:n.Type.Num,compositeRule:!0},t),i()})}function g(e){r.code((0,t._)`${e}++`),l===void 0?r.if((0,t._)`${e} >= ${c}`,()=>r.assign(p,!0).break()):(r.if((0,t._)`${e} > ${l}`,()=>r.assign(p,!1).break()),c===1?r.assign(p,!0):r.if((0,t._)`${e} >= ${c}`,()=>r.assign(p,!0)))}}}})),as=s((e=>{Object.defineProperty(e,`__esModule`,{value:!0}),e.validateSchemaDeps=e.validatePropertyDeps=e.error=void 0;var t=K(),n=q(),r=ho();e.error={message:({params:{property:e,depsCount:n,deps:r}})=>{let i=n===1?`property`:`properties`;return(0,t.str)`must have ${i} ${r} when property ${e} is present`},params:({params:{property:e,depsCount:n,deps:r,missingProperty:i}})=>(0,t._)`{property: ${e},
    missingProperty: ${i},
    depsCount: ${n},
    deps: ${r}}`};var i={keyword:`dependencies`,type:`object`,schemaType:`object`,error:e.error,code(e){let[t,n]=a(e);o(e,t),s(e,n)}};function a({schema:e}){let t={},n={};for(let r in e){if(r===`__proto__`)continue;let i=Array.isArray(e[r])?t:n;i[r]=e[r]}return[t,n]}function o(e,n=e.schema){let{gen:i,data:a,it:o}=e;if(Object.keys(n).length===0)return;let s=i.let(`missing`);for(let c in n){let l=n[c];if(l.length===0)continue;let u=(0,r.propertyInData)(i,a,c,o.opts.ownProperties);e.setParams({property:c,depsCount:l.length,deps:l.join(`, `)}),o.allErrors?i.if(u,()=>{for(let t of l)(0,r.checkReportMissingProp)(e,t)}):(i.if((0,t._)`${u} && (${(0,r.checkMissingProp)(e,l,s)})`),(0,r.reportMissingProp)(e,s),i.else())}}e.validatePropertyDeps=o;function s(e,t=e.schema){let{gen:i,data:a,keyword:o,it:s}=e,c=i.name(`valid`);for(let l in t)(0,n.alwaysValidSchema)(s,t[l])||(i.if((0,r.propertyInData)(i,a,l,s.opts.ownProperties),()=>{let t=e.subschema({keyword:o,schemaProp:l},c);e.mergeValidEvaluated(t,c)},()=>i.var(c,!0)),e.ok(c))}e.validateSchemaDeps=s,e.default=i})),os=s((e=>{Object.defineProperty(e,`__esModule`,{value:!0});var t=K(),n=q();e.default={keyword:`propertyNames`,type:`object`,schemaType:[`object`,`boolean`],error:{message:`property name must be valid`,params:({params:e})=>(0,t._)`{propertyName: ${e.propertyName}}`},code(e){let{gen:r,schema:i,data:a,it:o}=e;if((0,n.alwaysValidSchema)(o,i))return;let s=r.name(`valid`);r.forIn(`key`,a,n=>{e.setParams({propertyName:n}),e.subschema({keyword:`propertyNames`,data:n,dataTypes:[`string`],propertyName:n,compositeRule:!0},s),r.if((0,t.not)(s),()=>{e.error(!0),o.allErrors||r.break()})}),e.ok(s)}}})),ss=s((e=>{Object.defineProperty(e,`__esModule`,{value:!0});var t=ho(),n=K(),r=so(),i=q();e.default={keyword:`additionalProperties`,type:[`object`],schemaType:[`boolean`,`object`],allowUndefined:!0,trackErrors:!0,error:{message:`must NOT have additional properties`,params:({params:e})=>(0,n._)`{additionalProperty: ${e.additionalProperty}}`},code(e){let{gen:a,schema:o,parentSchema:s,data:c,errsCount:l,it:u}=e;if(!l)throw Error(`ajv implementation error`);let{allErrors:d,opts:f}=u;if(u.props=!0,f.removeAdditional!==`all`&&(0,i.alwaysValidSchema)(u,o))return;let p=(0,t.allSchemaProperties)(s.properties),m=(0,t.allSchemaProperties)(s.patternProperties);h(),e.ok((0,n._)`${l} === ${r.default.errors}`);function h(){a.forIn(`key`,c,e=>{!p.length&&!m.length?v(e):a.if(g(e),()=>v(e))})}function g(r){let o;if(p.length>8){let e=(0,i.schemaRefOrVal)(u,s.properties,`properties`);o=(0,t.isOwnProperty)(a,e,r)}else o=p.length?(0,n.or)(...p.map(e=>(0,n._)`${r} === ${e}`)):n.nil;return m.length&&(o=(0,n.or)(o,...m.map(i=>(0,n._)`${(0,t.usePattern)(e,i)}.test(${r})`))),(0,n.not)(o)}function _(e){a.code((0,n._)`delete ${c}[${e}]`)}function v(t){if(f.removeAdditional===`all`||f.removeAdditional&&o===!1){_(t);return}if(o===!1){e.setParams({additionalProperty:t}),e.error(),d||a.break();return}if(typeof o==`object`&&!(0,i.alwaysValidSchema)(u,o)){let r=a.name(`valid`);f.removeAdditional===`failing`?(y(t,r,!1),a.if((0,n.not)(r),()=>{e.reset(),_(t)})):(y(t,r),d||a.if((0,n.not)(r),()=>a.break()))}}function y(t,n,r){let a={keyword:`additionalProperties`,dataProp:t,dataPropType:i.Type.Str};r===!1&&Object.assign(a,{compositeRule:!0,createErrors:!1,allErrors:!1}),e.subschema(a,n)}}}})),cs=s((e=>{Object.defineProperty(e,`__esModule`,{value:!0});var t=xo(),n=ho(),r=q(),i=ss();e.default={keyword:`properties`,type:`object`,schemaType:`object`,code(e){let{gen:a,schema:o,parentSchema:s,data:c,it:l}=e;l.opts.removeAdditional===`all`&&s.additionalProperties===void 0&&i.default.code(new t.KeywordCxt(l,i.default,`additionalProperties`));let u=(0,n.allSchemaProperties)(o);for(let e of u)l.definedProperties.add(e);l.opts.unevaluated&&u.length&&l.props!==!0&&(l.props=r.mergeEvaluated.props(a,(0,r.toHash)(u),l.props));let d=u.filter(e=>!(0,r.alwaysValidSchema)(l,o[e]));if(d.length===0)return;let f=a.name(`valid`);for(let t of d)p(t)?m(t):(a.if((0,n.propertyInData)(a,c,t,l.opts.ownProperties)),m(t),l.allErrors||a.else().var(f,!0),a.endIf()),e.it.definedProperties.add(t),e.ok(f);function p(e){return l.opts.useDefaults&&!l.compositeRule&&o[e].default!==void 0}function m(t){e.subschema({keyword:`properties`,schemaProp:t,dataProp:t},f)}}}})),ls=s((e=>{Object.defineProperty(e,`__esModule`,{value:!0});var t=ho(),n=K(),r=q(),i=q();e.default={keyword:`patternProperties`,type:`object`,schemaType:`object`,code(e){let{gen:a,schema:o,data:s,parentSchema:c,it:l}=e,{opts:u}=l,d=(0,t.allSchemaProperties)(o),f=d.filter(e=>(0,r.alwaysValidSchema)(l,o[e]));if(d.length===0||f.length===d.length&&(!l.opts.unevaluated||l.props===!0))return;let p=u.strictSchema&&!u.allowMatchingProperties&&c.properties,m=a.name(`valid`);l.props!==!0&&!(l.props instanceof n.Name)&&(l.props=(0,i.evaluatedPropsToName)(a,l.props));let{props:h}=l;g();function g(){for(let e of d)p&&_(e),l.allErrors?v(e):(a.var(m,!0),v(e),a.if(m))}function _(e){for(let t in p)new RegExp(e).test(t)&&(0,r.checkStrictMode)(l,`property ${t} matches pattern ${e} (use allowMatchingProperties)`)}function v(r){a.forIn(`key`,s,o=>{a.if((0,n._)`${(0,t.usePattern)(e,r)}.test(${o})`,()=>{let t=f.includes(r);t||e.subschema({keyword:`patternProperties`,schemaProp:r,dataProp:o,dataPropType:i.Type.Str},m),l.opts.unevaluated&&h!==!0?a.assign((0,n._)`${h}[${o}]`,!0):!t&&!l.allErrors&&a.if((0,n.not)(m),()=>a.break())})})}}}})),us=s((e=>{Object.defineProperty(e,`__esModule`,{value:!0});var t=q();e.default={keyword:`not`,schemaType:[`object`,`boolean`],trackErrors:!0,code(e){let{gen:n,schema:r,it:i}=e;if((0,t.alwaysValidSchema)(i,r)){e.fail();return}let a=n.name(`valid`);e.subschema({keyword:`not`,compositeRule:!0,createErrors:!1,allErrors:!1},a),e.failResult(a,()=>e.reset(),()=>e.error())},error:{message:`must NOT be valid`}}})),ds=s((e=>{Object.defineProperty(e,`__esModule`,{value:!0}),e.default={keyword:`anyOf`,schemaType:`array`,trackErrors:!0,code:ho().validateUnion,error:{message:`must match a schema in anyOf`}}})),fs=s((e=>{Object.defineProperty(e,`__esModule`,{value:!0});var t=K(),n=q();e.default={keyword:`oneOf`,schemaType:`array`,trackErrors:!0,error:{message:`must match exactly one schema in oneOf`,params:({params:e})=>(0,t._)`{passingSchemas: ${e.passing}}`},code(e){let{gen:r,schema:i,parentSchema:a,it:o}=e;if(!Array.isArray(i))throw Error(`ajv implementation error`);if(o.opts.discriminator&&a.discriminator)return;let s=i,c=r.let(`valid`,!1),l=r.let(`passing`,null),u=r.name(`_valid`);e.setParams({passing:l}),r.block(d),e.result(c,()=>e.reset(),()=>e.error(!0));function d(){s.forEach((i,a)=>{let s;(0,n.alwaysValidSchema)(o,i)?r.var(u,!0):s=e.subschema({keyword:`oneOf`,schemaProp:a,compositeRule:!0},u),a>0&&r.if((0,t._)`${u} && ${c}`).assign(c,!1).assign(l,(0,t._)`[${l}, ${a}]`).else(),r.if(u,()=>{r.assign(c,!0),r.assign(l,a),s&&e.mergeEvaluated(s,t.Name)})})}}}})),ps=s((e=>{Object.defineProperty(e,`__esModule`,{value:!0});var t=q();e.default={keyword:`allOf`,schemaType:`array`,code(e){let{gen:n,schema:r,it:i}=e;if(!Array.isArray(r))throw Error(`ajv implementation error`);let a=n.name(`valid`);r.forEach((n,r)=>{if((0,t.alwaysValidSchema)(i,n))return;let o=e.subschema({keyword:`allOf`,schemaProp:r},a);e.ok(a),e.mergeEvaluated(o)})}}})),ms=s((e=>{Object.defineProperty(e,`__esModule`,{value:!0});var t=K(),n=q(),r={keyword:`if`,schemaType:[`object`,`boolean`],trackErrors:!0,error:{message:({params:e})=>(0,t.str)`must match "${e.ifClause}" schema`,params:({params:e})=>(0,t._)`{failingKeyword: ${e.ifClause}}`},code(e){let{gen:r,parentSchema:a,it:o}=e;a.then===void 0&&a.else===void 0&&(0,n.checkStrictMode)(o,`"if" without "then" and "else" is ignored`);let s=i(o,`then`),c=i(o,`else`);if(!s&&!c)return;let l=r.let(`valid`,!0),u=r.name(`_valid`);if(d(),e.reset(),s&&c){let t=r.let(`ifClause`);e.setParams({ifClause:t}),r.if(u,f(`then`,t),f(`else`,t))}else s?r.if(u,f(`then`)):r.if((0,t.not)(u),f(`else`));e.pass(l,()=>e.error(!0));function d(){let t=e.subschema({keyword:`if`,compositeRule:!0,createErrors:!1,allErrors:!1},u);e.mergeEvaluated(t)}function f(n,i){return()=>{let a=e.subschema({keyword:n},u);r.assign(l,u),e.mergeValidEvaluated(a,l),i?r.assign(i,(0,t._)`${n}`):e.setParams({ifClause:n})}}}};function i(e,t){let r=e.schema[t];return r!==void 0&&!(0,n.alwaysValidSchema)(e,r)}e.default=r})),hs=s((e=>{Object.defineProperty(e,`__esModule`,{value:!0});var t=q();e.default={keyword:[`then`,`else`],schemaType:[`object`,`boolean`],code({keyword:e,parentSchema:n,it:r}){n.if===void 0&&(0,t.checkStrictMode)(r,`"${e}" without "if" is ignored`)}}})),gs=s((e=>{Object.defineProperty(e,`__esModule`,{value:!0});var t=es(),n=ns(),r=ts(),i=rs(),a=is(),o=as(),s=os(),c=ss(),l=cs(),u=ls(),d=us(),f=ds(),p=fs(),m=ps(),h=ms(),g=hs();function _(e=!1){let _=[d.default,f.default,p.default,m.default,h.default,g.default,s.default,c.default,o.default,l.default,u.default];return e?_.push(n.default,i.default):_.push(t.default,r.default),_.push(a.default),_}e.default=_})),_s=s((e=>{Object.defineProperty(e,`__esModule`,{value:!0}),e.dynamicAnchor=void 0;var t=K(),n=so(),r=wo(),i=zo(),a={keyword:`$dynamicAnchor`,schemaType:`string`,code:e=>o(e,e.schema)};function o(e,r){let{gen:i,it:a}=e;a.schemaEnv.root.dynamicAnchors[r]=!0;let o=(0,t._)`${n.default.dynamicAnchors}${(0,t.getProperty)(r)}`,c=a.errSchemaPath===`#`?a.validateName:s(e);i.if((0,t._)`!${o}`,()=>i.assign(o,c))}e.dynamicAnchor=o;function s(e){let{schemaEnv:t,schema:n,self:a}=e.it,{root:o,baseId:s,localRefs:c,meta:l}=t.root,{schemaId:u}=a.opts,d=new r.SchemaEnv({schema:n,schemaId:u,root:o,baseId:s,localRefs:c,meta:l});return r.compileSchema.call(a,d),(0,i.getValidate)(e,d)}e.default=a})),vs=s((e=>{Object.defineProperty(e,`__esModule`,{value:!0}),e.dynamicRef=void 0;var t=K(),n=so(),r=zo(),i={keyword:`$dynamicRef`,schemaType:`string`,code:e=>a(e,e.schema)};function a(e,i){let{gen:a,keyword:o,it:s}=e;if(i[0]!==`#`)throw Error(`"${o}" only supports hash fragment reference`);let c=i.slice(1);if(s.allErrors)l();else{let t=a.let(`valid`,!1);l(t),e.ok(t)}function l(e){if(s.schemaEnv.root.dynamicAnchors[c]){let r=a.let(`_v`,(0,t._)`${n.default.dynamicAnchors}${(0,t.getProperty)(c)}`);a.if(r,u(r,e),u(s.validateName,e))}else u(s.validateName,e)()}function u(t,n){return n?()=>a.block(()=>{(0,r.callRef)(e,t),a.let(n,!0)}):()=>(0,r.callRef)(e,t)}}e.dynamicRef=a,e.default=i})),ys=s((e=>{Object.defineProperty(e,`__esModule`,{value:!0});var t=_s(),n=q();e.default={keyword:`$recursiveAnchor`,schemaType:`boolean`,code(e){e.schema?(0,t.dynamicAnchor)(e,``):(0,n.checkStrictMode)(e.it,`$recursiveAnchor: false is ignored`)}}})),bs=s((e=>{Object.defineProperty(e,`__esModule`,{value:!0});var t=vs();e.default={keyword:`$recursiveRef`,schemaType:`string`,code:e=>(0,t.dynamicRef)(e,e.schema)}})),xs=s((e=>{Object.defineProperty(e,`__esModule`,{value:!0});var t=_s(),n=vs(),r=ys(),i=bs();e.default=[t.default,n.default,r.default,i.default]})),Ss=s((e=>{Object.defineProperty(e,`__esModule`,{value:!0});var t=as();e.default={keyword:`dependentRequired`,type:`object`,schemaType:`object`,error:t.error,code:e=>(0,t.validatePropertyDeps)(e)}})),Cs=s((e=>{Object.defineProperty(e,`__esModule`,{value:!0});var t=as();e.default={keyword:`dependentSchemas`,type:`object`,schemaType:`object`,code:e=>(0,t.validateSchemaDeps)(e)}})),ws=s((e=>{Object.defineProperty(e,`__esModule`,{value:!0});var t=q();e.default={keyword:[`maxContains`,`minContains`],type:`array`,schemaType:`number`,code({keyword:e,parentSchema:n,it:r}){n.contains===void 0&&(0,t.checkStrictMode)(r,`"${e}" without "contains" is ignored`)}}})),Ts=s((e=>{Object.defineProperty(e,`__esModule`,{value:!0});var t=Ss(),n=Cs(),r=ws();e.default=[t.default,n.default,r.default]})),Es=s((e=>{Object.defineProperty(e,`__esModule`,{value:!0});var t=K(),n=q(),r=so();e.default={keyword:`unevaluatedProperties`,type:`object`,schemaType:[`boolean`,`object`],trackErrors:!0,error:{message:`must NOT have unevaluated properties`,params:({params:e})=>(0,t._)`{unevaluatedProperty: ${e.unevaluatedProperty}}`},code(e){let{gen:i,schema:a,data:o,errsCount:s,it:c}=e;if(!s)throw Error(`ajv implementation error`);let{allErrors:l,props:u}=c;u instanceof t.Name?i.if((0,t._)`${u} !== true`,()=>i.forIn(`key`,o,e=>i.if(f(u,e),()=>d(e)))):u!==!0&&i.forIn(`key`,o,e=>u===void 0?d(e):i.if(p(u,e),()=>d(e))),c.props=!0,e.ok((0,t._)`${s} === ${r.default.errors}`);function d(r){if(a===!1){e.setParams({unevaluatedProperty:r}),e.error(),l||i.break();return}if(!(0,n.alwaysValidSchema)(c,a)){let a=i.name(`valid`);e.subschema({keyword:`unevaluatedProperties`,dataProp:r,dataPropType:n.Type.Str},a),l||i.if((0,t.not)(a),()=>i.break())}}function f(e,n){return(0,t._)`!${e} || !${e}[${n}]`}function p(e,n){let r=[];for(let i in e)e[i]===!0&&r.push((0,t._)`${n} !== ${i}`);return(0,t.and)(...r)}}}})),Ds=s((e=>{Object.defineProperty(e,`__esModule`,{value:!0});var t=K(),n=q();e.default={keyword:`unevaluatedItems`,type:`array`,schemaType:[`boolean`,`object`],error:{message:({params:{len:e}})=>(0,t.str)`must NOT have more than ${e} items`,params:({params:{len:e}})=>(0,t._)`{limit: ${e}}`},code(e){let{gen:r,schema:i,data:a,it:o}=e,s=o.items||0;if(s===!0)return;let c=r.const(`len`,(0,t._)`${a}.length`);if(i===!1)e.setParams({len:s}),e.fail((0,t._)`${c} > ${s}`);else if(typeof i==`object`&&!(0,n.alwaysValidSchema)(o,i)){let n=r.var(`valid`,(0,t._)`${c} <= ${s}`);r.if((0,t.not)(n),()=>l(n,s)),e.ok(n)}o.items=!0;function l(i,a){r.forRange(`i`,a,c,a=>{e.subschema({keyword:`unevaluatedItems`,dataProp:a,dataPropType:n.Type.Num},i),o.allErrors||r.if((0,t.not)(i),()=>r.break())})}}}})),Os=s((e=>{Object.defineProperty(e,`__esModule`,{value:!0});var t=Es(),n=Ds();e.default=[t.default,n.default]})),ks=s((e=>{Object.defineProperty(e,`__esModule`,{value:!0});var t=K();e.default={keyword:`format`,type:[`number`,`string`],schemaType:`string`,$data:!0,error:{message:({schemaCode:e})=>(0,t.str)`must match format "${e}"`,params:({schemaCode:e})=>(0,t._)`{format: ${e}}`},code(e,n){let{gen:r,data:i,$data:a,schema:o,schemaCode:s,it:c}=e,{opts:l,errSchemaPath:u,schemaEnv:d,self:f}=c;if(!l.validateFormats)return;a?p():m();function p(){let a=r.scopeValue(`formats`,{ref:f.formats,code:l.code.formats}),o=r.const(`fDef`,(0,t._)`${a}[${s}]`),c=r.let(`fType`),u=r.let(`format`);r.if((0,t._)`typeof ${o} == "object" && !(${o} instanceof RegExp)`,()=>r.assign(c,(0,t._)`${o}.type || "string"`).assign(u,(0,t._)`${o}.validate`),()=>r.assign(c,(0,t._)`"string"`).assign(u,o)),e.fail$data((0,t.or)(p(),m()));function p(){return l.strictSchema===!1?t.nil:(0,t._)`${s} && !${u}`}function m(){let e=d.$async?(0,t._)`(${o}.async ? await ${u}(${i}) : ${u}(${i}))`:(0,t._)`${u}(${i})`,r=(0,t._)`(typeof ${u} == "function" ? ${e} : ${u}.test(${i}))`;return(0,t._)`${u} && ${u} !== true && ${c} === ${n} && !${r}`}}function m(){let a=f.formats[o];if(!a){m();return}if(a===!0)return;let[s,c,p]=h(a);s===n&&e.pass(g());function m(){if(l.strictSchema===!1){f.logger.warn(e());return}throw Error(e());function e(){return`unknown format "${o}" ignored in schema at path "${u}"`}}function h(e){let n=e instanceof RegExp?(0,t.regexpCode)(e):l.code.formats?(0,t._)`${l.code.formats}${(0,t.getProperty)(o)}`:void 0,i=r.scopeValue(`formats`,{key:o,ref:e,code:n});return typeof e==`object`&&!(e instanceof RegExp)?[e.type||`string`,e.validate,(0,t._)`${i}.validate`]:[`string`,e,i]}function g(){if(typeof a==`object`&&!(a instanceof RegExp)&&a.async){if(!d.$async)throw Error(`async format in sync schema`);return(0,t._)`await ${p}(${i})`}return typeof c==`function`?(0,t._)`${p}(${i})`:(0,t._)`${p}.test(${i})`}}}}})),As=s((e=>{Object.defineProperty(e,`__esModule`,{value:!0}),e.default=[ks().default]})),js=s((e=>{Object.defineProperty(e,`__esModule`,{value:!0}),e.contentVocabulary=e.metadataVocabulary=void 0,e.metadataVocabulary=[`title`,`description`,`default`,`deprecated`,`readOnly`,`writeOnly`,`examples`],e.contentVocabulary=[`contentMediaType`,`contentEncoding`,`contentSchema`]})),Ms=s((e=>{Object.defineProperty(e,`__esModule`,{value:!0});var t=Bo(),n=$o(),r=gs(),i=xs(),a=Ts(),o=Os(),s=As(),c=js();e.default=[i.default,t.default,n.default,(0,r.default)(!0),s.default,c.metadataVocabulary,c.contentVocabulary,a.default,o.default]})),Ns=s((e=>{Object.defineProperty(e,`__esModule`,{value:!0}),e.DiscrError=void 0;var t;(function(e){e.Tag=`tag`,e.Mapping=`mapping`})(t||(e.DiscrError=t={}))})),Ps=s((e=>{Object.defineProperty(e,`__esModule`,{value:!0});var t=K(),n=Ns(),r=wo(),i=Co(),a=q();e.default={keyword:`discriminator`,type:`object`,schemaType:`object`,error:{message:({params:{discrError:e,tagName:t}})=>e===n.DiscrError.Tag?`tag "${t}" must be string`:`value of tag "${t}" must be in oneOf`,params:({params:{discrError:e,tag:n,tagName:r}})=>(0,t._)`{error: ${e}, tag: ${r}, tagValue: ${n}}`},code(e){let{gen:o,data:s,schema:c,parentSchema:l,it:u}=e,{oneOf:d}=l;if(!u.opts.discriminator)throw Error(`discriminator: requires discriminator option`);let f=c.propertyName;if(typeof f!=`string`)throw Error(`discriminator: requires propertyName`);if(c.mapping)throw Error(`discriminator: mapping is not supported`);if(!d)throw Error(`discriminator: requires oneOf keyword`);let p=o.let(`valid`,!1),m=o.const(`tag`,(0,t._)`${s}${(0,t.getProperty)(f)}`);o.if((0,t._)`typeof ${m} == "string"`,()=>h(),()=>e.error(!1,{discrError:n.DiscrError.Tag,tag:m,tagName:f})),e.ok(p);function h(){let r=_();o.if(!1);for(let e in r)o.elseIf((0,t._)`${m} === ${e}`),o.assign(p,g(r[e]));o.else(),e.error(!1,{discrError:n.DiscrError.Mapping,tag:m,tagName:f}),o.endIf()}function g(n){let r=o.name(`valid`),i=e.subschema({keyword:`oneOf`,schemaProp:n},r);return e.mergeEvaluated(i,t.Name),r}function _(){let e={},t=o(l),n=!0;for(let e=0;e<d.length;e++){let c=d[e];if(c?.$ref&&!(0,a.schemaHasRulesButRef)(c,u.self.RULES)){let e=c.$ref;if(c=r.resolveRef.call(u.self,u.schemaEnv.root,u.baseId,e),c instanceof r.SchemaEnv&&(c=c.schema),c===void 0)throw new i.default(u.opts.uriResolver,u.baseId,e)}let l=c?.properties?.[f];if(typeof l!=`object`)throw Error(`discriminator: oneOf subschemas (or referenced schemas) must have "properties/${f}"`);n&&=t||o(c),s(l,e)}if(!n)throw Error(`discriminator: "${f}" must be required`);return e;function o({required:e}){return Array.isArray(e)&&e.includes(f)}function s(e,t){if(e.const)c(e.const,t);else if(e.enum)for(let n of e.enum)c(n,t);else throw Error(`discriminator: "properties/${f}" must have "const" or "enum"`)}function c(t,n){if(typeof t!=`string`||t in e)throw Error(`discriminator: "${f}" values must be unique strings`);e[t]=n}}}}})),Fs=c({$comment:()=>Us,$dynamicAnchor:()=>zs,$id:()=>Ls,$schema:()=>Is,$vocabulary:()=>Rs,allOf:()=>Vs,default:()=>Gs,properties:()=>Ws,title:()=>Bs,type:()=>Hs}),Is,Ls,Rs,zs,Bs,Vs,Hs,Us,Ws,Gs,Ks=o((()=>{Is=`https://json-schema.org/draft/2020-12/schema`,Ls=`https://json-schema.org/draft/2020-12/schema`,Rs={"https://json-schema.org/draft/2020-12/vocab/core":!0,"https://json-schema.org/draft/2020-12/vocab/applicator":!0,"https://json-schema.org/draft/2020-12/vocab/unevaluated":!0,"https://json-schema.org/draft/2020-12/vocab/validation":!0,"https://json-schema.org/draft/2020-12/vocab/meta-data":!0,"https://json-schema.org/draft/2020-12/vocab/format-annotation":!0,"https://json-schema.org/draft/2020-12/vocab/content":!0},zs=`meta`,Bs=`Core and Validation specifications meta-schema`,Vs=[{$ref:`meta/core`},{$ref:`meta/applicator`},{$ref:`meta/unevaluated`},{$ref:`meta/validation`},{$ref:`meta/meta-data`},{$ref:`meta/format-annotation`},{$ref:`meta/content`}],Hs=[`object`,`boolean`],Us=`This meta-schema also defines keywords that have appeared in previous drafts in order to prevent incompatible extensions as they remain in common use.`,Ws={definitions:{$comment:`"definitions" has been replaced by "$defs".`,type:`object`,additionalProperties:{$dynamicRef:`#meta`},deprecated:!0,default:{}},dependencies:{$comment:`"dependencies" has been split and replaced by "dependentSchemas" and "dependentRequired" in order to serve their differing semantics.`,type:`object`,additionalProperties:{anyOf:[{$dynamicRef:`#meta`},{$ref:`meta/validation#/$defs/stringArray`}]},deprecated:!0,default:{}},$recursiveAnchor:{$comment:`"$recursiveAnchor" has been replaced by "$dynamicAnchor".`,$ref:`meta/core#/$defs/anchorString`,deprecated:!0},$recursiveRef:{$comment:`"$recursiveRef" has been replaced by "$dynamicRef".`,$ref:`meta/core#/$defs/uriReferenceString`,deprecated:!0}},Gs={$schema:Is,$id:Ls,$vocabulary:Rs,$dynamicAnchor:zs,title:Bs,allOf:Vs,type:Hs,$comment:Us,properties:Ws}})),qs=c({$defs:()=>tc,$dynamicAnchor:()=>Zs,$id:()=>Ys,$schema:()=>Js,$vocabulary:()=>Xs,default:()=>nc,properties:()=>ec,title:()=>Qs,type:()=>$s}),Js,Ys,Xs,Zs,Qs,$s,ec,tc,nc,rc=o((()=>{Js=`https://json-schema.org/draft/2020-12/schema`,Ys=`https://json-schema.org/draft/2020-12/meta/applicator`,Xs={"https://json-schema.org/draft/2020-12/vocab/applicator":!0},Zs=`meta`,Qs=`Applicator vocabulary meta-schema`,$s=[`object`,`boolean`],ec={prefixItems:{$ref:`#/$defs/schemaArray`},items:{$dynamicRef:`#meta`},contains:{$dynamicRef:`#meta`},additionalProperties:{$dynamicRef:`#meta`},properties:{type:`object`,additionalProperties:{$dynamicRef:`#meta`},default:{}},patternProperties:{type:`object`,additionalProperties:{$dynamicRef:`#meta`},propertyNames:{format:`regex`},default:{}},dependentSchemas:{type:`object`,additionalProperties:{$dynamicRef:`#meta`},default:{}},propertyNames:{$dynamicRef:`#meta`},if:{$dynamicRef:`#meta`},then:{$dynamicRef:`#meta`},else:{$dynamicRef:`#meta`},allOf:{$ref:`#/$defs/schemaArray`},anyOf:{$ref:`#/$defs/schemaArray`},oneOf:{$ref:`#/$defs/schemaArray`},not:{$dynamicRef:`#meta`}},tc={schemaArray:{type:`array`,minItems:1,items:{$dynamicRef:`#meta`}}},nc={$schema:Js,$id:Ys,$vocabulary:Xs,$dynamicAnchor:Zs,title:Qs,type:$s,properties:ec,$defs:tc}})),ic=c({$dynamicAnchor:()=>cc,$id:()=>oc,$schema:()=>ac,$vocabulary:()=>sc,default:()=>fc,properties:()=>dc,title:()=>lc,type:()=>uc}),ac,oc,sc,cc,lc,uc,dc,fc,pc=o((()=>{ac=`https://json-schema.org/draft/2020-12/schema`,oc=`https://json-schema.org/draft/2020-12/meta/unevaluated`,sc={"https://json-schema.org/draft/2020-12/vocab/unevaluated":!0},cc=`meta`,lc=`Unevaluated applicator vocabulary meta-schema`,uc=[`object`,`boolean`],dc={unevaluatedItems:{$dynamicRef:`#meta`},unevaluatedProperties:{$dynamicRef:`#meta`}},fc={$schema:ac,$id:oc,$vocabulary:sc,$dynamicAnchor:cc,title:lc,type:uc,properties:dc}})),mc=c({$dynamicAnchor:()=>vc,$id:()=>gc,$schema:()=>hc,$vocabulary:()=>_c,default:()=>Sc,properties:()=>xc,title:()=>yc,type:()=>bc}),hc,gc,_c,vc,yc,bc,xc,Sc,Cc=o((()=>{hc=`https://json-schema.org/draft/2020-12/schema`,gc=`https://json-schema.org/draft/2020-12/meta/content`,_c={"https://json-schema.org/draft/2020-12/vocab/content":!0},vc=`meta`,yc=`Content vocabulary meta-schema`,bc=[`object`,`boolean`],xc={contentEncoding:{type:`string`},contentMediaType:{type:`string`},contentSchema:{$dynamicRef:`#meta`}},Sc={$schema:hc,$id:gc,$vocabulary:_c,$dynamicAnchor:vc,title:yc,type:bc,properties:xc}})),wc=c({$defs:()=>Mc,$dynamicAnchor:()=>Oc,$id:()=>Ec,$schema:()=>Tc,$vocabulary:()=>Dc,default:()=>Nc,properties:()=>jc,title:()=>kc,type:()=>Ac}),Tc,Ec,Dc,Oc,kc,Ac,jc,Mc,Nc,Pc=o((()=>{Tc=`https://json-schema.org/draft/2020-12/schema`,Ec=`https://json-schema.org/draft/2020-12/meta/core`,Dc={"https://json-schema.org/draft/2020-12/vocab/core":!0},Oc=`meta`,kc=`Core vocabulary meta-schema`,Ac=[`object`,`boolean`],jc={$id:{$ref:`#/$defs/uriReferenceString`,$comment:`Non-empty fragments not allowed.`,pattern:`^[^#]*#?$`},$schema:{$ref:`#/$defs/uriString`},$ref:{$ref:`#/$defs/uriReferenceString`},$anchor:{$ref:`#/$defs/anchorString`},$dynamicRef:{$ref:`#/$defs/uriReferenceString`},$dynamicAnchor:{$ref:`#/$defs/anchorString`},$vocabulary:{type:`object`,propertyNames:{$ref:`#/$defs/uriString`},additionalProperties:{type:`boolean`}},$comment:{type:`string`},$defs:{type:`object`,additionalProperties:{$dynamicRef:`#meta`}}},Mc={anchorString:{type:`string`,pattern:`^[A-Za-z_][-A-Za-z0-9._]*$`},uriString:{type:`string`,format:`uri`},uriReferenceString:{type:`string`,format:`uri-reference`}},Nc={$schema:Tc,$id:Ec,$vocabulary:Dc,$dynamicAnchor:Oc,title:kc,type:Ac,properties:jc,$defs:Mc}})),Fc=c({$dynamicAnchor:()=>zc,$id:()=>Lc,$schema:()=>Ic,$vocabulary:()=>Rc,default:()=>Uc,properties:()=>Hc,title:()=>Bc,type:()=>Vc}),Ic,Lc,Rc,zc,Bc,Vc,Hc,Uc,Wc=o((()=>{Ic=`https://json-schema.org/draft/2020-12/schema`,Lc=`https://json-schema.org/draft/2020-12/meta/format-annotation`,Rc={"https://json-schema.org/draft/2020-12/vocab/format-annotation":!0},zc=`meta`,Bc=`Format vocabulary meta-schema for annotation results`,Vc=[`object`,`boolean`],Hc={format:{type:`string`}},Uc={$schema:Ic,$id:Lc,$vocabulary:Rc,$dynamicAnchor:zc,title:Bc,type:Vc,properties:Hc}})),Gc=c({$dynamicAnchor:()=>Yc,$id:()=>qc,$schema:()=>Kc,$vocabulary:()=>Jc,default:()=>$c,properties:()=>Qc,title:()=>Xc,type:()=>Zc}),Kc,qc,Jc,Yc,Xc,Zc,Qc,$c,el=o((()=>{Kc=`https://json-schema.org/draft/2020-12/schema`,qc=`https://json-schema.org/draft/2020-12/meta/meta-data`,Jc={"https://json-schema.org/draft/2020-12/vocab/meta-data":!0},Yc=`meta`,Xc=`Meta-data vocabulary meta-schema`,Zc=[`object`,`boolean`],Qc={title:{type:`string`},description:{type:`string`},default:!0,deprecated:{type:`boolean`,default:!1},readOnly:{type:`boolean`,default:!1},writeOnly:{type:`boolean`,default:!1},examples:{type:`array`,items:!0}},$c={$schema:Kc,$id:qc,$vocabulary:Jc,$dynamicAnchor:Yc,title:Xc,type:Zc,properties:Qc}})),tl=c({$defs:()=>ll,$dynamicAnchor:()=>al,$id:()=>rl,$schema:()=>nl,$vocabulary:()=>il,default:()=>ul,properties:()=>cl,title:()=>ol,type:()=>sl}),nl,rl,il,al,ol,sl,cl,ll,ul,dl=o((()=>{nl=`https://json-schema.org/draft/2020-12/schema`,rl=`https://json-schema.org/draft/2020-12/meta/validation`,il={"https://json-schema.org/draft/2020-12/vocab/validation":!0},al=`meta`,ol=`Validation vocabulary meta-schema`,sl=[`object`,`boolean`],cl={type:{anyOf:[{$ref:`#/$defs/simpleTypes`},{type:`array`,items:{$ref:`#/$defs/simpleTypes`},minItems:1,uniqueItems:!0}]},const:!0,enum:{type:`array`,items:!0},multipleOf:{type:`number`,exclusiveMinimum:0},maximum:{type:`number`},exclusiveMaximum:{type:`number`},minimum:{type:`number`},exclusiveMinimum:{type:`number`},maxLength:{$ref:`#/$defs/nonNegativeInteger`},minLength:{$ref:`#/$defs/nonNegativeIntegerDefault0`},pattern:{type:`string`,format:`regex`},maxItems:{$ref:`#/$defs/nonNegativeInteger`},minItems:{$ref:`#/$defs/nonNegativeIntegerDefault0`},uniqueItems:{type:`boolean`,default:!1},maxContains:{$ref:`#/$defs/nonNegativeInteger`},minContains:{$ref:`#/$defs/nonNegativeInteger`,default:1},maxProperties:{$ref:`#/$defs/nonNegativeInteger`},minProperties:{$ref:`#/$defs/nonNegativeIntegerDefault0`},required:{$ref:`#/$defs/stringArray`},dependentRequired:{type:`object`,additionalProperties:{$ref:`#/$defs/stringArray`}}},ll={nonNegativeInteger:{type:`integer`,minimum:0},nonNegativeIntegerDefault0:{$ref:`#/$defs/nonNegativeInteger`,default:0},simpleTypes:{enum:[`array`,`boolean`,`integer`,`null`,`number`,`object`,`string`]},stringArray:{type:`array`,items:{type:`string`},uniqueItems:!0,default:[]}},ul={$schema:nl,$id:rl,$vocabulary:il,$dynamicAnchor:al,title:ol,type:sl,properties:cl,$defs:ll}})),fl=s((e=>{Object.defineProperty(e,`__esModule`,{value:!0});var t=(Ks(),d(Fs).default),n=(rc(),d(qs).default),r=(pc(),d(ic).default),i=(Cc(),d(mc).default),a=(Pc(),d(wc).default),o=(Wc(),d(Fc).default),s=(el(),d(Gc).default),c=(dl(),d(tl).default),l=[`/properties`];function u(e){return[t,n,r,i,a,u(this,o),s,u(this,c)].forEach(e=>this.addMetaSchema(e,void 0,!1)),this;function u(t,n){return e?t.$dataMetaSchema(n,l):n}}e.default=u})),pl=s(((e,t)=>{Object.defineProperty(e,`__esModule`,{value:!0}),e.MissingRefError=e.ValidationError=e.CodeGen=e.Name=e.nil=e.stringify=e.str=e._=e.KeywordCxt=e.Ajv2020=void 0;var n=Lo(),r=Ms(),i=Ps(),a=fl(),o=`https://json-schema.org/draft/2020-12/schema`,s=class extends n.default{constructor(e={}){super({...e,dynamicRef:!0,next:!0,unevaluated:!0})}_addVocabularies(){super._addVocabularies(),r.default.forEach(e=>this.addVocabulary(e)),this.opts.discriminator&&this.addKeyword(i.default)}_addDefaultMetaSchema(){super._addDefaultMetaSchema();let{$data:e,meta:t}=this.opts;t&&(a.default.call(this,e),this.refs[`http://json-schema.org/schema`]=o)}defaultMeta(){return this.opts.defaultMeta=super.defaultMeta()||(this.getSchema(o)?o:void 0)}};e.Ajv2020=s,t.exports=e=s,t.exports.Ajv2020=s,Object.defineProperty(e,`__esModule`,{value:!0}),e.default=s;var c=xo();Object.defineProperty(e,`KeywordCxt`,{enumerable:!0,get:function(){return c.KeywordCxt}});var l=K();Object.defineProperty(e,`_`,{enumerable:!0,get:function(){return l._}}),Object.defineProperty(e,`str`,{enumerable:!0,get:function(){return l.str}}),Object.defineProperty(e,`stringify`,{enumerable:!0,get:function(){return l.stringify}}),Object.defineProperty(e,`nil`,{enumerable:!0,get:function(){return l.nil}}),Object.defineProperty(e,`Name`,{enumerable:!0,get:function(){return l.Name}}),Object.defineProperty(e,`CodeGen`,{enumerable:!0,get:function(){return l.CodeGen}});var u=So();Object.defineProperty(e,`ValidationError`,{enumerable:!0,get:function(){return u.default}});var d=Co();Object.defineProperty(e,`MissingRefError`,{enumerable:!0,get:function(){return d.default}})})),ml=s((e=>{Object.defineProperty(e,`__esModule`,{value:!0}),e.formatNames=e.fastFormats=e.fullFormats=void 0;function t(e,t){return{validate:e,compare:t}}e.fullFormats={date:t(a,o),time:t(c(!0),l),"date-time":t(f(!0),p),"iso-time":t(c(),u),"iso-date-time":t(f(),m),duration:/^P(?!$)((\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+S)?)?|(\d+W)?)$/,uri:_,"uri-reference":/^(?:[a-z][a-z0-9+\-.]*:)?(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'"()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?(?:\?(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i,"uri-template":/^(?:(?:[^\x00-\x20"'<>%\\^`{|}]|%[0-9a-f]{2})|\{[+#./;?&=,!@|]?(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?(?:,(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?)*\})*$/i,url:/^(?:https?|ftp):\/\/(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u{00a1}-\u{ffff}]+-)*[a-z0-9\u{00a1}-\u{ffff}]+)(?:\.(?:[a-z0-9\u{00a1}-\u{ffff}]+-)*[a-z0-9\u{00a1}-\u{ffff}]+)*(?:\.(?:[a-z\u{00a1}-\u{ffff}]{2,})))(?::\d{2,5})?(?:\/[^\s]*)?$/iu,email:/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i,hostname:/^(?=.{1,253}\.?$)[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[-0-9a-z]{0,61}[0-9a-z])?)*\.?$/i,ipv4:/^(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)$/,ipv6:/^((([0-9a-f]{1,4}:){7}([0-9a-f]{1,4}|:))|(([0-9a-f]{1,4}:){6}(:[0-9a-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9a-f]{1,4}:){5}(((:[0-9a-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9a-f]{1,4}:){4}(((:[0-9a-f]{1,4}){1,3})|((:[0-9a-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){3}(((:[0-9a-f]{1,4}){1,4})|((:[0-9a-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){2}(((:[0-9a-f]{1,4}){1,5})|((:[0-9a-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){1}(((:[0-9a-f]{1,4}){1,6})|((:[0-9a-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9a-f]{1,4}){1,7})|((:[0-9a-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))$/i,regex:ee,uuid:/^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i,"json-pointer":/^(?:\/(?:[^~/]|~0|~1)*)*$/,"json-pointer-uri-fragment":/^#(?:\/(?:[a-z0-9_\-.!$&'()*+,;:=@]|%[0-9a-f]{2}|~0|~1)*)*$/i,"relative-json-pointer":/^(?:0|[1-9][0-9]*)(?:#|(?:\/(?:[^~/]|~0|~1)*)*)$/,byte:y,int32:{type:`number`,validate:S},int64:{type:`number`,validate:C},float:{type:`number`,validate:w},double:{type:`number`,validate:w},password:!0,binary:!0},e.fastFormats={...e.fullFormats,date:t(/^\d\d\d\d-[0-1]\d-[0-3]\d$/,o),time:t(/^(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)$/i,l),"date-time":t(/^\d\d\d\d-[0-1]\d-[0-3]\dt(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)$/i,p),"iso-time":t(/^(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)?$/i,u),"iso-date-time":t(/^\d\d\d\d-[0-1]\d-[0-3]\d[t\s](?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)?$/i,m),uri:/^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/)?[^\s]*$/i,"uri-reference":/^(?:(?:[a-z][a-z0-9+\-.]*:)?\/?\/)?(?:[^\\\s#][^\s#]*)?(?:#[^\\\s]*)?$/i,email:/^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)*$/i},e.formatNames=Object.keys(e.fullFormats);function n(e){return e%4==0&&(e%100!=0||e%400==0)}var r=/^(\d\d\d\d)-(\d\d)-(\d\d)$/,i=[0,31,28,31,30,31,30,31,31,30,31,30,31];function a(e){let t=r.exec(e);if(!t)return!1;let a=+t[1],o=+t[2],s=+t[3];return o>=1&&o<=12&&s>=1&&s<=(o===2&&n(a)?29:i[o])}function o(e,t){if(e&&t)return e>t?1:e<t?-1:0}var s=/^(\d\d):(\d\d):(\d\d(?:\.\d+)?)(z|([+-])(\d\d)(?::?(\d\d))?)?$/i;function c(e){return function(t){let n=s.exec(t);if(!n)return!1;let r=+n[1],i=+n[2],a=+n[3],o=n[4],c=n[5]===`-`?-1:1,l=+(n[6]||0),u=+(n[7]||0);if(l>23||u>59||e&&!o)return!1;if(r<=23&&i<=59&&a<60)return!0;let d=i-u*c,f=r-l*c-(d<0?1:0);return(f===23||f===-1)&&(d===59||d===-1)&&a<61}}function l(e,t){if(!(e&&t))return;let n=new Date(`2020-01-01T`+e).valueOf(),r=new Date(`2020-01-01T`+t).valueOf();if(n&&r)return n-r}function u(e,t){if(!(e&&t))return;let n=s.exec(e),r=s.exec(t);if(n&&r)return e=n[1]+n[2]+n[3],t=r[1]+r[2]+r[3],e>t?1:e<t?-1:0}var d=/t|\s/i;function f(e){let t=c(e);return function(e){let n=e.split(d);return n.length===2&&a(n[0])&&t(n[1])}}function p(e,t){if(!(e&&t))return;let n=new Date(e).valueOf(),r=new Date(t).valueOf();if(n&&r)return n-r}function m(e,t){if(!(e&&t))return;let[n,r]=e.split(d),[i,a]=t.split(d),s=o(n,i);if(s!==void 0)return s||l(r,a)}var h=/\/|:/,g=/^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)(?:\?(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i;function _(e){return h.test(e)&&g.test(e)}var v=/^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/gm;function y(e){return v.lastIndex=0,v.test(e)}var b=-(2**31),x=2**31-1;function S(e){return Number.isInteger(e)&&e<=x&&e>=b}function C(e){return Number.isInteger(e)}function w(){return!0}var T=/[^\\]\\Z/;function ee(e){if(T.test(e))return!1;try{return new RegExp(e),!0}catch{return!1}}})),hl=s((e=>{Object.defineProperty(e,`__esModule`,{value:!0});var t=Bo(),n=$o(),r=gs(),i=As(),a=js();e.default=[t.default,n.default,(0,r.default)(),i.default,a.metadataVocabulary,a.contentVocabulary]})),gl=c({$id:()=>vl,$schema:()=>_l,default:()=>Cl,definitions:()=>bl,properties:()=>Sl,title:()=>yl,type:()=>xl}),_l,vl,yl,bl,xl,Sl,Cl,wl=o((()=>{_l=`http://json-schema.org/draft-07/schema#`,vl=`http://json-schema.org/draft-07/schema#`,yl=`Core schema meta-schema`,bl={schemaArray:{type:`array`,minItems:1,items:{$ref:`#`}},nonNegativeInteger:{type:`integer`,minimum:0},nonNegativeIntegerDefault0:{allOf:[{$ref:`#/definitions/nonNegativeInteger`},{default:0}]},simpleTypes:{enum:[`array`,`boolean`,`integer`,`null`,`number`,`object`,`string`]},stringArray:{type:`array`,items:{type:`string`},uniqueItems:!0,default:[]}},xl=[`object`,`boolean`],Sl={$id:{type:`string`,format:`uri-reference`},$schema:{type:`string`,format:`uri`},$ref:{type:`string`,format:`uri-reference`},$comment:{type:`string`},title:{type:`string`},description:{type:`string`},default:!0,readOnly:{type:`boolean`,default:!1},examples:{type:`array`,items:!0},multipleOf:{type:`number`,exclusiveMinimum:0},maximum:{type:`number`},exclusiveMaximum:{type:`number`},minimum:{type:`number`},exclusiveMinimum:{type:`number`},maxLength:{$ref:`#/definitions/nonNegativeInteger`},minLength:{$ref:`#/definitions/nonNegativeIntegerDefault0`},pattern:{type:`string`,format:`regex`},additionalItems:{$ref:`#`},items:{anyOf:[{$ref:`#`},{$ref:`#/definitions/schemaArray`}],default:!0},maxItems:{$ref:`#/definitions/nonNegativeInteger`},minItems:{$ref:`#/definitions/nonNegativeIntegerDefault0`},uniqueItems:{type:`boolean`,default:!1},contains:{$ref:`#`},maxProperties:{$ref:`#/definitions/nonNegativeInteger`},minProperties:{$ref:`#/definitions/nonNegativeIntegerDefault0`},required:{$ref:`#/definitions/stringArray`},additionalProperties:{$ref:`#`},definitions:{type:`object`,additionalProperties:{$ref:`#`},default:{}},properties:{type:`object`,additionalProperties:{$ref:`#`},default:{}},patternProperties:{type:`object`,additionalProperties:{$ref:`#`},propertyNames:{format:`regex`},default:{}},dependencies:{type:`object`,additionalProperties:{anyOf:[{$ref:`#`},{$ref:`#/definitions/stringArray`}]}},propertyNames:{$ref:`#`},const:!0,enum:{type:`array`,items:!0,minItems:1,uniqueItems:!0},type:{anyOf:[{$ref:`#/definitions/simpleTypes`},{type:`array`,items:{$ref:`#/definitions/simpleTypes`},minItems:1,uniqueItems:!0}]},format:{type:`string`},contentMediaType:{type:`string`},contentEncoding:{type:`string`},if:{$ref:`#`},then:{$ref:`#`},else:{$ref:`#`},allOf:{$ref:`#/definitions/schemaArray`},anyOf:{$ref:`#/definitions/schemaArray`},oneOf:{$ref:`#/definitions/schemaArray`},not:{$ref:`#`}},Cl={$schema:_l,$id:vl,title:yl,definitions:bl,type:xl,properties:Sl,default:!0}})),Tl=s(((e,t)=>{Object.defineProperty(e,`__esModule`,{value:!0}),e.MissingRefError=e.ValidationError=e.CodeGen=e.Name=e.nil=e.stringify=e.str=e._=e.KeywordCxt=e.Ajv=void 0;var n=Lo(),r=hl(),i=Ps(),a=(wl(),d(gl).default),o=[`/properties`],s=`http://json-schema.org/draft-07/schema`,c=class extends n.default{_addVocabularies(){super._addVocabularies(),r.default.forEach(e=>this.addVocabulary(e)),this.opts.discriminator&&this.addKeyword(i.default)}_addDefaultMetaSchema(){if(super._addDefaultMetaSchema(),!this.opts.meta)return;let e=this.opts.$data?this.$dataMetaSchema(a,o):a;this.addMetaSchema(e,s,!1),this.refs[`http://json-schema.org/schema`]=s}defaultMeta(){return this.opts.defaultMeta=super.defaultMeta()||(this.getSchema(s)?s:void 0)}};e.Ajv=c,t.exports=e=c,t.exports.Ajv=c,Object.defineProperty(e,`__esModule`,{value:!0}),e.default=c;var l=xo();Object.defineProperty(e,`KeywordCxt`,{enumerable:!0,get:function(){return l.KeywordCxt}});var u=K();Object.defineProperty(e,`_`,{enumerable:!0,get:function(){return u._}}),Object.defineProperty(e,`str`,{enumerable:!0,get:function(){return u.str}}),Object.defineProperty(e,`stringify`,{enumerable:!0,get:function(){return u.stringify}}),Object.defineProperty(e,`nil`,{enumerable:!0,get:function(){return u.nil}}),Object.defineProperty(e,`Name`,{enumerable:!0,get:function(){return u.Name}}),Object.defineProperty(e,`CodeGen`,{enumerable:!0,get:function(){return u.CodeGen}});var f=So();Object.defineProperty(e,`ValidationError`,{enumerable:!0,get:function(){return f.default}});var p=Co();Object.defineProperty(e,`MissingRefError`,{enumerable:!0,get:function(){return p.default}})})),El=s((e=>{Object.defineProperty(e,`__esModule`,{value:!0}),e.formatLimitDefinition=void 0;var t=Tl(),n=K(),r=n.operators,i={formatMaximum:{okStr:`<=`,ok:r.LTE,fail:r.GT},formatMinimum:{okStr:`>=`,ok:r.GTE,fail:r.LT},formatExclusiveMaximum:{okStr:`<`,ok:r.LT,fail:r.GTE},formatExclusiveMinimum:{okStr:`>`,ok:r.GT,fail:r.LTE}};e.formatLimitDefinition={keyword:Object.keys(i),type:`string`,schemaType:`string`,$data:!0,error:{message:({keyword:e,schemaCode:t})=>(0,n.str)`should be ${i[e].okStr} ${t}`,params:({keyword:e,schemaCode:t})=>(0,n._)`{comparison: ${i[e].okStr}, limit: ${t}}`},code(e){let{gen:r,data:a,schemaCode:o,keyword:s,it:c}=e,{opts:l,self:u}=c;if(!l.validateFormats)return;let d=new t.KeywordCxt(c,u.RULES.all.format.definition,`format`);d.$data?f():p();function f(){let t=r.scopeValue(`formats`,{ref:u.formats,code:l.code.formats}),i=r.const(`fmt`,(0,n._)`${t}[${d.schemaCode}]`);e.fail$data((0,n.or)((0,n._)`typeof ${i} != "object"`,(0,n._)`${i} instanceof RegExp`,(0,n._)`typeof ${i}.compare != "function"`,m(i)))}function p(){let t=d.schema,i=u.formats[t];if(!i||i===!0)return;if(typeof i!=`object`||i instanceof RegExp||typeof i.compare!=`function`)throw Error(`"${s}": format "${t}" does not define "compare" function`);let a=r.scopeValue(`formats`,{key:t,ref:i,code:l.code.formats?(0,n._)`${l.code.formats}${(0,n.getProperty)(t)}`:void 0});e.fail$data(m(a))}function m(e){return(0,n._)`${e}.compare(${a}, ${o}) ${i[s].fail} 0`}},dependencies:[`format`]},e.default=t=>(t.addKeyword(e.formatLimitDefinition),t)})),Dl=s(((e,t)=>{Object.defineProperty(e,`__esModule`,{value:!0});var n=ml(),r=El(),i=K(),a=new i.Name(`fullFormats`),o=new i.Name(`fastFormats`),s=(e,t={keywords:!0})=>{if(Array.isArray(t))return c(e,t,n.fullFormats,a),e;let[i,s]=t.mode===`fast`?[n.fastFormats,o]:[n.fullFormats,a];return c(e,t.formats||n.formatNames,i,s),t.keywords&&(0,r.default)(e),e};s.get=(e,t=`full`)=>{let r=(t===`fast`?n.fastFormats:n.fullFormats)[e];if(!r)throw Error(`Unknown format "${e}"`);return r};function c(e,t,n,r){var a;(a=e.opts.code).formats??(a.formats=(0,i._)`require("ajv-formats/dist/formats").${r}`);for(let r of t)e.addFormat(r,n[r])}t.exports=e=s,Object.defineProperty(e,`__esModule`,{value:!0}),e.default=s})),Ol=u(pl(),1),kl=u(Dl(),1),Al={$schema:`https://json-schema.org/draft/2020-12/schema`,$id:`https://choria-cm.dev/schemas/ccm/v1/manifest.json`,title:`CCM Manifest`,description:`A CCM manifest file combining Hiera data and configuration management resources`,type:`object`,properties:{data:{type:`object`,description:`Base data section containing key-value pairs that can be referenced in resources using template expressions like {{ Data.key }}`,additionalProperties:!0},ccm:{type:`object`,description:`CCM configuration section containing resource definitions`,properties:{pre_message:{type:`string`,description:`Message to display before applying resources`},post_message:{type:`string`,description:`Message to display after applying resources`},fail_on_error:{type:`boolean`,description:`If true, stop processing resources when any resource fails. If false, continue processing remaining resources.`,default:!1},resources_jet_file:{type:`string`,description:`Path to a Jet template file that generates the resources list`},resources:{type:`array`,description:`List of configuration management resources to apply`,items:{$ref:`#/$defs/resource`}}},additionalProperties:!1},hierarchy:{$ref:`#/$defs/hierarchy`},overrides:{type:`object`,description:`Override sections keyed by hierarchy order entries (e.g., 'os:debian'). Values in matching overrides will replace or merge with base data depending on the merge strategy.`,additionalProperties:{type:`object`,description:`Override data values for a specific hierarchy entry`,additionalProperties:!0}}},additionalProperties:!1,$defs:JSON.parse(`{"hierarchy":{"type":"object","description":"Describes how data sections should be resolved using Hiera-like lookups","properties":{"order":{"type":"array","description":"Lookup sequence for data sections. Entries can contain template expressions like {{ lookup('facts.host.info.platformFamily') }}","items":{"type":"string"}},"merge":{"type":"string","description":"Merge strategy for combining data from multiple hierarchy levels","enum":["first","deep"],"default":"first"}},"additionalProperties":false},"resource":{"type":"object","description":"A configuration management resource entry. Each entry should have exactly one resource type key.","properties":{"package":{"oneOf":[{"$ref":"#/$defs/packageResourceList"},{"$ref":"#/$defs/packageResourcePropertiesWithName"}]},"service":{"oneOf":[{"$ref":"#/$defs/serviceResourceList"},{"$ref":"#/$defs/serviceResourcePropertiesWithName"}]},"file":{"oneOf":[{"$ref":"#/$defs/fileResourceList"},{"$ref":"#/$defs/fileResourcePropertiesWithName"}]},"exec":{"oneOf":[{"$ref":"#/$defs/execResourceList"},{"$ref":"#/$defs/execResourcePropertiesWithName"}]},"archive":{"oneOf":[{"$ref":"#/$defs/archiveResourceList"},{"$ref":"#/$defs/archiveResourcePropertiesWithName"}]},"scaffold":{"oneOf":[{"$ref":"#/$defs/scaffoldResourceList"},{"$ref":"#/$defs/scaffoldResourcePropertiesWithName"}]}},"minProperties":1,"maxProperties":1,"additionalProperties":false},"packageResourceList":{"type":"array","description":"List of package resources to manage (named format)","items":{"type":"object","description":"Package resource entry keyed by package name or template expression","additionalProperties":{"$ref":"#/$defs/packageResourceProperties"},"minProperties":1,"maxProperties":1}},"serviceResourceList":{"type":"array","description":"List of service resources to manage (named format)","items":{"type":"object","description":"Service resource entry keyed by service name or template expression","additionalProperties":{"$ref":"#/$defs/serviceResourceProperties"},"minProperties":1,"maxProperties":1}},"fileResourceList":{"type":"array","description":"List of file resources to manage (named format)","items":{"type":"object","description":"File resource entry keyed by absolute file path","additionalProperties":{"$ref":"#/$defs/fileResourceProperties"},"minProperties":1,"maxProperties":1}},"execResourceList":{"type":"array","description":"List of exec resources to manage (named format)","items":{"type":"object","description":"Exec resource entry keyed by command to execute","additionalProperties":{"$ref":"#/$defs/execResourceProperties"},"minProperties":1,"maxProperties":1}},"archiveResourceList":{"type":"array","description":"List of archive resources to manage (named format)","items":{"type":"object","description":"Archive resource entry keyed by absolute file path where the archive will be saved","additionalProperties":{"$ref":"#/$defs/archiveResourceProperties"},"minProperties":1,"maxProperties":1}},"scaffoldResourceList":{"type":"array","description":"List of scaffold resources to manage (named format)","items":{"type":"object","description":"Scaffold resource entry keyed by absolute target directory path","additionalProperties":{"$ref":"#/$defs/scaffoldResourceProperties"},"minProperties":1,"maxProperties":1}},"packageResourcePropertiesWithName":{"type":"object","description":"Properties for a package resource (direct format with name)","properties":{"name":{"type":"string","description":"The package name"},"alias":{"type":"string","description":"An alternative name for the resource that can be used in require/subscribe references"},"ensure":{"type":"string","description":"Desired state of the package: 'present' to install, 'absent' to remove, 'latest' to upgrade to latest version, or a specific version string","examples":["present","absent","latest","1.2.3"]},"provider":{"type":"string","description":"Specific provider to use for managing this resource"},"health_checks":{"type":"array","description":"Health checks to run after applying the resource","items":{"$ref":"#/$defs/healthCheck"}},"require":{"type":"array","description":"List of resources that must be applied before this resource, in format 'type#name'","items":{"type":"string","pattern":"^[a-z]+#.+$"}},"control":{"$ref":"#/$defs/resourceControl"},"register_when_stable":{"type":"array","description":"Registration entries to publish when the resource is stable","items":{"$ref":"#/$defs/registrationEntry"}}},"required":["name"],"additionalProperties":false},"serviceResourcePropertiesWithName":{"type":"object","description":"Properties for a service resource (direct format with name)","properties":{"name":{"type":"string","description":"The service name"},"alias":{"type":"string","description":"An alternative name for the resource that can be used in require/subscribe references"},"ensure":{"type":"string","description":"Desired running state of the service","enum":["running","stopped"],"default":"running"},"provider":{"type":"string","description":"Specific provider to use for managing this resource"},"health_checks":{"type":"array","description":"Health checks to run after applying the resource","items":{"$ref":"#/$defs/healthCheck"}},"require":{"type":"array","description":"List of resources that must be applied before this resource, in format 'type#name'","items":{"type":"string","pattern":"^[a-z]+#.+$"}},"control":{"$ref":"#/$defs/resourceControl"},"register_when_stable":{"type":"array","description":"Registration entries to publish when the resource is stable","items":{"$ref":"#/$defs/registrationEntry"}},"enable":{"type":"boolean","description":"Whether the service should be enabled to start on boot"},"subscribe":{"type":"array","description":"List of resources to subscribe to for refresh notifications, in format 'type#name'. When a subscribed resource changes, this service will be restarted.","items":{"type":"string","pattern":"^[a-z]+#.+$"}}},"required":["name"],"additionalProperties":false},"fileResourcePropertiesWithName":{"type":"object","description":"Properties for a file resource (direct format with name)","properties":{"name":{"type":"string","description":"The absolute file path"},"alias":{"type":"string","description":"An alternative name for the resource that can be used in require/subscribe references"},"ensure":{"type":"string","description":"Desired state of the file: 'present' for a regular file, 'absent' to remove, 'directory' to create a directory","enum":["present","absent","directory"],"default":"present"},"provider":{"type":"string","description":"Specific provider to use for managing this resource"},"health_checks":{"type":"array","description":"Health checks to run after applying the resource","items":{"$ref":"#/$defs/healthCheck"}},"require":{"type":"array","description":"List of resources that must be applied before this resource, in format 'type#name'","items":{"type":"string","pattern":"^[a-z]+#.+$"}},"control":{"$ref":"#/$defs/resourceControl"},"register_when_stable":{"type":"array","description":"Registration entries to publish when the resource is stable","items":{"$ref":"#/$defs/registrationEntry"}},"content":{"type":"string","description":"Desired file contents as a string. Mutually exclusive with 'source'."},"source":{"type":"string","description":"Local file path to use as the source for file contents. Mutually exclusive with 'content'."},"owner":{"type":"string","description":"User that should own the file"},"group":{"type":"string","description":"Group that should own the file"},"mode":{"type":"string","description":"File permissions in octal notation","pattern":"^[0-7]{3,4}$","examples":["0644","0755","0600"]}},"required":["name"],"additionalProperties":false},"execResourcePropertiesWithName":{"type":"object","description":"Properties for an exec resource (direct format with name)","properties":{"name":{"type":"string","description":"A descriptive name for the resource, or the command to execute if 'command' is not specified"},"command":{"type":"string","description":"The command to execute. If not specified, the 'name' property will be used as the command."},"alias":{"type":"string","description":"An alternative name for the resource that can be used in require/subscribe references"},"ensure":{"type":"string","description":"Desired state of the exec resource","enum":["present","absent"],"default":"present"},"provider":{"type":"string","description":"Specific provider to use for managing this resource"},"health_checks":{"type":"array","description":"Health checks to run after applying the resource","items":{"$ref":"#/$defs/healthCheck"}},"require":{"type":"array","description":"List of resources that must be applied before this resource, in format 'type#name'","items":{"type":"string","pattern":"^[a-z]+#.+$"}},"control":{"$ref":"#/$defs/resourceControl"},"register_when_stable":{"type":"array","description":"Registration entries to publish when the resource is stable","items":{"$ref":"#/$defs/registrationEntry"}},"cwd":{"type":"string","description":"Working directory from which to run the command"},"environment":{"type":"array","description":"Additional environment variables to set when running the command, in KEY=value format","items":{"type":"string","pattern":"^[A-Za-z_][A-Za-z0-9_]*=.+$"}},"path":{"type":"string","description":"Search path for executable commands, as a colon-separated list of absolute directories","examples":["/usr/local/bin:/usr/bin:/bin"]},"returns":{"type":"array","description":"Expected exit codes indicating success. Defaults to [0] if not specified.","items":{"type":"integer"},"default":[0]},"timeout":{"type":"string","description":"Maximum time the command is allowed to run. If exceeded, the command will be terminated. Specified as a duration string.","examples":["10s","5m","1h"]},"creates":{"type":"string","description":"A file that the command creates. If this file exists, the command will not run."},"onlyif":{"type":"string","description":"A guard command. The exec runs only if this command exits 0."},"unless":{"type":"string","description":"A guard command. The exec runs only if this command exits non-zero."},"refreshonly":{"type":"boolean","description":"If true, the command only runs when notified by a subscribed resource","default":false},"subscribe":{"type":"array","description":"List of resources to subscribe to for refresh notifications, in format 'type#name'","items":{"type":"string","pattern":"^[a-z]+#.+$"}},"logoutput":{"type":"boolean","description":"Whether to log the command's output","default":false}},"required":["name"],"additionalProperties":false},"archiveResourcePropertiesWithName":{"type":"object","description":"Properties for an archive resource (direct format with name)","properties":{"name":{"type":"string","description":"The absolute file path where the archive will be saved"},"alias":{"type":"string","description":"An alternative name for the resource that can be used in require/subscribe references"},"ensure":{"type":"string","description":"Desired state of the archive","enum":["present","absent"],"default":"present"},"provider":{"type":"string","description":"Specific provider to use for managing this resource"},"health_checks":{"type":"array","description":"Health checks to run after applying the resource","items":{"$ref":"#/$defs/healthCheck"}},"require":{"type":"array","description":"List of resources that must be applied before this resource, in format 'type#name'","items":{"type":"string","pattern":"^[a-z]+#.+$"}},"control":{"$ref":"#/$defs/resourceControl"},"register_when_stable":{"type":"array","description":"Registration entries to publish when the resource is stable","items":{"$ref":"#/$defs/registrationEntry"}},"url":{"type":"string","description":"HTTP/HTTPS URL to download the archive from. Must end in .zip, .tar.gz, .tgz, or .tar","format":"uri"},"headers":{"type":"object","description":"Additional HTTP headers to send with the request","additionalProperties":{"type":"string"}},"username":{"type":"string","description":"Username for HTTP Basic Authentication"},"password":{"type":"string","description":"Password for HTTP Basic Authentication"},"checksum":{"type":"string","description":"Expected SHA256 checksum of the downloaded archive (hex encoded)"},"extract_parent":{"type":"string","description":"Directory to extract the archive contents into"},"cleanup":{"type":"boolean","description":"Remove the archive file after successful extraction. Requires extract_parent to be set.","default":false},"creates":{"type":"string","description":"A file path that the archive creates. If this file exists, the archive will not be downloaded or extracted."},"owner":{"type":"string","description":"User that should own the archive file"},"group":{"type":"string","description":"Group that should own the archive file"}},"required":["name"],"additionalProperties":false},"scaffoldResourcePropertiesWithName":{"type":"object","description":"Properties for a scaffold resource (direct format with name)","properties":{"name":{"type":"string","description":"The absolute path of the target directory to render templates into"},"alias":{"type":"string","description":"An alternative name for the resource that can be used in require/subscribe references"},"ensure":{"type":"string","description":"Desired state of the scaffold","enum":["present","absent"],"default":"present"},"provider":{"type":"string","description":"Specific provider to use for managing this resource"},"health_checks":{"type":"array","description":"Health checks to run after applying the resource","items":{"$ref":"#/$defs/healthCheck"}},"require":{"type":"array","description":"List of resources that must be applied before this resource, in format 'type#name'","items":{"type":"string","pattern":"^[a-z]+#.+$"}},"control":{"$ref":"#/$defs/resourceControl"},"register_when_stable":{"type":"array","description":"Registration entries to publish when the resource is stable","items":{"$ref":"#/$defs/registrationEntry"}},"source":{"type":"string","description":"Path or URL to the source template directory"},"engine":{"type":"string","description":"Template engine to use for rendering","enum":["go","jet"],"default":"jet"},"skip_empty":{"type":"boolean","description":"Skip files that are empty after template rendering","default":false},"left_delimiter":{"type":"string","description":"Custom left template delimiter"},"right_delimiter":{"type":"string","description":"Custom right template delimiter"},"purge":{"type":"boolean","description":"Remove files in the target directory that are not present in the source","default":false},"data":{"type":"object","description":"Custom data map that replaces Hiera data for template rendering. String values support template expressions.","additionalProperties":true},"post":{"type":"array","description":"Post-processing commands to run after rendering","items":{"type":"object","additionalProperties":{"type":"string"},"minProperties":1,"maxProperties":1}}},"required":["name","source"],"additionalProperties":false},"packageResourceProperties":{"type":"object","description":"Properties for a package resource","properties":{"alias":{"type":"string","description":"An alternative name for the resource that can be used in require/subscribe references"},"ensure":{"type":"string","description":"Desired state of the package: 'present' to install, 'absent' to remove, 'latest' to upgrade to latest version, or a specific version string","examples":["present","absent","latest","1.2.3"]},"provider":{"type":"string","description":"Specific provider to use for managing this resource"},"health_checks":{"type":"array","description":"Health checks to run after applying the resource","items":{"$ref":"#/$defs/healthCheck"}},"require":{"type":"array","description":"List of resources that must be applied before this resource, in format 'type#name'","items":{"type":"string","pattern":"^[a-z]+#.+$"}},"control":{"$ref":"#/$defs/resourceControl"},"register_when_stable":{"type":"array","description":"Registration entries to publish when the resource is stable","items":{"$ref":"#/$defs/registrationEntry"}}},"additionalProperties":false},"serviceResourceProperties":{"type":"object","description":"Properties for a service resource","properties":{"alias":{"type":"string","description":"An alternative name for the resource that can be used in require/subscribe references"},"ensure":{"type":"string","description":"Desired running state of the service","enum":["running","stopped"],"default":"running"},"provider":{"type":"string","description":"Specific provider to use for managing this resource"},"health_checks":{"type":"array","description":"Health checks to run after applying the resource","items":{"$ref":"#/$defs/healthCheck"}},"require":{"type":"array","description":"List of resources that must be applied before this resource, in format 'type#name'","items":{"type":"string","pattern":"^[a-z]+#.+$"}},"control":{"$ref":"#/$defs/resourceControl"},"register_when_stable":{"type":"array","description":"Registration entries to publish when the resource is stable","items":{"$ref":"#/$defs/registrationEntry"}},"enable":{"type":"boolean","description":"Whether the service should be enabled to start on boot"},"subscribe":{"type":"array","description":"List of resources to subscribe to for refresh notifications, in format 'type#name'. When a subscribed resource changes, this service will be restarted.","items":{"type":"string","pattern":"^[a-z]+#.+$"}}},"additionalProperties":false},"fileResourceProperties":{"type":"object","description":"Properties for a file resource","properties":{"alias":{"type":"string","description":"An alternative name for the resource that can be used in require/subscribe references"},"ensure":{"type":"string","description":"Desired state of the file: 'present' for a regular file, 'absent' to remove, 'directory' to create a directory","enum":["present","absent","directory"],"default":"present"},"provider":{"type":"string","description":"Specific provider to use for managing this resource"},"health_checks":{"type":"array","description":"Health checks to run after applying the resource","items":{"$ref":"#/$defs/healthCheck"}},"require":{"type":"array","description":"List of resources that must be applied before this resource, in format 'type#name'","items":{"type":"string","pattern":"^[a-z]+#.+$"}},"control":{"$ref":"#/$defs/resourceControl"},"register_when_stable":{"type":"array","description":"Registration entries to publish when the resource is stable","items":{"$ref":"#/$defs/registrationEntry"}},"content":{"type":"string","description":"Desired file contents as a string. Mutually exclusive with 'source'."},"source":{"type":"string","description":"Local file path to use as the source for file contents. Mutually exclusive with 'content'."},"owner":{"type":"string","description":"User that should own the file"},"group":{"type":"string","description":"Group that should own the file"},"mode":{"type":"string","description":"File permissions in octal notation","pattern":"^[0-7]{3,4}$","examples":["0644","0755","0600"]}},"additionalProperties":false},"execResourceProperties":{"type":"object","description":"Properties for an exec resource that runs commands","properties":{"command":{"type":"string","description":"The command to execute. If not specified, the resource name (key) will be used as the command."},"alias":{"type":"string","description":"An alternative name for the resource that can be used in require/subscribe references"},"ensure":{"type":"string","description":"Desired state of the exec resource","enum":["present","absent"],"default":"present"},"provider":{"type":"string","description":"Specific provider to use for managing this resource"},"health_checks":{"type":"array","description":"Health checks to run after applying the resource","items":{"$ref":"#/$defs/healthCheck"}},"require":{"type":"array","description":"List of resources that must be applied before this resource, in format 'type#name'","items":{"type":"string","pattern":"^[a-z]+#.+$"}},"control":{"$ref":"#/$defs/resourceControl"},"register_when_stable":{"type":"array","description":"Registration entries to publish when the resource is stable","items":{"$ref":"#/$defs/registrationEntry"}},"cwd":{"type":"string","description":"Working directory from which to run the command"},"environment":{"type":"array","description":"Additional environment variables to set when running the command, in KEY=value format","items":{"type":"string","pattern":"^[A-Za-z_][A-Za-z0-9_]*=.+$"}},"path":{"type":"string","description":"Search path for executable commands, as a colon-separated list of absolute directories","examples":["/usr/local/bin:/usr/bin:/bin"]},"returns":{"type":"array","description":"Expected exit codes indicating success. Defaults to [0] if not specified.","items":{"type":"integer"},"default":[0]},"timeout":{"type":"string","description":"Maximum time the command is allowed to run. If exceeded, the command will be terminated. Specified as a duration string.","examples":["10s","5m","1h"]},"creates":{"type":"string","description":"A file that the command creates. If this file exists, the command will not run."},"onlyif":{"type":"string","description":"A guard command. The exec runs only if this command exits 0."},"unless":{"type":"string","description":"A guard command. The exec runs only if this command exits non-zero."},"refreshonly":{"type":"boolean","description":"If true, the command only runs when notified by a subscribed resource","default":false},"subscribe":{"type":"array","description":"List of resources to subscribe to for refresh notifications, in format 'type#name'","items":{"type":"string","pattern":"^[a-z]+#.+$"}},"logoutput":{"type":"boolean","description":"Whether to log the command's output","default":false}},"additionalProperties":false},"archiveResourceProperties":{"type":"object","description":"Properties for an archive resource that downloads and extracts archives","properties":{"alias":{"type":"string","description":"An alternative name for the resource that can be used in require/subscribe references"},"ensure":{"type":"string","description":"Desired state of the archive","enum":["present","absent"],"default":"present"},"provider":{"type":"string","description":"Specific provider to use for managing this resource"},"health_checks":{"type":"array","description":"Health checks to run after applying the resource","items":{"$ref":"#/$defs/healthCheck"}},"require":{"type":"array","description":"List of resources that must be applied before this resource, in format 'type#name'","items":{"type":"string","pattern":"^[a-z]+#.+$"}},"control":{"$ref":"#/$defs/resourceControl"},"register_when_stable":{"type":"array","description":"Registration entries to publish when the resource is stable","items":{"$ref":"#/$defs/registrationEntry"}},"url":{"type":"string","description":"HTTP/HTTPS URL to download the archive from. Must end in .zip, .tar.gz, .tgz, or .tar","format":"uri"},"headers":{"type":"object","description":"Additional HTTP headers to send with the request","additionalProperties":{"type":"string"}},"username":{"type":"string","description":"Username for HTTP Basic Authentication"},"password":{"type":"string","description":"Password for HTTP Basic Authentication"},"checksum":{"type":"string","description":"Expected SHA256 checksum of the downloaded archive (hex encoded)"},"extract_parent":{"type":"string","description":"Directory to extract the archive contents into"},"cleanup":{"type":"boolean","description":"Remove the archive file after successful extraction. Requires extract_parent to be set.","default":false},"creates":{"type":"string","description":"A file path that the archive creates. If this file exists, the archive will not be downloaded or extracted."},"owner":{"type":"string","description":"User that should own the archive file"},"group":{"type":"string","description":"Group that should own the archive file"}},"additionalProperties":false},"scaffoldResourceProperties":{"type":"object","description":"Properties for a scaffold resource that renders template directories","properties":{"alias":{"type":"string","description":"An alternative name for the resource that can be used in require/subscribe references"},"ensure":{"type":"string","description":"Desired state of the scaffold","enum":["present","absent"],"default":"present"},"provider":{"type":"string","description":"Specific provider to use for managing this resource"},"health_checks":{"type":"array","description":"Health checks to run after applying the resource","items":{"$ref":"#/$defs/healthCheck"}},"require":{"type":"array","description":"List of resources that must be applied before this resource, in format 'type#name'","items":{"type":"string","pattern":"^[a-z]+#.+$"}},"control":{"$ref":"#/$defs/resourceControl"},"register_when_stable":{"type":"array","description":"Registration entries to publish when the resource is stable","items":{"$ref":"#/$defs/registrationEntry"}},"source":{"type":"string","description":"Path or URL to the source template directory"},"engine":{"type":"string","description":"Template engine to use for rendering","enum":["go","jet"],"default":"jet"},"skip_empty":{"type":"boolean","description":"Skip files that are empty after template rendering","default":false},"left_delimiter":{"type":"string","description":"Custom left template delimiter"},"right_delimiter":{"type":"string","description":"Custom right template delimiter"},"purge":{"type":"boolean","description":"Remove files in the target directory that are not present in the source","default":false},"data":{"type":"object","description":"Custom data map that replaces Hiera data for template rendering. String values support template expressions.","additionalProperties":true},"post":{"type":"array","description":"Post-processing commands to run after rendering","items":{"type":"object","additionalProperties":{"type":"string"},"minProperties":1,"maxProperties":1}}},"additionalProperties":false},"healthCheck":{"type":"object","description":"Health check configuration to verify resource state after application. Specify either 'command' for Nagios-style checks or 'goss_rules' for inline Goss validation rules. These two options are mutually exclusive.","properties":{"command":{"type":"string","description":"Command to execute for the health check. Mutually exclusive with 'goss_rules'."},"goss_rules":{"type":"object","description":"Inline Goss validation rules as a YAML object. Supports all Goss resource types (command, file, service, port, etc.). Mutually exclusive with 'command'.","additionalProperties":true},"name":{"type":"string","description":"Optional name for the health check"},"timeout":{"type":"string","description":"Maximum time to wait for the health check command to complete","examples":["10s","30s"]},"tries":{"type":"integer","description":"Number of times to retry the health check before failing","minimum":1},"try_sleep":{"type":"string","description":"Time to wait between health check retries","examples":["1s","5s"]},"format":{"type":"string","description":"Output format of the health check. Defaults to 'nagios' when 'command' is set, 'goss' when 'goss_rules' is set.","enum":["nagios","goss"]}},"oneOf":[{"required":["command"]},{"required":["goss_rules"]}],"additionalProperties":false},"registrationEntry":{"type":"object","description":"Registration entry to publish when the resource is stable. Used for service discovery via NATS.","properties":{"cluster":{"type":"string","description":"Cluster name for the registration entry"},"service":{"type":"string","description":"Service name for the registration entry","pattern":"^[a-zA-Z][a-zA-Z\\\\d_-]*$"},"protocol":{"type":"string","description":"Protocol for the service (e.g., tcp, udp, http)"},"address":{"type":"string","description":"IP address of the service","format":"ipv4"},"port":{"oneOf":[{"type":"integer","minimum":1,"maximum":65535},{"type":"string"}],"description":"Port number of the service, can be an integer or a template expression that resolves to an integer"},"priority":{"type":"integer","description":"Priority of the registration entry","minimum":1,"maximum":255},"annotations":{"type":"object","description":"Optional key-value annotations for the registration entry","additionalProperties":{"type":"string"}}},"required":["cluster","service","protocol","address","port","priority"],"additionalProperties":false},"resourceControl":{"type":"object","description":"Control conditions that determine whether a resource should be managed","properties":{"if":{"type":"string","description":"Expression that must evaluate to true for the resource to be managed. Has access to Facts, Data, and Environ variables.","examples":["Facts.os == \\"linux\\"","lookup(\\"facts.kernel\\", \\"\\") == \\"Linux\\""]},"unless":{"type":"string","description":"Expression that must evaluate to false for the resource to be managed. Has access to Facts, Data, and Environ variables.","examples":["Facts.os == \\"windows\\"","lookup(\\"facts.virtual\\", \\"\\") == \\"docker\\""]}},"additionalProperties":false}}`)},jl=new Ol.default({allErrors:!0,verbose:!0,strict:!1});(0,kl.default)(jl);var Ml=jl.compile(Al);function Nl(e){return e?e.map(e=>{let t=e.instancePath||`root`,n=e.message||`Invalid value`;switch(e.keyword){case`required`:return`${t}: Missing required property '${e.params.missingProperty}'`;case`type`:return`${t}: Expected ${e.params.type}`;case`enum`:return`${t}: Must be one of: ${e.params.allowedValues.join(`, `)}`;case`pattern`:return`${t}: Does not match expected pattern`;case`additionalProperties`:return`${t}: Unknown property '${e.params.additionalProperty}'`;case`format`:return`${t}: Invalid format, expected ${e.params.format}`;default:return`${t}: ${n}`}}):[]}function Pl(e){let t=[];return Ml(zl(e))||Nl(Ml.errors).forEach(e=>{t.push({path:Bl(e),message:Vl(e),severity:`error`})}),t.push(...Fl(e)),t}function Fl(e){let t=[];e.ccm.resources.forEach((n,r)=>{(!n.name||n.name.trim()===``)&&t.push({path:`ccm.resources[${r}].name`,message:`Resource name is required`,severity:`error`}),e.ccm.resources.filter((e,t)=>t!==r&&e.type===n.type&&e.name===n.name).length>0&&t.push({path:`ccm.resources[${r}].name`,message:`Duplicate ${n.type} resource name: ${n.name}`,severity:`warning`}),n.require?.forEach((i,a)=>{Il(i,e)||t.push({path:`ccm.resources[${r}].require[${a}]`,message:`Unknown resource reference: ${i}`,severity:`warning`}),(i===`${n.type}#${n.name}`||n.alias&&i===`${n.type}#${n.alias}`)&&t.push({path:`ccm.resources[${r}].require[${a}]`,message:`Resource cannot require itself`,severity:`error`})}),`subscribe`in n.properties&&n.properties.subscribe?.forEach((n,i)=>{Il(n,e)||t.push({path:`ccm.resources[${r}].subscribe[${i}]`,message:`Unknown resource reference: ${n}`,severity:`warning`})}),t.push(...Rl(n,r))});let n=Ll(e.hierarchy.order);return Object.keys(e.overrides).forEach(e=>{let r=e.split(`:`)[0];n.length>0&&!n.includes(r)&&t.push({path:`overrides.${e}`,message:`Override key '${e}' does not match any hierarchy dimension`,severity:`warning`})}),t}function Il(e,t){let n=e.match(/^(\w+)#(.+)$/);if(!n)return!1;let[,r,i]=n;return t.ccm.resources.some(e=>e.type===r&&(e.name===i||e.alias===i))}function Ll(e){return e.map(e=>e.match(/^(\w+):/)?.[1]).filter(e=>e!==void 0)}function Rl(e,t){let n=[];switch(e.type){case`file`:e.properties.content&&e.properties.source&&n.push({path:`ccm.resources[${t}]`,message:`File resource cannot have both content and source`,severity:`error`}),e.properties.mode&&!/^[0-7]{3,4}$/.test(String(e.properties.mode))&&n.push({path:`ccm.resources[${t}].mode`,message:`Mode must be octal notation (e.g., 0644)`,severity:`error`});break;case`archive`:e.properties.url||n.push({path:`ccm.resources[${t}].url`,message:`Archive resource requires a URL`,severity:`error`}),e.properties.cleanup&&(!e.properties.extract_parent||!e.properties.creates)&&n.push({path:`ccm.resources[${t}].cleanup`,message:`Cleanup requires extract_parent and creates to be set`,severity:`warning`});break;case`exec`:e.properties.refreshonly&&!e.properties.subscribe?.length&&n.push({path:`ccm.resources[${t}].refreshonly`,message:`refreshonly is set but no subscribe references defined`,severity:`warning`});break;case`scaffold`:e.properties.source||n.push({path:`ccm.resources[${t}].source`,message:`Scaffold resource requires a source directory`,severity:`error`}),(e.properties.left_delimiter&&!e.properties.right_delimiter||!e.properties.left_delimiter&&e.properties.right_delimiter)&&n.push({path:`ccm.resources[${t}]`,message:`Custom delimiters must specify both left and right`,severity:`warning`});break}return n}function zl(e){let t={};return Object.keys(e.data).length>0&&(t.data=e.data),e.hierarchy.order.length>0&&(t.hierarchy={order:e.hierarchy.order,...e.hierarchy.merge===`first`?{}:{merge:e.hierarchy.merge}}),Object.keys(e.overrides).length>0&&(t.overrides=e.overrides),(e.ccm.resources.length>0||e.ccm.pre_message||e.ccm.post_message||e.ccm.fail_on_error)&&(t.ccm={...e.ccm.pre_message&&{pre_message:e.ccm.pre_message},...e.ccm.post_message&&{post_message:e.ccm.post_message},...e.ccm.fail_on_error&&{fail_on_error:e.ccm.fail_on_error},resources:e.ccm.resources.map(e=>{let t={...e.properties};return e.type===`scaffold`&&t.post&&typeof t.post==`object`&&!Array.isArray(t.post)&&(t.post=Object.entries(t.post).map(([e,t])=>({[e]:t}))),{[e.type]:[{[e.name]:{...t,...e.alias&&{alias:e.alias},...e.require?.length&&{require:e.require},...e.control&&{control:e.control},...e.health_checks?.length&&{health_checks:e.health_checks},...e.register_when_stable?.length&&{register_when_stable:e.register_when_stable}}}]}})}),t}function Bl(e){let t=e.match(/^([^:]+):/);return t?t[1]:``}function Vl(e){let t=e.match(/^[^:]+:\s*(.+)$/);return t?t[1]:e}var Hl=Symbol.for(`yaml.alias`),Ul=Symbol.for(`yaml.document`),Wl=Symbol.for(`yaml.map`),Gl=Symbol.for(`yaml.pair`),Kl=Symbol.for(`yaml.scalar`),ql=Symbol.for(`yaml.seq`),Jl=Symbol.for(`yaml.node.type`),Yl=e=>!!e&&typeof e==`object`&&e[Jl]===Hl,Xl=e=>!!e&&typeof e==`object`&&e[Jl]===Ul,Zl=e=>!!e&&typeof e==`object`&&e[Jl]===Wl,J=e=>!!e&&typeof e==`object`&&e[Jl]===Gl,Y=e=>!!e&&typeof e==`object`&&e[Jl]===Kl,Ql=e=>!!e&&typeof e==`object`&&e[Jl]===ql;function $l(e){if(e&&typeof e==`object`)switch(e[Jl]){case Wl:case ql:return!0}return!1}function X(e){if(e&&typeof e==`object`)switch(e[Jl]){case Hl:case Wl:case Kl:case ql:return!0}return!1}var eu=e=>(Y(e)||$l(e))&&!!e.anchor,tu=Symbol(`break visit`),nu=Symbol(`skip children`),ru=Symbol(`remove node`);function iu(e,t){let n=cu(t);Xl(e)?au(null,e.contents,n,Object.freeze([e]))===ru&&(e.contents=null):au(null,e,n,Object.freeze([]))}iu.BREAK=tu,iu.SKIP=nu,iu.REMOVE=ru;function au(e,t,n,r){let i=lu(e,t,n,r);if(X(i)||J(i))return uu(e,r,i),au(e,i,n,r);if(typeof i!=`symbol`){if($l(t)){r=Object.freeze(r.concat(t));for(let e=0;e<t.items.length;++e){let i=au(e,t.items[e],n,r);if(typeof i==`number`)e=i-1;else if(i===tu)return tu;else i===ru&&(t.items.splice(e,1),--e)}}else if(J(t)){r=Object.freeze(r.concat(t));let e=au(`key`,t.key,n,r);if(e===tu)return tu;e===ru&&(t.key=null);let i=au(`value`,t.value,n,r);if(i===tu)return tu;i===ru&&(t.value=null)}}return i}async function ou(e,t){let n=cu(t);Xl(e)?await su(null,e.contents,n,Object.freeze([e]))===ru&&(e.contents=null):await su(null,e,n,Object.freeze([]))}ou.BREAK=tu,ou.SKIP=nu,ou.REMOVE=ru;async function su(e,t,n,r){let i=await lu(e,t,n,r);if(X(i)||J(i))return uu(e,r,i),su(e,i,n,r);if(typeof i!=`symbol`){if($l(t)){r=Object.freeze(r.concat(t));for(let e=0;e<t.items.length;++e){let i=await su(e,t.items[e],n,r);if(typeof i==`number`)e=i-1;else if(i===tu)return tu;else i===ru&&(t.items.splice(e,1),--e)}}else if(J(t)){r=Object.freeze(r.concat(t));let e=await su(`key`,t.key,n,r);if(e===tu)return tu;e===ru&&(t.key=null);let i=await su(`value`,t.value,n,r);if(i===tu)return tu;i===ru&&(t.value=null)}}return i}function cu(e){return typeof e==`object`&&(e.Collection||e.Node||e.Value)?Object.assign({Alias:e.Node,Map:e.Node,Scalar:e.Node,Seq:e.Node},e.Value&&{Map:e.Value,Scalar:e.Value,Seq:e.Value},e.Collection&&{Map:e.Collection,Seq:e.Collection},e):e}function lu(e,t,n,r){if(typeof n==`function`)return n(e,t,r);if(Zl(t))return n.Map?.(e,t,r);if(Ql(t))return n.Seq?.(e,t,r);if(J(t))return n.Pair?.(e,t,r);if(Y(t))return n.Scalar?.(e,t,r);if(Yl(t))return n.Alias?.(e,t,r)}function uu(e,t,n){let r=t[t.length-1];if($l(r))r.items[e]=n;else if(J(r))e===`key`?r.key=n:r.value=n;else if(Xl(r))r.contents=n;else{let e=Yl(r)?`alias`:`scalar`;throw Error(`Cannot replace node with ${e} parent`)}}var du={"!":`%21`,",":`%2C`,"[":`%5B`,"]":`%5D`,"{":`%7B`,"}":`%7D`},fu=e=>e.replace(/[!,[\]{}]/g,e=>du[e]),pu=class e{constructor(t,n){this.docStart=null,this.docEnd=!1,this.yaml=Object.assign({},e.defaultYaml,t),this.tags=Object.assign({},e.defaultTags,n)}clone(){let t=new e(this.yaml,this.tags);return t.docStart=this.docStart,t}atDocument(){let t=new e(this.yaml,this.tags);switch(this.yaml.version){case`1.1`:this.atNextDocument=!0;break;case`1.2`:this.atNextDocument=!1,this.yaml={explicit:e.defaultYaml.explicit,version:`1.2`},this.tags=Object.assign({},e.defaultTags);break}return t}add(t,n){this.atNextDocument&&=(this.yaml={explicit:e.defaultYaml.explicit,version:`1.1`},this.tags=Object.assign({},e.defaultTags),!1);let r=t.trim().split(/[ \t]+/),i=r.shift();switch(i){case`%TAG`:{if(r.length!==2&&(n(0,`%TAG directive should contain exactly two parts`),r.length<2))return!1;let[e,t]=r;return this.tags[e]=t,!0}case`%YAML`:{if(this.yaml.explicit=!0,r.length!==1)return n(0,`%YAML directive should contain exactly one part`),!1;let[e]=r;if(e===`1.1`||e===`1.2`)return this.yaml.version=e,!0;{let t=/^\d+\.\d+$/.test(e);return n(6,`Unsupported YAML version ${e}`,t),!1}}default:return n(0,`Unknown directive ${i}`,!0),!1}}tagName(e,t){if(e===`!`)return`!`;if(e[0]!==`!`)return t(`Not a valid tag: ${e}`),null;if(e[1]===`<`){let n=e.slice(2,-1);return n===`!`||n===`!!`?(t(`Verbatim tags aren't resolved, so ${e} is invalid.`),null):(e[e.length-1]!==`>`&&t(`Verbatim tags must end with a >`),n)}let[,n,r]=e.match(/^(.*!)([^!]*)$/s);r||t(`The ${e} tag has no suffix`);let i=this.tags[n];if(i)try{return i+decodeURIComponent(r)}catch(e){return t(String(e)),null}return n===`!`?e:(t(`Could not resolve tag: ${e}`),null)}tagString(e){for(let[t,n]of Object.entries(this.tags))if(e.startsWith(n))return t+fu(e.substring(n.length));return e[0]===`!`?e:`!<${e}>`}toString(e){let t=this.yaml.explicit?[`%YAML ${this.yaml.version||`1.2`}`]:[],n=Object.entries(this.tags),r;if(e&&n.length>0&&X(e.contents)){let t={};iu(e.contents,(e,n)=>{X(n)&&n.tag&&(t[n.tag]=!0)}),r=Object.keys(t)}else r=[];for(let[i,a]of n)i===`!!`&&a===`tag:yaml.org,2002:`||(!e||r.some(e=>e.startsWith(a)))&&t.push(`%TAG ${i} ${a}`);return t.join(`
`)}};pu.defaultYaml={explicit:!1,version:`1.2`},pu.defaultTags={"!!":`tag:yaml.org,2002:`};function mu(e){if(/[\x00-\x19\s,[\]{}]/.test(e)){let t=`Anchor must not contain whitespace or control characters: ${JSON.stringify(e)}`;throw Error(t)}return!0}function hu(e){let t=new Set;return iu(e,{Value(e,n){n.anchor&&t.add(n.anchor)}}),t}function gu(e,t){for(let n=1;;++n){let r=`${e}${n}`;if(!t.has(r))return r}}function _u(e,t){let n=[],r=new Map,i=null;return{onAnchor:r=>{n.push(r),i??=hu(e);let a=gu(t,i);return i.add(a),a},setAnchors:()=>{for(let e of n){let t=r.get(e);if(typeof t==`object`&&t.anchor&&(Y(t.node)||$l(t.node)))t.node.anchor=t.anchor;else{let t=Error(`Failed to resolve repeated object (this should not happen)`);throw t.source=e,t}}},sourceObjects:r}}function vu(e,t,n,r){if(r&&typeof r==`object`)if(Array.isArray(r))for(let t=0,n=r.length;t<n;++t){let n=r[t],i=vu(e,r,String(t),n);i===void 0?delete r[t]:i!==n&&(r[t]=i)}else if(r instanceof Map)for(let t of Array.from(r.keys())){let n=r.get(t),i=vu(e,r,t,n);i===void 0?r.delete(t):i!==n&&r.set(t,i)}else if(r instanceof Set)for(let t of Array.from(r)){let n=vu(e,r,t,t);n===void 0?r.delete(t):n!==t&&(r.delete(t),r.add(n))}else for(let[t,n]of Object.entries(r)){let i=vu(e,r,t,n);i===void 0?delete r[t]:i!==n&&(r[t]=i)}return e.call(t,n,r)}function yu(e,t,n){if(Array.isArray(e))return e.map((e,t)=>yu(e,String(t),n));if(e&&typeof e.toJSON==`function`){if(!n||!eu(e))return e.toJSON(t,n);let r={aliasCount:0,count:1,res:void 0};n.anchors.set(e,r),n.onCreate=e=>{r.res=e,delete n.onCreate};let i=e.toJSON(t,n);return n.onCreate&&n.onCreate(i),i}return typeof e==`bigint`&&!n?.keep?Number(e):e}var bu=class{constructor(e){Object.defineProperty(this,Jl,{value:e})}clone(){let e=Object.create(Object.getPrototypeOf(this),Object.getOwnPropertyDescriptors(this));return this.range&&(e.range=this.range.slice()),e}toJS(e,{mapAsMap:t,maxAliasCount:n,onAnchor:r,reviver:i}={}){if(!Xl(e))throw TypeError(`A document argument is required`);let a={anchors:new Map,doc:e,keep:!0,mapAsMap:t===!0,mapKeyWarned:!1,maxAliasCount:typeof n==`number`?n:100},o=yu(this,``,a);if(typeof r==`function`)for(let{count:e,res:t}of a.anchors.values())r(t,e);return typeof i==`function`?vu(i,{"":o},``,o):o}},xu=class extends bu{constructor(e){super(Hl),this.source=e,Object.defineProperty(this,`tag`,{set(){throw Error(`Alias nodes cannot have tags`)}})}resolve(e,t){let n;t?.aliasResolveCache?n=t.aliasResolveCache:(n=[],iu(e,{Node:(e,t)=>{(Yl(t)||eu(t))&&n.push(t)}}),t&&(t.aliasResolveCache=n));let r;for(let e of n){if(e===this)break;e.anchor===this.source&&(r=e)}return r}toJSON(e,t){if(!t)return{source:this.source};let{anchors:n,doc:r,maxAliasCount:i}=t,a=this.resolve(r,t);if(!a){let e=`Unresolved alias (the anchor must be set before the alias): ${this.source}`;throw ReferenceError(e)}let o=n.get(a);if(o||=(yu(a,null,t),n.get(a)),o?.res===void 0)throw ReferenceError(`This should not happen: Alias anchor was not resolved?`);if(i>=0&&(o.count+=1,o.aliasCount===0&&(o.aliasCount=Su(r,a,n)),o.count*o.aliasCount>i))throw ReferenceError(`Excessive alias count indicates a resource exhaustion attack`);return o.res}toString(e,t,n){let r=`*${this.source}`;if(e){if(mu(this.source),e.options.verifyAliasOrder&&!e.anchors.has(this.source)){let e=`Unresolved alias (the anchor must be set before the alias): ${this.source}`;throw Error(e)}if(e.implicitKey)return`${r} `}return r}};function Su(e,t,n){if(Yl(t)){let r=t.resolve(e),i=n&&r&&n.get(r);return i?i.count*i.aliasCount:0}else if($l(t)){let r=0;for(let i of t.items){let t=Su(e,i,n);t>r&&(r=t)}return r}else if(J(t)){let r=Su(e,t.key,n),i=Su(e,t.value,n);return Math.max(r,i)}return 1}var Cu=e=>!e||typeof e!=`function`&&typeof e!=`object`,Z=class extends bu{constructor(e){super(Kl),this.value=e}toJSON(e,t){return t?.keep?this.value:yu(this.value,e,t)}toString(){return String(this.value)}};Z.BLOCK_FOLDED=`BLOCK_FOLDED`,Z.BLOCK_LITERAL=`BLOCK_LITERAL`,Z.PLAIN=`PLAIN`,Z.QUOTE_DOUBLE=`QUOTE_DOUBLE`,Z.QUOTE_SINGLE=`QUOTE_SINGLE`;var wu=`tag:yaml.org,2002:`;function Tu(e,t,n){if(t){let e=n.filter(e=>e.tag===t),r=e.find(e=>!e.format)??e[0];if(!r)throw Error(`Tag ${t} not found`);return r}return n.find(t=>t.identify?.(e)&&!t.format)}function Eu(e,t,n){if(Xl(e)&&(e=e.contents),X(e))return e;if(J(e)){let t=n.schema[Wl].createNode?.(n.schema,null,n);return t.items.push(e),t}(e instanceof String||e instanceof Number||e instanceof Boolean||typeof BigInt<`u`&&e instanceof BigInt)&&(e=e.valueOf());let{aliasDuplicateObjects:r,onAnchor:i,onTagObj:a,schema:o,sourceObjects:s}=n,c;if(r&&e&&typeof e==`object`){if(c=s.get(e),c)return c.anchor??=i(e),new xu(c.anchor);c={anchor:null,node:null},s.set(e,c)}t?.startsWith(`!!`)&&(t=wu+t.slice(2));let l=Tu(e,t,o.tags);if(!l){if(e&&typeof e.toJSON==`function`&&(e=e.toJSON()),!e||typeof e!=`object`){let t=new Z(e);return c&&(c.node=t),t}l=e instanceof Map?o[Wl]:Symbol.iterator in Object(e)?o[ql]:o[Wl]}a&&(a(l),delete n.onTagObj);let u=l?.createNode?l.createNode(n.schema,e,n):typeof l?.nodeClass?.from==`function`?l.nodeClass.from(n.schema,e,n):new Z(e);return t?u.tag=t:l.default||(u.tag=l.tag),c&&(c.node=u),u}function Du(e,t,n){let r=n;for(let e=t.length-1;e>=0;--e){let n=t[e];if(typeof n==`number`&&Number.isInteger(n)&&n>=0){let e=[];e[n]=r,r=e}else r=new Map([[n,r]])}return Eu(r,void 0,{aliasDuplicateObjects:!1,keepUndefined:!1,onAnchor:()=>{throw Error(`This should not happen, please report a bug.`)},schema:e,sourceObjects:new Map})}var Ou=e=>e==null||typeof e==`object`&&!!e[Symbol.iterator]().next().done,ku=class extends bu{constructor(e,t){super(e),Object.defineProperty(this,`schema`,{value:t,configurable:!0,enumerable:!1,writable:!0})}clone(e){let t=Object.create(Object.getPrototypeOf(this),Object.getOwnPropertyDescriptors(this));return e&&(t.schema=e),t.items=t.items.map(t=>X(t)||J(t)?t.clone(e):t),this.range&&(t.range=this.range.slice()),t}addIn(e,t){if(Ou(e))this.add(t);else{let[n,...r]=e,i=this.get(n,!0);if($l(i))i.addIn(r,t);else if(i===void 0&&this.schema)this.set(n,Du(this.schema,r,t));else throw Error(`Expected YAML collection at ${n}. Remaining path: ${r}`)}}deleteIn(e){let[t,...n]=e;if(n.length===0)return this.delete(t);let r=this.get(t,!0);if($l(r))return r.deleteIn(n);throw Error(`Expected YAML collection at ${t}. Remaining path: ${n}`)}getIn(e,t){let[n,...r]=e,i=this.get(n,!0);return r.length===0?!t&&Y(i)?i.value:i:$l(i)?i.getIn(r,t):void 0}hasAllNullValues(e){return this.items.every(t=>{if(!J(t))return!1;let n=t.value;return n==null||e&&Y(n)&&n.value==null&&!n.commentBefore&&!n.comment&&!n.tag})}hasIn(e){let[t,...n]=e;if(n.length===0)return this.has(t);let r=this.get(t,!0);return $l(r)?r.hasIn(n):!1}setIn(e,t){let[n,...r]=e;if(r.length===0)this.set(n,t);else{let e=this.get(n,!0);if($l(e))e.setIn(r,t);else if(e===void 0&&this.schema)this.set(n,Du(this.schema,r,t));else throw Error(`Expected YAML collection at ${n}. Remaining path: ${r}`)}}},Au=e=>e.replace(/^(?!$)(?: $)?/gm,`#`);function ju(e,t){return/^\n+$/.test(e)?e.substring(1):t?e.replace(/^(?! *$)/gm,t):e}var Mu=(e,t,n)=>e.endsWith(`
`)?ju(n,t):n.includes(`
`)?`
`+ju(n,t):(e.endsWith(` `)?``:` `)+n,Nu=`flow`,Pu=`block`,Fu=`quoted`;function Iu(e,t,n=`flow`,{indentAtStart:r,lineWidth:i=80,minContentWidth:a=20,onFold:o,onOverflow:s}={}){if(!i||i<0)return e;i<a&&(a=0);let c=Math.max(1+a,1+i-t.length);if(e.length<=c)return e;let l=[],u={},d=i-t.length;typeof r==`number`&&(r>i-Math.max(2,a)?l.push(0):d=i-r);let f,p,m=!1,h=-1,g=-1,_=-1;n===`block`&&(h=Lu(e,h,t.length),h!==-1&&(d=h+c));for(let r;r=e[h+=1];){if(n===`quoted`&&r===`\\`){switch(g=h,e[h+1]){case`x`:h+=3;break;case`u`:h+=5;break;case`U`:h+=9;break;default:h+=1}_=h}if(r===`
`)n===`block`&&(h=Lu(e,h,t.length)),d=h+t.length+c,f=void 0;else{if(r===` `&&p&&p!==` `&&p!==`
`&&p!==`	`){let t=e[h+1];t&&t!==` `&&t!==`
`&&t!==`	`&&(f=h)}if(h>=d)if(f)l.push(f),d=f+c,f=void 0;else if(n===`quoted`){for(;p===` `||p===`	`;)p=r,r=e[h+=1],m=!0;let t=h>_+1?h-2:g-1;if(u[t])return e;l.push(t),u[t]=!0,d=t+c,f=void 0}else m=!0}p=r}if(m&&s&&s(),l.length===0)return e;o&&o();let v=e.slice(0,l[0]);for(let r=0;r<l.length;++r){let i=l[r],a=l[r+1]||e.length;i===0?v=`\n${t}${e.slice(0,a)}`:(n===`quoted`&&u[i]&&(v+=`${e[i]}\\`),v+=`\n${t}${e.slice(i+1,a)}`)}return v}function Lu(e,t,n){let r=t,i=t+1,a=e[i];for(;a===` `||a===`	`;)if(t<i+n)a=e[++t];else{do a=e[++t];while(a&&a!==`
`);r=t,i=t+1,a=e[i]}return r}var Ru=(e,t)=>({indentAtStart:t?e.indent.length:e.indentAtStart,lineWidth:e.options.lineWidth,minContentWidth:e.options.minContentWidth}),zu=e=>/^(%|---|\.\.\.)/m.test(e);function Bu(e,t,n){if(!t||t<0)return!1;let r=t-n,i=e.length;if(i<=r)return!1;for(let t=0,n=0;t<i;++t)if(e[t]===`
`){if(t-n>r)return!0;if(n=t+1,i-n<=r)return!1}return!0}function Vu(e,t){let n=JSON.stringify(e);if(t.options.doubleQuotedAsJSON)return n;let{implicitKey:r}=t,i=t.options.doubleQuotedMinMultiLineLength,a=t.indent||(zu(e)?`  `:``),o=``,s=0;for(let e=0,t=n[e];t;t=n[++e])if(t===` `&&n[e+1]===`\\`&&n[e+2]===`n`&&(o+=n.slice(s,e)+`\\ `,e+=1,s=e,t=`\\`),t===`\\`)switch(n[e+1]){case`u`:{o+=n.slice(s,e);let t=n.substr(e+2,4);switch(t){case`0000`:o+=`\\0`;break;case`0007`:o+=`\\a`;break;case`000b`:o+=`\\v`;break;case`001b`:o+=`\\e`;break;case`0085`:o+=`\\N`;break;case`00a0`:o+=`\\_`;break;case`2028`:o+=`\\L`;break;case`2029`:o+=`\\P`;break;default:t.substr(0,2)===`00`?o+=`\\x`+t.substr(2):o+=n.substr(e,6)}e+=5,s=e+1}break;case`n`:if(r||n[e+2]===`"`||n.length<i)e+=1;else{for(o+=n.slice(s,e)+`

`;n[e+2]===`\\`&&n[e+3]===`n`&&n[e+4]!==`"`;)o+=`
`,e+=2;o+=a,n[e+2]===` `&&(o+=`\\`),e+=1,s=e+1}break;default:e+=1}return o=s?o+n.slice(s):n,r?o:Iu(o,a,Fu,Ru(t,!1))}function Hu(e,t){if(t.options.singleQuote===!1||t.implicitKey&&e.includes(`
`)||/[ \t]\n|\n[ \t]/.test(e))return Vu(e,t);let n=t.indent||(zu(e)?`  `:``),r=`'`+e.replace(/'/g,`''`).replace(/\n+/g,`$&\n${n}`)+`'`;return t.implicitKey?r:Iu(r,n,Nu,Ru(t,!1))}function Uu(e,t){let{singleQuote:n}=t.options,r;if(n===!1)r=Vu;else{let t=e.includes(`"`),i=e.includes(`'`);r=t&&!i?Hu:i&&!t?Vu:n?Hu:Vu}return r(e,t)}var Wu;try{Wu=RegExp(`(^|(?<!
))
+(?!
|$)`,`g`)}catch{Wu=/\n+(?!\n|$)/g}function Gu({comment:e,type:t,value:n},r,i,a){let{blockQuote:o,commentString:s,lineWidth:c}=r.options;if(!o||/\n[\t ]+$/.test(n))return Uu(n,r);let l=r.indent||(r.forceBlockIndent||zu(n)?`  `:``),u=o===`literal`?!0:o===`folded`||t===Z.BLOCK_FOLDED?!1:t===Z.BLOCK_LITERAL?!0:!Bu(n,c,l.length);if(!n)return u?`|
`:`>
`;let d,f;for(f=n.length;f>0;--f){let e=n[f-1];if(e!==`
`&&e!==`	`&&e!==` `)break}let p=n.substring(f),m=p.indexOf(`
`);m===-1?d=`-`:n===p||m!==p.length-1?(d=`+`,a&&a()):d=``,p&&=(n=n.slice(0,-p.length),p[p.length-1]===`
`&&(p=p.slice(0,-1)),p.replace(Wu,`$&${l}`));let h=!1,g,_=-1;for(g=0;g<n.length;++g){let e=n[g];if(e===` `)h=!0;else if(e===`
`)_=g;else break}let v=n.substring(0,_<g?_+1:g);v&&=(n=n.substring(v.length),v.replace(/\n+/g,`$&${l}`));let y=(h?l?`2`:`1`:``)+d;if(e&&(y+=` `+s(e.replace(/ ?[\r\n]+/g,` `)),i&&i()),!u){let e=n.replace(/\n+/g,`
$&`).replace(/(?:^|\n)([\t ].*)(?:([\n\t ]*)\n(?![\n\t ]))?/g,`$1$2`).replace(/\n+/g,`$&${l}`),i=!1,a=Ru(r,!0);o!==`folded`&&t!==Z.BLOCK_FOLDED&&(a.onOverflow=()=>{i=!0});let s=Iu(`${v}${e}${p}`,l,Pu,a);if(!i)return`>${y}\n${l}${s}`}return n=n.replace(/\n+/g,`$&${l}`),`|${y}\n${l}${v}${n}${p}`}function Ku(e,t,n,r){let{type:i,value:a}=e,{actualString:o,implicitKey:s,indent:c,indentStep:l,inFlow:u}=t;if(s&&a.includes(`
`)||u&&/[[\]{},]/.test(a))return Uu(a,t);if(/^[\n\t ,[\]{}#&*!|>'"%@`]|^[?-]$|^[?-][ \t]|[\n:][ \t]|[ \t]\n|[\n\t ]#|[\n\t :]$/.test(a))return s||u||!a.includes(`
`)?Uu(a,t):Gu(e,t,n,r);if(!s&&!u&&i!==Z.PLAIN&&a.includes(`
`))return Gu(e,t,n,r);if(zu(a)){if(c===``)return t.forceBlockIndent=!0,Gu(e,t,n,r);if(s&&c===l)return Uu(a,t)}let d=a.replace(/\n+/g,`$&\n${c}`);if(o){let e=e=>e.default&&e.tag!==`tag:yaml.org,2002:str`&&e.test?.test(d),{compat:n,tags:r}=t.doc.schema;if(r.some(e)||n?.some(e))return Uu(a,t)}return s?d:Iu(d,c,Nu,Ru(t,!1))}function qu(e,t,n,r){let{implicitKey:i,inFlow:a}=t,o=typeof e.value==`string`?e:Object.assign({},e,{value:String(e.value)}),{type:s}=e;s!==Z.QUOTE_DOUBLE&&/[\x00-\x08\x0b-\x1f\x7f-\x9f\u{D800}-\u{DFFF}]/u.test(o.value)&&(s=Z.QUOTE_DOUBLE);let c=e=>{switch(e){case Z.BLOCK_FOLDED:case Z.BLOCK_LITERAL:return i||a?Uu(o.value,t):Gu(o,t,n,r);case Z.QUOTE_DOUBLE:return Vu(o.value,t);case Z.QUOTE_SINGLE:return Hu(o.value,t);case Z.PLAIN:return Ku(o,t,n,r);default:return null}},l=c(s);if(l===null){let{defaultKeyType:e,defaultStringType:n}=t.options,r=i&&e||n;if(l=c(r),l===null)throw Error(`Unsupported default string type ${r}`)}return l}function Ju(e,t){let n=Object.assign({blockQuote:!0,commentString:Au,defaultKeyType:null,defaultStringType:`PLAIN`,directives:null,doubleQuotedAsJSON:!1,doubleQuotedMinMultiLineLength:40,falseStr:`false`,flowCollectionPadding:!0,indentSeq:!0,lineWidth:80,minContentWidth:20,nullStr:`null`,simpleKeys:!1,singleQuote:null,trailingComma:!1,trueStr:`true`,verifyAliasOrder:!0},e.schema.toStringOptions,t),r;switch(n.collectionStyle){case`block`:r=!1;break;case`flow`:r=!0;break;default:r=null}return{anchors:new Set,doc:e,flowCollectionPadding:n.flowCollectionPadding?` `:``,indent:``,indentStep:typeof n.indent==`number`?` `.repeat(n.indent):`  `,inFlow:r,options:n}}function Yu(e,t){if(t.tag){let n=e.filter(e=>e.tag===t.tag);if(n.length>0)return n.find(e=>e.format===t.format)??n[0]}let n,r;if(Y(t)){r=t.value;let i=e.filter(e=>e.identify?.(r));if(i.length>1){let e=i.filter(e=>e.test);e.length>0&&(i=e)}n=i.find(e=>e.format===t.format)??i.find(e=>!e.format)}else r=t,n=e.find(e=>e.nodeClass&&r instanceof e.nodeClass);if(!n){let e=r?.constructor?.name??(r===null?`null`:typeof r);throw Error(`Tag not resolved for ${e} value`)}return n}function Xu(e,t,{anchors:n,doc:r}){if(!r.directives)return``;let i=[],a=(Y(e)||$l(e))&&e.anchor;a&&mu(a)&&(n.add(a),i.push(`&${a}`));let o=e.tag??(t.default?null:t.tag);return o&&i.push(r.directives.tagString(o)),i.join(` `)}function Zu(e,t,n,r){if(J(e))return e.toString(t,n,r);if(Yl(e)){if(t.doc.directives)return e.toString(t);if(t.resolvedAliases?.has(e))throw TypeError(`Cannot stringify circular structure without alias nodes`);t.resolvedAliases?t.resolvedAliases.add(e):t.resolvedAliases=new Set([e]),e=e.resolve(t.doc)}let i,a=X(e)?e:t.doc.createNode(e,{onTagObj:e=>i=e});i??=Yu(t.doc.schema.tags,a);let o=Xu(a,i,t);o.length>0&&(t.indentAtStart=(t.indentAtStart??0)+o.length+1);let s=typeof i.stringify==`function`?i.stringify(a,t,n,r):Y(a)?qu(a,t,n,r):a.toString(t,n,r);return o?Y(a)||s[0]===`{`||s[0]===`[`?`${o} ${s}`:`${o}\n${t.indent}${s}`:s}function Qu({key:e,value:t},n,r,i){let{allNullValues:a,doc:o,indent:s,indentStep:c,options:{commentString:l,indentSeq:u,simpleKeys:d}}=n,f=X(e)&&e.comment||null;if(d){if(f)throw Error(`With simple keys, key nodes cannot have comments`);if($l(e)||!X(e)&&typeof e==`object`)throw Error(`With simple keys, collection cannot be used as a key value`)}let p=!d&&(!e||f&&t==null&&!n.inFlow||$l(e)||(Y(e)?e.type===Z.BLOCK_FOLDED||e.type===Z.BLOCK_LITERAL:typeof e==`object`));n=Object.assign({},n,{allNullValues:!1,implicitKey:!p&&(d||!a),indent:s+c});let m=!1,h=!1,g=Zu(e,n,()=>m=!0,()=>h=!0);if(!p&&!n.inFlow&&g.length>1024){if(d)throw Error(`With simple keys, single line scalar must not span more than 1024 characters`);p=!0}if(n.inFlow){if(a||t==null)return m&&r&&r(),g===``?`?`:p?`? ${g}`:g}else if(a&&!d||t==null&&p)return g=`? ${g}`,f&&!m?g+=Mu(g,n.indent,l(f)):h&&i&&i(),g;m&&(f=null),p?(f&&(g+=Mu(g,n.indent,l(f))),g=`? ${g}\n${s}:`):(g=`${g}:`,f&&(g+=Mu(g,n.indent,l(f))));let _,v,y;X(t)?(_=!!t.spaceBefore,v=t.commentBefore,y=t.comment):(_=!1,v=null,y=null,t&&typeof t==`object`&&(t=o.createNode(t))),n.implicitKey=!1,!p&&!f&&Y(t)&&(n.indentAtStart=g.length+1),h=!1,!u&&c.length>=2&&!n.inFlow&&!p&&Ql(t)&&!t.flow&&!t.tag&&!t.anchor&&(n.indent=n.indent.substring(2));let b=!1,x=Zu(t,n,()=>b=!0,()=>h=!0),S=` `;if(f||_||v){if(S=_?`
`:``,v){let e=l(v);S+=`\n${ju(e,n.indent)}`}x===``&&!n.inFlow?S===`
`&&y&&(S=`

`):S+=`\n${n.indent}`}else if(!p&&$l(t)){let e=x[0],r=x.indexOf(`
`),i=r!==-1,a=n.inFlow??t.flow??t.items.length===0;if(i||!a){let t=!1;if(i&&(e===`&`||e===`!`)){let n=x.indexOf(` `);e===`&`&&n!==-1&&n<r&&x[n+1]===`!`&&(n=x.indexOf(` `,n+1)),(n===-1||r<n)&&(t=!0)}t||(S=`\n${n.indent}`)}}else (x===``||x[0]===`
`)&&(S=``);return g+=S+x,n.inFlow?b&&r&&r():y&&!b?g+=Mu(g,n.indent,l(y)):h&&i&&i(),g}function $u(e,t){(e===`debug`||e===`warn`)&&console.warn(t)}var ed=`<<`,td={identify:e=>e===ed||typeof e==`symbol`&&e.description===ed,default:`key`,tag:`tag:yaml.org,2002:merge`,test:/^<<$/,resolve:()=>Object.assign(new Z(Symbol(ed)),{addToJSMap:rd}),stringify:()=>ed},nd=(e,t)=>(td.identify(t)||Y(t)&&(!t.type||t.type===Z.PLAIN)&&td.identify(t.value))&&e?.doc.schema.tags.some(e=>e.tag===td.tag&&e.default);function rd(e,t,n){if(n=e&&Yl(n)?n.resolve(e.doc):n,Ql(n))for(let r of n.items)id(e,t,r);else if(Array.isArray(n))for(let r of n)id(e,t,r);else id(e,t,n)}function id(e,t,n){let r=e&&Yl(n)?n.resolve(e.doc):n;if(!Zl(r))throw Error(`Merge sources must be maps or map aliases`);let i=r.toJSON(null,e,Map);for(let[e,n]of i)t instanceof Map?t.has(e)||t.set(e,n):t instanceof Set?t.add(e):Object.prototype.hasOwnProperty.call(t,e)||Object.defineProperty(t,e,{value:n,writable:!0,enumerable:!0,configurable:!0});return t}function ad(e,t,{key:n,value:r}){if(X(n)&&n.addToJSMap)n.addToJSMap(e,t,r);else if(nd(e,n))rd(e,t,r);else{let i=yu(n,``,e);if(t instanceof Map)t.set(i,yu(r,i,e));else if(t instanceof Set)t.add(i);else{let a=od(n,i,e),o=yu(r,a,e);a in t?Object.defineProperty(t,a,{value:o,writable:!0,enumerable:!0,configurable:!0}):t[a]=o}}return t}function od(e,t,n){if(t===null)return``;if(typeof t!=`object`)return String(t);if(X(e)&&n?.doc){let t=Ju(n.doc,{});t.anchors=new Set;for(let e of n.anchors.keys())t.anchors.add(e.anchor);t.inFlow=!0,t.inStringifyKey=!0;let r=e.toString(t);if(!n.mapKeyWarned){let e=JSON.stringify(r);e.length>40&&(e=e.substring(0,36)+`..."`),$u(n.doc.options.logLevel,`Keys with collection values will be stringified due to JS Object restrictions: ${e}. Set mapAsMap: true to use object keys.`),n.mapKeyWarned=!0}return r}return JSON.stringify(t)}function sd(e,t,n){return new cd(Eu(e,void 0,n),Eu(t,void 0,n))}var cd=class e{constructor(e,t=null){Object.defineProperty(this,Jl,{value:Gl}),this.key=e,this.value=t}clone(t){let{key:n,value:r}=this;return X(n)&&(n=n.clone(t)),X(r)&&(r=r.clone(t)),new e(n,r)}toJSON(e,t){return ad(t,t?.mapAsMap?new Map:{},this)}toString(e,t,n){return e?.doc?Qu(this,e,t,n):JSON.stringify(this)}};function ld(e,t,n){return(t.inFlow??e.flow?dd:ud)(e,t,n)}function ud({comment:e,items:t},n,{blockItemPrefix:r,flowChars:i,itemIndent:a,onChompKeep:o,onComment:s}){let{indent:c,options:{commentString:l}}=n,u=Object.assign({},n,{indent:a,type:null}),d=!1,f=[];for(let e=0;e<t.length;++e){let i=t[e],o=null;if(X(i))!d&&i.spaceBefore&&f.push(``),fd(n,f,i.commentBefore,d),i.comment&&(o=i.comment);else if(J(i)){let e=X(i.key)?i.key:null;e&&(!d&&e.spaceBefore&&f.push(``),fd(n,f,e.commentBefore,d))}d=!1;let s=Zu(i,u,()=>o=null,()=>d=!0);o&&(s+=Mu(s,a,l(o))),d&&o&&(d=!1),f.push(r+s)}let p;if(f.length===0)p=i.start+i.end;else{p=f[0];for(let e=1;e<f.length;++e){let t=f[e];p+=t?`\n${c}${t}`:`
`}}return e?(p+=`
`+ju(l(e),c),s&&s()):d&&o&&o(),p}function dd({items:e},t,{flowChars:n,itemIndent:r}){let{indent:i,indentStep:a,flowCollectionPadding:o,options:{commentString:s}}=t;r+=a;let c=Object.assign({},t,{indent:r,inFlow:!0,type:null}),l=!1,u=0,d=[];for(let n=0;n<e.length;++n){let i=e[n],a=null;if(X(i))i.spaceBefore&&d.push(``),fd(t,d,i.commentBefore,!1),i.comment&&(a=i.comment);else if(J(i)){let e=X(i.key)?i.key:null;e&&(e.spaceBefore&&d.push(``),fd(t,d,e.commentBefore,!1),e.comment&&(l=!0));let n=X(i.value)?i.value:null;n?(n.comment&&(a=n.comment),n.commentBefore&&(l=!0)):i.value==null&&e?.comment&&(a=e.comment)}a&&(l=!0);let o=Zu(i,c,()=>a=null);l||=d.length>u||o.includes(`
`),n<e.length-1?o+=`,`:t.options.trailingComma&&(t.options.lineWidth>0&&(l||=d.reduce((e,t)=>e+t.length+2,2)+(o.length+2)>t.options.lineWidth),l&&(o+=`,`)),a&&(o+=Mu(o,r,s(a))),d.push(o),u=d.length}let{start:f,end:p}=n;if(d.length===0)return f+p;if(!l){let e=d.reduce((e,t)=>e+t.length+2,2);l=t.options.lineWidth>0&&e>t.options.lineWidth}if(l){let e=f;for(let t of d)e+=t?`\n${a}${i}${t}`:`
`;return`${e}\n${i}${p}`}else return`${f}${o}${d.join(` `)}${o}${p}`}function fd({indent:e,options:{commentString:t}},n,r,i){if(r&&i&&(r=r.replace(/^\n+/,``)),r){let i=ju(t(r),e);n.push(i.trimStart())}}function pd(e,t){let n=Y(t)?t.value:t;for(let r of e)if(J(r)&&(r.key===t||r.key===n||Y(r.key)&&r.key.value===n))return r}var md=class extends ku{static get tagName(){return`tag:yaml.org,2002:map`}constructor(e){super(Wl,e),this.items=[]}static from(e,t,n){let{keepUndefined:r,replacer:i}=n,a=new this(e),o=(e,o)=>{if(typeof i==`function`)o=i.call(t,e,o);else if(Array.isArray(i)&&!i.includes(e))return;(o!==void 0||r)&&a.items.push(sd(e,o,n))};if(t instanceof Map)for(let[e,n]of t)o(e,n);else if(t&&typeof t==`object`)for(let e of Object.keys(t))o(e,t[e]);return typeof e.sortMapEntries==`function`&&a.items.sort(e.sortMapEntries),a}add(e,t){let n;n=J(e)?e:!e||typeof e!=`object`||!(`key`in e)?new cd(e,e?.value):new cd(e.key,e.value);let r=pd(this.items,n.key),i=this.schema?.sortMapEntries;if(r){if(!t)throw Error(`Key ${n.key} already set`);Y(r.value)&&Cu(n.value)?r.value.value=n.value:r.value=n.value}else if(i){let e=this.items.findIndex(e=>i(n,e)<0);e===-1?this.items.push(n):this.items.splice(e,0,n)}else this.items.push(n)}delete(e){let t=pd(this.items,e);return t?this.items.splice(this.items.indexOf(t),1).length>0:!1}get(e,t){let n=pd(this.items,e)?.value;return(!t&&Y(n)?n.value:n)??void 0}has(e){return!!pd(this.items,e)}set(e,t){this.add(new cd(e,t),!0)}toJSON(e,t,n){let r=n?new n:t?.mapAsMap?new Map:{};t?.onCreate&&t.onCreate(r);for(let e of this.items)ad(t,r,e);return r}toString(e,t,n){if(!e)return JSON.stringify(this);for(let e of this.items)if(!J(e))throw Error(`Map items must all be pairs; found ${JSON.stringify(e)} instead`);return!e.allNullValues&&this.hasAllNullValues(!1)&&(e=Object.assign({},e,{allNullValues:!0})),ld(this,e,{blockItemPrefix:``,flowChars:{start:`{`,end:`}`},itemIndent:e.indent||``,onChompKeep:n,onComment:t})}},hd={collection:`map`,default:!0,nodeClass:md,tag:`tag:yaml.org,2002:map`,resolve(e,t){return Zl(e)||t(`Expected a mapping for this tag`),e},createNode:(e,t,n)=>md.from(e,t,n)},gd=class extends ku{static get tagName(){return`tag:yaml.org,2002:seq`}constructor(e){super(ql,e),this.items=[]}add(e){this.items.push(e)}delete(e){let t=_d(e);return typeof t==`number`?this.items.splice(t,1).length>0:!1}get(e,t){let n=_d(e);if(typeof n!=`number`)return;let r=this.items[n];return!t&&Y(r)?r.value:r}has(e){let t=_d(e);return typeof t==`number`&&t<this.items.length}set(e,t){let n=_d(e);if(typeof n!=`number`)throw Error(`Expected a valid index, not ${e}.`);let r=this.items[n];Y(r)&&Cu(t)?r.value=t:this.items[n]=t}toJSON(e,t){let n=[];t?.onCreate&&t.onCreate(n);let r=0;for(let e of this.items)n.push(yu(e,String(r++),t));return n}toString(e,t,n){return e?ld(this,e,{blockItemPrefix:`- `,flowChars:{start:`[`,end:`]`},itemIndent:(e.indent||``)+`  `,onChompKeep:n,onComment:t}):JSON.stringify(this)}static from(e,t,n){let{replacer:r}=n,i=new this(e);if(t&&Symbol.iterator in Object(t)){let e=0;for(let a of t){if(typeof r==`function`){let n=t instanceof Set?a:String(e++);a=r.call(t,n,a)}i.items.push(Eu(a,void 0,n))}}return i}};function _d(e){let t=Y(e)?e.value:e;return t&&typeof t==`string`&&(t=Number(t)),typeof t==`number`&&Number.isInteger(t)&&t>=0?t:null}var vd={collection:`seq`,default:!0,nodeClass:gd,tag:`tag:yaml.org,2002:seq`,resolve(e,t){return Ql(e)||t(`Expected a sequence for this tag`),e},createNode:(e,t,n)=>gd.from(e,t,n)},yd={identify:e=>typeof e==`string`,default:!0,tag:`tag:yaml.org,2002:str`,resolve:e=>e,stringify(e,t,n,r){return t=Object.assign({actualString:!0},t),qu(e,t,n,r)}},bd={identify:e=>e==null,createNode:()=>new Z(null),default:!0,tag:`tag:yaml.org,2002:null`,test:/^(?:~|[Nn]ull|NULL)?$/,resolve:()=>new Z(null),stringify:({source:e},t)=>typeof e==`string`&&bd.test.test(e)?e:t.options.nullStr},xd={identify:e=>typeof e==`boolean`,default:!0,tag:`tag:yaml.org,2002:bool`,test:/^(?:[Tt]rue|TRUE|[Ff]alse|FALSE)$/,resolve:e=>new Z(e[0]===`t`||e[0]===`T`),stringify({source:e,value:t},n){return e&&xd.test.test(e)&&t===(e[0]===`t`||e[0]===`T`)?e:t?n.options.trueStr:n.options.falseStr}};function Sd({format:e,minFractionDigits:t,tag:n,value:r}){if(typeof r==`bigint`)return String(r);let i=typeof r==`number`?r:Number(r);if(!isFinite(i))return isNaN(i)?`.nan`:i<0?`-.inf`:`.inf`;let a=Object.is(r,-0)?`-0`:JSON.stringify(r);if(!e&&t&&(!n||n===`tag:yaml.org,2002:float`)&&/^\d/.test(a)){let e=a.indexOf(`.`);e<0&&(e=a.length,a+=`.`);let n=t-(a.length-e-1);for(;n-- >0;)a+=`0`}return a}var Cd={identify:e=>typeof e==`number`,default:!0,tag:`tag:yaml.org,2002:float`,test:/^(?:[-+]?\.(?:inf|Inf|INF)|\.nan|\.NaN|\.NAN)$/,resolve:e=>e.slice(-3).toLowerCase()===`nan`?NaN:e[0]===`-`?-1/0:1/0,stringify:Sd},wd={identify:e=>typeof e==`number`,default:!0,tag:`tag:yaml.org,2002:float`,format:`EXP`,test:/^[-+]?(?:\.[0-9]+|[0-9]+(?:\.[0-9]*)?)[eE][-+]?[0-9]+$/,resolve:e=>parseFloat(e),stringify(e){let t=Number(e.value);return isFinite(t)?t.toExponential():Sd(e)}},Td={identify:e=>typeof e==`number`,default:!0,tag:`tag:yaml.org,2002:float`,test:/^[-+]?(?:\.[0-9]+|[0-9]+\.[0-9]*)$/,resolve(e){let t=new Z(parseFloat(e)),n=e.indexOf(`.`);return n!==-1&&e[e.length-1]===`0`&&(t.minFractionDigits=e.length-n-1),t},stringify:Sd},Ed=e=>typeof e==`bigint`||Number.isInteger(e),Dd=(e,t,n,{intAsBigInt:r})=>r?BigInt(e):parseInt(e.substring(t),n);function Od(e,t,n){let{value:r}=e;return Ed(r)&&r>=0?n+r.toString(t):Sd(e)}var kd={identify:e=>Ed(e)&&e>=0,default:!0,tag:`tag:yaml.org,2002:int`,format:`OCT`,test:/^0o[0-7]+$/,resolve:(e,t,n)=>Dd(e,2,8,n),stringify:e=>Od(e,8,`0o`)},Ad={identify:Ed,default:!0,tag:`tag:yaml.org,2002:int`,test:/^[-+]?[0-9]+$/,resolve:(e,t,n)=>Dd(e,0,10,n),stringify:Sd},jd={identify:e=>Ed(e)&&e>=0,default:!0,tag:`tag:yaml.org,2002:int`,format:`HEX`,test:/^0x[0-9a-fA-F]+$/,resolve:(e,t,n)=>Dd(e,2,16,n),stringify:e=>Od(e,16,`0x`)},Md=[hd,vd,yd,bd,xd,kd,Ad,jd,Cd,wd,Td];function Nd(e){return typeof e==`bigint`||Number.isInteger(e)}var Pd=({value:e})=>JSON.stringify(e),Fd=[{identify:e=>typeof e==`string`,default:!0,tag:`tag:yaml.org,2002:str`,resolve:e=>e,stringify:Pd},{identify:e=>e==null,createNode:()=>new Z(null),default:!0,tag:`tag:yaml.org,2002:null`,test:/^null$/,resolve:()=>null,stringify:Pd},{identify:e=>typeof e==`boolean`,default:!0,tag:`tag:yaml.org,2002:bool`,test:/^true$|^false$/,resolve:e=>e===`true`,stringify:Pd},{identify:Nd,default:!0,tag:`tag:yaml.org,2002:int`,test:/^-?(?:0|[1-9][0-9]*)$/,resolve:(e,t,{intAsBigInt:n})=>n?BigInt(e):parseInt(e,10),stringify:({value:e})=>Nd(e)?e.toString():JSON.stringify(e)},{identify:e=>typeof e==`number`,default:!0,tag:`tag:yaml.org,2002:float`,test:/^-?(?:0|[1-9][0-9]*)(?:\.[0-9]*)?(?:[eE][-+]?[0-9]+)?$/,resolve:e=>parseFloat(e),stringify:Pd}],Id=[hd,vd].concat(Fd,{default:!0,tag:``,test:/^/,resolve(e,t){return t(`Unresolved plain scalar ${JSON.stringify(e)}`),e}}),Ld={identify:e=>e instanceof Uint8Array,default:!1,tag:`tag:yaml.org,2002:binary`,resolve(e,t){if(typeof atob==`function`){let t=atob(e.replace(/[\n\r]/g,``)),n=new Uint8Array(t.length);for(let e=0;e<t.length;++e)n[e]=t.charCodeAt(e);return n}else return t(`This environment does not support reading binary tags; either Buffer or atob is required`),e},stringify({comment:e,type:t,value:n},r,i,a){if(!n)return``;let o=n,s;if(typeof btoa==`function`){let e=``;for(let t=0;t<o.length;++t)e+=String.fromCharCode(o[t]);s=btoa(e)}else throw Error(`This environment does not support writing binary tags; either Buffer or btoa is required`);if(t??=Z.BLOCK_LITERAL,t!==Z.QUOTE_DOUBLE){let e=Math.max(r.options.lineWidth-r.indent.length,r.options.minContentWidth),n=Math.ceil(s.length/e),i=Array(n);for(let t=0,r=0;t<n;++t,r+=e)i[t]=s.substr(r,e);s=i.join(t===Z.BLOCK_LITERAL?`
`:` `)}return qu({comment:e,type:t,value:s},r,i,a)}};function Rd(e,t){if(Ql(e))for(let n=0;n<e.items.length;++n){let r=e.items[n];if(!J(r)){if(Zl(r)){r.items.length>1&&t(`Each pair must have its own sequence indicator`);let e=r.items[0]||new cd(new Z(null));if(r.commentBefore&&(e.key.commentBefore=e.key.commentBefore?`${r.commentBefore}\n${e.key.commentBefore}`:r.commentBefore),r.comment){let t=e.value??e.key;t.comment=t.comment?`${r.comment}\n${t.comment}`:r.comment}r=e}e.items[n]=J(r)?r:new cd(r)}}else t(`Expected a sequence for this tag`);return e}function zd(e,t,n){let{replacer:r}=n,i=new gd(e);i.tag=`tag:yaml.org,2002:pairs`;let a=0;if(t&&Symbol.iterator in Object(t))for(let e of t){typeof r==`function`&&(e=r.call(t,String(a++),e));let o,s;if(Array.isArray(e))if(e.length===2)o=e[0],s=e[1];else throw TypeError(`Expected [key, value] tuple: ${e}`);else if(e&&e instanceof Object){let t=Object.keys(e);if(t.length===1)o=t[0],s=e[o];else throw TypeError(`Expected tuple with one key, not ${t.length} keys`)}else o=e;i.items.push(sd(o,s,n))}return i}var Bd={collection:`seq`,default:!1,tag:`tag:yaml.org,2002:pairs`,resolve:Rd,createNode:zd},Vd=class e extends gd{constructor(){super(),this.add=md.prototype.add.bind(this),this.delete=md.prototype.delete.bind(this),this.get=md.prototype.get.bind(this),this.has=md.prototype.has.bind(this),this.set=md.prototype.set.bind(this),this.tag=e.tag}toJSON(e,t){if(!t)return super.toJSON(e);let n=new Map;t?.onCreate&&t.onCreate(n);for(let e of this.items){let r,i;if(J(e)?(r=yu(e.key,``,t),i=yu(e.value,r,t)):r=yu(e,``,t),n.has(r))throw Error(`Ordered maps must not include duplicate keys`);n.set(r,i)}return n}static from(e,t,n){let r=zd(e,t,n),i=new this;return i.items=r.items,i}};Vd.tag=`tag:yaml.org,2002:omap`;var Hd={collection:`seq`,identify:e=>e instanceof Map,nodeClass:Vd,default:!1,tag:`tag:yaml.org,2002:omap`,resolve(e,t){let n=Rd(e,t),r=[];for(let{key:e}of n.items)Y(e)&&(r.includes(e.value)?t(`Ordered maps must not include duplicate keys: ${e.value}`):r.push(e.value));return Object.assign(new Vd,n)},createNode:(e,t,n)=>Vd.from(e,t,n)};function Ud({value:e,source:t},n){return t&&(e?Wd:Gd).test.test(t)?t:e?n.options.trueStr:n.options.falseStr}var Wd={identify:e=>e===!0,default:!0,tag:`tag:yaml.org,2002:bool`,test:/^(?:Y|y|[Yy]es|YES|[Tt]rue|TRUE|[Oo]n|ON)$/,resolve:()=>new Z(!0),stringify:Ud},Gd={identify:e=>e===!1,default:!0,tag:`tag:yaml.org,2002:bool`,test:/^(?:N|n|[Nn]o|NO|[Ff]alse|FALSE|[Oo]ff|OFF)$/,resolve:()=>new Z(!1),stringify:Ud},Kd={identify:e=>typeof e==`number`,default:!0,tag:`tag:yaml.org,2002:float`,test:/^(?:[-+]?\.(?:inf|Inf|INF)|\.nan|\.NaN|\.NAN)$/,resolve:e=>e.slice(-3).toLowerCase()===`nan`?NaN:e[0]===`-`?-1/0:1/0,stringify:Sd},qd={identify:e=>typeof e==`number`,default:!0,tag:`tag:yaml.org,2002:float`,format:`EXP`,test:/^[-+]?(?:[0-9][0-9_]*)?(?:\.[0-9_]*)?[eE][-+]?[0-9]+$/,resolve:e=>parseFloat(e.replace(/_/g,``)),stringify(e){let t=Number(e.value);return isFinite(t)?t.toExponential():Sd(e)}},Jd={identify:e=>typeof e==`number`,default:!0,tag:`tag:yaml.org,2002:float`,test:/^[-+]?(?:[0-9][0-9_]*)?\.[0-9_]*$/,resolve(e){let t=new Z(parseFloat(e.replace(/_/g,``))),n=e.indexOf(`.`);if(n!==-1){let r=e.substring(n+1).replace(/_/g,``);r[r.length-1]===`0`&&(t.minFractionDigits=r.length)}return t},stringify:Sd},Yd=e=>typeof e==`bigint`||Number.isInteger(e);function Xd(e,t,n,{intAsBigInt:r}){let i=e[0];if((i===`-`||i===`+`)&&(t+=1),e=e.substring(t).replace(/_/g,``),r){switch(n){case 2:e=`0b${e}`;break;case 8:e=`0o${e}`;break;case 16:e=`0x${e}`;break}let t=BigInt(e);return i===`-`?BigInt(-1)*t:t}let a=parseInt(e,n);return i===`-`?-1*a:a}function Zd(e,t,n){let{value:r}=e;if(Yd(r)){let e=r.toString(t);return r<0?`-`+n+e.substr(1):n+e}return Sd(e)}var Qd={identify:Yd,default:!0,tag:`tag:yaml.org,2002:int`,format:`BIN`,test:/^[-+]?0b[0-1_]+$/,resolve:(e,t,n)=>Xd(e,2,2,n),stringify:e=>Zd(e,2,`0b`)},$d={identify:Yd,default:!0,tag:`tag:yaml.org,2002:int`,format:`OCT`,test:/^[-+]?0[0-7_]+$/,resolve:(e,t,n)=>Xd(e,1,8,n),stringify:e=>Zd(e,8,`0`)},ef={identify:Yd,default:!0,tag:`tag:yaml.org,2002:int`,test:/^[-+]?[0-9][0-9_]*$/,resolve:(e,t,n)=>Xd(e,0,10,n),stringify:Sd},tf={identify:Yd,default:!0,tag:`tag:yaml.org,2002:int`,format:`HEX`,test:/^[-+]?0x[0-9a-fA-F_]+$/,resolve:(e,t,n)=>Xd(e,2,16,n),stringify:e=>Zd(e,16,`0x`)},nf=class e extends md{constructor(t){super(t),this.tag=e.tag}add(e){let t;t=J(e)?e:e&&typeof e==`object`&&`key`in e&&`value`in e&&e.value===null?new cd(e.key,null):new cd(e,null),pd(this.items,t.key)||this.items.push(t)}get(e,t){let n=pd(this.items,e);return!t&&J(n)?Y(n.key)?n.key.value:n.key:n}set(e,t){if(typeof t!=`boolean`)throw Error(`Expected boolean value for set(key, value) in a YAML set, not ${typeof t}`);let n=pd(this.items,e);n&&!t?this.items.splice(this.items.indexOf(n),1):!n&&t&&this.items.push(new cd(e))}toJSON(e,t){return super.toJSON(e,t,Set)}toString(e,t,n){if(!e)return JSON.stringify(this);if(this.hasAllNullValues(!0))return super.toString(Object.assign({},e,{allNullValues:!0}),t,n);throw Error(`Set items must all have null values`)}static from(e,t,n){let{replacer:r}=n,i=new this(e);if(t&&Symbol.iterator in Object(t))for(let e of t)typeof r==`function`&&(e=r.call(t,e,e)),i.items.push(sd(e,null,n));return i}};nf.tag=`tag:yaml.org,2002:set`;var rf={collection:`map`,identify:e=>e instanceof Set,nodeClass:nf,default:!1,tag:`tag:yaml.org,2002:set`,createNode:(e,t,n)=>nf.from(e,t,n),resolve(e,t){if(Zl(e)){if(e.hasAllNullValues(!0))return Object.assign(new nf,e);t(`Set items must all have null values`)}else t(`Expected a mapping for this tag`);return e}};function af(e,t){let n=e[0],r=n===`-`||n===`+`?e.substring(1):e,i=e=>t?BigInt(e):Number(e),a=r.replace(/_/g,``).split(`:`).reduce((e,t)=>e*i(60)+i(t),i(0));return n===`-`?i(-1)*a:a}function of(e){let{value:t}=e,n=e=>e;if(typeof t==`bigint`)n=e=>BigInt(e);else if(isNaN(t)||!isFinite(t))return Sd(e);let r=``;t<0&&(r=`-`,t*=n(-1));let i=n(60),a=[t%i];return t<60?a.unshift(0):(t=(t-a[0])/i,a.unshift(t%i),t>=60&&(t=(t-a[0])/i,a.unshift(t))),r+a.map(e=>String(e).padStart(2,`0`)).join(`:`).replace(/000000\d*$/,``)}var sf={identify:e=>typeof e==`bigint`||Number.isInteger(e),default:!0,tag:`tag:yaml.org,2002:int`,format:`TIME`,test:/^[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+$/,resolve:(e,t,{intAsBigInt:n})=>af(e,n),stringify:of},cf={identify:e=>typeof e==`number`,default:!0,tag:`tag:yaml.org,2002:float`,format:`TIME`,test:/^[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+\.[0-9_]*$/,resolve:e=>af(e,!1),stringify:of},lf={identify:e=>e instanceof Date,default:!0,tag:`tag:yaml.org,2002:timestamp`,test:RegExp(`^([0-9]{4})-([0-9]{1,2})-([0-9]{1,2})(?:(?:t|T|[ \\t]+)([0-9]{1,2}):([0-9]{1,2}):([0-9]{1,2}(\\.[0-9]+)?)(?:[ \\t]*(Z|[-+][012]?[0-9](?::[0-9]{2})?))?)?$`),resolve(e){let t=e.match(lf.test);if(!t)throw Error(`!!timestamp expects a date, starting with yyyy-mm-dd`);let[,n,r,i,a,o,s]=t.map(Number),c=t[7]?Number((t[7]+`00`).substr(1,3)):0,l=Date.UTC(n,r-1,i,a||0,o||0,s||0,c),u=t[8];if(u&&u!==`Z`){let e=af(u,!1);Math.abs(e)<30&&(e*=60),l-=6e4*e}return new Date(l)},stringify:({value:e})=>e?.toISOString().replace(/(T00:00:00)?\.000Z$/,``)??``},uf=[hd,vd,yd,bd,Wd,Gd,Qd,$d,ef,tf,Kd,qd,Jd,Ld,td,Hd,Bd,rf,sf,cf,lf],df=new Map([[`core`,Md],[`failsafe`,[hd,vd,yd]],[`json`,Id],[`yaml11`,uf],[`yaml-1.1`,uf]]),ff={binary:Ld,bool:xd,float:Td,floatExp:wd,floatNaN:Cd,floatTime:cf,int:Ad,intHex:jd,intOct:kd,intTime:sf,map:hd,merge:td,null:bd,omap:Hd,pairs:Bd,seq:vd,set:rf,timestamp:lf},pf={"tag:yaml.org,2002:binary":Ld,"tag:yaml.org,2002:merge":td,"tag:yaml.org,2002:omap":Hd,"tag:yaml.org,2002:pairs":Bd,"tag:yaml.org,2002:set":rf,"tag:yaml.org,2002:timestamp":lf};function mf(e,t,n){let r=df.get(t);if(r&&!e)return n&&!r.includes(td)?r.concat(td):r.slice();let i=r;if(!i)if(Array.isArray(e))i=[];else{let e=Array.from(df.keys()).filter(e=>e!==`yaml11`).map(e=>JSON.stringify(e)).join(`, `);throw Error(`Unknown schema "${t}"; use one of ${e} or define customTags array`)}if(Array.isArray(e))for(let t of e)i=i.concat(t);else typeof e==`function`&&(i=e(i.slice()));return n&&(i=i.concat(td)),i.reduce((e,t)=>{let n=typeof t==`string`?ff[t]:t;if(!n){let e=JSON.stringify(t),n=Object.keys(ff).map(e=>JSON.stringify(e)).join(`, `);throw Error(`Unknown custom tag ${e}; use one of ${n}`)}return e.includes(n)||e.push(n),e},[])}var hf=(e,t)=>e.key<t.key?-1:e.key>t.key?1:0,gf=class e{constructor({compat:e,customTags:t,merge:n,resolveKnownTags:r,schema:i,sortMapEntries:a,toStringDefaults:o}){this.compat=Array.isArray(e)?mf(e,`compat`):e?mf(null,e):null,this.name=typeof i==`string`&&i||`core`,this.knownTags=r?pf:{},this.tags=mf(t,this.name,n),this.toStringOptions=o??null,Object.defineProperty(this,Wl,{value:hd}),Object.defineProperty(this,Kl,{value:yd}),Object.defineProperty(this,ql,{value:vd}),this.sortMapEntries=typeof a==`function`?a:a===!0?hf:null}clone(){let t=Object.create(e.prototype,Object.getOwnPropertyDescriptors(this));return t.tags=this.tags.slice(),t}};function _f(e,t){let n=[],r=t.directives===!0;if(t.directives!==!1&&e.directives){let t=e.directives.toString(e);t?(n.push(t),r=!0):e.directives.docStart&&(r=!0)}r&&n.push(`---`);let i=Ju(e,t),{commentString:a}=i.options;if(e.commentBefore){n.length!==1&&n.unshift(``);let t=a(e.commentBefore);n.unshift(ju(t,``))}let o=!1,s=null;if(e.contents){if(X(e.contents)){if(e.contents.spaceBefore&&r&&n.push(``),e.contents.commentBefore){let t=a(e.contents.commentBefore);n.push(ju(t,``))}i.forceBlockIndent=!!e.comment,s=e.contents.comment}let t=s?void 0:()=>o=!0,c=Zu(e.contents,i,()=>s=null,t);s&&(c+=Mu(c,``,a(s))),(c[0]===`|`||c[0]===`>`)&&n[n.length-1]===`---`?n[n.length-1]=`--- ${c}`:n.push(c)}else n.push(Zu(e.contents,i));if(e.directives?.docEnd)if(e.comment){let t=a(e.comment);t.includes(`
`)?(n.push(`...`),n.push(ju(t,``))):n.push(`... ${t}`)}else n.push(`...`);else{let t=e.comment;t&&o&&(t=t.replace(/^\n+/,``)),t&&((!o||s)&&n[n.length-1]!==``&&n.push(``),n.push(ju(a(t),``)))}return n.join(`
`)+`
`}var vf=class e{constructor(e,t,n){this.commentBefore=null,this.comment=null,this.errors=[],this.warnings=[],Object.defineProperty(this,Jl,{value:Ul});let r=null;typeof t==`function`||Array.isArray(t)?r=t:n===void 0&&t&&(n=t,t=void 0);let i=Object.assign({intAsBigInt:!1,keepSourceTokens:!1,logLevel:`warn`,prettyErrors:!0,strict:!0,stringKeys:!1,uniqueKeys:!0,version:`1.2`},n);this.options=i;let{version:a}=i;n?._directives?(this.directives=n._directives.atDocument(),this.directives.yaml.explicit&&(a=this.directives.yaml.version)):this.directives=new pu({version:a}),this.setSchema(a,n),this.contents=e===void 0?null:this.createNode(e,r,n)}clone(){let t=Object.create(e.prototype,{[Jl]:{value:Ul}});return t.commentBefore=this.commentBefore,t.comment=this.comment,t.errors=this.errors.slice(),t.warnings=this.warnings.slice(),t.options=Object.assign({},this.options),this.directives&&(t.directives=this.directives.clone()),t.schema=this.schema.clone(),t.contents=X(this.contents)?this.contents.clone(t.schema):this.contents,this.range&&(t.range=this.range.slice()),t}add(e){yf(this.contents)&&this.contents.add(e)}addIn(e,t){yf(this.contents)&&this.contents.addIn(e,t)}createAlias(e,t){if(!e.anchor){let n=hu(this);e.anchor=!t||n.has(t)?gu(t||`a`,n):t}return new xu(e.anchor)}createNode(e,t,n){let r;if(typeof t==`function`)e=t.call({"":e},``,e),r=t;else if(Array.isArray(t)){let e=t.filter(e=>typeof e==`number`||e instanceof String||e instanceof Number).map(String);e.length>0&&(t=t.concat(e)),r=t}else n===void 0&&t&&(n=t,t=void 0);let{aliasDuplicateObjects:i,anchorPrefix:a,flow:o,keepUndefined:s,onTagObj:c,tag:l}=n??{},{onAnchor:u,setAnchors:d,sourceObjects:f}=_u(this,a||`a`),p={aliasDuplicateObjects:i??!0,keepUndefined:s??!1,onAnchor:u,onTagObj:c,replacer:r,schema:this.schema,sourceObjects:f},m=Eu(e,l,p);return o&&$l(m)&&(m.flow=!0),d(),m}createPair(e,t,n={}){return new cd(this.createNode(e,null,n),this.createNode(t,null,n))}delete(e){return yf(this.contents)?this.contents.delete(e):!1}deleteIn(e){return Ou(e)?this.contents==null?!1:(this.contents=null,!0):yf(this.contents)?this.contents.deleteIn(e):!1}get(e,t){return $l(this.contents)?this.contents.get(e,t):void 0}getIn(e,t){return Ou(e)?!t&&Y(this.contents)?this.contents.value:this.contents:$l(this.contents)?this.contents.getIn(e,t):void 0}has(e){return $l(this.contents)?this.contents.has(e):!1}hasIn(e){return Ou(e)?this.contents!==void 0:$l(this.contents)?this.contents.hasIn(e):!1}set(e,t){this.contents==null?this.contents=Du(this.schema,[e],t):yf(this.contents)&&this.contents.set(e,t)}setIn(e,t){Ou(e)?this.contents=t:this.contents==null?this.contents=Du(this.schema,Array.from(e),t):yf(this.contents)&&this.contents.setIn(e,t)}setSchema(e,t={}){typeof e==`number`&&(e=String(e));let n;switch(e){case`1.1`:this.directives?this.directives.yaml.version=`1.1`:this.directives=new pu({version:`1.1`}),n={resolveKnownTags:!1,schema:`yaml-1.1`};break;case`1.2`:case`next`:this.directives?this.directives.yaml.version=e:this.directives=new pu({version:e}),n={resolveKnownTags:!0,schema:`core`};break;case null:this.directives&&delete this.directives,n=null;break;default:{let t=JSON.stringify(e);throw Error(`Expected '1.1', '1.2' or null as first argument, but found: ${t}`)}}if(t.schema instanceof Object)this.schema=t.schema;else if(n)this.schema=new gf(Object.assign(n,t));else throw Error(`With a null YAML version, the { schema: Schema } option is required`)}toJS({json:e,jsonArg:t,mapAsMap:n,maxAliasCount:r,onAnchor:i,reviver:a}={}){let o={anchors:new Map,doc:this,keep:!e,mapAsMap:n===!0,mapKeyWarned:!1,maxAliasCount:typeof r==`number`?r:100},s=yu(this.contents,t??``,o);if(typeof i==`function`)for(let{count:e,res:t}of o.anchors.values())i(t,e);return typeof a==`function`?vu(a,{"":s},``,s):s}toJSON(e,t){return this.toJS({json:!0,jsonArg:e,mapAsMap:!1,onAnchor:t})}toString(e={}){if(this.errors.length>0)throw Error(`Document with errors cannot be stringified`);if(`indent`in e&&(!Number.isInteger(e.indent)||Number(e.indent)<=0)){let t=JSON.stringify(e.indent);throw Error(`"indent" option must be a positive integer, not ${t}`)}return _f(this,e)}};function yf(e){if($l(e))return!0;throw Error(`Expected a YAML collection as document contents`)}var bf=class extends Error{constructor(e,t,n,r){super(),this.name=e,this.code=n,this.message=r,this.pos=t}},xf=class extends bf{constructor(e,t,n){super(`YAMLParseError`,e,t,n)}},Sf=class extends bf{constructor(e,t,n){super(`YAMLWarning`,e,t,n)}},Cf=(e,t)=>n=>{if(n.pos[0]===-1)return;n.linePos=n.pos.map(e=>t.linePos(e));let{line:r,col:i}=n.linePos[0];n.message+=` at line ${r}, column ${i}`;let a=i-1,o=e.substring(t.lineStarts[r-1],t.lineStarts[r]).replace(/[\n\r]+$/,``);if(a>=60&&o.length>80){let e=Math.min(a-39,o.length-79);o=`…`+o.substring(e),a-=e-1}if(o.length>80&&(o=o.substring(0,79)+`…`),r>1&&/^ *$/.test(o.substring(0,a))){let n=e.substring(t.lineStarts[r-2],t.lineStarts[r-1]);n.length>80&&(n=n.substring(0,79)+`…
`),o=n+o}if(/[^ ]/.test(o)){let e=1,t=n.linePos[1];t?.line===r&&t.col>i&&(e=Math.max(1,Math.min(t.col-i,80-a)));let s=` `.repeat(a)+`^`.repeat(e);n.message+=`:\n\n${o}\n${s}\n`}};function wf(e,{flow:t,indicator:n,next:r,offset:i,onError:a,parentIndent:o,startOnNewline:s}){let c=!1,l=s,u=s,d=``,f=``,p=!1,m=!1,h=null,g=null,_=null,v=null,y=null,b=null,x=null;for(let i of e)switch(m&&=(i.type!==`space`&&i.type!==`newline`&&i.type!==`comma`&&a(i.offset,`MISSING_CHAR`,`Tags and anchors must be separated from the next token by white space`),!1),h&&=(l&&i.type!==`comment`&&i.type!==`newline`&&a(h,`TAB_AS_INDENT`,`Tabs are not allowed as indentation`),null),i.type){case`space`:!t&&(n!==`doc-start`||r?.type!==`flow-collection`)&&i.source.includes(`	`)&&(h=i),u=!0;break;case`comment`:{u||a(i,`MISSING_CHAR`,`Comments must be separated from other tokens by white space characters`);let e=i.source.substring(1)||` `;d?d+=f+e:d=e,f=``,l=!1;break}case`newline`:l?d?d+=i.source:(!b||n!==`seq-item-ind`)&&(c=!0):f+=i.source,l=!0,p=!0,(g||_)&&(v=i),u=!0;break;case`anchor`:g&&a(i,`MULTIPLE_ANCHORS`,`A node can have at most one anchor`),i.source.endsWith(`:`)&&a(i.offset+i.source.length-1,`BAD_ALIAS`,`Anchor ending in : is ambiguous`,!0),g=i,x??=i.offset,l=!1,u=!1,m=!0;break;case`tag`:_&&a(i,`MULTIPLE_TAGS`,`A node can have at most one tag`),_=i,x??=i.offset,l=!1,u=!1,m=!0;break;case n:(g||_)&&a(i,`BAD_PROP_ORDER`,`Anchors and tags must be after the ${i.source} indicator`),b&&a(i,`UNEXPECTED_TOKEN`,`Unexpected ${i.source} in ${t??`collection`}`),b=i,l=n===`seq-item-ind`||n===`explicit-key-ind`,u=!1;break;case`comma`:if(t){y&&a(i,`UNEXPECTED_TOKEN`,`Unexpected , in ${t}`),y=i,l=!1,u=!1;break}default:a(i,`UNEXPECTED_TOKEN`,`Unexpected ${i.type} token`),l=!1,u=!1}let S=e[e.length-1],C=S?S.offset+S.source.length:i;return m&&r&&r.type!==`space`&&r.type!==`newline`&&r.type!==`comma`&&(r.type!==`scalar`||r.source!==``)&&a(r.offset,`MISSING_CHAR`,`Tags and anchors must be separated from the next token by white space`),h&&(l&&h.indent<=o||r?.type===`block-map`||r?.type===`block-seq`)&&a(h,`TAB_AS_INDENT`,`Tabs are not allowed as indentation`),{comma:y,found:b,spaceBefore:c,comment:d,hasNewline:p,anchor:g,tag:_,newlineAfterProp:v,end:C,start:x??C}}function Tf(e){if(!e)return null;switch(e.type){case`alias`:case`scalar`:case`double-quoted-scalar`:case`single-quoted-scalar`:if(e.source.includes(`
`))return!0;if(e.end){for(let t of e.end)if(t.type===`newline`)return!0}return!1;case`flow-collection`:for(let t of e.items){for(let e of t.start)if(e.type===`newline`)return!0;if(t.sep){for(let e of t.sep)if(e.type===`newline`)return!0}if(Tf(t.key)||Tf(t.value))return!0}return!1;default:return!0}}function Ef(e,t,n){if(t?.type===`flow-collection`){let r=t.end[0];r.indent===e&&(r.source===`]`||r.source===`}`)&&Tf(t)&&n(r,`BAD_INDENT`,`Flow end indicator should be more indented than parent`,!0)}}function Df(e,t,n){let{uniqueKeys:r}=e.options;if(r===!1)return!1;let i=typeof r==`function`?r:(e,t)=>e===t||Y(e)&&Y(t)&&e.value===t.value;return t.some(e=>i(e.key,n))}var Of=`All mapping items must start at the same column`;function kf({composeNode:e,composeEmptyNode:t},n,r,i,a){let o=new(a?.nodeClass??md)(n.schema);n.atRoot&&=!1;let s=r.offset,c=null;for(let a of r.items){let{start:l,key:u,sep:d,value:f}=a,p=wf(l,{indicator:`explicit-key-ind`,next:u??d?.[0],offset:s,onError:i,parentIndent:r.indent,startOnNewline:!0}),m=!p.found;if(m){if(u&&(u.type===`block-seq`?i(s,`BLOCK_AS_IMPLICIT_KEY`,`A block sequence may not be used as an implicit map key`):`indent`in u&&u.indent!==r.indent&&i(s,`BAD_INDENT`,Of)),!p.anchor&&!p.tag&&!d){c=p.end,p.comment&&(o.comment?o.comment+=`
`+p.comment:o.comment=p.comment);continue}(p.newlineAfterProp||Tf(u))&&i(u??l[l.length-1],`MULTILINE_IMPLICIT_KEY`,`Implicit keys need to be on a single line`)}else p.found?.indent!==r.indent&&i(s,`BAD_INDENT`,Of);n.atKey=!0;let h=p.end,g=u?e(n,u,p,i):t(n,h,l,null,p,i);n.schema.compat&&Ef(r.indent,u,i),n.atKey=!1,Df(n,o.items,g)&&i(h,`DUPLICATE_KEY`,`Map keys must be unique`);let _=wf(d??[],{indicator:`map-value-ind`,next:f,offset:g.range[2],onError:i,parentIndent:r.indent,startOnNewline:!u||u.type===`block-scalar`});if(s=_.end,_.found){m&&(f?.type===`block-map`&&!_.hasNewline&&i(s,`BLOCK_AS_IMPLICIT_KEY`,`Nested mappings are not allowed in compact mappings`),n.options.strict&&p.start<_.found.offset-1024&&i(g.range,`KEY_OVER_1024_CHARS`,`The : indicator must be at most 1024 chars after the start of an implicit block mapping key`));let c=f?e(n,f,_,i):t(n,s,d,null,_,i);n.schema.compat&&Ef(r.indent,f,i),s=c.range[2];let l=new cd(g,c);n.options.keepSourceTokens&&(l.srcToken=a),o.items.push(l)}else{m&&i(g.range,`MISSING_CHAR`,`Implicit map keys need to be followed by map values`),_.comment&&(g.comment?g.comment+=`
`+_.comment:g.comment=_.comment);let e=new cd(g);n.options.keepSourceTokens&&(e.srcToken=a),o.items.push(e)}}return c&&c<s&&i(c,`IMPOSSIBLE`,`Map comment with trailing content`),o.range=[r.offset,s,c??s],o}function Af({composeNode:e,composeEmptyNode:t},n,r,i,a){let o=new(a?.nodeClass??gd)(n.schema);n.atRoot&&=!1,n.atKey&&=!1;let s=r.offset,c=null;for(let{start:a,value:l}of r.items){let u=wf(a,{indicator:`seq-item-ind`,next:l,offset:s,onError:i,parentIndent:r.indent,startOnNewline:!0});if(!u.found)if(u.anchor||u.tag||l)l?.type===`block-seq`?i(u.end,`BAD_INDENT`,`All sequence items must start at the same column`):i(s,`MISSING_CHAR`,`Sequence item without - indicator`);else{c=u.end,u.comment&&(o.comment=u.comment);continue}let d=l?e(n,l,u,i):t(n,u.end,a,null,u,i);n.schema.compat&&Ef(r.indent,l,i),s=d.range[2],o.items.push(d)}return o.range=[r.offset,s,c??s],o}function jf(e,t,n,r){let i=``;if(e){let a=!1,o=``;for(let s of e){let{source:e,type:c}=s;switch(c){case`space`:a=!0;break;case`comment`:{n&&!a&&r(s,`MISSING_CHAR`,`Comments must be separated from other tokens by white space characters`);let t=e.substring(1)||` `;i?i+=o+t:i=t,o=``;break}case`newline`:i&&(o+=e),a=!0;break;default:r(s,`UNEXPECTED_TOKEN`,`Unexpected ${c} at node end`)}t+=e.length}}return{comment:i,offset:t}}var Mf=`Block collections are not allowed within flow collections`,Nf=e=>e&&(e.type===`block-map`||e.type===`block-seq`);function Pf({composeNode:e,composeEmptyNode:t},n,r,i,a){let o=r.start.source===`{`,s=o?`flow map`:`flow sequence`,c=new(a?.nodeClass??(o?md:gd))(n.schema);c.flow=!0;let l=n.atRoot;l&&(n.atRoot=!1),n.atKey&&=!1;let u=r.offset+r.start.source.length;for(let a=0;a<r.items.length;++a){let l=r.items[a],{start:d,key:f,sep:p,value:m}=l,h=wf(d,{flow:s,indicator:`explicit-key-ind`,next:f??p?.[0],offset:u,onError:i,parentIndent:r.indent,startOnNewline:!1});if(!h.found){if(!h.anchor&&!h.tag&&!p&&!m){a===0&&h.comma?i(h.comma,`UNEXPECTED_TOKEN`,`Unexpected , in ${s}`):a<r.items.length-1&&i(h.start,`UNEXPECTED_TOKEN`,`Unexpected empty item in ${s}`),h.comment&&(c.comment?c.comment+=`
`+h.comment:c.comment=h.comment),u=h.end;continue}!o&&n.options.strict&&Tf(f)&&i(f,`MULTILINE_IMPLICIT_KEY`,`Implicit keys of flow sequence pairs need to be on a single line`)}if(a===0)h.comma&&i(h.comma,`UNEXPECTED_TOKEN`,`Unexpected , in ${s}`);else if(h.comma||i(h.start,`MISSING_CHAR`,`Missing , between ${s} items`),h.comment){let e=``;loop:for(let t of d)switch(t.type){case`comma`:case`space`:break;case`comment`:e=t.source.substring(1);break loop;default:break loop}if(e){let t=c.items[c.items.length-1];J(t)&&(t=t.value??t.key),t.comment?t.comment+=`
`+e:t.comment=e,h.comment=h.comment.substring(e.length+1)}}if(!o&&!p&&!h.found){let r=m?e(n,m,h,i):t(n,h.end,p,null,h,i);c.items.push(r),u=r.range[2],Nf(m)&&i(r.range,`BLOCK_IN_FLOW`,Mf)}else{n.atKey=!0;let a=h.end,g=f?e(n,f,h,i):t(n,a,d,null,h,i);Nf(f)&&i(g.range,`BLOCK_IN_FLOW`,Mf),n.atKey=!1;let _=wf(p??[],{flow:s,indicator:`map-value-ind`,next:m,offset:g.range[2],onError:i,parentIndent:r.indent,startOnNewline:!1});if(_.found){if(!o&&!h.found&&n.options.strict){if(p)for(let e of p){if(e===_.found)break;if(e.type===`newline`){i(e,`MULTILINE_IMPLICIT_KEY`,`Implicit keys of flow sequence pairs need to be on a single line`);break}}h.start<_.found.offset-1024&&i(_.found,`KEY_OVER_1024_CHARS`,`The : indicator must be at most 1024 chars after the start of an implicit flow sequence key`)}}else m&&(`source`in m&&m.source?.[0]===`:`?i(m,`MISSING_CHAR`,`Missing space after : in ${s}`):i(_.start,`MISSING_CHAR`,`Missing , or : between ${s} items`));let v=m?e(n,m,_,i):_.found?t(n,_.end,p,null,_,i):null;v?Nf(m)&&i(v.range,`BLOCK_IN_FLOW`,Mf):_.comment&&(g.comment?g.comment+=`
`+_.comment:g.comment=_.comment);let y=new cd(g,v);if(n.options.keepSourceTokens&&(y.srcToken=l),o){let e=c;Df(n,e.items,g)&&i(a,`DUPLICATE_KEY`,`Map keys must be unique`),e.items.push(y)}else{let e=new md(n.schema);e.flow=!0,e.items.push(y);let t=(v??g).range;e.range=[g.range[0],t[1],t[2]],c.items.push(e)}u=v?v.range[2]:_.end}}let d=o?`}`:`]`,[f,...p]=r.end,m=u;if(f?.source===d)m=f.offset+f.source.length;else{let e=s[0].toUpperCase()+s.substring(1),t=l?`${e} must end with a ${d}`:`${e} in block collection must be sufficiently indented and end with a ${d}`;i(u,l?`MISSING_CHAR`:`BAD_INDENT`,t),f&&f.source.length!==1&&p.unshift(f)}if(p.length>0){let e=jf(p,m,n.options.strict,i);e.comment&&(c.comment?c.comment+=`
`+e.comment:c.comment=e.comment),c.range=[r.offset,m,e.offset]}else c.range=[r.offset,m,m];return c}function Ff(e,t,n,r,i,a){let o=n.type===`block-map`?kf(e,t,n,r,a):n.type===`block-seq`?Af(e,t,n,r,a):Pf(e,t,n,r,a),s=o.constructor;return i===`!`||i===s.tagName?(o.tag=s.tagName,o):(i&&(o.tag=i),o)}function If(e,t,n,r,i){let a=r.tag,o=a?t.directives.tagName(a.source,e=>i(a,`TAG_RESOLVE_FAILED`,e)):null;if(n.type===`block-seq`){let{anchor:e,newlineAfterProp:t}=r,n=e&&a?e.offset>a.offset?e:a:e??a;n&&(!t||t.offset<n.offset)&&i(n,`MISSING_CHAR`,`Missing newline after block sequence props`)}let s=n.type===`block-map`?`map`:n.type===`block-seq`?`seq`:n.start.source===`{`?`map`:`seq`;if(!a||!o||o===`!`||o===md.tagName&&s===`map`||o===gd.tagName&&s===`seq`)return Ff(e,t,n,i,o);let c=t.schema.tags.find(e=>e.tag===o&&e.collection===s);if(!c){let r=t.schema.knownTags[o];if(r?.collection===s)t.schema.tags.push(Object.assign({},r,{default:!1})),c=r;else return r?i(a,`BAD_COLLECTION_TYPE`,`${r.tag} used for ${s} collection, but expects ${r.collection??`scalar`}`,!0):i(a,`TAG_RESOLVE_FAILED`,`Unresolved tag: ${o}`,!0),Ff(e,t,n,i,o)}let l=Ff(e,t,n,i,o,c),u=c.resolve?.(l,e=>i(a,`TAG_RESOLVE_FAILED`,e),t.options)??l,d=X(u)?u:new Z(u);return d.range=l.range,d.tag=o,c?.format&&(d.format=c.format),d}function Lf(e,t,n){let r=t.offset,i=Rf(t,e.options.strict,n);if(!i)return{value:``,type:null,comment:``,range:[r,r,r]};let a=i.mode===`>`?Z.BLOCK_FOLDED:Z.BLOCK_LITERAL,o=t.source?zf(t.source):[],s=o.length;for(let e=o.length-1;e>=0;--e){let t=o[e][1];if(t===``||t===`\r`)s=e;else break}if(s===0){let e=i.chomp===`+`&&o.length>0?`
`.repeat(Math.max(1,o.length-1)):``,n=r+i.length;return t.source&&(n+=t.source.length),{value:e,type:a,comment:i.comment,range:[r,n,n]}}let c=t.indent+i.indent,l=t.offset+i.length,u=0;for(let t=0;t<s;++t){let[r,a]=o[t];if(a===``||a===`\r`)i.indent===0&&r.length>c&&(c=r.length);else{r.length<c&&n(l+r.length,`MISSING_CHAR`,`Block scalars with more-indented leading empty lines must use an explicit indentation indicator`),i.indent===0&&(c=r.length),u=t,c===0&&!e.atRoot&&n(l,`BAD_INDENT`,`Block scalar values in collections must be indented`);break}l+=r.length+a.length+1}for(let e=o.length-1;e>=s;--e)o[e][0].length>c&&(s=e+1);let d=``,f=``,p=!1;for(let e=0;e<u;++e)d+=o[e][0].slice(c)+`
`;for(let e=u;e<s;++e){let[t,r]=o[e];l+=t.length+r.length+1;let s=r[r.length-1]===`\r`;if(s&&(r=r.slice(0,-1)),r&&t.length<c){let e=`Block scalar lines must not be less indented than their ${i.indent?`explicit indentation indicator`:`first line`}`;n(l-r.length-(s?2:1),`BAD_INDENT`,e),t=``}a===Z.BLOCK_LITERAL?(d+=f+t.slice(c)+r,f=`
`):t.length>c||r[0]===`	`?(f===` `?f=`
`:!p&&f===`
`&&(f=`

`),d+=f+t.slice(c)+r,f=`
`,p=!0):r===``?f===`
`?d+=`
`:f=`
`:(d+=f+r,f=` `,p=!1)}switch(i.chomp){case`-`:break;case`+`:for(let e=s;e<o.length;++e)d+=`
`+o[e][0].slice(c);d[d.length-1]!==`
`&&(d+=`
`);break;default:d+=`
`}let m=r+i.length+t.source.length;return{value:d,type:a,comment:i.comment,range:[r,m,m]}}function Rf({offset:e,props:t},n,r){if(t[0].type!==`block-scalar-header`)return r(t[0],`IMPOSSIBLE`,`Block scalar header not found`),null;let{source:i}=t[0],a=i[0],o=0,s=``,c=-1;for(let t=1;t<i.length;++t){let n=i[t];if(!s&&(n===`-`||n===`+`))s=n;else{let r=Number(n);!o&&r?o=r:c===-1&&(c=e+t)}}c!==-1&&r(c,`UNEXPECTED_TOKEN`,`Block scalar header includes extra characters: ${i}`);let l=!1,u=``,d=i.length;for(let e=1;e<t.length;++e){let i=t[e];switch(i.type){case`space`:l=!0;case`newline`:d+=i.source.length;break;case`comment`:n&&!l&&r(i,`MISSING_CHAR`,`Comments must be separated from other tokens by white space characters`),d+=i.source.length,u=i.source.substring(1);break;case`error`:r(i,`UNEXPECTED_TOKEN`,i.message),d+=i.source.length;break;default:{r(i,`UNEXPECTED_TOKEN`,`Unexpected token in block scalar header: ${i.type}`);let e=i.source;e&&typeof e==`string`&&(d+=e.length)}}}return{mode:a,indent:o,chomp:s,comment:u,length:d}}function zf(e){let t=e.split(/\n( *)/),n=t[0],r=n.match(/^( *)/),i=[r?.[1]?[r[1],n.slice(r[1].length)]:[``,n]];for(let e=1;e<t.length;e+=2)i.push([t[e],t[e+1]]);return i}function Bf(e,t,n){let{offset:r,type:i,source:a,end:o}=e,s,c,l=(e,t,i)=>n(r+e,t,i);switch(i){case`scalar`:s=Z.PLAIN,c=Vf(a,l);break;case`single-quoted-scalar`:s=Z.QUOTE_SINGLE,c=Hf(a,l);break;case`double-quoted-scalar`:s=Z.QUOTE_DOUBLE,c=Wf(a,l);break;default:return n(e,`UNEXPECTED_TOKEN`,`Expected a flow scalar value, but found: ${i}`),{value:``,type:null,comment:``,range:[r,r+a.length,r+a.length]}}let u=r+a.length,d=jf(o,u,t,n);return{value:c,type:s,comment:d.comment,range:[r,u,d.offset]}}function Vf(e,t){let n=``;switch(e[0]){case`	`:n=`a tab character`;break;case`,`:n=`flow indicator character ,`;break;case`%`:n=`directive indicator character %`;break;case`|`:case`>`:n=`block scalar indicator ${e[0]}`;break;case`@`:case"`":n=`reserved character ${e[0]}`;break}return n&&t(0,`BAD_SCALAR_START`,`Plain value cannot start with ${n}`),Uf(e)}function Hf(e,t){return(e[e.length-1]!==`'`||e.length===1)&&t(e.length,`MISSING_CHAR`,`Missing closing 'quote`),Uf(e.slice(1,-1)).replace(/''/g,`'`)}function Uf(e){let t,n;try{t=RegExp(`(.*?)(?<![ 	])[ 	]*\r?
`,`sy`),n=RegExp(`[ 	]*(.*?)(?:(?<![ 	])[ 	]*)?\r?
`,`sy`)}catch{t=/(.*?)[ \t]*\r?\n/sy,n=/[ \t]*(.*?)[ \t]*\r?\n/sy}let r=t.exec(e);if(!r)return e;let i=r[1],a=` `,o=t.lastIndex;for(n.lastIndex=o;r=n.exec(e);)r[1]===``?a===`
`?i+=a:a=`
`:(i+=a+r[1],a=` `),o=n.lastIndex;let s=/[ \t]*(.*)/sy;return s.lastIndex=o,r=s.exec(e),i+a+(r?.[1]??``)}function Wf(e,t){let n=``;for(let r=1;r<e.length-1;++r){let i=e[r];if(!(i===`\r`&&e[r+1]===`
`))if(i===`
`){let{fold:t,offset:i}=Gf(e,r);n+=t,r=i}else if(i===`\\`){let i=e[++r],a=Kf[i];if(a)n+=a;else if(i===`
`)for(i=e[r+1];i===` `||i===`	`;)i=e[++r+1];else if(i===`\r`&&e[r+1]===`
`)for(i=e[++r+1];i===` `||i===`	`;)i=e[++r+1];else if(i===`x`||i===`u`||i===`U`){let a={x:2,u:4,U:8}[i];n+=qf(e,r+1,a,t),r+=a}else{let i=e.substr(r-1,2);t(r-1,`BAD_DQ_ESCAPE`,`Invalid escape sequence ${i}`),n+=i}}else if(i===` `||i===`	`){let t=r,a=e[r+1];for(;a===` `||a===`	`;)a=e[++r+1];a!==`
`&&!(a===`\r`&&e[r+2]===`
`)&&(n+=r>t?e.slice(t,r+1):i)}else n+=i}return(e[e.length-1]!==`"`||e.length===1)&&t(e.length,`MISSING_CHAR`,`Missing closing "quote`),n}function Gf(e,t){let n=``,r=e[t+1];for(;(r===` `||r===`	`||r===`
`||r===`\r`)&&!(r===`\r`&&e[t+2]!==`
`);)r===`
`&&(n+=`
`),t+=1,r=e[t+1];return n||=` `,{fold:n,offset:t}}var Kf={0:`\0`,a:`\x07`,b:`\b`,e:`\x1B`,f:`\f`,n:`
`,r:`\r`,t:`	`,v:`\v`,N:``,_:`\xA0`,L:`\u2028`,P:`\u2029`," ":` `,'"':`"`,"/":`/`,"\\":`\\`,"	":`	`};function qf(e,t,n,r){let i=e.substr(t,n),a=i.length===n&&/^[0-9a-fA-F]+$/.test(i)?parseInt(i,16):NaN;if(isNaN(a)){let i=e.substr(t-2,n+2);return r(t-2,`BAD_DQ_ESCAPE`,`Invalid escape sequence ${i}`),i}return String.fromCodePoint(a)}function Jf(e,t,n,r){let{value:i,type:a,comment:o,range:s}=t.type===`block-scalar`?Lf(e,t,r):Bf(t,e.options.strict,r),c=n?e.directives.tagName(n.source,e=>r(n,`TAG_RESOLVE_FAILED`,e)):null,l;l=e.options.stringKeys&&e.atKey?e.schema[Kl]:c?Yf(e.schema,i,c,n,r):t.type===`scalar`?Xf(e,i,t,r):e.schema[Kl];let u;try{let a=l.resolve(i,e=>r(n??t,`TAG_RESOLVE_FAILED`,e),e.options);u=Y(a)?a:new Z(a)}catch(e){let a=e instanceof Error?e.message:String(e);r(n??t,`TAG_RESOLVE_FAILED`,a),u=new Z(i)}return u.range=s,u.source=i,a&&(u.type=a),c&&(u.tag=c),l.format&&(u.format=l.format),o&&(u.comment=o),u}function Yf(e,t,n,r,i){if(n===`!`)return e[Kl];let a=[];for(let t of e.tags)if(!t.collection&&t.tag===n)if(t.default&&t.test)a.push(t);else return t;for(let e of a)if(e.test?.test(t))return e;let o=e.knownTags[n];return o&&!o.collection?(e.tags.push(Object.assign({},o,{default:!1,test:void 0})),o):(i(r,`TAG_RESOLVE_FAILED`,`Unresolved tag: ${n}`,n!==`tag:yaml.org,2002:str`),e[Kl])}function Xf({atKey:e,directives:t,schema:n},r,i,a){let o=n.tags.find(t=>(t.default===!0||e&&t.default===`key`)&&t.test?.test(r))||n[Kl];if(n.compat){let e=n.compat.find(e=>e.default&&e.test?.test(r))??n[Kl];o.tag!==e.tag&&a(i,`TAG_RESOLVE_FAILED`,`Value may be parsed as either ${t.tagString(o.tag)} or ${t.tagString(e.tag)}`,!0)}return o}function Zf(e,t,n){if(t){n??=t.length;for(let r=n-1;r>=0;--r){let n=t[r];switch(n.type){case`space`:case`comment`:case`newline`:e-=n.source.length;continue}for(n=t[++r];n?.type===`space`;)e+=n.source.length,n=t[++r];break}}return e}var Qf={composeNode:$f,composeEmptyNode:ep};function $f(e,t,n,r){let i=e.atKey,{spaceBefore:a,comment:o,anchor:s,tag:c}=n,l,u=!0;switch(t.type){case`alias`:l=tp(e,t,r),(s||c)&&r(t,`ALIAS_PROPS`,`An alias node must not specify any properties`);break;case`scalar`:case`single-quoted-scalar`:case`double-quoted-scalar`:case`block-scalar`:l=Jf(e,t,c,r),s&&(l.anchor=s.source.substring(1));break;case`block-map`:case`block-seq`:case`flow-collection`:try{l=If(Qf,e,t,n,r),s&&(l.anchor=s.source.substring(1))}catch(e){r(t,`RESOURCE_EXHAUSTION`,e instanceof Error?e.message:String(e))}break;default:r(t,`UNEXPECTED_TOKEN`,t.type===`error`?t.message:`Unsupported token (type: ${t.type})`),u=!1}return l??=ep(e,t.offset,void 0,null,n,r),s&&l.anchor===``&&r(s,`BAD_ALIAS`,`Anchor cannot be an empty string`),i&&e.options.stringKeys&&(!Y(l)||typeof l.value!=`string`||l.tag&&l.tag!==`tag:yaml.org,2002:str`)&&r(c??t,`NON_STRING_KEY`,`With stringKeys, all keys must be strings`),a&&(l.spaceBefore=!0),o&&(t.type===`scalar`&&t.source===``?l.comment=o:l.commentBefore=o),e.options.keepSourceTokens&&u&&(l.srcToken=t),l}function ep(e,t,n,r,{spaceBefore:i,comment:a,anchor:o,tag:s,end:c},l){let u=Jf(e,{type:`scalar`,offset:Zf(t,n,r),indent:-1,source:``},s,l);return o&&(u.anchor=o.source.substring(1),u.anchor===``&&l(o,`BAD_ALIAS`,`Anchor cannot be an empty string`)),i&&(u.spaceBefore=!0),a&&(u.comment=a,u.range[2]=c),u}function tp({options:e},{offset:t,source:n,end:r},i){let a=new xu(n.substring(1));a.source===``&&i(t,`BAD_ALIAS`,`Alias cannot be an empty string`),a.source.endsWith(`:`)&&i(t+n.length-1,`BAD_ALIAS`,`Alias ending in : is ambiguous`,!0);let o=t+n.length,s=jf(r,o,e.strict,i);return a.range=[t,o,s.offset],s.comment&&(a.comment=s.comment),a}function np(e,t,{offset:n,start:r,value:i,end:a},o){let s=new vf(void 0,Object.assign({_directives:t},e)),c={atKey:!1,atRoot:!0,directives:s.directives,options:s.options,schema:s.schema},l=wf(r,{indicator:`doc-start`,next:i??a?.[0],offset:n,onError:o,parentIndent:0,startOnNewline:!0});l.found&&(s.directives.docStart=!0,i&&(i.type===`block-map`||i.type===`block-seq`)&&!l.hasNewline&&o(l.end,`MISSING_CHAR`,`Block collection cannot start on same line with directives-end marker`)),s.contents=i?$f(c,i,l,o):ep(c,l.end,r,null,l,o);let u=s.contents.range[2],d=jf(a,u,!1,o);return d.comment&&(s.comment=d.comment),s.range=[n,u,d.offset],s}function rp(e){if(typeof e==`number`)return[e,e+1];if(Array.isArray(e))return e.length===2?e:[e[0],e[1]];let{offset:t,source:n}=e;return[t,t+(typeof n==`string`?n.length:1)]}function ip(e){let t=``,n=!1,r=!1;for(let i=0;i<e.length;++i){let a=e[i];switch(a[0]){case`#`:t+=(t===``?``:r?`

`:`
`)+(a.substring(1)||` `),n=!0,r=!1;break;case`%`:e[i+1]?.[0]!==`#`&&(i+=1),n=!1;break;default:n||(r=!0),n=!1}}return{comment:t,afterEmptyLine:r}}var ap=class{constructor(e={}){this.doc=null,this.atDirectives=!1,this.prelude=[],this.errors=[],this.warnings=[],this.onError=(e,t,n,r)=>{let i=rp(e);r?this.warnings.push(new Sf(i,t,n)):this.errors.push(new xf(i,t,n))},this.directives=new pu({version:e.version||`1.2`}),this.options=e}decorate(e,t){let{comment:n,afterEmptyLine:r}=ip(this.prelude);if(n){let i=e.contents;if(t)e.comment=e.comment?`${e.comment}\n${n}`:n;else if(r||e.directives.docStart||!i)e.commentBefore=n;else if($l(i)&&!i.flow&&i.items.length>0){let e=i.items[0];J(e)&&(e=e.key);let t=e.commentBefore;e.commentBefore=t?`${n}\n${t}`:n}else{let e=i.commentBefore;i.commentBefore=e?`${n}\n${e}`:n}}t?(Array.prototype.push.apply(e.errors,this.errors),Array.prototype.push.apply(e.warnings,this.warnings)):(e.errors=this.errors,e.warnings=this.warnings),this.prelude=[],this.errors=[],this.warnings=[]}streamInfo(){return{comment:ip(this.prelude).comment,directives:this.directives,errors:this.errors,warnings:this.warnings}}*compose(e,t=!1,n=-1){for(let t of e)yield*this.next(t);yield*this.end(t,n)}*next(e){switch(e.type){case`directive`:this.directives.add(e.source,(t,n,r)=>{let i=rp(e);i[0]+=t,this.onError(i,`BAD_DIRECTIVE`,n,r)}),this.prelude.push(e.source),this.atDirectives=!0;break;case`document`:{let t=np(this.options,this.directives,e,this.onError);this.atDirectives&&!t.directives.docStart&&this.onError(e,`MISSING_CHAR`,`Missing directives-end/doc-start indicator line`),this.decorate(t,!1),this.doc&&(yield this.doc),this.doc=t,this.atDirectives=!1;break}case`byte-order-mark`:case`space`:break;case`comment`:case`newline`:this.prelude.push(e.source);break;case`error`:{let t=e.source?`${e.message}: ${JSON.stringify(e.source)}`:e.message,n=new xf(rp(e),`UNEXPECTED_TOKEN`,t);this.atDirectives||!this.doc?this.errors.push(n):this.doc.errors.push(n);break}case`doc-end`:{if(!this.doc){this.errors.push(new xf(rp(e),`UNEXPECTED_TOKEN`,`Unexpected doc-end without preceding document`));break}this.doc.directives.docEnd=!0;let t=jf(e.end,e.offset+e.source.length,this.doc.options.strict,this.onError);if(this.decorate(this.doc,!0),t.comment){let e=this.doc.comment;this.doc.comment=e?`${e}\n${t.comment}`:t.comment}this.doc.range[2]=t.offset;break}default:this.errors.push(new xf(rp(e),`UNEXPECTED_TOKEN`,`Unsupported token ${e.type}`))}}*end(e=!1,t=-1){if(this.doc)this.decorate(this.doc,!0),yield this.doc,this.doc=null;else if(e){let e=new vf(void 0,Object.assign({_directives:this.directives},this.options));this.atDirectives&&this.onError(t,`MISSING_CHAR`,`Missing directives-end indicator line`),e.range=[0,t,t],this.decorate(e,!1),yield e}}},op=Symbol(`break visit`),sp=Symbol(`skip children`),cp=Symbol(`remove item`);function lp(e,t){`type`in e&&e.type===`document`&&(e={start:e.start,value:e.value}),up(Object.freeze([]),e,t)}lp.BREAK=op,lp.SKIP=sp,lp.REMOVE=cp,lp.itemAtPath=(e,t)=>{let n=e;for(let[e,r]of t){let t=n?.[e];if(t&&`items`in t)n=t.items[r];else return}return n},lp.parentCollection=(e,t)=>{let n=lp.itemAtPath(e,t.slice(0,-1)),r=t[t.length-1][0],i=n?.[r];if(i&&`items`in i)return i;throw Error(`Parent collection not found`)};function up(e,t,n){let r=n(t,e);if(typeof r==`symbol`)return r;for(let i of[`key`,`value`]){let a=t[i];if(a&&`items`in a){for(let t=0;t<a.items.length;++t){let r=up(Object.freeze(e.concat([[i,t]])),a.items[t],n);if(typeof r==`number`)t=r-1;else if(r===op)return op;else r===cp&&(a.items.splice(t,1),--t)}typeof r==`function`&&i===`key`&&(r=r(t,e))}}return typeof r==`function`?r(t,e):r}function dp(e){switch(e){case`﻿`:return`byte-order-mark`;case``:return`doc-mode`;case``:return`flow-error-end`;case``:return`scalar`;case`---`:return`doc-start`;case`...`:return`doc-end`;case``:case`
`:case`\r
`:return`newline`;case`-`:return`seq-item-ind`;case`?`:return`explicit-key-ind`;case`:`:return`map-value-ind`;case`{`:return`flow-map-start`;case`}`:return`flow-map-end`;case`[`:return`flow-seq-start`;case`]`:return`flow-seq-end`;case`,`:return`comma`}switch(e[0]){case` `:case`	`:return`space`;case`#`:return`comment`;case`%`:return`directive-line`;case`*`:return`alias`;case`&`:return`anchor`;case`!`:return`tag`;case`'`:return`single-quoted-scalar`;case`"`:return`double-quoted-scalar`;case`|`:case`>`:return`block-scalar-header`}return null}function fp(e){switch(e){case void 0:case` `:case`
`:case`\r`:case`	`:return!0;default:return!1}}var pp=new Set(`0123456789ABCDEFabcdef`),mp=new Set(`0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-#;/?:@&=+$_.!~*'()`),hp=new Set(`,[]{}`),gp=new Set(` ,[]{}
\r	`),_p=e=>!e||gp.has(e),vp=class{constructor(){this.atEnd=!1,this.blockScalarIndent=-1,this.blockScalarKeep=!1,this.buffer=``,this.flowKey=!1,this.flowLevel=0,this.indentNext=0,this.indentValue=0,this.lineEndPos=null,this.next=null,this.pos=0}*lex(e,t=!1){if(e){if(typeof e!=`string`)throw TypeError(`source is not a string`);this.buffer=this.buffer?this.buffer+e:e,this.lineEndPos=null}this.atEnd=!t;let n=this.next??`stream`;for(;n&&(t||this.hasChars(1));)n=yield*this.parseNext(n)}atLineEnd(){let e=this.pos,t=this.buffer[e];for(;t===` `||t===`	`;)t=this.buffer[++e];return!t||t===`#`||t===`
`?!0:t===`\r`?this.buffer[e+1]===`
`:!1}charAt(e){return this.buffer[this.pos+e]}continueScalar(e){let t=this.buffer[e];if(this.indentNext>0){let n=0;for(;t===` `;)t=this.buffer[++n+e];if(t===`\r`){let t=this.buffer[n+e+1];if(t===`
`||!t&&!this.atEnd)return e+n+1}return t===`
`||n>=this.indentNext||!t&&!this.atEnd?e+n:-1}if(t===`-`||t===`.`){let t=this.buffer.substr(e,3);if((t===`---`||t===`...`)&&fp(this.buffer[e+3]))return-1}return e}getLine(){let e=this.lineEndPos;return(typeof e!=`number`||e!==-1&&e<this.pos)&&(e=this.buffer.indexOf(`
`,this.pos),this.lineEndPos=e),e===-1?this.atEnd?this.buffer.substring(this.pos):null:(this.buffer[e-1]===`\r`&&--e,this.buffer.substring(this.pos,e))}hasChars(e){return this.pos+e<=this.buffer.length}setNext(e){return this.buffer=this.buffer.substring(this.pos),this.pos=0,this.lineEndPos=null,this.next=e,null}peek(e){return this.buffer.substr(this.pos,e)}*parseNext(e){switch(e){case`stream`:return yield*this.parseStream();case`line-start`:return yield*this.parseLineStart();case`block-start`:return yield*this.parseBlockStart();case`doc`:return yield*this.parseDocument();case`flow`:return yield*this.parseFlowCollection();case`quoted-scalar`:return yield*this.parseQuotedScalar();case`block-scalar`:return yield*this.parseBlockScalar();case`plain-scalar`:return yield*this.parsePlainScalar()}}*parseStream(){let e=this.getLine();if(e===null)return this.setNext(`stream`);if(e[0]===`﻿`&&(yield*this.pushCount(1),e=e.substring(1)),e[0]===`%`){let t=e.length,n=e.indexOf(`#`);for(;n!==-1;){let r=e[n-1];if(r===` `||r===`	`){t=n-1;break}else n=e.indexOf(`#`,n+1)}for(;;){let n=e[t-1];if(n===` `||n===`	`)--t;else break}let r=(yield*this.pushCount(t))+(yield*this.pushSpaces(!0));return yield*this.pushCount(e.length-r),this.pushNewline(),`stream`}if(this.atLineEnd()){let t=yield*this.pushSpaces(!0);return yield*this.pushCount(e.length-t),yield*this.pushNewline(),`stream`}return yield``,yield*this.parseLineStart()}*parseLineStart(){let e=this.charAt(0);if(!e&&!this.atEnd)return this.setNext(`line-start`);if(e===`-`||e===`.`){if(!this.atEnd&&!this.hasChars(4))return this.setNext(`line-start`);let e=this.peek(3);if((e===`---`||e===`...`)&&fp(this.charAt(3)))return yield*this.pushCount(3),this.indentValue=0,this.indentNext=0,e===`---`?`doc`:`stream`}return this.indentValue=yield*this.pushSpaces(!1),this.indentNext>this.indentValue&&!fp(this.charAt(1))&&(this.indentNext=this.indentValue),yield*this.parseBlockStart()}*parseBlockStart(){let[e,t]=this.peek(2);if(!t&&!this.atEnd)return this.setNext(`block-start`);if((e===`-`||e===`?`||e===`:`)&&fp(t)){let e=(yield*this.pushCount(1))+(yield*this.pushSpaces(!0));return this.indentNext=this.indentValue+1,this.indentValue+=e,yield*this.parseBlockStart()}return`doc`}*parseDocument(){yield*this.pushSpaces(!0);let e=this.getLine();if(e===null)return this.setNext(`doc`);let t=yield*this.pushIndicators();switch(e[t]){case`#`:yield*this.pushCount(e.length-t);case void 0:return yield*this.pushNewline(),yield*this.parseLineStart();case`{`:case`[`:return yield*this.pushCount(1),this.flowKey=!1,this.flowLevel=1,`flow`;case`}`:case`]`:return yield*this.pushCount(1),`doc`;case`*`:return yield*this.pushUntil(_p),`doc`;case`"`:case`'`:return yield*this.parseQuotedScalar();case`|`:case`>`:return t+=yield*this.parseBlockScalarHeader(),t+=yield*this.pushSpaces(!0),yield*this.pushCount(e.length-t),yield*this.pushNewline(),yield*this.parseBlockScalar();default:return yield*this.parsePlainScalar()}}*parseFlowCollection(){let e,t,n=-1;do e=yield*this.pushNewline(),e>0?(t=yield*this.pushSpaces(!1),this.indentValue=n=t):t=0,t+=yield*this.pushSpaces(!0);while(e+t>0);let r=this.getLine();if(r===null)return this.setNext(`flow`);if((n!==-1&&n<this.indentNext&&r[0]!==`#`||n===0&&(r.startsWith(`---`)||r.startsWith(`...`))&&fp(r[3]))&&!(n===this.indentNext-1&&this.flowLevel===1&&(r[0]===`]`||r[0]===`}`)))return this.flowLevel=0,yield``,yield*this.parseLineStart();let i=0;for(;r[i]===`,`;)i+=yield*this.pushCount(1),i+=yield*this.pushSpaces(!0),this.flowKey=!1;switch(i+=yield*this.pushIndicators(),r[i]){case void 0:return`flow`;case`#`:return yield*this.pushCount(r.length-i),`flow`;case`{`:case`[`:return yield*this.pushCount(1),this.flowKey=!1,this.flowLevel+=1,`flow`;case`}`:case`]`:return yield*this.pushCount(1),this.flowKey=!0,--this.flowLevel,this.flowLevel?`flow`:`doc`;case`*`:return yield*this.pushUntil(_p),`flow`;case`"`:case`'`:return this.flowKey=!0,yield*this.parseQuotedScalar();case`:`:{let e=this.charAt(1);if(this.flowKey||fp(e)||e===`,`)return this.flowKey=!1,yield*this.pushCount(1),yield*this.pushSpaces(!0),`flow`}default:return this.flowKey=!1,yield*this.parsePlainScalar()}}*parseQuotedScalar(){let e=this.charAt(0),t=this.buffer.indexOf(e,this.pos+1);if(e===`'`)for(;t!==-1&&this.buffer[t+1]===`'`;)t=this.buffer.indexOf(`'`,t+2);else for(;t!==-1;){let e=0;for(;this.buffer[t-1-e]===`\\`;)e+=1;if(e%2==0)break;t=this.buffer.indexOf(`"`,t+1)}let n=this.buffer.substring(0,t),r=n.indexOf(`
`,this.pos);if(r!==-1){for(;r!==-1;){let e=this.continueScalar(r+1);if(e===-1)break;r=n.indexOf(`
`,e)}r!==-1&&(t=r-(n[r-1]===`\r`?2:1))}if(t===-1){if(!this.atEnd)return this.setNext(`quoted-scalar`);t=this.buffer.length}return yield*this.pushToIndex(t+1,!1),this.flowLevel?`flow`:`doc`}*parseBlockScalarHeader(){this.blockScalarIndent=-1,this.blockScalarKeep=!1;let e=this.pos;for(;;){let t=this.buffer[++e];if(t===`+`)this.blockScalarKeep=!0;else if(t>`0`&&t<=`9`)this.blockScalarIndent=Number(t)-1;else if(t!==`-`)break}return yield*this.pushUntil(e=>fp(e)||e===`#`)}*parseBlockScalar(){let e=this.pos-1,t=0,n;loop:for(let r=this.pos;n=this.buffer[r];++r)switch(n){case` `:t+=1;break;case`
`:e=r,t=0;break;case`\r`:{let e=this.buffer[r+1];if(!e&&!this.atEnd)return this.setNext(`block-scalar`);if(e===`
`)break}default:break loop}if(!n&&!this.atEnd)return this.setNext(`block-scalar`);if(t>=this.indentNext){this.blockScalarIndent===-1?this.indentNext=t:this.indentNext=this.blockScalarIndent+(this.indentNext===0?1:this.indentNext);do{let t=this.continueScalar(e+1);if(t===-1)break;e=this.buffer.indexOf(`
`,t)}while(e!==-1);if(e===-1){if(!this.atEnd)return this.setNext(`block-scalar`);e=this.buffer.length}}let r=e+1;for(n=this.buffer[r];n===` `;)n=this.buffer[++r];if(n===`	`){for(;n===`	`||n===` `||n===`\r`||n===`
`;)n=this.buffer[++r];e=r-1}else if(!this.blockScalarKeep)do{let n=e-1,r=this.buffer[n];r===`\r`&&(r=this.buffer[--n]);let i=n;for(;r===` `;)r=this.buffer[--n];if(r===`
`&&n>=this.pos&&n+1+t>i)e=n;else break}while(!0);return yield``,yield*this.pushToIndex(e+1,!0),yield*this.parseLineStart()}*parsePlainScalar(){let e=this.flowLevel>0,t=this.pos-1,n=this.pos-1,r;for(;r=this.buffer[++n];)if(r===`:`){let r=this.buffer[n+1];if(fp(r)||e&&hp.has(r))break;t=n}else if(fp(r)){let i=this.buffer[n+1];if(r===`\r`&&(i===`
`?(n+=1,r=`
`,i=this.buffer[n+1]):t=n),i===`#`||e&&hp.has(i))break;if(r===`
`){let e=this.continueScalar(n+1);if(e===-1)break;n=Math.max(n,e-2)}}else{if(e&&hp.has(r))break;t=n}return!r&&!this.atEnd?this.setNext(`plain-scalar`):(yield``,yield*this.pushToIndex(t+1,!0),e?`flow`:`doc`)}*pushCount(e){return e>0?(yield this.buffer.substr(this.pos,e),this.pos+=e,e):0}*pushToIndex(e,t){let n=this.buffer.slice(this.pos,e);return n?(yield n,this.pos+=n.length,n.length):(t&&(yield``),0)}*pushIndicators(){switch(this.charAt(0)){case`!`:return(yield*this.pushTag())+(yield*this.pushSpaces(!0))+(yield*this.pushIndicators());case`&`:return(yield*this.pushUntil(_p))+(yield*this.pushSpaces(!0))+(yield*this.pushIndicators());case`-`:case`?`:case`:`:{let e=this.flowLevel>0,t=this.charAt(1);if(fp(t)||e&&hp.has(t))return e?this.flowKey&&=!1:this.indentNext=this.indentValue+1,(yield*this.pushCount(1))+(yield*this.pushSpaces(!0))+(yield*this.pushIndicators())}}return 0}*pushTag(){if(this.charAt(1)===`<`){let e=this.pos+2,t=this.buffer[e];for(;!fp(t)&&t!==`>`;)t=this.buffer[++e];return yield*this.pushToIndex(t===`>`?e+1:e,!1)}else{let e=this.pos+1,t=this.buffer[e];for(;t;)if(mp.has(t))t=this.buffer[++e];else if(t===`%`&&pp.has(this.buffer[e+1])&&pp.has(this.buffer[e+2]))t=this.buffer[e+=3];else break;return yield*this.pushToIndex(e,!1)}}*pushNewline(){let e=this.buffer[this.pos];return e===`
`?yield*this.pushCount(1):e===`\r`&&this.charAt(1)===`
`?yield*this.pushCount(2):0}*pushSpaces(e){let t=this.pos-1,n;do n=this.buffer[++t];while(n===` `||e&&n===`	`);let r=t-this.pos;return r>0&&(yield this.buffer.substr(this.pos,r),this.pos=t),r}*pushUntil(e){let t=this.pos,n=this.buffer[t];for(;!e(n);)n=this.buffer[++t];return yield*this.pushToIndex(t,!1)}},yp=class{constructor(){this.lineStarts=[],this.addNewLine=e=>this.lineStarts.push(e),this.linePos=e=>{let t=0,n=this.lineStarts.length;for(;t<n;){let r=t+n>>1;this.lineStarts[r]<e?t=r+1:n=r}if(this.lineStarts[t]===e)return{line:t+1,col:1};if(t===0)return{line:0,col:e};let r=this.lineStarts[t-1];return{line:t,col:e-r+1}}}};function bp(e,t){for(let n=0;n<e.length;++n)if(e[n].type===t)return!0;return!1}function xp(e){for(let t=0;t<e.length;++t)switch(e[t].type){case`space`:case`comment`:case`newline`:break;default:return t}return-1}function Sp(e){switch(e?.type){case`alias`:case`scalar`:case`single-quoted-scalar`:case`double-quoted-scalar`:case`flow-collection`:return!0;default:return!1}}function Cp(e){switch(e.type){case`document`:return e.start;case`block-map`:{let t=e.items[e.items.length-1];return t.sep??t.start}case`block-seq`:return e.items[e.items.length-1].start;default:return[]}}function wp(e){if(e.length===0)return[];let t=e.length;loop:for(;--t>=0;)switch(e[t].type){case`doc-start`:case`explicit-key-ind`:case`map-value-ind`:case`seq-item-ind`:case`newline`:break loop}for(;e[++t]?.type===`space`;);return e.splice(t,e.length)}function Tp(e){if(e.start.type===`flow-seq-start`)for(let t of e.items)t.sep&&!t.value&&!bp(t.start,`explicit-key-ind`)&&!bp(t.sep,`map-value-ind`)&&(t.key&&(t.value=t.key),delete t.key,Sp(t.value)?t.value.end?Array.prototype.push.apply(t.value.end,t.sep):t.value.end=t.sep:Array.prototype.push.apply(t.start,t.sep),delete t.sep)}var Ep=class{constructor(e){this.atNewLine=!0,this.atScalar=!1,this.indent=0,this.offset=0,this.onKeyLine=!1,this.stack=[],this.source=``,this.type=``,this.lexer=new vp,this.onNewLine=e}*parse(e,t=!1){this.onNewLine&&this.offset===0&&this.onNewLine(0);for(let n of this.lexer.lex(e,t))yield*this.next(n);t||(yield*this.end())}*next(e){if(this.source=e,this.atScalar){this.atScalar=!1,yield*this.step(),this.offset+=e.length;return}let t=dp(e);if(!t){let t=`Not a YAML token: ${e}`;yield*this.pop({type:`error`,offset:this.offset,message:t,source:e}),this.offset+=e.length}else if(t===`scalar`)this.atNewLine=!1,this.atScalar=!0,this.type=`scalar`;else{switch(this.type=t,yield*this.step(),t){case`newline`:this.atNewLine=!0,this.indent=0,this.onNewLine&&this.onNewLine(this.offset+e.length);break;case`space`:this.atNewLine&&e[0]===` `&&(this.indent+=e.length);break;case`explicit-key-ind`:case`map-value-ind`:case`seq-item-ind`:this.atNewLine&&(this.indent+=e.length);break;case`doc-mode`:case`flow-error-end`:return;default:this.atNewLine=!1}this.offset+=e.length}}*end(){for(;this.stack.length>0;)yield*this.pop()}get sourceToken(){return{type:this.type,offset:this.offset,indent:this.indent,source:this.source}}*step(){let e=this.peek(1);if(this.type===`doc-end`&&e?.type!==`doc-end`){for(;this.stack.length>0;)yield*this.pop();this.stack.push({type:`doc-end`,offset:this.offset,source:this.source});return}if(!e)return yield*this.stream();switch(e.type){case`document`:return yield*this.document(e);case`alias`:case`scalar`:case`single-quoted-scalar`:case`double-quoted-scalar`:return yield*this.scalar(e);case`block-scalar`:return yield*this.blockScalar(e);case`block-map`:return yield*this.blockMap(e);case`block-seq`:return yield*this.blockSequence(e);case`flow-collection`:return yield*this.flowCollection(e);case`doc-end`:return yield*this.documentEnd(e)}yield*this.pop()}peek(e){return this.stack[this.stack.length-e]}*pop(e){let t=e??this.stack.pop();if(!t)yield{type:`error`,offset:this.offset,source:``,message:`Tried to pop an empty stack`};else if(this.stack.length===0)yield t;else{let e=this.peek(1);switch(t.type===`block-scalar`?t.indent=`indent`in e?e.indent:0:t.type===`flow-collection`&&e.type===`document`&&(t.indent=0),t.type===`flow-collection`&&Tp(t),e.type){case`document`:e.value=t;break;case`block-scalar`:e.props.push(t);break;case`block-map`:{let n=e.items[e.items.length-1];if(n.value){e.items.push({start:[],key:t,sep:[]}),this.onKeyLine=!0;return}else if(n.sep)n.value=t;else{Object.assign(n,{key:t,sep:[]}),this.onKeyLine=!n.explicitKey;return}break}case`block-seq`:{let n=e.items[e.items.length-1];n.value?e.items.push({start:[],value:t}):n.value=t;break}case`flow-collection`:{let n=e.items[e.items.length-1];!n||n.value?e.items.push({start:[],key:t,sep:[]}):n.sep?n.value=t:Object.assign(n,{key:t,sep:[]});return}default:yield*this.pop(),yield*this.pop(t)}if((e.type===`document`||e.type===`block-map`||e.type===`block-seq`)&&(t.type===`block-map`||t.type===`block-seq`)){let n=t.items[t.items.length-1];n&&!n.sep&&!n.value&&n.start.length>0&&xp(n.start)===-1&&(t.indent===0||n.start.every(e=>e.type!==`comment`||e.indent<t.indent))&&(e.type===`document`?e.end=n.start:e.items.push({start:n.start}),t.items.splice(-1,1))}}}*stream(){switch(this.type){case`directive-line`:yield{type:`directive`,offset:this.offset,source:this.source};return;case`byte-order-mark`:case`space`:case`comment`:case`newline`:yield this.sourceToken;return;case`doc-mode`:case`doc-start`:{let e={type:`document`,offset:this.offset,start:[]};this.type===`doc-start`&&e.start.push(this.sourceToken),this.stack.push(e);return}}yield{type:`error`,offset:this.offset,message:`Unexpected ${this.type} token in YAML stream`,source:this.source}}*document(e){if(e.value)return yield*this.lineEnd(e);switch(this.type){case`doc-start`:xp(e.start)===-1?e.start.push(this.sourceToken):(yield*this.pop(),yield*this.step());return;case`anchor`:case`tag`:case`space`:case`comment`:case`newline`:e.start.push(this.sourceToken);return}let t=this.startBlockValue(e);t?this.stack.push(t):yield{type:`error`,offset:this.offset,message:`Unexpected ${this.type} token in YAML document`,source:this.source}}*scalar(e){if(this.type===`map-value-ind`){let t=wp(Cp(this.peek(2))),n;e.end?(n=e.end,n.push(this.sourceToken),delete e.end):n=[this.sourceToken];let r={type:`block-map`,offset:e.offset,indent:e.indent,items:[{start:t,key:e,sep:n}]};this.onKeyLine=!0,this.stack[this.stack.length-1]=r}else yield*this.lineEnd(e)}*blockScalar(e){switch(this.type){case`space`:case`comment`:case`newline`:e.props.push(this.sourceToken);return;case`scalar`:if(e.source=this.source,this.atNewLine=!0,this.indent=0,this.onNewLine){let e=this.source.indexOf(`
`)+1;for(;e!==0;)this.onNewLine(this.offset+e),e=this.source.indexOf(`
`,e)+1}yield*this.pop();break;default:yield*this.pop(),yield*this.step()}}*blockMap(e){let t=e.items[e.items.length-1];switch(this.type){case`newline`:if(this.onKeyLine=!1,t.value){let n=`end`in t.value?t.value.end:void 0;(Array.isArray(n)?n[n.length-1]:void 0)?.type===`comment`?n?.push(this.sourceToken):e.items.push({start:[this.sourceToken]})}else t.sep?t.sep.push(this.sourceToken):t.start.push(this.sourceToken);return;case`space`:case`comment`:if(t.value)e.items.push({start:[this.sourceToken]});else if(t.sep)t.sep.push(this.sourceToken);else{if(this.atIndentedComment(t.start,e.indent)){let n=e.items[e.items.length-2]?.value?.end;if(Array.isArray(n)){Array.prototype.push.apply(n,t.start),n.push(this.sourceToken),e.items.pop();return}}t.start.push(this.sourceToken)}return}if(this.indent>=e.indent){let n=!this.onKeyLine&&this.indent===e.indent,r=n&&(t.sep||t.explicitKey)&&this.type!==`seq-item-ind`,i=[];if(r&&t.sep&&!t.value){let n=[];for(let r=0;r<t.sep.length;++r){let i=t.sep[r];switch(i.type){case`newline`:n.push(r);break;case`space`:break;case`comment`:i.indent>e.indent&&(n.length=0);break;default:n.length=0}}n.length>=2&&(i=t.sep.splice(n[1]))}switch(this.type){case`anchor`:case`tag`:r||t.value?(i.push(this.sourceToken),e.items.push({start:i}),this.onKeyLine=!0):t.sep?t.sep.push(this.sourceToken):t.start.push(this.sourceToken);return;case`explicit-key-ind`:!t.sep&&!t.explicitKey?(t.start.push(this.sourceToken),t.explicitKey=!0):r||t.value?(i.push(this.sourceToken),e.items.push({start:i,explicitKey:!0})):this.stack.push({type:`block-map`,offset:this.offset,indent:this.indent,items:[{start:[this.sourceToken],explicitKey:!0}]}),this.onKeyLine=!0;return;case`map-value-ind`:if(t.explicitKey)if(!t.sep)if(bp(t.start,`newline`))Object.assign(t,{key:null,sep:[this.sourceToken]});else{let e=wp(t.start);this.stack.push({type:`block-map`,offset:this.offset,indent:this.indent,items:[{start:e,key:null,sep:[this.sourceToken]}]})}else if(t.value)e.items.push({start:[],key:null,sep:[this.sourceToken]});else if(bp(t.sep,`map-value-ind`))this.stack.push({type:`block-map`,offset:this.offset,indent:this.indent,items:[{start:i,key:null,sep:[this.sourceToken]}]});else if(Sp(t.key)&&!bp(t.sep,`newline`)){let e=wp(t.start),n=t.key,r=t.sep;r.push(this.sourceToken),delete t.key,delete t.sep,this.stack.push({type:`block-map`,offset:this.offset,indent:this.indent,items:[{start:e,key:n,sep:r}]})}else i.length>0?t.sep=t.sep.concat(i,this.sourceToken):t.sep.push(this.sourceToken);else t.sep?t.value||r?e.items.push({start:i,key:null,sep:[this.sourceToken]}):bp(t.sep,`map-value-ind`)?this.stack.push({type:`block-map`,offset:this.offset,indent:this.indent,items:[{start:[],key:null,sep:[this.sourceToken]}]}):t.sep.push(this.sourceToken):Object.assign(t,{key:null,sep:[this.sourceToken]});this.onKeyLine=!0;return;case`alias`:case`scalar`:case`single-quoted-scalar`:case`double-quoted-scalar`:{let n=this.flowScalar(this.type);r||t.value?(e.items.push({start:i,key:n,sep:[]}),this.onKeyLine=!0):t.sep?this.stack.push(n):(Object.assign(t,{key:n,sep:[]}),this.onKeyLine=!0);return}default:{let r=this.startBlockValue(e);if(r){if(r.type===`block-seq`){if(!t.explicitKey&&t.sep&&!bp(t.sep,`newline`)){yield*this.pop({type:`error`,offset:this.offset,message:`Unexpected block-seq-ind on same line with key`,source:this.source});return}}else n&&e.items.push({start:i});this.stack.push(r);return}}}}yield*this.pop(),yield*this.step()}*blockSequence(e){let t=e.items[e.items.length-1];switch(this.type){case`newline`:if(t.value){let n=`end`in t.value?t.value.end:void 0;(Array.isArray(n)?n[n.length-1]:void 0)?.type===`comment`?n?.push(this.sourceToken):e.items.push({start:[this.sourceToken]})}else t.start.push(this.sourceToken);return;case`space`:case`comment`:if(t.value)e.items.push({start:[this.sourceToken]});else{if(this.atIndentedComment(t.start,e.indent)){let n=e.items[e.items.length-2]?.value?.end;if(Array.isArray(n)){Array.prototype.push.apply(n,t.start),n.push(this.sourceToken),e.items.pop();return}}t.start.push(this.sourceToken)}return;case`anchor`:case`tag`:if(t.value||this.indent<=e.indent)break;t.start.push(this.sourceToken);return;case`seq-item-ind`:if(this.indent!==e.indent)break;t.value||bp(t.start,`seq-item-ind`)?e.items.push({start:[this.sourceToken]}):t.start.push(this.sourceToken);return}if(this.indent>e.indent){let t=this.startBlockValue(e);if(t){this.stack.push(t);return}}yield*this.pop(),yield*this.step()}*flowCollection(e){let t=e.items[e.items.length-1];if(this.type===`flow-error-end`){let e;do yield*this.pop(),e=this.peek(1);while(e?.type===`flow-collection`)}else if(e.end.length===0){switch(this.type){case`comma`:case`explicit-key-ind`:!t||t.sep?e.items.push({start:[this.sourceToken]}):t.start.push(this.sourceToken);return;case`map-value-ind`:!t||t.value?e.items.push({start:[],key:null,sep:[this.sourceToken]}):t.sep?t.sep.push(this.sourceToken):Object.assign(t,{key:null,sep:[this.sourceToken]});return;case`space`:case`comment`:case`newline`:case`anchor`:case`tag`:!t||t.value?e.items.push({start:[this.sourceToken]}):t.sep?t.sep.push(this.sourceToken):t.start.push(this.sourceToken);return;case`alias`:case`scalar`:case`single-quoted-scalar`:case`double-quoted-scalar`:{let n=this.flowScalar(this.type);!t||t.value?e.items.push({start:[],key:n,sep:[]}):t.sep?this.stack.push(n):Object.assign(t,{key:n,sep:[]});return}case`flow-map-end`:case`flow-seq-end`:e.end.push(this.sourceToken);return}let n=this.startBlockValue(e);n?this.stack.push(n):(yield*this.pop(),yield*this.step())}else{let t=this.peek(2);if(t.type===`block-map`&&(this.type===`map-value-ind`&&t.indent===e.indent||this.type===`newline`&&!t.items[t.items.length-1].sep))yield*this.pop(),yield*this.step();else if(this.type===`map-value-ind`&&t.type!==`flow-collection`){let n=wp(Cp(t));Tp(e);let r=e.end.splice(1,e.end.length);r.push(this.sourceToken);let i={type:`block-map`,offset:e.offset,indent:e.indent,items:[{start:n,key:e,sep:r}]};this.onKeyLine=!0,this.stack[this.stack.length-1]=i}else yield*this.lineEnd(e)}}flowScalar(e){if(this.onNewLine){let e=this.source.indexOf(`
`)+1;for(;e!==0;)this.onNewLine(this.offset+e),e=this.source.indexOf(`
`,e)+1}return{type:e,offset:this.offset,indent:this.indent,source:this.source}}startBlockValue(e){switch(this.type){case`alias`:case`scalar`:case`single-quoted-scalar`:case`double-quoted-scalar`:return this.flowScalar(this.type);case`block-scalar-header`:return{type:`block-scalar`,offset:this.offset,indent:this.indent,props:[this.sourceToken],source:``};case`flow-map-start`:case`flow-seq-start`:return{type:`flow-collection`,offset:this.offset,indent:this.indent,start:this.sourceToken,items:[],end:[]};case`seq-item-ind`:return{type:`block-seq`,offset:this.offset,indent:this.indent,items:[{start:[this.sourceToken]}]};case`explicit-key-ind`:{this.onKeyLine=!0;let t=wp(Cp(e));return t.push(this.sourceToken),{type:`block-map`,offset:this.offset,indent:this.indent,items:[{start:t,explicitKey:!0}]}}case`map-value-ind`:{this.onKeyLine=!0;let t=wp(Cp(e));return{type:`block-map`,offset:this.offset,indent:this.indent,items:[{start:t,key:null,sep:[this.sourceToken]}]}}}return null}atIndentedComment(e,t){return this.type!==`comment`||this.indent<=t?!1:e.every(e=>e.type===`newline`||e.type===`space`)}*documentEnd(e){this.type!==`doc-mode`&&(e.end?e.end.push(this.sourceToken):e.end=[this.sourceToken],this.type===`newline`&&(yield*this.pop()))}*lineEnd(e){switch(this.type){case`comma`:case`doc-start`:case`doc-end`:case`flow-seq-end`:case`flow-map-end`:case`map-value-ind`:yield*this.pop(),yield*this.step();break;case`newline`:this.onKeyLine=!1;default:e.end?e.end.push(this.sourceToken):e.end=[this.sourceToken],this.type===`newline`&&(yield*this.pop())}}};function Dp(e){let t=e.prettyErrors!==!1;return{lineCounter:e.lineCounter||t&&new yp||null,prettyErrors:t}}function Op(e,t={}){let{lineCounter:n,prettyErrors:r}=Dp(t),i=new Ep(n?.addNewLine),a=new ap(t),o=null;for(let t of a.compose(i.parse(e),!0,e.length))if(!o)o=t;else if(o.options.logLevel!==`silent`){o.errors.push(new xf(t.range.slice(0,2),`MULTIPLE_DOCS`,`Source contains multiple documents; please use YAML.parseAllDocuments()`));break}return r&&n&&(o.errors.forEach(Cf(e,n)),o.warnings.forEach(Cf(e,n))),o}var kp=null;function Ap(e){if(kp=Op(e,{keepSourceTokens:!0}),kp.errors.length>0){let e=kp.errors.map(e=>e.message).join(`; `);throw Error(`YAML parse error: ${e}`)}return kp.toJS()}function jp(e){if(kp)return Mp(kp,e);let t=new vf(e);return Np(t),t.toString({indent:2,lineWidth:0,singleQuote:!1})}function Mp(e,t){let n=e.clone();return n.contents=n.createNode(t),Pp(e.contents,n.contents),Np(n),n.toString()}function Np(e){let t=e.contents;if(!t||!(`items`in t))return;let n=t.items;if(Array.isArray(n))for(let e=1;e<n.length;e++){let t=n[e];t&&t.key&&(t.key.spaceBefore=!0)}}function Pp(e,t){if(!(!e||!t)&&(e.commentBefore&&(t.commentBefore=e.commentBefore),e.comment&&(t.comment=e.comment),e.items&&t.items))for(let n of e.items){let e=n.key?.value??n.key,r=t.items.find(t=>(t.key?.value??t.key)===e);r&&(Pp(n,r),Pp(n.value,r.value))}}var Fp=/^[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)*$/,Ip=/%[0-9a-fA-F]{2}/;function Lp(e){if(!e||e.trim()===``)return{valid:!1,error:`Filename cannot be empty`};if(e.includes(`/`)||e.includes(`\\`))return{valid:!1,error:`Filename cannot contain path separators (/ or \\)`};if(e.includes(`..`))return{valid:!1,error:`Filename cannot contain ".." (path traversal)`};if(Ip.test(e))return{valid:!1,error:`Filename cannot contain URL-encoded characters`};for(let t=0;t<e.length;t++){let n=e.charCodeAt(t);if(n<32||n===127)return{valid:!1,error:`Filename cannot contain control characters`}}return Fp.test(e)?{valid:!0}:{valid:!1,error:`Filename must contain only letters, numbers, dashes, underscores, and dots (not consecutive)`}}function Rp(e){if(!e||e.trim()===``)return null;let t=e;t=t.replace(/[/\\]/g,``);try{t=decodeURIComponent(t)}catch{t=t.replace(/%[0-9a-fA-F]{2}/g,``)}return t=t.replace(/[\x00-\x1f\x7f]/g,``),t=t.replace(/\.{2,}/g,`.`),t=t.replace(/[^a-zA-Z0-9._-]/g,`_`),t=t.replace(/_+/g,`_`),t=t.replace(/^[._]+|[._]+$/g,``),!t||t.length===0||!Lp(t).valid?null:t}var zp={data:{},hierarchy:{order:[],merge:`first`},overrides:{},ccm:{resources:[]}},Q=new class{constructor(){this.subscribers=new Set,this.state={manifest:structuredClone(zp),errors:[],isDirty:!1,templates:new Map,activeTemplateId:null}}subscribe(e){return this.subscribers.add(e),e(this.state),()=>this.subscribers.delete(e)}notify(){this.subscribers.forEach(e=>e(this.state))}getState(){return this.state}getManifest(){return this.state.manifest}getResources(){return this.state.manifest.ccm.resources}getResourceById(e){return this.state.manifest.ccm.resources.find(t=>t.id===e)}getResourceReferences(){return this.state.manifest.ccm.resources.map(e=>({type:e.type,name:e.name,alias:e.alias}))}getTemplates(){return this.state.templates}getActiveTemplate(){return this.state.activeTemplateId&&this.state.templates.get(this.state.activeTemplateId)||null}getTemplateById(e){return this.state.templates.get(e)}update(e){e(this.state.manifest),this.state={...this.state,isDirty:!0},this.validate(),this.notify()}setData(e){this.update(t=>{t.data=e})}setDataValue(e,t){this.update(n=>{n.data[e]=t})}deleteDataKey(e){this.update(t=>{delete t.data[e]})}checkDataPathConflict(e){let t=e.split(`.`),n=this.state.manifest.data;for(let r=0;r<t.length-1;r++){let i=t[r];if(typeof n!=`object`||!n||Array.isArray(n))return null;let a=n[i];if(a===void 0)return null;if(typeof a!=`object`||!a||Array.isArray(a))return`Cannot set "${e}": "${t.slice(0,r+1).join(`.`)}" is not an object`;n=a}return typeof n==`object`&&n&&!Array.isArray(n)&&t[t.length-1]in n?`A variable with key "${e}" already exists`:null}setDataPath(e,t){let n=e.split(`.`);if(n.length===1){this.setDataValue(e,t);return}this.update(r=>{let i=r.data;for(let t=0;t<n.length-1;t++){let r=n[t];r in i||(i[r]={});let a=i[r];if(typeof a!=`object`||!a||Array.isArray(a))throw Error(`Cannot set "${e}": "${n.slice(0,t+1).join(`.`)}" is not an object`);i=a}i[n[n.length-1]]=t})}deleteDataPath(e){let t=e.split(`.`);if(t.length===1){this.deleteDataKey(e);return}this.update(e=>{let n=[],r=e.data;for(let e=0;e<t.length-1;e++){let i=t[e];if(!(i in r))return;let a=r[i];if(typeof a!=`object`||!a||Array.isArray(a))return;n.push({obj:r,key:i}),r=a}let i=t[t.length-1];delete r[i];for(let e=n.length-1;e>=0;e--){let{obj:t,key:r}=n[e],i=t[r];if(Object.keys(i).length===0)delete t[r];else break}})}getFlattenedData(){let e=[],t=(n,r)=>{for(let[i,a]of Object.entries(n)){let n=r?`${r}.${i}`:i;typeof a==`object`&&a&&!Array.isArray(a)?t(a,n):e.push({key:n,value:a})}};return t(this.state.manifest.data,``),e}setHierarchyOrder(e){this.update(t=>{t.hierarchy.order=e})}setHierarchyMerge(e){this.update(t=>{t.hierarchy.merge=e})}setOverride(e,t){this.update(n=>{n.overrides[e]=t})}deleteOverride(e){this.update(t=>{delete t.overrides[e]})}checkOverridePathConflict(e,t){let n=this.state.manifest.overrides[e];if(!n)return null;let r=t.split(`.`),i=n;for(let e=0;e<r.length-1;e++){let n=r[e];if(typeof i!=`object`||!i||Array.isArray(i))return null;let a=i[n];if(a===void 0)return null;if(typeof a!=`object`||!a||Array.isArray(a))return`Cannot set "${t}": "${r.slice(0,e+1).join(`.`)}" is not an object`;i=a}return typeof i==`object`&&i&&!Array.isArray(i)&&r[r.length-1]in i?`A variable with key "${t}" already exists`:null}setOverridePath(e,t,n){let r=t.split(`.`);this.update(i=>{if(i.overrides[e]||(i.overrides[e]={}),r.length===1){i.overrides[e][t]=n;return}let a=i.overrides[e];for(let e=0;e<r.length-1;e++){let n=r[e];n in a||(a[n]={});let i=a[n];if(typeof i!=`object`||!i||Array.isArray(i))throw Error(`Cannot set "${t}": "${r.slice(0,e+1).join(`.`)}" is not an object`);a=i}a[r[r.length-1]]=n})}deleteOverridePath(e,t){let n=t.split(`.`);this.update(r=>{let i=r.overrides[e];if(!i)return;if(n.length===1){delete i[t];return}let a=[],o=i;for(let e=0;e<n.length-1;e++){let t=n[e];if(!(t in o))return;let r=o[t];if(typeof r!=`object`||!r||Array.isArray(r))return;a.push({obj:o,key:t}),o=r}let s=n[n.length-1];delete o[s];for(let e=a.length-1;e>=0;e--){let{obj:t,key:n}=a[e],r=t[n];if(Object.keys(r).length===0)delete t[n];else break}})}getFlattenedOverride(e){let t=this.state.manifest.overrides[e];if(!t)return[];let n=[],r=(e,t)=>{for(let[i,a]of Object.entries(e)){let e=t?`${t}.${i}`:i;typeof a==`object`&&a&&!Array.isArray(a)?r(a,e):n.push({key:e,value:a})}};return r(t,``),n}setCcmPreMessage(e){this.update(t=>{t.ccm.pre_message=e})}setCcmPostMessage(e){this.update(t=>{t.ccm.post_message=e})}setCcmFailOnError(e){this.update(t=>{t.ccm.fail_on_error=e||void 0})}addResource(e){let t=crypto.randomUUID(),n={...e,id:t};return this.update(e=>{e.ccm.resources=[...e.ccm.resources,n]}),t}updateResource(e,t){this.update(n=>{n.ccm.resources=n.ccm.resources.map(n=>n.id===e?{...t,id:e}:n)})}deleteResource(e){this.update(t=>{t.ccm.resources=t.ccm.resources.filter(t=>t.id!==e)})}reorderResources(e,t){this.update(n=>{let r=[...n.ccm.resources],[i]=r.splice(e,1);r.splice(t,0,i),n.ccm.resources=r})}duplicateResource(e){let t=this.getResourceById(e);if(!t)return;let n=structuredClone(t);n.name=`${n.name}_copy`;let{id:r,...i}=n;return this.addResource(i)}addTemplate(e,t=``){let n=e.endsWith(`.jet`)?e:`${e}.jet`,r=Lp(n);if(!r.valid)throw Error(`Invalid template filename: ${r.error}`);let i=crypto.randomUUID(),a={id:i,name:n,content:t},o=new Map(this.state.templates);return o.set(i,a),this.state={...this.state,templates:o,isDirty:!0},this.notify(),i}updateTemplateContent(e,t){let n=this.state.templates.get(e);if(!n)return;let r=new Map(this.state.templates);r.set(e,{...n,content:t}),this.state={...this.state,templates:r,isDirty:!0},this.notify()}renameTemplate(e,t){let n=this.state.templates.get(e);if(!n)return;let r=t.endsWith(`.jet`)?t:`${t}.jet`,i=Lp(r);if(!i.valid)throw Error(`Invalid template filename: ${i.error}`);let a=new Map(this.state.templates);a.set(e,{...n,name:r}),this.state={...this.state,templates:a,isDirty:!0},this.notify()}deleteTemplate(e){if(!this.state.templates.has(e))return;let t=new Map(this.state.templates);t.delete(e);let n=this.state.activeTemplateId===e?null:this.state.activeTemplateId;this.state={...this.state,templates:t,activeTemplateId:n,isDirty:!0},this.notify()}setActiveTemplate(e){e!==null&&!this.state.templates.has(e)||(this.state={...this.state,activeTemplateId:e},this.notify())}validate(){this.state.errors=Pl(this.state.manifest)}getErrors(){return this.state.errors}hasErrors(){return this.state.errors.some(e=>e.severity===`error`)}toYaml(){return jp(this.toExportFormat())}fromYaml(e){try{let t=Ap(e);return this.loadManifest(t)}catch(e){return{success:!1,errors:[e.message]}}}toExportFormat(){let e=this.state.manifest,t={};Object.keys(e.data).length>0&&(t.data=e.data),e.hierarchy.order.length>0&&(t.hierarchy={order:e.hierarchy.order,...e.hierarchy.merge===`first`?{}:{merge:e.hierarchy.merge}}),Object.keys(e.overrides).length>0&&(t.overrides=e.overrides);let n={};return e.ccm.pre_message&&(n.pre_message=e.ccm.pre_message),e.ccm.post_message&&(n.post_message=e.ccm.post_message),e.ccm.fail_on_error&&(n.fail_on_error=e.ccm.fail_on_error),e.ccm.resources.length>0&&(n.resources=e.ccm.resources.map(e=>this.resourceToExportFormat(e))),Object.keys(n).length>0&&(t.ccm=n),t}resourceToExportFormat(e){let t={...e.properties};return e.type===`scaffold`&&t.post&&typeof t.post==`object`&&!Array.isArray(t.post)&&(t.post=Object.entries(t.post).map(([e,t])=>({[e]:t}))),e.alias&&(t.alias=e.alias),e.require?.length&&(t.require=e.require),e.control&&(t.control=e.control),e.health_checks?.length&&(t.health_checks=e.health_checks),e.register_when_stable?.length&&(t.register_when_stable=e.register_when_stable),{[e.type]:[{[e.name]:Object.keys(t).length>0?t:{}}]}}loadManifest(e){try{let t=this.parseManifestFormat(e);return this.state={...this.state,manifest:t,isDirty:!0},this.validate(),this.notify(),{success:!0}}catch(e){return{success:!1,errors:[e.message]}}}parseManifestFormat(e){if(typeof e!=`object`||!e)throw Error(`Invalid manifest: expected object`);let t=e,n=structuredClone(zp);if(t.data&&typeof t.data==`object`&&(n.data=t.data),t.hierarchy&&typeof t.hierarchy==`object`){let e=t.hierarchy;Array.isArray(e.order)&&(n.hierarchy.order=e.order),(e.merge===`first`||e.merge===`deep`)&&(n.hierarchy.merge=e.merge)}if(t.overrides&&typeof t.overrides==`object`&&(n.overrides=t.overrides),t.ccm&&typeof t.ccm==`object`){let e=t.ccm;typeof e.pre_message==`string`&&(n.ccm.pre_message=e.pre_message),typeof e.post_message==`string`&&(n.ccm.post_message=e.post_message),typeof e.fail_on_error==`boolean`&&(n.ccm.fail_on_error=e.fail_on_error),Array.isArray(e.resources)&&(n.ccm.resources=e.resources.flatMap(e=>this.parseResources(e)))}return n}parseResources(e){if(typeof e!=`object`||!e)throw Error(`Invalid resource format`);let t=e,n=Object.keys(t)[0],r=t[n];if(!Array.isArray(r)||r.length===0)throw Error(`Invalid resource format for type: ${n}`);let i=[],a={};for(let e of r){let t=e,r=Object.keys(t)[0],o=t[r]||{};if(r===`defaults`){a={...o};continue}let s={...a,...o};if(n===`scaffold`&&s.post&&Array.isArray(s.post)){let e={};for(let t of s.post)Object.assign(e,t);s.post=e}let{alias:c,require:l,control:u,health_checks:d,register_when_stable:f,...p}=s;i.push({id:crypto.randomUUID(),type:n,name:r,properties:p,...c&&{alias:c},...l&&{require:l},...u&&{control:u},...d&&{health_checks:d},...f&&{register_when_stable:f}})}return i}markSaved(){this.state={...this.state,isDirty:!1,lastSaved:new Date},this.notify()}restoreState(e,t){this.state={...this.state,manifest:structuredClone(e),templates:t?new Map(t):new Map,activeTemplateId:null,isDirty:!1},this.validate(),this.notify()}reset(){this.state={manifest:structuredClone(zp),errors:[],isDirty:!1,templates:new Map,activeTemplateId:null},this.notify()}},Bp=`ccm-studio-manifest`,Vp=2,Hp={save(e,t){try{let n={version:Vp,manifest:e,templates:Array.from(t.values()),savedAt:new Date().toISOString()};localStorage.setItem(Bp,JSON.stringify(n))}catch(e){console.error(`Failed to save to localStorage:`,e)}},load(){try{let e=localStorage.getItem(Bp);if(!e)return null;let t=JSON.parse(e);if(t.version===1)return this.migrateV1(t);let n=t,r=new Map;for(let e of n.templates||[]){let t=Lp(e.name);if(t.valid)r.set(e.id,e);else{let n=Rp(e.name);n?(console.warn(`Template filename "${e.name}" was invalid and sanitized to "${n}"`),r.set(e.id,{...e,name:n})):console.error(`Template "${e.name}" skipped: ${t.error}`)}}return{manifest:n.manifest,templates:r}}catch(e){return console.error(`Failed to load from localStorage:`,e),null}},hasSavedData(){return localStorage.getItem(Bp)!==null},getLastSaved(){try{let e=localStorage.getItem(Bp);if(!e)return null;let t=JSON.parse(e);return new Date(t.savedAt)}catch{return null}},getSummary(){try{let e=localStorage.getItem(Bp);if(!e)return null;let t=JSON.parse(e);return{resourceCount:t.manifest?.ccm?.resources?.length??0,templateCount:t.version===2?t.templates?.length??0:0,lastSaved:new Date(t.savedAt)}}catch{return null}},clear(){localStorage.removeItem(Bp)},migrateV1(e){return console.info(`Migrating localStorage data from v1 to v2 (adding templates support)`),{manifest:e.manifest,templates:new Map}}},Up=1e3,Wp=null;function Gp(){Q.subscribe(e=>{e.isDirty&&(Wp&&clearTimeout(Wp),Wp=setTimeout(()=>{Hp.save(e.manifest,e.templates),console.debug(`Auto-saved to localStorage`)},Up))})}function Kp(){let e=Hp.load();return e?(Q.restoreState(e.manifest,e.templates),!0):!1}var qp=Uint8Array,Jp=Uint16Array,Yp=Int32Array,Xp=new qp([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Zp=new qp([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),Qp=new qp([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),$p=function(e,t){for(var n=new Jp(31),r=0;r<31;++r)n[r]=t+=1<<e[r-1];for(var i=new Yp(n[30]),r=1;r<30;++r)for(var a=n[r];a<n[r+1];++a)i[a]=a-n[r]<<5|r;return{b:n,r:i}},em=$p(Xp,2),tm=em.b,nm=em.r;tm[28]=258,nm[258]=28;var rm=$p(Zp,0);rm.b;for(var im=rm.r,am=new Jp(32768),om=0;om<32768;++om){var sm=(om&43690)>>1|(om&21845)<<1;sm=(sm&52428)>>2|(sm&13107)<<2,sm=(sm&61680)>>4|(sm&3855)<<4,am[om]=((sm&65280)>>8|(sm&255)<<8)>>1}for(var cm=(function(e,t,n){for(var r=e.length,i=0,a=new Jp(t);i<r;++i)e[i]&&++a[e[i]-1];var o=new Jp(t);for(i=1;i<t;++i)o[i]=o[i-1]+a[i-1]<<1;var s;if(n){s=new Jp(1<<t);var c=15-t;for(i=0;i<r;++i)if(e[i])for(var l=i<<4|e[i],u=t-e[i],d=o[e[i]-1]++<<u,f=d|(1<<u)-1;d<=f;++d)s[am[d]>>c]=l}else for(s=new Jp(r),i=0;i<r;++i)e[i]&&(s[i]=am[o[e[i]-1]++]>>15-e[i]);return s}),lm=new qp(288),om=0;om<144;++om)lm[om]=8;for(var om=144;om<256;++om)lm[om]=9;for(var om=256;om<280;++om)lm[om]=7;for(var om=280;om<288;++om)lm[om]=8;for(var um=new qp(32),om=0;om<32;++om)um[om]=5;var dm=cm(lm,9,0),fm=cm(um,5,0),pm=function(e){return(e+7)/8|0},mm=function(e,t,n){return(t==null||t<0)&&(t=0),(n==null||n>e.length)&&(n=e.length),new qp(e.subarray(t,n))},hm=function(e,t,n){n<<=t&7;var r=t/8|0;e[r]|=n,e[r+1]|=n>>8},gm=function(e,t,n){n<<=t&7;var r=t/8|0;e[r]|=n,e[r+1]|=n>>8,e[r+2]|=n>>16},_m=function(e,t){for(var n=[],r=0;r<e.length;++r)e[r]&&n.push({s:r,f:e[r]});var i=n.length,a=n.slice();if(!i)return{t:wm,l:0};if(i==1){var o=new qp(n[0].s+1);return o[n[0].s]=1,{t:o,l:1}}n.sort(function(e,t){return e.f-t.f}),n.push({s:-1,f:25001});var s=n[0],c=n[1],l=0,u=1,d=2;for(n[0]={s:-1,f:s.f+c.f,l:s,r:c};u!=i-1;)s=n[n[l].f<n[d].f?l++:d++],c=n[l!=u&&n[l].f<n[d].f?l++:d++],n[u++]={s:-1,f:s.f+c.f,l:s,r:c};for(var f=a[0].s,r=1;r<i;++r)a[r].s>f&&(f=a[r].s);var p=new Jp(f+1),m=vm(n[u-1],p,0);if(m>t){var r=0,h=0,g=m-t,_=1<<g;for(a.sort(function(e,t){return p[t.s]-p[e.s]||e.f-t.f});r<i;++r){var v=a[r].s;if(p[v]>t)h+=_-(1<<m-p[v]),p[v]=t;else break}for(h>>=g;h>0;){var y=a[r].s;p[y]<t?h-=1<<t-p[y]++-1:++r}for(;r>=0&&h;--r){var b=a[r].s;p[b]==t&&(--p[b],++h)}m=t}return{t:new qp(p),l:m}},vm=function(e,t,n){return e.s==-1?Math.max(vm(e.l,t,n+1),vm(e.r,t,n+1)):t[e.s]=n},ym=function(e){for(var t=e.length;t&&!e[--t];);for(var n=new Jp(++t),r=0,i=e[0],a=1,o=function(e){n[r++]=e},s=1;s<=t;++s)if(e[s]==i&&s!=t)++a;else{if(!i&&a>2){for(;a>138;a-=138)o(32754);a>2&&(o(a>10?a-11<<5|28690:a-3<<5|12305),a=0)}else if(a>3){for(o(i),--a;a>6;a-=6)o(8304);a>2&&(o(a-3<<5|8208),a=0)}for(;a--;)o(i);a=1,i=e[s]}return{c:n.subarray(0,r),n:t}},bm=function(e,t){for(var n=0,r=0;r<t.length;++r)n+=e[r]*t[r];return n},xm=function(e,t,n){var r=n.length,i=pm(t+2);e[i]=r&255,e[i+1]=r>>8,e[i+2]=e[i]^255,e[i+3]=e[i+1]^255;for(var a=0;a<r;++a)e[i+a+4]=n[a];return(i+4+r)*8},Sm=function(e,t,n,r,i,a,o,s,c,l,u){hm(t,u++,n),++i[256];for(var d=_m(i,15),f=d.t,p=d.l,m=_m(a,15),h=m.t,g=m.l,_=ym(f),v=_.c,y=_.n,b=ym(h),x=b.c,S=b.n,C=new Jp(19),w=0;w<v.length;++w)++C[v[w]&31];for(var w=0;w<x.length;++w)++C[x[w]&31];for(var T=_m(C,7),ee=T.t,te=T.l,E=19;E>4&&!ee[Qp[E-1]];--E);var ne=l+5<<3,re=bm(i,lm)+bm(a,um)+o,ie=bm(i,f)+bm(a,h)+o+14+3*E+bm(C,ee)+2*C[16]+3*C[17]+7*C[18];if(c>=0&&ne<=re&&ne<=ie)return xm(t,u,e.subarray(c,c+l));var D,O,ae,oe;if(hm(t,u,1+(ie<re)),u+=2,ie<re){D=cm(f,p,0),O=f,ae=cm(h,g,0),oe=h;var se=cm(ee,te,0);hm(t,u,y-257),hm(t,u+5,S-1),hm(t,u+10,E-4),u+=14;for(var w=0;w<E;++w)hm(t,u+3*w,ee[Qp[w]]);u+=3*E;for(var ce=[v,x],le=0;le<2;++le)for(var ue=ce[le],w=0;w<ue.length;++w){var de=ue[w]&31;hm(t,u,se[de]),u+=ee[de],de>15&&(hm(t,u,ue[w]>>5&127),u+=ue[w]>>12)}}else D=dm,O=lm,ae=fm,oe=um;for(var w=0;w<s;++w){var k=r[w];if(k>255){var de=k>>18&31;gm(t,u,D[de+257]),u+=O[de+257],de>7&&(hm(t,u,k>>23&31),u+=Xp[de]);var fe=k&31;gm(t,u,ae[fe]),u+=oe[fe],fe>3&&(gm(t,u,k>>5&8191),u+=Zp[fe])}else gm(t,u,D[k]),u+=O[k]}return gm(t,u,D[256]),u+O[256]},Cm=new Yp([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),wm=new qp(0),Tm=function(e,t,n,r,i,a){var o=a.z||e.length,s=new qp(r+o+5*(1+Math.ceil(o/7e3))+i),c=s.subarray(r,s.length-i),l=a.l,u=(a.r||0)&7;if(t){u&&(c[0]=a.r>>3);for(var d=Cm[t-1],f=d>>13,p=d&8191,m=(1<<n)-1,h=a.p||new Jp(32768),g=a.h||new Jp(m+1),_=Math.ceil(n/3),v=2*_,y=function(t){return(e[t]^e[t+1]<<_^e[t+2]<<v)&m},b=new Yp(25e3),x=new Jp(288),S=new Jp(32),C=0,w=0,T=a.i||0,ee=0,te=a.w||0,E=0;T+2<o;++T){var ne=y(T),re=T&32767,ie=g[ne];if(h[re]=ie,g[ne]=re,te<=T){var D=o-T;if((C>7e3||ee>24576)&&(D>423||!l)){u=Sm(e,c,0,b,x,S,w,ee,E,T-E,u),ee=C=w=0,E=T;for(var O=0;O<286;++O)x[O]=0;for(var O=0;O<30;++O)S[O]=0}var ae=2,oe=0,se=p,ce=re-ie&32767;if(D>2&&ne==y(T-ce))for(var le=Math.min(f,D)-1,ue=Math.min(32767,T),de=Math.min(258,D);ce<=ue&&--se&&re!=ie;){if(e[T+ae]==e[T+ae-ce]){for(var k=0;k<de&&e[T+k]==e[T+k-ce];++k);if(k>ae){if(ae=k,oe=ce,k>le)break;for(var fe=Math.min(ce,k-2),pe=0,O=0;O<fe;++O){var me=T-ce+O&32767,he=me-h[me]&32767;he>pe&&(pe=he,ie=me)}}}re=ie,ie=h[re],ce+=re-ie&32767}if(oe){b[ee++]=268435456|nm[ae]<<18|im[oe];var ge=nm[ae]&31,_e=im[oe]&31;w+=Xp[ge]+Zp[_e],++x[257+ge],++S[_e],te=T+ae,++C}else b[ee++]=e[T],++x[e[T]]}}for(T=Math.max(T,te);T<o;++T)b[ee++]=e[T],++x[e[T]];u=Sm(e,c,l,b,x,S,w,ee,E,T-E,u),l||(a.r=u&7|c[u/8|0]<<3,u-=7,a.h=g,a.p=h,a.i=T,a.w=te)}else{for(var T=a.w||0;T<o+l;T+=65535){var ve=T+65535;ve>=o&&(c[u/8|0]=l,ve=o),u=xm(c,u+1,e.subarray(T,ve))}a.i=o}return mm(s,0,r+pm(u)+i)},Em=(function(){for(var e=new Int32Array(256),t=0;t<256;++t){for(var n=t,r=9;--r;)n=(n&1&&-306674912)^n>>>1;e[t]=n}return e})(),Dm=function(){var e=-1;return{p:function(t){for(var n=e,r=0;r<t.length;++r)n=Em[n&255^t[r]]^n>>>8;e=n},d:function(){return~e}}},Om=function(e,t,n,r,i){if(!i&&(i={l:1},t.dictionary)){var a=t.dictionary.subarray(-32768),o=new qp(a.length+e.length);o.set(a),o.set(e,a.length),e=o,i.w=a.length}return Tm(e,t.level==null?6:t.level,t.mem==null?i.l?Math.ceil(Math.max(8,Math.min(13,Math.log(e.length)))*1.5):20:12+t.mem,n,r,i)},km=function(e,t,n){for(;n;++t)e[t]=n,n>>>=8},Am=function(e,t){var n=t.filename;if(e[0]=31,e[1]=139,e[2]=8,e[8]=t.level<2?4:t.level==9?2:0,e[9]=3,t.mtime!=0&&km(e,4,Math.floor(new Date(t.mtime||Date.now())/1e3)),n){e[3]=8;for(var r=0;r<=n.length;++r)e[r+10]=n.charCodeAt(r)}},jm=function(e){return 10+(e.filename?e.filename.length+1:0)};function Mm(e,t){t||={};var n=Dm(),r=e.length;n.p(e);var i=Om(e,t,jm(t),8),a=i.length;return Am(i,t),km(i,a-8,n.d()),km(i,a-4,r),i}var Nm=typeof TextEncoder<`u`&&new TextEncoder,Pm=typeof TextDecoder<`u`&&new TextDecoder;try{Pm.decode(wm,{stream:!0})}catch{}function Fm(e,t){if(t){for(var n=new qp(e.length),r=0;r<e.length;++r)n[r]=e.charCodeAt(r);return n}if(Nm)return Nm.encode(e);for(var i=e.length,a=new qp(e.length+(e.length>>1)),o=0,s=function(e){a[o++]=e},r=0;r<i;++r){if(o+5>a.length){var c=new qp(o+8+(i-r<<1));c.set(a),a=c}var l=e.charCodeAt(r);l<128||t?s(l):l<2048?(s(192|l>>6),s(128|l&63)):l>55295&&l<57344?(l=65536+(l&1047552)|e.charCodeAt(++r)&1023,s(240|l>>18),s(128|l>>12&63),s(128|l>>6&63),s(128|l&63)):(s(224|l>>12),s(128|l>>6&63),s(128|l&63))}return mm(a,0,o)}var Im=512,Lm=[`manifest.yaml`,`manifest.json`];function Rm(e){return zm(e),Mm(Bm(e))}function zm(e){let t=[];for(let n of e){if(n.path.startsWith(`/`)||n.path.startsWith(`\\`)){t.push(`"${n.path}": absolute paths not allowed`);continue}if(n.path.includes(`..`)){t.push(`"${n.path}": path traversal not allowed`);continue}if(!Lm.includes(n.path))if(n.path.startsWith(`templates/`)){let e=Lp(n.path.slice(10));e.valid||t.push(`"${n.path}": ${e.error}`)}else t.push(`"${n.path}": only manifest.yaml and templates/* allowed`)}if(t.length>0)throw Error(`Invalid archive files:\n${t.join(`
`)}`)}function Bm(e){let t=[];for(let n of e){let e=Fm(n.content),r=Vm(n.path,e.length);t.push(r),t.push(e);let i=Im-e.length%Im;i<Im&&t.push(new Uint8Array(i))}t.push(new Uint8Array(Im*2));let n=t.reduce((e,t)=>e+t.length,0),r=new Uint8Array(n),i=0;for(let e of t)r.set(e,i),i+=e.length;return r}function Vm(e,t){let n=new Uint8Array(Im),r=new TextEncoder,i=r.encode(e);n.set(i.slice(0,100),0),Hm(n,100,420,8),Hm(n,108,0,8),Hm(n,116,0,8),Hm(n,124,t,12),Hm(n,136,Math.floor(Date.now()/1e3),12);for(let e=148;e<156;e++)n[e]=32;n[156]=48;let a=r.encode(`ustar\0`);n.set(a,257),n[263]=48,n[264]=48;let o=0;for(let e=0;e<Im;e++)o+=n[e];return Hm(n,148,o,7),n[155]=32,n}function Hm(e,t,n,r){let i=n.toString(8).padStart(r-1,`0`),a=new TextEncoder().encode(i);e.set(a.slice(0,r-1),t),e[t+r-1]=0}function Um(e={}){let t=Q.toYaml(),n=e.filename||`manifest.yaml`,r=t;e.includeComments&&(r=`# CCM Manifest\n# Generated by CCM Studio\n# ${new Date().toISOString()}\n\n${t}`),Gm(r,n,`text/yaml`),Q.markSaved()}function Wm(e={}){let t=[],n=Q.toYaml();e.includeHeaderComment&&(n=`# CCM Manifest\n# Generated by CCM Studio\n# ${new Date().toISOString()}\n\n${n}`),t.push({path:`manifest.yaml`,content:n});let r=Q.getTemplates();for(let e of r.values())t.push({path:`templates/${e.name}`,content:e.content});Km(Rm(t),e.filename||`manifest.tar.gz`,`application/gzip`),Q.markSaved()}function Gm(e,t,n){qm(new Blob([e],{type:n}),t)}function Km(e,t,n){qm(new Blob([e],{type:n}),t)}function qm(e,t){let n=URL.createObjectURL(e),r=document.createElement(`a`);r.href=n,r.download=t,document.body.appendChild(r),r.click(),document.body.removeChild(r),URL.revokeObjectURL(n)}function Jm(){Q.getTemplates().size>0?Wm():Um()}function Ym(e,t){let n=[],r;try{r=t?.endsWith(`.json`)||e.trim().startsWith(`{`)?JSON.parse(e):Ap(e)}catch(e){return{success:!1,errors:[`Parse error: ${e.message}`]}}if(typeof r!=`object`||!r)return{success:!1,errors:[`Invalid manifest: expected an object`]};let i=r,a=[`data`,`hierarchy`,`overrides`,`ccm`];Object.keys(i).forEach(e=>{a.includes(e)||n.push(`Unknown top-level key '${e}' will be ignored`)});let o=Q.loadManifest(r);return o.success?{success:!0,warnings:n.length>0?n:void 0}:{success:!1,errors:o.errors}}var Xm=[{version:`v0.0.5`,date:`2026-04-03`,changes:[`Add onlyif and unless guard command properties to exec resource`]},{version:`v0.0.4`,date:`2026-03-18`,changes:[`Add per-resource registration section for NATS service discovery (register_when_stable)`]},{version:`v0.0.3`,date:`2026-02-24`,changes:[`Add scaffold resource type for managing scaffolded file trees`]},{version:`v0.0.2`,date:`2025-02-04`,changes:[`Add template syntax help bar with documentation links`,`Add changelog dialog`,`Reorder tabs: Data, Resources, Templates, Hierarchy`,`Clear dirty indicator on export`,`Streamlined template creation with inline rename`]},{version:`v0.0.1`,date:`2025-02-04`,changes:[`Initial release`,`Visual editor for CCM manifest files`,`Support for file, exec, archive, package, and service resources`,`Data variables with Hiera-style hierarchy`,`Override editor for environment/platform-specific values`,`Jet template editor with syntax highlighting and autocomplete`,`YAML preview with live updates`,`Import/export manifests as YAML or tar.gz bundles`,`LocalStorage persistence with recovery dialog`]}];function $(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a}var Zm=class extends Ge{constructor(...e){super(...e),this.isDirty=!1,this.hasErrors=!1,this.logoUrl=`/logo-circle.svg`,this.showChangelog=!1}static{this.styles=v`
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

    /* Changelog dialog */
    .changelog-dialog::part(body) {
      padding: 0;
    }

    .changelog-content {
      padding: 16px 24px;
      max-height: 60vh;
      overflow-y: auto;
    }

    .changelog-version {
      margin-bottom: 24px;
    }

    .changelog-version:last-child {
      margin-bottom: 0;
    }

    .changelog-version h3 {
      margin: 0 0 8px 0;
      font-size: 16px;
      font-weight: 600;
      color: var(--sl-color-primary-600);
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .changelog-version h3 .date {
      font-size: 13px;
      font-weight: 400;
      color: var(--sl-color-neutral-500);
    }

    .changelog-version ul {
      margin: 0;
      padding-left: 20px;
    }

    .changelog-version li {
      margin-bottom: 4px;
      font-size: 14px;
      color: var(--sl-color-neutral-700);
    }
  `}render(){return A`
      <div class="header">
        <div class="branding">
          <div class="logo">
            <img src=${this.logoUrl} alt="CCM Studio Logo">
          </div>
          <span class="title">CCM Studio</span>
          ${this.isDirty?A`<div class="dirty-indicator" title="Unsaved changes"></div>`:``}
        </div>

        <div class="actions">
          ${this.hasErrors?A`<span class="error-badge">
                <sl-icon name="exclamation-triangle"></sl-icon>
                <span class="error-text">Validation errors</span>
              </span>`:``}

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
              <sl-menu-item @click=${()=>window.open(`https://choria-cm.dev`,`_blank`)}>
                <sl-icon slot="prefix" name="house"></sl-icon>
                Choria CM Home
              </sl-menu-item>
              <sl-menu-item @click=${()=>window.open(`https://choria-cm.dev/yamlmanifests/`,`_blank`)}>
                <sl-icon slot="prefix" name="book"></sl-icon>
                Manifest Documentation
              </sl-menu-item>
              <sl-menu-item @click=${()=>window.open(`https://choria-cm.dev/data/`,`_blank`)}>
                <sl-icon slot="prefix" name="braces"></sl-icon>
                Data Templates
              </sl-menu-item>
              <sl-divider></sl-divider>
              <sl-menu-item @click=${this.handleShowChangelog}>
                <sl-icon slot="prefix" name="card-list"></sl-icon>
                Changelog
              </sl-menu-item>
            </sl-menu>
          </sl-dropdown>
        </div>
      </div>

      <sl-dialog
        label="Changelog"
        class="changelog-dialog"
        ?open=${this.showChangelog}
        @sl-hide=${()=>this.showChangelog=!1}
      >
        <div class="changelog-content">
          ${Xm.map(e=>A`
            <div class="changelog-version">
              <h3>
                ${e.version}
                <span class="date">${e.date}</span>
              </h3>
              <ul>
                ${e.changes.map(e=>A`<li>${e}</li>`)}
              </ul>
            </div>
          `)}
        </div>
      </sl-dialog>
    `}handleNew(){this.dispatchEvent(new CustomEvent(`new-manifest`))}handleExport(){this.dispatchEvent(new CustomEvent(`export-yaml`))}async handleImportFile(){let e=document.createElement(`input`);e.type=`file`,e.accept=`.yaml,.yml`,e.onchange=async()=>{let t=e.files?.[0];if(t){let e=await t.text();this.dispatchEvent(new CustomEvent(`import-yaml`,{detail:e}))}},e.click()}async handleImportClipboard(){try{let e=await navigator.clipboard.readText();this.dispatchEvent(new CustomEvent(`import-yaml`,{detail:e}))}catch(e){console.error(`Failed to read clipboard:`,e)}}handleShowChangelog(){this.showChangelog=!0}};$([P({type:Boolean})],Zm.prototype,`isDirty`,void 0),$([P({type:Boolean})],Zm.prototype,`hasErrors`,void 0),$([P({type:String})],Zm.prototype,`logoUrl`,void 0),$([F()],Zm.prototype,`showChangelog`,void 0),Zm=$([wt(`ccm-header`)],Zm);var Qm=class extends Ge{constructor(...e){super(...e),this.collapsed=!1,this.mobile=!1,this.yaml=``,this.showCopyToast=!1}static{this.styles=v`
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
  `}connectedCallback(){super.connectedCallback(),this.unsubscribe=Q.subscribe(e=>{this.storeState=e,this.yaml=Q.toYaml()})}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribe?.()}render(){if(this.collapsed){let e=this.mobile?`chevron-up`:`chevron-left`;return A`
        <div class="collapsed-content">
          <sl-tooltip content="Expand panel" placement=${this.mobile?`top`:`left`}>
            <sl-icon-button
              name=${e}
              label="Expand YAML panel"
              @click=${this.handleToggle}
            ></sl-icon-button>
          </sl-tooltip>
          <span class="collapsed-label">YAML</span>
        </div>
      `}let e=this.storeState?.errors.filter(e=>e.severity===`error`)??[];return A`
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
              name=${this.mobile?`chevron-down`:`chevron-right`}
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
            ${e.map(e=>A`<li>${e.path}: ${e.message}</li>`)}
          </ul>
        </div>
      `:``}

      <div class="yaml-content">
        ${this.hasContent()?A`<pre>${this.highlightYaml(this.yaml)}</pre>`:A`
            <div class="empty-state">
              <sl-icon name="file-earmark"></sl-icon>
              <p>Empty manifest</p>
              <p>Add resources, data, or hierarchy to get started</p>
            </div>
          `}
      </div>

      <div class="copy-toast ${this.showCopyToast?`show`:``}">
        Copied to clipboard
      </div>
    `}hasContent(){let e=this.yaml.trim();return e!==``&&e!==`{}`}highlightYaml(e){return Ki(e.replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/^(\s*)(#.*)$/gm,`$1<span class="yaml-comment">$2</span>`).replace(/^(\s*)([\w_-]+):/gm,`$1<span class="yaml-key">$2</span>:`).replace(/: (true|false)$/gm,`: <span class="yaml-boolean">$1</span>`).replace(/: (\d+(?:\.\d+)?)$/gm,`: <span class="yaml-number">$1</span>`).replace(/: null$/gm,`: <span class="yaml-null">null</span>`).replace(/: "([^"]*)"$/gm,`: <span class="yaml-string">"$1"</span>`).replace(/: '([^']*)'$/gm,`: <span class="yaml-string">'$1'</span>`))}async handleCopy(){try{await navigator.clipboard.writeText(this.yaml),this.showCopyToast=!0,setTimeout(()=>{this.showCopyToast=!1},2e3)}catch(e){console.error(`Failed to copy:`,e),this.showImportError([`Failed to copy to clipboard`])}}async handlePaste(){try{let e=await navigator.clipboard.readText(),t=Q.fromYaml(e);t.success||this.showImportError(t.errors??[`Unknown parse error`])}catch(e){console.error(`Failed to paste:`,e),this.showImportError([e.message])}}showImportError(e){let t=Object.assign(document.createElement(`sl-alert`),{variant:`danger`,closable:!0,duration:5e3});t.innerHTML=`
      <sl-icon slot="icon" name="exclamation-octagon"></sl-icon>
      <strong>Import Failed</strong><br>
      ${e.map(e=>this.escapeHtml(e)).join(`<br>`)}
    `,document.body.appendChild(t),t.toast()}escapeHtml(e){let t=document.createElement(`div`);return t.textContent=e,t.innerHTML}handleToggle(){this.dispatchEvent(new CustomEvent(`toggle-collapse`))}};$([P({type:Boolean,reflect:!0})],Qm.prototype,`collapsed`,void 0),$([P({type:Boolean,reflect:!0})],Qm.prototype,`mobile`,void 0),$([F()],Qm.prototype,`storeState`,void 0),$([F()],Qm.prototype,`yaml`,void 0),$([F()],Qm.prototype,`showCopyToast`,void 0),Qm=$([wt(`ccm-yaml-panel`)],Qm);var $m=class extends Ge{constructor(...e){super(...e),this.newKey=``,this.newType=`string`,this.keyError=``}static{this.styles=v`
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
  `}connectedCallback(){super.connectedCallback(),this.unsubscribe=Q.subscribe(e=>{this.storeState=e,this.requestUpdate()})}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribe?.()}render(){let e=this.storeState?.manifest.data??{},t=this.dataToEntries(e);return A`
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
            ${t.map(e=>this.renderDataRow(e))}
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
          @sl-change=${e=>this.newType=e.target.value}
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
      ${this.keyError?A`<div class="key-error">${this.keyError}</div>`:``}
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
    `}renderValueEditor(e){switch(e.type){case`boolean`:return A`
          <sl-switch
            ?checked=${e.value===!0}
            @sl-change=${t=>this.handleValueChange(e.key,t.target.checked)}
          >
            ${e.value?`true`:`false`}
          </sl-switch>
        `;case`number`:return A`
          <sl-input
            type="number"
            size="small"
            .value=${String(e.value??``)}
            @sl-change=${t=>this.handleValueChange(e.key,parseFloat(t.target.value))}
          ></sl-input>
        `;case`array`:return A`
          <div class="array-editor">
            ${(Array.isArray(e.value)?e.value:[]).map((t,n)=>A`
              <div class="array-item">
                <sl-input
                  size="small"
                  .value=${String(t)}
                  @sl-change=${t=>this.handleArrayItemChange(e.key,n,t.target.value)}
                ></sl-input>
                <sl-icon-button
                  name="x"
                  label="Remove item"
                  @click=${()=>this.handleArrayItemRemove(e.key,n)}
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
        `;default:return A`
          <sl-input
            size="small"
            .value=${String(e.value??``)}
            @sl-change=${t=>this.handleValueChange(e.key,t.target.value)}
          ></sl-input>
        `}}dataToEntries(e){return Q.getFlattenedData().map(({key:e,value:t})=>({key:e,value:t,type:this.inferType(t)}))}inferType(e){return Array.isArray(e)?`array`:typeof e==`boolean`?`boolean`:typeof e==`number`?`number`:`string`}getDefaultValue(e){switch(e){case`boolean`:return!1;case`number`:return 0;case`array`:return[];default:return``}}handleKeyInput(e){let t=e.target.value;if(this.newKey=t,!t){this.keyError=``;return}let n=t.split(`.`).find(e=>!/^[a-zA-Z_][a-zA-Z0-9_]*$/.test(e));if(n!==void 0){n===``?this.keyError=`Invalid key: empty segment (consecutive dots or leading/trailing dot)`:this.keyError=`Invalid segment "${n}": must be a valid identifier`;return}let r=Q.checkDataPathConflict(t);if(r){this.keyError=r;return}this.keyError=``}handleAdd(){let e=this.newKey.trim();!e||this.keyError||(Q.setDataPath(e,this.getDefaultValue(this.newType)),this.newKey=``,this.keyError=``)}handleAddKeydown(e){e.key===`Enter`&&!this.keyError&&this.handleAdd()}handleValueChange(e,t){Q.setDataPath(e,t)}handleDelete(e){Q.deleteDataPath(e)}getValueAtPath(e){let t=e.split(`.`),n=this.storeState.manifest.data;for(let e of t){if(typeof n!=`object`||!n)return;n=n[e]}return n}handleArrayItemChange(e,t,n){let r=this.getValueAtPath(e);if(!Array.isArray(r))return;let i=[...r];i[t]=n,Q.setDataPath(e,i)}handleArrayItemAdd(e){let t=this.getValueAtPath(e);Array.isArray(t)&&Q.setDataPath(e,[...t,``])}handleArrayItemRemove(e,t){let n=this.getValueAtPath(e);if(!Array.isArray(n))return;let r=n.filter((e,n)=>n!==t);Q.setDataPath(e,r)}};$([F()],$m.prototype,`storeState`,void 0),$([F()],$m.prototype,`newKey`,void 0),$([F()],$m.prototype,`newType`,void 0),$([F()],$m.prototype,`keyError`,void 0),$m=$([wt(`ccm-data-editor`)],$m);var eh=class extends Ge{constructor(...e){super(...e),this.openSections=new Set,this.newOverrideKey=``,this.newEntryKeys={},this.newEntryTypes={},this.entryKeyErrors={}}static{this.styles=v`
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
  `}connectedCallback(){super.connectedCallback(),this.unsubscribe=Q.subscribe(e=>{this.storeState=e})}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribe?.()}render(){let e=this.storeState?.manifest.overrides??{},t=Object.keys(e),n=this.storeState?.manifest.hierarchy.order??[],r=this.generateSuggestions(n,t);return A`
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
            ${r.map(e=>A`
              <sl-tag
                size="small"
                style="cursor: pointer"
                @click=${()=>this.addOverride(e)}
              >
                + ${e}
              </sl-tag>
            `)}
          </div>
        </div>
      `:``}

      ${t.length>0?A`
        <div class="override-cards">
          ${t.map(e=>this.renderOverrideCard(e))}
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
          @sl-input=${e=>this.newOverrideKey=e.target.value}
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
    `}renderOverrideCard(e){let t=this.openSections.has(e),n=this.getOverrideEntries(e),r=n.length,i=this.entryKeyErrors[e]||``,a=this.newEntryKeys[e]||``,o=this.newEntryTypes[e]||`string`;return A`
      <div class="override-card ${t?`open`:``}">
        <div
          class="override-header"
          @click=${()=>this.toggleSection(e)}
        >
          <div class="override-key">
            <sl-icon name="chevron-right"></sl-icon>
            ${e}
            <sl-badge variant="neutral" class="override-badge">
              ${r} ${r===1?`value`:`values`}
            </sl-badge>
          </div>
          <div class="override-actions" @click=${e=>e.stopPropagation()}>
            <sl-icon-button
              name="trash"
              @click=${()=>this.deleteOverride(e)}
            ></sl-icon-button>
          </div>
        </div>

        <div class="override-content">
          ${n.length>0?A`
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
                ${n.map(t=>this.renderEntryRow(e,t))}
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
              .value=${a}
              @sl-input=${t=>this.handleEntryKeyInput(e,t.target.value)}
              @keydown=${t=>this.handleEntryAddKeydown(t,e)}
            ></sl-input>
            <sl-select
              size="small"
              .value=${o}
              @sl-change=${t=>{this.newEntryTypes={...this.newEntryTypes,[e]:t.target.value}}}
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
              ?disabled=${!a.trim()||!!i}
            >
              <sl-icon slot="prefix" name="plus"></sl-icon>
              Add
            </sl-button>
          </div>
          ${i?A`<div class="key-error">${i}</div>`:``}
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
    `}renderValueEditor(e,t){return t.type===`array`&&Array.isArray(t.value)?A`
        <div class="array-editor">
          ${t.value.map((n,r)=>A`
            <div class="array-item">
              <sl-input
                size="small"
                .value=${String(n)}
                @sl-change=${n=>this.updateArrayItem(e,t.key,r,n.target.value)}
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
      `:t.type===`boolean`?A`
        <sl-switch
          ?checked=${t.value===!0}
          @sl-change=${n=>this.updateEntry(e,t.key,n.target.checked)}
        >
          ${t.value?`true`:`false`}
        </sl-switch>
      `:t.type===`number`?A`
        <sl-input
          type="number"
          size="small"
          .value=${String(t.value)}
          @sl-change=${n=>this.updateEntry(e,t.key,parseFloat(n.target.value))}
        ></sl-input>
      `:A`
      <sl-input
        size="small"
        .value=${String(t.value??``)}
        @sl-change=${n=>this.updateEntry(e,t.key,n.target.value)}
      ></sl-input>
    `}getOverrideEntries(e){return Q.getFlattenedOverride(e).map(({key:e,value:t})=>({key:e,value:t,type:this.inferType(t)}))}inferType(e){return Array.isArray(e)?`array`:typeof e==`boolean`?`boolean`:typeof e==`number`?`number`:`string`}getDefaultValue(e){switch(e){case`boolean`:return!1;case`number`:return 0;case`array`:return[];default:return``}}generateSuggestions(e,t){let n=[];return e.forEach(e=>{let r=e.match(/^(\w+):/);if(r){let e=r[1];({os:[`debian`,`rhel`,`ubuntu`,`centos`],env:[`production`,`staging`,`development`],role:[`web`,`db`,`app`,`cache`]}[e]||[`default`]).forEach(r=>{let i=`${e}:${r}`;t.includes(i)||n.push(i)})}}),n.slice(0,6)}toggleSection(e){this.openSections.has(e)?this.openSections.delete(e):this.openSections.add(e),this.requestUpdate()}addOverride(e){Q.setOverride(e,{}),this.openSections.add(e),this.requestUpdate()}handleAddOverride(){let e=this.newOverrideKey.trim();e&&(this.addOverride(e),this.newOverrideKey=``)}handleAddKeydown(e){e.key===`Enter`&&this.handleAddOverride()}deleteOverride(e){Q.deleteOverride(e),this.openSections.delete(e),delete this.newEntryKeys[e],delete this.newEntryTypes[e],delete this.entryKeyErrors[e],this.requestUpdate()}handleEntryKeyInput(e,t){if(this.newEntryKeys={...this.newEntryKeys,[e]:t},!t){this.entryKeyErrors={...this.entryKeyErrors,[e]:``};return}let n=t.split(`.`).find(e=>!/^[a-zA-Z_][a-zA-Z0-9_]*$/.test(e));if(n!==void 0){n===``?this.entryKeyErrors={...this.entryKeyErrors,[e]:`Invalid key: empty segment (consecutive dots or leading/trailing dot)`}:this.entryKeyErrors={...this.entryKeyErrors,[e]:`Invalid segment "${n}": must be a valid identifier`};return}let r=Q.checkOverridePathConflict(e,t);if(r){this.entryKeyErrors={...this.entryKeyErrors,[e]:r};return}this.entryKeyErrors={...this.entryKeyErrors,[e]:``}}handleEntryAddKeydown(e,t){e.key===`Enter`&&!this.entryKeyErrors[t]&&this.addEntryToOverride(t)}addEntryToOverride(e){let t=this.newEntryKeys[e]?.trim();if(!t||this.entryKeyErrors[e])return;let n=this.newEntryTypes[e]||`string`;Q.setOverridePath(e,t,this.getDefaultValue(n)),this.newEntryKeys={...this.newEntryKeys,[e]:``},this.entryKeyErrors={...this.entryKeyErrors,[e]:``}}updateEntry(e,t,n){Q.setOverridePath(e,t,n)}deleteEntry(e,t){Q.deleteOverridePath(e,t)}getValueAtPath(e,t){let n=this.storeState.manifest.overrides[e];if(!n)return;let r=t.split(`.`),i=n;for(let e of r){if(typeof i!=`object`||!i)return;i=i[e]}return i}updateArrayItem(e,t,n,r){let i=this.getValueAtPath(e,t);if(!Array.isArray(i))return;let a=[...i];a[n]=r,Q.setOverridePath(e,t,a)}addArrayItem(e,t){let n=this.getValueAtPath(e,t);Array.isArray(n)&&Q.setOverridePath(e,t,[...n,``])}removeArrayItem(e,t,n){let r=this.getValueAtPath(e,t);if(!Array.isArray(r))return;let i=r.filter((e,t)=>t!==n);Q.setOverridePath(e,t,i)}};$([F()],eh.prototype,`storeState`,void 0),$([F()],eh.prototype,`openSections`,void 0),$([F()],eh.prototype,`newOverrideKey`,void 0),$([F()],eh.prototype,`newEntryKeys`,void 0),$([F()],eh.prototype,`newEntryTypes`,void 0),$([F()],eh.prototype,`entryKeyErrors`,void 0),eh=$([wt(`ccm-overrides-editor`)],eh);var th=class extends Ge{constructor(...e){super(...e),this.newOrderEntry=``,this.draggedIndex=null}static{this.styles=v`
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
  `}connectedCallback(){super.connectedCallback(),this.unsubscribe=Q.subscribe(e=>{this.storeState=e})}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribe?.()}render(){let e=this.storeState?.manifest.hierarchy,t=e?.order??[],n=e?.merge??`first`;return A`
      <div class="content-wrapper">
      <!-- Merge Strategy - Compact inline -->
      <div class="merge-row">
        <span class="section-title">Merge Strategy</span>
        <sl-select
          size="small"
          value=${n}
          @sl-change=${e=>this.setMerge(e.target.value)}
        >
          <sl-option value="first">First Match</sl-option>
          <sl-option value="deep">Deep Merge</sl-option>
        </sl-select>
        <span class="merge-hint">
          ${n===`first`?`Stop at first matching override`:`Combine all matching overrides`}
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
              @click=${()=>this.addPreset(`os:{{ lookup('facts.host.info.platformFamily') }}`)}
            >
              + OS Family
            </sl-tag>
            <sl-tag
              class="preset-chip"
              size="small"
              @click=${()=>this.addPreset(`host:{{ lookup('facts.host.info.hostname') }}`)}
            >
              + Hostname
            </sl-tag>
            <sl-tag
              class="preset-chip"
              size="small"
              @click=${()=>this.addPreset(`env:{{ lookup('facts.env') }}`)}
            >
              + Environment
            </sl-tag>
            <sl-tag
              class="preset-chip"
              size="small"
              @click=${()=>this.addPreset(`role:{{ lookup('facts.role') }}`)}
            >
              + Role
            </sl-tag>
          </div>
        </div>

        ${t.length>0?A`
          <div class="order-list">
            ${t.map((e,t)=>this.renderOrderItem(e,t))}
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
            @sl-input=${e=>this.newOrderEntry=e.target.value}
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
        @dragover=${e=>this.handleDragOver(e)}
        @drop=${e=>this.handleDrop(e,t)}
      >
        <div
          class="drag-handle"
          draggable="true"
          @click=${e=>e.stopPropagation()}
          @dragstart=${e=>this.handleDragStart(e,t)}
          @dragend=${this.handleDragEnd}
        >
          <sl-icon name="grip-vertical"></sl-icon>
        </div>
        <div class="order-number">${t+1}</div>
        <div class="order-value">${e}</div>
        <div class="order-actions" @click=${e=>e.stopPropagation()}>
          <sl-icon-button
            name="trash"
            @click=${()=>this.removeOrder(t)}
          ></sl-icon-button>
        </div>
      </div>
    `}setMerge(e){Q.setHierarchyMerge(e)}handleAddOrder(){let e=this.newOrderEntry.trim();if(!e)return;let t=[...this.storeState.manifest.hierarchy.order??[],e];Q.setHierarchyOrder(t),this.newOrderEntry=``}handleAddKeydown(e){e.key===`Enter`&&this.handleAddOrder()}addPreset(e){let t=this.storeState.manifest.hierarchy.order??[];t.includes(e)||Q.setHierarchyOrder([...t,e])}removeOrder(e){let t=[...this.storeState.manifest.hierarchy.order];t.splice(e,1),Q.setHierarchyOrder(t)}async editOrder(e,t){let n=prompt(`Edit hierarchy entry:`,t);if(n!==null&&n.trim()){let t=[...this.storeState.manifest.hierarchy.order];t[e]=n.trim(),Q.setHierarchyOrder(t)}}handleDragStart(e,t){this.draggedIndex=t;let n=e.target,r=n.closest(`.order-item`);n.classList.add(`dragging`),r?.classList.add(`dragging`),e.dataTransfer.effectAllowed=`move`}handleDragEnd(e){let t=e.target,n=t.closest(`.order-item`);t.classList.remove(`dragging`),n?.classList.remove(`dragging`),this.draggedIndex=null,this.shadowRoot?.querySelectorAll(`.order-item`).forEach(e=>{e.classList.remove(`drag-over`)})}handleDragOver(e){e.preventDefault(),e.dataTransfer.dropEffect=`move`;let t=e.target.closest(`.order-item`);t&&(this.shadowRoot?.querySelectorAll(`.order-item`).forEach(e=>{e.classList.remove(`drag-over`)}),t.classList.add(`drag-over`))}handleDrop(e,t){if(e.preventDefault(),this.draggedIndex===null||this.draggedIndex===t)return;let n=[...this.storeState.manifest.hierarchy.order],[r]=n.splice(this.draggedIndex,1);n.splice(t,0,r),Q.setHierarchyOrder(n)}};$([F()],th.prototype,`storeState`,void 0),$([F()],th.prototype,`newOrderEntry`,void 0),$([F()],th.prototype,`draggedIndex`,void 0),th=$([wt(`ccm-hierarchy-editor`)],th);var nh=class extends Ge{constructor(...e){super(...e),this.resources=[],this.draggedIndex=null}static{this.styles=v`
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

    .resource-type.scaffold {
      background: var(--ccm-resource-scaffold-bg);
      color: var(--ccm-resource-scaffold-text);
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
  `}render(){return this.resources.length===0?A`
        <div class="empty-state">
          <sl-icon name="inbox"></sl-icon>
          <p>No resources defined</p>
          <p class="hint">Click "Add Resource" to get started</p>
        </div>
      `:A`
      <div class="resource-list">
        ${this.resources.map((e,t)=>this.renderResourceCard(e,t))}
      </div>
    `}renderResourceCard(e,t){let n=this.getResourceMeta(e);return A`
      <div
        class="resource-card"
        @click=${()=>this.emitEdit(e)}
        @dragover=${e=>this.handleDragOver(e)}
        @drop=${e=>this.handleDrop(e,t)}
      >
        <div
          class="drag-handle"
          draggable="true"
          @click=${e=>e.stopPropagation()}
          @dragstart=${e=>this.handleDragStart(e,t)}
          @dragend=${this.handleDragEnd}
        >
          <sl-icon name="grip-vertical"></sl-icon>
        </div>

        <span class="resource-type ${e.type}">${e.type}</span>

        <div class="resource-info">
          <div class="resource-name">
            ${e.alias?A`<sl-icon name="bookmark" class="alias-icon"></sl-icon>${e.alias}`:e.name}
            ${e.health_checks?.length?A`<sl-tooltip content="Has health checks"><sl-icon name="heart-pulse" class="monitoring-icon"></sl-icon></sl-tooltip>`:``}
          </div>
          ${n?A`<div class="resource-meta">${n}</div>`:``}
        </div>

        <div class="resource-actions" @click=${e=>e.stopPropagation()}>
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
    `}getResourceMeta(e){let t=[];switch(e.type){case`package`:e.properties.ensure&&t.push(`ensure: ${e.properties.ensure}`);break;case`service`:e.properties.ensure&&t.push(String(e.properties.ensure)),e.properties.enable&&t.push(`enabled`);break;case`file`:e.properties.ensure===`directory`&&t.push(`directory`),e.properties.mode&&t.push(String(e.properties.mode));break;case`exec`:e.properties.creates&&t.push(`creates: ${e.properties.creates}`);break;case`archive`:e.properties.extract_parent&&t.push(`→ ${e.properties.extract_parent}`);break;case`scaffold`:e.properties.source&&t.push(`← ${e.properties.source}`),e.properties.engine&&t.push(String(e.properties.engine)),e.properties.purge&&t.push(`purge`);break}e.require?.length&&t.push(`requires ${e.require.length}`);let n=e.properties.subscribe;return n?.length&&t.push(`subscribes ${n.length}`),t.join(` · `)}handleDragStart(e,t){this.draggedIndex=t;let n=e.target,r=n.closest(`.resource-card`);n.classList.add(`dragging`),r?.classList.add(`dragging`),e.dataTransfer.effectAllowed=`move`}handleDragEnd(e){let t=e.target,n=t.closest(`.resource-card`);t.classList.remove(`dragging`),n?.classList.remove(`dragging`),this.draggedIndex=null,this.shadowRoot?.querySelectorAll(`.resource-card`).forEach(e=>{e.classList.remove(`drag-over`)})}handleDragOver(e){e.preventDefault(),e.dataTransfer.dropEffect=`move`;let t=e.target.closest(`.resource-card`);t&&(this.shadowRoot?.querySelectorAll(`.resource-card`).forEach(e=>{e.classList.remove(`drag-over`)}),t.classList.add(`drag-over`))}handleDrop(e,t){e.preventDefault(),!(this.draggedIndex===null||this.draggedIndex===t)&&this.dispatchEvent(new CustomEvent(`reorder-resources`,{detail:{from:this.draggedIndex,to:t}}))}emitEdit(e){this.dispatchEvent(new CustomEvent(`edit-resource`,{detail:e}))}emitDuplicate(e){this.dispatchEvent(new CustomEvent(`duplicate-resource`,{detail:e}))}emitDelete(e){this.dispatchEvent(new CustomEvent(`delete-resource`,{detail:e}))}};$([P({type:Array})],nh.prototype,`resources`,void 0),$([F()],nh.prototype,`draggedIndex`,void 0),nh=$([wt(`ccm-resource-list`)],nh);var rh=new Map;function ih(e){rh.set(e.type,e)}ih({type:`file`,label:`File`,icon:`file-earmark`,nameLabel:`File Path`,namePlaceholder:`/etc/myapp/config.yaml`,nameHint:`Absolute path to the file or directory`,fields:[{name:`ensure`,type:`select`,label:`Ensure`,default:`present`,options:[{value:`present`,label:`Present (file)`},{value:`absent`,label:`Absent`},{value:`directory`,label:`Directory`}]},{name:`content`,type:`textarea`,label:`Content`,placeholder:`File contents...`,hint:`Inline content. Mutually exclusive with Source.`},{name:`source`,type:`text`,label:`Source`,placeholder:`/path/to/source/file`,hint:`Copy from this local file. Mutually exclusive with Content.`},{name:`owner`,type:`text`,label:`Owner`,placeholder:`root`},{name:`group`,type:`text`,label:`Group`,placeholder:`root`},{name:`mode`,type:`text`,label:`Mode`,placeholder:`0644`,hint:`Permissions in octal notation (e.g., 0644, 0755)`}]}),ih({type:`exec`,label:`Exec`,icon:`terminal`,nameLabel:`Name or Command`,namePlaceholder:`/usr/bin/setup-app --init`,nameHint:`Command to execute, or a descriptive name if using command field`,fields:[{name:`command`,type:`text`,label:`Command`,placeholder:`/usr/bin/actual-command --flags`,hint:`If specified, runs this instead of name. Useful for long commands.`},{name:`ensure`,type:`select`,label:`Ensure`,default:`present`,options:[{value:`present`,label:`Present (execute)`},{value:`absent`,label:`Absent`}]},{name:`creates`,type:`text`,label:`Creates`,placeholder:`/path/to/created/file`,hint:`Skip execution if this file exists`},{name:`onlyif`,type:`text`,label:`Only If`,placeholder:`test -f /tmp/app-package.tar.gz`,hint:`Guard command; exec runs only if this command exits 0`},{name:`unless`,type:`text`,label:`Unless`,placeholder:`/usr/sbin/iptables -C INPUT -p tcp --dport 8080 -j ACCEPT`,hint:`Guard command; exec runs only if this command exits non-zero`},{name:`cwd`,type:`text`,label:`Working Directory`,placeholder:`/opt/myapp`},{name:`path`,type:`text`,label:`Path`,placeholder:`/usr/local/bin:/usr/bin:/bin`,hint:`Search path for executables (colon-separated)`},{name:`timeout`,type:`text`,label:`Timeout`,placeholder:`30s`,hint:`Maximum execution time (e.g., 10s, 5m, 1h)`},{name:`environment`,type:`array`,label:`Environment Variables`,placeholder:`KEY=value`,hint:`Additional environment variables`},{name:`returns`,type:`text`,label:`Expected Returns`,placeholder:`0`,hint:`Comma-separated exit codes indicating success (default: 0)`},{name:`refreshonly`,type:`checkbox`,label:`Refresh only`,hint:`Only run when triggered by a subscribed resource`},{name:`logoutput`,type:`checkbox`,label:`Log output`,hint:`Log command output`},{name:`subscribe`,type:`array`,label:`Subscribe`,placeholder:`type#name`,hint:`Run when these resources change (with refreshonly)`,autocomplete:`resource-ref`},{name:`provider`,type:`select`,label:`Provider`,options:[{value:``,label:`(auto-detect / posix)`},{value:`posix`,label:`POSIX (direct execution)`},{value:`shell`,label:`Shell (/bin/sh -c)`}],hint:`Use shell for pipes, redirects, and builtins`}]}),ih({type:`archive`,label:`Archive`,icon:`file-zip`,nameLabel:`Archive Path`,namePlaceholder:`/opt/downloads/app-v1.2.3.tar.gz`,nameHint:`Where to save the archive. Extension must match URL.`,fields:[{name:`url`,type:`text`,label:`URL`,placeholder:`https://releases.example.com/app.tar.gz`,required:!0,hint:`HTTP/HTTPS URL to download from (.zip, .tar.gz, .tgz, .tar)`},{name:`ensure`,type:`select`,label:`Ensure`,default:`present`,options:[{value:`present`,label:`Present`},{value:`absent`,label:`Absent`}]},{name:`checksum`,type:`text`,label:`Checksum (SHA256)`,placeholder:`a1b2c3d4e5f6...`,hint:`Expected SHA256 hash of the downloaded file`},{name:`extract_parent`,type:`text`,label:`Extract To`,placeholder:`/opt/app`,hint:`Directory to extract archive contents into`},{name:`creates`,type:`text`,label:`Creates`,placeholder:`/opt/app/bin/app`,hint:`Skip download/extract if this file exists`},{name:`cleanup`,type:`checkbox`,label:`Cleanup after extraction`,hint:`Delete archive file after successful extraction (requires extract_parent and creates)`},{name:`owner`,type:`text`,label:`Owner`,placeholder:`root`},{name:`group`,type:`text`,label:`Group`,placeholder:`root`},{name:`username`,type:`text`,label:`Username`,hint:`For HTTP Basic Authentication`},{name:`password`,type:`text`,label:`Password`,hint:`For HTTP Basic Authentication`},{name:`headers`,type:`keyvalue`,label:`HTTP Headers`,keyPlaceholder:`Header-Name`,valuePlaceholder:`value`,hint:`Additional headers (e.g., Authorization)`}]}),ih({type:`package`,label:`Package`,icon:`box`,nameLabel:`Package Name`,namePlaceholder:`httpd`,nameHint:`Use real package names, not virtual names or aliases`,fields:[{name:`ensure`,type:`text`,label:`Ensure`,placeholder:`present, absent, latest, or version number`,default:`present`,hint:`Desired state: present, absent, latest, or specific version like "5.9"`},{name:`provider`,type:`select`,label:`Provider`,options:[{value:``,label:`(auto-detect)`},{value:`dnf`,label:`DNF (RHEL/Fedora)`},{value:`apt`,label:`APT (Debian/Ubuntu)`}],hint:`Force a specific package manager`}]}),ih({type:`service`,label:`Service`,icon:`gear`,nameLabel:`Service Name`,namePlaceholder:`httpd`,nameHint:`Use real service names, not aliases`,fields:[{name:`ensure`,type:`select`,label:`Ensure`,default:`running`,options:[{value:`running`,label:`Running`},{value:`stopped`,label:`Stopped`}]},{name:`enable`,type:`checkbox`,label:`Enable at boot`,hint:`Start this service automatically on system boot`},{name:`subscribe`,type:`array`,label:`Subscribe`,placeholder:`type#name (e.g., file#/etc/httpd/conf/httpd.conf)`,hint:`Restart service when these resources change`,autocomplete:`resource-ref`},{name:`provider`,type:`select`,label:`Provider`,options:[{value:``,label:`(auto-detect)`},{value:`systemd`,label:`systemd`}]}]}),ih({type:`scaffold`,label:`Scaffold`,icon:`folder2-open`,nameLabel:`Target Directory`,namePlaceholder:`/etc/myapp`,nameHint:`Absolute path to the target directory where templates will be rendered`,fields:[{name:`source`,type:`text`,label:`Source`,placeholder:`templates/myapp`,required:!0,hint:`Template source directory (relative to working directory or absolute)`},{name:`ensure`,type:`select`,label:`Ensure`,default:`present`,options:[{value:`present`,label:`Present`},{value:`absent`,label:`Absent`}]},{name:`engine`,type:`select`,label:`Template Engine`,default:`jet`,options:[{value:`jet`,label:`Jet ([[ ]])`},{value:`go`,label:`Go ({{ }})`}],hint:`Jet avoids conflicts with YAML/JSON curly braces. Go supports Sprig functions.`},{name:`purge`,type:`checkbox`,label:`Purge unmanaged files`,hint:`Remove files in target directory not present in source`},{name:`skip_empty`,type:`checkbox`,label:`Skip empty files`,hint:`Do not create files when rendered output is empty`},{name:`left_delimiter`,type:`text`,label:`Left Delimiter`,placeholder:`[[ or {{`,hint:`Custom left template delimiter (overrides engine default)`},{name:`right_delimiter`,type:`text`,label:`Right Delimiter`,placeholder:`]] or }}`,hint:`Custom right template delimiter (overrides engine default)`},{name:`post`,type:`keyvalue`,label:`Post-Processing`,keyPlaceholder:`*.sh`,valuePlaceholder:`chmod +x {}`,hint:`Glob pattern to command mapping. Use {} as placeholder for file path.`},{name:`provider`,type:`select`,label:`Provider`,options:[{value:``,label:`(auto-detect)`},{value:`choria`,label:`Choria`}]}]});var ah=class extends Ge{constructor(...e){super(...e),this.open=!1,this.resourceType=`package`,this.resource=null,this.formData={},this.showAdvanced=!1,this.showMonitoring=!1,this.healthChecks=[],this.showRegistration=!1,this.registrationEntries=[],this.requireSuggestions=[],this.showRequireSuggestions=!1,this.activeRequireIndex=-1,this.autocompleteSuggestions=[],this.showAutocompleteSuggestions=!1,this.activeAutocompleteField=``,this.activeAutocompleteIndex=-1}static{this.styles=v`
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
  `}get typeDef(){return rh.get(this.resourceType)}get isEditing(){return this.resource!==null}connectedCallback(){super.connectedCallback(),this.handleKeydown=this.handleKeydown.bind(this)}willUpdate(e){e.has(`open`)&&(this.open?(this.initFormData(),document.addEventListener(`keydown`,this.handleKeydown)):document.removeEventListener(`keydown`,this.handleKeydown))}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener(`keydown`,this.handleKeydown)}handleKeydown(e){if(e.key===`Escape`)e.preventDefault(),this.handleClose();else if(e.key===`Enter`){let t=e.target;if(t.tagName===`TEXTAREA`||t.tagName===`SL-TEXTAREA`||this.showRequireSuggestions)return;e.preventDefault(),this.handleSave()}}initFormData(){this.resource?(this.formData={name:this.resource.name,...this.resource.properties,alias:this.resource.alias,require:this.resource.require??[],control_if:this.resource.control?.if??``,control_unless:this.resource.control?.unless??``},this.healthChecks=this.resource.health_checks?.map(e=>({...e}))??[],(this.resource.alias||this.resource.require?.length||this.resource.control)&&(this.showAdvanced=!0),this.resource.health_checks?.length&&(this.showMonitoring=!0),this.registrationEntries=this.resource.register_when_stable?.map(e=>({...e}))??[],this.resource.register_when_stable?.length&&(this.showRegistration=!0)):(this.formData={name:``,require:[],control_if:``,control_unless:``},this.healthChecks=[],this.registrationEntries=[],this.showAdvanced=!1,this.showMonitoring=!1,this.showRegistration=!1,this.typeDef.fields.forEach(e=>{e.default!==void 0&&(this.formData[e.name]=e.default)}))}render(){let e=this.typeDef;return A`
      <sl-dialog
        label=${this.isEditing?`Edit ${e.label}`:`Add ${e.label}`}
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
                .value=${String(this.formData.name??``)}
                @sl-input=${e=>this.updateField(`name`,e.target.value)}
                required
              ></sl-input>
              ${e.nameHint?A`<div class="hint">${e.nameHint}</div>`:``}
            </div>

            ${e.fields.map(e=>this.renderField(e))}
          </div>

          <!-- Advanced Section -->
          <div class="form-section">
            <div
              class="advanced-toggle ${this.showAdvanced?`open`:``}"
              @click=${()=>this.showAdvanced=!this.showAdvanced}
            >
              <sl-icon name="chevron-right"></sl-icon>
              Advanced Options
            </div>

            <div class="advanced-content ${this.showAdvanced?`open`:``}">
              <div class="form-group">
                <sl-input
                  label="Alias"
                  placeholder="Alternative name for references"
                  .value=${String(this.formData.alias??``)}
                  @sl-input=${e=>this.updateField(`alias`,e.target.value)}
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
                    .value=${String(this.formData.control_if??``)}
                    @sl-input=${e=>this.updateField(`control_if`,e.target.value)}
                  ></sl-input>
                </div>
                <div class="form-group">
                  <sl-input
                    label="Unless Condition"
                    placeholder="Facts.virtual == 'docker'"
                    .value=${String(this.formData.control_unless??``)}
                    @sl-input=${e=>this.updateField(`control_unless`,e.target.value)}
                  ></sl-input>
                </div>
              </div>
              <div class="hint">Expressions that control whether this resource is managed</div>
            </div>
          </div>

          <!-- Monitoring Section -->
          <div class="form-section">
            <div
              class="advanced-toggle ${this.showMonitoring?`open`:``}"
              @click=${()=>this.showMonitoring=!this.showMonitoring}
            >
              <sl-icon name="chevron-right"></sl-icon>
              Monitoring
              ${this.healthChecks.length>0?A`<span style="color: var(--sl-color-neutral-400); font-weight: normal;">(${this.healthChecks.length})</span>`:``}
            </div>

            <div class="advanced-content ${this.showMonitoring?`open`:``}">
              ${this.renderHealthChecks()}
            </div>
          </div>

          <!-- Registration Section -->
          <div class="form-section">
            <div
              class="advanced-toggle ${this.showRegistration?`open`:``}"
              @click=${()=>this.showRegistration=!this.showRegistration}
            >
              <sl-icon name="chevron-right"></sl-icon>
              Registration
              ${this.registrationEntries.length>0?A`<span style="color: var(--sl-color-neutral-400); font-weight: normal;">(${this.registrationEntries.length})</span>`:``}
            </div>

            <div class="advanced-content ${this.showRegistration?`open`:``}">
              ${this.renderRegistrationEntries()}
            </div>
          </div>
        </div>

        <div class="form-footer" slot="footer">
          <sl-button @click=${this.handleClose}>Cancel</sl-button>
          <sl-button variant="primary" @click=${this.handleSave}>
            ${this.isEditing?`Save Changes`:`Add Resource`}
          </sl-button>
        </div>
      </sl-dialog>
    `}renderField(e){let t=this.formData[e.name];switch(e.type){case`select`:return A`
          <div class="form-group">
            <sl-select
              label=${e.label}
              .value=${String(t??e.default??``)}
              @sl-change=${t=>this.updateField(e.name,t.target.value)}
            >
              ${e.options?.map(e=>A`
                <sl-option value=${e.value}>${e.label}</sl-option>
              `)}
            </sl-select>
            ${e.hint?A`<div class="hint">${e.hint}</div>`:``}
          </div>
        `;case`textarea`:return A`
          <div class="form-group">
            <sl-textarea
              label=${e.label}
              placeholder=${e.placeholder??``}
              .value=${String(t??``)}
              @sl-input=${t=>this.updateField(e.name,t.target.value)}
              rows="4"
            ></sl-textarea>
            ${e.hint?A`<div class="hint">${e.hint}</div>`:``}
          </div>
        `;case`checkbox`:return A`
          <div class="form-group">
            <sl-checkbox
              ?checked=${t===!0}
              @sl-change=${t=>this.updateField(e.name,t.target.checked)}
            >
              ${e.label}
            </sl-checkbox>
            ${e.hint?A`<div class="hint">${e.hint}</div>`:``}
          </div>
        `;case`array`:return this.renderArrayField(e);case`keyvalue`:return this.renderKeyValueField(e);default:return A`
          <div class="form-group">
            <sl-input
              label=${e.label}
              placeholder=${e.placeholder??``}
              .value=${String(t??``)}
              @sl-input=${t=>this.updateField(e.name,t.target.value)}
            ></sl-input>
            ${e.hint?A`<div class="hint">${e.hint}</div>`:``}
          </div>
        `}}renderArrayField(e){let t=this.formData[e.name],n=Array.isArray(t)?t:[],r=e.autocomplete===`resource-ref`;return A`
      <div class="form-group">
        <div class="array-field">
          <label>${e.label}</label>
          ${n.map((t,n)=>A`
            <div class="array-item ${r?`autocomplete-wrapper`:``}">
              <sl-input
                placeholder=${e.placeholder??``}
                .value=${t}
                @sl-input=${t=>{this.updateArrayItem(e.name,n,t.target.value),r&&this.updateAutocompleteSuggestions(e.name,n,t.target.value)}}
                @focus=${r?()=>{this.activeAutocompleteField=e.name,this.activeAutocompleteIndex=n,this.updateAutocompleteSuggestions(e.name,n,t),this.showAutocompleteSuggestions=!0}:void 0}
                @blur=${r?()=>setTimeout(()=>this.showAutocompleteSuggestions=!1,200):void 0}
              ></sl-input>
              <sl-icon-button
                name="x"
                @click=${()=>this.removeArrayItem(e.name,n)}
              ></sl-icon-button>

              ${r&&this.showAutocompleteSuggestions&&this.activeAutocompleteField===e.name&&this.activeAutocompleteIndex===n&&this.autocompleteSuggestions.length>0?A`
                <div class="autocomplete-list">
                  ${this.autocompleteSuggestions.map(t=>A`
                    <div
                      class="autocomplete-item"
                      @mousedown=${r=>{r.preventDefault(),this.updateArrayItem(e.name,n,t),this.showAutocompleteSuggestions=!1}}
                    >
                      <code>${t.split(`#`)[0]}</code>
                      ${t.split(`#`)[1]}
                    </div>
                  `)}
                </div>
              `:``}
            </div>
          `)}
          <sl-button size="small" class="array-add" @click=${()=>this.addArrayItem(e.name)}>
            <sl-icon slot="prefix" name="plus"></sl-icon>
            Add
          </sl-button>
        </div>
        ${e.hint?A`<div class="hint">${e.hint}</div>`:``}
      </div>
    `}renderKeyValueField(e){let t=this.formData[e.name]??{},n=Object.entries(t);return A`
      <div class="form-group">
        <div class="array-field">
          <label>${e.label}</label>
          ${n.map(([t,r],i)=>A`
            <div class="kv-item">
              <sl-input
                placeholder=${e.keyPlaceholder??`Key`}
                .value=${t}
                @sl-input=${t=>this.updateKeyValueKey(e.name,i,n,t.target.value)}
              ></sl-input>
              <sl-input
                placeholder=${e.valuePlaceholder??`Value`}
                .value=${r}
                @sl-input=${n=>this.updateKeyValueValue(e.name,t,n.target.value)}
              ></sl-input>
              <sl-icon-button
                name="x"
                @click=${()=>this.removeKeyValueItem(e.name,t)}
              ></sl-icon-button>
            </div>
          `)}
          <sl-button size="small" class="array-add" @click=${()=>this.addKeyValueItem(e.name)}>
            <sl-icon slot="prefix" name="plus"></sl-icon>
            Add
          </sl-button>
        </div>
        ${e.hint?A`<div class="hint">${e.hint}</div>`:``}
      </div>
    `}renderRequireField(){let e=this.formData.require;return A`
      <div class="array-field">
        <label>Dependencies (require)</label>
        ${(Array.isArray(e)?e:[]).map((e,t)=>A`
          <div class="array-item autocomplete-wrapper">
            <sl-input
              placeholder="type#name (e.g., package#httpd)"
              .value=${e}
              @sl-input=${e=>{this.updateArrayItem(`require`,t,e.target.value),this.updateRequireSuggestions(e.target.value),this.activeRequireIndex=t}}
              @focus=${()=>{this.activeRequireIndex=t,this.updateRequireSuggestions(e),this.showRequireSuggestions=!0}}
              @blur=${()=>setTimeout(()=>this.showRequireSuggestions=!1,200)}
            ></sl-input>
            <sl-icon-button
              name="x"
              @click=${()=>this.removeArrayItem(`require`,t)}
            ></sl-icon-button>

            ${this.showRequireSuggestions&&this.activeRequireIndex===t&&this.requireSuggestions.length>0?A`
              <div class="autocomplete-list">
                ${this.requireSuggestions.map(e=>A`
                  <div
                    class="autocomplete-item"
                    @mousedown=${n=>{n.preventDefault(),this.updateArrayItem(`require`,t,e),this.showRequireSuggestions=!1}}
                  >
                    <code>${e.split(`#`)[0]}</code>
                    ${e.split(`#`)[1]}
                  </div>
                `)}
              </div>
            `:``}
          </div>
        `)}
        <sl-button size="small" class="array-add" @click=${()=>this.addArrayItem(`require`)}>
          <sl-icon slot="prefix" name="plus"></sl-icon>
          Add Dependency
        </sl-button>
      </div>
      <div class="hint">Resources that must be applied before this one</div>
    `}renderHealthChecks(){return A`
      ${this.healthChecks.map((e,t)=>A`
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
                .value=${e.command??``}
                @sl-input=${e=>this.updateHealthCheck(t,`command`,e.target.value)}
              ></sl-input>
            </div>
            <div class="health-check-row">
              <sl-input
                label="Name"
                placeholder="Optional name for this check"
                .value=${e.name??``}
                @sl-input=${e=>this.updateHealthCheck(t,`name`,e.target.value)}
              ></sl-input>
              <sl-input
                label="Timeout"
                placeholder="10s"
                .value=${e.timeout??``}
                @sl-input=${e=>this.updateHealthCheck(t,`timeout`,e.target.value)}
              ></sl-input>
            </div>
            <div class="health-check-row">
              <sl-input
                label="Tries"
                type="number"
                min="1"
                placeholder="1"
                .value=${e.tries?.toString()??``}
                @sl-input=${e=>this.updateHealthCheck(t,`tries`,e.target.value)}
              ></sl-input>
              <sl-input
                label="Try Sleep"
                placeholder="5s"
                .value=${e.try_sleep??``}
                @sl-input=${e=>this.updateHealthCheck(t,`try_sleep`,e.target.value)}
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
    `}addHealthCheck(){this.healthChecks=[...this.healthChecks,{command:``}]}removeHealthCheck(e){this.healthChecks=this.healthChecks.filter((t,n)=>n!==e)}updateHealthCheck(e,t,n){let r=[...this.healthChecks];if(t===`tries`){let i=parseInt(n,10);r[e]={...r[e],[t]:isNaN(i)?void 0:i}}else r[e]={...r[e],[t]:n};this.healthChecks=r}renderRegistrationEntries(){return A`
      ${this.registrationEntries.map((e,t)=>A`
        <div class="health-check-card">
          <div class="health-check-header">
            <span class="health-check-title">Registration Entry ${t+1}</span>
            <sl-icon-button
              name="trash"
              @click=${()=>this.removeRegistrationEntry(t)}
            ></sl-icon-button>
          </div>
          <div class="health-check-fields">
            <div class="health-check-row">
              <sl-input
                label="Cluster *"
                placeholder="cluster name"
                .value=${e.cluster??``}
                @sl-input=${e=>this.updateRegistrationEntry(t,`cluster`,e.target.value)}
              ></sl-input>
              <sl-input
                label="Service *"
                placeholder="service name"
                .value=${e.service??``}
                @sl-input=${e=>this.updateRegistrationEntry(t,`service`,e.target.value)}
              ></sl-input>
            </div>
            <div class="health-check-row">
              <sl-input
                label="Protocol *"
                placeholder="tcp"
                .value=${e.protocol??``}
                @sl-input=${e=>this.updateRegistrationEntry(t,`protocol`,e.target.value)}
              ></sl-input>
              <sl-input
                label="Address *"
                placeholder="192.168.1.1"
                .value=${e.address??``}
                @sl-input=${e=>this.updateRegistrationEntry(t,`address`,e.target.value)}
              ></sl-input>
            </div>
            <div class="health-check-row">
              <sl-input
                label="Port *"
                placeholder="8080 or {{ Data.port }}"
                .value=${e.port?.toString()??``}
                @sl-input=${e=>this.updateRegistrationEntry(t,`port`,e.target.value)}
              ></sl-input>
              <sl-input
                label="Priority *"
                type="number"
                min="1"
                max="255"
                placeholder="1"
                .value=${e.priority?.toString()??``}
                @sl-input=${e=>this.updateRegistrationEntry(t,`priority`,e.target.value)}
              ></sl-input>
            </div>
            <div class="health-check-row single">
              <div class="array-field">
                <label style="font-size: 14px; font-weight: 500; color: var(--sl-color-neutral-700);">Annotations</label>
                ${Object.entries(e.annotations??{}).map(([n,r],i)=>A`
                  <div class="kv-item">
                    <sl-input
                      placeholder="Key"
                      .value=${n}
                      @sl-input=${n=>this.updateRegistrationAnnotationKey(t,i,Object.entries(e.annotations??{}),n.target.value)}
                    ></sl-input>
                    <sl-input
                      placeholder="Value"
                      .value=${r}
                      @sl-input=${e=>this.updateRegistrationAnnotationValue(t,n,e.target.value)}
                    ></sl-input>
                    <sl-icon-button
                      name="x"
                      @click=${()=>this.removeRegistrationAnnotation(t,n)}
                    ></sl-icon-button>
                  </div>
                `)}
                <sl-button size="small" class="array-add" @click=${()=>this.addRegistrationAnnotation(t)}>
                  <sl-icon slot="prefix" name="plus"></sl-icon>
                  Add
                </sl-button>
              </div>
            </div>
          </div>
        </div>
      `)}
      <sl-button size="small" @click=${this.addRegistrationEntry}>
        <sl-icon slot="prefix" name="plus"></sl-icon>
        Add Registration
      </sl-button>
      <div class="hint" style="margin-top: 8px;">NATS service discovery entries registered when the resource reaches a stable state</div>
    `}addRegistrationEntry(){this.registrationEntries=[...this.registrationEntries,{cluster:``,service:``,protocol:`tcp`,address:``,port:``,priority:1}]}removeRegistrationEntry(e){this.registrationEntries=this.registrationEntries.filter((t,n)=>n!==e)}updateRegistrationEntry(e,t,n){let r=[...this.registrationEntries];if(t===`priority`){let i=parseInt(n,10);r[e]={...r[e],[t]:isNaN(i)?1:i}}else r[e]={...r[e],[t]:n};this.registrationEntries=r}addRegistrationAnnotation(e){let t=[...this.registrationEntries];t[e]={...t[e],annotations:{...t[e].annotations??{},"":``}},this.registrationEntries=t}updateRegistrationAnnotationKey(e,t,n,r){let i=[...this.registrationEntries],a={};n.forEach(([e,n],i)=>{a[i===t?r:e]=n}),i[e]={...i[e],annotations:a},this.registrationEntries=i}updateRegistrationAnnotationValue(e,t,n){let r=[...this.registrationEntries];r[e]={...r[e],annotations:{...r[e].annotations??{},[t]:n}},this.registrationEntries=r}removeRegistrationAnnotation(e,t){let n=[...this.registrationEntries],r={...n[e].annotations??{}};delete r[t],n[e]={...n[e],annotations:r},this.registrationEntries=n}updateRequireSuggestions(e){this.requireSuggestions=Q.getResourceReferences().filter(e=>e.name!==this.formData.name).flatMap(e=>{let t=[`${e.type}#${e.name}`];return e.alias&&t.push(`${e.type}#${e.alias}`),t}).filter(t=>t.toLowerCase().includes(e.toLowerCase())).slice(0,5)}updateAutocompleteSuggestions(e,t,n){this.activeAutocompleteField=e,this.activeAutocompleteIndex=t,this.autocompleteSuggestions=Q.getResourceReferences().filter(e=>e.name!==this.formData.name).flatMap(e=>{let t=[`${e.type}#${e.name}`];return e.alias&&t.push(`${e.type}#${e.alias}`),t}).filter(e=>e.toLowerCase().includes(n.toLowerCase())).slice(0,5)}updateField(e,t){this.formData={...this.formData,[e]:t}}updateArrayItem(e,t,n){let r=[...this.formData[e]||[]];r[t]=n,this.formData={...this.formData,[e]:r}}addArrayItem(e){let t=[...this.formData[e]||[],``];this.formData={...this.formData,[e]:t}}removeArrayItem(e,t){let n=(this.formData[e]||[]).filter((e,n)=>n!==t);this.formData={...this.formData,[e]:n}}updateKeyValueKey(e,t,n,r){let i={};n.forEach(([e,n],a)=>{i[a===t?r:e]=n}),this.formData={...this.formData,[e]:i}}updateKeyValueValue(e,t,n){let r={...this.formData[e]||{},[t]:n};this.formData={...this.formData,[e]:r}}addKeyValueItem(e){let t={...this.formData[e]||{},"":``};this.formData={...this.formData,[e]:t}}removeKeyValueItem(e,t){let n={...this.formData[e]||{}};delete n[t],this.formData={...this.formData,[e]:n}}handleClose(){this.dispatchEvent(new CustomEvent(`close`))}handleSave(){if(!this.formData.name)return;let{name:e,alias:t,require:n,control_if:r,control_unless:i,...a}=this.formData,o={};Object.entries(a).forEach(([e,t])=>{if(t!==``&&t!=null){if(Array.isArray(t)&&t.length===0||Array.isArray(t)&&t.every(e=>e===``)||typeof t==`object`&&!Array.isArray(t)&&Object.keys(t).length===0)return;if(Array.isArray(t)){let n=t.filter(e=>e!==``);n.length>0&&(o[e]=n);return}if(typeof t==`object`&&!Array.isArray(t)){let n={};Object.entries(t).forEach(([e,t])=>{e!==``&&t!==``&&(n[e]=t)}),Object.keys(n).length>0&&(o[e]=n);return}o[e]=t}});let s=(n||[]).filter(e=>e.trim()),c=r||i?{...r?{if:r}:{},...i?{unless:i}:{}}:void 0,l=t?.trim()||void 0,u=this.healthChecks.filter(e=>e.command?.trim()).map(e=>{let t={command:e.command.trim()};return e.name?.trim()&&(t.name=e.name.trim()),e.timeout?.trim()&&(t.timeout=e.timeout.trim()),e.tries!==void 0&&e.tries>=1&&(t.tries=e.tries),e.try_sleep?.trim()&&(t.try_sleep=e.try_sleep.trim()),e.format&&(t.format=e.format),t}),d=this.registrationEntries.filter(e=>e.cluster?.trim()&&e.service?.trim()).map(e=>{let t={cluster:e.cluster.trim(),service:e.service.trim(),protocol:e.protocol?.trim()||`tcp`,address:e.address?.trim()||``,port:typeof e.port==`string`&&/^\d+$/.test(e.port.trim())?parseInt(e.port.trim(),10):e.port,priority:e.priority??1};if(e.annotations){let n={};Object.entries(e.annotations).forEach(([e,t])=>{e.trim()!==``&&t.trim()!==``&&(n[e.trim()]=t.trim())}),Object.keys(n).length>0&&(t.annotations=n)}return t}),f={type:this.resourceType,name:e,properties:o,...l?{alias:l}:{},...s.length?{require:s}:{},...c?{control:c}:{},...u.length?{health_checks:u}:{},...d.length?{register_when_stable:d}:{}};this.dispatchEvent(new CustomEvent(`save`,{detail:f}))}};$([P({type:Boolean})],ah.prototype,`open`,void 0),$([P({type:String})],ah.prototype,`resourceType`,void 0),$([P({type:Object})],ah.prototype,`resource`,void 0),$([F()],ah.prototype,`formData`,void 0),$([F()],ah.prototype,`showAdvanced`,void 0),$([F()],ah.prototype,`showMonitoring`,void 0),$([F()],ah.prototype,`healthChecks`,void 0),$([F()],ah.prototype,`showRegistration`,void 0),$([F()],ah.prototype,`registrationEntries`,void 0),$([F()],ah.prototype,`requireSuggestions`,void 0),$([F()],ah.prototype,`showRequireSuggestions`,void 0),$([F()],ah.prototype,`activeRequireIndex`,void 0),$([F()],ah.prototype,`autocompleteSuggestions`,void 0),$([F()],ah.prototype,`showAutocompleteSuggestions`,void 0),$([F()],ah.prototype,`activeAutocompleteField`,void 0),$([F()],ah.prototype,`activeAutocompleteIndex`,void 0),ah=$([wt(`ccm-resource-form`)],ah);var oh=class extends Ge{constructor(...e){super(...e),this.showForm=!1,this.editingResource=null,this.newResourceType=`package`}static{this.styles=v`
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
  `}connectedCallback(){super.connectedCallback(),this.unsubscribe=Q.subscribe(e=>{this.storeState=e})}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribe?.()}render(){let e=this.storeState?.manifest.ccm,t=e?.resources??[];return A`
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
            <sl-menu-item value="scaffold">
              <sl-icon slot="prefix" name="folder2-open"></sl-icon>
              Scaffold
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
          .value=${e?.pre_message??``}
          @sl-change=${e=>Q.setCcmPreMessage(e.target.value||void 0)}
        ></sl-textarea>
        <sl-textarea
          label="Post-message"
          placeholder="Message shown after applying resources"
          size="small"
          resize="vertical"
          rows="1"
          .value=${e?.post_message??``}
          @sl-change=${e=>Q.setCcmPostMessage(e.target.value||void 0)}
        ></sl-textarea>
        <sl-checkbox
          ?checked=${e?.fail_on_error??!1}
          @sl-change=${e=>Q.setCcmFailOnError(e.target.checked)}
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
    `}handleAddResource(e){this.newResourceType=e.detail.item.value,this.editingResource=null,this.showForm=!0}handleEditResource(e){this.editingResource=e.detail,this.newResourceType=e.detail.type,this.showForm=!0}handleDuplicateResource(e){Q.duplicateResource(e.detail)}handleDeleteResource(e){Q.deleteResource(e.detail)}handleReorderResources(e){Q.reorderResources(e.detail.from,e.detail.to)}handleFormClose(){this.showForm=!1,this.editingResource=null}handleFormSave(e){this.editingResource?Q.updateResource(this.editingResource.id,e.detail):Q.addResource(e.detail),this.showForm=!1,this.editingResource=null}};$([F()],oh.prototype,`storeState`,void 0),$([F()],oh.prototype,`showForm`,void 0),$([F()],oh.prototype,`editingResource`,void 0),$([F()],oh.prototype,`newResourceType`,void 0),oh=$([wt(`ccm-resources-editor`)],oh);var sh=class extends Ge{constructor(...e){super(...e),this.open=!1,this.lastSaved=null,this.resourceCount=0,this.templateCount=0}static{this.styles=v`
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
  `}connectedCallback(){super.connectedCallback(),this.handleKeydown=this.handleKeydown.bind(this)}updated(e){e.has(`open`)&&(this.open?document.addEventListener(`keydown`,this.handleKeydown):document.removeEventListener(`keydown`,this.handleKeydown))}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener(`keydown`,this.handleKeydown)}handleKeydown(e){e.key===`Enter`&&(e.preventDefault(),this.handleRecover())}render(){return A`
      <sl-dialog
        label="Recover Unsaved Work?"
        ?open=${this.open}
        @sl-request-close=${this.handleClose}
      >
        <div class="recovery-info">
          <p>You have unsaved work from a previous session.</p>
          ${this.resourceCount>0||this.templateCount>0?A`
            <p>Found ${this.formatSummary()}</p>
          `:``}
          ${this.lastSaved?A`
            <p class="timestamp">
              Last saved: ${this.lastSaved.toLocaleString()}
            </p>
          `:``}
        </div>

        <sl-button slot="footer" @click=${this.handleDiscard}>
          Start Fresh
        </sl-button>
        <sl-button slot="footer" variant="primary" @click=${this.handleRecover}>
          Recover Work
        </sl-button>
      </sl-dialog>
    `}handleClose(){this.handleDiscard()}handleRecover(){this.dispatchEvent(new CustomEvent(`recover`))}handleDiscard(){this.dispatchEvent(new CustomEvent(`discard`))}formatSummary(){let e=[];return this.resourceCount>0&&e.push(`${this.resourceCount} resource${this.resourceCount===1?``:`s`}`),this.templateCount>0&&e.push(`${this.templateCount} template${this.templateCount===1?``:`s`}`),e.join(` and `)}};$([P({type:Boolean})],sh.prototype,`open`,void 0),$([P({type:Object})],sh.prototype,`lastSaved`,void 0),$([P({type:Number})],sh.prototype,`resourceCount`,void 0),$([P({type:Number})],sh.prototype,`templateCount`,void 0),sh=$([wt(`ccm-recovery-dialog`)],sh);var ch=class extends Ge{constructor(...e){super(...e),this.templates=[],this.activeTemplateId=null,this.renamingId=null,this.renameValue=``,this.pendingRenameName=null}static{this.styles=v`
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
  `}updated(e){if(e.has(`templates`)&&this.pendingRenameName){let e=this.templates.find(e=>e.name===this.pendingRenameName);e&&(this.pendingRenameName=null,this.startRename(e))}}render(){return A`
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
    `}renderEmptyState(){return A`
      <div class="empty-state">
        <sl-icon name="file-earmark-code"></sl-icon>
        <p>No templates</p>
        <p class="hint">Click + to add a Jet template</p>
      </div>
    `}renderTemplateList(){return A`
      <div class="template-list">
        ${this.templates.map(e=>this.renderTemplateItem(e))}
      </div>
    `}renderTemplateItem(e){let t=e.id===this.activeTemplateId,n=e.id===this.renamingId;return A`
      <div
        class="template-item ${t?`active`:``}"
        @click=${()=>this.handleSelect(e.id)}
      >
        <sl-icon name="file-earmark-code" class="template-icon"></sl-icon>

        ${n?A`
              <sl-input
                class="rename-input"
                size="small"
                value=${this.renameValue}
                @sl-input=${e=>this.renameValue=e.target.value}
                @keydown=${this.handleRenameKeydown}
                @sl-blur=${this.handleRenameBlur}
                @click=${e=>e.stopPropagation()}
              ></sl-input>
            `:A`<span class="template-name">${e.name}</span>`}

        <div class="template-actions" @click=${e=>e.stopPropagation()}>
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
    `}handleAddClick(){let e=this.generateUniqueName();this.pendingRenameName=e,this.dispatchEvent(new CustomEvent(`template-add`,{detail:e,bubbles:!0,composed:!0}))}generateUniqueName(){let e=new Set(this.templates.map(e=>e.name)),t=1,n=`template${t}.conf.jet`;for(;e.has(n);)t++,n=`template${t}.conf.jet`;return n}handleSelect(e){this.renamingId||this.dispatchEvent(new CustomEvent(`template-select`,{detail:e,bubbles:!0,composed:!0}))}handleDownload(e){this.dispatchEvent(new CustomEvent(`template-download`,{detail:e,bubbles:!0,composed:!0}))}handleDelete(e){this.dispatchEvent(new CustomEvent(`template-delete`,{detail:e,bubbles:!0,composed:!0}))}startRename(e){this.renamingId=e.id,this.renameValue=e.name,this.updateComplete.then(()=>{(this.shadowRoot?.querySelector(`.rename-input`))?.focus()})}handleRenameKeydown(e){e.key===`Enter`?this.commitRename():e.key===`Escape`&&this.cancelRename()}handleRenameBlur(){setTimeout(()=>{this.renamingId&&this.commitRename()},100)}commitRename(){if(!this.renamingId||!this.renameValue.trim()){this.cancelRename();return}this.dispatchEvent(new CustomEvent(`template-rename`,{detail:{id:this.renamingId,name:this.renameValue.trim()},bubbles:!0,composed:!0})),this.renamingId=null,this.renameValue=``}cancelRename(){this.renamingId=null,this.renameValue=``}};$([P({type:Array})],ch.prototype,`templates`,void 0),$([P({type:String})],ch.prototype,`activeTemplateId`,void 0),$([F()],ch.prototype,`renamingId`,void 0),$([F()],ch.prototype,`renameValue`,void 0),$([F()],ch.prototype,`pendingRenameName`,void 0),ch=$([wt(`ccm-template-list`)],ch);var lh=[{path:`host.info.hostname`,detail:`System hostname`},{path:`host.info.os`,detail:`Operating system (linux, windows, etc.)`},{path:`host.info.platform`,detail:`Platform name (almalinux, ubuntu, etc.)`},{path:`host.info.platformFamily`,detail:`Platform family (rhel, debian, etc.)`},{path:`host.info.platformVersion`,detail:`Platform version`},{path:`host.info.kernelVersion`,detail:`Kernel version string`},{path:`host.info.kernelArch`,detail:`Kernel architecture (x86_64, arm64, etc.)`},{path:`host.info.virtualizationSystem`,detail:`Virtualization platform (docker, kvm, etc.)`},{path:`host.info.virtualizationRole`,detail:`Virtualization role (guest, host)`}],uh=[{name:`lower`,detail:`Convert to lowercase`},{name:`upper`,detail:`Convert to uppercase`},{name:`len`,detail:`Length of string/array/map`},{name:`isset`,detail:`Check if values are non-nil`},{name:`split`,detail:`Split string by separator`},{name:`replace`,detail:`Replace substring`},{name:`hasPrefix`,detail:`Check string prefix`},{name:`hasSuffix`,detail:`Check string suffix`},{name:`repeat`,detail:`Repeat string N times`},{name:`trimSpace`,detail:`Remove leading/trailing whitespace`},{name:`html`,detail:`Escape HTML characters`},{name:`url`,detail:`URL encode string`},{name:`json`,detail:`JSON encode value`},{name:`raw`,detail:`Output without escaping`},{name:`ints`,detail:`Create integer range`},{name:`dump`,detail:`Debug output`},{name:`lookup`,detail:`Lookup data by path`}],dh=[{name:`HOME`,detail:`User home directory`},{name:`USER`,detail:`Current username`},{name:`PATH`,detail:`Executable search path`},{name:`SHELL`,detail:`User default shell`},{name:`LANG`,detail:`System locale`},{name:`PWD`,detail:`Current working directory`},{name:`HOSTNAME`,detail:`System hostname`},{name:`TERM`,detail:`Terminal type`}],fh=[{name:`Data`,detail:`Access data variables (Data.key)`},{name:`Facts`,detail:`Access system facts (Facts.host.info.os)`},{name:`Environ`,detail:`Access environment variables (Environ.HOME)`}];function ph(e,t){let n=e.substring(0,t),r=n.lastIndexOf(`[[`);if(r===-1)return{type:`none`,prefix:``};let i=n.substring(r+2);if(i.includes(`]]`))return{type:`none`,prefix:``};let a=i.trimStart(),o=a.match(/Data\.([\w.]*)$/);if(o)return{type:`data`,prefix:o[1]};let s=a.match(/lookup\s*\(\s*["']data\.([^"']*)$/);if(s)return{type:`data-lookup`,prefix:s[1]};let c=a.match(/Facts\.([\w.]*)$/);if(c)return{type:`facts`,prefix:c[1]};let l=a.match(/lookup\s*\(\s*["']facts\.([^"']*)$/);if(l)return{type:`facts-lookup`,prefix:l[1]};let u=a.match(/Environ\.(\w*)$/);if(u)return{type:`environ`,prefix:u[1]};let d=a.match(/(?:^|[\s(|])(\w*)$/);return d?{type:`function`,prefix:d[1]}:{type:`none`,prefix:``}}function mh(e,t=``){let n=[];for(let[r,i]of Object.entries(e)){let e=t?`${t}.${r}`:r;n.push(e),i&&typeof i==`object`&&!Array.isArray(i)&&n.push(...mh(i,e))}return n}function hh(e){let t=new Set;mh(e.data).forEach(e=>t.add(e));for(let n of Object.values(e.overrides))mh(n).forEach(e=>t.add(e));return Array.from(t).sort()}function gh(e,t,n){let r=ph(e,t);switch(r.type){case`data`:return _h(n,r.prefix,`Data.`);case`data-lookup`:return _h(n,r.prefix,``);case`facts`:return vh(r.prefix,`Facts.`);case`facts-lookup`:return vh(r.prefix,``);case`environ`:return yh(r.prefix);case`function`:return bh(r.prefix);default:return[]}}function _h(e,t,n){let r=hh(e),i=t.toLowerCase();return r.filter(e=>e.toLowerCase().startsWith(i)).map(e=>({label:e,detail:`Data value`,insertText:e.substring(t.length),kind:`data`}))}function vh(e,t){let n=e.toLowerCase();return lh.filter(e=>e.path.toLowerCase().startsWith(n)).map(t=>({label:t.path,detail:t.detail,insertText:t.path.substring(e.length),kind:`fact`}))}function yh(e){let t=e.toLowerCase();return dh.filter(e=>e.name.toLowerCase().startsWith(t)).map(t=>({label:t.name,detail:t.detail,insertText:t.name.substring(e.length),kind:`environ`}))}function bh(e){let t=e.toLowerCase(),n=fh.filter(e=>e.name.toLowerCase().startsWith(t)).map(t=>({label:t.name,detail:t.detail,insertText:t.name.substring(e.length),kind:`function`})),r=uh.filter(e=>e.name.toLowerCase().startsWith(t)).map(t=>({label:t.name,detail:t.detail,insertText:t.name.substring(e.length),kind:`function`}));return[...n,...r]}var xh=class extends Ge{constructor(...e){super(...e),this.content=``,this.placeholder=`Enter template content...`,this.manifest=null,this.internalContent=``,this.completions=[],this.selectedIndex=0,this.showAutocomplete=!1,this.popupPosition={top:0,left:0},this.boundHandleClickOutside=this.handleClickOutside.bind(this)}static{this.styles=v`
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
  `}connectedCallback(){super.connectedCallback(),this.internalContent=this.content,document.addEventListener(`click`,this.boundHandleClickOutside)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener(`click`,this.boundHandleClickOutside)}willUpdate(e){e.has(`content`)&&this.content!==this.internalContent&&(this.internalContent=this.content)}render(){return A`
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
        ${this.showAutocomplete?this.renderAutocomplete():``}
      </div>
    `}renderAutocomplete(){return A`
      <div
        class="autocomplete-popup"
        style="top: ${this.popupPosition.top}px; left: ${this.popupPosition.left}px;"
        @click=${e=>e.stopPropagation()}
      >
        ${this.completions.length===0?A`<div class="autocomplete-empty">No matches</div>`:this.completions.map((e,t)=>A`
              <div
                class="autocomplete-item ${t===this.selectedIndex?`selected`:``}"
                @click=${()=>this.selectCompletion(e)}
                @mouseenter=${()=>this.selectedIndex=t}
              >
                <span class="autocomplete-icon ${e.kind}">${this.getKindIcon(e.kind)}</span>
                <span class="autocomplete-label">${e.label}</span>
                ${e.detail?A`<span class="autocomplete-detail">${e.detail}</span>`:``}
              </div>
            `)}
      </div>
    `}getKindIcon(e){switch(e){case`data`:return`D`;case`fact`:return`F`;case`function`:return`fn`;case`environ`:return`E`;default:return`?`}}handleInput(e){let t=e.target;this.internalContent=t.value,this.updateAutocomplete(t),this.debounceTimer&&clearTimeout(this.debounceTimer),this.debounceTimer=setTimeout(()=>{this.dispatchEvent(new CustomEvent(`content-change`,{detail:this.internalContent,bubbles:!0,composed:!0}))},300)}updateAutocomplete(e){if(!this.manifest){this.hideAutocomplete();return}let t=e.selectionStart,n=gh(this.internalContent,t,this.manifest);n.length>0?(this.completions=n,this.selectedIndex=0,this.showAutocomplete=!0,this.updatePopupPosition(e)):this.hideAutocomplete()}updatePopupPosition(e){let t=this.internalContent.substring(0,e.selectionStart).split(`
`),n=t.length,r=t[t.length-1].length,i=n*20.8+16-e.scrollTop,a=r*7.8+16-e.scrollLeft,o=this.getBoundingClientRect(),s=o.height-220,c=o.width-220;this.popupPosition={top:Math.min(Math.max(i,0),s),left:Math.min(Math.max(a,0),c)}}hideAutocomplete(){this.showAutocomplete=!1,this.completions=[],this.selectedIndex=0}selectCompletion(e){if(!this.textarea)return;let t=this.textarea.selectionStart,n=this.internalContent.substring(0,t),r=this.internalContent.substring(t);this.internalContent=n+e.insertText+r,this.hideAutocomplete(),this.updateComplete.then(()=>{let n=t+e.insertText.length;this.textarea.value=this.internalContent,this.textarea.selectionStart=this.textarea.selectionEnd=n,this.textarea.focus(),this.dispatchEvent(new CustomEvent(`content-change`,{detail:this.internalContent,bubbles:!0,composed:!0}))})}handleClickOutside(e){e.composedPath().includes(this)||this.hideAutocomplete()}handleKeydown(e){if(this.showAutocomplete&&this.completions.length>0)switch(e.key){case`ArrowDown`:e.preventDefault(),this.selectedIndex=(this.selectedIndex+1)%this.completions.length,this.scrollSelectedIntoView();return;case`ArrowUp`:e.preventDefault(),this.selectedIndex=(this.selectedIndex-1+this.completions.length)%this.completions.length,this.scrollSelectedIntoView();return;case`Enter`:case`Tab`:e.preventDefault(),this.selectCompletion(this.completions[this.selectedIndex]);return;case`Escape`:e.preventDefault(),this.hideAutocomplete();return}if(e.key===`Tab`){e.preventDefault();let t=e.target,n=t.selectionStart,r=t.selectionEnd,i=this.internalContent.substring(0,n),a=this.internalContent.substring(r);this.internalContent=i+`  `+a,this.updateComplete.then(()=>{t.value=this.internalContent,t.selectionStart=t.selectionEnd=n+2}),this.debounceTimer&&clearTimeout(this.debounceTimer),this.debounceTimer=setTimeout(()=>{this.dispatchEvent(new CustomEvent(`content-change`,{detail:this.internalContent,bubbles:!0,composed:!0}))},300)}e.key===`Escape`&&this.showAutocomplete&&(e.preventDefault(),this.hideAutocomplete())}scrollSelectedIntoView(){this.updateComplete.then(()=>{let e=this.shadowRoot?.querySelector(`.autocomplete-popup`),t=e?.querySelector(`.autocomplete-item.selected`);t&&e&&t.scrollIntoView({block:`nearest`})})}syncScroll(){this.textarea&&this.highlightDiv&&(this.highlightDiv.scrollTop=this.textarea.scrollTop,this.highlightDiv.scrollLeft=this.textarea.scrollLeft)}highlightContent(){if(!this.internalContent)return``;let e=this.internalContent.replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`);return e=e.replace(/\{\*[\s\S]*?\*\}/g,e=>`<span class="jet-comment">${e}</span>`),e=e.replace(/\[\[([\s\S]*?)\]\]/g,(e,t)=>`<span class="jet-delimiter">[[</span>${this.highlightJetExpression(t)}<span class="jet-delimiter">]]</span>`),Ki(e)}highlightJetExpression(e){let t=[`if`,`else`,`end`,`range`,`block`,`yield`,`include`,`extends`,`return`,`try`,`catch`,`import`,`set`,`with`],n=RegExp(`\\b(${t.join(`|`)})\\b`,`g`),r=e;return r=r.replace(/"([^"\\]|\\.)*"/g,e=>`<span class="jet-string">${e}</span>`),r=r.replace(/'([^'\\]|\\.)*'/g,e=>`<span class="jet-string">${e}</span>`),r=r.replace(/\b([a-zA-Z_][a-zA-Z0-9_]*)\s*\(/g,(e,n)=>t.includes(n)?e:`<span class="jet-function">${n}</span>(`),r=r.replace(n,`<span class="jet-keyword">$1</span>`),r=r.replace(/\b(Data)(\.[a-zA-Z_][a-zA-Z0-9_.]*)?/g,(e,t,n)=>n?`<span class="jet-variable">${t}${n}</span>`:`<span class="jet-variable">${t}</span>`),r=r.replace(/(?<![a-zA-Z0-9_])(\.[a-zA-Z_][a-zA-Z0-9_]*)/g,`<span class="jet-variable">$1</span>`),r=r.replace(/(\|&gt;|==|!=|&lt;=|&gt;=|&amp;&amp;|\|\||!)/g,`<span class="jet-operator">$1</span>`),r}};$([P({type:String})],xh.prototype,`content`,void 0),$([P({type:String})],xh.prototype,`placeholder`,void 0),$([P({type:Object})],xh.prototype,`manifest`,void 0),$([F()],xh.prototype,`internalContent`,void 0),$([F()],xh.prototype,`completions`,void 0),$([F()],xh.prototype,`selectedIndex`,void 0),$([F()],xh.prototype,`showAutocomplete`,void 0),$([F()],xh.prototype,`popupPosition`,void 0),$([I(`.input-layer`)],xh.prototype,`textarea`,void 0),$([I(`.highlight-layer`)],xh.prototype,`highlightDiv`,void 0),xh=$([wt(`ccm-template-editor`)],xh);var Sh=class extends Ge{static{this.styles=v`
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

    .editor-help {
      padding: 8px 16px;
      background: var(--sl-color-neutral-100);
      border-bottom: 1px solid var(--sl-color-neutral-200);
      font-size: 13px;
      color: var(--sl-color-neutral-600);
      display: flex;
      align-items: center;
      gap: 16px;
      flex-wrap: wrap;
    }

    .editor-help code {
      background: var(--sl-color-neutral-200);
      padding: 2px 6px;
      border-radius: 3px;
      font-family: var(--sl-font-mono);
      font-size: 12px;
      color: var(--sl-color-neutral-700);
    }

    .editor-help a {
      color: var(--ccm-blue);
      text-decoration: none;
    }

    .editor-help a:hover {
      text-decoration: underline;
    }

    .editor-help .separator {
      color: var(--sl-color-neutral-300);
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
  `}connectedCallback(){super.connectedCallback(),this.unsubscribe=Q.subscribe(e=>{this.storeState=e})}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribe?.()}render(){let e=Array.from(this.storeState?.templates?.values()??[]),t=this.storeState?.activeTemplateId?this.storeState.templates.get(this.storeState.activeTemplateId):null;return A`
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
    `}renderEditor(e){return A`
      <div class="editor-header">
        <h3>
          <sl-icon name="file-earmark-code"></sl-icon>
          ${e.name}
        </h3>
      </div>
      <div class="editor-help">
        <span>Delimiters: <code>[[</code> <code>]]</code></span>
        <span class="separator">|</span>
        <a href="https://github.com/CloudyKit/jet/blob/master/docs/syntax.md" target="_blank">Template Syntax</a>
        <span class="separator">|</span>
        <a href="https://github.com/CloudyKit/jet/blob/master/docs/builtins.md" target="_blank">Jet Builtins</a>
      </div>
      <div class="editor-content">
        <ccm-template-editor
          .content=${e.content}
          .manifest=${this.storeState.manifest}
          @content-change=${this.handleContentChange}
        ></ccm-template-editor>
      </div>
    `}renderEmptyState(e){return e?A`
        <div class="empty-state">
          <sl-icon name="file-earmark-code"></sl-icon>
          <h3>No Templates</h3>
          <p>Click the + button to create your first Jet template</p>
        </div>
      `:A`
      <div class="empty-state">
        <sl-icon name="cursor-text"></sl-icon>
        <h3>Select a Template</h3>
        <p>Choose a template from the list to start editing</p>
      </div>
    `}handleSelect(e){Q.setActiveTemplate(e.detail)}handleAdd(e){try{let t=Q.addTemplate(e.detail);Q.setActiveTemplate(t)}catch(e){this.showErrorToast(e.message)}}handleDelete(e){let t=Q.getTemplateById(e.detail);t&&confirm(`Delete template "${t.name}"?`)&&Q.deleteTemplate(e.detail)}handleRename(e){try{Q.renameTemplate(e.detail.id,e.detail.name)}catch(e){this.showErrorToast(e.message)}}handleDownload(e){let t=Q.getTemplateById(e.detail);t&&this.downloadTemplate(t)}downloadTemplate(e){let t=new Blob([e.content],{type:`text/plain`}),n=URL.createObjectURL(t),r=document.createElement(`a`);r.href=n,r.download=e.name,document.body.appendChild(r),r.click(),document.body.removeChild(r),URL.revokeObjectURL(n),this.showToast(`Downloaded ${e.name}`)}handleContentChange(e){this.storeState?.activeTemplateId&&Q.updateTemplateContent(this.storeState.activeTemplateId,e.detail)}showToast(e){let t=Object.assign(document.createElement(`sl-alert`),{variant:`success`,closable:!0,duration:3e3,innerHTML:`<sl-icon name="check-circle" slot="icon"></sl-icon>${e}`});document.body.appendChild(t),t.toast()}showErrorToast(e){let t=Object.assign(document.createElement(`sl-alert`),{variant:`danger`,closable:!0,duration:5e3,innerHTML:`<sl-icon name="exclamation-triangle" slot="icon"></sl-icon>${e}`});document.body.appendChild(t),t.toast()}};$([F()],Sh.prototype,`storeState`,void 0),Sh=$([wt(`ccm-templates-editor`)],Sh);var Ch=class extends Ge{constructor(...e){super(...e),this.yamlPanelCollapsed=!1,this.activeTab=`resources`,this.showRecoveryDialog=!1,this.recoveryLastSaved=null,this.recoveryResourceCount=0,this.recoveryTemplateCount=0,this.isMobile=!1,this.boundRecoveryHandler=this.handleRecoveryAvailable.bind(this),this.mediaQuery=window.matchMedia(`(max-width: 900px)`),this.handleMediaChange=e=>{this.isMobile=e.matches}}static{this.styles=v`
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
      gap: 4px;
      background: var(--sl-color-neutral-200);
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
      gap: 4px;
      background: var(--sl-color-neutral-200);
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

  `}connectedCallback(){super.connectedCallback(),this.isMobile=this.mediaQuery.matches,this.mediaQuery.addEventListener(`change`,this.handleMediaChange),this.unsubscribe=Q.subscribe(e=>{this.storeState=e}),window.addEventListener(`ccm-recovery-available`,this.boundRecoveryHandler)}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribe?.(),window.removeEventListener(`ccm-recovery-available`,this.boundRecoveryHandler),this.mediaQuery.removeEventListener(`change`,this.handleMediaChange)}handleRecoveryAvailable(e){let{lastSaved:t,resourceCount:n,templateCount:r}=e.detail;this.recoveryLastSaved=t,this.recoveryResourceCount=n??0,this.recoveryTemplateCount=r??0,this.showRecoveryDialog=!0}render(){return A`
      <ccm-header
        .isDirty=${this.storeState?.isDirty??!1}
        .hasErrors=${Q.hasErrors()}
        @import-yaml=${this.handleImport}
        @export-yaml=${this.handleExport}
        @new-manifest=${this.handleNew}
      ></ccm-header>

      <div class="main-content ${this.isMobile?`mobile`:``}">
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
    `}handleTabChange(e){this.activeTab=e.detail.name}handleToggleYamlPanel(){this.yamlPanelCollapsed=!this.yamlPanelCollapsed}handleImport(e){let t=e.detail,n=Ym(t);n.success?n.warnings?.length?this.showAlert(`Imported with warnings: `+n.warnings.join(`, `),`warning`):this.showAlert(`Manifest imported successfully`,`success`):(console.error(`Import failed:`,n.errors),this.showAlert(`Import failed: `+(n.errors?.join(`, `)||`Unknown error`),`danger`))}handleExport(){Jm()}handleNew(){this.storeState?.isDirty&&!confirm(`Discard unsaved changes?`)||Q.reset()}handleRecover(){this.showRecoveryDialog=!1,window.dispatchEvent(new CustomEvent(`ccm-recovery-decision`,{detail:{recover:!0}})),this.showAlert(`Previous work recovered`,`success`)}handleDiscardRecovery(){this.showRecoveryDialog=!1,window.dispatchEvent(new CustomEvent(`ccm-recovery-decision`,{detail:{recover:!1}}))}showAlert(e,t=`success`){let n=Object.assign(document.createElement(`sl-alert`),{variant:t,closable:!0,duration:3e3,innerHTML:`<sl-icon name="${t===`success`?`check-circle`:`exclamation-triangle`}" slot="icon"></sl-icon>${e}`});document.body.appendChild(n),n.toast()}renderDesktopLayout(){return this.yamlPanelCollapsed?A`
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
        <sl-tab slot="nav" panel="data" ?active=${this.activeTab===`data`}>
          Data
        </sl-tab>
        <sl-tab slot="nav" panel="resources" ?active=${this.activeTab===`resources`}>
          Resources
        </sl-tab>
        <sl-tab slot="nav" panel="templates" ?active=${this.activeTab===`templates`}>
          Templates
        </sl-tab>
        <sl-tab slot="nav" panel="hierarchy" ?active=${this.activeTab===`hierarchy`}>
          Hierarchy
        </sl-tab>

        <sl-tab-panel name="data">
          <div class="tab-scroll-container">
            <ccm-data-editor></ccm-data-editor>
          </div>
        </sl-tab-panel>

        <sl-tab-panel name="resources">
          <div class="tab-scroll-container">
            <ccm-resources-editor></ccm-resources-editor>
          </div>
        </sl-tab-panel>

        <sl-tab-panel name="templates">
          <ccm-templates-editor></ccm-templates-editor>
        </sl-tab-panel>

        <sl-tab-panel name="hierarchy">
          <div class="tab-scroll-container">
            <ccm-hierarchy-editor></ccm-hierarchy-editor>
          </div>
        </sl-tab-panel>
      </sl-tab-group>
    `}};$([F()],Ch.prototype,`storeState`,void 0),$([F()],Ch.prototype,`yamlPanelCollapsed`,void 0),$([F()],Ch.prototype,`activeTab`,void 0),$([F()],Ch.prototype,`showRecoveryDialog`,void 0),$([F()],Ch.prototype,`recoveryLastSaved`,void 0),$([F()],Ch.prototype,`recoveryResourceCount`,void 0),$([F()],Ch.prototype,`recoveryTemplateCount`,void 0),$([F()],Ch.prototype,`isMobile`,void 0),Ch=$([wt(`ccm-studio`)],Ch);function wh(){if(Hp.hasSavedData()){let e=Hp.getSummary();window.dispatchEvent(new CustomEvent(`ccm-recovery-available`,{detail:{lastSaved:e?.lastSaved??null,resourceCount:e?.resourceCount??0,templateCount:e?.templateCount??0}}))}else Gp()}document.readyState===`loading`?document.addEventListener(`DOMContentLoaded`,wh):requestAnimationFrame(wh),window.addEventListener(`ccm-recovery-decision`,e=>{let{recover:t}=e.detail;t?Kp():Hp.clear(),Gp()});