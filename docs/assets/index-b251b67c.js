import{R as d,j as t}from"./index-0afd6b54.js";import{M as l}from"./Switch-6be422dd.js";import{B as m}from"./Box-b6eeceec.js";import{T as u}from"./Transition-b01d1c81.js";import"./ButtonBase-24bd0105.js";import"./SwitchBase-c39370c6.js";import"./useFormControl-c9008039.js";import"./useControlled-c3823dea.js";import"./extendSxProp-94fbb32b.js";const i=new Map;i.set("entering",{transition:"ease-in-out .3s",transform:"rotateY(0)"});i.set("entered",{transform:"rotateY(0)"});i.set("exiting",{transition:"ease-in-out .3s",transform:"rotateY(180deg)"});i.set("exited",{transform:"rotateY(180deg)"});const r=new Map;r.set("entering",{transition:"ease-in-out .3s",transform:"rotateY(0)"});r.set("entered",{transform:"rotateY(0)"});r.set("exiting",{transition:"ease-in-out .3s",transform:"rotateY(-180deg)"});r.set("exited",{transform:"rotateY(-180deg)"});function w(){const[s,c]=d.useState(!1),o=d.useRef(null),a=d.useRef(null);return t.jsxs(t.Fragment,{children:[t.jsx(l,{checked:s,onChange:(e,n)=>{c(n)}}),t.jsxs(m,{position:"relative",overflow:"hidden",border:"1px red dashed",width:300,height:300,marginTop:3,textAlign:"center",children:[t.jsx(u,{nodeRef:o,addEndListener:e=>{var n;(n=o.current)==null||n.addEventListener("transitionend",e)},in:s,children:e=>(console.log(e),t.jsx(m,{ref:o,sx:{inset:0,backfaceVisibility:"hidden",...i.get(e)},position:"absolute",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quod debitis rem omnis quia temporibus sapiente atque doloribus, ullam aliquid totam. Id consequuntur rerum voluptate similique ea sed maiores optio!"}))}),t.jsx(u,{nodeRef:a,addEndListener:e=>{var n;(n=a.current)==null||n.addEventListener("transitionend",e)},in:!s,children:e=>t.jsx(m,{ref:a,position:"absolute",sx:{inset:0,backfaceVisibility:"hidden",transform:"rotateY(-180deg)",...r.get(e)},children:"back"})})]})]})}export{w as Component};
