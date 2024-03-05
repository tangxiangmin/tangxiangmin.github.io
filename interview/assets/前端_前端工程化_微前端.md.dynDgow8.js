import{_ as t,c as e,o as r,a2 as a}from"./chunks/framework.DLPB9-dE.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"前端/前端工程化/微前端.md","filePath":"前端/前端工程化/微前端.md","lastUpdated":1683863238000}'),i={name:"前端/前端工程化/微前端.md"},n=a('<p>参考</p><ul><li><a href="https://tech.meituan.com/2020/02/27/meituan-waimai-micro-frontends-practice.html" target="_blank" rel="noreferrer">https://tech.meituan.com/2020/02/27/meituan-waimai-micro-frontends-practice.html</a> 美团微前端方案</li><li><a href="https://qiankun.umijs.org/zh/guide" target="_blank" rel="noreferrer">https://qiankun.umijs.org/zh/guide</a> qiankun微前端框架</li><li><a href="https://juejin.cn/post/6844903953734336525" target="_blank" rel="noreferrer">https://juejin.cn/post/6844903953734336525</a> 微前端入门</li><li><a href="https://tech.antfin.com/community/articles/536" target="_blank" rel="noreferrer">https://tech.antfin.com/community/articles/536</a></li><li><a href="https://xiaomi-info.github.io/2020/04/14/fe-microfrontends-practice/" target="_blank" rel="noreferrer">https://xiaomi-info.github.io/2020/04/14/fe-microfrontends-practice/</a> 微前端在小米 CRM 系统的实践</li><li>《前端架构从入门到微前端》</li></ul><p>当项目变得逐渐庞大时，就很难再调整方向了，比如升级基础库、换一个框架、换一门语言等，写也不好写，测也不好测，部署也不好部署。</p><p>参考后端的微服务，只要项目足够小，就很容易升级或替换，同理，前端项目也是一样。举个例子，各种各样的促销弹窗，本不应该由业务项目的代码来维护。</p><p>微前端的核心思想是按模块部署项目。如何划分单个服务的职责，又需要参考单一职责原则。微前端主要是为了实现每个模块的代码隔离和团队隔离</p><p>父应用与子应用的关系有点类似于CSS中由父元素控制样式还是子元素控制样式的问题，比如水平的间距，是父元素设置padding，还是子元素设置margin，交给子元素的话，可能导致不够通用（某些地方不需要水平间距）；交给父元素的话，可能会导致一些重复（不同父元素包含相同子元素，水平间距需要重复写）</p>',6),o=[n];function c(s,p,l,_,m,h){return r(),e("div",null,o)}const d=t(i,[["render",c]]);export{u as __pageData,d as default};
