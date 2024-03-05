import{_ as s,c as i,o as a,a2 as n}from"./chunks/framework.DLPB9-dE.js";const c=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"前端/前端工程化/其他DevServer.md","filePath":"前端/前端工程化/其他DevServer.md","lastUpdated":1709648798000}'),l={name:"前端/前端工程化/其他DevServer.md"},t=n(`<h2 id="gulp" tabindex="-1">gulp <a class="header-anchor" href="#gulp" aria-label="Permalink to &quot;gulp&quot;">​</a></h2><p>gulp的基本使用流程为：引入插件——定义任务——执行任务</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>gulp.task(taskname, function(){</span></span>
<span class="line"><span>  	return gulp.src(filename)</span></span>
<span class="line"><span>  			   .pipe(plugin.methods)</span></span>
<span class="line"><span>  			   .pipe(gulp.dest(dest));</span></span>
<span class="line"><span>})</span></span></code></pre></div><p>一些常见的开发环境需求都可以找到相关插件，如<code>gulp-sass</code>、<code>gulp-autoprefixer</code>、<code>gulp-babel</code>等</p><p>一个gulp插件实际就是一个函数，可以通过<code>through-gulp</code>，处理上一个插件导出的文件流，然后返回处理后的文件流，下面是一个编写gulp插件的例子</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> through2 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> require</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;through2&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">module</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">exports</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> modify;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> modify</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(){</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> through2.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">obj</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">file</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">encoding</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">cb</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">){</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // 内容转换，处理好后，再转成Buffer形式</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> content </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> versionFun</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(file.contents.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">toString</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">());</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        file.contents </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Buffer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(content);</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // 下面这两句基本是标配，可参考through2的API</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">push</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(file);</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        cb</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    });</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> versionFun</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">data</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">){</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> data.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">replace</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;">{{something}}</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;xxxxx&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>gulp、grunt等工具，如今貌似已经完成了他们的历史使命，逐渐成为过往了</p><h2 id="fis3" tabindex="-1">Fis3 <a class="header-anchor" href="#fis3" aria-label="Permalink to &quot;Fis3&quot;">​</a></h2><p>参考</p><ul><li><a href="http://fis.baidu.com/fis3/docs/beginning/debug.html#%E6%B5%8F%E8%A7%88%E5%99%A8%E8%87%AA%E5%8A%A8%E5%88%B7%E6%96%B0" target="_blank" rel="noreferrer">官方文档</a></li><li><a href="https://blog.csdn.net/renfufei/article/details/74926339" target="_blank" rel="noreferrer">前端构建工具-fis3使用入门</a></li><li><a href="https://www.zhihu.com/question/50829160" target="_blank" rel="noreferrer">我想问下fis3和webpack有什么区别?</a></li><li><a href="https://tangciwei.github.io/2018/09/19/fis3%E6%80%BB%E7%BB%93/" target="_blank" rel="noreferrer">fis3总结</a></li></ul><p>fis3 集成了web开发中常见的功能，只需要简单的配置即可，还是十分方便的。</p><p>除了基本的前端开发之外，fis3还提供了整套前端开发部署解决方法，尽管目前貌似已经不再更新了，其思想还是十分值得学习的。</p><h3 id="基本原理" tabindex="-1">基本原理 <a class="header-anchor" href="#基本原理" aria-label="Permalink to &quot;基本原理&quot;">​</a></h3><p>参考：<a href="https://fis.baidu.com/fis3/docs/build.html#%E6%9E%84%E5%BB%BA%E6%B5%81%E7%A8%8B" target="_blank" rel="noreferrer">fis3文档</a></p><p>FIS3 是基于文件对象进行构建的，每个进入 FIS3 的文件都会实例化成一个 File 对象，然后在构建过程中对每一个File对象进行操作</p><ul><li>扫描项目目录拿到文件并初始化出一个文件对象列表</li><li>对文件对象中每一个文件进行单文件编译</li><li>获取用户设置的 package 插件，进行打包处理（包括合并图片）</li></ul><p>声明依赖能力为工程师提供了声明依赖关系的编译接口。FIS3 在执行编译的过程中，会扫描这些编译标记，从而建立一张 <strong>静态资源关系表</strong>，资源关系表详细记录了项目内的静态资源id、发布后的线上路径、资源类型以及 依赖关系 和 资源打包 等信息。</p><p>在fis3中，依赖本身在构建过程中就已经分析完成，并记录在静态资源映射表中，因此模块化框架只需要根据该映射表正确加载模块即可。</p><h3 id="优缺点" tabindex="-1">优缺点 <a class="header-anchor" href="#优缺点" aria-label="Permalink to &quot;优缺点&quot;">​</a></h3><p>fis3的本质是基于静态资源标记+动态解析静态资源表，在build时会生成一张资源依赖表，因此不论是纯前端渲染还是后端渲染，都很容易支持，因此可以做到非常精细化的控制资源的按需加载。</p><ul><li>资源定位能力，可以有效地分离开发路径与部署路径之间的关系，工程师不再关心资源部署到线上之后去了哪里，变成了什么名字，资源定位结果可以被fis的配置文件控制，这些都可以通过配置来指定。而工程师只需要使用相对路径来定位自己的开发资源即可。</li></ul><p>fis3的缺点在于其设计的<strong>静态资源标记</strong>依赖于一套内置实现的资源标记语法，这导致不能被浏览器或npm包如babel等工具进行解析。</p><p>webpack并没有生成一个颗粒化的静态资源表，对应打包前后的文件，但是社区十分好。</p>`,23),p=[t];function e(h,k,r,E,d,g){return a(),i("div",null,p)}const u=s(l,[["render",e]]);export{c as __pageData,u as default};
