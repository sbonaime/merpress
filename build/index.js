!function(){"use strict";var e=window.wp.element,t=window.wp.i18n,r=window.wp.blocks,a=window.wp.blockEditor,i=window.wp.components,n=window.wp.primitives,s=(0,e.createElement)(n.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},(0,e.createElement)(n.Path,{d:"M12 9.2c-2.2 0-3.9 1.8-3.9 4s1.8 4 3.9 4 4-1.8 4-4-1.8-4-4-4zm0 6.5c-1.4 0-2.4-1.1-2.4-2.5s1.1-2.5 2.4-2.5 2.5 1.1 2.5 2.5-1.1 2.5-2.5 2.5zM20.2 8c-.1 0-.3 0-.5-.1l-2.5-.8c-.4-.1-.8-.4-1.1-.8l-1-1.5c-.4-.5-1-.9-1.7-.9h-2.9c-.6.1-1.2.4-1.6 1l-1 1.5c-.3.3-.6.6-1.1.7l-2.5.8c-.2.1-.4.1-.6.1-1 .2-1.7.9-1.7 1.9v8.3c0 1 .9 1.9 2 1.9h16c1.1 0 2-.8 2-1.9V9.9c0-1-.7-1.7-1.8-1.9zm.3 10.1c0 .2-.2.4-.5.4H4c-.3 0-.5-.2-.5-.4V9.9c0-.1.2-.3.5-.4.2 0 .5-.1.8-.2l2.5-.8c.7-.2 1.4-.6 1.8-1.3l1-1.5c.1-.1.2-.2.4-.2h2.9c.2 0 .3.1.4.2l1 1.5c.4.7 1.1 1.1 1.9 1.4l2.5.8c.3.1.6.1.8.2.3 0 .4.2.4.4v8.1z"})),o=(0,e.createElement)(n.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,e.createElement)(n.Path,{fillRule:"evenodd",d:"M10.289 4.836A1 1 0 0111.275 4h1.306a1 1 0 01.987.836l.244 1.466c.787.26 1.503.679 2.108 1.218l1.393-.522a1 1 0 011.216.437l.653 1.13a1 1 0 01-.23 1.273l-1.148.944a6.025 6.025 0 010 2.435l1.149.946a1 1 0 01.23 1.272l-.653 1.13a1 1 0 01-1.216.437l-1.394-.522c-.605.54-1.32.958-2.108 1.218l-.244 1.466a1 1 0 01-.987.836h-1.306a1 1 0 01-.986-.836l-.244-1.466a5.995 5.995 0 01-2.108-1.218l-1.394.522a1 1 0 01-1.217-.436l-.653-1.131a1 1 0 01.23-1.272l1.149-.946a6.026 6.026 0 010-2.435l-1.148-.944a1 1 0 01-.23-1.272l.653-1.131a1 1 0 011.217-.437l1.393.522a5.994 5.994 0 012.108-1.218l.244-1.466zM14.929 12a3 3 0 11-6 0 3 3 0 016 0z",clipRule:"evenodd"})),c=window.wp.data,l=window.wp.notices;const m=(0,e.createContext)({isSelected:void 0,content:void 0,svg:void 0,updateContext:()=>{}}),d=()=>(0,e.useContext)(m);function u(){const[r,a]=(0,e.useState)(!1),i=(0,e.useRef)(null),{content:n,updateContext:s}=d();return(0,e.useEffect)((()=>{!async function(){try{await window.mermaid.parse(n),a(!1),i.current?.removeAttribute("data-processed"),i.current.innerHTML=n;const e=()=>new Promise((e=>{window.mermaid.run({nodes:[i.current],postRenderCallback:()=>{const t=i.current.querySelector("svg"),{width:r,height:a}=t.getBoundingClientRect(),n=(new XMLSerializer).serializeToString(t);e({svgText:n,width:r,height:a})}})})),t=await e();s({svg:t})}catch(e){console.error(e),s({svg:{}}),a(!0)}}()}),[n,s]),(0,e.createElement)(e.Fragment,null,r&&(0,e.createElement)("div",{className:"error"},(0,t.__)("Syntax Error","merpress")),(0,e.createElement)("div",{ref:i,className:'mermaid ${error ? "mermaid-error" : "" }'}))}var g=window.wp.mediaUtils;const p=Object.freeze({NOT_SAVED:{value:0,label:"not saved"},SAVING:{value:1,label:"saving"},SAVED:{value:2,label:"saved"}}),h=Object.freeze({MERMAID:"mermaid",IMAGE:"image"});var w=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"merpress/mermaidjs","title":"MerPress","category":"formatting","icon":"chart-pie","description":"Create diagrams and flow charts using text via Mermaid","keywords":["mermaid","chart","diagram","flow","graph"],"version":"1.1.0-alpha","textdomain":"my-plugin","attributes":{"content":{"type":"string","source":"text","selector":"pre.mermaid"},"diagramSource":{"enum":["mermaid","image"],"default":"mermaid"},"imgs":{"type":"array","source":"query","selector":"img","default":[],"query":{"src":{"type":"string","source":"attribute","attribute":"src"},"width":{"type":"number","source":"attribute","attribute":"width"},"height":{"type":"number","source":"attribute","attribute":"height"}}}},"supports":{"html":false},"example":{"attributes":{"content":"graph TD\\nA--\x3eB\\n","img":{}}},"editorScript":["file:./index.js"],"editorStyle":["wp-edit-blocks"],"script":["file:./mermaid.js"],"style":["mermaid-gutenberg-block"],"viewScript":["file:./mermaid-init.js"]}'),v={attributes:{content:{type:"string",source:"text",selector:"pre.mermaid"}},save:t=>{let{attributes:{content:r}}=t;const i=a.useBlockProps.save({className:"mermaid"});return(0,e.createElement)("pre",i,r)},migrate:e=>({...e,imgs:[],diagramSource:"mermaid"}),supports:{html:!1,className:!1}},E=window.React;function b(){return b=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},b.apply(this,arguments)}(0,r.registerBlockType)(w,{description:(0,e.createElement)(e.Fragment,null,(0,e.createElement)("p",null,(0,t.__)("Create diagrams and flow charts using text via Mermaid","merpress"),"."),(0,e.createElement)("a",{href:"https://mermaid.js.org/syntax/flowchart.html"},(0,t.__)("Documentation","merpress"))),edit:function(r){let{attributes:n,setAttributes:d,isSelected:w}=r;const{content:v="",imgs:E=[],diagramSource:b=h.MERMAID}=n,[f,S]=(0,e.useState)({}),[y,M]=(0,e.useState)(p.NOT_SAVED),[_,x]=(0,e.useState)([]),{createNotice:k,removeNotice:A}=(0,c.useDispatch)(l.store),N=(0,a.useBlockProps)();(0,e.useEffect)((()=>{E.length>0?M(p.SAVED):M(p.NOT_SAVED)}),[E]),(0,e.useEffect)((()=>{b===h.IMAGE&&0===E.length&&d({diagramSource:h.MERMAID}),b===h.IMAGE?x([{id:"merpress-image-diagram",content:(0,t.__)("Using linked image. Might be out of date from diagram. (The diagram is shown here).","merpress"),status:"info",isDismissible:!1}]):x([])}),[b,E,d]);const D=e=>{e&&void 0!==e.svg&&S(e.svg),e&&void 0!==e.content&&d({content:e.content})},C={isSelected:w,content:v,svg:f,updateContext:D};return(0,e.createElement)(m.Provider,{value:C},(0,e.createElement)(a.BlockControls,null,(0,e.createElement)(i.Toolbar,null,(0,e.createElement)(i.ToolbarButton,{label:(0,t.__)("Store diagram as PNG","merpress"),icon:s,onClick:async()=>{M(p.SAVING);const e=await k("info",(0,t.__)("Saving diagram as PNG","merpress"),{type:"snackbar"});try{const r=await function(e){let{svgText:t,width:r,height:a}=e;const i="data:image/svg+xml;base64,"+btoa(unescape(encodeURIComponent(t))),n=new Image;return n.src=i,new Promise(((e,t)=>{n.onload=()=>{const t=document.createElement("canvas"),i=t.getContext("2d");t.width=2*r,t.height=2*a,i.clearRect(0,0,t.width,t.height),i.drawImage(n,0,0);const s=t.toDataURL("image/png");e(s)},n.onerror=e=>{t(e)}}))}(f),a=await async function(e){const t=await fetch(e),r=await t.blob(),a=new File([r],"merpress.png",{type:"image/png"});return new Promise(((e,t)=>{(0,g.uploadMedia)({filesList:[a],onFileChange:t=>{let[r]=t;r.id&&e(r)},onError:e=>{t(e)},allowedTypes:["image"]})}))}(r);d({imgs:[{src:a.url,width:f.width,height:f.height}]}),A(e.notice.id);const i=await k("info",(0,t.__)("Saved diagram as PNG","merpress"),{type:"snackbar"});setTimeout((()=>A(i.notice.id)),3500)}catch(e){console.log("saveImg error",e),k("error",(0,t.__)("Error saving diagram as PNG","merpress")),M(p.NOT_SAVED)}},isBusy:y===p.SAVING}),(0,e.createElement)(i.DropdownMenu,{icon:o,label:(0,t.__)("MerPress settings","merpress"),controls:[{title:(0,t.__)("Use mermaid as diagram","merpress"),isDisabled:b===h.MERMAID,onClick:()=>{d({diagramSource:h.MERMAID})}},{title:(0,t.__)("Use image as diagram","merpress"),isDisabled:b===h.IMAGE||0===E.length,onClick:()=>{d({diagramSource:h.IMAGE})}},{title:(0,t.__)("Unset saved image","merpress"),isDisabled:y===p.NOT_SAVED,onClick:()=>{d({imgs:[]})}}]}))),(0,e.createElement)("div",N,w&&(0,e.createElement)(e.Fragment,null,(0,e.createElement)("pre",{className:"mermaid-editor wp-block-code"},(0,e.createElement)(a.PlainText,{onChange:e=>{D({content:e})},value:v})),(0,e.createElement)("hr",null)),(0,e.createElement)(i.NoticeList,{notices:_}),(0,e.createElement)(u,null)))},icon:function(e){return E.createElement("svg",b({xmlns:"http://www.w3.org/2000/svg",xmlSpace:"preserve",style:{fillRule:"evenodd",clipRule:"evenodd",strokeLinejoin:"round",strokeMiterlimit:2},viewBox:"0 0 600 600"},e),E.createElement("path",{d:"M0 0h600v600H0z",style:{fill:"#fff"}}),E.createElement("path",{d:"M282 480 142 177v241c0 22 3 36 8 41 6 8 17 12 31 12h13v9H68v-9h13c15 0 26-5 32-14 4-6 6-19 6-39V182c0-16-2-27-5-35-3-5-7-9-14-12-7-4-17-6-32-6v-9h102l131 282 129-282h102v9h-12c-16 0-27 5-33 14-4 6-6 19-6 39v236c0 22 2 36 7 41 7 8 17 12 32 12h12v9H379v-9h13c15 0 26-5 32-14 4-6 6-19 6-39V177L291 480h-9Z",style:{fillRule:"nonzero"}}))},save:function(t){const{content:r,imgs:i,diagramSource:n}=t.attributes,s=a.useBlockProps.save({className:`diagram-source-${n}`});return(0,e.createElement)("div",s,(0,e.createElement)("pre",{className:"mermaid"},r),i.map(((t,r)=>(0,e.createElement)("img",{key:r,src:t.src,width:t.width,height:t.height,alt:""}))))},deprecated:[v]})}();