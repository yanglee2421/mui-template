import{j as V,c as b,d as $,a as F,s as B}from"./ButtonBase-24bd0105.js";import{$ as D,a0 as M,_ as h,a1 as k,a2 as p,a3 as E,a4 as G,a5 as N,r as d,l as _,j as O,a6 as v,k as U}from"./index-0afd6b54.js";import{e as A}from"./extendSxProp-94fbb32b.js";const L=V(),I=L,W=["component","direction","spacing","divider","children","className","useFlexGap"],q=D(),z=I("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,s)=>s.root});function H(e){return M({props:e,name:"MuiStack",defaultTheme:q})}function J(e,s){const n=d.Children.toArray(e).filter(Boolean);return n.reduce((a,c,t)=>(a.push(c),t<n.length-1&&a.push(d.cloneElement(s,{key:`separator-${t}`})),a),[])}const K=e=>({row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"})[e],Q=({ownerState:e,theme:s})=>{let n=h({display:"flex",flexDirection:"column"},k({theme:s},p({values:e.direction,breakpoints:s.breakpoints.values}),a=>({flexDirection:a})));if(e.spacing){const a=E(s),c=Object.keys(s.breakpoints.values).reduce((o,r)=>((typeof e.spacing=="object"&&e.spacing[r]!=null||typeof e.direction=="object"&&e.direction[r]!=null)&&(o[r]=!0),o),{}),t=p({values:e.direction,base:c}),m=p({values:e.spacing,base:c});typeof t=="object"&&Object.keys(t).forEach((o,r,i)=>{if(!t[o]){const u=r>0?t[i[r-1]]:"column";t[o]=u}}),n=G(n,k({theme:s},m,(o,r)=>e.useFlexGap?{gap:v(a,o)}:{"& > :not(style):not(style)":{margin:0},"& > :not(style) ~ :not(style)":{[`margin${K(r?t[r]:e.direction)}`]:v(a,o)}}))}return n=N(s.breakpoints,n),n};function X(e={}){const{createStyledComponent:s=z,useThemeProps:n=H,componentName:a="MuiStack"}=e,c=()=>$({root:["root"]},o=>F(a,o),{}),t=s(Q);return d.forwardRef(function(o,r){const i=n(o),l=A(i),{component:u="div",direction:x="column",spacing:S=0,divider:y,children:g,className:j,useFlexGap:P=!1}=l,C=_(l,W),R={direction:x,spacing:S,useFlexGap:P},T=c();return O.jsx(t,h({as:u,ownerState:R,ref:r,className:b(T.root,j)},C,{children:y?J(g,y):g}))})}const Y=X({createStyledComponent:B("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,s)=>s.root}),useThemeProps:e=>U({props:e,name:"MuiStack"})}),se=Y;export{se as S,I as s};
