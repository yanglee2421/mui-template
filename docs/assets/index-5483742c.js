import{R as a,j as r}from"./index-0afd6b54.js";import{c as x,F as u,I as h}from"./item-text-ff6a5f11.js";import{S as j}from"./copy-btn-845c88de.js";import{C as f}from"./Card-4ff890f4.js";import{C}from"./CardHeader-55f020d0.js";import{C as b}from"./CardContent-3a2b0946.js";import{G as i}from"./Grid-e279cd85.js";import{B as l}from"./Button-44e1831c.js";import"./TextField-ef65984e.js";import"./ButtonBase-24bd0105.js";import"./InputLabel-b4b33e76.js";import"./Select-e1d093a0.js";import"./useTheme-eae046ad.js";import"./List-75adcc94.js";import"./Transition-b01d1c81.js";import"./Paper-94171368.js";import"./ListContext-ef6e6112.js";import"./Grow-7fa272d0.js";import"./useControlled-c3823dea.js";import"./useFormControl-c9008039.js";import"./createSvgIcon-6778d15e.js";import"./TextareaAutosize-f4329c4d.js";import"./isMuiElement-0f6f864d.js";import"./Drawer-d2776dff.js";import"./IconButton-0c133bda.js";import"./Typography-01e59217.js";import"./extendSxProp-94fbb32b.js";function Q(){const s=x({defaultValues:{goals:""}}),[m,n]=a.useState([]),p=s.handleSubmit(t=>{const o=t.goals||crypto.randomUUID();n(e=>Array.from(new Set([...e,o])))}),c=a.useMemo(()=>m.map(t=>{const o=()=>{n(e=>e.filter(d=>t!==d))};return r.jsxs("li",{children:[r.jsx("button",{onClick:o,children:"delete"}),t]},t)}),[m]);return r.jsx(r.Fragment,{children:r.jsxs(f,{children:[r.jsx(C,{title:"Scrollbar Component"}),r.jsx(b,{children:r.jsxs(i,{container:!0,spacing:3,children:[r.jsx(i,{item:!0,xs:12,children:r.jsx("form",{onSubmit:p,children:r.jsxs(u,{...s,children:[r.jsx(h,{name:"goals",sx:{mb:2}}),r.jsx(l,{type:"submit",variant:"contained",sx:{mr:3},children:"add"}),r.jsx(l,{type:"reset",variant:"outlined",children:"reset"})]})})}),r.jsx(i,{item:!0,xs:12,maxHeight:200,children:r.jsx(j,{children:r.jsx("ul",{children:c})})})]})})]})})}export{Q as Component};
