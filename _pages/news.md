---
layout: default
title: FotoBox News
subtitle: Die letzten Neuigkeiten
permalink: /news/
---
<section id="blogposts" class="bg-light">
    <!-- Main Content -->
    <div class="container">
<div class="row">
<div class="col-lg-8 col-lg-offset-2 text-center">
{% for post in site.posts %}
	{% include post_blog.html %}
<hr>
{% endfor %}
</div>
</div>
    </div>
</section>
