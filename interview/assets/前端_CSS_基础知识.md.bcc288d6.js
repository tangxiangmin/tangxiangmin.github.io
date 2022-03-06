import{_ as e,c as a,o as t,b as n}from"./app.946f11db.js";const m='{"title":"\u6837\u5F0F\u91CD\u7F6E","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u6837\u5F0F\u91CD\u7F6E","slug":"\u6837\u5F0F\u91CD\u7F6E"},{"level":2,"title":"\u76D2\u5B50\u6A21\u578B","slug":"\u76D2\u5B50\u6A21\u578B"},{"level":2,"title":"\u884C\u9AD8","slug":"\u884C\u9AD8"},{"level":2,"title":"Flex","slug":"flex"},{"level":2,"title":"\u6805\u683C\u7CFB\u7EDF\u54CD\u5E94\u5F0F\u539F\u7406","slug":"\u6805\u683C\u7CFB\u7EDF\u54CD\u5E94\u5F0F\u539F\u7406"},{"level":2,"title":"Rem \u5B9E\u73B0\u53CA\u6CE8\u610F\u4E8B\u9879","slug":"rem-\u5B9E\u73B0\u53CA\u6CE8\u610F\u4E8B\u9879"},{"level":2,"title":"ViewPort","slug":"viewport"}],"relativePath":"\u524D\u7AEF/CSS/\u57FA\u7840\u77E5\u8BC6.md"}',s={},l=n(`<h1 id="css" tabindex="-1">CSS <a class="header-anchor" href="#css" aria-hidden="true">#</a></h1><h2 id="\u6837\u5F0F\u91CD\u7F6E" tabindex="-1">\u6837\u5F0F\u91CD\u7F6E <a class="header-anchor" href="#\u6837\u5F0F\u91CD\u7F6E" aria-hidden="true">#</a></h2><p>CSS reset \u7684\u4F5C\u7528\u662F\u8BA9\u5404\u4E2A\u6D4F\u89C8\u5668\u7684 CSS \u6837\u5F0F\u6709\u4E00\u4E2A\u7EDF\u4E00\u7684\u57FA\u51C6\u3002\u5728\u9879\u76EE\u4E2D\u53EF\u4EE5\u6839\u636E\u81EA\u5DF1\u7684\u9700\u6C42\u9009\u62E9\u6027\u5730\u8FDB\u884C\u6837\u5F0F\u91CD\u7F6E\u3002</p><p>\u4EE5\u524D\u770B\u8FC7\u5F20\u946B\u65ED\u5927\u795E\u7684\u4E00\u7BC7\u535A\u5BA2:<a href="http://www.zhangxinxu.com/wordpress/2010/04/css-reset%E7%9A%84%E9%87%8D%E6%96%B0%E5%AE%A1%E8%A7%86-%E9%81%BF%E5%85%8D%E6%A0%B7%E5%BC%8F%E9%87%8D%E7%BD%AE/" target="_blank" rel="noopener noreferrer">CSS reset \u7684\u91CD\u65B0\u5BA1\u89C6 \u2013 \u907F\u514D\u6837\u5F0F\u91CD\u7F6E</a>\uFF0C\u611F\u89C9\u5F88\u6709\u9053\u7406\uFF0C\u4E0D\u59A8\u79FB\u6B65\u9605\u8BFB\u4E00\u4E0B\u3002</p><h2 id="\u76D2\u5B50\u6A21\u578B" tabindex="-1">\u76D2\u5B50\u6A21\u578B <a class="header-anchor" href="#\u76D2\u5B50\u6A21\u578B" aria-hidden="true">#</a></h2><blockquote><p>\u5728 CSS \u4E2D\uFF0C\u4F7F\u7528\u6807\u51C6\u76D2\u6A21\u578B\u63CF\u8FF0\u8FD9\u4E9B\u77E9\u5F62\u76D2\u5B50\u4E2D\u7684\u6BCF\u4E00\u4E2A\u3002\u8FD9\u4E2A\u6A21\u578B\u63CF\u8FF0\u4E86\u5143\u7D20\u6240\u5360\u7A7A\u95F4\u7684\u5185\u5BB9\u3002\u6BCF\u4E2A\u76D2\u5B50\u6709\u56DB\u4E2A\u8FB9\uFF1A\u5916\u8FB9\u8DDD\u8FB9, \u8FB9\u6846\u8FB9, \u5185\u586B\u5145\u8FB9 \u4E0E \u5185\u5BB9\u8FB9\u3002</p></blockquote><ul><li>\u5728\u6807\u51C6\u6A21\u5F0F\u4E0B\uFF0C\u4E00\u4E2A\u5757\u7684\u603B\u5BBD\u5EA6=width+margin(\u5DE6\u53F3)+padding(\u5DE6\u53F3)+border(\u5DE6\u53F3)</li><li>\u5728\u602A\u5F02(ie)\u6A21\u5F0F\u4E0B\uFF0C\u4E00\u4E2A\u5757\u7684\u603B\u5BBD\u5EA6=width+margin\uFF08\u5DE6\u53F3\uFF09\uFF08\u65E2 width \u5DF2\u7ECF\u5305\u542B\u4E86 padding \u548C border \u503C\uFF09</li></ul><p><strong>box-sizing</strong></p><blockquote><p>\u66F4\u6539\u7528\u4E8E\u8BA1\u7B97\u5143\u7D20\u5BBD\u5EA6\u548C\u9AD8\u5EA6\u7684\u9ED8\u8BA4\u7684 CSS \u76D2\u5B50\u6A21\u578B</p></blockquote><ul><li>content-box \u662F\u9ED8\u8BA4\u503C\u3002\u5982\u679C\u4F60\u8BBE\u7F6E\u4E00\u4E2A\u5143\u7D20\u7684\u5BBD\u4E3A 100px\uFF0C\u90A3\u4E48\u8FD9\u4E2A\u5143\u7D20\u7684\u5185\u5BB9\u533A\u4F1A\u6709 100px \u5BBD\uFF0C\u5E76\u4E14\u4EFB\u4F55\u8FB9\u6846\u548C\u5185\u8FB9\u8DDD\u7684\u5BBD\u5EA6\u90FD\u4F1A\u88AB<strong>\u589E\u52A0</strong>\u5230\u6700\u540E\u7ED8\u5236\u51FA\u6765\u7684\u5143\u7D20\u5BBD\u5EA6\u4E2D\u3002</li><li>border-box \u544A\u8BC9\u6D4F\u89C8\u5668\u53BB\u7406\u89E3\u4F60\u8BBE\u7F6E\u7684\u8FB9\u6846\u548C\u5185\u8FB9\u8DDD\u7684\u503C\u662F\u5305\u542B\u5728 width \u5185\u7684\u3002\u4E5F\u5C31\u662F\u8BF4\uFF0C\u5982\u679C\u4F60\u5C06\u4E00\u4E2A\u5143\u7D20\u7684 width \u8BBE\u4E3A 100px,\u90A3\u4E48\u8FD9 100px \u4F1A\u5305\u542B\u5176\u5B83\u7684 border \u548C padding\uFF0C\u5185\u5BB9\u533A\u7684\u5B9E\u9645\u5BBD\u5EA6\u4F1A\u662F width \u51CF\u53BB border + padding \u7684\u8BA1\u7B97\u503C\u3002\u5927\u591A\u6570\u60C5\u51B5\u4E0B\u8FD9\u4F7F\u5F97\u6211\u4EEC\u66F4\u5BB9\u6613\u7684\u53BB\u8BBE\u5B9A\u4E00\u4E2A\u5143\u7D20\u7684\u5BBD\u9AD8</li></ul><h2 id="\u884C\u9AD8" tabindex="-1">\u884C\u9AD8 <a class="header-anchor" href="#\u884C\u9AD8" aria-hidden="true">#</a></h2><p>\u884C\u9AD8\u6307\u6587\u672C\u884C\u57FA\u7EBF\u4E4B\u95F4\u7684\u8DDD\u79BB\u3002\u5B9E\u9645\u4E0A\u6587\u672C\u884C\u6BCF\u884C\u7684\u884C\u5185\u5143\u7D20\u90FD\u4F1A\u751F\u6210\u4E00\u4E2A\u5185\u5BB9\u533A\uFF0C\u800C\u6BCF\u4E2A\u5185\u5BB9\u533A\u53C8\u4F1A\u751F\u6210\u5BF9\u5E94\u7684\u884C\u5185\u6846\uFF0C\u5728\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u884C\u5185\u6846\u7684\u5927\u5C0F\u5373\u4E3A\u5B57\u4F53\u5927\u5C0F\uFF0C\u800C\u4F7F\u7528 line-height \u5219\u662F\u663E\u5F0F\u5730\u91CD\u65B0\u6307\u5B9A\u4E86\u6587\u672C\u884C\u4E2D\u5404\u4E2A\u884C\u5185\u6846\u7684\u5927\u5C0F\uFF0C\u53EA\u9700\u8981\u5C06\u884C\u95F4\u8DDD\u5747\u5206\u6210\u4E24\u534A\u4E14\u5E94\u7528\u5230\u6BCF\u4E2A\u5185\u5BB9\u7684\u9876\u90E8\u548C\u5E95\u90E8\uFF0C\u5C31\u53EF\u4EE5\u5F97\u5230\u5BF9\u5E94\u7684\u91CD\u65B0\u751F\u6210\u7684\u884C\u5185\u6846\u7684\u5927\u5C0F</p><ul><li>\u5982\u679C\u4F7F\u7528 em,ex \u548C\u767E\u5206\u6570\u6307\u5B9A\u884C\u9AD8\uFF0C\u90FD\u662F\u76F8\u5BF9\u4E8E\u5143\u7D20\u7684 font-size \u8FDB\u884C\u8BA1\u7B97</li><li>\u5982\u679C\u662F\u4ECE\u7236\u5143\u7D20\u7EE7\u627F\u884C\u9AD8\uFF0C\u5219\u60C5\u51B5\u4F1A\u53D8\u5F97\u590D\u6742\uFF1A <ul><li>\u5982\u679C\u4F7F\u7528\u767E\u5206\u6570\u6765\u8BBE\u7F6E\u884C\u9AD8\uFF0C\u6D4F\u89C8\u5668\u4F1A\u9996\u5148\u8BA1\u7B97\u5176\u7236\u5143\u7D20\u7684\u5B57\u4F53\u5927\u5C0F\u4E0E\u5BF9\u5E94\u767E\u5206\u6570\u7684\u4E58\u79EF\uFF0C\u5F97\u5230\u5BF9\u5E94\u7684\u7ED3\u679C\u518D\u4F20\u9012\u7ED9\u5BF9\u5E94\u5143\u7D20\uFF08\u5F53\u5B50\u5143\u7D20\u7684\u5B57\u4F53\u5927\u5C0F\u5927\u4E8E\u8BE5\u503C\u5C31\u4F1A\u51FA\u73B0\u6587\u672C\u884C\u91CD\u53E0\u7684\u60C5\u51B5\uFF09\uFF1B</li><li>\u5982\u679C\u4F7F\u7528\u4E58\u79EF\u56E0\u5B50\u6765\u6307\u5B9A\u884C\u9AD8\uFF0C\u6D4F\u89C8\u5668\u4F1A\u8BA1\u7B97\u8BE5\u5143\u7D20\u7684\u5B57\u4F53\u5927\u5C0F\uFF08\u5982\u679C\u6CA1\u6709\u5219\u8BA1\u7B97\u8BE5\u5143\u7D20\u4ECE\u5176\u7236\u5143\u7D20\u7EE7\u627F\u5F97\u5230\u7684\u5B57\u4F53\u5927\u5C0F\uFF09\uFF0C\u7136\u540E\u4E58\u4EE5\u5BF9\u5E94\u7684\u4E58\u79EF\u56E0\u5B50\uFF0C\u5E76\u5C06\u7ED3\u679C\u5E94\u7528\u5728\u884C\u9AD8\u4E4B\u4E0A\u3002</li></ul></li></ul><h2 id="flex" tabindex="-1">Flex <a class="header-anchor" href="#flex" aria-hidden="true">#</a></h2><p>\u53C2\u8003\u4E4B\u524D\u7684\u6574\u7406</p><ul><li><a href="http://www.shymean.com/article/flex%E5%B8%83%E5%B1%80" target="_blank" rel="noopener noreferrer">flex \u5E03\u5C40</a></li></ul><p>\u9700\u8981\u7406\u89E3<strong>\u5BB9\u5668</strong>\uFF08\u7236\u5143\u7D20\uFF09\u548C<strong>\u9879\u76EE</strong>\uFF08\u5B50\u5143\u7D20\uFF09\u8FD9\u4E24\u4E2A\u6982\u5FF5\uFF0C\u7136\u540E\u5B66\u4E60\u548C\u7406\u89E3\u5176\u8BED\u6CD5\u5C31\u5BB9\u6613\u5F97\u591A\u4E86\u3002</p><h2 id="\u6805\u683C\u7CFB\u7EDF\u54CD\u5E94\u5F0F\u539F\u7406" tabindex="-1">\u6805\u683C\u7CFB\u7EDF\u54CD\u5E94\u5F0F\u539F\u7406 <a class="header-anchor" href="#\u6805\u683C\u7CFB\u7EDF\u54CD\u5E94\u5F0F\u539F\u7406" aria-hidden="true">#</a></h2><p>\u8FD9\u91CC\u6709\u4E00\u4E2A\u7B80\u5355\u7684<a href="https://github.com/tangxiangmin/cssMagic/blob/master/src/scss/layout/_grid.scss" target="_blank" rel="noopener noreferrer">\u5B9E\u73B0</a></p><div class="language-"><pre><code>&lt;div class=&quot;xs-6 sm-4 md-3 lg-2&quot;&gt;&lt;/div&gt;
</code></pre></div><p>\u5229\u7528\u5A92\u4ECB\u67E5\u8BE2\uFF0C\u5728\u76F8\u5173\u7684 break-points \u70B9\uFF0C\u5212\u5206<code>xs</code>\u3001<code>sm</code>\u3001<code>md</code>\u548C<code>lg</code>\u7B49\u4E0D\u540C\u5C3A\u5BF8\u7684\u6837\u5F0F\u7C7B\uFF0C\u7528\u4E8E\u6307\u5B9A\u5728\u5BF9\u5E94\u5206\u8FA8\u7387\u4E0B\u7684\u7F51\u683C\u5927\u5C0F\u3002 \u9996\u5148\u5B9E\u73B0<code>xs</code>\uFF0C\u7136\u540E\u4F9D\u6B21\u5B9E\u73B0\u540E\u9762\u7684\u6837\u5F0F\u7C7B\uFF0C\u8FD9\u6837\u5728\u5927\u5206\u8FA8\u7387\u4E0B\u7684\u6837\u5F0F\u7C7B\u4F1A\u8986\u76D6\u5C0F\u5206\u8FA8\u7387\u7684\u6837\u5F0F\u7C7B\uFF0C\u8FBE\u5230\u54CD\u5E94\u5F0F\u7684\u5E03\u5C40\u3002</p><h2 id="rem-\u5B9E\u73B0\u53CA\u6CE8\u610F\u4E8B\u9879" tabindex="-1">Rem \u5B9E\u73B0\u53CA\u6CE8\u610F\u4E8B\u9879 <a class="header-anchor" href="#rem-\u5B9E\u73B0\u53CA\u6CE8\u610F\u4E8B\u9879" aria-hidden="true">#</a></h2><ul><li><a href="https://github.com/amfe/article/issues/17" target="_blank" rel="noopener noreferrer">\u4F7F\u7528 Flexible \u5B9E\u73B0\u624B\u6DD8 H5 \u9875\u9762\u7684\u7EC8\u7AEF\u9002\u914D</a></li><li>\u57FA\u4E8E calc \u548C vw \u5B9E\u73B0\u7684 rem \u5E03\u5C40</li></ul><p>\u5176\u5B9E rem \u5E03\u5C40\u7684\u672C\u8D28\u662F\u7B49\u6BD4\u7F29\u653E\uFF0C\u4E00\u822C\u662F\u57FA\u4E8E\u5BBD\u5EA6\uFF0C\u7136\u540E\u53EF\u4EE5\u5B8C\u7F8E\u8FD8\u539F\u8BBE\u8BA1\u56FE</p><h2 id="viewport" tabindex="-1">ViewPort <a class="header-anchor" href="#viewport" aria-hidden="true">#</a></h2><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>viewport<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
// width    \u8BBE\u7F6Eviewport\u5BBD\u5EA6\uFF0C\u4E3A\u4E00\u4E2A\u6B63\u6574\u6570\uFF0C\u6216\u5B57\u7B26\u4E32\u2018device-width\u2019
// device-width  \u8BBE\u5907\u5BBD\u5EA6
// initial-scale    \u9ED8\u8BA4\u7F29\u653E\u6BD4\u4F8B\uFF08\u521D\u59CB\u7F29\u653E\u6BD4\u4F8B\uFF09\uFF0C\u4E3A\u4E00\u4E2A\u6570\u5B57\uFF0C\u53EF\u4EE5\u5E26\u5C0F\u6570
// minimum-scale    \u5141\u8BB8\u7528\u6237\u6700\u5C0F\u7F29\u653E\u6BD4\u4F8B\uFF0C\u4E3A\u4E00\u4E2A\u6570\u5B57\uFF0C\u53EF\u4EE5\u5E26\u5C0F\u6570
// maximum-scale    \u5141\u8BB8\u7528\u6237\u6700\u5927\u7F29\u653E\u6BD4\u4F8B\uFF0C\u4E3A\u4E00\u4E2A\u6570\u5B57\uFF0C\u53EF\u4EE5\u5E26\u5C0F\u6570
// user-scalable    \u662F\u5426\u5141\u8BB8\u624B\u52A8\u7F29\u653E
</code></pre></div>`,26),r=[l];function i(o,c,d,p,h,u){return t(),a("div",null,r)}var _=e(s,[["render",i]]);export{m as __pageData,_ as default};
