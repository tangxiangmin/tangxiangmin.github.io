import{_ as n,c as a,o as s,a2 as o}from"./chunks/framework.DLPB9-dE.js";const b=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"后端/MongoDB.md","filePath":"后端/MongoDB.md","lastUpdated":1683863238000}'),e={name:"后端/MongoDB.md"},l=o(`<h2 id="mongobd" tabindex="-1">mongobd <a class="header-anchor" href="#mongobd" aria-label="Permalink to &quot;mongobd&quot;">​</a></h2><p>mongodb安装及启动</p><ul><li>brew安装</li><li>新建<code>/data/db</code>,修改相关权限</li><li>先mongod启动数据库</li><li>然后新启窗口，mongo链接数据库</li></ul><p>相关概念：</p><ul><li>表-&gt;集合</li><li>行-&gt;文档</li><li>列-&gt;字段</li></ul><p>当第一个文档插入时，集合就会被创建。</p><p>常用命令</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span># 查看数据库</span></span>
<span class="line"><span>show dbs</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 进入某个数据库</span></span>
<span class="line"><span>use dbname</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 查看当前数据库所有集合</span></span>
<span class="line"><span>show collections</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 创建集合</span></span>
<span class="line"><span>db.createCollection(collname)</span></span>
<span class="line"><span># 查询集合内容</span></span>
<span class="line"><span>db.collname.find()</span></span>
<span class="line"><span># 删除集合</span></span>
<span class="line"><span>db.collname.drop()</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 插入文档</span></span>
<span class="line"><span>db.collname.insert({&quot;name&quot;:&quot;txm&quot;, age:24})</span></span>
<span class="line"><span># 查询文档</span></span>
<span class="line"><span>db.collname.find()</span></span>
<span class="line"><span># 条件查询</span></span>
<span class="line"><span>db.test.find({&quot;age&quot;: 24})</span></span>
<span class="line"><span># 更新文档，第一个参数是条件查询，第二个参数是更新值</span></span>
<span class="line"><span>db.test.update({&quot;age&quot;:24}, {$set: {&quot;name&quot;:&quot;another name&quot;}})</span></span>
<span class="line"><span># 删除文档</span></span>
<span class="line"><span>db.test.remove({age:1})</span></span></code></pre></div><p>参考文档</p><ul><li><a href="http://mongodb.github.io/node-mongodb-native/3.0/reference/ecmascriptnext/crud/" target="_blank" rel="noreferrer">http://mongodb.github.io/node-mongodb-native/3.0/reference/ecmascriptnext/crud/</a></li><li><a href="http://www.runoob.com/mongodb/mongodb-databases-documents-collections.html" target="_blank" rel="noreferrer">http://www.runoob.com/mongodb/mongodb-databases-documents-collections.html</a></li><li><a href="http://www.yiibai.com/mongodb/mongodb_quick_guide.html" target="_blank" rel="noreferrer">http://www.yiibai.com/mongodb/mongodb_quick_guide.html</a></li></ul><h2 id="数据备份" tabindex="-1">数据备份 <a class="header-anchor" href="#数据备份" aria-label="Permalink to &quot;数据备份&quot;">​</a></h2><p>参考</p><ul><li><a href="https://www.runoob.com/mongodb/mongodb-mongodump-mongorestore.html" target="_blank" rel="noreferrer">https://www.runoob.com/mongodb/mongodb-mongodump-mongorestore.html</a></li><li></li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span># 语法</span></span>
<span class="line"><span>mongorestore -h &lt;hostname&gt;&lt;:port&gt; -d dbname &lt;path&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 实例</span></span>
<span class="line"><span>mongodump -d school -o ~/Desktop</span></span></code></pre></div><h2 id="mongodb分页效率低" tabindex="-1">mongodb分页效率低 <a class="header-anchor" href="#mongodb分页效率低" aria-label="Permalink to &quot;mongodb分页效率低&quot;">​</a></h2><p>参考</p><ul><li><a href="https://mafgwo.cn/2019/01/16/1101_MongoDB%E5%A4%A7%E6%95%B0%E6%8D%AE%E5%88%86%E9%A1%B5%E6%9F%A5%E8%AF%A2%E7%9A%84%E9%97%AE%E9%A2%98/" target="_blank" rel="noreferrer">https://mafgwo.cn/2019/01/16/1101_MongoDB大数据分页查询的问题/</a></li></ul><p>为什么呢？</p><ul><li>根据查询条件count总数的时候，索引根本无用。</li><li>使用skip+limit方式，页数越大查询性能约会越来越低。</li></ul><p>分页查询性能瓶颈大概在什么数量级就能体现出来？</p><ul><li>数据量不需要很大，达到几十万就开始凸显查询慢的问题了，当达到百万级别时，甚至要3s左右的时间响应了。</li><li>针对几十万、几百万、上千万的数据表，mysql的分页查询性能都比mongodb好了n倍。</li></ul><p>要用MongoDB并且还要分页怎么办</p><ul><li>加建有索引的时间范围过滤，控制最大时间范围，确保该时间范围到数据量不会太大。</li><li>不使用正常的分页，即返回没有总数和总页数的信息，每次拿都是下一页下一页拿，拿到没有为止。（因为大数据量count查询超级慢）</li><li>如果查询条件复杂，查询的数据量很大的，就强烈建议不要用mongodb了，用ElasticSearch吧。</li></ul>`,23),p=[l];function t(i,c,d,r,m,g){return s(),a("div",null,p)}const h=n(e,[["render",t]]);export{b as __pageData,h as default};
