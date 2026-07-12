---
# 论文来自 _bibliography/papers.bib；专利和统计来自 _data/。完整论文列表见 team_publications.md。
layout: page
permalink: /publications/
title: 科研成果
description: 团队公开论文、专利与代表性成果。
nav: true
nav_order: 2
---

<link rel="stylesheet" href="{{ '/assets/css/lab-site.css' | relative_url }}">
<div class="lab-shell">

<section class="lab-hero" aria-labelledby="pub-hero-title">
  <canvas class="lab-rays-canvas" data-rays-canvas aria-hidden="true"></canvas>
  <div class="lab-hero-content">
    <span class="lab-eyebrow">Research Outcomes</span>
    <h1 id="pub-hero-title">科研成果</h1>
    <p class="lab-hero-lead">围绕激光发射与光束控制、热管理、精密光机结构、测量装调、流体仿真和系统集成形成的公开研究成果。</p>
  </div>
</section>

<section class="lab-results-stats lab-grid" data-reveal aria-label="团队成果统计">
  <article class="lab-card yc-stat"><a class="lab-card-link" href="{{ '/publications/all/' | relative_url }}" aria-label="查看全部论文列表"></a><span class="lab-index">中英文期刊成果</span><span class="yc-number">{{ site.data.achievements.paper_count }}</span><strong>公开论文</strong></article>
  <article class="lab-card yc-stat"><a class="lab-card-link" href="#patents" aria-label="查看授权专利与公开申请"></a><span class="lab-index">授权专利与公开申请</span><span class="yc-number">{{ site.data.achievements.patent_count }}</span><strong>公开专利</strong></article>
  <article class="lab-card yc-stat"><span class="lab-index">持续积累与工程应用</span><span class="yc-number">{{ site.data.achievements.start_year }}–{{ site.data.achievements.end_year }}</span><strong>成果年份</strong></article>
  <article class="lab-card yc-stat"><a class="lab-card-link" href="{{ '/research/' | relative_url }}" aria-label="查看研究方向详情"></a><span class="lab-index">光机热流交叉研究</span><span class="yc-number">{{ site.data.achievements.direction_count }}</span><strong>研究方向</strong></article>
</section>

<section class="lab-section" data-reveal>
  <header class="lab-section-head"><div><span class="lab-eyebrow">Publications</span><h2>研究成果</h2></div><p>按六个研究方向各选取一项代表性公开论文，完整论文列表见下方入口。</p></header>
  <div class="lab-grid">
  {% for paper in site.data.achievements.featured_papers %}
    <article class="lab-card lab-featured-result"><span class="lab-index">{{ paper.direction }}</span><h3>{{ paper.title }}</h3><p>{{ paper.journal }} · {{ paper.year }}</p><a href="{{ paper.url }}" target="_blank" rel="noopener noreferrer">查看公开来源 ↗</a></article>
  {% endfor %}
  </div>
  <div class="lab-actions" style="margin-top:1.5rem"><a class="lab-beam-button" href="{{ '/publications/all/' | relative_url }}">查看全部论文&nbsp; →</a></div>
</section>

<section class="lab-section" data-reveal id="patents">
  <header class="lab-section-head"><div><span class="lab-eyebrow">Patents</span><h2>授权专利与公开申请</h2></div><p>仅展示已完成公开检索的记录，当前法律状态请以国家知识产权局等官方检索结果为准。</p></header>
  <div class="lab-patent-list">
  {% for patent in site.data.patents %}
    <article class="lab-card lab-patent-card">
      <div class="lab-patent-meta"><span class="lab-tag">{{ patent.type }}</span><span>{{ patent.year }}</span></div>
      <h3>{{ patent.title }}</h3>
      <p class="lab-patent-number">{{ patent.number }}</p>
      <p>{{ patent.summary }}</p>
      <dl><dt>发明人</dt><dd>{{ patent.inventors | join: '、' }}</dd><dt>公开/授权日</dt><dd>{{ patent.date }}</dd><dt>方向</dt><dd>{{ patent.direction }}</dd></dl>
      <a href="{{ patent.url }}" target="_blank" rel="noopener noreferrer">查看公开记录 ↗</a>
    </article>
  {% endfor %}
  </div>
</section>

<aside class="lab-card" data-reveal><strong>数据说明：</strong><p>本页依据团队提供的公开成果清单整理。论文作者顺序、题名、期刊和年份按原始清单展示；专利法律状态可能随时间变化，请以官方数据库实时记录为准。</p></aside>

</div>
<script defer src="{{ '/assets/js/lab-site.js' | relative_url }}"></script>
