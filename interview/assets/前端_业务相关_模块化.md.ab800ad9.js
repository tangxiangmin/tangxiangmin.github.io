import{_ as n,c as a,o as e,b as s}from"./app.946f11db.js";const m='{"title":"JavaScript\u6A21\u5757","description":"","frontmatter":{},"headers":[{"level":2,"title":"JavaScript\u6A21\u5757","slug":"javascript\u6A21\u5757"},{"level":2,"title":"monorepo","slug":"monorepo"},{"level":2,"title":"rollup","slug":"rollup"},{"level":3,"title":"\u5916\u90E8\u6A21\u5757","slug":"\u5916\u90E8\u6A21\u5757"},{"level":3,"title":"\u6253\u5305React\u7EC4\u4EF6","slug":"\u6253\u5305react\u7EC4\u4EF6"},{"level":3,"title":"\u6253\u5305Vue\u7EC4\u4EF6","slug":"\u6253\u5305vue\u7EC4\u4EF6"},{"level":3,"title":"\u4E00\u4E9B\u95EE\u9898","slug":"\u4E00\u4E9B\u95EE\u9898"},{"level":2,"title":"monorepo\u65B9\u6848","slug":"monorepo\u65B9\u6848"},{"level":2,"title":"lerna","slug":"lerna"},{"level":2,"title":"yarn workspaces","slug":"yarn-workspaces"},{"level":2,"title":"verdaccio","slug":"verdaccio"}],"relativePath":"\u524D\u7AEF/\u4E1A\u52A1\u76F8\u5173/\u6A21\u5757\u5316.md"}',o={},p=s(`<h2 id="javascript\u6A21\u5757" tabindex="-1">JavaScript\u6A21\u5757 <a class="header-anchor" href="#javascript\u6A21\u5757" aria-hidden="true">#</a></h2><p>CommonJS\u3001AMD\u3001CMD\u3001UMD\u3001ES6\u5404\u79CD\u89C4\u8303</p><p>\u5DF2\u6574\u7406\u81F3\u535A\u5BA2<a href="https://www.shymean.com/article/JavaScript%E6%A8%A1%E5%9D%97%E7%AE%A1%E7%90%86%E6%9C%BA%E5%88%B6" target="_blank" rel="noopener noreferrer">JavaScript\u6A21\u5757\u7BA1\u7406\u673A\u5236</a></p><h2 id="monorepo" tabindex="-1">monorepo <a class="header-anchor" href="#monorepo" aria-hidden="true">#</a></h2><p>\u5DF2\u6574\u7406\u81F3\u535A\u5BA2<a href="https://www.shymean.com/article/%E5%A4%9A%E9%A1%B9%E7%9B%AE%E9%80%BB%E8%BE%91%E5%A4%8D%E7%94%A8%E4%B8%8Emonorepo" target="_blank" rel="noopener noreferrer"></a></p><h2 id="rollup" tabindex="-1">rollup <a class="header-anchor" href="#rollup" aria-hidden="true">#</a></h2><p>\u53EF\u4EE5\u53C2\u8003\u5404\u4E2A\u7EC4\u4EF6\u5E93\u7684\u6253\u5305\u65B9\u5F0F</p><h3 id="\u5916\u90E8\u6A21\u5757" tabindex="-1">\u5916\u90E8\u6A21\u5757 <a class="header-anchor" href="#\u5916\u90E8\u6A21\u5757" aria-hidden="true">#</a></h3><p>\u53C2\u8003:<a href="https://www.rollupjs.com/guide/tools" target="_blank" rel="noopener noreferrer">Rollup \u4E0E\u5176\u4ED6\u5DE5\u5177\u96C6\u6210</a></p><p>\u5F00\u53D1\u7684\u6A21\u5757\u5F88\u53EF\u80FD\u4F9D\u8D56\u5916\u90E8\u6A21\u5757\uFF0C\u53EF\u4EE5\u901A\u8FC7<code>@rollup/plugin-node-resolve</code>\u544A\u8BC9rollup\u5982\u4F55\u67E5\u627E\u5916\u90E8\u6A21\u5757</p><p>npm\u4E2D\u5927\u591A\u6570\u5305\u90FD\u662FCommonJS\u6A21\u5757\uFF0C\u53EF\u4EE5\u901A\u8FC7<code>@rollup/plugin-commonjs</code>\u5C06CommonJS\u6A21\u5757\u8F6C\u6362\u6210ES6\u6A21\u5757</p><h3 id="\u6253\u5305react\u7EC4\u4EF6" tabindex="-1">\u6253\u5305React\u7EC4\u4EF6 <a class="header-anchor" href="#\u6253\u5305react\u7EC4\u4EF6" aria-hidden="true">#</a></h3><div class="language-"><pre><code>yarn add @rollup/plugin-babel @babel/preset-react
</code></pre></div><div class="language-js"><pre><code><span class="token keyword">import</span> resolve <span class="token keyword">from</span> <span class="token string">&quot;@rollup/plugin-node-resolve&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> commonjs <span class="token keyword">from</span> <span class="token string">&quot;@rollup/plugin-commonjs&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> babel <span class="token keyword">from</span> <span class="token string">&quot;@rollup/plugin-babel&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u5176\u4ED6\u7701\u7565</span>
    <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token function">babel</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token literal-property property">exclude</span><span class="token operator">:</span> <span class="token string">&quot;**/node_modules/**&quot;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">presets</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;@babel/preset-react&#39;</span><span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token function">commonjs</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="\u6253\u5305vue\u7EC4\u4EF6" tabindex="-1">\u6253\u5305Vue\u7EC4\u4EF6 <a class="header-anchor" href="#\u6253\u5305vue\u7EC4\u4EF6" aria-hidden="true">#</a></h3><div class="language-"><pre><code>yarn add rollup-plugin-vue @vue/compiler-sfc 
</code></pre></div><div class="language-js"><pre><code><span class="token keyword">import</span> resolve <span class="token keyword">from</span> <span class="token string">&quot;@rollup/plugin-node-resolve&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> commonjs <span class="token keyword">from</span> <span class="token string">&quot;@rollup/plugin-commonjs&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> babel <span class="token keyword">from</span> <span class="token string">&quot;@rollup/plugin-babel&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> vue <span class="token keyword">from</span> <span class="token string">&quot;rollup-plugin-vue&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token function">babel</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token literal-property property">exclude</span><span class="token operator">:</span> <span class="token string">&quot;**/node_modules/**&quot;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token function">vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token literal-property property">css</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            <span class="token literal-property property">compileTemplate</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token function">commonjs</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="\u4E00\u4E9B\u95EE\u9898" tabindex="-1">\u4E00\u4E9B\u95EE\u9898 <a class="header-anchor" href="#\u4E00\u4E9B\u95EE\u9898" aria-hidden="true">#</a></h3><blockquote><p>\u53D1\u5E03\u5230npm\u7684\u5305\u9700\u8981\u7F16\u8BD1\u6216\u538B\u7F29\u5417\uFF1F</p></blockquote><p>\u4E0D\u6253\u5305\u7684\u8BDD\uFF0C\u53EF\u80FD\u4F1A\u63D0\u9AD8\u4F7F\u7528\u95E8\u69DB\uFF0C\u540C\u65F6\u964D\u4F4E\u6253\u5305\u7F16\u8BD1\u901F\u5EA6\uFF1B\u4F46\u4EA4\u7ED9\u7528\u6237\u81EA\u5DF1\u7684\u751F\u6210\u5DE5\u5177\u6253\u5305\uFF0C\u5B9A\u5236\u6027\u66F4\u5F3A\uFF0C\u6253\u5305\u51FA\u6765\u7684\u4EE3\u7801\u66F4\u5C0F\u3002</p><p><a href="https://zhuanlan.zhihu.com/p/54255260" target="_blank" rel="noopener noreferrer">\u76F8\u5173\u8BA8\u8BBA</a>\uFF0C\u5F15\u7533\u51FAUI\u6846\u67B6\u63D0\u4F9B\u7684\u6309\u9700\u52A0\u8F7D \u63D2\u4EF6</p><p>\u5982\u679C\u53D1\u5E03\u7684\u662Fes6\u6A21\u5757\u7684\u8BDD\uFF0C\u5EFA\u8BAE\u914D\u7F6E<code>pkg.module</code>\u5B57\u6BB5</p><blockquote><p>\u5982\u4F55\u4E0D\u5C06\u7B2C\u4E09\u5E93\u7684\u5305\u6253\u5165\u6587\u4EF6\uFF1F</p></blockquote><p>\u914D\u7F6E<code>external</code>\uFF0C\u8FD8\u53EF\u4EE5\u6839\u636E<code>globals</code>\u642D\u914D\u4F7F\u7528</p><h2 id="monorepo\u65B9\u6848" tabindex="-1">monorepo\u65B9\u6848 <a class="header-anchor" href="#monorepo\u65B9\u6848" aria-hidden="true">#</a></h2><p>\u5BF9\u4E8E\u591A\u4E2A\u9879\u76EE\u91CD\u590D\u7684\u4EE3\u7801\uFF0C\u53EF\u4EE5\u5C06\u5176\u62BD\u53D6\u6210\u72EC\u7ACB\u7684npm\u5305\uFF0C\u4F46\u540C\u65F6\u7EF4\u62A4\u591A\u4E2Anpm\u5305\u7684\u65F6\u5019\uFF0C\u5305\u7BA1\u7406\u6BD4\u8F83\u9EBB\u70E6\uFF0C\u5C24\u5176\u662F\u5728\u591A\u4E2A\u5305\u5B58\u5728\u4F9D\u8D56\u5173\u7CFB\u7684\u65F6\u5019\u3002\u56E0\u6B64\u5927\u578B\u524D\u7AEF\u9879\u76EE\u8D70\u9010\u6E10\u91C7\u7528<code>monorepo</code>\u4F5C\u4E3A\u9879\u76EE\u4EE3\u7801\u7684\u7BA1\u7406\u65B9\u5F0F\uFF0C\u4E3B\u8981\u7279\u70B9\u662F\u5728\u5355\u4E2A\u4ED3\u5E93\u4E2D\u7BA1\u7406\u591A\u4E2Anpm\u5305</p><p><a href="https://segmentfault.com/a/1190000039157365" target="_blank" rel="noopener noreferrer">https://segmentfault.com/a/1190000039157365</a></p><p><a href="https://rainylog.com/post/monorepo-think/" target="_blank" rel="noopener noreferrer">https://rainylog.com/post/monorepo-think/</a></p><p><a href="https://blog.mayandev.top/2021/02/22/tech/what-is-monorepo/" target="_blank" rel="noopener noreferrer">https://blog.mayandev.top/2021/02/22/tech/what-is-monorepo/</a></p><p>\u8FD9\u6837\u5C31\u53EF\u4EE5\u5C3D\u53EF\u80FD\u590D\u7528\u4EE3\u7801\u4E86\u3002</p><p>\u5404\u79CD monorepo \u6280\u672F\u65B9\u6848 <a href="https://segmentfault.com/a/1190000038683978" target="_blank" rel="noopener noreferrer">https://segmentfault.com/a/1190000038683978</a></p><h2 id="lerna" tabindex="-1">lerna <a class="header-anchor" href="#lerna" aria-hidden="true">#</a></h2><p>lerna\u63D0\u4F9B\u4E86\u4E00\u79CD\u5FEB\u901F\u642D\u5EFAmonorepo\u4ED3\u5E93\u7684\u65B9\u5F0F\uFF0C\u53C2\u8003:<a href="http://www.sosout.com/2018/07/21/lerna-repo.html" target="_blank" rel="noopener noreferrer">lerna\u7BA1\u7406\u524D\u7AEFpackages\u7684\u6700\u4F73\u5B9E\u8DF5</a></p><div class="language-"><pre><code>lerna init

# \u521B\u5EFA\u6A21\u57571
lerna create test1

# \u521B\u5EFA\u6A21\u57572
lerna create test2

# \u5C06test1\u6DFB\u52A0\u4E3Atest2\u7684\u4F9D\u8D56
lerna add test1 --scope test2

# \u63D0\u4EA4\u4EE3\u7801
git add . 
git commit

# \u4FEE\u6539git tag\uFF0C\u66F4\u65B0\u6240\u6709\u6A21\u5757\u7248\u672C\u53F7\uFF0C\u53D1\u5E03\u5305\u5230\u5BF9\u5E94\u7684npm\u4ED3\u5E93
lerna publish
</code></pre></div><blockquote><p>lerna \u53EF\u4EE5\u5355\u72EC\u53D1\u5E03\u67D0\u4E00\u4E2A\u6A21\u5757\uFF0C\u800C\u4E0D\u662F\u5168\u91CF\u53D1\u5E03\u6240\u6709\u6A21\u5757\uFF1F</p></blockquote><p>\u5728 <code>Fixed/Locked</code>\uFF08\u9ED8\u8BA4\uFF09\u6A21\u5F0F\u4E0B\u9762\uFF0C\u6240\u6709\u5305\u7684\u7248\u672C\u53F7\u90FD\u662F\u4E00\u81F4\u7684\uFF0C\u7EF4\u62A4\u5728<code>lerna.json</code>\u7684<code>version</code>\u4E2D</p><p>\u53C2\u8003<a href="https://github.com/lerna/lerna/issues/1691" target="_blank" rel="noopener noreferrer">issue1691</a>\u3001<a href="https://github.com/lerna/lerna/issues/1055" target="_blank" rel="noopener noreferrer">issue1055</a>\uFF0C\u57FA\u4E8Elerna\u7684\u4F7F\u7528git tag\u7684\u7279\u6027\uFF0C\u8981\u4E48\u5168\u91CF\u53D1\u5E03\uFF0C\u8981\u4E48\u90FD\u4E0D\u53D1\u5E03</p><p>\u53EF\u4EE5\u901A\u8FC7<code>lerna init --independent</code>\u9009\u62E9<code>Independent</code>\u72EC\u7ACB\u6A21\u5F0F\uFF0C\u6BCF\u4E2A\u5305\u53EF\u4EE5\u62E5\u6709\u81EA\u5DF1\u7684\u7248\u672C\u53F7\uFF0C\u7531\u6BCF\u4E2A\u5305\u81EA\u5DF1\u7684package.json\u7EF4\u62A4</p><p>\u76F8\u5173\u7684\u547D\u4EE4\u53EF\u4EE5\u76F4\u63A5\u67E5\u770B<a href="https://github.com/lerna/lerna/tree/main/commands" target="_blank" rel="noopener noreferrer">\u6E90\u7801</a></p><h2 id="yarn-workspaces" tabindex="-1">yarn workspaces <a class="header-anchor" href="#yarn-workspaces" aria-hidden="true">#</a></h2><p><a href="https://zhuanlan.zhihu.com/p/71385053" target="_blank" rel="noopener noreferrer">https://zhuanlan.zhihu.com/p/71385053</a></p><p><a href="https://segmentfault.com/a/1190000025173538" target="_blank" rel="noopener noreferrer">https://segmentfault.com/a/1190000025173538</a></p><p>\u4F7F\u7528\u5B9E\u8DF5\uFF1A\u7531\u4E8Eyarn\u548Clerna\u5728\u529F\u80FD\u4E0A\u6709\u8F83\u591A\u7684\u91CD\u53E0,\u6211\u4EEC\u91C7\u7528yarn\u5B98\u65B9\u63A8\u8350\u7684\u505A\u6CD5,\u7528yarn\u6765\u5904\u7406\u4F9D\u8D56\u95EE\u9898\uFF0C\u7528lerna\u6765\u5904\u7406\u53D1\u5E03\u95EE\u9898</p><div class="language-"><pre><code># \u5FEB\u901F\u521B\u5EFA\u6A21\u5757
lerna create mod1 -y
lerna create mod2 -y

# \u58F0\u660E\u4F9D\u8D56,mod2\u6DFB\u52A0\u4F9D\u8D56mod1
yarn workspace mod2 add mo1

# \u672C\u5730\u5F00\u53D1\u4E00\u901A\u4FEE\u6539\uFF0Cmod2\u4F1A\u5373\u65F6\u83B7\u53D6mod1\u6A21\u5757\u7684\u5185\u5BB9\uFF0C\u672C\u5730\u5F00\u53D1\u8C03\u8BD5\u5F88\u65B9\u4FBF

# \u4F7F\u7528git-cz\u89C4\u8303commit\uFF0Clerna\u53EF\u4EE5\u6839\u636E\u63D0\u4EA4\u4FE1\u606F\u81EA\u52A8\u751F\u6210
git add .
git cz  

# \u63D0\u4EA4\u4E4B\u540E\u53EF\u4EE5\u67E5\u770B\u6709\u54EA\u4E9B\u5305\u7248\u672C\u53D8\u5316\u4E86\uFF0C\u4F46\u662F\u6CA1\u6709\u63A8\u9001\u5230\u4ED3\u5E93\u4E0A
lerna updated
</code></pre></div><p>\u53D1\u73B0\u4E00\u4E2A\u5947\u602A\u7684\u95EE\u9898\uFF0C\u5F53\u672C\u5730\u4EC5\u4EC5\u662F\u4FEE\u6539\u4E86\u4EE3\u7801\uFF0C\u8FD8\u6CA1\u6709commit\u65F6\uFF0C<code>lerna updated</code>\u65E0\u6CD5\u67E5\u770B\u5230\u5305\u7684\u53D8\u5316\u3002\u9700\u8981\u63D0\u4EA4\u4E4B\u540E\uFF0C\u624D\u80FD\u770B\u89C1\u53D8\u5316\u3002\u5982\u679C\u5B58\u5728\u67D0\u4E2A\u5305\u7684\u53D8\u5316\u4E4B\u540E\uFF0C\u518D\u7EE7\u7EED\u4FEE\u6539\u5176\u4ED6\u7684\u5305\uFF0C\u5176\u4ED6\u7684\u5305\u53CA\u65F6\u6CA1\u6709\u63D0\u4EA4\uFF0C\u4E5F\u53EF\u4EE5\u67E5\u770B\u5230\u5BF9\u5E94\u5305\u7684\u53D8\u5316\u3002</p><p>\u4E3E\u4E2A\u4F8B\u5B50\uFF1A</p><ul><li>\u4FEE\u6539mod1\uFF0C\u672A\u63D0\u4EA4\u65F6\uFF0Clerna updated \u8FD4\u56DE\u7A7A</li><li>\u4FEE\u6539mod1,\u7136\u540E\u63D0\u4EA4\uFF0C\u672A\u8FDB\u884C\u53D1\u5E03\uFF0Clerna updated \u8FD4\u56DEmod1</li><li>\u6B64\u65F6\u518D\u4FEE\u6539\u78E8mod2\uFF0C\u4E0D\u8FDB\u884C\u63D0\u4EA4\u548C\u53D1\u5E03\uFF0Clerna updated \u8FD4\u56DEmod1 \u548C mod2</li></ul><p>\u53EF\u4EE5\u7814\u7A76\u4E00\u4E0Blerna updated\u7684\u539F\u7406\u3002</p><h2 id="verdaccio" tabindex="-1">verdaccio <a class="header-anchor" href="#verdaccio" aria-hidden="true">#</a></h2><p>\u642D\u5EFAnpm\u79C1\u6709\u4ED3\u5E93\uFF0C\u6258\u7BA1\u516C\u53F8\u5185\u90E8\u79C1\u6709\u5305\u3002</p><p>\u6B64\u5916\u5404\u5927\u4E91\u670D\u52A1\u63D0\u4F9B\u5546\u4E1A\u63D0\u4F9B\u4E86\u4F01\u4E1A\u7EA7\u522B\u7684\u79C1\u6709\u5305\u6258\u7BA1\u4ED3\u5E93\u3002</p>`,51),t=[p];function r(l,c,u,i,d,k){return e(),a("div",null,t)}var g=n(o,[["render",r]]);export{m as __pageData,g as default};
