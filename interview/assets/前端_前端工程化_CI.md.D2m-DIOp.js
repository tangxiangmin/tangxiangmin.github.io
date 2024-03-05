import{_ as a,c as s,o as n,a2 as p}from"./chunks/framework.DLPB9-dE.js";const m=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"前端/前端工程化/CI.md","filePath":"前端/前端工程化/CI.md","lastUpdated":1683863238000}'),e={name:"前端/前端工程化/CI.md"},t=p(`<h2 id="ci持续集成" tabindex="-1">CI持续集成 <a class="header-anchor" href="#ci持续集成" aria-label="Permalink to &quot;CI持续集成&quot;">​</a></h2><p>在CI环境下通过authToken登录</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>npm login</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 输入账号密码和email</span></span>
<span class="line"><span></span></span>
<span class="line"><span>vs ~/.npmrc</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 查看刚才登录的token</span></span>
<span class="line"><span>//localhost:4873/:_authToken=&quot;/TiXccHN9neTL6b9B7Ir7bgFWRyTAAfLp2bf/AU9PBs=&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 然后执行npm config set &lt;上面这一串host+token的字符串&gt;</span></span>
<span class="line"><span>npm config set //localhost:4873/:_authToken=&quot;/TiXccHN9neTL6b9B7Ir7bgFWRyTAAfLp2bf/AU9PBs=&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 如果后续像使用yarn安装私有仓库的包，还需要配置always-auth，这样可以保证yarn走这个配置</span></span>
<span class="line"><span>npm config set always-auth true</span></span></code></pre></div>`,3),l=[t];function c(o,i,r,_,d,h){return n(),s("div",null,l)}const f=a(e,[["render",c]]);export{m as __pageData,f as default};
