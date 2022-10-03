"use strict";(self.webpackChunkhomepage=self.webpackChunkhomepage||[]).push([[9148],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return d}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),l=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=l(e.components);return a.createElement(p.Provider,{value:n},e.children)},i={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,s=e.originalType,p=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),m=l(t),d=r,f=m["".concat(p,".").concat(d)]||m[d]||i[d]||s;return t?a.createElement(f,o(o({ref:n},c),{},{components:t})):a.createElement(f,o({ref:n},c))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var s=t.length,o=new Array(s);o[0]=m;var u={};for(var p in n)hasOwnProperty.call(n,p)&&(u[p]=n[p]);u.originalType=e,u.mdxType="string"==typeof e?e:r,o[1]=u;for(var l=2;l<s;l++)o[l]=t[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},3499:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return o},default:function(){return i},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return l}});var a=t(3117),r=(t(7294),t(3905));const s={title:"React Suspense \u57fa\u672c\u6307\u5357",date:new Date("2022-03-22T03:16:27.000Z"),tags:["React"]},o=void 0,u={permalink:"/homepage/blog/react-suspense-ji-ben-zhi-nan",editUrl:"https://github.com/umeimmense/homepage/tree/main/blog/blog/react-suspense-ji-ben-zhi-nan.md",source:"@site/blog/react-suspense-ji-ben-zhi-nan.md",title:"React Suspense \u57fa\u672c\u6307\u5357",description:"\u524d\u8a00",date:"2022-03-22T03:16:27.000Z",formattedDate:"2022\u5e743\u670822\u65e5",tags:[{label:"React",permalink:"/homepage/blog/tags/react"}],readingTime:10.3,hasTruncateMarker:!1,authors:[],frontMatter:{title:"React Suspense \u57fa\u672c\u6307\u5357",date:"2022-03-22T03:16:27.000Z",tags:["React"]},prevItem:{title:"React \u4e2d\u7684\u6d45\u6bd4\u8f83\u662f\u5982\u4f55\u5de5\u4f5c\u7684\uff1f",permalink:"/homepage/blog/react-zhong-de-qian-bi-jiao-shi-ru-he-gong-zuo-de"},nextItem:{title:"React 18 \u4e2d\u7684\u81ea\u52a8\u6279\u5904\u7406",permalink:"/homepage/blog/react-18-zhong-de-zi-dong-pi-chu-li"}},p={authorsImageUrls:[]},l=[{value:"\u524d\u8a00",id:"\u524d\u8a00",level:2},{value:"\u4ec0\u4e48\u662fSuspense\uff1f",id:"\u4ec0\u4e48\u662fsuspense",level:2},{value:"\u4e3a\u4ec0\u4e48\u6211\u4eec\u9700\u8981Suspense\uff1f",id:"\u4e3a\u4ec0\u4e48\u6211\u4eec\u9700\u8981suspense",level:2},{value:"\u6e32\u67d3\u65f6\u83b7\u53d6",id:"\u6e32\u67d3\u65f6\u83b7\u53d6",level:3},{value:"\u6e32\u67d3\u540e\u83b7\u53d6",id:"\u6e32\u67d3\u540e\u83b7\u53d6",level:3},{value:"Suspense \u5982\u4f55\u89e3\u51b3\u6570\u636e\u83b7\u53d6\u95ee\u9898\uff1f",id:"suspense-\u5982\u4f55\u89e3\u51b3\u6570\u636e\u83b7\u53d6\u95ee\u9898",level:2},{value:"Suspense\u6709\u4ec0\u4e48\u597d\u5904\uff1f",id:"suspense\u6709\u4ec0\u4e48\u597d\u5904",level:2},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",level:2}],c={toc:l};function i(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u524d\u8a00"},"\u524d\u8a00"),(0,r.kt)("p",null,"\u5728 React 18 \u4e2d\u53d1\u5e03\u7684\u53e6\u4e00\u4e2a\u91cd\u8981\u7279\u6027\u662f Suspense\u3002\u5982\u679c\u4f60\u5728\u4e4b\u524d\u4f7f\u7528\u8fc7 React \uff0c\u90a3\u4e48\u4f60\u5c31\u4f1a\u77e5\u9053 Suspense \u529f\u80fd\u5e76\u4e0d\u662f\u7279\u522b\u65b0\u3002\u65e9\u5728 2018 \u5e74\uff0cSuspense \u4f5c\u4e3a React 16.6 \u7248\u7684\u4e00\u90e8\u5206\u4f5c\u4e3a\u5b9e\u9a8c\u6027\u529f\u80fd\u53d1\u5e03\u3002\u7136\u540e\uff0c\u5b83\u4e3b\u8981\u9488\u5bf9\u4e0eReact.lazy\u3002"),(0,r.kt)("p",null,"\u4f46\u662f\u73b0\u5728\uff0c\u6709\u4e86 React 18\uff0cSuspense \u7684\u6b63\u5f0f\u53d1\u5e03\u5c31\u5728\u6211\u4eec\u9762\u524d\u3002\u4f34\u968f\u7740\u5e76\u53d1\u6e32\u67d3\u7684\u53d1\u5e03\uff0cSuspense \u7684\u771f\u6b63\u5a01\u529b\u7ec8\u4e8e\u89e3\u9501\u4e86\u3002Suspense \u548c\u5e76\u53d1\u6e32\u67d3\u4e4b\u95f4\u7684\u4ea4\u4e92\u4e3a\u6539\u5584\u7528\u6237\u4f53\u9a8c\u5f00\u8f9f\u4e86\u5e7f\u9614\u7684\u4e16\u754c\u3002"),(0,r.kt)("p",null,"\u4f46\u5c31\u50cf\u6240\u6709\u529f\u80fd\u4e00\u6837\uff0c\u5c31\u50cf\u5e76\u53d1\u6e32\u67d3\u4e00\u6837\uff0c\u4ece\u57fa\u7840\u5f00\u59cb\u5f88\u91cd\u8981\u3002Suspense \u5230\u5e95\u662f\u4ec0\u4e48\uff1f\u4e3a\u4ec0\u4e48\u6211\u4eec\u9996\u5148\u9700\u8981Suspense \uff1fSuspense \u5982\u4f55\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\uff1f\u6709\u4ec0\u4e48\u597d\u5904\uff1f\u4e3a\u4e86\u5e2e\u52a9\u4f60\u7406\u89e3\u8fd9\u4e9b\u57fa\u7840\u77e5\u8bc6\uff0c\u672c\u6587\u5c06\u8be6\u7ec6\u4ecb\u7ecd\u8fd9\u4e9b\u95ee\u9898\uff0c\u5e76\u4e3a\u4f60\u63d0\u4f9b\u6709\u5173 Suspense \u7684\u77e5\u8bc6\u57fa\u7840\u3002"),(0,r.kt)("h2",{id:"\u4ec0\u4e48\u662fsuspense"},"\u4ec0\u4e48\u662fSuspense\uff1f"),(0,r.kt)("p",null,"\u672c\u8d28\u4e0a\uff0cSuspense \u662f React \u5f00\u53d1\u4eba\u5458\u5411 React \u6307\u793a\u7ec4\u4ef6\u6b63\u5728\u7b49\u5f85\u6570\u636e\u51c6\u5907\u597d\u7684\u4e00\u79cd\u673a\u5236\u3002\u7136\u540e React \u77e5\u9053\u5b83\u5e94\u8be5\u7b49\u5f85\u8be5\u6570\u636e\u88ab\u83b7\u53d6\u3002\u540c\u65f6\uff0c\u5c06\u5411\u7528\u6237\u663e\u793a\u4e00\u4e2a\u53cd\u9988\uff0c\u5e76\u4e14 React \u5c06\u7ee7\u7eed\u6e32\u67d3\u5e94\u7528\u7a0b\u5e8f\u7684\u5176\u4f59\u90e8\u5206\u3002\u6570\u636e\u51c6\u5907\u597d\u540e\uff0cReact \u4f1a\u8fd4\u56de\u5230\u90a3\u4e2a\u7279\u5b9a\u7684 UI \u5e76\u76f8\u5e94\u5730\u66f4\u65b0\u5b83\u3002"),(0,r.kt)("p",null,"\u4ece\u6839\u672c\u4e0a\u8bf4\uff0c\u8fd9\u542c\u8d77\u6765\u4e0e React \u5f00\u53d1\u4eba\u5458\u5fc5\u987b\u5b9e\u73b0\u6570\u636e\u83b7\u53d6\u6d41\u7a0b\u7684\u5f53\u524d\u65b9\u5f0f\u6ca1\u6709\u592a\u5927\u533a\u522b\uff1a\u4f7f\u7528\u67d0\u79cd\u72b6\u6001\u6765\u6307\u793a\u7ec4\u4ef6\u662f\u5426\u4ecd\u5728\u7b49\u5f85\u6570\u636e\uff0cuseEffect\u5f00\u59cb\u83b7\u53d6\u6570\u636e\uff0c\u663e\u793a\u52a0\u8f7d\u72b6\u6001\u57fa\u4e8e\u6570\u636e\u7684\u72b6\u6001\uff0c\u5e76\u5728\u6570\u636e\u51c6\u5907\u597d\u540e\u66f4\u65b0 UI\u3002"),(0,r.kt)("p",null,"\u4f46\u5728\u5b9e\u8df5\u4e2d\uff0cSuspense \u4f7f\u8fd9\u5728\u6280\u672f\u4e0a\u5b8c\u5168\u4e0d\u540c\u3002\u4e0e\u4e0a\u9762\u63d0\u5230\u7684\u6570\u636e\u83b7\u53d6\u6d41\u7a0b\u76f8\u53cd\uff0cSuspense \u4e0e React \u6df1\u5ea6\u96c6\u6210\uff0c\u5141\u8bb8\u5f00\u53d1\u4eba\u5458\u66f4\u76f4\u89c2\u5730\u7f16\u6392\u52a0\u8f7d\u72b6\u6001\uff0c\u5e76\u907f\u514d\u7ade\u4e89\u6761\u4ef6\u3002\u4e3a\u4e86\u66f4\u597d\u5730\u7406\u89e3\u8fd9\u4e9b\u7ec6\u8282\uff0c\u4e86\u89e3\u6211\u4eec\u4e3a\u4ec0\u4e48\u9700\u8981 Suspense \u5f88\u91cd\u8981\u3002"),(0,r.kt)("h2",{id:"\u4e3a\u4ec0\u4e48\u6211\u4eec\u9700\u8981suspense"},"\u4e3a\u4ec0\u4e48\u6211\u4eec\u9700\u8981Suspense\uff1f"),(0,r.kt)("p",null,"\u5728\u6ca1\u6709 Suspense \u7684\u60c5\u51b5\u4e0b\uff0c\u5b9e\u73b0\u6570\u636e\u83b7\u53d6\u6d41\u7a0b\u7684\u4e3b\u8981\u65b9\u6cd5\u6709\u4e24\u79cd\uff1a",(0,r.kt)("strong",{parentName:"p"},"\u6e32\u67d3\u65f6\u83b7\u53d6"),"\u548c",(0,r.kt)("strong",{parentName:"p"},"\u6e32\u67d3\u540e\u83b7\u53d6"),"\u3002\u4f46\u662f\uff0c\u8fd9\u4e9b\u4f20\u7edf\u7684\u6570\u636e\u83b7\u53d6\u6d41\u7a0b\u5b58\u5728\u4e00\u4e9b\u95ee\u9898\u3002\u8981\u4e86\u89e3 Suspense\uff0c\u6211\u4eec\u5fc5\u987b\u6df1\u5165\u7814\u7a76\u8fd9\u4e9b\u6d41\u7a0b\u7684\u95ee\u9898\u548c\u5c40\u9650\u6027\u3002"),(0,r.kt)("h3",{id:"\u6e32\u67d3\u65f6\u83b7\u53d6"},"\u6e32\u67d3\u65f6\u83b7\u53d6"),(0,r.kt)("p",null,"useEffect\u5927\u591a\u6570\u4eba\u5c06\u4f7f\u7528\u548c\u72b6\u6001\u53d8\u91cf\u6765\u5b9e\u73b0\u524d\u9762\u63d0\u5230\u7684\u6570\u636e\u83b7\u53d6\u6d41\u7a0b\u3002\u8fd9\u610f\u5473\u7740\u53ea\u6709\u5728\u7ec4\u4ef6\u5448\u73b0\u65f6\u624d\u5f00\u59cb\u83b7\u53d6\u6570\u636e\u3002\u6240\u6709\u6570\u636e\u83b7\u53d6\u90fd\u53d1\u751f\u5728\u7ec4\u4ef6\u7684\u526f\u4f5c\u7528\u548c\u751f\u547d\u5468\u671f\u65b9\u6cd5\u4e2d\u3002"),(0,r.kt)("p",null,"\u8fd9\u79cd\u65b9\u6cd5\u7684\u4e3b\u8981\u95ee\u9898\u662f:\u7ec4\u4ef6\u4ec5\u5728\u6e32\u67d3\u65f6\u89e6\u53d1\u6570\u636e\u83b7\u53d6\uff0c\u5f02\u6b65\u7279\u6027\u8feb\u4f7f\u7ec4\u4ef6\u5fc5\u987b\u7b49\u5f85\u5176\u4ed6\u7ec4\u4ef6\u7684\u6570\u636e\u8bf7\u6c42\u3002"),(0,r.kt)("p",null,"\u5047\u8bbe\u6211\u4eec\u6709\u4e00\u4e2aComponentA\u83b7\u53d6\u4e00\u4e9b\u6570\u636e\u5e76\u5177\u6709\u52a0\u8f7d\u72b6\u6001\u7684\u7ec4\u4ef6\u3002\u5728\u5185\u90e8\uff0cComponentA\u8fd8\u5448\u73b0\u53e6\u4e00\u4e2a\u7ec4\u4ef6ComponentB\uff0c\u8be5\u7ec4\u4ef6\u4e5f\u81ea\u5df1\u6267\u884c\u4e00\u4e9b\u6570\u636e\u83b7\u53d6\u3002\u4f46\u662f\u7531\u4e8e\u6570\u636e\u83b7\u53d6\u7684\u5b9e\u73b0\u65b9\u5f0f\uff0cComponentB\u53ea\u6709\u5728\u6e32\u67d3\u65f6\u624d\u5f00\u59cb\u83b7\u53d6\u6570\u636e\u3002\u8fd9\u610f\u5473\u7740\u5b83\u5fc5\u987b\u7b49\u5230ComponentA\u5b8c\u6210\u83b7\u53d6\u6570\u636e\u7136\u540e\u6e32\u67d3ComponentB\u3002"),(0,r.kt)("p",null,"\u8fd9\u5bfc\u81f4\u4e86\u7011\u5e03\u5f0f\u65b9\u6cd5\uff0c\u5176\u4e2d\u7ec4\u4ef6\u4e4b\u95f4\u7684\u6570\u636e\u83b7\u53d6\u987a\u5e8f\u53d1\u751f\uff0c\u8fd9\u5b9e\u8d28\u4e0a\u610f\u5473\u7740\u5b83\u4eec\u76f8\u4e92\u963b\u585e\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"function ComponentA() {\n  const [data, setData] = useState(null);\n\n  useEffect(() => {\n    fetchAwesomeData().then(data => setData(data));\n  }, []);\n\n  if (user === null) {\n    return <p>Loading data...</p>;\n  }\n\n  return (\n    <>\n      <h1>{data.title}</h1>\n      <ComponentB />\n    </>\n  );\n}\n\nfunction ComponentB() {\n  const [data, setData] = useState(null);\n\n  useEffect(() => {\n    fetchGreatData().then(data => setData(data));\n  }, []);\n\n  return data === null ? <h2>Loading data...</h2> : <SomeComponent data={data} />;\n}\n")),(0,r.kt)("h3",{id:"\u6e32\u67d3\u540e\u83b7\u53d6"},"\u6e32\u67d3\u540e\u83b7\u53d6"),(0,r.kt)("p",null,"\u4e3a\u4e86\u9632\u6b62\u7ec4\u4ef6\u4e4b\u95f4\u6570\u636e\u83b7\u53d6\u7684\u987a\u5e8f\u963b\u585e\uff0c\u4e00\u79cd\u66ff\u4ee3\u65b9\u6cd5\u662f\u5c3d\u65e9\u5f00\u59cb\u6240\u6709\u6570\u636e\u83b7\u53d6\u3002\u56e0\u6b64\uff0c\u4e0e\u5176\u8ba9\u7ec4\u4ef6\u8d1f\u8d23\u5904\u7406\u6e32\u67d3\u65f6\u7684\u6570\u636e\u83b7\u53d6\uff0c\u800c\u4e14\u6570\u636e\u8bf7\u6c42\u90fd\u5355\u72ec\u53d1\u751f\uff0c\u800c\u662f\u5728\u6811\u5f00\u59cb\u6e32\u67d3\u4e4b\u524d\u542f\u52a8\u6240\u6709\u8bf7\u6c42\u3002"),(0,r.kt)("p",null,"\u8fd9\u79cd\u65b9\u6cd5\u7684\u4f18\u70b9\u662f\u6240\u6709\u6570\u636e\u8bf7\u6c42\u90fd\u662f\u4e00\u8d77\u53d1\u8d77\u7684\uff0c\u56e0\u6b64ComponentB\u4e0d\u5fc5\u7b49\u5f85ComponentA\u5b8c\u6210\u3002\u8fd9\u89e3\u51b3\u4e86\u7ec4\u4ef6\u987a\u5e8f\u963b\u585e\u5f7c\u6b64\u6570\u636e\u6d41\u7684\u95ee\u9898\u3002\u4f46\u662f\uff0c\u5b83\u5f15\u5165\u4e86\u53e6\u4e00\u4e2a\u95ee\u9898\uff0c\u6211\u4eec\u5fc5\u987b\u7b49\u5f85\u6240\u6709\u6570\u636e\u8bf7\u6c42\u5b8c\u6210\uff0c\u7136\u540e\u624d\u80fd\u4e3a\u7528\u6237\u5448\u73b0\u4efb\u4f55\u5185\u5bb9\u3002\u53ef\u4ee5\u60f3\u8c61\uff0c\u8fd9\u4e0d\u662f\u6700\u4f73\u4f53\u9a8c\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"// Start fetching before rendering the entire tree\nfunction fetchAllData() {\n  return Promise.all([\n        fetchAwesomeData(),\n        fetchGreatData()\n  ]).then(([awesomeData, greatData]) => ({\n    awesomeData,\n        greatData\n  }))\n}\n\nconst promise = fetchAllData();\n\nfunction ComponentA() {\n  const [awesomeData, setAwesomeData] = useState(null);\n  const [greatData, setGreatData] = useState(null);\n\n  useEffect(() => {\n    promise.then(({ awesomeData, greatData }) => {\n      setAwesomeData(awesomeData);\n      setGreatData(greatData);\n    });\n  }, []);\n\n  if (user === null) {\n    return <p>Loading data...</p>;\n  }\n\n  return (\n    <>\n      <h1>{data.title}</h1>\n      <ComponentB />\n    </>\n  );\n}\n\nfunction ComponentB({data}) {\n  return data === null ? <h2>Loading data...</h2> : <SomeComponent data={data} />;\n}\n")),(0,r.kt)("h2",{id:"suspense-\u5982\u4f55\u89e3\u51b3\u6570\u636e\u83b7\u53d6\u95ee\u9898"},"Suspense \u5982\u4f55\u89e3\u51b3\u6570\u636e\u83b7\u53d6\u95ee\u9898\uff1f"),(0,r.kt)("p",null,"\u4ece\u672c\u8d28\u4e0a\u8bb2\uff0c",(0,r.kt)("strong",{parentName:"p"},"fetch-on-render "),"\u548c ",(0,r.kt)("strong",{parentName:"p"},"fetch-then-render")," \u7684\u4e3b\u8981\u95ee\u9898\u5f52\u7ed3\u4e3a\u6211\u4eec\u8bd5\u56fe\u5f3a\u5236\u540c\u6b65\u4e24\u4e2a\u4e0d\u540c\u7684\u6d41\u7a0b\uff0c\u5373\u6570\u636e\u83b7\u53d6\u6d41\u7a0b\u548c React \u751f\u547d\u5468\u671f\u3002\u501f\u52a9 Suspense\uff0c\u6211\u4eec\u83b7\u5f97\u4e86\u4e00\u79cd\u4e0d\u540c\u7c7b\u578b\u7684\u6570\u636e\u83b7\u53d6\u65b9\u6cd5\uff0c\u5373\u6240\u8c13\u7684 ",(0,r.kt)("strong",{parentName:"p"},"render-as-you-fetch")," \u65b9\u6cd5\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"const specialSuspenseResource = fetchAllDataSuspense();\n\nfunction App() {\n  return (\n    <Suspense fallback={<h1>Loading data...</h1>}>\n      <ComponentA />\n      <Suspense fallback={<h2>Loading data...</h2>}>\n        <ComponentB />\n      </Suspense>\n    </Suspense>\n  );\n}\n\nfunction ComponentA() {\n  const data = specialSuspenseResource.awesomeData.read();\n  return <h1>{data.title}</h1>;\n}\n\nfunction ComponentB() {\n    const data = specialSuspenseResource.greatData.read();\n  return <SomeComponent data={data} />;\n}\n")),(0,r.kt)("p",null,"\u4e0e\u4e4b\u524d\u5b9e\u73b0\u7684\u4e0d\u540c\u4e4b\u5904\u5728\u4e8e\u5b83\u5141\u8bb8\u7ec4\u4ef6\u5728 React \u5230\u8fbe\u5b83\u7684\u90a3\u4e00\u523b\u542f\u52a8\u6570\u636e\u83b7\u53d6\u3002\u8fd9\u751a\u81f3\u53d1\u751f\u5728\u7ec4\u4ef6\u6e32\u67d3\u4e4b\u524d\uff0c\u5e76\u4e14 React \u5e76\u6ca1\u6709\u5c31\u6b64\u505c\u6b62\u3002\u7136\u540e\u5b83\u7ee7\u7eed\u8bc4\u4f30\u7ec4\u4ef6\u7684\u5b50\u6811\uff0c\u5e76\u5728\u7b49\u5f85\u6570\u636e\u83b7\u53d6\u5b8c\u6210\u65f6\u7ee7\u7eed\u5c1d\u8bd5\u6e32\u67d3\u5b83\u3002"),(0,r.kt)("p",null,"\u8fd9\u610f\u5473\u7740 Suspense \u4e0d\u4f1a\u963b\u585e\u6e32\u67d3\uff0c\u8fd9\u610f\u5473\u7740\u5b50\u7ec4\u4ef6\u4e0d\u5fc5\u7b49\u5f85\u7236\u7ec4\u4ef6\u5b8c\u6210\u540e\u518d\u53d1\u8d77\u5176\u6570\u636e\u83b7\u53d6\u8bf7\u6c42\u3002React \u5c1d\u8bd5\u5c3d\u53ef\u80fd\u591a\u5730\u6e32\u67d3\uff0c\u540c\u65f6\u542f\u52a8\u9002\u5f53\u7684\u6570\u636e\u83b7\u53d6\u8bf7\u6c42\u3002\u8bf7\u6c42\u5b8c\u6210\u540e\uff0cReact \u5c06\u91cd\u65b0\u8bbf\u95ee\u76f8\u5e94\u7684\u7ec4\u4ef6\u5e76\u4f7f\u7528\u65b0\u63a5\u6536\u7684\u6570\u636e\u76f8\u5e94\u5730\u66f4\u65b0 UI\u3002"),(0,r.kt)("h2",{id:"suspense\u6709\u4ec0\u4e48\u597d\u5904"},"Suspense\u6709\u4ec0\u4e48\u597d\u5904\uff1f"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5c3d\u65e9\u5f00\u59cb\u83b7\u53d6\u6570\u636e\u3002Suspense \u5f15\u5165\u7684 render-as-you-fetch \u65b9\u6cd5\u6700\u5927\u548c\u6700\u76f4\u63a5\u7684\u597d\u5904\u662f\u6570\u636e\u83b7\u53d6\u5c3d\u65e9\u542f\u52a8\u3002\u8fd9\u610f\u5473\u7740\u7528\u6237\u5fc5\u987b\u7b49\u5f85\u7684\u65f6\u95f4\u66f4\u5c11\uff0c\u5e94\u7528\u7a0b\u5e8f\u66f4\u5feb\uff0c\u8fd9\u5bf9\u4efb\u4f55\u524d\u7aef\u5e94\u7528\u7a0b\u5e8f\u90fd\u662f\u666e\u904d\u6709\u76ca\u7684\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u66f4\u76f4\u89c2\u7684\u52a0\u8f7d\u72b6\u6001\u3002\u4f7f\u7528 Suspense\uff0c\u7ec4\u4ef6\u4e0d\u5fc5\u518d\u5305\u542b\u5927\u91cf\u7684 if \u8bed\u53e5\u6216\u5355\u72ec\u8ddf\u8e2a\u72b6\u6001\u6765\u5b9e\u73b0\u52a0\u8f7d\u72b6\u6001\u3002\u76f8\u53cd\uff0c\u52a0\u8f7d\u72b6\u6001\u88ab\u96c6\u6210\u5230\u5b83\u6240\u5c5e\u7684\u7ec4\u4ef6\u672c\u8eab\u4e2d\u3002\u8fd9\u4f7f\u5f97\u7ec4\u4ef6\u66f4\u76f4\u89c2\uff0c\u901a\u8fc7\u4fdd\u6301\u52a0\u8f7d\u4ee3\u7801\u63a5\u8fd1\u76f8\u5173\u4ee3\u7801\uff0c\u5e76\u4e14\u66f4\u53ef\u91cd\u7528\uff0c\u56e0\u4e3a\u52a0\u8f7d\u72b6\u6001\u5305\u542b\u5728\u7ec4\u4ef6\u4e2d\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u907f\u514d\u7ade\u4e89\u6761\u4ef6\u3002\u6211\u6ca1\u6709\u5728\u672c\u6587\u4e2d\u6df1\u5165\u8ba8\u8bba\u7684\u73b0\u6709\u6570\u636e\u83b7\u53d6\u5b9e\u73b0\u7684\u95ee\u9898\u4e4b\u4e00\u662f\u7ade\u4e89\u6761\u4ef6\u3002\u5728\u67d0\u4e9b\u60c5\u51b5\u4e0b\uff0c\u4f20\u7edf\u7684 fetch-on-render \u548c fetch-then-render \u5b9e\u73b0\u53ef\u80fd\u4f1a\u5bfc\u81f4\u7ade\u4e89\u6761\u4ef6\uff0c\u5177\u4f53\u53d6\u51b3\u4e8e\u65f6\u95f4\u3001\u7528\u6237\u8f93\u5165\u548c\u53c2\u6570\u5316\u6570\u636e\u8bf7\u6c42\u7b49\u4e0d\u540c\u56e0\u7d20\u3002\u4e3b\u8981\u7684\u6f5c\u5728\u95ee\u9898\u662f\u6211\u4eec\u8bd5\u56fe\u5f3a\u5236\u540c\u6b65\u4e24\u4e2a\u4e0d\u540c\u7684\u8fdb\u7a0b\uff0cReact \u548c\u6570\u636e\u83b7\u53d6\u3002\u4f46\u662f\u4f7f\u7528 Suspense\uff0c\u8fd9\u53ef\u4ee5\u66f4\u4f18\u96c5\u3001\u66f4\u96c6\u6210\u5730\u5b8c\u6210\uff0c\u4ece\u800c\u907f\u514d\u4e86\u4e0a\u8ff0\u95ee\u9898\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u66f4\u96c6\u6210\u7684\u9519\u8bef\u5904\u7406\u3002\u4f7f\u7528 Suspense\uff0c\u6211\u4eec\u57fa\u672c\u4e0a\u5df2\u7ecf\u4e3a\u6570\u636e\u8bf7\u6c42\u6d41\u521b\u5efa\u4e86\u8fb9\u754c\u3002\u6700\u91cd\u8981\u7684\u662f\uff0c\u7531\u4e8e Suspense \u4f7f\u5176\u4e0e\u7ec4\u4ef6\u4ee3\u7801\u7684\u96c6\u6210\u66f4\u52a0\u76f4\u89c2\uff0c\u5b83\u5141\u8bb8 React \u5f00\u53d1\u4eba\u5458\u8fd8\u4e3a React \u4ee3\u7801\u548c\u6570\u636e\u8bf7\u6c42\u5b9e\u73b0\u66f4\u96c6\u6210\u7684\u9519\u8bef\u5904\u7406\u3002")),(0,r.kt)("h2",{id:"\u603b\u7ed3"},"\u603b\u7ed3"),(0,r.kt)("p",null,"React Suspense \u5df2\u7ecf\u88ab\u5173\u6ce8\u4e86 3 \u5e74\u591a\u3002\u4f46\u662f\u968f\u7740 React 18 \u7684\u53d1\u5e03\uff0c\u5b98\u65b9\u53d1\u5e03\u7684\u65f6\u95f4\u8d8a\u6765\u8d8a\u8fd1\u4e86\u3002\u9664\u4e86\u5e76\u53d1\u6e32\u67d3\uff0c\u5b83\u5c06\u662f\u4f5c\u4e3a React \u7248\u672c\u7684\u4e00\u90e8\u5206\u53d1\u5e03\u7684\u6700\u5927\u529f\u80fd\u4e4b\u4e00\u3002\u5c31\u5176\u672c\u8eab\u800c\u8a00\uff0c\u5b83\u53ef\u4ee5\u5c06\u6570\u636e\u83b7\u53d6\u548c\u52a0\u8f7d\u72b6\u6001\u5b9e\u73b0\u63d0\u5347\u5230\u4e00\u4e2a\u65b0\u7684\u76f4\u89c2\u548c\u4f18\u96c5\u6c34\u5e73\u3002"),(0,r.kt)("p",null,"\u4e3a\u4e86\u5e2e\u52a9\u4f60\u4e86\u89e3 Suspense \u7684\u57fa\u7840\u77e5\u8bc6\uff0c\u672c\u6587\u4ecb\u7ecd\u4e86\u51e0\u4e2a\u5bf9\u5176\u5f88\u91cd\u8981\u7684\u95ee\u9898\u548c\u65b9\u9762\u3002\u8fd9\u6d89\u53ca\u5230 Suspense \u662f\u4ec0\u4e48\uff0c\u4e3a\u4ec0\u4e48\u6211\u4eec\u9996\u5148\u9700\u8981\u50cf Suspense \u8fd9\u6837\u7684\u4e1c\u897f\uff0c\u5b83\u5982\u4f55\u89e3\u51b3\u67d0\u4e9b\u6570\u636e\u83b7\u53d6\u95ee\u9898\u4ee5\u53ca Suspense \u5e26\u6765\u7684\u6240\u6709\u597d\u5904\u3002"))}i.isMDXComponent=!0}}]);