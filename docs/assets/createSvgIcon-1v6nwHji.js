import{q as v,r as g,f as I,i as C,_ as f,j as S}from"./index-i_8Mq8d7.js";import{g as R,a as w,s as b,c as j,b as N}from"./ButtonBase-uYhudd6L.js";function A(o){return R("MuiSvgIcon",o)}w("MuiSvgIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);const B=["children","className","color","component","fontSize","htmlColor","inheritViewBox","titleAccess","viewBox"],M=o=>{const{color:e,fontSize:t,classes:n}=o,i={root:["root",e!=="inherit"&&`color${v(e)}`,`fontSize${v(t)}`]};return N(i,A,n)},T=b("svg",{name:"MuiSvgIcon",slot:"Root",overridesResolver:(o,e)=>{const{ownerState:t}=o;return[e.root,t.color!=="inherit"&&e[`color${v(t.color)}`],e[`fontSize${v(t.fontSize)}`]]}})(({theme:o,ownerState:e})=>{var t,n,i,p,m,a,h,u,d,r,s,c,l;return{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:e.hasSvgAsChild?void 0:"currentColor",flexShrink:0,transition:(t=o.transitions)==null||(n=t.create)==null?void 0:n.call(t,"fill",{duration:(i=o.transitions)==null||(i=i.duration)==null?void 0:i.shorter}),fontSize:{inherit:"inherit",small:((p=o.typography)==null||(m=p.pxToRem)==null?void 0:m.call(p,20))||"1.25rem",medium:((a=o.typography)==null||(h=a.pxToRem)==null?void 0:h.call(a,24))||"1.5rem",large:((u=o.typography)==null||(d=u.pxToRem)==null?void 0:d.call(u,35))||"2.1875rem"}[e.fontSize],color:(r=(s=(o.vars||o).palette)==null||(s=s[e.color])==null?void 0:s.main)!=null?r:{action:(c=(o.vars||o).palette)==null||(c=c.action)==null?void 0:c.active,disabled:(l=(o.vars||o).palette)==null||(l=l.action)==null?void 0:l.disabled,inherit:void 0}[e.color]}}),_=g.forwardRef(function(e,t){const n=I({props:e,name:"MuiSvgIcon"}),{children:i,className:p,color:m="inherit",component:a="svg",fontSize:h="medium",htmlColor:u,inheritViewBox:d=!1,titleAccess:r,viewBox:s="0 0 24 24"}=n,c=C(n,B),l=g.isValidElement(i)&&i.type==="svg",y=f({},n,{color:m,component:a,fontSize:h,instanceFontSize:e.fontSize,inheritViewBox:d,viewBox:s,hasSvgAsChild:l}),x={};d||(x.viewBox=s);const z=M(y);return S.jsxs(T,f({as:a,className:j(z.root,p),focusable:"false",color:u,"aria-hidden":r?void 0:!0,role:r?"img":void 0,ref:t},x,c,l&&i.props,{ownerState:y,children:[l?i.props.children:i,r?S.jsx("title",{children:r}):null]}))});_.muiName="SvgIcon";const $=_;function V(o,e){function t(n,i){return S.jsx($,f({"data-testid":`${e}Icon`,ref:i},n,{children:o}))}return t.muiName=$.muiName,g.memo(g.forwardRef(t))}export{V as c};