"use strict";(self.webpackChunkhomepage=self.webpackChunkhomepage||[]).push([[4016],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),s=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=s(e.components);return o.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},g=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),g=s(n),f=r,m=g["".concat(l,".").concat(f)]||g[f]||p[f]||a;return n?o.createElement(m,c(c({ref:t},u),{},{components:n})):o.createElement(m,c({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=g;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var s=2;s<a;s++)c[s]=n[s];return o.createElement.apply(null,c)}return o.createElement.apply(null,n)}g.displayName="MDXCreateElement"},5526:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return p}});var o=n(7462),r=n(3366),a=(n(7294),n(3905)),c=["components"],i={title:"useLocalStorage",date:new Date("2022-04-14T16:00:46.000Z"),tags:["React"]},l=void 0,s={unversionedId:"custom-react-hook/zi-ding-yi-react-hook-shi-yong-localstorage",id:"custom-react-hook/zi-ding-yi-react-hook-shi-yong-localstorage",title:"useLocalStorage",description:"\u4f7f\u7528\u672c\u5730\u5b58\u50a8",source:"@site/docs/custom-react-hook/zi-ding-yi-react-hook-shi-yong-localstorage.md",sourceDirName:"custom-react-hook",slug:"/custom-react-hook/zi-ding-yi-react-hook-shi-yong-localstorage",permalink:"/homepage/docs/custom-react-hook/zi-ding-yi-react-hook-shi-yong-localstorage",draft:!1,editUrl:"https://github.com/umeimmense/homepage/blob/main/docs/intro.md/docs/custom-react-hook/zi-ding-yi-react-hook-shi-yong-localstorage.md",tags:[{label:"React",permalink:"/homepage/docs/tags/react"}],version:"current",frontMatter:{title:"useLocalStorage",date:"2022-04-14T16:00:46.000Z",tags:["React"]},sidebar:"tutorialSidebar",previous:{title:"useIsOverflow",permalink:"/homepage/docs/custom-react-hook/zi-ding-yi-react-hook-jian-cha-shi-fou-yi-chu"},next:{title:"\u81ea\u5b9a\u4e49 React Table",permalink:"/homepage/docs/category/\u81ea\u5b9a\u4e49-react-table"}},u={},p=[{value:"\u4f7f\u7528\u672c\u5730\u5b58\u50a8",id:"\u4f7f\u7528\u672c\u5730\u5b58\u50a8",level:2}],g={toc:p};function f(e){var t=e.components,n=(0,r.Z)(e,c);return(0,a.kt)("wrapper",(0,o.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u4f7f\u7528\u672c\u5730\u5b58\u50a8"},"\u4f7f\u7528\u672c\u5730\u5b58\u50a8"),(0,a.kt)("p",null,"\u4e00\u4e2a\u7b80\u6d01\u7684\u81ea\u5b9a\u4e49 React Hook\uff0c\u5c55\u793a\u4e86\u5982\u4f55\u5728 React \u4e2d\u4f7f\u7528\u672c\u5730\u5b58\u50a8\u6765\u5b58\u50a8\u72b6\u6001\u3002\u4f60\u53ef\u4ee5\u5728\u4efb\u4f55 React \u7ec4\u4ef6\u4e2d\u4f7f\u7528\u5b83\uff0c\u5b83\u5141\u8bb8\u4f60\u5728\u672c\u5730\u5b58\u50a8\u4e2d\u5199\u5165\u548c\u8bfb\u53d6\u72b6\u6001\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"import * as React from 'react';\n\nconst useLocalStorage = (storageKey, fallbackState) => {\n  const [value, setValue] = React.useState(\n    JSON.parse(localStorage.getItem(storageKey)) ?? fallbackState\n  );\n\n  React.useEffect(() => {\n    localStorage.setItem(storageKey, JSON.stringify(value));\n  }, [value, storageKey]);\n\n  return [value, setValue];\n};\n\nconst App = () => {\n  const [isOpen, setOpen] = useLocalStorage('is-open', false);\n\n  const handleToggle = () => {\n    setOpen(!isOpen);\n  };\n\n  return (\n    <div>\n      <button onClick={handleToggle}>Toggle</button>\n      {isOpen && <div>Content</div>}\n    </div>\n  );\n};\n\nexport default App;\n")),(0,a.kt)("p",null,"\u672c\u5730\u5b58\u50a8Hook\u53ea\u662f\u4f5c\u4e3a\u4e00\u79cd\u5b66\u4e60\u4f53\u9a8c\u3002\u5982\u679c\u4f60\u5728\u751f\u4ea7\u73af\u5883\u4e2d\u4f9d\u8d56 React \u5e94\u7528\u7a0b\u5e8f\u7684\u672c\u5730\u5b58\u50a8\uff0c\u4f60\u5e94\u8be5\u68c0\u67e5\u66f4\u5e7f\u6cdb\u4f7f\u7528\u7684Hook\uff08\u56e0\u6b64\u662f\u5065\u58ee\u7684\uff09\u3002"))}f.isMDXComponent=!0}}]);