import{_ as a,c as e,o as t,a2 as s}from"./chunks/framework.DLPB9-dE.js";const m=JSON.parse('{"title":"git","description":"","frontmatter":{},"headers":[],"relativePath":"前端/前端工程化/git.md","filePath":"前端/前端工程化/git.md","lastUpdated":1683863238000}'),i={name:"前端/前端工程化/git.md"},p=s(`<h1 id="git" tabindex="-1">git <a class="header-anchor" href="#git" aria-label="Permalink to &quot;git&quot;">​</a></h1><p>一些场景下的git使用方法</p><h2 id="git-flow工作流" tabindex="-1">git flow工作流 <a class="header-anchor" href="#git-flow工作流" aria-label="Permalink to &quot;git flow工作流&quot;">​</a></h2><p>参考：<a href="https://www.git-tower.com/learn/git/ebook/cn/command-line/advanced-topics/git-flow/" target="_blank" rel="noreferrer">git-flow 的工作流程</a></p><p>git flow主要用于约定整个开发团队的工作流程，最主要的是约定各种分支及checkout规范，报货master、develop、feature、hotfix、release分支等</p><h2 id="git-cz-规范提交信息" tabindex="-1">git cz 规范提交信息 <a class="header-anchor" href="#git-cz-规范提交信息" aria-label="Permalink to &quot;git cz 规范提交信息&quot;">​</a></h2><p>全局安装<a href="https://www.npmjs.com/package/commitizen" target="_blank" rel="noreferrer">commitizen</a>，然后使用命令行提交commit</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span># 安装时间可能会有点久</span></span>
<span class="line"><span>npm install -g commitizen</span></span>
<span class="line"><span></span></span>
<span class="line"><span>npm install -g cz-conventional-changelog</span></span>
<span class="line"><span></span></span>
<span class="line"><span>echo &#39;{ &quot;path&quot;: &quot;cz-conventional-changelog&quot; }&#39; &gt; ~/.czrc</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 切换到项目，使用cz 替换commit命令 </span></span>
<span class="line"><span>git cz</span></span>
<span class="line"><span># 依次选择后续步骤</span></span></code></pre></div><p>建议使用<a href="https://www.npmjs.com/package/commitizen#conventional-commit-messages-as-a-global-utility" target="_blank" rel="noreferrer">全局设置</a></p><h2 id="git把某一次的commit转移到另外的分支上去" tabindex="-1">git把某一次的commit转移到另外的分支上去 <a class="header-anchor" href="#git把某一次的commit转移到另外的分支上去" aria-label="Permalink to &quot;git把某一次的commit转移到另外的分支上去&quot;">​</a></h2><p>我正在分支1开发，突然来了一个需求紧急上线</p><p>正常情况下，应该stash 当前正在开发的内容，然后单独从master分支切一个出来开发新需求；手忙脚乱开发完毕时发现：哦豁，忘记切分支，把改动提交到当前分支了</p><p>但是我只想合并这次提交的改动，分支1上的代码还不成熟，不想合并</p><p>那么问题来了</p><blockquote><p>git如何把某一次的commit转移到另外的分支上去呢？</p></blockquote><p>可以使用<code>cherry-pick</code>来实现，</p><ul><li>从稳定分支如master，切一个分支2出来</li><li>在分支2上使用<code>git cherry-pick commitId</code>，其中commitId就是最新需求的那次提交号</li></ul><p>当然，cherry-pick也可以转移多次的commit。</p><h2 id="gitkeep文件" tabindex="-1">gitkeep文件 <a class="header-anchor" href="#gitkeep文件" aria-label="Permalink to &quot;gitkeep文件&quot;">​</a></h2><p>参考：<a href="https://www.gonever.com/post/25" target="_blank" rel="noreferrer">什么是 .gitkeep</a></p><p>git不会不跟踪空文件夹。如果你的项目文件夹里边有任何的空文件夹，Git 都会忽略掉。</p><p>但某些时候期望能够将空目录进行提交，保证仓库中是完整的代码版本，这时候可以使用<code>.gitkeep</code>文件。</p><p>这是因为在空文件夹里边添加了一个文件之后，Git 就会开始跟踪这个文件夹——无论这个文件是什么，内容如何，名字是什么。</p><p>那为什么什么是 .gitkeep 呢？实际上，这个名字是社区起的，其他人可以容易的把它和 .gitignore 联系起来。Git 并没有给这个文件任何的像 .gitignore 文件一样的特殊权限。</p><p>如果你想跟踪你上游项目的空文件夹，那么你就在这个文件夹中创建一个 .gitkeep 文件。其他开发者很容易就会理解这是干什么用的。通常来说，assets 文件夹和 log 文件夹需要这样做。记住，不要把 .gitkeep 添加到 .gitignore 文件中，那样的话空文件夹就从你的文件系统中消失了。</p><h2 id="git-reset误删除找回" tabindex="-1">git reset误删除找回 <a class="header-anchor" href="#git-reset误删除找回" aria-label="Permalink to &quot;git reset误删除找回&quot;">​</a></h2><p>参考:<a href="https://blog.csdn.net/u011450490/article/details/60119210" target="_blank" rel="noreferrer">Git Reset hard误操作回滚恢复代码</a></p><p>记一次悲惨经历：某天深夜，正噼里啪啦地在develop分支上写着带啊吗，突然需要回滚看看之前的提交，切个分支出去然后reset</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>git checkout -b tmp</span></span></code></pre></div><p>手速太快了，没有看提示，以为成功切过去了，直接调用</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>git reset --hard head^^^</span></span></code></pre></div><p>万万没想到之前本地存在这个<code>tmp</code>分支，导致checkout -b失败了，导致回退了develop分支上的代码。</p><p>GG，这意味着我熬夜三个小时的功能白写了</p><p>不甘心，一通搜索，找到解决办法</p><ul><li>打开项目目录<code>/.git/logs/refs/heads/branch_name</code>，打开文件，找到对应的版本号</li><li><code>git reset --hard 需要恢复的xxx版本号</code></li></ul><p>完事大吉，惊出一身冷汗。</p><p>碎觉，这件事情告诉我们，不要熬夜写代码。</p><h2 id="git-revert撤销某次提交" tabindex="-1">git revert撤销某次提交 <a class="header-anchor" href="#git-revert撤销某次提交" aria-label="Permalink to &quot;git revert撤销某次提交&quot;">​</a></h2><p>拿到一个需求A，在feature分支哼哧哼哧做完commit之后，又继续做其他功能B、C。假设这个feature分支收集了3个commit:A、B、C，正准备上线的时候，产品说功能A先不上吧，改回第一版~</p><p>reset肯定是不行的，reset到commit A时，会把B和C的代码也给回滚了。这时候可以使用<code>git revert</code></p><p>git revert是用于“撤销”某一个版本，以达到取消该版本的修改的目的。</p><p>首先</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>git revert -n 需要撤销的commitId</span></span></code></pre></div><p>然后重新提交</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>git commit -m &quot;revert A&quot;</span></span></code></pre></div><p>修改完成，提测吧。</p><p>等待后面产品说，功能A还是修改一下吧，这个时候怎么办？可以对revert的操作继续进行revert，相当于撤销 ”撤销A版本的改动“的改动，禁止套娃~</p><h2 id="git-lfs-大文件" tabindex="-1">git lfs 大文件 <a class="header-anchor" href="#git-lfs-大文件" aria-label="Permalink to &quot;git lfs 大文件&quot;">​</a></h2><p>参考：<a href="https://zzz.buzz/zh/2016/04/19/the-guide-to-git-lfs/" target="_blank" rel="noreferrer">git lfs操作指南</a></p><p>当项目中包含了大量的大文件之后，提交、下载仓库就会变得越来越慢，这在包含静态资源的前端项目中比较常见，解决办法是使用git lfs(Large File Storage, 大文件存储)</p><p>其思路是把音乐、图片、视频等指定的任意文件存在 Git 仓库之外，而在 Git 仓库中用一个占用空间 1KB 不到的文本指针来代替的小工具。</p><h2 id="git-ignore语法规则" tabindex="-1">git ignore语法规则 <a class="header-anchor" href="#git-ignore语法规则" aria-label="Permalink to &quot;git ignore语法规则&quot;">​</a></h2><p>参考：<a href="http://www.07net01.com/2017/02/1815747.html#pinglun" target="_blank" rel="noreferrer">.gitignore 规则写法 - 在已忽略文件夹中不忽略指定文件、文件夹</a></p><p>在已忽略文件夹中不忽略指定文件夹</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">/node_modules/*</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">/node_modules/layer/</span></span></code></pre></div><p>在已忽略文件夹中不忽略指定文件</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">/node_modules/*</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">/node_modules/layer/layer.js</span></span></code></pre></div><p>其他</p><ul><li>以斜杠“/”开头表示目录；</li><li>以星号“*”通配多个字符；</li><li>以问号“?”通配单个字符</li><li>以方括号“[]”包含单个字符的匹配列表；</li><li>以叹号“!”表示不忽略(跟踪)匹配到的文件或目录；</li></ul><h2 id="批量删除git-tag" tabindex="-1">批量删除git tag <a class="header-anchor" href="#批量删除git-tag" aria-label="Permalink to &quot;批量删除git tag&quot;">​</a></h2><p>在lerna等monorepo项目中，通过git tag来管理发布的包版本，在测试期间可能希望执行注入移除tag，重新发布等操作，因此需要了解移除git tag的操作</p><p>删除本地tag：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>git tag -d v1.1.1</span></span></code></pre></div><p>批量删除本地tag</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>git tag | grep &quot;v1.1.*&quot; | xargs git tag -d</span></span></code></pre></div><p>删除远程tag</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>git push origin --delete tag v1.1.1</span></span></code></pre></div><p>批量删除远程tag</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>git show-ref --tag | awk &#39;/v1.1.[0-9]{1}[0-9]{0,}$/ {print &quot;:&quot; $2}&#39; | xargs git push origin</span></span></code></pre></div>`,69),n=[p];function l(o,r,c,g,h,d){return t(),e("div",null,n)}const k=a(i,[["render",l]]);export{m as __pageData,k as default};
