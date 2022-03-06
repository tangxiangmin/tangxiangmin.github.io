import{_ as n,c as s,o as a,b as t}from"./app.4b5e9613.js";const f='{"title":"redux","description":"","frontmatter":{},"headers":[{"level":2,"title":"redux","slug":"redux"},{"level":3,"title":"createStore","slug":"createstore"},{"level":3,"title":"combineReducers","slug":"combinereducers"},{"level":3,"title":"bindActionCreators","slug":"bindactioncreators"},{"level":3,"title":"applyMiddleware","slug":"applymiddleware"},{"level":2,"title":"redux-thunk","slug":"redux-thunk"},{"level":2,"title":"redux-saga","slug":"redux-saga"}],"relativePath":"\u6E90\u7801\u5206\u6790/Redux\u6E90\u7801\u5206\u6790.md"}',p={},o=t(`<h1 id="redux\u6E90\u7801\u5206\u6790" tabindex="-1">redux\u6E90\u7801\u5206\u6790 <a class="header-anchor" href="#redux\u6E90\u7801\u5206\u6790" aria-hidden="true">#</a></h1><h2 id="redux" tabindex="-1">redux <a class="header-anchor" href="#redux" aria-hidden="true">#</a></h2><p>redux\u672C\u8EAB\u53EA\u63D0\u4F9B\u4E86\u51E0\u4E2A\u63A5\u53E3</p><ul><li><code>createStore</code>\uFF0C\u63A5\u6536<code>reducer</code>\u5E76\u521B\u5EFA\u4E00\u4E2Astore\u4ED3\u5E93</li><li><code>store.dispatch</code>\uFF0C\u63D0\u4EA4<code>action</code></li><li><code>store.getState</code>\uFF0C\u83B7\u53D6\u5F53\u524D\u7684<code>state</code></li></ul><div class="language-js"><pre><code><span class="token keyword">const</span> <span class="token punctuation">[</span><span class="token constant">ADD</span><span class="token punctuation">,</span> <span class="token constant">MINUS</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> <span class="token function-variable function">reducer</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">currentState<span class="token punctuation">,</span> action</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> newState <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> currentState<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">const</span> <span class="token punctuation">{</span>type<span class="token punctuation">,</span> payload<span class="token punctuation">}</span> <span class="token operator">=</span> action
    <span class="token keyword">switch</span> <span class="token punctuation">(</span>type<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">case</span> <span class="token constant">ADD</span><span class="token operator">:</span>
            newState<span class="token punctuation">.</span>count <span class="token operator">+=</span> payload<span class="token punctuation">;</span>
            <span class="token keyword">return</span> newState<span class="token punctuation">;</span>
        <span class="token keyword">case</span> <span class="token constant">MINUS</span><span class="token operator">:</span>
            <span class="token constant">ADD</span><span class="token punctuation">;</span>
            newState<span class="token punctuation">.</span>count <span class="token operator">-=</span> payload<span class="token punctuation">;</span>
            <span class="token keyword">return</span> newState<span class="token punctuation">;</span>
        <span class="token keyword">default</span><span class="token operator">:</span>
            <span class="token keyword">return</span> currentState<span class="token punctuation">;</span>
            <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> initState <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">0</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> store <span class="token operator">=</span> Redux<span class="token punctuation">.</span><span class="token function">createStore</span><span class="token punctuation">(</span>reducer<span class="token punctuation">,</span> initState<span class="token punctuation">)</span><span class="token punctuation">;</span>

store<span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;stateChange&quot;</span><span class="token punctuation">,</span> store<span class="token punctuation">.</span><span class="token function">getState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

addBtn<span class="token punctuation">.</span><span class="token function-variable function">onclick</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    store<span class="token punctuation">.</span><span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token constant">ADD</span><span class="token punctuation">,</span> <span class="token literal-property property">payload</span><span class="token operator">:</span> <span class="token number">10</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
minusBtn<span class="token punctuation">.</span><span class="token function-variable function">onclick</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    store<span class="token punctuation">.</span><span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token constant">MINUS</span><span class="token punctuation">,</span> <span class="token literal-property property">payload</span><span class="token operator">:</span> <span class="token number">3</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><p>\u6570\u636E\u662F\u5355\u5411\u6D41\u52A8\u7684</p><div class="language-"><pre><code>getState()-&gt;\u521D\u59CB\u5316\u89C6\u56FE-&gt;\u7528\u6237\u4EA4\u4E92\u89E6\u53D1\u4E8B\u4EF6-&gt;dispatch\u63D0\u4EA4action
-&gt;reducer\u6839\u636Eaction\u66F4\u65B0state-&gt;\u901A\u77E5\`subscribe\`\u8BA2\u9605\u8005\u66F4\u65B0-&gt;getState\u83B7\u53D6\u6700\u65B0\u7684state
</code></pre></div><h3 id="createstore" tabindex="-1">createStore <a class="header-anchor" href="#createstore" aria-hidden="true">#</a></h3><p>\u5927\u81F4\u5C31\u662F\u4E00\u4E2A\u53D1\u5E03\u8BA2\u9605\u6A21\u578B\uFF1A\u5728dispatch\u65F6\u6267\u884C\u6CE8\u518C\u7684reducer\u51FD\u6570\uFF0C\u7136\u540E\u901A\u77E5\u5728<code>subscribe</code>\u6CE8\u518C\u7684\u56DE\u8C03\u51FD\u6570</p><div class="language-js"><pre><code><span class="token comment">// preloadedState \u8868\u793A\u5F53\u524D\u7684state</span>
<span class="token comment">// enhancer\u8868\u793A\u6269\u5C55createStore</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">createStore</span><span class="token punctuation">(</span><span class="token parameter">reducer<span class="token punctuation">,</span> preloadedState<span class="token punctuation">,</span> enhancer</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u8FDB\u884C\u4E86\u4E00\u4E9B\u53C2\u6570\u7C7B\u578B\u7684\u68C0\u6D4B \u5904\u7406preloadedState\u548Cenhancer</span>

  <span class="token comment">// \u901A\u8FC7\u95ED\u5305\u7EF4\u62A4\u4E0B\u9762\u7684\u53D8\u91CF</span>
  <span class="token keyword">let</span> currentReducer <span class="token operator">=</span> reducer
  <span class="token keyword">let</span> currentState <span class="token operator">=</span> preloadedState
  <span class="token keyword">let</span> currentListeners <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token keyword">let</span> nextListeners <span class="token operator">=</span> currentListeners
  <span class="token keyword">let</span> isDispatching <span class="token operator">=</span> <span class="token boolean">false</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> enhancer <span class="token operator">==</span> <span class="token string">&#39;function&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// enhancer\u53EF\u4EE5\u662FRedux.applyMiddleware()\u7B49\u65B9\u6CD5\u8FD4\u56DE\u7684\u589E\u5F3A\u7248createStore</span>
    <span class="token keyword">return</span> <span class="token function">enhancer</span><span class="token punctuation">(</span>createStore<span class="token punctuation">)</span><span class="token punctuation">(</span>reducer<span class="token punctuation">,</span> preloadedState<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">function</span> <span class="token function">ensureCanMutateNextListeners</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>nextListeners <span class="token operator">===</span> currentListeners<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      nextListeners <span class="token operator">=</span> currentListeners<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// \u8FD4\u56DE\u5F53\u524Dstate</span>
  <span class="token keyword">function</span> <span class="token function">getState</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>isDispatching<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> currentState
  <span class="token punctuation">}</span>

  <span class="token keyword">function</span> <span class="token function">subscribe</span><span class="token punctuation">(</span><span class="token parameter">listener</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>isDispatching<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">let</span> isSubscribed <span class="token operator">=</span> <span class="token boolean">true</span>

    <span class="token function">ensureCanMutateNextListeners</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    nextListeners<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>listener<span class="token punctuation">)</span>
    
    <span class="token comment">// \u8FD4\u56DE\u4E00\u4E2A\u53D6\u6D88\u8BA2\u9605\u7684\u65B9\u6CD5</span>
    <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token function">unsubscribe</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>isSubscribed<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span>
      <span class="token punctuation">}</span>

      isSubscribed <span class="token operator">=</span> <span class="token boolean">false</span>

      <span class="token function">ensureCanMutateNextListeners</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token keyword">const</span> index <span class="token operator">=</span> nextListeners<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>listener<span class="token punctuation">)</span>
      nextListeners<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span>index<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
      currentListeners <span class="token operator">=</span> <span class="token keyword">null</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// \u63D0\u4EA4action\uFF0C\u8FD9\u662F\u4FEE\u6539state\u7684\u552F\u4E00\u65B9\u6CD5</span>
  <span class="token keyword">function</span> <span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token parameter">action</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u7C7B\u578B\u68C0\u6D4B\u4FDD\u8BC1action\u662F\u4E00\u4E2A\u643A\u5E26type\u5C5E\u6027\u7684\u5BF9\u8C61</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>isDispatching<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&#39;Reducers may not dispatch actions.&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">try</span> <span class="token punctuation">{</span>
      isDispatching <span class="token operator">=</span> <span class="token boolean">true</span>
      <span class="token comment">// \u8C03\u7528reducer\uFF0C\u5E76\u4F20\u5165currentState\u548Caction</span>
      currentState <span class="token operator">=</span> <span class="token function">currentReducer</span><span class="token punctuation">(</span>currentState<span class="token punctuation">,</span> action<span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
      isDispatching <span class="token operator">=</span> <span class="token boolean">false</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// \u901A\u77E5\u8BA2\u9605\u8005\u6267\u884C\u56DE\u8C03</span>
    <span class="token keyword">const</span> listeners <span class="token operator">=</span> <span class="token punctuation">(</span>currentListeners <span class="token operator">=</span> nextListeners<span class="token punctuation">)</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> listeners<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> listener <span class="token operator">=</span> listeners<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
      <span class="token function">listener</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> action
  <span class="token punctuation">}</span>

  <span class="token comment">// \u4FEE\u6539reducer\uFF0C\u4E00\u822C\u60C5\u51B5\u4E0B\u8F83\u5C11\u7528\u5230</span>
  <span class="token keyword">function</span> <span class="token function">replaceReducer</span><span class="token punctuation">(</span><span class="token parameter">nextReducer</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> nextReducer <span class="token operator">!==</span> <span class="token string">&#39;function&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&#39;Expected the nextReducer to be a function.&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    currentReducer <span class="token operator">=</span> nextReducer
    <span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> ActionTypes<span class="token punctuation">.</span><span class="token constant">REPLACE</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// react observable</span>
  <span class="token keyword">function</span> <span class="token function">observable</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> outerSubscribe <span class="token operator">=</span> subscribe
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token function">subscribe</span><span class="token punctuation">(</span><span class="token parameter">observer</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> observer <span class="token operator">!==</span> <span class="token string">&#39;object&#39;</span> <span class="token operator">||</span> observer <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">TypeError</span><span class="token punctuation">(</span><span class="token string">&#39;Expected the observer to be an object.&#39;</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">function</span> <span class="token function">observeState</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span>observer<span class="token punctuation">.</span>next<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            observer<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token function">getState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>

        <span class="token function">observeState</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">const</span> unsubscribe <span class="token operator">=</span> <span class="token function">outerSubscribe</span><span class="token punctuation">(</span>observeState<span class="token punctuation">)</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span> unsubscribe <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>

      <span class="token punctuation">[</span>$$observable<span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

 
  <span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> ActionTypes<span class="token punctuation">.</span><span class="token constant">INIT</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
	<span class="token comment">// \u8FD4\u56DEstore\u7684\u4E00\u4E9B\u65B9\u6CD5</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    dispatch<span class="token punctuation">,</span>
    subscribe<span class="token punctuation">,</span>
    getState<span class="token punctuation">,</span>
    replaceReducer<span class="token punctuation">,</span>
    <span class="token punctuation">[</span>$$observable<span class="token punctuation">]</span><span class="token operator">:</span> observable
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre></div><p>\u5F53\u9700\u8981\u5904\u7406\u7684action\u8FC7\u591A\u65F6\uFF0Creducer\u5C31\u4F1A\u975E\u5E38\u5E9E\u5927\uFF0C\u53EF\u4EE5\u901A\u8FC7<code>combineReducers</code>\u5C06\u591A\u4E2Areducer\u5408\u5E76\u6210\u4E00\u4E2A</p><h3 id="combinereducers" tabindex="-1">combineReducers <a class="header-anchor" href="#combinereducers" aria-hidden="true">#</a></h3><div class="language-js"><pre><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">combineReducers</span><span class="token punctuation">(</span><span class="token parameter">reducers</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> reducerKeys <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>reducers<span class="token punctuation">)</span>
  <span class="token keyword">const</span> finalReducers <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token comment">// \u83B7\u53D6\u6709\u6548\u7684reducer</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> reducerKeys<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> key <span class="token operator">=</span> reducerKeys<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> reducers<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token string">&#39;function&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      finalReducers<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> reducers<span class="token punctuation">[</span>key<span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">const</span> finalReducerKeys <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>finalReducers<span class="token punctuation">)</span>
  <span class="token keyword">let</span> unexpectedKeyCache
  <span class="token keyword">let</span> shapeAssertionError
  <span class="token keyword">try</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u4E3A\u6BCF\u4E2Areducer\u6267\u884C\uFF0Creducer(undefined, { type: ActionTypes.INIT })\u5224\u65AD\u9ED8\u8BA4\u8FD4\u56DEstate\u662F\u5426\u4E3A\u7A7A\uFF0C\u5982\u679C\u672A\u7A7A\u5219\u629B\u51FA\u5F02\u5E38</span>
    <span class="token function">assertReducerShape</span><span class="token punctuation">(</span>finalReducers<span class="token punctuation">)</span>
  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    shapeAssertionError <span class="token operator">=</span> e
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token function">combination</span><span class="token punctuation">(</span><span class="token parameter">state <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> action</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>shapeAssertionError<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">throw</span> shapeAssertionError
    <span class="token punctuation">}</span>
    
    <span class="token keyword">let</span> hasChanged <span class="token operator">=</span> <span class="token boolean">false</span>
    <span class="token keyword">const</span> nextState <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> finalReducerKeys<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> key <span class="token operator">=</span> finalReducerKeys<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
      <span class="token keyword">const</span> reducer <span class="token operator">=</span> finalReducers<span class="token punctuation">[</span>key<span class="token punctuation">]</span>
      <span class="token keyword">const</span> previousStateForKey <span class="token operator">=</span> state<span class="token punctuation">[</span>key<span class="token punctuation">]</span>
      <span class="token keyword">const</span> nextStateForKey <span class="token operator">=</span> <span class="token function">reducer</span><span class="token punctuation">(</span>previousStateForKey<span class="token punctuation">,</span> action<span class="token punctuation">)</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> nextStateForKey <span class="token operator">===</span> <span class="token string">&#39;undefined&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> errorMessage <span class="token operator">=</span> <span class="token function">getUndefinedStateErrorMessage</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> action<span class="token punctuation">)</span>
        <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span>errorMessage<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
      nextState<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> nextStateForKey
      <span class="token comment">// \u81F3\u5C11\u9700\u8981\u6709\u4E00\u4E2Areducer\u4E2D\u8FD4\u56DE\u4E00\u4E2A\u5168\u65B0\u7684state</span>
      hasChanged <span class="token operator">=</span> hasChanged <span class="token operator">||</span> nextStateForKey <span class="token operator">!==</span> previousStateForKey
    <span class="token punctuation">}</span>
    <span class="token comment">// \u5F53state\u4E0A\u67D0\u4E2Akey\u88AB\u5220\u9664\u65F6\u4E5F\u89C6\u4E3A\u6539\u53D8</span>
    hasChanged <span class="token operator">=</span>
      hasChanged <span class="token operator">||</span> finalReducerKeys<span class="token punctuation">.</span>length <span class="token operator">!==</span> Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>state<span class="token punctuation">)</span><span class="token punctuation">.</span>length
    <span class="token comment">// \u53EA\u6709\u6539\u53D8\u65F6\u624D\u8FD4\u56DE\u65B0\u7684\u5168\u5C40State\uFF0C\u5982\u679C\u6240\u6709reducer\u90FD\u672A\u8FD4\u56DE\u65B0\u7684state\uFF0C\u4E14\u5168\u5C40state\u4E0A\u7684\u5C5E\u6027\u672A\u88AB\u5220\u9664\uFF0C\u5219\u8FD4\u56DE\u65E7state</span>
    <span class="token keyword">return</span> hasChanged <span class="token operator">?</span> nextState <span class="token operator">:</span> state
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u53EF\u4EE5\u770B\u89C1\u4F20\u5165<code>combineReducers</code>\u7684\u5BF9\u8C61\u662F\u4E00\u4E2A<code>&lt;key, reducer</code>\u7684Map\u7ED3\u6784\uFF0C\u4E14\u521D\u59CB\u5316\u7684\u5168\u5C40state\u4E0E\u8BE5\u5BF9\u8C61\u5305\u542B\u76F8\u540C\u7684<code>key</code>\u503C</p><div class="language-js"><pre><code><span class="token keyword">let</span> initState <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">base</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">0</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">user</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;shymean&quot;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">// \u6BCF\u4E2Areducer\u9700\u8981\u8FD4\u56DE\u9ED8\u8BA4\u7684state\uFF0C\u5373\u8C03\u7528reducer(undefined, { type: ActionTypes.INIT })\u65F6\u548Creducer(undefined, {type: ActionTypes.PROBE_UNKNOWN_ACTION()}\u4E0D\u80FD\u8FD4\u56DEundefined</span>
<span class="token keyword">let</span> <span class="token function-variable function">baseReducer</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">currentState <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> action</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token keyword">let</span> <span class="token function-variable function">userReducer</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">currentState <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> action</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">let</span> reducer <span class="token operator">=</span> Redux<span class="token punctuation">.</span><span class="token function">combineReducers</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">base</span><span class="token operator">:</span> baseReducer<span class="token punctuation">,</span> <span class="token comment">// \u4E0EinitState\u5305\u542B\u76F8\u540C\u7684\u952E\u540D</span>
    <span class="token literal-property property">user</span><span class="token operator">:</span> userReducer
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="bindactioncreators" tabindex="-1">bindActionCreators <a class="header-anchor" href="#bindactioncreators" aria-hidden="true">#</a></h3><p>action\u662Fdiaptch\u4E0Ereducer\u7EA6\u5B9A\u7684\u4E00\u4E2A\u53C2\u6570\u5BF9\u8C61\uFF0C\u5FC5\u987B\u5305\u542Btype\u5C5E\u6027\uFF0C\u4E00\u79CD\u5E38\u89C1\u7684\u5F00\u53D1\u65B9\u5F0F\u662F\u901A\u8FC7\u5DE5\u5382\u51FD\u6570\u8FD4\u56DE\u7279\u5B9A<code>type</code>\u7684action\uFF0C\u8FD9\u79CD\u51FD\u6570\u88AB\u79F0\u4E3A<code>ActionCreators</code></p><div class="language-js"><pre><code><span class="token comment">// \u8FD4\u56DE\u4E00\u4E2A\u7C7B\u578B\u4E3AADD_TODO\u7684action</span>
<span class="token keyword">function</span> <span class="token function">addTodo</span><span class="token punctuation">(</span><span class="token parameter">text</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;ADD_TODO&#39;</span><span class="token punctuation">,</span>
    text
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// \u4F7F\u7528</span>
<span class="token keyword">let</span> action <span class="token operator">=</span> <span class="token function">addTodo</span><span class="token punctuation">(</span><span class="token string">&#39;eat&#39;</span><span class="token punctuation">)</span>
<span class="token function">dispatch</span><span class="token punctuation">(</span>action<span class="token punctuation">)</span>
</code></pre></div><p>action\u603B\u662F\u4E0E<code>dispatch</code>\u7D27\u5BC6\u76F8\u8FDE\u7684\uFF0C\u56E0\u6B64\u53EF\u4EE5\u628A\u4ED6\u4EEC\u5C01\u88C5\u5728\u4E00\u4E2A\u51FD\u6570\u5185</p><div class="language-js"><pre><code><span class="token keyword">function</span> <span class="token function">bindActionCreator</span><span class="token punctuation">(</span><span class="token parameter">actionCreator<span class="token punctuation">,</span> dispatch</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u9996\u5148\u8C03\u7528actionCreator\u521B\u5EFA\u4E00\u4E2Aaction\uFF0C\u7136\u540E\u8C03\u7528dispatch\u63D0\u4EA4action</span>
    <span class="token keyword">return</span> <span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token function">actionCreator</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> arguments<span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p><code>Redux.bindActionCreators</code>\u53EF\u4EE5\u63A5\u6536\u4E00\u4E2A\u5BF9\u8C61\u5E76\u8FD4\u56DE<code>bindActionCreator</code>\u5C01\u88C5\u540E\u7684\u65B0\u5BF9\u8C61\uFF0C\u65B0\u5BF9\u8C61\u4E0A\u7684\u6BCF\u4E2A\u5C5E\u6027\u90FD\u53EF\u4EE5\u770B\u505A\u662F\u63D0\u4EA4\u7279\u5B9Aaction\u7684\u65B9\u6CD5</p><div class="language-js"><pre><code><span class="token keyword">let</span> boundActionCreators <span class="token operator">=</span> <span class="token function">bindActionCreators</span><span class="token punctuation">(</span><span class="token punctuation">{</span>addTodo<span class="token punctuation">}</span><span class="token punctuation">,</span> dispatch<span class="token punctuation">)</span>
<span class="token comment">// \u8FD9\u6837\u5B8C\u6210\u5C01\u88C5\uFF0C\u5176\u4ED6\u5730\u65B9\u5B8C\u5168\u4E0D\u9700\u77E5\u9053dispatch\uFF0C\u4E14action\u66F4\u65B9\u4FBF\u5B9A\u4E49\uFF0C\u907F\u514D\u5B57\u9762\u91CF\u5BF9\u8C61\u53EF\u7EF4\u62A4\u6027\u8F83\u5DEE\u7684\u95EE\u9898</span>
boundActionCreators<span class="token punctuation">.</span><span class="token function">addTodo</span><span class="token punctuation">(</span>&#39;eat<span class="token punctuation">)</span>
</code></pre></div><p>\u6E90\u7801\u5185\u90E8\u53EA\u662F\u904D\u5386\u4E86\u4E00\u4E0B\u914D\u7F6E\u53C2\u6570\uFF0C\u4F9D\u6B21\u8C03\u7528<code>bindActionCreator</code></p><div class="language-js"><pre><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">bindActionCreators</span><span class="token punctuation">(</span><span class="token parameter">actionCreators<span class="token punctuation">,</span> dispatch</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u5355\u4E2A\u65F6\u76F4\u63A5\u8FD4\u56DE\u4E00\u4E2A\u65B9\u6CD5</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> actionCreators <span class="token operator">===</span> <span class="token string">&#39;function&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">bindActionCreator</span><span class="token punctuation">(</span>actionCreators<span class="token punctuation">,</span> dispatch<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">const</span> boundActionCreators <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token comment">// \u4F20\u5165\u7684\u4E3A{addTodo}\u7C7B\u4F3C\u7684\u5BF9\u8C61\u65F6\uFF0C\u4F1A\u4F9D\u6B21\u8C03\u7528bindActionCreator\u5E76\u5C06\u8FD4\u56DE\u503C\u6302\u8F7D\u5230boundActionCreators\uFF0C\u6700\u540E\u7EDF\u4E00\u8FD4\u56DE</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> key <span class="token keyword">in</span> actionCreators<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> actionCreator <span class="token operator">=</span> actionCreators<span class="token punctuation">[</span>key<span class="token punctuation">]</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> actionCreator <span class="token operator">===</span> <span class="token string">&#39;function&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      boundActionCreators<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">bindActionCreator</span><span class="token punctuation">(</span>actionCreator<span class="token punctuation">,</span> dispatch<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> boundActionCreators
<span class="token punctuation">}</span>
</code></pre></div><h3 id="applymiddleware" tabindex="-1">applyMiddleware <a class="header-anchor" href="#applymiddleware" aria-hidden="true">#</a></h3><p>\u53EF\u4EE5\u901A\u8FC7\u4E2D\u95F4\u4EF6\u6765\u6269\u5C55redux\uFF0C\u5B8C\u6210\u7279\u6027\u529F\u80FD\uFF0C\u4E0B\u9762\u662F\u4E00\u4E2A\u65E5\u5FD7\u4E2D\u95F4\u4EF6\u7684\u5B9E\u73B0</p><div class="language-js"><pre><code><span class="token keyword">function</span> <span class="token function">logger</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> getState<span class="token punctuation">,</span> dispatch <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// next\u4EE3\u8868\u4E0B\u4E00\u4E2A\u4E2D\u95F4\u4EF6\uFF0Caction\u8868\u793A\u5F53\u524D\u63A5\u6536\u5230\u7684\u52A8\u4F5C</span>
    <span class="token keyword">return</span> <span class="token parameter">next</span> <span class="token operator">=&gt;</span> <span class="token parameter">action</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;before change&quot;</span><span class="token punctuation">,</span> action<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// \u8C03\u7528 middleware \u94FE\u4E2D\u4E0B\u4E00\u4E2A middleware \u7684 dispatch\u3002</span>
        <span class="token keyword">let</span> val <span class="token operator">=</span> <span class="token function">next</span><span class="token punctuation">(</span>action<span class="token punctuation">)</span><span class="token punctuation">;</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;after change&quot;</span><span class="token punctuation">,</span> <span class="token function">getState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> val<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> val<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> createStoreWithMiddleware <span class="token operator">=</span> Redux<span class="token punctuation">.</span><span class="token function">applyMiddleware</span><span class="token punctuation">(</span>logger<span class="token punctuation">)</span><span class="token punctuation">(</span>Redux<span class="token punctuation">.</span>createStore<span class="token punctuation">)</span>
<span class="token comment">// \u53EF\u4EE5\u628A\u4E2D\u95F4\u4EF6\u770B\u505A\u662F\u589E\u5F3A\u7248\u7684createStore</span>
<span class="token keyword">let</span> store <span class="token operator">=</span> <span class="token function">createStoreWithMiddleware</span><span class="token punctuation">(</span>reducer<span class="token punctuation">,</span> initState<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// \u4E5F\u53EF\u4EE5\u4F7F\u7528createStore\u7B2C\u4E09\u4E2A\u53C2\u6570enhancer</span>
<span class="token comment">// let store = Redux.createStore(reducer,initState,Redux.applyMiddleware(logger));</span>
</code></pre></div><p>\u53EF\u89C1\u770B\u89C1\u4E2D\u95F4\u4EF6\u7684\u4E00\u4E9B\u7279\u5F81</p><ul><li>\u4E2D\u95F4\u4EF6\u63A5\u6536\u53C2\u6570\u5305\u62EC<code>getState</code>\u548C<code>dispatch</code></li><li>\u4E2D\u95F4\u4EF6\u8FD4\u56DE\u7684\u662F\u4E00\u4E2A\u51FD\u6570\uFF0C\u8BE5\u51FD\u6570\u63A5\u6536\u4E0B\u4E00\u4E2A\u4E2D\u95F4\u4EF6next\u4F5C\u4E3A\u53C2\u6570\uFF0C\u5E76\u8FD4\u56DE\u4E00\u4E2A\u63A5\u6536action\u7684\u65B0\u7684dispatch\u65B9\u6CD5</li><li>\u53EA\u6709\u624B\u52A8\u8C03\u7528<code>next(action)</code>\u624D\u4F1A\u6267\u884C\u4E0B\u4E00\u4E2A\u4E2D\u95F4\u4EF6</li></ul><p>\u7B80\u800C\u8A00\u4E4B\uFF0C\u4E00\u4E2A\u6700\u57FA\u672C\u7684\u4E2D\u95F4\u4EF6\u5E94\u8BE5\u662F\u4E0B\u9762\u8FD9\u4E2A\u6837\u5B50\u7684\uFF0C\u901A\u8FC7\u67EF\u91CC\u5316\u7684\u65B9\u5F0F\u5B9A\u4E49\u4E2D\u95F4\u4EF6</p><div class="language-js"><pre><code><span class="token keyword">const</span> <span class="token function-variable function">pureMiddleware</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span>dispatch<span class="token punctuation">,</span> getState<span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token parameter">next</span> <span class="token operator">=&gt;</span> <span class="token parameter">action</span> <span class="token operator">=&gt;</span> <span class="token function">next</span><span class="token punctuation">(</span>action<span class="token punctuation">)</span>
</code></pre></div><p>\u67EF\u91CC\u5316\u662F\u51FD\u6570\u5F0F\u7F16\u7A0B\u91CC\u9762\u7684\u4E00\u4E2A\u6982\u5FF5\uFF0C\u5176\u529F\u80FD\u662F\u628A\u591A\u4E2A\u53C2\u6570\u7684\u51FD\u6570\u7F16\u7A0B\u4E00\u4E2A\u63A5\u6536\u5355\u4E00\u53C2\u6570\u7684\u51FD\u6570\uFF0C\u5E76\u8FD4\u56DE\u4E00\u4E2A\u63A5\u6536\u4F59\u4E0B\u53C2\u6570\u7684\u65B0\u51FD\u6570</p><div class="language-js"><pre><code><span class="token comment">// \u666E\u901A\u5B9E\u73B0</span>
<span class="token keyword">const</span> <span class="token function-variable function">add</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> a <span class="token operator">+</span> b

<span class="token comment">// \u67EF\u91CC\u5316\u5B9E\u73B0</span>
<span class="token keyword">const</span> <span class="token function-variable function">add</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">a</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token parameter">b</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> a <span class="token operator">+</span> b
<span class="token keyword">const</span> add10 <span class="token operator">=</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span> <span class="token comment">// \u4E00\u4E2A\u53EF\u4EE5\u590D\u7528\u7684add(10)\u51FD\u6570</span>
<span class="token function">add10</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span> <span class="token comment">// 30</span>
<span class="token function">add10</span><span class="token punctuation">(</span><span class="token number">30</span><span class="token punctuation">)</span> <span class="token comment">// 30</span>
<span class="token keyword">const</span> add100 <span class="token operator">=</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span> <span class="token comment">// \u4F9D\u6B21\u7C7B\u63A8\uFF0C\u53EF\u4EE5\u751F\u6210\u9AD8\u5EA6\u590D\u7528\u7684\u65B0\u51FD\u6570</span>
</code></pre></div><p>\u6B64\u5916\u9700\u8981\u4E86\u89E3<code>compose</code>\u7684\u6982\u5FF5\uFF0C<code>compose</code>\u662F\u51FD\u6570\u5F0F\u7F16\u7A0B\u91CC\u9762\u7684<strong>\u7EC4\u5408</strong>\uFF0C\u5176\u529F\u80FD\u662F\u5C06\u591A\u4E2A\u5355\u529F\u80FD\u7684\u51FD\u6570\u5408\u5E76\u4E3A\u4E00\u4E2A\u51FD\u6570</p><div class="language-js"><pre><code> <span class="token comment">// \u7EC4\u5408\u51FD\u6570, \u5982compose(f, g, h)\u4F1A\u8FD4\u56DE (...args) =&gt; f(g(h(...args)))</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">compose</span><span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>funcs</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>funcs<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token parameter">arg</span> <span class="token operator">=&gt;</span> arg
  <span class="token punctuation">}</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>funcs<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> funcs<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// \u8FD4\u56DE\u7684\u662F\u4E00\u4E2A\u7EC4\u5408\u540E\u7684\u51FD\u6570</span>
  <span class="token comment">// \u8C03\u7528\u65F6\uFF0Cfuncs\u5217\u8868\u4E2D\u7684\u65B9\u6CD5\uFF0C\u4ECE\u540E\u5411\u524D\u4F9D\u6B21\u8C03\u7528\uFF0C\u5E76\u5C06\u4E0A\u4E00\u4E2A\u65B9\u6CD5\u7684\u8FD4\u56DE\u503C\u4F5C\u4E3A\u4F5C\u4E3A\u4E0B\u4E00\u4E2A\u65B9\u6CD5\u7684\u53C2\u6570</span>
 
  <span class="token keyword">return</span> funcs<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">a</span><span class="token punctuation">(</span><span class="token function">b</span><span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u4EE5\u4E0B\u9762\u4E3A\u4F8B</p><div class="language-js"><pre><code><span class="token keyword">var</span> funcs <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token punctuation">(</span><span class="token parameter">a</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>
        <span class="token keyword">return</span> a<span class="token operator">+</span><span class="token number">1</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">(</span><span class="token parameter">b</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span>
        <span class="token keyword">return</span> b<span class="token operator">+</span><span class="token number">2</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
<span class="token keyword">var</span> res <span class="token operator">=</span> <span class="token function">compose</span><span class="token punctuation">(</span><span class="token operator">...</span>funcs<span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">res</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 1,3,4</span>
</code></pre></div><p>\u73B0\u5728\u6765\u770B<code>applyMiddleware</code>\u7684\u6E90\u7801\uFF0C\u8FD9\u91CC\u7684\u4EE3\u7801\u5341\u5206\u7CBE\u5F69\uFF0C\u77ED\u77ED\u51E0\u884C\u5C31\u5B9E\u73B0\u4E86\u4E00\u4E2A\u5B8C\u6574\u7684\u4E2D\u95F4\u4EF6\u7CFB\u7EDF</p><div class="language-js"><pre><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">applyMiddleware</span><span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>middlewares</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u8FD4\u56DE\u7684\u662F\u4E00\u4E2A\u63A5\u6536createStore\u53C2\u6570\u7684\u95ED\u5305\uFF0C\u4E2D\u95F4\u4EF6\u901A\u8FC7middlewares\u53C2\u6570\u5217\u8868\u7EF4\u62A4</span>
  <span class="token keyword">return</span> <span class="token parameter">createStore</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u521B\u5EFA\u539F\u59CB\u7684store</span>
    <span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token function">createStore</span><span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token punctuation">)</span>

    <span class="token keyword">let</span> <span class="token function-variable function">dispatch</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span>
        <span class="token string">&#39;Dispatching while constructing your middleware is not allowed. &#39;</span> <span class="token operator">+</span>
          <span class="token string">&#39;Other middleware would not be applied to this dispatch.&#39;</span>
      <span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// \u6BCF\u4E2A\u4E2D\u95F4\u4EF6\u90FD\u5305\u542B\u7EDF\u4E00\u53C2\u6570\uFF1AgetState\u548Cdispatch</span>
    <span class="token keyword">const</span> middlewareAPI <span class="token operator">=</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">getState</span><span class="token operator">:</span> store<span class="token punctuation">.</span>getState<span class="token punctuation">,</span>
      <span class="token function-variable function">dispatch</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token punctuation">)</span> <span class="token comment">// \u8FD9\u91CC\u4F7F\u7528\u95ED\u5305\uFF0C\u8BA9\u6BCF\u4E2A\u4E2D\u95F4\u4EF6\u7EF4\u6301\u5BF9\u7EC4\u5408dispatch\u7684\u5F15\u7528</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// \u521D\u59CB\u5316store\u65F6\uFF0C\u4E2D\u95F4\u4EF6\u6309\u53C2\u6570\u987A\u5E8F\u4F9D\u6B21\u8C03\u7528\uFF0C\u6BCF\u4E2A\u4E2D\u95F4\u4EF6\u8FD4\u56DE\u7684\u662F next =&gt; action =&gt; next(action) \u7EDF\u4E00\u683C\u5F0F</span>
    <span class="token keyword">const</span> chain <span class="token operator">=</span> middlewares<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">middleware</span> <span class="token operator">=&gt;</span> <span class="token function">middleware</span><span class="token punctuation">(</span>middlewareAPI<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token comment">// compose(...chain)\u8FD4\u56DE\u7684\u662F\u4E00\u4E2A\u7EC4\u5408\u7684 next =&gt; action =&gt; next(action) \u65B9\u6CD5</span>
    <span class="token comment">// compose(...chain)(store.dispatch)\u4F1A\u5C06store.dispatch\u4F5C\u4E3A\u6700\u540E\u4E00\u4E2Anext\u4E2D\u95F4\u4EF6\u4F20\u5165\uFF0C\u8FD4\u56DE\u4E00\u4E2A\u7EC4\u5408\u540E\u7684dispatch</span>
    dispatch <span class="token operator">=</span> <span class="token function">compose</span><span class="token punctuation">(</span><span class="token operator">...</span>chain<span class="token punctuation">)</span><span class="token punctuation">(</span>store<span class="token punctuation">.</span>dispatch<span class="token punctuation">)</span>
    <span class="token comment">// compose\u662F\u6309\u7167\u4ECE\u53F3\u5411\u5DE6\u7684\u987A\u5E8F\u652F\u6301\u51FD\u6570\u5217\u8868\uFF0C\u56E0\u6B64\u5F53\u5728\u89C6\u56FE\u4E2D\u8C03\u7528dispatch(action)\u65F6\uFF0C\u53EA\u6709\u5728\u6700\u540E\u4E00\u4E2A\u4E2D\u95F4\u4EF6\u4E2D\u8C03\u7528next(action)\u624D\u4F1A\u89E6\u53D1\u771F\u5B9E\u7684store.dispatch(action)</span>
    <span class="token comment">// \u5728\u6B64\u4E4B\u524Dstate\u672A\u66F4\u65B0\uFF0C\u5728\u6B64\u4E4B\u540Estate\u5DF2\u66F4\u65B0\uFF0C\u6700\u540E\u4E00\u4E2A\u4E2D\u95F4\u4EF6\u6267\u884C\u5B8C\u6BD5\uFF0C\u63A7\u5236\u6743\u8FD4\u56DE\u4E0A\u4E00\u4E2A\u4E2D\u95F4\u4EF6\u7684next\u540E\u9762\u90E8\u5206\uFF0C\u4F9D\u6B21\u9000\u51FA\u8C03\u7528\u6808</span>
    <span class="token comment">// \u5982\u679C\u524D\u9762\u67D0\u4E2A\u4E2D\u95F4\u4EF6\u672A\u8C03\u7528next\uFF0C\u5219\u540E\u9762\u6240\u6709\u7684\u4E2D\u95F4\u4EF6\u90FD\u4E0D\u4F1A\u6267\u884C</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token operator">...</span>store<span class="token punctuation">,</span>
      dispatch  <span class="token comment">// \u8FD4\u56DE\u4E00\u4E2A\u589E\u5F3A\u4E86dispatch\u7684store</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u96C6\u5408\u4E2D\u95F4\u4EF6\u7684\u683C\u5F0F\uFF0C\u6211\u4EEC\u53EF\u4EE5\u4E86\u89E3\u5230</p><ul><li><code>chain</code>\u4E2D\u4FDD\u5B58\u7684\u90FD\u662F<code>next =&gt; action =&gt; {next(action)}</code>\u7684\u65B9\u6CD5</li><li>\u901A\u8FC7<code>compose</code>\u8FD4\u56DE\u4E86\u4E00\u4E2A\u7EC4\u5408\u51FD\u6570\uFF0C\u5C06<code>store.dispatch</code>\u4F5C\u4E3A\u53C2\u6570\u4F20\u9012\u7ED9\u7EC4\u5408\u51FD\u6570\uFF0C\u7EC4\u5408\u51FD\u6570\u6267\u884C\u65F6\u4F1A\u9006\u5E8F\u8C03\u7528chain\u4E2D\u7684\u65B9\u6CD5\uFF0C\u5E76\u5C06\u4E0A\u4E00\u4E2A\u65B9\u6CD5\u7684\u8FD4\u56DE\u503C\u4F5C\u4E3A\u4F5C\u4E3A\u4E0B\u4E00\u4E2A\u65B9\u6CD5</li><li>\u8FD9\u91CC\u7684\u4E0A\u4E00\u4E2A\u65B9\u6CD5\u5C31\u662F<code>action =&gt; {next(action)}</code>\uFF0C\u8DDF\u539F\u59CB\u7684<code>store.dispatch</code>\u7ED3\u6784\u4E00\u81F4\uFF0C\u56E0\u6B64\u7EC4\u5408\u51FD\u6570\u6700\u540E\u7684\u8FD4\u56DE\u503C\u53EF\u4EE5\u7406\u89E3\u4E3A\u662F\u7ECF\u8FC7\u7EC4\u5408\u51FD\u6570\u5305\u88C5\u540E\u7684<code>dispatch</code></li></ul><p>\u6240\u4EE5\u6839\u636E\u6E90\u7801\uFF0C\u5219\u4E2D\u95F4\u4EF6\u7684\u6267\u884C\u987A\u5E8F\u5E94\u8BE5\u662F</p><div class="language-"><pre><code>\u6B63\u5E38\u540C\u6B65\u8C03\u7528next\uFF0C\u5728dispatch\u524D\u6267\u884Cnext\u524D\u9762\u7684\u4EE3\u7801\u90E8\u5206\uFF0C\u5728dispatch\u540E\u6267\u884Cnext\u540E\u9762\u7684\u90E8\u5206
mid1 before next -&gt; mid2 before next -&gt; mid3 before next-&gt; dispatch -&gt; mid3 after next -&gt; mid2 after next -&gt; mid1 after next

\u6B63\u5E38\u540C\u6B65\u8C03\u7528\uFF0C\u5982\u679C\u5728mid2\u4E2D\u672A\u8C03\u7528next\uFF0C\u5219
mid1 before next -&gt; mid2 full -&gt; mid1 after next

\u5982\u679C\u5728mid2\u4E2D\u662F\u5F02\u6B65\u8C03\u7528next\uFF0C\u5219
mid1 before nex -&gt; mid2 full sync -&gt; mid1 after next -&gt; mid2 async before next -&gt; mid3 before next -&gt; dispatch -&gt; mid3 after next -&gt; mid2 async after next
</code></pre></div><p>\u6B64\u5916\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u5728\u4E2D\u95F4\u4EF6\u7684\u6267\u884C\u4E2D\uFF0C\u4E0D\u80FD\u624B\u52A8\u8C03\u7528\u4F20\u5165\u7684\u7EC4\u5408<code>dispatch</code>\uFF0C\u800C\u5E94\u8BE5\u901A\u8FC7next\u8C03\u7528\u4E0B\u4E00\u4E2A\u4E2D\u95F4\u4EF6\uFF0C\u5426\u5219\u4F1A\u51FA\u73B0\u6B7B\u5FAA\u73AF\u3002</p><h2 id="redux-thunk" tabindex="-1">redux-thunk <a class="header-anchor" href="#redux-thunk" aria-hidden="true">#</a></h2><p>\u5982\u679C\u9700\u8981\u63D0\u4EA4\u5F02\u6B65\u7684\u52A8\u4F5C\uFF0C\u5E76\u5728\u5F02\u6B65\u4EFB\u52A1\u5B8C\u6210\u540E\u5728\u66F4\u65B0state\u65F6\uFF0C\u53EF\u4EE5\u4F7F\u7528<code>redux-thunk</code>\u4E2D\u95F4\u4EF6\uFF0C</p><div class="language-js"><pre><code><span class="token keyword">let</span> store <span class="token operator">=</span> Redux<span class="token punctuation">.</span><span class="token function">createStore</span><span class="token punctuation">(</span>reducer<span class="token punctuation">,</span>initState<span class="token punctuation">,</span>Redux<span class="token punctuation">.</span><span class="token function">applyMiddleware</span><span class="token punctuation">(</span>logger<span class="token punctuation">,</span> logger2<span class="token punctuation">,</span> thunk<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">asycnAction</span><span class="token punctuation">(</span><span class="token parameter">dispatch<span class="token punctuation">,</span> getState<span class="token punctuation">,</span> extra</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token constant">UPDATE</span><span class="token punctuation">,</span>
            <span class="token literal-property property">payload</span><span class="token operator">:</span> Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
store<span class="token punctuation">.</span><span class="token function">dispatch</span><span class="token punctuation">(</span>asycnAction<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>\u4E0B\u9762\u662F<code>redux-thunk</code>\u7684\u6E90\u7801\uFF0C\u5176\u6982\u5FF5\u548C\u5B9E\u73B0\u90FD\u5F88\u7B80\u5355\uFF0C\u4E3B\u8981\u662F\u652F\u6301\u4E86\u51FD\u6570\u7C7B\u578B\u7684<code>action</code>\uFF0C\u5E76\u4F20\u5165dispatch\u8BA9\u7528\u6237\u5728action\u7684\u903B\u8F91\u4E2D\u624B\u52A8\u8C03\u7528</p><div class="language-js"><pre><code><span class="token keyword">function</span> <span class="token function">createThunkMiddleware</span><span class="token punctuation">(</span><span class="token parameter">extraArgument</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> dispatch<span class="token punctuation">,</span> getState <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token parameter">next</span> <span class="token operator">=&gt;</span> <span class="token parameter">action</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u5982\u679C\u6536\u5230\u7684\u662F\u4E00\u4E2Aaction\uFF0C\u5C31\u5C06middlewareAPI\u4E0A\u7684dispatch\u4F20\u7ED9action\uFF0C\u5728action\u4E2D\u7531\u7528\u6237\u81EA\u884C\u8C03\u7528dispatch\u4E00\u4E2A\u540C\u6B65\u7684action</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> action <span class="token operator">===</span> <span class="token string">&#39;function&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token function">action</span><span class="token punctuation">(</span>dispatch<span class="token punctuation">,</span> getState<span class="token punctuation">,</span> extraArgument<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// \u5982\u679C\u662F\u51FD\u6570\u7C7B\u578B\u7684action\uFF0C\u5219\u4E0D\u4F1A\u8FDB\u5165\u4E0B\u4E00\u4E2A\u4E2D\u95F4\u4EF6\uFF0C\u907F\u514D\u6B7B\u5FAA\u73AF\uFF0C\u56E0\u6B64\u4F7F\u7528thunk\u4E2D\u95F4\u4EF6\u7684\u987A\u5E8F\u4E5F\u5F88\u91CD\u8981</span>
    <span class="token comment">// \u5BF9\u4E8E\u67D0\u4E2A\u4E2D\u95F4\u4EF6\u800C\u8A00\uFF0C\u5982\u679C\u76D1\u542C\u6240\u6709\u7684action\uFF0C\u5728applyMiddleware\u65F6\u5219\u5E94\u8BE5\u653E\u5728thunk\u524D\u9762\uFF1B\u5982\u679C\u53EA\u60F3\u76D1\u542C\u5E38\u89C4\u7684\u975E\u51FD\u6570action\uFF0C\u5219\u5E94\u8BE5\u653E\u5728thunk\u540E\u9762</span>
    <span class="token keyword">return</span> <span class="token function">next</span><span class="token punctuation">(</span>action<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> thunk <span class="token operator">=</span> <span class="token function">createThunkMiddleware</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
thunk<span class="token punctuation">.</span>withExtraArgument <span class="token operator">=</span> createThunkMiddleware<span class="token punctuation">;</span> <span class="token comment">// \u66B4\u9732createThunkMiddleware \u65B9\u6CD5\uFF0C\u5141\u8BB8\u7528\u6237\u4E3A\u6BCF\u4E2Aactino\u4F20\u5165\u989D\u5916\u53C2\u6570</span>
</code></pre></div><h2 id="redux-saga" tabindex="-1">redux-saga <a class="header-anchor" href="#redux-saga" aria-hidden="true">#</a></h2><p><a href="https://redux-saga-in-chinese.js.org/" target="_blank" rel="noopener noreferrer">Redux-Saga</a>\u4F7F\u7528\u4E86 ES6 \u7684 Generator \u529F\u80FD\uFF0C\u8BA9redux\u4E2D\u5F02\u6B65\u6D41\u7A0B\u66F4\u6613\u4E8E\u8BFB\u53D6\uFF0C\u5199\u5165\u548C\u6D4B\u8BD5</p><p>\u57FA\u7840\u4F7F\u7528</p><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> call<span class="token punctuation">,</span> put<span class="token punctuation">,</span> takeEvery<span class="token punctuation">,</span> takeLatest <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;redux-saga/effects&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> createStore<span class="token punctuation">,</span> applyMiddleware <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;redux&#39;</span>
<span class="token keyword">import</span> createSagaMiddleware <span class="token keyword">from</span> <span class="token string">&#39;redux-saga&#39;</span>

<span class="token keyword">const</span> Api <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token keyword">async</span> <span class="token function">fetchUser</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;xxx&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">10</span> <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// worker Saga: will be fired on USER_FETCH_REQUESTED actions</span>
<span class="token keyword">function</span><span class="token operator">*</span> <span class="token function">fetchUser</span><span class="token punctuation">(</span><span class="token parameter">action</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">try</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> user <span class="token operator">=</span> <span class="token keyword">yield</span> <span class="token function">call</span><span class="token punctuation">(</span>Api<span class="token punctuation">.</span>fetchUser<span class="token punctuation">,</span> action<span class="token punctuation">.</span>payload<span class="token punctuation">.</span>userId<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">yield</span> <span class="token function">put</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&quot;USER_FETCH_SUCCEEDED&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">user</span><span class="token operator">:</span> user <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">yield</span> <span class="token function">put</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&quot;USER_FETCH_FAILED&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">message</span><span class="token operator">:</span> e<span class="token punctuation">.</span>message <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span><span class="token operator">*</span> <span class="token function">mySaga</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u5141\u8BB8\u6BCF\u4E00\u4E2A\u5F02\u6B65\u7684dispatch\u8BBF\u95EE\uFF0C\u5219\u4F7F\u7528takeEvery</span>
    <span class="token comment">// yield takeEvery(&quot;USER_FETCH_REQUESTED&quot;, fetchUser);</span>
    <span class="token comment">// \u5982\u679C\u53EA\u5E0C\u671B\u6700\u540E\u4E00\u4E2A\u8BF7\u6C42\u6210\u529F\u53D1\u9001\uFF0C\u5219\u4F7F\u7528takeLatest</span>
    <span class="token keyword">yield</span> <span class="token function">takeLatest</span><span class="token punctuation">(</span><span class="token string">&quot;USER_FETCH_REQUESTED&quot;</span><span class="token punctuation">,</span> fetchUser<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> <span class="token function-variable function">reducre</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">state<span class="token punctuation">,</span> action</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">switch</span> <span class="token punctuation">(</span>action<span class="token punctuation">.</span>type<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">case</span> <span class="token string">&#39;USER_FETCH_SUCCEEDED&#39;</span><span class="token operator">:</span>
            <span class="token keyword">return</span> <span class="token punctuation">{</span> <span class="token literal-property property">user</span><span class="token operator">:</span> action<span class="token punctuation">.</span>user <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span> <span class="token literal-property property">user</span><span class="token operator">:</span> <span class="token keyword">null</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> sagaMiddleware <span class="token operator">=</span> <span class="token function">createSagaMiddleware</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">let</span> store <span class="token operator">=</span> <span class="token function">createStore</span><span class="token punctuation">(</span>reducre<span class="token punctuation">,</span> <span class="token function">applyMiddleware</span><span class="token punctuation">(</span>sagaMiddleware<span class="token punctuation">)</span><span class="token punctuation">)</span>
store<span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;subscribe:&#39;</span><span class="token punctuation">,</span> store<span class="token punctuation">.</span><span class="token function">getState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

sagaMiddleware<span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span>mySaga<span class="token punctuation">)</span>

<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">4</span><span class="token punctuation">;</span> <span class="token operator">++</span>i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">getUserInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// \u4E0A\u9762\u4F7F\u7528\u4E86takeLatest\uFF0C\u53EA\u6709\u6700\u540E\u4E00\u6B21\u8BF7\u6C42\u4F1A\u89E6\u53D1\`USER_FETCH_SUCCEEDED\`</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">getUserInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    store<span class="token punctuation">.</span><span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;USER_FETCH_REQUESTED&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">payload</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">userId</span><span class="token operator">:</span> <span class="token number">10</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><p>// todo \u6E90\u7801\u5206\u6790</p>`,54),e=[o];function c(u,l,k,r,i,d){return a(),s("div",null,e)}var w=n(p,[["render",c]]);export{f as __pageData,w as default};
