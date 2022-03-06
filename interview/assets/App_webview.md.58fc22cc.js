import{_ as e,c as a,o as n,b as s}from"./app.062798f6.js";const b='{"title":"\u901A\u4FE1","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u901A\u4FE1","slug":"\u901A\u4FE1"},{"level":3,"title":"JS\u8C03\u7528\u5BA2\u6237\u7AEF\u65B9\u6CD5","slug":"js\u8C03\u7528\u5BA2\u6237\u7AEF\u65B9\u6CD5"},{"level":3,"title":"\u5BA2\u6237\u7AEF\u8C03\u7528JS\u65B9\u6CD5","slug":"\u5BA2\u6237\u7AEF\u8C03\u7528js\u65B9\u6CD5"},{"level":2,"title":"JSSDK","slug":"jssdk"},{"level":2,"title":"\u5176\u4ED6\u95EE\u9898","slug":"\u5176\u4ED6\u95EE\u9898"},{"level":3,"title":"\u5224\u65AD\u73AF\u5883","slug":"\u5224\u65AD\u73AF\u5883"},{"level":3,"title":"iOS\u4E2D WKWebView \u548C UIWebview","slug":"ios\u4E2D-wkwebview-\u548C-uiwebview"}],"relativePath":"App/webview.md"}',t={},i=s(`<h1 id="webview" tabindex="-1">webview <a class="header-anchor" href="#webview" aria-hidden="true">#</a></h1><p>\u53C2\u8003</p><ul><li><a href="https://juejin.im/post/5cc5adde6fb9a031f4160969" target="_blank" rel="noopener noreferrer">\u79FB\u52A8\u7AEF\u5F00\u53D1\u4E4BJSBridge</a></li><li><a href="http://ju.outofmemory.cn/entry/360590" target="_blank" rel="noopener noreferrer">Hybrid APP\u5F00\u53D1\uFF1AJSSDK</a></li></ul><h2 id="\u901A\u4FE1" tabindex="-1">\u901A\u4FE1 <a class="header-anchor" href="#\u901A\u4FE1" aria-hidden="true">#</a></h2><h3 id="js\u8C03\u7528\u5BA2\u6237\u7AEF\u65B9\u6CD5" tabindex="-1">JS\u8C03\u7528\u5BA2\u6237\u7AEF\u65B9\u6CD5 <a class="header-anchor" href="#js\u8C03\u7528\u5BA2\u6237\u7AEF\u65B9\u6CD5" aria-hidden="true">#</a></h3><p><strong>\u5BA2\u6237\u7AEFAPI\u6CE8\u5165</strong></p><p>API\u6CE8\u5165\u7684\u539F\u7406\uFF1A Native \u83B7\u53D6 JavaScript\u73AF\u5883\u4E0A\u4E0B\u6587\uFF0C\u5E76\u76F4\u63A5\u5728\u4E0A\u9762\u6302\u8F7D\u5BF9\u8C61\u6216\u8005\u65B9\u6CD5\uFF0C\u4F7F js \u53EF\u4EE5\u76F4\u63A5\u8C03\u7528\u3002</p><p>Android \u4E0E IOS \u5206\u522B\u62E5\u6709\u5BF9\u5E94\u7684\u6302\u8F7D\u65B9\u5F0F\uFF0C\u53C2\u8003\u4E4B\u524D\u6574\u7406\u7684\u5BA2\u6237\u7AEF\u6587\u7AE0</p><ul><li><a href="https://www.shymean.com/article/iOS%E5%9F%BA%E7%A1%80%E4%B9%8Bwebview" target="_blank" rel="noopener noreferrer">iOS\u57FA\u7840\u4E4Bwebview</a></li><li><a href="https://www.shymean.com/article/%E5%AE%89%E5%8D%93%E5%85%A5%E9%97%A8%E4%B9%8BWebView" target="_blank" rel="noopener noreferrer">\u5B89\u5353\u5165\u95E8\u4E4BWebView</a></li></ul><p><strong>\u7F51\u7EDC\u62E6\u622A</strong></p><p>WebView\u4F5C\u4E3A\u627F\u8F7DH5\u9875\u9762\u7684\u5BB9\u5668\uFF0C\u6709\u4E00\u4E2A\u7279\u6027\u662F\u975E\u5E38\u91CD\u8981\uFF0C\u5373 \u5B83\u53EF\u4EE5\u6355\u6349\u5230\u6240\u6709\u5728\u5BB9\u5668\u4E2D\u53D1\u8D77\u7684\u7F51\u7EDC\u8BF7\u6C42\u3002\u5176\u5B9E\u60F3\u8981 JS\u5524\u8D77Native \u7684\u65B9\u6CD5\uFF0C\u53EA\u8981\u5EFA\u7ACB\u8D77 JS\u4E0ENative\u901A\u4FE1 \u7684\u6865\u6881\u5373\u53EF\uFF0C\u800C\u8FD9\u4E00\u70B9\u6B63\u597D\u88ABWebView\u7684\u8FD9\u4E00\u7279\u6027\u6240\u5B9E\u73B0\u3002</p><p>\u5728\u7F51\u9875\u4E2D\u53EF\u4EE5\u901A\u8FC7 <strong>\u53D1\u8D77\u7F51\u7EDC\u8BF7\u6C42\u6765\u5411Native\u7AEF\u4F20\u9012\u6D88\u606F</strong>\uFF0C\u4E00\u822C\u901A\u8FC7<code>iframe.src</code>\u53D1\u8D77\u7F51\u7EDC\u8BF7\u6C42\uFF0CNative\u7AEF\u5728\u6355\u6349\u5230\u7EA6\u5B9A\u534F\u8BAE\u5934\uFF08Schema\uFF09\u7684\u8BF7\u6C42\u65F6\uFF0C\u4F1A\u8FDB\u884C\u89E3\u6790\u7136\u540E\u8C03\u7528\u5BF9\u5E94\u7684\u65B9\u6CD5\uFF0C\u540C\u65F6\u53EF\u4EE5\u5728url\u4E0A\u643A\u5E26\u4E00\u4E9B\u53C2\u6570\u3002</p><h3 id="\u5BA2\u6237\u7AEF\u8C03\u7528js\u65B9\u6CD5" tabindex="-1">\u5BA2\u6237\u7AEF\u8C03\u7528JS\u65B9\u6CD5 <a class="header-anchor" href="#\u5BA2\u6237\u7AEF\u8C03\u7528js\u65B9\u6CD5" aria-hidden="true">#</a></h3><p>\u8003\u8651\u4EE5\u4E0B\u573A\u666F</p><ul><li>\u5728\u5524\u8D77Native\u65B9\u6CD5\u540E\uFF0C\u5F80\u5F80\u8FD8\u9700\u8981\u6267\u884C\u4E00\u4E9B\u56DE\u8C03\uFF0C\uFF08\u5982\u5BA2\u6237\u7AEF\u9700\u8981\u628A\u6570\u636E\u901A\u8FC7\u56DE\u8C03\u51FD\u6570\u7684\u5F62\u5F0F\u901A\u77E5JS\uFF09</li><li>JS\u9700\u8981\u66B4\u9732\u4E00\u4E9B\u63A5\u53E3\u7ED9\u5BA2\u6237\u7AEF\uFF0C\u5E76\u5728\u5408\u9002\u7684\u65F6\u673A\u8C03\u7528\uFF08\u5982\u70B9\u51FB\u8FD4\u56DE\u4E0A\u4E00\u9875\u6309\u94AE\u65F6\uFF09</li></ul><p>\u53EF\u4EE5\u5C06\u56DE\u8C03\u65B9\u6CD5\u6302\u8F7D\u5728\u7EA6\u5B9A\u7684\u5168\u5C40\u53D8\u91CF\u4E0A\uFF0C\u4E4B\u540E\u5BA2\u6237\u7AEF\u8C03\u7528JavaScript\u5168\u5C40\u53D8\u91CF\u4E0A\u7684\u56DE\u8C03\u65B9\u6CD5\u5C31\u53EF\u4EE5\u4E86\u3002</p><p>android</p><div class="language-java"><pre><code>webview<span class="token punctuation">.</span><span class="token function">loadUrl</span><span class="token punctuation">(</span><span class="token string">&quot;javascript:alert(&#39;Hello from ios&#39;);&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u53EF\u4EE5\u8C03\u7528JavaScript\u7684\u5168\u5C40\u5BF9\u8C61</span>
</code></pre></div><p>iOS</p><div class="language-c"><pre><code><span class="token punctuation">[</span>webView evaluateJavaScript<span class="token operator">:</span>@<span class="token string">&quot;document.body.style.backgroundColor = &#39;blue&#39;&quot;</span> completionHandler<span class="token operator">:</span><span class="token operator">^</span><span class="token punctuation">(</span>id result<span class="token punctuation">,</span> NSError <span class="token operator">*</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">NSLog</span><span class="token punctuation">(</span>@<span class="token string">&quot;Result %@&quot;</span><span class="token punctuation">,</span> result<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="jssdk" tabindex="-1">JSSDK <a class="header-anchor" href="#jssdk" aria-hidden="true">#</a></h2><p>\u4E00\u822C\u4F1A\u5C06\u4E0A\u9762JavaScript\u4E0E\u5BA2\u6237\u7AEF\u7684\u901A\u4FE1\u8FDB\u884C\u5C01\u88C5\uFF0C\u4E3B\u8981\u4E3A\u4E86</p><ul><li>\u62B9\u5E73JSBridge\u7684\u5E73\u53F0\u5B9E\u73B0\u5DEE\u5F02</li><li>\u5BF9\u9F50\u7AEF\u80FD\u529B\uFF0C\u5185\u90E8\u6D88\u5316\u7248\u672C\u5DEE\u5F02</li><li>sdk\u5C01\u88C5\u540E\u7684\u4EE3\u7801\u66F4\u52A0\u7B26\u5408\u524D\u7AEF\u4E60\u60EF</li><li>\u6743\u9650\u63A7\u5236\u3001\u9274\u6743\u3001\u5BF9\u5916\u5F00\u653E\uFF0C\u5B9E\u73B0\u751F\u6001\u5EFA\u8BBE</li></ul><h2 id="\u5176\u4ED6\u95EE\u9898" tabindex="-1">\u5176\u4ED6\u95EE\u9898 <a class="header-anchor" href="#\u5176\u4ED6\u95EE\u9898" aria-hidden="true">#</a></h2><h3 id="\u5224\u65AD\u73AF\u5883" tabindex="-1">\u5224\u65AD\u73AF\u5883 <a class="header-anchor" href="#\u5224\u65AD\u73AF\u5883" aria-hidden="true">#</a></h3><p>\u6211\u4EEC\u53EF\u80FD\u9700\u8981\u5224\u65AD\u5F53\u524D\u9875\u9762\u8FD0\u884C\u5728\u54EA\u4E2A\u5E73\u53F0\u6216\u8005\u662F\u6D4F\u89C8\u5668\u4E0B\uFF0C\u53EF\u4EE5\u901A\u8FC7<code>user-agent</code>\u8FDB\u884C\u5224\u65AD\u5224\u65AD</p><h3 id="ios\u4E2D-wkwebview-\u548C-uiwebview" tabindex="-1">iOS\u4E2D WKWebView \u548C UIWebview <a class="header-anchor" href="#ios\u4E2D-wkwebview-\u548C-uiwebview" aria-hidden="true">#</a></h3><p>\u53C2\u8003\uFF1A</p><ul><li><a href="https://www.jianshu.com/p/79e329ff8953" target="_blank" rel="noopener noreferrer">WKWebView\u548CUIWebView\u5BF9\u6BD4</a></li></ul>`,29),r=[i];function o(p,l,c,u,d,h){return n(),a("div",null,r)}var v=e(t,[["render",o]]);export{b as __pageData,v as default};