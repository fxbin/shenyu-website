"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[88721],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=r.createContext({}),u=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=u(n),g=i,h=d["".concat(o,".").concat(g)]||d[g]||s[g]||a;return n?r.createElement(h,l(l({ref:t},c),{},{components:n})):r.createElement(h,l({ref:t},c))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=g;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[d]="string"==typeof e?e:i,l[1]=p;for(var u=2;u<a;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},90091:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>p,toc:()=>o});var r=n(87462),i=(n(67294),n(3905));const a={title:"Redirect Plugin",keywords:["redirect"],description:"redirect plugin"},l="1. Overview",p={unversionedId:"plugin-center/http-process/redirect-plugin",id:"plugin-center/http-process/redirect-plugin",isDocsHomePage:!1,title:"Redirect Plugin",description:"redirect plugin",source:"@site/docs/plugin-center/http-process/redirect-plugin.md",sourceDirName:"plugin-center/http-process",slug:"/plugin-center/http-process/redirect-plugin",permalink:"/docs/next/plugin-center/http-process/redirect-plugin",editUrl:"https://github.com/apache/shenyu-website/edit/main/docs/plugin-center/http-process/redirect-plugin.md",version:"current",frontMatter:{title:"Redirect Plugin",keywords:["redirect"],description:"redirect plugin"},sidebar:"tutorialSidebar",previous:{title:"ParamMapping Plugin",permalink:"/docs/next/plugin-center/http-process/parammapping-plugin"},next:{title:"Request Plugin",permalink:"/docs/next/plugin-center/http-process/request-plugin"}},o=[{value:"1.1 Plugin Name",id:"11-plugin-name",children:[]},{value:"1.2 Appropriate Scenario",id:"12-appropriate-scenario",children:[]},{value:"1.3 Plugin functionality",id:"13-plugin-functionality",children:[]},{value:"1.4 Plugin code",id:"14-plugin-code",children:[]},{value:"1.5 Added Since Which shenyu version",id:"15-added-since-which-shenyu-version",children:[]},{value:"2.1 Plugin-use procedure chart",id:"21-plugin-use-procedure-chart",children:[]},{value:"2.2 Import pom",id:"22-import-pom",children:[]},{value:"2.3 Enable plugin",id:"23-enable-plugin",children:[]},{value:"2.4 Config plugin",id:"24-config-plugin",children:[]},{value:"2.5 Examples",id:"25-examples",children:[{value:"2.5.1 Redirect",id:"251-redirect",children:[]},{value:"2.5.2 Gateway&#39;s own interface forwarding",id:"252-gateways-own-interface-forwarding",children:[]}]}],u={toc:o},c="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(c,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"1-overview"},"1. Overview"),(0,i.kt)("h2",{id:"11-plugin-name"},"1.1 Plugin Name"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Redirect Plugin")),(0,i.kt)("h2",{id:"12-appropriate-scenario"},"1.2 Appropriate Scenario"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"As the name suggests, the ",(0,i.kt)("inlineCode",{parentName:"li"},"redirect")," plugin is to re-forward and redirect ",(0,i.kt)("inlineCode",{parentName:"li"},"uri"),".")),(0,i.kt)("h2",{id:"13-plugin-functionality"},"1.3 Plugin functionality"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"When the Apache ShenYu gateway makes proxy calls to the target service, it also allows users to use the ",(0,i.kt)("inlineCode",{parentName:"li"},"redirect")," plugin to redirect requests.")),(0,i.kt)("h2",{id:"14-plugin-code"},"1.4 Plugin code"),(0,i.kt)("p",null,"  Core module ",(0,i.kt)("inlineCode",{parentName:"p"},"shenyu-plugin-context-redirect"),"\nCore class ",(0,i.kt)("inlineCode",{parentName:"p"},"org.apache.shenyu.plugin.redirect.RedirectPlugin")),(0,i.kt)("h2",{id:"15-added-since-which-shenyu-version"},"1.5 Added Since Which shenyu version"),(0,i.kt)("p",null,"  before 2.2.0 ."),(0,i.kt)("h1",{id:"2-how-to-use-plugin"},"2. How to use plugin"),(0,i.kt)("h2",{id:"21-plugin-use-procedure-chart"},"2.1 Plugin-use procedure chart"),(0,i.kt)("img",{src:"/img/shenyu/plugin/redirect/redirect-procedure-en.png",width:"40%",height:"30%"}),(0,i.kt)("h2",{id:"22-import-pom"},"2.2 Import pom"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"import maven config in shenyu-bootstrap project's ",(0,i.kt)("inlineCode",{parentName:"p"},"pom.xml")," file."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"\x3c!-- apache shenyu redirect plugin start--\x3e\n<dependency>\n    <groupId>org.apache.shenyu</groupId>\n    <artifactId>shenyu-spring-boot-starter-plugin-redirect</artifactId>\n   <version>${project.version}</version>\n</dependency>\n\x3c!-- apache shenyu redirect plugin end--\x3e\n")))),(0,i.kt)("h2",{id:"23-enable-plugin"},"2.3 Enable plugin"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"In ",(0,i.kt)("inlineCode",{parentName:"p"},"shenyu-admin")," --\x3e BasicConfig --\x3e Plugin --\x3e ",(0,i.kt)("inlineCode",{parentName:"p"},"Redirect")," set Status enable."),(0,i.kt)("img",{src:"/img/shenyu/plugin/redirect/redirect-plugin-enable-en.png",width:"70%",height:"60%"}))),(0,i.kt)("h2",{id:"24-config-plugin"},"2.4 Config plugin"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Selector and rule config, please refer: ",(0,i.kt)("a",{parentName:"p",href:"../../user-guide/admin-usage/selector-and-rule"},"Selector and rule config"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"In ",(0,i.kt)("inlineCode",{parentName:"p"},"shenyu-admin")," --\x3e ",(0,i.kt)("inlineCode",{parentName:"p"},"PluginList")," --\x3e ",(0,i.kt)("inlineCode",{parentName:"p"},"HttpProcess")," --\x3e ",(0,i.kt)("inlineCode",{parentName:"p"},"Redirect"),", add selector config first\uff0cthen add rule config\uff1a"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Add selector config"),(0,i.kt)("img",{src:"/img/shenyu/plugin/redirect/redirect-plugin-forward-rule-en.png",width:"80%",height:"60%"})),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Add rule config"),(0,i.kt)("img",{src:"/img/shenyu/plugin/redirect/redirect-plugin-rule-en.png",width:"80%",height:"60%"}))))),(0,i.kt)("h2",{id:"25-examples"},"2.5 Examples"),(0,i.kt)("h3",{id:"251-redirect"},"2.5.1 Redirect"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"When we configure a custom path in ",(0,i.kt)("inlineCode",{parentName:"li"},"Rule"),", it should be a reachable service path."),(0,i.kt)("li",{parentName:"ul"},"When the request is matched, the ",(0,i.kt)("inlineCode",{parentName:"li"},"ShenYu Gateway")," will perform the ",(0,i.kt)("inlineCode",{parentName:"li"},"308")," service jump according to the customized path.")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Refer ",(0,i.kt)("a",{parentName:"li",href:"https://shenyu.apache.org/docs/deployment/deployment-local/"},"Local Deployment")," to start admin and bootstrap."),(0,i.kt)("li",{parentName:"ol"},"Refer 2.2 to import pom and restart bootstrap."),(0,i.kt)("li",{parentName:"ol"},"Refer 2.3 to enable plugin."),(0,i.kt)("li",{parentName:"ol"},"Refer 2.4 and ",(0,i.kt)("a",{parentName:"li",href:"../../user-guide/admin-usage/selector-and-rule"},"Selector and rule config"),"."),(0,i.kt)("li",{parentName:"ol"},"Invoke interface: ",(0,i.kt)("a",{parentName:"li",href:"http://localhost:9195/http"},"demo"))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Invoke the interface declared by selectors and rules will redirect to the specified path.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"In this demo, it will jump to ",(0,i.kt)("a",{parentName:"p",href:"https://shenyu.apache.org"},"ShenYu official website")),(0,i.kt)("img",{src:"/img/shenyu/plugin/redirect/redirect.png",width:"70%",height:"60%"}))),(0,i.kt)("h3",{id:"252-gateways-own-interface-forwarding"},"2.5.2 Gateway's own interface forwarding"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"When the matching rules are met, the service will use the ",(0,i.kt)("inlineCode",{parentName:"p"},"DispatcherHandler")," internal interface for forwarding.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"To implement the gateway's own interface forwarding, we need to use ",(0,i.kt)("inlineCode",{parentName:"p"},"/")," as the prefix in the configuration path. The specific configuration is as shown in the figure below."),(0,i.kt)("img",{src:"/img/shenyu/plugin/redirect/demo2-en.png",width:"70%",height:"60%"}))),(0,i.kt)("h1",{id:"3-how-to-disable-plugin"},"3. How to disable plugin"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"In ",(0,i.kt)("inlineCode",{parentName:"p"},"shenyu-admin")," --\x3e BasicConfig --\x3e Plugin --\x3e ",(0,i.kt)("inlineCode",{parentName:"p"},"Redirect")," set Status disable."),(0,i.kt)("img",{src:"/img/shenyu/plugin/redirect/disable-redirect-plugin-zh.png",width:"70%",height:"60%"}))))}d.isMDXComponent=!0}}]);