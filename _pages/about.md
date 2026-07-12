---
# 首页固定使用根路径 /；首页不单独出现在导航中。
layout: page
title: 首页
permalink: /
---

<link rel="stylesheet" href="{{ '/assets/css/lab-site.css' | relative_url }}">
<div class="lab-shell lab-shell-home">

<section class="lab-hero" aria-labelledby="home-title">
  <canvas class="lab-optical-canvas" data-optical-canvas aria-hidden="true"></canvas>
  <img class="lab-hero-logo" src="{{ '/assets/img/logo-icon.png' | relative_url }}" alt="" aria-hidden="true">
  <div class="lab-hero-content">
    <span class="lab-eyebrow">CIOMP · Optoelectronic Countermeasure</span>
    <h1 id="home-title">光电对抗研究部<br><span>精密机械室</span></h1>
    <p class="lab-hero-lead">聚焦光电对抗装备关键支撑技术，开展精密机械、光机结构、热管理、流体仿真与系统集成研究，培养面向工程一线的交叉型科研人才。</p>
    <div class="lab-actions">
      <a class="lab-beam-button" href="{{ '/research/' | relative_url }}">探索研究方向&nbsp; →</a>
      <a class="lab-beam-button" href="{{ '/join/' | relative_url }}">加入我们&nbsp; →</a>
    </div>
  </div>
</section>

<section class="lab-section" data-reveal>
  <header class="lab-section-head">
    <div><span class="lab-eyebrow">Research Matrix</span><h2>研究方向</h2></div>
    <p>从精密结构到热流管理，围绕复杂光电系统构建跨学科工程能力。</p>
  </header>
  {% assign coverage_years = site.data.achievements.end_year | minus: site.data.achievements.start_year | plus: 1 %}
  <div class="lab-grid">
    <article class="lab-card lab-research-card" data-tilt><a class="lab-card-link" href="{{ '/research/' | relative_url }}#beam" aria-label="查看「激光发射系统与光束控制」详细介绍"></a><span class="lab-index">01 / BEAM</span><h3>激光发射系统与光束控制</h3><p>激光发射系统结构设计、光束控制与光机系统总体设计。</p><span class="lab-tag">激光发射</span><span class="lab-tag">光束控制</span></article>
    <article class="lab-card lab-research-card" data-tilt><a class="lab-card-link" href="{{ '/research/' | relative_url }}#thermal" aria-label="查看「热管理与强化传热」详细介绍"></a><span class="lab-index">02 / THERMAL</span><h3>热管理与强化传热</h3><p>高功率光电系统热设计、强化传热与换热结构优化。</p><span class="lab-tag">强化传热</span><span class="lab-tag">热设计</span></article>
    <article class="lab-card lab-research-card" data-tilt><a class="lab-card-link" href="{{ '/research/' | relative_url }}#optomech" aria-label="查看「精密光机结构设计」详细介绍"></a><span class="lab-index">03 / OPTOMECH</span><h3>精密光机结构设计</h3><p>面向光电装备的高可靠精密光机结构设计、制造与工程验证。</p><span class="lab-tag">结构设计</span><span class="lab-tag">工程验证</span></article>
    <article class="lab-card lab-research-card" data-tilt><a class="lab-card-link" href="{{ '/research/' | relative_url }}#metrology" aria-label="查看「测量装调与成像验证」详细介绍"></a><span class="lab-index">04 / METROLOGY</span><h3>测量装调与成像验证</h3><p>光电系统测量装调、成像质量验证与精度标定。</p><span class="lab-tag">装调测试</span><span class="lab-tag">成像验证</span></article>
    <article class="lab-card lab-research-card" data-tilt><a class="lab-card-link" href="{{ '/research/' | relative_url }}#cfd" aria-label="查看「流体仿真与工程优化」详细介绍"></a><span class="lab-index">05 / CFD</span><h3>流体仿真与工程优化</h3><p>复杂流动、湍流演化与 CFD 驱动的性能优化。</p><span class="lab-tag">数值仿真</span><span class="lab-tag">湍流演化</span></article>
    <article class="lab-card lab-research-card" data-tilt><a class="lab-card-link" href="{{ '/research/' | relative_url }}#system" aria-label="查看「系统集成与工程验证」详细介绍"></a><span class="lab-index">06 / SYSTEM</span><h3>系统集成与工程验证</h3><p>结构优化设计、装调测试与系统级工程集成。</p><span class="lab-tag">装调测试</span><span class="lab-tag">系统工程</span></article>
  </div>
</section>

<section class="lab-section" data-reveal>
  <header class="lab-section-head">
    <div><span class="lab-eyebrow">Research Outcomes</span><h2>项目成果</h2></div>
    <p>基于团队公开论文与专利清单整理，完整记录可在科研成果页面查看。</p>
  </header>
  <div class="lab-grid">
    <article class="lab-card lab-metric-card"><a class="lab-card-link" href="{{ '/publications/all/' | relative_url }}" aria-label="查看全部论文列表"></a><span class="yc-number">{{ site.data.achievements.paper_count }}</span><strong>公开论文</strong><p>{{ site.data.achievements.start_year }}–{{ site.data.achievements.end_year }}</p></article>
    <article class="lab-card lab-metric-card"><a class="lab-card-link" href="{{ '/publications/' | relative_url }}#patents" aria-label="查看授权专利与公开申请"></a><span class="yc-number">{{ site.data.achievements.patent_count }}</span><strong>公开专利</strong><p>授权与公开申请</p></article>
    <article class="lab-card lab-metric-card"><a class="lab-card-link" href="{{ '/research/' | relative_url }}" aria-label="查看研究方向详情"></a><span class="yc-number">{{ site.data.achievements.direction_count }}</span><strong>研究方向</strong><p>光机热流交叉</p></article>
    <article class="lab-card lab-metric-card"><span class="yc-number">{{ coverage_years }}</span><strong>年成果覆盖</strong><p>持续积累</p></article>
    {% for paper in site.data.achievements.highlight_papers %}
    <article class="lab-card lab-capability"><span class="lab-index">{{ paper.abbr }}</span><h3>{{ paper.title }}</h3><p>{{ paper.journal }} · {{ paper.year }}</p><a href="{{ paper.url }}" target="_blank" rel="noopener noreferrer">查看公开来源 ↗</a></article>
    {% endfor %}
    <article class="lab-card lab-capability lab-placeholder"><h3>实验与测试平台</h3><p>设备照片、能力指标与典型测试场景待资料确认后补充。</p></article>
  </div>
</section>

<section class="lab-section" data-reveal>
  <header class="lab-section-head">
    <div><span class="lab-eyebrow">Faculty</span><h2>导师团队</h2></div>
    <p>面向真实工程问题，开展跨学科研究与研究生培养。</p>
  </header>
  <div class="lab-grid">
    <article class="lab-card lab-person"><div class="lab-person-head"><img src="{{ '/assets/img/team/shao-shuai.png' | relative_url }}" alt="邵帅"><div class="lab-person-id"><h3>邵帅</h3><strong>研究员、博士生导师</strong></div></div><p>精密机械结构设计、激光发射系统结构设计与光束控制。</p><a href="https://people.ucas.ac.cn/~shaoshuai">UCAS 官方主页 ↗</a></article>
    <article class="lab-card lab-person"><div class="lab-person-head"><img src="{{ '/assets/img/team/xue-xiangyao.jpeg' | relative_url }}" alt="薛向尧"><div class="lab-person-id"><h3>薛向尧</h3><strong>研究员、博士生导师</strong></div></div><p>光学精密机械结构总体设计与分析。</p><a href="{{ '/team/' | relative_url }}">查看导师信息 →</a></article>
    <article class="lab-card lab-person"><a class="lab-person-link" href="{{ '/team/yu-chao/' | relative_url }}" aria-label="查看遇超导师站内主页"></a><div class="lab-person-head"><img src="{{ '/assets/img/team/yu-chao.jpg' | relative_url }}" alt="遇超"><div class="lab-person-id"><h3>遇超</h3><strong>高级工程师、硕士生导师</strong></div></div><p>光机系统设计、流体湍流演化与表面强化传热。</p><a href="https://people.ucas.ac.cn/~yuchao" target="_blank" rel="noopener noreferrer">UCAS 官方主页 ↗</a></article>
  </div>
</section>

<section class="lab-section lab-cta" data-reveal>
  <span class="lab-eyebrow">Selected Work</span>
  <h2>从科学问题走向工程应用</h2>
  <p>浏览团队公开论文与研究方向，或联系我们了解招生和合作信息。</p>
  <div class="lab-actions"><a class="lab-beam-button" href="{{ '/publications/' | relative_url }}">查看团队论文&nbsp; →</a><a class="lab-button-secondary" href="{{ '/join/' | relative_url }}" style="color:var(--lab-ink)!important;border-color:var(--lab-border)">招生与加入</a></div>
</section>

</div>
<script defer src="{{ '/assets/js/lab-site.js' | relative_url }}"></script>
