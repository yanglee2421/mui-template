import{u as B,R as M,a as Ve,b as De,j as S,N as q}from"./index-TTh6u7Wr.js";import{c as Ge,g as Je}from"./fabric-Y98Y_bQ5.js";import{u as Ye}from"./useThemeStore-jSe1lQlA.js";function Ke(){const t=B();return M.useEffect(()=>{const e=t[t.length-1],r=Reflect.get(Object(e==null?void 0:e.handle),"title");[r,typeof r=="string"].every(Boolean)&&(document.title=r)},[t])}var ae={exports:{}};/* NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT */(function(t,e){(function(r,n){t.exports=n()})(Ge,function(){var r={};r.version="0.2.0";var n=r.settings={minimum:.08,easing:"ease",positionUsing:"",speed:200,trickle:!0,trickleRate:.02,trickleSpeed:800,showSpinner:!0,barSelector:'[role="bar"]',spinnerSelector:'[role="spinner"]',parent:"body",template:'<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'};r.configure=function(o){var c,l;for(c in o)l=o[c],l!==void 0&&o.hasOwnProperty(c)&&(n[c]=l);return this},r.status=null,r.set=function(o){var c=r.isStarted();o=s(o,n.minimum,1),r.status=o===1?null:o;var l=r.render(!c),d=l.querySelector(n.barSelector),g=n.speed,b=n.easing;return l.offsetWidth,u(function(p){n.positionUsing===""&&(n.positionUsing=r.getPositioningCSS()),f(d,a(o,g,b)),o===1?(f(l,{transition:"none",opacity:1}),l.offsetWidth,setTimeout(function(){f(l,{transition:"all "+g+"ms linear",opacity:0}),setTimeout(function(){r.remove(),p()},g)},g)):setTimeout(p,g)}),this},r.isStarted=function(){return typeof r.status=="number"},r.start=function(){r.status||r.set(0);var o=function(){setTimeout(function(){r.status&&(r.trickle(),o())},n.trickleSpeed)};return n.trickle&&o(),this},r.done=function(o){return!o&&!r.status?this:r.inc(.3+.5*Math.random()).set(1)},r.inc=function(o){var c=r.status;return c?(typeof o!="number"&&(o=(1-c)*s(Math.random()*c,.1,.95)),c=s(c+o,0,.994),r.set(c)):r.start()},r.trickle=function(){return r.inc(Math.random()*n.trickleRate)},function(){var o=0,c=0;r.promise=function(l){return!l||l.state()==="resolved"?this:(c===0&&r.start(),o++,c++,l.always(function(){c--,c===0?(o=0,r.done()):r.set((o-c)/o)}),this)}}(),r.render=function(o){if(r.isRendered())return document.getElementById("nprogress");v(document.documentElement,"nprogress-busy");var c=document.createElement("div");c.id="nprogress",c.innerHTML=n.template;var l=c.querySelector(n.barSelector),d=o?"-100":i(r.status||0),g=document.querySelector(n.parent),b;return f(l,{transition:"all 0 linear",transform:"translate3d("+d+"%,0,0)"}),n.showSpinner||(b=c.querySelector(n.spinnerSelector),b&&X(b)),g!=document.body&&v(g,"nprogress-custom-parent"),g.appendChild(c),c},r.remove=function(){O(document.documentElement,"nprogress-busy"),O(document.querySelector(n.parent),"nprogress-custom-parent");var o=document.getElementById("nprogress");o&&X(o)},r.isRendered=function(){return!!document.getElementById("nprogress")},r.getPositioningCSS=function(){var o=document.body.style,c="WebkitTransform"in o?"Webkit":"MozTransform"in o?"Moz":"msTransform"in o?"ms":"OTransform"in o?"O":"";return c+"Perspective"in o?"translate3d":c+"Transform"in o?"translate":"margin"};function s(o,c,l){return o<c?c:o>l?l:o}function i(o){return(-1+o)*100}function a(o,c,l){var d;return n.positionUsing==="translate3d"?d={transform:"translate3d("+i(o)+"%,0,0)"}:n.positionUsing==="translate"?d={transform:"translate("+i(o)+"%,0)"}:d={"margin-left":i(o)+"%"},d.transition="all "+c+"ms "+l,d}var u=function(){var o=[];function c(){var l=o.shift();l&&l(c)}return function(l){o.push(l),o.length==1&&c()}}(),f=function(){var o=["Webkit","O","Moz","ms"],c={};function l(p){return p.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,function(m,y){return y.toUpperCase()})}function d(p){var m=document.body.style;if(p in m)return p;for(var y=o.length,j=p.charAt(0).toUpperCase()+p.slice(1),$;y--;)if($=o[y]+j,$ in m)return $;return p}function g(p){return p=l(p),c[p]||(c[p]=d(p))}function b(p,m,y){m=g(m),p.style[m]=y}return function(p,m){var y=arguments,j,$;if(y.length==2)for(j in m)$=m[j],$!==void 0&&m.hasOwnProperty(j)&&b(p,j,$);else b(p,y[1],y[2])}}();function h(o,c){var l=typeof o=="string"?o:T(o);return l.indexOf(" "+c+" ")>=0}function v(o,c){var l=T(o),d=l+c;h(l,c)||(o.className=d.substring(1))}function O(o,c){var l=T(o),d;h(o,c)&&(d=l.replace(" "+c+" "," "),o.className=d.substring(1,d.length-1))}function T(o){return(" "+(o.className||"")+" ").replace(/\s+/gi," ")}function X(o){o&&o.parentNode&&o.parentNode.removeChild(o)}return r})})(ae);var Qe=ae.exports;const Z=Je(Qe);function Xe(){const t=B();return M.useEffect(()=>(Z.done(),()=>{Z.start()}),[t])}const w=new Set;w.add("login");w.add("404");w.add("401");w.add("register");w.add("forgot-passwd");w.add("privacy-policy");class ce{constructor(e,r){this.operator=e,this.value=r,Object.defineProperty(this,"t",{writable:!0})}get notes(){return this.t}addNote(e){this.t=this.t||[],this.t.push(e)}}let H=class extends ce{};class N extends H{constructor(e,r){if(!Array.isArray(r))throw new Error(`"${e}" operator expects to receive an array of conditions`);super(e,r)}}const A="__itself__";let P=class extends ce{constructor(e,r,n){super(e,n),this.field=r}};const ue=new H("__null__",null),L=Object.prototype.hasOwnProperty.call.bind(Object.prototype.hasOwnProperty);function Ze(t,e){return e instanceof N&&e.operator===t}function le(t,e){return e.length===1?e[0]:new N(t,function r(n,s,i){const a=i||[];for(let u=0,f=s.length;u<f;u++){const h=s[u];Ze(n,h)?r(n,h.value,a):a.push(h)}return a}(t,e))}const et=t=>t,fe=()=>Object.create(null),pe=Object.defineProperty(fe(),"__@type@__",{value:"ignore value"});function tt(t,e,r=!1){if(!t||t&&t.constructor!==Object)return!1;for(const n in t)if(L(t,n)&&L(e,n)&&(!r||t[n]!==pe))return!0;return!1}function rt(t){const e=[];for(const r in t)L(t,r)&&t[r]!==pe&&e.push(r);return e}function k(t,e){e!==ue&&t.push(e)}const de=t=>le("and",t),he={compound(t,e,r){const n=(Array.isArray(e)?e:[e]).map(s=>r.parse(s));return new N(t.name,n)},field:(t,e,r)=>new P(t.name,r.field,e),document:(t,e)=>new H(t.name,e)};let nt=class{constructor(e,r=fe()){this.o=void 0,this.s=void 0,this.i=void 0,this.u=void 0,this.h=void 0,this.parse=this.parse.bind(this),this.u={operatorToConditionName:r.operatorToConditionName||et,defaultOperatorName:r.defaultOperatorName||"eq",mergeFinalConditions:r.mergeFinalConditions||de},this.o=Object.keys(e).reduce((n,s)=>(n[s]=Object.assign({name:this.u.operatorToConditionName(s)},e[s]),n),{}),this.s=Object.assign({},r.fieldContext,{field:"",query:{},parse:this.parse,hasOperators:n=>tt(n,this.o,r.useIgnoreValue)}),this.i=Object.assign({},r.documentContext,{parse:this.parse,query:{}}),this.h=r.useIgnoreValue?rt:Object.keys}setParse(e){this.parse=e,this.s.parse=e,this.i.parse=e}parseField(e,r,n,s){const i=this.o[r];if(!i)throw new Error(`Unsupported operator "${r}"`);if(i.type!=="field")throw new Error(`Unexpected ${i.type} operator "${r}" at field level`);return this.s.field=e,this.s.query=s,this.parseInstruction(i,n,this.s)}parseInstruction(e,r,n){return typeof e.validate=="function"&&e.validate(e,r),(e.parse||he[e.type])(e,r,n)}parseFieldOperators(e,r){const n=[],s=this.h(r);for(let i=0,a=s.length;i<a;i++){const u=s[i];if(!this.o[u])throw new Error(`Field query for "${e}" may contain only operators or a plain object as a value`);k(n,this.parseField(e,u,r[u],r))}return n}parse(e){const r=[],n=this.h(e);this.i.query=e;for(let s=0,i=n.length;s<i;s++){const a=n[s],u=e[a],f=this.o[a];if(f){if(f.type!=="document"&&f.type!=="compound")throw new Error(`Cannot use parsing instruction for operator "${a}" in "document" context as it is supposed to be used in  "${f.type}" context`);k(r,this.parseInstruction(f,u,this.i))}else this.s.hasOperators(u)?r.push(...this.parseFieldOperators(a,u)):k(r,this.parseField(a,this.u.defaultOperatorName,u,e))}return this.u.mergeFinalConditions(r)}};function U(t,e){const r=t[e];if(typeof r!="function")throw new Error(`Unable to interpret "${e}" condition. Did you forget to register interpreter for it?`);return r}function st(t){return t.operator}function it(t,e){const r=e,n=r&&r.getInterpreterName||st;let s;switch(r?r.numberOfArguments:0){case 1:s=a=>{const u=n(a,r);return U(t,u)(a,i)};break;case 3:s=(a,u,f)=>{const h=n(a,r);return U(t,h)(a,u,f,i)};break;default:s=(a,u)=>{const f=n(a,r);return U(t,f)(a,u,i)}}const i=Object.assign({},r,{interpret:s});return i.interpret}function ot(t,e){return(r,...n)=>{const s=t(r,...n),i=e.bind(null,s);return i.ast=s,i}}function ge(t,e){if(!Array.isArray(e))throw new Error(`"${t.name}" expects value to be an array`)}function me(t,e){if(ge(t,e),!e.length)throw new Error(`"${t.name}" expects to have at least one element in array`)}const W=t=>(e,r)=>{if(typeof r!==t)throw new Error(`"${e.name}" expects value to be a "${t}"`)},ye={type:"compound",validate:me,parse(t,e,{parse:r}){const n=e.map(s=>r(s));return le(t.name,n)}},at=ye,ct={type:"compound",validate:me},ut={type:"field",validate(t,e){if(!(e&&(e instanceof RegExp||e.constructor===Object)))throw new Error(`"${t.name}" expects to receive either regular expression or object of field operators`)},parse(t,e,r){const n=e instanceof RegExp?new P("regex",r.field,e):r.parse(e,r);return new N(t.name,[n])}},ve={type:"field",validate(t,e){if(!e||e.constructor!==Object)throw new Error(`"${t.name}" expects to receive an object with nested query or field level operators`)},parse(t,e,{parse:r,field:n,hasOperators:s}){const i=s(e)?r(e,{field:A}):r(e);return new P(t.name,n,i)}},be={type:"field",validate:W("number")},C={type:"field",validate:ge},$e=C,we=C,lt={type:"field",validate(t,e){if(!Array.isArray(e)||e.length!==2)throw new Error(`"${t.name}" expects an array with 2 numeric elements`)}},xe={type:"field",validate:W("boolean")},V={type:"field",validate:function(t,e){if(!(typeof e=="string"||typeof e=="number"||e instanceof Date))throw new Error(`"${t.name}" expects value to be comparable (i.e., string, number or date)`)}},F=V,Oe=F,je=F,D={type:"field"},Ae=D,Se={type:"field",validate(t,e){if(!(e instanceof RegExp)&&typeof e!="string")throw new Error(`"${t.name}" expects value to be a regular expression or a string that represents regular expression`)},parse(t,e,r){const n=typeof e=="string"?new RegExp(e,r.query.$options||""):e;return new P(t.name,r.field,n)}},Ee={type:"field",parse:()=>ue},ft={type:"document",validate:W("function")};var pt=Object.freeze({__proto__:null,$and:ye,$or:at,$nor:ct,$not:ut,$elemMatch:ve,$size:be,$in:C,$nin:$e,$all:we,$mod:lt,$exists:xe,$gte:V,$gt:F,$lt:Oe,$lte:je,$eq:D,$ne:Ae,$regex:Se,$options:Ee,$where:ft});class dt extends nt{constructor(e){super(e,{defaultOperatorName:"$eq",operatorToConditionName:r=>r.slice(1)})}parse(e,r){return r&&r.field?de(this.parseFieldOperators(r.field,e)):super.parse(e)}}const z=pt;function G(t,e,r){for(let n=0,s=t.length;n<s;n++)if(r(t[n],e)===0)return!0;return!1}function J(t,e){return Array.isArray(t)&&Number.isNaN(Number(e))}function ee(t,e,r){if(!J(t,e))return r(t,e);let n=[];for(let s=0;s<t.length;s++){const i=r(t[s],e);i!==void 0&&(n=n.concat(i))}return n}function x(t){return(e,r,n)=>{const s=n.get(r,e.field);return Array.isArray(s)?s.some(i=>t(e,i,n)):t(e,s,n)}}const ht=(t,e)=>t[e];function Re(t,e,r){const n=e.lastIndexOf(".");return n===-1?[t,e]:[r(t,e.slice(0,n)),e.slice(n+1)]}function gt(t,e,r=ht){if(e===A)return t;if(!t)throw new Error(`Unable to get field "${e}" out of ${String(t)}.`);return function(n,s,i){if(s.indexOf(".")===-1)return ee(n,s,i);const a=s.split(".");let u=n;for(let f=0,h=a.length;f<h;f++)if(u=ee(u,a[f],i),!u||typeof u!="object")return u;return u}(t,e,r)}function Me(t,e){return t===e?0:t>e?1:-1}function Ne(t,e={}){return it(t,Object.assign({get:gt,compare:Me},e))}const Pe=(t,e,{interpret:r})=>t.value.some(n=>r(n,e)),mt=(t,e,r)=>!Pe(t,e,r),Ce=(t,e,{interpret:r})=>t.value.every(n=>r(n,e)),yt=(t,e,{interpret:r})=>!r(t.value[0],e),Y=(t,e,{compare:r,get:n})=>{const s=n(e,t.field);return Array.isArray(s)&&!Array.isArray(t.value)?G(s,t.value,r):r(s,t.value)===0},Fe=(t,e,r)=>!Y(t,e,r),_e=x((t,e,r)=>{const n=r.compare(e,t.value);return n===0||n===-1}),Te=x((t,e,r)=>r.compare(e,t.value)===-1),qe=x((t,e,r)=>r.compare(e,t.value)===1),ke=x((t,e,r)=>{const n=r.compare(e,t.value);return n===0||n===1}),Ue=(t,e,{get:r})=>{if(t.field===A)return e!==void 0;const[n,s]=Re(e,t.field,r),i=a=>!!a&&a.hasOwnProperty(s)===t.value;return J(n,s)?n.some(i):i(n)},vt=x((t,e)=>typeof e=="number"&&e%t.value[0]===t.value[1]),Le=(t,e,{get:r})=>{const[n,s]=Re(e,t.field,r),i=a=>{const u=r(a,s);return Array.isArray(u)&&u.length===t.value};return t.field!==A&&J(n,s)?n.some(i):i(n)},ze=x((t,e)=>typeof e=="string"&&t.value.test(e)),_=x((t,e,{compare:r})=>G(t.value,e,r)),Ie=(t,e,r)=>!_(t,e,r),Be=(t,e,{compare:r,get:n})=>{const s=n(e,t.field);return Array.isArray(s)&&t.value.every(i=>G(s,i,r))},He=(t,e,{interpret:r,get:n})=>{const s=n(e,t.field);return Array.isArray(s)&&s.some(i=>r(t.value,i))},bt=(t,e)=>t.value.call(e);var $t=Object.freeze({__proto__:null,or:Pe,nor:mt,and:Ce,not:yt,eq:Y,ne:Fe,lte:_e,lt:Te,gt:qe,gte:ke,exists:Ue,mod:vt,size:Le,regex:ze,within:_,nin:Ie,all:Be,elemMatch:He,where:bt});const K=Object.assign({},$t,{in:_});Ne(K);function te(t){return t instanceof Date?t.getTime():t&&typeof t.toJSON=="function"?t.toJSON():t}const wt=(t,e)=>Me(te(t),te(e));function Q(t,e,r){const n=new dt(t),s=Ne(e,Object.assign({compare:wt},r));if(r&&r.forPrimitives){const i={field:A},a=n.parse;n.setParse(u=>a(u,i))}return ot(n.parse,s)}Q(z,K);Q(["$and","$or"].reduce((t,e)=>(t[e]=Object.assign({},t[e],{type:"field"}),t),Object.assign({},z,{$nor:Object.assign({},z.$nor,{type:"field",parse:he.compound})})),K,{forPrimitives:!0});function I(t){return Array.isArray(t)?t:[t]}const xt=Object.hasOwn||Object.prototype.hasOwnProperty.call.bind(Object.prototype.hasOwnProperty),re="__caslSubjectType__",R=t=>{const e=typeof t;return e==="string"||e==="function"},Ot=t=>t.modelName||t.name;function jt(t){return xt(t,re)?t[re]:Ot(t.constructor)}function ne(t,e,r){for(let n=r;n<e.length;n++)t.push(e[n])}function se(t,e){if(!t||!t.length)return e||[];if(!e||!e.length)return t||[];let r=0,n=0;const s=[];for(;r<t.length&&n<e.length;)t[r].priority<e[n].priority?(s.push(t[r]),r++):(s.push(e[n]),n++);return ne(s,t,r),ne(s,e,n),s}function E(t,e,r){let n=t.get(e);return n||(n=r(),t.set(e,n)),n}const At=t=>t;function St(t,e){if(Array.isArray(t.fields)&&!t.fields.length)throw new Error("`rawRule.fields` cannot be an empty array. https://bit.ly/390miLa");if(t.fields&&!e.fieldMatcher)throw new Error('You need to pass "fieldMatcher" option in order to restrict access by fields');if(t.conditions&&!e.conditionsMatcher)throw new Error('You need to pass "conditionsMatcher" option in order to restrict access by conditions')}class Et{constructor(e,r,n=0){St(e,r),this.action=r.resolveAction(e.action),this.subject=e.subject,this.inverted=!!e.inverted,this.conditions=e.conditions,this.reason=e.reason,this.origin=e,this.fields=e.fields?I(e.fields):void 0,this.priority=n,this.t=r}i(){return this.conditions&&!this.o&&(this.o=this.t.conditionsMatcher(this.conditions)),this.o}get ast(){const e=this.i();return e?e.ast:void 0}matchesConditions(e){return this.conditions?!e||R(e)?!this.inverted:this.i()(e):!0}matchesField(e){return this.fields?e?(this.fields&&!this.u&&(this.u=this.t.fieldMatcher(this.fields)),this.u(e)):!this.inverted:!0}}function Rt(t,e){const r={value:t,prev:e,next:null};return e&&(e.next=r),r}function Mt(t){t.next&&(t.next.prev=t.prev),t.prev&&(t.prev.next=t.next),t.next=t.prev=null}const Nt=t=>({value:t.value,prev:t.prev,next:t.next}),ie=()=>({rules:[],merged:!1}),oe=()=>new Map;class Pt{constructor(e=[],r={}){this.h=!1,this.l={conditionsMatcher:r.conditionsMatcher,fieldMatcher:r.fieldMatcher,resolveAction:r.resolveAction||At},this.p=r.anyAction||"manage",this.g=r.anySubjectType||"all",this.$=r.detectSubjectType||jt,this.A=e,this.j=this.M(e)}get rules(){return this.A}detectSubjectType(e){return R(e)?e:e?this.$(e):this.g}update(e){const r={rules:e,ability:this,target:this};return this.m("update",r),this.A=e,this.j=this.M(e),this.m("updated",r),this}M(e){const r=new Map;for(let n=e.length-1;n>=0;n--){const s=e.length-n-1,i=new Et(e[n],this.l,s),a=I(i.action),u=I(i.subject||this.g);!this.h&&i.fields&&(this.h=!0);for(let f=0;f<u.length;f++){const h=E(r,u[f],oe);for(let v=0;v<a.length;v++)E(h,a[v],ie).rules.push(i)}}return r}possibleRulesFor(e,r=this.g){if(!R(r))throw new Error('"possibleRulesFor" accepts only subject types (i.e., string or class) as the 2nd parameter');const n=E(this.j,r,oe),s=E(n,e,ie);if(s.merged)return s.rules;const i=e!==this.p&&n.has(this.p)?n.get(this.p).rules:void 0;let a=se(s.rules,i);return r!==this.g&&(a=se(a,this.possibleRulesFor(e,this.g))),s.rules=a,s.merged=!0,a}rulesFor(e,r,n){const s=this.possibleRulesFor(e,r);if(n&&typeof n!="string")throw new Error("The 3rd, `field` parameter is expected to be a string. See https://stalniy.github.io/casl/en/api/casl-ability#can-of-pure-ability for details");return this.h?s.filter(i=>i.matchesField(n)):s}actionsFor(e){if(!R(e))throw new Error('"actionsFor" accepts only subject types (i.e., string or class) as a parameter');const r=new Set,n=this.j.get(e);n&&Array.from(n.keys()).forEach(i=>r.add(i));const s=e!==this.g?this.j.get(this.g):void 0;return s&&Array.from(s.keys()).forEach(i=>r.add(i)),Array.from(r)}on(e,r){this.v=this.v||new Map;const n=this.v,s=n.get(e)||null,i=Rt(r,s);return n.set(e,i),()=>{const a=n.get(e);!i.next&&!i.prev&&a===i?n.delete(e):i===a&&n.set(e,i.prev),Mt(i)}}m(e,r){if(!this.v)return;let n=this.v.get(e)||null;for(;n!==null;){const s=n.prev?Nt(n.prev):null;n.value(r),n=s}}}class Ct extends Pt{can(e,r,n){const s=this.relevantRuleFor(e,r,n);return!!s&&!s.inverted}relevantRuleFor(e,r,n){const s=this.detectSubjectType(r),i=this.rulesFor(e,s,n);for(let a=0,u=i.length;a<u;a++)if(i[a].matchesConditions(r))return i[a];return null}cannot(e,r,n){return!this.can(e,r,n)}}const Ft={$eq:D,$ne:Ae,$lt:Oe,$lte:je,$gt:F,$gte:V,$in:C,$nin:$e,$all:we,$size:be,$regex:Se,$options:Ee,$elemMatch:ve,$exists:xe},_t={eq:Y,ne:Fe,lt:Te,lte:_e,gt:qe,gte:ke,in:_,nin:Ie,all:Be,size:Le,regex:ze,elemMatch:He,exists:Ue,and:Ce},Tt=Q(Ft,_t),qt=/[-/\\^$+?.()|[\]{}]/g,kt=/\.?\*+\.?/g,Ut=/\*+/,Lt=/\./g;function zt(t,e,r){const n=r[0]==="*"||t[0]==="."&&t[t.length-1]==="."?"+":"*",s=t.indexOf("**")===-1?"[^.]":".",i=t.replace(Lt,"\\$&").replace(Ut,s+n);return e+t.length===r.length?`(?:${i})?`:i}function It(t,e,r){return t==="."&&(r[e-1]==="*"||r[e+1]==="*")?t:`\\${t}`}function Bt(t){const e=t.map(n=>n.replace(qt,It).replace(kt,zt)),r=e.length>1?`(?:${e.join("|")})`:e[0];return new RegExp(`^${r}$`)}const Ht=t=>{let e;return r=>(typeof e>"u"&&(e=t.every(n=>n.indexOf("*")===-1)?null:Bt(t)),e===null?t.indexOf(r)!==-1:e.test(r))};function Wt(t=[],e={}){return new Ct(t,Object.assign({conditionsMatcher:Tt,fieldMatcher:Ht},e))}function Vt(t){return typeof t.prototype.possibleRulesFor=="function"}class Dt{constructor(e){this.F=e}because(e){return this.F.reason=e,this}}class Gt{constructor(e){this.rules=[],this._=e,this.can=(r,n,s,i)=>this.O(r,n,s,i,!1),this.cannot=(r,n,s,i)=>this.O(r,n,s,i,!0),this.build=r=>Vt(this._)?new this._(this.rules,r):this._(this.rules,r)}O(e,r,n,s,i){const a={action:e};return i&&(a.inverted=i),r&&(a.subject=r,Array.isArray(n)||typeof n=="string"?a.fields=n:typeof n<"u"&&(a.conditions=n),typeof s<"u"&&(a.conditions=s)),this.rules.push(a),new Dt(a)}}function We(t){const e=new Gt(Wt);switch(t){case"owner":Jt(e);break;case"admin":Yt(e);break;case"client":Kt(e);break;default:Qt(e)}return e.build()}function Jt(t){t.can("manage","all")}function Yt(t){t.can("manage","all")}function Kt(t){t.can("read","all")}function Qt(t){t.cannot("manage","all")}const Xt=M.createContext(We(""));function ir(){const t=Ve(),e=B(),[r]=De(),n=Ye(),s=M.useMemo(()=>{const i=e[e.length-1];if(!i)return console.error("currentRoute is falsy"),null;if(i.id==="login"){const O=r.get("returnURL")||"/";return n.currentUser?S.jsx(q,{to:O,replace:!0}):t}if(i.id==="register"){const O=r.get("returnURL")||"/";return n.currentUser?S.jsx(q,{to:O,replace:!0}):t}if(w.has(i.id)||n.currentUser)return t;const a=new URLSearchParams;a.set("returnURL",i.pathname);const u=a.toString(),v={pathname:"/login",search:i.id==="home"?void 0:u};return S.jsx(q,{to:v,replace:!0})},[e,r,t,n.currentUser]);return Xe(),Ke(),S.jsx(Xt.Provider,{value:We(""),children:s})}export{ir as Component};