import{_ as c,r as W,i as A,j as x,f as D}from"./index-c4ee9176.js";import{g as G,b as H,s as F,B as J,r as K,c as M,a as Q}from"./ButtonBase-c41b8bd3.js";import{u as T}from"./useFormControl-fc706aba.js";import{u as V}from"./useControlled-c911a948.js";function X(e){return G("PrivateSwitchBase",e)}H("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);const Y=["autoFocus","checked","checkedIcon","className","defaultChecked","disabled","disableFocusRipple","edge","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"],Z=e=>{const{classes:o,checked:i,disabled:r,edge:a}=e,l={root:["root",i&&"checked",r&&"disabled",a&&`edge${D(a)}`],input:["input"]};return Q(l,X,o)},ee=F(J)(({ownerState:e})=>c({padding:9,borderRadius:"50%"},e.edge==="start"&&{marginLeft:e.size==="small"?-3:-12},e.edge==="end"&&{marginRight:e.size==="small"?-3:-12})),se=F("input",{shouldForwardProp:K})({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),te=W.forwardRef(function(o,i){const{autoFocus:r,checked:a,checkedIcon:l,className:w,defaultChecked:h,disabled:y,disableFocusRipple:p=!1,edge:S=!1,icon:R,id:P,inputProps:I,inputRef:j,name:z,onBlur:f,onChange:m,onFocus:g,readOnly:E,required:N=!1,tabIndex:U,type:d,value:b}=o,_=A(o,Y),[k,q]=V({controlled:a,default:!!h,name:"SwitchBase",state:"checked"}),t=T(),v=s=>{g&&g(s),t&&t.onFocus&&t.onFocus(s)},L=s=>{f&&f(s),t&&t.onBlur&&t.onBlur(s)},O=s=>{if(s.nativeEvent.defaultPrevented)return;const C=s.target.checked;q(C),m&&m(s,C)};let n=y;t&&typeof n>"u"&&(n=t.disabled);const $=d==="checkbox"||d==="radio",u=c({},o,{checked:k,disabled:n,disableFocusRipple:p,edge:S}),B=Z(u);return x.jsxs(ee,c({component:"span",className:M(B.root,w),centerRipple:!0,focusRipple:!p,disabled:n,tabIndex:null,role:void 0,onFocus:v,onBlur:L,ownerState:u,ref:i},_,{children:[x.jsx(se,c({autoFocus:r,checked:a,defaultChecked:h,className:B.input,disabled:n,id:$?P:void 0,name:z,onChange:O,readOnly:E,ref:j,required:N,ownerState:u,tabIndex:U,type:d},d==="checkbox"&&b===void 0?{}:{value:b},I)),k?l:R]}))}),ce=te;export{ce as S};
