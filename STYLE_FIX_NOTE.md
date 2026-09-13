# Style Fix Note

本版本沿用原站 Minimal Mistakes 4.28.0 的默认主题、侧栏与文章列表样式。首页以本组 CPU 手册为主，新增 YangGroup 资源入口；新资源页同样使用原主题的标题、提示框与表格，并补充适配小屏幕的横向滚动。

主题样式仍通过以下配置生成：

- `assets/css/main.scss`
- 在 `_config.yml` 和 `Gemfile` 中补充 `jekyll-remote-theme`

这样 GitHub Pages 构建时会生成 `assets/css/main.css`，避免页面以无样式的纯 HTML 形式显示。

手册顺序由 `_data/handbook.yml` 统一维护，首页与目录不再按日期分页。搜索沿用主题脚本，由 `assets/js/lunr/lunr-store.js` 生成本地检索数据，以包含新资源栏目；无需新增前端构建工具或外部查询服务。
