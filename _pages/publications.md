---
# 页面只负责论文列表结构；具体论文请修改 _bibliography/papers.bib。
layout: page
permalink: /publications/
title: 团队论文
description: 团队公开论文与代表性成果，按年份倒序展示。
nav: true
nav_order: 2
---

<link rel="stylesheet" href="{{ '/assets/css/lab-site.css' | relative_url }}">
<div class="lab-shell">

<header class="lab-page-hero" data-reveal><span class="lab-eyebrow">Publications</span><h1>团队论文</h1><p>围绕光电装备热管理、精密结构、流体仿真和工程优化形成的公开研究成果。</p></header>

<div class="lab-publications" data-reveal>

<!-- 论文搜索框由 al-folio 提供。 -->

{% include bib_search.liquid %}

<div class="publications">

<!-- 自动读取 _bibliography/papers.bib 并生成论文列表。 -->

{% bibliography %}

</div>

</div>

</div>
<script defer src="{{ '/assets/js/lab-site.js' | relative_url }}"></script>
