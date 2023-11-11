import{K as y,B,A as h,_ as a,r as x,k as j,m as M,j as N}from"./index-e8b98d12.js";import{a as P,g as U,s as _,f as z,u as W,c as E,b as H}from"./ButtonBase-2b81ec0a.js";import{T as w}from"./Typography-1316f8d7.js";function I(e){return U("MuiLink",e)}const K=P("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]),O=K,g={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},S=e=>g[e]||e,q=({theme:e,ownerState:o})=>{const n=S(o.color),r=y(e,`palette.${n}`,!1)||o.color,s=y(e,`palette.${n}Channel`);return"vars"in e&&s?`rgba(${s} / 0.4)`:B(r,.4)},G=q,J=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant","sx"],Q=e=>{const{classes:o,component:n,focusVisible:r,underline:s}=e,t={root:["root",`underline${h(s)}`,n==="button"&&"button",r&&"focusVisible"]};return H(t,I,o)},X=_(w,{name:"MuiLink",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:n}=e;return[o.root,o[`underline${h(n.underline)}`],n.component==="button"&&o.button]}})(({theme:e,ownerState:o})=>a({},o.underline==="none"&&{textDecoration:"none"},o.underline==="hover"&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},o.underline==="always"&&a({textDecoration:"underline"},o.color!=="inherit"&&{textDecorationColor:G({theme:e,ownerState:o})},{"&:hover":{textDecorationColor:"inherit"}}),o.component==="button"&&{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"},[`&.${O.focusVisible}`]:{outline:"auto"}})),Y=x.forwardRef(function(o,n){const r=j({props:o,name:"MuiLink"}),{className:s,color:t="primary",component:c="a",onBlur:u,onFocus:p,TypographyClasses:k,underline:C="always",variant:d="inherit",sx:l}=r,L=M(r,J),{isFocusVisibleRef:f,onBlur:V,onFocus:v,ref:F}=z(),[R,m]=x.useState(!1),D=W(n,F),T=i=>{V(i),f.current===!1&&m(!1),u&&u(i)},$=i=>{v(i),f.current===!0&&m(!0),p&&p(i)},b=a({},r,{color:t,component:c,focusVisible:R,underline:C,variant:d}),A=Q(b);return N.jsx(X,a({color:t,className:E(A.root,s),classes:k,component:c,onBlur:T,onFocus:$,ref:D,ownerState:b,variant:d,sx:[...Object.keys(g).includes(t)?[]:[{color:t}],...Array.isArray(l)?l:[l]]},L))}),no=Y;export{no as L};
