import{_ as l}from"./plugin-vue_export-helper-c27b6911.js";import{r as p,o as r,c,a as o,b as n,d as s,e as a,f as t}from"./app-cffc52f5.js";const u={},d=n("p",null,"VuePress 主要从 Markdown 文件生成页面。因此，你可以使用它轻松生成文档或博客站点。",-1),h=n("p",null,"你应该创建和编写 Markdown 文件，以便 VuePress 可以根据文件结构将它们转换为不同的页面。",-1),k=n("h2",{id:"markdown-介绍",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#markdown-介绍","aria-hidden":"true"},"#"),s(" Markdown 介绍")],-1),v={href:"https://vuepress-theme-hope.github.io/v2/zh/cookbook/markdown/",target:"_blank",rel:"noopener noreferrer"},m={href:"https://vuepress-theme-hope.github.io/v2/zh/cookbook/markdown/demo.html",target:"_blank",rel:"noopener noreferrer"},b=n("h2",{id:"markdown-配置",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#markdown-配置","aria-hidden":"true"},"#"),s(" Markdown 配置")],-1),g=n("p",null,"VuePress 通过 Frontmatter 为每个 Markdown 页面引入配置。",-1),_={class:"hint-container info"},f=n("p",{class:"hint-container-title"},"相关信息",-1),q={href:"https://vuepress-theme-hope.github.io/v2/zh/cookbook/vuepress/page.html#front-matter",target:"_blank",rel:"noopener noreferrer"},w=n("h2",{id:"markdown-扩展",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#markdown-扩展","aria-hidden":"true"},"#"),s(" Markdown 扩展")],-1),y={href:"https://github.com/markdown-it/markdown-it",target:"_blank",rel:"noopener noreferrer"},x={href:"https://github.com/markdown-it/markdown-it#syntax-extensions",target:"_blank",rel:"noopener noreferrer"},z=n("h3",{id:"vuepress-扩展",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#vuepress-扩展","aria-hidden":"true"},"#"),s(" VuePress 扩展")],-1),E=n("p",null,"为了丰富文档写作，VuePress 对 Markdown 语法进行了扩展。",-1),M={href:"https://vuepress-theme-hope.github.io/v2/zh/cookbook/vuepress/markdown.html",target:"_blank",rel:"noopener noreferrer"},A=n("h3",{id:"主题扩展",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#主题扩展","aria-hidden":"true"},"#"),s(" 主题扩展")],-1),V={href:"https://vuepress-theme-hope.github.io/v2/md-enhance/zh/",target:"_blank",rel:"noopener noreferrer"},j=n("code",null,"vuepress-plugin-md-enhance",-1),P={class:"hint-container tip"},B=n("p",{class:"hint-container-title"},"一键启用",-1),U=n("code",null,"plugins.mdEnhance.enableAll: true",-1),F={href:"https://vuepress-theme-hope.github.io/v2/md-enhance/zh/",target:"_blank",rel:"noopener noreferrer"},T=t(`<p>::: code-tabs#language</p><p>@tab TS</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> hopeTheme <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vuepress-theme-hope&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  theme<span class="token operator">:</span> <span class="token function">hopeTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    plugins<span class="token operator">:</span> <span class="token punctuation">{</span>
      mdEnhance<span class="token operator">:</span> <span class="token punctuation">{</span>
        enableAll<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>@tab JS</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> hopeTheme <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vuepress-theme-hope&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">theme</span><span class="token operator">:</span> <span class="token function">hopeTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">mdEnhance</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">enableAll</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p>`,6),D=t(`<h4 id="自定义容器" tabindex="-1"><a class="header-anchor" href="#自定义容器" aria-hidden="true">#</a> 自定义容器</h4><div><p>安全的在 Markdown 中使用 {{ variable }}。</p></div><div class="hint-container info"><p class="hint-container-title">自定义标题</p><p>信息容器，包含 <code>代码</code> 与 <a href="#%E8%87%AA%E5%AE%9A%E4%B9%89%E5%AE%B9%E5%99%A8">链接</a>。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div><div class="hint-container tip"><p class="hint-container-title">自定义标题</p><p>提示容器</p></div><div class="hint-container warning"><p class="hint-container-title">自定义标题</p><p>警告容器</p></div><div class="hint-container danger"><p class="hint-container-title">自定义标题</p><p>危险容器</p></div><details class="hint-container details"><summary>自定义标题</summary><p>详情容器</p></details><details class="hint-container details"><summary>代码</summary><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>::: v-pre

安全的在 Markdown 中使用 {{ variable }}。

:::

::: info 自定义标题

信息容器

:::

::: tip 自定义标题

提示容器

:::

::: warning 自定义标题

警告容器

:::

::: danger 自定义标题

危险容器

:::

::: details 自定义标题

详情容器

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>`,8),S={href:"https://vuepress-theme-hope.github.io/v2/zh/guide/markdown/container.html",target:"_blank",rel:"noopener noreferrer"},C=t(`<h4 id="代码块" tabindex="-1"><a class="header-anchor" href="#代码块" aria-hidden="true">#</a> 代码块</h4><p>::: code-tabs</p><p>@tab pnpm</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">pnpm</span> <span class="token function">add</span> <span class="token parameter variable">-D</span> vuepress-theme-hope
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>@tab yarn</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">yarn</span> <span class="token function">add</span> <span class="token parameter variable">-D</span> vuepress-theme-hope
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>@tab:active npm</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> i <span class="token parameter variable">-D</span> vuepress-theme-hope
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>:::</p>`,9),L={href:"https://vuepress-theme-hope.github.io/v2/zh/guide/markdown/code-tabs.html",target:"_blank",rel:"noopener noreferrer"},J=n("h4",{id:"自定义对齐",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#自定义对齐","aria-hidden":"true"},"#"),s(" 自定义对齐")],-1),R=n("p",null,"::: center",-1),X=n("p",null,"我是居中的",-1),G=n("p",null,":::",-1),I=n("p",null,"::: right",-1),N=n("p",null,"我在右对齐",-1),W=n("p",null,":::",-1),H={href:"https://vuepress-theme-hope.github.io/v2/zh/guide/markdown/align.html",target:"_blank",rel:"noopener noreferrer"},Y=n("h4",{id:"上下角标",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#上下角标","aria-hidden":"true"},"#"),s(" 上下角标")],-1),$=n("p",null,"19^th^ H~2~O",-1),Z={href:"https://vuepress-theme-hope.github.io/v2/zh/guide/markdown/sup-sub.html",target:"_blank",rel:"noopener noreferrer"},K=n("h4",{id:"脚注",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#脚注","aria-hidden":"true"},"#"),s(" 脚注")],-1),O=n("p",null,[s("此文字有脚注"),n("a",{href:"%E8%BF%99%E6%98%AF%E8%84%9A%E6%B3%A8%E5%86%85%E5%AE%B9"},"^first"),s(".")],-1),Q={href:"https://vuepress-theme-hope.github.io/v2/zh/guide/markdown/footnote.html",target:"_blank",rel:"noopener noreferrer"},nn=n("h4",{id:"标记",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#标记","aria-hidden":"true"},"#"),s(" 标记")],-1),sn=n("p",null,"你可以标记 ==重要的内容== 。",-1),an={href:"https://vuepress-theme-hope.github.io/v2/zh/guide/markdown/mark.html",target:"_blank",rel:"noopener noreferrer"},en=n("h4",{id:"任务列表",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#任务列表","aria-hidden":"true"},"#"),s(" 任务列表")],-1),tn=n("li",null,[n("p",null,"[x] 计划 1")],-1),on=n("li",null,[n("p",null,"[ ] 计划 2")],-1),pn={href:"https://vuepress-theme-hope.github.io/v2/zh/guide/markdown/tasklist.html",target:"_blank",rel:"noopener noreferrer"},ln=n("h3",{id:"图片增强",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#图片增强","aria-hidden":"true"},"#"),s(" 图片增强")],-1),rn=n("p",null,"支持为图片设置颜色模式和大小",-1),cn={href:"https://vuepress-theme-hope.github.io/v2/zh/guide/markdown/image.html",target:"_blank",rel:"noopener noreferrer"},un=t(`<h4 id="图表" tabindex="-1"><a class="header-anchor" href="#图表" aria-hidden="true">#</a> 图表</h4><p>::: chart 一个散点图案例</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;scatter&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;datasets&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;label&quot;</span><span class="token operator">:</span> <span class="token string">&quot;散点数据集&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span> <span class="token property">&quot;x&quot;</span><span class="token operator">:</span> <span class="token number">-10</span><span class="token punctuation">,</span> <span class="token property">&quot;y&quot;</span><span class="token operator">:</span> <span class="token number">0</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token property">&quot;x&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token property">&quot;y&quot;</span><span class="token operator">:</span> <span class="token number">10</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token property">&quot;x&quot;</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token property">&quot;y&quot;</span><span class="token operator">:</span> <span class="token number">5</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token property">&quot;x&quot;</span><span class="token operator">:</span> <span class="token number">0.5</span><span class="token punctuation">,</span> <span class="token property">&quot;y&quot;</span><span class="token operator">:</span> <span class="token number">5.5</span> <span class="token punctuation">}</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token property">&quot;backgroundColor&quot;</span><span class="token operator">:</span> <span class="token string">&quot;rgb(255, 99, 132)&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;options&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;scales&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;x&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;linear&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;position&quot;</span><span class="token operator">:</span> <span class="token string">&quot;bottom&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p>`,4),dn={href:"https://vuepress-theme-hope.github.io/v2/zh/guide/markdown/chart.html",target:"_blank",rel:"noopener noreferrer"},hn=t(`<h4 id="echarts" tabindex="-1"><a class="header-anchor" href="#echarts" aria-hidden="true">#</a> Echarts</h4><p>::: echarts 一个折线图案例</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;xAxis&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;category&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;Mon&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Tue&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Wed&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Thu&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Fri&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Sat&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Sun&quot;</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;yAxis&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;value&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;series&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">150</span><span class="token punctuation">,</span> <span class="token number">230</span><span class="token punctuation">,</span> <span class="token number">224</span><span class="token punctuation">,</span> <span class="token number">218</span><span class="token punctuation">,</span> <span class="token number">135</span><span class="token punctuation">,</span> <span class="token number">147</span><span class="token punctuation">,</span> <span class="token number">260</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;line&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p>`,4),kn={href:"https://vuepress-theme-hope.github.io/v2/zh/guide/markdown/echarts.html",target:"_blank",rel:"noopener noreferrer"},vn=t(`<h4 id="流程图" tabindex="-1"><a class="header-anchor" href="#流程图" aria-hidden="true">#</a> 流程图</h4><div class="language-flow line-numbers-mode" data-ext="flow"><pre class="language-flow"><code>cond<span class="token operator">=&gt;</span>condition<span class="token operator">:</span> 是否执行操作<span class="token operator">?</span>
process<span class="token operator">=&gt;</span>operation<span class="token operator">:</span> 操作
e<span class="token operator">=&gt;</span>end<span class="token operator">:</span> 结束

<span class="token function">cond</span><span class="token punctuation">(</span>yes<span class="token punctuation">)</span><span class="token operator">-</span><span class="token operator">&gt;</span>process<span class="token operator">-</span><span class="token operator">&gt;</span>e
<span class="token function">cond</span><span class="token punctuation">(</span>no<span class="token punctuation">)</span><span class="token operator">-</span><span class="token operator">&gt;</span>e
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),mn={href:"https://vuepress-theme-hope.github.io/v2/zh/guide/markdown/flowchart.html",target:"_blank",rel:"noopener noreferrer"},bn=t(`<h4 id="mermaid" tabindex="-1"><a class="header-anchor" href="#mermaid" aria-hidden="true">#</a> Mermaid</h4><div class="language-mermaid line-numbers-mode" data-ext="mermaid"><pre class="language-mermaid"><code><span class="token keyword">flowchart</span> TB
    c1<span class="token arrow operator">--&gt;</span>a2
    <span class="token keyword">subgraph</span> one
    a1<span class="token arrow operator">--&gt;</span>a2
    <span class="token keyword">end</span>
    <span class="token keyword">subgraph</span> two
    b1<span class="token arrow operator">--&gt;</span>b2
    <span class="token keyword">end</span>
    <span class="token keyword">subgraph</span> three
    c1<span class="token arrow operator">--&gt;</span>c2
    <span class="token keyword">end</span>
    one <span class="token arrow operator">--&gt;</span> two
    three <span class="token arrow operator">--&gt;</span> two
    two <span class="token arrow operator">--&gt;</span> c2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),gn={href:"https://vuepress-theme-hope.github.io/v2/zh/guide/markdown/mermaid.html",target:"_blank",rel:"noopener noreferrer"},_n=n("h4",{id:"tex-语法",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#tex-语法","aria-hidden":"true"},"#"),s(" Tex 语法")],-1),fn=n("p",null,"$$ \\frac {\\partial^r} {\\partial \\omega^r} \\left(\\frac {y^{\\omega}} {\\omega}\\right) = \\left(\\frac {y^{\\omega}} {\\omega}\\right) \\left{(\\log y)^r + \\sum_{i=1}^r \\frac {(-1)^i r \\cdots (r-i+1) (\\log y)^{r-i}} {\\omega^i} \\right} $$",-1),qn={href:"https://vuepress-theme-hope.github.io/v2/zh/guide/markdown/tex.html",target:"_blank",rel:"noopener noreferrer"},wn=n("h4",{id:"导入文件",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#导入文件","aria-hidden":"true"},"#"),s(" 导入文件")],-1),yn=n("p",null,"@include(./README.md{11-17})",-1),xn={href:"https://vuepress-theme-hope.github.io/v2/zh/guide/markdown/include.html",target:"_blank",rel:"noopener noreferrer"},zn=t(`<h4 id="代码演示" tabindex="-1"><a class="header-anchor" href="#代码演示" aria-hidden="true">#</a> 代码演示</h4><p>::: normal-demo 一个普通 Demo</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>VuePress Theme Hope<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>very<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>非常<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>强大!<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&quot;#very&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&quot;click&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&quot;非常强大&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">span</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p>`,6),En={href:"https://vuepress-theme-hope.github.io/v2/zh/guide/markdown/demo.html",target:"_blank",rel:"noopener noreferrer"},Mn=n("h4",{id:"样式化",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#样式化","aria-hidden":"true"},"#"),s(" 样式化")],-1),An=n("p",null,[s("设置它"),n("span",{style:{color:"red"}},"没有"),s("任何效果，请"),n("span",{style:{color:"red"}},"不要"),s("这样使用")],-1),Vn={href:"https://vuepress-theme-hope.github.io/v2/zh/guide/markdown/stylize.html",target:"_blank",rel:"noopener noreferrer"},jn=n("h4",{id:"幻灯片",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#幻灯片","aria-hidden":"true"},"#"),s(" 幻灯片")],-1),Pn={href:"https://vuepress-theme-hope.github.io/v2/zh/guide/markdown/presentation.html",target:"_blank",rel:"noopener noreferrer"};function Bn(Un,Fn){const e=p("ExternalLinkIcon"),i=p("Presentation");return r(),c("div",null,[d,h,o(" more "),k,n("p",null,[s("如果你是一个新手，还不会编写 Markdown，请先阅读 "),n("a",v,[s("Markdown 介绍"),a(e)]),s(" 和 "),n("a",m,[s("Markdown 演示"),a(e)]),s("。")]),b,g,n("div",_,[f,n("p",null,[s("Frontmatter 是 VuePress 中很重要的一个概念，如果你不了解它，你需要阅读 "),n("a",q,[s("Frontmatter 介绍"),a(e)]),s("。")])]),w,n("p",null,[s("VuePress 会使用 "),n("a",y,[s("markdown-it"),a(e)]),s(" 来解析 Markdown 内容，因此可以借助于 markdown-it 插件来实现 "),n("a",x,[s("语法扩展"),a(e)]),s(" 。")]),z,E,n("p",null,[s("关于这些扩展，请阅读 "),n("a",M,[s("VuePress 中的 Markdown 扩展"),a(e)]),s("。")]),A,n("p",null,[s("通过 "),n("a",V,[j,a(e)]),s("，主题扩展了更多 Markdown 语法，提供更加丰富的写作功能。")]),n("div",P,[B,n("p",null,[s("你可以设置在主题选项中设置 "),U,s(" 启用 "),n("a",F,[s("md-enhance"),a(e)]),s(" 插件的所有功能。")]),T]),D,n("ul",null,[n("li",null,[n("a",S,[s("查看详情"),a(e)])])]),C,n("ul",null,[n("li",null,[n("a",L,[s("查看详情"),a(e)])])]),J,R,X,G,I,N,W,n("ul",null,[n("li",null,[n("a",H,[s("查看详情"),a(e)])])]),Y,$,n("ul",null,[n("li",null,[n("a",Z,[s("查看详情"),a(e)])])]),K,O,n("ul",null,[n("li",null,[n("a",Q,[s("查看详情"),a(e)])])]),nn,sn,n("ul",null,[n("li",null,[n("a",an,[s("查看详情"),a(e)])])]),en,n("ul",null,[tn,on,n("li",null,[n("p",null,[n("a",pn,[s("查看详情"),a(e)])])])]),ln,rn,n("ul",null,[n("li",null,[n("a",cn,[s("查看详情"),a(e)])])]),un,n("ul",null,[n("li",null,[n("a",dn,[s("查看详情"),a(e)])])]),hn,n("ul",null,[n("li",null,[n("a",kn,[s("查看详情"),a(e)])])]),vn,n("ul",null,[n("li",null,[n("a",mn,[s("查看详情"),a(e)])])]),bn,n("ul",null,[n("li",null,[n("a",gn,[s("查看详情"),a(e)])])]),_n,fn,n("ul",null,[n("li",null,[n("a",qn,[s("查看详情"),a(e)])])]),wn,yn,n("ul",null,[n("li",null,[n("a",xn,[s("查看详情"),a(e)])])]),zn,n("ul",null,[n("li",null,[n("a",En,[s("查看详情"),a(e)])])]),Mn,o(" markdownlint-disable MD033 "),An,n("ul",null,[n("li",null,[n("a",Vn,[s("查看详情"),a(e)])])]),o(" markdownlint-enable MD033 "),jn,a(i,{id:"presentation-355",code:"eJzjUlZWeLpz9/PG9c872xUMubie7Gh4smPVszmdz6a1P107/emkHoXol5P3PetbGquRUVJSUGylr59blJFfkKpXnFmSqqnwfFbLs3VbX0zYy8Wlq6vLhWqgEVBQ4eXCnc9nrwMaDmeChDHUGusBrU9ISMgq5krOzysuUUhUsFUwtAYJgZRjqAYaoqLC5aURU5KRWpIYb6ADZRhqAvXFFJfmxldn2hrUghQBAI9BXC0=",theme:"auto"}),n("ul",null,[n("li",null,[n("a",Pn,[s("查看详情"),a(e)])])])])}const Sn=l(u,[["render",Bn],["__file","markdown.html.vue"]]);export{Sn as default};
