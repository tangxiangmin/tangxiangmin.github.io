import{_ as n,c as s,o as a,b as t}from"./app.946f11db.js";const f='{"title":"\u8868\u5355\u63D0\u4EA4","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u8868\u5355\u63D0\u4EA4","slug":"\u8868\u5355\u63D0\u4EA4"},{"level":2,"title":"XHR","slug":"xhr"},{"level":2,"title":"\u8DE8\u57DF","slug":"\u8DE8\u57DF"},{"level":2,"title":"Fetch","slug":"fetch"},{"level":3,"title":"\u57FA\u672C\u4F7F\u7528","slug":"\u57FA\u672C\u4F7F\u7528"},{"level":3,"title":"fetch\u4E2D\u89E3\u51B3\u8DE8\u57DF","slug":"fetch\u4E2D\u89E3\u51B3\u8DE8\u57DF"},{"level":3,"title":"\u4F7F\u7528fetch\u5E38\u89C1\u7684\u4E00\u4E9B\u95EE\u9898","slug":"\u4F7F\u7528fetch\u5E38\u89C1\u7684\u4E00\u4E9B\u95EE\u9898"},{"level":2,"title":"WebSocket","slug":"websocket"},{"level":3,"title":"\u57FA\u7840","slug":"\u57FA\u7840"},{"level":3,"title":"\u4E3A\u4EC0\u4E48websocket\u53EF\u4EE5\u8DE8\u57DF","slug":"\u4E3A\u4EC0\u4E48websocket\u53EF\u4EE5\u8DE8\u57DF"},{"level":2,"title":"Axios","slug":"axios"}],"relativePath":"\u7F51\u7EDC/\u524D\u7AEF\u7F51\u7EDC\u8BF7\u6C42.md"}',p={},o=t(`<h1 id="\u524D\u7AEF\u7F51\u7EDC\u8BF7\u6C42" tabindex="-1">\u524D\u7AEF\u7F51\u7EDC\u8BF7\u6C42 <a class="header-anchor" href="#\u524D\u7AEF\u7F51\u7EDC\u8BF7\u6C42" aria-hidden="true">#</a></h1><p>\u53C2\u8003</p><ul><li><a href="https://www.shymean.com/article/%E5%89%8D%E7%AB%AF%E5%A4%A7%E6%96%87%E4%BB%B6%E4%B8%8A%E4%BC%A0" target="_blank" rel="noopener noreferrer">\u524D\u7AEF\u5927\u6587\u4EF6\u4E0A\u4F20</a></li></ul><h2 id="\u8868\u5355\u63D0\u4EA4" tabindex="-1">\u8868\u5355\u63D0\u4EA4 <a class="header-anchor" href="#\u8868\u5355\u63D0\u4EA4" aria-hidden="true">#</a></h2><p>\u8868\u5355<code>enctype</code>\u7684\u4E09\u79CD\u7C7B\u578B</p><ul><li><code>application/x-www-form-urlencoded</code>\uFF0C\u8FD9\u79CD\u7F16\u7801\u683C\u5F0F\u5C06\u952E\u503C\u5BF9\u7684\u53C2\u6570\u7528<code>&amp;</code>\u8FDE\u63A5\u8D77\u6765\uFF0C\u5982\u679C\u6709\u7A7A\u683C\uFF0C\u5C06\u7A7A\u683C\u8F6C\u6362\u4E3A<code>+</code>\u52A0\u53F7\uFF1B\u6709\u7279\u6B8A\u7B26\u53F7\uFF0C\u5C06\u7279\u6B8A\u7B26\u53F7\u8F6C\u6362\u4E3A<code>ASCII HEX</code>\u503C\uFF0C\u662F\u6D4F\u89C8\u5668\u7684\u9ED8\u8BA4\u7F16\u7801\u683C\u5F0F</li><li><code>multipart/form-data</code>\uFF0C\u5C06\u6570\u636E\u7F16\u7801\u6210\u4E00\u6574\u6761\u6D88\u606F\uFF0C\u5176\u4E2D\u5305\u542B\u4E86\u591A\u4E2A Parts\uFF0C\u6BCF\u4E2A Part \u90FD\u5305\u542B\u5934\u4FE1\u606F\u90E8\u548Ctype\u7B49\u5185\u5BB9\uFF0C\u901A\u8FC7<code>boundary</code>\u8FDB\u884C\u5206\u5272\u3002\u5982\u679C\u8981\u53D1\u9001\u5927\u91CF\u7684\u4E8C\u8FDB\u5236\u6570\u636E\uFF08non-ASCII\uFF09\uFF0C\u4F7F\u7528<code>application/x-www-form-urlencoded</code>\u662F\u5F88\u6D6A\u8D39\u7684\uFF0C\u56E0\u6B64\u4F7F\u7528\u8868\u5355\u4E0A\u4F20\u6587\u4EF6\u65F6\u5F80\u5F80\u9700\u8981\u6307\u5B9A\u4E3A\u8BE5\u7F16\u7801\u683C\u5F0F</li><li><code>text-plain</code>\uFF0C\u7EAF\u6587\u672C\uFF0C\u6D4F\u89C8\u5668\u4E0D\u8FDB\u884C\u4EFB\u4F55\u7F16\u7801</li></ul><h2 id="xhr" tabindex="-1">XHR <a class="header-anchor" href="#xhr" aria-hidden="true">#</a></h2><blockquote><p>\u5982\u4F55\u5C01\u88C5\u4E00\u4E2A\u53EF\u63A7\u5236\u5E76\u53D1\u6570\u91CF\u9650\u5236\u7684\u7F51\u7EDC\u8BF7\u6C42\u65B9\u6CD5?</p></blockquote><blockquote><p>url\u957F\u5EA6\u8FC7\u957F\u5728android\u4E2D\u62A5\u9519\uFF0C\u5982\u4F55\u5904\u7406</p></blockquote><p>\u4E4B\u524D\u9047\u89C1\u7684\u4E00\u4E2A\u9762\u8BD5\u9898\u76EE\u662F\u624B\u5199\u4EE3\u7801\uFF0C\u5C01\u88C5ajax~</p><div class="language-js"><pre><code><span class="token keyword">var</span> xhr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">XMLHttpRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">var</span> url <span class="token operator">=</span> <span class="token string">&#39;/api&#39;</span>
xhr<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token string">&quot;GET&quot;</span><span class="token punctuation">,</span> url<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span>
xhr<span class="token punctuation">.</span><span class="token function-variable function">onreadystatechange</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u8FD9\u91CC\u7684\u51FD\u6570\u5F02\u6B65\u6267\u884C\uFF0C\u53EF\u53C2\u8003\u4E4B\u524D JS \u57FA\u7840\u4E2D\u7684\u5F02\u6B65\u6A21\u5757</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>readyState <span class="token operator">==</span> <span class="token number">4</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>status <span class="token operator">==</span> <span class="token number">200</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">alert</span><span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>responseText<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
xhr<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token operator">...</span>
</code></pre></div><p>\u9700\u8981\u638C\u63E1<code>readyState</code>\u548C<code>status</code>\u72B6\u6001\u7801\u7684\u542B\u4E49</p><h2 id="\u8DE8\u57DF" tabindex="-1">\u8DE8\u57DF <a class="header-anchor" href="#\u8DE8\u57DF" aria-hidden="true">#</a></h2><p>\u53C2\u8003\uFF1A<a href="https://www.shymean.com/article/%E6%B5%8F%E8%A7%88%E5%99%A8%E4%B8%AD%E7%9A%84%E8%B7%A8%E5%9F%9F" target="_blank" rel="noopener noreferrer">\u6D4F\u89C8\u5668\u4E2D\u7684\u8DE8\u57DF</a></p><h2 id="fetch" tabindex="-1">Fetch <a class="header-anchor" href="#fetch" aria-hidden="true">#</a></h2><blockquote><p>\u4E86\u89E3fetch\u5417\uFF1Ffetch \u5982\u4F55\u89E3\u51B3\u8DE8\u57DF\u95EE\u9898\uFF1F\u5982\u4F55\u53D6\u6D88 fetch \u8BF7\u6C42\uFF1F\u80FD\u5426\u76D1\u542C fetch \u7684\u4E0A\u4F20\u8FDB\u5EA6?</p></blockquote><h3 id="\u57FA\u672C\u4F7F\u7528" tabindex="-1">\u57FA\u672C\u4F7F\u7528 <a class="header-anchor" href="#\u57FA\u672C\u4F7F\u7528" aria-hidden="true">#</a></h3><p>\u53C2\u8003\uFF1A<a href="https://developer.mozilla.org/zh-CN/docs/Web/API/Fetch_API/Using_Fetch" target="_blank" rel="noopener noreferrer">Fetch-MDN\u6587\u6863</a></p><p>Fetch \u7684\u6838\u5FC3\u5728\u4E8E\u5BF9 HTTP \u63A5\u53E3\u7684\u62BD\u8C61\uFF0C\u5305\u62EC Request\uFF0CResponse\uFF0CHeaders\uFF0CBody\uFF0C</p><div class="language-js"><pre><code><span class="token keyword">var</span> url <span class="token operator">=</span> <span class="token string">&quot;/index.php&quot;</span>
<span class="token function">fetch</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">&quot;POST&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">body</span><span class="token operator">:</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">code</span><span class="token operator">:</span><span class="token string">&#39;1&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> res<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p>\u53EA\u6709POST\u65B9\u5F0F\u53EF\u4EE5\u914D\u7F6Ebody\u53C2\u6570</p><h3 id="fetch\u4E2D\u89E3\u51B3\u8DE8\u57DF" tabindex="-1">fetch\u4E2D\u89E3\u51B3\u8DE8\u57DF <a class="header-anchor" href="#fetch\u4E2D\u89E3\u51B3\u8DE8\u57DF" aria-hidden="true">#</a></h3><p>\u4E0Eajax\u76F8\u540C\uFF0C\u53EF\u4EE5\u901A\u8FC7CORS\u89E3\u51B3fetch\u7684\u8DE8\u57DF\u95EE\u9898\uFF0C\u670D\u52A1\u5668\u901A\u8FC7<code>Access-Control-Allow-Origin</code>\u54CD\u5E94\u5934\u6765\u5141\u8BB8\u6307\u5B9A\u7684\u6E90\u8FDB\u884C\u8DE8\u57DF\u3002</p><p>\u9664\u6B64\u4E4B\u5916\uFF0Cfetch\u8FD8\u53EF\u4EE5\u901A\u8FC7<code>mode</code>\u914D\u7F6E\u9879\uFF0C\u8BBE\u7F6E\u8BF7\u6C42\u7684\u6A21\u5F0F\uFF0C</p><ul><li>same-origin\uFF0C\u8BE5\u6A21\u5F0F\u4E0D\u5141\u8BB8\u8DE8\u57DF\u7684\uFF0C\u53D1\u9001\u7684\u8BF7\u6C42\u9700\u8981\u9075\u5B88\u540C\u6E90\u7B56\u7565</li><li>cors\uFF0C\u8BE5\u6A21\u5F0F\u652F\u6301\u8DE8\u57DF\u8BF7\u6C42\uFF0C\u987E\u540D\u601D\u4E49\u5B83\u662F\u4EE5CORS\u7684\u5F62\u5F0F\u8DE8\u57DF\uFF1B\u5F53\u7136\u8BE5\u6A21\u5F0F\u4E5F\u652F\u6301\u540C\u57DF\u8BF7\u6C42</li><li>no-cors\uFF0C\u8BE5\u6A21\u5F0F\u7528\u4E8E\u8DE8\u57DF\u8BF7\u6C42\u4F46\u662F\u670D\u52A1\u5668\u4E0D\u5E26CORS\u54CD\u5E94\u5934\uFF0C\u5176\u4F5C\u7528\u662F\u8FD0\u884C\u6D4F\u89C8\u5668\u53D1\u9001\u6B64\u6B21\u8BF7\u6C42\uFF0C\u4F46\u65E0\u6CD5\u8BBF\u95EE\u54CD\u5E94\u7684\u5185\u5BB9\uFF0C\u4E0Eimg\u6807\u7B7E\u7C7B\u4F3C</li></ul><h3 id="\u4F7F\u7528fetch\u5E38\u89C1\u7684\u4E00\u4E9B\u95EE\u9898" tabindex="-1">\u4F7F\u7528fetch\u5E38\u89C1\u7684\u4E00\u4E9B\u95EE\u9898 <a class="header-anchor" href="#\u4F7F\u7528fetch\u5E38\u89C1\u7684\u4E00\u4E9B\u95EE\u9898" aria-hidden="true">#</a></h3><p>\u53C2\u8003: <a href="http://www.cnblogs.com/wonyun/p/fetch_polyfill_timeout_jsonp_cookie_progress.html" target="_blank" rel="noopener noreferrer">fetch\u4F7F\u7528\u7684\u5E38\u89C1\u95EE\u9898\u53CA\u89E3\u51B3\u529E\u6CD5</a></p><p><strong>\u517C\u5BB9\u6027</strong></p><p>fetch\u672C\u8EAB\u5B58\u5728\u6D4F\u89C8\u5668\u517C\u5BB9\u6027\u7684\u95EE\u9898\uFF0C\u6B64\u5916\u7531\u4E8Efetch\u4F9D\u8D56Promise\uFF0C\u800Cpromise\u672C\u8EAB\u4E5F\u5B58\u5728\u517C\u5BB9\u6027\u95EE\u9898\u3002</p><p>\u4E00\u79CD\u5E38\u89C4\u7684fetch-polyfill\u7684\u601D\u8DEF\u662F\uFF1A\u9996\u5148\u5224\u65AD\u6D4F\u89C8\u5668\u662F\u5426\u539F\u751F\u652F\u6301fetch\uFF0C\u5426\u5219\u7ED3\u5408Promise\u4F7F\u7528XMLHttpRequest\u7684\u65B9\u5F0F\u6765\u5B9E\u73B0\u3002</p><p><strong>cookie</strong></p><p>fetch\u53EF\u4EE5\u624B\u52A8\u63A7\u5236\u662F\u5426\u9700\u8981\u5728\u8BF7\u6C42\u4E2D\u643A\u5E26cookie\uFF0C\u624B\u52A8\u914D\u7F6E<code>credentials</code>\uFF0C\u5176\u53D6\u503C\u6709</p><ul><li>omit: <s>\u9ED8\u8BA4\u503C</s>\uFF0C\u5FFD\u7565cookie\u7684\u53D1\u9001</li><li>same-origin: \u8868\u793Acookie\u53EA\u80FD\u540C\u57DF\u53D1\u9001\uFF0C\u4E0D\u80FD\u8DE8\u57DF\u53D1\u9001</li><li>include: cookie\u65E2\u53EF\u4EE5\u540C\u57DF\u53D1\u9001\uFF0C\u4E5F\u53EF\u4EE5\u8DE8\u57DF\u53D1\u9001</li></ul><p>\u6D4B\u8BD5\u53D1\u73B0\u5728Chrome72\u4E2Dcredentials\u7684\u9ED8\u8BA4\u503C\u8C8C\u4F3C\u5DF2\u7ECF\u8C03\u6574\u4E3A<code>same-origin</code></p><p><strong>\u54CD\u5E94\u9519\u8BEF\u7684\u5904\u7406</strong></p><p>fetch\u8FD4\u56DE\u7684\u662F\u4E00\u4E2APromise\uFF0C\u5176\u629B\u51FAreject\u7684\u673A\u5236\u4E3A\uFF1A\u5728\u67D0\u4E9B\u9519\u8BEF\u7684http\u72B6\u6001\u4E0B\u5982400\u3001500\u7B49\u4E0D\u4F1Areject\uFF0C\u76F8\u53CD\u5B83\u4F1A\u88ABresolve\uFF1B\u53EA\u6709\u7F51\u7EDC\u9519\u8BEF\u4F1A\u5BFC\u81F4\u8BF7\u6C42\u4E0D\u80FD\u5B8C\u6210\u65F6\uFF0Cfetch \u624D\u4F1A\u88AB reject\uFF1B\u56E0\u6B64\u9700\u8981\u5728resolve\u505A\u4E00\u5C42\u5224\u65AD</p><div class="language-js"><pre><code><span class="token function">fetch</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">response</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span><span class="token punctuation">(</span>response<span class="token punctuation">.</span>ok<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> response<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&#39;Network response was not ok.&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>error<span class="token punctuation">.</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p><strong>\u4E0D\u652F\u6301timeout\u548Cabort</strong></p><p>fetch\u5E76\u6CA1\u6709\u63D0\u4F9B\u8BF7\u6C42\u8D85\u65F6\u65F6\u95F4\u7684\u914D\u7F6E\u9879\uFF0C\u4E0D\u8FC7\u53EF\u4EE5\u901A\u8FC7\u4E0B\u9762\u601D\u8DEF\u5B9E\u73B0fetch\u7684timeout\u529F\u80FD</p><div class="language-js"><pre><code><span class="token keyword">var</span> oldFetchfn <span class="token operator">=</span> window<span class="token punctuation">.</span>fetch
window<span class="token punctuation">.</span><span class="token function-variable function">fetch</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">url<span class="token punctuation">,</span> opts</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span><span class="token punctuation">{</span>
        <span class="token comment">// \u8D85\u8FC7timeout\u65F6\u95F4\u4ECD\u672A\u54CD\u5E94\uFF0C\u5219\u629B\u51FA\u8D85\u65F6\u7684\u9519\u8BEF</span>
        <span class="token keyword">var</span> timeoutTimer <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            <span class="token function">reject</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&quot;fetch timeout&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> opts<span class="token punctuation">.</span>timeout<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token function">oldFetchfn</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> opts<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>
            <span class="token parameter">res</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
                <span class="token function">clearTimeout</span><span class="token punctuation">(</span>timeoutTimer<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token function">resolve</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token parameter">err</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
                <span class="token function">clearTimeout</span><span class="token punctuation">(</span>timeoutTimer<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token function">reject</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><p>\u6216\u8005\u7B80\u5355\u5B9E\u7528<code>Promise.race[request, timeout]</code>\u6765\u6A21\u62DF\u8D85\u65F6</p><p>\u53E6\u5916\uFF0C\u6839\u636EPromise\u6307\u5BFC\u89C4\u8303\u6807\u51C6\uFF0Cpromise\u5B9E\u4F8B\u662F\u4E0D\u80FDabort\u7684\uFF0C\u8FD9\u8868\u793A\u5728\u901A\u8FC7fetch\u53D1\u9001\u8BF7\u6C42\u4E4B\u540E\uFF0C\u65E0\u6CD5\u4E2D\u65AD\u8BF7\u6C42\uFF0C\u6839\u636E\u4E0A\u9762\u7684\u601D\u8DEF\uFF0C\u6211\u4EEC\u53EF\u4EE5\u624B\u52A8\u5B9E\u73B0abort</p><div class="language-js"><pre><code><span class="token keyword">var</span> oldFetchfn <span class="token operator">=</span> fetch<span class="token punctuation">;</span>
window<span class="token punctuation">.</span><span class="token function-variable function">fetch</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">input<span class="token punctuation">,</span> opts</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">var</span> p <span class="token operator">=</span> <span class="token function">oldFetchfn</span><span class="token punctuation">(</span>input<span class="token punctuation">,</span> opts<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>resolve<span class="token punctuation">,</span> reject<span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        p<span class="token punctuation">.</span><span class="token function-variable function">abort</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">reject</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&quot;fetch abort&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> p<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u5C3D\u7BA1\u4E0A\u9762\u5B9E\u73B0\u4E86\u7C7B\u4F3C\u4E8Etimeout\u548Cabort\u7684\u529F\u80FD\uFF0C\u4F46\u9700\u8981\u6CE8\u610F</p><ul><li>\u8FD9\u91CC\u5B9E\u73B0\u7684timeout\u5E76\u4E0D\u662F\u201C\u8BF7\u6C42\u8FDE\u63A5\u8D85\u65F6\u201D\u7684\u914D\u7F6E\u9879\uFF0C\u800C\u5305\u542B\u4E86\u8BF7\u6C42\u8FDE\u63A5\u3001\u670D\u52A1\u5668\u5904\u7406\u3001\u54CD\u5E94\u56DE\u6765\u76F4\u81F3\u6539\u53D8promise\u72B6\u6001\u7684\u8FD9\u4E00\u6574\u6BB5\u65F6\u95F4</li><li>\u8FD9\u91CC\u5B9E\u73B0\u7684abort\u529F\u80FD\uFF0C\u53EA\u662F\u5FFD\u7565\u4E86\u8FD9\u6B21\u8BF7\u6C42\u7684\u54CD\u5E94\uFF0C\u56E0\u4E3A\u5373\u4F7F\u8C03\u7528abort\uFF0C\u5B9E\u9645\u4E0A\u672C\u6B21\u8BF7\u6C42\u4E5F\u4E0D\u4F1A\u88ABabort\u6389\uFF0C\u4ECD\u65E7\u4F1A\u53D1\u9001\u5230\u670D\u52A1\u7AEF</li></ul><p><strong>\u4E0D\u652F\u6301jsonp</strong></p><p>jsonp\u53EA\u662F\u4E00\u79CD\u5B9E\u73B0\u8DE8\u57DF\u7684\u65B9\u6CD5\uFF0C\u800C\u4E0D\u662Fxhr\u548Cfetch\u8FD9\u6837\u7684\u534F\u8BAE\u3002fetch\u4E0D\u652F\u6301jsonp\u662F\u7406\u6240\u5E94\u5F53\u7684\u3002</p><p><strong>\u4E0D\u652F\u6301\u76D1\u542C\u8FDB\u5EA6</strong></p><p>\u5728xhr\u4E2D\uFF0C\u53EF\u4EE5\u901A\u8FC7\u4E0B\u9762\u65B9\u5F0F\u83B7\u53D6\u8FDB\u5EA6</p><div class="language-js"><pre><code>xhr<span class="token punctuation">.</span>upload<span class="token punctuation">.</span><span class="token function-variable function">onprogress</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span> <span class="token comment">//\u4E0A\u4F20\u7684progress\u4E8B\u4EF6</span>
xhr<span class="token punctuation">.</span><span class="token function-variable function">onprogress</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span> <span class="token comment">//\u4E0B\u8F7D\u7684progress\u4E8B\u4EF6</span>
</code></pre></div><p>\u5728fetch\u5E76\uFF0C\u5E76\u6CA1\u6709\u63D0\u4F9B\u76F8\u5173\u7684\u4E8B\u4EF6\uFF0C\u56E0\u6B64<strong>fetch\u662F\u4E0D\u652F\u6301progress\u7684</strong>\uFF1B\u4E0D\u8FC7\u5728fetch\u4E2D\uFF0C<code>response.body</code>\u662F\u4E00\u4E2A\u53EF\u8BFB\u5B57\u8282\u6D41\u5BF9\u8C61\uFF0C\u56E0\u6B64\u53EF\u4EE5\u7528\u6765\u6A21\u62DFprogresss\uFF0C\u8BE6\u60C5\u53EF\u53C2\u8003<a href="https://jakearchibald.com/2016/streams-ftw/" target="_blank" rel="noopener noreferrer">2016 - the year of web streams</a></p><div class="language-js"><pre><code><span class="token function">fetch</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">response</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> reader <span class="token operator">=</span> response<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">getReader</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">var</span> bytesReceived <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

  reader<span class="token punctuation">.</span><span class="token function">read</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token function">processResult</span><span class="token punctuation">(</span><span class="token parameter">result</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>result<span class="token punctuation">.</span>done<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Fetch complete&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    bytesReceived <span class="token operator">+=</span> result<span class="token punctuation">.</span>value<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Received&#39;</span><span class="token punctuation">,</span> bytesReceived<span class="token punctuation">,</span> <span class="token string">&#39;bytes of data so far&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> reader<span class="token punctuation">.</span><span class="token function">read</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>processResult<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre></div><h2 id="websocket" tabindex="-1">WebSocket <a class="header-anchor" href="#websocket" aria-hidden="true">#</a></h2><h3 id="\u57FA\u7840" tabindex="-1">\u57FA\u7840 <a class="header-anchor" href="#\u57FA\u7840" aria-hidden="true">#</a></h3><p>\u7531\u4E8E http \u5B58\u5728\u4E00\u4E2A\u660E\u663E\u7684\u5F0A\u7AEF\uFF08\u6D88\u606F\u53EA\u80FD\u6709\u5BA2\u6237\u7AEF\u63A8\u9001\u5230\u670D\u52A1\u5668\u7AEF\uFF0C\u800C\u670D\u52A1\u5668\u7AEF\u4E0D\u80FD\u4E3B\u52A8\u63A8\u9001\u5230\u5BA2\u6237\u7AEF\uFF09\uFF0C\u5BFC\u81F4\u5982\u679C\u670D\u52A1\u5668\u5982\u679C\u6709\u8FDE\u7EED\u7684\u53D8\u5316\uFF0C\u8FD9\u65F6\u53EA\u80FD\u4F7F\u7528\u8F6E\u8BE2\uFF0C\u800C\u8F6E\u8BE2\u6548\u7387\u8FC7\u4F4E\uFF0C\u5E76\u4E0D\u9002\u5408\u3002\u4E8E\u662F WebSocket \u88AB\u53D1\u660E\u51FA\u6765\u3002</p><ul><li>\u652F\u6301\u53CC\u5411\u901A\u4FE1\uFF0C\u5B9E\u65F6\u6027\u66F4\u5F3A\uFF1B</li><li>\u53EF\u4EE5\u53D1\u9001\u6587\u672C\uFF0C\u4E5F\u53EF\u4EE5\u4E8C\u8FDB\u5236\u6587\u4EF6\uFF1B</li><li>\u534F\u8BAE\u6807\u8BC6\u7B26\u662F ws\uFF0C\u52A0\u5BC6\u540E\u662F wss \uFF1B</li><li>\u8F83\u5C11\u7684\u63A7\u5236\u5F00\u9500\u3002\u8FDE\u63A5\u521B\u5EFA\u540E\uFF0Cws\u5BA2\u6237\u7AEF\u3001\u670D\u52A1\u7AEF\u8FDB\u884C\u6570\u636E\u4EA4\u6362\u65F6\uFF0C\u534F\u8BAE\u63A7\u5236\u7684\u6570\u636E\u5305\u5934\u90E8\u8F83\u5C0F\u3002\u5728\u4E0D\u5305\u542B\u5934\u90E8\u7684\u60C5\u51B5\u4E0B\uFF0C\u670D\u52A1\u7AEF\u5230\u5BA2\u6237\u7AEF\u7684\u5305\u5934\u53EA\u67092~10\u5B57\u8282\uFF08\u53D6\u51B3\u4E8E\u6570\u636E\u5305\u957F\u5EA6\uFF09\uFF0C\u5BA2\u6237\u7AEF\u5230\u670D\u52A1\u7AEF\u7684\u7684\u8BDD\uFF0C\u9700\u8981\u52A0\u4E0A\u989D\u5916\u76844\u5B57\u8282\u7684\u63A9\u7801\u3002\u800CHTTP\u534F\u8BAE\u6BCF\u6B21\u901A\u4FE1\u90FD\u9700\u8981\u643A\u5E26\u5B8C\u6574\u7684\u5934\u90E8\uFF1B</li><li>\u652F\u6301\u6269\u5C55\u3002ws\u534F\u8BAE\u5B9A\u4E49\u4E86\u6269\u5C55\uFF0C\u7528\u6237\u53EF\u4EE5\u6269\u5C55\u534F\u8BAE\uFF0C\u6216\u8005\u5B9E\u73B0\u81EA\u5B9A\u4E49\u7684\u5B50\u534F\u8BAE\u3002\uFF08\u6BD4\u5982\u652F\u6301\u81EA\u5B9A\u4E49\u538B\u7F29\u7B97\u6CD5\u7B49\uFF09</li><li>\u65E0\u8DE8\u57DF\u95EE\u9898\u3002</li></ul><h3 id="\u4E3A\u4EC0\u4E48websocket\u53EF\u4EE5\u8DE8\u57DF" tabindex="-1">\u4E3A\u4EC0\u4E48websocket\u53EF\u4EE5\u8DE8\u57DF <a class="header-anchor" href="#\u4E3A\u4EC0\u4E48websocket\u53EF\u4EE5\u8DE8\u57DF" aria-hidden="true">#</a></h3><p>websocket\u7684\u8BF7\u6C42\u62A5\u6587\u4E2D\uFF0C\u6709\u4E00\u4E2A\u5B57\u6BB5\u662FOrigin\uFF0C\u8868\u793A\u8BE5\u8BF7\u6C42\u7684\u8BF7\u6C42\u6E90\uFF08origin\uFF09\uFF0C\u5373\u53D1\u81EA\u54EA\u4E2A\u57DF\u540D\u3002\u662F\u56E0\u4E3A\u6709\u4E86Origin\u8FD9\u4E2A\u5B57\u6BB5\uFF0C\u6240\u4EE5\u6D4F\u89C8\u5668\u6CA1\u6709\u5BF9websocket\u6267\u884C\u540C\u6E90\u7B56\u7565\u663E\u793A\uFF0C\u56E0\u4E3A\u670D\u52A1\u5668\u53EF\u4EE5\u6839\u636E\u8FD9\u4E2A\u5B57\u6BB5\uFF0C\u5224\u65AD\u662F\u5426\u8BB8\u53EF\u672C\u6B21\u901A\u4FE1\u3002</p><p>\u90A3\u4E48\uFF0C\u5982\u4F55\u4FDD\u8BC1websocket\u7684\u5B89\u5168\u6027\u5462\uFF1F</p><p>\u4F5C\u4E3A\u4E00\u9879\u65B0\u6280\u672F\uFF0CWebSockets\u65E8\u5728\u4ECE\u4E00\u5F00\u59CB\u5C31\u652F\u6301\u8DE8\u57DF\u573A\u666F\u3002\u4EFB\u4F55\u7F16\u5199\u670D\u52A1\u5668\u903B\u8F91\u7684\u4EBA\u90FD\u5E94\u8BE5\u610F\u8BC6\u5230\u8DE8\u57DF\u8BF7\u6C42\u7684\u53EF\u80FD\u6027\uFF0C\u5E76\u6267\u884C\u5FC5\u8981\u7684\u9A8C\u8BC1\uFF0C\u800C\u65E0\u9700\u4F7F\u7528\u6D4F\u89C8\u5668\u7AEF\u5F3A\u5927\u7684\u540C\u6E90\u7B56\u7565\u3002</p><h2 id="axios" tabindex="-1">Axios <a class="header-anchor" href="#axios" aria-hidden="true">#</a></h2><p>\u4E86\u89E3\u5E38\u7528\u7684\u7F51\u7EDC\u8BF7\u6C42\u6846\u67B6\uFF1Aaxios</p>`,62),e=[o];function c(u,l,i,r,k,d){return a(),s("div",null,e)}var g=n(p,[["render",c]]);export{f as __pageData,g as default};
