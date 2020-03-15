---
title: "FotoBox Classic im Detail"
subtitle: "Alle Details die unsere FotoBox mitbringt"
permalink: /fotobox/foto-box-classic/
---

{% for fadb in site.fotobox %}
<p><i class="fa fa-4x {{ fadb.icon }} wow bounceIn text-primary pull-left" data-wow-delay=".4s"></i>
  <h3>{{ fadb.title }}</h3>
  {{ fadb.content | markdownify | remove: "<p>" | remove: "</p>" }}</p>
{% endfor %}
