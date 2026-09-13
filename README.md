# ShangGroup 计算资源与使用手册

ShangGroup 隶属于 YangGroup。本网站汇总本组 HFNL 2 节点 CPU 服务器和上级实验室可按权限申请使用的 CPU / GPU 资源。

## [点击进入 ShangGroup 计算资源使用手册](https://shanghhgroup.github.io/ComputeResources/)

上方链接在 GitHub Pages 部署成功后可访问完整网页，包括本组 HFNL 2 节点 CPU 手册和 YangGroup 共享资源清单。

代码仓库：<https://github.com/shanghhgroup/ComputeResources/>  
网页主页：<https://shanghhgroup.github.io/ComputeResources/>

## 本次更新

- 首页沿用原主题和文章列表样式，以本组 2 节点 CPU 手册为主，增加 YangGroup 资源入口。
- 固定阅读顺序为：总览 → CPU 节点 → 登录 → 软件环境 → Slurm 作业提交 → 存储与网络 → GPU 资源 → 常见问题。全部 8 篇在首页与手册目录完整列出，取消日期倒序和分页；文章前后导航使用同一顺序。
- 保留 `/page2/` 旧书签的兼容目录页，修正实验室 logo 的路径前缀重复问题。
- 新增 `/yanggroup-resources/`，整理 4 套 CPU 集群、5 台 GPU 服务器及使用流程。
- 站内搜索覆盖原有 8 篇手册和 YangGroup 资源；搜索索引中的配置直接读取同一份资源数据。
- YangGroup 明细统计：97 个 CPU 节点、4976 个 CPU 核心，28 张 NVIDIA V100。以上按手册规模计算，不含本组 2 节点，不代表个人配额或实时空闲量。
- CPU：Cluster9 使用 PBS，Cluster10–12 使用 Slurm；GPU 服务器在来源手册中标注为无作业调度系统。
- 修正原有 GPU、FAQ、简介和关于页面的范围表述，保留全部 8 篇原手册的相对路径；本站的网址前缀为 `/ComputeResources`。

来源为《YangGroup 服务器用户手册》，核对日期 2026-09-13。CPU 表格中的 Cluster10 多余标点依据其“两个 144 核心 fat 节点”备注整理为 20 × 28 + 2 × 144。本组 2 节点数量来自维护者说明。未提供的 CPU 型号、内存、GPU 显存或其他配置不补写。

公开包不包含 Notion 原文、原始链接、截图、真实登录地址、凭据或端口映射。完整接入方式通过组内渠道获取。

## 上传到新建的 ComputeResources 仓库

1. 解压本次的 `ComputeResources-GitHub-Pages.zip`。
2. 打开最内层 `ComputeResources` 文件夹，确认能直接看到 `_config.yml` 和 `index.html`。
3. 打开新仓库 `shanghhgroup/ComputeResources`。空仓库可点击 **uploading an existing file**；已有文件时，在发布分支（通常是 `main`）根目录选择 **Add file → Upload files**。拖入内层文件夹中的全部内容，保留子目录结构。不要直接上传 ZIP，也不要将外层 `ComputeResources` 文件夹作为仓库的新子目录。
4. 填写提交说明并提交到 `main`；若有分支保护，先创建分支和 Pull Request，合并到发布分支。空仓库需要先上传并提交文件，Pages 才能选择这个分支。
5. **Settings → Pages → Build and deployment**：此源码包可用 **Deploy from a branch → main → /(root)**。已有自定义 Actions 发布流程时，先确认其构建源和 Pages 设置与本次方案一致。
6. 在 **Actions** 中确认 Pages 构建及部署成功，然后访问 <https://shanghhgroup.github.io/ComputeResources/>。使用免费账号时，仓库需要是 Public 才能使用此 Pages 方案。

`_config.yml` 已配置 `url: https://shanghhgroup.github.io` 与 `baseurl: /ComputeResources`，无需再改路径。不要添加 `.nojekyll`，本包需要 Jekyll 处理 Liquid、Markdown 和 Sass。

`github.com/...` 始终打开代码仓库，不能通过 Pages 设置把该地址变成网页主页。可以在仓库首页的 About 设置中，将 Website 填为上面的 `github.io` 网页地址；本 README 顶部也已提供入口。

官方说明：[上传文件](https://docs.github.com/en/repositories/working-with-files/managing-files/adding-a-file-to-a-repository)、[创建 Pages 网站](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site)、[配置 Pages 发布源](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)。详细步骤另见压缩包配套的《ComputeResources上传与发布指南》。

## 后续维护

| 文件 | 用途 |
|---|---|
| `_data/compute_resources.yml` | 资源名称、节点配置、GPU 数量和核对日期；合计由页面自动计算 |
| `_includes/compute-totals.html` | 根据明细计算汇总，不是实时查询 |
| `_data/handbook.yml` | 首页、手册目录和文章前后导航的固定阅读顺序 |
| `_includes/handbook-list.html` | 使用原主题的文章列表呈现有序目录 |
| `_includes/post_pagination.html` | 按手册顺序跳转上一篇 / 下一篇 |
| `_pages/yanggroup-resources.html` | YangGroup 资源栏目和申请说明 |
| `index.html` | 首页入口 |
| `_data/navigation.yml` | 顶部导航 |
| `assets/css/main.scss` | 沿用原主题，补充表格横向滚动与资源目录样式 |
| `assets/js/lunr/lunr-store.js` | 沿用主题搜索接口，生成手册与 YangGroup 资源的本地检索数据 |
| `_posts/` | 本组服务器原有使用手册 |

修改清单后同步核对页面正文中的数量说明和本 README。任何地址、账号、密钥、内部端口或原始运维材料均不应加入公开仓库。

## 本地构建

需要 Ruby 和 Bundler，在本目录执行：

```sh
bundle install
bundle exec jekyll serve
```

浏览器访问 `http://127.0.0.1:4000/ComputeResources/`。使用现有 GitHub Pages + Minimal Mistakes 4.28.0 主题，无新增前端包、外部数据抓取或监控服务。
