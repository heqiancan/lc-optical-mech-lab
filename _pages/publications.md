---
# 页面只负责论文列表结构；具体论文请修改 _bibliography/papers.bib。
layout: page
permalink: /publications/
title: 团队论文
description: 团队公开论文与代表性成果，按年份倒序展示。
nav: true
nav_order: 2
---

<!-- 论文搜索框由 al-folio 提供。 -->

{% include bib_search.liquid %}

<div class="publications">

<!-- 自动读取 _bibliography/papers.bib 并生成论文列表。 -->

{% bibliography %}

</div>
