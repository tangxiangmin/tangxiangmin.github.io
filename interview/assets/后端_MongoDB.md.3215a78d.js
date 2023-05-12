import{_ as o,c as e,o as n,b as t}from"./app.2f94c7c4.js";const p='{"title":"mongobd","description":"","frontmatter":{},"headers":[{"level":2,"title":"mongobd","slug":"mongobd"},{"level":2,"title":"\u6570\u636E\u5907\u4EFD","slug":"\u6570\u636E\u5907\u4EFD"},{"level":2,"title":"mongodb\u5206\u9875\u6548\u7387\u4F4E","slug":"mongodb\u5206\u9875\u6548\u7387\u4F4E"}],"relativePath":"\u540E\u7AEF/MongoDB.md"}',l={},a=t(`<h2 id="mongobd" tabindex="-1">mongobd <a class="header-anchor" href="#mongobd" aria-hidden="true">#</a></h2><p>mongodb\u5B89\u88C5\u53CA\u542F\u52A8</p><ul><li>brew\u5B89\u88C5</li><li>\u65B0\u5EFA<code>/data/db</code>,\u4FEE\u6539\u76F8\u5173\u6743\u9650</li><li>\u5148mongod\u542F\u52A8\u6570\u636E\u5E93</li><li>\u7136\u540E\u65B0\u542F\u7A97\u53E3\uFF0Cmongo\u94FE\u63A5\u6570\u636E\u5E93</li></ul><p>\u76F8\u5173\u6982\u5FF5\uFF1A</p><ul><li>\u8868-&gt;\u96C6\u5408</li><li>\u884C-&gt;\u6587\u6863</li><li>\u5217-&gt;\u5B57\u6BB5</li></ul><p>\u5F53\u7B2C\u4E00\u4E2A\u6587\u6863\u63D2\u5165\u65F6\uFF0C\u96C6\u5408\u5C31\u4F1A\u88AB\u521B\u5EFA\u3002</p><p>\u5E38\u7528\u547D\u4EE4</p><div class="language-"><pre><code># \u67E5\u770B\u6570\u636E\u5E93
show dbs

# \u8FDB\u5165\u67D0\u4E2A\u6570\u636E\u5E93
use dbname

# \u67E5\u770B\u5F53\u524D\u6570\u636E\u5E93\u6240\u6709\u96C6\u5408
show collections

# \u521B\u5EFA\u96C6\u5408
db.createCollection(collname)
# \u67E5\u8BE2\u96C6\u5408\u5185\u5BB9
db.collname.find()
# \u5220\u9664\u96C6\u5408
db.collname.drop()

# \u63D2\u5165\u6587\u6863
db.collname.insert({&quot;name&quot;:&quot;txm&quot;, age:24})
# \u67E5\u8BE2\u6587\u6863
db.collname.find()
# \u6761\u4EF6\u67E5\u8BE2
db.test.find({&quot;age&quot;: 24})
# \u66F4\u65B0\u6587\u6863\uFF0C\u7B2C\u4E00\u4E2A\u53C2\u6570\u662F\u6761\u4EF6\u67E5\u8BE2\uFF0C\u7B2C\u4E8C\u4E2A\u53C2\u6570\u662F\u66F4\u65B0\u503C
db.test.update({&quot;age&quot;:24}, {$set: {&quot;name&quot;:&quot;another name&quot;}})
# \u5220\u9664\u6587\u6863
db.test.remove({age:1})
</code></pre></div><p>\u53C2\u8003\u6587\u6863</p><ul><li><a href="http://mongodb.github.io/node-mongodb-native/3.0/reference/ecmascriptnext/crud/" target="_blank" rel="noopener noreferrer">http://mongodb.github.io/node-mongodb-native/3.0/reference/ecmascriptnext/crud/</a></li><li><a href="http://www.runoob.com/mongodb/mongodb-databases-documents-collections.html" target="_blank" rel="noopener noreferrer">http://www.runoob.com/mongodb/mongodb-databases-documents-collections.html</a></li><li><a href="http://www.yiibai.com/mongodb/mongodb_quick_guide.html" target="_blank" rel="noopener noreferrer">http://www.yiibai.com/mongodb/mongodb_quick_guide.html</a></li></ul><h2 id="\u6570\u636E\u5907\u4EFD" tabindex="-1">\u6570\u636E\u5907\u4EFD <a class="header-anchor" href="#\u6570\u636E\u5907\u4EFD" aria-hidden="true">#</a></h2><p>\u53C2\u8003</p><ul><li><a href="https://www.runoob.com/mongodb/mongodb-mongodump-mongorestore.html" target="_blank" rel="noopener noreferrer">https://www.runoob.com/mongodb/mongodb-mongodump-mongorestore.html</a></li><li></li></ul><div class="language-"><pre><code># \u8BED\u6CD5
mongorestore -h &lt;hostname&gt;&lt;:port&gt; -d dbname &lt;path&gt;

# \u5B9E\u4F8B
mongodump -d school -o ~/Desktop 
</code></pre></div><h2 id="mongodb\u5206\u9875\u6548\u7387\u4F4E" tabindex="-1">mongodb\u5206\u9875\u6548\u7387\u4F4E <a class="header-anchor" href="#mongodb\u5206\u9875\u6548\u7387\u4F4E" aria-hidden="true">#</a></h2><p>\u53C2\u8003</p><ul><li><a href="https://mafgwo.cn/2019/01/16/1101_MongoDB%E5%A4%A7%E6%95%B0%E6%8D%AE%E5%88%86%E9%A1%B5%E6%9F%A5%E8%AF%A2%E7%9A%84%E9%97%AE%E9%A2%98/" target="_blank" rel="noopener noreferrer">https://mafgwo.cn/2019/01/16/1101_MongoDB\u5927\u6570\u636E\u5206\u9875\u67E5\u8BE2\u7684\u95EE\u9898/</a></li></ul><p>\u4E3A\u4EC0\u4E48\u5462\uFF1F</p><ul><li>\u6839\u636E\u67E5\u8BE2\u6761\u4EF6count\u603B\u6570\u7684\u65F6\u5019\uFF0C\u7D22\u5F15\u6839\u672C\u65E0\u7528\u3002</li><li>\u4F7F\u7528skip+limit\u65B9\u5F0F\uFF0C\u9875\u6570\u8D8A\u5927\u67E5\u8BE2\u6027\u80FD\u7EA6\u4F1A\u8D8A\u6765\u8D8A\u4F4E\u3002</li></ul><p>\u5206\u9875\u67E5\u8BE2\u6027\u80FD\u74F6\u9888\u5927\u6982\u5728\u4EC0\u4E48\u6570\u91CF\u7EA7\u5C31\u80FD\u4F53\u73B0\u51FA\u6765\uFF1F</p><ul><li>\u6570\u636E\u91CF\u4E0D\u9700\u8981\u5F88\u5927\uFF0C\u8FBE\u5230\u51E0\u5341\u4E07\u5C31\u5F00\u59CB\u51F8\u663E\u67E5\u8BE2\u6162\u7684\u95EE\u9898\u4E86\uFF0C\u5F53\u8FBE\u5230\u767E\u4E07\u7EA7\u522B\u65F6\uFF0C\u751A\u81F3\u89813s\u5DE6\u53F3\u7684\u65F6\u95F4\u54CD\u5E94\u4E86\u3002</li><li>\u9488\u5BF9\u51E0\u5341\u4E07\u3001\u51E0\u767E\u4E07\u3001\u4E0A\u5343\u4E07\u7684\u6570\u636E\u8868\uFF0Cmysql\u7684\u5206\u9875\u67E5\u8BE2\u6027\u80FD\u90FD\u6BD4mongodb\u597D\u4E86n\u500D\u3002</li></ul><p>\u8981\u7528MongoDB\u5E76\u4E14\u8FD8\u8981\u5206\u9875\u600E\u4E48\u529E</p><ul><li>\u52A0\u5EFA\u6709\u7D22\u5F15\u7684\u65F6\u95F4\u8303\u56F4\u8FC7\u6EE4\uFF0C\u63A7\u5236\u6700\u5927\u65F6\u95F4\u8303\u56F4\uFF0C\u786E\u4FDD\u8BE5\u65F6\u95F4\u8303\u56F4\u5230\u6570\u636E\u91CF\u4E0D\u4F1A\u592A\u5927\u3002</li><li>\u4E0D\u4F7F\u7528\u6B63\u5E38\u7684\u5206\u9875\uFF0C\u5373\u8FD4\u56DE\u6CA1\u6709\u603B\u6570\u548C\u603B\u9875\u6570\u7684\u4FE1\u606F\uFF0C\u6BCF\u6B21\u62FF\u90FD\u662F\u4E0B\u4E00\u9875\u4E0B\u4E00\u9875\u62FF\uFF0C\u62FF\u5230\u6CA1\u6709\u4E3A\u6B62\u3002\uFF08\u56E0\u4E3A\u5927\u6570\u636E\u91CFcount\u67E5\u8BE2\u8D85\u7EA7\u6162\uFF09</li><li>\u5982\u679C\u67E5\u8BE2\u6761\u4EF6\u590D\u6742\uFF0C\u67E5\u8BE2\u7684\u6570\u636E\u91CF\u5F88\u5927\u7684\uFF0C\u5C31\u5F3A\u70C8\u5EFA\u8BAE\u4E0D\u8981\u7528mongodb\u4E86\uFF0C\u7528ElasticSearch\u5427\u3002</li></ul>`,23),r=[a];function i(d,m,g,c,s,b){return n(),e("div",null,r)}var h=o(l,[["render",i]]);export{p as __pageData,h as default};
