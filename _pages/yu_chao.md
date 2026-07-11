---
# 站内导师个人页：不加入顶部导航，通过首页和导师团队页进入。
layout: page
title: 遇超导师主页
permalink: /team/yu-chao/
description: 遇超导师研究方向、招生信息与联系方式。
nav: false
---

<!--
  遇超个人页专用样式：
  --yc-* 变量控制主色；yc-window 是复古窗口卡片；yc-* grid 控制响应式布局。
-->
<style>
/* 基础变量、窗口卡片、标题栏与按钮。 */
.post-title{display:none}.yc-page{--yc-blue:#0757cf;--yc-deep:#061c4f;--yc-red:#ef3023;--yc-yellow:#ffd82f;--yc-ink:#10182d;--yc-paper:#f7fbff;position:relative;color:var(--yc-ink);padding:.5rem 0 2rem}.yc-page *{box-sizing:border-box}.yc-page a{text-decoration:none}.yc-window{overflow:hidden;border:2px solid #102b65;border-radius:14px;background:var(--yc-paper);box-shadow:7px 8px 0 rgba(5,28,78,.18);transition:transform .22s ease,box-shadow .22s ease}.yc-window:hover{transform:translateY(-4px);box-shadow:9px 12px 0 rgba(5,28,78,.2)}.yc-bar{display:flex;align-items:center;gap:7px;padding:9px 13px;color:#fff;background:linear-gradient(90deg,#073ea7,#0870dc);font-size:.82rem;font-weight:800;letter-spacing:.08em}.yc-dot{width:9px;height:9px;border-radius:50%;background:#fff}.yc-dot:nth-child(2){background:var(--yc-yellow)}.yc-dot:nth-child(3){background:#ef4a3f}.yc-close{margin-left:auto;width:20px;height:20px;border:2px solid #fff;border-radius:4px;display:grid;place-items:center;background:var(--yc-red);font-size:.75rem}.yc-hero{position:relative;overflow:hidden;padding:clamp(2rem,6vw,4rem);border:3px solid #071536;border-radius:18px;background:radial-gradient(circle at 85% 12%,#1479ef 0,#063daa 30%,#031849 72%);box-shadow:9px 10px 0 var(--yc-red);color:#fff}.yc-hero:after{content:"";position:absolute;inset:0;background:linear-gradient(120deg,transparent 55%,rgba(255,255,255,.12));pointer-events:none}.yc-kicker{display:inline-flex;gap:.45rem;align-items:center;padding:.45rem .8rem;border:2px solid #111;border-radius:999px;background:var(--yc-yellow);color:#111!important;font-size:.8rem;font-weight:900;transform:rotate(-1deg)}.yc-hero h1{position:relative;z-index:1;margin:1rem 0 .55rem;color:#fff!important;font-size:clamp(2.35rem,7vw,5.2rem);font-weight:950;line-height:1;letter-spacing:-.045em;text-shadow:4px 4px 0 #050505,7px 7px 0 var(--yc-red)}.yc-hero-lead{max-width:690px;margin:1.4rem 0;color:#ddecff!important;font-size:clamp(1.05rem,2vw,1.35rem);font-weight:700}.yc-highlight{color:var(--yc-yellow)}.yc-actions{position:relative;z-index:2;display:flex;flex-wrap:wrap;gap:.7rem}.yc-btn{display:inline-flex;align-items:center;justify-content:center;min-height:44px;padding:.7rem 1rem;border:2px solid #0a1024;border-radius:8px;background:var(--yc-yellow);box-shadow:4px 4px 0 #0a1024;color:#111!important;font-weight:900;transition:transform .18s ease,box-shadow .18s ease}.yc-btn:hover{transform:translate(-2px,-2px);box-shadow:6px 6px 0 #0a1024}.yc-btn-red{background:var(--yc-red);color:#fff!important}.yc-btn-light{background:#fff}.yc-grid{display:grid;grid-template-columns:repeat(12,1fr);gap:1rem;margin:1.5rem 0}.yc-profile{grid-column:span 7}.yc-callout{grid-column:span 5}.yc-window-body{padding:1.2rem}.yc-profile-wrap{display:grid;grid-template-columns:170px 1fr;gap:1.3rem;align-items:center}.yc-portrait{width:100%;aspect-ratio:1/1;border:3px solid #102b65;border-radius:12px;object-fit:cover;background:#fff}.yc-name{margin:0 0 .2rem;color:#073ea7!important;font-size:2rem;font-weight:900}.yc-meta{display:grid;gap:.42rem;margin:.8rem 0}.yc-meta div{padding-bottom:.4rem;border-bottom:1px dashed #a8b8d2;color:var(--yc-ink)!important}.yc-callout .yc-window-body{display:flex;min-height:100%;flex-direction:column;justify-content:center;background:linear-gradient(145deg,#fff8bd,#fff)}.yc-callout h2{margin:0;color:#df261e!important;font-size:clamp(1.8rem,4vw,3rem);font-weight:950}.yc-callout p{color:var(--yc-ink)!important}.yc-stats{display:grid;grid-template-columns:repeat(4,1fr);gap:1rem;margin:1.5rem 0}.yc-stat{padding:1.15rem;border:2px solid #102b65;border-radius:12px;background:#fff;box-shadow:5px 6px 0 rgba(7,62,167,.18);text-align:center}.yc-stat:nth-child(2){border-color:#d82b24}.yc-stat:nth-child(3){border-color:#148143}.yc-stat:nth-child(4){border-color:#d22282}.yc-number{display:block;color:#073ea7!important;font-size:clamp(2rem,5vw,3.4rem);font-weight:950;line-height:1}.yc-stat:nth-child(2) .yc-number{color:#db271f!important}.yc-stat:nth-child(3) .yc-number{color:#148143!important}.yc-stat:nth-child(4) .yc-number{color:#d22282!important}.yc-stat strong,.yc-stat small{display:block;color:var(--yc-ink)!important}.yc-stat strong{margin:.45rem 0 .15rem}.yc-panels{display:grid;grid-template-columns:repeat(3,1fr);gap:1rem}.yc-panel .yc-window-body{min-height:220px}.yc-list{margin:0;padding-left:1.2rem}.yc-list li{margin:.5rem 0;color:var(--yc-ink)!important}.yc-apply{margin-top:1.5rem;border:3px solid #111;border-radius:15px;background:linear-gradient(110deg,#fff 0 62%,#ffe12f 62%);box-shadow:8px 8px 0 var(--yc-red);padding:1.4rem}.yc-apply h2{margin:0 0 .45rem;color:#111!important;font-weight:950}.yc-apply p{max-width:650px;color:#222!important}.yc-disclaimer{margin:1.5rem 0 0;padding:1rem 1.15rem;border-left:4px solid var(--yc-yellow);background:color-mix(in srgb,var(--global-card-bg-color) 88%,var(--yc-yellow));font-size:.85rem}.yc-disclaimer,.yc-disclaimer strong{color:var(--global-text-color)!important}.yc-reveal{opacity:0;transform:translateY(22px)}.yc-reveal.is-visible{animation:yc-rise .58s cubic-bezier(.2,.8,.2,1) forwards}.yc-pulse{animation:yc-pulse 2.2s ease-in-out infinite}@keyframes yc-rise{to{opacity:1;transform:none}}@keyframes yc-pulse{50%{filter:brightness(1.08);transform:scale(1.025)}}html[data-theme="dark"] .yc-window{border-color:#2b78a0;background:#17272c;box-shadow:7px 8px 0 rgba(0,0,0,.28)}html[data-theme="dark"] .yc-window-body,html[data-theme="dark"] .yc-meta div,html[data-theme="dark"] .yc-list li{color:#e8f1f3!important}html[data-theme="dark"] .yc-name{color:#40cfea!important}html[data-theme="dark"] .yc-callout .yc-window-body{background:linear-gradient(145deg,#352f13,#17272c)}html[data-theme="dark"] .yc-callout p{color:#e8f1f3!important}html[data-theme="dark"] .yc-stat{background:#17272c;border-color:#2b78a0}html[data-theme="dark"] .yc-stat strong,html[data-theme="dark"] .yc-stat small{color:#e8f1f3!important}

/* 响应式断点：平板两列、手机单列。 */
@media(max-width:820px){.yc-profile,.yc-callout{grid-column:span 12}.yc-stats{grid-template-columns:repeat(2,1fr)}.yc-panels{grid-template-columns:1fr 1fr}.yc-panel:last-child{grid-column:1/-1}}
@media(max-width:560px){.yc-hero{padding:2rem 1.15rem}.yc-hero h1{text-shadow:3px 3px 0 #050505,5px 5px 0 var(--yc-red)}.yc-profile-wrap{grid-template-columns:1fr}.yc-portrait{max-width:180px}.yc-stats,.yc-panels{grid-template-columns:1fr}.yc-panel:last-child{grid-column:auto}.yc-apply{background:#ffe12f}.yc-window{box-shadow:4px 5px 0 rgba(5,28,78,.18)}}

/* 用户选择“减少动态效果”时禁用动画，保证可访问性。 */
@media(prefers-reduced-motion:reduce){.yc-page *{scroll-behavior:auto!important;animation:none!important;transition:none!important}.yc-reveal{opacity:1;transform:none}}
</style>

<!-- 招生首屏：修改按钮链接时保留 mailto: 或完整 https:// 地址。 -->
<main class="yc-page">
  <section class="yc-hero yc-reveal">
    <span class="yc-kicker">HOT · 中国科学院长春光机所 · 光电对抗研究部</span>
    <h1>招收硕士<br><span class="yc-highlight">研究生</span></h1>
    <p class="yc-hero-lead">机械专业基本按国家线招生。面向机械、热流体与光电工程方向，开展精密机械、流体仿真、强化传热与光机结构研究。</p>
    <div class="yc-actions"><a class="yc-btn yc-btn-red yc-pulse" href="mailto:yuchao@ciomp.ac.cn?subject=咨询遇超导师研究生招生">立即联系</a><a class="yc-btn yc-btn-light" href="https://people.ucas.ac.cn/~yuchao" target="_blank" rel="noopener noreferrer">UCAS 官方主页 ↗</a></div>
  </section>

  <!-- 导师简介与联系提示。 -->
  <div class="yc-grid">
    <section class="yc-window yc-profile yc-reveal"><div class="yc-bar"><i class="yc-dot"></i><i class="yc-dot"></i><i class="yc-dot"></i>导师信息<span class="yc-close">×</span></div><div class="yc-window-body yc-profile-wrap"><img class="yc-portrait" src="{{ '/assets/img/team/yu-chao.jpg' | relative_url }}" alt="遇超导师"><div><h2 class="yc-name">遇超 / Chao Yu</h2><div class="yc-meta"><div><strong>职称：</strong>高级工程师、硕士生导师</div><div><strong>单位：</strong>中国科学院长春光学精密机械与物理研究所</div><div><strong>招生专业：</strong>机械制造及其自动化、流体机械及工程、工程热物理</div><div><strong>邮箱：</strong><a href="mailto:yuchao@ciomp.ac.cn">yuchao@ciomp.ac.cn</a></div></div></div></div></section>
    <aside class="yc-window yc-callout yc-reveal"><div class="yc-bar">重要提示<span class="yc-close">!</span></div><div class="yc-window-body"><h2>机会难得<br>欢迎加入！</h2><p>导师亲自带，资源超给力。欢迎对工程问题有热情、愿意动手验证的同学联系。</p><a class="yc-btn" href="mailto:yuchao@ciomp.ac.cn?subject=申请加入遇超导师课题组">发送申请邮件</a></div></aside>
  </div>

  <!-- 动态数字：data-count 是动画终值，标签内文字是无 JavaScript 时的回退值，两处要同步修改。 -->
  <section class="yc-stats yc-reveal" aria-label="培养与成果数据">
    <div class="yc-stat"><span class="yc-number" data-count="100" data-suffix="%">100%</span><strong>按时毕业率</strong><small>课题组培养情况</small></div>
    <div class="yc-stat"><span class="yc-number" data-count="2" data-suffix=" 篇">2 篇</span><strong>SCI 一区论文</strong><small>另有二区论文 6 篇</small></div>
    <div class="yc-stat"><span class="yc-number" data-count="5" data-suffix=" 年">5 年</span><strong>硕博连读学制</strong><small>具体按培养政策执行</small></div>
    <div class="yc-stat"><span class="yc-number" data-count="5000" data-prefix="≥ " data-suffix=" 元/月">≥ 5000 元/月</span><strong>博士待遇</strong><small>硕士至少 2700 元/月</small></div>
  </section>

  <!-- 研究方向、欢迎专业和学生特质。 -->
  <section class="yc-panels">
    <article class="yc-window yc-panel yc-reveal"><div class="yc-bar">研究方向 / Research<span class="yc-close">×</span></div><div class="yc-window-body"><ul class="yc-list"><li>精密机械制造</li><li>流体力学分析</li><li>强化表面传热</li><li>光电装备热管理与系统集成</li><li>CFD 数值仿真与结构优化</li></ul></div></article>
    <article class="yc-window yc-panel yc-reveal"><div class="yc-bar">欢迎相关专业<span class="yc-close">×</span></div><div class="yc-window-body"><ul class="yc-list"><li>机械工程</li><li>机械电子工程</li><li>车辆工程 / 仪器仪表</li><li>光学工程 / 光电信息</li></ul></div></article>
    <article class="yc-window yc-panel yc-reveal"><div class="yc-bar">我们期待这样的你<span class="yc-close">×</span></div><div class="yc-window-body"><ul class="yc-list"><li>性格开朗，好学上进</li><li>对科研方向有清晰认知</li><li>具有较强的动手能力</li><li>对仿真分析或工程实践感兴趣</li></ul></div></article>
  </section>

  <section class="yc-apply yc-reveal"><h2>加入我们，未来可期！</h2><p>请准备个人简历、成绩单，以及科研或竞赛经历说明。欢迎有志于将机械、热流体、光电工程与国家重大需求相结合的同学申请。</p><div class="yc-actions"><a class="yc-btn yc-btn-red" href="mailto:yuchao@ciomp.ac.cn?subject=申请加入遇超导师课题组">立即申请</a><a class="yc-btn yc-btn-light" href="{{ '/team/' | relative_url }}">返回导师团队</a></div></section>

  <div class="yc-disclaimer"><strong>信息说明：</strong>本页依据现有招生宣传资料整理。招生名额、录取要求、培养学制、论文成果统计及待遇标准可能随政策和实际情况调整，具体以当年中国科学院大学招生政策、培养方案及与导师沟通结果为准。</div>
</main>

<!-- 页面动效：滚动进入视口时显示卡片，并执行数字递增；普通内容更新无需修改。 -->
<script>
document.addEventListener('DOMContentLoaded',function(){
  var reduced=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var items=document.querySelectorAll('.yc-reveal');
  if(reduced||!('IntersectionObserver'in window)){items.forEach(function(el){el.classList.add('is-visible')})}else{
    var reveal=new IntersectionObserver(function(entries){entries.forEach(function(entry){if(entry.isIntersecting){entry.target.classList.add('is-visible');reveal.unobserve(entry.target)}})},{threshold:.12});
    items.forEach(function(el,index){el.style.animationDelay=(index%4)*90+'ms';reveal.observe(el)});
  }
  if(!reduced){document.querySelectorAll('.yc-number[data-count]').forEach(function(el){var target=Number(el.dataset.count),start=null,prefix=el.dataset.prefix||'',suffix=el.dataset.suffix||'';function tick(time){if(!start)start=time;var progress=Math.min((time-start)/900,1),value=Math.round(target*(1-Math.pow(1-progress,3)));el.textContent=prefix+value.toLocaleString('zh-CN')+suffix;if(progress<1)requestAnimationFrame(tick)}requestAnimationFrame(tick)})}
});
</script>
