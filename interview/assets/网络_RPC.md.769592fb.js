import{_ as e,c as r,o as t,b as a}from"./app.946f11db.js";const _='{"title":"thrift","description":"","frontmatter":{},"headers":[{"level":2,"title":"thrift","slug":"thrift"},{"level":2,"title":"GRPC","slug":"grpc"},{"level":2,"title":"\u96C6\u4E2D\u914D\u7F6E\u7BA1\u7406","slug":"\u96C6\u4E2D\u914D\u7F6E\u7BA1\u7406"},{"level":2,"title":"GraphQL","slug":"graphql"},{"level":2,"title":"Serverless","slug":"serverless"}],"relativePath":"\u7F51\u7EDC/RPC.md"}',l={},i=a(`<h1 id="rpc" tabindex="-1">RPC <a class="header-anchor" href="#rpc" aria-hidden="true">#</a></h1><h2 id="thrift" tabindex="-1">thrift <a class="header-anchor" href="#thrift" aria-hidden="true">#</a></h2><p>\u53C2\u8003</p><ul><li><a href="https://segmentfault.com/a/1190000012612473" target="_blank" rel="noopener noreferrer">https://segmentfault.com/a/1190000012612473</a></li><li><a href="https://juejin.im/post/5be058ee6fb9a049f153a845" target="_blank" rel="noopener noreferrer">https://juejin.im/post/5be058ee6fb9a049f153a845</a></li><li><a href="https://www.cnblogs.com/cyfonly/p/6059374.html" target="_blank" rel="noopener noreferrer">https://www.cnblogs.com/cyfonly/p/6059374.html</a></li><li><a href="https://segmentfault.com/a/1190000004610166" target="_blank" rel="noopener noreferrer">\u57FA\u4E8E Thrift \u7684 Node.js \u5FAE\u670D\u52A1</a></li></ul><p><code>Thrift</code>\u662F\u4E00\u4E2A\u8F7B\u91CF\u7EA7\u3001\u8DE8\u8BED\u8A00\u7684RPC\u6846\u67B6\uFF0C\u5305\u542B\u5982\u4E0B\u7279\u6027</p><ul><li>\u57FA\u4E8EIDL\uFF08\u63A5\u53E3\u63CF\u8FF0\u8BED\u8A00\uFF09\u751F\u6210\u8DE8\u8BED\u8A00\u7684RPC clients and servers\uFF0C\u652F\u6301\u8D85\u8FC720\u79CD\u8BED\u8A00</li><li>\u652F\u6301\u4E8C\u8FDB\u5236\u7684\u9AD8\u6027\u80FD\u7684\u7F16\u89E3\u7801\u6846\u67B6</li><li>\u652F\u6301NIO\u7684\u5E95\u5C42\u901A\u4FE1</li><li>\u76F8\u5BF9\u7B80\u5355\u7684\u670D\u52A1\u8C03\u7528\u6A21\u578B</li></ul><p>\u4F20\u8F93\u6570\u636E\u91C7\u7528\u4E8C\u8FDB\u5236\u683C\u5F0F\uFF0C\u76F8\u5BF9 XML \u548C JSON \u4F53\u79EF\u66F4\u5C0F\uFF0C\u5BF9\u4E8E\u9AD8\u5E76\u53D1\u3001\u5927\u6570\u636E\u91CF\u548C\u591A\u8BED\u8A00\u7684\u73AF\u5883\u66F4\u6709\u4F18\u52BF\u3002</p><p>\u5173\u952E\u5B57</p><ul><li><code>namespace</code>\u3000\u5B9A\u4E49\u5305\u540D</li><li><code>struct</code>\u3000\u5B9A\u4E49\u670D\u52A1\u63A5\u53E3\u7684\u53C2\u6570\uFF0C\u8FD4\u56DE\u503C\u4F7F\u7528\u5230\u7684\u7C7B\u7ED3\u6784\u3002\u5982\u679C\u63A5\u53E3\u7684\u53C2\u6570\u90FD\u662F\u57FA\u672C\u7C7B\u578B\uFF0C\u5219\u4E0D\u9700\u8981\u5B9A\u4E49struct</li><li><code>service</code>\u3000\u5B9A\u4E49\u63A5\u53E3</li></ul><p>\u6570\u636E\u7C7B\u578B</p><div class="language-"><pre><code>bool \u5E03\u5C14\u578B
byte \uFF18\u4F4D\u6574\u6570
i16  16\u4F4D\u6574\u6570
i32  32\u4F4D\u6574\u6570
i64  64\u4F4D\u6574\u6570
double \u53CC\u7CBE\u5EA6\u6D6E\u70B9\u6570
string \u5B57\u7B26\u4E32
binary \u5B57\u8282\u6570\u7EC4
list&lt;i16&gt; List\u96C6\u5408\uFF0C\u5FC5\u987B\u6307\u660E\u6CDB\u578B
map&lt;string, string&gt; Map\u7C7B\u578B\uFF0C\u5FC5\u987B\u6307\u660E\u6CDB\u578B
set&lt;i32&gt; Set\u96C6\u5408\uFF0C\u5FC5\u987B\u6307\u660E\u6CDB\u578B
</code></pre></div><h2 id="grpc" tabindex="-1">GRPC <a class="header-anchor" href="#grpc" aria-hidden="true">#</a></h2><h2 id="\u96C6\u4E2D\u914D\u7F6E\u7BA1\u7406" tabindex="-1">\u96C6\u4E2D\u914D\u7F6E\u7BA1\u7406 <a class="header-anchor" href="#\u96C6\u4E2D\u914D\u7F6E\u7BA1\u7406" aria-hidden="true">#</a></h2><p>\u53C2\u8003</p><ul><li><a href="https://www.jianshu.com/p/67d0f5081e57" target="_blank" rel="noopener noreferrer"> \u96C6\u4E2D\u914D\u7F6E\u7BA1\u7406</a></li></ul><p>\u5E38\u89C4\u9879\u76EE\u4F1A\u6709\u5F88\u591A\u914D\u7F6E\u6587\u4EF6,\u6BD4\u5982\u6570\u636E\u5E93\u94FE\u63A5\u4FE1\u606F, \u7F13\u5B58\u4FE1\u606F\uFF1B\u4E3A\u4E86\u51CF\u5C11\u624B\u52A8\u4FEE\u6539\u914D\u7F6E\u6587\u4EF6\u5E26\u6765\u7684\u5DE5\u4F5C\u7E41\u7410\u53CA\u5BB9\u6613\u51FA\u9519\u7B49\u95EE\u9898\uFF0C\u53EF\u4EE5\u4F7F\u7528\u96C6\u4E2D\u914D\u7F6E\u7BA1\u7406\u7CFB\u7EDF</p><h2 id="graphql" tabindex="-1">GraphQL <a class="header-anchor" href="#graphql" aria-hidden="true">#</a></h2><h2 id="serverless" tabindex="-1">Serverless <a class="header-anchor" href="#serverless" aria-hidden="true">#</a></h2>`,18),n=[i];function s(h,o,c,d,p,f){return t(),r("div",null,n)}var g=e(l,[["render",s]]);export{_ as __pageData,g as default};
