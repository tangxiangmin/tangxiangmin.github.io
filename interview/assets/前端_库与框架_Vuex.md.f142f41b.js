import{_ as e,c as t,o as a,b as i}from"./app.946f11db.js";const _='{"title":"\u4E3A\u4EC0\u4E48\u8981\u7528vuex\uFF1F","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4E3A\u4EC0\u4E48\u8981\u7528vuex\uFF1F","slug":"\u4E3A\u4EC0\u4E48\u8981\u7528vuex\uFF1F"},{"level":2,"title":"vuex\u7684\u6838\u5FC3\u6982\u5FF5\uFF1B","slug":"vuex\u7684\u6838\u5FC3\u6982\u5FF5\uFF1B"},{"level":2,"title":"\u4E00\u4E9B\u4F7F\u7528\u6280\u5DE7","slug":"\u4E00\u4E9B\u4F7F\u7528\u6280\u5DE7"},{"level":2,"title":"\u72B6\u6001\u6301\u4E45\u5316","slug":"\u72B6\u6001\u6301\u4E45\u5316"},{"level":2,"title":"\u6E90\u7801\u5206\u6790","slug":"\u6E90\u7801\u5206\u6790"}],"relativePath":"\u524D\u7AEF/\u5E93\u4E0E\u6846\u67B6/Vuex.md"}',r={},s=i('<h1 id="vuex" tabindex="-1">Vuex <a class="header-anchor" href="#vuex" aria-hidden="true">#</a></h1><p><a href="https://vuex.vuejs.org/zh/" target="_blank" rel="noopener noreferrer">vuex</a>\u662F\u4E00\u4E2A\u4E13\u4E3Avue.js\u5E94\u7528\u7A0B\u5E8F\u5F00\u53D1\u7684\u72B6\u6001\u7BA1\u7406\u6A21\u5F0F\uFF08\u5B83\u91C7\u7528\u96C6\u4E2D\u5F0F\u5B58\u8D2E\u7BA1\u7406\u5E94\u7528\u7684\u6240\u6709\u7EC4\u4EF6\u7684\u72B6\u6001\uFF0C\u5E76\u4EE5\u76F8\u5E94\u7684\u89C4\u5219\u4FDD\u8BC1\u72B6\u6001\u4EE5\u4E00\u79CD\u53EF\u9884\u6D4B\u7684\u65B9\u5F0F\u53D1\u751F\u53D8\u5316\uFF09</p><h2 id="\u4E3A\u4EC0\u4E48\u8981\u7528vuex\uFF1F" tabindex="-1">\u4E3A\u4EC0\u4E48\u8981\u7528vuex\uFF1F <a class="header-anchor" href="#\u4E3A\u4EC0\u4E48\u8981\u7528vuex\uFF1F" aria-hidden="true">#</a></h2><p>\u5728\u5E94\u7528\u4E2D\u4F1A\u9047\u89C1<strong>\u591A\u4E2A\u7EC4\u4EF6\u5171\u4EAB\u72B6\u6001</strong>\u7684\u60C5\u51B5</p><ul><li>\u591A\u4E2A\u89C6\u56FE\u5171\u4EAB\u4E00\u4E2A\u72B6\u6001</li><li>\u6765\u81EA\u4E0D\u540C\u7684\u89C6\u56FE\u884C\u4E3A\u9700\u8981\u4FEE\u6539\u540C\u4E00\u4E2A\u72B6\u6001</li></ul><p>\u901A\u8FC7\u5B9A\u4E49\u548C\u9694\u79BB\u72B6\u6001\u7BA1\u7406\u4E2D\u7684\u5404\u79CD\u6982\u5FF5\u5E76\u901A\u8FC7\u5F3A\u5236\u89C4\u5219\u7EF4\u6301\u89C6\u56FE\u548C\u72B6\u6001\u95F4\u7684\u72EC\u7ACB\u6027\uFF0C\u6211\u4EEC\u7684\u4EE3\u7801\u5C06\u4F1A\u53D8\u5F97\u66F4\u7ED3\u6784\u5316\u4E14\u6613\u7EF4\u62A4</p><h2 id="vuex\u7684\u6838\u5FC3\u6982\u5FF5\uFF1B" tabindex="-1">vuex\u7684\u6838\u5FC3\u6982\u5FF5\uFF1B <a class="header-anchor" href="#vuex\u7684\u6838\u5FC3\u6982\u5FF5\uFF1B" aria-hidden="true">#</a></h2><p>\u9700\u8981\u638C\u63E1\u6838\u5FC3\u7684\u4E94\u4E2AAPI</p><ul><li>state\uFF1A\u5B58\u50A8\u6570\u636E\uFF0C\u5B58\u50A8\u72B6\u6001\uFF1B\u5728\u6839\u5B9E\u4F8B\u4E2D\u6CE8\u518C\u4E86store \u540E\uFF0C\u7528 this.$store.state \u6765\u8BBF\u95EE\uFF1B\u5BF9\u5E94vue\u91CC\u9762\u7684data\uFF1B\u5B58\u653E\u6570\u636E\u65B9\u5F0F\u4E3A\u54CD\u5E94\u5F0F\uFF0Cvue\u7EC4\u4EF6\u4ECEstore\u4E2D\u8BFB\u53D6\u6570\u636E\uFF0C\u5982\u6570\u636E\u53D1\u751F\u53D8\u5316\uFF0C\u7EC4\u4EF6\u4E5F\u4F1A\u5BF9\u5E94\u7684\u66F4\u65B0\u3002</li><li>getter\uFF1A\u53EF\u4EE5\u8BA4\u4E3A\u662F store \u7684\u8BA1\u7B97\u5C5E\u6027\uFF0C\u5B83\u7684\u8FD4\u56DE\u503C\u4F1A\u6839\u636E\u5B83\u7684\u4F9D\u8D56\u88AB\u7F13\u5B58\u8D77\u6765\uFF0C\u4E14\u53EA\u6709\u5F53\u5B83\u7684\u4F9D\u8D56\u503C\u53D1\u751F\u4E86\u6539\u53D8\u624D\u4F1A\u88AB\u91CD\u65B0\u8BA1\u7B97\u3002</li><li>mutation\uFF1A\u66F4\u6539 Vuex \u7684 store \u4E2D\u7684\u72B6\u6001\u7684\u552F\u4E00\u65B9\u6CD5\u662F\u63D0\u4EA4 mutation\u3002</li><li>action\uFF1A\u5305\u542B\u4EFB\u610F\u5F02\u6B65\u64CD\u4F5C\uFF0C\u901A\u8FC7\u63D0\u4EA4 mutation \u95F4\u63A5\u66F4\u53D8\u72B6\u6001\u3002</li><li>module\uFF1A\u5C06 store \u5206\u5272\u6210\u6A21\u5757\uFF0C\u6BCF\u4E2A\u6A21\u5757\u90FD\u5177\u6709state\u3001mutation\u3001action\u3001getter\u3001\u751A\u81F3\u662F\u5D4C\u5957\u5B50\u6A21\u5757\u3002</li></ul><p>\u6570\u636E\u4F20\u9012\u6D41\u7A0B\uFF0C\u53EF\u4EE5\u53C2\u8003\u5B98\u7F51\u7684\u8FD9\u5F20\u56FE\u7247</p><p><img src="http://ww2.sinaimg.cn/large/006tNc79gy1g5r9hyf12wj30jh0fb0sz.jpg" alt=""></p><p>\u5F53\u7EC4\u4EF6\u8FDB\u884C\u6570\u636E\u4FEE\u6539\u7684\u65F6\u5019\u6211\u4EEC\u9700\u8981\u8C03\u7528dispatch\u6765\u89E6\u53D1actions\u91CC\u9762\u7684\u65B9\u6CD5\u3002actions\u91CC\u9762\u7684\u6BCF\u4E2A\u65B9\u6CD5\u4E2D\u90FD\u4F1A\u6709\u4E00\u4E2Acommit\u65B9\u6CD5\uFF0C\u5F53\u65B9\u6CD5\u6267\u884C\u7684\u65F6\u5019\u4F1A\u901A\u8FC7commit\u6765\u89E6\u53D1mutations\u91CC\u9762\u7684\u65B9\u6CD5\u8FDB\u884C\u6570\u636E\u7684\u4FEE\u6539\u3002mutations\u91CC\u9762\u7684\u6BCF\u4E2A\u51FD\u6570\u90FD\u4F1A\u6709\u4E00\u4E2Astate\u53C2\u6570\uFF0C\u8FD9\u6837\u5C31\u53EF\u4EE5\u5728mutations\u91CC\u9762\u8FDB\u884Cstate\u7684\u6570\u636E\u4FEE\u6539\uFF0C\u5F53\u6570\u636E\u4FEE\u6539\u5B8C\u6BD5\u540E\uFF0C\u4F1A\u4F20\u5BFC\u7ED9\u9875\u9762\u3002\u9875\u9762\u7684\u6570\u636E\u4E5F\u4F1A\u53D1\u751F\u6539\u53D8\u3002</p><h2 id="\u4E00\u4E9B\u4F7F\u7528\u6280\u5DE7" tabindex="-1">\u4E00\u4E9B\u4F7F\u7528\u6280\u5DE7 <a class="header-anchor" href="#\u4E00\u4E9B\u4F7F\u7528\u6280\u5DE7" aria-hidden="true">#</a></h2><p>mapState</p><p>mapMutations</p><p>mapGetters</p><p>mapActions</p><h2 id="\u72B6\u6001\u6301\u4E45\u5316" tabindex="-1">\u72B6\u6001\u6301\u4E45\u5316 <a class="header-anchor" href="#\u72B6\u6001\u6301\u4E45\u5316" aria-hidden="true">#</a></h2><h2 id="\u6E90\u7801\u5206\u6790" tabindex="-1">\u6E90\u7801\u5206\u6790 <a class="header-anchor" href="#\u6E90\u7801\u5206\u6790" aria-hidden="true">#</a></h2>',19),l=[s];function n(o,u,h,d,c,p){return a(),t("div",null,l)}var v=e(r,[["render",n]]);export{_ as __pageData,v as default};
