---
title: "FotoBox Classic im Detail"
subtitle: "Alles was die FotoBox leistet"
permalink: /fotobox/foto-box-classic/
---
{% for fadb in site.fotobox %}
  * **{{ fadb.title }}:** {{ fadb.intro }}{% endfor %}

