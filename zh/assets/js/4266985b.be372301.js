"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[33278],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>y});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),s=u(n),m=a,y=s["".concat(i,".").concat(m)]||s[m]||d[m]||l;return n?r.createElement(y,o(o({ref:t},c),{},{components:n})):r.createElement(y,o({ref:t},c))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[s]="string"==typeof e?e:a,o[1]=p;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},83504:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>o,default:()=>s,frontMatter:()=>l,metadata:()=>p,toc:()=>i});var r=n(87462),a=(n(67294),n(3905));const l={sidebar_position:1,title:"\u5355\u673a\u5feb\u901f\u90e8\u7f72",keywords:["Deployment"],description:"\u5355\u673a\u5feb\u901f\u90e8\u7f72"},o=void 0,p={unversionedId:"deployment/deployment-quick",id:"deployment/deployment-quick",isDocsHomePage:!1,title:"\u5355\u673a\u5feb\u901f\u90e8\u7f72",description:"\u5355\u673a\u5feb\u901f\u90e8\u7f72",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/deployment/deployment-quick.md",sourceDirName:"deployment",slug:"/deployment/deployment-quick",permalink:"/zh/docs/next/deployment/deployment-quick",editUrl:"https://github.com/apache/shenyu-website/edit/main/i18n/zh/docusaurus-plugin-content-docs/current/deployment/deployment-quick.md",version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"\u5355\u673a\u5feb\u901f\u90e8\u7f72",keywords:["Deployment"],description:"\u5355\u673a\u5feb\u901f\u90e8\u7f72"},sidebar:"tutorialSidebar",previous:{title:"\u672c\u5730\u90e8\u7f72",permalink:"/zh/docs/next/deployment/deployment-local"},next:{title:"\u4e8c\u8fdb\u5236\u5305\u90e8\u7f72",permalink:"/zh/docs/next/deployment/deployment-package"}},i=[{value:"\u73af\u5883\u51c6\u5907",id:"\u73af\u5883\u51c6\u5907",children:[]},{value:"\u542f\u52a8 Apache ShenYu Bootstrap",id:"\u542f\u52a8-apache-shenyu-bootstrap",children:[]},{value:"\u9009\u62e9\u5668\u53ca\u89c4\u5219\u914d\u7f6e",id:"\u9009\u62e9\u5668\u53ca\u89c4\u5219\u914d\u7f6e",children:[]},{value:"\u4f7f\u7528postman",id:"\u4f7f\u7528postman",children:[]},{value:"\u4f7f\u7528curl",id:"\u4f7f\u7528curl",children:[]}],u={toc:i},c="wrapper";function s(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u672c\u6587\u4ecb\u7ecd\u5355\u673a\u73af\u5883\u5feb\u901f\u542f\u52a8 ",(0,a.kt)("inlineCode",{parentName:"p"},"Apache ShenYu")," \u7f51\u5173\u3002"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u5728\u9605\u8bfb\u672c\u6587\u6863\u524d\uff0c\u4f60\u9700\u8981\u5148\u9605\u8bfb",(0,a.kt)("a",{parentName:"p",href:"/zh/docs/next/deployment/deployment-before"},"\u90e8\u7f72\u5148\u51b3\u6761\u4ef6"),"\u6587\u6863\u6765\u5b8c\u6210\u90e8\u7f72 ",(0,a.kt)("inlineCode",{parentName:"p"},"shenyu")," \u524d\u7684\u73af\u5883\u51c6\u5907\u5de5\u4f5c\u3002")),(0,a.kt)("h3",{id:"\u73af\u5883\u51c6\u5907"},"\u73af\u5883\u51c6\u5907"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u672c\u5730\u6b63\u786e\u5b89\u88c5JDK1.8+")),(0,a.kt)("h3",{id:"\u542f\u52a8-apache-shenyu-bootstrap"},"\u542f\u52a8 Apache ShenYu Bootstrap"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u4e0b\u8f7d ",(0,a.kt)("a",{parentName:"p",href:"https://archive.apache.org/dist/shenyu/2.5.1/apache-shenyu-2.5.1-bootstrap-bin.tar.gz"},"apache-shenyu-${current.version}-bootstrap-bin.tar.gz"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u89e3\u538b\u7f29 ",(0,a.kt)("inlineCode",{parentName:"p"},"apache-shenyu-${current.version}-bootstrap-bin.tar.gz"),"\u3002 \u8fdb\u5165 bin \u76ee\u5f55\u3002"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"> windwos : start.bat \n\n> linux : ./start.sh \n")),(0,a.kt)("h3",{id:"\u9009\u62e9\u5668\u53ca\u89c4\u5219\u914d\u7f6e"},"\u9009\u62e9\u5668\u53ca\u89c4\u5219\u914d\u7f6e"),(0,a.kt)("p",null,"\u53c2\u8003",(0,a.kt)("a",{parentName:"p",href:"../developer/local-model#%E6%96%B0%E5%A2%9E%E9%80%89%E6%8B%A9%E5%99%A8%E4%B8%8E%E8%A7%84%E5%88%99"},"\u672c\u5730\u6a21\u5f0f"),"\u8fdb\u884c\u9009\u62e9\u5668\u53ca\u89c4\u5219\u7684\u914d\u7f6e\u3002"),(0,a.kt)("p",null,"\u793a\u4f8b\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5982\u670d\u52a1\u5730\u5740\u662f",(0,a.kt)("inlineCode",{parentName:"li"},"http://127.0.0.1:8080/helloworld"),",\u76f4\u63a5\u8bbf\u95ee\u5c06\u8fd4\u56de\u5982\u4e0b")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name" : "Shenyu",\n  "data" : "hello world"\n}\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u6309\u7167\u5982\u4e0b\u8fdb\u884c\u9009\u62e9\u5668\u548c\u89c4\u5219\u914d\u7f6e")),(0,a.kt)("h3",{id:"\u4f7f\u7528postman"},"\u4f7f\u7528postman"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Headers \u4e2d\u6dfb\u52a0 ",(0,a.kt)("inlineCode",{parentName:"p"},"localKey: 123456"),"\u3002\u5982\u679c\u9700\u8981\u81ea\u5b9a\u4e49 localKey\uff0c\u53ef\u4ee5\u4f7f\u7528 sha512 \u5de5\u5177\u6839\u636e\u660e\u6587\u751f\u6210 key\uff0c\u5e76\u66f4\u65b0 ",(0,a.kt)("inlineCode",{parentName:"p"},"shenyu.local.sha512Key")," \u5c5e\u6027\u3002"),(0,a.kt)("p",{parentName:"blockquote"},"\u8bf7\u6c42\u65b9\u5f0fPOST\uff0c\u5730\u5740",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost:9195/shenyu/plugin/selectorAndRules"),"\uff0cbody \u9009\u62e9raw json\uff0c\u5185\u5bb9\u5982\u4e0b\uff1a")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Headers\n\nlocalKey: 123456\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "pluginName": "divide",\n    "selectorHandler": "[{\\"upstreamUrl\\":\\"127.0.0.1:8080\\"}]",\n    "conditionDataList": [{\n        "paramType": "uri",\n        "operator": "match",\n        "paramValue": "/**"\n    }],\n    "ruleDataList": [{\n        "ruleHandler": "{\\"loadBalance\\":\\"random\\"}",\n        "conditionDataList": [{\n            "paramType": "uri",\n            "operator": "match",\n            "paramValue": "/**"\n        }]\n    }]\n}\n')),(0,a.kt)("h3",{id:"\u4f7f\u7528curl"},"\u4f7f\u7528curl"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'curl --location --request POST \'http://localhost:9195/shenyu/plugin/selectorAndRules\' \\\n--header \'Content-Type: application/json\' \\\n--header \'localKey: 123456\' \\\n--data-raw \'{\n    "pluginName": "divide",\n    "selectorHandler": "[{\\"upstreamUrl\\":\\"127.0.0.1:8080\\"}]",\n    "conditionDataList": [{\n        "paramType": "uri",\n        "operator": "match",\n        "paramValue": "/**"\n    }],\n    "ruleDataList": [{\n        "ruleHandler": "{\\"loadBalance\\":\\"random\\"}",\n        "conditionDataList": [{\n            "paramType": "uri",\n            "operator": "match",\n            "paramValue": "/**"\n        }]\n    }]\n}\'\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u901a\u8fc7",(0,a.kt)("inlineCode",{parentName:"li"},"http://localhost:9195/helloworld"),"\u8bf7\u6c42\u670d\u52a1\uff0c\u8fd4\u56de\u5982\u4e0b\uff1a")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name" : "Shenyu",\n  "data" : "hello world"\n}\n')))}s.isMDXComponent=!0}}]);