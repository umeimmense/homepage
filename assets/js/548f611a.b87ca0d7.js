"use strict";(self.webpackChunkhomepage=self.webpackChunkhomepage||[]).push([[3995],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),h=c(r),m=a,d=h["".concat(u,".").concat(m)]||h[m]||s[m]||i;return r?n.createElement(d,l(l({ref:t},p),{},{components:r})):n.createElement(d,l({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=h;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},5568:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return s},frontMatter:function(){return i},metadata:function(){return o},toc:function(){return c}});var n=r(3117),a=(r(7294),r(3905));const i={title:"JavaScript \u4e2d\u7684 Trie\uff1a\u4ec0\u4e48\u662f\u524d\u7f00\u6811\uff1f",date:new Date("2021-12-10T16:02:42.000Z"),tags:["JavaScript","Algorithm"]},l=void 0,o={permalink:"/homepage/blog/javascript-zhong-de-trieshi-me-shi-qian-zhui-shu",editUrl:"https://github.com/umeimmense/homepage/tree/main/blog/blog/javascript-zhong-de-trieshi-me-shi-qian-zhui-shu.md",source:"@site/blog/javascript-zhong-de-trieshi-me-shi-qian-zhui-shu.md",title:"JavaScript \u4e2d\u7684 Trie\uff1a\u4ec0\u4e48\u662f\u524d\u7f00\u6811\uff1f",description:"\u524d\u8a00",date:"2021-12-10T16:02:42.000Z",formattedDate:"2021\u5e7412\u670810\u65e5",tags:[{label:"JavaScript",permalink:"/homepage/blog/tags/java-script"},{label:"Algorithm",permalink:"/homepage/blog/tags/algorithm"}],readingTime:7.665,hasTruncateMarker:!1,authors:[],frontMatter:{title:"JavaScript \u4e2d\u7684 Trie\uff1a\u4ec0\u4e48\u662f\u524d\u7f00\u6811\uff1f",date:"2021-12-10T16:02:42.000Z",tags:["JavaScript","Algorithm"]},prevItem:{title:"JavaScript \u4e2d\u7684\u7a00\u758f\u6570\u7ec4\u4e0e\u5bc6\u96c6\u6570\u7ec4\u7684\u533a\u522b\uff1f",permalink:"/homepage/blog/javascript-zhong-de-xi-shu-shu-zu-yu-mi-ji-shu-zu-de-qu-bie"},nextItem:{title:"JavaScript \u5c06\u6811\u904d\u5386\u7b97\u6cd5\u5e94\u7528\u4e8e DOM",permalink:"/homepage/blog/javascript-jiang-shu-bian-li-suan-fa-ying-yong-yu-dom"}},u={authorsImageUrls:[]},c=[{value:"\u524d\u8a00",id:"\u524d\u8a00",level:2},{value:"\u4ecb\u7ecd",id:"\u4ecb\u7ecd",level:2},{value:"\u5b9e\u73b0\u8282\u70b9",id:"\u5b9e\u73b0\u8282\u70b9",level:2},{value:"\u5b9e\u73b0 Trie \u6570\u636e\u7ed3\u6784",id:"\u5b9e\u73b0-trie-\u6570\u636e\u7ed3\u6784",level:2},{value:"\u4f7f\u7528 Trie",id:"\u4f7f\u7528-trie",level:2},{value:"\u7a7a\u95f4\u590d\u6742\u5ea6",id:"\u7a7a\u95f4\u590d\u6742\u5ea6",level:3},{value:"\u65f6\u95f4\u590d\u6742\u5ea6",id:"\u65f6\u95f4\u590d\u6742\u5ea6",level:3},{value:"\u5e94\u7528",id:"\u5e94\u7528",level:2}],p={toc:c};function s(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u524d\u8a00"},"\u524d\u8a00"),(0,a.kt)("p",null,"\u6211\u4eec\u5df2\u7ecf\u5728\u4e09\u7bc7\u6587\u7ae0\u4e2d\u4ecb\u7ecd\u4e86\u6811\u6570\u636e\u7ed3\u6784\u7684\u57fa\u7840\u77e5\u8bc6\u3002\u5982\u679c\u4f60\u8fd8\u6ca1\u6709\u8bfb\u8fc7\u8fd9\u4e9b\uff0c\u6211\u5f3a\u70c8\u5efa\u8bae\u5148\u9605\u8bfb\u524d\u4e09\u7bc7\u6587\u7ae0\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/homepage/blog/javascript-zhong-de-tree"},"\u4f7f\u7528\u9012\u5f52\u548c\u8fed\u4ee3\u7b97\u6cd5\u904d\u5386\u4e8c\u53c9\u6811")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/homepage/blog/javascript-zhong-de-tree-shi-yong-fu-zhi-zhen-gao-xiao-bian-li"},"\u4f7f\u7528\u7236\u6307\u9488\u904d\u5386\u4e8c\u53c9\u6811")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/homepage/blog/javascript-jiang-shu-bian-li-suan-fa-ying-yong-yu-dom"},"\u5c06\u6811\u904d\u5386\u7b97\u6cd5\u5e94\u7528\u4e8e DOM"))),(0,a.kt)("h2",{id:"\u4ecb\u7ecd"},"\u4ecb\u7ecd"),(0,a.kt)("p",null,"Trie \u662f\u6811\u6570\u636e\u7ed3\u6784\u7684\u4e00\u79cd\u53d8\u4f53\u3002\u5b83\u4e5f\u88ab\u79f0\u4e3a\u524d\u7f00\u6811\u6216\u641c\u7d22\u6811\u7684\u53d8\u4f53\u3002\u5c31\u50cf n \u53c9\u6811\u6570\u636e\u7ed3\u6784\u4e00\u6837\uff0ctrie \u53ef\u4ee5\u6709 n \u4e2a\u6765\u81ea\u5355\u4eb2\u7684\u5b69\u5b50\u3002\u901a\u5e38\uff0ctrie \u4e2d\u7684\u6240\u6709\u8282\u70b9\u90fd\u4f1a\u5b58\u50a8\u4e00\u4e9b\u5b57\u7b26\u3002\u5047\u8bbe\u6211\u4eec\u53ea\u5904\u7406\u82f1\u8bed\u5355\u8bcd\uff0c\u4e0b\u9762\u662f\u4e00\u4e2a\u7b80\u5355\u7684 trie \u53ef\u80fd\u770b\u8d77\u6765\u50cf\uff1a\n",(0,a.kt)("img",{parentName:"p",src:"https://umeimmense.github.io/post-images/1639386955366.jpeg",alt:null}),"\n\u9700\u8981\u6ce8\u610f\u7684\u4e8b\u9879\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u6211\u4eec\u6b63\u5728\u5c1d\u8bd5\u4f7f\u7528\u6811\u6765\u5c3d\u53ef\u80fd\u9ad8\u6548\u5730\u8868\u793a\u82f1\u8bed\u5355\u8bcd\u3002")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u5728\u4e0a\u56fe\u4e2d\uff0c\u4ece\u6839\u8282\u70b9\u5230\u4efb\u4f55\u7eff\u8272\u8282\u70b9\u7684\u8def\u5f84\u8868\u793a\u4e00\u4e2a\u82f1\u6587\u5355\u8bcd\u3002\u4f8b\u5982\uff1a"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"NULL->C->A->T: CAT"),(0,a.kt)("li",{parentName:"ul"},"NULL->D->O: DO"),(0,a.kt)("li",{parentName:"ul"},"NULL->D->O->G: DOG"),(0,a.kt)("li",{parentName:"ul"},"NULL->D->A->R->K: DARK"),(0,a.kt)("li",{parentName:"ul"},"NULL->A: A"),(0,a.kt)("li",{parentName:"ul"},"NULL->A->N: AN"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u6bcf\u4e2a\u8282\u70b9\u6700\u591a\u53ef\u4ee5\u6709 26 \u4e2a\u5b50\u8282\u70b9\uff08\u5982\u679c\u6211\u4eec\u53ea\u5904\u7406\u82f1\u6587\u5b57\u6bcd\uff09\u3002\u6211\u4eec\u6709\u4e00\u4e2a NULL \u8282\u70b9\u4f5c\u4e3a\u6839\u8282\u70b9\uff0c\u56e0\u4e3a\u4e00\u4e2a\u5355\u8bcd\u53ef\u4ee5\u4ee5 26 \u4e2a\u5b57\u6bcd\u4e2d\u7684\u4efb\u4f55\u4e00\u4e2a\u5f00\u5934\uff0c\u56e0\u6b64\u6211\u4eec\u9700\u8981\u4e00\u4e2a\u865a\u62df\u8282\u70b9\uff0c\u5b83\u53ef\u4ee5\u5c06\u4efb\u4f55\u6f5c\u5728\u7684\u7b2c\u4e00\u4e2a\u5b57\u6bcd\u4f5c\u4e3a\u5b50\u8282\u70b9\u3002")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u7eff\u8272\u8282\u70b9\uff0c\u672c\u8d28\u4e0a\u4ee3\u8868\u201c\u8bcd\u5c3e\u201d\uff0c\u540c\u65f6\u4ece\u6839\u904d\u5386\u5230\u8be5\u8282\u70b9\u3002"))),(0,a.kt)("h2",{id:"\u5b9e\u73b0\u8282\u70b9"},"\u5b9e\u73b0\u8282\u70b9"),(0,a.kt)("p",null,"\u73b0\u5728\uff0c\u8ba9\u6211\u4eec\u5c1d\u8bd5\u63d0\u51fa Trie \u8282\u70b9\u7684\u8868\u793a\u3002\u56de\u5230\u6811\u8282\u70b9\uff0c\u8fd9\u5c31\u662f\u6211\u4eec\u5448\u73b0\u5b83\u7684\u65b9\u5f0f\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"function Node(value){\n  this.value = value\n  this.left = null\n  this.right = null\n}\n")),(0,a.kt)("p",null,"\u56e0\u6b64\uff0c\u6211\u4eec\u53ef\u4ee5\u5bf9 Trie \u9075\u5faa\u7c7b\u4f3c\u7684\u60f3\u6cd5\uff0c\u540c\u65f6\u786e\u4fdd\u5b83\u6ee1\u8db3\u6211\u4eec\u5728\u4ecb\u7ecd\u90e8\u5206\u8ba8\u8bba\u7684\u8981\u6c42\u3002\u8981\u4e86\u89e3 Trie \u8282\u70b9\u7684\u8981\u6c42\uff0c\u8ba9\u6211\u4eec\u653e\u5927\u4efb\u4f55\u8282\u70b9\uff1a\n",(0,a.kt)("img",{parentName:"p",src:"https://umeimmense.github.io/post-images/1639387276741.jpeg",alt:null}),"\n\u6240\u4ee5\u73b0\u5728\u66f4\u6709\u610f\u4e49\u4e86\u3002\u8fd9\u662f\u6700\u7ec8\u7684\u4ee3\u7801\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"function Node(value){\n  this.value = value\n  this.isEndOfWord = false // false by default, a green node means this flag is true\n  this.children = {} // children are stored as Map, where key is the letter and value is a TrieNode for that letter \n}\n")),(0,a.kt)("h2",{id:"\u5b9e\u73b0-trie-\u6570\u636e\u7ed3\u6784"},"\u5b9e\u73b0 Trie \u6570\u636e\u7ed3\u6784"),(0,a.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528\u4e00\u4e2a\u7b80\u5355\u7684 ES6 \u7c7b\u6765\u8868\u793a\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"class Trie{\n  constructor(){\n    this.root = new Node(null)\n  }\n\n  insert(word){\n   // TODO\n  }\n\n  search(word){\n   // TODO\n  }\n\n}\n")),(0,a.kt)("p",null,"\u6240\u4ee5\u6211\u4eec\u5df2\u7ecf\u51c6\u5907\u597d\u4e86\u5927\u6982\u3002\u4f5c\u4e3a\u521d\u59cb\u5316\u7684\u4e00\u90e8\u5206\uff0c\u6bcf\u4e2atrie \u90fd\u4f1a\u521b\u5efa\u5b83\u81ea\u5df1\u7684\u6839\u8282\u70b9\uff08NULL\uff09\u3002\u90a3\u4e48\u6211\u4eec\u53ef\u4ee5\u5b9e\u73b0\u8fd9\u4e24\u4e2a\u65b9\u6cd5\u5982\u4e0b\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"insert(word)\uff1a\u6211\u4eec\u53ef\u4ee5\u5c06\u5355\u8bcd\u62c6\u5206\u4e3a\u5b57\u6bcd\uff0c\u5e76\u4e3a\u6bcf\u4e2a\u5b57\u6bcd\u521b\u5efa\u4e00\u4e2a Node()\u3002\u7136\u540e\u6211\u4eec\u53ef\u4ee5\u5f00\u59cb\u5c06\u8fd9\u4e9b Trie \u8282\u70b9\u4e2d\u7684\u6bcf\u4e00\u4e2a\u94fe\u63a5\u5230\u6839\u8282\u70b9\uff0c\u4ee5\u63d2\u5165\u5355\u8bcd\u3002\u6700\u540e\uff0c\u6211\u4eec\u5c06\u6700\u540e\u63d2\u5165\u7684\u8282\u70b9\u7684 isEndOfWord \u5c5e\u6027\u6807\u8bb0\u4e3a true\u3002"),(0,a.kt)("li",{parentName:"ul"},"search(word)\uff1a\u6211\u4eec\u53ef\u4ee5\u5c06\u5355\u8bcd\u62c6\u5206\u4e3a\u5b57\u6bcd\u3002\u7136\u540e\u6211\u4eec\u53ef\u4ee5\u4ece\u6839\u5f00\u59cb\u4e00\u4e2a\u4e00\u4e2a\u5730\u5bfb\u627e\u8fd9\u4e9b\u5b57\u6bcd\u4e2d\u7684\u6bcf\u4e00\u4e2a\u3002\u5982\u679c\u6211\u4eec\u80fd\u591f\u6309\u987a\u5e8f\u627e\u5230\u6240\u6709\u5b57\u6bcd\uff0c\u90a3\u4e48\u6211\u4eec\u53ef\u4ee5\u8fd4\u56de true \u5426\u5219 false\u3002")),(0,a.kt)("p",null,"\u8ba9\u6211\u4eec\u76f4\u89c2\u5730\u7406\u89e3\u8fd9\u4e24\u4e2a\u64cd\u4f5c\u4ee5\u83b7\u5f97\u66f4\u597d\u7684\u4e0a\u4e0b\u6587\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u9996\u5148insert(CAR)\u7136\u540einsert(CAN):\n",(0,a.kt)("img",{parentName:"li",src:"https://umeimmense.github.io/post-images/1639387651437.jpeg",alt:null})),(0,a.kt)("li",{parentName:"ul"},"\u9996\u5148search(CAR)\u7136\u540esearch(CAN):\n",(0,a.kt)("img",{parentName:"li",src:"https://umeimmense.github.io/post-images/1639387657794.jpeg",alt:null}))),(0,a.kt)("p",null,"\u5b9e\u73b0\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"class Trie{\n  constructor(){\n    this.root = new Node(null)\n  }\n\n  insert(word){\n    let current = this.root\n    // iterate through all the characters of word\n    for(let character of word){\n         // if node doesn't have the current character as child, insert it\n         if(current.children[character] === undefined){\n             current.children[character] = new Node(character)\n         }\n        // move down, to insert next character\n        current = current.children[character]  \n    }\n    // mark the last inserted character as end of the word\n    current.isEndOfWord = true\n  }\n\n  search(word){\n     let current = this.root\n    // iterate through all the characters of word\n    for(let character of word){\n         if(current.children[character] === undefined){\n             // could not find this character in sequence, return false\n             return false\n         }\n        // move down, to match next character\n        current = current.children[character]  \n    }\n     // found all characters, return true if last character is end of a word\n    return current.isEndOfWord\n  }\n}\n")),(0,a.kt)("h2",{id:"\u4f7f\u7528-trie"},"\u4f7f\u7528 Trie"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'const trie = new Trie();\n\n// insert few words\ntrie.insert("CAT");\ntrie.insert("DOG");\n\n// search something\ntrie.search("MAT") // false\ntrie.search("DOG") // true\n')),(0,a.kt)("h3",{id:"\u7a7a\u95f4\u590d\u6742\u5ea6"},"\u7a7a\u95f4\u590d\u6742\u5ea6"),(0,a.kt)("p",null,"\u5728\u6700\u574f\u7684\u60c5\u51b5\u4e0b\uff0c\u6240\u6709\u63d2\u5165\u5355\u8bcd\u7684\u6bcf\u4e2a\u5b57\u7b26\u90fd\u53ef\u4ee5\u5360\u7528 Trie \u4e2d\u7684\u5355\u4e2a\u8282\u70b9\u3002\u6240\u4ee5\u8fd9\u610f\u5473\u7740\u6700\u574f\u7684\u7a7a\u95f4\u590d\u6742\u5ea6\u53ef\u4ee5\u662f (W*n)\uff0c\u5176\u4e2d W \u662f\u6bcf\u4e2a\u5355\u8bcd\u7684\u5e73\u5747\u5b57\u7b26\u6570\uff0cn \u662f Trie \u4e2d\u7684\u5355\u8bcd\u603b\u6570\u3002"),(0,a.kt)("h3",{id:"\u65f6\u95f4\u590d\u6742\u5ea6"},"\u65f6\u95f4\u590d\u6742\u5ea6"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u63d2\u5165\uff1a\u63d2\u5165\u4e00\u4e2a\u6709n\u4e2a\u5b57\u7b26\u7684\u5355\u8bcd\uff0c\u53ea\u9700\u8981\u904d\u5386n\u4e2a\u5b57\u7b26\uff0c\u6240\u4ee5\u65f6\u95f4\u590d\u6742\u5ea6\u4e3aO(n)"),(0,a.kt)("li",{parentName:"ul"},"\u641c\u7d22\uff1a\u4e0e\u63d2\u5165\u7c7b\u4f3c\uff0c\u6211\u4eec\u53ea\u9700\u8981\u904d\u5386\u5355\u8bcd\u7684\u6240\u6709\u5b57\u7b26\u5373\u53ef\u8fdb\u884c\u641c\u7d22\u3002\u6240\u4ee5\u65f6\u95f4\u590d\u6742\u5ea6\u662f O(n)\uff0c\u5176\u4e2d n \u662f\u5355\u8bcd\u4e2d\u7684\u5b57\u7b26\u6570\u3002")),(0,a.kt)("p",null,"\u73b0\u5728\uff0c\u60f3\u4e00\u60f3\uff0c\u4f60\u8fd8\u80fd\u5982\u4f55\u5728\u5e9e\u5927\u7684\u5355\u8bcd\u5217\u8868\u4e2d\u641c\u7d22\u67d0\u4e2a\u5355\u8bcd\uff1f\n-\u53ef\u80fd\u4f7f\u7528\u6570\u7ec4\uff1f\u65f6\u95f4\u590d\u6742\u5ea6\u4e3a O(m)\uff0c\u5176\u4e2d m \u662f\u5355\u8bcd\u603b\u6570\uff0c\u8fd9\u5f88\u7cdf\u7cd5\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5982\u4f55\u4f7f\u7528Map\uff08\u6216 JavaScript \u4e2d\u7684\u5bf9\u8c61\uff09\uff1f\u8fd9\u4f1a\u5c06\u65f6\u95f4\u590d\u6742\u5ea6\u964d\u4f4e\u5230 O(1)\uff0c\u4f46\u662f\u627e\u5230\u5177\u6709\u7279\u5b9a\u524d\u7f00\u7684\u5355\u8bcd\u5217\u8868\u6709\u591a\u5feb\uff1f\u5b83\u5c06\u662f O(m)\u3002")),(0,a.kt)("p",null,"Trie \u4e0d\u4ec5\u5c06\u65f6\u95f4\u590d\u6742\u5ea6\u964d\u4f4e\u5230 O(n)\uff08n = \u5355\u8bcd\u4e2d\u7684\u5b57\u7b26\u6570\uff09\uff0c\u800c\u4e14\u60a8\u8fd8\u53ef\u4ee5\u6709\u6548\u5730\u641c\u7d22\u5177\u6709\u524d\u7f00\u7684\u5355\u8bcd\u5217\u8868\uff0c\u8fd9\u5bf9\u4e8e\u4efb\u4f55\u4ee5\u4e0a\u4e24\u79cd\u65b9\u6cd5\u3002"),(0,a.kt)("h2",{id:"\u5e94\u7528"},"\u5e94\u7528"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u81ea\u52a8\u5b8c\u6210\u548c\u9884\u5148\u8f93\u5165\uff1a\u5982\u679c\u60a8\u5728\u6587\u672c\u6846\u4e2d\u952e\u5165\u5185\u5bb9\uff0c\u5e76\u4e14\u770b\u5230\u5177\u6709\u76f8\u540c\u524d\u7f00\u7684\u6f5c\u5728\u641c\u7d22\u5217\u8868\uff0c\u5373\u81ea\u52a8\u5b8c\u6210\u5c0f\u90e8\u4ef6\uff0c\u90a3\u4e48\u8fd9\u53ef\u80fd\u662f\u7531\u540e\u53f0\u7684 Trie \u5904\u7406\u7684\u3002\u540c\u6837\uff0c",(0,a.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Typeahead"},"Typeahead")," \u4e5f\u53ef\u4ee5\u4f7f\u7528 Trie \u6765\u5b9e\u73b0\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u62fc\u5199\u68c0\u67e5\u5668\uff1a\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528 trie \u521b\u5efa\u62fc\u5199\u68c0\u67e5\u5668\uff0c\u5373\u7ed9\u5b9a\u4e00\u4e2a\u5355\u8bcd\u5217\u8868\uff0c\u6211\u4eec\u53ef\u4ee5\u68c0\u67e5\u7ed9\u5b9a\u5355\u8bcd\u7684\u62fc\u5199\u662f\u5426\u6b63\u786e\u3002"),(0,a.kt)("li",{parentName:"ul"},"IP \u8def\u7531\uff08\u6700\u957f\u524d\u7f00\u5339\u914d\uff09\uff1aInternet \u7531\u591a\u4e2a\u8def\u7531\u5668\u8282\u70b9\u7ec4\u6210\uff0c\u5b83\u4eec\u51b3\u5b9a\u5e94\u8be5\u53d1\u9001\u7684\u76ee\u6807\u6570\u636e\u5305\u3002 Internet \u4e0a\u7684\u6bcf\u4e2a\u8def\u7531\u5668\u90fd\u9700\u8981\u5c06\u6570\u636e\u5305\u53d1\u9001\u5230\u7531\u7ed9\u5b9a IP \u76ee\u7684\u5730\u51b3\u5b9a\u7684\u9002\u5f53\u76ee\u6807\u8282\u70b9\u3002\u4f46\u662f\u6bcf\u4e2a\u8def\u7531\u5668\u5982\u4f55\u4f7f\u7528\u7ed9\u5b9a\u7684 IP \u5730\u5740\u51b3\u5b9a\u4e0b\u4e00\u4e2a\u76ee\u6807\u8def\u7531\u5668\u5462\uff1f\u8fd9\u4e2a\u95ee\u9898\u53ef\u4ee5\u4f7f\u7528IP\u8def\u7531\u6765\u89e3\u51b3\u3002",(0,a.kt)("a",{parentName:"li",href:"https://www.lewuathe.com/longest-prefix-match-with-trie-tree.html"},"\u8fd9\u662f\u4e00\u7bc7\u6df1\u5165\u63a2\u8ba8\u8fd9\u4e2a\u4e3b\u9898\u7684\u597d\u6587\u7ae0"),"\u3002")))}s.isMDXComponent=!0}}]);