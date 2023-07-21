"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[45479],{3905:(e,t,n)=>{n.d(t,{Zo:()=>o,kt:()=>d});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},o=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,u=e.parentName,o=p(e,["components","mdxType","originalType","parentName"]),c=s(n),m=i,d=c["".concat(u,".").concat(m)]||c[m]||h[m]||l;return n?r.createElement(d,a(a({ref:t},o),{},{components:n})):r.createElement(d,a({ref:t},o))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,a=new Array(l);a[0]=m;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p[c]="string"==typeof e?e:i,a[1]=p;for(var s=2;s<l;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},77385:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>a,default:()=>c,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var r=n(87462),i=(n(67294),n(3905));const l={title:"Request\u63d2\u4ef6",keywords:["RequestPlugin"],description:"RequestPlugin"},a="1. \u6982\u8ff0",p={unversionedId:"plugin-center/http-process/request-plugin",id:"version-2.5.1/plugin-center/http-process/request-plugin",isDocsHomePage:!1,title:"Request\u63d2\u4ef6",description:"RequestPlugin",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.5.1/plugin-center/http-process/request-plugin.md",sourceDirName:"plugin-center/http-process",slug:"/plugin-center/http-process/request-plugin",permalink:"/zh/docs/plugin-center/http-process/request-plugin",editUrl:"https://github.com/apache/shenyu-website/edit/main/i18n/zh/docusaurus-plugin-content-docs/version-2.5.1/plugin-center/http-process/request-plugin.md",version:"2.5.1",frontMatter:{title:"Request\u63d2\u4ef6",keywords:["RequestPlugin"],description:"RequestPlugin"},sidebar:"version-2.5.1/tutorialSidebar",previous:{title:"Redirect\u63d2\u4ef6",permalink:"/zh/docs/plugin-center/http-process/redirect-plugin"},next:{title:"Rewrite\u63d2\u4ef6",permalink:"/zh/docs/plugin-center/http-process/rewrite-plugin"}},u=[{value:"1.1 \u63d2\u4ef6\u540d\u79f0",id:"11-\u63d2\u4ef6\u540d\u79f0",children:[]},{value:"1.2 \u9002\u7528\u573a\u666f",id:"12-\u9002\u7528\u573a\u666f",children:[]},{value:"1.3 \u63d2\u4ef6\u529f\u80fd",id:"13-\u63d2\u4ef6\u529f\u80fd",children:[]},{value:"1.4 \u63d2\u4ef6\u4ee3\u7801",id:"14-\u63d2\u4ef6\u4ee3\u7801",children:[]},{value:"1.5 \u6dfb\u52a0\u81ea\u54ea\u4e2a shenyu \u7248\u672c",id:"15-\u6dfb\u52a0\u81ea\u54ea\u4e2a-shenyu-\u7248\u672c",children:[]},{value:"2.1 \u63d2\u4ef6\u4f7f\u7528\u6d41\u7a0b\u56fe",id:"21-\u63d2\u4ef6\u4f7f\u7528\u6d41\u7a0b\u56fe",children:[]},{value:"2.2 \u5bfc\u5165 pom",id:"22-\u5bfc\u5165-pom",children:[]},{value:"2.3 \u542f\u7528\u63d2\u4ef6",id:"23-\u542f\u7528\u63d2\u4ef6",children:[]},{value:"2.4 \u914d\u7f6e\u63d2\u4ef6",id:"24-\u914d\u7f6e\u63d2\u4ef6",children:[]},{value:"2.5 \u793a\u4f8b",id:"25-\u793a\u4f8b",children:[{value:"2.5.1 \u6dfb\u52a0\u8bf7\u6c42\u53c2\u6570",id:"251-\u6dfb\u52a0\u8bf7\u6c42\u53c2\u6570",children:[]}]}],s={toc:u},o="wrapper";function c(e){let{components:t,...n}=e;return(0,i.kt)(o,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"1-\u6982\u8ff0"},"1. \u6982\u8ff0"),(0,i.kt)("h2",{id:"11-\u63d2\u4ef6\u540d\u79f0"},"1.1 \u63d2\u4ef6\u540d\u79f0"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Request(\u8bf7\u6c42)\u63d2\u4ef6")),(0,i.kt)("h2",{id:"12-\u9002\u7528\u573a\u666f"},"1.2 \u9002\u7528\u573a\u666f"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u8bf7\u6c42\u63d2\u4ef6\u80fd\u591f\u5bf9 ",(0,i.kt)("inlineCode",{parentName:"li"},"uri")," \u7684\u8bf7\u6c42\u53c2\u6570\u8fdb\u884c\u81ea\u5b9a\u4e49\u4fee\u6539\u3002")),(0,i.kt)("h2",{id:"13-\u63d2\u4ef6\u529f\u80fd"},"1.3 \u63d2\u4ef6\u529f\u80fd"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Apache ShenYu")," \u7f51\u5173\u5728\u5bf9\u76ee\u6807\u670d\u52a1\u8fdb\u884c\u4ee3\u7406\u8c03\u7528\u7684\u65f6\u5019\uff0c\u5141\u8bb8\u7528\u6237\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"li"},"request")," \u63d2\u4ef6\u5bf9\u8bf7\u6c42\u53c2\u6570\u3001\u8bf7\u6c42\u5934\u4ee5\u53ca ",(0,i.kt)("inlineCode",{parentName:"li"},"Cookie")," \u6765\u6dfb\u52a0\u3001\u4fee\u6539\u3001\u79fb\u9664\u8bf7\u6c42\u5934\u3002")),(0,i.kt)("h2",{id:"14-\u63d2\u4ef6\u4ee3\u7801"},"1.4 \u63d2\u4ef6\u4ee3\u7801"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u6838\u5fc3\u6a21\u5757 ",(0,i.kt)("inlineCode",{parentName:"li"},"shenyu-plugin-redirect")),(0,i.kt)("li",{parentName:"ul"},"\u6838\u5fc3\u7c7b ",(0,i.kt)("inlineCode",{parentName:"li"},"org.apache.shenyu.plugin.request.RequestPlugin"))),(0,i.kt)("h2",{id:"15-\u6dfb\u52a0\u81ea\u54ea\u4e2a-shenyu-\u7248\u672c"},"1.5 \u6dfb\u52a0\u81ea\u54ea\u4e2a shenyu \u7248\u672c"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"2.4.0")),(0,i.kt)("h1",{id:"2-\u5982\u4f55\u4f7f\u7528\u63d2\u4ef6"},"2. \u5982\u4f55\u4f7f\u7528\u63d2\u4ef6"),(0,i.kt)("h2",{id:"21-\u63d2\u4ef6\u4f7f\u7528\u6d41\u7a0b\u56fe"},"2.1 \u63d2\u4ef6\u4f7f\u7528\u6d41\u7a0b\u56fe"),(0,i.kt)("img",{src:"/img/shenyu/plugin/request/request-plugin-procedure-zh.png",width:"40%",height:"30%"}),(0,i.kt)("h2",{id:"22-\u5bfc\u5165-pom"},"2.2 \u5bfc\u5165 pom"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5728\u7f51\u5173\u7684 ",(0,i.kt)("inlineCode",{parentName:"li"},"pom.xml")," \u6587\u4ef6\u4e2d\u6dfb\u52a0\u63d2\u4ef6 maven \u914d\u7f6e\uff0c\u9ed8\u8ba4\u5df2\u7ecf\u6dfb\u52a0\u3002")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"  \x3c!-- apache shenyu request plugin start--\x3e\n  <dependency>\n      <groupId>org.apache.shenyu</groupId>\n      <artifactId>shenyu-spring-boot-starter-plugin-request</artifactId>\n     <version>${project.version}</version>\n  </dependency>\n  \x3c!-- apache shenyu request plugin end--\x3e\n")),(0,i.kt)("h2",{id:"23-\u542f\u7528\u63d2\u4ef6"},"2.3 \u542f\u7528\u63d2\u4ef6"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"shenyu-admin")," --\x3e \u57fa\u7840\u914d\u7f6e --\x3e \u63d2\u4ef6\u7ba1\u7406 --\x3e ",(0,i.kt)("inlineCode",{parentName:"p"},"request")," \u8bbe\u7f6e\u4e3a\u5f00\u542f\u3002"),(0,i.kt)("blockquote",{parentName:"li"},(0,i.kt)("p",{parentName:"blockquote"},"\u5982\u679c\u6b64\u5904\u9875\u9762\u4e0a\u5b58\u5728\u9700\u8981\u914d\u7f6e ",(0,i.kt)("inlineCode",{parentName:"p"},"ruleHandlePageType")," \u7684\u9009\u9879\uff0c\u53ef\u4ee5\u914d\u7f6e\u4efb\u4e00\u5b57\u7b26\u4e32\uff0c\u5982\uff1a",(0,i.kt)("inlineCode",{parentName:"p"},"custom"),"\uff0c\u5bf9\u8bf7\u6c42\u6ca1\u6709\u5f71\u54cd\uff0c\u540e\u9762\u7248\u672c\u4f1a\u79fb\u9664\u6389\u8be5\u9009\u9879\u3002")),(0,i.kt)("img",{src:"/img/shenyu/plugin/request/request-plugin-enable-zh.png",width:"70%",height:"60%"}))),(0,i.kt)("h2",{id:"24-\u914d\u7f6e\u63d2\u4ef6"},"2.4 \u914d\u7f6e\u63d2\u4ef6"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u9009\u62e9\u5668\u548c\u89c4\u5219\uff0c\u53ea\u6709\u5339\u914d\u7684\u8bf7\u6c42\uff0c\u624d\u4f1a\u8fdb\u884c\u8f6c\u53d1\u548c\u91cd\u5b9a\u5411\uff0c\u8bf7\u53c2\u8003\uff1a",(0,i.kt)("a",{parentName:"p",href:"../../user-guide/admin-usage/selector-and-rule"},"\u9009\u62e9\u5668\u89c4\u5219\u7ba1\u7406"),"\u3002")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"shenyu-admin"),"\u63d2\u4ef6\u5217\u8868 --\x3e ",(0,i.kt)("inlineCode",{parentName:"p"},"HttpProcess")," --\x3e ",(0,i.kt)("inlineCode",{parentName:"p"},"Request"),"\uff0c\u5148\u6dfb\u52a0\u9009\u62e9\u5668\uff0c\u7136\u540e\u6dfb\u52a0\u89c4\u5219\uff1a")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u6dfb\u52a0\u9009\u62e9\u5668\uff1a"),(0,i.kt)("img",{src:"/img/shenyu/plugin/request/request-plugin-selector-zh.png",width:"70%",height:"60%"})),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u6dfb\u52a0\u89c4\u5219\uff1a"),(0,i.kt)("img",{src:"/img/shenyu/plugin/request/request-plugin-rule-zh.png",width:"70%",height:"60%"}))),(0,i.kt)("h2",{id:"25-\u793a\u4f8b"},"2.5 \u793a\u4f8b"),(0,i.kt)("h3",{id:"251-\u6dfb\u52a0\u8bf7\u6c42\u53c2\u6570"},"2.5.1 \u6dfb\u52a0\u8bf7\u6c42\u53c2\u6570"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u6211\u4eec\u5728 ",(0,i.kt)("inlineCode",{parentName:"li"},"\u89c4\u5219")," \u914d\u7f6e\u81ea\u5b9a\u4e49\u8def\u5f84\u65f6\uff0c\u5e94\u8be5\u4e3a\u4e00\u4e2a\u53ef\u8fbe\u7684\u670d\u52a1\u8def\u5f84\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u5f53\u5339\u914d\u5230\u8bf7\u6c42\u540e\uff0c\u6839\u636e\u81ea\u5b9a\u4e49\u7684\u8def\u5f84\uff0c",(0,i.kt)("inlineCode",{parentName:"li"},"Apache ShenYu"),"\u7f51\u5173\u4f1a\u8fdb\u884c\u670d\u52a1\u8df3\u8f6c\u3002")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u53c2\u8003",(0,i.kt)("a",{parentName:"li",href:"https://shenyu.apache.org/zh/docs/deployment/deployment-local"},"\u672c\u5730\u90e8\u7f72"),"\u542f\u52a8 admin \u548c\u7f51\u5173"),(0,i.kt)("li",{parentName:"ol"},"\u53c2\u80032.2\u5bfc\u5165 pom \u5e76\u91cd\u542f\u7f51\u5173"),(0,i.kt)("li",{parentName:"ol"},"\u53c2\u80032.3\u542f\u7528\u63d2\u4ef6"),(0,i.kt)("li",{parentName:"ol"},"\u542f\u52a8 ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/shenyu/tree/master/shenyu-examples/shenyu-examples-http"},"shenyu-examples-http")," \u9879\u76ee"),(0,i.kt)("li",{parentName:"ol"},"\u53c2\u80032.4\u53ca",(0,i.kt)("a",{parentName:"li",href:"../../user-guide/admin-usage/selector-and-rule"},"\u9009\u62e9\u5668\u89c4\u5219\u7ba1\u7406"),"\u914d\u7f6e\u63d2\u4ef6\u89c4\u5219"),(0,i.kt)("li",{parentName:"ol"},"\u63a5\u53e3\u8c03\u7528\uff1a",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/shenyu/blob/master/shenyu-examples/shenyu-examples-http/src/main/http/http-test-api.http"},"http-test-api.http"))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u8c03\u7528\u9009\u62e9\u5668\u548c\u89c4\u5219\u58f0\u660e\u7684\u63a5\u53e3\uff0c\u5c06\u4f1a\u770b\u5230request\u63d2\u4ef6\u4e2d\u914d\u7f6e\u7684\u8bf7\u6c42\u53c2\u6570\u3002"),(0,i.kt)("img",{src:"/img/shenyu/plugin/request/request-plugin-example-zh.png",width:"70%",height:"60%"}))),(0,i.kt)("h1",{id:"3-\u5982\u4f55\u7981\u7528\u63d2\u4ef6"},"3. \u5982\u4f55\u7981\u7528\u63d2\u4ef6"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"shenyu-admin")," --\x3e \u57fa\u7840\u914d\u7f6e --\x3e \u63d2\u4ef6\u7ba1\u7406 --\x3e ",(0,i.kt)("inlineCode",{parentName:"p"},"Request")," \u8bbe\u7f6e\u4e3a\u7981\u7528\u3002"),(0,i.kt)("img",{src:"/img/shenyu/plugin/request/request-plugin-disable-zh.png",width:"70%",height:"60%"}))))}c.isMDXComponent=!0}}]);