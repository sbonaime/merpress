(()=>{"use strict";const e=window.wp.element,t=window.wp.blockEditor,r=window.wp.blocks,n=window.wp.i18n;function a(t){const{content:r}=t,[a,i]=(0,e.useState)(!1),s=(0,e.useRef)(null);return(0,e.useEffect)((()=>{try{mermaid.parse(r),i(!1),s.current.removeAttribute("data-processed"),s.current.innerHTML=r,mermaid.init(void 0,s.current)}catch(e){i(!0)}}),[r]),(0,e.createElement)(e.Fragment,null,a&&(0,e.createElement)("div",{className:"error"},(0,n.__)("Syntax Error","merpress")),(0,e.createElement)("div",{ref:s,className:'mermaid ${error ? "mermaid-error" : "" }'}))}const i=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"merpress/mermaidjs","title":"MermaidJS","category":"formatting","icon":"chart-pie","description":"Create diagrams and flow charts using text via Mermaid","keywords":["mermaid","chart","diagram","flow","graph"],"version":"1.0.10-pre","textdomain":"my-plugin","attributes":{"content":{"type":"string","source":"text","selector":"pre.mermaid"}},"supports":{"className":false,"html":false},"example":{"attributes":{"content":"graph TD\\nA--\x3eB\\n"}},"editorScript":["file:./index.js"],"editorStyle":["wp-edit-blocks"],"script":["mermaid"],"style":["mermaid-gutenberg-block"],"viewScript":["mermaid-init"]}');(0,r.registerBlockType)(i,{edit:function(r){const{content:n=""}=r.attributes,i=(0,t.useBlockProps)();return(0,e.createElement)("div",i,r.isSelected&&(0,e.createElement)(e.Fragment,null,(0,e.createElement)("pre",{className:"mermaid-editor wp-block-code"},(0,e.createElement)(t.PlainText,{onChange:function(e){r.setAttributes({content:e})},value:n})),(0,e.createElement)("hr",null)),(0,e.createElement)(a,{content:n}))},save:function(r){const n=t.useBlockProps.save({className:"mermaid"});return(0,e.createElement)("pre",n,r.attributes.content)}})})();