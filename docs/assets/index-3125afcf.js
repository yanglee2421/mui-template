import{j as e,J as o}from"./index-e8b98d12.js";import{_ as a}from"./react-apexcharts.min-5884a9e5.js";import{u as i}from"./useTheme-c908181f.js";import{C as l}from"./Card-ae57f793.js";import{C as n}from"./CardHeader-9b22f6f9.js";import{B as t}from"./Box-9cab8394.js";import{T as d}from"./Typography-1316f8d7.js";import{C as c}from"./Chip-e86bd062.js";import{c as p}from"./createSvgIcon-a8638656.js";import{C as m}from"./CardContent-204273ba.js";import"./index-eaf93a5d.js";import"./ButtonBase-2b81ec0a.js";import"./Paper-ec90ae18.js";import"./extendSxProp-efd8908c.js";const f=p(e.jsx("path",{d:"m4 12 1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"}),"ArrowUpwardOutlined");function S(){const r=i();return e.jsx(e.Fragment,{children:e.jsxs(l,{sx:{m:4,"& .bar-chart":{padding:r.spacing(2,2.5)}},children:[e.jsx(n,{title:"Balance",subheader:"Commercial networks & enterprises",sx:{flexDirection:["column","row"],alignItems:["flex-start","center"],"& .MuiCardHeader-action":{mb:0},"& .MuiCardHeader-content":{mb:[2,0]}},action:e.jsxs(t,{display:"flex",alignItems:"center",children:[e.jsx(d,{variant:"h6",marginRight:5,children:"$221,267"}),e.jsx(c,{color:"success",variant:"filled",label:e.jsxs(t,{display:"flex",alignSelf:"center",sx:{"& svg":{mr:1}},children:[e.jsx(f,{fontSize:"small"}),e.jsx("span",{children:"22%"})]}),sx:{fontWeight:500,borderRadius:1,fontSize:"0.875rem"}})]})}),e.jsx(m,{children:e.jsx(a,{type:"line",height:400,series:x(),options:h(r)})})]})})}function x(){return[{data:[280,200,220,180,270,250,70,90,200,150,160,100,150,100,50]},{data:[120,500,320,89,159,170,170,190,100,140,250,100,159,120,150]}]}function h(r){return{chart:{parentHeightOffset:0,zoom:{enabled:!1},toolbar:{show:!1}},colors:["#ff9f43",o[500]],stroke:{curve:"straight"},dataLabels:{enabled:!1},markers:{strokeWidth:7,strokeOpacity:1,colors:["#ff9f43"],strokeColors:["#fff","#eee"]},grid:{padding:{top:-10},borderColor:r.palette.divider,xaxis:{lines:{show:!0}}},tooltip:{custom(s){return`<div class='bar-chart'>
              <span>${s.series[s.seriesIndex][s.dataPointIndex]}%</span>
            </div>`}},yaxis:{labels:{style:{colors:r.palette.text.disabled}}},xaxis:{axisBorder:{show:!1},axisTicks:{color:r.palette.divider},crosshairs:{stroke:{color:r.palette.divider}},labels:{style:{colors:r.palette.text.disabled}},categories:["2023-7/12","2023-8/12","2023-9/12","2023-10/12","2023-11/12","2023-12/12","2023-13/12","2023-14/12","2023-15/12","2023-16/12","2023-17/12","2023-18/12","2023-19/12","2023-20/12","2023-21/12"]}}}export{S as Component};