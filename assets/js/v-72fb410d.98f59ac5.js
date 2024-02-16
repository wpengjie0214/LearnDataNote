"use strict";(self.webpackChunklearn_data=self.webpackChunklearn_data||[]).push([[5680],{9720:(n,a)=>{a.c=(n,a)=>{const s=n.__vccOpts||n;for(const[n,e]of a)s[n]=e;return s}},2720:(n,a,s)=>{s.r(a),s.d(a,{comp:()=>g,data:()=>f});var e=s(3968);const t={href:"https://logseq.com/",target:"_blank",rel:"noopener noreferrer"},o=(0,e.IL)('<p>另外，Logseq 的日记非常强大，也可以自动套用指定模板。<sup class="footnote-ref"><a href="#footnote1">[1]</a><a class="footnote-anchor" id="footnote-ref1"></a></sup> 但其他笔记需要手动启用模板，修改 .env 的设置 <code>{:week &quot;journals&quot;}</code> 被报错。继续尝试设计周记、月报的模板。</p><p>Logseq 劣势，所有页面建立在 pages 下，但可以手动修改位置。双链笔记有个特点，只要名称不变，文档位置更改也不会影响引用。</p><p>我会把远期不安排的任务，往 later 清单中放，随时可以查看提醒，但又不需要每天重复调整时间。</p><h2 id="标签使用" tabindex="-1"><a class="header-anchor" href="#标签使用"><span>标签使用</span></a></h2><p>在之前，我习惯按笔记领域中使用各种标签，例如 <code>#tool</code>、<code>#docker</code>，但这反而使管理变得繁琐。</p><p>现在，除了常见的标签外，我开始使用工具或项目的名称作为标记，例如 <code>#learndata</code>、<code>#logseq</code>。这样能更直观地找到相关的笔记。</p><figure><img src="https://img.newzone.top/2023-12-11-15-22-31.png?imageMogr2/format/webp?imageMogr2/format/webp/thumbnail/600x" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="快速使用" tabindex="-1"><a class="header-anchor" href="#快速使用"><span>快速使用</span></a></h2><ul><li><code>[[]]</code> 可快速新建页面，<code>All pages</code> 中可删除空页面</li><li>打开右上角的「侧边栏」，使用目录管理主页面</li><li>将页面中内容汇总起来，比如「心理学」标签页面显示所有心理学</li><li>任务时，使用 later 或 now，切换后改变状态，会记录任务持续时间。 <ul><li>如果使用 <code>doing</code> 或者 <code>now</code> 命令，它会更显眼地出现在每天日志的下方（如红框所示），以防当天记录的东西过多，或者到了第二天生成了新的日志后被忽略。<strong>直到你将它完成为止，它才会消失</strong>，算是一种强提醒。</li></ul></li><li>PDF 文档的标注管理一直是个大难题，而用 Logseq 后方便许多，能将注释与标签、笔记、截图统合在一起。</li><li>TOC Generator 插件生成目录：<code>{{renderer :tocgen}}</code>。</li><li><code>shift+左键</code> 将新页面打开在<strong>右侧边栏</strong>中。</li><li>忽略指定文件夹？</li></ul><h2 id="query" tabindex="-1"><a class="header-anchor" href="#query"><span>query</span></a></h2>',10),p={href:"https://www.bilibili.com/video/BV1eq4y1N7Su",target:"_blank",rel:"noopener noreferrer"},c={href:"https://docs.logseq.com/#/page/queries",target:"_blank",rel:"noopener noreferrer"},l=(0,e.IL)('<p>首先，在文本后方添加 tag，比如</p><div class="language-jsx line-numbers-mode" data-ext="jsx" data-title="jsx"><pre class="language-jsx"><code>idea <span class="token number">1</span> #idea\nfind #research\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>接着，使用 query 命令寻找对应结果</p><div class="language-jsx line-numbers-mode" data-ext="jsx" data-title="jsx"><pre class="language-jsx"><code><span class="token operator">*</span> and 命令\n<span class="token punctuation">{</span><span class="token punctuation">{</span><span class="token function">query</span> <span class="token punctuation">(</span>and <span class="token punctuation">[</span><span class="token punctuation">[</span>research<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>idea<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">}</span>\n<span class="token punctuation">{</span><span class="token punctuation">{</span><span class="token function">query</span> <span class="token punctuation">(</span><span class="token function">and</span> <span class="token punctuation">(</span>task now later done<span class="token punctuation">)</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>page<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">}</span>\n\n<span class="token operator">*</span> or 命令\n<span class="token punctuation">{</span><span class="token punctuation">{</span><span class="token function">query</span> <span class="token punctuation">(</span>or <span class="token punctuation">[</span><span class="token punctuation">[</span>page <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>page <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">}</span>\n\n<span class="token operator">*</span> not 命令\n<span class="token punctuation">{</span><span class="token punctuation">{</span><span class="token function">query</span> <span class="token punctuation">(</span>not <span class="token punctuation">[</span><span class="token punctuation">[</span>page <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>page <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">}</span>\n\n<span class="token operator">*</span> 罗列为 Later 的 task\n<span class="token punctuation">{</span><span class="token punctuation">{</span><span class="token function">query</span> <span class="token punctuation">(</span>task later<span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">}</span>\n\n<span class="token operator">*</span> 一周内的日记，且包含关键词或标签\n<span class="token punctuation">{</span><span class="token punctuation">{</span><span class="token function">query</span><span class="token punctuation">(</span><span class="token function">and</span> <span class="token punctuation">(</span>between <span class="token operator">-</span>6d today<span class="token punctuation">)</span>  <span class="token string">&quot;#幸福&quot;</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr class="footnotes-sep">',5),i={class:"footnotes"},u={class:"footnotes-list"},r={id:"footnote1",class:"footnote-item"},d={href:"https://thinkstack.club/how-to-set-up-an-automated-daily-template-in-logseq/",target:"_blank",rel:"noopener noreferrer"},k=(0,e.QD)("a",{href:"#footnote-ref1",class:"footnote-backref"},"↩︎",-1),m={},g=(0,s(9720).c)(m,[["render",function(n,a){const s=(0,e.E1)("ExternalLinkIcon");return(0,e.Wz)(),(0,e.An)("div",null,[(0,e.QD)("p",null,[(0,e.mY)("与 Obsidian 相比，"),(0,e.QD)("a",t,[(0,e.mY)("Logseq"),(0,e.K2)(s)]),(0,e.mY)(" 罗列内容更方便。Logseq 将所有行都视为节点，因此非常轻松将所需的子节点整合在一个页面，实现关键信息聚合。Logseq 更改页面标题，会同步更改所有标签名。")]),o,(0,e.QD)("p",null,[(0,e.QD)("a",p,[(0,e.mY)("query"),(0,e.K2)(s)]),(0,e.mY)(" 能按条件精准地找到结果，并动态更新在页面中，公式参考"),(0,e.QD)("a",c,[(0,e.mY)("官方文档"),(0,e.K2)(s)]),(0,e.mY)("。")]),l,(0,e.QD)("section",i,[(0,e.QD)("ol",u,[(0,e.QD)("li",r,[(0,e.QD)("p",null,[(0,e.QD)("a",d,[(0,e.mY)("How to Set Up an Automated Daily Template in Logseq"),(0,e.K2)(s)]),(0,e.mY)(),k])])])])])}]]),f=JSON.parse('{"path":"/apps/mianfeiaigc/logseq.html","title":"Logseq","lang":"zh-CN","frontmatter":{"article":false,"title":"Logseq","order":1,"feed":false,"seo":false,"head":[]},"headers":[{"level":2,"title":"标签使用","slug":"标签使用","link":"#标签使用","children":[]},{"level":2,"title":"快速使用","slug":"快速使用","link":"#快速使用","children":[]},{"level":2,"title":"query","slug":"query","link":"#query","children":[]}],"git":{"createdTime":1708006858000,"updatedTime":1708066280000,"contributors":[{"name":"wpengjie0214","email":"wpengjie0214@163.com","commits":3}]},"readingTime":{"minutes":2.34,"words":701},"filePathRelative":"apps/mianfeiaigc/logseq.md","localizedDate":"2024年2月15日"}')}}]);