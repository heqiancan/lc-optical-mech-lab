# 光电对抗研究部机械室网站维护手册

这份文档面向网站内容维护者。网站基于 **Jekyll + al-folio**：你编辑 Markdown、HTML、CSS 和 BibTeX 源文件，Jekyll 将它们生成到 `_site/`，GitHub Actions 再把生成结果发布到 Cloudflare Pages。

## 1. 最常修改的文件

| 想修改的内容                         | 修改位置                   |
| ------------------------------------ | -------------------------- |
| 网站名称、描述、域名、页脚、分享图片 | `_config.yml`              |
| 首页标题、研究方向、导师卡片         | `_pages/about.md`          |
| 研究方向详细介绍                     | `_pages/research.md`       |
| 导师简介、邮箱、官方主页             | `_pages/team.md`           |
| 遇超导师个人页、招生数据和动态效果   | `_pages/yu_chao.md`        |
| 团队论文页面结构                     | `_pages/publications.md`   |
| 论文数据                             | `_bibliography/papers.bib` |
| 招生与联系方式                       | `_pages/join.md`           |
| 导师照片、招生图片                   | `assets/img/team/`         |
| 全站颜色、卡片、按钮和响应式布局     | `assets/css/lab-site.css`  |
| 滚动动画、数字动画和首页 3D 背景     | `assets/js/lab-site.js`    |

不要直接修改以下内容：

- `_site/`：每次构建都会重新生成，手工修改会丢失。
- `package-lock.json`、`Gemfile.lock`：依赖锁定文件，只在升级依赖时由工具更新。
- `reference_files/`：本地原始资料库，不属于公开网站，也不要提交到公开仓库。
- al-folio 插件内部文件：模板运行逻辑由 Ruby gems 提供，普通内容更新不需要修改。

## 2. 页面文件如何工作

每个 `_pages/*.md` 文件顶部都有一段由 `---` 包围的 **front matter**：

```yaml
---
layout: page # 使用 al-folio 的普通页面布局
title: 研究方向 # 浏览器标题和页面标题
permalink: /research/ # 页面公开网址，不建议随意修改
nav: true # 是否显示在顶部导航
nav_order: 2 # 导航排序，数字越小越靠前
---
```

front matter 下方可以混用三种内容：

- Markdown：适合标题、段落、列表和普通链接。
- HTML：适合卡片、按钮和复杂布局。
- Liquid：Jekyll 模板语法，例如 `{{ '/team/' | relative_url }}` 会生成兼容站点路径的链接。

站内链接推荐写法：

```liquid
<a href="{{ '/team/' | relative_url }}">导师团队</a>
```

外部链接推荐写法：

```html
<a href="https://example.com" target="_blank" rel="noopener noreferrer">官方主页</a>
```

## 3. 常见修改操作

### 修改首页文字或导师卡片

编辑 `_pages/about.md`。该文件现在主要保留页面内容结构；全站视觉样式集中在 `assets/css/lab-site.css`，普通文字更新不需要改 CSS。

修改导师照片时，将图片放入 `assets/img/team/`，然后使用：

```liquid
<img src="{{ '/assets/img/team/文件名.jpg' | relative_url }}" alt="导师姓名">
```

文件名建议只用小写英文字母、数字和连字符，例如 `new-teacher.jpg`。替换同名图片后若仍看到旧图，请使用 `Command + Shift + R` 强制刷新。

### 修改论文

编辑 `_bibliography/papers.bib`，每篇论文是一个 BibTeX 条目：

```bibtex
@article{唯一英文标识,
  title   = {论文标题},
  author  = {Yu, Chao and Other, Author},
  journal = {期刊名称},
  year    = {2026},
  doi     = {10.xxxx/xxxxx}
}
```

条目标识必须唯一。论文页 `_pages/publications.md` 会自动读取该文件，通常不需要逐篇修改页面 HTML。

团队批量成果的原始清单位于公开仓库之外的 `reference_files/论文.csv` 和 `reference_files/专利.csv`。批量更新时应：

1. 保留原始 CSV，不直接把它复制到网站资源目录。
2. 论文按 DOI 或标准化标题去重，只发布已公开检索的记录。
3. 有 DOI 时填写 `doi`；没有 DOI 时将公开来源填写到 `html` 字段，al-folio 才会显示链接按钮。
4. 专利只发布已公开检索记录，并区分“已授权”和“公开申请”。
5. 同步更新 `_data/achievements.yml` 的统计和精选论文，以及 `_data/patents.yml` 的公开专利。
6. 构建后核对首页、研究方向页和科研成果页的数量完全一致。

当前方向统计以 `_data/achievements.yml` 为网站数据源；不要只在页面正文中手工修改数字。

### 修改遇超个人页

编辑 `_pages/yu_chao.md`：

- 页面中的 HTML 区块：所有可见内容。
- `assets/css/lab-site.css` 中的 `.yc-*`：该页的卡片布局和响应式样式。
- `data-count`：动态数字的最终值，标签内的静态文字也要同步修改。
- `assets/js/lab-site.js`：入场动画和数字递增；只改文字时不要修改这里。

招生数字和待遇具有时效性，更新后应同步核对页面底部免责声明。

## 4. 本地预览

进入项目目录后运行：

```bash
mise exec -- bundle exec jekyll serve
```

终端出现 `Server address` 后访问：

```text
http://127.0.0.1:4000/
```

停止服务器：在运行预览的终端按 `Control + C`。

`jekyll serve` 默认只会自动重新构建改动的文件，不会自动刷新浏览器页面，需要手动刷新才能看到最新效果。如果想让保存后浏览器也自动刷新，加上 `--livereload`：

```bash
mise exec -- bundle exec jekyll serve --livereload
```

注意：`_config.yml` 的改动不受自动重建/热更新影响，修改后需要重启服务器。

如果 `4000` 端口已被占用，可改用：

```bash
mise exec -- bundle exec jekyll serve --port 4001
```

正式构建检查：

```bash
mise exec -- bundle exec jekyll build
```

本机缺少 ImageMagick 时可能出现 `convert: command not found` 警告；只要构建最后成功完成，现有原图仍可正常使用。云端构建会安装 ImageMagick。

## 5. 发布流程

正常流程是：

1. 修改本地源文件。
2. 本地预览并运行生产构建。
3. 提交并推送到 GitHub 的 `main` 分支。
4. `.github/workflows/deploy-cloudflare-pages.yml` 自动安装依赖、构建 `_site/` 并部署。
5. 打开 <https://lab.heqiancan.com/> 检查结果。

Cloudflare 或浏览器可能短暂缓存旧页面。部署成功后等待约一分钟，再使用 `Command + Shift + R` 强制刷新，或使用无痕窗口检查。

## 6. 修改前后的检查清单

- 页面在浅色和夜间模式下文字都清晰。
- 手机宽度下没有横向滚动、遮挡或超出屏幕。
- 新图片路径、站内链接、邮箱和官方主页能够打开。
- 招生资质、待遇和成果数据带有必要的时效说明。
- `mise exec -- bundle exec jekyll build` 成功。
- Git 提交中不包含 `_site/`、`reference_files/` 或无关锁文件。
