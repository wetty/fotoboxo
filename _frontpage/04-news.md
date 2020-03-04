---
section-id: "news"
section-heading: "FotoBox Neuigkeiten"
section-class: "bg-dark"
section-url: "/news/"
section-url-title: "weitere News..."
---
<div class="row">
<div class="col-lg-8 col-lg-offset-2 text-center">
{% for post in site.posts limit:2 %}
	{% include post_blog.html %}
{% endfor %}
</div>
</div>
