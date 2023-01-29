"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[81716],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>y});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(t),m=o,y=u["".concat(l,".").concat(m)]||u[m]||d[m]||a;return t?r.createElement(y,i(i({ref:n},c),{},{components:t})):r.createElement(y,i({ref:n},c))}));function y(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p[u]="string"==typeof e?e:o,i[1]=p;for(var s=2;s<a;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},13277:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>p,toc:()=>l});var r=t(87462),o=(t(67294),t(3905));const a={sidebar_position:3,title:"Docker Deployment",keywords:["docker","Deployment"],description:"Docker Deployment"},i=void 0,p={unversionedId:"deployment/deployment-docker",id:"version-2.5.0/deployment/deployment-docker",isDocsHomePage:!1,title:"Docker Deployment",description:"Docker Deployment",source:"@site/versioned_docs/version-2.5.0/deployment/deployment-docker.md",sourceDirName:"deployment",slug:"/deployment/deployment-docker",permalink:"/docs/deployment/deployment-docker",editUrl:"https://github.com/apache/shenyu-website/edit/main/versioned_docs/version-2.5.0/deployment/deployment-docker.md",version:"2.5.0",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Docker Deployment",keywords:["docker","Deployment"],description:"Docker Deployment"},sidebar:"version-2.5.0/tutorialSidebar",previous:{title:"Docker-compose Deployment",permalink:"/docs/deployment/deployment-docker-compose"},next:{title:"K8s Deployment",permalink:"/docs/deployment/deployment-k8s"}},l=[{value:"Start Apache ShenYu Admin",id:"start-apache-shenyu-admin",children:[]},{value:"Start Apache ShenYu Bootstrap",id:"start-apache-shenyu-bootstrap",children:[]}],s={toc:l};function c(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This article introduces the use of ",(0,o.kt)("inlineCode",{parentName:"p"},"docker")," to deploy the ",(0,o.kt)("inlineCode",{parentName:"p"},"Apache ShenYu")," gateway."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Before you read this document, you need to complete some preparations before deploying Shenyu according to the ",(0,o.kt)("a",{parentName:"p",href:"/docs/deployment/deployment-before"},"Deployment Prerequisites document"),".")),(0,o.kt)("h3",{id:"start-apache-shenyu-admin"},"Start Apache ShenYu Admin"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker pull apache/shenyu-admin:${current.version}\ndocker network create shenyu\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"use ",(0,o.kt)("inlineCode",{parentName:"li"},"h2")," to store data:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker run -d -p 9095:9095 --net shenyu apache/shenyu-admin:${current.version}\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"use ",(0,o.kt)("inlineCode",{parentName:"li"},"MySQL")," to store data, follow the ",(0,o.kt)("a",{parentName:"li",href:"/docs/deployment/deployment-before#mysql"},"guide document")," to initialize the database, copy ",(0,o.kt)("a",{parentName:"li",href:"https://repo1.maven.org/maven2/mysql/mysql-connector-java/8.0.29/mysql-connector-java-8.0.29.jar"},"mysql-connector.jar")," to ",(0,o.kt)("inlineCode",{parentName:"li"},"/$(your_work_dir)/ext-lib"),"\uff1a")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'docker run -v /${your_work_dir}/ext-lib:/opt/shenyu-admin/ext-lib \\\n-e "SPRING_PROFILES_ACTIVE=mysql" \\\n-e "spring.datasource.url=jdbc:mysql://${your_ip_port}/shenyuuseUnicode=true&characterEncoding=utf8 \\\n&useSSL=false&serverTimezone=Asia/Shanghai&zeroDateTimeBehavior=convertToNull" \\\n-e "spring.datasource.username=${your_username}" \\\n-e "spring.datasource.password=${your_password}" \\\n-d -p 9095:9095 --net shenyu apache/shenyu-admin:${current.version}\n')),(0,o.kt)("p",null,"another way is to put the ",(0,o.kt)("inlineCode",{parentName:"p"},"application.yml"),"\u3001",(0,o.kt)("inlineCode",{parentName:"p"},"application-mysql.yml")," configuration in  ${your_work_dir}/conf from ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/shenyu/blob/master/shenyu-admin/src/main/resources/"},"Configure address")," , modify the configuration ",(0,o.kt)("inlineCode",{parentName:"p"},"spring.profiles.active = mysql")," in ",(0,o.kt)("inlineCode",{parentName:"p"},"application.yml"),", and then execute the following statement\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker run -v ${your_work_dir}/conf:/opt/shenyu-admin/conf \\\n-v /${your_work_dir}/ext-lib:/opt/shenyu-admin/ext-lib \\\n-d -p 9095:9095 --net shenyu apache/shenyu-admin:${current.version}\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"use ",(0,o.kt)("inlineCode",{parentName:"li"},"PostgreSql")," to store data, follow the ",(0,o.kt)("a",{parentName:"li",href:"/docs/deployment/deployment-before#postgresql"},"guide document")," to initialize the database, execute the following statement\uff1a")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'docker run -e "SPRING_PROFILES_ACTIVE=pg" \\\n-e "spring.datasource.url=jdbc:postgresql://${your_ip_port}/shenyu?useUnicode=true&characterEncoding=utf-8&useSSL=false" \\\n-e "spring.datasource.username=${your_username}" \\\n-e "spring.datasource.password=${your_password}" \\\n-d -p 9095:9095 --net shenyu apache/shenyu-admin:${current.version}\n')),(0,o.kt)("p",null,"another way is to put the ",(0,o.kt)("inlineCode",{parentName:"p"},"application.yml"),"\u3001",(0,o.kt)("inlineCode",{parentName:"p"},"application-pg.yml")," configuration in ${your_work_dir}/conf, modify the configuration ",(0,o.kt)("inlineCode",{parentName:"p"},"spring.profiles.active = pg")," in ",(0,o.kt)("inlineCode",{parentName:"p"},"application.yml"),",and then execute the following statement\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker run -v ${your_work_dir}/conf:/opt/shenyu-admin/conf \\\n-d -p 9095:9095 --net shenyu apache/shenyu-admin:${current.version}\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"use ",(0,o.kt)("inlineCode",{parentName:"li"},"Oracle")," to store data, follow the ",(0,o.kt)("a",{parentName:"li",href:"/docs/deployment/deployment-before#oracle"},"guide document")," to initialize the database, execute the following statement\uff1a")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'docker run -e "SPRING_PROFILES_ACTIVE=oracle" \n-e "spring.datasource.url=jdbc:oracle:thin:@localhost:1521/shenyu" \\\n-e "spring.datasource.username=${your_username}" \\\n-e "spring.datasource.password=${your_password}" \\\n-d -p 9095:9095 --net shenyu apache/shenyu-admin:${current.version}\n')),(0,o.kt)("p",null,"another way is to put the ",(0,o.kt)("inlineCode",{parentName:"p"},"application.yml"),"\u3001",(0,o.kt)("inlineCode",{parentName:"p"},"application-oracle.yml")," configuration in ${your_work_dir}/conf, modify the configuration ",(0,o.kt)("inlineCode",{parentName:"p"},"spring.profiles.active = oracle")," in ",(0,o.kt)("inlineCode",{parentName:"p"},"application.yml"),", and then execute the following statement\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker run -v ${your_work_dir}/conf:/opt/shenyu-admin/conf \n-d -p 9095:9095 \\\n--net shenyu apache/shenyu-admin:${current.version}\n")),(0,o.kt)("h3",{id:"start-apache-shenyu-bootstrap"},"Start Apache ShenYu Bootstrap"),(0,o.kt)("p",null,"In the host, the directory where the bootstrap ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/shenyu/tree/master/shenyu-bootstrap/src/main/resources"},"configuration file")," is located is recorded as ",(0,o.kt)("inlineCode",{parentName:"p"},"$BOOTSTRAP_CONF"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"docker network create shenyu\ndocker pull apache/shenyu-bootstrap:${current.version}\ndocker run -d \\\n  -p 9195:9195 \\ \n  -v $BOOTSTRAP_CONF:/opt/shenyu-bootstrap/conf \\\n  apache/shenyu-bootstrap:${current.version}\n")))}c.isMDXComponent=!0}}]);