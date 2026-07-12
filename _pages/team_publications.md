---
# 完整论文列表，从 publications.md 的“论文成果”区块跳转进入，不放导航栏。
layout: page
permalink: /publications/all/
title: 团队论文
description: 团队公开论文完整列表与检索。
nav: false
---

<link rel="stylesheet" href="{{ '/assets/css/lab-site.css' | relative_url }}">
<div class="lab-shell">

<header class="lab-page-hero" data-reveal><span class="lab-eyebrow">Publications</span><h1>团队论文</h1><p>共 {{ site.data.achievements.paper_count }} 篇，按研究方向分类，各方向内按年份倒序显示。中文期刊成果不在此声明未经复核的数据库等级。</p></header>

<section class="lab-section lab-publications" data-reveal>
  {% include bib_search.liquid %}
  <div class="lab-actions" style="margin-top:1.5rem">
    <button type="button" class="lab-beam-button" data-jump-to="beam">激光发射系统与光束控制</button>
    <button type="button" class="lab-beam-button" data-jump-to="thermal">热管理与强化传热</button>
    <button type="button" class="lab-beam-button" data-jump-to="optomech">精密光机结构设计</button>
    <button type="button" class="lab-beam-button" data-jump-to="metrology">测量装调与成像验证</button>
    <button type="button" class="lab-beam-button" data-jump-to="cfd">流体仿真与工程优化</button>
    <button type="button" class="lab-beam-button" data-jump-to="system">系统集成与工程验证</button>
  </div>
</section>

<section class="lab-section lab-publications" data-reveal>
  <header class="lab-section-head"><div><h2 id="beam">激光发射系统与光束控制</h2></div></header>
  <div class="publications">
    {% bibliography --query @*[keywords=激光发射系统与光束控制] --group_by none --sort_by year --order descending %}
  </div>
</section>

<section class="lab-section lab-publications" data-reveal>
  <header class="lab-section-head"><div><h2 id="thermal">热管理与强化传热</h2></div></header>
  <div class="publications">
    {% bibliography --query @*[keywords=热管理与强化传热] --group_by none --sort_by year --order descending %}
  </div>
</section>

<section class="lab-section lab-publications" data-reveal>
  <header class="lab-section-head"><div><h2 id="optomech">精密光机结构设计</h2></div></header>
  <div class="publications">
    {% bibliography --query @*[keywords=精密光机结构设计] --group_by none --sort_by year --order descending %}
  </div>
</section>

<section class="lab-section lab-publications" data-reveal>
  <header class="lab-section-head"><div><h2 id="metrology">测量装调与成像验证</h2></div></header>
  <div class="publications">
    {% bibliography --query @*[keywords=测量装调与成像验证] --group_by none --sort_by year --order descending %}
  </div>
</section>

<section class="lab-section lab-publications" data-reveal>
  <header class="lab-section-head"><div><h2 id="cfd">流体仿真与工程优化</h2></div></header>
  <div class="publications">
    {% bibliography --query @*[keywords=流体仿真与工程优化] --group_by none --sort_by year --order descending %}
  </div>
</section>

<section class="lab-section lab-publications" data-reveal>
  <header class="lab-section-head"><div><h2 id="system">系统集成与工程验证</h2></div></header>
  <div class="publications">
    {% bibliography --query @*[keywords=系统集成与工程验证] --group_by none --sort_by year --order descending %}
  </div>
</section>

<section class="lab-cta" data-reveal><span class="lab-eyebrow">Back</span><h2>返回科研成果概览</h2><p>查看精选论文成果、专利与团队整体成果统计。</p><div class="lab-actions"><a class="lab-beam-button" href="{{ '/publications/' | relative_url }}">返回科研成果&nbsp; →</a></div></section>

</div>
<script defer src="{{ '/assets/js/lab-site.js' | relative_url }}"></script>
