import{_ as s,c as i,o as a,a2 as n}from"./chunks/framework.DLPB9-dE.js";const F=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"网络/HTTPS.md","filePath":"网络/HTTPS.md","lastUpdated":1709042257000}'),h={name:"网络/HTTPS.md"},p=n(`<h2 id="https原理" tabindex="-1">HTTPS原理 <a class="header-anchor" href="#https原理" aria-label="Permalink to &quot;HTTPS原理&quot;">​</a></h2><p>参考：<a href="https://www.shymean.com/article/%E5%8D%87%E7%BA%A7%E5%8D%9A%E5%AE%A2%E5%88%B0HTTPS" target="_blank" rel="noreferrer">升级博客到HTTPS</a>，后面用伪代码整理了https的基本原理。</p><p>超文本传输安全协议（Hypertext Transfer Protocol Secure）HTTPS相对HTTP提供了更安全的数据传输保障。主要体现在三个方面：</p><ul><li>内容加密。客户端到服务器的内容都是以加密形式传输，中间者无法直接查看明文内容。</li><li>身份认证。通过校验保证客户端访问的是自己的服务器。</li><li>数据完整性。防止内容被第三方冒充或者篡改。</li></ul><p>让我们从加密算法开始，了解HTTPS的原理。</p><h3 id="对称加密" tabindex="-1">对称加密 <a class="header-anchor" href="#对称加密" aria-label="Permalink to &quot;对称加密&quot;">​</a></h3><p>对称加密，服务端和客户端的加密和解密都使用相同的加密和解密方式，常见的对称加密算法有<code>DES</code>、<code>AES</code>等。</p><p>对称加密算法效率比较高，使用Node.js内置的<code>crypto</code>演示一下AES对称加密算法</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> crypto</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> require</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;crypto&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 生成随机的对称加密密钥</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> secretKey</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;123456&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 要加密的数据</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> dataToEncrypt</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;Hello, World!&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 创建加密器</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> cipher</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> crypto.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">createCipher</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;aes-256-cbc&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, secretKey);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 加密数据</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> encryptedData </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> cipher.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">update</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(dataToEncrypt, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;utf-8&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;hex&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">encryptedData </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> cipher.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">final</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;hex&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;加密后的数据:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, encryptedData);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 创建解密器</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> decipher</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> crypto.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">createDecipher</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;aes-256-cbc&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, secretKey);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 解密数据</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> decryptedData </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> decipher.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">update</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(encryptedData, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;hex&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;utf-8&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">decryptedData </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> decipher.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">final</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;utf-8&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;解密后的数据:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, decryptedData);</span></span></code></pre></div><p>在上面的代码中，只要知道了<code>secretKey</code>的值，就可以直接创建加密器和解密器。</p><p>如果可能在传输过程中秘钥被盗取，中间人获取到了秘钥，就可以解密和伪造数据。</p><h3 id="非对称加密" tabindex="-1">非对称加密 <a class="header-anchor" href="#非对称加密" aria-label="Permalink to &quot;非对称加密&quot;">​</a></h3><p>非对称加密算法是一种使用不同的密钥对进行加密和解密的加密算法，常见的非对称密钥加密算法有<code>RSA</code>、<code>DSA</code>等。</p><p>非对称加密算法基于一对相关的密钥，包括公钥和私钥。公钥是公开的，可以被任何人获取；而私钥是保密的，只有密钥的拥有者可以访问。</p><p>使用Node.js内置的<code>crypto</code>演示一下RSA非对称加密算法。</p><p>首先是使用公钥进行加密的数据，可以通过私钥进行解密。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> crypto</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> require</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;crypto&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 生成RSA密钥对</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">privateKey</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">publicKey</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> crypto.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">generateKeyPairSync</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;rsa&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  modulusLength: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2048</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  publicKeyEncoding: { type: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;spki&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, format: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;pem&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  privateKeyEncoding: { type: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;pkcs8&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, format: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;pem&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;公钥:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, publicKey);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;私钥:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, privateKey);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 要加密的数据</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> dataToEncrypt</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;Hello, World!&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 使用公钥加密数据</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> encryptedData</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> crypto.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">publicEncrypt</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(publicKey, Buffer.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">from</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(dataToEncrypt, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;utf-8&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">));</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;加密后的数据:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, encryptedData.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">toString</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;base64&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">));</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 使用私钥解密数据</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> decryptedData</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> crypto.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">privateDecrypt</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(privateKey, encryptedData);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;解密后的数据:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, decryptedData.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">toString</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;utf-8&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">));</span></span></code></pre></div><p>然后私钥也可以加密数据，这通常被成为<strong>签名</strong>，私钥签名后的数据可以使用公钥进行解密，这通常被成为<strong>验签</strong>。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 需要安装一下jsonwebtoken</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> jwt</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> require</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;jsonwebtoken&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 生成 RSA 密钥对</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">privateKey</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">publicKey</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> require</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;crypto&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">generateKeyPairSync</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;rsa&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    modulusLength: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2048</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    publicKeyEncoding: { type: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;spki&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, format: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;pem&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    privateKeyEncoding: { type: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;pkcs8&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, format: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;pem&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;公钥:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, publicKey);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;私钥:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, privateKey);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 要签名的数据</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> originalData</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;Hello, World!&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 使用私钥生成签名</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> token</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> jwt.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sign</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(originalData, privateKey, { algorithm: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;RS256&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> });</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;生成的签名:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, token);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 使用公钥验证签名并获取原始数据</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">jwt.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">verify</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(token, publicKey, { algorithms: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;RS256&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] }, (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">err</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">decoded</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (err) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">error</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;验证失败:&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, err.message);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">else</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;验证成功，原始数据:&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, decoded);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre></div><p>可以看出，公钥和私钥本身都具备了加密和解密的功能，只是按照习惯私钥的加密被称为签名而已。</p><p>根据生成规则，从私钥推导出公钥是比较简单的，而从公钥推导出私钥是一个困难的数学问题。</p><p>下面的代码演示了通过私钥推导出公钥的过程</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> crypto</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> require</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;crypto&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 生成 RSA 密钥对</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">privateKey</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">publicKey</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> crypto.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">generateKeyPairSync</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;rsa&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  modulusLength: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2048</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  publicKeyEncoding: { type: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;spki&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, format: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;pem&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  privateKeyEncoding: { type: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;pkcs8&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, format: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;pem&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;私钥:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, privateKey);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;公钥:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, publicKey);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 从私钥推导出公钥</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> derivedPublicKey</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> crypto.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">createPublicKey</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(privateKey);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> res</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> derivedPublicKey.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">export</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({ type: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;spki&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, format: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;pem&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> })</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;推导的公钥:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, res);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(publicKey </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">===</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> res);</span></span></code></pre></div><p>因此，一般会将公钥暴露出去，而私钥要严格保密，只让自己知道（这也是他们取名的由来）。</p><p>在非对称加密过程中，服务器将公钥发送给浏览器，浏览器就可以用这个的公钥加密数据，由于私钥只有服务器知道，这样就不用担心<code>浏览器-&gt;服务器</code>传输过程中的数据被中间人破解了。</p><p>同理，浏览器如果也有自己的公钥和私钥，同样可以将公钥发给服务器，这样服务器也可以用公钥加密需要传输的数据，这样也保证了<code>服务器-&gt;浏览器</code>数据传输的保密性。</p><p>但实际上，一个服务器可能要面对数百万浏览器的访问，非对称加密需要消耗大量的性能，因此实际上HTTPS结合了对称和非对称两种加密方式：</p><ul><li>在握手阶段使用公开密钥加密选择一种对称加密算法和密钥</li><li>然后在后续的通信阶段使用选择的对称加密算法和密钥进行通信。</li></ul><p>OK，这样解决了效率的问题，但还有一个安全问题没有解决。</p><h3 id="安全地传输公钥" tabindex="-1">安全地传输公钥 <a class="header-anchor" href="#安全地传输公钥" aria-label="Permalink to &quot;安全地传输公钥&quot;">​</a></h3><p>假设服务器有一对非对称秘钥，包含<code>公钥A和私钥A1</code>，传输过程中有一个中间人，他自己也有一对非对称秘钥，包含<code>公钥B和私钥B1</code></p><ul><li>服务器将公钥A发送给浏览器，被中间人拦截了，中间人实际上将他自己的<code>公钥B</code>发给了浏览器</li><li>浏览器拿到了<code>公钥B</code>，加密了<code>对称密钥X</code>，发送给服务器，被中间人拦截了，中间人通过自己的<code>私钥B1</code>，解密获得了<code>X</code>，然后将X用服务器的<code>公钥A</code>进行加密，发送给服务器</li><li>服务器使用自己的<code>私钥A1</code>解密获得了<code>对称密钥X</code>，开始通信</li></ul><p>从这个过程中可以看出，即使中间人没有服务器的私钥A1，他也可以通过伪造拿到对称密钥X。</p><p>因此，浏览器必须要确认收到的公钥是目标网站服务器自己的，而不是中间人的！</p><p>如何确认呢？这就需要使用<strong>数字证书</strong>。</p><h3 id="数字证书" tabindex="-1">数字证书 <a class="header-anchor" href="#数字证书" aria-label="Permalink to &quot;数字证书&quot;">​</a></h3><p>数字证书由可信的第三方机构（证书颁发机构，Certificate Authority，简称CA）签发，每个CA也都有一对公钥和私钥。</p><p>操作系统一般内置了常见的<code>CA的公钥</code>，不经过网络传输，可以认为CA的公钥是可信的。</p><p>证书包含签名发起者（也就是网站服务器拥有者）的公钥及相关信息，</p><ul><li>证书版本号：标识证书的版本信息。</li><li>序列号：唯一标识证书的序列号，用于区分不同的证书。</li><li>颁发者信息：包含颁发证书的证书颁发机构（CA）的相关信息，如颁发者的名称、机构信息等。</li><li>有效期：指定证书的有效期限，包括起始日期和截止日期。</li><li>主体信息：包含证书持有者（签名发起者）的相关信息，如名称、电子邮件地址等。</li><li>公钥信息：包含证书持有者的公钥及其算法参数。</li><li>扩展信息：可选的扩展字段，用于存储其他的证书相关信息，如主题备用名称、密钥用途等。</li></ul><p>这些原始内容会由<code>CA的私钥</code>进行签名，称为<code>数字签名</code>，因此完整的证书内容还包括</p><ul><li>签名算法标识：指示用于生成证书签名的算法，如RSA、SHA-256等。</li><li>数字签名值：使用证书颁发机构的私钥对证书的内容进行签名生成的签名值。</li></ul><p>服务器会在响应请求的时候，将数字证书发送给浏览器。</p><p>中间人不能够将数字证书替换成自己的证书，因为证书是由CA发布的，包含固定的域名，浏览器收到证书之后，判断一下域名就行了。</p><p>浏览器收到证书之后，会使用对应的<code>CA公钥</code>，对数字证书上面的数字签名进行验签。</p><p>那么只要验签通过，就可以认为证书里面的<code>原始内容</code>没有被修改————即数字证书内容里面的公钥确实是目标网站服务器自己的。</p><p>之后，就可以使用服务器的公钥加密对称算法的秘钥，发送给服务端，之后就可以愉快地进行加密消息传送了。</p><h3 id="签名和验签" tabindex="-1">签名和验签 <a class="header-anchor" href="#签名和验签" aria-label="Permalink to &quot;签名和验签&quot;">​</a></h3><p>更详细的数字签名和验签过程如下</p><p>发送方：</p><ol><li><p>发送方对原始内容进行摘要计算，通常使用哈希函数，如SHA-256，生成消息的唯一指纹。</p><ul><li>哈希摘要算法的的特点在于：只有输入相同的明文数据经过相同的数据摘要算法才能得到相同的摘要。如果内容有变化，则会得到完全不同的摘要。</li><li>进行摘要计算的原因主要是缩短内容长度，优化验签性能</li></ul></li><li><p>发送方使用自己的私钥对摘要进行加密，生成数字签名。</p></li><li><p>发送方将原始内容（未加密）和数字签名、以及对应的摘要算法一起发送给接收方。</p></li></ol><p>接收方：</p><ol><li><p>接收方接收到原始内容和数字签名。</p></li><li><p>接收方使用发送方的公钥对数字签名进行解密，得到解密后的摘要。</p></li><li><p>接收方对接收到的原始内容，按照约定的摘要算法进行计算，得到自己的摘要。</p></li><li><p>接收方将两个摘要进行比对，如果匹配，则消息的完整性得到验证，并且可以信任消息来自于发送方。</p></li></ol><p>签名和验签的过程可以查看下面这张图，来源：<a href="https://cheapsslsecurity.com/blog/digital-signature-vs-digital-certificate-the-difference-explained/" target="_blank" rel="noreferrer">cheapsslsecurity.com</a></p><p><img src="https://img.shymean.com/oPic/1705413839558_496.webp" alt=""></p><p>最后一个问题，既然无法修改证书上的数据，那么中间人能不能像之前那样狸猫换太子，使用一个包含他自己公钥的证书来替代原始网站服务器的证书呢？</p><p>答案是现在行不通了。因为证书是不能被伪造的，在签发证书时就会验证域名及域名所有者的身份，浏览器收到证书后，除了上面的验签，还会进行下面的检查</p><ul><li>检查SSL证书是否由浏览器中“受信任的根证书颁发机构”颁发</li><li>检查部署SSL证书的网站域名是否与证书中一致</li><li>检查SSL证书中的证书吊销列表，证书是否被颁发机构吊销</li><li>检查此SSL证书是否过期</li><li>浏览器会到欺诈网站数据库查询此网站是否被列入黑名单</li></ul><p>即使中间人换了一个其他域名的证书，浏览器对比一下请求的域名，一下就拒绝了。</p><p>替换完整的证书也不行（证书校验不通过），修改原始证书的部分内容也不行（证书验签不通过），那么，通过数字证书安全传输服务器公钥的目的就达到了。</p><h3 id="根证书" tabindex="-1">根证书 <a class="header-anchor" href="#根证书" aria-label="Permalink to &quot;根证书&quot;">​</a></h3><p>上面提到的CA公钥保存在操作系统中，实际上就是我们常说的系统根证书。</p><p>系统根证书是一种在计算机系统中用于验证数字证书有效性的证书。</p><p>根证书的存在是为了建立信任关系，确保其他数字证书的有效性。</p><p>根证书是数字证书体系的基础，它们由受信任的证书颁发机构（CA）签发，并被内置在操作系统或应用程序中，作为信任链的根节点。</p><p>信任链是由一系列数字证书构成的链条，链接了一个信任的根证书到最终要验证的证书。</p><p>验证证书的有效性时，系统会追溯信任链，确保每个证书都由直接或间接信任的根证书签发。</p><p>这也是抓包工具能够抓取HTTPS的原因，开发者需要将抓包工具的证书信任为根证书。这样，抓包工具就可以充当一个中间人</p><ul><li>在与服务端的通信中，抓包工具作为正常的客户端接收和发送HTTPS消息</li><li>在与本地应用的通信中，抓包工具作为服务端，发送和接收消息，这就要求其证书需要被系统认证，这样浏览器才可以完成与他的HTTPS连接</li></ul><h3 id="mixed-content警告" tabindex="-1">mixed content警告 <a class="header-anchor" href="#mixed-content警告" aria-label="Permalink to &quot;mixed content警告&quot;">​</a></h3><p>参考</p><ul><li><a href="https://developer.mozilla.org/zh-TW/docs/Web/Security/Mixed_content" target="_blank" rel="noreferrer">混合内容 - mdn</a></li></ul><p>&quot;Mixed content&quot; 是指在 HTTPS 页面上同时加载了通过不安全的 HTTP 协议加载的内容。</p><p>这些HTTP的内容是不受加密保护的，恶意攻击者还是可以替换这部分内容用来攻击</p><p>分为被动混合内容和主动混合内容</p><ul><li>被动混合内容包括img、audio、video、object的subresource等标签嵌入的内容</li><li>主动混合内容包括script、link、iframe、xhr、fetch、css中所有url引入的、object的data属性等地方引入的内容</li></ul><p>网站管理员应该努力确保页面上所有资源都通过安全的 HTTPS 协议加载，以维护整个网站的安全性。</p><p>这可能包括将 HTTP 资源更改为 HTTPS，或者通过 Content Security Policy（内容安全策略）等机制来阻止加载不安全的资源。</p>`,78),l=[p];function k(t,e,E,r,d,y){return a(),i("div",null,l)}const c=s(h,[["render",k]]);export{F as __pageData,c as default};
