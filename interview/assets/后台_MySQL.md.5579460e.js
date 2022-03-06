import{_ as a,c as s,o as n,b as e}from"./app.946f11db.js";const g='{"title":"\u76F8\u5173\u6982\u5FF5","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u76F8\u5173\u6982\u5FF5","slug":"\u76F8\u5173\u6982\u5FF5"},{"level":3,"title":"\u521B\u5EFA\u6D41\u7A0B","slug":"\u521B\u5EFA\u6D41\u7A0B"},{"level":3,"title":"\u6570\u636E\u7C7B\u578B","slug":"\u6570\u636E\u7C7B\u578B"},{"level":3,"title":"\u4E3B\u952E/\u7A7A/\u9ED8\u8BA4\u503C","slug":"\u4E3B\u952E-\u7A7A-\u9ED8\u8BA4\u503C"},{"level":2,"title":"CRUD","slug":"crud"},{"level":3,"title":"\u67E5\u8BE2","slug":"\u67E5\u8BE2"},{"level":3,"title":"\u589E\u52A0","slug":"\u589E\u52A0"},{"level":3,"title":"\u5220\u9664","slug":"\u5220\u9664"},{"level":3,"title":"\u4FEE\u6539","slug":"\u4FEE\u6539"},{"level":2,"title":"\u5E38\u89C1\u60C5\u5F62\u4E0E\u5BF9\u5E94\u8BED\u53E5","slug":"\u5E38\u89C1\u60C5\u5F62\u4E0E\u5BF9\u5E94\u8BED\u53E5"},{"level":3,"title":"\u5206\u7EC4","slug":"\u5206\u7EC4"},{"level":3,"title":"\u5B50\u67E5\u8BE2","slug":"\u5B50\u67E5\u8BE2"},{"level":3,"title":"\u8054\u8868","slug":"\u8054\u8868"},{"level":2,"title":"\u9009\u62E9\u5408\u9002\u7684\u6570\u636E\u7C7B\u578B","slug":"\u9009\u62E9\u5408\u9002\u7684\u6570\u636E\u7C7B\u578B"},{"level":3,"title":"\u6570\u5B57\u7C7B\u578B","slug":"\u6570\u5B57\u7C7B\u578B"},{"level":3,"title":"\u65E5\u671F\u65F6\u95F4\u7C7B\u578B","slug":"\u65E5\u671F\u65F6\u95F4\u7C7B\u578B"},{"level":3,"title":"\u5B57\u7B26 (\u4E32) \u7C7B\u578B","slug":"\u5B57\u7B26-\u4E32-\u7C7B\u578B"},{"level":3,"title":"\u679A\u4E3E\u548C\u96C6\u5408\u7C7B\u578B","slug":"\u679A\u4E3E\u548C\u96C6\u5408\u7C7B\u578B"},{"level":2,"title":"\u9884\u5904\u7406\u8BED\u53E5","slug":"\u9884\u5904\u7406\u8BED\u53E5"},{"level":2,"title":"\u8FDC\u7A0B\u8FDE\u63A5MySQL","slug":"\u8FDC\u7A0B\u8FDE\u63A5mysql"},{"level":3,"title":"mysql8\u53CA\u4E4B\u524D\u7684\u7248\u672C","slug":"mysql8\u53CA\u4E4B\u524D\u7684\u7248\u672C"},{"level":3,"title":"mysql8\u4E4B\u540E\u7684\u7248\u672C","slug":"mysql8\u4E4B\u540E\u7684\u7248\u672C"}],"relativePath":"\u540E\u53F0/MySQL.md"}',t={},p=e(`<h2 id="\u76F8\u5173\u6982\u5FF5" tabindex="-1">\u76F8\u5173\u6982\u5FF5 <a class="header-anchor" href="#\u76F8\u5173\u6982\u5FF5" aria-hidden="true">#</a></h2><p>\u6570\u636E\u5E93\u6700\u4E3B\u8981\u7684\u7528\u9014\u5C31\u662F\u7528\u6765\u5B58\u50A8\u6570\u636E\u548C\u4F7F\u7528(\u8BFB\u53D6)\u6570\u636E\u3002\u5982\u4F55\u7528\u6B63\u786E\u7684\u59FF\u52BF\u4F7F\u7528\u6570\u636E\u5E93\u5462\uFF1F</p><p>Mysql\u662F\u4E00\u79CD\u5173\u7CFB\u578B\u6570\u636E\u5E93\uFF0C\u4EE5\u53CA\u6240\u652F\u6301\u7684\u5B58\u50A8\u5F15\u64CE\u3002</p><ul><li>InnoDB\u662F\u4E00\u4E2A\u53EF\u9760\u7684\u4E8B\u7269\u5904\u7406\u5F15\u64CE\uFF0C\u4F46\u662F\u4E0D\u652F\u6301\u5168\u6587\u672C\u641C\u7D22</li><li>MyISAM\u662F\u4E00\u4E2A\u6027\u80FD\u6781\u9AD8\u7684\u5F15\u64CE\uFF0C\u4ED6\u652F\u6301\u5168\u6587\u4E0D\u641C\u7D22\u4F46\u662F\u4E0D\u652F\u6301\u4E8B\u7269</li></ul><p>\u8FD9\u91CC\u6709\u4E24\u4E2A\u6982\u5FF5\uFF1A</p><ul><li>\u4E8B\u7269\uFF1A\u7528\u6765\u4FDD\u8BC1\u6279\u5904\u7406\u7684\u6570\u636E\u8981\u4E48\u5168\u90E8\u6210\u529F\u6267\u884C\uFF0C\u8981\u4E48\u5168\u90E8\u4E0D\u6210\u529F\uFF08\u5373\u5728\u64CD\u4F5C\u4E2D\u51FA\u73B0\u9519\u8BEF\u65F6\uFF0C\u4F1A\u56DE\u590D\u5230\u6CA1\u6709\u8FDB\u884C\u64CD\u4F5C\u4E4B\u524D\u7684\u72B6\u6001\uFF09\uFF0C\u4FDD\u8BC1\u8868\u4E2D\u6570\u636E\u7684\u5B8C\u6574\u6027</li><li>\u5168\u6587\u672C\u641C\u7D22\uFF1A\u4E3B\u8981\u7528\u6765\u89E3\u51B3LIKE\u641C\u7D22\u7684\u9650\u5236</li></ul><p>\u4EE5\u53CA\u670D\u52A1\u5668\uFF0C\u6570\u636E\u5E93\u548C\u6570\u636E\u8868\u4E4B\u95F4\u6240\u4F7F\u7528\u7684\u5B57\u7B26\u96C6\uFF0C\u7F16\u7801\u4EE5\u53CA\u6821\u5BF9\uFF1A</p><ul><li>\u5B57\u7B26\uFF1A\u5B57\u6BCD\u548C\u7B26\u53F7\u7684\u96C6\u5408</li><li>\u7F16\u7801\uFF1A\u67D0\u4E2A\u5B57\u7B26\u96C6\u6210\u5458\u7684\u5185\u90E8\u8868\u793A</li><li>\u6821\u5BF9\uFF1A\u4E3A\u89C4\u5B9A\u5B57\u7B26\u5982\u4F55\u8FDB\u884C\u6BD4\u8F83\u7684\u6307\u4EE4\uFF08\u6392\u5E8F\uFF09</li></ul><h3 id="\u521B\u5EFA\u6D41\u7A0B" tabindex="-1">\u521B\u5EFA\u6D41\u7A0B <a class="header-anchor" href="#\u521B\u5EFA\u6D41\u7A0B" aria-hidden="true">#</a></h3><p>\u9996\u5148\u9700\u8981\u521B\u5EFA\u4E00\u4E2A\u6570\u636E\u5E93\uFF0C\u7136\u540E\u518D\u6570\u636E\u5E93\u4E2D\u521B\u5EFA\u9700\u8981\u7684\u8868\u3002\u4E00\u822C\u60C5\u51B5\u4E0B\u4F1A\u7EDF\u4E00\u540C\u4E00\u4E2A\u6570\u636E\u5E93\u4E2D\u7684\u8868\u524D\u7F00\uFF08\u4FBF\u4E8E\u8BC6\u522B\u4E14\u9632\u6B62\u4E0D\u540C\u6570\u636E\u5E93\u4E0B\u7684\u8868\u540D\u91CD\u590D\u5BFC\u81F4\u6DF7\u6DC6\uFF09\u3002</p><p>\u521B\u5EFA\u8868\u662F\u975E\u5E38\u91CD\u8981\u7684\u8D77\u70B9\uFF0C\u5E94\u5F53\u5C3D\u529B\u907F\u514D\u5728\u540E\u7EED\u7684\u64CD\u4F5C\u4E2D\u91CD\u65B0\u66F4\u6539\u8868\u7684\u7ED3\u6784\uFF0C\u660E\u667A\u5730\u89C4\u5212\u4E0D\u540C\u8868\u7684\u7528\u9014\u548C\u4E00\u5F20\u8868\u7684\u5B57\u6BB5\u662F\u4E00\u4EF6\u5341\u5206\u56F0\u96BE\u7684\u4E8B\u60C5\u3002</p><h3 id="\u6570\u636E\u7C7B\u578B" tabindex="-1">\u6570\u636E\u7C7B\u578B <a class="header-anchor" href="#\u6570\u636E\u7C7B\u578B" aria-hidden="true">#</a></h3><p>\u9009\u62E9\u5408\u9002\u7684\u6570\u636E\u7C7B\u578B\uFF0C\u6700\u4E3B\u8981\u7684\u76EE\u7684\u662F\u4E3A\u4E86\u7528\u8F83\u5C0F\u7684\u5B58\u50A8\u4EE3\u4EF7\u6362\u6765\u8F83\u9AD8\u7684\u6570\u636E\u5E93\u6027\u80FD\u3002\u6B64\u5916\uFF0C\u4E34\u65F6\u66F4\u6539\u5B57\u6BB5\u7684\u6570\u636E\u7C7B\u578B\u53EF\u80FD\u4F1A\u9020\u6210\u6570\u636E\u7684\u4E22\u5931\u3002MySQL\u4E3B\u8981\u652F\u6301\u7684\u6570\u636E\u7C7B\u578B\u5305\u62EC\uFF1A</p><ul><li>\u4E32</li><li>\u6570\u503C</li><li>\u65E5\u671F</li><li>\u4E8C\u8FDB\u5236</li></ul><h3 id="\u4E3B\u952E-\u7A7A-\u9ED8\u8BA4\u503C" tabindex="-1">\u4E3B\u952E/\u7A7A/\u9ED8\u8BA4\u503C <a class="header-anchor" href="#\u4E3B\u952E-\u7A7A-\u9ED8\u8BA4\u503C" aria-hidden="true">#</a></h3><p>NULL\u8868\u793A\u6CA1\u6709\u503C\u6216\u8005\u7F3A\u503C\uFF0C\u5B9E\u9645\u4E0A\u4E3A\u4E86\u6027\u80FD\u4E00\u822C\u90FD\u4F1A\u4E3A\u5B57\u6BB5\u5B9A\u4E49NOT NULL\u3002</p><p>\u4E3B\u952E\u662F\u7528\u6765\u533A\u522B\u8868\u4E2D\u6BCF\u4E2A\u884C\u7684\u5B57\u6BB5\uFF0C\u8FD9\u5C31\u8981\u6C42\u4E3B\u952E\u7684\u503C\u5FC5\u987B\u60DF\u4E00\uFF08\u591A\u4E2A\u4E3B\u952E\u5219\u8981\u6C42\u4ED6\u4EEC\u7684\u7EC4\u5408\u503C\u5FC5\u987B\u60DF\u4E00\uFF09\uFF0C\u4E00\u822C\u4F7F\u7528\u81EA\u589E\u6765\u4FDD\u8BC1\u4E3B\u952E\u7684\u503CAUTO_INCREMENT\u3002\u6CE8\u610F\u4E3B\u952E\u53EA\u80FD\u4E3ANOT NULL\u7684\u5B57\u6BB5\u3002</p><p>\u5982\u679C\u4E3A\u5B57\u6BB5\u5B9A\u4E49\u4E86\u975E\u7A7A\uFF0C\u5219\u5728\u66F4\u65B0\u6216\u8005\u63D2\u5165\u6570\u636E\u65F6\u5C31\u5FC5\u987B\u4E3A\u8BE5\u5B57\u6BB5\u4F20\u503C\uFF0C\u4E3A\u4E86\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898\uFF0C\u53EF\u4EE5\u5728\u5B9A\u4E49\u5B57\u6BB5\u65F6\u8BBE\u7F6E\u9ED8\u8BA4\u503C\uFF0C<strong>MySQL\u4E0D\u652F\u6301\u4F7F\u7528\u51FD\u6570\u4F5C\u4E3A\u9ED8\u8BA4\u503C</strong>\uFF0C\uFF08\u6CE8\u610F\u7A7A\u5B57\u7B26\u4E32\u548CNULL\u662F\u5B8C\u5168\u4E0D\u540C\u7684\u6982\u5FF5\uFF0C&#39;&#39;\u662F\u4E00\u4E2A\u6709\u6548\u7684\u503C\uFF09\u3002</p><h2 id="crud" tabindex="-1">CRUD <a class="header-anchor" href="#crud" aria-hidden="true">#</a></h2><p>\u4F7F\u7528\u6570\u636E\u5E93\u4E3B\u8981\u5C31\u662F\u56F4\u7ED5\u589E\u5220\u67E5\u6539\u800C\u6765\u7684\u3002</p><h3 id="\u67E5\u8BE2" tabindex="-1">\u67E5\u8BE2 <a class="header-anchor" href="#\u67E5\u8BE2" aria-hidden="true">#</a></h3><p>SELECT \u662F\u6570\u636E\u5E93\u4E2D\u6700\u91CD\u8981\u7684\u64CD\u4F5C\uFF01\u6211\u4EEC\u5C06\u6570\u636E\u653E\u5728\u6570\u636E\u5E93\u4E2D\uFF0C\u5E76\u5728\u9700\u8981\u7684\u65F6\u5019\u901A\u8FC7\u67D0\u79CD\u65B9\u5F0F\u67E5\u8BE2\u5F97\u5230\u6B63\u786E\u7684\u6570\u636E.</p><ul><li>\u666E\u901A\u67E5\u8BE2</li><li>\u6574\u7406\u7ED3\u679C</li><li>\u5B50\u67E5\u8BE2</li><li>\u8054\u7ED3</li><li>\u7EC4\u5408</li></ul><p>\u8BE6\u60C5\u8BED\u6CD5\u5982\u4E0B\uFF1A</p><div class="language-sql"><pre><code><span class="token keyword">select</span> \u5B57\u6BB5\u5217\u8868 <span class="token keyword">from</span> \u8868\u540D <span class="token punctuation">[</span><span class="token keyword">where</span> \u6761\u4EF6<span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token keyword">order</span> <span class="token keyword">by</span> \u5B57\u6BB5 <span class="token keyword">asc</span><span class="token operator">|</span><span class="token keyword">desc</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token keyword">limit</span> \u8D77\u59CB\u4F4D\u7F6E\uFF0C\u957F\u5EA6<span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token keyword">group</span> <span class="token keyword">by</span> \u5B57\u6BB5\u540D\u79F0\uFF08\u5206\u7EC4\uFF09<span class="token punctuation">]</span> 
</code></pre></div><ul><li>\u67E5\u8BE2\u90E8\u5206\u5B57\u6BB5</li></ul><div class="language-"><pre><code># \u591A\u4E2A\u5B57\u6BB5\u4F7F\u7528\u9017\u53F7\u5206\u9694
select id,stuName from stu;
# \u4F7F\u7528as\u4E3A\u5B57\u6BB5\u65B0\u589E\u522B\u540D
select stuName as name from txm_test;
</code></pre></div><ul><li>order by \u6392\u5E8F \uFF1Aasc\u5347\u5E8F\uFF0Cdesc\u964D\u5E8F</li></ul><div class="language-"><pre><code>select * from stu order by id desc;
</code></pre></div><ul><li>\u622A\u53D6</li></ul><div class="language-"><pre><code># \u7D22\u5F15\u503C\u662F\u4ECE0\u5F00\u59CB\u7684
select * from stu limit 1,3;
</code></pre></div><ul><li>\u5206\u7EC4</li></ul><div class="language-"><pre><code># \u663E\u793A\u7684\u662F\u6BCF\u4E2A\u7EC4\u7684\u4E00\u6761\u6570\u636E\u8BB0\u5F55
select * from stu group by stuSex;
</code></pre></div><ul><li>where\u6761\u4EF6 <ul><li>\u6BD4\u8F83\u7B26\u53F7 &gt; &lt; &gt;= &lt;= = &lt;&gt;\uFF08\u4E0D\u7B49\u4E8E\uFF09</li></ul><div class="language-"><pre><code>select * from stu where stuSex = 1;
</code></pre></div><ul><li>\u903B\u8F91\u8FD0\u7B97 and or</li></ul><div class="language-"><pre><code>select * from stu where id &gt; 1 and id &lt; 3;
</code></pre></div><ul><li>\u6A21\u7CCA\u641C\u7D22\uFF1A\u5B57\u7B26\u4E32\u4E2D\u542B\u6709\u67D0\u4E2A\u5173\u952E\u8BCD\uFF0C\u5C31\u80FD\u627E\u5230</li></ul><div class="language-"><pre><code># %\u5360\u4F4D\u7B26\u8868\u793A0\u4E2A\u6216\u591A\u4E2A\u5B57\u7B26\uFF0C_\u8868\u793A1\u4E2A\u5B57\u7B26
select * from stu where stuName like &#39;%ta%&#39;;
# between ... and ...\u8FDE\u7EED\u533A\u95F4
# in \u4E0D\u8FDE\u7EED\u8303\u56F4\uFF0C\u76F8\u5F53\u4E8E\u8FDE\u7EED\u4F7F\u7528or

</code></pre></div></li></ul><h3 id="\u589E\u52A0" tabindex="-1">\u589E\u52A0 <a class="header-anchor" href="#\u589E\u52A0" aria-hidden="true">#</a></h3><div class="language-sql"><pre><code><span class="token keyword">insert</span> <span class="token punctuation">[</span><span class="token keyword">into</span><span class="token punctuation">]</span> \u8868\u540D <span class="token punctuation">[</span><span class="token punctuation">(</span>\u5217\u540D<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span><span class="token punctuation">]</span> <span class="token keyword">values</span> <span class="token punctuation">(</span>\u503C<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="\u5220\u9664" tabindex="-1">\u5220\u9664 <a class="header-anchor" href="#\u5220\u9664" aria-hidden="true">#</a></h3><div class="language-sql"><pre><code><span class="token keyword">delete</span> <span class="token keyword">from</span> \u8868\u540D\u79F0 <span class="token punctuation">[</span><span class="token keyword">where</span> \u5220\u9664\u6761\u4EF6<span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="\u4FEE\u6539" tabindex="-1">\u4FEE\u6539 <a class="header-anchor" href="#\u4FEE\u6539" aria-hidden="true">#</a></h3><div class="language-sql"><pre><code><span class="token keyword">update</span> \u8868\u540D\u79F0 <span class="token keyword">set</span> \u5217\u540D\u79F0<span class="token operator">=</span>\u65B0\u503C <span class="token punctuation">[</span><span class="token keyword">where</span> \u66F4\u65B0\u6761\u4EF6<span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="\u5E38\u89C1\u60C5\u5F62\u4E0E\u5BF9\u5E94\u8BED\u53E5" tabindex="-1">\u5E38\u89C1\u60C5\u5F62\u4E0E\u5BF9\u5E94\u8BED\u53E5 <a class="header-anchor" href="#\u5E38\u89C1\u60C5\u5F62\u4E0E\u5BF9\u5E94\u8BED\u53E5" aria-hidden="true">#</a></h2><h3 id="\u5206\u7EC4" tabindex="-1">\u5206\u7EC4 <a class="header-anchor" href="#\u5206\u7EC4" aria-hidden="true">#</a></h3><p>\u53EF\u4EE5\u4F7F\u7528\u805A\u5408\u51FD\u6570\u8FD4\u56DE\u67D0\u4E2A\u4F9B\u5E94\u5546\u63D0\u4F9B\u7684\u4EA7\u54C1\u6570\u76EE\uFF0C\u5982\u679C\u9700\u8981\u8FD4\u56DE\u6BCF\u4E2A\u4F9B\u5E94\u5546\u7684\u4EA7\u54C1\u6570\u76EE\uFF0C\u5219\u9700\u8981\u4F7F\u7528\u5206\u7EC4\u3002</p><div class="language-sql"><pre><code><span class="token keyword">SELECT</span> vend_id<span class="token punctuation">,</span> <span class="token function">COUNT</span><span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">)</span> <span class="token keyword">AS</span> num <span class="token keyword">FROM</span> products <span class="token keyword">GROUP</span> <span class="token keyword">BY</span> vend_id
</code></pre></div><p>\u4F46\u662F\uFF1A\u5206\u7EC4\u5E76\u4E0D\u662F\u7528\u6765\u8FD4\u56DE\u4E8C\u7EF4\u6570\u7EC4\u7684\uFF0Cmysql\u4E5F\u5E76\u4E0D\u80FD\u5B9E\u73B0\u8FD9\u6837\u7684\u529F\u80FD\u3002\u6362\u4E2A\u89D2\u5EA6\u770B\uFF0C\u67D0\u4E2A\u5206\u7EC4\u5185\u90E8\u5404\u884C\u5E94\u8BE5\u5177\u6709\u67D0\u4E9B\u5171\u540C\u70B9\u624D\u884C\uFF0C\u8FD9\u4E2A\u5171\u540C\u70B9\u5C31\u662F\u6709GROUP BY\u6307\u5B9A\u7684\uFF0C\u5982\u679Cgroup\u5B50\u53E5\u7684\u5B57\u6BB5\u90FD\u4E0D\u76F8\u540C\uFF0C\u5219\u80AF\u5B9A\u4F1A\u5212\u5206\u5230\u4E0D\u540C\u7684\u5206\u7EC4\u4E2D\u53BB\uFF0C\u9020\u6210\u4E00\u4E9B\u56F0\u60D1\u3002</p><p>\u9488\u5BF9\u5206\u7EC4\u4E00\u4E2A\u5E38\u89C1\u7684\u9700\u6C42\u662F\uFF1A\u8FD4\u56DE\u6BCF\u4E2A\u5206\u7EC4\u5305\u542B\u7684\u884C\uFF0C \u6709\u4E00\u4E2A\u6298\u4E2D\u7684\u529E\u6CD5\u5C31\u662F\u4F7F\u7528<code>GROUP_CONCAT</code>\u51FD\u6570\u3002</p><div class="language-sql"><pre><code><span class="token keyword">SELECT</span> GROUP_CONCAT<span class="token punctuation">(</span>prod_id<span class="token punctuation">)</span><span class="token punctuation">,</span> GROUP_CONCAT<span class="token punctuation">(</span>prod_name<span class="token punctuation">)</span> <span class="token keyword">FROM</span> products <span class="token keyword">GROUP</span> <span class="token keyword">BY</span> vend_id<span class="token punctuation">;</span>
</code></pre></div><p>\u4F7F\u7528\u5206\u7EC4\u7684\u4E00\u4E2A\u660E\u663E\u6807\u5FD7\u5C31\u662F\uFF1A\u5982\u679C\u4E0E\u805A\u96C6\u51FD\u6570\u4E00\u8D77\u4F7F\u7528\u5217\u6216\u8868\u8FBE\u5F0F\uFF0C\u5219\u5FC5\u987B\u4F7F\u7528\u5206\u7EC4</p><h3 id="\u5B50\u67E5\u8BE2" tabindex="-1">\u5B50\u67E5\u8BE2 <a class="header-anchor" href="#\u5B50\u67E5\u8BE2" aria-hidden="true">#</a></h3><p>\u5982\u679C\u67D0\u6B21\u67E5\u8BE2\u7684\u6761\u4EF6\u4F9D\u8D56\u4E8E\u53E6\u5916\u7684\u67E5\u8BE2\u7ED3\u679C\uFF0C\u5219\u53EF\u4EE5\u4F7F\u7528\u5B50\u67E5\u8BE2\uFF0C\u5982\uFF1A\u7B5B\u9009\u8D2D\u4E70\u4E86\u67D0\u4EF6\u5546\u54C1\u7684\u6240\u6709\u987E\u5BA2</p><div class="language-sql"><pre><code><span class="token keyword">SELECT</span> cust_id <span class="token keyword">FROM</span> orders <span class="token keyword">WHERE</span> order_num <span class="token operator">IN</span> <span class="token punctuation">(</span>
    <span class="token keyword">SELECT</span> order_num <span class="token keyword">FROM</span> orderitems <span class="token keyword">WHERE</span> prod_id <span class="token operator">=</span> <span class="token string">&#39;TNT2&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
</code></pre></div><p>\u5B50\u67E5\u8BE2\u7684\u5D4C\u5957\u5E76\u6CA1\u6709\u9650\u5236\uFF0C\u5982\u679C\u8FD8\u9700\u8981\u6839\u636Ecust_id\u67E5\u8BE2\u5BF9\u5E94\u987E\u5BA2\u7684\u8BE6\u7EC6\u4FE1\u606F\uFF0C\u5219\u53EF\u4EE5\u5C06\u4E0A\u9762\u8FD9\u6761\u8BED\u53E5\u7684\u67E5\u8BE2\u7ED3\u679C\u518D\u6B21\u4F5C\u4E3A\u4ECEcustomer\u8868\u4E2D\u67E5\u8BE2\u7684\u7B5B\u9009\u6761\u4EF6\u3002</p><p>\u5B50\u67E5\u8BE2\u7684\u53E6\u5916\u4E00\u4E2A\u7528\u5904\u662F\u8BA1\u7B97\u5B57\u6BB5\uFF0C\u5982\uFF1A\u67E5\u8BE2customers\u8868\u4E2D\u6BCF\u4E2A\u987E\u5BA2\u7684\u8BA2\u5355\uFF0C\u8BA2\u5355\u4FDD\u5B58\u5728ordesr\u8868\u4E2D\uFF08\u5C3D\u7BA1\u8FD9\u79CD\u60C5\u51B5\u66F4\u5408\u9002\u7684\u505A\u6CD5\u662F\u4F7F\u7528\u8054\u7ED3\uFF09</p><div class="language-sql"><pre><code><span class="token keyword">SELECT</span> 
    cust_id<span class="token punctuation">,</span> 
    <span class="token punctuation">(</span><span class="token keyword">SELECT</span> <span class="token function">COUNT</span><span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">)</span> <span class="token keyword">FROM</span> orders <span class="token keyword">WHERE</span> customers<span class="token punctuation">.</span><span class="token identifier"><span class="token punctuation">\`</span>cust_id<span class="token punctuation">\`</span></span> <span class="token operator">=</span> orders<span class="token punctuation">.</span><span class="token identifier"><span class="token punctuation">\`</span>cust_id<span class="token punctuation">\`</span></span><span class="token punctuation">)</span> <span class="token keyword">AS</span> orders <span class="token keyword">FROM</span> customers<span class="token punctuation">;</span>
</code></pre></div><h3 id="\u8054\u8868" tabindex="-1">\u8054\u8868 <a class="header-anchor" href="#\u8054\u8868" aria-hidden="true">#</a></h3><p>\u628A\u6570\u636E\u62C6\u5206\u5728\u4E0D\u540C\u7684\u8868\u4E2D\u5F88\u6709\u5FC5\u8981\uFF0C\u8868\u4E4B\u95F4\u901A\u8FC7\u5916\u952E\u76F8\u8FDE\u3002\u6BD4\u5982\u8981\u67E5\u8BE2\u4F9B\u5E94\u5546\u548C\u4F9B\u5E94\u5546\u5BF9\u5E94\u7684\u4EA7\u54C1</p><div class="language-"><pre><code>SELECT	vend_name, prod_name, prod_price FROM vendors, products WHERE vendors.\`vend_id\` = products.\`vend_id\`;
</code></pre></div><p>\u5B9E\u9645\u4E0A\u8054\u7ED3\u66F4\u6807\u51C6\u7684\u5199\u6CD5\u662F</p><div class="language-"><pre><code>SELECT	vend_name, prod_name, prod_price FROM vendors INNER JOIN  products ON vendors.\`vend_id\` = products.\`vend_id\`;
</code></pre></div><h2 id="\u9009\u62E9\u5408\u9002\u7684\u6570\u636E\u7C7B\u578B" tabindex="-1">\u9009\u62E9\u5408\u9002\u7684\u6570\u636E\u7C7B\u578B <a class="header-anchor" href="#\u9009\u62E9\u5408\u9002\u7684\u6570\u636E\u7C7B\u578B" aria-hidden="true">#</a></h2><p>\u53C2\u8003: <a href="http://jingyan.baidu.com/article/f0062228d2e4a8fbd3f0c8a6.html" target="_blank" rel="noopener noreferrer">MySql \u6570\u636E\u7C7B\u578B</a></p><p>\u4E3B\u8981\u76EE\u7684\uFF1A\u7528\u8F83\u5C0F\u7684\u5B58\u50A8\u4EE3\u4EF7\u6362\u6765\u8F83\u9AD8\u7684\u6570\u636E\u5E93\u6027\u80FD\u3002</p><ul><li>\u6574\u5F62 <ul><li>tinyint 1\u5B57\u8282</li><li>smallint 2\u5B57\u8282</li><li>int 4\u5B57\u8282</li><li>BIGINT 8\u5B57\u8282</li></ul></li><li>\u6D6E\u70B9\u578B <ul><li>float 4\u5B57\u8282</li><li>double 4\u5B57\u8282</li><li>DECIMA[m,d] \u7CBE\u5EA6\u5C0F\u6570 m \u603B\u4F4D\u6570 d \u5C0F\u6570\u70B9\u53F3\u8FB9\u7684\u4F4D\u6570</li></ul></li><li>\u5B57\u7B26\u4E32 <ul><li>char(\u4F4D\u6570) \u5B9A\u5E38\u5B57\u7B26</li><li>varchar(\u4F4D\u6570) \u53D8\u957F\u5B57\u7B26</li><li>text 65532\u4E2A\u5B57\u7B26</li><li>MEDIUMBLOB 2^24\u4E2A\u5B57\u7B26</li><li>enum(&#39;1&#39;[,&#39;2&#39;]) \u679A\u4E3E</li></ul></li><li>\u65E5\u671F <ul><li>date \u65E5\u671F</li><li>time \u65F6\u95F4</li><li>datetime \u65E5\u671F\u65F6\u95F4</li></ul></li></ul><div class="language-"><pre><code>create table stu(
    id int(6) auto_increment primary key,
    stuNUm varchar(6),
    stuName varchar(20),
    stuAge tinyint(2),
    stuSex enum(&quot;1&quot;,&quot;2&quot;),
    stuTel varchar(20)
)

desc stu;
</code></pre></div><h3 id="\u6570\u5B57\u7C7B\u578B" tabindex="-1">\u6570\u5B57\u7C7B\u578B <a class="header-anchor" href="#\u6570\u5B57\u7C7B\u578B" aria-hidden="true">#</a></h3><p>\u6570\u5B57\u7C7B\u578B\u5206\u4E3A\u4E09\u7C7B\uFF1A\u6574\u6570\u7C7B\u3001\u5C0F\u6570\u7C7B\u548C\u6570\u5B57\u7C7B</p><p>\u6570\u5B57\u7C7B</p><p>\u6240\u8C13\u7684\u201C\u6570\u5B57\u7C7B\u201D\uFF0C\u5C31\u662F\u6307 DECIMAL \u548C NUMERIC\uFF0C\u5B83\u4EEC\u662F\u540C\u4E00\u79CD\u7C7B\u578B\u3002\u5B83\u4E25\u683C\u7684\u8BF4\u4E0D\u662F\u4E00\u79CD\u6570\u5B57\u7C7B\u578B\uFF0C\u56E0\u4E3A\u4ED6\u4EEC\u5B9E\u9645\u4E0A\u662F\u5C06\u6570\u5B57\u4EE5\u5B57\u7B26\u4E32\u5F62\u5F0F\u4FDD\u5B58\u7684;\u4ED6\u7684\u503C\u7684\u6BCF\u4E00\u4F4D (\u5305\u62EC\u5C0F\u6570\u70B9) \u5360\u4E00\u4E2A\u5B57\u8282\u7684\u5B58\u50A8\u7A7A\u95F4\uFF0C\u56E0\u6B64\u8FD9\u79CD\u7C7B\u578B\u8017\u8D39\u7A7A\u95F4\u6BD4\u8F83\u5927\u3002 \u4F46\u662F\u5B83\u7684\u4E00\u4E2A\u7A81\u51FA\u7684\u4F18\u70B9\u662F\u5C0F\u6570\u7684\u4F4D\u6570\u56FA\u5B9A\uFF0C\u5728\u8FD0\u7B97\u4E2D\u4E0D\u4F1A\u201C\u5931\u771F\u201D\uFF0C\u6240\u4EE5\u6BD4\u8F83\u9002\u5408\u7528\u4E8E\u201C\u4EF7\u683C\u201D\u3001\u201C\u91D1\u989D\u201D\u8FD9\u6837\u5BF9\u7CBE\u5EA6\u8981\u6C42\u4E0D\u9AD8\u4F46\u51C6\u786E\u5EA6\u8981\u6C42\u975E\u5E38\u9AD8\u7684\u5B57\u6BB5\u3002</p><p>\u5C0F\u6570\u7C7B</p><p>\u5C0F\u6570\u7C7B\uFF0C\u5373\u6D6E\u70B9\u6570\u7C7B\u578B\uFF0C\u6839\u636E\u7CBE\u5EA6\u7684\u4E0D\u540C\uFF0C\u6709 FLOAT \u548C DOUBLE \u4E24\u79CD\u3002\u5B83\u4EEC\u7684\u4F18\u52BF\u662F\u7CBE\u786E\u5EA6\uFF0CFLOAT \u53EF\u4EE5\u8868\u793A\u7EDD\u5BF9\u503C\u975E\u5E38\u5C0F\u3001\u5C0F\u5230\u7EA6 1.17E-38 (0.000...0117\uFF0C\u5C0F\u6570\u70B9\u540E\u9762\u6709 37 \u4E2A\u96F6) \u7684\u5C0F\u6570\uFF0C\u800C DOUBLE \u66F4\u662F\u53EF\u4EE5\u8868\u793A\u7EDD\u5BF9\u503C\u5C0F\u5230\u7EA6 2.22E-308 (0.000...0222\uFF0C\u5C0F\u6570\u70B9\u540E\u9762\u6709 307 \u4E2A\u96F6) \u7684\u5C0F\u6570\u3002FLOAT \u7C7B\u578B\u548C DOUBLE \u7C7B\u578B\u5360\u7528\u5B58\u50A8\u7A7A\u95F4\u5206\u522B\u662F 4 \u5B57\u8282\u548C 8 \u5B57\u8282\u3002\u5982\u679C\u9700\u8981\u7528\u5230\u5C0F\u6570\u7684\u5B57\u6BB5\uFF0C\u7CBE\u5EA6\u8981\u6C42\u4E0D\u9AD8\u7684\uFF0C\u5F53\u7136\u7528 FLOAT \u4E86\u3002\u53EF\u662F\u8BF4\u53E5\u5B9E\u5728\u8BDD\uFF0C\u6211\u4EEC\u201C\u6C11\u7528\u201D\u7684\u6570\u636E\uFF0C\u54EA\u6709\u8981\u6C42\u7CBE\u5EA6\u90A3\u4E48\u9AD8\u7684</p><p>\u6574\u6570\u7C7B</p><p>\u7528\u7684\u6700\u591A\u7684\uFF0C\u6700\u503C\u5F97\u7CBE\u6253\u7EC6\u7B97\u7684\uFF0C\u662F\u6574\u6570\u7C7B\u578B\u3002\u4ECE\u53EA\u5360\u4E00\u4E2A\u5B57\u8282\u5B58\u50A8\u7A7A\u95F4\u7684 TINYINT \u5230\u5360 8 \u4E2A\u5B57\u8282\u7684 BIGINT\uFF0C\u6311\u9009\u4E00\u4E2A\u201C\u591F\u7528\u201D\u5E76\u4E14\u5360\u7528\u5B58\u50A8\u7A7A\u95F4\u6700\u5C0F\u7684\u7C7B\u578B\u662F\u8BBE\u8BA1\u6570\u636E\u5E93\u65F6\u5E94\u8BE5\u8003\u8651\u7684\u3002TINYINT\u3001SMALLINT\u3001MEDIUMINT\u3001INT \u548C BIGINT \u5360\u7528\u5B58\u50A8\u7A7A\u95F4\u5206\u522B\u4E3A 1 \u5B57\u8282\u30012 \u5B57\u8282\u30013 \u5B57\u8282\u30014 \u5B57\u8282\u548C 8 \u5B57\u8282\uFF0C\u5C31\u65E0\u7B26\u53F7\u7684\u6574\u6570\u800C\u8A00\uFF0C\u8FD9\u4E9B\u7C7B\u578B\u80FD\u8868\u793A\u7684\u6700\u5927\u6574\u6570\u5206\u522B\u4E3A 255\u300165535\u300116777215\u30014294967295 \u548C 18446744073709551615\u3002\u5982\u679C\u7528\u6765\u4FDD\u5B58\u7528\u6237\u7684\u5E74\u9F84 (\u4E3E\u4F8B\u6765\u8BF4\uFF0C\u6570\u636E\u5E93\u4E2D\u4FDD\u5B58\u5E74\u9F84\u662F\u4E0D\u53EF\u53D6\u7684)\uFF0C\u7528 TINYINT \u5C31\u591F\u4E86</p><h3 id="\u65E5\u671F\u65F6\u95F4\u7C7B\u578B" tabindex="-1">\u65E5\u671F\u65F6\u95F4\u7C7B\u578B <a class="header-anchor" href="#\u65E5\u671F\u65F6\u95F4\u7C7B\u578B" aria-hidden="true">#</a></h3><p>\u65E5\u671F\u548C\u65F6\u95F4\u7C7B\u578B\u6BD4\u8F83\u7B80\u5355\uFF0C\u65E0\u975E\u662F DATE\u3001TIME\u3001DATETIME\u3001TIMESTAMP \u548C YEAR \u7B49\u51E0\u4E2A\u7C7B\u578B\u3002\u53EA\u5BF9\u65E5\u671F\u654F\u611F\uFF0C\u800C\u5BF9\u65F6\u95F4\u6CA1\u6709\u8981\u6C42\u7684\u5B57\u6BB5\uFF0C\u5C31\u7528 DATE \u800C\u4E0D\u7528 DATETIME \u662F\u4E0D\u7528\u8BF4\u7684\u4E86;\u5355\u72EC\u4F7F\u7528\u65F6\u95F4\u7684\u60C5\u51B5\u4E5F\u65F6\u6709\u53D1\u751F\u2015\u2015\u4F7F\u7528 TIME;\u4F46\u6700\u591A\u7528\u5230\u7684\u8FD8\u662F\u7528 DATETIME\u3002\u5728\u65E5\u671F\u65F6\u95F4\u7C7B\u578B\u4E0A\u6CA1\u6709\u4EC0\u4E48\u6587\u7AE0\u53EF\u505A\uFF0C\u8FD9\u91CC\u5C31\u4E0D\u518D\u8BE6\u8FF0\u3002</p><h3 id="\u5B57\u7B26-\u4E32-\u7C7B\u578B" tabindex="-1">\u5B57\u7B26 (\u4E32) \u7C7B\u578B <a class="header-anchor" href="#\u5B57\u7B26-\u4E32-\u7C7B\u578B" aria-hidden="true">#</a></h3><p>\u4E0D\u8981\u4EE5\u4E3A\u5B57\u7B26\u7C7B\u578B\u5C31\u662F CHAR\uFF0CCHAR \u548C VARCHAR \u7684\u533A\u522B\u5728\u4E8E CHAR \u662F\u56FA\u5B9A\u957F\u5EA6\uFF0C\u53EA\u8981\u4F60\u5B9A\u4E49\u4E00\u4E2A\u5B57\u6BB5\u662F CHAR(10)\uFF0C\u90A3\u4E48\u4E0D\u8BBA\u4F60\u5B58\u50A8\u7684\u6570\u636E\u662F\u5426\u8FBE\u5230\u4E86 10 \u4E2A\u5B57\u8282\uFF0C\u5B83\u90FD\u8981\u5360\u53BB 10 \u4E2A\u5B57\u8282\u7684\u7A7A\u95F4;\u800C VARCHAR \u5219\u662F\u53EF\u53D8\u957F\u5EA6\u7684\uFF0C\u5982\u679C\u4E00\u4E2A\u5B57\u6BB5\u53EF\u80FD\u7684\u503C\u662F\u4E0D\u56FA\u5B9A\u957F\u5EA6\u7684\uFF0C\u6211\u4EEC\u53EA\u77E5\u9053\u5B83\u4E0D\u53EF\u80FD\u8D85\u8FC7 10 \u4E2A\u5B57\u7B26\uFF0C\u628A\u5B83\u5B9A\u4E49\u4E3A VARCHAR(10) \u662F\u6700\u5408\u7B97\u7684\uFF0CVARCHAR \u7C7B\u578B\u7684\u5360\u7528\u7A7A\u95F4\u662F\u5B83\u7684\u503C\u7684\u5B9E\u9645\u957F\u5EA6 +1\u3002\u4E3A\u4EC0\u4E48\u8981 +1 \u5462?\u8FD9\u4E00\u4E2A\u5B57\u8282\u7528\u4E8E\u4FDD\u5B58\u5B9E\u9645\u4F7F\u7528\u4E86\u591A\u5927\u7684\u957F\u5EA6\u3002\u4ECE\u8FD9\u4E2A +1 \u4E2D\u4E5F\u5E94\u8BE5\u770B\u5230\uFF0C\u5982\u679C\u4E00\u4E2A\u5B57\u6BB5\uFF0C\u5B83\u7684\u53EF\u80FD\u503C\u6700\u957F\u662F 10 \u4E2A\u5B57\u7B26\uFF0C\u800C\u591A\u6570\u60C5\u51B5\u4E0B\u4E5F\u5C31\u662F\u7528\u5230\u4E86 10 \u4E2A\u5B57\u7B26\u65F6\uFF0C\u7528 VARCHAR \u5C31\u4E0D\u5408\u7B97\u4E86\uFF1A\u56E0\u4E3A\u5728\u591A\u6570\u60C5\u51B5\u4E0B\uFF0C\u5B9E\u9645\u5360\u7528\u7A7A\u95F4\u662F 11 \u4E2A\u5B57\u8282\uFF0C\u6BD4\u7528 CHAR(10) \u8FD8\u591A\u5360\u7528\u4E00\u4E2A\u5B57\u8282\u3002</p><p>\u4E3E\u4E2A\u4F8B\u5B50\uFF0C\u5C31\u662F\u4E00\u4E2A\u5B58\u50A8\u80A1\u7968\u540D\u79F0\u548C\u4EE3\u7801\u7684\u8868\uFF0C\u80A1\u7968\u540D\u79F0\u7EDD\u5927\u90E8\u5206\u662F\u56DB\u4E2A\u5B57\u7684\uFF0C\u5373 8 \u4E2A\u5B57\u8282;\u80A1\u7968\u4EE3\u7801\uFF0C\u4E0A\u6D77\u7684\u662F\u516D\u4F4D\u6570\u5B57\uFF0C\u6DF1\u5733\u7684\u662F\u56DB\u4F4D\u6570\u5B57\u3002\u8FD9\u4E9B\u90FD\u662F\u56FA\u5B9A\u957F\u5EA6\u7684\uFF0C\u80A1\u7968\u540D\u79F0\u5F53\u7136\u8981\u7528 CHAR(8);\u80A1\u7968\u4EE3\u7801\u867D\u7136\u662F\u4E0D\u56FA\u5B9A\u957F\u5EA6\uFF0C\u4F46\u5982\u679C\u4F7F\u7528 VARCHAR(6)\uFF0C\u4E00\u4E2A\u6DF1\u5733\u7684\u80A1\u7968\u4EE3\u7801\u5B9E\u9645\u5360\u7528\u7A7A\u95F4\u662F 5 \u4E2A\u5B57\u8282\uFF0C\u800C\u4E00\u4E2A\u4E0A\u6D77\u7684\u80A1\u7968\u4EE3\u7801\u8981\u5360\u7528 7 \u4E2A\u5B57\u8282!\u8003\u8651\u5230\u4E0A\u6D77\u7684\u80A1\u7968\u6570\u76EE\u6BD4\u6DF1\u5733\u7684\u591A\uFF0C\u90A3\u4E48\u7528 VARCHAR(6) \u5C31\u4E0D\u5982 CHAR(6) \u5408\u7B97\u4E86\u3002</p><p>\u867D\u7136\u4E00\u4E2A CHAR \u6216 VARCHAR \u7684\u6700\u5927\u957F\u5EA6\u53EF\u4EE5\u5230 255\uFF0C\u6211\u8BA4\u4E3A\u5927\u4E8E 20 \u7684 CHAR \u662F\u51E0\u4E4E\u7528\u4E0D\u5230\u7684\u2015\u2015\u5F88\u5C11\u6709\u5927\u4E8E 20 \u4E2A\u5B57\u8282\u957F\u5EA6\u7684\u56FA\u5B9A\u957F\u5EA6\u7684\u4E1C\u4E1C\u5427?\u4E0D\u662F\u56FA\u5B9A\u957F\u5EA6\u7684\u5C31\u7528 VARCHAR\u3002\u5927\u4E8E 100 \u7684 VARCHAR \u4E5F\u662F\u51E0\u4E4E\u7528\u4E0D\u5230\u7684\u2015\u2015\u6BD4\u8FD9\u66F4\u5927\u7684\u7528 TEXT \u5C31\u597D\u4E86\u3002TINYTEXT\uFF0C\u6700\u5927\u957F\u5EA6\u4E3A 255\uFF0C\u5360\u7528\u7A7A\u95F4\u4E5F\u662F\u5B9E\u9645\u957F\u5EA6 +1;TEXT\uFF0C\u6700\u5927\u957F\u5EA6 65535\uFF0C\u5360\u7528\u7A7A\u95F4\u662F\u5B9E\u9645\u957F\u5EA6 +2;MEDIUMTEXT\uFF0C\u6700\u5927\u957F\u5EA6 16777215\uFF0C\u5360\u7528\u7A7A\u95F4\u662F\u5B9E\u9645\u957F\u5EA6 +3;LONGTEXT\uFF0C\u6700\u5927\u957F\u5EA6 4294967295\uFF0C\u5360\u7528\u7A7A\u95F4\u662F\u5B9E\u9645\u957F\u5EA6 +4\u3002\u4E3A\u4EC0\u4E48 +1\u3001+2\u3001+3\u3001+4?\u4F60\u8981\u662F\u8FD8\u4E0D\u77E5\u9053\u5C31\u8BE5\u6253 PP \u4E86\u3002\u8FD9\u4E9B\u53EF\u4EE5\u7528\u5728\u8BBA\u575B\u554A\u3001\u65B0\u95FB\u554A\uFF0C\u4EC0\u4E48\u7684\uFF0C\u7528\u6765\u4FDD\u5B58\u6587\u7AE0\u7684\u6B63\u6587\u3002\u6839\u636E\u5B9E\u9645\u60C5\u51B5\u7684\u4E0D\u540C\uFF0C\u9009\u62E9\u4ECE\u5C0F\u5230\u5927\u7684\u4E0D\u540C\u7C7B\u578B\u3002</p><h3 id="\u679A\u4E3E\u548C\u96C6\u5408\u7C7B\u578B" tabindex="-1">\u679A\u4E3E\u548C\u96C6\u5408\u7C7B\u578B <a class="header-anchor" href="#\u679A\u4E3E\u548C\u96C6\u5408\u7C7B\u578B" aria-hidden="true">#</a></h3><p>\u679A\u4E3E (ENUM) \u7C7B\u578B\uFF0C\u6700\u591A\u53EF\u4EE5\u5B9A\u4E49 65535 \u79CD\u4E0D\u540C\u7684\u5B57\u7B26\u4E32\u4ECE\u4E2D\u505A\u51FA\u9009\u62E9\uFF0C\u53EA\u80FD\u5E76\u4E14\u5FC5\u987B\u9009\u62E9\u5176\u4E2D\u4E00\u79CD\uFF0C\u5360\u7528\u5B58\u50A8\u7A7A\u95F4\u662F\u4E00\u4E2A\u6216\u4E24\u4E2A\u5B57\u8282\uFF0C\u7531\u679A\u4E3E\u503C\u7684\u6570\u76EE\u51B3\u5B9A;\u96C6\u5408 (SET) \u7C7B\u578B\uFF0C\u6700\u591A\u53EF\u4EE5\u6709 64 \u4E2A\u6210\u5458\uFF0C\u53EF\u4EE5\u9009\u62E9\u5176\u4E2D\u7684\u96F6\u4E2A\u5230\u4E0D\u9650\u5B9A\u7684\u591A\u4E2A\uFF0C\u5360\u7528\u5B58\u50A8\u7A7A\u95F4\u662F\u4E00\u4E2A\u5230\u516B\u4E2A\u5B57\u8282\uFF0C\u7531\u96C6\u5408\u53EF\u80FD\u7684\u6210\u5458\u6570\u76EE\u51B3\u5B9A\u3002</p><p>\u4E3E\u4E2A\u4F8B\u5B50\u6765\u8BF4\uFF0C\u5728 SQLServer \u4E2D\uFF0C\u4F60\u53EF\u4EE5\u8282\u7EA6\u5230\u7528\u4E00\u4E2A BIT \u7C7B\u578B\u6765\u8868\u793A\u6027\u522B (\u7537/\u5973)\uFF0C\u4F46 MySQL \u6CA1\u6709 BIT\uFF0C\u7528 TINTINT \u5417?\u4E0D\uFF0C\u53EF\u4EE5\u7528 ENUM(&#39;\u5E05\u54E5&#39;,&#39;\u7F8E\u7709&#39;)\uFF0C\u53EA\u6709\u4E24\u79CD\u9009\u62E9\uFF0C\u6240\u4EE5\u53EA\u9700\u4E00\u4E2A\u5B57\u8282\u2015\u2015\u8DDF TINYINT \u4E00\u6837\u5927\uFF0C\u4F46\u5374\u53EF\u4EE5\u76F4\u63A5\u7528\u5B57\u7B26\u4E32 &#39;\u5E05\u54E5&#39; \u548C &#39;\u7F8E\u7709&#39; \u6765\u5B58\u53D6\u3002\u771F\u662F\u592A\u65B9\u4FBF\u5566!</p><h2 id="\u9884\u5904\u7406\u8BED\u53E5" tabindex="-1">\u9884\u5904\u7406\u8BED\u53E5 <a class="header-anchor" href="#\u9884\u5904\u7406\u8BED\u53E5" aria-hidden="true">#</a></h2><p>\u9884\u5904\u7406\u8BED\u53E5\uFF08Prepared Statements),\u662F\u4E00\u79CD\u7F16\u8BD1\u8FC7\u7684\u8981\u6267\u884C\u7684SQL\u8BED\u53E5\u6A21\u677F\uFF0C\u53EF\u4EE5\u4F7F\u7528\u4E0D\u540C\u7684\u53D8\u91CF\u53C2\u6570\u5B9A\u5236\u5B83\u3002</p><div class="language-php"><pre><code><span class="token comment">// \u5360\u4F4D\u7B26 :name</span>
<span class="token variable">$sql</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;SELECT * FROM shop_admin WHERE id &lt; :id&#39;</span><span class="token punctuation">;</span>
<span class="token variable">$sth</span><span class="token operator">-&gt;</span><span class="token function">bindParam</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;:id&#39;</span><span class="token punctuation">,</span><span class="token variable">$id</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u7ED1\u5B9A\u6570\u636E</span>
<span class="token variable">$sth</span><span class="token operator">-&gt;</span><span class="token function">execute</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u5360\u4F4D\u7B26 ?</span>
<span class="token variable">$sql</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;INSERT INTO shop_admin (username, password) VALUES (?, ?)&#39;</span><span class="token punctuation">;</span>
<span class="token variable">$sth</span><span class="token operator">-&gt;</span><span class="token function">bindParam</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token variable">$username</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 1 \u8868\u793A\u7B2C\u4E00\u4E2A\u95EE\u53F7\u5360\u4F4D\u7B26</span>
<span class="token variable">$sth</span><span class="token operator">-&gt;</span><span class="token function">bindParam</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token variable">$password</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 2 \u8868\u793A\u7B2C\u4E8C\u4E2A\u95EE\u53F7\u5360\u4F4D\u7B26</span>
<span class="token variable">$sth</span><span class="token operator">-&gt;</span><span class="token function">execute</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u5982\u679C\u4E0D\u60F3\u6328\u4E2A\u7ED1\u5B9A\u6570\u636E\uFF0C\u4E5F\u53EF\u4EE5\u5728\u6267\u884C\u65F6\u4F20\u5165\u6570\u7EC4</span>
<span class="token variable">$sth</span><span class="token operator">-&gt;</span><span class="token function">execute</span><span class="token punctuation">(</span><span class="token keyword">array</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;xxx&#39;</span><span class="token punctuation">,</span><span class="token string single-quoted-string">&#39;ooo&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre></div><p>\u9884\u5904\u7406\u8BED\u53E5\u7684\u4E3B\u8981\u4F18\u70B9\u6709\uFF1A</p><ul><li>\u67E5\u8BE2\u8BED\u53E5\u53EA\u9700\u8981\u88AB\u89E3\u6790\u4E00\u6B21\uFF0C\u5C31\u53EF\u4EE5\u4F7F\u7528\u4E0D\u540C\u7684\u53C2\u6570\u6267\u884C\u591A\u6B21\u3002\u5982\u679C\u8981\u91CD\u590D\u6267\u884C\u8BB8\u591A\u6B21\u4EC5\u4EC5\u662F\u53C2\u6570\u4E0D\u540C\uFF08\u4F46\u7ED3\u6784\u76F8\u540C\uFF09\u7684\u67E5\u8BE2\uFF0C\u4F1A\u6D6A\u8D39\u5F88\u591A\u65F6\u95F4\u3002\u5E86\u5E78\u7684\u662F\u5728\u4F7F\u7528\u652F\u6301\u9884\u5904\u7406\u8BED\u53E5\u7684\u6570\u636E\u5E93\u65F6\uFF0C\u5728\u5F53\u67E5\u8BE2\u51C6\u5907\u597D\uFF08Prepared\uFF09\u4E4B\u540E\uFF0C\u6570\u636E\u5E93\u5C31\u4F1A\u5206\u6790\uFF0C\u7F16\u8BD1\u5E76\u4F18\u5316\u5B83\u8981\u6267\u884C\u67E5\u8BE2\u7684\u8BA1\u5212\u3002\u901A\u8FC7\u4F7F\u7528\u9884\u5904\u7406\u8BED\u53E5\u53EF\u4EE5\u907F\u514D\u91CD\u590D\u5206\u6790\u3001\u7F16\u8BD1\u3001\u4F18\u5316\u7684\u73AF\u8282\uFF0C\u4E5F\u5C31\u662F\u8BF4\u4F7F\u7528\u9884\u5904\u7406\u8BED\u53E5\u53EF\u4EE5\u8BA9\u6570\u636E\u5E93\u670D\u52A1\u5668\u7684\u6548\u7387\u63D0\u5347\u3002</li><li>\u9884\u5904\u7406\u8BED\u53E5\u7684\u4E2D\u7684\u53C2\u6570\u4E0D\u9700\u8981\u4F7F\u7528\u5F15\u53F7\uFF0C\u76F8\u5E94\u5730\u4F1A\u51CF\u5C11SQL\u6CE8\u5165\u60C5\u5F62\u7684\u53D1\u751F\u3002</li></ul><h2 id="\u8FDC\u7A0B\u8FDE\u63A5mysql" tabindex="-1">\u8FDC\u7A0B\u8FDE\u63A5MySQL <a class="header-anchor" href="#\u8FDC\u7A0B\u8FDE\u63A5mysql" aria-hidden="true">#</a></h2><h3 id="mysql8\u53CA\u4E4B\u524D\u7684\u7248\u672C" tabindex="-1">mysql8\u53CA\u4E4B\u524D\u7684\u7248\u672C <a class="header-anchor" href="#mysql8\u53CA\u4E4B\u524D\u7684\u7248\u672C" aria-hidden="true">#</a></h3><p>\u53C2\u8003\uFF1A</p><ul><li><a href="http://blog.csdn.net/chr23899/article/details/40401089" target="_blank" rel="noopener noreferrer">MySql\u521B\u5EFA\u672C\u5730\u7528\u6237\u548C\u8FDC\u7A0B\u7528\u6237 \u5E76\u8D4B\u4E88\u6743\u9650</a></li><li><a href="https://www.cnblogs.com/cnblogsfans/archive/2009/09/21/1570942.html" target="_blank" rel="noopener noreferrer">https://www.cnblogs.com/cnblogsfans/archive/2009/09/21/1570942.html</a></li></ul><div class="language-"><pre><code># vim /etc/mysql/my.cnf
vim /etc/mysql/mysql.conf.d/mysqld.cnf
</code></pre></div><p>\u6CE8\u91CA\u6389\u7ED1\u5B9A\u7684\u672C\u5730\u5730\u5740</p><div class="language-"><pre><code>bind-address=127.0.0.1 ==&gt; #bind-address=127.0.0.1
</code></pre></div><p>\u5F00\u653E\u8FDC\u7A0B\u7528\u6237\u7684\u8BBF\u95EE\u6743\u9650</p><div class="language-"><pre><code>GRANT ALL PRIVILEGES ON *.* TO root@&quot;%&quot; IDENTIFIED BY &quot;123456&quot;;
</code></pre></div><p>\u5176\u4E2D%\u4EE3\u8868\u4EFB\u610Fip\uFF0C\u4E5F\u53EF\u4EE5\u6307\u5B9A\u5176\u4ED6ip\u5730\u5740\uFF0CIDENTIFIED\u540E\u9762\u63A5\u767B\u5F55\u5BC6\u7801\uFF0C\u8FD9\u91CC\u4E0D\u9700\u8981\u8DDF\u672C\u5730\u7684\u5BC6\u7801\u4E00\u6837\uFF0C\u6CE8\u610F\u5BC6\u7801\u5F3A\u5EA6\u3002</p><p>\u5237\u65B0\u7F13\u51B2\uFF0C\u91CD\u542Fmysql</p><div class="language-"><pre><code>flush privileges;
service mysql restart
</code></pre></div><p>\u73B0\u5728\u5C31\u53EF\u4EE5\u5728\u672C\u5730\u4F7F\u7528<code>SQLyog</code>\u6765\u8BBF\u95EE\u5916\u90E8\u6570\u636E\u5E93\u4E86</p><div class="language-"><pre><code>mysql -h IPaddress -uROOT -pPASSWARD
</code></pre></div><h3 id="mysql8\u4E4B\u540E\u7684\u7248\u672C" tabindex="-1">mysql8\u4E4B\u540E\u7684\u7248\u672C <a class="header-anchor" href="#mysql8\u4E4B\u540E\u7684\u7248\u672C" aria-hidden="true">#</a></h3><p>\u53C2\u8003\uFF1A <a href="https://blog.csdn.net/skyejy/article/details/80645981" target="_blank" rel="noopener noreferrer">https://blog.csdn.net/skyejy/article/details/80645981</a></p><p>mysql8\u4E4B\u540E\uFF0C\u9700\u8981\u5148\u521B\u5EFA\u8D26\u53F7\uFF0C\u518D\u8D4B\u4E88\u6743\u9650</p><div class="language-"><pre><code># \u5148\u521B\u5EFA
create user &#39;remote_admin&#39;@&#39;%&#39; identified by &#39;123456&#39;;

# \u518D\u8D4B\u4E88\u6743\u9650
GRANT ALL PRIVILEGES ON *.* TO remote_admin@&quot;%&quot; WITH GRANT OPTION;
</code></pre></div><p>\u5982\u679C\u662F\u60F3\u8981\u521B\u5EFA\u539F\u59CB\u7684\u8D26\u53F7\u5BC6\u7801\uFF0C\u53EF\u4EE5\u4F7F\u7528</p><div class="language-"><pre><code>create user &#39;native_root&#39;@&#39;127.0.0.1&#39; IDENTIFIED WITH mysql_native_password BY &#39;123456&#39;;
</code></pre></div>`,106),l=[p];function o(c,i,r,d,u,k){return n(),s("div",null,l)}var v=a(t,[["render",o]]);export{g as __pageData,v as default};
