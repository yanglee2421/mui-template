import{j as d,_ as n,r as p,f as C,i as j}from"./index-i_8Mq8d7.js";import{g as I,a as D,s as m,c as M,b as P}from"./ButtonBase-uYhudd6L.js";import{c as w}from"./createSvgIcon-1v6nwHji.js";const F=w(d.jsx("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");function N(a){return I("MuiAvatar",a)}D("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"]);const z=["alt","children","className","component","imgProps","sizes","src","srcSet","variant"],S=a=>{const{classes:t,variant:e,colorDefault:r}=a;return P({root:["root",e,r&&"colorDefault"],img:["img"],fallback:["fallback"]},N,t)},U=m("div",{name:"MuiAvatar",slot:"Root",overridesResolver:(a,t)=>{const{ownerState:e}=a;return[t.root,t[e.variant],e.colorDefault&&t.colorDefault]}})(({theme:a,ownerState:t})=>n({position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:a.typography.fontFamily,fontSize:a.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none"},t.variant==="rounded"&&{borderRadius:(a.vars||a).shape.borderRadius},t.variant==="square"&&{borderRadius:0},t.colorDefault&&n({color:(a.vars||a).palette.background.default},a.vars?{backgroundColor:a.vars.palette.Avatar.defaultBg}:{backgroundColor:a.palette.mode==="light"?a.palette.grey[400]:a.palette.grey[600]}))),_=m("img",{name:"MuiAvatar",slot:"Img",overridesResolver:(a,t)=>t.img})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),E=m(F,{name:"MuiAvatar",slot:"Fallback",overridesResolver:(a,t)=>t.fallback})({width:"75%",height:"75%"});function L({crossOrigin:a,referrerPolicy:t,src:e,srcSet:r}){const[s,l]=p.useState(!1);return p.useEffect(()=>{if(!e&&!r)return;l(!1);let i=!0;const o=new Image;return o.onload=()=>{i&&l("loaded")},o.onerror=()=>{i&&l("error")},o.crossOrigin=a,o.referrerPolicy=t,o.src=e,r&&(o.srcset=r),()=>{i=!1}},[a,t,e,r]),s}const T=p.forwardRef(function(t,e){const r=C({props:t,name:"MuiAvatar"}),{alt:s,children:l,className:i,component:o="div",imgProps:h,sizes:x,src:f,srcSet:v,variant:y="circular"}=r,R=j(r,z);let c=null;const k=L(n({},h,{src:f,srcSet:v})),b=f||v,A=b&&k!=="error",u=n({},r,{colorDefault:!A,component:o,variant:y}),g=S(u);return A?c=d.jsx(_,n({alt:s,srcSet:v,src:f,sizes:x,ownerState:u,className:g.img},h)):l!=null?c=l:b&&s?c=s[0]:c=d.jsx(E,{ownerState:u,className:g.fallback}),d.jsx(U,n({as:o,ownerState:u,className:M(g.root,i),ref:e},R,{children:c}))}),H=T;function W(a){let t=0,e;for(e=0;e<a.length;e+=1)t=a.charCodeAt(e)+((t<<5)-t);let r="#";for(e=0;e<3;e+=1){const s=t>>e*8&255;r+=`00${s.toString(16)}`.slice(-2)}return r}export{H as A,W as s};
