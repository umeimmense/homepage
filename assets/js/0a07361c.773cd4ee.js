"use strict";(self.webpackChunkcool_coding=self.webpackChunkcool_coding||[]).push([[2927],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return p}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},l=Object.keys(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=o.createContext({}),u=function(e){var t=o.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=u(e.components);return o.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),m=u(n),p=r,g=m["".concat(i,".").concat(p)]||m[p]||d[p]||l;return n?o.createElement(g,s(s({ref:t},c),{},{components:n})):o.createElement(g,s({ref:t},c))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,s=new Array(l);s[0]=m;var a={};for(var i in t)hasOwnProperty.call(t,i)&&(a[i]=t[i]);a.originalType=e,a.mdxType="string"==typeof e?e:r,s[1]=a;for(var u=2;u<l;u++)s[u]=n[u];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8428:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return i},default:function(){return p},frontMatter:function(){return a},metadata:function(){return u},toc:function(){return d}});var o=n(7462),r=n(3366),l=(n(7294),n(3905)),s=["components"],a={title:"7 \u4e2a\u53ef\u80fd\u9700\u8981\u7684\u81ea\u5b9a\u4e49 React Hook",date:new Date("2021-11-29T22:52:17.000Z"),tags:["React"]},i=void 0,u={permalink:"/blog/ke-neng-xu-yao-de-7-ge-zi-ding-yi-react-hook",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/ke-neng-xu-yao-de-7-ge-zi-ding-yi-react-hook.md",source:"@site/blog/ke-neng-xu-yao-de-7-ge-zi-ding-yi-react-hook.md",title:"7 \u4e2a\u53ef\u80fd\u9700\u8981\u7684\u81ea\u5b9a\u4e49 React Hook",description:"\u524d\u8a00",date:"2021-11-29T22:52:17.000Z",formattedDate:"2021\u5e7411\u670829\u65e5",tags:[{label:"React",permalink:"/blog/tags/react"}],readingTime:10.68,truncated:!1,authors:[],frontMatter:{title:"7 \u4e2a\u53ef\u80fd\u9700\u8981\u7684\u81ea\u5b9a\u4e49 React Hook",date:"2021-11-29T22:52:17.000Z",tags:["React"]},prevItem:{title:"JavaScript \u5f15\u64ce\u5982\u4f55\u63d0\u5347\u5176\u8fd0\u884c\u65f6\u7684\u6027\u80fd\uff1f",permalink:"/blog/javascript-yin-qing-ru-he-ti-sheng-qi-yun-xing-shi-de-xing-neng"},nextItem:{title:"10\u4e2a\u5e38\u7528\u7684 JavaScript \u4f7f\u7528\u6280\u5de7",permalink:"/blog/shi-ge-chang-yong-de-javascript-shi-yong-ji-qiao"}},c={authorsImageUrls:[]},d=[{value:"\u524d\u8a00",id:"\u524d\u8a00",level:2},{value:"1. useToggle",id:"1-usetoggle",level:2},{value:"\u5b9e\u73b0v1",id:"\u5b9e\u73b0v1",level:3},{value:"\u6848\u4f8b1",id:"\u6848\u4f8b1",level:3},{value:"\u5b9e\u73b0v2",id:"\u5b9e\u73b0v2",level:3},{value:"\u6848\u4f8b2",id:"\u6848\u4f8b2",level:3},{value:"2. usePageBottom",id:"2-usepagebottom",level:2},{value:"\u6848\u4f8b",id:"\u6848\u4f8b",level:3},{value:"\u8282\u6d41\u7248\u672c\uff08\u53ef\u9009\uff09",id:"\u8282\u6d41\u7248\u672c\u53ef\u9009",level:3},{value:"3. useElementBottom",id:"3-useelementbottom",level:2},{value:"\u6848\u4f8b",id:"\u6848\u4f8b-1",level:3},{value:"4. usePrevious",id:"4-useprevious",level:2},{value:"5. useWindowSize",id:"5-usewindowsize",level:2},{value:"\u6848\u4f8b",id:"\u6848\u4f8b-2",level:3},{value:"6. useEventListener",id:"6-useeventlistener",level:2},{value:"7. useLocalStorageState",id:"7-uselocalstoragestate",level:2},{value:"\u6848\u4f8b",id:"\u6848\u4f8b-3",level:3},{value:"\u7ed3\u8bed",id:"\u7ed3\u8bed",level:2}],m={toc:d};function p(e){var t=e.components,n=(0,r.Z)(e,s);return(0,l.kt)("wrapper",(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u524d\u8a00"},"\u524d\u8a00"),(0,l.kt)("p",null,"\u672c\u6587\u4e3b\u8981\u7f16\u5236\u4e86\u4e00\u4efd\u6e05\u5355\uff0c\u5217\u51fa\u4e86\u5728\u9879\u76ee\u4e2d\u53ef\u80fd\u4f1a\u9700\u8981\u7528\u5230\u7684\u7684\u4e03\u4e2aHooks\u3002\n",(0,l.kt)("img",{parentName:"p",src:"https://umeimmense.github.io/post-images/1638197755400.jpeg",alt:null})),(0,l.kt)("h2",{id:"1-usetoggle"},"1. useToggle"),(0,l.kt)("p",null,"\u8fd9\u4e2ahook\u5f88\u5e38\u89c1\uff0c\u5b83\u7528\u4e8e\u5728 true \u548c false \u4e4b\u95f4\u5207\u6362\u5e03\u5c14\u503c\u3002\u5f53\u6211\u4eec\u60f3\u8981\u663e\u793a/\u9690\u85cf\u6a21\u5f0f\u6216\u6253\u5f00/\u5173\u95ed\u4fa7\u8fb9\u83dc\u5355\u65f6\uff0c\u5b83\u5f88\u6709\u7528\u3002\u8fd9\u4e2ahook\u7684\u57fa\u672c\u7248\u672c\u5982\u4e0b\u6240\u793a\uff1a"),(0,l.kt)("h3",{id:"\u5b9e\u73b0v1"},"\u5b9e\u73b0v1"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"// useToggle.jsx\nimport { useState, useCallback } from 'react';\n\nconst useToggle = (initialValue = false) => {\n  const [state, setState] = useState(initialValue);\n  \n  const toggle = useCallback(() => {\n    setState((state) => !state);\n  }, []);\n  \n  return [state, toggle];\n};\n\nexport default useToggle;\n")),(0,l.kt)("h3",{id:"\u6848\u4f8b1"},"\u6848\u4f8b1"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"import useToggle from './useToggle';\nconst App = () => {\n  const [show, toggleShow] = useToggle();\n  return (\n    <Modal show={show} onClose={toggleShow}>\n      <h1>Hello there</h1>\n    </Modal>\n  );\n}\n")),(0,l.kt)("p",null,"\u5f53\u6211\u4eec\u60f3\u8981\u663e\u793a/\u9690\u85cf\u8868\u4e2d\u4e00\u884c\u7684\u6a21\u5f0f\u65f6\uff0c\u53ef\u4ee5\u7a0d\u5fae\u4fee\u6539\u6b64hook\u4ee5\u7528\u4e8e\u7528\u4f8b\u3002\u6211\u6dfb\u52a0\u4e86\u4e00\u4e2a customToggle \u65b9\u6cd5\uff0c\u8be5\u65b9\u6cd5\u5c06\u503c\u8bbe\u7f6e\u4e3a\u7ed9\u5b9a\u503c\uff0c\u800c\u4e0d\u662f\u5207\u6362\u5148\u524d\u7684\u72b6\u6001\u503c\u3002"),(0,l.kt)("h3",{id:"\u5b9e\u73b0v2"},"\u5b9e\u73b0v2"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"// useToggle.jsx modified\n\nimport { useState, useCallback } from 'react';\n\nconst useToggle = (initialValue = false) => {\n  const [state, setState] = useState(initialValue);\n\n  const toggle = useCallback(() => {\n    setState((state) => !state);\n  }, []);\n\n  const customToggle = useCallback((value) => {\n    setState(value);\n  }, []);\n\n  return [state, toggle, customToggle];\n};\n\nexport default useToggle;\n")),(0,l.kt)("h3",{id:"\u6848\u4f8b2"},"\u6848\u4f8b2"),(0,l.kt)("p",null,"\u5047\u8bbe\u6211\u4eec\u5728\u4e00\u4e2a\u8868\u683c\u4e2d\u6709\u4e00\u5806\u884c\uff0c\u6211\u4eec\u60f3\u63d0\u4f9b\u4e00\u4e2a\u5220\u9664\u884c\u7684\u9009\u9879\u3002\u5355\u51fb\u5220\u9664\u6309\u94ae\u5e94\u6253\u5f00\u4e00\u4e2a\u786e\u8ba4\u6a21\u5f0f\u3002\n\u5bf9\u4e8e\u8fd9\u79cd\u7c7b\u578b\u7684\u529f\u80fd\uff0c\u6211\u4eec\u9700\u8981\u72b6\u6001\u4e2d\u7684\u4e24\u4e2a\u53d8\u91cf\u3002\u9996\u5148\uff0c\u4fdd\u5b58\u4e00\u4e2a\u5e03\u5c14\u503c\u6765\u786e\u5b9a\u662f\u5426\u663e\u793a\u5220\u9664\u786e\u8ba4\u6a21\u5f0f\uff0c\u5176\u6b21\u4fdd\u5b58\u5fc5\u987b\u663e\u793a\u5220\u9664\u6a21\u5f0f\u7684\u884c ID\u3002\n\u4f7f\u7528\u8fd9\u4e2ahook\uff0c\u6211\u4eec\u53ef\u4ee5\u7528\u4e00\u4e2a\u72b6\u6001\u53d8\u91cf\u6765\u5b8c\u6210\u3002\u8fd9\u662f\u5982\u4f55\u505a\u5230\u7684\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"import useToggle from './useToggle';\n\n// initial data\nconst rows = [\n  { id: 1, name: 'John' },\n  { id: 2, name: 'Doe' }\n];\n\nconst App = () => {\n  // using hook\n  const [delModal, toggleDelModal, setDelModalCustom] = useToggle();\n\n  return (\n    <div>\n      <table>\n        {rows.map(row => (\n          <tr>\n            <td>{row.id}</td>\n            <td>{row.name}</td>\n            <td onClick={() => setDelModalCustom(row.id)}>Delete</td>\n          </tr>\n        ))}\n      </table>\n\n      <DeleteModal\n        show={Boolean(delModal)}\n        onClose={toggleDelModal}\n        itemToDelete={delModal} // it will hold the current row id\n      >\n        <h1>\n          Are you sure you want to delete row with id {delModal}\n        </h1>\n      </DeleteModal>\n    </div>\n  );\n}\n")),(0,l.kt)("h2",{id:"2-usepagebottom"},"2. usePageBottom"),(0,l.kt)("p",null,"\u4f7f\u7528\u6b64hook\uff0c\u4f60\u53ef\u4ee5\u786e\u5b9a\u7528\u6237\u662f\u5426\u5df2\u6eda\u52a8\u5230\u9875\u9762\u5e95\u90e8\u3002\u975e\u5e38\u9002\u5408\u65e0\u9650\u6eda\u52a8\u7684\u5e94\u7528\u7a0b\u5e8f\uff0c\u5f53\u7528\u6237\u6eda\u52a8\u5230\u9875\u9762\u5e95\u90e8\u65f6\uff0c\u4f60\u9700\u8981\u83b7\u53d6\u66f4\u591a\u6570\u636e\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"// usePageBottom.jsx\n\nimport { useState, useEffect } from 'react';\n\nconst usePageBottom = () => {\n  const [reachedBottom, setReachedBottom] = useState(false);\n  \n  // event handler for determining if the user reached bottom\n  const handleScroll = () => {\n    const offsetHeight = document.documentElement.offsetHeight;\n    const innerHeight = window.innerHeight;\n    const scrollTop = document.documentElement.scrollTop;\n\n    // if current scroll from bottom is less than equal to 10px\n    const reachingBottom = offsetHeight - (innerHeight + scrollTop) <= 10;\n\n    setReachedBottom(reachingBottom);\n  };\n\n  // effect for binding event listener on window scroll\n  useEffect(() => {\n    window.addEventListener('scroll', handleScroll);\n    \n    return () => {\n      window.removeEventListener('scroll', handleScroll);\n    };\n  }, [handleScroll]);\n  \n  return reachedBottom;\n}\n")),(0,l.kt)("h3",{id:"\u6848\u4f8b"},"\u6848\u4f8b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"import usePageBottom from './usePageBottom';\nconst App = (props) => {\n  // hook usage\n  const scrolledBottom = usePageBottom();\n  return (\n    <div className=\"App\" style={{ height: '150vh' }}>\n      <h1>This is app</h1>\n      <p>Scrolled to bottom {scrolledBottom}</p>\n    </div>\n  );\n}\n")),(0,l.kt)("h3",{id:"\u8282\u6d41\u7248\u672c\u53ef\u9009"},"\u8282\u6d41\u7248\u672c\uff08\u53ef\u9009\uff09"),(0,l.kt)("p",null,"\u51cf\u5c11\u50cf\u7a97\u53e3\u6eda\u52a8\u4e8b\u4ef6\u8fd9\u6837\u591a\u6b21\u89e6\u53d1\u7684\u4e8b\u4ef6\u7684\u901a\u77e5\u662f\u6700\u4f73\u5b9e\u8df5\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528\u8282\u6d41\u8bbe\u7f6e\u4e8b\u4ef6\u4fa6\u542c\u5668\u3002\u6211\u6b63\u5728\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"lodash")," \u7684",(0,l.kt)("inlineCode",{parentName:"p"},"throttle"),"\uff1b\u4f60\u4e5f\u53ef\u4ee5\u4f7f\u7528\u53bb",(0,l.kt)("inlineCode",{parentName:"p"},"debounce"),"\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"// usePageBottom with throttle\n\nimport { useState, useEffect, useMemo } from 'react';\nimport { throttle } from 'lodash';\n\nconst usePageBottom = () => {\n  const [reachedBottom, setReachedBottom] = useState(false);\n  \n  // event handler for determining if the user reached bottom\n const handleScroll = useMemo(() => {\n    return throttle(() => {\n      const offsetHeight = document.documentElement.offsetHeight;\n      const innerHeight = window.innerHeight;\n      const scrollTop = document.documentElement.scrollTop;\n\n      // if current scroll from bottom is less than equal to 10px\n      const reachingBottom = offsetHeight - (innerHeight + scrollTop) <= 10;\n      \n      setReachedBottom(reachingBottom);\n    }, 1000);\n  }, []);\n\n  // effect for binding event listener on window scroll\n  useEffect(() => {\n    window.addEventListener('scroll', handleScroll);\n    \n    return () => {\n      window.removeEventListener('scroll', handleScroll);\n    };\n  }, [handleScroll]);\n  \n  return reachedBottom;\n}\n")),(0,l.kt)("h2",{id:"3-useelementbottom"},"3. useElementBottom"),(0,l.kt)("p",null,"\u5c31\u50cf\u9875\u9762\u5e95\u90e8\u4e00\u6837\uff0c\u6211\u4eec\u4e5f\u53ef\u4ee5\u786e\u5b9a\u7528\u6237\u662f\u5426\u5df2\u7ecf\u6eda\u52a8\u5230\u5143\u7d20\u7684\u5e95\u90e8\u3002\u5728\u8fd9\u4e2ahook\u4e2d\uff0c\u4f20\u9012\u4e86\u5bf9\u5143\u7d20\u7684\u5f15\u7528\uff0c\u56e0\u6b64\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528\u5143\u7d20\u7684\u9ad8\u5ea6\u548c\u5f53\u524d\u6eda\u52a8\u4f4d\u7f6e\u6765\u786e\u5b9a\u5143\u7d20\u662f\u5426\u6eda\u52a8\u5230\u5e95\u90e8\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"// useElementBottom.jsx\n\nimport { useState, useEffect, useMemo } from 'react';\nimport { throttle } from 'lodash';\n\nconst useElementBottom = (element) => {\n  const [reachedBottom, setReachedBottom] = useState(false);\n\n  // event handler for determining if the user reached bottom\n  const handleScroll = useMemo(() => {\n    return throttle(() => {\n      const { current } = element; // current holds the reference to element\n\n      // if current scroll from bottom is less than equal to 10px\n      const scrollBottom =\n        current.scrollHeight - current.scrollTop - current.clientHeight;\n\n      const reachingBottom = scrollBottom <= 10;\n      setReachedBottom(reachingBottom);\n    }, 1000);\n  }, []);\n\n  // effect for binding event listener on element scroll\n  useEffect(() => {\n    const { current } = element;\n    current.addEventListener('scroll', handleScroll);\n\n    return () => current.removeEventListener('scroll', handleScroll);\n  }, []);\n\n  return reachedBottom;\n};\n\nexport default useElementBottom;\n")),(0,l.kt)("h3",{id:"\u6848\u4f8b-1"},"\u6848\u4f8b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"import useElementBottom from './useElementBottom';\nconst App = (props) => {\n  const element = useRef();\n  // hook usage\n  const scrolledBottom = useElementBottom(element);\n  return (\n    <div ref={element} style={{ height: '150vh' }}>\n      <h1>This is app</h1>\n      <p>Scrolled to bottom {scrolledBottom}</p>\n    </div>\n  );\n}\n")),(0,l.kt)("h2",{id:"4-useprevious"},"4. usePrevious"),(0,l.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u5236\u4f5c\u4e00\u4e2a\u81ea\u5b9a\u4e49hook\u6765\u83b7\u53d6 prop \u6216 state \u7684\u5148\u524d\u503c\u3002\u4f7f\u7528 React \u7c7b\u7ec4\u4ef6\uff0c\u53ef\u4ee5\u4f7f\u7528 componentDidUpdate \u751f\u547d\u5468\u671f\u6765\u83b7\u53d6\u4e4b\u524d\u7684 prop \u548c state \u503c\u3002\u5bf9\u4e8e\u529f\u80fd\u7ec4\u4ef6\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528\u81ea\u5b9a\u4e49hook\u6765\u5b8c\u6210\uff0c\u5982\u4e0b\u6240\u793a\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"// usePrevious.jsx\n\nimport { useEffect, useRef } from 'react';\n\nconst usePrevious = (value) => {\n  const ref = useRef();\n\n  // store current value in ref\n  useEffect(() => {\n    ref.current = value;\n  }, [value]);\n\n  // return previous value (happens before update in useEffect above)\n  return ref.current;\n};\n\nexport default usePrevious;\n")),(0,l.kt)("p",null,"\u6211\u4eec\u4f7f\u7528 useRef hook\u6765\u5b58\u50a8\u5148\u524d\u7684\u503c\u3002\u6211\u4eec\u7684hook\u5728 useEffect \u4e2d\u66f4\u65b0\u5f15\u7528\u5bf9\u8c61\u4e4b\u524d\u8fd4\u56de\u5148\u524d\u7684\u503c\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"import usePrevious from './usePrevious';\n\nconst App = () => {\n  const [count, setCount] = useState(0);\n  const prevCount = usePrevious(count);\n  \n  return (\n    <div>\n      <h1>Now: {count}, before: {prevCount}</h1>\n      <button onClick={() => setCount(count + 1)}>Increment</button>\n    </div>\n  );\n}\n")),(0,l.kt)("h2",{id:"5-usewindowsize"},"5. useWindowSize"),(0,l.kt)("p",null,"\u8fd9\u4e2ahook\u8fd4\u56de\u7a97\u53e3\u7684\u5bbd\u5ea6\u548c\u9ad8\u5ea6\u3002\u6211\u4eec\u5728\u8c03\u6574\u7a97\u53e3\u5927\u5c0f\u65f6\u8bbe\u7f6e\u4e86\u4e00\u4e2a\u53d7\u9650\u5236\u7684 set \u4e8b\u4ef6\u4fa6\u542c\u5668\uff0c\u4ee5\u4fbf\u6211\u4eec\u6bcf\u6b21\u90fd\u80fd\u83b7\u5f97\u6b63\u786e\u7684\u5bbd\u5ea6\u548c\u9ad8\u5ea6\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"// useWindowSize\n\nimport { useState, useEffect, useCallback } from 'react';\nimport { throttle } from 'throttle';\n\nconst useWindowSize = () => {\n  const [size, setSize] = useState({\n    innerWidth: window.innerWidth,\n    innerHeight: window.innerHeight,\n  });\n\n  // throttled set listener that runs on window resize\n  const throttledSetResizeListner = useCallback(\n    throttle(() => {\n      // set size in state\n      setSize({\n        innerWidth: window.innerWidth,\n        innerHeight: window.innerHeight,\n      });\n    }, 1000),\n    []\n  );\n\n  // effect for binding resize event on window\n  useEffect(() => {\n    // add throtelled set window resize event listener\n    window.addEventListener('resize', throttledSetResizeListner);\n\n    // remove throttled set window resize event listener\n    return () =>\n      window.removeEventListener('resize', throttledSetResizeListner);\n  }, [throttledSetResizeListner]);\n\n  return size;\n};\n\nexport default useWindowSize;\n")),(0,l.kt)("h3",{id:"\u6848\u4f8b-2"},"\u6848\u4f8b"),(0,l.kt)("p",null,"\u5f53\u4f60\u60f3\u6839\u636e\u7a97\u53e3\u7684\u5bbd\u5ea6\u6216\u9ad8\u5ea6\u5728\u4f60\u7684 JS \u4ee3\u7801\u4e2d\u505a\u4e00\u4e9b\u4e8b\u60c5\u65f6\uff0c\u5b83\u5f88\u6709\u7528\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"import useWindowSize from './useWindowSize';\nconst App = () => {\n  const { innerWidth, innerHeight } = useWindowSize();\n  return (\n    <div>\n      {innerWidth <= 768 ?\n        'I am on small screen' : 'I am on large screen'}\n    </div>\n  );\n}\n")),(0,l.kt)("h2",{id:"6-useeventlistener"},"6. useEventListener"),(0,l.kt)("p",null,"\u4f7f\u7528\u6b64hook\u53ef\u4ee5\u8f7b\u677e\u5730\u5c06\u4e8b\u4ef6\u4fa6\u542c\u5668\u7ed1\u5b9a\u5230\u7a97\u53e3\u6216\u7a97\u53e3\u5143\u7d20\u3002\u5728hook\u7684effect\u4e2d\uff0c\u6211\u4eec\u68c0\u67e5\u5143\u7d20\u662f\u5426\u662f\u6765\u81ea useRef \u7684\u5f15\u7528\u3002\u5982\u679c\u6ca1\u6709\uff0c\u6211\u4eec\u5c06\u4e8b\u4ef6\u4fa6\u542c\u5668\u6dfb\u52a0\u5230\u5168\u5c40\u7a97\u53e3\u5bf9\u8c61\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"import { useEffect } from 'react';\n\nconst useEventListener = (event, handler, referencedElement) => {\n  // effect for binding event handler to the element\n  useEffect(() => {\n    const element = referencedElement?.current || window;\n\n    const isSupported = element && element.addEventListener;\n\n    if (!isSupported) return;\n\n    // bind event to the element\n    element.addEventListener(event, handler);\n\n    return () => element.removeEventListener(event, handler);\n  }, [referencedElement, event, handler]);\n\n  return;\n};\n\nexport default useEventListener;\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"import useEventListener from './useEventListener';\n\nconst App = (props) => {\n  const element = useRef();\n  useEventListener('mouseover', handler, element);\n  const handler => () => {\n    console.log('Event triggered');\n  }\n  return (\n    <div ref={element}>\n      <h1>This is app</h1>\n    <div>\n  );\n}\n")),(0,l.kt)("p",null,"\u6211\u4eec\u8fd8\u53ef\u4ee5\u4f7f\u7528\u76f8\u540c\u7684hook\u5c06\u4e8b\u4ef6\u6dfb\u52a0\u5230\u7a97\u53e3"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"import useEventListener from './useEventListener';\nconst App = (props) => {\n  // adding event listener on window scroll\n  useEventListener('scroll', handler);\n  const handler => () => {\n    console.log('Event triggered');\n  }\n  return (\n    <div>\n      <h1>This is app</h1>\n    <div>\n  );\n}\n")),(0,l.kt)("h2",{id:"7-uselocalstoragestate"},"7. useLocalStorageState"),(0,l.kt)("p",null,"\u6709\u65f6\uff0c\u53ef\u80fd\u9700\u8981\u5728\u672c\u5730\u5b58\u50a8\u548c\u72b6\u6001\u4e4b\u95f4\u540c\u6b65\u4e00\u4e2a\u503c\u3002\u8fd9\u4e2ahook\u7684\u4f5c\u7528\u5b8c\u5168\u4e00\u6837\u3002\u6211\u4eec\u6b63\u5728\u4f7f\u7528 useState \u5e76\u68c0\u67e5\u6307\u5b9a\u7684\u952e\u662f\u5426\u5728\u672c\u5730\u5b58\u50a8\u4e2d\u5177\u6709\u67d0\u4e2a\u503c\uff0c\u4ee5\u4fbf\u6211\u4eec\u53ef\u4ee5\u5c06\u5176\u7528\u4f5c\u521d\u59cb\u503c\u3002\u8fd9\u5141\u8bb8\u6211\u4eec\u5728\u9875\u9762\u5237\u65b0\u65f6\u4fdd\u6301\u503c\u4e0e\u72b6\u6001\u540c\u6b65\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"// useLocalStorageState\n\nimport { useState, useEffect } from 'react';\n\nconst useLocalStorageState = (key, defaultValue) => {\n  const [value, setValue] = useState(() => {\n    let val;\n\n    try {\n      // if there is a value in local storage for given key, set it as initial state\n      val = JSON.parse(localStorage.getItem(key) || String(defaultValue));\n    } catch (error) {\n      // otherwise, set default value as initial state\n      val = defaultValue;\n    }\n\n    return val;\n  });\n\n  // effect to update local storage when state changes\n  useEffect(() => {\n    localStorage.setItem(key, JSON.stringify(value));\n  }, [value]);\n\n  return [value, setValue];\n};\n\nexport default useLocalStorageState;\n")),(0,l.kt)("p",null,"\u5f53\u503c\u66f4\u65b0\u65f6\uff0c\u4f1a\u8fd0\u884c\u4e00\u4e2aeffect \uff0c\u66f4\u65b0\u672c\u5730\u5b58\u50a8\u4e2d\u7684\u503c\u3002"),(0,l.kt)("h3",{id:"\u6848\u4f8b-3"},"\u6848\u4f8b"),(0,l.kt)("p",null,"\u5047\u8bbe\u4f60\u60f3\u5728\u672c\u5730\u5b58\u50a8\u4e2d\u5b58\u50a8\u7528\u6237\u4e3b\u9898\u9996\u9009\u9879"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"import useLocalStorageState from './useLocalStorageState';\nconst App = (props) => {\n  // setting default theme to light\n  const [theme, setTheme] = useLocalStorageState('theme', 'light');\n  return (\n    <div>\n      <p>Current theme is {theme}</p>\n      <button onClick={() => setTheme('dark')}>\n        Change theme to dark\n      </button>\n    </div>\n  );\n}\n")),(0,l.kt)("p",null,"\u5f53\u4f60\u70b9\u51fb\u66f4\u6539\u4e3b\u9898\u6309\u94ae\u65f6\uff0c\u72b6\u6001\u548c\u672c\u5730\u5b58\u50a8\u4e2d\u7684\u503c\u90fd\u4f1a\u66f4\u65b0\u3002\u9875\u9762\u5237\u65b0\u540e\uff0c\u4f60\u5c06\u83b7\u5f97\u5b58\u50a8\u5728\u672c\u5730\u5b58\u50a8\u4e2d\u7684\u6700\u540e\u4e00\u4e2a\u503c\u3002"),(0,l.kt)("h2",{id:"\u7ed3\u8bed"},"\u7ed3\u8bed"),(0,l.kt)("p",null,"\u611f\u8c22\u4f60\u9605\u8bfb\u5230\u6700\u540e\u3002\u6211\u5e0c\u671b\u8fd9\u4e9b\u81ea\u5b9a\u4e49hook\u5bf9\u4f60\u6709\u7528\u3002"))}p.isMDXComponent=!0}}]);