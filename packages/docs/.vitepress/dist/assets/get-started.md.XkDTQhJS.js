import{_ as s,b as a,a as n,ab as l}from"./chunks/framework.COPJjTFo.js";const h=JSON.parse('{"title":"基于 Vue3 + TS 的组件库","description":"","frontmatter":{"search":false,"next":{"link":"/components/button","text":"Button 按钮"}},"headers":[],"relativePath":"get-started.md","filePath":"get-started.md"}'),t={name:"get-started.md"},o=l(`<h1 id="基于-vue3-ts-的组件库" tabindex="-1">基于 Vue3 + TS 的组件库 <a class="header-anchor" href="#基于-vue3-ts-的组件库" aria-label="Permalink to &quot;基于 Vue3 + TS 的组件库&quot;">​</a></h1><h2 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-light vp-code" tabindex="0"><code><span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#032F62;"> i</span><span style="color:#032F62;"> samuel-morph</span><span style="color:#005CC5;"> --save</span></span></code></pre></div><h2 id="开始使用" tabindex="-1">开始使用 <a class="header-anchor" href="#开始使用" aria-label="Permalink to &quot;开始使用&quot;">​</a></h2><p><strong>全局使用</strong></p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-light vp-code" tabindex="0"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { createApp } </span><span style="color:#D73A49;">from</span><span style="color:#032F62;"> &quot;vue&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> App </span><span style="color:#D73A49;">from</span><span style="color:#032F62;"> &quot;./App.vue&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//引入所有组件库</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> Morph </span><span style="color:#D73A49;">from</span><span style="color:#032F62;"> &quot;samuel-morph&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#6A737D;">//引入样式</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#032F62;"> &quot;samuel-morph/dist/index.css&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#6A737D;">//全局使用</span></span>
<span class="line"><span style="color:#6F42C1;">createApp</span><span style="color:#24292E;">(App).</span><span style="color:#6F42C1;">use</span><span style="color:#24292E;">(Morph).</span><span style="color:#6F42C1;">mount</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;#app&quot;</span><span style="color:#24292E;">);</span></span></code></pre></div><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-light vp-code" tabindex="0"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">m-button</span><span style="color:#24292E;">&gt; 我是 Button &lt;/</span><span style="color:#22863A;">m-button</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><p><strong>组件按需引用</strong></p><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-light vp-code" tabindex="0"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#D73A49;">    import</span><span style="color:#24292E;"> { MButton } </span><span style="color:#D73A49;">from</span><span style="color:#032F62;"> &quot;samuel-morph&quot;</span></span>
<span class="line"><span style="color:#D73A49;">    import</span><span style="color:#032F62;"> &quot;samuel-morph/dist/theme/index.css&quot;</span></span>
<span class="line"><span style="color:#D73A49;">    import</span><span style="color:#032F62;"> &quot;samuel-morph/dist/theme/Button.css&quot;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">m-button</span><span style="color:#24292E;">&gt; 我是 Button &lt;/</span><span style="color:#22863A;">m-button</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><h2 id="亮点" tabindex="-1">亮点 <a class="header-anchor" href="#亮点" aria-label="Permalink to &quot;亮点&quot;">​</a></h2><details class="details custom-block"><summary>Details</summary><ul><li>Vite + Vitest + Vitepress 工具链</li><li>monorepo 分包管理</li><li>github actions 实现 CI/CD 自动化部署</li><li>大模型辅助：使用大模型辅助完成需求分析，设计思路，快速实现组件，提升开发效率。</li><li>当然，也会展示 发布“开箱即用” 的 npm 包</li></ul></details>`,11),p=[o];function e(c,r,i,u,y,d){return n(),a("div",null,p)}const g=s(t,[["render",e]]);export{h as __pageData,g as default};
