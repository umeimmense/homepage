"use strict";(self.webpackChunkcool_coding=self.webpackChunkcool_coding||[]).push([[407],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(t),m=o,h=p["".concat(s,".").concat(m)]||p[m]||d[m]||a;return t?r.createElement(h,l(l({ref:n},u),{},{components:t})):r.createElement(h,l({ref:n},u))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=p;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var c=2;c<a;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},7552:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return d}});var r=t(7462),o=t(3366),a=(t(7294),t(3905)),l=["components"],i={title:"JavaScript \u5c06\u6811\u904d\u5386\u7b97\u6cd5\u5e94\u7528\u4e8e DOM",date:new Date("2021-12-09T14:10:43.000Z"),tags:["JavaScript","Algorithm"]},s=void 0,c={permalink:"/blog/javascript-jiang-shu-bian-li-suan-fa-ying-yong-yu-dom",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/javascript-jiang-shu-bian-li-suan-fa-ying-yong-yu-dom.md",source:"@site/blog/javascript-jiang-shu-bian-li-suan-fa-ying-yong-yu-dom.md",title:"JavaScript \u5c06\u6811\u904d\u5386\u7b97\u6cd5\u5e94\u7528\u4e8e DOM",description:"\u524d\u8a00",date:"2021-12-09T14:10:43.000Z",formattedDate:"2021\u5e7412\u67089\u65e5",tags:[{label:"JavaScript",permalink:"/blog/tags/java-script"},{label:"Algorithm",permalink:"/blog/tags/algorithm"}],readingTime:6.295,truncated:!1,authors:[],frontMatter:{title:"JavaScript \u5c06\u6811\u904d\u5386\u7b97\u6cd5\u5e94\u7528\u4e8e DOM",date:"2021-12-09T14:10:43.000Z",tags:["JavaScript","Algorithm"]},prevItem:{title:"JavaScript \u4e2d\u7684 Trie\uff1a\u4ec0\u4e48\u662f\u524d\u7f00\u6811\uff1f",permalink:"/blog/javascript-zhong-de-trieshi-me-shi-qian-zhui-shu"},nextItem:{title:"JavaScript \u4e2d\u7684 Tree \u4f7f\u7528\u7236\u6307\u9488\u9ad8\u6548\u904d\u5386",permalink:"/blog/javascript-zhong-de-tree-shi-yong-fu-zhi-zhen-gao-xiao-bian-li"}},u={authorsImageUrls:[]},d=[{value:"\u524d\u8a00",id:"\u524d\u8a00",level:2},{value:"DOM \u904d\u5386",id:"dom-\u904d\u5386",level:2},{value:"\u901a\u8fc7 ID \u5b9a\u4f4d\u8282\u70b9",id:"\u901a\u8fc7-id-\u5b9a\u4f4d\u8282\u70b9",level:2},{value:"\u901a\u8fc7\bClassName \u5b9a\u4f4d\u8282\u70b9",id:"\u901a\u8fc7classname-\u5b9a\u4f4d\u8282\u70b9",level:2},{value:"\u6d4f\u89c8\u5668\u5982\u4f55\u4f18\u5316\u9009\u62e9\u67e5\u8be2",id:"\u6d4f\u89c8\u5668\u5982\u4f55\u4f18\u5316\u9009\u62e9\u67e5\u8be2",level:2},{value:"\u5904\u7406\u66f4\u590d\u6742\u7684\u9009\u62e9\u5668",id:"\u5904\u7406\u66f4\u590d\u6742\u7684\u9009\u62e9\u5668",level:2},{value:"\u8fdb\u9636",id:"\u8fdb\u9636",level:2}],p={toc:d};function m(e){var n=e.components,t=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u524d\u8a00"},"\u524d\u8a00"),(0,a.kt)("p",null,"\u5230\u76ee\u524d\u4e3a\u6b62\uff0c\u6211\u4eec\u5df2\u7ecf\u4e86\u89e3\u4e86\u4e00\u4e9b\u4e8c\u53c9\u6811\u904d\u5386\u7684\u65b9\u6cd5\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://umeimmense.github.io/post/javascript-zhong-de-tree/"},"\u4f7f\u7528\u9012\u5f52\u548c\u8fed\u4ee3\u7b97\u6cd5\u904d\u5386\u4e8c\u53c9\u6811")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://umeimmense.github.io/post/javascript-zhong-de-tree-shi-yong-fu-zhi-zhen-gao-xiao-bian-li/"},"\u4f7f\u7528\u7236\u6307\u9488\u904d\u5386\u4e8c\u53c9\u6811"),"\n\u5728\u672c\u6587\u4e2d\uff0c\u6211\u4eec\u5c06\u628a\u8fd9\u4e9b\u77e5\u8bc6\u7528\u4e8e n \u53c9\u6811\uff0c\u5373 DOM\u3002\u6211\u4eec\u5c06\u770b\u5230\u5982\u4f55\u4f7f\u7528\u5404\u79cd CSS \u9009\u62e9\u5668\u5b9a\u4f4d DOM \u5143\u7d20\uff0c\u800c\u65e0\u9700\u4f7f\u7528\u5185\u7f6e API\uff0c\u5982 getElementById\u3001getElementsByClassname \u6216 querySelector/querySelectorAll\u3002\u56e0\u6b64\uff0c\u672c\u6587\u5c06\u9610\u660e\u8fd9\u4e9b API \u53ef\u80fd\u5982\u4f55\u5728\u5e55\u540e\u5de5\u4f5c\u3002")),(0,a.kt)("h2",{id:"dom-\u904d\u5386"},"DOM \u904d\u5386"),(0,a.kt)("p",null,"\u501f\u7528 ",(0,a.kt)("a",{parentName:"p",href:"https://umeimmense.github.io/post/javascript-zhong-de-tree/"},"\u4f7f\u7528\u9012\u5f52\u548c\u8fed\u4ee3\u7b97\u6cd5\u904d\u5386\u4e8c\u53c9\u6811"),"\u7684\u601d\u8def\uff0c\u6211\u4eec\u6765\u5f97\u51faDOM\u7684\u524d\u5e8f\u904d\u5386\u7b97\u6cd5\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"function walkPreOrder(node){\n  if(!node) return\n\n  // do something here\n  console.log(node)\n\n  for(let child of node.children){\n     walkPreOrder(child)\n  }\n}\n")),(0,a.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u4fee\u6539\u8fd9\u4e2a\u7b97\u6cd5\u4f7f\u4e4b\u6765\u8fd4\u56de\u4e00\u4e2a\u8fed\u4ee3\u5668\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"function* walkPreOrder(node){\n  if(!node) return\n\n  // do something here\n  yield node\n  for(let child of node.children){\n    yield* walkPreOrder(child)\n  }\n}\n\n// USAGE\nfor(let node of walkPreOrder(root)){\n  console.log(node)\n}\n")),(0,a.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528\u4efb\u4f55\u5e7f\u5ea6\u4f18\u5148\u6216\u6df1\u5ea6\u4f18\u5148\u7b97\u6cd5\uff08\u5728\u4e4b\u524d\u7684\u6587\u7ae0\u4e2d\u8ba8\u8bba\u8fc7\uff09\u6765\u904d\u5386 DOM\u3002\n\u6211\u4eec\u8fd8\u5047\u8bbe\u6b63\u5728\u5904\u7406\u5177\u6709\u4ee5\u4e0b HTML \u7684\u6587\u6863\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<html>\n  <head>\n    <title>DOM selection algorithm</title>\n  </head>\n<body>\n\n  <div class="container">\n    <div class="body">\n      <div class="row">\n        <img id="profile" src="xyz.jpg" alt="">\n      </div>\n      <div class="row"></div>\n      <div class="row"></div>\n    </div>\n  </div>\n\n</body>\n</html>\n')),(0,a.kt)("h2",{id:"\u901a\u8fc7-id-\u5b9a\u4f4d\u8282\u70b9"},"\u901a\u8fc7 ID \u5b9a\u4f4d\u8282\u70b9"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"function locateById(nodeId){\n  // iterate through all nodes in depth first (preOrder) fashion\n  // return the node as soon as it's found\n  for(let node of walkPreOrder(document.body)){\n     if(node.id === nodeId){\n        return node\n     }\n  }\n   return null\n}\n")),(0,a.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528 locateById() \u51fd\u6570\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const img = locateById('profile')\n// returns the image node\n")),(0,a.kt)("h2",{id:"\u901a\u8fc7classname-\u5b9a\u4f4d\u8282\u70b9"},"\u901a\u8fc7\bClassName \u5b9a\u4f4d\u8282\u70b9"),(0,a.kt)("p",null,"\u6d4f\u89c8\u5668\u63d0\u4f9b document.getElementsByClassName() API \u6765\u5b9e\u73b0\u6b64\u7ed3\u679c\u3002\u6211\u4eec\u5982\u4f55\u5b9e\u73b0\u7c7b\u4f3c\u7684\u4e1c\u897f\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"function locateAllByClassName(className){\n   const result = []\n   for(let node of walkPreOrder(document.body)){\n      if(node.classList.contains(className)){\n        result.push(node)\n      }\n   }\n   return result\n}\n\n// USAGE\nconst elements = locateAllByClassName('row')\n")),(0,a.kt)("h2",{id:"\u6d4f\u89c8\u5668\u5982\u4f55\u4f18\u5316\u9009\u62e9\u67e5\u8be2"},"\u6d4f\u89c8\u5668\u5982\u4f55\u4f18\u5316\u9009\u62e9\u67e5\u8be2"),(0,a.kt)("p",null,"\u9009\u62e9 DOM \u8282\u70b9\u662f Web \u5e94\u7528\u7a0b\u5e8f\u76f8\u5f53\u5e38\u89c1\u7684\u64cd\u4f5c\u3002\u4e3a\u540c\u4e00\u4e2a\u9009\u62e9\u5668\u591a\u6b21\u904d\u5386\u6811\u4f3c\u4e4e\u4e0d\u662f\u6700\u4f73\u9009\u62e9\u3002\u6d4f\u89c8\u5668\u901a\u8fc7\u4f7f\u7528\u8bb0\u5fc6\u4f18\u5316\u9009\u62e9\u3002\n\u67e5\u770b ",(0,a.kt)("a",{parentName:"p",href:"https://searchfox.org/mozilla-central/source/parser/html/javasrc/TreeBuilder.java#1467"},"mozilla \u89e3\u6790\u5668\u7684\u6e90\u4ee3\u7801"),"\uff0c\u5373\u51fd\u6570 startTag \u7684\u6458\u5f55\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},' // ID uniqueness\n @IdType String id = attributes.getId();\n if (id != null) {\n      LocatorImpl oldLoc = idLocations.get(id);\n      if (oldLoc != null) {\n            err("Duplicate ID \\u201C" + id + "\\u201D.");\n            errorHandler.warning(new SAXParseException(\n                  "The first occurrence of ID \\u201C" + id\n                  + "\\u201D was here.", oldLoc));\n       } else {\n            idLocations.put(id, new LocatorImpl(tokenizer));\n       }\n }\n')),(0,a.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u770b\u5230\u8fd9\u4e9b\u8282\u70b9 ID \u4fdd\u5b58\u5728\u4e00\u4e2a\u7b80\u5355\u7684\u54c8\u5e0c\u6620\u5c04\u4e2d\u3002\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528\u7c7b\u4f3c\u7684\u65b9\u6cd5\u6765\u786e\u4fdd\u5bf9\u540c\u4e00 ID \u7684\u91cd\u590d\u67e5\u8be2\u4e0d\u9700\u8981\u5b8c\u5168\u904d\u5386\uff0c\u76f8\u53cd\uff0c\u6211\u4eec\u53ef\u4ee5\u4ece hashMap \u4e2d\u67e5\u627e\u5e76\u8fd4\u56de\u5b83\u3002\n\u4ee5\u4e0b\u662f\u6211\u4eec\u7684\u89e3\u51b3\u65b9\u6848\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"function getSelectors(){\n  const idLocations = {}\n  const classLocations = {}\n\n  // updated selector functions  \n  function locateById(nodeId){\n    if(idLocations.hasOwnProperty(nodeId)) \n       return idLocations[nodeId]\n\n    for(let node of walkPreOrder(document.body)){\n       if(node.id === nodeId){\n          idLocations[nodeId]= node //memoize\n          return node\n       }\n     }\n    idLocations[nodeId]= null // memoize\n    return null\n  }\n\n  function locateAllByClassName(className){\n    if(classLocations.hasOwnProperty(className)) \n         return classLocations[className]\n\n    const result = []\n    for(let node of walkPreOrder(document.body)){\n       if(node.classList.contains(className)){\n          result.push(node)\n        }\n     }\n     classLocations[nodeId]= result\n     return result\n  }\n\n  return {\n       locateById,\n       locateAllByClassName\n    }\n\n} \n\n  // USAGE\n  const {locateById, locateAllByClassName} = getSelectors();\n  const result = locateAllByClassName('row') // returns array of elements\n  const img = locateById('profile') // returns an element, if found\n")),(0,a.kt)("h2",{id:"\u5904\u7406\u66f4\u590d\u6742\u7684\u9009\u62e9\u5668"},"\u5904\u7406\u66f4\u590d\u6742\u7684\u9009\u62e9\u5668"),(0,a.kt)("p",null,"\u8ba9\u6211\u4eec\u5c1d\u8bd5\u5b9e\u73b0\u7c7b\u4f3c element.querySelector \u7684\u65b9\u6cd5\u3002\u4ee5\u4e0b\u662f MDN \u7684\u63cf\u8ff0\uff1a"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"The querySelector() method of the Element interface returns the first element that is a descendant of the element on which it is invoked that matches the specified group of selectors."),(0,a.kt)("h3",{parentName:"blockquote",id:"\u6837\u4f8b"},"\u6837\u4f8b"),(0,a.kt)("pre",{parentName:"blockquote"},(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const firstRow = document.querySelector('.container .row:first-child')\n")),(0,a.kt)("p",{parentName:"blockquote"},"\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u6211\u4eec\u53ef\u4ee5\u5c06\u4efb\u4f55 CSS \u9009\u62e9\u5668\u4f20\u9012\u7ed9\u51fd\u6570\uff0c\u5b83\u5e94\u8be5\u80fd\u591f\u904d\u5386 DOM \u4e3a\u6211\u4eec\u627e\u5230\u8be5\u5143\u7d20\u3002\u8ba9\u6211\u4eec\u770b\u770b\u5b83\u662f\u5982\u4f55\u5b9e\u73b0\u7684\uff1a"),(0,a.kt)("pre",{parentName:"blockquote"},(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"// given a selector and root node, find that selector within the root node\nfunction select(selector, root){\n  for(let node of walkPreOrder(root)){\n      if(node.matches(selector)){\n        return node\n     }\n   }\n  return null;\n}\n"))),(0,a.kt)("p",null,"function myQuerySelector(path, node){\n// if path is empty, nothing to find\nif(path.length === 0) return null;"),(0,a.kt)("p",null,"  // if node is not provided, let's assume user wants to search within document.body\nlet root = node || document.body;",(0,a.kt)("br",{parentName:"p"}),"\n","const selector = path","[0]",";"),(0,a.kt)("p",null,"  // if there's only one selector in the path, just traverse using select function above\nif(path.length === 1) return select(selector, root);"),(0,a.kt)("p",null,"   // else, either the current node matches the first selector in path or not\n// if first selector matches with current node, look through it's children for subsequent selectors only\n// else, look through it's children for the whole path\nconst newPath = root.matches(selector) ? path.slice(1): path;\nfor(let child of root.children){\nconst ans = myQuerySelector(newPath, child);\nif(ans) return ans\n}"),(0,a.kt)("p",null,"  // nothing found\nreturn null;\n}"),(0,a.kt)("p",null,"// USAGE:\nconst firstRow = myQuerySelector(",'[".container", ".row"]',")"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"myQuerySelectorAll \u7684\u5b9e\u73b0\uff08\u7c7b\u4f3c\u4e8e element.querySelectorAll\uff09\u4e5f\u9075\u5faa\u76f8\u540c\u7684\u65b9\u6cd5\uff0c\u7a0d\u4f5c\u4fee\u6539\uff1a\n```javascript\nfunction selectAll(selector, root){\n  let result = []\n  for(let node of walkPreOrder(root)){\n      if(node.matches(selector)){\n        result.push(node)\n     }\n   }\n  return result;\n}\n\nfunction myQuerySelectorAll(path, node){\n  let result = [];\n  if(path.length === 0) return result;\n\n  let root = node || document.body;  \n  const selector = path[0];\n\n  if(path.length === 1) return selectAll(selector, root);\n\n  const newPath = root.matches(selector) ? path.slice(1): path;\n  for(let child of root.children){\n    result = [...result, ...myQuerySelectorAll(newPath, child)]\n\n  }\n\n  return result;\n}\n")),(0,a.kt)("h2",{id:"\u8fdb\u9636"},"\u8fdb\u9636"),(0,a.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528\u672c\u6587\u5f00\u5934\u63cf\u8ff0\u7684\u9012\u5f52\u524d\u5e8f\u904d\u5386\u65b9\u6cd5\u6765\u514b\u9686\u4efb\u4f55\u6811\u3002\u8ba9\u6211\u4eec\u770b\u770b\u6211\u4eec\u5982\u4f55\u4f7f\u7528\u5b83\u6765\u514b\u9686\u4efb\u4f55 DOM \u6811\uff0c\u7c7b\u4f3c\u4e8e element.cloneNode(true) \u6240\u505a\u7684\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u901a\u8fc7\u521b\u5efa\u5177\u6709\u76f8\u540c tagName \u7684\u65b0\u8282\u70b9\u7136\u540e\u590d\u5236\u5c5e\u6027\u6765\u521b\u5efa\u6e90\u8282\u70b9\u7684\u514b\u9686\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u5bf9\u6e90\u8282\u70b9\u7684\u6240\u6709\u5b50\u8282\u70b9\u9012\u5f52\u8c03\u7528 cloneTree \u65b9\u6cd5\uff0c\u5e76\u5c06\u8fd4\u56de\u7684\u8282\u70b9\u4f5c\u4e3a\u5b50\u8282\u70b9\u9644\u52a0\u5230\u514b\u9686\u8282\u70b9\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"function cloneTree(node){\n  if(!node) return\n\n  const clonedNode = document.createElement(node.tagName.toLowerCase())\n  const attributes = node.getAttributeNames()\n\n  attributes.forEach(attribute => {\n     clonedNode.setAttribute(attribute, node.getAttribute(attribute))\n  })\n\n  for(const child of node.children){\n      clonedNode.append(cloneTree(child))\n  }\n\n  return clonedNode\n}\n")))}m.isMDXComponent=!0}}]);