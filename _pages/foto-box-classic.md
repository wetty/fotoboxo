---
title: "FotoBox Classic im Detail"
subtitle: "Alle Details die unsere FotoBox mitbringt"
permalink: /fotobox/foto-box-classic/
---

{% for fadb in site.fotobox %}
<i class="fa fa-5x {{ fadb.icon }} wow bounceIn text-primary pull-left" data-wow-delay=".5s"></i>
  <h3>{{ fadb.title }}</h3>
  {{ fadb.content | markdownify }}<hr>
{% endfor %}
