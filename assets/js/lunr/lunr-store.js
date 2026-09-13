---
layout: null
---
{% include compute-totals.html %}
{% capture resource_search_text %}
YangGroup 共享计算资源：{{ resources.cpu_clusters | size }} 套 CPU 集群，{{ yang_cpu_nodes }} 个节点、{{ yang_cpu_cores }} 核；{{ resources.gpu_servers | size }} 台 GPU 服务器，{{ yang_gpu_count }} 张 NVIDIA V100。ShangGroup 成员可按组内规则申请，权限与配额需管理员确认。
{% for cluster in resources.cpu_clusters %}{{ cluster.name }}：{% for group in cluster.groups %}{{ group.nodes }} × {{ group.cores_per_node }} 核{% unless forloop.last %} + {% endunless %}{% endfor %}，{{ cluster.scheduler }}。{% endfor %}
{% for server in resources.gpu_servers %}{{ server.name }}：{{ server.gpu_count }} 张 {{ server.model }}，无作业调度系统。{% endfor %}
来源：{{ resources.source_title }}，核对日期 {{ resources.reviewed_on }}。
{% endcapture %}
// Same schema as the theme's local search index. Resource facts share the YAML source.
var store = [
  {% for post in site.posts %}
  {
    "title": {{ post.title | jsonify }},
    "excerpt": {{ post.content | newline_to_br | replace: '<br />', ' ' | replace: '</p>', ' ' | strip_html | strip_newlines | jsonify }},
    "categories": {{ post.categories | jsonify }},
    "tags": {{ post.tags | jsonify }},
    "url": {{ post.url | relative_url | jsonify }},
    "teaser": null
  },
  {% endfor %}
  {
    "title": "YangGroup 共享计算资源",
    "excerpt": {{ resource_search_text | strip_newlines | jsonify }},
    "categories": ["YangGroup"],
    "tags": ["CPU", "GPU", "V100", "PBS", "Slurm"],
    "url": {{ '/yanggroup-resources/' | relative_url | jsonify }},
    "teaser": null
  }
];
