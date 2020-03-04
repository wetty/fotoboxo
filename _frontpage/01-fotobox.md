---
section-id: "fotobox"
section-heading: "Unsere FotoBox bietet Ihnen"
section-class: 
section-url: "/fotobox/"
section-url-title: "Alle FotoBox Details..."
---
<div class="row">
{% for fadb in site.fotobox limit:8 %}
  <div class="col-lg-3 col-md-6 text-center">
      <div class="service-box">
          <i class="fa fa-4x {{ fadb.icon }} wow bounceIn text-primary"></i>
          <h3>{{ fadb.title }}</h3>
          <p class="text-muted">{{ fadb.intro }}</p>
      </div>
  </div>
{% endfor %}
</div>
