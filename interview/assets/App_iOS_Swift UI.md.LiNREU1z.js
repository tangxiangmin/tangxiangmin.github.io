import{_ as s,c as i,o as a,a2 as t}from"./chunks/framework.DLPB9-dE.js";const c=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"App/iOS/Swift UI.md","filePath":"App/iOS/Swift UI.md","lastUpdated":1709042257000}'),n={name:"App/iOS/Swift UI.md"},h=t(`<p><a href="https://developer.apple.com/xcode/swiftui/" target="_blank" rel="noreferrer">swift UI 官网</a></p><h2 id="生命周期" tabindex="-1">生命周期 <a class="header-anchor" href="#生命周期" aria-label="Permalink to &quot;生命周期&quot;">​</a></h2><p><a href="https://juejin.cn/post/6847902225398775822" target="_blank" rel="noreferrer">SwiftUI生命周期</a></p><ul><li><code>onAppear</code>组件出现时调用</li><li><code>onDisappear</code>组件消失时调用</li></ul><h2 id="模板语法" tabindex="-1">模板语法 <a class="header-anchor" href="#模板语法" aria-label="Permalink to &quot;模板语法&quot;">​</a></h2><h3 id="内置组件列表" tabindex="-1">内置组件列表 <a class="header-anchor" href="#内置组件列表" aria-label="Permalink to &quot;内置组件列表&quot;">​</a></h3><p><a href="https://developer.apple.com/documentation/swiftui/views-and-controls" target="_blank" rel="noreferrer">https://developer.apple.com/documentation/swiftui/views-and-controls</a></p><h3 id="循环" tabindex="-1">循环 <a class="header-anchor" href="#循环" aria-label="Permalink to &quot;循环&quot;">​</a></h3><p><a href="https://medium.com/%E5%BD%BC%E5%BE%97%E6%BD%98%E7%9A%84-swift-ios-app-%E9%96%8B%E7%99%BC%E5%95%8F%E9%A1%8C%E8%A7%A3%E7%AD%94%E9%9B%86/swiftui-%E7%9A%84-foreach-7ccd426e53ac" target="_blank" rel="noreferrer">https://medium.com/彼得潘的-swift-ios-app-開發問題解答集/swiftui-的-foreach-7ccd426e53ac</a></p><p>通过索引值</p><div class="language-swift vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">swift</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> list:[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">4</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">ForEach</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">..&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">list.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">count</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) { (index) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">in</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    Text</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\\(list[index])</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 可以使用 list.indices 代替0..&lt;list.count</span></span></code></pre></div><p>直接遍历列表，通过id参数指定每个元素的<code>key</code></p><div class="language-swift vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">swift</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> list:[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">4</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">ForEach</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(list, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">id</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:\\.</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">self</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">){(item) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">in</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    Text</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\\(item)</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>遍历一些复杂的列表数据</p><div class="language-swift vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">swift</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">struct</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ListItem</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">   var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> id: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Int</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">   var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> name: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">String</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> list2:[ListItem] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">ListItem</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">id</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;item1&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">), </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">ListItem</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">id</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;item2&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">ForEach</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(list2, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">id</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:\\.id){(item) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">in</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    Text</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\\(item.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">name</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">)</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>上面这种方式需要保证id的唯一性，最好的办法是使用系统的<code>Identifiable</code></p><div class="language-swift vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">swift</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">struct</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ListItem</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Identifiable </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> id </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> UUID</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">   var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> name: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">String</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> list3:[ListItem] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">ListItem</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">( </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;item1&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">), </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">ListItem</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;item2&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 不需要再传入keyPath形式的id来控制了</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">ForEach</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(list3){(item) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">in</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    Text</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\\(item.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">name</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">)</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>此外也可以用<code>List</code>来代替<code>ForEach</code></p><h3 id="条件渲染" tabindex="-1">条件渲染 <a class="header-anchor" href="#条件渲染" aria-label="Permalink to &quot;条件渲染&quot;">​</a></h3><p><a href="https://stackoverflow.com/questions/56517610/conditionally-use-view-in-swiftui" target="_blank" rel="noreferrer">https://stackoverflow.com/questions/56517610/conditionally-use-view-in-swiftui</a></p><div class="language-swift vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">swift</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> flag </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(flag) {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    Text</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;yes&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">else</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    Text</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;no&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>看起来还可以通过<code>extension View</code>实现一些自定义指令，如<code>.if</code>等等</p><h3 id="自定义渲染组件" tabindex="-1">自定义渲染组件 <a class="header-anchor" href="#自定义渲染组件" aria-label="Permalink to &quot;自定义渲染组件&quot;">​</a></h3><h2 id="组件通信" tabindex="-1">组件通信 <a class="header-anchor" href="#组件通信" aria-label="Permalink to &quot;组件通信&quot;">​</a></h2><p><a href="https://my.oschina.net/SwiftOldDriver/blog/4704384" target="_blank" rel="noreferrer">https://my.oschina.net/SwiftOldDriver/blog/4704384</a></p><p><a href="https://www.jianshu.com/p/2bc4af91250a" target="_blank" rel="noreferrer">https://www.jianshu.com/p/2bc4af91250a</a></p><h3 id="state与binding" tabindex="-1">State与Binding <a class="header-anchor" href="#state与binding" aria-label="Permalink to &quot;State与Binding&quot;">​</a></h3><p>主要用于子组件通知父组件的场景</p><p>参考：</p><ul><li><a href="https://juejin.cn/post/6844903924084768776" target="_blank" rel="noreferrer">https://juejin.cn/post/6844903924084768776</a></li><li><a href="https://stackoverflow.com/questions/59861199/swiftui-button-how-to-pass-a-function-request-to-parent" target="_blank" rel="noreferrer">https://stackoverflow.com/questions/59861199/swiftui-button-how-to-pass-a-function-request-to-parent</a></li></ul><p>父组件-&gt;子组件，可以直接通过 State 和 Binding 来传递数据，类似于props</p><p>子组件-&gt;父组件，可以通过回调props</p><div class="language-swift vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">swift</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">struct</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Test5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">View </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    @State</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> msg:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">String</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;from parent&quot;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> body: </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">some</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> View {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        VStack</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">          Text</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Parent&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">            SubChild</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">msg</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:$msg,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">self</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.onChildTap).</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">onTapGesture</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">                self</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.msg </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;parent click&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    func</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> onChildTap</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(){</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;test click&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">struct</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> SubChild</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">View </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    @Binding</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> msg: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">String</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">     var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> function: () </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Void</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    </span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> body: </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">some</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> View {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        Text</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;sub: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\\(msg)</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">).</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">onTapGesture</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">            self</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>跨级组件通信，Environment，类似于context</p><h3 id="方法传递" tabindex="-1">方法传递 <a class="header-anchor" href="#方法传递" aria-label="Permalink to &quot;方法传递&quot;">​</a></h3><h2 id="页面路由" tabindex="-1">页面路由 <a class="header-anchor" href="#页面路由" aria-label="Permalink to &quot;页面路由&quot;">​</a></h2><h3 id="路由组件" tabindex="-1">路由组件 <a class="header-anchor" href="#路由组件" aria-label="Permalink to &quot;路由组件&quot;">​</a></h3><p>第一种方式是通过<code>NavigationView</code> &amp; <code>NavigationLink</code></p><p><a href="https://medium.com/%E5%BD%BC%E5%BE%97%E6%BD%98%E7%9A%84-swift-ios-app-%E9%96%8B%E7%99%BC%E5%95%8F%E9%A1%8C%E8%A7%A3%E7%AD%94%E9%9B%86/%E5%88%A9%E7%94%A8-navigationview-navigationlink-%E5%88%87%E6%8F%9B%E9%A0%81%E9%9D%A2-3a062833230f" target="_blank" rel="noreferrer">https://medium.com/彼得潘的-swift-ios-app-開發問題解答集/利用-navigationview-navigationlink-切換頁面-3a062833230f</a></p><h3 id="编程式路由" tabindex="-1">编程式路由 <a class="header-anchor" href="#编程式路由" aria-label="Permalink to &quot;编程式路由&quot;">​</a></h3><p>在iOS中使用<code>ViewController</code>来控制视图 参考这个讨论</p><ul><li><a href="https://stackoverflow.com/questions/57315409/push-view-programmatically-in-callback-swiftui" target="_blank" rel="noreferrer">https://stackoverflow.com/questions/57315409/push-view-programmatically-in-callback-swiftui</a></li><li><a href="https://www.jianshu.com/p/4ba2db91030b" target="_blank" rel="noreferrer">Swift Router 页面跳转路由，组件解耦</a></li></ul><p><a href="https://fivestars.blog/swiftui/programmatic-navigation.html" target="_blank" rel="noreferrer">https://fivestars.blog/swiftui/programmatic-navigation.html</a></p><h2 id="网络请求" tabindex="-1">网络请求 <a class="header-anchor" href="#网络请求" aria-label="Permalink to &quot;网络请求&quot;">​</a></h2><p><a href="https://www.hackingwithswift.com/books/ios-swiftui/sending-and-receiving-codable-data-with-urlsession-and-swiftui" target="_blank" rel="noreferrer">https://www.hackingwithswift.com/books/ios-swiftui/sending-and-receiving-codable-data-with-urlsession-and-swiftui</a></p><h2 id="一些工具" tabindex="-1">一些工具 <a class="header-anchor" href="#一些工具" aria-label="Permalink to &quot;一些工具&quot;">​</a></h2><h3 id="日志打印" tabindex="-1">日志打印 <a class="header-anchor" href="#日志打印" aria-label="Permalink to &quot;日志打印&quot;">​</a></h3><p>在XCode查看print的日志</p><p>参考：<a href="https://www.xspdf.com/resolution/58643513.html" target="_blank" rel="noreferrer">https://www.xspdf.com/resolution/58643513.html</a></p><p>使用<code>command + shift + c</code></p><h3 id="内置图标" tabindex="-1">内置图标 <a class="header-anchor" href="#内置图标" aria-label="Permalink to &quot;内置图标&quot;">​</a></h3><p>参考：<a href="https://swiftcafe.io/post/sf-symbol" target="_blank" rel="noreferrer">解读 WWDC19 - SF Symbols 内置图标库</a></p><p>可以在<a href="https://developer.apple.com/sf-symbols/" target="_blank" rel="noreferrer">开发者官网</a> 下载<code>SF Symbols 2</code>App，这个app列举了所有图标</p><p><img src="http://img.shymean.com/oPic/1612660841313_157.png" alt=""></p><p>打开之后大概是这个样子的</p><p><img src="http://img.shymean.com/oPic/1612660943412_996.png" alt=""></p><p>内置了2400多个图标，根据对应的名字就可以使用了</p><div class="language-swift vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">swift</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Image</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">systemName</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;photo&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><h2 id="扩展阅读" tabindex="-1">扩展阅读 <a class="header-anchor" href="#扩展阅读" aria-label="Permalink to &quot;扩展阅读&quot;">​</a></h2><p>感兴趣的可以阅读下，提前知道后续还需要学习哪些东西</p><ul><li><a href="https://segmentfault.com/a/1190000023237307" target="_blank" rel="noreferrer">详解 WWDC 20 SwiftUI 的重大改变及核心优势</a></li><li><a href="https://mp.weixin.qq.com/s/ciiauLB__o-cXXfKn7lL1Q" target="_blank" rel="noreferrer">系列文章深度解读|SwiftUI 背后那些事儿</a></li><li><a href="https://www.infoq.cn/article/twnqud4aisurojcgwsx9" target="_blank" rel="noreferrer">关于 SwiftUI，看这一篇就够了</a></li><li><a href="https://zhuanlan.zhihu.com/p/68275232" target="_blank" rel="noreferrer">从 SwiftUI 谈声明式 UI 与类型系统</a></li><li><a href="https://www.infoq.cn/article/hsimydm*examgvql8kxj" target="_blank" rel="noreferrer">SwiftUI：苹果的一次天才尝试</a></li></ul><p>从 wwdc 学 SwiftUI——搭建你的第一个 SwiftUI 应用 (系列文章)</p><ul><li><a href="https://juejin.cn/post/6920028335615672328" target="_blank" rel="noreferrer">https://juejin.cn/post/6920028335615672328</a></li><li><a href="https://juejin.cn/post/6921234174443536398" target="_blank" rel="noreferrer">https://juejin.cn/post/6921234174443536398</a></li><li><a href="https://juejin.cn/post/6922629894421610504" target="_blank" rel="noreferrer">https://juejin.cn/post/6922629894421610504</a></li><li><a href="https://juejin.cn/post/6925318973433069576" target="_blank" rel="noreferrer">https://juejin.cn/post/6925318973433069576</a></li></ul>`,63),l=[h];function p(e,k,r,E,d,o){return a(),i("div",null,l)}const y=s(n,[["render",p]]);export{c as __pageData,y as default};