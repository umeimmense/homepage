"use strict";(self.webpackChunkhomepage=self.webpackChunkhomepage||[]).push([[1466],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return m}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=a.createContext({}),s=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):u(u({},n),e)),t},c=function(e){var n=s(e.components);return a.createElement(o.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(t),m=r,f=d["".concat(o,".").concat(m)]||d[m]||p[m]||l;return t?a.createElement(f,u(u({ref:n},c),{},{components:t})):a.createElement(f,u({ref:n},c))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,u=new Array(l);u[0]=d;var i={};for(var o in n)hasOwnProperty.call(n,o)&&(i[o]=n[o]);i.originalType=e,i.mdxType="string"==typeof e?e:r,u[1]=i;for(var s=2;s<l;s++)u[s]=t[s];return a.createElement.apply(null,u)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},2360:function(e,n,t){t.d(n,{Z:function(){return u}});var a=t(7294),r=t(6010),l="tabItem_OmH5";function u(e){var n=e.children,t=e.hidden,u=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,u),hidden:t},n)}},9877:function(e,n,t){t.d(n,{Z:function(){return m}});var a=t(7462),r=t(7294),l=t(2389),u=t(7392),i=t(7094),o=t(2466),s=t(6010),c="tabList_uSqn",p="tabItem_LplD";function d(e){var n,t,l,d=e.lazy,m=e.block,f=e.defaultValue,k=e.values,b=e.groupId,h=e.className,v=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=k?k:v.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),y=(0,u.l)(g,(function(e,n){return e.value===n.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var N=null===f?f:null!=(n=null!=f?f:null==(t=v.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(l=v[0])?void 0:l.props.value;if(null!==N&&!g.some((function(e){return e.value===N})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+N+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var C=(0,i.U)(),w=C.tabGroupChoices,T=C.setTabGroupChoices,O=(0,r.useState)(N),j=O[0],E=O[1],x=[],D=(0,o.o5)().blockElementScrollPositionUntilNextRender;if(null!=b){var Z=w[b];null!=Z&&Z!==j&&g.some((function(e){return e.value===Z}))&&E(Z)}var I=function(e){var n=e.currentTarget,t=x.indexOf(n),a=g[t].value;a!==j&&(D(n),E(a),null!=b&&T(b,a))},M=function(e){var n,t=null;switch(e.key){case"ArrowRight":var a=x.indexOf(e.currentTarget)+1;t=x[a]||x[0];break;case"ArrowLeft":var r=x.indexOf(e.currentTarget)-1;t=x[r]||x[x.length-1]}null==(n=t)||n.focus()};return r.createElement("div",{className:(0,s.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":m},h)},g.map((function(e){var n=e.value,t=e.label,l=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:j===n?0:-1,"aria-selected":j===n,key:n,ref:function(e){return x.push(e)},onKeyDown:M,onFocus:I,onClick:I},l,{className:(0,s.Z)("tabs__item",p,null==l?void 0:l.className,{"tabs__item--active":j===n})}),null!=t?t:n)}))),d?(0,r.cloneElement)(v.filter((function(e){return e.props.value===j}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},v.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==j})}))))}function m(e){var n=(0,l.Z)();return r.createElement(d,(0,a.Z)({key:String(n)},e))}},4391:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return c},default:function(){return k},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return m}});var a=t(7462),r=t(3366),l=(t(7294),t(3905)),u=t(9877),i=t(2360),o=["components"],s={title:"\u5982\u4f55\u4f7f\u7528facebook\u5f00\u6e90\u5e93 docusaurus \u642d\u5efa\u4e2a\u4eba\u4e3b\u9875",date:new Date("2022-05-08T13:38:06.000Z"),tags:[],published:!1,hideInList:!1,feature:null,isTop:!1},c=void 0,p={permalink:"/homepage/blog/ru-he-shi-yong-facebook-kai-yuan-ku-docusaurus-da-jian-ge-ren-zhu-ye",editUrl:"https://github.com/umeimmense/homepage/tree/main/blog/blog/ru-he-shi-yong-facebook-kai-yuan-ku-docusaurus-da-jian-ge-ren-zhu-ye.md",source:"@site/blog/ru-he-shi-yong-facebook-kai-yuan-ku-docusaurus-da-jian-ge-ren-zhu-ye.md",title:"\u5982\u4f55\u4f7f\u7528facebook\u5f00\u6e90\u5e93 docusaurus \u642d\u5efa\u4e2a\u4eba\u4e3b\u9875",description:"\u524d\u8a00",date:"2022-05-08T13:38:06.000Z",formattedDate:"2022\u5e745\u67088\u65e5",tags:[],readingTime:3.25,truncated:!1,authors:[],frontMatter:{title:"\u5982\u4f55\u4f7f\u7528facebook\u5f00\u6e90\u5e93 docusaurus \u642d\u5efa\u4e2a\u4eba\u4e3b\u9875",date:"2022-05-08T13:38:06.000Z",tags:[],published:!1,hideInList:!1,feature:null,isTop:!1},nextItem:{title:"MIT \u8bfe\u7a0b - \u6982\u89c8\u4e0e shell",permalink:"/homepage/blog/ke-cheng-gai-lan-yu-shell"}},d={authorsImageUrls:[]},m=[{value:"\u524d\u8a00",id:"\u524d\u8a00",level:2},{value:"\u51c6\u5907\u5de5\u4f5c",id:"\u51c6\u5907\u5de5\u4f5c",level:2},{value:"\u9879\u76ee\u7ed3\u6784",id:"\u9879\u76ee\u7ed3\u6784",level:2},{value:"\u89e3\u91ca\u9879\u76ee\u7ed3\u6784",id:"\u89e3\u91ca\u9879\u76ee\u7ed3\u6784",level:3}],f={toc:m};function k(e){var n=e.components,t=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u524d\u8a00"},"\u524d\u8a00"),(0,l.kt)("p",null,"\u4e4b\u524d\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"github")," \u5076\u7136\u53d1\u73b0\u4e86",(0,l.kt)("inlineCode",{parentName:"p"},"facebook"),"\u5f00\u6e90\u7684 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/facebook/docusaurus"},"docusaurus"),"\u53d1\u73b0\u4e86\u5f88\u591a\u4e0d\u9519\u7684\u529f\u80fd\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u7531 ",(0,l.kt)("inlineCode",{parentName:"li"},"MDX")," \u63d0\u4f9b\u652f\u6301.\uff1a \u8282\u7701\u65f6\u95f4\u5e76\u4e13\u6ce8\u4e8e\u6587\u672c\u6587\u6863\u3002\u53ea\u9700\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"li"},"MDX")," \u7f16\u5199\u6587\u6863\u548c\u535a\u5ba2\u6587\u7ae0\uff0c",(0,l.kt)("inlineCode",{parentName:"li"},"Docusaurus")," \u5c31\u4f1a\u5c06\u5b83\u4eec\u6784\u5efa\u6210\u9759\u6001 ",(0,l.kt)("inlineCode",{parentName:"li"},"HTML")," \u6587\u4ef6\uff0c\u4ee5\u4fbf\u63d0\u4f9b\u670d\u52a1\u3002\u501f\u52a9 ",(0,l.kt)("inlineCode",{parentName:"li"},"MDX"),"\uff0c\u60a8\u751a\u81f3\u53ef\u4ee5\u5728 ",(0,l.kt)("inlineCode",{parentName:"li"},"Markdown")," \u4e2d\u5d4c\u5165 ",(0,l.kt)("inlineCode",{parentName:"li"},"React")," \u7ec4\u4ef6\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"li"},"React")," \u6784\u5efa: \u901a\u8fc7\u7f16\u5199 ",(0,l.kt)("inlineCode",{parentName:"li"},"React")," \u7ec4\u4ef6\u6765\u6269\u5c55\u548c\u81ea\u5b9a\u4e49\u9879\u76ee\u7684\u5e03\u5c40\u3002\u5229\u7528\u53ef\u63d2\u62d4\u67b6\u6784\uff0c\u8bbe\u8ba1\u60a8\u81ea\u5df1\u7684\u7f51\u7ad9\uff0c\u540c\u65f6\u91cd\u7528 ",(0,l.kt)("inlineCode",{parentName:"li"},"Docusaurus")," \u63d2\u4ef6\u521b\u5efa\u7684\u76f8\u540c\u6570\u636e\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u63d0\u4f9b\u7ffb\u8bd1\u529f\u80fd\uff1a\u672c\u5730\u5316\u662f\u5f00\u7bb1\u5373\u7528\u7684\u3002\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"li"},"git"),"\u3001",(0,l.kt)("inlineCode",{parentName:"li"},"Crowdin")," \u6216\u4efb\u4f55\u5176\u4ed6\u7ffb\u8bd1\u7ba1\u7406\u5668\u6765\u7ffb\u8bd1\u60a8\u7684\u6587\u6863\u5e76\u5355\u72ec\u90e8\u7f72\u5b83\u4eec\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u6587\u6863\u7248\u672c\u63a7\u5236: \u652f\u6301\u9879\u76ee\u6240\u6709\u7248\u672c\u7684\u7528\u6237\u3002\u6587\u6863\u7248\u672c\u63a7\u5236\u53ef\u5e2e\u52a9\u60a8\u4f7f\u6587\u6863\u4e0e\u9879\u76ee\u53d1\u5e03\u4fdd\u6301\u540c\u6b65\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u652f\u6301\u5185\u5bb9\u641c\u7d22:\u8ba9\u60a8\u7684\u793e\u533a\u53ef\u4ee5\u8f7b\u677e\u5730\u5728\u60a8\u7684\u6587\u6863\u4e2d\u627e\u5230\u4ed6\u4eec\u9700\u8981\u7684\u5185\u5bb9\u3002\u652f\u6301 ",(0,l.kt)("inlineCode",{parentName:"li"},"Algolia")," \u6587\u6863\u641c\u7d22\u3002")),(0,l.kt)("p",null,"\u672c\u8282\u5c06\u8bb0\u5f55\u5982\u4f55\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"p"},"docusaurus")," \u642d\u5efa\u4e2a\u4eba\u4e3b\u9875\u3002"),(0,l.kt)("h2",{id:"\u51c6\u5907\u5de5\u4f5c"},"\u51c6\u5907\u5de5\u4f5c"),(0,l.kt)("p",null," \u5b89\u88c5\u9879\u76ee\u811a\u624b\u67b6"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npx create-docusaurus@latest my-website classic\n")),(0,l.kt)("p",null,"\u4ea6\u53ef\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"typesecript")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npx create-docusaurus@latest my-website classic --typescript\n")),(0,l.kt)("details",null,(0,l.kt)("summary",null,"\u66ff\u6362\u5b89\u88c5\u547d\u4ee4"),(0,l.kt)("p",null,"\u60a8\u8fd8\u53ef\u4ee5\u4f7f\u7528\u9996\u9009\u7684\u9879\u76ee\u7ba1\u7406\u5668\u521d\u59cb\u5316\u65b0\u9879\u76ee\uff1a"),(0,l.kt)(u.Z,{mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"npm",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npm init docusaurus\n"))),(0,l.kt)(i.Z,{value:"yarn",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"yarn create docusaurus\n"))),(0,l.kt)(i.Z,{value:"pnpm",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"pnpm create docusaurus\n"))))),(0,l.kt)("h2",{id:"\u9879\u76ee\u7ed3\u6784"},"\u9879\u76ee\u7ed3\u6784"),(0,l.kt)("p",null,"\u5047\u8bbe\u60a8\u9009\u62e9\u4e86\u7ecf\u5178\u6a21\u677f\u5e76\u5c06\u7f51\u7ad9\u547d\u540d\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"my-website"),"\uff0c\u60a8\u5c06\u4f1a\u5728\u65b0\u76ee\u5f55 ",(0,l.kt)("inlineCode",{parentName:"p"},"my-website/")," \u4e0b\u770b\u5230\u4e0b\u5217\u6587\u4ef6\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"my-website\n\u251c\u2500\u2500 blog\n\u2502   \u251c\u2500\u2500 2019-05-28-hola.md\n\u2502   \u251c\u2500\u2500 2019-05-29-hello-world.md\n\u2502   \u2514\u2500\u2500 2020-05-30-welcome.md\n\u251c\u2500\u2500 docs\n\u2502   \u251c\u2500\u2500 doc1.md\n\u2502   \u251c\u2500\u2500 doc2.md\n\u2502   \u251c\u2500\u2500 doc3.md\n\u2502   \u2514\u2500\u2500 mdx.md\n\u251c\u2500\u2500 src\n\u2502   \u251c\u2500\u2500 css\n\u2502   \u2502   \u2514\u2500\u2500 custom.css\n\u2502   \u2514\u2500\u2500 pages\n\u2502       \u251c\u2500\u2500 styles.module.css\n\u2502       \u2514\u2500\u2500 index.js\n\u251c\u2500\u2500 static\n\u2502   \u2514\u2500\u2500 img\n\u251c\u2500\u2500 docusaurus.config.js\n\u251c\u2500\u2500 package.json\n\u251c\u2500\u2500 README.md\n\u251c\u2500\u2500 sidebars.js\n\u2514\u2500\u2500 yarn.lock\n")),(0,l.kt)("h3",{id:"\u89e3\u91ca\u9879\u76ee\u7ed3\u6784"},"\u89e3\u91ca\u9879\u76ee\u7ed3\u6784"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"/blog/")," - \u5305\u542b\u535a\u5ba2\u7684 Markdown \u6587\u4ef6\u3002 ",(0,l.kt)("a",{parentName:"li",href:"https://docusaurus.io/zh-CN/docs/blog"},"\u8be6\u60c5\u53ef\u53c2\u8003")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"/docs/")," - \u5305\u542b\u6587\u6863\u7684 Markdown \u6587\u4ef6\u3002 \u60a8\u53ef\u5728 sidebars.js \u4e2d\u81ea\u5b9a\u4e49\u6587\u6863\u7684\u4fa7\u8fb9\u680f\u987a\u5e8f\u3002 ",(0,l.kt)("a",{parentName:"li",href:"https://docusaurus.io/zh-CN/docs"},"\u8be6\u60c5\u53ef\u53c2\u8003")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"/src/")," - \u5982\u9875\u9762\u6216\u81ea\u5b9a\u4e49 React \u7ec4\u4ef6\u4e00\u7c7b\u7684\u975e\u6587\u6863\u6587\u4ef6\u3002",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"/src/pages")," - ",(0,l.kt)("a",{parentName:"li",href:"https://docusaurus.io/zh-CN/docs/create-doc"},"\u60a8\u53ef\u5728\u9875\u9762\u6307\u5357\u4e2d\u4e86\u89e3\u8be6\u60c5")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"/static/")," - \u9759\u6001\u76ee\u5f55\u3002 \u6b64\u5904\u7684\u6240\u6709\u5185\u5bb9\u90fd\u5c06\u88ab\u590d\u5236\u8fdb ",(0,l.kt)("inlineCode",{parentName:"li"},"build")," \u6587\u4ef6\u5939\u7684\u6839\u76ee\u5f55\u4e2d"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"/docusaurus.config.js")," - \u7ad9\u70b9\u914d\u7f6e\u6587\u4ef6\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"/package.json")," - Docusaurus \u7f51\u7ad9\u662f\u4e00\u6b3e React \u5e94\u7528\u7a0b\u5e8f\u3002 \u60a8\u53ef\u4ee5\u5b89\u88c5\u5e76\u4f7f\u7528\u4efb\u4f55 npm \u8f6f\u4ef6\u5305"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"/sidebars.js")," - sidebar \u7684\u76f8\u5173\u914d\u7f6e")))}k.isMDXComponent=!0}}]);