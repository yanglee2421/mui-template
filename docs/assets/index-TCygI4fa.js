import{R as p,j as r}from"./index-i_8Mq8d7.js";import{u as x,F as u}from"./index.esm-d8OSjBUt.js";import"./Editor-LiHX0ujO.js";import{I as h}from"./item-text-k7PEUhoX.js";import{S as j}from"./SkeletonCard-i2FP52Xo.js";import"./copy-btn-svsn-xG2.js";import{C as f,a as b,b as C}from"./CardHeader-tfAFOodb.js";import{G as e}from"./Grid-ybYN5Yb9.js";import{B as a}from"./Button-DPYJJStb.js";import"./fabric-Y98Y_bQ5.js";import"./index-9djbFzGf.js";import"./TextField-Pf3rFH9u.js";import"./ButtonBase-uYhudd6L.js";import"./OutlinedInput-nUsPaK_9.js";import"./useTheme-VwSl1BVx.js";import"./Modal-ipA_bDCo.js";import"./Backdrop-G__DNy5w.js";import"./utils-7yFeARfI.js";import"./Transition-UBzSWZPO.js";import"./ownerDocument-bIJBxlvi.js";import"./ownerWindow-LT9-6hbI.js";import"./Portal-LD8s9PHd.js";import"./isHostComponent-jcd54X0C.js";import"./Paper-tGdyCpXi.js";import"./Grow-yYZAvTr1.js";import"./List-nobJWEIZ.js";import"./ListContext-pdE1xoU7.js";import"./useFormControl-aryFfixP.js";import"./TextareaAutosize-Q1_8JLEV.js";import"./isMuiElement-m5dDChx8.js";import"./useControlled-Kod5jKxW.js";import"./createSvgIcon-1v6nwHji.js";import"./Skeleton-hJ6YfT-P.js";import"./Tooltip-pqq4A8Gm.js";import"./Popper-Q1bNnGRX.js";import"./IconButton-k9acBlzF.js";import"./Typography-A230U9pa.js";import"./extendSxProp-s9h8BPvy.js";function er(){const m=x({defaultValues:{goals:""}}),[s,n]=p.useState([]),l=m.handleSubmit(t=>{const o=t.goals||crypto.randomUUID();n(i=>Array.from(new Set([...i,o])))}),c=p.useMemo(()=>s.map(t=>{const o=()=>{n(i=>i.filter(d=>t!==d))};return r.jsxs("li",{children:[r.jsx("button",{onClick:o,children:"delete"}),t]},t)}),[s]);return r.jsx(r.Fragment,{children:r.jsxs(f,{children:[r.jsx(b,{title:"Scrollbar Component"}),r.jsx(C,{children:r.jsxs(e,{container:!0,spacing:3,children:[r.jsx(e,{item:!0,xs:12,children:r.jsx("form",{onSubmit:l,children:r.jsxs(u,{...m,children:[r.jsx(h,{name:"goals",sx:{mb:2}}),r.jsx(a,{type:"submit",variant:"contained",sx:{mr:3},children:"add"}),r.jsx(a,{type:"reset",variant:"outlined",children:"reset"})]})})}),r.jsx(e,{item:!0,xs:12,maxHeight:200,children:r.jsx(j,{children:r.jsx("ul",{children:c})})})]})})]})})}export{er as Component};