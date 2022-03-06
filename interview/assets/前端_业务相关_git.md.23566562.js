import{_ as e,c as t,o as i,b as a}from"./app.946f11db.js";const u='{"title":"git flow\u5DE5\u4F5C\u6D41","description":"","frontmatter":{},"headers":[{"level":2,"title":"git flow\u5DE5\u4F5C\u6D41","slug":"git-flow\u5DE5\u4F5C\u6D41"},{"level":2,"title":"git cz \u89C4\u8303\u63D0\u4EA4\u4FE1\u606F","slug":"git-cz-\u89C4\u8303\u63D0\u4EA4\u4FE1\u606F"},{"level":2,"title":"git\u628A\u67D0\u4E00\u6B21\u7684commit\u8F6C\u79FB\u5230\u53E6\u5916\u7684\u5206\u652F\u4E0A\u53BB","slug":"git\u628A\u67D0\u4E00\u6B21\u7684commit\u8F6C\u79FB\u5230\u53E6\u5916\u7684\u5206\u652F\u4E0A\u53BB"},{"level":2,"title":"gitkeep\u6587\u4EF6","slug":"gitkeep\u6587\u4EF6"},{"level":2,"title":"git reset\u8BEF\u5220\u9664\u627E\u56DE","slug":"git-reset\u8BEF\u5220\u9664\u627E\u56DE"},{"level":2,"title":"git revert\u64A4\u9500\u67D0\u6B21\u63D0\u4EA4","slug":"git-revert\u64A4\u9500\u67D0\u6B21\u63D0\u4EA4"},{"level":2,"title":"git lfs \u5927\u6587\u4EF6","slug":"git-lfs-\u5927\u6587\u4EF6"},{"level":2,"title":"git ignore\u8BED\u6CD5\u89C4\u5219","slug":"git-ignore\u8BED\u6CD5\u89C4\u5219"},{"level":2,"title":"\u6279\u91CF\u5220\u9664git tag","slug":"\u6279\u91CF\u5220\u9664git-tag"}],"relativePath":"\u524D\u7AEF/\u4E1A\u52A1\u76F8\u5173/git.md"}',r={},o=a(`<h1 id="git" tabindex="-1">git <a class="header-anchor" href="#git" aria-hidden="true">#</a></h1><p>\u4E00\u4E9B\u573A\u666F\u4E0B\u7684git\u4F7F\u7528\u65B9\u6CD5</p><h2 id="git-flow\u5DE5\u4F5C\u6D41" tabindex="-1">git flow\u5DE5\u4F5C\u6D41 <a class="header-anchor" href="#git-flow\u5DE5\u4F5C\u6D41" aria-hidden="true">#</a></h2><p>\u53C2\u8003\uFF1A<a href="https://www.git-tower.com/learn/git/ebook/cn/command-line/advanced-topics/git-flow/" target="_blank" rel="noopener noreferrer">git-flow \u7684\u5DE5\u4F5C\u6D41\u7A0B</a></p><p>git flow\u4E3B\u8981\u7528\u4E8E\u7EA6\u5B9A\u6574\u4E2A\u5F00\u53D1\u56E2\u961F\u7684\u5DE5\u4F5C\u6D41\u7A0B\uFF0C\u6700\u4E3B\u8981\u7684\u662F\u7EA6\u5B9A\u5404\u79CD\u5206\u652F\u53CAcheckout\u89C4\u8303\uFF0C\u62A5\u8D27master\u3001develop\u3001feature\u3001hotfix\u3001release\u5206\u652F\u7B49</p><h2 id="git-cz-\u89C4\u8303\u63D0\u4EA4\u4FE1\u606F" tabindex="-1">git cz \u89C4\u8303\u63D0\u4EA4\u4FE1\u606F <a class="header-anchor" href="#git-cz-\u89C4\u8303\u63D0\u4EA4\u4FE1\u606F" aria-hidden="true">#</a></h2><p>\u5168\u5C40\u5B89\u88C5<a href="https://www.npmjs.com/package/commitizen" target="_blank" rel="noopener noreferrer">commitizen</a>\uFF0C\u7136\u540E\u4F7F\u7528\u547D\u4EE4\u884C\u63D0\u4EA4commit</p><div class="language-"><pre><code># \u5B89\u88C5\u65F6\u95F4\u53EF\u80FD\u4F1A\u6709\u70B9\u4E45
npm install -g commitizen

npm install -g cz-conventional-changelog

echo &#39;{ &quot;path&quot;: &quot;cz-conventional-changelog&quot; }&#39; &gt; ~/.czrc

# \u5207\u6362\u5230\u9879\u76EE\uFF0C\u4F7F\u7528cz \u66FF\u6362commit\u547D\u4EE4 
git cz
# \u4F9D\u6B21\u9009\u62E9\u540E\u7EED\u6B65\u9AA4
</code></pre></div><p>\u5EFA\u8BAE\u4F7F\u7528<a href="https://www.npmjs.com/package/commitizen#conventional-commit-messages-as-a-global-utility" target="_blank" rel="noopener noreferrer">\u5168\u5C40\u8BBE\u7F6E</a></p><h2 id="git\u628A\u67D0\u4E00\u6B21\u7684commit\u8F6C\u79FB\u5230\u53E6\u5916\u7684\u5206\u652F\u4E0A\u53BB" tabindex="-1">git\u628A\u67D0\u4E00\u6B21\u7684commit\u8F6C\u79FB\u5230\u53E6\u5916\u7684\u5206\u652F\u4E0A\u53BB <a class="header-anchor" href="#git\u628A\u67D0\u4E00\u6B21\u7684commit\u8F6C\u79FB\u5230\u53E6\u5916\u7684\u5206\u652F\u4E0A\u53BB" aria-hidden="true">#</a></h2><p>\u6211\u6B63\u5728\u5206\u652F1\u5F00\u53D1\uFF0C\u7A81\u7136\u6765\u4E86\u4E00\u4E2A\u9700\u6C42\u7D27\u6025\u4E0A\u7EBF</p><p>\u6B63\u5E38\u60C5\u51B5\u4E0B\uFF0C\u5E94\u8BE5stash \u5F53\u524D\u6B63\u5728\u5F00\u53D1\u7684\u5185\u5BB9\uFF0C\u7136\u540E\u5355\u72EC\u4ECEmaster\u5206\u652F\u5207\u4E00\u4E2A\u51FA\u6765\u5F00\u53D1\u65B0\u9700\u6C42\uFF1B\u624B\u5FD9\u811A\u4E71\u5F00\u53D1\u5B8C\u6BD5\u65F6\u53D1\u73B0\uFF1A\u54E6\u8C41\uFF0C\u5FD8\u8BB0\u5207\u5206\u652F\uFF0C\u628A\u6539\u52A8\u63D0\u4EA4\u5230\u5F53\u524D\u5206\u652F\u4E86</p><p>\u4F46\u662F\u6211\u53EA\u60F3\u5408\u5E76\u8FD9\u6B21\u63D0\u4EA4\u7684\u6539\u52A8\uFF0C\u5206\u652F1\u4E0A\u7684\u4EE3\u7801\u8FD8\u4E0D\u6210\u719F\uFF0C\u4E0D\u60F3\u5408\u5E76</p><p>\u90A3\u4E48\u95EE\u9898\u6765\u4E86</p><blockquote><p>git\u5982\u4F55\u628A\u67D0\u4E00\u6B21\u7684commit\u8F6C\u79FB\u5230\u53E6\u5916\u7684\u5206\u652F\u4E0A\u53BB\u5462\uFF1F</p></blockquote><p>\u53EF\u4EE5\u4F7F\u7528<code>cherry-pick</code>\u6765\u5B9E\u73B0\uFF0C</p><ul><li>\u4ECE\u7A33\u5B9A\u5206\u652F\u5982master\uFF0C\u5207\u4E00\u4E2A\u5206\u652F2\u51FA\u6765</li><li>\u5728\u5206\u652F2\u4E0A\u4F7F\u7528<code>git cherry-pick commitId</code>\uFF0C\u5176\u4E2DcommitId\u5C31\u662F\u6700\u65B0\u9700\u6C42\u7684\u90A3\u6B21\u63D0\u4EA4\u53F7</li></ul><p>\u5F53\u7136\uFF0Ccherry-pick\u4E5F\u53EF\u4EE5\u8F6C\u79FB\u591A\u6B21\u7684commit\u3002</p><h2 id="gitkeep\u6587\u4EF6" tabindex="-1">gitkeep\u6587\u4EF6 <a class="header-anchor" href="#gitkeep\u6587\u4EF6" aria-hidden="true">#</a></h2><p>\u53C2\u8003\uFF1A<a href="https://www.gonever.com/post/25" target="_blank" rel="noopener noreferrer">\u4EC0\u4E48\u662F .gitkeep</a></p><p>git\u4E0D\u4F1A\u4E0D\u8DDF\u8E2A\u7A7A\u6587\u4EF6\u5939\u3002\u5982\u679C\u4F60\u7684\u9879\u76EE\u6587\u4EF6\u5939\u91CC\u8FB9\u6709\u4EFB\u4F55\u7684\u7A7A\u6587\u4EF6\u5939\uFF0CGit \u90FD\u4F1A\u5FFD\u7565\u6389\u3002</p><p>\u4F46\u67D0\u4E9B\u65F6\u5019\u671F\u671B\u80FD\u591F\u5C06\u7A7A\u76EE\u5F55\u8FDB\u884C\u63D0\u4EA4\uFF0C\u4FDD\u8BC1\u4ED3\u5E93\u4E2D\u662F\u5B8C\u6574\u7684\u4EE3\u7801\u7248\u672C\uFF0C\u8FD9\u65F6\u5019\u53EF\u4EE5\u4F7F\u7528<code>.gitkeep</code>\u6587\u4EF6\u3002</p><p>\u8FD9\u662F\u56E0\u4E3A\u5728\u7A7A\u6587\u4EF6\u5939\u91CC\u8FB9\u6DFB\u52A0\u4E86\u4E00\u4E2A\u6587\u4EF6\u4E4B\u540E\uFF0CGit \u5C31\u4F1A\u5F00\u59CB\u8DDF\u8E2A\u8FD9\u4E2A\u6587\u4EF6\u5939\u2014\u2014\u65E0\u8BBA\u8FD9\u4E2A\u6587\u4EF6\u662F\u4EC0\u4E48\uFF0C\u5185\u5BB9\u5982\u4F55\uFF0C\u540D\u5B57\u662F\u4EC0\u4E48\u3002</p><p>\u90A3\u4E3A\u4EC0\u4E48\u4EC0\u4E48\u662F .gitkeep \u5462\uFF1F\u5B9E\u9645\u4E0A\uFF0C\u8FD9\u4E2A\u540D\u5B57\u662F\u793E\u533A\u8D77\u7684\uFF0C\u5176\u4ED6\u4EBA\u53EF\u4EE5\u5BB9\u6613\u7684\u628A\u5B83\u548C .gitignore \u8054\u7CFB\u8D77\u6765\u3002Git \u5E76\u6CA1\u6709\u7ED9\u8FD9\u4E2A\u6587\u4EF6\u4EFB\u4F55\u7684\u50CF .gitignore \u6587\u4EF6\u4E00\u6837\u7684\u7279\u6B8A\u6743\u9650\u3002</p><p>\u5982\u679C\u4F60\u60F3\u8DDF\u8E2A\u4F60\u4E0A\u6E38\u9879\u76EE\u7684\u7A7A\u6587\u4EF6\u5939\uFF0C\u90A3\u4E48\u4F60\u5C31\u5728\u8FD9\u4E2A\u6587\u4EF6\u5939\u4E2D\u521B\u5EFA\u4E00\u4E2A .gitkeep \u6587\u4EF6\u3002\u5176\u4ED6\u5F00\u53D1\u8005\u5F88\u5BB9\u6613\u5C31\u4F1A\u7406\u89E3\u8FD9\u662F\u5E72\u4EC0\u4E48\u7528\u7684\u3002\u901A\u5E38\u6765\u8BF4\uFF0Cassets \u6587\u4EF6\u5939\u548C log \u6587\u4EF6\u5939\u9700\u8981\u8FD9\u6837\u505A\u3002\u8BB0\u4F4F\uFF0C\u4E0D\u8981\u628A .gitkeep \u6DFB\u52A0\u5230 .gitignore \u6587\u4EF6\u4E2D\uFF0C\u90A3\u6837\u7684\u8BDD\u7A7A\u6587\u4EF6\u5939\u5C31\u4ECE\u4F60\u7684\u6587\u4EF6\u7CFB\u7EDF\u4E2D\u6D88\u5931\u4E86\u3002</p><h2 id="git-reset\u8BEF\u5220\u9664\u627E\u56DE" tabindex="-1">git reset\u8BEF\u5220\u9664\u627E\u56DE <a class="header-anchor" href="#git-reset\u8BEF\u5220\u9664\u627E\u56DE" aria-hidden="true">#</a></h2><p>\u53C2\u8003:<a href="https://blog.csdn.net/u011450490/article/details/60119210" target="_blank" rel="noopener noreferrer">Git Reset hard\u8BEF\u64CD\u4F5C\u56DE\u6EDA\u6062\u590D\u4EE3\u7801</a></p><p>\u8BB0\u4E00\u6B21\u60B2\u60E8\u7ECF\u5386\uFF1A\u67D0\u5929\u6DF1\u591C\uFF0C\u6B63\u567C\u91CC\u556A\u5566\u5730\u5728develop\u5206\u652F\u4E0A\u5199\u7740\u5E26\u554A\u5417\uFF0C\u7A81\u7136\u9700\u8981\u56DE\u6EDA\u770B\u770B\u4E4B\u524D\u7684\u63D0\u4EA4\uFF0C\u5207\u4E2A\u5206\u652F\u51FA\u53BB\u7136\u540Ereset</p><div class="language-"><pre><code>git checkout -b tmp
</code></pre></div><p>\u624B\u901F\u592A\u5FEB\u4E86\uFF0C\u6CA1\u6709\u770B\u63D0\u793A\uFF0C\u4EE5\u4E3A\u6210\u529F\u5207\u8FC7\u53BB\u4E86\uFF0C\u76F4\u63A5\u8C03\u7528</p><div class="language-"><pre><code>git reset --hard head^^^
</code></pre></div><p>\u4E07\u4E07\u6CA1\u60F3\u5230\u4E4B\u524D\u672C\u5730\u5B58\u5728\u8FD9\u4E2A<code>tmp</code>\u5206\u652F\uFF0C\u5BFC\u81F4checkout -b\u5931\u8D25\u4E86\uFF0C\u5BFC\u81F4\u56DE\u9000\u4E86develop\u5206\u652F\u4E0A\u7684\u4EE3\u7801\u3002</p><p>GG\uFF0C\u8FD9\u610F\u5473\u7740\u6211\u71AC\u591C\u4E09\u4E2A\u5C0F\u65F6\u7684\u529F\u80FD\u767D\u5199\u4E86</p><p>\u4E0D\u7518\u5FC3\uFF0C\u4E00\u901A\u641C\u7D22\uFF0C\u627E\u5230\u89E3\u51B3\u529E\u6CD5</p><ul><li>\u6253\u5F00\u9879\u76EE\u76EE\u5F55<code>/.git/logs/refs/heads/branch_name</code>\uFF0C\u6253\u5F00\u6587\u4EF6\uFF0C\u627E\u5230\u5BF9\u5E94\u7684\u7248\u672C\u53F7</li><li><code>git reset --hard \u9700\u8981\u6062\u590D\u7684xxx\u7248\u672C\u53F7</code></li></ul><p>\u5B8C\u4E8B\u5927\u5409\uFF0C\u60CA\u51FA\u4E00\u8EAB\u51B7\u6C57\u3002</p><p>\u788E\u89C9\uFF0C\u8FD9\u4EF6\u4E8B\u60C5\u544A\u8BC9\u6211\u4EEC\uFF0C\u4E0D\u8981\u71AC\u591C\u5199\u4EE3\u7801\u3002</p><h2 id="git-revert\u64A4\u9500\u67D0\u6B21\u63D0\u4EA4" tabindex="-1">git revert\u64A4\u9500\u67D0\u6B21\u63D0\u4EA4 <a class="header-anchor" href="#git-revert\u64A4\u9500\u67D0\u6B21\u63D0\u4EA4" aria-hidden="true">#</a></h2><p>\u62FF\u5230\u4E00\u4E2A\u9700\u6C42A\uFF0C\u5728feature\u5206\u652F\u54FC\u54E7\u54FC\u54E7\u505A\u5B8Ccommit\u4E4B\u540E\uFF0C\u53C8\u7EE7\u7EED\u505A\u5176\u4ED6\u529F\u80FDB\u3001C\u3002\u5047\u8BBE\u8FD9\u4E2Afeature\u5206\u652F\u6536\u96C6\u4E863\u4E2Acommit:A\u3001B\u3001C\uFF0C\u6B63\u51C6\u5907\u4E0A\u7EBF\u7684\u65F6\u5019\uFF0C\u4EA7\u54C1\u8BF4\u529F\u80FDA\u5148\u4E0D\u4E0A\u5427\uFF0C\u6539\u56DE\u7B2C\u4E00\u7248~</p><p>reset\u80AF\u5B9A\u662F\u4E0D\u884C\u7684\uFF0Creset\u5230commit A\u65F6\uFF0C\u4F1A\u628AB\u548CC\u7684\u4EE3\u7801\u4E5F\u7ED9\u56DE\u6EDA\u4E86\u3002\u8FD9\u65F6\u5019\u53EF\u4EE5\u4F7F\u7528<code>git revert</code></p><p>git revert\u662F\u7528\u4E8E\u201C\u64A4\u9500\u201D\u67D0\u4E00\u4E2A\u7248\u672C\uFF0C\u4EE5\u8FBE\u5230\u53D6\u6D88\u8BE5\u7248\u672C\u7684\u4FEE\u6539\u7684\u76EE\u7684\u3002</p><p>\u9996\u5148</p><div class="language-"><pre><code>git revert -n \u9700\u8981\u64A4\u9500\u7684commitId
</code></pre></div><p>\u7136\u540E\u91CD\u65B0\u63D0\u4EA4</p><div class="language-"><pre><code>git commit -m &quot;revert A&quot;
</code></pre></div><p>\u4FEE\u6539\u5B8C\u6210\uFF0C\u63D0\u6D4B\u5427\u3002</p><p>\u7B49\u5F85\u540E\u9762\u4EA7\u54C1\u8BF4\uFF0C\u529F\u80FDA\u8FD8\u662F\u4FEE\u6539\u4E00\u4E0B\u5427\uFF0C\u8FD9\u4E2A\u65F6\u5019\u600E\u4E48\u529E\uFF1F\u53EF\u4EE5\u5BF9revert\u7684\u64CD\u4F5C\u7EE7\u7EED\u8FDB\u884Crevert\uFF0C\u76F8\u5F53\u4E8E\u64A4\u9500 \u201D\u64A4\u9500A\u7248\u672C\u7684\u6539\u52A8\u201C\u7684\u6539\u52A8\uFF0C\u7981\u6B62\u5957\u5A03~</p><h2 id="git-lfs-\u5927\u6587\u4EF6" tabindex="-1">git lfs \u5927\u6587\u4EF6 <a class="header-anchor" href="#git-lfs-\u5927\u6587\u4EF6" aria-hidden="true">#</a></h2><p>\u53C2\u8003\uFF1A<a href="https://zzz.buzz/zh/2016/04/19/the-guide-to-git-lfs/" target="_blank" rel="noopener noreferrer">git lfs\u64CD\u4F5C\u6307\u5357</a></p><p>\u5F53\u9879\u76EE\u4E2D\u5305\u542B\u4E86\u5927\u91CF\u7684\u5927\u6587\u4EF6\u4E4B\u540E\uFF0C\u63D0\u4EA4\u3001\u4E0B\u8F7D\u4ED3\u5E93\u5C31\u4F1A\u53D8\u5F97\u8D8A\u6765\u8D8A\u6162\uFF0C\u8FD9\u5728\u5305\u542B\u9759\u6001\u8D44\u6E90\u7684\u524D\u7AEF\u9879\u76EE\u4E2D\u6BD4\u8F83\u5E38\u89C1\uFF0C\u89E3\u51B3\u529E\u6CD5\u662F\u4F7F\u7528git lfs(Large File Storage, \u5927\u6587\u4EF6\u5B58\u50A8)</p><p>\u5176\u601D\u8DEF\u662F\u628A\u97F3\u4E50\u3001\u56FE\u7247\u3001\u89C6\u9891\u7B49\u6307\u5B9A\u7684\u4EFB\u610F\u6587\u4EF6\u5B58\u5728 Git \u4ED3\u5E93\u4E4B\u5916\uFF0C\u800C\u5728 Git \u4ED3\u5E93\u4E2D\u7528\u4E00\u4E2A\u5360\u7528\u7A7A\u95F4 1KB \u4E0D\u5230\u7684\u6587\u672C\u6307\u9488\u6765\u4EE3\u66FF\u7684\u5C0F\u5DE5\u5177\u3002</p><h2 id="git-ignore\u8BED\u6CD5\u89C4\u5219" tabindex="-1">git ignore\u8BED\u6CD5\u89C4\u5219 <a class="header-anchor" href="#git-ignore\u8BED\u6CD5\u89C4\u5219" aria-hidden="true">#</a></h2><p>\u53C2\u8003\uFF1A<a href="http://www.07net01.com/2017/02/1815747.html#pinglun" target="_blank" rel="noopener noreferrer">.gitignore \u89C4\u5219\u5199\u6CD5 - \u5728\u5DF2\u5FFD\u7565\u6587\u4EF6\u5939\u4E2D\u4E0D\u5FFD\u7565\u6307\u5B9A\u6587\u4EF6\u3001\u6587\u4EF6\u5939</a></p><p>\u5728\u5DF2\u5FFD\u7565\u6587\u4EF6\u5939\u4E2D\u4E0D\u5FFD\u7565\u6307\u5B9A\u6587\u4EF6\u5939</p><div class="language-shell"><pre><code>/node_modules/*
<span class="token operator">!</span>/node_modules/layer/
</code></pre></div><p>\u5728\u5DF2\u5FFD\u7565\u6587\u4EF6\u5939\u4E2D\u4E0D\u5FFD\u7565\u6307\u5B9A\u6587\u4EF6</p><div class="language-shell"><pre><code>/node_modules/*
<span class="token operator">!</span>/node_modules/layer/layer.js
</code></pre></div><p>\u5176\u4ED6</p><ul><li>\u4EE5\u659C\u6760\u201C/\u201D\u5F00\u5934\u8868\u793A\u76EE\u5F55\uFF1B</li><li>\u4EE5\u661F\u53F7\u201C*\u201D\u901A\u914D\u591A\u4E2A\u5B57\u7B26\uFF1B</li><li>\u4EE5\u95EE\u53F7\u201C?\u201D\u901A\u914D\u5355\u4E2A\u5B57\u7B26</li><li>\u4EE5\u65B9\u62EC\u53F7\u201C[]\u201D\u5305\u542B\u5355\u4E2A\u5B57\u7B26\u7684\u5339\u914D\u5217\u8868\uFF1B</li><li>\u4EE5\u53F9\u53F7\u201C!\u201D\u8868\u793A\u4E0D\u5FFD\u7565(\u8DDF\u8E2A)\u5339\u914D\u5230\u7684\u6587\u4EF6\u6216\u76EE\u5F55\uFF1B</li></ul><h2 id="\u6279\u91CF\u5220\u9664git-tag" tabindex="-1">\u6279\u91CF\u5220\u9664git tag <a class="header-anchor" href="#\u6279\u91CF\u5220\u9664git-tag" aria-hidden="true">#</a></h2><p>\u5728lerna\u7B49monorepo\u9879\u76EE\u4E2D\uFF0C\u901A\u8FC7git tag\u6765\u7BA1\u7406\u53D1\u5E03\u7684\u5305\u7248\u672C\uFF0C\u5728\u6D4B\u8BD5\u671F\u95F4\u53EF\u80FD\u5E0C\u671B\u6267\u884C\u6CE8\u5165\u79FB\u9664tag\uFF0C\u91CD\u65B0\u53D1\u5E03\u7B49\u64CD\u4F5C\uFF0C\u56E0\u6B64\u9700\u8981\u4E86\u89E3\u79FB\u9664git tag\u7684\u64CD\u4F5C</p><p>\u5220\u9664\u672C\u5730tag\uFF1A</p><div class="language-"><pre><code>git tag -d v1.1.1
</code></pre></div><p>\u6279\u91CF\u5220\u9664\u672C\u5730tag</p><div class="language-"><pre><code>git tag | grep &quot;v1.1.*&quot; | xargs git tag -d
</code></pre></div><p>\u5220\u9664\u8FDC\u7A0Btag</p><div class="language-"><pre><code>git push origin --delete tag v1.1.1
</code></pre></div><p>\u6279\u91CF\u5220\u9664\u8FDC\u7A0Btag</p><div class="language-"><pre><code>git show-ref --tag | awk &#39;/v1.1.[0-9]{1}[0-9]{0,}$/ {print &quot;:&quot; $2}&#39; | xargs git push origin
</code></pre></div>`,69),g=[o];function p(l,n,c,d,s,h){return i(),t("div",null,g)}var v=e(r,[["render",p]]);export{u as __pageData,v as default};
