import{_ as s,c as i,o as a,a2 as p}from"./chunks/framework.DLPB9-dE.js";const o=JSON.parse('{"title":"分辨率","description":"","frontmatter":{},"headers":[],"relativePath":"前端/CSS/分辨率.md","filePath":"前端/CSS/分辨率.md","lastUpdated":1646554062000}'),n={name:"前端/CSS/分辨率.md"},h=p(`<h1 id="分辨率" tabindex="-1">分辨率 <a class="header-anchor" href="#分辨率" aria-label="Permalink to &quot;分辨率&quot;">​</a></h1><h2 id="相关概念" tabindex="-1">相关概念 <a class="header-anchor" href="#相关概念" aria-label="Permalink to &quot;相关概念&quot;">​</a></h2><h3 id="英寸" tabindex="-1">英寸 <a class="header-anchor" href="#英寸" aria-label="Permalink to &quot;英寸&quot;">​</a></h3><p>按照习惯，描述屏幕大小时，使用的“寸”这个单位，比如4.7寸的手机屏幕、22寸的电脑屏幕、65寸的电视机屏幕等，实际上指屏幕对角线的长度，单位是“英寸”</p><p>1英寸 = 2.54 厘米</p><h3 id="物理像素" tabindex="-1">物理像素 <a class="header-anchor" href="#物理像素" aria-label="Permalink to &quot;物理像素&quot;">​</a></h3><p>图像、电子屏幕实际上是由一个个具有特定颜色和位置的小方块组成的，通过控制每个点的颜色，就可以展示不同的内容。</p><p><img src="http://img.shymean.com/oPic/1620192136849_9.png" alt=""></p><p>可以把物理像素理解为组成图像或屏幕的最小单位，他是显示设备中一个最微小的物理部件。</p><p>显示屏是由一个个物理像素点组成的，通过控制每个像素点的颜色，使屏幕显示出不同的图像，屏幕从工厂出来那天起，它上面的物理像素点就固定不变了，单位pt。</p><h3 id="分辨率-1" tabindex="-1">分辨率 <a class="header-anchor" href="#分辨率-1" aria-label="Permalink to &quot;分辨率&quot;">​</a></h3><p>既然屏幕是由像素组成的，除了英寸之外，也可以用像素来描述屏幕的大小，称之为<strong>分辨率</strong>。</p><blockquote><p>分辨率=画面水平方向的像素值 * 画面垂直方向的像素值</p></blockquote><p>英寸是一个物理上真实的长度单位，1英寸 = 2.54 厘米，不会变多，也不会变少。但分辨率看起来明显是一个数量，而不是长度，如何用来描述屏幕的大小呢？</p><p>当我们使用分辨率来描述屏幕的大小时，并不是指的屏幕的真实物理大小，而是指组成屏幕的像素数量。</p><p>在生活中，经常能够听到诸如1080P、2K屏、4K屏的概念</p><ul><li>P 代表的就是屏幕纵向的像素个数，1080P 即纵向有 1080 个像素，平常所说的高清屏其实就是屏幕的物理分辨率达到或超过 1920x1080 的屏幕。</li><li>K 代表屏幕横向有几个 1000 个像素（也有标准定的是1024个），2K即横向像素大于等于2000个</li></ul><p>在电视领域，有一个16:9的尺寸标准，因此<strong>对于电视而言</strong>，1080P就是 1920*1080的物理分辨率，4K就是3840x2160的物理分辨率（而不是4096x2160）</p><p>但并不是所有屏幕都是16:9，细究下去，会发现屏幕分辨率的标准实际上是很“混乱”的，如果要使用P和K来描述显示分辨率，可以按照通用标准，纵向有多少个像素，就是多少P；横向有多少个像素，就是 多少像素/1000 K</p><p>图片也是由像素组成的，我们常说的图片分辨率指的是图片含有的像素数量，如100*100的图片，表示其有10000个像素点，在屏幕上按1:1放大时，水平方向上有100个像素点，竖直方向上有100个像素点。</p><p>视频是由图像组成的，每一帧切换一张图片。我们常在视频网站上看见720P、1080P等用来区分视频的清晰度，也可以用上面P、K的定义来理解</p><p>同一张图片，分辨率越高，意味着组成图片的像素点越多，图片就越清晰。</p><h3 id="像素密度与逻辑像素" tabindex="-1">像素密度与逻辑像素 <a class="header-anchor" href="#像素密度与逻辑像素" aria-label="Permalink to &quot;像素密度与逻辑像素&quot;">​</a></h3><p>可以看出来，物理尺寸和分辨率在真实大小上并不是等价的。举个例子，iPhone 3gs和iPhone4，他们的物理尺寸都是 3.5英寸，但他们的分辨率一个是320 * 480 ，一个是 640 * 960。</p><p>因此可以推算出，在1英寸的长度中，iPhone4展示的像素数量是iPhone 3gs的2倍，这里就涉及到一个像素密度的概念。</p><blockquote><p>像素密度ppi = Math.sqrt(x^2 + y^2, 2), x、y分别表示设备的物理像素分辨率，表示每英寸的长度上排列的像素点数量，像素密度越高，代表屏幕显示效果越清晰。</p></blockquote><p>如果是一个320像素宽的元素，在320x480的屏幕上会占满屏幕的宽度，而在640x960的屏幕上只会占一半的宽度。</p><p>对于同一张图片，按照1:1在屏幕上展示，在320*480的屏幕上的大小会是640x960屏幕的两倍大小，因为高分辨率的屏幕，页面上展示相同像素的图片时会更小，也就是说，高分辨率的屏幕，可以摆放更多的内容。</p><p><img src="http://img.shymean.com/oPic/1620140883989_882.png" alt=""></p><p>然而在某些场景下，高分辨率并不是为了展示更多的内容，而是为了提高展示内容的精细程度！！理解这一点非常重要。</p><p>乔布斯在iPhone4上提出了<a href="https://zh.wikipedia.org/wiki/Retina%E6%98%BE%E7%A4%BA%E5%B1%8F" target="_blank" rel="noreferrer">视网膜屏幕Retina Display</a>的概念，在iphone4中，把2x2个像素当做1个像素使用，这样可以让屏幕展示的效果更精致，而元素的大小并不会改变。</p><p>视网膜屏幕的主要特征是在正常视距下使肉眼无法分辨屏幕的单独像素。因为机构研究表明：只要手机像素密度&gt;=300ppi之后，就不会再出现颗粒感；这个阈值对于平板是260ppi，对于电脑是200ppi</p><p><img src="http://img.shymean.com/oPic/1620178055923_734.png" alt=""></p><p>既然屏幕系统支持了这个功能，我们还必须有一种尺寸单位，用来描述在不同分辨率的屏幕上显示相同的元素大小，这就是设备独立像素，又称设备无关像素（Device Independent Pixels，简称DIP 或 DP，没错，就是安卓常用布局单位dp）或逻辑像素。</p><p>现在我们就有两个“像素”了，一个是显示分辨率，可以理解为物理像素；一个是设备独立像素，是逻辑像素。在谈论像素时，一定要考虑到底是哪种像素</p><p>他们之间的比例被称为设备像素比，常说的几倍屏几倍屏也是这个意思</p><blockquote><p>设备像素比 (dpr)＝ 物理像素(dp) / 设备独立像素(dip)，在web中，可以通过<code>window.devicePixelRatio</code>获取dpr</p></blockquote><h3 id="css像素" tabindex="-1">css像素 <a class="header-anchor" href="#css像素" aria-label="Permalink to &quot;css像素&quot;">​</a></h3><p>web开发中常用的css像素，也是设备独立像素。换言之，1px的css像素，在1dpr和2dpr的被设备上，占据的物理像素是不一样的</p><p><img src="http://img.shymean.com/oPic/1620205592878_265.png" alt=""></p><p>这也是为什么我们写一个宽度为375px的元素，在iPhone6上也可以铺满屏幕——尽管iPhone6的逻辑像素是750*1334。</p><h2 id="移动端1px边框" tabindex="-1">移动端1px边框 <a class="header-anchor" href="#移动端1px边框" aria-label="Permalink to &quot;移动端1px边框&quot;">​</a></h2><p>css像素与物理像素不一致时，就导致了移动端开发中经常会遇见的1px边框问题：设计说这个1px的边框变粗了！！</p><p>在dpr为2的iPhone上预览时（现在的大部分手机）</p><p><img src="http://img.shymean.com/oPic/1620206267369_738.png" alt=""></p><p>可以很明显地看见1px的边框确实变粗了</p><p>当在dpr为1的设备上预览时边框显示正常。</p><p><img src="http://img.shymean.com/oPic/1620206172736_262.png" alt=""></p><p>在dpr大于1的屏幕上1px边框显示异常，这是由于css像素是逻辑像素，在dpr为2的设备上渲染时，会使用4个像素来渲染一个逻辑像素。</p><p>上面的0.5px展示了一种解决方案：在 WWDC大会上提出的，当写 0.5px的时候，iOS就会显示一个物理像素宽度的 border，而不是一个逻辑像素的 border。</p><p>当然1px问题还有其他的方案，如伪元素+transfrom:scale等，下面会再提到</p><p>上面的0.5px在iOS老版本、Android上存在兼容方案，目前使用 <code>伪元素+transfrom:scale</code> 应该是兼容性比较好的方案</p><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.scale-1px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    position</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">relative</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    border</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">none</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.scale-1px:after</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    content</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    position</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">absolute</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    bottom</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    background</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">#000</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    width</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">100</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">%</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    height</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    -webkit-transform</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">scaleY</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0.5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    transform</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">scaleY</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0.5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    -webkit-transform-origin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    transform-origin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="canvas保存的图片不清楚" tabindex="-1">canvas保存的图片不清楚 <a class="header-anchor" href="#canvas保存的图片不清楚" aria-label="Permalink to &quot;canvas保存的图片不清楚&quot;">​</a></h2><ul><li><a href="https://segmentfault.com/a/1190000019007037" target="_blank" rel="noreferrer">Canvas在移动端绘制模糊的原因与解决办法</a>，讲的非常好</li></ul><p>首先需要知道，canvas绘制的是位图（由像素点组成，预制对应的是矢量图）</p><p>当我们为canvas设置属性宽高时，表示画布由多少个物理像素点组成，而设置css样式宽高时，表示画布占据的逻辑尺寸</p><p>如果只设置属性宽度或者只设置css宽度，则canvas属性宽度与其css宽度相等，这种情况下一个CSS像素点表示一个canvas像素点。</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">canvas</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> width</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;300&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> height</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;150&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">canvas</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><p>在这种情况下，我们将canvas转换为300*150的图片，然后再用retina屏幕进行访问，此时会使用多个物理像素来展示一个canvas位图像素，由于cavas单个位图像素点不可再分，只能就近取色，就会导致图片看起来变模糊了。</p><p><img src="http://img.shymean.com/oPic/1620217387172_706.png" alt=""></p><p>为了避免出现就近取色的问题，就需要保证1个canvas位图像素等于1个物理像素。一个简单的思路是使用更多的物理像素点来进行绘制canvas图片</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">canvas</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> width</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;600&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> height</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;300&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> style</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;width: 300px; height: 150px&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">canvas</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><p>上面这段代码可以理解为canvas画布包含<code>600*300</code>的像素点，但在屏幕上展示的是<code>300x150</code>的尺寸，这时，相当于我们手动控制了canvas画布的dpr为2，即一个CSS像素点实际表示canvas上的4个像素点。</p><p>基于上面的分析，如果希望canvas保存的图片不模糊，理想状态是1个canvas像素点等于一个物理像素点，而不是等于一个css像素点</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> dpr </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> window.devicePixelRatio</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">width</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: cssWidth, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">height</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: cssHeight } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> canvas.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getBoundingClientRect</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">canvas.width </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> dpr</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">cssWidth</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">canvas.height </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> dpr</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">cssHeight</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 如果按照之前设计图上的尺寸，绘制出来的内容会变小，因此此处使用scale扩大绘制比例；</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 或者在每个绘制尺寸的地方手动*dpr也是可以的，不过这种方式就显得比较麻烦</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ctx.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">scale</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(dpr, dpr);</span></span></code></pre></div><p>这样可以保证导出的图片分辨率较高，也就比较清晰了</p><h2 id="参考" tabindex="-1">参考 <a class="header-anchor" href="#参考" aria-label="Permalink to &quot;参考&quot;">​</a></h2><ul><li><a href="https://www.zhihu.com/question/27261444/answer/35898885" target="_blank" rel="noreferrer">「像素」「渲染像素」以及「物理像素」是什么东西</a></li><li><a href="https://github.com/jawil/blog/issues/21" target="_blank" rel="noreferrer">CSS像素、物理像素、逻辑像素、设备像素比、PPI、Viewpor</a></li><li><a href="https://tumiblog.top/blogs/CSS/CSS%E7%AC%94%E8%AE%B0/%E7%89%A9%E7%90%86%E5%83%8F%E7%B4%A0%E3%80%81%E9%80%BB%E8%BE%91%E5%83%8F%E7%B4%A0%E5%92%8C%20CSS%20%E5%83%8F%E7%B4%A0%E7%9A%84%E5%85%B3%E7%B3%BB.html" target="_blank" rel="noreferrer">物理像素、逻辑像素和 CSS 像素的关系</a></li></ul>`,69),t=[h];function l(e,k,r,E,d,g){return a(),i("div",null,t)}const y=s(n,[["render",l]]);export{o as __pageData,y as default};
