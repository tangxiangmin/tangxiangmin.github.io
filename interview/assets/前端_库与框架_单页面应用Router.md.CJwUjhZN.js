import{_ as e,c as a,o as t,a2 as l}from"./chunks/framework.DLPB9-dE.js";const k=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"前端/库与框架/单页面应用Router.md","filePath":"前端/库与框架/单页面应用Router.md","lastUpdated":1620234346000}'),i={name:"前端/库与框架/单页面应用Router.md"},r=l('<h2 id="基本原理" tabindex="-1">基本原理 <a class="header-anchor" href="#基本原理" aria-label="Permalink to &quot;基本原理&quot;">​</a></h2><p>参考：</p><ul><li><a href="https://blog.csdn.net/qq_34629352/article/details/79837815#123" target="_blank" rel="noreferrer">详解vue 单页应用（spa）前端路由实现原理</a></li></ul><p>hash Router 和 history Router的区别</p><ul><li>hash优点 <ul><li>兼容性比较好，兼容性达到了ie8</li><li>除了会发送ajax和资源加载之外不会发送其他请求</li><li>不需要在服务端进行任何设置和开发</li></ul></li><li>hash缺点 <ul><li>服务端无法准确捕获路由的信息</li><li>对于需要锚点功能的需求会与当前路由机制发生冲突</li><li>对于需要重定向的操作，后段无法获取url全部内容，导致后台无法得到url数据，典型的例子就是微信公众号的oauth验证。</li></ul></li><li>browser优点 <ul><li>当发生路由重定向时不会丢失url数据 ，后端也可以拿到这个数据</li><li>后端可以准确追踪到路由</li><li>可以使用history.state获取路由的信息</li></ul></li><li>browser缺点 <ul><li>兼容性不如hash 。兼容性只到ie10</li><li>需要后端额外配置配置</li></ul></li></ul><h2 id="vue-router" tabindex="-1">Vue-router <a class="header-anchor" href="#vue-router" aria-label="Permalink to &quot;Vue-router&quot;">​</a></h2><p>路由指根据不同的 url 地址展示不同的内容或页面。 在浏览器端可以通过hash或者history API实现</p><ul><li>keep-alive</li><li>滚动位置还原</li></ul><h3 id="路由懒加载" tabindex="-1">路由懒加载 <a class="header-anchor" href="#路由懒加载" aria-label="Permalink to &quot;路由懒加载&quot;">​</a></h3><p>参考</p><ul><li><a href="https://router.vuejs.org/zh-cn/advanced/lazy-loading.html" target="_blank" rel="noreferrer">官方文档</a></li><li><a href="https://segmentfault.com/a/1190000012038580" target="_blank" rel="noreferrer">Vue代码分割懒加载</a></li><li><a href="https://www.cnblogs.com/zhanyishu/p/6587571.html" target="_blank" rel="noreferrer">Vue2组件懒加载浅析</a></li></ul><h2 id="react-router" tabindex="-1">React-Router <a class="header-anchor" href="#react-router" aria-label="Permalink to &quot;React-Router&quot;">​</a></h2><p>根据匹配的url渲染子节点</p><h2 id="单页面应用ssr原理" tabindex="-1">单页面应用SSR原理 <a class="header-anchor" href="#单页面应用ssr原理" aria-label="Permalink to &quot;单页面应用SSR原理&quot;">​</a></h2><p>参考</p><ul><li><a href="https://ssr.vuejs.org/zh/#%E4%BB%80%E4%B9%88%E6%98%AF%E6%9C%8D%E5%8A%A1%E5%99%A8%E7%AB%AF%E6%B8%B2%E6%9F%93-ssr-%EF%BC%9F" target="_blank" rel="noreferrer">Vue SSR指南</a></li></ul><p>以<a href="https://zh.nuxtjs.org/" target="_blank" rel="noreferrer">nuxt.js</a>为例，客户端请求服务器，服务器根据请求地址获得匹配的组件，在调用匹配到的组件返回 Promise (官方是preFetch方法)来将需要的数据拿到。最后再通过</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;window.__initial_state</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">data&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><p>将其写入网页，最后将服务端渲染好的网页返回回去。</p><p>接下来客户端会将vuex将写入的 initial_state 替换为当前的全局状态树，再用这个状态树去检查服务端渲染好的数据有没有问题。遇到没被服务端渲染的组件，再去发异步请求拿数据。</p>',20),s=[r];function h(o,n,u,p,c,d){return t(),a("div",null,s)}const E=e(i,[["render",h]]);export{k as __pageData,E as default};
