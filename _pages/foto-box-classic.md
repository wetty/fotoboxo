---
title: "FotoBox Classic im Detail"
subtitle: "Alle Details die unsere FotoBox mitbringt"
permalink: /fotobox/foto-box-classic/
---

{% for fadb in site.fotobox %}
 <i class="fa fa-4x {{ fadb.icon }} wow bounceIn text-primary pull-left" data-wow-delay=".4s"></i>
  <h3><i class="fa fa-1x {{ fadb.icon }} wow bounceIn text-primary" data-wow-delay=".4s"></i>&nbsp;{{ fadb.title }}</h3>
  {{ fadb.content | markdownify | remove: "<p>" | remove: "</p>" }}
{% endfor %}
