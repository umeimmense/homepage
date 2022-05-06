"use strict";(self.webpackChunkcool_coding=self.webpackChunkcool_coding||[]).push([[9934],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),i=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=i(e.components);return a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=i(n),f=r,k=d["".concat(u,".").concat(f)]||d[f]||p[f]||o;return n?a.createElement(k,l(l({ref:t},c),{},{components:n})):a.createElement(k,l({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var i=2;i<o;i++)l[i]=n[i];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2490:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return s},metadata:function(){return i},toc:function(){return p}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),l=["components"],s={title:"\u63a2\u7d22 React 18 \u7684\u4e09\u4e2a\u65b0 API",date:new Date("2022-03-03T00:16:50.000Z"),tags:["React","React Conf 2021"]},u=void 0,i={permalink:"/homepage/blog/tan-suo-react-18-de-san-ge-xin-api",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/tan-suo-react-18-de-san-ge-xin-api.md",source:"@site/blog/tan-suo-react-18-de-san-ge-xin-api.md",title:"\u63a2\u7d22 React 18 \u7684\u4e09\u4e2a\u65b0 API",description:"\u524d\u8a00",date:"2022-03-03T00:16:50.000Z",formattedDate:"2022\u5e743\u67083\u65e5",tags:[{label:"React",permalink:"/homepage/blog/tags/react"},{label:"React Conf 2021",permalink:"/homepage/blog/tags/react-conf-2021"}],readingTime:13.425,truncated:!1,authors:[],frontMatter:{title:"\u63a2\u7d22 React 18 \u7684\u4e09\u4e2a\u65b0 API",date:"2022-03-03T00:16:50.000Z",tags:["React","React Conf 2021"]},prevItem:{title:"React 18 \u4e2d\u7684\u81ea\u52a8\u6279\u5904\u7406",permalink:"/homepage/blog/react-18-zhong-de-zi-dong-pi-chu-li"},nextItem:{title:"React 18 \u5e76\u53d1\uff08Concurrent\uff09\u6e32\u67d3\u7684\u5165\u95e8\u6307\u5357",permalink:"/homepage/blog/concurrent-rendering"}},c={authorsImageUrls:[]},p=[{value:"\u524d\u8a00",id:"\u524d\u8a00",level:2},{value:"\u4f7f\u7528 useSyncExternalStore \u89e3\u51b3\u8fd9\u4e9b\u95ee\u9898",id:"\u4f7f\u7528-usesyncexternalstore-\u89e3\u51b3\u8fd9\u4e9b\u95ee\u9898",level:3},{value:"\u5982\u4f55\u4f7f\u7528 useSyncExternalStore",id:"\u5982\u4f55\u4f7f\u7528-usesyncexternalstore",level:2},{value:"\u5728\u670d\u52a1\u5668\u7aef\u8fd0\u884c React",id:"\u5728\u670d\u52a1\u5668\u7aef\u8fd0\u884c-react",level:2},{value:"useID Hook \u7684\u6f14\u8fdb",id:"useid-hook-\u7684\u6f14\u8fdb",level:2},{value:"\u5982\u4f55\u4f7f\u7528 useID",id:"\u5982\u4f55\u4f7f\u7528-useid",level:2},{value:"useInsertionEffect \u5982\u4f55\u89e3\u51b3\u5e76\u53d1\u6e32\u67d3\u95ee\u9898",id:"useinsertioneffect-\u5982\u4f55\u89e3\u51b3\u5e76\u53d1\u6e32\u67d3\u95ee\u9898",level:2}],d={toc:p};function f(e){var t=e.components,n=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u524d\u8a00"},"\u524d\u8a00"),(0,o.kt)("p",null,"\u76ee\u524d React \u751f\u6001\u7cfb\u7edf\u4e2d\u6700\u5927\u7684\u8bdd\u9898\u662f React 18 \u53ca\u5176\u5907\u53d7\u671f\u5f85\u7684\u5e76\u53d1\u6e32\u67d3\u529f\u80fd\u7684\u5b8c\u6574\u53d1\u5e03\u3002 2021 \u5e74 6 \u6708\uff0cReact \u56e2\u961f\u5ba3\u5e03\u4e86 React 18 \u7684\u8ba1\u5212\u4ee5\u53ca\u5373\u5c06\u53d1\u751f\u7684\u4e8b\u60c5\u3002 2021\u5e74 12 \u6708\uff0cReact Conf 2021 \u7684\u4e3b\u9898\u662f\u6240\u6709\u65b0\u53d1\u5e03\u7684\u5e76\u53d1\u6e32\u67d3\u529f\u80fd\u3002"),(0,o.kt)("p",null,"\u4e0e React 18 \u4e00\u8d77\u53d1\u5e03\u7684\u51e0\u4e2a\u65b0 API \u5141\u8bb8\u7528\u6237\u5145\u5206\u5229\u7528 React \u7684\u5e76\u53d1\u6e32\u67d3\u529f\u80fd\u3002 \u8fd9\u4e9bhook\u662f\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#the-usesyncexternalstore-hook"},"useSyncExternalStore")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#the-useid-hook"},"useId")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#the-useinsertioneffect-hook"},"useInsertionEffect"))),(0,o.kt)("p",null,"\u672c\u6587\u5c06\u4ecb\u7ecd\u8fd9\u4e09\u4e2a\u65b0 API\u3001\u5b83\u4eec\u7684\u7528\u4f8b\u3001\u5b83\u4eec\u89e3\u51b3\u7684\u95ee\u9898\u3001\u6dfb\u52a0\u5b83\u4eec\u7684\u539f\u56e0\u4ee5\u53ca\u5b83\u4eec\u5982\u4f55\u96c6\u6210\u5230\u5e76\u53d1\u6e32\u67d3\u9886\u57df\u3002"),(0,o.kt)("h1",{id:"the-usesyncexternalstore-hook"},"the-usesyncexternalstore-hook"),(0,o.kt)("p",null,"\u5728 React v16.14.0 \u4e2d\u5f15\u5165\u7684\u7528\u4e8e\u9002\u5e94\u5e76\u53d1\u6e32\u67d3\u7684 API \u4e4b\u4e00\u662f useMutableSource\uff0c\u5b83\u65e8\u5728\u5141\u8bb8 React \u7ec4\u4ef6\u5728\u5e76\u53d1\u6e32\u67d3\u671f\u95f4\u5b89\u5168\u6709\u6548\u5730\u4e0e\u5916\u90e8\u53ef\u53d8\u6e90\u96c6\u6210\u3002"),(0,o.kt)("p",null,"Hook \u5c06\u9644\u52a0\u5230\u6570\u636e\u6e90\uff0c\u7b49\u5f85\u66f4\u6539\uff0c\u5e76\u76f8\u5e94\u5730\u5b89\u6392\u66f4\u65b0\u3002 \u6240\u6709\u8fd9\u4e00\u5207\u90fd\u4f1a\u4ee5\u4e00\u79cd\u9632\u6b62\u6495\u88c2\u7684\u65b9\u5f0f\u53d1\u751f\uff0c\u5373\u5f53\u51fa\u73b0\u89c6\u89c9\u4e0d\u4e00\u81f4\u65f6\uff0c\u56e0\u4e3a\u540c\u4e00\u72b6\u6001\u6709\u591a\u4e2a\u503c\u3002"),(0,o.kt)("p",null,"\u8fd9\u5bf9\u4e8e\u65b0\u7684\u5e76\u53d1\u6e32\u67d3\u7279\u6027\u6765\u8bf4\u662f\u4e00\u4e2a\u7279\u522b\u7a81\u51fa\u7684\u95ee\u9898\uff0c\u56e0\u4e3a\u72b6\u6001\u6d41\u53ef\u4ee5\u5f88\u5feb\u5730\u4ea4\u7ec7\u5728\u4e00\u8d77\u3002 \u7136\u800c\uff0c\u91c7\u7528 useMutableSource \u88ab\u8bc1\u660e\u662f\u56f0\u96be\u7684\uff0c\u539f\u56e0\u5982\u4e0b\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Hook \u662f\u5f02\u6b65\u7684\nHook \u4e0d\u77e5\u9053\u5982\u679c\u9009\u62e9\u5668\u51fd\u6570\u7684\u7ed3\u679c\u503c\u53d1\u751f\u53d8\u5316\uff0c\u5b83\u662f\u5426\u53ef\u4ee5\u91cd\u7528\u5b83\u3002 \u552f\u4e00\u7684\u89e3\u51b3\u65b9\u6848\u662f\u91cd\u65b0\u8ba2\u9605\u63d0\u4f9b\u7684\u6570\u636e\u6e90\u5e76\u518d\u6b21\u68c0\u7d22\u5feb\u7167\uff0c\u8fd9\u53ef\u80fd\u4f1a\u5bfc\u81f4\u6027\u80fd\u95ee\u9898\uff0c\u56e0\u4e3a\u5b83\u53d1\u751f\u5728\u6bcf\u6b21\u6e32\u67d3\u4e0a\u3002")),(0,o.kt)("p",null,"\u5bf9\u4e8e\u7528\u6237\u548c\u5e93\uff08\u5982 Redux\uff09\uff0c\u8fd9\u610f\u5473\u7740\u4ed6\u4eec\u5fc5\u987b\u8bb0\u4f4f\u9879\u76ee\u4e2d\u7684\u6bcf\u4e2a\u9009\u62e9\u5668\uff0c\u5e76\u4e14\u65e0\u6cd5\u5185\u8054\u5b9a\u4e49\u9009\u62e9\u5668\u51fd\u6570\uff0c\u56e0\u4e3a\u5b83\u4eec\u7684\u5f15\u7528\u4e0d\u7a33\u5b9a\u3002"),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"\u5b83\u5fc5\u987b\u5904\u7406\u5916\u90e8\u72b6\u6001\n\u6700\u521d\u7684\u5b9e\u73b0\u4e5f\u6709\u7f3a\u9677\uff0c\u56e0\u4e3a\u5b83\u5fc5\u987b\u5904\u7406 React \u4e4b\u5916\u7684\u72b6\u6001\u3002 \u8fd9\u610f\u5473\u7740\u7531\u4e8e\u5176\u53ef\u53d8\u6027\uff0c\u72b6\u6001\u53ef\u80fd\u968f\u65f6\u66f4\u6539\u3002")),(0,o.kt)("p",null,"\u56e0\u4e3a React \u8bd5\u56fe\u4ee5\u5f02\u6b65\u65b9\u5f0f\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\uff0c\u8fd9\u6709\u65f6\u4f1a\u5bfc\u81f4 UI \u7684\u53ef\u89c1\u90e8\u5206\u88ab\u66ff\u6362\u4e3a\u5907\u7528\uff0c\u4ece\u800c\u5bfc\u81f4\u6b21\u4f18\u7684\u7528\u6237\u4f53\u9a8c\u3002"),(0,o.kt)("p",null,"\u6240\u6709\u8fd9\u4e00\u5207\u90fd\u4f7f\u5f97\u5e93\u7ef4\u62a4\u8005\u7684\u8fc1\u79fb\u53d8\u5f97\u75db\u82e6\uff0c\u5e76\u4e14\u5bf9\u5f00\u53d1\u4eba\u5458\u548c\u7528\u6237\u6765\u8bf4\u90fd\u662f\u6b21\u4f18\u7684\u4f53\u9a8c\u3002"),(0,o.kt)("h3",{id:"\u4f7f\u7528-usesyncexternalstore-\u89e3\u51b3\u8fd9\u4e9b\u95ee\u9898"},"\u4f7f\u7528 useSyncExternalStore \u89e3\u51b3\u8fd9\u4e9b\u95ee\u9898"),(0,o.kt)("p",null,"\u4e3a\u4e86\u89e3\u51b3\u8fd9\u4e9b\u95ee\u9898\uff0cReact \u56e2\u961f\u66f4\u6539\u4e86\u5e95\u5c42\u5b9e\u73b0\u5e76\u5c06 Hook \u91cd\u547d\u540d\u4e3a useSyncExternalStore \u4ee5\u6b63\u786e\u53cd\u6620\u5176\u884c\u4e3a\u3002 \u8fd9\u4e9b\u53d8\u5316\u5305\u62ec\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u6bcf\u6b21\u9009\u62e9\u5668\uff08\u7528\u4e8e\u5feb\u7167\uff09\u66f4\u6539\u65f6\u90fd\u4e0d\u4f1a\u91cd\u65b0\u8ba2\u9605\u5916\u90e8\u6e90\u2014\u2014\u76f8\u53cd\uff0cReact \u5c06\u6bd4\u8f83\u9009\u62e9\u5668\u7684\u7ed3\u679c\u503c\uff0c\u800c\u4e0d\u662f\u9009\u62e9\u5668\u51fd\u6570\uff0c\u4ee5\u51b3\u5b9a\u662f\u5426\u518d\u6b21\u68c0\u7d22\u5feb\u7167\uff0c\u4ee5\u4fbf\u7528\u6237\u53ef\u4ee5\u5b9a\u4e49 \u9009\u62e9\u5668\u5185\u8054\u800c\u4e0d\u4f1a\u5bf9\u6027\u80fd\u4ea7\u751f\u8d1f\u9762\u5f71\u54cd"),(0,o.kt)("li",{parentName:"ul"},"\u6bcf\u5f53\u5916\u90e8\u5b58\u50a8\u53d1\u751f\u66f4\u6539\u65f6\uff0c\u751f\u6210\u7684\u66f4\u65b0\u73b0\u5728\u59cb\u7ec8\u662f\u540c\u6b65\u7684\uff0c\u8fd9\u53ef\u4ee5\u9632\u6b62 UI \u88ab\u66ff\u6362\u4e3a\u56de\u9000")),(0,o.kt)("p",null,"\u552f\u4e00\u7684\u8981\u6c42\u662f getSnapshot Hook \u53c2\u6570\u7684\u7ed3\u679c\u503c\u9700\u8981\u662f\u5f15\u7528\u7a33\u5b9a\u7684\u3002 React \u5728\u5185\u90e8\u4f7f\u7528\u5b83\u6765\u786e\u5b9a\u662f\u5426\u9700\u8981\u68c0\u7d22\u65b0\u5feb\u7167\uff0c\u56e0\u6b64\u5b83\u9700\u8981\u662f\u4e0d\u53ef\u53d8\u503c\u6216\u8bb0\u5fc6/\u7f13\u5b58\u5bf9\u8c61\u3002"),(0,o.kt)("p",null,"\u4e3a\u4e86\u65b9\u4fbf\u8d77\u89c1\uff0cReact \u5c06\u63d0\u4f9b\u4e00\u4e2a\u9644\u52a0\u7248\u672c\u7684 Hook\uff0c\u5b83\u81ea\u52a8\u652f\u6301\u5bf9 getSnapshot \u7684\u7ed3\u679c\u503c\u7684\u8bb0\u5fc6\u3002"),(0,o.kt)("h2",{id:"\u5982\u4f55\u4f7f\u7528-usesyncexternalstore"},"\u5982\u4f55\u4f7f\u7528 useSyncExternalStore"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"// Code illustrating the usage of `useSyncExternalStore`.\n// Source: <https://github.com/reactwg/react-18/discussions/86>\n\nimport {useSyncExternalStore} from 'react';\n\n// React will also publish a backwards-compatible shim\n// It will prefer the native API, when available\nimport {useSyncExternalStore} from 'use-sync-external-store/shim';\n\n// Basic usage. getSnapshot must return a cached/memoized result\nconst state = useSyncExternalStore(store.subscribe, store.getSnapshot);\n\n// Selecting a specific field using an inline getSnapshot\nconst selectedField = useSyncExternalStore(store.subscribe, () => store.getSnapshot().selectedField);\n\n// Code illustrating the usage of the memoized version.\n// Source: <https://github.com/reactwg/react-18/discussions/86>\n\n// Name of API is not final\nimport {useSyncExternalStoreWithSelector} from 'use-sync-external-store/with-selector';\n\nconst selection = useSyncExternalStoreWithSelector(\n    store.subscribe,\n    store.getSnapshot,\n    getServerSnapshot,\n    selector,\n    isEqual\n);\n")),(0,o.kt)("h1",{id:"the-useid-hook"},"The useId Hook"),(0,o.kt)("h2",{id:"\u5728\u670d\u52a1\u5668\u7aef\u8fd0\u884c-react"},"\u5728\u670d\u52a1\u5668\u7aef\u8fd0\u884c React"),(0,o.kt)("p",null,"\u957f\u671f\u4ee5\u6765\uff0c\u4e00\u4e2a React \u9879\u76ee\u53ea\u5728\u5ba2\u6237\u7aef\u8fd0\u884c\u3002\u7b80\u800c\u8a00\u4e4b\uff0c\u8fd9\u610f\u5473\u7740\u6240\u6709\u4ee3\u7801\u90fd\u88ab\u53d1\u9001\u5230\u7528\u6237\u7684\u6d4f\u89c8\u5668\uff08\u5ba2\u6237\u7aef\uff09\uff0c\u7136\u540e\u6d4f\u89c8\u5668\u8d1f\u8d23\u5411\u7528\u6237\u5448\u73b0\u548c\u663e\u793a\u5e94\u7528\u7a0b\u5e8f\u3002"),(0,o.kt)("p",null,"React \u4f5c\u4e3a\u4e00\u4e2a\u6574\u4f53\u4e00\u76f4\u5728\u5411\u670d\u52a1\u5668\u7aef\u6e32\u67d3\uff08SSR\uff09\u9886\u57df\u6269\u5c55\u3002\u5728 SSR \u4e2d\uff0c\u670d\u52a1\u5668\u8d1f\u8d23\u6839\u636e React \u4ee3\u7801\u751f\u6210 HTML \u7ed3\u6784\u3002\u800c\u4e0d\u662f\u6240\u6709\u7684 React \u4ee3\u7801\uff0c\u53ea\u6709 HTML \u88ab\u53d1\u9001\u5230\u6d4f\u89c8\u5668\u3002"),(0,o.kt)("p",null,"\u7136\u540e\uff0c\u6d4f\u89c8\u5668\u53ea\u8d1f\u8d23\u91c7\u7528\u8be5\u7ed3\u6784\u5e76\u901a\u8fc7\u6e32\u67d3\u7ec4\u4ef6\u3001\u5728\u5176\u4e0a\u6dfb\u52a0 CSS \u5e76\u5c06 JavaScript \u9644\u52a0\u5230\u5b83\u6765\u4f7f\u5176\u5177\u6709\u4ea4\u4e92\u6027\u3002\u8fd9\u4e2a\u8fc7\u7a0b\u79f0\u4e3a\u6c34\u5408\u4f5c\u7528\u3002"),(0,o.kt)("p",null,"hydration \u6700\u91cd\u8981\u7684\u8981\u6c42\u662f\u670d\u52a1\u5668\u548c\u5ba2\u6237\u7aef\u751f\u6210\u7684 HTML \u7ed3\u6784\u5fc5\u987b\u5339\u914d\u3002\u5982\u679c\u4ed6\u4eec\u4e0d\u8fd9\u6837\u505a\uff0c\u6d4f\u89c8\u5668\u5c31\u65e0\u6cd5\u786e\u5b9a\u5b83\u5e94\u8be5\u5bf9\u7ed3\u6784\u7684\u7279\u5b9a\u90e8\u5206\u505a\u4ec0\u4e48\uff0c\u8fd9\u4f1a\u5bfc\u81f4\u4e0d\u6b63\u786e\u5730\u5448\u73b0\u6216\u975e\u4ea4\u4e92\u5f0f UI\u3002"),(0,o.kt)("p",null,"\u8fd9\u5728\u4f9d\u8d56\u4e8e\u6807\u8bc6\u7b26\u7684\u7279\u6027\u4e2d\u5c24\u4e3a\u7a81\u51fa\uff0c\u56e0\u4e3a\u5b83\u4eec\u5fc5\u987b\u5728\u4e24\u8fb9\u90fd\u5339\u914d\uff0c\u4f8b\u5982\u5728\u751f\u6210\u552f\u4e00\u6837\u5f0f\u7c7b\u540d\u79f0\u548c\u53ef\u8bbf\u95ee\u6027\u6807\u8bc6\u7b26\u65f6\u3002"),(0,o.kt)("h2",{id:"useid-hook-\u7684\u6f14\u8fdb"},"useID Hook \u7684\u6f14\u8fdb"),(0,o.kt)("p",null,"\u4e3a\u4e86\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\uff0cReact \u6700\u521d\u5f15\u5165\u4e86 useOpaqueIdentifier Hook\uff0c\u4f46\u4e0d\u5e78\u7684\u662f\uff0c\u5b83\u4e5f\u5b58\u5728\u4e00\u4e9b\u95ee\u9898\uff1a"),(0,o.kt)("p",null,"\u5728\u4e0d\u540c\u7684\u73af\u5883\u4e2d\uff0cHooks \u4f1a\u4ea7\u751f\u4e0d\u540c\u7684\u8f93\u51fa\uff08\u4e0d\u900f\u660e\uff09\uff1a"),(0,o.kt)("p",null,"\u670d\u52a1\u5668\u7aef\uff1a\u5b83\u4f1a\u4ea7\u751f\u4e00\u4e2a\u5b57\u7b26\u4e32\n\u5ba2\u6237\u7aef\uff1a\u5b83\u4f1a\u4ea7\u751f\u4e00\u4e2a\u7279\u6b8a\u7684\u5bf9\u8c61\uff0c\u5fc5\u987b\u76f4\u63a5\u4f20\u9012\u7ed9 DOM \u5c5e\u6027\n\u8fd9\u610f\u5473\u7740 Hook \u53ea\u80fd\u751f\u6210\u4e00\u4e2a\u6807\u8bc6\u7b26\uff0c\u5e76\u4e14\u4e0d\u53ef\u80fd\u52a8\u6001\u751f\u6210\u65b0\u7684 ID\uff0c\u56e0\u4e3a\u5b83\u5fc5\u987b\u9075\u5b88 Hook \u7684\u89c4\u5219\u3002 \u56e0\u6b64\uff0c\u5982\u679c\u60a8\u7684\u7ec4\u4ef6\u9700\u8981 X \u4e2a\u4e0d\u540c\u7684\u6807\u8bc6\u7b26\uff0c\u5b83\u5fc5\u987b\u5728\u4e0d\u540c\u7684\u65f6\u95f4\u8c03\u7528 Hook X\uff0c\u8fd9\u5728\u5b9e\u8df5\u4e2d\u663e\u7136\u4e0d\u80fd\u5f88\u597d\u5730\u6269\u5c55\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'// Code illustrating the way `useOpaqueIdentifier` handles the need for N identifiers in a single component, namely calling the hook N times.\n// Source: <https://github.com/facebook/react/pull/17322#issuecomment-613104823>\n\nfunction App() {\n    const tabIdOne = React.unstable_useOpaqueIdentifier();\n    const panelIdOne = React.unstable_useOpaqueIdentifier();\n    const tabIdTwo = React.unstable_useOpaqueIdentifier();\n    const panelIdTwo = React.unstable_useOpaqueIdentifier();\n\nreturn (\n    <React.Fragment>\n        <Tabs defaultValue="one">\n            <div role="tablist">\n                <Tab id={tabIdOne} panelId={panelIdOne} value="one">\n                    One\n                </Tab>\n                <Tab id={tabIdTwo} panelId={panelIdTwo} value="one">\n                    One\n                </Tab>\n            </div>\n            <TabPanel id={panelIdOne} tabId={tabIdOne} value="one">\n                Content One\n            </TabPanel>\n            <TabPanel id={panelIdTwo} tabId={tabIdTwo} value="two">\n                Content Two\n            </TabPanel>\n        </Tabs>\n    </React.Fragment>\n    );\n}\n')),(0,o.kt)("p",null,"\u67d0\u4e9b\u53ef\u8bbf\u95ee\u6027 API\uff08\u5982 aria-labelledby\uff09\u53ef\u4ee5\u901a\u8fc7\u7a7a\u683c\u5206\u9694\u7684\u5217\u8868\u63a5\u53d7\u591a\u4e2a\u6807\u8bc6\u7b26\uff0c\u4f46\u7531\u4e8e Hook \u7684\u8f93\u51fa\u88ab\u683c\u5f0f\u5316\u4e3a\u4e0d\u900f\u660e\u7684\u6570\u636e\u7c7b\u578b\uff0c\u5b83\u603b\u662f\u5fc5\u987b\u76f4\u63a5\u9644\u52a0\u5230 DOM \u5c5e\u6027\u3002\u8fd9\u610f\u5473\u7740\u65e0\u6cd5\u6b63\u786e\u4f7f\u7528\u4e0a\u8ff0\u53ef\u8bbf\u95ee\u6027 API\u3002"),(0,o.kt)("p",null,"\u4e3a\u4e86\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\uff0c\u5b9e\u73b0\u5df2\u66f4\u6539\u5e76\u91cd\u547d\u540d\u4e3a useId\u3002\u8fd9\u4e2a\u65b0\u7684 Hook API \u5728 SSR \u548c hydration \u671f\u95f4\u751f\u6210\u7a33\u5b9a\u7684\u6807\u8bc6\u7b26\u4ee5\u907f\u514d\u4e0d\u5339\u914d\u3002\u5728\u670d\u52a1\u5668\u6e32\u67d3\u7684\u5185\u5bb9\u4e4b\u5916\uff0c\u5b83\u56de\u9000\u5230\u4e00\u4e2a\u5168\u5c40\u8ba1\u6570\u5668\u3002"),(0,o.kt)("p",null,"\u4e0e\u4f7f\u7528 useOpaqueIdentifier \u521b\u5efa\u4e0d\u900f\u660e\u6570\u636e\u7c7b\u578b\uff08\u670d\u52a1\u5668\u4e2d\u7684\u7279\u6b8a\u5bf9\u8c61\u548c\u5ba2\u6237\u7aef\u4e2d\u7684\u5b57\u7b26\u4e32\uff09\u4e0d\u540c\uff0cuseId Hook \u4f1a\u5728\u4e24\u4fa7\u751f\u6210\u975e\u900f\u660e\u5b57\u7b26\u4e32\u3002"),(0,o.kt)("p",null,"\u8fd9\u610f\u5473\u7740\u5982\u679c\u6211\u4eec\u9700\u8981 X \u4e2a\u4e0d\u540c\u7684 ID\uff0c\u5c31\u6ca1\u6709\u5fc5\u8981\u518d\u8c03\u7528 Hook X \u6b21\u4e86\u3002\u76f8\u53cd\uff0c\u7ec4\u4ef6\u53ef\u4ee5\u8c03\u7528 useId \u4e00\u6b21\u5e76\u5c06\u5176\u7528\u4f5c\u6574\u4e2a\u7ec4\u4ef6\u6240\u9700\u7684\u6807\u8bc6\u7b26\u7684\u57fa\u7840\uff08\u4f8b\u5982\uff0c\u4f7f\u7528\u540e\u7f00\uff09\uff0c\u56e0\u4e3a\u5b83\u53ea\u662f\u4e00\u4e2a\u5b57\u7b26\u4e32\u3002\u8fd9\u89e3\u51b3\u4e86 useOpaqueIdentifier \u4e2d\u5b58\u5728\u7684\u4e24\u4e2a\u95ee\u9898\u3002"),(0,o.kt)("h2",{id:"\u5982\u4f55\u4f7f\u7528-useid"},"\u5982\u4f55\u4f7f\u7528 useID"),(0,o.kt)("p",null,"\u4e0b\u9762\u7684\u4ee3\u7801\u793a\u4f8b\u8bf4\u660e\u4e86\u5982\u4f55\u6839\u636e\u6211\u4eec\u4e0a\u9762\u8ba8\u8bba\u7684\u5185\u5bb9\u4f7f\u7528 useId\u3002 \u56e0\u4e3a React \u751f\u6210\u7684 ID \u662f\u5168\u5c40\u552f\u4e00\u7684\uff0c\u5e76\u4e14\u540e\u7f00\u662f\u672c\u5730\u552f\u4e00\u7684\uff0c\u6240\u4ee5\u52a8\u6001\u521b\u5efa\u7684 ID \u4e5f\u662f\u5168\u5c40\u552f\u4e00\u7684\u2014\u2014\u56e0\u6b64\u4e0d\u4f1a\u5bfc\u81f4\u4efb\u4f55\u6c34\u5408\u4e0d\u5339\u914d\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"// Code illustrating the improved way in which `useId` handles the need for N identifiers in a single component, namely calling the hook once and creating them dynamically.\n// Source: <https://github.com/reactwg/react-18/discussions/111>\n\nfunction NameFields() {\n    const id = useId();\n    return (\n        <div>\n            <label htmlFor={id + '-firstName'}>First Name</label>\n            <div>       \n                <input id={id + '-firstName'} type=\"text\" />\n            </div>\n            <label htmlFor={id + '-lastName'}>Last Name</label>\n            <div>       \n                <input id={id + '-lastName'} type=\"text\" />\n            </div>\n        </div>\n    );\n}\n")),(0,o.kt)("h1",{id:"the-useinsertioneffect-hook--css-in-js-\u5e93\u7684\u95ee\u9898"},"The useInsertionEffect Hook . CSS-in-JS \u5e93\u7684\u95ee\u9898"),(0,o.kt)("p",null,"\u6700\u540e\u4e00\u4e2a\u5c06\u5728 React 18 \u4e2d\u6dfb\u52a0\u7684 Hook\u2014\u2014\u6211\u4eec\u5c06\u5728\u8fd9\u91cc\u8ba8\u8bba\u2014\u2014\u662f useInsertionEffect\u3002\u8fd9\u4e2a\u4e0e\u5176\u4ed6\u7684\u7565\u6709\u4e0d\u540c\uff0c\u56e0\u4e3a\u5b83\u7684\u552f\u4e00\u76ee\u7684\u5bf9\u4e8e\u52a8\u6001\u751f\u6210\u65b0\u89c4\u5219\u5e76\u5728\u6587\u6863\u4e2d\u63d2\u5165\u5e26\u6709 ",(0,o.kt)("inlineCode",{parentName:"p"},"<style>")," \u6807\u8bb0\u7684 CSS-in-JS \u5e93\u5f88\u91cd\u8981\u3002"),(0,o.kt)("p",null,"\u5728\u67d0\u4e9b\u573a\u666f\u4e0b\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"<style>"),"\u6807\u7b7e\u9700\u8981\u5728\u5ba2\u6237\u7aef\u751f\u6210\u6216\u7f16\u8f91\uff0c\u5982\u679c\u4e0d\u4ed4\u7ec6\u5904\u7406\uff0c\u53ef\u80fd\u4f1a\u5bfc\u81f4\u5e76\u53d1\u6e32\u67d3\u7684\u6027\u80fd\u95ee\u9898\u3002\u8fd9\u662f\u56e0\u4e3a\u5728\u6dfb\u52a0\u6216\u5220\u9664 CSS \u89c4\u5219\u65f6\uff0c\u6d4f\u89c8\u5668\u5fc5\u987b\u68c0\u67e5\u8fd9\u4e9b\u89c4\u5219\u662f\u5426\u9002\u7528\u4e8e\u73b0\u6709\u6811\u3002\u5b83\u5fc5\u987b\u91cd\u65b0\u8ba1\u7b97\u6240\u6709\u6837\u5f0f\u89c4\u5219\u5e76\u91cd\u65b0\u5e94\u7528\u5b83\u4eec\u2014\u2014\u800c\u4e0d\u4ec5\u4ec5\u662f\u6539\u53d8\u7684\u89c4\u5219\u3002\u5982\u679c React \u53d1\u73b0\u53e6\u4e00\u4e2a\u7ec4\u4ef6\u4e5f\u751f\u6210\u4e86\u65b0\u89c4\u5219\uff0c\u90a3\u4e48\u540c\u6837\u7684\u8fc7\u7a0b\u5c06\u518d\u6b21\u53d1\u751f\u3002"),(0,o.kt)("p",null,"\u8fd9\u5b9e\u9645\u4e0a\u610f\u5473\u7740\u5728 React \u6e32\u67d3\u65f6\uff0c\u5fc5\u987b\u9488\u5bf9\u6bcf\u4e00\u5e27\u7684\u6240\u6709 DOM \u8282\u70b9\u91cd\u65b0\u8ba1\u7b97 CSS \u89c4\u5219\u3002\u867d\u7136\u4f60\u5f88\u6709\u53ef\u80fd\u4e0d\u4f1a\u9047\u5230\u8fd9\u4e2a\u95ee\u9898\uff0c\u4f46\u5b83\u7684\u89c4\u6a21\u5e76\u4e0d\u5927\u3002"),(0,o.kt)("p",null,"\u4ece\u7406\u8bba\u4e0a\u8bb2\uff0c\u6709\u4e00\u4e9b\u65b9\u6cd5\u4e3b\u8981\u4e0e\u65f6\u95f4\u6709\u5173\u3002\u8fd9\u4e2a\u65f6\u95f4\u95ee\u9898\u7684\u6700\u4f73\u89e3\u51b3\u65b9\u6848\u662f\u5728\u5bf9 DOM \u8fdb\u884c\u6240\u6709\u5176\u4ed6\u66f4\u6539\u7684\u540c\u65f6\u751f\u6210\u8fd9\u4e9b\u6807\u7b7e\uff0c\u5c31\u50cf React \u5e93\u90a3\u6837\u3002\u6700\u91cd\u8981\u7684\u662f\uff0c\u5b83\u5e94\u8be5\u53d1\u751f\u5728\u4efb\u4f55\u5c1d\u8bd5\u8bbf\u95ee\u5e03\u5c40\u4e4b\u524d\u4ee5\u53ca\u6240\u6709\u5185\u5bb9\u5448\u73b0\u7ed9\u6d4f\u89c8\u5668\u8fdb\u884c\u7ed8\u5236\u4e4b\u524d\u3002"),(0,o.kt)("p",null,"\u8fd9\u542c\u8d77\u6765\u50cf\u662f useLayoutEffect \u53ef\u4ee5\u89e3\u51b3\u7684\u95ee\u9898\uff0c\u4f46\u95ee\u9898\u662f\u540c\u4e00\u4e2a Hook \u5c06\u7528\u4e8e\u8bfb\u53d6\u5e03\u5c40\u548c\u63d2\u5165\u6837\u5f0f\u89c4\u5219\u3002\u8fd9\u53ef\u80fd\u4f1a\u5bfc\u81f4\u4e0d\u5e0c\u671b\u7684\u884c\u4e3a\uff0c\u4f8b\u5982\u5728\u4e00\u6b21\u901a\u8fc7\u4e2d\u591a\u6b21\u8ba1\u7b97\u5e03\u5c40\u6216\u8bfb\u53d6\u4e0d\u6b63\u786e\u7684\u5e03\u5c40\u3002"),(0,o.kt)("h2",{id:"useinsertioneffect-\u5982\u4f55\u89e3\u51b3\u5e76\u53d1\u6e32\u67d3\u95ee\u9898"},"useInsertionEffect \u5982\u4f55\u89e3\u51b3\u5e76\u53d1\u6e32\u67d3\u95ee\u9898"),(0,o.kt)("p",null,"\u4e3a\u4e86\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\uff0cReact \u56e2\u961f\u5f15\u5165\u4e86 useInsertionEffect Hook\u3002 \u5b83\u4e0e useLayoutEffect Hook \u975e\u5e38\u76f8\u4f3c\uff0c\u4f46\u5b83\u65e0\u6cd5\u8bbf\u95ee DOM \u8282\u70b9\u7684 refs\u3002"),(0,o.kt)("p",null,"\u8fd9\u610f\u5473\u7740\u53ea\u80fd\u63d2\u5165\u6837\u5f0f\u89c4\u5219\u3002 \u5b83\u7684\u4e3b\u8981\u7528\u4f8b\u662f\u63d2\u5165\u5168\u5c40 DOM \u8282\u70b9\uff0c\u5982 ",(0,o.kt)("inlineCode",{parentName:"p"},"<style>")," \u6216 SVGs ",(0,o.kt)("inlineCode",{parentName:"p"},"<defs>"),"\u3002 \u7531\u4e8e\u8fd9\u4ec5\u4e0e\u5728\u5ba2\u6237\u7aef\u751f\u6210\u6807\u7b7e\u6709\u5173\uff0c\u56e0\u6b64 Hook \u4e0d\u4f1a\u5728\u670d\u52a1\u5668\u4e0a\u8fd0\u884c\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"// Code illustrating the way `useInsertionEffect` is used.\n// Source: <https://github.com/reactwg/react-18/discussions/110>\n\nfunction useCSS(rule) {\n    useInsertionEffect(() => {\n        if (!isInserted.has(rule)) {\n            isInserted.add(rule);\n            document.head.appendChild(getStyleForRule(rule));\n        }\n    });\n    return rule;\n}\n\nfunction Component() {\n    let className = useCSS(rule);\n    return <div className={className} />;\n}\n")),(0,o.kt)("p",null,"React 18 \u6700\u4ee4\u4eba\u671f\u5f85\u7684\u7279\u6027\u662f\u5b83\u7684\u5e76\u53d1\u6e32\u67d3\u7279\u6027\u3002 \u968f\u7740\u56e2\u961f\u7684\u5ba3\u5e03\uff0c\u6211\u4eec\u6536\u5230\u4e86\u65b0\u7684 API\uff0c\u5141\u8bb8\u7528\u6237\u6839\u636e\u4ed6\u4eec\u7684\u7528\u4f8b\u91c7\u7528\u5e76\u53d1\u6e32\u67d3\u529f\u80fd\u3002 \u867d\u7136\u6709\u4e9b\u662f\u5168\u65b0\u7684\uff0c\u4f46\u6709\u4e9b\u662f\u57fa\u4e8e\u793e\u533a\u53cd\u9988\u7684\u5148\u524d API \u7684\u6539\u8fdb\u7248\u672c\u3002"),(0,o.kt)("p",null,"\u5728\u672c\u6587\u4e2d\uff0c\u6211\u4eec\u4ecb\u7ecd\u4e86\u4e09\u4e2a\u6700\u65b0\u7684 API\uff0c\u5373 useSyncExternalStore\u3001useId \u548c useInsertionEffect Hooks\u3002 \u6211\u4eec\u67e5\u770b\u4e86\u5b83\u4eec\u7684\u7528\u4f8b\u3001\u5b83\u4eec\u89e3\u51b3\u7684\u95ee\u9898\u3001\u4e0e\u4ee5\u524d\u7684\u7248\u672c\u76f8\u6bd4\u4e3a\u4ec0\u4e48\u9700\u8981\u8fdb\u884c\u67d0\u4e9b\u66f4\u6539\uff0c\u4ee5\u53ca\u5b83\u4eec\u7528\u4e8e\u5e76\u53d1\u6e32\u67d3\u7684\u76ee\u7684\u3002"),(0,o.kt)("p",null,"React 18 \u5145\u6ee1\u4e86\u65b0\u529f\u80fd\uff0c\u7edd\u5bf9\u503c\u5f97\u671f\u5f85\uff01"))}f.isMDXComponent=!0}}]);