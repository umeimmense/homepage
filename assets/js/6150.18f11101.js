(self.webpackChunkhomepage=self.webpackChunkhomepage||[]).push([[6150],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return p}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=s(n),p=a,f=d["".concat(i,".").concat(p)]||d[p]||m[p]||o;return n?r.createElement(f,l(l({ref:t},u),{},{components:n})):r.createElement(f,l({ref:t},u))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4881:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var r=n(7294),a=n(5999),o=n(5281),l=n(3117),c=n(4334),i="iconEdit_Z9Sw";function s(e){let{className:t,...n}=e;return r.createElement("svg",(0,l.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,c.Z)(i,t),"aria-hidden":"true"},n),r.createElement("g",null,r.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}function u(e){let{editUrl:t}=e;return r.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:o.k.common.editThisPage},r.createElement(s,null),r.createElement(a.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},2503:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var r=n(3117),a=n(7294),o=n(4334),l=n(5999),c=n(6668),i="anchorWithStickyNavbar_LWe7",s="anchorWithHideOnScrollNavbar_WYt5";function u(e){let{as:t,id:n,...u}=e;const{navbar:{hideOnScroll:m}}=(0,c.L)();return"h1"!==t&&n?a.createElement(t,(0,r.Z)({},u,{className:(0,o.Z)("anchor",m?s:i),id:n}),u.children,a.createElement("a",{className:"hash-link",href:`#${n}`,title:(0,l.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):a.createElement(t,(0,r.Z)({},u,{id:void 0}))}},9588:function(e,t,n){"use strict";n.d(t,{Z:function(){return be}});var r=n(7294),a=n(3905),o=n(3117),l=n(5742);var c=n(2389),i=n(4334),s=n(2949),u=n(6668);function m(){const{prism:e}=(0,u.L)(),{colorMode:t}=(0,s.I)(),n=e.theme,r=e.darkTheme||n;return"dark"===t?r:n}var d=n(5281),p=n(7594),f=n.n(p);const h=/title=(?<quote>["'])(?<title>.*?)\1/,g=/\{(?<range>[\d,-]+)\}/,v={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},bash:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}};function y(e,t){const n=e.map((e=>{const{start:n,end:r}=v[e];return`(?:${n}\\s*(${t.flatMap((e=>{var t,n;return[e.line,null==(t=e.block)?void 0:t.start,null==(n=e.block)?void 0:n.end].filter(Boolean)})).join("|")})\\s*${r})`})).join("|");return new RegExp(`^\\s*(?:${n})\\s*$`)}function b(e,t){let n=e.replace(/\n$/,"");const{language:r,magicComments:a,metastring:o}=t;if(o&&g.test(o)){const e=o.match(g).groups.range;if(0===a.length)throw new Error(`A highlight range has been given in code block's metastring (\`\`\` ${o}), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.`);const t=a[0].className,r=f()(e).filter((e=>e>0)).map((e=>[e-1,[t]]));return{lineClassNames:Object.fromEntries(r),code:n}}if(void 0===r)return{lineClassNames:{},code:n};const l=function(e,t){switch(e){case"js":case"javascript":case"ts":case"typescript":return y(["js","jsBlock"],t);case"jsx":case"tsx":return y(["js","jsBlock","jsx"],t);case"html":return y(["js","jsBlock","html"],t);case"python":case"py":case"bash":return y(["bash"],t);case"markdown":case"md":return y(["html","jsx","bash"],t);default:return y(Object.keys(v),t)}}(r,a),c=n.split("\n"),i=Object.fromEntries(a.map((e=>[e.className,{start:0,range:""}]))),s=Object.fromEntries(a.filter((e=>e.line)).map((e=>{let{className:t,line:n}=e;return[n,t]}))),u=Object.fromEntries(a.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.start,t]}))),m=Object.fromEntries(a.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.end,t]})));for(let p=0;p<c.length;){const e=c[p].match(l);if(!e){p+=1;continue}const t=e.slice(1).find((e=>void 0!==e));s[t]?i[s[t]].range+=`${p},`:u[t]?i[u[t]].start=p:m[t]&&(i[m[t]].range+=`${i[m[t]].start}-${p-1},`),c.splice(p,1)}n=c.join("\n");const d={};return Object.entries(i).forEach((e=>{let[t,{range:n}]=e;f()(n).forEach((e=>{d[e]??=[],d[e].push(t)}))})),{lineClassNames:d,code:n}}var E="codeBlockContainer_Ckt0";function k(e){let{as:t,...n}=e;const a=function(e){const t={color:"--prism-color",backgroundColor:"--prism-background-color"},n={};return Object.entries(e.plain).forEach((e=>{let[r,a]=e;const o=t[r];o&&"string"==typeof a&&(n[o]=a)})),n}(m());return r.createElement(t,(0,o.Z)({},n,{style:a,className:(0,i.Z)(n.className,E,d.k.common.codeBlock)}))}var N={codeBlockContent:"codeBlockContent_biex",codeBlockTitle:"codeBlockTitle_Ktv7",codeBlock:"codeBlock_bY9V",codeBlockStandalone:"codeBlockStandalone_MEMb",codeBlockLines:"codeBlockLines_e6Vv",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_o6Pm",buttonGroup:"buttonGroup__atx"};function C(e){let{children:t,className:n}=e;return r.createElement(k,{as:"pre",tabIndex:0,className:(0,i.Z)(N.codeBlockStandalone,"thin-scrollbar",n)},r.createElement("code",{className:N.codeBlockLines},t))}var w=n(902);const T={attributes:!0,characterData:!0,childList:!0,subtree:!0};function Z(e,t){const[n,a]=(0,r.useState)(),o=(0,r.useCallback)((()=>{var t;a(null==(t=e.current)?void 0:t.closest("[role=tabpanel][hidden]"))}),[e,a]);(0,r.useEffect)((()=>{o()}),[o]),function(e,t,n){void 0===n&&(n=T);const a=(0,w.zX)(t),o=(0,w.Ql)(n);(0,r.useEffect)((()=>{const t=new MutationObserver(a);return e&&t.observe(e,o),()=>t.disconnect()}),[e,a,o])}(n,(e=>{e.forEach((e=>{"attributes"===e.type&&"hidden"===e.attributeName&&(t(),o())}))}),{attributes:!0,characterData:!1,childList:!1,subtree:!1})}var B={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","atrule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},j={Prism:n(1205).Z,theme:B};function _(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function L(){return L=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},L.apply(this,arguments)}var x=/\r\n|\r|\n/,O=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},S=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},P=function(e,t){var n=e.plain,r=Object.create(null),a=e.styles.reduce((function(e,n){var r=n.languages,a=n.style;return r&&!r.includes(t)||n.types.forEach((function(t){var n=L({},e[t],a);e[t]=n})),e}),r);return a.root=n,a.plain=L({},n,{backgroundColor:null}),a};function z(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}var A=function(e){function t(){for(var t=this,n=[],r=arguments.length;r--;)n[r]=arguments[r];e.apply(this,n),_(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?P(e.theme,e.language):void 0;return t.themeDict=n})),_(this,"getLineProps",(function(e){var n=e.key,r=e.className,a=e.style,o=L({},z(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),l=t.getThemeDict(t.props);return void 0!==l&&(o.style=l.plain),void 0!==a&&(o.style=void 0!==o.style?L({},o.style,a):a),void 0!==n&&(o.key=n),r&&(o.className+=" "+r),o})),_(this,"getStyleForToken",(function(e){var n=e.types,r=e.empty,a=n.length,o=t.getThemeDict(t.props);if(void 0!==o){if(1===a&&"plain"===n[0])return r?{display:"inline-block"}:void 0;if(1===a&&!r)return o[n[0]];var l=r?{display:"inline-block"}:{},c=n.map((function(e){return o[e]}));return Object.assign.apply(Object,[l].concat(c))}})),_(this,"getTokenProps",(function(e){var n=e.key,r=e.className,a=e.style,o=e.token,l=L({},z(e,["key","className","style","token"]),{className:"token "+o.types.join(" "),children:o.content,style:t.getStyleForToken(o),key:void 0});return void 0!==a&&(l.style=void 0!==l.style?L({},l.style,a):a),void 0!==n&&(l.key=n),r&&(l.className+=" "+r),l})),_(this,"tokenize",(function(e,t,n,r){var a={code:t,grammar:n,language:r,tokens:[]};e.hooks.run("before-tokenize",a);var o=a.tokens=e.tokenize(a.code,a.grammar,a.language);return e.hooks.run("after-tokenize",a),o}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,r=e.code,a=e.children,o=this.getThemeDict(this.props),l=t.languages[n];return a({tokens:function(e){for(var t=[[]],n=[e],r=[0],a=[e.length],o=0,l=0,c=[],i=[c];l>-1;){for(;(o=r[l]++)<a[l];){var s=void 0,u=t[l],m=n[l][o];if("string"==typeof m?(u=l>0?u:["plain"],s=m):(u=S(u,m.type),m.alias&&(u=S(u,m.alias)),s=m.content),"string"==typeof s){var d=s.split(x),p=d.length;c.push({types:u,content:d[0]});for(var f=1;f<p;f++)O(c),i.push(c=[]),c.push({types:u,content:d[f]})}else l++,t.push(u),n.push(s),r.push(0),a.push(s.length)}l--,t.pop(),n.pop(),r.pop(),a.pop()}return O(c),i}(void 0!==l?this.tokenize(t,r,l,n):[r]),className:"prism-code language-"+n,style:void 0!==o?o.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(r.Component),I=A,M="codeLine_lJS_",D="codeLineNumber_Tfdd",H="codeLineContent_feaV";function V(e){let{line:t,classNames:n,showLineNumbers:a,getLineProps:l,getTokenProps:c}=e;1===t.length&&"\n"===t[0].content&&(t[0].content="");const s=l({line:t,className:(0,i.Z)(n,a&&M)}),u=t.map(((e,t)=>r.createElement("span",(0,o.Z)({key:t},c({token:e,key:t})))));return r.createElement("span",s,a?r.createElement(r.Fragment,null,r.createElement("span",{className:D}),r.createElement("span",{className:H},u)):r.createElement(r.Fragment,null,u,r.createElement("br",null)))}var R=n(5999),$={copyButtonCopied:"copyButtonCopied_obH4",copyButtonIcons:"copyButtonIcons_eSgA",copyButtonIcon:"copyButtonIcon_y97N",copyButtonSuccessIcon:"copyButtonSuccessIcon_LjdS"};function W(e){let{code:t,className:n}=e;const[a,o]=(0,r.useState)(!1),l=(0,r.useRef)(void 0),c=(0,r.useCallback)((()=>{!function(e,t){let{target:n=document.body}=void 0===t?{}:t;const r=document.createElement("textarea"),a=document.activeElement;r.value=e,r.setAttribute("readonly",""),r.style.contain="strict",r.style.position="absolute",r.style.left="-9999px",r.style.fontSize="12pt";const o=document.getSelection();let l=!1;o.rangeCount>0&&(l=o.getRangeAt(0)),n.append(r),r.select(),r.selectionStart=0,r.selectionEnd=e.length;let c=!1;try{c=document.execCommand("copy")}catch{}r.remove(),l&&(o.removeAllRanges(),o.addRange(l)),a&&a.focus()}(t),o(!0),l.current=window.setTimeout((()=>{o(!1)}),1e3)}),[t]);return(0,r.useEffect)((()=>()=>window.clearTimeout(l.current)),[]),r.createElement("button",{type:"button","aria-label":a?(0,R.I)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,R.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,R.I)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,i.Z)("clean-btn",n,$.copyButton,a&&$.copyButtonCopied),onClick:c},r.createElement("span",{className:$.copyButtonIcons,"aria-hidden":"true"},r.createElement("svg",{className:$.copyButtonIcon,viewBox:"0 0 24 24"},r.createElement("path",{d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})),r.createElement("svg",{className:$.copyButtonSuccessIcon,viewBox:"0 0 24 24"},r.createElement("path",{d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"}))))}var F="wordWrapButtonIcon_Bwma",q="wordWrapButtonEnabled_EoeP";function G(e){let{className:t,onClick:n,isEnabled:a}=e;const o=(0,R.I)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return r.createElement("button",{type:"button",onClick:n,className:(0,i.Z)("clean-btn",t,a&&q),"aria-label":o,title:o},r.createElement("svg",{className:F,viewBox:"0 0 24 24","aria-hidden":"true"},r.createElement("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"})))}function U(e){let{children:t,className:n="",metastring:a,title:l,showLineNumbers:c,language:s}=e;const{prism:{defaultLanguage:d,magicComments:p}}=(0,u.L)(),f=s??function(e){const t=e.split(" ").find((e=>e.startsWith("language-")));return null==t?void 0:t.replace(/language-/,"")}(n)??d,g=m(),v=function(){const[e,t]=(0,r.useState)(!1),[n,a]=(0,r.useState)(!1),o=(0,r.useRef)(null),l=(0,r.useCallback)((()=>{const n=o.current.querySelector("code");e?n.removeAttribute("style"):(n.style.whiteSpace="pre-wrap",n.style.overflowWrap="anywhere"),t((e=>!e))}),[o,e]),c=(0,r.useCallback)((()=>{const{scrollWidth:e,clientWidth:t}=o.current,n=e>t||o.current.querySelector("code").hasAttribute("style");a(n)}),[o]);return Z(o,c),(0,r.useEffect)((()=>{c()}),[e,c]),(0,r.useEffect)((()=>(window.addEventListener("resize",c,{passive:!0}),()=>{window.removeEventListener("resize",c)})),[c]),{codeBlockRef:o,isEnabled:e,isCodeScrollable:n,toggle:l}}(),y=function(e){var t;return(null==e||null==(t=e.match(h))?void 0:t.groups.title)??""}(a)||l,{lineClassNames:E,code:C}=b(t,{metastring:a,language:f,magicComments:p}),w=c??function(e){return Boolean(null==e?void 0:e.includes("showLineNumbers"))}(a);return r.createElement(k,{as:"div",className:(0,i.Z)(n,f&&!n.includes(`language-${f}`)&&`language-${f}`)},y&&r.createElement("div",{className:N.codeBlockTitle},y),r.createElement("div",{className:N.codeBlockContent},r.createElement(I,(0,o.Z)({},j,{theme:g,code:C,language:f??"text"}),(e=>{let{className:t,tokens:n,getLineProps:a,getTokenProps:o}=e;return r.createElement("pre",{tabIndex:0,ref:v.codeBlockRef,className:(0,i.Z)(t,N.codeBlock,"thin-scrollbar")},r.createElement("code",{className:(0,i.Z)(N.codeBlockLines,w&&N.codeBlockLinesWithNumbering)},n.map(((e,t)=>r.createElement(V,{key:t,line:e,getLineProps:a,getTokenProps:o,classNames:E[t],showLineNumbers:w})))))})),r.createElement("div",{className:N.buttonGroup},(v.isEnabled||v.isCodeScrollable)&&r.createElement(G,{className:N.codeButton,onClick:()=>v.toggle(),isEnabled:v.isEnabled}),r.createElement(W,{className:N.codeButton,code:C}))))}function Q(e){let{children:t,...n}=e;const a=(0,c.Z)(),l=function(e){return r.Children.toArray(e).some((e=>(0,r.isValidElement)(e)))?e:Array.isArray(e)?e.join(""):e}(t),i="string"==typeof l?U:C;return r.createElement(i,(0,o.Z)({key:String(a)},n),l)}var X=n(9960);var Y=n(7459),J=n(6043),K="details_lb9f",ee="isBrowser_bmU9",te="collapsibleContent_i85q";function ne(e){return!!e&&("SUMMARY"===e.tagName||ne(e.parentElement))}function re(e,t){return!!e&&(e===t||re(e.parentElement,t))}function ae(e){let{summary:t,children:n,...a}=e;const l=(0,c.Z)(),i=(0,r.useRef)(null),{collapsed:s,setCollapsed:u}=(0,J.u)({initialState:!a.open}),[m,d]=(0,r.useState)(a.open);return r.createElement("details",(0,o.Z)({},a,{ref:i,open:m,"data-collapsed":s,className:(0,Y.Z)(K,l&&ee,a.className),onMouseDown:e=>{ne(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();const t=e.target;ne(t)&&re(t,i.current)&&(e.preventDefault(),s?(u(!1),d(!0)):u(!0))}}),t??r.createElement("summary",null,"Details"),r.createElement(J.z,{lazy:!1,collapsed:s,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{u(e),d(!e)}},r.createElement("div",{className:te},n)))}var oe="details_b_Ee";function le(e){let{...t}=e;return r.createElement(ae,(0,o.Z)({},t,{className:(0,i.Z)("alert alert--info",oe,t.className)}))}var ce=n(2503);function ie(e){return r.createElement(ce.Z,e)}var se="containsTaskList_mC6p";var ue="img_ev3q";var me="admonition_LlT9",de="admonitionHeading_tbUL",pe="admonitionIcon_kALy",fe="admonitionContent_S0QG";const he={note:{infimaClassName:"secondary",iconComponent:function(){return r.createElement("svg",{viewBox:"0 0 14 16"},r.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))},label:r.createElement(R.Z,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)"},"note")},tip:{infimaClassName:"success",iconComponent:function(){return r.createElement("svg",{viewBox:"0 0 12 16"},r.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))},label:r.createElement(R.Z,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)"},"tip")},danger:{infimaClassName:"danger",iconComponent:function(){return r.createElement("svg",{viewBox:"0 0 12 16"},r.createElement("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))},label:r.createElement(R.Z,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)"},"danger")},info:{infimaClassName:"info",iconComponent:function(){return r.createElement("svg",{viewBox:"0 0 14 16"},r.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))},label:r.createElement(R.Z,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)"},"info")},caution:{infimaClassName:"warning",iconComponent:function(){return r.createElement("svg",{viewBox:"0 0 16 16"},r.createElement("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))},label:r.createElement(R.Z,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)"},"caution")}},ge={secondary:"note",important:"info",success:"tip",warning:"danger"};function ve(e){const{mdxAdmonitionTitle:t,rest:n}=function(e){const t=r.Children.toArray(e),n=t.find((e=>{var t;return r.isValidElement(e)&&"mdxAdmonitionTitle"===(null==(t=e.props)?void 0:t.mdxType)})),a=r.createElement(r.Fragment,null,t.filter((e=>e!==n)));return{mdxAdmonitionTitle:n,rest:a}}(e.children);return{...e,title:e.title??t,children:n}}var ye={head:function(e){const t=r.Children.map(e.children,(e=>r.isValidElement(e)?function(e){var t;if(null!=(t=e.props)&&t.mdxType&&e.props.originalType){const{mdxType:t,originalType:n,...a}=e.props;return r.createElement(e.props.originalType,a)}return e}(e):e));return r.createElement(l.Z,e,t)},code:function(e){const t=["a","b","big","i","span","em","strong","sup","sub","small"];return r.Children.toArray(e.children).every((e=>{var n;return"string"==typeof e&&!e.includes("\n")||(0,r.isValidElement)(e)&&t.includes(null==(n=e.props)?void 0:n.mdxType)}))?r.createElement("code",e):r.createElement(Q,e)},a:function(e){return r.createElement(X.Z,e)},pre:function(e){var t;return r.createElement(Q,(0,r.isValidElement)(e.children)&&"code"===(null==(t=e.children.props)?void 0:t.originalType)?e.children.props:{...e})},details:function(e){const t=r.Children.toArray(e.children),n=t.find((e=>{var t;return r.isValidElement(e)&&"summary"===(null==(t=e.props)?void 0:t.mdxType)})),a=r.createElement(r.Fragment,null,t.filter((e=>e!==n)));return r.createElement(le,(0,o.Z)({},e,{summary:n}),a)},ul:function(e){return r.createElement("ul",(0,o.Z)({},e,{className:(t=e.className,(0,i.Z)(t,(null==t?void 0:t.includes("contains-task-list"))&&se))}));var t},img:function(e){return r.createElement("img",(0,o.Z)({loading:"lazy"},e,{className:(t=e.className,(0,i.Z)(t,ue))}));var t},h1:e=>r.createElement(ie,(0,o.Z)({as:"h1"},e)),h2:e=>r.createElement(ie,(0,o.Z)({as:"h2"},e)),h3:e=>r.createElement(ie,(0,o.Z)({as:"h3"},e)),h4:e=>r.createElement(ie,(0,o.Z)({as:"h4"},e)),h5:e=>r.createElement(ie,(0,o.Z)({as:"h5"},e)),h6:e=>r.createElement(ie,(0,o.Z)({as:"h6"},e)),admonition:function(e){const{children:t,type:n,title:a,icon:o}=ve(e),l=function(e){const t=ge[e]??e;return he[t]||(console.warn(`No admonition config found for admonition type "${t}". Using Info as fallback.`),he.info)}(n),c=a??l.label,{iconComponent:s}=l,u=o??r.createElement(s,null);return r.createElement("div",{className:(0,i.Z)(d.k.common.admonition,d.k.common.admonitionType(e.type),"alert",`alert--${l.infimaClassName}`,me)},r.createElement("div",{className:de},r.createElement("span",{className:pe},u),c),r.createElement("div",{className:fe},t))}};function be(e){let{children:t}=e;return r.createElement(a.Zo,{components:ye},t)}},2244:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var r=n(7294),a=n(4334),o=n(9960);function l(e){const{permalink:t,title:n,subLabel:l,isNext:c}=e;return r.createElement(o.Z,{className:(0,a.Z)("pagination-nav__link",c?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t},l&&r.createElement("div",{className:"pagination-nav__sublabel"},l),r.createElement("div",{className:"pagination-nav__label"},n))}},3008:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(7294),a=n(4334),o=n(9960),l="tag_zVej",c="tagRegular_sFm0",i="tagWithCount_h2kH";function s(e){let{permalink:t,label:n,count:s}=e;return r.createElement(o.Z,{href:t,className:(0,a.Z)(l,s?i:c)},n,s&&r.createElement("span",null,s))}},1526:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(7294),a=n(4334),o=n(5999),l=n(3008),c="tags_jXut",i="tag_QGVx";function s(e){let{tags:t}=e;return r.createElement(r.Fragment,null,r.createElement("b",null,r.createElement(o.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),r.createElement("ul",{className:(0,a.Z)(c,"padding--none","margin-left--sm")},t.map((e=>{let{label:t,permalink:n}=e;return r.createElement("li",{key:n,className:i},r.createElement(l.Z,{label:t,permalink:n}))}))))}},7594:function(e,t){function n(e){let t,n=[];for(let r of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(r))n.push(parseInt(r,10));else if(t=r.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,r,a,o]=t;if(r&&o){r=parseInt(r),o=parseInt(o);const e=r<o?1:-1;"-"!==a&&".."!==a&&"\u2025"!==a||(o+=e);for(let t=r;t!==o;t+=e)n.push(t)}}return n}t.default=n,e.exports=n}}]);