import{_ as i,r as c,v as L,w as x,j as u}from"./index-NOl4DqEL.js";import{a as f,g as P,s as v,c as C,b as j}from"./ButtonBase-7zDRXYUG.js";import{L as M}from"./ListContext-kicnJyXl.js";function R(s){return f("MuiList",s)}P("MuiList",["root","padding","dense","subheader"]);const U=["children","className","component","dense","disablePadding","subheader"],_=s=>{const{classes:e,disablePadding:t,dense:o,subheader:a}=s;return j({root:["root",!t&&"padding",o&&"dense",a&&"subheader"]},R,e)},w=v("ul",{name:"MuiList",slot:"Root",overridesResolver:(s,e)=>{const{ownerState:t}=s;return[e.root,!t.disablePadding&&e.padding,t.dense&&e.dense,t.subheader&&e.subheader]}})(({ownerState:s})=>i({listStyle:"none",margin:0,padding:0,position:"relative"},!s.disablePadding&&{paddingTop:8,paddingBottom:8},s.subheader&&{paddingTop:0})),y=c.forwardRef(function(e,t){const o=L({props:e,name:"MuiList"}),{children:a,className:d,component:r="ul",dense:n=!1,disablePadding:p=!1,subheader:m}=o,g=x(o,U),b=c.useMemo(()=>({dense:n}),[n]),l=i({},o,{component:r,dense:n,disablePadding:p}),h=_(l);return u.jsx(M.Provider,{value:b,children:u.jsxs(w,i({as:r,className:C(h.root,d),ref:t,ownerState:l},g,{children:[m,a]}))})}),S=y;export{S as L};