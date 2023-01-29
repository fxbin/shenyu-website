"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[5636],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>k});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,k=d["".concat(p,".").concat(m)]||d[m]||c[m]||l;return n?r.createElement(k,o(o({ref:t},s),{},{components:n})):r.createElement(k,o({ref:t},s))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[d]="string"==typeof e?e:a,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},83084:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>o,default:()=>s,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const l={sidebar_position:1,title:"\u73af\u5883\u642d\u5efa",keywords:["soul"],description:"\u73af\u5883\u642d\u5efa"},o=void 0,i={unversionedId:"users-guide/soul-set-up",id:"version-2.3.0-Legacy/users-guide/soul-set-up",isDocsHomePage:!1,title:"\u73af\u5883\u642d\u5efa",description:"\u73af\u5883\u642d\u5efa",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.3.0-Legacy/users-guide/soul-set-up.md",sourceDirName:"users-guide",slug:"/users-guide/soul-set-up",permalink:"/zh/docs/2.3.0-Legacy/users-guide/soul-set-up",editUrl:"https://github.com/apache/shenyu-website/edit/main/i18n/zh/docusaurus-plugin-content-docs/version-2.3.0-Legacy/users-guide/soul-set-up.md",version:"2.3.0-Legacy",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"\u73af\u5883\u642d\u5efa",keywords:["soul"],description:"\u73af\u5883\u642d\u5efa"},sidebar:"version-2.3.0-Legacy/tutorialSidebar",previous:{title:"\u9009\u62e9\u5668\u89c4\u5219\u8be6\u89e3",permalink:"/zh/docs/2.3.0-Legacy/admin/selector-and-rule"},next:{title:"Http\u7528\u6237",permalink:"/zh/docs/2.3.0-Legacy/users-guide/http-proxy"}},p=[{value:"\u8bf4\u660e",id:"\u8bf4\u660e",children:[]},{value:"\u542f\u52a8 Soul-Admin",id:"\u542f\u52a8-soul-admin",children:[{value:"\u8fdc\u7a0b\u4e0b\u8f7d",id:"\u8fdc\u7a0b\u4e0b\u8f7d",children:[]},{value:"docker\u6784\u5efa",id:"docker\u6784\u5efa",children:[]},{value:"\u672c\u5730\u6784\u5efa",id:"\u672c\u5730\u6784\u5efa",children:[]}]},{value:"\u542f\u52a8 Soul-Bootstrap",id:"\u542f\u52a8-soul-bootstrap",children:[{value:"\u8fdc\u7a0b\u4e0b\u8f7d",id:"\u8fdc\u7a0b\u4e0b\u8f7d-1",children:[]},{value:"docker\u6784\u5efa",id:"docker\u6784\u5efa-1",children:[]},{value:"\u672c\u5730\u6784\u5efa",id:"\u672c\u5730\u6784\u5efa-1",children:[]}]},{value:"\u642d\u5efa\u81ea\u5df1\u7684\u7f51\u5173\uff08\u63a8\u8350\uff09",id:"\u642d\u5efa\u81ea\u5df1\u7684\u7f51\u5173\u63a8\u8350",children:[]}],u={toc:p};function s(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u8bf4\u660e"},"\u8bf4\u660e"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"soul 2.2.0"),"\u4ee5\u540e\u90fd\u662f\u57fa\u4e8e\u63d2\u4ef6\u5316\u53ef\u63d2\u62d4\u7684\u601d\u60f3\uff0c\u672c\u6587\u662f\u8bf4\u660e\u5982\u4f55\u57fa\u4e8esoul\u642d\u5efa\u5c5e\u4e8e\u4f60\u81ea\u5df1\u7f51\u5173\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u8bf7\u786e\u4fdd\u4f60\u7684\u673a\u5668\u5b89\u88c5\u4e86",(0,a.kt)("inlineCode",{parentName:"li"},"JDK 1.8+"),"\uff0c",(0,a.kt)("inlineCode",{parentName:"li"},"Mysql 5.5.20 +"),"\u3002")),(0,a.kt)("h2",{id:"\u542f\u52a8-soul-admin"},"\u542f\u52a8 Soul-Admin"),(0,a.kt)("h3",{id:"\u8fdc\u7a0b\u4e0b\u8f7d"},"\u8fdc\u7a0b\u4e0b\u8f7d"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://github.com/dromara/soul/releases/tag/2.3.0"},"2.3.0")," \u4e0b\u8f7d ",(0,a.kt)("inlineCode",{parentName:"p"},"soul-admin-bin-2.3.0-RELEASE.tar.gz"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u89e3\u538b\u7f29 ",(0,a.kt)("inlineCode",{parentName:"p"},"soul-admin-bin-2.3.0-RELEASE.tar.gz"),"\u3002 \u8fdb\u5165 bin \u76ee\u5f55\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"h2")," \u6765\u5b58\u50a8\u540e\u53f0\u6570\u636e"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"> windows : start.bat --spring.profiles.active = h2\n\n> linux : ./start.sh --spring.profiles.active = h2\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"li"},"mysql")," \u6765\u5b58\u50a8\u540e\u53f0\u6570\u636e\u3002 \u8fdb\u5165 ",(0,a.kt)("inlineCode",{parentName:"li"},"/conf")," \u76ee\u5f55\uff0c\u4fee\u6539 ",(0,a.kt)("inlineCode",{parentName:"li"},"application.yaml")," \u4e2d",(0,a.kt)("inlineCode",{parentName:"li"},"mysql")," \u7684\u914d\u7f6e\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"> windows : start.bat \n\n> linux : ./start.sh \n")),(0,a.kt)("h3",{id:"docker\u6784\u5efa"},"docker\u6784\u5efa"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"docker pull dromara/soul-admin\ndocker network create soul\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"li"},"h2")," \u6765\u5b58\u50a8\u540e\u53f0\u6570\u636e")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"docker run -d -p 9095:9095 --net soul dromara/soul-admin\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"li"},"mysql")," \u6765\u5b58\u50a8\u540e\u53f0\u6570\u636e\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'docker run -e "SPRING_PROFILES_ACTIVE=mysql" -d -p 9095:9095 --net soul dromara/soul-admin\n')),(0,a.kt)("p",null,"\u5982\u679c\u4f60\u60f3\u8986\u76d6\u73af\u5883\u53d8\u91cf\uff0c\u4f60\u53ef\u4ee5\u8fd9\u6837\u64cd\u4f5c\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'docker run -e "SPRING_PROFILES_ACTIVE=mysql" -e "spring.datasource.url=jdbc:mysql://192.168.1.9:3306/soul?useUnicode=true&characterEncoding=utf-8&useSSL=false" -e "spring.datasource.password=123456" -d -p 9095:9095 --net soul dromara/soul-admin\n')),(0,a.kt)("p",null,"\u53e6\u5916\u4e00\u79cd\u65b9\u5f0f\uff0c\u53ef\u4ee5\u6302\u8f7d\u4f60\u672c\u5730\u78c1\u76d8\u5176\u4ed6\u76ee\u5f55"),(0,a.kt)("p",null,"\u628a\u4f60\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"application.yml"),"\u914d\u7f6e\u653e\u5230xxx\u76ee\u5f55\uff0c \u7136\u540e\u6267\u884c\u4ee5\u4e0b\u8bed\u53e5\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"docker run -v D:\\tmp\\conf:/opt/soul-admin/conf/ -d -p 9095:9095 --net soul dromara/soul-admin\n")),(0,a.kt)("h3",{id:"\u672c\u5730\u6784\u5efa"},"\u672c\u5730\u6784\u5efa"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4e0b\u8f7d\u4ee3\u7801")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"git clone https://github.com/dromara/soul.git\ncd soul\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u7f16\u8bd1\u4ee3\u7801")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"mvn clean install -Dmaven.javadoc.skip=true -B -Drat.skip=true -Djacoco.skip=true -DskipITs -DskipTests\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u542f\u52a8 ",(0,a.kt)("inlineCode",{parentName:"p"},"SoulAdminBootstrap"),"\u3002 "),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u5982\u679c\u4f7f\u7528h2\u6765\u5b58\u50a8\uff0c\u8bbe\u7f6e\u53d8\u91cf ",(0,a.kt)("inlineCode",{parentName:"li"},"--spring.profiles.active = h2")),(0,a.kt)("li",{parentName:"ul"},"\u5982\u679c\u4f7f\u7528mysql\u6765\u5b58\u50a8\uff0c\u4fee\u6539 ",(0,a.kt)("inlineCode",{parentName:"li"},"application.yaml")," \u4e2d\u7684 ",(0,a.kt)("inlineCode",{parentName:"li"},"mysql")," \u914d\u7f6e\u3002")))),(0,a.kt)("p",null,"\u8bbf\u95ee http://localhost:9095   \u7528\u6237\u540d\u5bc6\u7801\u4e3a: ",(0,a.kt)("inlineCode",{parentName:"p"},"admin/123456")),(0,a.kt)("h2",{id:"\u542f\u52a8-soul-bootstrap"},"\u542f\u52a8 Soul-Bootstrap"),(0,a.kt)("h3",{id:"\u8fdc\u7a0b\u4e0b\u8f7d-1"},"\u8fdc\u7a0b\u4e0b\u8f7d"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://github.com/dromara/soul/releases/tag/2.3.0"},"2.3.0")," \u4e0b\u8f7d ",(0,a.kt)("inlineCode",{parentName:"p"},"soul-bootstrap-bin-2.3.0-RELEASE.tar.gz"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u89e3\u538b\u7f29 ",(0,a.kt)("inlineCode",{parentName:"p"},"soul-bootstrap-bin-2.3.0-RELEASE.tar.gz"),"\u3002 \u8fdb\u5165 bin \u76ee\u5f55\u3002"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"> windows : start.bat \n\n> linux : ./start.sh \n")),(0,a.kt)("h3",{id:"docker\u6784\u5efa-1"},"docker\u6784\u5efa"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"docker network create soul\ndocker pull dromara/soul-bootstrap\ndocker run -d -p 9195:9195 --net soul dromara/soul-bootstrap\n")),(0,a.kt)("h3",{id:"\u672c\u5730\u6784\u5efa-1"},"\u672c\u5730\u6784\u5efa"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4e0b\u8f7d\u4ee3\u7801")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"git clone https://github.com/dromara/soul.git\ncd soul\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u7f16\u8bd1\u4ee3\u7801")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"mvn clean install -Dmaven.javadoc.skip=true -B -Drat.skip=true -Djacoco.skip=true -DskipITs -DskipTests\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u542f\u52a8 ",(0,a.kt)("inlineCode",{parentName:"li"},"SoulBootstrap"),"\u3002 ")),(0,a.kt)("h2",{id:"\u642d\u5efa\u81ea\u5df1\u7684\u7f51\u5173\u63a8\u8350"},"\u642d\u5efa\u81ea\u5df1\u7684\u7f51\u5173\uff08\u63a8\u8350\uff09"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u9996\u5148\u4f60\u65b0\u5efa\u4e00\u4e2a\u7a7a\u7684springboot\u9879\u76ee\uff0c\u53ef\u4ee5\u53c2\u8003",(0,a.kt)("inlineCode",{parentName:"p"},"soul-bootstrap"),". \u4e5f\u53ef\u4ee5\u5728spring\u5b98\u7f51:",(0,a.kt)("a",{parentName:"p",href:"https://spring.io/quickstart"},"https://spring.io/quickstart"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u5f15\u5165\u5982\u4e0bjar\u5305\uff1a"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"  <dependency>\n        <groupId>org.springframework.boot</groupId>\n        <artifactId>spring-boot-starter-webflux</artifactId>\n        <version>2.2.2.RELEASE</version>\n  </dependency>\n\n  <dependency>\n        <groupId>org.springframework.boot</groupId>\n        <artifactId>spring-boot-starter-actuator</artifactId>\n        <version>2.2.2.RELEASE</version>\n  </dependency>\n\n  \x3c!--soul gateway start--\x3e\n  <dependency>\n        <groupId>org.dromara</groupId>\n        <artifactId>soul-spring-boot-starter-gateway</artifactId>\n        <version>${last.version}</version>\n  </dependency>\n  \n   \x3c!--soul data sync start use websocket--\x3e\n   <dependency>\n        <groupId>org.dromara</groupId>\n        <artifactId>soul-spring-boot-starter-sync-data-websocket</artifactId>\n        <version>${last.version}</version>\n   </dependency>\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5728\u4f60\u7684 ",(0,a.kt)("inlineCode",{parentName:"li"},"application.yaml")," \u6587\u4ef6\u4e2d\u52a0\u4e0a\u5982\u4e0b\u914d\u7f6e\uff1a")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"spring:\n  main:\n    allow-bean-definition-overriding: true\n\nmanagement:\n  health:\n    defaults:\n      enabled: false\nsoul :\n  sync:\n    websocket :\n      urls: ws://localhost:9095/websocket  //\u8bbe\u7f6e\u6210\u4f60\u7684soul-admin\u5730\u5740\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4f60\u7684\u9879\u76ee\u73af\u5883\u642d\u5efa\u5b8c\u6210\uff0c\u542f\u52a8\u4f60\u7684\u9879\u76ee\u3002")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f\uff0c\u8fd9\u91cc\u53ea\u662f\u5b8c\u6210\u4e86\u7f51\u5173\u7684\u642d\u5efa\uff0c\u4f46\u662f\u6ca1\u6709\u5f15\u5165\u529f\u80fd\u63d2\u4ef6\u3002\u6bd4\u5982\uff0c\u63a5\u5165http\u8bf7\u6c42\uff0c\u9700\u8981\u5f15\u5165divide\u63d2\u4ef6\uff0c\u8bf7\u53c2\u8003 ",(0,a.kt)("a",{parentName:"p",href:"./http-proxy/"},"Http \u4ee3\u7406")," \u3002\u63a5\u5165dubbo\u670d\u52a1\uff0c\u9700\u8981\u5f15\u5165dubbo\u63d2\u4ef6\uff0c\u8bf7\u53c2\u8003 ",(0,a.kt)("a",{parentName:"p",href:"./dubbo-proxy/"},"Dubbo \u4ee3\u7406")," \u3002")))}s.isMDXComponent=!0}}]);