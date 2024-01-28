---
layout: page
title: Components
description: Collection of sample components
---

<ul>
{% for item in site.components %}
<li><a href="{{ site.baseurl }}{{ item.url }}">{{ item.title }}</a></li>
{% endfor %}
</ul>