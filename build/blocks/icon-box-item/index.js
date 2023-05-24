!function(){"use strict";var e,t={140:function(e,t,l){var n={};l.r(n),l.d(n,{GRID_COLUMNS:function(){return m}});var a={};l.r(a),l.d(a,{ResRangleControl:function(){return p}});var r={};l.r(r),l.d(r,{generateResRangleControlAttributes:function(){return v}});var o=window.wp.blocks,c=JSON.parse('{"apiVersion":2,"name":"bdt/icon-box-item","version":"0.1.0","title":"icon box item","category":"advanced-icon-box","description":"Advanced icon box.","parent":["bdt/advanced-icon-box"],"supports":{"html":false,"anchor":true},"textdomain":"advanced-icon-box","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css"}'),i=window.wp.element,s=window.wp.i18n,b=window.wp.blockEditor,d=window.wp.components;const m="gridColumns";var u=window.wp.data,g=e=>{let{resMode:t,setAttributes:l}=e;return(0,i.createElement)("div",{className:"res-btn"},(0,i.createElement)(d.Button,{variant:"Desktop"===t?"primary":"secondary",onClick:()=>{l({resMode:"Desktop"}),(0,u.dispatch)("core/edit-post").__experimentalSetPreviewDeviceType("Desktop")},icon:"desktop",title:"Desktop"}),(0,i.createElement)(d.Button,{variant:"Tablet"===t?"primary":"secondary",onClick:()=>{l({resMode:"Tablet"}),(0,u.dispatch)("core/edit-post").__experimentalSetPreviewDeviceType("Tablet")},icon:"tablet",title:"Tablet"}),(0,i.createElement)(d.Button,{variant:"Mobile"===t?"primary":"secondary",onClick:()=>{l({resMode:"Mobile"}),(0,u.dispatch)("core/edit-post").__experimentalSetPreviewDeviceType("Mobile")},icon:"smartphone",title:"Mobile"}))},p=e=>{let{label:t,controlName:l,objAttrs:n,noUnits:a,units:r,min:o,max:c}=e;const{attributes:s,setAttributes:b}=n,{resMode:m}=s,{[`${l}DeskRange`]:u,[`${l}TabRange`]:p,[`${l}MobRange`]:v}=s;return r||(r=r||["px","%"]),(0,i.createElement)("div",{className:"bdt-res-rangle-control"},(0,i.createElement)(d.Flex,{align:"flex-start"},(0,i.createElement)(d.FlexItem,null,(0,i.createElement)(d.BaseControl,{id:"res-label",label:t},(0,i.createElement)(g,{resMode:m,setAttributes:b}))),(0,i.createElement)(d.FlexItem,null,!a&&(0,i.createElement)("div",{className:"units-wrapper"},r&&r.map(((e,t)=>(0,i.createElement)("div",{className:"single-unit",key:t},e)))))),(0,i.createElement)("div",{className:"res-controls"},"Desktop"===m&&(0,i.createElement)("div",{className:"single-rangle"},(0,i.createElement)(d.RangeControl,{value:u,onChange:e=>b({[`${l}DeskRange`]:e}),min:o,max:c})),"Tablet"===m&&(0,i.createElement)("div",{className:"single-rangle"},(0,i.createElement)(d.RangeControl,{value:p,onChange:e=>b({[`${l}TabRange`]:e}),min:o,max:c})),"Mobile"===m&&(0,i.createElement)("div",{className:"single-rangle"},(0,i.createElement)(d.RangeControl,{value:v,onChange:e=>b({[`${l}MobRange`]:e}),min:o,max:c}))))};const v=e=>{let{controlName:t,defaults:l={}}=e;const{[`${t}DeskRange`]:n,[`${t}TabRange`]:a,[`${t}MobRange`]:r}=l;return{[`${t}DeskRange`]:{type:"number",default:n},[`${t}TabRange`]:{type:"number",default:a},[`${t}MobRange`]:{type:"number",default:r}}},{generateResRangleControlAttributes:h}=r,{GRID_COLUMNS:E}=n;var f={uniqueId:{type:"string"},blockStyle:{type:"object"},title:{type:"string"},headingTag:{type:"string"},contentTag:{type:"string"},titleColor:{type:"string"},description:{type:"string"},descColor:{type:"string"},alignment:{type:"string"},btnLinkObj:{type:"object"},btnLabel:{type:"string",default:"Button"},btnLink:{type:"string"},btnTarget:{type:"string"},btnbgcolor:{type:"string",default:"#ec0707"},btncolor:{type:"string",default:"#ec0707"},...h({controlName:E,defaults:{[`${E}DeskRange`]:3,[`${E}TabRange`]:2,[`${E}MobRange`]:1}})};const{ResRangleControl:C}=a,{GRID_COLUMNS:w}=n;var y=e=>{let{attributes:t,setAttributes:l}=e;const{titleColor:n,descColor:a,headingTag:r,contentTag:o,alignment:c,btnLabel:m,btnLink:u,btnTarget:g,btnbgcolor:p,btncolor:v,btnLinkObj:h}=t,E={attributes:t,setAttributes:l,objAttributes:f};return console.log(h),(0,i.createElement)(b.InspectorControls,null,(0,i.createElement)(d.PanelBody,{title:(0,s.__)("Column Settings","bdt-blocks")},(0,i.createElement)(C,{label:(0,s.__)("Grid Columns","bdt-blocks"),controlName:w,objAttrs:E,noUnits:!1,min:1,max:4})),(0,i.createElement)(d.PanelBody,{title:"Alignment Icon",initialOpen:!1},(0,i.createElement)(d.SelectControl,{label:"Alignment",value:c,__nextHasNoMarginBottom:!0,options:[{label:"left",value:"left"},{label:"center",value:"center"},{label:"rignt",value:"right"}],onChange:e=>{l({alignment:e})}})),(0,i.createElement)(d.PanelBody,{title:"Title Tag",initialOpen:!1},(0,i.createElement)(d.SelectControl,{label:"HEADING TAG",value:r,options:[{label:"h1",value:"h1"},{label:"h2",value:"h2"},{label:"h3",value:"h3"},{label:"h4",value:"h4"},{label:"h5",value:"h5"},{label:"h6",value:"h6"}],onChange:e=>{l({headingTag:e})}})),(0,i.createElement)(d.PanelBody,{title:"Content Tag",initialOpen:!1},(0,i.createElement)(d.SelectControl,{label:"CONTENT TAG",value:o,options:[{label:"p",value:"p"},{label:"span",value:"span"},{label:"div",value:"div"},{label:"h1",value:"h1"}],onChange:e=>{l({contentTag:e})}})),(0,i.createElement)(d.PanelBody,{title:"Button Settings",initialOpen:!1},(0,i.createElement)(d.TextControl,{label:(0,s.__)("Button Label","bdt-blocks"),value:m,onChange:e=>l({btnLabel:e})}),(0,i.createElement)(b.__experimentalLinkControl,{searchInputPlaceholder:"Search here...",value:h,settings:[{id:"openInNewTab",title:"Open in new tab?"}],onChange:e=>l({btnLinkObj:e})}),(0,i.createElement)(d.TextControl,{label:"Button Link",value:u,onChange:e=>l({btnLink:e})}),(0,i.createElement)(d.RadioControl,{label:"Target Tab",help:`The type of the current Tab ${g}`,selected:g,options:[{label:"New Tab",value:"_blank"},{label:"Self Tab",value:"_self"}],onChange:e=>{l({btnTarget:e})}}),(0,i.createElement)(d.CardDivider,null),(0,i.createElement)("h2",null,"Button Bg Color"),(0,i.createElement)(d.ColorPalette,{colors:[{name:"red",color:"#f00"},{name:"white",color:"#fff"},{name:"blue",color:"#00f"}],value:p,onChange:e=>l({btnbgcolor:e})}),(0,i.createElement)("h2",null,"Button Text Color"),(0,i.createElement)(d.ColorPalette,{colors:[{name:"red",color:"#f00"},{name:"white",color:"#fff"},{name:"blue",color:"#00f"}],value:v,onChange:e=>l({btncolor:e})})),(0,i.createElement)(b.PanelColorSettings,{title:(0,s.__)("Color Settings","bdt-blocks"),initialOpen:!1,colorSettings:[{value:n,onChange:e=>l({titleColor:e}),label:(0,s.__)("Title Color","bdt-blocks")},{value:a,onChange:e=>l({descColor:e}),label:(0,s.__)("Description Color","bdt-blocks")}]}))};const{Fragment:x,useEffect:T}=wp.element;(0,o.registerBlockType)(c,{icon:{src:"welcome-view-site"},attributes:f,edit:function(e){let{attributes:t,setAttributes:l,clientId:n}=e;const{uniqueId:a,blockStyle:r,title:o,titleColor:c,description:d,descColor:m,headingTag:u,contentTag:g,btnLabel:p,btnLink:v,btnTarget:h,alignment:E,btnbgcolor:f,btncolor:C,btnLinkObj:w}=t;T((()=>{a||l({uniqueId:`bdt-blocks-${n.slice(0,8)}`})}),[]);const N=`\n\t\t\n\t \t.${a} .bdt-title {\n\t\t\tcolor: ${c};\n\t\t }\n\t \t.${a} .bdt-desc {\n\t\t\t color: ${m};\n\t\t\n\t\t }\n\t\t\t.${a} .bdt-icon-wrap {\n\t\t\t text-align: ${E};\n\t\t\n\t\t }\n\t\t .${a} .bdt-advanced-icon-box .bdt-item:hover .bdt-link-btn a{\n\t\t\tcolor: ${C};\n\t \t\tbackground-color: ${f};\n\t\t }\n\n\n\t\n\t\t@media (max-width: 1024px) and (min-width: 768px) {\n\t\t\t\n\t\t}\n\t\t@media (max-width: 767px) {\n\t\t\t\n\t\t}\n\t`;return T((()=>{JSON.stringify(r)!==JSON.stringify(N)&&l({blockStyle:N})}),[t]),(0,i.createElement)(x,null,(0,i.createElement)("style",null,`${function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:" ").replace(/\s+/g," ").replace(/\.zb\-[\w\-\s\.\,\:\>\(\)\d\+\[\]\#\>]+\{[\s]+\}/g,"")}(N)}`),(0,i.createElement)(y,{attributes:t,setAttributes:l}),(0,i.createElement)("div",(0,b.useBlockProps)({className:a}),(0,i.createElement)("div",{className:"bdt-container"},(0,i.createElement)("div",{className:"bdt-advanced-icon-box bdt-avnaced-icon-box-style-1"},(0,i.createElement)("div",{className:"bdt-item"},(0,i.createElement)("div",{className:"bdt-icon-wrap"},(0,i.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",width:16,height:16,fill:"currentColor",className:"bi bi-gear",viewBox:"0 0 16 16"},(0,i.createElement)("path",{d:"M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z"}),(0,i.createElement)("path",{d:"M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z"}))),(0,i.createElement)("div",{className:"bdt-body-content"},(0,i.createElement)("div",{className:"bdt-title"},(0,i.createElement)(b.RichText,{tagName:u,value:o,placeholder:"Title",onChange:e=>l({title:e})})),(0,i.createElement)("div",{className:"bdt-desc"},(0,i.createElement)(b.RichText,{tagName:g,value:d,placeholder:"Description Here",onChange:e=>l({description:e})})),(0,i.createElement)("div",{className:"bdt-link-btn"},(0,i.createElement)(b.RichText,{tagName:"span",value:p,onChange:e=>l({btnLabel:e}),placeholder:(0,s.__)("Button Label","text-domain")}))),(0,i.createElement)("div",{className:"bdt-hover-icon"},(0,i.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",width:16,height:16,fill:"currentColor",className:"bi bi-gear",viewBox:"0 0 16 16"},(0,i.createElement)("path",{d:"M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z"}),(0,i.createElement)("path",{d:"M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z"}))))))))},save:function(e){let{attributes:t}=e;const{uniqueId:l,title:n,description:a,headingTag:r,contentTag:o,btnLabel:c,btnLink:s,btnTarget:d,btnLinkObj:m}=t;return(0,i.createElement)(i.Fragment,null,(0,i.createElement)("div",b.useBlockProps.save({className:`${l}`}),(0,i.createElement)("div",{className:"bdt-container"},(0,i.createElement)("div",{className:"bdt-advanced-icon-box bdt-avnaced-icon-box-style-1"},(0,i.createElement)("div",{className:"bdt-item"},(0,i.createElement)("div",{className:"bdt-icon-wrap"},(0,i.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",width:16,height:16,fill:"currentColor",className:"bi bi-gear",viewBox:"0 0 16 16"},(0,i.createElement)("path",{d:"M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z"}),(0,i.createElement)("path",{d:"M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z"}))),(0,i.createElement)("div",{className:"bdt-body-content"},(0,i.createElement)("div",{className:"bdt-title"},(0,i.createElement)(b.RichText.Content,{tagName:r,value:n})),(0,i.createElement)("div",{className:"bdt-desc"},(0,i.createElement)(b.RichText.Content,{tagName:o,value:a})),m&&m.url&&(0,i.createElement)("div",{className:"bdt-link-btn"},(0,i.createElement)("a",{href:m&&m.url&&m.url,target:m&&m.openInNewTab&&"_blank",rel:m&&m.openInNewTab?"noopener noreferrer":"noopener"},(0,i.createElement)(b.RichText.Content,{value:c})))),(0,i.createElement)("div",{className:"bdt-hover-icon"},(0,i.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",width:16,height:16,fill:"currentColor",className:"bi bi-gear",viewBox:"0 0 16 16"},(0,i.createElement)("path",{d:"M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z"}),(0,i.createElement)("path",{d:"M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z"}))))))))}})}},l={};function n(e){var a=l[e];if(void 0!==a)return a.exports;var r=l[e]={exports:{}};return t[e](r,r.exports,n),r.exports}n.m=t,e=[],n.O=function(t,l,a,r){if(!l){var o=1/0;for(b=0;b<e.length;b++){l=e[b][0],a=e[b][1],r=e[b][2];for(var c=!0,i=0;i<l.length;i++)(!1&r||o>=r)&&Object.keys(n.O).every((function(e){return n.O[e](l[i])}))?l.splice(i--,1):(c=!1,r<o&&(o=r));if(c){e.splice(b--,1);var s=a();void 0!==s&&(t=s)}}return t}r=r||0;for(var b=e.length;b>0&&e[b-1][2]>r;b--)e[b]=e[b-1];e[b]=[l,a,r]},n.d=function(e,t){for(var l in t)n.o(t,l)&&!n.o(e,l)&&Object.defineProperty(e,l,{enumerable:!0,get:t[l]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},function(){var e={638:0,667:0};n.O.j=function(t){return 0===e[t]};var t=function(t,l){var a,r,o=l[0],c=l[1],i=l[2],s=0;if(o.some((function(t){return 0!==e[t]}))){for(a in c)n.o(c,a)&&(n.m[a]=c[a]);if(i)var b=i(n)}for(t&&t(l);s<o.length;s++)r=o[s],n.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return n.O(b)},l=self.webpackChunkgutenberg_boilerplate=self.webpackChunkgutenberg_boilerplate||[];l.forEach(t.bind(null,0)),l.push=t.bind(null,l.push.bind(l))}();var a=n.O(void 0,[667],(function(){return n(140)}));a=n.O(a)}();