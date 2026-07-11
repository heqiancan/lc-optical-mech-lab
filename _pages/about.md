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
  <div class="lab-hero-content">
    <span class="lab-eyebrow">CIOMP · Optoelectronic Countermeasure</span>
    <h1 id="home-title">光电对抗研究部<br><span>精密机械室</span></h1>
    <p class="lab-hero-lead">聚焦光电对抗装备关键支撑技术，开展精密机械、光机结构、热管理、流体仿真与系统集成研究，培养面向工程一线的交叉型科研人才。</p>
    <div class="lab-actions">
      <a class="lab-beam-button" href="{{ '/research/' | relative_url }}">探索研究方向&nbsp; →</a>
      <a class="lab-button-secondary" href="{{ '/join/' | relative_url }}">加入我们</a>
    </div>
  </div>
</section>

<section class="lab-section" data-reveal>
  <header class="lab-section-head">
    <div><span class="lab-eyebrow">Research Matrix</span><h2>研究方向</h2></div>
    <p>从精密结构到热流管理，围绕复杂光电系统构建跨学科工程能力。</p>
  </header>
  <div class="lab-grid">
    <article class="lab-card lab-research-card" data-tilt><span class="lab-index">01 / PRECISION</span><h3>精密机械</h3><p>面向光电装备的高可靠机械设计、制造与工程验证。</p><span class="lab-tag">结构设计</span><span class="lab-tag">工程验证</span></article>
    <article class="lab-card lab-research-card" data-tilt><span class="lab-index">02 / OPTOMECH</span><h3>光机结构</h3><p>激光发射系统、光束控制与光机系统总体设计。</p><span class="lab-tag">激光发射</span><span class="lab-tag">光束控制</span></article>
    <article class="lab-card lab-research-card" data-tilt><span class="lab-index">03 / THERMAL</span><h3>热管理</h3><p>高功率光电系统热设计、强化传热与换热结构优化。</p><span class="lab-tag">强化传热</span><span class="lab-tag">热设计</span></article>
    <article class="lab-card lab-research-card" data-tilt><span class="lab-index">04 / CFD</span><h3>流体仿真</h3><p>复杂流动、湍流演化与 CFD 驱动的性能优化。</p><span class="lab-tag">数值仿真</span><span class="lab-tag">湍流演化</span></article>
    <article class="lab-card lab-research-card" data-tilt><span class="lab-index">05 / SYSTEM</span><h3>系统集成</h3><p>结构优化设计、装调测试与系统级工程集成。</p><span class="lab-tag">装调测试</span><span class="lab-tag">系统工程</span></article>
  </div>
</section>

<section class="lab-section" data-reveal>
  <header class="lab-section-head">
    <div><span class="lab-eyebrow">Engineering Capability</span><h2>科研与工程能力</h2></div>
    <p>项目、设备和实验平台信息将在资料确认后逐步补充。</p>
  </header>
  <div class="lab-grid">
    <article class="lab-card lab-capability"><span class="lab-index">PROJECTS</span><h3>重大工程项目</h3><p>团队长期参与重大工程任务，具体项目内容待公开信息确认后补充。</p></article>
    <article class="lab-card lab-capability lab-placeholder"><h3>实验与测试平台</h3><p>设备照片、能力指标与典型测试场景待补充。</p></article>
    <article class="lab-card lab-capability lab-placeholder"><h3>代表性成果</h3><p>专利、奖项与工程应用案例待补充。</p></article>
  </div>
</section>

<section class="lab-section" data-reveal>
  <header class="lab-section-head">
    <div><span class="lab-eyebrow">Faculty</span><h2>导师团队</h2></div>
    <p>面向真实工程问题，开展跨学科研究与研究生培养。</p>
  </header>
  <div class="lab-grid">
    <article class="lab-card lab-person"><img src="{{ '/assets/img/team/shao-shuai.png' | relative_url }}" alt="邵帅"><h3>邵帅</h3><strong>博士生导师</strong><p>精密机械结构设计、激光发射系统结构设计与光束控制。</p><a href="https://people.ucas.ac.cn/~shaoshuai">UCAS 官方主页 ↗</a></article>
    <article class="lab-card lab-person"><img src="{{ '/assets/img/team/xue-xiangyao.jpeg' | relative_url }}" alt="薛向尧"><h3>薛向尧</h3><strong>博士招生导师</strong><p>光学精密机械结构总体设计与分析。</p><a href="{{ '/team/' | relative_url }}">查看导师信息 →</a></article>
    <article class="lab-card lab-person"><a class="lab-person-link" href="{{ '/team/yu-chao/' | relative_url }}" aria-label="查看遇超导师站内主页"></a><img src="{{ '/assets/img/team/yu-chao.jpg' | relative_url }}" alt="遇超"><h3>遇超</h3><strong>硕士生导师</strong><p>光机系统设计、流体湍流演化与表面强化传热。</p><a href="https://people.ucas.ac.cn/~yuchao" target="_blank" rel="noopener noreferrer">UCAS 官方主页 ↗</a></article>
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
