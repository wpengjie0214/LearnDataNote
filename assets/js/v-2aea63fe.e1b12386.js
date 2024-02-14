"use strict";(self.webpackChunklearn_data=self.webpackChunklearn_data||[]).push([[136],{9720:(n,a)=>{a.c=(n,a)=>{const e=n.__vccOpts||n;for(const[n,s]of a)e[n]=s;return e}},4220:(n,a,e)=>{e.r(a),e.d(a,{comp:()=>m,data:()=>v});var s=e(3968);const t=(0,s.QD)("p",null,"反向代理作为一种重要的网络服务，能有效地将所有传入的网络请求统一转发到相应的后端服务器。通过这种方式，我们不仅能通过不同的域名方便地访问各个 Docker 服务，而且还能避免记忆复杂的端口号，极大地简化了网络管理。",-1),o=(0,s.QD)("p",null,"更为关键的是，反向代理为我们的网络连接提供了 HTTPS 加密，这是数据安全传输的重要保障。未加密的 HTTP 连接像是在网络世界中无防备地暴露，极易受到窥探和劫持。通过配置反向代理，所有的传入流量都将被加密处理，有效防止数据被识别和篡改的风险。",-1),p=(0,s.QD)("p",null,"市面上常见的反向代理工具有多种，包括 Nginx Proxy Manager、nginxWebUI、Caddy 和 Lucky 等。",-1),c=(0,s.QD)("h2",{id:"nginx-proxy-manager",tabindex:"-1"},[(0,s.QD)("a",{class:"header-anchor",href:"#nginx-proxy-manager"},[(0,s.QD)("span",null,"Nginx Proxy Manager")])],-1),i={href:"https://github.com/jlesage/docker-nginx-proxy-manager",target:"_blank",rel:"noopener noreferrer"},l={href:"https://www.nginxwebui.cn/product.html",target:"_blank",rel:"noopener noreferrer"},r=(0,s.IL)('<p>下面是通过 Docker 部署 Nginx Proxy Manager 的配置文件：</p><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&quot;3.8&quot;</span>\n<span class="token key atrule">services</span><span class="token punctuation">:</span>\n  <span class="token key atrule">app</span><span class="token punctuation">:</span>\n    <span class="token key atrule">image</span><span class="token punctuation">:</span> <span class="token string">&quot;jlesage/nginx-proxy-manager:latest&quot;</span>\n    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> nginx<span class="token punctuation">-</span>proxy<span class="token punctuation">-</span>manager\n    <span class="token key atrule">restart</span><span class="token punctuation">:</span> unless<span class="token punctuation">-</span>stopped\n    <span class="token key atrule">ports</span><span class="token punctuation">:</span>\n      <span class="token punctuation">-</span> <span class="token string">&quot;9001:8080&quot;</span>\n      <span class="token punctuation">-</span> <span class="token string">&quot;9002:8181&quot;</span>\n      <span class="token punctuation">-</span> <span class="token string">&quot;9003:4443&quot;</span>\n    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>\n      <span class="token punctuation">-</span> /volume1/docker/nginx<span class="token punctuation">-</span>proxy<span class="token punctuation">-</span>manager/config<span class="token punctuation">:</span>/config\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>要访问管理后台，请前往 <code>localhost:9002</code>。默认的登录账户是 <code>admin@example.com</code>，密码是 <code>changeme</code>。系统会在你首次登录时提示你更改这些凭证。</p><p>部署了反向代理后，只需要在路由器上开放 <code>9003</code> 端口（或你自定义的其他端口），就可以实现流量的转发，无需在公网上开放其他端口。你可以通过 CNAME 记录，将自定义域名 <code>xxx.newzone.top</code> 解析到你的家庭 DDNS 域名 <code>yyy.newzone.top</code>。这样，通过访问 <code>xxx.newzone.top:9003</code>，你就能直接访问指定的服务，并享受到自动部署的 SSL 加密带来的安全保护。若需要切换至其他服务，只需更改域名 <code>xxx.newzone.top</code> 中的 <code>xxx</code> 部分即可。</p><h2 id="caddy" tabindex="-1"><a class="header-anchor" href="#caddy"><span>Caddy</span></a></h2>',5),d={href:"https://caddyserver.com/",target:"_blank",rel:"noopener noreferrer"},u=(0,s.IL)('<p>以下是通过 Docker 部署 Caddy 的配置文件：</p><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&quot;3.9&quot;</span>\n\n<span class="token key atrule">services</span><span class="token punctuation">:</span>\n  <span class="token key atrule">caddy</span><span class="token punctuation">:</span>\n    <span class="token key atrule">image</span><span class="token punctuation">:</span> caddy<span class="token punctuation">:</span>latest\n    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> caddy\n    <span class="token key atrule">restart</span><span class="token punctuation">:</span> unless<span class="token punctuation">-</span>stopped\n    <span class="token key atrule">ports</span><span class="token punctuation">:</span>\n      <span class="token punctuation">-</span> <span class="token string">&quot;9080:80&quot;</span>\n      <span class="token punctuation">-</span> <span class="token string">&quot;9443:443&quot;</span>\n      <span class="token punctuation">-</span> <span class="token string">&quot;9443:443/udp&quot;</span>\n    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>\n      <span class="token punctuation">-</span> /volume1/docker/caddy/Caddyfile<span class="token punctuation">:</span>/etc/caddy/Caddyfile\n      <span class="token punctuation">-</span> /volume1/docker/caddy/site<span class="token punctuation">:</span>/srv\n      <span class="token punctuation">-</span> /volume1/docker/caddy/caddy_data<span class="token punctuation">:</span>/data\n      <span class="token punctuation">-</span> /volume1/docker/caddy/caddy_config<span class="token punctuation">:</span>/config\n\n<span class="token key atrule">volumes</span><span class="token punctuation">:</span>\n  <span class="token key atrule">caddy_data</span><span class="token punctuation">:</span>\n  <span class="token key atrule">caddy_config</span><span class="token punctuation">:</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过上述配置，无论是 Nginx Proxy Manager 还是 Caddy，你都可以轻松地部署和管理你的反向代理服务。这将为你的网络环境提供更高的数据安全性和便捷的访问管理。希望这些信息能帮助你更好地利用反向代理技术，为你的网络环境带来显著的改善。如果你在部署或使用过程中遇到任何问题，欢迎在评论区留言交流，我们可以一起探讨解决方案。</p>',3),k={},m=(0,e(9720).c)(k,[["render",function(n,a){const e=(0,s.E1)("ExternalLinkIcon");return(0,s.Wz)(),(0,s.An)("div",null,[t,o,p,c,(0,s.QD)("p",null,[(0,s.QD)("a",i,[(0,s.mY)("Nginx Proxy Manager"),(0,s.K2)(e)]),(0,s.mY)(" 提供了一个的图形界面，方便用户管理反向代理和 SSL 证书。它的 SSL 证书有效期长达三个月，并支持自动续期。由于国内家用宽带常常不支持开放 80 和 443 端口，所以这里推荐使用一个修改版的 Nginx Proxy Manager 而非官方容器，同时也不建议使用 Caddy。如果你对 Nginx Proxy Manager 还不够熟悉，也可以尝试使用国内开发的 "),(0,s.QD)("a",l,[(0,s.mY)("nginxWebUI"),(0,s.K2)(e)]),(0,s.mY)("，它也提供了图形化配置、SSL 证书申请和自动续签等功能。")]),r,(0,s.QD)("p",null,[(0,s.QD)("a",d,[(0,s.mY)("Caddy"),(0,s.K2)(e)]),(0,s.mY)(" 提供了更为简便的配置方法。但要注意，Caddy v2 默认使用 http-01 方式申请 HTTPS 证书，这要求你的域名能够通过公网的 80/443 端口进行所有权验证。在国内环境下，你可能需要手动配置证书。可以选择通过 Certbot 免费申请证书，或在阿里云、腾讯云等平台申请有效期为一年的免费证书。")]),u])}]]),v=JSON.parse('{"path":"/services/dockers-on-nas/reverse-proxy.html","title":"反向代理：Nginx Proxy Manager","lang":"zh-CN","frontmatter":{"article":false,"title":"反向代理：Nginx Proxy Manager","order":101,"description":"反向代理作为一种重要的网络服务，能有效地将所有传入的网络请求统一转发到相应的后端服务器。通过这种方式，我们不仅能通过不同的域名方便地访问各个 Docker 服务，而且还能避免记忆复杂的端口号，极大地简化了网络管理。 更为关键的是，反向代理为我们的网络连接提供了 HTTPS 加密，这是数据安全传输的重要保障。未加密的 HTTP 连接像是在网络世界中无防备...","head":[["meta",{"property":"og:url","content":"https://www.chuqiyx.com/biji.chuqiyx.com/services/dockers-on-nas/reverse-proxy.html"}],["meta",{"property":"og:site_name","content":"LearnData-开源笔记"}],["meta",{"property":"og:title","content":"反向代理：Nginx Proxy Manager"}],["meta",{"property":"og:description","content":"反向代理作为一种重要的网络服务，能有效地将所有传入的网络请求统一转发到相应的后端服务器。通过这种方式，我们不仅能通过不同的域名方便地访问各个 Docker 服务，而且还能避免记忆复杂的端口号，极大地简化了网络管理。 更为关键的是，反向代理为我们的网络连接提供了 HTTPS 加密，这是数据安全传输的重要保障。未加密的 HTTP 连接像是在网络世界中无防备..."}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-02-13T06:51:48.000Z"}],["meta",{"property":"article:author","content":"初柒"}],["meta",{"property":"article:modified_time","content":"2024-02-13T06:51:48.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"反向代理：Nginx Proxy Manager\\",\\"description\\":\\"反向代理作为一种重要的网络服务，能有效地将所有传入的网络请求统一转发到相应的后端服务器。通过这种方式，我们不仅能通过不同的域名方便地访问各个 Docker 服务，而且还能避免记忆复杂的端口号，极大地简化了网络管理。 更为关键的是，反向代理为我们的网络连接提供了 HTTPS 加密，这是数据安全传输的重要保障。未加密的 HTTP 连接像是在网络世界中无防备...\\"}"]]},"headers":[{"level":2,"title":"Nginx Proxy Manager","slug":"nginx-proxy-manager","link":"#nginx-proxy-manager","children":[]},{"level":2,"title":"Caddy","slug":"caddy","link":"#caddy","children":[]}],"git":{"createdTime":1707807108000,"updatedTime":1707807108000,"contributors":[{"name":"wpengjie0214","email":"159807936+wpengjie0214@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":3.06,"words":919},"filePathRelative":"services/dockers-on-nas/reverse-proxy.md","localizedDate":"2024年2月13日","excerpt":"<p>反向代理作为一种重要的网络服务，能有效地将所有传入的网络请求统一转发到相应的后端服务器。通过这种方式，我们不仅能通过不同的域名方便地访问各个 Docker 服务，而且还能避免记忆复杂的端口号，极大地简化了网络管理。</p>\\n<p>更为关键的是，反向代理为我们的网络连接提供了 HTTPS 加密，这是数据安全传输的重要保障。未加密的 HTTP 连接像是在网络世界中无防备地暴露，极易受到窥探和劫持。通过配置反向代理，所有的传入流量都将被加密处理，有效防止数据被识别和篡改的风险。</p>\\n<p>市面上常见的反向代理工具有多种，包括 Nginx Proxy Manager、nginxWebUI、Caddy 和 Lucky 等。</p>","autoDesc":true}')}}]);