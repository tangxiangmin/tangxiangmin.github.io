import{_ as n,c as s,o as a,b as p}from"./app.062798f6.js";const y='{"title":"\u57FA\u672C\u4F7F\u7528","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u57FA\u672C\u4F7F\u7528","slug":"\u57FA\u672C\u4F7F\u7528"},{"level":2,"title":"\u62E6\u622A\u5668","slug":"\u62E6\u622A\u5668"},{"level":2,"title":"\u53D6\u6D88\u8BF7\u6C42","slug":"\u53D6\u6D88\u8BF7\u6C42"}],"relativePath":"\u6E90\u7801\u5206\u6790/axios\u6E90\u7801\u5206\u6790.md"}',t={},o=p(`<h2 id="\u57FA\u672C\u4F7F\u7528" tabindex="-1">\u57FA\u672C\u4F7F\u7528 <a class="header-anchor" href="#\u57FA\u672C\u4F7F\u7528" aria-hidden="true">#</a></h2><p>\u4E86\u89E3\u4E00\u6B3E\u5E38\u89C1\u7684\u7F51\u7EDC\u6846\u67B6\u539F\u7406<code>axios</code>\uFF0C\u901A\u8FC7<strong>\u9002\u914D\u5668\u6A21\u5F0F</strong>\uFF0C\u5728\u6D4F\u89C8\u5668\u5C01\u88C5<code>xhr</code>\uFF0C\u5728node\u5C01\u88C5<code>http</code>\u6A21\u5757\uFF0C\u4E0A\u5C42\u7684\u8C03\u7528\u4FDD\u6301\u4E00\u81F4\u3002</p><p>\u9700\u8981\u638C\u63E1</p><ul><li>\u8BF7\u6C42\u62E6\u622A\u5668\u548C\u54CD\u5E94\u62E6\u622A\u5668\u7684\u5B9E\u73B0</li><li>\u57FA\u4E8Eaxios\u8FDB\u884C\u4E8C\u6B21\u5C01\u88C5\uFF0C\u5B9E\u73B0\u4E1A\u52A1\u7279\u5B9A\u9700\u6C42</li><li>\u5E76\u53D1\u9650\u5236</li><li>\u7528\u6237\u9274\u6743\u8BA4\u8BC1\u3001JWT</li></ul><p>\u5E38\u89C1\u95EE\u9898</p><ul><li>\u5982\u4F55\u53D6\u6D88\u8BF7\u6C42\uFF1A\u6784\u9020cancelToken\u7136\u540E\u4F20\u5165\u8BF7\u6C42\u914D\u7F6E\u53C2\u6570\uFF0C\u7136\u540E\u53EF\u4EE5\u5728\u53D1\u9001\u8BF7\u6C42\u4E4B\u524D\u624B\u52A8\u8C03\u7528\u8BE5CancelToken\u5BF9\u8C61\u7684calcel\u65B9\u6CD5\u6765\u629B\u51FA\u5F02\u5E38\uFF0C\u53D6\u6D88\u672C\u6B21\u8BF7\u6C42\uFF0CPromise\u672C\u8EAB\u662F\u65E0\u6CD5\u53D6\u6D88\u7684</li><li>\u62E6\u622A\u5668\u662F\u5982\u4F55\u5B9E\u73B0\u7684\uFF1A\u5148\u6784\u9020\u4E00\u4E2A\u961F\u5217\uFF0C\u5C06\u8BF7\u6C42\u62E6\u622A\u5668\u4F9D\u6B21\u653E\u5728\u961F\u5217\u5934\u90E8\uFF0C\u54CD\u5E94\u62E6\u622A\u5668\u4E00\u6B21\u653E\u5728\u961F\u5217\u5C3E\u90E8\uFF0C\u4E2D\u95F4\u662F<code>dispatchRequest</code>\u65B9\u6CD5\uFF0C\u7136\u540E\u5C06\u8BE5\u961F\u5217\u6784\u9020\u4E3Apromise\u94FE\u5F0F\u8C03\u7528\u3002</li></ul><h2 id="\u62E6\u622A\u5668" tabindex="-1">\u62E6\u622A\u5668 <a class="header-anchor" href="#\u62E6\u622A\u5668" aria-hidden="true">#</a></h2><p>\u6784\u9020\u51FD\u6570</p><div class="language-js"><pre><code><span class="token keyword">function</span> <span class="token function">Axios</span><span class="token punctuation">(</span><span class="token parameter">instanceConfig</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>defaults <span class="token operator">=</span> instanceConfig<span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>interceptors <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">request</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">InterceptorManager</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">response</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">InterceptorManager</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u7136\u540E\u6765\u770B\u770B<code>InterceptorManager</code>\u8FD9\u4E2A\u62E6\u622A\u5668\u7BA1\u7406\u7C7B</p><div class="language-js"><pre><code><span class="token keyword">function</span> <span class="token function">InterceptorManager</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>handlers <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// \u6DFB\u52A0\u62E6\u622A\u5668</span>
<span class="token class-name">InterceptorManager</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">use</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token function">use</span><span class="token punctuation">(</span><span class="token parameter">fulfilled<span class="token punctuation">,</span> rejected</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>handlers<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">fulfilled</span><span class="token operator">:</span> fulfilled<span class="token punctuation">,</span>
    <span class="token literal-property property">rejected</span><span class="token operator">:</span> rejected
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>handlers<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">// \u53D6\u6D88\u62E6\u622A\u5668</span>
<span class="token class-name">InterceptorManager</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">eject</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token function">eject</span><span class="token punctuation">(</span><span class="token parameter">id</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>handlers<span class="token punctuation">[</span>id<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>handlers<span class="token punctuation">[</span>id<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">// \u904D\u5386\u62E6\u622A\u5668</span>
<span class="token class-name">InterceptorManager</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">forEach</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">fn</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  utils<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>handlers<span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token function">forEachHandler</span><span class="token punctuation">(</span><span class="token parameter">h</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>h <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">fn</span><span class="token punctuation">(</span>h<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><p>\u6838\u5FC3\u65B9\u6CD5<code>Axios.prototype.request </code></p><div class="language-js"><pre><code><span class="token class-name">Axios</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">request</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token function">request</span><span class="token punctuation">(</span><span class="token parameter">config</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// ...\u521D\u59CB\u5316\u914D\u7F6E</span>
  
	<span class="token comment">// \u6784\u5EFA\u4EFB\u52A1\u94FE</span>
  <span class="token keyword">var</span> chain <span class="token operator">=</span> <span class="token punctuation">[</span>dispatchRequest<span class="token punctuation">,</span> <span class="token keyword">undefined</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">var</span> promise <span class="token operator">=</span> Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token comment">// \u6CE8\u518C\u8BF7\u6C42\u62E6\u622A\u5668</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>request<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token function">unshiftRequestInterceptors</span><span class="token punctuation">(</span><span class="token parameter">interceptor</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    chain<span class="token punctuation">.</span><span class="token function">unshift</span><span class="token punctuation">(</span>interceptor<span class="token punctuation">.</span>fulfilled<span class="token punctuation">,</span> interceptor<span class="token punctuation">.</span>rejected<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token comment">// \u6CE8\u518C\u54CD\u5E94\u62E6\u622A\u5668</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>response<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token function">pushResponseInterceptors</span><span class="token punctuation">(</span><span class="token parameter">interceptor</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    chain<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>interceptor<span class="token punctuation">.</span>fulfilled<span class="token punctuation">,</span> interceptor<span class="token punctuation">.</span>rejected<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">while</span> <span class="token punctuation">(</span>chain<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    promise <span class="token operator">=</span> promise<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>chain<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> chain<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> promise<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><p>\u7406\u89E3\u62E6\u622A\u5668\u4E5F\u5341\u5206\u5BB9\u6613\u4E86</p><div class="language-js"><pre><code>
<span class="token comment">// \u539F\u59CB\u7684\u63A5\u53E3</span>
<span class="token keyword">function</span> <span class="token function">dispatchRequest</span><span class="token punctuation">(</span><span class="token parameter">config</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">params</span><span class="token operator">:</span> config<span class="token punctuation">,</span>
        <span class="token literal-property property">code</span><span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span>
        <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token string">&quot;hello response&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// \u7701\u7565\u5B9E\u9645\u63A5\u53E3\u8BF7\u6C42\u903B\u8F91</span>
    <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">var</span> chain <span class="token operator">=</span> <span class="token punctuation">[</span>dispatchRequest<span class="token punctuation">,</span> <span class="token keyword">undefined</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">// \u8BF7\u6C42\u914D\u7F6E</span>
<span class="token keyword">var</span> config <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">headers</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">&#39;x-token&#39;</span><span class="token operator">:</span> <span class="token string">&#39;xxxx12token&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">params</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">1</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> promise <span class="token operator">=</span> Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> interceptors <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">request</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token function">fulfilled</span><span class="token punctuation">(</span><span class="token parameter">config</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">return</span> config<span class="token punctuation">;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token function">rejected</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;request reject&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">response</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token function">fulfilled</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token function">rejected</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;response reject&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

interceptors<span class="token punctuation">.</span>request<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token function">unshiftRequestInterceptors</span><span class="token punctuation">(</span>
     <span class="token parameter">interceptor</span>
 <span class="token punctuation">)</span> <span class="token punctuation">{</span>
     chain<span class="token punctuation">.</span><span class="token function">unshift</span><span class="token punctuation">(</span>interceptor<span class="token punctuation">.</span>fulfilled<span class="token punctuation">,</span> interceptor<span class="token punctuation">.</span>rejected<span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

interceptors<span class="token punctuation">.</span>response<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token function">pushResponseInterceptors</span><span class="token punctuation">(</span>
     <span class="token parameter">interceptor</span>
 <span class="token punctuation">)</span> <span class="token punctuation">{</span>
     chain<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>interceptor<span class="token punctuation">.</span>fulfilled<span class="token punctuation">,</span> interceptor<span class="token punctuation">.</span>rejected<span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">while</span> <span class="token punctuation">(</span>chain<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    promise <span class="token operator">=</span> promise<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>chain<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> chain<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

promise<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><h2 id="\u53D6\u6D88\u8BF7\u6C42" tabindex="-1">\u53D6\u6D88\u8BF7\u6C42 <a class="header-anchor" href="#\u53D6\u6D88\u8BF7\u6C42" aria-hidden="true">#</a></h2><p>\u9700\u8981\u4E86\u89E3<code>cancelable promises proposal</code>\uFF0C\u76EE\u524D\u8BE5\u63D0\u6848\u5DF2\u88AB\u53D6\u6D88\uFF0CPromise\u662F\u4E0D\u80FD\u88AB\u53D6\u6D88\u7684\uFF0C\u90A3\u4E48axios\u662F\u5982\u4F55\u5B9E\u73B0\u53D6\u6D88\u8BF7\u6C42\u7684\u5462\uFF1F</p><p>\u67E5\u770B<a href="https://www.kancloud.cn/yunye/axios/234845" target="_blank" rel="noopener noreferrer">\u6587\u6863\u793A\u4F8B</a>\uFF0C\u53EF\u4EE5\u4F7F\u7528\u4E0B\u9762\u4E24\u79CD\u65B9\u5F0F\u53D6\u6D88</p><div class="language-js"><pre><code><span class="token keyword">var</span> CancelToken <span class="token operator">=</span> axios<span class="token punctuation">.</span>CancelToken<span class="token punctuation">;</span>
<span class="token keyword">var</span> source <span class="token operator">=</span> CancelToken<span class="token punctuation">.</span><span class="token function">source</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

axios<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/user/12345&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">cancelToken</span><span class="token operator">:</span> source<span class="token punctuation">.</span>token
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">thrown</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>axios<span class="token punctuation">.</span><span class="token function">isCancel</span><span class="token punctuation">(</span>thrown<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Request canceled&#39;</span><span class="token punctuation">,</span> thrown<span class="token punctuation">.</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u5904\u7406\u9519\u8BEF</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u53D6\u6D88\u8BF7\u6C42\uFF08message \u53C2\u6570\u662F\u53EF\u9009\u7684\uFF09</span>
<span class="token comment">// \u4F7F\u7528\u540C\u4E00\u4E2A cancel token \u53D6\u6D88\u591A\u4E2A\u8BF7\u6C42</span>
source<span class="token punctuation">.</span><span class="token function">cancel</span><span class="token punctuation">(</span><span class="token string">&#39;Operation canceled by the user.&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>\u4E5F\u53EF\u4EE5\u4F7F\u7528\u4E0B\u9762\u65B9\u5F0F</p><div class="language-js"><pre><code><span class="token keyword">var</span> CancelToken <span class="token operator">=</span> axios<span class="token punctuation">.</span>CancelToken<span class="token punctuation">;</span>
<span class="token keyword">var</span> cancel<span class="token punctuation">;</span>

axios<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/user/12345&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">cancelToken</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">CancelToken</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token function">executor</span><span class="token punctuation">(</span><span class="token parameter">c</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// executor \u51FD\u6570\u63A5\u6536\u4E00\u4E2A cancel \u51FD\u6570\u4F5C\u4E3A\u53C2\u6570</span>
    cancel <span class="token operator">=</span> c<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u53D6\u6D88\u8BF7\u6C42</span>
<span class="token function">cancel</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>\u67E5\u770B<code>CancelToken</code>\u6E90\u7801</p><div class="language-js"><pre><code><span class="token keyword">function</span> <span class="token function">CancelToken</span><span class="token punctuation">(</span><span class="token parameter">executor</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> executor <span class="token operator">!==</span> <span class="token string">&#39;function&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">TypeError</span><span class="token punctuation">(</span><span class="token string">&#39;executor must be a function.&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">var</span> resolvePromise<span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>promise <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token function">promiseExecutor</span><span class="token punctuation">(</span><span class="token parameter">resolve</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    resolvePromise <span class="token operator">=</span> resolve<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">var</span> token <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
  <span class="token function">executor</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token function">cancel</span><span class="token punctuation">(</span><span class="token parameter">message</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>token<span class="token punctuation">.</span>reason<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// Cancellation has already been requested</span>
      <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
		<span class="token comment">// \u8BBE\u7F6Ereason</span>
    token<span class="token punctuation">.</span>reason <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Cancel</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">resolvePromise</span><span class="token punctuation">(</span>token<span class="token punctuation">.</span>reason<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token class-name">CancelToken</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">throwIfRequested</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token function">throwIfRequested</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>reason<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">throw</span> <span class="token keyword">this</span><span class="token punctuation">.</span>reason<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><p>\u53EF\u89C1\u770B\u89C1\uFF0C\u5982\u679C\u8C03\u7528\u4E86\u4F20\u5165<code>executor</code>\u7684<code>cancel</code>\u65B9\u6CD5\uFF0C\u5728\u540E\u7EED\u7684<code>dispatchRequest</code>\u4E2D\u4F1A\u5224\u65AD\u662F\u5426\u5B58\u5728<code>reason</code>\u6765\u51B3\u5B9A\u662F\u5426\u53D6\u6D88\u672C\u6B21\u8BF7\u6C42\u3002</p><p>\u67E5\u770B\u53D1\u9001\u8BF7\u6C42\u7684\u6E90\u7801<code>dispatchRequest</code></p><div class="language-js"><pre><code><span class="token keyword">function</span> <span class="token function">throwIfCancellationRequested</span><span class="token punctuation">(</span><span class="token parameter">config</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>config<span class="token punctuation">.</span>cancelToken<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    config<span class="token punctuation">.</span>cancelToken<span class="token punctuation">.</span><span class="token function">throwIfRequested</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">dispatchRequest</span><span class="token punctuation">(</span><span class="token parameter">config</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u5224\u65AD\u662F\u5426cancelToken\u662F\u5426\u5DF2\u7ECF\u6267\u884C\u4E86cancel\u65B9\u6CD5\uFF0C\u5982\u679C\u5DF2\u6267\u884C\uFF0C\u5219\u629B\u51FA\u5F02\u5E38\u7EC8\u6B62\u540E\u7EED\u7684promise</span>
  <span class="token function">throwIfCancellationRequested</span><span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// ...\u7F51\u8DEF\u8BF7\u6C42\u903B\u8F91</span>
  <span class="token keyword">return</span> <span class="token function">adapter</span><span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token function">onAdapterResolution</span><span class="token punctuation">(</span><span class="token parameter">response</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">throwIfCancellationRequested</span><span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// ...</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token function">throwIfCancellationRequested</span><span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// ...</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div>`,26),c=[o];function e(u,l,k,i,r,d){return a(),s("div",null,c)}var h=n(t,[["render",e]]);export{y as __pageData,h as default};
