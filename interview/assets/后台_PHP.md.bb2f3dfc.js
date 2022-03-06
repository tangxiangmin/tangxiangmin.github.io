import{_ as e,c as p,o as a,b as n}from"./app.946f11db.js";const g='{"title":"\u5305\u7BA1\u7406\u5DE5\u5177composer","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5305\u7BA1\u7406\u5DE5\u5177composer","slug":"\u5305\u7BA1\u7406\u5DE5\u5177composer"},{"level":2,"title":"Nginx\u4EE3\u7406php\u670D\u52A1\u5668","slug":"nginx\u4EE3\u7406php\u670D\u52A1\u5668"},{"level":3,"title":"\u542F\u52A8php-fpm","slug":"\u542F\u52A8php-fpm"},{"level":3,"title":"\u4FEE\u6539nginx\u914D\u7F6E","slug":"\u4FEE\u6539nginx\u914D\u7F6E"},{"level":3,"title":"\u9644\u5F55:php-fpm\u76F8\u5173\u76EE\u5F55","slug":"\u9644\u5F55-php-fpm\u76F8\u5173\u76EE\u5F55"},{"level":2,"title":"\u6846\u67B6","slug":"\u6846\u67B6"},{"level":3,"title":"ThinkPHP","slug":"thinkphp"},{"level":3,"title":"Larvel","slug":"larvel"}],"relativePath":"\u540E\u53F0/PHP.md"}',r={},h=n(`<h1 id="php" tabindex="-1">PHP <a class="header-anchor" href="#php" aria-hidden="true">#</a></h1><blockquote><p>php\u662F\u4E16\u754C\u4E0A\u6700\u597D\u7684\u8BED\u8A00</p></blockquote><h2 id="\u5305\u7BA1\u7406\u5DE5\u5177composer" tabindex="-1">\u5305\u7BA1\u7406\u5DE5\u5177composer <a class="header-anchor" href="#\u5305\u7BA1\u7406\u5DE5\u5177composer" aria-hidden="true">#</a></h2><p><a href="https://getcomposer.org/" target="_blank" rel="noopener noreferrer">Composer</a>\u662FPHP\u7684\u8F6F\u4EF6\u5305\u7BA1\u7406\u7CFB\u7EDF\uFF0C\u5B83\u63D0\u4F9B\u7528\u4E8E\u7BA1\u7406PHP\u8F6F\u4EF6\u548C\u4F9D\u8D56\u5E93\u5173\u7CFB\u7684\u6807\u51C6\u683C\u5F0F</p><h2 id="nginx\u4EE3\u7406php\u670D\u52A1\u5668" tabindex="-1">Nginx\u4EE3\u7406php\u670D\u52A1\u5668 <a class="header-anchor" href="#nginx\u4EE3\u7406php\u670D\u52A1\u5668" aria-hidden="true">#</a></h2><p>\u9664\u4E86\u4F7F\u7528wamp\u3001mamp\u7B49\u96C6\u6210\u5DE5\u5177\u642D\u5EFAphp\u5F00\u53D1\u73AF\u5883\u4E4B\u5916\uFF0C\u8FD8\u4F7F\u7528nginx \u642D\u5EFAphp\u8FD0\u884C\u73AF\u5883</p><p>\u53C2\u8003</p><ul><li><a href="https://segmentfault.com/a/1190000014610688" target="_blank" rel="noopener noreferrer">Nginx\u548CPHP\u7684\u914D\u7F6E</a></li><li><a href="https://blog.csdn.net/ivan820819/article/details/54970330" target="_blank" rel="noopener noreferrer">php-fpm\u5B89\u88C5\u3001\u914D\u7F6E\u4E0E\u4F18\u5316</a></li></ul><p>PHP\u5728 5.3.3 \u4E4B\u540E\u5DF2\u7ECF\u5C06<code>php-fpm</code>\u5199\u5165php\u6E90\u7801\u6838\u5FC3\uFF0C\u5728\u5B89\u88C5php\u7684\u65F6\u5019\uFF0C\u901A\u8FC7<code>\u2013enable-fpm</code>\u81EA\u52A8\u8FDB\u884C\u7F16\u8BD1\u3002\u5176\u5B9E\u8D28\u662F\u4E00\u4E2A PHP FastCGI\u7BA1\u7406\u5668\uFF0C\u4F1A\u542F\u52A8\u4E00\u4E2A\u672C\u5730\u670D\u52A1\u5668</p><h3 id="\u542F\u52A8php-fpm" tabindex="-1">\u542F\u52A8php-fpm <a class="header-anchor" href="#\u542F\u52A8php-fpm" aria-hidden="true">#</a></h3><p>\u9996\u5148\u542F\u52A8php-fpm</p><div class="language-"><pre><code>sudo php-fpm
</code></pre></div><p>php-fpm\u7684\u9ED8\u8BA4\u542F\u52A8\u7AEF\u53E3\u53F7\u4E3A9000,\u53EF\u4EE5\u5728<code>/etc/php-fpm.conf</code>\u4E2D\u4FEE\u6539</p><div class="language-"><pre><code>listen = 127.0.0.1:9000
</code></pre></div><h3 id="\u4FEE\u6539nginx\u914D\u7F6E" tabindex="-1">\u4FEE\u6539nginx\u914D\u7F6E <a class="header-anchor" href="#\u4FEE\u6539nginx\u914D\u7F6E" aria-hidden="true">#</a></h3><p>\u63A5\u4E0B\u6765\u4FEE\u6539nginx\u7684\u914D\u7F6E</p><div class="language-"><pre><code>server {
    listen 80;
    server_name phptest.com;
    
    root         /Users/Txm/test; # php \u9879\u76EE\u6839\u76EE\u5F55
    index index.php index.html index.htm;

    location ~ \\.php$ {
        # \u8BBE\u7F6E\u76D1\u542Cphp-fpm\u7684\u7AEF\u53E3
        fastcgi_pass   127.0.0.1:9000;
        fastcgi_index  index.php;
        fastcgi_param  SCRIPT_FILENAME  $document_root$fastcgi_script_name;
        include        fastcgi_params;
    }
}
</code></pre></div><h3 id="\u9644\u5F55-php-fpm\u76F8\u5173\u76EE\u5F55" tabindex="-1">\u9644\u5F55:php-fpm\u76F8\u5173\u76EE\u5F55 <a class="header-anchor" href="#\u9644\u5F55-php-fpm\u76F8\u5173\u76EE\u5F55" aria-hidden="true">#</a></h3><p>linux\u4E0B</p><div class="language-"><pre><code>/usr/local/php/php
/usr/local/php/etc/php.ini
/usr/local/php/sbin/php-fpm
/usr/local/php/etc/php-fpm.conf
</code></pre></div><p>mac\u4E0B</p><div class="language-"><pre><code>/usr/bin/php
/etc/php.ini
/usr/bin/php-fpm
/etc/php-fpm.conf
</code></pre></div><h2 id="\u6846\u67B6" tabindex="-1">\u6846\u67B6 <a class="header-anchor" href="#\u6846\u67B6" aria-hidden="true">#</a></h2><h3 id="thinkphp" tabindex="-1">ThinkPHP <a class="header-anchor" href="#thinkphp" aria-hidden="true">#</a></h3><p>\u600E\u4E48\u8BF4\u5462~</p><h3 id="larvel" tabindex="-1">Larvel <a class="header-anchor" href="#larvel" aria-hidden="true">#</a></h3><p>PHP\u4E2D\u6700\u73B0\u4EE3\u5316\u7684\u6846\u67B6\u4E4B\u4E00</p>`,27),i=[h];function t(l,s,o,d,c,f){return a(),p("div",null,i)}var u=e(r,[["render",t]]);export{g as __pageData,u as default};
