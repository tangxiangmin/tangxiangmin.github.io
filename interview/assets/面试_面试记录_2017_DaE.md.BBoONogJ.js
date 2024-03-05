import{_ as s,c as i,o as a,a2 as t}from"./chunks/framework.DLPB9-dE.js";const g=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"面试/面试记录/2017_DaE.md","filePath":"面试/面试记录/2017_DaE.md","lastUpdated":1582719420000}'),e={name:"面试/面试记录/2017_DaE.md"},l=t(`<h2 id="_2017-05-12" tabindex="-1">2017.05.12 <a class="header-anchor" href="#_2017-05-12" aria-label="Permalink to &quot;2017.05.12&quot;">​</a></h2><p>HR直接通知面试，没有电面...</p><h2 id="_2017-05-15" tabindex="-1">2017.05.15 <a class="header-anchor" href="#_2017-05-15" aria-label="Permalink to &quot;2017.05.15&quot;">​</a></h2><h3 id="笔试" tabindex="-1">笔试 <a class="header-anchor" href="#笔试" aria-label="Permalink to &quot;笔试&quot;">​</a></h3><p><strong><code>CSS Modules</code>可以解决前端开发中的哪些问题</strong></p><blockquote><p>CSS Modules：所有的类名和动画名称默认都有各自的作用域的CSS文件。</p></blockquote><p>在使用CSS模块时，类名是动态生成的，唯一的，并准确对应到源文件中的各个类的样式，这样可以保证单个组件的所有样式：</p><ul><li>集中在同一个地方</li><li>只应用于该组件</li></ul><p>PS：我个人不喜欢所有的代码都放在JavaScript中，所以下面这种代码还是不想写了</p><pre><code>&lt;h1 className={style.title}&gt;
  Hello World
&lt;/h1&gt;
</code></pre><p><strong>谈谈对于闭包的理解</strong></p><ul><li>在函数内部定义的变量，在函数的外部无法访问到，因此就说函数构成了一个闭包</li><li>函数内部的自由变量，在其定义的时候（而不是调用的时候）就已经决定了</li></ul><p>综合上面两点，将函数通过传参或者返回值的形式在另外某个地方调用时，也可以访问其父函数作用域内的变量。可以通过闭包防止变量污染，以及封装模块。</p><p><strong>解释同源策略和跨站请求方案</strong></p><p>这个就略了~~注意预防面试官扩展到<code>CORS</code>的服务器配置</p><p><strong>前端性能优化</strong></p><p>这个也略了~~</p><p><strong>React中的Virtual DOM的优点</strong></p><p>响应式数据就是数据发生变化之后，不再需要刷新页面就能看到页面上的内容随之更新了，随着而来的一个问题是：如果只是部分数据发生了变化，就要把页面整体或一大块区域重新渲染就有点浪费了，因此出现了<code>Virtual Dom</code>技术。</p><p><code>Virtual DOM </code>概况来讲，就是在数据和真实 DOM 之间建立了一层缓冲。对于开发者而言，数据变化了就调用 React 的渲染方法，而 React 并不是直接得到新的 DOM 进行替换，而是先生成 Virtual DOM，与上一次渲染得到的 Virtual DOM 进行比对，在渲染得到的 Virtual DOM 上发现变化，然后将变化的地方更新到真实 DOM 上。</p><p><strong>ES6中的模块和CommonJs中的模块有什么区别</strong> 这个单独整理了一篇博文，并增加了<code>AMD</code>。</p><p><strong>SPA应用是如何管理数据状态的</strong></p><ul><li><code>Redux</code>：View调用store.dispatch发起Action-&gt;store接受Action(action传入reducer函数,reducer函数返回一个新的state)-&gt;通知store.subscribe订阅的重新渲染函数</li><li><code>Vuex</code>：View调用store.commit提交对应的请求到Store中对应的mutation函数-&gt;store改变(vue检测到数据变化自动渲染)</li></ul><p><strong>封装一个类似于<code>$.ajax()</code>的方法</strong> 手写代码真是蛋疼啊，最后写了200多行，没法调试，总体来说：<strong>手写代码就是有病</strong>。</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> xhr </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> XMLHTTPRequest</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// get和post的参数处理单独处理吧...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">xhr.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">open</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;GET&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;1.php&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">xhr.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">setRequestHeader</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Content-type&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;application/x-www-formurlencoded&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">xhr.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">send</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">null</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">xhr.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">onreadystatechange</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(){</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  	if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (xhr.readySate </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">===</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 4</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">){</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">      	if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(xhr.status </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">===</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 200</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">){</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">          	success</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(xhr.responseText);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      	}</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">else</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">          	error</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">().</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      	}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  	}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h3 id="面试" tabindex="-1">面试 <a class="header-anchor" href="#面试" aria-label="Permalink to &quot;面试&quot;">​</a></h3><h4 id="第一轮" tabindex="-1">第一轮 <a class="header-anchor" href="#第一轮" aria-label="Permalink to &quot;第一轮&quot;">​</a></h4><p>主要根据面试题来进行提问</p><ul><li><code>CORS</code>中服务器需要配置什么，然后根据首部行进行拓展，这里没答好</li><li><code>CSS Modules</code>是如何解决上面的问题的，这里感觉也没有答好</li><li><code>PostCSS</code>你是怎么使用的，样式重用的问题，怎么处理</li><li><code>angularJs</code>和<code>Vue</code>数据的双向绑定，各自的优缺点</li><li><code>HTTP</code>报文缓存中<code>Expries</code>和<code>CaChe-Control</code>的区别</li></ul><h4 id="第二轮" tabindex="-1">第二轮 <a class="header-anchor" href="#第二轮" aria-label="Permalink to &quot;第二轮&quot;">​</a></h4><p>另外一个面试官根据简历提问</p><ul><li>接触过图表类的插件</li><li>有没有做过Chrome扩展程序</li><li>HTTP报文中常见的首部行，<code>Etag</code>的作用</li><li>跨域的方案及JSONP的原理</li><li>网站项目中有很多表单验证和提交，怎么处理</li><li>前端上传一个很大的文件（几百M），怎么处理</li><li><code>React</code>使用情况</li><li>之前项目的内容和主要职责，以及离职原理，说说上一个公司的缺点</li></ul><h2 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to &quot;总结&quot;">​</a></h2><p>感觉这次面试揭露了自己很多地方的不足，回答的不好，加之公司的技术栈跟自己的不是很相符，因此估计是没戏了，还得好好准备啊</p>`,34),n=[l];function h(p,r,k,o,d,E){return a(),i("div",null,n)}const u=s(e,[["render",h]]);export{g as __pageData,u as default};
