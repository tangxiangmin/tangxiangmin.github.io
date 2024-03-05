import{_ as a,c as n,o as s,a2 as e}from"./chunks/framework.DLPB9-dE.js";const g=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"前端/前端工程化/monorepo.md","filePath":"前端/前端工程化/monorepo.md","lastUpdated":1684907685000}'),p={name:"前端/前端工程化/monorepo.md"},t=e(`<h2 id="monorepo方案" tabindex="-1">monorepo方案 <a class="header-anchor" href="#monorepo方案" aria-label="Permalink to &quot;monorepo方案&quot;">​</a></h2><p>对于多个项目重复的代码，可以将其抽取成独立的npm包，但同时维护多个npm包的时候，包管理比较麻烦，尤其是在多个包存在依赖关系的时候。因此大型前端项目走逐渐采用<code>monorepo</code>作为项目代码的管理方式，主要特点是在单个仓库中管理多个npm包</p><p><a href="https://segmentfault.com/a/1190000039157365" target="_blank" rel="noreferrer">https://segmentfault.com/a/1190000039157365</a></p><p><a href="https://rainylog.com/post/monorepo-think/" target="_blank" rel="noreferrer">https://rainylog.com/post/monorepo-think/</a></p><p><a href="https://blog.mayandev.top/2021/02/22/tech/what-is-monorepo/" target="_blank" rel="noreferrer">https://blog.mayandev.top/2021/02/22/tech/what-is-monorepo/</a></p><p>这样就可以尽可能复用代码了。</p><p>各种 monorepo 技术方案 <a href="https://segmentfault.com/a/1190000038683978" target="_blank" rel="noreferrer">https://segmentfault.com/a/1190000038683978</a></p><h2 id="lerna" tabindex="-1">lerna <a class="header-anchor" href="#lerna" aria-label="Permalink to &quot;lerna&quot;">​</a></h2><p>lerna提供了一种快速搭建monorepo仓库的方式，参考:<a href="http://www.sosout.com/2018/07/21/lerna-repo.html" target="_blank" rel="noreferrer">lerna管理前端packages的最佳实践</a></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>lerna init</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 创建模块1</span></span>
<span class="line"><span>lerna create test1</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 创建模块2</span></span>
<span class="line"><span>lerna create test2</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 将test1添加为test2的依赖</span></span>
<span class="line"><span>lerna add test1 --scope test2</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 提交代码</span></span>
<span class="line"><span>git add . </span></span>
<span class="line"><span>git commit</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 修改git tag，更新所有模块版本号，发布包到对应的npm仓库</span></span>
<span class="line"><span>lerna publish</span></span></code></pre></div><blockquote><p>lerna 可以单独发布某一个模块，而不是全量发布所有模块？</p></blockquote><p>在 <code>Fixed/Locked</code>（默认）模式下面，所有包的版本号都是一致的，维护在<code>lerna.json</code>的<code>version</code>中</p><p>参考<a href="https://github.com/lerna/lerna/issues/1691" target="_blank" rel="noreferrer">issue1691</a>、<a href="https://github.com/lerna/lerna/issues/1055" target="_blank" rel="noreferrer">issue1055</a>，基于lerna的使用git tag的特性，要么全量发布，要么都不发布</p><p>可以通过<code>lerna init --independent</code>选择<code>Independent</code>独立模式，每个包可以拥有自己的版本号，由每个包自己的package.json维护</p><p>相关的命令可以直接查看<a href="https://github.com/lerna/lerna/tree/main/commands" target="_blank" rel="noreferrer">源码</a></p><h2 id="yarn-workspaces" tabindex="-1">yarn workspaces <a class="header-anchor" href="#yarn-workspaces" aria-label="Permalink to &quot;yarn workspaces&quot;">​</a></h2><p><a href="https://zhuanlan.zhihu.com/p/71385053" target="_blank" rel="noreferrer">https://zhuanlan.zhihu.com/p/71385053</a></p><p><a href="https://segmentfault.com/a/1190000025173538" target="_blank" rel="noreferrer">https://segmentfault.com/a/1190000025173538</a></p><p>使用实践：由于yarn和lerna在功能上有较多的重叠,我们采用yarn官方推荐的做法,用yarn来处理依赖问题，用lerna来处理发布问题</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span># 快速创建模块</span></span>
<span class="line"><span>lerna create mod1 -y</span></span>
<span class="line"><span>lerna create mod2 -y</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 声明依赖,mod2添加依赖mod1</span></span>
<span class="line"><span>yarn workspace mod2 add mo1</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 本地开发一通修改，mod2会即时获取mod1模块的内容，本地开发调试很方便</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 使用git-cz规范commit，lerna可以根据提交信息自动生成</span></span>
<span class="line"><span>git add .</span></span>
<span class="line"><span>git cz  </span></span>
<span class="line"><span></span></span>
<span class="line"><span># 提交之后可以查看有哪些包版本变化了，但是没有推送到仓库上</span></span>
<span class="line"><span>lerna updated</span></span></code></pre></div><p>发现一个奇怪的问题，当本地仅仅是修改了代码，还没有commit时，<code>lerna updated</code>无法查看到包的变化。需要提交之后，才能看见变化。如果存在某个包的变化之后，再继续修改其他的包，其他的包及时没有提交，也可以查看到对应包的变化。</p><p>举个例子：</p><ul><li>修改mod1，未提交时，lerna updated 返回空</li><li>修改mod1,然后提交，未进行发布，lerna updated 返回mod1</li><li>此时再修改磨mod2，不进行提交和发布，lerna updated 返回mod1 和 mod2</li></ul><p>可以研究一下lerna updated的原理。</p>`,24),r=[t];function l(o,c,i,d,m,h){return s(),n("div",null,r)}const f=a(p,[["render",l]]);export{g as __pageData,f as default};
