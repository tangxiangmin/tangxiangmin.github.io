import{_ as e,c as n,o as a,b as l}from"./app.946f11db.js";const u='{"title":"\u76F8\u5173\u6982\u5FF5","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u76F8\u5173\u6982\u5FF5","slug":"\u76F8\u5173\u6982\u5FF5"},{"level":3,"title":"\u6A21\u5757\u4E0E\u5305","slug":"\u6A21\u5757\u4E0E\u5305"},{"level":3,"title":"package.json","slug":"package-json"},{"level":3,"title":"\u8BED\u4E49\u5316\u7248\u672C","slug":"\u8BED\u4E49\u5316\u7248\u672C"},{"level":3,"title":"package-lock","slug":"package-lock"},{"level":2,"title":"npm install","slug":"npm-install"},{"level":3,"title":"\u6A21\u5757\u5B89\u88C5\u6D41\u7A0B","slug":"\u6A21\u5757\u5B89\u88C5\u6D41\u7A0B"},{"level":3,"title":"\u4F18\u5316install\u901F\u5EA6","slug":"\u4F18\u5316install\u901F\u5EA6"},{"level":2,"title":"npm script","slug":"npm-script"},{"level":3,"title":"npx","slug":"npx"},{"level":2,"title":"\u5982\u4F55\u53D1\u5E03\u81EA\u5DF1\u7684npm\u5305","slug":"\u5982\u4F55\u53D1\u5E03\u81EA\u5DF1\u7684npm\u5305"},{"level":3,"title":"\u7F16\u5199\u672C\u5730\u6A21\u5757","slug":"\u7F16\u5199\u672C\u5730\u6A21\u5757"},{"level":3,"title":"\u53D1\u5E03\u53CA\u6CE8\u610F\u4E8B\u9879","slug":"\u53D1\u5E03\u53CA\u6CE8\u610F\u4E8B\u9879"},{"level":2,"title":"\u642D\u5EFA\u672C\u5730npm\u670D\u52A1\u5668","slug":"\u642D\u5EFA\u672C\u5730npm\u670D\u52A1\u5668"},{"level":2,"title":"\u4FEE\u6539npm\u955C\u50CF","slug":"\u4FEE\u6539npm\u955C\u50CF"},{"level":2,"title":"\u5176\u4ED6\u5305\u7BA1\u7406\u5DE5\u5177","slug":"\u5176\u4ED6\u5305\u7BA1\u7406\u5DE5\u5177"},{"level":3,"title":"yarn","slug":"yarn"},{"level":3,"title":"cnpm","slug":"cnpm"}],"relativePath":"\u524D\u7AEF/\u4E1A\u52A1\u76F8\u5173/npm.md"}',o={},r=l(`<p>\u53C2\u8003</p><ul><li><a href="https://juejin.im/post/5ab3f77df265da2392364341" target="_blank" rel="noopener noreferrer">2018 \u5E74\u4E86\uFF0C\u4F60\u8FD8\u662F\u53EA\u4F1A npm install \u5417</a>\uFF0C\u8FD9\u7BC7\u6587\u7AE0\u8BB2\u7684\u5F88\u5168\uFF0C\u4E0D\u59A8\u79FB\u6B65\u9605\u8BFB</li></ul><h2 id="\u76F8\u5173\u6982\u5FF5" tabindex="-1">\u76F8\u5173\u6982\u5FF5 <a class="header-anchor" href="#\u76F8\u5173\u6982\u5FF5" aria-hidden="true">#</a></h2><h3 id="\u6A21\u5757\u4E0E\u5305" tabindex="-1">\u6A21\u5757\u4E0E\u5305 <a class="header-anchor" href="#\u6A21\u5757\u4E0E\u5305" aria-hidden="true">#</a></h3><p>\u53C2\u8003\uFF1A<a href="https://docs.npmjs.com/about-packages-and-modules" target="_blank" rel="noopener noreferrer">About packages and modules</a></p><p>\u6A21\u5757<code>Module</code>\u662F\u4EFB\u4F55\u7684\u80FD\u88ABnodejs\u7A0B\u5E8F\u4F7F\u7528require\u52A0\u8F7D\u7684\u6A21\u5757\u3002\u6EE1\u8DB3\u4EE5\u4E0B\u6761\u4EF6\u5747\u53EF\u4EE5\u79F0\u4E3AModule\uFF1A</p><ul><li>\u4E00\u4E2A\u6587\u4EF6\u5939\u5305\u542Bpackage.json\u6587\u4EF6\u5E76\u6307\u5B9A\u4E86main\u5B57\u6BB5</li><li>\u4E00\u4E2A\u6587\u4EF6\u5939\u5305\u542Bindex.js\u6587\u4EF6</li><li>\u4E00\u4E2Ajavascript\u6587\u4EF6</li></ul><p>\u9700\u8981\u77E5\u9053\u7684\u662F\uFF0CJavaScript\u6A21\u5757\u89C4\u8303\u6709<code>CommonJS</code>\u3001<code>ES6 module</code>\u3001<code>AMD</code>\u7B49\u591A\u79CD\u5F62\u5F0F\u3002</p><p>\u5927\u591A\u6570Package\u90FD\u662F\u4E00\u4E2AModule\uFF0C\u4E0B\u9762\u662F\u5B98\u7F51\u4E0A\u5173\u4E8E<code>pacekage</code>\u7684\u5B9A\u4E49\uFF0C\u53EF\u4EE5\u5927\u81F4\u4E86\u89E3\u4E00\u4E0B\uFF0C\u4E0D\u5FC5\u62D8\u6CE5\u4E8E\u76F8\u5173\u6982\u5FF5</p><ul><li>(a)\u4E00\u4E2A\u5305\u542B\u4E86\u7A0B\u5E8F\u548C\u63CF\u8FF0\u8BE5\u7A0B\u5E8F\u7684 package.json \u6587\u4EF6 \u7684 \u6587\u4EF6\u5939</li><li>(b)\u4E00\u4E2A\u5305\u542B\u4E86 (a) \u7684 gzip \u538B\u7F29\u6587\u4EF6</li><li>(c)\u4E00\u4E2A\u53EF\u4EE5\u4E0B\u8F7D\u5F97\u5230 (b) \u8D44\u6E90\u7684 url (\u901A\u5E38\u662F http(s) url)</li><li>(d)\u4E00\u4E2A\u683C\u5F0F\u4E3A <code>&lt;name&gt;@&lt;version&gt;</code> \u7684\u5B57\u7B26\u4E32\uFF0C\u53EF\u6307\u5411 npm \u6E90(\u901A\u5E38\u662F\u5B98\u65B9\u6E90 <a href="http://npmjs.org" target="_blank" rel="noopener noreferrer">npmjs.org</a>)\u4E0A\u5DF2\u53D1\u5E03\u7684\u53EF\u8BBF\u95EE url\uFF0C\u4E14\u8BE5 url \u6EE1\u8DB3\u6761\u4EF6 (c)</li><li>(e)\u4E00\u4E2A\u683C\u5F0F\u4E3A <code>&lt;name&gt;@&lt;tag&gt;</code> \u7684\u5B57\u7B26\u4E32\uFF0C\u5728 npm \u6E90\u4E0A\u8BE5<code>&lt;tag&gt;</code>\u6307\u5411\u67D0 <code>&lt;version&gt;</code> \u5F97\u5230 <code>&lt;name&gt;@&lt;version&gt;</code>\uFF0C\u540E\u8005\u6EE1\u8DB3\u6761\u4EF6 (d)</li><li>(f)\u4E00\u4E2A\u683C\u5F0F\u4E3A <code>&lt;name&gt;</code> \u7684\u5B57\u7B26\u4E32\uFF0C\u9ED8\u8BA4\u6DFB\u52A0 latest \u6807\u7B7E\u6240\u5F97\u5230\u7684 <code>&lt;name&gt;@latest</code> \u6EE1\u8DB3\u6761\u4EF6 (e)</li><li>(g)\u4E00\u4E2A git url, \u8BE5 \burl \u6240\u6307\u5411\u7684\u4EE3\u7801\u5E93\u6EE1\u8DB3\u6761\u4EF6 (a)</li></ul><p><a href="https://www.npmjs.cn/" target="_blank" rel="noopener noreferrer">npm</a>\u5168\u79F0\u4E3A<code>Node Package Manager</code>\uFF0C\u662F\u4E00\u4E2A\u57FA\u4E8ENode.js\u7684<strong>\u5305</strong>\u7BA1\u7406\u5668\uFF0Cnpm \u5B58\u5728\u7684\u76EE\u7684\u662F\u907F\u514D JS \u5F00\u53D1\u8005\u91CD\u590D\u9020\u8F6E\u5B50\uFF0C\u8BA9\u5927\u5BB6\u7684\u52B3\u52A8\u6210\u679C\u53EF\u4EE5\u5171\u4EAB\u3002</p><h3 id="package-json" tabindex="-1">package.json <a class="header-anchor" href="#package-json" aria-hidden="true">#</a></h3><p>package.json \u6587\u4EF6\u5C31\u662F\u5B9A\u4E49\u4E86\u9879\u76EE\u7684\u5404\u79CD\u5143\u4FE1\u606F\uFF0C\u5305\u62EC\u9879\u76EE\u7684\u540D\u79F0\u3001git\u4ED3\u5E93\u5730\u5740\u3001\u4F5C\u8005\u7B49\u7B49\uFF0C\u6700\u91CD\u8981\u7684\u662F\u5176\u4E2D\u5B9A\u4E49\u4E86\u6211\u4EEC\u9879\u76EE\u7684\u4F9D\u8D56\u63D2\u4EF6\u548C\u73AF\u5883\u3002\u4E00\u822C\u60C5\u51B5\u4E0B\uFF0C\u4E0D\u9700\u8981\u5C06<code>nodu_modules</code>\u653E\u5165\u7248\u672C\u63A7\u5236\uFF0C\u53EA\u9700\u8981\u7BA1\u7406\u8FD9\u4E2Apackage.json\u6587\u4EF6\uFF0C\u7136\u540E\u901A\u8FC7<code>npm install</code>\uFF0C\u5C31\u4F1A\u81EA\u52A8\u4E0B\u8F7D\u76F8\u5173\u4F9D\u8D56\u3002</p><p><code>package.json</code>\u7684\u6BCF\u4E2A\u5B57\u6BB5\u90FD\u6709\u4E00\u4E9B\u7279\u5B9A\u7684\u7528\u9014\uFF0C\u5173\u4E8E\u5305\u4F9D\u8D56\u6709<code>devDependencies</code>\u548C<code>dependencies</code>\u4E24\u4E2A\u5B57\u6BB5\uFF0C\u4ED6\u4EEC\u7684\u533A\u522B\u5728\u4E8E\uFF1A</p><ul><li>\u524D\u8005\u662F\u5F00\u53D1\u7684\u65F6\u5019\u9700\u8981\u7684\u4F9D\u8D56\u9879\uFF0C\u4F7F\u7528<code>npm i xxx -S</code>\u5B89\u88C5</li><li>\u540E\u8005\u662F\u7A0B\u5E8F\u6B63\u5E38\u8FD0\u884C\u9700\u8981\u7684\u5305\uFF0C\u4F7F\u7528<code>npm i xxx -D</code>\u5B89\u88C5</li></ul><p>\u6B64\u5916\u67D0\u4E9B\u6846\u67B6\u6216\u5DE5\u5177\u8FD8\u4F1A\u989D\u5916\u6269\u5C55<code>package.json</code>\u7684\u914D\u7F6E\uFF0C\u5982<code>babel</code>\u7B49\u53EF\u4EE5\u4E5F\u53EF\u4EE5\u76F4\u63A5\u5728<code>package.json</code>\u4E2D\u914D\u7F6E</p><h3 id="\u8BED\u4E49\u5316\u7248\u672C" tabindex="-1">\u8BED\u4E49\u5316\u7248\u672C <a class="header-anchor" href="#\u8BED\u4E49\u5316\u7248\u672C" aria-hidden="true">#</a></h3><p>npm\u5305\u7684\u7248\u672C\u53F7\u4F7F\u7528<a href="https://semver.org/lang/zh-CN/" target="_blank" rel="noopener noreferrer">semver</a> \u5B9A\u4E49\u3002\u7248\u672C\u53F7\u5B9E\u9645\u4E0A\u662F\u4E00\u4E2A\u7279\u5B9A\u542B\u4E49\u7684\u5B57\u7B26\u4E32\uFF0C\u5176\u683C\u5F0F\u4E3A<code>\u4E3B\u7248\u672C\u53F7.\u6B21\u7248\u672C\u53F7.\u4FEE\u8BA2\u53F7</code>\uFF0C\u7248\u672C\u53F7\u9012\u589E\u89C4\u5219\u5982\u4E0B</p><ul><li>\u4E3B\u7248\u672C\u53F7\uFF1A\u5F53\u4F60\u505A\u4E86\u4E0D\u517C\u5BB9\u7684 API \u4FEE\u6539\uFF0C</li><li>\u6B21\u7248\u672C\u53F7\uFF1A\u5F53\u4F60\u505A\u4E86\u5411\u4E0B\u517C\u5BB9\u7684\u529F\u80FD\u6027\u65B0\u589E\uFF0C</li><li>\u4FEE\u8BA2\u53F7\uFF1A\u5F53\u4F60\u505A\u4E86\u5411\u4E0B\u517C\u5BB9\u7684\u95EE\u9898\u4FEE\u6B63\u3002</li></ul><p>package.json\u4E2D\u7684\u4F9D\u8D56\u7248\u672C\u53F7\u53EF\u4EE5\u5305\u542B<code>^</code>\u3001<code>~</code>\u3001<code>&gt;=</code>\u7B49\u524D\u7F00</p><ul><li>caret(\u7BAD\u5934)\u8868\u793A\uFF1A ^2.0.2\u80FD\u5E2E\u4F60\u4E0B\u8F7D\u6700\u65B0\u76842.x.x\u7684\u5305\uFF0C\u4E0D\u80FD\u4E0B\u8F7D1.x.x\u7684\u5305\u3002\u6BD4\u5982\u6700\u65B0\u7684\u662F2.1.0\uFF0C \u5C31\u662F\u76F4\u63A5\u4E0B\u8F7D2.1.0\u3002</li><li>tilde(\u6CE2\u6D6A\u7EBF)\u8868\u793A\uFF1A \uFF5E2.0.2\u80FD\u5E2E\u4F60\u4E0B\u8F7D2.0.x\u7684\u6700\u65B0\u5305\uFF0C\u4E0D\u80FD\u4E0B\u8F7D2.1.x\u7684\u5305\uFF0C\u6BD4 ^ \u8981\u66F4\u52A0\u8C28\u614E\u4E00\u4E9B\u3002\u6BD4\u5982\u6700\u65B0\u7684\u5305\u5982\u679C\u662F2.0.3\uFF0C \u5C31\u4F1A\u4E0B\u8F7D\uFF0C\u800C\u5982\u679C\u662F2.1.3\u5C31\u4E0D\u4F1A\u4E0B\u8F7D\u3002</li><li><code>&gt;=</code>\u8868\u793A\u9700\u8981\u7248\u672C\u53F7\u5927\u4E8E\u6216\u7B49\u4E8E\u6307\u5B9A\u7248\u672C</li><li><code>&lt;=</code>\u8868\u793A\u9700\u8981\u7248\u672C\u53F7\u5C0F\u4E8E\u6216\u7B49\u4E8E\u6307\u5B9A\u7248\u672C</li><li>\u6CA1\u6709\u4EFB\u4F55\u7B26\u53F7\u5C31\u8868\u793A\u4E25\u683C\u5339\u914D\uFF0C\u5FC5\u987B\u4E0B\u8F7D\u8BE5\u7248\u672C\u53F7\u7684\u4F9D\u8D56\u5305</li></ul><p>\u6B64\u5916\uFF0C\u5728<code>package.json</code>\u4E2D\u4EFB\u610F\u4E24\u6761\u89C4\u5219\uFF0C\u901A\u8FC7 <code>||</code> \u8FDE\u63A5\u8D77\u6765\uFF0C\u8868\u793A\u201C\u6216\u201D\u903B\u8F91\uFF0C\u5373\u4E24\u6761\u89C4\u5219\u7684\u5E76\u96C6\u3002</p><h3 id="package-lock" tabindex="-1">package-lock <a class="header-anchor" href="#package-lock" aria-hidden="true">#</a></h3><p>\u53C2\u8003\uFF1A<a href="https://www.shymean.com/article/%E8%AE%B0package-lock%E5%BC%95%E5%8F%91%E7%9A%84%E4%B8%80%E6%AC%A1%E4%BA%8B%E6%95%85" target="_blank" rel="noopener noreferrer">\u8BB0package-lock\u5F15\u53D1\u7684\u4E00\u6B21\u4E8B\u6545</a></p><p><code>package-lock.json</code>\u662F\u5F53 <code>node_modules</code>\u6216<code>package.json</code>\u53D1\u751F\u53D8\u5316\u65F6\u81EA\u52A8\u751F\u6210\u7684\u6587\u4EF6\u3002\u8FD9\u4E2A\u6587\u4EF6\u4E3B\u8981\u529F\u80FD\u662F\u786E\u5B9A\u5F53\u524D\u5B89\u88C5\u7684\u5305\u7684\u4F9D\u8D56\uFF0C\u4EE5\u4FBF\u540E\u7EED\u91CD\u65B0\u5B89\u88C5\u7684\u65F6\u5019\u751F\u6210\u76F8\u540C\u7684\u4F9D\u8D56\uFF0C\u800C\u5FFD\u7565\u9879\u76EE\u5F00\u53D1\u8FC7\u7A0B\u4E2D\u6709\u4E9B\u4F9D\u8D56\u5DF2\u7ECF\u53D1\u751F\u7684\u66F4\u65B0\u3002</p><p>Lock\u673A\u5236\u662F\u4E3A\u4E86\u4FDD\u8BC1\u591A\u4EBA\u5F00\u53D1\u7684\u7EDF\u4E00\u6027\u3002\u4EC0\u4E48\u662F\u7EDF\u4E00\u6027\uFF1F\u5C31\u662F\u65E0\u8BBA\u4F55\u65F6\u6765\u4E86\u4E00\u4E2A\u65B0\u4EBA\u3001\u6362\u4E86\u4E2A\u65B0\u7535\u8111\uFF0C\u6211\u4EECnpm i\u7684\u5305\u90FD\u662F\u4E00\u81F4\u7684\uFF0C\u4E0D\u7BA1\u5728\u90A3\u4E00\u53F0\u673A\u5668\u4E0A\u6267\u884C npm install \u90FD\u4F1A\u5F97\u5230\u5B8C\u5168\u76F8\u540C\u7684 node_modules \u7ED3\u679C\u3002</p><p>\u968F\u7740\u9879\u76EE\u8D8A\u6765\u8D8A\u5927\uFF0C\u4F9D\u8D56\u8D8A\u6765\u8D8A\u591A\uFF0C\u5F88\u96BE\u4FDD\u8BC1\u6BCF\u4E00\u4E2Anpm\u5305\u7684\u6700\u65B0\u7248\u672C\u90FD\u662F\u9002\u5408\u7684\u3001\u6709\u7528\u7684\u3002Lock\u673A\u5236\u53EF\u4EE5\u6700\u5927\u5316\u89E3\u51B3\u6B64\u7C7B\u51B2\u7A81\u3002\u5728\u591A\u4EBA\u534F\u4F5C\u65F6\u540C\u6B65\u5F00\u53D1\u73AF\u5883\u3002\u81F3\u4E8E\u4EC0\u4E48\u65F6\u5019\u7528\u65B0\u7684\u5305\uFF0C\u5230\u65F6\u5019\u518D\u540C\u6B65lock\u6587\u4EF6\u5C31\u662F\u3002</p><p>\u57FA\u4E8E\u4EE5\u4E0A\u539F\u56E0\uFF0C\u5EFA\u8BAE\u5C06package-lock\u6587\u4EF6\u9501\u5B9A\u5B89\u88C5\u65F6\u7684\u5305\u7684\u7248\u672C\u53F7\uFF0C\u5E76\u4E14\u4E0A\u4F20\u5230git\uFF0C\u4EE5\u4FDD\u8BC1\u5176\u4ED6\u4EBA\u5728npm install\u65F6\u5927\u5BB6\u7684\u4F9D\u8D56\u80FD\u4FDD\u8BC1\u4E00\u81F4\u3002</p><h2 id="npm-install" tabindex="-1">npm install <a class="header-anchor" href="#npm-install" aria-hidden="true">#</a></h2><p>\u53C2\u8003:</p><ul><li><a href="https://docs.npmjs.com/cli/install" target="_blank" rel="noopener noreferrer">npm-install</a></li><li><a href="https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/22" target="_blank" rel="noopener noreferrer">npm \u6A21\u5757\u5B89\u88C5\u673A\u5236</a></li></ul><h3 id="\u6A21\u5757\u5B89\u88C5\u6D41\u7A0B" tabindex="-1">\u6A21\u5757\u5B89\u88C5\u6D41\u7A0B <a class="header-anchor" href="#\u6A21\u5757\u5B89\u88C5\u6D41\u7A0B" aria-hidden="true">#</a></h3><p>\u6709\u4E86npm\u4E4B\u540E\uFF0C\u6211\u4EEC\u53EA\u9700\u8981\u901A\u8FC7<code>npm install xxx</code>\u5C31\u53EF\u4EE5\u4ECEnpm\u4ED3\u5E93\u91CC\u9762\u4E0B\u8F7D\u522B\u4EBA\u5199\u597D\u7684\u5305\uFF0C\u7136\u540E\u5728\u4EE3\u7801\u91CC\u9762\u5F15\u5165\u76F8\u5173\u7684\u6A21\u5757\u8FDB\u884C\u5F00\u53D1\u3002</p><p>\u5B89\u88C5\u6D41\u7A0B\u5982\u4E0B</p><ul><li>npm \u6A21\u5757\u5B89\u88C5\u673A\u5236\uFF1A</li><li>\u53D1\u51FAnpm install\u547D\u4EE4</li><li>\u67E5\u8BE2node_modules\u76EE\u5F55\u4E4B\u4E2D\u662F\u5426\u5DF2\u7ECF\u5B58\u5728\u6307\u5B9A\u6A21\u5757 <ul><li>\u82E5\u5B58\u5728\uFF0C\u4E0D\u518D\u91CD\u65B0\u5B89\u88C5</li><li>\u82E5\u4E0D\u5B58\u5728 <ul><li>npm \u5411 registry \u67E5\u8BE2\u6A21\u5757\u538B\u7F29\u5305\u7684\u7F51\u5740</li><li>\u4E0B\u8F7D\u538B\u7F29\u5305\uFF0C\u5B58\u653E\u5728\u6839\u76EE\u5F55\u4E0B\u7684.npm\u76EE\u5F55\u91CC</li><li>\u89E3\u538B\u538B\u7F29\u5305\u5230\u5F53\u524D\u9879\u76EE\u7684node_modules\u76EE\u5F55</li></ul></li></ul></li></ul><p>\u5177\u4F53\u9636\u6BB5\u53EF\u5206\u4E3A\u4E0B\u9762\u51E0\u4E2A\u6B65\u9AA4</p><ul><li>\u5982\u679C\u5DE5\u7A0B\u5B9A\u4E49\u4E86<code>preinstall</code>\u94A9\u5B50\uFF0C\u5219\u5148\u6267\u884C</li><li>\u6839\u636E<code>package.json</code>\u4E2D\u7684<code>dependencies</code> \u548C <code>devDependencies</code> \u5C5E\u6027\u4E2D\u76F4\u63A5\u6307\u5B9A\u7684\u6A21\u5757\u786E\u5B9A\u9996\u5C42\u4F9D\u8D56\uFF0C\u6784\u5EFA\u4E00\u9897\u4EE5\u5DE5\u7A0B\u672C\u8EAB\u4E3A\u6839\u8282\u70B9\u7684\u4F9D\u8D56\u6811</li><li>\u5206\u6790\u5B8C\u6A21\u5757\u4F9D\u8D56\uFF0C\u5C31\u5F00\u59CB\u83B7\u53D6\u6A21\u5757\uFF0C\u83B7\u53D6\u6A21\u5757\u662F\u4E00\u4E2A\u9012\u5F52\u7684\u8FC7\u7A0B <ul><li>\u83B7\u53D6\u6A21\u5757\u4FE1\u606F\uFF0C\u5728\u4E0B\u8F7D\u4E00\u4E2A\u6A21\u5757\u4E4B\u524D\uFF0C\u9996\u5148\u8981\u786E\u5B9A\u9700\u8981\u4E0B\u8F7D\u7684\u5305semver\u7248\u672C\uFF0C\u7136\u540E\u8FD4\u56DE\u5BF9\u5E94\u7684\u538B\u7F29\u5305\u5730\u5740</li><li>\u83B7\u53D6\u6A21\u5757\u5B9E\u4F53\uFF0C\u4E0A\u4E00\u6B65\u4F1A\u83B7\u53D6\u5230\u6A21\u5757\u7684\u538B\u7F29\u5305\u5730\u5740\uFF08resolved \u5B57\u6BB5\uFF09\uFF0Cnpm \u4F1A\u7528\u6B64\u5730\u5740\u68C0\u67E5\u672C\u5730<code>node_modules</code>\u662F\u5426\u5DF2\u7ECF\u5B89\u88C5\u8BE5\u5305\uFF0C\u5982\u679C\u6CA1\u6709\u5219\u4ECE\u4ED3\u5E93\u4E0B\u8F7D\uFF0C\u4E0B\u8F7D\u7684\u6587\u4EF6\u4F1A\u653E\u5728<code>node_modules</code>\u4E0B</li><li>\u67E5\u627E\u8BE5\u6A21\u5757\u4F9D\u8D56\uFF0C\u5982\u679C\u6709\u4F9D\u8D56\u5219\u56DE\u5230\u7B2C1\u6B65\uFF0C\u5982\u679C\u6CA1\u6709\u5219\u505C\u6B62\u3002</li></ul></li></ul><p>\u8FD9\u91CC\u9700\u8981\u7406\u89E3<code>\u6A21\u5757\u6241\u5E73\u5316\uFF08dedupe\uFF09</code>\u7684\u6982\u5FF5\u3002\u4E00\u68F5\u5B8C\u6574\u7684\u4F9D\u8D56\u6811\uFF0C\u5176\u4E2D\u53EF\u80FD\u5305\u542B\u5927\u91CF<strong>\u91CD\u590D\u6A21\u5757</strong>\uFF0C\u91CD\u590D\u6A21\u5757\u6307\u7684\u662F\u6A21\u5757\u540D\u76F8\u540C\u4E14semver\u517C\u5BB9\u3002\u5DF2\u91CD\u590D\u7684\u6A21\u5757\u4E0D\u9700\u8981\u91CD\u65B0\u5B89\u88C5\uFF0C\u8FD9\u53EF\u4EE5\u4F7F\u66F4\u591A\u5197\u4F59\u6A21\u5757\u5728 dedupe \u8FC7\u7A0B\u4E2D\u88AB\u53BB\u6389\u3002</p><ul><li>npm2\u4E2D\uFF0C<code>node_modules</code>\u91C7\u7528\b\u7B80\u5355\u7684\u9012\u5F52\u5B89\u88C5\u65B9\u6CD5\uFF0C\u4E0D\u540C\u7684\u4F9D\u8D56\u5305\u91CC\u9762\u53EF\u80FD\u5305\u542B\u91CD\u590D\u7684\u5E95\u5C42\u5305\u4F9D\u8D56</li><li>npm3\u4E2D\uFF0C<code>node_modules</code> \u76EE\u5F55\u6539\u6210\u4E86\u66F4\u52A0\u6241\u5E73\u72B6\u7684\u5C42\u7EA7\u7ED3\u6784\uFF0C\u5F97\u76CA\u4E8E node \u7684\u6A21\u5757\u52A0\u8F7D\u673A\u5236\uFF0C\u6A21\u5757\u53EF\u4EE5\u5728\u4E0A\u5C42\u7684<code>node_modules</code>\u76EE\u5F55\u4E2D\u6210\u529F\u52A0\u8F7D\u4F9D\u8D56\uFF0C\u4ECE\u800C\u5B9E\u73B0\u6A21\u5757\u6241\u5E73\u5316</li><li>npm5\u4E2D\uFF0C\u65B0\u589E\u4E86<code>package-lock.json</code>\u6587\u4EF6\uFF0C\u5176\u4F5C\u7528\u662F\u9501\u5B9A\u4F9D\u8D56\u5B89\u88C5\u7ED3\u6784\uFF0C\u5185\u90E8\u4E0Enode_modules \u76EE\u5F55\u7684\u6587\u4EF6\u5C42\u7EA7\u7ED3\u6784\u662F\u4E00\u4E00\u5BF9\u5E94\u7684</li></ul><h3 id="\u4F18\u5316install\u901F\u5EA6" tabindex="-1">\u4F18\u5316install\u901F\u5EA6 <a class="header-anchor" href="#\u4F18\u5316install\u901F\u5EA6" aria-hidden="true">#</a></h3><p><strong>\u5207\u6362\u955C\u50CF</strong></p><p>\u65E5\u5E38\u5DE5\u4F5C\u53EF\u80FD\u9700\u8981\u4ECEnpm\u5B98\u65B9\u6E90\u3001\u6DD8\u5B9D\u955C\u50CF\u3001\u516C\u53F8\u79C1\u6709\u6E90\u7B49\u4ED3\u5E93\u6765\u56DE\u5207\u6362\uFF0C\u56E0\u6B64\u63A8\u8350<a href="https://www.npmjs.com/package/nrm" target="_blank" rel="noopener noreferrer">nrm</a>\u5DE5\u5177\u7BA1\u7406npm\u6E90</p><div class="language-"><pre><code># \u5217\u4E3E\u76EE\u524D\u914D\u7F6E\u7684\u6E90\u5217\u8868
nrm ls 
# \u4F7F\u7528\u6DD8\u5B9D\u6E90
nrm use taobao
# \u589E\u52A0\u4E00\u79CD\u6E90\uFF0C\u7136\u540E\u5C31\u53EF\u4EE5\u5728ls \u548C use\u4E2D\u4F7F\u7528\u4E86
nrm add xxxxx
</code></pre></div><p><strong>\u76F4\u63A5\u4ECE\u7F13\u5B58\u5B89\u88C5</strong></p><p>\u53C2\u8003\uFF1A<a href="http://www.ruanyifeng.com/blog/2016/01/npm-install.html" target="_blank" rel="noopener noreferrer">npm \u6A21\u5757\u5B89\u88C5\u673A\u5236\u7B80\u4ECB</a></p><p>\u4E00\u4E2A\u6A21\u5757\u5B89\u88C5\u4EE5\u540E\uFF0C\u672C\u5730\u5176\u5B9E\u4FDD\u5B58\u4E86\u4E24\u4EFD\u3002\u4E00\u4EFD\u662F~/.npm\u76EE\u5F55\u4E0B\u7684\u538B\u7F29\u5305\uFF0C\u53E6\u4E00\u4EFD\u662Fnode_modules\u76EE\u5F55\u4E0B\u89E3\u538B\u540E\u7684\u4EE3\u7801\u3002</p><p>\u8FD0\u884Cnpm install\u7684\u65F6\u5019\uFF0C\u53EA\u4F1A\u68C0\u67E5node_modules\u76EE\u5F55\uFF0C\u800C\u4E0D\u4F1A\u68C0\u67E5~/.npm\u76EE\u5F55\u3002\u4E5F\u5C31\u662F\u8BF4\uFF0C\u5982\u679C\u4E00\u4E2A\u6A21\u5757\u5728\uFF5E/.npm\u4E0B\u6709\u538B\u7F29\u5305\uFF0C\u4F46\u662F\u6CA1\u6709\u5B89\u88C5\u5728node_modules\u76EE\u5F55\u4E2D\uFF0Cnpm \u4F9D\u7136\u4F1A\u4ECE\u8FDC\u7A0B\u4ED3\u5E93\u4E0B\u8F7D\u4E00\u6B21\u65B0\u7684\u538B\u7F29\u5305</p><p>\u8FD9\u79CD\u884C\u4E3A\u56FA\u7136\u53EF\u4EE5\u4FDD\u8BC1\u603B\u662F\u53D6\u5F97\u6700\u65B0\u7684\u4EE3\u7801\uFF0C\u4F46\u6709\u65F6\u5E76\u4E0D\u662F\u6211\u4EEC\u60F3\u8981\u7684\u3002\u6700\u5927\u7684\u95EE\u9898\u662F\uFF0C\u5B83\u4F1A\u6781\u5927\u5730\u5F71\u54CD\u5B89\u88C5\u901F\u5EA6\u3002\u56E0\u6B64\u53EF\u4EE5\u901A\u8FC7<code>--cache-min</code>\u4ECE\u672C\u5730\u7684\u7F13\u5B58\u76EE\u5F55\u4E2D\u76F4\u63A5\u89E3\u538B\u5305\u6587\u4EF6\u3002</p><h2 id="npm-script" tabindex="-1">npm script <a class="header-anchor" href="#npm-script" aria-hidden="true">#</a></h2><p>\u53C2\u8003\uFF1A<a href="http://www.ruanyifeng.com/blog/2016/10/npm_scripts.html" target="_blank" rel="noopener noreferrer">npm scripts \u4F7F\u7528\u6307\u5357</a></p><p>\u5E38\u89C1\u7684<code>cli</code>\u5DE5\u5177\uFF0C\u90FD\u589E\u52A0\u4E86\u4E00\u4E2A<code>npm scripts</code>\u547D\u4EE4\uFF0C\u5982<code>npm run build</code>\u3001<code>npm run serve</code>\u7B49</p><p>\u6BCF\u5F53\u6267\u884C<code>npm run</code>\uFF0C\u5C31\u4F1A\u81EA\u52A8\u65B0\u5EFA\u4E00\u4E2A Shell\uFF0C\u5728\u8FD9\u4E2A Shell \u91CC\u9762\u6267\u884C\u6307\u5B9A\u7684\u811A\u672C\u547D\u4EE4\u3002\u56E0\u6B64\uFF0C\u53EA\u8981\u662F Shell\uFF08\u4E00\u822C\u662F Bash\uFF09\u53EF\u4EE5\u8FD0\u884C\u7684\u547D\u4EE4\uFF0C\u5C31\u53EF\u4EE5\u5199\u5728 npm \u811A\u672C\u91CC\u9762\u3002</p><h3 id="npx" tabindex="-1">npx <a class="header-anchor" href="#npx" aria-hidden="true">#</a></h3><p>npx\u662F\u4EC0\u4E48\u5462\uFF1F npx \u4F1A\u5E2E\u4F60\u6267\u884C\u4F9D\u8D56\u5305\u91CC\u7684\u4E8C\u8FDB\u5236\u6587\u4EF6\u3002</p><div class="language-"><pre><code>npm i webpack -D      //\u975E\u5168\u5C40\u5B89\u88C5

// \u65E0npx \u6267\u884C webpack \u7684\u547D\u4EE4
./node_modules/.bin/webpack -v

// \u4F7F\u7528npx
npx webpack -v 
</code></pre></div><h2 id="\u5982\u4F55\u53D1\u5E03\u81EA\u5DF1\u7684npm\u5305" tabindex="-1">\u5982\u4F55\u53D1\u5E03\u81EA\u5DF1\u7684npm\u5305 <a class="header-anchor" href="#\u5982\u4F55\u53D1\u5E03\u81EA\u5DF1\u7684npm\u5305" aria-hidden="true">#</a></h2><h3 id="\u7F16\u5199\u672C\u5730\u6A21\u5757" tabindex="-1">\u7F16\u5199\u672C\u5730\u6A21\u5757 <a class="header-anchor" href="#\u7F16\u5199\u672C\u5730\u6A21\u5757" aria-hidden="true">#</a></h3><p>\u53C2\u8003</p><ul><li><a href="http://blog.csdn.net/bugknightyyp/article/details/8783162" target="_blank" rel="noopener noreferrer"> \u600E\u4E48\u6837\u5199\u4E00\u4E2A node.js\u6A21\u5757\u4EE5\u53CANPM Package</a></li></ul><p>\u9996\u5148\uFF0C\u65B0\u5EFA\u4E00\u4E2A<code>txm</code>\u6587\u4EF6\u5939\uFF0C\u7BA1\u7406\u6211\u4EEC\u7684\u6574\u4E2A\u6A21\u5757\u6587\u4EF6\uFF0C</p><ul><li><code>index.js</code>\uFF0C\u7528\u6765\u5B58\u653E\u6A21\u5757\u7684\u4E3B\u8981\u903B\u8F91\uFF0C\u6CE8\u610F\u6309\u7167CommonJS\u89C4\u8303\u6765\u4E66\u5199\u6A21\u5757\uFF0C\u5373\u6BCF\u4E2A\u6A21\u5757\u4F7F\u7528<code>exports</code>\u66B4\u9732\u63A5\u53E3</li><li><code>package.json</code>\uFF0C\u6A21\u5757\u7684\u914D\u7F6E\uFF0C\u6BD4\u5982\u540D\u79F0\uFF0C\u7248\u672C\u548C\u76F8\u5173\u4F9D\u8D56\u7B49\u7B49</li><li><code>README.md</code>\uFF0C\u6A21\u5757\u7684\u4ECB\u7ECD\u548C\u4F7F\u7528\u7B49</li></ul><p>\u7136\u540E\u518D<code>txm</code>\u6587\u4EF6\u5939\u4E2D\u4F7F\u7528<code>npm pack</code>\u5C06\u6574\u4E2A\u6587\u4EF6\u5939\u6253\u5305\uFF0C\u4F1A\u663E\u793A\u751F\u6210<code>txm-0.0.1.tgz</code>(\u8FD9\u4E2A\u7248\u672C\u53F7\u662F\u5728package.json\u4E2D\u5B9A\u4E49)\u3002</p><p>\u7136\u540E\u8FD4\u56DE\u4E0A\u4E00\u5C42\uFF0C\u4F7F\u7528<code>npm install txm/txm-0.0.1.tgz</code>\u5C06txm\u6A21\u5757\u5305\u8FDB\u884C\u5B89\u88C5\u3002<br> \u8FD9\u91CC\u9700\u8981\u6CE8\u610F\u4E0D\u80FD\u518Dtxm\u6587\u4EF6\u5939\u4E2D\u76F4\u63A5\u4F7F\u7528<code>npm install txm-0.0.1.tgz</code>\uFF0C\u4F1A\u51FA\u73B0<code>Refusing to install xm as a dependency of itself</code>\u7684\u9519\u8BEF\u4FE1\u606F</p><p>\u53EF\u4EE5\u5728\u6574\u4E2A\u9879\u76EE\u6587\u4EF6\u5939\u7684<code>node_modules</code>\u6587\u4EF6\u5939\u4E2D\u53D1\u73B0\u6211\u4EEC\u7684\u6A21\u5757\u5305\u4E86\u3002 \u6700\u540E\u5728\u9879\u76EE\u7684\u6587\u4EF6\u6BD4\u5982<code>main.js</code>\u4E2D\u5C31\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528<code>let txm = require(&#39;txm&#39;)</code>\u6765\u52A0\u8F7D\u6211\u4EEC\u7684\u6A21\u5757\u4E86\u3002</p><h3 id="\u53D1\u5E03\u53CA\u6CE8\u610F\u4E8B\u9879" tabindex="-1">\u53D1\u5E03\u53CA\u6CE8\u610F\u4E8B\u9879 <a class="header-anchor" href="#\u53D1\u5E03\u53CA\u6CE8\u610F\u4E8B\u9879" aria-hidden="true">#</a></h3><p>\u7F16\u5199\u597D\u672C\u5730\u5305\u4E4B\u540E\uFF0C\u5982\u679C\u9700\u8981\u53D1\u5E03\u5230npm\u4ED3\u5E93\u4E0A\u4F9B\u5176\u4ED6\u7528\u6237\u4F7F\u7528\uFF0C\u6309\u7167\u4EE5\u4E0B\u6B65\u9AA4\u8FDB\u884C</p><ul><li>\u5C06\u955C\u50CF\u5207\u6362\u56DE<code>https://registry.npmjs.org/</code>\uFF0C\u5176\u4ED6\u6E90\u5982<a href="https://npm.taobao.org" target="_blank" rel="noopener noreferrer">\u6DD8\u5B9Dnpm</a>\u4F1A\u5B9A\u671F\u4ECEnpm\u5B98\u7F51\u4E0A\u540C\u6B65\u5305\uFF0C\u56E0\u6B64\u53EA\u9700\u8981\u53D1\u5E03\u5728npm\u4E0A\u5373\u53EF</li><li><code>npm adduser</code>\u3001<code>npm login</code>\u767B\u5F55\u9700\u8981\u53D1\u5E03\u6A21\u5757\u7684\u8D26\u53F7</li><li>\u6CE8\u610F\u5305\u540D\u548C\u7248\u672C\u53F7\uFF0C\u662F\u5426\u5DF2\u7ECF\u5B58\u5728\u4E86</li></ul><p>\u76EE\u524Dnpm\u7684\u5305\u540D\u4E3A\u4E86\u9632\u6B62\u201C\u8BEF\u690D\u201D\u653B\u51FB\uFF0C\u4F1A\u81EA\u52A8\u68C0\u6D4B\u76F8\u8FD1\u7684\u5305\u540D\uFF0C\u53C2\u8003<a href="https://www.w3cvip.org/topics/393" target="_blank" rel="noopener noreferrer">https://www.w3cvip.org/topics/393</a>\u3002</p><p>\u89E3\u51B3\u529E\u6CD5\u662F\u52A0\u547D\u540D\u7A7A\u95F4\uFF0C\u7136\u540E\u4FEE\u6539\u53D1\u5E03\u6743\u9650</p><div class="language-"><pre><code>&quot;name&quot;: &quot;@shymean/koa-mock&quot;,
  
npm publish --access=public
</code></pre></div><p>\u5177\u4F53\u5B9E\u8DF5\u53EF\u4EE5\u53C2\u8003\u4E4B\u524D\u5199\u7684\u4E00\u7BC7\u6587\u7AE0:</p><ul><li><a href="https://www.shymean.com/article/%E5%86%99%E4%B8%80%E4%B8%AA%E6%90%AD%E5%BB%BA%E6%9C%AC%E5%9C%B0mock%E6%9C%8D%E5%8A%A1%E5%99%A8%E7%9A%84%E5%91%BD%E4%BB%A4%E8%A1%8C%E5%B7%A5%E5%85%B7#4.%20npm%E6%9C%AC%E5%9C%B0%E5%8C%85%E5%8F%8A%E5%8F%91%E5%B8%83" target="_blank" rel="noopener noreferrer">\u5199\u4E00\u4E2A\u642D\u5EFA\u672C\u5730mock\u670D\u52A1\u5668\u7684\u547D\u4EE4\u884C\u5DE5\u5177</a>\u3002</li></ul><h2 id="\u642D\u5EFA\u672C\u5730npm\u670D\u52A1\u5668" tabindex="-1">\u642D\u5EFA\u672C\u5730npm\u670D\u52A1\u5668 <a class="header-anchor" href="#\u642D\u5EFA\u672C\u5730npm\u670D\u52A1\u5668" aria-hidden="true">#</a></h2><p>\u5728\u67D0\u4E9B\u65F6\u5019\u4E0D\u65B9\u4FBF\u5C06\u6A21\u5757\u53D1\u5E03\u5230\u516C\u5171\u7684npm\u4ED3\u5E93\uFF0C\u56E0\u6B64\u5C31\u6709\u4E86\u642D\u5EFA\u672C\u5730npm\u670D\u52A1\u5668\u7684\u9700\u6C42</p><p>\u5728\u4E4B\u524D\u53EF\u4EE5\u4F7F\u7528<a href="https://github.com/rlidwka/sinopia" target="_blank" rel="noopener noreferrer">sinopia</a>\u6765\u642D\u5EFAnpm\u79C1\u6709\u4ED3\u5E93\uFF0C\u4F46sinopia\u5DF2\u7ECF\u5E74\u4E45\u5931\u4FEE\u4E86\uFF0C\u76EE\u524D\u4E00\u822C\u4F7F\u7528<a href="https://github.com/verdaccio/verdaccio" target="_blank" rel="noopener noreferrer">verdaccio</a></p><div class="language-"><pre><code># \u5168\u5C40\u5B89\u88C5
npm i verdaccio -g 

# \u542F\u52A8\u670D\u52A1
verdaccio

# \u5982\u679C\u5E0C\u671B\u5F00\u542F\u5B88\u62A4\u7ECF\u5E38\uFF0C\u53EF\u4EE5\u4F7F\u7528pm2 
pm2 start verdaccio

http://localhost:4873
</code></pre></div><p>\u53EF\u4EE5\u4FEE\u6539<code>vs ~/.config/verdaccio/config.yaml</code>\u7684\u76F8\u5173\u914D\u7F6E\uFF0C\u6BD4\u5982\u5F53\u627E\u4E0D\u5230\u5305\u65F6\u5982\u679C\u5E0C\u671B\u53BB\u5176\u4ED6\u955C\u50CF\u67E5\u627E\uFF0C\u5219\u4FEE\u6539<code>uplinks</code>\u53C2\u6570</p><div class="language-"><pre><code>uplinks:
  npmjs:
    url: https://registry.npmjs.org/
    # \u53EF\u4EE5\u4FEE\u6539\u4E3A\u6DD8\u5B9D\u955C\u50CF url: https://registry.npm.taobao.org/ 
</code></pre></div><p>\u5982\u679C\u662F\u516C\u53F8\u7EA7\u522B\u7684npm\u79C1\u5E93\uFF0C\u53EF\u4EE5\u8003\u8651\u4F7F\u7528Docker\u5B89\u88C5verdaccio\u955C\u50CF\uFF0C\u6216\u8005\u8D2D\u4E70\u4E91\u670D\u52A1\u5382\u5546\u7684\u79C1\u6709\u5305\u6258\u7BA1\u4ED3\u5E93\u3002</p><h2 id="\u4FEE\u6539npm\u955C\u50CF" tabindex="-1">\u4FEE\u6539npm\u955C\u50CF <a class="header-anchor" href="#\u4FEE\u6539npm\u955C\u50CF" aria-hidden="true">#</a></h2><p>\u5982\u679C\u662F\u4E34\u65F6\u4FEE\u6539\u955C\u50CF\u6E90\uFF0C\u53EF\u4EE5\u901A\u8FC7<code>--registry</code>\u53C2\u6570</p><div class="language-"><pre><code>npm --registry https://registry.npm.taobao.org install
</code></pre></div><p>\u6C38\u4E45\u4FEE\u6539registry\uFF0C\u5219\u53EF\u4EE5\u901A\u8FC7<code>npm config</code></p><div class="language-"><pre><code>npm config set registry https://registry.npm.taobao.org/
</code></pre></div><p>\u5982\u679C\u9700\u8981\u7ECF\u5E38\u5728\u591A\u4E2A\u955C\u50CF\u4E4B\u95F4\u6765\u56DE\u5207\u6362\uFF0C\u53EF\u4EE5\u4F7F\u7528nrm</p><div class="language-"><pre><code>npm install -g nrm

# \u67E5\u770B\u955C\u50CF
nrm ls

# \u4F7F\u7528\u67D0\u4E2A\u955C\u50CF
nrm use taobao

# \u6DFB\u52A0\u955C\u50CF
nrm add local http://localhost:4873/
</code></pre></div><h2 id="\u5176\u4ED6\u5305\u7BA1\u7406\u5DE5\u5177" tabindex="-1">\u5176\u4ED6\u5305\u7BA1\u7406\u5DE5\u5177 <a class="header-anchor" href="#\u5176\u4ED6\u5305\u7BA1\u7406\u5DE5\u5177" aria-hidden="true">#</a></h2><h3 id="yarn" tabindex="-1">yarn <a class="header-anchor" href="#yarn" aria-hidden="true">#</a></h3><p>Yarn\u662F\u7531Facebook\u3001Google\u3001Exponent \u548C Tilde \u8054\u5408\u63A8\u51FA\u4E86\u4E00\u4E2A\u65B0\u7684 JS \u5305\u7BA1\u7406\u5DE5\u5177\uFF0C\u4E3B\u8981\u76EE\u7684\u662F\u5F25\u8865npm\u7684\u4E00\u4E9B\u8BBE\u8BA1\u7F3A\u9677\u3002</p><p>\u5728\u5F53\u65F6\u8FD8\u662Fnpm4.x\u7684\u65F6\u4EE3\u80CC\u666F\u4E0B\uFF0Cnpm\u5B58\u5728\u7684\u4E00\u4E9B\u7F3A\u9677</p><ul><li>npm install\u7684\u65F6\u5019\u975E\u5E38\u6162\uFF0C\u8981\u5B89\u88C5\u7684\u4F9D\u8D56\u592A\u591A\u4E86\uFF0C\u5E76\u4E14\u662F\u6309\u7167\u961F\u5217\u987A\u5E8F\u5B89\u88C5\u6BCF\u4E2A\u4F9D\u8D56</li><li>\u540C\u4E00\u4E2A\u9879\u76EE\uFF0C\u5B89\u88C5\u7684\u65F6\u5019\u65E0\u6CD5\u4FDD\u6301\u4E00\u81F4\u6027\uFF0C\u6CA1\u9519\uFF0C\u5F53\u65F6\u8FD8\u6CA1\u6709package-lock.json</li></ul><p>yarn\u5177\u5907\u7684\u4F18\u70B9</p><ul><li>\u5B89\u88C5\u901F\u5EA6\u5FEB\uFF0C\u4E3B\u8981\u9760\uFF1A\u5E76\u884C\u4E0B\u8F7D\u3001\u7F13\u5B58\u79BB\u7EBF\u5B89\u88C5</li><li>yarn.lock\u8BB0\u5F55\u6BCF\u4E2A\u88AB\u5B89\u88C5\u7684\u4F9D\u8D56\u7684\u7248\u672C</li></ul><p>npm5.x\u4E4B\u540E\u505A\u51FA\u4E86\u4E00\u4E9B\u6539\u52A8</p><ul><li>\u589E\u52A0\u4E86package-lock.json</li><li>\u6587\u4EF6\u4F9D\u8D56\u4F18\u5316\uFF0C\u901A\u8FC7symlinks\u4F9D\u8D56\u672C\u5730\u6A21\u5757\uFF08\u4E4B\u524D\u662F\u62F7\u8D1D\u6587\u4EF6\u5230node_modules\uFF09</li></ul><p>yarn\u5207\u6362\u955C\u50CF\u7684\u8BDD\uFF0C\u53EF\u4EE5\u4F7F\u7528<a href="https://www.npmjs.com/package/yrm" target="_blank" rel="noopener noreferrer">yrm</a>\uFF0C\u8DDF\u4E0A\u9762\u7684nrm\u57FA\u672C\u4E00\u81F4\u3002</p><h3 id="cnpm" tabindex="-1">cnpm <a class="header-anchor" href="#cnpm" aria-hidden="true">#</a></h3><p>\u4E0D\u8981\u7528\uFF0C\u4E0D\u5982\u4F7F\u7528npm\u7136\u540E\u6539\u4E2Ataobao\u955C\u50CF\u3002</p>`,98),p=[r];function d(c,i,t,s,m,h){return a(),n("div",null,p)}var k=e(o,[["render",d]]);export{u as __pageData,k as default};
