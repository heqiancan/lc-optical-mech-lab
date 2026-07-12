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

<header class="lab-page-hero" data-reveal><span class="lab-eyebrow">Publications</span><h1>团队论文</h1><p>共 {{ site.data.achievements.paper_count }} 篇，按年份倒序显示。中文期刊成果不在此声明未经复核的数据库等级。</p></header>

<section class="lab-section lab-publications">
  {% include bib_search.liquid %}
  <div class="publications">
    {% bibliography %}
  </div>
</section>

<section class="lab-cta" data-reveal><span class="lab-eyebrow">Back</span><h2>返回科研成果概览</h2><p>查看精选论文成果、专利与团队整体成果统计。</p><div class="lab-actions"><a class="lab-beam-button" href="{{ '/publications/' | relative_url }}">返回科研成果&nbsp; →</a></div></section>

</div>
<script defer src="{{ '/assets/js/lab-site.js' | relative_url }}"></script>
