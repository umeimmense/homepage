"use strict";(self.webpackChunkhomepage=self.webpackChunkhomepage||[]).push([[6890],{3905:function(e,t,n){n.d(t,{Zo:function(){return h},kt:function(){return s}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},p=Object.keys(e);for(a=0;a<p.length;a++)n=p[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)n=p[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),u=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},h=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,p=e.originalType,i=e.parentName,h=o(e,["components","mdxType","originalType","parentName"]),m=u(n),s=r,k=m["".concat(i,".").concat(s)]||m[s]||c[s]||p;return n?a.createElement(k,l(l({ref:t},h),{},{components:n})):a.createElement(k,l({ref:t},h))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var p=n.length,l=new Array(p);l[0]=m;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var u=2;u<p;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5625:function(e,t,n){n.r(t),n.d(t,{assets:function(){return h},contentTitle:function(){return i},default:function(){return s},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return c}});var a=n(7462),r=n(3366),p=(n(7294),n(3905)),l=["components"],o={title:" JavaScript \u4e2d\u7684 Heap",date:new Date("2021-12-13T11:18:28.000Z"),tags:["JavaScript","Algorithm"]},i=void 0,u={permalink:"/homepage/blog/javascript-zhong-de-dui",editUrl:"https://github.com/umeimmense/homepage/tree/main/blog/blog/javascript-zhong-de-dui.md",source:"@site/blog/javascript-zhong-de-dui.md",title:" JavaScript \u4e2d\u7684 Heap",description:"\u524d\u8a00",date:"2021-12-13T11:18:28.000Z",formattedDate:"2021\u5e7412\u670813\u65e5",tags:[{label:"JavaScript",permalink:"/homepage/blog/tags/java-script"},{label:"Algorithm",permalink:"/homepage/blog/tags/algorithm"}],readingTime:12.68,truncated:!1,authors:[],frontMatter:{title:" JavaScript \u4e2d\u7684 Heap",date:"2021-12-13T11:18:28.000Z",tags:["JavaScript","Algorithm"]},prevItem:{title:"React Router 6\uff1a\u5d4c\u5957\u8def\u7531",permalink:"/homepage/blog/react-router-6qian-tao-lu-you"},nextItem:{title:"JavaScript \u4e2d\u7684\u7a00\u758f\u6570\u7ec4\u4e0e\u5bc6\u96c6\u6570\u7ec4\u7684\u533a\u522b\uff1f",permalink:"/homepage/blog/javascript-zhong-de-xi-shu-shu-zu-yu-mi-ji-shu-zu-de-qu-bie"}},h={authorsImageUrls:[]},c=[{value:"\u524d\u8a00",id:"\u524d\u8a00",level:2},{value:"\u4ec0\u4e48\u662f\u5806\uff1f",id:"\u4ec0\u4e48\u662f\u5806",level:2},{value:"\u5982\u4f55\u8868\u793a\u5806\uff1f",id:"\u5982\u4f55\u8868\u793a\u5806",level:2},{value:"\u5177\u4f53\u5b9e\u73b0",id:"\u5177\u4f53\u5b9e\u73b0",level:2},{value:"\u5b9e\u73b0heappush()",id:"\u5b9e\u73b0heappush",level:3},{value:"\u5b9e\u73b0 heappop()",id:"\u5b9e\u73b0-heappop",level:3},{value:"\u4f7f\u7528\u73b0\u6709\u6570\u7ec4\u521b\u5efa\u5806",id:"\u4f7f\u7528\u73b0\u6709\u6570\u7ec4\u521b\u5efa\u5806",level:2}],m={toc:c};function s(e){var t=e.components,n=(0,r.Z)(e,l);return(0,p.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("h2",{id:"\u524d\u8a00"},"\u524d\u8a00"),(0,p.kt)("p",null,"\u4e4b\u524d\u6211\u4eec\u5df2\u7ecf\u7814\u7a76\u4e86\u6811\u6570\u636e\u7ed3\u6784\u7684\u5b9e\u73b0\u4ee5\u53ca\u5b83\u7684\u4e00\u4e9b\u53d8\u4f53\uff0c\u4f8b\u5982 trie\u3002\u5728\u8fd9\u7bc7\u6587\u7ae0\u4e2d\uff0c\u6211\u4eec\u5c06\u6df1\u5165\u7814\u7a76\u5806\u3002\u5b83\u4e5f\u79f0\u4e3a\u4f18\u5148\u7ea7\u961f\u5217\u3002"),(0,p.kt)("h2",{id:"\u4ec0\u4e48\u662f\u5806"},"\u4ec0\u4e48\u662f\u5806\uff1f"),(0,p.kt)("p",null,"\u5806\u662f\u6811\u6570\u636e\u7ed3\u6784\u7684\u4e00\u79cd\u53d8\u4f53\uff0c\u5177\u6709\u4e24\u4e2a\u9644\u52a0\u5c5e\u6027\uff1a\n1.\u5b83\u662f\u4e00\u68f5\u5b8c\u5168\u4e8c\u53c9\u6811\uff1a\u4e00\u68f5\u5b8c\u5168\u4e8c\u53c9\u6811\u7684\u6bcf\u4e00\u5c42\u90fd\u5305\u542b\u6700\u5927\u6570\u91cf\u7684\u8282\u70b9\uff0c\u53ef\u80fd\u6700\u540e\u4e00\u5c42\u9664\u5916\uff0c\u5b83\u5fc5\u987b\u4ece\u5de6\u5230\u53f3\u586b\u5145\u3002\u5b8c\u6574\u7684\u4e8c\u53c9\u6811\u603b\u662f\u901a\u8fc7\u5b83\u7684\u5b9a\u4e49\u6765\u5e73\u8861\u7684\u3002\u4f5c\u4e3a\u53c2\u8003\u4e0b\u56fe\u663e\u793a\u4e86\u4ec0\u4e48\u65f6\u5019\u53ef\u4ee5\u5c06\u6811\u79f0\u4e3a\u5b8c\u5168\u4e8c\u53c9\u6811\uff1a\n",(0,p.kt)("img",{parentName:"p",src:"https://umeimmense.github.io/post-images/1639723723975.jpeg",alt:null}),"\n2.\u6bcf\u4e2a\u8282\u70b9\u90fd\u6ee1\u8db3\u201c\u5806\u5c5e\u6027\u201d\uff1a\u5806\u5c5e\u6027\u672c\u8d28\u4e0a\u610f\u5473\u7740\u5bf9\u4e8e\u4efb\u4f55\u7ed9\u5b9a\u7684\u8282\u70b9 C\uff0c\u5982\u679c P \u662f C \u7684\u7236\u8282\u70b9\uff0c\u5219\uff1a"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"\u5bf9\u4e8e\u6700\u5927\u5806\uff1aP \u7684\u952e\u5e94\u8be5\u5927\u4e8e\u6216\u7b49\u4e8e C \u7684\u952e\u3002"),(0,p.kt)("li",{parentName:"ul"},"\u5bf9\u4e8e\u6700\u5c0f\u5806\uff1aP \u7684\u952e\u5e94\u8be5\u5c0f\u4e8e\u6216\u7b49\u4e8e C \u7684\u952e\u3002\n",(0,p.kt)("img",{parentName:"li",src:"https://umeimmense.github.io/post-images/1639723881691.jpeg",alt:null}))),(0,p.kt)("h2",{id:"\u5982\u4f55\u8868\u793a\u5806"},"\u5982\u4f55\u8868\u793a\u5806\uff1f"),(0,p.kt)("p",null,"\u6211\u4eec\u901a\u5e38\u4ece\u8282\u70b9\u7684\u7c7b\u8868\u793a\u5f00\u59cb\u5b9e\u73b0\uff0c\u7136\u540e\u5c06\u5176\u4e0e\u5b9e\u9645\u6570\u636e\u7ed3\u6784\u672c\u8eab\u7684\u7c7b\u8868\u793a\u8054\u7cfb\u8d77\u6765\u3002\u6211\u4eec\u4e5f\u53ef\u4ee5\u5bf9\u5806\u505a\u540c\u6837\u7684\u4e8b\u60c5\u3002\u4f46\u662f\uff0c\u6709\u4e00\u79cd\u66f4\u7b80\u5355\u7684\u65b9\u6cd5\u53ef\u4ee5\u89e3\u51b3\u6b64\u95ee\u9898\uff0c\u8fd9\u662f\u56e0\u4e3a\u6240\u6709\u5806\u90fd\u5fc5\u987b\u9075\u5b88\u4ee5\u4e0b\u4e24\u4e2a\u5c5e\u6027\u4e4b\u4e00\uff1a"),(0,p.kt)("blockquote",null,(0,p.kt)("p",{parentName:"blockquote"},"\u6240\u6709\u5806\u5fc5\u987b\u662f\u5b8c\u5168\u4e8c\u53c9\u6811\n\u7531\u4e8e\u6240\u6709\u5806\u90fd\u5fc5\u987b\u662f\u5b8c\u5168\u4e8c\u53c9\u6811\uff0c\u5e76\u4e14\u6211\u4eec\u77e5\u9053\u5b8c\u5168\u4e8c\u53c9\u6811\u4e2d\u9664\u6700\u540e\u4e00\u5c42\u5916\u7684\u6240\u6709\u7ea7\u522b\u90fd\u5fc5\u987b\u5b8c\u5168\u586b\u5145\u3002\u6b64\u5916\uff0c\u5bf9\u4e8e\u6700\u540e\u4e00\u5c42\uff0c\u6240\u6709\u5b50\u9879\u5fc5\u987b\u4ece\u5de6\u5230\u53f3\u65b9\u5411\u586b\u5145\uff0c\u6ca1\u6709\u4efb\u4f55\u95f4\u9699\u3002\u8fd9\u4e2a\u5b9a\u4e49\u786e\u4fdd\u4e86\u4e00\u4e2a\u7531 n \u4e2a\u8282\u70b9\u7ec4\u6210\u7684\u5b8c\u5168\u4e8c\u53c9\u6811\u53ea\u80fd\u6709 1 \u79cd\u53ef\u80fd\u7684\u5f62\u72b6\u3002\u53cd\u8fc7\u6765\uff0c\u5b83\u5141\u8bb8\u6211\u4eec\u4f7f\u7528\u6570\u7ec4\u6765\u8868\u793a\u5b8c\u6574\u7684\u4e8c\u53c9\u6811\u3002\u8fd9\u610f\u5473\u7740\uff0c\u5806\u4e5f\u53ef\u4ee5\u4f7f\u7528\u6570\u7ec4\u6765\u8868\u793a\u3002\u4f8b\u5982\uff0c\u6211\u4eec\u53ef\u4ee5\u5c06\u4e00\u4e2a\u7b80\u5355\u7684\u5806\u8868\u793a\u4e3a\u4e00\u4e2a\u6570\u7ec4\uff0c\u5982\u4e0b\u56fe\u6240\u793a\uff1a\n",(0,p.kt)("img",{parentName:"p",src:"https://umeimmense.github.io/post-images/1639724054342.jpeg",alt:null}),"\n\u8fd9\u91cc\u8981\u6ce8\u610f\u7684\u5173\u952e\u662f\u7236\u8282\u70b9\u548c\u5b50\u8282\u70b9\u4e4b\u95f4\u7684\u5173\u7cfb\u3002\u5982\u679c\u4ed4\u7ec6\u89c2\u5bdf\u4e0a\u56fe\uff0c\u6211\u4eec\u53ef\u4ee5\u63a8\u65ad\u51fa\u4ee5\u4e0b\u5185\u5bb9\uff1a"),(0,p.kt)("ol",{parentName:"blockquote"},(0,p.kt)("li",{parentName:"ol"},"\u5982\u679c\u8282\u70b9\u4f4d\u4e8e\u6570\u7ec4\u4e2d\u7684\u7d22\u5f15 i \u5904\uff0c\u5219\u5047\u8bbe\u7ed3\u679c\u7d22\u5f15\u4f4d\u4e8e\u6570\u7ec4\u7684\u957f\u5ea6\u5185\uff1a")),(0,p.kt)("ul",{parentName:"blockquote"},(0,p.kt)("li",{parentName:"ul"},"\u5b83\u7684\u5de6\u5b69\u5b50\u5c06\u5728\u7b2c (2i+1) \u4e2a\u4f4d\u7f6e"),(0,p.kt)("li",{parentName:"ul"},"\u5de6\u5b69\u5b50\u5c06\u5728 (2i+2) \u4f4d\u7f6e")),(0,p.kt)("ol",{parentName:"blockquote",start:2},(0,p.kt)("li",{parentName:"ol"},"\u5982\u679c\u4e00\u4e2a\u8282\u70b9\u88ab\u653e\u7f6e\u5728\u6570\u7ec4\u4e2d\u7684\u7d22\u5f15 i \u5904\uff0c\u5b83\u7684\u7236\u8282\u70b9\u5c06\u4f4d\u4e8e\u7b2c ((i-1)/2) \u4e2a\u7d22\u5f15\u5904\u3002\n\u4e0b\u56fe\u53ef\u4ee5\u66f4\u8f7b\u677e\u5730\u4f7f\u7528\u4e0a\u8ff0\u4fe1\u606f\uff1a\n",(0,p.kt)("img",{parentName:"li",src:"https://umeimmense.github.io/post-images/1639724181146.jpeg",alt:null})))),(0,p.kt)("h2",{id:"\u5177\u4f53\u5b9e\u73b0"},"\u5177\u4f53\u5b9e\u73b0"),(0,p.kt)("blockquote",null,(0,p.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f\uff1a\u5728\u6574\u4e2a\u5b9e\u73b0\u8fc7\u7a0b\u4e2d\uff0c\u6211\u4eec\u53ea\u4f1a\u8ba8\u8bba\u6700\u5c0f\u5806\u3002\u7a0d\u540e\u6211\u4eec\u5c06\u770b\u5230\u5982\u4f55\u5c06\u76f8\u540c\u7684\u60f3\u6cd5\u8f7b\u677e\u6269\u5c55\u5230\u6700\u5927\u5806\u3002")),(0,p.kt)("p",null,"\u5728\u6211\u4eec\u5df2\u7ecf\u6db5\u76d6\u4e86\u8868\u793a\u7684\u7ec6\u8282\uff0c\u8ba9\u6211\u4eec\u60f3\u51fa\u4e00\u4e2a\u4f7f\u7528\u6570\u636e\u7ed3\u6784\u7684\u63a5\u53e3\u3002\u5728\u5806\u6570\u636e\u7ed3\u6784\u7684\u5e2e\u52a9\u4e0b\uff0c\u6211\u4eec\u5e0c\u671b\u80fd\u591f\u5b9e\u73b0\u4e09\u4e2a\u5173\u952e\u70b9\uff1a"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"\u5411\u5806\u4e2d\u6dfb\u52a0\u4e00\u4e2a\u65b0\u952e"),(0,p.kt)("li",{parentName:"ul"},"\u4ece\u5806\u4e2d\u5220\u9664\u6700\u5927\u6216\u6700\u5c0f\u952e\uff08\u53d6\u51b3\u4e8e\u5b83\u662f\u6700\u5c0f\u5806\u8fd8\u662f\u6700\u5927\u5806\uff09"),(0,p.kt)("li",{parentName:"ul"},"\u4ece\u5806\u4e2d\u83b7\u53d6\u6700\u5c0f\u952e\u7684\u6700\u5927\u503c\uff08\u53d6\u51b3\u4e8e\u662f\u6700\u5c0f\u5806\u8fd8\u662f\u6700\u5927\u5806\uff09")),(0,p.kt)("p",null,"\u7b2c\u4e09\u4e2a\u64cd\u4f5c\u5f88\u7b80\u5355\u3002\u6211\u4eec\u77e5\u9053\u5bf9\u4e8e\u6700\u5c0f\u5806\uff0c\u6570\u7ec4\u4e2d\u7684\u7b2c\u4e00\u9879\u5c06\u662f\u6700\u5c0f\u952e\uff0c\u540c\u6837\u5bf9\u4e8e\u6700\u5927\u5806\uff0c\u6570\u7ec4\u4e2d\u7684\u7b2c\u4e00\u9879\u5c06\u662f\u6700\u5927\u952e\u3002\u6240\u4ee5\u6211\u4eec\u5269\u4e0b\u4e24\u4e2a\u64cd\u4f5c\u7684\u5b9e\u73b0\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-javascript"},'// adds the provided newKey into the min-heap named "heap"\nfunction heappush(heap, newKey){}\n\n// removes the smallest key from the min-heap named "heap"\nfunction heappop(heap){}\n')),(0,p.kt)("h3",{id:"\u5b9e\u73b0heappush"},"\u5b9e\u73b0heappush()"),(0,p.kt)("p",null,"\u6211\u4eec\u5982\u4f55\u5411\u5806\u4e2d\u6dfb\u52a0\u4e00\u4e2a\u65b0\u952e\uff1f\u5047\u8bbe\u6211\u4eec\u9996\u5148\u5c06\u65b0\u952e\u63a8\u9001\u5230\u6570\u7ec4\u4e2d\u3002\u63a8\u9001\u65b0\u952e\u4ecd\u7136\u8ba9\u6211\u4eec\u9075\u5b88\u5806\u7684\u7b2c\u4e00\u4e2a\u8981\u6c42\uff0c\u5373\u5b83\u5fc5\u987b\u662f\u4e00\u4e2a\u5b8c\u6574\u7684\u4e8c\u53c9\u6811\u3002\u4f46\u662f\uff0c\u6211\u4eec\u9700\u8981\u786e\u4fdd\u5b83\u4e5f\u9075\u5b88\u201c\u5806\u5c5e\u6027\u201d\u3002\n\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u5c06push\u7684\u9879\u4e0e\u5176\u7236\u9879\u8fdb\u884c\u6bd4\u8f83\u6765\u505a\u5230\u8fd9\u4e00\u70b9\u3002\u5982\u679c\u7236\u9879\u5927\u4e8e\u7684push\u7684\u9879\uff0c\u90a3\u4e48\u6211\u4eec\u77e5\u9053\u5806\u5c5e\u6027\u88ab\u8fdd\u53cd\uff0c\u56e0\u6b64\u6211\u4eec\u53ef\u4ee5\u4ea4\u6362\u3002\u6211\u4eec\u53ef\u4ee5\u7ee7\u7eed\u8fdb\u884c\u8fd9\u79cd\u4ea4\u6362\uff0c\u76f4\u5230\u627e\u5230\u4e00\u4e2a\u5408\u6cd5\u7684\u7236\u8282\u70b9\u6216\u8005\u6211\u4eec\u5df2\u7ecf\u5230\u8fbe\u5806\u7684\u9876\u90e8\u3002\n",(0,p.kt)("img",{parentName:"p",src:"https://umeimmense.github.io/post-images/1639724511455.jpeg",alt:null}),"\n\u4ee3\u7801\u5982\u4e0b"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-javascript"},"function heappush(heap, newKey){\n  // push the new key \n  heap.push(newKey);\n\n  // get the current index of pushed key\n  let curr = heap.length-1;\n\n // keep comparing till root is reached or we terminate in middle\n  while(curr > 0){\n    let parent = Math.floor((curr-1)/2)\n    if( heap[curr] < heap[parent] ){\n      // quick swap\n      [ heap[curr], heap[parent] ] = [ heap[parent], heap[curr] ]\n      // update the index of newKey\n      curr = parent\n    } else{\n      // if no swap, break, since we heap is stable now\n      break\n    }\n  } \n}\n")),(0,p.kt)("h3",{id:"\u5b9e\u73b0-heappop"},"\u5b9e\u73b0 heappop()"),(0,p.kt)("p",null,"\u4f7f\u7528 ",(0,p.kt)("inlineCode",{parentName:"p"},"heappop()")," \u6211\u4eec\u9700\u8981\u5220\u9664\u5806\u7684\u6700\u9876\u5c42\u5143\u7d20\u3002\u610f\u601d\u662f\uff0c\u5bf9\u4e8e\u6700\u5c0f\u5806\uff0c\u6700\u5c0f\u952e\u5c06\u88ab\u5220\u9664\uff0c\u800c\u5bf9\u4e8e\u6700\u5927\u5806\uff0c\u6700\u5927\u952e\u5c06\u88ab\u5220\u9664\u3002\u4ece\u6570\u7ec4\u7684\u89d2\u5ea6\u6765\u770b\uff0c\u5b83\u53ea\u662f\u610f\u5473\u7740\u6211\u4eec\u5e94\u8be5\u5220\u9664\u6570\u7ec4\u7684\u7b2c\u4e00\u9879\u3002\u4f46\u662f\u54ea\u4e2a\u8282\u70b9\u5e94\u8be5\u6210\u4e3a\u6839\uff1f\u5982\u679c\u6211\u4eec\u968f\u673a\u9009\u62e9\u88ab\u79fb\u9664\u8282\u70b9\u7684\u5de6\u5b69\u5b50\u6216\u53f3\u5b69\u5b50\u4f5c\u4e3a\u65b0\u7684\u6839\u8282\u70b9\uff0c\u5219\u4e0d\u80fd\u4fdd\u8bc1\u9075\u5faa\u5806\u5c5e\u6027\u3002\u6211\u4eec\u53ef\u4ee5\u6309\u7167\u4ee5\u4e0b\u6b65\u9aa4\uff08\u5bf9\u4e8e\u6700\u5c0f\u5806\uff09\uff1a"),(0,p.kt)("ol",null,(0,p.kt)("li",{parentName:"ol"},"\u5c06\u6839\u8282\u70b9\u4e0e\u6700\u540e\u4e00\u4e2a\u8282\u70b9\u4ea4\u6362\uff08\u6570\u7ec4\u4e2d\u7684\u7b2c\u4e00\u4e2a\u5143\u7d20\u4e0e\u6700\u540e\u4e00\u4e2a\u5143\u7d20\uff09"),(0,p.kt)("li",{parentName:"ol"},"\u901a\u8fc7\u4ece\u6570\u7ec4\u4e2d\u5f39\u51fa\u6700\u540e\u4e00\u9879\u6765\u5220\u9664\u6839\u8282\u70b9"),(0,p.kt)("li",{parentName:"ol"},"\u5c06\u65b0\u6839\u8282\u70b9\u7684\u952e\u4e0e\u5176\u5b50\u8282\u70b9\u8fdb\u884c\u6bd4\u8f83\uff1a")),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"\u5982\u679c\u952e\u5c0f\u4e8e\u5b83\u7684\u4e24\u4e2a\u5b50\u952e\uff0c\u5219\u5806\u662f\u7a33\u5b9a\u7684"),(0,p.kt)("li",{parentName:"ul"},"\u5426\u5219\uff0c\u5c06Key\u4e0e\u8f83\u5c0f\u7684\u5b50Key\u4ea4\u6362")),(0,p.kt)("ol",{start:4},(0,p.kt)("li",{parentName:"ol"},"\u91cd\u590d\u6b65\u9aa4 3\uff0c\u76f4\u5230\u5230\u8fbe\u6700\u540e\u4e00\u4e2a\u5b50\u8282\u70b9\u6216\u5efa\u7acb\u5806\u5c5e\u6027\u3002")),(0,p.kt)("p",null,"\u672c\u8d28\u4e0a\uff0c\u6211\u4eec\u9075\u5faa\u4e0e heappush() \u7c7b\u4f3c\u7684\u8fc7\u7a0b\uff0c\u9664\u4e86\u6211\u4eec\u8bd5\u56fe\u4ee5\u4ece\u4e0a\u5230\u4e0b\u7684\u65b9\u5f0f\u5efa\u7acb\u5806\u5c5e\u6027\uff0c\u5373\u4ece\u6839\u5f00\u59cb\u5e76\u4e00\u76f4\u6301\u7eed\u5230\u6700\u540e\u4e00\u4e2a\u5b69\u5b50\u3002\u5728 heappush() \u4e2d\uff0c\u6211\u4eec\u9075\u5faa\u76f8\u53cd\u7684\u987a\u5e8f\uff0c\u5373\u4ece\u6700\u540e\u4e00\u4e2a\u5b69\u5b50\u5f00\u59cb\uff0c\u4e00\u76f4\u5230\u6839\u3002\n\u4ee3\u7801\u5b9e\u73b0\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-javascript"},"function heappop(heap){\n  // swap root with last node\n  const n = heap.length;\n  [heap[0], heap[n-1]] = [ heap[n-1], heap[0]]\n\n  // remove the root i.e. the last item (because of swap)\n  const removedKey = heap.pop();\n\n  let curr = 0;\n\n  // keep going till atleast left child is possible for current node\n  while(2*curr + 1 < heap.length){\n    const leftIndex = 2*curr+1; \n    const rightIndex = 2*curr+2;\n    const minChildIndex = (rightIndex < heap.length && heap[rightIndex] < heap[leftIndex] ) ? rightIndex :leftIndex;\n    if(heap[minChildIndex] < heap[curr]){\n     // quick swap, if smaller of two children is smaller than the parent (min-heap)\n      [heap[minChildIndex], heap[curr]] = [heap[curr], heap[minChildIndex]]\n      curr = minChildIndex\n    } else {\n      break\n    }\n  }\n\n  // finally return the removed key\n  return removedKey;\n}\n")),(0,p.kt)("h2",{id:"\u4f7f\u7528\u73b0\u6709\u6570\u7ec4\u521b\u5efa\u5806"},"\u4f7f\u7528\u73b0\u6709\u6570\u7ec4\u521b\u5efa\u5806"),(0,p.kt)("p",null,"\u4ece\u73b0\u6709\u6570\u7ec4\u521b\u5efa\u5806\u770b\u8d77\u6765\u975e\u5e38\u7b80\u5355\u3002\u53ea\u9700\u521b\u5efa\u4e00\u4e2a\u7a7a\u5806\uff0c\u7136\u540e\u904d\u5386\u6570\u7ec4\u7684\u6240\u6709\u9879\u5e76\u6267\u884c heappush():"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-javascript"},"function heapify(arr){\n  const heap = []\n  for(let item of arr){\n     heappush(heap, item)\n  }\n  return heap;\n}\n")),(0,p.kt)("p",null,"\u4f46\u662f\u6211\u4eec\u53ef\u4ee5\u5728\u8fd9\u91cc\u505a\u5f97\u66f4\u597d\u5417\uff1f\u662f\u7684\u3002\u9996\u5148\uff0c\u6211\u4eec\u53ef\u4ee5\u5b8c\u5168\u907f\u514d\u4e3a\u65b0\u5806\u4f7f\u7528\u989d\u5916\u7684\u7a7a\u95f4\u3002\u4e3a\u4ec0\u4e48\u4e0d\u91cd\u65b0\u6392\u5217\u6570\u7ec4\u672c\u8eab\u7684\u5143\u7d20\uff0c\u4f7f\u5176\u6ee1\u8db3\u5806\u5c5e\u6027\uff1f\u4e3a\u6b64\uff0c\u6211\u4eec\u53ef\u4ee5\u9075\u5faa\u4e0e\u5806\u5f39\u51fa\u7c7b\u4f3c\u7684\u903b\u8f91\u3002\u6211\u4eec\u53ef\u4ee5\u67e5\u770b\u7b2c\u4e00\u4e2a\u8282\u70b9\u5e76\u4e0e\u5b83\u7684\u5b50\u8282\u70b9\u8fdb\u884c\u6bd4\u8f83\uff0c\u770b\u770b\u5b83\u662f\u5426\u662f\u6700\u5c0f\u7684\u8282\u70b9\uff0c\u5982\u679c\u4e0d\u662f\u4e0e\u8f83\u5c0f\u7684\u5b50\u8282\u70b9\u4ea4\u6362\u3002\u4e0b\u9762\u6211\u4eec\u6765\u5b9e\u73b0\u4e00\u4e0b\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-javascript"},"// follows pretty much the same logic as heappush, except minor modifications\nfunction percolateDown(heap, index){\n  let curr = index;\n  // keep going down till heap property is established\n  while(2*curr + 1 < heap.length){\n    const leftIndex = 2*curr+1; \n    const rightIndex = 2*curr+2;\n    const minChildIndex = (rightIndex < heap.length && heap[rightIndex] < heap[leftIndex] ) ? rightIndex :leftIndex;\n    if(heap[minChildIndex] < heap[curr]){\n     // quick swap, if smaller of two children is smaller than the parent (min-heap)\n      [heap[minChildIndex], heap[curr]] = [heap[curr], heap[minChildIndex]]\n      curr = minChildIndex\n    } else {\n      break\n    }\n}\n")),(0,p.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u5bf9\u6570\u7ec4\u4e2d\u7684\u6240\u6709\u5143\u7d20\u4f7f\u7528 percolateDown() \u51fd\u6570\uff0c\u6309\u7167\u5806\u5c5e\u6027\u5c06\u6240\u6709\u5143\u7d20\u6309\u6b63\u786e\u987a\u5e8f\u6392\u5217\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-javascript"},"function heapify(heap){\n  for(let i in heap){\n     percolateDown(heap, i)\n   }\n  return heap\n}\n")),(0,p.kt)("p",null,"\u8fd9\u6837\u5c31\u4e3a\u6211\u4eec\u8282\u7701\u4e86\u4e00\u4e2a\u989d\u5916\u7684\u6570\u7ec4\u3002\u4f46\u662f\u6211\u4eec\u80fd\u505a\u4e9b\u4ec0\u4e48\u6765\u6539\u5584\u6240\u82b1\u8d39\u7684\u65f6\u95f4\u5417\uff1f\u662f\u7684\u3002\u5982\u679c\u4f60\u4ed4\u7ec6\u89c2\u5bdf\uff0c\u6211\u4eec\u5b9e\u9645\u4e0a\u662f\u5728\u505a\u4e00\u4e9b\u91cd\u590d\u7684\u5de5\u4f5c\u3002\u5047\u8bbe\u5806\u4e2d\u6709 n \u4e2a\u8282\u70b9\uff0c\u5176\u4e2d x \u662f\u53f6\u8282\u70b9\uff0c\u90a3\u4e48\u8fd9\u610f\u5473\u7740\u6211\u4eec\u53ea\u9700\u8981\u5bf9 n-x \u4e2a\u8282\u70b9\u6267\u884c percolateDown()\uff0c\u56e0\u4e3a\u5230\u90a3\u65f6\u6700\u540e x \u4e2a\u8282\u70b9\u5c06\u5728\u6b63\u786e\u7684\u4f4d\u7f6e\u3002"),(0,p.kt)("blockquote",null,(0,p.kt)("p",{parentName:"blockquote"},"\u90a3\u4e48\u5728\u5806\u7684\u6570\u7ec4\u8868\u793a\u4e2d\uff0c\u6211\u4eec\u5e94\u8be5\u6267\u884c percolateDown() \u64cd\u4f5c\u5230\u54ea\u4e2a\u7d22\u5f15\uff1f\n\u76f4\u5230\u6700\u540e\u4e00\u4e2a\u8282\u70b9\u7684\u7236\u8282\u70b9\u6240\u5728\u7684\u7d22\u5f15\u3002\u56e0\u4e3a\u4e00\u65e6\u6700\u540e\u4e00\u4e2a\u8282\u70b9\u7684\u7236\u8282\u70b9\u88ab\u8fc7\u6ee4\u6389\uff0c\u5b83\u4e5f\u4f1a\u5904\u7406\u6700\u540e\u4e00\u4e2a\u8282\u70b9\u3002\u6240\u4ee5\uff1a"),(0,p.kt)("ul",{parentName:"blockquote"},(0,p.kt)("li",{parentName:"ul"},"\u5982\u679c\u6570\u7ec4\u957f\u5ea6\u4e3a n"),(0,p.kt)("li",{parentName:"ul"},"\u6700\u540e\u4e00\u4e2a\u8282\u70b9\u7684\u7d22\u5f15\u662f\uff1an-1"),(0,p.kt)("li",{parentName:"ul"},"\u5b83\u7684\u7236\u8282\u70b9\u7684\u7d22\u5f15\u662f\uff1a",(0,p.kt)("inlineCode",{parentName:"li"},"Math.floor((n-1) - 1 / 2) = Math.floor(n/2 - 1)"))),(0,p.kt)("pre",{parentName:"blockquote"},(0,p.kt)("code",{parentName:"pre",className:"language-javascript"},"function heapify(heap){\n  const last = Math.floor(heap.length/2 - 1);\n  for(let i = 0; i <= last; i++){\n     percolateDown(heap, i)\n   }\n  return heap\n}\n")),(0,p.kt)("h2",{parentName:"blockquote",id:"\u65f6\u95f4\u548c\u7a7a\u95f4\u590d\u6742\u5ea6"},"\u65f6\u95f4\u548c\u7a7a\u95f4\u590d\u6742\u5ea6"),(0,p.kt)("p",{parentName:"blockquote"},"\u67e5\u770b heappush() \u548c heapop() \u64cd\u4f5c\uff0c\u5f88\u660e\u663e\u6211\u4eec\u5728\u5c1d\u8bd5\u6dfb\u52a0\u6216\u5220\u9664\u952e\u65f6\u6b63\u5728\u904d\u5386\u6811\u7684\u9ad8\u5ea6\u3002\u7531\u4e8e\u5806\u662f\u4e00\u68f5\u5e73\u8861\u6811\uff0c\u56e0\u6b64\u9ad8\u5ea6\u662f log(n)\uff0c\u5176\u4e2d n \u662f\u8282\u70b9\u603b\u6570\u3002\u56e0\u6b64\uff0c\u5bf9\u4e8e\u5806\u7684\u63a8\u9001\u548c\u5f39\u51fa\u64cd\u4f5c\uff0c\u65f6\u95f4\u590d\u6742\u5ea6\u4e3a O(log(n))\u3002 heapify() \u64cd\u4f5c\u7684\u65f6\u95f4\u590d\u6742\u5ea6\u53ef\u80fd\u770b\u8d77\u6765\u50cf Onlog(n)\uff0c\u56e0\u4e3a\u6bcf\u6b21\u8c03\u7528\u90fd\u9700\u8981 O(log(n))\u3002\u8fd9\u4e2a\u89c2\u5bdf\u7ed3\u679c\u5bf9\u4e8e\u63a8\u5bfc heapify() \u7684\u65f6\u95f4\u590d\u6742\u5ea6\u7684\u4e0a\u9650\u662f\u6b63\u786e\u7684\uff0c\u4f46\u662f\uff0c\u6e10\u8fd1\uff08\u5e73\u5747\uff09\u65f6\u95f4\u590d\u6742\u5ea6\u4e3a O(n)\u3002\u66f4\u591a\u7ec6\u8282\u5728\u8fd9\u91cc\u3002\u5c31\u7a7a\u95f4\u590d\u6742\u5ea6\u800c\u8a00\uff0c\u5b83\u662f\u6052\u5b9a\u7684\uff0c\u56e0\u4e3a\u989d\u5916\u7684\u7a7a\u95f4\u4ec5\u88ab\u8bf8\u5982 curr\u3001leftIndex \u7b49\u5927\u5c0f\u6052\u5b9a\u7684\u53d8\u91cf\u5360\u7528\u3002"),(0,p.kt)("h2",{parentName:"blockquote",id:"\u6700\u5927\u5806"},"\u6700\u5927\u5806"),(0,p.kt)("p",{parentName:"blockquote"},"\u5982\u679c\u6211\u4eec\u6709 minHeap \u7684\u5b9e\u73b0\uff0c\u6211\u4eec\u4e5f\u53ef\u4ee5\u8f7b\u677e\u5730\u5c06\u5b83\u7528\u4f5c\u6700\u5927\u5806\u3002\u6211\u4eec\u53ea\u9700\u8981\u786e\u4fdd\u5728\u5411\u5806\u6dfb\u52a0\u503c\u65f6\u6211\u4eec\u63d2\u5165\u952e\u7684\u8d1f\u6570\u3002\u5b83\u5c06\u786e\u4fdd\u5806\u5145\u5f53\u6240\u6709\u952e\u7684\u8d1f\u6570\u7684\u6700\u5c0f\u5806\uff0c\u8fd9\u76f8\u5f53\u4e8e\u6240\u6709\u5b9e\u9645\u952e\u7684\u6700\u5927\u5806\u3002\u4f8b\u5982\uff1a"),(0,p.kt)("ul",{parentName:"blockquote"},(0,p.kt)("li",{parentName:"ul"},"\u5047\u8bbe\u6211\u4eec\u6709\u4e00\u4e2a\u6570\u7ec4 ",(0,p.kt)("inlineCode",{parentName:"li"},"const x = [23, 454, 54, 29]"),";"),(0,p.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u65b9\u6cd5\u521b\u5efa\u6700\u5c0f\u5806\uff1a")),(0,p.kt)("pre",{parentName:"blockquote"},(0,p.kt)("code",{parentName:"pre",className:"language-javascript"},"const heap = [];\nfor(let el of x) heappush(heap, el);\n  // min value\nconst min = heappop(heap)\n")),(0,p.kt)("p",{parentName:"blockquote"},"\u6700\u5927\u5806\u53ef\u4ee5\u4f7f\u7528"),(0,p.kt)("pre",{parentName:"blockquote"},(0,p.kt)("code",{parentName:"pre",className:"language-javascript"},"const heap = [];\nfor(let el of x) heappush(heap, -el);\n"))),(0,p.kt)("p",null,"// max value\nconst max = -heappop(heap)"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"")))}s.isMDXComponent=!0}}]);