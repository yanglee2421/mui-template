import{f as r,_ as e,o as b,Q as $,T as x,r as S,k as f,i as m,j as n}from"./index-fc8ed91c.js";import{b as C,g as y,s as d,c as z,a as R}from"./ButtonBase-b7cf2afe.js";import{S as B}from"./SwitchBase-482a1419.js";function M(o){return y("MuiSwitch",o)}const j=C("MuiSwitch",["root","edgeStart","edgeEnd","switchBase","colorPrimary","colorSecondary","sizeSmall","sizeMedium","checked","disabled","input","thumb","track"]),t=j,T=["className","color","edge","size","sx"],I=o=>{const{classes:a,edge:s,size:i,color:p,checked:u,disabled:h}=o,g={root:["root",s&&`edge${r(s)}`,`size${r(i)}`],switchBase:["switchBase",`color${r(p)}`,u&&"checked",h&&"disabled"],thumb:["thumb"],track:["track"],input:["input"]},v=R(g,M,a);return e({},a,v)},N=d("span",{name:"MuiSwitch",slot:"Root",overridesResolver:(o,a)=>{const{ownerState:s}=o;return[a.root,s.edge&&a[`edge${r(s.edge)}`],a[`size${r(s.size)}`]]}})(({ownerState:o})=>e({display:"inline-flex",width:34+12*2,height:14+12*2,overflow:"hidden",padding:12,boxSizing:"border-box",position:"relative",flexShrink:0,zIndex:0,verticalAlign:"middle","@media print":{colorAdjust:"exact"}},o.edge==="start"&&{marginLeft:-8},o.edge==="end"&&{marginRight:-8},o.size==="small"&&{width:40,height:24,padding:7,[`& .${t.thumb}`]:{width:16,height:16},[`& .${t.switchBase}`]:{padding:4,[`&.${t.checked}`]:{transform:"translateX(16px)"}}})),U=d(B,{name:"MuiSwitch",slot:"SwitchBase",overridesResolver:(o,a)=>{const{ownerState:s}=o;return[a.switchBase,{[`& .${t.input}`]:a.input},s.color!=="default"&&a[`color${r(s.color)}`]]}})(({theme:o})=>({position:"absolute",top:0,left:0,zIndex:1,color:o.vars?o.vars.palette.Switch.defaultColor:`${o.palette.mode==="light"?o.palette.common.white:o.palette.grey[300]}`,transition:o.transitions.create(["left","transform"],{duration:o.transitions.duration.shortest}),[`&.${t.checked}`]:{transform:"translateX(20px)"},[`&.${t.disabled}`]:{color:o.vars?o.vars.palette.Switch.defaultDisabledColor:`${o.palette.mode==="light"?o.palette.grey[100]:o.palette.grey[600]}`},[`&.${t.checked} + .${t.track}`]:{opacity:.5},[`&.${t.disabled} + .${t.track}`]:{opacity:o.vars?o.vars.opacity.switchTrackDisabled:`${o.palette.mode==="light"?.12:.2}`},[`& .${t.input}`]:{left:"-100%",width:"300%"}}),({theme:o,ownerState:a})=>e({"&:hover":{backgroundColor:o.vars?`rgba(${o.vars.palette.action.activeChannel} / ${o.vars.palette.action.hoverOpacity})`:b(o.palette.action.active,o.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},a.color!=="default"&&{[`&.${t.checked}`]:{color:(o.vars||o).palette[a.color].main,"&:hover":{backgroundColor:o.vars?`rgba(${o.vars.palette[a.color].mainChannel} / ${o.vars.palette.action.hoverOpacity})`:b(o.palette[a.color].main,o.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${t.disabled}`]:{color:o.vars?o.vars.palette.Switch[`${a.color}DisabledColor`]:`${o.palette.mode==="light"?$(o.palette[a.color].main,.62):x(o.palette[a.color].main,.55)}`}},[`&.${t.checked} + .${t.track}`]:{backgroundColor:(o.vars||o).palette[a.color].main}})),O=d("span",{name:"MuiSwitch",slot:"Track",overridesResolver:(o,a)=>a.track})(({theme:o})=>({height:"100%",width:"100%",borderRadius:14/2,zIndex:-1,transition:o.transitions.create(["opacity","background-color"],{duration:o.transitions.duration.shortest}),backgroundColor:o.vars?o.vars.palette.common.onBackground:`${o.palette.mode==="light"?o.palette.common.black:o.palette.common.white}`,opacity:o.vars?o.vars.opacity.switchTrack:`${o.palette.mode==="light"?.38:.3}`})),_=d("span",{name:"MuiSwitch",slot:"Thumb",overridesResolver:(o,a)=>a.thumb})(({theme:o})=>({boxShadow:(o.vars||o).shadows[1],backgroundColor:"currentColor",width:20,height:20,borderRadius:"50%"})),D=S.forwardRef(function(a,s){const i=f({props:a,name:"MuiSwitch"}),{className:p,color:u="primary",edge:h=!1,size:g="medium",sx:v}=i,k=m(i,T),c=e({},i,{color:u,edge:h,size:g}),l=I(c),w=n.jsx(_,{className:l.thumb,ownerState:c});return n.jsxs(N,{className:z(l.root,p),sx:v,ownerState:c,children:[n.jsx(U,e({type:"checkbox",icon:w,checkedIcon:w,ref:s,ownerState:c},k,{classes:e({},l,{root:l.switchBase})})),n.jsx(O,{className:l.track,ownerState:c})]})}),L=D;export{L as M,t as s};