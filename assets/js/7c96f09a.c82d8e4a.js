"use strict";(self.webpackChunkhomepage=self.webpackChunkhomepage||[]).push([[3087],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=u(r),m=a,d=b["".concat(l,".").concat(m)]||b[m]||p[m]||i;return r?n.createElement(d,o(o({ref:t},s),{},{components:r})):n.createElement(d,o({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var u=2;u<i;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}b.displayName="MDXCreateElement"},7149:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return o},default:function(){return p},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return u}});var n=r(3117),a=(r(7294),r(3905));const i={title:"\u5982\u4f55 React Table \u5b9e\u73b0 Fixed Header",date:new Date("2022-04-16T03:05:09.000Z"),tags:["React"]},o=void 0,c={unversionedId:"custom-react-table/ru-he-reacttable-shi-xian-gu-ding-biao-ti",id:"custom-react-table/ru-he-reacttable-shi-xian-gu-ding-biao-ti",title:"\u5982\u4f55 React Table \u5b9e\u73b0 Fixed Header",description:"\u524d\u8a00",source:"@site/docs/custom-react-table/ru-he-reacttable-shi-xian-gu-ding-biao-ti.md",sourceDirName:"custom-react-table",slug:"/custom-react-table/ru-he-reacttable-shi-xian-gu-ding-biao-ti",permalink:"/homepage/docs/custom-react-table/ru-he-reacttable-shi-xian-gu-ding-biao-ti",draft:!1,editUrl:"https://github.com/umeimmense/homepage/blob/main/docs/intro.md/docs/custom-react-table/ru-he-reacttable-shi-xian-gu-ding-biao-ti.md",tags:[{label:"React",permalink:"/homepage/docs/tags/react"}],version:"current",frontMatter:{title:"\u5982\u4f55 React Table \u5b9e\u73b0 Fixed Header",date:"2022-04-16T03:05:09.000Z",tags:["React"]},sidebar:"tutorialSidebar",previous:{title:"\u5982\u4f55 React Table \u5b9e\u73b0 Fixed Column",permalink:"/homepage/docs/custom-react-table/ru-he-react-table-shi-xian-gu-ding-lie"},next:{title:"\u5982\u4f55\u5728 React Table \u4f7f\u7528 Theme",permalink:"/homepage/docs/custom-react-table/ru-he-zai-react-table-shi-yong-zhu-ti"}},l={},u=[{value:"\u524d\u8a00",id:"\u524d\u8a00",level:2},{value:"\u5b9e\u73b0",id:"\u5b9e\u73b0",level:2}],s={toc:u};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u524d\u8a00"},"\u524d\u8a00"),(0,a.kt)("p",null,"\u5728\u672c\u8282\u4e2d\u4e2d\uff0c\u6211\u60f3\u5411\u60a8\u5c55\u793a\u5982\u4f55\u4f7f\u7528\u5e26\u6709\u56fa\u5b9a\u6807\u9898\u7684 React Table\u5e93\u3002\u5728\u524d\u9762\u7684\u4f8b\u5b50\u4e2d\uff0c\u4f60\u5df2\u7ecf\u5b89\u88c5\u4e86 React Table Library \u6765\u521b\u5efa\u4e00\u4e2aTable\u7ec4\u4ef6\u5e76\u7ed9\u5b83\u4e00\u4e2a\u4e3b\u9898\u3002\u73b0\u5728\uff0c\u6211\u4eec\u5c06\u5141\u8bb8\u7528\u6237\u5c06\u4ed6\u4eec\u7684\u6807\u9898\u7c98\u8d34\u5230\u9876\u90e8\uff1a"),(0,a.kt)("h2",{id:"\u5b9e\u73b0"},"\u5b9e\u73b0"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"import { useTheme } from '@table-library/react-table-library/theme';\n\nconst App = () => {\n  const data = { nodes };\n\n  const theme = useTheme({\n    Table: `\n      height: 100%;\n    `,\n  });\n\n  return (\n    <div\n      style={{\n        height: '150px',\n      }}\n    >\n      <Table data={data} theme={theme}>\n        ...\n      </Table>\n    </div>\n  );\n};\n")),(0,a.kt)("p",null,"\u56fa\u5b9aTable\u6807\u9898\u6240\u9700\u7684\u4e00\u5207\u90fd\u662fTable\u7ec4\u4ef6\u5468\u56f4\u7684\u5bb9\u5668\u7ec4\u4ef6\u3002\u8fd9\u6837\uff0cTable\u7684\u884c\u5c06\u5728\u5782\u76f4\u65b9\u5411\u6eda\u52a8\uff0c\u800c\u6807\u9898\u4fdd\u6301\u5728Table\u7684\u9876\u90e8\u3002"))}p.isMDXComponent=!0}}]);